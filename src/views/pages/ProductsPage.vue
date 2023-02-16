<script setup>
import Spinner from '../components/Spinner.vue';
import { useRoute } from "vue-router";
import axios from 'axios';
import { ref } from "vue";
import ProductsGrid from '../components/ProductsPage/ProductsGrid.vue';
import HeaderPages from '../../views/utils/HeaderPages.vue';
import ProductsFilters from '../../views/components/ProductsPage/ProductsFilters.vue';
import Footer from '../utils/Footer.vue';
import { useFiltersStore } from '../../store/filters.store';
import { useUtilsStore } from '../../store/utils.store';
import { useWebMiddleware } from '../../middlewares/webMiddleware';

const route = useRoute();
const chatId = route.params.chat;
const products = ref([]);
const loadingProducts = ref(true);
const { validateClient } = useWebMiddleware();
validateClient(chatId);
const { filter } = useFiltersStore();

const getProducts = async (chatId) => {
    try {
        const { api } = useUtilsStore();
        const { data } = await axios.get(api + chatId + "/products", {
            params: filter
        });
        if (data.error) {
            console.log(data.error)
        }
        else {
            loadingProducts.value = false;
            products.value = data['products'];
        }
    }
    catch (error) {
        console.log(error)
    }
};
getProducts(chatId);
window.scrollTo(0, 0);
</script>

<template>
    <HeaderPages :chatId="chatId" />
    <Spinner v-if="loadingProducts" />
    <div v-else>
        <ProductsFilters :products="products" :filter="filter" />
        <div v-if="products.length != 0">
            <ProductsGrid :chatId="chatId" :products="products" />
        </div>
    </div>
    <Footer />
</template>

<style scoped>

</style>
