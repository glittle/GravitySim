<template>
  <div class="Small">
  {{id}} ({{x}}, {{y}})
  </div>
</template>

<script>
export default {
  name: 'SmallParticle',
  props: {
    id: Number
  },
   data() {
    return {
      
    }
  },
  computed: {
    shared: function () {
      return this.$root.shared;
    },
    x(){
      return this.shared.x[this.id];
    },
    y(){
      return this.shared.y[this.id];
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
.Small{

}
</style>
