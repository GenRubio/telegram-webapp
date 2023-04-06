<script setup>
const props = defineProps([
    "trans",
]);

</script>

<template>
    <div class="orders-not-found">
        <div class="orders-not-found_container shadow">
            {{ trans('65258a0f-86cd-4e16-bacf-5e5fd305b9b1') }}
        </div>
    </div>
</template>

<style scoped>
.button-home {
    text-decoration: underline;
    cursor: pointer;
}

.orders-not-found_container {
    border: 1px solid rgb(236, 234, 234);
    padding: 20px;
    margin-top: 30px;
    text-align: center;
    font-weight: bold;
}

.orders-not-found {
    padding: 0px 20px;
    background-color: #ffffff;
}
</style>
