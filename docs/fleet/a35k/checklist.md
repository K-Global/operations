<!--
================================================================================
  K Global — AIRFRAME PACK · CHECKLIST  ·  A35K Airbus A350-1000
  Curated normal checklist, tailored to the approved sim model.
  FLAG LEGEND  🟥 memory/critical item   🟧 caution/model-dependent   🟩 normal
================================================================================
-->

# A35K — Airbus A350-1000 · Normal Checklist

**A35K / A350 family** · flown as FlightFactor A350 XWB Advanced (-1000 variant lead / -900 shell fallback) 🟧 `[VERIFY — model/variant]` · sim = X-Plane 11
**Version** v0.1 · **Updated** 2026-07-25 · **Status** Draft

> **Read-me:** K Global normal-ops flow for X-Plane 11. **The aircraft's own checklist/ECAM is authoritative** — where the sim model differs from the real jet, the 🟧 note says so. This is a cockpit quick-reference, not a certified checklist, and re-expressed in K Global's own words (no verbatim OEM text). Flag legend 🟥 memory/critical · 🟧 model-dependent · 🟩 normal.

---

*Format: **CHALLENGE …… RESPONSE**. Generic A350 FBW flow (shares the Airbus normal-ops philosophy with the A339, with A350-specific items noted). Model-dependent items are flagged 🟧. The A350-1000 procedures are common with the -900; the differences are physical/performance, not flow — verify each item against the flown variant before line use `[VERIFY]`.*

## Preflight / Cockpit prep
- Documents / OFP / navlog …… ABOARD, CHECKED
- Batteries (main 1+2 / emergency 1+2, Li-Ion) …… ON 🟧 (BAT EMER modelled — verify on flown build)
- External power / APU …… AS REQUIRED, POWER AVAIL
- ADIRS (3) / ADR (3) / IR (3) …… NAV / ON
- ECAM / cockpit displays …… ON, AUTO MODE CHECKED
- ECAM status / MEL …… REVIEWED, NO BLOCKING FAULT
- APU / APU FIRE + ENG FIRE test …… PERFORMED, AGENTS OK
- Flight control computers (PRIM / SEC) …… ALL ON 🟧
- Fuel quantity / distribution …… CHECKED vs OFP
- Hydraulics (Green / Yellow — two systems) …… PRESSURISED / ELEC PUMPS AS REQUIRED 🟧
- Flight controls (if elec avail) …… CHECKED FULL & FREE
- FMS init (co-route, F-PLN, PERF, ZFW/ZFWCG, fuel) …… SET & CROSS-CHECKED
- Takeoff data (V1/VR/V2, FLEX/TOGA, THS, FLAPS) …… ENTERED, CROSS-CHECKED
- Baro / altimeters …… SET
- Departure brief …… COMPLETE

## Before start
- Cockpit prep …… COMPLETE
- Signs (seatbelts / no-smoking) …… ON / AUTO
- ATC clearance …… OBTAINED
- Doors / cargo …… CLOSED, ECAM DOORS PAGE CLEAR
- Fuel pumps (main / centre feed) …… ON / AUTO
- Beacon …… ON
- Thrust levers …… IDLE
- Parking brake …… SET
- Pushback / area …… CLEAR, CLEARANCE RECEIVED

## After start
- APU bleed (for start) …… AS REQUIRED
- Engine start (ENG start selector → START, master 1 then 2) …… STARTED, PARAMETERS NORMAL
- ENG start selector …… NORM
- Engine bleeds …… ON; APU bleed …… OFF, APU MASTER …… OFF (as required)
- Anti-ice …… AS REQUIRED
- Ground spoilers …… ARM
- Rudder trim / pitch trim (THS) …… ZERO / SET per takeoff data
- Flaps / slats …… SET FOR TAKEOFF (CONF per perf)
- ECAM status …… CHECKED, NO ABNORMAL
- Ground equipment / GPU …… DISCONNECTED, CLEAR

## Before taxi
- Flight controls …… CHECKED (full travel, ECAM F/CTL page) 🟧 (ECAM check depth model-dependent)
- Flaps / slats …… CONFIRMED SET FOR TAKEOFF
- Pitch trim (THS) …… CONFIRMED per takeoff data
- Autobrake …… RTO (or as required)
- Radar / PredWS …… ON / AUTO 🟧 (WXR degraded on XP11)
- ECAM T.O memo …… REVIEWED, NO BLUE/AMBER
- Nose / taxi lights …… AS REQUIRED

## Before takeoff 🟥
- **Cabin …… SECURE**
- **Flaps / slats …… CONFIRMED per takeoff data**
- **THS / trim …… CONFIRMED SET**
- **Flight controls …… FREE & CORRECT**
- **Takeoff config (T.O memo all green) …… CONFIRMED**
- **Transponder / TCAS …… TA/RA, ON**
- **Packs …… AS REQUIRED per takeoff perf**
- **Runway / heading …… CONFIRMED, LINED UP**
- **Landing lights / strobes …… ON**
- **Autobrake / thrust mode (FLEX/TOGA) …… CONFIRMED**

## After takeoff / Climb
- Landing gear …… UP, DOORS CLOSED
- Flaps / slats …… RETRACTED ON SCHEDULE
- Ground spoilers …… DISARMED
- Climb thrust / autoflight …… SET, ENGAGED
- APU bleed / APU master …… OFF (if not already)
- Packs / bleed …… ON
- Baro → STD (at transition) …… SET
- Landing lights …… OFF ABOVE 10,000 / AS REQUIRED

## Cruise
- Cruise ALT / MACH / CI …… SET per OFP (M0.85, CI per OM E)
- ECAM memo / system pages …… REVIEWED, NORMAL
- Fuel …… MONITORED vs OFP, X-FEED CHECKED
- ETOPS/EDTO entry point …… CONFIRMED, en-route alt live 🟧 (dispatch discipline, not sim-modelled)
- Seatbelt signs …… AS REQUIRED
- Step climbs …… AS PLANNED

## Descent / Approach
- Descent / approach brief …… COMPLETE
- Baro (at transition level) …… SET
- Landing perf / VAPP / CONF …… CHECKED, SET
- Approach phase / managed speed …… ACTIVE, CHECKED
- Fuel …… SUFFICIENT, RESERVES CONFIRMED
- Signs …… ON
- ECAM / autoflight …… SET FOR APPROACH
- Minima …… SET

## Landing 🟥
- **Cabin …… SECURE**
- **Landing gear …… DOWN, 3 GREEN**
- **Flaps …… FULL / CONF per perf**
- **Ground spoilers …… ARMED**
- **Autobrake …… SET AS REQUIRED**
- **ECAM LDG memo …… ALL GREEN**
- **Go-around altitude / thrust …… SET**

## After landing
- Ground spoilers / reversers …… STOWED
- Flaps …… RETRACTED (ZERO)
- Autobrake …… DISARMED
- APU …… START AS REQUIRED
- Radar / PredWS …… OFF
- Transponder …… AS REQUIRED (STBY/ground)
- Landing / strobe lights …… AS REQUIRED
- Taxi / runway-turnoff lights …… AS REQUIRED

## Shutdown / Secure
- Parking brake …… SET (or chocks in)
- Engines (masters 1+2) …… OFF
- Seatbelt signs …… OFF
- Beacon …… OFF
- Fuel pumps / transfer …… OFF (as required)
- External power / APU bleed …… AS REQUIRED
- ADIRS …… OFF
- ECAM status / doors …… CHECKED
- Batteries (main / emergency) …… OFF (if last leg)
- Aircraft …… SECURED (per secure-cockpit flow if last leg)

---

## Sources & References
*Public URLs only. Private/OEM/add-on documents may inform content but must never be listed here.*

- SKYbrary — Airbus A350-1000 (A35K) — https://skybrary.aero/aircraft/a35k
- FlightFactor — A350 XWB Advanced product page (systems scope) — https://store.x-plane.org/Airbus-A350-XWB-Advanced_p_838.html
- Airbus — A350-1000 type page — https://www.aircraft.airbus.com/en/aircraft/a350/a350-1000

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-25 | Initial draft — generic A350 FBW normal flow re-expressed (A350 items: three ADIRS/ADR/IR, PRIM/SEC computers, two-system hydraulics, Li-Ion main+emergency batteries); Before-takeoff/Landing marked 🟥; model/variant-dependent items 🟧 |
