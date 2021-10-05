<template>
  <div class="flex md:flex-row flex-col mb-16" ref="tamanho">
    <div v-for="item in getProjeto" :key="item.id" class="w-full pt-24">
      <img
        class="w-full"
        :src="item.projeto.main_image"
        :alt="item.projeto.slug"
      />

      <div class="flex pt-16 lg:pt-52 flex-col xl:flex-row">
        <div class="w-full xl:w-1/2 xl:pr-16">
          <h3 class="text-md xl:text-xl text-custom__tx">
            {{ item.projeto.type }}
          </h3>
          <h1 class="text-4xl xl:text-5xl">{{ item.projeto.title }}</h1>
          <p
            v-for="(desc, i) in item.projeto.description"
            :key="'desc' + i"
            class="mt-8"
          >
            {{ desc }}
          </p>
        </div>
        <div class="w-full xl:w-1/2 mt-8 xl:mt-0">
          <img
            class="w-full"
            :src="item.projeto.description_image"
            :alt="item.projeto.slug"
          />
        </div>
      </div>

      <div class="flex pt-16 lg:pt-52 flex-col xl:flex-row">
        <div class="w-full xl:w-2/6 pr-0 xl:pr-16">
          <h3 class="text-4xl york text-custom__tx">.palavras-chave</h3>

          <div class="mt-5 flex">
            <div class="">
              <p
                class="mr-5"
                v-for="keyword in item.projeto.keywords.slice(
                  0,
                  Math.ceil(item.projeto.keywords.length / 2)
                )"
                :key="keyword"
              >
                - {{ keyword }}
              </p>
            </div>
            <div class="">
              <div class="">
                <p
                  v-for="keyword in item.projeto.keywords.slice(
                    Math.ceil(item.projeto.keywords.length / 2)
                  )"
                  :key="keyword"
                >
                  - {{ keyword }}
                </p>
              </div>
            </div>
          </div>

          <div class="w-full mt-10">
            <img
              v-for="color in item.projeto.colors"
              :key="color"
              class="w-1/3 float-left pt-5 pr-5"
              :src="color"
              :alt="color"
            />
          </div>
        </div>
        <div class="w-full xl:w-4/6 mt-16 xl:mt-0">
          <img
            class="w-full"
            :src="item.projeto.keywords_image"
            :alt="item.projeto.slug"
          />
        </div>
      </div>
      <div
        v-if="
          item.projeto.fotografia_active === true ||
          item.projeto.design_active === true ||
          item.projeto.videos_active === true
        "
        class="filters mt-52"
      >
        <ul class="flex">
          <li
            v-if="
              item.projeto.fotografia_active === true ||
              item.projeto.design_active === true ||
              item.projeto.videos_active === true
            "
            @click="activate(0)"
            :class="{ active: active_el == 0 }"
            class="mr-2 xl:mr-5"
          >
            <h1 class="cursor-pointer york text-2xl xl:text-4xl">Todos .</h1>
          </li>
          <li
            v-if="item.projeto.design_active === true"
            @click="activate(1)"
            :class="{ active: active_el == 1 }"
            class="ml-2 xl:ml-5 mr-2 xl:mr-5"
          >
            <h1 class="cursor-pointer york text-2xl xl:text-4xl">Design .</h1>
          </li>
          <li
            v-if="
              item.projeto.videos_active === true &&
              item.projeto.fotografia_active === true
            "
            @click="activate(2)"
            :class="{ active: active_el == 2 }"
            class="ml-2 xl:ml-5"
          >
            <h1 class="cursor-pointer york text-2xl xl:text-4xl">
              Fotografia & Videos
            </h1>
          </li>
          <li
            v-if="
              item.projeto.videos_active === true &&
              item.projeto.fotografia_active === false
            "
            @click="activate(2)"
            :class="{ active: active_el == 2 }"
            class="ml-2 xl:ml-5"
          >
            <h1 class="cursor-pointer york text-2xl xl:text-4xl">Videos</h1>
          </li>
          <li
            v-if="
              item.projeto.fotografia_active === true &&
              item.projeto.videos_active === false
            "
            @click="activate(2)"
            :class="{ active: active_el == 2 }"
            class="ml-2 xl:ml-5"
          >
            <h1 class="cursor-pointer york text-2xl xl:text-4xl">Fotografia</h1>
          </li>
        </ul>
      </div>

      <div v-if="active_el == 0 || active_el == 1">
        <img
          v-for="image in item.projeto.design"
          :key="image"
          class="w-full pt-16"
          :src="image"
          :alt="image"
        />
      </div>
      <div v-if="active_el == 0 || active_el == 2">
        <div class="w-full flex flex-col xl:flex-row items-start">
          <div class="w-full xl:w-2/4 xl:pr-0 mr-10">
            <h1
              v-if="
                item.projeto.fotografia_active === true &&
                item.projeto.videos_active === true
              "
              class="york text-2xl xl:text-4xl pt-52"
            >
              .Fotografia e Videos
            </h1>

            <p
              v-if="
                item.projeto.fotografia_active === true ||
                item.projeto.videos_active === true
              "
              class="mt-6"
            >
              Para acompanhar a comunicação e lançamento da marca, produzi
              alguns conteúdos quer de fotografia quer de vídeo.
            </p>
            <p
              v-if="
                item.projeto.fotografia_active === true ||
                item.projeto.videos_active === true
              "
              class="mt-6 mb-6 xl:mb-0"
            >
              Ver projeto no
              <a :href="item.projeto.behance" target="_blank">Behance →</a>
            </p>
          </div>
          <div
            v-if="item.projeto.videos_active === true"
            class="w-full xl:w-2/4 flex projects_videos scroller pt-16"
          >
            <div
              v-for="vid in item.projeto.videos"
              :key="vid + videos_key"
              class="w-full mr-16"
            >
              <vimeo-player
                v-if="windowWidth > 1024"
                ref="player"
                :video-id="vid"
                :player-width="width / 2"
                :player-height="'auto'"
              />

              <vimeo-player
                v-else
                ref="player"
                :video-id="vid"
                :player-width="width"
                :player-height="'auto'"
              />
            </div>
          </div>
        </div>

        <div
          v-if="item.projeto.videos_active === true"
          class="controls flex w-full justify-end mt-4"
        >
          <div class="xl:w-2/4 w-full flex justify-end">
            <h1 class="text-custom__tx">Scroll</h1>
          </div>
        </div>

        <div
          v-if="item.projeto.fotografia_active === true"
          class="pt-16 flex flex-wrap"
        >
          <div
            class="w-1/3 projects_photo"
            v-for="image in item.projeto.fotografia"
            :key="image"
          >
            <img class="w-full" :src="image" :alt="image" />
          </div>
        </div>
      </div>
      <h1 class="cursor-pointer york text-2xl xl:text-4xl mt-48">
        Ver Mais Projetos
      </h1>
      <div class="block sm:flex mt-0 md:mt-6">
        <nuxt-link
          v-for="next in projeto"
          :key="next.id"
          :to="`/projetos/${next.projeto.slug}`"
          class="
            flex flex-col
            items-start
            sm:items-center
            mr-10
            p-3
            border
            border-custom__border_c
            rounded-xl
            border-opacity-0
            hover:border-opacity-100
          "
        >
          <div class="">
            <img
              class="w-16 lg:w-24 xl:w-32 h-16 lg:h-24 xl:h-32"
              :src="next.projeto.thumb[0]"
              :alt="next.projeto.thumb[0]"
            />
          </div>
          <div class="mt-2">
            <p class="semi_bold">{{ next.projeto.title.split("-")[0] }}</p>
          </div>
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
import ProjectCategory from "@/components/ProjectCategory";
const getProjetos = () =>
  import("~/assets/db/projetos.json").then((m) => m.default || m);

export default {
  mounted() {
    this.windowWidth = window.innerWidth;
    this.width = this.$refs.tamanho.clientWidth;
    window.addEventListener("resize", this.resizeHandler);
    this.$on("hook:beforeDestroy", () => {
      window.removeEventListener("resize", this.resizeHandler);
    });
  },
  data() {
    return {
      entry_id: this.$route.params.id,
      projeto: [],
      next_projeto: [],
      title: "",
      active_el: 0,
      width: "",
      videos_key: 0,
      windowWidth: "",
    };
  },
  async created() {
    this.projeto = await getProjetos();
  },
  computed: {
    getProjeto() {
      return this.projeto.filter((fil, i) => {
        if (fil.projeto.slug === this.entry_id) {
          this.$nuxt.$emit("title", fil.projeto.slug);
          this.$nuxt.$emit("number", fil.id);
          this.$nuxt.$emit("background", false);

          if (i + 1 > this.projeto.length - 1) {
            this.next_projeto = this.projeto[0];
          } else {
            this.next_projeto = this.projeto[i + 1];
          }

          return fil;
        }
      });
    },
  },
  methods: {
    activate: function (el) {
      this.active_el = el;
    },
    resizeHandler() {
      this.windowWidth = window.innerWidth;
      this.width = this.$refs.tamanho.clientWidth;
      this.videos_key += 1;
    },
  },
};
</script>

<style scoped>
.active {
  opacity: 0.5;
}

.projects_photo {
  padding-right: 2rem;
  padding-top: 2rem;
}

.projects_videos {
  position: relative;
  overflow-x: scroll;
  overflow-y: hidden;
}

.scroller {
  scrollbar-color: #000000 #ff9c6c;
  scrollbar-width: thin;
}

::-webkit-scrollbar {
  height: 12px;

  background: #ff9c6c;
}

::-webkit-scrollbar-thumb {
  background: #000000;
  height: 5px;
  -webkit-border-radius: 1ex;
  border-radius: 1ex;
  border: 2px solid #ff9c6c;
  outline: 2px solid #ff9c6c;
  outline-offset: -2px;
}

::-webkit-scrollbar-corner {
  background: #000;
}
</style>