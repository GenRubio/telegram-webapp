<script setup>
import PaymentSVG from "../Svg/PaymentSVG.vue";
import ShippmentSVG from "../Svg/ShippmentSVG.vue";
import PriceSVG from "../Svg/PriceSVG.vue";
import { useTranslationsStore } from '../../../store/translations.store';
import { useSettingsStore } from '../../../store/settings.store';

const { trans } = useTranslationsStore();
const { config } = useSettingsStore();
</script>

<template>
  <div class="product-detail-footer-alerts_container">
    <div class="d-flex separator">
      <div class="product-detail-footer-alerts_container-item-svg">
        <ShippmentSVG />
      </div>
      <div>
        <div><b>{{ trans('810756da-c1fa-4d41-88cd-38d7ed2c8b48') }}</b></div>
        <div>{{ trans('ee70a4ed-406c-4b11-8e63-e91533572dd5') }} {{ config('1671891736.2341a') }}€</div>
      </div>
    </div>
    <hr />
    <div class="d-flex separator">
      <div class="product-detail-footer-alerts_container-item-svg">
        <PaymentSVG />
      </div>
      <div>
        <div><b>{{ trans('f7b5ceb3-129e-45e2-9db0-258ceb3159fa') }}</b></div>
        <div>{{ trans('12f38600-b85e-4bcb-9777-1317ef3daf25') }}</div>
      </div>
    </div>
    <hr />
    <div class="d-flex separator">
      <div class="product-detail-footer-alerts_container-item-svg">
        <PriceSVG />
      </div>
      <div>
        <div><b>{{ trans('734b68e5-c054-44ac-b974-402e75af54df') }}</b></div>
        <div>{{ trans('362a5dae-ec51-4f0b-bb59-15942131466d') }}</div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.separator {
  margin-top: 10px;
  margin-bottom: 10px;
}
hr {
  margin: 0;
  padding: 0;
}
.product-detail-footer-alerts_container-item-svg {
  width: 30px;
  margin-top: 10px;
  margin-bottom: 10px;
  margin-left: 0;
  margin-right: 25px;
}
.product-detail-footer-alerts_container {
  margin-top: 35px;
  padding-top: 10px;
  padding-left: 20px;
  padding-right: 20px;
  padding-bottom: 10px;
  margin-bottom: 30px;
  background-color: #f6f6f6;
}
</style>
