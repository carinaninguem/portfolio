<template>
  <nav>
    <ul>
      <li
        class="flex items-end justify-end md:justify-start text-custom__tx my-2 md:my-6 p-2 border border-custom__border_c rounded-xl border-opacity-0 hover:border-opacity-100"
        v-for="(item, i) in menu_primary"
        :key="item + i"
      >
        <nuxt-link class="flex" :to="`/${stringuify(item)}`">
          <span class="text-1xl md:text-3xl lg:text-5xl md:pb-1 pr-2 self-end"
            >00{{ i + 1 }}.
          </span>
          <h1 class="pl-2 text-3xl md:text-5xl lg:text-7xl">
            {{ item }}
          </h1>
        </nuxt-link>
      </li>

      <ul v-if="width > 640 || menu_secundary.length != 0">
        <li
          class="flex items-end text-custom__tx ml-32"
          v-for="(sec, i) in menu_secundary"
          :key="sec + i"
        >
          <nuxt-link class="flex" :to="`/${stringuify(sec)}`">
            <h3>{{ sec }}</h3>
          </nuxt-link>
        </li>
      </ul>
    </ul>
  </nav>
</template>

<script>
export default {
  mounted() {
    this.width = window.innerWidth;

    window.addEventListener("resize", this.resizeHandler);
    this.$on("hook:beforeDestroy", () => {
      window.removeEventListener("resize", this.resizeHandler);
    });
  },
  data() {
    return {
      width: 0,
      /* menu_primary: ["Sobre Mim", "Projetos", "Outros"],
      menu_secundary: [
        "Projetos Pessoais",
        "Fotografia",
        "Ilustração",
        "Motion/Video",
      ],*/
      menu_primary: ["Sobre Mim", "Projetos"],
      menu_secundary: [],
    };
  },
  methods: {
    resizeHandler() {
      this.width = window.innerWidth;
    },
    stringuify(str) {
      const map = {
        a: "á|à|ã|â|À|Á|Ã|Â",
        e: "é|è|ê|É|È|Ê",
        i: "í|ì|î|Í|Ì|Î",
        o: "ó|ò|ô|õ|Ó|Ò|Ô|Õ",
        u: "ú|ù|û|ü|Ú|Ù|Û|Ü",
        c: "ç|Ç",
        n: "ñ|Ñ",
        "": "-",
      };
      for (let pattern in map) {
        str = str.replace(new RegExp(map[pattern], "g"), pattern).trim();
      }

      return str
        .toLowerCase()
        .replace(/ +(?= )/g, "")
        .replace(/\s/g, "-");
    },
  },
};
</script>