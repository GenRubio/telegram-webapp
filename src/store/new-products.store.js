import { defineStore } from "pinia";
import { ref } from "vue";

export const useNewProductsStore = defineStore("useNewProducts", () => {
  const newProducts = ref([]);

  const setNewProducts = (products) => {
    newProducts.value = products;
  };

  const getNewProducts = () => {
    return newProducts.value;
  };

  return {
    setNewProducts,
    getNewProducts,
  };
});
