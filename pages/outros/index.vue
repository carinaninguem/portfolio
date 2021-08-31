<template>
  <div class="flex h-screen p-4 md:p-8 lg:p-16">
    <div class="w-1/2 flex flex-wrap content-center justify-center">
      <h1 class="text-white">Vê aqui is meus trabalhos</h1>
    </div>
    <div class="w-1/2 flex flex-wrap content-center justify-center">
      <div v-for="item in data" :key="item.id" class="w-32 h-32 m-2">
        <nuxt-link :to="`/outros/${item.projeto.slug}`">
          <img
            class="border rounded-xl w-32 h-32"
            :src="item.projeto.thumb"
            :alt="item.projeto.slug"
          />
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
const getOutros = () =>
  import("~/assets/db/outros.json").then((m) => m.default || m);

export default {
  async asyncData({ req }) {
    const data = await getOutros();
    return { data };
  },
  mounted() {
    this.$nuxt.$emit("number", "003");
  },
};
</script>