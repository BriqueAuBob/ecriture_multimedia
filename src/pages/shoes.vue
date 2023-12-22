<script setup>
import Article from "../components/Article.vue";
import AirMax from "../assets/images/97.png";
import ShoeHover from "../assets/images/shoes_hover.png";
</script>

<template>
  <Article
    title="Air Max 97"
    description=""
    :image="AirMax"
    :imageHover="ShoeHover"
    :sizes="[36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46]"
    info="Pour réaliser toutes ces pointures, un artisan a travaillé 80h par semaine pour un salaire misérable de 0.15€ de l'heure. Soit 48€ par mois !"
    :price="189.99"
    reverseImage
  />
</template>
