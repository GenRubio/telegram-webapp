<script setup>
import { ref, onMounted } from 'vue';
import AddressTab from './Tabs/AddressTab.vue';
import ProductsTab from './Tabs/ProductsTab.vue';
import SummaryTab from './Tabs/SummaryTab.vue';
const props = defineProps([
    "order",
    "closeModal",
    "trans"
]);

</script>

<template>
    <div class="modal fade" :id="'modal-order_' + order.reference" tabindex="-1" aria-labelledby="modal_demo_label"
        aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="modal_demo_label">{{ trans('b4948a9e-84d6-4a8c-8cf8-87db1905e770') }}:
                        <small>{{ order.reference }}</small>
                    </h5>
                    <button type="button" class="btn-close" aria-label="Close" @click="closeModal"></button>
                </div>
                <div class="modal-body">
                    <nav>
                        <div class="nav nav-tabs" :id="'nav-tab_' + order.reference" role="tablist">
                            <button class="nav-link active" :id="'nav-summary-tab_' + order.reference" data-bs-toggle="tab"
                                :data-bs-target="'#nav-summary_' + order.reference" type="button" role="tab"
                                aria-controls="nav-summary" aria-selected="true">
                                {{ trans('fe4599b3-81a7-456b-8c37-033310df33f4') }}
                            </button>
                            <button class="nav-link" :id="'nav-products-tab_' + order.reference" data-bs-toggle="tab"
                                :data-bs-target="'#nav-products_' + order.reference" type="button" role="tab"
                                :aria-controls="'nav-products_' + order.reference" aria-selected="false">
                                {{ trans('6b1b1a63-4f5f-4729-b5d2-ee15d4214d35') }}
                            </button>
                            <button class="nav-link" :id="'nav-address-tab_' + order.reference" data-bs-toggle="tab"
                                :data-bs-target="'#nav-address_' + order.reference" type="button" role="tab"
                                :aria-controls="'nav-address_' + order.reference" aria-selected="false">
                                {{ trans('070d3f08-490c-48fa-b3f5-09c80d26b2f8') }}
                            </button>
                        </div>
                    </nav>
                    <div class="tab-content" :id="'nav-tabContent_' + order.reference">
                        <SummaryTab :order="order" :trans="trans" />
                        <ProductsTab :order="order" :trans="trans" :closeModal="closeModal" />
                        <AddressTab :order="order" :trans="trans" />
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" @click="closeModal">
                        {{ trans('1f2508b7-543b-4df1-834c-20dd5327a6ec') }}
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.nav-tabs .nav-link {
    border-top: none;
    border-radius: 0%;
}

.btn-close:focus {
    box-shadow: none;
}

.nav-link {
    color: rgb(159, 157, 157);
}

.tab-pane {
    border-left: 1px solid #dee2e6;
    border-right: 1px solid #dee2e6;
    padding: 15px;
}

.modal-body {
    padding: 0px 0px;
}
</style>
