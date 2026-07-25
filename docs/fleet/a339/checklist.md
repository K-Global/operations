<!--
================================================================================
  K Global — AIRFRAME PACK · CHECKLIST  ·  A339 Airbus A330-900neo
  Curated normal checklist, tailored to the approved sim model.
  FLAG LEGEND  🟥 memory/critical item   🟧 caution/model-dependent   🟩 normal
================================================================================
-->

# A339 — Airbus A330-900neo · Normal Checklist

**A339 / A330 family** · flown as ToLiss A339 (lead) / JARDesign JD330 (fallback) 🟧 `[VERIFY — model]` · sim = X-Plane 11
**Version** v0.1 · **Updated** 2026-07-25 · **Status** Draft

> **Read-me:** K Global normal-ops flow for X-Plane 11. **The aircraft's own checklist/ECAM is authoritative** — where the sim model differs from the real jet, the 🟧 note says so. This is a cockpit quick-reference, not a certified checklist, and re-expressed in K Global's own words (no verbatim OEM text). Flag legend 🟥 memory/critical · 🟧 model-dependent · 🟩 normal.

---

*Format: **CHALLENGE …… RESPONSE**. Generic A330 FBW flow. Model-dependent items are flagged 🟧 (mainly where JD330's mid-fidelity systems differ from the study-level ToLiss). Verify each item against the flown model before line use `[VERIFY]`.*

## Preflight / Cockpit prep
- Documents / OFP / navlog …… ABOARD, CHECKED
- Circuit breakers / gear pins / covers …… STOWED / NORMAL 🟧 (not fully modelled on JD330)
- Batteries …… ON
- External power / APU …… AS REQUIRED, POWER AVAIL
- ADIRS (3) …… NAV
- ECAM status / MEL …… REVIEWED, NO BLOCKING FAULT
- Fuel quantity / distribution …… CHECKED vs OFP
- Flight controls (if elec avail) …… CHECKED FULL & FREE
- FMGS init (co-route, F-PLN, PERF, ZFW/ZFWCG, fuel) …… SET & CROSS-CHECKED
- Takeoff data (V1/VR/V2, FLEX/TOGA, THS, FLAPS) …… ENTERED, CROSS-CHECKED
- Baro / altimeters …… SET
- Departure brief …… COMPLETE

## Before start
- Cockpit prep …… COMPLETE
- Signs (seatbelts / no-smoking) …… ON / AUTO
- ATC clearance …… OBTAINED
- Doors / cargo …… CLOSED, ECAM DOORS PAGE CLEAR
- Fuel pumps …… ON
- Beacon …… ON
- Thrust levers …… IDLE
- Parking brake …… SET
- Pushback / area …… CLEAR, CLEARANCE RECEIVED

## After start
- APU bleed (for start) …… AS REQUIRED
- Engine start (ENG mode selector → IGN/START, master 1+2) …… STARTED, PARAMETERS NORMAL
- ENG mode selector …… NORM
- Anti-ice …… AS REQUIRED
- ECAM status …… CHECKED, NO ABNORMAL
- Ground equipment / GPU …… DISCONNECTED, CLEAR

## Before taxi
- Flight controls …… CHECKED (full travel, ECAM F/CTL page) 🟧 (ECAM check depth JD330-limited)
- Flaps / slats …… SET FOR TAKEOFF (CONF per perf)
- Pitch trim (THS) …… SET TO GREEN BAND per takeoff data
- Rudder trim …… ZERO / AS REQUIRED
- Autobrake …… AS REQUIRED (RTO/MAX)
- Radar / PredWS …… ON / AUTO 🟧 (WXR degraded on XP11)
- ECAM T.O memo …… REVIEWED, NO BLUE/AMBER
- Ground spoilers armed / signs / cabin …… CHECKED

## Before takeoff 🟥
- **Cabin …… SECURE**
- **Flaps / slats …… CONFIRMED per takeoff data**
- **THS / trim …… CONFIRMED SET**
- **Flight controls …… FREE & CORRECT**
- **Takeoff config (T.O memo all green) …… CONFIRMED**
- **Transponder / TCAS …… TA/RA, ON**
- **Runway / heading …… CONFIRMED, LINED UP**
- **Landing lights / strobes …… ON**
- **Autobrake / thrust mode (FLEX/TOGA) …… CONFIRMED**

## After takeoff / Climb
- Landing gear …… UP, DOORS CLOSED
- Flaps / slats …… RETRACTED ON SCHEDULE
- Ground spoilers …… DISARMED
- Climb thrust / autoflight …… SET, ENGAGED
- Packs / bleed …… ON
- Baro → STD (at transition) …… SET
- Landing lights …… OFF ABOVE 10,000 / AS REQUIRED

## Cruise
- Altitude / MACH / CI …… SET per OFP (M.80–.82, CI 10)
- Fuel …… MONITORED vs OFP, X-FEED CHECKED
- ETOPS/EDTO entry point …… CONFIRMED, en-route alt live 🟧 (dispatch discipline, not sim-modelled)
- Systems / ECAM …… NORMAL
- Step climbs …… AS PLANNED (FL310→FL380)

## Descent / Approach
- Descent / approach brief …… COMPLETE
- Baro (at transition level) …… SET
- Landing perf / VAPP / CONF …… CHECKED, SET
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
- Flaps …… RETRACTED
- Autobrake …… DISARMED
- APU …… START AS REQUIRED
- Radar / PredWS …… OFF
- Transponder …… AS REQUIRED (STBY/ground)
- Landing / strobe lights …… AS REQUIRED

## Shutdown / Secure
- Parking brake …… SET (or chocks in)
- Engines (masters 1+2) …… OFF
- Seatbelt signs …… OFF
- Beacon …… OFF
- Fuel pumps …… OFF (as required)
- External power / APU …… AS REQUIRED
- ADIRS …… OFF
- ECAM status / doors …… CHECKED
- Aircraft …… SECURED (per secure-cockpit flow if last leg)

---

## Sources & References
*Public URLs only. Private/OEM/add-on documents may inform content but must never be listed here.*

- SKYbrary — Airbus A330neo (A339) — https://skybrary.aero/aircraft/a339
- ToLiss — A330-900 product page (systems scope) — https://store.x-plane.org/Airbus-A330-900-neo-by-ToLiss_p_1952.html
- JARDesign — JD330 Airliner — https://jardesign.org/a330/

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-25 | Initial draft — generic A330 FBW normal flow re-expressed; Before-takeoff/Landing marked 🟥; model-dependent items 🟧 |
