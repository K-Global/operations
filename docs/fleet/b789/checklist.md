<!--
================================================================================
  K Global — AIRFRAME PACK · CHECKLIST  ·  B789 Boeing 787-9 Dreamliner
  Curated normal checklist, tailored to the approved sim model.
  Boeing CHALLENGE … RESPONSE flow. Re-expressed — NO verbatim OEM/airline text.
  FLAG LEGEND  🟥 memory/critical item   🟧 caution/model-dependent   🟩 normal
================================================================================
-->

# B789 — Boeing 787-9 Dreamliner · Normal Checklist

**B789 / 787 family** · flown as Magknight 787 (lead) / default Laminar 787 (fallback) 🟧 `[VERIFY — model]` · sim = X-Plane 11
**Version** v0.1 · **Updated** 2026-07-25 · **Status** Draft

> **Read-me:** K Global normal-ops flow for X-Plane 11, Boeing philosophy. **The aircraft's own checklist and EICAS are authoritative** — where the sim model differs from the real jet, the 🟧 note says so. This is a cockpit quick-reference, not a certified checklist, and re-expressed in K Global's own words (no verbatim OEM/airline text). Flag legend 🟥 memory/critical · 🟧 model-dependent · 🟩 normal.

---

*Format: **CHALLENGE …… RESPONSE**. Generic Boeing 787 normal flow (FMC/CDU, EICAS, autothrottle, LNAV/VNAV). Model-dependent items are flagged 🟧 (mainly where the default Laminar 787's lighter systems differ from the deeper Magknight build). Verify each item against the flown model before line use `[VERIFY]`. Boeing flow: flows are done from memory, then the checklist confirms — this is the confirmation checklist, not the full flow.*

## Preflight
- Inspections / security …… COMPLETED 🟧 (walk-around not fully modelled)
- Crew oxygen …… TESTED, 100%
- Flight instruments / EFIS …… HEADING, ALTIMETERS SET, X-CHECKED
- Parking brake …… SET
- Fuel control switches …… CUTOFF
- FMC / CDU preflight (POS INIT, route, PERF/ZFW/fuel, THRUST/TAKEOFF) …… COMPLETED, CROSS-CHECKED
- PFD / speed bugs …… V2, LNAV/VNAV, ALT SET
- Takeoff speeds (V1 / VR / V2) …… SET
- Taxi & takeoff briefing …… COMPLETED
- Approach briefing …… COMPLETED

## Before start
- Flight deck door …… CLOSED, LOCKED
- Passenger signs …… ON
- Beacon …… ON
- Transponder / TCAS …… SET (XPDR)
- Doors / cargo …… CLOSED, EICAS DOORS CLEAR
- Fuel pumps …… ON
- Thrust levers …… IDLE
- Parking brake …… SET
- Pushback / area …… CLEAR, CLEARANCE RECEIVED

## Engine start / After start
- APU / bleed & electrical …… AS REQUIRED, POWER AVAIL
- Engine start (start switch → fuel control switch RUN, each engine) …… STARTED, EICAS PARAMETERS NORMAL
- Anti-ice …… AS REQUIRED
- EICAS status …… CHECKED, NO ABNORMAL
- Ground equipment / GPU …… DISCONNECTED, CLEAR

## Before taxi
- Generators / electrical …… ON, EICAS NORMAL 🟧 (no-bleed elec architecture depth model-dependent)
- Flight controls …… CHECKED (full travel) 🟧 (EICAS F/CTL synoptic depth model-dependent)
- Flaps …… SET FOR TAKEOFF (per perf)
- Stabilizer trim …… SET TO GREEN BAND per takeoff data
- Autobrake …… RTO
- Flight instruments / nav …… CHECKED, NAV ACCURACY OK
- Anti-ice …… AS REQUIRED
- Weather radar …… AS REQUIRED 🟧 (WXR degraded on XP11)

## Before takeoff 🟥
- **Cabin …… SECURE, REPORT RECEIVED**
- **Flaps …… CONFIRMED per takeoff data**
- **Stabilizer trim …… CONFIRMED SET (green band)**
- **Flight controls …… FREE & CORRECT**
- **Takeoff config (no EICAS CONFIG warning) …… CONFIRMED**
- **Transponder / TCAS …… TA/RA, ON**
- **Runway / heading …… CONFIRMED, LINED UP**
- **Autothrottle / thrust mode (TO / assumed-temp) …… ARMED, CONFIRMED**
- **Landing / strobe lights …… ON**

## After takeoff
- Landing gear …… UP
- Flaps …… UP ON SCHEDULE
- Altimeters …… STD (at transition altitude)
- Autobrake …… OFF (verify disarmed)
- Climb thrust / autoflight (LNAV/VNAV) …… SET, ENGAGED
- Landing lights …… AS REQUIRED / OFF ABOVE 10,000

## Cruise
- Altitude / speed / cost index …… SET per OFP (M.85 typ, CI per profile) 🟧 `[VERIFY]`
- Fuel …… MONITORED vs OFP, BALANCE / CROSSFEED CHECKED
- ETOPS/EDTO entry point …… CONFIRMED, en-route alt live 🟧 (dispatch discipline, not sim-modelled)
- Systems / EICAS …… NORMAL
- Step climbs …… AS PLANNED

## Descent
- Recall (EICAS) …… CHECKED
- Autobrake …… SET AS REQUIRED
- Landing data (VREF, minimums) …… SET
- Altimeters …… AS REQUIRED
- Descent / approach brief …… COMPLETED
- Fuel …… SUFFICIENT, RESERVES CONFIRMED

## Approach
- Altimeters …… SET (at transition level)
- Speed / flaps schedule …… AS BRIEFED
- Nav / approach mode …… SET, ARMED
- Minima …… SET

## Landing 🟥
- **Cabin report …… RECEIVED**
- **Speedbrake …… ARMED**
- **Landing gear …… DOWN, 3 GREEN**
- **Flaps …… CONFIRMED (landing config per perf)**
- **Autobrake …… SET AS REQUIRED**
- **Go-around altitude / thrust …… SET**

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
- Fuel control switches …… CUTOFF
- Seatbelt signs …… OFF
- Beacon …… OFF
- Fuel pumps …… OFF (as required)
- External power / APU …… AS REQUIRED
- Electrical / hydraulics …… AS REQUIRED
- EICAS status / doors …… CHECKED
- IRS / ADIRU …… OFF (secure flow if last leg)
- Emergency lights …… OFF
- Aircraft …… SECURED

---

## Sources & References
*Public URLs only. Private/OEM/add-on documents may inform content but must never be listed here.*

- SKYbrary — Boeing 787-9 (B789) — https://skybrary.aero/aircraft/b789
- Magknight 787-9 (systems scope) — https://store.x-plane.org/787-9_p_1132.html
- X-Plane — default aircraft (Laminar Research 787) — https://www.x-plane.com/desktop/aircraft/

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-25 | Initial draft — generic Boeing 787 normal flow re-expressed in CHALLENGE…RESPONSE by phase; Before-takeoff/Landing marked 🟥; model-dependent items 🟧. No verbatim OEM/airline text. |
