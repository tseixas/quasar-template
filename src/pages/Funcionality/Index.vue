<template>
  <q-page padding>
    <div class="row">
      <div class="col">
        <h4 class="text-h4 ubuntu-font text-weight-bolder">Funcionalidades</h4>
      </div>
    </div>

    <div class="row" :class="$q.screen.lt.md ? 'flex justify-between' : ''">
      <div class="col-md-2 col-sm-6">
        <q-btn
          :outline="!manager"
          color="primary-dark"
          size="15px"
          :class="$q.screen.lt.md ? 'q-px-md' : 'q-px-xl'"
          class="q-py-xs"
          label="como gestor"
          @click="
            manager = true;
            member = false;
          "
        />
      </div>
      <div class="col-md-2 col-sm-6">
        <q-btn
          :outline="!member"
          color="primary-dark"
          size="15px"
          :class="$q.screen.lt.md ? 'q-px-md' : 'q-px-xl'"
          class="q-py-xs"
          label="como membro"
          @click="
            member = true;
            manager = false;
          "
        />
      </div>
    </div>

    <Manager v-if="manager" />
    <Member v-if="member" />
  </q-page>
</template>

<script>
import Manager from "src/pages/Funcionality/Manager.vue";
import Member from "src/pages/Funcionality/Member.vue";

export default {
  name: "Funcionalidades",
  components: {
    Manager,
    Member,
  },
  data() {
    return {
      manager: true,
      member: false,
    };
  },
};
</script>
