<script setup>
import { useRoute } from "vue-router";
import { getConfigApi } from '../api/getConfigApi';
import Spinner from './components/Spinner.vue';
if (import.meta.env.VITE_APP_MODE != 'local') {
    if (window.Telegram.WebApp.platform == 'unknown') {
        window.location = import.meta.env.VITE_REDIRECT_URL
    }
}

Telegram.WebApp.expand();
const route = useRoute();
const chatId = route.params.chat;

const { getConfig } = getConfigApi();
getConfig(chatId);

Telegram.WebApp.expand();
</script>

<template>
    <Spinner />
</template>

<style scoped></style>
