<!--
================================================================================
  K Global — AIRFRAME PACK · CHECKLIST  ·  E35L Embraer Legacy 650 (EMB-135BJ)
  Curated normal checklist, tailored to the approved sim model.
  FLAG LEGEND  🟥 memory/critical item   🟧 caution/model-dependent   🟩 normal
================================================================================
-->

# E35L — Embraer Legacy 650 · Normal Checklist

**E35L / EMB-135BJ Legacy 650** · flown as X-Crafts ERJ Family (Legacy 650 variant) 🟧 `[VERIFY — model]` · sim = X-Plane 11
**Version** v0.1 · **Updated** 2026-07-25 · **Status** Draft

> **Read-me:** K Global normal-ops flow for X-Plane 11. **The aircraft's own AFM/checklist is authoritative** — where the sim model differs from the real jet, the 🟧 note says so. This is a cockpit quick-reference, not a certified checklist, re-expressed in K Global's own words (no verbatim OEM text). Twin-engine, crew-of-two, Honeywell Primus Elite CAS/EICAS-style flow — **not** the same profile as the PC12 single-engine/single-pilot type in the same Executive group. Flag legend 🟥 memory/critical · 🟧 model-dependent · 🟩 normal.

---

*Format: **CHALLENGE …… RESPONSE**. Generic large-cabin twin-jet flow for a FADEC-controlled Rolls-Royce AE 3007A2 powerplant and Primus Elite avionics. Model-dependent items flagged 🟧. Verify each item against the flown model before line use `[VERIFY]`.*

## Preflight / Cockpit prep
- Documents / OFP / navlog …… ABOARD, CHECKED
- Exterior walk-around (incl. engine inlets/nacelles, control surfaces) …… COMPLETE
- Battery(s) …… ON
- External power / APU (Sundstrand-class APU) …… AS REQUIRED, POWER AVAIL
- CAS / crew-alerting page …… REVIEWED, NO BLOCKING FAULT
- Fuel quantity / distribution …… CHECKED vs OFP
- Flight controls (electrical power avail) …… CHECKED FULL & FREE
- Primus Elite FMS init (route, perf, ZFW/CG, fuel) …… SET & CROSS-CHECKED
- Takeoff data (V1/VR/V2, thrust setting, trim) …… ENTERED, CROSS-CHECKED
- Baro / altimeters …… SET
- Departure brief …… COMPLETE

## Before start
- Cockpit prep …… COMPLETE
- Signs (seatbelts / no-smoking) …… ON / AUTO
- ATC clearance …… OBTAINED
- Doors / baggage compartment …… CLOSED, CAS PAGE CLEAR
- Fuel pumps/boost …… ON AS REQUIRED
- Beacon …… ON
- Thrust levers …… IDLE
- Parking brake …… SET
- Pushback / area …… CLEAR, CLEARANCE RECEIVED

## Engine start
- APU / external air (for start, as required) …… AVAIL
- Engine start sequence (FADEC-controlled AE 3007A2, No.2 then No.1 or per flow) …… STARTED, ITT/N1/N2 WITHIN LIMITS 🟧 (FADEC start-abort logic model-dependent)
- Generators …… ON, LOAD SHARING NORMAL
- Anti-ice …… AS REQUIRED
- CAS status …… CHECKED, NO ABNORMAL
- Ground equipment / GPU …… DISCONNECTED, CLEAR

## Before taxi
- Flight controls …… CHECKED (full travel) 🟧 (check depth model-dependent)
- Flaps …… SET FOR TAKEOFF per perf
- Pitch trim …… SET per takeoff data
- Autobrake …… AS REQUIRED
- Weather radar …… ON / AUTO
- CAS takeoff-configuration check …… REVIEWED, NO CAUTION/WARNING
- Ground spoilers/lift-dump armed (if fitted) / signs / cabin …… CHECKED

## Before takeoff 🟥
- **Cabin …… SECURE**
- **Flaps …… CONFIRMED per takeoff data**
- **Trim …… CONFIRMED SET**
- **Flight controls …… FREE & CORRECT**
- **Takeoff configuration (CAS clear) …… CONFIRMED**
- **Transponder / TCAS …… TA/RA, ON**
- **Runway / heading …… CONFIRMED, LINED UP**
- **Landing lights / strobes …… ON**
- **Thrust setting (FADEC-managed) …… CONFIRMED**

## After takeoff / Climb
- Landing gear …… UP, DOORS CLOSED
- Flaps …… RETRACTED ON SCHEDULE
- Climb thrust / autoflight …… SET, ENGAGED
- Bleed / pressurisation …… ON, CLIMBING NORMALLY
- Baro → STD (at transition) …… SET
- Landing lights …… OFF ABOVE 10,000 FT / AS REQUIRED

## Cruise
- Altitude / Mach / cost index …… SET per OFP (M0.78 typical, max M0.80)
- Fuel …… MONITORED vs OFP, imbalance checked
- CAS / systems …… NORMAL
- Cabin altitude / pressurisation …… MONITORED

## Descent / Approach
- Descent / approach brief …… COMPLETE
- Baro (at transition level) …… SET
- Landing perf / VAPP / flap config …… CHECKED, SET
- Fuel …… SUFFICIENT, RESERVES CONFIRMED
- Signs …… ON
- CAS / autoflight …… SET FOR APPROACH
- Minima …… SET
- **Steep-approach/LCY note:** not an approved profile at K Global (Intro §1, §7) — do not fly a steep-glidepath approach on this basis without separate confirmation

## Landing 🟥
- **Cabin …… SECURE**
- **Landing gear …… DOWN, 3 GREEN**
- **Flaps …… FULL / LANDING CONFIG per perf**
- **Autobrake …… SET AS REQUIRED**
- **CAS landing memo …… CLEAR**
- **Go-around altitude / thrust …… SET**

## After landing
- Flaps …… RETRACTED
- Autobrake …… DISARMED
- APU …… START AS REQUIRED
- Weather radar …… OFF
- Transponder …… AS REQUIRED (STBY/ground)
- Landing / strobe lights …… AS REQUIRED

## Shutdown / Secure
- Parking brake …… SET (or chocks in)
- Engines …… OFF (per shutdown flow, ITT cooldown observed) 🟧 (cooldown-timer logic model-dependent)
- Seatbelt signs …… OFF
- Beacon …… OFF
- Fuel pumps …… OFF (as required)
- External power / APU …… AS REQUIRED
- CAS status / doors …… CHECKED
- Aircraft …… SECURED (per secure-cockpit flow if last leg)

---

## Sources & References
*Public URLs only. Private/OEM/add-on documents may inform content but must never be listed here.*

- Wikipedia — Embraer Legacy 600 (incl. Legacy 650 variant table) — https://en.wikipedia.org/wiki/Embraer_Legacy_600
- fstc.eu — Embraer EMB-135BJ Legacy 600/650 type-rating course reference (Primus Elite, systems basis) — https://fstc.eu/flight-crew-pilots/typeratings/airplane/embraer-emb-135bj-legacy-600-650/
- X-Crafts — ERJ Family product page (systems scope) — https://www.xcrafts.com/erj-family

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-25 | Initial draft — twin-jet, crew-of-two, Primus Elite/CAS-based normal flow re-expressed for the AE 3007A2/FADEC powerplant; Before-takeoff/Landing marked 🟥; model-dependent items 🟧. |
