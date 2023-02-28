import { defineStore } from "pinia";
import { ref } from "vue";

export const useUtilsStore = defineStore("useUtils", () => {
    const api = ref(import.meta.env.VITE_API_URL);

    return {
        api
    }
});