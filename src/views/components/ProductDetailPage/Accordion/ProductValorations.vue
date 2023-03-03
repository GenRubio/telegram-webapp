<script setup>
import { ref } from 'vue';
import ProductDetailStars from '../../ProductDetailPage/ProductDetailStars.vue';
import { useTranslationsStore } from '../../../../store/translations.store';
const props = defineProps([
    "data",
]);
const { trans } = useTranslationsStore();
const accordionOpened = ref(false);
const openAccordionHandle = () => {
    let content = document.getElementById("accordion-valorations");
    if (content.style.maxHeight) {
        accordionOpened.value = false;
        content.style.maxHeight = null;
    } else {
        accordionOpened.value = true;
        content.style.maxHeight = content.scrollHeight + "px";
    }
}

</script>

<template>
    <div class="accordion-item">
        <div class="accordion-personal-button" @click="openAccordionHandle">
            <div>
                <b>{{ trans('0ae8f717-313a-4add-8967-00b3528f38de') }} (0)</b>
            </div>
            <div v-if="!accordionOpened">
                <div class="d-flex">
                    <div>
                        <ProductDetailStars />
                    </div>
                    <div class="arrow-accordion">
                        <i class="fa-solid fa-chevron-up"></i>
                    </div>
                </div>
            </div>
            <div v-if="accordionOpened">
                <div class="d-flex">
                    <div>
                        <ProductDetailStars />
                    </div>
                    <div class="arrow-accordion">
                        <i class="fa-solid fa-chevron-down"></i>
                    </div>
                </div>
            </div>
        </div>
        <hr>
        <div id="accordion-valorations" class="accordion-content">
            <div class="accordion-personal-body">
                <div class="accordion-personal-body_results_not_found">
                    {{ trans('44b9b649-6f37-475e-a597-baec75888a6d') }}
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.arrow-accordion {
    padding-top: 3px;
    margin-left: 10px;
}

.accordion-personal-body_results_not_found {
    border: 1px solid rgb(211, 208, 208);
    padding: 15px;
    text-align: center;
    margin: 10px 0;
}

.accordion-item hr {
    margin: 5px 0;
}

.accordion-content {
    max-height: 0;
    overflow: hidden;
    transition: max-height 0.2s ease-out;
}

.accordion-personal-button {
    padding: 10px 0;
    transition: 0.4s;
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
}

ul {
    padding-left: 20px;
    padding-right: 20px;
}

.accordion-personal-body {
    padding-left: 0px;
    padding-right: 0px;
    border-bottom: 1px solid #c0c0c0;
}
</style>
