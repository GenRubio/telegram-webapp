import { defineStore } from "pinia";
import { ref } from "vue";

export const useTranslationsStore = defineStore("useTranslations", () => {
    const translations = ref(null);

    const setTranslations = (data) => {
        translations.value = data;
    }
    const trans = (key) => {
        return translations.value[key];
    }

    return {
        translations,
        trans,
        setTranslations
    }
});