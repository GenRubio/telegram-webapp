import { useGoRoute } from '../router/goRoute';
import { useTranslationsStore } from '../store/translations.store';
import { ref } from "vue";

export const useWebMiddleware = () => {
    const validationCompleted = ref(false);

    const validateClient = (chatId) => {
        validationCompleted.value = false;
        const { goWebApp } = useGoRoute();
        const { translations } = useTranslationsStore();

        if (!translations) {
            goWebApp(chatId);
        }
        else {
            validationCompleted.value = true;
        }
    }
    return {
        validateClient,
        validationCompleted
    }
}