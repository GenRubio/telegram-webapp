<script setup>
import ProductsGridItem from "./ProductsGridItem.vue";
import { useGoRoute } from "../../../router/goRoute";

const props = defineProps(["chatId", "products"]);

const clickProductHandle = (reference) => {
  const { goProductDetailPage } = useGoRoute();
  goProductDetailPage(props.chatId, reference);
};
</script>

<template>
  <div class="products-grid_container">
    <ProductsGridItem
      v-for="product in products"
      :product="product"
      @click="clickProductHandle(product.reference)"
    />
  </div>
</template>

<style scoped>
.products-grid_container {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 5px;
}
</style>
