<template>
  <div id="games-hub" class="page">
    <h2>Welkom {{ player }}</h2>
    <router-link :to="{ path: '/joingame' }" style="text-decoration: none; color: inherit;" class="default-button">
      Deel mee aan bestaand spel
    </router-link>
    <h2 style="padding: 10px">Maak een nieuw spel</h2>

    <!--New Games-->
    <div class="new-games-wrapper">
      <GameTile GameName="Honderden" Difficulty="Easy"/>
      <GameTile GameName="Honderden" Difficulty="Easy"/>
      <GameTile GameName="Honderden" Difficulty="Easy"/>
    </div>

  </div>
</template>

<script lang="ts">
import {onMounted} from "vue";
import {SessionStorageManager} from "../classes/SessionStorage/SessionStorageManager";
import {IPlayerGuest} from "../Interfaces/Player/IPlayerGuest";
import GameTile from "@/components/Games/GameTile.vue";

export default {
  components: {
    GameTile
  },
  setup() {
    const sessionManager = new SessionStorageManager();
    const player: IPlayerGuest = JSON.parse(sessionManager.getItem("playerName"));
    onMounted(async () => {

    });
    return {
      player
    }
  }
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

.new-games-wrapper{
  width: 90%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}
</style>