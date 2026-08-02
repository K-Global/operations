# EKCH — Copenhagen/Kastrup · Airport Briefing

**EKCH / CPH** · Copenhagen (Kastrup), Denmark · Europe
**Version** v0.1 · **Updated** 2026-07-26 · **Status** Draft — AIP Denmark (Naviair)-derived

> **Read-me:** Planning aid for the sim, not a chart. Static data is drawn from the AIP Denmark (Naviair eAIP, AD 2-EKCH) plus standard public aeronautical data; approaches/SIDs/STARs are listed **by name only or flagged not-yet-confirmed** — fly the charted current-AIRAC version. Live weather/NOTAMs are pulled at planning (§14/§15). Open 🟧 items are listed in §18. Flag legend 🟥 restriction/hazard · 🟧 caution/unverified · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| ARP (lat/long) | 55°37′04.50″N / 012°39′21.50″E (55.6179, 12.6560) `[AIP Denmark AD 2-EKCH-1 §2.1]` |
| Field elevation | **17 ft AMSL** (reference temperature 22°C) `[AIP AD 2-EKCH-1 §2.3]` |
| Mag variation | 🟧 **4° E (JUL 2017)**, annual change increasing ~9′/yr per AIP notation — current-day value (2026) works out to roughly **~5° E by secular drift**, **not itself a re-sourced AIP figure**; treat as caution pending a live-AIRAC pull |
| Time zone | UTC+1 (CET) / UTC+2 (CEST, EU DST observed) |
| Runway(s) | **04L/22R** 3,600 × 45 m · **04R/22L** 3,300 × 45 m · **12/30** 2,800 × 45 m — all asphalt (12/30 asphalt/concrete); see §7 |
| Preferential runway | **04L/22R and 04R/22L are the designated preferential parallels** for all jets and props ≥11,000 kg MTOM; **12/30 is a restricted-use crosswind runway** — see §5/§10/§11 |
| Longest LDA | 3,600 m (04L, no displacement); 22R LDA 3,000 m (600 m displaced threshold) |
| Approaches | **ILS CAT III on RWY 22L** (the field's lowest-minima runway) · **ILS CAT II on RWY 04L** · **ILS CAT I on 04R, 12, 22R, 30**; RNP approaches published for every runway end |
| RFF category | **CAT 9** `[AIP AD 2-EKCH-2 §6.1]` 🟩 |
| Control type | **Radar** — Kastrup Tower/Apron on the field; **Copenhagen Approach** terminal radar; en route under **Copenhagen ACC — Copenhagen FIR (EKDK)** — no dedicated FIR brief exists yet in this library; see [Europe (Continental) Airspace Briefing](../../../../airspace/europe.md) 🟧 (general continental reference only, not EKDK-specific) |
| Elevation class | Sea-level (17 ft) — **not** hot-and-high; no density-altitude driver |
| Special-airport status | 🟥 **IATA-coordinated (Level 3, inferred — see §18)** via **Airport Coordination Denmark (ACD)**; A-CDM/"ANI-Airport" (Advanced Network Integrated-Airport); **RWY 12/30 crosswind-only-use restriction** and a **noise-quota (not hard-curfew) night regime** — see §5/§6/§12 |
| Customs / PoE | **Yes** — H24, open to traffic to/from all states `[AIP AD 2-EKCH-2 §3]` 🟩 |
| K Global category | **L** `[VAMSYS mirror 2026-07-26]` 🟩 |
| K Global base | **No** `[VAMSYS mirror 2026-07-26]` |
| Company preferred alternates | **ENGM (Oslo), ESSA (Stockholm-Arlanda), ESGG (Gothenburg-Landvetter)** `[VAMSYS mirror 2026-07-26]` — no in-library folder/brief for any of these three yet; referenced as plain text |
| Taxi-in / taxi-out (VAMSYS) | **14 min / 18 min** `[VAMSYS mirror 2026-07-26]` |

---

## 2. Validation summary

| Domain | Flag | Note |
|---|---|---|
| Terrain / CFIT | 🟩 | Sea-level (17 ft), flat surrounding terrain — a non-issue field for CFIT. |
| Runway length vs fleet perf | 🟩 | 3,600 m (04L/22R) and 3,300 m (04R/22L) are ample for any K Global widebody or narrowbody; 2,800 m crosswind runway (12/30) is non-limiting for its restricted role. |
| Approach availability / minima | 🟩 | ILS CAT III on 22L is the deepest low-visibility capability at the field; CAT II on 04L; CAT I on the rest. RNP published every runway end. |
| Airspace / traffic / control | 🟧 | Busy Nordic hub under Copenhagen Approach radar; RWY 12/30 functions as a taxi cross-runway requiring explicit TWR crossing clearance — see §3.2/§13. No dedicated Copenhagen FIR (EKDK) brief exists in this library yet — general continental reference only. |
| Weather / seasonal hazard | 🟧 | Baltic/North Sea maritime climate; strong-wind days drive the crosswind-runway logic (§10/§14); winter de-icing season. |
| Curfew / slots / hours | 🟥 | **No hard curfew**, but an extensive **noise-quota night regime (2300–0600)** requiring advance CPH approval for jet/heavy-prop night takeoffs, plus **Level 3-type slot coordination via ACD** — see §6/§12. |
| RFF category vs our types | 🟩 | CAT 9 — above any of our fleet's requirement. |
| Fuel availability | 🟧 | Jet A-1, H24 per AIP; specific into-plane supplier not confirmed in reachable public sources. |
| Customs / handling / security | 🟧 | H24 customs confirmed; specific ground-handling agent for our operation and precise widebody/long-haul pier assignment not independently confirmed — terminal/pier structure is well documented but tier-4-sourced (§13/§18). |

---

## 3. Threat & Error Management (TEM)

### 3.1 CFIT / Terrain 🟩
EKCH sits at 17 ft AMSL on flat, low-lying terrain at the southern tip of Amager, with the Øresund (The Sound) immediately to the east. There is **no close-in high terrain** relevant to arrival, departure or missed-approach paths — CFIT is not the operative threat at this field. Verify the MSA ring on the current chart as routine practice.

### 3.2 Airborne conflict / traffic 🟧
Kastrup is the principal Nordic hub, worked by **Copenhagen Approach** radar with parallel operations on 04L/22R and 04R/22L, plus the crosswind runway 12/30 crossing both parallel pairs. Tower must issue explicit crossing clearances for RWY 12/30, which functions as a ground/runway crossing point for traffic moving between the eastern and western aprons regardless of whether 12/30 itself is active for takeoff/landing — a recurring workload item during busy banks. No dedicated Copenhagen FIR (EKDK) en-route brief exists yet in this library; cross-reference the general [Europe (Continental) Airspace Briefing](../../../../airspace/europe.md) 🟧 for continental-transit context only — it does not cover Scandinavian/Baltic FIR structure specifically.

### 3.3 Runway excursion 🟧
Displaced thresholds exist on **22R (600 m)**, **RWY 12 (705 m)** and **RWY 30 (270 m)** — brief the correct usable LDA per runway, don't assume full physical length is available for landing on these ends. No displacement is noted at 04L, 04R or 22L. Exact TORA/TODA/ASDA figures beyond the headline runway lengths were not cleanly extractable from the reachable AIP declared-distance table this pass — treat precise intersection-departure distances as 🟧 pending direct chart verification (§18).

### 3.4 Weather threat 🟧
Baltic/southern-Scandinavian maritime climate: exposed to wind off the Øresund and the North Sea/Baltic weather systems, which is the direct operational reason the crosswind runway 12/30 exists (§10). Winter brings a recognised snow/de-icing season (three dedicated de-icing pads on TWY A/B/V, §11). No specific EKCH convective-storm frequency statistic was found — treat as general regional climatology. See §14.

### 3.5 Operational considerations 🟧
Plan around three durable constraints: (1) the **preferential-runway system** — 04L/22R and 04R/22L must be used "to the greatest extent possible" by jets and heavy props, with 12/30 reserved for crosswind >15 kt or preferential-runway unavailability (§5/§10); (2) the **noise-quota night regime (2300–0600)** requiring advance CPH approval for jet/heavy-prop night takeoffs — a functional equivalent to a curfew for late-schedule integrity (§6/§12); and (3) **slot coordination via Airport Coordination Denmark (ACD)**, which mandates individual-flight approval for schedule changes — consistent with Level 3 status though not independently confirmed as a literally-labelled "Level 3" designation this pass (§18).

---

## 4. Cautions & Warnings

- **RWY 12/30 is a restricted-use crosswind runway** — available for takeoff/landing generally only when crosswind on the preferential parallels exceeds **15 kt**, or the preferential runways are otherwise unavailable; RWY 30 may additionally be used for landing without that restriction. Never assume 12/30 is a normal-rotation runway.
- **A daily wood-pigeon feeding migration crosses RWY 04L/22R in July–August** `[AIP AD 2-EKCH bird-hazard note]` — a specific, dated seasonal bird-hazard item; expect Tower ATIS remarks and active wildlife control (H24 wildlife controllers, pyrotechnics/distress-call/shotgun) during this window.
- **RWY 12/30 crossing clearance is mandatory** for all traffic transiting between the eastern and western parts of the aerodrome — brief for an explicit ATC crossing instruction on every taxi routing that involves it.
- **Night-period (2300–0600) jet/heavy-prop takeoffs require advance CPH noise approval**; a late-day delay risks running into this regime — build schedule buffer (§6/§12).
- Mag variation is sourced to a 2017 AIP cycle with a stated annual drift rate — treat the exact current value as 🟧 pending a live-AIRAC cross-check (§18).
- **Sea-rescue equipment (2 boats, capacity 650 persons)** is carried specifically because of the Øresund-adjacent setting — a reminder of the maritime environment surrounding the final/initial segments of several approaches/departures.

---

## 5. Aerodrome category, restrictions & crew qualification

- **Special-airport / category:** Not operator-categorised as a restricted-crew "special airport" in reachable sources; the standing crew-briefing items are the **preferential-runway/12-30-crosswind logic** and the **CAT III (22L) / CAT II (04L) low-visibility environment**. 🟧
- **Crew-qualification gate:** CAT II/III currency required for full-capability low-vis arrivals on 04L/22L; confirm crew/aircraft currency before planning a low-vis approach. 🟧
- **Operating restrictions / bans:** RWY 12/30 closed for takeoff/landing outside the crosswind/unavailability conditions in §10; school/training/circuit flying restricted on 12/30 (RWY 12 takeoff-only, RWY 30 landing-only for training flights) — not relevant to scheduled ops but confirms 12/30's restricted character. No RNP AR ban or circling restriction found in reachable sources — verify current AIRAC. 🟧
- **Overflight / entry / permits:** Standard EU/Schengen and non-Schengen international arrival (Copenhagen handles both — pier structure splits accordingly, §13); no special state permit required. 🟩
- **Operations notes:** ANSP/airport operator — **Copenhagen Airports A/S (CPH)**; slot coordinator — **Airport Coordination Denmark (ACD)**. Advance approval for night-period (2300–0600) jet/heavy-prop takeoffs is obtained from CPH directly, based on noise-certification data vs. an 80 dB(A) threshold measured at designated monitoring positions `[AIP AD 2-EKCH §21 Part II]`.

---

## 6. General / hours / services

| Item | Value | Flag |
|---|---|---|
| ATS hours | H24 `[AIP AD 2-EKCH-2 §3]` | 🟩 |
| AD operating hours | H24 — open to traffic to/from all states | 🟩 |
| Night / curfew restrictions | **No hard curfew** — noise-quota night regime **2300–0600**: jet/heavy-prop (≥11,000 kg) takeoffs require advance CPH approval vs. an 80 dB(A) threshold at monitoring points; RWY 04R carries a specific night takeoff restriction for light/medium aircraft absent ATC instruction; no advance approval ever required for landing `[AIP AD 2-EKCH §21 Part II]` | 🟥 |
| RFF category | **CAT 9** | 🟩 |
| Fuel | Jet A-1, H24 per AIP operational-hours table; specific into-plane supplier not confirmed | 🟧 |
| PCN | 04L/22R, 04R/22L, 12/30 all **PCN 80/F/C/X/U** asphalt (12/30 asphalt/concrete) `[AIP AD 2-EKCH-4 §12]` | 🟩 |
| Customs | H24 `[AIP AD 2-EKCH-2 §3]` | 🟩 |
| Handling / FBO | Ramp/ground handling operationally H24 per AIP; specific handler(s) contracted for our operation not confirmed | 🟧 |

---

## 7. Runways & declared distances

| RWY | Dimensions | Surface / PCN | TORA | TODA | ASDA | LDA | Notes |
|---|---|---|---|---|---|---|---|
| 04L | 3,600 × 45 m | Asphalt / PCN 80/F/C/X/U | 🟧 verify current AIP §13 | 🟧 verify | 🟧 verify | 3,600 m | Preferential parallel; ILS CAT II; no threshold displacement |
| 22R | 3,600 × 45 m | Asphalt / PCN 80/F/C/X/U | 🟧 verify | 🟧 verify | 🟧 verify | 3,000 m | Preferential parallel; ILS CAT I; **THR displaced 600 m** |
| 04R | 3,300 × 45 m | Asphalt / PCN 80/F/C/X/U | 🟧 verify | 🟧 verify | 🟧 verify | 3,300 m | Preferential parallel; ILS CAT I; no displacement noted |
| 22L | 3,300 × 45 m | Asphalt / PCN 80/F/C/X/U | 🟧 verify | 🟧 verify | 🟧 verify | 3,300 m | Preferential parallel; **ILS CAT III — field's lowest minima** |
| 12 | 2,800 × 45 m | Asphalt/concrete / PCN 80/F/C/X/U | 🟧 verify | 🟧 verify | 🟧 verify | 2,095 m | Crosswind/restricted-use runway; **THR displaced 705 m**; ILS CAT I; use restricted per §5/§10 |
| 30 | 2,800 × 45 m | Asphalt/concrete / PCN 80/F/C/X/U | 🟧 verify | 🟧 verify | 🟧 verify | 2,530 m | Crosswind/restricted-use runway; **THR displaced 270 m**; 300 m stopway; ILS CAT I; landing generally permitted without the crosswind trigger |

*Source: AIP Denmark (Naviair), AD 2-EKCH §12/§13 (retrieved 2026-07-26); physical dimensions and displaced-threshold distances cross-checked against OurAirports (retrieved 2026-07-26). The AIP's own intersection/reduced-declared-distance sub-table did not extract cleanly this research pass — **headline TORA/TODA/ASDA figures per runway are flagged 🟧 pending direct verification against the current AIP AD 2-EKCH-5 §13 chart**; LDA figures above (derived from physical length minus corroborated displacement) are the higher-confidence figures. All distances in metres. Runway classification (AIP §12 remarks): all runways Code 4E; 04L = PA-2 (CAT II), 22L = PA-3B (CAT III), all other ends PA-1 (CAT I).*

---

## 8. Communications

| Service | Callsign | Frequency | Hours | Notes |
|---|---|---|---|---|
| ATIS (arrival) | Kastrup Arrival Information | 122.755 | H24 | DOC FL200/60NM, English |
| ATIS (departure) | Kastrup Departure Information | 122.855 | H24 | DOC FL200/60NM, English |
| Delivery | Clearance Delivery | 119.905 | H24 | Departure clearance requested at TOBT −30 min |
| Apron | Kastrup Apron | 121.630 (ARR) / 121.905 (pushback/start/taxi) / 121.730 (HO) | H24/HO | |
| Tower (arr) | Kastrup Tower | 118.105 | H24 | DOC 4,000 ft/25 NM |
| Tower (dep) | Kastrup Tower | 119.355 | H24 | DOC FL100/25 NM |
| Tower (VFR/manoeuvring) | Kastrup Tower | 118.705 / 121.830 / 118.580 | H24 | VFR in CTR, manoeuvring-area positions |
| Final | Kastrup Final | 120.205 | H24 | DOC FL150/40 NM |
| Departure | Kastrup Departure | 120.255 / 124.980 | H24 | DOC FL250/50 NM |
| Approach | Copenhagen Approach | 119.805 / 118.455 | H24 | DOC FL250/50 NM |
| Centre / FIR | Copenhagen ACC — Copenhagen FIR (EKDK) | Per current AIRAC | H24 | No dedicated FIR brief in this library — see [Europe (Continental) Airspace Briefing](../../../../airspace/europe.md) 🟧 (general reference only) |

*Source: AIP Denmark (Naviair), AD 2-EKCH §18 (retrieved 2026-07-26); cross-checked against OurAirports frequency listing (retrieved 2026-07-26) with minor rounding differences noted — treat the AIP figures above as authoritative. English is the mandatory R/T language for aircraft with EKCH as departure or destination `[AIP AD 2-EKCH-7 §22]`.*

---

## 9. Navaids

| Aid | Ident | Freq | Hours | Notes |
|---|---|---|---|---|
| DME | KAS | 112.500 (CH72X) | H24 | On field; DOC FL500/60 NM |
| ILS/LOC 04L | — | 110.500 | HO | ILS class II/E/3 — **CAT II**; GP 329.600, angle 3°, RDH 49 ft |
| ILS/LOC 04R | NE | 109.300 | HO | ILS class I/D/2 — CAT I; GP 332.000, angle 3°, RDH 57 ft |
| ILS/LOC 12 | KA | 109.900 | HO | ILS class I/D/2 — CAT I; GP 333.800, angle 3°, RDH 49 ft |
| ILS/LOC 22L | OXS | 109.500 | HO | ILS class III/E/4 — **CAT III**; GP 332.600, angle 3°, RDH 53 ft |
| ILS/LOC 22R | KLK | 110.900 | HO | ILS class I/D/2 — CAT I; GP 330.800, angle 3°, RDH 47 ft |
| ILS/LOC 30 | OY | 108.900 | HO | ILS class I/D/2 — CAT I; GP 329.300, angle 3°, RDH 49 ft |
| VOR/DME | KOR | 112.800 (CH75X) | H24 | Off-field; DOC FL500/80 NM |
| VOR/DME | TNO | 117.400 (CH121X) | H24 | Off-field; DOC FL500/60 NM |

*All idents/frequencies sourced to AIP Denmark (Naviair), AD 2-EKCH §19 (retrieved 2026-07-26). "HO" = hours other than continuous for the localizer signal itself; associated glidepath/DME are H24 — confirm current NOTAM status before assuming an ILS is radiating. No NDB confirmed for this field in the reachable extract.*

---

## 10. Arrival

- **Transition altitude / level:** TA 5,000 ft MSL `[AIP AD 2-EKCH-7 §22]`; TL by QNH — verify current chart. First usable level not independently confirmed this pass. 🟧
- **Speed:** Standard 250 KIAS below FL100 (EU/ICAO norm) — confirm no local override on current chart.
- **Preferential runway logic:** 04L/22R and 04R/22L are the designated preferential runways for jets and heavy props "to the greatest extent possible." RWY 12/30 used for landing/takeoff only when preferential-runway crosswind exceeds 15 kt, runway friction/RWYCC falls below 5 on a preferential runway, weather is below minima on the preferential runways, or other listed operational reasons; RWY 30 may additionally be used for landing without that trigger. `[AIP AD 2-EKCH §21 Part I]`
- **Approaches (names only — verify minima on current AIRAC charts):**

| RWY | Approach | Notes |
|---|---|---|
| 04L | ILS (CAT II); RNP | Preferential parallel |
| 22R | ILS (CAT I); RNP | Preferential parallel; THR displaced 600 m |
| 04R | ILS (CAT I); RNP | Preferential parallel |
| 22L | ILS (CAT III); RNP | Preferential parallel — **field's lowest minima** |
| 12 | ILS (CAT I); RNP | Crosswind/restricted-use runway |
| 30 | ILS (CAT I); RNP | Crosswind/restricted-use runway; landing generally permitted |

- **STARs (names only):** Not confirmed to exact current-AIRAC designator suffixes this pass — a community (VATSIM Scandinavia) chart index names five arrival/holding fixes (**TESPI, TUDLO, MONAK, TIDVU, ERNOV**) each with an associated holding pattern, consistent with a five-direction arrival structure — pull the current-AIRAC STAR list at planning. 🟧
- **LVP:** CAT III (22L) / CAT II (04L) infrastructure supports low-visibility ops; exact RVR/trigger figures not confirmed this pass. 🟧
- **Missed approach watch-items:** Terrain is not the driver (flat, sea-level field); the operative missed-approach concern is re-sequencing into Copenhagen Approach's radar environment and the RWY 12/30 crossing traffic pattern.

---

## 11. Departure

- **SIDs (names only — fly the charted version):** Not confirmed to exact current-AIRAC designator suffixes this pass — pull the current-AIRAC SID list at planning. 🟧
- **RNP / climb-gradient requirements:** RNP departure procedures exist alongside conventional SIDs at Copenhagen; verify RNP/gradient equipage per SID on the current chart. See [OM E — PBN and RNP Operations](../../../../../flight-ops/pbn-and-rnp-operations.md).
- **Take-off minima:** Published per AIP — exact figures not confirmed this pass. 🟧
- **Start-up / push-back:** Clearance Delivery requested at TOBT −30 min; Apron frequencies handle pushback/start/taxi guidance (§8). Confirm cross-bleed/APU notification procedure locally. 🟧
- **ATC slot / CTOT & clearance:** Slot-coordinated via **Airport Coordination Denmark (ACD)**; Copenhagen is an **A-CDM / "ANI-Airport"** providing the full DPI message set to EUROCONTROL's Network Manager, which can influence CTOT calculation beyond the standard EOBT-3h A-CDM window. 🟧
- **De-icing:** **Three dedicated de-icing pads/taxiways — TWY A, TWY B, TWY V** — each with its own ATC channel and stop-marking system; post-deice, taxi to the illuminated stop line and await ground-crew signal before calling ATC for taxi clearance. Season not explicitly AIP-dated — inferred Scandinavian winter window (approx. Oct–Apr), not a quoted AIP figure. See [OM E — Cold Weather Operations](../../../../../flight-ops/cold-weather-operations.md).

---

## 12. Noise & Environmental

- **Noise abatement (NAP):** Governed by AIP §21 (legal basis: Danish Air Navigation Act §82; BL 3-40). RWY 22L departures fly runway track to a fix at 55°33′55.70″N 012°34′29.80″E (cross DME KAS 2.0 NM) before turning; RWY 22R departures climb on runway track to a point ~2.0 DME before turning; RWY 30 departures follow a similar fixed-track-then-turn logic. Departures crossing published noise-sector boundaries "will be investigated by the authorities." Deviations permitted for ambulance/HOSP/MEDEVAC and humanitarian flights.
- **Night noise / dB limits:** Night-period (2300–0600) jet/heavy-prop takeoffs require advance CPH approval based on noise-certification data vs. an **80 dB(A)** threshold measured at designated monitoring positions; a fallback ATC-issued permission exists absent advance approval; no advance approval required for landing at any hour.
- **Engine run-up restrictions:** Not confirmed in reachable sources — verify locally. 🟧
- **Reverse thrust / idle-reverse policy:** Not confirmed in reachable sources — verify locally. 🟧

---

## 13. Ground operations

- **Stands for our types:** Terminal 2/3 integrated concourse plus a dedicated low-cost pier ("CPH Go", Pier F). Piers A/B Schengen-only, Pier C predominantly non-Schengen, Piers D/E/F flexible — this pier breakdown is corroborated by a VATSIM Scandinavia community reference, **not an independently confirmed primary CPH source** 🟧. Cargo stands concentrated at the G-apron (G120–G137 per the same community reference). Widebody/long-haul gate concentration not independently quantified this pass. | 🟧
- **Push-back:** Mandatory-vs-self-manoeuvre policy for Code E/F stands not confirmed. 🟧
- **Standard taxi routes:** Confirm with Ground/Apron on the day; expect an explicit **RWY 12/30 crossing clearance** on routings that traverse it.
- **Hot spots / tight taxiways:** 🟧 No text-labelled "Hot Spot" entries were found in the reachable AIP extract (likely a graphical chart-only feature); the **RWY 12/30 crossing** is the clearest operationally-significant ground-complexity point identified this pass — verify the current Aerodrome Chart for graphically-marked hot spots.
- **Follow-me:** Availability not confirmed in reachable source — verify locally. 🟧

---

## 14. Weather & seasonal (durable)

- **Climate / prevailing wind:** Temperate maritime climate (Köppen Cfb) at the southern Øresund coast; wind exposure off the Sound and North Sea/Baltic systems is the direct driver of the crosswind-runway (12/30) logic.
- **Seasonal hazards:** Winter brings a recognised snow/de-icing season (three dedicated pads, §11); strong-wind days are the field's principal seasonal operational driver rather than convective activity. No EKCH-specific thunderstorm-frequency statistic found — treat as general regional climatology.
- **Local effects:** A notable, AIP-documented **daily wood-pigeon feeding migration crosses RWY 04L/22R in July–August**; the field maintains active H24 wildlife control given its proximity to protected wetlands (Kalvebod Fælled to the southwest; Saltholm and Peberholm across the Øresund to the east).

> **Live weather — pull at planning (T-2h):** METAR, TAF, TREND, SIGMET/AIRMET. Not stored here.

---

## 15. NOTAMs

> **Pull at planning (T-2h).** Perishable — not stored here. Check: runway/taxiway closures (esp. RWY 12/30 crossing status), navaid U/S, CAT II/III equipment status, lighting, obstacle/crane, RFF downgrade, bird-activity/wildlife-control remarks, GPS/RAIM for RNP procedures. Source: official AIS / OFP NOTAM block.

---

## 16. Fuel & alternate planning notes

- **Typical role for us:** Destination / origin — not a K Global base.
- **Nearest suitable alternates:** Company preferred alternates **ENGM** (Oslo-Gardermoen), **ESSA** (Stockholm-Arlanda), **ESGG** (Gothenburg-Landvetter) `[VAMSYS mirror 2026-07-26]` — no in-library folder/brief for any of these three yet; confirm suitability, runway/RFF adequacy and current minima per leg at planning.
- **Fuel-uplift notes:** Jet A-1 confirmed H24-operational per AIP; specific into-plane provider/hours not independently confirmed. 🟧 See [OM E — Fuel Policy](../../../../../flight-ops/fuel-policy.md).
- **Range/perf flags for our fleet:** Field length/strength non-limiting for any K Global type on the main parallel pairs (3,600 m / 3,300 m). See [OM B — Fleet Capability Matrix](../../../../../fleet/capability-matrix.md) for type-by-type range/performance reference.

---

## 17. Fleet-specific notes (optional)

- No field-elevation or field-length performance penalty for any K Global Category L type at EKCH on the preferential parallels; the operative planning consideration is the preferential-runway/crosswind logic and the noise-quota night regime rather than aircraft performance. See [OM B — Fleet Capability Matrix](../../../../../fleet/capability-matrix.md).

---

## 18. Open items (🟧 — confirm against AIP / current AIRAC)

- **Magnetic variation** — sourced to a 2017 AIP cycle (4° E); current-day value not independently re-confirmed; secular-drift estimate (~5° E) is not a sourced figure.
- **Declared-distance table (TORA/TODA/ASDA)** — the AIP's intersection/reduced-declared-distance sub-table did not extract cleanly; headline runway TORA/TODA/ASDA figures need direct verification against the current AIP AD 2-EKCH-5 §13 chart. LDA figures presented (derived from physical length minus displacement) carry higher confidence.
- **IATA slot-coordination level** — the AIP's description of ACD's mandatory individual-flight-approval role is strongly consistent with **Level 3 (fully coordinated)**, but this was not confirmed against a directly-quoted primary IATA/WASG "Level 3" label this pass.
- **SIDs/STARs (current designator suffixes)** — a community chart index confirms named fixes (BETUD, KOPEX, LANGO, NEXEN, SALLO/SIMEG, GOLGA on the SID side; TESPI/TUDLO/MONAK/TIDVU/ERNOV holding fixes on arrival) but exact current-AIRAC chart titles/suffixes were not obtained — pull the live current-AIRAC procedure list before use.
- **Taxiway "Hot Spots"** — none found in the text-searchable AIP extract; likely a graphical Aerodrome Chart feature not captured by text extraction — verify visually.
- **Terminal/pier Schengen-vs-non-Schengen assignment and widebody gate concentration** — corroborated only by a VATSIM community reference, not an independently confirmed primary CPH source.
- **Ground handling agent(s) contracted for our operation, fuel into-plane supplier, take-off minima, engine run-up restriction, reverse-thrust/idle-reverse policy, follow-me availability, de-icing season exact dates** — none confirmed in reachable sources.
- **RWY 12/30 physical length vs. a conflicting tertiary-source figure** — SKYbrary cites 3,070 m for this pair against AIP-consistent/OurAirports 2,800 m; treated 2,800 m as authoritative, discrepancy unresolved against SKYbrary.

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim material (current-AIRAC charts) informs content but is not listed here.*

- **AIP Denmark (Naviair), AD 2-EKCH** — AIRAC amendment cycle 12/25–03/26 (eff. 27 Nov 2025 – 19 Mar 2026 per pages retrieved) — https://aim.naviair.dk/media/files/5f0a31y3ymq/EK_AD_2_EKCH_en.pdf (retrieved 2026-07-26). *ARP/elevation/mag-var, runway physical characteristics and classification, declared distances, ATC frequencies, navaids, RFF, noise-abatement procedures, bird-hazard note, slot/ACD reference, de-icing.*
- OurAirports — https://ourairports.com/airports/EKCH/ , /runways.html , /frequencies.html (retrieved 2026-07-26). *Cross-check on physical dimensions, displaced thresholds, frequency rounding.*
- SKYbrary — https://skybrary.aero/airports/ekch (retrieved 2026-07-26). *Elevation/classification cross-check; flagged 12/30-length discrepancy.*
- VATSIM Scandinavia — "EKCH Copenhagen/Kastrup" chart/ops reference — https://wiki.vatsim-scandinavia.org/books/danish-airports-charts/page/ekch-copenhagenkastrup (retrieved 2026-07-26). *Network-sim document, not regulatory — used for stand/pier and SID/STAR fix-name cross-check only.*
- Copenhagen Airports (CPH) — "Operational information" — https://www.cph.dk/en/cph-business/aviation/operations (retrieved 2026-07-26). *Terminal/pier structure, gate-count context.*
- Wikipedia — "Copenhagen Airport" — https://en.wikipedia.org/wiki/Copenhagen_Airport (retrieved 2026-07-26). *Historical/traffic-context corroboration; dated statistics, not used for safety-critical figures.*

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-26 | Built from AIP Denmark (Naviair); K Global fields from live VAMSYS; 4-page pack. |
