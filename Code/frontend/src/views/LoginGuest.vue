<template>
  <div id="guest-login" class="page">
    <h1>Login als gast</h1>

    <input v-model="playerName" class="default-input" placeholder="Jou naam">

    <router-link v-on:click="addUserToSession" :to="{ path: '/games-hub' }" style="text-decoration: none; color: inherit;" class="default-button">
      Ga verder
    </router-link>
  </div>
</template>

<script lang="ts">
import DefaultInput from "@/components/InputFields/DefaultInput.vue";
import {onMounted, ref} from "vue";
import DefaultButton from "../components/Buttons/DefaultButton.vue";
import {SessionStorageManager} from "../classes/SessionStorage/SessionStorageManager";

export default {
  components: {
    DefaultButton,
    DefaultInput,
  },

  props: [
      'playerName'
  ],

  setup() {
    const SessionManager = new SessionStorageManager();
    const playerName = ref("");
    onMounted(async () => {
    });

    const addUserToSession = () => {
      SessionManager.addItem("playerName", playerName.value)
      SessionManager.addItem("playerType", "guest")
    }

    return { addUserToSession, playerName}
  }
}
</script>

<style>
body {
  background-color: var(--color-hub-background);
}

#guest-login {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
</style>