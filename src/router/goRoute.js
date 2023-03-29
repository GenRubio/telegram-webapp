
import router from "@/router";

export const useGoRoute = () => {
    const goWebApp = (chatId) => {
        router.push('/webapp/' + chatId);
    }
    const goProductsPage = (chatId) => {
        router.push('/webapp/' + chatId + '/products');
    }
    const goProductDetailPage = (chatId, reference) => {
        router.push('/webapp/' + chatId + '/products/' + reference);
    }
    const goTrolleyPage = (chatId) => {
        router.push('/webapp/' + chatId + '/trolley');
    }
    const goShipmentPage = (chatId) => {
        router.push('/webapp/' + chatId + '/shippment');
    }
    const goOrdersPage = (chatId) => {
        router.push('/webapp/' + chatId + '/orders');
    }

    return {
        goWebApp,
        goProductsPage,
        goProductDetailPage,
        goTrolleyPage,
        goShipmentPage,
        goOrdersPage,
    }
}