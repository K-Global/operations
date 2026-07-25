<!--
================================================================================
  K Global — AIRFRAME PACK · CHECKLIST  ·  A320 Airbus A320-200
  Curated normal checklist, tailored to the approved sim model.
  FLAG LEGEND  🟥 memory/critical item   🟧 caution/model-dependent   🟩 normal
================================================================================
-->

# A320 — Airbus A320-200 · Normal Checklist

**A320 / A320 family** · flown as ToLiss A320 (base + CEO addon, lead) / JARDesign A320 Airliner (fallback) 🟧 `[VERIFY — model]` · sim = X-Plane 11
**Version** v0.1 · **Updated** 2026-07-25 · **Status** Draft

> **Read-me:** K Global normal-ops flow for X-Plane 11. **The aircraft's own checklist/ECAM is authoritative** — where the sim model differs from the real jet, the 🟧 note says so. This is a cockpit quick-reference, not a certified checklist, and re-expressed in K Global's own words (no verbatim OEM text). Flag legend 🟥 memory/critical · 🟧 model-dependent · 🟩 normal.

---

*Format: **CHALLENGE …… RESPONSE**. Generic A320-family FBW flow (common to the A319/A320/A321 type rating). Model-dependent items are flagged 🟧 (mainly where JARDesign's mid-fidelity systems differ from the study-level ToLiss). Verify each item against the flown model — and against the correct engine-generation selection (Sim-Model §2) — before line use `[VERIFY]`.*

## Cockpit prep / Before start
- Documents / OFP / navlog …… ABOARD, CHECKED
- Circuit breakers / gear pins & covers …… REMOVED / STOWED 🟧 (not fully modelled on JARDesign)
- Fuel quantity / distribution …… CHECKED vs OFP
- ADIRS (3) …… NAV
- Signs …… ON / AUTO
- Windows / doors …… CLOSED (both sides)
- Beacon …… ON
- Thrust levers …… IDLE
- Parking brake …… AS REQUIRED
- Portable devices (crew) …… OFF (both sides)
- Takeoff data (V1/VR/V2/FLEX or TOGA temp) …… SET, CROSS-CHECKED (both)
- Baro reference …… SET (both)
- One-engine taxi (departure) …… CONSIDER per fuel/apron policy

## After start
- Anti-ice …… AS REQUIRED
- ECAM status …… CHECKED, NO ABNORMAL
- Pitch trim …… SET
- Rudder trim …… ZERO

## Before takeoff 🟥
- **Flight controls / flight instruments …… CHECKED (both)**
- **Departure briefing …… CONFIRMED**
- **Flap setting …… CONFIRMED (both)**
- **V1 / VR / V2 or FLEX temp …… CONFIRMED (both)**
- **ATC clearance …… SET**
- **ECAM T.O memo (autobrake MAX, signs on, cabin ready, spoilers armed, flaps T.O, config norm) …… ALL GREEN / NO BLUE**
- **Takeoff runway …… CONFIRMED (both)**
- **Cabin crew …… ADVISED**
- **Transponder / TCAS …… TA or TA/RA**
- **Engine mode selector / packs …… AS REQUIRED**

## After takeoff / Climb
- Landing gear …… UP
- Flaps …… RETRACTED on schedule
- Packs …… ON
- Baro reference (at transition) …… SET (both)

## Cruise
- Altitude / Mach / cost index …… SET per OFP
- Fuel …… MONITORED vs OFP, imbalance checked
- Systems / ECAM …… NORMAL
- Turbulence speed …… per §Supplementary reference below

## Descent / Approach
- Approach briefing …… CONFIRMED
- ECAM status …… CHECKED
- Landing distance …… CONFIRM
- Signs …… AS REQUIRED
- Baro reference / minimum …… SET (both)
- Engine mode selector …… AS REQUIRED

## Landing 🟥
- **Cabin crew …… ADVISED**
- **Auto-thrust …… SPEED/OFF as briefed**
- **Autobrake …… AS REQUIRED**
- **ECAM landing memo (gear down, signs on, cabin ready, spoilers armed, flaps set) …… ALL GREEN / NO BLUE**
- **Landing gear …… DOWN, 3 GREEN**
- **Go-around thrust / altitude …… SET**

## After landing
- Flaps …… RETRACTED
- Spoilers …… DISARMED
- APU …… AS REQUIRED
- Weather radar …… OFF / STANDBY
- Predictive windshear system …… OFF
- One-engine taxi (arrival) …… CONSIDER, per fuel/apron policy
- Pack 2 …… AS REQUIRED

## Parking
- Yellow (electric) hydraulic pump …… OFF
- APU bleed …… AS REQUIRED
- Engines …… OFF
- Seatbelt signs …… OFF
- Exterior lights …… AS REQUIRED
- Fuel pumps …… OFF
- Parking brake and chocks …… AS REQUIRED
- Company comms …… ON
- Heavy-rain consideration …… per local procedure

## Securing the aircraft
- Brake temperature …… CHECKED
- ADIRS …… OFF
- Oxygen …… OFF
- APU bleed …… OFF
- Emergency exit lights …… OFF
- Signs / no-smoking …… OFF
- APU and batteries …… OFF
- Cold-weather consideration …… per local procedure

## Emergency evacuation 🟥
- **Aircraft / parking brake …… STOPPED / SET**
- **ATC …… NOTIFIED**
- **Cabin crew …… ALERTED**
- **Cabin differential pressure (only if manual pressurisation used) …… CHECK ZERO** — if not zero, select manual mode, full nose-up on the pressurisation controller
- **Engine masters (all) …… OFF**
- **Fire pushbuttons (engines + APU) …… PUSH**
- **Fire agents …… AS REQUIRED**
- If evacuation required → **EVACUATION …… INITIATE**
- If evacuation not required → cabin crew and passengers advised by PA, remain seated

---

## Supplementary reference 🟧

- **One-engine taxi (departure):** start engine 1 first with APU bleed off / cross-bleed open / APU kept running as backup, electric hydraulic pump on; before starting engine 2, reverse the bleed/pump configuration and allow the recommended minimum time before start (longer if the IAE-family engine has been shut down more than ~2 hours) `[VERIFY]`.
- **One-engine taxi (arrival):** start APU no less than ~3 minutes after landing; shut down the second engine only once taxiing straight, with the electric hydraulic pump on `[VERIFY]`.
- **Take-off brief (memory prompt):** aircraft type / emergencies / MEL / significant weather / return / alternate / runway / flap / acceleration altitude / transition altitude / terrain / performance restrictions / minimum safe altitude / SID / radio aids / FMGS / flight directors / review.
- **Approach brief (memory prompt):** aircraft type / configuration / NOTAMs / weather / QNH / transition level / minimum safe altitude / STAR / approach / airfield elevation / go-around / runway / stopping / radio aids / alternate / fuel capability / review.
- **Turbulence penetration speed:** approx 250–275 kt / M0.76 below FL200 for the A319/A320 (270–300 kt / M0.76 for the A321) `[VERIFY]` — public reference only, confirm against the flown model/OFP.
- **Crosswind/tailwind reference:** representative limits are ~38 kt crosswind (gust included) for takeoff/landing, 10 kt tailwind, with lower limits in contaminated/slippery conditions (compacted snow, slush, standing water) and for autoland (~30 kt headwind / 20 kt crosswind / 10 kt tailwind) `[VERIFY]` — treat as a public-reference order of magnitude, not a certified limit; confirm the actual figures for the flown model/type before use.
- **Hydraulics reminder:** three colour-coded circuits (Green / Blue / Yellow) — Green is engine-1 driven, Yellow is engine-2 driven (plus an electric pump and a power-transfer-unit link to Green), Blue is electric-pump driven with the RAT as backup. Simpler in engine-driven redundancy than a three-engine-pump widebody layout — the Blue/RAT path is the key emergency-electrical/hydraulic backbone. See QRH Ch 5/Ch 4.

---

## Sources & References
*Public URLs only. Private/OEM/add-on documents may inform content but must never be listed here.*

- SKYbrary — Airbus A320 (A320) — https://skybrary.aero/aircraft/a320
- ToLiss — A320 NEO / CEO product pages (systems scope) — https://toliss.com/pages/a320-neo · https://toliss.com/pages/a320-ceo
- JARDesign — A320 Airliner — https://main.jardesign.org/A320.html

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-25 | Initial draft — generic A320-family FBW normal flow re-expressed from public/family reference material; Before-takeoff/Landing/Evacuation marked 🟥; model-dependent items 🟧; supplementary one-engine-taxi, brief prompts, turbulence and crosswind reference added |
