<script setup>
import { ref } from 'vue';
const props = defineProps(["stars"]);

const rating = ref(props.stars);
</script>

<template>
    <vue3-star-ratings v-model="rating" :showControl="false" :disableClick="true" starSize="13" inactiveColor="#cccccc" starColor="#333"/>
</template>

<style scoped>
.vue3-star-ratings__wrapper{
    padding: 0;
    margin: 0;
}
</style>
