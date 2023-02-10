<script setup>
import { useGoRoute } from '../../router/goRoute';

const props = defineProps([
    "chatId",
]);

const clickHandle = () => {
    const { goProductsPage } = useGoRoute();
    goProductsPage(props.chatId);
}
</script>

<template>
    <div class="breadcrumb_container">
        <div class="breadcrumb_container_home" @click="clickHandle">
            Inicio
        </div>
        <hr>
    </div>
</template>

<style scoped>
.breadcrumb_container hr {
    margin-top: 0;
    margin-bottom: 20px;
}
.breadcrumb_container_home {
    padding-top: 15px;
    padding-bottom: 15px;
}

.breadcrumb_container {
    padding-left: 20px;
    padding-right: 20px;
    text-decoration: underline;
}
</style>
