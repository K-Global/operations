<!--
================================================================================
  K Global — AIRFRAME PACK · SIM-MODEL  ·  A319 Airbus A319-100
  Approved & tested models, quirks and limitations. NOT an install guide —
  users are assumed competent to install and configure their own add-ons.
  FLAG LEGEND  🟥 hard constraint/blocker   🟧 caution/limitation   🟩 normal/confirmed
================================================================================
-->

# A319 — Airbus A319-100 · Sim-Model

**A319 / A320 family** · represented in-sim by the model(s) below · sim = X-Plane 11
**Version** v0.1 · **Updated** 2026-07-25 · **Status** Draft

> **Read-me:** Which add-on(s) K Global **approves and has tested** to represent this ICAO type, and the quirks, constraints and limitations that matter in operation. Not an installation guide — setup is the pilot's responsibility. **No model here is yet formally approved by K Global — that is a management decision still open** 🟧 `[VERIFY]`. Flag legend 🟥 hard constraint · 🟧 limitation · 🟩 normal.

---

## 1. Approved & tested models

| Model (developer + product) | Sim / ver tested | Systems depth | Status |
|---|---|---|---|
| **ToLiss Airbus A319** | X-Plane 11 / 12 `[VERIFY — K Global test]` | study | 🟧 Conditional — leading candidate; approval pending |
| **JARDesign JD320 Airliner** (A320 family, classic/neo wingtip options) | X-Plane 11 | mid (custom FMC, not full study) | 🟧 Conditional — fallback; generic A320-family airframe, see §2 |
| X-Plane 11 default fleet | X-Plane 11 | — | 🟥 Not recommended — XP11 ships **no** A319/A320-family aircraft by default |

*Status key: 🟩 Approved — tested, cleared for line use · 🟧 Conditional — usable with the noted limitations · 🟥 Not recommended — known blocker, avoid.*

**Honest position on the "approved model" gap 🟧 `[VERIFY]`:** as of this draft K Global has **not** run a formal in-house test-and-approve pass on any A319/A320-family add-on, so nothing here is 🟩 Approved. The table lists genuine, publicly available candidates and what each would cost operationally. The Intro §2 mapping line (`Sim model: ToLiss A319 [VERIFY]`) resolves **here** once a model is tested and management confirms it — until then this file, the Checklist and the QRH are written to whichever candidate is flown and every model-specific figure stays `[VERIFY]`.

**Why ToLiss A319 leads:** it is a dedicated, study-level A319 built for the ToLiss Airbus FBW line, with the same development lineage as the A321/A340/A330 products in the K Global fleet (see the A339 pack) — so the flight-model/FMGS/ECAM philosophy is consistent across the whole Airbus side of the fleet. It ships for **both X-Plane 11 and 12**; owners of the XP11 edition receive the XP12 files as a paid update path, so the model carries forward if K Global later standardises on XP12.

## 2. Type ↔ model fidelity note 🟧

- **ToLiss A319** *is* a dedicated A319-100 — it matches the real type, the SimBrief A319 dispatch profile (Dispatch §2) and the Intro §2 mapping directly. Cruise burn, ceiling and FMS behaviour should track the OFP without a variant correction. This is the fidelity-preferred path. 🟩 (fidelity) / 🟧 (approval still pending)
- **JARDesign JD320 Airliner** is a **generic A320-family** model offering both classic and sharklet wingtip options and a choice of CFM56/PW1100G engine representations — it is not a dedicated A319, so cabin length/weight defaults and FMS behaviour are tuned to the family in general rather than the A319 sub-type specifically. Used to represent the A319 it introduces the mismatch flagged in Intro §2: **generic A320-family weights/performance**, not A319-specific figures — so a burn comparison against the type OFP (once flown, Dispatch §7 watch-item) must be corrected for any family-generic bias. Acceptable as a visual/procedural stand-in; **not** confirmed fidelity-equivalent for fuel or performance work. 🟧
- Cross-ref: **Intro §2** (real→SimBrief→sim mapping) and **Dispatch §2–§3** (profile + fuel). If JD320 is the flown model, treat all Dispatch burn figures as A319-specific targets the model may not reproduce exactly.

## 3. Systems-depth caveats

- **ToLiss A319 (study):** deep FMGS, FBW normal/alternate/direct law, realistic ECAM with failure logic, hydraulics/electrics/fuel/pressurisation modelled, engine start and CFM56/V2500-equivalent model, autoflight/ATHR, and a failure system — enough that the Checklist and QRH can be flown largely as real. **XP11 limits:** environmental/lighting fidelity and any XP12-only features (where applicable) trail the XP12 edition 🟧. Verify each abnormal is actually simulated before relying on the QRH memory items against it `[VERIFY]`.
- **JARDesign JD320 (mid):** custom FMC and a good FBW/systems approximation, but **not** a full-depth failure/ECAM simulation — several non-normals in the QRH will be **partially or not modelled** 🟧. Fine for normal-ops line flying; weaker for abnormal/emergency training. Where the QRH marks a procedure 🟧 "model-dependent," JD320 is the likely reason it may not trigger or resolve as written.
- **General:** neither XP11 model reproduces real certified performance data. Do **not** describe installation here — pilots are assumed competent to install, configure and update their own add-on and navdata.

## 4. Quirks, constraints & limitations

| Area | Flag | Model | Detail / operational impact | Workaround |
|---|---|---|---|---|
| XP11 vs XP12 fidelity | 🟧 | ToLiss A319 | XP11 edition trails the XP12 edition on environmental/lighting refinement; some newer features are XP12-only | Fly XP11 with standard callouts/PFD reference; move to XP12 to regain full fidelity |
| Airframe genericism | 🟥 | JARDesign JD320 | Represents the A320 family generically, not a dedicated A319 — weights/FMS defaults are family-level, not sub-type-specific | Apply an A319-specific correction to any burn/weight comparison; prefer ToLiss for fuel/performance work |
| Failure/ECAM depth | 🟧 | JARDesign JD320 | Not full study-level; some QRH abnormals not simulated | Use for normal-ops; treat 🟧 QRH items as reference only on this model |
| Navdata / AIRAC | 🟧 | Both | FMS routing/procedures depend on the pilot's installed AIRAC cycle | Keep a current AIRAC cycle; mismatch causes discontinuities/missing SIDs-STARs |
| Perf realism | 🟧 | Both | Modelled performance is approximate; not certified data | Use SimBrief OFP (Dispatch) as the planning authority, not the sim's own figures |

## 5. Constraints that affect dispatch or procedures 🟥

- **Approved-model decision is open 🟥 `[VERIFY]`.** Until K Global tests a candidate and management confirms it, the pack cannot go Verified and the Intro §2 sim line stays `[VERIFY]`. Priority: run the test pass on **ToLiss A319 (XP11)**.
- **No type-reference OFP yet 🟧.** Dispatch §7 flags that A319 burn/CI/alternates are public-Airbus-derived, not OFP-verified — a fuel-burn cross-check against the flown sim model cannot be finalised until the first type OFP is on file.
- **AIRAC/navdata dependency 🟧.** Short/medium-haul thin sectors still depend on a **current AIRAC cycle** for correct SIDs/STARs and RNP procedures (Dispatch §2 PBN note); an out-of-date cycle breaks FMS routing. Pilots must maintain current navdata before dispatching an A319 leg.
- **XP11 vs XP12 divergence 🟧.** If the fleet later moves to XP12, the ToLiss A319 regains full-fidelity XP12 features — re-test and re-baseline the Checklist/QRH at that point (Instructions §5 trigger: "Approved sim model / version / new AIRAC").

---

## Sources & References
*Public URLs only. Private/OEM/add-on documents may inform content but must never be listed here.*

- ToLiss — Airbus A319 product page (X-Plane.Org Store) — https://store.x-plane.org/Airbus-A319-XP12-by-Toliss-_p_1631.html
- simMarket — ToLiss Airbus A319 for X-Plane 12 and 11 — https://secure.simmarket.com/toliss-inc-toliss-airbus-a319-for-x-plane-12-and-11.phtml
- ToLiss — A319 change log — https://toliss.com/pages/a319-change-log
- JARDesign — 320 Airliner (X-Plane.Org Store) — https://store.x-plane.org/JARDesign-320-Airliner_p_580.html
- SKYbrary — Airbus A319 (A319) — https://skybrary.aero/aircraft/a319

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-25 | Initial draft — candidate models (ToLiss A319 lead, JARDesign JD320 A320-family fallback); approved-model decision left open `[VERIFY]` |
