<!--
================================================================================
  K Global — AIRFRAME PACK · CHECKLIST  ·  A359 Airbus A350-900
  Curated normal checklist, tailored to the approved sim model.
  FLAG LEGEND  🟥 memory/critical item   🟧 caution/model-dependent   🟩 normal
================================================================================
-->

# A359 — Airbus A350-900 · Normal Checklist

**A359 / A350 family** · flown as FlightFactor A350 🟧 `[VERIFY — model]` · sim = X-Plane 11
**Version** v0.1 · **Updated** 2026-07-25 · **Status** Draft

> **Read-me:** K Global normal-ops flow for X-Plane 11. **The aircraft's own checklist/ECAM is authoritative** — where the sim model differs from the real jet, the 🟧 note says so. This is a cockpit quick-reference, not a certified checklist, and re-expressed in K Global's own words (no verbatim OEM text). Flag legend 🟥 memory/critical · 🟧 model-dependent · 🟩 normal.

---

*Format: **CHALLENGE …… RESPONSE**. Generic A350 FBW flow, adapted to the FlightFactor A350's actual switch layout. A350 specifics vs the A330 family: **six-display CDS + ISIS**, **emergency batteries (BAT EMER)**, **ADR/ADIRS 1·2·3**, the **two-circuit (Green/Yellow) hydraulic system with electric backup pumps**, **RAT**, and **trim-tank fuel** for CG. Model-dependent items are flagged 🟧 (mainly where the FlightFactor FMS/failure depth differs from the real jet). Verify each item against the flown model before line use `[VERIFY]`.*

## Preflight / Cockpit prep
- Documents / OFP / navlog …… ABOARD, CHECKED
- Gear pins / covers / walkaround …… STOWED / NORMAL 🟧 (not fully modelled)
- Batteries (BAT 1+2) and **emergency batteries (BAT EMER 1+2)** …… ON
- External power / APU …… AS REQUIRED, POWER AVAIL
- ADIRS / ADR / IR (1·2·3) …… NAV / ON
- ECAM / CDS (six displays) …… ON, AUTO MODE CHECKED
- Avionics/cabin data feeds, cooling, cabin fans …… ON 🟧 (some items model-abstracted)
- APU (master, start) …… AS REQUIRED, AVAIL
- APU + engine FIRE TEST …… COMPLETE, AGENT LIGHTS OUT
- Fuel pumps (main / centre-feed / transfer) …… SET, QUANTITY vs OFP
- Gear lever …… DOWN · Anti-skid …… ON · Standby instruments (ISIS) …… ON
- Flight controls (if elec avail) …… CHECKED FULL & FREE
- FMGS/FMS init (co-route, F-PLN, PERF, ZFW/ZFWCG, fuel) …… SET & CROSS-CHECKED 🟧 (FMS simpler than real — basic SID/STAR, hand-check route)
- Takeoff data (V1/VR/V2, FLEX/TOGA, THS, FLAPS) …… ENTERED, CROSS-CHECKED
- Baro / altimeters (both) …… SET
- Departure brief …… COMPLETE

## Before start
- Cockpit prep …… COMPLETE
- Signs (seatbelts / no-smoking) …… ON / AUTO
- ATC clearance …… OBTAINED
- Fuel quantity / final loadsheet / ZFW-ZFWCG in FMS …… CHECKED
- Doors / cargo …… CLOSED, ECAM DOORS PAGE CLEAR
- Beacon …… ON
- Thrust levers …… IDLE · Reverse levers …… STOWED
- Parking brake …… SET
- External power …… OFF (before pushback) · Pushback / area …… CLEAR, CLEARANCE RECEIVED

## After start
- HYD engine pumps (Green + Yellow) …… ON
- APU bleed (for start) …… AS REQUIRED
- Engine start (ENG START selector → START, master 1 then 2) …… STARTED, ENG PAGE PARAMETERS NORMAL
- ENG START selector …… NORM
- Engine bleeds 1+2 …… ON · Packs / hot air …… ON · APU bleed …… OFF · APU master …… OFF, APU GEN OFF
- Anti-ice …… AS REQUIRED
- Ground spoilers …… ARM · Rudder trim …… ZERO · Flaps …… SET FOR TAKEOFF · Pitch trim (THS) …… CHECKED / SET
- ECAM status …… CHECKED, NO ABNORMAL
- Ground equipment / GPU …… DISCONNECTED, CLEAR

## Before taxi
- Flight controls …… CHECKED (full travel, F/CTL page) 🟧 (ECAM check depth model-limited)
- Flaps / slats …… SET FOR TAKEOFF (CONF per perf)
- Pitch trim (THS) …… SET TO GREEN BAND per takeoff data
- Autobrake …… RTO (or MAX per perf)
- Radar / PredWS / SURV systems …… ON / AUTO 🟧 (WXR degraded on XP11)
- Nose / runway-turnoff lights …… AS REQUIRED
- ECAM T.O memo …… REVIEWED, NO BLUE/AMBER
- Cabin …… ADVISED, SECURE

## Before takeoff 🟥
- **Cabin …… SECURE**
- **Flaps / slats …… CONFIRMED per takeoff data**
- **THS / trim …… CONFIRMED SET (green band)**
- **Flight controls …… FREE & CORRECT**
- **Packs …… AS REQUIRED · Taxi light …… OFF**
- **Takeoff config (T.O memo all green) …… CONFIRMED**
- **Transponder / TCAS …… TA/RA, ON**
- **Runway / heading …… CONFIRMED, LINED UP**
- **Strobes / landing lights …… ON**
- **Autobrake / thrust mode (FLEX/TOGA) …… CONFIRMED**

## After takeoff / Climb
- Landing gear …… UP
- Flaps / slats …… RETRACTED ON SCHEDULE
- Ground spoilers …… DISARMED
- Packs …… ON · APU bleed …… OFF · APU master …… OFF
- Climb thrust / autoflight …… SET, ENGAGED
- Anti-ice …… AS REQUIRED
- Baro → STD (at transition) …… SET
- Landing lights …… OFF ABOVE 10,000 / AS REQUIRED

## Cruise
- Cruise altitude / MACH / CI …… SET per OFP (M.85 typical)
- ECAM memo / system pages …… REVIEWED, NORMAL
- Fuel …… MONITORED vs OFP, TRIM-TANK / TRANSFER CHECKED 🟧 (trim-tank logic model-dependent)
- ETOPS/EDTO entry point …… CONFIRMED, en-route alt live 🟧 (dispatch discipline, not sim-modelled)
- Seatbelt sign …… AS REQUIRED
- Step climbs …… AS PLANNED

## Descent / Approach
- Descent / approach brief …… COMPLETE
- Baro (at transition level) …… SET
- Landing perf / VAPP / CONF …… CHECKED, SET
- Fuel …… SUFFICIENT, RESERVES CONFIRMED
- Approach phase / managed speed …… CHECKED (positioning monitored)
- Signs …… ON
- ECAM / autoflight …… SET FOR APPROACH
- Minima …… SET

## Landing 🟥
- **Cabin …… SECURE**
- **APP p/b (FCU) / approach capability …… SELECTED, FMA CHECKED**
- **Landing gear …… DOWN, 3 GREEN**
- **Flaps …… FULL / CONF per perf**
- **Ground spoilers …… ARMED**
- **Autobrake …… SET AS REQUIRED**
- **Landing lights …… ON**
- **ECAM LDG memo …… ALL GREEN**
- **Go-around altitude / thrust …… SET**

## After landing
- Ground spoilers …… DISARMED · Reversers …… STOWED
- Flaps …… RETRACTED (ZERO)
- Autobrake …… DISARMED
- APU …… START AS REQUIRED (master ON, bleed ON when avail)
- ENG START selector …… NORM
- Anti-ice …… OFF
- Radar / PredWS …… OFF
- Transponder …… AS REQUIRED (STBY/ground)
- Strobe …… OFF · Nose/taxi + runway-turnoff lights …… AS REQUIRED

## Shutdown / Secure
- Parking brake …… SET (or chocks in)
- Engines (masters 1+2) …… OFF
- Seatbelt / no-smoking signs …… OFF
- Beacon …… OFF
- Fuel pumps (main / centre / transfer) …… OFF (as required)
- Crossfeed …… OFF
- External power / APU …… AS REQUIRED
- Oxygen (crew) …… OFF
- ADIRS (1·2·3) …… OFF
- ECAM status / doors …… CHECKED
- Batteries (BAT 1+2, BAT EMER 1+2) …… OFF (if last leg / full secure)
- Aircraft …… SECURED (per secure-cockpit flow if last leg)

---

## Sources & References
*Public URLs only. Private/OEM/add-on documents may inform content but must never be listed here.*

- SKYbrary — Airbus A350-900 (A359) — https://skybrary.aero/aircraft/a359
- FlightFactor — A350 product page (systems scope) — https://store.x-plane.org/Airbus-A350-XWB-Advanced_p_268.html
- Airbus — A350-900 type page — https://www.aircraft.airbus.com/en/aircraft/a350/a350-900

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-25 | Initial draft — generic A350 FBW normal flow re-expressed and adapted to the FlightFactor A350 layout (six-display CDS, BAT EMER, ADR 1·2·3, Green/Yellow hydraulics, RAT, trim-tank fuel); Before-takeoff/Landing marked 🟥; FMS/model-dependent items 🟧. |
