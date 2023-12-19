<script setup>
import { HeartIcon, ShoppingBagIcon } from "@heroicons/vue/24/outline";

const links = [
  { href: "/", text: "Accueil" },
  { href: "/hommes", text: "Hommes" },
  { href: "/femmes", text: "Femmes" },
  { href: "/enfants", text: "Enfants" },
];
</script>

<template>
  <nav class="flex py-1 text-black pb-8 lg:pb-1 border-b">
    <div class="container">
      <div class="flex justify-between items-center flex-col lg:flex-row">
        <router-link to="/" class="text-black font-bold">
          <svg
            aria-hidden="true"
            class="w-24 h-24 rotate-180 scale-x-125"
            focusable="false"
            viewBox="0 0 24 24"
            role="img"
            width="24px"
            height="24px"
            fill="none"
          >
            <path
              fill="currentColor"
              fill-rule="evenodd"
              d="M21 8.719L7.836 14.303C6.74 14.768 5.818 15 5.075 15c-.836 0-1.445-.295-1.819-.884-.485-.76-.273-1.982.559-3.272.494-.754 1.122-1.446 1.734-2.108-.144.234-1.415 2.349-.025 3.345.275.2.666.298 1.147.298.386 0 .829-.063 1.316-.19L21 8.719z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </router-link>
        <ul class="flex items-center gap-8">
          <li v-for="link in links" :key="link.href">
            <router-link class="link" :to="link.href">
              {{ link.text }}
            </router-link>
          </li>
        </ul>
        <div class="items-center gap-4 hidden lg:flex">
          <HeartIcon class="w-6 h-6" />
          <ShoppingBagIcon class="w-6 h-6" />
        </div>
      </div>
    </div>
  </nav>
</template>

<style scoped>
.link {
  --bar_width: 0;
  --bottom: -8px;
  position: relative;
  font-weight: 600;
}
.link::after {
  content: "";
  display: block;
  position: absolute;
  bottom: var(--bottom);
  left: 50%;
  width: var(--bar_width);
  height: 2px;
  background-color: #000;
  border-radius: 24px;
  transform: translateX(-50%);
  transition: ease-in 0.1s;
}
.link:hover,
.router-link-active {
  --bar_width: 8px;
  --bottom: -4px;
}
</style>
