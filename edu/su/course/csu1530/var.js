
function get_menu_list(datetogen) {
    function get_main(def_date, def_author) {
        const arr = [
            {
                link: "theory/",
                title: "Theory: Biometric Security Overview and Concepts",
                desc: "Explore the fundamentals of biometric security, including the principles, technologies, and applications of biometric authentication. This section covers the basics of biometric systems, biometric modalities, and the advantages and challenges of biometric security. Click to learn more about biometric security concepts and their relevance in modern cybersecurity.",
                codetype: "CSU1530 | Biometric Security",
                cardimage: "https://cdn.dmj.one/edu/su/course/csu1530/img/logo.webp",                
                // cardimage_dark: "//cdn.dmj.one/img/needhelp.webp",               
                // continuereading: " Click here to reach out to Faculty directly through email"
            },            
            {
                link: "practice/",
                title: "Practice Biometric Security Concepts: Strengthen Your Knowledge",
                desc: "Reinforce your understanding of Bio-metric Security concepts with hands-on practice exercises. This section offers a range of practical activities and lab assignments to help you apply theoretical knowledge to real-world scenarios. Click to access practice resources and enhance your skills in biometric security.",
                codetype: "Practice | Biometric Security",                
            }
        ];

        body_genmenu.processData(arr, def_date, def_author, { isMainCategory: true });
    }
    function get_class(def_date, def_author) {
        const arr = [
            {
                title: "Introduction to Biometric Security",
                desc: "Discover the basics of biometric security, including the principles, technologies, and applications of biometric authentication. This introductory topic provides an overview of biometric systems, biometric modalities, and the advantages and challenges of biometric security. Click to learn more about biometric security concepts and their relevance in modern cybersecurity.",
                codetype: "Concepts",
                readtime: 10,
                link: "introduction-to-biometric-security",
            },
            {
                title: "Performance Measurement and Evaluation Parameters",
                desc: "Explore the performance measurement and evaluation parameters used in biometric security systems. This topic covers the key metrics for assessing biometric system performance, including choosing a threshold, false acceptance rate, false rejection rate, equal error rate, accuracy, CMC curve, ROC curve, area under ROC curve, and d' index. Click to learn more about performance evaluation in biometric security.",
                codetype: "Concepts",
                readtime: 10,
                link: "performance-measurement-and-evaluation-parameters",
            },
            {
                title: "Biometric Databases",
                desc: "Understand the role of biometric databases in biometric security systems. This topic covers the types of biometric databases, database management, database design, and database security. Click to learn more about biometric databases and their importance in biometric security.",
                codetype: "Concepts",
                readtime: 10,
                link: "biometric-databases",
            },
            {
                title: "Iris Biometric System",
                desc: "Explore the iris biometric system, a popular biometric modality used for authentication and identification. This topic covers the anatomy of the human eye, iris recognition, iris image acquisition, iris feature extraction, iris matching, and iris biometric system applications. Click to learn more about the iris biometric system and its relevance in modern security systems.",
                codetype: "Concepts",
                readtime: 10,
                link: "iris-biometric-system",
            },
            {
                title: "Feature Extraction Methodologies",
                desc: "Discover the feature extraction methodologies used in biometric security systems. This topic covers the feature extraction process, feature selection, feature representation, feature extraction algorithms, and feature extraction techniques. Click to learn more about feature extraction methodologies and their importance in biometric security.",
                codetype: "Concepts",
                readtime: 10,
                link: "feature-extraction-methodologies",
            },
            {
                title: "Fingerprint Biometric System",
                desc: "Understand the fingerprint biometric system, a widely used biometric modality for authentication and identification. This topic covers fingerprint recognition, fingerprint image acquisition, fingerprint feature extraction, fingerprint matching, and fingerprint biometric system applications. Click to learn more about the fingerprint biometric system and its relevance in modern security systems.",
                codetype: "Concepts",
                readtime: 10,
                link: "fingerprint-biometric-system",
            },
            {
                title: "Palmprint Biometric System",
                desc: "Explore the palmprint biometric system, a biometric modality used for authentication and identification. This topic covers palmprint recognition, palmprint image acquisition, palmprint feature extraction, palmprint matching, and palmprint biometric system applications. Click to learn more about the palmprint biometric system and its relevance in modern security systems.",
                codetype: "Concepts",
                readtime: 10,
                link: "palmprint-biometric-system",
            },
            {
                title: "2D Face Biometric System",
                desc: "Discover the 2D face biometric system, a popular biometric modality used for authentication and identification. This topic covers 2D face recognition, 2D face image acquisition, 2D face feature extraction, 2D face matching, and 2D face biometric system applications. Click to learn more about the 2D face biometric system and its relevance in modern security systems.",
                codetype: "Concepts",
                readtime: 10,
                link: "2d-face-biometric-system",
            },
            {
                title: "3D Face Biometric System",
                desc: "Explore the 3D face biometric system, a biometric modality used for authentication and identification. This topic covers 3D face recognition, 3D face image acquisition, 3D face feature extraction, 3D face matching, and 3D face biometric system applications. Click to learn more about the 3D face biometric system and its relevance in modern security systems.",
                codetype: "Concepts",
                readtime: 10,
                link: "3d-face-biometric-system",
            },
            {
                title: "Ear Biometric System",
                desc: "Understand the ear biometric system, a biometric modality used for authentication and identification. This topic covers ear recognition, ear image acquisition, ear feature extraction, ear matching, and ear biometric system applications. Click to learn more about the ear biometric system and its relevance in modern security systems.",
                codetype: "Concepts",
                readtime: 10,
                link: "ear-biometric-system",
            },
            {
                title: "Voice Biometric System",
                desc: "Discover the voice biometric system, a biometric modality used for authentication and identification. This topic covers voice recognition, voice acquisition, voice feature extraction, voice matching, and voice biometric system applications. Click to learn more about the voice biometric system and its relevance in modern security systems.",
                codetype: "Concepts",
                readtime: 10,
                link: "voice-biometric-system",
            },
            {
                title: "Lip Biometric System",
                desc: "Explore the lip biometric system, a biometric modality used for authentication and identification. This topic covers lip recognition, lip image acquisition, lip feature extraction, lip matching, and lip biometric system applications. Click to learn more about the lip biometric system and its relevance in modern security systems.",
                codetype: "Concepts",
                readtime: 10,
                link: "lip-biometric-system",
            },
            {
                title: "Multi-Biometric System",
                desc: "Understand multi-biometric systems, which combine multiple biometric modalities for authentication and identification. This topic covers the advantages, challenges, and applications of multi-biometric systems in security and surveillance. Click to learn more about multi-biometric systems and their relevance in modern security systems.",
                codetype: "Concepts",
                readtime: 10,
                link: "multi-biometric-system",
            },
            {
                title: "Biometric Standards and Protocols",
                desc: "Explore the biometric standards and protocols used in biometric security systems. This topic covers the key standards and protocols for biometric data interchange, biometric data protection, and biometric system interoperability. Click to learn more about biometric standards and protocols and their importance in biometric security.",
                codetype: "Concepts",
                readtime: 10,
                link: "biometric-standards-and-protocols",
            },
            {
                title: "Privacy and Ethical Issues in Biometric Security",
                desc: "Discover the privacy and ethical issues associated with biometric security systems. This topic covers the privacy concerns, ethical considerations, legal implications, and societal impacts of biometric security technologies. Click to learn more about privacy and ethical issues in biometric security.",
                codetype: "Concepts",
                readtime: 10,
                link: "privacy-and-ethical-issues-in-biometric-security",
            },
            {
                title: "Legal Aspects of Biometric Security",
                desc: "Understand the legal aspects of biometric security, including regulations, compliance requirements, and legal frameworks for biometric data protection. This topic covers the legal implications of biometric security technologies, data privacy laws, and industry standards. Click to learn more about the legal aspects of biometric security.",
                codetype: "Concepts",
                readtime: 10,
                link: "legal-aspects-of-biometric-security",
            },
            {
                title: "Bonus: Homomorphic Encryption",
                desc: "Explore homomorphic encryption, a privacy-preserving cryptographic technique used in biometric security systems. This bonus topic covers the basics of homomorphic encryption, its applications in biometric security, and its advantages for secure data processing. Click to learn more about homomorphic encryption and its relevance in modern security systems.",
                codetype: "Concepts",
                readtime: 10,
                link: "homomorphic-encryption",
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