<script setup>
import PriceInEuro from "../composables/PriceInEuro";

const props = defineProps({
  thumbnail: {
    type: String,
    default:
      "https://static.nike.com/a/images/t_default/76b430e5-ed15-4864-99c8-3898162b966a/chaussure-air-max-97-pour-915npJ.png",
  },
  name: {
    type: String,
    default: "Nom",
  },
  type: {
    type: String,
    default: "Chaussures pour homme",
  },
  price: {
    type: Number,
    default: 0,
  },
});

const { priceInEuro } = PriceInEuro(props.price);
</script>

<template>
  <article class="group cursor-pointer">
    <div
      class="bg-neutral-100 p-4 rounded-xl ease-in duration-200 group-hover:bg-neutral-200 group-hover:-translate-y-1"
    >
      <img
        :src="thumbnail"
        alt="image"
        class="w-full aspect-square object-cover"
      />
    </div>
    <h3 class="text-lg font-semibold mt-2 mb-1">{{ name }}</h3>
    <div class="text-sm">{{ type }}</div>
    <span class="font-semibold text-sm">{{ priceInEuro }}</span>
  </article>
</template>
