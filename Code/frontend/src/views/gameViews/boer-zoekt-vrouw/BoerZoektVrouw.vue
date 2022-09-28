<template>
  <div id="honderden-game" class="page">
    <h1>Boer zoekt vrouw</h1>
  </div>
</template>

<script lang="ts">
import {onMounted} from "vue";

export default {
  components: {
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

#honderden-game {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
</style>