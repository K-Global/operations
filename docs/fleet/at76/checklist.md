<!--
================================================================================
  K Global — AIRFRAME PACK · CHECKLIST  ·  AT76 ATR 72-600
  Curated normal checklist, tailored to the approved sim model.
  FLAG LEGEND  🟥 memory/critical item   🟧 caution/model-dependent   🟩 normal
================================================================================
-->

# AT76 — ATR 72-600 · Normal Checklist

**AT76 / ATR-600 series** · **TURBOPROP** 🟥 · flown as Aerosoft/McPhat Studios ATR 72-500 🟧 `[VERIFY — model, sub-variant gap]` · sim = X-Plane 11
**Version** v0.1 · **Updated** 2026-07-25 · **Status** Draft

> **Read-me:** K Global normal-ops flow for X-Plane. **The aircraft's own systems/electronic checklist is authoritative** — where the sim model differs, the 🟧 note says so. This is a cockpit quick-reference, not a certified checklist, and re-expressed in K Global's own words (no verbatim OEM text). **This is a turboprop** — the flow below uses **power levers** (torque/power setting), **condition levers** (propeller governing/fuel-shutoff/feather), **autofeather**, and **beta/ground-idle/reverse** propeller handling in place of the throttle/thrust-reverser logic used on every jet type in this fleet. The ATR-600 uses a **Thales five-LCD glass cockpit**; the flown model (Sim-Model §1) is an earlier **-500** sub-variant without this panel — model-dependent items are flagged 🟧 throughout. Flag legend 🟥 memory/critical · 🟧 model-dependent · 🟩 normal.

---

*Format: **CHALLENGE …… RESPONSE**. Generic ATR-600 (Thales glass cockpit) flow, re-expressed from general public turboprop-systems knowledge. Model-dependent items are flagged 🟧. Verify each item against the flown model before line use `[VERIFY]`.*

## Preflight / Cockpit prep
- Documents / OFP / navlog …… ABOARD, CHECKED
- Circuit breakers / gear pins / covers / propeller ties …… STOWED / NORMAL
- Batteries …… ON
- External power / APU (or single-engine "hotel mode" if fitted) …… AS REQUIRED, POWER AVAIL 🟧 (hotel-mode ground-power operation is **not simulated** on the candidate model)
- CAS / status messages …… REVIEWED, NO OPEN ITEM 🟧 (crew-alerting system depth is model-dependent — not fully simulated on the candidate)
- Fuel quantity / distribution …… CHECKED vs OFP
- Flight controls (yoke, rudder, trim) …… CHECKED FULL & FREE
- Power levers …… CONFIRMED FLIGHT-IDLE GATE / GROUND-IDLE RANGE understood
- Condition levers …… SET (FUEL SHUT-OFF for cold cockpit; confirm governing positions before start) 🟧 (condition-lever functionality is a noted limitation of the candidate model — see Sim-Model §3)
- FMS/CDU init (route, perf, fuel, ZFW/CG) …… SET & CROSS-CHECKED
- Takeoff data (V1/VR/V2, torque setting, trim, flap setting) …… ENTERED, CROSS-CHECKED
- Baro / altimeters …… SET
- Departure brief (incl. FL250 ceiling awareness, icing forecast) …… COMPLETE

## Before start
- Cockpit prep …… COMPLETE
- Signs (seatbelts / no-smoking) …… ON / AUTO
- ATC clearance …… OBTAINED
- Doors …… CLOSED, INDICATION CLEAR
- Fuel pumps …… AUTO/ON per flow
- Beacon …… ON
- Power levers …… FLIGHT IDLE / GROUND IDLE as appropriate
- Condition levers …… FUEL SHUT-OFF (pre-start)
- Parking brake …… SET
- Pushback / area / propeller-disc clearance …… CLEAR, CLEARANCE RECEIVED

## Engine start / propeller start-up 🟥
- Start sequence (No. 2 then No. 1, or per flow) …… INITIATED
- **Condition lever …… advanced to the governing (RUN/AUTO) position** at the specified Ng/gas-generator speed to introduce fuel and bring the propeller out of feather 🟥 — this is the turboprop-specific "prop out of feather" action with no jet-fleet equivalent
- ITT / Ng / oil pressure during light-up …… MONITORED, WITHIN LIMITS
- Propeller …… CONFIRMED ROTATING, STABILISED AT GOVERNED RPM
- Generator / bleed (as applicable) …… ON, CHECKED
- Repeat for second engine
- **Notes / model 🟧:** condition-lever-driven start logic is a noted limitation on the flown model (Sim-Model §3) — confirm actual simulated behaviour before relying on this flow for training.

## After start
- APU / external power …… DISCONNECTED / STOPPED as required
- Propeller anti-ice / airframe anti-ice …… AS REQUIRED (icing conditions on the ground) 🟥
- CAS / status …… CHECKED, NO ABNORMAL MESSAGE 🟧 (depth model-dependent)
- Ground equipment …… CLEAR

## Before taxi
- Flight controls …… CHECKED (full travel, yoke/rudder/trim)
- Flaps …… SET FOR TAKEOFF (per takeoff data)
- Trim …… SET per takeoff data
- **Autofeather …… ARMED** 🟥 — arm before takeoff per the flown phase-of-flight logic; this automatically feathers a failed engine's propeller above the torque-loss threshold during the takeoff/initial-climb phase (see QRH Ch 1/Ch 2)
- Power levers …… CONFIRMED AT TAXI/GROUND-IDLE RANGE for taxi; beta range available for manoeuvring
- CAS / TAKE OFF CONFIG-equivalent message …… REVIEWED, NO CAUTION/WARNING 🟧
- Signs / cabin …… CHECKED

## Before takeoff 🟥
- **Cabin …… SECURE**
- **Flaps …… CONFIRMED per takeoff data**
- **Trim …… CONFIRMED SET**
- **Flight controls …… FREE & CORRECT**
- **Autofeather …… CONFIRMED ARMED**
- **Propeller/airframe anti-ice …… SET per conditions**
- **Transponder / TCAS …… TA/RA, ON**
- **Runway / heading …… CONFIRMED, LINED UP**
- **Landing lights / strobes …… ON**
- **Torque / power setting for takeoff …… CONFIRMED, SET**

## After takeoff / Climb
- Landing gear …… UP, DOORS CLOSED
- Flaps …… RETRACTED ON SCHEDULE
- **Autofeather …… DISARMED** per the flown phase-of-flight schedule (climb) 🟥
- Power management (torque/ITT/Np/Ng) …… MONITORED, SET FOR CLIMB
- Propeller/airframe anti-ice …… AS REQUIRED for climb-through-icing layers 🟥
- Baro → STD (at transition) …… SET
- **Cruise-altitude planning …… CONFIRMED WELL BELOW THE FL250 CEILING** for the sector flown 🟥
- Landing lights …… OFF ABOVE 10,000 / AS REQUIRED

## Cruise
- Altitude (per OFP, below FL250 ceiling) …… SET
- Power management (torque/ITT/Np/Ng) …… MONITORED vs OFP power setting
- Condition lever RPM regime …… CONFIRMED for cruise (as scheduled — e.g. reduced-RPM economy setting where fitted) 🟧 `[VERIFY]`
- Fuel …… MONITORED vs OFP
- CAS / systems …… NORMAL, no open message 🟧
- Icing …… ANTI-ICE SYSTEMS MANAGED per conditions encountered 🟥
- Route / FMS …… MONITORED, next-leg data cross-checked

## Descent / Approach
- Descent / approach brief (incl. icing/terrain awareness for the lower cruise regime) …… COMPLETE
- Baro (at transition level) …… SET
- Landing perf / VREF-equivalent / flap setting …… CHECKED, SET
- Fuel …… SUFFICIENT, RESERVES CONFIRMED
- Signs …… ON
- CAS / autoflight …… SET FOR APPROACH 🟧
- Minima …… SET
- Propeller/airframe anti-ice …… CONFIRMED SET for descent-through-icing layers

## Landing 🟥
- **Cabin …… SECURE**
- **Landing gear …… DOWN, 3 GREEN**
- **Flaps …… FULL / AS REQUIRED per perf**
- **Autofeather …… ARMED for the approach/landing phase per the flown schedule (if applicable to type logic)** 🟧 `[VERIFY]`
- **Condition levers …… CONFIRMED in the correct governing position for landing/reverse availability**
- **CAS landing-configuration message …… CLEAR** 🟧
- **Go-around altitude / power setting …… SET**

## After landing
- **Power levers …… GROUND-IDLE/BETA RANGE, into REVERSE as required for deceleration** 🟥 — propeller pitch (beta/reverse), not a jet-style thrust reverser, provides ground deceleration on this type
- Autofeather …… DISARMED
- Flaps …… RETRACTED
- Transponder …… AS REQUIRED (STBY/ground)
- Landing / strobe lights …… AS REQUIRED

## Shutdown / Secure
- Parking brake …… SET (or chocks in)
- **Condition levers …… FUEL SHUT-OFF (to feather) — engines/propellers secured** 🟥 — the turboprop-specific shutdown action; propellers are feathered via the condition levers, not simply run to idle-cutoff as on a jet
- Seatbelt signs …… OFF
- Beacon …… OFF
- Fuel pumps …… AUTO/OFF as required
- External power / APU (or hotel mode) …… AS REQUIRED 🟧 (hotel mode not simulated on the candidate model)
- CAS / status / doors …… CHECKED
- Aircraft …… SECURED (per secure-cockpit flow if last leg)

---

## Sources & References
*Public URLs only. Private/OEM/add-on documents may inform content but must never be listed here.*

- SKYbrary — ATR ATR-72-600 (AT76) — https://skybrary.aero/aircraft/at76
- ATR Aircraft — Cockpit / Thales avionics — https://www.atr-aircraft.com/innovation/cockpit/
- ATR Aircraft — PW127XT engine — https://www.atr-aircraft.com/innovation/pw127xt-engine/
- Aerosoft/simMarket — ATR 72-500 for X-Plane (product page, feature list) — https://secure.simmarket.com/aerosoft-online-atr-72-500-for-x-plane.phtml

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-25 | Initial draft — turboprop-specific normal flow re-expressed for the ATR-600 (condition levers/propeller governing, autofeather arm/disarm by phase, torque/ITT/Np/Ng power management, ground beta/reverse deceleration, propeller/airframe anti-ice, FL250 cruise-ceiling awareness); Before-takeoff/Landing marked 🟥; model-dependent items 🟧 given the -500-generation candidate's condition-lever and CAS limitations (Sim-Model §3). |
