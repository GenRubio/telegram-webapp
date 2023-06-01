<script setup>
import { ref } from "vue";
import ProductsGridItem from "../ProductsPage/ProductsGridItem.vue";
import { useGoRoute } from "../../../router/goRoute";
import { useTranslationsStore } from "../../../store/translations.store";
import { useNewProductsStore } from "../../../store/new-products.store";

const props = defineProps([
  "chatId",
  "getLastViewedProducts",
  "newProducts",
]);

const { trans } = useTranslationsStore();
const clickProductHandle = (reference) => {
  const { goProductDetailPage } = useGoRoute();
  goProductDetailPage(props.chatId, reference);
};
const { getNewProducts } = useNewProductsStore();
const newProducts = ref(getNewProducts());
</script>

<template>
  <div
    v-if="getLastViewedProducts(null).length > 0"
    class="last-viewed-products_container"
  >
    <div class="last-viewed-products_title">
      {{ trans("25fb26d8-7a9d-4250-b6c6-3597cfea0715") }}
    </div>
    <div class="last-viewed-products_grid-container">
      <ProductsGridItem
        v-for="(product, index) in getLastViewedProducts(null)"
        :product="product"
        :key="index"
        @click="clickProductHandle(product.reference)"
      />
    </div>
  </div>
  <div v-else class="last-viewed-products_container">
    <div class="last-viewed-products_title">
      {{ trans("d34615f9-ce61-472a-b2eb-bd9d15f8ddbf") }}
    </div>
    <div class="last-viewed-products_grid-container">
      <ProductsGridItem
        v-for="(product, index) in newProducts.products.slice(0, 2)"
        :product="product"
        :key="index"
        @click="clickProductHandle(product.reference)"
      />
    </div>
  </div>
</template>

<style scoped>
.last-viewed-products_title {
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 10px;
}
.last-viewed-products_grid-container {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 5px;
}
.last-viewed-products_container {
  padding-left: 20px;
  padding-right: 20px;
  margin-top: 20px;
}
</style>
