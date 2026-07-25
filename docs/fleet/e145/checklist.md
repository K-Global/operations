<!--
================================================================================
  K Global — AIRFRAME PACK · CHECKLIST  ·  E145 Embraer ERJ-145
  Curated normal checklist, tailored to the approved sim model.
  FLAG LEGEND  🟥 memory/critical item   🟧 caution/model-dependent   🟩 normal
================================================================================
-->

# E145 — Embraer ERJ-145 · Normal Checklist

**E145 / ERJ family (own type rating)** · flown as X-Crafts ERJ Family (E145/E145XR) 🟧 `[VERIFY — model]` · sim = X-Plane 11
**Version** v0.1 · **Updated** 2026-07-25 · **Status** Draft

> **Read-me:** K Global normal-ops flow for X-Plane 11. **The aircraft's own checklist/EICAS is authoritative** — where the sim model differs from the real jet, the 🟧 note says so. This is a cockpit quick-reference, not a certified checklist, and re-expressed in K Global's own words (no verbatim OEM text). **There is no autothrottle on this type** — thrust is hand-flown to the target rating in every phase; that is a real-aircraft fact, not a model limitation, and applies throughout this checklist. Flag legend 🟥 memory/critical · 🟧 model-dependent · 🟩 normal.

---

*Format: **CHALLENGE …… RESPONSE**. Generic ERJ-145 EICAS/conventional-flight-control flow. Model-dependent items are flagged 🟧. Verify each item against the flown model before line use `[VERIFY]`.*

## Preflight / Cockpit prep
- Documents / OFP / navlog …… ABOARD, CHECKED
- Parking brake …… SET
- Hydraulic pumps …… OFF (pre-power)
- Batteries …… AUTO, CHECKED
- Avionics master …… ON
- Fuel pumps / quantity …… CHECKED vs OFP
- Ice protection …… CHECKED / SET
- Engine start/stop selectors …… STOP
- APU …… START (as required)
- Autopilot / FGC …… CHECKED, SET
- FMS / RMU (route, performance init, ZFW, fuel) …… SET & CROSS-CHECKED 🟧 (custom FMS behaviour — verify against the flown model, not a licensed Primus 1000 unit)
- Pitch trim …… CHECKED, SET
- Standby attitude indicator …… UNCAGED
- Altimeters …… SET, CROSS-CHECKED

## Before start
- Cabin signs …… ON
- Rotating beacon …… ON
- GPU …… DISCONNECTED (as required)
- Doors / windows …… CHECKED, CLOSED
- Fuel quantity …… SET, CHECKED
- Nosewheel steering …… DISENGAGED

## After start
- Hydraulic pumps …… AUTO
- Generators …… CHECKED, ON
- Engine/APU bleed configuration …… SET per phase 🟧 (bleed-logic depth is model-dependent)

## Before taxi
- Flight controls …… CHECKED, FULL & FREE — conventional yoke; visually confirm surface travel, there is no fly-by-wire self-test on this type 🟩
- Trims (pitch / rudder / aileron) …… THREE SET
- Flaps …… SET per takeoff data (typically 9°)
- Speedbrake …… CLOSED
- Flight director / FGC …… SET FOR TAKEOFF
- Takeoff data / V-speeds (V1 / VR / V2 / target / VFS) …… ENTERED, CROSS-CHECKED — thrust will be **hand-flown** to these targets, no autothrottle 🟩
- Crossfeed …… CLOSED
- Takeoff brief …… COMPLETE

## Before takeoff 🟥
- **Cabin / flight attendant …… NOTIFIED, SECURE**
- **Exterior lights …… ON**
- **Fuel quantity …… BALANCED**
- **Brake temperatures …… CHECKED**
- **EICAS …… CHECKED, NO ABNORMAL MESSAGE**
- **Takeoff configuration …… CONFIRMED (config-warning test/push clear)**
- **Transponder / TCAS …… TA/RA, ON**
- **Runway / heading …… CONFIRMED, LINED UP**

## After takeoff / Climb
- Landing gear …… UP
- Flaps …… UP ON SCHEDULE
- Thrust …… SET TO CLIMB RATING (hand-set — monitor N1/ITT against the OFP; no autothrottle to hold it) 🟩
- APU …… AS REQUIRED
- Landing lights …… OFF THROUGH 10,000 FT / AS REQUIRED; flight attendant notified

## Cruise
- Thrust rating …… CRUISE (hand-set; cross-check N1/fuel flow against OFP periodically — sustained manual thrust management is a workload item on this type) 🟧
- Cabin signs …… AS REQUIRED
- Fuel …… MONITORED vs OFP, imbalance checked
- Step climbs …… AS PLANNED

## Descent / Approach
- Cabin signs / landing lights …… ON
- Altimeters (at transition) …… SET, CROSS-CHECKED
- Landing data / speeds (Vref / go-around safety speed / target, for the planned flap setting) …… CHECKED, SET
- Approach brief …… COMPLETE
- FMS / RMU …… SET FOR APPROACH
- Inbound approach course …… SET
- Speedbrake …… CLOSED
- Crossfeed …… CLOSED — **do not** cross-feed for takeoff, landing or go-around on this type 🟩

## Landing 🟥
- **Flight attendant …… NOTIFIED**
- **Landing gear …… DOWN, 3 GREEN**
- **Flaps …… SET per conditions** (full-flap standard; a reduced flap setting is used at the captain's discretion for crosswind/gusty/CAT II conditions per company policy) 🟩
- **Thrust rating …… TAKEOFF/GO-AROUND ARMED**
- **Autopilot / yaw damper …… OFF BY THE COMPANY-SPECIFIED HEIGHT AGL** `[VERIFY]`

## After landing
- Flaps …… UP
- Trims …… RESET
- Taxi lights …… ON
- Exterior lights …… OFF (as required)
- APU …… AS REQUIRED

## Shutdown / Secure
- Parking brake …… SET
- Thrust levers …… IDLE
- Hydraulic pumps …… OFF
- Nosewheel steering …… DISENGAGED
- Engine start/stop selectors …… STOP
- Rotating beacon …… OFF
- Cabin signs …… AS REQUIRED
- Standby attitude indicator …… CAGED
- Fuel pumps …… OFF
- GPU …… CONNECTED (as required)
- APU …… OFF
- Avionics master / batteries …… OFF

---

## Sources & References
*Public URLs only. Private/OEM/add-on documents may inform content but must never be listed here.*

- SKYbrary — Embraer ERJ 145 (E145) — https://skybrary.aero/aircraft/e145
- Embraer — commercial aircraft (public) — https://www.embraer.com
- X-Crafts — ERJ Family (product overview, systems scope) — https://www.xcrafts.com/erj-family

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-25 | Initial draft — generic ERJ-145 EICAS/conventional-flight-control normal flow re-expressed; no-autothrottle (manual thrust every phase) called out as a real-aircraft fact, not a model limitation; Before-takeoff/Landing marked 🟥; model-dependent items 🟧. |
