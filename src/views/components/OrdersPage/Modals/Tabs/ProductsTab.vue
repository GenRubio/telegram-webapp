<script setup>
import ImageCup from '../../../../utils/ImageCup.vue';
import { useRoute } from "vue-router";
import { useGoRoute } from '../../../../../router/goRoute';
const props = defineProps([
    "order",
    "trans",
    "closeModal"
]);
const route = useRoute();
const gotToProductPage = (product) => {
    props.closeModal();
    const { goProductDetailPage } = useGoRoute();
    goProductDetailPage(route.params.chat, product.reference);
};
</script>

<template>
    <div class="tab-pane fade" :id="'nav-products_' + order.reference" role="tabpanel"
        :aria-labelledby="'nav-products-tab_' + order.reference">
        <div class="title-container">
            <label>{{ trans('6b1b1a63-4f5f-4729-b5d2-ee15d4214d35') }}: {{ order.count_products }}</label>
        </div>
        <div class="order-products-container">
            <div class="order-product-item shadow-sm" v-for="product in order.order_products">
                <div class="order-product-item_image">
                    <ImageCup :image="product.product_model_flavor.image" imagePosition="center" />
                </div>
                <div class="order-product-item_description">
                    <div class="order-product-item_description_flavor">
                        {{ trans('562c38bd-17d5-47c4-9578-02e8df072129') }}: <small>
                            {{ product.product_model_flavor.name }}
                        </small>
                    </div>
                    <div class="order-product-item_description_model">
                        {{ trans('055c91c5-db6b-4ef0-bb53-a15a6758f12f') }}: <small class="model-button"
                            @click="gotToProductPage(product.product_model)">
                            {{ product.product_model.name }}
                        </small>
                    </div>
                    <div class="order-product-item_description_amount">
                        {{ trans('f133d2d6-f030-494d-a991-09a1fc63bc93') }}: <small>{{ product.amount }}</small>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.model-button {
    text-decoration: underline;
    cursor: pointer;
}

.order-product-item_description {
    padding: 5px;
}

.order-product-item_image {
    width: 25%;
    padding: 5px;
    background-color: #f6f6f6;
    display: flex;
    align-items: center;
}

.order-products-container {
    margin-top: 10px;
}

.order-product-item {
    border: 1px solid #ccc;
    border-radius: 5px;
    display: flex;
    margin-bottom: 10px;
}
</style>
