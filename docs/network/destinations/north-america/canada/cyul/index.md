# CYUL — Pierre Elliott Trudeau Intl · Airport Briefing

**CYUL / YUL** · Dorval, Montréal, Québec, Canada · North America
**Version** v0.1 · **Updated** 2026-07-26 · **Status** Draft

> **Read-me:** Planning aid for the sim, not a chart. Static data is drawn from NAV CANADA public sources (Canada Flight Supplement / Canada Air Pilot structure, TC AIM) plus operator (ADM) statements and a VATSIM vACC (CZUL) pilot-briefing cross-check; approaches/SIDs/STARs are listed **by name only or flagged not-yet-confirmed** — fly the charted current-AIRAC version. Live weather/NOTAMs are pulled at planning (§14/§15). Open 🟧 items are listed in §18. Flag legend 🟥 restriction/hazard · 🟧 caution/unverified · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| ARP (lat/long) | N45°28′04″ / W073°44′32″ (45.4678, -73.7423) `[OurAirports, retrieved 2026-07-26]` |
| Field elevation | **~118 ft AMSL** |
| Mag variation | 🟧 Not published / verify — southern Québec is ~ -15° to -16° W by regional estimate; not a sourced AIP figure this pass |
| Time zone | UTC-5 (EST) / UTC-4 (EDT, DST observed) |
| Runway(s) | **06L/24R** 3,353 × 61 m · **06R/24L** 2,926 × 61 m · 🟥 **former RWY 10/28 — DECOMMISSIONED**, now repurposed as **Taxiway Charlie** (does not require a runway-crossing clearance) — see caution below |
| Preferential runway | **West operations preferred** — RWY 24L/R used up to a 5 kt tailwind to keep departures (the noisiest phase) over Lac Saint-Louis, south-west of the field |
| Longest LDA | 3,353 m (RWY 06L/24R) — exact declared-distance breakdown not confirmed this pass 🟧 |
| Approaches | **ILS CAT I fleet-wide; RWY 06L reported CAT II** 🟧 (tier-4 corroboration only — not independently confirmed against a primary AIP table); Montréal is **not** among Canada's CAT III-equipped fields |
| RFF category | 🟧 Not published / verify — assumed **CAT 9** for a widebody-international gateway, not independently confirmed |
| Control type | **Radar** — Montréal Tower/Ground/Apron on the field; **Montréal Terminal** (NAV CANADA) approach/departure; **Montréal FIR (CZUL)** — Montréal Area Control Centre en route — see [North America — Airspace](../../../../airspace/north-america.md) |
| Elevation class | Near sea-level (~118 ft) — **not** hot-and-high; the defining reliability driver is **heavy winter snowfall (avg. ~220 cm/year) and freezing rain**, not density altitude |
| Special-airport status | 🟧 Apron under **positive ATC control** (unusual — North/South Ramp, East/West Lane taxi-instruction structure); no confirmed IATA slot-coordination level this pass — see §5 |
| Customs / PoE | **Yes** — single main terminal with international (gates 50–68) and US transborder preclearance (gates 72–89) halls |
| K Global category | **L** `[VAMSYS mirror 2026-07-26]` 🟩 |
| K Global base | **No** `[VAMSYS mirror 2026-07-26]` |
| Company preferred alternates | **CYYZ, CYOW, CYQB** `[VAMSYS mirror 2026-07-26]` |
| Taxi-in / taxi-out (VAMSYS) | **12 min / 16 min** `[VAMSYS mirror 2026-07-26]` |

---

## 2. Validation summary

| Domain | Flag | Note |
|---|---|---|
| Terrain / CFIT | 🟩 | Flat St. Lawrence Valley/island-of-Montréal plain; no close-in high terrain. Non-factor for the field itself. |
| Runway length vs fleet perf | 🟩 | RWY 06L/24R (3,353 m) is ample for any K Global widebody; RWY 06R/24L (2,926 m) is non-limiting for typical arrival/departure weights but should be checked per type on hot or contaminated days. |
| Approach availability / minima | 🟧 | ILS CAT I fleet-wide, RWY 06L reported CAT II by tier-4 corroboration only — no CAT III at this field (contrast with CYYZ). Not independently confirmed against a primary AIP table. |
| Airspace / traffic / control | 🟩 | Two active parallel runways (post-10/28 decommissioning) under Montréal Terminal radar — a materially simpler geometry than CYYZ's five-runway CSPO layout. |
| Weather / seasonal hazard | 🟥 | Heavy winter snowfall (~220 cm/year average) and freezing rain are the field's defining threat — the airport never fully closes but relies on a large-scale deicing/snow-removal operation. |
| Curfew / slots / hours | 🟥 | Jets **> 45,000 kg operate 07:00–24:00 (takeoffs) / 07:00–01:00 (landings)**; sub-45,000 kg jets operate H24; ADM (operator) retains exemption authority for weather/emergency/delay — see §6/§12. A stricter overnight ban (01:00–06:00) has been **proposed but is not yet in force** — treat as a watch item, not current policy. |
| RFF category vs our types | 🟧 | Assumed CAT 9 (not independently confirmed) — expected adequate for our fleet; confirm before treating as audit-grade. |
| Fuel availability | 🟧 | Jet A-1/A confirmed available via multiple FBOs; specific into-plane supplier/hours for scheduled widebody service not confirmed. |
| Customs / handling / security | 🟧 | Single-terminal international/US-preclearance structure confirmed; exact desk hours not confirmed. |

---

## 3. Threat & Error Management (TEM)

### 3.1 CFIT / Terrain 🟩
CYUL sits at ~118 ft AMSL on the flat St. Lawrence Valley / island-of-Montréal plain — there is **no close-in high terrain** relevant to arrival, departure or missed-approach paths. Verify the MSA ring on the current chart as routine practice, but CFIT is not the operative threat at this field.

### 3.2 Airborne conflict / traffic 🟩
Montréal-Trudeau operates **two active parallel runways** (06L/24R and 06R/24L) since the former crosswind runway 10/28 was decommissioned and repurposed as **Taxiway Charlie** — a materially simpler traffic geometry than a multi-runway CSPO hub. The **North runway (06L/24R) is normally used for arrivals**, the **South runway (06R/24L) for departures, general aviation and as a secondary arrival runway** per the CZUL vACC pilot briefing (network-sim cross-check, not regulatory). Cross-ref [North America — Airspace](../../../../airspace/north-america.md) for the Montréal FIR (CZUL) context.

### 3.3 Runway excursion 🟧
No displaced-threshold information was obtained from a primary source this pass for either active runway — **not independently confirmed**, flagged for verification against current AIRAC. Brief the runway-specific usable landing distance once confirmed (see §7).

### 3.4 Weather threat 🟥
Montréal-Trudeau averages **~220 cm (≈87 in) of snow per year** and is exposed to **freezing rain from St. Lawrence Valley winter storm systems** — the field's defining seasonal hazard. The airport is reported to **never fully close and rarely suspend operations**, relying on a large-scale snow-removal team (clearing 1.9M+ m² of apron/runway/taxiway) and a dedicated aircraft deicing facility. See §14.

### 3.5 Operational considerations 🟧
Plan around three durable constraints: (1) the **former RWY 10/28 → Taxiway Charlie conversion** — older scenery/chart data may still depict it as an active runway; confirm current status and do not expect a runway-crossing clearance to cross it (see Cautions below); (2) the **positive-ATC-control apron** with North/South Ramp and East/West Lane taxi-instruction phraseology — an operational structure not common to every field in the network; and (3) the **weight-based curfew** (jets > 45,000 kg restricted outside 07:00–24:00/07:00–01:00) plus a **proposed but not-yet-in-force** overnight ban — monitor for a policy change. RFF, navaid and approach infrastructure are adequate for our fleet; the open items in §18 are mostly currency/administrative confirmations.

---

## 4. Cautions & Warnings

- 🟥 **Former Runway 10/28 is DECOMMISSIONED and is now Taxiway Charlie** — it does **not** require a runway-crossing clearance. Older simulator scenery/charts may still depict 10/28 as an active runway; do not expect ATC to treat it as one. This is a real, current-status discrepancy worth flagging prominently — confirm against the current AIP/CFS before any planning that assumes a third runway exists.
- **Apron is under positive ATC control** — an unusual feature for the network; all North Ramp/South Ramp/East Lane/West Lane taxi instructions must be followed exactly; there is no requirement to report "parked at gate."
- **South Ramp between gates 47 and 49 is prohibited to aircraft with wingspan ≥ 36 m (118 ft)** — B757/A310-and-larger types (i.e., most K Global widebody equipment) must taxi via **North Ramp only** 🟥 — a direct stand/taxi constraint for our fleet.
- **No dedicated cargo apron at CYUL** — CYMX (Montréal/Mirabel) is the region's cargo airport; plan belly-cargo/freighter considerations accordingly.
- **Heavy winter snowfall (~220 cm/year) and freezing rain** can affect braking action and taxi/apron availability with little warning — the field's dedicated deicing facility and snow-removal operation are the standing mitigations.
- **Weight-based curfew structure (07:00–24:00 takeoffs / 07:00–01:00 landings for jets > 45,000 kg)** is more nuanced than a simple hard curfew — confirm the exact rule applicable to the operating type before planning a late rotation. A stricter blanket overnight ban has been **proposed** by the airport authority but is **not yet in force** — a live policy-change watch item.
- Mag variation, exact RFF category, ILS category beyond RWY 06L, and PCN are **not confirmed from a primary AIP table this pass** — treat as 🟧 pending a live NAV CANADA CFS/CAP cross-check (§18).

---

## 5. Aerodrome category, restrictions & crew qualification

- **Special-airport / category:** Not operator-categorised as a restricted-crew "special airport" in reachable sources; the standing crew-briefing items are the **decommissioned-runway/Taxiway Charlie ground-layout change** and the **positive-ATC-controlled apron**. 🟧
- **Crew-qualification gate:** CAT II currency required if planning a low-vis arrival on RWY 06L (tier-4-reported capability, not independently confirmed). 🟧
- **Operating restrictions / bans:** Weight-based curfew for jets > 45,000 kg (§6/§12); no RNP AR ban or circling restriction found in reachable sources — verify current AIRAC. 🟧
- **Overflight / entry / permits:** Standard international arrival into Canada; no special state permit required. 🟩
- **Operations notes:** ANSP — **NAV CANADA** (Montréal Tower/Terminal; Montréal Area Control Centre en route); Airport operator — **Aéroports de Montréal (ADM)**. No confirmed IATA slot-coordination level this pass — assume non-coordinated pending verification. 🟧

---

## 6. General / hours / services

| Item | Value | Flag |
|---|---|---|
| ATS hours | Tower/Ground/Apron H24 (major-hub assumption); exact position hours not independently confirmed | 🟧 |
| AD operating hours | H24 for sub-45,000 kg jets; weight-based restriction otherwise (below) | 🟥 |
| Night / curfew restrictions | Jets **> 45,000 kg**: takeoffs **07:00–24:00**, landings **07:00–01:00**; sub-45,000 kg jets H24. ADM retains exemption authority for medical emergencies, carrier-uncontrollable delays and weather. A **proposed** (not-yet-in-force) overnight ban (01:00–06:00, stricter for louder types) is a live policy-change watch item. | 🟥 |
| RFF category | 🟧 Not published / verify — assumed CAT 9 | 🟧 |
| Fuel | Jet A/A-1/100LL available via multiple FBOs at Dorval; scheduled-service into-plane supplier not individually confirmed | 🟧 |
| PCN | 🟧 Not published / verify this pass | 🟧 |
| Customs | Single main terminal — international (gates 50–68) and US transborder preclearance (gates 72–89); exact desk hours not confirmed | 🟧 |
| Handling / FBO | ADM (Apron/Ramp positive control) plus third-party ground handlers and FBOs at Dorval (not individually confirmed) | 🟧 |

---

## 7. Runways & declared distances

| RWY | Dimensions | Surface / PCN | TORA | TODA | ASDA | LDA | Notes |
|---|---|---|---|---|---|---|---|
| 06L | 3,353 × 61 m | Asphalt; PCN 🟧 not published | 🟧 not published | 🟧 not published | 🟧 not published | 3,353 m 🟧 (no displaced threshold confirmed) | Normally the arrival runway; reported CAT II ILS 🟧 |
| 24R | 3,353 × 61 m | Asphalt; PCN 🟧 not published | 🟧 not published | 🟧 not published | 🟧 not published | 3,353 m 🟧 | Reciprocal of 06L |
| 06R | 2,926 × 61 m | Asphalt; PCN 🟧 not published | 🟧 not published | 🟧 not published | 🟧 not published | 2,926 m 🟧 | Normally the departure/GA/secondary-arrival runway |
| 24L | 2,926 × 61 m | Asphalt; PCN 🟧 not published | 🟧 not published | 🟧 not published | 🟧 not published | 2,926 m 🟧 | Reciprocal of 06R |
| ~~10/28~~ | — | — | — | — | — | — | 🟥 **DECOMMISSIONED — now Taxiway Charlie.** Not an active runway; does not require a crossing clearance. Confirm current status against the AIP before use. |

*Source: OurAirports runway extract (retrieved 2026-07-26) for dimensions — **tier-4, cross-check only**; the CZUL (VATSIM vACC) 2024 pilot briefing independently corroborates the former-10/28-to-Taxiway-Charlie conversion. Exact TORA/TODA/ASDA declared-distance figures, PCN and displaced-threshold data were not obtained from the primary NAV CANADA CFS/CAP this pass — treat as 🟧 pending a live-source pull. All distances in metres.*

---

## 8. Communications

| Service | Callsign | Frequency | Hours | Notes |
|---|---|---|---|---|
| ATIS | Montréal ATIS | English 133.700 · French 127.500 | H24 (assumed) | Bilingual ATIS — a CYUL-specific feature |
| Delivery | Montréal Clearance | 125.600 | H24 (assumed) | Pre-departure clearances (PDC) available |
| Apron | Montréal Apron/Ramp | 122.075 (East/West Ramp split reported) | H24 (assumed) | Apron under **positive ATC control** — see §Cautions |
| Ground | Montréal Ground | 121.900 (East/West Ground split reported, 121.000) | Mixed | Multiple ground positions — take the assigned frequency |
| Tower | Montréal Tower | 119.900 (North/South Tower split reported, 119.300) | H24 (assumed) | |
| Departure | Montréal Departure | 124.650 (North/South split reported, 120.425) 🟧 (OurAirports shows 118.9 — discrepancy) | H24 (assumed) | |
| Approach / Arrival | Montréal Terminal (Approach) | 132.850 (North/South split reported, 118.900; Low Arrival 126.900) 🟧 | H24 (assumed) | Sector-specific — take the assigned frequency |
| Centre / FIR | Montréal Area Control Centre (CZUL) | Per current AIRAC | H24 | See [North America — Airspace](../../../../airspace/north-america.md) |

*Source: OurAirports frequency extract and a CZUL (VATSIM vACC) 2024 pilot-briefing cross-check (both retrieved 2026-07-26) — **tier-4, not an AIP/CFS primary pull**; some frequency splits differ between the two sources (flagged) — treat exact frequencies as 🟧 pending a live NAV CANADA CFS cross-check.*

---

## 9. Navaids

| Aid | Ident | Freq | Hours | Notes |
|---|---|---|---|---|
| ILS RWY 06L | 🟧 not confirmed | 🟧 not confirmed | H24 (assumed) | Reported CAT II capable (tier-4) — not independently confirmed |
| ILS other runways | 🟧 not confirmed this pass | 🟧 not confirmed | — | Assume CAT I pending verification |
| VOR/DME | 🟧 not confirmed this pass | 🟧 not confirmed | H24 (assumed) | On-field VOR/DME expected at a hub of this size — not individually sourced |

*No navaid-specific idents/frequencies were obtained from a primary NAV CANADA source this pass — this table is intentionally sparse rather than fabricated; pull the current CFS/CAP navaid data at planning. 🟧*

---

## 10. Arrival

- **Transition altitude / level:** TA **18,000 ft** (Canadian Southern Domestic Airspace standard); TL by QNH — see [North America — Airspace](../../../../airspace/north-america.md) §6.
- **Speed:** 250 KIAS below 10,000 ft; 200 KIAS within 10 NM / below 3,000 ft AAL of a controlled aerodrome (Canadian domestic norm; corroborated by the CZUL vACC briefing, which also gives typical speeds of 210 kt downwind / 190 kt base / 160 kt final for IFR traffic).
- **Preferential runway logic:** **West operations preferred** — RWY 24L/R used up to a 5 kt tailwind to keep departures over Lac Saint-Louis, south-west of the field. RWY 06L/24R (North) is normally the arrival runway; RWY 06R/24L (South) normally departures/GA/secondary arrivals.
- **Approaches (names only — verify minima on current AIRAC charts):**

| RWY | Approach | Notes |
|---|---|---|
| 06L | ILS — reported CAT II 🟧 | Normally the arrival runway |
| 24R | ILS 🟧 (category not confirmed) | Reciprocal |
| 06R/24L | ILS/RNAV 🟧 (names/categories not confirmed) | Secondary arrival runway |

- **STARs (names only — verify current AIRAC):** Per a CZUL (VATSIM vACC) 2024 pilot-briefing cross-check: **LFLER7** (N/NW arrivals), **OMBRE2** (NE/E arrivals), **CARTR5** (S/SE arrivals), **IMPAC4** (SW arrivals), **HABBS7** (W arrivals), **ALOET4** (NW arrivals) 🟧 — network-sim document, not regulatory; verify names/current status against the live AIRAC before use.
- **LVP:** No CAT III capability at this field (contrast with CYYZ); RWY 06L's reported CAT II capability would be the standing low-vis mitigation — exact trigger conditions not confirmed this pass. 🟧
- **Missed approach watch-items:** Terrain is not the driver (flat St. Lawrence Valley plain); the operative missed-approach concern is re-sequencing within Montréal Terminal's arrival/departure flow.

---

## 11. Departure

- **SIDs (names only — fly the charted version):** Per the CZUL (VATSIM vACC) briefing, departures are assigned the **"Montréal Two" (CYUL2) departure procedure** — runway-heading climb, non-jet aircraft maintain 3,000 ft / jet aircraft maintain 5,000 ft, then vectors to the assigned route 🟧 (network-sim cross-check; verify current-AIRAC SID name/structure before use).
- **RNP / climb-gradient requirements:** Not independently confirmed this pass — see [`OM E — PBN and RNP Operations`](../../../../../flight-ops/pbn-and-rnp-operations.md) for governing policy; verify per-SID gradient on the current chart. 🟧
- **Take-off minima:** Published per AIP — exact figures not confirmed this pass. 🟧
- **Start-up / push-back:** ADM Apron/Ramp holds **positive ATC control** over the apron — push-back and all apron movement is by explicit instruction; confirm cross-bleed/APU notification procedure locally. 🟧
- **ATC slot / CTOT & clearance:** No confirmed IATA slot-coordination level this pass — assume non-coordinated/schedule-facilitated pending verification; **Pre-Departure Clearances (PDCs)** are available on request per the CZUL vACC briefing (network-sim procedure, real-world PDC availability not independently confirmed). 🟧
- **De-icing:** Dedicated aircraft **deicing facility** (joint venture with a third-party glycol-recovery operator since 1997, expanded 2012) — **eight bays**, 24 deicing trucks, capacity up to **48 aircraft/hour** (~9,400 aircraft/year average); collected fluid is reprocessed to ≥99.5% purity for reuse via a dedicated recovery/distillation facility. Season aligned with the region's heavy winter snowfall. See [`OM E — Cold Weather Operations`](../../../../../flight-ops/cold-weather-operations.md).

---

## 12. Noise & Environmental

- **Noise abatement (NAP):** **West operations preferred** — RWY 24L/R used up to a 5 kt tailwind specifically to route departures (the noisiest phase of flight) over Lac Saint-Louis rather than populated areas north-east of the field. The CYUL2 departure procedure incorporates minimum altitudes before turns for noise-abatement purposes (per the CZUL vACC briefing).
- **Night noise / dB limits:** Governed primarily through the **weight-based curfew structure** (§6) rather than a published per-movement dB limit; community noise-complaint activity and a class-action suit against ADM have been publicly reported, and ADM has **proposed** (not yet in force) a stricter overnight flight ban — a live watch item.
- **Engine run-up restrictions:** Not confirmed in reachable sources — verify locally. 🟧
- **Reverse thrust / idle-reverse policy:** Not confirmed in reachable sources — verify locally. 🟧

---

## 13. Ground operations

- **Stands for our types:** Single main terminal; international arrivals typically assigned **gates 50–68**, US transborder arrivals **gates 72–89**, domestic **gates 1–50** (per the CZUL vACC briefing — network-sim cross-check, not independently confirmed against ADM's own gate map). 🟧 | 🟧
- **Push-back:** Apron is under **positive ATC control** (unusual for the network) — all push-back/taxi movement is by explicit ATC instruction referencing "North Ramp," "South Ramp," "East Lane," "West Lane."
- **Standard taxi routes:** Confirm with Ground/Apron on the day; note the **former RWY 10/28 is now Taxiway Charlie** and does not require a crossing clearance (§Cautions).
- **Hot spots / tight taxiways:** 🟥 **South Ramp between gates 47 and 49 is prohibited to aircraft with wingspan ≥ 36 m (118 ft)** — all B757/A310-and-larger types, i.e. most K Global widebody equipment, must route via **North Ramp only**. Most taxiways branching off RWY 06L/24R have been renamed in recent years — confirm current taxiway identifiers against the live chart rather than legacy scenery/ground signage.
- **Follow-me:** Availability not confirmed in reachable source — verify locally. 🟧

---

## 14. Weather & seasonal (durable)

- **Climate / prevailing wind:** Humid continental climate in the St. Lawrence Valley; prevailing wind pattern supports the West-operations preference (RWY 24L/R).
- **Seasonal hazards:** **Heavy winter snowfall (~220 cm/year average) and freezing rain** from St. Lawrence Valley winter storm systems are the field's defining hazard; the airport is reported to **never fully close and rarely suspend operations**, using a large snow-removal team (1.9M+ m² of surface cleared) and the dedicated deicing facility. Summer carries the standard eastern-Canada risk of afternoon **convective storms** — general regional climatology, no CYUL-specific frequency statistic found.
- **Local effects:** No significant terrain/sea-breeze effect at this inland-river-valley field; St. Lawrence Valley winter-storm track is the standout local effect.

> **Live weather — pull at planning (T-2h):** METAR, TAF, TREND, SIGMET/AIRMET. Not stored here.

---

## 15. NOTAMs

> **Pull at planning (T-2h).** Perishable — not stored here. Check: runway/taxiway closures (confirm current status of the former RWY 10/28 / Taxiway Charlie), navaid U/S, lighting, obstacle/crane, RFF downgrade, deicing-facility status, GPS/RAIM for RNP procedures. Source: official AIS / OFP NOTAM block.

---

## 16. Fuel & alternate planning notes

- **Typical role for us:** **Destination / origin** in the North American network — not a K Global base.
- **Nearest suitable alternates:** Company preferred alternates **CYYZ** (Toronto), **CYOW** (Ottawa) and **CYQB** (Québec City) `[VAMSYS mirror 2026-07-26]` — confirm suitability, runway/RFF adequacy and current minima per leg.
- **Fuel-uplift notes:** Jet A/A-1/100LL confirmed available via multiple FBOs at Dorval; specific into-plane provider/hours for scheduled widebody service not confirmed. 🟧 See [`OM E — Fuel Policy`](../../../../../flight-ops/fuel-policy.md).
- **Range/perf flags for our fleet:** Field length/strength non-limiting for any K Global type on RWY 06L/24R. See [`OM B — Fleet Capability Matrix`](../../../../../fleet/capability-matrix.md) for type-by-type range/performance reference.

---

## 17. Fleet-specific notes (optional)

- No field-elevation or field-length performance penalty for any K Global type at CYUL on RWY 06L/24R; the operative planning consideration is the **South Ramp wingspan restriction (≥36 m must use North Ramp)** for our widebody equipment and winter deicing/snow-removal reliance rather than aircraft performance. See [`OM B — Fleet Capability Matrix`](../../../../../fleet/capability-matrix.md). For winter operational procedure, see [`OM E — Cold Weather Operations`](../../../../../flight-ops/cold-weather-operations.md).

---

## 18. Open items (🟧 — confirm against AIP / current AIRAC)

- **Magnetic variation** — not sourced this pass; regional estimate only, not an AIP figure.
- **RFF category** — assumed CAT 9 for a widebody-international gateway; not independently confirmed.
- **Declared distances (TORA/TODA/ASDA), PCN and displaced-threshold data, both active runway ends** — not obtained from the primary NAV CANADA CFS/CAP this pass.
- **ILS category** — RWY 06L reported CAT II by tier-4 corroboration only; not confirmed from a primary AIP table. Other runway ends not confirmed.
- **Navaid idents/frequencies** — not obtained from a primary source this pass.
- **ATC frequency discrepancies** between OurAirports and the CZUL vACC briefing (Departure/Arrival frequencies) — not resolved.
- **Former RWY 10/28 → Taxiway Charlie conversion** — corroborated by the CZUL vACC briefing (2024) but not independently cross-checked against the current NAV CANADA AIP/CFS this pass; treat as high-confidence given the source but confirm before relying on it operationally.
- **Current-AIRAC SID/STAR names** (CYUL2, LFLER7/OMBRE2/CARTR5/IMPAC4/HABBS7/ALOET4) — sourced to a VATSIM vACC pilot briefing, not a primary AIP pull; verify against the live AIRAC before use.
- **IATA slot-coordination level** — not confirmed; assumed non-coordinated pending verification.
- **Take-off minima, engine run-up restriction, reverse-thrust/idle-reverse policy, follow-me availability** — none confirmed in reachable sources.
- **Fuel supplier(s) and into-plane hours for scheduled widebody service** — general FBO availability confirmed, not individually confirmed for our operation.
- **Customs/immigration desk hours** — not confirmed; assumed major-hub H24 coverage.
- **Proposed overnight flight ban (01:00–06:00)** — reported as proposed, not yet in force; monitor for a policy change.

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim material (current-AIRAC charts) informs content but is not listed here.*

- **NAV CANADA — Aeronautical Information Publications (AIP Canada / CFS / CAP) landing page** — https://www.navcanada.ca/en/aeronautical-information/publications.aspx (retrieved 2026-07-26). *Primary source targeted; direct AD 2 CYUL extract not reachable this pass — flagged throughout.*
- OurAirports — https://ourairports.com/airports/CYUL/ , /runways.html , /frequencies.html (retrieved 2026-07-26). *ARP/elevation/runway/frequency cross-check — tier-4.*
- **CZUL (VATSIM Canada vACC) — "Welcome to Montréal! CYUL Pilot Briefing," 2024 edition** — https://czul.ca/pdf/CYUL_2024_Pilot_Briefing.pdf (retrieved 2026-07-26). **Network-sim document, not regulatory** — used per the source register's VATSIM vACC cross-check allowance; corroborates runway roles, preferential-runway program, ATC frequency structure, apron positive-control procedure, gate allocation, SID/STAR names and the RWY 10/28-to-Taxiway-Charlie conversion.
- Aéroports de Montréal (ADM) — "Noise Abatement" — https://www.admtl.com/en-CA/community/soundscape-management/noise-abatement (retrieved 2026-07-26). *Preferential runway / curfew structure.*
- Travel and Tour World — "Montreal Trudeau Airport May Limit Late-Night Flights" — https://www.travelandtourworld.com/news/article/montreal-trudeau-airport-may-limit-late-night-flights-expert-tips-for-tourists-to-avoid-travel-disruptions/ (retrieved 2026-07-26). *Proposed overnight-ban watch item.*
- Skies Mag — "Winter operations: Best practices at Montréal-Trudeau Airport" — https://skiesmag.com/press-releases/montreal-trudeau-airport-makes-investment-improve-snow-removal-deicing-capacity/ (retrieved 2026-07-26). *Snow-removal/deicing scale.*
- Airport Improvement — "Trudeau Int'l Invests in Deicing Services and Glycol Recycling Facilities" — https://airportimprovement.com/article/trudeau-intl-invests-deicing-services-and-glycol-recycling-facilities/ (retrieved 2026-07-26). *Deicing facility capacity/recycling detail.*

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-26 | Built from NAV CANADA (CFS/CAP); K Global fields from live VAMSYS; 4-page pack. |
