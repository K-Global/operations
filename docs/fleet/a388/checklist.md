<!--
================================================================================
  K Global — AIRFRAME PACK · CHECKLIST  ·  A388 Airbus A380-800
  Curated normal checklist, tailored to the approved sim model.
  FLAG LEGEND  🟥 memory/critical item   🟧 caution/model-dependent   🟩 normal
================================================================================
-->

# A388 — Airbus A380-800 · Normal Checklist

**A388 / A380 family** · flown as Peters Aircraft A380-800 (lead by default) / riviere A380-800 (freeware alternative) 🟧 `[VERIFY — model]` · sim = X-Plane 11
**Version** v0.1 · **Updated** 2026-07-25 · **Status** Draft

> **Read-me:** K Global normal-ops flow for X-Plane 11. **The aircraft's own checklist/ECAM is authoritative** — where the sim model differs from the real jet, the 🟧 note says so. This is a cockpit quick-reference, not a certified checklist, and re-expressed in K Global's own words (no verbatim OEM or add-on text). Flag legend 🟥 memory/critical · 🟧 model-dependent · 🟩 normal.

---

*Format: **CHALLENGE …… RESPONSE**. Generic Airbus FBW flow adapted for **four engines** and the A380's twin-deck size. Model-dependent items are flagged 🟧 (neither current candidate is a systems-authentic FBW study aircraft — see Sim-Model §2–3). Verify each item against the flown model before line use `[VERIFY]`.*

## Preflight / Cockpit prep
- Documents / OFP / navlog …… ABOARD, CHECKED
- Circuit breakers / gear pins / covers …… STOWED / REMOVED 🟧 (not fully modelled on either candidate)
- Batteries (four) …… ON `[VERIFY]`
- External power / APU …… AS REQUIRED, POWER AVAIL
- ADIRS …… NAV
- ECAM status / MEL …… REVIEWED, NO BLOCKING FAULT
- Fuel quantity / distribution (twin-deck, multi-tank) …… CHECKED vs OFP
- Flight controls (2 hydraulic + 2 electric/EHA power sources) …… CHECKED FULL & FREE `[VERIFY]`
- FMGS init (co-route, F-PLN, PERF, ZFW/ZFWCG, fuel) …… SET & CROSS-CHECKED 🟧 (FMC reliability caveat, Peters Aircraft candidate)
- Takeoff data (V1/VR/V2, FLEX/TOGA, THS, FLAPS) …… ENTERED, CROSS-CHECKED
- Baro / altimeters …… SET
- Departure brief (incl. Code F taxi routing) …… COMPLETE

## Before start
- Cockpit prep …… COMPLETE
- Signs (seatbelts / no-smoking) …… ON / AUTO
- ATC clearance …… OBTAINED
- Doors / cargo (twin-deck, multiple per side) …… CLOSED, ECAM DOORS PAGE CLEAR
- Fuel pumps …… ON
- Beacon …… ON
- Thrust levers (four) …… IDLE
- Parking brake …… SET
- Pushback / area (Code F clearance envelope) …… CLEAR, CLEARANCE RECEIVED

## After start
- APU bleed (for start) …… AS REQUIRED
- Engine start — **sequential, four engines** (typically 4-3-2-1 or per type procedure) …… STARTED, PARAMETERS NORMAL ALL FOUR `[VERIFY]`
- Ground crew clearance …… SEEN/CONFIRMED
- Anti-ice …… AS REQUIRED
- Flight controls (F/CTL ECAM page) …… CHECKED
- Rudder trim …… NEUTRAL
- Pitch trim (THS) …… CHECKED
- ECAM status …… CHECKED, NO ABNORMAL
- Ground equipment / GPU …… DISCONNECTED, CLEAR

## Before taxi
- Flight controls …… CHECKED (full travel, ECAM F/CTL page) 🟧 (ECAM check depth limited on both candidates)
- Flaps / slats …… SET FOR TAKEOFF (CONF per perf)
- Pitch trim (THS) …… SET TO GREEN BAND per takeoff data
- Autobrake …… AS REQUIRED (RTO/MAX)
- Radar / PredWS …… ON / AUTO 🟧
- ECAM T.O memo …… REVIEWED, NO BLUE/AMBER
- Ground spoilers armed / signs / cabin …… CHECKED
- Packs (multi-pack, four-engine architecture) …… 1+2 (+3+4 as fitted) SET `[VERIFY]`

## Before takeoff 🟥
- **Cabin …… SECURE, CABIN CREW ADVISED**
- **Flaps / slats …… CONFIRMED per takeoff data**
- **THS / trim …… CONFIRMED SET**
- **Flight controls …… FREE & CORRECT**
- **Takeoff config (T.O memo all green) …… CONFIRMED**
- **Transponder / TCAS / squawk …… TA/RA, SET**
- **Runway / heading …… CONFIRMED, LINED UP**
- **Landing lights / strobes …… ON**
- **Autobrake / thrust mode (FLEX/TOGA) …… CONFIRMED**

## After takeoff / Climb
- Landing gear …… UP, DOORS CLOSED
- Flaps / slats …… RETRACTED ON SCHEDULE
- Ground spoilers …… DISARMED
- Climb thrust (all four) / autoflight …… SET, ENGAGED, SYMMETRIC 🟩 (engine-out asymmetry note: see QRH Ch 2 — milder on a quad than a twin)
- Packs …… ON
- APU …… OFF (per flow, once on packs/gens)
- Baro → STD (at transition) …… SET
- Landing lights …… OFF ABOVE 10,000 / AS REQUIRED

## Cruise
- Altitude / MACH / CI …… SET per OFP (typical M0.85, max M0.89 🟧 `[VERIFY]`)
- Fuel …… MONITORED vs OFP across twin-deck tank system, X-FEED CHECKED
- EDTO adequate-aerodrome point …… CONFIRMED en-route (quad — no diversion-time rule; adequate-aerodrome concept still applies) 🟩 (dispatch discipline, not sim-modelled)
- Systems / ECAM …… NORMAL
- Step climbs …… AS PLANNED

## Descent / Approach
- Descent / approach brief (incl. Code F stand/taxi confirmation at destination) …… COMPLETE
- Baro (at transition level) …… SET
- Landing perf / VAPP / CONF …… CHECKED, SET
- Fuel …… SUFFICIENT, RESERVES CONFIRMED
- Signs …… ON
- ECAM / autoflight …… SET FOR APPROACH
- Minima …… SET

## Landing 🟥
- **Cabin …… SECURE, CABIN CREW ADVISED**
- **Landing gear …… DOWN, GREEN (multi-bogie main gear)**
- **Flaps …… FULL / CONF per perf**
- **Ground spoilers …… ARMED**
- **Autobrake …… SET AS REQUIRED**
- **ECAM LDG memo …… ALL GREEN**
- **Go-around altitude / thrust (all four) …… SET**

## After landing
- Ground spoilers / reversers (as fitted) …… STOWED
- Flaps …… RETRACTED
- Autobrake …… DISARMED
- APU …… START AS REQUIRED
- Radar / PredWS …… OFF
- Transponder …… AS REQUIRED (STBY/ground)
- Landing / strobe lights …… AS REQUIRED
- Taxi (Code F routing, wingtip/wheelbase clearance) …… CONFIRMED

## Shutdown / Secure
- Parking brake …… SET (or chocks in)
- Doors …… DISARMED
- Beacon …… OFF
- APU bleed …… ON (as required)
- Engines (four) …… OFF
- Fuel pumps …… OFF (as required)
- Seatbelt signs …… OFF
- ADIRS …… OFF
- Oxygen …… OFF
- APU bleed …… OFF
- Emergency exit lights …… OFF
- Signs …… OFF
- APU …… DISARMED (as required)
- Batteries (four) …… OFF `[VERIFY]`
- ECAM status / doors …… CHECKED
- Aircraft …… SECURED (per secure-cockpit flow if last leg)

---

## Sources & References
*Public URLs only. Private/OEM/add-on documents may inform content but must never be listed here.*

- SKYbrary — Airbus A380-800 (A388) — https://skybrary.aero/aircraft/a388
- Airbus — A380 type page — https://www.aircraft.airbus.com/en/aircraft/a380
- EASA — TCDS EASA.A.110 Airbus A380 — https://www.easa.europa.eu/en/document-library/type-certificates
- X-Plane.Org Store — Peters Aircraft (systems scope reference) — https://store.x-plane.org/Peters-Aircraft_bymfg_47-0-1.html

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-25 | Initial draft — generic Airbus FBW normal flow re-expressed and adapted for four engines/twin-deck size; Before-takeoff/Landing marked 🟥; model-dependent items 🟧 (neither current candidate is systems-authentic — see Sim-Model); Code F taxi/stand confirmation woven into departure/arrival briefs. |
