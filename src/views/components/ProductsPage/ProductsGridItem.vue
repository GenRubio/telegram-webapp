<script setup>
import ImageCup from '../../utils/ImageCup.vue';
import ProductGridItemDiscount from '../ProductsPage/ProductGridItemDiscount.vue';
defineProps([
    "product",
]);

</script>

<template>
    <div class="products-grid-item_container">
        <div class="products-grid-item_container_image">
            <ImageCup :image="product.image" imagePosition="center" />
            <ProductGridItemDiscount v-if="product.discount" :discount="product.discount"/>
        </div>
        <div class="products-grid-item_container_description">
            <div class="products-grid-item_container_description_model">
                {{ product.name }} <span class="products-grid-item_container_description_brand">({{
                    product.brand
                }})</span>
            </div>
            <div class="products-grid-item_container_description_flavors">
                {{ product.flavors }} sabores
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
.products-grid-item_container{
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