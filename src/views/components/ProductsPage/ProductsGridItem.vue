<script setup>
import ImageCup from '../../utils/ImageCup.vue';
import ProductGridItemDiscount from '../ProductsPage/ProductGridItemDiscount.vue';
import { useTranslationsStore } from '../../../store/translations.store';
defineProps([
    "product",
]);
const { trans } = useTranslationsStore();
</script>

<template>
    <div class="products-grid-item_container">
        <div class="products-grid-item_container_image">
            <ImageCup :image="product.image" imagePosition="center" />
            <ProductGridItemDiscount v-if="product.discount" :discount="product.discount" />
        </div>
        <div class="products-grid-item_container_description">
            <div class="products-grid-item_container_description_model text-ellipsis">
                {{ product.name }} <span class="products-grid-item_container_description_brand">({{
                    product.brand
                }})</span>
            </div>
            <div v-if="product.multiple_flavors" class="products-grid-item_container_description_flavors">
                {{ product.flavors }} {{ trans('075e395e-9cd8-4959-bce6-e6cab354e4af').toLowerCase() }}
            </div>
            <div class="products-grid-item_container_description_price_container">
                <div v-if="product.discount">
                    {{ product.price_with_discount }}€ <span>{{ product.price }}€</span>
                </div>
                <div v-else>
                    {{ product.price }}€
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.text-ellipsis {
    overflow: hidden;
    text-overflow: ellipsis;
    -webkit-line-clamp: 2;
    display: -webkit-box;
    -webkit-box-orient: vertical;
}

.products-grid-item_container {
    cursor: pointer;
}

.products-grid-item_container_description_price_container span {
    text-decoration: line-through;
    font-size: 15px;
    color: red;
}

.products-grid-item_container_description_model {
    font-weight: bold;
}

.products-grid-item_container_description_flavors {
    color: #7d7d7d;
}

.products-grid-item_container_description_brand {
    font-size: 12px;
}

.products-grid-item_container_description {
    padding: 10px;
}

.products-grid-item_container_image {
    background-color: #f6f6f6;
    position: relative;
}
</style>