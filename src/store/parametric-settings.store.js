import { defineStore } from "pinia";
import { ref } from "vue";

export const useParametricSettingsStore = defineStore("useParametricSettings", () => {
    const parametricSettings = ref(null);

    const setParametricSettings = (data) => {
        parametricSettings.value = data;
    }

    const setting = (key) => {
        return parametricSettings.value.find(setting => setting.key === key);
    }

    const settingValue = (key) => {
        return parametricSettings.value.find(setting => setting.key === key).parameter;
    }

    return {
        parametricSettings,
        setParametricSettings,
        setting,
        settingValue
    }
});