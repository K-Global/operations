<!--
================================================================================
  K Global — AIRFRAME PACK · CHECKLIST  ·  CRJ9 Bombardier CRJ900
  Curated normal checklist, tailored to the approved sim model.
  FLAG LEGEND  🟥 memory/critical item   🟧 caution/model-dependent   🟩 normal
================================================================================
-->

# CRJ9 — Bombardier CRJ900 · Normal Checklist

**CRJ9 / CRJ series** · flown as AD Simulations/DeltaWing CRJ-900 🟧 `[VERIFY — model]` · sim = X-Plane 11
**Version** v0.1 · **Updated** 2026-07-25 · **Status** Draft

> **Read-me:** K Global normal-ops flow for X-Plane. **The aircraft's own EICAS / electronic checklist is authoritative** — where the sim model differs, the 🟧 note says so. This is a cockpit quick-reference, not a certified checklist, and re-expressed in K Global's own words (no verbatim OEM text). The CRJ900 uses the **same Rockwell Collins Pro Line 4** avionics and EICAS-style caution/warning philosophy as the CRJ7 — this flow is **identical in structure** to the **[CRJ7 Checklist](../crj7/checklist.md)**; only weight/perf-driven data items differ. Flight controls are **conventional, cable/hydraulic-actuated through a yoke** — this is **not** a fly-by-wire aircraft; there is no envelope-protection law. The wing carries **leading-edge slats** (Intro §6) — this is not the hard-wing CRJ-200. Flag legend 🟥 memory/critical · 🟧 model-dependent · 🟩 normal.

---

*Format: **CHALLENGE …… RESPONSE**. Generic CRJ900 (Pro Line 4) flow, mirrored from the CRJ7. Model-dependent items are flagged 🟧. Verify each item against the flown model before line use `[VERIFY]`.*

## Preflight / Cockpit prep
- Documents / OFP / navlog …… ABOARD, CHECKED
- Circuit breakers / gear pins / covers …… STOWED / NORMAL
- Batteries (main / APU) …… ON
- External power / APU …… AS REQUIRED, POWER AVAIL
- EICAS status / message list …… REVIEWED, NO OPEN ITEM
- Fuel quantity / distribution …… CHECKED vs OFP
- Flight controls (yoke, rudder, trim) …… CHECKED FULL & FREE
- FMS/CDU init (route, perf, fuel, ZFW/CG) …… SET & CROSS-CHECKED
- Takeoff data (V1/VR/V2, thrust rating, trim, flap setting) …… ENTERED, CROSS-CHECKED
- Baro / altimeters …… SET
- Departure brief …… COMPLETE

## Before start
- Cockpit prep …… COMPLETE
- Signs (seatbelts / no-smoking) …… ON / AUTO
- ATC clearance …… OBTAINED
- Doors / cargo …… CLOSED, EICAS DOORS INDICATION CLEAR
- Fuel boost pumps …… AUTO/ON per flow
- Beacon …… ON
- Thrust levers …… IDLE
- Parking brake …… SET
- Pushback / area …… CLEAR, CLEARANCE RECEIVED

## After start
- APU bleed / GPU (for start) …… AS REQUIRED
- Engine start sequence (No. 2 then No. 1 per flow, ignition AUTO/ON, FADEC-monitored start) …… STARTED, PARAMETERS NORMAL 🟧 (start-sequencing detail is model-dependent)
- APU …… STOP once engines self-sustain (or AS REQUIRED)
- Anti-ice …… AS REQUIRED
- EICAS …… CHECKED, NO ABNORMAL MESSAGE
- Ground equipment / GPU …… DISCONNECTED, CLEAR

## Before taxi
- Flight controls …… CHECKED (full travel, yoke/rudder/trim) 🟧 (indication depth is model-dependent)
- Flaps / slats …… SET FOR TAKEOFF (per takeoff data)
- Pitch trim …… SET per takeoff data
- Rudder trim …… ZERO / AS REQUIRED
- Ground lift dumping (spoilers) / autobrake …… ARMED / AS REQUIRED per field
- Bleed / packs …… ON, AS REQUIRED
- EICAS TAKE OFF CONFIG message …… REVIEWED, NO CAUTION/WARNING
- Signs / cabin …… CHECKED

## Before takeoff 🟥
- **Cabin …… SECURE**
- **Flaps / slats …… CONFIRMED per takeoff data**
- **Trim …… CONFIRMED SET**
- **Flight controls …… FREE & CORRECT**
- **TAKE OFF CONFIG (EICAS message clear) …… CONFIRMED**
- **Transponder / TCAS …… TA/RA, ON**
- **Runway / heading …… CONFIRMED, LINED UP**
- **Landing lights / strobes …… ON**
- **Thrust rating (TO/flex) …… CONFIRMED, SET**

## After takeoff / Climb
- Landing gear …… UP, DOORS CLOSED
- Flaps / slats …… RETRACTED ON SCHEDULE
- Ground lift dumping …… DISARMED
- Climb thrust rating (CRZ transition) / autopilot …… SET, ENGAGED 🟧 (thrust-rating-mode transition logic is model-dependent — confirm CRZ mode engages correctly after TO)
- Packs / bleed …… ON
- Baro → STD (at transition) …… SET
- Landing lights …… OFF ABOVE 10,000 / AS REQUIRED

## Cruise
- Altitude / Mach / CI …… SET per OFP (typical M0.80) `[VERIFY]`
- Fuel …… MONITORED vs OFP, crossfeed/boost pumps checked
- EICAS / systems …… NORMAL, no open message
- Route / FMS …… MONITORED, next-leg data cross-checked

## Descent / Approach
- Descent / approach brief …… COMPLETE
- Baro (at transition level) …… SET
- Landing perf / VREF / flap setting …… CHECKED, SET
- Fuel …… SUFFICIENT, RESERVES CONFIRMED
- Signs …… ON
- EICAS / autoflight …… SET FOR APPROACH
- Minima …… SET

## Landing 🟥
- **Cabin …… SECURE**
- **Landing gear …… DOWN, 3 GREEN**
- **Flaps …… FULL / AS REQUIRED per perf**
- **Ground lift dumping (spoilers) …… ARMED**
- **Autobrake …… SET AS REQUIRED**
- **EICAS landing message …… CLEAR**
- **Go-around altitude / thrust …… SET**

## After landing
- Ground lift dumping / thrust reversers …… STOWED
- Flaps …… RETRACTED
- Autobrake …… DISARMED
- APU …… START AS REQUIRED
- Transponder …… AS REQUIRED (STBY/ground)
- Landing / strobe lights …… AS REQUIRED

## Shutdown / Secure
- Parking brake …… SET (or chocks in)
- Engines (both) …… OFF per shutdown flow
- Seatbelt signs …… OFF
- Beacon …… OFF
- Fuel boost pumps …… AUTO/OFF as required
- External power / APU …… AS REQUIRED
- EICAS status / doors …… CHECKED
- Aircraft …… SECURED (per secure-cockpit flow if last leg)

---

## Sources & References
*Public URLs only. Private/OEM/add-on documents may inform content but must never be listed here.*

- SKYbrary — Bombardier CRJ-900 (CRJ9) — https://skybrary.aero/aircraft/crj9
- MHI RJ Aviation Group (CRJ program, successor to Bombardier) — https://www.mhi.com/business/products-services/aviation/aircraft-aftermarket-service/crj
- DeltaWing Simulations — CRJ-900 (systems scope, X-Plane.Org Store) — https://store.x-plane.org/CRJ-900_p_1592.html

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-25 | Initial draft — generic Pro Line 4/EICAS normal flow re-expressed for the CRJ900 (conventional yoke, no fly-by-wire, slatted wing), mirroring the CRJ7 Checklist structure; Before-takeoff/Landing marked 🟥; model-dependent items 🟧 |
