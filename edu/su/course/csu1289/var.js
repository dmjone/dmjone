
function get_menu_list(datetogen) {
    function get_main(def_date, def_author) {
        const arr = [
            {
                link: "class/",
                title: "Theory: Explore the Fascinating World of Digital Electronics: A Comprehensive Guide",
                desc: "Unlock the full potential of digital electronics with our in-depth guide to all the concepts. Take your tech skills to the next level and discover a world of endless possibilities. Click now to begin your digital journey.",
                codetype: "CSU1289 | Concepts"
            },
            {
                link: "lab/",
                title: "Practical: Elevate Your Digital Electronics Skills: A Comprehensive Guide for Lab Enthusiasts",
                desc: "Unleash your potential in the digital electronics lab with our comprehensive guide covering all the essential concepts. Discover the magic of electronics and take your tech skills to the next level. Click now to begin your digital journey.",
                codetype: "CSU1289P | Lab"
            }
        ];
        body_genmenu.processData(arr, def_date, def_author, { isMainCategory: true });
    }
    function get_class(def_date, def_author) {
        const arr = [
            {
                title: "The Digital Revolution: A Thrilling Introduction to Digital Electronics",
                desc: "Join the revolution and discover the magic of digital electronics with our exciting introduction to the world of digital circuits and systems. From binary code to microprocessors, our guide covers all the essentials. Click now to embark on an electrifying journey into the digital realm!",
                codetype: "Introduction",
            },
            {
                title: "Cracking the Code: Demystifying the Fascinating World of Number Systems",
                desc: "Uncover the secrets of the number system and explore the amazing world of numerical codes with our comprehensive guide. From binary to hexadecimal, our guide covers it all. Click now to embark on a mind-bending journey through the world of numbers!",
                codetype: "Number Systems",
                link: "number-system"
            },
            {
                title: "Adders Unleashed: Unraveling the Magic of Addition in Digital Electronics",
                desc: "Dive into the spellbinding world of digital electronics with our comprehensive guide on Adders. From the simplicity of Half Adders to the sophistication of Full Adders, our guide illuminates every nook and cranny of this fascinating subject. Click now to join this extraordinary adventure in the world of bits and gates!",
                codetype: "Adders",
                link: "adder"
            },
            {
                title: "Subtractors Decoded: Navigating the Intricacies of Subtraction in Digital Electronics",
                desc: "Embark on a captivating journey through the realm of digital electronics with our comprehensive guide on Subtractors. From Half Subtractors to Full Subtractors, we delve deep into this intriguing topic. Click now to explore this exciting universe of digital computation and logic gates!",
                codetype: "Subtractors",
                link: "subtractor"
            },
            {
                title: "Binary Arithmetic Unveiled: A Deep Dive into the Mathematical Logic of the Digital World",
                desc: "Step into the astonishing world of digital computation with our all-encompassing guide on Binary Arithmetic. From addition and subtraction to multiplication and division, we explore it all in the binary realm. Click now to unlock the mysteries of the mathematical operations in the binary number system!",
                codetype: "Binary Arithmetic",
                link: "binary-arithmetic"
            },
            {
                title: "Logic Gates Exposed: A Journey into the Heart of Digital Electronics",
                desc: "Venture into the fascinating world of digital electronics with our comprehensive guide on Logic Gates. From the fundamental AND, OR, NOT gates to the complex XOR, XNOR, NAND, NOR gates, we dissect every aspect of these digital building blocks. Click now to uncover the magic behind the circuitry!",
                codetype: "Logic Gates",
                link: "logic-gates"
            },
            {
                title: "Clock Cycles Demystified: Understanding the Pulse of Digital Systems",
                desc: "Enter the exciting world of digital timing with our comprehensive guide on Clock Cycles. From the simple tick-tock of a digital clock to the lightning-fast pulses powering modern computers, we delve into the heart of what makes digital systems tick. Click now to unravel the rhythm of the digital world!",
                codetype: "Clock Cycle",
                link: "clock-cycle"
            },
            {
                title: "Clock Pulses Uncovered: The Hidden Beat of Digital Electronics",
                desc: "Immerse yourself in the rhythmic world of digital electronics with our detailed guide on Clock Pulses. We shed light on the invisible beats that drive everything from pocket calculators to advanced microprocessors. Click now to explore the pulse that drives digital innovation!",
                codetype: "Clock Pulse",
                link: "clock-pulse"
            },
            {
                title: "Multiple Access Techniques Unveiled: Sharing the Digital Spectrum",
                desc: "Dive into the collaborative world of digital communication with our exhaustive guide on Multiple Access Techniques. From TDMA to CDMA, FDMA to OFDMA, we scrutinize every method used to share our digital world. Click now to discover the techniques behind seamless digital sharing!",
                codetype: "Multiple Access Techniques",
                link: "multiple-access-techniques"
            },
            {
                title: "Decoding the Universe of Modulation: Navigating Through Digital Signals",
                desc: "Explore the intricate realm of digital communication with our comprehensive guide on Modulation Techniques. From Amplitude to Frequency, Phase to Quadrature Amplitude Modulation, we break down every method used to transform our digital signals. Click now to unravel the mysteries behind modern digital communication!",
                codetype: "Modulation Techniques",
                link: "modulation"
            },
            {
                title: "Multiplexers Explained: Routing the Paths of Digital Information",
                desc: "Step into the complex world of digital routing with our all-encompassing guide on Multiplexers. Uncover how multiple signals are combined into one to streamline digital communication. Click now to grasp the wizardry behind data routing!",
                codetype: "Multiplexer",
                link: "multiplexer"
            },
            {
                title: "Demultiplexers Exposed: Untangling the Web of Digital Information",
                desc: "Venture into the realm of digital signal separation with our complete guide on Demultiplexers. Explore how we transform a single signal back into its original multiple signals, unfolding the magic of digital communication. Click now to demystify the intricacies of signal separation!",
                codetype: "Demultiplexer",
                link: "demultiplexer"
            },
            {
                title: "Time Division Multiplexing Unleashed: Slicing Time for Efficient Communication",
                desc: "Step into the world of efficient digital communication with our guide on Time Division Multiplexing. From the basic principles to its implementation in modern networks, we dissect every facet of this vital communication technique. Click now to understand the marvel of time slicing!",
                codetype: "Time Division Multiplexer",
                link: "time-division-multiplexing"
            },
            {
                title: "Frequency Division Multiplexing Unlocked: Mastering the Art of Signal Separation",
                desc: "Discover the high-frequency world of digital communication with our comprehensive guide on Frequency Division Multiplexing. From the core principles to the latest advancements, we explore all aspects of this essential communication tool. Click now to tune into the frequency of digital communication!",
                codetype: "Frequency Division Multiplexer",
                link: "frequency-division-multiplexing"
            },
            {
                title: "Wavelength Division Multiplexing Explored: Illuminating the Spectrum of Digital Communication",
                desc: "Illuminate your understanding of digital communication with our guide on Wavelength Division Multiplexing. Delve into the wonders of light-based communication, and explore how data is transmitted over fiber-optic cables. Click now to shine a light on the future of data transmission!",
                codetype: "Wavelength Division Multiplexer",
                link: "wavelength-division-multiplexing"
            },
            {
                title: "Code Division Multiplexing Decoded: Cracking the Code of Digital Communication",
                desc: "Unravel the intricacies of coded communication with our guide on Code Division Multiplexing. Learn how different data streams can coexist on the same channel without interfering with each other. Click now to unlock the secrets of coded communication!",
                codetype: "Code Division Multiplexer",
                link: "code-division-multiplexing"
            },
            {
                title: "In the Loop with Sequential Circuits: The Backbone of Digital Electronics",
                desc: "Join us on a journey through the pulsating world of digital electronics with our extensive guide on Sequential Circuits. From Flip-Flops to Registers, Counters to Memory Units, we meticulously examine each component that constitutes these dynamic electronic circuits. Click now to learn more about the mechanisms that underpin the digital devices we use every day!",
                codetype: "Sequential Circuits",
                link: "sequential-circuits"
            },
            {
                title: "555 Timer Revealed: The Ubiquitous Little Device That Keeps Time",
                desc: "Enter the world of timing and control with our detailed guide on the 555 Timer. This small, versatile device is at the heart of countless electronics, providing accurate time delays or oscillations. Click now to understand the timekeeper of the digital realm!",
                codetype: "555 Timer",
                link: "555-timer"
            },
            {
                title: "Mastering the 555 Timer: From Novice to Expert",
                desc: "Join us on a journey from beginner to expert in the world of the 555 Timer. We'll take you from understanding its basic operation to crafting advanced circuits and devices. Click now to become a master of timing and control in the world of electronics!",
                codetype: "Mastering 555 Timer",
                link: "mastering-555-timer"
            },
            {
                title: "Flip-Flops Decoded: The Building Blocks of Digital Memory",
                desc: "Immerse yourself in the captivating world of digital memory with our comprehensive guide on Flip-Flops. These pivotal devices store binary data and serve as the foundation for all digital memory. Click now to understand the core element of digital storage!",
                codetype: "Flip-Flops",
                link: "flip-flops"
            },
            {
                title: "Revision - What, Why, and, How",
                desc: "Get the concepts in 3 ways - What, Why, and How. Get to know the applications of all topics as a bonus.",
                codetype: "Revision - What, Why, How",
                link: "revision-what-why-how"
            },
            {
                title: "Revision",
                desc: "Revise the concepts of Digital Electronics.",
                codetype: "Revision",
                link: "revision"
            },
        ];
        body_genmenu.processData(arr, def_date, def_author);
    }
    function get_lab(def_date, def_author) {
        const arr = [
            {
                title: "Lab 1: Verify truth table of all logic gates in Proteus",
                desc: "This lab will provide a verification of truth table of logic gates using Proteus software.",
                date: "Fri March 3, 2023",
                author: "Asmi Goyal",
                link: "verification-of-logic-gates-in-proteus",
                // cardimage: "_url_"
            },
            {
                title: "Lab 2: Verify truth table of half adder and full adder in Proteus",
                desc: "This lab will provide a verification of truth table of half adder and full adder using Proteus software.",
                date: "Fri March 28, 2023",
                author: "Divya Mohan",
                link: "verification-of-half-and-full-adder-in-proteus"
            },
            {
                title: "Lab 3: Verify truth table of half subtractor and full subtractor in Proteus",
                desc: "This lab will provide a verification of truth tables for both a half subtractor and a full subtractor using Proteus software.",
                date: "Fri May 5, 2023",
                author: "Prithak Thapa",
                link: "verification-of-half-and-full-subtractor-in-proteus"
            },
            {
                title: "Lab 4: Implement and Verify the truth table of SR Flip Flop in Proteus",
                desc: "This lab will provide a verification of truth tables for both an Active Low and an Active High SR Flip Flop using Proteus software.",
                date: "Fri May 12, 2023",
                link: "verification-of-sr-flip-flop-in-proteus"
            },
            {
                title: "Lab 5: Implement and Verify the truth table of D Flip Flop in Proteus",
                desc: "This lab will provide a verification of truth tables for both a D Flip Flop using Proteus software.",
                date: "Fri May 19, 2023",
                link: "verification-of-d-flip-flop-in-proteus"
            },
            {
                title: "Lab 6: Implement and Verify the truth table of JK Flip Flop in Proteus",
                desc: "This lab will provide a verification of truth tables for both a JK Flip Flop using Proteus software.",
                date: "Fri May 26, 2023",
                link: "verification-of-jk-flip-flop-in-proteus"
            },
            {
                title: "Revision of Labwork",
                desc: "Revision of all the concepts and topics of Lab. Additionally challenge yourself with a unique set of questions.",
                date: "Thu June 29, 2023",
                link: "revision"
            },
        ];
        body_genmenu.processData(arr, def_date, def_author);
    }
    

    /**********  AUTOMATION CONTROL **********/
    let title, link, date, desc, codetype, readtime, author = 1, semester, cardimage, continuereading;
    const functions = {
        class: get_class,
        lab: get_lab,
        default: get_main
    };
    (functions[window.urlpart5] || functions.default)(datetogen, author);
}