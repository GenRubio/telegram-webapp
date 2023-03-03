<script setup>
import { useTranslationsStore } from '../../../store/translations.store';

const { trans } = useTranslationsStore();
</script>

<template>
    <div class="products-not-found_container d-flex justify-content-center shadow">
       {{ trans('2a9a1ad5-f272-4b6a-805b-a45e73f34232') }}
    </div>
</template>

<style scoped>
.products-not-found_container {
   margin-top: 20px;
   border: 1px solid rgb(189, 186, 186);
   margin-left: 20px;
   margin-right: 20px;
   padding: 15px;
   color: grey;
}
</style>