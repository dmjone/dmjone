
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
                desc: "Dive deep into the world of algorithm analysis with our comprehensive guide. Unravel the theoretical predictions of a priori and contrast them with the empirical insights of a posteriori. From foundational concepts to advanced nuances, this guide offers a holistic perspective. Begin your journey into the heart of algorithmic efficiency now!",
                codetype: "Algorithm Analysis",
                readtime: 5,
                link: "priori-posteriori-analysis"
            },
            {
                title: "Almost Complete Binary Trees: Unveiling Structural Efficiency",
                desc: "Embark on an exploratory odyssey into the world of Almost Complete Binary Trees with our in-depth guide. Discover the delicate balance and optimized structure of ACBTs, bridging theoretical principles with practical execution. From elemental concepts to complex applications, this guide encapsulates a comprehensive view of ACBTs. Initiate your intellectual venture into the essence of data structural efficiency today!",
                codetype: "Data Structures",
                readtime: 5,
                link: "almost-complete-binary-tree"
            },
            {
                title: "Revision of Concepts from Class",
                desc: "Rule the exams with our extensive revision of concepts. Unravel the complexities and strategic approaches of fundamental theories with advanced problem-solving techniques. This guide provides a overview of all the concepts, from basic recursion to advanced tabulation strategies. Embark on your journey to mastering efficient algorithms and optimal solutions in the realm of Design and Analysis of Algorithm!",
                codetype: "Revision",
                readtime: 6,
                link: "revision"
            },
            {
                title: "Heaps",
                desc: "Used in scheduling, Dijkstra’s algorithm, A* search, and Huffman coding, Heaps are a fundamental data structure. Dive into the intricate world of Heaps with our comprehensive guide. Explore the foundational principles and advanced applications of Heaps, unraveling the complexities of this data structure. From basic concepts to advanced strategies, this guide offers a holistic view of Heaps. Begin your journey into the realm of efficient data structures now!",
                codetype: "Concepts",
                readtime: 20,
                link: "heaps-data-structures"
            },
            {
                title: "Tries",
                desc: "Used in autocomplete, dictionary lookups, IP routing, and spell checkers, Tries are a fundamental data structure. Dive into the intricate world of Tries with our comprehensive guide. Explore the foundational principles and advanced applications of Tries, unraveling the complexities of this data structure. From basic concepts to advanced strategies, this guide offers a holistic view of Tries. Begin your journey into the realm of efficient data structures now!",
                codetype: "Concepts",
                readtime: 20,
                link: "tries-data-structures"
            },
            {
                title: "Priority Queues",
                desc: "Used in scheduling, Dijkstra’s algorithm, A* search, and Huffman coding, Priority Queues are a fundamental data structure. Dive into the intricate world of Priority Queues with our comprehensive guide. Explore the foundational principles and advanced applications of Priority Queues, unraveling the complexities of this data structure. From basic concepts to advanced strategies, this guide offers a holistic view of Priority Queues. Begin your journey into the realm of efficient data structures now!",
                codetype: "Data Structures",
                readtime: 20,
                link: "priority-queues"
            },
            {
                title: "Union-Find",
                desc: "Used in Kruskal’s algorithm, network connectivity, and image processing, Union-Find is a fundamental data structure. Dive into the intricate world of Union-Find with our comprehensive guide. Explore the foundational principles and advanced applications of Union-Find, unraveling the complexities of this data structure. From basic concepts to advanced strategies, this guide offers a holistic view of Union-Find. Begin your journey into the realm of efficient data structures now!",
                codetype: "Concepts",
                readtime: 20,
                link: "union-find"
            },
            {
                title: "Segment Trees",
                desc: "Used in range queries, interval problems, and lazy propagation, Segment Trees are a fundamental data structure. Dive into the intricate world of Segment Trees with our comprehensive guide. Explore the foundational principles and advanced applications of Segment Trees, unraveling the complexities of this data structure. From basic concepts to advanced strategies, this guide offers a holistic view of Segment Trees. Begin your journey into the realm of efficient data structures now!",
                codetype: "Concepts",
                readtime: 20,
                link: "segment-trees"                
            },
            {
                title: "Fenwick Trees",
                desc: "Used in range queries, prefix sums, and frequency counting, Fenwick Trees are a fundamental data structure. Dive into the intricate world of Fenwick Trees with our comprehensive guide. Explore the foundational principles and advanced applications of Fenwick Trees, unraveling the complexities of this data structure. From basic concepts to advanced strategies, this guide offers a holistic view of Fenwick Trees. Begin your journey into the realm of efficient data structures now!",
                codetype: "Data Structures",
                readtime: 20,
                link: "fenwick-trees"
            },
            {
                title: "Self Balancing Trees",
                desc: "Used in databases, file systems, and network routing, Self-Balancing Trees are a fundamental data structure. Dive into the intricate world of Self-Balancing Trees with our comprehensive guide. Explore the foundational principles and advanced applications of Self-Balancing Trees, unraveling the complexities of this data structure. From basic concepts to advanced strategies, this guide offers a holistic view of Self-Balancing Trees. Begin your journey into the realm of efficient data structures now!",
                codetype: "Concepts",
                readtime: 20,
                link: "self-balancing-trees"                
            },
            {
                title: "Bloom Filters",
                desc: "Used in cache filtering, spell checkers, databases, and network routing, Bloom Filters are a fundamental data structure. Dive into the intricate world of Bloom Filters with our comprehensive guide. Explore the foundational principles and advanced applications of Bloom Filters, unraveling the complexities of this data structure. From basic concepts to advanced strategies, this guide offers a holistic view of Bloom Filters. Begin your journey into the realm of efficient data structures now!",
                codetype: "Concepts",
                readtime: 20,
                link: "bloom-filters"
            },
            {
                title: "Skip Lists",
                desc: "Alternative to BSTs in databases and distributed systems, Skip Lists are a fundamental data structure. Dive into the intricate world of Skip Lists with our comprehensive guide. Explore the foundational principles and advanced applications of Skip Lists, unraveling the complexities of this data structure. From basic concepts to advanced strategies, this guide offers a holistic view of Skip Lists. Begin your journey into the realm of efficient data structures now!",
                codetype: "Data Structures",
                readtime: 20,
                link: "skip-lists"
            },
            {
                title: "Dijkstra & Bellman-Ford",
                desc: "Shortest path (Google Maps, routing), network connectivity, and network flow are just a few of the applications of Dijkstra and Bellman-Ford. Dive into the intricate world of Dijkstra and Bellman-Ford with our comprehensive guide. Explore the foundational principles and advanced applications of Dijkstra and Bellman-Ford, unraveling the complexities of this data structure. From basic concepts to advanced strategies, this guide offers a holistic view of Dijkstra and Bellman-Ford. Begin your journey into the realm of efficient data structures now!",
                codetype: "Concepts",
                readtime: 20,
                link: "dijkstra-bellman-ford"                
            },
            {
                title: "Floyd-Warshall & A* Algorithm",
                desc: "Pathfinding in AI, robotics, and network routing are just a few of the applications of Floyd-Warshall and A*. Dive into the intricate world of Floyd-Warshall and A* with our comprehensive guide. Explore the foundational principles and advanced applications of Floyd-Warshall and A*, unraveling the complexities of this data structure. From basic concepts to advanced strategies, this guide offers a holistic view of Floyd-Warshall and A*. Begin your journey into the realm of efficient data structures now!",
                codetype: "Concepts",
                readtime: 20,
                link: "floyd-warshall-a-star-algorithm"                
            },                        
            {
                title: "Topological Sorting",
                desc: "Task scheduling, dependency resolution (build systems), and course prerequisites are just a few of the applications of Topological Sorting. Dive into the intricate world of Topological Sorting with our comprehensive guide. Explore the foundational principles and advanced applications of Topological Sorting, unraveling the complexities of this data structure. From basic concepts to advanced strategies, this guide offers a holistic view of Topological Sorting. Begin your journey into the realm of efficient data structures now!",
                codetype: "Concepts",
                readtime: 20,
                link: "topological-sorting"
            },
            {
                title: "Minimum Spanning Tree (Prim’s & Kruskal’s)",
                desc: "Used in Network design, clustering algorithms, and image segmentation, Minimum Spanning Trees are a fundamental data structure. Dive into the intricate world of Minimum Spanning Trees with our comprehensive guide. Explore the foundational principles and advanced applications of Minimum Spanning Trees, unraveling the complexities of this data structure. From basic concepts to advanced strategies, this guide offers a holistic view of Minimum Spanning Trees. Begin your journey into the realm of efficient data structures now!",
                codetype: "Data Structures",
                readtime: 20,
                link: "minimum-spanning-tree-prims-kruskals"
            },
            {
                title: "Strongly Connected Components (Kosaraju’s & Tarjan’s)",
                desc: "Wondered how social networks, web crawling and image processing are connected? Dive into the intricate world of Strongly Connected Components with our comprehensive guide. Explore the foundational principles and advanced applications of Strongly Connected Components, unraveling the complexities of this data structure. From basic concepts to advanced strategies, this guide offers a holistic view of Strongly Connected Components. Begin your journey into the realm of efficient data structures now!",
                codetype: "Concepts",
                readtime: 20,
                link: "strongly-connected-components-kosarajus-tarjans"
            },
            {
                title: "Bipartite Graph Checking",
                desc: "Primarily used in job assignments, network flows and image segmentation, Bipartite Graphs are a fundamental data structure. Dive into the intricate world of Bipartite Graphs with our comprehensive guide. Explore the foundational principles and advanced applications of Bipartite Graphs, unraveling the complexities of this data structure. From basic concepts to advanced strategies, this guide offers a holistic view of Bipartite Graphs. Begin your journey into the realm of efficient data structures now!",
                codetype: "Concepts",
                readtime: 20,
                link: "bipartite-graph-checking"
            },
            {
                title: "Max Flow (Ford-Fulkerson, Edmonds-Karp)",
                desc: "Transport networks, image segmentation, and network flow are just a few of the applications of Max Flow. Dive into the intricate world of Max Flow with our comprehensive guide. Explore the foundational principles and advanced applications of Max Flow, unraveling the complexities of this data structure. From basic concepts to advanced strategies, this guide offers a holistic view of Max Flow. Begin your journey into the realm of efficient data structures now!",
                codetype: "Data Structures",
                readtime: 20,
                link: "max-flow-ford-fulkerson-edmonds-karp"
            },
            {
                title: "Knuth-Morris-Pratt (KMP) Algorithm",
                desc: "Most used in general-purpose applications, plagiarism detection, and bioinformatics, the Knuth-Morris-Pratt Algorithm is a powerful string matching algorithm. Dive into the intricate world of Knuth-Morris-Pratt Algorithm with our comprehensive guide. Explore the foundational principles and advanced applications of Knuth-Morris-Pratt Algorithm, unraveling the complexities of this data structure. From basic concepts to advanced strategies, this guide offers a holistic view of Knuth-Morris-Pratt Algorithm. Begin your journey into the realm of efficient data structures now!",
                codetype: "Concepts",
                readtime: 20,
                link: "knuth-morris-pratt-kmp-algorithm"                
            },
            {
                title: "Rabin-Karp Algorithm",
                desc: "Most used for multiple pattern searching, plagiarism detection, and bioinformatics, the Rabin-Karp Algorithm is a powerful string matching algorithm. Dive into the intricate world of Rabin-Karp Algorithm with our comprehensive guide. Explore the foundational principles and advanced applications of Rabin-Karp Algorithm, unraveling the complexities of this data structure. From basic concepts to advanced strategies, this guide offers a holistic view of Rabin-Karp Algorithm. Begin your journey into the realm of efficient data structures now!",
                codetype: "Concepts",
                readtime: 20,
                link: "rabin-karp-algorithm"
            },
            {
                title: "Z-Algorithm",
                desc: "Most used for specific scenarios like bioinformatics or compression, although not as well-known as the KMP or Rabin-Karp Algorithm, the Z-Algorithm is a powerful string matching algorithm. Dive into the intricate world of Z-Algorithm with our comprehensive guide. Explore the foundational principles and advanced applications of Z-Algorithm, unraveling the complexities of this data structure. From basic concepts to advanced strategies, this guide offers a holistic view of Z-Algorithm. Begin your journey into the realm of efficient data structures now!",
                codetype: "Concepts",
                readtime: 20,
                link: "z-algorithm"
            },
            {
                title: "Aho-Corasick Algorithm",
                desc: "Spam filters, intrusion detection systems, and antivirus software all use the Aho-Corasick Algorithm to search for multiple patterns simultaneously. Dive into the intricate world of Aho-Corasick Algorithm with our comprehensive guide. Explore the foundational principles and advanced applications of Aho-Corasick Algorithm, unraveling the complexities of this data structure. From basic concepts to advanced strategies, this guide offers a holistic view of Aho-Corasick Algorithm. Begin your journey into the realm of efficient data structures now!",
                codetype: "Concepts",
                readtime: 20,
                link: "aho-corasick-algorithm"
            },
            {
                title: "Suffix Array & Suffix Tree",
                desc: "Data compression, DNA sequencing, bioinformatics, and plagiarism detection are just a few of the applications of Suffix Arrays and Suffix Trees. Dive into the intricate world of Suffix Arrays and Suffix Trees with our comprehensive guide. Explore the foundational principles and advanced applications of Suffix Arrays and Suffix Trees, unraveling the complexities of this data structure. From basic concepts to advanced strategies, this guide offers a holistic view of Suffix Arrays and Suffix Trees. Begin your journey into the realm of efficient data structures now!",
                codetype: "Concepts",
                readtime: 20,
                link: "suffix-array-suffix-tree"
            },
            {
                title: "Levenshtein Distance (Edit Distance, DP-based)",
                desc: "Spell checkers, NLP, DNA comparison, and plagiarism detection all use the Levenshtein Distance to measure the similarity between two strings. Dive into the intricate world of Levenshtein Distance with our comprehensive guide. Explore the foundational principles and advanced applications of Levenshtein Distance, unraveling the complexities of this data structure. From basic concepts to advanced strategies, this guide offers a holistic view of Levenshtein Distance. Begin your journey into the realm of efficient data structures now!",
                codetype: "Concepts",
                readtime: 20,
                link: "levenshtein-distance-edit-distance-dp-based"
            },
            {
                title: "Knapsack & Variants",
                desc: "Used in resource allocation, project selection, and financial planning, the Knapsack Problem is a classic optimization problem. Dive into the intricate world of Knapsack and its variants with our comprehensive guide. Explore the foundational principles and advanced applications of Knapsack, unraveling the complexities of this data structure. From basic concepts to advanced strategies, this guide offers a holistic view of Knapsack and its variants. Begin your journey into the realm of efficient data structures now!",
                codetype: "Concepts",
                readtime: 20,
                link: "knapsack-variants"
            },
            {
                title: "Longest Increasing Subsequence (LIS, Patience Sorting)",
                desc: "Used in finance, stock market predictions, data analysis, and bioinformatics, the Longest Increasing Subsequence is a classic dynamic programming problem. Dive into the intricate world of Longest Increasing Subsequence with our comprehensive guide. Explore the foundational principles and advanced applications of LIS, unraveling the complexities of this data structure. From basic concepts to advanced strategies, this guide offers a holistic view of Longest Increasing Subsequence. Begin your journey into the realm of efficient data structures now!",
                codetype: "Concepts",
                readtime: 20,
                link: "longest-increasing-subsequence-lis-patience-sorting"
            },
            {
                title: "Matrix Chain Multiplication",
                desc: "Along with optimizing compiler parsing, network flow, and image processing, Matrix Chain Multiplication is a classic dynamic programming problem. Dive into the intricate world of Matrix Chain Multiplication with our comprehensive guide. Explore the foundational principles and advanced applications of Matrix Chain Multiplication, unraveling the complexities of this data structure. From basic concepts to advanced strategies, this guide offers a holistic view of Matrix Chain Multiplication. Begin your journey into the realm of efficient data structures now!",
                codetype: "Concepts",
                readtime: 20,
                link: "matrix-chain-multiplication"
            },
            {
                title: "Bitmask DP",
                desc: "Used in solving combinatorial problems efficiently, combinatorial optimization, subset generation, and graph problems, Bitmask Dynamic Programming is a powerful technique. Dive into the intricate world of Bitmask DP with our comprehensive guide. Explore the foundational principles and advanced applications of Bitmask DP, unraveling the complexities of this data structure. From basic concepts to advanced strategies, this guide offers a holistic view of Bitmask DP. Begin your journey into the realm of efficient data structures now!",
                codetype: "Concepts",
                readtime: 20,
                link: "bitmask-dp"                
            },
            {
                title: "Game Theory",
                desc: "Used in economics, political science, and computer science, Game Theory is a powerful tool for strategic decision-making. Dive into the intricate world of Game Theory with our comprehensive guide. Explore the foundational principles and advanced applications of Game Theory, unraveling the complexities of this data structure. From basic concepts to advanced strategies, this guide offers a holistic view of Game Theory. Begin your journey into the realm of efficient data structures now!",
                codetype: "Concepts",
                readtime: 20,
                link: "game-theory"
            },
            {
                title: "Minimax & Alpha-Beta Pruning",
                desc: "Used in game playing, AI in chess, strategic games, adversarial search, and decision-making, Minimax and Alpha-Beta Pruning are powerful algorithms. Dive into the intricate world of Minimax and Alpha-Beta Pruning with our comprehensive guide. Explore the foundational principles and advanced applications of Minimax and Alpha-Beta Pruning, unraveling the complexities of this data structure. From basic concepts to advanced strategies, this guide offers a holistic view of Minimax and Alpha-Beta Pruning. Begin your journey into the realm of efficient data structures now!",
                codetype: "Concepts",
                readtime: 20,
                link: "minimax-alpha-beta-pruning"
            },
            {
                title: "QuickSort (Optimized with Median-of-Three Pivot)",
                desc: "Used in databases, file systems, and network routing, QuickSort is a fundamental sorting algorithm. Dive into the intricate world of QuickSort with our comprehensive guide. Explore the foundational principles and advanced applications of QuickSort, unraveling the complexities of this data structure. From basic concepts to advanced strategies, this guide offers a holistic view of QuickSort. Begin your journey into the realm of efficient data structures now!",
                codetype: "Sorting Algorithms",
                readtime: 20,
                link: "quicksort-optimized-median-of-three-pivot"
            },
            {
                title: "Merge Sort",
                desc: "Used in databases, file systems, and network routing, Merge Sort is a fundamental sorting algorithm. Dive into the intricate world of Merge Sort with our comprehensive guide. Explore the foundational principles and advanced applications of Merge Sort, unraveling the complexities of this data structure. From basic concepts to advanced strategies, this guide offers a holistic view of Merge Sort. Begin your journey into the realm of efficient data structures now!",
                codetype: "Sorting Algorithms",
                readtime: 20,
                link: "merge-sort"
            },
            {
                title: "Timsort", 
                desc: "Used in Python, Java, and Android, Timsort is a hybrid sorting algorithm. Dive into the intricate world of Timsort with our comprehensive guide. Explore the foundational principles and advanced applications of Timsort, unraveling the complexities of this data structure. From basic concepts to advanced strategies, this guide offers a holistic view of Timsort. Begin your journey into the realm of efficient data structures now!",
                codetype: "Sorting Algorithms",
                readtime: 20,
                link: "timsort"
            },
            {
                title: "Counting Sort",
                desc: "Used in databases, file systems, and network routing, Counting Sort is a fundamental sorting algorithm. Dive into the intricate world of Counting Sort with our comprehensive guide. Explore the foundational principles and advanced applications of Counting Sort, unraveling the complexities of this data structure. From basic concepts to advanced strategies, this guide offers a holistic view of Counting Sort. Begin your journey into the realm of efficient data structures now!",
                codetype: "Sorting Algorithms",
                readtime: 20,
                link: "counting-sort"
            },
            {
                title: "Radix Sort",
                desc: "Used when sorting integers, Radix Sort is a fundamental sorting algorithm. Dive into the intricate world of Radix Sort with our comprehensive guide. Explore the foundational principles and advanced applications of Radix Sort, unraveling the complexities of this data structure. From basic concepts to advanced strategies, this guide offers a holistic view of Radix Sort. Begin your journey into the realm of efficient data structures now!",
                codetype: "Sorting Algorithms",
                readtime: 20,
                link: "radix-sort"
            },            
            {
                title: "Bucket Sort",
                desc: "Used for sorting floating-point numbers, Bucket Sort is a fundamental sorting algorithm. Dive into the intricate world of Bucket Sort with our comprehensive guide. Explore the foundational principles and advanced applications of Bucket Sort, unraveling the complexities of this data structure. From basic concepts to advanced strategies, this guide offers a holistic view of Bucket Sort. Begin your journey into the realm of efficient data structures now!",
                codetype: "Sorting Algorithms",
                readtime: 20,
                link: "bucket-sort"
            },
            {
                title: "Monte Carlo Algorithm",
                desc: "Used in simulations, finance, and statistics, Monte Carlo is a powerful algorithm. Dive into the intricate world of Monte Carlo with our comprehensive guide. Explore the foundational principles and advanced applications of Monte Carlo, unraveling the complexities of this data structure. From basic concepts to advanced strategies, this guide offers a holistic view of Monte Carlo. Begin your journey into the realm of efficient data structures now!",
                codetype: "Concepts",
                readtime: 20,
                link: "monte-carlo-algorithm"
            },
            {
                title: "Las Vegas Algorithm",
                desc: "Used in cryptography, simulations, and statistics, Las Vegas is a powerful algorithm. Dive into the intricate world of Las Vegas with our comprehensive guide. Explore the foundational principles and advanced applications of Las Vegas, unraveling the complexities of this data structure. From basic concepts to advanced strategies, this guide offers a holistic view of Las Vegas. Begin your journey into the realm of efficient data structures now!",
                codetype: "Concepts",
                readtime: 20,
                link: "las-vegas-algorithm"
            },
            {
                title: "Simulated Annealing Algorithm",
                desc: "Used in optimization, neural networks, and cryptography, Simulated Annealing is a powerful algorithm. Dive into the intricate world of Simulated Annealing with our comprehensive guide. Explore the foundational principles and advanced applications of Simulated Annealing, unraveling the complexities of this data structure. From basic concepts to advanced strategies, this guide offers a holistic view of Simulated Annealing. Begin your journey into the realm of efficient data structures now!",
                codetype: "Concepts",
                readtime: 20,
                link: "simulated-annealing-algorithm"
            },
            {
                title: "Genetic Algorithm",
                desc: "Used in AI-based optimizations, neural networks, and cryptography, Genetic Algorithm is a powerful algorithm. Dive into the intricate world of Genetic Algorithm with our comprehensive guide. Explore the foundational principles and advanced applications of Genetic Algorithm, unraveling the complexities of this data structure. From basic concepts to advanced strategies, this guide offers a holistic view of Genetic Algorithm. Begin your journey into the realm of efficient data structures now!",
                codetype: "Concepts",
                readtime: 20,
                link: "genetic-algorithm"
            },
            {
                title: "Markov Decision Processes (MDP)",
                desc: "Used in reinforcement learning (self-driving cars), AI, robotics, and economics, Markov Decision Processes are a powerful tool for sequential decision-making. Dive into the intricate world of Markov Decision Processes with our comprehensive guide. Explore the foundational principles and advanced applications of MDP, unraveling the complexities of this data structure. From basic concepts to advanced strategies, this guide offers a holistic view of MDP. Begin your journey into the realm of efficient data structures now!",
                codetype: "Concepts",
                readtime: 20,
                link: "markov-decision-processes-mdp"
            },
            {
                title: "Convex Hull (Graham’s Scan, Jarvis March)",
                desc: "Used in GIS mapping, collision detection, image processing, robotics, and computer graphics, Convex Hull is a powerful algorithm. Dive into the intricate world of Convex Hull with our comprehensive guide. Explore the foundational principles and advanced applications of Convex Hull, unraveling the complexities of this data structure. From basic concepts to advanced strategies, this guide offers a holistic view of Convex Hull. Begin your journey into the realm of efficient data structures now!",
                codetype: "Concepts",
                readtime: 20,
                link: "convex-hull-grahams-scan-jarvis-march"
            },
            {
                title: "Line Intersection (Bentley-Ottmann Algorithm)",
                desc: "What do computer graphics, GIS mapping, and robotics have in common? They all use the Line Intersection Algorithm. Dive into the intricate world of Line Intersection Algorithm with our comprehensive guide. Explore the foundational principles and advanced applications of Line Intersection Algorithm, unraveling the complexities of this data structure. From basic concepts to advanced strategies, this guide offers a holistic view of Line Intersection Algorithm. Begin your journey into the realm of efficient data structures now!",
                codetype: "Concepts",
                readtime: 20,
                link: "line-intersection-bentley-ottmann-algorithm"
            },
            {
                title: "Sweep Line Algorithm",
                desc: "Whenever you need to find intersections, overlaps, or conflicts, the Sweep Line Algorithm is your go-to solution. Dive into the intricate world of Sweep Line Algorithm with our comprehensive guide. Explore the foundational principles and advanced applications of Sweep Line Algorithm, unraveling the complexities of this data structure. From basic concepts to advanced strategies, this guide offers a holistic view of Sweep Line Algorithm. Begin your journey into the realm of efficient data structures now!",
                codetype: "Concepts",
                readtime: 20,
                link: "sweep-line-algorithm"
            },
            {
                title: "Delaunay triangulation (Bowyer-Watson Algorithm)",
                desc: "If you need to find the optimal triangulation of a set of points, the Delaunay triangulation is your go-to solution. Dive into the intricate world of Delaunay triangulation with our comprehensive guide. Explore the foundational principles and advanced applications of Delaunay triangulation, unraveling the complexities of this data structure. From basic concepts to advanced strategies, this guide offers a holistic view of Delaunay triangulation. Begin your journey into the realm of efficient data structures now!",
                codetype: "Concepts",
                readtime: 20,
                link: "delaunay-triangulation-bowyer-watson-algorithm"
            },
            {
                title: "Closest Pair of Points",
                desc: "Essential in AI-driven algorithms, and frequently used in data clustering and image processing, the Closest Pair of Points algorithm is a powerful tool. Dive into the intricate world of Closest Pair of Points with our comprehensive guide. Explore the foundational principles and advanced applications of Closest Pair of Points, unraveling the complexities of this data structure. From basic concepts to advanced strategies, this guide offers a holistic view of Closest Pair of Points. Begin your journey into the realm of efficient data structures now!",
                codetype: "Concepts",
                readtime: 20,
                link: "closest-pair-of-points"
            },
            {
                title: "Voronoi Diagrams (Fortune’s Algorithm)",
                desc: "One of the most powerful algorithms in computational geometry, Voronoi Diagrams are used in GIS mapping, collision detection, image processing, robotics, and computer graphics. Dive into the intricate world of Voronoi Diagrams with our comprehensive guide. Explore the foundational principles and advanced applications of Voronoi Diagrams, unraveling the complexities of this data structure. From basic concepts to advanced strategies, this guide offers a holistic view of Voronoi Diagrams. Begin your journey into the realm of efficient data structures now!",
                codetype: "Concepts",
                readtime: 20,
                link: "voronoi-diagrams-fortunes-algorithm"
            },
            {
                title: "End-to-End Multimodal AI Models",
                desc: "Contributing 40% in autonomous vehicles, robotics, and industrial automation, this helps the ego vehicle in Decision-Making, Scene Understanding, Path Planning, and Control. Dive into the intricate world of End-to-End Multimodal AI Models with our comprehensive guide. Explore the foundational principles and advanced applications of End-to-End Multimodal AI Models, unraveling the complexities of this data structure. From basic concepts to advanced strategies, this guide offers a holistic view of End-to-End Multimodal AI Models. Begin your journey now!",
                codetype: "Concepts",
                readtime: 20,
                link: "end-to-end-multimodal-ai-models"
            },
            {
                title: "Advanced Perception (LiDAR, Liquid Neural Networks, Vision Transformers)",
                desc: "Contributing 35% in autonomous vehicles, robotics, and industrial automation, Advanced Perception algorithms helps in Object Detection, Environment Awareness, and Scene Understanding.",
                codetype: "Concepts",
                readtime: 20,
                link: "advanced-perception-lidar-liquid-neural-networks-vision-transformers"            
            },
            {
                title: "Graph Simultaneous Localization and Mapping (Graph SLAM)",
                desc: "Contributing 15% in autonomous systems, Graph SLAM algorithms allow a vehicle to build a map of an unknown environment while simultaneously tracking its location within that map. Dive into the intricate world of Graph SLAM with our comprehensive guide.",
                codetype: "Concepts",
                readtime: 20,
                link: "graph-simultaneous-localization-and-mapping-graph-slam"
            },            
            {
                title: "Model Predictive Control (MPC)",
                desc: "Used for Control & Actuation in autonomous vehicles, robotics, and industrial automation, Model Predictive Control is a powerful algorithm which contributes more than 10% in todays ultra modern autonomous technologies. Dive into the intricate world of Model Predictive Control with our comprehensive guide. Explore the foundational principles and advanced applications of Model Predictive Control, unraveling the complexities of this data structure. From basic concepts to advanced strategies, this guide offers a holistic view of Model Predictive Control. Begin your journey now!",
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