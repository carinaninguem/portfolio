<template>
  <div class="flex flex-col md:flex-row">
    <div
      class="
        left
        w-full
        md:w-2/6
        lg:w-1/2
        h-full
        justify-start
        flex
        md:justify-center
        items-center
        md:items-start
        flex-col
        pt-16
        md:pt-0
      "
    >
      <Logo />
    </div>
    <div
      class="
        md:w-4/6
        lg:w-1/2
        h-full
        justify-start
        flex
        md:justify-center
        items-center
        text-xs
        flex-col
        md:flex-row
      "
    >
      <div class="flex flex-col md:flex-row">
        <div class="w-full md:w-1/2 md:pr-10 pt-16 md:pt-0">
          <h2 class="text-4xl">Designer</h2>
          <Hsvg cl="absolute w-3/12 hidden md:block" />
          <p class="mt-8 text-white text-sm">
            de formação, com um amor especial pela fotografia. Viciada em ver o
            mundo a partir de uma lente (<span class="extra_light"
              >@carinaniguem</span
            >).
          </p>
          <h5 class="text-red-400 pt-4 pb-2">Atualmente</h5>
          <p class="extra_light">(DEZ 2018 - JAN 2021)</p>
          <p class="pb-4 pt-2">
            Designer de comunicação na empresa LFM Corporate, responsável pela
            comunicação da marca Dreambooks.
          </p>
          <h5 class="pt-4 text-custom__tx mb-4">Outros trabalhos</h5>
          <ul>
            <li>
              <span class="text-custom__tx mb-4">• SET 2020</span>
              <p class="pb-4 pt-2">
                Desenvolvimento da marca “Casa da Granja - Restaurante e Tapas”
              </p>
            </li>
            <li>
              <span class="text-custom__tx mb-4">• MAR - MAIO 2018 </span>
              <p class="pb-4 pt-2">
                Colaboração na equipa de Imagem da Comissão Organizadora da
                Queima Das Fitas de 2018 de Coimbra.
              </p>
            </li>
            <li>
              <span class="text-custom__tx mb-4">• NOV 2018</span>
              <p class="pb-4 pt-2">
                Desenvolvimento da marca “Carmen - Bistrô e Restaurante”
              </p>
            </li>
          </ul>
        </div>
        <div class="w-full md:w-1/2 md:pl-10 pt-9 pb-9 lg:pb-0">
          <p class="semi_bold">2015 - 2018</p>
          <p class="extra_light">
            Licenciatura em Design e Multimédia, na Faculdade de Ciências e
            Tecnologias da Universidade de Coimbra.
          </p>
          <p class="semi-bold pt-4">
            Indecisa por natureza, não tenho músicas, bandas, comidas ou outro
            tipo de coisas favoritas. Tenho gostos bastante abrangentes e
            considero que, tudo isto acaba por depender de vários fatores.
          </p>
          <p class="semi-bold pt-4">
            Desde cedo que me sinto um peixinho na água no que diz respeito ao
            mundo visual. Por isso, agarrar nos problemas e necessidades das
            pessoas e conseguir contorná-los é algo que me satisfaz diariamente.
          </p>
          <p class="semi-bold pt-4">
            Tenho uma memória fotográfica enorme que me ajuda nas criações e
            ideias por vezes um pouco “fora de série”.
          </p>
          <p class="semi-bold pt-4">
            Quando não estou a desenhar, provavelmente estou a ver o mundo
            através de um pequeno ecrã, a vibrar num concerto (mesmo que no meu
            quarto), a conviver e a conhecer o mundo que me rodeia.
          </p>
          <p class="semi-bold pt-4">
            Entra em contacto e vamos beber um fino numa esplanada!
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Logo from "@/components/Logo";
import Hsvg from "@/components/Hsvg";
export default {
  components: {
    Logo,
    Hsvg,
  },
  mounted() {
    this.$nuxt.$emit("number", "001");
  },
};
</script>