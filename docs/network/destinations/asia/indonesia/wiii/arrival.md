# WIII — Soekarno-Hatta · Arrival Page

**WIII / CGK** · Jakarta (Tangerang, Banten), Indonesia · Asia
**Version** v0.1 · **Updated** 2026-07-26 · **Status** Draft — AIP Indonesia (AirNav Indonesia)-derived, Asia network build

> **Read-me:** Tactical arrival aid for the sim, not a chart. Companion to the [WIII Briefing](index.md), [Dispatch](dispatch.md) and [Departure](departure.md) pages. STARs/approaches are listed **by name only or flagged not-yet-confirmed** — fly the charted current-AIRAC version; minima shown are pointers, always verify on the current chart. Static data only; live wx/NOTAM are pulled at planning. Open 🟧 items are in §Open items. Flag legend 🟥 restriction/hazard · 🟧 caution/unverified · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| Usual landing runway(s) | Not confirmed — no dominant wind-driven configuration identified; expect assignment across 07L/07R or 25R/25L, or **06/24** for cross-runway use 🟧 |
| Usual approach | **ILS CAT I** on the assigned parallel-runway end; no CAT II/III found in reachable sources |
| Config logic | Not explicit in reachable AIP — light/variable equatorial wind, diurnal coastal sea/land-breeze pattern 🟧 |
| Transition level | By QNH; **transition altitude 11,000 ft**, representative TL FL130 `[AIP AD 2 WIII 2.17]` — flagged for a current-AIRAC check 🟧 |
| LVP trigger | Not confirmed — the practical visibility-reduction drivers here are monsoon convective rain and, seasonally, regional haze rather than radiation fog 🟧 |
| Missed-approach driver | Airspace/traffic density and the crossing third runway, not terrain |

---

## 2. STAR / transition selection

- **STARs (names only — verify current AIRAC):** Not confirmed in reachable research pass — pull the current-AIRAC STAR list at planning. Departures are confirmed to use an RNAV 1 transition/departure-route structure; arrivals likely mirror this but names are not confirmed. 🟧
- **Selection by arrival direction / runway:** Jakarta Approach assigns the STAR-to-runway transition for the active configuration via its Class B TMA sectors (Terminal East/West/South, Arrival North/East, Lower North/Centre/East) — several of which split responsibility by time-of-day (UTC 1500–2300 vs 2300–1500) rather than purely by geography. Confirm the active sector/frequency on the day.
- **Transition to approach:** Expect a radar-vectored transition onto the ILS for the assigned parallel-runway end; verify the charted transition structure.
- **Speed / flow constraints on the STAR:** Published speed/altitude gates are pointers only — verify chart; expect additional flow speed control given the high-density environment.

---

## 3. Descent & energy plan

- **Top-of-descent trigger:** Standard descent-profile planning; plan TOD to meet the first STAR altitude gate. The unusually high published transition altitude (11,000 ft) should be cross-checked before finalising a standard descent/QNH-transition plan. 🟧
- **Speed control:** 250 KIAS below FL100 (ICAO norm) assumed absent a local override — confirm current chart.
- **Altitude constraints:** Key STAR crossing constraints are pointers — fly the charted altitudes.
- **Energy traps:** Late runway/config changes driven by the field's light/variable wind regime, and re-sequencing/holding during an active convective-weather cell, are the main energy traps at this field.

---

## 4. Approach selection by runway

*Names only — verify minima on current AIRAC charts.*

| RWY | Approach (name) | LVP / CAT note | Minima pointer (verify AIRAC) |
|---|---|---|---|
| 07L | ILS | **CAT I** confirmed by AIP remark; exact ILS frequency not clearly extracted this pass 🟧 | verify current chart |
| 25R | ILS (ICGL) | **CAT I** 🟩; glide path 3.0° | verify current chart |
| 07R | ILS | **CAT I** 🟩 | verify current chart |
| 25L | ILS | **CAT I** 🟩; glide path 3.0° | verify current chart |
| 06/24 | Not published / verify 🟧 | Approach type not confirmed — new crossing runway, no data found in the reachable AIP extract | verify current chart |

- **LVP triggers:** No CAT II/III capability found in the reachable AIP extract — this is a **CAT I-only environment** per available sources; monsoon-season convective rain and, seasonally, regional haze are the practical visibility-reduction drivers rather than radiation fog. 🟧

---

## 5. Approach hazards (terrain / CFIT / specific threats)

- **CFIT / terrain:** 🟩 None identified. Flat Java north-coast plain at 34 ft AMSL — no close-in high terrain relevant to any arrival path; note the AIP's own obstacle-data section is marked "to be surveyed" rather than a confirmed clear result, so treat as unconfirmed rather than definitively clean. 🟧
- **Specific threats:** 🟥 High traffic density under Jakarta Approach; the **06/24 crossing runway** intersects the parallel-runway pair, and convective cells during the monsoon season can force holding/re-sequencing with an AIP-recognised windshear risk (LLWAS equipment is listed for the field).
- **Airspace / traffic:** 🟥 Very high density Class B TMA — one of the busiest terminal areas in Southeast Asia; brief for extended vectoring and re-sequencing, especially in marginal weather or during an active convective cell.

---

## 6. Missed approach watch-items

- **Terrain-driven MAP notes:** Terrain is not the driver (flat coastal plain) — fly the published MAP and verify climb-gradient/turn on the current chart.
- **Re-sequencing environment:** A go-around drops you back into a high-density Class B TMA with a crossing third runway — expect extended vectoring and possible holding before re-sequencing, especially during a convective-weather event.
- **Go-around traps:** Traffic/config awareness given the crossing-runway geometry; confirm current runway assignment before initiating any missed-approach turn.

---

## 7. Landing runway / LDA & braking / vacate

- **LDA by runway:** 07L/25R **3,600 m**; 07R/25L **3,660 m** — no displaced thresholds found in the reachable AIP extract 🟧 (not independently re-confirmed). Both pairs are ample for any K Global widebody. **RWY 06/24** LDA not published in the reachable extract. 🟧
- **Braking / vacate:** Rapid-exit taxiways are published per runway with angle/distance-from-threshold data (e.g. multiple RETs off each parallel runway ranging roughly 1,470–3,075 m from threshold) `[AIP AD 2 WIII 2.20.2.3]` — confirm the nominated exit with ATC/Ground on the day; minimum runway-occupancy-time practice is emphasised in the source procedure.
- **Runway-excursion watch:** 🟧 No displaced thresholds confirmed; monsoon-season heavy convective rainfall is the relevant seasonal braking-action consideration (see Briefing §14).

---

## 8. Taxi-in routing to terminal & hot spots

- **Typical taxi-in by runway → terminal:** After landing on the assigned runway, taxi in via the nominated rapid-exit taxiway to the assigned apron/terminal per Ground/Apron instruction; VAMSYS mirror gives a planning taxi-in time of **14 min** `[VAMSYS mirror 2026-07-26]`.
- **Hot spots / tight taxiways:** 🟧 No dedicated named hot-spot chart section found in the reachable AIP extract — verify current AIRAC. The practical caution points are the apron-specific pushback/ground-movement choreography and the **06/24 crossing-runway** interaction with the parallel-runway taxi system — see [Briefing §13](index.md).
- **Stand/gate notes:** See [Dispatch §3](dispatch.md) — the likely widebody cluster is the AVDGS-equipped Apron G (G15–G57)/Apron J range; exact gate assignment for our operation not yet confirmed.

---

## 9. Arrival frequency sequence

- **Sequence:** **Jakarta Radar/Director/Arrival (124.35, 130.1, 127.90, 119.75, 123.75, 125.45 — sector- and time-of-day-dependent) → Soekarno Hatta Tower (120.25 / 118.2, runway-dependent) → Soekarno Hatta Ground (121.75 / 121.6) → Apron/handling frequency as assigned.** Take the assigned frequency and confirm current chart. (Frequencies from Briefing §8.)
- **Approach/Departure control:** **Jakarta Approach** (AirNav Indonesia) is the facility for Jakarta's terminal area, with named sectors Terminal East/West/South and Arrival North/East; **Jakarta ACC** hands off en route inbound under the **Jakarta (WIIF)** FIR — see [Asia Airspace Brief](../../../../airspace/asia.md). 🟧 Exact sector/frequency assignment is time-of-day- and AIRAC-dependent.

---

## 10. Gotchas

- **RWY 06/24 crosses the parallel runway pair** — brief for a possible runway-crossing clearance and treat this runway as unconfirmed for widebody use.
- **No CAT II/III capability confirmed** — this is a CAT I-only environment per reachable sources; do not assume low-visibility autoland capability without a current-AIRAC confirmation.
- **Convective activity during the Nov–Mar monsoon** can bring sudden windshear (AIP-listed LLWAS equipment) and heavy rain — brief a go-around/holding contingency in season.
- **Seasonal regional haze** (dry season, worse in El Niño years) can affect the wider western-Indonesia region — monitor advisories even though Jakarta is usually less severely hit than up-country fields.
- **Jakarta Approach sector/frequency assignment changes by time-of-day (UTC)**, not just geography — confirm the active sector rather than assuming a fixed one.
- **Transition altitude (11,000 ft) is unusually high for a sea-level field** — confirm the current-AIRAC value before finalising a QNH-transition plan.

---

## Open items (🟧 — confirm against AIP / current AIRAC)

- Current-AIRAC STAR names and exact approach minima per runway.
- ILS 07L exact frequency (CAT I confirmed by AIP remark, frequency not clearly extracted this pass).
- Confirmation of the unusually high published transition altitude (11,000 ft / FL130) against a current source.
- Whether RWY 06/24 has a published approach and is cleared for widebody landing.
- Obstacle-survey status (Area 2/3 marked "to be surveyed" in the reachable AIP rather than confirmed clear).
- Named ground hot spots / current taxi-in routing detail.

> **Live data — pull at planning:** wx/METAR/TAF/TREND, NOTAM (runway/approach/navaid/lighting, esp. 06/24 status), ATIS config, regional haze/volcanic-ash advisories. Not stored in this durable file.

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim charts inform content but are not listed here.*

- **AIP Indonesia (Vol II), AD 2 WIII 2.10, 2.13, 2.17, 2.19, 2.20**, AMDT 76, eff. 07 Mar 2019 — obstacle data, declared distances, transition altitude, ILS data, arrival/rapid-exit-taxiway/low-visibility procedures — https://pdfcoffee.com/119-wiii-ad-2-1-to-2-63pdf-pdf-free.html (retrieved 2026-07-26).
- AirNav Indonesia — Jakarta FIR Air Traffic Management Contingency Plan — https://www.airnavindonesia.co.id/wp-content/uploads/2024/11/atm-cp-lvl-1-jkt-fir.pdf (retrieved 2026-07-26). *Jakarta (WIIF) FIR corroboration.*
- OurAirports — https://ourairports.com/airports/WIII/ (retrieved 2026-07-26).

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-26 | Built from national AIP; K Global fields from live VAMSYS; 4-page pack. |
