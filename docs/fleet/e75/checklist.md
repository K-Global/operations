<!--
================================================================================
  K Global — AIRFRAME PACK · CHECKLIST  ·  E75 Embraer E175
  Curated normal checklist, tailored to the approved sim model.
  FLAG LEGEND  🟥 memory/critical item   🟧 caution/model-dependent   🟩 normal
================================================================================
-->

# E75 — Embraer E175 · Normal Checklist

**E75 / E-Jet family — common type rating E170/E175** · flown as X-Crafts E175 🟧 `[VERIFY — model]` · sim = X-Plane 11
**Version** v0.1 · **Updated** 2026-07-25 · **Status** Draft

> **Read-me:** K Global normal-ops flow for X-Plane 11. **The aircraft's own EICAS/electronic checklist is authoritative** — where the sim model differs from the real jet, the 🟧 note says so. This is a cockpit quick-reference, not a certified checklist, and re-expressed in K Global's own words (no verbatim OEM text). Flag legend 🟥 memory/critical · 🟧 model-dependent · 🟩 normal.

---

*Format: **CHALLENGE …… RESPONSE**. Generic E-Jet EICAS flow, common to the E170/E175 type-rating pair. Model-dependent items are flagged 🟧. Verify each item against the flown model before line use `[VERIFY]`.*

## Preflight / Cockpit prep
- Documents / OFP / navlog …… ABOARD, CHECKED
- Circuit breakers / gear pins / covers …… STOWED / NORMAL
- Batteries (BAT 1 / BAT 2) …… ON
- External power / APU …… AS REQUIRED, POWER AVAIL
- TRUs (1 / 2 / ESS) …… AUTO
- EICAS status page / MEL …… REVIEWED, NO BLOCKING FAULT
- Fuel quantity / distribution …… CHECKED vs OFP
- Flight controls (if power avail) …… CHECKED FULL & FREE
- FMS init (co-route, flight plan, perf, ZFW/CG, fuel) …… SET & CROSS-CHECKED
- Takeoff data (V1/VR/V2, flap setting, trim) …… ENTERED, CROSS-CHECKED
- Baro / altimeters …… SET
- Departure brief …… COMPLETE

## Before start
- Cockpit prep …… COMPLETE
- Signs (seatbelts / no-smoking) …… ON / AUTO
- ATC clearance …… OBTAINED
- Doors / cargo …… CLOSED, EICAS DOORS INDICATION CLEAR
- AC fuel pumps (1 / 2) …… ON
- Nav lights / beacon …… ON
- Thrust levers …… IDLE
- Parking brake …… SET
- Pushback / area …… CLEAR, CLEARANCE RECEIVED

## After start
- APU bleed (for start, or GPU used) …… AS REQUIRED
- Engine start (ignition ON, start engine 2 then engine 1) …… STARTED, PARAMETERS NORMAL
- APU …… OFF once both engines stable (if used for start)
- Anti-ice …… AS REQUIRED
- EICAS status …… CHECKED, NO ABNORMAL
- Bleed air / air-conditioning packs …… ON, BOTH
- Ground equipment / GPU …… DISCONNECTED, CLEAR

## Before taxi
- Flight controls …… CHECKED (full travel, EICAS flight-control synoptic) 🟧 (synoptic depth model-dependent)
- Flaps / slats …… SET FOR TAKEOFF (flap 4 for T/O per perf)
- Trim (pitch/rudder) …… SET per takeoff data
- Autobrake …… AS REQUIRED (RTO/OFF/LO/MID/HI)
- T/O configuration check …… RUN, NO FAULT ANNUNCIATED 🟧 (function depends on perf-page entry having been made)
- EICAS takeoff memo …… REVIEWED, NO CAUTION/WARNING
- Ground spoilers armed / signs / cabin …… CHECKED

## Before takeoff 🟥
- **Cabin …… SECURE**
- **Flaps / slats …… CONFIRMED per takeoff data**
- **Trim …… CONFIRMED SET**
- **Flight controls …… FREE & CORRECT**
- **Takeoff configuration (EICAS memo clear) …… CONFIRMED**
- **Transponder / TCAS …… TA/RA, ON**
- **Runway / heading …… CONFIRMED, LINED UP**
- **Landing / strobe lights …… ON**
- **Autobrake / thrust mode …… CONFIRMED**

## After takeoff / Climb
- Landing gear …… UP, DOORS CLOSED
- Flaps / slats …… RETRACTED ON SCHEDULE
- Ground spoilers …… DISARMED (confirm not armed in flight)
- Climb thrust / autoflight …… SET, ENGAGED (ATHR before FLCH) 🟧
- Packs / bleed …… ON
- Baro → STD (at transition) …… SET
- Landing lights …… OFF ABOVE 10,000 / AS REQUIRED

## Cruise
- Altitude / Mach / CI …… SET per OFP (M.76–.78 typical, max M0.82)
- Fuel …… MONITORED vs OFP, crossfeed available if imbalance
- EICAS / systems …… NORMAL
- City/Regional stage length …… CONFIRMED WELL INSIDE 60-MIN DIVERSION STANDARD (no EDTO applies — Dispatch §5)

## Descent / Approach
- Descent / approach brief …… COMPLETE
- Baro (at transition level) …… SET
- Landing perf / VAPP / flap setting …… CHECKED, SET (flap 5 for landing per perf page)
- Fuel …… SUFFICIENT, RESERVES CONFIRMED
- Signs …… ON
- EICAS / autoflight …… SET FOR APPROACH
- Minima …… SET

## Landing 🟥
- **Cabin …… SECURE**
- **Landing gear …… DOWN, 3 GREEN**
- **Flaps …… LANDING SETTING (flap 5) CONFIRMED**
- **Ground spoilers …… ARMED**
- **Autobrake …… SET AS REQUIRED**
- **EICAS landing memo …… CLEAR**
- **Go-around altitude / thrust …… SET**

## After landing
- Ground spoilers / reversers …… STOWED
- Flaps …… RETRACTED
- Autobrake …… DISARMED
- APU …… START AS REQUIRED
- Transponder …… AS REQUIRED (STBY/ground)
- Landing / strobe lights …… AS REQUIRED

## Shutdown / Secure
- Parking brake …… SET (or chocks in)
- Engines …… OFF (ignition off, fuel levers cutoff)
- Seatbelt signs …… OFF
- Beacon …… OFF
- AC fuel pumps …… OFF (as required)
- External power / APU …… AS REQUIRED
- EICAS status / doors …… CHECKED
- Batteries …… OFF (last action, per secure-cockpit flow if last leg)
- Aircraft …… SECURED

---

## Sources & References
*Public URLs only. Private/OEM/add-on documents may inform content but must never be listed here.*

- SKYbrary — Aircraft type reference — https://skybrary.aero/
- Wikipedia — Embraer E-Jet family — https://en.wikipedia.org/wiki/Embraer_E-Jet_family
- X-Crafts — E-Jets Family for X-Plane (systems scope) — https://www.xcrafts.com/ejets-family

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-25 | Initial draft — generic E-Jet EICAS normal flow re-expressed for the E175; Before-takeoff/Landing marked 🟥; model-dependent items 🟧; consistent with the common E170/E175 type-rating pair. |
