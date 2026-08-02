# LIRN — Capodichino · Airport Briefing

**LIRN / NAP** · Naples (Napoli), Campania, Italy · Europe
**Version** v0.1 · **Updated** 2026-07-26 · **Status** Draft

> **Read-me:** Planning aid for the sim, not a chart. Static data is drawn from the Gesac (airport operator) published runway-data page, ENAC/Wikipedia-corroborated figures and standard public aeronautical data; the ENAV eAIP (AIP Italia) proper is login-gated and was not directly reachable this pass — figures below are the best publicly reachable cross-check and are flagged 🟧 where not primary-AIP-confirmed. Approaches/SIDs/STARs are listed **by name only or flagged not-yet-confirmed** — fly the charted current-AIRAC version. Live weather/NOTAMs are pulled at planning (§14/§15). Open 🟧 items are listed in §18. Flag legend 🟥 restriction/hazard · 🟧 caution/unverified · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| ARP (lat/long) | 40°53′04″N / 14°17′27″E (40.8844, 14.2908) `[Gesac runway-data page]` |
| Field elevation | **294 ft / 90 m AMSL** `[Gesac runway-data page]` |
| Mag variation | 🟧 Not confirmed from a primary table this pass — verify current AIRAC |
| Time zone | UTC+1 (CET) / UTC+2 (CEST, EU DST observed) |
| Runway(s) | **06/24** — single runway, 2,628 × 45 m, bituminous conglomerate/concrete, magnetic orientation 056°/236° |
| Preferential runway | 🟧 Operator states a "balanced" unidirectional-preference pattern (take-offs oriented toward the city side, landings from the Casoria side) — exact wind/ATC criteria not confirmed; verify locally (§3.3/§12) |
| Longest LDA | 2,438 m (RWY 24) — RWY 06 LDA is notably shorter at 2,229 m (§7) |
| Approaches | **ILS CAT I both runway ends** (RWY 06 and RWY 24) plus PAPI both thresholds `[Wikipedia, corroborated]`; sub-category and current chart names not confirmed 🟧 |
| RFF category | 🟧 Not confirmed in reachable public sources — verify |
| Control type | **Radar** — Napoli Approach/Director; en route under **Roma FIR (LIRR)**, southern-sector operations delegated to **Brindisi ACC (LIBB)** — no Italy-specific FIR brief exists in this library; see [Europe (Continental) Airspace Briefing](../../../../airspace/europe.md) 🟧 (scope gap — that brief covers DE/FR/ES/PT, not Italy; flagged as an open item, §18) |
| Elevation class | Near sea-level (294 ft) — **not** hot-and-high; the defining performance/TEM driver is **surrounding high terrain** (Vesuvius, the Campanian hill ring), not density altitude |
| Special-airport status | 🟥 **Dual military/civil aerodrome** (adjoins a US Navy installation — NSA Naples / U.S. Sixth Fleet tenant area); single-runway field ringed by rising terrain — demanding-approach characteristics, brief accordingly (§3, §5) |
| Customs / PoE | **Yes** — Terminal 1, international sections; exact desk hours not confirmed 🟧 |
| K Global category | **R** `[VAMSYS mirror 2026-07-26]` 🟩 |
| K Global base | **No** `[VAMSYS mirror 2026-07-26]` |
| Company preferred alternates | **LIRF, LICC, LICJ** `[VAMSYS mirror 2026-07-26]` |
| Taxi-in / taxi-out (VAMSYS) | **10 min / 12 min** `[VAMSYS mirror 2026-07-26]` |

---

## 2. Validation summary

| Domain | Flag | Note |
|---|---|---|
| Terrain / CFIT | 🟥 | Naples sits in a bowl ringed by high ground — Vesuvius (~1,281 m / 4,203 ft) to the SE and the Campanian hill chain (Camaldoli ridge, ~458 m) close-in to the N/NW within the city itself. A 1958 fog-related crash on Vesuvius shortly after departure from this field is a stark historical reminder — see §3.1. |
| Runway length vs fleet perf | 🟧 | Single runway, 2,628 m TORA; RWY 06 LDA reduced to 2,229 m. Non-limiting for narrowbody/most widebody-twin types at typical weights, but confirm field-length performance for any long-haul type against current-AIRAC declared distances. |
| Approach availability / minima | 🟧 | ILS CAT I both ends reported; sub-category, current chart names and minima not confirmed this pass. |
| Airspace / traffic / control | 🟧 | Single-runway, radar-controlled TMA; shares regional airspace with military/US Navy traffic. Roma FIR / Brindisi ACC sector — no Italy FIR brief exists in-library (§18). |
| Weather / seasonal hazard | 🟧 | Mediterranean climate; no field-specific fog/wind statistic confirmed this pass — treat as general regional climatology pending AIP confirmation. |
| Curfew / slots / hours | 🟥 | Operator-published sources give **inconsistent curfew windows** (23:00–06:00 for charter flights vs. 22:30–03:30 general, per different Gesac-site statements) — a real discrepancy, not resolved this pass; treat the field as curfew-active and confirm the exact current window before planning a late/early rotation (§6/§11). |
| RFF category vs our types | 🟧 | Not confirmed — verify against current AIP. |
| Fuel availability | 🟧 | Jet A-1 assumed available for scheduled commercial ops; hours/supplier not confirmed. |
| Customs / handling / security | 🟧 | International PoE confirmed in principle (T1); desk hours and current handler not confirmed. |

---

## 3. Threat & Error Management (TEM)

### 3.1 CFIT / Terrain 🟥
Naples-Capodichino sits in a natural bowl: the city itself is built across a chain of hills (the **Camaldoli ridge**, ~458 m, rises within a few nautical miles to the N/NW of the field) and **Mount Vesuvius** — an active stratovolcano, summit around **1,281 m / 4,203 ft** — stands roughly 10–15 NM to the SE/ESE, dominating the skyline on the arrival/departure side facing the Bay of Naples. This is a genuinely demanding single-runway approach environment: the often-cited "beautiful" view on final is also a terrain-close-in approach over a dense, hilly city. The hazard is not theoretical — on **15–19 February 1958**, a USAF C-47 that departed Capodichino for Athens went missing in dense regional fog and was found wrecked high on Vesuvius's slope, a sobering historical marker for how quickly reduced visibility plus close-in high terrain can turn fatal at this field. Respect the published MSA sectors on the current chart without exception; do not attempt a shortcut visual segment in marginal weather.

### 3.2 Airborne conflict / traffic 🟧
LIRN is a **dual military/civil aerodrome** — a US Navy installation (Naval Support Activity Naples, home to U.S. Naval Forces Europe and the U.S. Sixth Fleet) sits adjacent to the civil airfield, and military/naval air traffic shares the local area. Combined with a single runway serving a busy regional airport (~13 million pax/year class), expect sequencing workload during peak banks. Control is understood to be **Napoli Approach/Director** under radar; en route inbound/outbound falls under **Roma FIR (LIRR)** with the southern sector operated by **Brindisi ACC (LIBB)** — see the cross-reference and gap note in §1/§18.

### 3.3 Runway excursion 🟧
Single runway 06/24; the declared LDA on **RWY 06 is reduced to 2,229 m against a 2,628 m TORA** — a meaningful ~400 m reduction versus the RWY 24 LDA of 2,438 m (§7). This asymmetry should be respected in landing-distance planning, particularly for a heavier/wetter-runway case on RWY 06. No further displaced-threshold or contamination detail confirmed this pass — verify current AIRAC.

### 3.4 Weather threat 🟧
Mediterranean coastal climate. No field-specific fog-frequency or wind-shear statistic was found in reachable public sources this pass — treat as general regional climatology (mild, wet winters; hot, dry summers) pending a primary AIP/climatology confirmation. The terrain ring (§3.1) means any reduced-visibility event compounds the CFIT threat well beyond a flat-field equivalent — brief accordingly regardless of the absence of a hard statistic.

### 3.5 Operational considerations 🟥
Three durable planning constraints: (1) the **terrain-ringed single-runway approach/departure environment** (§3.1) — the field's defining TEM item; (2) an **unresolved curfew-window discrepancy** between operator-published sources (§1/§6/§11) — treat as a hard night constraint until confirmed; and (3) **dual military/civil field status** with an adjacent US Navy installation, which can add local traffic/coordination considerations not present at a purely civil field.

---

## 4. Cautions & Warnings

- **Mount Vesuvius (~1,281 m / 4,203 ft)** dominates high ground SE/ESE of the field — respect MSA and do not descend early on any visual segment, however scenic the approach.
- **Camaldoli ridge and the Naples city hill chain** rise close-in to the N/NW — the field sits inside a genuine terrain bowl, not an open flat approach.
- **Historical CFIT precedent:** a 1958 departure from this field was lost on Vesuvius in fog — treat as a standing reminder that this is a terrain-and-weather-sensitive field, not a routine coastal strip.
- **RWY 06 LDA is meaningfully shorter (2,229 m) than RWY 24 (2,438 m)** — do not assume symmetric landing distance between the two directions.
- **Curfew window is not consistently published** across operator sources — confirm the current restriction before planning first/last-wave rotations; do not assume a 24 h-open field.
- **Dual military/civil field** — adjacent US Navy installation; expect possible military traffic interaction in the local area.

---

## 5. Aerodrome category, restrictions & crew qualification

- **Special-airport / category:** Not confirmed as an operator-designated restricted-crew "special airport" in reachable sources; the standing crew-briefing items are the **terrain-ringed single-runway environment** and the **curfew-window uncertainty**. 🟧
- **Crew-qualification gate:** No specific CAT II/III or captain-only restriction confirmed — verify against current operator/AIP data. 🟧
- **Operating restrictions / bans:** A night restriction applies in some form (§6/§11) but the exact window is unresolved between sources — treat conservatively. No RNP AR ban or circling restriction confirmed either way. 🟧
- **Overflight / entry / permits:** Standard EU/Schengen international arrival; no special state permit identified. 🟩
- **Operations notes:** Dual military/civil aerodrome; ICAO aerodrome reference code **4D**. Airport operator — **Gesac S.p.A.**

---

## 6. General / hours / services

| Item | Value | Flag |
|---|---|---|
| ATS hours | Not confirmed — verify current AIP | 🟧 |
| AD operating hours | Reported 24 h nominal availability; **however** operator sources also state a night closure — see next row | 🟧 |
| Night / curfew restrictions | 🟥 **Discrepant across operator-published sources**: one Gesac page states the field is "closed to charter flights from 23:00 to 06:00 local"; another Gesac footer states the airport is "closed from 22:30 to 03:30, except for exceptional flight delays," citing ENAC. Both point to a real night restriction — the exact scheduled-service window is **not resolved this pass**; confirm before planning a rotation touching either window. | 🟥 |
| RFF category | Not confirmed | 🟧 |
| Fuel | Jet A-1 assumed available for scheduled ops; supplier/hours not confirmed | 🟧 |
| PCN | Runway PCN 90/F/B/W/T; north taxiway (TN) PCN 78/F/B/X | 🟩 |
| Customs | International PoE at T1; exact hours not confirmed | 🟧 |
| Handling / FBO | Not individually confirmed in reachable public sources | 🟧 |

---

## 7. Runways & declared distances

| RWY | Dimensions | Surface / PCN | TORA | TODA | ASDA | LDA | Notes |
|---|---|---|---|---|---|---|---|
| 06 | 2,628 × 45 m | Bituminous conglomerate/concrete · PCN 90/F/B/W/T | 2,628 m | 2,758 m | 2,628 m | **2,229 m** | LDA reduced ~400 m vs TORA — verify displaced-threshold/obstacle basis on current AIRAC |
| 24 | 2,628 × 45 m | Bituminous conglomerate/concrete · PCN 90/F/B/W/T | 2,628 m | 2,778 m | 2,628 m | 2,438 m | Longest published LDA at the field |

*Source: Gesac (airport operator) "Runway data" page, https://www.aeroportodinapoli.it/en/dati-di-pista (retrieved 2026-07-26) — an operator-published, near-primary figure set; not independently cross-checked against the current ENAV eAIP cycle (login-gated, not reached this pass). All distances in metres. Magnetic orientation 056°/236° per Wikipedia (AIP-sourced citation), corroborated.*

---

## 8. Communications

| Service | Callsign | Frequency | Hours | Notes |
|---|---|---|---|---|
| ATIS | Napoli ATIS | 135.975 | Not confirmed | 🟧 |
| Delivery / Ground clearance | Napoli Ground Clearance Delivery | 121.900 | Not confirmed | 🟧 |
| Ground | Not confirmed | — | — | Verify current AIP |
| Tower | Napoli Tower | 118.500 | Not confirmed | 🟧 |
| Approach | Napoli Radar (Approach) | 124.350 | Not confirmed | 🟧 |
| Approach (Director) | Napoli Director | 120.950 | Not confirmed | 🟧 |
| Centre / FIR | Roma FIR (LIRR) / Brindisi ACC (LIBB), southern sector | Per current AIRAC | — | No Italy FIR brief in-library — see [Europe Airspace Briefing](../../../../airspace/europe.md) 🟧 (scope gap, §18) |

*Source: OurAirports frequency listing, https://ourairports.com/airports/LIRN/frequencies.html (retrieved 2026-07-26) — tier-4, crowd-sourced; treat all frequencies as 🟧 pending a live-AIRAC cross-check. A co-located US Navy base-ops frequency (118.275) and a military PMSV metro frequency are excluded here as not applicable to civil scheduled ops.*

---

## 9. Navaids

| Aid | Ident | Freq | Hours | Notes |
|---|---|---|---|---|
| VOR/NDB (regional) | GRA (Grazzanise) | Not confirmed | — | Named in nearby-navaid index; type/frequency not confirmed this pass 🟧 |
| VOR/NDB (regional) | POM (Pomiglianо) | Not confirmed | — | 🟧 |
| VOR/NDB (regional) | SOR (Sorrento) | Not confirmed | — | 🟧 |
| ILS RWY 06 | Not confirmed | Not confirmed | H24 (assumed) | CAT I reported; ident/frequency/sub-category not confirmed 🟧 |
| ILS RWY 24 | Not confirmed | Not confirmed | H24 (assumed) | CAT I reported; ident/frequency/sub-category not confirmed 🟧 |

*Source: OpenNav nearby-navaid index, https://opennav.com/airport/LIRN (retrieved 2026-07-26) — names only, tier-4; ILS presence per Wikipedia (AIP-sourced citation). Exact idents/frequencies not obtained this pass — pull the current-AIRAC navdata before use.*

---

## 10. Arrival

- **Transition altitude / level:** 🟧 8,000 ft reported (Wikipedia, citing AIP) — not independently re-confirmed against current AIRAC; unusually high for the region, verify before use.
- **Speed:** Standard 250 KIAS below FL100 (EU/ICAO norm) — confirm no local override on current chart.
- **Preferential runway logic:** 🟧 Operator statements describe a "balanced" pattern (see §12) but exact wind/ATC-driven runway-selection criteria are not confirmed.
- **Approaches (names only — verify minima on current AIRAC charts):**

| RWY | Approach | Notes |
|---|---|---|
| 06 | ILS CAT I (reported) | Terrain-side approach — respect MSA; verify current chart name/minima |
| 24 | ILS CAT I (reported) | Verify current chart name/minima |

- **STARs (names only):** Not confirmed in reachable research pass — pull the current-AIRAC STAR list at planning. 🟧
- **LVP:** Not confirmed — no field-specific low-visibility trigger data found this pass. 🟧
- **Missed approach watch-items:** **Terrain is the primary driver** — Vesuvius and the Camaldoli ridge close in on both sides of the field; fly the published missed approach and climb gradient exactly, do not improvise a shortcut in IMC.

---

## 11. Departure

- **SIDs (names only — fly the charted version):** Not confirmed in reachable research pass — pull the current-AIRAC SID list at planning. 🟧
- **RNP / climb-gradient requirements:** Not confirmed this pass; given the surrounding terrain, treat any published SID climb gradient as safety-critical and verify on the current chart before use. See [`OM E — PBN and RNP Operations`](../../../../../flight-ops/pbn-and-rnp-operations.md).
- **Take-off minima:** Not confirmed — verify current AIP. 🟧
- **Start-up / push-back:** Not confirmed in reachable sources. 🟧
- **ATC slot / CTOT & clearance:** Not confirmed — Naples is not identified as IATA Level 3 in reachable sources; treat as Level 1/2 pending confirmation. 🟧
- **De-icing:** Not confirmed — Mediterranean coastal field, de-icing need expected to be minimal/seasonal at most; verify locally. 🟧

---

## 12. Noise & Environmental

- **Noise abatement (NAP):** 🟧 The airport operator has stated (per public reporting, not independently primary-sourced this pass) that it operates a **"balanced" unidirectional runway-use pattern** — take-offs oriented toward the city side, landings from the Casoria side — adopted circa 2005 as part of a noise-monitoring/sanctioning regime reported to be the first of its kind at an Italian airport. Exact current-day routing/criteria not confirmed — verify locally.
- **Night noise / dB limits:** Not confirmed. 🟧
- **Engine run-up restrictions:** Not confirmed. 🟧
- **Reverse thrust / idle-reverse policy:** Not confirmed. 🟧

---

## 13. Ground operations

- **Stands for our types:** 🟧 Reported apron figures are inconsistent between sources — one figure gives "29 stands, 9 self-manoeuvring," another gives three aprons totalling roughly 36 stands (Apron 1: 26, of which 6 self-manoeuvring/20 nose-in; Apron 2: 6 nose-in; Apron 3: 4 nose-in with A-VDGS). Treat both as unconfirmed pending an operator/AIP-grade count.
- **Push-back:** Not confirmed — nose-in stands imply push-back is required for at least the majority of positions. 🟧
- **Standard taxi routes:** Two parallel taxiways serve the runway — **TN** (north, ~23 m wide, PCN 78/F/B/X) and **TS** (south, ~15 m wide), connected via lettered link taxiways **A–M**.
- **Hot spots / tight taxiways:** Not confirmed from a primary source this pass — the narrower **TS (south taxiway, ~15 m)** width is worth a caution flag for any Code-D/E-equivalent aircraft; verify against current AIP taxiway width/wingspan data. 🟧
- **Follow-me:** Not confirmed. 🟧

---

## 14. Weather & seasonal (durable)

- **Climate / prevailing wind:** Mediterranean coastal climate — mild wet winters, hot dry summers; no field-specific prevailing-wind figure confirmed this pass. 🟧
- **Seasonal hazards:** No field-specific fog/thunderstorm frequency statistic found in reachable sources — treat as general regional Mediterranean climatology (winter frontal systems, summer convective activity) pending AIP confirmation. The terrain ring (§3.1) means any reduced-visibility event is disproportionately significant here versus a flat coastal field.
- **Local effects:** Terrain-channelled local wind effects around the Camaldoli ridge/Vesuvius are plausible but not quantified in reachable sources — verify locally. 🟧

> **Live weather — pull at planning (T-2h):** METAR, TAF, TREND, SIGMET/AIRMET. Not stored here.

---

## 15. NOTAMs

> **Pull at planning (T-2h).** Perishable — not stored here. Check: runway/taxiway closures, navaid U/S, lighting, obstacle/crane, RFF downgrade, GPS/RAIM, curfew-window confirmation (§6), and — given the region — any Etna-related volcanic-ash NOTAM/ASHTAM affecting South Italy airspace even though the volcano itself is not adjacent to this field. Source: official AIS / OFP NOTAM block.

---

## 16. Fuel & alternate planning notes

- **Typical role for us:** Destination / origin field within the K Global South-Italy network; **not** a base.
- **Nearest suitable alternates:** Company preferred alternates [**LIRF**](../lirf/index.md) (Rome Fiumicino), [**LICC**](../licc/index.md) (Catania), **LICJ** (Palermo) `[VAMSYS mirror 2026-07-26]` — confirm suitability, runway/RFF adequacy and current minima per leg. Note LICC itself carries a volcanic-ash exposure (see its own briefing) — do not treat it as an ash-season alternate without checking current VAAC/ASHTAM status.
- **Fuel-uplift notes:** Jet A-1 assumed available for scheduled commercial ops; supplier/hours not confirmed. 🟧 See [`OM E — Fuel Policy`](../../../../../flight-ops/fuel-policy.md).
- **Range/perf flags for our fleet:** Field length (2,628 m TORA; RWY 06 LDA 2,229 m) is non-limiting for narrowbody and most widebody-twin operations at typical weights — confirm against current declared distances for any long-haul-configured type. See [`OM B — Fleet Capability Matrix`](../../../../../fleet/capability-matrix.md).

---

## 17. Fleet-specific notes (optional)

- No widebody-specific stand or performance constraint identified in reachable sources beyond the general apron-count uncertainty (§13). See [`OM B — Fleet Capability Matrix`](../../../../../fleet/capability-matrix.md) for type-by-type reference; the operative planning consideration at this field is the terrain-ringed approach/departure environment (§3) rather than aircraft performance.

---

## 18. Open items (🟧 — confirm against AIP / current AIRAC)

- **ENAV eAIP (AIP Italia) access** — the primary state source is login-gated; this brief relies on the Gesac operator runway-data page and public tier-4 corroboration. Re-verify against the primary AIP when access is available.
- **Curfew window** — discrepant between two Gesac-published statements (23:00–06:00 charter-only vs. 22:30–03:30 general with ENAC exemption note); not resolved this pass.
- **No Italy-specific FIR brief exists in this library** — linked to the general [Europe (Continental) Airspace Briefing](../../../../airspace/europe.md), which does **not** cover Italian FIRs (its scope is DE/FR/ES/PT). Roma FIR (LIRR) / Brindisi ACC (LIBB) context is asserted per task brief, not independently sourced this pass.
- **ATC frequencies** — sourced to OurAirports (tier-4, crowd-sourced); not cross-checked against current AIRAC.
- **Navaid idents/frequencies, SIDs/STARs, take-off minima, transition altitude (8,000 ft), RFF category** — none independently confirmed from a primary table this pass.
- **Apron/stand count** — two inconsistent figures found; neither operator/AIP-grade confirmed.
- **Mag variation, taxiway hot spots, ATS/customs hours, fuel supplier, handling agent** — not confirmed in reachable sources.
- **VATSIM cross-check** — not performed this pass; no vACC SOP located for LIRN.

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim material (current-AIRAC charts) informs content but is not listed here.*

- Gesac (Aeroporti di Napoli) — "Runway data" — https://www.aeroportodinapoli.it/en/dati-di-pista (retrieved 2026-07-26). *Operator-published runway/declared-distance/curfew data — near-primary but not the ENAV eAIP itself.*
- Wikipedia — "Naples International Airport" — https://en.wikipedia.org/wiki/Naples_International_Airport (retrieved 2026-07-26). *Runway/ILS/PAPI/transition-altitude/terminal/history detail, AIP-cited in places.*
- OurAirports — https://ourairports.com/airports/LIRN/ and /frequencies.html (retrieved 2026-07-26). *ARP/elevation/frequency cross-check, tier-4.*
- OpenNav — https://opennav.com/airport/LIRN (retrieved 2026-07-26). *Nearby-navaid names, tier-4.*
- Wikipedia — "Vesuvius" and Naples Airport crash-history citation within the Naples International Airport article (retrieved 2026-07-26). *Terrain/historical CFIT-adjacent event.*

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-26 | Built from AIP Italia (ENAV); K Global fields from live VAMSYS; 4-page pack. |
