function get_menu_list(datetogen) {
    function get_main(def_date, def_author) {

        let download_link;
        if (navigator.platform.startsWith('Win')) {
            download_link = "https://cdn.dmj.one/edu/su/course/csu1128/csu1128_all.exe"
        } else {
            download_link = "https://cdn.dmj.one/edu/su/course/csu1128/csu1128_all";
        }

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
                title: "All Programs Compiled",
                date: "Mon January 2, 2023",
                desc: "Unleash the Power of Coding with This Section - All the Programs you read, are Compiled and Ready to Use! From Basic to Advanced, This Collection is Written in C and a Compatible file for Both Windows and Linux is available to download. Get Ready to Run Your Code with Confidence - Let's Get Executing! <br><br><a href=\"https://cdn.dmj.one/edu/su/course/csu1128/csu1128_all.exe\" class=\"text-primary\"><strong>Click here </strong></a> to download <mark>For Windows</mark><br><a href=\"https://cdn.dmj.one/edu/su/course/csu1128/csu1128_all\" class=\"text-primary\"><strong>Click here</strong> </a> to download <mark>For Linux</mark>",
                codetype: "CSU1128 | Download Code",
                link: download_link,
            },
            {
                link: "misc/",
                date: "Last Updated: Sat January 14, 2023",
                title: "Test Your Knowledge",
                desc: "Challenge Your Coding Skills with Our Collection of Miscellaneous Programs and Questions! Test Your Knowledge and Master the Art of Coding with Our Comprehensive Selection. Get Ready to Showcase Your Skills - Let's Get Quizzing!",
                codetype: "CSU1128 | Miscellaneous",
            },
        ];
        body_genmenu.processData(arr, def_date, def_author, { isMainCategory: true });
    }
    function get_theory(def_date, def_author) {
        const arr = [
            {
                title: "What is a Computer",
                desc: "What is a Computer? A Comprehensive Guide to the World of Computers and Computing",
                codetype: "Introduction",
                link: "what-is-a-computer"
            },
            {
                title: "What is a Logic Building",
                desc: "What is a Logic Building? A Comprehensive Guide to the World of Logic Building and Problem Solving",
                codetype: "Introduction",
                link: "logic-building"
            },
        ];
        body_genmenu.processData(arr, def_date, def_author);
    }
    function get_programs(def_date, def_author) {
        const arr = [            
            {
                date: "Mon October 3, 2022",
                title: "Hello World",
                link: "p1"
            },
            {
                date: "Mon October 3, 2022",
                title: "Program to calculate sum aftertaking two numbers as input from user.",
                link: "p2"
            },
            {
                date: "Tue October 4, 2022",
                title: "Program which demonstrates use of all operators of arithmatic, modulo, relational, logical bitwise, increment, decrement, assignment, and conditional operators.",
                link: "p3"
            },
            {
                date: "Tue October 4, 2022",
                title: "Program to find max between 2 digits",
                link: "p4"
            },
            {
                date: "Mon October 10, 2022",
                title: "Program to check if an entered year is leap or not without if else statement",
                link: "p5"
            },
            {
                date: "Mon October 10, 2022",
                title: "Program to check if an entered number is even or odd",
                link: "p6"
            },
            {
                date: "Tue October 11, 2022",
                title: "Program to check maximum between three numbers",
                link: "p7"
            },

            {
                date: "Tue October 11, 2022",
                title: "Program to swap the values with temp.",
                link: "p8"
            },

            {
                date: "Tue October 11, 2022",
                title: "Program to swap the values without temp.",
                link: "p9"
            },

            {
                date: "Mon October 17, 2022",
                title: "Program to calculate the actual bill under given conditions.",
                link: "p10"
            },

            {
                date: "Mon October 17, 2022",
                title: "Program to check if an entered year is leap or not with if else statement.",
                link: "p11"
            },

            {
                date: "Mon October 17, 2022",
                title: "Program to calculate the gross salary of employee as per the given norms.",
                link: "p12"
            },

            {
                date: "Mon October 17, 2022",
                title: "Program to calculate the insurance premium as per the given norms.",
                link: "p13"
            },

            {
                date: "Tue October 18, 2022",
                title: "Program to print numbers between the numbers that the user chooses. Example 1 to 100.",
                link: "p14"
            },            
            {
                date: "Tue October 18, 2022",
                title: "Program to print even numbers between the numbers that the user chooses. Example 1 to 100.",
                link: "p15"
            },

            {
                date: "Tue October 18, 2022",
                title: "Program to print all numbers which are divisible by 5 between the numbers that the user chooses. Example 1 to 100.",
                link: "p16"
            },

            {
                date: "Mon October 24, 2022",
                title: "Program to calculate and print the sum of all numbers between the numbers that the user chooses. Example 1 to 100.",
                link: "p17"
            },

            {
                date: "Mon October 24, 2022",
                title: "Program to count and print the number of digits in the entered number that the user enters. Example 3310.",
                link: "p18"
            },
            {
                date: "Tue October 25, 2022",
                title: "Program to print the sum of the digits a user enters. 370 = 3 + 7 + 0 = 10",
                link: "p19"
            },
            {
                date: "Tue October 25, 2022",
                title: "Program to print the fibonacci series till an entered number. Fibonacci series is a series where the number at any point is the sum of previous two numbers. Example 9 = 1 2 3 5 8",
                link: "p20"
            },
            {
                date: "Mon October 31, 2022",
                title: "Program to print the table of the number entered by the user. Example 2 = 2 x 1 = 2",
                link: "p21"
            },
            {
                date: "Mon October 31, 2022",
                title: "Program to print all numbers which are perfect square between user entered values.",
                link: "p22"
            },
            {
                date: "Tue November 1, 2022",
                title: "Program to print all numbers which four digit perfect square and where its first two digit and last two digits are also a perfect square. Example 1681.",
                link: "p23"
            },
            {
                date: "Tue November 1, 2022",
                title: "Program to print the armstrong number. An armstrong number is the number where the sum of cube of each digit is equal to the number itself. Example 370 = 27 + 343 + 0 = 370",
                link: "p24"
            },
            {
                date: "Mon November 7, 2022",
                title: "Program to print the factorial of the number entered by the user. Example 3 = 3 x 2 x 1 = 3",
                link: "p25"
            },
            {
                date: "Mon November 7, 2022",
                title: "Program to print the average of the numbers stored in an array entered by the user.",
                link: "p26"
            },
            {
                date: "Mon November 7, 2022",
                title: "Program to print the power of the two numbers entered by the user. (Example: 2 3) = 2 to the power 3 = 8",
                link: "p27"
            },
            {
                date: "Tue November 8, 2022",
                title: "Program to find the maximum number from the numbers stored in an array entered by the user.",
                link: "p28"
            },
            {
                date: "Tue November 8, 2022",
                title: "Program to demonstrate the nested for loop by printing a right angled triangle.",
                link: "p29"
            },
            {
                date: "Tue November 8, 2022",
                title: "Program to print the triangle of numbers of the range entered by the user. Example 3 = 1 2 3 2 1",
                link: "p30"
            },
            {
                date: "Mon November 14, 2022",
                title: "Program to print the triangle of numbers of the range entered by the user. Example 3 = 3 2 1 2 3",
                link: "p31",
                author: "vp"
            },
            {
                date: "Mon November 14, 2022",
                title: "Program to print the rhombus of numbers of the range entered by the user. Example 3 = 3 2 1 2 3",
                link: "p32",
                author: "vp"
            },
            {
                date: "Mon November 14, 2022",
                title: "Program to take the full name entered by the user and store it in an array. Example: dmj.one",
                link: "p33",
            },
            {
                date: "Tue November 15, 2022",
                title: "Program to count the number of words in the sentence entered by the user. Example: This is dmj.one and you are learning about a code made in C: Total Words = 14.",
                link: "p34",
            },
            {
                date: "Tue November 15, 2022",
                title: "Program to take the matrix size and then take the value of matrix entered by the user and print them. Example: 2 2 |1 2 3 4| = |1 2 3 4|",
                link: "p35",
            },
            {
                date: "Tue November 15, 2022",
                title: "Program to find the trace of a matrix or sum of diagonals of a matrix entered by the user. Example: 2 2 : |1 2 3 4| i.e. diagnonal1 =  1 + 4 = 5",
                link: "p36",
            },
            {
                date: "Mon November 21, 2022",
                title: "Program to take the array size and its elments from the user and sort them. Example:3, 2, 9, 1 = 1, 2, 3, 9",
                link: "p37",
            },
            {
                date: "Mon November 21, 2022",
                title: "Program to apply bubble sort on the array entered by the user. Example:3, 2, 9, 1 = 1, 2, 3, 9",
                link: "p38",
            },
            {
                date: "Tue November 22, 2022",
                title: "Program to find sum of all elements of an array entered by the user. Example:3, 2, 9, 1 = 15",
                link: "p39",
            },
            {
                date: "Tue November 22, 2022",
                title: "Program to store 5 names entered by the user in an array and display them.",
                link: "p40",
            },
            {
                date: "Mon November 28, 2022",
                title: "Program to add two matrices entered by the user.",
                link: "p41",
            },
            {
                date: "Mon November 28, 2022",
                title: "Program to multiply two matrices entered by the user.",
                link: "p42",
            },
            {
                date: "Tue November 29, 2022",
                title: "Program to find sum of two numbers entered by the user through function.",
                link: "p43",
            },
            {
                date: "Tue November 29, 2022",
                title: "Program to print name and age entered by the user using function.",
                link: "p44",
            },
            {
                date: "Tue November 29, 2022",
                title: "Program to make function blocks as a calculator which calculates the operations entered by the user.",
                link: "p45",
            },
            {
                date: "Mon December 5, 2022",
                title: "Program to generate total sum for the sequence x^1/1! + x^2/2! + x^3/3! + .....where x is entered by the user.",
                link: "p46",
            },
            {
                date: "Mon December 5, 2022",
                title: "Program to take input of name entered by the user through a function block and output it.",
                link: "p47",
            },
            {
                date: "Mon December 5, 2022",
                title: "Program to generate factorial of the number entered by the user through function recursion.",
                link: "p48",
            },
            {
                date: "Tue December 6, 2022",
                title: "Program to generate fibonacci series till the number of terms entered by the user through function recursion.",
                link: "p49",
            },
            {
                date: "Tue December 6, 2022",
                title: "Program to generate rhombus (Program 32) by using the number entered by the user through function recursion.",
                link: "p50",
            },
            {
                date: "Tue December 6, 2022",
                title: "Program to assign value of d entered by the user to value of m by pointers.",
                link: "p51",
            },
            {
                date: "Mon December 12, 2022",
                title: "Program to demonstrate the pointers.",
                link: "p52",
            },
            {
                date: "Mon December 12, 2022",
                title: "Program to check the use of pointers an its use of address space.",
                link: "p53",
            },
            {
                date: "Mon December 12, 2022",
                title: "Program to calculate the value of Sin(x) series where x entered by the user. Sin series is sin(x): x - x^3/3! + x^5/5! - x^7/7! + x^9/9! ....",
                link: "p54",
            },
            {
                date: "Tue December 13, 2022",
                title: "Program to calculate the value of sine and cosine series where \n\tsin(x) = a₀ + a₁cos(x) + a₂cos(2x) + a₃cos(3x) + ... + ancos(nx) and\n \t cos(x) = b₀ + b₁cos(x) + b₂cos(2x) + b₃cos(3x) + ... + bncos(nx)\n x is entered by the user.",
                link: "p55",
            },
            {
                date: "Tue December 13, 2022",
                title: "Program for swapping of two numbers entered by the user through call by value method.",
                link: "p56",
            },
            {
                date: "Tue December 13, 2022",
                title: "Program for swapping of two numbers entered by the user through call by reference method.",
                link: "p57",
            },
            {
                date: "Mon December 19, 2022",
                title: "Program to convert a sentence entered by the user to uppercase without using any external library.",
                link: "p58",
            },
            {
                date: "Mon December 19, 2022",
                title: "Program to convert a sentence entered by the user to uppercase by using the external library ctype.h",
                link: "p59",
            },
            {
                date: "Tue December 20, 2022",
                title: "Program to convert a sentence entered by the user to lowercase by using the external library ctype.h",
                link: "p60",
            },
            {
                date: "Tue December 20, 2022",
                title: "Program to bubble sort an array entered by the user.",
                link: "p61",
            },
            {
                date: "Tue December 20, 2022",
                title: "Program to demonstrate the structures in C by values entered by the user.",
                link: "p62",
            },
            {
                date: "Mon December 26, 2022",
                title: "Program to demonstrate the array of structures in C by the values entered by the user.",
                link: "p63",
            },
            {
                date: "Mon December 26, 2022",
                title: "Program to demonstrate the macro in C by finding the square of the value entered by the user.",
                link: "p64",
            },
            {
                date: "Mon December 26, 2022",
                title: "Program to demonstrate the macro by finding the cube of the value entered by the user.",
                link: "p65",
            },
            {
                date: "Tue December 27, 2022",
                title: "Program to demonstrate the file handling by saving the values entered by the user.",
                link: "p66",
            },
            {
                date: "Tue December 27, 2022",
                title: "Program to demonstrate the dynamic memory allocation techniques in C by the values entered by the user.",
                link: "p67",
            },
        ];
        body_genmenu.processData(arr, def_date, def_author);
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
        body_genmenu.processData(arr, def_date, def_author);
    }

    function get_labfile(def_date, def_author) {
        const arr = [
            {
                title: "Practical 1",
                desc: "Write the structure of C. Write the difference between  difference keywords, constants, and variables.",
                codetype: "C Language",
                date: "Thu October 13, 2022",
                link: "p1"
            },
            {
                title: "Practical 2",
                desc: "WAP to take 5 numbers of the respective subjects, calculate its average, and grade the sudent based on their performance percentage.",
                codetype: "C Language",
                date: "Thu October 20, 2022",
                link: "p2"
            },
            {
                title: "Practical 3",
                desc: "WAP to swap two variables using all possible methods.",
                codetype: "C Language",
                date: "Thu October 27, 2022",
                link: "p3"
            },
            {
                title: "Practical 4",
                desc: "WAP to display all four digit perfect square numbers using for loop",
                codetype: "C Language",
                date: "Thu November 3, 2022",
                link: "p4"
            },
            {
                title: "Practical 5",
                desc: "Program to print the rhombus (triangle on an inverted triangle) of numbers of the range entered by the user. Example 3 = 3 2 1 2 3",
                codetype: "C Language",
                date: "Thu November 10, 2022",
                link: "p5"
            },
            {
                title: "Practical 6",
                desc: "Program to compare two matrices and check if they are identical or not",
                codetype: "C Language",
                date: "Thu November 17, 2022",
                link: "p6"
            },
            {
                title: "Practical 7",
                desc: "Program to find the nth term of fibonacci series",
                codetype: "C Language",
                date: "Thu November 24, 2022",
                link: "p7"
            },
            {
                title: "Practical 8",
                desc: "Program to swap the values by using call by reference.",
                codetype: "C Language",
                date: "Thu December 1, 2022",
                link: "p8"
            },
            {
                title: "Practical 9",
                desc: "Program to count the number of vowels and consonents from the sentence entered by the user",
                codetype: "C Language",
                date: "Thu December 8, 2022",
                link: "p9"
            },
            {
                title: "Practical 10",
                desc: "Program to take input of a sentence, write it in the file, convert it in both lower and upper caser and write them both to the file again",
                codetype: "C Language",
                date: "Thu December 15, 2022",
                link: "p10"
            },
            {
                title: "Practical 11",
                desc: "Program to create a student structure having fields studname, ID and mark. Accept the details of 'n' students, rearrange the data in alphabetical order of student name and display it.",
                codetype: "C Language",
                date: "Thu December 22, 2022",
                link: "p11"
            },
            {
                title: "Practical 12",
                desc: "Program to create a student structure having fields studname, ID and mark. Accept the details of 'n' students, rearrange the data in alphabetical order of student name and display it.",
                codetype: "C Language",
                date: "Thu December 29, 2022",
                link: "p12"
            },
        ];
        body_genmenu.processData(arr, def_date, def_author);
    }


    /**********  AUTOMATION CONTROL **********/ 
    let title, link, date, desc, codetype, readtime, author = 1, semester, cardimage, continuereading;   
    const functions = {
        theory: get_theory,
        program: get_programs,
        misc: get_misc,
        default: get_main
    };
    (functions[window.urlpart5] || functions.default)(datetogen, author);
}