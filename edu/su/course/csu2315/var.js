
function get_menu_list(datetogen) {
    function get_main(def_date, def_author) {
        const arr = [
            {
                link: "theory/",
                title: "Theory: Competitive Coding Concepts and Principles",
                desc: "Explore the fundamental concepts of Competitive Coding in this section as you will gain insights into problem solving, logical thinking, common coding patterns, and templates.",
                codetype: "CSU2315 | Competitive Coding",
                cardimage: "https://cdn.dmj.one/edu/su/course/csu2315/img/logo.webp",                
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
                title: "All programs done in class",
                desc: "A comprehensive compilation of programming exercises and algorithmic problem-solving tasks completed during instructional sessions.",
                codetype: "Concepts",
                readtime: 5,
                link: "all-programs-done-in-class"
            },
            {
                title: "Easy Pronunciation",
                desc: "CodeChef problem statement for Easy Pronunciation. Difficulty rating: 1000. Includes dry run of test cases and pseudocode.",
                codetype: "CodeChef | 1000",
                readtime: 15,
                link: "easy-pronunciation"
            },
            {
                title: "ATM Machine",
                desc: "CodeChef problem statement for ATM Machine. Difficulty rating: 1001. Includes dry run of test cases and pseudocode.",
                codetype: "CodeChef | 1001",
                readtime: 15,
                link: "atm-machine"
            },
            {
                title: "TCS Examination",
                desc: "CodeChef problem statement for TCS Examination. Difficulty rating: 1006. Includes dry run of test cases and pseudocode.",
                codetype: "CodeChef | 1006",
                readtime: 15,
                link: "tcs-examination"
            },
            {
                title: "Adjacent Sum Parity",
                desc: "CodeChef problem statement for Adjacent Sum Parity. Difficulty rating: 1013. Includes dry run of test cases and pseudocode.",
                codetype: "CodeChef | 1013",
                readtime: 15,
                link: "adjacent-sum-parity"
            },
            {
                title: "Candies",
                desc: "CodeChef problem statement for Candies. Difficulty rating: 1018. Includes dry run of test cases and pseudocode.",
                codetype: "CodeChef | 1018",
                readtime: 15,
                link: "candies"
            },
            {
                title: "Chef Diet",
                desc: "CodeChef problem statement for Chef Diet. Difficulty rating: 1025. Includes dry run of test cases and pseudocode.",
                codetype: "CodeChef | 1025",
                readtime: 15,
                link: "chef-diet"
            },
            {
                title: "Break the Stick",
                desc: "CodeChef problem statement for Break the Stick. Difficulty rating: 1026. Includes dry run of test cases and pseudocode.",
                codetype: "CodeChef | 1026",
                readtime: 15,
                link: "break-the-stick"
            },
            {
                title: "Encoding Message",
                desc: "CodeChef problem statement for Encoding Message. Difficulty rating: 1027. Includes dry run of test cases and pseudocode.",
                codetype: "CodeChef | 1027",
                readtime: 15,
                link: "encoding-message"
            },
            {
                title: "Bear and Candies 123",
                desc: "CodeChef problem statement for Bear and Candies 123. Difficulty rating: 1028. Includes dry run of test cases and pseudocode.",
                codetype: "CodeChef | 1028",
                readtime: 15,
                link: "bear-and-candies-123"
            },
            {
                title: "Elections in Chefland",
                desc: "CodeChef problem statement for Elections in Chefland. Difficulty rating: 1034. Includes dry run of test cases and pseudocode.",
                codetype: "CodeChef | 1034",
                readtime: 15,
                link: "elections-in-chefland"
            },
            {
                title: "Chef and Two Strings",
                desc: "CodeChef problem statement for Chef and Two Strings. Difficulty rating: 1036. Includes dry run of test cases and pseudocode.",
                codetype: "CodeChef | 1036",
                readtime: 15,
                link: "chef-and-two-strings"
            },
            {
                title: "Card Removal",
                desc: "CodeChef problem statement for Card Removal. Difficulty rating: 1039. Includes dry run of test cases and pseudocode.",
                codetype: "CodeChef | 1039",
                readtime: 15,
                link: "card-removal"
            },
            {
                title: "Even-tual Reduction",
                desc: "CodeChef problem statement for Even-tual Reduction. Difficulty rating: 1040. Includes dry run of test cases and pseudocode.",
                codetype: "CodeChef | 1040",
                readtime: 15,
                link: "even-tual-reduction"
            },
            {
                title: "Zero String",
                desc: "CodeChef problem statement for Zero String. Difficulty rating: 1042. Includes dry run of test cases and pseudocode.",
                codetype: "CodeChef | 1042",
                readtime: 15,
                link: "zero-string"
            },
            {
                title: "Airline Restrictions",
                desc: "CodeChef problem statement for Airline Restrictions. Difficulty rating: 1042. Includes dry run of test cases and pseudocode.",
                codetype: "CodeChef | 1042",
                readtime: 15,
                link: "airline-restrictions"
            },
            {
                title: "Odd Pairs",
                desc: "CodeChef problem statement for Odd Pairs. Difficulty rating: 1044. Includes dry run of test cases and pseudocode.",
                codetype: "CodeChef | 1044",
                readtime: 15,
                link: "odd-pairs"
            },
            {
                title: "Chef and his Students",
                desc: "CodeChef problem statement for Chef and his Students. Difficulty rating: 1047. Includes dry run of test cases and pseudocode.",
                codetype: "CodeChef | 1047",
                readtime: 15,
                link: "chef-and-his-students"
            },
            {
                title: "End Sorted",
                desc: "CodeChef problem statement for End Sorted. Difficulty rating: 1049. Includes dry run of test cases and pseudocode.",
                codetype: "CodeChef | 1049",
                readtime: 15,
                link: "end-sorted"
            },
            {
                title: "Prime Reversal",
                desc: "CodeChef problem statement for Prime Reversal. Difficulty rating: 1053. Includes dry run of test cases and pseudocode.",
                codetype: "CodeChef | 1053",
                readtime: 15,
                link: "prime-reversal"
            },
            {
                title: "Hungry Ashish",
                desc: "CodeChef problem statement for Hungry Ashish. Difficulty rating: 1064. Includes dry run of test cases and pseudocode.",
                codetype: "CodeChef | 1064",
                readtime: 15,
                link: "hungry-ashish"
            },
            {
                title: "Mask Policy",
                desc: "CodeChef problem statement for Mask Policy. Difficulty rating: 1064. Includes dry run of test cases and pseudocode.",
                codetype: "CodeChef | 1064",
                readtime: 15,
                link: "mask-policy"
            },
            {
                title: "Counting Problem",
                desc: "CodeChef problem statement for Counting Problem. Difficulty rating: 1065. Includes dry run of test cases and pseudocode.",
                codetype: "CodeChef | 1065",
                readtime: 15,
                link: "counting-problem"
            },
            {
                title: "Tanu and Head-bob",
                desc: "CodeChef problem statement for Tanu and Head-bob. Difficulty rating: 1065. Includes dry run of test cases and pseudocode.",
                codetype: "CodeChef | 1065",
                readtime: 15,
                link: "tanu-and-head-bob"
            },
            {
                title: "Pseudo Sorted Array",
                desc: "CodeChef problem statement for Pseudo Sorted Array. Difficulty rating: 1067. Includes dry run of test cases and pseudocode.",
                codetype: "CodeChef | 1067",
                readtime: 15,
                link: "pseudo-sorted-array"
            },
            {
                title: "Prime Generator",
                desc: "CodeChef problem statement for Prime Generator. Difficulty rating: 1069. Includes dry run of test cases and pseudocode.",
                codetype: "CodeChef | 1069",
                readtime: 15,
                link: "prime-generator"
            },
            {
                title: "Equalize AB",
                desc: "CodeChef problem statement for Equalize AB. Difficulty rating: 1069. Includes dry run of test cases and pseudocode.",
                codetype: "CodeChef | 1069",
                readtime: 15,
                link: "equalize-ab"
            },
            {
                title: "Three Friends",
                desc: "CodeChef problem statement for Three Friends. Difficulty rating: 1074. Includes dry run of test cases and pseudocode.",
                codetype: "CodeChef | 1074",
                readtime: 15,
                link: "three-friends"
            },
            {
                title: "The Attack of Queen",
                desc: "CodeChef problem statement for The Attack of Queen. Difficulty rating: 1076. Includes dry run of test cases and pseudocode.",
                codetype: "CodeChef | 1076",
                readtime: 15,
                link: "the-attack-of-queen"
            },
            {
                title: "Covid and Theatre Tickets",
                desc: "CodeChef problem statement for Covid and Theatre Tickets. Difficulty rating: 1077. Includes dry run of test cases and pseudocode.",
                codetype: "CodeChef | 1077",
                readtime: 15,
                link: "covid-and-theatre-tickets"
            },
            {
                title: "Digit Sum Parities",
                desc: "CodeChef problem statement for Digit Sum Parities. Difficulty rating: 1077. Includes dry run of test cases and pseudocode.",
                codetype: "CodeChef | 1077",
                readtime: 15,
                link: "digit-sum-parities"
            },
            {
                title: "Magician versus Chef",
                desc: "CodeChef problem statement for Magician versus Chef. Difficulty rating: 1088. Includes dry run of test cases and pseudocode.",
                codetype: "CodeChef | 1088",
                readtime: 15,
                link: "magician-versus-chef"
            },
            {
                title: "Far Away",
                desc: "CodeChef problem statement for Far Away. Difficulty rating: 1090. Includes dry run of test cases and pseudocode.",
                codetype: "CodeChef | 1090",
                readtime: 15,
                link: "far-away"
            },
            {
                title: "Group Assignment",
                desc: "CodeChef problem statement for Group Assignment. Difficulty rating: 1092. Includes dry run of test cases and pseudocode.",
                codetype: "CodeChef | 1092",
                readtime: 15,
                link: "group-assignment"
            },
            {
                title: "Uncle Johny",
                desc: "CodeChef problem statement for Uncle Johny. Difficulty rating: 1093. Includes dry run of test cases and pseudocode.",
                codetype: "CodeChef | 1093",
                readtime: 15,
                link: "uncle-johny"
            },
            {
                title: "That Is My Score!",
                desc: "CodeChef problem statement for That Is My Score!. Difficulty rating: 1094. Includes dry run of test cases and pseudocode.",
                codetype: "CodeChef | 1094",
                readtime: 15,
                link: "that-is-my-score"
            },
            {
                title: "Chef and Strings",
                desc: "CodeChef problem statement for Chef and Strings. Difficulty rating: 1094. Includes dry run of test cases and pseudocode.",
                codetype: "CodeChef | 1094",
                readtime: 15,
                link: "chef-and-strings"
            },
            {
                title: "Bi_lindrome!",
                desc: "CodeChef problem statement for Bi_lindrome!. Difficulty rating: 1095. Includes dry run of test cases and pseudocode.",
                codetype: "CodeChef | 1095",
                readtime: 15,
                link: "bilindrome"
            },
            {
                title: "Remove Bad elements",
                desc: "CodeChef problem statement for Remove Bad elements. Difficulty rating: 1100. Includes dry run of test cases and pseudocode.",
                codetype: "CodeChef | 1100",
                readtime: 15,
                link: "remove-bad-elements"
            },
            {
                title: "Make Money",
                desc: "CodeChef problem statement for Make Money. Difficulty rating: 1101. Includes dry run of test cases and pseudocode.",
                codetype: "CodeChef | 1101",
                readtime: 15,
                link: "make-money"
            },
            {
                title: "Football",
                desc: "CodeChef problem statement for Football. Difficulty rating: 1102. Includes dry run of test cases and pseudocode.",
                codetype: "CodeChef | 1102",
                readtime: 15,
                link: "football"
            },
            {
                title: "String Game",
                desc: "CodeChef problem statement for String Game. Difficulty rating: 1102. Includes dry run of test cases and pseudocode.",
                codetype: "CodeChef | 1102",
                readtime: 15,
                link: "string-game"
            },
            {
                title: "Chef and Glove",
                desc: "CodeChef problem statement for Chef and Glove. Difficulty rating: 1104. Includes dry run of test cases and pseudocode.",
                codetype: "CodeChef | 1104",
                readtime: 15,
                link: "chef-and-glove"
            },
            {
                title: "Laptop Recommendation",
                desc: "CodeChef problem statement for Laptop Recommendation. Difficulty rating: 1104. Includes dry run of test cases and pseudocode.",
                codetype: "CodeChef | 1104",
                readtime: 15,
                link: "laptop-recommendation"
            },
            {
                title: "Playing with Strings",
                desc: "CodeChef problem statement for Playing with Strings. Difficulty rating: 1108. Includes dry run of test cases and pseudocode.",
                codetype: "CodeChef | 1108",
                readtime: 15,
                link: "playing-with-strings"
            },
            {
                title: "N Queens Puzzle Solved !",
                desc: "CodeChef problem statement for N Queens Puzzle Solved !. Difficulty rating: 1109. Includes dry run of test cases and pseudocode.",
                codetype: "CodeChef | 1109",
                readtime: 15,
                link: "n-queens-puzzle-solved"
            },
            {
                title: "Chef and Steps",
                desc: "CodeChef problem statement for Chef and Steps. Difficulty rating: 1110. Includes dry run of test cases and pseudocode.",
                codetype: "CodeChef | 1110",
                readtime: 15,
                link: "chef-and-steps"
            },
            {
                title: "Sort the String",
                desc: "CodeChef problem statement for Sort the String. Difficulty rating: 1112. Includes dry run of test cases and pseudocode.",
                codetype: "CodeChef | 1112",
                readtime: 15,
                link: "sort-the-string"
            },
            {
                title: "Discrepancies in the Voters List",
                desc: "CodeChef problem statement for Discrepancies in the Voters List. Difficulty rating: 1114. Includes dry run of test cases and pseudocode.",
                codetype: "CodeChef | 1114",
                readtime: 15,
                link: "discrepancies-in-the-voters-list"
            },
            {
                title: "Alternating String",
                desc: "CodeChef problem statement for Alternating String. Difficulty rating: 1116. Includes dry run of test cases and pseudocode.",
                codetype: "CodeChef | 1116",
                readtime: 15,
                link: "alternating-string"
            },
            {
                title: "Lazy Jem",
                desc: "CodeChef problem statement for Lazy Jem. Difficulty rating: 1120. Includes dry run of test cases and pseudocode.",
                codetype: "CodeChef | 1120",
                readtime: 15,
                link: "lazy-jem"
            },
            {
                title: "Game of Pooks",
                desc: "CodeChef problem statement for Game of Pooks. Difficulty rating: 1121. Includes dry run of test cases and pseudocode.",
                codetype: "CodeChef | 1121",
                readtime: 15,
                link: "game-of-pooks"
            },
            {
                title: "Chef and Proportion",
                desc: "CodeChef problem statement for Chef and Proportion. Difficulty rating: 1122. Includes dry run of test cases and pseudocode.",
                codetype: "CodeChef | 1122",
                readtime: 15,
                link: "chef-and-proportion"
            },
            {
                title: "Stick Break",
                desc: "CodeChef problem statement for Stick Break. Difficulty rating: 1123. Includes dry run of test cases and pseudocode.",
                codetype: "CodeChef | 1123",
                readtime: 15,
                link: "stick-break"
            },
            {
                title: "Processing a string",
                desc: "CodeChef problem statement for Processing a string. Difficulty rating: 1125. Includes dry run of test cases and pseudocode.",
                codetype: "CodeChef | 1125",
                readtime: 15,
                link: "processing-a-string"
            },
            {
                title: "Chef and Card Game",
                desc: "CodeChef problem statement for Chef and Card Game. Difficulty rating: 1125. Includes dry run of test cases and pseudocode.",
                codetype: "CodeChef | 1125",
                readtime: 15,
                link: "chef-and-card-game"
            },
            {
                title: "Pet Store",
                desc: "CodeChef problem statement for Pet Store. Difficulty rating: 1126. Includes dry run of test cases and pseudocode.",
                codetype: "CodeChef | 1126",
                readtime: 15,
                link: "pet-store"
            },
            {
                title: "Mathison and pangrams",
                desc: "CodeChef problem statement for Mathison and pangrams. Difficulty rating: 1127. Includes dry run of test cases and pseudocode.",
                codetype: "CodeChef | 1127",
                readtime: 15,
                link: "mathison-and-pangrams"
            },
            {
                title: "Valid Minimum",
                desc: "CodeChef problem statement for Valid Minimum. Difficulty rating: 1132. Includes dry run of test cases and pseudocode.",
                codetype: "CodeChef | 1132",
                readtime: 15,
                link: "valid-minimum"
            },
            {
                title: "Easy Math",
                desc: "CodeChef problem statement for Easy Math. Difficulty rating: 1133. Includes dry run of test cases and pseudocode.",
                codetype: "CodeChef | 1133",
                readtime: 15,
                link: "easy-math"
            },
            {
                title: "Fit in Data Type",
                desc: "CodeChef problem statement for Fit in Data Type. Difficulty rating: . Includes dry run of test cases and pseudocode.",
                codetype: "CodeChef | ",
                readtime: 15,
                link: "fit-in-data-type"
            },
            {
                title: "Coin Flip",
                desc: "CodeChef problem statement for Coin Flip. Difficulty rating: 1135. Includes dry run of test cases and pseudocode.",
                codetype: "CodeChef | 1135",
                readtime: 15,
                link: "coin-flip"
            },
            {
                title: "Ciel and A-B Problem",
                desc: "CodeChef problem statement for Ciel and A-B Problem. Difficulty rating: 1136. Includes dry run of test cases and pseudocode.",
                codetype: "CodeChef | 1136",
                readtime: 15,
                link: "ciel-and-a-b-problem"
            },
            {
                title: "Average of Three",
                desc: "CodeChef problem statement for Average of Three. Difficulty rating: 1141. Includes dry run of test cases and pseudocode.",
                codetype: "CodeChef | 1141",
                readtime: 15,
                link: "average-of-three"
            },
            {
                title: "Max Binary",
                desc: "CodeChef problem statement for Max Binary. Difficulty rating: 1143. Includes dry run of test cases and pseudocode.",
                codetype: "CodeChef | 1143",
                readtime: 15,
                link: "max-binary"
            },
            {
                title: "Journey of the Knight",
                desc: "CodeChef problem statement for Journey of the Knight. Difficulty rating: 1144. Includes dry run of test cases and pseudocode.",
                codetype: "CodeChef | 1144",
                readtime: 15,
                link: "journey-of-the-knight"
            },
            {
                title: "Rectangle",
                desc: "CodeChef problem statement for Rectangle. Difficulty rating: 1146. Includes dry run of test cases and pseudocode.",
                codetype: "CodeChef | 1146",
                readtime: 15,
                link: "rectangle"
            },
            {
                title: "Download file",
                desc: "CodeChef problem statement for Download file. Difficulty rating: 1147. Includes dry run of test cases and pseudocode.",
                codetype: "CodeChef | 1147",
                readtime: 15,
                link: "download-file"
            },
            {
                title: "Farmer Feb",
                desc: "CodeChef problem statement for Farmer Feb. Difficulty rating: 1148. Includes dry run of test cases and pseudocode.",
                codetype: "CodeChef | 1148",
                readtime: 15,
                link: "farmer-feb"
            },
            {
                title: "Minimum XOR",
                desc: "CodeChef problem statement for Minimum XOR. Difficulty rating: 1154. Includes dry run of test cases and pseudocode.",
                codetype: "CodeChef | 1154",
                readtime: 15,
                link: "minimum-xor"
            },
            {
                title: "Large Square",
                desc: "CodeChef problem statement for Large Square. Difficulty rating: 1160. Includes dry run of test cases and pseudocode.",
                codetype: "CodeChef | 1160",
                readtime: 15,
                link: "large-square"
            },
            {
                title: "Infernos",
                desc: "CodeChef problem statement for Infernos. Difficulty rating: 1162. Includes dry run of test cases and pseudocode.",
                codetype: "CodeChef | 1162",
                readtime: 15,
                link: "infernos"
            },
            {
                title: "Make Multiple",
                desc: "CodeChef problem statement for Make Multiple. Difficulty rating: 1163. Includes dry run of test cases and pseudocode.",
                codetype: "CodeChef | 1163",
                readtime: 15,
                link: "make-multiple"
            },
            {
                title: "Balanced Reversals",
                desc: "CodeChef problem statement for Balanced Reversals. Difficulty rating: 1165. Includes dry run of test cases and pseudocode.",
                codetype: "CodeChef | 1165",
                readtime: 15,
                link: "balanced-reversals"
            },
            {
                title: "IPL and RCB",
                desc: "CodeChef problem statement for IPL and RCB. Difficulty rating: 1167. Includes dry run of test cases and pseudocode.",
                codetype: "CodeChef | 1167",
                readtime: 15,
                link: "ipl-and-rcb"
            },
            {
                title: "Hostel Room",
                desc: "CodeChef problem statement for Hostel Room. Difficulty rating: 1169. Includes dry run of test cases and pseudocode.",
                codetype: "CodeChef | 1169",
                readtime: 15,
                link: "hostel-room"
            },
            {
                title: "Card Swipe",
                desc: "CodeChef problem statement for Card Swipe. Difficulty rating: 1172. Includes dry run of test cases and pseudocode.",
                codetype: "CodeChef | 1172",
                readtime: 15,
                link: "card-swipe"
            },
            {
                title: "Movie Weekend",
                desc: "CodeChef problem statement for Movie Weekend. Difficulty rating: 1175. Includes dry run of test cases and pseudocode.",
                codetype: "CodeChef | 1175",
                readtime: 15,
                link: "movie-weekend"
            },
            {
                title: "Chef and Groups",
                desc: "CodeChef problem statement for Chef and Groups. Difficulty rating: 1176. Includes dry run of test cases and pseudocode.",
                codetype: "CodeChef | 1176",
                readtime: 15,
                link: "chef-and-groups"
            },
            {
                title: "Positive Products",
                desc: "CodeChef problem statement for Positive Products. Difficulty rating: 1178. Includes dry run of test cases and pseudocode.",
                codetype: "CodeChef | 1178",
                readtime: 15,
                link: "positive-products"
            },
            {
                title: "Count of Maximum",
                desc: "CodeChef problem statement for Count of Maximum. Difficulty rating: 1180. Includes dry run of test cases and pseudocode.",
                codetype: "CodeChef | 1180",
                readtime: 15,
                link: "count-of-maximum"
            },
            {
                title: "A Balanced Contest",
                desc: "CodeChef problem statement for A Balanced Contest. Difficulty rating: 1184. Includes dry run of test cases and pseudocode.",
                codetype: "CodeChef | 1184",
                readtime: 15,
                link: "a-balanced-contest"
            },
            {
                title: "Divisible by i",
                desc: "CodeChef problem statement for Divisible by i. Difficulty rating: 1184. Includes dry run of test cases and pseudocode.",
                codetype: "CodeChef | 1184",
                readtime: 15,
                link: "divisible-by-i"
            },
            {
                title: "Chef and Work",
                desc: "CodeChef problem statement for Chef and Work. Difficulty rating: 1185. Includes dry run of test cases and pseudocode.",
                codetype: "CodeChef | 1185",
                readtime: 15,
                link: "chef-and-work"
            },
            {
                title: "Hungry Chef",
                desc: "CodeChef problem statement for Hungry Chef. Difficulty rating: 1187. Includes dry run of test cases and pseudocode.",
                codetype: "CodeChef | 1187",
                readtime: 15,
                link: "hungry-chef"
            },
            {
                title: "Train Partner",
                desc: "CodeChef problem statement for Train Partner. Difficulty rating: 1187. Includes dry run of test cases and pseudocode.",
                codetype: "CodeChef | 1187",
                readtime: 15,
                link: "train-partner"
            },
            {
                title: "Buy1-Get1",
                desc: "CodeChef problem statement for Buy1-Get1. Difficulty rating: 1191. Includes dry run of test cases and pseudocode.",
                codetype: "CodeChef | 1191",
                readtime: 15,
                link: "buy1-get1"
            },
            {
                title: "Chef and Subarray",
                desc: "CodeChef problem statement for Chef and Subarray. Difficulty rating: 1191. Includes dry run of test cases and pseudocode.",
                codetype: "CodeChef | 1191",
                readtime: 15,
                link: "chef-and-subarray"
            },
            {
                title: "Retrieve the Array",
                desc: "CodeChef problem statement for Retrieve the Array. Difficulty rating: 1193. Includes dry run of test cases and pseudocode.",
                codetype: "CodeChef | 1193",
                readtime: 15,
                link: "retrieve-the-array"
            },
            {
                title: "Convert to permutation",
                desc: "CodeChef problem statement for Convert to permutation. Difficulty rating: 1197. Includes dry run of test cases and pseudocode.",
                codetype: "CodeChef | 1197",
                readtime: 15,
                link: "convert-to-permutation"
            },
            {
                title: "Ups and Downs",
                desc: "CodeChef problem statement for Ups and Downs. Difficulty rating: 1198. Includes dry run of test cases and pseudocode.",
                codetype: "CodeChef | 1198",
                readtime: 15,
                link: "ups-and-downs"
            },
            {
                title: "Trace of Matrix",
                desc: "CodeChef problem statement for Trace of Matrix. Difficulty rating: 1198. Includes dry run of test cases and pseudocode.",
                codetype: "CodeChef | 1198",
                readtime: 15,
                link: "trace-of-matrix"
            }
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