<template>
  <q-layout view="hHh lpR fff">
    <div :class="$q.screen.lt.md ? '' : 'pd-body'">
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
    </div>

  <q-footer class="bg-gray-light-2 text-primary-dark q-py-sm desktop-only" v-if="$router.currentRoute.value.fullPath != '/'">
    <q-toolbar class="flex justify-center ubuntu-font">
      Multiplica.me © 2021 Todos os direitos reservados
    </q-toolbar>
  </q-footer>
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
