# TIST — Cyril E King · Airport Briefing

**TIST / STT** · Charlotte Amalie, U.S. Virgin Islands · North America
**Version** v0.1 · **Updated** 2026-07-26 · **Status** Draft

> **Read-me:** Planning aid for the sim, not a chart. Static data is drawn from the FAA Chart Supplement (Virgin Islands) data set, current FAA d-TPP procedure index and standard public aeronautical data; approaches/SIDs are listed **by name only** — fly the charted current-AIRAC version. Live weather/NOTAMs are pulled at planning (§14/§15). Open 🟧 items are listed in §18. Flag legend 🟥 restriction/hazard · 🟧 caution/unverified · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| ARP (lat/long) | 18°20′14.3″N / 064°58′24.0″W (18.337306, -64.973333) `[FAA data, eff. 14 May 2026, mirrored via AirNav]` |
| Field elevation | **23.6 ft / 7.2 m** surveyed (FAA); commonly published as **24 ft** in secondary sources — treated as consistent, not a conflict |
| Mag variation | 🟧 **13° W** (13.5° W per a 2015 airport-diagram placard; annual rate of change given as ~0.0° — i.e. effectively static — but not independently re-confirmed against current AIRAC) |
| Time zone | **UTC-4 (Atlantic Standard Time), year-round — does not observe DST** |
| Runway(s) | **Single runway 10/28**, 7,000 × 150 ft (2,134 × 46 m), asphalt/grooved, fair condition — **no crosswind/reciprocal runway option** 🟥 |
| Preferential runway | **RWY 10** carries the full instrument/lighting suite (ILS/LOC, RNAV (GPS), PAPI, REIL) and the full 6,892 ft LDA; **RWY 28** is the shorter-LDA, non-precision reciprocal (see §7) — consistent with prevailing easterly trade winds favouring an into-wind landing/departure on 10 🟧 (wind-rose statistic not independently sourced this pass) |
| Longest LDA | **6,892 ft (2,101 m) — RWY 10.** RWY 28 LDA is materially shorter at **3,870 ft (1,180 m)** due to a 2,300 ft displaced threshold — see §7 🟥 |
| Approaches | **ILS or LOC RWY 10; RNAV (GPS) RWY 10; VOR-A (circling)** — special alternate minimums apply per the FAA procedure index; **no straight-in instrument approach published for RWY 28** 🟥 |
| RFF category | **FAA ARFF Index C** — equivalence to an ICAO CAT figure not independently sourced 🟧; **ARFF services unavailable 2300–0600 daily** 🟥 |
| Control type | **Radar** — St. Thomas Tower on the field; Class C approach/departure service provided by **San Juan CERAP (TJZS)** on 128.65/279.6 (Pico del Este / El Yunque RCAG); San Juan Center is the controlling ARTCC |
| Elevation class | Sea-level (23.6 ft) — **not** hot-and-high; the field's defining performance driver is the **short single runway squeezed between high terrain and open water**, not density altitude, though routine tropical temperatures (commonly 28–32°C) are a secondary factor on takeoff performance 🟧 |
| Special-airport status | 🟥 **Short/limited-runway field** — single runway, terrain close-in on one side, water on the others, asymmetric declared distances; K Global network **Category S** (see below) |
| Customs / PoE | **Yes** — U.S. Customs & Border Protection Port of Entry. Government CBP desk hours **0700–1800 AST** 🟧; a private FBO (see Dispatch §8) separately advertises 24/7 clearance capability for general-aviation traffic — applicability to a scheduled K Global operation not confirmed |
| K Global category | **S** `[VAMSYS mirror 2026-07-26]` 🟧 |
| K Global base | **No** `[VAMSYS mirror 2026-07-26]` |
| Company preferred alternates | **TJSJ (San Juan), TNCM (Sint Maarten)** `[VAMSYS mirror 2026-07-26]` |
| Taxi-in / taxi-out (VAMSYS) | **6 min / 8 min** `[VAMSYS mirror 2026-07-26]` |

---

## 2. Validation summary

| Domain | Flag | Note |
|---|---|---|
| Terrain / CFIT | 🟥 | High terrain published close north of the RWY 10/28 extended centreline; a lit hill 4 NM SE is a recorded visual-approach confusion hazard (§3.1). |
| Runway length vs fleet perf | 🟥 | Single 7,000 ft runway; RWY 28's usable landing distance is cut to 3,870 ft by a 2,300 ft displaced threshold. Field length is workable for narrowbody types on RWY 10; not assessed for any K Global widebody type — see §17/OM B. |
| Approach availability / minima | 🟥 | Only RWY 10 has a straight-in instrument approach (ILS/LOC, RNAV (GPS)); RWY 28 is circling-only (VOR-A) — a wind shift onto 28 in IMC is a genuine operational constraint. |
| Airspace / traffic / control | 🟧 | Combined en-route/approach facility (San Juan CERAP) working a mixed inter-island GA/commuter/airline traffic mix; procedural detail not independently AIP-verified this pass. |
| Weather / seasonal hazard | 🟥 | Atlantic hurricane season (Jun–Nov, climatological peak Aug–Oct); trade-wind squalls and convective showers; single runway means no crosswind escape option. |
| Curfew / slots / hours | 🟥 | No formal curfew, but ATCT hours are limited (§6), ARFF is unavailable 2300–0600, and a dated construction NOTAM currently imposes **nightly runway closures 2200–0500 AST (01 Dec 2025–31 Dec 2026)** — re-verify status against live NOTAM. |
| RFF category vs our types | 🟧 | FAA ARFF Index C; adequacy against K Global fleet requirement not independently cross-walked to an ICAO category. |
| Fuel availability | 🟩 | Jet A and 100LL available via multiple FBOs; commercial/scheduled-carrier uplift arrangement not separately confirmed. |
| Customs / handling / security | 🟧 | CBP Port of Entry confirmed; government desk hours 0700–1800 AST; a PPR/24-hour-notice restriction applies to unscheduled air-carrier operations with more than 30 passenger seats (§5). |

---

## 3. Threat & Error Management (TEM)

### 3.1 CFIT / Terrain 🟥
TIST sits in a genuinely constrained site: FAA source material records **high terrain close north of the RWY 10/28 extended centreline**, and a **hill 4 NM southeast of the field carries lights that can be mistaken for the runway 10/28 lighting pattern when flying a visual approach from the south** — a hazard explicit enough that it is carried as a standing remark in FAA airport data. The airport's own history compounds the picture: the current 7,000 ft runway was reached in 1992 by cutting into high ground on the east end and reclaiming land out into the ocean on the west end — the field is literally built into a hill on one side and into the sea on the other, which is why there is no room for a parallel or crosswind runway and why terrain and open water bound the circuit on almost every side. Exact peak elevations/bearings and the current MSA ring are not reproduced here — verify against the current AIRAC chart and the FAA Chart Supplement remarks in full before flight.

### 3.2 Airborne conflict / traffic 🟧
Approach/departure control is provided by **San Juan CERAP (TJZS)**, a combined en-route/approach facility covering Puerto Rico, the U.S. Virgin Islands and the British Virgin Islands, working a dense mix of inter-island turboprop/commuter, general-aviation and airline traffic converging from St. Croix, St. John, the BVI (e.g. Beef Island/Tortola) and San Juan itself. A published network-simulation cross-check of this facility's procedures (not authoritative — see §Sources) describes specific arrival crossing restrictions for TIST traffic (e.g. crossing a fix north of the field at a published altitude before final descent) consistent with a facility actively de-conflicting converging island traffic rather than a quiet single-runway field. Treat the local circuit as busier and more procedurally structured than the airport's small size would suggest.

### 3.3 Runway excursion 🟥
The single runway is genuinely distance-constrained in one direction: **RWY 10** publishes a full **6,892 ft LDA**, but **RWY 28** carries a **2,300 ft displaced threshold**, cutting its usable landing distance to **3,870 ft** — little more than half of RWY 10's figure. There is no overrun margin to speak of beyond the declared distances on either end (terrain to landward, water to seaward after the 1992 reclamation), and tropical convective showers are a routine wet-runway/braking-action factor. Do not plan a RWY 28 landing on the assumption that the full 7,000 ft/6,892 ft figures apply — they do not.

### 3.4 Weather threat 🟥
The field sits inside the **Atlantic hurricane season (climatologically 1 June–30 November, peak activity August–October)** — tropical storm/hurricane threat is a standing seasonal planning factor for any Caribbean field, TIST included. Outside of named storms, expect routine easterly **trade-wind flow**, associated squalls and afternoon convective showers. Because there is only one runway, any wind component that swings outside the RWY 10/28 axis' comfortable crosswind limits removes the option of a reciprocal-runway escape that a two-runway field would offer. FAA source data separately flags a **night visual-illusion hazard on the RWY 10 approach** — false vertical-guidance cues from visual cues alone, with an explicit recommendation to fly the ILS glide path and cross-check the altimeter rather than eyeball the picture. See §14.

### 3.5 Operational considerations 🟥
Plan around four durable, quantified constraints together: (1) **single runway, no crosswind alternative**; (2) **RWY 28's reduced 3,870 ft LDA and circling-only approach** — a genuine go/no-go factor if the wind or weather forces a 28 configuration; (3) **ARFF coverage gap 2300–0600 daily**, relevant to any late-night or diversion planning; and (4) a currently dated **construction-driven nightly runway closure (2200–0500 AST, 01 Dec 2025–31 Dec 2026)** that removes the field entirely outside those hours for the duration of the project — re-verify current status against live NOTAM before scheduling near the edges of the operating day. A 24-hour PPR requirement applies to unscheduled air-carrier operations with more than 30 passenger seats (§5) — confirm applicability before planning an off-schedule or diversion movement here.

---

## 4. Cautions & Warnings

- **No crosswind/reciprocal runway** — RWY 10/28 is the only runway; a wind shift outside comfortable limits has no on-field alternative.
- **RWY 28 lands short** — 2,300 ft displaced threshold cuts the usable LDA to 3,870 ft, and RWY 28 has **no straight-in instrument approach** (circling VOR-A only). Do not assume RWY 28 behaves like RWY 10.
- **Lit hill 4 NM SE** can be mistaken for the runway lighting pattern on a visual approach from the south — a standing FAA-recorded caution.
- **High terrain close north of the extended centreline** — do not descend below the published MSA/step-down early; verify the current chart's terrain depiction before the approach.
- **Night visual illusion on the RWY 10 approach** — fly the ILS glide path and cross-check the altimeter; do not fly the visual picture alone at night.
- **Sailboat-mast obstruction**, ~50 ft AGL, ~100 ft west of the RWY 10 approach threshold — a charted, close-in obstacle.
- **ARFF unavailable 2300–0600 daily.**
- **Currently active nightly runway closure 2200–0500 AST (01 Dec 2025–31 Dec 2026)** for a pavement-resurfacing project — this is a dated, time-limited restriction; confirm current status against live NOTAM rather than assuming it is still in force.
- **Water Island, ~2 NM SE, is a designated noise-sensitive area** — avoid overflight where the approach/departure profile allows a choice.
- **Historical/site note:** the runway reached its present 7,000 ft length in 1992 by cutting into high ground at the east end and reclaiming land into the sea at the west end — a direct explanation for why terrain and open water bound the field on almost every side and why there is no room to add a second runway.

---

## 5. Aerodrome category, restrictions & crew qualification

- **Special-airport / category:** Not independently found to carry an operator-assigned restricted-crew "special airport" designation in reachable sources; the standing crew-briefing items are the **single short runway with terrain/water close on both ends**, the **RWY 28 reduced-distance/circling-only case**, and the **night visual-illusion caution on RWY 10**. K Global network **Category S** applies `[VAMSYS mirror 2026-07-26]`. 🟥
- **Crew-qualification gate:** Short/limited-runway qualification and briefing are appropriate given the single 7,000 ft runway with asymmetric declared distances and no crosswind alternative — see [`OM E — Short and Limited Runway Operations`](../../../../../flight-ops/short-and-limited-runway-operations.md). 🟧
- **Operating restrictions / bans:** The field is **closed to unscheduled air-carrier operations with more than 30 passenger seats except by 24-hour prior permission** (contact the airport manager) — confirm applicability before planning any off-schedule, charter or diversion movement with a larger-cabin type. No RNP AR ban or circling restriction beyond the RWY 28 circling-only case found in reachable sources. 🟥
- **Overflight / entry / permits:** U.S. domestic territory — standard U.S. Customs & Border Protection Port-of-Entry process for international arrivals; no separate state overflight permit required. 🟩
- **Operations notes:** ANSP/tower — **FAA, St. Thomas ATCT**; approach/departure and en-route — **San Juan CERAP (TJZS)** and **San Juan Center (ARTCC)**; airport owner/operator — **Virgin Islands Port Authority (VIPA)**.

---

## 6. General / hours / services

| Item | Value | Flag |
|---|---|---|
| ATS hours | Tower/Ground **0700–2230** (closes 1 hour earlier during Daylight Saving Time, per the field's non-DST-observing local clock); when the tower is closed, contact San Juan CERAP directly | 🟧 |
| AD operating hours | Terminal access 0600–2300 local; runway itself is nominally available H24 per the airport operator, **subject to the current nightly construction closure below** | 🟧 |
| Night / curfew restrictions | No formal noise curfew found; **ARFF unavailable 2300–0600 daily**; **nightly runway closures 2200–0500 AST currently in effect 01 Dec 2025–31 Dec 2026** for a pavement-resurfacing project — re-verify live status | 🟥 |
| RFF category | FAA ARFF Index C | 🟧 |
| Fuel | Jet A and 100LL, multiple FBOs; standard hours ~0700–1900, PPR for after-hours uplift (§16) | 🟩 |
| PCN | Published as a PCR-style figure (790/F/A/X/T) with separate wheel-loading figures (single 100,000 lb / double 155,000 lb / double-tandem 195,000 lb) — format not cross-walked to standard ICAO PCN notation this pass | 🟧 |
| Customs | CBP Port of Entry, government desk hours 0700–1800 AST | 🟧 |
| Handling / FBO | Multiple FBOs on the field (see Dispatch §5) | 🟩 |

---

## 7. Runways & declared distances

| RWY | Dimensions | Surface / PCN | TORA | TODA | ASDA | LDA | Notes |
|---|---|---|---|---|---|---|---|
| 10 | 7,000 × 150 ft (2,134 × 46 m) | Asphalt/grooved, fair condition; PCR 790/F/A/X/T 🟧 | 7,000 ft | 7,000 ft | 6,892 ft | **6,892 ft** | No displaced threshold; precision-style markings, good condition; 4-light PAPI (3.00°) + REIL, CTAF-activated |
| 28 | 7,000 × 150 ft (2,134 × 46 m) | Asphalt/grooved, fair condition; PCR 790/F/A/X/T 🟧 | 7,000 ft | 7,000 ft | 6,170 ft | **3,870 ft** | **2,300 ft displaced threshold** — LDA cut to 3,870 ft; basic markings only; **no PAPI/REIL and no straight-in instrument approach published** |

*Runway heading 100°M/087°T (RWY 10) and 280°M/267°T (RWY 28). Threshold elevations: RWY 10 ~23.5 ft, RWY 28 ~11.7 ft. Obstructions: a ~50 ft AGL sailboat mast ~100 ft west of the RWY 10 approach end; a 28 ft pole ~300 ft from the runway, ~400 ft left of centreline (3:1 slope to clear) near the RWY 28 approach. Source: FAA airport data effective 14 May 2026 (mirrored via AirNav) and the current FAA airport diagram (AL-5005). All distances in feet as published.*

---

## 8. Communications

| Service | Callsign | Frequency | Hours | Notes |
|---|---|---|---|---|
| ATIS | St. Thomas ATIS | 124.0 | Per tower hours (assumed) 🟧 | |
| CTAF / UNICOM | St. Thomas CTAF / UNICOM | 118.8 / 122.95 | H24 (CTAF outside tower hours) | HIRL/PAPI/REIL pilot-activated on CTAF after 2300 |
| Ground | St. Thomas Ground | 121.9 | 0700–2230 (closes 1 hr earlier in DST) | |
| Tower | St. Thomas Tower | 118.1; north-of-island 118.8/257.6 | 0700–2230 (closes 1 hr earlier in DST) | Contact San Juan CERAP directly when tower closed |
| Approach / Departure | San Juan CERAP (Class C service) | 128.65 / 279.6 (Pico del Este & El Yunque RCAG) | H24 | Combined en-route/approach facility |
| Centre / FIR | San Juan Center / San Juan CERAP (TJZS) | Per above | H24 | See §18 — no dedicated OM C Caribbean/San Juan CERAP airspace brief yet exists; cross-ref the North America airspace brief below with its scope caveat |
| Emergency | — | 121.5 / 243.0 | H24 | |

*Source: FAA airport data effective 14 May 2026 (mirrored via AirNav) and the current FAA airport diagram (AL-5005); San Juan CERAP sector frequencies cross-checked against a VATSIM Caribbean Division (VATCAR) network-simulation SOP (not authoritative — see §Sources).*

---

## 9. Navaids

| Aid | Ident | Freq | Hours | Notes |
|---|---|---|---|---|
| VOR/DME | STT (St. Thomas) | 108.60 | H24 (assumed) | On/near field, radial 121°/3.1 NM |
| VOR/DME | COY (St. Croix) | 108.20 | H24 (assumed) | ~39 NM SE, secondary reference |
| ILS | Serves RWY 10 | Ident/frequency not confirmed in reachable data this pass | H24 (assumed) | Named "ILS or LOC RWY 10" in the FAA procedure index — verify ident/freq on current chart 🟧 |

*No navaid serving RWY 28 directly was found — consistent with RWY 28 being circling-only. Source: FAA data (mirrored via AirNav), retrieved 2026-07-26.*

---

## 10. Arrival

- **Transition altitude / level:** U.S. national standard **TA 18,000 ft MSL**; transition level set by local altimeter setting above that — not an airport-specific figure. 🟧 (confirm no local override on current chart)
- **Speed:** Standard U.S. domestic speed restrictions apply (250 KIAS below 10,000 ft MSL, etc.) — no airport-specific override found.
- **Preferential runway logic:** RWY 10 is the primary, fully-equipped direction (ILS/LOC, RNAV, PAPI, REIL, full LDA); RWY 28 is the shorter-LDA, circling-only reciprocal used when wind or other factors dictate. 🟧 (wind-rose statistic not independently sourced)
- **Approaches (names only — verify minima on current AIRAC charts):**

| RWY | Approach | IAF | FAF/FAP alt | Notes |
|---|---|---|---|---|
| 10 | ILS or LOC RWY 10 | Not confirmed this pass 🟧 | Not confirmed this pass 🟧 | Special alternate minimums apply |
| 10 | RNAV (GPS) RWY 10 | Not confirmed this pass 🟧 | Not confirmed this pass 🟧 | |
| — | VOR-A | Not confirmed this pass 🟧 | Not confirmed this pass 🟧 | Circling only — no runway-specific straight-in |

- **STARs (names only):** None identified as published for this field in reachable sources — arrivals are radar-vectored by San Juan CERAP from published enroute fixes. 🟧
- **LVP:** No published low-visibility procedure/CAT II-III infrastructure found — this is a Category I ILS/RNAV field at best; low-visibility ops are constrained accordingly. 🟧
- **Missed approach watch-items:** Terrain-driven — high ground close north of the extended centreline is the operative missed-approach concern; verify the charted missed-approach terrain clearance rather than assuming it is generous given the field's tight site.

---

## 11. Departure

- **SIDs (names only — fly the charted version):** **PALCO SEVEN** departure published; special takeoff minimums/departure procedures apply per the FAA procedure index. 🟧
- **RNP / climb-gradient requirements:** Not confirmed in reachable sources this pass — given the close-in terrain to the north, verify any non-standard climb gradient on the current chart before departure. 🟥 (verify)
- **Take-off minima:** Special takeoff minimums are published for this field — exact figures not reproduced here; verify current chart. 🟧
- **Start-up / push-back:** Pilots must contact Ground control prior to pushback (published local remark); no dedicated cross-bleed/APU procedure found. 🟧
- **ATC slot / CTOT & clearance:** No slot/CTOT regime identified — a non-coordinated U.S. domestic field; clearance delivery is via Ground/Tower during ATCT hours or San Juan CERAP when the tower is closed.
- **De-icing:** **Not applicable** — tropical sea-level field, no cold-weather de-icing requirement.

---

## 12. Noise & Environmental

- **Noise abatement (NAP):** No published noise-abatement departure procedure found beyond the standing avoid-overflight guidance for **Water Island** (designated noise-sensitive area, ~2 NM SE of the field) — route around it where the departure/arrival profile allows a choice.
- **Night noise / dB limits:** Not confirmed in reachable sources. 🟧
- **Engine run-up restrictions:** Not confirmed in reachable sources. 🟧
- **Reverse thrust / idle-reverse policy:** Not confirmed in reachable sources; given RWY 28's reduced LDA, full reverse should be assumed necessary on that runway pending a performance calculation, not a matter of local policy preference. 🟧

---

## 13. Ground operations

- **Stands for our types:** Single terminal building (first floor ~190,000 sq ft with 11 gates); apron areas for terminal, cargo and general-aviation ramps are laid out around the single runway per the current FAA airport diagram. No widebody-specific stand data found — consistent with this being a narrowbody-scale field. 🟧
- **Push-back:** Contact Ground control prior to pushback (published local remark); mandatory-vs-self-manoeuvre policy not confirmed. 🟧
- **Standard taxi routes:** Aircraft back-taxiing for a RWY 28 departure must make their 180° turn counter-clockwise (published local remark); RWY 10 departures must maintain runway heading until reaching the departure end before turning on course/assigned heading unless otherwise authorised by the tower.
- **Hot spots / tight taxiways:** 🟥 Standing FAA caution: **"be alert to runway crossing clearances — readback of all runway holding instructions is required"** — a direct signal that runway-crossing discipline is a recognised local risk point on this single-runway field.
- **Follow-me:** Not confirmed in reachable sources. 🟧

---

## 14. Weather & seasonal (durable)

- **Climate / prevailing wind:** Tropical maritime climate; prevailing **easterly trade winds**, generally light-to-moderate outside squall activity.
- **Seasonal hazards:** **Atlantic hurricane season, climatologically 1 June–30 November, peak activity August–October** — tropical storm/hurricane threat is the field's defining seasonal hazard, as for the wider Caribbean. Routine trade-wind squalls and afternoon convective showers occur outside named-storm activity. No fog/icing relevance at this sea-level tropical field.
- **Local effects:** The single-runway, no-crosswind-alternative geometry (§3.4) means any wind excursion outside comfortable RWY 10/28 crosswind limits is a real operational constraint rather than a manageable non-issue.

> **Live weather — pull at planning (T-2h):** METAR, TAF, TREND, tropical cyclone advisories (NHC), SIGMET/AIRMET. Not stored here.

---

## 15. NOTAMs

> **Pull at planning (T-2h).** Perishable — not stored here. Check specifically: current status of the nightly construction runway closure (§6/§18), ARFF availability, ILS/RNAV navaid status, PAPI/REIL/HIRL serviceability, obstacle lighting, and any GPS/RAIM advisory relevant to the RNAV (GPS) RWY 10 approach. Source: official FAA NOTAM / OFP NOTAM block.

---

## 16. Fuel & alternate planning notes

- **Typical role for us:** Caribbean regional/leisure destination — not a base `[VAMSYS mirror 2026-07-26]`.
- **Nearest suitable alternates:** Company preferred alternates **TJSJ (San Juan)** and **TNCM (Sint Maarten)** `[VAMSYS mirror 2026-07-26]` — cross-territory fields, plan minima/suitability per leg; not linked here as they are outside this build's scope. Within the same territory, **TISX — Henry E Rohlsen** (St. Croix) is a network sibling field rather than a formal preferred alternate — see [<TISX — Henry E Rohlsen/TISX — Briefing.md>](../tisx/index.md).
- **Fuel-uplift notes:** Jet A and 100LL available through multiple on-field FBOs; standard hours approximately 0700–1900 with prior-permission uplift outside those hours. Commercial/scheduled-carrier uplift arrangement not separately confirmed. 🟧 See [`OM E — Fuel Policy`](../../../../../flight-ops/fuel-policy.md).
- **Range/perf flags for our fleet:** The single 7,000 ft runway (6,892 ft LDA on RWY 10; only 3,870 ft on RWY 28) is workable for K Global narrowbody types on RWY 10 but has not been assessed here for any widebody type — see [`OM B — Fleet Capability Matrix`](../../../../../fleet/capability-matrix.md) and [`OM E — Short and Limited Runway Operations`](../../../../../flight-ops/short-and-limited-runway-operations.md). 🟥

---

## 17. Fleet-specific notes (optional)

- Given the single 7,000 ft runway, the asymmetric RWY 28 declared distances, and FAA ARFF Index C, TIST reads as a **narrowbody-scale field** within the K Global network rather than one suited to any widebody type — confirm per-type field-length/performance margins against [`OM B — Fleet Capability Matrix`](../../../../../fleet/capability-matrix.md) before scheduling any type against this field. No widebody-specific stand, pavement-strength or performance assessment has been made in this build. 🟧

---

## 18. Open items (🟧 — confirm against AIP / current AIRAC)

- **Mag variation** — sourced to a 2015 airport-diagram placard (13.5° W); not independently re-confirmed against current AIRAC.
- **ILS ident/frequency for RWY 10** — procedure name confirmed (ILS or LOC RWY 10) but ident/frequency not obtained in reachable sources this pass.
- **SID/approach minima, IAF/FAF altitudes, climb gradients** — named only per governance; pull the current-AIRAC chart before use.
- **PCN/pavement-strength figure** — published in a PCR-style format (790/F/A/X/T) not cross-walked to standard ICAO PCN notation.
- **ARFF Index C vs K Global fleet RFF requirement** — no independent equivalence check performed.
- **Status of the nightly construction runway closure (2200–0500 AST, 01 Dec 2025–31 Dec 2026)** — dated to a specific project window; re-verify current status via live NOTAM, especially as the window's end date approaches.
- **CBP desk hours (0700–1800 AST) vs the 24hr-PPR unscheduled-carrier restriction** — interaction/applicability to a scheduled K Global operation not confirmed.
- **No dedicated OM C Caribbean/San Juan CERAP (TJZS) airspace brief exists yet.** The linked [North America airspace brief](../../../../airspace/north-america.md) covers only the Canada/western-US polar reference route (EDDF–KSFO) and **does not cover the Caribbean or San Juan CERAP** — this is a genuine coverage gap, not a mislink. 🟧
- **VATSIM cross-check performed** against the VATSIM Caribbean Division (VATCAR) San Juan CERAP SOP — network-simulation document, not regulatory; used only to corroborate the combined-facility structure and general arrival-sequencing character, not any safety-critical figure.
- **Terrain elevations/bearings and MSA sectors** — not independently quantified from a primary chart this pass; FAA remarks confirm high terrain exists close north of the runway but no peak height/bearing was sourced.

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim material informs content but is not listed here.*

- **FAA airport data (effective 14 May 2026), mirrored via AirNav.com** — https://www.airnav.com/airport/TIST (retrieved 2026-07-26). *ARP, elevation, mag variation, runway/declared distances, frequencies, navaids, ARFF index, obstructions, local remarks.*
- **FAA — Instrument procedures index for STT/TIST** (effective 14 May 2026 – 11 Jun 2026 AIRAC cycle), procedure PDFs mirrored via AirNav — https://www.airnav.com/airport/TIST (retrieved 2026-07-26). *ILS or LOC RWY 10, RNAV (GPS) RWY 10, VOR-A, PALCO SEVEN departure — names only, per governance.*
- **FAA current airport diagram (AL-5005)**, mirrored via a Caribbean FBO — https://sttfbo.com/wp-content/uploads/2020/09/stt-airport-diagram.pdf (retrieved 2026-07-26). *Field elevation, mag variation placard, frequencies, apron/terminal layout, runway-crossing caution note.*
- **FAA Aeronautical Information Publication — Virgin Islands, AD 2.0** — https://www.faa.gov/air_traffic/publications/atpubs/aip_html/part3_ad_2.0_virgin_islands.html (retrieved 2026-07-26). *Primary state AIP entry point for the territory.*
- **Virgin Islands Port Authority (VIPA) — Cyril E. King Airport (STT)** — https://www.viport.com/cekastt (retrieved 2026-07-26). *Terminal/gate count, hours of operation, runway-resurfacing project dates, historical account (runway extension to 7,000 ft in 1992).*
- **U.S. Customs and Border Protection — St. Thomas Cyril E. King Airport** — https://www.cbp.gov/travel/biometrics/biometric-location/st-thomas-cyril-e-king-airport and the TIST general-aviation airport fact sheet — https://www.cbp.gov/sites/default/files/2025-12/tist_ga_airport_fact_sheet_20251230.pdf (retrieved 2026-07-26). *CBP Port-of-Entry hours.*
- **OurAirports** — https://ourairports.com/airports/TIST/ (retrieved 2026-07-26). *Cross-check — ARP, elevation, runway list.*
- **SkyVector** — https://skyvector.com/airport/STT/Cyril-E-King-Airport (retrieved 2026-07-26). *Cross-check — chart pointer.*
- **Wikipedia — "Cyril E. King Airport"** — https://en.wikipedia.org/wiki/Cyril_E._King_Airport (retrieved 2026-07-26). *Historical runway-extension account, general field description — corroboration only.*
- **VATSIM Caribbean Division (VATCAR) — San Juan CERAP (ZSU) Standard Operating Procedures**, effective 2024-06-30 — https://sanjuan.vatcar.net/wp-content/uploads/2024/08/ZSU-SOP-2024-v1b.pdf (retrieved 2026-07-26). *Network-simulation document, not regulatory — used only to cross-check the combined-facility structure, sector layout and general TIST arrival/departure sequencing character per the build workflow's VATSIM cross-check step.*

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-26 | Built from national/territory AIP; K Global fields from live VAMSYS; 4-page pack. |
