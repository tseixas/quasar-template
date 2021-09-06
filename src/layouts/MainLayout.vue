<template>
  <q-layout view="lHh Lpr lFf">
    <div class="row">
      <div class="col">
        <q-btn flat to="/">
          <img alt="logo" src="~assets/Logo.svg" style="width: 280px" />
        </q-btn>
      </div>
    </div>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "MainLayout",

  components: {},

  setup() {
    return {};
  },
});
</script>
