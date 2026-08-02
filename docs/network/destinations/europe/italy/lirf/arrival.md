# LIRF — Fiumicino · Arrival Page

**LIRF / FCO** · Fiumicino, Rome, Lazio, Italy · Europe
**Version** v0.1 · **Updated** 2026-07-26 · **Status** Draft — AIP Italia (ENAV)-derived, K Global network build

> **Read-me:** Tactical arrival aid for the sim, not a chart. Companion to the [LIRF Briefing](index.md), [Dispatch](dispatch.md) and [Departure](departure.md) pages. STARs/approaches are listed **by name only or flagged not-yet-confirmed** — fly the charted current-AIRAC version; minima shown are pointers, always verify on the current chart. Static data only; live wx/NOTAM are pulled at planning. Open 🟧 items are in §Open items. Flag legend 🟥 restriction/hazard · 🟧 caution/unverified · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| Usual landing runway(s) | Reported as the **16/34 parallel pair** for the bulk of scheduled traffic — not independently confirmed in detail this pass 🟧 |
| Usual approach | ILS on the assigned parallel (CAT IIIA/IIIB reported); RNAV (GNSS) network-wide |
| Config logic | Wind/traffic/noise-dependent; not independently confirmed in detail |
| Transition level | By QNH — see Briefing §10 QNH/TL table 🟧 |
| LVP trigger | Coastal fog can reduce visibility below CAT I minima in winter; exact RVR trigger not confirmed 🟧 |
| Missed-approach driver | Airspace/traffic density in the shared Roma TMA (with Ciampino), not terrain |

---

## 2. STAR / transition selection

- **STARs (names only — verify current AIRAC):** Not confirmed in reachable research pass — pull the current-AIRAC STAR list at planning. 🟧
- **Selection by arrival direction / runway:** Not independently confirmed in detail; Roma Approach assigns the STAR-to-runway transition for the active configuration.
- **Transition to approach:** Expect an RNAV-STAR-to-ILS transition with radar vectors onto final for the assigned parallel; verify the charted transition.
- **Speed / flow constraints on the STAR:** Published speed/altitude gates are pointers only — verify chart; expect additional flow speed control given the field's slot-coordinated hub density.

---

## 3. Descent & energy plan

- **Top-of-descent trigger:** Standard descent-profile planning; plan TOD to meet the first STAR altitude gate.
- **Speed control:** STAR speed gates and 250 KIAS below FL100 (EU/ICAO norm) — confirm current chart.
- **Altitude constraints:** Key STAR crossing constraints are pointers — fly the charted altitudes.
- **Energy traps:** Late runway/config changes ahead of a wind shift, and any holding/resequencing during a coastal-fog event or peak-bank congestion in the shared Roma TMA, are the main energy traps at this field.

---

## 4. Approach selection by runway

*Names only — verify minima on current AIRAC charts.*

| RWY | Approach (name) | LVP / CAT note | Minima pointer (verify AIRAC) |
|---|---|---|---|
| 16L | ILS; RNAV (GNSS) | **CAT IIIB reported** 🟧 | verify current chart |
| 16R | ILS; VOR; RNAV (GNSS) | **CAT IIIA reported** 🟧 | verify current chart |
| 34L / 34R | ILS/RNAV (GNSS), reciprocal | Not confirmed 🟧 | verify current chart |
| 07 | VOR; RNAV (GNSS) | No ILS reported | verify current chart |
| 25 | ILS (CAT I reported); RNAV (GNSS) | 🟧 | verify current chart |

- **LVP triggers:** Coastal fog is a plausible seasonal trigger; exact RVR/trigger figures and ILS sub-category confirmation not obtained from a primary AIP table this pass. 🟧

---

## 5. Approach hazards (terrain / CFIT / specific threats)

- **CFIT / terrain:** 🟩 None. Flat Roman coastal plain at 13 ft AMSL — no close-in high terrain relevant to any arrival path.
- **Specific threats:** 🟥 **Standing, documented bird-strike/wildlife hazard** from adjoining coastal wetland nature reserves (Briefing §3.4) — maintain vigilance on approach and landing roll, especially during spring/autumn migration. The field's reduced effective runway capacity (16C/34C closure) also concentrates arrival flow onto fewer strips than the original design.
- **Airspace / traffic:** 🟥 Busy, slot-coordinated Roma TMA shared with nearby Ciampino (LIRA) traffic — brief for re-sequencing and extended vectoring, especially in marginal weather or during a coastal-fog event.

---

## 6. Missed approach watch-items

- **Terrain-driven MAP notes:** Terrain is not the driver (flat coastal plain) — fly the published MAP and verify climb-gradient/turn on the current chart.
- **Re-sequencing environment:** A go-around drops you back into a busy, slot-coordinated Roma TMA shared with Ciampino traffic — expect extended vectoring and possible holding before re-sequencing.
- **Go-around traps:** Traffic/config awareness on the parallel set during the miss; the historical third parallel (16C/34C), now Taxiway "D", is not a factor for the missed approach itself but remains a ground-workload consideration on the subsequent taxi-in.

---

## 7. Landing runway / LDA & braking / vacate

- **LDA by runway:** 07 **2,892 m** (411 m displaced threshold); 25 **3,307 m**; 16L **~3,002 m** (apparent gap against TORA, not explained by a displaced-threshold figure found this pass — flag 🟧); 16R/34L/34R **~3,902 m**. All figures ample for any K Global widebody except the flagged 16L figure, which should be treated conservatively pending AIP confirmation.
- **Braking / vacate:** Rapid-exit taxiway detail not confirmed in reachable sources — confirm with Ground/Apron on the day. 🟧
- **Runway-excursion watch:** 🟧 RWY 07's displaced threshold and the unexplained 16L LDA/TORA gap are the two runway-excursion-relevant flags at this field (Briefing §3.3/§7).

---

## 8. Taxi-in routing to terminal & hot spots

- **Typical taxi-in by runway → terminal:** After landing on the assigned runway, taxi in to the assigned terminal/pier per Ground/Apron assignment; VAMSYS mirror gives a planning taxi-in time of **18 min** `[VAMSYS mirror 2026-07-26]`. The historical third parallel (16C/34C) is now **Taxiway "D"** and forms part of this ground-movement network.
- **Hot spots / tight taxiways:** Not confirmed in reachable sources this pass — pull the current AD 2 chart's hot-spot annex before use. 🟧
- **Stand/gate notes:** See [Dispatch §3](dispatch.md) — widebody clusters reported around Terminal 3 and select Terminal 1 piers; current-day gate assignment for our operation not yet confirmed.

---

## 9. Arrival frequency sequence

- **Sequence:** **Roma Departure 130.900 / Roma Director 131.250 / Roma Arrivals 125.500 (sector-specific) → Fiumicino Tower 118.700 / East Tower 127.625 (16L/34R only) → Fiumicino Ground 121.900 / West Ground 122.125.** Take the assigned frequency and confirm current chart. (Frequencies from Briefing §8, network-sim sourced — not independently AIP-confirmed.) 🟧
- **Approach/Departure control:** **Roma Approach** is the facility for Fiumicino's terminal approach; **Roma ACC (LIRR)** hands off en route inbound — no dedicated in-library Roma FIR brief exists; see [Europe — Airspace Briefing](../../../../airspace/europe.md) 🟧 (general continental brief only, does not cover Italy/Roma FIR specifics).

---

## 10. Gotchas

- **RWY 16C/34C is not a runway** — it is permanently closed and repurposed as Taxiway "D." Do not expect it as an arrival option under any configuration; stale navdata may still show it as active.
- **Standing bird-strike/wildlife hazard** — brief accordingly, especially during spring/autumn migration windows, and be alert for a wildlife-related go-around call from ATC or a preceding aircraft.
- **Coastal fog can drop visibility quickly in winter** — brief the LVP/holding contingency even though exact trigger figures are not confirmed this pass.
- **Busy, slot-coordinated Roma TMA shared with Ciampino traffic** — expect vectoring/holding, especially in marginal weather or during a bank.
- **RWY 16L's landing-distance figure carries an unexplained gap against its TORA** — treat the shorter LDA figure as authoritative until confirmed on a current chart.
- Config swap driven by a wind shift can bring a late runway change — watch the ATIS wind trend.

---

## Open items (🟧 — confirm against AIP / current AIRAC)

- Current-AIRAC STAR names and exact approach minima per runway.
- ILS sub-category (IIIA/IIIB) and CAT I/ILS ident/frequency confirmation.
- Exact LVP/CAT III trigger RVR values.
- Rapid-exit taxiway/vacate detail.
- RWY 16L LDA/TORA gap — confirm against a primary AIP declared-distance table.
- Current taxi-in routing and gate assignment for our operation.

> **Live data — pull at planning:** wx/METAR/TAF/TREND, NOTAM (runway/approach/navaid/lighting), ATIS config/wind trend, wildlife-hazard bulletins, current Roma TMA/FIR restrictions. Not stored in this durable file.

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim charts inform content but are not listed here.*

- IVAO Italy — Quick Overview, Roma Fiumicino — https://quickoverview.ivao.it/aerodrome/show/LIRF (retrieved 2026-07-26). *STAR/approach index, runway/declared-distance data, communications — network-sim source, not regulatory.*
- OurAirports — https://ourairports.com/airports/LIRF/runways.html (retrieved 2026-07-26). *Runway/declared-distance corroboration, closure status of 16C/34C.*
- PLOS One / peer-reviewed wildlife-strike research referencing Fiumicino (retrieved 2026-07-26). *Bird-strike/wildlife hazard corroboration.*

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-26 | Built from AIP Italia (ENAV); K Global fields from live VAMSYS; 4-page pack. |
