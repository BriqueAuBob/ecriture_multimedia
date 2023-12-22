<script setup>
import PriceInEuro from "../composables/PriceInEuro";

const props = defineProps({
  thumbnail: {
    type: String,
    required: true,
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
  noImagePadding: {
    type: Boolean,
    default: false,
  },
});

const { priceInEuro } = PriceInEuro(props.price);
</script>

<template>
  <article class="group cursor-pointer">
    <div
      class="bg-neutral-100 rounded-xl ease-in duration-200 group-hover:bg-neutral-200 group-hover:-translate-y-1"
      :class="!noImagePadding ? 'p-4' : 'overflow-hidden'"
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
