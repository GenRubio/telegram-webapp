<script setup>
import imgUrl from '../../../public/images/logo3.gif';
import { useTranslationsStore } from '../../store/translations.store';
import { useGoRoute } from '../../router/goRoute';
const props = defineProps([
    "setNavBarActive",
    "chatId"
]);
const { trans } = useTranslationsStore();

const clickHome = () => {
    props.setNavBarActive(false)
    const { goProductsPage } = useGoRoute();
    goProductsPage(props.chatId);
}
const clickOrders = () => {
    props.setNavBarActive(false)
    const { goOrdersPage } = useGoRoute();
    goOrdersPage(props.chatId);
}
</script>

<template>
    <div id="navbar-container" class="navbar-container">
        <div class="w-100 h-100 d-flex">
            <div class="navs-container">
                <div class="header-container d-flex justify-content-center shadow-sm">
                    <div class="navbar_content_logo">
                        <img :src="imgUrl" alt="Logo" style="width:50px;">
                    </div>
                </div>
                <div class="items-container">
                    <div class="page-item d-flex justify-content-between align-items-center" @click="clickHome">
                        <div>
                            {{ trans('e2557a77-bc07-4db9-b4a5-f970786a1ba4') }}
                        </div>
                        <div class="item-arrow">
                            <font-awesome-icon :icon="['fas', 'chevron-right']" />
                        </div>
                    </div>
                    <div class="page-item d-flex justify-content-between align-items-center" @click="clickOrders">
                        <div>
                            {{ trans('9dc05dfe-91db-4447-805c-50d8594dfd64') }}
                        </div>
                        <div class="item-arrow">
                            <font-awesome-icon :icon="['fas', 'chevron-right']" />
                        </div>
                    </div>
                </div>
            </div>
            <div class="transparent-container">
                <div class="w-100 d-flex justify-content-end">
                    <div class="icon-close" @click="setNavBarActive(false)">
                        <font-awesome-icon :icon="['fas', 'xmark']" />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.page-item-arrow {
    font-size: 20px;
}

.items-container {
    margin-top: 4px;
}

.page-item {
    font-size: 24px;
    padding: 15px 20px;
    border-bottom: 1px solid rgb(230, 230, 230);
    cursor: pointer;
}

.header-container {
    font-family: Arial;
    color: black;
    z-index: 1;
    padding-left: 20px;
    padding-right: 20px;
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
}

.icon-close {
    font-size: 40px;
    color: white;
    text-align: center;
    right: 0;
    cursor: pointer;
}

.transparent-container {
    width: 30%;
    padding: 0 20px;
}

.navs-container {
    width: 70%;
    background-color: white;
    height: 100%;
}

.navbar-container {
    position: fixed;
    bottom: -100%;
    /* Set the initial position */
    height: 100%;
    width: 100%;
    background-color: #fff;
    /*transition: bottom 0.3s ease-out;*/
    z-index: 2;
    bottom: 0;
    opacity: 1;
    visibility: visible;
    background-color: hsla(0, 0%, 0%, 0.483);
    -webkit-backdrop-filter: blur(4px);
    backdrop-filter: blur(4px);
    /* Add transition for animation */
}
</style>
