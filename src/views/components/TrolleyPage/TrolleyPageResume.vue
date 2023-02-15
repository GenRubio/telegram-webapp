<script setup>
import { useUserTrolleyStore } from '../../../store/trolley-user.store';
const { trolley, totalPrice, shipmentPrice } = useUserTrolleyStore();

</script>

<template>
    <div class="trolley-page-resume">
        <hr>
        <div class="trolley-page-resume_container">
            <div class="trolley-page-resume_container_content">
                <div class="trolley-page-resume_container_content_products">
                    Subtotal ({{ trolley.length }} Productos): {{ totalPrice() }} €
                </div>
                <div class="trolley-page-resume_container_content_shipping">
                    Envio: {{ shipmentPrice() != null ? '8 €' : 'Gratis' }}
                </div>
                <div class="trolley-page-resume_container_content_total">
                    Total: {{ shipmentPrice() != null ? (totalPrice() + shipmentPrice()) : totalPrice() }} €
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.trolley-page-resume_container_content_total {
    font-size: 23px;
}

.trolley-page-resume_container_content_shipping {
    font-size: 17px;
}

.trolley-page-resume_container_content_products {
    font-size: 17px;
}

.trolley-page-resume_container_content {
    text-align: end;
}

.trolley-page-resume_container {
    display: flex;
    justify-content: end;
    margin-top: 10px;
}

.trolley-page-resume {
    padding: 0px 20px;
    margin-top: 20px;
    font-size: 20px;
}
</style>
