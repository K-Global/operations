<!--
================================================================================
  K Global — AIRFRAME PACK · SIM-MODEL  ·  MD11 McDonnell Douglas MD-11F
  Approved & tested models, quirks and limitations. NOT an install guide —
  users are assumed competent to install and configure their own add-ons.
  FLAG LEGEND  🟥 hard constraint/blocker   🟧 caution/limitation   🟩 normal/confirmed
================================================================================
-->

# MD11 — McDonnell Douglas MD-11F · Sim-Model

**MD11 / MD-11 family** · represented in-sim by the model(s) below · sim = X-Plane 11
**Version** v0.1 · **Updated** 2026-07-25 · **Status** Draft

> **Read-me:** Which add-on(s) K Global **approves and has tested** to represent this ICAO type, and the quirks, constraints and limitations that matter in operation. Not an installation guide — setup is the pilot's responsibility. **No model here is yet formally approved by K Global — that is a management decision still open** 🟧 `[VERIFY]`. Flag legend 🟥 hard constraint · 🟧 limitation · 🟩 normal.

---

## 1. Approved & tested models

| Model (developer + product) | Sim / ver tested | Systems depth | Status |
|---|---|---|---|
| **Rotate MD-11** — **Freighter edition** | X-Plane 11 `[VERIFY — K Global test]` | study | 🟧 Conditional — candidate; engine-variant match and K Global test pass **unconfirmed** |
| X-Plane 11 default fleet | X-Plane 11 | — | 🟥 Not recommended — XP11 ships **no** MD-11 of any variant |

*Status key: 🟩 Approved — tested, cleared for line use · 🟧 Conditional — usable with the noted limitations · 🟥 Not recommended — known blocker, avoid.*

**Honest position on the "approved model" gap 🟧 `[VERIFY]`:** K Global has **not** run a formal in-house test-and-approve pass on the MD-11 add-on, so nothing here is 🟩 Approved. The Intro §2 mapping line resolves **here** once the model is tested and management confirms it — until then this file, the Checklist and the QRH are written to whichever model is flown and every model-specific figure stays `[VERIFY]`.

**Why Rotate MD-11 leads:** it is the only current **study-level** MD-11 simulation for X-Plane, offering deep FMC/FMS, autoflight, hydraulics/electrical/fuel/pressurisation, cargo-fire test logic, weather radar and ice-and-rain systems modelling — the systems depth this pack's Checklist and QRH assume. **A materially lower-severity variant gap than the B77F pack's:** the product line explicitly ships a dedicated **MD-11 Freighter edition** as a distinct product from the Passenger edition — there is no open question of whether a freighter airframe exists at all, only whether **K Global's installed copy is genuinely the Freighter edition** (not the Passenger edition) and whether it has been tested/approved.

## 2. Type ↔ model fidelity note 🟧

- **Rotate MD-11 (Freighter edition), if confirmed installed** *is* an MD-11F — it matches the real type's main-deck freighter configuration directly. Cruise burn, ceiling and FMC/FMS behaviour should track a future OFP without a variant correction — **if** the Freighter edition is genuinely the copy K Global flies. 🟧 (fidelity, conditional on edition) / 🟧 (approval still pending)
- **Engine-variant mismatch hazard 🟧:** the real MD-11 was delivered with either **GE CF6-80C2D1F** or **Pratt & Whitney PW4460/4462** engines, with materially different OEW figures (Intro §5). The candidate model's default engine data must be checked against K Global's confirmed fleet engine before treating any Dispatch burn/weight figure as authoritative — a passenger-edition or wrong-engine-variant substitution will not reproduce the intended numbers. `[VERIFY]`
- Cross-ref: **Intro §2** (real→SimBrief→sim mapping) and **Dispatch §2–§4** (profile, fuel, freighter payload/CG).

## 3. Systems-depth caveats

- **Rotate MD-11 (study), if Freighter edition confirmed:** dual FMC/FMS with LNAV/VNAV-equivalent navigation, autopilot/autothrottle, EFIS-based EAD/SD synoptic displays, hydraulics (three independent systems), electrical, fuel, pressurisation/air, ice-and-rain protection, cargo-fire detection/test logic and a fire-protection panel modelled — enough that the Checklist and QRH can be flown largely as real. **Freighter-specific systems caveat 🟧:** main-deck cargo-compartment smoke/fire detection depth, and whether main-deck ventilation-shutoff logic is distinct from the lower-deck agent-discharge logic, are the parts most likely to need verification on the flown build `[VERIFY]`.
- **LSAS / pitch-augmentation modelling 🟥:** the type's defining handling trait (Intro §2, §6) is the **Longitudinal Stability Augmentation System (LSAS)** compensating for reduced natural pitch damping. Whether the sim model reproduces LSAS engagement/failure logic — and, critically, whether it reproduces the **degraded handling qualities with LSAS off or failed** — is unverified and is the single most safety-relevant modelling question in this pack. Confirm before using this model for handling-qualities training `[VERIFY]`.
- **XP11 limits:** XP11's older weather/lighting engine means some environmental cues (weather radar returns, night lighting, ground handling) are less faithful than a current-generation sim would render 🟧.
- **General:** the model does not reproduce real certified performance data, and no add-on simulates a main-deck cargo loader, pallet build-up or load-planning software. Do **not** describe installation here — pilots are assumed competent to install, configure and update their own add-on and navdata.

## 4. Quirks, constraints & limitations

| Area | Flag | Model | Detail / operational impact | Workaround |
|---|---|---|---|---|
| Freighter edition confirmation | 🟧 | Rotate MD-11 | Confirm the installed copy is the Freighter edition, not the Passenger edition | Confirm edition before any dispatch/perf work |
| Engine variant | 🟧 | Rotate MD-11 | Default engine data (GE vs PW) may not match K Global's fleet — different OEW/MTOW | Confirm engine variant before treating weight/burn figures as authoritative |
| LSAS / pitch-handling fidelity | 🟥 | Rotate MD-11 | Whether degraded/LSAS-off handling is modelled realistically is unverified — the pack's central hazard item | Do not rely on the sim to teach LSAS-off handling until verified; treat as a briefing item, not a trained reflex |
| Main-deck cargo-fire depth | 🟧 | Rotate MD-11 | Detection/ventilation-shutoff logic depth vs. lower-deck agent-discharge logic not independently confirmed | Treat main-deck fire figures as reference; verify triggers on the build |
| Five-point gear (center gear) | 🟧 | Rotate MD-11 | Center-gear synoptic/handling representation not confirmed | Confirm gear-position indications before relying on a "3 green"-style shorthand |
| Weather radar | 🟧 | Rotate MD-11 | XP11 weather-radar behaviour is degraded vs a current-generation sim | Cross-check MET/SIGMET externally |
| Navdata / AIRAC | 🟧 | Rotate MD-11 | FMC/FMS routing depends on the pilot's installed AIRAC cycle | Keep a current AIRAC cycle |
| Ground geometry | 🟧 | Rotate MD-11 | Main-deck cargo door and loader positioning not modelled — visual only | Treat ground cargo handling as a dispatch/ops discipline, not a sim feature |
| Perf realism | 🟧 | Rotate MD-11 | Modelled performance is approximate; not certified data | Use the OFP (Dispatch) as the planning authority once available, not the sim's own figures |

## 5. Constraints that affect dispatch or procedures 🟥

- **Approved-model decision is open 🟥 `[VERIFY]`.** Until K Global confirms the Freighter edition is genuinely installed, confirms the engine variant, and runs the test pass, the pack cannot go Verified and the Intro §2 sim line stays `[VERIFY]`.
- **LSAS/handling fidelity is the priority verification item 🟥.** Before this model is used for anything beyond route-flying familiarisation, confirm whether it reproduces the type's known reduced-pitch-damping characteristics and LSAS engagement/failure logic — this is the one modelling question with a direct real-world safety analogue (Intro §2, §6; QRH Ch 9).
- **EDTO/adequate-aerodrome modelling fidelity 🟥.** No add-on simulates operator EDTO/adequate-aerodrome approval or critical-fuel scenarios — those remain OFP/OM E disciplines, not sim features, and doubly so here given the type's undetermined operator policy (Dispatch §5).
- **Main-deck load-planning is never a sim feature 🟥.** Pallet position, main-deck CG discipline and floor-loading limits (Dispatch §4) are a dispatch/loadsheet function; no add-on computes or enforces this.
- **Re-baseline trigger 🟧.** If the fleet later standardises on a newer sim or a Rotate MD-11 update that clarifies the engine-variant or LSAS-fidelity questions, re-test and re-baseline the Checklist/QRH at that point.

---

## Sources & References
*Public URLs only. Private/OEM/add-on documents may inform content but must never be listed here.*

- Rotate — MD-11 Freighter product page (X-Plane.Org Store) — https://store.x-plane.org/Rotate-MD-11-Freighter_p_1580.html
- Rotate Simulation — developer site — https://rotatesim.com/
- Wikipedia — McDonnell Douglas MD-11 — https://en.wikipedia.org/wiki/McDonnell_Douglas_MD-11

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-25 | Initial draft — candidate model (Rotate MD-11, Freighter edition) identified from public product/developer pages; **engine-variant match and LSAS/handling-fidelity flagged as the priority open items 🟥/🟧 `[VERIFY]`**; lower-severity variant gap than the B77F pack noted (Freighter edition confirmed to exist as a product); approved-model decision left open `[VERIFY]`. |
