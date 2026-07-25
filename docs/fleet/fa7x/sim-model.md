<!--
================================================================================
  K Global — AIRFRAME PACK · SIM-MODEL  ·  FA7X Dassault Falcon 7X
  Approved & tested models, quirks and limitations. NOT an install guide —
  users are assumed competent to install and configure their own add-ons.
  FLAG LEGEND  🟥 hard constraint/blocker   🟧 caution/limitation   🟩 normal/confirmed
================================================================================
-->

# FA7X — Dassault Falcon 7X · Sim-Model

**FA7X / Dassault Falcon 7X** · trijet, fly-by-wire, EASy II flight deck · sim = X-Plane 11
**Version** v0.1 · **Updated** 2026-07-25 · **Status** Draft

> **Read-me:** Which add-on(s) K Global **approves and has tested** to represent this ICAO type, and the quirks, constraints and limitations that matter in operation. Not an installation guide — setup is the pilot's responsibility. **No model is confirmed for this type — this file records an honest research gap, not a candidate shortlist** 🟥 `[VERIFY]`. Flag legend 🟥 hard constraint · 🟧 limitation · 🟩 normal.

---

## 1. Approved & tested models

| Model (developer + product) | Sim / ver tested | Systems depth | Status |
|---|---|---|---|
| *(none identified)* | — | — | 🟥 **No candidate found** — this research pass located no dedicated study- or mid-fidelity Dassault Falcon 7X add-on for X-Plane 11 |
| X-Plane 11 default fleet | X-Plane 11 | — | 🟥 Not recommended — XP11 ships **no** Falcon of any generation |

*Status key: 🟩 Approved — tested, cleared for line use · 🟧 Conditional — usable with the noted limitations · 🟥 Not recommended — known blocker, avoid.*

**Honest position 🟥 `[VERIFY]`:** unlike the mainline widebody and A330 packs, where at least one genuine candidate add-on exists (e.g. the A339's ToLiss product), this research pass did **not** turn up a confirmed, purpose-built Falcon 7X model for X-Plane 11 at either study or mid-fidelity level. The business-jet third-party market for X-Plane skews toward light/turboprop general-aviation types; large-cabin trijet bizjets with bespoke fly-by-wire and EASy-style avionics are not a segment this pass could confirm coverage for. **This is a genuine gap, not a placeholder omission** — do not fabricate a candidate to fill the table above. Any product claim must be independently re-verified against the developer's own store page before being added here.

## 2. Type ↔ model fidelity note 🟥

With no candidate identified, there is nothing to fidelity-assess yet. For calibration, a usable Falcon 7X model would need to reproduce, at minimum:
- the **trijet / S-duct centre-engine** layout (three independent PW307A-equivalent engine models, centre inlet routed via S-duct, no centre-engine thrust reverser) — a twin-engine bizjet add-on used as a stand-in would **not** reproduce three-engine fuel burn, asymmetric-thrust logic, or driftdown behaviour, and must not be treated as fidelity-equivalent 🟥;
- the **Dassault DFCS** fly-by-wire logic (Dassault's own flight-control-law architecture, distinct from Airbus normal/alternate/direct law) — a generic FBW model built to Airbus-style logic would misrepresent handling and protections 🟧;
- the **EASy II (Honeywell Primus Epic-based)** flight deck — four/five-screen integrated avionics, CAS (crew alerting system) message logic, integrated FMS — a generic glass-cockpit model would not reproduce EASy-specific CAS behaviour that the Checklist/QRH reference 🟧.

## 3. Systems-depth caveats

- No model = no systems-depth statement possible. This section exists as a placeholder checklist for whoever evaluates a future candidate: confirm FADEC modelling on all three engines independently (including centre-engine start/failure logic), confirm DFCS law-reversion behaviour is simulated (not just cosmetic sidestick animation), and confirm the EASy II CAS pages are populated with real fault logic before treating any Checklist/QRH item in this pack as trainable in-sim.
- **General:** do **not** describe installation here — pilots are assumed competent to install, configure and update their own add-on and navdata, once one exists to install.

## 4. Quirks, constraints & limitations

| Area | Flag | Model | Detail / operational impact | Workaround |
|---|---|---|---|---|
| No candidate model | 🟥 | — | No Falcon 7X add-on confirmed for X-Plane 11 in this pass | Escalate as an open management/research item; do not dispatch sim training against an unconfirmed substitute |
| Twin-engine substitutes | 🟥 | any generic bizjet | Would misrepresent trijet fuel burn, engine-out driftdown and centre-engine (S-duct) failure modes | Do not use a twin as a fidelity stand-in for performance or engine-failure training |
| EASy II avionics logic | 🟧 | any generic glass cockpit | CAS/FMS behaviour referenced throughout the Checklist/QRH is EASy-specific and unlikely to be reproduced by a non-Falcon glass panel | Treat Checklist/QRH avionics call-outs as real-aircraft reference only until a model exists |
| DFCS law logic | 🟧 | any generic FBW | Dassault's own control-law architecture; do not assume Airbus-style normal/alternate/direct law applies | Treat QRH Ch 7 control-law content as real-aircraft reference only |

## 5. Constraints that affect dispatch or procedures 🟥

- **No approved sim model exists for this type 🟥 `[VERIFY]`.** The Checklist and QRH in this pack are therefore written as a **real-aircraft-flow reference**, re-expressed from public sources, and are **not** validated against any simulated systems behaviour. Every model-dependent caveat that would normally appear in those files (as it does for the A339 against ToLiss/JD330) cannot be written here because there is nothing to model against — flag every Checklist/QRH item as 🟧 model-unconfirmed by default until a candidate is found and tested.
- **Recommendation:** open a dedicated research/procurement task to identify a Falcon 7X (or nearest trijet/FBW bizjet) X-Plane candidate; until then, this pack cannot progress past Draft on the sim-fidelity axis regardless of how complete the real-aircraft content is.
- **Steep-approach / EGLC relevance:** even once a model is found, in-sim steep-approach handling (5.5°+ glidepath, autobrake/spoiler behaviour at the higher approach angle) would need separate verification — it is not assumed to come "for free" with a generic FBW model. Cross-ref Intro §3, Dispatch §6, and `../../../OM E Operations/Steep Approach Operations.md`.

---

## Sources & References
*Public URLs only. Private/OEM/add-on documents may inform content but must never be listed here.*

- X-Plane.Org Store — https://store.x-plane.org/ (marketplace searched for a Falcon 7X candidate; none confirmed)
- Dassault Aviation / Dassault Falcon — Falcon 7X aircraft page — https://www.dassaultfalcon.com/aircraft/falcon-7x
- Wikipedia — Dassault Falcon 7X (DFCS fly-by-wire, EASy avionics, PW307A) — https://en.wikipedia.org/wiki/Dassault_Falcon_7X
- SKYbrary — Steep Approach — https://skybrary.aero/articles/steep-approach

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-25 | Initial draft — honest research finding: no Falcon 7X X-Plane 11 add-on identified at any fidelity level; recorded as an open 🟥 gap rather than a candidate shortlist; fidelity requirements a future candidate would need to meet listed for reference; Checklist/QRH flagged as real-aircraft-flow reference, not sim-validated. |
