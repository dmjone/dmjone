
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