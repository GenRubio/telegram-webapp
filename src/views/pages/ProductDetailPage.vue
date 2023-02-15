<script setup>
import Spinner from '../components/Spinner.vue';
import { useRoute } from "vue-router";
import axios from 'axios';
import { ref } from "vue";
import ImageCup from '../../views/utils/ImageCup.vue';
import ProductDetailSlider from '../components/ProductDetailPage/ProductDetailSlider.vue';
import ProductDetailHeader from '../components/ProductDetailPage/ProductDetailHeader.vue';
import ProductDetailSpecifications from '../components/ProductDetailPage/ProductDetailSpecifications.vue';
import ProductDetailAccordion from '../components/ProductDetailPage/ProductDetailAccordion.vue';
import ProductDetailFlavors from '../components/ProductDetailPage/ProductDetailFlavors.vue';
import Separator from '../components/Separator.vue'; 
import Footer from '../components/Footer.vue';
import HeaderPages from '../utils/HeaderPages.vue';
import Breadcrumb from '../utils/Breadcrumb.vue';
import { useUtilsStore } from '../../store/utils.store';
import { useWebMiddleware } from '../../middlewares/webMiddleware';

const route = useRoute();
const chatId = route.params.chat;
const productReference = route.params.product;
const product = ref(null);
const { validateClient } = useWebMiddleware();
validateClient(chatId);

const getProduct = async (chatId, productReference) => {
     try {
          const { api } = useUtilsStore();
          const { data } = await axios.get(api + chatId + "/product/" + productReference);
          if (data.error) {
               console.log(data.error)
          }
          else {
               product.value = data;
          }
     }
     catch (error) {
          console.log(error)
     }
};
getProduct(chatId, productReference);
window.scrollTo(0, 0);
</script>

<template>
     <HeaderPages :chatId="chatId" />
     <Spinner v-if="product === null" />
     <div v-else>
          <Breadcrumb :chatId="chatId" />
          <ProductDetailHeader :product="product" />
          <div class="product-detail-page_product_image shadow-sm">
               <!--<ImageCup :image="product.product.image" imagePosition="center" />-->
               <ProductDetailSlider :product="product"/>
          </div>
          <ProductDetailSpecifications :data="product.product.description.data" />
          <ProductDetailFlavors :flavors="product.flavors" />
          <ProductDetailAccordion :data="product.product.description.data" />
          <Separator />
     </div>
     <Footer />
</template>

<style scoped>
.product-detail-page_product_image {
     background-color: #f6f6f6;
}
</style>
