<script setup>
import { useGoRoute } from '../../router/goRoute';
import { useTranslationsStore } from '../../store/translations.store';

const props = defineProps([
    "chatId",
]);
const { trans } = useTranslationsStore();

const clickHandle = () => {
    const { goProductsPage } = useGoRoute();
    goProductsPage(props.chatId);
}
</script>

<template>
    <div class="breadcrumb_container">
        <div class="breadcrumb_container_home" @click="clickHandle">
            {{ trans('e2557a77-bc07-4db9-b4a5-f970786a1ba4') }}
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
    cursor: pointer;
}

.breadcrumb_container {
    padding-left: 20px;
    padding-right: 20px;
    text-decoration: underline;
}
</style>
