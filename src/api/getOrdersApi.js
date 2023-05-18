import axios from 'axios';
import { ref } from "vue";
import { useUtilsStore } from '../store/utils.store';
import { useErrorHelper } from '../helpers/ErrorHelper';

export const getOrdersApi = () => {
    const orders = ref([]);
    const loadingOrders = ref(true);
    const { errorHandler } = useErrorHelper();
    
    const getOrders = async (chatId) => {
        try {
            const { api } = useUtilsStore();
            const { data } = await axios.get(api + chatId + "/orders");
            if (data.error) {
                errorHandler(data);
            }
            else {
                loadingOrders.value = false;
                orders.value = data['orders'];
            }
        }
        catch (error) {
           
        }
    };

    return {
        orders,
        loadingOrders,
        getOrders,
    }
}