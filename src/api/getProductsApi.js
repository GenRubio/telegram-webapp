import axios from 'axios';
import { ref } from "vue";
import { useUtilsStore } from '../store/utils.store';
import { useErrorHelper } from '../helpers/ErrorHelper';

export const getProductsApi = () => {
    const products = ref([]);
    const loadingProducts = ref(true);
    const { errorHandler } = useErrorHelper();

    const getProducts = async (chatId, filter) => {
        try {
            const { api } = useUtilsStore();
            const { data } = await axios.get(api + chatId + "/products", {
                params: filter
            });
            if (data.error) {
                errorHandler(data);
            }
            else {
                loadingProducts.value = false;
                products.value = data['products'];
            }
        }
        catch (error) {
         
        }
    };

    return {
        products,
        loadingProducts,
        getProducts,
    }
}