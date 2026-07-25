<!--
================================================================================
  K Global — AIRFRAME PACK · CHECKLIST  ·  B748 Boeing 747-8 (8i / 8F)
  Curated normal checklist, tailored to the approved sim model.
  FLAG LEGEND  🟥 memory/critical item   🟧 caution/model-dependent   🟩 normal
================================================================================
-->

# B748 — Boeing 747-8 · Normal Checklist

**B748 / 747 family** · flown as SSG 747-8 (8i Intercontinental / 8F Freighter) 🟧 `[VERIFY — model]` · sim = X-Plane 11
**Version** v0.1 · **Updated** 2026-07-25 · **Status** Draft

> **Read-me:** K Global normal-ops flow for X-Plane 11. **The aircraft's own checklist/EICAS is authoritative** — where the sim model differs from the real jet, the 🟧 note says so. This is a cockpit quick-reference, not a certified checklist, and re-expressed in K Global's own words (no verbatim OEM text). Flag legend 🟥 memory/critical · 🟧 model-dependent · 🟩 normal.

---

*Format: **CHALLENGE …… RESPONSE**. Generic Boeing 747-8 flow — **four-engine** quad (FMC/CDU dual — Captain + First Officer, MCP, autothrottle, EICAS/RECALL). Boeing normal checklists are short "checklist" items backed by longer memorised **flows**; both are represented below by phase. **8i (pax + belly) vs 8F (main-deck freighter) differ at the loadsheet/payload step, not the flow** — the divider is called out where it matters. Model-dependent items are flagged 🟧. Verify each item against the flown model before line use `[VERIFY]`.*

## Preflight / Cockpit prep
- Documents / OFP / navlog …… ABOARD, CHECKED
- **Loadsheet variant …… 8i (pax + belly) or 8F (main-deck cargo) CONFIRMED per tail** 🟥 (never mix the two — Dispatch §4)
- Battery …… ON
- APU / external power …… AS REQUIRED, POWER AVAIL
- IRS (3) …… ALIGN, then NAV 🟧 (multi-minute align — build into timing, Sim-Model §3)
- Hydraulic demand pumps …… AUTO/OFF per phase; primary pumps …… ON
- Fuel pumps (main / centre) …… AS REQUIRED
- EICAS / RECALL …… PUSHED, NO ABNORMAL; status reviewed vs MEL
- Fuel quantity / distribution …… CHECKED vs OFP
- Packs / isolation valves …… NORMAL, OPEN
- FMC/CDU init (POS, RTE, PERF INIT — ZFW/fuel/CI, TAKEOFF REF) …… SET & CROSS-CHECKED 🟧 (route-file format quirk — Sim-Model §3)
- Takeoff data (V1/VR/V2, thrust/assumed-temp, flap, stab trim) …… ENTERED, CROSS-CHECKED
- MCP (IAS / HDG / ALT) …… SET
- Baro / altimeters …… SET
- Departure brief …… COMPLETE

## Before start
- Cockpit prep …… COMPLETE
- Signs (seatbelts / no-smoking) …… ON / AUTO (8i) / AS REQUIRED (8F, crew only)
- ATC clearance …… OBTAINED
- Doors / cargo …… CLOSED, DOOR PAGE CLEAR — **8F: confirm main-deck side + nose cargo door both secured** 🟥
- Fuel pumps …… ON
- Beacon …… ON
- Thrust levers (all 4) …… CLOSED (idle)
- Parking brake …… SET
- Pushback / area …… CLEAR, CLEARANCE RECEIVED

## Engine start
- Ground equipment …… DISCONNECTED, CLEAR
- Engine area (all 4) …… CLEAR
- Autostart …… ON
- Engine start selectors (1, then 2, 3, 4 per sequence) …… START
- Fuel control switches (per engine) …… RUN, PARAMETERS NORMAL (N2/EGT/N1/FF rising in sequence, all 4)
- Start selectors …… NORM (after stabilised)
- Generators (all 4 + backup) …… ON, no fault lights
- APU …… OFF (as required)
- Anti-ice …… AS REQUIRED

## Before taxi
- Generators (all 4) …… ON (lights out)
- Packs / bleeds / isolation valves …… AUTO / ON (lights out)
- Flaps …… SET FOR TAKEOFF (___ CONFIRM per perf)
- Stabilizer trim …… SET ___ UNITS per takeoff data
- Flight controls …… FREE AND CORRECT (full travel, F/CTL check) 🟧 (EICAS synoptic depth to confirm on build)
- RECALL …… CHECKED, NO MESSAGE
- Anti-ice …… AS REQUIRED
- Taxi / turn-off lights …… ON / AS REQUIRED
- Autobrake …… RTO

## Before takeoff 🟥
- **Flaps …… CONFIRMED ___ (per takeoff data)**
- **Stabilizer trim …… CONFIRMED SET**
- **Flight controls …… FREE & CORRECT**
- **Takeoff config (no CONFIG warning, EICAS clear) …… CONFIRMED**
- **Cabin / cargo …… SECURE** (8i: cabin; 8F: main-deck restraint/nets confirmed)
- **Transponder / TCAS …… TA/RA, ON**
- **Runway / heading …… CONFIRMED, LINED UP**
- **Landing / strobe lights …… ON**
- **Autothrottle / thrust mode (assumed-temp / TO, all 4) …… ARMED, CONFIRMED**
- **Autobrake …… RTO CONFIRMED**

## After takeoff / Climb
- Landing gear …… UP (positive rate), gear lever OFF after retraction
- Flaps …… RETRACTED ON SCHEDULE
- Autopilot / autothrottle …… ENGAGED AS REQUIRED
- Climb thrust / VNAV …… SET, ENGAGED (all 4 engines matched)
- Baro → STD (at transition altitude) …… SET
- Speed …… ≤250 KIAS BELOW 10,000
- Landing lights …… OFF ABOVE 10,000 / AS REQUIRED
- Seatbelt signs …… AS REQUIRED

## Cruise
- Altitude / MACH / CI …… SET per OFP (M0.85 typical, CI per OM E)
- Fuel …… MONITORED vs OFP, CROSSFEED / centre-tank scheduling CHECKED
- EDTO entry point …… CONFIRMED, adequate-aerodrome plan live 🟧 (dispatch discipline, not sim-modelled — quad, no diversion-time limit; Dispatch §5)
- Systems / EICAS …… NORMAL, all 4 engines within limits
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
- **Cabin / cargo …… SECURE**
- **Landing gear …… DOWN, 3 GREEN** (main gear — confirm all trucks per EICAS gear page)
- **Flaps …… SET FOR LANDING (per perf)**
- **Speedbrake …… ARMED**
- **Autobrake …… SET AS REQUIRED**
- **Go-around altitude / thrust (all 4) …… SET**
- **Landing config (EICAS clear) …… CONFIRMED**

## After landing
- Speedbrake / reversers (all 4) …… STOWED
- Flaps …… RETRACTED
- Autobrake …… OFF
- Transponder …… STANDBY / AS REQUIRED (ground)
- APU …… START AS REQUIRED
- Landing / strobe lights …… AS REQUIRED; taxi lights …… ON
- Anti-ice …… AUTO / OFF

## Shutdown / Secure
- **ICAO Code F ground handling …… CONFIRM Code F stand/taxiway assignment** 🟥 (Intro §4 — wingspan 68.4 m; sim does not enforce this, Sim-Model §5)
- Parking brake …… SET (or chocks in)
- Fuel control switches (all 4) …… CUTOFF
- Seatbelt signs …… OFF
- Beacon …… OFF
- Fuel pumps …… OFF (as required)
- External power / APU …… AS REQUIRED
- Hydraulic pumps …… OFF (as required)
- IRS (3) …… OFF
- EICAS / doors …… CHECKED — **8F: main-deck + nose cargo door clear before ground crew approach**
- Aircraft …… SECURED (per secure-cockpit flow if last leg)

---

## Sources & References
*Public URLs only. Private/OEM/add-on documents may inform content but must never be listed here.*

- SKYbrary — Boeing 747-8 (B748) — https://skybrary.aero/aircraft/b748
- SSG — Boeing 747-8 Inter Anniversary Edition product page (systems scope) — https://store.x-plane.org/B-747-8-Inter-Anniversary-Edition_p_1079.html
- Boeing — 747-8 product page — https://www.boeing.com/commercial/747

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-25 | Initial draft — generic Boeing 747-8 normal flow (four-engine, dual FMC/CDU, MCP, autothrottle, EICAS/RECALL) re-expressed by phase; 8i vs 8F loadsheet/door/cargo divergence called out; Before-takeoff/Landing marked 🟥; model-dependent items 🟧. |
