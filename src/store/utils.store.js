import { defineStore } from "pinia";
import { ref } from "vue";

export const useUtilsStore = defineStore("useUtils", () => {
    //const api = ref("https://laravel.gma.cat/api/v1/");
    const api = ref("https://laravel.gma.cat/api/v1/");

    return {
        api
    }
});