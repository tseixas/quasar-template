<template>
  <div class="row">
    <div class="col-2">
      <q-icon :name="icon || 'person'" size="md" class="blue-dark"></q-icon>
    </div>
    <div class="col">
      <span class="ubuntu-font text-weight-medium blue-dark">
        {{ title }}
      </span>
    </div>
  </div>

  <div class="row q-mt-md">
    <div class="col">
      <p class="ubuntu-font text-justify text-weight-thin gray-ligth">
        {{ description }}
      </p>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "CardInfo",
  props: {
    title: {
      type: String,
      required: true,
    },

    description: {
      type: String,
      default: "",
      required: true,
    },

    icon: {
      type: String,
      default: "",
    },
  },
});
</script>
