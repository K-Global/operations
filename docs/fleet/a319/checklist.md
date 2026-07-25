<!--
================================================================================
  K Global — AIRFRAME PACK · CHECKLIST  ·  A319 Airbus A319-100
  Curated normal checklist, tailored to the approved sim model.
  FLAG LEGEND  🟥 memory/critical item   🟧 caution/model-dependent   🟩 normal
================================================================================
-->

# A319 — Airbus A319-100 · Normal Checklist

**A319 / A320 family** · flown as ToLiss A319 (lead) / JARDesign JD320 (fallback) 🟧 `[VERIFY — model]` · sim = X-Plane 11
**Version** v0.1 · **Updated** 2026-07-25 · **Status** Draft

> **Read-me:** K Global normal-ops flow for X-Plane 11. **The aircraft's own checklist/ECAM is authoritative** — where the sim model differs from the real jet, the 🟧 note says so. This is a cockpit quick-reference, not a certified checklist, and re-expressed in K Global's own words (no verbatim OEM text). Flag legend 🟥 memory/critical · 🟧 model-dependent · 🟩 normal.

---

*Format: **CHALLENGE …… RESPONSE**. Generic A320-family FBW flow, shared type rating with the A320/A21N packs. Model-dependent items are flagged 🟧 (mainly where JD320's mid-fidelity systems differ from the study-level ToLiss). Verify each item against the flown model before line use `[VERIFY]`.*

## Preflight / Cockpit prep
- Documents / OFP / navlog …… ABOARD, CHECKED
- Circuit breakers / gear pins / covers …… STOWED / REMOVED 🟧 (not fully modelled on JD320)
- Fuel pre-flight message …… SENT
- Signs (seatbelts / no-smoking) …… ON / AUTO
- ADIRS (3) …… NAV
- Fuel quantity / distribution …… CHECKED vs OFP
- FMGS init (co-route, F-PLN, PERF, ZFW/ZFWCG, fuel) …… SET & CROSS-CHECKED
- Takeoff data (V1/VR, V2/FLEX or TOGA temp) …… ENTERED, CROSS-CHECKED
- Baro / altimeters …… SET
- Windows / doors …… CLOSED

## Before start
- Cockpit prep …… COMPLETE
- Beacon …… ON
- Thrust levers …… IDLE
- Parking brake …… AS REQUIRED
- Mobile devices (flight deck) …… OFF
- One-engine taxi (departure) …… CONSIDER 🟧 (see Supplementary flow below)

## After start
- Anti-ice …… AS REQUIRED
- ECAM status …… CHECKED, NO ABNORMAL
- Pitch trim …… SET
- Rudder trim …… ZERO

## Before taxi / Before takeoff 🟥
- **Flight controls …… CHECKED (both sides, full travel)**
- **Flight instruments …… CHECKED (both sides)**
- **Departure briefing …… CONFIRMED**
- **Flap setting …… CONFIRMED (both sides) per takeoff data**
- **V1 / VR / V2, FLEX or TOGA temp …… CONFIRMED (both sides)**
- **ATC clearance …… SET**
- **ECAM takeoff memo (autobrake MAX, signs on, cabin ready, spoilers armed, flaps TO, config norm) …… ALL GREEN, NO BLUE**
- **Takeoff runway …… CONFIRMED (both sides)**
- **Cabin crew …… ADVISED**
- **Transponder / TCAS …… TA or TA/RA**
- **Engine mode selector …… AS REQUIRED (icing conditions → IGN)**
- **Packs …… AS REQUIRED**

## After takeoff / Climb
- Landing gear …… UP
- Flaps / slats …… RETRACTED ON SCHEDULE
- Packs …… ON
- Baro → STD (at transition) …… SET (both sides)

## Cruise
- Altitude / MACH / CI …… SET per OFP (M0.78 typ, max M0.82)
- Turbulence penetration speed …… per family reference (A319/A320 vs A321 differ) `[VERIFY]`
- Fuel …… MONITORED vs OFP
- Systems / ECAM …… NORMAL

## Descent / Approach
- Approach briefing …… CONFIRMED
- ECAM status …… CHECKED
- Landing distance …… CONFIRM (assess for conditions/contamination)
- Signs …… AS REQUIRED
- Baro reference (both sides) …… SET
- Minimums (both sides) …… SET
- Engine mode selector …… AS REQUIRED

## Landing 🟥
- **Cabin crew …… ADVISED**
- **Autothrust …… SPEED/OFF as appropriate**
- **Autobrake …… AS REQUIRED**
- **ECAM landing memo (gear down, signs on, cabin ready, spoilers armed, flaps set) …… ALL GREEN, NO BLUE**

## After landing
- Flaps …… RETRACTED
- Spoilers …… DISARMED
- APU …… AS REQUIRED
- Radar / predictive windshear …… OFF / STANDBY
- One-engine taxi (arrival) …… CONSIDER 🟧 (see Supplementary flow below)
- Pack 2 …… AS REQUIRED

## Parking
- Hydraulic (yellow) electric pump …… OFF
- APU bleed …… AS REQUIRED
- Engines …… OFF
- Seatbelt signs …… OFF
- Exterior lights …… AS REQUIRED
- Fuel pumps …… OFF
- Parking brake / chocks …… AS REQUIRED
- Company mobile devices …… ON
- Consider heavy-rain configuration if applicable

## Shutdown / Secure
- Brake temperature …… CHECKED
- ADIRS …… OFF
- Oxygen …… OFF
- APU bleed …… OFF
- Emergency exit lighting …… OFF
- Signs / no-smoking …… OFF
- APU and batteries …… OFF
- Consider cold-weather configuration if applicable

## Supplementary techniques 🟧
- **One-engine taxi, departure:** brake accumulator pressure checked, start the first engine, keep APU running with crossbleed as configured, apply the after-start flow to the running engine, then complete second-engine start per the model's start flow before the before-takeoff checks (minimum delay after single-engine taxi per type reference — treat as `[VERIFY]` on the flown model).
- **One-engine taxi, arrival:** start APU after landing once clear and on a straight taxi line, then shut down one engine per the model's shutdown flow, transferring hydraulic power as configured.
- **Takeoff / approach briefing content (both, generic):** aircraft type, emergencies/MEL, weather, runway, flap/speed, terrain, performance-limiting items, minimum safe altitude, departure/approach procedure, radio aids, FMGS/flight-director setup — review before each sector.
- **Crosswind / turbulence reference figures 🟧 `[VERIFY]`:** treat any crosswind, tailwind or turbulence-penetration-speed figure as a **type-reference placeholder** pending confirmation against the flown model's own performance data — do not rely on it as certified.

---

## Sources & References
*Public URLs only. Private/OEM/add-on documents may inform content but must never be listed here.*

- SKYbrary — Airbus A319 (A319) — https://skybrary.aero/aircraft/a319
- ToLiss — Airbus A319 product page (systems scope) — https://store.x-plane.org/Airbus-A319-XP12-by-Toliss-_p_1631.html
- JARDesign — 320 Airliner — https://store.x-plane.org/JARDesign-320-Airliner_p_580.html

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-25 | Initial draft — generic A320-family FBW normal flow re-expressed; Before-takeoff/Landing marked 🟥; model-dependent items 🟧; supplementary one-engine-taxi/briefing/crosswind reference added |
