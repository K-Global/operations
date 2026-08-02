# VOMM — Chennai Intl · Airport Briefing

**VOMM / MAA** · Chennai (Tirusulam), Tamil Nadu, India · Asia
**Version** v0.1 · **Updated** 2026-07-26 · **Status** Draft — AIP India-derived

> **Read-me:** Planning aid for the sim, not a chart. Static data is drawn from the AAI eAIP India (AIP India, AD 2 VOMM, AIRAC cycle carrying an effective date of 25 May 2017 — the reachable extract; runway/declared-distance geometry is long-lived infrastructure but treat exact current-cycle figures as needing a live-AIRAC cross-check) plus public cross-checks for 2023–2026 developments; approaches/SIDs/STARs are listed **by name only or flagged not-yet-confirmed** — fly the charted current-AIRAC version. Live weather/NOTAMs are pulled at planning (§14/§15). Open 🟧 items are listed in §18. Flag legend 🟥 restriction/hazard · 🟧 caution/unverified · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| ARP (lat/long) | 12°59′42″N / 080°10′32″E (12.9950, 80.1756) `[AAI eAIP India AD 2 VOMM 2.2]` — 272°/527 m from the intersection of RWY 07/25 and 12/30 |
| Field elevation | **52 ft AMSL** (reference temperature 38.0°C) `[AAI eAIP AD 2 VOMM 2.2]` 🟧 (a widely-mirrored public figure gives 54 ft — treat 52 ft as the AIP-sourced figure and the 2 ft gap as within normal survey/rounding tolerance) |
| Mag variation | 🟧 **1.75° W (2010)**, annual change 0.017° E, per the reachable AIP cycle — current-day value not independently re-confirmed against a current AIRAC |
| Time zone | **UTC+5:30 (IST)** — no daylight-saving observed |
| Runway(s) | **07/25** 3,658 × 45 m (asphalt/concrete, PCN 105/F/C/W/T) — primary, ILS-equipped both ends · **12/30** 2,890 m / 2,680 m (asphalt/concrete, variable PCN 85–98) — secondary, **day/VFR operation only**, no approach lighting/ILS |
| Preferential runway | 07/25 is the primary runway pair for scheduled IFR traffic in all conditions; 12/30 supplements it as a **day/VMC-only crossing runway** to raise field capacity — see §3.2/§3.3 |
| Longest LDA | 3,658 m (RWY 07 and RWY 25) |
| Approaches | **ILS CAT I RWY 07 (IMAS) and RWY 25 (ICHN)**; **VOR (DME required) RWY 12 and RWY 30** — day/VMC only; surveillance-radar approach available to all four runway ends `[AAI eAIP AD 2 VOMM 2.22]` |
| RFF category | **CAT 9** (within ATS hours) `[AAI eAIP AD 2 VOMM 2.6]` |
| Control type | **Radar** — Chennai Radar/Approach on the field; Chennai Tower for the CTR; **Chennai (VOMF) ACC** en route — see [Asia airspace brief](../../../../airspace/asia.md) |
| Elevation class | Coastal, near sea-level (52 ft) — **not** hot-and-high; the field's defining threat is **NE-monsoon flooding/cyclone exposure**, not density altitude |
| Special-airport status | 🟥 **Intersecting-runway geometry** (07/25 × 12/30); secondary runway **day/VFR-only**; **no CAT II/III capability** (CAT I only); part of the airfield sits on the **Adyar River floodplain** — see §3/§5 |
| Customs / PoE | **Yes** — H24 `[AAI eAIP AD 2 VOMM 2.3]` |
| K Global category | **L** `[VAMSYS mirror 2026-07-26]` |
| K Global base | **No** `[VAMSYS mirror 2026-07-26]` |
| Company preferred alternates | **[VABB](../vabb/index.md)** (Mumbai, ~557 NM/1,032 km NW), **VCBI** (Colombo, Sri Lanka — ~349 NM/647 km S, plain text per cross-country rule), **[VOBL](../vobl/index.md)** (Bangalore, ~144 NM/267 km W) `[VAMSYS mirror 2026-07-26]` |
| Taxi-in / taxi-out (VAMSYS) | **12 min / 15 min** `[VAMSYS mirror 2026-07-26]` |

---

## 2. Validation summary

| Domain | Flag | Note |
|---|---|---|
| Terrain / CFIT | 🟧 | Flat coastal site, no high terrain — but the AIP's own obstacle chart lists a dense field of trees/poles/hoardings/a water tank up to ~150 ft AMSL close to the RWY 07/25 extended centrelines, and records that the **new ATC tower (55.6 m/182 ft AMSL) penetrates the Obstacle Limitation Surface**. Low-level obstacle discipline, not mountain CFIT. |
| Runway length vs fleet perf | 🟩 | 3,658 m on 07/25 is ample for any K Global widebody; RWY 12 carries a **780 m displaced threshold (LDA 2,110 m)** — non-limiting for typical arrival weights but must be briefed. |
| Approach availability / minima | 🟧 | ILS **CAT I only** on both ends of 07/25 — **no CAT II/III capability at this field**, a genuine reliability constraint in low-vis/heavy-monsoon-rain conditions. 12/30 is VOR(DME)-only, day/VMC. |
| Airspace / traffic / control | 🟧 | Radar-controlled Class D CTR (25 NM ring, FL50 top) around Chennai; 5th-busiest airport in India by movements; **cross-runway (07/25 × 12/30) operations** raise workload/complexity — see §3.2. Chennai (VOMF) additionally controls a large Bay-of-Bengal oceanic sector — background context, not a field-level threat. |
| Weather / seasonal hazard | 🟥 | **NE monsoon (~Oct–Dec)** is Chennai's defining hazard — not the SW monsoon pattern typical of most of India — bringing the Coromandel coast's heaviest rainfall and direct **Bay-of-Bengal cyclone exposure**. Catastrophic flooding closed the airport for a week in Dec 2015 and again (shorter) during Cyclone Michaung, Dec 2023 — the field sits partly on the Adyar River floodplain. |
| Curfew / slots / hours | 🟩 | No night curfew — AD available for **all-weather operations, day and night, all flights**; ATS/customs/fuel/handling/security all H24. Slot-coordination level not confirmed 🟧. |
| RFF category vs our types | 🟩 | CAT 9 — meets or exceeds requirement for any K Global type. |
| Fuel availability | 🟩 | Jet A-1 H24, multiple public-sector suppliers (IOC/HPCL/BPCL) confirmed in the AIP; AVGAS 100LL **not** available into-plane (barrels only, 48 h notice) — irrelevant to the K Global jet fleet. |
| Customs / handling / security | 🟧 | Customs/security H24 confirmed. Ground handling transitioned in **May 2025** after the Government of India revoked Çelebi's security clearance nationwide — **AIASL and Bird Worldwide Flight Services (BWFS)** are the current reported handlers; not independently re-confirmed against a primary AAI notice this pass. |

---

## 3. Threat & Error Management (TEM)

### 3.1 CFIT / Terrain 🟧
VOMM sits at 52 ft AMSL on the flat Tamil Nadu coastal plain — there is **no high close-in terrain**. The threat here is not mountainous CFIT but a **dense, AIP-documented low-level obstacle field** tight against the RWY 07/25 approach/departure paths: groups of trees, hoardings, boundary walls, electric poles and an overhead water tank ranging roughly 45–150 ft AMSL within a few hundred metres to ~1.5 km of both thresholds, plus a lit GP-antenna mast (950 ft from THR 25, offset 340 ft north) and an antenna array 228 m from THR 07. Most tellingly, the AIP itself records that the **new ATC tower (55.6 m/182.42 ft AMSL, 977 m at 221° from the ARP) penetrates the Obstacle Limitation Surface** — a rare direct admission in a primary source. None of this drives a CFIT/MSA emergency, but it sharpens the case for flying the charted vertical profile precisely on any early-climb or go-around over 07/25, especially at night or in reduced visibility. Minimum radar vectoring altitude is **1,800 ft inside 10 NM, 2,300 ft from 10–25 NM** for all sectors `[AAI eAIP AD 2 VOMM 2.22]`.

### 3.2 Airborne conflict / traffic 🟧
Chennai is the **5th-busiest airport in India by passenger traffic and aircraft movements** and the FIR's designated ACC/oceanic hub. The field runs a genuinely unusual geometry for a major hub: a primary runway pair (07/25) **crossed** by a secondary runway (12/30) restricted to day/VMC use. **Cross-runway (dual-runway) operations resumed in January 2018** to lift capacity, and a rapid-exit taxiway added on RWY 07 in May 2023 has since pushed the published capacity toward ~45 movements/hour — meaning simultaneous traffic on both runways, with the associated crossing-clearance/read-back workload, is now routine daytime practice rather than an edge case. Chennai Tower runs the Class D CTR (25 NM radius centred on DVOR MMV, vertical limit FL50); Chennai (VOMF) additionally controls a large **Bay-of-Bengal procedural-oceanic sector** (RNP 4/FANS CPDLC-ADS-C) as FIR-level background context — see the [Asia airspace brief](../../../../airspace/asia.md) — this does not change the terminal-area picture briefed here.

### 3.3 Runway excursion 🟥
**RWY 12 carries a 780 m displaced threshold**, cutting the published LDA to **2,110 m** against a 2,890 m TORA — brief the correct (shorter) landing distance if 12 is ever assigned; it is day/VMC-only in any case. RWY 07/25 (3,658 m, LDA equal to TORA on both ends) is non-limiting for any K Global type. The AIP records **no arresting system** and standard RESA provision (240 × 90 m on 07/25, 240 × 90 m / 90 × 90 m on 12/30). The recurring, field-specific excursion/contamination risk is **standing water on the runway and apron during NE-monsoon downpours and cyclone landfall** (§3.4) — this is a genuine, historically demonstrated hazard at this field, not a generic caution.

### 3.4 Weather threat 🟥
Chennai's defining seasonal hazard is the **North-East (winter) monsoon, active roughly 20 October–7 December**, which — unlike most of India, where the June–September SW monsoon dominates — brings the **Coromandel coast its heaviest rainfall of the year** (Tamil Nadu draws roughly half its annual total from this window; November is climatologically the wettest month). The SW monsoon (Jun–Sep) is comparatively minor here due to the Western Ghats rain-shadow effect but is not zero — expect some convective rain. Layered onto the NE-monsoon window is direct **Bay-of-Bengal tropical-cyclone exposure** (the basin's own season runs roughly Oct–Dec, overlapping the monsoon peak): **Cyclone Michaung (December 2023)** closed the airfield for roughly a day, flooding the runway and forcing ~70 cancellations and 30+ diversions to Bengaluru. More severely, the **December 2015 floods** — 275 mm of rain in 24 hours — closed the airport for a full week (1–6 Dec), submerged the tarmac and stranded 30–35 aircraft; a structural reason this recurs is that **part of the airfield (including the secondary-runway extension) sits on the Adyar River floodplain**, not simply that rainfall is heavy. Build schedule/fuel contingency for the Oct–Dec window specifically, not just "monsoon season" generically. See [`OM E — Adverse Weather and Windshear`](../../../../../flight-ops/adverse-weather-and-windshear.md) and §14.

### 3.5 Operational considerations 🟧
Three durable, field-specific planning constraints: (1) **no CAT II/III capability** — both ILS-equipped runway ends are CAT I only, so a below-CAT-I-minima event (heavy monsoon rain, haze) forces a hold/diversion rather than an autoland recovery, unlike a CAT III-equipped hub; (2) the **cross-runway (07/25 × 12/30) operating pattern** raises ground/airborne workload at a genuinely busy field; and (3) **every stand at VOMM is power-in/push-back only — no power-out capability exists**, and a tow-bar is required for all aircraft types, per the AIP's own remark — a real turnaround-planning item for any of our types operating here (§13). RFF (CAT 9) is adequate for the network.

---

## 4. Cautions & Warnings

- **No CAT II/III ILS at this field** — a below-CAT-I-minima event forces holding/diversion; this is materially different from a CAT III home-hub-style recovery option.
- **RWY 12/30 is day/VFR operation only** — never plan or expect an IFR/night assignment on the secondary runway; RWY 12 additionally carries a 780 m displaced threshold (LDA 2,110 m).
- **Oct–Dec (NE monsoon + Bay-of-Bengal cyclone season) is the airport's highest schedule-risk window** — the field has closed outright for cyclone/flood events twice in the past decade (Dec 2015, one week; Cyclone Michaung, Dec 2023, ~1 day). Build fuel/alternate contingency specifically for this window.
- **All parking stands are power-in/push-back — no power-out capability** — a tow-bar is mandatory for every aircraft type; do not plan a self-manoeuvre departure from stand.
- **AIP-documented obstacle field close to the RWY 07/25 approach/departure paths** (trees, poles, hoardings, an O.H.W. tank to ~150 ft AMSL) — fly the charted vertical profile precisely on early climb/go-around.
- **New ATC tower penetrates the Obstacle Limitation Surface** per the AIP's own remark — a notable, source-confirmed anomaly at this field.
- **Cross-runway operations (07/25 × 12/30) are routine daytime practice**, not an edge case — expect crossing clearances and read-back-heavy ground handling during the day.

---

## 5. Aerodrome category, restrictions & crew qualification

- **Special-airport / category:** Not operator-categorised as a restricted-crew "special airport" in reachable sources; the standing crew-briefing items are the **absence of CAT II/III** and the **intersecting-runway/day-VMC-only-secondary-runway geometry**. 🟧
- **Crew-qualification gate:** No special crew-qualification requirement confirmed; standard CAT I currency applies. Given the lack of CAT III infrastructure, crews should brief the below-minima diversion decision point explicitly for any Oct–Dec sector. 🟧
- **Operating restrictions / bans:** **RWY 12/30 day/VFR operation only** 🟥 — no IFR/night use; no RNP AR ban or circling restriction found in reachable sources — verify current AIRAC. 🟧
- **Overflight / entry / permits:** Standard Indian international arrival; no special state permit beyond routine DGCA/AAI landing formalities identified. 🟩
- **Operations notes:** Airport operator/ANSP — **Airports Authority of India (AAI)**, which also runs its Southern Regional HQ from this field; Chennai (VOMF) is one of India's four FIRs and additionally controls Bay-of-Bengal oceanic airspace.

---

## 6. General / hours / services

| Item | Value | Flag |
|---|---|---|
| ATS hours | H24 | 🟩 |
| AD operating hours | Available for all-weather operations, day and night, all flights `[AAI eAIP AD 2 VOMM 2.3]`; aerodrome-**operator** administrative hours Mon–Fri 0400–1230 UTC only — does not restrict flight ops | 🟩 |
| Night / curfew restrictions | **None found** — no curfew identified in the reachable AIP; RWY 12/30 is the only time-of-day restriction (day/VFR only) | 🟩 |
| RFF category | **CAT 9** (within ATS hours) | 🟩 |
| Fuel | **Jet A-1, H24** (IOC/HPCL/BPCL into-plane); AVGAS 100LL not available into-plane (barrels, 48 h notice) | 🟩 |
| PCN | 07/25: 105/F/C/W/T; 12/30: variable 85–98/…/W/T along the runway length — see §7 | 🟩 |
| Customs | H24 | 🟩 |
| Handling / FBO | Reported (2025) as **AIASL** and **Bird Worldwide Flight Services (BWFS)** following the May 2025 Çelebi security-clearance revocation; the 2017 AIP names Air India, Bhadra International and Cambata Aviation — treat current handler assignment as needing reconfirmation | 🟧 |

---

## 7. Runways & declared distances

| RWY | Dimensions | Surface / PCN | TORA | TODA | ASDA | LDA | Notes |
|---|---|---|---|---|---|---|---|
| 07 | 3,658 × 45 m | Asphalt/concrete, PCN 105/F/C/W/T | 3,658 m | 3,811 m | 3,708 m | 3,658 m | THR elev 45 ft; TDZ elev 41 ft; ILS CAT I (IMAS), approach lighting 900 m LIH |
| 25 | 3,658 × 45 m | Asphalt/concrete, PCN 105/F/C/W/T | 3,658 m | 3,863 m | 3,718 m | 3,658 m | THR elev 52 ft; TDZ elev 52 ft; ILS CAT I (ICHN), approach lighting 510 m LIH |
| 12 | 2,890 m usable (full length 3,010 m strip) | Asphalt/concrete, PCN varies 89–98/…/W/T along length | 2,890 m | 2,890 m | 2,890 m | **2,110 m** | **Threshold displaced 780 m**; day/VFR operation only; no ILS — VOR(DME) approach only; turn pad available |
| 30 | 2,680 m | Asphalt/concrete, PCN varies (see 2.12) | 2,680 m | 2,680 m | 2,680 m | 2,680 m | Day/VFR operation only; no ILS — VOR(DME) approach only |

*Source: AAI eAIP India, AD 2 VOMM 2.12/2.13 (25 May 2017 AIRAC cycle extract). Runway geometry is long-lived infrastructure — treat exact current-cycle PCN/declared-distance figures as needing a live-AIRAC cross-check. All distances in metres.* 🟧

---

## 8. Communications

| Service | Callsign | Frequency | Hours | Notes |
|---|---|---|---|---|
| ATIS | — | 127.450 MHz | H24 | |
| Delivery | *(not separately listed — see Ground)* | — | — | 🟧 not confirmed as a distinct position in the reachable AIP |
| Ground | Chennai Ground | 121.900 MHz | H24 | Surface movement control (SMC) |
| Tower | Chennai Tower | 118.100 MHz | H24 | CTR (Class D, 25 NM/FL50) |
| Approach | Chennai Approach | 124.450 / 127.900 MHz | H24 | Same frequencies also serve Chennai Radar (TAR) |
| Centre / FIR | Chennai (VOMF) — "Chennai Radar"/"Chennai Information" | 118.900 / 125.300 MHz (Radar); 126.150 MHz (Chennai Information, OAC) | H24 | See [Asia airspace brief](../../../../airspace/asia.md) |

*Source: AAI eAIP India, AD 2 VOMM 2.18 (25 May 2017 AIRAC cycle extract). ATC frequency structure is stable long-lived infrastructure — treat exact current-cycle values as needing a live-AIRAC cross-check.* 🟧

---

## 9. Navaids

| Aid | Ident | Freq | Hours | Notes |
|---|---|---|---|---|
| ILS/LOC RWY 07 | IMAS | 110.300 MHz | H24 | CAT I; DME CH40X collocated |
| ILS/LOC RWY 25 | ICHN | 109.700 MHz | H24 | CAT I; DME CH34X collocated |
| Glidepath RWY 07 | IMAS | 335.000 MHz | H24 | |
| Glidepath RWY 25 | ICHN | 333.200 MHz | H24 | |
| Marker (outer) | MA | 228.000 kHz | H24 | |
| Marker (middle, RWY07) | OM07 | 75.000 kHz | H24 | |
| DVOR/DME | MMV | 112.500 MHz (CH72X) | H24 | On-field; CTR/holding reference; coverage 92.6 km |
| VOR/DME | CNI | 114.900 MHz (CH96X) | H24 | |

*Source: AAI eAIP India, AD 2 VOMM 2.19 (25 May 2017 AIRAC cycle extract). Long-lived infrastructure; treat exact current-cycle idents/frequencies as needing a live-AIRAC cross-check.* 🟧

---

## 10. Arrival

- **Transition altitude / level:** TA **4,000 ft**; TL by QNH — not independently confirmed this pass. 🟧
- **Speed:** Standard ICAO 250 KIAS below FL100 assumed — confirm no local override on current chart. 🟧
- **Preferential runway logic:** 07/25 is the default IFR runway pair, wind-dependent between the two ends; RWY 12/30 supplements capacity in day/VMC only, per current cross-runway operating practice (§3.2).
- **Approaches (names only — verify minima on current AIRAC charts):**

| RWY | Approach | IAF | FAF/FAP alt | Notes |
|---|---|---|---|---|
| 07 | ILS CAT I (IMAS); surveillance radar approach | Radar vectors / VOR (MMV) | 2,300 ft (IF) / 1,800 ft (FAF) | OCA (straight-in) 810 ft |
| 25 | ILS CAT I (ICHN); surveillance radar approach | Radar vectors / VOR (MMV) | 2,300 ft (IF) / 1,800 ft (FAF) | OCA (straight-in) 690 ft |
| 12 | VOR (DME required); surveillance radar approach | VOR (MMV) | 2,300 ft (IF) / 1,800 ft (FAF) | Day/VFR only; OCA (straight-in) 680 ft |
| 30 | VOR (DME required); surveillance radar approach | VOR (MMV) | 2,300 ft (IF) / 1,800 ft (FAF) | Day/VFR only; OCA (straight-in) 690 ft |

- **STARs (names only):** Not confirmed in reachable research pass — pull the current-AIRAC STAR list at planning. 🟧
- **LVP:** No CAT II/III capability at this field (§3.5) — the operative mitigation for a below-CAT-I event is holding/diversion, not lower minima. 🟧
- **Missed approach watch-items:** Published missed approach for each runway climbs to 2,300 ft then turns toward the MMV VOR to join the hold at 3,000 ft (1-minute right-hand pattern, inbound track 260°M) — a pointer only, verify the current chart. Terrain is not the driver; the AIP-documented obstacle field close to the extended centrelines (§3.1) is the relevant low-level watch-item.

---

## 11. Departure

- **SIDs (names only — fly the charted version):** Not confirmed in reachable research pass — pull the current-AIRAC SID list at planning. 🟧
- **RNP / climb-gradient requirements:** Not confirmed in reachable sources for VOMM specifically; India has a published national PBN implementation plan (RNAV 5/RNP 1 city-pair structure) — see [`OM E — PBN and RNP Operations`](../../../../../flight-ops/pbn-and-rnp-operations.md). 🟧
- **Take-off minima:** Published per AIP; exact figures not confirmed this pass. 🟧
- **Start-up / push-back:** All stands are **power-in/push-back only** — a tow-bar is mandatory for every aircraft type operating through VOMM (no power-out capability exists at this field); non-scheduled operators requiring overnight parking must obtain prior clearance due to parking-space shortage.
- **ATC slot / CTOT & clearance:** Slot-coordination level not confirmed in reachable sources. 🟧
- **De-icing:** **NIL** — not required at this tropical coastal field `[AAI eAIP AD 2 VOMM 2.3]`.

---

## 12. Noise & Environmental

- **Noise abatement (NAP):** The AIP's sole published noise-abatement instruction is to **minimise the use of reverse thrust after landing**, consistent with safety, given high-intensity runway operations and to reduce disturbance to areas adjacent to the aerodrome `[AAI eAIP AD 2 VOMM 2.21]`.
- **Night noise / dB limits:** Not published/confirmed. 🟧
- **Engine run-up restrictions:** Not confirmed in reachable sources. 🟧
- **Reverse thrust / idle-reverse policy:** Minimise use after landing per the published NAP above; no further detail confirmed. 🟧

---

## 13. Ground operations

- **Stands for our types:** Widebody-capable positions exist across Apron III (12 wide-body bays including **one A380-rated bay**) and the main Apron A (33 bays, 11 wide-body-capable); a 2017-AIP stand (No. 104) is separately rated A380/B747-8; total published stand count is **90 parking bays** (18 in-contact) as of recent reporting. Confirm the current stand-by-code-letter map with handling. 🟧
- **Push-back:** **Mandatory for all stands** — every position at VOMM is power-in/push-back, no power-out capability; a tow-bar is required for every aircraft type. 🟥
- **Standard taxi routes:** Parallel taxiways B (long) and R serve the primary runway (07/25); taxiway N serves the secondary runway (12/30); taxiways P and Q link the two runway systems. Confirm routing with Ground/Apron on the day.
- **Hot spots / tight taxiways:** 🟧 Taxiway **R1**'s junction with taxiway R is available only to code-C aircraft and below (no shoulder provision); taxiway **E** and the apron taxilane between it and certain stands is restricted to code-C aircraft up to 35.9 m wingspan; taxiway **T** is restricted to 29.2 m wingspan or less; taxiway **L1** is restricted to A320-type aircraft. Confirm current code-letter restrictions against our widebody types before planning a route through these taxiways.
- **Follow-me:** Availability not confirmed in reachable sources. 🟧

---

## 14. Weather & seasonal (durable)

- **Climate / prevailing wind:** Tropical wet-and-dry coastal climate on the Coromandel coast of the Bay of Bengal.
- **Seasonal hazards:** 🟥 The **North-East (winter) monsoon (~20 October–7 December)** is Chennai's defining seasonal hazard — bringing the Coromandel coast its heaviest rainfall of the year (roughly half of Tamil Nadu's annual total), unlike most of India where the June–September SW monsoon dominates. This window overlaps the **Bay-of-Bengal tropical-cyclone season (~Oct–Dec)** — direct cyclone landfall risk on this coast. The field has closed outright twice in the past decade for flood/cyclone events (Dec 2015 week-long closure; Cyclone Michaung, Dec 2023). The SW monsoon (Jun–Sep) contributes secondary convective rainfall via the retreating/inter-monsoon pattern but is comparatively minor here due to the Western Ghats rain-shadow effect.
- **Local effects:** Part of the airfield (including the secondary-runway extension) sits on the **Adyar River floodplain** — a structural, not merely meteorological, flood-exposure factor; standing water/waterlogging on the runway and apron is the field's demonstrated failure mode in the Oct–Dec window.

> **Live weather — pull at planning (T-2h):** METAR, TAF, TREND, SIGMET/AIRMET, tropical-cyclone advisories (Bay of Bengal). Not stored here.

---

## 15. NOTAMs

> **Pull at planning (T-2h).** Perishable — not stored here. Check: runway/taxiway closures (especially 12/30 and any flood-related restriction), navaid U/S, ILS CAT I status, lighting, obstacle/crane, RFF downgrade, current cyclone/monsoon-related NOTAMs, GPS/RAIM. Source: AIS / OFP NOTAM block.

---

## 16. Fuel & alternate planning notes

- **Typical role for us:** **Destination / alternate** — K Global category L, not a base field.
- **Nearest suitable alternates:** Company preferred alternates **[VABB](../vabb/index.md)** (Mumbai, ~557 NM), **VCBI** (Colombo, Sri Lanka, ~349 NM — plain ICAO text, cross-country, no link), **[VOBL](../vobl/index.md)** (Bangalore, ~144 NM) `[VAMSYS mirror 2026-07-26]` — confirm suitability, runway/RFF adequacy and current minima per leg; hold extra fuel/alternate margin specifically in the Oct–Dec monsoon/cyclone window given VOMM's own flood-closure history.
- **Fuel-uplift notes:** Jet A-1, H24, multiple public-sector suppliers (IOC/HPCL/BPCL) confirmed in the AIP; no cold-soak/freeze consideration at this tropical field. See [`OM E — Fuel Policy`](../../../../../flight-ops/fuel-policy.md).
- **Range/perf flags for our fleet:** RWY 07/25 (3,658 m) is non-limiting for any K Global type; RWY 12/30 is day/VMC-only and should not be assumed available for a scheduled arrival/departure. See [`OM B — Fleet Capability Matrix`](../../../../../fleet/capability-matrix.md).

---

## 17. Fleet-specific notes (optional)

- Apron III carries **one A380-rated bay**, and a legacy AIP stand (No. 104) is separately rated A380/B747-8-capable — relevant if the K Global A388 is ever scheduled into VOMM; confirm current gate assignment with handling given the field's category-L (non-base) role. See [`OM B — Fleet Capability Matrix`](../../../../../fleet/capability-matrix.md). No field-length or elevation performance penalty applies to any K Global type on the primary runway pair.

---

## 18. Open items (🟧 — confirm against AIP / current AIRAC)

- **Magnetic variation** — sourced to a 2010-epoch AIP figure (1.75° W); current-day value not independently re-confirmed.
- **Field elevation** — AIP gives 52 ft; a widely-mirrored public figure gives 54 ft; treat the 2 ft gap as within normal tolerance but not reconciled to a single source.
- **Declared distances / PCN table, ATC frequencies, navaid idents** — sourced to a 2017 AIRAC-cycle AIP extract; core runway/comms infrastructure is unlikely to have changed materially, but exact current-cycle figures are not re-verified.
- **Transition level, take-off minima, exact LVP/below-minima procedure** — not confirmed in reachable sources.
- **SIDs/STARs (current names)** — not obtained in this research pass; pull the live current-AIRAC procedure list before use.
- **Slot-coordination level** — not confirmed (IATA Level 1/2/3 status unclear from reachable sources).
- **Current ground-handling agent assignment** — reported as AIASL/BWFS following the May 2025 Çelebi security-clearance revocation, not independently re-confirmed against a primary AAI notice.
- **Current stand-by-code-letter map** — the 90-bay/18-in-contact figure and widebody-cluster description are drawn from a mix of a 2017 AIP extract and recent secondary reporting; not reconciled to a single current source.
- **Night noise limits, engine run-up restrictions, follow-me availability** — none confirmed in reachable sources.

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim material (current-AIRAC charts) informs content but is not listed here.*

- **Airports Authority of India — eAIP India, AD 2 VOMM (Chennai / Domestic)**, AIRAC cycle carrying an effective date of 25 May 2017 — https://aim-india.aai.aero/eaip-v2//25-05-2017/eAIP/EC-AD-2.1VOMM-en-GB.pdf (retrieved 2026-07-26). *Primary source: ARP, elevation, mag var, runway geometry/declared distances/PCN, lighting, navaids, comms, RFF category, CTR/airspace, obstacles, stands/taxiways, surveillance-radar-approach and missed-approach data, noise-abatement instruction.*
- OurAirports — https://ourairports.com/airports/VOMM/ (retrieved 2026-07-26). *ARP/elevation cross-check.*
- Wikipedia — "Chennai International Airport" — https://en.wikipedia.org/wiki/Chennai_International_Airport (retrieved 2026-07-26). *Runway/apron/terminal current-state corroboration, CAT-I-only ILS confirmation, cross-runway-operations history, Chennai FIR oceanic scope, 2015 flood/Cyclone-Michaung history.*
- SkyVector — https://skyvector.com/airport/VOMM/Chennai-International-Airport (retrieved 2026-07-26). *Cross-check.*
- Aviation24.be / CNN / BBC / FloodList — 2015 Chennai floods airport-closure reporting (retrieved 2026-07-26), incl. https://www.cnn.com/2015/12/03/asia/india-floods-chennai/index.html and https://feeds.bbci.co.uk/news/world-asia-india-35024115.
- AeroTime / airlive.net / USA Today (US News) — Cyclone Michaung, December 2023, runway-flooding and closure reporting (retrieved 2026-07-26), incl. https://www.aerotime.aero/articles/chennai-airport-operations-grounded-due-to-cyclone-michaung-runway-flooded.
- FL360aero (X/Twitter) — resumption of dual-runway (cross-runway) operations at VOMM, and current runway-length figures — https://x.com/fl360aero/status/1827698683388870761 (retrieved 2026-07-26). *Network/enthusiast source — operational corroboration only.*
- dtnext.in — Chennai Airport ILS replacement (Guindy/Pallavaram ends, 2024) and Phase-2 terminal-expansion timeline reporting (retrieved 2026-07-26), incl. https://www.dtnext.in/news/chennai/chennai-airport-installs-new-instrument-landing-system-to-ensure-safe-landings-823930.
- ETV Bharat / Deccan Herald — Çelebi Airport Services India security-clearance revocation (May 2025) and AIASL/BWFS onboarding at affected airports including Chennai (retrieved 2026-07-26), incl. https://www.etvbharat.com/en/!bharat/aiasl-and-other-ground-handling-firms-start-onboarding-celebi-staff-at-airports-enn25051700660.
- Chennai Weather-Raja / Deccan Herald / Outlook India — NE-monsoon window and Tamil Nadu coastal rainfall-share corroboration (retrieved 2026-07-26).

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-26 | Built from AIP India (AAI); K Global fields from live VAMSYS; 4-page pack. |
