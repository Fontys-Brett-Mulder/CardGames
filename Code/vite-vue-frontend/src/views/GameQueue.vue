<template>
  <div id="game-queue" class="page">
    <h1>Waiting for players</h1>
    <h2>Gamepin: {{currentGame}}</h2>
  </div>
</template>

<script lang="ts">
import DefaultButton from "@/components/Buttons/DefaultButton.vue"
import {onMounted} from "vue";
import {SessionStorageManager} from "../classes/SessionStorage/SessionStorageManager";

export default {
  components: {
  },

  setup() {
    const sessionManager = new SessionStorageManager();
    const currentGame = JSON.parse(sessionManager.getItem("currentGame"));
    onMounted(async () => {
      console.log("This is on mounted")
    });
    return {
      currentGame
    }
  }
}
</script>

<style>
body {
  background-color: var(--color-hub-background);
}

#game-queue {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
</style>