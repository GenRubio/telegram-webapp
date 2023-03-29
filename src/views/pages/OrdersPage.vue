<script setup>
import Spinner from '../components/Spinner.vue';
import { useRoute } from "vue-router";
import HeaderPages from '../utils/HeaderPages.vue';
import Footer from '../utils/Footer.vue';
import { useWebMiddleware } from '../../middlewares/webMiddleware';

const route = useRoute();
const chatId = route.params.chat;
const { validateClient } = useWebMiddleware();
validateClient(chatId);

window.scrollTo(0, 0);
</script>

<template>
    <HeaderPages :chatId="chatId" />
    <Spinner />
    <div class="content">
       
    </div>
    <Footer />
</template>

<style scoped>
.content{
    margin-bottom: 30px;
}
</style>
