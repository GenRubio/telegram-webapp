import { defineStore } from "pinia";
import { ref } from "vue";
import { useSettingsStore } from "../store/settings.store";
import { usePriceHelper } from "../helpers/PriceHelper";

export const useUserTrolleyStore = defineStore("useUserTrolley", () => {
  const { config } = useSettingsStore();
  const trolley = ref([]);
  const { formatPrice } = usePriceHelper();

  const price = ref(() => {
    let total = 0;
    trolley.value.forEach(function (element) {
      if (element.product_model.discount) {
        total += element.product_model.price_with_discount * element.amount;
      } else {
        total += element.product_model.price * element.amount;
      }
    });
    return total;
  });

  const totalPrice = ref(() => {
    return price.value() + (shipmentPrice.value() ? shipmentPrice.value() : 0);
  });

  const shipmentPrice = ref(() => {
    let minOrderPrice = config("1671891736.2341a");
    if (price.value() <= minOrderPrice) {
      return parseInt(config("1671891779.1284a"));
    }
    return null;
  });

  const flavorTotalPrice = ref((flavor) => {
    if (flavor.product_model.discount) {
      return flavor.product_model.price_with_discount * flavor.amount;
    }
    return flavor.product_model.price * flavor.amount;
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
  };

  const isFlavorInTrolley = (flavor) => {
    let detected = false;
    trolley.value.forEach(function (trolleyFlavor, index) {
      if (trolleyFlavor.reference == flavor.reference) {
        detected = true;
      }
    });
    return detected;
  };

  const removeFlavorFromTrolley = (flavor) => {
    trolley.value.forEach(function (trolleyFlavor, index) {
      if (trolleyFlavor.reference == flavor.reference) {
        trolley.value.splice(index, 1);
      }
    });
  };

  const changeFlavorAmount = (flavor, amount) => {
    trolley.value.forEach(function (trolleyFlavor, index) {
      if (trolleyFlavor.reference == flavor.reference) {
        trolleyFlavor.amount = amount;
      }
    });
  };

  return {
    trolley,
    price,
    totalPrice,
    shipmentPrice,
    flavorTotalPrice,
    addFlavorToTrolley,
    removeFlavorFromTrolley,
    changeFlavorAmount,
    isFlavorInTrolley,
  };
});
