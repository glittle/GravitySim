<template>
  <div class="Small">
  
  </div>
</template>

<script>
export default {
  name: 'SmallParticle',
  props: {
    msg: String
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
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
.Small{

}
</style>
