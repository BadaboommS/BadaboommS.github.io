// Définition des types
export interface SkillItem {
  name: string;
  img?: string | null; // img optionnel
}

export interface SkillCategory {
  name: string;
  items: SkillItem[];
}

export const skills: SkillCategory[] = [
  {
    name: "Favourite technologies",
    items: [
      { name: "ReactJS", img: "../img/react.svg" },
      { name: "VueJs", img: "../img/vue.svg" },
      { name: "PrimeVue", img: "../img/primevue-logo.svg" },
      { name: "NodeJS", img: "../img/nodejs-icon.svg" },
      { name: "Typescript", img: "../img/TS_Logo.svg" },
      { name: "MongoDB", img: "../img/MongoDB.svg" },       
      { name: "TailwindCSS", img: "../img/tailwind.svg" }, 
      { name: "Electron", img: "../img/electron_icon.png" },    
      { name: "Deck.gl" },
      { name: "Express", img: "../img/expressjs.svg" },
    ],
  },
  {
    name: "Others",
    items: [
      { name: "Git / Github", img: "../img/square-github.svg" },
      { name: "Agile Methods", img: "../img/agile_icon.png" },
      { name: "Linux", img: "../img/Tux.svg" },
      { name: "REST API", img: "../img/api.svg" },
      { name: "Playwright", img: "../img/playwright-logo.svg" },
    ],
  },
];
