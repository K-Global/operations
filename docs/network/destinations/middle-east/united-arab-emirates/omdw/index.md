# OMDW — Al Maktoum Intl · Airport Briefing

**OMDW / DWC** · Dubai (Jebel Ali / Dubai South), United Arab Emirates · Middle East
**Version** v0.1 · **Updated** 2026-07-26 · **Status** Draft — UAE GCAA AIP not reachable this pass; built from tier-4 public sources, cross-checked against the Emirates (OMAE) FIR brief

> **Read-me:** Planning aid for the sim, not a chart. Static data is drawn from public tier-4 corroboration (OurAirports, Wikipedia, the Emirates FIR brief) pending a live UAE GCAA AIP pull; approaches/SIDs/STARs are listed **by name only or flagged not-yet-confirmed** — fly the charted current-AIRAC version. Live weather/NOTAMs are pulled at planning (§14/§15). Open 🟧 items are listed in §18. Flag legend 🟥 restriction/hazard · 🟧 caution/unverified · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| ARP (lat/long) | 24.91833°N 55.17556°E `[Navigraph navdata]`; independent tier-4 fix 24.896171°N 55.162350°E (~2.7 NM SSW) — a larger-than-usual discrepancy, **not reconciled** 🟧 |
| Field elevation | **114 ft / 35 m AMSL** — consistent across sources 🟩 |
| Mag variation | Not published / verify 🟧 |
| Time zone | UTC+4 (UAE Standard Time, no DST) |
| Runway(s) | **12/30** 4,500 m × 60 m (asphalt, lighted) — the field's primary/operational runway per company routing. A second, shorter **13/31** 1,838 m × 30 m runway is also listed (asphalt, **not lighted**, displaced thresholds 150 m each end) — secondary/limited-use, not confirmed as used for scheduled widebody service 🟧 |
| Preferential runway | Not published / verify — 12/30 is the operational runway for scheduled service; no published preferential rule found for wind/config selection 🟧 |
| Longest LDA | ~4,500 m class on 12/30 (exact LDA not confirmed pending AIP) 🟧 |
| Approaches | ILS reported, originally engineered toward a **CAT III-C** target during 2007 runway commissioning/testing — current-day operational category **not confirmed** 🟧 |
| RFF category | Not published / verify 🟧 |
| Control type | **Radar/tower** — "Al Maktoum Tower"/"Al Maktoum Ground" per tier-4 frequency data; **Emirates area control (GCAA — Sheikh Zayed Air Navigation Centre)** enroute — see [Emirates (OMAE) FIR brief](../../../../airspace/fir/middle-east/emirates-omae.md) |
| Elevation class | Near sea-level (114 ft) — **not** hot-and-high; the performance driver is **summer extreme heat/density altitude**, not field elevation |
| Special-airport status | 🟧 **Active long-horizon mega-expansion project** — a 2024-approved masterplan targets an eventual five-parallel-runway, 400-gate megahub (up to 260 M pax/12 M tonnes cargo/year) over roughly a decade; **current-day (2026) infrastructure is materially smaller** than the eventual plan — treat as a field still under active development, not yet a full passenger megahub |
| Customs / PoE | Assumed Yes for international cargo/passenger operations; exact hours not confirmed 🟧 |
| K Global category | **S** `[VAMSYS mirror 2026-07-25]` |
| K Global base | No — in-country alternate, smaller-category field relative to [OMAA](../omaa/index.md)/[OMDB](../omdb/index.md) `[VAMSYS mirror 2026-07-25]` |
| Company preferred alternates | **OMDB, OMAA, OTHH** `[VAMSYS mirror 2026-07-25]` |
| Taxi-in / taxi-out (VAMSYS) | **12 min / 16 min** `[VAMSYS mirror 2026-07-25]` |

---

## 2. Validation summary

| Domain | Flag | Note |
|---|---|---|
| Terrain / CFIT | 🟩 | Flat desert/coastal site southwest of Dubai; no close-in high terrain relevant to arrival, departure or missed-approach paths. |
| Runway length vs fleet perf | 🟩 | The primary 12/30 runway (4,500 m) is ample for any K Global widebody type; the secondary 13/31 runway (1,838 m, unlit, displaced thresholds) is not sized for widebody scheduled use and should be treated as unavailable for our operation absent specific confirmation. |
| Approach availability / minima | 🟧 | ILS reported with an original CAT III-C engineering target from 2007 commissioning; current-day operational category, idents and minima **not confirmed** from a primary source. |
| Airspace / traffic / control | 🟧 | Lower current-day traffic density than OMAA/OMDB per available sources (the field remains cargo-focused with a developing passenger side); confirm current control-unit sectorisation and traffic picture at planning. |
| Weather / seasonal hazard | 🟥 | Summer extreme heat/density altitude and shamal dust are the field's defining seasonal hazards, as elsewhere in the UAE — see §14. |
| Curfew / slots / hours | 🟧 | No published curfew found in reachable sources — not confirmed as "none." |
| RFF category vs our types | 🟧 | Category not confirmed from a primary source this pass. |
| Fuel availability | 🟧 | Jet A-1 assumed available; specific supplier/hours not confirmed in reachable public sources. |
| Customs / handling / security | 🟧 | Facility maturity is a live open item — the field is under active, multi-decade expansion; current-day (2026) customs/handling capability not independently confirmed. |

---

## 3. Threat & Error Management (TEM)

### 3.1 CFIT / Terrain 🟩
OMDW sits at 114 ft AMSL on flat desert/coastal terrain southwest of Dubai — there is **no close-in high terrain** relevant to arrival, departure or missed-approach paths. Verify the MSA ring on the current chart as routine practice; CFIT is not the operative threat here.

### 3.2 Airborne conflict / traffic 🟧
OMDW opened in 2010 as a cargo-focused field and only began scheduled passenger service in 2013, historically at materially lower passenger volumes than OMAA/OMDB. A 2024-approved masterplan targets an eventual five-parallel-runway, ~400-gate megahub with the stated intent that it would eventually replace OMDB as the emirate's primary international airport — but this is a **multi-decade project** (originally targeted for full completion no earlier than 2035, with the newly approved terminal construction itself measured in years), and the current-day (2026) traffic/control picture is not independently confirmed. Do not assume OMDB-level traffic density or control complexity here without verification.

### 3.3 Runway excursion 🟧
The primary 12/30 runway has no displaced thresholds confirmed in reachable sources. The secondary 13/31 runway carries **150 m displaced thresholds on both ends** and is **not lighted** — treat it as a non-standard/limited-use runway for our operation pending specific confirmation that it is used for scheduled service (it is not expected to be, given its short length and lack of lighting).

### 3.4 Weather threat 🟥
**Summer extreme heat (routinely 45°C+) and the associated density-altitude performance penalty** is a defining seasonal hazard region-wide, as at OMAA/OMDB. **Shamal winds and blowing dust/sand** reduce visibility and can trigger low-visibility procedures with limited notice. See §14 and the [Middle East airspace brief](../../../../airspace/middle-east.md) §11.

### 3.5 Operational considerations 🟧
Plan around two durable considerations specific to this field: (1) it is an **active, long-horizon construction/expansion project** — infrastructure, traffic density and even runway configuration may change materially over the life of this briefing, more so than at a mature hub; and (2) it currently carries a **smaller K Global category (S)** than OMAA/OMDB (L), consistent with more limited current-day capability — confirm suitability for the specific type/leg before planning a diversion here rather than assuming megahub-level infrastructure exists today.

---

## 4. Cautions & Warnings

- **This is an active construction/expansion project, not a finished megahub** — a 2024-approved masterplan targets an eventual five-runway, ~400-gate facility over roughly a decade; current-day (2026) infrastructure is materially smaller. Do not plan against the eventual masterplan.
- **The secondary 13/31 runway is short (1,838 m), unlit and displaced-threshold-limited** — treat as unavailable for scheduled widebody use absent specific confirmation.
- **ARP coordinate discrepancy of ~2.7 NM** between the Navigraph-sourced fix and an independent tier-4 fix — larger than typical and unreconciled; treat position data with particular caution pending AIP confirmation.
- **Regional conflict-zone advisory is live** — the Emirates FIR (OMAE) sits under an active EASA CZIB and reported GPS spoofing/jamming; re-check at planning (Middle East airspace brief §9).
- **Summer density-altitude/heat performance** — routine 45°C+ days materially affect takeoff performance planning.
- **Shamal dust/haboob events** can drop visibility rapidly — confirm current LVP status before planning.

---

## 5. Aerodrome category, restrictions & crew qualification

- **Special-airport / category:** Not operator-categorised as a restricted-crew "special airport" in reachable sources; the standing caution is the field's **active-construction/still-developing status**. 🟧
- **Crew-qualification gate:** Not confirmed in reachable sources. 🟧
- **Operating restrictions / bans:** No published curfew, RNP AR ban or circling restriction found in reachable sources — **not confirmed as "none."** 🟧
- **Overflight / entry / permits:** Standard UAE international arrival; no special state permit required for a normal commercial operation. 🟩
- **Operations notes:** ANSP — **GCAA**; local tower/ground reported as "Al Maktoum Tower"/"Al Maktoum Ground" per tier-4 frequency data; enroute via **Emirates area control (Sheikh Zayed Air Navigation Centre)**. See [Emirates (OMAE) FIR brief](../../../../airspace/fir/middle-east/emirates-omae.md) §4.

---

## 6. General / hours / services

| Item | Value | Flag |
|---|---|---|
| ATS hours | Not confirmed in reachable sources | 🟧 |
| AD operating hours | Not confirmed — no published curfew found | 🟧 |
| Night / curfew restrictions | Not published / verify | 🟧 |
| RFF category | Not published / verify | 🟧 |
| Fuel | Jet A-1 assumed available; specific supplier/hours not confirmed | 🟧 |
| PCN | Not published / verify | 🟧 |
| Customs | Assumed present for international ops; exact hours not confirmed | 🟧 |
| Handling / FBO | Not confirmed in reachable public sources — cargo-handling infrastructure (Al Maktoum Airport Cargo Gateway) has historically been the field's primary developed facility | 🟧 |

**Facility context (durable):** the field opened for cargo operations in 2010 and passenger service from 2013, historically at low passenger volumes with a focus on cargo and a limited roster of budget/charter carriers, leading some observers to describe early-years utilisation as underwhelming relative to the facility's scale. A **128 billion AED (~US$34.85 billion) new passenger terminal** was approved in April 2024, with plans for **five parallel runways and roughly 400 gates**, targeting eventual capacity of up to **260 million passengers/year** and up to **12 million tonnes/year** of cargo — intended, over time, to replace OMDB as the region's primary hub. This is a **multi-year/multi-decade construction program**; current-day (2026) capability should not be assumed to reflect these eventual figures. 🟧

---

## 7. Runways & declared distances

| RWY | Dimensions | Surface / PCN | TORA | TODA | ASDA | LDA | Notes |
|---|---|---|---|---|---|---|---|
| 12 | 4,500 m × 60 m | Asphalt / PCN not published | Not published | Not published | Not published | Not published | Primary/operational runway; originally engineered toward a CAT III-C target (2007 commissioning) — current category not confirmed 🟧 |
| 30 | (reciprocal of 12) | Asphalt / PCN not published | Not published | Not published | Not published | Not published | See RWY 12 note |
| 13 | 1,838 m × 30 m | Asphalt / PCN not published, **not lighted** | Not published | Not published | Not published | Reduced by a **150 m displaced threshold** | Secondary/limited-use — short, unlit; not confirmed as used for scheduled service 🟧 |
| 31 | (reciprocal of 13) | Asphalt / PCN not published, **not lighted** | Not published | Not published | Not published | Reduced by a **150 m displaced threshold** | See RWY 13 note |

*Sourced to OurAirports (tier-4). TORA/TODA/ASDA/exact LDA and PCN figures are not published in any source reached this pass and must be pulled from the GCAA AIP before operational use. All lengths in metres.*

---

## 8. Communications

| Service | Callsign | Frequency | Hours | Notes |
|---|---|---|---|---|
| ATIS | Al Maktoum ATIS | 126.47 | Not confirmed | 🟧 |
| Ground | Al Maktoum Ground | 118.375 | Not confirmed | 🟧 |
| Tower | Al Maktoum Tower | 118.625 | Not confirmed | 🟧 |
| ATC backup | Not named | 118.725 | Not confirmed | 🟧 Listed as a distinct "ATC backup" frequency in tier-4 data — purpose not confirmed |
| Centre / FIR | Emirates area control (GCAA — Sheikh Zayed ANC) | Per current AIRAC | H24 | See [Emirates (OMAE) FIR brief](../../../../airspace/fir/middle-east/emirates-omae.md) |

*Source: tier-4 aggregator snapshot (OurAirports). No Approach/Delivery frequency was found distinct from Tower/Ground — this may reflect the field's lower current-day traffic complexity relative to OMAA/OMDB, or simply an incomplete public data set. Treat every frequency above as unconfirmed pending a live AIRAC/AIP cross-check.*

---

## 9. Navaids

| Aid | Ident | Freq | Hours | Notes |
|---|---|---|---|---|
| — | — | — | — | No dedicated on-field navaid was found within a few NM of OMDW in the reachable tier-4 dataset; the nearest listed aid is **Dubai VOR-DME (DUB)** 115.70, ~24 NM NNE — not an OMDW-specific navaid 🟧 |

*Sourced to OurAirports navaid-proximity data (tier-4). Confirm any on-field navaid ident/frequency against the current AIRAC before use.*

---

## 10. Arrival

- **Transition altitude / level:** Not published / verify. 🟧
- **Speed:** Standard 250 KIAS below FL100 (ICAO norm) — confirm no local override on current chart.
- **Preferential runway logic:** Not published / verify — 12/30 is the operational runway; no published wind/config rule found. 🟧
- **Approaches (names only — verify minima on current AIRAC charts):**

| RWY | Approach | IAF | FAF/FAP alt | Notes |
|---|---|---|---|---|
| 12/30 | ILS (name/CAT not confirmed) | Not published | Not published | Originally engineered toward CAT III-C (2007) — current status not confirmed 🟧 |
| 13/31 | Not confirmed | — | — | Secondary/unlit runway — not confirmed as having a published approach |

- **STARs (names only):** Not confirmed in reachable research pass — pull the current-AIRAC STAR list at planning. 🟧
- **LVP:** Not confirmed this pass. 🟧
- **Missed approach watch-items:** Terrain is not the driver (flat desert/coastal site); confirm current traffic/control complexity at planning given the field's lower historical traffic volume relative to OMAA/OMDB.

---

## 11. Departure

- **SIDs (names only — fly the charted version):** Not confirmed in reachable research pass — pull the current-AIRAC SID list at planning. 🟧
- **RNP / climb-gradient requirements:** RNAV 1/RNP 1 terminal procedures are standard across the Emirates FIR TMA structure per the [Emirates (OMAE) FIR brief](../../../../airspace/fir/middle-east/emirates-omae.md) §5 — confirm gradient/equipage per SID on the current chart. See also [`OM E — PBN and RNP Operations`](../../../../../flight-ops/pbn-and-rnp-operations.md).
- **Take-off minima:** Published per AIP; exact figures not confirmed this pass. 🟧
- **Start-up / push-back:** Not confirmed in reachable sources. 🟧
- **ATC slot / CTOT & clearance:** Not confirmed in reachable sources. 🟧
- **De-icing:** Not applicable — no cold-weather de-icing requirement at this field. 🟩

---

## 12. Noise & Environmental

- **Noise abatement (NAP):** Not confirmed in reachable sources — verify locally. 🟧
- **Night noise / dB limits:** Not confirmed in reachable sources. 🟧
- **Engine run-up restrictions:** Not confirmed in reachable sources — verify locally. 🟧
- **Reverse thrust / idle-reverse policy:** Not confirmed in reachable sources — verify locally. 🟧

---

## 13. Ground operations

- **Stands for our types:** Not confirmed — the field's developed infrastructure has historically centred on cargo handling (the Al Maktoum Airport Cargo Gateway); passenger-side stand/gate capability for widebody Code E/F types is not independently confirmed pending current AIP/handler data. 🟧
- **Push-back:** Not confirmed in reachable sources. 🟧
- **Standard taxi routes:** Confirm with Ground/Apron on the day — not published in reachable sources. 🟧
- **Hot spots / tight taxiways:** Not confirmed in reachable sources this pass. 🟧
- **Follow-me:** Availability not confirmed in reachable sources. 🟧

---

## 14. Weather & seasonal (durable)

- **Climate / prevailing wind:** Arid desert/coastal climate, as at OMAA/OMDB; extreme summer heat (routinely 45°C+, Jun–Sep) is the dominant seasonal characteristic.
- **Seasonal hazards:** **Summer heat and density-altitude performance penalty** (Jun–Sep). **Shamal winds and blowing dust/sand** reduce visibility across the region and can trigger LVO with limited notice — see the [Middle East airspace brief](../../../../airspace/middle-east.md) §11.
- **Local effects:** No significant terrain-driven local wind effect at this flat site; some coastal influence given proximity to the Gulf.

> **Live weather — pull at planning (T-2h):** METAR, TAF, TREND, SIGMET/AIRMET. Not stored here.

---

## 15. NOTAMs

> **Pull at planning (T-2h).** Perishable — not stored here. Check: runway/taxiway closures (construction activity is an ongoing possibility given the active expansion project), navaid U/S, lighting, obstacle/crane, RFF downgrade, GPS/RAIM (GNSS interference is reported region-wide — see the Middle East airspace brief §9), conflict-zone/overflight bulletins. Source: official AIS / OFP NOTAM block.

---

## 16. Fuel & alternate planning notes

- **Typical role for us:** **In-country alternate**, smaller-category (Cat S) than [OMAA](../omaa/index.md)/[OMDB](../omdb/index.md) — confirm current-day suitability before planning a diversion here given the field's active-construction status.
- **Nearest suitable alternates:** Company preferred alternates **OMDB** ([briefing](../omdb/index.md)), **OMAA** ([briefing](../omaa/index.md)), **OTHH** `[VAMSYS mirror 2026-07-25]` — confirm suitability, runway/RFF adequacy and current minima per leg; OTHH sits under the regional conflict-zone advisory (see [Middle East airspace brief](../../../../airspace/middle-east.md) §8/§9).
- **Fuel-uplift notes:** Jet A-1 assumed available; specific into-plane provider/hours not confirmed. 🟧 See [`OM E — Fuel Policy`](../../../../../flight-ops/fuel-policy.md).
- **Range/perf flags for our fleet:** The primary 12/30 runway (4,500 m) is non-limiting for any K Global type; the secondary 13/31 runway is not sized for widebody use. Summer heat/density-altitude is the operative performance consideration, as elsewhere in the UAE. See [`OM B — Fleet Capability Matrix`](../../../../../fleet/capability-matrix.md).

---

## 17. Fleet-specific notes (optional)

- No field-elevation or field-length performance penalty is expected for any K Global type on the primary 12/30 runway; the operative planning consideration is **summer high-OAT takeoff performance**, and the field's **still-developing ground infrastructure** relative to a mature Cat L hub. See [`OM B — Fleet Capability Matrix`](../../../../../fleet/capability-matrix.md).

---

## 18. Open items (🟧 — confirm against AIP / current AIRAC)

- **UAE GCAA AIP was not reachable this pass** — every figure in this briefing traces to tier-4 public corroboration and should be treated as provisional pending a primary-source pull.
- **ARP coordinate discrepancy of ~2.7 NM** between the Navigraph-sourced fix and an independent tier-4 fix — larger than typical, not reconciled.
- **Current-day (2026) construction/operational status** — the field is mid-way through a multi-decade mega-expansion; confirm what infrastructure is actually operational today versus planned.
- **ILS idents, frequencies, current CAT/sub-category and per-runway minima** — the 2007-era CAT III-C engineering target is not confirmed as the current operational status.
- **RFF category, PCN, declared distances (TORA/TODA/ASDA), curfew/slot regime, take-off minima, transition altitude** — none confirmed in reachable sources.
- **Current widebody stand/gate capability** — the field's developed infrastructure has historically centred on cargo; passenger-side Code E/F capability not independently confirmed.
- **Secondary 13/31 runway status** — confirm whether it is used for any scheduled service or is limited to general-aviation/testing use.
- **SIDs/STARs (current names)** — not obtained in this research pass.
- **On-field navaid** — none found in the reachable tier-4 dataset; confirm against the current AIRAC.
- **VATSIM cross-check** — no dedicated VATSIM vACC/division airport SOP for OMDW was located and cross-checked this pass; treat as an outstanding QA item.

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim material may inform content but is not listed here.*

- OurAirports — https://ourairports.com/airports/OMDW/ , /runways.html , /frequencies.html , /closest-navaids.html (retrieved 2026-07-26). *ARP/elevation/runway/frequency/navaid tier-4 baseline.*
- Wikipedia — "Al Maktoum International Airport" — https://en.wikipedia.org/wiki/Al_Maktoum_International_Airport (retrieved 2026-07-26). *History, 2007 runway/CAT III-C commissioning, cargo-terminal development, 2024 expansion approval and masterplan figures.*
- Companion OM C file: [Emirates (OMAE) FIR brief](../../../../airspace/fir/middle-east/emirates-omae.md) — FIR structure, ANSP/control-unit detail, conflict-zone context.
- Companion OM C file: [Middle East airspace brief](../../../../airspace/middle-east.md) — regional conflict-zone, GNSS-interference and seasonal-hazard context.
- **UAE GCAA AIP (AD 2 OMDW)** — primary source of record; not reachable in this research pass.

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-26 | Built from national AIP; K Global fields from live VAMSYS; 4-page pack. |
