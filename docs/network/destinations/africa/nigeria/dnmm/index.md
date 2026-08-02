# DNMM — Murtala Muhammed · Airport Briefing

**DNMM / LOS** · Ikeja, Lagos State, Nigeria · Africa
**Version** v0.1 · **Updated** 2026-07-26 · **Status** Draft — AIP Nigeria (NCAA)-derived, K Global network-hub build

> **Read-me:** Planning aid for the sim, not a chart. Static data is drawn from AIP Nigeria (NCAA/NAMA)-derived aerodrome charts plus standard public aeronautical data; approaches/SIDs/STARs are listed **by name/ident only or flagged not-yet-confirmed** — fly the charted current-AIRAC version. Live weather/NOTAMs are pulled at planning (§14/§15). Open 🟧 items are listed in §18. Flag legend 🟥 restriction/hazard · 🟧 caution/unverified · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| ARP (lat/long) | N06°34′38″ / E003°19′16″ (6.57737, 3.32116) `[OurAirports/AIP cross-check]` |
| Field elevation | **135 ft / 41 m AMSL** |
| Mag variation | 🟧 **~4° W** per a 2010-cycle chart extract — not re-confirmed against current AIRAC |
| Time zone | UTC+1 (WAT) — no DST observed |
| Runway(s) | **18L/36R** 2,745 × 45 m (asphalt) · **18R/36L** 3,900 × 60 m (asphalt) — parallel pair |
| Preferential runway | Wind/traffic dependent; 🟧 which heading (18 vs 36) is prevailing not independently confirmed this pass — confirm current wind rose/AIP |
| Longest LDA | 3,900 m (18R/36L) |
| Approaches | **ILS/DME** RWY 18L (ident **ILA**) and RWY 18R (ident **ILB**); **VOR/DME** both (ident **LAG**) — 🟧 no published approach found for the reciprocal 36L/36R ends in the reachable extract, verify current AIRAC |
| RFF category | 🟧 **CAT 9** per a 2010-cycle source — not re-confirmed; **may be marginal for Code-F-class traffic** (e.g. B748/A388) if unchanged — confirm current AIP category |
| Control type | **Mixed radar/procedural** — Lagos TRACON radar around the field; **Lagos ACC** (NAMA) works the wider Kano (DNKK) FIR en route — see [Kano (DNKK) FIR brief](../../../../airspace/fir/africa/kano-dnkk.md) |
| Elevation class | Sea-level / coastal (135 ft) — **not** hot-and-high |
| Special-airport status | Not operator-categorised as restricted in reachable sources; standing crew-briefing items are the **RWY 18R touchdown-zone bird hazard** and **uncontrolled-vehicle runway-crossing** cautions (both AIP-sourced) — see §5 |
| Customs / PoE | **Yes** — major international gateway, H24 expectation 🟧 (exact desk hours not confirmed) |
| K Global category | **L** `[VAMSYS mirror 2026-07-26]` |
| K Global base | **YES — network hub (West Africa)** `[VAMSYS mirror 2026-07-26]` |
| Company preferred alternates | **DNAA**, **DIAP** (Abidjan), **DGAA** (Accra) `[VAMSYS mirror 2026-07-26]` |
| Taxi-in / taxi-out (VAMSYS) | **12 min / 15 min** `[VAMSYS mirror 2026-07-26]` |

---

## 2. Validation summary

| Domain | Flag | Note |
|---|---|---|
| Terrain / CFIT | 🟩 | Flat coastal Lagos Lagoon/Atlantic-fringe site; no close-in high terrain. |
| Runway length vs fleet perf | 🟧 | 3,900 m (18R/36L) non-limiting for any K Global type; the 2,745 m runway (18L/36R) is adequate for narrowbody/typical widebody weights but confirm current-AIRAC performance for the heaviest Code-F-class types before planning it. |
| Approach availability / minima | 🟧 | ILS/DME published for 18L and 18R; no approach confirmed for the reciprocal 36L/36R in the reachable extract — verify current AIRAC before assuming a north-config approach exists. |
| Airspace / traffic / control | 🟧 | Busiest terminal in the Kano FIR; mixed radar/procedural per AFI practice — Nigerian radar-serviceability concerns are a live watch item (see FIR brief). |
| Weather / seasonal hazard | 🟧 | Wet-season (Apr–Oct) convective squall lines/thunderstorms; dry-season (Nov–Mar) harmattan haze reaches the coast in attenuated form. |
| Curfew / slots / hours | 🟩 | AD hours H24; no curfew or IATA slot coordination found in reachable sources. |
| RFF category vs our types | 🟧 | CAT 9 (dated source) — confirm headroom for Code-F-class (A388/B748) traffic before basing such ops here. |
| Fuel availability | 🟧 | Jet A-1/100LL per AIP; Nigeria's aviation-fuel **scarcity** risk has eased since the Dangote refinery ramp-up, but **price remains extremely high and volatile** — a real dispatch/tankering consideration (§16). |
| Customs / handling / security | 🟩 | Major PoE; **NAHCO** (HQ on-field) and **SAHCO** (ISAGO-certified at Lagos) both operate here. |

---

## 3. Threat & Error Management (TEM)

### 3.1 CFIT / Terrain 🟩
DNMM sits at 135 ft AMSL on the flat Lagos coastal/lagoon fringe — no close-in high terrain affects arrival, departure or missed-approach paths. Non-issue field for terrain; verify the MSA ring on the current chart as routine practice.

### 3.2 Airborne conflict / traffic 🟧
DNMM is the busiest aerodrome in the single-FIR **Kano (DNKK)** structure, worked by **Lagos ACC/TRACON** (NAMA). Surveillance is radar-assisted around the field but the wider FIR is mixed radar/procedural per AFI practice, and Nigerian radar-serviceability has been publicly reported as a watch item — do not assume continuous surveillance. The airport operates two physically and operationally separate terminal complexes (international MMIA and the privately-run domestic MMA2) which adds ground-coordination complexity during peak banks. Cross-ref [Kano (DNKK) FIR brief](../../../../airspace/fir/africa/kano-dnkk.md).

### 3.3 Runway excursion 🟧
No displaced thresholds were found in the reachable extract for either runway pair (TORA/TODA/ASDA/LDA reported equal on both ends) — **not independently re-confirmed against current AIRAC**. A sourced chart caution warns against confusing the runway with the parallel taxiways on visual approach, and notes the RWY 18R PAPI is usable on the left side only — both are genuine excursion/approach-path threats, not administrative notes.

### 3.4 Weather threat 🟧
Lagos sits in a **tropical savanna climate (Köppen Aw)** with a pronounced wet season (roughly Apr–Oct) driven by the seasonal ITCZ position, bringing organised convective squall lines and heavy tropical downpours that can cut visibility rapidly. The dry season (Nov–Mar) brings **harmattan dust haze** reaching the coast in an attenuated form relative to northern Nigeria — real but generally less severe here than at Kano. See §14.

### 3.5 Operational considerations 🟧
Plan around: (1) a sourced AIP caution that **bird activity is a hazard on the approach and touchdown zone of RWY 18R** — brief accordingly; (2) a sourced caution that **uncontrolled vehicles frequently cross the runways** — maintain vigilance on approach/departure and during taxi; (3) the **split-terminal operation** (international MMIA vs. the privately-operated domestic MMA2) which can complicate connections and shared ground-service continuity; and (4) **Jet A-1 price volatility** (§16) as a live network-tankering planning input rather than a supply-scarcity risk.

---

## 4. Cautions & Warnings

- **Bird hazard on the approach and touchdown zone of RWY 18R** — exercise caution (AIP-sourced).
- **Uncontrolled vehicles frequently cross the runways** — maintain vigilance during approach, departure and taxi (AIP-sourced).
- **Do not confuse the runway with the parallel taxiways** when making a visual approach (AIP-sourced).
- **PAPI on RWY 18R is usable on the left side only** (AIP-sourced).
- 🟧 No published approach confirmed for the reciprocal **36L/36R** ends in the reachable extract — do not assume a north-configuration ILS exists without checking the current AIRAC.
- Harmattan haze can reduce visibility at Lagos even this far south in the dry season — do not assume the coastal location is immune.
- Two **independently operated terminals** (international MMIA / domestic MMA2, privately run) — do not assume shared handling or connection continuity between them.

---

## 5. Aerodrome category, restrictions & crew qualification

- **Special-airport / category:** Not operator-categorised as a restricted "special airport" in reachable sources; the standing crew-briefing items are the **RWY 18R bird hazard**, the **runway/taxiway-confusion caution**, and the **dated RFF category** headroom question for Code-F-class traffic. 🟧
- **Crew-qualification gate:** None specific found in reachable sources — verify current AIRAC. 🟧
- **Operating restrictions / bans:** None found in reachable sources; confirm current AIRAC for any RNP AR/circling restriction. 🟧
- **Overflight / entry / permits:** Nigeria requires overflight/landing permits for foreign scheduled/non-scheduled operations — a real dispatch item; see [Kano (DNKK) FIR brief §10](../../../../airspace/fir/africa/kano-dnkk.md). Standard international PoE entry. 🟧
- **Operations notes:** ANSP — **NAMA** (Lagos ACC/TRACON); airport operator — **FAAN** (Federal Airports Authority of Nigeria); international-terminal domestic-terminal split (MMIA / MMA2, the latter privately operated by Bi-Courtney Aviation Services). Ground handlers **NAHCO** (headquartered on-field) and **SAHCO** (ISAGO-certified at Lagos/Abuja/Kano).

---

## 6. General / hours / services

| Item | Value | Flag |
|---|---|---|
| ATS hours | H24 | 🟩 |
| AD operating hours | H24 (per AIP chart) | 🟩 |
| Night / curfew restrictions | None published/found | 🟩 |
| RFF category | CAT 9 (2010-cycle source) | 🟧 |
| Fuel | Jet A-1 and 100LL per AIP; supply improved with the Dangote refinery ramp-up but price remains very high/volatile | 🟧 |
| PCN | Not confirmed in reachable extract | 🟧 |
| Customs | Yes — major int'l PoE; exact desk hours not confirmed | 🟧 |
| Handling / FBO | **NAHCO** (HQ on-field) and **SAHCO** (ISAGO-certified at Lagos) | 🟩 |

---

## 7. Runways & declared distances

| RWY | Dimensions | Surface / PCN | TORA | TODA | ASDA | LDA | Notes |
|---|---|---|---|---|---|---|---|
| 18L | 2,745 × 45 m | Asphalt / PCN not confirmed 🟧 | 2,745 m | 2,745 m 🟧 | 2,745 m 🟧 | 2,745 m | Slope ‑0.5%; no displaced threshold found |
| 36R | 2,745 × 45 m | Asphalt / PCN not confirmed 🟧 | 2,745 m | 2,745 m 🟧 | 2,745 m 🟧 | 2,745 m | Slope +0.5%; reciprocal of 18L |
| 18R | 3,900 × 60 m | Asphalt / PCN not confirmed 🟧 | 3,900 m | 3,900 m 🟧 | 3,900 m 🟧 | 3,900 m | Slope ‑0.1%; primary/longer runway |
| 36L | 3,900 × 60 m | Asphalt / PCN not confirmed 🟧 | 3,900 m | 3,900 m 🟧 | 3,900 m 🟧 | 3,900 m | Slope +0.1%; reciprocal of 18R |

*Source: an AIP-derived aerodrome chart extract (2010 amendment cycle) mirrored publicly at virtualairlines.eu. TORA/LDA figures are chart-sourced; TODA/ASDA are assumed equal to TORA in the absence of published stopway/clearway data — 🟧 flagged, not independently confirmed. No displaced thresholds found for either runway pair in the reachable extract. All distances in metres, converted from the source feet figures.*

---

## 8. Communications

| Service | Callsign | Frequency | Hours | Notes |
|---|---|---|---|---|
| ATIS | Lagos ATIS | 123.8 | H24 (assumed) | 🟧 |
| AFIS | Lagos West / Lagos East | 120.9 / 127.3 | — | 🟧 Role/sector split not independently confirmed for a controlled international hub — verify current AIP |
| Tower | Lagos Tower | 118.1 | H24 (assumed) | 🟧 |
| Approach | Lagos Approach | 124.3 (secondary 124.7 per an older chart) | — | 🟧 |
| Ground | Not clearly separated in reachable sources (chart lists a combined "GND TWR AFIS APP RAD CTL ATIS" facility group; possible additional freq 121.9/119.1) | — | — | 🟧 Confirm current discrete Ground frequency |
| Centre / FIR | **Lagos ACC** (NAMA) | Per current AIRAC | H24 | See [Kano (DNKK) FIR brief](../../../../airspace/fir/africa/kano-dnkk.md) |

*Source: OurAirports frequency listing cross-checked against a 2010-cycle AIP chart extract; the frequency set is broadly consistent between the two but several facility-role assignments (Ground, secondary Approach) are not independently confirmed. Treat as 🟧 pending a live-AIRAC cross-check.*

---

## 9. Navaids

| Aid | Ident | Freq | Hours | Notes |
|---|---|---|---|---|
| VOR/DME | LAG | 113.7 | H24 (assumed) | Lagos VOR/DME, on field |
| ILS/DME RWY 18L | ILA | 110.3 | H24 (assumed) | Front-course track 183° |
| ILS/DME RWY 18R | ILB | 108.1 | H24 (assumed) | Front-course track 183°; primary/longer runway |

*No NDB confirmed in the reachable extract. No published navaid found serving the reciprocal 36L/36R ends — 🟧 verify current AIRAC.*

---

## 10. Arrival

- **Transition altitude / level:** TA 3,500 ft; TL assigned by ATC per the source chart notation — verify current chart. 🟧
- **Speed:** Standard 250 KIAS below FL100 (ICAO norm) — confirm no local override on current chart.
- **Preferential runway logic:** Wind/traffic dependent; which heading (18 vs 36) is prevailing at Lagos is not independently confirmed this pass. 🟧
- **Approaches (names/idents only — verify minima on current AIRAC charts):**

| RWY | Approach | IAF | FAF/FAP alt | Notes |
|---|---|---|---|---|
| 18L | ILS/DME (ILA) / VOR/DME (LAG) | Per current chart | Per current chart | Verify current minima |
| 18R | ILS/DME (ILB) / VOR/DME (LAG) | Per current chart | Per current chart | Verify current minima; primary/longer runway |
| 36L/36R | — none confirmed — | — | — | 🟧 No approach found for these ends in the reachable extract; verify current AIRAC |

- **STARs (names only):** Not confirmed in reachable research pass — pull the current-AIRAC STAR list at planning. 🟧
- **LVP:** Not confirmed; Lagos is not sourced as a fog-prone field, but heavy wet-season convective rain can cut visibility rapidly — treat as a tactical, not a standing, LVP driver. 🟧
- **Missed approach watch-items:** Terrain is not the driver (flat coastal site); the operative concern is re-sequencing into the busiest terminal in the Kano FIR.

---

## 11. Departure

- **SIDs (names only — fly the charted version):** Not confirmed in reachable research pass — pull the current-AIRAC SID list at planning. 🟧
- **RNP / climb-gradient requirements:** Not confirmed for DNMM specifically; Nigeria (Kano FIR) publishes Free Route Airspace at FL245+ — see [`OM E — PBN and RNP Operations`](../../../../../flight-ops/pbn-and-rnp-operations.md).
- **Take-off minima:** Not confirmed in reachable sources. 🟧
- **Start-up / push-back:** Not confirmed; coordinate with the assigned ground handler (NAHCO/SAHCO). 🟧
- **ATC slot / CTOT & clearance:** No IATA slot coordination or CTOT/ATFM regime found in reachable sources for Nigerian airports — treat as unregulated pending confirmation. 🟧
- **De-icing:** **NIL** — tropical climate, no de-icing requirement.

---

## 12. Noise & Environmental

- **Noise abatement (NAP):** Not confirmed in reachable sources. A source chart carries a general departure note ("climb to 3,500 ft before making a left turn out") that may reflect a local noise/obstacle routing — verify on the current chart before relying on it. 🟧
- **Night noise / dB limits:** None found; the field operates H24 with no published curfew despite residential proximity (Ikeja). 🟧
- **Engine run-up restrictions:** Not confirmed. 🟧
- **Reverse thrust / idle-reverse policy:** Not confirmed. 🟧

---

## 13. Ground operations

- **Stands for our types:** A 2010-cycle chart shows widebody/international parking at Piers D and E (AGNIS/PAPA docking guidance); confirm the current stand map given subsequent terminal changes. 🟧
- **Push-back:** Mandatory-vs-self-manoeuvre policy not confirmed. 🟧
- **Standard taxi routes:** Confirm with Ground/Apron on the day.
- **Hot spots / tight taxiways:** 🟥 **Uncontrolled vehicles frequently cross the runways** (AIP-sourced) — a genuine incursion hazard, not an administrative note. A chart caution also warns not to confuse the runway with the parallel taxiways on visual approach.
- **Follow-me:** Availability not confirmed. 🟧

---

## 14. Weather & seasonal (durable)

- **Climate / prevailing wind:** Tropical savanna (Köppen **Aw**); coastal Lagos Lagoon/Atlantic-fringe location.
- **Seasonal hazards:** **Wet season (≈ Apr–Oct)** brings organised convective squall lines, thunderstorms and heavy tropical downpours driven by the seasonal ITCZ position — the dominant en-route/terminal weather hazard (cross-ref [Africa Airspace brief](../../../../airspace/africa.md)). **Dry season (≈ Nov–Mar)** brings **harmattan dust haze**, reaching the coast in an attenuated form relative to northern Nigeria but still a real visibility factor.
- **Local effects:** Onshore breeze off the Atlantic/Lagos Lagoon; no notable terrain-driven local effect (flat coastal site).

> **Live weather — pull at planning (T-2h):** METAR, TAF, TREND, SIGMET/AIRMET. Not stored here.

---

## 15. NOTAMs

> **Pull at planning (T-2h).** Perishable — not stored here. Check: runway/taxiway closures, navaid U/S, lighting, obstacle/crane, RFF downgrade, bird-hazard bulletins, GPS/RAIM, radar-serviceability notices. Source: AIS / OFP NOTAM block.

---

## 16. Fuel & alternate planning notes

- **Typical role for us:** **Network hub (West Africa)** — the primary base and departure/return field for this part of the K Global network.
- **Nearest suitable alternates:** Company preferred alternates [**DNAA**](../dnaa/index.md) (Abuja), **DIAP** (Abidjan, Côte d'Ivoire), **DGAA** (Accra, Ghana) `[VAMSYS mirror 2026-07-26]` — confirm suitability, runway/RFF adequacy and current minima per leg.
- **Fuel-uplift notes:** Jet A-1 and 100LL per AIP. Nigeria's aviation-fuel **scarcity** risk has eased materially since the Dangote Petroleum Refinery ramp-up (late 2025/2026), but **price remains extremely high and volatile** — reported in the roughly ₦2,200–3,300/litre range in 2026, up from under ₦900 at end-2023 — a real network-tankering planning input. See [`OM E — Fuel Policy`](../../../../../flight-ops/fuel-policy.md).
- **Range/perf flags for our fleet:** The 3,900 m main runway (18R/36L) is non-limiting for any K Global type; the 2,745 m runway (18L/36R) is adequate for narrowbody/typical widebody weights but confirm current performance for the heaviest Code-F-class types. See [`OM B — Fleet Capability Matrix`](../../../../../fleet/capability-matrix.md). 🟧

---

## 17. Fleet-specific notes (optional)

- As the West Africa network hub, DNMM is a base field for the K Global fleet generally rather than a single-type consideration — see [`OM B — Fleet Capability Matrix`](../../../../../fleet/capability-matrix.md). The dated (2010-cycle) **CAT 9 RFF category** is a standing headroom caution for Code-F-class widebody types (A388/B748-class) until re-confirmed against current AIP. 🟧

---

## 18. Open items (🟧 — confirm against AIP / current AIRAC)

- **Magnetic variation** (~4°W) — sourced to a 2010-cycle chart; not independently re-confirmed.
- **RFF category (CAT 9)** — sourced to a 2010-cycle chart; confirm current category and headroom for Code-F-class traffic.
- **Approach availability for 36L/36R** — only 18L/18R approaches found in the reachable extract; confirm whether the reciprocal ends have published procedures on current AIRAC.
- **Preferential runway/config logic (18 vs 36)** — not independently confirmed.
- **PCN, declared TODA/ASDA distinctions, and displaced-threshold status** — assumed equal to TORA/LDA in the absence of stopway/clearway data; not independently re-confirmed.
- **Ground/discrete Approach frequency assignment** — combined facility listing in the source chart; current discrete frequencies not confirmed.
- **SIDs/STARs (current names), take-off minima, LVP/RVR triggers** — not obtained in this research pass; pull the live current-AIRAC procedure list before use.
- **Current stand/gate map** — sourced chart is 2010-vintage; confirm against current terminal configuration.
- **Noise-abatement/departure-routing note** ("climb to 3,500 ft before left turn") — sourced to the same dated chart; verify on current AIRAC.
- **Customs/immigration desk hours** — not confirmed; assumed major-hub H24 coverage.
- **PCN and current fuel supplier/into-plane hours** — not confirmed.

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim material may inform content but is not listed here.*

- **AIP Nigeria-derived aerodrome chart extract (Navtech/Navigraph, 2009–2010 amendment cycle)**, mirrored publicly — https://www.virtualairlines.eu/charts/DNMM.pdf (retrieved 2026-07-26). *Runway/declared distances, ILS/VOR idents & frequencies, communications, AIP-sourced cautions. Treat exact current-cycle figures as needing a live-AIP cross-check.*
- OurAirports — https://ourairports.com/airports/DNMM/ , /runways.html, /frequencies.html (retrieved 2026-07-26). *ARP/elevation/runway/frequency cross-check.*
- SKYbrary — https://skybrary.aero/airports/dnmm (retrieved 2026-07-26). *Climatology (Köppen Aw), runway cross-check.*
- Wikipedia — "Murtala Muhammed International Airport" — https://en.wikipedia.org/wiki/Murtala_Muhammed_International_Airport (retrieved 2026-07-26).
- NAHCO Aviance — https://nahcoaviance.com/ (retrieved 2026-07-26). *Ground handler, HQ on-field.*
- SAHCO Plc — https://sahcoplc.com/ (retrieved 2026-07-26). *ISAGO-certified ground handler at Lagos.*
- Nigeria Housing Market — "Dangote Refinery Ends Jet Fuel Scarcity; Price Pressure Remains" — https://www.nigeriahousingmarket.com/news/dangote-refinery-ends-jet-fuel-scarcity-price-pressure-remains (retrieved 2026-07-26). *Fuel supply/price context.*
- CNBC Africa — "As jet fuel costs rise, operational disruptions mount for Nigerian airlines" — https://www.cnbcafrica.com/2026/as-jet-fuel-costs-rise-operational-disruptions-mount-for-nigerian-airlines (retrieved 2026-07-26). *Fuel price/operational-impact context.*
- Companion briefs: [Kano (DNKK) FIR](../../../../airspace/fir/africa/kano-dnkk.md), [Africa Airspace brief](../../../../airspace/africa.md).

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-26 | Built from AIP Nigeria (NCAA); K Global fields from live VAMSYS; 4-page pack. |
