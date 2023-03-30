<script setup>
import Spinner from '../components/Spinner.vue';
import { useRoute } from "vue-router";
import HeaderPages from '../utils/HeaderPages.vue';
import Footer from '../utils/Footer.vue';
import { useWebMiddleware } from '../../middlewares/webMiddleware';
import { getOrdersApi } from '../../api/getOrdersApi';

const route = useRoute();
const chatId = route.params.chat;
const { validateClient } = useWebMiddleware();
validateClient(chatId);
const { orders, loadingOrders, getOrders} = getOrdersApi();
getOrders(chatId);

window.scrollTo(0, 0);
</script>

<template>
    <HeaderPages :chatId="chatId" />
    <Spinner v-if="loadingOrders"/>
    <div class="content">
       
    </div>
    <Footer v-if="!loadingOrders"/>
</template>

<style scoped>
</style>
