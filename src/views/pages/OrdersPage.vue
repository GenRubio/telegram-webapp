<script setup>
import Spinner from "../components/Spinner.vue";
import { useRoute } from "vue-router";
import HeaderPages from "../utils/HeaderPages.vue";
import Footer from "../utils/Footer.vue";
import { useWebMiddleware } from "../../middlewares/webMiddleware";
import { getOrdersApi } from "../../api/getOrdersApi";
import OrdersGrid from "../components/OrdersPage/OrdersGrid.vue";
import { useTranslationsStore } from "../../store/translations.store";
import OrdersNotFound from "../components/OrdersPage/OrdersNotFound.vue";
import Breadcrumb from "../utils/Breadcrumb.vue";
import Separator from "../components/Separator.vue";

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
    <Breadcrumb :chatId="chatId" />
    <div v-if="orders.length > 0" class="generic-container">
      <div class="header_title">
        {{ orders.length }} {{ trans("d6e0081d-a4b9-4946-b873-1fbe05f8b282") }}
      </div>
      <OrdersGrid :orders="orders" />
    </div>
    <div v-else>
      <OrdersNotFound :trans="trans" />
    </div>
    <Separator />
  </div>
  <Footer v-if="!loadingOrders" />
</template>

<style scoped>
.generic-container {
  padding: 0px 20px;
}
.header_title {
  color: #848383;
  font-size: 20px;
  padding-bottom: 15px;
}

.content {
  padding-top: 70px;
  padding-bottom: 20px;
}
</style>
