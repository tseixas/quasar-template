<template>
  <q-page padding>
    <div class="row">
      <div class="col">
        <h4 class="text-h4 ubuntu-font text-weight-bolder">
          {{
            $q.screen.lt.md ? "Funcionalidades" : "Adicionar Funcionalidades"
          }}
        </h4>
      </div>
    </div>

    <div
      class="row"
      :class="$q.screen.lt.md ? 'flex justify-between' : ''"
      :style="$q.screen.lt.md ? 'width: 100%' : 'width: 60%'"
    >
      <div class="col-md-3 col-sm-6">
        <q-btn
          :outline="!manager"
          color="primary-dark"
          size="15px"
          :class="$q.screen.lt.md ? 'q-px-md' : ''"
          class="q-py-xs"
          :label="$q.screen.lt.md ? 'como gestor' : 'funcionalidade gestor'"
          @click="
            manager = true;
            member = false;
          "
        />
      </div>
      <div class="col-md-3 col-sm-6">
        <q-btn
          :outline="!member"
          color="primary-dark"
          size="15px"
          :class="$q.screen.lt.md ? 'q-px-md' : ''"
          class="q-py-xs"
          :label="$q.screen.lt.md ? 'como membro' : 'funcionalidade membro'"
          @click="
            member = true;
            manager = false;
          "
        />
      </div>
    </div>

    <div class="row q-mt-xl">
      <div
        class="col-md-5 col-xs-12 q-pa-md"
        :class="$q.screen.lt.md ? '' : 'card-size'"
      >
        <q-form class="q-gutter-md" @submit.prevent="onSubmit">
          <label class="text-weight-light blue-dark"> Título </label>
          <q-input
            class="q-mb-lg"
            outlined
            v-model="title"
            :error="v$.title.$error"
          />

          <label class="text-weight-light blue-dark"> Icone(nome) </label>
          <q-input
            class="q-mb-lg"
            outlined
            v-model="icon"
            :error="v$.icon.$error"
          />

          <label class="text-weight-light blue-dark"> Descrição </label>
          <q-input
            outlined
            type="textarea"
            v-model="description"
            :error="v$.description.$error"
          />

          <div class="q-mt-xl">
            <q-btn
              label="ADICIONAR FUNCIONALIDADE"
              type="submit"
              color="primary-dark"
              class="full-width"
            />
          </div>
        </q-form>
      </div>
    </div>
  </q-page>
</template>

<script>
import useVuelidate from "@vuelidate/core";
import { required } from "@vuelidate/validators";
import { api } from 'boot/axios';
import { Notify } from 'quasar';

export default {
  name: "Nova Funcionalidade",
  components: {},
  setup() {
    return {
      v$: useVuelidate({ $lazy: true, $autoDirty: true }),
    };
  },
  data() {
    return {
      manager: true,
      member: false,
      title: "",
      icon: "",
      description: "",
    };
  },
  validations() {
    return {
      title: {
        required,
      },
      icon: {
        required,
      },
      description: {
        required,
      },
    };
  },
  methods: {
    resetForm() {
        Object.assign(this.$data, this.$options.data())
        this.v$.$reset();
    },
    async onSubmit() {
      this.v$.$touch();

      if (this.v$.$invalid) {
        return;
      }

      const data = {
        title: this.title,
        icon: this.icon,
        description: this.description
      };

      let url = this.manager ? '/managers' : '/members';

      try {
        await api.post(url, data);

        this.resetForm();

        Notify.create('Salvo com sucesso!');
      } catch (error) {
        Notify.create('Ops... Algo deu errado!');
      }
    },
  },
};
</script>
