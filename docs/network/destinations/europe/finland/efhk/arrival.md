# EFHK — Helsinki-Vantaa · Arrival Page

**EFHK / HEL** · Vantaa, Uusimaa, Finland · Europe
**Version** v0.1 · **Updated** 2026-07-26 · **Status** Draft — Fintraffic ANS AIP-derived, K Global build

> **Read-me:** Tactical arrival aid for the sim, not a chart. Companion to the [EFHK Briefing](index.md), [Dispatch](dispatch.md) and [Departure](departure.md) pages. STARs/approaches are listed **by name only or flagged not-yet-confirmed** — fly the charted current-AIRAC version; minima shown are pointers, always verify on the current chart. Static data only; live wx/NOTAM are pulled at planning. Open 🟧 items are in §Open items. Flag legend 🟥 restriction/hazard · 🟧 caution/unverified · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| Usual landing runway(s) | **RWY 15** (from NW) or **RWY 22L** (from NE) primary; shifts to **04L/04R** with northerly/easterly wind |
| Usual approach | ILS — **CAT III on 04L/22R; CAT II on 22L; CAT I on 04R/15; RWY 33 no ILS** |
| Config logic | Wind-dependent across ~20 possible runway combinations; dependent-parallel-approach mode exists (confirm via ATIS) |
| Transition level | By QNH; transition altitude 5,000 ft AMSL |
| LVP trigger | Winter snow/ice/low-visibility; CAT III on 04L/22R is the standing mitigation — exact RVR trigger not confirmed 🟧 |
| Missed-approach driver | Traffic/runway-category awareness, not terrain |

---

## 2. STAR / transition selection

- **STARs (names only — verify current AIRAC):** Not confirmed in reachable public sources — pull the current-AIRAC STAR list at planning (graphical AD 2.24 charts, not captured in the text extract used to build this page). 🟧
- **Selection by arrival direction / runway:** **RWY 15** (NW arrivals) or **RWY 22L** (NE arrivals) are the primary landing runways; the configuration shifts to **04L/04R** (SW arrivals) when wind is from the north/east. A **dependent-parallel-approach mode** exists — ATIS then reports RWY 15 touchdown-zone wind instead of runway-specific wind; confirm the active mode.
- **Transition to approach:** Not confirmed — expect an RNAV-STAR-to-ILS transition with radar vectors onto final on the assigned runway; verify the charted transition.
- **Speed / flow constraints on the STAR:** Published speed/altitude gates are pointers only — verify chart.

---

## 3. Descent & energy plan

- **Top-of-descent trigger:** Standard descent-profile planning; plan TOD to meet the first STAR altitude gate.
- **Speed control:** STAR speed gates and 250 KIAS below FL100 (EU/ICAO norm) — confirm current chart.
- **Altitude constraints:** Key STAR crossing constraints are pointers — fly the charted altitudes.
- **Energy traps:** Confirm the assigned runway's actual ILS category early — do not assume CAT III on 04R/15/22L/33; winter snow/ice events can compress the arrival flow, and the dependent-parallel-approach mode changes the ATIS wind reference.

---

## 4. Approach selection by runway

*Names only — verify minima on current AIRAC charts.*

| RWY | Approach (name) | LVP / CAT note | Minima pointer (verify AIRAC) |
|---|---|---|---|
| 04L | ILS (HTV) | **CAT III** 🟩 | verify current chart |
| 22R | ILS (HUO) | **CAT III** 🟩 — displaced threshold, LDA 3,000 m | verify current chart |
| 04R | ILS (HG) | **CAT I only** — displaced threshold, LDA 3,200 m 🟧 | verify current chart |
| 22L | ILS (HK) | **CAT II only** 🟧 | verify current chart |
| 15 | ILS (HL) | **CAT I only** — primary NW landing runway 🟧 | verify current chart |
| 33 | Non-precision (PAPI 3.5° only) | **No ILS at all**; avoided as a jet landing runway at night 🟧 | verify current chart |

- **LVP triggers:** Winter snow/ice/low-visibility conditions are the field's routine hazard; CAT III on 04L/22R is the standing mitigation, but **04R, 22L, 15 and 33 do not support the same capability** — plan the assigned runway's actual category into the approach ban decision. 🟧

---

## 5. Approach hazards (terrain / CFIT / specific threats)

- **CFIT / terrain:** 🟩 None identified. Flat, low-lying Uusimaa terrain at 180 ft AMSL — no close-in high terrain relevant to any arrival path.
- **Specific threats:** 🟧 **Asymmetric ILS-category pattern** across the three runways — do not assume CAT III on the assigned end without checking. **Winter snow/ice contamination** is the field's defining hazard, with a documented fatal precedent (31 Jan 2005, Cessna 208B wing-ice/snow stall crash shortly after takeoff — a departure-phase event, but a direct, field-specific reminder of how seriously icing must be treated here in any phase).
- **Airspace / traffic:** 🟩 Major Nordic-hub traffic density; independent parallel operations on 04L/22R and 04R/22L (since Nov 2007) support efficient arrival flow across roughly twenty runway-combination options.

---

## 6. Missed approach watch-items

- **Terrain-driven MAP notes:** Terrain is not the driver (flat, low-lying) — fly the published MAP and verify climb-gradient/turn on the current chart.
- **Re-sequencing environment:** A go-around returns you to the multi-runway-combination traffic flow — expect vectoring, especially during winter low-vis events.
- **Go-around traps:** Runway/CAT-category awareness on the miss; confirm the dependent-parallel-approach mode status if active.

---

## 7. Landing runway / LDA & braking / vacate

- **LDA by runway:** 04L **3,060 m**; **22R 3,000 m (displaced)**; **04R 3,200 m (displaced)**; 22L **3,500 m**; 15/33 **2,901 m**. Use the correct displaced-threshold LDA for 22R/04R, not the full runway length.
- **Braking / vacate:** Rapid-exit taxiway detail not confirmed — confirm with Ground/Apron on the day. 🟧
- **Runway-excursion watch:** 🟧 Winter snow/ice contamination is the principal excursion driver at this field; the reduced LDAs on 22R/04R make correct threshold awareness a real factor for a marginal-weight or contaminated-runway landing.

---

## 8. Taxi-in routing to terminal & hot spots

- **Typical taxi-in by runway → terminal:** After landing, taxi in to the assigned terminal section (Schengen or non-Schengen gate range) per Ground/Apron assignment; VAMSYS mirror gives a planning taxi-in time of **12 min** `[VAMSYS mirror 2026-07-26]`. Note: aircraft landing **RWY 22L must not vacate via taxiway ZG** unless specifically instructed by ATC.
- **Hot spots / tight taxiways:** 🟧 Formally charted hot spots are on the graphical Aerodrome Chart, not captured in the text extract used to build this page.
- **Stand/gate notes:** See [Dispatch §3](dispatch.md) — West Pier/South Pier widebody clusters (non-Schengen, gates 37–55) are the likely assignment.

---

## 9. Arrival frequency sequence

- **Sequence:** **Helsinki Arrival 119.900/124.325 → Helsinki Radar 119.100/129.850 → Helsinki Tower 118.600/118.850 → Helsinki Ground 121.800/118.125.** Take the assigned frequency and confirm current chart. (Frequencies from Briefing §8.)
- **Approach/Departure control:** **Helsinki Radar/Arrival** provides terminal-area service; Finland's en-route FIR/ACC (commonly referenced as EFIN) hands off inbound — see [Airspace/General — Europe](../../../../airspace/europe.md) 🟧 (no Finland-specific FIR brief in-library; exact controlling-centre name not independently confirmed this pass). Exact sector/frequency assignment is AIRAC-dependent.

---

## 10. Gotchas

- **Do not assume CAT III on every runway end** — only 04L and 22R have it; 22L is CAT II; 04R/15 are CAT I; RWY 33 has no ILS at all.
- **Displaced thresholds on 22R (LDA 3,000 m) and 04R (LDA 3,200 m)** — use the correct figure for landing performance.
- **RWY 33 is avoided as a jet landing runway at night** due to population density on the SE approach path.
- **Winter icing is a real, documented hazard at this field** — plan a conservative contamination assessment on approach/landing given the field's severe-winter profile (the harshest of the three in this pack).
- **Confirm the dependent-parallel-approach mode status via ATIS** — it changes the reported touchdown-zone wind reference.

---

## Open items (🟧 — confirm against AIP / current AIRAC)

- Current-AIRAC STAR names and exact approach minima per runway.
- Exact LVP/CAT trigger RVR values per runway.
- Rapid-exit taxiway/vacate detail.
- Current taxi-in routing and gate assignment.
- Taxiway hot spots by ID (graphical chart, not captured in text extract).
- Exact FIR/ACC designation and controlling-centre name for Finland.

> **Live data — pull at planning:** wx/METAR/TAF/TREND, NOTAM (runway/approach/navaid/lighting, esp. CAT II/III equipment status per runway), ATIS config/wind trend/dependent-parallel-mode status. Not stored in this durable file.

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim charts inform content but are not listed here.*

- **Fintraffic ANS — AIP Finland, AD 2 EFHK**, AIRAC cycle 003-2023 (eff. 2023-06-15) — STAR/IAP index, runway/declared-distance data, communications — https://www.ais.fi/eaip/003-2023_2023_06_15/eAIP/EF-AD%202%20EFHK%20-%20HELSINKI-VANTAA%201-en-GB.html (retrieved 2026-07-26).
- Wikipedia — "Helsinki Airport" — https://en.wikipedia.org/wiki/Helsinki_Airport (retrieved 2026-07-26). *Runway configuration logic, 2005 icing accident, independent-parallel-ops date.*

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-26 | Built from Fintraffic ANS AIP Finland; K Global fields from live VAMSYS; 4-page pack. |
