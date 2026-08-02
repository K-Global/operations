# GMAD — Al Massira Intl · Airport Briefing

**GMAD / AGA** · Agadir (Temsia), Souss-Massa, Morocco · Africa
**Version** v0.1 · **Updated** 2026-07-26 · **Status** Draft

> **Read-me:** Planning aid for the sim, not a chart. Static data is drawn from the SIA-Maroc (ONDA) AIP, AD 2 GMAD; approaches/SIDs/STARs are listed **by name only or flagged not-yet-confirmed** — fly the charted current-AIRAC version. Live weather/NOTAMs are pulled at planning (§14/§15). Open 🟧 items are listed in §18. Flag legend 🟥 restriction/hazard · 🟧 caution/unverified · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| ARP (lat/long) | 30°19′21″N / 009°24′41″W (30.3225, -9.4114) — mid-runway `[AIP AD 2.2, AIRAC 05/26]` |
| Field elevation | **77 m / 253 ft AMSL** (reference temperature 32°C) `[AIP AD 2.2]`; THR 09 = 60 m/197 ft, THR 27 = 77 m/253 ft `[AIP AD 2.12]` |
| Mag variation | **1° W** (2025 epoch), annual change **8′ E** `[AIP AD 2.2]` |
| Time zone | UTC+0 (WET) / UTC+1 (WEST — Morocco DST calendar, incl. a Ramadan pause) 🟧 verify current-year DST dates |
| Runway(s) | **09/27**, 3,200 × 45 m, bitumen (PCR 721/F/A/X/T) `[AIP AD 2.12]` |
| Preferential runway | **RWY 27** is the equipped instrument runway (ILS CAT II + CALVERT CAT I approach lighting); **RWY 09 has no ILS/approach lighting** (PAPI only) — see §3.3/§10 |
| Longest LDA | 3,200 m — both runway ends `[AIP AD 2.13]` |
| Approaches | **ILS CAT II** (RWY 27, ident ADA); PAPI 3° both runways; VOR/DME (ADM) and 2× NDB (ALS, AML) support non-precision procedures — chart index confirms further published IAPs, **names not confirmed this pass** 🟧 |
| RFF category | **CAT 8** `[AIP AD 2.6]` 🟧 covers aircraft of ~49–61 m overall length — verify against the specific type assigned to this destination before widebody use |
| Control type | Tower + Approach (Al Massira Approach, single combined ATS unit) — **radar vs procedural not confirmed** in the reachable AIP extract 🟧 |
| Elevation class | Near sea-level (253 ft) — **not** hot-and-high; reference temperature 32°C (Aug) is a real warm-day performance input, not a density-altitude driver at this elevation |
| Special-airport status | None found — no restricted-crew "special airport" category in reachable sources |
| Customs / PoE | **Yes** — H24 `[AIP AD 2.3]` |
| K Global category | **S** `[VAMSYS mirror 2026-07-26]` |
| K Global base | **No** `[VAMSYS mirror 2026-07-26]` |
| Company preferred alternates | **GMMX, GMMN** `[VAMSYS mirror 2026-07-26]` |
| Taxi-in / taxi-out (VAMSYS) | **6 min / 8 min** `[VAMSYS mirror 2026-07-26]` |

---

## 2. Validation summary

| Domain | Flag | Note |
|---|---|---|
| Terrain / CFIT | 🟧 | Flat Atlantic coastal plain; no distant high-terrain figure obtained this pass. AIP obstacle table lists two ~140 m/459 ft AGL lit broadcast masts inside the RWY 09/27 approach/take-off surface ~6 NM out — a real, sourced close-in obstacle (§3.1). |
| Runway length vs fleet perf | 🟩 | 3,200 m single runway is non-limiting for narrow/mid-body types; confirm for any widebody assignment. |
| Approach availability / minima | 🟧 | Only RWY 27 carries ILS (CAT II) + approach lighting; RWY 09 is PAPI/visual + non-precision only. Procedure names not confirmed this pass. |
| Airspace / traffic / control | 🟩 | Class C CTR, 6 NM radius, single combined Tower/Approach unit; moderate European leisure-charter traffic volume. |
| Weather / seasonal hazard | 🟧 | AIP humidity data shows a pronounced morning spike consistent with coastal fog/marine-layer tendency — not independently confirmed against a fog-frequency statistic this pass. |
| Curfew / slots / hours | 🟩 | ATS, customs, handling and security all published H24; no curfew found. |
| RFF category vs our types | 🟧 | CAT 8 may not cover the largest widebody types (A330-300/747-class) — verify against assigned fleet. |
| Fuel availability | 🟩 | Jet A-1 + AVGAS 100LL, H24, on-field hydrant system. |
| Customs / handling / security | 🟩 | H24 confirmed; two named ground handlers (Swissport Maroc, RAM Handling) plus a separate cargo/mail handler. |

---

## 3. Threat & Error Management (TEM)

### 3.1 CFIT / Terrain 🟧
GMAD sits at 77 m/253 ft AMSL on the flat Souss-Massa coastal plain — there is no distant high terrain confirmed in the reachable AIP extract, and the Anti-Atlas foothills that rise inland to the east/southeast were not quantified this pass (verify MSA sectors on the current area/approach chart before planning a non-standard arrival). The one genuinely sourced obstacle item is a pair of lit **RTM (national broadcaster) antenna masts, ~140.2 m and ~140.6 m AGL**, both listed in the AIP's "in approach/take-off areas" obstacle table for RWY 09/27, roughly 6 NM WNW of the field `[AIP AD 2.10]`. This is not a terrain hazard in the classic sense, but it is a real, charted obstacle in the extended runway approach/departure surface — respect published obstacle clearance rather than assuming a "flat coastal field" is obstacle-free.

### 3.2 Airborne conflict / traffic 🟩
GMAD operates under a **Class C CTR** (6 NM radius centred on the ARP, surface up to 500 m) with a **single combined Tower/Approach ATS unit** ("Al Massira Tower" / "Al Massira Approach") `[AIP AD 2.17/2.18]`. Traffic is moderate and strongly leisure/charter-driven — the field carried roughly 2.3 million passengers in 2023 with a heavy European LCC/charter mix (Ryanair, EasyJet, TUI, Jet2, Transavia, Vueling, Wizz Air, Condor and others) per Wikipedia (tier-4, not AIP-sourced). Whether Approach control is radar or procedural was not confirmed in the reachable AIP text — flag for verification. Cross-ref [Africa — General Airspace](../../../../airspace/africa.md); GMAD lies within **Casablanca FIR (GMMM)**.

### 3.3 Runway excursion 🟧
Declared distances are symmetric on both ends — TORA/TODA/ASDA/LDA all 3,200 m, no displaced threshold, no stopway or clearway `[AIP AD 2.12/2.13]`. This is non-limiting for narrow/mid-body types. The operative excursion-adjacent watch-item is **runway-selection discipline**: RWY 27 is the only ILS/CALVERT-lit runway; accepting RWY 09 in marginal visibility trades away the precision-approach/lighting advantage for wind alignment — brief this trade-off explicitly rather than treating the two ends as equivalent.

### 3.4 Weather threat 🟧
Atlantic coastal location. The AIP's published climate table shows mean humidity swinging from **77–89% at 06:00 down to 41–54% at midday**, essentially every month of the year `[AIP AD 2.11]` — a signature consistent with a coastal fog/marine-layer/dew tendency, though no independent METAR-derived fog-frequency statistic was obtained this pass (flag). Reference temperature is **32°C** (August) — a real warm-season performance input for WAT-limited planning even though the field itself is not hot-and-high. **No de-icing facility or equipment exists on field** (AIP AD 2.3/2.4/2.7 all state NIL) — consistent with the warm coastal climate, but there is zero on-field mitigation if an unusual cold event ever occurred. See §14.

### 3.5 Operational considerations 🟧
Plan around four durable items: (1) **RFF CAT 8** — confirm coverage against the specific fleet type assigned to this destination before relying on it for a longer-body type; (2) **RWY 09 carries no ILS or approach lighting** — a day with wind favouring 09 is a lower-capability day; (3) **overflight of AIP-designated areas GMP11 and GMP14 is prohibited** `[AIP AD 2.20]` — routing must avoid these; (4) the airport is **closed to any aircraft not equipped with radio-communication means** `[AIP AD 2.20]` — a non-factor for scheduled IFR ops but confirms this is a fully radio-mandatory field despite its regional size.

---

## 4. Cautions & Warnings

- **RWY 27 is the only ILS (CAT II) + CALVERT-lit runway; RWY 09 is PAPI/visual + non-precision only** — a low-visibility day with wind favouring 09 is a real capability gap, not a routine reciprocal-runway swap.
- Two **~140 m/459 ft AGL lit broadcast masts (RTM)** sit inside the RWY 09/27 approach/take-off obstacle surface, ~6 NM from the field `[AIP AD 2.10]` — verify current obstacle/MSA data on the chart, especially for a missed approach or engine-out departure path.
- **No de-icing facility exists on field** (AIP: NIL) — not expected to be needed in this climate, but there is no on-field mitigation whatsoever if conditions ever required it.
- **Overflight of AIP-designated areas GMP11 and GMP14 is prohibited** `[AIP AD 2.20]` — verify current boundaries before routing near the field.
- Aircraft **without radio-communication equipment may not use the airport** at all `[AIP AD 2.20]` — non-factor for scheduled ops but a formal restriction of record.
- **RFF category (CAT 8)** — confirm coverage against the specific type/length assigned to this destination before scheduling a longer-body aircraft.
- A **WIG WAG warning-light system** is installed at the TWY D1/RWY and TWY D5/RWY intersections `[AIP AD 2.9]` — the AIP itself flags these as requiring an active runway-incursion-prevention signal; treat as hot-spot crossings, not routine ones.

---

## 5. Aerodrome category, restrictions & crew qualification

- **Special-airport / category:** Not categorised as a restricted-crew "special airport" in reachable sources. 🟩
- **Crew-qualification gate:** None specifically identified; standard international operations. RWY 27 carries **ILS CAT II** — confirm crew/aircraft CAT II currency before planning a low-visibility approach on that runway. 🟧
- **Operating restrictions / bans:** Overflight of GMP11/GMP14 prohibited; radio-communication-equipment mandate for any aircraft using the field (§4); no RNP AR ban or circling restriction found in the reachable extract — verify current AIRAC. 🟧
- **Overflight / entry / permits:** Standard Morocco international arrival; no special state permit identified for scheduled commercial operations. 🟩
- **Operations notes:** ANSP/airport operator — **ONDA (Office National Des Aéroports)**; on-field aerodrome-operator office hours Mon–Fri 08:30–16:30 local (Ramadan 09:00–14:30), with an **H24 "permanence" duty coverage**. Ground handling — **Swissport Maroc** and **RAM Handling** both provide passenger/ramp/baggage/cabin/fuel-oil(partial)/crew-administration/ground-transport services; a separate **RAM ground handling company** handles cargo and mail `[AIP AD 2.23]`.

---

## 6. General / hours / services

| Item | Value | Flag |
|---|---|---|
| ATS hours | H24 (Tower + Approach) `[AIP AD 2.3/2.18]` | 🟩 |
| AD operating hours | Aerodrome-operator office Mon–Fri 08:30–16:30 local (Ramadan 09:00–14:30); H24 "permanence" duty coverage `[AIP AD 2.3]` | 🟩 |
| Night / curfew restrictions | None found — ATS, customs, handling and security all published H24 | 🟩 |
| RFF category | **CAT 8** `[AIP AD 2.6]` | 🟧 |
| Fuel | Jet A-1 + AVGAS 100LL, H24; hydrant system (3× 2.5 m³/min pumps, 4 servicers) + 1× 18,000 L Jet A-1 tanker + 1× 1,000 L AVGAS cart; payment in MAD or foreign currency `[AIP AD 2.3/2.4]` | 🟩 |
| PCN | Runway: PCR 721/F/A/X/T (bitumen); apron/taxiway PCR ranges 670–726 by stand group — see §7/§13 | 🟩 |
| Customs | H24 `[AIP AD 2.3]` | 🟩 |
| Handling / FBO | Swissport Maroc + RAM Handling (pax/ramp/baggage/cabin/fuel-oil/crew admin/transport); RAM ground handling company (cargo/mail) `[AIP AD 2.23]` | 🟩 |

---

## 7. Runways & declared distances

| RWY | Dimensions | Surface / PCN | TORA | TODA | ASDA | LDA | Notes |
|---|---|---|---|---|---|---|---|
| 09 | 3,200 × 45 m | Bitumen / PCR 721/F/A/X/T | 3,200 m | 3,200 m | 3,200 m | 3,200 m | THR elev 60 m/197 ft, TDZ 62 m/203 ft; **no approach lighting**; PAPI 3° (MEHT 22.58 m); no displaced threshold; strip 3,320 × 280 m; RESA 240 × 90 m; no SWY/CWY |
| 27 | 3,200 × 45 m | Bitumen / PCR 721/F/A/X/T | 3,200 m | 3,200 m | 3,200 m | 3,200 m | THR elev 77.0 m/253 ft, TDZ 76.0 m/249 ft; **CALVERT CAT I approach lighting, 900 m**; PAPI 3° (MEHT 21.79 m); TDZ lighting 900 m; **ILS CAT II** (ident ADA); strip 3,320 × 280 m; RESA 240 × 90 m; no SWY/CWY |

*Source: SIA-Maroc (ONDA) AIP, AD 2 GMAD 2.12–2.14, AIRAC AMDT N°08/25 (eff. 07 Aug 2025) for physical characteristics/lighting. Runway slope <0.53% both directions; no arresting system; no OFZ; no displaced thresholds; distances internally consistent (symmetric both ends). All distances in metres.*

---

## 8. Communications

| Service | Callsign | Frequency | Hours | Notes |
|---|---|---|---|---|
| ATIS | AGADIR INFORMATION (D-ATIS) | 127.750 | H24 | `[AIP AD 2.18]` |
| Delivery | Not separately published | — | — | Likely combined with Tower at this category-S field — confirm locally 🟧 |
| Ground | Not separately published | — | — | Likely combined with Tower — confirm locally 🟧 |
| Tower | Al Massira Tower | 119.500 (primary) / 118.000 (backup) | H24 | Emergency/distress 121.500 |
| Approach | Al Massira Approach | 120.900 (primary) / 118.200 (backup) | H24 | Radar vs procedural not confirmed 🟧 |
| Centre / FIR | Casablanca FIR (GMMM) | Per current AIRAC | H24 | See [Africa — General Airspace](../../../../airspace/africa.md); en-route ACC frequency not covered in this AD 2 extract — verify 🟧 |

*Source: AIP AD 2.18, AIRAC AMDT N°08/25 (eff. 07 Aug 2025).*

---

## 9. Navaids

| Aid | Ident | Freq | Hours | Notes |
|---|---|---|---|---|
| ILS (RWY 27, CAT II) — LOC | ADA | 110.300 | H24 | Serves RWY 27 only; RWY 09 has no ILS |
| ILS (RWY 27, CAT II) — GP/DME | ADA | 335.000 (CH40X) | H24 | Offset ~150 m from centreline near THR 27 |
| VOR/DME | ADM | 117.200 (CH119X) | H24 | Al Massira Agadir DVOR/DME |
| NDB | ALS | 396.0 kHz | H24 | ~7,250 m from THR 27 |
| NDB | AML | 402.0 kHz | H24 | ~2,550 m from THR 09 |

*Source: AIP AD 2.19, AIRAC AMDT N°08/25 (eff. 07 Aug 2025).*

---

## 10. Arrival

- **Transition altitude / level:** TA **5,000 ft** `[AIP AD 2.17]`; TL by QNH — not independently confirmed this pass. 🟧
- **Speed:** Standard 250 KIAS below FL100 assumed (ICAO/regional norm) — no field-specific override confirmed.
- **Preferential runway logic:** **RWY 27** is the equipped/preferred instrument runway (ILS CAT II + CALVERT lighting); selection is otherwise wind-driven. RWY 09 lacks approach lighting and ILS — a marginal-weather day is more likely to favour 27 where wind allows.
- **Approaches (names only — verify minima on current AIRAC charts):**

| RWY | Approach | IAF | FAF/FAP alt | Notes |
|---|---|---|---|---|
| 27 | ILS CAT II (ADA) | Not confirmed 🟧 | Not confirmed 🟧 | CAT II — confirm current LVP trigger |
| 09 | Visual/PAPI; non-precision (VOR/NDB-based) | Not confirmed 🟧 | Not confirmed 🟧 | No approach-lighting/ILS infrastructure |

- **STARs (names only):** Not confirmed in the reachable AIP text extract — the AIP chart index confirms published STAR chart pages exist (AD 2 GMAD-33-1-1/33-1-2) but does not name them here. Pull the current-AIRAC procedure list at planning. 🟧
- **LVP:** CAT II operations on RWY 27 imply LVP procedures exist; exact RVR/trigger figures not confirmed this pass. 🟧
- **Missed approach watch-items:** Obstacle-driven rather than terrain-driven — the two ~140 m/459 ft AGL lit RTM masts ~6 NM out (§3.1) are the one quantified close-in obstacle; verify missed-approach climb-gradient/obstacle clearance on the current chart.

---

## 11. Departure

- **SIDs (names only — fly the charted version):** Not confirmed in the reachable AIP text extract — chart index confirms published SID chart pages exist (AD 2 GMAD-31-1-1/31-1-2) but does not name them here. Verify current AIRAC. 🟧
- **RNP / climb-gradient requirements:** Not confirmed this pass — verify current chart, particularly given the RTM mast obstacles noted in §3.1/§6. 🟧
- **Take-off minima:** Not confirmed this pass — verify current chart. 🟧
- **Start-up / push-back:** Not separately published; Al Massira Tower (119.500/118.000) likely handles delivery/start-up functions at this category-S field — confirm locally. 🟧
- **ATC slot / CTOT & clearance:** No slot-coordination regime found in reachable sources; not confirmed as an IATA-coordinated field. 🟧
- **De-icing:** **NIL** — no facility or equipment published `[AIP AD 2.3/2.4/2.7]`. See [`OM E — Cold Weather Operations`](../../../../../flight-ops/cold-weather-operations.md) (not applicable at this field under normal conditions).

---

## 12. Noise & Environmental

- **Noise abatement (NAP):** **NIL** `[AIP AD 2.21]` 🟩
- **Night noise / dB limits:** None published. 🟩
- **Engine run-up restrictions:** Not confirmed in reachable sources. 🟧
- **Reverse thrust / idle-reverse policy:** Not confirmed in reachable sources. 🟧

---

## 13. Ground operations

- **Stands for our types:** Apron stand groups C1–C6, C10, C14, C15 (concrete, PCR 726/R/A/W/T), C7/C11 (PCR 700), C8/C9 (PCR 670), C12 (PCR 710), C13 (PCR 720), plus E1–E3 and L1–L4 (bitumen, PCR 721/F/A/X/T) `[AIP AD 2.8]`; exact code-letter/wingspan suitability per stand is not detailed in the reachable AIP table — confirm widebody-capable stand assignment with handling. 🟧
- **Push-back:** Mandatory-vs-self-manoeuvre policy not confirmed. 🟧
- **Standard taxi routes:** TWY A/B (40 m wide, concrete) and TWY D/D5 (36 m wide, concrete) are the widest surfaced taxiways on field, likely the primary movement routes for larger types; confirm actual routing with Ground/Tower on the day.
- **Hot spots / tight taxiways:** 🟥 A **WIG WAG warning-light system** is installed at the **TWY D1/RWY** and **TWY D5/RWY** intersections `[AIP AD 2.9]` — the AIP itself flags these as active runway-crossing points requiring the warning system; brief accordingly.
- **Follow-me:** Availability not confirmed in reachable sources. 🟧

---

## 14. Weather & seasonal (durable)

- **Climate / prevailing wind:** Atlantic coastal Souss-Massa climate. AIP monthly mean temperature ranges from 22.9°C/7.5°C (Jan, max/min) to 32.0°C/19.8°C (Aug, max/min) `[AIP AD 2.11]`. No wind-rose figure was obtained this pass — the RWY 27 ILS/CALVERT-lighting equipment bias is consistent with a westerly/onshore preferred configuration (an operational inference from the infrastructure, not a sourced wind figure). 🟧
- **Seasonal hazards:** The AIP climate table shows a pronounced humidity spike at 06:00 (77–89%) versus midday (41–54%), essentially year-round `[AIP AD 2.11]` — a pattern consistent with coastal morning fog/marine-layer/dew formation; no independent METAR-derived fog-frequency statistic was obtained this pass. 🟧 No snow/ice season — seasonal clearing equipment is published as NIL. 🟩
- **Local effects:** Coastal location — treat morning marine-layer/fog as the standing seasonal watch-item; an afternoon sea-breeze plausibly favours RWY 27 (inference, not a sourced wind-rose figure).

> **Live weather — pull at planning (T-2h):** METAR, TAF, TREND, SIGMET/AIRMET. Not stored here.

---

## 15. NOTAMs

> **Pull at planning (T-2h).** Perishable — not stored here. Check: runway/taxiway closures, navaid U/S (ILS ADA, DVOR/DME ADM, NDBs ALS/AML), lighting, obstacle/crane, RFF downgrade, GPS/RAIM, current airspace restrictions near GMP11/GMP14. Source: AIS / OFP NOTAM block.

---

## 16. Fuel & alternate planning notes

- **Typical role for us:** **Destination** (regional/leisure) — not a K Global base. `[VAMSYS mirror 2026-07-26]`
- **Nearest suitable alternates:** Company preferred alternates [**GMMX**](../gmmx/index.md) (Marrakech) and [**GMMN**](../gmmn/index.md) `[VAMSYS mirror 2026-07-26]` — confirm suitability, runway/RFF adequacy and current minima per leg.
- **Fuel-uplift notes:** Jet A-1 confirmed H24 on-field (hydrant system + tanker/cart); AVGAS 100LL also available for GA. Into-plane supplier company name not individually confirmed. 🟧 See [`OM E — Fuel Policy`](../../../../../flight-ops/fuel-policy.md).
- **Range/perf flags for our fleet:** 3,200 m runway is non-limiting for narrow/mid-body types at this elevation. Confirm RFF CAT 8 and stand code-letter adequacy before assigning any widebody type. See [`OM B — Fleet Capability Matrix`](../../../../../fleet/capability-matrix.md).

---

## 17. Fleet-specific notes (optional)

- GMAD is a Category S regional/leisure destination — no single-type consideration beyond the RFF CAT 8 / stand-code caution above (§5/§13). See [`OM B — Fleet Capability Matrix`](../../../../../fleet/capability-matrix.md) for type-by-type range/performance reference before assigning a longer-body aircraft here.

---

## 18. Open items (🟧 — confirm against AIP / current AIRAC)

- **RFF CAT 8 vs assigned fleet** — confirm coverage for any type longer than ~61 m overall length before scheduling.
- **Radar vs procedural approach control** — not stated in the reachable AIP extract.
- **SIDs/STARs/additional IAP names** — AIP chart index confirms the charts exist (AD 2 GMAD-31/33/35/39/43/49) but names were not present in the reachable text; pull the live current-AIRAC procedure list before use.
- **Take-off minima, LVP RVR/trigger figures, TL by QNH** — not confirmed this pass.
- **Wind-rose / prevailing-wind data** — not obtained; the RWY 27 preference stated here is an equipment-based inference, not a sourced figure.
- **Coastal fog/marine-layer frequency** — inferred from AIP humidity data, not confirmed against a METAR-derived statistic.
- **Widebody (Code E/F) stand and push-back policy** — apron PCR data obtained, but code-letter/wingspan suitability per stand not detailed.
- **Follow-me availability, engine run-up restriction, reverse-thrust/idle-reverse policy** — none confirmed in reachable sources.
- **GMP11/GMP14 boundaries** — overflight prohibition confirmed by name; exact area boundaries not obtained this pass.
- **DST calendar** — Morocco's seasonal clock changes (including a Ramadan pause) should be re-verified for the current year at planning.
- **IVAO Morocco division SOP** — attempted for operational cross-check per the standard workflow; the source was unreachable in this research pass (timed out) — no network-sim cross-check obtained.

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim material (current-AIRAC charts) informs content but is not listed here.*

- **SIA-Maroc (ONDA) AIP Morocco, AD 2 GMAD** — sections carry mixed amendment dates within the current package (AIRAC AMDT N°05/26, eff. 14 May 2026; N°04/26, eff. 16 Apr 2026; N°13/25, eff. 25 Dec 2025; N°09/25, eff. 04 Sep 2025; N°08/25, eff. 07 Aug 2025) — https://siamaroc.onda.ma/eaip/AD/AD2GMAD.pdf (retrieved 2026-07-26). *Primary source for ARP, elevation, declared distances, RFF, navaids, frequencies, obstacles, hours, PCN.*
- OurAirports — https://ourairports.com/airports/GMAD/ and /runways.html and /frequencies.html (retrieved 2026-07-26). *ARP/elevation/runway/frequency cross-check.*
- SkyVector — https://skyvector.com/airport/GMAD (retrieved 2026-07-26). *Runway-end elevation and navaid cross-check.*
- Wikipedia — "Agadir–Al Massira Airport" — https://en.wikipedia.org/wiki/Al_Massira_Airport (retrieved 2026-07-26). *Terminal/apron size, passenger volume, airline mix, ILS class corroboration.*

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-26 | Built from AIP Morocco (ONDA); K Global fields from live VAMSYS; 4-page pack. |
