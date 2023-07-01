
function get_menu_list(datetogen) {
    function get_main(def_date, def_author) {
        const arr = [
            {
                link: "class/",
                title: "📚 Theory of DSA",
                desc: " Master Data Structures & Algorithms with our comprehensive collection of Data Structures & Algorithms Class Topics!",
                codetype: "CSU1051 | Class"
            },
            {
                link: "lab/",
                title: "🔬 Practicals: Hands-On Learning with DSA Lab!",
                desc: "Discover practical and hands-on learning experience for Data Structures & Algorithms through Lab.",
                codetype: "CSU1051P | Lab"
            }
        ];
        for (let i = 0; i < arr.length; i++) {
            const _data = arr[i];
            title = _data.title || null; if (!title) continue; // Set the title and if thats not possible, skip the loop
            link = _data.link || null;
            date = _data.date ? _data.date : `${gendate(def_date)}`;
            desc = _data.desc || `${title}`;
            codetype = _data.codetype ? `${_data.codetype}` : `CSU1051`;
            readtime = _data.readtime || r(4); readtime = null; // Null readtime - Special Case
            author = _data.author || def_author; author = null; // Null author - Special Case
            body_blockcards(link, date, title, desc, codetype, readtime, author);
        }
    }
    function get_class(def_date, def_author) {
        const arr = [
            {
                title: "Teacher-Provided Study Resources: Data Structures & Algorithms",
                desc: "Find comprehensive documents and resources on data structures and algorithms, provided by Dr. Laxman for enhanced learning. These materials include FAQs that assist beginners in assessing their knowledge and understanding of these key programming concepts.",
                readtime: r(10),
                link: "resources",
                date: "Fri March 10, 2023",
            },
            {
                title: "Key Concepts and Differences",
                desc: "This introduction to Data Structures and Algorithms will cover the distinctions between unions and structures, as well as the differences between primitive and non-primitive data structures, and linear and non-linear data structures.",
                codetype: "Introduction",
                link: "introduction"
            },
            {
                title: "getchar vs putchar",
                desc: "This introduction to Data Structures and Algorithms will cover the distinctions between getchar and putchar.",
                codetype: "Introduction",
                link: "getchar-vs-putchar"
            },
            {
                title: "Arrays, Pointers and Multi Pointers",
                desc: "This introduction to Data Structures and Algorithms will cover the details of Arrays, Pointers and Multi Pointers.",
                codetype: "Introduction",
                link: "array-pointer-multipointer"
            },
            {
                title: "Basic Concepts and Notions",
                desc: "Learn about the basic concepts and notions of data structures and algorithms. Data structures and algorithms are fundamental to computer science and are used to store and manipulate data, solve problems, and make decisions. This concept is useful for beginner programmers to learn the basics of data structures and algorithms and gives a brief knowhow about their application in the programs.",
                link: "basic-concepts"
            },
            {
                title: "Data Structures and Operations",
                desc: "Learn about data structures and their operations in data structures and algorithms with this conceptual article. Data structures are a fundamental part of computer science and are used to organize, store, and manipulate data efficiently. This article is a useful exercise for beginner programmers to learn about different types of data structures and their operations, such as traversal, insertion, deletion, and searching, and how to use them to solve real-world problems in their programs.",
                link: "data-structure-operations"
            },
            {
                title: "Mathematical Notation and Functions",
                desc: "Learn about mathematical notation and functions. Mathematical notation is a language used to express mathematical ideas and concepts, while mathematical functions are a fundamental part of mathematics that map inputs to outputs based on a set of defined rules. This concept is a useful exercise for beginner programmers to learn how to use mathematical notation and functions in their programs to solve real-world problems and improve their mathematical skills.",
                link: "mathematical-notations"
            },
            {
                title: "Complexity of Algorithms",
                desc: "Learn about the complexity of algorithms in data structures and algorithms. The complexity of an algorithm is a measure of its efficiency, in terms of time and space, and is an important factor to consider when designing and analyzing algorithms. This concept is a useful exercise for beginner programmers to learn how to measure the complexity of algorithms, understand the different types of complexity (such as time complexity and space complexity), and apply this knowledge to optimize their algorithms for improved performance and efficiency.",
                link: "algorithm-complexity"
            },
            {
                title: "Running Time and Storage Cost of Algorithms",
                desc: "Learn about the running time and storage cost of algorithms in data structures and algorithms. The running time and storage cost of an algorithm are important factors to consider when designing and analyzing algorithms, as they directly impact the efficiency and performance of the algorithm. This concept is a useful exercise for beginner programmers to learn how to measure and optimize the running time and storage cost of algorithms, and how to apply this knowledge to create more efficient and scalable programs.",
                link: "running-time-storage-cost-algorithms"
            },
            {
                title: "Array Representation in Memory",
                desc: "Learn about array representation in memory in data structures and algorithms. Arrays are a fundamental data structure in programming and are used to store a collection of elements of the same data type. Understanding how arrays are represented in memory is important for optimizing memory usage and accessing elements efficiently. This concept is a useful exercise for beginner programmers to learn how to represent arrays in memory, understand the benefits and limitations of arrays, and apply this knowledge to create efficient and effective programs.",
                readtime: r(15),
                link: "array-memory-representation"
            },
            // {
            //     title: "Operations on Arrays",
            //     desc: "Learn about operations on arrays in data structures and algorithms. Arrays are a fundamental data structure in programming and are used to store a collection of elements of the same data type. Operations on arrays include sorting, searching, insertion, deletion, and merging, and are important for manipulating and analyzing data efficiently. This concept is a useful exercise for beginner programmers to learn how to perform operations on arrays, understand the different types of operations, and apply this knowledge to solve real-world problems in their programs."
            // },
            // {
            //     title: "Multidimensional Arrays",
            //     desc: "Learn about multidimensional arrays in data structures and algorithms. Multidimensional arrays are a useful extension of arrays that allow data to be stored in more than one dimension, such as matrices or grids. Understanding how multidimensional arrays work and how to manipulate them efficiently is important for solving problems in various domains such as image processing, computer graphics, and scientific computing. This concept is a useful exercise for beginner programmers to learn how to declare, initialize, and use multidimensional arrays, and how to apply this knowledge to solve real-world problems in their programs."
            // },
            // {
            //     title: "Sparse Matrices",
            //     desc: "Learn about sparse matrices in data structures and algorithms with this concept. Sparse matrices are a special type of matrix that contains mostly zeros, and are commonly used in domains such as graph theory, scientific computing, and machine learning. Understanding how to store and manipulate sparse matrices efficiently is important for solving problems that involve large datasets and complex computations. This is a useful exercise for beginner programmers to learn how to represent sparse matrices, understand the different types of sparse matrix formats, and apply this knowledge to create efficient and scalable programs."
            // },
            {
                title: "Parallel Algorithms",
                desc: "Learn about parallel algorithms in data structures and algorithms. Parallel algorithms are a class of algorithms that can be executed in parallel on multiple processors or cores, and are commonly used in domains such as scientific computing, data mining, and machine learning. Understanding how to design and analyze parallel algorithms is important for achieving better performance and scalability in modern computing environments. This concept is useful for intermediate programmers to learn how to parallelize algorithms, understand the different types of parallelism, and apply this knowledge to create faster and more efficient programs.",
                link: "parallel-algorithms",
                readtime: r(10)
            },
            {
                title: "Stacks: Data Structure Representations, Implementations & Applications",
                desc: "Learn about stacks, a fundamental data structure in programming, which follows the last-in-first-out (LIFO) policy. This article covers the different representations and implementations of stacks, including array-based and linked-list-based implementations, and their applications in various domains such as operating systems, computer networks, and simulation. Whether you're a beginner programmer or an experienced developer, understanding the concepts of stacks is crucial to creating efficient and effective programs. By the end of this article, you'll have a solid foundation in representing stacks, performing various operations on them, and applying this knowledge to solve problems in programming.",
                link: "stack"
            },
            {
                title: "Stacks and Queues Representations, Implementations & Applications",
                desc: "Learn about stacks and queues representations, implementations and applications in data structures and algorithms. Stacks and queues are fundamental data structures in programming that are used to store and manipulate data based on a last-in-first-out (LIFO) or first-in-first-out (FIFO) policy, respectively. Understanding the different representations of stacks and queues and how to manipulate them efficiently is important for solving problems in various domains such as operating systems, computer networks, and simulation. This concept is useful for beginner programmers to learn how to represent stacks and queues, understand the different operations on them, and apply this knowledge to create efficient and effective programs.",
                link: "stack-and-queue"
            },
            {
                title: "Singly Linked Lists and Their Representations",
                desc: "Learn about singly linked lists and their representations in data structures and algorithms. Singly linked lists are a fundamental data structure in programming that are used to store and manipulate data in a linear and dynamic way. Understanding how singly linked lists work and how to represent them efficiently is important for solving problems in various domains such as data processing, artificial intelligence, and game development. This is useful for beginner programmers to learn how to represent singly linked lists, understand their operations, and apply this knowledge to create efficient and effective programs.",
                link: "singly-linked-list"
            },
            {
                title: "Doubly Linked Lists and Circularly Linked Lists",
                desc: "Learn about doubly linked lists and circularly linked lists in data structures and algorithms. Doubly linked lists and circularly linked lists are extensions of singly linked lists that provide additional functionality such as bidirectional traversal and circular data structures. Understanding how doubly linked lists and circularly linked lists work and how to manipulate them efficiently is important for solving problems in various domains such as network routing, computer graphics, and memory management. This is a useful concept for intermediate programmers to learn how to represent doubly linked lists and circularly linked lists, understand their operations, and apply this knowledge to create efficient and effective programs.",
                link: "dll-cll"
            },
            {
                title: "Operations on Linked Lists - Insertion, Deletion, and Traversal",
                desc: "Learn about operations on linked lists - insertion, deletion, and traversal - in data structures and algorithms with this article. Linked lists are a fundamental data structure in programming that are used to store and manipulate data in a dynamic and flexible way. Understanding how to perform operations such as insertion, deletion, and traversal on linked lists efficiently is important for solving problems in various domains such as database management, machine learning, and web development. This program is a useful for beginner programmers to learn how to perform operations on linked lists, understand their time and space complexities, and apply this knowledge to create efficient and effective programs.",
                readtime: r(3),
                link: "linkedlist-operations"
            },
            {
                title: "Memory Allocation of the Linked Lists",
                desc: "Learn about memory allocation of linked lists - in data structures and algorithms with this article. Linked lists are a fundamental data structure in programming that are used to store and manipulate data in a dynamic and flexible way. Understanding how memory is allocated to linked lists efficiently is important for solving problems in various domains such as database management, machine learning, and web development. This program is a useful for beginner programmers to learn how we allocate the memory to linked lists, understand their time and space complexities, and apply this knowledge to create efficient and effective programs.",
                readtime: r(7),
                link: "linkedlist-memory-allocation"
            },
            {
                title: "Unveiling the Magic of Insertion Sort",
                desc: "Embark on a thrilling journey through the world of algorithms, where we unravel the intricacies of Insertion Sort. Let C++ be your language of choice as you decipher this fundamental sorting technique and transform lines of code into efficient solutions.",
                date: "Mon May 29, 2023",
                readtime: r(5),
                link: "insertion-sort"
            },
            {
                title: "Unleashing the Power of Tree",
                desc: "Embark on an enlightening journey through the fascinating realm of trees, where we unravel the fundamental concepts and applications of Trees. Harness the potential of trees as you delve into the intricacies of data organization and traversal using C++, and witness how these powerful structures can revolutionize your coding solutions.",
                date: "Fri June 16, 2023",
                readtime: r(6),
                link: "tree-basics"
            },
            {
                title: "Unlocking the Secrets of Linked Tree Representation",
                desc: "Embark on an exhilarating exploration into the world of linked tree representation, where we unveil the hidden depths of this powerful data structure. Join us as we dive deep into the intricacies of linking nodes to form trees and discover how this representation can revolutionize your understanding and manipulation of hierarchical data. Through insightful examples and practical exercises in C++, you'll gain the tools to master linked tree representation and unleash its potential in your coding endeavors.",
                date: "Tue June 4, 2023",
                readtime: r(4),
                link: "linked-tree"
            },
            {
                title: "Exploring Contiguous Storage Representations",
                desc: "Embark on a fascinating journey into the realm of contiguous storage representations, where we delve into the various techniques used to efficiently store data structures in memory. Join us as we uncover the intricacies of representations such as arrays and matrices, and how they can be leveraged to optimize storage and access of elements. Through insightful examples and practical demonstrations in C++, you'll gain a deep understanding of contiguous storage representations and their applications in solving complex problems.",
                readtime: r(7),
                link: "representations-contiguous-storage"
            },
            {
                title: "Binary Trees and Traversal Techniques",
                desc: "Explore binary trees and traversal techniques, unraveling their secrets and mastering their applications. Learn pre-order, in-order, and post-order traversal methods in C++.",
                readtime: r(5),
                link: "binary-tree"
            },
            {
                title: "Unveiling the Magic of Binary Search Trees",
                desc: "Embark on a captivating journey into the world of binary search trees, where we unravel the secrets of these powerful data structures. Discover how binary search trees enable efficient searching, insertion, and deletion operations. Learn about their key properties and the principles behind maintaining the binary search tree property. Dive into practical examples and coding exercises in C++, allowing you to master the art of working with binary search trees and leverage their potential to solve a wide range of algorithmic problems.",
                readtime: r(10),
                link: "binary-search-trees"
            },
            {
                title: "Exploring Heap Trees and the Heap Sort Algorithm",
                desc: "Embark on a fascinating exploration of heap trees and the heap sort algorithm, uncovering their inner workings and practical applications. Dive into the intricacies of heap data structures, understanding their properties and the heapify operation. Discover how the heap sort algorithm utilizes heap trees to efficiently sort elements in an array. Through hands-on examples and step-by-step explanations in C++, you'll gain a deep understanding of heap trees and the heap sort algorithm, equipping you with a powerful sorting technique to optimize your code.",
                readtime: r(5),
                link: "heap-tree-sort"
            },
            {
                title: "Demystifying Graph Theory Terminologies",
                desc: "Embark on a comprehensive exploration of graph theory terminology, unraveling the intricate language used to describe and analyze graphs. From vertices and edges to paths, cycles, and connectivity, delve into the fundamental concepts that form the backbone of graph theory. Gain a deep understanding of terms like degree, adjacency, weighted graphs, directed graphs, and more. Through illustrative examples and clear explanations, you'll become fluent in the language of graph theory, enabling you to tackle complex graph-based problems with confidence.",
                readtime: r(4),
                link: "graph-theory"
            },
            {
                title: "Exploring Sequential and Linked Representations of Graphs",
                desc: "Embark on a comprehensive exploration of sequential and linked representations of graphs, uncovering the strengths and applications of each approach. Delve into the sequential representation, where graphs are stored using adjacency matrices or adjacency lists, and discover how this method facilitates efficient operations on dense graphs. Explore the linked representation, where graphs are represented using linked lists or adjacency lists, and understand how it handles sparse graphs with ease. Through practical examples and comparisons in different scenarios, you'll gain a deep understanding of the trade-offs and considerations involved in choosing between sequential and linked representations for graph data structures.",
                readtime: r(5),
                link: "sequential-linked-graph-representations"
            },
            {
                title: "Unveiling the Power of Adjacency Matrices in Graph Representation",
                desc: "Embark on a journey to uncover the hidden potential of adjacency matrices in graph representation. Dive deep into the intricacies of adjacency matrices, a powerful data structure that captures the connectivity between vertices in a graph. Learn how to construct adjacency matrices and explore their applications in various graph operations such as edge existence, neighbor determination, and graph traversal. Through practical examples and step-by-step explanations, you'll gain a solid understanding of adjacency matrices and how they can be leveraged to efficiently represent and analyze graphs in your programming endeavors.",
                readtime: r(5),
                link: "adjacency-matrix"
            },
            {
                title: "Mastering Graph Operations: Unleashing the Power of Graph Algorithms",
                desc: "Embark on a journey to master graph operations and unleash the power of graph algorithms. Explore a wide range of essential operations on graphs, including traversals (such as depth-first search and breadth-first search), pathfinding algorithms (like Dijkstra's algorithm and A* search), cycle detection, connectivity analysis, and more. Delve into the intricacies of these algorithms, understand their principles, and witness how they can be applied to solve real-world problems. Through hands-on examples and practical exercises, you'll develop a strong foundation in graph operations, empowering you to tackle complex graph-based challenges with confidence.",
                readtime: r(5),
                link: "graph-operations"
            },
            {
                title: "Demystifying Dijkstra's Algorithm: The Pathfinding Powerhouse",
                desc: "Embark on a captivating exploration of Dijkstra's algorithm, a powerful pathfinding technique that has revolutionized graph-based navigation. Dive into the inner workings of Dijkstra's algorithm, understanding its step-by-step process for finding the shortest path between two vertices in a weighted graph. Learn how to implement Dijkstra's algorithm efficiently using data structures such as priority queues and adjacency lists. Through detailed explanations, visualizations, and hands-on coding examples in a language of your choice, you'll gain a deep understanding of Dijkstra's algorithm and its applications in solving real-world routing and optimization problems.",
                readtime: r(10),
                link: "dijkstras-algorithm"
            },
            {
                title: "Unleashing the Power of the Bellman-Ford Algorithm: Solving Shortest Path Problems",
                desc: "Embark on an exciting journey into the world of the Bellman-Ford algorithm, a versatile technique for solving shortest path problems in graphs. Delve into the intricacies of the algorithm, understanding its iterative process for finding the shortest path from a source vertex to all other vertices in a weighted graph, even in the presence of negative edge weights. Explore the implementation details and optimizations of the Bellman-Ford algorithm, and witness how it can be applied to solve real-world routing and optimization problems. Through hands-on examples and practical exercises, you'll gain a deep understanding of the Bellman-Ford algorithm and its applications in various domains.",
                readtime: r(7),
                link: "bellman-ford-algorithm"
            },
            {
                title: "Essential Data Structures for Searching and Sorting",
                desc: "Embark on a comprehensive exploration of essential data structures for searching and sorting, unlocking the key tools for efficient algorithmic problem-solving. Discover the power of data structures such as arrays, linked lists, binary search trees, hash tables, and heaps. Learn how these structures enable fast search and efficient sorting operations. Explore various searching algorithms like linear search, binary search, and interpolation search, as well as sorting algorithms like bubble sort, insertion sort, merge sort, and quicksort. Through practical examples and hands-on exercises, you'll develop a strong foundation in data structures for searching and sorting, equipping you with the skills to tackle complex problems and optimize your code.",
                readtime: r(4),
                link: "data-structure-for-searching-sorting"
            },
            {
                title: "Mastering Linear and Binary Search: Unleashing the Power of Search Algorithms",
                desc: "Embark on a journey to master linear and binary search algorithms, unlocking the power to efficiently find elements in a collection of data. Dive into the simplicity and effectiveness of linear search, understanding its step-by-step process for sequentially scanning through an array or list. Explore the elegance and efficiency of binary search, learning how to leverage the divide-and-conquer technique to quickly locate elements in a sorted array. Through practical examples and interactive exercises, you'll gain a deep understanding of both search algorithms and their applications in solving various searching problems. Armed with these essential tools, you'll be equipped to navigate and retrieve data with speed and precision.",
                readtime: r(2),
                link: "linear-binary-search"
            },
            {
                title: "Unveiling the Magic of Insertion Sort: Transforming Chaos into Order",
                desc: "Embark on a thrilling journey through the world of sorting algorithms as we unravel the intricacies of Insertion Sort. Join us as we explore the elegance and efficiency of this fundamental sorting technique. Dive into the step-by-step process of Insertion Sort, where elements are iteratively inserted into their correct positions in a partially sorted array. Witness how Insertion Sort can transform chaos into order, bringing clarity to unsorted data. Through practical examples and hands-on exercises, you'll gain a deep understanding of Insertion Sort and its applications in efficiently arranging elements. Let C++ be your language of choice as you decipher this sorting technique and transform lines of code into efficient solutions.",
                readtime: r(2),
                link: "insertion-sort"
            },
            {
                title: "Mastering Bubble Sort: Sorting with Bubbling Precision",
                desc: "Embark on a journey to master the art of Bubble Sort, a simple yet effective sorting algorithm. Delve into the step-by-step process of Bubble Sort, where adjacent elements are compared and swapped if they are in the wrong order, gradually \"bubbling\" the largest elements to the end of the array. Explore the intricacies of this sorting technique, understanding its time complexity and performance characteristics. Witness how Bubble Sort can efficiently arrange elements, bringing order to unsorted data. Through practical examples and interactive exercises, you'll gain a deep understanding of Bubble Sort and its applications in sorting algorithms. With your preferred programming language, you'll be able to implement Bubble Sort and transform lines of code into elegant and efficient solutions using this technique.",
                readtime: r(6),
                link: "bubble-sort"
            },
            {
                title: "Unlocking the Efficiency of Merge Sort: Sorting with Divide and Conquer",
                desc: "Embark on a journey to unlock the efficiency of Merge Sort, a powerful sorting algorithm that operates with a divide and conquer strategy. Dive into the step-by-step process of Merge Sort, understanding how it divides the array into smaller subarrays, sorts them individually, and then merges them to create a fully sorted array. Explore the elegance and efficiency of Merge Sort, as well as its stable sorting property. Witness how Merge Sort can handle large datasets and outperform other sorting algorithms in terms of time complexity. Through practical examples and hands-on exercises, you'll gain a deep understanding of Merge Sort and its applications in efficiently sorting arrays. With your preferred programming language, you'll be able to implement Merge Sort and leverage its sorting power.",
                readtime: r(3),
                link: "merge-sort"
            },
            {
                title: "Demystifying Radix Sort: Sorting with Digit-by-Digit Precision",
                desc: "Embark on an enlightening journey into the world of Radix Sort, a powerful sorting algorithm that operates with digit-by-digit precision. Discover how Radix Sort efficiently arranges elements by sorting them based on their individual digits, from the least significant to the most significant. Dive into the step-by-step process of Radix Sort, understanding its inner workings and time complexity. Witness how Radix Sort can handle numbers of various lengths and effectively sort them. Through practical examples and hands-on exercises, you'll gain a deep understanding of Radix Sort and its applications in efficiently sorting numbers and other data types. With your preferred programming language, you'll be able to implement Radix Sort and harness its sorting power.",
                readtime: r(8),
                link: "radix-sort"
            },
            {
                title: "Mastering Selection Sort: Sorting with Precision and Efficiency",
                desc: "Embark on a journey to master the art of Selection Sort, a simple yet powerful sorting algorithm. Explore the step-by-step process of Selection Sort, where the algorithm repeatedly selects the smallest element from the unsorted part of the array and places it in its correct position. Delve into the intricacies of this sorting technique, understanding its efficiency and trade-offs. Witness how Selection Sort can efficiently arrange elements, bringing order to chaotic data. Through practical examples and interactive exercises, you'll gain a deep understanding of Selection Sort and its applications in sorting algorithms. With C++ as your tool of choice, you'll transform lines of code into elegant and efficient solutions using Selection Sort.",
                readtime: r(10),
                link: "selection-sort"
            },
            {
                title: "Frequently Asked Questions 1",
                desc: "Learn about some of the frequently asked questions in data structures and algorithms. Understanding these questions will give you a better understanding and is a useful exercise for beginner programmers to learn how to test their knowledge.",
                readtime: r(5),
                link: "faq1"
            },
            {
                title: "Frequently Asked Questions 2",
                desc: "Learn about some of the frequently asked questions in data structures and algorithms. Understanding these questions will give you a better understanding and is a useful exercise for beginner programmers to learn how to test their knowledge.",
                readtime: r(6),
                link: "faq2"
            },
        ];
        for (let i = 0; i < arr.length; i++) {
            const _data = arr[i];
            title = _data.title || null; if (!title) continue; // Set the title and if thats not possible, skip the loop
            link = _data.link || `c${i + 1}`;
            date = _data.date ? _data.date : `${gendate(def_date)}`;
            desc = _data.desc || `${title} ${i}`;
            codetype = _data.codetype ? `DSA | ${_data.codetype}` : `DSA | Topics`;
            readtime = _data.readtime || r(4);
            author = _data.author || def_author;
            body_blockcards(link, date, title, desc, codetype, readtime, author);
        }
    }
    function get_lab(def_date, def_author) {
        const arr = [
            {
                title: "General Instructions For Lab File",
                desc: "General instructions for making of a Lab File.",
                codetype: "Lab File Instructions",
                link: "instructions"
            },
            {
                title: "Lab 1: Introduction to Data Structures",
                desc: "This lab provides an introduction to the basic data structures in computer science.",
                codetype: "Introduction",
                link: "introduction-to-data-structures"
            },
            {
                title: "Lab 2: Array Implementation",
                desc: "This lab focuses on the practical implementation of arrays.",
                date: "Fri March 10, 2023",
                codetype: "Array",
                link: "array-implementation"
            },
            {
                title: "Lab 3: Understanding Pointers",
                desc: "In this lab, we will understand and implement pointers.",
                // "date": "Fri March 17, 2023",
                codetype: "Pointers",
                link: "implementation-of-pointers"
            },
            {
                title: "Lab 4: Working with Multi Pointers",
                desc: "This lab provides an understanding and practical implementation of multi pointers.",
                // "date": "Fri March 24, 2023",
                codetype: "Multi Pointers",
                link: "implementation-of-multi-pointers"
            },
            {
                title: "Lab 5: Stack Implementation using Queue",
                desc: "In this lab, we will implement a stack using a queue.",
                // "date": "Fri March 31, 2023",
                codetype: "Stack Using Queue",
                link: "stack-implementation-using-queue"
            },
            {
                title: "Lab 6: Stack Implementation using Array",
                desc: "This lab will involve implementing a stack using an array.",
                // "date": "Fri April 7, 2023",
                codetype: "Stack Using Array",
                link: "stack-implementation-using-array"
            },
            {
                title: "Lab 7: Stack Implementation using Circular Queue",
                desc: "In this lab, we will implement a stack using a circular queue.",
                // "date": "Fri April 14, 2023",
                codetype: "Stack Using Circular Queue",
                link: "stack-implementation-using-circular-queue"
            },
            {
                title: "Lab 8: Stack Implementation using Linked List",
                desc: "This lab will cover how to implement a stack using a linked list.",
                // "date": "Fri April 21, 2023",
                codetype: "Stack Using Linked List",
                link: "stack-implementation-using-linked-list"
            },
            {
                title: "Lab 9: Stack Implementation using Double Ended Queue",
                desc: "In this lab, we will implement a stack using a double ended queue.",
                date: "Fri April 28, 2023",
                codetype: "Stack Using Deque",
                link: "stack-implementation-using-deque"
            },
            {
                title: "Lab 10: Queue Implementation using Linked List",
                desc: "This lab will involve implementing a queue using a linked list.",
                date: "Fri May 5, 2023",
                codetype: "Queue Using Linked List",
                link: "queue-implementation-using-linked-list"
            },
            {
                title: "Lab 11: Queue Implementation using Double Ended Queue",
                desc: "In this lab, we will implement a queue using a double ended queue.",
                date: "Fri May 12, 2023",
                codetype: "Queue Using Deque",
                link: "queue-implementation-using-deque"
            },
            {
                title: "Lab 12: Queue Implementation using Array",
                desc: "This lab will cover how to implement a queue using an array.",
                date: "Fri May 19, 2023",
                codetype: "Queue Using Array",
                link: "queue-implementation-using-array"
            },
            {
                title: "Lab 13: Tree vs Graph",
                desc: "This lab cover the differences between tree vs graph and explains how to implement them in C++.",
                date: "Fri May 19, 2023",
                codetype: "Tree vs Graph",
                link: "tree-vs-graph"
            },
            {
                title: "Lab 14: Binary Tree",
                desc: "This lab covers the Binary Tree and explains how to implement them in C++ with its flowdiagram and dry run and output.",
                date: "Fri May 25, 2023",
                codetype: "Binary Tree",
                link: "binary-tree"
            },
            {
                title: "Lab 15: Binary Search Tree",
                desc: "This lab covers the Binary Search Tree and explains how to implement them in C++ with its flowdiagram and dry run and output.",
                date: "Fri May 25, 2023",
                codetype: "Binary Search Tree",
                link: "binary-search-tree"
            },
            {
                title: "Lab 16: AVL Tree",
                desc: "This lab covers the AVL Tree and explains how to implement them in C++ with its flowdiagram and dry run and output.",
                date: "Wed May 31, 2023",
                codetype: "AVL Tree",
                link: "avl-tree"
            },
            {
                title: "Lab 17: B Tree",
                desc: "This lab covers the B Tree and explains how to implement them in C++ with its flowdiagram and dry run and output.",
                date: "Wed June 7, 2023",
                codetype: "B Tree",
                link: "b-tree"
            },
            {
                title: "Lab 18: B+ Tree",
                desc: "This lab covers the B+ Tree and explains how to implement them in C++ with its flowdiagram and dry run and output.",
                date: "Wed June 7, 2023",
                codetype: "B+ Tree",
                link: "bplus-tree"
            },
            {
                title: "Lab 19: Dijkstra's Algorithm",
                desc: "This lab covers the Dijkstra's Algorithm and explains how to implement them in C++ with its flowdiagram and dry run and output.",
                date: "Wed June 14, 2023",
                codetype: "Dijkstra's Algorithm",
                link: "dijkstras-algorithm"
            },
            {
                title: "Lab 20: Bellman-Ford's Algorithm",
                desc: "This lab covers the Bellman Ford's Algorithm and explains how to implement them in C++ with its flowdiagram and dry run and output.",
                date: "Wed June 21, 2023",
                codetype: "Bellman-Ford's Algorithm",
                link: "bellmanfords-algorithm"
            },
            {
                title: "Revision of All Topics",
                desc: "Revision of all the topics covered in lab in brief details as possible.",
                date: "Wed June 27, 2023",
                codetype: "Revision",
                readtime: r(5),
                link: "revision"
            },


            // {
            //     title: "Lab 2",
            //     desc: "Description"
            // }
        ];
        for (let i = 0; i < arr.length; i++) {
            const _data = arr[i];
            title = _data.title || null; if (!title) continue; // Set the title and if thats not possible, skip the loop
            link = _data.link || `p${i + 1}`;
            date = _data.date ? _data.date : `${gendate(def_date)}`;
            desc = _data.desc || `${title} ${i}`;
            codetype = _data.codetype ? `CSU1051P | ${_data.codetype}` : `CSU1051P | Lab`;
            readtime = _data.readtime || r(5);
            author = _data.author || def_author;
            body_blockcards(link, date, title, desc, codetype, readtime, author);
        }
    }
    function get_assignment(def_date, def_author) {
        const arr = [
            {
                title: "Assignment 1: Application of Fundamental Mechanics on Saturn V Rocket",
                desc: "This assignment is based on the fundamental mechanics of Saturn V Rocket"
            },
            {
                title: "Assignment 2: Types of Magnetic Materials and Application of Lasers",
                desc: "Dive into Magnetic Materials & Laser Applications! Learn about different types of magnetic materials, their properties, and the cutting-edge applications of laser technology. Get ready to be amazed by the power of magnetism and light!"
            }
        ];
        for (let i = 0; i < arr.length; i++) {
            const _data = arr[i];
            title = _data.title || null; if (!title) continue; // Set the title and if thats not possible, skip the loop
            link = _data.link || `a${i + 1}`;
            date = _data.date ? _data.date : `${gendate(def_date)}`;
            desc = _data.desc || `${title} ${i}`;
            codetype = _data.codetype ? `Physics | ${_data.codetype}` : `Physics | Assignment`;
            readtime = _data.readtime || r(6);
            author = _data.author || def_author;
            body_blockcards(link, date, title, desc, codetype, readtime, author);
        }
    }

    /**********  AUTOMATION CONTROL **********/
    // Get Random date near the entered date. 
    function gendate(date) {
        var inputDate = new Date(date);
        var offset = Math.floor(Math.random() * 20 - 10) * 24 * 60 * 60 * 1000;
        // var offset = Math.floor(Math.random() * 10) * -1 * 24 * 60 * 60 * 1000; // This is if you dont want to generate future dates and only past date. supplied date - 10th date.
        var newDate = new Date(inputDate.getTime() + offset);
        var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        var weekdays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
        var outputDate = weekdays[newDate.getUTCDay()] + " " + months[newDate.getUTCMonth()] + " " + newDate.getUTCDate() + ", " + newDate.getUTCFullYear();
        return outputDate;
    }
    function r(t) { return Math.floor(Math.random() * 10) + t };
    var title, desc, codetype, readtime, author = 1, link;
    const functions = {
        class: get_class,
        lab: get_lab,
        // assignment: get_assignment,
        default: get_main
    };
    (functions[window.urlpart5] || functions.default)(datetogen, author);
}

/*
You can use different approaches and algorithms to solve optimization problems, depending on the specific problem you are trying to solve. Here are a few common methods:

Gradient descent: This is a popular method for optimizing objective functions that are differentiable. It works by iteratively adjusting the parameters of the model in the direction of the negative gradient of the objective function.

Conjugate gradient method: This is a type of iterative optimization algorithm that can be used to solve symmetric, positive definite linear systems. It works by using information from previous iterations to improve convergence rates.

Simulated annealing: This is a probabilistic method for solving optimization problems. It works by randomly perturbing the parameters of the model and accepting the new solution if it results in an improvement to the objective function.

Particle swarm optimization: This is a swarm intelligence-based optimization algorithm that works by having a population of candidate solutions that move and update their positions based on their own fitness and the fitness of other solutions.

Genetic algorithms: This is a population-based optimization algorithm that works by iteratively evolving a population of candidate solutions. It uses genetic operators such as mutation and crossover to generate new solutions and selection to determine which solutions are retained for the next iteration.

Each method has its own advantages and disadvantages and works best for specific types of optimization problems, so you may need to experiment with different methods to find the one that works best for your particular problem.
*/