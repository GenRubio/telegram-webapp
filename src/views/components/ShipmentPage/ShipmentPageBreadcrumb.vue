<script setup>
import { useGoRoute } from '../../../router/goRoute';
import { useTranslationsStore } from '../../../store/translations.store';

const props = defineProps([
    "chatId",
]);
const { trans } = useTranslationsStore();
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
                {{ trans('e2557a77-bc07-4db9-b4a5-f970786a1ba4') }}
            </div>
            <div class="breadcrumb_separator">
                <i class="fa-solid fa-chevron-right"></i>
            </div>
            <div class="breadcrumb_container_home" @click="clickHandle('trolley')">
                {{ trans('dfda1d7c-508a-4bb5-8255-52d94b23dd39') }}
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

.breadcrumb_container_home {
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
