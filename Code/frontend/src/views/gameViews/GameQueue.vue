<template>
  <div id="game-queue" class="page">
    <h1>{{currentGame.name}}</h1>
    <h1>Waiting for players</h1>
    <h2>Gamepin: {{gamePin}}</h2>
  </div>
</template>

<script lang="ts">
import {SessionStorageManager} from "../../classes/SessionStorage/SessionStorageManager";
import axios from "axios";
import { GameModel } from "../../models/Game";

export default {
  data() {
    return {
      gamePin: "" as string,
      currentGame: GameModel,
    }
  },
  methods: {
  },
  components: {
  },
  mounted() {
    /**
     * Setup properties, classes etc
     */
    const sessionManager = new SessionStorageManager();
    this.gamePin = sessionManager.getItem("gamePin");
    this.currentGame.id = sessionManager.getItem("currentGameId");

    /**
     * Get all the games and assign to this.games
     */
    const getGameData = () => {
      console.log("Hello");
      axios.get('https://localhost:7167/api/Games/getSpecificgame/' + this.currentGame.id)
          .then((resp) => {
                this.currentGame = resp.data;
                console.log(resp.data);
              }
          )
    }
    /**
     * Execute all function when mounted
     */
    getGameData()
  },
  setup() {
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