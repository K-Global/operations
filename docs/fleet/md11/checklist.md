<!--
================================================================================
  K Global — AIRFRAME PACK · CHECKLIST  ·  MD11 McDonnell Douglas MD-11F
  Curated normal checklist, tailored to the approved sim model.
  FLAG LEGEND  🟥 memory/critical item   🟧 caution/model-dependent   🟩 normal
================================================================================
-->

# MD11 — McDonnell Douglas MD-11F · Normal Checklist

**MD11 / MD-11 family** · flown as Rotate MD-11 (Freighter edition) 🟧 `[VERIFY — model]` · sim = X-Plane 11
**Version** v0.1 · **Updated** 2026-07-25 · **Status** Draft

> **Read-me:** K Global normal-ops flow for X-Plane 11. **The aircraft's own checklist/EAD/SD is authoritative** — where the sim model differs from the real jet, the 🟧 note says so. This is a cockpit quick-reference, not a certified checklist, and re-expressed in K Global's own words (no verbatim OEM text). Flow is for a **two-pilot glass-cockpit trijet freighter** — no flight engineer, no cabin crew, no passenger items. Three-engine start/systems checks and a **five-point gear** (nose + 2 main + center) replace the twin-jet flow used elsewhere in this fleet. Flag legend 🟥 memory/critical · 🟧 model-dependent · 🟩 normal.

---

*Format: **CHALLENGE …… RESPONSE**. Generic MD-11 flow (dual FMC/FMS, glareshield flight control panel, EAD/SD electronic displays). Model-dependent items are flagged 🟧 where Rotate's systems may differ from the real jet. Verify each item against the flown model before line use `[VERIFY]`.*

## Preflight / Cockpit prep
- Documents / OFP / navlog …… ABOARD, CHECKED
- **Freighter loadsheet / main-deck + 3-position lower-deck load plan …… RECEIVED, CROSS-CHECKED vs pallet/ULD positions** 🟥 (no cabin manifest — cargo loadsheet is the only load document; CG discipline is a handling-safety input on this type, not just structural — see Dispatch §4)
- Battery …… ON
- APU / external power …… AS REQUIRED, POWER AVAIL
- Hydraulic system pumps (3 systems) …… AUTO / AS REQUIRED
- Fuel pumps (main / center / stabilizer ballast tank) …… AS REQUIRED
- EAD / SD electronic displays …… ON, SOURCE ANNUNCIATION NORMAL
- **LSAS and YAW DAMP channels …… ENGAGED, NO FAIL LIGHT** 🟥 (LSAS provides the type's artificial pitch-rate damping — confirm engaged before flight; do not dispatch with LSAS failed/degraded without a specific MEL/dispatch review)
- Fuel quantity / distribution (incl. stabilizer tank) …… CHECKED vs OFP
- **Main-deck cargo compartment / smoke-detection status …… CHECKED** 🟧 (no cabin — main-deck compartment status replaces cabin-readiness check)
- Pack control switches / bleeds / pressurisation …… AUTO, SET
- FMC/FMS init (POS, RTE, PERF INIT — ZFW/fuel/CI, TAKEOFF REF) …… SET & CROSS-CHECKED **against loadsheet ZFW/CG, not an assumed load**
- Takeoff data (V1/VR/V2, thrust, flap/slat DIAL-A-FLAP setting, stab trim) …… ENTERED, CROSS-CHECKED
- FCP (glareshield: IAS / HDG / ALT) …… SET
- Baro / altimeters …… SET
- Departure brief — incl. **LSAS status and expected pitch handling** …… COMPLETE (two-pilot crew; no cabin-crew brief)

## Before start
- Cockpit prep …… COMPLETE
- ATC clearance …… OBTAINED
- **Main-deck side cargo door + forward/center/aft lower-deck cargo doors …… CLOSED, LOCKED, DOOR PAGE/ALERTS CLEAR** 🟥 (freighter door set — three lower-deck positions, no passenger doors)
- **Center gear isolation switch …… SET (center gear extended with main gear, standard config)** 🟧
- Fuel pumps …… ON
- Beacon …… ON
- Throttles (1, 2, 3) …… CLOSED (idle)
- Parking brake …… SET
- Pushback / area …… CLEAR, CLEARANCE RECEIVED (confirm main-deck loader/GSE clear before push; note the **tail-mounted #2 engine inlet** height/position during ramp/GSE movement) 🟧

## Engine start
- Ground equipment …… DISCONNECTED, CLEAR (incl. main-deck loader/cargo GSE)
- Engine area …… CLEAR, **incl. #2 tail-engine S-duct inlet/exhaust path** 🟧
- Engine start selectors / ENG IGN (A or B) …… SELECTED
- Fuel control / start levers (1, 2, 3, sequenced per company procedure) …… RUN, PARAMETERS NORMAL (N1/N2/EGT/FF rising in sequence) 🟧 (start sequence model-dependent — confirm on build)
- Generators …… ON, no fault lights
- APU …… OFF (as required)
- Anti-ice …… AS REQUIRED

## Before taxi
- Generators …… ON (lights out)
- Packs / bleeds / isolation valves …… AUTO / ON (lights out)
- Flaps/slats …… SET FOR TAKEOFF via DIAL-A-FLAP (___ CONFIRM per perf)
- Stabilizer trim …… SET ___ UNITS **per takeoff data derived from loadsheet CG, not a default value** 🟥
- Flight controls …… FREE AND CORRECT (full travel check) 🟧 (SD synoptic depth model-limited)
- LSAS / YAW DAMP …… CHECKED, NO FAIL
- Anti-ice …… AS REQUIRED
- Taxi / turn-off lights …… ON / AS REQUIRED
- Autobrake / RTO mode …… ARMED (as fitted)

## Before takeoff 🟥
- **Flaps/slats …… CONFIRMED ___ (per takeoff data)**
- **Stabilizer trim …… CONFIRMED SET (per loadsheet CG)**
- **Flight controls / LSAS …… FREE & CORRECT, ENGAGED, NO FAIL**
- **Takeoff config (no CONFIG alert, EAD clear) …… CONFIRMED**
- **Main-deck cargo / doors …… SECURE, NO WARNING** (freighter equivalent of a cabin-secure check)
- **Center gear …… EXTENDED, CONFIRMED**
- **Transponder / TCAS …… TA/RA, ON**
- **Runway / heading …… CONFIRMED, LINED UP**
- **Landing / strobe lights …… ON**
- **Autothrottle / thrust mode …… ARMED, CONFIRMED**

## After takeoff / Climb
- Landing gear (nose, 2 main, center) …… UP, all positions confirmed on gear synoptic 🟧 (five-point gear — do not rely on a "3 green"-style summary)
- Flaps/slats …… RETRACTED ON SCHEDULE
- Autopilot / autothrottle …… ENGAGED AS REQUIRED
- Climb thrust / FMS vertical mode …… SET, ENGAGED
- Baro → STD (at transition altitude) …… SET
- Speed …… ≤250 KIAS BELOW 10,000
- Landing lights …… OFF ABOVE 10,000 / AS REQUIRED

## Cruise
- Altitude / MACH / CI …… SET per OFP (M0.83, CI per OM E)
- Fuel …… MONITORED vs OFP, incl. **stabilizer ballast-tank fuel transfer (aft-CG cruise design)** 🟧 — confirm the transfer schedule against the flown model
- LSAS / autopilot pitch-channel status …… MONITORED NORMAL 🟥 (this type's central handling dependency — brief any LSAS caution promptly, do not treat as a minor annunciation)
- EDTO/adequate-aerodrome entry point …… NOT APPLICABLE UNLESS a policy is set for this leg 🟥 (MD11 operator EDTO/adequate-aerodrome policy not yet set — Dispatch §5; do not assume clearance)
- Systems / EAD, main-deck cargo status …… NORMAL
- Step climbs …… AS PLANNED

## Descent / Approach
- Descent / approach brief — incl. **expected higher reference/landing speed for this type** …… COMPLETE 🟧
- Baro (at transition level) …… SET
- Landing perf / VREF / flap-slat setting …… CHECKED, SET **against actual landing ZFW/CG (post-burn, post-ballast-transfer), not a default**
- Fuel …… SUFFICIENT, RESERVES CONFIRMED
- Autoflight / FCP (approach mode, go-around alt) …… SET
- Minima …… SET

## Landing 🟥
- **Landing gear (nose, 2 main, center) …… DOWN, all positions confirmed** (five-point gear synoptic, not a generic "3 green")
- **Flaps/slats …… SET FOR LANDING (per perf)**
- **Speedbrake …… ARMED**
- **Autobrake …… SET AS REQUIRED**
- **Go-around altitude …… SET**
- **Landing config (EAD clear) …… CONFIRMED**
- **Main-deck cargo …… NO WARNING** (freighter equivalent of a cabin-secure check)
- **Flare technique — smooth, measured pitch inputs; do not chase the flight path** 🟥 (the type's reduced pitch damping and higher approach speed reduce tolerance for late/abrupt correction — see QRH Ch 9)

## After landing
- Speedbrake / reversers (all three engines) …… STOWED
- Flaps/slats …… RETRACTED
- Autobrake …… OFF
- Transponder …… STANDBY / AS REQUIRED (ground)
- APU …… START AS REQUIRED
- Landing / strobe lights …… AS REQUIRED; taxi lights …… ON
- Anti-ice …… AUTO / OFF

## Shutdown / Secure
- Parking brake …… SET (or chocks in)
- Fuel control / start levers (1, 2, 3) …… CUTOFF
- Beacon …… OFF
- Fuel pumps …… OFF (as required)
- External power / APU …… AS REQUIRED
- Hydraulic pumps …… OFF (as required)
- **Main-deck side cargo door + forward/center/aft lower-deck doors, EAD …… CHECKED** (no passenger door/jetbridge item)
- Aircraft …… SECURED (per secure-cockpit flow if last leg); handover to ramp/cargo-loading team

---

## Sources & References
*Public URLs only. Private/OEM/add-on documents may inform content but must never be listed here.*

- Wikipedia — McDonnell Douglas MD-11 — https://en.wikipedia.org/wiki/McDonnell_Douglas_MD-11
- Rotate — MD-11 Freighter product page (systems scope) — https://store.x-plane.org/Rotate-MD-11-Freighter_p_1580.html

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-25 | Initial draft — MD-11 two-pilot glass-cockpit flow re-expressed for a trijet freighter; freighter loadsheet/main-deck+3-position lower-deck door/no-cabin items throughout; **LSAS engagement checks added as memory/critical items 🟥** (preflight, before-taxi, cruise, landing/flare technique); five-point gear (center gear) called out at every gear-check point; EDTO/adequate-aerodrome entry-point item flagged 🟥 pending policy. |
