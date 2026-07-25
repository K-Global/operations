<!--
================================================================================
  K Global — AIRFRAME PACK · SIM-MODEL  ·  CL30 Bombardier Challenger 300
  Approved & tested models, quirks and limitations. NOT an install guide —
  users are assumed competent to install and configure their own add-ons.
  FLAG LEGEND  🟥 hard constraint/blocker   🟧 caution/limitation   🟩 normal/confirmed
================================================================================
-->

# CL30 — Bombardier Challenger 300 · Sim-Model

**CL30 / Bombardier Challenger 300** · represented in-sim by the model below · sim = X-Plane 11
**Version** v0.1 · **Updated** 2026-07-25 · **Status** Draft

> **Read-me:** Which add-on K Global **has identified as a candidate** to represent this ICAO type, and the quirks, constraints and limitations that matter in operation. Not an installation guide — setup is the pilot's responsibility. **No model here is yet formally approved by K Global — that is a management decision still open** 🟧 `[VERIFY]`. Flag legend 🟥 hard constraint · 🟧 limitation · 🟩 normal.

---

## 1. Approved & tested models

| Model (developer/studio + product) | Sim / ver tested | Systems depth | Status |
|---|---|---|---|
| **Bombardier Challenger 300 v2 — Captain Edition** (independent payware studio, X-Plane.Org Store / Aerosoft) | X-Plane 11 (v2.x line) `[VERIFY — K Global test]` | mid — custom systems/sounds/animations via a third-party plug-in framework, default X-Plane FMS/nav-display core | 🟧 Conditional — sole identified candidate; approval pending |
| X-Plane 11 default fleet | X-Plane 11 | — | 🟥 Not recommended — XP11 ships **no** Challenger 300 or comparable super-midsize bizjet |

*Status key: 🟩 Approved — tested, cleared for line use · 🟧 Conditional — usable with the noted limitations · 🟥 Not recommended — known blocker, avoid.*

**Honest position on the "approved model" gap 🟧 `[VERIFY]`:** as of this draft K Global has **not** run a formal in-house test-and-approve pass on any Challenger 300 add-on, so nothing here is 🟩 Approved. Only one genuine, publicly available candidate was identified for X-Plane 11 at the systems depth needed for normal/abnormal-ops training. The Intro §2 mapping line (`Sim model: X-Plane 11 add-on not yet formally confirmed [VERIFY]`) resolves **here** once the candidate is tested and management confirms it — until then this file, the Checklist and the QRH are written to whichever build is flown and every model-specific figure stays `[VERIFY]`.

**Why this is the only identified candidate:** it is a dedicated Challenger 300 study of the super-midsize class purpose-built for X-Plane 11, with custom cockpit systems, sounds and animations driven by a third-party scripting/plug-in layer rather than default X-Plane generic-jet logic. No comparable second Challenger 300-specific add-on for X-Plane 11 was located in this pass; unlike the A339 pack there is currently **no fallback candidate** — treat the single candidate's limitations (§3–§4) as the operative constraint set until an alternative is found or the type is tested. 🟧

## 2. Type ↔ model fidelity note 🟧

- The candidate targets the **baseline Challenger 300** cabin/cockpit (not the improved Challenger 350/3500 with HTF7350 engines), which matches K Global's operated variant (Intro §1, §5). Twin-engine layout and super-midsize cabin size are represented; **engine-specific HTF7000 modelling depth (start logic, N1/ITT limits, FADEC behaviour) is not independently confirmed** 🟧 `[VERIFY]`.
- The candidate's navigation/autoflight core is built on **default X-Plane 11 FMS and navigation-display logic** rather than a dedicated Pro Line 21 FMS emulation — course/heading/approach modes are represented at a generic autoflight level, not a certified Pro Line 21 FMS reproduction. Treat VNAV, approach-mode arming and radio-source switching as **approximated**, not authoritative. 🟧
- Cross-ref: **Intro §2** (real→sim mapping, open) and **Dispatch §2** (SimBrief profile — separate from the flown sim model).

## 3. Systems-depth caveats

- **Custom systems (mid depth):** cockpit switches, checklist logic, engine start/APU flow and cabin/exterior animations are individually scripted rather than defaulted — closer to study-level for switchology and normal flows than a generic add-on, but **not** a full certified-systems simulation. Electrical, hydraulic and fuel logic exist at a functional level; deep failure-cascade modelling (e.g. multi-bus/multi-hydraulic interactions) is **not confirmed** to the depth K Global would expect of a full study-level type. 🟧 `[VERIFY]`
- **Avionics:** primary and multi-function displays are custom-built to resemble the real flight deck layout, but nav-source selection, weather-radar presentation and FMS behaviour fall back to **default X-Plane 11 logic** rather than a bespoke Pro Line 21 FMS/EICAS-style crew-alerting reproduction. Built-in checklist pages exist in-cockpit (normal-checklist workflow only) but are **not** a substitute for this Checklist file. 🟧
- **Known non-modelled items (public developer documentation, re-expressed generically):** cross-side radio selection, DME-hold function, and a small number of secondary switch functions are **not implemented**; default X-Plane weather radar is used in place of a dedicated weather-radar page. 🟧
- **General:** the model does not reproduce certified performance data. Do **not** describe installation here — pilots are assumed competent to install, configure and update their own add-on and navdata.

## 4. Quirks, constraints & limitations

| Area | Flag | Detail / operational impact | Workaround |
|---|---|---|---|
| FMS / navigation core | 🟧 | Built on default X-Plane 11 FMS/nav-display logic, not a dedicated Pro Line 21 FMS reproduction — VNAV and some approach-mode behaviour are approximated | Use the SimBrief/OFP as the planning authority (Dispatch); hand-fly or cross-check any VNAV/approach-mode anomaly |
| Weather radar | 🟧 | Default X-Plane weather radar substitutes for a Pro Line 21-style weather/turbulence display | Cross-check MET/SIGMET externally; don't rely solely on in-sim WXR returns |
| Cross-side radio select | 🟧 | Not implemented — both sides show the same radio menu | Brief crew coordination accordingly; not an abnormal, a modelling limitation |
| DME hold | 🟧 | Function not present | No workaround needed operationally; note for training realism only |
| Engine (HTF7000) start/limit fidelity | 🟧 | Depth not independently confirmed against real FADEC/limit logic | Treat all EGT/N1/start-abuse cues in the Checklist/QRH as reference only pending verification |
| Failure/EICAM-style alerting depth | 🟧 | Not confirmed as a full certified-systems failure simulation | Use the model for normal-ops line flying; treat 🟧 QRH items as reference/training aids, not certified drill |
| Navdata / AIRAC | 🟧 | FMS routing/procedures depend on the pilot's installed AIRAC cycle | Keep a current AIRAC cycle; mismatch causes discontinuities/missing SIDs-STARs |
| Perf realism | 🟧 | Modelled performance is approximate; not certified data | Use the SimBrief OFP (Dispatch) as the planning authority, not the sim's own figures |

## 5. Constraints that affect dispatch or procedures 🟥

- **Approved-model decision is open 🟥 `[VERIFY]`.** Until K Global tests the identified candidate and management confirms it, the pack cannot go Verified and the Intro §2 sim line stays `[VERIFY]`. Priority: run the test pass on the single identified X-Plane 11 candidate; if it fails to meet K Global's systems-depth bar, source a second candidate before approval.
- **EDTO/dispatch fidelity 🟥.** Per Dispatch §5, **no K Global EDTO/ETOPS rule time is established for the CL30** regardless of model — no add-on can substitute for that operator-level decision. Any extended-diversion scenario remains a case-by-case dispatch assessment, never an in-sim inference. 🟥
- **AIRAC/navdata dependency 🟧.** VIP/charter missions may route through less-common fields; an out-of-date AIRAC cycle breaks FMS routing and procedures. Pilots must maintain current navdata before dispatching a CL30 leg.
- **No fallback candidate 🟧.** Unlike the mainline widebody packs, this pack currently has a **single** identified candidate model — if it is found unsuitable on test, the Checklist/QRH remain generically written pending a replacement.

---

## Sources & References
*Public URLs only. Private/OEM/add-on documents may inform content but must never be listed here.*

- X-Plane.Org Store — Bombardier Challenger 300 v2 Captain Edition (X-Plane 11) — https://store.x-plane.org/Bombardier-Challenger-300-v2-Captain-Edition-XP11_p_749.html
- Aerosoft Shop — Challenger 300 v2 Captain Edition (XP11) product listing — https://www.aerosoft.com/us/shop/flight/x-plane/x-plane-11/aircraft/2335/challenger-300-v2-captain-edition-xp11
- FSElite — Bombardier Challenger 300 V2 Captain Edition Released (X-Plane 11) — https://fselite.net/content/bombardier-challenger-300-v2-captain-edition-released-x-plane-11/
- SKYbrary — Bombardier Challenger 300 (CL30) — https://skybrary.aero/aircraft/cl30
- Wikipedia — Bombardier Challenger 300 — https://en.wikipedia.org/wiki/Bombardier_Challenger_300

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-25 | Initial draft — single identified X-Plane 11 candidate model (payware Challenger 300 v2, public store/review sources); fidelity notes on default-FMS/WXR fallback and non-modelled items; approved-model decision left open `[VERIFY]`; no fallback candidate identified (watch-item). |
