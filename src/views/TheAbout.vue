<template>
  <div class="flex flex-col gap-8">
    <p
      class="text-sm md:text-base leading-relaxed slg:text-lg lg:leading-loose"
    >
      I'm Tahrioui Hassan, a Morocco based Vue.js Developer , i never-stopping
      love for learning new tech. I am specialising in Web Development with
      Vue.js, Express, Node.js, PHP , Laravel,Python and Django. I am passionate
      about the Internet and how we can design beautiful looking interfaces with
      programming languages.
    </p>
    <p
      class="text-sm md:text-base leading-relaxed slg:text-lg lg:leading-loose"
    >
      I'm currently working on
      <LinkBtn link="https://openmatch.io">OpenMatch.io</LinkBtn>, a job board
      with new features. I recently worked on
      <LinkBtn link="https://inbetween.tech">Inbetween</LinkBtn>, is an
      innovative company with a mission to connect talent with the best
      opportunities. I am also learning GraphQL,Solidity and UI/UX design i just
      wanna get better and better. Before this, I used to work with different
      companies and work on different projects with different programming
      languages.
    </p>
    <p
      class="text-sm md:text-base leading-relaxed slg:text-lg lg:leading-loose"
    >
      I started learning about web-development in my early middle-school, where
      I was introduced to HTML and CSS. I quickly started writing small webpages
      with simple HTML and little of CSS. After my high-school, I took some time
      to myself and explored the web development world more and found many
      frameworks. Out of all, I found my love for Vue.js and Laravel Stack.
      Since then, I've been mastering it, and with every new project I try to
      learn a new thing, like TailwindCSS ,Bootstrap , Vuetify, Primefaces,
      ChakraUI, Vuex, Pinia, Express and more.
    </p>
    <p
      class="text-sm md:text-base leading-relaxed slg:text-lg lg:leading-loose"
    >
      Now im a bootstrapper for SAAS Projects
    </p>
    <p
      class="text-sm md:text-base leading-relaxed slg:text-lg lg:leading-loose"
    >
      You can find my projects on my
      <LinkBtn link="https://github.com/tahriouihsn">Github</LinkBtn> or on my
      <LinkBtn link="/">Portfolio</LinkBtn> page. I usually don't update my
      portfolio page but all my recent one's are on github.
    </p>
    <p
      class="text-sm md:text-base leading-relaxed slg:text-lg lg:leading-loose"
    >
      Outside of my worklife, I love to play Valorant and League of legends,
      listening to Em. on Spotify, or just hanging out on Discord with my
      friends. You can follow along about my life on my
      <LinkBtn link="https://www.instagram.com/tahrioui.hsn/"
        >Instagram</LinkBtn
      >
      or <LinkBtn link="https://twitter.com/tahrioui_hassan">Twitter</LinkBtn>.
      I post very rarely so you might not find many posts on either.
    </p>
    <hr class="bg-squgily bg-repeat border-0 h-[6px] opacity-25 my-6" />
    <div class="flex flex-col gap-5">
      <h3 class="font-theme_bold text-head_text text-3xl">Work</h3>
      <div class="flex flex-col gap-8 py-4">
        <a
          class="flex flex-col gap-1 sm:flex-row flex-nowrap justify-between items-start sm:gap-6"
          v-for="work in works"
          :key="work.id"
          :href="work.link"
        >
          <span class="font-theme_bold text-head_text">{{ work.name }}</span>
          <span class="flex-[1_1_auto]"></span>
          <span class="sm:text-right text-sm sm:text-base">{{
            work.position
          }}</span>
          <span class="text-sm sm:text-base"
            >{{ work.from }} - {{ work.to }}</span
          >
        </a>
      </div>
    </div>
  </div>
</template>
<script>
import { useWorkStore } from "../store/workStore";

export default {
  setup() {
    const workStore = useWorkStore();
    const works = workStore.getAllWorks;

    return { works };
  },
};
</script>
