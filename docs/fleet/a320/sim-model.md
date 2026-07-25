<!--
================================================================================
  K Global — AIRFRAME PACK · SIM-MODEL  ·  A320 Airbus A320-200
  Approved & tested models, quirks and limitations. NOT an install guide —
  users are assumed competent to install and configure their own add-ons.
  FLAG LEGEND  🟥 hard constraint/blocker   🟧 caution/limitation   🟩 normal/confirmed
================================================================================
-->

# A320 — Airbus A320-200 · Sim-Model

**A320 / A320 family** · represented in-sim by the model(s) below · sim = X-Plane 11
**Version** v0.1 · **Updated** 2026-07-25 · **Status** Draft

> **Read-me:** Which add-on(s) K Global **approves and has tested** to represent this ICAO type, and the quirks, constraints and limitations that matter in operation. Not an installation guide — setup is the pilot's responsibility. **No model here is yet formally approved by K Global — that is a management decision still open** 🟧 `[VERIFY]`. Flag legend 🟥 hard constraint · 🟧 limitation · 🟩 normal.

---

## 1. Approved & tested models

| Model (developer + product) | Sim / ver tested | Systems depth | Status |
|---|---|---|---|
| **ToLiss A320** (base "A320 NEO" package + "A320 CEO" addon) | X-Plane 11 (v1.0–1.3.x current as of this draft) `[VERIFY — K Global test]` | study | 🟧 Conditional — leading candidate; approval pending |
| **JARDesign A320 Airliner** (switchable ceo/neo wingtips & engines) | X-Plane 11 | mid (custom FMC, not full study) | 🟧 Conditional — fallback |
| X-Plane 11 default fleet | X-Plane 11 | — | 🟥 Not recommended — XP11 ships **no** Airbus of any type |

*Status key: 🟩 Approved — tested, cleared for line use · 🟧 Conditional — usable with the noted limitations · 🟥 Not recommended — known blocker, avoid.*

**Honest position on the "approved model" gap 🟧 `[VERIFY]`:** as of this draft K Global has **not** run a formal in-house test-and-approve pass on any A320-family add-on, so nothing here is 🟩 Approved. The table lists genuine, publicly available candidates and what each would cost operationally. The Intro §2 mapping line (`Sim model: ToLiss A320 [VERIFY]`) resolves **here** once a model is tested and management confirms it — until then this file, the Checklist and the QRH are written to whichever candidate is flown and every model-specific figure stays `[VERIFY]`.

**Why ToLiss A320 leads:** ToLiss's single-aisle line publishes an "A320 NEO" base package (released 2023, PW1127G-JM / CFM LEAP-1A26 neo engines) and, since a 2025 update, a separate **"A320 CEO" addon** modelling the earlier-generation CFM56-5B4 / IAE V2527-A5 engines with switchable sharklet/wingtip-fence geometry. **K Global's A320-200 is ceo-generation** (Intro §1: CFM56-5B or V2500) — the fidelity-correct install is the **base package plus the CEO addon**, not the base package alone. Confirm both components are installed before treating any A320 figure in this pack as model-verified.

## 2. Type ↔ model fidelity note 🟥

- **ToLiss A320 (base + CEO addon)** models the correct engine family (CFM56-5B4 / IAE V2527-A5) for K Global's fleet. **Base package alone represents the neo (LEAP-1A/PW1100G, sharklets standard) — the wrong generation for this fleet.** The CEO addon must be present and the engine-type selector set correctly, or fuel-burn/thrust figures will read as neo, not ceo. This is the inverse of the A339 pack's neo/ceo mismatch risk — here the **base product is the neo and the correct-fidelity path requires the paid addon** 🟥 `[VERIFY — addon installed]`.
- **JARDesign A320 Airliner** ships a single package with **switchable wingtip design (classic fences or sharklets) and CFM56 or PW1100G engine options** in one purchase — no separate addon needed to represent either generation, at mid-fidelity systems depth (custom FMC, not full study-level failure/ECAM logic).
- Cross-ref: **Intro §2** (real→SimBrief→sim mapping) and **Dispatch §2–§3** (profile + fuel). Confirm the flown model's engine-type selection matches the tail's actual engine fit (Intro §1: CFM56-5B or V2500, tail-dependent) before relying on burn figures.

## 3. Systems-depth caveats

- **ToLiss A320 (study, base+CEO):** deep FMGS (dual independent MCDUs), FBW normal/alternate/direct law, ECAM with failure logic across ~230 injectable failures and ~220 circuit breakers for the single-aisle line, hydraulics/electrics/fuel/pressurisation modelled, custom engine model, autoflight/ATHR, SimBrief/ACARS/CPDLC integration. Publisher-stated **X-Plane 11 compatible except XP12-specific rain effects**; a handful of secondary items (console lights, some landing-gear spring tuning, VR copilot-joystick axes) are noted XP12-only in the change log 🟧. Verify each abnormal is actually simulated on the installed build before relying on the QRH memory items against it `[VERIFY]`.
- **JARDesign A320 Airliner (mid):** most ATA-chapter systems present (air cond/press/vent, APU, autoflight, electrical, flight controls, fuel, hydraulic, ice/rain, landing gear, navigation, oxygen, pneumatic, power plant) with a good FBW approximation, but **not** a full-depth study-level failure/ECAM simulation — several non-normals in the QRH will be **partially or not modelled** 🟧. Publisher markets it as "advanced" but explicitly **not for real-world pilot training** — a useful calibration for how far to trust it. Fine for normal-ops line flying; weaker for abnormal/emergency training.
- **General:** neither XP11 model reproduces real certified performance data. Do **not** describe installation here — pilots are assumed competent to install, configure and update their own add-on and navdata.

## 4. Quirks, constraints & limitations

| Area | Flag | Model | Detail / operational impact | Workaround |
|---|---|---|---|---|
| Engine-generation mismatch | 🟥 | ToLiss A320 | Base package is **neo** (LEAP-1A/PW1100G); K Global's A320-200 is **ceo** (CFM56-5B/V2500) | Install the **CEO addon** and select the correct engine type per tail before dispatch-figure use |
| XP12-only extras | 🟧 | ToLiss A320 | Rain effects (and a few minor items: console lights, some gear-spring tuning, VR copilot-axis animation) are XP12-only per publisher change log | Fly XP11 without those cues; no core FBW/systems impact |
| Failure/ECAM depth | 🟧 | JARDesign A320 | Not full study-level; some QRH abnormals not simulated | Use for normal-ops; treat 🟧 QRH items as reference only on this model |
| Wingtip/engine selector | 🟧 | JARDesign A320 | Single package switches sharklet/fence and CFM/PW engine — must be set to match the tail being flown | Confirm selector state before dispatch; mismatched selection misrepresents the tail |
| Navdata / AIRAC | 🟧 | Both | FMS routing/procedures depend on the pilot's installed AIRAC cycle | Keep a current AIRAC cycle; mismatch causes discontinuities/missing SIDs-STARs |
| Perf realism | 🟧 | Both | Modelled performance is approximate; not certified data | Use SimBrief OFP (Dispatch) as the planning authority, not the sim's own figures |

## 5. Constraints that affect dispatch or procedures 🟥

- **Approved-model decision is open 🟥 `[VERIFY]`.** Until K Global tests a candidate and management confirms it, the pack cannot go Verified and the Intro §2 sim line stays `[VERIFY]`. Priority: run the test pass on **ToLiss A320 (base + CEO addon, XP11)**.
- **CEO addon dependency 🟥.** If only the ToLiss base package is installed, the flown aircraft is a **neo** — wrong engines, wrong wingtip standard, wrong burn profile for a fleet whose real type is ceo (Intro §1, Dispatch §1). Confirm addon presence before any A320 fuel-burn comparison against the SimBrief OFP (Dispatch §2–§3).
- **Engine-fit selection per tail 🟧.** K Global's A320-200 fleet is dual-sourced (CFM56-5B **or** V2500, Intro §1/Dispatch §7). Whichever model is flown, set its engine-type selector to match the actual tail before treating fuel-flow assumptions as valid.
- **AIRAC/navdata dependency 🟧.** Short/medium-haul narrowbody trunks still depend on a current AIRAC cycle for correct SID/STAR and approach procedures; maintain current navdata before dispatching an A320 leg.
- **Perf/hot-and-high 🟧.** Neither candidate model reproduces certified takeoff/landing performance; hot-and-high or thrust-limited departures (Dispatch §4/§7) must be assessed against public/OFP data, not sim-derived figures.

---

## Sources & References
*Public URLs only. Private/OEM/add-on documents may inform content but must never be listed here.*

- ToLiss — A320 NEO product page — https://toliss.com/pages/a320-neo
- ToLiss — A320 CEO (addon) product page — https://toliss.com/pages/a320-ceo
- ToLiss — A320 NEO change log — https://toliss.com/pages/a320-neo-change-log
- ToLiss — Common Features (systems scope, XP compatibility) — https://toliss.com/pages/common-features
- JARDesign — A320 Airliner product page — https://main.jardesign.org/A320.html
- JARDesign — A320 Airliner (X-Plane.Org Store) — https://store.x-plane.org/JARDesign-320-Airliner_p_580.html
- SKYbrary — Airbus A320 (A320) — https://skybrary.aero/aircraft/a320

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-25 | Initial draft — candidate models (ToLiss A320 base+CEO addon lead, JARDesign A320 Airliner fallback); flagged the neo-base/ceo-addon fidelity trap specific to this type; approved-model decision left open `[VERIFY]` |
