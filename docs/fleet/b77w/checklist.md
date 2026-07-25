<!--
================================================================================
  K Global — AIRFRAME PACK · CHECKLIST  ·  B77W Boeing 777-300ER
  Curated normal checklist, tailored to the approved sim model.
  FLAG LEGEND  🟥 memory/critical item   🟧 caution/model-dependent   🟩 normal
================================================================================
-->

# B77W — Boeing 777-300ER · Normal Checklist

**B77W / 777 family** · flown as FlightFactor 777 (-300ER) 🟧 `[VERIFY — model]` · sim = X-Plane 11
**Version** v0.1 · **Updated** 2026-07-25 · **Status** Draft

> **Read-me:** K Global normal-ops flow for X-Plane 11. **The aircraft's own checklist/EICAS is authoritative** — where the sim model differs from the real jet, the 🟧 note says so. This is a cockpit quick-reference, not a certified checklist, and re-expressed in K Global's own words (no verbatim OEM text). Flag legend 🟥 memory/critical · 🟧 model-dependent · 🟩 normal.

---

*Format: **CHALLENGE …… RESPONSE**. Generic Boeing 777 flow (FMC/CDU, MCP, autothrottle, EICAS/RECALL). Boeing normal checklists are short "checklist" items backed by longer memorised **flows**; both are represented below by phase. Model-dependent items are flagged 🟧 where FlightFactor's systems may differ from the real jet. Verify each item against the flown model before line use `[VERIFY]`.*

## Preflight / Cockpit prep
- Documents / OFP / navlog …… ABOARD, CHECKED
- Battery …… ON
- APU / external power …… AS REQUIRED, POWER AVAIL
- Electric/air hydraulic demand pumps …… AUTO; primary pumps …… ON
- Fuel pumps (main / centre) …… AS REQUIRED
- ADIRU …… ON, ALIGNED
- EICAS / RECALL …… PUSHED, NO ABNORMAL; status reviewed vs MEL
- Fuel quantity / distribution …… CHECKED vs OFP
- Exterior/emergency exit lights …… AS REQUIRED / ARMED
- Pack control switches / bleeds / pressurisation …… AUTO, SET
- FMC/CDU init (POS, RTE, PERF INIT — ZFW/fuel/CI, TAKEOFF REF) …… SET & CROSS-CHECKED
- Takeoff data (V1/VR/V2, thrust/assumed-temp, flap, stab trim) …… ENTERED, CROSS-CHECKED
- MCP (IAS / HDG / ALT) …… SET
- Baro / altimeters …… SET
- Departure brief …… COMPLETE

## Before start
- Cockpit prep …… COMPLETE
- Signs (seatbelts / no-smoking) …… ON / AUTO
- ATC clearance …… OBTAINED
- Doors / cargo …… CLOSED, DOOR PAGE CLEAR
- Fuel pumps …… ON
- Beacon …… ON
- Thrust levers …… CLOSED (idle)
- Parking brake …… SET
- Pushback / area …… CLEAR, CLEARANCE RECEIVED

## Engine start
- Ground equipment …… DISCONNECTED, CLEAR
- Engine area …… CLEAR
- Autostart …… ON
- Engine start selectors (1 then 2) …… START
- Fuel control switches (1 then 2) …… RUN, PARAMETERS NORMAL (N2/EGT/N1/FF rising in sequence)
- Start selectors …… NORM (after stabilised)
- Generators (L + R, backup) …… ON, no fault lights
- APU …… OFF (as required)
- Anti-ice …… AS REQUIRED

## Before taxi
- Generators …… ON (lights out)
- Packs / bleeds / isolation valves …… AUTO / ON (lights out)
- Flaps …… SET FOR TAKEOFF (___ CONFIRM per perf)
- Stabilizer trim …… SET ___ UNITS per takeoff data
- Flight controls …… FREE AND CORRECT (full travel, F/CTL check) 🟧 (EICAS synoptic depth model-limited)
- RECALL …… CHECKED, NO MESSAGE
- Anti-ice …… AS REQUIRED
- Taxi / turn-off lights …… ON / AS REQUIRED
- Autobrake …… RTO

## Before takeoff 🟥
- **Flaps …… CONFIRMED ___ (per takeoff data)**
- **Stabilizer trim …… CONFIRMED SET**
- **Flight controls …… FREE & CORRECT**
- **Takeoff config (no CONFIG warning, EICAS clear) …… CONFIRMED**
- **Cabin …… SECURE**
- **Transponder / TCAS …… TA/RA, ON**
- **Runway / heading …… CONFIRMED, LINED UP**
- **Landing / strobe lights …… ON**
- **Autothrottle / thrust mode (assumed-temp / TO) …… ARMED, CONFIRMED**
- **Autobrake …… RTO CONFIRMED**

## After takeoff / Climb
- Landing gear …… UP (positive rate), gear lever OFF after retraction
- Flaps …… RETRACTED ON SCHEDULE
- Autopilot / autothrottle …… ENGAGED AS REQUIRED
- Climb thrust / VNAV …… SET, ENGAGED
- Baro → STD (at transition altitude) …… SET
- Speed …… ≤250 KIAS BELOW 10,000
- Landing lights …… OFF ABOVE 10,000 / AS REQUIRED
- Seatbelt signs …… AS REQUIRED

## Cruise
- Altitude / MACH / CI …… SET per OFP (M0.84, CI per OM E)
- Fuel …… MONITORED vs OFP, CROSSFEED CHECKED
- ETOPS/EDTO entry point …… CONFIRMED, en-route alt live 🟧 (dispatch discipline, not sim-modelled)
- Systems / EICAS …… NORMAL
- Step climbs …… AS PLANNED

## Descent / Approach
- Descent / approach brief …… COMPLETE
- Baro (at transition level) …… SET
- Landing perf / VREF / flap …… CHECKED, SET
- Fuel …… SUFFICIENT, RESERVES CONFIRMED
- Signs …… ON
- Autoflight / MCP (approach mode, go-around alt) …… SET
- Minima …… SET

## Landing 🟥
- **Cabin …… SECURE**
- **Landing gear …… DOWN, 3 GREEN**
- **Flaps …… SET FOR LANDING (per perf)**
- **Speedbrake …… ARMED**
- **Autobrake …… SET AS REQUIRED**
- **Go-around altitude …… SET**
- **Landing config (EICAS clear) …… CONFIRMED**

## After landing
- Speedbrake / reversers …… STOWED
- Flaps …… RETRACTED
- Autobrake …… OFF
- Transponder …… STANDBY / AS REQUIRED (ground)
- APU …… START AS REQUIRED
- Landing / strobe lights …… AS REQUIRED; taxi lights …… ON
- Anti-ice …… AUTO / OFF

## Shutdown / Secure
- Parking brake …… SET (or chocks in)
- Fuel control switches (1 + 2) …… CUTOFF
- Seatbelt signs …… OFF
- Beacon …… OFF
- Fuel pumps …… OFF (as required)
- External power / APU …… AS REQUIRED
- Hydraulic pumps …… OFF (as required)
- ADIRU …… OFF
- EICAS / doors …… CHECKED
- Aircraft …… SECURED (per secure-cockpit flow if last leg)

---

## Sources & References
*Public URLs only. Private/OEM/add-on documents may inform content but must never be listed here.*

- SKYbrary — Boeing 777-300 (B77W) — https://skybrary.aero/aircraft/b77w
- FlightFactor — 777 product page (systems scope) — https://store.x-plane.org/Boeing-777-Professional_p_1194.html
- Boeing — 777 product page — https://www.boeing.com/commercial/777

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-25 | Initial draft — generic Boeing 777 normal flow (FMC/CDU, MCP, autothrottle, EICAS/RECALL) re-expressed by phase; Before-takeoff/Landing marked 🟥; model-dependent items 🟧. |
