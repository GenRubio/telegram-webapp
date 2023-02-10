<script setup>
import { ref } from "vue";
const props = defineProps([
    "products",
]);
const menuActive = ref(false);

const setMenuStatus = (active) => {
    menuActive.value = active;
}
</script>

<template>
    <div class="products-filters_section">
        <div class="products-filters_section_title">
            {{ products.length }} Resultados
        </div>
        <div>
            <div class="products-filters_section_button" @click="setMenuStatus(true)">
                Filtros <i class="fa-solid fa-filter"></i>
            </div>
        </div>
    </div>
    <div :class="'filter-container ' + (menuActive ? 'show' : '')">
        <div class="filter-container_content">
            <div class="filter-container_content_header d-flex justify-content-end">
                <div class="filter-container_content_header_close" @click="setMenuStatus(false)">
                    <i class="fa-solid fa-circle-xmark"></i>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.filter-container_content_header_close{
    font-size: 30px;
}

.filter-container_content {
    padding: 10px 20px;
}

.products-filters_section_title {
    color: #848383;
    font-size: 20px;
}

.products-filters_section_button {
    border: 2px solid #cccccc;
    padding: 5px 20px;
    border-radius: 20px;
}

.products-filters_section {
    display: flex;
    justify-content: space-between;
    padding: 15px 20px;
    align-items: center;
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