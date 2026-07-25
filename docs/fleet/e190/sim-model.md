<!--
================================================================================
  K Global — AIRFRAME PACK · SIM-MODEL  ·  E190 Embraer 190
  Approved & tested models, quirks and limitations. NOT an install guide —
  users are assumed competent to install and configure their own add-ons.
  FLAG LEGEND  🟥 hard constraint/blocker   🟧 caution/limitation   🟩 normal/confirmed
================================================================================
-->

# E190 — Embraer 190 · Sim-Model

**E190 / E-Jet family (E1 generation)** · represented in-sim by the model(s) below · sim = X-Plane 11
**Version** v0.1 · **Updated** 2026-07-25 · **Status** Draft

> **Read-me:** Which add-on(s) K Global **approves and has tested** to represent this ICAO type, and the quirks, constraints and limitations that matter in operation. Not an installation guide — setup is the pilot's responsibility. **No model here is yet formally approved by K Global — that is a management decision still open** 🟧 `[VERIFY]`. Flag legend 🟥 hard constraint · 🟧 limitation · 🟩 normal.

---

## 1. Approved & tested models

| Model (developer + product) | Sim / ver tested | Systems depth | Status |
|---|---|---|---|
| **X-Crafts Embraer E190** (E-Jets Family) | X-Plane 11 / 12 `[VERIFY — K Global test]` | high — custom FMS/MCDU, EICAS with synoptic pages, custom EFB | 🟧 Conditional — leading candidate; approval pending |
| **Flight Procedures Simulation Embraer E190** | X-Plane 12 only | high — custom fly-by-wire model, recorded engine/system sounds | 🟧 Conditional — fallback; **XP12-only**, see §2 |
| X-Plane 11 / 12 default fleet | X-Plane 11 / 12 | — | 🟥 Not recommended — neither XP11 nor XP12 ships a default E-Jet |

*Status key: 🟩 Approved — tested, cleared for line use · 🟧 Conditional — usable with the noted limitations · 🟥 Not recommended — known blocker, avoid.*

**Honest position on the "approved model" gap 🟧 `[VERIFY]`:** as of this draft K Global has **not** run a formal in-house test-and-approve pass on any E190 add-on, so nothing here is 🟩 Approved. The table lists genuine, publicly available candidates and what each would cost operationally. The Intro §2 mapping line (`Sim model: E-Jet add-on for X-Plane [VERIFY]`) resolves **here** once a model is tested and management confirms it — until then this file, the Checklist and the QRH are written to whichever candidate is flown and every model-specific figure stays `[VERIFY]`.

**Why the X-Crafts E190 leads:** it is sold and modelled as its own distinct airframe (not a rescaled E195), ships for both X-Plane 11 and 12, and its published feature set (custom FMS, EICAS with system synoptic pages, autobrake logic, custom EFB) covers the normal-ops ground this pack needs to be usable day one. Because K Global has not standardised on XP12, XP11 compatibility is the deciding factor over the newer XP12-only alternative.

## 2. Type ↔ model fidelity note 🟧

- **Generation-matching is the fidelity trap for this type**, not an engine mismatch as with widebody neo/ceo pairs. Embraer sells **two generations** of this family: the **E1** (CF34-10E, this pack's real type) and the newer **E190-E2** (Pratt & Whitney PW1900G geared turbofan, full fly-by-wire, different wing and systems). **Confirm the flown add-on models the E1** — an E2-generation product would not match this pack's engine, weights, or systems section and must not be used to represent the E190 documented here. Cross-ref Intro §7 (steep-approach note: the E2 is a distinct, newer airframe, not this fleet).
- **X-Crafts E190** models the correct E1/CF34-10E airframe — no generation mismatch. 🟩 (fidelity) / 🟧 (approval still pending)
- **Flight Procedures Simulation E190** is a newer, XP12-only product; also modelled as the E1/CF34 generation per its public listing, so the same fidelity note applies — its limitation is platform (XP12 only), not generation. 🟧
- Cross-ref: **Intro §2** (real→SimBrief→sim mapping) and **Dispatch §2** (SimBrief setup). No K Global reference OFP exists yet for this type (Dispatch §7 watch-item) — burn/fidelity comparisons cannot yet be validated against a flown mission.

## 3. Systems-depth caveats

- **X-Crafts E190:** custom FMS/MCDU, EICAS with engine/fuel/electrical/hydraulic/ECS/anti-ice synoptic pages, autobrake (RTO/OFF/LO/MID/HI), fire-protection annunciation with extinguisher-handle logic, APU/GPU start flows, and a custom EFB — deep enough that the Checklist below can be flown largely as normal ops. **Known limitation:** some advanced situational-awareness features (e.g. terrain radar overlay) depend on a separate third-party plugin rather than being built in 🟧. Verify each Checklist/QRH item is actually simulated before relying on it `[VERIFY]`.
- **Flight Procedures Simulation E190:** marketed as a from-scratch rebuild with a custom fly-by-wire model and recorded real-aircraft sounds; reviews describe higher visual/systems fidelity than older-generation E-Jet add-ons, but it is **XP12-only** — unusable if the fleet standard stays on XP11 🟥 (platform, not fidelity).
- **General:** neither product reproduces certified real-world performance data. Do **not** describe installation here — pilots are assumed competent to install, configure and update their own add-on and navdata.

## 4. Quirks, constraints & limitations

| Area | Flag | Model | Detail / operational impact | Workaround |
|---|---|---|---|---|
| Platform support | 🟥 | FPS E190 | **XP12-only** — will not run on an XP11 install | Use X-Crafts E190 on XP11; move to FPS only if/when the fleet standardises on XP12 |
| Generation match | 🟥 | Both | Must be the **E1/CF34-10E** product, not an E190-E2/PW1900G product | Confirm product listing states E1/CF34 before purchase/install |
| Terrain/awareness overlay | 🟧 | X-Crafts E190 | Some situational-awareness overlays need a separate third-party plugin | Install the companion plugin if that capability is required, or rely on external MET/terrain tools |
| Navdata / AIRAC | 🟧 | Both | FMS routing/procedures depend on the pilot's installed AIRAC cycle | Keep a current AIRAC cycle; mismatch causes discontinuities/missing SIDs-STARs |
| Perf realism | 🟧 | Both | Modelled performance is approximate; not certified data | Treat public Embraer figures (Intro/Dispatch) as the planning authority, not the sim's own figures |
| No reference OFP | 🟧 | Both | No K Global E190 OFP flown yet (Dispatch §7) | Burn/CI validation against a flown mission remains open |

## 5. Constraints that affect dispatch or procedures 🟥

- **Approved-model decision is open 🟥 `[VERIFY]`.** Until K Global tests a candidate and management confirms it, the pack cannot go Verified and the Intro §2 sim line stays `[VERIFY]`.
- **E1/E2 generation confusion 🟥.** The commonest real-world error this pack must guard against is treating an E190-E2 add-on (or its figures) as representing this E1 fleet. Weights, engines, range and the steep-approach picture (Intro §7) all differ. Confirm generation before any figure is trusted.
- **AIRAC/navdata dependency 🟧.** The City/Regional short-haul network (Dispatch §6) is less demanding than an oceanic trunk, but FMS routing still depends on a current AIRAC cycle at every field flown.
- **Common type rating with E195 🟩.** Both types share a crew rating (Intro §1); where feasible, prefer the same developer/family across both packs to minimise systems-behaviour differences a crew would not see on the real, common-rated aircraft — see the E195 Sim-Model for the mirrored candidate set.

---

## Sources & References
*Public URLs only. Private/OEM/add-on documents may inform content but must never be listed here.*

- X-Crafts — Embraer E190 (X-Plane.Org Store) — https://store.x-plane.org/Embraer-E190-by-X-Crafts_p_1728.html
- X-Crafts — E-Jets Family product page — https://www.xcrafts.com/ejets-family
- Flight Procedures Simulation — home / product site — https://www.flightproceduressimulation.com/
- SKYbrary — Embraer E190 (E190) — https://skybrary.aero/aircraft/e190
- Wikipedia — Embraer E-Jet E2 family (generation distinction) — https://en.wikipedia.org/wiki/Embraer_E-Jet_E2_family

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-25 | Initial draft — candidate models (X-Crafts E190 lead, XP11/12; Flight Procedures Simulation E190 fallback, XP12-only); E1-vs-E2 generation-matching flagged as the type's fidelity trap; approved-model decision left open `[VERIFY]` |
