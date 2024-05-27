<template>
  <a
    class="flex flex-col w-full p-6 py-6 lg:p-6 lg:py-10 items-center gap-8 rounded-md bg-item_back hover:bg-item_hover_back transition-colors border-[1px] border-border_sm cursor-pointer"
    target="_blank"
    rel="noopener"
    :href="link"
  >
    <img
      class="w-full object-cover rounded-md slg:h-48"
      :src="image"
      :alt="name"
    />
    <div class="flex flex-col justify-between gap-4 slg:gap-5">
      <span class="font-theme_bold text-lg text-head_text slg:text-xl">{{
        name
      }}</span>
      <div class="flex gap-2 flex-wrap text-xs">
        <span class="px-2 py-1 bg-btn_back" v-for="(t, i) in tech" :key="i">{{
          t
        }}</span>
      </div>
      <p class="text-sm md:text-base">
        {{ description }}
      </p>
    </div>
  </a>
</template>
<script>
export default {
  setup() {},
  props: ["name", "image", "description", "tech", "link"],
};
</script>
