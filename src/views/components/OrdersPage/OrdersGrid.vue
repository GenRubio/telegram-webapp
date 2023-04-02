<script setup>
import OrdersGridItem from './OrdersGridItem.vue';
const props = defineProps([
    "orders",
]);
</script>

<template>
    <div class="orders-grid_container">
        <OrdersGridItem v-for="order in orders" :order="order"/>
    </div>
</template>

<style scoped>
.orders-grid_container{

}
</style>
