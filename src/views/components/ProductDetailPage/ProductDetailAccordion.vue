<script setup>
import ProductSpecifications from '../ProductDetailPage/Accordion/ProductSpecifications.vue';
import ProductValorations from '../ProductDetailPage/Accordion/ProductValorations.vue';
const props = defineProps([
    "data",
]);
</script>

<template>
    <div class="product-detail-accordion_container">
        <ProductSpecifications :data="data" />
        <ProductValorations :data="data" />
    </div>
</template>

<style scoped>
.product-detail-accordion_container {
    padding-top: 10px;
    padding-left: 20px;
    padding-right: 20px;
}
</style>
