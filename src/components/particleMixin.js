export default {
  props: {
    id: Number,
  },
  computed: {
    shared: function() {
      return this.$root.shared;
    },
    dur() {
      return `${this.shared.timeDelay}ms`;
    },
    diameter() {
      return this.shared.diameter[this.id] + "px";
    },
    radius() {
      return this.shared.diameter[this.id] / 2;
    },
    color() {
      return this.shared.color[this.id];
    },
    left() {
      return this.shared.x[this.id] - this.radius + "px";
    },
    top() {
      return this.shared.y[this.id] - this.radius + "px";
    },
    x() {
      return this.shared.showNum("x", this.id);
    },
    y() {
      return this.shared.showNum("y", this.id);
    },
    vx() {
      return this.shared.showNum("vx", this.id);
    },
    vy() {
      return this.shared.showNum("vy", this.id);
    },
  },
};
