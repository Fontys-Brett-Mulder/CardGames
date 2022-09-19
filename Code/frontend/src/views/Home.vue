<template>
  <div id="homepage" class="page">
    <h1>Card Games!!!</h1>
    <DefaultButton btnContent="Login als gast" routerPath="/login/guest"/>
  </div>
</template>

<script lang="ts">
import DefaultButton from "@/components/Buttons/DefaultButton.vue"
import {onMounted} from "vue";
import {SessionStorageManager} from "../classes/SessionStorage/SessionStorageManager";

export default {
  components: {
    DefaultButton,
  },

  setup() {
    const sessionManager = new SessionStorageManager();
    onMounted(async () => {
      sessionManager.deleteItem("currentGame");
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