<template>
  <router-link class="game-tile" :to="{ path: '/gameQueue' }" style="text-decoration: none; color: inherit;">
    <img src="@/assets/images/card-game-tile.png" class="game-tile-image"/>
    <div class="bottom-game-tile">
      {{ GameName }}
    </div>
  </router-link>
</template>

<script lang="ts">

export default {
  props: [
    'GameId',
    'GameName',
    'Difficulty',
    'ImagePath',
    'MinPlayers',
    'MaxPlayers',
  ],
  mounted() {
  }
}
</script>

<style>
.game-tile {
  position: relative;
  height: 125px;
  width: 40%;

  background-color: var(--color-game-tint);
  border-radius: 10px;
  border: 1px solid black;
  margin: 10px;
}

.game-tile-image {
  position: absolute;
  left: 45%;
  transform: translateX(-50%);
  width: 60%;
}

.bottom-game-tile {
  position: absolute;
  bottom: 0;
  right: 0;
  left: 0;
  height: 30px;

  text-align: center;
  background-color: white;
  border-radius: 10px;
  border-top: 1px solid black;
  line-height: 30px;
}
</style>