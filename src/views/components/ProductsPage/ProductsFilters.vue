<script setup>
import { ref } from "vue";
import ProductsFilterPage from "../../components/ProductsPage/ProductsFilterPage.vue";
import { useTranslationsStore } from '../../../store/translations.store';
const props = defineProps([
    "products",
    "filter",
    "chatId",
    "getProducts",
]);
const { trans } = useTranslationsStore();
const menuActive = ref(false);

const setMenuStatus = (active) => {
    if (!active) {
        document.body.style.overflowY = "scroll";
    }
    else {
        document.body.style.overflowY = "hidden";
    }
    menuActive.value = active;
}
</script>

<template>
    <div class="products-filters_section">
        <div class="products-filters_section_title">
            {{ products.length }} {{ trans('d6e0081d-a4b9-4946-b873-1fbe05f8b282') }}
        </div>
        <div>
            <div class="products-filters_section_button" @click="setMenuStatus(true)">
                {{ trans('937e35af-4edc-4625-9239-2601e3af1ecf') }} <i class="fa-solid fa-filter"></i>
            </div>
        </div>
    </div>
    <div :class="'filter-container ' + (menuActive ? 'show' : '')">
        <ProductsFilterPage :setMenuStatus="setMenuStatus" :menuActive="menuActive" :filter="filter" :chatId="chatId"
            :getProducts="getProducts" />
    </div>
</template>

<style scoped>
.products-filters_section_title {
    color: #848383;
    font-size: 20px;
}

.products-filters_section_button {
    border: 2px solid #cccccc;
    padding: 5px 20px;
    border-radius: 20px;
    cursor: pointer;
    z-index: 1;
}

.products-filters_section {
    display: flex;
    justify-content: space-between;
    padding: 15px 20px;
    align-items: center;
    background-color: #ffffff;
}

.filter-container {
    position: fixed;
    bottom: -100%;
    /* Set the initial position */
    height: 100%;
    width: 100%;
    background-color: #fff;
    transition: bottom 0.3s ease-out;
    z-index: 2;
    /* Add transition for animation */
}

.filter-container.show {
    bottom: 0;
}
</style>