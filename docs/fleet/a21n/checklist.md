<!--
================================================================================
  K Global — AIRFRAME PACK · CHECKLIST  ·  A21N Airbus A321neo family
  Curated normal checklist, tailored to the approved sim model.
  FLAG LEGEND  🟥 memory/critical item   🟧 caution/model-dependent   🟩 normal
================================================================================
-->

# A21N — Airbus A321neo family · Normal Checklist

**A21N / A320 family — common type rating A319/A320/A321** · flown as ToLiss A321 (base + NEO expansion) 🟧 `[VERIFY — model]` · sim = X-Plane 11
**Version** v0.1 · **Updated** 2026-07-25 · **Status** Draft

> **Read-me:** K Global normal-ops flow for X-Plane 11, common across the A320 family and applicable to all three A21N sub-variants (neo/LR/XLR). **The aircraft's own checklist/ECAM is authoritative** — where the sim model differs from the real jet, the 🟧 note says so. This is a cockpit quick-reference, not a certified checklist, and re-expressed in K Global's own words (no verbatim OEM text). Flag legend 🟥 memory/critical · 🟧 model-dependent · 🟩 normal.

---

*Format: **CHALLENGE …… RESPONSE**. Generic A320-family FBW flow, shared across A319/A320/A321. Sub-variant-specific items (LR/XLR fuel system) are called out separately. Model-dependent items are flagged 🟧. Verify each item against the flown model and installed expansion before line use `[VERIFY]`.*

## Preflight / Cockpit prep
- Documents / OFP / navlog …… ABOARD, CHECKED
- Aircraft variant (neo / LR / XLR) …… CONFIRMED vs VAMSYS tail assignment 🟥 (drives fuel-system and weight-envelope logic — Sim-Model §2)
- Circuit breakers / gear pins / covers …… STOWED / NORMAL
- Batteries …… ON
- External power / APU …… AS REQUIRED, POWER AVAIL
- ADIRS (3) …… NAV
- ECAM status / MEL …… REVIEWED, NO BLOCKING FAULT
- Fuel quantity / distribution …… CHECKED vs OFP; **LR/XLR: rear-centre-tank (RCT) quantity and transfer status …… CHECKED** 🟧 (XLR/LR-specific — see §Fuel note below)
- Flight controls (if elec avail) …… CHECKED FULL & FREE
- FMGS init (co-route, F-PLN, PERF, ZFW/ZFWCG, fuel) …… SET & CROSS-CHECKED
- Takeoff data (V1/VR/V2, FLEX/TOGA, THS, FLAP CONF) …… ENTERED, CROSS-CHECKED
- Baro / altimeters (both sides) …… SET
- Departure brief …… CONFIRMED

## Before start
- Cockpit prep …… COMPLETE
- Signs (seatbelts / no-smoking) …… ON / AUTO
- ATC clearance …… OBTAINED
- Doors / cargo …… CLOSED, ECAM DOORS PAGE CLEAR
- Fuel pumps …… ON
- Beacon …… ON
- Mobile devices (both) …… OFF
- One-engine taxi (departure) …… CONSIDER 🟧 (fuel-saving technique; not applicable at all stands — brief before use)
- Thrust levers …… IDLE
- Parking brake …… SET
- Pushback / area …… CLEAR, CLEARANCE RECEIVED

## After start
- APU bleed (for start) …… AS REQUIRED
- Engine start (ENG mode selector → IGN/START, master 1+2) …… STARTED, PARAMETERS NORMAL — **PW1100G: allow the documented cooling cycle before/after start** 🟧 (engine-type-dependent, model-simulated)
- ENG mode selector …… NORM
- Anti-ice …… AS REQUIRED
- ECAM status …… CHECKED
- Pitch trim …… SET
- Rudder trim …… ZERO
- Ground equipment / GPU …… DISCONNECTED, CLEAR

## Before taxi / Before takeoff
- Flight controls (both) …… CHECKED (full travel, ECAM F/CTL page)
- Flight instruments (both) …… CHECKED
- Departure briefing …… CONFIRMED
- Flap setting (both) …… CONFIRMED per takeoff data
- V1 / VR / V2 / FLEX temp (both) …… SET, CROSS-CHECKED
- Pitch trim (THS) …… SET TO GREEN BAND per takeoff data / CG
- ECAM T.O memo …… REVIEWED, NO BLUE/AMBER
- Autobrake (RTO/MAX) …… SET
- Signs …… ON
- Cabin …… READY (below the line, per SOP timing)
- Ground spoilers …… ARMED
- Seat belts …… ON
- Flaps …… CONFIRMED TAKEOFF POSITION
- Takeoff config (T.O CONFIG NORM / T.O memo all green) …… CONFIRMED
- Takeoff runway (both) …… CONFIRM, ADVISED
- Transponder / TCAS …… TA or TA/RA, AS REQUIRED
- Weather / anti-ice as required (consider heavy rain, cold-weather items per season) …… AS RQRD

## Before takeoff 🟥
- **Cabin …… SECURE**
- **Flaps / slats …… CONFIRMED per takeoff data**
- **THS / trim …… CONFIRMED SET**
- **Flight controls …… FREE & CORRECT**
- **Takeoff config (T.O memo all green) …… CONFIRMED**
- **Transponder / TCAS …… TA/RA, ON**
- **Runway / heading …… CONFIRMED, LINED UP**
- **Autobrake / thrust mode (FLEX/TOGA) …… CONFIRMED**

## After takeoff / Climb
- Landing gear …… UP, DOORS CLOSED
- Flaps / slats …… RETRACTED ON SCHEDULE
- Ground spoilers …… DISARMED
- Climb thrust / autoflight …… SET, ENGAGED
- Packs / bleed …… ON
- Baro → STD (at transition) …… SET
- One-engine taxi (departure only) …… N/A once airborne

## Cruise
- Altitude / MACH / CI …… SET per OFP
- Fuel …… MONITORED vs OFP, X-FEED CHECKED; **LR/XLR: RCT transfer sequence …… MONITORED** 🟧 (confirm centre-tank feed transfers correctly; do not manually intervene ahead of ECAM)
- ETOPS/EDTO entry point …… CONFIRMED, en-route alt live 🟧 (dispatch discipline, not sim-modelled)
- Systems / ECAM …… NORMAL
- Turbulence speed / altitude adjustment …… APPLIED AS BRIEFED 🟧 (type-specific speed schedule; confirm vs current QRH figure `[VERIFY]`)

## Descent / Approach
- Approach briefing …… CONFIRMED
- Baro (both, at transition level) …… SET
- Minimums (both) …… SET
- Landing distance …… CONFIRMED
- ECAM status …… CHECKED
- Seat belts …… AS REQUIRED
- Fuel …… SUFFICIENT, RESERVES CONFIRMED; RCT (LR/XLR) …… CONFIRMED EMPTY/TRANSFERRED per procedure 🟧
- One-engine taxi (arrival) …… CONSIDER 🟧 (post-landing technique, brief before use)
- Signs …… ON
- Landing gear …… DOWN, 3 GREEN (call at gear-down point)
- Cabin …… READY (<1 as applicable)
- Spoilers …… ARM
- Flaps …… SET

## Landing 🟥
- **Cabin …… SECURE**
- **Landing gear …… DOWN, 3 GREEN**
- **Flaps …… SET per landing data**
- **Ground spoilers …… ARMED**
- **Autobrake …… SET AS REQUIRED**
- **ECAM LDG memo …… ALL GREEN**
- **Go-around altitude / thrust …… SET**

## After landing
- Flaps …… RETRACTED
- Autobrake …… DISARMED
- APU …… AS REQUIRED
- Radar …… OFF/STBY
- Predictive windshear system …… OFF
- One-engine taxi (arrival) …… APPLY IF BRIEFED, not <3 min after landing 🟧
- Pack 2 …… AS REQUIRED

## Shutdown / Parking
- Elec pump …… OFF
- APU bleed …… AS REQUIRED
- Engines …… OFF
- External lights …… AS REQUIRED

## Securing the aircraft
- Fuel pumps …… OFF
- Parking brake and chocks …… AS REQUIRED
- Company mobiles …… ON
- ADIRS …… OFF
- Oxygen …… OFF
- APU bleed …… OFF
- Emergency exit lights …… AS REQUIRED
- Signs / no-smoking …… OFF
- APU and batteries …… AS REQUIRED, OFF LAST
- Brake temperature …… CHECKED (consider cooling requirement)

---

## Sub-variant note — LR/XLR fuel system 🟧
The LR and XLR carry additional fuel capacity via extra/rear-centre tank(s) beyond the standard neo wing/centre-tank fit — physically the same airframe and flight-deck flow, but with an added tank group that feeds automatically into the main system per the aircraft's own fuel logic. The checklist items above call out the two places this matters operationally: the **preflight fuel check** (confirm rear-centre-tank quantity/status matches the OFP for the LR/XLR sub-variant actually assigned) and **cruise/descent monitoring** (let the automatic transfer sequence run; a stuck or partial transfer shows on the fuel ECAM page and is a QRH item, not a checklist item — see QRH Ch 6). Never manually force a transfer ahead of ECAM guidance. Confirm the in-model sub-variant selection matches the tail before relying on any of this (Sim-Model §2).

---

## Sources & References
*Public URLs only. Private/OEM/add-on documents may inform content but must never be listed here.*

- SKYbrary — Airbus A321 (A321) — https://skybrary.aero/aircraft/a321
- Airbus — A321neo type page — https://www.aircraft.airbus.com/en/aircraft/a320-the-most-successful-aircraft-family-ever/a321neo
- Airbus — A321XLR type page — https://www.aircraft.airbus.com/en/aircraft/a320-the-most-successful-aircraft-family-ever/a321xlr
- X-Plane.Org Store — Airbus A321 by ToLiss — https://store.x-plane.org/Airbus-A321-by-Toliss_p_1174.html
- X-Plane.Org Store — A321-NEO add-on to the ToLiss Airbus A321 — https://store.x-plane.org/A321-NEO-ADD-ON-to-the-ToLiss-Airbus-A321_p_1351.html

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-25 | Initial draft — generic A320-family FBW normal flow re-expressed; Before-takeoff/Landing marked 🟥; LR/XLR rear-centre-tank fuel-check items added; model-dependent items 🟧 |
