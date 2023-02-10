<script setup>
import { useRoute } from "vue-router";
import axios from 'axios';
import { useTranslationsStore } from '../store/translations.store';
import { useSettingsStore } from '../store/settings.store';
import { useUtilsStore } from '../store/utils.store';
import { useGoRoute } from '../router/goRoute';
import Spinner from './components/Spinner.vue';
Telegram.WebApp.expand();
const route = useRoute();
const chatId = route.params.chat;
const getConfig = async (chatId) => {
    try {
        const { api } = useUtilsStore();
        const { data } = await axios.get(api + chatId + "/config");
        if (data.error) {
            console.log(data.error)
        }
        else {
            const { goProductsPage } = useGoRoute();
            const { setTranslations } = useTranslationsStore();
            const { setSettings } = useSettingsStore();
            setTranslations(data.translations);
            setSettings(data.settings);
            goProductsPage(chatId);
        }
    }
    catch (error) {
        console.log(error)
    }
};
getConfig(chatId);
   Telegram.WebApp.expand();
</script>

<template>
    <Spinner />
</template>

<style scoped>

</style>
