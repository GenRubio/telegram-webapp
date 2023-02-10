<script setup>
defineProps([
    "image",
    "imagePosition",
]);
</script>

<template>
    <div class="image-cube_image">
        <div class="image-cube_image_content" v-bind:style="{
            'background-image': 'url(' + image + ')',
            'background-repeat': 'no-repeat',
            'background-size': 'contain',
            'background-position': imagePosition
        }">
        </div>
    </div>
</template>

<style scoped>
.image-cube_image {
    position: relative;
    width: 100%;
    border-radius: 7px;
}

.image-cube_image:after {
    content: "";
    display: block;
    padding-bottom: 100%;
}

.image-cube_image_content {
    position: absolute;
    width: 100%;
    height: 100%;
}
</style>