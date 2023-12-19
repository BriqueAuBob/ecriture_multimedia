<script setup>
import { ref } from "vue";
import PriceInEuro from "../composables/PriceInEuro";
import Button from "../components/Button.vue";

const selectedSize = ref(36);
const { priceInEuro } = PriceInEuro(90);

const infoDismissed = ref(true);
</script>

<template>
  <div class="container grid lg:grid-cols-2 gap-3 py-8">
    <aside>
      <div class="bg-neutral-100 rounded-xl relative group">
        <img
          src="https://static.nike.com/a/images/t_default/76b430e5-ed15-4864-99c8-3898162b966a/chaussure-air-max-97-pour-915npJ.png"
          class="w-full -scale-x-100"
        />
        <img
          src="../assets/images/shoes_hover.png"
          class="absolute top-0 left-0 w-full h-full opacity-0 ease-out duration-300 group-hover:opacity-100"
        />
      </div>
    </aside>
    <div class="p-8">
      <h1 class="text-3xl font-bold">Chaussure</h1>
      <h2 class="text-md font-medium mt-2">
        Commodo Lorem ipsum incididunt non ea amet est pariatur consectetur enim
        ea aute amet.
      </h2>
      <div class="font-bold text-7xl mt-4">{{ priceInEuro }}</div>
      <div class="grid grid-cols-3 gap-2 mt-4">
        <TransitionGroup name="fadescale">
          <button
            v-for="i in infoDismissed ? 6 : 12"
            :key="i"
            @click="selectedSize = i + 35"
            class="border rounded-xl py-4 transition ease-in duration-200"
            :class="[selectedSize === i + 35 && 'bg-neutral-800 text-white']"
          >
            {{ i + 35 }}
          </button>
        </TransitionGroup>
      </div>
      <p
        class="mt-2 transition duration-400 ease-in text-yellow-600"
        :class="
          infoDismissed &&
          'max-h-0 opacity-0 relative -z-10 pointer-events-none'
        "
      >
        Pour réaliser toutes ces pointures, un artisan a travaillé 80h par
        semaine pour un salaire misérable de 0.15€ de l'heure. Soit 48€ par mois
        !
      </p>
      <Button
        text="Voir plus"
        class="w-full py-4 mt-3"
        v-if="infoDismissed"
        @click="infoDismissed = false"
      />
    </div>
  </div>
</template>
