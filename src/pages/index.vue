<script setup>
import Button from "../components/Button.vue";
import ArticleCard from "../components/ArticleCard.vue";
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
      <ArticleCard
        thumbnail="https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_1.5/h_515,c_limit/jxfexgbkvpkmynfrgwaj/chaussettes-de-training-mi-mollet-everyday-cushioned-FJSFHQ.png"
        name="Chaussettes de training mi-mollet (3 paires)"
        :price="15"
      />
      <RouterLink to="/chaussures">
        <ArticleCard name="Air Max 97" :price="189.99" />
      </RouterLink>
      <ArticleCard
        thumbnail="https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_1.5/h_515,c_limit/d640a173-1355-4bf8-ade6-bc00df4a9144/survetement-sportswear-club-fleece-pour-ado-wndvgj.png"
        name="Pantalon Jordan Flight Fleece pour Femme"
        :price="80"
      />
    </div>
  </section>
</template>
