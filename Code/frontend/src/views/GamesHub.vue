<template>
  <div id="games-hub" class="page">
    <h2>Welkom {{ player }}</h2>
    <router-link :to="{ path: '/joingame' }" style="text-decoration: none; color: inherit;" class="default-button">
      Deel mee aan bestaand spel
    </router-link>
    <h2 style="padding: 10px">Maak een nieuw spel</h2>
    <!--New Games-->
    <div class="new-games-wrapper" >
      <GameTile v-on:click="saveGameToLocalstorage(item)"
                v-for="item in games"
                :key="item.id"
                :GameName="item.name"
                :Difficulty="item.difficulty"
                :GameId="item.id"
                Imagepath="Hello"
      />
    </div>

  </div>
</template>

<script lang="ts">
import {SessionStorageManager} from "../classes/SessionStorage/SessionStorageManager";
import GameTile from "@/components/Games/GameTile.vue";
import axios from "axios";
import {GameModel} from "../models/Game";

export default {
  data() {
    return {
      games: [] as Array<GameModel>,
      player: "" as string,
    }
  },
  components: {
    GameTile
  },
  methods: {
    saveGameToLocalstorage: function (game: GameModel){
      sessionStorage.setItem("currentGameId", game.id.toString());
      this.createNewGamePin();
    },
    createNewGamePin: function (){
      let randomNumber = Math.floor(100000 + Math.random() * 900000);
      sessionStorage.setItem("gamePin", randomNumber.toString());
    },
  },
  mounted() {
    /**
     * Defining properties, classes
     */
    const sessionManager = new SessionStorageManager();
    this.player = sessionManager.getItem("playerName");

    /**
     * Get all the games and assign to this.games
     */
    const getGamesData = () => {
      console.log("Hello");
      axios.get('https://localhost:7167/api/Games/getAllGames')
          .then((resp) => {
                this.games = resp.data;
              }
          )
    }

    /**
     * Call all functions
     */
    getGamesData();
  },
}
</script>

<style>
body {
  background-color: var(--color-hub-background);
}

#games-hub {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.new-games-wrapper {
  width: 90%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}
</style>