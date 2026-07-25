<!--
================================================================================
  K Global — AIRFRAME PACK · SIM-MODEL  ·  DH8D De Havilland Canada Dash 8 Q400
  Approved & tested models, quirks and limitations. NOT an install guide —
  users are assumed competent to install and configure their own add-ons.
  FLAG LEGEND  🟥 hard constraint/blocker   🟧 caution/limitation   🟩 normal/confirmed
================================================================================
-->

# DH8D — De Havilland Canada Dash 8 Q400 · Sim-Model

**DH8D · TURBOPROP 🟥** · represented in-sim by the model(s) below · sim = X-Plane 11/12
**Version** v0.1 · **Updated** 2026-07-25 · **Status** Draft

> **Read-me:** Which add-on(s) K Global **approves and has tested** to represent this ICAO type, and the quirks, constraints and limitations that matter in operation. Not an installation guide — setup is the pilot's responsibility. **No model here is yet formally approved by K Global — that is a management decision still open** 🟧 `[VERIFY]`. Flag legend 🟥 hard constraint · 🟧 limitation · 🟩 normal.

---

## 1. Approved & tested models

| Model (developer + product) | Sim / ver tested | Systems depth | Status |
|---|---|---|---|
| **FlyJSim Q4XP** (Dash 8 Q400) | X-Plane 11 / 12 `[VERIFY — K Global test]` | high — publicly documented custom FMS (UNS-1Ew-style), turboprop engine/propeller systems modelling (FADEC, power/condition lever logic, autofeather), custom EFB, high production values (publicly noted "Best Aircraft of the Year" community recognition) | 🟧 Conditional — leading candidate; approval pending |
| FlyJSim Dash 8 Q400 **"Legacy"** (predecessor product) | X-Plane 11 | moderate — earlier-generation systems depth, superseded by Q4XP | 🟧 Conditional — older product line; confirm which is current before purchase `[VERIFY]` |
| X-Plane 11 / 12 default fleet | X-Plane 11 / 12 | — | 🟥 Not recommended — **neither XP11 nor XP12 ships a default Dash 8 Q400**; no factory fallback exists for this type |

*Status key: 🟩 Approved — tested, cleared for line use · 🟧 Conditional — usable with the noted limitations · 🟥 Not recommended — known blocker, avoid.*

**Honest position on the "approved model" gap 🟧 `[VERIFY]`:** as of this draft K Global has **not** run a formal in-house test-and-approve pass on either FlyJSim Dash 8 Q400 product, so nothing here is 🟩 Approved. **FlyJSim Q4XP** is the current, actively marketed, purpose-built Dash 8 Q400 product for X-Plane 11/12 and is the only genuine competing-generation offering for this exact type currently found in the public X-Plane market; the older FlyJSim "Legacy" Dash 8 Q400 product exists as a separate, earlier release from the same developer. The Intro §2 mapping line (`Sim model: FlyJSim Q4XP [VERIFY]`) resolves **here** once the model is tested and management confirms it — until then this file, the Checklist and the QRH are written to the Q4XP candidate and every model-specific figure stays `[VERIFY]`.

## 2. Type ↔ model fidelity note 🟧

- **Powerplant-family matching is the fidelity trap for this type**, not a sub-type/variant mismatch as with the CRJ family elsewhere in this group. The Q400 is a **turboprop** — confirm the flown add-on actually models a twin-turboprop powerplant with FADEC, propeller pitch/feathering, autofeather and torque-limited performance, not a generic piston or turbofan conversion. Both FlyJSim products (Q4XP and the older Legacy release) are purpose-built Dash 8 Q400 simulations and do not carry this risk — cited here as the type's general fidelity trap for any future candidate evaluation.
- **FlyJSim Q4XP** is publicly marketed as a high-systems-depth, "study level" turboprop simulation, which — if borne out on K Global's own test pass — would support the Checklist/QRH content in this pack being flown largely as normal ops. 🟩 (fidelity claim, per public marketing) / 🟧 (approval still pending, and depth not independently verified by K Global)
- No other type in this pack group shares a common type rating with the DH8D (Dispatch §6) — there is no sibling pack to cross-reference for a shared developer/model strategy, unlike the CRJ7/CRJ9 or ATR72/42 pairs.
- Cross-ref: **Intro §2** (real→SimBrief→sim mapping) and **Dispatch §2** (SimBrief setup). No K Global reference OFP exists yet for this type (Dispatch §7 watch-item) — burn/fidelity comparisons cannot yet be validated against a flown mission.

## 3. Systems-depth caveats

- **FlyJSim Q4XP:** publicly documented feature set includes a custom FMS, modelled turboprop engine/propeller control logic (power lever/condition lever, FADEC, autofeather), custom EFB, and — per public marketing — deep systems modelling consistent with "study level" positioning. **Known limitation:** exact scope of modelled turboprop-specific failure cases (autofeather-fault, prop-overspeed/beta-range mis-selection, ice-detection annunciation) has not been independently verified by K Global against the flown version — confirm each Checklist/QRH item is actually simulated **in the installed version** before relying on it 🟧 `[VERIFY]`.
- **General:** the product does not reproduce certified real-world performance data. Do **not** describe installation here — pilots are assumed competent to install, configure and update their own add-on and navdata.

## 4. Quirks, constraints & limitations

| Area | Flag | Model | Detail / operational impact | Workaround |
|---|---|---|---|---|
| No default/factory Dash 8 | 🟥 | XP11/12 | Neither sim ships a default Q400 — there is no fallback if the payware product is unavailable | Standardise on FlyJSim Q4XP; no substitute exists |
| Two FlyJSim product generations | 🟧 | FlyJSim | "Legacy" Dash 8 Q400 and current Q4XP are different releases with different systems depth | Confirm which product is installed/current before assuming Q4XP-level fidelity |
| Turboprop-specific failure modelling | 🟧 | FlyJSim Q4XP | Autofeather, prop overspeed/beta-range, ice-detection annunciation depth not independently verified | Re-verify each QRH/Checklist item against the installed version before line use |
| Active update cycle | 🟧 | FlyJSim Q4XP | Flight-model/systems revisions expected over the product's life — behaviour may shift between versions | Re-verify Checklist/QRH items after each update before relying on them |
| Navdata / AIRAC | 🟧 | FlyJSim Q4XP | FMS routing and procedures depend on the pilot's installed AIRAC cycle | Keep a current AIRAC cycle; mismatch causes discontinuities/missing SIDs-STARs |
| Perf realism | 🟧 | FlyJSim Q4XP | Modelled performance is approximate; not certified data | Treat public Wikipedia/TCDS figures (Intro/Dispatch) as the planning authority, not the sim's own figures |
| No reference OFP | 🟧 | FlyJSim Q4XP | No K Global DH8D OFP flown yet (Dispatch §7) | Burn/CI validation against a flown mission remains open |

## 5. Constraints that affect dispatch or procedures 🟥

- **Approved-model decision is open 🟥 `[VERIFY]`.** Until K Global tests FlyJSim Q4XP (the current purpose-built candidate) and management confirms it, the pack cannot go Verified and the Intro §2 sim line stays `[VERIFY]`.
- **Turboprop-specific procedure fidelity 🟥.** The Checklist and QRH in this pack assume the flown model actually simulates power-lever/condition-lever logic, autofeather arming/trigger, and propeller beta-range protections. If the installed model does not model these, non-normal training against this pack's QRH Ch 1/Ch 2 content would be misleading — confirm before relying on it.
- **AIRAC/navdata dependency 🟧.** The Regional-network short-haul sectors (Dispatch §6) are less demanding than an oceanic trunk, but FMS routing still depends on a current AIRAC cycle at every field flown.
- **No common-rated sibling in this group 🟩.** Unlike CRJ7/CRJ9 or ATR72/42, there is no shared-developer strategy to cross-reference for this type — the FlyJSim Q4XP decision stands alone.

---

## Sources & References
*Public URLs only. Private/OEM/add-on documents may inform content but must never be listed here.*

- FlyJSim — Q4XP product page — https://www.flyjsim.com/q4xp
- FlyJSim Q4XP — X-Plane.Org Store — https://store.x-plane.org/FlyJSim-Q4XP_p_1511.html
- x-plane.to — FlyJSim Q4XP file listing — https://www.x-plane.to/file/1257/flyjsim-q4xp-q400-dash-8-tpc
- Wikipedia — De Havilland Canada Dash 8 — https://en.wikipedia.org/wiki/De_Havilland_Canada_Dash_8

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-25 | Initial draft — candidate model identified (FlyJSim Q4XP, XP11/12; no default/factory Dash 8 exists; older FlyJSim "Legacy" Dash 8 Q400 product noted as a separate, earlier release); turboprop-specific failure-modelling depth flagged as unverified; approved-model decision left open `[VERIFY]`; noted this type has no common-rated sibling in the group (unlike CRJ7/CRJ9, ATR72/42). |
