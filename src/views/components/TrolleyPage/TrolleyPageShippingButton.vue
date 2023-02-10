<script setup>
import { useGoRoute } from '../../../router/goRoute';

const props = defineProps([
    "chatId",
]);
const clickButtonHandle = () => {
    const { goShipmentPage } = useGoRoute();
    goShipmentPage(props.chatId);
}
</script>

<template>
    <div class="trolley-page-tramit-button" @click="clickButtonHandle">
        <div class="trolley-page-tramit-button_container">
            Comprar ahora
        </div>
    </div>
</template>

<style scoped>
.trolley-page-tramit-button {
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
</style>
