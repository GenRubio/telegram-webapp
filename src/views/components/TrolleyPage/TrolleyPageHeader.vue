<script setup>
import { useUserTrolleyStore } from '../../../store/trolley-user.store';
import { useTranslationsStore } from '../../../store/translations.store';

const props = defineProps([
    "trolley",
]);
const { totalPrice } = useUserTrolleyStore();
const { trans } = useTranslationsStore();
</script>

<template>
    <div class="trolley-page-header">
        <div class="trolley-page-header_container">
            <div class="trolley-page-header_container_title">
                {{ trans('6b1b1a63-4f5f-4729-b5d2-ee15d4214d35') }} ({{ trolley.length }})
            </div>
            <div class="trolley-page-header_container_price">
                {{ totalPrice() }} €
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
