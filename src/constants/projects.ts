export interface ProjectLink {
  label: string; // texte à afficher
  url: string;   // lien
}

export interface Project {
  id: string | number;
  title: string;
  description: string[];
  stack?: string;
  specifics?: string;
  img?: { src: string; alt: string }[] | null;
  links?: ProjectLink[]; // remplace link/repo par un tableau
  gallery?: { src: string; alt: string }[];
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Property reservation management website",
    description: [
      "- API request management and front-end interactivity.",
      "- CRUD routes and authorization management.",
    ],
    stack: "MERN (MongoDb, Express, ReactJs, Node.js)",
    img: [
      { src: "/img/MongoDB.svg", alt: "MongoDB" },
      { src: "/img/expressjs.svg", alt: "Express" },
      { src: "/img/react.svg", alt: "React" },
      { src: "/img/nodejs-icon.svg", alt: "NodeJs" },
    ],
    links: [
      { label: "View Deployment", url: "https://reservation-project.onrender.com/" },
      { label: "View Repository", url: "https://github.com/BadaboommS/ReservationProject" },
    ],
    gallery: [
      { src: "/img/project_img/reservation_1.png", alt: "Reservation Desktop" },
      { src: "/img/project_img/reservation_2.png", alt: "Reservation Mobile" },
      { src: "/img/project_img/reservation_3.png", alt: "Reservation Dashboard" },
    ],
  },
  {
    id: 2,
    title: "Utility app for a video game",
    description: [
      "- Processing and manipulation of encrypted data to generate a customised interface and queries for Path Of Exile trading site.",
      "You can try my utility with my most recent POE Build!",
    ],
    stack: "ReactJS",
    img: [{ src: "/img/react.svg", alt: "React" }],
    links: [
      { label: "View Deployment", url: "https://poetradehelper.onrender.com/" },
      { label: "View Repository", url: "https://github.com/BadaboommS/PoeTradeHelper" },
    ],
    gallery: [
      { src: "/img/project_img/poe_trade_1.png", alt: "PoeTradeHelper Desktop" },
      { src: "/img/project_img/poe_trade_2.png", alt: "PoeTradeHelper Mobile" },
      { src: "/img/project_img/poe_trade_3.png", alt: "PoeTradeHelper Dashboard" },
    ],
  },
  {
    id: 3,
    title: "Password Management App",
    description: [
      "Electron JS App for password management.",
      "Data are locally stored and encrypted using OS-based techniques.",
      "Electron multi-process management and inter-process communication with a secure internal API.",
    ],
    stack: "React Electron Tailwind Typescript",
    img: [
      { src: "/img/react.svg", alt: "ReactJS" },
      { src: "/img/electron_icon.png", alt: "Electron" },
      { src: "/img/tailwind.svg", alt: "Tailwind" },
      { src: "/img/TS_Logo.svg", alt: "Typescript" },
    ],
    links: [
      { label: "View Repository", url: "https://github.com/BadaboommS/Password_Manager" },
    ],
    gallery: [],
  },
  {
    id: 4,
    title: "Scientific Spatial Cell Analysis App",
    description: [
      "- Internship at Mantalys.",
      "- Most work done in Front-end and test development."
    ],
    stack: "VueJS, PrimeVue, Playwright, DeckGl",
    img: [
      { src: "/img/vue.svg", alt: "Vue" },
      { src: "/img/primevue-logo.svg", alt: "PrimeVue" },
      { src: "/img/playwright-logo.svg", alt: "Playwright" },
    ],
    links: [
      { label: "Company Website", url: "https://mantalys.fr/" },
    ],
    gallery: [
      { src: "/img/project_img/mantaplex_1.png", alt: "Mantaplex 1" },
      { src: "/img/project_img/mantaplex_2.png", alt: "Mantaplex 2" },
    ],
  },
  {
    id: 5,
    title: "Gameboy Emulator",
    description: [
      "- Personal Training Project in C.",
      "- Based on guide provided by Low Level Devel.",
      "- My Objective was to develop my understanding of low level programming and to upgrade my code formating and project structure skills.",
    ],
    stack: "C",
    img: [{ src: "/img/C.svg", alt: "C" }],
    links: [
      { label: "View Repository", url: "https://github.com/BadaboommS/Bg_Emu" },
      { label: "Guide Source", url: "https://www.youtube.com/@lowleveldevel1712" },
    ],
    gallery: [
      { src: "/img/project_img/GB_Emu.png", alt: "GBEmu" },
    ],
  },
  {
    id: 6,
    title: "Weather Tracking App",
    description: [
      "- Data fetching from an American weather API and weather tracking.",
      "- Planned Upgrade: adapt the app for French weather APIs.",
    ],
    stack: "VueJS",
    img: [{ src: "/img/vue.svg", alt: "Vue" }],
    links: [
      { label: "View Deployment", url: "https://weathertraining.onrender.com/" },
      { label: "View Repository", url: "https://github.com/BadaboommS/WeatherTraining" },
    ],
    gallery: [
      { src: "/img/project_img/Weather_1.png", alt: "Weather Tracking Screenshot" },
    ],
  },
];
