<script setup>
import Article from "../components/Article.vue";
import Hijab from "../assets/images/hijab.png";
</script>

<template>
  <Article
    title="Hijab de l'Injustice"
    description="Le t-shirt Nike Sportswear Club est fabriqué en coton selon une coupe classique pour t'offrir un confort absolu dès le premier enfilage. Le logo Futura brodé sur la poitrine offre un look Nike signature."
    :image="Hijab"
    :sizes="['XS/S', 'M/L']"
    :price="54.99"
  />
</template>
