<!--
================================================================================
  K Global — AIRFRAME PACK · CHECKLIST  ·  CL30 Bombardier Challenger 300
  Curated normal checklist, tailored to the identified sim candidate.
  FLAG LEGEND  🟥 memory/critical item   🟧 caution/model-dependent   🟩 normal
================================================================================
-->

# CL30 — Bombardier Challenger 300 · Normal Checklist

**CL30 / Bombardier Challenger 300** · flown as the identified X-Plane 11 candidate 🟧 `[VERIFY — model]` · sim = X-Plane 11
**Version** v0.1 · **Updated** 2026-07-25 · **Status** Draft

> **Read-me:** K Global normal-ops flow for X-Plane 11, crew of two. **The aircraft's own checklist/AFM is authoritative** — where the sim model differs from the real jet, the 🟧 note says so. This is a cockpit quick-reference, not a certified checklist, re-expressed in K Global's own words (no verbatim OEM text). Conventional flight controls (manual ailerons, hydraulic elevator/rudder with mechanical reversion) and Rockwell Collins Pro Line 21-style avionics — not a fly-by-wire/ECAM aircraft, unlike the A339. Flag legend 🟥 memory/critical · 🟧 model-dependent · 🟩 normal.

---

*Format: **CHALLENGE …… RESPONSE**. Generic super-midsize twin-turbofan flow (2 × Honeywell HTF7000). Model-dependent items are flagged 🟧 (the identified candidate builds nav/FMS on default X-Plane logic — see Sim-Model §2–§4). Verify each item against the flown build before line use `[VERIFY]`.*

## Preflight / Cockpit prep
- Documents / OFP / navlog …… ABOARD, CHECKED
- Exterior inspection …… COMPLETE, covers/pins REMOVED
- Circuit breakers …… SET, IN
- Batteries (L/R) …… ON
- External power / APU …… AS REQUIRED, POWER AVAIL
- Crew oxygen masks / smoke goggles …… CHECKED
- Fuel quantity / distribution …… CHECKED vs OFP
- Crew-alerting / status page …… REVIEWED, NO BLOCKING FAULT 🟧 (alerting depth per Sim-Model §3)
- Flight controls (conventional — ailerons manual, elevator/rudder hydraulic) …… CHECKED FULL & FREE
- FMS init (route, perf, ZFW/ZFWCG, fuel) …… SET & CROSS-CHECKED 🟧 (default-FMS-core candidate — see Sim-Model §2)
- Takeoff data (V1/VR/V2, thrust setting, trim) …… ENTERED, CROSS-CHECKED
- Baro / altimeters …… SET
- Departure brief …… COMPLETE

## Before start
- Cockpit prep …… COMPLETE
- Signs (seatbelts / no-smoking) …… ON / AUTO
- ATC clearance …… OBTAINED
- Doors / baggage …… CLOSED, CHECKED
- Fuel pumps …… ON AS REQUIRED
- Beacon …… ON
- Thrust levers …… IDLE
- Parking brake …… SET
- Pushback / area …… CLEAR, CLEARANCE RECEIVED

## After start
- APU bleed (for start) …… AS REQUIRED
- Engine start (L then R, or per flow) …… STARTED, PARAMETERS NORMAL 🟧 (HTF7000 start-limit fidelity — Sim-Model §4)
- Generators …… ON, CHECKED
- Anti-ice (engine/wing) …… AS REQUIRED
- Crew-alerting / status …… CHECKED, NO ABNORMAL
- Ground equipment / GPU …… DISCONNECTED, CLEAR

## Before taxi
- Flight controls …… CHECKED (full travel, both sides) 🟧 (systems-depth candidate — see Sim-Model §3)
- Flaps …… SET FOR TAKEOFF per perf
- Pitch trim …… SET per takeoff data
- Rudder trim …… ZERO / AS REQUIRED
- Autobrake …… AS REQUIRED (RTO/AS SELECTED)
- Weather radar …… ON / STANDBY 🟧 (default-radar candidate — Sim-Model §4)
- Takeoff-config check …… REVIEWED, NO WARNING
- Ground spoilers / speed brakes armed / cabin …… CHECKED

## Before takeoff 🟥
- **Cabin …… SECURE**
- **Flaps …… CONFIRMED per takeoff data**
- **Pitch trim …… CONFIRMED SET**
- **Flight controls …… FREE & CORRECT**
- **Takeoff configuration …… CONFIRMED, NO WARNING**
- **Transponder / TCAS …… TA/RA, ON**
- **Runway / heading …… CONFIRMED, LINED UP**
- **Landing lights / strobes …… ON**
- **Autobrake / thrust mode …… CONFIRMED**

## After takeoff / Climb
- Landing gear …… UP, DOORS CLOSED
- Flaps …… RETRACTED ON SCHEDULE
- Speed brakes / spoilers …… STOWED, DISARMED
- Climb thrust / autoflight …… SET, ENGAGED
- Bleed / pressurisation …… CHECKED, CLIMBING NORMALLY
- Baro → STD (at transition) …… SET
- Landing lights …… OFF ABOVE 10,000 / AS REQUIRED

## Cruise
- Altitude / Mach / cost index …… SET per OFP (typical M0.80, max M0.83; FL450 ceiling)
- Fuel …… MONITORED vs OFP, IMBALANCE CHECKED
- EDTO/extended-diversion awareness …… NO OPERATOR RULE TIME ESTABLISHED — dispatch discipline only 🟧 (Dispatch §5)
- Systems / crew-alerting …… NORMAL
- Step climb …… AS PLANNED

## Descent / Approach
- Descent / approach brief …… COMPLETE
- Baro (at transition level) …… SET
- Landing performance / VREF / flap setting …… CHECKED, SET
- Fuel …… SUFFICIENT, RESERVES CONFIRMED
- Signs …… ON
- Autoflight / FMS approach mode …… SET FOR APPROACH 🟧 (approach-mode arming — Sim-Model §2)
- Minima …… SET

## Landing 🟥
- **Cabin …… SECURE**
- **Landing gear …… DOWN, 3 GREEN**
- **Flaps …… LANDING / per perf**
- **Speed brakes/spoilers …… ARMED**
- **Autobrake …… SET AS REQUIRED**
- **Landing-configuration check …… NO WARNING**
- **Go-around altitude / thrust …… SET**

## After landing
- Speed brakes/spoilers / thrust reversers …… STOWED
- Flaps …… RETRACTED
- Autobrake …… DISARMED
- APU …… START AS REQUIRED
- Weather radar …… OFF / STANDBY
- Transponder …… AS REQUIRED (STBY/ground)
- Landing / strobe lights …… AS REQUIRED

## Shutdown / Secure
- Parking brake …… SET (or chocks in)
- Engines (both) …… OFF
- Seatbelt signs …… OFF
- Beacon …… OFF
- Fuel pumps …… OFF (as required)
- External power / APU …… AS REQUIRED
- Batteries …… OFF
- Crew-alerting / doors …… CHECKED
- Aircraft …… SECURED (per secure-cockpit flow if last leg)

---

## Sources & References
*Public URLs only. Private/OEM/add-on documents may inform content but must never be listed here.*

- SKYbrary — Bombardier Challenger 300 (CL30) — https://skybrary.aero/aircraft/cl30
- Collins Aerospace — Pro Line 21 Advanced Upgrade for Challenger 300 and 605 — https://www.collinsaerospace.com/what-we-do/Business-Aviation/Flight-Deck/Pro-Line-21/Pro-Line-21-Advanced-Upgrade-For-Challenger-300-And-605
- X-Plane.Org Store — Bombardier Challenger 300 v2 Captain Edition (systems scope) — https://store.x-plane.org/Bombardier-Challenger-300-v2-Captain-Edition-XP11_p_749.html

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-25 | Initial draft — generic super-midsize twin-turbofan normal flow re-expressed for conventional controls / Pro Line 21-style avionics; Before-takeoff/Landing marked 🟥; model-dependent items 🟧 (default-FMS/WXR candidate). |
