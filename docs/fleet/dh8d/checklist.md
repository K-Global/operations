<!--
================================================================================
  K Global — AIRFRAME PACK · CHECKLIST  ·  DH8D De Havilland Canada Dash 8 Q400
  Curated normal checklist, tailored to the approved sim model.
  FLAG LEGEND  🟥 memory/critical item   🟧 caution/model-dependent   🟩 normal
================================================================================
-->

# DH8D — De Havilland Canada Dash 8 Q400 · Normal Checklist

**DH8D · TURBOPROP 🟥** · flown as FlyJSim Q4XP 🟧 `[VERIFY — model]` · sim = X-Plane 11/12
**Version** v0.1 · **Updated** 2026-07-25 · **Status** Draft

> **Read-me:** K Global normal-ops flow for X-Plane. **The aircraft's own caution/warning annunciation is authoritative** — where the sim model differs, the 🟧 note says so. This is a cockpit quick-reference, not a certified checklist, and re-expressed in K Global's own words (no verbatim OEM text). **Flag 🟥 — this is a turboprop.** Engine control is split across two levers per side: the **power lever** (commands engine power via FADEC, and propeller blade angle in ground/reverse operation) and the **condition lever** (sets propeller governing RPM, selects power ratings, commands feather, and controls fuel on/off for start and shutdown). The type carries an **Active Noise & Vibration Suppression (ANVS)** system and a six-blade, constant-speed, fully-feathering propeller on each engine. Flag legend 🟥 memory/critical · 🟧 model-dependent · 🟩 normal.

---

*Format: **CHALLENGE …… RESPONSE**. Generic Q400 turboprop flow. Model-dependent items are flagged 🟧. Verify each item against the flown model before line use `[VERIFY]`.*

## Preflight / Cockpit prep
- Documents / OFP / navlog …… ABOARD, CHECKED
- Circuit breakers / gear pins / covers …… STOWED / NORMAL
- Batteries (main / APU / standby) …… ON
- External power / APU …… AS REQUIRED, POWER AVAIL
- Caution & warning panel …… REVIEWED, NO OPEN ITEM
- Fuel quantity / distribution …… CHECKED vs OFP
- Flight controls (yoke, rudder, trim) …… CHECKED FULL & FREE
- **Propellers …… VISUALLY CHECKED (blade/spinner condition)** 🟧 (walk-around item; depth of external-view modelling is add-on dependent)
- FMS init (route, perf, fuel, ZFW/CG) …… SET & CROSS-CHECKED
- Takeoff data (V1/VR/V2, torque setting, trim, flap setting) …… ENTERED, CROSS-CHECKED
- Baro / altimeters …… SET
- Departure brief (incl. engine-failure/autofeather expectation) …… COMPLETE

## Before start
- Cockpit prep …… COMPLETE
- Signs (seatbelts / no-smoking) …… ON / AUTO
- ATC clearance …… OBTAINED
- Doors / baggage compartments …… CLOSED, INDICATION CLEAR
- Fuel boost pumps …… AUTO/ON per flow
- Beacon …… ON
- **Power levers …… FLIGHT IDLE**
- **Condition levers …… FUEL OFF / START & FEATHER** (per start flow) 🟧
- Parking brake …… SET
- Pushback / area …… CLEAR, CLEARANCE RECEIVED

## After start
- APU bleed / GPU (for start) …… AS REQUIRED
- **Engine start sequence (No. 2 then No. 1 per flow) …… STARTED, TORQUE/ITT/NH/PROP PARAMETERS NORMAL** 🟧 (start-sequencing and parameter-limit detail is model-dependent)
- **Condition levers …… ADVANCED per flow (propeller unfeathered, engine stabilised)**
- APU …… STOP once engines self-sustain (or AS REQUIRED)
- Ice protection (nacelle bypass doors, prop/probe heat) …… AS REQUIRED for conditions
- Caution & warning panel …… CHECKED, NO ABNORMAL MESSAGE
- Ground equipment / GPU …… DISCONNECTED, CLEAR

## Before taxi
- Flight controls …… CHECKED (full travel, yoke/rudder/trim) 🟧 (indication depth is model-dependent)
- Flaps …… SET FOR TAKEOFF (per takeoff data)
- Pitch trim …… SET per takeoff data
- Rudder trim …… ZERO / AS REQUIRED
- **Autofeather …… ARMED** 🟥 (turboprop-specific — confirm arming logic is actually simulated 🟧 `[VERIFY]`)
- Bleed / packs …… ON, AS REQUIRED
- **TAKE OFF CONFIG message / caution panel …… REVIEWED, NO CAUTION/WARNING**
- Signs / cabin …… CHECKED

## Before takeoff 🟥
- **Cabin …… SECURE**
- **Flaps …… CONFIRMED per takeoff data**
- **Trim …… CONFIRMED SET**
- **Flight controls …… FREE & CORRECT**
- **Autofeather …… ARMED, CONFIRMED**
- **TAKE OFF CONFIG (caution message clear) …… CONFIRMED**
- **Transponder / TCAS …… TA/RA, ON**
- **Runway / heading …… CONFIRMED, LINED UP**
- **Landing lights / strobes …… ON**
- **Power levers …… SET FOR TAKEOFF TORQUE**

## After takeoff / Climb
- Landing gear …… UP, DOORS CLOSED
- Flaps …… RETRACTED ON SCHEDULE
- **Autofeather …… DISARMED per flow (below the applicable altitude/speed gate)** 🟧
- **Condition levers …… SET FOR CLIMB (per flow)** 🟧 (propeller RPM schedule transition logic is model-dependent — confirm climb RPM setting engages correctly after TO)
- Packs / bleed …… ON
- Baro → STD (at transition) …… SET
- Landing lights …… OFF ABOVE 10,000 / AS REQUIRED

## Cruise
- Altitude / cruise power setting …… SET per OFP (typical cruise up to ~360 KTAS) `[VERIFY]`
- Fuel …… MONITORED vs OFP, crossfeed/boost pumps checked
- Caution & warning panel / systems …… NORMAL, no open message
- **Ice protection …… AS REQUIRED** (nacelle bypass doors, wing/tail boots, prop/probe/windshield heat — see QRH Ch 9)
- Route / FMS …… MONITORED, next-leg data cross-checked

## Descent / Approach
- Descent / approach brief …… COMPLETE
- Baro (at transition level) …… SET
- Landing perf / VREF / flap setting …… CHECKED, SET
- Fuel …… SUFFICIENT, RESERVES CONFIRMED
- Signs …… ON
- **Condition levers …… SET FOR APPROACH (per flow)** 🟧
- **Autofeather …… ARMED** 🟥
- Minima …… SET

## Landing 🟥
- **Cabin …… SECURE**
- **Landing gear …… DOWN, 3 GREEN**
- **Flaps …… FULL / AS REQUIRED per perf**
- **Autofeather …… ARMED, CONFIRMED**
- **Condition levers …… CONFIRMED SET FOR LANDING**
- **Caution & warning panel …… CLEAR**
- **Go-around altitude / power setting …… SET**

## After landing
- **Condition levers …… GROUND/TAXI RANGE** (propeller out of the reverse-range on completion of rollout) 🟧
- **Autofeather …… OFF/DISARMED**
- Flaps …… RETRACTED
- APU …… START AS REQUIRED
- Transponder …… AS REQUIRED (STBY/ground)
- Landing / strobe lights …… AS REQUIRED

## Shutdown / Secure
- Parking brake …… SET (or chocks in)
- **Condition levers (both) …… FUEL OFF** (propellers feathered per shutdown flow)
- Seatbelt signs …… OFF
- Beacon …… OFF
- Fuel boost pumps …… AUTO/OFF as required
- External power / APU …… AS REQUIRED
- Caution & warning panel / doors …… CHECKED
- Aircraft …… SECURED (per secure-cockpit flow if last leg)

---

## Sources & References
*Public URLs only. Private/OEM/add-on documents may inform content but must never be listed here.*

- Wikipedia — De Havilland Canada Dash 8 — https://en.wikipedia.org/wiki/De_Havilland_Canada_Dash_8
- FlyJSim — Q4XP product page — https://www.flyjsim.com/q4xp
- FlyJSim Q4XP — X-Plane.Org Store — https://store.x-plane.org/FlyJSim-Q4XP_p_1511.html

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-25 | Initial draft — generic Q400 turboprop normal flow (power/condition lever architecture, autofeather arming, ANVS) re-expressed for the DH8D; Before-takeoff/Landing marked 🟥; autofeather arming flagged 🟥 as the type's key turboprop-specific memory item; model-dependent items 🟧. |
