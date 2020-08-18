<template>
  <div
    class="Small"
    :title="'#' + id + ': ' + x + ',' + y"
    :style="{left:left, top:top, backgroundColor: color, color: color, width:diameter, height:diameter, transitionDuration: dur}"
  ></div>
</template>

<script>
import particleMixin from './particleMixin';

export default {
  // ({{x}}, {{y}}) [{{vx}},{{vy}}]
  name: "SmallParticle",
  mixins:[particleMixin],
  data() {
    return {};
  },
  methods: {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
.Small {
  position: absolute;
  font-size: 10px;
  text-align: center;
  border-radius: 50%;
  //border: 1px solid black;
  transition-property: left, top;
  transition-timing-function: linear;
}
</style>
