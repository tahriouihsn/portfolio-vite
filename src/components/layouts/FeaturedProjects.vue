<template>
  <div class="flex flex-col gap-2 lg:gap-4">
    <h3 class="font-theme_bold text-2xl text-head_text">Featured Projects</h3>
    <p>Here are some of the projects that I'm proud of.</p>
    <div
      class="grid grid-cols-1 slg:grid-cols-2 gap-7 sm:gap-6 pt-8 mx-auto sm:w-5/6 slg:w-full"
    >
      <ProjectItem
        v-for="project in projects"
        :key="project.id"
        :name="project.name"
        :image="project.image"
        :description="project.description"
        :tech="project.tech"
        @click="
          project.link == null
            ? ((showModal = true), (video = project.video))
            : false
        "
        :link="project.link"
      />
      <vue-final-modal
        v-model="showModal"
        classes="modal-container"
        content-class="modal-content"
      >
      <iframe src="https://drive.google.com/file/d/1eV8LC5j_WZzfd8hTL7O0E8nEgkVp06A_/preview" class="responsive-iframe"  allow="autoplay"></iframe>
        <button
          class="modal-close bg-item_back h-8 w-8 rounded-full pb-[3px] hover:bg-item_hover_back"
          @click="showModal = false"
        >
          x
        </button>
      </vue-final-modal>
    </div>
  </div>
</template>
<script>
import { useProjectStore } from "../../store/projectStore";
import ProjectItem from "../ui/ProjectItem.vue";
import { $vfm, VueFinalModal, ModalsContainer } from "vue-final-modal";
export default {
  setup() {
    const projectStore = useProjectStore();
    const projects = projectStore.getFeaturedProjects;

    return { projects };
  },
  data() {
    return {
      showModal: false,
      video: null,
    };
  },
  components: { ProjectItem, VueFinalModal, ModalsContainer },
};
</script>
<style>
.modal-container {
  display: flex;
  justify-content: center;
  align-items: center;
}
.modal-content {
  position: relative;
  width: 50%;
  min-height: 40vh;
  max-height: 65vh;
  overflow: auto;
  background-color: #202026;
  border-radius: 4px;
}
@media (max-width: 768px) {
  .modal-content {
  position: relative;
  width: 90%;
  min-height: 40vh;
  max-height: 65vh;
  overflow: auto;
  background-color: #202026;
  border-radius: 4px;
}
}
.responsive-iframe {
  width: 100%;
  min-height: 40vh;
}

.modal-close {
  position: absolute;
  top: 5px;
  right: 38px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 22px;
  margin: 8px 8px 0 0;
  cursor: pointer;
}
.modal-close::hover {
  color: gray;
}
</style>
