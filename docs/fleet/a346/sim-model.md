<!--
================================================================================
  K Global — AIRFRAME PACK · SIM-MODEL  ·  A346 Airbus A340-600
  Approved & tested models, quirks and limitations. NOT an install guide —
  users are assumed competent to install and configure their own add-ons.
  FLAG LEGEND  🟥 hard constraint/blocker   🟧 caution/limitation   🟩 normal/confirmed
================================================================================
-->

# A346 — Airbus A340-600 · Sim-Model

**A346 / A340 family — separate A340 type rating** · represented in-sim by the model(s) below · sim = X-Plane 11
**Version** v0.1 · **Updated** 2026-07-25 · **Status** Draft

> **Read-me:** Which add-on(s) K Global **approves and has tested** to represent this ICAO type, and the quirks, constraints and limitations that matter in operation. Not an installation guide — setup is the pilot's responsibility. **No model here is yet formally approved by K Global — that is a management decision still open** 🟧 `[VERIFY]`. Flag legend 🟥 hard constraint · 🟧 limitation · 🟩 normal.

---

## 1. Approved & tested models

| Model (developer + product) | Sim / ver tested | Systems depth | Status |
|---|---|---|---|
| **ToLiss Airbus A340-600** (A346) | X-Plane 11 / 12 (both editions ship separate XP11 and XP12 aircraft files) `[VERIFY — K Global test]` | study | 🟧 Conditional — sole candidate; approval pending |
| X-Plane 11 default fleet | X-Plane 11 | — | 🟥 Not recommended — XP11 ships **no** A340 of any generation |

*Status key: 🟩 Approved — tested, cleared for line use · 🟧 Conditional — usable with the noted limitations · 🟥 Not recommended — known blocker, avoid.*

**Honest position on the "approved model" gap 🟧 `[VERIFY]`:** as of this draft K Global has **not** run a formal in-house test-and-approve pass on an A340-600 add-on, so nothing here is 🟩 Approved. ToLiss's A340-600 is the **only** publicly available study-level candidate for this type — unlike the A339 pack there is **no** mid-fidelity fallback product to fall back on 🟧. The Intro §2 mapping line (`Sim model: X-Plane 11 A340-600 add-on (candidate model TBC)`) resolves **here** once the model is tested and management confirms it — until then this file, the Checklist and the QRH are written against this candidate and every model-specific figure stays `[VERIFY]`.

**Single-candidate risk 🟧:** because only one study-level A340-600 exists publicly, K Global has no fallback if this product fails testing or is discontinued. Flag this concentration risk to management alongside the approval decision.

## 2. Type ↔ model fidelity note 🟧

- ToLiss's A340-600 is built specifically for the -600 variant with the **Rolls-Royce Trent 500-family engine** (the only engine option the real airframe ever had), so there is **no engine-variant mismatch** of the kind the A339 pack has to correct for (ToLiss neo vs JARDesign ceo). This is the fidelity-preferred path by default, since it is the *only* path. 🟩 (fidelity) / 🟧 (approval still pending)
- **Weight-variant selection 🟧:** publicly documented add-ons of this type typically ship more than one weight variant (a "regular" and a higher-gross-weight option) to cover different real-world operator configurations. K Global's own weight figures (Intro §5 / Dispatch §1, MTOW ~380,000 kg) sit at the **higher** end of the publicly known range — confirm which weight variant is selected in the model's configuration before use, so ZFW/MTOW/fuel checks track the OFP `[VERIFY]`.
- Cross-ref: **Intro §2** (real→SimBrief→sim mapping) and **Dispatch §2–§3** (profile + fuel). Any weight-variant mismatch will show up as a burn/performance offset against the SimBrief A346 (Trent 556) dispatch profile.

## 3. Systems-depth caveats

- **ToLiss A346 (study):** deep FMGS, FBW normal/alternate/direct law, ECAM with failure logic across ATA chapters (fuel, electrical, hydraulic, pneumatic, ice/rain, oxygen), four-engine start/power-plant model, autoflight/ATHR, and a fault-injection system — enough that the Checklist and QRH can be flown largely as real. **XP11 note:** the product ships separate XP11-specific and XP12-specific aircraft files; selecting the wrong one for the running sim version degrades or breaks performance/flight characteristics 🟧 — always confirm the correct file is loaded for X-Plane 11 before dispatch. Some environmental/lighting refinements available on XP12 do not carry to the XP11 file 🟧.
- **General:** no XP11 model reproduces real certified performance data. Do **not** describe installation here — pilots are assumed competent to install, configure and update their own add-on and navdata.

## 4. Quirks, constraints & limitations

| Area | Flag | Model | Detail / operational impact | Workaround |
|---|---|---|---|---|
| XP11 vs XP12 aircraft file | 🟥 | ToLiss A346 | Separate files per sim version; loading the wrong one gives incorrect flight/performance characteristics | Confirm the XP11-specific file is selected before every flight on this fleet |
| Weight variant | 🟧 | ToLiss A346 | Product may ship more than one weight/MTOW configuration | Match the configured variant to K Global's Intro/Dispatch weight figures before use `[VERIFY]` |
| Four-engine start/failure modelling | 🟧 | ToLiss A346 | Four independent engine/power-plant models increase start-sequence and failure-permutation complexity vs a twin | Brief the four-engine start flow (Checklist) before first sim session on type |
| Long-fuselage ground handling | 🟧 | ToLiss A346 | Tail-strike-sensitive pitch geometry and long-fuselage taxi turn behaviour should be modelled in the 3D geometry, but sim contact/damage modelling is approximate | Do not rely on the sim to warn of a tail strike; fly the pitch-limit discipline for real (Checklist/QRH) |
| Single candidate / no fallback | 🟧 | — | No mid-fidelity alternative exists publicly for this type | Flag concentration risk to management; prioritise a formal test-and-approve pass |
| Navdata / AIRAC | 🟧 | ToLiss A346 | FMS routing/procedures depend on the pilot's installed AIRAC cycle | Keep a current AIRAC cycle; mismatch causes discontinuities/missing SIDs-STARs |
| Perf realism | 🟧 | ToLiss A346 | Modelled performance is approximate; not certified data | Use SimBrief OFP (Dispatch) as the planning authority, not the sim's own figures |

## 5. Constraints that affect dispatch or procedures 🟥

- **Approved-model decision is open 🟥 `[VERIFY]`.** Until K Global tests the candidate and management confirms it, the pack cannot go Verified and the Intro §2 sim line stays `[VERIFY]`. Priority: run the test pass on **ToLiss A346 (XP11)**.
- **EDTO modelling fidelity 🟥.** The A346 is a quad with no twin ETOPS diversion-time rule, but ICAO EDTO adequate-aerodrome planning still applies (Dispatch §5). **No add-on simulates operator EDTO/adequate-aerodrome approval or critical-fuel scenarios** — those are dispatch/OFP disciplines, not sim features. The sim can fly the routing and an engine-out driftdown (study-level four-engine failure logic), but the adequate-aerodrome/critical-fuel check remains an OFP/OM E task and must not be inferred from in-sim behaviour. 🟥
- **Tail-strike / long-fuselage discipline 🟥.** At 75.36/75.27 m the -600 is the longest airframe K Global flies; rotation/flare pitch-limit discipline is a real-aircraft procedure (Checklist/QRH), not something the sim reliably enforces. Brief this before line use regardless of model fidelity. 🟥
- **AIRAC/navdata dependency 🟧.** Long/thin premium trunks route through oceanic/remote tracks that demand a **current AIRAC cycle**; an out-of-date cycle breaks the FMS route and waypoints. Pilots must maintain current navdata before dispatching an A346 leg. 🟧
- **XP11 vs XP12 divergence 🟧.** If the fleet later moves to XP12, the model regains the XP12-specific aircraft file and any environmental refinements — re-test and re-baseline the Checklist/QRH at that point (Instructions §5 trigger: "Approved sim model / version / new AIRAC").

---

## Sources & References
*Public URLs only. Private/OEM/add-on documents may inform content but must never be listed here.*

- ToLiss — A340-600 product page (developer site) — https://toliss.com/pages/a340-600
- ToLiss — A340-600 change log — https://toliss.com/pages/a340-600-change-log
- ToLiss — Where to buy (store listings) — https://toliss.com/pages/where-to-buy
- FSElite — ToLiss releases A340-600 for X-Plane — https://fselite.net/content/repost-toliss-releases-a340-600-for-xpl/
- X-Plane.Org Forum — ToLiss A340 file library — https://forums.x-plane.org/files/category/289-toliss-a340/
- SKYbrary — Airbus A340-600 (A346) — https://skybrary.aero/aircraft/a346
- EASA — TCDS EASA.A.015 Airbus A340 — https://www.easa.europa.eu/en/document-library/type-certificates

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-25 | Initial draft — sole candidate model (ToLiss A346, XP11/12 dual-file product); no mid-fidelity fallback exists publicly (concentration-risk flagged); approved-model decision left open `[VERIFY]`; XP11/XP12 aircraft-file selection and weight-variant selection called out as operational caveats. |
