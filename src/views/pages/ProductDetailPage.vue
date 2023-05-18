<script setup>
import Spinner from "../components/Spinner.vue";
import { useRoute } from "vue-router";
import ProductDetailSlider from "../components/ProductDetailPage/ProductDetailSlider.vue";
import ProductDetailHeader from "../components/ProductDetailPage/ProductDetailHeader.vue";
import ProductDetailSpecifications from "../components/ProductDetailPage/ProductDetailSpecifications.vue";
import ProductDetailAccordion from "../components/ProductDetailPage/ProductDetailAccordion.vue";
import ProductDetailFlavors from "../components/ProductDetailPage/ProductDetailFlavors.vue";
import Separator from "../components/Separator.vue";
import Footer from "../utils/Footer.vue";
import HeaderPages from "../utils/HeaderPages.vue";
import Breadcrumb from "../utils/Breadcrumb.vue";
import { getProductDetailApi } from "../../api/getProductDetailApi";
import { useWebMiddleware } from "../../middlewares/webMiddleware";

const route = useRoute();
const chatId = route.params.chat;
const productReference = route.params.product;
const { validateClient } = useWebMiddleware();
validateClient(chatId);

const { product, loadingProduct, getProduct } = getProductDetailApi();
getProduct(chatId, productReference);

window.scrollTo(0, 0);
</script>

<template>
  <HeaderPages :chatId="chatId" />
  <Spinner v-if="loadingProduct" />
  <div v-else class="content">
    <Breadcrumb :chatId="chatId" />
    <ProductDetailHeader :product="product" />
    <div class="product-detail-page_product_image shadow-sm">
      <ProductDetailSlider :product="product" />
    </div>
    <ProductDetailSpecifications :data="product.product.description.data" />
    <ProductDetailFlavors
      :product="product.product"
      :flavors="product.flavors"
    />
    <ProductDetailAccordion
      :product="product.product"
      :valorations="product.valorations"
      :chatId="chatId"
    />
    <Separator />
  </div>
  <Footer v-if="!loadingProduct" />
</template>

<style scoped>
.content {
  padding-top: 70px;
}
.product-detail-page_product_image {
  background-color: #f6f6f6;
}
</style>
