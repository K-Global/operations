# EHAM — Amsterdam/Schiphol · Airport Briefing

**EHAM / AMS** · Haarlemmermeer, Noord-Holland, Netherlands · Europe
**Version** v0.1 · **Updated** 2026-07-26 · **Status** Draft — AIP Netherlands (LVNL eAIP)-derived

> **Read-me:** Planning aid for the sim, not a chart. Static data is drawn from the LVNL eAIP (AIP Netherlands, AD 2 EHAM), cross-checked against public secondary sources; approaches/SIDs/STARs are listed **by name only** — fly the charted current-AIRAC version. Live weather/NOTAMs are pulled at planning (§14/§15). Open 🟧 items are listed in §18. Flag legend 🟥 restriction/hazard · 🟧 caution/unverified · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| ARP (lat/long) | 52°18′29″N / 004°45′51″E (52.30806, 4.76417); 062° GEO / 135 m from Tower; 4.9 NM SW of Amsterdam `[LVNL eAIP AD 2.EHAM 2.1]` |
| Field elevation | **-11 ft AMSL** (one of the lowest-lying airports in the world; reference temperature 20.4°C) `[LVNL eAIP AD 2.EHAM 2.1]` |
| Mag variation | **2.4° E (2025)**, annual change 0.2° E `[LVNL eAIP AD 2.EHAM 2.1]` |
| Time zone | UTC+1 (CET) / UTC+2 (CEST, EU DST observed) |
| Runway(s) | **Six runways** — **18R/36L "Polderbaan"** 3,800×60 m · **06/24 "Kaagbaan"** 3,439×45 m · **09/27 "Buitenveldertbaan"** 3,453×45 m · **18C/36C "Zwanenburgbaan"** 3,300×45 m · **18L/36R "Aalsmeerbaan"** 3,400×45 m · **04/22 "Oostbaan"** 2,020×45 m — see §7 |
| Preferential runway | **Full wind/noise-driven preferential-runway rotation** — no single "usual" runway; see §3.2/§10/§11 for the LVNL Preferential Runway System |
| Longest LDA | 3,800 m (Polderbaan, 18R) |
| Approaches | **ILS CAT III** on 06, 18C, 36C, 27, 36R, 18R; **ILS CAT I** on 22 only; **no ILS** on 04, 09, 18L, 24, 36L — see §9/§10 |
| RFF category | **CAT 10** (ICAO highest category) `[LVNL eAIP AD 2.EHAM 2.6]` 🟩 |
| Control type | **Radar** — Schiphol Approach/Director + Amsterdam Radar (LVNL) in Amsterdam FIR (EHAA); upper airspace under Maastricht UAC (MUAC/EUROCONTROL) 🟧 exact FL boundary not confirmed this pass — see [Europe airspace briefing](../../../../airspace/europe.md) 🟧 no dedicated EHAA FIR brief exists yet |
| Elevation class | **Below sea level** (-11 ft) — not hot-and-high; performance driver is **field-below-sea-level QNH/QFE bookkeeping**, not density altitude |
| Special-airport status | 🟥 **Slot-coordinated IATA Level 3**; one of the most complex runway systems in commercial aviation — 6 runways, several one-way-preferential by design, full wind/noise rotation — see §5/§10/§11 |
| Customs / PoE | **Yes** — H24 `[LVNL eAIP AD 2.EHAM 2.3]` 🟩 |
| K Global category | **L** `[VAMSYS mirror 2026-07-26]` |
| K Global base | **No** `[VAMSYS mirror 2026-07-26]` |
| Company preferred alternates | **EBBR, EDDF, EDDL** `[VAMSYS mirror 2026-07-26]` |
| Taxi-in / taxi-out (VAMSYS) | **18 min / 22 min** `[VAMSYS mirror 2026-07-26]` |

---

## 2. Validation summary

| Domain | Flag | Note |
|---|---|---|
| Terrain / CFIT | 🟩 | Flat Dutch polder land, airport itself below sea level; no high terrain anywhere in the vicinity. Non-factor for CFIT. |
| Runway length vs fleet perf | 🟩 | Polderbaan (3,800 m) and the other main runways (3,300–3,453 m) are ample for any K Global type; only the Oostbaan (2,020 m, rarely used commercially) would be limiting for a widebody — not normally assigned. |
| Approach availability / minima | 🟩 | ILS CAT III on six of the twelve runway ends (§9/§10) — deep low-visibility capability; sub-category (IIIA/IIIB/IIIC) not individually confirmed this pass 🟧. |
| Airspace / traffic / control | 🟥 | One of the busiest airports in Europe by movements; six-runway, wind/noise-rotated preferential system drives sustained controller/crew workload and frequent runway-combination changes — see §3.2. |
| Weather / seasonal hazard | 🟧 | North Sea maritime climate — wind is the dominant runway-selection driver; winter fog/low-cloud and gusty frontal wind are the notable seasonal hazards — see §14. |
| Curfew / slots / hours | 🟥 | **Slot-coordinated Level 3**; a structured **night slot-restriction window 2200–0600 (2100–0500 in winter)** applies per the AIP's own local regulations — see §6/§12. A stricter night-closure/private-jet-ban policy has been publicly proposed but is **not confirmed as current AIP-level regulation** this pass — see §18. |
| RFF category vs our types | 🟩 | CAT 10 — above any of our fleet's requirement. |
| Fuel availability | 🟩 | Fuelling H24 per the AIP's general operating-hours table; a secondary Schiphol-East facility keeps shorter hours (0530–2230, PN required outside) — not normally relevant to a main-apron widebody turn. 🟧 into-plane supplier not confirmed. |
| Customs / handling / security | 🟩 | Customs & immigration confirmed H24 by the AIP; specific K Global handling agent not confirmed 🟧. |

---

## 3. Threat & Error Management (TEM)

### 3.1 CFIT / Terrain 🟩
EHAM sits at **-11 ft AMSL** — genuinely below sea level, in the flat, reclaimed Haarlemmermeer polder. There is no terrain of any operational relevance anywhere near the field; CFIT is not the operative threat here. The unusual feature is bookkeeping, not terrain: verify the MSA ring on the current chart as routine practice, and note the airport reference itself sits below the datum most crews instinctively assume for a "sea-level" field.

### 3.2 Airborne conflict / traffic 🟥
Schiphol operates **six runways** under a continuously wind- and noise-driven **Preferential Runway System** (§10/§11) — one of the most complex runway-selection regimes in commercial aviation. Under prevailing northerly wind the standard pairing is **Polderbaan (18R/36L) for departures + Kaagbaan (06/24) for arrivals**, with **Zwanenburgbaan (18C/36C)** added during peak departure banks and **Aalsmeerbaan (18L/36R)** added during peak arrival banks; under southerly wind the primary pairing reverses (Kaagbaan departs, Polderbaan lands) with Aalsmeerbaan/Zwanenburgbaan swapping peak roles. The AIP's own declared-distance table (§7) independently confirms that several runway ends are **effectively one-way by design** — Polderbaan's 36L direction and Aalsmeerbaan's 18L direction both carry an explicit **"not available for landing except emergency"** annotation, meaning the reciprocal direction is the field's normal arrival end. Combined with the **Buitenveldertbaan (09/27)**, brought in as a fifth runway at high traffic, and the rarely-used **Oostbaan (04/22)**, this drives sustained controller/crew workload, frequent runway-combination changes through the day, and a genuine need to confirm the *active* configuration rather than assume a "usual" runway. `[LVNL eAIP AD 2.EHAM; Schiphol/LVNL public runway-use pages]`

### 3.3 Runway excursion 🟧
Several runway ends carry **displaced thresholds** that materially reduce LDA versus the physical/advertised runway length: **06** (DTHR 244 m, LDA 3,195 m vs 3,439 m physical), **09** (DTHR 90 m, LDA 3,363 m), **36C** (DTHR 450 m, LDA 2,850 m), **18L** (DTHR 575 m, LDA 2,825 m — and marked not available for landing except emergency), **18R** (DTHR 270 m, LDA 3,530 m). **Always fly the declared LDA for the assigned runway direction, not the physical length** — see §7 for the full per-direction table. `[LVNL eAIP AD 2.EHAM 2.13]`

### 3.4 Weather threat 🟧
North Sea maritime climate: wind is the airport's defining operational variable and the direct driver of the Preferential Runway System (§3.2/§10/§11) — a wind shift can force a runway-combination change with little warning. Winter brings North Sea frontal systems (wind, rain, occasional gusty crosswind conditions) and periodic radiation/advection fog or low stratus, which is the operational reason CAT III infrastructure is installed on six of the twelve runway ends (§9). No EHAM-specific fog-frequency statistic was found this pass — treat as general regional climatology pending a primary MET summary. See §14.

### 3.5 Operational considerations 🟥
Plan around three durable constraints: (1) the **wind/noise-driven runway rotation** itself — confirm the active combination via ATIS/ATC rather than assuming a default; (2) the **IATA Level 3 slot-coordinated regime** with a structured **night slot-restriction window (2200–0600, 2100–0500 winter)** per the AIP's own local aerodrome regulations (§6/§12) — schedule integrity has direct network consequences; and (3) the **one-way-preferential runway ends** (Polderbaan 36L, Aalsmeerbaan 18L — both departure-favoured, landing-only-in-emergency) — never assume a reciprocal-direction arrival is routine on these ends. RFF, navaid and approach infrastructure are all first-tier (CAT 10, CAT III on six ends); the open items in §18 are mostly currency/administrative confirmations rather than safety-critical gaps.

---

## 4. Cautions & Warnings

- **No single "usual" runway** — Schiphol's active runway combination is wind/noise-driven and changes through the day; always confirm the current combination via ATIS, never assume a default.
- **Polderbaan 36L and Aalsmeerbaan 18L are marked "not available for landing except emergency"** in the declared-distance table — brief the correct one-way role for the assigned runway; do not expect a routine arrival on these ends.
- **Six runways, closely coordinated ground/tower sectorisation** — Ground and Tower frequencies are split by runway group (§8); confirm the correct frequency for the assigned runway before taxi.
- **Field elevation is -11 ft** — genuinely below sea level; a "sea-level" mental model for QNH/altimetry bookkeeping is not quite right here.
- **IATA Level 3 slot coordination** with a structured night slot-restriction window (2200–0600, 2100–0500 winter) — a late/delayed rotation carries real schedule risk (§6/§12).
- **Displaced thresholds materially reduce LDA** on 06, 09, 36C and 18L — always use the declared LDA for the assigned direction, not the runway's physical length (§3.3/§7).
- **Oostbaan (04/22, 2,020 m)** is the shortest and least-used runway, essentially not assigned to scheduled widebody traffic — do not expect it in normal K Global operations.
- A publicly proposed stricter night-closure / private-jet-restriction policy has circulated in recent years — **not confirmed as current binding AIP regulation this pass**; treat the AIP's own 2200–0600 (2100–0500 winter) slot-restriction window as the operative figure and verify current status at planning (§18).

---

## 5. Aerodrome category, restrictions & crew qualification

- **Special-airport / category:** Not operator-categorised as a restricted-crew "special airport" in reachable sources; the standing crew-briefing item is the **complex six-runway wind/noise-rotated system** (§3.2/§10/§11) rather than a terrain or approach-minima restriction. 🟧
- **Crew-qualification gate:** CAT II/III currency required for full-capability low-visibility arrivals on the six CAT III-equipped runway ends (§9); confirm crew/aircraft currency before planning a low-vis arrival. 🟧
- **Operating restrictions / bans:** Structured night slot-restriction window 2200–0600 (2100–0500 winter) per AD 2.20 (§6/§12); general aviation in principle not permitted 2200–0600 (2100–0500 winter). No RNP AR ban or circling restriction found in reachable sources — verify current AIRAC. 🟧
- **Overflight / entry / permits:** Standard EU/Schengen international arrival; no special state permit required. 🟩
- **Operations notes:** ANSP — **LVNL (Luchtverkeersleiding Nederland)**, providing Schiphol Approach/Tower/Ground and Amsterdam Radar within Amsterdam FIR (EHAA); upper airspace within **Maastricht UAC (MUAC/EUROCONTROL)** remit 🟧 exact FL boundary not confirmed. Airport operator — **Royal Schiphol Group**.

---

## 6. General / hours / services

| Item | Value | Flag |
|---|---|---|
| ATS hours | H24 `[LVNL eAIP AD 2.EHAM 2.3]` | 🟩 |
| AD operating hours | H24; **night slot-restriction window 2200–0600 (2100–0500 winter)** applies to scheduled movements (§12) `[LVNL eAIP AD 2.EHAM 2.20]` | 🟥 |
| Night / curfew restrictions | No landing/take-off without an applicable slot in the 2200–0600 (2100–0500 winter) window; general aviation in principle not permitted in that window; violations pursued via the Dutch slot coordinator/ILT `[LVNL eAIP AD 2.EHAM 2.20]` | 🟥 |
| RFF category | **CAT 10** `[LVNL eAIP AD 2.EHAM 2.6]` | 🟩 |
| Fuel | Fuelling H24 (main field, per general operating-hours table); Schiphol-East secondary facility 0530–2230 (0430–2130), PN required outside those hours `[LVNL eAIP AD 2.EHAM 2.3]` | 🟩 |
| PCN | Main runways PCN 89/F/C/W/T asphalt; Oostbaan (04/22) PCN 79/F/C/W/T asphalt `[LVNL eAIP AD 2.EHAM 2.12]` | 🟩 |
| Customs | H24 `[LVNL eAIP AD 2.EHAM 2.3]` | 🟩 |
| Handling / FBO | Multiple ground handlers on field (KLM Ground Services + independents); specific K Global-contracted handler not confirmed | 🟧 |

---

## 7. Runways & declared distances

| RWY | Runway (common name) | Dimensions | Surface / PCN | TORA | TODA | ASDA | LDA | Notes |
|---|---|---|---|---|---|---|---|---|
| 04 | Oostbaan | 2,020×45 m | Asphalt / PCN 79/F/C/W/T | — | — | — | 2,020 m | Full-length TORA/TODA/ASDA not resolved from this source pass — verify current AIRAC 🟧 |
| 22 | Oostbaan | 2,020×45 m | Asphalt / PCN 79/F/C/W/T | — | — | — | 2,020 m | As above 🟧 |
| 06 | Kaagbaan | 3,439×45 m | Asphalt / PCN 89/F/C/W/T | 3,439 m | 3,499 m | 3,439 m | 3,195 m | DTHR 244 m |
| 24 | Kaagbaan | 3,439×45 m | Asphalt / PCN 89/F/C/W/T | — | — | — | 3,439 m | Full-length TORA/TODA/ASDA not resolved this pass 🟧; no displaced threshold |
| 09 | Buitenveldertbaan | 3,453×45 m | Asphalt / PCN 89/F/C/W/T | — | — | — | 3,363 m | DTHR 90 m; TORA/TODA/ASDA not resolved this pass 🟧 |
| 27 | Buitenveldertbaan | 3,453×45 m | Asphalt / PCN 89/F/C/W/T | 3,453 m | 3,513 m | 3,453 m | 3,453 m | No displaced threshold |
| 18C | Zwanenburgbaan | 3,300×45 m | Asphalt / PCN 89/F/C/W/T | — | — | — | 3,300 m | Full-length TORA/TODA/ASDA not resolved this pass 🟧; no displaced threshold |
| 36C | Zwanenburgbaan | 3,300×45 m | Asphalt / PCN 89/F/C/W/T | — | — | — | 2,850 m | DTHR 450 m; TORA/TODA/ASDA not resolved this pass 🟧 |
| 18L | Aalsmeerbaan | 3,400×45 m | Asphalt / PCN 89/F/C/W/T | 3,400 m | 3,460 m | 3,400 m | 2,825 m | DTHR 575 m; **"Not available for landing except emergency"** — departure-favoured direction |
| 36R | Aalsmeerbaan | 3,400×45 m | Asphalt / PCN 89/F/C/W/T | — | — | — | 2,825 m | "Section of 575 m beyond displaced RWY-end shall not be used"; normal landing direction for this runway |
| 18R | Polderbaan | 3,800×60 m | Asphalt / PCN 89/F/C/W/T | — | — | — | 3,530 m | DTHR 270 m; normal landing direction for this runway |
| 36L | Polderbaan | 3,800×60 m | Asphalt / PCN 89/F/C/W/T | 3,800 m | 3,860 m | 3,800 m | 3,800 m | **"Not available for landing except emergency"** — departure-favoured direction |

*Source: LVNL eAIP, AIP Netherlands AD 2.EHAM 2.12 (runway physical characteristics) / 2.13 (declared distances), AIRAC AMDT 05-2026 (eff. 2026-05-14). Where TORA/TODA/ASDA is shown as "—", the primary-source extract for this pass did not resolve a distinct full-length figure for that direction (the AIP publishes an extensive separate intersection-departure table for many directions) — LDA and physical runway length are confirmed; verify exact full-length declared distances against the current AIRAC before flight planning. The "not available for landing except emergency" annotations on 18L and 36L are explicit AIP text, not a parsing gap. All distances in metres.*

---

## 8. Communications

| Service | Callsign | Frequency | Hours | Notes |
|---|---|---|---|---|
| ATIS | Schiphol Arrival Information / Departure Information | 132.980 (Arrival) · 122.205 (Departure) | H24 | Also via ACARS |
| Delivery | Schiphol Delivery | 121.980 (clearance/start-up, VFR only) · 121.590 | H24 | |
| Planner | Schiphol Planner | 121.655 (outbound planner) · 121.590 | H24 | |
| Ground | Schiphol Ground | 121.560 (RWY 18R/36L) · 121.705 (RWY 06/24) · 121.805 (RWY 04/22, 09/27, 18L/36R) · 121.905 (RWY 18C/36C) · 121.590 | H24 | Split by runway group — confirm correct frequency for assigned runway |
| Tower | Schiphol Tower | 119.230 (RWY 04/22 & 18L/36R) · 118.105 (RWY 18C/36C) · 118.280 (RWY 18R/36L) · 135.110 (RWY 06/24) · 362.875 | H24, VDF | Split by runway group |
| Approach / Departure | Schiphol Approach/Departure | 119.055 · 118.080 · 312.375 · 121.205 | H24 | |
| Arrival | Schiphol Arrival | 118.405 · 126.680 | H24 | |
| Approach (additional) | Schiphol Approach | 131.155 | H24 | |
| ATC operational info | — | 131.355 | Peak hours | Broadcasts current runway combination/SID info during busy periods |
| Centre / FIR | Amsterdam Radar (ACC) | Per current AIRAC | H24 | Amsterdam FIR (EHAA); see [Europe airspace briefing](../../../../airspace/europe.md) — 🟧 no dedicated EHAA FIR brief in-library yet |

*Source: LVNL eAIP, AIP Netherlands AD 2.EHAM 2.18, AIRAC AMDT 05-2026 (eff. 2026-05-14). Ground-frequency-to-runway mapping cross-checked against OurAirports (tier-4).*

---

## 9. Navaids

| Aid | Ident | Freq | Hours | Notes |
|---|---|---|---|---|
| VOR/DME | SPL | 108.400 MHz (CH21X) | H24 | On field; 60 NM/FL250 sector 000–360° |
| ILS 06 (Kaagbaan) | KAG | LOC 110.550 / GP 329.450 | H24 | **CAT III**; DME CH42Y |
| ILS 22 (Oostbaan) | SCH | LOC 109.150 / GP 331.250 | H24 | **CAT I only** — the field's one non-CAT-III ILS; DME CH28Y |
| ILS 18C (Zwanenburgbaan) | ZWA | LOC 109.500 / GP 332.600 | H24 | **CAT III**; DME CH32X |
| ILS 36C (Zwanenburgbaan) | MSA | LOC 108.750 / GP 330.350 | H24 | **CAT III**; DME CH24Y |
| ILS 27 (Buitenveldertbaan) | BVB | LOC 111.550 / GP 332.750 | H24 | **CAT III**; DME CH52Y |
| ILS 36R (Aalsmeerbaan) | ABA | LOC 111.950 / GP 330.950 | H24 | **CAT III**; DME CH56Y; the runway's normal landing direction |
| ILS 18R (Polderbaan) | VPB | LOC 110.100 / GP 334.400 | H24 | **CAT III**; DME CH38X; the runway's normal landing direction |
| — | — | — | — | **No ILS published** on 04, 09, 18L, 24, 36L — confirmed absent, not a source gap |
| GPS/EGNOS | — | L1 1575.42 MHz | H24 | GBAS/SBAS; FAS data block not obtained this pass 🟧 |

*Source: LVNL eAIP, AIP Netherlands AD 2.EHAM 2.19, AIRAC AMDT 05-2026 (eff. 2026-05-14). ILS sub-category (IIIA/IIIB/IIIC) not individually confirmed this pass — treat as CAT III generically pending a primary sub-category table.*

---

## 10. Arrival

- **Transition altitude / level:** Not independently confirmed this pass — verify current chart. 🟧
- **Speed:** Standard 250 KIAS below FL100 (EU/ICAO norm) — confirm no local override on current chart.
- **Preferential runway logic:** Full **wind/noise-driven rotation** — no fixed "usual" arrival runway. Under prevailing **northerly wind**: primary arrival runway is **Kaagbaan (06)**, with **Aalsmeerbaan (36R)** added during the peak-arrival period. Under **southerly wind**: primary arrival runway becomes **Polderbaan (18R)**, with **Zwanenburgbaan (36C)** added during peak arrivals. At night, only **one** runway is used for landing (typically **Polderbaan**, whose corridor overflies the least-populated Haarlemmermeerpolder) — confirm the active combination via ATIS. `[Schiphol/LVNL public runway-use pages, cross-checked against LVNL eAIP local-regulation notes]` 🟧
- **Approaches (names only — verify minima on current AIRAC charts):**

| RWY | Approach | Notes |
|---|---|---|
| 06 | ILS CAT III (KAG) | Kaagbaan — primary arrival runway, northerly-wind config |
| 24 | — (no ILS) | Kaagbaan reciprocal — visual/RNAV only |
| 18R | ILS CAT III (VPB) | Polderbaan — primary arrival runway, southerly-wind config and default night runway |
| 36L | — (no ILS) | Polderbaan reciprocal — **not available for landing except emergency** |
| 18C | ILS CAT III (ZWA) | Zwanenburgbaan — peak-arrival secondary, southerly-wind config |
| 36C | ILS CAT III (MSA) | Zwanenburgbaan reciprocal |
| 36R | ILS CAT III (ABA) | Aalsmeerbaan — peak-arrival secondary, northerly-wind config; normal landing direction |
| 18L | — (no ILS) | Aalsmeerbaan reciprocal — **not available for landing except emergency** |
| 27 | ILS CAT III (BVB) | Buitenveldertbaan — high-traffic fifth runway |
| 09 | — (no ILS) | Buitenveldertbaan reciprocal — visual/RNAV only |
| 04 / 22 | ILS CAT I (SCH) on 22 only | Oostbaan — rarely used commercially; not normally assigned to K Global traffic |

- **STARs (names only):** Not confirmed in reachable research pass — pull the current-AIRAC STAR list at planning. 🟧
- **LVP:** CAT III trigger conditions apply per North Sea winter fog/low-cloud risk (§14); exact RVR/trigger figures not confirmed this pass. 🟧
- **Missed approach watch-items:** Terrain is not the driver (flat, below-sea-level polder); the operative missed-approach concern is re-sequencing into a high-density, frequently-reconfigured six-runway traffic environment.

---

## 11. Departure

- **SIDs (names only — fly the charted version):** Not confirmed in reachable research pass — pull the current-AIRAC SID list at planning. 🟧
- **RNP / climb-gradient requirements:** Not confirmed this pass — verify per-SID gradient/equipage on the current chart. See [`OM E — PBN and RNP Operations`](../../../../../flight-ops/pbn-and-rnp-operations.md).
- **Take-off minima:** Published per AIP — exact figures not confirmed this pass. 🟧
- **Preferential runway logic:** Under prevailing **northerly wind**: primary departure runway is **Polderbaan (36L)**, with **Zwanenburgbaan (18C)** added during the peak-departure period. Under **southerly wind**: primary departure runway becomes **Kaagbaan (24)**, with **Aalsmeerbaan (18L)** added during peak departures. `[Schiphol/LVNL public runway-use pages]` 🟧
- **Start-up / push-back:** Not confirmed in reachable sources this pass — confirm locally. 🟧
- **ATC slot / CTOT & clearance:** **IATA Level 3 slot-coordinated**; a structured night slot-restriction window 2200–0600 (2100–0500 winter) applies per AD 2.20 — no landing/take-off without an applicable slot in that window. Domestic IFR flights must comply with CTOT from the Network Manager. `[LVNL eAIP AD 2.EHAM 2.20]`
- **De-icing:** Not confirmed in reachable sources this pass — a major North Sea hub of this scale is assumed to carry seasonal de-icing infrastructure; verify locally. 🟧 See [`OM E — Cold Weather Operations`](../../../../../flight-ops/cold-weather-operations.md).

---

## 12. Noise & Environmental

- **Noise abatement (NAP):** The entire runway system is itself a noise-abatement construct — the wind/noise-driven Preferential Runway System (§3.2/§10/§11) exists specifically to route traffic over the least populated corridors (e.g. Polderbaan's Haarlemmermeerpolder alignment). Specific NADP/SID noise-routing detail beyond the runway-selection logic not confirmed this pass. 🟧
- **Night noise / dB limits:** Governed through the AIP's own **night slot-restriction window 2200–0600 (2100–0500 winter)** — no landing/take-off without an applicable slot in that window; general aviation in principle not permitted at all in that window. `[LVNL eAIP AD 2.EHAM 2.20]` A further, stricter night-closure and private-jet-restriction policy has been publicly proposed in recent years but its **current binding legal/AIP status is not confirmed this pass** — treat the AIP figure above as the operative constraint and re-verify at planning. 🟧
- **Engine run-up restrictions:** Not confirmed in reachable sources — verify locally. 🟧
- **Reverse thrust / idle-reverse policy:** Not confirmed in reachable sources — verify locally. 🟧
- **APU policy:** APU use is restricted at stands equipped with fixed 400 Hz/GPU/PCA — shut down as soon as practicable after arrival. `[LVNL eAIP AD 2.EHAM 2.20]`

---

## 13. Ground operations

- **Stands for our types:** Widebody (Code E) capacity is concentrated on **Pier E/F/G** (non-Schengen, SkyTeam/KLM-hub-style long-haul), within the single-terminal, three-departure-hall complex; a small number of gates (reported G9, E18, E24) are additionally A380-capable. A new Pier A is under construction (reported opening ~April 2027). 🟧 Figures are aggregator/travel-guide-sourced, not an official Schiphol Group count.
- **Push-back:** Not confirmed in reachable sources this pass — confirm mandatory-vs-self-manoeuvre policy locally. 🟧
- **Standard taxi routes:** Confirm with Ground/Apron on the day — routing depends heavily on the active runway combination (§10/§11); the Ground frequency itself is split by runway group (§8).
- **Hot spots / tight taxiways:** Not individually confirmed this pass beyond the general observation that a six-runway field with frequent configuration changes carries elevated ground-routing complexity — verify current AIP/chart hot-spot annotations. 🟧
- **Follow-me:** Availability not confirmed in reachable source — verify locally. 🟧

---

## 14. Weather & seasonal (durable)

- **Climate / prevailing wind:** North Sea maritime climate; wind direction is the dominant operational variable and the direct driver of the Preferential Runway System (§3.2/§10/§11) — no single prevailing direction dominates strongly enough to fix a permanent runway combination.
- **Seasonal hazards:** Winter North Sea frontal systems bring wind, rain and periodic radiation/advection **fog or low stratus** — the direct operational reason six of the twelve runway ends carry CAT III infrastructure (§9). No EHAM-specific fog-frequency statistic obtained this pass. 🟧
- **Local effects:** None beyond the general North Sea maritime wind pattern; the field's below-sea-level elevation is a bookkeeping note, not a weather effect.

> **Live weather — pull at planning (T-2h):** METAR, TAF, TREND, SIGMET/AIRMET. Not stored here.

---

## 15. NOTAMs

> **Pull at planning (T-2h).** Perishable — not stored here. Check: active runway combination/preferential-runway assignment, runway/taxiway closures, navaid U/S, CAT III equipment status, lighting, obstacle/crane, RFF downgrade, night slot-restriction NOTAMs, GPS/RAIM. Source: official AIS / OFP NOTAM block.

---

## 16. Fuel & alternate planning notes

- **Typical role for us:** **Destination / alternate** — not a K Global base.
- **Nearest suitable alternates:** Company preferred alternates **EBBR** (Brussels — no folder/brief in-library yet, plain reference), [**EDDF**](../../germany/eddf/index.md) (Frankfurt), [**EDDL**](../../germany/eddl/index.md) (Düsseldorf) `[VAMSYS mirror 2026-07-26]` — confirm suitability, runway/RFF adequacy and current minima per leg.
- **Fuel-uplift notes:** Fuelling confirmed H24 on the main field per the AIP; specific into-plane provider not confirmed. 🟧 See [`OM E — Fuel Policy`](../../../../../flight-ops/fuel-policy.md).
- **Range/perf flags for our fleet:** Field length/strength non-limiting for any K Global type on the main runways (3,300–3,800 m); only the Oostbaan (2,020 m) would be limiting, and it is not normally assigned to scheduled widebody traffic. See [`OM B — Fleet Capability Matrix`](../../../../../fleet/capability-matrix.md).

---

## 17. Fleet-specific notes (optional)

- No fleet-specific limitation identified beyond the general network reference in [`OM B — Fleet Capability Matrix`](../../../../../fleet/capability-matrix.md). The operative planning consideration at EHAM is the wind/noise-driven runway rotation and slot/curfew schedule integrity rather than aircraft performance.

---

## 18. Open items (🟧 — confirm against AIP / current AIRAC)

- **Full-length TORA/TODA/ASDA on eight of the twelve runway directions** (04, 22, 06-reciprocal/24, 09, 18C, 36C) — this pass's source extract resolved LDA and physical length but not a distinct full-length departure figure for these directions; the primary AIP likely carries this in a supplementary intersection-departure table not fully captured this pass.
- **Transition altitude/level, take-off minima, SIDs/STARs (current names), ILS sub-category (IIIA/IIIB/IIIC)** — not obtained in this research pass; pull the live current-AIRAC procedure list and minima before use.
- **De-icing infrastructure, push-back policy, engine run-up restriction, reverse-thrust/idle-reverse policy, follow-me availability, ground hot-spot list** — none confirmed in reachable sources this pass.
- **Fuel into-plane supplier and specific K Global ground handling agent** — not confirmed.
- **Current legal status of the publicly-proposed stricter night-closure/private-jet-restriction policy** — reported in recent public sources but not confirmed as current binding AIP regulation; the AIP's own 2200–0600 (2100–0500 winter) slot-restriction window is treated as the operative figure pending confirmation.
- **Exact FL boundary between LVNL (Amsterdam FIR/EHAA) and Maastricht UAC (MUAC)** in the local upper airspace — not independently confirmed this pass.
- **No dedicated Amsterdam FIR (EHAA) brief exists in-library** — linked to the general [Europe airspace briefing](../../../../airspace/europe.md) pending a dedicated FIR build.

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim material (current-AIRAC charts) informs content but is not listed here.*

- **LVNL eAIP (AIP Netherlands), AD 2.EHAM 2.1–2.20**, AIRAC AMDT 05-2026, effective 2026-05-14 — https://eaip.lvnl.nl/ (retrieved 2026-07-26). *ARP/elevation/mag var, operating hours, RFF category, runway physical characteristics, declared distances, approach/runway lighting, ATS communication facilities, radio navigation/landing aids, local aerodrome regulations (slot/night-restriction window).*
- Schiphol — "Noise and runway combinations" — https://www.schiphol.nl/en/schiphol-as-a-neighbour/noise-and-runway-combinations/ (retrieved 2026-07-26). *Preferential Runway System logic, wind-dependent runway pairing.*
- LVNL — "Current runway usage at Schiphol" — https://en.lvnl.nl/local-community/current-runway-usage-at-schiphol (retrieved 2026-07-26). *Runway-usage statistics, night-runway preference.*
- OurAirports — https://ourairports.com/airports/EHAM/ , /runways.html , /frequencies.html (retrieved 2026-07-26). *Physical runway/elevation/frequency cross-check.*
- Wikipedia — "Amsterdam Airport Schiphol" — https://en.wikipedia.org/wiki/Amsterdam_Airport_Schiphol (retrieved 2026-07-26). *Runway-naming history, terminal/pier structure, Polderbaan history, notable incidents.*
- NL Times / Aviation Week / The Loadstar / NL Times — Schiphol flight-cap court-ruling coverage, March 2026 (retrieved 2026-07-26). *Movement-cap legal-status background — see §Dispatch for detail.*

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-26 | Built from AIP Netherlands (LVNL); K Global fields from live VAMSYS; 4-page pack. |
