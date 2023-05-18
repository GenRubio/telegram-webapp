<script setup>
import { ref, onMounted } from "vue";
import axios from "axios";
import Swal from "sweetalert2";
import { useTranslationsStore } from "../../../../store/translations.store";
import { useUtilsStore } from "../../../../store/utils.store";

const { trans } = useTranslationsStore();
const rating = ref(5);
const valoration = ref("");
const showAlert = ref(false);
const { api } = useUtilsStore();
const props = defineProps([
  "product",
  "closeValorationModal",
  "chatId",
  "valorations",
]);
onMounted(() => {
  let buttonsStart = document.querySelectorAll(
    ".vue3-star-ratings__wrapper .vue3-star-ratings button"
  );
  for (let i = 0; i < buttonsStart.length; i++) {
    buttonsStart[i].style.setProperty("width", "35px", "important");
    buttonsStart[i].style.setProperty("height", "35px", "important");
    buttonsStart[i].style.setProperty("margin", "0 10px", "important");
  }
});
const sendButtonDisabled = (value) => {
  let buttonSend = document.getElementById("button-send-valoration");
  buttonSend.disabled = value;
};
const resetValoration = () => {
  rating.value = 5;
  valoration.value = "";
  sendButtonDisabled(false);
};
const sendValoration = () => {
  sendButtonDisabled(true);
  showAlert.value = false;
  if (valoration.value.trim().length == 0) {
    showAlert.value = true;
    sendButtonDisabled(false);
  } else {
    let data = {};
    data.rate = rating.value;
    data.comment = valoration.value;
    data.productReference = props.product.reference;
    data.token = props.chatId;
    axios
      .post(api + "valoration/create", data)
      .then(function (response) {
        if (response.data.error) {
          Swal.fire({
            icon: "error",
            title: trans("853680aa-ab88-43d1-ad9d-db7997da4879"),
            text: response.data.error,
          });
        } else {
          Swal.fire({
            icon: "success",
            text: trans("47da842b-dfa4-417e-b6bf-da7e4d8c2b68"),
          });
          props.valorations.unshift(response.data.valoration);
          props.product.user.has_valoration = true;
        }
      })
      .catch(function (err) {
        Swal.fire({
          icon: "error",
          title: trans("853680aa-ab88-43d1-ad9d-db7997da4879"),
          text: trans("e44f696e-4de0-47c5-8cfb-42656ff214b7"),
        });
      })
      .finally(function () {
        props.closeValorationModal();
        resetValoration();
      });
  }
};
</script>

<template>
  <div
    class="modal fade"
    id="valoration-modal"
    tabindex="-1"
    aria-labelledby="valoration-modal_label"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="valoration-modal_label">
            {{ trans("c4caad19-b270-41a3-9916-fb2cd9440829") }}
          </h5>
          <button
            type="button"
            class="btn-close"
            aria-label="Close"
            @click="
              closeValorationModal();
              resetValoration();
            "
          ></button>
        </div>
        <div class="modal-body">
          <div class="stars_cotnainer">
            <vue3-star-ratings
              v-model="rating"
              :showControl="true"
              :disableClick="true"
              :step="1"
              starSize="35"
              controlSize="35"
              inactiveColor="#cccccc"
              starColor="#333"
              controlBg="#333"
            />
          </div>
          <div v-if="showAlert" class="alert alert-danger" role="alert">
            {{ trans("31acb8cf-d98c-420c-b0c2-dbad9db2ece7") }}
          </div>
          <textarea
            v-model="valoration"
            class="form-control"
            id="exampleFormControlTextarea1"
            rows="5"
            :placeholder="trans('83461fda-1783-4db3-968d-1a7dea841247')"
          ></textarea>
        </div>
        <div class="modal-footer">
          <button
            id="button-send-valoration"
            type="button"
            class="btn btn-dark"
            @click="sendValoration"
          >
            {{ trans("84f17e21-36f4-4b38-80c6-549cd2718975") }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.form-control:focus {
  color: #212529;
  background-color: #fff;
  border-color: #212529;
  outline: 0;
  box-shadow: none;
}
.stars_cotnainer {
  display: flex;
  justify-content: center;
  margin: 25px 0;
}
.vue3-star-ratings__wrapper {
  padding: 0;
  margin: 0;
  display: flex;
}
.nav-tabs .nav-link {
  border-top: none;
  border-radius: 0%;
}

.btn-close:focus {
  box-shadow: none;
}

.nav-link {
  color: rgb(159, 157, 157);
}

.tab-pane {
  border-left: 1px solid #dee2e6;
  border-right: 1px solid #dee2e6;
  padding: 15px;
}

.modal-body {
  padding: 0px 10px;
}
</style>
