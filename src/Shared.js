import Vue from "vue";

export default new Vue({
  data: {
    /*
in array, #0 is the big object
all the rest are the small objects


*/
    numParticles: 500, // nmax+1 // number of particles
    numLarge: 2, // number of large (originally 1)

    sizeSmall: 5, // actual dimensions of small particles
    sizeLarge: 100, // 1-10 // sizeSmall of large particle

    xmin: 0, // min x coord
    xmax: 600, // max x coord
    ymin: 0, // min y coord
    ymax: 600, // max y coord

    t: 0, // time
    timeDelay: 250, // ms per tick
    dt: 0.1, // time increment

    ep: 1, // restitution coefficient for the collision with the walls
    // ep - 0,0.5,1 // coefficient of resititution between particle and wall

    ed: 0.001, // 1 // restitution coefficient for the collision with the smaller particles
    // np: 600, // number of  points for the trace of the particle 0
    // expert: false,
    // track: true,
    //elementinteracted: -1,
    // nmax: 150, // 1 - 100 // number of particles maximum

    x: [], // array[n] // X coordinates for the disks
    y: [], // array[n] // Y coordinates for the disks

    vx: [], // array[n] // X coordinates for the velocities of the disks
    vy: [], // array[n] // Y coordinates for the velocities of the disks
    /*
//vary velocity accoridng to temp
for ( i=1, i<n, i++) {
  --> in initialize
  vx[i]: vmax*(Math.random()-0.5),
  vy[i]: vmax*(Math.random()-0.5),
}

*/
    diameter: [], // array[n]=0.2 // diameters of the disks
    mass: [], // array[n]=1 // mass of the disks
    color: [], // array[n]=1 // color of the disks

    // nv: 30, // ? num of v??
    // V: [], // array[nv]  // velocity array
    // ID: [], // array[nv]

    // b: -0.25, //
    /*
"low temperature","medium temperature","high temperature","very high temperature","extremely high temperature",
if ( option=="low temperature"){
vmax:sizeSmall*2,
  }
  else if ( option=="medium temperature"){
vmax:sizeSmall*2+2,
  }
   else if ( option=="high temperature"){
vmax:sizeSmall*2+4,
  }
   else if ( option=="very high temperature"){
vmax:sizeSmall*2+6,
  }
   else if ( option=="extremely high temperature"){
vmax:sizeSmall*2+8,
  }
*/
    //l_m: [], // array[n]
    speed: [], // array[n]
    KE: [], // array[n]
    TKE: 0, // ??
    MOM: [], // array[n]
    TMOM: 0, // ??
    //TOLERANCE: 0.001, // tolerance for the collisions
    horizontalRebound: true, // whether there was a rebound with a horizontal wall
    //rebound: 0, // the disk that first rebounded with a wall
    collision1: 0, // the disk that collided
    collision2: 0, // the disk that collided
    // g: 0, //
    // showv: false, // show velocity
    //see: true, //
    /* 
true:
 for ( i=1, i<n, i++) {
  diameter[i]: 0.2 ,
}
false:
for ( i=1, i<n, i++) {
  diameter[i]: 0.02 ,
}
*/

    m: 1, // ?
    pxset: [], // array[m]
    pyset: [], // array[m]
    // xvst: true, //
    // world: true, //
  },
  computed: {
    vmax() {
      var velocity = 10;
      return this.sizeSmall * 2 + velocity;
    },
  },
  methods: {
    showNum(arrayName, i) {
      var decimals = 1;
      // var dummy;// = this.time;
      var n = this[arrayName][i] || 0; // * dummy;
      var parts = (n.toString() + ".000").split(".");
      return `${parts[0]}.${parts[1].substring(0, decimals)}`;
    },
  },
});
