<!--
================================================================================
  K Global — AIRFRAME PACK · CHECKLIST  ·  A346 Airbus A340-600
  Curated normal checklist, tailored to the approved sim model.
  FLAG LEGEND  🟥 memory/critical item   🟧 caution/model-dependent   🟩 normal
================================================================================
-->

# A346 — Airbus A340-600 · Normal Checklist

**A346 / A340 family — separate A340 type rating** · flown as ToLiss A346 (sole candidate) 🟧 `[VERIFY — model]` · sim = X-Plane 11
**Version** v0.1 · **Updated** 2026-07-25 · **Status** Draft

> **Read-me:** K Global normal-ops flow for X-Plane 11. **The aircraft's own checklist/ECAM is authoritative** — where the sim model differs from the real jet, the 🟧 note says so. This is a cockpit quick-reference, not a certified checklist, and re-expressed in K Global's own words (no verbatim OEM text). The A340 is a **separate type rating** from the A330/A350 — do not assume A339-pack familiarity substitutes for type-specific training, even though both are Airbus FBW. Flag legend 🟥 memory/critical · 🟧 model-dependent · 🟩 normal.

---

*Format: **CHALLENGE …… RESPONSE**. Generic A340 four-engine FBW flow. Model-dependent items are flagged 🟧. Verify each item against the flown model before line use `[VERIFY]`.*

## Preflight / Cockpit prep
- Documents / OFP / navlog …… ABOARD, CHECKED
- Circuit breakers / gear pins / covers …… STOWED / NORMAL
- Batteries …… ON
- External power / APU …… AS REQUIRED, POWER AVAIL
- ADIRS (3) …… NAV
- ECAM status / MEL …… REVIEWED, NO BLOCKING FAULT
- Fuel quantity / distribution (4 engine feed tanks + centre/trim) …… CHECKED vs OFP
- Flight controls (if elec avail) …… CHECKED FULL & FREE
- FMGS init (co-route, F-PLN, PERF, ZFW/ZFWCG, fuel) …… SET & CROSS-CHECKED
- Takeoff data (V1/VR/V2, FLEX/TOGA, THS, FLAPS) …… ENTERED, CROSS-CHECKED
- Baro / altimeters …… SET
- **Long-fuselage / tail-strike brief** …… PITCH-LIMIT AWARENESS COMPLETE 🟧 (75.36 m airframe — longest in the fleet)
- Departure brief (incl. Code E stand/taxiway constraints) …… COMPLETE

## Before start
- Cockpit prep …… COMPLETE
- Signs (seatbelts / no-smoking) …… ON / AUTO
- ATC clearance …… OBTAINED
- Doors / cargo …… CLOSED, ECAM DOORS PAGE CLEAR
- Fuel pumps (all tanks) …… ON
- Beacon …… ON
- Thrust levers (4) …… IDLE
- Parking brake …… SET
- Pushback / area …… CLEAR, CLEARANCE RECEIVED (long-fuselage tail swing on pushback/turn) 🟧

## After start
- APU bleed (for start) …… AS REQUIRED
- Engine start sequence (typically 4→1 or per APU bleed capacity; ENG mode selector → IGN/START, masters as scheduled) …… ALL FOUR STARTED, PARAMETERS NORMAL
- ENG mode selector …… NORM
- Anti-ice …… AS REQUIRED
- ECAM status …… CHECKED, NO ABNORMAL (4-engine parameters cross-checked)
- Ground equipment / GPU …… DISCONNECTED, CLEAR

## Before taxi
- Flight controls …… CHECKED (full travel, ECAM F/CTL page)
- Flaps / slats …… SET FOR TAKEOFF (CONF per perf)
- Pitch trim (THS) …… SET TO GREEN BAND per takeoff data
- Rudder trim …… ZERO / AS REQUIRED
- Autobrake …… AS REQUIRED (RTO/MAX)
- Radar / PredWS …… ON / AUTO 🟧 (WXR fidelity model-dependent on XP11)
- ECAM T.O memo …… REVIEWED, NO BLUE/AMBER
- Ground spoilers armed / signs / cabin …… CHECKED
- **Taxi turns** …… WIDE RADIUS / LONG-FUSELAGE CLEARANCE CONFIRMED 🟧 (fillet/turn clearance at constrained stands)

## Before takeoff 🟥
- **Cabin …… SECURE**
- **Flaps / slats …… CONFIRMED per takeoff data**
- **THS / trim …… CONFIRMED SET**
- **Flight controls …… FREE & CORRECT**
- **Takeoff config (T.O memo all green, four-engine parameters) …… CONFIRMED**
- **Transponder / TCAS …… TA/RA, ON**
- **Runway / heading …… CONFIRMED, LINED UP**
- **Landing lights / strobes …… ON**
- **Autobrake / thrust mode (FLEX/TOGA) …… CONFIRMED**
- **Rotation pitch rate …… BRIEFED SMOOTH/MODERATE** 🟥 (long-fuselage tail-strike sensitivity on rotation)

## After takeoff / Climb
- Landing gear …… UP, DOORS CLOSED
- Flaps / slats …… RETRACTED ON SCHEDULE
- Ground spoilers …… DISARMED
- Climb thrust / autoflight (4 engines) …… SET, ENGAGED
- Packs / bleed …… ON
- Baro → STD (at transition) …… SET
- Landing lights …… OFF ABOVE 10,000 / AS REQUIRED

## Cruise
- Altitude / MACH / CI …… SET per OFP (target M0.83, max M0.86)
- Fuel (4-tank + centre/trim balance) …… MONITORED vs OFP, X-FEED CHECKED
- EDTO adequate-aerodrome point …… CONFIRMED en-route 🟧 (dispatch discipline, not sim-modelled; quad — no diversion-time rule, but adequate-aerodrome planning still applies)
- Systems / ECAM (4-engine, 4-generator cross-check) …… NORMAL
- Step climbs …… AS PLANNED per OFP

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
- **Landing gear …… DOWN, 3 GREEN (main + nose)**
- **Flaps …… FULL / CONF per perf**
- **Ground spoilers …… ARMED**
- **Autobrake …… SET AS REQUIRED**
- **ECAM LDG memo …… ALL GREEN**
- **Go-around altitude / thrust (4 engines) …… SET**
- **Flare pitch attitude …… BRIEFED, TAIL-STRIKE AWARE** 🟥 (long-fuselage geometry — do not over-rotate in the flare)

## After landing
- Ground spoilers / reversers (4 engines, note some types selectively use fewer reversers at low speed — per ECAM/QRH) …… STOWED
- Flaps …… RETRACTED
- Autobrake …… DISARMED
- APU …… START AS REQUIRED
- Radar / PredWS …… OFF
- Transponder …… AS REQUIRED (STBY/ground)
- Landing / strobe lights …… AS REQUIRED

## Shutdown / Secure
- Parking brake …… SET (or chocks in)
- Engines (masters 1–4) …… OFF
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

- SKYbrary — Airbus A340-600 (A346) — https://skybrary.aero/aircraft/a346
- Airbus — A340 type page — https://www.aircraft.airbus.com/en/previous-aircraft/a340
- ToLiss — A340-600 product page (systems scope, developer site) — https://toliss.com/pages/a340-600
- EASA — TCDS EASA.A.015 Airbus A340 — https://www.easa.europa.eu/en/document-library/type-certificates

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-25 | Initial draft — generic A340 four-engine FBW normal flow re-expressed from the A339 pattern; four-engine start/parameter checks and long-fuselage tail-strike briefing points added throughout; Before-takeoff/Landing marked 🟥; model-dependent items 🟧. |
