<script setup>
import { ref, onMounted } from 'vue';
import { useTranslationsStore } from '../../../store/translations.store';
import OrderInfoModal from './Modals/OrderInfoModal.vue';
import { Modal } from 'bootstrap';

const props = defineProps([
    "order",
]);
const historyState = ref(props.order.history_states[0]);
const { trans } = useTranslationsStore();
const state = ref({
    modal_demo: null,
})
onMounted(() => {
    state.modal_demo = new Modal('#modal-order_' + props.order.reference, {})
})
function openModal() {
    state.modal_demo.show()
}
function closeModal() {
    state.modal_demo.hide()
}
</script>

<template>
    <OrderInfoModal :order="order" :closeModal="closeModal" :trans="trans" />
    <div class="order-grid-item_container shadow-sm">
        <div class="order-grid-item_container-header">
            <div>
                <b>{{ trans('9de2b88b-531c-48a4-9e41-07e95079ddcc') }}</b>: {{ order.reference }}
            </div>
            <div>
                {{ trans('562b674d-4c4d-4b49-ba17-5d7b2c169872') }}: {{ order.created_at }}
            </div>
            <div>
                {{ trans('6b1b1a63-4f5f-4729-b5d2-ee15d4214d35') }}: {{ order.count_products }}
            </div>
            <div>
                <b>{{ trans('c43e7a70-ff5b-46e8-9a09-70f9c41ce6c5') }}</b>: {{ order.total_price }}€
            </div>
            <div class="more-info-button" @click="openModal">
                {{ trans('ac5e7cf7-2d84-4bbc-8977-c7ef87fe3543') }}
            </div>
        </div>
        <div class="order-grid-item_container-content">
            <div>
                {{ trans('2f749f8b-df3b-4892-bd00-91aa3ded24db') }}: {{ order.updated_at }}
            </div>
            <div>
                <div class="status-order-container" :style="'background-color:' + historyState.data.color">
                    {{ historyState.text }}
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.more-info-button {
    text-align: right;
    cursor: pointer;
    color: rgb(124, 124, 125);
}

.status-order-container {
    padding: 5px;
    border-radius: 6px;
    text-align: center;
    color: white;
    font-weight: bold;
    text-transform: uppercase;
    margin-top: 10px;
}

.order-grid-item_container-content {
    padding: 5px;
}

.order-grid-item_container-header {
    background-color: #f6f6f6;
    padding: 5px;
    border-bottom: 1px solid rgb(190, 189, 189);
}

.order-grid-item_container {
    border: 1px solid rgb(210, 208, 208);
    border-radius: 6px;
    margin-bottom: 10px;
}

hr {
    margin: 0;
    padding: 0;
}
</style>
