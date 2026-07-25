<!--
================================================================================
  K Global — AIRFRAME PACK · SIM-MODEL  ·  CRJ7 Bombardier CRJ700
  Approved & tested models, quirks and limitations. NOT an install guide —
  users are assumed competent to install and configure their own add-ons.
  FLAG LEGEND  🟥 hard constraint/blocker   🟧 caution/limitation   🟩 normal/confirmed
================================================================================
-->

# CRJ7 — Bombardier CRJ700 · Sim-Model

**CRJ7 / CRJ series** · represented in-sim by the model(s) below · sim = X-Plane 11
**Version** v0.1 · **Updated** 2026-07-25 · **Status** Draft

> **Read-me:** Which add-on(s) K Global **approves and has tested** to represent this ICAO type, and the quirks, constraints and limitations that matter in operation. Not an installation guide — setup is the pilot's responsibility. **No model here is yet formally approved by K Global — that is a management decision still open** 🟧 `[VERIFY]`. Flag legend 🟥 hard constraint · 🟧 limitation · 🟩 normal.

---

## 1. Approved & tested models

| Model (developer + product) | Sim / ver tested | Systems depth | Status |
|---|---|---|---|
| **AD Simulations / DeltaWing Simulations CRJ-700** | X-Plane 11 / 12 `[VERIFY — K Global test]` | high — custom FMS/CDU, EICAS with caution/warning messaging, custom EFB/tablet, modelled anti-ice/ice-detection annunciation | 🟧 Conditional — leading candidate; approval pending |
| X-Plane 11 / 12 default fleet | X-Plane 11 / 12 | — | 🟥 Not recommended — **neither XP11 nor XP12 ships a default CRJ700/900**; no factory fallback exists for this type |
| JRollon **CRJ-200** (X-Plane) | X-Plane 11 | high (different type) | 🟥 Not recommended — **wrong sub-type**: the JRollon product models the CRJ-200 (hard wing, older Pro Line 4 fit, distinct systems and handling), not the CRJ700/900 family this pack documents. Do not substitute. |

*Status key: 🟩 Approved — tested, cleared for line use · 🟧 Conditional — usable with the noted limitations · 🟥 Not recommended — known blocker, avoid.*

**Honest position on the "approved model" gap 🟧 `[VERIFY]`:** as of this draft K Global has **not** run a formal in-house test-and-approve pass on the CRJ700 add-on, so nothing here is 🟩 Approved. The AD Simulations/DeltaWing CRJ-700 is the only genuine, purpose-built CRJ700 product currently found in the public X-Plane market — there is no competing developer offering for this exact sub-type. Its published feature set (custom FMS/CDU, EICAS caution/warning system, modelled fuel/electrical/hydraulic/ice-detection logic, custom EFB) covers the normal-ops ground this pack needs to be usable day one. The Intro §2 mapping line (`Sim model: AD Simulations/DeltaWing CRJ-700 [VERIFY]`) resolves **here** once the model is tested and management confirms it — until then this file, the Checklist and the QRH are written to this candidate and every model-specific figure stays `[VERIFY]`.

## 2. Type ↔ model fidelity note 🟧

- **Sub-type matching is the fidelity trap for this family**, not an engine-generation mismatch as with widebody neo/ceo pairs. The CRJ product line spans the CRJ100/200 (older, hard wing, no leading-edge devices) and the CRJ700/900/1000 (redesigned wing **with** leading-edge slats, larger tail, updated systems). **Confirm the flown add-on models the CRJ700** — a CRJ-200 product (e.g. JRollon's) would not match this pack's wing, weights, engine fit or systems section and must not be used to represent the CRJ7 documented here. Cross-ref Intro §6 (wing/icing premise correction).
- **AD Simulations/DeltaWing CRJ-700** models the correct CRJ700/CL-600-2C10 airframe — no sub-type mismatch. 🟩 (fidelity) / 🟧 (approval still pending)
- The same developer sells a separate **CRJ-900** product (see the CRJ9 Sim-Model) built on the same engineering base — preferring this developer across both packs minimises systems-behaviour drift a crew would not see on the real, common-rated aircraft.
- Cross-ref: **Intro §2** (real→SimBrief→sim mapping) and **Dispatch §2** (SimBrief setup). No K Global reference OFP exists yet for this type (Dispatch §7 watch-item) — burn/fidelity comparisons cannot yet be validated against a flown mission.

## 3. Systems-depth caveats

- **AD Simulations/DeltaWing CRJ-700:** custom FMS/CDU (RTU-style route/perf entry), EICAS-style primary/secondary caution-and-warning display, modelled electrical system (AC ESS XFER/MAN bus logic, generator messages), fuel system (independent boost pumps, crossfeed/transfer), ground-lift-dumping (spoiler) logic, ice-detection EICAS message, cabin-pressurisation panel, APU start/shutdown flow, and a custom EFB/tablet — deep enough that the Checklist below can be flown largely as normal ops. **Known limitation:** the product has an active update cycle (frequent flight-model and systems-logic revisions per its public changelog) — verify each Checklist/QRH item is actually simulated **in the installed version** before relying on it 🟧 `[VERIFY]`.
- **General:** the product does not reproduce certified real-world performance data. Do **not** describe installation here — pilots are assumed competent to install, configure and update their own add-on and navdata.

## 4. Quirks, constraints & limitations

| Area | Flag | Model | Detail / operational impact | Workaround |
|---|---|---|---|---|
| No default/factory CRJ | 🟥 | XP11/12 | Neither sim ships a default CRJ700/900 — there is no fallback if the payware product is unavailable | Standardise on the AD Simulations/DeltaWing CRJ-700; no substitute exists |
| Sub-type match | 🟥 | AD Simulations/DeltaWing | Must be the **CRJ-700** product, not the CRJ-200 (JRollon) or the CRJ-900 product used for the wrong pack | Confirm product listing states CRJ700/CL-600-2C10 before purchase/install |
| Active update cycle | 🟧 | AD Simulations/DeltaWing | Frequent flight-model/systems revisions per public changelog — behaviour may shift between versions | Re-verify Checklist/QRH items after each update before relying on them |
| Navdata / AIRAC | 🟧 | AD Simulations/DeltaWing | FMS/CDU routing and procedures depend on the pilot's installed AIRAC cycle | Keep a current AIRAC cycle; mismatch causes discontinuities/missing SIDs-STARs |
| Perf realism | 🟧 | AD Simulations/DeltaWing | Modelled performance is approximate; not certified data | Treat public SKYbrary/TCDS figures (Intro/Dispatch) as the planning authority, not the sim's own figures |
| No reference OFP | 🟧 | AD Simulations/DeltaWing | No K Global CRJ7 OFP flown yet (Dispatch §7) | Burn/CI validation against a flown mission remains open |

## 5. Constraints that affect dispatch or procedures 🟥

- **Approved-model decision is open 🟥 `[VERIFY]`.** Until K Global tests the AD Simulations/DeltaWing CRJ-700 (the only purpose-built candidate) and management confirms it, the pack cannot go Verified and the Intro §2 sim line stays `[VERIFY]`.
- **CRJ700 vs CRJ-200 confusion 🟥.** The commonest real-world error this pack must guard against is treating a CRJ-200 add-on (or its figures/handling notes) as representing this CRJ700 fleet. Wing (slats vs hard wing), weights, tail size and approach-speed handling all differ. Confirm sub-type before any figure is trusted.
- **AIRAC/navdata dependency 🟧.** The City/Regional short-haul network (Dispatch §6) is less demanding than an oceanic trunk, but FMS routing still depends on a current AIRAC cycle at every field flown.
- **Common type rating with CRJ9 🟩.** Both types share a crew rating (Intro §1); the same developer (AD Simulations/DeltaWing) sells both products, which helps minimise systems-behaviour differences a crew would not see on the real, common-rated aircraft — see the [CRJ9 Sim-Model](../crj9/sim-model.md) for the mirrored candidate.

---

## Sources & References
*Public URLs only. Private/OEM/add-on documents may inform content but must never be listed here.*

- DeltaWing Simulations — CRJ-700 (X-Plane.Org Store) — https://store.x-plane.org/CRJ-700_p_1520.html
- DeltaWing Simulations — product site — https://www.deltawingsim.com/
- SKYbrary — Bombardier CRJ-700 (CRJ7) — https://skybrary.aero/aircraft/crj7
- Wikipedia — Bombardier CRJ700 series — https://en.wikipedia.org/wiki/Bombardier_CRJ700_series

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-25 | Initial draft — candidate model identified (AD Simulations/DeltaWing CRJ-700, XP11/12; no default/factory CRJ exists; JRollon CRJ-200 flagged as the wrong sub-type); CRJ700-vs-CRJ200 sub-type matching flagged as the type's fidelity trap; approved-model decision left open `[VERIFY]`. |
