<!--
================================================================================
  K Global — AIRFRAME PACK · CHECKLIST  ·  E190 Embraer 190
  Curated normal checklist, tailored to the approved sim model.
  FLAG LEGEND  🟥 memory/critical item   🟧 caution/model-dependent   🟩 normal
================================================================================
-->

# E190 — Embraer 190 · Normal Checklist

**E190 / E-Jet family (E1 generation)** · flown as X-Crafts E190 (lead) / Flight Procedures Simulation E190 (fallback, XP12-only) 🟧 `[VERIFY — model]` · sim = X-Plane 11
**Version** v0.1 · **Updated** 2026-07-25 · **Status** Draft

> **Read-me:** K Global normal-ops flow for X-Plane. **The aircraft's own EICAS / electronic checklist is authoritative** — where the sim model differs, the 🟧 note says so. This is a cockpit quick-reference, not a certified checklist, and re-expressed in K Global's own words (no verbatim OEM text). The E-Jet uses an **EICAS + electronic checklist** philosophy, not an Airbus-style ECAM: caution/warning messages appear on the EICAS upper display, and the crew works an on-screen electronic checklist to close each item. The type is **fly-by-wire assisted on most flight-control surfaces (ailerons remain cable-actuated)**, flown through a **conventional yoke** — there is no Airbus-style hard flight-envelope protection law; the pilot retains full control authority throughout. Flag legend 🟥 memory/critical · 🟧 model-dependent · 🟩 normal.

---

*Format: **CHALLENGE …… RESPONSE**. Generic E-Jet (E1/CF34-10E) flow. Model-dependent items are flagged 🟧. Verify each item against the flown model before line use `[VERIFY]`.*

## Preflight / Cockpit prep
- Documents / OFP / navlog …… ABOARD, CHECKED
- Circuit breakers / gear pins / covers …… STOWED / NORMAL
- Batteries (1 / 2) …… ON
- External power / APU …… AS REQUIRED, POWER AVAIL
- EICAS status / electronic checklist …… REVIEWED, NO OPEN ITEM
- Fuel quantity / distribution …… CHECKED vs OFP
- Flight controls (elec avail) …… CHECKED FULL & FREE
- FMS init (route, PERF 1/2, fuel, cargo/MAC%) …… SET & CROSS-CHECKED
- Takeoff data (V1/VR/V2, flex/derate, trim, flap setting) …… ENTERED, CROSS-CHECKED
- Baro / altimeters …… SET
- Departure brief …… COMPLETE

## Before start
- Cockpit prep …… COMPLETE
- Signs (seatbelts / no-smoking) …… ON / AUTO
- ATC clearance …… OBTAINED
- Doors / cargo …… CLOSED, EICAS DOORS INDICATION CLEAR
- Fuel pumps (DC / AC) …… AUTO
- Beacon …… ON
- Thrust levers …… IDLE
- Parking brake …… SET
- Pushback / area …… CLEAR, CLEARANCE RECEIVED

## After start
- APU bleed / GPU (for start) …… AS REQUIRED
- Engine start sequence (No. 2 then No. 1, ignition AUTO, starter knob held per FADEC sequence) …… STARTED, PARAMETERS NORMAL 🟧 (start-sequencing detail is model-dependent)
- APU …… STOP once engines self-sustain (or AS REQUIRED)
- Anti-ice …… AS REQUIRED
- EICAS …… CHECKED, NO ABNORMAL MESSAGE
- Ground equipment / GPU …… DISCONNECTED, CLEAR

## Before taxi
- Flight controls …… CHECKED (full travel, EICAS flight-control synoptic) 🟧 (synoptic-page depth is model-dependent)
- Flaps / slats …… SET FOR TAKEOFF (per takeoff data)
- Pitch trim …… SET per takeoff data
- Rudder trim …… ZERO / AS REQUIRED
- Autobrake …… AS REQUIRED (RTO / LO / MID / HI per field)
- Bleed / packs …… ON, AS REQUIRED
- EICAS takeoff-configuration message …… REVIEWED, NO CAUTION/WARNING
- Ground spoilers armed / signs / cabin …… CHECKED

## Before takeoff 🟥
- **Cabin …… SECURE**
- **Flaps / slats …… CONFIRMED per takeoff data**
- **Trim …… CONFIRMED SET**
- **Flight controls …… FREE & CORRECT**
- **Takeoff configuration (EICAS T.O message clear) …… CONFIRMED**
- **Transponder / TCAS …… TA/RA, ON**
- **Runway / heading …… CONFIRMED, LINED UP**
- **Landing lights / strobes …… ON**
- **Autothrottle / thrust mode (climb/flex/derate) …… CONFIRMED, ARMED**

## After takeoff / Climb
- Landing gear …… UP, DOORS CLOSED
- Flaps / slats …… RETRACTED ON SCHEDULE
- Ground spoilers …… DISARMED
- Climb thrust / autoflight / autothrottle …… SET, ENGAGED
- Packs / bleed …… ON
- Baro → STD (at transition) …… SET
- Landing lights …… OFF ABOVE 10,000 / AS REQUIRED

## Cruise
- Altitude / Mach / CI …… SET per OFP (typical M0.78, max M0.82) `[VERIFY]`
- Fuel …… MONITORED vs OFP, crossfeed checked
- EICAS / systems …… NORMAL, no open electronic-checklist item
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
- **Ground spoilers …… ARMED**
- **Autobrake …… SET AS REQUIRED**
- **EICAS landing message …… CLEAR**
- **Go-around altitude / thrust …… SET**

## After landing
- Ground spoilers / thrust reversers …… STOWED
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
- Fuel pumps …… AUTO / OFF as required
- External power / APU …… AS REQUIRED
- EICAS status / doors …… CHECKED
- Aircraft …… SECURED (per secure-cockpit flow if last leg)

---

## Sources & References
*Public URLs only. Private/OEM/add-on documents may inform content but must never be listed here.*

- SKYbrary — Embraer E190 (E190) — https://skybrary.aero/aircraft/e190
- Embraer — commercial aircraft — https://www.embraer.com
- X-Crafts — Embraer E190 (systems scope, X-Plane.Org Store) — https://store.x-plane.org/Embraer-E190-by-X-Crafts_p_1728.html

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-25 | Initial draft — generic E-Jet (E1/CF34-10E) EICAS/electronic-checklist normal flow re-expressed; Before-takeoff/Landing marked 🟥; model-dependent items 🟧 |
