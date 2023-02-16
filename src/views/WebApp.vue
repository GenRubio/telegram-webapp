<script setup>
import { useRoute } from "vue-router";
import { getConfigApi } from '../api/getConfigApi';
import Spinner from './components/Spinner.vue';
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

<style scoped>

</style>
