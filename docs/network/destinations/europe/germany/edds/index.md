# EDDS — Stuttgart · Airport Briefing

**EDDS / STR** · Stuttgart, Baden-Württemberg, Germany · Europe
**Version** v0.2 · **Updated** 2026-07-25 · **Status** Draft

> **Read-me:** Planning aid for the sim, not a chart. Companion to the [EDDS Dispatch](dispatch.md), [Departure](departure.md) and [Arrival](arrival.md) pages. Static data is drawn from the DFS eAIP (Germany's AIP of record) where reachable, cross-checked against public tier-4 sources; approaches/SIDs/STARs are listed **by name only** — fly the charted current-AIRAC version. Live weather/NOTAMs are pulled at planning (§14/§15). Open 🟧 items are listed in §18. Flag legend 🟥 restriction/hazard · 🟧 caution/unverified · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| ARP (lat/long) | 48°41.39′N / 009°13.32′E (48.689899, 9.221960) `[OurAirports/SkyVector mirror, retrieved 2026-07-25]` |
| Field elevation | **1,276 ft / 389 m** MSL `[OurAirports]`; 🟧 a secondary source (OpenAIP) lists 374 m/1,227 ft — a ~49 ft discrepancy not resolved from reachable sources, see §18 |
| Mag variation | ~4°E (OpenAIP, 2022 survey) 🟧 — epoch/currency not independently confirmed |
| Time zone | UTC +1 (CET) / UTC +2 (CEST, EU DST observed) |
| Runway(s) | **07/25** — single runway, 3,345 × 45 m (10,974 × 148 ft), concrete; **RWY 07 threshold displaced 300 m (984 ft)**. Two marked helipads (H-North, H-South, 30 × 30 m) serve the co-located Stuttgart Army Airfield/police helicopter operation. |
| Preferential runway | 🟧 Not confirmed — single runway, so the question is arrival/departure direction (wind-driven); confirm on current AIP |
| Longest LDA | 🟧 Physical length 3,345 m (10,974 ft) less the 300 m RWY 07 displacement; exact published LDA/TORA/TODA/ASDA not confirmed — see §7 |
| Approaches | ILS (CAT III reported — Stuttgart is widely reported as CAT IIIb-equipped) 🟧, RNAV (GPS)/RNP — verify exact category/minima on current AIRAC |
| RFF category | 🟧 Not published in reachable sources |
| Control type | **Radar** (Langen Radar Approach / Stuttgart Director) |
| Elevation class | **1,276 ft — not hot-and-high**, but the field sits atop the elevated **Filder plateau**, well above the Stuttgart city basin — a terrain-geometry item, not a density-altitude one; see §3.1/§3.5 |
| Special-airport status | **Single runway, no crosswind alternative on-field; Level 3 fully slot-coordinated; night-operation restrictions in force** (long-standing local policy — see §3.5/§12) 🟥 |
| Customs / PoE | Yes — international airport; exact counter hours not confirmed 🟧 |
| K Global category | **S** `[VAMSYS mirror 2026-07-25]` 🟧 confirm meaning/threshold against the current AIP |
| K Global base | **No** `[VAMSYS mirror 2026-07-25]` |
| Company preferred alternates | **EDDF, EDDM, LSZH** `[VAMSYS mirror 2026-07-25]` |
| Taxi-in / taxi-out (VAMSYS) | **10 min / 12 min** `[VAMSYS mirror 2026-07-25]` |

---

## 2. Validation summary

| Domain | Flag | Note |
|---|---|---|
| Terrain / CFIT | 🟧 | Field sits atop the Filder plateau (~1,276 ft), with the Stuttgart city basin and Neckar valley well below and the Swabian Jura upland further south — not a cruise/enroute CFIT driver, but a genuine local terrain-geometry item for circling/visual segments. See §3.1. |
| Runway length vs fleet perf | 🟩 | 3,345 m (10,974 ft) is ample for our narrowbody types; **no alternate runway exists on the field** if 07/25 is degraded — a genuine single-point-of-failure item. |
| Approach availability / minima | 🟧 | ILS reported CAT III-capable; exact current category/minima not independently confirmed. |
| Airspace / traffic / control | 🟩 | Langen FIR (EDGG), fully radar-controlled. |
| Weather / seasonal hazard | 🟧 | Central European climate; winter fog/icing and the plateau's exposure to wind are the standing seasonal items — see §14. |
| Curfew / slots / hours | 🟥 | **Night-operation restrictions in force** (confirmed by 2008 political decision to retain them; exact hours not independently confirmed) and the field is **Level 3 fully slot-coordinated**. |
| RFF category vs our types | 🟧 | Not published — confirm before relying on it. |
| Fuel availability | 🟧 | AVGAS confirmed, Jet A1 confirmed (OpenAIP); hours not confirmed. |
| Customs / handling / security | 🟧 | International PoE; exact hours not confirmed. Customs listed "No" in one tier-4 source (OpenAIP) — conflicts with the airport's international/scheduled-service status; treat as unresolved, see §18. |

---

## 3. Threat & Error Management (TEM)

### 3.1 CFIT / Terrain 🟧
EDDS sits at 1,276 ft MSL on the **Filder plateau**, a raised tableland south of the city of Stuttgart — the city centre itself lies roughly 700–800 ft lower in the Neckar valley below. This is not a density-altitude/hot-and-high performance driver, but it is a genuine **terrain-geometry** item: the plateau edges drop away relatively steeply toward the surrounding valleys, and the **Swabian Jura (Schwäbische Alb)** upland rises further to the south, part of the same terrain belt referenced in the [Langen (EDGG) FIR brief](../../../../airspace/fir/europe/langen-edgg.md) §8. This is not a cruise-level concern, but it is relevant to any visual segment, circling manoeuvre, or missed approach flown close to the field — read the MSA/obstacle rings on the current chart rather than assuming the flat-terrain picture that a 1,276 ft elevation might otherwise suggest.

### 3.2 Airborne conflict / traffic 🟩
EDDS sits inside **Langen FIR (EDGG)**, fully radar-controlled, with a dedicated **Stuttgart Director** function feeding the single-runway approach sequence — see the [Langen (EDGG) FIR brief](../../../../airspace/fir/europe/langen-edgg.md). Traffic density is moderate-to-high for a single-runway field: EDDS is a major regional hub with substantial scheduled and leisure/charter traffic, and being **Level 3 fully slot-coordinated** reflects genuine capacity pressure against the single-runway constraint.

### 3.3 Runway excursion 🟧
**Single runway 07/25** (3,345 × 45 m / 10,974 × 148 ft, concrete) with a **300 m (984 ft) displaced threshold on RWY 07**. No crosswind runway exists — a strong crosswind or a runway-surface event (contamination, disabled aircraft) closes the field to fixed-wing traffic entirely, a materially different risk profile from a multi-runway field. Exact TORA/TODA/ASDA/LDA per direction are **not confirmed** from reachable sources — do not assume the physical length minus the known RWY 07 displacement equals the published LDA without checking the current AIP.

### 3.4 Weather threat 🟧
Central European climate at a modestly elevated plateau site: winter (Nov–Mar) brings the standing **fog/low-stratus and icing** risk common to the region, potentially compounded by the plateau's greater wind exposure relative to the sheltered city basin below. Summer convective activity is handled tactically under radar per the general Central European pattern. See §14.

### 3.5 Operational considerations 🟥
Two structural facts define EDDS operationally: **(1) it is single-runway with no on-field alternative**, and **(2) it carries long-standing night-operation restrictions** — in 2008 the state government explicitly confirmed these restrictions would remain in place alongside a decision not to build a second runway for at least 8–12 years, and they remain a live local political and noise-abatement issue. Combined with its **Level 3 fully slot-coordinated** status, EDDS should be briefed and planned as a capacity- and schedule-sensitive field: a single-runway disruption (weather, disabled aircraft, snow clearance) has no on-field workaround, and off-hours/curfew planning is materially different from EDDK's 24h profile (contrast §3.5 in the EDDK brief). Exact night-restriction hours are not independently confirmed — see §12/§18.

---

## 4. Cautions & Warnings

- **Single runway, no crosswind alternative** — a runway-surface event or strong crosswind closes the field entirely; plan alternates accordingly.
- **Filder-plateau terrain geometry** — the field sits well above the surrounding Stuttgart/Neckar valley; do not assume flat-terrain surroundings from the modest 1,276 ft elevation figure alone.
- **RWY 07 threshold displaced 300 m (984 ft)** — confirm the correct LDA for RWY 07 arrivals, not the full physical length.
- **Night-operation restrictions in force** (exact hours unconfirmed) and **Level 3 fully slot-coordinated** — treat off-hours and irregular-ops planning as schedule-critical.
- **Elevation discrepancy between tier-4 sources** (1,276 ft OurAirports vs 1,227 ft OpenAIP) — not resolved; use 1,276 ft (matches this file's Navigraph-seeded baseline) pending AIP confirmation.

---

## 5. Aerodrome category, restrictions & crew qualification

- **Special-airport / category:** Not identified as a special/restricted-category airport in reachable sources beyond its slot-coordination status. **VAMSYS aerodrome category: S.** 🟧 confirm meaning/threshold against the current AIP.
- **Crew-qualification gate:** If the reported CAT III ILS capability is confirmed on the current AIRAC, standard CAT II/III currency requirements would apply for low-visibility approaches — not independently confirmed this build.
- **Operating restrictions / bans:** **Night-operation restrictions** (confirmed by the 2008 political decision to retain them; exact hours/quota not independently confirmed) — see §12. No RNP AR/circling restriction identified — verify current AIRAC.
- **Overflight / entry / permits:** Standard EU/Schengen operation — no permits required.
- **Operations notes:** ANSP — DFS Deutsche Flugsicherung (Langen ACC/Radar, Stuttgart Director). Airport operator — Flughafen Stuttgart GmbH (65% State of Baden-Württemberg, 35% City of Stuttgart). **Level 3 fully coordinated** — confirm slot allocation via the airport coordinator before planning irregular/charter movements.

---

## 6. General / hours / services

| Item | Value | Flag |
|---|---|---|
| ATS hours | 🟧 Not independently confirmed as H24 — verify | 🟧 |
| AD operating hours | 🟧 Not confirmed; **night-operation restrictions apply** (§3.5/§12) | 🟥 |
| Night / curfew restrictions | **Confirmed in force** (2008 political decision to retain restrictions); exact hours/quota not independently confirmed | 🟥 |
| RFF category | 🟧 Not published in reachable sources | 🟧 |
| Fuel | AVGAS and Jet A1 confirmed available (OpenAIP); hours not confirmed | 🟧 |
| PCN | 🟧 Not published in reachable sources | 🟧 |
| Customs | 🟧 International PoE expected given scheduled international service; one tier-4 source (OpenAIP) lists "Customs: No" — conflicting/unresolved, see §18 | 🟧 |
| Handling / FBO | Cargo handling, de-icing, maintenance and security services confirmed available (OpenAIP) | 🟩 |

---

## 7. Runways & declared distances

| RWY | Dimensions | Surface | TORA | TODA | ASDA | LDA | Notes |
|---|---|---|---|---|---|---|---|
| 07 | 3,345 × 45 m (10,974 × 148 ft) | Concrete | 🟧 not confirmed | 🟧 | 🟧 | 🟧 (physical length minus 984 ft displacement, not independently confirmed as the published LDA) | **300 m (984 ft) displaced threshold** |
| 25 | 3,345 × 45 m (10,974 × 148 ft) | Concrete | 🟧 not confirmed | 🟧 | 🟧 | 🟧 | No displacement reported this end |
| H-North / H-South | 30 × 30 m each | Asphalt | — | — | — | — | Helipads; Stuttgart Army Airfield / Baden-Württemberg Police helicopter wing, not relevant to fixed-wing planning |

*Physical runway dimensions and the RWY 07 displaced threshold from OurAirports (retrieved 2026-07-25). TORA/TODA/ASDA/LDA and PCN are **not confirmed** — the DFS eAIP (aip.dfs.de) rendered no retrievable text on direct fetch (JS-rendered frameset); treat all declared-distance figures as physical length only pending AIP/current-AIRAC confirmation.*

---

## 8. Communications

| Service | Callsign | Frequency | Hours | Notes |
|---|---|---|---|---|
| ATIS | Stuttgart ATIS | 126.13 | 🟧 H24 assumed | |
| Delivery | Stuttgart Delivery | 121.915 | 🟧 H24 assumed | |
| Ground | Stuttgart Ground / Rollkontrolle | 118.605 | 🟧 H24 assumed | |
| Tower | Stuttgart Tower / Turm | 118.805 and 119.065 (two listed) | 🟧 H24 assumed | 🟧 OpenAIP cross-check lists primary Tower as 119.055 — a small digit variance against OurAirports' 119.065; not resolved, confirm on current AIP |
| Approach / Director | Stuttgart Director / Langen Radar Approach | 119.85 (Director) / 119.2 (Approach) | 🟧 H24 assumed | Dedicated Director function reflects the single-runway sequencing workload |
| Centre / FIR | Langen Radar (Langen ACC, EDGG) | 119.2 | H24 | Also a "Langen Information" entry at 128.95, labelled AFIS — likely a mislabel/FIS relay rather than the primary approach service at this radar/TWR-controlled field |

*De-icing coordination frequency 121.63. Apron/ramp 121.7. Frankfurt 2 VOLMET 135.78. Source: OurAirports frequency table (retrieved 2026-07-25), cross-checked against OpenAIP (retrieved 2026-07-25) — tier-4 only; not independently cross-checked against the DFS eAIP. Confirm all frequencies on the current AIRAC before use.* 🟧

---

## 9. Navaids

| Aid | Ident | Freq | Hours | Notes |
|---|---|---|---|---|
| DME | SGD (Stuttgart) | 115.45 | H24 assumed | On field (0.1 nm SE of ARP) |
| NDB | SY (Stuttgart) | 384 kHz | H24 assumed | 4.4 nm WSW |
| VORTAC | TGO (Tango) | 112.50 | H24 assumed | 4.5 nm SSE |
| NDB | SG (Stuttgart) | 306 kHz | H24 assumed | 4.7 nm ENE |
| ILS | 🟧 not confirmed | 🟧 | — | Reported CAT III capability in general/secondary reporting; exact ident/frequency/category **not independently confirmed** — verify on current AIRAC chart |

*On-field navaid idents/frequencies from OurAirports navaid-proximity data (retrieved 2026-07-25) — tier-4, not cross-checked against the DFS eAIP. ILS component data could not be confirmed from any reachable free source.*

---

## 10. Arrival

- **Transition altitude / level:** 🟧 Not confirmed for EDDS specifically — confirm on current AIP.
- **Speed:** Standard ICAO/EU 250 KIAS below FL100 — confirm no local override.
- **Preferential runway logic:** Single runway — direction of use is wind-driven; no preferential-runway *choice* exists as at a multi-runway field. Confirm any noise-preferential departure/arrival routing on current AIP.
- **Approaches (names only — verify minima on current AIRAC charts):**

| RWY | Approach | Notes |
|---|---|---|
| 07 | ILS (category not independently confirmed — reported CAT III historically) 🟧, RNAV (GPS)/RNP 🟧 | 300 m displaced threshold |
| 25 | ILS 🟧, RNAV (GPS)/RNP 🟧 | No displacement reported |

- **STARs (names only):** 🟧 Not confirmed from reachable sources — pull from current AIRAC.
- **LVP:** 🟧 If the reported CAT III capability is confirmed, standard LVP trigger conditions would apply — not independently confirmed this build.
- **Missed approach watch-items:** The **Filder-plateau terrain geometry** (§3.1) is the standing missed-approach awareness item — the ground drops away toward the Neckar valley/Stuttgart basin more than the field elevation alone suggests; fly the published missed approach rather than an early visual manoeuvre.

---

## 11. Departure

- **SIDs (names only — fly the charted version):** 🟧 Not confirmed from reachable sources — pull from current AIRAC.
- **RNP / climb-gradient requirements:** No unusual gradient expected — not a hot-and-high field — but confirm standard RNAV SID equipage requirements on current chart, and note the plateau-edge terrain drop-off is not a climb-gradient driver (terrain falls away from the field, it does not rise toward it).
- **Take-off minima:** 🟧 Not confirmed.
- **Start-up / push-back:** 🟧 Not confirmed — verify locally.
- **ATC slot / CTOT & clearance:** **Level 3 fully coordinated airport** — confirm slot allocation with the airport coordinator before planning any movement outside a pre-agreed schedule; this is a harder constraint than at a non-coordinated field.
- **De-icing:** **Confirmed available** (OpenAIP; dedicated MISC/de-icing frequency 121.63 published) — expect routine use in Central European winter conditions given the plateau's wind/weather exposure.

---

## 12. Noise & Environmental

- **Noise abatement (NAP):** 🟧 Not confirmed in procedural detail from reachable sources — expect a published NAP given the field's long-running local noise-abatement/political profile.
- **Night noise / dB limits:** 🟥 **Night-operation restrictions confirmed in force** — reconfirmed as recently as 2008 when the state government explicitly linked "no second runway for 8–12 years" to "restrictions for night operations stay in place." Exact hours/quota/dB limits not independently confirmed — verify current AIP before planning a late/early movement.
- **Engine run-up restrictions:** 🟧 Not confirmed.
- **Reverse thrust / idle-reverse policy:** 🟧 Not confirmed.

---

## 13. Ground operations

- **Stands for our types:** 🟧 Not confirmed in detail — the field handles scheduled narrowbody passenger traffic (our EDDF–EDDS A319 spoke) at a busy regional hub; no specific stand/apron data reachable this build.
- **Push-back:** 🟧 Not confirmed.
- **Standard taxi routes:** 🟧 Not confirmed — confirm with Ground on the day; single-runway layout simplifies routing relative to multi-runway fields.
- **Hot spots / tight taxiways:** 🟧 None identified from reachable sources — verify current AIP/NOTAM hot-spot chart.
- **Follow-me:** 🟧 Not confirmed.

---

## 14. Weather & seasonal (durable)

- **Climate / prevailing wind:** Central European climate at an elevated plateau site (1,276 ft) — somewhat more wind-exposed than the sheltered Stuttgart city basin below.
- **Seasonal hazards:** Winter (Nov–Mar) **fog/low stratus and icing**, consistent with the general Central European pattern described in the [Langen (EDGG) FIR brief](../../../../airspace/fir/europe/langen-edgg.md) §11; summer convective activity handled tactically under radar.
- **Local effects:** Plateau-edge terrain geometry (§3.1) can locally affect wind behaviour near the field boundary; not independently quantified from reachable sources.

> **Live weather — pull at planning (T-2h):** METAR, TAF, TREND, SIGMET/AIRMET. Not stored here.

---

## 15. NOTAMs

> **Pull at planning (T-2h).** Perishable — not stored here. Check specifically: single-runway closure/contamination status (no on-field alternative — see §3.3), current night-restriction/slot regime, ILS outages, de-icing pad status, lighting, obstacle/crane, RFF downgrade, GPS/RAIM. Source: official AIS / OFP NOTAM block.

---

## 16. Fuel & alternate planning notes

- **Typical role for us:** Destination/origin — EDDF–EDDS City-unit narrowbody spoke (currently filed at *proposed* status in the live route register).
- **Nearest suitable alternates:** **EDDF** Frankfurt-Main, **EDDM** Munich, **LSZH** Zürich — all per the live VAMSYS record `[VAMSYS mirror 2026-07-25]`; cross-check current suitability given EDDS's own single-runway/slot constraints do not apply to these fields.
- **Fuel-uplift notes:** AVGAS and Jet A1 confirmed available; exact hours/provider not confirmed — confirm on the OFP.
- **Range/perf flags for our fleet:** No performance-limiting factor identified for our narrowbody types on the single runway; the genuine planning risk is **single-runway unavailability** (weather, contamination, disabled aircraft) with no on-field workaround — hold fuel/alternate selection should account for this more than at a multi-runway field. See [`OM E — Short and Limited Runway Operations`](../../../../../flight-ops/short-and-limited-runway-operations.md) and [`OM E — Cold Weather Operations`](../../../../../flight-ops/cold-weather-operations.md) for winter-fog/icing planning.

---

## 17. Fleet-specific notes (optional)

- **A319 (OM B):** Currently the type filed for the EDDF–EDDS City-unit spoke (proposed status). No field-specific performance limitation identified for the A319 on the 3,345 m runway. See [`OM B — A319 Dispatch`](../../../../../fleet/a319/dispatch.md).
- **Single-runway sensitivity:** Any type/route planned into EDDS should carry a genuine alternate given the single-runway, no-crosswind-backup geometry — this is a field-level constraint rather than a fleet-specific one, but it should factor into fuel/alternate planning for every type serving EDDS.

---

## 18. Open items (🟧 — confirm against AIP / current AIRAC)

- **DFS eAIP unreachable** — direct fetch of aip.dfs.de returned no retrievable text (JS-rendered frameset); this entire brief rests on tier-4 corroboration (OurAirports, OpenAIP, Wikipedia, SkyVector coordinate mirror) rather than the primary AIP.
- **Field elevation discrepancy** — OurAirports lists 1,276 ft/389 m, OpenAIP lists 1,227 ft/374 m (~49 ft gap); this file retains 1,276 ft to match the pre-existing Navigraph-seeded baseline, but the discrepancy is unresolved — confirm against the AIP.
- **Declared distances (TORA/TODA/ASDA/LDA), PCN** — not confirmed beyond physical length and the known RWY 07 displacement.
- **RFF category, exact night-restriction hours/quota, preferential runway/noise-abatement procedure, SIDs/STARs, take-off minima, transition altitude** — none confirmed from reachable tier-4 sources.
- **ILS category/ident/frequency** — reported CAT III-capable in general/secondary reporting but not independently confirmed.
- **Tower frequency micro-discrepancy** — OurAirports (119.065) vs OpenAIP (119.055) for the secondary Tower frequency; not resolved.
- **Customs status conflict** — OpenAIP lists "Customs: No" despite EDDS's scheduled international service; likely an OpenAIP data-entry gap rather than a genuine absence of customs facilities, but not resolved from reachable sources.
- **VAMSYS operational fields:** preferred alternates (EDDF, EDDM, LSZH) and taxi-in/out times (10/12 min) are carried from the live VAMSYS record per this build's brief; not independently re-verified here.

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim material informs content but is not listed here.*

- **DFS eAIP** (Deutsche Flugsicherung GmbH) — attempted direct fetch, https://aip.dfs.de/BasicIFR/ (retrieved 2026-07-25) — page returned no retrievable text (JS-rendered frameset); primary source of record but not reachable this build.
- OurAirports — Stuttgart Airport (STR, EDDS) — https://ourairports.com/airports/EDDS/ , /runways.html , /frequencies.html , /closest-navaids.html (all retrieved 2026-07-25). *Tier-4 — runway physical dimensions/displaced threshold, ARP/elevation, frequency table, on-field navaid idents.*
- OpenAIP — Airport Stuttgart — https://www.openaip.net/data/airports/62614ab25e9ded5710445959 (retrieved 2026-07-25). *Tier-4 — elevation cross-check, mag variation, fuel/handling facilities, frequency cross-check.*
- Wikipedia — Stuttgart Airport — https://en.wikipedia.org/wiki/Stuttgart_Airport (retrieved 2026-07-25). *Runway extension history; 2008 second-runway/night-restriction political decision; single-runway status; Stuttgart Army Airfield/police helicopter co-location.*
- SkyVector — coordinate/chart-index mirror (cross-check only, page fetch timed out this build; coordinates corroborated via OurAirports) — https://skyvector.com/airport/EDDS.

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-14 | Baseline stub — position/elevation seeded from Navigraph navdata. |
| v0.2 | 2026-07-25 | Built from DFS eAIP; K Global fields from live VAMSYS. Full 18-section briefing built from tier-4 corroboration (DFS eAIP unreachable — JS-rendered frameset). Anchored the single-runway/no-alternative geometry, the Filder-plateau terrain-awareness item, the confirmed night-operation restrictions, and the Level 3 slot-coordinated status as the field's defining operational facts. Flagged an unresolved elevation discrepancy between tier-4 sources and a Customs-status conflict. Declared distances, RFF category, ILS category/ident, and most procedural detail remain open 🟧 pending primary AIP access. **Folded to 4-page pack 2026-07-25** — Dispatch, Departure and Arrival pages added; relative links adjusted for the new one-level-deeper folder location; Briefing text otherwise unchanged. |
