<script setup>
import { useUserTrolleyStore } from '../../../store/trolley-user.store';

const props = defineProps([
    "trolley",
]);
const { totalPrice, shipmentPrice } = useUserTrolleyStore();
</script>

<template>
    <div class="trolley-page-header">
        <div class="trolley-page-header_container">
            <div class="trolley-page-header_container_title">
                Productos ({{ trolley.length }})
            </div>
            <div class="trolley-page-header_container_price">
                {{ shipmentPrice() != null ? (totalPrice() + shipmentPrice()) : totalPrice() }} €
            </div>
        </div>
    </div>
</template>

<style scoped>
.trolley-page-header_container {
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
    font-size: 20px;
    margin-bottom: 15px;
}

.trolley-page-header {
    padding: 0px 20px;
}
</style>
