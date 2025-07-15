Here are refactored-and-tidied versions of the two utilities.
Each file / module now contains

1. A strongly-typed public function that can be invoked from any VB.NET program, unit test, or scheduled task.


2. A conventional Sub Main() wrapper that runs the same logic interactively if you start the EXE directly (or with zero/too-few command-line arguments).



You can therefore reuse the core function inside other code or just double-click/run it as a stand-alone tool.


---

1  Selective File Copier  (SelectiveFileCopier.vb)

Imports System.IO
Imports System.Globalization

Public Module SelectiveFileCopier
    ''' <summary>
    ''' Copies every file in <paramref name="sourceFolder"/> (recursively) that
    ''' matches <paramref name="pattern"/> **and** whose CreationTime or
    ''' LastWriteTime is between <paramref name="fromDate"/> and <paramref name="toDate"/> (inclusive).
    ''' Directory structure is preserved under <paramref name="destinationFolder"/>.
    ''' </summary>
    Public Function CopyFiles( _
            sourceFolder As String,
            destinationFolder As String,
            pattern As String,
            fromDate As Date,
            toDate As Date,
            Optional overwrite As Boolean = True) As Integer

        If Not Directory.Exists(sourceFolder) Then Throw New DirectoryNotFoundException(sourceFolder)
        Directory.CreateDirectory(destinationFolder)

        Dim copied As Integer = 0

        For Each filePath In Directory.EnumerateFiles(sourceFolder, pattern, SearchOption.AllDirectories)
            Dim fi As New FileInfo(filePath)

            If (fi.CreationTime.Date >= fromDate.Date AndAlso fi.CreationTime.Date <= toDate.Date) _
            OrElse (fi.LastWriteTime.Date >= fromDate.Date AndAlso fi.LastWriteTime.Date <= toDate.Date) Then

                Dim rel = filePath.Substring(sourceFolder.Length).TrimStart(Path.DirectorySeparatorChar)
                Dim target = Path.Combine(destinationFolder, rel)
                Directory.CreateDirectory(Path.GetDirectoryName(target))
                File.Copy(filePath, target, overwrite)
                copied += 1
            End If
        Next
        Return copied
    End Function

    '─────────────────────────────────────────────────────────────────────────
    Sub Main(args As String())
        'Usage via CLI:  SelectiveFileCopier.exe src dst pattern from(yyyy-MM-dd) to(yyyy-MM-dd)
        If args.Length >= 5 Then
            Dim rows = CopyFiles(args(0), args(1), args(2),
                                 Date.ParseExact(args(3), "yyyy-MM-dd", CultureInfo.InvariantCulture),
                                 Date.ParseExact(args(4), "yyyy-MM-dd", CultureInfo.InvariantCulture))
            Console.WriteLine($"{rows} file(s) copied.")
            Return
        End If

        'Interactive fallback
        Console.WriteLine("=== Selective File Copier ===" & vbLf)
        Console.Write("Source folder      : ")       : Dim src = Console.ReadLine()
        Console.Write("Destination folder : ")       : Dim dst = Console.ReadLine()
        Console.Write("File pattern (*.*) : ")        : Dim patt = Console.ReadLine() : If(patt="", patt="*.*")
        Console.Write("From date (yyyy-MM-dd): ")     : Dim fd = Date.ParseExact(Console.ReadLine(), "yyyy-MM-dd", CultureInfo.InvariantCulture)
        Console.Write("To   date (yyyy-MM-dd): ")     : Dim td = Date.ParseExact(Console.ReadLine(), "yyyy-MM-dd", CultureInfo.InvariantCulture)

        Dim n = CopyFiles(src, dst, patt, fd, td)
        Console.WriteLine($"{n} file(s) copied.")
    End Sub
End Module

Use from another project

Dim copied = SelectiveFileCopier.CopyFiles(
                 "C:\Data",
                 "D:\Backup",
                 "*.pdf",
                 #2025-01-01#,
                 #2025-06-30#)


---

2  Table-to-Table Data Mover  (TableDataMover.vb)

'Requires: System.Data.SqlClient package (or swap to your provider)

Imports System.Data.SqlClient
Imports System.Globalization

Public Module TableDataMover

    ''' <summary>
    ''' Copies rows from <paramref name="srcTable"/> to <paramref name="dstTable"/> using
    ''' a parameterised INSERT…SELECT.  Column mapping is controlled by
    ''' <paramref name="srcColumns"/> ➜ <paramref name="dstColumnsOrTokens"/>.
    '''
    ''' Special tokens allowed in dstColumnsOrTokens():
    '''   CONST:name=value   ⇒ inserts constant
    '''   SRC:OtherCol       ⇒ repeats a source column
    '''   NOW                ⇒ SYSUTCDATETIME()
    '''   USER               ⇒ SUSER_SNAME()
    ''' </summary>
    Public Function MoveTableData( _
            connectionString As String,
            srcTable As String,
            srcColumns() As String,
            dstTable As String,
            dstColumnsOrTokens() As String) As Integer

        Dim dstCols As New List(Of String)
        Dim selPieces As New List(Of String)
        Dim parameters As New List(Of SqlParameter)

        For i = 0 To dstColumnsOrTokens.Length - 1
            Dim token = dstColumnsOrTokens(i).Trim()

            If token.StartsWith("CONST:", StringComparison.OrdinalIgnoreCase) Then
                Dim parts = token.Substring(6).Split("="c, 2)
                If parts.Length <> 2 Then Throw New ArgumentException($"Bad CONST token: {token}")
                Dim col = parts(0) : Dim val = parts(1)
                Dim pName = $"@p{i}"
                dstCols.Add($"[{col}]")
                selPieces.Add(pName)
                parameters.Add(New SqlParameter(pName, val))

            ElseIf token.StartsWith("SRC:", StringComparison.OrdinalIgnoreCase) Then
                Dim col = token.Substring(4)
                dstCols.Add($"[{col}]")
                selPieces.Add($"s.[{col}]")

            ElseIf token.Equals("NOW", StringComparison.OrdinalIgnoreCase) Then
                dstCols.Add("[InsertedAt]")
                selPieces.Add("SYSUTCDATETIME()")

            ElseIf token.Equals("USER", StringComparison.OrdinalIgnoreCase) Then
                dstCols.Add("[InsertedBy]")
                selPieces.Add("SUSER_SNAME()")

            Else
                dstCols.Add($"[{token}]")
                selPieces.Add($"s.[{srcColumns(i)}]")
            End If
        Next

        Dim sql =
$"INSERT INTO {dstTable} ({String.Join(",", dstCols)})
SELECT {String.Join(",", selPieces)} FROM {srcTable} s;"

        Using con As New SqlConnection(connectionString),
              cmd As New SqlCommand(sql, con)

            parameters.ForEach(Sub(p) cmd.Parameters.Add(p))
            con.Open()
            Return cmd.ExecuteNonQuery()
        End Using
    End Function

    '─────────────────────────────────────────────────────────────────────────
    Sub Main(args As String())
        'CLI usage:
        ' TableDataMover.exe "conn" srcTable srcCols dstTable dstColsTokens
        If args.Length >= 5 Then
            Dim rows = MoveTableData(args(0),
                                     args(1),
                                     args(2).Split(","c),
                                     args(3),
                                     args(4).Split(","c))
            Console.WriteLine($"{rows} row(s) inserted.")
            Return
        End If

        'Interactive fallback
        Console.WriteLine("=== Simple Table Mover ===" & vbLf)
        Console.Write("Connection string: ")         : Dim cs = Console.ReadLine()
        Console.Write("Source table     : ")         : Dim st = Console.ReadLine()
        Console.Write("Source columns (a,b,c): ")     : Dim sc = Console.ReadLine().Split(","c)
        Console.Write("Destination table: ")         : Dim dt = Console.ReadLine()
        Console.Write("Dest cols/tokens : ")          : Dim dc = Console.ReadLine().Split(","c)

        Dim n = MoveTableData(cs, st, sc, dt, dc)
        Console.WriteLine($"{n} row(s) inserted.")
    End Sub
End Module

Use from another project

Dim rows = TableDataMover.MoveTableData(
               "Server=.;Database=Sales;Trusted_Connection=True;",
               "dbo.Orders",
               {"OrderID","CustomerID","Total"},
               "dbo.OrderArchive",
               {"OrderID","CustomerID","Total","CONST:Status=Closed","NOW","USER"})


---

What changed vs. the earlier snippets?

Improvement	Why it matters

Public function (CopyFiles / MoveTableData)	Can be called directly from any library, Windows Service, Azure Function, unit-test, etc.
Interactive Main wrapper	Keeps the convenience of a stand-alone utility without duplicating code.
Command-line override	If you supply positional arguments, the tool runs non-interactively—handy for scheduled tasks or CI/CD scripts.
Strict signatures	All required data is passed as parameters—no hidden reliance on Console.ReadLine() inside the core logic.


Copy each module into its own project or compile them together—both are self-contained.

