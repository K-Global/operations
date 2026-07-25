<!--
================================================================================
  K Global — AIRFRAME PACK · CHECKLIST  ·  PC12 Pilatus PC-12
  Curated normal checklist, tailored to the approved sim model.
  FLAG LEGEND  🟥 memory/critical item   🟧 caution/model-dependent   🟩 normal
================================================================================
-->

# PC12 — Pilatus PC-12 · Normal Checklist

**PC12 / Pilatus PC-12** · flown as Carenado PC-12 HD Series 🟧 `[VERIFY — model]` · sim = X-Plane 11
**Version** v0.1 · **Updated** 2026-07-25 · **Status** Draft

> **Read-me:** K Global normal-ops flow for X-Plane 11. **The aircraft's own AFM/checklist is authoritative** — where the sim model differs from the real aircraft, the 🟧 note says so. This is a cockpit quick-reference, not a certified checklist, re-expressed in K Global's own words (no verbatim OEM text). **This is a single-engine turboprop, single-pilot-certified aircraft — not a jet and not the same flow as the E35L/GLF/FA7X/CL30 twin-jet types in the same Executive group.** No APU, no dual-engine considerations, no crossfeed-between-engines logic; electric (not hydraulic) landing gear and flaps. Flag legend 🟥 memory/critical · 🟧 model-dependent · 🟩 normal.

---

*Format: **CHALLENGE …… RESPONSE**. Single PT6A-67P turboprop, Honeywell Primus Apex-class avionics (variant match `[VERIFY]` — see Sim-Model §2). Certified single-pilot; K Global's own crewing policy is a separate OM A/D question (Intro §3). Model-dependent items flagged 🟧. Verify each item against the flown model before line use `[VERIFY]`.*

## Preflight / Walk-around
- Documents / OFP / navlog …… ABOARD, CHECKED
- Exterior walk-around — single engine inlet, propeller/spinner condition, control surfaces, fuel drains/vents …… COMPLETE
- Fuel quantity (both wing tanks) / contamination check …… CHECKED vs OFP
- Static ports / pitot cover …… CLEAR, REMOVED
- Landing gear / electric actuator visual check …… CONDITION NORMAL 🟧 (electric-actuator fault modelling not confirmed, Sim-Model §4)
- Battery …… ON, CHECKED (no APU fitted — start power is battery/external only)

## Before start
- Cockpit prep …… COMPLETE
- Seatbelt signs …… ON / AUTO
- Parking brake …… SET
- Condition lever …… FUEL CUT-OFF
- Power lever …… IDLE / GROUND FINE
- Avionics / Primus Apex-class displays …… ON, SELF-TEST COMPLETE 🟧 (panel/avionics variant match `[VERIFY]`, Sim-Model §2)
- Flight-plan / FMS setup …… SET & CROSS-CHECKED
- Stall-protection (shaker/pusher) system test, if fitted and testable …… TESTED, ARMED 🟧 (presence/fidelity not confirmed on this model, Sim-Model §4)
- Area / clear of propeller …… CONFIRMED CLEAR

## Engine start (single PT6A-67P)
- Fuel boost pump …… ON AS REQUIRED
- Starter …… ENGAGE
- Condition lever …… LOW IDLE at the specified NG per the flow
- ITT during start …… MONITORED, WITHIN START LIMIT 🟧 (start-abort/over-temperature logic model-dependent)
- Oil pressure …… RISING, WITHIN LIMITS
- Generator …… ON, LOAD NORMAL (single generator — no second engine-driven source, see QRH Ch 4)
- Avionics / systems check …… NORMAL

## Before taxi
- Flight controls …… CHECKED FULL & FREE
- Flaps …… SET FOR TAKEOFF
- Trim (pitch/rudder/aileron) …… SET FOR TAKEOFF
- Autopilot / flight director …… AS REQUIRED
- Brakes …… CHECKED
- Icing conditions — pneumatic boots / prop / engine inlet anti-ice …… AS REQUIRED

## Before takeoff 🟥
- **Flaps …… CONFIRMED SET FOR TAKEOFF**
- **Trim …… CONFIRMED SET**
- **Flight controls …… FREE & CORRECT**
- **Fuel …… SUFFICIENT, BOOST PUMP ON**
- **Stall-protection system …… ARMED** 🟧 (confirm fitted/modelled, Sim-Model §4)
- **Transponder …… ON**
- **Runway / heading …… CONFIRMED, LINED UP**
- **Power (torque/ITT/NG set per chart) …… CONFIRMED**

## Takeoff / Climb
- Power lever …… SET PER TAKEOFF TORQUE, MONITORED (ITT/NG within limits)
- Rotate / initial climb speed …… PER PERF DATA
- Landing gear …… UP (electric retraction confirmed) 🟧 (retraction-fault modelling not confirmed)
- Flaps …… RETRACTED ON SCHEDULE
- Climb power / speed …… SET per chart
- Pressurisation …… CLIMBING NORMALLY, CABIN ALTITUDE MONITORED

## Cruise
- Altitude …… SET per OFP (typical cruise ~285 kn, ceiling FL300)
- Power (torque/ITT/NG) …… SET PER CRUISE CHART, MONITORED
- Fuel …… MONITORED vs OFP, tank balance checked
- Icing / anti-ice …… AS REQUIRED
- Cabin altitude / pressurisation …… MONITORED

## Descent / Approach
- Descent / approach brief …… COMPLETE
- Altimeter (transition) …… SET
- Landing performance / VREF / flap setting …… CHECKED, SET
- Fuel …… SUFFICIENT, RESERVES CONFIRMED
- Seatbelt signs …… ON
- Stall-protection system …… CONFIRMED ARMED 🟧

## Landing 🟥
- **Landing gear …… DOWN, CONFIRMED (electric gear-position indication) 3 GREEN**
- **Flaps …… SET FOR LANDING**
- **Power lever …… AS REQUIRED FOR APPROACH SPEED CONTROL**
- **Stall-protection system …… ARMED** 🟧
- **Go-around power / configuration …… BRIEFED**

## After landing
- Flaps …… RETRACTED
- Landing/taxi lights …… AS REQUIRED
- Transponder …… AS REQUIRED (ground)
- Icing protection …… OFF AS APPROPRIATE

## Shutdown / Secure
- Parking brake …… SET (or chocks in)
- Condition lever …… FUEL CUT-OFF
- Avionics / electrical …… OFF (battery/generator as required)
- Beacon …… OFF
- Aircraft …… SECURED (per secure-cockpit flow if last leg)

---

## Sources & References
*Public URLs only. Private/OEM/add-on documents may inform content but must never be listed here.*

- Pilatus Aircraft — PC-12 Technical Data — https://www.pilatus-aircraft.com/en/pc-12/technical-data
- SKYbrary — Pilatus PC-12 (PC12) — https://skybrary.aero/aircraft/pc12
- AOPA — Pilatus PC-12 aircraft guide — https://www.aopa.org/go-fly/aircraft-and-ownership/aircraft/pilatus-pc-12
- Wikipedia — Pilatus PC-12 — https://en.wikipedia.org/wiki/Pilatus_PC-12

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-25 | Initial draft — single-engine turboprop, single-pilot-capable normal flow re-expressed; deliberately simpler than the twin-jet Executive-unit checklists (no APU, no dual-engine crossfeed logic, electric not hydraulic gear/flaps); Before-takeoff/Landing marked 🟥; model-dependent items 🟧. |
