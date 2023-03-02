<script setup>
import { onMounted } from 'vue';
import { useGoRoute } from '../../../router/goRoute';
import { useFooterHelper } from '../../../helpers/FooterHelper';

const props = defineProps([
    "chatId",
]);
const clickHomeHandle = () => {
    const { goProductsPage } = useGoRoute();
    goProductsPage(props.chatId);
}
const { showFooter } = useFooterHelper();
onMounted(() => {
    showFooter(true); 
})
</script>

<template>
    <div class="not-found-products">
        <div class="not-found-products_container shadow">
            Tu carrito esta vacío
            <br>
            <span class="button-home" @click="clickHomeHandle">Volver</span>
        </div>
    </div>
</template>

<style scoped>
.button-home{
    text-decoration: underline;
    cursor: pointer;
}
.not-found-products_container {
    border: 1px solid rgb(236, 234, 234);
    padding: 20px;
    margin-top: 30px;
    text-align: center;
    font-weight: bold;
}

.not-found-products {
    padding: 0px 20px;
}
</style>
