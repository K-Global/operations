# LHBP — Budapest Liszt Ferenc Intl · Airport Briefing

**LHBP / BUD** · Budapest, Hungary · Europe
**Version** v0.1 · **Updated** 2026-07-26 · **Status** Draft

> **Read-me:** Planning aid for the sim, not a chart. Static data is drawn from tier-4 public corroboration (the national eAIP portal was not reachable via public fetch this build — see §Sources); approaches/SIDs/STARs are listed **by name only or flagged not-yet-confirmed** — fly the charted current-AIRAC version. Live weather/NOTAMs are pulled at planning (§14/§15). Open 🟧 items are listed in §18. Flag legend 🟥 restriction/hazard · 🟧 caution/unverified · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| ARP (lat/long) | 47.43018 N / 19.26239 E (47°25′48.6″N 19°15′44.6″E) `[OurAirports, 2026-07-26]` 🟧 not primary-AIP confirmed |
| Field elevation | **495 ft / 151 m AMSL** `[OurAirports/SkyVector, corroborated]` |
| Mag variation | Not published / verify 🟧 |
| Time zone | UTC+1 (CET) / UTC+2 (CEST, EU DST observed) |
| Runway(s) | **13L/31R** 3,707 × 45 m (main) · **13R/31L** 3,010 × 45 m (secondary) — same 127°/307° orientation, laterally well-separated rather than a close parallel pair |
| Preferential runway | Not published / verify — wind/ATC-flow dependent, no primary-source rule obtained 🟧 |
| Longest LDA | Not published / verify — see §7 🟧 |
| Approaches | ILS presumed on the main runway pair (locator NDBs found near both thresholds — see §9); CAT III capability is commonly referenced for RWY 31R in industry/community material but **not independently confirmed** against a primary AIP table 🟧 |
| RFF category | Not published / verify 🟧 |
| Control type | **Radar** — Budapest Approach/Director (multi-sector) and Budapest Tower on the field; en-route **Budapest ACC**, Budapest (LHCC) FIR — see [Europe airspace brief](../../../../airspace/europe.md) 🟧 no dedicated LHCC FIR brief exists yet in this network |
| Elevation class | Near sea-level (495 ft) — **not** hot-and-high; flat Pannonian/Carpathian Basin site |
| Special-airport status | None identified in reachable sources — standard major-hub profile; winter fog/snow/icing season is the recurring seasonal factor (see §3/§14) |
| Customs / PoE | **Yes** — Schengen-zone flows through Terminal 2A, non-Schengen international flows through Terminal 2B; exact desk hours not confirmed 🟧 |
| K Global category | **L** `[VAMSYS mirror 2026-07-26]` |
| K Global base | No — **destination** field `[VAMSYS mirror 2026-07-26]` |
| Company preferred alternates | LKPR, LOWW, LJLJ `[VAMSYS mirror 2026-07-26]` |
| Taxi-in / taxi-out (VAMSYS) | **12/15 min taxi in/out** `[VAMSYS mirror 2026-07-26]` — 🟧 exact in/out assignment of the two figures not certain, do not assume without confirming |

---

## 2. Validation summary

| Domain | Flag | Note |
|---|---|---|
| Terrain / CFIT | 🟩 | Flat Pannonian/Carpathian Basin; the Buda Hills lie on the far (northwest) side of the city, well clear of the airport's approach/departure paths. Non-factor for the field itself. |
| Runway length vs fleet perf | 🟧 | Main runway (3,707 m) is ample for narrow/medium-body types typically serving a destination field of this kind; exact declared distances (TORA/TODA/ASDA/LDA) not confirmed — see §7. |
| Approach availability / minima | 🟧 | ILS presumed on the main runway pair; CAT category and minima not confirmed from a primary table. |
| Airspace / traffic / control | 🟧 | Radar-controlled, multi-sector approach consistent with a busy regional hub; no specific complexity item (hot spots, dependent-runway procedures) confirmed from reachable sources this build. |
| Weather / seasonal hazard | 🟥 | Central European continental climate in a basin setting — winter fog/temperature-inversion and snow/icing season (typ. Oct–Apr) is the field's defining recurring hazard; see §3.4/§14. |
| Curfew / slots / hours | 🟧 | No evidence of a hard curfew found in reachable sources; slot-coordination level not sourced. |
| RFF category vs our types | 🟧 | Not published / verify. |
| Fuel availability | 🟧 | Jet A-1 assumed available as a major international hub; not individually confirmed. |
| Customs / handling / security | 🟧 | Schengen/non-Schengen PoE split confirmed structurally (T2A/T2B); desk hours and ground-handling agent(s) not confirmed. |

---

## 3. Threat & Error Management (TEM)

### 3.1 CFIT / Terrain 🟩
LHBP sits at 495 ft AMSL in the flat **Pannonian (Carpathian) Basin**, roughly 16 km southeast of central Budapest. There is no close-in high terrain relevant to arrival, departure or missed-approach paths — the Buda Hills lie on the far side of the city, well clear of the field's operating area. This is a non-issue field for terrain; verify the MSA ring on the current chart as routine practice, but CFIT is not the operative threat here.

### 3.2 Airborne conflict / traffic 🟧
LHBP operates two same-orientation (127°/307°) runways — **13L/31R** (3,707 m, main) and **13R/31L** (3,010 m, secondary) — laterally separated by roughly 2 NM rather than configured as a true close-spaced parallel pair; treat them as independently-operated runways rather than assuming dependent-parallel procedures apply. Budapest Approach/Director is structured across multiple sector frequencies (§8), consistent with sustained scheduled-carrier and low-cost traffic density typical of a major regional hub. No AIP-sourced taxiway/airspace hot-spot list was obtained this build — confirm current complexity points with Ground/Approach on the day (see §18). Cross-ref [Europe airspace brief](../../../../airspace/europe.md) pending a dedicated Budapest (LHCC) FIR brief.

### 3.3 Runway excursion 🟧
No declared-distance or displaced-threshold data was obtained from a primary source this build — treat runway-length/overrun margins as **unconfirmed** until cross-checked against the current AIP (§7). Tier-4 threshold-elevation data suggests an approximately 78 ft elevation change along RWY 13L/31R (495 ft at the 13L end vs. 417 ft at the 31R end) — not independently confirmed, but worth briefing as a possible slope/visual-perspective consideration pending verification. RWY 13R/31L's thresholds are close to level (~449 ft each) per the same tier-4 source.

### 3.4 Weather threat 🟥
The Pannonian Basin setting is prone to **winter radiation fog and temperature inversions**, and the field sits within a recognised Central European **snow/icing season** (typically Oct–Apr) requiring de-icing provisioning. A **historical accident** at the field illustrates the risk profile: an Ilyushin IL-18 positioning flight crashed 1,360 m beyond the RWY 31 threshold, 120 m left of centreline, attributed to bad weather, darkness, fog, lack of crew coordination and possible spatial disorientation — a standing reminder of why a conservative low-visibility/night-approach discipline matters at this field. Summer carries the standard Central European risk of afternoon/evening **convective thunderstorms** — general regional climatology, no LHBP-specific frequency statistic obtained. See §14.

### 3.5 Operational considerations 🟧
The main planning driver at this field is **winter-season readiness** — de-icing provisioning, LVP/CAT-III currency and schedule buffer around fog-prone mornings — rather than any structural airfield-geometry complexity. RFF, exact navaid/approach detail and slot/curfew regime are open items (§18) rather than confirmed safety-critical gaps; treat them as "verify before relying on" rather than known hazards.

---

## 4. Cautions & Warnings

- **Winter fog/snow/icing season (typ. Oct–Apr)** is the field's principal recurring hazard — verify LVP/CAT III status and de-icing availability before winter ops.
- **RWY 13L/31R (3,707 m) and RWY 13R/31L (3,010 m)** are non-identical, independently-operated same-orientation runways spaced roughly 2 NM apart — do not assume close-parallel-dependent procedures.
- **Declared distances and PCN were not obtained this build** — treat runway-length/strength margins as unconfirmed until cross-checked against the current AIP (§7).
- **Historical accident precedent** (IL-18, beyond RWY 31, fog/darkness/crew-coordination factors) underscores the value of conservative low-vis/night-approach discipline at this field.
- **Hot spots / named taxiway complexity points were not sourced** from a primary chart this build — confirm current ground-routing caution points locally (§13, §18).

---

## 5. Aerodrome category, restrictions & crew qualification

- **Special-airport / category:** Not operator-categorised as a restricted-crew "special airport" in reachable sources. 🟧
- **Crew-qualification gate:** None identified specific to LHBP beyond standard CAT II/III currency if low-visibility ops are planned into a runway with confirmed low-vis capability — verify current AIRAC. 🟧
- **Operating restrictions / bans:** None confirmed in reachable sources — no RNP AR ban, circling restriction or night-ops limit identified. 🟧
- **Overflight / entry / permits:** Standard EU/Schengen and non-Schengen international arrival; no special state permit identified. 🟩
- **Operations notes:** ANSP — **HungaroControl** (Hungary's air navigation service provider, publisher of the national AIP); airport operator — **Budapest Airport Zrt.**, majority Hungarian-State-owned with a private-sector concession partner holding a minority stake through 2080 per public reporting.

---

## 6. General / hours / services

| Item | Value | Flag |
|---|---|---|
| ATS hours | Assumed H24 given international-hub status; not independently confirmed | 🟧 |
| AD operating hours | Not published / verify | 🟧 |
| Night / curfew restrictions | No evidence of a hard curfew found in reachable sources; not independently confirmed either way | 🟧 |
| RFF category | Not published / verify | 🟧 |
| Fuel | Jet A-1 assumed available as a major hub; supplier/hours not confirmed | 🟧 |
| PCN | Not published / verify | 🟧 |
| Customs | Schengen (T2A) / non-Schengen (T2B) PoE split confirmed structurally; desk hours not confirmed | 🟧 |
| Handling / FBO | Not published / verify | 🟧 |

---

## 7. Runways & declared distances

| RWY | Dimensions | Surface / PCN | TORA | TODA | ASDA | LDA | Notes |
|---|---|---|---|---|---|---|---|
| 13L | 3,707 × 45 m | Concrete (paved, lighted) `[OurAirports]` / PCN not published | Not published / verify | Not published / verify | Not published / verify | Not published / verify | Main runway; threshold elevation ~495 ft `[tier-4]` 🟧 |
| 31R | 3,707 × 45 m | Concrete (paved, lighted) / PCN not published | Not published / verify | Not published / verify | Not published / verify | Not published / verify | Reciprocal; threshold elevation ~417 ft `[tier-4]` 🟧 — possible slope, not independently confirmed |
| 13R | 3,010 × 45 m | Concrete (paved, lighted) `[OurAirports]`; surface reported "unknown" by one tier-4 source — discrepancy noted | Not published / verify | Not published / verify | Not published / verify | Not published / verify | Secondary runway; threshold elevation ~449 ft `[tier-4]` |
| 31L | 3,010 × 45 m | Concrete (paved, lighted) / PCN not published | Not published / verify | Not published / verify | Not published / verify | Not published / verify | Reciprocal; threshold elevation ~449 ft `[tier-4]` |

*No declared-distance or PCN table was obtained from a primary AIP source this build — every TORA/TODA/ASDA/LDA cell above is an open item (§18). Dimensions/surface are OurAirports-sourced and cross-checked against SkyVector coordinates; treat as tier-4 pending an AIRAC cross-check. All distances in metres.*

---

## 8. Communications

| Service | Callsign | Frequency | Hours | Notes |
|---|---|---|---|---|
| ATIS | Budapest Terminal Info (ATIS) | 132.375 / 132.38 | Not published / verify 🟧 | One tier-4 source also lists 117.30, which duplicates the on-field VOR frequency and is flagged there as a likely data error — do not rely on 117.30 for ATIS |
| Delivery | Budapest Delivery | 134.54 / 134.55 | Not published / verify 🟧 | |
| Ground | Budapest Ground | 121.90 / 121.91 | Not published / verify 🟧 | |
| Apron | Budapest Apron South / Apron West | 122.45 (South) / 131.55 (West) | Not published / verify 🟧 | Ground-movement/apron guidance positions |
| Tower | Budapest Tower | 118.10 / 119.97 | Not published / verify 🟧 | Two positions reported — take the assigned frequency |
| Approach / Director | Budapest Director 119.51 · Budapest Approach 122.97 / 123.86 / 124.90 | — | Not published / verify 🟧 | Sector-specific — take the assigned frequency |
| Centre / FIR | Budapest ACC — Budapest (LHCC) FIR | Not published / verify 🟧 | H24 (assumed) | See [Europe airspace brief](../../../../airspace/europe.md) — no dedicated LHCC FIR brief exists yet in this network 🟧 |

*Source: OurAirports and SkyVector frequency listings (tier-4), cross-checked against each other — treat as 🟧 pending a live-AIRAC cross-check.*

---

## 9. Navaids

| Aid | Ident | Freq | Hours | Notes |
|---|---|---|---|---|
| VOR/DME | BUD | 117.30 | H24 (assumed) | On/near field, ~1.3 NM NNW of ARP `[tier-4]` |
| NDB (locator, reported) | M | 403 kHz | Not published / verify | ~0.4 NM S of ARP; likely ILS-associated locator — runway assignment not confirmed 🟧 |
| NDB (locator, reported) | L | 357 kHz | Not published / verify | ~1.4 NM NNW of ARP; runway assignment not confirmed 🟧 |
| NDB (locator, reported) | R | 381 kHz | Not published / verify | ~1.9 NM ESE of ARP; runway assignment not confirmed 🟧 |
| NDB (locator, reported) | HM | 420 kHz | Not published / verify | ~1.9 NM SE of ARP; runway assignment not confirmed 🟧 |
| NDB (locator, reported) | A | 343 kHz | Not published / verify | ~2.6 NM NW of ARP; runway assignment not confirmed 🟧 |
| VOR (regional) | TPS Tapiosap | 115.90 | H24 (assumed) | ~8 NM ENE |
| VOR (regional) | MNR Monor | 112.50 | H24 (assumed) | ~9 NM SE |
| VOR (regional) | PTB Pusztaszabolcs | 117.10 | H24 (assumed) | ~27 NM SW |
| ILS (all runway ends) | Not published / verify | Not published / verify | — | ILS presumed present on the main runway pair given the locator-NDB cluster above; idents/frequencies/CAT category not confirmed from a primary table 🟧 |

*Source: OurAirports closest-navaids listing and SkyVector (tier-4); ILS-specific data not obtained this build — see §18.*

---

## 10. Arrival

- **Transition altitude / level:** Not published / verify. 🟧
- **Speed:** Standard 250 KIAS below FL100 (EU/ICAO norm) — confirm no local override on current chart.
- **Preferential runway logic:** Not published / verify — wind/ATC-flow dependent; no primary-source rule obtained this build. 🟧
- **Approaches (names only — verify minima on current AIRAC charts):**

| RWY | Approach | IAF | FAF/FAP alt | Notes |
|---|---|---|---|---|
| 13L/31R | ILS (presumed) | Not published / verify | Not published / verify | CAT category commonly referenced as CAT III for 31R in tier-4/community material — not independently confirmed 🟧 |
| 13R/31L | ILS (presumed) | Not published / verify | Not published / verify | Category/minima not confirmed 🟧 |

- **STARs (names only):** Not published / verify — pull the current-AIRAC STAR list at planning. 🟧
- **LVP:** Winter Pannonian Basin radiation-fog/inversion risk is the likely trigger driver; exact RVR/trigger conditions not confirmed. 🟧 See [`OM E — Low Visibility Operations`](../../../../../flight-ops/low-visibility-operations.md).
- **Missed approach watch-items:** Not terrain-driven (flat basin, §3.1); the operative missed-approach concern is re-sequencing into scheduled/regional-hub traffic under Approach/Director control.

---

## 11. Departure

- **SIDs (names only — fly the charted version):** Not published / verify — pull the current-AIRAC SID list at planning. 🟧
- **RNP / climb-gradient requirements:** Not published / verify. See [`OM E — PBN and RNP Operations`](../../../../../flight-ops/pbn-and-rnp-operations.md). 🟧
- **Take-off minima:** Not published / verify. 🟧
- **Start-up / push-back:** Not published / verify — confirm cross-bleed/APU notification procedure with Ground/Apron locally. 🟧
- **ATC slot / CTOT & clearance:** Slot-coordination level not sourced; EUROCONTROL Network Manager ATFM/CTOT regulation applies as standard practice at a scheduled-carrier EU field. 🟧
- **De-icing:** Availability assumed given the recognised Central European Oct–Apr de-icing season; specific pad location/provisioning not confirmed. 🟧 See [`OM E — Cold Weather Operations`](../../../../../flight-ops/cold-weather-operations.md).

---

## 12. Noise & Environmental

- **Noise abatement (NAP):** Not published / verify. 🟧
- **Night noise / dB limits:** Not published / verify. 🟧
- **Engine run-up restrictions:** Not published / verify. 🟧
- **Reverse thrust / idle-reverse policy:** Not published / verify. 🟧

---

## 13. Ground operations

- **Stands for our types:** Terminal 2B's **Pier B** extension (opened 2018; ~220 m, 27 gates, 10 jetbridges) is confirmed wide-body-capable; other stand/gate assignment detail not confirmed. 🟧
- **Push-back:** Not published / verify. 🟧
- **Standard taxi routes:** Not published / verify — confirm with Ground/Apron on the day.
- **Hot spots / tight taxiways:** No primary-chart hot-spot list was obtained this build — this is an open item, not a confirmed "none exist" finding. 🟧
- **Follow-me:** Not published / verify. 🟧

---

## 14. Weather & seasonal (durable)

- **Climate / prevailing wind:** Central European continental climate in the flat Pannonian (Carpathian) Basin; four distinct seasons; prevailing wind direction not confirmed from a primary source this build. 🟧
- **Seasonal hazards:** Winter **radiation fog and temperature inversions**, plus a recognised **snow/icing season** (typ. Oct–Apr) requiring de-icing — the field's defining recurring hazard, illustrated by the historical IL-18 accident (§3.4). Summer carries the standard Central European risk of afternoon/evening **convective thunderstorms** — general regional climatology, no LHBP-specific frequency statistic obtained.
- **Local effects:** Basin-setting fog/cold-air pooling is plausible by geography but not confirmed as an LHBP-specific statistic this build. 🟧

> **Live weather — pull at planning (T-2h):** METAR, TAF, TREND, SIGMET/AIRMET. Not stored here.

---

## 15. NOTAMs

> **Pull at planning (T-2h).** Perishable — not stored here. Check: runway/taxiway closures, navaid U/S, lighting, obstacle/crane, RFF downgrade, GPS/RAIM, TFR, conflict-zone. Source: AIS / OFP NOTAM block.

---

## 16. Fuel & alternate planning notes

- **Typical role for us:** **Destination** `[VAMSYS mirror 2026-07-26]`.
- **Nearest suitable alternates:** Company preferred alternates **LKPR, LOWW, LJLJ** `[VAMSYS mirror 2026-07-26]` — confirm suitability, runway/RFF adequacy and current minima per leg before use.
- **Fuel-uplift notes:** Jet A-1 assumed available as a major hub; specific into-plane provider/hours not confirmed. 🟧 See [`OM E — Fuel Policy`](../../../../../flight-ops/fuel-policy.md).
- **Range/perf flags for our fleet:** Main runway (3,707 m) is non-limiting for narrow/medium-body fleet types typically serving a destination field of this kind; verify against the current AIP before assuming non-limiting status for any wide-body diversion planning. See [`OM B — Fleet Capability Matrix`](../../../../../fleet/capability-matrix.md). 🟧

---

## 17. Fleet-specific notes (optional)

- No type-specific consideration confirmed for LHBP beyond the generic runway-length note in §16 — see [`OM B — Fleet Capability Matrix`](../../../../../fleet/capability-matrix.md) for type-by-type range/performance reference.

---

## 18. Open items (🟧 — confirm against AIP / current AIRAC)

- **Primary AIP not reached this build** — HungaroControl's eAIP portal was not accessible via a public fetch; every field below should be cross-checked against the current AIRAC before operational reliance.
- **Magnetic variation** — not published / verify.
- **Declared distances (TORA/TODA/ASDA/LDA) and PCN** — not obtained for either runway.
- **RFF category** — not published / verify.
- **ILS idents, frequencies and CAT sub-category** — CAT III commonly referenced for RWY 31R in tier-4/community material only; not confirmed from a primary table.
- **SIDs/STARs (current names)** — not obtained; pull the live current-AIRAC procedure list before use.
- **Take-off minima, transition altitude/level, preferential-runway logic** — not confirmed.
- **ATS hours, AD operating hours, curfew/night restriction, slot-coordination level** — not confirmed; no evidence of a hard curfew found, but absence of evidence is not confirmation.
- **Fuel supplier(s) and into-plane hours** — assumed major-hub availability, not individually confirmed.
- **Ground handling agent(s), turnaround time, push-back policy** — not confirmed.
- **Named taxiway/ground hot spots** — no primary-chart list obtained.
- **De-icing pad location/provisioning** — season assumed (Oct–Apr), specifics not confirmed.
- **NDB locator idents (M/L/R/HM/A) — exact runway/procedure assignment** — reported by proximity only, not confirmed against a primary chart.
- **ATC frequency table** — cross-checked between two tier-4 sources (OurAirports, SkyVector) but not against a current AIRAC; the ATIS/VOR frequency-duplication anomaly noted in §8 should be resolved on next verification pass.
- **Runway threshold-elevation slope on 13L/31R (~78 ft difference)** — tier-4-sourced only, not independently confirmed.

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim material (current-AIRAC charts) informs content but is not listed here.*

- **HungaroControl eAIP (AIP Hungary, AD 2 LHBP)** — the AIS portal is browser/JavaScript-rendered and was not accessible via a public raw fetch this build; treat as the pointer to the primary source of record, not as a citation for any figure above (retrieval attempted 2026-07-26).
- OurAirports — https://ourairports.com/airports/LHBP/ , /runways.html , /frequencies.html , /closest-navaids.html (retrieved 2026-07-26). *ARP/elevation/runway/frequency/navaid cross-check.*
- SkyVector — https://skyvector.com/airport/LHBP (retrieved 2026-07-26). *Coordinates, runway thresholds/elevations, communications cross-check.*
- Wikipedia — "Budapest Ferenc Liszt International Airport" — https://en.wikipedia.org/wiki/Budapest_Ferenc_Liszt_International_Airport (retrieved 2026-07-26). *Terminal structure, historical development, IL-18 accident.*

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-26 | Built from national AIP; K Global fields from live VAMSYS; 4-page pack. |
