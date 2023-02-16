import axios from 'axios';
import { useUtilsStore } from '../store/utils.store';
import { useTranslationsStore } from '../store/translations.store';
import { useSettingsStore } from '../store/settings.store';
import { useBrandsStore } from '../store/brands.store';
import { useGoRoute } from '../router/goRoute';

export const getConfigApi = () => {
    const getConfig = async (chatId) => {
        try {
            const { api } = useUtilsStore();
            const { data } = await axios.get(api + chatId + "/config");
            if (data.error) {
                console.log(data.error)
            }
            else {
                console.log(data)
                const { goProductsPage } = useGoRoute();
                const { setTranslations } = useTranslationsStore();
                const { setSettings } = useSettingsStore();
                const { setBrands } = useBrandsStore();
                setTranslations(data.translations);
                setSettings(data.settings);
                setBrands(data.brands);
                goProductsPage(chatId);
            }
        }
        catch (error) {
            console.log(error)
        }
    };

    return {
        getConfig,
    }
}