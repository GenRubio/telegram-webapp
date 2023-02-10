<script setup>
import { useRoute } from "vue-router";
import Spinner from '../components/Spinner.vue';
import HeaderPages from '../utils/HeaderPages.vue';
import Breadcrumb from '../utils/Breadcrumb.vue';
import TrolleyPageNotFound from '../components/TrolleyPage/TrolleyPageNotFound.vue';
import TrolleyPageHeader from '../components/TrolleyPage/TrolleyPageHeader.vue';
import TrolleyPageProductCart from '../components/TrolleyPage/TrolleyPageProductCart.vue';
import TrolleyPageResume from '../components/TrolleyPage/TrolleyPageResume.vue';
import TrolleyPageShippingButton from '../components/TrolleyPage/TrolleyPageShippingButton.vue';
import BlackInfoAlert from '../utils/BlackInfoAlert.vue';
import { useWebMiddleware } from '../../middlewares/webMiddleware';
import { useUserTrolleyStore } from '../../store/trolley-user.store';

const route = useRoute();
const chatId = route.params.chat;
const { validateClient, validationCompleted } = useWebMiddleware();
validateClient(chatId);
const { trolley } = useUserTrolleyStore();
window.scrollTo(0, 0);
</script>

<template>
     <HeaderPages :chatId="chatId" />
     <Spinner v-if="validationCompleted === false" />
     <div v-else>
          <Breadcrumb :chatId="chatId" />
          <TrolleyPageNotFound v-if="trolley.length == 0" :chatId="chatId" />
          <div v-else>
               <BlackInfoAlert text="Envíos gratis a todos los pedidos superiores a 60 euros." />
               <TrolleyPageHeader :trolley="trolley" />
               <div v-for="flavor in trolley" class="trolley-page-product-cart">
                    <TrolleyPageProductCart :flavor="flavor" />
               </div>
               <TrolleyPageResume />
               <TrolleyPageShippingButton :chatId="chatId" />
          </div>
     </div>
</template>

<style scoped>
.trolley-page-product-cart {
     padding: 0px 20px;
     margin-bottom: 10px;
}
</style>
