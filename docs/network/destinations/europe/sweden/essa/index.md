# ESSA — Stockholm Arlanda · Airport Briefing

**ESSA / ARN** · Sigtuna, Stockholm County, Sweden · Europe
**Version** v0.1 · **Updated** 2026-07-26 · **Status** Draft — LFV AIP-derived, K Global build

> **Read-me:** Planning aid for the sim, not a chart. Static data is drawn from the LFV AIP Sweden (AD 2 ESSA) — core physical data confirmed against an archived AIP cycle (2012–2014) and cross-checked with current public data; approaches/SIDs/STARs are listed **by name only or flagged not-yet-confirmed** — fly the charted current-AIRAC version. Live weather/NOTAMs are pulled at planning (§14/§15). Open 🟧 items are listed in §18. Flag legend 🟥 restriction/hazard · 🟧 caution/unverified · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| ARP (lat/long) | N59°39′07″ / E017°55′07″ (59.6519, 17.9186) `[LFV AIP AD 2 ESSA 2.2]` |
| Field elevation | **137 ft / 42 m AMSL** (reference temperature +22.2°C) |
| Mag variation | 🟧 **5° E (epoch 2015), annual change +0.1°** per an older AIP cycle — current-day value not independently re-confirmed against current AIRAC |
| Time zone | UTC+1 (CET) / UTC+2 (CEST, EU DST observed) |
| Runway(s) | **01L/19R** 3,301 × 45 m (asphalt) · **01R/19L** 2,500 × 45 m (asphalt) · **08/26** 2,500 × 45 m (asphalt, crosswind runway, peak-hour use only) |
| Preferential runway | 01L/19R and 01R/19L are **true independent parallel runways** capable of simultaneous operations; **08/26 is used only during peak hours** for environmental/noise reasons — see §3.2 |
| Longest LDA | 3,301 m (01L/19R) |
| Approaches | **ILS CAT III on 01L, 01R and 19L**; **ILS CAT I on 19R and 26**; **RWY 08 has a localizer only, no confirmed glidepath** — asymmetric pattern, brief the correct category per runway end 🟧 |
| RFF category | **CAT 9** 🟩 |
| Control type | **Radar** — Arlanda CTR (Class C, Sector East/West); FIR/ACC Sweden (ESAA) — no dedicated FIR brief in-library, see [Airspace/General — Europe](../../../../airspace/europe.md) 🟧 |
| Elevation class | Near sea-level (137 ft) — **not** hot-and-high; the performance/reliability driver here is **winter snow/ice contamination and clear-ice cold-soak risk**, not density altitude |
| Special-airport status | 🟥 **Slot-coordinated — mandatory allocation for essentially all flights** per the AIP (reads as a fully-coordinated regime); asymmetric CAT III/CAT I/localizer-only pattern across the three runways — see §5 |
| Customs / PoE | **Yes** — Terminal 5 is the primary Schengen/non-Schengen customs hub; Terminal 3 has **no** customs facility 🟧 |
| K Global category | **L** `[VAMSYS mirror 2026-07-26]` |
| K Global base | **No** `[VAMSYS mirror 2026-07-26]` |
| Company preferred alternates | **ESOW, ESMS** (cross-country/in-country — plain ICAO reference, no link) `[VAMSYS mirror 2026-07-26]` |
| Taxi-in / taxi-out (VAMSYS) | **15 min / 17 min** `[VAMSYS mirror 2026-07-26]` |

---

## 2. Validation summary

| Domain | Flag | Note |
|---|---|---|
| Terrain / CFIT | 🟩 | Flat, low-lying, forested Uppland terrain; no close-in high terrain. Non-factor for the field itself — though forest cover under departure paths has been a factor in past accident sequences (§3.4). |
| Runway length vs fleet perf | 🟩 | 3,301 m (01L/19R) is ample for any K Global widebody; 2,500 m runways (01R/19L, 08/26) are non-limiting for typical operations at this field. |
| Approach availability / minima | 🟧 | Asymmetric CAT III (01L/01R/19L) vs CAT I (19R/26) vs localizer-only (08) pattern — brief the correct category per assigned runway; sub-category (IIIA/IIIB) not confirmed. |
| Airspace / traffic / control | 🟩 | Major Nordic hub; 01L/19R and 01R/19L can run fully independent simultaneous operations including in IMC — a real operational strength, not primarily a workload risk. |
| Weather / seasonal hazard | 🟥 | Nordic winter snow/ice and **clear-ice cold-soak risk** is the field's defining hazard — directly implicated in a landmark 1991 dual-engine-failure accident at this field. |
| Curfew / slots / hours | 🟥 | AIP language describes **mandatory slot allocation for essentially all flights** — a fully-coordinated regime; no explicit night curfew found but confirm before assuming unrestricted night ops. |
| RFF category vs our types | 🟩 | CAT 9 — above any of our fleet's typical requirement. |
| Fuel availability | 🟩 | Jet A-1 via hydrant fuelling, "no limitations" reported; delivered by ship/rail/pipeline via Gävle–Brista. |
| Customs / handling / security | 🟧 | Terminal 5 is the confirmed Schengen/non-Schengen hub post-2025 consolidation; Terminal 3 has no customs facility — confirm current gate assignment for our operation. |

---

## 3. Threat & Error Management (TEM)

### 3.1 CFIT / Terrain 🟩
ESSA sits at 137 ft AMSL in flat, low-lying, heavily forested Uppland terrain north of Stockholm — there is **no close-in high terrain** relevant to arrival, departure or missed-approach paths. This is a non-issue field for terrain in the classic CFIT sense; however, the surrounding forest cover is not uniformly suitable for an off-airport forced landing close to the field (see §3.2 historical note). Verify the MSA ring on the current chart as routine practice.

### 3.2 Airborne conflict / traffic 🟩
Arlanda's **01L/19R and 01R/19L are true independent parallel runways** and can be operated **simultaneously, independently, including in instrument meteorological conditions** — a significant operational asset rather than a workload driver, since the two strips do not depend on each other for spacing. **RWY 08/26 is the crosswind runway, built specifically to relieve the north-south pair, but is used only during peak hours for environmental/noise reasons** rather than continuously — do not expect it as a routine third strip. The field's landmark accident, **SAS Flight 751 ("the Gottröra crash," 27 December 1991)**, involved both engines failing after ingesting clear ice shed from the wings shortly after takeoff, with the crew successfully force-landing in a forested field near Gottröra — all 129 aboard survived. This remains a widely cited case study in cold-weather wing-inspection and de-icing procedure discipline, directly relevant to this field's TEM. Cross-ref [Airspace/General — Europe](../../../../airspace/europe.md) 🟧 (no Sweden-specific FIR brief in-library).

### 3.3 Runway excursion 🟧
No displaced thresholds are indicated in the AIP for 01L/19R, 01R/19L, or 26 (TORA=LDA at each end); **RWY 08 carries a 300 m clearway extending TODA to 2,800 m** without a corresponding LDA change. A historical excursion event is on record: a **7 October 1997 heavy-landing/nosewheel-steering-failure departure from RWY 26** into the grass (no fatalities, aircraft written off) — a reminder that runway-excursion risk is real at this field even without geometry-driven contributing factors. Winter contamination (snow/ice) is the principal seasonal excursion driver — braking-action reporting matters.

### 3.4 Weather threat 🟥
Arlanda's climate is **humid continental (Köppen Dfb)** with **cold winters and frequent, persistent snow cover**. The field's signature cold-weather hazard is **clear-ice formation on cold-soaked wings overnight**, directly implicated in the 1991 Gottröra accident (§3.2) — pre-departure wing inspection discipline and de-icing/anti-icing procedure adherence are the standing mitigation. Ice-related loss of control on takeoff has recurred at this field historically (a 1987 turboprop gear-failure/runway-excursion event tied to icing). See §14 and [`OM E — Cold Weather Operations`](../../../../../flight-ops/cold-weather-operations.md).

### 3.5 Operational considerations 🟧
Plan around: (1) the **asymmetric ILS-category pattern** across the three runways (CAT III on 01L/01R/19L, CAT I only on 19R/26, localizer-only on 08) — confirm the assigned runway's actual capability before relying on autoland; (2) the **mandatory, near-universal slot-coordination regime**, which reads stronger than a simple Level 2 designation and has direct schedule-integrity consequences; and (3) **runway-specific de-icing routing** — departures via 01R/19L de-ice at a dedicated remote apron, while 01L/19R and 08/26 departures de-ice near the terminal, a real dispatch-planning distinction (§9 Dispatch page).

---

## 4. Cautions & Warnings

- **CAT III is not available on all runway ends** — 01L, 01R and 19L carry CAT III; **19R and 26 are CAT I only; RWY 08 has no confirmed glidepath (localizer only)** — never assume autoland capability without checking the assigned runway end.
- **RWY 08/26 is a peak-hour-only crosswind runway**, not a routine third strip — do not expect it available outside high-demand periods.
- **Clear-ice cold-soak risk is a real, field-specific hazard** — the 1991 Gottröra dual-engine-failure accident traces directly to ice shed from cold-soaked wings; brief pre-departure wing inspection discipline seriously in this climate.
- **De-icing location depends on departure runway** — 01R/19L departures de-ice at remote Apron M; 01L/19R and 08/26 departures de-ice near the terminal — confirm the correct routing for the assigned runway (see Departure page §7).
- **Slot allocation is mandatory for essentially all flights** — schedule-integrity failures have direct network consequences at this field.
- **Terminal 3 has no customs facility** — arriving international passengers there are bussed to Terminal 5; relevant to connection-time planning, not tactical flying.

---

## 5. Aerodrome category, restrictions & crew qualification

- **Special-airport / category:** Not operator-categorised as a restricted-crew "special airport"; the standing crew-briefing items are the **asymmetric ILS-category pattern** and the **winter clear-ice/cold-soak environment**. 🟧
- **Crew-qualification gate:** CAT II/III currency required for full-capability winter low-vis ops into 01L/01R/19L; confirm crew/aircraft currency before planning a low-vis arrival on those ends specifically — 19R/26 do not support CAT III. 🟧
- **Operating restrictions / bans:** No explicit night curfew found in reachable sources; RWY 08/26 restricted to peak-hour use only (environmental reasons); no RNP AR ban or circling restriction found — verify current AIRAC. 🟧
- **Overflight / entry / permits:** Standard EU/Schengen international arrival; no special state permit required. 🟩
- **Operations notes:** ANSP/airport operator — **Swedavia** (Swedish state airport operator). Slot coordinator (per an older AIP cycle) — **Airport Coordination Sweden (ACS)** — confirm current coordinator of record.

---

## 6. General / hours / services

| Item | Value | Flag |
|---|---|---|
| ATS hours | H24; ATS/customs/immigration/health/fuelling/handling/de-icing all H24 per AIP | 🟩 |
| AD operating hours | Admin office MON–FRI 0700–1530 local; operational services H24 | 🟩 |
| Night / curfew restrictions | No explicit curfew found in reachable sources — verify current AIP/Swedavia noise regulations | 🟧 |
| RFF category | **CAT 9** | 🟩 |
| Fuel | Jet A-1 via hydrant, "no limitations" reported; 100LL available at Apron M9 with 1-hour prior notice | 🟩 |
| PCN | Runway-specific — see §7 | 🟩 |
| Customs | Terminal 5 primary Schengen/non-Schengen hub (post-2025 T4 consolidation); Terminal 3 has **no** customs facility | 🟧 |
| Handling / FBO | Ground handling mandatory for all flights (hospital/state-aircraft exempt); specific handler for our operation not confirmed | 🟧 |

---

## 7. Runways & declared distances

| RWY | Dimensions | Surface / PCN | TORA | TODA | ASDA | LDA | Notes |
|---|---|---|---|---|---|---|---|
| 01L | 3,301 × 45 m | Asphalt / PCN 120 F/A/X/T | 3,301 m | 3,301 m | 3,301 m | 3,301 m | CAT III |
| 19R | 3,301 × 45 m | Asphalt / PCN 120 F/A/X/T | 3,301 m | 3,301 m | 3,301 m | 3,301 m | CAT I only |
| 01R | 2,500 × 45 m | Asphalt / PCN 90 F/B/X/T | 2,500 m | 2,500 m | 2,500 m | 2,500 m | CAT III |
| 19L | 2,500 × 45 m | Asphalt / PCN 90 F/B/X/T | 2,500 m | 2,500 m | 2,500 m | 2,500 m | CAT III |
| 08 | 2,500 × 45 m | Asphalt / PCN 90 F/B/X/T | 2,500 m | **2,800 m** (300 m clearway) | 2,500 m | 2,500 m | Localizer only — no confirmed glidepath; crosswind, peak-hour use only |
| 26 | 2,500 × 45 m | Asphalt / PCN 90 F/B/X/T | 2,500 m | 2,500 m | 2,500 m | 2,500 m | CAT I only; crosswind, peak-hour use only |

*Source: LFV AIP AD 2 ESSA 2.12/2.13 (figures traced to an AIRAC cycle dated 2012–2014 — core runway geometry/declared distances are very unlikely to have changed since, but should be cross-checked against the current AIRAC, confirmed live at AMDT 4/2026, before treating as audit-grade). No displaced thresholds found. All distances in metres.*

---

## 8. Communications

| Service | Callsign | Frequency | Hours | Notes |
|---|---|---|---|---|
| ATIS | Arrival 119.000 / Departure 121.625 | — | H24 (also via ACARS/ARINC datalink) | |
| Delivery | Arlanda Clearance Delivery | 121.825 | H24 | |
| Ground | Arlanda Ground | 121.700 / 121.925 / 121.975 | H24 | Push-back/taxi |
| Tower | Arlanda Tower | 118.500 (01L/19R & CTR Sector West) · 125.125 (01R/19L) · 128.725 (08/26 & CTR Sector East) · 121.500 (emergency) · 123.100 (SAR, O/R) | H24 | Multiple positions — take the assigned frequency |
| Approach | TMC Stockholm Control | 123.750 | H24 | Terminal control |
| Centre / FIR | Sweden ACC (ESAA) | Per current AIRAC | H24 | See [Airspace/General — Europe](../../../../airspace/europe.md) 🟧 |
| MET office | Arlanda MET Office | 122.600 | H24 | |
| De-icing (remote Apron M) | Arlanda Apron | 131.425 | HO | Stand assignment after Ground release — see Departure page §7 |

*Source: LFV AIP AD 2 ESSA 2.17/2.18 (2012–2014 cycle extract) — corroborated closely by a current independent public source (SkyVector), giving confidence the frequency structure is still valid, though exact current-cycle values should be cross-checked against AMDT 4/2026.*

---

## 9. Navaids

| Aid | Ident | Freq | Hours | Notes |
|---|---|---|---|---|
| DVOR/DME | ARL | 116.00 (CH107X) | H24 | Bearing info sector 210–265° may be disturbed below FL070 |
| ILS 01L | SSA | LOC 109.90 / GP 333.80 | H24 | **CAT III** (Class III/E/4); GP 3.0°, RDH 56 ft |
| ILS 19R | NSA | LOC 110.70 / GP 330.20 | H24 | **CAT I** (Class I/E/2); GP 3.0°, RDH 51 ft; LOC range limited (18–33 km depending on sector) |
| ILS 01R | TSA | LOC 109.35 / GP 331.85 | H24 | **CAT III** (Class III/E/4); RDH 51 ft |
| ILS 19L | USA | LOC 111.35 / GP 332.15 | H24 | **CAT III** (Class III/E/4); RDH 51 ft |
| LOC 08 | WSA | 109.55 | H24 | No confirmed glidepath — localizer/NDB approach only 🟧 |
| NDB (RWY 08 area) | L08 WA | 348 kHz | H24 | Range 15 NM |
| ILS 26 | ESA | LOC 110.10 / GP 334.40 | H24 | **CAT I** (Class I/D/2); RDH 53 ft |

*All idents/frequencies sourced to the LFV AIP 2012–2014 cycle extract; long-lived infrastructure, cross-checked with a current independent public source (SkyVector: VOR ARL 116.00; DMEs ASE 114.45, ANW 112.05, ASW 113.75). Not independently re-confirmed against the current AIRAC (AMDT 4/2026).*

---

## 10. Arrival

- **Transition altitude / level:** TA 5,000 ft AMSL (Arlanda CTR); TL by QNH — not independently confirmed this pass. 🟧
- **Speed:** Standard 250 KIAS below FL100 (EU/ICAO norm) — confirm no local override on current chart.
- **Preferential runway logic:** 01L/19R and 01R/19L run fully independent simultaneous operations, including in IMC; RWY 08/26 activated only at peak hours for capacity/environmental reasons. Runway-in-use deviations occur for approach-aid unserviceability, CAT II/III conditions, crosswind exceeding limits, poor braking action, CB/wind-shear activity, maintenance, or ATC traffic-load balancing — **not** granted merely to shorten taxi/routing.
- **Approaches (names only — verify minima on current AIRAC charts):**

| RWY | Approach | Notes |
|---|---|---|
| 01L | ILS CAT III (SSA) | |
| 19R | ILS CAT I (NSA) | Reciprocal of 01L |
| 01R | ILS CAT III (TSA) | |
| 19L | ILS CAT III (USA) | |
| 08 | Localizer (WSA) + NDB (L08 WA) | No confirmed glidepath — non-precision only 🟧 |
| 26 | ILS CAT I (ESA) | |

- **STARs (names only):** Not confirmed in reachable public sources — pull the current-AIRAC STAR list at planning. 🟧
- **LVP:** CAT III on 01L/01R/19L is the standing mitigation for winter low-vis conditions; 19R/26/08 do not support CAT III — plan accordingly. Exact RVR/trigger figures not confirmed this pass. 🟧
- **Missed approach watch-items:** Terrain is not the driver (flat, low-lying); the operative concern is re-sequencing within the independent-parallel-runway environment and correct-runway/CAT-category awareness.

---

## 11. Departure

- **SIDs (names only — fly the charted version):** Not confirmed in reachable public sources — pull the current-AIRAC SID list at planning. 🟧
- **RNP / climb-gradient requirements:** AIP references FMS/RNAV SID procedures (non-RNAV-capable aircraft must add "REQ NFMS" to a datalink clearance request) — confirm gradient/equipage per SID on the current chart. See [`OM E — PBN and RNP Operations`](../../../../../flight-ops/pbn-and-rnp-operations.md).
- **Take-off minima:** Published per AIP — exact figures not confirmed this pass. 🟧
- **Start-up / push-back:** **Push-back is compulsory at all nose-in stands**; power-back is never a substitute. Departure clearance requestable via datalink (DCL) from EOBT-25 to EOBT+10 min, monitored on 121.825; RTF clearance always supersedes a DCL clearance.
- **ATC slot / CTOT & clearance:** AIP describes **mandatory slot allocation for essentially all flights** (requests due ≥3 hours before ETD/ETA) — a fully-coordinated regime. EUROCONTROL Network Manager ATFM/CTOT regulation applies as standard practice for a congested Nordic hub.
- **De-icing:** **Runway-dependent routing** — departures via 01R/19L de-ice at remote **Apron M (positions M5–M9)** on frequency 131.425; departures via 01L/19R or 08/26 de-ice at the stand or a designated spot near the terminal (Terminal 2 area). See [`OM E — Cold Weather Operations`](../../../../../flight-ops/cold-weather-operations.md).

---

## 12. Noise & Environmental

- **Noise abatement (NAP):** No named NADP confirmed in reachable sources. 🟧 Take-off charges are partly based on aircraft environmental/noise performance; the airport has trialled Continuous Descent Approaches ("green landings").
- **Night noise / dB limits:** Not confirmed in reachable sources — no explicit curfew found; verify locally. 🟧
- **Engine run-up restrictions:** Not confirmed in reachable sources. 🟧
- **Reverse thrust / idle-reverse policy:** Not confirmed in reachable sources. 🟧
- **RWY 08/26 peak-hour-only restriction** is the clearest documented noise/environmental operating constraint at this field — its use is deliberately limited rather than continuous. Infrastructure changes at Arlanda (e.g. the Terminal 5 pier expansion) have historically required **Environmental Court of Appeals** approval, confirming Sweden's environmental-permit regime directly governs this field.

---

## 13. Ground operations

- **Stands for our types:** Four terminals (2/3/4/5 — there has never been a Terminal 1). **Terminal 5** is the main SAS/Norwegian hub, 31 bridge-connected stands across Piers D/E/F, and **some gates can accept the A380** since 2018. **Terminal 2** has 8 bridge-connected stands. **Terminal 4** (also called "T5 – C Gates") has 14 bridge-connected stands, but as of October 2025 has no independent check-in/security/customs of its own — folded into Terminal 5 operationally. **Terminal 3** (walk-out, airstair boarding, no jet bridges, no customs) serves domestic/regional flights only. | 🟧 |
- **Push-back:** Compulsory at all nose-in stands; power-back never a substitute.
- **Standard taxi routes:** Confirm with Ground/Apron on the day; **taxiway bridges** connect the main terminal complex to RWY 01R/19L (a notable AIP-remarked feature).
- **Hot spots / tight taxiways:** Not confirmed by name in reachable sources; the **TWY U/W taxiway-bridge area** is AIP-flagged as a notable feature — arriving aircraft must not use an exit taxiway requiring a turn >90°; taxi/tow prohibited between apron entries ZF–ZG, ZH–ZK, ZL–ZN; max wingspan 24 m on Apron S between SA–SC; jet-blast restriction on Apron F when another aircraft is parked behind. 🟧
- **Follow-me:** Not independently confirmed as a standard service; A380 movements reportedly do require appropriate ground escort at comparable Nordic hubs — confirm locally. 🟧

---

## 14. Weather & seasonal (durable)

- **Climate / prevailing wind:** Humid continental (Köppen Dfb), warm-summer subtype — variable weather with a large seasonal temperature range; summers can bring frequent thunderstorms, winters bring frequent snowfall and persistent snow cover.
- **Seasonal hazards:** **Clear-ice cold-soak formation on wings overnight** is the field's most significant documented cold-weather hazard (1991 Gottröra accident, §3.2/3.4). Winter brings a recognised snow/ice season with dedicated clearing-priority order (runway > taxiway > apron > roads) and multiple ground de-icing chemical/mechanical resources. Exact de-icing-season start/end dates not confirmed — reasonably inferred as roughly Oct/Nov–Apr for this climate, but treat as inference pending a sourced figure. 🟧
- **Local effects:** No notable terrain/sea-breeze effects at this inland, low-lying field; winter snow/ice is the standout local effect. RWY 08/26 exists specifically to handle crosswind conditions off the dominant N-S axis, implying crosswind is operationally significant enough to warrant a dedicated third runway.

> **Live weather — pull at planning (T-2h):** METAR, TAF, TREND, SIGMET/AIRMET. Not stored here.

---

## 15. NOTAMs

> **Pull at planning (T-2h).** Perishable — not stored here. Check: runway/taxiway closures, navaid U/S, CAT III equipment status per runway end, lighting, obstacle/crane, RFF downgrade, GPS/RAIM for RNP procedures, current de-icing-apron status. Source: official AIS / OFP NOTAM block.

---

## 16. Fuel & alternate planning notes

- **Typical role for us:** **Destination** (not a K Global base). `[VAMSYS mirror 2026-07-26]`
- **Nearest suitable alternates:** Company preferred alternates **ESOW** (Örebro) and **ESMS** (Malmö) `[VAMSYS mirror 2026-07-26]` — confirm suitability, runway/RFF adequacy and current minima per leg.
- **Fuel-uplift notes:** Jet A-1 via hydrant, "no limitations" reported (delivered by ship to Gävle, rail to Brista, pipeline to the field); 100LL at Apron M9 with 1-hour notice. See [`OM E — Fuel Policy`](../../../../../flight-ops/fuel-policy.md).
- **Range/perf flags for our fleet:** Field length non-limiting on the main runway (3,301 m) for any K Global type. See [`OM B — Fleet Capability Matrix`](../../../../../fleet/capability-matrix.md) for type-by-type range/performance reference.

---

## 17. Fleet-specific notes (optional)

- No type-specific performance penalty identified at this field's elevation/length. See [`OM B — Fleet Capability Matrix`](../../../../../fleet/capability-matrix.md). The operative planning consideration at ESSA is the asymmetric ILS-category pattern and winter cold-soak/de-icing discipline rather than aircraft performance — see [`OM E — Cold Weather Operations`](../../../../../flight-ops/cold-weather-operations.md).

---

## 18. Open items (🟧 — confirm against AIP / current AIRAC)

- **Magnetic variation** — sourced to an older AIP cycle (epoch 2015); current-day value not independently re-confirmed.
- **Declared distances / PCN table** — sourced to a 2012–2014 AIP cycle; core geometry unlikely to have changed, but not re-verified against AMDT 4/2026.
- **ILS sub-category (IIIA/IIIB)** on 01L/01R/19L not confirmed from a primary table this pass.
- **ATC frequencies** — sourced to a 2012–2014 AIP cycle, corroborated by a current tier-4 source; not current-AIRAC-verified.
- **SIDs/STARs (current names)** — not obtained this pass; pull the live current-AIRAC procedure list.
- **En-route FIR/ACC exact designator** for Sweden (commonly referenced elsewhere as ESAA/Sweden Control) — not independently confirmed this pass.
- **Current slot-coordination level/coordinator** — AIP language describes near-universal mandatory allocation; reconcile against the current IATA level designation and confirm current coordinator of record.
- **Explicit night curfew hours** — none found in reachable sources; confirm none exists before assuming unrestricted night ops.
- **Taxiway hot spots (by ID)** — not confirmed.
- **Current gate assignment for our operation** given the 2024–2025 Terminal 3/4/5 consolidation.
- **Ground handling agent(s)** for our operation.
- **Precise de-icing-season dates and throughput figures.**

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim material (current-AIRAC charts) informs content but is not listed here.*

- **LFV AIP Sweden, AD 2 ESSA 2.2–2.20**, archived cycle carrying AIRAC AMDT dates 2012–2014 — mirrored via https://opennav.com/pdf/ESSA/ES_AD_2_ESSA_en.pdf (retrieved 2026-07-26). *ARP/elevation/runway geometry/declared distances, ILS idents/categories/frequencies, ATC frequencies, RFF category, slot-coordination language, de-icing procedure detail, ground-ops remarks.* **Current effective cycle confirmed live at AMDT 4/2026 (eff. 2026-06-11) via https://aro.lfv.se — treat exact current-cycle figures as needing a live-AIP cross-check.**
- OurAirports — https://ourairports.com/airports/ESSA/ (retrieved 2026-07-26). *ARP/elevation/runway cross-check.*
- SkyVector — https://skyvector.com/airport/ESSA (retrieved 2026-07-26). *Frequency/navaid cross-check.*
- SKYbrary — ESSA airport page — https://skybrary.aero/airports/essa (retrieved 2026-07-26). *Climate classification.*
- Wikipedia — "Stockholm Arlanda Airport" — https://en.wikipedia.org/wiki/Stockholm_Arlanda_Airport (retrieved 2026-07-26). *Runway configuration logic, terminal/pier history and 2024–2025 consolidation, de-icing zones, fuel delivery chain, environmental permit history.*
- Wikipedia — "Scandinavian Airlines Flight 751" — https://en.wikipedia.org/wiki/Scandinavian_Airlines_Flight_751 (retrieved 2026-07-26). *1991 Gottröra clear-ice dual-engine-failure accident.*

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-26 | Built from LFV AIP (archived cycle, cross-checked vs current AMDT 4/2026 portal); K Global fields from live VAMSYS; 4-page pack. |
