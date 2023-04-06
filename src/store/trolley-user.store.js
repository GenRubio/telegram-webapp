import { defineStore } from "pinia";
import { ref } from "vue";
import { useSettingsStore } from '../store/settings.store';

export const useUserTrolleyStore = defineStore("useUserTrolley", () => {
    const { config } = useSettingsStore();
    const trolley = ref([]);
    const totalPrice = ref(() => {
        let total = 0;
        trolley.value.forEach(function (element) {
            if (element.product_model.discount) {
                total += element.product_model.price_with_discount * element.amount;
            }
            else {
                total += element.product_model.price * element.amount;
            }
        });
        return total;
    });
    const shipmentPrice = ref(() => {
        let minOrderPrice = config('1671891736.2341a');
        if (totalPrice.value() <= minOrderPrice) {
            return parseInt(config('1671891779.1284a'));
        }
        return null;
    });

    const addFlavorToTrolley = (flavor) => {
        let detected = false;
        trolley.value.forEach(function (trolleyFlavor, index) {
            if (trolleyFlavor.reference == flavor.reference) {
                detected = true;
            }
        });
        if (!detected) {
            flavor.amount = 1;
            trolley.value.push(flavor);
        }
    }
    const removeFlavorFromTrolley = (flavor) => {
        trolley.value.forEach(function (trolleyFlavor, index) {
            if (trolleyFlavor.reference == flavor.reference) {
                trolley.value.splice(index, 1);
            }
        });
    }
    const changeFlavorAmount = (flavor, amount) => {
        trolley.value.forEach(function (trolleyFlavor, index) {
            if (trolleyFlavor.reference == flavor.reference) {
                trolleyFlavor.amount = amount;
            }
        });
    }
    const getFlavorTotalPrice = ref((flavor) => {
        if (flavor.product_model.discount) {
            return flavor.product_model.price_with_discount * flavor.amount;
        }
        return flavor.product_model.price * flavor.amount;
    });
    return {
        trolley,
        totalPrice,
        shipmentPrice,
        addFlavorToTrolley,
        removeFlavorFromTrolley,
        changeFlavorAmount,
        getFlavorTotalPrice,
    }
});