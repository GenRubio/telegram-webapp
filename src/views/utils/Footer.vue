

<script setup>
import { useTranslationsStore } from '../../store/translations.store';
import { useSocialNetworksStore } from '../../store/social-networks.store';
import { useParametricSettingsStore } from '../../store/parametric-settings.store';

const { trans } = useTranslationsStore();
const { socialNetworks } = useSocialNetworksStore();
const { settingValue } = useParametricSettingsStore();
</script>

<template>
    <div id="footer" class="footer">
        <div class="social-container d-flex justify-content-center">
            <div class="d-flex">
                <div v-for="item in socialNetworks.parametric_table_values" class="m-1 social-item-container">
                    <a :href="item.parameter" target="_blank">
                        <span v-html="item.description"></span></a>
                </div>
            </div>
        </div>
        <hr>
        <div class="copyright-container d-flex justify-content-center">
            <div>
                {{ trans('0325edab-0f32-4c2f-b26b-26d6cd782b03') }} {{ settingValue('settings-api_version') }}
            </div>
        </div>
    </div>
</template>

<style scoped>
a {
    text-decoration: none;
    color: white;
}

.social-item-container {
    width: 40px;
    height: 40px;
    background-color: #474646 !important;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #ffffff !important;
}

.social-item-container i {
    font-size: 24px;
    color: #ffffff;
}

.footer hr {
    padding: 0;
    margin: 0;
}

.footer {
    position: sticky;
    top: 100%;
    background-color: rgb(28, 27, 27);
    color: rgba(250, 250, 250, 0.574);
    box-shadow: 0px -2px 5px 0px rgba(93, 93, 93, 0.75);
}

.copyright-container {
    padding: 10px;
}

.social-container {
    padding-top: 15px;
    padding-bottom: 15px;
}
</style>
