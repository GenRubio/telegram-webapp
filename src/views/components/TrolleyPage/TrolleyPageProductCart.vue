<script setup>
import { ref } from 'vue';
import ImageCup from '../../utils/ImageCup.vue';
import { useUserTrolleyStore } from '../../../store/trolley-user.store';

const props = defineProps([
    "flavor",
]);
const { removeFlavorFromTrolley, changeFlavorAmount, getFlavorTotalPrice } = useUserTrolleyStore();

const removeFlavor = (flavor) => {
    removeFlavorFromTrolley(flavor);
}
const changeFlavorAmountHandle = (event) => {
    let value = event.target.value;
    changeFlavorAmount(props.flavor, value);
}
const getMaxSelectValues = ref(() => {
    if (props.flavor.stock > 10) {
        return 10;
    }
    return props.flavor.stock;
});
</script>

<template>
    <div class="trolley-page-product-cart_container shadow-sm">
        <div class="cart_sections">
            <div>
                <ImageCup :image="flavor.image" imagePosition="center" />
            </div>
            <div class="trolley-page-product-cart_container_description">
                <div v-if="flavor.product_model.multiple_flavors">
                    <div class="model-title">
                        {{ flavor.product_model.name }} <span class="model-title_brand">({{
                            flavor.product_model.brand
                        }})</span>
                    </div>
                    <div class="flavor-title">
                        {{ flavor.name }}
                    </div>
                </div>
                <div v-else>
                    <div class="model-title-2">
                        {{ flavor.product_model.name }}
                    </div>
                </div>
            </div>
            <div class="trolley-page-product-cart_container_select">
                <div class="trolley-page-product-cart_container_select_container">
                    <select class="form-select" @change="changeFlavorAmountHandle">
                        <option v-for="number in getMaxSelectValues()" :value="number"
                            :selected="number == flavor.amount">
                            {{ number }}
                        </option>
                    </select>
                </div>
            </div>
            <div class="trolley-page-product-cart_container_price">
                <div>
                    {{ getFlavorTotalPrice(flavor) }} €
                </div>
            </div>
            <div class="trolley-page-product-cart_remove" @click="removeFlavor(flavor)">
                <i class="fa-solid fa-xmark"></i>
            </div>
        </div>
    </div>
</template>

<style scoped>
.form-select:focus{
    border-color: black;
    box-shadow: 0 0 0 0.25rem rgba(0, 0, 0, 0.25);
}
.trolley-page-product-cart_remove {
    position: absolute;
    right: 0;
    margin-top: -15px;
    margin-right: -5px;
    font-size: 20px;
    color: rgb(173, 172, 172);
    cursor: pointer;
}

.trolley-page-product-cart_container_select_container {
    width: 100% !important;
}

.trolley-page-product-cart_container_price {
    display: flex;
    align-items: center;
    justify-content: end;
    font-size: 18px;
}

.flavor-title {
    font-size: 11px;
}

.model-title-2{
    font-size: 13px;
    font-weight: bold;
}

.model-title {
    font-weight: bold;
}


.model-title_brand {
    font-size: 12px;
}

.trolley-page-product-cart_container_select {
    display: flex;
    align-items: center;
}

.trolley-page-product-cart_container_description {
    display: flex;
    align-items: center;
    padding: 3px;
}

.cart_sections {
    display: grid;
    grid-template-columns: 20% 35% 25% 20%;
    position: relative;
}

.trolley-page-product-cart_container {
    border: 1px solid rgb(236, 234, 234);
    padding: 15px 15px 15px 10px;
}
</style>
