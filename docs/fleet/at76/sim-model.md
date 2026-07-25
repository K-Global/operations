<!--
================================================================================
  K Global — AIRFRAME PACK · SIM-MODEL  ·  AT76 ATR 72-600
  Approved & tested models, quirks and limitations. NOT an install guide —
  users are assumed competent to install and configure their own add-ons.
  FLAG LEGEND  🟥 hard constraint/blocker   🟧 caution/limitation   🟩 normal/confirmed
================================================================================
-->

# AT76 — ATR 72-600 · Sim-Model

**AT76 / ATR-600 series** · **TURBOPROP** · represented in-sim by the model(s) below · sim = X-Plane 11
**Version** v0.1 · **Updated** 2026-07-25 · **Status** Draft

> **Read-me:** Which add-on(s) K Global **approves and has tested** to represent this ICAO type, and the quirks, constraints and limitations that matter in operation. Not an installation guide — setup is the pilot's responsibility. **No model here is yet formally approved by K Global — that is a management decision still open** 🟧 `[VERIFY]`. Flag legend 🟥 hard constraint · 🟧 limitation · 🟩 normal.

---

## 1. Approved & tested models

| Model (developer + product) | Sim / ver tested | Systems depth | Status |
|---|---|---|---|
| **Aerosoft / McPhat Studios ATR 72-500** | X-Plane 11 `[VERIFY — K Global test]` | Moderate — animated exterior/3D cockpit, fuel/fire-protection/flight-control/flight-instrument/AFCS systems modelled; CAS (crew alerting) **not fully simulated**; condition levers **not fully functional**; hotel mode **not simulated** (per developer's own published feature notes) | 🟧 Conditional — leading payware candidate; approval pending; **sub-variant mismatch** (see §2) |
| **maxhille/atr-xplane (open-source ATR 72-500)** | X-Plane 11.41 `[VERIFY]` | Low — stated project goal is only "flyable, most basic features"; community/hobby project, not aimed at study-level fidelity | 🟧 Conditional — free fallback only; not comparable in depth to the payware candidate |
| X-Plane 11 / 12 default fleet | X-Plane 11 / 12 | — | 🟥 Not recommended — **neither XP11 nor XP12 ships a default ATR 72**; no factory fallback exists for this type |

*Status key: 🟩 Approved — tested, cleared for line use · 🟧 Conditional — usable with the noted limitations · 🟥 Not recommended — known blocker, avoid.*

**Honest position on the "approved model" gap 🟧 `[VERIFY]`:** as of this draft K Global has **not** run a formal in-house test-and-approve pass on either ATR candidate, so nothing here is 🟩 Approved. Unlike the mainline/regional-jet packs, **the entire public X-Plane 11/12 market for this type is built on the ATR 72-**500**** — an earlier, analogue/EFIS-generation sub-variant that predates the Thales glass-cockpit "-600" this pack documents (Intro §1). No purpose-built ATR 72-**600** payware product was identified in the public X-Plane market as of this draft `[VERIFY]`. The Aerosoft/McPhat Studios product is the more developed of the two -500 candidates and is treated here as the leading conditional candidate on airframe/engine-family grounds, with the sub-variant cockpit gap explicitly flagged rather than glossed over.

## 2. Type ↔ model fidelity note 🟧🟥

- **The fidelity trap for this pack is a generational (sub-variant) mismatch, not a wrong-type substitution** — there is no ATR-72-branded product on the market that models the wrong airframe entirely, but **every candidate found is a -500, not the -600** this pack documents. The -600's headline difference is the **Thales five-LCD glass cockpit / Suite 600 avionics** (Intro §1) replacing the -500's older EFIS/analogue-hybrid flight deck — a candidate built to the -500 will not represent this cockpit, its FMS behaviour, or its RNP capability correctly.
- **Powerplant/airframe commonality is closer than the cockpit gap suggests** 🟩 — the -500 and -600 share the same basic PW127-family engine lineage, the same six-blade Hamilton Standard/Ratier-Figeac propeller family, and near-identical external dimensions and aerodynamics; a -500 model's flight model is a reasonable stand-in for gross handling and performance training, but its **panel, FMS and systems-annunciation logic should not be treated as representing the -600 flight deck**.
- **No competing developer offering was found for an X-Plane ATR 72-600** as of this draft — this is a genuine market gap, not a K Global oversight; revisit periodically as the payware X-Plane 11/12 (or emerging XP12-native) market develops.
- Cross-ref: **Intro §2** (real→SimBrief→sim mapping) and **Dispatch §2** (SimBrief setup). No K Global reference OFP exists yet for this type (Dispatch §7 watch-item) — burn/fidelity comparisons cannot yet be validated against a flown mission.

## 3. Systems-depth caveats

- **Aerosoft/McPhat Studios ATR 72-500:** per the developer's own published feature list — modelled fire protection, fuel system (fuel-temperature indicator **not** simulated), power plant (condition levers **not fully functional**; hotel-mode **not** simulated), flight controls, flight instruments, and an automatic flight control system. The **centralised crew-alerting system is not fully simulated** — a material limitation for training the abnormal/emergency flows in the QRH, several of which are therefore built from general public turboprop knowledge rather than confirmed sim-specific annunciation logic 🟧 `[VERIFY]`.
- **Condition-lever limitation 🟥:** the developer's own notes flag condition levers as "not fully functional" — this directly affects the turboprop-specific power-management/prop-governing training this pack exists to capture (Intro §6, Checklist). Treat any condition-lever-dependent Checklist/QRH item as a training aid to be re-verified against the installed product version, not a confirmed simulated behaviour.
- **maxhille/atr-xplane:** stated scope is "flyable... most basic features" for the ATR 72-500 as a short-term project goal, with the -600 series listed only as a long-term aspiration in the project's own README — treat as a basic, free fallback, not a systems-depth alternative to the payware candidate.
- **General:** neither product reproduces certified real-world performance data. Do **not** describe installation here — pilots are assumed competent to install, configure and update their own add-on and navdata.

## 4. Quirks, constraints & limitations

| Area | Flag | Model | Detail / operational impact | Workaround |
|---|---|---|---|---|
| No default/factory ATR | 🟥 | XP11/12 | Neither sim ships a default ATR 72 — no fallback if the payware product is unavailable | Standardise on the Aerosoft/McPhat ATR 72-500 (or the free maxhille project as a basic fallback) |
| Sub-variant mismatch (-500 vs -600) | 🟥 | Both candidates | Neither models the Thales glass-cockpit/Suite 600 flight deck this pack documents (Intro §1) | Treat cockpit/FMS/annunciation training as approximate; brief crews on the real -600 panel from public references, not the sim panel |
| Condition levers not fully functional | 🟥 | Aerosoft/McPhat | Directly limits training of a core turboprop-specific system (power management, feather) | Cross-train the real condition-lever logic from public/OM references (Intro §6, Checklist) rather than the sim's behaviour |
| CAS/crew-alerting not fully simulated | 🟧 | Aerosoft/McPhat | Abnormal/emergency annunciation logic in the QRH is built from general public knowledge, not confirmed sim behaviour | Re-verify each QRH item against the installed product before relying on it `[VERIFY]` |
| Hotel mode not simulated | 🟧 | Aerosoft/McPhat | Ground/APU-substitute "hotel mode" (single-engine ground power) common on real ATRs is not modelled | Use standard external-power/APU-equivalent ground flow instead |
| Fuel-temperature indicator not simulated | 🟧 | Aerosoft/McPhat | Minor systems-depth gap | Not operationally significant for normal training |
| Basic-only free alternative | 🟧 | maxhille/atr-xplane | Stated project scope is minimal ("most basic features") | Use only as a last-resort free fallback, not a systems-training platform |
| Navdata / AIRAC | 🟧 | Both | FMS/CDU routing and procedures depend on the pilot's installed AIRAC cycle | Keep a current AIRAC cycle; mismatch causes discontinuities/missing SIDs-STARs |
| Perf realism | 🟧 | Both | Modelled performance is approximate; not certified data | Treat public ATR/EASA-TCDS figures (Intro/Dispatch) as the planning authority, not the sim's own figures |
| No reference OFP | 🟧 | Both | No K Global AT76 OFP flown yet (Dispatch §7) | Burn/CI validation against a flown mission remains open |

## 5. Constraints that affect dispatch or procedures 🟥

- **Approved-model decision is open 🟥 `[VERIFY]`.** Until K Global tests one of the two candidates and management confirms it, the pack cannot go Verified and the Intro §2 sim line stays `[VERIFY]`.
- **-500 vs -600 confusion 🟥.** The commonest real-world error this pack must guard against is treating the -500 candidate's glass-cockpit-free panel, FMS or annunciation logic as representative of the -600 fleet documented here. Confirm sub-variant limitations before any cockpit-procedure training is delivered from the sim alone.
- **AIRAC/navdata dependency 🟧.** The Regional short-field network (Dispatch §6) is less demanding than an oceanic trunk, but FMS routing still depends on a current AIRAC cycle at every field flown.
- **Common type rating with AT46 🟩.** Both types share a crew rating (Intro §1); no purpose-built ATR 42-600 X-Plane product was identified either (see the [AT46 Sim-Model](../at46/sim-model.md)), so the same -500-generation sub-variant gap applies across both packs — standardising on the same developer/product family where possible minimises systems-behaviour drift a crew would not see on the real, common-rated aircraft.

---

## Sources & References
*Public URLs only. Private/OEM/add-on documents may inform content but must never be listed here.*

- Aerosoft/simMarket — ATR 72-500 for X-Plane (product page, feature list) — https://secure.simmarket.com/aerosoft-online-atr-72-500-for-x-plane.phtml
- maxhille/atr-xplane — ATR Aircraft for X-Plane (open-source project) — https://github.com/maxhille/atr-xplane
- SKYbrary — ATR ATR-72-600 (AT76) — https://skybrary.aero/aircraft/at76
- ATR Aircraft — Cockpit / Thales avionics — https://www.atr-aircraft.com/innovation/cockpit/

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-25 | Initial draft — candidate models identified (Aerosoft/McPhat Studios ATR 72-500 payware, and the free maxhille/atr-xplane open-source project; no default/factory ATR exists; no purpose-built ATR 72-600 X-Plane product found); -500-vs-600 sub-variant/cockpit-generation mismatch flagged 🟥 as the type's fidelity trap; condition-lever and CAS limitations noted from the developer's own feature list; approved-model decision left open `[VERIFY]`. |
