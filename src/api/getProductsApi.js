import axios from 'axios';
import { ref } from "vue";
import { useUtilsStore } from '../store/utils.store';

export const getProductsApi = () => {
    const products = ref([]);
    const loadingProducts = ref(true);

    const getProducts = async (chatId, filter) => {
        try {
            const { api } = useUtilsStore();
            const { data } = await axios.get(api + chatId + "/products", {
                params: filter
            });
            if (data.error) {
                console.log(data.error)
            }
            else {
                loadingProducts.value = false;
                products.value = data['products'];
            }
        }
        catch (error) {
            console.log(error)
        }
    };

    return {
        products,
        loadingProducts,
        getProducts,
    }
}