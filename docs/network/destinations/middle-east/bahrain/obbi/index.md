# OBBI — Bahrain Intl · Airport Briefing

**OBBI / BAH** · Manama / Muharraq Island, Bahrain · Middle East
**Version** v0.1 · **Updated** 2026-07-26 · **Status** Draft

> **Read-me:** Planning aid for X-Plane 11, not a chart. Static data is drawn from the Bahrain CAA eAIP (AIP Bahrain and Qatar, AD 2 OBBI, AIRAC cycle effective 2024-03-21 — the current live cycle is AIRAC 02/26, eff. 2026-07-09, and could not be re-fetched this pass; re-verify before an imminent trip) plus public aeronautical data; approaches/SIDs/STARs are listed **by name only** — fly the charted current-AIRAC version. Live weather/NOTAMs are pulled at planning (§14/§15). Open 🟧 items are listed in §18. Flag legend 🟥 restriction/hazard · 🟧 caution/unverified · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| ARP (lat/long) | 26°16′15″N 050°38′01″E (26.2708, 50.6336) `[Bahrain CAA AIP AD 2.2 OBBI]` — matches Navigraph navdata position in the prior stub |
| Field elevation | **8 ft AMSL** / reference temperature **38 °C** `[Bahrain CAA AIP AD 2.2 OBBI]` — matches stub `[Navigraph navdata]` figure |
| Mag variation | 2.49° E (2020), annual change 0°3′ E/yr `[Bahrain CAA AIP AD 2.2 OBBI]` — 🟧 current-day value (~2.7–2.8° E by secular drift) not independently re-sourced |
| Time zone | UTC+3 (AST) — no DST observed |
| Runway(s) | **12L/30R** 3,964 × 60 m (asphalt/concrete) — primary, ILS CAT II both ends · **12R/30L** 2,530 × 45 m (asphalt) — 🟥 **AD 2.12 (2024-03-21 cycle) carries the note "Runway 12R/30L is currently not available"; re-verify against the live AIRAC/NOTAM before planning any use of this runway pair** |
| Preferential runway | Wind-dependent; both ends of the main pair carry ILS CAT II — no strong noise-preferential bias found. Circuit direction: 12L/12R left-hand, 30L/30R right-hand |
| Longest LDA | 3,657 m (12L/30R; 307 m/1,000 ft threshold displacement) |
| Approaches | **ILS CAT II** 12L (IBIB) and 30R (IBIA); **VOR/DME** all four designators charted; **RNP APCH** charted for 12L/12R/30R/30L — 🟧 corrects the CAT III assumption carried in the prior stub/task brief; the sourced AIP figure is **CAT II**, not CAT III |
| RFF category | **CAT 10** (ICAO highest — A380-capable) 🟩 |
| Control type | **Radar** — Bahrain Approach (TAR); Bahrain Tower on the field; **Bahrain (OBBB) FIR** en route — see [Middle East airspace brief](../../../../airspace/middle-east.md) |
| Elevation class | Sea-level (8 ft) — **not** hot-and-high, but the AIP's **38 °C reference temperature** signals a genuine summer performance/density-altitude caution despite the low elevation 🟧 |
| Special-airport status | 🟥 **RWY 12R/30L unavailable per the sourced AIP cycle** — effectively single-runway-pair operation on 12L/30R until re-confirmed; otherwise not operator-categorised as crew-restricted |
| Customs / PoE | **Yes** — H24 `[Bahrain CAA AIP AD 2.3 OBBI]` |
| K Global category | **L** `[VAMSYS mirror 2026-07-26]` |
| K Global base | **No** `[VAMSYS mirror 2026-07-26]` |
| Company preferred alternates | **OMDB, OTHH, OMAA** `[VAMSYS mirror 2026-07-26]` — all cross-country, see §16 |
| Taxi-in / taxi-out (VAMSYS) | **12 min / 15 min** `[VAMSYS mirror 2026-07-26]` |

---

## 2. Validation summary

| Domain | Flag | Note |
|---|---|---|
| Terrain / CFIT | 🟩 | Flat reclaimed island at 8 ft AMSL — no high terrain. The obstacle picture is entirely man-made (masts, cranes, the Manama Financial Harbour towers ~2–3 NM SE, in the circling area rather than on the final approach path). See §3.1. |
| Runway length vs fleet perf | 🟧 | 12L/30R (3,964 m) is ample for any K Global Code E/F type. 🟥 With 12R/30L currently unavailable, **all traffic funnels onto the single 12L/30R pair** — a capacity/resilience consideration, not a length one. |
| Approach availability / minima | 🟥 | **ILS CAT II only** (12L/30R) — corrects the CAT III figure carried in the prior stub. LVP has a **hard floor: no take-off or landing below 350 m RVR** — an absolute limit, not a soft caution. See §10/§11. |
| Airspace / traffic / control | 🟥 | Bahrain (OBBB) FIR is named in the Middle East regional airspace brief as currently under an **EASA CZIB "avoid at all levels"** advisory, and Bahrain is specifically named as a Gulf hub experiencing **GNSS jamming/spoofing**. Bahraini airspace closed outright for several weeks in 2026 amid regional tensions. Durable-context caution — re-check live. See §3.2 and the [Middle East airspace brief](../../../../airspace/middle-east.md). |
| Weather / seasonal hazard | 🟧 | Gulf shamal dust/haboob and extreme summer heat (38 °C reference temperature) are the durable seasonal drivers; no de-icing requirement. See §14. |
| Curfew / slots / hours | 🟩 | ATS, customs, fuelling, handling and security are all published **H24**; no curfew or slot-coordination regime found. The published **admin-office hours (Sun–Thu 04:00–11:15)** are an AIS/administrative window only, not an operating restriction. 🟧 time reference (UTC vs local) not stated in the reachable extract. |
| RFF category vs our types | 🟩 | CAT 10 — above any K Global type's requirement. |
| Fuel availability | 🟧 | Jet A-1 only (AVGAS 100LL **not available** — irrelevant to our jet fleet), via **BAFCO** on a contract or **cash-with-pre-deposit** basis — confirm a standing company fuel arrangement exists before planning an uplift here. See §16. |
| Customs / handling / security | 🟩 | H24 across all four; single designated handler (Bahrain Airport Services). |

---

## 3. Threat & Error Management (TEM)

### 3.1 CFIT / Terrain 🟩
OBBI sits at 8 ft AMSL on reclaimed land off Muharraq Island — there is no high terrain anywhere in the vicinity; this is a non-issue field for terrain in the classic sense. The obstacle environment instead is **entirely man-made**: numerous lampposts, comms masts and cranes charted in the approach/take-off funnels of all four runway ends (mostly 6–20 m/20–65 ft, per the AD 2.10 obstacle table), plus a cluster of much taller structures — comms masts to ~56 m (184 ft) and, further out, the **Manama Financial Harbour towers at ~266–267 m (874–875 ft) AMSL**, roughly 2–3 NM SE of the field — charted in the **circling area**, not directly on the straight-in approach/take-off paths. Brief the obstacle chart for the assigned runway; this is a low-relief but obstacle-dense island field, not a CFIT-terrain field.

### 3.2 Airborne conflict / traffic 🟥
Bahrain (OBBB) FIR is a compact **Class D CTR** (10 NM radius, SFC–2,500 ft) worked by Bahrain Approach/Tower, sitting inside the wider Gulf traffic mosaic described in the [Middle East airspace brief](../../../../airspace/middle-east.md). That brief specifically names **Bahrain (OBBB)** as one of the Gulf FIRs currently under an **EASA Conflict Zone Information Bulletin — "avoid at all levels"** — alongside Kuwait, Qatar and the UAE — and separately names **Bahrain** as one of the Gulf hubs experiencing **pervasive GNSS jamming/spoofing** on arrival/departure. This is corroborated operationally: Bahraini airspace was closed outright from **28 February to 8 April 2026** and again briefly on **3 June 2026** amid regional military tensions, with Gulf Air rerouting via Dammam (OEDF) during the closures. **This is durable awareness, not a live clearance** — the current CZIB/NOTAM/airspace-open state must be re-verified at planning (§9 of the airspace brief; §15 here). Expect DME/DME/IRU cross-checks and early ATC notification if GNSS position drift or spurious GPWS/terrain alerts occur.

### 3.3 Runway excursion 🟥
Both runway pairs carry **displaced thresholds**: 12L/30R displaced 307 m (1,000 ft) at both ends (the AIP's declared-distance gap between TORA/TODA/ASDA of 3,964 m and LDA of 3,657 m confirms this); 12R/30L displaced 1,000 ft (12R) and ~394–420 ft (30L). More significantly, the sourced AIP cycle (2024-03-21) flags **RWY 12R/30L as currently not available** — treat this as a hard restriction until re-confirmed against the live AIRAC/NOTAM, not merely a caution. Standard RESA of 240 m is published for 12L/30R. TWY A4 is not usable to vacate after a 12L landing, and TWYs A6/A7 are not usable to vacate after a 30R landing (marking/lighting not provided) — a specific excursion/confusion trap on the two ends of the only currently-usable runway.

### 3.4 Weather threat 🟧
No de-icing facility exists (AD 2.4/2.7: NIL) and none is needed — this is a hot, arid Gulf climate. The defining seasonal hazard is the regional **shamal wind/dust** pattern described in the Middle East airspace brief (summer and winter shamal, haboob dust walls) reducing visibility across the Gulf, and **extreme summer heat** — the AIP's own **38 °C reference temperature** at an 8 ft field is a genuine performance/density-altitude caution even though the field is not geographically "hot-and-high." See §14 and [`OM E — PBN and RNP Operations`](../../../../../flight-ops/pbn-and-rnp-operations.md) for the RNP/GNSS-integrity cross-reference.

### 3.5 Operational considerations 🟥
Three durable constraints stack at this field: (1) **RWY 12R/30L unavailable** in the sourced cycle, concentrating all traffic onto the single 12L/30R pair — a capacity and diversion-margin consideration for a busy Gulf hub; (2) **CAT II LVP with a hard 350 m RVR floor** for both take-off and landing — there is no fallback below this, and LVP requires holding-position H (30R) or A1 (12L), with intersection departures prohibited; (3) the **regional conflict-zone/GNSS-jamming picture** (§3.2) is a durable planning input, not a one-off event, given the 2026 airspace-closure history. RFF (CAT 10) and the navaid/approach infrastructure are otherwise first-tier for a Gulf hub of this size.

---

## 4. Cautions & Warnings

- **RWY 12R/30L is carried as "currently not available" in the sourced AIP cycle** — do not plan any use of this runway pair without re-verifying current status against the live AIRAC/NOTAM. 🟥
- **No approach or take-off is permitted below 350 m RVR** — this is a hard floor, not a soft minimum (AD 2.22.3).
- **TWY A4 cannot be used to vacate after a 12L landing; TWYs A6/A7 cannot be used to vacate after a 30R landing** — marking/lighting not provided on these exits for those directions.
- **Reverse thrust above idle is prohibited on landing between 2100–0300** except in an emergency with ATC clearance; **engine run-ups/tests are limited to ground-idle power** in the same window.
- **Bahrain (OBBB) FIR is currently named in an EASA CZIB "avoid at all levels" advisory** alongside pervasive Gulf GNSS jamming/spoofing — this is a live, perishable picture; re-check at planning (§15, and the [Middle East airspace brief](../../../../airspace/middle-east.md)).
- **A Code F aircraft landing/departing on the main runway closes Taxiway Alpha between A1 and A2 to all movement**, including vehicles — expect ATC to hold traffic at TWY Lima, Kilo or abeam Mike accordingly.
- **The 80° arc between the 180° and 260° radials of the BHR VOR (over the main Bahrain islands) is a no-fly arc** for departing/arriving traffic except where deemed operationally essential and kept clear of land or vectored clear by Bahrain Approach.
- **Bird activity** — a dedicated Bird Concentrations chart is published for the field; treat as a standard coastal/Gulf bird-strike caution.

---

## 5. Aerodrome category, restrictions & crew qualification

- **Special-airport / category:** Not operator-categorised as a restricted-crew special airport in reachable sources; the standing briefing item is **RWY 12R/30L's unavailable status** (§3.5) rather than a crew-experience gate. 🟥
- **Crew-qualification gate:** CAT II currency required for LVP operations into 12L/30R in low-visibility conditions. 🟧
- **Operating restrictions / bans:** Intersection departures not authorised during LVP (holding position H for 30R, A1 for 12L); reverse-thrust-above-idle and engine-run-up restrictions 2100–0300 (§4/§12); single-engine taxi permitted under stated conditions (no 180°+ turn, not on/crossing the active runway).
- **Overflight / entry / permits:** Standard IFR/VFR entry; no state permit found for scheduled commercial ops. 🟥 The regional conflict-zone/overflight-risk picture (§3.2) is a live planning input — re-check current CZIB/NOTAM status.
- **Operations notes:** State authority — the Bahrain CAA (Undersecretary for Civil Aviation, Ministry of Transportation and Telecommunications); airport commercially operated by **Bahrain Airport Company**; ground handling — **Bahrain Airport Services (BAS)**, H24; into-plane fuelling — **Bahrain Aviation Fuelling Company (BAFCO)**.

---

## 6. General / hours / services

| Item | Value | Flag |
|---|---|---|
| ATS hours | H24 `[Bahrain CAA AIP AD 2.3 OBBI]` | 🟩 |
| AD operating hours | AD-operator/admin office Sun–Thu 04:00–11:15; ATS/customs/fuelling/handling/security all H24 — the field is operationally H24 | 🟧 time reference (UTC/local) not stated in the reachable extract |
| Night / curfew restrictions | None found; reverse-thrust-above-idle and engine-run-up restricted to idle power 2100–0300 | 🟧 |
| RFF category | CAT 10 | 🟩 |
| Fuel | Jet A-1 via BAFCO, contract or cash-pre-deposit basis, H24; AVGAS 100LL not available | 🟧 |
| PCN | Runway/taxiway/apron-specific — see §7/§13 | 🟩 |
| Customs | H24 | 🟩 |
| Handling / FBO | Bahrain Airport Services (BAS), H24; aircraft repair — Gulf Air; no hangar space for visiting aircraft | 🟩 |

---

## 7. Runways & declared distances

| RWY | Dimensions | Surface / PCN | TORA | TODA | ASDA | LDA | Notes |
|---|---|---|---|---|---|---|---|
| 12L | 3,964 × 60 m | Asphalt PCN 120/F/A/W/T (between landing THRs) + concrete PCN 120/R/B/W/T (first 307 m) | 3,964 m | 3,964 m | 3,964 m | 3,657 m | Threshold displaced 307 m; ILS CAT II; RESA 240 m |
| 30R | 3,964 × 60 m | Same as above | 3,964 m | 3,964 m | 3,964 m | 3,657 m | Threshold displaced 307 m; ILS CAT II; RESA 240 m |
| 12R | 2,530 × 45 m | Asphalt PCN 120/F/A/W/T | 2,530 m | 2,590 m | 2,530 m | 2,222 m | 🟥 **Currently not available** per AD 2.12 (2024-03-21 cycle) — verify current status |
| 30L | 2,530 × 45 m | Asphalt PCN 120/F/A/W/T | 2,530 m | 3,130 m | 2,530 m | 2,410 m | 🟥 **Currently not available** per AD 2.12 (2024-03-21 cycle) — verify current status |

*Source: Bahrain CAA AIP, AD 2 OBBI 2.12/2.13, AIRAC cycle eff. 2024-03-21 (retrieved 2026-07-26). All distances in metres. The 12R/30L "not available" note is carried verbatim from that cycle; the current live AIRAC (02/26, eff. 2026-07-09) was not independently re-fetched this pass — re-verify before use.*

---

## 8. Communications

| Service | Callsign | Frequency | Hours | Notes |
|---|---|---|---|---|
| ATIS | Bahrain Information (D-ATIS) | 127.2 MHz | H24 | |
| Delivery | Bahrain Delivery | 121.90 MHz | H24 | PreFANS data-link DCL available (ACARS), addr. OBBI; request en-route clearance TOBT‑30 to TOBT‑10 |
| Ground | Bahrain Ground (SMC) | 121.85 MHz | H24 | 🟧 A tier-4 cross-check (OurAirports) shows 121.675 — discrepancy noted, AIP figure used |
| Tower | Bahrain Tower | 118.5 MHz (alt. 296.025 MHz) | H24 | |
| Approach | Bahrain Approach (APP/TAR) | 127.85 MHz (alt. 234.95 MHz) | H24 | |
| VOLMET | Bahrain Volmet | 128.8 MHz | H24 | |
| A/G (HF) | Bahrain Radio | 2992 / 5658 / 5667 / 8918 / 13288 / 13312 kHz | H24 | |
| Centre / FIR | Bahrain (OBBB) FIR / ACC | Not published in the reachable AD 2 extract | — | 🟧 the MET section (AD 2.11) confirms an ACC exists ("BAHRAIN TWR, APC, ACC, RCC"); see the [Middle East airspace brief](../../../../airspace/middle-east.md) |

*Source: Bahrain CAA AIP, AD 2 OBBI 2.18, AIRAC cycle eff. 2024-03-21 (retrieved 2026-07-26).*

---

## 9. Navaids

| Aid | Ident | Freq | Hours | Notes |
|---|---|---|---|---|
| DVOR/DME | BHR | 111.80 MHz / CH55X | H24 | On field, co-located |
| ILS LOC 12L | IBIB | 111.5 MHz | H24 | CAT II |
| ILS GP 12L | — | 332.9 MHz | H24 | Angle 3°, RDH 55 ft |
| ILS DME 12L | IBIB | CH52X | H24 | Co-located with GP |
| ILS LOC 30R | IBIA | 110.3 MHz | H24 | CAT II |
| ILS GP 30R | — | 335 MHz | H24 | Angle 3°, RDH 55 ft |
| ILS DME 30R | IBIA | CH40X | H24 | Co-located with GP |

*Source: Bahrain CAA AIP, AD 2 OBBI 2.19, AIRAC cycle eff. 2024-03-21 (retrieved 2026-07-26). No ILS is published for 12R/30L, consistent with that runway pair's current unavailability.*

---

## 10. Arrival

- **Transition altitude / level:** TA 13,000 ft `[Bahrain CAA AIP AD 2.17 OBBI]`; TL by QNH — verify current chart.
- **Speed:** Standard 250 KIAS below FL100 (ICAO norm) — not independently OBBI-sourced this pass. 🟧
- **Preferential runway logic:** Wind-dependent; both ends of the main pair (12L/30R) carry ILS CAT II. Circuit direction 12L/12R left-hand, 30L/30R right-hand.
- **Approaches (names only — verify minima on current AIRAC charts):**

| RWY | Approach | Notes |
|---|---|---|
| 12L | ILS CAT II (IBIB); VOR/DME; RNP | Primary arrival runway |
| 30R | ILS CAT II (IBIA); VOR/DME; RNP | Primary arrival runway |
| 12R | VOR/DME; RNP | 🟥 Runway currently unavailable — never an arrival option pending re-verification |
| 30L | VOR/DME; RNP | 🟥 Runway currently unavailable — never an arrival option pending re-verification |

- **STARs (names only):** **KOBOK 1**, **LADNA 1**, **ORDIG 1** (RNAV 1, RWY 12L-30R), plus a published **Radio Communication Failure STAR** — verify current AIRAC.
- **LVP:** Declared whenever RVR ≤ 1,000 m or the manoeuvring area is not fully visible from the tower; **no landing permitted below 350 m RVR** (hard floor). Arriving aircraft under LVP exit south at TWY A4 (30R) / A5 (12L) or beyond, or north at TWY B1/B2; strict compliance with ATC taxi instructions required. See [`OM E — Low Visibility Operations`](../../../../../flight-ops/low-visibility-operations.md).
- **Missed approach watch-items:** Not terrain-driven (flat island) — the operative concerns are the man-made obstacle set (§3.1, notably the Financial Harbour towers in the circling area) and re-sequencing into a compact, high-activity Gulf-hub Class D CTR.

---

## 11. Departure

- **SIDs (names only — fly the charted version):** No named RNAV SID was found in the reachable chart index — departures are published as **radar-vectored** (Departure Chart (RADAR), RWY 12L and RWY 30R). 🟧 Pull the current-AIRAC chart index to confirm no named SID has since been published.
- **RNP / climb-gradient requirements:** Not applicable to the radar-vectored departure structure found this pass; confirm on the current chart. See [`OM E — PBN and RNP Operations`](../../../../../flight-ops/pbn-and-rnp-operations.md).
- **Take-off minima:** No take-off permitted below **350 m RVR** (hard floor, AD 2.22.3); LVP departure holding position **H (30R)** or **A1 (12L)** — intersection departures not authorised during LVP.
- **Start-up / push-back:** APU use limited to ≤10 min before off-block and ≤5 min after on-block at GSE-pop-up-pit stands (fixed 400 Hz/PCA preferred); single-engine taxi permitted subject to stated conditions (no 180°+ turn, not on/crossing the active runway).
- **ATC slot / CTOT & clearance:** No slot-coordination regime found. En-route clearance via radio or **PreFANS data-link DCL** (ACARS, addr. OBBI); request between TOBT‑30 and TOBT‑10, maintaining continuous watch on Bahrain Delivery through the DCL process.
- **De-icing:** **NIL** — not required in this climate.

---

## 12. Noise & Environmental

- **Noise abatement (NAP):** Circuit direction 12L/12R left-hand, 30L/30R right-hand. Departing/arriving flights may not operate within the **80° arc subtended by the 180° and 260° radials of the BHR DVOR** (containing the main Bahrain islands), except where deemed operationally essential and either kept visually clear of land or vectored clear by Bahrain Approach.
- **Night noise / dB limits:** No published per-movement dB limit found; the operative night restrictions are the reverse-thrust and engine-run-up rules below. 🟧
- **Engine run-up restrictions:** Between 2100–0300, engine testing is limited to **ground-idle power only** — no higher setting, however brief.
- **Reverse thrust / idle-reverse policy:** Use of reverse thrust above idle on landing is **prohibited between 2100–0300**, unless the aircraft is in an emergency and ATC has cleared its use.

---

## 13. Ground operations

- **Stands for our types:** Main Apron A (stands 7–10, Code F except stand 7 = Code C), Main Apron B (11–22, Code F except stand 14 = Code E), Main Apron C (23–28, Code F except stand 28 = Code C) are the principal Code E/F clusters; Western A (61–63), Western B (50–58 + 52A — 52A rated for high engine-run up to B777-300ER), Middle (1–6), Executive (E1–E4), Cargo (C1–C5), Northern (70–75) and Eastern (81–88) aprons cover GA/executive/cargo/remote roles. 🟩
- **Push-back:** Not explicitly mandated in reachable sources for Code E/F; GPU/FEGP and PCA use governed by the APU-restriction rules (§11). 🟧
- **Standard taxi routes:** Spine taxiways A1–A9 parallel the main runway with B1/B2 as north crossings; K/L/M/N/P/Q/R/S/T/U/V/Z serve the apron complexes — confirm routing with Ground/Apron on the day.
- **Hot spots / tight taxiways:** 🟥 **TWY A4** cannot be used to vacate after a 12L landing; **TWYs A6/A7** cannot be used to vacate after a 30R landing (marking/AGL not provided for those movements). **TWY Alpha between A1 and A2 is closed to all movement (including vehicles) during a Code F landing/take-off** on the main runway. **TWY B1** carries special night-ops conditions — CAT-EYE reflectors only (no centreline lights), continuously-illuminated stop-bar, and a mandatory follow-me for all aircraft entering/leaving it, day and night.
- **Follow-me:** Available; mandatory for TWY B1 movements as above.

---

## 14. Weather & seasonal (durable)

- **Climate / prevailing wind:** Hot, arid Gulf climate; the AIP's own 38 °C reference temperature at an 8 ft field is the clearest signal of the summer performance driver here.
- **Seasonal hazards:** Regional **shamal wind/dust** events (summer and winter shamal, haboob dust walls per the Middle East airspace brief) can drop visibility sharply and interact with the field's CAT II LVP regime; **extreme summer heat/density-altitude** is the durable performance caution despite the sea-level elevation. No de-icing season — not applicable.
- **Local effects:** No notable terrain/sea-breeze effects beyond the general Gulf coastal pattern; bird activity is a recognised local hazard (dedicated Bird Concentrations chart published).

> **Live weather — pull at planning (T-2h):** METAR, TAF, TREND, SIGMET/AIRMET (dust/shamal). Not stored here.

---

## 15. NOTAMs

> **Pull at planning (T-2h).** Perishable — not stored here. Check specifically: **current status of RWY 12R/30L** (carried "not available" in the sourced cycle), ILS/LVP equipment status, GNSS/RAIM advisories (Bahrain is a named jamming/spoofing location), the current CZIB/conflict-zone and airspace-open/closed state for the Bahrain (OBBB) FIR (see the [Middle East airspace brief](../../../../airspace/middle-east.md) §9/§11), lighting, obstacle/crane, and RFF downgrade. Source: AIS / OFP NOTAM block.

---

## 16. Fuel & alternate planning notes

- **Typical role for us:** Destination / alternate — **not** a K Global base `[VAMSYS mirror 2026-07-26]`.
- **Nearest suitable alternates:** Company preferred alternates **OMDB** (Dubai Intl), **OTHH** (Hamad Intl) and **OMAA** (Zayed Intl) `[VAMSYS mirror 2026-07-26]` — all three are in different countries from Bahrain and are referenced here as plain ICAO text only, not as document links. Confirm current suitability, RFF adequacy and minima per leg, and re-check each against the live conflict-zone/CZIB picture in the [Middle East airspace brief](../../../../airspace/middle-east.md) before use.
- **Fuel-uplift notes:** Jet A-1 only, via **BAFCO**, on a **contract or cash-with-pre-deposit** basis — confirm a standing company arrangement exists before planning an uplift; AVGAS 100LL is not available (not relevant to our jet fleet). See [`OM E — Fuel Policy`](../../../../../flight-ops/fuel-policy.md).
- **Range/perf flags for our fleet:** 12L/30R (3,964 m) is non-limiting for any K Global type. See [`OM B — Fleet Capability Matrix`](../../../../../fleet/capability-matrix.md) for type-by-type range/performance reference; note the current single-effective-runway-pair situation (§3.5) as a resilience rather than a length constraint.

---

## 17. Fleet-specific notes (optional)

- A **Code F** aircraft landing or departing on the main runway triggers the TWY Alpha (A1–A2) closure procedure (§13) — relevant for any K Global Code F rotation through OBBI. See [`OM B — Fleet Capability Matrix`](../../../../../fleet/capability-matrix.md) for type/code-letter reference; no field-length or field-elevation performance penalty applies to any home fleet type at the current 12L/30R dimensions.

---

## 18. Open items (🟧 — confirm against AIP / current AIRAC)

- **RWY 12R/30L availability** — the sourced cycle (2024-03-21) carries a "currently not available" note; the live AIRAC (02/26, eff. 2026-07-09) could not be re-fetched this pass (repeated timeouts) — this is the single highest-priority re-check for this field.
- **Magnetic variation** — sourced to the 2020 AIP epoch (2.49° E); current-day value not independently re-confirmed.
- **Ground frequency discrepancy** — AIP (2024-03-21 cycle) gives 121.85 MHz; a tier-4 source (OurAirports) shows 121.675 MHz — AIP figure used, re-check at planning.
- **En-route (ACC) frequency** for the Bahrain (OBBB) FIR — not published in the reachable AD 2 extract; existence confirmed only indirectly (AD 2.11 MET-distribution list).
- **Take-off/landing minima detail, DVA and NADP specifics** — not confirmed beyond the 350 m RVR hard floor and the general LVP/holding-position procedure.
- **Admin-office hours time reference** (Sun–Thu 04:00–11:15) — UTC vs local not stated in the reachable extract.
- **Awal Private Terminal / VIP-GA apron linkage** — identified in public sources (Wikipedia) but not cross-confirmed against the AIP apron table this pass.
- **VATSIM/IVAO cross-check** — Khaleej vACC and Arabian vACC (VATSIM MENA) and an IVAO GCC-region Bahrain SOP wiki were identified as public resources, but the specific operational SOP content did not render to a public fetch this pass — re-attempt and cross-check runway/taxi/frequency content per the build instructions before marking Verified.
- **Current AIRAC re-verification generally** — this brief is built from the 2024-03-21 AD 2 OBBI cycle; the live cycle (AIRAC 02/26, eff. 2026-07-09) should be re-pulled before an imminent trip, particularly for the 🟥 items above.

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim material (current-AIRAC charts) informs content but is not listed here.*

- **Bahrain CAA — AIP for the Kingdom of Bahrain and State of Qatar, AD 2 OBBI**, AIRAC cycle eff. 2024-03-21 — ARP/elevation/mag-var, operational hours, handling/fuel, RFF, aprons/taxiways, obstacles, runway physical characteristics/declared distances, lighting, ATS airspace/communications, navaids, local regulations, noise abatement, LVP/flight procedures, chart index — https://aim.mtt.gov.bh/eAIP/2024-03-21-AIRAC/html/eAIP/OB-AD-2.OBBI-en-BH.html (retrieved 2026-07-26). *Current live cycle is AIRAC 02/26 (eff. 2026-07-09); repeated fetch timeouts prevented re-pulling it this pass — see §18.*
- Bahrain MTT/AIM — eAIP portal (current-publication index) — https://aim.mtt.gov.bh/eaip (retrieved 2026-07-26).
- OurAirports — https://ourairports.com/airports/OBBI/runways.html and /frequencies.html (retrieved 2026-07-26). *ARP/elevation/runway/frequency cross-check; ground-frequency discrepancy noted in §18.*
- SkyVector — https://skyvector.com/airport/OBBI/Bahrain-International-Airport (retrieved 2026-07-26). *Coordinates/runway/navaid cross-check.*
- Wikipedia — "Bahrain International Airport" — https://en.wikipedia.org/wiki/Bahrain_International_Airport (retrieved 2026-07-26). *History, 2021 terminal/Awal Private Terminal, cargo/DHL hub role, 2026 regional-tension airspace-closure history.*
- VATSIM Khaleej vACC — https://www.khaleejvacc.net/ ; VATSIM Arabian vACC library — https://library.vatsim-arabian.com/pilots/ ; IVAO GCC Region — Bahrain SOP — https://wiki.xg.ivao.aero/en/home/Bahrain_SOP (retrieved 2026-07-26). *Identified for the required VATSIM/IVAO cross-check; content did not render to a public fetch this pass — see §18.*
- **Companion OM C file:** [Middle East airspace brief](../../../../airspace/middle-east.md) — Bahrain (OBBB) FIR CZIB/GNSS-jamming context (§9/§11 of that brief).

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-26 | Built from national AIP; K Global fields from live VAMSYS; 4-page pack. |
