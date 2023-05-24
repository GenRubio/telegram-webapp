<script setup>
import { ref } from "vue";
import { useTranslationsStore } from "../../../../store/translations.store";

const props = defineProps(["product"]);
const { trans } = useTranslationsStore();
const accordionOpened = ref(false);
const openAccordionHandle = () => {
  let content = document.getElementById("accordion-description");
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
        <b>{{ trans('342dc706-5a68-4007-a143-45b6778bb4f0') }}</b>
      </div>
      <div v-if="!accordionOpened">
        <div class="d-flex">
          <div></div>
          <div class="arrow-accordion">
            <i class="fa-solid fa-chevron-up"></i>
          </div>
        </div>
      </div>
      <div v-if="accordionOpened">
        <div class="d-flex">
          <div></div>
          <div class="arrow-accordion">
            <i class="fa-solid fa-chevron-down"></i>
          </div>
        </div>
      </div>
    </div>
    <hr v-if="!accordionOpened" />
    <div id="accordion-description" class="accordion-content">
      <div
        class="accordion-personal-body"
        v-html="product.product_description"
      ></div>
    </div>
  </div>
</template>

<style scoped>
.valoration-user-container_text {
  margin-top: 5px;
}
.valoration-date {
  margin-top: 2px;
}
.valoration-user-section {
  margin-bottom: 15px;
}
.valoration-user-container {
  border: 1px solid rgb(204, 204, 204);
  padding: 10px;
  border-radius: 3px;
  background-color: rgba(255, 255, 255, 0.638);
  font-size: 15px;
  margin-bottom: 7px;
}
.accordion-write-validation-section_button {
  text-decoration: underline;
  margin-bottom: 20px;
  cursor: pointer;
}
.accordion-write-validation-section_description_text {
  margin-left: 10px;
  margin-top: 2px;
}
.accordion-write-validation-section_description {
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
