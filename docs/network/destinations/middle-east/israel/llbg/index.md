# LLBG — Ben Gurion · Airport Briefing

**LLBG / TLV** · Tel Aviv (Lod), Israel · Middle East
**Version** v0.1 · **Updated** 2026-07-26 · **Status** Draft

> **Read-me:** Planning aid for X-Plane 11, not a chart. Static data is drawn from the Israel CAAI eAIP (AIP Israel, AD 2 LLBG) plus public cross-check sources; approaches/SIDs/STARs are listed **by name only** — fly the charted current-AIRAC version. Live weather/NOTAMs are pulled at planning (§14/§15). Open 🟧 items are listed in §18. Flag legend 🟥 restriction/hazard · 🟧 caution/unverified · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| ARP (lat/long) | 32°00′34″N / 034°53′08″E (32.00944, 34.88556) `[Israel AIP AD 2 LLBG 2.2]` — matches `[Navigraph navdata]` seed (32.00945, 34.88556) |
| Field elevation | **134 ft AMSL** (reference temperature 31.9°C, August) `[Israel AIP AD 2 LLBG 2.2]`; 🟧 OurAirports/SkyVector list 135 ft — minor 1 ft tier-4 variance |
| Mag variation | **5° E (2019), 0.08°/yr increasing** `[Israel AIP AD 2 LLBG 2.2]` |
| Time zone | UTC+2 (IST) / UTC+3 (IDT, DST observed, approx. Mar–Oct) 🟧 exact DST dates not re-confirmed this pass |
| Runway(s) | **03/21** 2,772 × 60 m · **08/26** 4,062 × 45 m (THR 26 displaced 600 m) · **12/30** 3,112 × 45 m (THR 30 displaced 75 m) — all asphalt `[Israel AIP AD 2 LLBG 2.12]` |
| Preferential runway | **Arrivals:** RWY 12 preferred (tailwind ≤10 kt dry / ≤5 kt wet); RWY 30 or 21 preferred at high traffic volume. **Departures:** RWY 26 preferred (tailwind ≤5 kt) `[Israel AIP AD 2 LLBG 2.22]` |
| Longest LDA | **3,580 m** (RWY 08, declared) — longest physical pavement is 08/26 at 4,062 m |
| Approaches | **ILS CAT I** on RWY 08/12/21/26/30; **LOC** RWY 21 (non-precision backup); **RNP (RNAV)** RWY 08, RWY 12, RWY 21 (RNP X & RNP Y); **RWY 03 has no published instrument approach** — verify current AIRAC 🟧 |
| RFF category | **CAT 9** (within AD operating hours) `[Israel AIP AD 2 LLBG 2.6]` 🟩 |
| Control type | **Radar** — Ben-Gurion Approach/TMA + Tower, vectoring per the Surveillance Minimum Altitude Chart (SMAC) `[Israel AIP AD 2 LLBG 2.22]` |
| Elevation class | Near sea-level (134 ft) — **not** hot-and-high; no density-altitude performance driver |
| Special-airport status | Not operator-categorised as "special" in reachable sources. Standing crew-briefing items: **no CAT III backup** (ILS is CAT I only, see §5), **Taxilane H wingspan-restricted to 36 m**, and the **standing regional airspace-status caution** (§3.2/§4) 🟧 |
| Customs / PoE | **Yes — H24** `[Israel AIP AD 2 LLBG 2.3]` |
| K Global category | **L** `[VAMSYS mirror 2026-07-26]` |
| K Global base | **No** `[VAMSYS mirror 2026-07-26]` |
| Company preferred alternates | **LCLK** (Larnaca, Cyprus) · **LGAV** (Athens, Greece) · **OLBA** (Beirut, Lebanon) `[VAMSYS mirror 2026-07-26]` — all cross-country, plan/brief individually |
| Taxi-in / taxi-out (VAMSYS) | **12 min / 15 min** `[VAMSYS mirror 2026-07-26]` |
| FIR | **Tel Aviv (LLLL)** — see [Middle East airspace brief](../../../../airspace/middle-east.md) |

---

## 2. Validation summary

| Domain | Flag | Note |
|---|---|---|
| Terrain / CFIT | 🟩 | Flat coastal plain at 134 ft; no close-in high terrain on any arrival/departure/missed-approach path. Bird activity in the airport vicinity is AIP-flagged and is the field's real low-level hazard — see §3.1/§4. |
| Runway length vs fleet perf | 🟩 | All three runway pairs are ample for a K Global Category L operation; no field-length limitation identified. |
| Approach availability / minima | 🟧 | ILS is **CAT I only** on every equipped runway — **no CAT III backup exists at this field**, unlike some network hubs. RWY 03 carries no published instrument approach at all. Confirm current-AIRAC minima before every approach. |
| Airspace / traffic / control | 🟥 | **Standing caution:** Tel Aviv (LLLL) FIR and surrounding regional airspace status is variable — see §3.2 and §4. Re-check NOTAMs and state bulletins before every flight. |
| Weather / seasonal hazard | 🟧 | Mediterranean climate; occasional khamsin/sharav dust-heat events; LVP (RVR <800 m / vis <1200 m) is a defined but infrequent trigger with no CAT III fallback — see §3.4/§14. |
| Curfew / slots / hours | 🟥 | Fully coordinated slot regime; RWY 30 closed for takeoff 23:00–06:00 LT; other runways closed for takeoff roughly 01:40–05:00/05:30 LT; **field closed for landings daily 01:00–02:00 LT**; annual Yom Kippur closure — see §6/§12. |
| RFF category vs our types | 🟩 | CAT 9 is ample for any K Global Category L type. |
| Fuel availability | 🟩 | Jet A-1 and 100LL, H24, via hydrant (aprons N/J/L/T3) and bowser `[Israel AIP AD 2 LLBG 2.4]`. |
| Customs / handling / security | 🟧 | Customs/immigration confirmed H24. Expect enhanced security screening for departing traffic as standard at Israeli airports — build pre-departure buffer. Named ground handlers are tier-4 sourced only, not AIP-confirmed. |

---

## 3. Threat & Error Management (TEM)

### 3.1 CFIT / Terrain 🟩
LLBG sits at 134 ft AMSL on the flat Israeli coastal plain — there is **no close-in high terrain** relevant to any arrival, departure or missed-approach path; the Judean Hills lie well inland and are not a factor for standard instrument procedures. The one recurring low-level hazard the AIP itself flags is **bird concentration in the vicinity of the airport** (AD 2.23, cross-referenced to dedicated bird-hazard charts) — brief a standard bird-strike lookout on the initial climb and final approach segments. 🟧

### 3.2 Airborne conflict / traffic 🟥
**Standing caution — check before every flight.** Tel Aviv (LLLL) FIR airspace status, together with the status of surrounding regional airspace, is subject to **periodic NOTAM-driven restrictions, temporary closures and reduced availability** given the wider security environment in the Eastern Mediterranean / Levant. **GNSS jamming/interference has been reported in the area.** This is a live, perishable picture — it is **not** stored here. Before every flight, crews must check **current NOTAMs, state airspace-status bulletins, and any applicable EASA Conflict Zone Information Bulletin (CZIB) / Information Note**. See the [Middle East airspace brief](../../../../airspace/middle-east.md) for the regional conflict-zone/GNSS-interference picture (that brief focuses on the wider Gulf/Arab mosaic rather than the Tel Aviv FIR specifically, but documents the same pervasive regional GNSS-jamming pattern). Beyond the standing caution, the Ben-Gurion CTR/TMA is a **dense, radar-controlled terminal environment** with mixed civil/state traffic; fly the assigned SMAC-based vectors and report promptly as required (§8, §11).

### 3.3 Runway excursion 🟧
**RWY 26 has a 600 m displaced threshold** (LDA 3,462 m vs 4,062 m physical) and **RWY 30 has a 75 m displaced threshold** (LDA 3,032 m vs 3,112 m physical) `[Israel AIP AD 2 LLBG 2.12/2.13]` — brief the correct usable landing distance, not the full pavement length. Preferential-runway tailwind limits are explicit and tight: **RWY 12 arrivals ≤10 kt tailwind dry / ≤5 kt wet; RWY 26 departures ≤5 kt tailwind** — a wind shift near these limits is a real runway-assignment trigger. RWY 08's TORA (3,600 m) is **noise-abatement-limited**, shorter than the 4,062 m physical/TODA/ASDA figures — do not assume the full pavement is available for takeoff distance on RWY 08.

### 3.4 Weather threat 🟧
Mediterranean coastal climate — hot dry summers, mild wet winters. The airport's own AIP defines a **Low Visibility Procedure (LVP) trigger at RVR <800 m or visibility <1200 m**, with RWY 21 as the preferred LVP arrival runway and RWY 26 the preferred LVP departure/emergency-arrival runway `[Israel AIP AD 2 LLBG 2.22]` — but **no CAT III capability backs this up** (§3.2/§5), so an LVP event caps the field at CAT I minima with associated delay/diversion risk. Occasional **khamsin/sharav** events (hot, dry, dust-laden easterly wind, mainly spring/autumn) can reduce visibility and add turbulence/crosswind considerations. See §14.

### 3.5 Operational considerations 🟥
Plan around four durable constraints: (1) the **standing regional airspace-status caution** (§3.2) — re-check NOTAMs/bulletins before every flight, and treat the preferred alternates (§16) as needing the same re-check, since they sit across FIR/state boundaries; (2) the **fully coordinated slot regime** (48 h advance Mon–Thu / 72 h Fri–Sun) `[Israel AIP AD 2 LLBG 2.20]`; (3) the **layered night-time takeoff/landing restrictions** (§6/§12) rather than a single hard curfew; and (4) the **absence of CAT III** — an LVP event is a real diversion driver with no local low-vis fallback. RFF, fuel and navaid infrastructure are all first-tier and confirmed; the §18 open items are mostly currency/administrative confirmations.

---

## 4. Cautions & Warnings

- 🟥 **Standing caution — regional airspace status:** Tel Aviv (LLLL) FIR and surrounding airspace status is variable and NOTAM-driven given the wider Eastern Mediterranean/Levant security environment; **GNSS jamming/interference has been reported in the area.** Check current NOTAMs, state airspace-status bulletins, and any applicable EASA CZIB/Information Note **before every flight** — see §3.2.
- **No CAT III backup** — ILS is CAT I only on every equipped runway; an LVP event (RVR <800 m / vis <1200 m) caps the field at CAT I minima with real delay/diversion exposure.
- **Displaced thresholds** — RWY 26 (600 m) and RWY 30 (75 m); brief the declared LDA, not the physical runway length.
- **Bird concentration in the airport vicinity** is AIP-flagged (AD 2.23) — maintain a bird-strike lookout on climb-out and final approach.
- **RWY 03 has no published instrument approach** — do not plan it as an IFR arrival runway; verify current AIRAC.
- **Taxilane H is wingspan-restricted to 36 m** — a real constraint if a larger-than-Category-L type is ever routed through this stand area (§13/§17).
- **Layered night-time movement restrictions** rather than a single hard curfew — RWY 30 closed for takeoff 23:00–06:00 LT, other runways closed for takeoff roughly 01:40–05:00/05:30 LT, and the field is **closed for all landings daily 01:00–02:00 LT** — build schedule buffer (§6/§12).
- **Fully coordinated slot regime** — schedule integrity matters; confirm slot status before planning a rotation.

---

## 5. Aerodrome category, restrictions & crew qualification

- **Special-airport / category:** Not categorised as a restricted-crew "special airport" in reachable sources. The standing crew-briefing items are: the regional airspace-status caution (§3.2/§4), the **CAT I-only ILS environment** (no CAT III fallback), and the **Taxilane H 36 m wingspan restriction**. 🟧
- **Crew-qualification gate:** No CAT II/III currency requirement applies (no CAT III infrastructure exists at the field) — standard CAT I instrument-approach currency suffices. Confirm no additional operator-specific gate applies. 🟧
- **Operating restrictions / bans:** No RNP AR-not-authorised or circling-not-authorised note found in reachable sources; RWY 03 has no published instrument approach (§1). Layered night-time takeoff/landing restrictions apply (§6/§12) rather than a single hard curfew. 🟧
- **Overflight / entry / permits:** Standard international arrival; no special state entry permit found for scheduled commercial service. Given §3.2, confirm no temporary overflight/entry NOTAM restriction applies on the day. 🟧
- **Operations notes:** Aerodrome administration and ANSP — **Israel Airports Authority (IAA)**. AIS/ARO/MET/ATS/Fuelling/Handling/Security/Customs all operate **H24** `[Israel AIP AD 2 LLBG 2.3]`. De-icing facilities are **NIL** (consistent with the warm climate — not an operational gap).

---

## 6. General / hours / services

| Item | Value | Flag |
|---|---|---|
| ATS hours | H24 | 🟩 |
| AD operating hours | H24 for administration/customs/fuelling/handling/security; movement subject to the layered night restrictions below | 🟧 |
| Night / curfew restrictions | RWY 30 closed for takeoff **23:00–06:00 LT** (unless approved); other runways closed for takeoff **≈01:40–05:00 LT (summer) / 01:40–05:30 LT (winter)**; field **closed for all landings daily 01:00–02:00 LT**; annual **Yom Kippur** closure (last ARR/DEP 14:00 LT on the eve; first ARR 22:30 LT / first DEP 23:30 LT on the day) `[Israel AIP AD 2 LLBG 2.20/2.21]` | 🟥 |
| RFF category | CAT 9 | 🟩 |
| Fuel | Jet A-1 & 100LL, H24, hydrant (aprons N/J/L/T3) + bowser `[Israel AIP AD 2 LLBG 2.4]` | 🟩 |
| PCN | Varies by apron/taxiway; representative figures: taxiways K/M/Y/L/E/R/N 90/F/C/W/T; apron N 99–110/F–R/C/B/W/T; full detail is apron-specific — see AD 2.8 `[Israel AIP AD 2 LLBG 2.8]` | 🟧 |
| Customs | H24 `[Israel AIP AD 2 LLBG 2.3]` | 🟩 |
| Handling / FBO | IAA is the aerodrome administration; three third-party ground handlers are reported at the field (tier-4 sourced) — see [Dispatch §5](dispatch.md) | 🟧 |

---

## 7. Runways & declared distances

| RWY | Dimensions | Surface / PCN | TORA | TODA | ASDA | LDA | Notes |
|---|---|---|---|---|---|---|---|
| 03 | 2,772 × 60 m | Asphalt / 90/F/C/W/T | 2,772 m | 2,922 m | 2,772 m | 2,772 m | **No published instrument approach** — verify current AIRAC |
| 21 | 2,772 × 60 m | Asphalt / 90/F/C/W/T | 2,772 m | 2,922 m | 2,772 m | 2,772 m | ILS CAT I + LOC + RNP X/RNP Y; preferred LVP arrival runway |
| 08 | 4,062 × 45 m | Asphalt / 90/F/C/X/T | 3,600 m | 4,120 m | 4,000 m | 3,580 m | TORA reduced for Noise Abatement Departure Procedure; RESA is part of the runway |
| 26 | 4,062 × 45 m | Asphalt / 90/F/C/X/T | 4,062 m | 4,212 m | 4,062 m | 3,462 m | **THR displaced 600 m**; preferred departure runway (tailwind ≤5 kt); preferred LVP departure/emergency-arrival runway |
| 12 | 3,112 × 45 m | Asphalt / 90/F/C/W/T | 3,112 m | 3,262 m | 3,172 m | 3,112 m | Preferred arrival runway (tailwind ≤10 kt dry / ≤5 kt wet) |
| 30 | 3,112 × 45 m | Asphalt / 90/F/C/W/T | 3,112 m | 3,262 m | 3,112 m | 3,032 m | **THR displaced 75 m**; closed for takeoff 23:00–06:00 LT unless approved |

*Source: Israel CAAI eAIP, AD 2 LLBG 2.12/2.13, AIRAC cycle effective 2023-06-15 (retrieved 2026-07-26) — 🟧 not independently re-confirmed against the current-day AIRAC cycle; core runway geometry is long-lived and unlikely to have changed materially. Displaced-threshold figures cross-checked against OurAirports/SkyVector (600 m/1,969 ft on RWY 26 and 75 m/246 ft on RWY 30 — consistent within normal rounding). All distances in metres.*

---

## 8. Communications

| Service | Callsign | Frequency | Hours | Notes |
|---|---|---|---|---|
| ATIS (Arrival) | Ben-Gurion Arrival Information | 132.500 | H24 | Digital ATIS via ACARS |
| ATIS (Departure) | Ben-Gurion Departure Information | 132.800 | H24 | Digital ATIS via ACARS |
| Clearance (CPT) | Ben-Gurion Clearance | As published by ATIS (121.550) | H24 | DCL (datalink clearance) available |
| Ground (East) | Ben-Gurion Ground | 121.950 | H24 | East of RWY 21 |
| Ground (West) | Ben-Gurion Ground | 121.750 | H24 | West of RWY 21 |
| Tower | Ben-Gurion Tower / Tower Departure | 134.600 | H24 | Primary |
| Tower (Arrival) | Ben-Gurion Tower Arrival | 132.100 | When landing RWY 21 | |
| Approach | Ben-Gurion Approach / Departure | 120.500 | H24 | Primary / departure frequency |
| Approach (Arrival) | Ben-Gurion Arrival | 131.100 | By ATC | |
| TMA | Ben-Gurion TMA | 119.500 | H24 | Primary |
| VOLMET | — | 126.800 | — | Also by telephone, +972-3-9730699 |
| Emergency | — | 121.500 | H24 | |
| Secondary | Ben-Gurion | 119.350 | — | As published by ATIS |
| Standby (ATC-assigned only) | Ben-Gurion | 118.750 / 119.350 / 119.550 / 122.300 / 133.600 / 121.975 | — | |
| Centre / FIR | Tel Aviv (LLLL) FIR | Per current AIRAC | H24 | See [Middle East airspace brief](../../../../airspace/middle-east.md) |

*Source: Israel CAAI eAIP, AD 2 LLBG 2.18, AIRAC cycle effective 2023-06-15 (retrieved 2026-07-26). 🟧 Treat exact current frequencies as pending a live-AIRAC cross-check, though the overall comms structure is stable infrastructure.*

---

## 9. Navaids

| Aid | Ident | Freq | Hours | Notes |
|---|---|---|---|---|
| DVOR/DME | BGN | 113.500 (CH 82X) | H24 | On field |
| ILS/LOC 08 | BC | 110.900 | H24 | CAT I; serves RWY 08 |
| GP/DME 08 | — | 330.800 (CH 46X) | H24 | |
| ILS/LOC 12 | BG | 110.300 | H24 | CAT I; serves RWY 12 |
| GP/DME 12 | — | 335.000 (CH 40X) | H24 | |
| ILS/LOC 21 | BN | 109.700 | H24 | CAT I; serves RWY 21; LOC-only backup also published |
| GP/DME 21 | — | 333.200 (CH 34X) | H24 | |
| ILS/LOC 26 | BA | 108.700 | H24 | CAT I; serves RWY 26 |
| GP/DME 26 | — | 330.500 (CH 24X) | H24 | |
| ILS/LOC 30 | BD | 111.900 | H24 | CAT I; serves RWY 30 |
| GP/DME 30 | — | 331.100 (CH 56X) | H24 | |

*Source: Israel CAAI eAIP, AD 2 LLBG 2.19 (retrieved 2026-07-26). All ILS installations are CAT I — no CAT III found in any reachable source (see §5). 🟧 A tier-4 pilot report (SkyVector, 2021) notes all legacy Israeli NDBs have been decommissioned — not independently AIP-confirmed this pass.*

---

## 10. Arrival

- **Transition altitude / level:** Referenced to AIP ENR 1.4 — not reached in this research pass; confirm current chart. 🟧
- **Speed:** Standard ICAO 250 KIAS below FL100 assumed — confirm no local override on current chart. 🟧
- **Preferential runway logic:** RWY 12 preferred (tailwind ≤10 kt dry / ≤5 kt wet); RWY 30 or 21 preferred at high traffic volume `[Israel AIP AD 2 LLBG 2.22]`.
- **Approaches (names only — verify minima on current AIRAC charts):**

| RWY | Approach | IAF | FAF/FAP alt | Notes |
|---|---|---|---|---|
| 08 | ILS CAT I (BC); RNP (RNAV) | Per current chart | Per current chart | |
| 12 | ILS CAT I (BG); RNP (RNAV) | Per current chart | Per current chart | |
| 21 | ILS CAT I (BN); LOC (BN, backup); RNP X; RNP Y | Per current chart | Per current chart | Preferred LVP arrival runway |
| 26 | ILS CAT I (BA) | Per current chart | Per current chart | Preferred LVP departure/emergency-arrival runway |
| 30 | ILS CAT I (BD) | Per current chart | Per current chart | Closed for takeoff 23:00–06:00 LT |
| 03 | — none published — | — | — | **Never plan as an IFR arrival runway** |

- **STARs (names only):** PURLA1 (RWY 08) · GODED2, NINET1 (RWY 12/30) · TOMAL 2B, SALAM 2B (RWY 12) · AMMOS 1A/1B, AMMIT 1A, SALAM 2A (RWY 21) · AMMOS 1C/1D, AMMIT 1C, SALAM 2C (RWY 26) · AMMOS 1E/1F, AMMIT 1E, SALAM 3E (RWY 30) — verify current AIRAC.
- **LVP:** Triggered at RVR <800 m or visibility <1200 m; preferred configuration is RWY 21 arrivals / RWY 26 departures; RWY 26 is the preferred arrival runway in an LVP emergency. No CAT III backup exists (§3.2/§5) — treat an LVP event as a real delay/diversion driver.
- **Missed approach watch-items:** Not terrain-driven (flat coastal plain). ATC directs the missed-approach sequence per current instructions; fly the published missed approach and rejoin per ATC.

---

## 11. Departure

- **SIDs (names only — fly the charted version):** SALAM, TOMAL (J10) — southbound and toward Amman FIR; SUVAS — westbound; DAFNA/MERVA — northwest-bound (time-window assigned, EOBT-based, alternating weekly); IVONA, RAPIV — RWY 08-specific; NAT — RWY 03/08/12/21; ORLEV, PIDET, RIPUD — ATC-assigned only. Verify current AIRAC before use.
- **RNP / climb-gradient requirements:** Not detailed in the reachable extract — verify RNP/gradient per SID on the current chart. See [`OM E — PBN and RNP Operations`](../../../../../flight-ops/pbn-and-rnp-operations.md). 🟧
- **Take-off minima:** Published per AIP (category-dependent, RVR/lighting-based) — exact figures not reproduced here; verify current AIRAC chart. 🟧
- **Start-up / push-back:** Engine start during push-back from all aprons except V1/V2 (assigned start-up position only); engine start while connected to the gate is **prohibited** at Terminal 3 Concourses B/C/D/E; cross-bleed start approved only at the release point; push-back requires specific ATC approval and the aircraft is expected to vacate the stand within 2 minutes of approval `[Israel AIP AD 2 LLBG 2.20]`.
- **ATC slot / CTOT & clearance:** **Fully coordinated slot regime** — applications required 48 h in advance (Mon–Thu) or 72 h in advance (Fri–Sun); clearance-prior-to-taxi (CPT) via DCL or voice, contacted 15 min before start-up; pushback/taxi clearance issued not later than 10 min prior to CTOT `[Israel AIP AD 2 LLBG 2.20]`. 🟧 Exact IATA slot-coordination level not stated in the reachable extract.
- **De-icing:** **NIL** — no de-icing facilities at the field, consistent with the warm climate `[Israel AIP AD 2 LLBG 2.3/2.4]`.

---

## 12. Noise & Environmental

- **Noise abatement (NAP):** **NADP-1** applies to all jet aircraft irrespective of weight — thrust/power reduction at or above a published minimum altitude (not below 950 ft QNH) with flap/slat retraction delayed until a published maximum altitude (3,150 ft QNH, or 3,000 ft QNH if ATC-restricted) `[Israel AIP AD 2 LLBG 2.21]`. Fly the current-chart SID with this profile; the SID routings themselves are also designed to minimise overflight of densely populated areas.
- **Night noise / dB limits:** A network of Noise Monitoring Terminals (NMT) around the field enforces maximum departure noise levels (varying by location, roughly 85–93 dB(A) depending on aircraft MTOM and NMT position) `[Israel AIP AD 2 LLBG 2.21]`; a stricter "reduced noise level" (−3 dB(A)) applies for takeoffs in the 05:00/05:30–06:00 LT shoulder window.
- **Engine run-up restrictions:** Maintenance run-ups **not permitted 23:00–05:00 LT** `[Israel AIP AD 2 LLBG 2.21]`.
- **Reverse thrust / idle-reverse policy:** Reverse thrust other than idle **not to be used 23:00–06:00 LT**, except for safety reasons `[Israel AIP AD 2 LLBG 2.21]`.

---

## 13. Ground operations

- **Stands for our types:** Category L aircraft are accommodated across the main aprons (N, J, L, and Terminal 3 aprons); Terminal 3 concourse stands use an Advanced Visual Docking Guidance System (AVDGS), other stands use follow-me/marshaller guidance `[Israel AIP AD 2 LLBG 2.20]`. 🟧
- **Push-back:** Mandatory ATC approval from all stands; self-manoeuvre not indicated. Engine start during push-back except at V1/V2 and T3 Concourses B/C/D/E (§11).
- **Standard taxi routes:** Named rapid-exit taxiways by landing runway — RWY 26 via W4; RWY 08 via (rapid-exit) W3; RWY 30 via (rapid-exit) Z onto K; RWY 12 via (rapid-exit) Y onto M; RWY 21 via E3 onto M (to Terminal 3/aprons X/H) or T3 onto K (to aprons J/L/N/V) `[Israel AIP AD 2 LLBG 2.20]`.
- **Hot spots / tight taxiways:** 🟥 **Taxilane H is wingspan-restricted to a maximum of 36 m** `[Israel AIP AD 2 LLBG 2.20]` — a real constraint for any larger-than-Category-L type ever routed through that stand area; not limiting for a standard Category L operation.
- **Follow-me:** Available on request or by ATC assignment; **not provided when visibility is below 100 m** `[Israel AIP AD 2 LLBG 2.22]`.

---

## 14. Weather & seasonal (durable)

- **Climate / prevailing wind:** Mediterranean coastal climate — hot, dry summers and mild, wetter winters, consistent with the RWY 26/12 preferential-runway logic (§1/§3.3).
- **Seasonal hazards:** Occasional **khamsin/sharav** events (hot, dry, dust-laden easterly wind, mainly spring/autumn) can reduce visibility and add gusty/crosswind considerations. LVP conditions (RVR <800 m/vis <1200 m) occur but are infrequent for a coastal Mediterranean field; no CAT III backup exists (§3.4/§5).
- **Local effects:** Coastal humidity; no significant terrain-driven local wind effect at this site.

> **Live weather — pull at planning (T-2h):** METAR, TAF, TREND, SIGMET/AIRMET. Not stored here.

---

## 15. NOTAMs

> **Pull at planning (T-2h).** Perishable — not stored here. Check: runway/taxiway closures, navaid U/S, lighting, obstacle/crane, RFF downgrade, GPS/RAIM/GNSS-interference advisories, and — per the **standing caution (§3.2/§4)** — the current **Tel Aviv (LLLL) FIR and surrounding regional airspace status**, state bulletins, and any applicable EASA Conflict Zone Information Bulletin/Information Note. Source: AIS / OFP NOTAM block.

---

## 16. Fuel & alternate planning notes

- **Typical role for us:** **Destination field** (not a K Global base) `[VAMSYS mirror 2026-07-26]`.
- **Nearest suitable alternates:** Company preferred alternates **LCLK** (Larnaca, Cyprus), **LGAV** (Athens, Greece), **OLBA** (Beirut, Lebanon) `[VAMSYS mirror 2026-07-26]` — all cross-country from Israel; confirm each field's runway/RFF adequacy, current minima, **and current airspace-status/NOTAM picture** (§3.2) before treating any of them as usable on the day.
- **Fuel-uplift notes:** Jet A-1 & 100LL, H24, via hydrant (aprons N/J/L/T3) and bowser `[Israel AIP AD 2 LLBG 2.4]`. See [`OM E — Fuel Policy`](../../../../../flight-ops/fuel-policy.md).
- **Range/perf flags for our fleet:** No field-length or field-elevation performance penalty identified for a Category L operation. See [`OM B — Fleet Capability Matrix`](../../../../../fleet/capability-matrix.md) for type-by-type range/performance reference. 🟩

---

## 17. Fleet-specific notes (optional)

- No type-specific performance penalty identified for a Category L operation at LLBG. The one physical constraint worth flagging generically is **Taxilane H's 36 m wingspan restriction** (§13) — relevant only if a larger-than-Category-L type is ever routed through that stand area. See [`OM B — Fleet Capability Matrix`](../../../../../fleet/capability-matrix.md).

---

## 18. Open items (🟧 — confirm against AIP / current AIRAC)

- **Standing reminder:** re-check current NOTAMs, state airspace-status bulletins, and any applicable EASA CZIB/Information Note for the Tel Aviv (LLLL) FIR and surrounding airspace before every flight (§3.2/§4) — this is a live picture, not a one-time confirmation.
- **Transition altitude/level** — referenced to AIP ENR 1.4, not reached in this research pass.
- **IATA slot-coordination level** — AIP confirms a "fully coordinated slot" regime but does not state the Level 1/2/3 designation in the reachable extract.
- **Take-off minima exact figures** — published per AIP AD 2.22 para 8 (category-dependent) but not reproduced here per governance; verify current chart.
- **SID/STAR RNP and climb-gradient specifics** — not detailed in the reachable extract; verify current AIRAC chart.
- **PCN detail by individual apron/taxiway** — summarised at representative level; full apron-by-apron table not reproduced (AD 2.8 is extensive).
- **Ground handling agent identities** — tier-4 sourced only (not confirmed in the AIP); see Dispatch §5.
- **DST transition dates (IDT)** — general knowledge, not independently re-confirmed this pass.
- **Field elevation** — AIP states 134 ft; OurAirports/SkyVector state 135 ft; 1 ft variance not resolved.
- **VATSIM cross-check** — VATSIM Israel (VATIL) publishes a general LLBG scenery/info page but no detailed operational SOP was found in reachable sources; no operational discrepancy to report, but the cross-check is thinner than for a hub field with a full vACC SOP.

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim material (current-AIRAC charts) informs content but is not listed here.*

- **Israel CAAI eAIP, AD 2 LLBG** — AIRAC cycle effective 2023-06-15 (retrieved 2026-07-26) — https://e-aip.azurefd.net/2023-06-15-AIRAC/html/eAIP/LL-AD-2.LLBG-en-GB.html . Primary source for ARP/elevation/mag-var, runway physical characteristics and declared distances, approach/runway lighting, ATS communications, radio navaids, local traffic regulations, flight procedures (preferential runway, SID/STAR names, LVP, take-off minima, noise abatement/NADP-1, noise monitoring), and operating-hours/restrictions. **Treat exact current-cycle figures as needing a live-AIRAC cross-check** — the retrieved cycle is dated 2023, and Israel's AIP is amended on the standard AIRAC cycle.
- OurAirports — https://ourairports.com/airports/LLBG/ and /runways.html (retrieved 2026-07-26). *ARP/elevation/runway/displaced-threshold cross-check.*
- SkyVector — https://skyvector.com/airport/LLBG (retrieved 2026-07-26), including a 2021 pilot-submitted comment corroborating ILS CAT I on all equipped runways, no published IFR approach for RWY 03, and decommissioned Israeli NDBs. *Cross-check only, not primary.*
- Wikipedia — "Ben Gurion Airport" — https://en.wikipedia.org/wiki/Ben_Gurion_Airport (retrieved 2026-07-26). *General/background corroboration.*
- tlvflights.com — "Ground Handling at Ben Gurion" — https://www.tlvflights.com/en/ground-handling/ (retrieved 2026-07-26). *Tier-4 ground-handler identification, not AIP-sourced.*
- VATSIM Israel (VATIL) — "Tel-Aviv (LLBG)" — https://vatil.org.il/site/tel-aviv-llbg/ (retrieved 2026-07-26). *General scenery/information page — no detailed operational SOP found; network-sim source, not regulatory.*
- Companion regional brief: [`Airspace/General/Middle East.md`](../../../../airspace/middle-east.md) — regional conflict-zone/GNSS-interference context (Gulf-focused, but documents the same pervasive Eastern-Mediterranean jamming pattern referenced in the standing caution above).

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-26 | Built from national AIP; K Global fields from live VAMSYS; 4-page pack. |
