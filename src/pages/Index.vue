<template>
  <div :class="$q.screen.lt.md ? 'column' : 'row'">
    <div class="col-4 flex itens-center">
      <div class="row q-mt-xl">
        <div class="col">
          <h4 class="text-h4 ubuntu-font text-weight-bolder">
            Faça a Gestão da sua comunidade de uma forma simples e completa
          </h4>
        </div>
      </div>

      <div class="row">
        <div class="col">
          <p class="text-h5 gray-ligth">
            Multiplicame é uma plataforma que possui tudo o que você precisa
            para trabalhar senso de pertencimento e produtividade de membros.
          </p>
        </div>
      </div>

      <div class="row desktop-only flex self-end">
        <div class="col">
          <q-btn
            color="primary-dark"
            icon="login"
            padding="md"
            label="TODAS AS FUNCIONALIDADES"
            class="q-px-md"
            :to="{ name: 'functionalities'}"
          />
        </div>
      </div>
    </div>

    <div class="col flex justify-center">
      <img
        alt="Main image"
        src="~assets/image_2.svg"
        :style="$q.screen.lt.sm ? { height: '230px' } : { height: '570px' }"
      />
    </div>

    <q-btn
      color="primary-dark"
      icon="east"
      class="mobile-only q-mt-lg"
      label="TODAS AS FUNCIONALIDADES"
      :to="{ name: 'functionalities'}"
    />
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "PageIndex",
});
</script>
