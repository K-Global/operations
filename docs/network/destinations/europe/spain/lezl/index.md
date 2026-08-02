# LEZL — Sevilla-San Pablo · Airport Briefing

**LEZL / SVQ** · Seville, Andalusia, Spain · Europe
**Version** v0.1 · **Updated** 2026-07-26 · **Status** Draft

> **Read-me:** Planning aid for the sim, not a chart. Static data is drawn from AIP España (ENAIRE) where reachable, corroborated by public aeronautical data; the ENAIRE eAIP itself renders as a JavaScript frameset and could not be fetched directly this pass — figures below lean more heavily on tier-4 corroboration than a hub-field build, and are flagged accordingly. Approaches/SIDs/STARs are listed **by name only or flagged not-yet-confirmed** — fly the charted current-AIRAC version. Live weather/NOTAMs are pulled at planning (§14/§15). Open 🟧 items are listed in §18. Flag legend 🟥 restriction/hazard · 🟧 caution/unverified · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| ARP (lat/long) | N37°25′05″ / W005°53′35″ (37.4180, -5.8931) `[OurAirports/Wikipedia]` 🟧 not AIP-primary |
| Field elevation | **112 ft / 34 m AMSL** `[OurAirports]` |
| Mag variation | Not published / verify 🟧 |
| Time zone | UTC+1 (CET) / UTC+2 (CEST, EU DST observed) |
| Runway(s) | **09/27**, 3,362 × 45 m, asphalt — **single runway, no parallel or crosswind alternate** |
| Preferential runway | Not published / verify 🟧 — single-runway field, wind-driven choice of 09 vs 27 only |
| Longest LDA | ~3,362 m pending confirmed declared distances 🟧 |
| Approaches | Not confirmed this pass — at least one ILS is assumed on a major AENA international field but not sourced 🟧 |
| RFF category | Not published / verify 🟧 |
| Control type | Radar assumed (Sevilla Aproximación) — not independently confirmed 🟧 |
| Elevation class | Near sea-level (112 ft) — **not** hot-and-high; the real performance driver is **Seville's extreme summer heat** (routinely 40–45°C Jun–Sep, among the hottest cities in mainland Europe), not field elevation |
| Special-airport status | None identified in reachable sources; the operative gap is that **K Global's own VAMSYS category is not set** for this field — see §5 🟧 |
| Customs / PoE | **Yes** — international routes to ~57 European/North African destinations reported `[Wikipedia]`; desk hours not confirmed 🟧 |
| K Global category | **Not set** `[VAMSYS mirror 2026-07-26]` 🟧 |
| K Global base | **No** `[VAMSYS mirror 2026-07-26]` |
| Company preferred alternates | **LXGB, LEMG, GMTT** `[VAMSYS mirror 2026-07-26]` |
| Taxi-in / taxi-out (VAMSYS) | **n/a** — not populated in VAMSYS for this field `[VAMSYS mirror 2026-07-26]` 🟧 |

---

## 2. Validation summary

| Domain | Flag | Note |
|---|---|---|
| Terrain / CFIT | 🟩 | Flat Guadalquivir valley floor; no close-in high terrain relevant to arrival, departure or missed-approach paths. |
| Runway length vs fleet perf | 🟩 | 3,362 m is ample for any K Global narrowbody and most widebody weights; confirm against specific heavy-widebody performance if ever rostered here. |
| Approach availability / minima | 🟧 | Not confirmed from a primary table this pass — pull current AIRAC. |
| Airspace / traffic / control | 🟧 | Moderate traffic under Sevilla Aproximación within the wider **Madrid (LECM)** ACC sector; no dedicated LEZL-area FIR brief exists — see [Europe (Continental) Airspace Briefing](../../../../airspace/europe.md). |
| Weather / seasonal hazard | 🟥 | **Extreme summer heat** (routinely 40–45°C) is the defining performance/reliability driver, not terrain or fog. |
| Curfew / slots / hours | 🟧 | Not confirmed — no data found in reachable sources. |
| RFF category vs our types | 🟧 | Not published / verify. |
| Fuel availability | 🟧 | Jet A-1 assumed as a major AENA international field; hours/supplier not confirmed. |
| Customs / handling / security | 🟧 | International PoE confirmed by route network; desk hours and handling agent not confirmed. |

---

## 3. Threat & Error Management (TEM)

### 3.1 CFIT / Terrain 🟩
LEZL sits at 112 ft AMSL on the flat floor of the Guadalquivir valley — there is no close-in high terrain relevant to arrival, departure or missed-approach paths. This is a non-issue field for terrain; verify the MSA ring on the current chart as routine practice.

### 3.2 Airborne conflict / traffic 🟧
LEZL is a single-runway field under **Sevilla Aproximación**, within the wider **Madrid (LECM)** ACC/UIR sector (ENAIRE). Traffic is moderate — regional/leisure scheduled service plus a notable volume of **non-scheduled test, production and maintenance traffic**: the field hosts an **Airbus Defence and Space final-assembly line ("San Pablo Sur")**, an **Airbus MRO facility ("San Pablo Norte")**, and a **Ryanair maintenance base**. Expect this traffic mix in the local circuit in addition to scheduled arrivals/departures. No dedicated LEZL-area or Spain-domestic FIR brief exists in the OM C library; see the general [Europe (Continental) Airspace Briefing](../../../../airspace/europe.md) for the Madrid (LECM) sector context.

### 3.3 Runway excursion 🟧
**Single runway 09/27 offers no crosswind or parallel-runway alternate** — a strong crosswind day, whichever direction the wind, must be flown as published with no runway-choice mitigation. No displaced-threshold data was found in reachable sources — not independently confirmed either way. Flag for verification against the current AIRAC.

### 3.4 Weather threat 🟥
Seville is one of the hottest cities in mainland Europe, with **routine summer highs of 40–45°C (Jun–Sep)** — this is the field's defining weather threat and a genuine performance driver (takeoff weight/V-speed margins) despite the low field elevation; treat it with the same seriousness as a hot-and-high consideration even though density-altitude terminology doesn't strictly apply at 112 ft. Winter can bring valley radiation fog in the Guadalquivir basin — plausible given the terrain/climate but **not independently confirmed for LEZL specifically** 🟧. General Andalusian convective-storm risk exists in the shoulder seasons; no LEZL-specific frequency statistic was found.

### 3.5 Operational considerations 🟧
Three durable planning gaps stand out: (1) the **single-runway capacity constraint** with no crosswind relief; (2) **K Global's own VAMSYS category is unset** for this field — a governance item to close before treating LEZL as fully validated for scheduled ops; and (3) the **mixed test/production/MRO traffic** generated by the on-field Airbus and Ryanair facilities. RFF, navaid and approach data are all open items pending a primary-source pass — see §18.

---

## 4. Cautions & Warnings

- **Single runway 09/27 — no crosswind or parallel-runway alternate.** A strong crosswind day must be flown as published; there is no runway-choice mitigation at this field.
- **Extreme summer heat (routinely 40–45°C, Jun–Sep)** is a real performance driver despite the low field elevation — verify performance-limited takeoff weight on hot days.
- **K Global VAMSYS category is not set** for this field — confirm before treating LEZL as a fully validated scheduled destination.
- **Airbus San Pablo Sur/Norte (assembly + MRO) and a Ryanair maintenance base** operate on the field — expect non-airline test/ferry/production traffic mixed into the local circuit.
- Andalusia's **Guadalquivir valley and Doñana wetlands region** (~80 km SW) support significant birdlife/agricultural land in the wider area — brief standard bird-strike awareness as routine practice; no elevated field-specific bird-hazard figure was found in reachable sources. 🟧

---

## 5. Aerodrome category, restrictions & crew qualification

- **Special-airport / category:** Not operator-categorised as a restricted-crew "special airport" in reachable public sources. **K Global's own VAMSYS category field is unset for LEZL** — this should be resolved before scheduling reliance on the field. 🟧
- **Crew-qualification gate:** None identified in reachable sources; standard crew currency applies pending confirmation. 🟧
- **Operating restrictions / bans:** None identified in reachable sources — verify current AIRAC. 🟧
- **Overflight / entry / permits:** Standard EU/Schengen international arrival; no special state permit required. 🟩
- **Operations notes:** ANSP — **ENAIRE**; airport operator — **AENA**. On-field industrial aviation: Airbus Defence and Space final-assembly ("San Pablo Sur") and MRO ("San Pablo Norte"), plus a Ryanair maintenance base.

---

## 6. General / hours / services

| Item | Value | Flag |
|---|---|---|
| ATS hours | Not confirmed | 🟧 |
| AD operating hours | Not confirmed | 🟧 |
| Night / curfew restrictions | Not confirmed — no data found in reachable sources | 🟧 |
| RFF category | Not published / verify | 🟧 |
| Fuel | Jet A-1 assumed (major AENA international field); supplier/hours not confirmed | 🟧 |
| PCN | Not published / verify | 🟧 |
| Customs | International PoE confirmed by route network; desk hours not confirmed | 🟧 |
| Handling / FBO | Not confirmed | 🟧 |

---

## 7. Runways & declared distances

| RWY | Dimensions | Surface / PCN | TORA | TODA | ASDA | LDA | Notes |
|---|---|---|---|---|---|---|---|
| 09 | 3,362 × 45 m | Asphalt / PCN not published 🟧 | Not published / verify | Not published / verify | Not published / verify | Not published / verify | Single runway; no displaced-threshold data confirmed either way |
| 27 | 3,362 × 45 m | Asphalt / PCN not published 🟧 | Not published / verify | Not published / verify | Not published / verify | Not published / verify | Reciprocal of the same physical runway |

*Source: OurAirports (runway dimensions/surface, retrieved 2026-07-26); ENAIRE eAIP AD 2 LEZL not directly reachable this pass (JavaScript-frameset access issue) — declared distances/PCN are open items (§18).*

---

## 8. Communications

| Service | Callsign | Frequency | Hours | Notes |
|---|---|---|---|---|
| ATIS | Sevilla ATIS | 118.175 | Not confirmed | 🟧 |
| Delivery | Not confirmed | — | — | 🟧 |
| Ground | Sevilla Ground | 121.7 | Not confirmed | 🟧 |
| Tower | Not confirmed | — | — | 🟧 |
| Approach | Sevilla Aproximación | 125.8 | Not confirmed | 🟧 |
| Centre / FIR | Madrid (LECM) ACC/UIR (ENAIRE) | Per current AIRAC | H24 (assumed) | See [Europe (Continental) Airspace Briefing](../../../../airspace/europe.md) — no LEZL-specific FIR brief exists |

*Source: OurAirports frequency data (retrieved 2026-07-26) — treat as 🟧 pending a live-AIRAC/primary-AIP cross-check; Tower and Delivery frequencies not found in reachable sources.*

---

## 9. Navaids

| Aid | Ident | Freq | Hours | Notes |
|---|---|---|---|---|
| ILS | Not confirmed | Not confirmed | Not confirmed | An ILS is assumed on at least one runway end for a major AENA international field but not sourced this pass 🟧 |
| VOR/DME | Not confirmed | Not confirmed | Not confirmed | 🟧 |

*No navaid table was found in reachable public sources this pass — pull the current-AIRAC navaid list at planning; see §18.*

---

## 10. Arrival

- **Transition altitude / level:** Not confirmed — verify current chart. 🟧
- **Speed:** Standard 250 KIAS below FL100 (EU/ICAO norm) assumed — confirm no local override.
- **Preferential runway logic:** Single-runway field — the only choice is 09 vs 27, driven by wind; no published preferential-runway rule found. 🟧
- **Approaches (names only — verify minima on current AIRAC charts):**

| RWY | Approach | Notes |
|---|---|---|
| 09 | Not confirmed 🟧 | Pull current-AIRAC approach list at planning |
| 27 | Not confirmed 🟧 | Pull current-AIRAC approach list at planning |

- **STARs (names only):** Not confirmed in reachable research pass. 🟧
- **LVP:** Not confirmed. 🟧
- **Missed approach watch-items:** Terrain is not the driver (flat valley floor); the operative concern is re-sequencing on a single-runway field, and awareness of the mixed test/production/MRO traffic pattern (§3.2).

---

## 11. Departure

- **SIDs (names only — fly the charted version):** Not confirmed in reachable research pass — pull the current-AIRAC SID list at planning. 🟧
- **RNP / climb-gradient requirements:** Not confirmed. See [`OM E — PBN and RNP Operations`](../../../../../flight-ops/pbn-and-rnp-operations.md).
- **Take-off minima:** Not published / verify. 🟧
- **Start-up / push-back:** Not confirmed. 🟧
- **ATC slot / CTOT & clearance:** No slot-coordination data found; a regional AENA international field of this size is not expected to carry an IATA Level 3 designation, but this is **not independently confirmed**. 🟧
- **De-icing:** Not confirmed — Andalusia's climate makes routine de-icing unlikely, but this is not sourced as a formal NIL. 🟧 See [`OM E — Cold Weather Operations`](../../../../../flight-ops/cold-weather-operations.md).

---

## 12. Noise & Environmental

- **Noise abatement (NAP):** Not confirmed. 🟧
- **Night noise / dB limits:** Not confirmed. 🟧
- **Engine run-up restrictions:** Not confirmed. 🟧
- **Reverse thrust / idle-reverse policy:** Not confirmed. 🟧

---

## 13. Ground operations

- **Stands for our types:** **23 stands, all self-manoeuvring, of which 16 are remote** `[Wikipedia]` — no widebody/Code-E-specific stand data confirmed; verify against our fleet mix. 🟧 | 🟧
- **Push-back:** Self-manoeuvring stand design reported — mandatory-vs-optional push-back not independently confirmed. 🟧
- **Standard taxi routes:** Not confirmed — single-runway field simplifies routing in principle; confirm with Ground/Apron on the day.
- **Hot spots / tight taxiways:** Not confirmed in reachable sources. 🟧
- **Follow-me:** Availability not confirmed. 🟧

---

## 14. Weather & seasonal (durable)

- **Climate / prevailing wind:** Hot-summer Mediterranean climate (Csa) in the Guadalquivir valley — very hot, dry summers and mild, wetter winters. Prevailing wind not independently sourced this pass. 🟧
- **Seasonal hazards:** **Extreme summer heat** (routinely 40–45°C, Jun–Sep) is the defining hazard — a genuine performance/reliability driver despite low field elevation. Plausible winter valley radiation fog given the terrain/climate — not independently confirmed for LEZL specifically. 🟧 General Andalusian convective-storm risk in shoulder seasons — no LEZL-specific frequency statistic found.
- **Local effects:** Guadalquivir-valley heat is the standout local effect; no notable terrain/sea-breeze effects at this inland field.

> **Live weather — pull at planning (T-2h):** METAR, TAF, TREND, SIGMET/AIRMET. Not stored here.

---

## 15. NOTAMs

> **Pull at planning (T-2h).** Perishable — not stored here. Check: runway closures (no crosswind alternate on this single-runway field), navaid U/S, lighting, obstacle/crane (incl. any on-field Airbus construction activity), RFF downgrade, GPS/RAIM. Source: official AIS / OFP NOTAM block.

---

## 16. Fuel & alternate planning notes

- **Typical role for us:** **Destination / network spoke** — not a K Global base. `[VAMSYS mirror 2026-07-26]`
- **Nearest suitable alternates:** Company preferred alternates **LXGB** (Gibraltar — no OM C brief yet), [**LEMG**](../lemg/index.md) (Málaga-Costa del Sol — legacy stub, not yet folded into a 4-page pack), [**GMTT**](../../../africa/morocco/gmtt/index.md) (Tangier — legacy stub) `[VAMSYS mirror 2026-07-26]` — confirm suitability, runway/RFF adequacy and current minima per leg.
- **Fuel-uplift notes:** Jet A-1 assumed available as a major AENA international field; specific into-plane provider/hours not confirmed. 🟧 See [`OM E — Fuel Policy`](../../../../../flight-ops/fuel-policy.md).
- **Range/perf flags for our fleet:** Field length (3,362 m) non-limiting for any K Global type at normal weights; the real performance flag is **summer-heat-driven weight/V-speed margin**, not field length or elevation. See [`OM B — Fleet Capability Matrix`](../../../../../fleet/capability-matrix.md).

---

## 17. Fleet-specific notes (optional)

- No type-specific field-length or elevation consideration for any K Global type at LEZL's 3,362 m single runway. The one fleet-relevant note is **extreme-heat performance planning** on summer operating days — see [`OM B — Fleet Capability Matrix`](../../../../../fleet/capability-matrix.md) for type-by-type reference and [`OM E — Adverse Weather and Windshear`](../../../../../flight-ops/adverse-weather-and-windshear.md) for general hot-weather handling notes.

---

## 18. Open items (🟧 — confirm against AIP / current AIRAC)

- **ENAIRE eAIP AD 2 LEZL** was not directly reachable this pass (JavaScript frameset) — nearly every AIP-primary figure below (declared distances, PCN, frequencies beyond ATIS/Ground/Approach, navaids, RFF category, hours, SIDs/STARs/approaches, take-off minima) needs a live-AIP or current-AIRAC cross-check.
- **K Global VAMSYS category is unset** for this field — resolve before treating LEZL as fully validated for scheduled ops.
- ARP coordinates and field elevation are OurAirports/Wikipedia-sourced, not confirmed against the primary AIP (minor discrepancy noted: some sources give 111 ft vs the 112 ft used here).
- Curfew/slot-coordination status — no data found; not confirmed as either present or absent.
- RFF category, PCN, and navaid idents/frequencies.
- SID/STAR names and take-off minima — pull the live current-AIRAC procedure list before use.
- Handling agent(s) and stand/gate assignment for our operation.
- Displaced-threshold status on RWY 09/27 — not found either way in reachable sources.

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim material (current-AIRAC charts) informs content but is not listed here.*

- **AIP España (ENAIRE), AD 2 LEZL** — landing page https://aip.enaire.es/AIP/ attempted 2026-07-26; renders as a JavaScript frameset in a raw fetch and could not be retrieved directly this pass. Flagged for a future browser-based re-attempt per the source register guidance on JS-gated eAIPs.
- OurAirports — https://ourairports.com/airports/LEZL/ , /runways.html , /frequencies.html (retrieved 2026-07-26). *ARP/elevation/runway/frequency cross-check.*
- Wikipedia — "Seville Airport" — https://en.wikipedia.org/wiki/Seville_Airport (retrieved 2026-07-26). *Route network, stand count, on-field Airbus/Ryanair facilities, capacity-expansion history.*
- AENA — Seville Airport — https://www.aena.es/en/seville.html (retrieved 2026-07-26). *Operator reference — not deep-linked to AIP data this pass.*

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-26 | Built from AIP España (ENAIRE); K Global fields from live VAMSYS; 4-page pack. |
