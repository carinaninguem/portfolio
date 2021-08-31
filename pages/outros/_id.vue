<template>
  <div class="flex h-screen md:flex-row flex-col p-4 md:p-8 lg:p-16">
    <div v-for="item in getOutro" :key="item.id">
      <p>{{ item.projeto.nome }}</p>
      <p>{{ item.projeto.thumb }}</p>
    </div>
  </div>
</template>

<script>
const getOutros = () =>
  import("~/assets/db/outros.json").then((m) => m.default || m);

export default {
  data() {
    return {
      entry_id: this.$route.params.id,
      outro: [],
    };
  },
  async created() {
    this.outro = await getOutros();
  },
  computed: {
    getOutro() {
      return this.outro.filter((fil) => {
        if (fil.projeto.slug === this.entry_id) {
          return fil;
        }
      });
    },
  },
};
</script>