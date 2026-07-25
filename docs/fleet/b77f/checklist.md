<!--
================================================================================
  K Global — AIRFRAME PACK · CHECKLIST  ·  B77F Boeing 777F
  Curated normal checklist, tailored to the approved sim model.
  FLAG LEGEND  🟥 memory/critical item   🟧 caution/model-dependent   🟩 normal
================================================================================
-->

# B77F — Boeing 777F · Normal Checklist

**B77F / 777 family** · flown as FlightFactor 777 (777F variant) 🟧 `[VERIFY — model]` · sim = X-Plane 11
**Version** v0.1 · **Updated** 2026-07-25 · **Status** Draft

> **Read-me:** K Global normal-ops flow for X-Plane 11. **The aircraft's own checklist/EICAS is authoritative** — where the sim model differs from the real jet, the 🟧 note says so. This is a cockpit quick-reference, not a certified checklist, and re-expressed in K Global's own words (no verbatim OEM text). The flight-deck flow is the **same 777 procedure as the passenger [B77W](../b77w/checklist.md)** — the differences here are the **freighter loadsheet/CG confirmation and the absence of any cabin/pax item** (no signs, no cabin-crew calls, no passenger-related checks). Flag legend 🟥 memory/critical · 🟧 model-dependent · 🟩 normal.

---

*Format: **CHALLENGE …… RESPONSE**. Generic Boeing 777 flow (FMC/CDU, MCP, autothrottle, EICAS/RECALL). Boeing normal checklists are short "checklist" items backed by longer memorised **flows**; both are represented below by phase. Model-dependent items are flagged 🟧 where FlightFactor's systems may differ from the real jet. Verify each item against the flown model before line use `[VERIFY]`.*

## Preflight / Cockpit prep
- Documents / OFP / navlog …… ABOARD, CHECKED
- **Freighter loadsheet / main-deck load plan …… RECEIVED, CROSS-CHECKED vs pallet positions** 🟥 (no cabin manifest — cargo loadsheet is the only load document)
- Battery …… ON
- APU / external power …… AS REQUIRED, POWER AVAIL
- Electric/air hydraulic demand pumps …… AUTO; primary pumps …… ON
- Fuel pumps (main / centre) …… AS REQUIRED
- ADIRU …… ON, ALIGNED
- EICAS / RECALL …… PUSHED, NO ABNORMAL; status reviewed vs MEL
- Fuel quantity / distribution …… CHECKED vs OFP
- **Main-deck cargo compartment / smoke-detection status …… CHECKED** 🟧 (no cabin — main-deck compartment status replaces cabin-readiness check)
- Pack control switches / bleeds / pressurisation …… AUTO, SET
- FMC/CDU init (POS, RTE, PERF INIT — ZFW/fuel/CI, TAKEOFF REF) …… SET & CROSS-CHECKED **against loadsheet ZFW/CG, not an assumed pax load**
- Takeoff data (V1/VR/V2, thrust/assumed-temp, flap, stab trim) …… ENTERED, CROSS-CHECKED
- MCP (IAS / HDG / ALT) …… SET
- Baro / altimeters …… SET
- Departure brief …… COMPLETE (two-pilot crew; no cabin-crew brief)

## Before start
- Cockpit prep …… COMPLETE
- ATC clearance …… OBTAINED
- **Main-deck side cargo door + lower-deck cargo doors …… CLOSED, LOCKED, DOOR PAGE CLEAR** 🟥 (freighter door set — no passenger doors)
- Fuel pumps …… ON
- Beacon …… ON
- Thrust levers …… CLOSED (idle)
- Parking brake …… SET
- Pushback / area …… CLEAR, CLEARANCE RECEIVED (confirm main-deck loader/GSE clear before push)

## Engine start
- Ground equipment …… DISCONNECTED, CLEAR (incl. main-deck loader/cargo GSE)
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
- Stabilizer trim …… SET ___ UNITS **per takeoff data derived from loadsheet CG, not a default value** 🟥
- Flight controls …… FREE AND CORRECT (full travel, F/CTL check) 🟧 (EICAS synoptic depth model-limited)
- RECALL …… CHECKED, NO MESSAGE
- Anti-ice …… AS REQUIRED
- Taxi / turn-off lights …… ON / AS REQUIRED
- Autobrake …… RTO

## Before takeoff 🟥
- **Flaps …… CONFIRMED ___ (per takeoff data)**
- **Stabilizer trim …… CONFIRMED SET (per loadsheet CG)**
- **Flight controls …… FREE & CORRECT**
- **Takeoff config (no CONFIG warning, EICAS clear) …… CONFIRMED**
- **Main-deck cargo / doors …… SECURE, NO WARNING** (freighter equivalent of a cabin-secure check)
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

## Cruise
- Altitude / MACH / CI …… SET per OFP (M0.84, CI per OM E)
- Fuel …… MONITORED vs OFP, CROSSFEED CHECKED — **watch payload-vs-fuel trade at max structural cargo** (Dispatch §3) 🟧
- ETOPS/EDTO entry point …… CONFIRMED IF a rule time is set for this leg 🟥 (B77F operator rule time not yet set — Dispatch §5; do not assume EDTO clearance)
- Systems / EICAS, main-deck cargo status …… NORMAL
- Step climbs …… AS PLANNED

## Descent / Approach
- Descent / approach brief …… COMPLETE
- Baro (at transition level) …… SET
- Landing perf / VREF / flap …… CHECKED, SET **against actual landing ZFW/CG (post-burn), not a default**
- Fuel …… SUFFICIENT, RESERVES CONFIRMED
- Autoflight / MCP (approach mode, go-around alt) …… SET
- Minima …… SET

## Landing 🟥
- **Landing gear …… DOWN, 3 GREEN**
- **Flaps …… SET FOR LANDING (per perf)**
- **Speedbrake …… ARMED**
- **Autobrake …… SET AS REQUIRED**
- **Go-around altitude …… SET**
- **Landing config (EICAS clear) …… CONFIRMED**
- **Main-deck cargo …… NO WARNING** (freighter equivalent of a cabin-secure check)

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
- Beacon …… OFF
- Fuel pumps …… OFF (as required)
- External power / APU …… AS REQUIRED
- Hydraulic pumps …… OFF (as required)
- ADIRU …… OFF
- **Main-deck side cargo door + lower-deck doors, EICAS …… CHECKED** (no passenger door/jetbridge item)
- Aircraft …… SECURED (per secure-cockpit flow if last leg); handover to ramp/cargo-loading team

---

## Sources & References
*Public URLs only. Private/OEM/add-on documents may inform content but must never be listed here.*

- SKYbrary — Boeing 777 Freighter (B77L / 777F) — https://skybrary.aero/aircraft/b77l
- FlightFactor — 777 product page (systems scope) — https://store.x-plane.org/Boeing-777-Professional_p_1194.html
- Boeing — 777 Freighter product page — https://www.boeing.com/commercial/777

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-25 | Initial draft — cloned from the B77W normal checklist (shared 777 flight-deck flow); freighter loadsheet/main-deck door/CG items substituted for all cabin/pax items (loadsheet 🟥, main-deck door set 🟥, no passenger items anywhere); EDTO entry-point item flagged 🟥 pending operator rule time. |
