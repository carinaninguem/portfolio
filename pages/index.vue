<template>
  <div class="flex md:flex-row flex-col">
    <div
      class="left w-full md:w-1/2 h-full justify-start flex md:justify-center items-center md:items-start flex-col"
    >
      <Logo />
    </div>
    <div
      class="right md:w-1/2 h-full justify-start flex md:justify-center items-center md:items-start flex-col"
    >
      <Navbar class="flex self-end md:self-center" />
    </div>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar";
import Logo from "@/components/Logo";
export default {
  components: {
    Navbar,
    Logo,
  },
  mounted() {
    this.$nuxt.$emit("number", "");
  },
};
</script>


