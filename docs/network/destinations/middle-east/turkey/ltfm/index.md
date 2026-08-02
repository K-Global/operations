# LTFM — İstanbul Airport · Airport Briefing

**LTFM / IST** · Arnavutköy, İstanbul, Türkiye · Middle East
**Version** v0.1 · **Updated** 2026-07-26 · **Status** Draft — DHMİ AIP-derived

> **Read-me:** Planning aid for the sim, not a chart. Static data is drawn from the DHMİ AIP Türkiye, AD 2 LTFM (current AIRAC extract retrieved) plus standard public aeronautical data; approaches/SIDs/STARs are listed **by name only or flagged not-yet-confirmed** — fly the charted current-AIRAC version. Live weather/NOTAMs are pulled at planning (§14/§15). Open 🟧 items are listed in §18. Flag legend 🟥 restriction/hazard · 🟧 caution/unverified · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| ARP (lat/long) | 41°16′31″N / 028°45′07″E (site of ARFF‑3 building, west of RWY 18/36) `[DHMİ AIP AD 2 LTFM 2.2]` |
| Field elevation | **325 ft / 99.0 m AMSL** (reference temperature 29 °C; mean low −2 °C) |
| Mag variation | **6.1° E (2025)** / 0.05° increasing per year |
| Time zone | UTC+3 (TRT, no DST observed) |
| Runway(s) | **Five runways**: 16R/34L (3,750 × 60 m) · 16L/34R (3,750 × 45 m) · 17R/35L (4,100 × 45 m) · 17L/35R (4,100 × 60 m) · 18/36 (3,060 × 45 m) — all asphalt, PCN 96–102 F/A/W/T |
| Preferential runway | Wind/traffic/flow-dependent; the field runs **triple independent parallel runway operations** (16R/34L, 17R/35L or 17L/35R, and a third parallel) since 17 Apr 2025 — a first for Europe; RWY 18/36 serves as the crosswind/overflow runway — see §10/§11 |
| Longest LDA | 4,100 m (17R/35L, 17L/35R) |
| Approaches | **ILS CAT III** on 16R/34L, 17L/35R and 18/36 (6 runway ends); **ILS CAT I** on 16L/34R and 17R/35L |
| RFF category | **CAT 10** (ICAO highest — A380-capable) 🟩 |
| Control type | **Radar** — Yeşilköy APP/Radar (multi-sector) approach, İstanbul TWR (5 positions) on the field; FIR: **İstanbul (LTBB)** — see [Middle East airspace brief](../../../../airspace/middle-east.md) |
| Elevation class | Near sea-level (325 ft) — **not** hot-and-high; the operative reliability driver is airfield/airspace complexity and traffic density, not density altitude |
| Special-airport status | 🟧 Five-runway megahub with triple-independent-parallel operations and a crosswind runway; not operator-categorised as crew-restricted in reachable sources — see §5 |
| Customs / PoE | **Yes** — major international hub; H24 assumed (all listed AD services published H24) 🟧 |
| K Global category | **L** `[VAMSYS mirror 2026-07-25]` 🟩 |
| K Global base | **No** `[VAMSYS mirror 2026-07-25]` |
| Company preferred alternates | **LTBA, LTBJ** `[VAMSYS mirror 2026-07-25]` |
| Taxi-in / taxi-out (VAMSYS) | **20 min / 22 min** `[VAMSYS mirror 2026-07-25]` |

---

## 2. Validation summary

| Domain | Flag | Note |
|---|---|---|
| Terrain / CFIT | 🟩 | Field sits on rolling terrain near the Black Sea coast, ~40 km NNW of the city; no close-in high terrain reported in reachable sources. Not independently re-verified against a current MSA chart this pass — 🟧 verify. |
| Runway length vs fleet perf | 🟩 | 4,100 m (17R/35L, 17L/35R) and 3,750 m (16R/34L, 16L/34R) mains are ample for any K Global widebody; 3,060 m crosswind runway (18/36) is non-limiting for its role. |
| Approach availability / minima | 🟩 | CAT III on three of the five runways (16R/34L, 17L/35R, 18/36); CAT I only on 16L/34R and 17R/35L — brief which pair is CAT-I-only before planning a low-vis arrival on those runways. |
| Airspace / traffic / control | 🟥 | One of the world's busiest hubs; **triple independent parallel approach/departure operations** (since Apr 2025) plus a fifth crosswind runway drive continuous high controller/crew workload — see §3.2. |
| Weather / seasonal hazard | 🟧 | Marmara/Black Sea regional climate; specific seasonal fog/wind statistics for this field not confirmed in reachable sources this pass — see §14. |
| Curfew / slots / hours | 🟧 | All AD services published **H24**; no explicit night curfew found in reachable sources. Slot-coordination level (IATA Level 1/2/3) not consistently confirmed — conflicting public signals; A-CDM in use. Treat as unconfirmed pending live verification. |
| RFF category vs our types | 🟩 | CAT 10 — above any of our fleet's requirement. |
| Fuel availability | 🟧 | Jet A-1, H24, unlimited hydrant + tanker capacity published; specific supplier not individually confirmed. |
| Customs / handling / security | 🟧 | Major international PoE hub; exact desk hours and our specific handling agent not confirmed in reachable public sources. |

---

## 3. Threat & Error Management (TEM)

### 3.1 CFIT / Terrain 🟩
İstanbul Airport sits at 325 ft AMSL on rolling ground near the Black Sea coast in the Arnavutköy district, roughly 40 km NNW of the city centre. No close-in high terrain was identified in reachable public sources for the immediate arrival/departure/missed-approach environment. This is treated as a non-factor field for terrain, but the MSA ring has not been independently cross-checked against a current AIRAC chart this pass — verify on the current chart as routine practice. 🟧

### 3.2 Airborne conflict / traffic 🟥
İstanbul Airport is a five-runway megahub — **16R/34L, 16L/34R, 17R/35L, 17L/35R (four long parallel runways) plus 18/36 (a shorter, near-perpendicular crosswind/overflow runway)**. Since **17 April 2025** the field has run **triple independent parallel runway operations**, reported as a first for Europe, on top of an already dense multi-sector Yeşilköy APP/Radar structure (13+ named approach sectors: SAD, SAG, SWU, SWN, SWS, SWD, SWF, SEU, SEN, SEC, SES, SCF, SBD, SED, SEF) and a five-position İstanbul TWR / nine-position İstanbul Ground. This is a sustained high-workload environment for both crew and controllers, with A-CDM (Airport Collaborative Decision Making) in use to manage flow. Cross-ref [Middle East airspace brief](../../../../airspace/middle-east.md) for the wider FIR picture; İstanbul (LTBB) is the controlling FIR.

### 3.3 Runway excursion 🟧
No displaced thresholds are published for any of the five runways in the reachable AIP extract. RWY 18/36 carries a pavement-strength/surface transition — asphalt (PCN 102 F/A/W/T) with a concrete section (PCN 110 R/A/W/T) at each end (first/last 375 m) plus a high-friction-surface treatment near each threshold — a strength/friction note rather than a distance-usability issue. All main-runway declared distances equal full runway length (TORA=TODA=ASDA=LDA); numerous published intersection take-off options exist on nearly every runway with reduced TORA — confirm the assigned intersection against the current AIRAC before accepting an intersection departure.

### 3.4 Weather threat 🟧
No İstanbul-Airport-specific seasonal hazard statistics (fog frequency, wind-shear, convective season) were found in reachable public sources this pass. The field's Marmara/Black-Sea-influenced regional climate would be expected to bring winter fog/low-stratus risk and possible summer convective activity as general regional climatology — treat as unconfirmed pending a dedicated weather-climatology source. See §14.

### 3.5 Operational considerations 🟧
Plan around: (1) the **five-runway, triple-independent-parallel-approach environment** — a genuinely unusual level of airfield complexity requiring a sharp traffic scan even under radar; (2) **RWY 18/36** as the crosswind/overflow runway, CAT III-capable on a Calvert lighting system but with different declared-distance intersection options than the four main parallels; (3) an **unconfirmed slot/curfour regime** — all published AD services are H24 with no explicit curfew found, but the formal IATA coordination level is not consistently confirmed in public sources and should be verified before schedule planning; and (4) an **A-CDM environment**, meaning pre-departure sequencing discipline (TSAT/TOBT) has real schedule consequences. RFF, navaid and approach infrastructure are all first-tier for a hub of this scale.

---

## 4. Cautions & Warnings

- **Triple independent parallel runway operations** (since 17 Apr 2025) plus a fifth crosswind runway (18/36) make this one of the most complex airfield geometries in the network — maintain a heightened traffic scan and confirm the active runway/config on ATIS before pushback.
- **16L/34R and 17R/35L are ILS CAT I only** — do not assume CAT III availability on every runway; confirm the assigned runway's approach category before planning a low-visibility arrival.
- **RWY 18/36** uses a **Calvert approach lighting system** (the other four runways use Barette) and has a concrete/high-friction-surface treatment at each threshold — a different visual/physical environment from the main parallels.
- Numerous **intersection take-off** options are published on nearly every runway with materially reduced TORA — confirm the assigned intersection distance against the current AIRAC before accepting a non-full-length departure.
- **A-CDM (Airport Collaborative Decision Making)** governs pushback/start-up sequencing — build TSAT/TOBT discipline into ground planning; late compliance has real slot/sequencing consequences at this traffic volume.
- Mag variation, exact slot/curfew regime and seasonal weather statistics are not fully confirmed this pass — treat as 🟧 pending a live-AIRAC/operator cross-check (§18).

---

## 5. Aerodrome category, restrictions & crew qualification

- **Special-airport / category:** Not operator-categorised as a restricted-crew "special airport" in reachable sources; the standing crew-briefing items are the **five-runway / triple-independent-parallel-approach traffic environment** and the **mixed CAT I / CAT III runway set**. 🟧
- **Crew-qualification gate:** Standard CAT III currency required for low-vis arrivals on the CAT III-equipped runways (16R/34L, 17L/35R, 18/36); confirm crew/aircraft currency before planning a low-vis approach on those runways specifically — the other pair (16L/34R, 17R/35L) is CAT I only. 🟧
- **Operating restrictions / bans:** No RNP AR ban, circling restriction, or night curfew found in reachable sources — verify current AIRAC. 🟧
- **Overflight / entry / permits:** Standard international arrival into Türkiye; no special state permit required for scheduled commercial ops. 🟩
- **Operations notes:** Operator — **İGA Havalimanı İşletmesi A.Ş.**; ANSP — **DHMİ (Devlet Hava Meydanları İşletmesi)**, Ankara; APP service provided by Yeşilköy APP with İstanbul TWR taking over when required/transferred.

---

## 6. General / hours / services

| Item | Value | Flag |
|---|---|---|
| ATS hours | H24 (AD Operator, Customs/Immigration, AIS, ARO, MET, ATS, Fuelling, Handling, Security, De-icing all published H24) | 🟩 |
| AD operating hours | H24 — no published curfew found in reachable sources | 🟧 |
| Night / curfew restrictions | None found in reachable sources — verify current AIRAC | 🟧 |
| RFF category | **CAT 10** | 🟩 |
| Fuel | Jet A-1; H24; unlimited hydrant (40–65 L/s per stand) + tanker capacity (30–60 L/s) published | 🟩 |
| PCN | Runway-specific — see §7; most taxiways asphalt PCN 88–100 F/A/W/T, some concrete sections PCN 100–110 R/A/W/T | 🟩 |
| Customs | Major international PoE; exact desk hours not confirmed | 🟧 |
| Handling / FBO | Multiple ground handling / cargo-handling service providers referenced generically in the AIP; specific agent for our operation not confirmed | 🟧 |

---

## 7. Runways & declared distances

| RWY | Dimensions | Surface / PCN | TORA | TODA | ASDA | LDA | Notes |
|---|---|---|---|---|---|---|---|
| 16R | 3,750 × 60 m | Asphalt / PCN 96 F/A/W/T | 3,750 m | 3,750 m | 3,750 m | 3,750 m | CAT III; multiple intersection take-off options published (e.g. 3,653 m, 3,543 m, 3,534 m) |
| 34L | 3,750 × 60 m | Asphalt / PCN 96 F/A/W/T | 3,750 m | 3,750 m | 3,750 m | 3,750 m | CAT III; intersection options 3,653 m / 3,543 m |
| 16L | 3,750 × 45 m | Asphalt / PCN 96 F/A/W/T | 3,750 m | 3,750 m | 3,750 m | 3,750 m | CAT I; intersection options down to 2,248 m |
| 34R | 3,750 × 45 m | Asphalt / PCN 96 F/A/W/T | 3,750 m | 3,750 m | 3,750 m | 3,750 m | CAT I; intersection options down to 2,708 m |
| 17R | 4,100 × 45 m | Asphalt / PCN 96 F/A/W/T | 4,100 m | 4,100 m | 4,100 m | 4,100 m | CAT I; intersection options down to 2,598 m |
| 35L | 4,100 × 45 m | Asphalt / PCN 96 F/A/W/T | 4,100 m | 4,100 m | 4,100 m | 4,100 m | CAT I; intersection options down to 2,898 m |
| 17L | 4,100 × 60 m | Asphalt / PCN 96 F/A/W/T | 4,100 m | 4,100 m | 4,100 m | 4,100 m | CAT III; intersection options down to 3,668 m |
| 35R | 4,100 × 60 m | Asphalt / PCN 96 F/A/W/T | 4,100 m | 4,100 m | 4,100 m | 4,100 m | CAT III; intersection options down to 2,898 m |
| 18 | 3,060 × 45 m | Asphalt PCN 102 F/A/W/T + concrete (last 375 m) PCN 110 R/A/W/T, high-friction surface 2,568–3,000 m | 3,060 m | 3,060 m | 3,060 m | 3,060 m | CAT III (Calvert system); intersection options 2,879 m / 2,970 m |
| 36 | 3,060 × 45 m | Asphalt PCN 102 F/A/W/T + concrete (first 375 m) PCN 110 R/A/W/T, high-friction surface 60–492 m | 3,060 m | 3,060 m | 3,060 m | 3,060 m | CAT III (Calvert system); intersection options 2,866 m / 2,964 m |

*Source: DHMİ AIP Türkiye, AD 2 LTFM 2.12/2.13 (AIRAC AMDT 01–02/26, current cycle retrieved 2026-07-26). RESA 240×150 m available on all runways; strip dimensions 3,870×280 m (16R/34L, 16L/34R), 4,220×280 m (17R/35L, 17L/35R), 3,180×280 m (18/36). No displaced thresholds published. All distances in metres.*

---

## 8. Communications

| Service | Callsign | Frequency | Hours | Notes |
|---|---|---|---|---|
| ATIS | İstanbul Airport Information | 128.850 (DEP) / 126.350 (ARR) | H24 | D-ATIS available for ACARS-equipped aircraft |
| Delivery | İstanbul Delivery | 121.700 / 130.625 | H24 | |
| Ground | İstanbul Ground 1–9 (N/S/W/E sub-sectors) + Ground DE-ICE | 121.550–129.625 range (9 sector pairs) | H24 | Multiple positions — take the assigned frequency |
| Tower | İstanbul TWR 1–5 | 131.100 / 131.025 / 120.050 / 118.075 / 119.025 / 120.950 | H24 | Five tower positions across the runway set |
| Approach (Yeşilköy APP/Radar) | SAD, SAG, SWU, SWN, SWS, SWD, SWF, SEU, SEN, SEC, SES, SCF, SBD, SED, SEF | Multiple, 118.950–133.225 range | H24 | Sector-specific — take the assigned frequency; also covers Sabiha Gökçen (SAG sector) |
| Centre / FIR | İstanbul (LTBB) | Per current AIRAC | H24 | See [Middle East airspace brief](../../../../airspace/middle-east.md) |

*Source: DHMİ AIP Türkiye, AD 2 LTFM 2.18 (AIRAC AMDT 11/24 & 04/25, current cycle retrieved 2026-07-26).*

---

## 9. Navaids

| Aid | Ident | Freq | Hours | Notes |
|---|---|---|---|---|
| DVOR/DME | UHL | 110.0 (CH37X) | H24 | On/near 16R/34L axis |
| DVOR/DME | UHM | 108.25 (CH19Y) | H24 | On/near 17R/35L axis |
| DVOR/DME | UHN | 109.85 (CH35Y) | H24 | On/near 18/36 axis |
| ILS 16R | IUCB | 110.35 | H24 | CAT III |
| ILS 34L | IUCA | 108.55 | H24 | CAT III |
| ILS 17L | IUCF | 111.95 | H24 | CAT III |
| ILS 35R | IUCE | 109.55 | H24 | CAT III |
| ILS 18 | IUCD | 110.95 | H24 | CAT III |
| ILS 36 | IUCC | 111.35 | H24 | CAT III |

*Source: DHMİ AIP Türkiye, AD 2 LTFM 2.19 (AIRAC AMDT 02/24, current cycle retrieved 2026-07-26). No ILS listed for 16L/34R or 17R/35L in the reachable extract — those runways are CAT I visual/PAPI-supported per §7 lighting table; confirm on current chart. 🟧*

---

## 10. Arrival

- **Transition altitude / level:** TA 12,000 ft; TL by QNH — not independently confirmed this pass, verify current chart. 🟧
- **Speed:** Standard 250 KIAS below FL100 (ICAO norm) — confirm no local override on current chart.
- **Preferential runway logic:** Wind/traffic/flow-dependent under a triple-independent-parallel-approach regime (since Apr 2025); RWY 18/36 serves as the crosswind option. Exact preferential-runway rule not confirmed in reachable sources — expect ATC/ATIS assignment. 🟧
- **Approaches (names only — verify minima on current AIRAC charts):**

| RWY | Approach | Notes |
|---|---|---|
| 16R | ILS CAT III (IUCB) | |
| 34L | ILS CAT III (IUCA) | |
| 16L | ILS CAT I (visual/PAPI, no ILS listed) | Verify current chart — 🟧 |
| 34R | ILS CAT I (visual/PAPI, no ILS listed) | Verify current chart — 🟧 |
| 17R | ILS CAT I (visual/PAPI, no ILS listed) | Verify current chart — 🟧 |
| 35L | ILS CAT I (visual/PAPI, no ILS listed) | Verify current chart — 🟧 |
| 17L | ILS CAT III (IUCF) | |
| 35R | ILS CAT III (IUCE) | |
| 18 | ILS CAT III (IUCD), Calvert lighting | |
| 36 | ILS CAT III (IUCC), Calvert lighting | |

- **STARs (names only):** Not confirmed in reachable research pass — pull the current-AIRAC STAR list at planning. 🟧
- **LVP:** CAT III trigger conditions apply on the CAT III-equipped runways; exact RVR/trigger figures not confirmed this pass. 🟧
- **Missed approach watch-items:** Terrain is not the primary driver (rolling ground, no close-in high terrain reported); the operative missed-approach concern is re-sequencing into a five-runway, triple-independent-parallel-approach traffic environment.

---

## 11. Departure

- **SIDs (names only — fly the charted version):** Not confirmed in reachable research pass — pull the current-AIRAC SID list at planning. 🟧
- **RNP / climb-gradient requirements:** Not confirmed in reachable sources this pass — confirm gradient/equipage per SID on the current chart. See [`OM E — PBN and RNP Operations`](../../../../../flight-ops/pbn-and-rnp-operations.md).
- **Take-off minima:** Published per AIP — exact figures not confirmed this pass. 🟧
- **Start-up / push-back:** A-CDM (Airport Collaborative Decision Making) governs the pre-departure sequence (TSAT/TOBT); confirm local push-back/cross-bleed notification procedure with Ground. 🟧
- **ATC slot / CTOT & clearance:** Formal IATA slot-coordination level not consistently confirmed in reachable public sources (conflicting signals — some sources describe no prior coordination required, others reference a slot-coordination system); EUROCONTROL-adjacent ATFM/CTOT practice not independently confirmed for LTFM. Treat as 🟧 pending verification. A-CDM is confirmed in use.
- **De-icing:** Five dedicated de-icing aprons (Deicing 1–5) with directional entry rules per apron (north/south/west-facing, per apron); H24 availability published. See [`OM E — Cold Weather Operations`](../../../../../flight-ops/cold-weather-operations.md).

---

## 12. Noise & Environmental

- **Noise abatement (NAP):** Not confirmed in reachable sources this pass — verify current AIP/AIRAC. 🟧
- **Night noise / dB limits:** Not confirmed in reachable sources — verify locally. 🟧
- **Engine run-up restrictions:** Not confirmed in reachable sources — verify locally. 🟧
- **Reverse thrust / idle-reverse policy:** Not confirmed in reachable sources — verify locally. 🟧

---

## 13. Ground operations

- **Stands for our types:** Extensive apron system (Terminal Contact Apron plus Aprons 1–7, six cargo aprons, five de-icing aprons); widebody/Code E-F stand allocation not individually confirmed in reachable sources. 🟧
- **Push-back:** Nose-in/push-back system standard for contact stands (except select remote/open stands using manual marshalling); mandatory-vs-self-manoeuvre policy for Code E/F stands not confirmed. 🟧
- **Standard taxi routes:** Extensive lettered taxiway system (A–T plus sub-taxiways); confirm routing with Ground/Apron on the day.
- **Hot spots / tight taxiways:** Not individually confirmed in reachable sources this pass; the AIP references numerous Code-C/E/F width transitions on named taxiway segments (e.g. TWY D, E5, F3, G1, T2, T3, T5, T7, T9) — confirm current chart hot-spot markings. 🟧
- **Follow-me:** Availability referenced generically (used for de-icing apron entry from the non-standard side); general availability not confirmed. 🟧

---

## 14. Weather & seasonal (durable)

- **Climate / prevailing wind:** Marmara/Black-Sea-influenced regional climate at a coastal-plateau location ~40 km NNW of İstanbul; specific prevailing-wind data for the field not confirmed in reachable sources this pass. 🟧
- **Seasonal hazards:** Not independently confirmed for this specific field in reachable sources — general regional climatology would suggest winter fog/low-stratus risk and a summer convective season, consistent with the broader Marmara/Black Sea region, but no field-specific statistic was found. 🟧
- **Local effects:** Not confirmed in reachable sources this pass. 🟧

> **Live weather — pull at planning (T-2h):** METAR, TAF, TREND, SIGMET/AIRMET. Not stored here.

---

## 15. NOTAMs

> **Pull at planning (T-2h).** Perishable — not stored here. Check: runway/taxiway closures (five-runway complex, confirm active configuration), navaid U/S, CAT III equipment status, lighting, obstacle/crane, RFF downgrade, GPS/RAIM for RNP procedures, current A-CDM/TSAT status. Source: official AIS / OFP NOTAM block.

---

## 16. Fuel & alternate planning notes

- **Typical role for us:** **Destination** — not a K Global base; served per the route register.
- **Nearest suitable alternates:** Company preferred alternates **LTBA** (İstanbul Atatürk, former main airport, now cargo/GA-oriented) and **LTBJ** (Tekirdağ Çorlu) `[VAMSYS mirror 2026-07-25]` — confirm suitability, runway/RFF adequacy and current minima per leg. The sibling field [**LTFJ — Sabiha Gökçen**](../ltfj/index.md), on the Asian side of İstanbul, is a further same-city option to assess operationally.
- **Fuel-uplift notes:** Jet A-1, H24, unlimited hydrant (40–65 L/s per stand) and tanker (30–60 L/s) capacity published — a well-provisioned megahub. Specific into-plane supplier not individually confirmed. 🟧 See [`OM E — Fuel Policy`](../../../../../flight-ops/fuel-policy.md).
- **Range/perf flags for our fleet:** Field length/strength non-limiting for any K Global type on the main runway pairs (4,100 m / 3,750 m). See [`OM B — Fleet Capability Matrix`](../../../../../fleet/capability-matrix.md) for type-by-type range/performance reference.

---

## 17. Fleet-specific notes (optional)

- No type-specific performance penalty identified at this near-sea-level, long-runway megahub. The operative planning consideration for any K Global widebody is airspace/ground complexity (five runways, triple-independent-parallel approaches, extensive taxiway system) rather than aircraft performance. See [`OM B — Fleet Capability Matrix`](../../../../../fleet/capability-matrix.md).

---

## 18. Open items (🟧 — confirm against AIP / current AIRAC)

- **Slot-coordination level** — conflicting public signals on whether LTFM carries formal IATA Level 2/3 coordination; A-CDM is confirmed in use but the formal slot regime is not consistently confirmed.
- **Night curfew** — none found in reachable sources (all AD services published H24); not independently confirmed as "no curfew exists."
- **SIDs/STARs (current names)** — not obtained in this research pass; pull the live current-AIRAC procedure list before use.
- **Take-off minima, noise abatement procedure, night noise limits, engine run-up and reverse-thrust policy** — none confirmed in reachable sources.
- **ILS on 16L/34R and 17R/35L** — the runway-lighting table shows CAT I precision-approach lighting on these runways but no ILS ident/frequency was found in the reachable navaid table; confirm on current chart whether these runways carry an ILS or are visual/PAPI-supported only.
- **Hot spots / named taxiway caution points** — the AIP references numerous width/code-letter transitions on named taxiways but no consolidated hot-spot list was reached this pass.
- **Terrain/MSA** — no close-in high terrain identified in reachable sources; not independently cross-checked against a current MSA chart.
- **Seasonal weather statistics** — no field-specific fog/wind/convective data found in reachable sources.
- **Widebody stand/gate allocation and ground handling agent(s) for our operation** — not confirmed.
- **Fuel into-plane supplier** — H24 unlimited hydrant/tanker capacity confirmed; specific supplier not confirmed.
- **Transition level (by QNH)** — TA confirmed at 12,000 ft; TL not independently confirmed.

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim material (current-AIRAC charts) informs content but is not listed here.*

- **DHMİ AIP Türkiye, AD 2 LTFM 2.1–2.20** — current AIRAC extract (amendment cycles through AMDT 03/26, eff. 19 Mar 2026; runway/navaid/comms sub-sections carrying amendment dates from AMDT 02/24 through AMDT 03/26) — https://www.dhmi.gov.tr/AIPDocuments/LT_AD_2_LTFM_en.pdf (retrieved 2026-07-26). *ARP, elevation, mag var, runway physical characteristics, declared distances, approach/runway lighting, ATS airspace, communications, navaids.*
- OurAirports — https://ourairports.com/airports/LTFM/ (retrieved 2026-07-26). *Cross-check.*
- Wikipedia — "Istanbul Airport" — https://en.wikipedia.org/wiki/Istanbul_Airport (retrieved 2026-07-26). *Opening dates, phased-development context, general background.*
- SKYbrary — "Istanbul Airport" — https://skybrary.aero/airports/ltfm (retrieved 2026-07-26). *Cross-check.*
- Public aviation-news reporting on triple independent parallel runway operations commencing 17 April 2025 (first in Europe) and A-CDM implementation — general search corroboration, specific outlet not individually re-verified this pass. *Advisory/secondary source — flagged 🟧.*

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-26 | Built from national AIP; K Global fields from live VAMSYS; 4-page pack. |
