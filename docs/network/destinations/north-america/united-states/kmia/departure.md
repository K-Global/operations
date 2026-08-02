# KMIA — Miami Intl · Departure Page

**KMIA / MIA** · Miami, Florida, United States · North America
**Version** v0.1 · **Updated** 2026-07-26 · **Status** Draft — FAA-sourced, provisional

> **Read-me:** Tactical departure aid for the sim, not a chart. Companion to the [KMIA Briefing](index.md), [Dispatch](dispatch.md) and [Arrival](arrival.md) pages. SIDs/procedures are listed **by name only** — fly the charted current-AIRAC version; verify every gradient, minima and routing on the current chart. Static data only; live wx/NOTAM/CTOT are pulled at planning. Open 🟧 items are in §Open items. Flag legend 🟥 restriction/hazard · 🟧 caution/unverified · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| Usual departure runway(s) | Wind/traffic dependent across four non-parallel runways — **08-series** typical given prevailing easterly winds, with **09/27** and **12/30** used complementarily 🟧 |
| Config logic | Wind-driven "East Flow"/"West Flow" on the 08/26 pair, supplemented by 09/27 (extra length/capacity) and 12/30 (crosswind) — not sourced to a specific published preferential-runway program |
| Transition altitude | Not independently confirmed — US default FL180 assumed; verify current chart 🟧 |
| Take-off minima | **Non-standard takeoff minimums are separately published for this field** — do not assume standard minima 🟧 |
| CTOT / flow regime | No field-specific slot regime identified; FAA ATCSCC ground-delay/ground-stop programs apply, especially in convective/hurricane-season weather 🟧 |
| De-icing on departure | **Effectively NIL** — sub-tropical climate, no meaningful season |

---

## 2. Stand → runway taxi routing & hot spots

- **Typical routings by runway:** From the Central Terminal (Concourse E/F/G) or South Terminal (Concourse H/J), Ground routes toward the assigned departure runway across the field's non-parallel runway complex; confirm the exact taxi with Ground on the day given the layout's complexity.
- **Hot spots / tight taxiways:** 🟥 **Five FAA-charted hot spots are published for KMIA**: **HS 1** short-taxiway risk; **HS 2** RWY 27/RWY 30 wrong-runway departure risk — brief this specifically before any RWY 27 or RWY 30 departure; **HS 3** short taxiway between runways; **HS 4** multiple runway ends close together with hold lines dependent on the runway in use; **HS 5** short taxiway between RWY 08L and RWY 08R (also reported as the taxiway-convergence point near the RWY 08R/RWY 12 corner, Taxiways M/P/Q). Aircraft with wingspan >171 ft are reported restricted on Taxiway P east of Taxiway U — verify current restriction.
- **Runway crossings / read-back-required points:** Given the non-parallel layout, expect explicit runway-crossing instructions when routed between the 08/26 complex and the 09/27 or 12/30 runways.
- **Low-vis taxi caveats:** SMGCS/low-vis taxi routing would apply during the field's occasional dense-fog/low-ceiling events; follow-me availability not confirmed. 🟧

---

## 3. Runway / SID selection logic

- **By wind / config:** South Florida's prevailing easterly trade winds typically favour the **08-series runways** for departure; the reciprocal 26-series is used when wind dictates. 🟧 Not sourced to a specific published ATC program.
- **By departure direction:** RWY 09/27 (the longest runway, 13,016 ft) and RWY 12/30 (crosswind runway) are used to add departure capacity and to accommodate wind components the 08/26 pair cannot — selection logic not independently sourced to an operator/ATC document. 🟧
- **Noise / preferential-runway program:** No mandatory noise-based preferential-runway program identified; Miami-Dade Aviation Department's Noise Abatement Office issues voluntary procedural guidance only (see [Briefing §12](index.md)).
- **Interaction with arrivals:** The field's **non-parallel, intersecting runway geometry** means departures on one runway complex routinely interact with arrivals/departures on another (unlike a simple parallel-pair hub) — published **LAHSO combinations** exist for this reason; verify the current LAHSO chart and never accept a hold-short clearance without confirming safe landing/stopping distance.

---

## 4. SID list (names only)

*Fly the charted current-AIRAC version. RNP/gradient notes are pointers only — verify on the chart.*

| SID (name) | Runway(s) | RNP / gradient note | Notes |
|---|---|---|---|
| ALTNN (RNAV) | Per current chart 🟧 | Not confirmed this pass | Pull the live current-AIRAC SID list before use |
| BNGOS (RNAV) | Per current chart 🟧 | Not confirmed this pass | |
| DORRL (RNAV) | Per current chart 🟧 | Not confirmed this pass | |
| FLMGO (RNAV) | Per current chart 🟧 | Not confirmed this pass | |
| FOLZZ (RNAV) | Per current chart 🟧 | Not confirmed this pass | |
| GLADZ (RNAV) | Per current chart 🟧 | Not confirmed this pass | |
| GWAVA (RNAV) | Per current chart 🟧 | Not confirmed this pass | |
| HURCN (RNAV) | Per current chart 🟧 | Not confirmed this pass | |
| KLADA (RNAV) | Per current chart 🟧 | Not confirmed this pass | |
| LIFRR (RNAV) | Per current chart 🟧 | Not confirmed this pass | |
| MAYNR (RNAV) | Per current chart 🟧 | Not confirmed this pass | |
| "MIAMI NINE" (conventional) | Per current chart 🟧 | Not confirmed this pass | Non-RNAV departure |
| NNOCE (RNAV) | Per current chart 🟧 | Not confirmed this pass | |

*Names sourced from the FAA d-TPP procedure index (AIRAC cycle 2604) via aggregator, retrieved 2026-07-26 — runway assignment, transitions and RNP/gradient detail not independently confirmed this pass; pull the live current-AIRAC SID list and chart before use.*

---

## 5. Initial climb, speed & noise-abatement departure

- **Initial climb / speed:** Per SID/ATC; standard 250 KIAS below 10,000 ft MSL (14 CFR 91.117) — confirm current chart.
- **Noise-abatement departure procedure (NADP):** No mandated fleet-wide NADP identified; Miami-Dade Aviation Department's voluntary noise-abatement guidance covers ascent-angle and routing preferences over residential areas — not a charted NADP requirement. 🟧
- **Early turn / altitude constraints:** Published per SID — verify constraints on the current chart, particularly given the field's non-parallel runway/departure-direction logic.

---

## 6. Engine-out / emergency-turn & obstacle considerations

- **Engine-out / emergency-turn procedure:** No published EO/emergency-turn specifics confirmed in reachable sources — apply the operator/type EOSID for the assigned runway. 🟧
- **Close-in / distant obstacles:** Flat, sea-level South Florida coastal plain — no significant terrain/obstacle consideration identified for any departure runway.
- **Special DP / obstacle DP:** A dedicated non-standard takeoff-minimums chart is published for this field (see §1/§7) — this may reflect obstacle considerations; verify on current chart. 🟧

---

## 7. Low-vis takeoff & de-icing on departure

- **LVTO minima / procedure:** Non-standard takeoff minimums are published for KMIA — specific LVTO RVR figures not confirmed this pass; the field does experience occasional dense-fog/low-ceiling events (documented ground stops), so a low-vis takeoff contingency should be briefed even though it is not the field's dominant hazard. 🟧
- **De-icing:** **Effectively NIL** — sub-tropical climate, no meaningful de-icing infrastructure or season expected.

---

## 8. Clearance / CTOT & departure frequency sequence

- **Clearance delivery:** Miami Clearance Delivery **120.350** (also 135.350 pre-taxi clearance reported).
- **Frequency sequence:** **Delivery 120.350 → Ground 121.800 (RWY 8L/8R/12/26L/26R) or 127.500 (RWY 9/27/30) → Tower 118.300 (hdg 270–089) or 123.900 (hdg 090–269) → Miami Departure 119.450/120.500/124.850/125.500 (sector/heading-specific).** Take the assigned frequency and confirm current chart. (Frequencies from [Briefing §8](index.md).)
- **CTOT / slot handling:** No field-specific slot/CTOT regime identified; comply with any FAA ATCSCC ground-delay program assignment, particularly during convective or tropical-system weather. 🟧

---

## 9. Performance watch-items for our types

- **Field-length / weight:** All four runways (8,600–13,016 ft) are non-limiting for any K Global type; when departing from an intersection rather than full length, always confirm the reduced take-off distance available — a 2015 widebody intersection-departure/distance-briefing error at this field (RWY 9/Taxiway T1) is a direct precedent (see [Briefing §3.3](index.md)).
- **Density altitude / temperature:** Non-issue at 9 ft elevation; South Florida heat/humidity is a standard performance-planning input but not a hot-and-high penalty.
- **Contamination / wet-runway:** Heavy warm-season convective rainfall is the relevant contamination consideration (standing water/braking-action risk during a thunderstorm), not winter freezing contamination.
- **Link to OM B:** See [`OM B — Fleet Capability Matrix`](../../../../../fleet/capability-matrix.md) — no field-length or field-elevation performance penalty for any K Global type at KMIA.

---

## 10. Gotchas

- **Non-parallel, four-runway layout** — do not assume a simple single-direction flow; expect crossing traffic and instructions between the 08/26, 09/27 and 12/30 complexes.
- **RWY 27/RWY 30 wrong-runway departure risk (FAA hot spot HS 2)** — brief this specifically before any departure from either runway.
- **Intersection-departure distance** — always confirm reduced takeoff distance available before accepting an intersection departure; do not assume full runway length.
- **Displaced thresholds on RWY 09, 12 and 27** do not affect takeoff distance the same way as landing distance — but confirm which declared distance (TORA vs. LDA) applies to your clearance.
- **LAHSO combinations are published for this field** — verify the current chart if operating in an environment where a hold-short clearance could be issued to a following/crossing aircraft.
- **No formal curfew** — but hurricane-season (Jun–Nov) ground-stop risk and near-daily warm-season convective activity are the real schedule-risk drivers; build weather buffer rather than curfew buffer.
- **Non-standard takeoff minimums are published** — do not assume standard minima apply.

---

## Open items (🟧 — confirm against AIP / current AIRAC)

- Current-AIRAC SID names, runway assignment, transitions and RNP/gradient specifics.
- Take-off minima exact figures (dedicated non-standard chart exists).
- Preferential-runway/configuration-change logic — not sourced to a specific ATC document.
- Start-up/push-back procedure detail.
- LVTO RVR minima and follow-me/SMGCS specifics.
- EOSID/engine-out procedure detail per runway.

> **Live data — pull at planning:** wx/METAR/TAF, NOTAM (runway/taxiway/navaid/lighting, esp. hot-spot and LAHSO status), CTOT/ATFM/ground-stop status (esp. tropical-system advisories in season). Not stored in this durable file.

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim charts inform content but are not listed here.*

- FAA d-TPP procedure index (AIRAC cycle 2604, 16 Apr–14 May 2026) via MetarCentral aggregator — https://metarcentral.com/airport/KMIA/operations (retrieved 2026-07-26). *SID names, takeoff-minimums chart existence, LAHSO chart existence.*
- FAA Southeast Hot Spots chart (cycle 16 Apr–14 May 2026) — https://aeronav.faa.gov/d-tpp/2604/se3hotspot.pdf (retrieved 2026-07-26). *KMIA HS 1–HS 5.*
- OurAirports — https://ourairports.com/airports/KMIA/runways.html , /frequencies.html (retrieved 2026-07-26). *Runway/displaced-threshold data, frequencies.*
- Wikipedia — "Miami International Airport" (accident history, RWY 9 intersection-departure event) — https://en.wikipedia.org/wiki/Miami_International_Airport (retrieved 2026-07-26).
- CBS News Miami — "I-Team: Collision Course" — https://www.cbsnews.com/miami/news/i-team-collision-course (retrieved 2026-07-26). *Intersecting-runway/LAHSO context.*

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-26 | Built from FAA sources; K Global fields from live VAMSYS; 4-page pack. |
