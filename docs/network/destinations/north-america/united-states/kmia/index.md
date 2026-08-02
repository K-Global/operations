# KMIA — Miami Intl · Airport Briefing

**KMIA / MIA** · Miami, Florida, United States · North America
**Version** v0.1 · **Updated** 2026-07-26 · **Status** Draft — FAA-sourced, provisional

> **Read-me:** Planning aid for the sim, not a chart. Static data is drawn from the FAA Chart Supplement (Southeast, SE-3), the FAA d-TPP procedure index and FAA/OurAirports facility data; approaches/SIDs/STARs are listed **by name only** — fly the charted current-AIRAC version. Live weather/NOTAMs are pulled at planning (§14/§15). Open 🟧 items are listed in §18. Flag legend 🟥 restriction/hazard · 🟧 caution/unverified · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| ARP (lat/long) | N25°47′43.3″ / W080°17′24.4″ (25.79536, -80.29012) `[Navigraph navdata]`; cross-checked 25.796011, -80.289751 (OurAirports) — negligible rounding difference |
| Field elevation | **9 ft MSL** `[Navigraph navdata]`; OurAirports/FAA aggregate reports 8 ft — 1 ft discrepancy, operationally immaterial 🟧 |
| Mag variation | 🟧 **~7° W** (2025 NOAA secular estimate) — not a sourced primary-AIP figure; verify current epoch value on the chart |
| Time zone | UTC−5 (EST) / UTC−4 (EDT, US DST observed Mar–Nov) |
| Runway(s) | **08L/26R** 8,600 × 150 ft · **08R/26L** 10,506 × 200 ft · **09/27** 13,016 × 150 ft (longest) · **12/30** 9,360 × 150 ft — four runways in a **non-parallel, angled/mixed layout** (08/26 pair roughly east–west; 09/27 and 12/30 each on a different diverging heading), all asphalt |
| Preferential runway | Wind/traffic driven; South Florida's prevailing easterly trade winds typically favour an **"East Flow"** (08-series arrivals/departures), with 09/27 and 12/30 used complementarily for departure capacity and as the crosswind runway — not sourced to a specific ATC preferential-runway program 🟧 |
| Longest LDA | 13,016 ft physical (09/27); **12,749 ft** usable landing distance on RWY 27 and **11,666 ft** on RWY 09 after displaced thresholds — see §7 |
| Approaches | **ILS or LOC** published on **08R/26L, 09/27, 12/30** (all three longer runways, both ends); **RNAV (RNP)/RNAV (GPS)** published on all four runways including **08L/26R** (RNAV-only, no ILS) — CAT II/III sub-category **not confirmed** this pass 🟧 |
| RFF category | **FAA ARFF Index E** (~ICAO RFF Category 9–10 equivalent) 🟧 not independently confirmed against a primary FAA 5010 record this pass |
| Control type | **Radar** — Class B airspace; Miami Tower/Ground/Approach-Departure (Miami TRACON) on the field; **Miami ARTCC (ZMA)** en route — no OM C FIR brief yet published for ZMA; named in running text only |
| Elevation class | Sea-level (9 ft) — **not** hot-and-high; the field's defining threats are ground-movement complexity (angled runway layout, multiple named hot spots) and convective/tropical weather, not terrain or density altitude |
| Special-airport status | Not operator-categorised; standing crew-briefing items are the **non-parallel intersecting-runway geometry with published LAHSO combinations** and **five FAA-charted hot spots** — see §5 |
| Customs / PoE | **Yes** — one of the busiest US international-arrivals gateways; CBP processing in three terminal areas (see §6/§13) |
| K Global category | **L** `[VAMSYS mirror 2026-07-26]` 🟩 |
| K Global base | **No** `[VAMSYS mirror 2026-07-26]` |
| Company preferred alternates | **KFLL, KPBI** `[VAMSYS mirror 2026-07-26]` |
| Taxi-in / taxi-out (VAMSYS) | **15 min / 18 min** `[VAMSYS mirror 2026-07-26]` |

---

## 2. Validation summary

| Domain | Flag | Note |
|---|---|---|
| Terrain / CFIT | 🟩 | Flat, sea-level South Florida coastal plain; no terrain relevant to any arrival/departure/missed-approach path. |
| Runway length vs fleet perf | 🟩 | All four runways (8,600–13,016 ft) are non-limiting for any K Global type; the shortest (08L/26R, 8,600 ft) is still ample. |
| Approach availability / minima | 🟧 | ILS/LOC published on the three longer runways (both ends); RNAV on all four. CAT II/III sub-category not confirmed from a primary table this pass. |
| Airspace / traffic / control | 🟥 | Class B, high-density Miami TRACON airspace; the field's **non-parallel, intersecting runway geometry** (five FAA-charted hot spots, published LAHSO combinations) drives sustained ground and terminal-area workload — see §3.2/§3.3. |
| Weather / seasonal hazard | 🟥 | **Atlantic hurricane season (Jun–Nov)** and near-daily subtropical **afternoon convective/thunderstorm activity** are the field's defining weather threats; periodic dense-fog/low-ceiling events also occur and have triggered ground stops. |
| Curfew / slots / hours | 🟩 | No formal curfew; airport operates H24. Voluntary noise-abatement guidance applies over residential areas (not a mandatory program) — see §12. |
| RFF category vs our types | 🟩 | ARFF Index E is above any K Global type's requirement (flagged 🟧 for source confirmation only, not adequacy). |
| Fuel availability | 🟩 | Jet A-1 and AVGAS 100LL reported available H24; multiple into-plane operators on field. |
| Customs / handling / security | 🟧 | Yes — major CBP presence across three terminal areas; exact off-peak/overnight passenger-processing staffing not independently confirmed. |

---

## 3. Threat & Error Management (TEM)

### 3.1 CFIT / Terrain 🟩
KMIA sits at 9 ft MSL on the flat South Florida coastal plain — there is **no terrain** of any operational relevance to arrival, departure or missed-approach paths at this field. Verify the MSA ring on the current chart as routine practice, but CFIT is a non-issue here; the field's threats lie in ground-movement complexity and weather, not high ground.

### 3.2 Airborne conflict / traffic 🟥
Miami sits inside **Class B** airspace under **Miami TRACON** (Approach/Departure), one of the busier terminal areas in the network with year-round international, domestic and heavy cargo/freighter traffic mixing continuously. **Miami ARTCC (ZMA)** provides en-route service outside the terminal area (no OM C FIR brief is yet published for ZMA — reference it by name only in planning, do not expect a linked brief). The unusual **four-runway, non-parallel layout** (an 08/26 parallel pair plus two further runways, 09/27 and 12/30, each on a different diverging heading) means the field rarely operates a simple single-direction flow — expect crossing traffic between the runway complexes and sustained vectoring/sequencing workload, especially during weather-driven configuration changes.

### 3.3 Runway excursion 🟧
Two of the four runways carry **displaced thresholds**: RWY 09 (1,350 ft) and RWY 12 (950 ft) have significant displacements, and RWY 27 carries a smaller 267 ft displacement — the reason for each is not confirmed in reachable sources this pass; treat the **published LDA, not the physical runway length**, as the usable landing distance (§7). The field has documented **published LAHSO (Land and Hold Short Operations) combinations** given the intersecting/crossing runway geometry — verify the current LAHSO chart and never accept a LAHSO clearance without confirming the aircraft can land and stop within the available distance. Historical accident record includes a 2015 widebody takeoff from an intersection well short of the full runway length (RWY 9/Taxiway T1) that resulted in a tail strike on the RWY 27 approach lights after a computer-printout/briefing error — direct precedent for verifying intersection-departure distance before every non-full-length takeoff. A 2022 landing excursion on RWY 9 (gear-shimmy related) is a further reminder that runway-specific excursion risk here is a real, not theoretical, consideration.

### 3.4 Weather threat 🟥
The **Atlantic hurricane season (1 June – 30 November)** is the field's single most significant seasonal threat — South Florida is directly exposed to tropical cyclone landfall and near-miss tracks, requiring schedule contingency and, in the most severe cases, full airport ground-stop/closure planning. Independent of hurricane season, Miami sees **near-daily subtropical afternoon convective activity** in the warm months (thunderstorms, gusty/shifting winds, heavy rain-reduced visibility) driven by the sea-breeze convergence pattern typical of a peninsula location. Contrary to a "no low-visibility threat" assumption, **dense fog and low-ceiling events do occur** (documented ground stops with ceilings as low as ~200 ft and visibility down to a quarter-mile in recent winters) — brief for a low-vis contingency even though it is not the field's dominant hazard. See §14.

### 3.5 Operational considerations 🟥
Plan around three durable constraints: (1) the **angled/non-parallel four-runway layout with five FAA-charted hot spots and published LAHSO combinations** — this is the field's signature ground-workload driver, not a single named "hot spot runway" as at some other hubs, but a field-wide characteristic; (2) **hurricane-season schedule risk** (Jun–Nov) requiring active monitoring of tropical systems well in advance of impact; and (3) **near-daily convective weather** in the warm season affecting both ground and airborne sequencing. RFF, navaid and approach infrastructure are all reported adequate for the network; the open items in §18 are mostly currency/administrative confirmations (ILS sub-category, exact declared distances, frequency currency) rather than safety-critical gaps.

---

## 4. Cautions & Warnings

- **Non-parallel, angled runway layout** — 08L/26R, 08R/26L, 09/27 and 12/30 are **not** a simple parallel set; expect crossing traffic and read-back-heavy ATC instructions between runway complexes, especially during a configuration change.
- **Five FAA-charted hot spots** at KMIA (HS 1–HS 5) cover short/confusing taxiway segments, a wrong-runway departure risk between RWY 27 and RWY 30, and multiple runway ends close together with hold lines dependent on the runway in use — brief the current airport diagram, not just this summary (§13).
- **Displaced thresholds on RWY 09 (1,350 ft), RWY 12 (950 ft) and RWY 27 (267 ft)** — always use the published LDA, never the physical runway length, for landing-distance planning.
- **LAHSO combinations are published for this field** given the intersecting-runway geometry — confirm the current LAHSO chart before accepting any hold-short clearance.
- **Hurricane season (Jun–Nov)** is a standing schedule-risk driver — monitor tropical activity well ahead of any planned rotation through South Florida.
- **Fog/low-ceiling events, while infrequent, do occur** (documented ground stops in recent winters) — do not assume this field is fog-immune.
- **Historical precedent for intersection-departure distance errors** (2015 event, RWY 9/Taxiway T1) — always confirm full-length vs. intersection takeoff distance before departure.

---

## 5. Aerodrome category, restrictions & crew qualification

- **Special-airport / category:** Not operator-categorised as a restricted-crew "special airport." The standing crew-briefing items are the **non-parallel/intersecting runway layout with published LAHSO combinations** and the **five FAA-charted hot spots** (§13). 🟧
- **Crew-qualification gate:** No special crew-qualification gate identified in reachable sources; standard low-visibility-operations currency applies given the field's occasional fog/low-ceiling events. 🟧
- **Operating restrictions / bans:** Non-standard **takeoff minimums** are separately published for this field (a dedicated FAA takeoff-minimums chart exists) — verify current figures before any non-standard-minima departure; no RNP AR ban or circling restriction identified. 🟧
- **Overflight / entry / permits:** Standard US domestic/international port-of-entry arrival; no special state permit required beyond normal US customs/immigration formalities. 🟩
- **Operations notes:** Airport operator/ANSP-adjacent authority — **Miami-Dade Aviation Department (MDAD)**; ATC — FAA (Miami Tower/Miami TRACON on the field, Miami ARTCC en route); Aircraft Rescue and Fire Fighting — **Miami-Dade Fire Rescue, Aviation Fire Rescue Division** (stations on-field).

---

## 6. General / hours / services

| Item | Value | Flag |
|---|---|---|
| ATS hours | Tower/Ground/Approach H24 (major Class B hub) | 🟩 |
| AD operating hours | H24 — no formal curfew | 🟩 |
| Night / curfew restrictions | **None formal.** Miami-Dade Aviation Department's Noise Abatement Office issues **voluntary** noise-abatement guidance to airlines (preferred flight-path/procedure guidance); this is not a mandatory movement restriction. | 🟧 |
| RFF category | FAA ARFF Index E (not independently confirmed against a primary record) | 🟧 |
| Fuel | Jet A-1 and AVGAS 100LL, H24 reported; fuel-system operator Allied Aviation (since 2004); multiple into-plane operators (Tursair Fueling since 1958, Aero Fuels Miami 24/7, SUAT Fuels) | 🟩 |
| PCN | Not published / verify | 🟧 |
| Customs | Yes — three terminal-area CBP processing points (see §13); admin CBP port office hours reported Mon–Fri 08:00–17:00 (administrative only — passenger processing follows the international flight schedule, not office hours) | 🟧 |
| Handling / FBO | Multiple third-party ground handlers licensed on field, including **Swissport** (since 1979), **Menzies Aviation** (license effective 2025) and **Worldwide Flight Services (WFS)** (cargo/freighter-focused); specific handler for a K Global operation not confirmed | 🟧 |

---

## 7. Runways & declared distances

| RWY | Dimensions | Surface / PCN | TORA | TODA | ASDA | LDA | Notes |
|---|---|---|---|---|---|---|---|
| 08L | 8,600 × 150 ft (2,621 × 46 m) | Asphalt, lighted; PCN not published / verify 🟧 | 8,600 ft (physical; not independently confirmed) 🟧 | 🟧 verify | 🟧 verify | 8,600 ft | No displaced threshold reported; RNAV (GPS)/RNAV (RNP) only — **no ILS on this runway** |
| 26R | 8,600 × 150 ft (2,621 × 46 m) | Asphalt, lighted | 8,600 ft 🟧 | 🟧 verify | 🟧 verify | 8,600 ft | Reciprocal of 08L; RNAV (GPS) only, no ILS |
| 08R | 10,506 × 200 ft (3,202 × 61 m) | Asphalt, lighted | 10,506 ft 🟧 | 🟧 verify | 🟧 verify | 10,506 ft | No displaced threshold reported; ILS OR LOC RWY 08R and RNAV (RNP) Y RWY 08R published |
| 26L | 10,506 × 200 ft (3,202 × 61 m) | Asphalt, lighted | 10,506 ft 🟧 | 🟧 verify | 🟧 verify | 10,506 ft | ILS OR LOC RWY 26L and RNAV (GPS) Y RWY 26L published; widest runway at the field |
| 09 | 13,016 × 150 ft (3,967 × 46 m) | Asphalt, lighted | 13,016 ft physical 🟧 | 🟧 verify | 🟧 verify | **11,666 ft** (13,016 − 1,350 ft displaced thr) | Longest runway at the field; ILS OR LOC RWY 09 and RNAV (GPS) RWY 09 published; site of a 2015 intersection-takeoff/tail-strike-on-approach-lights event (§4) |
| 27 | 13,016 × 150 ft (3,967 × 46 m) | Asphalt, lighted | 13,016 ft physical 🟧 | 🟧 verify | 🟧 verify | **12,749 ft** (13,016 − 267 ft displaced thr) | ILS OR LOC RWY 27, RNAV (GPS) Y RWY 27, RNAV (RNP) Z RWY 27 published; hot spot involves RWY 27/RWY 30 wrong-runway departure risk (§13) |
| 12 | 9,360 × 150 ft (2,853 × 46 m) | Asphalt, lighted | 9,360 ft physical 🟧 | 🟧 verify | 🟧 verify | **8,410 ft** (9,360 − 950 ft displaced thr) | Crosswind runway, non-parallel to the 08/26 pair; ILS OR LOC RWY 12 and RNAV (RNP) Y RWY 12 published |
| 30 | 9,360 × 150 ft (2,853 × 46 m) | Asphalt, lighted | 9,360 ft physical 🟧 | 🟧 verify | 🟧 verify | 9,360 ft | No displaced threshold reported; ILS OR LOC RWY 30 and RNAV (RNP) Y RWY 30 published; site of a 2022 landing-gear-shimmy runway excursion (§4) |

*Source: OurAirports (runway dimensions, surface, displaced thresholds, retrieved 2026-07-26); FAA d-TPP procedure index via MetarCentral aggregator citing AIRAC cycle 2604 (16 Apr–14 May 2026), retrieved 2026-07-26 — **current-cycle re-verification recommended given the elapsed time to this brief's date.** TORA/TODA/ASDA are not independently confirmed from a primary declared-distance table this pass — treat the physical length as a planning reference only and verify against the current Chart Supplement / 5010 record. All distances in feet; metric conversions approximate.*

---

## 8. Communications

| Service | Callsign | Frequency | Hours | Notes |
|---|---|---|---|---|
| ATIS (D-ATIS) | Miami ATIS | 119.150 (Arrival) / 133.675 (Departure) | H24 (assumed) 🟧 | Split arrival/departure D-ATIS |
| Delivery | Miami Clearance Delivery | 120.350 (also 135.350 pre-taxi clearance reported) | H24 | |
| Ground | Miami Ground | 121.800 (RWY 8L/8R/12/26L/26R) / 127.500 (RWY 9/27/30) / 348.6 | H24 | Split by runway complex — take the assigned frequency |
| Tower | Miami Tower | 118.300 (headings 270–089) / 123.900 (headings 090–269) / 256.9 | H24 | Split by arrival/departure heading, not a simple "north/south" split |
| Approach | Miami Approach (Miami TRACON) | 120.500 (090–269) / 124.850 (270–089) / 322.3 (270–089) / 379.9 (090–269) / 125.75 / 263.025 (270–089) | H24 | Sector/heading-specific — take the assigned frequency |
| Departure | Miami Departure (Miami TRACON) | 119.450 (270–089) / 120.500 (090–269) / 124.850 (270–089) / 125.500 (090–269) / 290.325 / 354.1 / 379.9 | H24 | Sector/heading-specific — take the assigned frequency |
| Centre / FIR | **Miami ARTCC (ZMA)** | Per current AIRAC | H24 | En-route only; no OM C FIR brief yet published for ZMA — name only, no link target exists |

*Source: OurAirports frequency table (retrieved 2026-07-26) cross-checked against a hobby/spotter aggregator (NYCAviation "MIA Radio Frequencies," retrieved 2026-07-26) which shows a more granular heading/runway-split structure — the latter is **not an authoritative source** but is consistent with a large multi-runway Class B field; treat exact current frequencies as 🟧 pending a live-chart cross-check.*

---

## 9. Navaids

| Aid | Ident | Freq | Hours | Notes |
|---|---|---|---|---|
| VORTAC | Dolphin (DHP) | 113.90 | H24 (assumed) | 3.2 NM W of the field — primary area VORTAC |
| VOR-DME | Virginia Key (VKZ) | 117.10 | H24 (assumed) | 7.8 NM ESE |
| NDB | Keyes (MI) | 248 kHz | H24 (assumed) | 5.2 NM E |
| ILS 08R | Not published / verify | Not published / verify | H24 (assumed) | ILS OR LOC RWY 08R published on current AIRAC; ident/frequency not confirmed this pass 🟧 |
| ILS 26L | Not published / verify | Not published / verify | H24 (assumed) | ILS OR LOC RWY 26L published; ident/frequency not confirmed this pass 🟧 |
| ILS 09 | Not published / verify | Not published / verify | H24 (assumed) | ILS OR LOC RWY 09 published; ident/frequency not confirmed this pass 🟧 |
| ILS 27 | Not published / verify | Not published / verify | H24 (assumed) | ILS OR LOC RWY 27 published; ident/frequency not confirmed this pass 🟧 |
| ILS 12 | Not published / verify | Not published / verify | H24 (assumed) | ILS OR LOC RWY 12 published; ident/frequency not confirmed this pass 🟧 |
| ILS 30 | Not published / verify | Not published / verify | H24 (assumed) | ILS OR LOC RWY 30 published; ident/frequency not confirmed this pass 🟧 |

*Source: OurAirports closest-navaids list (retrieved 2026-07-26) for VORTAC/VOR-DME/NDB; FAA d-TPP procedure index via MetarCentral (retrieved 2026-07-26) confirms ILS OR LOC procedures are published on 08R, 26L, 09, 27, 12 and 30 by name — idents/frequencies require a direct chart pull.*

---

## 10. Arrival

- **Transition altitude / level:** Not independently confirmed this pass — US convention is typically 18,000 ft (FL180) nationwide; verify no local override on current chart. 🟧
- **Speed:** Standard 250 KIAS below 10,000 ft MSL (14 CFR 91.117) — confirm no local override.
- **Preferential runway logic:** Wind/traffic driven. South Florida's prevailing easterly trade winds typically favour an East Flow using the 08-series runways; RWY 09/27 and RWY 12/30 are used complementarily for departure capacity and as the crosswind runway when wind has a stronger north–south component (e.g. frontal passages, sea-breeze shifts) — not sourced to a specific published ATC preferential-runway program. 🟧
- **Approaches (names only — verify minima on current AIRAC charts):**

| RWY | Approach | Notes |
|---|---|---|
| 08L | RNAV (GPS) Z RWY 08L; RNAV (RNP) Y RWY 08L | No ILS on this runway |
| 26R | RNAV (GPS) RWY 26R | No ILS on this runway |
| 08R | ILS OR LOC RWY 08R; RNAV (RNP) Y RWY 08R | |
| 26L | ILS OR LOC RWY 26L; RNAV (GPS) Y RWY 26L | |
| 09 | ILS OR LOC RWY 09; RNAV (GPS) RWY 09 | Longest runway; displaced threshold |
| 27 | ILS OR LOC RWY 27; RNAV (GPS) Y RWY 27; RNAV (RNP) Z RWY 27 | Displaced threshold |
| 12 | ILS OR LOC RWY 12; RNAV (RNP) Y RWY 12 | Displaced threshold |
| 30 | ILS OR LOC RWY 30; RNAV (RNP) Y RWY 30 | |

- **STARs (names only):** BNFSH, CSTAL, DVALL, FOWEE, FROGZ, PALMZ, SNDBR, TARPN, VIICE (various transition numbers, RNAV and conventional) — pull the current-AIRAC STAR list and transition names at planning. 🟧
- **LVP:** No dedicated CAT II/III low-visibility procedure confirmed this pass; the field does experience periodic dense-fog/low-ceiling events (documented ground stops) — brief a low-vis contingency regardless. 🟧
- **Missed approach watch-items:** Terrain is not a factor (flat, sea-level); the operative missed-approach concern is re-sequencing into a busy Class B terminal environment with a non-parallel runway complex.

---

## 11. Departure

- **SIDs (names only — fly the charted version):** ALTNN, BNGOS, DORRL, FLMGO, FOLZZ, GLADZ, GWAVA, HURCN, KLADA, LIFRR, MAYNR, "MIAMI NINE," NNOCE (various transition numbers, RNAV departures) — pull the current-AIRAC SID list at planning. 🟧
- **RNP / climb-gradient requirements:** Not independently confirmed this pass; verify RNP/gradient per SID on the current chart. See [`OM E — PBN and RNP Operations`](../../../../../flight-ops/pbn-and-rnp-operations.md).
- **Take-off minima:** A **dedicated non-standard takeoff-minimums chart is published for this field** — do not assume standard minima; verify current figures before any non-standard departure. 🟧
- **Start-up / push-back:** Not independently confirmed this pass — coordinate with the assigned ground handler and Ground control. 🟧
- **ATC slot / CTOT & clearance:** No formal slot-coordination level identified for this field in reachable sources (unlike EU Level 2/3 hubs); standard US flow-management (FAA Air Traffic Control System Command Center ground-delay/ground-stop programs) applies as at any major US Class B field, particularly in convective/hurricane-season weather. 🟧
- **De-icing:** **Effectively NIL** — sub-tropical South Florida climate; no meaningful de-icing season or provisioning is expected at this field.

---

## 12. Noise & Environmental

- **Noise abatement (NAP):** Miami-Dade Aviation Department's **Noise Abatement Office** issues **voluntary** guidance to airlines on flight procedures (ascent/descent angles, arrival/departure routing) over noise-sensitive residential areas surrounding the field; this is **not a mandatory program** and there is no published quota-count or dB-based movement restriction identified. 🟧
- **Night noise / dB limits:** None identified — no formal curfew or night movement cap found in reachable sources. 🟩
- **Engine run-up restrictions:** Not published / verify. 🟧
- **Reverse thrust / idle-reverse policy:** Not published / verify. 🟧

---

## 13. Ground operations

- **Stands for our types:** Widebody-capable gates are distributed across the **Central Terminal (Concourses E, F, G)** and **South Terminal (Concourses H, J)**, with Concourse E's satellite and Concourse J each reported able to accommodate an A380-class aircraft; the **North Terminal (Concourse D)** is single-carrier use. See [Dispatch §3](dispatch.md) for the full terminal breakdown. 🟧
- **Push-back:** Not independently confirmed as mandatory-vs-self-manoeuvre for Code E/F stands — coordinate with the assigned ground handler. 🟧
- **Standard taxi routes:** Confirm with Ground on the day; expect routing that crosses between the field's non-parallel runway complexes given the layout (§3.2).
- **Hot spots / tight taxiways:** 🟥 **Five FAA-charted hot spots are published for KMIA** (current Chart Supplement Southeast, cycle effective 16 Apr–14 May 2026 as retrieved — re-verify against the live cycle): **HS 1** short-taxiway risk; **HS 2** RWY 27/RWY 30 wrong-runway departure risk; **HS 3** short taxiway between runways; **HS 4** multiple runway ends close together with hold lines dependent on the runway in use; **HS 5** short taxiway between RWY 08L and RWY 08R (reported elsewhere as the RWY 08R/RWY 12 taxiway-convergence point near Taxiways M, P and Q). Aircraft with a wingspan greater than 171 ft (e.g. B747, A340, A380) are reported prohibited from Taxiway P east of Taxiway U — verify current restriction. **LAHSO combinations are published for this field** given the intersecting-runway geometry — verify the current LAHSO chart before accepting a hold-short clearance.
- **Follow-me:** Not published / verify. 🟧

---

## 14. Weather & seasonal (durable)

- **Climate / prevailing wind:** Sub-tropical coastal climate; prevailing wind from the east/southeast (trade-wind influence) for much of the year, with a pronounced afternoon sea-breeze effect typical of a peninsula location.
- **Seasonal hazards:** **Atlantic hurricane season (1 June – 30 November)** is the field's defining seasonal hazard, with direct exposure to tropical cyclone tracks and landfall risk across South Florida. Independent of named storms, the warm season brings **near-daily afternoon convective thunderstorm activity** (heavy rain, gusty/shifting winds, lightning) driven by sea-breeze convergence. Dense fog/low-ceiling events, while infrequent, have occurred with documented ground stops in recent winters.
- **Local effects:** Sea-breeze convergence is the dominant local mesoscale effect, driving the daily convective cycle in the warm season; no terrain-driven local wind effects (flat coastal site).

> **Live weather — pull at planning (T-2h):** METAR, TAF, TREND, SIGMET/AIRMET, tropical cyclone advisories (NHC) in season. Not stored here. See also [`OM E — Adverse Weather and Windshear`](../../../../../flight-ops/adverse-weather-and-windshear.md).

---

## 15. NOTAMs

> **Pull at planning (T-2h).** Perishable — not stored here. Check: runway/taxiway closures (esp. around the field's hot-spot junctions and LAHSO-eligible runways), navaid U/S, lighting, obstacle/crane, RFF downgrade, tropical-system/hurricane-related ground-stop or airport-closure NOTAMs in season, GPS/RAIM for RNAV/RNP procedures. Source: official AIS / OFP NOTAM block.

---

## 16. Fuel & alternate planning notes

- **Typical role for us:** Destination / origin within the network — major Latin America/Caribbean gateway and international cargo hub.
- **Nearest suitable alternates:** Company preferred alternates **KFLL, KPBI** `[VAMSYS mirror 2026-07-26]` — confirm suitability, runway/RFF adequacy and current minima per leg.
- **Fuel-uplift notes:** Jet A-1 and AVGAS 100LL reported available H24; fuel system operated by Allied Aviation, with multiple into-plane operators on field. No cold-soak/fuel-freeze consideration relevant to this sub-tropical field. See [`OM E — Fuel Policy`](../../../../../flight-ops/fuel-policy.md).
- **Range/perf flags for our fleet:** Field length/strength non-limiting for any K Global type on any of the four runways. See [`OM B — Fleet Capability Matrix`](../../../../../fleet/capability-matrix.md) for type-by-type range/performance reference.

---

## 17. Fleet-specific notes (optional)

- No field-elevation or field-length performance penalty identified for any K Global type at KMIA. As a major widebody cargo/freighter gateway generally, MIA sees heavy freighter traffic network-wide; for K Global's own freighter type see [`OM B — B77F Dispatch`](../../../../../fleet/b77f/dispatch.md). The operative planning consideration at this field is ground-movement complexity (non-parallel runway layout, hot spots) and hurricane/convective-season schedule risk rather than aircraft performance.

---

## 18. Open items (🟧 — confirm against AIP / current AIRAC)

- **Magnetic variation** — sourced to a 2025 NOAA secular-drift estimate (~7° W), not a primary AIP/5010 figure.
- **Field elevation** — 9 ft (Navigraph/stub seed) vs. 8 ft (OurAirports/FAA aggregate); 1 ft discrepancy, operationally immaterial but not reconciled.
- **TORA/TODA/ASDA declared distances** — only physical runway length and displaced-threshold-derived LDA are confirmed (OurAirports); full declared-distance table not independently obtained this pass.
- **Displaced-threshold rationale** (RWY 09, 12, 27) — not confirmed in reachable sources.
- **ILS sub-category (CAT I/II/III)** — not confirmed; task brief anchor assumed CAT III capability, not verified this pass.
- **ILS idents/frequencies** by runway (08R, 26L, 09, 27, 12, 30) — not confirmed this pass; procedure existence confirmed by name only via the FAA d-TPP index.
- **ATC frequencies** — sourced to OurAirports plus a non-authoritative spotter aggregator; representative but not current-AIRAC-verified.
- **SIDs/STARs (current names/transitions)** — a representative list was obtained; pull the live current-AIRAC procedure list before use.
- **RFF/ARFF Index** — reported as Index E by a secondary trade-press source; not confirmed against a primary FAA 5010 record.
- **PCN, take-off minima exact figures, engine run-up restriction, reverse-thrust policy, follow-me availability, push-back policy** — none confirmed in reachable sources.
- **CBP/customs off-peak and overnight staffing** — administrative port-office hours found (Mon–Fri 08:00–17:00); actual passenger-processing coverage for off-schedule/diverted international arrivals not confirmed.
- **Ground handling agent(s) for a K Global operation specifically** — multiple licensed handlers on field (Swissport, Menzies, WFS); no operation-specific assignment confirmed.
- **Hot spot chart currency** — the FAA hot-spot listing cited was retrieved for AIRAC-adjacent cycle 16 Apr–14 May 2026; re-verify against the live current cycle before relying on it operationally.
- **CAT II/III low-visibility procedure existence and trigger conditions** — not confirmed this pass despite the field's occasional documented fog/low-ceiling events.

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim material (current-AIRAC charts) informs content but is not listed here.*

- OurAirports — https://ourairports.com/airports/KMIA/ , /runways.html , /frequencies.html , /closest-navaids.html (retrieved 2026-07-26). *ARP, elevation, runway dimensions/surface/displaced thresholds, frequencies, nearby navaids.*
- FAA d-TPP procedure index (AIRAC cycle 2604, 16 Apr–14 May 2026) via MetarCentral aggregator — https://metarcentral.com/airport/KMIA/operations , linking directly to https://aeronav.faa.gov/d-tpp/2604/ IAP/STAR/hot-spot/takeoff-minimums/alternate-minimums/LAHSO PDFs (retrieved 2026-07-26). *Approach/SID/STAR procedure names, hot-spot chart, takeoff/alternate minimums chart existence, LAHSO chart existence — names only, no minima transcribed.*
- FAA Southeast Hot Spots chart (cycle 16 Apr–14 May 2026) — https://aeronav.faa.gov/d-tpp/2604/se3hotspot.pdf (retrieved 2026-07-26). *KMIA HS 1–HS 5 descriptions (verbatim short descriptions, names only).*
- Wikipedia — "Miami International Airport" — https://en.wikipedia.org/wiki/Miami_International_Airport (retrieved 2026-07-26). *Terminal/concourse history and structure, cargo facility locations, historical accident list, passenger/cargo statistics.*
- Miami International Airport (MDAD) — Noise Abatement — http://miami-airport.com/noise_abatement.asp (retrieved 2026-07-26). *Voluntary noise-abatement program description.*
- Miami International Airport (MDAD) — International Arrivals / Immigration & Customs map — https://www.miami-airport.com/international-travel-arrivals.asp , https://www.miami-airport.com/map-immigration-and-customs.asp (retrieved 2026-07-26). *Three-terminal CBP processing locations.*
- Miami-Dade Airport Fire Rescue — https://www.miami-airport.com/airport_fire.asp (retrieved 2026-07-26). *ARFF presence on field.*
- Fire Apparatus Magazine — "Miami-Dade (FL) Fire Gets 12th Rosenbauer Panther 6×6 ARFF Truck" — https://www.fireapparatusmagazine.com/fire-apparatus/arff/miami-dade-fl-fire-gets-12th-rosenbauer-panther-6x6-arff-truck/ (retrieved 2026-07-26). *ARFF Index E corroboration (secondary/trade-press source).*
- NYCAviation — "Miami International Airport Radio Frequencies" — https://www.nycaviation.com/spotting-guides/mia/mia-radio-frequencies (retrieved 2026-07-26). *Granular ATC frequency split by heading/runway — hobby aggregator, not authoritative.*
- Allied Aviation — "Miami International Airport (MIA)" — https://alliedaviation.com/locations/MIA/mia.html (retrieved 2026-07-26). *Fuel-system operator since 2004.*
- Tursair Fueling — https://tursair.com/ (retrieved 2026-07-26); Aero Fuels Miami — https://www.aerofuelsmiami.com/ (retrieved 2026-07-26). *Into-plane fuel operators on field.*
- Swissport — "Miami (MIA)" — https://www.swissport.com/en/network/north-america/united-states/mia (retrieved 2026-07-26); Aviation Pros — "Menzies Aviation Awarded Ground Handling License at Miami International Airport" — https://www.aviationpros.com/ground-support-worldwide/ground-handling/press-release/55306975/menzies-aviation-awarded-ground-handling-license-at-miami-international-airport (retrieved 2026-07-26); WFS — "WFS secures contract with Emirates SkyCargo" — https://www.wfs.aero/wfs-secures-contract-with-emirates-skycargo-for-cargo-handling-services-at-miami-international-airport/ (retrieved 2026-07-26). *Ground handler presence on field.*
- Hoodline — "FAA Lifts Brief Ground Stop at Miami International Airport Due to Dense Fog" — https://hoodline.com/2026/01/faa-lifts-brief-ground-stop-at-miami-international-airport-due-to-dense-fog/ (retrieved 2026-07-26). *Documented low-visibility/fog event, ground-stop precedent.*
- CBS News Miami — "I-Team: Collision Course" — https://www.cbsnews.com/miami/news/i-team-collision-course (retrieved 2026-07-26). *Intersecting-runway safety-concern corroboration (South Florida fields incl. KMIA), LAHSO context.*
- NOAA/NCEI-derived magnetic declination estimate for Miami, FL (~7° W, 2025) via public declination calculators (retrieved 2026-07-26). *Secondary estimate, not a primary AIP figure.*

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-26 | Built from FAA sources; K Global fields from live VAMSYS; 4-page pack. |
