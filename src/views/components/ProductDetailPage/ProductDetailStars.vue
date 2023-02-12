<script setup>
import { ref } from 'vue';

const rating = ref(0);
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
