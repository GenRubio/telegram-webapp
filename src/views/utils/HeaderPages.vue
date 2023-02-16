<script setup>
import { useGoRoute } from '../../router/goRoute';
import { useUserTrolleyStore } from '../../store/trolley-user.store';
import imgUrl from '../../../public/images/logo2.png';

const props = defineProps([
    "chatId",
]);
const { trolley } = useUserTrolleyStore();

const clickLogoHandle = () => {
    const { goProductsPage } = useGoRoute();
    goProductsPage(props.chatId);
}
const clickTrolleyHandle = () => {
    const { goTrolleyPage } = useGoRoute();
    goTrolleyPage(props.chatId);
}
</script>

<template>
    <div class="navbar shadow-sm">
        <div class="navbar_content_logo">
            <img :src="imgUrl" alt="Logo" style="width:50px;" @click="clickLogoHandle">
        </div>
        <div class="cart-icon" @click="clickTrolleyHandle">
            <i class="fa-solid fa-bag-shopping"></i>
            <span v-if="trolley.length" class="cart-item-count">{{ trolley.length }}</span>
        </div>
    </div>
    <div class="separator-nav"></div>
</template>

<style scoped>
.navbar_content_logo{
    cursor: pointer;
}
.separator-nav {
    margin-bottom: 70px;
}

/* Define the navbar container */
.navbar {
    position: fixed;
    top: 0;
    width: 100%;
    background-color: #fff;
    font-family: Arial;
    color: black;
    z-index: 1;
    display: flex;
    justify-content: center;
}

/* Navbar logo */
.navbar img {
    display: block;
    margin: 0 auto;
}

/* Navbar cart icon */
.navbar .cart-icon {
    position: absolute;
    padding: 0px 20px;
    font-size: 30px;
    color: black;
    text-align: center;
    right: 0;
    cursor: pointer;
}

/* Navbar cart item count */
.navbar .cart-item-count {
    background-color: #f44336;
    color: white;
    border-radius: 50%;
    width: 18px;
    height: 18px;
    font-size: 12px;
    padding: 0px;
    position: absolute;
    right: 10px;
    top: 0px;
    text-align: center;
}
</style>
