<template>
  <div class="Setup">
    Setup
    <div>t = {{shared.t}}</div>
    <div>x,y[1] = {{shared.x[1]}},{{shared.y[1]}}</div>
    <div>x,y[10] = {{shared.x[10]}},{{shared.y[10]}}</div>
    <p>
      <button @click="toggleRun" v-text="running ? 'Stop' : 'Start'"></button>
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
