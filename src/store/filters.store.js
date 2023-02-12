import { defineStore } from "pinia";
import { ref } from "vue";

export const useFiltersStore = defineStore("useFilters", () => {
    const filter = ref({
        order_by: null,
        nicotine: null,
        brands: []
    });

    return {
        filter,
    }
});