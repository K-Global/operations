# LFBZ — Biarritz Pays Basque · Airport Briefing

**LFBZ / BIQ** · Biarritz-Bayonne-Anglet, Pyrénées-Atlantiques, France · Europe
**Version** v0.1 · **Updated** 2026-07-26 · **Status** Draft

> **Read-me:** Planning aid for the sim, not a chart. Static data is drawn from the SIA France eAIP (AIP France, AD 2 LFBZ — reachable primary extract carries an older 2011–2013 amendment cycle; core layout/declared distances are unlikely to have changed but flagged for current-AIRAC re-verification) cross-checked against a current (AIRAC 2607, July 2026) IVAO France division operational reference. Approaches/SIDs/STARs are listed **by name only or flagged not-yet-confirmed** — fly the charted current-AIRAC version. Live weather/NOTAMs are pulled at planning (§14/§15). Open 🟧 items are listed in §18. Flag legend 🟥 restriction/hazard · 🟧 caution/unverified · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| ARP (lat/long) | 43°28'06"N / 001°31'52"W `[SIA eAIP AD 2 LFBZ ADC 01]` |
| Field elevation | **245 ft AMSL** (reference pressure datum 9 hPa); THR 27 219 ft, DTHR 09 242 ft |
| Mag variation | 🟧 **~0.9° E** per current (2026) operational cross-check; the reachable primary-AIP chart extract (2010–2011 cycle) instead states **1° W** — a large apparent swing consistent with long-run secular drift at this location but **not independently reconciled** this pass |
| Time zone | UTC+1 (CET) / UTC+2 (CEST, EU DST observed) |
| Runway(s) | **09/27**, 2,250 × 45 m, paved, PCN 49 F/B/W/U |
| Preferential runway | **RWY 27 preferential for arrivals** (field's only ILS direction); **RWY 09 preferential for night take-offs**, roughly 2000–0700 local when conditions permit — see §10/§11/§12 |
| Longest LDA | 2,230 m (27) |
| Approaches | **ILS CAT I on RWY 27 only** (ident BZ, 111.35) — RWY 09 has **no ILS**, served by RNAV(GNSS)/VOR only |
| RFF category | 🟧 **CAT 7** (0515–2200 local, per tier-4 cross-check), **CAT 8 available on 48 h PPR** — not confirmed from a primary AD 2.6 table this pass |
| Control type | **Radar-capable Approach** (Biarritz Approche, DSNA) below FL145; **Bordeaux ACC (LFBB)** above and en route — no dedicated OM C FIR brief yet, see [Europe Airspace Briefing](../../../../airspace/europe.md) 🟧 |
| Elevation class | Near sea-level (245 ft) — **not** hot-and-high; **coastal/terrain-aware field** — significant relief immediately south of the aerodrome (Pyrenean foothills) is the defining local hazard, see §3.1 |
| Special-airport status | 🟥 **RWY 27 is the field's only precision-approach/CAT I direction**; **significant terrain south of the field restricts omnidirectional-departure validity to the northern sector only** — see §3.1/§5 |
| Customs / PoE | Not confirmed from a primary table this pass — verify locally 🟧 |
| K Global category | **S** `[VAMSYS mirror 2026-07-26]` |
| K Global base | **No** `[VAMSYS mirror 2026-07-26]` |
| Company preferred alternates | **LEMD, LFBD, LEPA** `[VAMSYS mirror 2026-07-26]` |
| Taxi-in / taxi-out (VAMSYS) | **6 min / 8 min** `[VAMSYS mirror 2026-07-26]` |

---

## 2. Validation summary

| Domain | Flag | Note |
|---|---|---|
| Terrain / CFIT | 🟥 | Significant relief immediately **south** of the aerodrome (Pyrenean foothills) — the AIP explicitly restricts recommended omnidirectional-departure guidance to the sector north of the field (radial 251°–102° BTZ) because of it. See §3.1. |
| Runway length vs fleet perf | 🟩 | 2,250 m is adequate for K Global Category S operations; a 205 m displaced threshold on RWY 09 reduces its LDA to 2,045 m — not a limiting factor for the fleet type expected here. |
| Approach availability / minima | 🟧 | RWY 27 is the field's only ILS/CAT I direction; RWY 09 has no ILS (RNAV(GNSS)/VOR only) — a wind shift to RWY 09 removes precision-approach capability. |
| Airspace / traffic / control | 🟧 | Biarritz Approche has no dedicated Départ position — the same controller manages both departures and arrivals below FL145; proximity to the Spanish border brings occasional San Sebastian (LESO) traffic coordination via a Bordeaux(LFBB)/Madrid(LECM) letter of agreement — see §3.2. |
| Weather / seasonal hazard | 🟥 | **Coastal sea-fog can envelop the field within minutes** per current operational guidance — the field's defining weather hazard alongside Atlantic frontal systems. See §3.4/§14. |
| Curfew / slots / hours | 🟧 | Published ATS hours **0430–2100 local**, extendable beyond 2100 for scheduled/medevac/pre-authorised traffic with prior clearance from the airport Delegation Manager before 1400 — effectively a soft operating-hours gate rather than a hard curfew; not independently re-confirmed against current AIRAC. |
| RFF category vs our types | 🟩 | CAT 7 (tier-4 sourced) is expected to be adequate for K Global Category S equipment, pending primary-source confirmation. |
| Fuel availability | 🟧 | Jet A1 (TR.0) and Avgas 100LL available per a 2011–2012-cycle extract; hours/provider not re-confirmed against current AIRAC. |
| Customs / handling / security | 🟧 | Not confirmed from a primary table this pass — verify locally before planning an international arrival. |

---

## 3. Threat & Error Management (TEM)

### 3.1 CFIT / Terrain 🟥
LFBZ sits at 245 ft AMSL on the Basque coast, but **significant relief begins immediately south of the aerodrome** (the northern Pyrenean foothills) — the AIP itself restricts the validity of recommended omnidirectional-departure guidance to the sector between radial 251° and radial 102° BTZ (i.e., the sector north of the field), an explicit acknowledgement that a departure toward the south is not a safe default. Standard omnidirectional climb gradients are steep as a result: **RWY 09, climb 4.2–4.5% to 1.9 NM BTZ**; **RWY 27, climb 5.8–6% to 2.6 NM BTZ**; departures routed toward the HIG waypoint (7,000 ft) require even steeper ATS slopes (**9.2% off RWY 27, 5% off RWY 09**). Brief the MSA ring and terrain picture south of the field explicitly — this is the standout CFIT consideration at LFBZ, unlike the flat-plain fields elsewhere in this network.

### 3.2 Airborne conflict / traffic 🟧
Biarritz Approche has **no dedicated Départ position** — the Approach controller manages both departures and arrivals below FL145 (Bordeaux ACC/CRNA-SO owns the airspace above). The field sits close to the French/Spanish border: Biarritz Approche coordinates occasional **San Sebastian (LESO, Spain)** arrival traffic via BTZ/OSGOT under a Bordeaux(LFBB)–Madrid(LECM) letter of agreement, with a VOR RWY 22 procedure into LESO transiting both the Biarritz TMA and CTR. This is a cross-border traffic-awareness item even where radio contact with the Spanish-bound aircraft is not guaranteed. Cross-ref [Europe Airspace Briefing](../../../../airspace/europe.md); a dedicated **Bordeaux (LFBB) ACC/FIR brief does not yet exist in OM C** — flagged for future build. 🟧

### 3.3 Runway excursion 🟧
RWY 09 carries a **205 m displaced threshold** (LDA 2,045 m vs a 2,250 m physical runway); RWY 27's declared TORA (2,230 m) is marginally less than the full physical length. No further excursion-specific hazard (contamination frequency, braking-action history) was identified in the reachable extract — not independently re-confirmed against current AIRAC.

### 3.4 Weather threat 🟥
**Coastal sea-fog can envelop the field within minutes**, per current operational guidance — this, together with Atlantic frontal weather, is the field's defining and most time-critical weather hazard. LVP procedures trigger at **RVR < 800 m or ceiling < 200 ft** (current operational reference); **only RWY 27 is CAT I-equipped**, so a fog event coinciding with a wind favouring RWY 09 removes precision-approach capability entirely. See §14.

### 3.5 Operational considerations 🟥
Plan around four durable items: (1) **terrain south of the field** constrains departure/missed-approach contingency routing to the north (§3.1); (2) **RWY 27 is the field's only precision-approach direction** — RWY 09 is RNAV(GNSS)/VOR-only; (3) **coastal fog can develop with very little warning** — hold a realistic alternate/fuel posture rather than assuming visual conditions will persist; and (4) **published ATS hours (0430–2100)** require prior coordination to extend — this is an operating-hours gate to plan around rather than a hard curfew.

---

## 4. Cautions & Warnings

- **High terrain immediately south of the field** — never plan a departure or missed-approach contingency toward the south without confirming the current obstacle/terrain picture; the AIP's own omnidirectional-departure guidance is valid only to the north (radial 251°–102° BTZ).
- **Sea fog can arrive within minutes** on this Atlantic-coast field — do not commit to a visual approach/departure plan without a current TAF/trend check immediately before operating.
- **RWY 09 has no ILS** — a wind shift away from RWY 27 removes precision-approach capability; RWY 09 arrivals rely on RNAV(GNSS) or VOR only.
- **RWY 09 carries a 205 m displaced threshold** (LDA 2,045 m, not the full 2,250 m) — do not misapply the physical runway length as the landing distance available.
- **TWY N1 and S1 are prohibited at night**, and prohibited by day below RVR 800 m; TWY N1 is usable only by aircraft with wingspan < 18.5 m and main-gear track < 6 m.
- **ATS hours are 0430–2100 local** — extension beyond 2100 requires prior clearance from the Delegation Manager (before 1400) for scheduled/medevac/pre-authorised traffic; do not assume ad hoc late-evening coverage.

---

## 5. Aerodrome category, restrictions & crew qualification

- **Special-airport / category:** Not operator-categorised as a restricted-crew "special airport" in reachable sources; the standing crew-briefing items are the **southern high terrain** and **RWY 27's sole precision-approach status**. 🟥
- **Crew-qualification gate:** CAT I currency is sufficient (no CAT II/III equipment at this field per current operational reference); a heightened terrain/CFIT briefing is the practical crew-qualification-adjacent item given §3.1. 🟧
- **Operating restrictions / bans:** Visual approach must join the runway final track by **3 NM from BTZ (RWY 09/QFU 091°)** or **2 NM from BTZ (RWY 27/QFU 271°)** — a noise-mitigation measure over urban areas, not merely a stylistic preference. No RNP AR ban or circling restriction found in the reachable extract otherwise — verify current AIRAC. 🟧
- **Overflight / entry / permits:** Standard EU/Schengen operation; proximity to the Spain border brings the San Sebastian (LESO) cross-border coordination noted in §3.2, but no special state permit is required for LFBZ itself. 🟩
- **Operations notes:** ANSP — **DSNA** (Biarritz Approche/Tour); occasional wildlife-strike hazard noted as "random/occasional" in the reachable extract.

---

## 6. General / hours / services

| Item | Value | Flag |
|---|---|---|
| ATS hours | **0430–2100 local**; extendable beyond 2100 for scheduled/medevac/pre-authorised traffic with Delegation Manager clearance requested before 1400 | 🟧 |
| AD operating hours | Aligned with ATS hours above | 🟧 |
| Night / curfew restrictions | No hard movement curfew identified; **TWY N1/S1 closed at night** (ground-movement restriction, not a runway curfew); RWY 09 preferential for night take-offs (roughly 2000–0700 local, conditions permitting) | 🟧 |
| RFF category | 🟧 **CAT 7** (0515–2200 local, tier-4 cross-check); **CAT 8 on 48 h PPR** — not confirmed from a primary AD 2.6 table |
| Fuel | **Jet A1 (TR.0)** and **Avgas 100LL**; 2011–2012-cycle extract gives hours ~0245–2000 local (HN on request before 1900, winter +1 hr) — not re-confirmed against current AIRAC | 🟧 |
| PCN | 49 F/B/W/U (paved) | 🟩 |
| Customs | Not confirmed from a primary table this pass | 🟧 |
| Handling / FBO | General-aviation handling via a dedicated GA service (PPR 48 h for restricted apron areas); commercial handling not individually confirmed | 🟧 |

---

## 7. Runways & declared distances

| RWY | Dimensions | Surface / PCN | TORA | TODA | ASDA | LDA | Notes |
|---|---|---|---|---|---|---|---|
| 09 | 2,250 × 45 m | Paved / PCN 49 F/B/W/U | 2,250 m | 2,310 m | 2,250 m | 2,045 m | **205 m displaced threshold** — LDA reduced accordingly |
| 27 | 2,250 × 45 m | Paved / PCN 49 F/B/W/U | 2,230 m | 2,310 m | 2,230 m | 2,230 m | Field's CAT I/precision direction |

*Source: SIA France eAIP, AD 2 LFBZ ADC 01/GMC 01 chart extract (AMDT cycle 2011, retrieved via a public French AIS mirror) cross-checked against a current (AIRAC 2607, July 2026) IVAO France operational reference for the same figures — internally consistent between sources. Intersection take-offs published: RWY 09 from TWY D (1,790 m), N1 (1,000 m), P (1,810 m); RWY 27 from N1 (1,240 m), S1 (1,240 m). All distances in metres. 🟧 Treat exact current-cycle figures as needing a live-AIP cross-check given the age of the primary extract.*

---

## 8. Communications

| Service | Callsign | Frequency | Hours | Notes |
|---|---|---|---|---|
| ATIS | Biarritz | 128.225 | H24 (assumed) | Confirmed consistent across both primary and current-reference sources |
| Ground | Biarritz Sol | 121.950 | H24 | |
| Tower | Biarritz Tour | 118.700 | H24 | |
| Approach | Biarritz Approche | 125.600 | H24 | No dedicated Départ position — Approche manages both inbound and outbound below FL145 |
| Centre / FIR | **Bordeaux ACC (LFBB)** ("Bordeaux Contrôle") | Per current AIRAC | H24 | No dedicated OM C brief yet — see [Europe Airspace Briefing](../../../../airspace/europe.md) 🟧 |

*Source: SIA France eAIP-derived chart extract (2011–2013 cycle) cross-checked against a current (AIRAC 2607) IVAO France operational reference — all four field frequencies match between the two sources, giving high confidence despite the primary extract's age.*

---

## 9. Navaids

| Aid | Ident | Freq | Hours | Notes |
|---|---|---|---|---|
| VOR-DME | BTZ | 114.15 (CH 88Y) | H24 (assumed) | On/near field; primary IAF reference for both runway directions |
| ILS/DME 27 | BZ | 111.35 (CH 50Y) | H24 (assumed) | Serves RWY 27 only — RDH ~49–50 ft |
| NDB 27 | BZ | 341 kHz | H24 (assumed) | Non-precision backup for RWY 27 |

*RWY 09 has no ILS or NDB approach — served by RNAV(GNSS) and VOR only (§10). Source: SIA France eAIP-derived chart extract, 2011–2013 cycle.*

---

## 10. Arrival

- **Transition altitude / level:** TA **5,000 ft** (confirmed consistently across both primary and current-reference sources).
- **Speed:** Standard 250 KIAS below FL100 (EU/ICAO norm); specific approach-protection speed caps (typically 200–220 kt IAS) apply on several IAF holding/racetrack patterns — verify current chart.
- **Preferential runway logic:** **RWY 27 is preferential for arrivals** because it is the field's only ILS/precision direction. RWY 09 is used when wind dictates, served by RNAV(GNSS) or VOR only.
- **Approaches (names only — verify minima on current AIRAC charts):**

| RWY | Approach | Notes |
|---|---|---|
| 09 | RNAV (GNSS) RWY 09; VOR RWY 09 (BTZ) | No ILS/NDB on this direction |
| 27 | ILS RWY 27 (BZ, 111.35); RNAV (GNSS) RWY 27; NDB RWY 27 (BZ); VOR RWY 27 (BTZ) | Field's sole CAT I precision direction |

- **STARs (names only — current per IVAO France operational reference, AIRAC 2607):** RWY 09 — **DONOS 3R, MAGEC 3R, SOVOS 3R, SSN 3R** (RNAV); **MAGEC 3M, SOVOS 3M** (conventional). RWY 27 — **DONOS 3S, MAGEC 3S, SOVOS 3S** (RNAV); **DONOS 3V, MAGEC 3V, SOVOS 3V** (conventional). 🟧 Names cross-checked against an older (2011) primary-AIP STAR chart set using related fix names (ENSAC/BIDAC/DONOS/MAGEC/SOVOS) — current suffixes/routings not independently re-verified against the very latest AIRAC; pull the live procedure list at planning.
- **LVP:** Trigger conditions per current operational reference: **RVR < 800 m or ceiling < 200 ft**; RWY 27 is certified for **CAT I** only (no CAT II/III infrastructure). 🟧
- **Missed approach watch-items:** **Terrain to the south is the primary missed-approach concern** given §3.1 — confirm the published missed-approach track and climb gradient stay clear of the high ground, and do not assume a southerly climb-out is available as a contingency.

---

## 11. Departure

- **SIDs (names only — current per IVAO France operational reference, AIRAC 2607):** RWY 09 — **DONOS 3D, SOSTO 3D, SOVOS 3D, SSN 3D, VAVIX 3D** (RNAV); **DONOS 3E, SSN 3E, VAVIX 3E** (conventional). RWY 27 — **DONOS 3F, SOVOS 3F, SSN 3F, VAVIX 3F** (RNAV); **DONOS 3W, SSN 3W, VAVIX 3W** (conventional). 🟧 Cross-checked against an older (2011) primary-AIP SID chart set with related fix names (ENSAC/BIDAC/DONOS/SSN) — fly the charted current-AIRAC version; names not independently re-verified against the very latest cycle.
- **RNP / climb-gradient requirements:** STAR/SID RNAV procedures require **RNAV1 with GNSS sensor only** per the primary-AIP general-rules page; conventional (CONV) procedures are available on pilot request. Omnidirectional-departure ATS gradients are notably steep given the southern terrain — **RWY 09: 4.2–4.5% to 1.9 NM BTZ; RWY 27: 5.8–6% to 2.6 NM BTZ**; HIG-bound departures require **9.2% (off 27) / 5% (off 09)**. Report any inability to meet a specified gradient to Approach at the start-up clearance request. See [`OM E — PBN and RNP Operations`](../../../../../flight-ops/pbn-and-rnp-operations.md).
- **Take-off minima:** Not confirmed from a primary table this pass. 🟧
- **Start-up / push-back:** Not individually detailed in the reachable extract — confirm locally.
- **ATC slot / CTOT & clearance:** No slot-coordination level identified — general EUROCONTROL ATFM/CTOT practice assumed, not independently LFBZ-sourced. 🟧
- **De-icing:** Not confirmed in the reachable extract this pass — verify locally. See [`OM E — Cold Weather Operations`](../../../../../flight-ops/cold-weather-operations.md).

---

## 12. Noise & Environmental

- **Noise abatement (NAP):** Jet aircraft: **take-off power to 1,500 ft at V2+10**; at 1,500 ft, set climb power per noise-abatement procedures at V2+10; **no restriction from 3,000 ft**. **RWY 09 must be used preferentially for take-offs** during a defined night window — primary-AIP cycle states **1900–0600 (winter +1 hr)**; current (2026) operational reference states approximately **2000–0700 local**, "whenever conditions permit" — treat the current reference as the operative figure and flag the discrepancy for confirmation against live AIRAC. 🟧
- **Night noise / dB limits:** No published per-movement dB limit found; the RWY 09 preferential-departure rule above is the field's primary night-noise mitigation.
- **Engine run-up restrictions:** Not confirmed in reachable sources — verify locally. 🟧
- **Reverse thrust / idle-reverse policy:** Not confirmed in reachable sources — verify locally. 🟧
- **Visual-approach noise constraint:** Aircraft flying a visual approach must join the final runway track by **3 NM from BTZ (RWY 09)** or **2 NM from BTZ (RWY 27)** specifically to reduce noise over urban areas — treat as a hard join-point, not a suggestion.

---

## 13. Ground operations

- **Stands for our types:** Traffic areas are split into **Aire Alpha** and **Aire Bravo** (general aviation — PPR 48 h required for restricted stands, contact via the airport's General Aviation service) and **Aire Charlie** (commercial aviation); a Hotel helicopter line (H1/H3, max length 13.73 m) is separate. K Global Category S stand allocation on Aire Charlie is not individually confirmed. 🟧
- **Push-back:** Aircraft with **MTOW > 37 t must use the runway-end turnaround pads** for a U-turn — mid-taxiway turnbacks are not provided for that weight class.
- **Standard taxi routes:** **TWY N** runs parallel to the runway connecting the terminal areas; **TWY S1** (closed at night) connects the runway to parking area K.
- **Hot spots / tight taxiways:** 🟥 **TWY N1 and S1 are prohibited at night** and prohibited by day below **RVR 800 m**; **TWY N1 is usable only by aircraft with wingspan < 18.5 m and main-gear track < 6 m**.
- **Follow-me:** Not individually confirmed for K Global's expected stand area — the field's general-aviation aprons (Alpha/Bravo) require prior arrangement via the GA handling service; APU use at any stand is time-limited to **30 min after arrival / 30 min before departure**.

---

## 14. Weather & seasonal (durable)

- **Climate / prevailing wind:** Atlantic-coastal Basque climate; the field can be "invaded within minutes" by sea fog per current operational guidance — the coastline's onshore-flow fog risk is the field's most distinctive weather characteristic.
- **Seasonal hazards:** Coastal sea-fog (any season, but most disruptive in cool/stable conditions) and standard Atlantic frontal-passage weather; no field-specific fog-frequency statistic quantified this pass. 🟧
- **Local effects:** Coastal terrain interacts with the significant relief immediately south of the field (§3.1) — expect local wind/terrain-channelling effects near the high ground; not independently quantified this pass.

> **Live weather — pull at planning (T-2h):** METAR, TAF, TREND, SIGMET/AIRMET. Not stored here.

---

## 15. NOTAMs

> **Pull at planning (T-2h).** Perishable — not stored here. Check: runway/taxiway closures (esp. TWY N1/S1 night/RVR status), navaid U/S, ILS 27 status, lighting, obstacle/crane, RFF downgrade, GPS/RAIM for RNAV(GNSS) procedures, San Sebastian (LESO)-related coordination bulletins. Source: official AIS / OFP NOTAM block.

---

## 16. Fuel & alternate planning notes

- **Typical role for us:** Category S destination/enroute field within the K Global network (not a base).
- **Nearest suitable alternates:** Company preferred alternates **LEMD** ([Madrid-Barajas](../../spain/lemd/index.md)), **LFBD** ([Bordeaux-Mérignac](../lfbd/index.md)), **LEPA** (Palma de Mallorca — no OM C entry yet 🟧) `[VAMSYS mirror 2026-07-26]` — confirm suitability, runway/RFF adequacy and current minima per leg.
- **Fuel-uplift notes:** Jet A1 (TR.0, company-contract/voucher-based) and Avgas 100LL (self-service TOTAL-card dispenser; access for helicopters via taxi, may not be provided to fixed-wing aircraft > 13 m wingspan) per a 2011–2012-cycle extract — hours and provider not re-confirmed against current AIRAC. 🟧 See [`OM E — Fuel Policy`](../../../../../flight-ops/fuel-policy.md).
- **Range/perf flags for our fleet:** Field length (2,250 m) and the 205 m displaced threshold on RWY 09 are non-limiting for K Global Category S operations. See [`OM B — Fleet Capability Matrix`](../../../../../fleet/capability-matrix.md).

---

## 17. Fleet-specific notes (optional)

- No LFBZ-specific type consideration beyond the general terrain/coastal-fog TEM items (§3.1/§3.4), which apply to any K Global Category S type operating here. See [`OM B — Fleet Capability Matrix`](../../../../../fleet/capability-matrix.md).

---

## 18. Open items (🟧 — confirm against AIP / current AIRAC)

- **Magnetic variation** — reachable primary-AIP chart (2010 epoch) states 1° W; current operational cross-check states ~0.9° E; large apparent discrepancy not reconciled this pass.
- **RFF category and hours** — sourced to a tier-4 web summary (CAT 7, 0515–2200, CAT 8 on 48 h PPR), not confirmed from a primary AD 2.6 table.
- **Curfew/ATS-hours extension mechanics** — 0430–2100 base hours with a pre-1400 extension-request process; not independently re-confirmed against current AIRAC.
- **Preferential night-departure window** — primary-AIP cycle states 1900–0600 (winter +1 hr); current operational reference states ~2000–0700; discrepancy flagged, current reference treated as operative.
- **SIDs/STARs (current exact names/suffixes)** — cross-checked between a 2011 primary chart set and a current (2026) operational reference with consistent fix names but not independently re-verified against the very latest AIRAC.
- **Take-off minima, transition level, engine run-up restriction, reverse-thrust/idle-reverse policy, follow-me availability, customs/immigration hours, fuel hours/provider (current).**
- **Bordeaux (LFBB) ACC/FIR brief** — does not yet exist in OM C Airspace; this field currently links only to the general [Europe Airspace Briefing](../../../../airspace/europe.md).
- **LEPA (Palma de Mallorca)** — no OM C airport entry exists yet for this company-preferred alternate.

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim material (current-AIRAC charts) informs content but is not listed here.*

- **SIA France eAIP-derived AD 2 LFBZ chart extract** (ADC 01, GMC 01, APDC 01/02, DATA 01, IAC 01–08, SID/STAR charts), amendment cycle carries dates 2010–2013 (e.g. AMDT 10/11, AMDT 02/13) — mirrored via http://www.jpair.fr/ateliers_pratiques/initiation_aeroclub/bastia_biarritz/1303_AD-2.LFBZ_2.pdf and _3.pdf (retrieved 2026-07-26). *Primary source for ARP, elevation, runway/declared distances, navaids, SID/STAR fix structure, noise-abatement gradients, TMA/CTR structure. Treat exact current-cycle figures (mag var, frequencies, RFF) as needing a live-AIP cross-check given the extract's age.*
- **IVAO France Division — Airport Operations Manual, LFBZ Biarritz Pays Basque**, updated 2026-07-09 (AIRAC 2607) — https://wiki.ivao.fr/books/manex-aeroports-civils/page/lfbz-biarritz-pays-basque (retrieved 2026-07-26). *Current operational cross-check of runway/declared distances, frequencies, mag variation, preferential-runway logic, LVP trigger, SID/STAR names, transponder/CPDLC handling. Network-simulation document, not regulatory — used here only to corroborate/update the older primary-AIP extract; any discrepancy is flagged above.*
- Wikipedia — "Biarritz Pays Basque Airport" — https://en.wikipedia.org/wiki/Biarritz_Pays_Basque_Airport (retrieved 2026-07-26). *Cross-check for displaced-threshold figure.*
- OurAirports — https://ourairports.com/airports/LFBZ/ (retrieved 2026-07-26). *Cross-check only.*

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-26 | Built from SIA France eAIP; K Global fields from live VAMSYS; 4-page pack. |
