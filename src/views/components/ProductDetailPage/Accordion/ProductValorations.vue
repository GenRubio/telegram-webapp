<script setup>
import { ref } from "vue";
import ProductDetailStars from "../../ProductDetailPage/ProductDetailStars.vue";
import { useTranslationsStore } from "../../../../store/translations.store";

const props = defineProps(["product", "openValorationModal", "valorations"]);
const { trans } = useTranslationsStore();
const accordionOpened = ref(false);
const openAccordionHandle = () => {
  let content = document.getElementById("accordion-valorations");
  if (content && content.style.maxHeight) {
    accordionOpened.value = false;
    content.style.maxHeight = null;
  } else if (content) {
    accordionOpened.value = true;
    content.style.maxHeight = content.scrollHeight + "px";
  }
};
</script>

<template>
  <div class="accordion-item">
    <div class="accordion-personal-button" @click="openAccordionHandle">
      <div>
        <b>{{ trans("0ae8f717-313a-4add-8967-00b3528f38de") }} ({{ valorations.length }})</b>
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
    <hr v-if="!accordionOpened" />
    <div id="accordion-valorations" class="accordion-content">
      <div class="accordion-write-validation-section">
        <div class="accordion-write-validation-section_valorations">
          <div>
            <ProductDetailStars />
          </div>
          <div class="accordion-write-validation-section_valorations_text">
            5 {{ trans("7ac33e0d-1076-47d2-b38d-c5372fe1a10a") }}
          </div>
        </div>
        <div
          v-if="product.user.bought && !product.user.has_valoration"
          class="accordion-write-validation-section_button"
          @click="openValorationModal"
        >
          {{ trans("c47cc752-c476-4332-98f7-9409973d1987") }}
        </div>
      </div>
      <div class="accordion-personal-body">
        <div
          v-if="valorations.length == 0"
          class="accordion-personal-body_results_not_found"
        >
          {{ trans("44b9b649-6f37-475e-a597-baec75888a6d") }}
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.accordion-write-validation-section_button {
  text-decoration: underline;
  margin-bottom: 20px;
  cursor: pointer;
}
.accordion-write-validation-section_valorations_text {
  margin-left: 10px;
  margin-top: 2px;
}
.accordion-write-validation-section_valorations {
  display: flex;
  margin-bottom: 15px;
}
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
