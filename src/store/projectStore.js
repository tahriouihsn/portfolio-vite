import { defineStore } from "pinia";

export const useProjectStore = defineStore("projectStore", {
  state: () => ({
    projects: [
      {
        id: 1,
        name: "OpenMatch",
        image: new URL("../assets/featured/openmatch.webp", import.meta.url)
          .href,
        description:
          "I made this website for talent graph company, A job board with many features out of the box.",
        tech: ["Vue", "Nuxt", "Vuex", "Vuetify", "Stripe", "ApexCharts"],
        link: null,
        video:
          '<div style="width:100%;height:0px;position:relative;padding-bottom:56.250%;"><iframe src="https://streamable.com/e/e6ttgk" frameborder="0" width="100%" height="100%" allowfullscreen style="width:100%;height:100%;position:absolute;left:0px;top:0px;overflow:hidden;"></iframe></div>',
        featured: true,
      },
      {
        id: 2,
        name: "Remoteology",
        image: new URL("../assets/featured/remoteology.webp", import.meta.url)
          .href,
        description: "I made this website , A job board for remote offers",
        tech: ["Laravel", "Vue", "Inertia", "Tailwind", "Stripe"],
        link: "https://jobs.hicaso.com/",
        featured: true,
      },
      // {
      //   id: 2,
      //   name: "Web3Hunter",
      //   image: new URL("../assets/featured/web3.webp", import.meta.url).href,
      //   description:
      //     "This is a job board for web3 jobs (No longer maintained).",
      //   tech: [
      //     "Nuxt",
      //     "Vue.js",
      //     "Primefaces",
      //     "TailwindCSS",
      //     "Stripe",
      //     "Strapi",
      //   ],
      //   link: "https://web3hunter.co/",
      //   featured: true,
      // },
      {
        id: 3,
        name: "Momentoo",
        image: new URL("../assets/featured/momentoo.webp", import.meta.url)
          .href,
        description:
          " Momento is a tool to help you take action.Your life is very precious so make it worth it.  (2nd product of the day on product hunt) ",
        tech: ["Vue.js", "TailwindCSS"],
        link: "https://momentoo.xyz",
        featured: true,
      },
      {
        id: 4,
        name: "Openquizz",
        image: new URL("../assets/featured/openquizz.webp", import.meta.url)
          .href,
        description:
          "Contain many test on different programming languages with developers made with Vue.js",
        tech: ["Vue.js", "TailwindCSS", "Firebase"],
        link: "https://openquizz.netlify.app/",
        featured: true,
      },
      {
        id: 5,
        name: "7eco24",
        image: new URL("../assets/featured/7eco24.webp", import.meta.url).href,
        description:
          "A website of contain more than 400k ads for the company 7eco24 (the design choosed by the company).",
        tech: ["Laravel", "Bootstrap"],
        link: "https://7eco24.com",
        featured: false,
      },
      // {
      //   id: 4,
      //   name: "Mikey Wazooski",
      //   image: new URL("../assets/featured/mikey.jpg", import.meta.url).href,
      //   description:
      //     "A feature-rich Discord bot I made to help me with my server and give action commands with great GIFs.",
      //   tech: ["JS", "Node.js", "MongoDB", "Heroku"],
      //   link: "https://discord.com/oauth2/authorize?client_id=819239364395532370&permissions=3912576065&scope=bot%20applications.commands",
      // },
      // {
      //   id: 5,
      //   name: "Advice Generator",
      //   image: new URL("../assets/featured/advice-gen.png", import.meta.url)
      //     .href,
      //   description:
      //     "A very simple Advice Generator, which gives advice with a click!",
      //   tech: ["HTML", "CSS", "JS", "REST APIs"],
      //   link: "https://advice-generator-ap.vercel.app/",
      // },
    ],
    grave: [
      {
        id: 1,
        name: "Web3Hunter",
        image: new URL("../assets/featured/web3.webp", import.meta.url).href,
        description:
          "This is a job board for web3 jobs (No longer maintained).",
        tech: [
          "Nuxt",
          "Vue.js",
          "Primefaces",
          "TailwindCSS",
          "Stripe",
          "Strapi",
        ],
        link: "https://web3hunter.co/",
        featured: true,
      },
      {
        id: 2,
        name: "E-coopera",
        image: new URL("../assets/featured/tic_tac_toe.jpg", import.meta.url)
          .href,
        description:
          "Ecommerce website selling natural products (Honey,Jam...)",
        tech: ["Wordpress"],
        link: "https://e-coopera.ma/",
      },
    ],
  }),
  getters: {
    getAllProjects: state => state.projects,
    getFeaturedProjects: state =>
      state.projects.filter(project => project.featured),
    getGraveProjects: state => state.grave,
  },
});
