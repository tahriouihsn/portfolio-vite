<template>
  <article 
    class="flex flex-col items-center gap-12"
    itemscope 
    itemtype="https://schema.org/CreativeWork"
  >
    <meta itemprop="author" content="Tahrioui Hassan" />
    <figure>
      <img 
        :src="image" 
        :alt="name" 
        class="rounded-lg w-full" 
        itemprop="image"
        loading="lazy"
      />
    </figure>
    <div class="flex flex-col w-5/6 items-left gap-6">
      <h2 class="font-theme_bold text-2xl text-head_text" itemprop="name">{{ name }}</h2>
      <p class="text-sm lg:text-lg" itemprop="description">{{ description }}</p>
      <div class="flex gap-2 flex-wrap text-xs" itemprop="keywords">
        <span 
          v-for="(t, i) in tech" 
          :key="i"
          class="px-2 py-1 bg-btn_back"
        >
          {{ t }}
        </span>
      </div>
      <ActionButton 
        v-if="link" 
        :link="link" 
        class="w-fit"
        :aria-label="'Visit ' + name + ' project'"
      >
        <span itemprop="url">{{ returnDomain(link) }}</span>
        <Icon 
          class="inline text-xl" 
          icon="ep:top-right" 
          color="#eaeaea"
          aria-hidden="true"
        />
      </ActionButton>
    </div>
  </article>
</template>
<script>
import ActionButton from "./ActionButton.vue";

export default {
  setup() {
    function returnDomain(domain) {
      const matches = domain.match(
        /(?:[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?\.)+[a-z0-9][a-z0-9-]{0,61}[a-z0-9]/g
      );
      return matches[0];
    }

    return { returnDomain };
  },
  props: {
    name: {
      type: String,
      required: true
    },
    image: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    tech: {
      type: Array,
      required: true
    },
    link: {
      type: String,
      default: null
    }
  },
  components: { ActionButton },
};
</script>
