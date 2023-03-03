<script setup>
import { ref, onMounted } from 'vue';
import { useTranslationsStore } from '../../../../store/translations.store';
const props = defineProps([
    "data",
]);
const { trans } = useTranslationsStore();
const accordionOpened = ref(false);
const openAccordionHandle = () => {
    let content = document.getElementById("accordion-specifications");
    if (content.style.maxHeight) {
        accordionOpened.value = false;
        content.style.maxHeight = null;
    } else {
        accordionOpened.value = true;
        content.style.maxHeight = content.scrollHeight + "px";
    }
}
onMounted(() => {
    openAccordionHandle();
})
</script>

<template>
    <div class="accordion-item">
        <div class="accordion-personal-button" @click="openAccordionHandle">
            <div>
                <b>{{ trans('a12681c8-f159-472b-a428-8d0217701098') }}</b>
            </div>
            <div v-if="!accordionOpened">
                <i class="fa-solid fa-chevron-up"></i>
            </div>
            <div v-if="accordionOpened">
                <i class="fa-solid fa-chevron-down"></i>
            </div>
        </div>
        <hr>
        <div id="accordion-specifications" class="accordion-content">
            <div class="accordion-personal-body">
                <ul>
                    <li v-for="item in data">{{ item.name }}: <b>{{
                        item.value != null ? item.value : '- '
                    }}</b>{{ item.simbol ? item.simbol : '' }}</li>
                </ul>
            </div>
        </div>
    </div>
</template>

<style scoped>
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
