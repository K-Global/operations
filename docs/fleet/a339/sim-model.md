<!--
================================================================================
  K Global — AIRFRAME PACK · SIM-MODEL  ·  A339 Airbus A330-900neo
  Approved & tested models, quirks and limitations. NOT an install guide —
  users are assumed competent to install and configure their own add-ons.
  FLAG LEGEND  🟥 hard constraint/blocker   🟧 caution/limitation   🟩 normal/confirmed
================================================================================
-->

# A339 — Airbus A330-900neo · Sim-Model

**A339 / A330 family** · represented in-sim by the model(s) below · sim = X-Plane 11
**Version** v0.1 · **Updated** 2026-07-25 · **Status** Draft

> **Read-me:** Which add-on(s) K Global **approves and has tested** to represent this ICAO type, and the quirks, constraints and limitations that matter in operation. Not an installation guide — setup is the pilot's responsibility. **No model here is yet formally approved by K Global — that is a management decision still open** 🟧 `[VERIFY]`. Flag legend 🟥 hard constraint · 🟧 limitation · 🟩 normal.

---

## 1. Approved & tested models

| Model (developer + product) | Sim / ver tested | Systems depth | Status |
|---|---|---|---|
| **ToLiss Airbus A330-900** (A339) | X-Plane 11 / 12 (v1.0.x, Oct 2024) `[VERIFY — K Global test]` | study | 🟧 Conditional — leading candidate; approval pending |
| **JARDesign JD330 Airliner** (A330-200/-300, ceo) | X-Plane 11 / 12 | mid (custom FMC, not full study) | 🟧 Conditional — fallback; ceo airframe, see §2 |
| X-Plane 11 default fleet | X-Plane 11 | — | 🟥 Not recommended — XP11 ships **no** A330 of any generation |

*Status key: 🟩 Approved — tested, cleared for line use · 🟧 Conditional — usable with the noted limitations · 🟥 Not recommended — known blocker, avoid.*

**Honest position on the "approved model" gap 🟧 `[VERIFY]`:** as of this draft K Global has **not** run a formal in-house test-and-approve pass on any A330 add-on, so nothing here is 🟩 Approved. The table lists genuine, publicly available candidates and what each would cost operationally. The Intro §2 mapping line (`Sim model: X-Plane 11 A330-900 [VERIFY]`) resolves **here** once a model is tested and management confirms it — until then this file, the Checklist and the QRH are written to whichever candidate is flown and every model-specific figure stays `[VERIFY]`.

**Why ToLiss A339 leads:** contrary to the common assumption that no study-level A330neo exists for XP11, ToLiss released the A330-900 with **X-Plane 11 and 12 support** (Oct 2024). It is the **actual neo variant** — Trent 7000, neo FMS/FBW, correct wing — so it carries **no** neo-vs-ceo fidelity penalty (see §2). The XP11 caveat is that ToLiss primarily targets XP12: the **HUD and ROW/ROPS are XP12-only**, and XP12 lighting/weather/ground-handling refinements do not apply on XP11 🟧. If K Global standardises on XP12 in future, this model carries straight over.

## 2. Type ↔ model fidelity note 🟧

- **ToLiss A339** *is* an A330-900 with **Trent 7000** — it matches the real type, the SimBrief A330-900/Trent 7000 dispatch profile (Dispatch §2) and the Intro §2 mapping directly. Cruise burn, ceiling and FMS behaviour should track the OFP without a variant correction. This is the fidelity-preferred path. 🟩 (fidelity) / 🟧 (approval still pending)
- **JARDesign JD330** is a **ceo-generation A330-200/-300** (Trent 772B / CF6 / PW options), **not** the neo. Used to represent the A339 it introduces exactly the mismatch flagged in Intro §2: **older engine and thrust, higher cruise burn, no neo Sharklet/aero improvement, and a ceo-era FMS** — so a burn comparison against the neo OFP (avg 5,863 kg/hr, ~67.8 t trip on the reference EDDF–KSFO OFP `[OFP EDDF–KSFO 2026-07-25]`) will read high and must be corrected for the ceo penalty. Acceptable as a visual/procedural stand-in; **not** fidelity-equivalent for fuel or performance work. 🟧
- Cross-ref: **Intro §2** (real→SimBrief→sim mapping) and **Dispatch §2–§3** (profile + fuel). If JD330 is the flown model, treat all Dispatch burn figures as neo-target references the model will not reproduce exactly.

## 3. Systems-depth caveats

- **ToLiss A339 (study):** deep FMGS, FBW normal/alternate/direct law, realistic ECAM with failure logic, hydraulics/electrics/fuel/pressurisation modelled, engine start and Trent 7000 model, autoflight/ATHR, and a failure system — enough that the Checklist and QRH can be flown largely as real. **XP11 limits:** no HUD, no ROW/ROPS, and XP11's older weather/lighting engine means some environmental cues (weather radar, night lighting) are less faithful than on XP12 🟧. Verify each abnormal is actually simulated before relying on the QRH memory items against it `[VERIFY]`.
- **JARDesign JD330 (mid):** custom FMC and a good FBW/systems approximation, but **not** a full-depth failure/ECAM simulation — several non-normals in the QRH will be **partially or not modelled** 🟧. Fine for normal-ops line flying; weaker for abnormal/emergency training. Where the QRH marks a procedure 🟧 "model-dependent," JD330 is the likely reason it may not trigger or resolve as written.
- **General:** neither XP11 model reproduces real certified performance data. Do **not** describe installation here — pilots are assumed competent to install, configure and update their own add-on and navdata.

## 4. Quirks, constraints & limitations

| Area | Flag | Model | Detail / operational impact | Workaround |
|---|---|---|---|---|
| HUD / ROW-ROPS | 🟧 | ToLiss A339 | HUD and runway-overrun protection are **XP12-only**; absent on XP11 | Fly XP11 without HUD; use PFD/standard callouts; move to XP12 to regain |
| Weather radar | 🟧 | ToLiss A339 | XP11 weather-radar behaviour is degraded vs XP12 (noted in dev changelog) | Cross-check MET/SIGMET externally; don't rely solely on WXR returns |
| Engine variant | 🟥 | JARDesign JD330 | ceo engines (Trent 772B/CF6/PW), **not** Trent 7000 — burn/thrust/FMS differ from neo | Apply a ceo→neo correction to any burn comparison; prefer ToLiss for fuel work |
| Failure/ECAM depth | 🟧 | JARDesign JD330 | Not full study-level; some QRH abnormals not simulated | Use for normal-ops; treat 🟧 QRH items as reference only on this model |
| Navdata / AIRAC | 🟧 | Both | FMS routing/procedures depend on the pilot's installed AIRAC cycle | Keep a current AIRAC cycle; mismatch causes discontinuities/missing SIDs-STARs |
| Perf realism | 🟧 | Both | Modelled performance is approximate; not certified data | Use SimBrief OFP (Dispatch) as the planning authority, not the sim's own figures |

## 5. Constraints that affect dispatch or procedures 🟥

- **Approved-model decision is open 🟥 `[VERIFY]`.** Until K Global tests a candidate and management confirms it, the pack cannot go Verified and the Intro §2 sim line stays `[VERIFY]`. Priority: run the test pass on **ToLiss A339 (XP11)**.
- **ETOPS/EDTO modelling fidelity 🟥.** The A339 is an EDTO backbone (Dispatch §5, OFP dispatched ETOPS 120). **No add-on simulates operator EDTO approval, critical-fuel scenarios or en-route-alternate adequacy** — those are dispatch/OFP disciplines, not sim features. The sim can fly the routing and a single-engine driftdown (ToLiss study-level models engine-out; JD330 approximates it 🟧), but the **decompression + engine-out critical-fuel check remains an OFP/OM E task** and must not be inferred from in-sim behaviour. 🟥
- **AIRAC/navdata dependency 🟥.** Long thin trunks (EDDF–KSFO reference) route through oceanic/polar tracks that demand a **current AIRAC cycle**; an out-of-date cycle breaks the FMS route, waypoints and ETOPS entry/exit points. Pilots must maintain current navdata before dispatching an A339 leg. 🟥
- **XP11 vs XP12 divergence 🟧.** If the fleet later moves to XP12, ToLiss regains HUD/ROW-ROPS and improved weather/lighting — re-test and re-baseline the Checklist/QRH at that point (Instructions §5 trigger: "Approved sim model / version / new AIRAC").

---

## Sources & References
*Public URLs only. Private/OEM/add-on documents may inform content but must never be listed here.*

- ToLiss — A330-900 product page (X-Plane.Org Store) — https://store.x-plane.org/Airbus-A330-900-neo-by-ToLiss_p_1952.html
- simMarket — ToLiss A330-900 for X-Plane 11 and 12 (XP11/12 compatibility) — https://secure.simmarket.com/toliss-inc-toliss-a330-900-for-xplane-11-and-12.phtml
- ToLiss — news / changelog — https://toliss.com/blogs/news
- FSElite — Review: ToLiss A330-900neo for X-Plane — https://fselite.net/content/review-toliss-a330-900neo-for-x-plane/
- JARDesign — JD330 Airliner (A330-200/-300) — https://jardesign.org/a330/
- JARDesign — 330 Airliner (X-Plane.Org Store) — https://store.x-plane.org/JARDesign-330-Airliner-_p_572.html
- SKYbrary — Airbus A330neo (A339) — https://skybrary.aero/aircraft/a339

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1.1 | 2026-07-25 | Governance scrub: removed callsign and build-process references per OM content rules. |
| v0.1 | 2026-07-25 | Initial draft — candidate models (ToLiss A339 XP11/12 lead, JARDesign JD330 ceo fallback); approved-model decision left open `[VERIFY]` |
