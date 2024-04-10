// function get_menu_list() {
//     var course = window.location.pathname.split("/")[4];
//     var path = window.location.pathname.split("/")[5];
//     var file = window.location.pathname.split("/")[6];
//     console.log(course + "_1/2_" + path + "_2/3_" + file);
//     console.log(window.location.pathname);
//     var readtime = "";
//     var author = "";

//     if (path) {
//         switch (path) {
//             case "misc":
//                 get_misc();
//                 break;
//             case "program":
//                 get_programs();
//                 break;
//             default:
//                 break;
//         }
//     }
//     else {
//         get_main();
//     }

//     function get_main() {
//         var cases = [1, 2, 3, 4];
//         for (let i = 0; i < cases.length; i++) {
//             switch (cases[i]) {
//                 case 1:
//                     link = "program/";
//                     date = "Last Updated: Sun January 1, 2023";
//                     title = "Programs done in Class";
//                     desc = "Master the Art of Coding with This Comprehensive Collection of Programs! From Basic to Advanced, This Section has Everything You Need to Excel in the C Language. Get Ready to Code Your Way to Success - Let's Get Coding!";
//                     codetype = "C Programming";
//                     // readtime = "10";
//                     body_blockcards(link, date, title, desc, codetype, readtime, author);
//                     break;
//                 case 2:
//                     link = "../csu1128p/labfile/";
//                     date = "Last Updated: Fri December 30, 2022";
//                     title = "Programs done in Lab File";
//                     desc = "Get Your Coding Skills to the Next Level with This Section! Discover a Wide Range of Programs, From Basic to Advanced, Written in the Dynamic C Language. Join the Coding Revolution and Unleash Your Inner Prodigy - Let's Get Labbing!";
//                     codetype = "C Programming";
//                     // readtime = "10";
//                     body_blockcards(link, date, title, desc, codetype, readtime, author);
//                     break;
//                 case 3:
//                     link = "misc/download";
//                     date = "Last Updated: Mon January 2, 2023";
//                     title = "All Programs Compiled";
//                     desc = "Unleash the Power of Coding with This Section - All the Programs you read, are Compiled and Ready to Use! From Basic to Advanced, This Collection is Written in C and a Compatible file for Both Windows and Linux is available to download. Get Ready to Run Your Code with Confidence - Let's Get Executing!";
//                     codetype = "C Programming";
//                     // readtime = "10";
//                     body_blockcards(link, date, title, desc, codetype, readtime, author);
//                     break;
//                 case 4:
//                     link = "misc/";
//                     date = "Last Updated: Sat January 14, 2023";
//                     title = "Test Your Knowledge";
//                     desc = "Challenge Your Coding Skills with Our Collection of Miscellaneous Programs and Questions! Test Your Knowledge and Master the Art of Coding with Our Comprehensive Selection. Get Ready to Showcase Your Skills - Let's Get Quizzing!";
//                     codetype = "C Programming";
//                     // readtime = "60+";
//                     body_blockcards(link, date, title, desc, codetype, readtime, author);
//                     break;
//                 case 5:
//                     link = "books";
//                     date = "Thu September 27, 2022";
//                     title = "Reference Books";
//                     desc = "Learn where";
//                     // codetype = "HTML";
//                     readtime = "2";
//                     body_blockcards(link, date, title, desc, codetype, readtime, author);
//                     break;
//                 default:
//                     break;
//             }
//         }
//     }
//     function get_misc() {
//         var cases = [1, 2];
//         date = "Last Updated: Sun January 15, 2023";
//         codetype = "C Programming";
//         readtime = "10";
//         for (let i = 0; i < cases.length; i++) {
//             switch (cases[i]) {
//                 case 1:
//                     link = "program";
//                     title = "Miscellaneous Programs";
//                     desc = "Put Your Coding Skills to the Test with Our Collection of Miscellaneous Programs! Brush Up Your Knowledge and Perfect Your Craft with Our Challenging Selection. Get Ready to Prove Your Mastery - Let's Get Testing!";
//                     readtime = "60";
//                     body_blockcards(link, date, title, desc, codetype, readtime, author);
//                     break;
//                 case 2:
//                     link = "question";
//                     title = "Miscellaneous Questions";
//                     desc = "Get Ready for the Real World and Ace Your VIVA with Our Collection of Miscellaneous Questions! Strengthen Your Logical Skills and Master the Art of Problem-Solving with Our Challenging Selection. Get Ready to Take on the World - Let's Get You Prepared!";
//                     readtime = "15";
//                     body_blockcards(link, date, title, desc, codetype, readtime, author);
//                     break;
//                 default:
//                     break;
//             }
//         }
//     }

//     function get_programs() {
//         var cases = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67];
//         for (let i = 0; i < cases.length; i++) {

//             var codetype = "C Language";
//             var d = i + 1;
//             var link = "p" + d;
//             var title = "Program " + d;
//             var readtime = Math.floor(Math.random() * 5) + 2;
//             var author = 1;

//             switch (cases[i]) {
//                 case 1:
//                     // link = "add_link like 'c2' ";
//                     date = "Mon October 3, 2022";
//                     // title = "Program 31 / title += 'append something' ";
//                     desc = "Hello World";
//                     // codetype = "replace here with custom var";
//                     // readtime = "2";
//                     // author = "vp";
//                     body_blockcards(link, date, title, desc, codetype, readtime, author);
//                     break;
//                 case 2:
//                     date = "Mon October 3, 2022";
//                     desc = "Program to calculate sum aftertaking two numbers as input from user.";
//                     body_blockcards(link, date, title, desc, codetype, readtime, author);
//                     break;
//                 case 3:
//                     date = "Tue October 4, 2022";
//                     desc = "Program which demonstrates use of all operators of arithmatic, modulo, relational, logical bitwise, increment, decrement, assignment, and conditional operators.";
//                     body_blockcards(link, date, title, desc, codetype, readtime, author);
//                     break;
//                 case 4:
//                     date = "Tue October 4, 2022";
//                     desc = "Program to find max between 2 digits";
//                     body_blockcards(link, date, title, desc, codetype, readtime, author);
//                     break;
//                 case 5:
//                     date = "Mon October 10, 2022";
//                     desc = "Program to check if an entered year is leap or not without if else statement.";
//                     body_blockcards(link, date, title, desc, codetype, readtime, author);
//                     break;
//                 case 6:
//                     date = "Mon October 10, 2022";
//                     desc = "Program to check if an entered number is even or odd";
//                     body_blockcards(link, date, title, desc, codetype, readtime, author);
//                     break;
//                 case 7:
//                     date = "Tue October 11, 2022";
//                     desc = "Program to check maximum between three numbers";
//                     body_blockcards(link, date, title, desc, codetype, readtime, author);
//                     break;
//                 case 8:
//                     date = "Tue October 11, 2022";
//                     desc = "Program to swap the values with temp.";
//                     body_blockcards(link, date, title, desc, codetype, readtime, author);
//                     break;
//                 case 9:
//                     date = "Tue October 11, 2022";
//                     desc = "Program to swap the values without temp.";
//                     body_blockcards(link, date, title, desc, codetype, readtime, author);
//                     break;
//                 case 10:
//                     date = "Mon October 17, 2022";
//                     desc = "Program to calculate the actual bill under given conditions.";
//                     body_blockcards(link, date, title, desc, codetype, readtime, author);
//                     break;
//                 case 11:
//                     date = "Mon October 17, 2022";
//                     desc = "Program to check if an entered year is leap or not with if else statement.";
//                     body_blockcards(link, date, title, desc, codetype, readtime, author);
//                     break;
//                 case 12:
//                     date = "Mon October 17, 2022";
//                     desc = "Program to calculate the gross salary of employee as per the given norms.";
//                     body_blockcards(link, date, title, desc, codetype, readtime, author);
//                     break;
//                 case 13:
//                     date = "Mon October 17, 2022";
//                     desc = "Program to calculate the insurance premium as per the given norms.";
//                     body_blockcards(link, date, title, desc, codetype, readtime, author);
//                     break;
//                 case 14:
//                     date = "Tue October 18, 2022";
//                     desc = "Program to print numbers between the numbers that the user chooses. Example 1 to 100.";
//                     body_blockcards(link, date, title, desc, codetype, readtime, author);
//                     break;
//                 case 15:
//                     date = "Tue October 18, 2022";
//                     desc = "Program to print even numbers between the numbers that the user chooses. Example 1 to 100.";
//                     body_blockcards(link, date, title, desc, codetype, readtime, author);
//                     break;
//                 case 16:
//                     date = "Tue October 18, 2022";
//                     desc = "Program to print all numbers which are divisible by 5 between the numbers that the user chooses. Example 1 to 100.";
//                     body_blockcards(link, date, title, desc, codetype, readtime, author);
//                     break;
//                 case 17:
//                     date = "Mon October 24, 2022";
//                     desc = "Program to calculate and print the sum of all numbers between the numbers that the user chooses. Example 1 to 100.";
//                     body_blockcards(link, date, title, desc, codetype, readtime, author);
//                     break;
//                 case 18:
//                     date = "Mon October 24, 2022";
//                     desc = "Program to count and print the number of digits in the entered number that the user enters. Example 3310.";
//                     body_blockcards(link, date, title, desc, codetype, readtime, author);
//                     break;
//                 case 19:
//                     date = "Tue October 25, 2022";
//                     desc = "Program to print the sum of the digits a user enters. 370 = 3 + 7 + 0 = 10";
//                     body_blockcards(link, date, title, desc, codetype, readtime, author);
//                     break;
//                 case 20:
//                     date = "Tue October 25, 2022";
//                     desc = "Program to print the fibonacci series till an entered number. Fibonacci series is a series where the number at any point is the sum of previous two numbers. Example 9 = 1 2 3 5 8";
//                     body_blockcards(link, date, title, desc, codetype, readtime, author);
//                     break;
//                 case 21:
//                     date = "Mon October 31, 2022";
//                     desc = "Program to print the table of the number entered by the user. Example 2 = 2 x 1 = 2";
//                     body_blockcards(link, date, title, desc, codetype, readtime, author);
//                     break;
//                 case 22:
//                     date = "Mon October 31, 2022";
//                     desc = "Program to print all numbers which are perfect square between user entered values.";
//                     body_blockcards(link, date, title, desc, codetype, readtime, author);
//                     break;
//                 case 23:
//                     date = "Tue November 1, 2022";
//                     desc = "Program to print all numbers which four digit perfect square and where its first two digit and last two digits are also a perfect square. Example 1681.";
//                     body_blockcards(link, date, title, desc, codetype, readtime, author);
//                     break;
//                 case 24:
//                     date = "Tue November 1, 2022";
//                     desc = "Program to print the armstrong number. An armstrong number is the number where the sum of cube of each digit is equal to the number itself. Example 370 = 27 + 343 + 0 = 370";
//                     body_blockcards(link, date, title, desc, codetype, readtime, author);
//                     break;
//                 case 25:
//                     date = "Mon November 7, 2022";
//                     desc = "Program to print the factorial of the number entered by the user. Example 3 = 3 x 2 x 1 = 3";
//                     body_blockcards(link, date, title, desc, codetype, readtime, author);
//                     break;
//                 case 26:
//                     date = "Mon November 7, 2022";
//                     desc = "Program to print the average of the numbers stored in an array entered by the user.";
//                     body_blockcards(link, date, title, desc, codetype, readtime, author);
//                     break;
//                 case 27:
//                     date = "Mon November 7, 2022";
//                     desc = "Program to print the power of the two numbers entered by the user. (Example: 2 3) = 2 to the power 3 = 8";
//                     body_blockcards(link, date, title, desc, codetype, readtime, author);
//                     break;
//                 case 28:
//                     date = "Tue November 8, 2022";
//                     desc = "Program to find the maximum number from the numbers stored in an array entered by the user.";
//                     body_blockcards(link, date, title, desc, codetype, readtime, author);
//                     break;
//                 case 29:
//                     date = "Tue November 8, 2022";
//                     desc = "Program to demonstrate the nested for loop by printing a right angled triangle.";
//                     body_blockcards(link, date, title, desc, codetype, readtime, author);
//                     break;
//                 case 30:
//                     date = "Tue November 8, 2022";
//                     desc = "Program to print the triangle of numbers of the range entered by the user. Example 3 = 1 2 3 2 1";
//                     body_blockcards(link, date, title, desc, codetype, readtime, author);
//                     break;
//                 case 31:
//                     date = "Mon November 14, 2022";
//                     desc = "Program to print the triangle of numbers of the range entered by the user. Example 3 = 3 2 1 2 3";
//                     author = "vp";
//                     body_blockcards(link, date, title, desc, codetype, readtime, author);
//                     break;
//                 case 32:
//                     date = "Mon November 14, 2022";
//                     desc = "Program to print the rhombus of numbers of the range entered by the user. Example 3 = 3 2 1 2 3";
//                     author = "vp";
//                     body_blockcards(link, date, title, desc, codetype, readtime, author);
//                     break;
//                 case 33:
//                     date = "Mon November 14, 2022";
//                     desc = "Program to take the full name entered by the user and store it in an array. Example: dmj.one";
//                     body_blockcards(link, date, title, desc, codetype, readtime, author);
//                     break;
//                 case 34:
//                     date = "Tue November 15, 2022";
//                     desc = "Program to count the number of words in the sentence entered by the user. Example: This is dmj.one and you are learning about a code made in C: Total Words = 14.";
//                     body_blockcards(link, date, title, desc, codetype, readtime, author);
//                     break;
//                 case 35:
//                     date = "Tue November 15, 2022";
//                     desc = "Program to take the matrix size and then take the value of matrix entered by the user and print them. Example: 2 2 |1 2 3 4| = |1 2 3 4|";
//                     body_blockcards(link, date, title, desc, codetype, readtime, author);
//                     break;
//                 case 36:
//                     date = "Tue November 15, 2022";
//                     desc = "Program to find the trace of a matrix or sum of diagonals of a matrix entered by the user. Example: 2 2 : |1 2 3 4| i.e. diagnonal1 =  1 + 4 = 5";
//                     body_blockcards(link, date, title, desc, codetype, readtime, author);
//                     break;
//                 case 37:
//                     date = "Mon November 21, 2022";
//                     desc = "Program to take the array size and its elments from the user and sort them. Example:3, 2, 9, 1 = 1, 2, 3, 9";
//                     body_blockcards(link, date, title, desc, codetype, readtime, author);
//                     break;
//                 case 38:
//                     date = "Mon November 21, 2022";
//                     desc = "Program to apply bubble sort on the array entered by the user. Example:3, 2, 9, 1 = 1, 2, 3, 9";
//                     body_blockcards(link, date, title, desc, codetype, readtime, author);
//                     break;
//                 case 39:
//                     date = "Tue November 22, 2022";
//                     desc = "Program to find sum of all elements of an array entered by the user. Example:3, 2, 9, 1 = 15";
//                     body_blockcards(link, date, title, desc, codetype, readtime, author);
//                     break;
//                 case 40:
//                     date = "Tue November 22, 2022";
//                     desc = "Program to store 5 names entered by the user in an array and display them.";
//                     body_blockcards(link, date, title, desc, codetype, readtime, author);
//                     break;
//                 case 41:
//                     date = "Mon November 28, 2022";
//                     desc = "Program to add two matrices entered by the user.";
//                     body_blockcards(link, date, title, desc, codetype, readtime, author);
//                     break;
//                 case 42:
//                     date = "Mon November 28, 2022";
//                     desc = "Program to multiply two matrices entered by the user.";
//                     body_blockcards(link, date, title, desc, codetype, readtime, author);
//                     break;
//                 case 43:
//                     date = "Tue November 29, 2022";
//                     desc = "Program to find sum of two numbers entered by the user through function.";
//                     body_blockcards(link, date, title, desc, codetype, readtime, author);
//                     break;
//                 case 44:
//                     date = "Tue November 29, 2022";
//                     desc = "Program to print name and age entered by the user using function.";
//                     body_blockcards(link, date, title, desc, codetype, readtime, author);
//                     break;
//                 case 45:
//                     date = "Tue November 29, 2022";
//                     desc = "Program to make function blocks as a calculator which calculates the operations entered by the user.";
//                     body_blockcards(link, date, title, desc, codetype, readtime, author);
//                     break;
//                 case 46:
//                     date = "Mon December 5, 2022";
//                     desc = "Program to generate total sum for the sequence x^1/1! + x^2/2! + x^3/3! + .....where x is entered by the user.";
//                     body_blockcards(link, date, title, desc, codetype, readtime, author);
//                     break;
//                 case 47:
//                     date = "Mon December 5, 2022";
//                     desc = "Program to take input of name entered by the user through a function block and output it.";
//                     body_blockcards(link, date, title, desc, codetype, readtime, author);
//                     break;
//                 case 48:
//                     date = "Mon December 5, 2022";
//                     desc = "Program to generate factorial of the number entered by the user through function recursion.";
//                     body_blockcards(link, date, title, desc, codetype, readtime, author);
//                     break;
//                 case 49:
//                     date = "Tue December 6, 2022";
//                     desc = "Program to generate fibonacci series till the number of terms entered by the user through function recursion.";
//                     body_blockcards(link, date, title, desc, codetype, readtime, author);
//                     break;
//                 case 50:
//                     date = "Tue December 6, 2022";
//                     desc = "Program to generate rhombus (Program 32) by using the number entered by the user through function recursion.";
//                     body_blockcards(link, date, title, desc, codetype, readtime, author);
//                     break;
//                 case 51:
//                     date = "Tue December 6, 2022";
//                     desc = "Program to assign value of d entered by the user to value of m by pointers.";
//                     body_blockcards(link, date, title, desc, codetype, readtime, author);
//                     break;
//                 case 52:
//                     date = "Mon December 12, 2022";
//                     desc = "Program to demonstrate the pointers.";
//                     body_blockcards(link, date, title, desc, codetype, readtime, author);
//                     break;
//                 case 53:
//                     date = "Mon December 12, 2022";
//                     desc = "Program to check the use of pointers an its use of address space.";
//                     body_blockcards(link, date, title, desc, codetype, readtime, author);
//                     break;
//                 case 54:
//                     date = "Mon December 12, 2022";
//                     desc = "Program to calculate the value of Sin(x) series where x entered by the user. Sin series is sin(x): x - x^3/3! + x^5/5! - x^7/7! + x^9/9! ....";
//                     body_blockcards(link, date, title, desc, codetype, readtime, author);
//                     break;
//                 case 55:
//                     date = "Tue December 13, 2022";
//                     desc = "Program to calculate the value of sine and cosine series where \n\tsin(x) = a₀ + a₁cos(x) + a₂cos(2x) + a₃cos(3x) + ... + ancos(nx) and\n \t cos(x) = b₀ + b₁cos(x) + b₂cos(2x) + b₃cos(3x) + ... + bncos(nx)\n x is entered by the user.";
//                     body_blockcards(link, date, title, desc, codetype, readtime, author);
//                     break;
//                 case 56:
//                     date = "Tue December 13, 2022";
//                     desc = "Program for swapping of two numbers entered by the user through call by value method.";
//                     body_blockcards(link, date, title, desc, codetype, readtime, author);
//                     break;
//                 case 57:
//                     date = "Tue December 13, 2022";
//                     desc = "Program for swapping of two numbers entered by the user through call by reference method.";
//                     body_blockcards(link, date, title, desc, codetype, readtime, author);
//                     break;
//                 case 58:
//                     date = "Mon December 19, 2022";
//                     desc = "Program to convert a sentence entered by the user to uppercase without using any external library.";
//                     body_blockcards(link, date, title, desc, codetype, readtime, author);
//                     break;
//                 case 59:
//                     date = "Mon December 19, 2022";
//                     desc = "Program to convert a sentence entered by the user to uppercase by using the external library ctype.h";
//                     body_blockcards(link, date, title, desc, codetype, readtime, author);
//                     break;
//                 case 60:
//                     date = "Tue December 20, 2022";
//                     desc = "Program to convert a sentence entered by the user to lowercase by using the external library ctype.h";
//                     body_blockcards(link, date, title, desc, codetype, readtime, author);
//                     break;
//                 case 61:
//                     date = "Tue December 20, 2022";
//                     desc = "Program to bubble sort an array entered by the user.";
//                     body_blockcards(link, date, title, desc, codetype, readtime, author);
//                     break;
//                 case 62:
//                     date = "Tue December 20, 2022";
//                     desc = "Program to demonstrate the structures in C by values entered by the user.";
//                     body_blockcards(link, date, title, desc, codetype, readtime, author);
//                     break;
//                 case 63:
//                     date = "Mon December 26, 2022";
//                     desc = "Program to demonstrate the array of structures in C by the values entered by the user.";
//                     body_blockcards(link, date, title, desc, codetype, readtime, author);
//                     break;
//                 case 64:
//                     date = "Mon December 26, 2022";
//                     desc = "Program to demonstrate the macro in C by finding the square of the value entered by the user.";
//                     body_blockcards(link, date, title, desc, codetype, readtime, author);
//                     break;
//                 case 65:
//                     date = "Mon December 26, 2022";
//                     desc = "Program to demonstrate the macro by finding the cube of the value entered by the user.";
//                     body_blockcards(link, date, title, desc, codetype, readtime, author);
//                     break;
//                 case 66:
//                     date = "Tue December 27, 2022";
//                     desc = "Program to demonstrate the file handling by saving the values entered by the user.";
//                     body_blockcards(link, date, title, desc, codetype, readtime, author);
//                     break;
//                 case 67:
//                     date = "Tue December 27, 2022";
//                     desc = "Program to demonstrate the dynamic memory allocation techniques in C by the values entered by the user.";
//                     body_blockcards(link, date, title, desc, codetype, readtime, author);
//                     break;
//                 default:
//                     link = "#";
//                     date = "Not Applicable";
//                     title = "Classes for current course " + course + " has not been defined.";
//                     desc = "Please define a hierchy for the classes of course " + course + ".";
//                     codetype = "#CourseNotDefined";
//                     readtime = "0";
//                     body_blockcards(link, date, title, desc, codetype, readtime, author);
//                     break;
//             }
//         }
//     }
// }



function get_menu_list(datetogen) {
    function get_main(def_date, def_author) {
        const arr = [
            {
                link: "theory/",
                title: "Theory: Dive into the World of Logic Building with Computer Programming using C: A Comprehensive Guide",
                desc: "Unlock the full potential of your computer programming skills with our in-depth guide to all the concepts. Take your programming skills from zero to hero or to the next level and discover a world of endless coding possibilities. Click now to embark on your Programming journey.",
                codetype: "CSU1128 | Concepts"
            },
            {
                link: "program/",
                date: "Last Updated: Sun January 1, 2023",
                title: "Programs done in Class",
                desc: "Master the Art of Coding with This Comprehensive Collection of Programs! From Basic to Advanced, This Section has Everything You Need to Excel in the C Language. Get Ready to Code Your Way to Success - Let's Get Coding!",
                codetype: "CSU1128 | Programs",
            },
            {
                link: "../csu1128p/labfile/",
                date: "Last Updated: Fri December 30, 2022",
                title: "Programs done in Lab File",
                desc: "Get Your Coding Skills to the Next Level with This Section! Discover a Wide Range of Programs, From Basic to Advanced, Written in the Dynamic C Language. Join the Coding Revolution and Unleash Your Inner Prodigy - Let's Get Labbing!",
                codetype: "CSU1128P | Lab File",
            },
            {
                link: "misc/download",
                date: "Last Updated: Mon January 2, 2023",
                title: "All Programs Compiled",
                desc: "Unleash the Power of Coding with This Section - All the Programs you read, are Compiled and Ready to Use! From Basic to Advanced, This Collection is Written in C and a Compatible file for Both Windows and Linux is available to download. Get Ready to Run Your Code with Confidence - Let's Get Executing!",
                codetype: "CSU1128 | Miscellaneous",
            },
            {
                link: "misc/",
                date: "Last Updated: Sat January 14, 2023",
                title: "Test Your Knowledge",
                desc: "Challenge Your Coding Skills with Our Collection of Miscellaneous Programs and Questions! Test Your Knowledge and Master the Art of Coding with Our Comprehensive Selection. Get Ready to Showcase Your Skills - Let's Get Quizzing!",
                codetype: "CSU1128 | Miscellaneous",
            },

            // {
            //     link: "practical/",
            //     title: "Practical: Elevate Your Java Programming Skills: A Comprehensive Guide for Lab Enthusiasts",
            //     desc: "Unleash your potential in the Java programming lab with our comprehensive guide covering all the essential concepts. Discover the magic of code and take your programming skills to the next level. Click now to embark on your Java journey.",
            //     codetype: "CSU1291P | Practical"
            // },

        ];
        for (let i = 0; i < arr.length; i++) {
            const _data = arr[i];
            title = _data.title || null; if (!title) continue; // Set the title and if thats not possible, skip the loop
            link = _data.link || null;
            date = _data.date ? _data.date : `${gendate(def_date)}`;
            desc = _data.desc || `${title}`;
            codetype = _data.codetype ? `${_data.codetype}` : `CSU1128`;
            readtime = _data.readtime || r(4); readtime = null; // Null readtime - Special Case
            author = _data.author || def_author; author = null; // Null author - Special Case
            cardimage = _data.cardimage || null;
            semester = _data.semester || null;
            body_blockcards(link, date, title, desc, codetype, readtime, author, semester, cardimage);
        }
    }
    function get_theory(def_date, def_author) {
        const arr = [
            // {
            //     title: "The Digital Revolution: A Thrilling Introduction to Digital Electronics",
            //     desc: "Join the revolution and discover the magic of digital electronics with our exciting introduction to the world of digital circuits and systems. From binary code to microprocessors, our guide covers all the essentials. Click now to embark on an electrifying journey into the digital realm!",
            //     codetype: "Introduction",
            //     readtime: r(15)
            // },
            {
                title: "What is a Computer",
                desc: "WIP - What is a computer - Below Basics",
                codetype: "Introduction",
                link: "what-is-a-computer"
            },
            {
                title: "What is a Logic Building",
                desc: "WIP - What is Logic Building",
                codetype: "Introduction",
                link: "logic-building"
            },
        ];
        for (let i = 0; i < arr.length; i++) {
            const _data = arr[i];
            title = _data.title || null; if (!title) continue; // Set the title and if thats not possible, skip the loop
            link = _data.link || `c${i + 1}`;
            date = _data.date ? _data.date : `${gendate(def_date)}`;
            desc = _data.desc || `${title} ${i}`;
            codetype = _data.codetype ? `CSU1128 | ${_data.codetype}` : `CSU1128 | Concepts`;
            readtime = _data.readtime || r(4);
            author = _data.author || def_author;
            cardimage = _data.cardimage || null;
            semester = _data.semester || null;
            body_blockcards(link, date, title, desc, codetype, readtime, author, semester, cardimage);
        }
    }
    function get_programs(def_date, def_author) {
        const arr = [            
            {
                date: "Mon October 3, 2022",
                desc: "Hello World",
            },
            {
                date: "Mon October 3, 2022",
                desc: "Program to calculate sum aftertaking two numbers as input from user.",
            },
            {
                date: "Tue October 4, 2022",
                desc: "Program which demonstrates use of all operators of arithmatic, modulo, relational, logical bitwise, increment, decrement, assignment, and conditional operators.",
            },
            {
                date: "Tue October 4, 2022",
                desc: "Program to find max between 2 digits",
            },
            {
                date: "Mon October 10, 2022",
                desc: "Program to check if an entered year is leap or not without if else statement",
            },
            {
                date: "Mon October 10, 2022",
                desc: "Program to check if an entered number is even or odd",
            },
            {
                date: "Tue October 11, 2022",
                desc: "Program to check maximum between three numbers",
            },

            {
                date: "Tue October 11, 2022",
                desc: "Program to swap the values with temp.",
            },

            {
                date: "Tue October 11, 2022",
                desc: "Program to swap the values without temp.",
            },

            {
                date: "Mon October 17, 2022",
                desc: "Program to calculate the actual bill under given conditions.",
            },

            {
                date: "Mon October 17, 2022",
                desc: "Program to check if an entered year is leap or not with if else statement.",
            },

            {
                date: "Mon October 17, 2022",
                desc: "Program to calculate the gross salary of employee as per the given norms.",
            },

            {
                date: "Mon October 17, 2022",
                desc: "Program to calculate the insurance premium as per the given norms.",
            },

            {
                date: "Tue October 18, 2022",
                desc: "Program to print numbers between the numbers that the user chooses. Example 1 to 100.",
            },

            {
                date: "Tue October 18, 2022",
                desc: "Program to print even numbers between the numbers that the user chooses. Example 1 to 100.",
            },

            {
                date: "Tue October 18, 2022",
                desc: "Program to print all numbers which are divisible by 5 between the numbers that the user chooses. Example 1 to 100.",
            },

            {
                date: "Mon October 24, 2022",
                desc: "Program to calculate and print the sum of all numbers between the numbers that the user chooses. Example 1 to 100.",
            },

            {
                date: "Mon October 24, 2022",
                desc: "Program to count and print the number of digits in the entered number that the user enters. Example 3310.",
            },
            {
                date: "Tue October 25, 2022",
                desc: "Program to print the sum of the digits a user enters. 370 = 3 + 7 + 0 = 10",
            },
            {
                date: "Tue October 25, 2022",
                desc: "Program to print the fibonacci series till an entered number. Fibonacci series is a series where the number at any point is the sum of previous two numbers. Example 9 = 1 2 3 5 8",
            },
            {
                date: "Mon October 31, 2022",
                desc: "Program to print the table of the number entered by the user. Example 2 = 2 x 1 = 2",
            },
            {
                date: "Mon October 31, 2022",
                desc: "Program to print all numbers which are perfect square between user entered values.",
            },
            {
                date: "Tue November 1, 2022",
                desc: "Program to print all numbers which four digit perfect square and where its first two digit and last two digits are also a perfect square. Example 1681.",
            },
            {
                date: "Tue November 1, 2022",
                desc: "Program to print the armstrong number. An armstrong number is the number where the sum of cube of each digit is equal to the number itself. Example 370 = 27 + 343 + 0 = 370",
            },
            {
                date: "Mon November 7, 2022",
                desc: "Program to print the factorial of the number entered by the user. Example 3 = 3 x 2 x 1 = 3",
            },
            {
                date: "Mon November 7, 2022",
                desc: "Program to print the average of the numbers stored in an array entered by the user.",
            },
            {
                date: "Mon November 7, 2022",
                desc: "Program to print the power of the two numbers entered by the user. (Example: 2 3) = 2 to the power 3 = 8",
            },
            {
                date: "Tue November 8, 2022",
                desc: "Program to find the maximum number from the numbers stored in an array entered by the user.",
            },
            {
                date: "Tue November 8, 2022",
                desc: "Program to demonstrate the nested for loop by printing a right angled triangle.",
            },
            {
                date: "Tue November 8, 2022",
                desc: "Program to print the triangle of numbers of the range entered by the user. Example 3 = 1 2 3 2 1",
            },
            {
                date: "Mon November 14, 2022",
                desc: "Program to print the triangle of numbers of the range entered by the user. Example 3 = 3 2 1 2 3",
                author: "vp"
            },
            {
                date: "Mon November 14, 2022",
                desc: "Program to print the rhombus of numbers of the range entered by the user. Example 3 = 3 2 1 2 3",
                author: "vp"
            },
            {
                date: "Mon November 14, 2022",
                desc: "Program to take the full name entered by the user and store it in an array. Example: dmj.one",
            },
            {
                date: "Tue November 15, 2022",
                desc: "Program to count the number of words in the sentence entered by the user. Example: This is dmj.one and you are learning about a code made in C: Total Words = 14.",
            },
            {
                date: "Tue November 15, 2022",
                desc: "Program to take the matrix size and then take the value of matrix entered by the user and print them. Example: 2 2 |1 2 3 4| = |1 2 3 4|",
            },
            {
                date: "Tue November 15, 2022",
                desc: "Program to find the trace of a matrix or sum of diagonals of a matrix entered by the user. Example: 2 2 : |1 2 3 4| i.e. diagnonal1 =  1 + 4 = 5",
            },
            {
                date: "Mon November 21, 2022",
                desc: "Program to take the array size and its elments from the user and sort them. Example:3, 2, 9, 1 = 1, 2, 3, 9",
            },
            {
                date: "Mon November 21, 2022",
                desc: "Program to apply bubble sort on the array entered by the user. Example:3, 2, 9, 1 = 1, 2, 3, 9",
            },
            {
                date: "Tue November 22, 2022",
                desc: "Program to find sum of all elements of an array entered by the user. Example:3, 2, 9, 1 = 15",
            },
            {
                date: "Tue November 22, 2022",
                desc: "Program to store 5 names entered by the user in an array and display them.",
            },
            {
                date: "Mon November 28, 2022",
                desc: "Program to add two matrices entered by the user.",
            },
            {
                date: "Mon November 28, 2022",
                desc: "Program to multiply two matrices entered by the user.",
            },
            {
                date: "Tue November 29, 2022",
                desc: "Program to find sum of two numbers entered by the user through function.",
            },
            {
                date: "Tue November 29, 2022",
                desc: "Program to print name and age entered by the user using function.",
            },
            {
                date: "Tue November 29, 2022",
                desc: "Program to make function blocks as a calculator which calculates the operations entered by the user.",
            },
            {
                date: "Mon December 5, 2022",
                desc: "Program to generate total sum for the sequence x^1/1! + x^2/2! + x^3/3! + .....where x is entered by the user.",
            },
            {
                date: "Mon December 5, 2022",
                desc: "Program to take input of name entered by the user through a function block and output it.",
            },
            {
                date: "Mon December 5, 2022",
                desc: "Program to generate factorial of the number entered by the user through function recursion.",
            },
            {
                date: "Tue December 6, 2022",
                desc: "Program to generate fibonacci series till the number of terms entered by the user through function recursion.",
            },
            {
                date: "Tue December 6, 2022",
                desc: "Program to generate rhombus (Program 32) by using the number entered by the user through function recursion.",
            },
            {
                date: "Tue December 6, 2022",
                desc: "Program to assign value of d entered by the user to value of m by pointers.",
            },
            {
                date: "Mon December 12, 2022",
                desc: "Program to demonstrate the pointers.",
            },
            {
                date: "Mon December 12, 2022",
                desc: "Program to check the use of pointers an its use of address space.",
            },
            {
                date: "Mon December 12, 2022",
                desc: "Program to calculate the value of Sin(x) series where x entered by the user. Sin series is sin(x): x - x^3/3! + x^5/5! - x^7/7! + x^9/9! ....",
            },
            {
                date: "Tue December 13, 2022",
                desc: "Program to calculate the value of sine and cosine series where \n\tsin(x) = a₀ + a₁cos(x) + a₂cos(2x) + a₃cos(3x) + ... + ancos(nx) and\n \t cos(x) = b₀ + b₁cos(x) + b₂cos(2x) + b₃cos(3x) + ... + bncos(nx)\n x is entered by the user.",
            },
            {
                date: "Tue December 13, 2022",
                desc: "Program for swapping of two numbers entered by the user through call by value method.",
            },
            {
                date: "Tue December 13, 2022",
                desc: "Program for swapping of two numbers entered by the user through call by reference method.",
            },
            {
                date: "Mon December 19, 2022",
                desc: "Program to convert a sentence entered by the user to uppercase without using any external library.",
            },
            {
                date: "Mon December 19, 2022",
                desc: "Program to convert a sentence entered by the user to uppercase by using the external library ctype.h",
            },
            {
                date: "Tue December 20, 2022",
                desc: "Program to convert a sentence entered by the user to lowercase by using the external library ctype.h",
            },
            {
                date: "Tue December 20, 2022",
                desc: "Program to bubble sort an array entered by the user.",
            },
            {
                date: "Tue December 20, 2022",
                desc: "Program to demonstrate the structures in C by values entered by the user.",
            },
            {
                date: "Mon December 26, 2022",
                desc: "Program to demonstrate the array of structures in C by the values entered by the user.",
            },
            {
                date: "Mon December 26, 2022",
                desc: "Program to demonstrate the macro in C by finding the square of the value entered by the user.",
            },
            {
                date: "Mon December 26, 2022",
                desc: "Program to demonstrate the macro by finding the cube of the value entered by the user.",
            },
            {
                date: "Tue December 27, 2022",
                desc: "Program to demonstrate the file handling by saving the values entered by the user.",
            },
            {
                date: "Tue December 27, 2022",
                desc: "Program to demonstrate the dynamic memory allocation techniques in C by the values entered by the user.",
            },


        ];
        for (let i = 0; i < arr.length; i++) {
            const _data = arr[i];
            title = _data.title || `Program ${i + 1}`; if (!title) continue; // Set the title and if thats not possible, skip the loop
            link = _data.link || `p${i + 1}`;
            date = _data.date ? _data.date : `${gendate(def_date)}`;
            desc = _data.desc || `${title} ${i}`;
            codetype = _data.codetype ? `CSU1128 | ${_data.codetype}` : `CSU1128 | Programs`;
            readtime = _data.readtime || r(5);
            author = _data.author || def_author;
            cardimage = _data.cardimage || null;
            semester = _data.semester || null;
            body_blockcards(link, date, title, desc, codetype, readtime, author, semester, cardimage);
        }
    }
    function get_misc(def_date, def_author) {
        const arr = [
            {
                link: "program",
                title: "Miscellaneous Programs",
                desc: "Put Your Coding Skills to the Test with Our Collection of Miscellaneous Programs! Brush Up Your Knowledge and Perfect Your Craft with Our Challenging Selection. Get Ready to Prove Your Mastery - Let's Get Testing!",
                date: "Sun January 15, 2023"
            },
            {
                link: "question",
                title: "Miscellaneous Questions",
                desc: "Get Ready for the Real World and Ace Your VIVA with Our Collection of Miscellaneous Questions! Strengthen Your Logical Skills and Master the Art of Problem-Solving with Our Challenging Selection. Get Ready to Take on the World - Let's Get You Prepared!",
                date: "Sun January 15, 2023"
            },
        ];
        for (let i = 0; i < arr.length; i++) {
            const _data = arr[i];
            title = _data.title || null; if (!title) continue; // Set the title and if thats not possible, skip the loop
            link = _data.link || `p${i + 1}`;
            date = _data.date ? _data.date : `${gendate(def_date)}`;
            desc = _data.desc || `${title} ${i}`;
            codetype = _data.codetype ? `CSU1128 | ${_data.codetype}` : `CSU1128 | Misc`;
            readtime = _data.readtime || r(15);
            author = _data.author || def_author;
            cardimage = _data.cardimage || null;
            semester = _data.semester || null;
            body_blockcards(link, date, title, desc, codetype, readtime, author, semester, cardimage);
        }
    }


    /**********  AUTOMATION CONTROL **********/
    // Get Random date near the entered date. 
    function gendate(date) {
        var inputDate = new Date(date);
        var offset = Math.floor(Math.random() * 20 - 10) * 24 * 60 * 60 * 1000;
        var newDate = new Date(inputDate.getTime() + offset);
        var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        var weekdays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
        var outputDate = weekdays[newDate.getUTCDay()] + " " + months[newDate.getUTCMonth()] + " " + newDate.getUTCDate() + ", " + newDate.getUTCFullYear();
        return outputDate;
    }
    function r(t) { return Math.floor(Math.random() * 10) + t }
    var title, desc, codetype, readtime, author = 1, link, semester, cardimage;
    const functions = {
        theory: get_theory,
        program: get_programs,
        misc: get_misc,
        default: get_main
    };
    (functions[window.urlpart5] || functions.default)(datetogen, author);
}