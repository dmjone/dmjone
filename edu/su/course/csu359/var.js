
function get_menu_list(datetogen) {
    function get_main(def_date, def_author) {
        const arr = [
            {
                link: "theory/",
                title: "Computer Networks - Based on CCNA Exam v1.1 (200-301)",
                desc: "A comprehensive guide to computer networks, covering essential concepts, protocols, and network security. Learn the fundamentals of networking and prepare for the CCNA exam with this detailed guidance.",            
                codetype: "CSU359 | Computer Networks",
                cardimage: "https://cdn.dmj.one/edu/su/course/csu359/img/logo.webp"
            },            
            {
                link: "practice/",
                title: "Practice ",
                desc: "Test your knowledge and skills in computer networks with these practice exercises. Explore a range of topics including IP addressing, subnetting, network security, and more to enhance your understanding of networking concepts.",
                codetype: "Practice | Computer Networks",                
            }
        ];

        body_genmenu.processData(arr, def_date, def_author, { isMainCategory: true });
    }
    function get_class(def_date, def_author) {
        const arr = [
            // {
            //     title: "Introduction to Computer Networks",
            //     desc: "Learn the basics of computer networks, including the types of networks, network topologies, and network devices. Understand the importance of networking in today's digital world.",
            //     codetype: "Concepts",
            //     readtime: 45,
            //     date: "Tue August 6, 2024",
            //     link: "computer-networks-introduction"
            // },            
            {
                title: "OSI Model vs TCP/IP Model",
                desc: "Explore the OSI model and TCP/IP model, two fundamental networking models used to understand and design computer networks. Learn the layers of each model and their functions.",
                codetype: "Concepts",
                readtime: 30,
                date: "Sat August 10, 2024",
                link: "osi-model-vs-tcp-ip-model"
            },
            {
                title: "Role and Function of Network Components",
                desc: "Discover the role and function of network Components such as Routers, Layer 2 and Layer 3 switches, Next-generation firewalls and IPS, Access points, Controllers , Endpoints, Servers, and PoE devices.",
                codetype: "Concepts",
                readtime: 35,
                date: "Mon August 12, 2024",
                link: "role-and-function-of-network-components"
            },
            {
                title: "Characteristics of network topology architectures",
                desc: "Explore the characteristics of network topology architectures, including bus, star, ring, mesh, hybrid, Two-tier, Three-tier, Spine-leaf, WAN, Small office/home office (SOHO), On-premises and cloud. Understand the advantages and disadvantages of each topology.",
                codetype: "Concepts",
                readtime: 30,
                date: "Tue August 13, 2024",
                link: "characteristics-of-network-topology-architectures"
            },
            {
                title: "Physical interface and cabling types",
                desc: "Learn about the physical interfaces and cabling types used in computer networks. Explore the different types of cables, connectors, and interfaces used to connect network devices.",
                codetype: "Concepts",
                readtime: 25,
                date: "Fri August 16, 2024",
                link: "physical-interface-and-cabling-types"
            },
            {
                title: "Identify interface and cable issues (collisions, errors, mismatch duplex, and/or speed)",
                desc: "Learn how to identify interface and cable issues in computer networks, including collisions, errors, mismatch duplex, and speed. Understand the common problems that can occur in network interfaces and cables.",
                codetype: "Concepts",
                readtime: 20,
                date: "Mon August 19, 2024",
                link: "identify-interface-and-cable-issues"
            },
            {
                title: "TCP and UDP",
                desc: "Explore the TCP and UDP protocols, two fundamental protocols used in computer networks. Learn the differences between TCP and UDP and their applications in network communication.",
                codetype: "Concepts",
                readtime: 25,
                date: "Tue August 20, 2024",
                link: "tcp-and-udp"
            },
            {
                title: "Configure and verify IPv4 addressing and subnetting",
                desc: "Learn how to configure and verify IPv4 addressing and subnetting in computer networks. Understand the concepts of IPv4 addressing, subnetting, and subnet masks to design and implement IP addressing schemes.",
                codetype: "Concepts",
                readtime: 30,
                date: "Fri August 23, 2024",
                link: "configure-and-verify-ipv4-addressing-and-subnetting"
            },
            {
                title: "Private IPv4 addressing",
                desc: "Discover private IPv4 addressing and its importance in computer networks. Learn how private IP addresses are used within local networks to provide internal communication and network security.",
                codetype: "Concepts",
                readtime: 20,
                date: "Mon August 26, 2024",
                link: "private-ipv4-addressing"
            },
            {
                title: "IPv6 addressing and Prefix",
                desc: "Explore IPv6 addressing and prefixes, an essential aspect of modern computer networks. Learn the structure of IPv6 addresses, address types, and prefixes used in IPv6 networks.",
                codetype: "Concepts",
                readtime: 25,
                date: "Tue August 27, 2024",
                link: "ipv6-addressing-and-prefix"
            },
            {
                title: "Verify IP parameters for Client OS (Windows, Mac OS, Linux)",
                desc: "Learn how to verify IP parameters for client operating systems such as Windows, Mac OS, and Linux. Understand the network settings and configurations required to connect client devices to a network.",
                codetype: "Concepts",
                readtime: 20,
                date: "Fri August 30, 2024",
                link: "verify-ip-parameters-for-client-os"
            },
            {
                title: "Wireless Principles",
                desc: "Explore wireless principles and technologies used in computer networks. Learn about wireless standards, technologies, and security protocols to design and implement wireless networks.",
                codetype: "Concepts",
                readtime: 25,
                date: "Fri August 30, 2024",
                link: "wireless-principles"
            },
            {
                title: "Virtualization fundamentals (server virtualization, containers, and VRFs)",
                desc: "Discover virtualization fundamentals, including server virtualization, containers, and VRFs. Learn how virtualization technologies are used to optimize resources and improve network performance.",
                codetype: "Concepts",
                readtime: 30,
                date: "Fri August 30, 2024",
                link: "virtualization-fundamentals"
            },
            {
                title: "Switching Concepts",
                desc: "Learn the basics of switching in computer networks, including the functions of switches, VLANs, trunking, and spanning tree protocol. Understand how switches operate and communicate within a network.",
                codetype: "Concepts",
                readtime: 35,
                date: "Mon September 2, 2024",
                link: "switching-concepts"
            },
            {
                title: "Configure and verify VLANs (normal range) spanning multiple switches",
                desc: "Learn how to configure and verify VLANs spanning multiple switches in computer networks. Understand the concept of VLANs and how they are used to segment networks and improve performance.",
                codetype: "Concepts",
                readtime: 25,
                date: "Tue September 3, 2024",
                link: "configure-and-verify-vlans-spanning-multiple-switches"
            },
            {
                title: "Configure and verify interswitch connectivity",
                desc: "Learn how to configure and verify interswitch connectivity in computer networks. Understand the different methods of connecting switches and configuring trunking to enable communication between switches.",
                codetype: "Concepts",
                readtime: 25,
                date: "Tue September 3, 2024",
                link: "configure-and-verify-interswitch-connectivity"
            }
            
            
        ];
        body_genmenu.processData(arr, def_date, def_author);
    }

    /**********  AUTOMATION CONTROL **********/
    let title, link, date, desc, codetype, readtime, author = 1, semester, cardimage, continuereading;
    const functions = {
        theory: get_class,        
        default: get_main
    };
    (functions[window.urlpart5] || functions.default)(datetogen, author);
}