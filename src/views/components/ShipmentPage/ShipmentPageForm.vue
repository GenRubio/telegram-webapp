<script setup>
import { ref } from 'vue';
import axios from 'axios';
import Swal from 'sweetalert2';
import countries from '../../../data/countries.json';
import provinces from '../../../data/provinces.json';
import paymentMethods from '../../../data/payment-methods.json';
import { useUserTrolleyStore } from '../../../store/trolley-user.store';
import { useUtilsStore } from '../../../store/utils.store';

const props = defineProps([
    "chatId",
]);
const { trolley } = useUserTrolleyStore();
const showTramitButton = ref(true);
const sendingData = ref(false);
const shipmentFormLayout = {
    name: null,
    surnames: null,
    address: null,
    postal_code: null,
    city: null,
    province: "Almería",
    e_mail: null,
    telephone: null,
    payment_method: 'stripe',
    country: "España"
};
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
    shipmentForm.value.city = (shipmentForm.value.city == null ? '' : shipmentForm.value.city);
    if (shipmentForm.value.name.trim() != ''
        && shipmentForm.value.surnames.trim() != ''
        && shipmentForm.value.address.trim() != ''
        && shipmentForm.value.postal_code.trim() != ''
        && shipmentForm.value.city.trim() != '') {
        sendingData.value = true;
        let data = {};
        data.payment = shipmentForm.value;
        data.products = getFormatedTrolleyData(trolley);
        data.token = props.chatId;
        axios.post(api + "new-order", data)
            .then(function (response) {
                if (response.data.error) {
                    Swal.fire({
                        title: 'Error',
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
                    title: 'Error',
                    text: 'La web se encuentra en mantenimiento'
                });
                shipmentForm.value = shipmentFormLayout
                sendingData.value = false;
            });
    }
    else {
        Swal.fire({
            title: 'Dirección de envío',
            text: 'Faltan campos por rellenar.'
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
    if (input != null && input.trim() == '') {
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
</script>

<template>
    <div class="shipment-page-form">
        <div class="shipment-page-form_container">
            <div class="shipment-page-form_titles">
                Información de contacto
            </div>
            <div class="shipment-page-form_input_container">
                <input v-model="shipmentForm.e_mail" type="text" class="form-control" placeholder="Correo electrónico">
            </div>
            <hr>
            <div class="shipment-page-form_titles">
                Dirección de envío
            </div>
            <select v-model="shipmentForm.country" class="form-select shipment-page-form_input_container">
                <option v-for="country in countries" :value="country.label">{{ country.label }}</option>
            </select>
            <div class="shipment-page-form_input_container">
                <input v-model="shipmentForm.name" type="text" :class="validateInput(shipmentForm.name)"
                    placeholder="Nombre *" @focus="focusHandle" @blur="blurHandle">
            </div>
            <div class="shipment-page-form_input_container">
                <input v-model="shipmentForm.surnames" type="text" :class="validateInput(shipmentForm.surnames)"
                    placeholder="Apellidos *" @focus="focusHandle" @blur="blurHandle">
            </div>
            <div class="shipment-page-form_input_container">
                <input v-model="shipmentForm.address" type="text" :class="validateInput(shipmentForm.address)"
                    placeholder="Dirección *" @focus="focusHandle" @blur="blurHandle">
            </div>
            <div class="shipment-page-form_input_container">
                <input v-model="shipmentForm.postal_code" type="text" :class="validateInput(shipmentForm.postal_code)"
                    placeholder="Código postal *" @focus="focusHandle" @blur="blurHandle">
            </div>
            <div class="shipment-page-form_input_container">
                <input v-model="shipmentForm.city" type="text" :class="validateInput(shipmentForm.city)"
                    placeholder="Ciudad *" @focus="focusHandle" @blur="blurHandle">
            </div>
            <select v-model="shipmentForm.province" class="form-select shipment-page-form_input_container">
                <option v-for="province in provinces" :value="province.label">{{ province.label }}</option>
            </select>
            <div class="shipment-page-form_input_container">
                <input v-model="shipmentForm.telephone" type="text" class="form-control" placeholder="Telefono"
                    @focus="focusHandle" @blur="blurHandle">
            </div>
            <hr>
            <div class="shipment-page-form_titles">
                Metodo de pago
            </div>
            <select v-model="shipmentForm.payment_method" class="form-select shipment-page-form_input_container">
                <option v-for="payment in paymentMethods" :value="payment.id">{{ payment.label }}</option>
            </select>
        </div>
    </div>
    <div :class="showTramitButton ? 'shipment-page-payment-button' : 'shipment-page-payment-button_fix'"
        @click="sendDataHandle">
        <div v-if="!sendingData" class="shipment-page-payment-button_container">
            Tramitar
        </div>
        <div v-if="sendingData" class="spinner-border text-light" role="status">
            <span class="sr-only">Loading...</span>
        </div>
    </div>
</template>

<style scoped>
.error-input {
    border: 1px solid #ff000087;
}

.error-input:focus {
    box-shadow: 0 0 0 0.25rem rgb(253 13 13 / 26%);
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
