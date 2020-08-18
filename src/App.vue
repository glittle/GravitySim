<template>
  <div id="app">
    <Setup />
    <Board />
  </div>
</template>

<script>
import Setup from "./components/Setup.vue";
import Board from "./components/Board.vue";

export default {
  name: "App",
  components: {
    Setup,
    Board,
  },
};
</script>

<style lang="scss">
body{
  height: 100vh;
  margin: 0;
  padding: 0;
}
#app {
  height: 100vh;
  display: flex;
  //justify-content: space-between;
  //align-items: stretch;
}
</style>
