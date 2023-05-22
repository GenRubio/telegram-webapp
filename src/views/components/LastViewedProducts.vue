<script setup>
import ProductsGridItem from "./ProductsPage/ProductsGridItem.vue";
import { useGoRoute } from "../../router/goRoute";

const props = defineProps([
  "chatId",
  "product",
  "getLastViewedProducts",
  "loadNewProduct",
]);

const clickProductHandle = (reference) => {
  const { goProductDetailPage } = useGoRoute();
  goProductDetailPage(props.chatId, reference);
  props.loadNewProduct(reference);
};
</script>

<template>
  <div
    v-if="getLastViewedProducts(product).length > 0"
    class="last-viewed-products_container"
  >
    <div>Ultimos vistos</div>
    <div class="last-viewed-products_grid-container">
      <ProductsGridItem
        v-for="(product, index) in getLastViewedProducts(product)"
        :product="product"
        :key="index"
        @click="clickProductHandle(product.reference)"
      />
    </div>
  </div>
</template>

<style scoped>
.last-viewed-products_grid-container {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 5px;
}
.last-viewed-products_container {
  padding-left: 20px;
  padding-right: 20px;
}
</style>
