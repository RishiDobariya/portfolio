// Central content for the portfolio. Edit values here to update the site.

export const profile = {
  name: "RISHI",
  fullName: "RISHI DOBARIYA",
  tagline: "I'm a professional UI/UX Designer and Graphic Designer from Rajkot",
  birthday: "10 December 2004",
  website: "Under Development",
  phone: "7779028820",
  city: "Rajkot, Gujarat, India",
  age: "20",
  degree: "Bechlers",
  email: "rishupatel1011@gmail.com",
  freelance: "Available",
  about:
    "I believe that great design is more than just aesthetics—it's about crafting meaningful experiences that connect with users on a deeper level. Every element, from colors and typography to interactions and usability, plays a vital role in shaping how users perceive and engage with a product. My passion lies in blending creativity with functionality to create designs that are not only visually stunning but also intuitive and user-friendly.",
};

export const socials = [
  {
    name: "instagram",
    icon: "bi-instagram",
    url: "https://www.instagram.com/rd_uiuxdesign?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
  },
  {
    name: "behance",
    icon: "bi-behance",
    url: "https://www.behance.net/rishupatel9?utm_source=ig&utm_medium=social&utm_content=link_in_bio&fbclid=PAZXh0bgNhZW0CMTEAc3J0YwZhcHBfaWQPOTM2NjE5NzQzMzkyNDU5AAGnf6en2cSZ-WzxqOJHX2wZCN5lgwZBroH9MuSxg6Yo4A36XgpaWqoQ1op-u9g_aem_xS0rB-nSyKxLuU27frCeQA",
  },
  {
    name: "linkedin",
    icon: "bi-linkedin",
    url: "https://www.linkedin.com/in/rishi-dobariya-752171316/",
  },
];

export const skills = [
  { label: "Figma", value: 95 },
  { label: "Canva", value: 90 },
  { label: "Wireframing & Prototyping", value: 85 },
  { label: "User Research & UX Design", value: 75 },
  { label: "UI Design & Visual Design", value: 90 },
  { label: "Design Systems & Branding", value: 80 },
];

export const stats = [
  { label: "Clients", end: 5 },
  { label: "Projects", end: 10 },
  { label: "Hours Of Support", end: 1453 },
  { label: "Workers", end: 3 },
];

// Decorative blob SVG paths used behind each service icon.
const blobs = [
  "M300,521.0016835830174C376.1290562159157,517.8887921683347,466.0731472004068,529.7835943286574,510.70327084640275,468.03025145048787C554.3714126377745,407.6079735673963,508.03601936045806,328.9844924480964,491.2728898941984,256.3432110539036C474.5976632858925,184.082847569629,479.9380746630129,96.60480741107993,416.23090153303,58.64404602377083C348.86323505073057,18.502131276798302,261.93793281208167,40.57373210992963,193.5410806939664,78.93577620505333C130.42746243093433,114.334589627462,98.30271207620316,179.96522072025542,76.75703585869454,249.04625023123273C51.97151888228291,328.5150500222984,13.704378332031375,421.85034740162234,66.52175969318436,486.19268352777647C119.04800174914682,550.1803526380478,217.28368757567262,524.383925680826,300,521.0016835830174",
  "M300,582.0697525312426C382.5290701553225,586.8405444964366,449.9789794690241,525.3245884688669,502.5850820975895,461.55621195738473C556.606425686781,396.0723002908107,615.8543463187945,314.28637112970534,586.6730223649479,234.56875336149918C558.9533121215079,158.8439757836574,454.9685369536778,164.00468322053177,381.49747125262974,130.76875717737553C312.15926192815925,99.40240125094834,248.97055460311594,18.661163978235184,179.8680185752513,50.54337015887873C110.5421016452524,82.52863877960104,119.82277516462835,180.83849132639028,109.12597500060166,256.43424936330496C100.08760227029461,320.3096726198365,92.17705696193138,384.0621239912766,124.79988738764834,439.7174275375508C164.83382741302287,508.01625554203684,220.96474134820875,577.5009287672846,300,582.0697525312426",
  "M300,541.5067337569781C382.14930387511276,545.0595476570109,479.8736841581634,548.3450877840088,526.4010558755058,480.5488172755941C571.5218469581645,414.80211281144784,517.5187510058486,332.0715597781072,496.52539010469104,255.14436215662573C477.37192572678356,184.95920475031193,473.57363656557914,105.61284051026155,413.0603344069578,65.22779650032875C343.27470386102294,18.654635553484475,251.2091493199835,5.337323636656869,175.0934190732945,40.62881213300186C97.87086631185822,76.43348514350839,51.98124368387456,156.15599469081315,36.44837278890362,239.84606092416172C21.716077023791087,319.22268207091537,43.775223500013084,401.1760424656574,96.891909868211,461.97329694683043C147.22146801428983,519.5804099606455,223.5754009179313,538.201503339737,300,541.5067337569781",
  "M300,503.46388370962813C374.79870501325706,506.71871716319447,464.8034551963731,527.1746412648533,510.4981551193396,467.86667711651364C555.9287308511215,408.9015244558933,512.6030010748507,327.5744911775523,490.211057578863,256.5855673507754C471.097692560561,195.9906835881958,447.69079081568157,138.11976852964426,395.19560036434837,102.3242989838813C329.3053358748298,57.3949838291264,248.02791733380457,8.279543830951368,175.87071277845988,42.242879143198664C103.41431057327972,76.34704239035025,93.79494320519305,170.9812938413882,81.28167332365135,250.07896920659033C70.17666984294237,320.27484674793965,64.84698225790005,396.69656628748305,111.28512138212992,450.4950937839243C156.20124167950087,502.5303643271138,231.32542653798444,500.4755392045468,300,503.46388370962813",
  "M300,532.3542879108572C369.38199826031484,532.3153073249985,429.10787420159085,491.63046689027357,474.5244479745417,439.17860296908856C522.8885846962883,383.3225815378663,569.1668002868075,314.3205725914397,550.7432151929288,242.7694973846089C532.6665558377875,172.5657663291529,456.2379748765914,142.6223662098291,390.3689995646985,112.34683881706744C326.66090330228417,83.06452184765237,258.84405631176094,53.51806209861945,193.32584062364296,78.48882559362697C121.61183558270385,105.82097193414197,62.805066853699245,167.19869350419734,48.57481801355237,242.6138429142374C34.843463184063346,315.3850353017275,76.69343916112496,383.4422959591041,125.22947124332185,439.3748458443577C170.7312796277747,491.8107796887764,230.57421082200815,532.3932930995766,300,532.3542879108572",
  "M300,566.797414625762C385.7384707136149,576.1784315230908,478.7894351017131,552.8928747891023,531.9192734346935,484.94944893311C584.6109503024035,417.5663521118492,582.489472248146,322.67544863468447,553.9536738515405,242.03673114598146C529.1557734026468,171.96086150256528,465.24506316201064,127.66468636344209,395.9583748389544,100.7403814666027C334.2173773831606,76.7482773500951,269.4350130405921,84.62216499799875,207.1952322260088,107.2889140133804C132.92018162631612,134.33871894543012,41.79353780512637,160.00259165414826,22.644507872594943,236.69541883565114C3.319112789854554,314.0945973066697,72.72355303640163,379.243833228382,124.04198916343866,440.3218312028393C172.9286146004772,498.5055451809895,224.45579914871206,558.5317968840102,300,566.797414625762",
];

export const services = [
  {
    color: "item-cyan",
    icon: "bi-layout-text-window-reverse",
    title: "UI/UX Design",
    text: "Crafting visually appealing and user-friendly interfaces that enhance user experience across digital platforms.",
    blob: blobs[0],
  },
  {
    color: "item-orange",
    icon: "bi-palette",
    title: "Graphic Design",
    text: "Creating stunning visuals, brand identities, and marketing materials that leave a lasting impact.",
    blob: blobs[1],
  },
  {
    color: "item-teal",
    icon: "bi-vector-pen",
    title: "Wireframing & Prototyping",
    text: "Building structured layouts and interactive prototypes to bring ideas to life before development.",
    blob: blobs[2],
  },
  {
    color: "item-red",
    icon: "bi-type",
    title: "Typography & Font Design",
    text: "Designing custom typefaces and experimenting with unique typography to create a distinct visual identity.",
    blob: blobs[3],
  },
  {
    color: "item-indigo",
    icon: "bi-phone",
    title: "App UI/UX Wireframing",
    text: "Structuring app layouts with detailed wireframes to ensure smooth navigation and user-friendly experiences.",
    blob: blobs[4],
  },
  {
    color: "item-pink",
    icon: "bi-brush",
    title: "Creative Aesthetics",
    text: "Designing visually captivating and impactful experiences that enhance brand identity, engage audiences, and bring creative visions to life with precision and style.",
    blob: blobs[5],
  },
];

export const portfolioFilters = [
  { key: "*", label: "All" },
  { key: "app", label: "App" },
  { key: "product", label: "Card" },
  { key: "branding", label: "Web" },
];

export const portfolioItems = [
  {
    title: "App 1",
    category: "app",
    img: "/masonry-portfolio/masonry-portfolio-1.jpg",
  },
  {
    title: "Product 1",
    category: "product",
    img: "/masonry-portfolio/masonry-portfolio-2.jpg",
  },
  {
    title: "Branding 1",
    category: "branding",
    img: "/masonry-portfolio/masonry-portfolio-3.jpg",
  },
  {
    title: "App 2",
    category: "app",
    img: "/masonry-portfolio/masonry-portfolio-4.jpg",
  },
  {
    title: "Product 2",
    category: "product",
    img: "/masonry-portfolio/masonry-portfolio-5.jpg",
  },
  {
    title: "Branding 2",
    category: "branding",
    img: "/masonry-portfolio/masonry-portfolio-6.jpg",
  },
  {
    title: "App 3",
    category: "app",
    img: "/masonry-portfolio/masonry-portfolio-7.jpg",
  },
  {
    title: "Product 3",
    category: "product",
    img: "/masonry-portfolio/masonry-portfolio-8.jpg",
  },
  {
    title: "Branding 3",
    category: "branding",
    img: "/masonry-portfolio/masonry-portfolio-9.jpg",
  },
];

export const portfolioDetailsSlides = [
  "/portfolio/app-1.jpg",
  "/portfolio/product-1.jpg",
  "/portfolio/branding-1.jpg",
  "/portfolio/books-1.jpg",
];

export const resume = {
  intro:
    "Seeking a position as a UI/UX Designer in a reputable organization, with opportunities for continuous learning and professional growth.",
  summary: {
    name: "Rishi Dobariya",
    note: "Passionate about creating user-centric designs and writing clean code to improve digital experiences.",
    items: [
      { label: "Email", value: "rishupatel1011@gmail.com" },
      { label: "Phone", value: "+91 7779028820" },
      { label: "LinkedIn", value: "RISHI DOBARIYA", link: "#" },
      { label: "GitHub", value: "RishiDobariya", link: "#" },
    ],
  },
  education: {
    title: "BSc in Information Technology",
    period: "Expected Graduation: May 2025",
    school: "Darshan University, Gujarat",
    extra: "SPI: 9.17",
  },
  projects: [
    {
      title: "Online Movie Ticket Booking System",
      period: "Semester 4",
      text: "Developed a Software Requirements Specification (SRS) document for an online movie ticket booking system. Defined functional and non-functional requirements to ensure clear and complete system specifications.",
    },
    {
      title: "Farm House Booking System",
      period: "Semester 4",
      text: "Designed mobile and website screens using Figma for a Farm House Booking System. Focused on implementing user-friendly interfaces with an emphasis on usability and aesthetics.",
    },
    {
      title: "Coffee Shop Application",
      period: "Semester 5",
      text: "Developed a Coffee Shop Application using Flutter, allowing users to browse, search, and order coffee. Integrated features such as customer profiles, location tracking, and product details. Ensured smooth animations, a responsive UI, and seamless performance across Android and iOS.",
    },
  ],
  technicalSkills: [
    {
      label: "Programming",
      value: "Java, Python, JavaScript, HTML/CSS, Node.js, React.js",
    },
    {
      label: "Tools",
      value: "Figma, Android Studio, AWS, Git, Bootstrap, Postman",
    },
  ],
  certifications: [
    "Foundations of User Experience (UX) Design - Coursera (Aug 2024)",
    "UX Design Process: Empathize, Define, Ideate - Coursera (Sep 2024)",
  ],
  languages: "English, Hindi, Gujarati",
  hobbies: "Painting, Drawing, Music",
};

export const contact = {
  address: "Shree Ram Society, Rajkot, Gujarat 360003",
  phone: "+91 7779028820",
  email: "rishupatel1011@gmail.com",
  // Web3Forms access key — get a free one at https://web3forms.com (enter the email
  // above and they'll send you a key). Submissions are then emailed to that address.
  // This key is safe to expose in client-side code.
  accessKey: "2412a884-7250-4a84-b409-200ad8da9a88",
  mapSrc:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14762.33848102582!2d70.82498989999999!3d22.331543949999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3959b63d273582d5%3A0x4389cb6d12e3871c!2sShree%20Ram%20Society%2C%20Rajkot%2C%20Gujarat%20360003!5e0!3m2!1sen!2sin!4v1784629371762!5m2!1sen!2sin",
};
