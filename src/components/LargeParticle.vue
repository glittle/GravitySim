<template>
  <div class="Large"></div>
</template>

<script>
export default {
  name: "LargeParticle",
  props: {
    msg: String,
  },
   data() {
    return {
    }
  },
  computed: {
    shared: function () {
      return this.$root.shared;
    }
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
.Large{

}
</style>
