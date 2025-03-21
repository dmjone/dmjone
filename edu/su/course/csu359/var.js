
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
                title: "Introduction to Computer Networks",
                desc: "Learn the basics of computer networks, including the types of networks, network topologies, and network devices. Understand the importance of networking in today's digital world.",
                codetype: "Prerequisite",
                readtime: 45,
                date: "Tue August 5, 2024",
                link: "computer-networks-introduction",                
            },
            {
                title: "Scaler Module 1 - Why do we need Computer Networks?",
                desc: "Explore the reasons why computer networks are essential in today's digital world. Learn how networks enable communication, data sharing, and resource access across devices and locations.",
                codetype: "Scaler Course Summary",
                readtime: 45,
                date: "Mon October 28, 2024",
                link: "scaler-why-do-we-need-computer-networks",
            },           
            {
                title: "Components of a Computer Network",
                desc: "Explore the components of a computer network, including devices, protocols, and services. Learn how network components work together to enable communication and data transfer.",
                codetype: "Prerequisite",
                readtime: 45,
                date: "Tue August 5, 2024",
                link: "components-of-a-computer-network",
                
            },
            {
                title: "Types of Computer Networks",
                desc: "Discover the different types of computer networks, including LANs, WANs, MANs, and PANs. Learn about the characteristics and applications of each network type.",
                codetype: "Prerequisite",
                readtime: 45,
                date: "Tue August 5, 2024",
                link: "types-of-computer-networks",
                
            },
            {
                title: "Fiber Optic Cables",
                desc: "Learn about fiber optic cables used in computer networks to transmit data over long distances. Explore the advantages of fiber optic cables over copper cables and their applications in network infrastructure.",
                codetype: "Prerequisite",
                readtime: 45,
                date: "Tue August 5, 2024",
                link: "fiber-optic-cables",
            },
            {
                title: "Scaler Module 2 - Data Link Layer and LAN Protocols",
                desc: "Learn about the data link layer and LAN protocols used in computer networks. Explore the functions of the data link layer and common LAN protocols such as Ethernet and Wi-Fi.",
                codetype: "Scaler Course Summary",
                readtime: 45,
                date: "Mon October 28, 2024",
                link: "scaler-data-link-layer-and-lan-protocols",
            },
            {
                title: "Network Topologies",
                desc: "Learn about network topologies, including bus, star, ring, mesh, and hybrid topologies. Understand the advantages and disadvantages of each topology and their applications in network design.",
                codetype: "Prerequisite",
                readtime: 45,
                date: "Tue August 5, 2024",
                link: "network-topologies",
                
            },
            {
                title: "Network Interface Cards",
                desc: "Discover network interface cards (NICs) used in computer networks to connect devices to a network. Learn the functions of NICs and how they enable data transfer between devices.",
                codetype: "Prerequisite",
                readtime: 5,
                date: "Tue August 5, 2024",
                link: "network-interface-cards",
            },
            {
                title: "Network Protocols",
                desc: "Explore network protocols used in computer networks to enable communication between devices. Learn about common protocols such as TCP/IP, UDP, HTTP, and FTP.",
                codetype: "Prerequisite",
                readtime: 45,
                date: "Tue August 5, 2024",
                link: "network-protocols",                
            },
            {
                title: "Sliding Window Protocol",
                desc: "Learn about the sliding window protocol used in computer networks to improve data transfer efficiency. Understand how the sliding window protocol manages data flow and error recovery in network communication.",
                codetype: "Prerequisite",
                readtime: 10,
                date: "Tue August 6, 2024",
                link: "sliding-window-protocol",
            },
            {
                title: "SSL/TLS",
                desc: "Explore SSL/TLS protocols used to secure network communication over the internet. Learn how SSL/TLS protocols encrypt data and establish secure connections between clients and servers.",
                codetype: "Prerequisite",
                readtime: 10,
                date: "Tue August 6, 2024",
                link: "ssl-tls",
            },
            {
                title: "Multiple Access Protocols",
                desc: "Learn about multiple access protocols used in computer networks to enable multiple devices to share a common communication channel. Explore CSMA/CD, CSMA/CA, and TDMA protocols and their applications.",
                codetype: "Prerequisite",
                readtime: 10,
                date: "Tue August 6, 2024",
                link: "multiple-access-protocols",
            },
            {
                title: "Address Resolution Protocol",
                desc: "Explore the Address Resolution Protocol (ARP) used in computer networks to map IP addresses to MAC addresses. Learn how ARP resolves network addresses and enables communication between devices.",
                codetype: "Prerequisite",
                readtime: 10,
                date: "Tue August 6, 2024",
                link: "address-resolution-protocol",
            },
            {
                title: "Scaler Module 3 - LAN Protocols and Network Devices",
                desc: "Discover LAN protocols and network devices used in computer networks. Learn about common LAN protocols such as Ethernet and network devices such as switches and routers.",
                codetype: "Scaler Course Summary",
                readtime: 45,
                date: "Mon October 28, 2024",
                link: "scaler-lan-protocols-and-network-devices",
            },
            {
                title: "Network Devices",
                desc: "Discover network devices such as routers, switches, hubs, and access points used in computer networks. Learn the functions of each device and how they contribute to network communication.",
                codetype: "Prerequisite",
                readtime: 45,
                date: "Tue August 5, 2024",
                link: "network-devices",
                
            },
            {
                title: "OSI Model",
                desc: "Learn about the OSI model, a conceptual framework used to understand and design computer networks. Explore the seven layers of the OSI model and their functions in network communication.",
                codetype: "Prerequisite",
                readtime: 30,
                date: "Tue August 6, 2024",
                link: "osi-model",                
            },
            {
                title: "Data Link Layer",
                desc: "Explore the data link layer in the OSI model, responsible for error detection and correction in network communication. Learn the functions of the data link layer and its protocols.",
                codetype: "Prerequisite",
                readtime: 10,
                date: "Tue August 6, 2024",
                link: "data-link-layer",
            },
            {
                title: "TCP/IP Model",
                desc: "Explore the TCP/IP model, a protocol suite used in computer networks to enable communication between devices. Learn the layers of the TCP/IP model and their functions in network communication.",
                codetype: "Prerequisite",
                readtime: 30,
                date: "Tue August 6, 2024",
                link: "tcp-ip-model",
            },
            {
                title: "Internet vs. Intranet vs. Extranet",
                desc: "Explore the differences between the internet, intranet, and extranet in computer networks. Learn how each network type is used to enable communication and data sharing within and between organizations.",
                codetype: "Prerequisite",
                readtime: 30,
                date: "Tue August 6, 2024",
                link: "internet-vs-intranet-vs-extranet",
                
            },
            {
                title: "Network Security",
                desc: "Learn about network security concepts, including threats, vulnerabilities, and countermeasures. Understand the importance of network security and how to protect network assets from cyber threats.",
                codetype: "Prerequisite",
                readtime: 45,
                date: "Tue August 6, 2024",
                link: "network-security",
                
            },            
            {
                title: "Network Architecture",
                desc: "Learn about network architecture, including the client-server and P2P architecture models. Understand how network architecture is designed and implemented to support network communication.",
                codetype: "Prerequisite",
                readtime: 45,
                date: "Tue August 5, 2024",
                link: "network-architecture",
                
            },                        
            {
                title: "OSI Model vs TCP/IP Model",
                desc: "Explore the OSI model and TCP/IP model, two fundamental networking models used to understand and design computer networks. Learn the layers of each model and their functions.",
                codetype: "Prerequisite",
                readtime: 30,
                date: "Sat August 10, 2024",
                link: "osi-model-vs-tcp-ip-model",
                
            },
            {
                title: "Role and Function of Network Components",
                desc: "Discover the role and function of network Components such as Routers, Layer 2 and Layer 3 switches, Next-generation firewalls and IPS, Access points, Controllers , Endpoints, Servers, and PoE devices.",
                codetype: "CCNA v1.1 Concepts",
                readtime: 35,
                date: "Mon August 12, 2024",
                link: "role-and-function-of-network-components",
                
            },
            {
                title: "Characteristics of network topology architectures",
                desc: "Explore the characteristics of network topology architectures, including bus, star, ring, mesh, hybrid, Two-tier, Three-tier, Spine-leaf, WAN, Small office/home office (SOHO), On-premises and cloud. Understand the advantages and disadvantages of each topology.",
                codetype: "CCNA v1.1 Concepts",
                readtime: 30,
                date: "Tue August 13, 2024",
                link: "characteristics-of-network-topology-architectures",
                
            },
            {
                title: "Physical interface and cabling types",
                desc: "Learn about the physical interfaces and cabling types used in computer networks. Explore the different types of cables, connectors, and interfaces used to connect network devices.",
                codetype: "CCNA v1.1 Concepts",
                readtime: 25,
                date: "Fri August 16, 2024",
                link: "physical-interface-and-cabling-types",
                
            },
            {
                title: "Identify interface and cable issues (collisions, errors, mismatch duplex, and/or speed)",
                desc: "Learn how to identify interface and cable issues in computer networks, including collisions, errors, mismatch duplex, and speed. Understand the common problems that can occur in network interfaces and cables.",
                codetype: "CCNA v1.1 Concepts",
                readtime: 20,
                date: "Mon August 19, 2024",
                link: "identify-interface-and-cable-issues",
                
            },
            {
                title: "TCP and UDP",
                desc: "Explore the TCP and UDP protocols, two fundamental protocols used in computer networks. Learn the differences between TCP and UDP and their applications in network communication.",
                codetype: "CCNA v1.1 Concepts",
                readtime: 25,
                date: "Tue August 20, 2024",
                link: "tcp-and-udp",
                
            },
            {
                title: "Configure and verify IPv4 addressing and subnetting",
                desc: "Learn how to configure and verify IPv4 addressing and subnetting in computer networks. Understand the concepts of IPv4 addressing, subnetting, and subnet masks to design and implement IP addressing schemes.",
                codetype: "CCNA v1.1 Concepts",
                readtime: 30,
                date: "Fri August 23, 2024",
                link: "configure-and-verify-ipv4-addressing-and-subnetting",
                
            },
            {
                title: "Private IPv4 addressing",
                desc: "Discover private IPv4 addressing and its importance in computer networks. Learn how private IP addresses are used within local networks to provide internal communication and network security.",
                codetype: "CCNA v1.1 Concepts",
                readtime: 20,
                date: "Mon August 26, 2024",
                link: "private-ipv4-addressing",
                
            },
            {
                title: "IPv6 addressing and Prefix",
                desc: "Explore IPv6 addressing and prefixes, an essential aspect of modern computer networks. Learn the structure of IPv6 addresses, address types, and prefixes used in IPv6 networks.",
                codetype: "CCNA v1.1 Concepts",
                readtime: 25,
                date: "Tue August 27, 2024",
                link: "ipv6-addressing-and-prefix",
                
            },
            {
                title: "Verify IP parameters for Client OS (Windows, Mac OS, Linux)",
                desc: "Learn how to verify IP parameters for client operating systems such as Windows, Mac OS, and Linux. Understand the network settings and configurations required to connect client devices to a network.",
                codetype: "CCNA v1.1 Concepts",
                readtime: 20,
                date: "Fri August 30, 2024",
                link: "verify-ip-parameters-for-client-os",
                
            },
            {
                title: "Wireless Principles",
                desc: "Explore wireless principles and technologies used in computer networks. Learn about wireless standards, technologies, and security protocols to design and implement wireless networks.",
                codetype: "CCNA v1.1 Concepts",
                readtime: 25,
                date: "Fri August 30, 2024",
                link: "wireless-principles",
                
            },
            {
                title: "Virtualization fundamentals (server virtualization, containers, and VRFs)",
                desc: "Discover virtualization fundamentals, including server virtualization, containers, and VRFs. Learn how virtualization technologies are used to optimize resources and improve network performance.",
                codetype: "CCNA v1.1 Concepts",
                readtime: 30,
                date: "Fri August 30, 2024",
                link: "virtualization-fundamentals",
                
            },
            {
                title: "Switching Concepts",
                desc: "Learn the basics of switching in computer networks, including the functions of switches, VLANs, trunking, and spanning tree protocol. Understand how switches operate and communicate within a network.",
                codetype: "CCNA v1.1 Concepts",
                readtime: 35,
                date: "Mon September 2, 2024",
                link: "switching-concepts",
                
            },
            {
                title: "Configure and verify VLANs (normal range) spanning multiple switches",
                desc: "Learn how to configure and verify VLANs spanning multiple switches in computer networks. Understand the concept of VLANs and how they are used to segment networks and improve performance.",
                codetype: "CCNA v1.1 Concepts",
                readtime: 25,
                date: "Tue September 3, 2024",
                link: "configure-and-verify-vlans-spanning-multiple-switches",
                
            },
            {
                title: "Configure and verify interswitch connectivity",
                desc: "Learn how to configure and verify interswitch connectivity in computer networks. Understand the different methods of connecting switches and configuring trunking to enable communication between switches.",
                codetype: "CCNA v1.1 Concepts",
                readtime: 25,
                date: "Tue September 3, 2024",
                link: "configure-and-verify-interswitch-connectivity",
                
            },
            {
                title: "Configure and verify Layer 2 discovery protocols (CDP, LLDP)",
                desc: "Learn how to configure and verify Layer 2 discovery protocols such as CDP and LLDP in computer networks. Understand the role of discovery protocols in network management and device discovery.",
                codetype: "CCNA v1.1 Concepts",
                readtime: 20,
                date: "Tue September 3, 2024",
                link: "configure-and-verify-layer-2-discovery-protocols",
                
            },
            {
                title: "Configure and verify (Layer 2/Layer 3) EtherChannel (LACP)",
                desc: "Learn how to configure and verify EtherChannel using LACP in computer networks. Understand the benefits of EtherChannel and how it is used to aggregate links and improve network performance.",
                codetype: "CCNA v1.1 Concepts",
                readtime: 25,
                date: "Fri September 6, 2024",
                link: "configure-and-verify-etherchannel-lacp",
                
            },
            {
                title: "Basic Operations of Rapid PVST+ Spanning Tree Protocol",
                desc: "Explore the basic operations of Rapid PVST+ Spanning Tree Protocol in computer networks. Learn how STP and RSTP are used to prevent loops and ensure network stability.",
                codetype: "CCNA v1.1 Concepts",
                readtime: 25,
                date: "Fri September 6, 2024",
                link: "basic-operations-of-rapid-pvst-spanning-tree-protocol",
                
            },
            {
                title: "Cisco Wireless Architectures and AP Modes",
                desc: "Discover Cisco wireless architectures and access point modes used in wireless networks. Learn about the different wireless architectures and access point modes supported by Cisco devices.",
                codetype: "CCNA v1.1 Concepts",
                readtime: 30,
                date: "Fri September 6, 2024",
                link: "cisco-wireless-architectures-and-ap-modes",
                
            },
            {
                title: "Physical infrastructure connections of WLAN components",
                desc: "Learn about the physical infrastructure connections of WLAN components in wireless networks. Understand how wireless components are connected to the network infrastructure to provide wireless connectivity.",
                codetype: "CCNA v1.1 Concepts",
                readtime: 25,
                date: "Fri September 6, 2024",
                link: "physical-infrastructure-connections-of-wlan-components",
                
            },
            {
                title: "Network Device Management Access",
                desc: "Learn how to manage network devices and access them remotely in computer networks. Understand the different methods of accessing network devices for configuration and monitoring.",
                codetype: "CCNA v1.1 Concepts",
                readtime: 20,
                date: "Mon September 9, 2024",
                link: "network-device-management-access",
                
            },
            {
                title: "Wireless LAN GUI Configuration",
                desc: "Explore the GUI configuration of wireless LANs in computer networks. Learn how to configure wireless LANs using graphical user interfaces to manage wireless networks effectively.",
                codetype: "CCNA v1.1 Concepts",
                readtime: 25,
                date: "Mon September 9, 2024",
                link: "wireless-lan-gui-configuration",
                
            },
            {
                title: "IP Connectivity",
                desc: "Learn about IP connectivity in computer networks, including the concepts of IP routing, static routing, and dynamic routing. Understand how IP connectivity is established and maintained in network environments.",
                codetype: "CCNA v1.1 Concepts",
                readtime: 30,
                date: "Mon September 9, 2024",
                link: "ip-connectivity",
                
            },
            {
                title: "Router Packet Forwarding Decisions",
                desc: "Explore the packet forwarding decisions made by routers in computer networks. Learn how routers forward packets based on routing tables, destination IP addresses, and routing protocols.",
                codetype: "CCNA v1.1 Concepts",
                readtime: 25,
                date: "Mon September 9, 2024",
                link: "router-packet-forwarding-decisions",
                
            },
            {
                title: "Configure and verify IPv4 and IPv6 static routing",
                desc: "Learn how to configure and verify IPv4 and IPv6 static routing in computer networks. Understand the concept of static routing and how it is used to manually configure routing paths.",
                codetype: "CCNA v1.1 Concepts",
                readtime: 25,
                date: "Mon September 9, 2024",
                link: "configure-and-verify-ipv4-and-ipv6-static-routing",
                
            },
            {
                title: "OSPF Configuration and Verification",
                desc: "Explore the essential concepts of OSPF, including neighbor relationships, authentication, metric calculation, VLSM support, and more. Learn how to configure and verify OSPF for efficient and secure network routing.",
                codetype: "CCNA v1.1 Concepts",
                readtime: 35,
                date: "Mon September 9, 2024",
                link: "ospf-configuration-and-verification",
                
            },
            {
                title: "Configure and verify single area OSPFv2",
                desc: "Learn how to configure and verify single area OSPFv2 in computer networks. Understand the concepts of OSPF and how it is used to establish routing paths within a single OSPF area.",
                codetype: "CCNA v1.1 Concepts",
                readtime: 25,
                date: "Mon September 9, 2024",
                link: "configure-and-verify-single-area-ospfv2",
                
            },
            {
                title: "First Hop Redundancy Protocols",
                desc: "Explore first hop redundancy protocols used in computer networks to provide network redundancy and high availability. Learn about HSRP, VRRP, and GLBP and how they are used to ensure network reliability.",
                codetype: "CCNA v1.1 Concepts",
                readtime: 30,
                date: "Mon September 9, 2024",
                link: "first-hop-redundancy-protocols",
                
            },
            {
                title: "Configure and verify inside source NAT using static and pools",
                desc: "Learn how to configure and verify inside source NAT using static and pools in computer networks. Understand the concept of NAT and how it is used to translate private IP addresses to public IP addresses.",
                codetype: "CCNA v1.1 Concepts",
                readtime: 25,
                date: "Mon September 9, 2024",
                link: "configure-and-verify-inside-source-nat",
                
            },
            {
                title: "Configure and verify NTP operating in a client and server mode",
                desc: "Learn how to configure and verify NTP operating in client and server mode in computer networks. Understand the importance of NTP in network synchronization and time management.",
                codetype: "CCNA v1.1 Concepts",
                readtime: 25,
                date: "Mon September 9, 2024",
                link: "configure-and-verify-ntp-operating-in-client-and-server-mode",
                
            },
            {
                title: "Role of DHCP and DNS within the network",
                desc: "Explore the role of DHCP and DNS within computer networks. Learn how DHCP is used to assign IP addresses dynamically, and how DNS is used to resolve domain names to IP addresses.",
                codetype: "CCNA v1.1 Concepts",
                readtime: 30,
                date: "Mon September 9, 2024",
                link: "role-of-dhcp-and-dns-within-the-network",
                
            },
            {
                title: "Function of SNMP in network operations",
                desc: "Learn about the function of SNMP in network operations and management. Understand how SNMP is used to monitor network devices, collect data, and manage network performance.",
                codetype: "CCNA v1.1 Concepts",
                readtime: 25,
                date: "Mon September 9, 2024",
                link: "function-of-snmp-in-network-operations",
                
            },
            {
                title: "Use of syslog features, including facilities and severity levels",
                desc: "Explore the use of syslog features, including facilities and severity levels in computer networks. Learn how syslog is used for logging and monitoring network events and activities.",
                codetype: "CCNA v1.1 Concepts",
                readtime: 25,
                date: "Mon September 9, 2024",
                link: "use-of-syslog-features",
                
            },
            {
                title: "Configure and verify DHCP client and relay",
                desc: "Learn how to configure and verify DHCP client and relay in computer networks. Understand the role of DHCP clients and relays in obtaining IP addresses and configuring network settings.",
                codetype: "CCNA v1.1 Concepts",
                readtime: 25,
                date: "Mon September 9, 2024",
                link: "configure-and-verify-dhcp-client-and-relay",
                
            },
            {
                title: "Forwarding per-hop behavior (PHB) for QoS",
                desc: "Explore the forwarding per-hop behavior (PHB) for QoS in computer networks. Learn how QoS is used to prioritize network traffic and ensure quality of service for critical applications.",
                codetype: "CCNA v1.1 Concepts",
                readtime: 25,
                date: "Mon September 9, 2024",
                link: "forwarding-per-hop-behavior-for-qos",
                
            },
            {
                title: "Configure network devices for remote access using SSH",
                desc: "Learn how to configure network devices for remote access using SSH in computer networks. Understand the benefits of SSH and how it is used to securely manage network devices.",
                codetype: "CCNA v1.1 Concepts",
                readtime: 25,
                date: "Mon September 9, 2024",
                link: "configure-network-devices-for-remote-access-using-ssh",
                
            },
            {
                title: "Capabilities and functions of TFTP/FTP in the network",
                desc: "Explore the capabilities and functions of TFTP and FTP in computer networks. Learn how TFTP and FTP are used for file transfer and configuration management in network environments.",
                codetype: "CCNA v1.1 Concepts",
                readtime: 25,
                date: "Mon September 9, 2024",
                link: "capabilities-and-functions-of-tftp-ftp",
                
            },
            {
                title: "Key Security Concepts",
                desc: "Learn about key security concepts in computer networks, including the principles of network security, security protocols, and best practices. Understand the importance of security in network design and implementation.",
                codetype: "CCNA v1.1 Concepts",
                readtime: 30,
                date: "Mon September 9, 2024",
                link: "key-security-concepts",
                
            },
            {
                title: "Security Program Elements",
                desc: "Explore the elements of a security program in computer networks, including security policies, procedures, standards, and guidelines. Learn how security programs are designed and implemented to protect network assets.",
                codetype: "CCNA v1.1 Concepts",
                readtime: 30,
                date: "Mon September 9, 2024",
                link: "security-program-elements",
                    
            },
            {
                title: "Configure and verify device access control using local passwords",
                desc: "Learn how to configure and verify device access control using local passwords in computer networks. Understand the importance of access control and how it is used to secure network devices.",
                codetype: "CCNA v1.1 Concepts",
                readtime: 25,
                date: "Mon September 9, 2024",
                link: "configure-and-verify-device-access-control-using-local-passwords",
                
            },
            {
                title: "Security Password Policy",
                desc: "Explore security password policies in computer networks, including password complexity, expiration, and reuse. Learn how password policies are used to enhance network security and protect user accounts.",
                codetype: "CCNA v1.1 Concepts",
                readtime: 25,
                date: "Mon September 9, 2024",
                link: "security-password-policy",
                
            },
            {
                title: "IPsec Remote Access",
                desc: "Learn about IPsec remote access in computer networks, including VPN technologies, encryption, and authentication protocols. Understand how IPsec is used to secure remote access connections.",
                codetype: "CCNA v1.1 Concepts",
                readtime: 30,
                date: "Mon September 9, 2024",
                link: "ipsec-remote-access",
                
            },
            {
                title: "Site-to-site VPN",
                desc: "Explore site-to-site VPNs in computer networks, including tunneling protocols, encryption, and authentication methods. Learn how site-to-site VPNs are used to connect remote sites securely over the internet.",
                codetype: "CCNA v1.1 Concepts",
                readtime: 30,
                date: "Mon September 9, 2024",
                link: "site-to-site-vpn",
                
            },
            {
                title: "Configure and verify access control lists",
                desc: "Learn how to configure and verify access control lists (ACLs) in computer networks. Understand the role of ACLs in controlling traffic flow and securing network devices.",
                codetype: "CCNA v1.1 Concepts",
                readtime: 25,
                date: "Mon September 9, 2024",
                link: "configure-and-verify-access-control-lists",
                
            },
            {
                title: "Configure and verify Layer 2 security features",
                desc: "Learn how to configure and verify Layer 2 security features in computer networks. Understand the security features used to protect Layer 2 protocols and prevent network attacks.",
                codetype: "CCNA v1.1 Concepts",
                readtime: 25,
                date: "Mon September 9, 2024",
                link: "configure-and-verify-layer-2-security-features",
                              
            },
            {
                title: "3A Pillars of Security - Authentication, Authorization, and Accounting",
                desc: "Explore the concepts of 3A (Authentication, Authorization, and Accounting) in computer networks. Learn how 3A is used to control access to network resources and monitor user activities.",
                codetype: "CCNA v1.1 Concepts",
                readtime: 30,
                date: "Mon September 9, 2024",
                link: "3a-pillars-of-security",
                
            },
            {
                title: "Wireless Security Protocols",
                desc: "Learn about wireless security protocols used in computer networks to secure wireless communications. Explore WEP, WPA, WPA2, and WPA3 protocols and their encryption methods.",
                codetype: "CCNA v1.1 Concepts",
                readtime: 30,
                date: "Mon September 9, 2024",
                link: "wireless-security-protocols",
                
            },
            {
                title: "Configure and verify WLAN within the GUI using WPA2 PSK",
                desc: "Learn how to configure and verify WLAN within the GUI using WPA2 PSK in computer networks. Understand the steps to configure a wireless LAN with WPA2 PSK security using graphical user interfaces.",
                codetype: "CCNA v1.1 Concepts",
                readtime: 25,
                date: "Mon September 9, 2024",
                link: "configure-and-verify-wlan-within-the-gui-using-wpa2-psk",
                
            },
            {
                title: "Automation and Programmability",
                desc: "Explore automation and programmability in computer networks, including network automation tools, programming languages, and APIs. Learn how automation is used to streamline network operations and improve efficiency.",
                codetype: "CCNA v1.1 Concepts",
                readtime: 30,
                date: "Mon September 9, 2024",
                link: "automation-and-programmability",
                
            },
            {
                title: "Faculty Lecture 1: Overview of Computer Networks",
                desc: "Get an overview of computer networks, including the types of networks, network topologies, and network devices. Understand the fundamentals of networking and its applications in modern technology.",
                codetype: "Lecture",
                readtime: 45,
                date: "Tue August 6, 2024",
                link: "faculty-lecture-history-overview",
                
            },
            {
                title: "Faculty Lecture 2: Data Communication",
                desc: "Learn about data communication in computer networks, including the transmission of data between devices. Understand the concepts of data transmission, data encoding, and data flow control.",
                codetype: "Lecture",
                readtime: 45,
                date: "Tue August 6, 2024",
                link: "faculty-lecture-data-communication",
                
            },
            {
                title: "Faculty Lecture 3: Data Communication and Networking",
                desc: "Explore data communication and networking in computer networks, including the OSI model and TCP/IP model. Learn how data is transmitted and received between devices in a network.",
                // desc: "<a href='link'>Download Lecture 1</a> <a href='link'>Download Lecture 2</a> <a href='link'>Download Lecture 3</a>",
                codetype: "Lecture",
                readtime: 45,
                date: "Tue August 6, 2024",
                link: "faculty-lecture-data-communication-networking",
                
                // link: "#",
                // continuereading: false
            },
            {
                title: "Practice Questions and their Solutions",
                desc: "Test your knowledge of computer networks with these practice questions and their solutions. Explore a range of topics and concepts to enhance your understanding of networking principles.",
                codetype: "Assignment",
                readtime: 60,
                date: "Tue December 6, 2024",
                link: "assignment",
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