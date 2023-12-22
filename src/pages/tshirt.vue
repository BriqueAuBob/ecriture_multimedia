<script setup>
import Article from "../components/Article.vue";
import Tshirt from "../assets/images/t-shirt.png";
</script>

<template>
  <Article
    title="T-shirt"
    description="Le t-shirt Ekin Sportswear Club est fabriqué en coton selon une coupe classique pour t'offrir un confort absolu dès le premier enfilage. Le logo Futura brodé sur la poitrine offre un look Ekin signature."
    :image="Tshirt"
    :sizes="['XS', 'S', 'M', 'L', 'XL', 'XXL']"
    :price="24.99"
  >
    <template #below-description>
      <h3 class="font-semibold text-lg mt-3">Composition</h3>
      <RouterLink to="hommes" class="underline text-sm">100% Coton</RouterLink>
    </template>
  </Article>
</template>
