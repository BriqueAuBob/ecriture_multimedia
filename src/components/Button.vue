<script setup>
import { computed } from "vue";

const props = defineProps({
  color: {
    type: String,
    default: "dark",
  },
  text: {
    type: String,
    default: "Button",
  },
});

const color = computed(() => {
  switch (props.color) {
    case "dark":
      return "bg-neutral-950 text-white hover:bg-neutral-700";
    case "light":
      return "bg-white text-neutral-950 hover:bg-neutral-200";
  }
});
</script>

<template>
  <button
    class="font-medium py-2 px-5 rounded-full ease-out duration-300"
    :class="color"
  >
    {{ text }}
  </button>
</template>
