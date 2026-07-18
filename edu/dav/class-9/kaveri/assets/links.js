/* ============================================================
   CONNECT — the multidisciplinary panel NEP 2020 asks for

   Every cross-subject link below is quoted against the ACTUAL
   Grade 9 syllabus documents (NCERT Secondary Stage Phase I,
   Parts 2 and 3), not against a coaching site's paraphrase.
   Every institution was HTTP-checked. Every fact carries the
   source the student can go and read.

   What is NOT here matters as much as what is. These were
   researched and DROPPED for failing verification:
     · "Thar desert is in your Geography book" — the words "Thar"
       and "desert" appear ZERO times in the new Grade 9 syllabus.
     · "Article 19 / free speech" for Words — zero syllabus hits.
     · "The yazh was the ancestor of the veena" — the sources show
       displacement, not descent.
     · "Tagore wrote three national anthems" — he wrote two. Sri
       Lanka's is by his pupil Ananda Samarakoon, and Tagore's role
       is disputed by historians.
     · "Hikkim is the world's highest post office" — contested by a
       higher one at Everest Base Camp, and every source is a travel blog.
     · "Nine Gold Medals is based on a true 1976 Spokane incident" —
       unsourced; the study guides that claim it concede the poem embellishes.
     · "Sher Shah Suri opened the post to the public" — that was
       Warren Hastings, 1774.
     · A "did you know" for Believe in Yourself — no verified,
       chapter-specific fact exists that is not a motivational cliché.
       An empty block beats an invented one.
     · "Manipur Black Pottery has a GI tag" — checked against the
       official GI registry's 2,105 applications: no such GI name
       exists. The only registered Black Pottery GIs are Nizamabad
       (UP) and Sawai Madhopur (Rajasthan), and the real Manipur
       record (Longpi Pottery, app 1495) is still under EXAMINATION,
       i.e. pending, not granted. This would have put a fabricated
       government certification in front of a classroom.
     · Any GI for a hand fan — 0 hits of 2,105.
     · "ITI Carpenter trade" — no such trade exists. The real DGT
       names are Wood Work Technician and Wood Carving Artisan.
     · "Geography — soil types" for Canvas of Soil — that is Class 10.
       Grade 9 covers erosion and conservation only.
     · Ratio, proportion, symmetry, volume, statistics — none are in
       Ganita Manjari Part I, so no maths link may lean on them.
     · "History — Upanishads" — 0 hits in the Grade 9 Social Science
       book. The Upanishads stay as IKS, where the poem names them.
     · AIIMS "DM in Geriatric Medicine" — unverifiable. It is an MD.
     · Sudha Murty's TELCO notice said "Lady candidates need not
       apply", not "men only". Use Tata's own wording.
   ============================================================ */
const LINKS = {

  grandmother: {
    subjects: [
      { s:"Civics", t:"Fundamental Rights — India has six of them. Krishtakka could not read a word of the country she was a citizen of. Which right does that shut her out of?" },
      { s:"Civics", t:"Elections — India assigns every party a picture symbol precisely so that citizens who cannot read can still vote. Krishtakka's problem is written into how our democracy is designed." },
      { s:"Economics", t:"The Problem of Choice — Grandma spends her time on the alphabet instead of everything else she could have done with those months. That is opportunity cost, and she pays it gladly." }
    ],
    careers: ["Adult-literacy volunteer — ULLAS, and you can start this year", "School teacher — 4-year ITEP, entry via NCET after Class 12", "Literary translator — Sahitya Akademi", "Writer or publisher"],
    fact:"In <b>April 1974</b>, Sudha Murty saw a TELCO job advertisement that ended: <b>“Lady candidates need not apply.”</b> She posted a protest postcard to <b>JRD Tata</b>. Ten days later a telegram called her to an interview, and she became <b>the first woman engineer hired at TELCO</b> — now Tata Motors.<br><br>The girl who taught her grandmother to read had to write to the richest industrialist in India to be allowed to sit an exam.",
    factSrc:"https://www.tata.com/newsroom/heritage/appro-jrd-tata-sudha-murthy-tribute", factSrcName:"Tata Group",
    iks:"The serial Grandma could not read is <b>Kashi Yatre</b> — a pilgrimage to Kashi to see Lord Vishweshwara, which is exactly why she saw herself in its heroine. It was written by <b>Triveni</b>, the pen name of <b>Anasuya Shankar</b> (1928–1963), a real Kannada novelist who wrote about twenty novels and died at just <b>34</b>."
  },

  bharat: {
    subjects: [
      { s:"Geography", t:"Shaping of the Earth's Surface — the poem's 'mighty Himavant' exists because an oceanic plate rammed a continental one. The 'generous Ganga' is that collision being ground down and spread out as floodplain." },
      { s:"History", t:"State and Society up to 1000 CE — 'the Buddha preached his dhamma here' is not poetry, it is your syllabus. The Buddha and Mahavira sit in it as a titled section." },
      { s:"Civics", t:"National identity — the poem's 'Jaya he' is the National Anthem's, and your textbook opens this chapter by asking you to recall it." }
    ],
    careers: ["Poet or lyricist", "Journalist — IIMC, Ministry of Information & Broadcasting", "Translator — Sahitya Akademi Translation Prize", "Historian or archivist"],
    fact:"He was <b>eleven years old</b> when scholars gave him the name he is now known by. <b>'Bharati'</b> means <b>blessed by Saraswati, the goddess of learning</b> — a title, not a surname, and he earned it before he finished school.<br><br>In <b>1949 his poems became the first in India ever to be nationalised</b>: bought from his family and given to the people. He died after being struck by a temple elephant named Lavanya, whom he had been feeding.",
    factSrc:"https://en.wikipedia.org/wiki/Subramania_Bharati", factSrcName:"Subramania Bharati",
    iks:"The poem does not gesture vaguely at Indian tradition — it names it. <b>Brahma-knowledge</b> and the <b>Upanishads</b> are in the verse itself, alongside the Buddha's dhamma. Bharati is listing the actual knowledge systems this land produced, then daring you to find their equal anywhere."
  },

  potmaker: {
    subjects: [
      { s:"Economics", t:"The Problem of Choice — Arenla's refusal IS opportunity cost, stated out loud: months of back-breaking work for 'a few rupees', when weaving returns 'handsome' pay in less time. She is not being cruel. She is doing the maths." },
      { s:"Science", t:"Mixtures and their Separation — the clay Sentila pounds with water is a heterogeneous mixture. Getting the grit out is separation, done by hand." },
      { s:"Geography", t:"Shaping of the Earth's Surface — the clay is a sixteen-kilometre walk away because that is where the river dumped it. Weathered rock, carried and deposited. Her commute is a geography lesson." },
      { s:"History", t:"State and Society up to 1000 CE — artisans organised into craft guilds, the shrenis. The village council telling Arenla she must teach her daughter is that same instinct, still running." }
    ],
    careers: ["Ceramic & Glass Design — B.Des at NID Ahmedabad", "Fired Material Design — IICD Jaipur", "Ceramic engineer — IIT (BHU) Varanasi", "Craft entrepreneur — Pehchan card, Handicrafts"],
    fact:"<b>Naga potters use no potter's wheel at all.</b> Not a simpler wheel — none. India's own IGNCA records it plainly: <i>“Revolving wheel is not used and the Naga tribal women have their own unique method of making pottery with hands.”</i> Every pot in this story was raised by hand alone.<br><br>The author knew that world from the inside. <b>Temsula Ao</b> (1945–2022) was an Ao Naga writer and Professor of English, awarded the <b>Padma Shri in 2007</b> and the <b>Sahitya Akademi Award in 2013</b>.",
    factSrc:"https://ignca.gov.in/divisionss/janapada-sampada/northeastern-regional-centre/miscellaneous-arts-and-crafts-in-nagaland/", factSrcName:"IGNCA, Government of India",
    iks:"Nobody in this story teaches by explaining. Sentila learns by <b>watching</b>, failing for a year, and watching again — knowledge moving mother-to-daughter by observation, the way it has for centuries. And the village council's ruling carries the real principle: the skill <b>did not belong to any individual</b>. Arenla could not keep it, because it was never only hers."
  },

  gifts: {
    subjects: [
      { s:"Science", t:"Work, Energy and Simple Machines — the poem's carpenters and masons run on levers, pulleys and mechanical advantage. Your syllabus asks you to build one; they build with them all day." },
      { s:"Science", t:"Sound — 'artisans with lutes' echoing in the streets. Frequency, amplitude, and why no two instruments sound alike, which is the whole poem's method." },
      { s:"Mathematics", t:"Perimeter and Area — the poem itself says carpenters shape wood with 'mathematical precision'. Heron's formula is how you get the area of the awkward triangular offcut." },
      { s:"Economics", t:"The Price Puzzle — the poem says every vocation is equal in dignity. The market does not pay them equally. Both things are true, and that gap is worth an argument." }
    ],
    careers: ["Electrician — ITI trade", "Mason (Building Constructor) — ITI trade", "Footwear Maker — ITI, the poem's shoemakers", "Wood Work Technician or Wood Carving Artisan — ITI"],
    fact:"This poem has an American twin. Walt Whitman's <b>“I Hear America Singing”</b> (1860) opens: <i>“I hear America singing, the varied carols I hear”</i> — and then names carpenters, masons, boatmen and shoemakers, one by one.<br><br>Kaveri's poem opens: <i>“I hear Bharat celebrating, the varied vocations I hear.”</i> Same shape, same method, different country. Your book credits it to <b>Anonymous</b>, so nobody can tell you who answered Whitman — only that somebody did.",
    factSrc:"https://poets.org/poem/i-hear-america-singing", factSrcName:"Academy of American Poets"
  },

  winds: {
    subjects: [
      { s:"Science", t:"Earth as a System — real wind happens because the sun heats the earth unevenly and air moves. A pankha is you, doing the sun's job, by hand." },
      { s:"Science", t:"Evaporation — a fan does not cool the air at all. It speeds up the evaporation of your sweat. The pankha works on your skin, not on the room." },
      { s:"Economics", t:"The Price Puzzle — the chapter says pankha-making 'transformed into a commercial business' on rising demand. Watch a craft become a market in one sentence." },
      { s:"Geography", t:"Crafts follow their materials: palm leaf and bamboo where they grow, sola in Bengal, moonj grass in UP. The map decides the fan." }
    ],
    careers: ["Textile Design — B.Des at NIFT, including NIFT Shillong", "Soft Material Design — IICD Jaipur", "Bamboo Works or Hand Embroidery Artisan — ITI trades", "Artisan-designer — Somaiya Kala Vidya, Kutch"],
    fact:"<b>The pankha gave English a word.</b> 'Punkah' sits in English dictionaries, borrowed from Hindi <i>pankha</i>, which comes from Sanskrit <b><i>paksha</i> — 'wing'</b>. Exactly what this chapter tells you about <i>pankh</i>.<br><br>In colonial India, pulling the giant rope-worked ceiling punkah was an entire occupation: the <b>punkah-wallah</b>, hauling a rope for hours so somebody else could stay cool. The electric fan wiped that job off the map in the early 1900s. Technology ended a craft and a livelihood in the same stroke — which is what 'winds of change' actually means.",
    factSrc:"https://en.wikipedia.org/wiki/Punkah", factSrcName:"Punkah",
    iks:"Pankha-making is a living handicraft, not a museum piece: Bengal's <b>sola pith</b> craft, Gujarat's mirror work, Lucknow's <b>zardozi</b>. The chapter's own quiet point is that these fans travelled trade routes as cultural goods long before anyone called it export."
  },

  canvas: {
    subjects: [
      { s:"Arts", t:"Colour — 'palette' and 'hue' are this poem's own words, and your Arts book defines both. The poet is not being decorative; she is using the vocabulary correctly." },
      { s:"Science", t:"Cell and Tissues — the poem's 'shades of green' are chloroplasts, in different densities. The palette is organelles." },
      { s:"Mathematics", t:"Perimeter and Area — plan a real garden bed. Heron's formula handles the triangular corner plot the rectangle formula cannot." },
      { s:"Geography", t:"Soil erosion and conservation — a canvas can wash away. Nagaland's Zabo system is one Indian answer to keeping it where it is." }
    ],
    careers: ["Floriculture & Landscaping — ITI trade", "Landscape architect — M.Arch at SPA New Delhi", "Botanist — Botanical Survey of India", "IoT Technician, Smart Agriculture — ITI trade"],
    fact:"India wrote a <b>science of gardening a thousand years ago</b> — and <b>only one ancient copy survives anywhere on earth</b>. Surapala's <b>Vrikshayurveda</b> (c. 1000 AD) exists as a single palm-leaf manuscript, preserved not in India but at the <b>Bodleian Library, Oxford</b>.<br><br>An Indian researcher could only get a <b>microfiche of it in 1994</b>, and the English translation appeared in <b>1996</b>. It runs <b>325 verses</b> on about <b>170 plants</b>: soil, seeds, watering, fertilisers, plant disease, and how to lay a garden out. A thousand years before this poem called soil a canvas, somebody had already written the manual.",
    factSrc:"https://www.asianagrihistory.org/pdf/articles/YL-Nene.pdf", factSrcName:"Asian Agri-History Foundation",
    iks:"<b>Vrikshayurveda</b> — literally the ayurveda of trees. Exactly this poem's thesis, argued in Sanskrit verse a millennium early: that growing things is both a knowledge system and an art."
  },

  vitaminm: {
    subjects: [
      { s:"Science", t:"Tissues in Action — nervous tissue is the thing memory actually runs on, and it is on your syllabus alongside connective and muscular tissue." },
      { s:"Science", t:"Vitamins are real. A memory pill is not. That gap is precisely where the joke lives — Ravi's mother wants a supplement for a problem that isn't one." },
      { s:"Civics", t:"Looking after your parents is not only a moral duty in India, it is a legal one: the Maintenance and Welfare of Parents and Senior Citizens Act, 2007. 'Senior citizen' begins at 60. Grandpa is 75." },
      { s:"Mathematics", t:"Sequences and growth — India's 60+ population goes from 10.5% in 2022 to 20.8% (347 million) by 2050, and by 2046 the elderly will outnumber the children. Grandpa is not an exception. He is the near future." }
    ],
    careers: ["Geriatrician — MD, AIIMS Department of Geriatric Medicine", "Geriatric psychiatrist — DM at NIMHANS", "Brain researcher — Centre for Brain Research, IISc", "Children's author, like Asha Nehemiah"],
    fact:"<b>There really is a Vitamin M — and the M stood for monkey.</b> It is an old name for folate, vitamin B9, named after the research done in monkeys.<br><br>And the trail starts in India. In <b>1931, Dr Lucy Wills</b>, working in <b>Bombay</b>, found that a cheap yeast extract cured a severe anaemia in poor pregnant mill-workers. It was called the <b>'Wills factor'</b>, and was later identified as folic acid. Ravi's mother invents a vitamin as a joke. A doctor in Bombay had already found a real one, in the same city, by taking poor women's illness seriously.",
    factSrc:"https://embryo.asu.edu/pages/treatment-anemia-during-pregnancy-1931-lucy-wills", factSrcName:"Embryo Project, Arizona State University"
  },

  mother: {
    subjects: [
      { s:"Science", t:"Diversity and Classification — the shiuli is Nyctanthes arbor-tristis. Your syllabus asks you to 'apply binomial nomenclature on some common organisms in their surroundings'. Tagore handed you one." },
      { s:"Science", t:"Reproduction in plants — why would a flower open at night? No colour to advertise with in the dark, so it spends everything on scent, for pollinators that fly after sunset." },
      { s:"Geography", t:"Atmosphere and Climate — the shiuli blooms as the monsoon retreats. Tagore's 'early autumn morning' is a season doing exactly what the syllabus says it does." },
      { s:"Arts", t:"Tagore was not only a poet — he composed and he painted. The same man made the tune, the words and the picture." }
    ],
    careers: ["Botanist or taxonomist — Botanical Survey of India", "Musician — Sangit Bhavana, Visva-Bharati", "Artist — Kala Bhavana, Visva-Bharati", "Poet or translator"],
    fact:"The flower in this poem is a botanical oddity with a heartbreaking name. The shiuli is <b><i>Nyctanthes arbor-tristis</i></b>, and <i>arbor-tristis</i> means <b>“the sad tree”</b> — because its flowers <b>open at dusk and fall by dawn</b>, carpeting the ground every single morning.<br><br>A poem about a mother the poet cannot picture, built on a flower that is only ever found already fallen. It is the <b>state flower of West Bengal</b>, and it blooms in autumn — Tagore's exact <i>“early autumn morning.”</i>",
    factSrc:"https://en.wikipedia.org/wiki/Nyctanthes_arbor-tristis", factSrcName:"Nyctanthes arbor-tristis",
    iks:"The shiuli is the <b>parijata</b> of Indian tradition, and its autumn flowering is bound up with Bengal's Durga Puja season. Tagore also wrote the national anthems of <b>two</b> countries — India's <i>Jana Gana Mana</i> and Bangladesh's <i>Amar Sonar Bangla</i>. Two, not three: Sri Lanka's was written by his student, and Tagore's own role in it is disputed."
  },


  limitless: {
    subjects: [
      { s:"Science", t:"Tissues — the syllabus lists nervous tissues and the musculoskeletal system, its injuries and postural care. A spinal tumour is exactly that story." },
      { s:"Science", t:"Competency C-5.3 asks you to explain the use of muscles in sport. Seated F53 shot put is pure trunk and upper body — the legs contribute nothing." },
      { s:"Physical Education", t:"The PE syllabus says its activities nurture resilience and self-confidence. Dr. Malik is that sentence with a medal on it." }
    ],
    careers: ["Para-athlete or coach — LNIPE Gwalior", "Prosthetist / Orthotist — SVNIRTAR Cuttack", "Rehabilitation professional — RCI registered", "Disability-sport classifier"],
    fact:"Deepa Malik won <b>silver in the Women's Shot Put F53 at Rio on 12 September 2016</b>, with a personal best of <b>4.61 m</b> — the <b>first Indian woman ever to win a Paralympic medal</b>. She was <b>45</b>. She had been paralysed below the waist since 1999, when three surgeries and <b>183 stitches</b> removed a tumour from her spine. Arjuna Award at 42, Padma Shri at 47, Khel Ratna at 49.",
    factSrc:"https://www.paralympic.org/deepa-malik", factSrcName:"International Paralympic Committee"
  },

  ninegold: {
    subjects: [
      { s:"Physical Education", t:"The poem IS the syllabus. NCERT's own words: assessment 'focuses on participation, effort, collaboration, responsible behaviour, and personal progress rather than competitive ranking alone.'" },
      { s:"Science", t:"Motion — a sprint is the cleanest way into distance, speed, and distance-time graphs. Plot the fallen runner's race: the graph goes flat, then starts again slower, and still finishes." }
    ],
    careers: ["Special educator — RCI registered", "Special Olympics coach", "Occupational therapist or physiotherapist — SVNIRTAR, NILD", "Sports journalist"],
    fact:"<b>'Nine Gold Medals' was never a poem.</b> It is a <b>folk song</b> by the American singer-songwriter <b>David Roth</b>, and he still performs it as one. It has been sung at Carnegie Hall, the United Nations and the Kennedy Center.<br><br>And the thing everyone gets wrong: the Special Olympics is <b>not</b> 'the one for intellectual disability' as opposed to the Paralympics 'for physical disability'. The Paralympics includes intellectual disability too. The real difference is <b>philosophy</b>: the Special Olympics welcomes athletes of <b>all ability levels</b>, while Paralympians must <b>meet qualifying standards</b> — it is elite sport. That is exactly why nine gold medals is believable in this poem, and would not be at the Paralympics.",
    factSrc:"https://davidrothmusic.com/about/", factSrcName:"David Roth, official site"
  },

  twin: {
    subjects: [
      { s:"Science", t:"Sound — competency C-2.7 covers 'differences in what we hear as it propagates through different instruments'. The yazh is gut strings over a skin-covered resonator: two of the three sound sources your syllabus names, in one instrument." },
      { s:"Science", t:"C-5.3 names 'sound pitch, octave, and amplitude in music' outright. Nabin's ragas and Peter's keyboard are the same physics." },
      { s:"Arts Education", t:"The Music syllabus asks you to 'explore ragas, rhythm patterns and instruments' and study 'the historical evolution of music' across classical, folk, tribal and contemporary genres. That is this play's entire plot." }
    ],
    careers: ["Sound recordist / designer — FTII Pune", "Luthier — instrument maker", "Musicologist / music researcher", "Composer or producer"],
    fact:"<b>The yazh went extinct.</b> Nobody alive had heard one. Chennai luthier <b>Tharun Sekar</b> rebuilt it from <b>Sangam-era texts</b> and a <b>1947 research paper</b> that described how its strings were aligned. The instrument Shruti's father would call sacred had to be reverse-engineered from poetry.",
    factSrc:"https://www.smithsonianmag.com/smart-news/hear-sound-ancient-indian-instrument-180977426/", factSrcName:"Smithsonian Magazine",
    iks:"The <b>Silappatikaram</b> names four kinds of yazh by their string count: <b>Peri</b> (21–29 strings), <b>Makara</b> (19), <b>Cakota</b> (14) and <b>Cenkotti</b> (7). The <b>Thirukkural</b> mentions it too. It is named for the <b>yali</b>, the mythological beast carved into its stem. Careful with the popular claim that the yazh 'became' the veena — the record shows the two <b>coexisted and the yazh was displaced</b>, not that one descended from the other."
  },

  friendmusic: {
    subjects: [
      { s:"Science", t:"Sound — your syllabus literally says 'Describe music in terms of characteristics of sound waves, such as loudness and pitch', and covers the human audible range." },
      { s:"Arts Education", t:"The Music syllabus spans classical, folk, tribal and contemporary — the poem's 'needed friend' has a curriculum." },
      { s:"Physical Education", t:"PE and Well-being asks for 'reflective awareness of one's physical and emotional state'. That is what this poem is doing." }
    ],
    careers: ["Audiologist / Speech-Language Pathologist — AIISH Mysuru", "Music producer or recording engineer — FTII Pune", "Performer, composer or music teacher", "Music researcher"],
    fact:"<b>The national anthems of two different countries were written by the same man.</b> Rabindranath Tagore wrote India's <i>Jana Gana Mana</i> (composed in Bengali on 11 December 1911, adopted 24 January 1950) and Bangladesh's <i>Amar Sonar Bangla</i> (adopted 13 January 1972).<br><br>You will often hear 'three anthems, including Sri Lanka's'. That is <b>not true</b>: <i>Sri Lanka Matha</i> was written by <b>Ananda Samarakoon</b>, who was Tagore's <b>student</b> at Visva-Bharati, and historians dispute whether Tagore had any hand in it at all.",
    factSrc:"https://en.wikipedia.org/wiki/Jana_Gana_Mana", factSrcName:"Jana Gana Mana",
    iks:"<b>Rabindra Sangit</b> — Tagore's own body of song, still sung daily in Bengal and Bangladesh, is a living Indian musical form. Kaveri gives you Tagore twice: this unit's neighbour, <i>I Cannot Remember My Mother</i>, is his too."
  },

  carrier: {
    subjects: [
      { s:"Geography", t:"Landforms — your syllabus names wind as an agent of gradation, and duststorms as a hazard. Khetaram's dunes were built by wind. (Fair warning: the new Grade 9 book never names the Thar itself.)" },
      { s:"Geography", t:"Atmosphere and Climate — 'the impact of the Indian monsoon on life, agriculture, and livelihoods'. Khetaram walks in heat that crosses 50°C." },
      { s:"Economics", t:"'Smart Ways to Manage Your Finances' teaches budgeting, savings, and simple vs compound interest. The post office savings account is where rural India actually does this." }
    ],
    careers: ["Gramin Dak Sevak — Khetaram's own job", "Postal Assistant — via SSC CHSL", "India Post Payments Bank", "Logistics and supply chain"],
    fact:"<b>Knowing how to ride a bicycle is an official, compulsory eligibility condition for every Gramin Dak Sevak post in India.</b> India Post's own model notification says 'Knowledge of Cycling is a pre-requisite condition for all GDS posts', and you sign a declaration to prove it. A scooter counts too. There is <b>no written exam</b> — selection runs off a system-generated merit list — and a college degree earns you <b>no extra weightage at all</b>.<br><br>The network Khetaram serves is the <b>largest postal network on earth</b>: <b>164,999 post offices</b> as of 31 March 2025, and <b>149,385 of them (90.5%) are rural</b>.",
    factSrc:"https://indiapostgdsonline1.cept.gov.in/Notifications/Model_Notification.pdf", factSrcName:"India Post, GDS model notification",
    iks:"India's relay post is about <b>500 years old</b>. <b>Sher Shah Suri</b> (1541–1545) replaced runners with horses along the northern high road now called the <b>Grand Trunk Road</b>, and built <b>1,700 serais</b> where two horses always stood ready for the royal mail. The modern Indian Post Office dates to <b>1 October 1837</b>, and the service was opened to the general public by Warren Hastings in <b>1774</b>. Khetaram is that relay's living descendant."
  },

  words: {
    subjects: [
      { s:"Arts Education", t:"Theatre — the syllabus builds on 'voice, body language and expression'. Swain's whole complaint is that words reach the head but never the heart. A theatre actor's job is to fix that." },
      { s:"Science", t:"Competency C-5.1: 'Explores how literature and arts have influenced Science.' The fact below is the best example there is." }
    ],
    careers: ["Computational linguist / NLP engineer", "Lexicographer or translator — CIIL Mysuru", "Speech-Language Pathologist — AIISH Mysuru", "Journalist, editor or author"],
    fact:"The system computer scientists use to describe the grammar of <b>programming languages</b> was worked out roughly <b>2,500 years earlier</b> by an Indian grammarian describing Sanskrit. <b>Panini</b>'s <b>Ashtadhyayi</b> is built from about <b>4,000 rules</b>, and his notation is <b>'equivalent in power to'</b> Backus–Naur Form, the notation every compiler course still teaches. In <b>1967 Peter Zilahy Ingerman proposed renaming it 'Panini Backus Form'</b> to acknowledge it.<br><br>Read that carefully: Backus and Naur did <b>not</b> copy Panini. They found the same idea <b>independently</b>, two and a half thousand years later. That is the surprise — not a lineage, a <b>convergence</b>.",
    factSrc:"https://en.wikipedia.org/wiki/Backus%E2%80%93Naur_form", factSrcName:"Backus–Naur form",
    iks:"The <b>Ashtadhyayi</b> is the reason linguists call Panini the first descriptive grammarian. He did not tell Sanskrit what to do; he watched what it did and wrote down the rules — which is exactly what a modern linguist does, and exactly what this poem is too shy to attempt."
  },

  dream: {
    subjects: [
      { s:"Social Science", t:"'From Ideas to Startups' is a real 8-hour unit in your Grade 9 syllabus: entrepreneurship, case studies of successful entrepreneurs, the Indian start-up ecosystem, MSMEs, and how to write a business plan." },
      { s:"Vocational Ed.", t:"Vocational Education is its own Grade 9 subject, with 'short internships, projects-based learning, exposure visits'. Kaveri's listening task for this very chapter is an announcement about vocational courses." },
      { s:"Physical Education", t:"PE and Well-being names 'goal-setting, and reflective awareness'. Irene Chua's ten-year rule is goal-setting with the costs written in." }
    ],
    careers: ["Entrepreneur or founder — Startup India", "Career or school counsellor — RCI, NIMHANS", "Vocational / skill trainer — NSDC, Skill India", "Psychologist"],
    fact:"This chapter exists because of a <b>national target</b>. NEP 2020, section <b>16.5</b>: <i>“By 2025, at least 50% of learners through the school and higher education system shall have exposure to vocational education.”</i> It is tied to <b>UN Sustainable Development Goal 4.4</b>. That is why an English chapter about chasing a dream arrives with a vocational-courses listening task bolted to it — the book is quietly doing policy.",
    factSrc:"https://www.aicte-india.org/sites/default/files/nep2020.pdf", factSrcName:"NEP 2020, §16.5"
  },

  believe: {
    subjects: [
      { s:"Physical Education", t:"PE says its activities nurture 'resilience, self-confidence', and that assessment rewards 'personal progress rather than competitive ranking alone'. Langley's poem, restated as national policy." },
      { s:"Mathematics", t:"Your maths book teaches self-belief, in writing. Ganita Manjari warns that students see 'mathematics as a fixed ability rather than a skill that can be developed', and says a <b>growth mindset</b> reduces 'math-related anxiety' and builds 'resilience'. The comfort zone this poem attacks has a maths syllabus entry." }
    ],
    careers: ["Sports psychologist — LNIPE Gwalior, NIMHANS", "School counsellor — RCI registered", "Clinical or rehabilitation psychologist — RCI", "Teacher or trainer"]
    /* No "did you know" here, deliberately. Nothing chapter-specific survived
       verification that was not a motivational cliché or an unsourced authorship
       claim. An empty block is honest; an invented fact is not. */
  }
};
