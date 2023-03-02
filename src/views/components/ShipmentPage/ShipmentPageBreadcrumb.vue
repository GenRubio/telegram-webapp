<script setup>
import { useGoRoute } from '../../../router/goRoute';

const props = defineProps([
    "chatId",
]);

const clickHandle = (page) => {
    const { goProductsPage, goTrolleyPage } = useGoRoute();
    switch (page) {
        case 'home':
            goProductsPage(props.chatId);
            break;
        case 'trolley':
            goTrolleyPage(props.chatId);
            break;
    }
}
</script>

<template>
    <div class="breadcrumb_container">
        <div class="d-flex">
            <div class="breadcrumb_container_home" @click="clickHandle('home')">
                Inicio
            </div>
            <div class="breadcrumb_separator">
                <i class="fa-solid fa-chevron-right"></i>
            </div>
            <div class="breadcrumb_container_home" @click="clickHandle('trolley')">
                Carrito
            </div>
        </div>
        <hr>
    </div>
</template>

<style scoped>
.breadcrumb_container hr {
    margin-top: 0;
    margin-bottom: 20px;
}
.breadcrumb_container_home{
    padding-top: 15px;
    padding-bottom: 15px;
    cursor: pointer;
}
.breadcrumb_separator {
    margin: 0px 6px;
    font-size: 12px;
    margin-top: 5px;
    align-self: center;
    display: flex;
    /* bottom: 0; */
    align-items: end;
}

.breadcrumb_container {
    padding-left: 20px;
    padding-right: 20px;
    text-decoration: underline;
}
</style>
