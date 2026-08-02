# LFOB — Beauvais-Tillé · Airport Briefing

**LFOB / BVA** · Beauvais, Hauts-de-France, France · Europe
**Version** v0.1 · **Updated** 2026-07-26 · **Status** Draft

> **Read-me:** Planning aid for the sim, not a chart. Static data is drawn from AIP France, AD 2 LFOB, plus standard public aeronautical data; approaches/SIDs are listed **by name only** — fly the charted current-AIRAC version. Live weather/NOTAMs are pulled at planning (§14/§15). Open 🟧 items are listed in §18. Flag legend 🟥 restriction/hazard · 🟧 caution/unverified · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| ARP (lat/long) | 49°27′16″N / 002°06′46″E (49.4544, 2.1128) `[AIP France AD 2 LFOB.2]` |
| Field elevation | **359 ft / 109 m AMSL** (reference temperature 26.1°C) |
| Mag variation | 🟧 **0.92° E** (epoch 2020, annual change 0.19° — direction of drift not stated in source); current-day value not independently re-confirmed against a live AIRAC |
| Time zone | UTC+1 (CET) / UTC+2 (CEST, EU DST observed) |
| Runway(s) | **12/30**, 2,429 × 45 m, asphalt, PCN 52 F/C/W/T — the field's sole commercial-capable runway; a short **04/22** strip (708 × 18 m, unlit, day-only, 5.7 t) exists but is a non-factor for our operation — see §7 |
| Preferential runway | **Wind-determined only choice** — single runway, no parallel/reciprocal alternative; whichever of 12 or 30 the wind favours is the only option (see §10/§11) |
| Longest LDA | RWY 30: **2,429 m**; RWY 12: **2,385 m** (displaced threshold — see §7) |
| Approaches | **ILS RWY 12** (ident BVT, 111.15 MHz — homologated **CAT I and CAT III**; **CAT II approaches prohibited**); **ILS RWY 30** (ident BI, 109.95 MHz — **CAT I only**) |
| RFF category | 🟧 **Category 7** — provided per NOTAM schedule "for every scheduled commercial flight," not confirmed as a standing H24 category |
| Control type | **Radar** — Beauvais Approach provides permanent radar service within CTR/TMA Beauvais; not procedural |
| Elevation class | Near sea-level (359 ft) — not hot-and-high; non-factor for performance |
| Special-airport status | 🟧 Not operator-categorised in reachable sources; standing briefing items are the **RWY 12/RWY 30 CAT-capability split** (CAT III vs CAT I only), **CAT II prohibited on RWY 12**, and **limited (non-H24) ATS hours with a hard night curfew** — see §5 |
| Customs / PoE | **Yes** — customs/police desk on field `[AIP France AD 2 LFOB.4]`; desk hours not independently confirmed 🟧 |
| K Global category | 🟧 **NOT SET** — no VAMSYS category assigned `[VAMSYS mirror 2026-07-26]` |
| K Global base | **No** `[VAMSYS mirror 2026-07-26]` |
| Company preferred alternates | 🟧 **NOT SET in VAMSYS.** The K Global route register separately lists **LFPG, LFPB, LFQQ** as this field's alternates — this is a **route-register-derived** list, not a VAMSYS "preferred alternates" field entry. See §16. |
| Taxi-in / taxi-out (VAMSYS) | **n/a** — not set `[VAMSYS mirror 2026-07-26]` 🟧 |

---

## 2. Validation summary

| Domain | Flag | Note |
|---|---|---|
| Terrain / CFIT | 🟥 | Documented irregular terrain step-profile under the RWY 12 radio-altimeter coverage area, 300 m upstream of the threshold — see §3.1. |
| Runway length vs fleet perf | 🟧 | 2,429 m (12) / 2,385 m LDA is workable for narrowbody LCC-class types but is a genuine single-runway, no-alternative-length field — confirm performance margin per type/weight/condition. |
| Approach availability / minima | 🟧 | RWY 12 = CAT I/III (no CAT II); RWY 30 = CAT I only — in low-vis with wind favouring RWY 30, approach capability is capped at CAT I. |
| Airspace / traffic / control | 🟩 | Radar-controlled CTR Beauvais (Class D) within TMA Paris; moderate traffic, no complex parallel-runway geometry. |
| Weather / seasonal hazard | 🟧 | Northern-France fog/low-cloud risk is the field's defining seasonal hazard, directly why CAT III exists on RWY 12 only. |
| Curfew / slots / hours | 🟥 | Hard night ban 0000–0500 local; secondary Chapter-3 noise-margin restriction 2200–0000 & 0500–0700; field is **not H24** (ATS 0615–2200, extendable for scheduled flights) — see §6/§12. |
| RFF category vs our types | 🟩 | Category 7 is adequate for narrowbody LCC-class types; tied to scheduled-service NOTAM scheduling rather than a confirmed permanent watch. |
| Fuel availability | 🟧 | AVGAS 100LL H24 (dispenser); JET A1 tied to ATS hours (extendable for scheduled flights) — see §6/§16. |
| Customs / handling / security | 🟧 | Customs/police desk present; exact hours and handling-agent detail not confirmed. |

---

## 3. Threat & Error Management (TEM)

### 3.1 CFIT / Terrain 🟥
AIP France explicitly documents an irregular terrain step-profile within the radio-altimeter coverage area upstream of the **RWY 12** threshold (approximately 300 m before THR 12): indicated radio-altimeter height can change unusually fast between roughly 230 ft and 100 ft RA due to this ground profile. The AIP directs that "the aircraft operator must check pilots have been informed of [this] variation" — a mandatory crew-briefing item for any RWY 12 arrival, particularly relevant to autoland/CAT III approaches. This is the field's one genuine terrain-driven CFIT/awareness item; there is no significant close-in high terrain otherwise.

### 3.2 Airborne conflict / traffic 🟩
LFOB sits within Class D **CTR Beauvais** (SFC–1,500 ft AMSL) under permanent radar service from Beauvais Approach, itself nested in **TMA Paris**. Traffic density is moderate — a single-runway secondary/low-cost-oriented field, not a complex multi-runway hub. No parallel-runway or crossing-runway complexity exists. See the [Europe area airspace brief](../../../../airspace/europe.md) — 🟧 no dedicated Paris (LFFF) FIR brief exists yet in this tree; this is an open item (§18).

### 3.3 Runway excursion 🟧
**Single runway 12/30 — no runway-choice flexibility.** Unlike a multi-runway field, crews must accept whatever crosswind/tailwind component the wind dictates on the day; there is no alternative runway to select for a better wind angle. RWY 12 carries a **displaced threshold**, reducing LDA to 2,385 m against a 2,429 m TORA/TODA/ASDA (RWY 30 is not displaced — full 2,429 m LDA). Winter de-icing season (on-request, typically Oct–May) brings a contamination/braking-action consideration in the absence of dedicated de-icing pads (see §11).

### 3.4 Weather threat 🟧
Northern-France (Hauts-de-France/Oise) fog and low-cloud events are the field's defining weather hazard — the direct reason CAT III equipment exists on RWY 12. However, **RWY 30 is CAT I only**: if the wind on a low-visibility day favours RWY 30, the field's effective approach capability is capped at CAT I regardless of RWY 12's CAT III infrastructure. This runway/CAT-capability asymmetry is a standing dispatch-planning consideration, not just a tactical one. See §14.

### 3.5 Operational considerations 🟧
Plan around: (1) **CAT II approaches are prohibited on RWY 12** — only CAT I and CAT III are homologated, with CAT III requiring the operator to have completed an approved operational demonstration programme; (2) the field is **not H24** — ATS hours are 0615–2200 (extendable for scheduled commercial flights) with a **hard curfew 0000–0500** and a secondary Chapter-3 noise-margin restriction either side of it (§6/§12); (3) a **four-engine aircraft wingspan ≥36 m / main-gear width ≥9 m restriction** on RWY 12/30 shoulders — non-limiting for narrowbody LCC-class operations but noted for completeness; (4) a documented **wildlife/bird-strike hazard, including falconry-based bird control** in use on the field.

---

## 4. Cautions & Warnings

- **Single runway 12/30 — no reciprocal-runway choice.** Whatever the wind dictates is the only option; there is no parallel or crosswind-favoured alternative runway at this field.
- **RWY 12 offers CAT III; RWY 30 offers CAT I only.** A low-visibility event with wind favouring RWY 30 caps the field at CAT I approach capability.
- **CAT II approaches are prohibited on RWY 12** — the field skips directly from CAT I to CAT III; do not brief or expect a CAT II option.
- **Radio-altimeter indications near the RWY 12 threshold change unusually fast** (~230 ft to ~100 ft RA) due to a documented irregular terrain step-profile upstream — a mandatory AIP-driven crew-awareness item.
- **RWY 12 has a displaced threshold** — LDA is 2,385 m, 44 m less than the 2,429 m TORA/TODA/ASDA.
- **RWY 04/22 (708 × 18 m, unlit, day-only)** is a short general-aviation strip — never a commercial-jet option.
- **Hard night curfew 0000–0500 local** — no aircraft may land or take off in this window; a secondary Chapter-3 noise-margin restriction (aircraft with cumulative margin <5 EPNdB) applies 2200–0000 and 0500–0700, with only a narrow, criteria-based exemption path for a 0000–0100 landing.
- **Field is not H24** — ATS published hours are 0615–2200 (extendable for scheduled commercial flights); confirm current hours before planning an edge-of-window rotation.
- **Circling RWY 12/30: avoid overflying the village of Tillé** (noise-sensitive, per AIP guidance).
- **Documented wildlife/bird-strike hazard**, including active falconry-based bird control on the field.

---

## 5. Aerodrome category, restrictions & crew qualification

- **Special-airport / category:** Not operator-categorised as a restricted "special airport" in reachable sources. 🟧 Standing crew-briefing items: the RWY 12/RWY 30 CAT-capability split, CAT II prohibition on RWY 12, and the radio-altimeter terrain-profile note (§3.1).
- **Crew-qualification gate:** CAT III currency required for a RWY 12 low-visibility approach; per AIP France, any operator flying CAT III into RWY 12 must have completed an **operational demonstration programme acceptable to its regulatory authority**. 🟧 Confirm current K Global CAT III authorisation status for this field before planning a low-vis RWY 12 arrival.
- **Operating restrictions / bans:** **CAT II approaches prohibited on RWY 12** (CAT I and III only); four-engine aircraft with wingspan ≥36 m or main-gear overall width ≥9 m are **not accommodated** on RWY 12/30 shoulders — non-limiting for narrowbody LCC-class types. 🟥 Hard night curfew 0000–0500 (§6/§12).
- **Overflight / entry / permits:** Standard EU/Schengen international arrival; no special state permit identified in reachable sources. 🟩
- **Operations notes:** Ground-handling/operations coordination via **BEAUVAIS OPS 131.540 MHz**; customs/police desk present on field (phone numbers on file, hours not independently confirmed 🟧).

---

## 6. General / hours / services

| Item | Value | Flag |
|---|---|---|
| ATS hours | **0615–2200**, extension for all scheduled commercial flights; activity known on ATIS | 🟧 |
| AD operating hours | **0515–2145**, possible extension for any scheduled flight | 🟧 |
| Night / curfew restrictions | **Hard ban 0000–0500 local** (no landings/take-offs); Chapter-3 aircraft with cumulative noise margin <5 EPNdB restricted 2200–0000 & 0500–0700; narrow criteria-based exemption path for a 0000–0100 landing | 🟥 |
| RFF category | **Category 7**, per NOTAM schedule tied to scheduled commercial flights | 🟧 |
| Fuel | **AVGAS 100LL** H24 (automatic dispenser, card payment); **JET A1 TR0** per ATS hours (extendable for scheduled flights) — supplier AVITAIR | 🟧 |
| PCN | RWY 12/30: **52 F/C/W/T**; apron stands vary 39–69 (see §13) | 🟩 |
| Customs | Desk present on field; exact hours not confirmed | 🟧 |
| Handling / FBO | Handling services published **0515–2145**; cargo handling and hangar/repair for visiting aircraft: **NIL** | 🟧 |

---

## 7. Runways & declared distances

| RWY | Dimensions | Surface / PCN | TORA | TODA | ASDA | LDA | Notes |
|---|---|---|---|---|---|---|---|
| 12 | 2,429 × 45 m | Asphalt / PCN 52 F/C/W/T | 2,429 m | 2,429 m | 2,429 m | **2,385 m** | **Displaced threshold** — CAT I/III ILS (BVT); CAT II prohibited |
| 30 | 2,429 × 45 m | Asphalt / PCN 52 F/C/W/T | 2,429 m | 2,429 m | 2,429 m | 2,429 m | CAT I ILS only (BI) |
| 04 | 708 × 18 m | Asphalt / 5.7 t | 708 m | 708 m | 708 m | 708 m | 🟧 GA-only; **unlit, day-use only, forbidden at night** — non-factor for our ops |
| 22 | 708 × 18 m | Asphalt / 5.7 t | 708 m | 708 m | 708 m | 708 m | Reciprocal of 04 — same restriction |

*Source: AIP France, AD 2 LFOB.12/.13 (AIRAC AMDT 02/25, eff. 20 Feb 2025). RWY 12/30 strip 2,549 × 280 m; RESA 170 × 280 m (THR 12) and 240 × 280 m (THR 30). RWY 12/30 shoulders **not arranged for four-engine aircraft with wingspan ≥36 m or main-gear overall width ≥9 m** — non-limiting for narrowbody LCC-class types. RWY 12/30 is closed at night outside published ATS hours (no pilot-controlled lighting). Intersection take-off distances are separately published from TWY N/T/W (RWY 12) and TWY N (RWY 30); full-length TORA is the default planning distance. 🟧 OurAirports separately lists an additional runway "13R-31L" with no dimensional data — this is **not corroborated in the primary AIP source** and is treated as a likely legacy/crowd-sourced data artifact (§18). All distances in metres.*

---

## 8. Communications

| Service | Callsign | Frequency | Hours | Notes |
|---|---|---|---|---|
| FIS | Beauvais Information | 119.800 | HO | |
| ATIS | Beauvais ATIS | 118.380 | HO | 8.33 kHz channel; tel +33 3 44 84 69 41 |
| Approach | Beauvais Approach | 121.400 (aux) / 123.985 (8.33, sectors WEST/EAST) | HO | Radar service |
| Tower | Beauvais Tower | 121.400 / 123.985 (aux, 8.33) | HO | |
| Gonio / VDF | Beauvais Gonio | 121.400 / 123.985 (8.33) | HO | |
| Air-to-air (no ATS) | Beauvais | 121.400 | HX | Used only when ATS is not operating |
| Ops / ground coordination | Beauvais Ops | 131.540 | — | Ground-handling/operations coordination |
| Centre / FIR | Paris FIR/UIR (LFFF) — DSNA | Per current AIRAC | H24 | 🟧 No dedicated Paris (LFFF) FIR brief exists yet in this tree — see [Europe area brief](../../../../airspace/europe.md) and §18. |

*Source: AIP France, AD 2 LFOB.18 (AIRAC AMDT 02/25, eff. 20 Feb 2025). "HO" = hours per published ATS schedule (§6), not H24.*

---

## 9. Navaids

| Aid | Ident | Freq | Hours | Notes |
|---|---|---|---|---|
| NDB | BV | 391 kHz | H24 | 307°/3.51 NM from THR 12 |
| VOR/DME | BOV | 109.65 (CH 33Y) | H24 | On-field area navaid |
| LOC RWY 30 | BI | 109.95 | H24 | **CAT I** (designation I.E.1) |
| GP RWY 30 | (assoc. BI) | 333.65 | H24 | 3° glidepath |
| DME RWY 30 | (assoc.) | CH 36Y | H24 | |
| LOC RWY 12 | BVT | 111.15 | H24 | **CAT I and CAT III** (designation III.E.4); **CAT II prohibited** |
| GP RWY 12 | (assoc. BVT) | 331.55 | H24 | 3° glidepath |
| DME RWY 12 | (assoc.) | CH 48Y | H24 | |

*Source: AIP France, AD 2 LFOB.19/.22 (AIRAC AMDT 02/25, eff. 20 Feb 2025).*

---

## 10. Arrival

- **Transition altitude / level:** TA 5,000 ft AMSL; TL by QNH (standard setting 1013.2 hPa); first usable level not independently confirmed this pass. 🟧
- **Speed:** Standard 250 KIAS below FL100 (EU/ICAO norm) — confirm no local override on current chart.
- **Preferential runway logic:** Wind-determined only choice — single runway 12/30, no config/traffic-preference complexity to weigh.
- **Approaches (names only — verify minima on current AIRAC charts):**

| RWY | Approach | Notes |
|---|---|---|
| 12 | ILS (BVT) | CAT I and CAT III; **CAT II prohibited**; radio-altimeter terrain-profile note (§3.1) |
| 30 | ILS (BI) | CAT I only |

- **STARs (names only):** All TMA Paris sectors are stated to have RNAV STARs serving Beauvais arrivals; individual STAR names not confirmed in reachable sources — pull the current-AIRAC STAR list at planning. 🟧
- **LVP:** CAT III capability exists on RWY 12 only; RWY 30 is capped at CAT I — a low-vis event with wind favouring RWY 30 limits the field to CAT I minima. Exact RVR/trigger figures not confirmed this pass. 🟧
- **Missed approach watch-items:** No parallel runway exists for a go-around to re-sequence onto; the radio-altimeter terrain-profile note (§3.1) is the field's specific approach-hazard item on RWY 12.

---

## 11. Departure

- **SIDs (names only — fly the charted version):** **SID CONV RWY 12**, **SID RNAV RWY 12**, **SID CONV RWY 30**, **SID RNAV RWY 30** — verify current-AIRAC routing/waypoints on the chart.
- **RNP / climb-gradient requirements:** RNAV SIDs are published from both runway ends; verify RNP level and any climb-gradient requirement on the current chart. See [`OM E — PBN and RNP Operations`](../../../../../flight-ops/pbn-and-rnp-operations.md).
- **Take-off minima:** Published per AIP; exact figures not confirmed this pass. 🟧
- **Start-up / push-back:** Coordinate via **Beauvais Ops 131.540**; exact push-back/cross-bleed procedure not confirmed locally. 🟧
- **ATC slot / CTOT & clearance:** No slot-coordination level (IATA Level 2/3) identified in reachable sources for LFOB; standard EUROCONTROL Network Manager ATFM/CTOT regulation may apply during network-wide disruption. 🟧
- **De-icing:** Available **on request, typically October–May**; two Vestergaard Elephant MY de-icing units; ABAX Ecowing AD2 Type 2 fluid. Not a dedicated remote-pad operation — confirm throughput expectations locally in season. See [`OM E — Cold Weather Operations`](../../../../../flight-ops/cold-weather-operations.md).

---

## 12. Noise & Environmental

- **Noise abatement (NAP):** Circling guidance instructs crews to **avoid overflying the village of Tillé**. No further NADP/noise-routing detail confirmed in reachable sources. 🟧
- **Night noise / dB limits:** Chapter-3 aircraft with cumulative noise margin **<5 EPNdB** are restricted 2200–0000 and 0500–0700; the field is under a **hard movement ban 0000–0500**, with a narrow criteria-based exemption path for a 0000–0100 landing only.
- **Engine run-up restrictions:** Not confirmed in reachable sources. 🟧
- **Reverse thrust / idle-reverse policy:** Not confirmed in reachable sources. 🟧

---

## 13. Ground operations

- **Stands for our types:** 12 numbered apron stands, individually rated (PCN 39–69, various classes); no widebody-class stand identified — consistent with a narrowbody-only field. 🟩
- **Push-back:** Policy (mandatory vs self-manoeuvre) not confirmed in reachable sources. 🟧
- **Standard taxi routes:** Taxiways **N** (23 m, PCN 54 F/C/W/T), **W** (18 m, 46 F/B/W/T), **R** (18 m, 38 F/C/W/T), **A/P** (7.5 m, 5.7 t — light aircraft only), **T** (10.5 m, 6 F/C/Y/T); **TWY H** is grass, day-use only, restricted to aircraft wingspan <15 m — none of these narrow/light-rated taxiways are relevant to K Global commercial equipment.
- **Hot spots / tight taxiways:** None specifically AIP-flagged as complex/caution junctions in reachable sources for this single-runway field — a materially simpler ground-movement environment than a multi-runway hub. 🟩
- **Follow-me:** Availability not confirmed in reachable sources. 🟧

---

## 14. Weather & seasonal (durable)

- **Climate / prevailing wind:** Temperate northern-France climate (Hauts-de-France/Oise department); no published prevailing-wind statistic confirmed this pass. 🟧
- **Seasonal hazards:** Winter fog/low-cloud events are the field's defining hazard, the direct reason CAT III equipment exists on RWY 12 (but not RWY 30 — see §3.4). A recognised de-icing season runs roughly **October–May**, provisioned on request rather than via dedicated pads (§11).
- **Local effects:** No terrain/sea-breeze effects of note beyond the documented radio-altimeter/terrain-step profile near the RWY 12 threshold (§3.1).

> **Live weather — pull at planning (T-2h):** METAR, TAF, TREND, SIGMET/AIRMET. Not stored here.

---

## 15. NOTAMs

> **Pull at planning (T-2h).** Perishable — not stored here. Check: runway closure/RFF-category downgrade (RFF is tied to a NOTAM-scheduled watch, not a standing H24 category — §6), navaid U/S, ATS-hours extension status, lighting, obstacle/crane, GPS/RAIM for RNAV SIDs. Source: official AIS / OFP NOTAM block.

---

## 16. Fuel & alternate planning notes

- **Typical role for us:** **Secondary destination / alternate** — a low-cost/charter-oriented gateway serving the greater Paris catchment area, not a K Global base.
- **Nearest suitable alternates:** The K Global route register lists **[LFPG](../lfpg/index.md)**, **LFPB (Paris–Le Bourget — no pack in this tree)**, and **[LFQQ](../lfqq/index.md)** as this field's alternates. 🟧 This is a **route-register-derived** list — VAMSYS itself has **no "preferred alternates" field entry set** for LFOB (§1). Confirm suitability, runway/RFF adequacy and current minima per leg.
- **Fuel-uplift notes:** AVGAS 100LL available H24 via automatic dispenser; JET A1 TR0 available per ATS hours (extendable for scheduled commercial flights), supplied by AVITAIR, with tankage of 6 × 120 m³. See [`OM E — Fuel Policy`](../../../../../flight-ops/fuel-policy.md).
- **Range/perf flags for our fleet:** 2,429 m (12) / 2,385 m LDA (30 full-length) is a genuine single-runway, no-alternative-length planning case for narrowbody LCC-class types — see [`OM B — Fleet Capability Matrix`](../../../../../fleet/capability-matrix.md) and [`OM E — Short and Limited Runway Operations`](../../../../../flight-ops/short-and-limited-runway-operations.md).

---

## 17. Fleet-specific notes (optional)

- LFOB's single 2,429 m / 45 m runway with a displaced RWY 12 threshold (2,385 m LDA) is the operative performance-planning consideration for narrowbody LCC-class types at or near structural weight limits, especially in wet/contaminated conditions during the Oct–May de-icing season — see [`OM E — Short and Limited Runway Operations`](../../../../../flight-ops/short-and-limited-runway-operations.md). The four-engine wingspan/main-gear shoulder restriction (§7) is a non-issue for this field's narrowbody-oriented role.

---

## 18. Open items (🟧 — confirm against AIP / current AIRAC)

- **VAMSYS category** — not set for LFOB.
- **VAMSYS preferred alternates** — not set; LFPG/LFPB/LFQQ are route-register-derived only, not a VAMSYS field entry.
- **Taxi-in/taxi-out** — not set (n/a) in VAMSYS.
- **Paris (LFFF) FIR brief** — no dedicated French FIR document exists yet in this tree; linked to the general [Europe area brief](../../../../airspace/europe.md) in the interim.
- **Magnetic variation** — sourced to a 2020 epoch (0.92° E, annual change 0.19°, direction of drift not stated); current-day value not independently re-confirmed.
- **RFF category 7** — described as tied to a NOTAM schedule for scheduled commercial flights; not confirmed as a standing/permanent category.
- **ATS/AD hours extension criteria** for non-scheduled or irregular operations not detailed in reachable sources.
- **Current-AIRAC STAR names and CAT III/CAT I RVR trigger minima** — not obtained in this research pass; pull the live current-AIRAC procedure list before use.
- **Take-off minima exact figures, engine run-up restriction, reverse-thrust/idle-reverse policy, push-back policy, follow-me availability** — none confirmed in reachable sources.
- **Customs/handling desk hours** — presence confirmed, exact hours not confirmed.
- **OurAirports-listed "13R-31L" runway** — not corroborated in the primary AIP source; treated as a likely data artifact, not used in this pack.

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim material (current-AIRAC charts) informs content but is not listed here.*

- **AIP France, AD 2 LFOB** (geographical/admin data AIRAC AMDT 03/25, eff. 20 Mar 2025; RFFS data AIRAC AMDT 13/23, eff. 28 Dec 2023; runway/declared-distance/ATS/comms/navaid/local-procedure data AIRAC AMDT 02/25, eff. 20 Feb 2025) — compiled/mirrored via DIRCAM (French Air Force MIAC1 civil-aerodrome reference), https://www.dircam.dsae.defense.gouv.fr/images/Stories/Doc/MIAC1/miac1_beauvais_lfob.pdf (retrieved 2026-07-26). **Primary tier — treat exact current-cycle figures as needing a live-AIRAC cross-check where flagged 🟧 above.**
- OurAirports — https://ourairports.com/airports/LFOB/ and /runways.html and /frequencies.html (retrieved 2026-07-26). *ARP/elevation/runway/frequency cross-check.*
- Wikipedia — "Beauvais–Tillé Airport" — https://en.wikipedia.org/wiki/Beauvais%E2%80%93Till%C3%A9_Airport (retrieved 2026-07-26). *CAT III/CAT I split corroboration, curfew history, terminal/tower background.*

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-26 | Built from SIA France eAIP; K Global fields from live VAMSYS; 4-page pack. |
