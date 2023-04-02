<script setup>
const props = defineProps([
    "order",
]);
</script>

<template>
    <div class="order-grid-item_container shadow-sm">
        <div class="order-grid-item_container-header">
            <div>
                <b>Referencia</b>: {{ order.reference }}
            </div>
            <div>
                Fecha pedido: {{ order.created_at }}
            </div>
            <div>
                Total: {{ order.total_price }}€
            </div>
        </div>
        <div class="order-grid-item_container-content">
            <div>
                Ultima actualizacion: {{ order.updated_at }}
            </div>
            <div>
                <div class="status-order-container" :style="'background-color:' + order.history_states[0].data.color">
                    {{ order.history_states[0].text }}
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>

.status-order-container{
    padding: 5px;
    border-radius: 6px;
    text-align: center;
    color: white;
    font-weight: bold;
    text-transform: uppercase;
    margin-top: 10px;
}
.order-grid-item_container-content{
    padding: 5px;
}
.order-grid-item_container-header{
    background-color: #f0f2f2;
    padding: 5px;
    border-bottom: 1px solid rgb(190, 189, 189);
}
.order-grid-item_container{
    border: 1px solid rgb(210, 208, 208);
    border-radius: 6px;
    margin-bottom: 10px;
}
hr{
    margin: 0;
    padding: 0;
}
</style>
