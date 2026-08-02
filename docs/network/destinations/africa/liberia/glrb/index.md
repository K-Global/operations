# GLRB — Roberts Intl · Airport Briefing

**GLRB / ROB** · Harbel, Margibi County (serves Monrovia), Liberia · Africa
**Version** v0.1 · **Updated** 2026-07-26 · **Status** Draft — Liberia CAA-derived, tier-4 corroborated

> **Read-me:** Planning aid for the sim, not a chart. Static data is drawn from public tier-4 sources (OurAirports, Wikipedia) cross-checked against each other; the Liberia Civil Aviation Authority AIP was **not reachable this pass** — treat AIP-grade figures (declared distances, minima, hours, RFF) as 🟧 pending a live-AIRAC cross-check. Approaches/SIDs/STARs are listed **by name only or flagged not-yet-confirmed** — fly the charted current-AIRAC version. Live weather/NOTAMs are pulled at planning (§14/§15). Open 🟧 items are listed in §18. Flag legend 🟥 restriction/hazard · 🟧 caution/unverified · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| ARP (lat/long) | N6°14′02″ / W10°21′44″ (6.233790, -10.362300) `[OurAirports]` 🟧 not cross-checked against a primary AIP coordinate |
| Field elevation | **31 ft / 9 m AMSL** `[OurAirports]` |
| Mag variation | Not published / verify 🟧 |
| Time zone | UTC+0 (GMT, no DST) |
| Runway(s) | **04/22**, 3,353 × 46 m asphalt, lighted `[OurAirports]` — single runway, no parallel; **historically the longest runway in Africa** at construction |
| Preferential runway | Not published / verify — wind-dependent, single runway so no runway-selection logic beyond direction 🟧 |
| Longest LDA | ≈2,987 m on RWY 04 (3,353 m less the 366 m displaced threshold on RWY 22); ≈3,353 m on RWY 22 approaching over the undisplaced end 🟧 not AIP-confirmed — verify direction-specific LDA carefully (§7) |
| Approaches | Not confirmed in reachable sources this pass — on-field VOR-DME exists (§9), suggesting at least a VOR/DME approach is likely; verify current AIRAC 🟧 |
| RFF category | Not published / verify 🟧 |
| Control type | Assessed **procedural/limited-radar**, consistent with the general **Roberts (GLRB) FIR** picture — not independently confirmed 🟧 |
| Elevation class | Near sea-level (31 ft) — **not** hot-and-high |
| Special-airport status | None identified beyond the single-runway-no-redundancy consideration; see §5 |
| Customs / PoE | **Yes** — Liberia's principal international airport |
| K Global category | **R** `[VAMSYS mirror 2026-07-26]` 🟩 |
| K Global base | **No** `[VAMSYS mirror 2026-07-26]` |
| Company preferred alternates | **GFLL (Freetown, Sierra Leone), GGOV (Bissau, Guinea-Bissau)** `[VAMSYS mirror 2026-07-26]` — cross-country, plain-text reference only, no link |
| Taxi-in / taxi-out (VAMSYS) | **5 min / 7 min** `[VAMSYS mirror 2026-07-26]` |

---

## 2. Validation summary

| Domain | Flag | Note |
|---|---|---|
| Terrain / CFIT | 🟩 | Flat coastal plain near Harbel/Margibi County; no close-in high terrain. |
| Runway length vs fleet perf | 🟩 | 3,353 m is ample for K Global widebody types at typical weights — this runway was originally built (WWII-era, US-financed) long enough for B-47 Stratojet bomber operations and was for many years the longest in Africa; see §16/§17. Mind the 366 m displaced threshold on RWY 22 (§7). |
| Approach availability / minima | 🟧 | Not confirmed in reachable sources — on-field VOR-DME suggests conventional approach capability at minimum; verify current AIRAC. |
| Airspace / traffic / control | 🟧 | Liberia's principal international gateway; control type not independently confirmed; assessed procedural-leaning per the Roberts FIR (whose ident, notably, is also GLRB — see §3.2). |
| Weather / seasonal hazard | 🟥 | Liberia's coast is one of the wettest regions in West Africa — the wet season (roughly May–Oct) brings very heavy rainfall and convective activity; see §3.4/§14. |
| Curfew / slots / hours | 🟧 | No curfew/slot regime found in reachable sources — assumed unrestricted. |
| RFF category vs our types | 🟧 | Not published / verify. |
| Fuel availability | 🟧 | Assumed available as the principal national gateway; supplier/hours not confirmed. |
| Customs / handling / security | 🟩 | International Port of Entry confirmed; substantially renovated terminal (2019/2023) with modern facilities including the country's first passenger jet bridges. |

---

## 3. Threat & Error Management (TEM)

### 3.1 CFIT / Terrain 🟩
GLRB sits on the flat coastal plain near Harbel, Margibi County, at 31 ft AMSL — no close-in high terrain affects arrival, departure or missed-approach paths. This is a non-issue field for terrain.

### 3.2 Airborne conflict / traffic 🟧
As Liberia's principal international gateway, GLRB carries scheduled international service (Brussels Airlines, Ethiopian Airlines, Kenya Airways, ASKY Airlines, Air Côte d'Ivoire, Air Peace, Royal Air Maroc, with Turkish Airlines beginning service in 2026) into a **single runway**. Control type is not independently confirmed — treat as procedural-leaning until confirmed locally. **Note the naming overlap:** the field's own ICAO identifier (GLRB) is the same as the **Roberts FIR** identifier that covers Liberia and forms part of the multinational Guinea/Liberia/Sierra Leone interstate FIR arrangement — do not confuse the airport ident with the FIR ident when briefing. Cross-ref the [Africa Airspace Briefing](../../../../airspace/africa.md) §3, which names the Roberts FIR explicitly.

### 3.3 Runway excursion 🟥
GLRB's single runway carries **two historical excursion-relevant precedents**: a rejected-takeoff overrun by an Aeroflot Tu-154 cargo aircraft in 1989 (cargo-shift-induced CG issue, no fatalities, aircraft written off), and a widely reported 2012 Air France landing-gear/brake/hydraulic-system damage incident attributed to the then-poor (patched and potholed) runway surface — a factor cited in Air France's later withdrawal from the route. The runway underwent a **major refurbishment as part of the 2016–2019 renovation project** (~$30m of the $80m total project cost), which should have materially improved surface condition — but **current pavement condition/PCN is not independently confirmed this pass**; treat as improved-but-unverified. The runway also carries a **366 m (1,200 ft) displaced threshold on RWY 22 only** — confirm the correct LDA in the landing direction (§7).

### 3.4 Weather threat 🟥
Liberia's coast receives some of the **highest annual rainfall totals in West Africa** (Monrovia averages well over 4,000 mm/year) — the wet season (roughly May–October) brings very heavy, sustained rainfall and convective activity, materially more pronounced than at the more northerly Sahelian-influenced fields in this pack. Harmattan dust influence (Nov–Mar) is present but secondary to the wet-season rainfall signature this far south on the Guinea coast. See the [Africa Airspace Briefing](../../../../airspace/africa.md) §11 and §14 below.

### 3.5 Operational considerations 🟧
Two durable points: (1) **single runway, no redundancy** — any closure closes the field entirely; (2) the field carries a substantial **wartime and civil-war-era history** (built as a US Air Force base in WWII; the original terminal was destroyed during the Second Liberian Civil War and sat vacant for ~15 years) that has now been resolved by the 2016–2019 renovation (new two-level terminal, the country's first passenger jet bridges, expanded apron) — treat the field as modernised but confirm current infrastructure status against a recent NOTAM/AIP rather than older commentary.

---

## 4. Cautions & Warnings

- **Single runway (04/22) — no redundancy.** A closure for any reason closes the field.
- **Displaced threshold on RWY 22 only (366 m / 1,200 ft)** — confirm the correct LDA for the landing runway in use; the two runway directions are **not symmetric** for landing distance.
- **Historical runway-condition and excursion precedents** (1989 rejected-takeoff overrun; 2012 landing-gear/brake damage attributed to poor pavement) — the runway was substantially refurbished 2016–2019, but current condition is not independently confirmed; maintain conservative braking-action assumptions, especially in the heavy May–Oct wet season.
- **One of the wettest coastal climates in West Africa** — very heavy rainfall May–Oct; check current SIGMET/TAF before planning.
- **The field's own ICAO ident (GLRB) is shared with the Roberts FIR** that covers this part of West Africa — a naming point worth noting explicitly to avoid briefing confusion.

---

## 5. Aerodrome category, restrictions & crew qualification

- **Special-airport / category:** Not operator-categorised as a restricted-crew "special airport" in reachable sources. The standing crew-briefing items are the **single-runway-no-redundancy** consideration and the **asymmetric displaced threshold** (RWY 22 only). 🟧
- **Crew-qualification gate:** None identified. 🟧
- **Operating restrictions / bans:** None found in reachable sources — verify current AIRAC for any RNP AR / circling restriction. 🟧
- **Overflight / entry / permits:** Standard international arrival for a national Port-of-Entry gateway; no special state permit found beyond ordinary diplomatic clearance practice. 🟧
- **Operations notes:** The field's terminal facilities were substantially rebuilt under a ~US$80m renovation project (2016 groundbreaking; new terminal dedicated December 2017; fully operational with jet bridges by September 2019) — financed by China's EXIM Bank (terminal), the Saudi Fund for Development, the Arab Bank for Economic Development for Africa and the Liberian government (runway), plus a European Investment Bank loan. ANSP/regulatory authority is the **Liberia Civil Aviation Authority**.

---

## 6. General / hours / services

| Item | Value | Flag |
|---|---|---|
| ATS hours | Not published / verify — assumed H24 as the principal national gateway | 🟧 |
| AD operating hours | Not published / verify — assumed H24 | 🟧 |
| Night / curfew restrictions | None found in reachable sources | 🟧 |
| RFF category | Not published / verify | 🟧 |
| Fuel | Assumed Jet A-1 available as the principal national gateway; supplier/hours not confirmed | 🟧 |
| PCN | Not published / verify | 🟧 |
| Customs | International Port of Entry confirmed; exact desk hours not confirmed | 🟧 |
| Handling / FBO | Not individually confirmed | 🟧 |

---

## 7. Runways & declared distances

| RWY | Dimensions | Surface / PCN | TORA | TODA | ASDA | LDA | Notes |
|---|---|---|---|---|---|---|---|
| 04 | 3,353 × 46 m | Asphalt, lighted; PCN not published 🟧 | ≈3,353 m 🟧 not AIP-confirmed | 🟧 | 🟧 | ≈2,987 m (3,353 m less the 366 m displaced threshold applying to the RWY 22 end) 🟧 | Confirm which threshold the 366 m displacement applies to before use — see note below |
| 22 | 3,353 × 46 m | Asphalt, lighted; PCN not published 🟧 | ≈3,353 m 🟧 not AIP-confirmed | 🟧 | 🟧 | ≈2,987 m (366 m displaced threshold) 🟧 | **Threshold of RWY 22 displaced 366 m (1,200 ft)** `[OurAirports]` |

*Source: OurAirports runway record (retrieved 2026-07-26), which records the displaced threshold against "Runway 22" — physical runway length and displacement figure only; full TORA/TODA/ASDA declared-distance table is **not AIP-confirmed this pass**. Verify against a current Liberia CAA AIP AD 2 GLRB before treating as audit-grade. All distances in metres.*

---

## 8. Communications

| Service | Callsign | Frequency | Hours | Notes |
|---|---|---|---|---|
| Tower | Roberts Tower | 118.3 | Not published / verify 🟧 | `[OurAirports]` |
| Ground | Roberts Ground | 121.9 | Not published / verify 🟧 | `[OurAirports]` |
| Approach | Roberts Approach | 124.5 | Not published / verify 🟧 | `[OurAirports]` |
| A/G voice radio | — | Listed as 345.2 MHz `[OurAirports]` | — | 🟧 **This figure is outside the standard VHF airband and is assessed as a database error in the source; do not use — treat as not published pending AIP confirmation.** |
| Centre / FIR | Roberts (GLRB) | Per current AIRAC | H24 (assumed) | See [Africa Airspace Briefing](../../../../airspace/africa.md) — multinational Guinea/Liberia/Sierra Leone interstate FIR; **shares its ident with this airport** (§3.2) |

*Source: OurAirports frequency record (retrieved 2026-07-26) — tier-4, not independently AIP-cross-checked. Treat as representative pending a live-AIRAC verification.*

---

## 9. Navaids

| Aid | Ident | Freq | Hours | Notes |
|---|---|---|---|---|
| VOR-DME | ROB (Monrovia Roberts) | 113.80 | H24 (assumed) | On field (~0.4 nm NE) `[OurAirports]` — good corroboration of conventional approach capability |
| NDB | MO (Monrovia Roberts) | 372 kHz | H24 (assumed) | On field (~0.8 nm NE) `[OurAirports]` |
| NDB | FR (Monrovia Roberts) | 263 kHz | H24 (assumed) | On field (~1.6 nm SW) `[OurAirports]` |

*On-field VOR-DME and dual NDB presence is a reasonable indicator of at least conventional (VOR/NDB) approach capability — **ILS presence not confirmed**. Verify current approach list against a live AIRAC — see §18.*

---

## 10. Arrival

- **Transition altitude / level:** Not published / verify. 🟧
- **Speed:** Standard 250 KIAS below FL100 assumed (ICAO norm) — confirm no local override on current chart.
- **Preferential runway logic:** Single runway (04/22) — selection is wind-direction driven only.
- **Approaches (names only — verify minima on current AIRAC charts):**

| RWY | Approach | Notes |
|---|---|---|
| 04 | Not confirmed 🟧 | On-field VOR-DME/NDB suggests conventional approach capability — verify current AIRAC |
| 22 | Not confirmed 🟧 | Same as above; mind the 366 m displaced threshold reducing LDA on this end |

- **STARs (names only):** Not confirmed in reachable research pass. 🟧
- **LVP:** Not published / verify. 🟧
- **Missed approach watch-items:** Terrain is not the driver; the operative concern is the single-runway environment — a missed approach has no parallel-runway option.

---

## 11. Departure

- **SIDs (names only — fly the charted version):** Not confirmed in reachable research pass — pull the current-AIRAC SID list at planning. 🟧
- **RNP / climb-gradient requirements:** Not confirmed this pass. See [`OM E — PBN and RNP Operations`](../../../../../flight-ops/pbn-and-rnp-operations.md).
- **Take-off minima:** Not published / verify. 🟧
- **Start-up / push-back:** Not confirmed this pass. 🟧
- **ATC slot / CTOT & clearance:** No slot-coordination regime found in reachable sources — assumed unrestricted. 🟧
- **De-icing:** **NIL** — coastal-tropical field.

---

## 12. Noise & Environmental

- **Noise abatement (NAP):** Not published / verify. 🟧
- **Night noise / dB limits:** Not confirmed in reachable sources. 🟧
- **Engine run-up restrictions:** Not confirmed. 🟧
- **Reverse thrust / idle-reverse policy:** Not confirmed. 🟧

---

## 13. Ground operations

- **Stands for our types:** Not individually confirmed; the renovated terminal (fully operational with jet bridges by September 2019) apron was expanded from ~57,000 m² to ~85,000 m² as part of the renovation — stand count/config not confirmed this pass. 🟧
- **Push-back:** Not confirmed. 🟧
- **Standard taxi routes:** Confirm with Ground/Tower on the day.
- **Hot spots / tight taxiways:** None identified in reachable sources — not confirmed absent. 🟧
- **Follow-me:** Not confirmed. 🟧

---

## 14. Weather & seasonal (durable)

- **Climate / prevailing wind:** Tropical coastal climate — one of the wettest in West Africa; pronounced wet season roughly May–October, drier Nov–Apr.
- **Seasonal hazards:** **Heavy West African monsoon rainfall** (May–Oct) is the field's defining weather hazard — Monrovia is among the wettest capital-adjacent locations in the region. Harmattan dust (Nov–Mar) has secondary influence this far south. See [`OM E — Adverse Weather and Windshear`](../../../../../flight-ops/adverse-weather-and-windshear.md) and the [Africa Airspace Briefing](../../../../airspace/africa.md) §11.
- **Local effects:** Coastal location — onshore/sea-breeze effects plausible but not independently confirmed as operationally significant this pass.

> **Live weather — pull at planning (T-2h):** METAR, TAF, TREND, SIGMET/AIRMET. Not stored here.

---

## 15. NOTAMs

> **Pull at planning (T-2h).** Perishable — not stored here. Check: runway closures (single-runway field — any closure is field-closing), navaid U/S, lighting, obstacle/crane, RFF downgrade, GPS/RAIM, and any West-Africa conflict-zone/overflight bulletins per the [Africa Airspace Briefing](../../../../airspace/africa.md) §9. Source: AIS / OFP NOTAM block.

---

## 16. Fuel & alternate planning notes

- **Typical role for us:** Destination / West-Africa network gateway.
- **Nearest suitable alternates:** **GFLL (Freetown, Sierra Leone)**, **GGOV (Bissau, Guinea-Bissau)** `[VAMSYS mirror 2026-07-26]` — both cross-country; plain-text reference only, no OM C briefs exist yet.
- **Fuel-uplift notes:** Assumed Jet A-1 available as the principal national gateway; supplier/hours not confirmed. 🟧 See [`OM E — Fuel Policy`](../../../../../flight-ops/fuel-policy.md).
- **Range/perf flags for our fleet:** 3,353 m runway is non-limiting for any K Global type at typical weights, mindful of the 366 m displaced threshold on RWY 22 reducing landing distance on that end. See [`OM B — Fleet Capability Matrix`](../../../../../fleet/capability-matrix.md).

---

## 17. Fleet-specific notes (optional)

- No fleet-specific field-length performance penalty identified given the 3,353 m runway length — confirm the RWY 22 displaced-threshold LDA (≈2,987 m) is adequate for the largest widebody types at anticipated landing weights before planning a RWY 22 arrival. See [`OM B — Fleet Capability Matrix`](../../../../../fleet/capability-matrix.md).

---

## 18. Open items (🟧 — confirm against AIP / current AIRAC)

- **Approach names, minima and full declared-distance table (TORA/TODA/ASDA)** — not obtained this pass; only physical runway length and the RWY 22 displaced-threshold figure confirmed.
- **SIDs/STARs (current names)** — not obtained this pass.
- **ATS/AD operating hours, curfew, slot regime, RFF category, PCN, fuel supplier/hours, handling agent(s), stand/gate configuration** — none confirmed in reachable sources.
- **Mag variation, transition altitude/level, take-off minima, noise-abatement procedure** — none confirmed.
- **Current runway pavement condition post-2016–2019 refurbishment** — assessed as improved but not independently confirmed against a recent AIP/NOTAM.
- **"A/G" frequency listed as 345.2 MHz in the OurAirports record** — outside the standard VHF airband, assessed as a source data error; do not rely on it.
- **Liberia CAA AIP** could not be retrieved this pass — a browser-based or direct-authority re-attempt may succeed.

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim material (current-AIRAC charts) informs content but is not listed here.*

- OurAirports — https://ourairports.com/airports/GLRB/ , /runways.html , /frequencies.html , /closest-navaids.html (retrieved 2026-07-26). *ARP/elevation/runway/frequency/navaid cross-check — tier-4, not AIP-grade.*
- Wikipedia — "Roberts International Airport" — https://en.wikipedia.org/wiki/Roberts_International_Airport (retrieved 2026-07-26). *History (WWII construction, Pan Am era, civil-war damage), 2016–2019 renovation project detail and financing, 1989 and 2012 runway-condition/excursion incidents, current airline service list.*

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-26 | Built from national AIP; K Global fields from live VAMSYS; 4-page pack. |
