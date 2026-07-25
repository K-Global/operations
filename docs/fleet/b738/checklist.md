<!--
================================================================================
  K Global — AIRFRAME PACK · CHECKLIST  ·  B738 Boeing 737-800
  Curated normal checklist, tailored to the approved sim model.
  Boeing CHALLENGE … RESPONSE flow. Re-expressed — NO verbatim OEM/airline text.
  FLAG LEGEND  🟥 memory/critical item   🟧 caution/model-dependent   🟩 normal
================================================================================
-->

# B738 — Boeing 737-800 · Normal Checklist

**B738 / 737 Next Generation family** · flown as Zibo 737-800X (lead) / default XP11 737-800 (fallback) 🟧 `[VERIFY — model]` · sim = X-Plane 11
**Version** v0.1 · **Updated** 2026-07-25 · **Status** Draft

> **Read-me:** K Global normal-ops flow for X-Plane 11, Boeing philosophy. **The aircraft's own checklist and alert/annunciator system are authoritative** — where the sim model differs from the real jet, the 🟧 note says so. This is a cockpit quick-reference, not a certified checklist, and re-expressed in K Global's own words (no verbatim OEM/airline text). Flag legend 🟥 memory/critical · 🟧 model-dependent · 🟩 normal.

---

*Format: **CHALLENGE …… RESPONSE**. Generic Boeing 737NG normal flow (FMC/CDU, classic yoke-and-column controls — no fly-by-wire, no envelope protections). Model-dependent items are flagged 🟧 (mainly where the default XP11 737-800's lighter systems differ from the deeper Zibo mod). Verify each item against the flown model before line use `[VERIFY]`. Boeing flow: flows are done from memory, then the checklist confirms — this is the confirmation checklist, not the full flow.*

## Preflight
- Crew oxygen …… TESTED, 100%
- Navigation transfer / display switches …… NORMAL, AUTO
- Window heat …… ON
- Pressurization mode selector …… AUTO
- Flight instruments (heading / altimeters) …… SET, CROSS-CHECKED
- IRS mode selectors (L & R) …… NAV
- FMC / CDU preflight (route, PERF init, N1/thrust, ZFW/fuel) …… COMPLETED, CROSS-CHECKED
- Takeoff speeds (V1 / VR / V2) …… SET
- Parking brake …… SET
- Engine start levers …… CUTOFF
- Taxi & takeoff briefing …… COMPLETED
- Approach briefing …… COMPLETED

## Before start
- Flight deck door …… CLOSED, LOCKED
- Fuel quantity / pumps …… CHECKED vs OFP, PUMPS ON
- Passenger signs …… ON
- Windows …… LOCKED
- MCP (course, V2+15, cruise altitude) …… SET
- Beacon …… ON
- Doors / cargo …… CLOSED, DOORS PAGE CLEAR
- Pushback / area …… CLEAR, CLEARANCE RECEIVED

## Engine start / After start
- Engine start switch (affected engine) …… GND
- Engine start lever …… IDLE at ~25% N1 🟧 (start-sequence timing modelled with varying accuracy)
- Engine parameters …… STABILISED, NORMAL
- Engine start switches (both, after start) …… CONT / AUTO
- Generators (1 & 2) …… ON
- Hydraulic pumps (engine-driven ON / electric OFF once engines running) …… SET
- Anti-ice …… AS REQUIRED
- Ground equipment / GPU …… DISCONNECTED, CLEAR

## Before taxi
- Generators …… ON 🟧 (electrical-system depth model-dependent)
- Probe heat …… ON
- Anti-ice …… AS REQUIRED
- Isolation valve …… AUTO
- Engine start switches …… CONT, **Recall …… CHECKED**
- Autobrake …… RTO
- Engine start levers …… IDLE DETENT
- Flight controls …… CHECKED, FULL & FREE 🟧 (alert-system check depth model-dependent)
- Flaps …… SET FOR TAKEOFF (per perf)
- Stabilizer trim …… SET TO GREEN BAND / UNITS per takeoff data
- Weather radar …… AS REQUIRED 🟧 (WXR degraded on XP11)
- Ground equipment …… CLEAR

## Before takeoff 🟥
- **Cabin …… SECURE**
- **Flaps …… CONFIRMED, GREEN LIGHT**
- **Stabilizer trim …… CONFIRMED SET (units)**
- **Flight controls …… FREE & CORRECT**
- **Takeoff config (no config warning) …… CONFIRMED**
- **Transponder / TCAS …… TA/RA, ON**
- **Runway / heading …… CONFIRMED, LINED UP**
- **Landing / strobe lights …… ON**
- **Autothrottle / thrust mode (N1 or assumed-temp) …… ARMED, CONFIRMED**

## After takeoff / Climb
- Landing gear …… UP AND OFF
- Flaps …… RETRACTED ON SCHEDULE
- Engine bleeds …… ON
- Packs …… AUTO
- Climb thrust / autoflight (LNAV/VNAV) …… SET, ENGAGED
- Altimeters → STD (at transition altitude) …… SET
- Landing lights …… OFF ABOVE 10,000 / AS REQUIRED

## Cruise
- Altitude / Mach / CI …… SET per OFP (M0.785 typ, max M0.82) 🟧 `[VERIFY]`
- Fuel …… MONITORED vs OFP, centre-tank pumps managed
- ETOPS/EDTO entry point …… CONFIRMED, en-route alt live 🟧 (dispatch discipline, not sim-modelled)
- Systems / alert display …… NORMAL
- Step climbs …… AS PLANNED

## Descent
- Pressurization (land-altitude set) …… SET
- **Recall …… CHECKED**
- Autobrake …… AS REQUIRED
- Landing data (VREF, minimums) …… SET
- Approach briefing …… COMPLETED

## Approach
- Altimeters (at transition level) …… SET
- Speed / flap schedule …… AS BRIEFED
- Nav / approach mode …… SET, ARMED
- Minima …… SET

## Landing 🟥
- **Cabin report …… RECEIVED**
- **Speedbrake …… ARMED**
- **Landing gear …… DOWN, 3 GREEN**
- **Flaps …… CONFIRMED, GREEN LIGHT (landing config per perf)**
- **Autobrake …… SET AS REQUIRED**
- **Go-around altitude / thrust …… SET**
- **Engine start switches …… CONT**

## After landing
- Speedbrake / reversers …… STOWED
- Flaps …… UP
- Autobrake …… OFF (disarmed)
- APU …… START AS REQUIRED
- Weather radar …… OFF
- Transponder …… AS REQUIRED (ground)
- Landing / strobe lights …… AS REQUIRED

## Shutdown / Secure
- Parking brake …… SET (or chocks in)
- Engine start levers …… CUTOFF
- Transponder …… STANDBY
- Exterior lights (all) …… OFF
- Fuel pumps …… OFF (as required)
- Window heaters / anti-ice …… OFF
- Hydraulic pumps (electric & engine-driven) …… OFF
- Recirculation fans …… OFF
- Flight directors …… OFF
- Cabin / utility power, IFE/seat power …… OFF
- Emergency exit lights …… OFF
- Packs …… OFF
- IRS mode selectors …… OFF
- Yaw damper …… OFF
- Trim air …… OFF
- APU / engine bleeds …… OFF (as required)
- Ground / standby power, battery …… OFF (secure flow if last leg)
- Aircraft …… SECURED

---

## Sources & References
*Public URLs only. Private/OEM/add-on documents may inform content but must never be listed here.*

- SKYbrary — Boeing 737-800 (B738) — https://skybrary.aero/aircraft/b738
- Wikipedia — Boeing 737 Next Generation — https://en.wikipedia.org/wiki/Boeing_737_Next_Generation
- X-Plane.Org Forum — Zibo Mod (community freeware 737-800, systems scope) — https://forums.x-plane.org/files/file/40803-zibo-b738-for-xp11/
- X-Plane — default aircraft (Laminar Research 737-800) — https://www.x-plane.com/desktop/aircraft/

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-25 | Initial draft — generic Boeing 737NG normal flow re-expressed in CHALLENGE…RESPONSE by phase; Before-takeoff/Landing marked 🟥; model-dependent items 🟧. No verbatim OEM/airline text. |
