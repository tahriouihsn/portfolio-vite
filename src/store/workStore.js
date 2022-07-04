import { defineStore } from "pinia";

export const useWorkStore = defineStore("workStore", {
  state: () => ({
    works: [
      {
        id: 1,
        name: "AA+",
        position: "Jr. Full stack developer Developer",
        from: "2019-06",
        to: "2019-10.",
        link: "https://auditactionplus.com/",
      },
      {
        id: 2,
        name: "e-Coopera",
        position: "Jr. Full stack developer Developer",
        from: "2019-11",
        to: "2021-06.",
        link: "#",
      },
      {
        id: 3,
        name: "FCPO",
        position: "Jr. Full stack developer Developer",
        from: "2020-03",
        to: "2020-07.",
        link: "#",
      },
      {
        id: 4,
        name: "Inbetween",
        position: "Jr. Full stack developer Developer",
        from: "2020-08",
        to: "2022-06.",
        link: "https://inbetween.tech/",
      },
    ],
  }),
  getters: {
    getAllWorks: state => state.works,
  },
});
