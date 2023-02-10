import axios from 'axios';
import { ref } from "vue";
import { useUtilsStore } from "../store/utils.store";

export const useGetWebData = () => {
    const useUtils = useUtilsStore();
    const route = "products";
    const reponseData = ref(null);
    const loading = ref(true);
    const errorData = ref(false);

    const getWebData = async (token) => {
        loading.value = true;
        try {
            const res = await axios.get(useUtils.api + route, { params: { token: token } });
            if (res.data.error) {
                errorData.value = true;
            }
            else {
                reponseData.value = res.data;
            }
        }
        catch (error) {
            errorData.value = true;
        }
        finally {
            loading.value = false;
        }
    }

    return {
        getWebData,
        reponseData,
        loading,
        errorData
    }
}