<!--
================================================================================
  K Global — AIRFRAME PACK · CHECKLIST  ·  BCS3 Airbus A220-300
  Curated normal checklist, tailored to the approved sim model.
  FLAG LEGEND  🟥 memory/critical item   🟧 caution/model-dependent   🟩 normal
================================================================================
-->

# BCS3 — Airbus A220-300 · Normal Checklist

**BCS3 / A220 family — separate type rating BD-500** · no confirmed X-Plane 11 model 🟥 `[VERIFY — see Sim-Model]` · sim = X-Plane 11

**Version** v0.1 · **Updated** 2026-07-25 · **Status** Draft

> **Read-me:** K Global normal-ops flow for X-Plane 11, re-expressed in K Global's own words (no verbatim OEM text). **The aircraft's own Electronic Checklist (ECL) is authoritative** — the A220 presents normal/non-normal/procedure checklists on a flight-deck display (Collins-style EICAS + ECL), **not** an Airbus ECAM. This document is a cockpit quick-reference only, built generically because no sim model is yet confirmed (Sim-Model §1) — treat every step as 🟧 until validated against a flown build. Flag legend 🟥 memory/critical · 🟧 model-dependent/unverified · 🟩 normal.

---

**Two facts that shape this whole pack:** the A220 is flown under its **own BD-500 type rating** — no Cross-Crew Qualification with the Airbus A320/A330/A350 family, so do not assume a transferring Airbus pilot can fly this flow from memory. And the K Global A220-300 is **NOT steep-approach certified** (the A220-100 is) — do not brief or fly an LCY-style steep approach on this type.

*Format: **CHALLENGE …… RESPONSE**. Generic BD-500/A220-300 flow, re-expressed from public type knowledge — not copied from any manufacturer or operator document. The A220's fly-by-wire has only **two** control laws, Normal mode and Direct mode (no Airbus-style middle "Alternate law" tier) — do not brief Alternate-law behaviour on this type. Every item is 🟧 model-dependent until a sim candidate is confirmed (Sim-Model) `[VERIFY]`.*

## Preflight / Cockpit prep
- Documents / OFP / navlog …… ABOARD, CHECKED
- Ground locks / pins / covers …… STOWED / NORMAL 🟧 (depth unconfirmed, no model tested)
- Batteries …… ON
- External power / APU …… AS REQUIRED, POWER AVAIL
- IRS (inertial reference) …… ALIGN, NAV
- EICAS status / MEL …… REVIEWED, NO BLOCKING FAULT
- Fuel quantity / distribution …… CHECKED vs OFP
- Fly-by-wire system test …… COMPLETED, NO FAULT 🟧 (BD-500-specific self-test; confirm sim model simulates it)
- Sidestick / flight controls (if elec avail) …… CHECKED FULL & FREE
- FMS init (co-route, F-PLN, PERF, ZFW/ZFWCG, fuel) …… SET & CROSS-CHECKED
- Takeoff data (V1/VR/V2, thrust rating, trim, flap setting) …… ENTERED, CROSS-CHECKED
- Baro / altimeters / standby instrument (ISI) …… SET, CROSS-CHECKED
- Departure brief …… COMPLETE

## Before start
- Cockpit prep …… COMPLETE
- Signs (seatbelts / no-smoking) …… ON / AUTO
- ATC clearance …… OBTAINED
- Doors / cargo …… CLOSED, EICAS DOORS PAGE CLEAR
- Fuel pumps …… ON
- Beacon …… ON
- Thrust levers …… IDLE
- Parking brake …… SET
- Pushback / area …… CLEAR, CLEARANCE RECEIVED

## After start
- APU bleed (for start) …… AS REQUIRED
- Engine start (FADEC-controlled auto sequence, PW1500G) …… STARTED, PARAMETERS NORMAL 🟧 (auto-start logic depth model-dependent)
- Anti-ice (wing / cowl) …… AS REQUIRED
- EICAS status …… CHECKED, NO ABNORMAL
- Ground equipment / GPU …… DISCONNECTED, CLEAR

## Before taxi
- Flight controls …… CHECKED (full travel, EICAS F/CTL synoptic) 🟧 (synoptic depth model-dependent)
- Flaps / slats …… SET FOR TAKEOFF (config per perf)
- Pitch trim …… SET per takeoff data
- Rudder trim …… ZERO / AS REQUIRED
- Autobrake …… AS REQUIRED (RTO/MAX)
- Weather radar …… ON / AUTO 🟧 (fidelity unconfirmed, no model tested)
- EICAS takeoff memo/config check …… REVIEWED, NO CAUTION/WARNING
- Ground spoilers armed / signs / cabin …… CHECKED

## Before takeoff 🟥
- **Cabin …… SECURE**
- **Flaps / slats …… CONFIRMED per takeoff data**
- **Trim …… CONFIRMED SET**
- **Flight controls …… FREE & CORRECT**
- **Takeoff configuration (EICAS clear) …… CONFIRMED**
- **Transponder / TCAS …… TA/RA, ON**
- **Runway / heading …… CONFIRMED, LINED UP**
- **Landing lights / strobes …… ON**
- **Autobrake / thrust mode …… CONFIRMED**

## After takeoff / Climb
- Landing gear …… UP, DOORS CLOSED
- Flaps / slats …… RETRACTED ON SCHEDULE
- Ground spoilers …… DISARMED
- Climb thrust / autopilot / autothrottle …… SET, ENGAGED
- Packs / bleed …… ON
- Baro → STD (at transition) …… SET
- Landing lights …… OFF ABOVE 10,000 / AS REQUIRED

## Cruise
- Altitude / Mach / cost index …… SET per OFP (typical M0.78, max M0.82 🟧 `[VERIFY]`)
- Fuel …… MONITORED vs OFP, cross-feed checked
- ETOPS/EDTO entry point …… CONFIRMED, en-route alternate live 🟧 (dispatch discipline, not sim-modelled)
- Systems / EICAS …… NORMAL
- Cruise level …… AS PLANNED (single-level typical on thin/regional sectors)

## Descent / Approach
- Descent / approach brief …… COMPLETE (confirm **not** a steep approach — A220-300 not certified for one 🟥)
- Baro (at transition level) …… SET
- Landing performance / VREF / config …… CHECKED, SET
- Fuel …… SUFFICIENT, RESERVES CONFIRMED
- Signs …… ON
- EICAS / autoflight …… SET FOR APPROACH
- Minima …… SET

## Landing 🟥
- **Cabin …… SECURE**
- **Landing gear …… DOWN, 3 GREEN**
- **Flaps …… FULL / CONF per perf**
- **Ground spoilers …… ARMED**
- **Autobrake …… SET AS REQUIRED**
- **EICAS landing memo …… CLEAR**
- **Go-around altitude / thrust …… SET**

## After landing
- Ground spoilers / reversers …… STOWED
- Flaps …… RETRACTED
- Autobrake …… DISARMED
- APU …… START AS REQUIRED
- Weather radar …… OFF
- Transponder …… AS REQUIRED (STBY/ground)
- Landing / strobe lights …… AS REQUIRED

## Shutdown / Secure
- Parking brake …… SET (or chocks in)
- Engines …… OFF
- Seatbelt signs …… OFF
- Beacon …… OFF
- Fuel pumps …… OFF (as required)
- External power / APU …… AS REQUIRED
- IRS …… OFF
- EICAS status / doors …… CHECKED
- Aircraft …… SECURED (per secure-cockpit flow if last leg)

---

## Sources & References
*Public URLs only. Private/OEM/add-on documents may inform content but must never be listed here.*

- SKYbrary — Airbus A220-300 (BCS3) — https://skybrary.aero/aircraft/bcs3
- Airbus — A220 aircraft family page — https://www.airbus.com/en/products-services/commercial-aircraft/a220-family
- Wikipedia — Pratt & Whitney PW1000G (geared turbofan family, incl. PW1500G) — https://en.wikipedia.org/wiki/Pratt_%26_Whitney_PW1000G
- Wikipedia — Airbus A220 — https://en.wikipedia.org/wiki/Airbus_A220

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-25 | Initial draft — generic BD-500/A220-300 normal flow re-expressed from public type knowledge; source gap noted (no operator-neutral normal-checklist source on file, no confirmed sim model) — every item flagged 🟧 pending model validation; Before-takeoff/Landing marked 🟥; two-law FBW (Normal/Direct, no Alternate) and steep-approach exclusion restated. |
