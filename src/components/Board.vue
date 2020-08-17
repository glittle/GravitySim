<template>
  <div class="Board">Board</div>
</template>

<script>
export default {
  name: "Board",
  props: {
    msg: String,
  },
};
</script>


<style lang="scss">
.Board {
  margin: 10px;
  flex-grow: 2;
  background: lightyellow;
}
</style>
