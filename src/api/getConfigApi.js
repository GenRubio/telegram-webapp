import axios from 'axios';
import { useUtilsStore } from '../store/utils.store';
import { useTranslationsStore } from '../store/translations.store';
import { useSettingsStore } from '../store/settings.store';
import { useBrandsStore } from '../store/brands.store';
import { useSocialNetworksStore } from '../store/social-networks.store';
import { useParametricSettingsStore } from '../store/parametric-settings.store';
import { useNewProductsStore } from '../store/new-products.store';
import { useErrorHelper } from '../helpers/ErrorHelper';
import { useGoRoute } from '../router/goRoute';

export const getConfigApi = () => {
    const { errorHandler } = useErrorHelper();
    
    const getConfig = async (chatId) => {
        try {
            const { api } = useUtilsStore();
            const { data } = await axios.get(api + chatId + "/config");
            if (data.error) {
                errorHandler(data);
            }
            else {
                const { goProductsPage } = useGoRoute();
                const { setTranslations } = useTranslationsStore();
                const { setSettings } = useSettingsStore();
                const { setBrands } = useBrandsStore();
                const { setSocialNetworks } = useSocialNetworksStore();
                const { setParametricSettings } = useParametricSettingsStore();
                const { setNewProducts } = useNewProductsStore();
                setTranslations(data.translations);
                setSettings(data.settings);
                setBrands(data.brands);
                setSocialNetworks(data.parametric_tables.social_networks);
                setParametricSettings(data.parametric_tables.settings.parametric_table_values);
                setNewProducts(data.new_products);
                goProductsPage(chatId);
            }
        }
        catch (error) {
           
        }
    };

    return {
        getConfig,
    }
}