<!--
================================================================================
  K Global — AIRFRAME PACK · CHECKLIST  ·  FA7X Dassault Falcon 7X
  Curated normal checklist, tailored to the approved sim model.
  FLAG LEGEND  🟥 memory/critical item   🟧 caution/model-dependent   🟩 normal
================================================================================
-->

# FA7X — Dassault Falcon 7X · Normal Checklist

**FA7X / Dassault Falcon 7X** · trijet (3 × PW307A) · Dassault DFCS fly-by-wire · EASy II (Honeywell Primus Epic) flight deck · crew of two
**Version** v0.1 · **Updated** 2026-07-25 · **Status** Draft

> **Read-me:** K Global normal-ops flow, re-expressed in K Global's own words — **no verbatim OEM text**. **The aircraft's own checklist/CAS is authoritative.** No sim model is yet confirmed for this type (see Sim-Model) — every item here is a **real-aircraft-flow reference**, not a validated sim procedure; treat every step as 🟧 model-unconfirmed until a candidate exists and is tested. Flag legend 🟥 memory/critical · 🟧 model-dependent/unconfirmed · 🟩 normal.

---

*Format: **CHALLENGE …… RESPONSE**. Generic Falcon 7X trijet/EASy flow, crew of two (PF/PM). All items carry the model caveat above even where not individually re-flagged.*

## Preflight / Cockpit prep
- Documents / OFP / navlog …… ABOARD, CHECKED
- External inspection — **note all three engine inlets**, including the **centre (S-duct) inlet**, for FOD/obstruction 🟥 (the tail-mounted centre engine's inlet is less visible from the ramp than the wing engines' — a deliberate, unhurried look is warranted)
- Batteries …… ON
- External power / APU …… AS REQUIRED, POWER AVAIL
- EASy II displays (PFD/MFD/CAS pages) …… POWERED, SELF-TEST COMPLETE, NO CAS MESSAGE OUTSTANDING
- DFCS (fly-by-wire) built-in test …… COMPLETE, NO FAULT ANNUNCIATED 🟧
- Fuel quantity / distribution (3 tanks feeding 3 engines) …… CHECKED vs OFP
- Flight controls (sidestick, rudder, trim — elec avail) …… CHECKED FULL & FREE, FBW RESPONSE NORMAL
- FMS init (route, performance, ZFW/CG, fuel) …… SET & CROSS-CHECKED
- Takeoff data (V1/VR/V2, flap setting, trim) …… ENTERED, CROSS-CHECKED
- Baro / altimeters …… SET
- Departure brief …… COMPLETE, **steep-approach/short-field arrival note if applicable** (see §"Descent/Approach" below)

## Before start
- Cockpit prep …… COMPLETE
- Signs (seatbelts / no-smoking) …… ON / AUTO
- ATC clearance …… OBTAINED
- Doors / baggage compartment …… CLOSED, CAS DOORS PAGE CLEAR
- Fuel pumps …… ON, ALL THREE FEED PATHS CONFIRMED
- Beacon …… ON
- Parking brake …… SET
- Pushback / area …… CLEAR, CLEARANCE RECEIVED (if applicable)

## Engine start — three-engine sequence 🟥
- APU bleed (for start air) …… AS REQUIRED, AVAILABLE
- **Start sequence** …… PER TYPE FLOW 🟧 `[VERIFY]` — the centre engine's S-duct inlet and start-air routing differ from the wing engines; K Global has not independently confirmed a specific start order against a primary Dassault source in this pass. Generic trijet practice starts one engine at a time, cross-checking N1/N2/EGT/oil pressure before advancing to the next; do not assume a Boeing- or McDonnell Douglas-style order applies without verification.
- Each engine (FADEC-controlled start) …… STARTED, PARAMETERS NORMAL, NO HOT-START INDICATION
- ENG mode / start selector …… NORM after all three stable
- Anti-ice …… AS REQUIRED
- CAS …… CHECKED, NO ABNORMAL MESSAGE
- Ground equipment / GPU …… DISCONNECTED, CLEAR

## Before taxi
- Flight controls (DFCS) …… CHECKED FULL TRAVEL, NO FAULT FLAG
- Flaps …… SET FOR TAKEOFF (per perf data)
- Trim …… SET TO TAKEOFF POSITION, CROSS-CHECKED
- Autobrake …… AS REQUIRED (RTO)
- Weather radar …… ON / AUTO
- CAS takeoff memo …… REVIEWED, NO OUTSTANDING CAUTION/WARNING
- Ground spoilers armed / signs / cabin …… CHECKED

## Before takeoff 🟥
- **Cabin …… SECURE**
- **Flaps …… CONFIRMED per takeoff data**
- **Trim …… CONFIRMED SET**
- **Flight controls (DFCS) …… FREE & CORRECT, NO FAULT**
- **Takeoff configuration (CAS clear) …… CONFIRMED**
- **Transponder / TCAS …… TA/RA, ON**
- **Runway / heading …… CONFIRMED, LINED UP**
- **Landing / strobe lights …… ON**
- **Autothrottle / thrust mode …… CONFIRMED, ALL THREE ENGINES SET**

## After takeoff / Climb
- Landing gear …… UP, DOORS CLOSED
- Flaps …… RETRACTED ON SCHEDULE
- Ground spoilers …… DISARMED
- Climb thrust / autoflight (DFCS-coupled) …… SET, ENGAGED
- Packs / bleed (all three engine sources) …… ON, BALANCED
- Baro → STD (at transition) …… SET
- Landing lights …… OFF ABOVE 10,000 FT / AS REQUIRED

## Cruise
- Altitude / Mach / CI …… SET per OFP (typical M0.80, max M0.90; ceiling **FL510**)
- Fuel …… MONITORED vs OFP, three-engine burn cross-checked, imbalance watched
- Systems / CAS …… NORMAL
- Cabin altitude …… MONITORED (relevant given the type's high service ceiling — see QRH Ch 9)
- Step climbs …… AS PLANNED

## Descent / Approach
- Descent / approach brief …… COMPLETE, **including steep-approach/short-field profile if the destination requires it** 🟧 (Falcon 7X is commonly cited as an LCY/steep-approach-class candidate — see Intro §3, Dispatch §6; not an operator approval, confirm applicability before briefing it as a cleared procedure)
- Baro (at transition level) …… SET
- Landing performance / VAPP / flap setting …… CHECKED, SET (short-field figures favourable — verify against actual field before use)
- Fuel …… SUFFICIENT, RESERVES CONFIRMED
- Signs …… ON
- CAS / autoflight …… SET FOR APPROACH
- Minima …… SET

## Landing 🟥
- **Cabin …… SECURE**
- **Landing gear …… DOWN, THREE GREEN**
- **Flaps …… LANDING CONFIG per perf**
- **Ground spoilers …… ARMED**
- **Autobrake …… SET AS REQUIRED**
- **CAS landing memo …… ALL CLEAR**
- **Go-around altitude / thrust …… SET** — note wing-engine thrust reversers only; **centre engine has no reverser** 🟧 (typical S-duct trijet arrangement — confirm against a primary source before relying on this for landing-distance planning)

## After landing
- Ground spoilers / reversers (wing engines only) …… STOWED
- Flaps …… RETRACTED
- Autobrake …… DISARMED
- APU …… START AS REQUIRED
- Weather radar …… OFF
- Transponder …… AS REQUIRED (STBY/ground)
- Landing / strobe lights …… AS REQUIRED

## Shutdown / Secure
- Parking brake …… SET (or chocks in)
- All three engines …… OFF, sequence per type flow 🟧 `[VERIFY]`
- Seatbelt signs …… OFF
- Beacon …… OFF
- Fuel pumps …… OFF (as required)
- External power / APU …… AS REQUIRED
- CAS status / doors …… CHECKED
- Aircraft …… SECURED (per secure-cockpit flow if last leg)

---

## Sources & References
*Public URLs only. Private/OEM/add-on documents may inform content but must never be listed here.*

- Dassault Aviation / Dassault Falcon — Falcon 7X aircraft page — https://www.dassaultfalcon.com/aircraft/falcon-7x
- Wikipedia — Dassault Falcon 7X (DFCS, EASy, PW307A, S-duct centre engine) — https://en.wikipedia.org/wiki/Dassault_Falcon_7X
- EASA — Type Certificate Data Sheet A155 (Dassault Falcon 7X) — https://www.easa.europa.eu/en/document-library/type-certificates
- SKYbrary — Fly-By-Wire (general) — https://skybrary.aero/articles/fly-wire-flight-control-system

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-25 | Initial draft — generic Falcon 7X trijet/EASy II normal flow re-expressed; three-engine start sequence flagged 🟧 `[VERIFY]` (no primary source confirmed in this pass); Before-takeoff/Landing marked 🟥; centre-engine no-reverser note flagged 🟧; steep-approach/LCY candidacy carried through at the approach brief step; every item carries the "no confirmed sim model" caveat per Sim-Model. |
