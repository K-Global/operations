# RKSI — Incheon Intl · Airport Briefing

**RKSI / ICN** · Incheon, Incheon Metropolitan City, South Korea · Asia
**Version** v0.1 · **Updated** 2026-07-26 · **Status** Draft — provisional (tier-4 public-source corroborated), Asia network build

> **Read-me:** Planning aid for the sim, not a chart. The Korea eAIP (aim.koca.go.kr) is the source of record for RKSI AD 2 but renders as a script-driven frameset that did not return content to a public fetch this pass — static data here is corroborated across multiple public tier-4 sources and flagged accordingly; approaches/SIDs/STARs are listed **by name only or flagged not-yet-confirmed** — fly the charted current-AIRAC version. Live weather/NOTAMs are pulled at planning (§14/§15). Open 🟧 items are listed in §18. Flag legend 🟥 restriction/hazard · 🟧 caution/unverified · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| ARP (lat/long) | N37°27.75′ / E126°26.35′ (37.4625, 126.4392) `[SkyVector / legacy navdata cross-check]` — 🟧 OurAirports gives a nearby but distinct value (37.4691, 126.4510); not reconciled against a primary AIP ARP figure — see §18 |
| Field elevation | **23 ft / 7 m AMSL** `[OurAirports / SkyVector]` 🟩 (multi-source agreement) |
| Mag variation | 🟧 Not confirmed from a primary AIP table this pass; regional secular estimate for the Incheon/Seoul area is commonly cited around 7–8° W — **not a sourced AIP figure**, verify current chart |
| Time zone | **UTC+9 (KST)** — no daylight-saving observed |
| Runway(s) | **15L/33R** 3,750 × 60 m · **15R/33L** 3,750 × 60 m · **16L/34R** 4,000 × 60 m (longest) · **16R/34L** 3,750 × 60 m — all asphalt, lighted `[OurAirports/SkyVector]` |
| Preferential runway | Wind/traffic-dependent; the **15/33-designated pair** and **16/34-designated pair** are near-identically aligned (published headings ~153°/333° for all four) — 🟧 the differing designators for near-parallel headings is unreconciled from a primary source, verify current AIRAC (see §18). Reported operational split: 15L/33R weighted toward arrivals/cargo-adjacent traffic, 15R/33L toward departures, 16L/34R and 16R/34L mixed arrival/departure with usage re-balanced through the day 🟧 |
| Longest LDA | 4,000 m (16L/34R) — TORA/TODA/ASDA/LDA breakdown not published in reachable sources, see §7 |
| Approaches | Commonly reported **ILS, CAT III-capable on all four runways** (widely cited as CAT IIIa) — 🟧 sub-category and per-runway navaid idents/frequencies **not confirmed from a primary AIP table** this pass |
| RFF category | Not published / verify 🟧 |
| Control type | **Radar** — Incheon Tower/Ground/Apron on the field; **Seoul Approach/Departure**; **Incheon (RKRR)** FIR en route — see [Asia Airspace Brief](../../../../airspace/asia.md) |
| Elevation class | Sea-level (23 ft) — **not** hot-and-high; the field's defining seasonal driver is **winter snow/ice**, not density altitude |
| Special-airport status | Not operator-categorised in reachable sources 🟧. A durable regional-awareness item (not a special-airport restriction) is RKSI's proximity to the Yellow Sea / Northern Limit Line and the wider Incheon (RKRR) FIR's overflight-avoidance context around North Korea — see §3.5 and the [Asia Airspace Brief](../../../../airspace/asia.md) §9 |
| Customs / PoE | **Yes** — international halls in both **Terminal 1** and **Terminal 2**; exact desk hours not confirmed 🟧 |
| K Global category | **L** `[VAMSYS mirror 2026-07-26]` |
| K Global base | **No** `[VAMSYS mirror 2026-07-26]` |
| Company preferred/suitable alternates | **RKSS** (Gimpo) and **RKPK** (Busan/Gimhae) `[VAMSYS mirror 2026-07-26]` — no built folder for either field yet |
| Taxi-in / taxi-out (VAMSYS) | **18 min / 20 min** `[VAMSYS mirror 2026-07-26]` |

---

## 2. Validation summary

| Domain | Flag | Note |
|---|---|---|
| Terrain / CFIT | 🟩 | RKSI is built on reclaimed land between the former Yeongjong and Yongyu islands — flat, no close-in high terrain. Non-factor for the field itself. |
| Runway length vs fleet perf | 🟩 | All four runways (3,750–4,000 m) are ample for any K Global widebody; no field-length constraint identified. |
| Approach availability / minima | 🟧 | CAT III commonly reported on all four runways — a strong low-visibility capability — but sub-category and per-runway navaid data are unconfirmed from a primary source this pass. |
| Airspace / traffic / control | 🟧 | Major NE-Asia hub under Seoul Approach/Incheon (RKRR); shares the Seoul TMA with Gimpo (RKSS), ~18 NM away — high-density coordination expected. See §3.2. |
| Weather / seasonal hazard | 🟥 | Winter snow/ice (defining reliability driver, de-icing season) plus the East-Asian summer monsoon/typhoon season (~Jun–Oct) and coastal sea fog — see §3.4/§14. |
| Curfew / slots / hours | 🟧 | Reported as an H24 hub with no confirmed hard curfew in reachable sources — not independently AIP-verified. |
| RFF category vs our types | 🟧 | Not published / verify. |
| Fuel availability | 🟧 | Jet A-1 assumed available as a major hub; specific supplier/hours only lightly corroborated. |
| Customs / handling / security | 🟧 | International PoE confirmed structurally (T1/T2); exact hours and our specific handling agent not confirmed. |

---

## 3. Threat & Error Management (TEM)

### 3.1 CFIT / Terrain 🟩
RKSI sits at 23 ft AMSL on reclaimed land between the former Yeongjong and Yongyu islands, off the Incheon coast — there is **no close-in high terrain** relevant to arrival, departure or missed-approach paths. This is a non-issue field for terrain; verify the MSA ring on the current chart as routine practice, but CFIT is not the operative threat here.

### 3.2 Airborne conflict / traffic 🟧
Incheon is one of the busiest hubs in North-East Asia, operating under **Seoul Approach/Departure** and the **Incheon (RKRR)** FIR (see [Asia Airspace Brief](../../../../airspace/asia.md)). It shares the greater Seoul terminal airspace with **Gimpo International (RKSS)**, roughly 18 NM to the east — a dense multi-airport TMA that drives sustained sequencing/coordination workload, particularly during peak banks. Exact SID/STAR/sector structure is not confirmed this pass — pull the current-AIRAC procedure set at planning.

### 3.3 Runway excursion 🟧
No displaced thresholds or contamination-specific data were found in reachable sources this pass — **not independently confirmed**. The principal seasonal runway-excursion driver at this field is **winter snow/ice contamination** (§3.4/§14) rather than any geometric feature; braking-action reporting and de-icing status should be checked at planning in season.

### 3.4 Weather threat 🟥
Korea's four-season climate makes **winter snow and ice (roughly Nov–Mar)** the field's defining weather hazard — Incheon has recorded significant snow-driven disruption (e.g. a late-November 2024 snowfall event that grounded or delayed several hundred movements), and the airport runs a dedicated seasonal de-icing programme (§9/§11 Dispatch, §7 Departure). The **East-Asian summer monsoon and NW-Pacific typhoon season (~Jun–Oct, regional peak Aug–Sep)** bring periodic heavy convective rain and strong/gusty winds. Coastal **sea fog** affecting Yellow-Sea-adjacent airports in spring is a general regional phenomenon — not independently RKSI-sourced this pass, treat as a caution item. See §14.

### 3.5 Operational considerations 🟧
RKSI sits close to the Yellow Sea and, at the wider FIR/regional level, in reasonable proximity to the Northern Limit Line and North Korean (Pyongyang FIR, ZKKP) airspace — a durable geopolitical-awareness item for the region rather than a routine tactical constraint on RKSI arrivals/departures themselves; see the [Asia Airspace Brief](../../../../airspace/asia.md) §9 for the overflight-avoidance picture. Historically, on 16 June 2011 an inbound international flight on approach to Incheon was fired upon (without damage or injury) by ROK Marine Corps personnel who misidentified it, in the tense period following the 2010 Yeonpyeong bombardment — illustrative of the elevated-alert environment around the field rather than a current operational restriction. Plan around the four-runway, high-density traffic picture (§3.2) and the winter de-icing season (§3.4) as the field's real day-to-day operational drivers.

---

## 4. Cautions & Warnings

- **Winter snow/ice (Nov–Mar)** is the field's signature reliability hazard — check de-icing status and braking action before planning a winter-season turn.
- **Four-runway, high-density TMA** shared with nearby Gimpo (RKSS, ~18 NM east) — expect sustained sequencing workload in peak banks.
- **Two near-identically-aligned runway pairs carry different numeric designators** (15/33 vs 16/34) — confirm the assigned runway explicitly; do not assume by heading alone (§18).
- **Summer monsoon/typhoon season (~Jun–Oct)** can bring sudden convective weather and gusty crosswind conditions — monitor ATIS trend.
- CAT III capability is commonly reported on all four runways but **exact sub-category and navaid data are unconfirmed** — do not assume a specific LVP minimum without checking the current chart.

---

## 5. Aerodrome category, restrictions & crew qualification

- **Special-airport / category:** Not operator-categorised as a restricted-crew "special airport" in reachable sources. 🟧
- **Crew-qualification gate:** CAT II/III currency is prudent given the field's commonly-reported CAT III infrastructure and winter low-visibility/snow season; not independently confirmed as a hard requirement this pass. 🟧
- **Operating restrictions / bans:** No RNP AR ban, circling restriction, or night-movement ban found in reachable sources — verify current AIRAC. 🟧
- **Overflight / entry / permits:** Standard international arrival; no special state permit identified for scheduled international service. 🟩
- **Operations notes:** ANSP/airport authority — **Korea Office of Civil Aviation (KOCA)** for ATS, **Incheon International Airport Corporation (IIAC)** as airport operator; both not independently re-verified against a live AIP portal this pass (see read-me).

---

## 6. General / hours / services

| Item | Value | Flag |
|---|---|---|
| ATS hours | Reported H24 across reachable sources; not independently AIP-confirmed | 🟧 |
| AD operating hours | Reported H24 — no confirmed hard curfew found | 🟧 |
| Night / curfew restrictions | None identified in reachable sources; landside facilities operate continuously, airside/security posture may vary with schedule gaps | 🟧 |
| RFF category | Not published / verify | 🟧 |
| Fuel | Jet A-1 assumed; a single supplier reference found (not independently corroborated) | 🟧 |
| PCN | Not published / verify | 🟧 |
| Customs | T1 & T2 international halls confirmed; exact desk hours not confirmed | 🟧 |
| Handling / FBO | Not confirmed for our operation in reachable sources | 🟧 |

---

## 7. Runways & declared distances

| RWY | Dimensions | Surface / PCN | TORA | TODA | ASDA | LDA | Notes |
|---|---|---|---|---|---|---|---|
| 15L | 3,750 × 60 m | Asphalt, lighted / PCN not published | Not published / verify | Not published / verify | Not published / verify | Not published / verify | Reported weighted toward arrival/cargo-adjacent traffic 🟧 |
| 33R | 3,750 × 60 m | Asphalt, lighted / PCN not published | Not published / verify | Not published / verify | Not published / verify | Not published / verify | Reciprocal of 15L |
| 15R | 3,750 × 60 m | Asphalt, lighted / PCN not published | Not published / verify | Not published / verify | Not published / verify | Not published / verify | Reported weighted toward departures 🟧 |
| 33L | 3,750 × 60 m | Asphalt, lighted / PCN not published | Not published / verify | Not published / verify | Not published / verify | Not published / verify | Reciprocal of 15R |
| 16L | 4,000 × 60 m | Asphalt, lighted / PCN not published | Not published / verify | Not published / verify | Not published / verify | Not published / verify | Longest runway; mixed arrival/departure |
| 34R | 4,000 × 60 m | Asphalt, lighted / PCN not published | Not published / verify | Not published / verify | Not published / verify | Not published / verify | Reciprocal of 16L |
| 16R | 3,750 × 60 m | Asphalt, lighted / PCN not published | Not published / verify | Not published / verify | Not published / verify | Not published / verify | Mixed arrival/departure |
| 34L | 3,750 × 60 m | Asphalt, lighted / PCN not published | Not published / verify | Not published / verify | Not published / verify | Not published / verify | Reciprocal of 16R |

*Dimensions/surface sourced to OurAirports and SkyVector (tier-4, cross-corroborated); declared distances (TORA/TODA/ASDA/LDA), PCN and displaced-threshold data were not found in a reachable primary AIP table this pass — treat as open items (§18). All lengths in metres.*

---

## 8. Communications

| Service | Callsign | Frequency | Hours | Notes |
|---|---|---|---|---|
| ATIS | Incheon Intl ATIS | 128.20 / 128.40 / 128.65 / 230.25 / 344.20 | H24 (assumed) | 🟧 |
| Delivery | Incheon Delivery | 121.60 / 121.87 / 269.20 | H24 (assumed) | 🟧 |
| Ground | Incheon Ground | 121.70 / 121.75 / 121.87 / 121.92 / 226.90 | H24 (assumed) | 🟧 |
| Apron / Ramp | Incheon Apron | 121.65 / 121.67 / 121.80 / 122.17 / 122.22 / 122.32 / 123.32 / 123.57 | H24 (assumed) | 🟧 |
| Tower | Incheon Tower | 118.20 / 118.27 / 118.80 / 231.80 | H24 (assumed) | 🟧 |
| Departure | Seoul Departure | 121.40 / 124.80 / 125.15 / 353.20 | H24 (assumed) | 🟧 |
| Approach | Seoul Approach | 119.05 / 119.10 / 119.75 / 120.80 / 121.35 / 124.20 / 124.70 / 293.30 | H24 (assumed) | 🟧 |
| Centre / FIR | Incheon (RKRR) — Korea Office of Civil Aviation (KOCA) | Per current AIRAC | H24 | See [Asia Airspace Brief](../../../../airspace/asia.md) |

*Source: SkyVector airport data page (tier-4, retrieved 2026-07-26), partially cross-corroborated by OurAirports' simplified frequency set. The two sources do not fully agree on every position's exact frequency — treat all values as 🟧 pending a live-AIRAC cross-check; the multi-frequency sectorised structure itself is consistent with a major-hub facility.*

---

## 9. Navaids

| Aid | Ident | Freq | Hours | Notes |
|---|---|---|---|---|
| VOR | WNG (Wangsan/Seoul) | 112.90 | H24 (assumed) | ~1.8 NM from the field 🟧 |
| VOR | NCN (Incheon) | 113.80 | H24 (assumed) | ~2.0 NM from the field 🟧 |
| VOR | KIP (Gimpo/Seoul) | 113.60 | H24 (assumed) | ~17.8 NM — shared Seoul-TMA reference |
| VOT | SEL (Anyang) | 115.50 | H24 (assumed) | ~23.6 NM |
| ILS (all 4 RWY) | Idents not confirmed | Not confirmed | H24 (assumed) | Commonly reported CAT III-capable — idents/frequencies **not confirmed from a primary AIP table** this pass 🟧 |

*Distant NDBs (Yechon, Sokcho, Kangnung) appear in the SkyVector "nearby navaids" list at >100 NM range and are enroute aids, not RKSI approach navaids — omitted here as not field-relevant.*

---

## 10. Arrival

- **Transition altitude / level:** Not confirmed in reachable sources — verify current chart. 🟧
- **Speed:** Standard 250 KIAS below FL100 (ICAO norm) — confirm no local override on current chart.
- **Preferential runway logic:** Wind/traffic-dependent, split across the 15/33- and 16/34-designated runway pairs — see §1 for the reported operational weighting; confirm actual config with ATIS/ATC on the day.
- **Approaches (names only — verify minima on current AIRAC charts):**

| RWY | Approach | IAF | FAF/FAP alt | Notes |
|---|---|---|---|---|
| 15L/33R | ILS, commonly reported CAT III | Not confirmed | Not confirmed | Sub-category/idents not confirmed 🟧 |
| 15R/33L | ILS, commonly reported CAT III | Not confirmed | Not confirmed | Sub-category/idents not confirmed 🟧 |
| 16L/34R | ILS, commonly reported CAT III | Not confirmed | Not confirmed | Sub-category/idents not confirmed 🟧 |
| 16R/34L | ILS, commonly reported CAT III | Not confirmed | Not confirmed | Sub-category/idents not confirmed 🟧 |

- **STARs (names only):** Not confirmed in reachable research pass — pull the current-AIRAC STAR list at planning. 🟧
- **LVP:** CAT III infrastructure commonly reported region-wide as a mitigation for winter low-visibility/snow events; exact trigger RVR not confirmed. 🟧
- **Missed approach watch-items:** Terrain is not the driver (flat reclaimed-land site); the operative concern is re-sequencing in a dense, multi-runway, shared-TMA environment (§3.2).

---

## 11. Departure

- **SIDs (names only — fly the charted version):** Not confirmed in reachable research pass — pull the current-AIRAC SID list at planning. 🟧
- **RNP / climb-gradient requirements:** Not confirmed this pass. See [`OM E — PBN and RNP Operations`](../../../../../flight-ops/pbn-and-rnp-operations.md) for the regional PBN framework.
- **Take-off minima:** Not published / verify. 🟧
- **Start-up / push-back:** Not confirmed in reachable sources — confirm cross-bleed/APU notification procedure locally. 🟧
- **ATC slot / CTOT & clearance:** No confirmed slot-coordination level found in reachable sources this pass. 🟧
- **De-icing:** Reported available in season (Nov–Mar, Korean winter); exact pad locations/procedure not confirmed from a primary source this pass. See [`OM E — Cold Weather Operations`](../../../../../flight-ops/cold-weather-operations.md). 🟧

---

## 12. Noise & Environmental

- **Noise abatement (NAP):** Not confirmed in reachable sources — verify locally. 🟧
- **Night noise / dB limits:** Not confirmed. 🟧
- **Engine run-up restrictions:** Not confirmed. 🟧
- **Reverse thrust / idle-reverse policy:** Not confirmed. 🟧

---

## 13. Ground operations

- **Stands for our types:** **Terminal 1** (44 gates, plus the satellite **Concourse A** with 30 gates — reported all A380-capable) and **Terminal 2** (37 gates, opened 2018, expanded through a Phase 4 programme completed 3 Dec 2024) together provide extensive widebody-capable gate capacity — exact stand/gate assignment for our operation not confirmed. 🟧 | 🟧
- **Push-back:** Not confirmed — verify locally. 🟧
- **Standard taxi routes:** Confirm with Ground/Apron on the day.
- **Hot spots / tight taxiways:** Not confirmed in reachable sources this pass. 🟧
- **Follow-me:** Availability not confirmed. 🟧

---

## 14. Weather & seasonal (durable)

- **Climate / prevailing wind:** Korea's four-season continental-influenced climate; the field's two runway-pair alignments (~150°/330°) are broadly consistent with the seasonal wind pattern (winter NW monsoon flow, summer SW monsoon flow).
- **Seasonal hazards:** **Winter snow/ice (Nov–Mar)** is the defining hazard, driving a dedicated de-icing programme; the region has seen significant snow-driven disruption events (e.g. late-Nov 2024). The **East-Asian summer monsoon and NW-Pacific typhoon season (~Jun–Oct, regional peak Aug–Sep)** bring convective rain and periodic strong winds. **Coastal sea fog** in spring is a general Yellow-Sea-coast phenomenon, not independently RKSI-confirmed this pass.
- **Local effects:** No notable terrain-driven local effect (flat reclaimed-island site); the operative local factors are seasonal (snow/ice, monsoon, coastal fog) rather than terrain-driven.

> **Live weather — pull at planning (T-2h):** METAR, TAF, TREND, SIGMET/AIRMET, typhoon advisories in season. Not stored here.

---

## 15. NOTAMs

> **Pull at planning (T-2h).** Perishable — not stored here. Check: runway/taxiway closures, navaid U/S, lighting, obstacle/crane, RFF downgrade, GPS/RAIM, de-icing pad status in season, current KADIZ/regional advisories per the [Asia Airspace Brief](../../../../airspace/asia.md). Source: AIS / OFP NOTAM block.

---

## 16. Fuel & alternate planning notes

- **Typical role for us:** Destination / alternate within the K Global Asia network (not a base — see §1).
- **Nearest suitable alternates:** Company preferred/suitable alternates **RKSS** (Gimpo, South Korea) and **RKPK** (Busan/Gimhae, South Korea) `[VAMSYS mirror 2026-07-26]` — no built airport folder for either field yet; confirm suitability, runway/RFF adequacy and current minima per leg.
- **Fuel-uplift notes:** Jet A-1 assumed available as a major hub; supplier/hours only lightly corroborated. 🟧 See [`OM E — Fuel Policy`](../../../../../flight-ops/fuel-policy.md).
- **Range/perf flags for our fleet:** Field length/strength non-limiting for any K Global type on the main runways. See [`OM B — Fleet Capability Matrix`](../../../../../fleet/capability-matrix.md) for type-by-type range/performance reference.

---

## 17. Fleet-specific notes (optional)

- No type-specific consideration identified beyond the network-general reference. See [`OM B — Fleet Capability Matrix`](../../../../../fleet/capability-matrix.md); the operative planning considerations at RKSI are the winter de-icing season and shared-TMA traffic density (§3) rather than any aircraft-performance penalty.

---

## 18. Open items (🟧 — confirm against AIP / current AIRAC)

- **Korea eAIP (aim.koca.go.kr) AD 2 RKSI** did not render to a reachable public fetch this pass (script-driven frameset) — re-attempt via a browser-rendered session or an alternate mirror before treating any figure here as audit-grade.
- **ARP coordinate discrepancy** — SkyVector/legacy-navdata value (37.4625, 126.4392) vs OurAirports value (37.4691, 126.4510) not reconciled against a primary AIP ARP figure.
- **Runway designator/heading discrepancy** — the 15/33- and 16/34-designated runway pairs show near-identical published headings (~153°/333°); the differing numeric designators are not reconciled from a primary source.
- **Declared distances (TORA/TODA/ASDA/LDA), PCN and displaced-threshold data** for all four runways — not found in a reachable source this pass.
- **RFF category** — not published / verify.
- **Mag variation** — not sourced from a primary AIP table; regional secular estimate only.
- **ILS idents, frequencies and CAT sub-category (IIIa/IIIb) per runway** — commonly reported as CAT III (often cited as IIIa) but not confirmed from a primary AIP table.
- **SIDs/STARs (current names), take-off minima, transition altitude/level** — not obtained this pass; pull the live current-AIRAC procedure list before use.
- **Curfew/slot regime, ATC frequencies (exact current-sector assignment), RFF, PCN, fuel supplier/hours, customs desk hours, handling agent, hot spots/taxiway detail, NAP/noise data** — none independently confirmed from a primary source this pass.
- **De-icing pad locations/procedure detail** — reported available in season; exact facility layout not confirmed from a primary source.

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim material (current-AIRAC charts) informs content but is not listed here.*

- **AIP Republic of Korea (Korea Office of Civil Aviation, eAIP portal)** — https://aim.koca.go.kr/eaipPub/Package/2024-03-20-AIRAC/html/eAIP/KR-AD-2.RKSI-en-GB.html (attempted 2026-07-26; portal renders as a script-driven frameset, no content returned to a public fetch this pass — primary source of record, not yet independently verified from this session).
- OurAirports — https://ourairports.com/airports/RKSI/ and /runways.html and /frequencies.html (retrieved 2026-07-26). *ARP/elevation/runway/frequency cross-check.*
- SkyVector — https://skyvector.com/airport/RKSI/Incheon-International-Airport (retrieved 2026-07-26). *ARP, runway heading/coordinate detail, communications, navaids.*
- Wikipedia — "Incheon International Airport" — https://en.wikipedia.org/wiki/Incheon_International_Airport (retrieved 2026-07-26). *History, terminal/gate counts, the 2011 misidentification-fire incident.*
- Travel And Tour World — "Seoul Snowstorm 2024" — https://www.travelandtourworld.com/news/article/seoul-snowstorm-2024-new-record-disruption-grounds-over-100-flights-at-incheon-airport-amid-winter-travel-chaos/ (retrieved 2026-07-26). *Winter snow-disruption corroboration.*
- NASA NTRS — Zhu & Eun, "ICN Deicing Operations Analysis" — https://ntrs.nasa.gov/api/citations/20190000853/downloads/20190000853.pdf (retrieved 2026-07-26). *De-icing season/operations corroboration.*

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-26 | Built from national AIP; K Global fields from live VAMSYS; 4-page pack. |
