<script setup>
import { ref, onMounted } from "vue";
import ProductSpecifications from "../ProductDetailPage/Accordion/ProductSpecifications.vue";
import ProductValorations from "../ProductDetailPage/Accordion/ProductValorations.vue";
import { Modal } from "bootstrap";
import ValorationModal from "../ProductDetailPage/Modals/ValorationModal.vue";
const props = defineProps(["product", "valorations", "chatId"]);
const valorationModal = ref(null);
onMounted(() => {
  valorationModal.value = new Modal("#valoration-modal", {});
});
function openValorationModal() {
  valorationModal.value.show();
}
function closeValorationModal() {
  valorationModal.value.hide();
}
</script>

<template>
  <ValorationModal
    :product="product"
    :closeValorationModal="closeValorationModal"
    :chatId="chatId"
    :valorations="valorations"
  />
  <div class="product-detail-accordion_container">
    <ProductSpecifications :data="product.description.data" />
    <ProductValorations
      :product="product"
      :openValorationModal="openValorationModal"
      :valorations="valorations"
    />
  </div>
</template>

<style scoped>
.product-detail-accordion_container {
  padding-top: 10px;
  padding-left: 20px;
  padding-right: 20px;
}
</style>
