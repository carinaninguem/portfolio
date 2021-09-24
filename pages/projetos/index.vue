<template>
  <div>
    <div v-for="item in data" :key="item.id" class="flex w-full mt-0 md:mt-6">
      <ProjectCategory
        :title="item.projeto.title"
        :description="item.projeto.short_description"
        :category="item.projeto.category"
        :thumb="item.projeto.thumb"
        :slug="item.projeto.slug"
      />
    </div>
  </div>
</template>

<script>
import ProjectCategory from "@/components/ProjectCategory";

const getProjetos = () =>
  import("~/assets/db/projetos.json").then((m) => m.default || m);

export default {
  components: {
    ProjectCategory,
  },
  async asyncData({ req }) {
    const data = await getProjetos();
    return { data };
  },
  mounted() {
    this.$nuxt.$emit("number", "002");
  },
};
</script>