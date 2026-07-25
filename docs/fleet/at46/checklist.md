<!--
================================================================================
  K Global — AIRFRAME PACK · CHECKLIST  ·  AT46 ATR 42-600
  Curated normal checklist, tailored to the approved sim model.
  FLAG LEGEND  🟥 memory/critical item   🟧 caution/model-dependent   🟩 normal
================================================================================
-->

# AT46 — ATR 42-600 · Normal Checklist

**AT46 / ATR-600 series** · **TURBOPROP** 🟥 · **no confirmed sim model** 🟥 `[VERIFY — see Sim-Model]` · sim = X-Plane 11
**Version** v0.1 · **Updated** 2026-07-25 · **Status** Draft

> **Read-me:** K Global normal-ops flow, written to the real ATR 42-600 airframe as a procedural/ground-school reference. **No approved X-Plane model exists for this type** (Sim-Model §1) — every item below is therefore model-independent by necessity rather than tailored to a specific product's quirks; if K Global later adopts the AT76's ATR 72-500 as a logged cross-family substitution (Sim-Model §2), that product's own limitations (condition-lever function, incomplete CAS) would then apply and should be cross-checked against the [AT76 Checklist](../at76/checklist.md). **This is a turboprop** — the flow below uses **power levers** (torque/power setting), **condition levers** (propeller governing/fuel-shutoff/feather), **autofeather**, and **beta/ground-idle/reverse** propeller handling in place of the throttle/thrust-reverser logic used on every jet type in this fleet — architecture identical to the AT76's, shared under the common ATR-600 type rating. Flag legend 🟥 memory/critical · 🟧 model-dependent · 🟩 normal.

---

*Format: **CHALLENGE …… RESPONSE**. Generic ATR-600 (Thales glass cockpit) flow, re-expressed from general public turboprop-systems knowledge — deliberately mirrors the [AT76 Checklist](../at76/checklist.md) given the shared type rating and near-identical systems architecture, adjusted only where the smaller airframe's config differs. Verify each item against whatever model is eventually adopted before line use `[VERIFY]`.*

## Preflight / Cockpit prep
- Documents / OFP / navlog …… ABOARD, CHECKED
- Circuit breakers / gear pins / covers / propeller ties …… STOWED / NORMAL
- Batteries …… ON
- External power / APU (or single-engine "hotel mode" if fitted) …… AS REQUIRED, POWER AVAIL 🟧
- CAS / status messages …… REVIEWED, NO OPEN ITEM 🟧 (no confirmed model — depth unknown, see Sim-Model)
- Fuel quantity / distribution …… CHECKED vs OFP (note this variant's smaller ~3,600 kg max-fuel figure, Dispatch §1)
- Flight controls (yoke, rudder, trim) …… CHECKED FULL & FREE
- Power levers …… CONFIRMED FLIGHT-IDLE GATE / GROUND-IDLE RANGE understood
- Condition levers …… SET (FUEL SHUT-OFF for cold cockpit; confirm governing positions before start)
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
- **Condition lever …… advanced to the governing (RUN/AUTO) position** at the specified Ng/gas-generator speed to introduce fuel and bring the propeller out of feather 🟥 — the turboprop-specific "prop out of feather" action with no jet-fleet equivalent
- ITT / Ng / oil pressure during light-up …… MONITORED, WITHIN LIMITS
- Propeller …… CONFIRMED ROTATING, STABILISED AT GOVERNED RPM
- Generator / bleed (as applicable) …… ON, CHECKED
- Repeat for second engine
- **Notes / model 🟧:** no confirmed sim model exists (Sim-Model §1) — this flow is a procedural reference, not tailored to a specific product's start logic.

## After start
- APU / external power …… DISCONNECTED / STOPPED as required
- Propeller anti-ice / airframe anti-ice …… AS REQUIRED (icing conditions on the ground) 🟥
- CAS / status …… CHECKED, NO ABNORMAL MESSAGE 🟧
- Ground equipment …… CLEAR

## Before taxi
- Flight controls …… CHECKED (full travel, yoke/rudder/trim)
- Flaps …… SET FOR TAKEOFF (per takeoff data)
- Trim …… SET per takeoff data
- **Autofeather …… ARMED** 🟥 — arm before takeoff per the phase-of-flight logic; this automatically feathers a failed engine's propeller above the torque-loss threshold during the takeoff/initial-climb phase (see QRH Ch 1/Ch 2)
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
- Fuel …… MONITORED vs OFP — note this variant's shorter typical sector/smaller tanks leave less margin than the AT76 (Dispatch §3)
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
- **Power levers …… GROUND-IDLE/BETA RANGE, into REVERSE as required for deceleration** 🟥 — propeller pitch (beta/reverse), not a jet-style thrust reverser, provides ground deceleration on this type; the shorter, lighter airframe typically needs less runway than the AT76 for the same technique
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
- External power / APU (or hotel mode) …… AS REQUIRED 🟧
- CAS / status / doors …… CHECKED
- Aircraft …… SECURED (per secure-cockpit flow if last leg)

---

## Sources & References
*Public URLs only. Private/OEM/add-on documents may inform content but must never be listed here.*

- SKYbrary — ATR ATR-42-600 (AT46) — https://skybrary.aero/aircraft/at46
- ATR Aircraft — Cockpit / Thales avionics — https://www.atr-aircraft.com/innovation/cockpit/
- ATR Aircraft — PW127XT engine — https://www.atr-aircraft.com/innovation/pw127xt-engine/
- Wikipedia — Pratt & Whitney Canada PW100/PW150 — https://en.wikipedia.org/wiki/Pratt_%26_Whitney_Canada_PW100

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-25 | Initial draft — turboprop-specific normal flow re-expressed for the ATR-600 (condition levers/propeller governing, autofeather arm/disarm by phase, torque/ITT/Np/Ng power management, ground beta/reverse deceleration, propeller/airframe anti-ice, FL250 cruise-ceiling awareness), deliberately mirroring the AT76 Checklist given the shared ATR-600 type rating; Before-takeoff/Landing marked 🟥; written as a model-independent procedural reference given no confirmed sim model exists (Sim-Model §1). |
