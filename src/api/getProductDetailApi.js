import axios from 'axios';
import { ref } from "vue";
import { useUtilsStore } from '../store/utils.store';

export const getProductDetailApi = () => {
    const product = ref([]);
    const loadingProduct = ref(true);

    const getProduct = async (chatId, productReference) => {
        try {
            const { api } = useUtilsStore();
            const { data } = await axios.get(api + chatId + "/product/" + productReference);
            if (data.error) {
                console.log(data.error)
            }
            else {
                product.value = data;
                loadingProduct.value = false;
            }
        }
        catch (error) {
            console.log(error)
        }
    };

    return {
        product,
        loadingProduct,
        getProduct,
    }
}