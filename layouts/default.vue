<template>
  <div
    :class="{ background: hasBackground }"
    class="h-screen p-4 md:p-8 lg:p-16 flex flex-col justify-between"
  >
    <div class="justify-between flex">
      <h1 v-if="isHome === false" class="text-custom__tx text-4xl">
        {{ title }}
      </h1>
      <div class="flex flex-col items-end">
        <h1 v-if="isHome === false" class="text-custom__tx text-4xl flex">
          <span
            @click="handleSecMenu"
            :class="{ active: isActive }"
            v-if="isHome === false"
            ><img
              v-if="isActive === false"
              class="secMenu"
              src="~/assets/images/hamburger.svg" />

            <img v-else class="secMenu" src="~/assets/images/cross.svg"
          /></span>
          {{ number }}
        </h1>
        <div
          v-if="isActive"
          class="flex bg-custom__bg border border-custom__border_c rounded-3xl px-16 py-24 mt-16 absolute z-10 right-14"
        >
          <Navbar />
        </div>
      </div>
    </div>

    <Nuxt />
    <Bottom />
  </div>
</template>

<script>
import Navbar from "@/components/Navbar";
import Bottom from "@/components/Bottom";

export default {
  components: {
    Navbar,
    Bottom,
  },
  created() {
    this.$nuxt.$on("number", (data) => {
      this.number = data;
    });
    this.$nuxt.$on("background", (data) => {
      this.hasBackground = data;
    });
  },
  mounted() {
    this.setTitle();
  },
  watch: {
    $route() {
      this.hasBackground = true;
      this.isActive = false;
      this.setTitle();
    },
  },
  data() {
    return {
      title: "",
      head_title: "Home",
      number: "",
      isActive: false,
      isHome: true,
      hasBackground: true,
    };
  },
  methods: {
    setTitle() {
      if (this.$route.name != "index") {
        let r;
        if (
          this.$route.name != "projetos-id" &&
          this.$route.name != "outros-id"
        ) {
          r = this.$route.name.replace("-", " ");
        } else {
          r = this.$route.params.id.replace("-", " ");
        }

        this.title = r.replace(/(^\w{1})|(\s+\w{1})/g, (letter) =>
          letter.toUpperCase()
        );
        this.head_title = this.title;
        this.isHome = false;
      } else {
        this.title = "";
        this.head_title = "Home";
        this.isHome = true;
      }
    },
    handleSecMenu() {
      this.isActive = !this.isActive;
    },
  },
  head() {
    return {
      title: this.head_title,
    };
  },
};
</script>

<style>
html {
  font-family: "montserrat-medium", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;

  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}

body {
  background-color: #000000;
}

h1,
h2,
span {
  font-family: new-york;
}

a,
.title {
  font-family: montserrat-extra-light;
}

h1,
h2,
p {
  @apply text-custom__tx;
}

.secMenu {
  height: 40px;
  cursor: pointer;
}

.background {
  background: url("~assets/images/home.jpg");
  background-repeat: no-repeat;
  background-position: center center;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
}

@media only screen and (max-width: 1024px) {
  .background {
    background: transparent;
  }
}
</style>
