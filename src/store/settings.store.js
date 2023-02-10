import { defineStore } from "pinia";
import { ref } from "vue";

export const useSettingsStore = defineStore("useSettings", () => {
    const settings = ref(null);

    const setSettings = (data) => {
        settings.value = data;
    }
    const config = (key) => {
        return settings.value[key];
    }

    return {
        config,
        setSettings
    }
});