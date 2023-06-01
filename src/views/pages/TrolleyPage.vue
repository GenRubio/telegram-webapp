<script setup>
import { useRoute } from "vue-router";
import Spinner from "../components/Spinner.vue";
import HeaderPages from "../utils/HeaderPages.vue";
import Breadcrumb from "../utils/Breadcrumb.vue";
import TrolleyPageNotFound from "../components/TrolleyPage/TrolleyPageNotFound.vue";
import TrolleyPageHeader from "../components/TrolleyPage/TrolleyPageHeader.vue";
import TrolleyPageProductCart from "../components/TrolleyPage/TrolleyPageProductCart.vue";
import TrolleyPageResume from "../components/TrolleyPage/TrolleyPageResume.vue";
import TrolleyPageShippingButton from "../components/TrolleyPage/TrolleyPageShippingButton.vue";
import Separator from "../components/Separator.vue";
import Footer from "../utils/Footer.vue";
import BlackInfoAlert from "../utils/BlackInfoAlert.vue";
import TrolleyPageLastViewedProducts from "../components/TrolleyPage/TrolleyPageLastViewedProducts.vue";
import { useWebMiddleware } from "../../middlewares/webMiddleware";
import { useUserTrolleyStore } from "../../store/trolley-user.store";
import { useTranslationsStore } from "../../store/translations.store";
import { useLastViewsStore } from "../../store/last-views.store";

const route = useRoute();
const chatId = route.params.chat;
const { validateClient, validationCompleted } = useWebMiddleware();
validateClient(chatId);
const { trolley } = useUserTrolleyStore();
const { trans } = useTranslationsStore();
const { getLastViewedProducts } = useLastViewsStore();
window.scrollTo(0, 0);
</script>

<template>
  <HeaderPages :chatId="chatId" />
  <Spinner v-if="validationCompleted === false" />
  <div v-else class="content">
    <Breadcrumb :chatId="chatId" />
    <TrolleyPageNotFound v-if="trolley.length == 0" :chatId="chatId" />
    <div v-else>
      <BlackInfoAlert :text="trans('bca7fd48-3024-49d0-adfa-6265fb745d52')" />
      <TrolleyPageHeader :trolley="trolley" />
      <div v-for="flavor in trolley" class="trolley-page-product-cart">
        <TrolleyPageProductCart :flavor="flavor" />
      </div>
      <TrolleyPageResume />
      <Separator />
      <TrolleyPageShippingButton :chatId="chatId" />
    </div>
  </div>
  <TrolleyPageLastViewedProducts
    :chatId="chatId"
    :getLastViewedProducts="getLastViewedProducts"
  />
  <Footer v-if="validationCompleted === true" />
</template>

<style scoped>
.content {
  padding-top: 70px;
}
.trolley-page-product-cart {
  padding: 0px 20px;
  margin-bottom: 10px;
}
</style>
