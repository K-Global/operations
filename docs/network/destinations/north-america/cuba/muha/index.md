# MUHA — Jose Marti Intl · Airport Briefing

**MUHA / HAV** · Havana, Cuba · North America
**Version** v0.1 · **Updated** 2026-07-26 · **Status** Draft

> **Read-me:** Planning aid for the sim, not a chart. The primary State AIP (AIP Cuba, published by IACC) was not reachable via direct fetch this build — consistent with the Sources register's warning that some state AIPs render empty outside a browser session. Static data here is therefore drawn from corroborated tier-4 sources and a VATSIM Havana FIR operational cross-check, and is flagged 🟧 accordingly; approaches/SIDs/STARs are listed **by name only where confirmed, or flagged not-yet-confirmed** — fly the charted current-AIRAC version. Live weather/NOTAMs are pulled at planning (§14/§15). Open 🟧 items are listed in §18. Flag legend 🟥 restriction/hazard · 🟧 caution/unverified · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| ARP (lat/long) | 22.9892°N / 82.4091°W (22°59′21″N / 82°24′33″W) — cross-checked OurAirports/SkyVector; the VAMSYS/Navigraph mirror carries a coordinate differing by roughly 0.0001° — not safety-critical, not resolved 🟧 |
| Field elevation | **210 ft** — consistent across every reachable source (OurAirports, SkyVector, NOTAM aggregator, operator data); not independently confirmed against the primary AIP 🟧 |
| Mag variation | 🟧 **005°W** reported by a single tier-4 operator-data source; no epoch stated — not a sourced AIP figure |
| Time zone | UTC−5 (CST) / UTC−4 (CDT) — Cuba observes DST (2026 transitions: forward 08 Mar, back 01 Nov) |
| Runway(s) | **06/24**, 4,000 × 45 m, hard/asphalt surface, magnetic heading 059°/239° — **single-runway field** |
| Preferential runway | Not published / verify 🟧 — general Cuba climatology (prevailing easterly trade winds) would tend to favour RWY 06 for arrivals/departures; not an AIP-sourced preferential-runway rule |
| Longest LDA | 4,000 m (06 or 24, full length) — inferred from published runway length, not independently confirmed from a primary declared-distance table 🟧 |
| Approaches | RWY 06 — **ILS** (ident IHA), RNP, VOR; RWY 24 — **RNP, VOR only (no ILS)** — cross-checked via a VATSIM Havana FIR operational SOP and a NOTAM aggregator citing the primary AIP; not independently primary-AIP-confirmed 🟧 |
| RFF category | Not published / verify 🟧 |
| Control type | Not confirmed — Havana Terminal/Approach and Havana Center are named in operational cross-check sources; a primary-AIP procedural-vs-radar statement was not obtained 🟧 |
| Elevation class | Sea-level (210 ft) — **not** hot-and-high; non-issue for performance |
| Special-airport status | None identified in reachable sources; single-runway field with no confirmed operator-category restriction 🟧 |
| Customs / PoE | **Yes** — confirmed international Port of Entry; exact desk hours not confirmed 🟧 |
| K Global category | **L** `[VAMSYS mirror 2026-07-26]` |
| K Global base | **No** `[VAMSYS mirror 2026-07-26]` |
| Company preferred alternates | **MKJS** (Kingston, Jamaica), **TJSJ** (San Juan, Puerto Rico) `[VAMSYS mirror 2026-07-26]` |
| Taxi-in / taxi-out (VAMSYS) | **12 min / 15 min** `[VAMSYS mirror 2026-07-26]` |

---

## 2. Validation summary

| Domain | Flag | Note |
|---|---|---|
| Terrain / CFIT | 🟩 | Flat coastal-plain terrain around Havana. A NOTAM cross-check citing the primary AIP's MSA table shows 25 NM sectors in roughly the 1,900–2,600 ft range, consistent with low terrain — a general characterization, not a stored live NOTAM value. |
| Runway length vs fleet perf | 🟩 | 4,000 m is non-limiting for any K Global Category L type — but note this is the field's **only** runway; there is no crosswind alternative. |
| Approach availability / minima | 🟧 | ILS confirmed on RWY 06 only; RWY 24 is RNP/VOR non-precision only. Minima not independently confirmed. |
| Airspace / traffic / control | 🟧 | Single-runway international field under Havana Terminal/Center; procedural-vs-radar control status not confirmed from a primary source. |
| Weather / seasonal hazard | 🟥 | Atlantic hurricane season (Jun–Nov, peak Aug–Oct) is a material seasonal risk for a single-runway field. |
| Curfew / slots / hours | 🟧 | No slot regime or curfew confirmed in reachable sources. |
| RFF category vs our types | 🟧 | Not published / verify. |
| Fuel availability | 🟧 | Multiple into-plane providers reported by a tier-4 aggregator; hours/quality not confirmed. |
| Customs / handling / security | 🟧 | Confirmed Port of Entry; desk hours, state-operator handling detail, and real-world overflight/entry-permit administration (§5) all carry operational friction not fully mapped this build. |

---

## 3. Threat & Error Management (TEM)

### 3.1 CFIT / Terrain 🟩
Havana sits on Cuba's low northern coastal plain at 210 ft elevation; no significant close-in high terrain is documented in any reachable source. A NOTAM cross-check citing the primary AIP's AD 2 MUHA MSA table shows 25 NM sectors in roughly the 1,900–2,600 ft band, consistent with flat terrain. Treat this as a general terrain characterization rather than a stored live NOTAM value, and confirm the current MSA ring on the chart as routine practice — terrain is not the operative CFIT driver at this field.

### 3.2 Airborne conflict / traffic 🟧
MUHA is a single-runway international field handling a mix of international, domestic, charter/cargo and general-aviation traffic across five aprons. Approach/departure control is provided by Havana Terminal and Havana Center within the wider **Habana FIR (MUFH)**, which also carries meaningful oceanic/overflight traffic through the Straits of Florida and northern Caribbean corridors — see [North America Airspace brief](../../../../airspace/north-america.md). 🟧 **That brief covers only the reference EDDF–KSFO Canada/western-US polar corridor and does not yet cover the Caribbean/Habana FIR** — carried as an open item in §18 until a dedicated area brief exists. Procedural-vs-radar control status for Havana Terminal is not independently confirmed.

### 3.3 Runway excursion 🟧
Single runway; no displaced threshold identified in any reachable source. A VATSIM Havana FIR operational cross-check reports reduced intersection-departure distances — RWY 06 from named intersections: 3,480 m and 2,200 m; RWY 24 from a named intersection: 3,550 m — network-sim sourced, not confirmed against the primary AIP. Treat full-length distances (4,000 m) as the planning baseline and verify any intersection departure locally.

### 3.4 Weather threat 🟥
Cuba lies inside the Atlantic hurricane belt; the season runs June–November with the highest tropical-cyclone risk in August–October, carrying genuine potential for airport closure, high wind/rain hazards, and schedule disruption — a real concern for a field with no crosswind runway to fall back on. Outside hurricane season, general Caribbean wet-season convective activity (afternoon thunderstorms) is the standing weather threat; no MUHA-specific frequency statistic was found — treat as regional climatology. See §14.

### 3.5 Operational considerations 🟧
Plan around: (1) **single-runway-only operation** — any RWY 06/24 closure removes the field entirely, elevating the importance of a live alternate (§16); (2) **RWY 24 has no ILS** (RNP/VOR only) — a lower-ceiling event pushes toward RWY 06 preference, consistent with its published ILS; (3) a VATSIM operational cross-check notes a **no-left-turn restriction after RWY 06 departure for Category C/D aircraft** — not confirmed against the primary AIP, flagged for verification, but worth briefing as a caution; (4) **real-world overflight/entry-permit administration for the Habana FIR and MUHA is non-trivial** (§5) and is a standing planning consideration distinct from the airport's physical characteristics.

---

## 4. Cautions & Warnings

- Single runway (06/24) — no crosswind alternative; a runway closure closes the field outright.
- RWY 24 has no precision approach (RNP/VOR only) — brief the RWY 06/ILS preference in marginal weather.
- 🟧 Unconfirmed no-left-turn restriction after RWY 06 departure for Category C/D aircraft — verify current chart/NOTAM before relying on it.
- Atlantic hurricane season (Jun–Nov, peak Aug–Oct) can force short-notice diversion planning — always hold a live alternate.
- Real-world overflight/entry-permit administration for the Habana FIR carries genuine administrative friction — see §5; brief before any Havana FIR transit or MUHA rotation.
- Terrain is not the operative threat here — do not let the flat-terrain characterization substitute for a current-chart MSA check.

---

## 5. Aerodrome category, restrictions & crew qualification

- **Special-airport / category:** Not operator-categorised as a restricted-crew special airport in reachable sources; the standing briefing items are the single-runway/no-crosswind-option constraint and the RWY 24 no-ILS gap. 🟧
- **Crew-qualification gate:** None identified in reachable sources. 🟧
- **Operating restrictions / bans:** A VATSIM operational cross-check reports a no-left-turn restriction after RWY 06 departure for Category C/D aircraft — not confirmed against the primary AIP. 🟧
- **Overflight / entry / permits:** 🟧 In the real world, non-Cuban civil aircraft transiting or entering the Habana FIR (MUFH) — including flights that only cross the surrounding oceanic area without overflying Cuban territory — require a Cuban overflight/entry permit, and operators of certain national registries face additional licensing considerations administered by their own state authority. This is a genuine real-world administrative layer distinct from the airport's physical characteristics; for this sim/virtual-airline operation it is recorded here as a factual planning caveat rather than a network restriction. Confirm current-day applicability before treating any specific detail as authoritative.
- **Operations notes:** Airport operator — **Empresa Cubana de Aeropuertos y Servicios Aeronáuticos (ECASA)**; civil aviation regulator/AIP authority — **Instituto de Aeronáutica Civil de Cuba (IACC)**. Specific air-navigation-service-provider attribution not independently confirmed. 🟧

---

## 6. General / hours / services

| Item | Value | Flag |
|---|---|---|
| ATS hours | Not published / verify | 🟧 |
| AD operating hours | Not published / verify | 🟧 |
| Night / curfew restrictions | None identified; not confirmed | 🟧 |
| RFF category | Not published / verify | 🟧 |
| Fuel | Jet A-1 assumed; multiple into-plane providers reported by a tier-4 aggregator (§16); hours not confirmed | 🟧 |
| PCN | Not published / verify | 🟧 |
| Customs | Confirmed Port of Entry; hours not confirmed | 🟧 |
| Handling / FBO | State operator ECASA; specific ground-handling agent for our operation not confirmed | 🟧 |

---

## 7. Runways & declared distances

| RWY | Dimensions | Surface / PCN | TORA | TODA | ASDA | LDA | Notes |
|---|---|---|---|---|---|---|---|
| 06 | 4,000 × 45 m | Hard/asphalt; PCN not published 🟧 | 4,000 m 🟧 | 4,000 m 🟧 | 4,000 m 🟧 | 4,000 m 🟧 | Reduced intersection-departure distances reported per VATSIM operational cross-check (named intersections: 3,480 m and 2,200 m) — not primary-AIP-confirmed 🟧 |
| 24 | 4,000 × 45 m | Hard/asphalt; PCN not published 🟧 | 4,000 m 🟧 | 4,000 m 🟧 | 4,000 m 🟧 | 4,000 m 🟧 | Reduced intersection-departure distance reported per VATSIM operational cross-check (named intersection: 3,550 m) — not primary-AIP-confirmed 🟧 |

*No displaced threshold found in any reachable source for either runway direction — not independently confirmed against a current AIRAC. Full-length declared distances are inferred from published runway length (4,000 m); exact TORA/TODA/ASDA/LDA figures are not individually confirmed from a primary AIP table. All distances in metres.*

---

## 8. Communications

| Service | Callsign | Frequency | Hours | Notes |
|---|---|---|---|---|
| ATIS | Havana ATIS | 132.500 | Not confirmed | Cross-checked VATSIM SOP + tier-4 aggregator (matching value) 🟩 |
| Delivery | Havana Delivery | 126.000 | Not confirmed | VATSIM operational cross-check only 🟧 |
| Ground | Marti Ground | 121.900 | Not confirmed | Cross-checked two independent tier-4 sources (matching value) 🟩 |
| Tower | Marti Tower | 118.100 | Not confirmed | Cross-checked two independent tier-4 sources (matching value) 🟩 |
| Approach | Havana Terminal / Approach | 120.300 (a second tier-4 source also lists 119.35) | Not confirmed | Discrepancy between sources — verify 🟧 |
| Centre / FIR | Havana Center (Habana FIR, MUFH) | 124.550 (128.700 alternate departure; 135.100 western sector) | Not confirmed | VATSIM operational cross-check; HF "Radio" contact also reported at 126.90 MHz and 5562/8876/11321 kHz for oceanic use 🟧 |

*Sourced to a combination of a VATSIM Havana FIR operational SOP (network-sim, not regulatory) and a tier-4 aggregator; ATIS/Ground/Tower values match across independent sources, giving reasonable confidence, but none are confirmed against the primary AIP Cuba. Treat as provisional pending a current-AIRAC cross-check.*

---

## 9. Navaids

| Aid | Ident | Freq | Hours | Notes |
|---|---|---|---|---|
| VOR/DME | UHA | 116.10 | Not confirmed | Havana, on/near field 🟧 |
| VOR | UPB | 109.20 | Not confirmed | Playa Baracoa, ~10 NM 🟧 |
| NDB | UBP | 250 kHz | Not confirmed | Playa Baracoa; ILS/locator association not confirmed 🟧 |
| ILS RWY 06 | IHA | Localizer frequency not published / verify 🟧; glidepath reported 329.6 MHz via a NOTAM cross-check | Not confirmed | RWY 24 has **no ILS** 🟧 |

---

## 10. Arrival

- **Transition altitude / level:** 🟧 A VATSIM Havana FIR operational SOP states TA 3,000 ft with the transition level set by ATC and broadcast on ATIS (commonly FL040 when local QNH ≥ 1013 hPa) — network-sim sourced, not confirmed against the primary AIP.
- **Speed:** 250 KIAS below FL100 (standard ICAO norm per the VATSIM cross-check) 🟧
- **Preferential runway logic:** Not published / verify 🟧 — general Cuba climatology (prevailing easterly trade winds) would tend to favour RWY 06 for arrivals; not an AIP-sourced rule.
- **Approaches (names only — verify minima on current AIRAC charts):**

| RWY | Approach | IAF | FAF/FAP alt | Notes |
|---|---|---|---|---|
| 06 | ILS (IHA), RNP, VOR | Not published / verify | Not published / verify | Primary precision approach for the field 🟧 |
| 24 | RNP, VOR | Not published / verify | Not published / verify | No ILS — non-precision only 🟥 |

- **STARs (names only):** Not confirmed in reachable sources — pull the current-AIRAC STAR list at planning. 🟧
- **LVP:** Not published / verify 🟧 — no CAT II/III infrastructure confirmed at this field.
- **Missed approach watch-items:** Terrain is not the driver (flat coastal plain); the operative concerns are non-precision-approach margin on RWY 24 and single-runway re-sequencing after a go-around.

---

## 11. Departure

- **SIDs (names only — fly the charted version):** RWY 06 RNAV SID **EMUPA3** — identified via a NOTAM cross-check citing the primary AIP (AD 2 MUHA amendment pages); no RWY 24 SID name confirmed in reachable sources. 🟧
- **RNP / climb-gradient requirements:** RNAV/RNP SID structure confirmed to exist (EMUPA3); gradient/equipage requirements not confirmed — verify current chart. See [OM E — PBN and RNP Operations](../../../../../flight-ops/pbn-and-rnp-operations.md).
- **Take-off minima:** Not published / verify 🟧
- **Start-up / push-back:** Not published / verify 🟧
- **ATC slot / CTOT & clearance:** No slot/CTOT regime identified in reachable sources; a VATSIM operational cross-check describes a conventional clearance-delivery → ground → tower sequence with an initial climb to FL150 and handoff to Havana Center. 🟧
- **De-icing:** NIL — tropical sea-level field, no de-icing requirement. 🟩

---

## 12. Noise & Environmental

- **Noise abatement (NAP):** Not published / verify 🟧
- **Night noise / dB limits:** Not published / verify 🟧
- **Engine run-up restrictions:** Not published / verify 🟧
- **Reverse thrust / idle-reverse policy:** Not published / verify 🟧

---

## 13. Ground operations

- **Stands for our types:** Five aprons serve distinct roles per a VATSIM operational cross-check — Apron 1 (domestic, ~9 stands), Apron 2 (charter/cargo, ~11 stands), Apron 3 (international, 8 gates + 4 remote stands), Apron 4 (non-commercial parking/maintenance, no scheduled traffic), Apron 5 (general aviation). Not confirmed against the primary AIP. 🟧
- **Push-back:** Not published / verify 🟧
- **Standard taxi routes:** Per the same operational cross-check — Apron 1→RWY 06 via named taxiways G, A; Apron 2→RWY 06 via I/J, A; Apron 3→RWY 06 via D, A; Apron 1→RWY 24 via G/H; Apron 2→RWY 24 via I, A; Apron 3→RWY 24 via D, E, A. Network-sim sourced — confirm with Ground/Tower on the day. 🟧
- **Hot spots / tight taxiways:** Not published / verify 🟧
- **Follow-me:** Not published / verify 🟧

---

## 14. Weather & seasonal (durable)

- **Climate / prevailing wind:** Tropical savanna climate; prevailing trade winds predominantly easterly (tending north in winter, south in summer per general Cuba climatology), typically 5–15 kt.
- **Seasonal hazards:** Atlantic hurricane season **June–November** (peak **August–October**) — real potential for airport closure and schedule disruption at a single-runway field with no crosswind option. General Caribbean wet-season convective activity (afternoon thunderstorms) is the standing non-cyclone threat.
- **Local effects:** Coastal, low-elevation location; no notable terrain-driven local effect identified.

> **Live weather — pull at planning (T-2h):** METAR, TAF, TREND, SIGMET/AIRMET, tropical-cyclone advisories (in season). Not stored here.

---

## 15. NOTAMs

> **Pull at planning (T-2h).** Perishable — not stored here. Check: runway closure (single-runway field — any closure is a full-field event), navaid/ILS status (RWY 06 only), lighting, obstacle/crane, RFF downgrade, GPS/RAIM for RNP procedures, tropical-cyclone/TFR bulletins for the Habana FIR. Source: AIS / OFP NOTAM block.

---

## 16. Fuel & alternate planning notes

- **Typical role for us:** Destination / alternate-tier field — **not** a K Global base `[VAMSYS mirror 2026-07-26]`.
- **Nearest suitable alternates:** Company preferred alternates **MKJS** (Kingston, Jamaica) and **TJSJ** (San Juan, Puerto Rico) `[VAMSYS mirror 2026-07-26]` — cross-territory alternates, plain ICAO reference; confirm suitability, runway/RFF adequacy and current minima per leg.
- **Fuel-uplift notes:** Jet A-1 assumed; a tier-4 aggregator lists multiple into-plane providers (including named FBO/fuel-handling companies) — none individually confirmed for hours or quality. 🟧 See [OM E — Fuel Policy](../../../../../flight-ops/fuel-policy.md).
- **Range/perf flags for our fleet:** Field length (4,000 m) is non-limiting for any Category L type. See [OM B — Fleet Capability Matrix](../../../../../fleet/capability-matrix.md) for type-by-type reference.

---

## 17. Fleet-specific notes (optional)

- No fleet-specific consideration identified beyond the general Category L / single-runway characterization in §1/§7 — see [OM B — Fleet Capability Matrix](../../../../../fleet/capability-matrix.md). The operative planning driver at MUHA is the single-runway/no-ILS-on-24 configuration and hurricane-season disruption risk, not aircraft performance.

---

## 18. Open items (🟧 — confirm against AIP / current AIRAC)

- **Primary AIP Cuba (IACC) AD 2 MUHA package was not reachable via direct fetch this build** — the state AIS site renders without the underlying document content, consistent with the Sources register's warning about state AIPs. Every figure in this pack is tier-4-sourced or VATSIM-operational-cross-check-sourced and needs re-verification against a live AIRAC/eAIP extract.
- **Magnetic variation** (005°W) — single tier-4 source, no epoch stated.
- **ARP coordinates** — minor (~0.0001°) discrepancy between the VAMSYS/Navigraph mirror and OurAirports/SkyVector; not safety-critical, unresolved.
- **RFF category, PCN, take-off minima, ATS/AD operating hours, curfew/slot regime, noise-abatement procedure, push-back procedure, hot spots/tight-taxiway detail, follow-me availability** — none confirmed in reachable sources.
- **Declared distances** (TORA/TODA/ASDA/LDA) inferred from runway length; not confirmed from a primary AIP table. Intersection-reduced distances are VATSIM-sourced only.
- **ILS RWY 06 localizer frequency** not found in reachable sources; only the glidepath frequency (329.6 MHz) surfaced via a NOTAM cross-check.
- **SID/STAR list** — only one SID name (EMUPA3, RWY 06) surfaced; no STAR names obtained at all.
- **No-left-turn-after-RWY-06-departure restriction** (Category C/D) — VATSIM-sourced, not confirmed against the primary AIP.
- **Transition altitude** (3,000 ft) — VATSIM SOP-sourced, not confirmed against the primary AIP.
- **Caribbean / Habana FIR airspace is not yet covered by a dedicated OM C area brief** — the linked [North America Airspace brief](../../../../airspace/north-america.md) covers only the reference EDDF–KSFO Canada/western-US polar corridor.
- **Customs-availability data conflict** — one tier-4 source's "customs available" field reads negatively despite the same source separately confirming Port-of-Entry status; treated here as a data inconsistency, not a change in PoE status, pending clarification.
- **Ground-handling agent, fuel-uplift hours/quality, customs desk hours, and slot/curfew regime** — none confirmed.

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim material may inform content but is not listed here.*

- **Instituto de Aeronáutica Civil de Cuba (IACC)** — primary State AIP authority — https://www.iacc.gob.cu/ (retrieved 2026-07-26). *Landing page reachable; the AD 2 MUHA package itself did not return usable content via direct fetch — treat as a state-AIP access limitation, not a claim that no such document exists.*
- Bigorre.org — José Martí International Airport (Rancho Boyeros) NOTAM feed, citing **AIP/CUBA AIRAC AMDT 2-25** (AD 2 MUHA pages 5-5, 6-1) — https://www.bigorre.org/aero/notam/muha/en (retrieved 2026-07-26). *Confirms live AIP Cuba amendment cycle and page structure; source of the RWY 06 SID name (EMUPA3), the ILS RWY 06 glidepath frequency, and general MSA-sector corroboration.*
- OurAirports — https://ourairports.com/airports/MUHA/ (retrieved 2026-07-26). *ARP/elevation cross-check.*
- SkyVector — https://skyvector.com/airport/MUHA/La-Habana-Jose-Marti-International-Airport (retrieved 2026-07-26). *Runway heading/coordinates, ATC frequencies, navaids, fuel-provider names.*
- Universal Weather and Aviation — Jose Marti Intl Airport (MUHA/HAV) profile — https://www.universalweather.com/airports/MUHA-HAV-JOSE-MARTI-INTERNATIONAL-AIRPORT-HAVANA-LA-HABANA-CUBA/ (retrieved 2026-07-26). *Elevation, magnetic variation, Port-of-Entry status, catering/FBO reference.*
- VATCAR (VATSIM Caribbean Division) — Havana FIR, "José Martí Int'l Airport (MUHA) Pilot Briefing," v1.1, 2025-02-28 — https://havana.vatcar.net/wp-content/uploads/2025/02/MUHA-Pilot-Briefing.pdf (retrieved 2026-07-26). *Network-sim SOP, not regulatory — operational cross-check for runway/apron/taxi/ATC-position/frequency/departure-procedure content per the build instructions' §5.7 VATSIM cross-check step.*
- Wikipedia — "José Martí International Airport" — https://en.wikipedia.org/wiki/Jos%C3%A9_Mart%C3%AD_International_Airport (retrieved 2026-07-26). *Terminal/apron history and general corroboration.*
- CDS Ltd — "Cuba Overflight Permits (MUHA FIR): Requirements, Timing & How to Apply" — https://www.cdsltd.ky/cuba-overflight-permits-private-aviation-guide/ (retrieved 2026-07-26). *Real-world overflight/entry-permit administration corroboration for §5.*
- sanctions.org — mirror of U.S. Treasury OFAC Cuban Assets Control Regulations, 31 CFR §515.548 (overflight payments/permits) — https://sanctions.org/turbofac/research/OFAC-cuba-cacr-31-CFR-515.548 (retrieved 2026-07-26). *Regulatory corroboration for the real-world overflight/permit note in §5 — a non-Cuban-state source, cited only for factual corroboration.*

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-26 | Built from national/territory AIP; K Global fields from live VAMSYS; 4-page pack. |
