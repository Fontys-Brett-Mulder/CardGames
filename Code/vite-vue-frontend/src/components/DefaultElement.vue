<template>
  <div id="homepage">
    {{DefaultProp}}
  </div>
</template>

<script lang="ts">
import DefaultButton from "@/components/Buttons/DefaultButton.vue"
import {onMounted} from "vue";

export default {
  components: {
    DefaultProp,
  },

  setup() {
    onMounted(async () => {
      console.log("This is on mounted")
    });
    return {}
  }
}
</script>

<style>
body {
  background-color: var(--color-hub-background);
}

#homepage {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
</style>