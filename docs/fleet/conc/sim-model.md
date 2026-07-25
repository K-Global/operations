<!--
================================================================================
  K Global — AIRFRAME PACK · SIM-MODEL  ·  CONC Concorde (supersonic transport)
  Approved & tested models, quirks and limitations. NOT an install guide —
  users are assumed competent to install and configure their own add-ons.
  FLAG LEGEND  🟥 hard constraint/blocker   🟧 caution/limitation   🟩 normal/confirmed
================================================================================
-->

# CONC — Concorde · Sim-Model

**CONC / Concorde** · represented in-sim by the model(s) below · sim = X-Plane 11
**Version** v0.1 · **Updated** 2026-07-25 · **Status** Draft

> **Read-me:** Which add-on(s) K Global **approves and has tested** to represent Concorde, and the quirks, constraints and limitations that matter in operation. Not an installation guide — setup is the pilot's responsibility. **No model here is yet formally approved by K Global — that is a management decision still open** 🟧 `[VERIFY]`. Flag legend 🟥 hard constraint · 🟧 limitation · 🟩 normal.

---

## 1. Approved & tested models

| Model (developer + product) | Sim / ver tested | Systems depth | Status |
|---|---|---|---|
| **Colimata Concorde FXP** (payware) | X-Plane 11 (earlier FXP build) `[VERIFY — K Global test]` | mid–high — custom supersonic flight model, detailed clickable cockpit, engine/fuel/CG systems | 🟧 Conditional — lead candidate; approval pending, **XP11 build only** |
| Colimata Concorde FXP **v3** | **X-Plane 12 only** | high (current-generation update) | 🟥 Not usable on XP11 — v3 is XP12-only; do not select for the XP11 fleet standard |
| X-Plane 11 default fleet | X-Plane 11 | — | 🟥 Not recommended — XP11 ships **no** Concorde |

*Status key: 🟩 Approved — tested, cleared for line use · 🟧 Conditional — usable with the noted limitations · 🟥 Not recommended — known blocker, avoid.*

**Honest position on the "approved model" gap 🟥 `[VERIFY]`:** Concorde is well-served by a **dedicated supersonic add-on** (Colimata Concorde FXP) — a materially better starting point than some fleet types, because it was purpose-built to model M2.0 flight, reheat, the intake/engine behaviour and the fuel-transfer CG management. **The version split is the key constraint:** the current **v3 is X-Plane 12-only**, while K Global's fleet standard is **X-Plane 11** — so the approved candidate is an **earlier XP11-compatible FXP build**, which is older and may lack v3's refinements. K Global has **not** yet run a formal in-house test-and-approve pass, so nothing here is 🟩 Approved. The Intro §2 mapping line (`Sim model: X-Plane 11 Concorde add-on [VERIFY]`) resolves **here** once the XP11 FXP build is tested and management confirms it. Until then this file, the Checklist and the QRH stay `[VERIFY]` on model-specific figures.

## 2. Type ↔ model fidelity note 🟧
- **The FXP model is a genuine supersonic simulation, not a re-skinned subsonic jet** — it models Mach-2 flight, the four Olympus 593 engines with reheat, the variable intake behaviour, and the fuel/CG transfer system. This is a much closer type↔model match than, for example, the A388 packs (where no study-level add-on exists). 🟧 → 🟩 on the core supersonic FM once tested.
- **Version/sim mismatch is the live risk 🟥:** the XP11 build predates the XP12 v3 rework; some systems depth, flight-model tuning, and visual/lighting fidelity in v3 will **not** be present on the XP11 build K Global would fly. Do not assume v3 review content describes the XP11 build.
- **Three-crew workload on a single-pilot sim seat 🟧:** the real aircraft splits systems/fuel/electrics to a **Flight Engineer** (Intro §1). In-sim, one pilot works all panels — the Checklist keeps the FE items as a distinct flow so the workload split is trained even though the sim has one operator.
- Cross-ref **Intro §2** (real→SimBrief→sim mapping) and **Dispatch §2** (supersonic OFP profile is non-standard). SimBrief/OFP modelling of a Mach-2 profile is the weaker link, **not** the flight model — the fidelity gap here is version/sim-compatibility, not aircraft realism.

## 3. Systems-depth caveats
- **Reheat (afterburner):** modelled by the FXP add-on; confirm the XP11 build reproduces reheat light/cancel behaviour and the takeoff burn spike before training to it `[VERIFY]`.
- **Transonic CG / fuel transfer:** the FXP add-on models forward/aft trim-tank transfer; verify the XP11 build's transfer logic and CG indication behave as the real schedule (Checklist) before relying on it `[VERIFY]`. This is the single most important system to validate — mis-modelled CG transfer would make supersonic handling unrealistic.
- **Variable intake / engine surge:** the real intake ramp/spill-door system managing airflow into the Olympus at Mach 2 is complex; confirm how deeply the XP11 build models intake behaviour and engine surge (QRH Ch 2) `[VERIFY]`.
- **Analog cockpit / no modern FMS:** Concorde used an inertial navigation system and analog instruments — there is **no modern FMS/LNAV-VNAV** to simulate. Expect the add-on to reflect period avionics; do not expect glass-cockpit automation. 🟩
- **General:** do **not** describe installation here — pilots are assumed competent to install, configure and update their own add-on and navdata.

## 4. Quirks, constraints & limitations

| Area | Flag | Model | Detail / operational impact | Workaround |
|---|---|---|---|---|
| Sim version split | 🟥 | Colimata FXP | **v3 is XP12-only**; XP11 fleet must use the earlier XP11 FXP build (older, fewer refinements) | Fly the XP11 build; do not apply v3-only guidance; re-baseline if the fleet moves to XP12 |
| Fuel-transfer / CG modelling | 🟧 | Colimata FXP (XP11) | Transonic CG transfer is central to realistic supersonic handling; XP11-build fidelity must be confirmed | Validate the transfer schedule vs Checklist before line use `[VERIFY]` |
| Reheat behaviour | 🟧 | Colimata FXP (XP11) | Reheat light/cancel + takeoff burn spike must reproduce for realistic departures | Confirm on the flown build; treat burn figures as `[VERIFY]` |
| OFP / SimBrief profile | 🟧 | (not a model issue) | Supersonic M2.0/FL600 profile is **not** a standard SimBrief airframe (Dispatch §2) | Build/validate a supersonic profile; do not trust a subsonic auto-burn |
| Three-crew workload | 🟧 | Colimata FXP | Single sim operator works FE panel too; realistic crew split not enforced | Use the Checklist's separate FE flow to train the split |
| Navdata / AIRAC | 🟧 | Colimata FXP | Period nav (INS-style) + any FMS-style routing depends on installed navdata | Keep a current AIRAC cycle |
| Perf realism | 🟧 | Colimata FXP | Modelled performance is add-on-derived, not certified data | Use validated OFP figures as the planning authority |

## 5. Constraints that affect dispatch or procedures 🟥
- **Approved-model decision is open 🟥 `[VERIFY]`.** A strong candidate exists (Colimata FXP), but the pack cannot go Verified until the **XP11-compatible build** is tested and management confirms it, with the CG-transfer and reheat behaviour validated (§3–§4).
- **Sim-version constraint 🟥.** The best current FXP release (v3) is **XP12-only**; on the XP11 fleet standard the earlier build is the ceiling. If/when K Global moves to XP12, re-test against v3 and re-baseline the Checklist/QRH (Instructions §5 trigger).
- **Supersonic OFP profile 🟥.** Independent of the flight model, dispatch depends on a **supersonic profile** the mainstream OFP tooling does not ship (Dispatch §2) — this must be built/validated or the burn/range planning is unreliable.
- **AIRAC/navdata dependency 🟧.** Routing depends on a current AIRAC cycle; keep navdata current before dispatching a CONC leg.
- **Re-test trigger 🟧.** New FXP build, a move to XP12, or a validated supersonic OFP profile all trigger a re-test and re-baseline (Instructions §5).

---

## Sources & References
*Public URLs only. Private/OEM/add-on documents may inform content but must never be listed here.*

- X-Plane.Org Forum — Colimata Concorde FXP (product / support threads) — https://forums.x-plane.org/files/file/67585-colimata-concorde-fxp-sound-mod/
- Threshold X — Colimata releases Concorde FXP v3 for X-Plane 12 — https://www.thresholdx.net/news/coconc
- FSElite — Colimata Concorde FXP v3 released for XP12 — https://fselite.net/content/colimata-concorde-fxp-v3-released-for-xp12/
- X-Plane Reviews — Concorde FXP v3 by Colimata (systems-scope reference) — https://xplanereviews.com/forums/topic/11301-aircraft-upgrade-review-concorde-fxp-v3-by-colimata/
- SKYbrary — Aérospatiale / BAC Concorde (CONC) — https://skybrary.aero/aircraft/conc

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-25 | Initial draft — candidate surveyed: **Colimata Concorde FXP** (purpose-built supersonic add-on — a closer type↔model match than the A388 packs). Key constraint flagged 🟥: current **v3 is XP12-only**, so the XP11 fleet standard must use the earlier XP11 FXP build; approved-model decision left open 🟧 `[VERIFY]`. Critical items to validate on the XP11 build: transonic CG/fuel transfer, reheat behaviour, variable intake/surge. Supersonic OFP profile flagged as the weaker link (non-standard). No airline names per governance. |
