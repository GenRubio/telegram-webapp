

<script setup>
import { useTranslationsStore } from '../../store/translations.store';

const { trans } = useTranslationsStore();
</script>

<template>
    <div id="footer" class="footer">
        <div class="social-container d-flex justify-content-center">
            <div class="d-flex">
                <div class="m-1 social-item-container">
                    <i class="fa-brands fa-instagram"></i>
                </div>
                <div class="m-1 social-item-container">
                    <i class="fa-brands fa-facebook"></i>
                </div>
                <div class="m-1 social-item-container">
                    <i class="fa-brands fa-telegram"></i>
                </div>
                <div class="m-1 social-item-container">
                    <i class="fa-brands fa-youtube"></i>
                </div>
                <div class="m-1 social-item-container">
                    <i class="fa-brands fa-tiktok"></i>
                </div>
            </div>
        </div>
        <hr>
        <div class="copyright-container d-flex justify-content-center">
            <div>
                {{ trans('0325edab-0f32-4c2f-b26b-26d6cd782b03') }}
            </div>
        </div>
    </div>
</template>

<style scoped>
.social-item-container {
    width: 40px;
    height: 40px;
    background-color: #474646;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #ffffff;
}

.social-item-container i {
    font-size: 24px;
    color: #ffffff;
}
.footer hr {
    padding: 0;
    margin: 0;
}

.footer {
    position: sticky;
    top: 100%;
    background-color: rgb(28, 27, 27);
    color: rgba(250, 250, 250, 0.574);
    box-shadow: 0px -2px 5px 0px rgba(93, 93, 93, 0.75);
}

.copyright-container {
    padding: 10px;
}

.social-container {
    padding-top: 15px;
    padding-bottom: 15px;
}

</style>
