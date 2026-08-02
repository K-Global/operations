# LFSB — Basel-Mulhouse · Airport Briefing

**LFSB / BSL** · Saint-Louis, Haut-Rhin, France (EuroAirport Basel-Mulhouse-Freiburg — trinational field, published in the French AIP) · Europe
**Version** v0.1 · **Updated** 2026-07-26 · **Status** Draft

> **Read-me:** Planning aid for the sim, not a chart. Static data is drawn from the SIA France eAIP (AD 2 LFSB); approaches/SIDs/STARs are listed **by name only or flagged not-yet-confirmed** — fly the charted current-AIRAC version. Live weather/NOTAMs are pulled at planning (§14/§15). Open 🟧 items are listed in §18. Flag legend 🟥 restriction/hazard · 🟧 caution/unverified · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| ARP (lat/long) | 47°35′24″N / 007°31′45″E (47.5900, 7.5292) — at the intersection of the RWY 15/33 and RWY 07/25 centrelines |
| Field elevation | **885 ft AMSL** (reference temperature 28.48°C; geoid undulation 160 ft) |
| Mag variation | **3.1804° E** (2025.0 epoch, annual change +0.126°/yr) — 🟧 extrapolates to roughly ~3.3° E in 2026 by linear drift; not an independently re-confirmed current-AIRAC figure |
| Time zone | UTC+1 (CET) / UTC+2 (CEST, EU DST observed) |
| Runway(s) | **07/25** 1,860 × 60 m concrete (asymmetric one-way pair — RWY 07 **landing prohibited**) · **15/33** 3,900 × 60 m concrete (RWY 15 CAT III, RWY 33 CAT I only) — the two pairs **physically cross** at the ARP |
| Preferential runway | Wind/ATC-dependent; not detailed in the reachable AIP extract 🟧. Structurally, 15/33 is the longer, CAT III/RNP-equipped pair and the more capable default; 07/25 is shorter and asymmetric (07 takeoff-only, 25 landing+takeoff but PAPI-mandatory) |
| Longest LDA | **3,900 m (RWY 15)** |
| Approaches | **ILS CAT III RWY 15** (ident MH); **ILS CAT I RWY 33** (ident BLU); **RNP approaches RWY 15 and RWY 33**; RWY 25 has no published ILS in this extract — PAPI-referenced only, PAPI use **mandatory**; **RWY 07 has no approach — landing prohibited** |
| RFF category | Published **RFFS Level 9** (max); standing H24 provision is **Level 7**; Level 9 (for ICAO aircraft categories 8+) available only **on request, 48 h prior notice** 🟧 |
| Control type | **Radar** — BALE Approche/BALE Control, delegated across **Zurich ACC** and **Langen ACC (DFS)** sectors — see §3.2 |
| Elevation class | Near sea-level (885 ft) — **not** hot-and-high 🟩 |
| Special-airport status | 🟥 **Binational (French-Swiss) administration**; complex multi-agency delegated CTR; physically **crossing runway pairs**; asymmetric one-way/PAPI-restricted runway geometry; strict binational noise-curfew regime — see §5/§12 |
| Customs / PoE | **Yes** — French customs 0400–2300, Swiss customs 0415–2300, immigration H24 🟧 (not full H24 customs coverage) |
| K Global category | **H** `[VAMSYS mirror 2026-07-26]` |
| K Global base | **No** `[VAMSYS mirror 2026-07-26]` |
| Company preferred alternates | **LSZH, LSGG, EDDS** `[VAMSYS mirror 2026-07-26]` |
| Taxi-in / taxi-out (VAMSYS) | **13 min / 16 min** `[VAMSYS mirror 2026-07-26]` |

---

## 2. Validation summary

| Domain | Flag | Note |
|---|---|---|
| Terrain / CFIT | 🟩 | Upper Rhine plain siting at 885 ft AMSL; no close-in high terrain identified in the reachable AIP extract; not hot-and-high. Exact MSA/terrain figures not independently sourced this pass — see §18. |
| Runway length vs fleet perf | 🟩 | RWY 15/33 (3,900 m) non-limiting for any K Global type. RWY 07/25 (1,860 m) is short and asymmetric (07 takeoff-only) but not the primary pair. |
| Approach availability / minima | 🟥 | RWY 15 is the only CAT III-equipped end; its physical reciprocal RWY 33 is **CAT I only** — in low-vis with wind favouring 33, no autoland/CAT III capability is available. RWY 25 has no published ILS (PAPI-referenced only). RWY 07 has no approach at all. |
| Airspace / traffic / control | 🟥 | Trinational CTR BALE split into 4 sub-parts (Class D, SFC–1,000 ft) delegated across **two different upper-airspace ACCs in two states** (Zurich ACC; Langen ACC), overlaying physically crossing runway pairs — see §3.2. |
| Weather / seasonal hazard | 🟧 | Not published / verify — no LFSB-specific seasonal-hazard data captured in this research pass. |
| Curfew / slots / hours | 🟥 | Binational noise decree (Arrêté du 6 août 2021) — hard Chapter-3 (>97 EPNdB) night landing ban 2300–0800, general commercial curfew provisions, and an administrative fine of up to **€40,000**; **COHOR**-coordinated slot regime (exact IATA level not confirmed). |
| RFF category vs our types | 🟧 | Standing H24 provision is Level 7; Level 9 (required for ICAO aircraft category 8+) needs 48 h advance phone notice — not a standing service. |
| Fuel availability | 🟧 | SASCA/KLINZING cover 0400–2200; outside those hours, uplift is restricted to scheduled/delayed commercial, State and MEDEVAC flights via an alternating-month standby line, with notice required before 2000 local. |
| Customs / handling / security | 🟧 | French customs 0400–2300, Swiss customs 0415–2300, immigration/police H24 — near round-the-clock but not full H24 customs; confirm for late-night/early-morning schedules. |

---

## 3. Threat & Error Management (TEM)

### 3.1 CFIT / Terrain 🟩
LFSB sits at 885 ft AMSL (reference temperature 28.48°C) in the Upper Rhine plain. The reachable SIA France eAIP extract for AD 2 LFSB identifies no close-in high terrain relevant to arrival, departure or missed-approach paths, and the field is not hot-and-high. This is not the operative threat here — verify the MSA ring/grid on the current chart as routine practice; exact MSA sector values were not independently captured in this research pass 🟧 (§18).

### 3.2 Airborne conflict / traffic 🟥
LFSB's two runway pairs — 07/25 (1,860 m) and 15/33 (3,900 m) — **physically cross**: the ARP itself is defined at the intersection of the RWY 15/33 and RWY 07/25 centrelines. Overlaying that crossing-runway geometry is an unusually fragmented control structure: **CTR BALE** is divided into four Class D sub-parts (SFC to 1,000 ft ASFC) — a Franco-Swiss part with ATS delegated to BALE Tower **by Zurich ACC**, and three separate German sub-parts (North/East/South) all delegated to BALE Tower **by Langen ACC (DFS)**. Further out, **BALE APP** holds delegated responsibility for the **STAUFEN AREA** (four sub-sectors) from Langen ACC, and separately for **AWY G4** portions and sectors **AZ1–AZ4/T1–T3** from Zurich ACC. In effect, a single unified "BALE" tower/approach service operates across three national airspaces on delegation from two different upper-airspace authorities in two different states — a genuine source of potential confusion for crews unfamiliar with the field, and a standing controller-workload driver given the crossing-runway geometry beneath it. Cross-ref [Europe (Continental) airspace briefing](../../../../airspace/europe.md) — 🟧 there is currently **no dedicated FIR brief for Reims ACC (LFEE)**, which owns the upper-airspace structure over this part of eastern France; only the general continental page is available in-library (§18).

### 3.3 Runway excursion 🟥
Runway selection is the standing threat at LFSB, not excursion tendency in the generic sense. **RWY 07 is takeoff-only** in practice — it publishes TORA/TODA/ASDA (1,715 m each) but **LDA 0**, and landing on RWY 07 is explicitly prohibited. Its reciprocal RWY 25 carries a displaced threshold (DTHR 884 ft) that trims LDA to 1,600 m against a 1,860 m TORA. On the long pair, **RWY 33** carries a larger displaced threshold (DTHR 880 ft) that reduces LDA to **2,780 m** against the full 3,900 m TORA — a ~1,120 m reduction that must be briefed explicitly; **RWY 15**, the reciprocal, has no displaced threshold and the full 3,900 m is LDA. Never assume either runway pair is symmetric or bidirectional for landing purposes.

### 3.4 Weather threat 🟧
No LFSB-specific seasonal meteorological hazard data (fog frequency, prevailing wind, convective season) was captured from the reachable AIP extract in this research pass — marked "Not published / verify." The field's Upper Rhine valley location is suggestive of winter fog/inversion potential broadly analogous to other Rhine-basin airfields, but this is **not** an AIP-sourced fact and must not be treated as one; pull current METAR/TAF/TREND and seasonal climatology separately (§14).

### 3.5 Operational considerations 🟥
Code F aircraft (A380-800, B747-8F, Antonov 124, Lockheed C-5 Galaxy, Antonov 225) are subject to a dense set of mandatory ground procedures at LFSB: runway entry/exit only via the thresholds (never mid-runway), mandatory use of the **CAT III holding points** (150 m from centreline), and — for the A380 and An-225 specifically — mandatory **FOLLOW-ME** escort and engine-shutdown/tow requirements over defined taxiway sections (TWY Q between the SW maintenance areas and holding point Q; TWY B interacts with a parallel service road that closes during any A380 movement between THR 15 and TWY G). B777-300/A340-600/A350-1000-class aircraft have separate wheelbase-driven taxiway restrictions (AIP chart GMC02 — chart reference only, not transcribed here). Combined with the crossing-runway geometry and multi-agency CTR delegation above, this makes LFSB a field where ground-movement planning for anything beyond a standard narrowbody/mid-size widebody warrants a specific pre-flight review. See [`OM B — Fleet Capability Matrix`](../../../../../fleet/capability-matrix.md) for type applicability.

---

## 4. Cautions & Warnings

- **RWY 07 landing is PROHIBITED (LDA 0)** — never plan or accept a landing clearance on RWY 07; it is takeoff-only.
- **RWY 25 approach/landing is PROHIBITED if the PAPI or runway-threshold identification lights are unserviceable** — PAPI use is mandatory day and night.
- **RWY 33 is CAT I only** — the CAT III-capable end is RWY 15 (its physical reciprocal); in low-vis with wind favouring RWY 33, no autoland/CAT III capability exists on that runway.
- **Trinational CTR (BALE) is split into 4 sub-parts delegated across two different upper ACCs** (Zurich ACC and Langen ACC/DFS) — confirm the correct sector/agency for the segment being flown.
- **U-turns are forbidden anywhere on the platform** (taxiways and runways) for all aircraft.
- **Low-visibility ground-control limitation:** ATC may be unable to advise crews of obstacles on **TWY C/C1** and near the **Jet Aviation/Swiss maintenance gate north of THR 25** — maintain heightened vigilance in this area.
- **TWY A, C, C1, J, K are wingspan-restricted (<36 m)** — not usable by Code E/F aircraft.
- **Pushback approval is valid for only 1 minute** — pushback must begin within that window of the approval.
- **Binational noise decree:** hard Chapter-3 (>97 EPNdB) night landing ban 2300–0800, general commercial curfew clauses, and an administrative fine of up to **€40,000** for non-compliance (§12).
- **De-icing is NOT provided overnight, 0000–0600 local.**

---

## 5. Aerodrome category, restrictions & crew qualification

- **Special-airport / category:** Not formally categorised as a crew-restricted "special airport" in the reachable extract, but genuinely complex given the binational administration, multi-agency delegated airspace, and asymmetric/PAPI-restricted runway geometry. 🟥
- **Crew-qualification gate:** CAT III currency required to exploit RWY 15's low-vis capability; RWY 33 caps at CAT I regardless of crew currency (a ground-infrastructure limit, not a crew one). Code F operations (A380/An-225-class) require FOLLOW-ME escort and CAT III holding-point procedures per §13 — relevant only if such types are operated into this field. 🟧
- **Operating restrictions / bans:** RWY 07 landing prohibited; RWY 25 approach/landing prohibited if PAPI/threshold-identification lighting is unserviceable. A reduced-runway-separation-minima procedure exists but applies only to single-engine propeller aircraft flying VFR under national regulation — not relevant to the K Global fleet.
- **Overflight / entry / permits:** Standard international arrival; both French and Swiss customs operate on-site with different hours — confirm the correct desk for passenger nationality/flow. No special state overflight permit identified. 🟧
- **Operations notes:** Binational public body ("Etablissement Public Franco-Suisse Aéroport de Bâle-Mulhouse") administers the field, with addresses in both Saint-Louis, FRANCE and Basel, SUISSE. Slot coordinator: **COHOR** (French national slot coordinator).

---

## 6. General / hours / services

| Item | Value | Flag |
|---|---|---|
| ATS hours | H24 | 🟩 |
| AD operating hours | AD administration H24; police aux frontières H24; health services H24; MET office H24 | 🟩 |
| Night / curfew restrictions | Binational decree — Chapter-3 (>97 EPNdB) night landing ban 2300–0800 (2100–2300 Sundays/joint FR-CH public holidays); general commercial-flight curfew clauses (a)/(d)/(e)/(f) — see §12 | 🟥 |
| RFF category | Level 7 standing H24; Level 9 (Cat 8+ aircraft) on request, 48 h prior notice | 🟧 |
| Fuel | JET A1 (CIV-MIL) and AVGAS via SASCA and KLINZING Aviation, 0400–2200; after-hours restricted to scheduled/delayed commercial, State and MEDEVAC flights via standby line (odd months SASCA, even months KLINZING) | 🟧 |
| PCN | RWY 07/25: 75 R/A/W/T · RWY 15/33: 90 R/B/W/T · South apron/cargo: 68 F/B/W/T (cargo 72 R/B/W/T) · North apron/express-freight: 68 F/B/W/T (express-freight 50 R/B/W/T) | 🟩 |
| Customs | French customs 0400–2300; Swiss customs 0415–2300; immigration H24 | 🟧 |
| Handling / FBO | Jet Aviation, AMAC, Air Service Basel (ASB), NOMAD, SR Technics; also Swissport, CGS. Cargo handling facilities present. Primary agent for K Global not confirmed | 🟧 |

---

## 7. Runways & declared distances

| RWY | Dimensions | Surface / PCN | TORA | TODA | ASDA | LDA | Notes |
|---|---|---|---|---|---|---|---|
| 07 | 1,860 × 60 m | Concrete / PCN 75 R/A/W/T | 1,715 m | 1,715 m | 1,715 m | **0 m** | THR elev 881 ft. **Landing PROHIBITED** — takeoff-only |
| 25 | 1,860 × 60 m | Concrete / PCN 75 R/A/W/T | 1,860 m | 1,960 m | 1,860 m | 1,600 m | THR elev 883 ft, **DTHR 884 ft**. Intersection departures: TWY C1 (1,600/1,700/1,600), TWY V (1,250/1,350/1,250). RESA 90×120 m both ends |
| 15 | 3,900 × 60 m | Concrete / PCN 90 R/B/W/T | 3,900 m | 4,000 m | 3,900 m | 3,900 m | THR elev 864 ft, no DTHR. Intersection departures: TWY F (1,870/1,970/1,870), TWY G (2,370/2,470/2,370), TWY H (3,000/3,100/3,000). RESA 170×120 m. CAT III (approach lighting 862 m LIH-LED; CAT III centreline 896 m @15 m spacing, extending to full 3,900 m) |
| 33 | 3,900 × 60 m | Concrete / PCN 90 R/B/W/T | 3,900 m | 4,000 m | 3,900 m | **2,780 m** | THR elev 882 ft, **DTHR 880 ft**. Intersection departure: TWY D (2,900/3,000/2,900). RESA 240×120 m. CAT I only |

*Source: SIA France eAIP — AD 2 LFSB, eff. 14 MAY 2026, AIRAC 09 JUL 2026 (retrieved 2026-07-26). Transverse slope of RWY 15/33 between 0.67% and 1.15% across its width, except at the crossing-runway connection zones. All distances in metres.*

---

## 8. Communications

| Service | Callsign | Frequency | Hours | Notes |
|---|---|---|---|---|
| ATIS | BALE ATIS | 127.880 | H24 | Broadcasts ARR/DEP parameters and activity of danger areas LF-R125 and LF-R127 |
| Delivery | BALE Prevol | 121.955 | H24 | |
| Ground | BALE Sol | 121.605 | H24 | |
| Tower | BALE Tour | 118.300 (+129.250 aux) | H24 | Takeoff and final approach |
| Approach | BALE Approche / BALE Control | 125.160 (aux), 127.285, 128.910 (on ATC instruction), 129.250 (aux), 130.900 (on ATC instruction), 133.510, 125.415, 126.990 | H24 | Sector-specific, mostly 8.33 kHz spacing — delegated across Zurich ACC and Langen ACC sectors (§3.2) |
| FIS | BALE Information | 129.250 (aux), 130.900, 134.680 (8.33, RAI sector T1/T2/T3 activation), 135.850 | H24 | |
| VDF | BALE Gonio | 118.300 / 128.910 / 130.900 / 133.510 | — | |
| Centre / FIR | Zurich ACC · Langen ACC (DFS) · Reims ACC (LFEE, upper airspace of record for eastern France) | Per current AIRAC | H24 | See [Europe (Continental) airspace briefing](../../../../airspace/europe.md) — 🟧 no dedicated Reims (LFEE) FIR brief exists in-library yet |

---

## 9. Navaids

| Aid | Ident | Freq | Hours | Notes |
|---|---|---|---|---|
| VOR/DME | BLM | 117.45 (CH121Y) | H24 | On field |
| ILS RWY 15 | MH | 111.55 (LOC); GP 332.75, slope 3° | H24 | **CAT III** — DME CH52Y |
| ILS RWY 33 | BLU | 109.35 (LOC); GP 331.85, slope 3.5° | H24 | **CAT I only** — DME CH30Y |

*RWY 15 is the field's CAT III precision runway; RWY 33 (its physical reciprocal on the long pair) is CAT I only. No ILS is published for RWY 25 or RWY 07 in this extract.*

---

## 10. Arrival

- **Transition altitude / level:** TA fixed at **7,000 ft**; TL calculated by BALE APP. Altimeter setting in the TMA: 1013.2 hPa.
- **Speed:** Standard 250 KIAS below FL100 (EU/ICAO norm) — confirm no local override on current chart.
- **Preferential runway logic:** Not detailed in the reachable extract 🟧. RWY 07 can never be a landing runway; RWY 25 requires serviceable PAPI/threshold-identification lighting; RWY 15 and RWY 33 are the primary landing options on the long pair.
- **Approaches (names only — verify minima on current AIRAC charts):**

| RWY | Approach | IAF | FAF/FAP alt | Notes |
|---|---|---|---|---|
| 07 | — none — | — | — | **Never a landing runway** |
| 25 | PAPI-referenced (no ILS in this extract) | Not published / verify 🟧 | Not published / verify 🟧 | PAPI mandatory day/night; approach prohibited if PAPI/threshold-ID lights U/S 🟥 |
| 15 | ILS CAT III (MH); RNP approach | Not published / verify 🟧 | Not published / verify 🟧 | CAT III 🟩 |
| 33 | ILS CAT I (BLU); RNP approach | Preferentially radar-vectored; a charted initial approach (AD 2 LFSB IAC RWY33 VPT B) exists but is usable only on ATC instruction | Not published / verify 🟧 | CAT I only 🟧 |

- **STARs (names only):** A single conventional STAR construct applies across all runways (charted generically, no distinctive public name) — pull the current-AIRAC procedure at planning. 🟧
- **LVP:** CAT III infrastructure exists only on RWY 15; trigger RVR values not confirmed this pass. 🟧
- **Missed approach watch-items:** Not terrain-driven (no close-in high terrain identified); the operative concern is re-sequencing within the multi-agency delegated CTR and around the physically crossing runway pairs.

---

## 11. Departure

- **SIDs (names only — fly the charted version):** RNAV SIDs exist for both RWY 15 and RWY 33 ("SID RWY15 RNAV" / "SID RWY33 RNAV" — no distinctive public name). SID names for RWY 07/25 were not confirmed in this extract. 🟧
- **RNP / climb-gradient requirements:** RNP approaches are published for RWY 15 and RWY 33 alongside the ILS; RNAV SID gradient/equipage details are not transcribed here — verify on the current chart. See [`OM E — PBN and RNP Operations`](../../../../../flight-ops/pbn-and-rnp-operations.md).
- **Take-off minima:** Published per AIP; exact figures not confirmed this pass. 🟧
- **Start-up / push-back:** Pushback approval is **valid for only 1 minute** — pushback must begin within that window.
- **ATC slot / CTOT & clearance:** LFSB is **COHOR-coordinated** (French national slot coordinator); exact IATA level (2 vs 3) not independently confirmed this pass. 🟧
- **De-icing:** Provided except overnight **0000–0600 local**. Dedicated stands up to Code C at **F5, F6, F7 and the North corridor**; Code D and above are de-iced on stand. See [`OM E — Cold Weather Operations`](../../../../../flight-ops/cold-weather-operations.md).

---

## 12. Noise & Environmental

- **Noise abatement (NAP):** Governed by a binational French-Swiss decree, **"Arrêté du 6 août 2021 portant restriction d'exploitation de l'aérodrome de Bâle-Mulhouse,"** plus a **July 2023 decree** on APU use during stopovers. Chapter 3 (ICAO Annex 16) aircraft whose certified noise level at the approach reference point exceeds **97 EPNdB** may not land **2300–0800**, nor **2100–2300 on Sundays** and joint French/Swiss public holidays (1 January, Good Friday, Easter Monday, 1 May, 25 December, 26 December) — all winter local times, summer −1 hr.
- **Night noise / dB limits:** Beyond the Chapter-3 landing ban, general commercial-flight restrictions apply (winter LT, summer −1 hr): no commercial flight may **land 2300–0400**; no commercial flight may leave the parking stand for takeoff between 2300 and (per the pattern in this clause) approximately **0500** — 🟧 the exact end-of-window hour was not independently re-confirmed this pass; verify against current AIP **AD 2 LFSB.21.1.2.3.1**. No commercial flight may leave the stand **2200–2300** unless it was delayed for reasons beyond the carrier's control (in which case a 2200–2300 takeoff is permitted, with the carrier required to supply reasons to the civil aviation authorities within 48 hours). Non-compliance can lead to an ACNUSA-equivalent administrative fine of up to **€40,000** for a corporate entity.
- **Engine run-up restrictions:** Not confirmed in reachable sources — verify locally. 🟧
- **APU use:** Limited per the July 2023 decree; the pattern is consistent with other French fields (before-departure/after-arrival windows), but exact LFSB-specific minute figures were not captured in this research pass. 🟧 Do not treat the analogous LFST (Entzheim) or LFRS (Nantes-Atlantique) APU windows as LFSB fact — reference as pattern only, verify locally.

---

## 13. Ground operations

- **Stands for our types:** South main parking + Cargo apron (concrete, 68 F/B/W/T; cargo apron 72 R/B/W/T) and North main parking + express-freight apron (mixed concrete/asphalt, 68 F/B/W/T; express-freight 50 R/B/W/T). Average apron elevations: passenger apron 879 ft, express-freight 881 ft, cargo 876 ft. 🟧
- **Push-back:** Approval valid for 1 minute only — must begin within that window. Mandatory-vs-self-manoeuvre policy by code letter not confirmed. 🟧
- **Standard taxi routes:** Confirm with Ground/Apron on the day; expect crossing instructions given the physically crossing runway pairs.
- **Hot spots / tight taxiways:** 🟥 **TWY A, C, C1, J, K are wingspan-restricted (<36 m)** — not usable by Code E/F aircraft. **TWY C/C1** and the area near the **Jet Aviation/Swiss maintenance gate north of THR 25** are flagged for reduced ATC obstacle-advisory capability in low visibility. **U-turns are forbidden anywhere on the platform** (taxiways and runways) for all aircraft.
- **Follow-me:** Mandatory for **A380-800** operations on dedicated taxiways, and for **Antonov 225** movements. Not otherwise confirmed as a general-availability service. 🟧
- **Code F special procedures:** A380-800, B747-8F, Antonov 124, Lockheed C-5 Galaxy and Antonov 225 must enter/vacate the runway only via the thresholds and use the CAT III holding points (150 m from centreline) — see §3.5 for full detail. When a Code F aircraft is on TWY B between TWY F and TWY L, no other aircraft may be on TWY A or the express-freight apron.
- **Hangar space:** 5 hangars, heated, very limited availability for visiting aircraft. 🟧

---

## 14. Weather & seasonal (durable)

- **Climate / prevailing wind:** Not published / verify — no LFSB-specific climatology captured in this research pass. 🟧
- **Seasonal hazards:** Not published / verify. The Upper Rhine valley siting suggests possible winter fog/inversion potential broadly analogous to other Rhine-basin fields, but this is not an AIP-sourced fact. 🟧
- **Local effects:** Not published / verify. 🟧

> **Live weather — pull at planning (T-2h):** METAR, TAF, TREND, SIGMET/AIRMET. Not stored here.

---

## 15. NOTAMs

> **Pull at planning (T-2h).** Perishable — not stored here. Check: runway/taxiway closures (especially near the crossing-runway junctions and the Code F-restricted taxiways), navaid U/S (especially the RWY 15 ILS/CAT III equipment status), lighting (PAPI serviceability is a hard RWY 25 approach gate), obstacle/crane, RFF downgrade, GPS/RAIM for RNP procedures, TFR. Source: official AIS / OFP NOTAM block.

---

## 16. Fuel & alternate planning notes

- **Typical role for us:** Destination / diversion field, not a base — 🟧 exact route assignment not specified in this build; confirm against the current route register.
- **Nearest suitable alternates:** Company preferred alternates [**LSZH — Zurich**](../../switzerland/lszh/index.md), [**LSGG — Geneva**](../../switzerland/lsgg/index.md) and **EDDS** (Stuttgart — no curated brief exists in-library yet 🟧) `[VAMSYS mirror 2026-07-26]` — confirm suitability, runway/RFF adequacy and current minima per leg.
- **Fuel-uplift notes:** JET A1 (CIV-MIL) and AVGAS via SASCA and KLINZING Aviation, 0400–2200; after-hours uplift is restricted (§6/§11). See [`OM E — Fuel Policy`](../../../../../flight-ops/fuel-policy.md).
- **Range/perf flags for our fleet:** RWY 15/33 (3,900 m) non-limiting for any K Global type; RWY 07/25 (1,860 m, one-way/PAPI-restricted) is not the primary planning runway. See [`OM B — Fleet Capability Matrix`](../../../../../fleet/capability-matrix.md).

---

## 17. Fleet-specific notes (optional)

- Code F aircraft (A380-800, B747-8F, Antonov 124, Lockheed C-5 Galaxy, Antonov 225) face field-specific ground-movement mandates at LFSB (thresholds-only runway entry/exit, CAT III holding points, FOLLOW-ME, tow requirements — §3.5/§13); B777-300/A340-600/A350-1000-class types have separate wheelbase-driven taxiway restrictions per AIP chart GMC02 (chart reference only). See [`OM B — Fleet Capability Matrix`](../../../../../fleet/capability-matrix.md) for type-by-type applicability before planning any of these types into LFSB.

---

## 18. Open items (🟧 — confirm against AIP / current AIRAC)

- **Magnetic variation current-day value** — sourced to a 2025.0 epoch (3.1804° E, +0.126°/yr); 2026 extrapolated value not independently re-confirmed against current AIRAC.
- **Preferential runway / prevailing wind logic** — not detailed in the reachable extract.
- **RFF Level 9 vs our largest scheduled/diverted type** — confirm ICAO aircraft-category applicability and the 48 h advance-notice process before planning a Code 8+ movement.
- **SID names for RWY 07/25** — not confirmed in this research pass (RWY 15/33 SID names are confirmed as generic RNAV designations).
- **STAR names (current)** — not obtained in this research pass; pull the live current-AIRAC procedure list before use.
- **Take-off minima and exact LVP/CAT III RVR trigger values** — not confirmed this pass.
- **Exact end-hour of the commercial stand-departure curfew window** — pattern-based estimate of ~0500; verify against current AIP AD 2 LFSB.21.1.2.3.1.
- **APU-use minute figures specific to LFSB** — not captured this pass; do not treat the analogous LFST/LFRS pattern as LFSB fact.
- **Slot-coordination level (IATA Level 2 vs 3)** — COHOR-coordinated confirmed; exact level not independently verified.
- **MSA / terrain-sector figures** — no close-in high terrain identified, but exact MSA values not independently captured.
- **Weather / seasonal climatology** — no LFSB-specific data captured this pass.
- **Handling agent specific to the K Global operation** — several agents listed (Jet Aviation, AMAC, ASB, NOMAD, SR Technics, Swissport, CGS); primary contractor not confirmed.
- **Hangar/handling contact details** — availability confirmed as "very limited"; contact specifics not published in this pass.
- **EDDS (Stuttgart) brief** — a K Global preferred alternate for this field, but no curated OM C brief exists in-library yet.

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim material (current-AIRAC charts) informs content but is not listed here.*

- **SIA France (Service de l'Information Aéronautique) eAIP — AD 2 LFSB**, eff. 14 MAY 2026, AIRAC cycle 09 JUL 2026 (retrieved 2026-07-26) — https://www.sia.aviation-civile.gouv.fr/ — declared distances, PCN, navaids, communications, hours/services, fuel, RFF, noise/curfew decree, Code F/A380/An-225 ground procedures, ATS/airspace delegation structure. Primary and sole source for this build; treat any field marked "Not published / verify" as outside the reachable extract, not as a confirmed absence.

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-26 | Built from SIA France eAIP; K Global fields from live VAMSYS; 4-page pack. |
