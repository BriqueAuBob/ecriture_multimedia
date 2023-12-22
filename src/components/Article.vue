<script setup>
import { ref, computed } from "vue";
import PriceInEuro from "../composables/PriceInEuro";
import Button from "../components/Button.vue";

const props = defineProps({
  title: String,
  description: String,
  price: Number,
  image: String,
  imageHover: String,
  sizes: Array,
  info: String,
  reverseImage: Boolean,
});

const selectedSize = ref(props.sizes[0]);
const { priceInEuro } = PriceInEuro(props.price);

const infoDismissed = ref(true);
const sizesHidden = computed(() => {
  return props.sizes.slice(0, 6);
});
</script>

<template>
  <div class="container grid lg:grid-cols-2 gap-3 py-8">
    <aside>
      <div class="bg-neutral-100 rounded-xl relative group overflow-hidden">
        <img
          :src="image"
          class="w-full"
          :class="reverseImage && '-scale-x-100'"
        />
        <img
          v-if="imageHover"
          :src="imageHover"
          class="absolute top-0 left-0 w-full h-full opacity-0 ease-out duration-300 group-hover:opacity-100"
        />
      </div>
    </aside>
    <div class="p-8">
      <h1 class="text-3xl font-bold">{{ title }}</h1>
      <p class="text-md mt-2">
        {{ description }}
      </p>
      <slot name="below-description"></slot>
      <div class="font-bold text-7xl mt-4">{{ priceInEuro }}</div>
      <div class="grid grid-cols-3 gap-2 mt-4">
        <TransitionGroup name="fadescale">
          <button
            v-for="size in infoDismissed ? sizesHidden : sizes"
            :key="size"
            @click="selectedSize = size"
            class="border rounded-xl py-4 transition ease-in duration-200"
            :class="[selectedSize === size && 'bg-neutral-800 text-white']"
          >
            {{ size }}
          </button>
        </TransitionGroup>
      </div>
      <p
        class="mt-2 transition duration-400 ease-in text-yellow-600"
        :class="
          infoDismissed &&
          'max-h-0 opacity-0 relative -z-10 pointer-events-none'
        "
        v-if="info"
      >
        {{ info }}
      </p>
      <Button
        text="Voir plus"
        class="w-full py-4 mt-3"
        v-if="infoDismissed && info"
        @click="infoDismissed = false"
      />
    </div>
  </div>
</template>
