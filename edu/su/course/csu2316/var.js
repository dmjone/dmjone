
function get_menu_list(datetogen) {
    function get_main(def_date, def_author) {
        const arr = [
            {
                link: "theory/",
                title: "Theory: DevOps and Deployment",
                desc: "Explore the fundamental concepts of DevOps and Deployment in this section as you will gain insights into CI/CD, containerization, IaC, VC with Git and GitHub, configuration management with Ansible, monitoring and logging, and cloud deployment and automation.",
                codetype: "CSU2316 | DevOps",
                cardimage: "https://cdn.dmj.one/edu/su/course/csu2316/img/logo.webp",
                // cardimage_dark: "//cdn.dmj.one/img/needhelp.webp",               
                // continuereading: " Click here to reach out to Faculty directly through email"
            },
            // {
            //     link: "lab/",
            //     title: "Lab: Hands-On Practice and Exercises",
            //     desc: "Description of the topic. This section offers practical exercises and interactive tools to help you apply the concepts learned in the theory section. Click to access hands-on labs, coding exercises, and simulations that will enhance your understanding of the topic.",
            //     codetype: "CSU2315 | DevOps",
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
                title: "Intro to DevOps, Git, GitHub, Linux, EC2 and Docker",
                desc: "An introduction to DevOps practices and tools including Git, GitHub, Linux, EC2, and Docker.",
                codetype: "Concepts",
                readtime: 5,
                link: "intro-to-devops-git-github-linux-ec2-and-docker"
            },
            {
                title: "DevOps Principles, Architecture & Lifecycle",
                desc: "An in-depth look at DevOps principles, the infinite lifecycle loop, CI/CD pipelines, and the cultural shift required for modern software engineering.",
                codetype: "Theory",
                readtime: 12,
                date: "2025-12-16",
                link: "devops-principles-architecture-lifecycle"
            },
            {
                title: "Version Control System (VCS)",
                desc: "A detailed guide on Version Control Systems (VCS), explaining their necessity, types, core functions like branching and merging, and their critical role in DevOps.",
                codetype: "Theory",
                readtime: 10,
                date: "2025-12-16",
                link: "version-control-system"
            },            
            {
                title: "Git Version Control",
                desc: "Mastering Git: Understanding its distributed architecture, core commands, branching strategies, and how it powers modern collaboration.",
                codetype: "Theory",
                readtime: 15,
                date: "2025-12-16",
                link: "git-version-control"
            },
            {
                title: "GitHub Collaboration Platform",
                desc: "Comprehensive guide to using GitHub for collaboration, repositories, pull requests, issues, and workflow management.",
                codetype: "Theory",
                readtime: 10,
                date: "2025-12-16",
                link: "github-collaboration-platform"
            },
            {
                title: "GitHub Actions & CI/CD",
                desc: "Learn the fundamentals of GitHub Actions, automation workflows, runners, triggers, and building CI/CD pipelines.",
                codetype: "Theory",
                readtime: 10,
                date: "2025-12-16",
                link: "github-actions-cicd"
            },
            {
                title: "Virtualization",
                desc: "Understanding Virtualization: how it abstracts hardware, enables cloud computing, and differs from containerization.",
                codetype: "Theory",
                readtime: 8,
                date: "2025-12-16",
                link: "virtualization"
            },
            {
                title: "Containerization",
                desc: "An in-depth guide to Containerization, explaining how it works, its advantages over virtualization, and its role in modern DevOps and microservices.",
                codetype: "Theory",
                readtime: 10,
                date: "2025-12-16",
                link: "containerization"
            },
            {
                title: "Amazon EC2 (Elastic Compute Cloud)",
                desc: "Master Amazon EC2, the core compute service of AWS. Learn about instances, AMIs, storage volumes, networking, and scaling.",
                codetype: "Theory",
                readtime: 12,
                date: "2025-12-16",
                link: "amazon-ec2"
            },
            {
                title: "Docker Fundamentals",
                desc: "A detailed guide to Docker fundamentals, covering container architecture, Dockerfiles, images, networking, and best practices.",
                codetype: "Theory",
                readtime: 15,
                date: "2025-12-16",
                link: "docker-fundamentals"
            },
            {
                title: "Docker Compose",
                desc: "Learn how to define and run multi-container Docker applications using Docker Compose and YAML configuration files.",
                codetype: "Theory",
                readtime: 8,
                date: "2025-12-16",
                link: "docker-compose"
            },
            {
                title: "Kubernetes (K8s) Architecture",
                desc: "An in-depth guide to Kubernetes architecture, covering the Control Plane, Worker Nodes, Pods, Deployments, and Services.",
                codetype: "Theory",
                readtime: 15,
                date: "2025-12-16",
                link: "kubernetes-architecture"
            },
            {
                title: "Kubernetes Manifests & Commands",
                desc: "Master Kubernetes Manifest Files and Kubectl commands. Learn to define declarative infrastructure using YAML.",
                codetype: "Theory",
                readtime: 12,
                date: "2025-12-16",
                link: "kubernetes-manifests-commands"
            },
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