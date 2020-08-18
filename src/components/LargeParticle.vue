<template>
  <div
    class="Large"
    :title="'#' + id + ': ' + x + ',' + y"
    :style="{left:left, top:top, borderColor: color, width:diameter, height:diameter, transitionDuration: dur}"
  >{{id}} {{vx}},{{vy}}</div>
</template>

<script>
import particleMixin from './particleMixin';

export default {
  name: "LargeParticle",
  mixins:[particleMixin],
  data() {
    return {};
  },
  computed: {
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
.Large {
  position: absolute;
  font-size: 15px;
  text-align: center;
  font-weight: bold;
  border-radius: 50%;
  background-color: black;
  color: white;
  transition-property: left, top;
  transition-timing-function: linear;
}
</style>
