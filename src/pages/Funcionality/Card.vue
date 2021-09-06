<template>
<div class="row q-mt-xl">
  <div
      class="col-md-3 col-xs-12 q-pa-md"
      :class="$q.screen.lt.md ? '' : 'card-size'"
      v-for="info in data"
      :key="info.id"
    >
     <card-info
        :icon="info.icon"
        :title="info.title"
        :description="info.description"
      />
  </div>
</div>
</template>

<script>
import { defineComponent } from "vue";
import CardInfo from "src/components/CardInfo.vue";

export default defineComponent({
  name: "Card",
  components: {
    CardInfo,
  },
  props: {
    data: {
      type: Array,
      required: true,
    }
  },
});
</script>
