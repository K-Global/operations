# EDDK — Cologne/Bonn · Airport Briefing

**EDDK / CGN** · Köln / Bonn, North Rhine-Westphalia, Germany · Europe
**Version** v0.3 · **Updated** 2026-07-25 · **Status** Draft

> **Read-me:** Planning aid for the sim, not a chart. Static data is drawn from the DFS eAIP (Germany's AIP of record) where reachable, cross-checked against public tier-4 sources; approaches/SIDs/STARs are listed **by name only** — fly the charted current-AIRAC version. Live weather/NOTAMs are pulled at planning (§14/§15). Open 🟧 items are listed in §18. Flag legend 🟥 restriction/hazard · 🟧 caution/unverified · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| ARP (lat/long) | 50°51.95′N / 007°08.56′E (50.865898, 7.142740) `[OurAirports/SkyVector mirror, retrieved 2026-07-25]` |
| Field elevation | **302 ft / 92 m** MSL |
| Mag variation | 🟧 Not independently confirmed for EDDK; regional reference only (OpenAIP lists 4°E at EDDS, 2022 survey) — confirm exact value/epoch on the current AIP/chart |
| Time zone | UTC +1 (CET) / UTC +2 (CEST, EU DST observed) |
| Runway(s) | **06/24** 2,459 × 45 m (8,067 × 148 ft), concrete · **13L/31R** 3,815 × 60 m (12,516 × 197 ft), asphalt · **13R/31L** 1,863 × 45 m (6,112 × 148 ft), asphalt — see §18 for a runway-designator discrepancy against older material |
| Preferential runway | 🟧 Not confirmed from reachable sources — confirm noise-preferential logic on current AIP/NOTAM |
| Longest LDA | 🟧 Physical length of 13L/31R (3,815 m / 12,516 ft) cited as best-available; TORA/TODA/ASDA/LDA per end not confirmed — see §7 |
| Approaches | ILS (CAT III reported on the long parallel, historically a Cat IIIb-capable runway) 🟧, RNAV (GPS)/RNP — verify exact runway/category on current AIRAC |
| RFF category | 🟧 Not published in reachable sources — confirm against AIP AD 2.6 |
| Control type | **Radar** (Langen Radar / Langen ACC, EDGG) |
| Elevation class | Sea-level-adjacent; **not** hot-and-high — no density-altitude performance driver |
| Special-airport status | **24-hour airport — one of Germany's few H24 fields; major overnight CARGO hub (FedEx Express, UPS Airlines) with NO published night curfew** — unusual for Germany and the standing operational-character item for this field 🟥 |
| Customs / PoE | Yes — international airport; exact counter hours not confirmed 🟧 |

**K Global network fields (live VAMSYS):** Category **S** · Base **No** · Preferred alternates **EDDF, EDDL, EHAM** · Taxi-in **10 min** / taxi-out **12 min**.

---

## 2. Validation summary

| Domain | Flag | Note |
|---|---|---|
| Terrain / CFIT | 🟩 | Low-lying Rhine-basin terrain; no close-in high ground. Wahner Heide nature reserve borders the field but is not a terrain hazard. |
| Runway length vs fleet perf | 🟩 | 13L/31R (3,815 m) is ample for our narrowbody types; the two shorter runways (06/24, 13R/31L) are secondary/GA-weighted. |
| Approach availability / minima | 🟧 | ILS reported on the long parallel with a CAT III history; exact current category/minima not independently confirmed — verify current AIRAC. |
| Airspace / traffic / control | 🟩 | Langen FIR (EDGG), fully radar-controlled; moderate traffic density, well below Frankfurt. |
| Weather / seasonal hazard | 🟧 | Central-European climate; winter fog/low stratus and occasional icing are the standing seasonal items — see §14. |
| Curfew / slots / hours | 🟥 | **No night curfew** — confirmed 24-hour cargo-hub operation (FedEx Express, UPS Airlines hub). Distinct from most German airports; brief this explicitly for night sectors. |
| RFF category vs our types | 🟧 | Not published — confirm before relying on it for our fleet. |
| Fuel availability | 🟧 | Jet A1 expected on a field this size; hours/into-plane provider not confirmed. |
| Customs / handling / security | 🟧 | International PoE; exact hours not confirmed. |

---

## 3. Threat & Error Management (TEM)

### 3.1 CFIT / Terrain 🟩
EDDK sits at 302 ft MSL in the low Rhine basin between Cologne and Bonn, bordered by the flat-to-gently-rolling **Wahner Heide** heathland/nature reserve. There is no close-in high terrain; the nearest meaningfully elevated ground (the Bergisches Land uplands) lies well east/southeast of the field and is not a factor for standard arrival/departure corridors. CFIT exposure at EDDK itself is low — read the MSA ring on the current area chart for the exact sector minima, particularly for any radar-vectored missed approach.

### 3.2 Airborne conflict / traffic 🟩
EDDK sits inside **Langen FIR (EDGG)**, fully radar/surveillance-controlled with no procedural segment — see the [Langen (EDGG) FIR brief](../../../../airspace/fir/europe/langen-edgg.md). Traffic density is moderate: a mix of scheduled passenger (Eurowings hub, low-cost/leisure focus city), heavy **overnight cargo freighter traffic** (FedEx Express and UPS Airlines both operate hub banks here), and general aviation. The overnight cargo bank is the notable traffic-density feature — expect a materially busier circuit in the small hours than the airport's daytime passenger profile would suggest, unlike most German fields where night movements are sparse under a curfew.

### 3.3 Runway excursion 🟧
Three runways are published: the long parallel **13L/31R** (3,815 m/12,516 ft, asphalt) used for scheduled/cargo jet traffic, a shorter parallel **13R/31L** (1,863 m/6,112 ft, asphalt), and a short crossing runway **06/24** (2,459 m/8,067 ft, concrete). Displaced thresholds, TORA/TODA/ASDA/LDA per runway end, and any starter-extension or intersection-departure detail are **not confirmed from reachable tier-4 sources** — confirm the exact declared distances and any displacement on the current AIP/chart before treating the physical lengths in §7 as usable distances. No contamination/tailwind-tendency data found — verify locally, especially for winter operations (§14).

### 3.4 Weather threat 🟧
Central European climate: prevailing westerly flow, with winter (Nov–Mar) bringing the standing seasonal threats of **radiation fog/low stratus** in the Rhine basin and occasional **snow/icing**. No tropical or monsoon-type hazard. Summer convection is the typical central-European thunderstorm risk, handled tactically under radar. See §14.

### 3.5 Operational considerations 🟥
The defining operational fact at EDDK is that it is a **24-hour airport with no published night curfew** — a genuine outlier among German commercial airports, most of which carry hard or restricted night-operation regimes. This is what makes it viable as a FedEx Express/UPS Airlines European overnight hub. Brief crews explicitly: a night arrival/departure here is normal, unlike at most other German fields in this network (compare EDDS §3.5 and EDDF), and the overnight movement rate (freighter bank) can be materially higher than daytime intuition suggests. RFF category and exact declared distances remain open (§18) — pull before relying on either operationally.

---

## 4. Cautions & Warnings

- **No night curfew — 24h cargo-hub operation.** Do not assume a quiet overnight ramp; FedEx Express and UPS Airlines both bank freighters through EDDK overnight.
- **Runway-designator discrepancy:** current tier-4 data (OurAirports, updated 2023) shows the long parallel pair as **13L/31R and 13R/31L**; older reference material (including this brief's original build anchor) shows **14L/32R and 14R/32L**. This is consistent with a **magnetic-variation runway renumbering** — confirm the current designators against the live AIP/NOTAM and any in-sim scenery before use. See §18.
- **Exact declared distances (TORA/TODA/ASDA/LDA) and RFF category are unconfirmed** — do not assume the physical runway lengths in §7 equal usable declared distances.
- Wahner Heide nature reserve borders the airport — wildlife activity in the vicinity is plausible; not independently confirmed from a NOTAM/AIP source.

---

## 5. Aerodrome category, restrictions & crew qualification

- **Special-airport / category:** Not identified as a special/restricted-category airport in reachable sources. **VAMSYS aerodrome category: S.** 🟧 confirm meaning/threshold against the current AIP.
- **Crew-qualification gate:** None identified specifically for EDDK beyond standard CAT II/III currency if the long-parallel ILS's category is confirmed as CAT III on the current AIRAC (see §9/§10) — treat as a standard European jet field pending that confirmation.
- **Operating restrictions / bans:** None identified in reachable sources. No RNP AR / circling restriction found — verify current AIRAC.
- **Overflight / entry / permits:** Standard EU/Schengen operation — no permits required.
- **Operations notes:** ANSP — DFS Deutsche Flugsicherung (Langen ACC/Radar). Airport operator — Flughafen Köln/Bonn GmbH (jointly owned by the City of Cologne, the Federal Republic, North Rhine-Westphalia, the City of Bonn, and two counties). Hub for FedEx Express and UPS Airlines; focus city for several leisure/low-cost carriers; German Air Force Executive Transport Wing based on the south-western side of the field.

---

## 6. General / hours / services

| Item | Value | Flag |
|---|---|---|
| ATS hours | 🟧 Not independently confirmed as H24 in a reachable primary source, though the airport's 24-hour operating status is well corroborated by public/secondary sources | 🟧 |
| AD operating hours | **H24 — no night curfew** (well-corroborated; FedEx Express/UPS Airlines overnight hub operation) | 🟩 |
| Night / curfew restrictions | **None published** — see §3.5/§4 | 🟥 (absence of a restriction, briefed as a standing operational fact) |
| RFF category | 🟧 Not published in reachable sources | 🟧 |
| Fuel | 🟧 Jet A1 expected; hours/provider not confirmed | 🟧 |
| PCN | 🟧 Not published in reachable sources | 🟧 |
| Customs | Yes — international PoE; exact hours not confirmed | 🟧 |
| Handling / FBO | 🟧 Not confirmed from reachable sources — expect full-service handling given cargo-hub/scheduled-passenger status | 🟧 |

---

## 7. Runways & declared distances

| RWY | Dimensions | Surface | TORA | TODA | ASDA | LDA | Notes |
|---|---|---|---|---|---|---|---|
| 06/24 | 2,459 × 45 m (8,067 × 148 ft) | Concrete | 🟧 not confirmed | 🟧 | 🟧 | 🟧 | Physical length only; short crossing runway |
| 13L/31R | 3,815 × 60 m (12,516 × 197 ft) | Asphalt | 🟧 not confirmed | 🟧 | 🟧 | 🟧 | Long parallel; primary runway for scheduled/cargo jets; **designated 14L/32R in older reference material — see §18** |
| 13R/31L | 1,863 × 45 m (6,112 × 148 ft) | Asphalt | 🟧 not confirmed | 🟧 | 🟧 | 🟧 | Short parallel; **designated 14R/32L in older reference material — see §18** |

*Physical runway dimensions from OurAirports (retrieved 2026-07-25), cross-checked against SkyVector coordinate mirror. TORA/TODA/ASDA/LDA per runway end, any displaced thresholds, and PCN are **not confirmed** — the DFS eAIP (aip.dfs.de) rendered no retrievable text on direct fetch (JS-rendered frameset); treat all declared-distance figures as physical length only pending AIP/current-AIRAC confirmation.*

---

## 8. Communications

| Service | Callsign | Frequency | Hours | Notes |
|---|---|---|---|---|
| ATIS | Köln/Bonn ATIS | 132.13 | 🟧 H24 assumed | |
| Delivery | Köln/Bonn Delivery | 121.855 | 🟧 H24 assumed | |
| Ground | Köln/Bonn Ground / Rollkontrolle | 121.73 | 🟧 H24 assumed | |
| Tower | Köln/Bonn Tower / Turm | 124.98 | 🟧 H24 assumed | |
| Approach / Director | (Director) | 121.05 | 🟧 H24 assumed | Labelled "DIR" in tier-4 source; role not independently confirmed |
| Centre / FIR | Langen Radar (Langen ACC, EDGG) | 118.75 | H24 | Also a "Langen Information" entry at 129.875 in tier-4 data, labelled AFIS — likely a mislabel/FIS relay rather than the primary approach service at a radar/TWR-controlled field; verify on current AIP |

*Emergency 121.5. Apron/ramp 121.95. Military "POST" 136.25. Bremen VOLMET 127.41. Source: OurAirports frequency table (retrieved 2026-07-25) — tier-4; not independently cross-checked against the DFS eAIP. Confirm all frequencies on the current AIRAC before use.* 🟧

---

## 9. Navaids

| Aid | Ident | Freq | Hours | Notes |
|---|---|---|---|---|
| VOR/DME | KBO (Köln/Bonn) | 112.15 | H24 assumed | On field (0.3 nm SSE of ARP) |
| NDB | LW (Köln/Bonn) | 301 kHz | H24 assumed | 4.6 nm ENE — likely an approach locator; runway association not confirmed |
| NDB | LJ (Köln/Bonn) | 365 kHz | H24 assumed | 4.8 nm NW |
| NDB | LV (Köln/Bonn) | 327 kHz | H24 assumed | 5.2 nm SE |
| ILS | 🟧 not confirmed | 🟧 | — | Reported CAT III capability on the long parallel runway in general/secondary reporting; exact ident/frequency/category **not independently confirmed** — verify on current AIRAC chart |

*On-field navaid idents/frequencies from OurAirports navaid-proximity data (retrieved 2026-07-25) — tier-4, not cross-checked against the DFS eAIP. ILS component data could not be confirmed from any reachable free source.*

---

## 10. Arrival

- **Transition altitude / level:** 🟧 Not confirmed for EDDK specifically — German TA is commonly in the FL/ft-transition-altitude range published per aerodrome on the AIP; confirm current chart.
- **Speed:** Standard ICAO/EU 250 KIAS below FL100 — confirm no local override.
- **Preferential runway logic:** 🟧 Not confirmed — likely wind-driven given three runway options; verify on current AIP/NOTAM.
- **Approaches (names only — verify minima on current AIRAC charts):**

| RWY | Approach | Notes |
|---|---|---|
| 13L/31R (ex-14L/32R) | ILS (category not independently confirmed — reported CAT III historically) 🟧, RNAV (GPS)/RNP 🟧 | Primary runway for scheduled/cargo jets |
| 13R/31L (ex-14R/32L) | 🟧 Not confirmed | Secondary parallel |
| 06/24 | 🟧 Not confirmed | Short crossing runway |

- **STARs (names only):** 🟧 Not confirmed from reachable sources — pull from current AIRAC.
- **LVP:** 🟧 If the reported CAT III capability on the long parallel is confirmed, standard LVP trigger conditions would apply — confirm equipment/procedure on current AIRAC before relying on it.
- **Missed approach watch-items:** No close-in high terrain (§3.1); primary missed-approach consideration is traffic sequencing among the three runways and against the overnight cargo bank.

---

## 11. Departure

- **SIDs (names only — fly the charted version):** 🟧 Not confirmed from reachable sources — pull from current AIRAC.
- **RNP / climb-gradient requirements:** No unusual gradient expected at this near-sea-level field; confirm standard RNAV SID equipage requirements on current chart.
- **Take-off minima:** 🟧 Not confirmed.
- **Start-up / push-back:** 🟧 Not confirmed — verify locally, particularly given the mixed cargo-freighter/passenger ramp environment.
- **ATC slot / CTOT & clearance:** 🟧 Slot-coordination status not confirmed for EDDK specifically — confirm on the current OFP/AIP; the 24h cargo-hub profile means overnight slot availability should not be assumed identical to a curfewed field.
- **De-icing:** 🟧 Availability/procedure not confirmed — expect a requirement in Central European winter conditions; verify locally.

---

## 12. Noise & Environmental

- **Noise abatement (NAP):** 🟧 Not confirmed from reachable sources. Given the airport's role as a 24h freighter hub, some form of noise-management framework (compensation zones, community engagement) is plausible but not documented here — verify with the airport operator/AIP.
- **Night noise / dB limits:** 🟥 **No night curfew identified** — distinguish clearly from other German fields in this network; this is the standing environmental/political fact for EDDK (contrast with EDDS §12 and most other German commercial airports).
- **Engine run-up restrictions:** 🟧 Not confirmed.
- **Reverse thrust / idle-reverse policy:** 🟧 Not confirmed.

---

## 13. Ground operations

- **Stands for our types:** 🟧 Not confirmed in detail — the field handles scheduled narrowbody passenger traffic (Eurowings hub, leisure/low-cost focus city) alongside heavy overnight freighter parking; no specific stand/apron data reachable for our current EDDF–EDDK A319 service.
- **Push-back:** 🟧 Not confirmed.
- **Standard taxi routes:** 🟧 Not confirmed — confirm with Ground on the day; note the airport's layout spans three runways.
- **Hot spots / tight taxiways:** 🟧 None identified from reachable sources — verify current AIP/NOTAM hot-spot chart.
- **Follow-me:** 🟧 Not confirmed.

---

## 14. Weather & seasonal (durable)

- **Climate / prevailing wind:** Central European maritime-influenced climate; prevailing westerly flow, moderated by the Rhine valley.
- **Seasonal hazards:** Winter (Nov–Mar) **radiation fog/low stratus** in the Rhine basin and occasional snow/icing; summer convective activity (embedded CB, handled tactically under radar) per the general Central European pattern — see the [Langen (EDGG) FIR brief](../../../../airspace/fir/europe/langen-edgg.md) §11.
- **Local effects:** No significant terrain-driven local wind effect identified; Wahner Heide heathland borders the field.

> **Live weather — pull at planning (T-2h):** METAR, TAF, TREND, SIGMET/AIRMET. Not stored here.

---

## 15. NOTAMs

> **Pull at planning (T-2h).** Perishable — not stored here. Check specifically: runway/taxiway closures across all three runways, ILS/navaid outages, current runway-designator status (§18), lighting, obstacle/crane, RFF downgrade, GPS/RAIM. Source: official AIS / OFP NOTAM block.

---

## 16. Fuel & alternate planning notes

- **Typical role for us:** Destination/origin — EDDF–EDDK City-unit narrowbody spoke (currently filed at *proposed* status in the live route register).
- **Nearest suitable alternates:** **EDDF** Frankfurt-Main (`[VAMSYS mirror 2026-07-25]`) — see sibling brief `<../EDDF — Frankfurt-Main/EDDF — Briefing.md>`, **EDDL** Düsseldorf (~26 nm N), **EHAM** Amsterdam Schiphol — all dense, well-equipped diversion options per the [Langen (EDGG) FIR brief](../../../../airspace/fir/europe/langen-edgg.md) §9.
- **Fuel-uplift notes:** 🟧 Jet A1 expected; hours/provider not confirmed — confirm on the OFP.
- **Range/perf flags for our fleet:** No performance-limiting factor identified for our narrowbody types on the long parallel runway; the **declared-distance gap (§7/§18)** means exact usable length should be confirmed before planning a limiting-runway scenario. See also [`OM E — Cold Weather Operations`](../../../../../flight-ops/cold-weather-operations.md) for winter-fog/icing planning.

---

## 17. Fleet-specific notes (optional)

- **A319 (OM B):** Currently the type filed for the EDDF–EDDK City-unit spoke (proposed status). No field-specific performance or stand limitation identified for the A319 at EDDK. See [`OM B — A319 Dispatch`](../../../../../fleet/a319/dispatch.md).
- **Cargo-unit note:** EDDK is a genuine 24h FedEx Express/UPS Airlines cargo hub in the real-world network, but the live K Global route register currently carries **no Cargo-unit (freighter) routes to EDDK** — only the City-unit A319 spoke. Worth flagging for network planning (see the company Knowledge base) rather than treating as a brief inaccuracy.

---

## 18. Open items (🟧 — confirm against AIP / current AIRAC)

- **DFS eAIP unreachable** — direct fetch of aip.dfs.de returned no retrievable text (JS-rendered frameset); this entire brief rests on tier-4 corroboration (OurAirports, Wikipedia, SkyVector coordinate mirror) rather than the primary AIP. Re-attempt via browser/subscription source before treating any figure here as final.
- **Runway-designator discrepancy:** current tier-4 data shows **13L/31R and 13R/31L**; this build's original anchor material referenced **14L/32R and 14R/32L** — consistent with a magnetic-variation runway renumbering. Confirm the live designators against the current AIP/NOTAM and any in-sim scenery before flight-planning.
- **Declared distances (TORA/TODA/ASDA/LDA), PCN, and any displaced thresholds** — not confirmed for any of the three runways; only physical lengths are captured in §7.
- **RFF category** — not published in reachable sources.
- **ILS category/ident/frequency on the long parallel runway** — reported CAT III-capable in general/secondary reporting but not independently confirmed; runway association, ident and frequency all need current-AIRAC confirmation.
- **Preferential runway logic, SIDs/STARs, take-off minima, transition altitude, noise abatement, push-back/de-icing procedure** — none confirmed from reachable tier-4 sources.
- **VAMSYS operational fields:** preferred alternates (EDDF, EDDL, EHAM) and taxi-in/out times (10/12 min) are carried from the live VAMSYS record per this build's brief; not independently re-verified here.

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim material informs content but is not listed here.*

- **DFS eAIP** (Deutsche Flugsicherung GmbH) — attempted direct fetch, https://aip.dfs.de/BasicIFR/ (retrieved 2026-07-25) — page returned no retrievable text (JS-rendered frameset); primary source of record but not reachable this build.
- OurAirports — Cologne Bonn Airport (CGN, EDDK) — https://ourairports.com/airports/EDDK/ , /runways.html , /frequencies.html , /closest-navaids.html (all retrieved 2026-07-25). *Tier-4 — runway physical dimensions, ARP/elevation, frequency table, on-field navaid idents.*
- Wikipedia — Cologne Bonn Airport — https://en.wikipedia.org/wiki/Cologne_Bonn_Airport (retrieved 2026-07-25). *24-hour operating status; FedEx Express/UPS Airlines hub status; third-largest German cargo airport; ownership structure.*
- SkyVector — coordinate/chart-index mirror (cross-check only, page fetch timed out this build; coordinates corroborated via OurAirports) — https://skyvector.com/airport/EDDK.

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-14 | Baseline stub — position/elevation seeded from Navigraph navdata. |
| v0.2 | 2026-07-25 | Built from DFS eAIP; K Global fields from live VAMSYS. Full 18-section briefing built from tier-4 corroboration (DFS eAIP unreachable — JS-rendered frameset). Anchored the 24h/no-curfew cargo-hub character (FedEx Express, UPS Airlines) as the field's defining operational fact. Identified and flagged a runway-designator discrepancy (13L/31R & 13R/31L in current tier-4 data vs. 14L/32R & 14R/32L in older reference material). Declared distances, RFF category, ILS category/ident, and most procedural detail remain open 🟧 pending primary AIP access. |
| v0.3 | 2026-07-25 | Folded to 4-page pack (Briefing + Dispatch + Departure + Arrival), per new airport-documentation policy. Content preserved unchanged from v0.2; all relative links re-pointed one level deeper for the new folder location, and one pre-existing broken link corrected to resolve at the new depth. |
