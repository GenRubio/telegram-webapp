<script setup>
import { useTranslationsStore } from "../../store/translations.store";
import { useSocialNetworksStore } from "../../store/social-networks.store";
import { useParametricSettingsStore } from "../../store/parametric-settings.store";
import imgUrl from "../../../public/images/output-onlinegiftools.gif";

const { trans } = useTranslationsStore();
const { socialNetworks } = useSocialNetworksStore();
const { settingValue } = useParametricSettingsStore();
</script>

<template>
  <div id="footer" class="footer">
    <div class="footer_container">
      <div class="navbar_content_logo d-flex justify-content-center">
        <img :src="imgUrl" alt="Logo" style="width: 80px" />
      </div>
      <div class="footer-section_title">
        {{ trans("0f9dba0f-e933-4d8f-92ce-451ed16eb71a") }}
      </div>
      <hr class="hr-separator" />
      <div>
        <div class="footer-section_contact_item">
          <font-awesome-icon :icon="['far', 'paper-plane']" />
          <span class="footer-section_contact_item_content">
            {{ trans("41427b75-070b-4428-b0f9-2da378ab2769") }}:
            <a
              :href="settingValue('settings-telegram_group')"
              target="_blank"
              >{{ trans("3ae783ce-d93d-48b8-8ec8-6d83af3ed6e9") }}</a
            >
          </span>
        </div>
        <div class="footer-section_contact_item">
          <font-awesome-icon :icon="['fasl', 'envelope']" />
          <span class="footer-section_contact_item_content">
            {{ trans("5e9103bb-e723-420e-b737-954d79b03469") }}:
            <a href="mailto:{{ settingValue('settings-contact_mail') }}">{{
              settingValue("settings-contact_mail")
            }}</a>
          </span>
        </div>
      </div>
      <div class="footer-section_title">
        {{ trans("242f5af5-9143-4d9a-8e14-e6a86a271c3d") }}
      </div>
      <hr class="hr-separator" />
      <div class="social-container d-flex">
        <div class="d-flex">
          <div
            v-for="item in socialNetworks.parametric_table_values"
            class="m-1 social-item-container"
          >
            <a :href="item.parameter" target="_blank">
              <span v-html="item.description"></span
            ></a>
          </div>
        </div>
      </div>
    </div>
    <hr />
    <div class="copyright-container d-flex justify-content-center">
      <div>
        {{ trans("0325edab-0f32-4c2f-b26b-26d6cd782b03") }}
        {{ settingValue("settings-api_version") }}
      </div>
    </div>
  </div>
</template>

<style scoped>
.hr-separator {
  margin-bottom: 10px !important;
}
.footer-section_contact_item_content {
  margin-left: 5px;
}
.footer-section_contact_item {
  margin: 10px auto;
}
.footer-section_title {
  padding: 5px 0;
  font-weight: bold;
}
.footer_container {
  padding-left: 20px;
  padding-right: 20px;
  color: white;
  padding-top: 20px;
}
a {
  text-decoration: none;
  color: white;
}

.social-item-container {
  width: 40px;
  height: 40px;
  background-color: #474646 !important;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #ffffff !important;
  margin-right: 10px !important;
  border: 1px solid #8b8b8b;
}

.social-item-container i {
  font-size: 24px;
  color: #ffffff;
}
.footer {

}
.footer hr {
  padding: 0;
  margin: 0;
}

.footer {
  position: sticky;
  top: 100%;
  /*background-color: #212222;*/
  background-color: #212222d6;
  color: rgba(250, 250, 250, 0.574);
}

.copyright-container {
  padding: 10px;
  /*background-color: black;*/
  background-color: #00000042;
}

.social-container {
  padding-top: 5px;
  padding-bottom: 15px;
}
</style>
