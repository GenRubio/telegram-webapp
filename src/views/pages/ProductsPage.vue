<script setup>
import Spinner from '../components/Spinner.vue';
import { useRoute } from "vue-router";
import ProductsGrid from '../components/ProductsPage/ProductsGrid.vue';
import ProductsNotFound from '../components/ProductsPage/ProductsNotFound.vue';
import HeaderPages from '../../views/utils/HeaderPages.vue';
import ProductsFilters from '../../views/components/ProductsPage/ProductsFilters.vue';
import Footer from '../utils/Footer.vue';
import { useFiltersStore } from '../../store/filters.store';
import { getProductsApi } from '../../api/getProductsApi';
import { useWebMiddleware } from '../../middlewares/webMiddleware';

const route = useRoute();
const chatId = route.params.chat;
const { validateClient } = useWebMiddleware();
validateClient(chatId);

const { filter } = useFiltersStore();
const { products, loadingProducts, getProducts} = getProductsApi();
getProducts(chatId, filter);

window.scrollTo(0, 0);
</script>

<template>
    <HeaderPages :chatId="chatId" />
    <Spinner v-if="loadingProducts" />
    <div v-else class="content">
        <ProductsFilters :products="products" :filter="filter" :chatId="chatId" :getProducts="getProducts" />
        <div v-if="products.length != 0">
            <ProductsGrid :chatId="chatId" :products="products" />
        </div>
        <div v-else>
            <ProductsNotFound />
        </div>
    </div>
    <Footer v-if="!loadingProducts" />
</template>

<style scoped>
.content{
    padding-top: 70px;
    margin-bottom: 30px;
}
</style>
