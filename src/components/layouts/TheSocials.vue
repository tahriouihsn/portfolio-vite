<template>
  <div class="flex justify-between items-center">
    <div class="flex gap-1">
      <SocialIcon
        title="Github"
        link="https://github.com/tahriouihsn"
        icon="ant-design:github-filled"
      />
      <SocialIcon
        title="Twitter"
        link="https://twitter.com/tahrioui_hassan"
        icon="ant-design:twitter-outlined"
      />
      <SocialIcon
        title="Instagram"
        link="https://www.instagram.com/tahrioui.hassan/"
        icon="ant-design:instagram-outlined"
      />
    </div>
    <ActionButton link="mailto:tahrioui.hsn@gmail.com">Email Me</ActionButton>
  </div>
</template>

<script>
import SocialIcon from "../ui/SocialIcon.vue";
import ActionButton from "../ui/ActionButton.vue";

export default {
  components: { SocialIcon, ActionButton },
};
</script>
