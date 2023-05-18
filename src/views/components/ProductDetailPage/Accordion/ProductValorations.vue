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
console.log(props.valorations);
</script>

<template>
  <div class="accordion-item">
    <div class="accordion-personal-button" @click="openAccordionHandle">
      <div>
        <b
          >{{ trans("0ae8f717-313a-4add-8967-00b3528f38de") }} ({{
            valorations.length
          }})</b
        >
      </div>
      <div v-if="!accordionOpened">
        <div class="d-flex">
          <div>
            <ProductDetailStars :stars="product.valoration_mean" />
          </div>
          <div class="arrow-accordion">
            <i class="fa-solid fa-chevron-up"></i>
          </div>
        </div>
      </div>
      <div v-if="accordionOpened">
        <div class="d-flex">
          <div>
            <ProductDetailStars :stars="product.valoration_mean" />
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
            <ProductDetailStars :stars="product.valoration_mean" />
          </div>
          <div class="accordion-write-validation-section_valorations_text">
            {{ product.valoration_mean }}
            {{ trans("7ac33e0d-1076-47d2-b38d-c5372fe1a10a") }}
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
        <div v-else class="valoration-user-section">
          <div
            v-for="valoration in valorations.filter((valoration) => {
              return valoration.visible;
            })"
            class="valoration-user-container shadow-sm"
          >
            <div class="d-flex justify-content-between">
              <div>
                <ProductDetailStars :stars="valoration.stars" />
              </div>
              <div class="valoration-date">
                {{ valoration.created_at }}
              </div>
            </div>
            <div class="valoration-user-container_text">
              {{ valoration.comment }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.valoration-user-container_text{
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
