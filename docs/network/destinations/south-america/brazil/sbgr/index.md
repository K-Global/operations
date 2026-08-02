# SBGR — Guarulhos–Governador André Franco Montoro · Airport Briefing

**SBGR / GRU** · Guarulhos, São Paulo, Brazil · South America
**Version** v0.1 · **Updated** 2026-07-26 · **Status** Draft — AIP Brasil (DECEA)-derived, K Global home-region base build

> **Read-me:** Planning aid for the sim, not a chart. Static data is drawn from AIP Brasil (DECEA/AISWEB) where reachable, cross-checked against public aeronautical registers; approaches/SIDs/STARs are listed **by name only or flagged not-yet-confirmed** — fly the charted current-AIRAC version. Live weather/NOTAMs are pulled at planning (§14/§15). Open 🟧 items are listed in §18. Flag legend 🟥 restriction/hazard · 🟧 caution/unverified · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| ARP (lat/long) | S23°26′08″ / W046°28′23″ (-23.43556, -46.47306) `[AISWEB pilot-info / OurAirports, retrieved 2026-07-26]` |
| Field elevation | **2,461 ft / 750 m AMSL** |
| Mag variation | 🟧 Not published / verify — not confirmed in reachable sources |
| Time zone | **UTC−3** (Brazil has not observed DST since 2019 — no seasonal offset) |
| Runway(s) | **10L/28R** 3,700 × 45 m (asphalt) · **10R/28L** 3,000 × 45 m (asphalt) — 🟧 current-AIRAC designators; older public sources (pre-magnetic-variation-cycle renumbering) show these as **09L/27R** and **09R/27L** — brief crews off the **current chart**, not a legacy reference |
| Preferential runway | Wind/flow/slot-driven; exact preferential logic not confirmed 🟧 — see §10/§11 |
| Longest LDA | ~3,700 m (10L/28R) — exact declared distance not independently confirmed 🟧 |
| Approaches | ILS on all four runway ends (10L/28L/10R/28R) — CAT sub-category not confirmed 🟧 |
| RFF category | 🟧 Not published / verify |
| Control type | **Radar** — São Paulo Approach ("Controle São Paulo") terminal; **Curitiba (SBCW) FIR / ACC-CW (CINDACTA II)** en route — see [South America Airspace briefing](../../../../airspace/south-america.md) |
| Elevation class | Moderate (2,461 ft) — not classic hot-and-high, but combined with summer afternoon temperatures it trims margin on the shorter 10R/28L runway for the heaviest long-haul departures 🟧 |
| Special-airport status | 🟥 **Slot-coordinated** — one of five capacity-restricted Brazilian aerodromes (with Congonhas/SBSP, Brasília/SBBR, Belo Horizonte–Pampulha, Rio–Santos Dumont/SBRJ), publicly reported cap of **~45 movements/hour**; exact IATA coordination level not confirmed 🟧 |
| Customs / PoE | **Yes** — Brazil's principal international passenger gateway; H24 expectation for a hub of this size 🟧 (desk hours not confirmed) |
| K Global category | **H** `[VAMSYS mirror 2026-07-26]` |
| K Global base | **YES** — regional base for the South American network `[VAMSYS mirror 2026-07-26]` |
| Company preferred alternates | **SBKP, SBSP** `[VAMSYS mirror 2026-07-26]` |
| Taxi-in / taxi-out (VAMSYS) | **18 min / 20 min** `[VAMSYS mirror 2026-07-26]` |

---

## 2. Validation summary

| Domain | Flag | Note |
|---|---|---|
| Terrain / CFIT | 🟧 | Serra da Cantareira range close north of the field (peaks to ~1,000 m/3,300 ft) and the Serra do Mar escarpment falling away S–SE toward the coast (regional context, see §3.1). Not extreme, but genuinely close-in terrain — not a flat-field airport. |
| Runway length vs fleet perf | 🟩 | 3,700 m main runway (10L/28R) is ample for any K Global widebody; 3,000 m secondary (10R/28L) is non-limiting for typical arrival/departure weights — watch margins on the heaviest long-haul departures on a hot afternoon. |
| Approach availability / minima | 🟧 | ILS confirmed on all four runway ends; CAT sub-category not confirmed. SE-Brazil winter (Jun–Aug) radiation fog/stratus is a genuine minima threat. |
| Airspace / traffic / control | 🟥 | The São Paulo TMA is one of the densest terminal complexes in South America — GRU shares it with Congonhas (SBSP) and Viracopos (SBKP); expect extended vectoring, speed control, late runway assignment, holding. |
| Weather / seasonal hazard | 🟧 | Winter (Jun–Aug) morning fog/low stratus on the Paulista plateau; summer wet season (Nov–Mar) afternoon convective storms and heavy rain. |
| Curfew / slots / hours | 🟥 | **Slot-coordinated**, publicly reported ~45 movements/hour cap; no hard night curfew confirmed (unlike Congonhas) but confirm on current AIP. |
| RFF category vs our types | 🟧 | Not confirmed in reachable sources. |
| Fuel availability | 🟧 | Jet A-1 assumed available H24 as Brazil's largest hub; specific supplier/hours not confirmed. |
| Customs / handling / security | 🟧 | Confirmed as Brazil's principal international PoE; exact desk hours and current per-terminal widebody gate assignment not fully confirmed. |

---

## 3. Threat & Error Management (TEM)

### 3.1 CFIT / Terrain 🟧
GRU sits at 2,461 ft on the Paulista plateau. The **Serra da Cantareira** range rises close to the field's **north** side (peaks in the ~1,000 m/3,300 ft band) — a real historical precedent exists here: a 1996 business-jet accident on a go-around from RWY 09R (now 10R) resulted in a turn to the wrong side and controlled flight into the Cantareira high ground. The lesson stands regardless of aircraft category: **fly the published missed-approach/go-around turn direction, do not assume**. To the **south/south-east**, the **Serra do Mar escarpment** falls away toward the coast (regional context — see the [South America Airspace briefing](../../../../airspace/south-america.md) §7). Read the MSA/MORA off the current-AIRAC chart; this is a moderate-terrain field, not a flat one.

### 3.2 Airborne conflict / traffic 🟥
GRU sits inside the **São Paulo TMA**, served by **São Paulo Approach ("Controle São Paulo")** under **Curitiba (SBCW) FIR / ACC-CW (CINDACTA II)** — one of the busiest, most complex terminal complexes in South America. **GRU, Congonhas (SBSP/CGH) and Viracopos (SBKP)** all feed the **same terminal airspace**; expect extended radar vectoring, speed control, late runway assignment and holding at published TMA holds, especially during arrival/departure banks. Congonhas sits close south-west of the field. See the [South America Airspace briefing](../../../../airspace/south-america.md) §6.

### 3.3 Runway excursion 🟧
No displaced thresholds were found for either runway in reachable sources — not independently confirmed against a current AIRAC declared-distance table. Wet-season (Nov–Mar) heavy rain brings a routine contamination/braking-action consideration on both runways; no runway-specific excursion history was found in reachable research for GRU itself.

### 3.4 Weather threat 🟧
**Winter (Jun–Aug, the SE-Brazil dry season) morning radiation fog/low stratus** on the Paulista plateau is a genuine, recurring minima threat — the same plateau effect noted destination-wide in the regional airspace briefing. **Summer wet season (Nov–Mar)** brings afternoon/evening convective storms, heavy rainfall and occasional hail. Terrain-channelled local wind effects from the nearby Cantareira range are plausible but not independently quantified. See §14.

### 3.5 Operational considerations 🟥
Plan around: (1) the **~45 movements/hour slot cap** — schedule integrity (on-time pushback) carries real network consequences as the home-region base; (2) sustained **São Paulo TMA congestion** shared with Congonhas and Viracopos; (3) the **runway-designator change (09/27 → 10/28)** — brief crews off the current chart, not a legacy 09/27 reference; (4) as the K Global South American base, turnaround and schedule discipline here drive network-wide punctuality.

---

## 4. Cautions & Warnings

- **Serra da Cantareira high ground close north of the field** — fly the published missed-approach/go-around turn direction; do not cut the turn toward high ground (historical precedent).
- **Runway designators changed 09/27 → 10/28** (magnetic-variation cycle) — confirm current-chart naming before briefing; older references may still show 09L/27R and 09R/27L.
- **São Paulo TMA holding/vectoring is routine** during peak banks — build schedule buffer, especially with Congonhas and Viracopos traffic sharing the same terminal airspace.
- **Winter (Jun–Aug) morning fog/stratus** can drop the field below CAT I minima with little warning.
- **~45 movements/hour slot cap** — as the home-region base, on-time pushback here has direct network-wide schedule consequences.

---

## 5. Aerodrome category, restrictions & crew qualification

- **Special-airport / category:** Not operator-categorised as a restricted-crew "special airport" in reachable sources; the standing crew-briefing items are the **Cantareira terrain awareness** (§3.1) and **São Paulo TMA congestion** (§3.2). 🟧
- **Crew-qualification gate:** No special crew-qualification restriction confirmed beyond standard type currency; CAT II/III currency is prudent for the winter fog season pending confirmation of the actual ILS sub-category. 🟧
- **Operating restrictions / bans:** None confirmed beyond the slot regime (§6/§4-Dispatch); verify current AIRAC for any RNP AR / circling restriction. 🟧
- **Overflight / entry / permits:** Standard Brazilian international arrival; no special state permit required — GRU is Brazil's principal international PoE. 🟩
- **Operations notes:** ANSP — **DECEA** (Curitiba ACC-CW/CINDACTA II en route; São Paulo Approach terminal). Airport operator — **GRU Airport** (Invepar–ACSA–Infraero consortium since the 2012 concession; rebranded "GRU Airport" that year).

---

## 6. General / hours / services

| Item | Value | Flag |
|---|---|---|
| ATS hours | H24 assumed for Brazil's principal international gateway | 🟧 |
| AD operating hours | H24 assumed | 🟧 |
| Night / curfew restrictions | No hard night curfew confirmed (unlike Congonhas/SBSP); year-round **~45 movements/hour** slot cap applies | 🟥 |
| RFF category | Not published / verify | 🟧 |
| Fuel | Jet A-1 assumed available H24 as Brazil's largest hub; supplier not confirmed | 🟧 |
| PCN | Not published / verify | 🟧 |
| Customs | Principal international PoE; exact desk hours not confirmed | 🟧 |
| Handling / FBO | Multiple ground handlers expected at a hub this size; none individually confirmed | 🟧 |

---

## 7. Runways & declared distances

| RWY | Dimensions | Surface / PCN | TORA | TODA | ASDA | LDA | Notes |
|---|---|---|---|---|---|---|---|
| 10L | 3,700 × 45 m | Asphalt / PCN not published 🟧 | Not published / verify 🟧 | Not published / verify 🟧 | Not published / verify 🟧 | Not published / verify 🟧 | Main/longer runway; current designator (was 09L) |
| 28R | 3,700 × 45 m | Asphalt / PCN not published 🟧 | Not published / verify 🟧 | Not published / verify 🟧 | Not published / verify 🟧 | Not published / verify 🟧 | Reciprocal of 10L; current designator (was 27R) |
| 10R | 3,000 × 45 m | Asphalt / PCN not published 🟧 | Not published / verify 🟧 | Not published / verify 🟧 | Not published / verify 🟧 | Not published / verify 🟧 | Secondary/shorter runway; current designator (was 09R) |
| 28L | 3,000 × 45 m | Asphalt / PCN not published 🟧 | Not published / verify 🟧 | Not published / verify 🟧 | Not published / verify 🟧 | Not published / verify 🟧 | Reciprocal of 10R; current designator (was 27L) |

*No displaced thresholds found in reachable sources — not independently confirmed. Dimensions per OurAirports/public register cross-check (retrieved 2026-07-26); exact declared-distance table not reached this pass — treat as 🟧 pending AIP confirmation. All distances in metres.*

---

## 8. Communications

| Service | Callsign | Frequency | Hours | Notes |
|---|---|---|---|---|
| ATIS | Guarulhos ATIS | 127.750 | H24 assumed 🟧 | |
| Delivery | Guarulhos Delivery / Clearance | 121.000 | H24 assumed 🟧 | |
| Ground | Guarulhos Ground | 121.700 | H24 assumed 🟧 | |
| Tower | Guarulhos Tower | 132.750 | H24 assumed 🟧 | |
| Approach | São Paulo Approach ("Controle São Paulo") | 119.800 | H24 assumed 🟧 | Terminal control for the shared GRU/CGH/VCP São Paulo TMA |
| Centre / FIR | Curitiba ACC (SBCW) / CINDACTA II | Per current AIRAC | H24 | See [South America Airspace briefing](../../../../airspace/south-america.md) |
| Company Ops | São Paulo Ops | 122.500 | Not confirmed 🟧 | Non-ATC operational frequency, cross-check locally |

*Frequencies per public register cross-check (OurAirports, retrieved 2026-07-26) — treat as 🟧 pending live-AIRAC confirmation; the delivery/ground/tower/approach structure itself is stable for a hub of this size.*

---

## 9. Navaids

| Aid | Ident | Freq | Hours | Notes |
|---|---|---|---|---|
| VOR/DME | Bonsucesso | Ident/freq not confirmed 🟧 | H24 assumed 🟧 | ~4.9 NM E of the field |
| ILS 10L | IUC | 110.70 | H24 assumed | CAT not confirmed 🟧 |
| ILS 28L | IBC | 111.10 | H24 assumed | CAT not confirmed 🟧 |
| ILS 10R | IGH | 111.70 | H24 assumed | CAT not confirmed 🟧 |
| ILS 28R | IGS | 111.90 | H24 assumed | CAT not confirmed 🟧 |

*Idents/frequencies per public register cross-check (retrieved 2026-07-26) — not independently re-confirmed against a current AIRAC.*

---

## 10. Arrival

- **Transition altitude / level:** **TA 8,000 ft**; TL by QNH `[South America Airspace briefing]`. 🟩
- **Speed:** Standard 250 KIAS below FL100 — confirm no local override on current chart.
- **Preferential runway logic:** Wind/flow/slot-driven; exact criteria not confirmed. 🟧
- **Approaches (names only — verify minima on current AIRAC charts):**

| RWY | Approach | IAF | FAF/FAP alt | Notes |
|---|---|---|---|---|
| 10L | ILS (IUC) | Not confirmed 🟧 | Not confirmed 🟧 | CAT not confirmed |
| 28R | ILS (IGS) | Not confirmed 🟧 | Not confirmed 🟧 | CAT not confirmed |
| 10R | ILS (IGH) | Not confirmed 🟧 | Not confirmed 🟧 | CAT not confirmed |
| 28L | ILS (IBC) | Not confirmed 🟧 | Not confirmed 🟧 | CAT not confirmed |

- **STARs (names only):** A planned **SANPA1A**-family arrival into RWY 10R has appeared in regional planning context `[South America Airspace briefing]` — **not independently confirmed from a primary source this pass**; pull the current-AIRAC STAR list at planning. 🟧
- **LVP:** Winter (Jun–Aug) fog/stratus is the operative trigger; exact RVR/trigger figures not confirmed. 🟧
- **Missed approach watch-items:** **Serra da Cantareira** high ground to the north drives the missed-approach/go-around turn-direction discipline (§3.1); re-sequencing into São Paulo TMA congestion is the other operative concern.

---

## 11. Departure

- **SIDs (names only — fly the charted version):** Not confirmed in reachable research pass — pull the current-AIRAC SID list at planning. 🟧
- **RNP / climb-gradient requirements:** Brazil operates an RNAV/PBN SID and STAR network nationally `[South America Airspace briefing]`; exact RNP spec/gradient per SID not confirmed for GRU specifically. 🟧
- **Take-off minima:** Not confirmed in reachable sources. 🟧
- **Start-up / push-back:** Not confirmed — verify locally with Ground/Apron. 🟧
- **ATC slot / CTOT & clearance:** **Slot-coordinated**, publicly reported ~45 movements/hour cap; exact CTOT/flow-management regime for Brazilian domestic ATFM not independently confirmed. 🟧
- **De-icing:** **NIL expected** — subtropical highland climate; ground de-icing infrastructure not established/needed at this field. 🟩 (not independently confirmed as formally NIL — flag if a cold snap ever brings frost).

---

## 12. Noise & Environmental

- **Noise abatement (NAP):** Not confirmed in reachable sources — verify locally. 🟧
- **Night noise / dB limits:** Not confirmed in reachable sources. 🟧
- **Engine run-up restrictions:** Not confirmed in reachable sources. 🟧
- **Reverse thrust / idle-reverse policy:** Not confirmed in reachable sources. 🟧

---

## 13. Ground operations

- **Stands for our types:** Four passenger terminals in use (**T1, T2, T3** — added 2014 for Star Alliance carriers, **T4** — added 2012–13, domestic/remote, in former VASP/Transbrasil cargo buildings). International widebody traffic historically concentrates around **T3**; exact current widebody gate assignment not confirmed. 🟧
- **Push-back:** Not confirmed — verify locally. 🟧
- **Standard taxi routes:** Not confirmed — confirm with Ground/Apron on the day. 🟧
- **Hot spots / tight taxiways:** Not confirmed in reachable sources; a dual-runway hub sharing dense TMA traffic should be assumed to carry standard hub-scale ground-movement complexity. 🟧
- **Follow-me:** Availability not confirmed. 🟧

---

## 14. Weather & seasonal (durable)

- **Climate / prevailing wind:** Subtropical highland climate on the Paulista plateau (2,461 ft).
- **Seasonal hazards:** **Winter (Jun–Aug, dry season) morning radiation fog/low stratus** is the field's principal recurring minima threat. **Summer wet season (Nov–Mar)** brings afternoon/evening convective storms, heavy rain and occasional hail.
- **Local effects:** Possible terrain-channelled wind effects from the nearby Serra da Cantareira range — not independently quantified.

> **Live weather — pull at planning (T-2h):** METAR, TAF, TREND, SIGMET/AIRMET. Not stored here.

---

## 15. NOTAMs

> **Pull at planning (T-2h).** Perishable — not stored here. Check: runway/taxiway closures, navaid U/S, lighting, obstacle/crane, RFF downgrade, GPS/RAIM, São Paulo TMA flow/holding status. Source: AIS / OFP NOTAM block.

---

## 16. Fuel & alternate planning notes

- **Typical role for us:** **Base — K Global South American region hub**.
- **Nearest suitable alternates:** [**SBKP**](../sbkp/index.md) (Viracopos — the region's primary widebody-capable alternate, single runway but a strong weather-reliability record) and **SBSP** (Congonhas — in-TMA reliever, shorter runways and its own curfew/noise regime; no OM C brief built yet 🟧) `[VAMSYS mirror 2026-07-26]`.
- **Fuel-uplift notes:** Jet A-1 assumed available H24 as Brazil's largest hub; specific into-plane provider/hours not confirmed. 🟧
- **Range/perf flags for our fleet:** Field length/strength non-limiting for any K Global type on the main runway (10L/28R, 3,700 m). See [`OM B — Fleet Capability Matrix`](../../../../../fleet/capability-matrix.md) for type-by-type range/performance reference.

---

## 17. Fleet-specific notes (optional)

- As the K Global South American base, SBGR is the network's principal long-haul departure/arrival point in the region rather than a single-type consideration — see [`OM B — Fleet Capability Matrix`](../../../../../fleet/capability-matrix.md). No field-elevation or field-length performance penalty on the 3,700 m main runway; the operative planning considerations are winter fog-season reliability and São Paulo TMA schedule integrity rather than aircraft performance.

---

## 18. Open items (🟧 — confirm against AIP / current AIRAC)

- **Magnetic variation, RFF category, PCN, exact TORA/TODA/ASDA/LDA per runway** — not confirmed in reachable sources.
- **ILS CAT sub-category** on all four runway ends — not confirmed.
- **Runway-designator history (09/27 → 10/28)** — confirmed via cross-source discrepancy, but exact effective AIRAC cycle of the change not independently dated.
- **Take-off minima, NAP/NADP, engine run-up restriction, reverse-thrust policy** — none confirmed.
- **SIDs/STARs (current names)** — not obtained this pass; pull the live current-AIRAC procedure list before use.
- **Fuel supplier(s), into-plane hours, customs/immigration desk hours, exact slot-coordination level (IATA Level)** — assumed major-hub H24 coverage, not individually confirmed.
- **Widebody stand/gate assignment by terminal** — T3 assumed for international widebody traffic, not independently confirmed as current.
- **Brazilian domestic ATFM/CTOT regime specifics for GRU** — general practice assumed, not independently sourced.
- **AISWEB / AIP Brasil AD 2 SBGR pages are JS-rendered and did not return readable content on this research pass** — flagged per the source register guidance; re-attempt with a browser-based tool for a future verification pass.

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim material may inform content but is not listed here.*

- **DECEA / AISWEB — AIP Brasil, aerodrome page AD 2 SBGR** — https://aisweb.decea.mil.br/?i=aerodromos&codigo=SBGR (JS-rendered frameset; did not return readable content to a direct fetch this pass — flagged per source-register guidance) (attempted 2026-07-26).
- OurAirports — https://ourairports.com/airports/SBGR/ , /runways.html , /frequencies.html (retrieved 2026-07-26). *ARP/elevation/runway/frequency cross-check.*
- Wikipedia — "São Paulo–Guarulhos International Airport" — https://en.wikipedia.org/wiki/S%C3%A3o_Paulo%E2%80%93Guarulhos_International_Airport (retrieved 2026-07-26). *History, terminal programme, slot-restriction corroboration, Cantareira accident precedent.*

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-26 | Built from AIP Brasil (DECEA); K Global fields from live VAMSYS; 4-page pack. |
