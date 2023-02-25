<script setup>
import { ref } from 'vue';
import { useUserTrolleyStore } from '../../../store/trolley-user.store';
import { useFooterHelper } from '../../../helpers/FooterHelper';
import Swal from 'sweetalert2';

const props = defineProps([
    "flavors",
]);
const searchText = ref("");
const showResults = ref(false);
const listFlavors = ref(props.flavors);
const selectedFlavors = ref([]);
const showAddButton = ref(false);
const { addFlavorToTrolley } = useUserTrolleyStore();
const { showFooter, hiddeFooter } = useFooterHelper();

const filteredList = () => {
    return listFlavors.value.filter((flavor) =>
        flavor.name.toLowerCase().includes(searchText.value.toLowerCase())
    );
}
const removeSelectFlavorHandle = (flavor) => {
    selectedFlavors.value.forEach(function (selectedFlavor, index) {
        if (selectedFlavor.reference == flavor.reference) {
            selectedFlavors.value.splice(index, 1);
        }
    });
    listFlavors.value.push(flavor);
    showAddButtonManager();
}
const selectFlavorHandle = (flavor) => {
    selectedFlavors.value.push(flavor);
    listFlavors.value.forEach(function (listFlavor, index) {
        if (listFlavor.reference == flavor.reference) {
            listFlavors.value.splice(index, 1);
        }
    });
    showResults.value = false;
    showAddButtonManager();
}
const showAddButtonManager = () => {
    if (selectedFlavors.value.length > 0) {
        showAddButton.value = true;
        hiddeFooter();
    }
    else {
        showAddButton.value = false;
        showFooter();
    }
}
const focusInputHandle = () => {
    showResults.value = true;
    showAddButton.value = false;
    showFooter();
    const element = document.getElementById("select-2");
    element.scrollIntoView();
}
const blurInputHandle = () => {
    if (selectedFlavors.value.length > 0) {
        showAddButton.value = true;
        hiddeFooter();
    }
}
const addFlavorsToTrolley = () => {
    selectedFlavors.value.forEach(function (selectedFlavor, index) {
        addFlavorToTrolley(selectedFlavor);
    });
    selectedFlavors.value.forEach(function (selectedFlavor, index) {
        listFlavors.value.push(selectedFlavor);
    });
    selectedFlavors.value = [];
    showAddButton.value = false;
    showFooter();
    Swal.fire({
        title: 'Carrito',
        text: 'Los productos se han añadido al carrito de compra correctamente.'
    });
}
</script>

<template>
    <div class="select-2_container">
        <div v-if="selectedFlavors.length" class="select-2_container_selected_container">
            <div class="flavor-titles">
                Sabores seleccionados ({{ selectedFlavors.length }}):
            </div>
            <div v-for="flavor in selectedFlavors" class="select-2_container_selected_container_item">
                <div>
                    {{ flavor.name }}
                </div>
                <div class="select-2_container_selected_container_item_remove" @click="removeSelectFlavorHandle(flavor)">
                    <i class="fa-solid fa-xmark"></i>
                </div>
            </div>
            <hr>
        </div>
        <div class="flavor-titles">
            {{ listFlavors.length }} Sabores:
        </div>
        <div class="select-2_container_input_container" id="select-2">
            <input v-model="searchText" class="form-control select-2_container_input shadow" type="text"
                placeholder="Buscar sabores..." @focus="focusInputHandle" @blur="blurInputHandle" />
        </div>
        <div class="select-2_container_result_container overflow-auto shadow" id="select-2_container_result_container">
            <div v-if="listFlavors.length">
                <div v-for="flavor in filteredList()" class="select-2_container_result_container_item"
                    @click="selectFlavorHandle(flavor)">
                    <div>
                        <i class="fa-sharp fa-regular fa-circle-check"></i> {{ flavor.name }}
                    </div>
                    <!--<div class="select-2_container_result_container_item_tag_new">
                        NUEVO
                    </div>-->
                    <!--<div class="select-2_container_result_container_item_tag_stock">
                        POCO STOCK
                    </div>-->
                </div>
            </div>
            <div v-else class="not-found-flavors-container d-flex justify-content-center">
                No hay resultados
            </div>
        </div>
    </div>
    <div v-if="showAddButton" class="product-detail-flavors_add_button" @click="addFlavorsToTrolley">
        Añadir al carrito
    </div>
</template>

<style scoped>
.form-control:focus{
    border-color: black;
}
.not-found-flavors-container{
    padding: 10px 0;
    color: grey;
    font-size: 15px;
    background-color: white;
}
.select-2_container_result_container_item_tag_stock {
    display: flex;
    background-color: rgb(247, 166, 6);
    font-size: 10px;
    align-self: center;
    padding: 3px 5px;
    border-radius: 5px;
    color: white;
    font-weight: bold;
}

.select-2_container_result_container_item_tag_new {
    display: flex;
    background-color: rgb(222, 13, 13);
    font-size: 10px;
    align-self: center;
    padding: 3px 5px;
    border-radius: 5px;
    color: white;
    font-weight: bold;
}

.flavor-titles {
    margin-bottom: 5px;
    font-weight: bold;
}

.select-2_container_selected_container_item_remove {
    padding-right: 5px;
    color: rgb(173, 172, 172);
}

.select-2_container_selected_container_item {
    border: 1px solid rgb(195, 194, 194);
    padding: 5px;
    margin-bottom: 5px;
    display: flex;
    justify-content: space-between;
}

.select-2_container_input {
    width: 100%;
    /**padding: 5px 10px;
    background-color: white;
    border: 1px solid grey;*/
}

.select-2_container_input_container {
    width: 100%;
}

.select-2_container_result_container_item {
    padding: 5px 10px;
    background-color: white;
    display: flex;
    justify-content: space-between;
}

.select-2_container_result_container_item:hover {
    background-color: rgb(240, 239, 239);
}

.select-2_container {
    position: relative;
    padding: 20px 20px;
}

.select-2_container_result_container {
    margin-top: 3px;
    border-radius: 6px;
    border: 1px solid rgb(195, 194, 194);
    width: 100%;
    max-height: 210px;
    z-index: 0;
}

.product-detail-flavors_add_button {
    background-color: rgb(28, 27, 27);
    color: white;
    width: 100%;
    position: fixed;
    bottom: 0;
    z-index: 20;
    cursor: pointer;
    display: flex;
    justify-content: center;
    font-size: 20px;
    padding: 15px;
    box-shadow: 0px -2px 5px 0px rgba(93, 93, 93, 0.75);
    border: 1px solid black;
}
</style>
