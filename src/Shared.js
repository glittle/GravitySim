import Vue from "vue";

export default new Vue({
  data: {
/*
in array, #0 is the big object
all the rest are the small objects


*/
    xmin: 0, // min x coord
    xmax: 10, // max x coord
    ymin: 0, // min y coord
    ymax: 10, // max y coord
    t: 0, // time
    timeDelay: 500, // ms per tick
    dt: 0.1, // time increment
    ep: 1, // restitution coefficient for the collision with the walls
    // ep - 0,0.5,1 // coefficient of resititution between particle and wall

    ed: 1, // restitution coefficient for the collision with the smaller particles
    np: 600, // number of  points for the trace of the particle 0
    expert: false,
    track: true,
    elementinteracted: -1,
    nmax: 50, // 1 - 100 // number of particles maximum
    n: 51, // nmax+1 // number of particles
    x: [], // array[n] // X coordinates for the disks
    vx: [], // array[n] // X coordinates for the velocities of the disks
    y: [], // array[n] // Y coordinates for the disks
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
    nv: 30, //
    V: [], // array[nv]  // velocity array
    ID: [], // array[nv]
    b: -0.25, //
    size: 0, // actual dimensions of the particle 0
    px: 0, // particle coordinate x of particle 0
    py: 0, // particle coordinate y of particle 0
    scale: 0.1, // scale the velocity vector arrow
    sizen: 5, // 1-10 // size of large particle
    /*
"low temperature","medium temperature","high temperature","very high temperature","extremely high temperature",
if ( option=="low temperature"){
vmax:size*2,
  }
  else if ( option=="medium temperature"){
vmax:size*2+2,
  }
   else if ( option=="high temperature"){
vmax:size*2+4,
  }
   else if ( option=="very high temperature"){
vmax:size*2+6,
  }
   else if ( option=="extremely high temperature"){
vmax:size*2+8,
  }
*/
    l_m: [], // array[n]
    speed: [], // array[n]
    KE: [], // array[n]
    TKE: 0, //
    MOM: [], // array[n]
    TMOM: 0,
    TOLERANCE: 0.001, // tolerance for the collisions
    horizontalRebound: true, // whether there was a rebound with a horizontal wall
    rebound: 0, // the disk that first rebounded with a wall
    collision: 0, // the disk that collided
    collision2: 0, // the disk that collided
    g: 0, //
    showv: false, // show velocity
    see: true, //
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
    m: 1, //
    selected: "N: 100",
    pxset: [], // array[m]
    pyset: [], // array[m]
    Width: 400, // or 100%
    Height: 500, // or 100%
    xvst: true, //
    world: true, //
  },
  computed: {
    vmax() {
      return this.size * 2 + 8;
    },
  },
});
