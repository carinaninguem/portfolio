<template>
  <nuxt-link
    :to="`/projetos/${slug}`"
    class="
      p-3
      flex
      w-full
      border
      border-custom__border_c
      rounded-xl
      border-opacity-0
      hover:border-opacity-100
    "
  >
    <div class="flex flex-col justify-center w-8/12">
      <p>{{ category }}</p>
      <Hsvg cl="w-11/12" />
      <p>{{ description }}</p>
    </div>
    <div class="flex justify-end w-4/12">
      <img
        v-for="(icon, i) in thumb"
        :key="slug + i"
        class="w-16 lg:w-24 xl:w-32 h-16 lg:h-24 xl:h-32 ml-6"
        :src="icon"
        :alt="slug"
      />
    </div>
  </nuxt-link>
</template>

<script>
import Hsvg from "@/components/Hsvg";

export default {
  components: {
    Hsvg,
  },
  props: {
    category: String,
    description: String,
    thumb: Array,
    slug: String,
  },
};
</script>