<template>
  <div id="join-game" class="page">
    <h1>Deel mee aan spel</h1>
    <h2>Game pin:</h2>
    <input v-model="gamepinRef" class="default-input" placeholder="12345A">
    <router-link v-on:click="addCurrentGameToStorage" :to="{ path: '/gamequeue' }" style="text-decoration: none; color: inherit;" class="default-button">
      Deel mee
    </router-link>

  </div>
</template>

<script lang="ts">
import {onMounted, ref} from "vue";
import {SessionStorageManager} from "../classes/SessionStorage/SessionStorageManager";

export default {
  components: {

  },

  setup() {
    const sessionManager = new SessionStorageManager();
    const gamepinRef = ref("");
    onMounted(async () => {
      console.log("This is on mounted")
    });

    const addCurrentGameToStorage = () => {
      sessionManager.addItem("currentGame", gamepinRef.value);

    }
    return {
      gamepinRef,
      addCurrentGameToStorage
    }
  }
}
</script>

<style>
body {
  background-color: var(--color-hub-background);
}

#join-game {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
</style>