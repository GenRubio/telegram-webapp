<script setup>
import ImageCube from '../../utils/ImageCup.vue';

const props = defineProps([
    "data",
]);

</script>

<template>
    <div class="product-detail-specifications_container">
        <div v-for="item in data.filter(description => description.has_images === true && description.value != null)"
            class="product-detail-specifications_container_item">
            <div class="product-detail-specifications_container_item_image">
                <ImageCube :image="item.image" imagePosition="center" />
            </div>
            <div class="text-center">
                <b>{{ item.value }}</b>{{ item.simbol ? item.simbol : '' }}
            </div>
        </div>
    </div>
</template>

<style scoped>
.product-detail-specifications_container_item_image {
    background-color: #cdcdcd;
    margin: 5px;
    border-radius: 18px;
}

.product-detail-specifications_container_item {
    flex: 0 0 calc(30% - 20px);
}

.product-detail-specifications_container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    padding: 20px 20px;
}
</style>
