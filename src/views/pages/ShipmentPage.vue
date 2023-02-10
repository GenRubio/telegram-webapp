<script setup>
import { useRoute } from "vue-router";
import Spinner from '../components/Spinner.vue';
import HeaderPages from '../utils/HeaderPages.vue';
import ShipmentPageBreadcrumb from '../components/ShipmentPage/ShipmentPageBreadcrumb.vue';
import ShipmentPageForm from '../components/ShipmentPage/ShipmentPageForm.vue';
import BlackInfoAlert from '../utils/BlackInfoAlert.vue';
import { useWebMiddleware } from '../../middlewares/webMiddleware';

const route = useRoute();
const chatId = route.params.chat;
const { validateClient, validationCompleted } = useWebMiddleware();
validateClient(chatId);

window.scrollTo(0, 0);
</script>

<template>
    <HeaderPages :chatId="chatId" />
    <Spinner v-if="validationCompleted === false" />
    <div v-else>
        <ShipmentPageBreadcrumb :chatId="chatId" />
        <BlackInfoAlert text="Los envios solo están disponibles para España" />
        <ShipmentPageForm :chatId="chatId" />
    </div>
</template>

<style scoped>

</style>
