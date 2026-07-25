<!--
================================================================================
  K Global — AIRFRAME PACK · SIM-MODEL  ·  E70 Embraer E170
  Approved & tested models, quirks and limitations. NOT an install guide —
  users are assumed competent to install and configure their own add-ons.
  FLAG LEGEND  🟥 hard constraint/blocker   🟧 caution/limitation   🟩 normal/confirmed
================================================================================
-->

# E70 — Embraer E170 · Sim-Model

**E70 / E-Jet family — common type rating E170/E175** · represented in-sim by the model below · sim = X-Plane 11
**Version** v0.1 · **Updated** 2026-07-25 · **Status** Draft

> **Read-me:** Which add-on K Global **approves and has tested** to represent this ICAO type, and the quirks, constraints and limitations that matter in operation. Not an installation guide — setup is the pilot's responsibility. **No model here is yet formally approved by K Global — that is a management decision still open** 🟧 `[VERIFY]`. Flag legend 🟥 hard constraint · 🟧 limitation · 🟩 normal.

---

## 1. Approved & tested models

| Model (developer + product) | Sim / ver tested | Systems depth | Status |
|---|---|---|---|
| **X-Crafts E-Jets Family** (E170 unit) | X-Plane 11 / 12 | study-leaning | 🟧 Conditional — designated candidate; formal test-and-approve pass pending `[VERIFY]` |
| X-Plane 11 default fleet | X-Plane 11 | — | 🟥 Not recommended — XP11 ships **no** E-Jet of any generation |

*Status key: 🟩 Approved — tested, cleared for line use · 🟧 Conditional — usable with the noted limitations · 🟥 Not recommended — known blocker, avoid.*

**Honest position on the "approved model" gap 🟧 `[VERIFY]`:** as of this draft K Global has **not** run a formal in-house test-and-approve pass on the designated candidate, so nothing here is 🟩 Approved yet. The X-Crafts E-Jets Family bundle (X-Plane 11/12) is the only publicly available product that models the E170/E175/E190/E195 family as a matched set with the correct GE CF34-8E-series powerplant and EICAS-based flight deck, so it is carried as the designated candidate for all four Embraer types pending approval. The Intro §2 mapping line (`Sim model: not yet decided [VERIFY]`) resolves **here** once the model is tested and management confirms it — until then this file, the Checklist and the QRH are written to this candidate and every model-specific figure stays `[VERIFY]`.

## 2. Type ↔ model fidelity note 🟧

- The X-Crafts bundle sells the **E170 and E175 as distinct airframes** within the family package (each with its own fuselage length, systems set and V-speed data), not one model re-skinned — so choosing the E170 unit for this type is the correct fidelity path rather than a substitution. 🟩
- Engine representation is **GE CF34-8E-series**, matching the real E170 powerplant, so cruise burn/ceiling/FMS behaviour should track a future OFP reasonably closely once one is flown — but no K Global reference OFP exists yet for this type (Dispatch §3), so any burn comparison remains unverified 🟧.
- Cross-ref: **Intro §2** (real→SimBrief→sim mapping) and **Dispatch §2** (profile + fuel overrides).

## 3. Systems-depth caveats

- **Flight deck:** three-screen EFIS — PFD / MFD / **EICAS** (Engine Indication and Crew Alerting System) — with an **electronic/paperless checklist** presented on a cockpit display, reflecting the real E-Jet's "dark and quiet" cockpit philosophy (no illuminated buttons or aural nags under normal ops). Systems logic is presented through MFD synoptic pages (status, flight controls, hydraulics, fuel, electrical, ECS, anti-ice) with a green/white/amber convention for active/inactive/abnormal. 🟩
- **Depth:** engine, electrical, hydraulic and fuel logic are represented with enough fidelity that the Checklist and most QRH items can be trained against; **pneumatics/air-management logic is modelled at checklist-response level rather than full system simulation** — treat ECS/bleed QRH items as procedural training only, not a fault-injection test 🟧 `[VERIFY]`.
- **Navigation display:** the moving-map/NAV page range is limited compared with a full high-resolution FMS map — adequate for procedural flying, weaker for detailed situational awareness on complex arrivals 🟧.
- **General:** the model does not reproduce certified performance data. Do **not** describe installation here — pilots are assumed competent to install, configure and update their own add-on and navdata.

## 4. Quirks, constraints & limitations

| Area | Flag | Model | Detail / operational impact | Workaround |
|---|---|---|---|---|
| Electronic checklist | 🟩 | X-Crafts E170 | Paperless checklist on a cockpit display, consistent with the real E-Jet ECL concept | Use the on-screen checklist as the primary flow; this document remains the training/quick-reference version |
| Pneumatics / ECS depth | 🟧 | X-Crafts E170 | Air-management logic simplified vs a full bleed/pack simulation | Treat ECS/anti-ice QRH items as procedural training, not fault-injection-verified `[VERIFY]` |
| NAV display range | 🟧 | X-Crafts E170 | Reduced map range/resolution vs a full custom moving map | Cross-check routing against SimBrief OFP and charts, don't rely solely on the in-sim map |
| Autobrake positions | 🟩 | X-Crafts E170 | Real E-Jet 5-position autobrake (RTO/OFF/LO/MID/HI) represented | Select per landing performance requirement, same as the real type |
| Flight-control architecture | 🟩 | X-Crafts E170 | Fly-by-wire primary/secondary surfaces with cable-driven ailerons — matches the real E-Jet mixed architecture | No workaround needed; informs Checklist/QRH flight-control items |
| Navdata / AIRAC | 🟧 | X-Crafts E170 | FMS routing/procedures depend on the pilot's installed AIRAC cycle | Keep a current AIRAC cycle; mismatch causes discontinuities/missing SIDs-STARs |
| Perf realism | 🟧 | X-Crafts E170 | Modelled performance is approximate; not certified data | Use SimBrief OFP (Dispatch) as the planning authority, not the sim's own figures |

## 5. Constraints that affect dispatch or procedures 🟥

- **Approved-model decision is open 🟥 `[VERIFY]`.** Until K Global tests the candidate and management confirms it, the pack cannot go Verified and the Intro §2 sim line stays `[VERIFY]`. Priority: run the test pass on **X-Crafts E170 (XP11)**.
- **EDTO/ETOPS not applicable.** Unlike the mainline widebody fleet, the E70's regional network sits inside the standard 60-minute threshold by design (Dispatch §5) — no operator rule-time approval is needed for this type, and no sim-modelling gap exists on that point.
- **Electronic-checklist fidelity 🟧.** The in-sim checklist supports normal-ops flying but is not a certified reference; K Global's own Checklist/QRH remain the governing quick-reference documents for training purposes.
- **AIRAC/navdata dependency 🟧.** Short-haul regional sectors are less exposed than long-haul trunks, but SIDs/STARs at unfamiliar regional fields still require a current AIRAC cycle before dispatching a leg.
- **Common type-rating consistency 🟩.** Because the E70 and E75 share a real-world type rating, the X-Crafts family bundle's shared systems logic across both units keeps this pack and the E75 Sim-Model consistent — cockpit flows should read the same on both types, per Intro §2/§3.

---

## Sources & References
*Public URLs only. Private/OEM/add-on documents may inform content but must never be listed here.*

- X-Crafts — E-Jets Family for X-Plane (product page) — https://www.xcrafts.com/ejets-family
- Aerosoft Shop — X-Crafts Embraer E-Jets Family 2.0 XP — https://www.aerosoft.com/en/shop/flight/x-plane/x-plane-11/aircraft/4414/x-crafts-embraer-e-jets-family-2.0-xp
- Stormbirds — X-Crafts releases E-Jets Family for X-Plane 11 and 12 — https://stormbirds.blog/2023/05/10/x-crafts-releases-e-jets-family-for-x-plane-11-and-12/
- Stormbirds — X-Crafts E-Jets Family review — https://stormbirds.blog/2025/11/30/short-haul-style-x-crafts-e-jets-family-review/
- SKYbrary — Aircraft type reference — https://skybrary.aero/
- Wikipedia — Embraer E-Jet family — https://en.wikipedia.org/wiki/Embraer_E-Jet_family

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-25 | Initial draft — X-Crafts E-Jets Family (E170 unit) designated as candidate model per management direction; approval still open `[VERIFY]`; EICAS/electronic-checklist, systems-depth and navdata caveats documented from public product information. |
