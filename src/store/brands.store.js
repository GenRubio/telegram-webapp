import { defineStore } from "pinia";
import { ref } from "vue";

export const useBrandsStore = defineStore("useBrands", () => {
    const brands = ref(null);

    const setBrands = (data) => {
        brands.value = data;
    }
    return {
        brands,
        setBrands
    }
});