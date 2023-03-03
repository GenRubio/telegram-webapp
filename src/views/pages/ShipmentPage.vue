<script setup>
import { onMounted } from 'vue';
import { useRoute } from "vue-router";
import Spinner from '../components/Spinner.vue';
import HeaderPages from '../utils/HeaderPages.vue';
import ShipmentPageBreadcrumb from '../components/ShipmentPage/ShipmentPageBreadcrumb.vue';
import ShipmentPageForm from '../components/ShipmentPage/ShipmentPageForm.vue';
import Footer from '../utils/Footer.vue';
import BlackInfoAlert from '../utils/BlackInfoAlert.vue';
import { useFooterHelper } from '../../helpers/FooterHelper';
import { useWebMiddleware } from '../../middlewares/webMiddleware';

const route = useRoute();
const chatId = route.params.chat;
const { validateClient, validationCompleted } = useWebMiddleware();
validateClient(chatId);
const { hiddeFooter } = useFooterHelper();
onMounted(() => {
    hiddeFooter(); 
})
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
    <Footer v-if="validationCompleted === true" />
</template>

<style scoped>

</style>
