
function get_menu_list(datetogen) {
    function get_main(def_date, def_author) {
        const arr = [
            {
                link: "../csu1051/",
                title: "Prerequisites: DSA <i class='bi bi-box-arrow-up-right'></i>",
                desc: "It is recommended that you master Data Structures & Algorithms with our comprehensive collection of Data Structures & Algorithms Class Topics before continuing to the Theory below! The topics below build upon the concepts present in DSA. Click on the topic to visit.",
                codetype: "CSU1051 | Class"
            },
            {
                link: "theory/",
                title: "Theory: Dive into the World of Design and Analysis of Algorithms: A Comprehensive Guide",
                desc: "Unlock the full potential of algorithms with our in-depth guide to all the concepts. Take your problem-solving skills to the next level and discover a world of efficient solutions. Click now to embark on your DAA journey.",
                codetype: "CSU085 | Concepts"
            },
            {
                link: "lab/",
                title: "Practical: Elevate Your Algorithm Design Skills: A Comprehensive Guide for Lab Enthusiasts",
                desc: "Unleash your potential in the DAA lab with our comprehensive guide covering all the essential concepts. Discover the essence of efficient algorithms and take your problem-solving skills to the next level. Click now to embark on your DAA journey.",
                codetype: "CSU085P | Lab"
            },

        ];
        body_genmenu.processData(arr, def_date, def_author, { isMainCategory: true });
    }
    function get_class(def_date, def_author) {
        const arr = [
            {
                title: "Priori vs. Posteriori Analysis: Navigating Algorithmic Efficiency",
                desc: "Discover how theoretical predictions and real-world data shape efficient software. Learn which analysis method brings faster, practical insights to your development projects. This guide helps you choose the right approach for optimal performance.",
                codetype: "Algorithm Analysis",
                readtime: 5,
                link: "priori-posteriori-analysis"
            },
            {
                title: "Almost Complete Binary Trees: Unveiling Structural Efficiency",
                desc: "Explore nearly perfect tree structures that speed up data retrieval and storage. Master techniques that improve system performance and scalability in everyday applications. This guide reveals the secrets behind efficient data organization.",
                codetype: "Data Structures",
                readtime: 5,
                link: "almost-complete-binary-tree"
            },
            {
                title: "Revision of Concepts from Class",
                desc: "Refresh core algorithms and strategies to excel in exams and projects. This guide offers practical, actionable insights that translate directly into improved problem-solving skills.",
                codetype: "Revision",
                readtime: 6,
                link: "revision"
            },
            {
                title: "Heaps",
                desc: "Used in scheduling, Dijkstra’s algorithm, A* search, and Huffman coding, Heaps are a fundamental data structure. Unlock the secrets behind prioritized scheduling used in task management and network routing. Learn to implement heaps to streamline data processing in real-world systems.",
                codetype: "Concepts",
                readtime: 20,
                link: "heaps-data-structures"
            },
            {
                title: "Tries",
                desc: "Used in autocomplete, dictionary lookups, IP routing, and spell checkers, Tries are a fundamental data structure. See how prefix trees power autocomplete features and rapid search in applications. Gain practical tips to build efficient retrieval systems that enhance user experience.",
                codetype: "Concepts",
                readtime: 20,
                link: "tries-data-structures"
            },
            {
                title: "Priority Queues",
                desc: "Used in scheduling, Dijkstra’s algorithm, A* search, and Huffman coding, Priority Queues are a fundamental data structure. Learn task management techniques crucial for real-time systems and resource allocation. Discover how well-implemented queues can boost performance in everyday computing.",
                codetype: "Data Structures",
                readtime: 20,
                link: "priority-queues"
            },
            {
                title: "Union-Find",
                desc: "Used in Kruskal’s algorithm, network connectivity, and image processing, Union-Find is a fundamental data structure. Learn the practical methods behind connectivity detection in networks and social graphs. This guide shows you how to optimize clustering and streamline network operations.",
                codetype: "Concepts",
                readtime: 20,
                link: "union-find"
            },
            {
                title: "Segment Trees",
                desc: "Used in range queries, interval problems, and lazy propagation, Segment Trees are a fundamental data structure. Discover how to efficiently handle range queries in databases and gaming leaderboards. Gain practical skills to update and query intervals with speed and precision.",
                codetype: "Concepts",
                readtime: 20,
                link: "segment-trees"                
            },
            {
                title: "Fenwick Trees",
                desc: "Used in range queries, prefix sums, and frequency counting, Fenwick Trees are a fundamental data structure. Implement dynamic prefix sum calculations for real-time data analytics and performance monitoring. Learn how this structure accelerates cumulative operations in practical applications.",
                codetype: "Data Structures",
                readtime: 20,
                link: "fenwick-trees"
            },
            {
                title: "Self Balancing Trees",
                desc: "Used in databases, file systems, and network routing, Self-Balancing Trees are a fundamental data structure. Keep your data organized and accessible in file systems and databases. This article reveals techniques to maintain sorted data even during heavy updates, ensuring reliability.",
                codetype: "Concepts",
                readtime: 20,
                link: "self-balancing-trees"                
            },
            {
                title: "Bloom Filters",
                desc: "Used in cache filtering, spell checkers, databases, and network routing, Bloom Filters are a fundamental data structure. Reduce system overhead by learning this space-efficient technique for quick membership testing. Perfect for web caching and spam filtering in large-scale applications.",
                codetype: "Concepts",
                readtime: 20,
                link: "bloom-filters"
            },
            {
                title: "Skip Lists",
                desc: "Alternative to BSTs in databases and distributed systems, Skip Lists are a fundamental data structure. Explore an alternative to balanced trees that delivers fast search and update operations. Discover practical tips for implementing skip lists in scalable system designs.",
                codetype: "Data Structures",
                readtime: 20,
                link: "skip-lists"
            },
            {
                title: "Dijkstra & Bellman-Ford",
                desc: "Shortest path (Google Maps, routing), network connectivity, and network flow are just a few of the applications of Dijkstra and Bellman-Ford. Compare two essential algorithms for shortest-path routing in navigation and network optimization. This guide helps you choose the right approach for faster, real-world routing.",
                codetype: "Concepts",
                readtime: 20,
                link: "dijkstra-bellman-ford"                
            },
            {
                title: "Floyd-Warshall & A* Algorithm",
                desc: "Pathfinding in AI, robotics, and network routing are just a few of the applications of Floyd-Warshall and A*. Ever wondered about the global and heuristic pathfinding methods powering GPS navigation and robotics? Learn how to optimize route planning for dynamic, real-world environments.",
                codetype: "Concepts",
                readtime: 20,
                link: "floyd-warshall-a-star-algorithm"                
            },                        
            {
                title: "Topological Sorting",
                desc: "Task scheduling, dependency resolution (build systems), and course prerequisites are just a few of the applications of Topological Sorting. Organize tasks with dependencies to streamline project scheduling and build automation. Gain practical insights that help manage complex workflows effectively.",
                codetype: "Concepts",
                readtime: 20,
                link: "topological-sorting"
            },
            {
                title: "Minimum Spanning Tree (Prim’s & Kruskal’s)",
                desc: "Used in Network design, clustering algorithms, and image segmentation, Minimum Spanning Trees are a fundamental data structure. Learn to connect networks cost-effectively for telecommunications and infrastructure design. This article offers actionable strategies for minimizing connection expenses.",
                codetype: "Data Structures",
                readtime: 20,
                link: "minimum-spanning-tree-prims-kruskals"
            },
            {
                title: "Strongly Connected Components (Kosaraju’s & Tarjan’s)",
                desc: "Wondered how social networks, web crawling and image processing are connected? Break down complex networks into manageable clusters for social media analysis or web crawling. Discover methods that optimize connectivity and improve system clarity.",
                codetype: "Concepts",
                readtime: 20,
                link: "strongly-connected-components-kosarajus-tarjans"
            },
            {
                title: "Bipartite Graph Checking",
                desc: "Primarily used in job assignments, network flows and image segmentation, Bipartite Graphs are a fundamental data structure. Detect two-part structures to optimize resource matching and scheduling. Learn practical techniques that simplify graph partitioning for assignment problems.",
                codetype: "Concepts",
                readtime: 20,
                link: "bipartite-graph-checking"
            },
            {
                title: "Max Flow (Ford-Fulkerson, Edmonds-Karp)",
                desc: "Transport networks, image segmentation, and network flow are just a few of the applications of Max Flow. Optimize resource distribution in transportation, network traffic, and supply chains. This guide provides real-world strategies to maximize system throughput efficiently.",
                codetype: "Data Structures",
                readtime: 20,
                link: "max-flow-ford-fulkerson-edmonds-karp"
            },
            {
                title: "Knuth-Morris-Pratt (KMP) Algorithm",
                desc: "Most used in general-purpose applications, plagiarism detection, and bioinformatics, the Knuth-Morris-Pratt Algorithm is a powerful string matching algorithm. Enhance text search capabilities for plagiarism detection and content filtering. Learn to implement KMP for rapid, efficient pattern matching in everyday applications.",
                codetype: "Concepts",
                readtime: 20,
                link: "knuth-morris-pratt-kmp-algorithm"                
            },
            {
                title: "Rabin-Karp Algorithm",
                desc: "Most used for multiple pattern searching, plagiarism detection, and bioinformatics, the Rabin-Karp Algorithm is a powerful string matching algorithm. Speed up multi-pattern searching in cybersecurity and data processing tasks. Discover how hash-based methods simplify text analysis in practical scenarios.",
                codetype: "Concepts",
                readtime: 20,
                link: "rabin-karp-algorithm"
            },
            {
                title: "Z-Algorithm",
                desc: "Most used for specific scenarios like bioinformatics or compression, although not as well-known as the KMP or Rabin-Karp Algorithm, the Z-Algorithm is a powerful string matching algorithm. Solve substring search problems in data compression and bioinformatics with linear-time efficiency. This guide offers clear steps to boost search performance in practical applications.",
                codetype: "Concepts",
                readtime: 20,
                link: "z-algorithm"
            },
            {
                title: "Aho-Corasick Algorithm",
                desc: "Spam filters, intrusion detection systems, and antivirus software all use the Aho-Corasick Algorithm to search for multiple patterns simultaneously. Efficiently search multiple patterns simultaneously, crucial for spam filters and intrusion detection systems. Gain practical advice to integrate this algorithm into real-world projects.",
                codetype: "Concepts",
                readtime: 20,
                link: "aho-corasick-algorithm"
            },
            {
                title: "Suffix Array & Suffix Tree",
                desc: "Data compression, DNA sequencing, bioinformatics, and plagiarism detection are just a few of the applications of Suffix Arrays and Suffix Trees. Accelerate text analysis in search engines, DNA sequencing, and data compression. Learn how to build compact indexes that deliver rapid query responses in practice.",
                codetype: "Concepts",
                readtime: 20,
                link: "suffix-array-suffix-tree"
            },
            {
                title: "Levenshtein Distance (Edit Distance, DP-based)",
                desc: "Spell checkers, NLP, DNA comparison, and plagiarism detection all use the Levenshtein Distance to measure the similarity between two strings. Measure string similarity to improve spell-checkers, bioinformatics, and error correction systems. This guide provides practical techniques to enhance user interfaces and data matching.",
                codetype: "Concepts",
                readtime: 20,
                link: "levenshtein-distance-edit-distance-dp-based"
            },
            {
                title: "Knapsack & Variants",
                desc: "Used in resource allocation, project selection, and financial planning, the Knapsack Problem is a classic optimization problem. Solve resource allocation challenges in budgeting, logistics, and project planning. Discover optimization strategies that help you maximize returns with limited resources.",
                codetype: "Concepts",
                readtime: 20,
                link: "knapsack-variants"
            },
            {
                title: "Longest Increasing Subsequence (LIS, Patience Sorting)",
                desc: "Used in finance, stock market predictions, data analysis, and bioinformatics, the Longest Increasing Subsequence is a classic dynamic programming problem. Extract meaningful trends from data to inform stock analysis and performance metrics. Learn how to identify key patterns that drive informed decision-making.",
                codetype: "Concepts",
                readtime: 20,
                link: "longest-increasing-subsequence-lis-patience-sorting"
            },
            {
                title: "Matrix Chain Multiplication",
                desc: "Along with optimizing compiler parsing, network flow, and image processing, Matrix Chain Multiplication is a classic dynamic programming problem. Minimize computation time in tasks like compiler optimization and scheduling operations. Gain practical strategies to determine the most efficient multiplication order in real systems.",
                codetype: "Concepts",
                readtime: 20,
                link: "matrix-chain-multiplication"
            },
            {
                title: "Bitmask DP",
                desc: "Used in solving combinatorial problems efficiently, combinatorial optimization, subset generation, and graph problems, Bitmask Dynamic Programming is a powerful technique. Simplify complex subset problems in scheduling and configuration with dynamic programming. This article offers real-world examples to help you tackle combinatorial challenges.",
                codetype: "Concepts",
                readtime: 20,
                link: "bitmask-dp"                
            },
            {
                title: "Game Theory",
                desc: "Used in economics, political science, and computer science, Game Theory is a powerful tool for strategic decision-making. Apply strategic decision-making models to economics, negotiations, and competitive business. Learn practical applications that drive smarter strategies and better outcomes.",
                codetype: "Concepts",
                readtime: 20,
                link: "game-theory"
            },
            {
                title: "Minimax & Alpha-Beta Pruning",
                desc: "Used in game playing, AI in chess, strategic games, adversarial search, and decision-making, Minimax and Alpha-Beta Pruning are powerful algorithms. Explore adversarial search techniques essential for game AI and strategic planning. Gain practical insights to refine decision-making in competitive environments.",
                codetype: "Concepts",
                readtime: 20,
                link: "minimax-alpha-beta-pruning"
            },
            {
                title: "QuickSort (Optimized with Median-of-Three Pivot)",
                desc: "Used in databases, file systems, and network routing, QuickSort is a fundamental sorting algorithm. Accelerate sorting operations in large datasets with a refined pivot strategy. Discover how this optimization speeds up processes in database and software applications.",
                codetype: "Sorting Algorithms",
                readtime: 20,
                link: "quicksort-optimized-median-of-three-pivot"
            },
            {
                title: "Merge Sort",
                desc: "Used in databases, file systems, and network routing, Merge Sort is a fundamental sorting algorithm. Benefit from a stable, divide-and-conquer approach perfect for handling vast volumes of data. Learn practical examples of merge sort for reliable, predictable performance.",
                codetype: "Sorting Algorithms",
                readtime: 20,
                link: "merge-sort"
            },
            {
                title: "Timsort", 
                desc: "Used in Python, Java, and Android, Timsort is a hybrid sorting algorithm. Understand how adaptive sorting methods optimize performance in Python, Java, and Android. This guide shows real-world applications that boost efficiency and speed in everyday tasks.",
                codetype: "Sorting Algorithms",
                readtime: 20,
                link: "timsort"
            },
            {
                title: "Counting Sort",
                desc: "Used in databases, file systems, and network routing, Counting Sort is a fundamental sorting algorithm. Achieve rapid, non-comparison based ordering ideal for integer sorting in high-performance systems. Discover actionable tips to implement counting sort for predictable results.",
                codetype: "Sorting Algorithms",
                readtime: 20,
                link: "counting-sort"
            },
            {
                title: "Radix Sort",
                desc: "Used when sorting integers, Radix Sort is a fundamental sorting algorithm. Organize large numerical datasets with digit-based sorting methods. Learn practical techniques that enhance processing speed in financial and analytical systems.",
                codetype: "Sorting Algorithms",
                readtime: 20,
                link: "radix-sort"
            },            
            {
                title: "Bucket Sort",
                desc: "Used for sorting floating-point numbers, Bucket Sort is a fundamental sorting algorithm. Partition floating-point numbers efficiently for scientific computations and simulations. This article offers practical guidance to improve performance in numerical data handling.",
                codetype: "Sorting Algorithms",
                readtime: 20,
                link: "bucket-sort"
            },
            {
                title: "Monte Carlo Algorithm",
                desc: "Used in simulations, finance, and statistics, Monte Carlo is a powerful algorithm. Utilize random sampling to simulate complex systems in finance and risk analysis. Learn how probabilistic methods can drive practical decision-making in uncertain environments.",
                codetype: "Concepts",
                readtime: 20,
                link: "monte-carlo-algorithm"
            },
            {
                title: "Las Vegas Algorithm",
                desc: "Used in cryptography, simulations, and statistics, Las Vegas is a powerful algorithm. Embrace randomness with algorithms that always deliver correct outcomes, ideal for cryptography and simulations. Gain practical insights into reliable, probabilistic problem-solving.",
                codetype: "Concepts",
                readtime: 20,
                link: "las-vegas-algorithm"
            },
            {
                title: "Simulated Annealing Algorithm",
                desc: "Used in optimization, neural networks, and cryptography, Simulated Annealing is a powerful algorithm. Explore optimization techniques that escape local optima, used in scheduling and design tasks. This guide offers real-world strategies for approaching complex optimization problems.",
                codetype: "Concepts",
                readtime: 20,
                link: "simulated-annealing-algorithm"
            },
            {
                title: "Genetic Algorithm",
                desc: "Used in AI-based optimizations, neural networks, and cryptography, Genetic Algorithm is a powerful algorithm. Apply evolutionary strategies to solve optimization challenges in machine learning and logistics. Discover practical case studies that illustrate natural selection principles in action.",
                codetype: "Concepts",
                readtime: 20,
                link: "genetic-algorithm"
            },
            {
                title: "Markov Decision Processes (MDP)",
                desc: "Used in reinforcement learning (self-driving cars), AI, robotics, and economics, Markov Decision Processes are a powerful tool for sequential decision-making. Learn to model sequential decisions in robotics, finance, and supply chain management. This article offers practical steps for planning and predicting optimal actions.",
                codetype: "Concepts",
                readtime: 20,
                link: "markov-decision-processes-mdp"
            },
            {
                title: "Convex Hull (Graham’s Scan, Jarvis March)",
                desc: "Used in GIS mapping, collision detection, image processing, robotics, and computer graphics, Convex Hull is a powerful algorithm. Optimize spatial data in GIS mapping and collision detection with efficient boundary algorithms. Discover practical methods to calculate perimeters in real-world scenarios.",
                codetype: "Concepts",
                readtime: 20,
                link: "convex-hull-grahams-scan-jarvis-march"
            },
            {
                title: "Line Intersection (Bentley-Ottmann Algorithm)",
                desc: "What do computer graphics, GIS mapping, and robotics have in common? They all use the Line Intersection Algorithm. Detect crossing lines in graphics, mapping, and robotics with streamlined geometric solutions. Gain actionable insights for efficient rendering and spatial analysis.",
                codetype: "Concepts",
                readtime: 20,
                link: "line-intersection-bentley-ottmann-algorithm"
            },
            {
                title: "Sweep Line Algorithm",
                desc: "Whenever you need to find intersections, overlaps, or conflicts, the Sweep Line Algorithm is your go-to solution. Systematically identify overlaps and intersections for scheduling, GIS, and graphics applications. Learn practical steps to resolve conflicts in real-time event processing.",
                codetype: "Concepts",
                readtime: 20,
                link: "sweep-line-algorithm"
            },
            {
                title: "Delaunay triangulation (Bowyer-Watson Algorithm)",
                desc: "If you need to find the optimal triangulation of a set of points, the Delaunay triangulation is your go-to solution. Generate optimal triangulations for 3D modeling, terrain mapping, and mesh generation. Discover practical techniques that enhance rendering and simulation accuracy.",
                codetype: "Concepts",
                readtime: 20,
                link: "delaunay-triangulation-bowyer-watson-algorithm"
            },
            {
                title: "Closest Pair of Points",
                desc: "Essential in AI-driven algorithms, and frequently used in data clustering and image processing, the Closest Pair of Points algorithm is a powerful tool. Quickly identify minimal distances in clustering, collision detection, and geographic mapping. This guide provides real-world examples to improve spatial analysis accuracy.",
                codetype: "Concepts",
                readtime: 20,
                link: "closest-pair-of-points"
            },
            {
                title: "Voronoi Diagrams (Fortune’s Algorithm)",
                desc: "One of the most powerful algorithms in computational geometry, Voronoi Diagrams are used in GIS mapping, collision detection, image processing, robotics, and computer graphics. Partition space effectively for urban planning, resource allocation, and network design. Learn practical applications that enhance spatial decision-making in complex environments.",
                codetype: "Concepts",
                readtime: 20,
                link: "voronoi-diagrams-fortunes-algorithm"
            },
            {
                title: "End-to-End Multimodal AI Models",
                desc: "Contributing 40% in autonomous vehicles, robotics, and industrial automation, this helps the ego vehicle in Decision-Making, Scene Understanding, Path Planning, and Control. Integrate multiple sensor inputs for autonomous navigation and industrial automation. Discover how these models enhance decision-making and situational awareness in smart systems.",
                codetype: "Concepts",
                readtime: 20,
                link: "end-to-end-multimodal-ai-models"
            },
            {
                title: "Advanced Perception (LiDAR, Liquid Neural Networks, Vision Transformers)",
                desc: "Contributing 35% in autonomous vehicles, robotics, and industrial automation, Advanced Perception algorithms helps in Object Detection, Environment Awareness, and Scene Understanding. Boost object detection and environmental awareness in self-driving cars and surveillance systems. Gain practical insights to improve accuracy and speed in real-time visual processing.",
                codetype: "Concepts",
                readtime: 20,
                link: "advanced-perception-lidar-liquid-neural-networks-vision-transformers"            
            },
            {
                title: "Graph Simultaneous Localization and Mapping (Graph SLAM)",
                desc: "Contributing 15% in autonomous systems, Graph SLAM algorithms allow a vehicle to build a map of an unknown environment while simultaneously tracking its location within that map. Dive into the intricate world of Graph SLAM with our comprehensive guide. Build real-time maps and track positions in robotics and autonomous vehicles. Learn practical methods to enhance navigation and system autonomy effectively.",
                codetype: "Concepts",
                readtime: 20,
                link: "graph-simultaneous-localization-and-mapping-graph-slam"
            },            
            {
                title: "Model Predictive Control (MPC)",
                desc: "Used for Control & Actuation in autonomous vehicles, robotics, and industrial automation, Model Predictive Control is a powerful algorithm which contributes more than 10% in todays ultra modern autonomous technologies. Implement predictive strategies that adjust system behavior in vehicles, robotics, and process automation. This guide offers actionable insights to improve performance through forward planning.",
                codetype: "Concepts",
                readtime: 20,
                link: "model-predictive-control-mpc"
            }
        ];
        body_genmenu.processData(arr, def_date, def_author);
    }
    function get_lab(def_date, def_author) {
        const arr = [
            {
                title: "Interactive Sorting Algorithms Visualizer",
                desc: "Explore and visualize the workings of various sorting algorithms including Bubble Sort, Merge Sort, Quick Sort, and more. This interactive tool offers a step-by-step breakdown, allowing you to understand the mechanics and efficiency of each algorithm.",
                author: "Divya Mohan",
                link: "interactive-sorting-visualizer",
                // cardimage: "_url_"
            },
            {
                "title": "Practical 1: Selection Sort in C",
                "desc": "Delve into the implementation of the Selection Sort algorithm using C and C++. After understanding the code, enhance your grasp by exploring our <a href='interactive-sorting-visualizer'>interactive visualizer</a>.",
                "author": "Shreshth Srivastav",
                "link": "selection-sort",
                date: "Thursday, August 17, 2023",
                author: "Shreshth Srivastav"
                // "cardimage": "_url_"
            },
            {
                "title": "Practical 2: Straight Min Max Algorithm",
                "desc": "Delve into the implementation of the Straight Min Max Algorithm using C, C++. After understanding the code, enhance your grasp by exploring our <a href='interactive-sorting-visualizer'>interactive visualizer</a>.",
                "author": "Shreshth Srivastav",
                "link": "straight-min-max",
                // "cardimage": "_url_",
                date: "Thursday, August 31, 2023"
            },
            {
                "title": "Practical 2: Method 2 - Straight Min Max Algorithm",
                "desc": "Delve into the implementation of the Straight Min Max Algorithm using C. After understanding the code, enhance your grasp by exploring our <a href='interactive-sorting-visualizer'>interactive visualizer</a>.",
                "author": "Shreshth Srivastav",
                "link": "straight-min-max-method-2",
                // "cardimage": "_url_",
                date: "Thursday, August 31, 2023"
            },
            {
                "title": "Practical 3: Binary Search Algorithm",
                "desc": "Delve into the implementation of the Binary Search Algorithm using C++. After understanding the code, enhance your grasp by exploring our <a href='interactive-sorting-visualizer'>interactive visualizer</a>.",
                "author": "Shreshth Srivastav",
                "link": "binary-search-algorithm",
                // "cardimage": "_url_",
                date: "Thursday, September 7, 2023"
            },

            {
                "title": "Practical 4: Merge Sort",
                "desc": "Delve into the implementation of the Merge Sort using C++. After understanding the code, enhance your grasp by exploring our <a href='interactive-sorting-visualizer'>interactive visualizer</a>.",
                "author": "Divya Mohan",
                "link": "merge-sort",
                // "cardimage": "_url_",
                date: "Thursday, September 14, 2023"
            },
            {
                title: "Practical 5: Quick Sort",
                desc: "Delve into the implementation of the Quick Sort using C++. After understanding the code, enhance your grasp by exploring our <a href='interactive-sorting-visualizer'>interactive visualizer</a>.",
                author: "Divya Mohan",
                link: "quick-sort",
                // "cardimage": "_url_",
                date: "Thursday, September 21, 2023"
            },
            {
                "title": "Practical 6: Selection Procedure",
                "desc": "Delve into the implementation of the Selection Procedure (also known as Quick Select) using C++. After understanding the code, enhance your grasp by exploring our <a href='interactive-sorting-visualizer'>interactive visualizer</a>.",
                "author": "Divya Mohan",
                "link": "selection-procedure",
                // "cardimage": "_url_",
                date: "Thursday, September 28, 2023"
            },
            {
                "title": "Practical 7: Divide And Conquer - Strassens Matrix Multiplication",
                "desc": "Delve into the implementation of the Strassens Matrix Multiplication using Divide and Conquer using C++. After understanding the code, enhance your grasp by exploring our <a href='interactive-sorting-visualizer'>interactive visualizer</a>.",
                "author": "Divya Mohan",
                "link": "strassens-matrix-multiplication",
                // "cardimage": "_url_",
                date: "Thursday, October 12, 2023"
            },
            {
                "title": "Practical 8: Heap Sort",
                "desc": "Delve into the implementation of the Heap Sort using heapify using C++. After understanding the code, enhance your grasp by exploring our <a href='interactive-sorting-visualizer'>interactive visualizer</a>.",
                "author": "Divya Mohan",
                "link": "heap-sort",
                // "cardimage": "_url_",
                date: "Thursday, November 15, 2023"
            },
        ];
        body_genmenu.processData(arr, def_date, def_author);
    }


    /**********  AUTOMATION CONTROL **********/    
    let title, link, date, desc, codetype, readtime, author = 1, semester, cardimage, continuereading;
    const functions = {
        theory: get_class,
        lab: get_lab,
        default: get_main
    };
    (functions[window.urlpart5] || functions.default)(datetogen, author);
}