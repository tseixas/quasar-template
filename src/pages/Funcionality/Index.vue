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

    <Card v-if="manager" :data="listFunctionalityManager" />
    <Card v-if="member" :data="listFunctionalityMember" />
  </q-page>
</template>

<script>
import Card from "src/pages/Funcionality/Card.vue";
import { api } from 'boot/axios'

export default {
  name: "Funcionalidades",
  components: {
    Card,
  },
  data() {
    return {
      manager: true,
      member: false,
      listFunctionalityManager: [],
      listFunctionalityMember: []
    };
  },
  async created() {
    const responseManager = await api.get('/managers');
    const responseMember = await api.get('/members');

    this.listFunctionalityManager = responseManager.data;
    this.listFunctionalityMember = responseMember.data;
  }
};
</script>
