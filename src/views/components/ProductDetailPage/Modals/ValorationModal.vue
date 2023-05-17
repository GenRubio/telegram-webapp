<script setup>
import { ref, onMounted } from "vue";
import { useTranslationsStore } from "../../../../store/translations.store";

const { trans } = useTranslationsStore();
const rating = ref(5);
const props = defineProps(["closeValorationModal"]);
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
          <h5 class="modal-title" id="valoration-modal_label">Valoracion</h5>
          <button
            type="button"
            class="btn-close"
            aria-label="Close"
            @click="closeValorationModal"
          ></button>
        </div>
        <div class="modal-body">
          <label>Estrellas</label>
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
        </div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-secondary"
            @click="closeValorationModal"
          >
            {{ trans("1f2508b7-543b-4df1-834c-20dd5327a6ec") }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.stars_cotnainer {
  display: flex;
  justify-content: center;
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
