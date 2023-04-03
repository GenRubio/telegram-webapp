<script setup>
import Spinner from '../components/Spinner.vue';
import { useRoute } from "vue-router";
import HeaderPages from '../utils/HeaderPages.vue';
import Footer from '../utils/Footer.vue';
import { useWebMiddleware } from '../../middlewares/webMiddleware';
import { getOrdersApi } from '../../api/getOrdersApi';
import OrdersGrid from '../components/OrdersPage/OrdersGrid.vue';
import { useTranslationsStore } from '../../store/translations.store';


const route = useRoute();
const chatId = route.params.chat;
const { validateClient } = useWebMiddleware();
validateClient(chatId);
const { orders, loadingOrders, getOrders } = getOrdersApi();
getOrders(chatId);
window.scrollTo(0, 0);
const { trans } = useTranslationsStore();
</script>

<template>
    <HeaderPages :chatId="chatId" />
    <Spinner v-if="loadingOrders" />
    <div v-else class="content">
        <div v-if="orders.length > 0">
            <div class="header_title">
                {{ orders.length }} {{ trans('d6e0081d-a4b9-4946-b873-1fbe05f8b282') }}
            </div>
            <OrdersGrid :orders="orders" />
        </div>
    </div>
    <Footer v-if="!loadingOrders" />
</template>

<style scoped>
.header_title {
    color: #848383;
    font-size: 20px;
    padding-bottom: 15px;
}
.content{
    padding: 20px 20px;
}
</style>
