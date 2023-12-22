<script setup>
import Button from "../components/Button.vue";
import ArticleCard from "../components/ArticleCard.vue";
import AirMax from "../assets/images/97.png";
import TShirt from "../assets/images/t-shirt.png";
import Hijab from "../assets/images/hijab.png";
</script>

<template>
  <header>
    <figure class="relative">
      <img
        src="../assets/images/background.png"
        alt="image"
        class="w-full h-96 object-cover"
      />
      <figcaption
        class="absolute bottom-0 left-0 z-10 w-full h-full bg-gradient-to-t from-yellow-700/75 to-yellow-950/15 bg-opacity-50"
      >
        <div
          class="container pb-12 flex flex-col items-start justify-end h-full text-white"
        >
          <h1 class="mb-1 text-3xl font-bold">Offre le meilleur</h1>
          <p class="mb-4 text-lg">
            Optez pour le cadeau idéal : celui qui encourage le mouvement et met
            en avant les visages derrière la marque.
          </p>
          <!-- <div class="flex gap-2 items-center">
            <Button text="Acheter" color="light" />
            <Button text="Voir" color="light" />
          </div> -->
        </div>
      </figcaption>
    </figure>
  </header>
  <section class="container py-16">
    <h2 class="mb-4 font-semibold text-xl">Articles</h2>
    <div class="grid md:grid-cols-3 gap-4">
      <RouterLink to="/tshirt">
        <ArticleCard
          :thumbnail="TShirt"
          name="Ekin Sportswear Club"
          type="T-shirt pour Homme"
          :price="24.99"
        />
      </RouterLink>
      <RouterLink to="/chaussures">
        <ArticleCard name="Air Max 97" :price="189.99" :thumbnail="AirMax" />
      </RouterLink>
      <RouterLink to="/hijab">
        <ArticleCard
          :thumbnail="Hijab"
          name="Hijab de l'Injustice"
          type="Hijab de bain pour Femme"
          :price="54.99"
          noImagePadding
        />
      </RouterLink>
    </div>
  </section>
</template>
