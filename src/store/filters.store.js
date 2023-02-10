import { defineStore } from "pinia";
import { ref } from "vue";

export const useFiltersStore = defineStore("useFilters", () => {
    const filter = ref({
        order_by: "price_desc"
    });

    return {
        filter,
    }
});