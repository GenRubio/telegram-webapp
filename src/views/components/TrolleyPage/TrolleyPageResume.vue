<script setup>
import { useUserTrolleyStore } from '../../../store/trolley-user.store';
import { useTranslationsStore } from '../../../store/translations.store';

const { trolley, price, shipmentPrice, totalPrice } = useUserTrolleyStore();
const { trans } = useTranslationsStore();

</script>

<template>
    <div class="trolley-page-resume">
        <hr>
        <div class="trolley-page-resume_container">
            <div class="trolley-page-resume_container_content">
                <div class="trolley-page-resume_container_content_products">
                    {{ trans('090f6aba-3915-48f7-ad43-1b2b47574147') }} ({{ trolley.length }} {{ trans('6b1b1a63-4f5f-4729-b5d2-ee15d4214d35') }}): {{ price() }} €
                </div>
                <div class="trolley-page-resume_container_content_shipping">
                    {{ trans('3d1bdce1-f269-41f6-8678-fc97d5cf0e4e') }}: {{ shipmentPrice() != null ?  shipmentPrice() + ' €' :  trans('d47ab235-e303-4e31-9c8e-517937523f21') }}
                </div>
                <div class="trolley-page-resume_container_content_total">
                    {{ trans('c43e7a70-ff5b-46e8-9a09-70f9c41ce6c5') }}: {{ totalPrice() }} €
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
