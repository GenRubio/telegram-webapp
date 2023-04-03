<script setup>
import { ref } from "vue";
const props = defineProps([
    "order",
    "trans"
]);
const historyState = ref(props.order.history_states[0]);
</script>

<template>
    <div class="tab-pane fade show active" :id="'nav-summary_' + order.reference" role="tabpanel"
        :aria-labelledby="'nav-summary-tab_' + order.reference">
        <div>
            <div class="item-container d-flex justify-content-between align-items-end">
                <div class="item-container_title">
                    <b>{{ trans('9de2b88b-531c-48a4-9e41-07e95079ddcc') }}</b>:
                </div>
                <div class="item-container_value">
                    {{ order.reference }}
                </div>
            </div>
            <div class="item-container d-flex justify-content-between align-items-end">
                <div class="item-container_title">
                    {{ trans('562b674d-4c4d-4b49-ba17-5d7b2c169872') }}:
                </div>
                <div class="item-container_value">
                    {{ order.created_at }}
                </div>
            </div>
            <div class="item-container d-flex justify-content-between align-items-end">
                <div class="item-container_title">
                    {{ trans('6b1b1a63-4f5f-4729-b5d2-ee15d4214d35') }}:
                </div>
                <div class="item-container_value">
                    {{ order.count_products }}
                </div>
            </div>
            <div class="item-container d-flex justify-content-between align-items-end">
                <div class="item-container_title">
                    {{ trans('090f6aba-3915-48f7-ad43-1b2b47574147') }}:
                </div>
                <div class="item-container_value">
                    {{ order.price }}€
                </div>
            </div>
            <div class="item-container d-flex justify-content-between align-items-end">
                <div class="item-container_title">
                    {{ trans('3d1bdce1-f269-41f6-8678-fc97d5cf0e4e') }}:
                </div>
                <div class="item-container_value">
                    {{ order.shipping_price }}€
                </div>
            </div>
            <div class="item-container d-flex justify-content-between align-items-end">
                <div class="item-container_title">
                    <b>{{ trans('c43e7a70-ff5b-46e8-9a09-70f9c41ce6c5') }}</b>:
                </div>
                <div class="item-container_value">
                    {{ order.total_price }}€
                </div>
            </div>
            <hr>
            <div class="item-container d-flex justify-content-between align-items-end">
                <div class="item-container_title">
                    <b>{{ trans('35480425-9f94-4313-8f64-417e07d02700') }}</b>:
                </div>
                <div class="item-container_value">
                    <div v-if="order.provider_url">
                        <a class="btn url-provider-button shadow" :href="order.provider_url"
                            target="_blank"><font-awesome-icon :icon="['fas', 'link']" /> URL</a>
                    </div>
                    <div v-else>
                        {{ trans('db41d63a-08bd-4d35-8f46-d4d583fb8665') }}
                    </div>
                </div>
            </div>
            <div class="item-container">
                <div class="d-flex justify-content-between align-items-end">
                    <div class="item-container_title">
                        <b>{{ trans('a25503f0-b99b-49af-aaac-7541e33f8517') }}</b>:
                    </div>
                    <div class="item-container_value">
                        <div class="status-order-container" :style="'background-color:' + historyState.data.color">
                            {{ historyState.text }}
                        </div>
                    </div>
                </div>
                <div v-if="order.order_cancel_detail">
                    <hr>
                    <div>
                        <small><b>{{ trans('5045d773-f22f-4015-a904-b68d32310ffe') }}</b>:</small>
                    </div>
                    <div class="order-canceled-section">
                        <div>
                            <small>{{ order.order_cancel_detail }}</small>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.order-canceled-section {
    margin-top: 10px;
    padding: 10px;
    border: 1px solid #e9ecef;
    border-radius: 5px;
    background-color: #f6f6f6;
}

.url-provider-button {
    background-color: #007bff;
    color: white;
    border: none;
    padding: 2px 10px;
    border-radius: 5px;
    text-decoration: none;
}

.status-order-container {
    padding: 2px 5px;
    border-radius: 5px;
    color: white;
    text-transform: uppercase;
}

.item-container {
    margin-bottom: 5px;
    border-bottom: 1px solid #e9ecef;
    padding-bottom: 5px;
}

.item-container_value {
    margin-left: 10px;
    text-align: end;
}
</style>
