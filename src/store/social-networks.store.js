import { defineStore } from "pinia";
import { ref } from "vue";

export const useSocialNetworksStore = defineStore("useSocialNetworks", () => {
    const socialNetworks = ref(null);

    const setSocialNetworks = (data) => {
        socialNetworks.value = data;
    }

    return {
        socialNetworks,
        setSocialNetworks
    }
});