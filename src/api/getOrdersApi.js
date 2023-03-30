import axios from 'axios';
import { ref } from "vue";
import { useUtilsStore } from '../store/utils.store';

export const getOrdersApi = () => {
    const orders = ref([]);
    const loadingOrders = ref(true);

    const getOrders = async (chatId) => {
        try {
            const { api } = useUtilsStore();
            const { data } = await axios.get(api + chatId + "/orders");
            if (data.error) {
                console.log(data)
            }
            else {
                loadingOrders.value = false;
                orders.value = data['orders'];
            }
        }
        catch (error) {
            console.log(error)
        }
    };

    return {
        orders,
        loadingOrders,
        getOrders,
    }
}