# LFQQ — Lille-Lesquin · Airport Briefing

**LFQQ / LIL** · Lille, Hauts-de-France, France · Europe
**Version** v0.1 · **Updated** 2026-07-26 · **Status** Draft

> **Read-me:** Planning aid for the sim, not a chart. Static data is drawn from the SIA France eAIP (AIP France, AD 2 LFQQ) plus standard public aeronautical data; approaches/SIDs/STARs are listed **by name only or flagged not-yet-confirmed** — fly the charted current-AIRAC version. Live weather/NOTAMs are pulled at planning (§14/§15). Open 🟧 items are listed in §18. Flag legend 🟥 restriction/hazard · 🟧 caution/unverified · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| ARP (lat/long) | 50°33′48″N / 003°05′13″E (50.56333, 3.08694) — intersection of runway axes, 3.8 NM SSE of Lille `[AIP AD 2 LFQQ.2]` |
| Field elevation | **157 ft / 48 m AMSL** (reference temperature 21.9°C; geoid undulation 144 ft) |
| Mag variation | 🟧 **0° (2010 AIP cycle)** vs **1.96° E** per a 2026 network reference (AIRAC 2603) — genuine drift/discrepancy, not independently reconciled against a current primary AIP table this pass |
| Time zone | UTC+1 (CET) / UTC+2 (CEST, EU DST observed) |
| Runway(s) | **08/26** 2,825 × 45 m (macadam) · **02/20** 1,580 × 30 m (macadam) 🟧 — see §18 on current runway-designator currency |
| Preferential runway | West-facing configuration — **RWY 26 preferred for both departure and arrival**; Tower selects runway-in-use per wind/minima/noise and will accommodate a pilot request for the reciprocal |
| Longest LDA | 2,825 m (RWY 08); RWY 26 LDA reduced to 2,545 m by a displaced threshold (~280 m) — do not assume symmetric distances |
| Approaches | **ILS/LOC (RWY 26, CAT II — sub-category not independently confirmed)**; **RNP (both runways)**; **VOR (both runways)** — see §9/§10 |
| RFF category | 🟥 **CAT 7**, seasonally downgraded to **CAT 5 overnight (2200–0500) 1 Nov–31 Mar**; CAT 7 H24 1 Apr–31 Oct |
| Control type | **Radar** — secondary surveillance radar + MSAW on field; Lille Approach combines the approach **and** departure function (no separate Departure position); handoff to/from **Paris ACC (LFFF)** — see [Europe area brief](../../../../airspace/europe.md) and §18 (FIR confirmation) |
| Elevation class | Near sea-level (157 ft) — **not** hot-and-high; the operative reliability driver is northern-France low-cloud/fog, not density altitude |
| Special-airport status | Not operator-categorised as crew-qualification-restricted; standing cautions are the **winter RFF downgrade**, a published **taxiway hot spot** near holding point P5, and a set of training/visual-approach restrictions — see §5 |
| Customs / PoE | **Yes** — 0500–2200; on-request (O/R) coverage if requested before 1700 🟧 |
| K Global category | **R** `[VAMSYS mirror 2026-07-26]` |
| K Global base | **No** `[VAMSYS mirror 2026-07-26]` |
| Company preferred alternates | **EBBR, EDDF, EHAM** `[VAMSYS mirror 2026-07-26]` |
| Taxi-in / taxi-out (VAMSYS) | **6 min / 8 min** `[VAMSYS mirror 2026-07-26]` |

---

## 2. Validation summary

| Domain | Flag | Note |
|---|---|---|
| Terrain / CFIT | 🟩 | Flat Flanders-plain farmland; no close-in high terrain relevant to any arrival, departure or missed-approach path. |
| Runway length vs fleet perf | 🟧 | RWY 08/26 (2,825 m) is non-limiting for typical Category-R narrowbody/regional operations; RWY 02/20 (1,580 m) is limiting for larger types — check the assigned type against §16/§9 performance data. |
| Approach availability / minima | 🟧 | RNP and ILS/LOC (RWY 26) both published; ILS sub-category and RNP minima not confirmed from a primary AIP table this pass. |
| Airspace / traffic / control | 🟧 | Moderate-density regional TMA with many subdivided sectors; single combined Approach/Departure position; FIR assignment (Paris LFFF vs Reims LFEE) corroborated only via a tier-4 network document — see §18. |
| Weather / seasonal hazard | 🟥 | Northern-France low-cloud/fog/drizzle is a recognised regional hazard; a published LVP trigger (RVR ≤550 m, ceiling ≤200 ft) and CAT II/III-capable RWY 26 infrastructure both point to this being a real, managed risk. |
| Curfew / slots / hours | 🟧 | No hard movement curfew identified (unlike a Level-3 slot-coordinated hub); several narrower restrictions apply instead — visual approaches banned weekends/holidays/night, training-flight limits, engine-run-up hours — see §5/§12. |
| RFF category vs our types | 🟥 | CAT 7 by day; downgraded to **CAT 5 overnight in winter (2200–0500, Nov–Mar)** — confirm this is adequate for the assigned type/route before a winter-night movement. |
| Fuel availability | 🟩 | Jet A-1 (truck) and 100LL (automatic station) both published with clear hours/PPR terms — see §6/§16. |
| Customs / handling / security | 🟧 | Customs hours published but the "O/R before 1700" condition is not fully disambiguated; handling is mandatory on Parking C/D for all flights for security reasons. |

---

## 3. Threat & Error Management (TEM)

### 3.1 CFIT / Terrain 🟩
LFQQ sits at 157 ft AMSL on the flat Flanders plain of northern France — there is **no close-in high terrain** relevant to arrival, departure or missed-approach paths. This is a non-issue field for terrain; the AIP's own obstacle charts (ICAO Type A) show only routine man-made obstacles (masts, buildings, tree lines) within the standard survey area — verify the current obstacle chart as routine practice, but CFIT is not the operative threat here.

### 3.2 Airborne conflict / traffic 🟧
Lille's terminal airspace (TMA/SIV) is subdivided into numerous sectors (TMA 1–16, floor 1,500–4,500 ft, ceiling FL065–FL115, mixed Class D/E) reflecting a structured but moderate-density regional environment — well short of a major-hub traffic load. **Lille Approach combines the approach and departure function** (there is no separate Departure position), which concentrates controller workload during simultaneous arrival/departure banks. Inbound/outbound traffic is handed to/from **Paris ACC (LFFF)** per the network-document corroboration used to build this brief — see §18 for the FIR-confirmation caveat and [Europe area brief](../../../../airspace/europe.md) for regional context (no dedicated French FIR brief exists yet in this tree).

### 3.3 Runway excursion 🟧
**RWY 26 carries a displaced threshold** (~280 m pre-threshold), reducing its LDA to **2,545 m** against a TORA/ASDA of 2,825 m and a TODA of 3,125 m — brief the correct landing distance, not the full runway length. **RWY 02/20 (1,580 m)** is short relative to RWY 08/26 and is limiting for larger aircraft types — confirm performance margins before assigning it. A current (2026) network-training reference shows RWY 08's declared distances at 2,780 m each versus 2,825 m each in the primary 2014-cycle AIP extract used for this build — not corroborated from a primary AIP table this pass; treat 2,780 m as the more conservative planning figure pending live-AIRAC confirmation (see §18).

### 3.4 Weather threat 🟥
Northern France (Flanders/Nord–Pas-de-Calais) carries a recognised regional exposure to **low cloud, drizzle and radiation/advection fog**, particularly in autumn and winter, consistent with the field's published **LVP trigger (RVR ≤550 m and/or ceiling ≤200 ft)** and the CAT II (and per the LVP procedure, apparently CAT III-capable in practice) instrumentation on RWY 26. This is the field's signature weather threat — treat any approach into deteriorating northern-France weather with the same discipline as a basin-fog field even though LFQQ itself has no basin/inversion geography. See §14.

### 3.5 Operational considerations 🟧
Plan around four durable items: (1) LFQQ is a genuine **two-runway crossing-pattern field** — RWY 08/26 crosses RWY 02/20 near midfield, and the active combination depends on wind/config; (2) a **published AIP hot spot** exists on the taxiway leading to RWY 02/20 near holding point P5 — explicitly flagged in the aerodrome chart legend as a runway-incursion risk if the P5 holding point is not respected; (3) the **RFF winter overnight downgrade to CAT 5** (2200–0500, Nov–Mar) is a real seasonal constraint, not merely administrative; and (4) as a **VAMSYS Category R, non-base** field, LFQQ functions as a regional/spoke destination in the K Global network rather than a hub — turnaround and dispatch planning should reflect that lighter role.

---

## 4. Cautions & Warnings

- **RWY 26 has a displaced threshold** — usable LDA is 2,545 m, not the full 2,825 m runway length.
- **Published AIP hot spot**: the taxiway leading to RWY 02/20 near holding point **P5** carries a runway-incursion risk if the holding point is not respected — brief before any 02/20-adjacent taxi.
- **RFF is downgraded from CAT 7 to CAT 5 overnight (2200–0500) from 1 November to 31 March** — verify current RFF NOTAM status before a winter night movement.
- **Visual approaches are prohibited** on weekends, public holidays, and nightly from 2100–0500.
- **RWY 02/20 (1,580 m)** is materially shorter than RWY 08/26 — do not assume it is available for every type/weight combination.
- **Two-runway crossing-pattern field** — confirm the active runway combination on the current ATIS before taxi; the two runway pairs are not independent of each other operationally.
- **Magnetic variation and even the exact designator of the 02/20 runway pair carry a currency caveat** (§18) — treat exact values as 🟧 pending a live-AIRAC cross-check.

---

## 5. Aerodrome category, restrictions & crew qualification

- **Special-airport / category:** Not operator-categorised as a restricted-crew "special airport" in reachable sources; the standing crew-briefing items are the **taxiway hot spot near P5** and the **winter RFF downgrade**. 🟧
- **Crew-qualification gate:** No special crew-qualification gate identified beyond standard CAT II currency for a low-visibility RWY 26 approach. 🟧
- **Operating restrictions / bans:** Visual approaches prohibited Sat/Sun/public holidays and nightly 2100–0500 🟥; gliders and ULM (microlights) prohibited; heavy (wake-turbulence category H) aircraft prohibited from training flights; turbojet/turboprop training restricted to weekday PPR windows (0700–1100, 1300–1700), one aircraft at a time, minimum circuit altitude 2,000 ft; RWY 02/20 night VFR use reserved for operators authorised by the AD operator to use the based-aircraft area (student pilots solo excepted).
- **Overflight / entry / permits:** Standard Schengen/EU international arrival; no special state permit required. 🟩
- **Operations notes:** Airport operator — **SOGAREL (Société de gestion de l'aéroport de la région de Lille)**, trading as Aéroport de Lille. Handling mandatory on **Parking C and D for all flights** for security reasons.

---

## 6. General / hours / services

| Item | Value | Flag |
|---|---|---|
| ATS hours | H24 per the primary AIP extract used | 🟩 |
| AD operating hours | No blanket operating-hours restriction found; several service functions (handling, fuel) carry PPR/surcharge outside published hours | 🟧 |
| Night / curfew restrictions | No hard movement curfew identified (unlike a slot-coordinated hub); visual-approach ban (weekends/holidays/night 2100–0500) and training-flight/engine-run-up restrictions apply instead (§5/§12) | 🟧 |
| RFF category | **CAT 7** (H24, 1 Apr–31 Oct); **CAT 7 0500–2200 / CAT 5 2200–0500** (1 Nov–31 Mar) | 🟥 |
| Fuel | Jet A-1 (truck, PPR 0500–2100, surcharge outside) and 100LL (automatic station, Parking E, H24) | 🟩 |
| PCN | Runway/taxiway/apron-specific — see §7 | 🟩 |
| Customs | 0500–2200; on-request (O/R) coverage if requested before 1700 | 🟧 |
| Handling / FBO | **AVIAPARTNER** (passenger/commercial, 0400–2100, PPR outside); **SOGAREL AG** (general aviation, 0600–2000 Mon–Fri / 0900–1700 Sat-Sun-Hol, 48h PPR outside); **SOGAREL FRET** (freight, H24 Mon–Fri except holidays 0800–1930, 4h PPR, 24h PPR outside) | 🟩 |

---

## 7. Runways & declared distances

| RWY | Dimensions | Surface / PCN | TORA | TODA | ASDA | LDA | Notes |
|---|---|---|---|---|---|---|---|
| 08 | 2,825 × 45 m | Macadam / PCN 54 F/B/W/T | 2,825 m | 2,825 m | 2,825 m | 2,825 m | Clearway 300 m. 🟧 A current network reference gives 2,780 m for all four distances — not primary-AIP-confirmed, see §18. |
| 26 | 2,825 × 45 m | Macadam / PCN 54 F/B/W/T | 2,825 m | 3,125 m | 2,825 m | **2,545 m** | **Displaced threshold ~280 m** — preferred/west-facing landing and departure runway. |
| 02 | 1,580 × 30 m | Macadam / PCN 12 F/B/W/T | 1,580 m | 1,580 m | 1,580 m | 1,580 m | 🟧 Current (2026) network reference designates this runway pair **01/19** (QFU 014/194) — see §18. |
| 20 | 1,580 × 30 m | Macadam / PCN 12 F/B/W/T | 1,580 m | 1,580 m | 1,580 m | 1,580 m | See 02 note. |

*Source: SIA France eAIP AD 2 LFQQ.12/.13 (extract carries amendment dates 09 Jan 2014 / 13 Dec 2012 / 30 Apr 2015 across sub-sections) — core runway geometry very unlikely to have changed materially, but exact current-cycle figures (and the 02/20 vs 01/19 designator question) should be cross-checked against a live AIRAC before treating as audit-grade. All distances in metres.*

---

## 8. Communications

| Service | Callsign | Frequency | Hours | Notes |
|---|---|---|---|---|
| ATIS | Lille ATIS | 119.325 | HO 🟧 | Broadcasts departure/arrival parameters; hours per 2014-cycle extract, not re-confirmed. |
| Ground | Lille Ground (Lille Sol) | 121.85 (2014 cycle) / 121.855 (2026 network reference) | HO | Delivers start-up/pushback approval **and** departure clearance — no separate Delivery position at this field. |
| Tower | Lille Tower (Lille Tour) | 118.55 (2014 cycle) / 118.555 (2026 network reference) | HO | Selects runway-in-use. |
| Approach | Lille Approach (Lille Approche) | 120.275 / 126.475 / 134.825 (2014 cycle, sector-specific East/West) or 126.480 (2026 network reference, single frequency) | HO | Combined approach **and** departure function — no separate Departure position. |
| VDF (Gonio) | Lille Gonio | 118.55 / 120.275 / 126.475 | HO | Direction-finding service. |
| Centre / FIR | Paris ACC (LFFF) — "Paris Contrôle" (120.955), plus LFFF_E (132.100) / LFFF_W (124.850) sector splits per a network reference | H24 | See [Europe area brief](../../../../airspace/europe.md); FIR assignment corroborated only at tier-4 (§18). |

*Source: SIA France eAIP AD 2 LFQQ.18 (2014-cycle extract) cross-checked against a 2026 network-training reference (AIRAC 2603) — the close numeric match (e.g. 121.85→121.855, 118.55→118.555, 126.475→126.480) is consistent with routine 8.33 kHz channel-spacing suffixing rather than a substantive change, but treat exact current-cycle values as 🟧 pending a live-AIRAC cross-check.*

---

## 9. Navaids

| Aid | Ident | Freq | Hours | Notes |
|---|---|---|---|---|
| NDB | LL | 332 kHz | H24 | Located at Cysoing, bearing/distance 078°/3.73 NM from RWY 26 displaced threshold. |
| VOR/DME | LEQ | 109.0 MHz (CH27X) | H24 | On field; published coverage 40 NM / FL250. |
| LOC (ILS 26) | LIL | 110.75 MHz | H24 | Serves RWY 26; approach-lighting data (900 m HI/LIH) is consistent with **CAT II**; exact ILS sub-category not confirmed from a primary table this pass. 🟧 |
| GP (ILS 26) | — | 330.05 MHz | H24 | 3° nominal glidepath. |
| DME (ILS 26) | CH44Y | — | H24 | Coverage 25 NM. |

*All idents/frequencies sourced to the SIA France eAIP extract (2012–2015 amendment dates); long-lived infrastructure, unlikely to have changed, but not independently re-confirmed against a current AIRAC.*

---

## 10. Arrival

- **Transition altitude / level:** TA 5,000 ft; TL FL060 (1013 < QNH ≤ 1048) or FL070 (977 ≤ QNH ≤ 1012) — per a 2026 network reference, not independently AIP-confirmed this pass. 🟧
- **Speed:** Standard 250 KIAS below FL100 (EU/ICAO norm).
- **Preferential runway logic:** West-facing configuration is preferred — **RWY 26** for both arrival and departure; Tower selects the runway-in-use per wind, published minima and noise considerations, and can accommodate a request for the reciprocal (08/02/20 as conditions allow).
- **Approaches (names only — verify minima on current AIRAC charts):**

| RWY | Approach | IAF | FAF/FAP alt | Notes |
|---|---|---|---|---|
| 08 | RNP Z (preferred) | EKRIK / ERNOD | 3,000 ft | 🟧 Names sourced to a network reference, not the primary AIP — verify current AIRAC. |
| 08 | RNP Y | NEKEN | 2,000 ft | |
| 08 | VOR Z / VOR Y | LEQ | 2,000 ft | |
| 26 | ILS/LOC Z (preferred) | OLBUS | 2,000 ft | CAT II per §9. |
| 26 | ILS/LOC Y | LEQ | 2,000 ft | |
| 26 | RNP | OLBUS | 2,000 ft | |
| 26 | VOR | LEQ | 2,000 ft | |

- **STARs (names only):** ABB, BNE, CIV, CMB, MATIX, TRACA, VERMA, SULEX, OSLID series (runway/IAF-specific) — 🟧 sourced to a network reference, not the primary AIP; pull the current-AIRAC STAR list at planning.
- **LVP:** Trigger conditions **RVR ≤550 m and/or ceiling ≤200 ft** 🟧 (network-reference sourced); RWY 26 approaches then operate CAT II/III, RWY 08 LVTO applies, TWY T3/T4 become unusable, and TWY P5 is reserved for Parking E access only.
- **Missed approach watch-items:** Terrain is not the driver (flat plain); the operative concern is re-sequencing within the Lille TMA's subdivided sectors under a single combined Approach/Departure position. Visual approaches are already excluded on weekends/holidays/night, reducing that specific risk category.

---

## 11. Departure

- **SIDs (names only — fly the charted version):** ABB, BNE, CIV, VERMA, MATIX, TRACA, CMB series, with runway-specific RNAV (preferred) and conventional variants — 🟧 sourced to a network reference, not the primary AIP; pull the current-AIRAC SID list at planning. Omnidirectional departure procedures are also published for both runway directions.
- **RNP / climb-gradient requirements:** RNAV SIDs are the preferred option per the network reference; no gradient figures transcribed here — verify on the current chart.
- **Take-off minima:** Published per AIP; exact figures not confirmed this pass. 🟧
- **Start-up / push-back:** **Lille Ground** approves start-up/pushback and issues departure clearance — there is no separate Delivery position at this field. Parking B stands (B01–B12) require pushback in a stand-specific direction; B13–B17 and all Parking C positions are self-manoeuvring ("autonome"). 🟧 (network-reference sourced)
- **ATC slot / CTOT & clearance:** No IATA slot-coordination level (Level 2/3) identified — treat as an uncoordinated/Level-1 regional field pending confirmation. 🟧
- **De-icing:** Two remote de-icing units (FMC-SMD1200-type) confirmed in the primary AIP extract; fluid Type I (50/50 hot/warm) and Type II (100% and 75/25%); no named/dedicated pad location found. 🟧 See [`OM E — Cold Weather Operations`](../../../../../flight-ops/cold-weather-operations.md).

---

## 12. Noise & Environmental

- **Noise abatement (NAP):** Referenced in the AIP's noise-abatement procedures section (chart-only detail, not reproduced here) — verify current chart. 🟧
- **Night noise / dB limits:** None published/found in reachable sources. 🟧
- **Engine run-up restrictions:** Start-up-power tests permitted 0600–2100 on all stands; take-off-power tests permitted 0600–2100 only at the south-west corner of Parking C; 2100–0600 restricted to aircraft departing on a commercial flight before 0800, with Tower permission required.
- **Reverse thrust / idle-reverse policy:** Not confirmed in reachable sources. 🟧

---

## 13. Ground operations

- **Stands for our types:** **Parking B** (commercial aviation) — gangway stands B08/B11 rated for B747-400 in the primary AIP extract (a 2026 network reference additionally shows B08/B11 accepting B777-300ER-class aircraft, and B09/B12 rated B767-300); B01–B06 and B13–B17 are narrowbody/regional (Embraer/CRJ-class) positions. **Parking C** (general aviation, self-manoeuvring) is barred to A340-600, A350 and B777-300 per the network reference. **Parking D** is freight/cargo. **Parking E** is general aviation with the 100LL station. 🟧 (widebody-capability detail is network-reference sourced, not independently AIP-confirmed) | 🟧
- **Push-back:** Mandatory, stand-specific direction, at Parking B stands B01–B12; self-manoeuvring at B13–B17 and all Parking C positions.
- **Standard taxi routes:** Via the P2–P5 / T2–T5 / V1–V5 taxiway system; confirm the assigned routing with Ground on the day.
- **Hot spots / tight taxiways:** 🟥 **Published AIP hot spot** on the taxiway leading to RWY 02/20 near holding point **P5** — explicit runway-incursion risk if P5 is not respected. Width/wingspan restrictions apply on several taxiways: **TWY T3** (day-only, aircraft <2.5 t, wingspan <15 m), **TWY V4/P5** (wingspan <36 m), **TWY V6/V7** (wingspan <24 m). RWY 08/26 turn-around pads are limited to aircraft wheelbase ≤25.6 m; use by the DASH 8 type is prohibited.
- **Follow-me:** Availability not confirmed in reachable sources. 🟧

---

## 14. Weather & seasonal (durable)

- **Climate / prevailing wind:** Temperate oceanic climate typical of the Flanders plain / northern France; prevailing wind favours the west-facing configuration (RWY 26 preferred for both arrival and departure).
- **Seasonal hazards:** Low cloud, drizzle and **radiation/advection fog** are a recognised regional hazard, particularly autumn through winter — consistent with the field's published LVP trigger (RVR ≤550 m / ceiling ≤200 ft) and CAT II RWY 26 infrastructure. No significant severe-convective signature specific to LFQQ found beyond standard north-west European climatology.
- **Local effects:** Flat terrain — no orographic effect; occasional strong wind associated with North Sea/Channel frontal systems.

> **Live weather — pull at planning (T-2h):** METAR, TAF, TREND, SIGMET/AIRMET. Not stored here.

---

## 15. NOTAMs

> **Pull at planning (T-2h).** Perishable — not stored here. Check: runway/taxiway closures (esp. the P5 hot-spot area and RWY 02/20), navaid U/S, current RFF level (CAT 7 vs the seasonal CAT 5 overnight downgrade), lighting, obstacle/crane, GPS/RAIM for RNP procedures. Source: official AIS / OFP NOTAM block.

---

## 16. Fuel & alternate planning notes

- **Typical role for us:** **Regional / spoke destination** — VAMSYS Category **R**, not a K Global base.
- **Nearest suitable alternates:** Company preferred alternates [**EDDF**](../../germany/eddf/index.md) (Frankfurt, built pack), **EBBR** (Brussels) and **EHAM** (Amsterdam Schiphol) `[VAMSYS mirror 2026-07-26]` — confirm suitability, runway/RFF adequacy and current minima per leg. EBBR and EHAM are not yet built as full packs in this tree.
- **Fuel-uplift notes:** Jet A-1 by truck (four truck sizes, 40/35/20/11 m³, discharge rates 30–110 m³/hr) and 100LL via an automatic station on Parking E (H24); fuel PPR 0500–2100 with a surcharge outside these hours. See [`OM E — Fuel Policy`](../../../../../flight-ops/fuel-policy.md).
- **Range/perf flags for our fleet:** RWY 08/26 (2,825 m) is non-limiting for typical Category-R narrowbody/regional operations; RWY 02/20 (1,580 m) is limiting for larger types. See [`OM B — Fleet Capability Matrix`](../../../../../fleet/capability-matrix.md) for type-by-type range/performance reference. 🟧

---

## 17. Fleet-specific notes (optional)

- LFQQ's real-world gangway-stand ratings (up to B747-400/B777-300ER-class on Parking B) reflect the airport's own cargo/charter traffic mix, not a K Global-specific consideration — as a VAMSYS Category R, non-base field, the operative planning driver here is RWY 02/20's shorter length and the winter RFF downgrade rather than any widebody stand constraint. See [`OM B — Fleet Capability Matrix`](../../../../../fleet/capability-matrix.md).

---

## 18. Open items (🟧 — confirm against AIP / current AIRAC)

- **Magnetic variation** — 0° per the 2010-dated primary AIP cycle vs 1.96° E per a 2026 network reference; genuine drift/discrepancy, not reconciled against a current primary AIP table.
- **RWY 02/20 vs 01/19 designator** — a current (AIRAC 2603, 2026) network-training reference designates this runway pair as **01/19** (QFU 014/194); this pack retains **02/20** per tasking. Verify the current runway designator against the live AIRAC chart before use.
- **RWY 08 declared distances** — primary 2014-cycle AIP states 2,825 m TORA/TODA/ASDA/LDA; a 2026 network reference states 2,780 m for all four — not corroborated from a primary AIP table this pass.
- **ILS 26 sub-category (CAT II vs III)** — approach-lighting and LVP-procedure data both suggest CAT II/III capability; not confirmed from a primary AIP category table.
- **ATC frequencies** — sourced to a 2012–2015 AIP cycle plus a 2026 network reference; representative but not current-AIRAC-verified.
- **SIDs/STARs/approach names and minima** — sourced to a network-training reference, not the primary AIP; pull the live current-AIRAC procedure list before use.
- **FIR/UIR assignment (Paris LFFF vs Reims LFEE)** — corroborated only via the network reference's ATC handoff structure and document grouping; not independently confirmed against the primary AIP ENR FIR/UIR boundary description. **No French FIR brief exists yet in this tree** — see [Europe area brief](../../../../airspace/europe.md) for regional context in the interim.
- **CTR vertical limit** — primary 2014-cycle AIP states SFC–1,500 ft AMSL; a network reference shows a differing (and possibly template-carried) 2,000 ft figure — not reconciled.
- **Take-off minima, noise-abatement routing detail, night-noise dB limits, reverse-thrust policy, follow-me availability, dedicated de-icing pad location** — none confirmed in reachable sources.
- **Customs "O/R before 1700" condition** — exact operational meaning not fully disambiguated from the AIP extract.
- **Slot-coordination level** — assumed uncoordinated/Level 1; not independently confirmed.

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim material (current-AIRAC charts) informs content but is not listed here.*

- **SIA France eAIP, AD 2 LFQQ.1–.24** (mirrored extract; amendment dates spanning 13 Dec 2012, 09 Jan 2014 and 30 Apr 2015 across sub-sections) — ARP/elevation, runway/declared-distance data, PCN, RFF/SSLIA category, communications, navaids, stand data, noise/training restrictions — mirrored via https://beardsell.com/flying/Italy_2015/Fairoaks-LeTouquet/LFQQ-lille-text.pdf (retrieved 2026-07-26). **Treat exact current-cycle figures as needing a live-AIP cross-check.**
- SIA France — official eAIP landing page (AD 2 LFQQ, AIRAC 19 Mar 2026) — https://www.sia.aviation-civile.gouv.fr/media/dvd/eAIP_19_MAR_2026/FRANCE/AIRAC-2026-03-19/html/eAIP/FR-AD-2.LFQQ-fr-FR.html (attempted 2026-07-26) — did not render to a raw fetch (DVD-mirror/JS-served structure); not used as a direct source this pass.
- OurAirports — https://ourairports.com/airports/LFQQ/ (retrieved 2026-07-26). *ARP/elevation cross-check.*
- Wikipedia — "Lille Airport" — https://en.wikipedia.org/wiki/Lille_Airport (retrieved 2026-07-26). *City/context, cites the French AIP effective 19 Feb 2026.*
- IVAO France Documentation — "LFQQ - Lille Lesquin" (MANEX Aéroports Civils), verified to AIRAC 2603 (19 Mar 2026) — https://wiki.ivao.fr/books/manex-aeroports-civils/page/lfqq-lille-lesquin (retrieved 2026-07-26). **Network sim document, not regulatory** — used per the source register tier 4 for operational cross-check: SID/STAR/approach names, frequencies, LVP parameters, stand/push-back detail, FIR/ACC handoff structure.

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-26 | Built from SIA France eAIP; K Global fields from live VAMSYS; 4-page pack. |
