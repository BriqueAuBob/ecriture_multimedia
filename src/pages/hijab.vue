<script setup>
import Article from "../components/Article.vue";
import Hijab from "../assets/images/hijab.png";
</script>

<template>
  <Article
    title="Hijab de l'Injustice"
    description="Découvre le 'Hijab de l'Injustice', une exclusivité de notre collection dédiée aux travailleurs invisibles, t’offrant une grande liberté de mouvement dans l'eau. Cependant, cette liberté est acquise au détriment de la liberté des femmes ouïghoures, séquestrées dans des camps de concentration et parfois stérilisées. 
Afin de satisfaire les besoins de nos consommateurs, cette pièce est conçue par et pour les femmes musulmanes. Chez nous, l'ignorance est une tendance à la mode que nous remettons en question !
"
    :image="Hijab"
    :sizes="['XS/S', 'M/L']"
    :price="54.99"
  />
</template>
