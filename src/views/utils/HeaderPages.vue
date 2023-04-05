<script setup>
import { ref } from 'vue';
import { useGoRoute } from '../../router/goRoute';
import { useUserTrolleyStore } from '../../store/trolley-user.store';
import imgUrl from '../../../public/images/logo3.gif';
import NavBar from '../utils/NavBar.vue';

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
const navBarActive = ref(false);
const setNavBarActive = (active) => {
    if (!active) {
        document.body.style.overflowY = "scroll";
    }
    else {
        document.body.style.overflowY = "hidden";
    }
    navBarActive.value = active;
}
</script>

<template>
    <NavBar v-if="navBarActive" :setNavBarActive="setNavBarActive" :chatId="chatId"/>
    <div class="navbar shadow-sm">
        <div class="w-100 d-flex justify-content-between align-items-center">
            <div class="menu-icon" @click="setNavBarActive(true)">
                <font-awesome-icon :icon="['fasl', 'bars']" />
            </div>
            <div class="navbar_content_logo">
                <img :src="imgUrl" alt="Logo" style="width:50px;" @click="clickLogoHandle">
            </div>
            <div class="cart-icon" @click="clickTrolleyHandle">
                <i class="fa-solid fa-bag-shopping"></i>
                <span v-if="trolley.length" class="cart-item-count">{{ trolley.length }}</span>
            </div>
        </div>
    </div>
    <!--<div class="separator-nav"></div>-->
</template>

<style scoped>
.menu-icon {
    font-size: 30px;
    color: black;
    text-align: center;
    right: 0;
    cursor: pointer;
}

.navbar_content_logo {
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
    padding-left: 20px;
    padding-right: 20px;
}

/* Navbar logo */
.navbar img {}

/* Navbar cart icon */
.navbar .cart-icon {
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
    right: -7px;
    top: 0px;
    text-align: center;
}
</style>
