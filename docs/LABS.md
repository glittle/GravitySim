# Lab writeups

Thesis and 2020 Thoughts live in [WORKING-NOTES.md](WORKING-NOTES.md). This file is the post-run lab record: technical analysis plus leftover/two-media reflection after each GravitySim run. If this file gets huge, split into `docs/labs/` (one file per run) and keep this as the index.

WHAT THE LABS HAVE EARNED (1 Sep 2026)

Origin GravitySim, namespace gravity1, repo gravity1/tmp-9132a073d81b4d2b. These are labs for weights, not a fit to the Sun, G, or Hubble. Isolated leftover (no body, or rain off) is the null on every run that claims a force. C-gravitons stay sizeless rays. LCM is a continuum around bodies except where a grain run was a control. MI are opaque resolved bodies. Heat from absorption is allowed.

Earned

1. Leftover collision push is real in the toy. Two hard opaque bodies in isotropic rain: 2D leftover is inverse-linear; 3D leftover is inverse-square. Drag from a rain headwind is a microscope at physical superluminal cg, not the pair force.

2. Volume / optical depth. Leftover tracks tau. It saturates toward the hard-sphere leftover as the body goes dark. Heat can sit inside a thin body rather than only on a skin. Planetary optical depth is an output, not a requirement.

3. Absorb vs bounce. Inelastic leftover (outgoing rain slowed) matches absorb for force. Elastic specular leftover is about zero. Reflected rain need not keep incoming speed. Elastic bounce is contrast only.

4. Prescribed LCM light-bend. A ray in n = 1 + Gaussian pile bends toward the body. Rain does not push the ray. This is not a solar 1.75 arcsec fit. n(r) was inserted, not sourced from leftover packing.

5. Tired light, smear. Distant light is unblurred over universe-scale paths; allowed smear is effectively zero. Wide-angle Lambert grain scatter smears and is out. Continuum drain dE/ds = -alpha (n-1) E can drop energy on a long path with zero extra smear if there is no angle kick. alpha is a lab constant, not Hubble. Supernova time dilation, Tolman surface brightness, and 2.7 K CMB are untouched by the smear null.

6. Leftover on LCM around a core is inward (squeeze). A finite LCM blob in empty rain also self-shadows; the core adds extra squeeze, strongest at small r. No equation of state in that run.

7. Pair leftover with LCM clouds stays attractive. Overlapping clouds do not make leftover repulsion. Clouds steal rain from the core. One MI versus a few is a weight, not a nucleon.

8. Hard LCM-LCM overlap (rigid atmospheres) is apart only while the clouds overlap, and exactly zero once they separate. Leftover still pulls together at every distance. The stiffness number used there is mixed units, not a derived spring.

9. Mobile discrete LCM grains (m = 1, N = 100, thin tau) blow off. Mean leftover on the grains is inward. One-sided rain kicks unbind them. Elastic LCM-LCM did not stall a halo. Grain blow-off is a discrete-kick artifact.

10. Continuum LCM (radial fluid, leftover as force density, T = 0 excluded-volume packing). Leftover-off sits. Pressureless leftover collapses onto the MI. Leftover plus packing packs a crust on the MI. That is not a diffuse TVF atmosphere, and not a spring. Do not add temperature just to hold a halo.

11. Two packed crusts on a 1D axial tube (no MI-MI floor). Packing did not reverse at first crust contact. Midplane density stayed at n_pack. Cores passed through each other. Fluid merged in 1D; the tube cannot spill sideways. That is not a 3D envelope merger, and it is not charge.

12. Hard MI-MI floor (--two-crust --mi-contact). Hold at contact. Cores stop at d = 2 r_mi and stay. Packing does not reverse (F_apart,pack still together / outer-wall squeeze). Leftover-off does not drift. Isolated leftover |F|/err = 1.08. Packing-off leftover also sits on the floor instead of flying through. This is not charge. 1D-tube caveat: fluid cannot spill sideways. The floor only answers that cores cannot occupy the same point, not that envelopes bounce.

13. 2D two-crust so LCM can leave the contact gap off-axis (--two-crust-2d). Blow off. Leftover still pins the cores at d = 2. Packing still does not reverse. Most LCM leaves the plane (escaped fraction 0.81). At meeting d0 the gap does not stay packed. Isolated leftover |F|/err = 1.34. Leftover-off does not drift. The 1D on-axis fluid hold was a tube artifact. 2D caveat: still not 3D. This is not charge. Do not add T to hold a halo, and do not go to 3D just to chase a sit.

14. Leftover-sourced n light-bend (--sourced-n). Skin-only. Leftover+packing n around one MI is one packed bin on the MI (0.565 of LCM is inside the opaque body; 0.435 sits at r = 1.26 r_mi). Rays that clip that skin bend; past the crust (b ≥ 1.8 r_mi) deflection is 0. Vacuum max|δ| = 0. The prescribed Gaussian, at the same peak δn = 0.2, still bends at b = 2.5–4 where sourced is 0. The 1.027 rad through-skin peak is a concentrated ∇n at the packed-bin drop, not an extended halo and not a Sun / G / Hubble fit. Isolated leftover |F|/err = 1.15. Light rides LCM; leftover rain does not push the ray.

15. Finite rain mean free path (--mfp) as coded was shadow-fill, not leftover. After a first hit on A it credited B with weight 1-exp(-s/lambda). Glen: rain from far away either hits an opaque MI or it does not. A hit on A never reaches B. Empty space cannot absorb. If rain went through A unimpeded, A is not there. The cutoff classifier was that extra credit filling the shadow. Not a flatten, not leftover physics. Do not scan lambda looking for a flatten.

16. First-hit leftover with frozen background LCM (--mfp-lcm). A hit on A never reaches B. Leftover stays attractive at every d. LCM-off recovers 1/d^2. LCM-on F rises with d because the LCM was a finite ball (R=16, lambda=6): the pair sits deep at small d and nearer the edge at large d. Isolated leftover |F|/err = 1.72. About 98% of rays stop on LCM. Classifier: other. Not 1/d^2, not a cutoff, not a flatten, not a v(r) fit.

17. Two jobs. GCM leftover on opaque MI is the 1/d^2 push. Light rides background LCM, the unpacked bath, not a leftover crust. T=0 leftover packing is a crust or a blow-off. Sourced n is a skin. Optical GR is not derived from leftover packing. Stop puffing an atmosphere to save it.

18. Tired-light drain from rain hits on background LCM (--tired-bath). No MI. Uniform LCM slab, no edge on the path. E = E0 exp(-kappa N) with lab kappa = 0.0002 per path-tube hit, not inserted alpha(n-1). Rain-off and no-LCM: delta E = 0. Smear rms = 0 by the no-kick rule (leftover rain does not kick the ray). Hits stay linear in s. This is the linear Hubble form, not 70 km/s/Mpc. kappa is still a lab constant. SN dilation, Tolman, and 2.7 K were not this lab.

19. Crest interval (--tired-interval). Two ticks on the --tired-bath path. Rain-on E/E0 = 0.240 at s=40 so 1+z = 4.17, but Δt_obs/Δt_emit = 1 at every s (8, 16, 24, 32, 40). Rain-off: stretch = 1 and ΔE = 0. Drain changes E; it does not stretch the crests. No clock well, no c(E). This is the SN-dilation hole as a lab, not a supernova fit.

20. First-hit leftover on a test MI outside an extended hex disk (--mfp-ext). Frozen LCM in a box [-177,177]^3, one λ=12, first hit only, no shadow-fill. LCM-on F = 0 at every d: rain stops on LCM before either MI. Isolated leftover is also 0 (no hits). LCM-off leftover is real at d=5.5 (7.6σ, F=3.34e-5); farther d is rain noise. Classifier: cutoff in the optically thick sense, not a flatten, not a v(r) fit. Do not scan λ looking for rain to arrive. The no-edge box and a reachable MI cannot both be true at λ=12 in that geometry.

21. Vacuum leftover on the same hex disk with leftover-lab rain, LCM off (--mfp-ext --lcm-off). Same 7 opaque MIs, r_mi=1, in-plane spacing 2.2, outer surface 3.2, test MI at (d,0,0), first hit only, no λ. 12e6 rays × 16 batches, seed 1. Isolated leftover |F|/err = 0.59 (Fx = -1.2753e-05 ± 2.1568e-05). Classifier: 1/d^2 (χ²_1/d² = 22.91 ≪ χ²_1/d = 238.30). Usable past contact: 33σ at d=5.5, then >2σ at 6.5, 8, 10, 12, 20. F·d² is not constant (drops ~1.8× from d=5.5 to 12); that is finite-disk near-field, not a flatten. Far d≥24 is noise. This is the vacuum control TVF needs. Finite-λ flatten is still not earned. Vacuum hex-disk leftover is 1/d².

22. Local LCM leftover on the same disk (--mfp-ext-lcm-local, same as --mfp-ext --lcm-local). Same 7-MI hex disk as lab 21 (r_mi=1, spacing 2.2, outer 3.2), test MI at (d,0,0), leftover-lab isotropic rain, first hit only, no --mfp shadow-fill, no 12λ wall. LCM is one frozen local ball around the pair midpoint, R = d/2 + outer + 4 r_mi (grows with d: 9.95 at d=5.5 to 23.2 at d=32). λ=24, not scanned. Rain spawned just outside that ball. τ(spawn→test)=0.30, path=7.2. Empty space outside the bath does not absorb. Rain arrived: 404741 first-hits on the test MI (80005 at d=5.5, 10983 at d=32). 12e6 rays × 16 batches, seed 1. Isolated leftover (test MI, disk off, LCM on): |F|/err = 1.84 (NOT a null). Vacuum isolated was 0.59. Isolated F_x = -5.59e-5 ± 3.03e-5. frac_MI=0.022, frac_LCM=0.273. The bath itself pushes the test. Classifier LABEL is 1/d, not 1/d², not a flatten, not a cutoff. χ²_1/d=256 ≪ χ²_1/d²=928. All 10 points F>2σ. F·d climbs 1.94× far/near so 1/d is a better stamp, not a fit. F still falls (5.01e-4 at d=5.5 to 1.87e-4 at d=32). Vacuum (lab 21) on this disk was 1/d² and died into noise by d~24. With the bath, F stays 1.87e-4 at d=32. Geometry mix: test sits at 0.28R (d=5.5) then 0.69R (d=32) in a growing ball (same family as the old ball-edge). Gap τ also becomes O(1) by far d. Those two are not separated. Do not claim leftover-in-LCM is 1/d. Park "leftover becomes 1/d in LCM." Rain through, shape slowed vs vacuum, isolated in the bath is not a null; 1/d is not earned. Results in results/mfp_ext_lcm_local/.

| d | F | F·d² | n_test |
| ---: | ---: | ---: | ---: |
| 5.5 | 5.01e-4 | 0.0152 | 80005 |
| 8 | 3.81e-4 | 0.0244 | 62429 |
| 12 | 3.13e-4 | 0.0450 | 42996 |
| 20 | 2.63e-4 | 0.105 | 22801 |
| 32 | 1.87e-4 | 0.192 | 10983 |

23. Frozen-bath leftover (--mfp-ext-lcm-frozen, same as --mfp-ext --lcm-frozen). Same 7-MI hex disk. Test MI at the origin (bath center). Disk center at (−d, 0, 0). LCM is one frozen uniform ball, R = 80, that does not grow or recenter. λ=24 (not scanned). Rain is leftover-lab isotropic, spawned locally around the pair (impact = d/2 + outer + 4 r_mi), not from the R=80 surface (that would be τ = R/λ = 3.33, the lab-20 wall) and not a 12λ cube. τ(spawn→test)=0.321. First hit only. No --mfp fill. 12e6 rays × 16 batches, seed 1. Rain arrived: 380817 first-hits on the test MI (77451 at d=5.5, 9034 at d=32). Isolated leftover (test at origin, disk off, same R=80 ball): |F|/err = 1.90 (passed the ≲2 gate; not a cleaner null than lab 22's 1.84). Vacuum isolated was 0.59. Isolated F_x = -5.44e-5 ± 2.87e-5 along −x even with the disk gone. frac_MI=0.022, frac_LCM=0.952. frac_LCM jumped 0.27→0.95 vs lab 22 and isolated F did not move, so this is leftover-lab aim on a lone MI, not bath leftover on the test. Table is leftover-on-disk. Classifier: other. χ²_1/d=189 ≪ χ²_1/d²=779, but F·d climbs 1.84× far/near, so 1/d is not a leftover law. All 10 points F>2σ. F still falls (4.91e-4 at d=5.5 to 1.65e-4 at d=32): not a flatten, not a cutoff. F(d) sits on lab 22. Freezing the ball did not bring 1/d² back. The growing ball was not the extra. Gap τ (d/λ from 0.23 to 1.33) is still the live candidate. Do not claim leftover-in-LCM is 1/d. Results in results/mfp_ext_lcm_frozen/.

| d | F | F·d² | F·d | n_test |
| ---: | ---: | ---: | ---: | ---: |
| 5.5 | 4.91e-4 | 0.0148 | 0.00270 | 77451 |
| 8 | 3.70e-4 | 0.0237 | 0.00296 | 59814 |
| 12 | 3.02e-4 | 0.0434 | 0.00362 | 40510 |
| 20 | 2.46e-4 | 0.0984 | 0.00492 | 20437 |
| 32 | 1.65e-4 | 0.169 | 0.00529 | 9034 |

24. Thin-gap leftover (--mfp-ext-lcm-frozen-thin). Same frozen geometry as lab 23: test MI at the origin, disk at (−d, 0, 0), R=80 fixed, leftover-lab rain spawned locally around the pair (not from the R=80 surface). Only change: λ=240, not scanned. τ(spawn→test)=0.032 (lab 23 was 0.321). d_max/λ=0.13. Gap τ = d/λ from 0.023 to 0.133. 12e6 rays × 16 batches, seed 1. Isolated leftover (test at origin, disk off, same ball): |F|/err = 2.18 > 2. STOP. No F(d) table. Rain on the isolated MI: n_MI = 325101 — not a dead-rain fake null. Isolated F_x = -5.32e-5 ± 3.08e-5 (same leftover-lab aim as labs 22 and 23). The cut was F_z = 5.64e-5 ± 2.59e-5 (2.18σ). frac_MI=0.027, frac_LCM=0.295. λ was not lowered. Gap τ was not tested. Glen: stop here; do not run the table; do not change spawn. Classifier: other (stop). Results in results/mfp_ext_lcm_frozen_thin/. Lab 23 was not overwritten.

25. Origin-centered spawn, isolated-only (--mfp-ext-lcm-frozen-iso). Same frozen geometry as labs 23-24 (test at origin, disk at (-d,0,0), R=80, λ=240). The one change: leftover-lab rain is one fixed sphere centered on the origin, R_spawn=39.2, launch=39.7, same sphere for isolated and F(d). Not pair-midpoint. Not the R=80 wall. Pair-aim hunch discarded: labs 23-24 isolated was already origin-aimed on a small R=6 sphere; the repeated Fx~-5.4e-5 was seed+17 rain on that sphere. The real hole was isolated vs table spawn mismatch (R=6 vs growing pair-mid). 12e6 rays × 16 batches, seed 1. Isolated |F|/err = 2.26 > 2. STOP. No F(d). Rain arrived (n_MI=6554). Old Fx gone (Fx=-6.03e-6, 1.98σ). Cut was Fy=+8.15e-6 ± 3.61e-6 (2.26σ). frac_MI=0.0005, frac_LCM=0.380. τ(spawn→test)=0.165. λ and R_spawn were not scanned. Classifier: other (stop). Results in results/mfp_ext_lcm_frozen_iso/. Labs 23-24 not overwritten.

26. 4× isolated rays, then thin-gap F(d) (--mfp-ext-lcm-frozen-iso-4x). Same origin-centered spawn as lab 25 (R_spawn=39.2, λ=240, R=80, seed 1). The one change: 48e6 rays × 16 batches. Isolated |F|/err = 0.66 (null). Lab 25's 2.26 was Monte Carlo noise; Fy dropped toward zero. n_MI=26370 (~4× lab 25). Rain arrived. n_test flat (~26k at d=5.5 and d=32). Classifier LABEL 1/d²: χ²_1/d²=1.66 vs χ²_1/d=5.80; F·d² far/near=1.31 (lab 23 was 6.78); F·d far/near=0.26 (not flat). Isolated is a null. Far leftover dies into noise like vacuum (lab 21). Lab 23 live-at-32 did not return. χ² 1.66 vs 5.80 is a preference, not a slam dunk like lab 21 (23 vs 238). Six of ten points F>2σ. d=8 is a dip. Absolute F is smaller because rain is spread over R_spawn=39.2; that is normalization, not a law. Caveat: lab 23 used pair-mid table spawn AND λ=24; this run is origin-centered AND λ=240. Gap τ vs spawn family not fully split. Not a flatten. Results in results/mfp_ext_lcm_frozen_iso_4x/. Labs 23-25 not overwritten.

| d | F | σ | n_test |
| ---: | ---: | ---: | ---: |
| 5.5 | 1.77e-5 | 9.5 | 25500 |
| 6.5 | 1.51e-5 | 9.6 | 25583 |
| 8 | 3.93e-6 | 2.2 | 26190 |
| 10 | 6.21e-6 | 3.3 | 26364 |
| 12 | 3.57e-6 | 2.2 | 26373 |
| 16 | 3.63e-6 | 2.0 | 26674 |
| 20-32 | noise |  | ~26k |

27. Origin-centered spawn at λ=24 (--mfp-ext-lcm-frozen-iso-lam24). Same rain as lab 26 (R_spawn=39.2, launch=39.7, 48e6×16, seed 1). The one change: λ=24 (lab 23's value, not scanned). τ(spawn→test)=1.654 (lab 26 was 0.165; lab 23 pair spawn was 0.321). Isolated |F|/err=1.65 (null). Rain arrived: n_test flat (5912 at d=5.5, 6022 at d=32), total 60764. τ=1.65 thinned rain (~4× below lab 26) but did not kill it. λ was not lowered. Classifier: other. χ²_1/d²=2.69 vs χ²_1/d=1.32 so 1/d² is not earned. F·d far/near=-0.05, not flat, so not 1/d. F far/near=-0.011 (vacuum 0.010, lab 23 0.336). d=32 is 0.05σ. Lab 23 was live there (F=1.65e-4). Five of ten points F>2σ. d=24 is a 3.1σ bump, not lab 23's monotonic live far field. First classifier stamp was slower-than-1/d²; that was a fallthrough. Far F had already died. Corrected label is other. Lab 23's slow fall was pair-mid spawn, not gap τ. Absolute F is smaller (e^{-τ} plus spawn area); normalization, not a law. Not a flatten. Results in results/mfp_ext_lcm_frozen_iso_lam24/. Labs 23-26 not overwritten.

28. Two couplings on one unpacked LCM bath (--two-coupling). Not the hex disk. Two opaque MIs, r_mi=1, frozen uniform LCM at n=1.20, first hit only, origin-centered spawn (R_spawn=20, λ=240, τ_GCM spawn→test=0.085). Isolated (partner off, same bath, same spawn): |F|/err=1.32 (null after one 4×; 48e6 rays; n_MI=110291; frac_LCM=0.338). LCM-off pair leftover: 1/d² (χ² 1.88 vs 90.4). LCM-on: rain arrived (n_MI flat ~2.1e5 per d). Classifier: other. χ²_1/d²=22.1 is not ≪ χ²_1/d=41.9. F·d far/near=1.03, not a 1/d law. Far leftover did not die like vacuum: at d=16, F=2.73e-5 (10σ) vs LCM-off 3.37e-6 (~8×). F still live is not a flatten. Light on the same n: drain-from-rain (N_hits=1148 at s=40, ΔE/E0=0.205, E/E0→0.795), smear rms=0 by no-kick, Δt_obs/Δt_emit=1.000 at every s; rain-off ΔE=0 and stretch=1; τ_GCM on the light path=0.167. Two-coupling split not earned: light did its job; leftover did not stay vacuum 1/d². Thin τ let rain reach the MIs (not a same-τ starve). Hypothesis that small τ_GCM keeps leftover vacuum-like is discarded. Not a Hubble / SN / flatten fit. Results in results/two_coupling/. Labs 21–27 and tired-bath / tired-interval not overwritten.

| d | F (LCM on) | F (LCM off) |
| ---: | ---: | ---: |
| 2.2 | 1.22e-4 | 1.27e-4 |
| 6 | 2.52e-5 | 1.02e-5 |
| 16 | 2.73e-5 (10σ) | 3.37e-6 |

29. Two-coupling window map (--two-coupling-window). Same pair, n=1.20, origin-centered spawn (R_spawn=20) as lab 28. Finite 3×3 grid, not a λ hunt for flatten. λ ∈ {480, 240, 80} (τ_GCM ≈ 0.043, 0.085, 0.256). κ ∈ {0, 0.0002, 0.001}. Isolated null at all three λ (1.16, 1.32, 0.89) after one 4× each. Rain arrived. Leftover classifier other at all three: far F at d=16 stays live (5.3σ / 10σ / 27σ). χ² 1/d² vs 1/d: 5.51 vs 57.8 (λ=480), 22.1 vs 41.9 (240), 192 vs 90.2 (80). Thicker leftover τ makes far leftover more live, not less. λ=480 is closest to 1/d² on χ²; d=16 still does not die. Window: every finite-κ cell FAIL because leftover is not 1/d². Light at finite κ does drain, smear=0, stretch=1. κ=0 holds (ΔE=0, stretch=1). Window empty in this coding. Not a physical scale, not a c_g, not a flatten. Results in results/two_coupling_window/. Lab 28 not overwritten.

| λ | κ=0 | κ=0.0002 | κ=0.001 |
| ---: | :---: | :---: | :---: |
| 480 | CONTROL | FAIL | FAIL |
| 240 | CONTROL | FAIL | FAIL |
| 80 | CONTROL | FAIL | FAIL |

| λ | F(d=2.2) | F(d=16) |
| ---: | ---: | ---: |
| 480 | 1.25e-4 | 1.55e-5 (5.3σ) |
| 240 | 1.22e-4 | 2.73e-5 (10σ) |
| 80 | 1.09e-4 | 6.71e-5 (27σ) |

Not earned (still open, or parked on purpose)

- SN time dilation. Lab 19: energy loss en route does not stretch the time between two crests if both travel at the LCM speed. A weeks-long pulse is a negligible fraction of λ_E, so chirp does not give (1+z). This is the hole. Do not add a clock well or c(E) just to make it sit.
- Hubble as a measured number (kappa is inserted; N proportional to s is the form).
- Tolman surface brightness. CMB 2.7 K as equilibrium of this bath.
- λ scan. Do not scan λ looking for a flatten.
- v(r) fit. Do not fit v(r). Do not fit Hubble. Do not fit a flatten.
- A flattened rotation curve from finite GCM range. Two-body --mfp was shadow-fill. --mfp-lcm F-rise was a ball edge. --mfp-ext LCM-on is an optically thick wall (F=0). Vacuum hex-disk leftover is 1/d² when rain arrives (lab 21). Local LCM leftover stamped 1/d; 1/d is not earned. Frozen-bath leftover (lab 23) live-at-32 was pair-mid table spawn, not gap τ (lab 27: origin-centered, λ=24, far F died). Thin-gap origin-centered leftover (lab 26, λ=240) dies far like vacuum; 1/d² is a label, not a slam dunk. TVF flatten is not earned.
- leftover becomes 1/d in LCM. Lab 22/23 stamps were pair-mid / growing-ball spawn. Origin-centered spawn (labs 26-27) does not give a 1/d law. Not earned.
- Two-coupling split. Lab 28: light did its job on the same unpacked bath; leftover did not stay vacuum 1/d². Small τ_GCM does not keep leftover vacuum-like. Not earned.
- Two-coupling window. Lab 29: window empty. Leftover never 1/d² on this three-λ grid once LCM is on. Far F live is other, not flatten. Not earned.
- An extended leftover-sourced atmosphere for light. Sourced n is a skin.
- A sitting diffuse LCM halo. T = 0 packing is a crust; in 2D it blows off. Do not add T.
- Charge, nuclei, electrons, magnetism. Leftover on overlapping clouds stays attractive. Packing does not reverse at contact.
- Rain-pressure packing of MI (circular with G). Finite C-graviton size (off). Sun / G / Hubble numerical fit.

Ontology that survived

Force is leftover collisions of substance. Two media, two jobs: GCM leftover on opaque MI was 1/d² in vacuum; packing is crust or blow-off; tired light on unpacked background LCM. Heat from absorption is a feature. Drain needs rain and LCM. Empty space does not absorb. Rain hits an MI or it does not. Drain drops E and does not stretch Δt. A 12λ LCM box is a wall, not a galaxy. Vacuum leftover on an extended opaque mass is 1/d² when rain arrives. Isolated and the F(d) table must share spawn. Labs 23-24 isolated R=6 vs pair-mid table was a leftover-lab hole; lab 25 stopped on isolated 2.26; lab 26 at 4× rays isolated 0.66 (lab 25 was noise). Origin-centered leftover in an LCM bath dies far like vacuum at λ=240 (lab 26, label 1/d², not a slam dunk) and at λ=24 (lab 27, classifier other). Lab 23's live-at-32 slow fall was pair-mid spawn, not gap τ. Leftover-in-LCM as 1/d is not earned. TVF flatten is not earned. Lab 28 two-coupling split is not earned: light on the same unpacked bath did drain / smear 0 / interval 1; leftover did not stay vacuum 1/d². Lab 29 two-coupling window is empty: leftover never 1/d² on this three-λ grid once LCM is on; far F live is other, not flatten. Hex-disk leftover-vs-d is still at a stop. Light rides unpacked LCM. One optical depth still doing three jobs is a hole; leftover-packed n is not the light bath.

Corrections to earlier sections in this file

PURPOSE said simulation later. Origin GravitySim is the lab; this file now tracks what it earned.

The one-page line that the same flux packs LCM around mass, and that bending is refraction in that pile, is a sketch the labs did not earn. Leftover packing is a crust or blow-off. Light-bend from leftover n is a skin. Tired light is a wave in the background bath.

--mfp cutoff was not leftover. --mfp-ext LCM-on cutoff was optical thickness from the box wall, not finite-range leftover. Vacuum LCM-off with leftover-lab rain earned 1/d² (lab 21). Local LCM leftover 1/d is not earned. Frozen-bath leftover (lab 23) live-at-32 was pair-mid table spawn, not gap τ (lab 27). Thin-gap leftover (lab 24) stopped on isolated 2.18; origin-centered spawn (labs 25-27) killed that isolated hole; lab 26 4× isolated 0.66 and thin-gap F(d) dies like vacuum; lab 27 λ=24 origin-centered is other, far F died. Quantum-scale charge is still a sketch.

Tired light: zero-smear grain scatter is out. Prescribed-alpha drain and rain-sourced drain (hits on LCM) both drop E with smear 0 by no-kick. Hubble number not derived. SN dilation is a lab hole: interval stays.

Two-layer watch list: (1) leftover 1/d and 1/d², earned in vacuum on an extended hex disk. Origin-centered LCM leftover dies far like vacuum (labs 26-27); 1/d² is a lab-26 label, not a slam dunk; lab 27 is other. (2) prescribed LCM bend, earned; leftover-sourced n earned as a skin, not an extended halo. (3) drain-from-rain on background LCM, earned as form; Hubble not derived; SN dilation tested and interval stays. (4) two-body finite GCM mfp as leftover is not earned (--mfp was shadow-fill; --mfp-lcm was a ball edge; --mfp-ext LCM-on was a thick wall). Lab 23 live-at-32 was pair-mid spawn, not gap τ. Flatten from an extended mass is not earned and is not a fit. Leftover-vs-d on the hex disk is at a stop.

Next physics

Leftover-vs-d on the hex disk is at a stop. Two-coupling split is not earned (lab 28). Two-coupling window is empty (lab 29): leftover never 1/d² on this three-λ grid once LCM is on; far F live is other, not flatten. Lab 23's slow fall was pair-mid spawn, not gap τ. Do not scan λ looking for a flatten. SN dilation stays parked; do not add a clock well or c(E). No next lab until Glen says go.
