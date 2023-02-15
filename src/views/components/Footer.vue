

<script setup>

</script>

<template>
    <div id="footer" class="footer shadow-top border">
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
                © Copyright 2023
            </div>
        </div>
    </div>
</template>

<style scoped>
.social-item-container {
    width: 40px;
    height: 40px;
    background-color: #2f2f2f;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
}

.social-item-container i {
    font-size: 24px;
    color: #333;
}

.social-container {
    padding-top: 10px;
    padding-bottom: 10px;
}

.footer hr {
    padding: 0;
    margin: 0;
}

.footer {
    position: sticky;
    top: 100%;
    padding: 10px;
    background-color: rgba(0, 0, 0, 0.683);
    color: aliceblue;
}

.footer-margin {
    padding-bottom: 60px;
}
.copyright-container {
    padding: 5px;
}

.shadow-top {
    box-shadow: 0 -10px 10px -10px rgba(164, 164, 164, 0.604);
}
</style>
