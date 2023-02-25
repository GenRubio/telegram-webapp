<script setup>
import Separator from '../../components/Separator.vue';
import { useBrandsStore } from '../../../store/brands.store';
const props = defineProps([
    "setMenuStatus",
    "menuActive",
    "filter",
    "chatId",
    "getProducts"
]);
const { brands } = useBrandsStore();
const filterHandle = () => {
    props.setMenuStatus(false);
    props.getProducts(props.chatId, props.filter)
}
</script>

<template>
    <div class="filter-container_header">
        <div class="filter-container_content_header shadow-sm d-flex justify-content-between">
            <div class="filter-container_content_header_title">
                Filtrar por
            </div>
            <div class="filter-container_content_header_close" @click="setMenuStatus(false)">
                <i class="fa-solid fa-circle-xmark"></i>
            </div>
        </div>
    </div>
    <div class="filter-container_content overflow-auto h-100">
        <div class="filter-container_content_item">
            <div class="filter-container_content_item_title">
                Ordenar por
            </div>
            <div class="filter-container_content_item_content">
                <div class="form-check">
                    <input v-model="filter.order_by" class="form-check-input" type="radio" value="price_asc"
                        :checked="filter.order_by == 'price_asc'">
                    <label class="form-check-label">
                        PRECIO (DE MENOR A MAYOR)
                    </label>
                </div>
                <div class="form-check">
                    <input v-model="filter.order_by" class="form-check-input" type="radio" value="price_desc"
                        :checked="filter.order_by == 'price_desc'">
                    <label class="form-check-label">
                        PRECIO (DE MAYOR A MENOR)
                    </label>
                </div>
                <div class="form-check">
                    <input v-model="filter.order_by" class="form-check-input" type="radio" value="the_most_sold"
                        :checked="filter.order_by == 'the_most_sold'">
                    <label class="form-check-label">
                        LOS MÁS VENDIDOS
                    </label>
                </div>
            </div>
        </div>
        <hr>
        <div class="filter-container_content_item">
            <div class="filter-container_content_item_title">
                NICOTINA
            </div>
            <div class="filter-container_content_item_content">
                <div class="form-check">
                    <input v-model="filter.nicotine" class="form-check-input" type="radio" value="all"
                        :checked="filter.nicotine == 'all'">
                    <label class="form-check-label">
                        2% - 5%
                    </label>
                </div>
                <div class="form-check">
                    <input v-model="filter.nicotine" class="form-check-input" type="radio" value="2"
                        :checked="filter.nicotine == '2'">
                    <label class="form-check-label">
                        2%
                    </label>
                </div>
                <div class="form-check">
                    <input v-model="filter.nicotine" class="form-check-input" type="radio" value="3"
                        :checked="filter.nicotine == '3'">
                    <label class="form-check-label">
                        5%
                    </label>
                </div>
            </div>
        </div>
        <hr>
        <div class="filter-container_content_item">
            <div class="filter-container_content_item_title">
                MARCAS
            </div>
            <div class="filter-container_content_item_content">
                <div v-for="brand in brands" class="form-check">
                    <input v-model="filter.brands" class="form-check-input" type="checkbox" :id="brand.id"
                        :value="brand.id">
                    <label class="form-check-label">
                        {{ brand.name }}
                    </label>
                </div>
            </div>
        </div>
    </div>
    <Separator />
    <div v-if="menuActive" class="filter-button" @click="filterHandle">
        APLICAR
    </div>
</template>

<style scoped>
.form-check-input:checked {
    background-color: black !important;
    border-color: black !important;
}

.form-check-input:focus {
    box-shadow: 0 0 0 0.25rem rgba(0, 0, 0, 0.25);
}

.filter-container_header {}

.filter-container_content_item_title {
    text-transform: uppercase;
    font-weight: bold;
    margin-bottom: 10px;
}

.filter-button {
    background-color: rgb(28, 27, 27);
    color: white;
    width: 100%;
    position: fixed;
    bottom: 0;
    z-index: 20;
    cursor: pointer;
    display: flex;
    justify-content: center;
    font-size: 20px;
    padding: 15px;
    box-shadow: 0px -2px 5px 0px rgba(93, 93, 93, 0.75);
    border: 1px solid black;
}

.filter-container_content {
    padding: 20px 20px;
}

.filter-container_content_header_close {
    font-size: 30px;
}

.filter-container_content_header {
    padding: 10px 20px;
    align-items: center;
}

.filter-container_content_header_title {
    text-transform: uppercase;
    font-weight: bold;
    font-size: 19px;
}
</style>