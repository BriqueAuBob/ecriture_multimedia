import { computed } from "vue";

export default function PriceInEuro(price) {
  const priceInEuro = computed(() =>
    price > 0 ? `${price.toFixed(2)}€` : "Gratuit"
  );
  return { priceInEuro };
}
