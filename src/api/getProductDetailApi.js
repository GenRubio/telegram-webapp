import axios from 'axios';
import { ref } from "vue";
import { useUtilsStore } from '../store/utils.store';
import { useErrorHelper } from '../helpers/ErrorHelper';

export const getProductDetailApi = () => {
    const product = ref([]);
    const loadingProduct = ref(true);
    const { errorHandler } = useErrorHelper();

    const getProduct = async (chatId, productReference) => {
        try {
            const { api } = useUtilsStore();
            const { data } = await axios.get(api + chatId + "/product/" + productReference);
            if (data.error) {
                errorHandler(data);
            }
            else {
                product.value = data;
                loadingProduct.value = false;
            }
        }
        catch (error) {
            errorHandler(error);
        }
    };

    return {
        product,
        loadingProduct,
        getProduct,
    }
}