<template>
  <div class="Setup">
    Setup
    <div>t = {{shared.t}}</div>
    <div>x,y[1] = {{shared.showNum('x', 1)}},{{shared.showNum('y', 1)}}</div>
    <div>vx,vy[1] = {{shared.showNum('vx', 1)}},{{shared.showNum('vy', 1)}}</div>
    <p>
      <button @click="toggleRun" v-text="running ? 'Stop' : 'Start'"></button>
      &nbsp;
      <button @click="step" v-if="!running" v-text="'Step'"></button>
    </p>
    <p>
      <button @click="reset" v-text="'Reset'"></button>
    </p>
  </div>
</template>

<script>
export default {
  name: "Setup",
  props: {
    msg: String,
  },
  data() {
    return {
      running: false,
      runTimer: null,
    };
  },
  computed: {
    shared: function () {
      return this.$root.shared;
    },
  },

  methods: {
    toggleRun(running) {
      clearInterval(this.runTimer);
      this.running = typeof running === "boolean" ? running : !this.running;
      if (this.running) {
        this.runTimer = setInterval(() => {
          this.shared.$emit("doStep");
        }, this.shared.timeDelay);
      }
    },
    step() {
      this.shared.$emit("doStep");
    },
    reset() {
      this.toggleRun(false);
      this.shared.$emit("reset");
    },
  },
};
</script>

<style lang="scss">
.Setup {
  margin: 10px;
  min-width: 200px;

  background: lightgreen;
}
</style>
