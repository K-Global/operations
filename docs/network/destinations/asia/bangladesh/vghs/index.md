# VGHS — Hazrat Shahjalal Intl · Airport Briefing

**VGHS / DAC** · Dhaka, Bangladesh · Asia
**Version** v0.1 · **Updated** 2026-07-26 · **Status** Draft

> **Read-me:** Planning aid for the sim, not a chart. Static data is drawn from public tier-4 aeronautical sources (the primary Bangladesh AIP/eAIP portal was not reachable this pass — see §Sources); approaches/SIDs/STARs are listed **by name only or flagged not-yet-confirmed** — fly the charted current-AIRAC version. Live weather/NOTAMs are pulled at planning (§14/§15). Open 🟧 items are listed in §18. Flag legend 🟥 restriction/hazard · 🟧 caution/unverified · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| ARP (lat/long) | 23°50′36″N / 90°23′52″E (23.843347, 90.397783) `[OurAirports 2026-07-26]` |
| Field elevation | **30 ft / 9 m AMSL** `[OurAirports 2026-07-26]` 🟧 (SkyVector independently lists 27 ft — a small cross-source discrepancy; treat 30 ft as the working figure pending AIP confirmation) |
| Mag variation | Not published / verify 🟧 — not obtained from a reachable source this pass |
| Time zone | UTC+6 (Bangladesh Standard Time) — no daylight saving observed |
| Runway(s) | **14/32**, single runway, no parallel — **11,500 × 150 ft / 3,505 × 46 m** per OurAirports vs **10,499 × 148 ft / 3,200 × 45 m** per SkyVector 🟧 (unresolved cross-source discrepancy — see §7/§18) |
| Preferential runway | Not published / verify — wind-driven choice between 14 and 32; no preferential-runway rule identified in reachable sources 🟧 |
| Longest LDA | Not published / verify 🟧 — no declared-distance (TORA/TODA/ASDA/LDA) table found in reachable sources; only overall runway length is corroborated (§7) |
| Approaches | Not confirmed in reachable research pass 🟧 — pull the current-AIRAC approach list at planning; an on-field VOR (DAC 112.70) is confirmed, DME/ILS equipage not independently confirmed (§9) |
| RFF category | Not published / verify 🟧 |
| Control type | Radar/procedural mix not independently confirmed — Dhaka Approach (VGFR, CAAB) is reported to have received a new primary/secondary radar system (Thales LAS contract, 2021, targeted operational ~mid-2024) intended to give full surveillance of Bangladesh's airspace including over the Bay of Bengal; current in-service status not independently re-confirmed this pass 🟧. En route: **Dhaka (VGFR) FIR** — see [Asia airspace general brief](../../../../airspace/asia.md) |
| Elevation class | Sea-level (30 ft) — **not** hot-and-high; the field's defining constraints are the **single, non-parallel runway** and **SW-monsoon/Bay-of-Bengal convective weather**, not density altitude |
| Special-airport status | Not operator-categorised as a restricted-crew "special airport" in reachable sources. 🟥 Standing briefing items: **VGHS has only one runway with no parallel** (a CAAB-proposed dependent second runway remains unbuilt — §5/§18), and the field **shares its aerodrome with an active Bangladesh Air Force base** (BAF Base Bir Uttom A. K. Khandker) — see §5 |
| Customs / PoE | **Yes** — international customs point confirmed (`#customs` facility tag, OurAirports); exact desk hours **not published / verify** 🟧 |
| K Global category | **L** `[VAMSYS mirror 2026-07-26]` |
| K Global base | **NO** `[VAMSYS mirror 2026-07-26]` — destination / alternate field within the network, not a company base |
| Company preferred alternates | VECC (Kolkata, India), VIDP (Delhi, India) `[VAMSYS mirror 2026-07-26]` — both cross-country from Bangladesh |
| Taxi-in / taxi-out (VAMSYS) | **12 min / 15 min** `[VAMSYS mirror 2026-07-26]` |

---

## 2. Validation summary

| Domain | Flag | Note |
|---|---|---|
| Terrain / CFIT | 🟩 | Dhaka sits on the flat Bengal delta plain at 30 ft AMSL — no close-in high terrain relevant to arrival, departure or missed-approach paths. |
| Runway length vs fleet perf | 🟧 | Single runway 14/32, ~3,200–3,505 m depending on source (unresolved discrepancy, §7) — length itself is non-limiting for typical K Global narrow/wide-body operations, but **there is no parallel runway and no confirmed redundancy**; a runway-blocking event closes the field entirely (demonstrated by the Oct 2025 cargo-terminal fire, §3.5/§4). Cross-ref [`OM B — Fleet Capability Matrix`](../../../../../fleet/capability-matrix.md). |
| Approach availability / minima | 🟧 | No approach/minima data obtained from a reachable source this pass — pull the current-AIRAC procedure list at planning. |
| Airspace / traffic / control | 🟧 | VGHS shares its aerodrome with an active Bangladesh Air Force base; Dhaka-Tejgaon (VGTJ), a second Dhaka-area airfield used for military/VIP/GA traffic, lies only ~4 NM south. Dhaka Approach's radar-modernisation programme (Thales, contracted 2021) is reported but not independently re-confirmed as fully commissioned. |
| Weather / seasonal hazard | 🟥 | **SW monsoon (~May–Sep)** convection is the region's dominant hazard (per the Asia airspace general brief); Bangladesh is also subject to severe pre-monsoon convective squall lines ("nor'wester"/Kalbaishakhi-type systems, broadly Mar–May) and winter radiation fog — no VGHS-specific frequency statistic was found; treat as general regional climatology pending confirmation (§14). |
| Curfew / slots / hours | 🟧 | No curfew, slot-coordination level or operating-hours restriction confirmed in reachable sources — not published / verify. |
| RFF category vs our types | 🟧 | Not published / verify — no RFF category found in reachable sources. |
| Fuel availability | 🟧 | Jet A-1 presumed available at a major international gateway; supplier/hours not independently confirmed. |
| Customs / handling / security | 🟧 | International PoE confirmed (customs tag); desk hours, ground-handling agent and security procedure not independently confirmed. Ground handling for the field's home carrier is provided by **Biman Ground Handling** (a Biman Bangladesh Airlines subsidiary) — not confirmed as available/contracted for a K Global operation. |

---

## 3. Threat & Error Management (TEM)

### 3.1 CFIT / Terrain 🟩
VGHS sits at 30 ft AMSL on the flat **Bengal delta plain** — there is **no close-in high terrain** relevant to arrival, departure or missed-approach paths. Verify the MSA ring on the current chart as routine practice, but CFIT is not the operative threat at this field. (The Himalaya-belt high terrain referenced in the Asia airspace general brief lies well to the north/northwest of Dhaka and is not a factor for VGHS terminal operations.)

### 3.2 Airborne conflict / traffic 🟧
VGHS's aerodrome is **shared with an active Bangladesh Air Force base** (BAF Base Bir Uttom A. K. Khandker), and a second Dhaka-area airfield, **Dhaka-Tejgaon (VGTJ)** — the city's former main airport, now used for military, VIP and general-aviation traffic — lies only **~4 NM south**. Expect mixed civil/military traffic in the Dhaka terminal area. Dhaka Approach's control capability is reported to have been upgraded (a 2021 Thales LAS radar-system contract, targeted for full-surveillance operation including over the Bay of Bengal by ~mid-2024) but the current in-service/operational status was not independently re-confirmed this pass — brief for a possible procedural (non-radar) fallback until this is verified on the current AIRAC. Dhaka (VGFR) FIR coordinates with the Bay-of-Bengal oceanic sectors (Chennai/Kolkata BOBASIO) to the south — see the [Asia airspace general brief](../../../../airspace/asia.md) §3/§6.

### 3.3 Runway excursion 🟧
VGHS operates a **single runway (14/32)** with **no parallel**. Overall runway-length figures conflict between public sources: **11,500 × 150 ft / 3,505 × 46 m** (OurAirports) vs **10,499 × 148 ft / 3,200 × 45 m** (SkyVector) — a genuine unresolved discrepancy (§7/§18). No displaced-threshold, declared-distance or surface-contamination data was obtained from a reachable source; brief runway length as **provisional** and re-confirm against the AIP/current AIRAC before any performance-limited operation.

### 3.4 Weather threat 🟥
Bangladesh sits directly under the **SW monsoon** track (broadly **May–Sep**, per the Asia airspace general brief), bringing deep convection, heavy rain and reduced visibility — the dominant seasonal hazard at VGHS. The pre-monsoon period (broadly **Mar–May**) is additionally associated in the region with severe convective squall-line activity (locally termed "nor'wester"/Kalbaishakhi-type systems) capable of sudden high wind, hail and wind-shear; **no VGHS-specific frequency or intensity statistic was found in reachable sources this pass** — treat as general regional climatology pending confirmation. Winter (Dec–Feb) radiation fog affecting the Dhaka area is also a commonly reported regional phenomenon; again, no VGHS-specific statistic was independently confirmed this pass. See also [`OM E — Adverse Weather and Windshear`](../../../../../flight-ops/adverse-weather-and-windshear.md) and §14.

### 3.5 Operational considerations 🟥
Plan around VGHS's defining structural constraint: it is a **single-runway field with no parallel and no confirmed redundancy**. CAAB submitted a 2023 report proposing a **3,292 m dependent second runway** (with the existing runway extended to ~3,692 m), but the two runways would sit only ~359 m apart — well short of the ~1,035 m ICAO spacing recommended for simultaneous independent ILS operations — so the proposed runway would be usable only for taxiing/staging or as a contingency if the main runway is closed, and construction was expected only after Terminal 3 completes (2026 or later); **as of this build, VGHS still operates on one runway only**. This single-runway exposure was demonstrated concretely on **18 October 2025**, when a major fire in the airport's cargo-terminal area (near Gate 8) forced a **full suspension of airfield operations for several hours** (fire broken out ~14:30 local, extinguished ~21:18 local), with flights diverted to Kolkata (VECC), Chittagong/Shah Amanat (VGEG) and Sylhet/Osmani (VGSY); damage was publicly estimated in the hundreds of millions to over US$1 billion, and the cause was under investigation (arson suspected by at least one industry association) — treat as a **factual operational-history note**, not a live NOTAM, but it is directly relevant to VGHS's genuine single-point-of-failure risk profile. Separately, **Terminal 3** has been under construction since December 2019, was partially inaugurated in October 2023, and — per public reporting as recent as April 2026 — is not expected to enter revenue service before **December 2026 at the earliest** (State Minister public statement); current international operations run through the existing **Terminal 1/Terminal 2** complex only (§ Dispatch §2).

---

## 4. Cautions & Warnings

- **Single runway (14/32), no parallel** — a runway-blocking event closes the entire field; there is no redundancy today (a CAAB-proposed dependent second runway remains unbuilt, §5/§18).
- **18 Oct 2025 cargo-terminal fire** — forced a multi-hour full closure and diversions (Kolkata/Chittagong/Sylhet); a factual reliability data point for this field, not a live restriction.
- **Shared civil/military aerodrome** — VGHS co-hosts an active Bangladesh Air Force base; expect mixed traffic patterns.
- **Dhaka-Tejgaon (VGTJ) ~4 NM south** — a second active Dhaka-area airfield in close proximity; brief for possible traffic/airspace interaction.
- **Runway-length figures conflict between public sources** (3,505 m vs 3,200 m) — treat as provisional pending AIP confirmation; do not plan a performance-limited operation off either uncorroborated figure.
- **Terminal 3 not yet operational** — construction/fit-out activity may be ongoing near the airfield; current international ops are via T1/T2 only.
- **Monsoon season (~May–Sep)** and pre-monsoon convective squall risk (~Mar–May) — see §3.4/§14.

---

## 5. Aerodrome category, restrictions & crew qualification

- **Special-airport / category:** Not operator-categorised as a restricted-crew "special airport" in reachable sources. 🟧
- **Crew-qualification gate:** None identified in reachable sources beyond standard international-operations currency. 🟧
- **Operating restrictions / bans:** None confirmed (no RNP AR ban, circling restriction, curfew or night-ops limit found in reachable sources) — not published / verify. 🟧
- **Overflight / entry / permits:** Standard international arrival expected; no special permit/PPR requirement identified for the aerodrome itself in reachable sources. 🟧
- **Operations notes:** Airport operator/ANSP — **Civil Aviation Authority of Bangladesh (CAAB)**. The field is **co-located with an active Bangladesh Air Force base** (BAF Base Bir Uttom A. K. Khandker) — expect mixed civil/military traffic and possible military-priority movements. Ground handling for the field's home carrier is provided by Biman Ground Handling (a Biman Bangladesh Airlines subsidiary); not confirmed as contracted for a K Global operation. 🟧

---

## 6. General / hours / services

| Item | Value | Flag |
|---|---|---|
| ATS hours | Not published / verify | 🟧 |
| AD operating hours | Not published / verify | 🟧 |
| Night / curfew restrictions | None confirmed in reachable sources | 🟧 |
| RFF category | Not published / verify | 🟧 |
| Fuel | Jet A-1 presumed available (major international gateway); supplier/hours not confirmed | 🟧 |
| PCN | Not published / verify | 🟧 |
| Customs | International PoE confirmed (`#customs` tag); hours not confirmed | 🟧 |
| Handling / FBO | Biman Ground Handling (Biman Bangladesh Airlines subsidiary) reported as the field's domestic ground handler; not confirmed for our operation | 🟧 |

---

## 7. Runways & declared distances

| RWY | Dimensions | Surface / PCN | TORA | TODA | ASDA | LDA | Notes |
|---|---|---|---|---|---|---|---|
| 14 | 11,500 × 150 ft / 3,505 × 46 m (OurAirports) **or** 10,499 × 148 ft / 3,200 × 45 m (SkyVector) 🟧 | OurAirports: surface code "PEM" (exact composition not independently confirmed), lighted. SkyVector: generic "Hard." PCN not published / verify. | Not published / verify | Not published / verify | Not published / verify | Not published / verify | Reciprocal of RWY 32; no declared-distance table sourced this pass |
| 32 | (as above — single physical runway, reciprocal heading) | (as above) | Not published / verify | Not published / verify | Not published / verify | Not published / verify | Reciprocal of RWY 14 |

*Two independent tier-4 sources give materially different overall runway-length figures for the same physical runway (3,505 m vs 3,200 m) — this is flagged as an unresolved discrepancy, not a real physical change between the two ends. No TORA/TODA/ASDA/LDA declared-distance table, PCN value, or displaced-threshold note was obtained from a reachable primary source this pass. All figures require confirmation against the Bangladesh AIP (CAAB) AD 2 VGHS section before performance-critical use — see §18.*

---

## 8. Communications

| Service | Callsign | Frequency | Hours | Notes |
|---|---|---|---|---|
| ATIS | Dhaka ATIS | 127.4 | Not published / verify | 🟧 |
| Delivery | Not published / verify | — | — | 🟧 |
| Ground | Dhaka Ground | 121.8 | Not published / verify | 🟧 |
| Tower | Dhaka Tower | 118.3 (primary, OurAirports) / 119.3 (SkyVector) | Not published / verify | 🟧 |
| Approach | Dhaka Approach | 121.3 (OurAirports) / 120.3 & 121.3 (SkyVector) | Not published / verify | 🟧 |
| Radio (HF) | Dhaka Radio | 2947 / 3491 / 6556 / 10066 kHz (SkyVector); OurAirports lists a single "RDO" entry at 294.7 MHz, which appears to be a truncation/typo of the 2947 kHz HF figure — treat the SkyVector HF set as the working figure | Not published / verify | 🟧 |
| Emergency | — | 121.5 (SkyVector) | H24 (standard) | 🟩 |
| Centre / FIR | Dhaka (VGFR) FIR | Per current AIRAC | Not published / verify | See [Asia airspace general brief](../../../../airspace/asia.md) |

*Source: OurAirports and SkyVector public frequency listings, cross-checked (2026-07-26); minor variance between the two on Tower/Approach secondary frequencies. Treat as 🟧 pending a live-AIRAC cross-check — no primary AIP source was reachable this pass.*

---

## 9. Navaids

| Aid | Ident | Freq | Hours | Notes |
|---|---|---|---|---|
| VOR | DAC (Dhaka) | 112.70 | Not published / verify | On/near field (bearing 324°, 1.4 NM per SkyVector); DME co-location not independently confirmed 🟧 |
| NDB | DC (Tejgaon) | 252 kHz | Not published / verify | Associated with Dhaka-Tejgaon (VGTJ), ~3.6 NM from VGHS (bearing 189°) — not an on-field VGHS aid 🟧 |
| VOR (area) | AAT (Agartala) | 116.10 | Not published / verify | 46.3 NM, cross-border (India) reference aid |
| VOR (area) | CML (Cumilla) | 115.50 | Not published / verify | 50.1 NM |
| VOR (area) | JSR (Jashore) | 113.00 | Not published / verify | 78.6 NM |
| ILS/DME | Not confirmed in reachable sources | — | — | Pull current-AIRAC approach/navaid data before planning a low-visibility arrival 🟧 |

*Source: SkyVector navaid listing (retrieved 2026-07-26), cross-checked against OurAirports. No ILS ident/frequency was obtained from a reachable source this pass — flagged as an open item (§18).*

---

## 10. Arrival

- **Transition altitude / level:** Not published / verify. 🟧
- **Speed:** Standard 250 KIAS below FL100 (ICAO norm) — confirm no local override on current chart.
- **Preferential runway logic:** Not published / verify — expect wind-driven choice between RWY 14 and RWY 32. 🟧
- **Approaches (names only — verify minima on current AIRAC charts):**

| RWY | Approach | IAF | FAF/FAP alt | Notes |
|---|---|---|---|---|
| 14 | Not confirmed in reachable research pass 🟧 | — | — | Pull the current-AIRAC approach list at planning |
| 32 | Not confirmed in reachable research pass 🟧 | — | — | Pull the current-AIRAC approach list at planning |

- **STARs (names only):** Not confirmed in reachable research pass — pull the current-AIRAC STAR list at planning. 🟧
- **LVP:** Not published / verify — winter regional fog is a plausible seasonal trigger (see §14) but no VGHS-specific LVP procedure or trigger was confirmed this pass. 🟧
- **Missed approach watch-items:** Terrain is not the driver (flat delta plain); the operative concerns are re-sequencing in a shared civil/military traffic environment (§3.2) and the field's single-runway/no-parallel geometry, which removes an alternate-runway option for an immediate re-attempt.

---

## 11. Departure

- **SIDs (names only — fly the charted version):** Not confirmed in reachable research pass — pull the current-AIRAC SID list at planning. 🟧
- **RNP / climb-gradient requirements:** Not confirmed in reachable sources this pass. See [`OM E — PBN and RNP Operations`](../../../../../flight-ops/pbn-and-rnp-operations.md). 🟧
- **Take-off minima:** Not published / verify. 🟧
- **Start-up / push-back:** Not confirmed in reachable sources — confirm cross-bleed/APU notification procedure locally. 🟧
- **ATC slot / CTOT & clearance:** No slot-coordination level or CTOT/ATFM program confirmed for VGHS in reachable sources. 🟧
- **De-icing:** **NIL** — Dhaka's climate is tropical/subtropical; de-icing is not expected to be a relevant consideration at this field.

---

## 12. Noise & Environmental

- **Noise abatement (NAP):** Not confirmed in reachable sources. 🟧
- **Night noise / dB limits:** Not published / verify. 🟧
- **Engine run-up restrictions:** Not confirmed in reachable sources. 🟧
- **Reverse thrust / idle-reverse policy:** Not confirmed in reachable sources. 🟧

---

## 13. Ground operations

- **Stands for our types:** Not confirmed in reachable sources — VGHS's terminal complex (T1/T2, same building) is sized for a national flag-carrier long-haul/widebody operation (Biman operates 787s from here), so widebody-capable stands exist, but exact allocation for a K Global operation is not confirmed. 🟧
- **Push-back:** Not confirmed in reachable sources. 🟧
- **Standard taxi routes:** Confirm with Ground on the day; not independently sourced.
- **Hot spots / tight taxiways:** None identified in reachable sources — not published / verify. 🟧
- **Follow-me:** Availability not confirmed in reachable source. 🟧

---

## 14. Weather & seasonal (durable)

- **Climate / prevailing wind:** Tropical/subtropical monsoon climate typical of the Bengal delta; runway orientation 14/32 — confirm current wind-rose data locally.
- **Seasonal hazards:** **SW monsoon (~May–Sep)** — deep convection, heavy rain, reduced visibility (per the Asia airspace general brief). **Pre-monsoon period (~Mar–May)** — regionally associated with severe convective squall-line ("nor'wester") activity capable of sudden high wind/hail; no VGHS-specific statistic confirmed this pass. **Winter (Dec–Feb)** — regional radiation fog is a commonly reported phenomenon in the wider Dhaka area; no VGHS-specific statistic confirmed this pass. See also the [Asia airspace general brief](../../../../airspace/asia.md) §11 and [`OM E — Adverse Weather and Windshear`](../../../../../flight-ops/adverse-weather-and-windshear.md).
- **Local effects:** No notable terrain/sea-breeze effect identified; Dhaka sits inland on the Bengal delta, well north of direct Bay-of-Bengal coastal exposure, but remains within the monsoon/cyclone-system's inland reach.

> **Live weather — pull at planning (T-2h):** METAR, TAF, TREND, SIGMET/AIRMET, monsoon-depression/cyclone advisories in season. Not stored here.

---

## 15. NOTAMs

> **Pull at planning (T-2h).** Perishable — not stored here. Check: runway/taxiway closures (including any residual Terminal 3 construction-area NOTAM), navaid U/S, lighting, obstacle/crane, RFF downgrade, GPS/RAIM, cargo-area status (post-Oct-2025-fire facility notes if any remain active), conflict-zone/overflight bulletins for the wider region. Source: AIS / OFP NOTAM block.

---

## 16. Fuel & alternate planning notes

- **Typical role for us:** **Destination / alternate field** — VGHS is not a K Global base. `[VAMSYS mirror 2026-07-26]`
- **Nearest suitable alternates:** Company preferred alternates **VECC** (Kolkata, India, cross-country, approx. 130 NM per public navaid-distance data) and **VIDP** (Delhi, India, cross-country, a materially longer distance not independently sourced this pass) `[VAMSYS mirror 2026-07-26]` — confirm suitability, runway/RFF adequacy and current minima per leg. 🟧
- **Fuel-uplift notes:** Jet A-1 presumed available at a major international gateway; supplier, hours and quality/freeze notes not independently confirmed. See [`OM E — Fuel Policy`](../../../../../flight-ops/fuel-policy.md). 🟧
- **Range/perf flags for our fleet:** Runway length (~3,200–3,505 m depending on source, §7) is expected to be non-limiting for typical K Global operations, but confirm against type performance given the unresolved declared-distance gap. See [`OM B — Fleet Capability Matrix`](../../../../../fleet/capability-matrix.md). 🟧

---

## 17. Fleet-specific notes (optional)

- No field-elevation or field-length performance penalty identified for any K Global type at VGHS (sea-level field, runway length not confirmed as limiting). The one durable fleet-relevant consideration is that **VGHS has no redundant runway** — a diversion decision at this field should assume no alternate-runway fallback if the single runway is blocked. See [`OM B — Fleet Capability Matrix`](../../../../../fleet/capability-matrix.md) and [`OM B — Fleet Index`](../../../../../fleet/index.md).

---

## 18. Open items (🟧 — confirm against AIP / current AIRAC)

- **Primary Bangladesh AIP/eAIP (CAAB)** was not reachable this pass (the CAAB website and a mirrored PDF both timed out) — every figure in this pack should be re-verified against the primary AIP at the next update cycle.
- **Runway dimension discrepancy** — OurAirports (11,500 × 150 ft / 3,505 × 46 m) vs SkyVector (10,499 × 148 ft / 3,200 × 45 m) for the same physical runway; unresolved.
- **Field elevation** — 30 ft (OurAirports, used as the working figure) vs 27 ft (SkyVector); small discrepancy, unresolved.
- **Declared distances (TORA/TODA/ASDA/LDA), PCN, surface composition** — not obtained from a reachable source.
- **RFF category, ATS/AD hours, curfew/slot regime, take-off minima, transition altitude/level, noise-abatement procedures, de-icing (expected NIL), stand/gate assignment, handling agent for our operation** — none confirmed.
- **SIDs/STARs/approaches (current names and minima)** — not obtained this pass; pull the live current-AIRAC procedure list before use.
- **ILS/DME equipage** — no ident/frequency found; on-field VOR (DAC 112.70) confirmed, DME co-location and ILS presence/category not confirmed.
- **Dhaka Approach radar-modernisation status** — a 2021 Thales LAS contract targeted ~mid-2024 operational readiness is publicly reported; current in-service status not independently re-confirmed.
- **Second/dependent runway proposal** — a 2023 CAAB report proposed a 3,292 m dependent runway (existing runway extended to ~3,692 m), not usable for simultaneous ILS operations (359 m spacing vs ~1,035 m ICAO guidance) and expected only after Terminal 3 completes; confirm current status at the next update.
- **Terminal 3 opening date** — repeatedly delayed; most recent public reporting (April 2026) indicates a target of 16 December 2026 or early 2027; re-check at the next update cycle as this materially changes Dispatch §2/§3.
- **18 October 2025 cargo-terminal fire** — recorded here as a factual reliability/history note; confirm no residual operational restriction remains at the cargo facility.
- **VATSIM cross-check** — no VATSIM division/vACC airport briefing or SOP specific to VGHS was identified in this research pass; not cross-checked.

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim material (current-AIRAC charts) informs content but is not listed here.*

- **Civil Aviation Authority of Bangladesh (CAAB)** — official AIP/website (www.caab.gov.bd) — **not reachable this pass** (repeated connection timeouts); this is the primary source of record and should be re-attempted at the next update cycle. No figures in this pack are sourced to it.
- OurAirports — https://ourairports.com/airports/VGHS/ and /runways.html and /frequencies.html (retrieved 2026-07-26). *ARP, elevation, runway dimensions/surface, frequencies, customs tag.*
- SkyVector — https://skyvector.com/airport/VGHS (retrieved 2026-07-26). *Coordinates, elevation, runway dimensions, communications, navaids, nearby-airport distances/bearings.*
- Wikipedia — "Hazrat Shahjalal International Airport" — https://en.wikipedia.org/wiki/Hazrat_Shahjalal_International_Airport (retrieved 2026-07-26). *History, operator (CAAB), co-located Air Force base, Terminal 1/2/3 layout and status, cargo-terminal capacity, 18 Oct 2025 cargo-fire incident, second-runway feasibility/CAAB 2023 report, radar-modernisation contract, ground handling (Biman Ground Handling), passenger/cargo throughput figures.*

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-26 | Built from territory AIP; K Global fields from live VAMSYS; 4-page pack. |
