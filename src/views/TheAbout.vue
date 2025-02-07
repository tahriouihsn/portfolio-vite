<template>
  <article 
    class="flex flex-col gap-8"
    itemscope 
    itemtype="https://schema.org/AboutPage"
  >
    <meta itemprop="name" content="About Tahrioui Hassan - Laravel Full Stack Developer" />
    <section class="bio" itemprop="mainContentOfPage">
      <h1 class="sr-only">About Tahrioui Hassan - Laravel Developer</h1>
      <div 
        class="text-content"
        itemprop="text"
      >
        <p class="text-sm md:text-base leading-relaxed slg:text-lg lg:leading-loose">
          I'm Tahrioui Hassan, a Morocco-based Laravel Full Stack Developer specializing in building enterprise-grade web applications. With extensive expertise in Laravel's ecosystem, I create robust and scalable solutions using Laravel's advanced features including Eloquent ORM, Laravel Sanctum for API authentication, Laravel Echo for real-time applications, and Laravel Horizon for queue monitoring.
        </p>
        <p class="text-sm md:text-base leading-relaxed slg:text-lg lg:leading-loose">
          Currently, I'm leading development on 
          <LinkBtn link="https://openmatch.io" itemprop="mentions">OpenMatch.io</LinkBtn>, 
          an advanced job board platform built with Laravel and Vue.js, featuring complex backend systems for job matching and real-time notifications. Previously, I contributed to
          <LinkBtn link="https://inbetween.tech" itemprop="mentions">Inbetween</LinkBtn>, 
          where I implemented Laravel-based microservices and RESTful APIs. I'm expanding my expertise in Laravel's latest features, GraphQL integration, and modern architectural patterns like Domain-Driven Design (DDD) and CQRS.
        </p>
        <p class="text-sm md:text-base leading-relaxed slg:text-lg lg:leading-loose">
          My journey with Laravel began during my exploration of PHP frameworks, where I discovered Laravel's elegant syntax and powerful features. I've since mastered the entire Laravel ecosystem, including Laravel Mix for asset compilation, Laravel Dusk for browser testing, and Laravel Forge for deployment automation. My expertise extends to complementary technologies like Vue.js, TailwindCSS, and various Laravel packages for enhanced functionality.
        </p>
        <p class="text-sm md:text-base leading-relaxed slg:text-lg lg:leading-loose">
          Currently, I'm focused on developing innovative SaaS solutions using Laravel as the core framework, leveraging Laravel Cashier for subscription management and Laravel Nova for administration interfaces.
        </p>
        <p class="text-sm md:text-base leading-relaxed slg:text-lg lg:leading-loose">
          Explore my Laravel projects on 
          <LinkBtn link="https://github.com/tahriouihsn" itemprop="sameAs">Github</LinkBtn> 
          or my 
          <LinkBtn link="/" itemprop="relatedLink">Portfolio</LinkBtn>. 
          My repositories showcase various Laravel applications, from API-driven services to full-stack web applications.
        </p>
        <p class="text-sm md:text-base leading-relaxed slg:text-lg lg:leading-loose">
          Beyond coding, I enjoy gaming (Valorant and League of Legends), music, and connecting with fellow developers on Discord. Follow my journey on 
          <LinkBtn link="https://www.instagram.com/tahrioui.hassan/" itemprop="sameAs">Instagram</LinkBtn>
          and <LinkBtn link="https://twitter.com/tahrioui_hassan" itemprop="sameAs">Twitter</LinkBtn>.
        </p>
      </div>
    </section>

    <hr class="bg-squgily bg-repeat border-0 h-[6px] opacity-25 my-6" aria-hidden="true" />

    <section 
      class="flex flex-col gap-5"
      itemscope 
      itemtype="https://schema.org/WorkExperience"
    >
      <h2 class="font-theme_bold text-head_text text-3xl">Professional Experience</h2>
      <div class="flex flex-col gap-8 py-4" role="list">
        <a
          v-for="work in works"
          :key="work.id"
          :href="work.link"
          class="flex flex-col gap-1 sm:flex-row flex-nowrap justify-between items-start sm:gap-6"
          itemprop="hasOccupation"
          itemscope
          itemtype="https://schema.org/Occupation"
          role="listitem"
        >
          <span class="font-theme_bold text-head_text" itemprop="name">{{ work.name }}</span>
          <span class="flex-[1_1_auto]"></span>
          <span class="sm:text-right text-sm sm:text-base" itemprop="occupationalCategory">{{ work.position }}</span>
          <span class="text-sm sm:text-base">
            <meta itemprop="startDate" :content="work.from" />
            <meta itemprop="endDate" :content="work.to" />
            {{ work.from }} - {{ work.to }}
          </span>
        </a>
      </div>
    </section>
  </article>
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
