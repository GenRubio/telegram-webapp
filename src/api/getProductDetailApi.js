import axios from "axios";
import { ref } from "vue";
import { useUtilsStore } from "../store/utils.store";
import { useErrorHelper } from "../helpers/ErrorHelper";
import { useLastViewsStore } from "../store/last-views.store";

export const getProductDetailApi = () => {
  const product = ref([]);
  const loadingProduct = ref(true);
  const { errorHandler } = useErrorHelper();
  const { addLastViewProduct } = useLastViewsStore();

  const getProduct = async (chatId, productReference) => {
    try {
      const { api } = useUtilsStore();
      const { data } = await axios.get(
        api + chatId + "/product/" + productReference
      );
      if (data.error) {
        errorHandler(data);
      } else {
        product.value = data;
        loadingProduct.value = false;
        addLastViewProduct(data.product);
        return data;
      }
    } catch (error) {}
  };

  return {
    product,
    loadingProduct,
    getProduct,
  };
};
