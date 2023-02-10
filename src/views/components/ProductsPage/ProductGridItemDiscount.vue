<script setup>
defineProps([
    "discount"
]);
</script>

<template>
    <div class="discount-icon_container">
        <div class="discount-icon_container_price">
            -{{ discount }}%
        </div>
    </div>
</template>

<style scoped>
.discount-icon_container {
    margin-top: 7px;
    margin-right: 4px;
    position: absolute;
    top: 0;
    right: 0;
}

.discount-icon_container_price {
    background-color: #e50914;
    padding: 0 10px;
    border-radius: 8px;
    margin-right: 5px;
    font-size: 13px;
    color: whitesmoke;
    font-weight: bold;
}
</style>
