<script setup>
import Separator from '../../components/Separator.vue';
import { useBrandsStore } from '../../../store/brands.store';
import { useTranslationsStore } from '../../../store/translations.store';
const props = defineProps([
    "setMenuStatus",
    "menuActive",
    "filter",
    "chatId",
    "getProducts"
]);
const { brands } = useBrandsStore();
const { trans } = useTranslationsStore();
const filterHandle = () => {
    props.setMenuStatus(false);
    props.getProducts(props.chatId, props.filter)
}
</script>

<template>
    <div class="filter-container_header">
        <div class="filter-container_content_header shadow-sm d-flex justify-content-between">
            <div class="filter-container_content_header_title">
                {{ trans('3291353d-ff8d-4325-a3ab-2f51e856d8a7') }}
            </div>
            <div class="filter-container_content_header_close" @click="setMenuStatus(false)">
                <i class="fa-solid fa-circle-xmark"></i>
            </div>
        </div>
    </div>
    <div class="filter-container_content overflow-auto h-100">
        <div class="filter-container_content_item">
            <div class="filter-container_content_item_title">
                {{ trans('3783bfc4-616c-4042-b44f-b5d5fb9c6b2f') }}
            </div>
            <div class="filter-container_content_item_content">
                <div class="form-check">
                    <input v-model="filter.order_by" class="form-check-input" type="radio" value="price_asc"
                        :checked="filter.order_by == 'price_asc'">
                    <label class="form-check-label">
                        {{ trans('3f4460fb-0dea-4baa-a205-3d59aed414b4') }}
                    </label>
                </div>
                <div class="form-check">
                    <input v-model="filter.order_by" class="form-check-input" type="radio" value="price_desc"
                        :checked="filter.order_by == 'price_desc'">
                    <label class="form-check-label">
                        {{ trans('dc31e8c1-211e-4f05-b635-5bbc92c5f0ad') }}
                    </label>
                </div>
            </div>
        </div>
        <hr>
        <div class="filter-container_content_item">
            <div class="filter-container_content_item_title">
                {{ trans('cb6a11fb-69e7-484c-9981-84dd26bbbbef') }}
            </div>
            <div class="filter-container_content_item_content">
                <div class="form-check">
                    <input v-model="filter.nicotine" class="form-check-input" type="radio" value="all"
                        :checked="filter.nicotine == 'all'">
                    <label class="form-check-label">
                        {{ trans('bac9e102-eeb8-4d6c-96be-df896a89f624') }} - {{
                            trans('5d92c118-3eb7-4a8e-afdf-28c6018d1819') }}
                    </label>
                </div>
                <div class="form-check">
                    <input v-model="filter.nicotine" class="form-check-input" type="radio" value="2"
                        :checked="filter.nicotine == '2'">
                    <label class="form-check-label">
                        {{ trans('bac9e102-eeb8-4d6c-96be-df896a89f624') }}
                    </label>
                </div>
                <div class="form-check">
                    <input v-model="filter.nicotine" class="form-check-input" type="radio" value="3"
                        :checked="filter.nicotine == '3'">
                    <label class="form-check-label">
                        {{ trans('5d92c118-3eb7-4a8e-afdf-28c6018d1819') }}
                    </label>
                </div>
            </div>
        </div>
        <hr>
        <div class="filter-container_content_item">
            <div class="filter-container_content_item_title">
                {{ trans('3bc47e27-368f-478b-8d61-756be0ad9131') }}
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
        {{ trans('5330ac7b-1963-4822-86c4-15d6f9b3c5f5') }}
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
    cursor: pointer;
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