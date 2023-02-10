<script setup>
import ProductDetailStars from '../ProductDetailPage/ProductDetailStars.vue';
const props = defineProps([
    "product",
]);
</script>

<template>
    <div class="product-detail-header_container">
        <div>
            <div class="product-detail-header_container_title">
                {{ product.product.name }}
                <span class="product-detail-header_container_title_brand">
                    ({{ product.product.brand }})
                </span>
            </div>
            <div v-if="product.product.discount">
                <div class="product-detail-header_container_price">
                    {{ product.product.price_with_discount }}€ <span>{{ product.product.price }}€</span>
                </div>
            </div>
            <div v-else class="product-detail-header_container_price">
                {{ product.product.price }}€
            </div>
        </div>
        <div class="d-flex">
            <div>
                <ProductDetailStars />
            </div>
            <div class="product-detail-header_total_validations">
                (0)
            </div>
        </div>
    </div>
</template>

<style scoped>
.product-detail-header_total_validations{
    margin-left: 5px;
    font-size: 14px;
    display: flex;
    align-content: flex-end;
    margin-top: 4px;
}
.product-detail-header_container_price span {
    font-size: 18px;
    text-decoration: line-through;
    color: red;
}

.product-detail-header_container_price {
    font-weight: bold;
    font-size: 20px;
}

.product-detail-header_container_title_brand {
    font-size: 20px;
}

.product-detail-header_container_title {
    font-size: 30px;
    font-weight: bold;
}

.product-detail-header_container {
    padding: 5px 20px;
    display: flex;
    justify-content: space-between;
}
</style>
