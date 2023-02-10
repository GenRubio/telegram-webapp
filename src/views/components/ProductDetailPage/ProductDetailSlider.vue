<template>
    <Carousel>
        <Slide :index="1">
            <ImageCup :image="product.product.image" imagePosition="center" />
        </Slide>
        <Slide :index="2">
            <ImageCup :image="product.product.image" imagePosition="center" />
        </Slide>

        <template #addons>
            <Navigation />
        </template>
    </Carousel>
</template>

<script>
import { defineComponent } from 'vue'
import { Carousel, Navigation, Slide } from 'vue3-carousel';
import ImageCup from '../../../views/utils/ImageCup.vue';


export default defineComponent({
    name: 'Basic',
    components: {
        Carousel,
        Slide,
        ImageCup,
        Navigation,
    },
    props: ['product'],
})
</script>

<style>
.carousel__slide {
    padding: 10px;
}

.carousel__prev,
.carousel__next {
    box-sizing: content-box;
}
</style>