
function get_menu_list(datetogen) {
    function get_main(def_date, def_author) {
        const arr = [
            {
                link: "theory/",
                title: "Theory: Cloud Computing Concepts",
                desc: "Explore the fundamental concepts of cloud computing, including cloud service models, deployment models, and key characteristics. This section provides an in-depth overview of cloud computing principles, enabling you to understand the benefits, challenges, and applications of cloud technology. Click to access the theory section and enhance your knowledge of cloud computing concepts.",
                codetype: "DMJCCLT | Cloud Computing",
            },
            // {
            //     link: "lab/",
            //     title: "Lab: Hands-On Practice and Exercises",
            //     desc: "Description of the topic. This section offers practical exercises and interactive tools to help you apply the concepts learned in the theory section. Click to access hands-on labs, coding exercises, and simulations that will enhance your understanding of the topic.",
            //     codetype: "CSUCODE | Course",
            // },
            // {
            //     link: "practice/",
            //     title: "Practice Operating Systems Concepts: Strengthen Your Knowledge",
            //     desc: "Reinforce your understanding of Operating Systems with practice exercises and interactive tools. This section offers a range of resources to help you master operating system concepts, including sorting algorithms, virtual machine installation, and more. Click to access hands-on exercises that will enhance your comprehension of operating system principles and prepare you for advanced topics in computer science.",
            //     codetype: "Practice | Operating Systems",                
            // }
        ];

        body_genmenu.processData(arr, def_date, def_author, { isMainCategory: true });
    }
    function get_class(def_date, def_author) {
        const arr = [
            {
                title: "What is cloud computing?",
                desc: "Explore the fundamental concepts of cloud computing, including cloud service models, deployment models, and key characteristics. This section provides an in-depth overview of cloud computing principles, enabling you to understand the benefits, challenges, and applications of cloud technology. Click to access the theory section and enhance your knowledge of cloud computing concepts.",
                codetype: "Concepts",
                readtime: 5,
                link: "what-is-cloud-computing"
            },
            {
                title: "Cloud Service Models",
                desc: "Learn about the different cloud service models, including Infrastructure as a Service (IaaS), Platform as a Service (PaaS), and Software as a Service (SaaS). This section explores the key features and use cases of each service model, helping you understand how cloud services are delivered and consumed. Click to access the theory section and deepen your knowledge of cloud service models.",
                codetype: "Concepts",
                readtime: 5,
                link: "cloud-service-models"
            },
            {
                title: "Cloud Deployment Models",
                desc: "Explore the various cloud deployment models, including public cloud, private cloud, hybrid cloud, and community cloud. This section examines the characteristics and benefits of each deployment model, helping you understand how cloud resources are provisioned and managed. Click to access the theory section and enhance your understanding of cloud deployment models.",
                codetype: "Concepts",
                readtime: 5,
                link: "cloud-deployment-models"
            },
            {
                title: "MapReduce",
                desc: "Learn about MapReduce, a programming model and processing technique used in distributed computing environments. This section explores the key concepts of MapReduce, including map and reduce functions, parallel processing, and fault tolerance. Click to access the theory section and deepen your understanding of MapReduce and its applications.",
                codetype: "Concepts",
                readtime: 5,
                link: "mapreduce"
            },
            {
                title: "MapReduce - What, How and Why",
                desc: "Explore the MapReduce programming model and its applications in distributed computing environments with questions like What, How and Why.",
                codetype: "Concepts",
                readtime: 5,
                link: "mapreduce-what-how-why"
            },
            {
                title: "Case Study: Integration of Cloud Computing Paradigms in Modern Distributed Systems",
                desc: "Explore a case study on the integration of cloud computing paradigms in modern distributed systems. This section examines real-world examples of cloud computing applications and their impact on distributed systems architecture. Click to access the case study and learn how cloud computing is transforming the way we design and deploy distributed systems.",
                codetype: "Case Study",
                readtime: 5,
                link: "case-study-integration-cloud-computing-paradigms"
            },
            {
                title: "Homework Assignment 1: Real-World Cloud Computing and Distributed Systems Challenge",
                desc: "Apply your knowledge of cloud computing and distributed systems to solve a real-world challenge. This homework assignment will test your understanding of key concepts, including cloud service models, MapReduce, and distributed computing principles. Click to access the assignment and demonstrate your proficiency in cloud computing and distributed systems.",
                codetype: "Assignment",
                readtime: 1,
                link: "homework-assignment-1"
            },
            {
                title: "Gossip Protocol",
                desc: "Learn about the Gossip Protocol, a communication algorithm used in distributed systems to disseminate information efficiently. This section explores the key features and benefits of the Gossip Protocol, including scalability, fault tolerance, and eventual consistency. Click to access the theory section and deepen your understanding of the Gossip Protocol and its applications in distributed systems.",
                codetype: "Concepts",
                readtime: 5,
                link: "gossip-protocol"
            },
            {
                title: "Membership Protocol",
                desc: "Explore the Membership Protocol, a distributed systems algorithm used to maintain group membership and detect failures. This section examines the key features and benefits of the Membership Protocol, including scalability, fault tolerance, and dynamic membership management. Click to access the theory section and enhance your understanding of the Membership Protocol and its applications in distributed systems.",
                codetype: "Concepts",
                readtime: 5,
                link: "membership-protocol"
            },
            {
                title: "Grids",
                desc: "Learn about Grid Computing, a distributed computing model that enables the sharing and aggregation of computational resources. This section explores the key features and benefits of Grid Computing, including resource pooling, workload balancing, and virtualization. Click to access the theory section and deepen your understanding of Grid Computing and its applications in distributed systems.",
                codetype: "Concepts",
                readtime: 5,
                link: "grids"
            },
            {
                title: "Challenging Brainstorming Homework: Multidisciplinary Grid and Gossip-Based Distributed Systems Design",
                desc: "Engage in a challenging brainstorming exercise to design multidisciplinary grid and gossip-based distributed systems. This homework assignment will test your creativity and problem-solving skills as you explore innovative solutions to real-world challenges. Click to access the assignment and demonstrate your ability to design complex distributed systems using grid and gossip-based algorithms.",
                codetype: "Assignment",
                readtime: 1,
                link: "homework-assignment-2"
            },
            {
                title: "Peer-to-Peer (P2P) Networks",
                desc: "Explore Peer-to-Peer (P2P) Networks, a distributed systems architecture that enables direct communication and resource sharing between nodes. This section examines the key features and benefits of P2P Networks, including decentralized communication, fault tolerance, and scalability. Click to access the theory section and enhance your understanding of P2P Networks and their applications in distributed systems.",
                codetype: "Concepts",
                readtime: 5,
                link: "peer-to-peer-networks"
            },
            {
                title: "Key Value Stores",
                desc: "Learn about Key-Value Stores, a distributed systems data storage model that stores data as key-value pairs. This section explores the key features and benefits of Key-Value Stores, including high availability, fault tolerance, and scalability. Click to access the theory section and deepen your understanding of Key-Value Stores and their applications in distributed systems.",
                codetype: "Concepts",
                readtime: 5,
                link: "key-value-stores"
            },
            {
                title: "Time and Orderings in Distributed Systems",
                desc: "Explore the concepts of time and orderings in distributed systems, including logical clocks, vector clocks, and Lamport timestamps. This section examines the key features and benefits of time and orderings, including causality, consistency, and synchronization. Click to access the theory section and enhance your understanding of time and orderings in distributed systems.",
                codetype: "Concepts",
                readtime: 5,
                link: "time-and-orderings"
            },
            {
                title: "Reviewing Concepts of Key Value Stores and Time and Orderings in Distributed Systems",
                desc: "Review the concepts of Key Value Stores and Time and Orderings in Distributed Systems with questions like What, How and Why.",
                codetype: "Concepts",
                readtime: 5,
                link: "review-key-value-stores-time-orderings"

            },
            {
                title: "Homework 3: Novel Approach to Conflict-Free Distributed Scheduling for Urban Ride-Sharing Platforms",
                desc: "Engage in a novel approach to conflict-free distributed scheduling for urban ride-sharing platforms. This homework assignment will challenge you to design an innovative solution to optimize scheduling and resource allocation in a distributed environment. Click to access the assignment and demonstrate your ability to apply distributed systems concepts to real-world problems.",
                codetype: "Assignment",
                readtime: 1,
                link: "homework-assignment-3"
            },
            {
                title: "Snapshots in Distributed Systems",
                desc: "Learn about Snapshots in Distributed Systems, a technique used to capture the global state of a distributed system at a specific point in time. This section explores the key features and benefits of snapshots, including consistency, causality, and fault tolerance. Click to access the theory section and deepen your understanding of snapshots in distributed systems.",
                codetype: "Concepts",
                readtime: 5,
                link: "snapshots"
            },
            {
                title: "Multicast Communication in Distributed Systems",
                desc: "Explore Multicast Communication in Distributed Systems, a messaging pattern used to deliver messages to multiple recipients simultaneously. This section examines the key features and benefits of multicast communication, including efficiency, scalability, and fault tolerance. Click to access the theory section and enhance your understanding of multicast communication in distributed systems.",
                codetype: "Concepts",
                readtime: 5,
                link: "multicast-communication"
            },
            {
                title: "Paxos Algorithm",
                desc: "Explore the Paxos Algorithm, a distributed systems consensus protocol used to achieve agreement among a group of nodes. This section examines the key features and benefits of the Paxos Algorithm, including fault tolerance, safety, and liveness properties. Click to access the theory section and enhance your understanding of the Paxos Algorithm and its applications in distributed systems.",
                codetype: "Concepts",
                readtime: 5,
                link: "paxos-algorithm"
            },
            {
                title: "Leader Election in Distributed Systems",
                desc: "Learn about Leader Election in Distributed Systems, a process used to select a leader node in a distributed environment. This section explores the key features and benefits of leader election, including fault tolerance, scalability, and consensus. Click to access the theory section and deepen your understanding of leader election in distributed systems.",
                codetype: "Concepts",
                readtime: 5,
                link: "leader-election"
            },
            {
                title: "Mutual Exclusion",
                desc: "Explore Mutual Exclusion in Distributed Systems, a synchronization technique used to prevent concurrent access to shared resources. This section examines the key features and benefits of mutual exclusion, including deadlock prevention, fairness, and efficiency. Click to access the theory section and enhance your understanding of mutual exclusion in distributed systems.",
                codetype: "Concepts",
                readtime: 5,
                link: "mutual-exclusion"
            },
            {
                title: "Concurrency Control in Distributed Systems",
                desc: "Learn about Concurrency Control in Distributed Systems, a mechanism used to manage access to shared resources in a concurrent environment. This section explores the key features and benefits of concurrency control, including isolation, consistency, and scalability. Click to access the theory section and deepen your understanding of concurrency control in distributed systems.",
                codetype: "Concepts",
                readtime: 5,
                link: "concurrency-control"
            },
            {
                title: "Replication Control in Distributed Systems",
                desc: "Explore Replication Control in Distributed Systems, a technique used to manage data replication across multiple nodes. This section examines the key features and benefits of replication control, including fault tolerance, consistency, and availability. Click to access the theory section and enhance your understanding of replication control in distributed systems.",
                codetype: "Concepts",
                readtime: 5,
                link: "replication-control"
            },
            {
                title: "Stream Processing in Distributed Systems",
                desc: "Learn about Stream Processing in Distributed Systems, a data processing technique used to analyze real-time data streams. This section explores the key features and benefits of stream processing, including low latency, scalability, and fault tolerance. Click to access the theory section and deepen your understanding of stream processing in distributed systems.",
                codetype: "Concepts",
                readtime: 5,
                link: "stream-processing"
            },
            {
                title: "Distributed Graph Processing",
                desc: "Explore Distributed Graph Processing, a data processing technique used to analyze and traverse graph data structures across multiple nodes. This section examines the key features and benefits of distributed graph processing, including parallelism, fault tolerance, and scalability. Click to access the theory section and enhance your understanding of distributed graph processing in distributed systems.",
                codetype: "Concepts",
                readtime: 5,
                link: "distributed-graph-processing"
            },
            {
                title: "Structure of Networks",
                desc: "Learn about the Structure of Networks in Distributed Systems, including the physical and logical organization of network nodes. This section explores the key features and benefits of network structures, including scalability, fault tolerance, and performance. Click to access the theory section and deepen your understanding of network structures in distributed systems.",
                codetype: "Concepts",
                readtime: 5,
                link: "structure-of-networks"
            },
            {
                title: "Scheduling Algorithms in Distributed Systems",
                desc: "Explore Scheduling Algorithms in Distributed Systems, a technique used to allocate resources and tasks across multiple nodes. This section examines the key features and benefits of scheduling algorithms, including fairness, efficiency, and load balancing. Click to access the theory section and enhance your understanding of scheduling algorithms in distributed systems.",
                codetype: "Concepts",
                readtime: 5,
                link: "scheduling-algorithms"
            },
            {
                title: "Distributed File Systems",
                desc: "Explore Distributed File Systems, a distributed systems architecture that enables the storage and retrieval of files across multiple nodes. This section examines the key features and benefits of Distributed File Systems, including fault tolerance, scalability, and data redundancy. Click to access the theory section and enhance your understanding of Distributed File Systems and their applications in distributed computing.",
                codetype: "Concepts",
                readtime: 5,
                link: "distributed-file-systems"
            },
            {
                title: "Distributed Shared Memory",
                desc: "Learn about Distributed Shared Memory, a memory model used in distributed systems to share memory across multiple nodes. This section explores the key features and benefits of Distributed Shared Memory, including data consistency, fault tolerance, and scalability. Click to access the theory section and deepen your understanding of Distributed Shared Memory and its applications in distributed systems.",
                codetype: "Concepts",
                readtime: 5,
                link: "distributed-shared-memory"
            },
            {
                title: "Sensor Networks",
                desc: "Explore Sensor Networks, a distributed systems architecture that enables the collection and processing of sensor data. This section examines the key features and benefits of Sensor Networks, including energy efficiency, scalability, and data aggregation. Click to access the theory section and enhance your understanding of Sensor Networks and their applications in distributed systems.",
                codetype: "Concepts",
                readtime: 5,
                link: "sensor-networks"
            },
            {
                title: "Security in Distributed Systems",
                desc: "Learn about Security in Distributed Systems, including encryption, authentication, and access control mechanisms. This section explores the key features and benefits of security measures, including confidentiality, integrity, and availability. Click to access the theory section and deepen your understanding of security in distributed systems.",
                codetype: "Concepts",
                readtime: 5,
                link: "security-in-distributed-systems"
            }
            // {
            //     title: "Distributed Hash Table (DHT)",
            //     desc: "Learn about the Distributed Hash Table (DHT), a distributed systems data structure used to store and retrieve key-value pairs. This section explores the key features and benefits of DHTs, including decentralized storage, fault tolerance, and efficient key lookup. Click to access the theory section and deepen your understanding of DHTs and their applications in distributed systems.",
            //     codetype: "Concepts",
            //     readtime: 5,
            //     link: "distributed-hash-table"
            // },
            // {
            //     title: "Distributed File Systems",
            //     desc: "Explore Distributed File Systems, a distributed systems architecture that enables the storage and retrieval of files across multiple nodes. This section examines the key features and benefits of Distributed File Systems, including fault tolerance, scalability, and data redundancy. Click to access the theory section and enhance your understanding of Distributed File Systems and their applications in distributed computing.",
            //     codetype: "Concepts",
            //     readtime: 5,
            //     link: "distributed-file-systems"
            // },
            // {
            //     title: "Consistent Hashing",
            //     desc: "Learn about Consistent Hashing, a distributed systems algorithm used to map keys to nodes in a consistent and efficient manner. This section explores the key features and benefits of Consistent Hashing, including load balancing, fault tolerance, and data replication. Click to access the theory section and deepen your understanding of Consistent Hashing and its applications in distributed systems.",
            //     codetype: "Concepts",
            //     readtime: 5,
            //     link: "consistent-hashing"
            // },
            // {
            //     title: "Paxos Algorithm",
            //     desc: "Explore the Paxos Algorithm, a distributed systems consensus protocol used to achieve agreement among a group of nodes. This section examines the key features and benefits of the Paxos Algorithm, including fault tolerance, safety, and liveness properties. Click to access the theory section and enhance your understanding of the Paxos Algorithm and its applications in distributed systems.",
            //     codetype: "Concepts",
            //     readtime: 5,
            //     link: "paxos-algorithm"
            // },
            // {
            //     title: "Raft Consensus Algorithm",
            //     desc: "Learn about the Raft Consensus Algorithm, a distributed systems consensus protocol designed for ease of understanding and implementation. This section explores the key features and benefits of the Raft Algorithm, including leader election, log replication,
        ];
        body_genmenu.processData(arr, def_date, def_author);
    }
    function get_lab(def_date, def_author) {
        const arr = [
            // {
            //     title: "Interactive Sorting Algorithms Visualizer",
            //     desc: "Explore and visualize the workings of various sorting algorithms including Bubble Sort, Merge Sort, Quick Sort, and more. This interactive tool offers a step-by-step breakdown, allowing you to understand the mechanics and efficiency of each algorithm.",
            //     author: "Divya Mohan",
            //     link: "https://colab.research.google.com/drive/1goYusw-6vB2d2qZtxo4V1kt4mmLBrN11?usp=sharing",
            //     // cardimage: "_url_"
            // },
            {
                title: "Practical 1: Procedure for VirtualBox Installation and Configuration",
                desc: "Learn to set up your operating system lab environment with VirtualBox, a powerful virtualization tool for creating and managing virtual machines. This practical exercise will guide you through the installation and configuration of VirtualBox, enabling you to create a virtualized environment for hands-on learning and experimentation.",
                codetype: "Installation",
                readtime: 2,
                date: "Wed February 07, 2024",
                link: "installing-virtualbox"
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