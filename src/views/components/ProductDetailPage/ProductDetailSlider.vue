<template>
    <Carousel v-if="images.length > 1">
        <Slide v-for="(item, index) in images" :index="index">
            <ImageCup :image="item.url" imagePosition="center" />
        </Slide>
        <template #addons>
            <Navigation />
        </template>
    </Carousel>
    <div v-else>
        <ImageCup :image="images[0].url" imagePosition="center" />
    </div>
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
    data() {
        let index = 1;
        let images = [];
        images.push({
            id: index,
            url: this.product.product.image
        });
        this.product.product.gallery.forEach(function (element) {
            index++;
            images.push({
                id: index,
                url: element.image
            });
        });
        return {
            images: images
        }
    }
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