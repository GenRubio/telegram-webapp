<script setup>
const props = defineProps([
    "text",
]);
</script>

<template>
    <div class="black-info-alert">
        <div class="black-info-alert_container">
            <div>
                <i class="fa-solid fa-circle-exclamation"></i>
            </div>
            <div class="black-info-alert_container_text">
                {{ text }}
            </div>
        </div>
    </div>
</template>

<style scoped>
.black-info-alert_container_text {
    margin-left: 7px;
    font-size: 15px;
}

.black-info-alert_container {
    background-color: rgba(0, 0, 0, 0.683);
    color: whitesmoke;
    padding: 10px;
    display: flex;
}

.black-info-alert{
    padding: 0px 20px;
}
</style>
