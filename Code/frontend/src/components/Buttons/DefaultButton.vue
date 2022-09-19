<template>
  <router-link :to="{ path: routerPath }" style="text-decoration: none; color: inherit;" class="default-button">
    {{ btnContent }}
  </router-link>

</template>

<script lang="ts">
export default {
  name: "DefaultButton",
  props: {
    btnContent: String,
    routerPath: String,
  },
};
</script>

<style>
.default-button {
  width: 90%;
  height: available;
  padding: 16px 0;
  margin: 10px;

  background-color: var(--color-hub-tint);
  border: 1px solid black;
  border-radius: 10px;
  box-shadow: 0px 5px 10px black;

  text-align: center;
}
</style>
