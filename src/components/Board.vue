<template>
  <div class="Board">
    <large-particle></large-particle>
    <small-particle v-for="n in smallParticleIds"
    :id="n"
    :key="n"></small-particle>
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
    smallParticleIds(){
      return this.shared.ID.slice(1);
    }
  },
  created() {
    this.shared.$on("doStep", this.doStep);
    this.shared.$on("reset", this.initialize);

    this.initialize();
  },
  methods: {
    doStep() {
      var S = this.shared;
      const r = 1000;
      S.t = Math.round(r * (S.t + S.dt)) / r;
      for (var i = 1; i < S.n; i++) {
        S.x[i] = S.vx[i];
        S.y[i] = S.vy[i];
        S.vx[i] = i === 0 ? S.b * S.vx[0] : 0;
        S.vy[i] = i === 0 ? S.b * S.vy[0] : 0;
      }
    },
    getA(i, a) {
      return i === 0 ? this.shared.b * a[0] : 0;
    },
    initialize() {
      var S = this.shared;
      this.setSize();
      for (var i = 1; i < S.n; i++) {
        S.diameter[i] = 0.2;
        // Random initialization of the disks
        S.x[i] =
          S.xmin +
          0.5 * S.diameter[i] +
          (S.xmax - S.xmin - S.diameter[i]) * Math.random();
        S.vx[i] = S.vmax * (Math.random() - 0.5);
        S.y[i] =
          S.ymin +
          0.5 * S.diameter[i] +
          (S.ymax - S.ymin - S.diameter[i]) * Math.random();
        S.vy[i] = S.vmax * (Math.random() - 0.5);
     }

      for (i = 0; i < S.nv; i++) {
        S.ID[i] = i;
      }

      S.t = 0;

      S.vx[0] = S.vy[0] = 0;
      S.x[0] = (S.xmax + S.xmin) / 2; // put large particle at the centre of screen
      S.y[0] = (S.ymax + S.ymin) / 2;
    },
    setSize() {
      var S = this.shared;
      S.mass[0] = 2 * S.sizen * S.sizen; //*sizen; model used to determine the mass of particle 0
      S.size = S.sizen * S.diameter[1];
      S.diameter[0] = S.size;
    },
    vdistribution() {
      var id;
      var S = this.shared;
      for (var i = 0; i < S.nv; i++) {
        S.V[i] = 0;
      }
      for (i = 0; i < S.n; i++) {
        id = (S.nv * Math.sqrt(S.vx[i] * S.vx[i] + S.vy[i] * S.vy[i])) / S.vmax; //(var)??
        if (id > S.nv - 1) {
          id = S.nv - 1;
        }
        S.V[id] += 1;
      }
    },
    collide(collision, collision2) {
      var S = this.shared;
      var dx = S.x[collision2] - S.x[collision],
        dy = S.y[collision2] - S.y[collision];
      var distance = Math.sqrt(dx * dx + dy * dy);
      // Unit vector in the direction of the collision
      var ax = dx / distance,
        ay = dy / distance;
      // Projection of the velocities in these axes
      var va1 = S.vx[collision] * ax + S.vy[collision] * ay,
        vb1 = -S.vx[collision] * ay + S.vy[collision] * ax;
      var va2 = S.vx[collision2] * ax + S.vy[collision2] * ay,
        vb2 = -S.vx[collision2] * ay + S.vy[collision2] * ax;
      // New velocities in these axes
      var vaP1 =
        va1 +
        ((1 + S.ed) * (va2 - va1)) /
          (1 + S.mass[collision] / S.mass[collision2]);
      var vaP2 =
        va2 +
        ((1 + S.ed) * (va1 - va2)) /
          (1 + S.mass[collision2] / S.mass[collision]);
      // Undo the projections
      S.vx[collision] = vaP1 * ax - vb1 * ay;
      S.vy[collision] = vaP1 * ay + vb1 * ax;
      S.vx[collision2] = vaP2 * ax - vb2 * ay;
      S.vy[collision2] = vaP2 * ay + vb2 * ax;
    },
    main() {
      var S = this.shared;

      var min = 0;

      for (var i = 1; i < S.n; i++) {
        for (var j = 0; j < i; j++) {
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
            // way to check collision
            if (dx * dvx + dy * dvy < 0) {
              this.collide(i, j);
            }
          }
        } //for j
      } // for i
      //vdistribution();

      S.TKE = 0;
      S.TMOM = 0;

      var r;
      var d;

      for (i = 0; i < S.n; i++) {
        // r is the radius
        r = S.diameter[i] / 2;
        // d is distance spacings between particle and bottom
        d = S.y[i] - S.ymin - r;
        if (S.vy[i] < 0 && d < min) {
          S.vy[i] = -S.ep * S.vy[i];
        } // check bottom reverse vy
        // d is distance spacings between particle and top
        d = S.ymax - r - S.y[i]; // let d .....
        if (S.vy[i] > 0 && d < min) {
          S.vy[i] = -S.ep * S.vy[i];
        } // check top reverse vy
        // d is distance spacings between particle and left
        d = S.x[i] - S.xmin - r; // d become ....
        if (S.vx[i] < 0 && d < min) {
          S.vx[i] = -S.ep * S.vx[i];
        }
        // d is distance spacings between particle and right
        d = S.xmax - r - S.x[i];
        if (S.vx[i] > 0 && d < min) {
          S.vx[i] = -S.ep * S.vx[i];
        }

        // label for the mass introduced by wee
        S.l_m[i] = "" + (i + 1);
        S.speed[i] = Math.sqrt(S.vx[i] * S.vx[i] + S.vy[i] * S.vy[i]);
        S.KE[i] = 0.5 * S.mass[i] * S.speed[i] * S.speed[i];
        S.TKE = S.TKE + S.KE[i];
        S.MOM[i] = S.mass[i] * S.speed[i];
        S.TMOM = S.TMOM + S.MOM[i];
      }

      S.px = S.x[0]; //  what is px is particle coordinate of particle 0
      S.py = S.y[0]; // what is py particle coordinate of particle 0
      // set
      for (var counter = 0; counter < S.m /* Iterations */; counter++) {
        S.pxset[counter] = S.x[counter];
        S.pyset[counter] = S.y[counter];
      }
    },
  },
};
</script>


<style lang="scss">
.Board {
  margin: 10px;
  flex-grow: 2;
  border: 5px double grey;
}
</style>
