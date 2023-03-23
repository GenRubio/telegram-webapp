<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';
import Swal from 'sweetalert2';
import countries from '../../../data/countries.json';
import paymentMethods from '../../../data/payment-methods.json';
import { useUserTrolleyStore } from '../../../store/trolley-user.store';
import { useUtilsStore } from '../../../store/utils.store';
import { useTranslationsStore } from '../../../store/translations.store';

const props = defineProps([
    "chatId",
]);
const { trans } = useTranslationsStore();
const { trolley } = useUserTrolleyStore();
const showTramitButton = ref(true);
const sendingData = ref(false);
const shipmentFormLayout = {
    name: null,
    surnames: null,
    address: null,
    postal_code: null,
    city: null,
    province: null,
    e_mail: null,
    telephone: null,
    payment_method: 'stripe',
    country: "España"
};
const addressProvinces = ref([]);
const addressCities = ref([]);
const shipmentForm = ref({ ...shipmentFormLayout });
const sendDataHandle = () => {
    if (sendingData.value == true) {
        return;
    }

    const { api } = useUtilsStore();
    shipmentForm.value.name = (shipmentForm.value.name == null ? '' : shipmentForm.value.name);
    shipmentForm.value.surnames = (shipmentForm.value.surnames == null ? '' : shipmentForm.value.surnames);
    shipmentForm.value.address = (shipmentForm.value.address == null ? '' : shipmentForm.value.address);
    shipmentForm.value.postal_code = (shipmentForm.value.postal_code == null ? '' : shipmentForm.value.postal_code);
    shipmentForm.value.province = (shipmentForm.value.province == null ? '' : shipmentForm.value.province);
    shipmentForm.value.city = (shipmentForm.value.city == null ? '' : shipmentForm.value.city);
    if (shipmentForm.value.name.trim() != ''
        && shipmentForm.value.surnames.trim() != ''
        && shipmentForm.value.address.trim() != ''
        && shipmentForm.value.postal_code.trim() != ''
        && shipmentForm.value.city.trim() != ''
        && shipmentForm.value.province.trim() != '') {
        sendingData.value = true;
        let data = {};
        data.payment = shipmentForm.value;
        data.products = getFormatedTrolleyData(trolley);
        data.token = props.chatId;
        axios.post(api + "order/create", data)
            .then(function (response) {
                if (response.data.error) {
                    Swal.fire({
                        title: trans('853680aa-ab88-43d1-ad9d-db7997da4879'),
                        text: response.data.error
                    });
                    sendingData.value = false;
                }
                else {
                    shipmentForm.value = shipmentFormLayout
                    window.open(response.data.url)
                    Telegram.WebApp.close();
                }
            })
            .catch(function (err) {
                Swal.fire({
                    title: trans('853680aa-ab88-43d1-ad9d-db7997da4879'),
                    text: trans('e44f696e-4de0-47c5-8cfb-42656ff214b7')
                });
                shipmentForm.value = shipmentFormLayout
                sendingData.value = false;
            });
    }
    else {
        Swal.fire({
            title: trans('af1dca05-babc-4772-886d-607117003b72'),
            text: trans('f86d41ff-9641-496e-a137-7d9a043e2856')
        });
    }
}
const getFormatedTrolleyData = (trolley) => {
    let data = [];
    trolley.forEach(function (element) {
        data.push({
            reference: element.reference,
            amount: element.amount
        })
    });
    return data;
}
const validateInput = (input) => {
    if ((input != null && input.trim() == '') || input == null) {
        return 'form-control error-input';
    }
    return 'form-control';
}
const focusHandle = () => {
    showTramitButton.value = false;
}
const blurHandle = () => {
    showTramitButton.value = true;
}

onMounted(() => {
    document.getElementById("input_postal_code").addEventListener('keyup', function (event) {
        postalCodeChange();
    });
});
const postalCodeChange = () => {
    if (shipmentForm.value.postal_code.length != 5) {
        addressProvinces.value = [];
        addressCities.value = [];
        shipmentForm.value.city = null;
        shipmentForm.value.province = null;
    }
    else {
        const { api } = useUtilsStore();
        axios.get(api + props.chatId + "/localization/" + shipmentForm.value.postal_code)
            .then(function (response) {
                if (response.data.error) {
                    addressProvinces.value = [];
                    addressCities.value = [];
                    shipmentForm.value.city = null;
                    shipmentForm.value.province = null;
                }
                else {
                    let data = response.data.data;
                    addressProvinces.value = [...new Set(data.map(item => item.province))];
                    addressCities.value = [...new Set(data.map(item => item.city))];
                    shipmentForm.value.city = addressCities.value[0];
                    shipmentForm.value.province = addressProvinces.value[0];
                }
            })
            .catch(function (err) {
                addressProvinces.value = [];
                addressCities.value = [];
                shipmentForm.value.city = null;
                shipmentForm.value.province = null;
            });
    }
}
</script>

<template>
    <div class="shipment-page-form">
        <div class="shipment-page-form_container">
            <div class="shipment-page-form_titles">
                {{ trans('c942249f-ab1e-4d9c-be9f-9f52a23d388d') }}
            </div>
            <div class="shipment-page-form_input_container">
                <div class="input-group mb-2">
                    <div class="input-group-prepend">
                        <div class="input-group-text"><font-awesome-icon :icon="['fas', 'envelope']" /></div>
                    </div>
                    <input v-model="shipmentForm.e_mail" type="text" class="form-control"
                        :placeholder="trans('80989dcf-1fe8-422d-bf41-34ebc7263295')" @focus="focusHandle"
                        @blur="blurHandle">
                </div>
            </div>
            <hr>
            <div class="shipment-page-form_titles">
                {{ trans('af1dca05-babc-4772-886d-607117003b72') }}
            </div>
            <select v-model="shipmentForm.country" class="form-select shipment-page-form_input_container">
                <option v-for="country in countries" :value="country.label">{{ country.label }}</option>
            </select>
            <div class="shipment-page-form_input_container">
                <div class="input-group mb-2">
                    <div class="input-group-prepend">
                        <div class="input-group-text"><font-awesome-icon :icon="['fas', 'user']" /></div>
                    </div>
                    <input v-model="shipmentForm.name" type="text" :class="validateInput(shipmentForm.name)"
                        :placeholder="trans('f47322cd-ba51-4cf0-8280-31de8073da80') + ' *'" @focus="focusHandle"
                        @blur="blurHandle" pattern="[A-Za-z0-9ñÑáéíóúÁÉÍÓÚüÜ.,:;@#¿?¡!()\-_ ]*">
                </div>
            </div>
            <div class="shipment-page-form_input_container">
                <div class="input-group mb-2">
                    <div class="input-group-prepend">
                        <div class="input-group-text"><font-awesome-icon :icon="['fas', 'user']" /></div>
                    </div>
                    <input v-model="shipmentForm.surnames" type="text" :class="validateInput(shipmentForm.surnames)"
                        :placeholder="trans('de5f0adb-d8eb-4312-9606-64a1075f422d') + ' *'" @focus="focusHandle"
                        @blur="blurHandle" pattern="[A-Za-z0-9ñÑáéíóúÁÉÍÓÚüÜ.,:;@#¿?¡!()\-_ ]*">
                </div>
            </div>
            <div class="shipment-page-form_input_container">
                <div class="input-group mb-2">
                    <div class="input-group-prepend">
                        <div class="input-group-text"><font-awesome-icon :icon="['fass', 'building']" /></div>
                    </div>
                    <input id="input_postal_code" v-model="shipmentForm.postal_code" type="text"
                        :class="validateInput(shipmentForm.postal_code)"
                        :placeholder="trans('09ff692f-082d-4ed6-9998-5a65e8f6aa9a') + ' *'" @focus="focusHandle"
                        @blur="blurHandle">
                </div>
            </div>
            <div class="shipment-page-form_input_container">
                <label>{{ trans('2da0b357-7e57-4785-89e0-2e9a840624a0') }} *</label>
                <input v-model="shipmentForm.city" list="city_browsers" id="city_browser"
                    :class="'form-select ' + validateInput(shipmentForm.city)"
                    pattern="[A-Za-z0-9ñÑáéíóúÁÉÍÓÚüÜ.,:;@#¿?¡!()\-_ ]*">
                <datalist id="city_browsers">
                    <option v-for="city in addressCities" :value="city">{{ city }}</option>
                </datalist>
            </div>
            <div class="shipment-page-form_input_container">
                <label>{{ trans('775da7d3-3cbe-48ce-8fad-9a0db24c0152') }} *</label>
                <input v-model="shipmentForm.province" list="province_browsers" id="province_browser"
                    :class="'form-select ' + validateInput(shipmentForm.province)"
                    pattern="[A-Za-z0-9ñÑáéíóúÁÉÍÓÚüÜ.,:;@#¿?¡!()\-_ ]*">
                <datalist id="province_browsers">
                    <option v-for="province in addressProvinces" :value="province">{{ province }}</option>
                </datalist>
            </div>
            <div class="shipment-page-form_input_container">
                <div class="input-group mb-2">
                    <div class="input-group-prepend">
                        <div class="input-group-text"><font-awesome-icon :icon="['fass', 'building']" /></div>
                    </div>
                    <input v-model="shipmentForm.address" type="text" :class="validateInput(shipmentForm.address)"
                        :placeholder="trans('070d3f08-490c-48fa-b3f5-09c80d26b2f8') + ' *'" @focus="focusHandle"
                        @blur="blurHandle" pattern="[A-Za-z0-9ñÑáéíóúÁÉÍÓÚüÜ.,:;@#¿?¡!()\-_ ]*">
                </div>
            </div>
            <div class="shipment-page-form_input_container">
                <div class="input-group mb-2">
                    <div class="input-group-prepend">
                        <div class="input-group-text"><font-awesome-icon :icon="['fas', 'square-phone']" /></div>
                    </div>
                    <input v-model="shipmentForm.telephone" type="text" class="form-control"
                        :placeholder="trans('d15f88d0-48fc-4b48-b2a8-1f858bc806d8')" @focus="focusHandle" @blur="blurHandle"
                        pattern="[A-Za-z0-9ñÑáéíóúÁÉÍÓÚüÜ.,:;@#¿?¡!()\-_ ]*">
                </div>
            </div>
            <hr>
            <div class="shipment-page-form_titles">
                {{ trans('6a37b341-b198-44e8-b23e-d4ad36ccc244') }}
            </div>
            <select v-model="shipmentForm.payment_method" class="form-select shipment-page-form_input_container">
                <option v-for="payment in paymentMethods" :value="payment.id">{{ payment.label }}</option>
            </select>
        </div>
    </div>
    <div :class="showTramitButton ? 'shipment-page-payment-button' : 'shipment-page-payment-button_fix'"
        @click="sendDataHandle">
        <div v-if="!sendingData" class="shipment-page-payment-button_container">
            {{ trans('e41e2bf8-e1e2-4ec9-9595-6d55184c98bb') }}
        </div>
        <div v-if="sendingData" class="spinner-border text-light" role="status">
            <span class="sr-only">Loading...</span>
        </div>
    </div>
</template>

<style scoped>
.input-group-text {
    background-color: transparent;
    border: none;
    border-radius: 0%;
    border-top: solid 1px #ced4da;
    border-left: solid 1px #ced4da;
    border-bottom: solid 1px #ced4da;
    border-top-left-radius: 0.375rem;
    border-bottom-left-radius: 0.375rem;
    height: 100%;
    width: 100%;
}

.form-select:focus {
    border-color: black;
    box-shadow: none;
}

.form-control:focus {
    border-color: black;
    box-shadow: none;
}

.error-input {
    border-color: red;
    border: 1px solid #ff000087;
}

.error-input:focus {
    box-shadow: none;
}

.shipment-page-payment-button {
    background-color: rgb(28, 27, 27);
    color: white;
    width: 100%;
    position: fixed;
    bottom: 0;
    z-index: 20;
    cursor: pointer;
    display: flex;
    justify-content: center;
    font-size: 20px;
    padding: 15px;
    box-shadow: 0px -2px 5px 0px rgba(93, 93, 93, 0.75);
    border: 1px solid black;
}

.shipment-page-payment-button_fix {
    background-color: black;
    color: white;
    width: 100%;
    z-index: 20;
    cursor: pointer;
    display: flex;
    justify-content: center;
    font-size: 20px;
    padding: 15px;
    margin-top: -70px;
}

.shipment-page-form_titles {
    margin-bottom: 15px;
    font-size: 18px;
}

.shipment-page-form_input_container {
    margin-bottom: 13px;
}

.shipment-page-form_container {
    margin-top: 20px;
}

.shipment-page-form {
    padding: 0px 20px;
    margin-bottom: 100px;
}
</style>
