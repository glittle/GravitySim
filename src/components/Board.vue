<template>
  <div class="Board" :style="{width: width, height: height}">
    <large-particle v-for="n in largeParticleIds" :id="n" :key="n"></large-particle>
    <small-particle v-for="n in smallParticleIds" :id="n" :key="n"></small-particle>
  </div>
</template>

<script>
/*

Extracted and adpated from
http://iwant2study.org/lookangejss/03thermalphysics_08kineticmodel/ejss_model_brownianmotionwee/brownianmotionwee_Simulation.xhtml


*/
import SmallParticle from "./SmallParticle.vue";
import LargeParticle from "./LargeParticle.vue";

export default {
  name: "Board",
  components: {
    SmallParticle,
    LargeParticle,
  },
  props: {},
  data() {
    return {
      small: [],
      large: [],
    };
  },
  computed: {
    shared: function () {
      return this.$root.shared;
    },
    width() {
      return this.shared.xmax + "px";
    },
    height() {
      return this.shared.ymax + "px";
    },
    smallParticleIds() {
      return this.shared.x.map((p, i) => i).slice(this.shared.numLarge);
    },
    largeParticleIds() {
      return this.shared.x.map((p, i) => i).slice(0, this.shared.numLarge);
    },
  },
  created() {
    this.shared.$on("doStep", this.doStep);
    this.shared.$on("reset", this.initialize);

    this.initialize();
  },
  methods: {
    doStep() {
      // var vue = this;
      var S = this.shared;
      var r = 1000;
      S.t = Math.round(r * (S.t + S.dt)) / r;

      this.main();

      // for (var i = 0; i < S.numParticles; i++) {
      //   vue.$set(S.x, i, S.x[i] + S.vx[i]);
      //   vue.$set(S.y, i, S.y[i] + S.vy[i]);
      //   // S.x[i] += S.vx[i];
      //   // S.y[i] += S.vy[i];
      //   //S.vx[i] = i === 0 ? S.b * S.vx[0] : 0;
      //   //S.vy[i] = i === 0 ? S.b * S.vy[0] : 0;
      // }
    },
    initialize() {
      var vue = this;
      var S = this.shared;
      var i;

      // for (i = 0; i < S.nv; i++) {
      //   vue.$set(S.ID, i, i);
      // }

      S.t = 0;

      // large
      for (i = 0; i < S.numLarge; i++) {
        vue.$set(S.diameter, i, S.sizeLarge);
        vue.$set(S.mass, i, 2 * S.sizeLarge * S.sizeLarge); //*sizeLarge; model used to determine the mass of particle 0

        // Random initialization of the disks
        vue.$set(
          S.x,
          i,
          (S.xmax * (i + 1)) / (S.numLarge + 1)
          //  +
          //   0.5 * S.diameter[i] +
          //   (S.xmax / 3 - S.xmin - S.diameter[i]) * Math.random()
        );
        vue.$set(
          S.y,
          i,
          (S.ymax * (i + 1)) / (S.numLarge + 1)
          // S.ymax / 3 +
          //   0.5 * S.diameter[i] +
          //   (S.ymax / 3 - S.ymin - S.diameter[i]) * Math.random()
        );
        vue.$set(S.vx, i, 0); //S.vmax * (Math.random() * 0.1));
        vue.$set(S.vy, i, 0); //S.vmax * (Math.random() * 0.1));
        vue.$set(
          S.color,
          i,
          `rgb(${Math.random() * 50},${Math.random() * 50},${
            Math.random() * 50
          })`
        );
      }

      // small
      for (i = S.numLarge; i < S.numParticles; i++) {
        vue.$set(S.diameter, i, S.sizeSmall);
        vue.$set(S.mass, i, 2 * S.sizeSmall * S.sizeSmall);
        // Random initialization of the disks
        vue.$set(
          S.x,
          i,
          S.xmin +
            0.5 * S.diameter[i] +
            (S.xmax - S.xmin - S.diameter[i]) * Math.random()
        );
        vue.$set(
          S.y,
          i,
          S.ymin +
            0.5 * S.diameter[i] +
            (S.ymax - S.ymin - S.diameter[i]) * Math.random()
        );
        vue.$set(
          S.vx,
          i,
          S.vmax * (Math.random() < 0.5 ? 1 : -1) // * (S.vmax * 0.5 * Math.random() - 0.5 * S.vmax)
        );
        vue.$set(
          S.vy,
          i,
          S.vmax * (Math.random() < 0.5 ? 1 : -1)// * (S.vmax * 0.5 * Math.random() - 0.5 * S.vmax)
        );
        vue.$set(
          S.color,
          i,
          `rgb(${Math.random() * 150 + 50},${Math.random() * 150 + 50},${
            Math.random() * 150 + 50
          })`
        );
      }
    },
    // vdistribution() {
    //   var id;
    //   var vue = this;
    //   var S = this.shared;
    //   for (var i = 0; i < S.nv; i++) {
    //     vue.$set(S.V, i, 0);
    //   }
    //   for (i = 0; i < S.numParticles; i++) {
    //     id = (S.nv * Math.sqrt(S.vx[i] * S.vx[i] + S.vy[i] * S.vy[i])) / S.vmax; //(var)??
    //     if (id > S.nv - 1) {
    //       id = S.nv - 1;
    //     }
    //     vue.$set(S.V, id, S.v[id] + 1);
    //   }
    // },
    collide(collision1, collision2) {
      var vue = this;
      var S = this.shared;
      var dx = S.x[collision2] - S.x[collision1],
        dy = S.y[collision2] - S.y[collision1];
      var distance = Math.sqrt(dx * dx + dy * dy);
      // Unit vector in the direction of the collision
      var ax = dx / distance,
        ay = dy / distance;
      // Projection of the velocities in these axes
      var va1 = S.vx[collision1] * ax + S.vy[collision1] * ay,
        vb1 = -S.vx[collision1] * ay + S.vy[collision1] * ax;
      var va2 = S.vx[collision2] * ax + S.vy[collision2] * ay,
        vb2 = -S.vx[collision2] * ay + S.vy[collision2] * ax;
      // New velocities in these axes
      var vaP1 =
        va1 +
        ((1 + S.ed) * (va2 - va1)) /
          (1 + S.mass[collision1] / S.mass[collision2]);
      var vaP2 =
        va2 +
        ((1 + S.ed) * (va1 - va2)) /
          (1 + S.mass[collision2] / S.mass[collision1]);
      // Undo the projections
      vue.$set(S.vx, collision1, vaP1 * ax - vb1 * ay);
      vue.$set(S.vy, collision1, vaP1 * ay + vb1 * ax);
      vue.$set(S.vx, collision2, vaP2 * ax - vb2 * ay);
      vue.$set(S.vy, collision2, vaP2 * ay + vb2 * ax);
    },
    main() {
      var S = this.shared;
      var vue = this;

      var min = 0;

      // detect collisions between large particles and any others
      for (var i = 0; i < S.numParticles; i++) {
        for (var j = 0; j < S.numLarge; j++) {
          if (i === j) continue;
          // dx is delta x
          // dy is delta y
          // dm is distance mean
          var dx = S.x[j] - S.x[i];
          var dy = S.y[j] - S.y[i];
          var dm = (S.diameter[i] + S.diameter[j]) / 2;
          // d2 is square of the dx*dx+dy*dy-dm*dm
          var d2 = dx * dx + dy * dy - dm * dm;
          if (d2 < min) {
            // dvx is delta vx
            // dvy is delta vy
            var dvx = S.vx[j] - S.vx[i];
            var dvy = S.vy[j] - S.vy[i];
            // way to check collision1
            if (dx * dvx + dy * dvy < 0) {
              this.collide(i, j);
            }
          }
        } //for j
      } // for i
      //vdistribution();

      // S.TKE = 0;
      // S.TMOM = 0;

      var r;
      var d;
      // debugger;
      for (i = 0; i < S.numParticles; i++) {
        // r is the radius
        r = S.diameter[i] / 2;
        var y = S.y[i];
        var x = S.x[i];
        var vy = S.vy[i];
        var vx = S.vx[i];

        //Y axis
        // d is distance spacings between particle and bottom
        d = y - S.ymin - r;
        if (vy + y < S.ymin || d < min) {
          // vue.$set(S.vy, i, -S.ep * vy);
          vue.replaceParticle(i);
          continue;
        } // check bottom reverse vy
        // d is distance spacings between particle and top
        d = S.ymax - r - y;
        if (vy + y > S.ymax || d < min) {
          // vue.$set(S.vy, i, -S.ep * vy);
          vue.replaceParticle(i);
          continue;
        } // check top reverse vy

        //X axis
        // d is distance spacings between particle and left
        d = x - S.xmin - r;
        if (vx + x < S.xmin || d < min) {
          // vue.$set(S.vx, i, -S.ep * vx);
          vue.replaceParticle(i);
          continue;
        }
        // d is distance spacings between particle and right
        d = S.xmax - r - x;
        if (vx + x > S.xmax || d < min) {
          // vue.$set(S.vx, i, -S.ep * vx);
          vue.replaceParticle(i);
          continue;
        }

        // vue.updateKeMom(i); --> not needed in sim

        vue.$set(S.x, i, x + vx);
        vue.$set(S.y, i, y + vy);
      }
    },
    replaceParticle(i) {
      var vue = this;
      var S = this.shared;
      // replace at the boundary
      // x or y = 0 or max, v = inward
      var side = Math.floor(Math.random() * 4); // 0,1,2,3 => T,B,L,R
      var offset = 0.5 * S.diameter[i];
      vue.$set(
        S.x,
        i,
        side === 2
          ? offset
          : side === 3
          ? S.xmax - offset
          : offset + (S.xmax - S.xmin - S.diameter[i]) * Math.random()
      );
      vue.$set(
        S.y,
        i,
        side === 0
          ? offset
          : side === 1
          ? S.ymax - offset
          : S.ymin + offset + (S.ymax - S.ymin - S.diameter[i]) * Math.random()
      );
      vue.$set(S.vx, i, side === 2 ? S.vmax : side === 3 ? -1 * S.vmax : Math.random() * S.vmax );
      vue.$set(S.vy, i, side === 0 ? S.vmax : side === 1 ? -1 * S.vmax : Math.random() * S.vmax );
    },
    // updateKeMom(i) {
    //   var vue = this;
    //   var S = this.shared;
    //   vue.$set(S.speed, i, Math.sqrt(S.vx[i] * S.vx[i] + S.vy[i] * S.vy[i]));
    //   vue.$set(S.KE, i, 0.5 * S.mass[i] * S.speed[i] * S.speed[i]);
    //   vue.$set(S.MOM, i, S.mass[i] * S.speed[i]);
    // },
  },
};
</script>


<style lang="scss">
.Board {
  margin: 10px;
  box-sizing: content;
  border: 5px double grey;

  position: relative;

  overflow: visible;
}
</style>
