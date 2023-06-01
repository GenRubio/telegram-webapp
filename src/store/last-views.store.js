import { defineStore } from "pinia";
import { ref } from "vue";

export const useLastViewsStore = defineStore("useLastViews", () => {
  const lastViewProducts = ref([]);

  const addLastViewProduct = (product) => {
    lastViewProducts.value.forEach(function (lastViewProduct, index) {
      if (lastViewProduct.reference == product.reference) {
        lastViewProducts.value.splice(index, 1);
      }
    });
    lastViewProducts.value.push(product);
  };

  const getLastViewedProducts = (actualProduct = null) => {
    let lastTwoViewedProducts = [];
    lastViewProducts.value.forEach(function (lastViewProduct, index) {
      if (actualProduct == null) {
        lastTwoViewedProducts.push(lastViewProduct);
      } else {
        if (lastViewProduct.reference != actualProduct.reference) {
          lastTwoViewedProducts.push(lastViewProduct);
        }
      }
    });
    return lastTwoViewedProducts.slice(-2);
  };

  return {
    addLastViewProduct,
    getLastViewedProducts,
  };
});
