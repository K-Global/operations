# FAOR — O.R. Tambo Intl · Airport Briefing

**FAOR / JNB** · Kempton Park, Johannesburg, Gauteng, South Africa · Africa
**Version** v0.1 · **Updated** 2026-07-26 · **Status** Draft

> **Read-me:** Planning aid for the sim, not a chart. Static data is from AIP South Africa (ATNS/SACAA), AD 2 FAOR; approaches/SIDs/STARs are listed **by name only** — fly the charted current-AIRAC version. Live weather/NOTAMs are pulled at planning (§14/§15). Open 🟧 items are listed in §18. Flag legend 🟥 restriction/hazard · 🟧 caution/unverified · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| ARP (lat/long) | 26°08′01.30″S / 028°14′32.34″E (-26.13369, 28.24232) `[AIP South Africa AD 2 FAOR 2.2]` |
| Field elevation | **5,558 ft / 1,694 m AMSL** — reference temperature 21.2°C; circuit altitude 7,000 ft ALT |
| Mag variation | 19° W (2018 epoch), annual change 0.10° W 🟧 (epoch not re-verified against current AIRAC) |
| Time zone | UTC+2 (SAST, no DST) |
| Runway(s) | **03L/21R** 4,421 × 60 m (asphalt) · **03R/21L** 3,405 × 60 m (asphalt) — full parallels |
| Preferential runway | 03L predominantly the **departure** runway (longer, closer to terminals, mitigates hot-and-high takeoff); 03R/21L predominantly **arrivals**; config flips 03↔21 by wind — AIP explicitly cautions pilots not to request 03L for landing (§2.18 note 10) |
| Longest LDA | 4,421 m (RWY 03L) |
| Approaches | **ILS CAT II on all four runway ends** (03L/21R/03R/21L); RNAV/GNSS also published — verify current AIRAC |
| RFF category | **CAT 9**, able to accommodate CAT 10 requirements 🟩 |
| Control type | **Radar** — Johannesburg Radar (APP) West/South/East/Director; Johannesburg Area North/South (ACC); see [Africa Airspace brief](../../../../airspace/africa.md) for the Johannesburg FIR (**FAJA**) |
| Elevation class | 🟥 **HIGH-ELEVATION — hot-and-high, a major performance driver.** 5,558 ft field elevation on the Highveld; combined with routine high summer OAT the effective density altitude is materially higher than the field-elevation figure alone — see [`OM E — High-Elevation Aerodrome Operations`](../../../../../flight-ops/high-elevation-aerodrome-operations.md) and §3.5/§9 below |
| Special-airport status | Not operator-categorised as crew-restricted; the standing briefing items are the **hot-and-high performance regime** and the **CAT II low-vis holding-point visual-illusion caution** (§4) |
| Customs / PoE | **Yes** — H24 `[AIP AD 2.3]` |
| K Global category | **L** `[VAMSYS mirror 2026-07-26]` |
| K Global base | **Yes** `[VAMSYS mirror 2026-07-26]` |
| Company preferred alternates | **FALA** (Lanseria Intl — [briefing](../fala/index.md)), **FAGC** (Grand Central, plain reference — no OM C pack) `[VAMSYS mirror 2026-07-26]` |
| Taxi-in / taxi-out (VAMSYS) | **15 min / 18 min** `[VAMSYS mirror 2026-07-26]` |

---

## 2. Validation summary

| Domain | Flag | Note |
|---|---|---|
| Terrain / CFIT | 🟩 | Rolling Highveld plateau; no close-in high terrain penetrating approach/departure paths. Non-factor for CFIT specifically — the elevation itself is a *performance*, not terrain-clearance, issue. |
| Runway length vs fleet perf | 🟥 | 4,421 m (03L/21R) is ample in absolute length, but **hot-and-high density altitude routinely makes the limit thrust/climb-gradient, not runway length** — see §3.5/§9. |
| Approach availability / minima | 🟩 | ILS CAT II on all four runway ends — strong low-vis capability. Sub-minima/RVR figures not independently re-verified this pass 🟧. |
| Airspace / traffic / control | 🟧 | Full radar environment (Johannesburg Radar/ACC); a busy dual-parallel-runway major hub — standard high-workload African-hub environment, not exceptional versus other network hubs. |
| Weather / seasonal hazard | 🟧 | Highveld thunderstorm season (Oct–Apr, afternoon convective activity) and the hot-and-high summer density-altitude effect are the two defining seasonal/performance hazards (§14). |
| Curfew / slots / hours | 🟩 | No hard curfew found; AD/ATS/fuelling/handling/security all H24. Night noise restriction on intersection takeoffs and engine run-ups 2000–0400 (§12). |
| RFF category vs our types | 🟩 | CAT 9, can accommodate CAT 10 — meets or exceeds any K Global type. |
| Fuel availability | 🟩 | Jet A-1 only, H24, hydrant system 3,000 L/min on all aprons except M. |
| Customs / handling / security | 🟩 | H24 customs, handling (Bidair/Menzies/Swissport) and security confirmed in AIP. |

---

## 3. Threat & Error Management (TEM)

### 3.1 CFIT / Terrain 🟩
FAOR sits on the open Highveld plateau at 5,558 ft — there is no close-in high terrain relevant to arrival, departure or missed-approach paths. Verify the MSA ring on the current chart as routine practice; terrain/CFIT is not the operative threat at this field. The Highveld's height above sea level is a *performance* issue (§3.5), not a terrain-clearance one.

### 3.2 Airborne conflict / traffic 🟧
FAOR runs full radar coverage — **Johannesburg Radar** sectored West/South/East plus a Director position activated during peak hours — over two full-length parallel runway pairs (03L/21R and 03R/21L). As South Africa's principal hub this sustains continuous high traffic density during banks; expect vectoring and standard dual-parallel-dependent sequencing. Johannesburg Area North/South (ACC) and Johannesburg Information (FIS) sector the surrounding FIR (**FAJA** — Johannesburg FIR; see [Africa Airspace brief](../../../../airspace/africa.md)). AIP note: on VHF-system failure, published fallback frequencies exist per sector (§8) — brief this as a comms-degraded contingency at a busy hub.

### 3.3 Runway excursion 🟧
RWY 21R carries a **450 m displaced threshold** (LDA 3,971 m vs TORA 4,421 m) — brief the correct LDA when 21R is the landing runway, not the full runway length. No other displaced thresholds published. RWY 03R/21L (3,405 m) is fully symmetric with no displacement. Both runway pairs close nightly for maintenance on a rotating schedule (03L/21R Mon/Tue 2230–0300 and Tue/Wed 2230–0300; 03R/21L Wed/Thu and Thu/Fri 2230–0300) — a scheduling and NOTAM watch-item, not an excursion risk per se, but relevant to late-night ops planning.

### 3.4 Weather threat 🟧
The Highveld summer (roughly Oct–Apr) brings **afternoon convective thunderstorm activity**, sometimes severe, with associated gusty/shifting surface wind, hail and heavy rain — a recognised seasonal reliability driver at this field. Winter (May–Aug) is dry, clear and cold, with the operative concern shifting toward the **hot-and-high performance regime reversing seasonally in the shoulder/summer months** rather than winter weather. No dedicated fog/low-vis climatology figure was found in the reachable AIP extract for FAOR specifically — treat CAT II ILS infrastructure as the standing mitigation for any low-vis event. See §14.

### 3.5 Operational considerations 🟥
**FAOR is a textbook hot-and-high aerodrome.** At 5,558 ft field elevation, and with Johannesburg summer daytime temperatures routinely well above ISA, the **density altitude frequently sits materially above the nominal field elevation** — this is real-world, widely-documented behaviour for this field (Highveld summer afternoons commonly push density altitude toward or beyond 8,000–9,000 ft equivalent) 🟧 (no field-specific density-altitude table sourced this pass — general aviation-industry knowledge, not an AIP figure). The operative consequence: **takeoff performance at FAOR is frequently thrust/climb-gradient-limited rather than runway-length-limited**, even though the runway itself (4,421 m on 03L) is long by any absolute standard. Reduced payload/fuel on hot afternoons is a real planning trade, not a formality. See [`OM E — High-Elevation Aerodrome Operations`](../../../../../flight-ops/high-elevation-aerodrome-operations.md) for the governing method (density altitude, TODR growth, net climb-gradient/SID-minimum-gradient compliance, engine-out escape, and the EFB take-off performance application policy) — this brief does not restate the AFM/OFP numbers, which must be computed for the day.

---

## 4. Cautions & Warnings

- 🟥 **Hot-and-high performance is the standing planning item at this field** — always confirm the day's density-altitude-driven RTOW/climb-gradient at dispatch; do not assume the long runway removes the constraint.
- 🟥 **CAT II holding-point visual illusion (AIP-published):** when cleared past the CAT II holding points on Taxiways A/B to the CAT I holding point for RWY 03L, the green centreline lights illuminate all the way onto the runway once stop bars are deselected — this can give the false impression that a runway-entry clearance has been obtained. Visual cues may differ from the actual ATC clearance received; verify the clearance, not just the lights.
- 🟥 **Do not request RWY 03L for landing** — the AIP explicitly notes it is predominantly the departure runway; expect 03R/21L for arrivals in the 03-configuration.
- 🟧 **RWY 21R has a 450 m displaced threshold** (LDA 3,971 m) — brief the correct landing distance, not the full published runway length.
- 🟧 **Iron and steel works ~5 NM SE of the field** releases hot ignited gas at unspecified times (day and night) that may cause **severe turbulence to 500 ft AGL** — a genuine low-level turbulence hazard on that side of the field.
- 🟧 A building obstruction penetrates the Code F aircraft safety zone adjacent to Taxiway A (between TWY E and TWY F, 53.258 m from the taxiway centreline) — all Code F aircraft (80 m wingspan) to taxi with extreme caution in that area.
- 🟧 Rotating nightly runway-pair closures for maintenance (§3.3) — check NOTAM for the current schedule before planning a late-night movement.

---

## 5. Aerodrome category, restrictions & crew qualification

- **Special-airport / category:** Not operator-categorised as a restricted-crew "special airport" in the AIP; the standing crew-briefing items are the **hot-and-high performance regime** and the **CAT II holding-point visual-illusion caution** (§4). 🟥
- **Crew-qualification gate:** No CAT II/III currency table found specific to FAOR in the reachable AIP extract, but CAT II ILS is published on all four runway ends — confirm crew/aircraft CAT II currency before planning a low-vis approach. 🟧
- **Operating restrictions / bans:** No intersection takeoffs and no engine run-ups 2000–0400 (§12); rotating nightly runway-pair maintenance closures (§3.3); no RNP AR restriction found in reachable sources — verify current AIRAC. 🟧
- **Overflight / entry / permits:** Standard international arrival; no special state permit required beyond normal South African entry requirements. 🟩
- **Operations notes:** ANSP/ATC — **ATNS** (Air Traffic and Navigation Services); Airport operator — **Airports Company South Africa (ACSA)**; Apron Office (non-ATC) on 122.65 MHz handles parking allocation and hazard information.

---

## 6. General / hours / services

| Item | Value | Flag |
|---|---|---|
| ATS hours | H24 | 🟩 |
| AD operating hours | H24 | 🟩 |
| Night / curfew restrictions | No hard curfew; no RWY/TWY-intersection takeoffs and no engine run-ups 2000–0400 | 🟩 |
| RFF category | CAT 9 (can accommodate CAT 10) | 🟩 |
| Fuel | Jet A-1 only, H24 — ORTAFS | 🟩 |
| PCN | Runway-specific — see §7; taxiways range PCN 50–71/F/A/W/U, aprons PCN 40–66/R/A/W/U | 🟩 |
| Customs | H24 | 🟩 |
| Handling / FBO | Bidair, Menzies, Swissport | 🟩 |

---

## 7. Runways & declared distances

| RWY | Dimensions | Surface / PCN | TORA | TODA | ASDA | LDA | Notes |
|---|---|---|---|---|---|---|---|
| 03L | 4,421 × 60 m | Asphalt / PCN 71/F/A/W/U | 4,421 m | 4,691 m | 4,482 m | 4,421 m | Predominantly the departure runway |
| 21R | 4,421 × 60 m | Asphalt / PCN 71/F/A/W/U | 4,421 m | 4,521 m | 4,508 m | **3,971 m** | **THR displaced 450 m** |
| 03R | 3,405 × 60 m | Asphalt / PCN 71/F/A/W/U | 3,405 m | 3,465 m | 3,462 m | 3,405 m | Predominantly used for arrivals |
| 21L | 3,405 × 60 m | Asphalt / PCN 71/F/A/W/U | 3,405 m | 3,465 m | 3,462 m | 3,405 m | Predominantly used for arrivals |

*Source: AIP South Africa (ATNS), AD 2 FAOR 2.12/2.13. Threshold elevations: 03L 5,558 ft, 21R 5,505 ft, 03R 5,510 ft, 21L 5,494 ft. All distances in metres.*

---

## 8. Communications

| Service | Callsign | Frequency | Hours | Notes |
|---|---|---|---|---|
| ATIS | Johannesburg ATIS | 126.20 | H24 | Dedicated ATIS |
| Delivery | Clearance Delivery | 121.7 / 121.9 | Mon–Fri 0400–1830, Sat/Sun 0500–1830 | Outside hours, service via Ground on 121.9 |
| Ground (SMC) | O R Tambo Ground | 121.9 | H24 | Arriving aircraft pass registration/parking bay on first contact |
| Tower | Tower West 118.1 (0400–1900) · Tower East 118.6 (Mon–Fri 0500–1700, Sat 0700–1600, Sun 0700–1700) | Mixed | After-hours coverage by Tower West or SMC | Two tower positions by sector |
| Approach | Johannesburg Radar West 123.7 (0500–1700) / South 124.5 (H24) / East 124.5 (H24) / Director 121.4 (peak hours) | H24/HX mixed | Radar West combines onto 124.5 outside 0500–1700 | |
| Apron | O R Tambo Apron | 122.65 | H24 | Non-ATC — parking/hazard information only |
| Centre / FIR | Johannesburg Area North 126.7 (H24) / Area South 128.3 (0430–1800) or 126.7 (1800–0430); Johannesburg Central FIC/ACC 120.3 (H24) | H24 | See [Africa Airspace brief](../../../../airspace/africa.md) for the Johannesburg FIR (FAJA) | |

*Source: AIP South Africa, AD 2 FAOR 2.18. VHF-failure fallback frequencies are separately published (ACC North 134.0, APP 134.4, Tower 120.85) — see current AIP for the full contingency table.*

---

## 9. Navaids

| Aid | Ident | Freq | Hours | Notes |
|---|---|---|---|---|
| DVOR/DME | JSV | 115.2 MHz / CH99X | H24 | Scalloping possible on radial 090; 50 W |
| ILS LOC 03L | JSI | 110.3 MHz | H24 | CAT II; front-course sector 2.5° |
| ILS GP 03L | — | 335 MHz | H24 | CAT II; angle 3° |
| ILS LOC 03R | JNI | 109.1 MHz | H24 | CAT II; front-course sector 1°38′ |
| ILS GP 03R | — | 331.4 MHz | H24 | CAT II; angle 3° |
| ILS LOC 21L | JAI | 109.9 MHz | H24 | CAT II; front-course sector 1°36′ |
| ILS GP 21L | — | 333.8 MHz | H24 | CAT II; angle 3° |
| ILS/DME 21R | JBI | 110.9 MHz | H24 | AIP: "expect clearance for ILS Z unless otherwise directed" |
| ILS GP 21R | — | 333.8 MHz | H24 | CAT II |

*Source: AIP South Africa, AD 2 FAOR 2.19. All four runway ends carry CAT II ILS — a strong low-vis capability for a Highveld field prone to convective weather.*

---

## 10. Arrival

- **Transition altitude / level:** TA 8,000 ft; TL by QNH — verify current chart. 🟧
- **Speed:** Standard 250 KIAS below FL100 — confirm no local override on current chart.
- **Preferential runway logic:** Wind-driven 03↔21 configuration; within a configuration, 03R/21L is the primary arrival runway pair, with 03L/21R reserved predominantly for departures (§1/§4).
- **Approaches (names only — verify minima on current AIRAC charts):**

| RWY | Approach | IAF | FAF/FAP alt | Notes |
|---|---|---|---|---|
| 03L | ILS Z / ILS Y (CAT II) | Per chart | Per chart | Landing not normally requested here |
| 03R | ILS Z / ILS X / ILS W (CAT II) | Per chart | Per chart | Primary arrival runway in 03-config |
| 21L | ILS Z / ILS X (CAT II) | Per chart | Per chart | Primary arrival runway in 21-config |
| 21R | ILS / VOR Z / VOR Y | Per chart | Per chart | Expect ILS Z unless otherwise directed |

- **STARs (names only):** AVAGO, NIBEX, STANDERTON, OKPIT, WITBANK, AVILO (RNAV and conventional variants published per runway — verify current AIRAC).
- **LVP:** CAT II infrastructure on all four ends is the standing mitigation for convective-season low-vis events; exact RVR/trigger figures not confirmed this pass. 🟧
- **Missed approach watch-items:** Terrain is not the driver (open Highveld) — the operative missed-approach concern is re-sequencing into a busy dual-parallel radar environment.

---

## 11. Departure

- **SIDs (names only — fly the charted version):** EGMEN, APDAK, VASUR, RAGUL, OVALA, NESAN, GRASMERE, EXOBI/EXOSI, NORVA, HEIDELBERG, LANSERIA, GEROX (RNAV) — runway-specific variants published for 03L/R and 21L/R; verify current AIRAC.
- **RNP / climb-gradient requirements:** 🟥 Given the hot-and-high performance regime (§3.5), **confirm the type can meet the published SID minimum climb gradient at the planned weight/elevation/temperature at dispatch** — see [`OM E — High-Elevation Aerodrome Operations`](../../../../../flight-ops/high-elevation-aerodrome-operations.md) §4.
- **Take-off minima:** Published per AIP; exact figures not confirmed this pass. 🟧
- **Start-up / push-back:** Push-back mandatory from A/B/C/D/E/F/G apron stands for aircraft ≥12,000 kg or wingspan >24 m, except designated self-manoeuvring stands; contact Apron Control 122.65 MHz prior to top of descent/before positioning for parking-bay allocation and pushback notification.
- **ATC slot / CTOT & clearance:** No IATA slot-coordination level found in the reachable AIP extract — treat as uncoordinated/Level 1 pending confirmation. 🟧
- **De-icing:** **NIL** — no de-icing facilities published (consistent with a warm-climate Highveld field; frost is a winter-morning consideration rather than a snow/ice one — verify locally in season).

---

## 12. Noise & Environmental

- **Noise abatement (NAP):** No runway/taxiway-intersection takeoffs between 2000–0400; standard noise-abatement procedures per AIP ENR 1.5 §9.1 apply.
- **Night noise / dB limits:** No specific per-movement dB limit found; the operative restriction is the intersection-takeoff/run-up ban above.
- **Engine run-up restrictions:** No engine run-ups 2000–0400 without prior permission from the airport manager, except in an emergency.
- **Reverse thrust / idle-reverse policy:** Not confirmed in reachable sources — verify locally. 🟧

---

## 13. Ground operations

- **Stands for our types:** 🟧 Multiple apron groups (A–G) with varying PCN; automated docking system on A1R–A13, C1–C8 and E1–E13. Code F (65 m+ wingspan) restricted from certain taxi lanes when other Code F traffic is present on Taxiway A past D Apron — see AIP AD 2.9 for the full (extensive) stand/taxi caveat list.
- **Push-back:** Mandatory from A/B/C/D/E/F/G apron stands for aircraft ≥12,000 kg or wingspan >24 m; select stands (C9–C12, C13–C24, D31–D48, G1/G3/G5, F1–F7) are self-manoeuvre-compatible within wingspan limits.
- **Standard taxi routes:** Confirmed with Ground/Apron on the day; numerous named-junction cautions published (Taxiway M code-C-only with tow-in/out, Taxiway B/M intersection bend, Jet Centre hangar gate 47 m width).
- **Hot spots / tight taxiways:** 🟥 A **published hot-spot chart** exists (AD 2.24); notable items include the TWY B/M intersection bend south-bound to RWY 03L threshold, the CAT II/CAT I holding-point visual-illusion junction on TWY A/B (§4), and multiple jet-blast caution points at TWY E where it crosses RWY 03L/21R.
- **Follow-me:** Available on request for arriving aircraft when low-vis procedures are below RVR 350 m.

---

## 14. Weather & seasonal (durable)

- **Climate / prevailing wind:** Highveld subtropical highland climate; wind generally light-to-moderate and variable by synoptic pattern, with the 03↔21 runway configuration selected by the day's wind.
- **Seasonal hazards:** **Afternoon convective thunderstorm season (approx. Oct–Apr)** — sometimes severe, with gusty/shifting wind, hail and heavy rain; the **hot-and-high density-altitude effect peaks on hot summer afternoons** (§3.5), the field's defining year-round performance consideration. Winter (May–Aug) is dry and cold with frost a possible early-morning consideration.
- **Local effects:** No notable terrain/sea-breeze local effects — the Highveld plateau is broadly flat around the field; the ~5 NM SE industrial hot-gas turbulence source (§4) is a localised exception.

> **Live weather — pull at planning (T-2h):** METAR, TAF, TREND, SIGMET/AIRMET. Not stored here.

---

## 15. NOTAMs

> **Pull at planning (T-2h).** Perishable — not stored here. Check: rotating nightly runway-pair maintenance closures, navaid U/S, lighting, obstacle/crane, RFF downgrade, GPS/RAIM, current density-altitude/performance NOTAMs. Source: AIS / OFP NOTAM block.

---

## 16. Fuel & alternate planning notes

- **Typical role for us:** **Home base** — the primary K Global hub in the Southern Africa network.
- **Nearest suitable alternates:** Company preferred alternates **[FALA](../fala/index.md)** (Lanseria Intl, ~22 NM NW) and **FAGC** (Grand Central, plain reference — no OM C pack yet) `[VAMSYS mirror 2026-07-26]` — confirm suitability, runway/RFF adequacy and current minima per leg. Both alternates are also Highveld hot-and-high fields — the performance consideration does not disappear on diversion.
- **Fuel-uplift notes:** Jet A-1 only, H24, hydrant system 3,000 L/min on all aprons except M; four bowsers (60,000 L total) plus one 20,000 L de-fuel truck. See [`OM E — Fuel Policy`](../../../../../flight-ops/fuel-policy.md).
- **Range/perf flags for our fleet:** 🟥 See [`OM B — Fleet Capability Matrix`](../../../../../fleet/capability-matrix.md) (Table D, hot-and-high sensitivity column) — the heavier/high-MTOW types carry the largest hot-and-high payload penalty at this field; compute the day's RTOW at dispatch rather than assuming standard-day performance.

---

## 17. Fleet-specific notes (optional)

- As the Southern Africa base, FAOR is the network's hot-and-high reference field — see [`OM B — Fleet Capability Matrix`](../../../../../fleet/capability-matrix.md) for per-type hot-and-high sensitivity. No single type is exempt from the density-altitude planning trade on a hot Highveld afternoon; the [`OM E — High-Elevation Aerodrome Operations`](../../../../../flight-ops/high-elevation-aerodrome-operations.md) method (§4, EFB take-off performance application) is the correct tool for computing the day's RTOW/climb-gradient rather than reading distances off this brief.

---

## 18. Open items (🟧 — confirm against AIP / current AIRAC)

- **Magnetic variation** — sourced to a 2018 epoch; current-day value not independently re-confirmed against current AIRAC.
- **CAT II RVR/trigger minima** — ILS CAT II confirmed on all four runway ends; exact RVR figures not confirmed this pass.
- **Take-off minima** — not confirmed this pass.
- **Slot-coordination level** — no IATA level found in reachable sources; treat as unconfirmed.
- **Field-specific density-altitude figures** — the hot-and-high characterisation (§3.5) is well-established general aviation-industry knowledge for this field but no field-specific DA table was sourced this pass; compute per AFM/OFP for the day.
- **Reverse thrust / idle-reverse policy and engine run-up restriction detail** — not confirmed in reachable sources.
- **SID/STAR current-AIRAC names and gradient tables** — names listed are from the AIP chart index; verify against the current cycle before use.

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim material (current-AIRAC charts) informs content but is not listed here.*

- **AIP South Africa (ATNS/SACAA), AD 2 FAOR** — https://cad.atns.co.za/SmartAIM/EAipPackages/15-OCT-22/2022-10-15-000000/html/eAIP/FA-AD-2-FAOR-en-US.html (retrieved 2026-07-26). *ARP/elevation, runways/declared distances, RFF, communications, navaids, ATS airspace, ground operations, obstacles, noise abatement.*
- OurAirports — https://ourairports.com/airports/FAOR/ and /runways.html (retrieved 2026-07-26). *Cross-check only.*

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-26 | Built from AIP South Africa (ATNS); K Global fields from live VAMSYS; 4-page pack. |
