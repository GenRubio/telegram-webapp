<script setup>
import axios from "axios";
import { ref, onMounted } from "vue";
import Spinner from "../components/Spinner.vue";
import { useRoute } from "vue-router";
import ProductDetailSlider from "../components/ProductDetailPage/ProductDetailSlider.vue";
import ProductDetailHeader from "../components/ProductDetailPage/ProductDetailHeader.vue";
import ProductDetailSpecifications from "../components/ProductDetailPage/ProductDetailSpecifications.vue";
import ProductDetailAccordion from "../components/ProductDetailPage/ProductDetailAccordion.vue";
import ProductDetailFlavors from "../components/ProductDetailPage/ProductDetailFlavors.vue";
import ProductDetailFooterAlerts from "../components/ProductDetailPage/ProductDetailFooterAlerts.vue";
import Separator from "../components/Separator.vue";
import Footer from "../utils/Footer.vue";
import HeaderPages from "../utils/HeaderPages.vue";
import Breadcrumb from "../utils/Breadcrumb.vue";
import LastViewedProducts from "../components/LastViewedProducts.vue";
import { useLastViewsStore } from "../../store/last-views.store";
import { useUtilsStore } from "../../store/utils.store";
import { useWebMiddleware } from "../../middlewares/webMiddleware";

const route = useRoute();
const chatId = route.params.chat;
const productReference = ref(route.params.product);
const { validateClient } = useWebMiddleware();
validateClient(chatId);

const { api } = useUtilsStore();
const { addLastViewProduct, getLastViewedProducts } = useLastViewsStore();
const product = ref(null);
const loadingProduct = ref(true);

onMounted(() => {
  getProduct();
});
const getProduct = () => {
  loadingProduct.value = true;
  product.value = null;

  axios
    .get(api + chatId + "/product/" + productReference.value)
    .then((response) => {
      if (response.data.error) {
        console.log("error", response.data.error);
      } else {
        product.value = response.data;
        addLastViewProduct(response.data.product);
        loadingProduct.value = false;
      }
    })
    .catch((errors) => {
      loadingProduct.value = false;
    });
};

const loadNewProduct = (reference) => {
  productReference.value = reference;
  getProduct();
  window.scrollTo(0, 0);
};

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
    <ProductDetailFooterAlerts />
    <LastViewedProducts
      :chatId="chatId"
      :product="product.product"
      :getLastViewedProducts="getLastViewedProducts"
      :loadNewProduct="loadNewProduct"
      :newProducts="product.new_products"
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
