<script setup>
const props = defineProps([
    "order",
    "trans"
]);
</script>

<template>
    <div class="tab-pane fade" :id="'nav-address_' + order.reference" role="tabpanel"
        :aria-labelledby="'nav-address-tab_' + order.reference">
        <div class="form-group">
            <label for="exampleInputEmail1">
                {{ trans('070d3f08-490c-48fa-b3f5-09c80d26b2f8') }}
            </label>
            <input class="form-control" type="text" disabled="disabled" :value="order.address.address">
        </div>
        <div class="form-group">
            <label for="exampleInputEmail1">
                {{ trans('09ff692f-082d-4ed6-9998-5a65e8f6aa9a') }}
            </label>
            <input class="form-control" type="text" disabled="disabled" :value="order.address.postal_code">
        </div>
        <div class="form-group">
            <label for="exampleInputEmail1">
                {{ trans('2da0b357-7e57-4785-89e0-2e9a840624a0') }}
            </label>
            <input class="form-control" type="text" disabled="disabled" :value="order.address.city">
        </div>
        <div class="form-group">
            <label for="exampleInputEmail1">
                {{ trans('775da7d3-3cbe-48ce-8fad-9a0db24c0152') }}
            </label>
            <input class="form-control" type="text" disabled="disabled" :value="order.address.province">
        </div>
    </div>
</template>

<style scoped>
.form-group {
    margin-bottom: 10px;
}
</style>
