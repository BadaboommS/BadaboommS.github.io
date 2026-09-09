export interface SkillItem {
  name: string;
  img?: string | null;
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
      { name: "Typescript", img: "../img/TS_Logo.svg" },
      { name: "TailwindCSS", img: "../img/tailwind.svg" }, 
      { name: "Playwright", img: "../img/playwright-logo.svg" }
    ],
  },
  {
    name: "Secondary technologies",
    items: [
      { name: "PrimeVue", img: "../img/primevue-logo.svg" },
      { name: "NodeJS", img: "../img/nodejs-icon.svg" },
      { name: "MongoDB", img: "../img/MongoDB.svg" },       
      { name: "Electron", img: "../img/electron_icon.webp" },    
      { name: "Deck.gl", img: "../img/deckGL_Logo.webp" },
      { name: "Express", img: "../img/expressjs.svg" },
      { name: "Linux", img: "../img/Tux.svg" },
      { name: "REST API", img: "../img/api.svg" }
    ],
  },
];
