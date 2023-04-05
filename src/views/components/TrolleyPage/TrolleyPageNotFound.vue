<script setup>
import { onMounted } from 'vue';
import { useGoRoute } from '../../../router/goRoute';
import { useFooterHelper } from '../../../helpers/FooterHelper';
import { useTranslationsStore } from '../../../store/translations.store';

const props = defineProps([
    "chatId",
]);
const { trans } = useTranslationsStore();
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
            {{ trans('bd6c185d-d7fa-49b2-b92d-8e74cb3846a9') }}
            <br>
            <span class="button-home" @click="clickHomeHandle">{{ trans('f922c34f-45de-44d9-ab30-f9e1a1b5ffda') }}</span>
        </div>
    </div>
</template>

<style scoped>
.button-home {
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
    background-color: #ffffff;
}
</style>
