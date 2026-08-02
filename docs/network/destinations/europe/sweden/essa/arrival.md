# ESSA — Stockholm Arlanda · Arrival Page

**ESSA / ARN** · Sigtuna, Stockholm County, Sweden · Europe
**Version** v0.1 · **Updated** 2026-07-26 · **Status** Draft — LFV AIP-derived, K Global build

> **Read-me:** Tactical arrival aid for the sim, not a chart. Companion to the [ESSA Briefing](index.md), [Dispatch](dispatch.md) and [Departure](departure.md) pages. STARs/approaches are listed **by name only or flagged not-yet-confirmed** — fly the charted current-AIRAC version; minima shown are pointers, always verify on the current chart. Static data only; live wx/NOTAM are pulled at planning. Open 🟧 items are in §Open items. Flag legend 🟥 restriction/hazard · 🟧 caution/unverified · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| Usual landing runway(s) | **01L/19R or 01R/19L** (independent parallel pair, wind-dependent); **08/26 only at peak hours** |
| Usual approach | ILS — **CAT III on 01L/01R/19L; CAT I only on 19R/26; RWY 08 localizer/NDB only (no confirmed glidepath)** |
| Config logic | Wind-dependent within the independent-parallel pair; 08/26 activated only at peak hours |
| Transition level | By QNH; transition altitude 5,000 ft AMSL — not independently re-confirmed this pass 🟧 |
| LVP trigger | Winter snow/ice/low-vis conditions; CAT III on 01L/01R/19L is the standing mitigation — exact RVR trigger not confirmed 🟧 |
| Missed-approach driver | Traffic/runway-category awareness, not terrain |

---

## 2. STAR / transition selection

- **STARs (names only — verify current AIRAC):** Not confirmed in reachable public sources — pull the current-AIRAC STAR list at planning. 🟧
- **Selection by arrival direction / runway:** 01L/19R and 01R/19L run fully independent simultaneous approaches, including in IMC; 08/26 is used only at peak hours for capacity/environmental reasons — expect it rarely.
- **Transition to approach:** Not confirmed — expect an RNAV-STAR-to-ILS transition with radar vectors onto final on the assigned parallel; verify the charted transition.
- **Speed / flow constraints on the STAR:** Published speed/altitude gates are pointers only — verify chart.

---

## 3. Descent & energy plan

- **Top-of-descent trigger:** Standard descent-profile planning; plan TOD to meet the first STAR altitude gate.
- **Speed control:** STAR speed gates and 250 KIAS below FL100 (EU/ICAO norm) — confirm current chart.
- **Altitude constraints:** Key STAR crossing constraints are pointers — fly the charted altitudes.
- **Energy traps:** Confirm the assigned runway's actual ILS category early — do not assume CAT III capability on 19R/26/08; winter snow/ice events can compress the arrival flow.

---

## 4. Approach selection by runway

*Names only — verify minima on current AIRAC charts.*

| RWY | Approach (name) | LVP / CAT note | Minima pointer (verify AIRAC) |
|---|---|---|---|
| 01L | ILS (SSA) | **CAT III** 🟩 | verify current chart |
| 19R | ILS (NSA) | **CAT I only** — no CAT III on this end 🟧 | verify current chart |
| 01R | ILS (TSA) | **CAT III** 🟩 | verify current chart |
| 19L | ILS (USA) | **CAT III** 🟩 | verify current chart |
| 08 | LOC (WSA) + NDB (L08 WA) | **No confirmed glidepath** — non-precision only, peak-hour-only runway 🟧 | verify current chart |
| 26 | ILS (ESA) | **CAT I only** — no CAT III on this end 🟧 | verify current chart |

- **LVP triggers:** Winter snow/ice/low-visibility conditions are the field's routine hazard; CAT III on 01L/01R/19L is the standing mitigation, but **19R, 26 and 08 do not support autoland** — plan the assigned runway's actual capability into the approach ban decision. 🟧

---

## 5. Approach hazards (terrain / CFIT / specific threats)

- **CFIT / terrain:** 🟩 None identified. Flat, low-lying Uppland terrain at 137 ft AMSL — no close-in high terrain relevant to any arrival path.
- **Specific threats:** 🟧 **Asymmetric ILS-category pattern** across the three runways — do not assume CAT III on the assigned end without checking. Winter **clear-ice/cold-soak** conditions are the field's landmark cold-weather hazard (1991 Gottröra accident — dual engine failure from wing-shed ice shortly after takeoff, successful forced landing in forested terrain nearby, all aboard survived).
- **Airspace / traffic:** 🟩 Major Nordic-hub traffic density; 01L/19R and 01R/19L support fully independent simultaneous operations, a real operational strength for arrival flow.

---

## 6. Missed approach watch-items

- **Terrain-driven MAP notes:** Terrain is not the driver (flat, low-lying) — fly the published MAP and verify climb-gradient/turn on the current chart.
- **Re-sequencing environment:** A go-around returns you to the independent-parallel-runway traffic flow — expect vectoring, especially during winter low-vis events or when 08/26 is active at peak hours.
- **Go-around traps:** Runway/CAT-category awareness on the parallel set during the miss.

---

## 7. Landing runway / LDA & braking / vacate

- **LDA by runway:** 01L/19R **3,301 m**; 01R/19L, 08, 26 **2,500 m** — no displaced thresholds found in reachable sources. All are ample for any K Global type at typical arrival weights.
- **Braking / vacate:** Rapid-exit taxiway detail not confirmed — confirm with Ground/Apron on the day. 🟧
- **Runway-excursion watch:** 🟧 Winter snow/ice contamination is the principal excursion driver at this field; a historical excursion precedent exists (7 Oct 1997, heavy-landing/nosewheel-steering failure departing RWY 26 into the grass — no fatalities, aircraft written off).

---

## 8. Taxi-in routing to terminal & hot spots

- **Typical taxi-in by runway → terminal:** After landing, taxi in to the assigned terminal (most likely Terminal 5) per Ground/Apron assignment; **taxiway bridges** connect RWY 01R/19L specifically to the main terminal complex. VAMSYS mirror gives a planning taxi-in time of **15 min** `[VAMSYS mirror 2026-07-26]`.
- **Hot spots / tight taxiways:** 🟧 Not confirmed by name; AIP-noted constraints include the 90°-turn exit-taxiway restriction, apron-crossing prohibitions (ZF–ZG, ZH–ZK, ZL–ZN), 24 m max wingspan on Apron S between SA–SC, and the jet-blast restriction on Apron F.
- **Stand/gate notes:** See [Dispatch §3](dispatch.md) — Terminal 5 widebody cluster (Piers D/E/F) is the likely assignment; some gates A380-capable since 2018.

---

## 9. Arrival frequency sequence

- **Sequence:** **TMC Stockholm Control (Approach) 123.750 → Tower 118.500 (01L/19R) / 125.125 (01R/19L) / 128.725 (08/26) → Ground 121.700/121.925/121.975.** Take the assigned frequency and confirm current chart. (Frequencies from Briefing §8.)
- **Approach/Departure control:** **TMC Stockholm Control** provides terminal-area service; Sweden's en-route ACC (ESAA) hands off inbound — see [Airspace/General — Europe](../../../../airspace/europe.md) 🟧 (no Sweden-specific FIR brief in-library). Exact sector/frequency assignment is AIRAC-dependent.

---

## 10. Gotchas

- **Do not assume CAT III on every runway end** — 19R and 26 are CAT I only, and RWY 08 has no confirmed glidepath at all.
- **RWY 08/26 is peak-hour-only** — do not expect it as a routine arrival option.
- **Clear-ice/cold-soak risk is a real, field-specific hazard** in winter — the 1991 Gottröra accident is a direct, sourced precedent.
- **Taxiway bridges to RWY 01R/19L** are a distinctive ground-routing feature — confirm current routing/timing if assigned that runway.
- **Mandatory slot compliance** at this field means a late arrival has real downstream schedule consequences, even without a hard curfew.

---

## Open items (🟧 — confirm against AIP / current AIRAC)

- Current-AIRAC STAR names and exact approach minima per runway.
- ILS sub-category (IIIA/IIIB) confirmation on 01L/01R/19L.
- Exact LVP/CAT trigger RVR values per runway.
- Rapid-exit taxiway/vacate detail.
- Current taxi-in routing and gate assignment post-2024–2025 terminal consolidation.
- Taxiway hot spots by ID.

> **Live data — pull at planning:** wx/METAR/TAF/TREND, NOTAM (runway/approach/navaid/lighting, esp. CAT III equipment status per runway), ATIS config/wind trend. Not stored in this durable file.

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim charts inform content but are not listed here.*

- **LFV AIP Sweden, AD 2 ESSA** (2012–2014 cycle extract; current cycle confirmed live at AMDT 4/2026 via https://aro.lfv.se) — STAR/IAP index, runway/declared-distance data, communications — https://opennav.com/pdf/ESSA/ES_AD_2_ESSA_en.pdf (retrieved 2026-07-26).
- Wikipedia — "Stockholm Arlanda Airport" — https://en.wikipedia.org/wiki/Stockholm_Arlanda_Airport (retrieved 2026-07-26). *Runway configuration logic, 1997 excursion event, taxiway-bridge detail.*
- Wikipedia — "Scandinavian Airlines Flight 751" — https://en.wikipedia.org/wiki/Scandinavian_Airlines_Flight_751 (retrieved 2026-07-26). *1991 Gottröra accident.*

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-26 | Built from LFV AIP; K Global fields from live VAMSYS; 4-page pack. |
