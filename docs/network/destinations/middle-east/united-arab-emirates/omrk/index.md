# OMRK — Ras Al Khaimah Intl · Airport Briefing

**OMRK / RKT** · Ras Al Khaimah, United Arab Emirates · Middle East
**Version** v0.1 · **Updated** 2026-07-26 · **Status** Draft

> **Read-me:** Planning aid for the sim, not a chart. Static data is drawn from the airport operator's own published operations reference plus standard public aeronautical data; the GCAA eAIP AD 2 OMRK chapter was identified but renders via a JavaScript frameset that could not be independently extracted this pass — treat figures below as tier-3/4 sourced pending a direct AIP cross-check. Approaches/SIDs/STARs are listed **by name/type only or flagged not-yet-confirmed** — fly the charted current-AIRAC version. Live weather/NOTAMs are pulled at planning (§14/§15). Open 🟧 items are listed in §18. Flag legend 🟥 restriction/hazard · 🟧 caution/unverified · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| ARP (lat/long) | 25°36′48″N / 055°56′20″E (25.6135, 55.9388) — consistent across the airport operator's own published coordinates, OurAirports and Wikipedia 🟩 |
| Field elevation | **102 ft / 31 m AMSL** `[OurAirports]` 🟧 — Wikipedia and this network's prior stub carry a differing figure (94 ft / 29 m); not independently reconciled against a primary AIP table this pass, treat 102 ft as the working value pending verification |
| Mag variation | **1° E** — per the airport operator's published navaid table; no AIRAC/epoch date stated with the figure 🟧 |
| Time zone | UTC+4 (Gulf Standard Time / Asia-Dubai) — no daylight-saving observed |
| Runway(s) | **16/34**, 3,760 × 45 m, asphalt (ICAO Aerodrome Reference Code **4E**) — single runway, no reciprocal/crosswind option |
| Preferential runway | No published preferential-runway program found; single-runway field so wind is the only selection variable — **RWY 34 is the sole precision-approach runway** and is the practical default in marginal ceiling/visibility subject to tailwind limits 🟧 |
| Longest LDA | 3,760 m (both 16 and 34; no displaced threshold either end) |
| Approaches | **ILS CAT I on RWY 34** (localizer IRK, glidepath); **RWY 16 is non-precision only** — exact procedure name not confirmed 🟧 |
| RFF category | **CAT 7** provided full-time; **CAT 9** available with 40-minute prior notice 🟧 (confirm adequacy against the operating type's requirement — see [`OM B — Fleet Capability Matrix`](../../../../../fleet/capability-matrix.md)) |
| Control type | **Mixed** — Approach/Radar service Sun–Thu 0800–1400 local only (extendable by arrangement); **Approach Procedural service outside those hours**, including the Fri–Sat UAE weekend 🟧 |
| Elevation class | Near sea-level (102 ft) — **not** hot-and-high; the region's summer heat/density-altitude is a seasonal consideration, not a structural elevation driver |
| Special-airport status | Not operator-categorised. Standing crew-briefing items: single non-precision-only reciprocal runway, mixed radar/procedural control, a published PPR regime, and close-in mountainous terrain to the east — see §5 🟧 |
| Customs / PoE | **Yes** — full-time Customs, Immigration and Police Special Branch, covering the airport's H24 operating hours |
| K Global category | **Not set — not in VAMSYS** 🟧 |
| K Global base | **No** |
| Company preferred alternates | **Not in VAMSYS** 🟧 — as general operational geography only (not a sourced company-alternate list), the nearest major Gulf hubs are [Sharjah Intl (OMSJ)](../omsj/index.md), OMDB (Dubai Intl) and [Al Ain Intl (OMAL)](../omal/index.md)/OMAA (Abu Dhabi/Zayed Intl, the K Global Middle East bridge hub) |
| Taxi-in / taxi-out (VAMSYS) | **Not in VAMSYS** 🟧 |

---

## 2. Validation summary

| Domain | Flag | Note |
|---|---|---|
| Terrain / CFIT | 🟧 | Hajar Mountains terrain (Jebel Jais, ~1,934 m/6,345 ft, the UAE's highest peak) rises close east of the field; the field's own VOR/DME is published as unusable below stated altitudes in three sectors toward the east/southeast for this reason — see §3.1. |
| Runway length vs fleet perf | 🟧 | 3,760 m/45 m (ARC 4E) is generically ample for narrowbody types and most widebody at moderate weights, but no K Global type is currently validated at this field (not in VAMSYS). |
| Approach availability / minima | 🟧 | Only RWY 34 carries a precision approach (ILS CAT I); RWY 16 is non-precision only — a low-ceiling arrival is effectively RWY-34-only regardless of light tailwind. No CAT II/III capability. |
| Airspace / traffic / control | 🟧 | Radar approach service is published **Sun–Thu 0800–1400 local only** (extendable by arrangement); **Approach Procedural service applies outside those hours**, including the Fri–Sat weekend — brief non-radar technique accordingly. |
| Weather / seasonal hazard | 🟧 | Standard Gulf climatology (summer extreme heat/density altitude, shamal dust) per the regional area brief; no OMRK-specific frequency/severity statistic found. |
| Curfew / slots / hours | 🟥 | **Prior Permission Required (PPR)** for any flight between **2200–0800 local**, and PPR at any time for instrument-approach training, circuit work or qualifying cross-country flights — a soft curfew, not a walk-up overnight field. |
| RFF category vs our types | 🟧 | CAT 7 full-time / CAT 9 on 40-minute notice — confirm against the operating type's RFF requirement; no type currently assigned (not in VAMSYS). |
| Fuel availability | 🟩 | Jet A-1 and Avtur via the airport's own bowser service (ADNOC-sourced), H24 — 🟧 **no anti-icing (FSII) additive is included**; confirm own-aircraft cold-fuel handling requirement before uplift. |
| Customs / handling / security | 🟩 | Full-time Customs/Immigration/Police Special Branch as a licensed Port of Entry; the airport operates its own ground-handling FBO on-field. |

---

## 3. Threat & Error Management (TEM)

### 3.1 CFIT / Terrain 🟧
The **Hajar Mountains** rise close to the east of Ras Al Khaimah, culminating at **Jebel Jais (~1,934 m / 6,345 ft)** — the highest point in the UAE, within short range of the field. This is the same terrain belt flagged as a terminal consideration for OMRK/OMFJ approaches in the [Emirates (OMAE) FIR brief](../../../../airspace/fir/middle-east/emirates-omae.md) §8. The field's own VOR/DME (**RAV**, 113.600/CH83X) carries a published restriction directly attributable to this terrain: **unusable below 7,000 ft between radials 020–080 from 20–40 DME; below 7,000 ft beyond 40 DME between radials 050–090; and below 12,000 ft beyond 40 DME between radials 090–150.** Do not rely on RAV for terrain clearance within those sector/altitude combinations — fly the published MSA and current chart terrain data instead.

### 3.2 Airborne conflict / traffic 🟧
OMRK sits inside the **Emirates (OMAE) FIR** but away from the dense Dubai/Abu Dhabi terminal core, so traffic density itself is comparatively light. The operative caution is **control-type variability**: Approach/Radar service is published **Sun–Thu 0800–1400 local only** (extendable by arrangement), with an **Approach Procedural service outside those hours** — including the entire Fri–Sat UAE weekend. Crews arriving/departing outside the radar window should brief procedural (non-radar) technique: position reports, procedural separation, and no assumption of vectoring. Cross-ref the [Emirates (OMAE) FIR brief](../../../../airspace/fir/middle-east/emirates-omae.md) for the wider FIR's traffic and the live conflict-zone/GNSS-jamming picture, and the [Middle East area brief](../../../../airspace/middle-east.md) for the regional overflight-risk context — both durable-awareness documents that must be re-checked live at planning.

### 3.3 Runway excursion 🟧
Single runway **16/34**, no displaced threshold either direction. **Intersection departures are published** with materially reduced TORA — as low as **~1,566 m** from the shortest RWY 34 intersection (Intersection N) and **~2,004 m** from the shortest RWY 16 intersection (Intersection S) — confirm which intersection, if any, is assigned before accepting a reduced-distance departure; full-length is the default assumption absent an explicit intersection clearance. Minor runway slope is published (RWY 16 rising +0.24%, RWY 34 descending −0.24%) — non-limiting but worth including in a performance calculation.

### 3.4 Weather threat 🟧
Standard Gulf climatology applies: summer extreme heat and density-altitude effects, and **shamal-driven blowing dust** reducing visibility on occasion — both regional patterns described in the [Middle East area brief](../../../../airspace/middle-east.md) §11 rather than an OMRK-specific statistic. No aerodrome-specific frequency/severity data was found this pass.

### 3.5 Operational considerations 🟥
Three durable planning constraints stand out at this field: (1) **RWY 16 has no precision approach** — a low-ceiling arrival defaults to RWY 34 regardless of a light tailwind component, so check the tailwind limit before accepting it; (2) the **PPR requirement for any operation between 2200–0800 local**, and at any time for instrument-approach training/circuits/cross-country flights, turns an overnight or late-night rotation into an administrative planning item rather than a walk-up option (§5/§6); and (3) the published **Ground frequency (121.600) is for vehicles only** — aircraft taxi guidance is handled by Tower, not a separate ground frequency, which is worth briefing before an unfamiliar-field taxi (§8/§13).

---

## 4. Cautions & Warnings

- **RWY 16 is non-precision only; RWY 34 is the field's sole ILS/CAT I runway** — plan for RWY 34 in low-ceiling conditions and check the tailwind limit.
- **PPR required for any flight between 2200–0800 local**, and always for instrument-approach training, circuits or qualifying cross-country flights — not a walk-up field overnight.
- **Approach/Radar service is published Sun–Thu 0800–1400 local only** (extendable by arrangement) — Approach Procedural technique applies outside these hours, including the Fri–Sat weekend.
- **VOR/DME (RAV) is unusable below stated altitudes in three sectors east/southeast of the field**, due to the Hajar Mountains — do not rely on it for terrain clearance there; fly the MSA.
- **Jet A-1 supplied without an anti-icing (FSII) additive** — confirm your own aircraft's cold-fuel handling requirement before uplift.
- **The published Ground frequency (121.600) is for vehicles only** — aircraft taxi guidance comes from Tower, not a separate ground position.
- No published noise-abatement restriction ("No Restrictions are in place" per the airport's own operations reference) — but this has not been independently cross-checked against a primary AIP source. 🟧

---

## 5. Aerodrome category, restrictions & crew qualification

- **Special-airport / category:** Not operator-categorised as a restricted-crew "special airport" in reachable sources. Standing crew-briefing items are the **non-precision-only reciprocal runway**, the **mixed radar/procedural control regime**, and the **close-in Hajar Mountains terrain** to the east. 🟧
- **Crew-qualification gate:** No dedicated crew-qualification restriction published beyond standard type-rating currency; confirm operator SOP for a non-precision-approach-only reciprocal runway before assigning a low-experience crew to a RWY 16 arrival in marginal weather. 🟧
- **Operating restrictions / bans:** **PPR required for any flight operating between 2200–0800 local**, and **PPR at any time for instrument-approach training, circuit work, or qualifying cross-country flights.** 🟥
- **Overflight / entry / permits:** Standard UAE landing-permission process — a Landing Permission Request (operator, aircraft type/registration, callsign, crew, schedule, purpose, TCAS/ACAS-equipage confirmation, UAE/OMRK ban-free confirmation) is submitted via SITA/mail/fax to the airport Duty Officer, forwarded to RAK DCA for approval, and returned as a Landing Permit Number. A minimum UAE aviation-insurance requirement applies to all civil operators to/from/overflying the UAE (GCAA Information Bulletin 06/2010). 🟧
- **Operations notes:** ATC is provided by **Global Aerospace Logistics (GAL)** under GCAA licensing/oversight; the airport operates its **own ground-handling FBO**, based in the passenger terminal, for passenger, crew and cargo requirements. The aerodrome operator/regulator is the Ras Al Khaimah **Department of Civil Aviation (DCA)**.

---

## 6. General / hours / services

| Item | Value | Flag |
|---|---|---|
| ATS hours | H24 (Tower/Approach/ATIS); Radar service **Sun–Thu 0800–1400 local only**, extendable by arrangement — Approach Procedural service outside those hours | 🟧 |
| AD operating hours | H24 | 🟩 |
| Night / curfew restrictions | **PPR required 2200–0800 local** for any flight; PPR always for instrument-approach training/circuits/cross-country | 🟥 |
| RFF category | **CAT 7** full-time / **CAT 9** with 40-min prior notice (45 fire-fighters, 4 appliances + water tanker) | 🟧 |
| Fuel | Jet A-1 + Avtur, airport's own bowser service (ADNOC-sourced), H24; **no FSII/anti-ice additive included** | 🟧 |
| PCN | Runway PCN 57/F/B/W/T; stand/taxiway PCNs vary — see §7/§13 | 🟩 |
| Customs | Full-time — Customs, Immigration, Police Special Branch cover the airport's H24 hours | 🟩 |
| Handling / FBO | The airport's own ground-handling FBO (passenger + cargo); contact via Duty Officer / handling@rakairport.com | 🟩 |

---

## 7. Runways & declared distances

| RWY | Dimensions | Surface / PCN | TORA | TODA | ASDA | LDA | Notes |
|---|---|---|---|---|---|---|---|
| 16 | 3,760 × 45 m | Asphalt / PCN 57/F/B/W/T | 3,760 m | 3,760 m | 3,810 m | 3,760 m | Non-precision approach; rising slope +0.24%; no displaced threshold |
| 16 (Intersection N) | — | — | 2,218 m | 2,218 m | 2,268 m | — | Intersection take-off option |
| 16 (Intersection S) | — | — | 2,004 m | 2,004 m | 2,054 m | — | Intersection take-off option |
| 34 | 3,760 × 45 m | Asphalt / PCN 57/F/B/W/T | 3,760 m | 3,760 m | 3,760 m | 3,760 m | **Precision approach CAT I** (ILS); descending slope −0.24%; no displaced threshold |
| 34 (Intersection S) | — | — | 1,780 m | 1,780 m | 1,780 m | — | Intersection take-off option |
| 34 (Intersection N) | — | — | 1,566 m | 1,566 m | 1,566 m | — | Intersection take-off option — shortest published departure distance at the field |

*Source: airport operator's own published Operating Rules & Runway Information page (retrieved 2026-07-25); no independent AIP AD 2 cross-check achieved this pass (GCAA eAIP page identified but not renderable — see read-me). Shoulders 7.5 m per side, non-load-bearing. All distances in metres.*

---

## 8. Communications

| Service | Callsign | Frequency | Hours | Notes |
|---|---|---|---|---|
| ATIS | Ras Al Khaimah International Airport | 126.075 | H24 | Arrival/departure information |
| Delivery | — | — | — | No separate Delivery frequency published — expect clearance via Tower 🟧 |
| Ground | Ras Al Khaimah Ground | 121.600 | H24 | **Vehicles only** — not used for aircraft taxi guidance 🟧 |
| Tower | Ras Al Khaimah Tower | 118.250 | H24 | Aerodrome control; also handles aircraft taxi guidance in the absence of a published aircraft Ground frequency |
| Approach | Ras Al Khaimah Approach / Radar | 124.000 | H24 (Radar service Sun–Thu 0800–1400 local, extendable; Procedural outside) | See §3.2 |
| Centre / FIR | Emirates Area Control (OMAE) | Per current AIRAC | H24 | See [Emirates (OMAE) FIR brief](../../../../airspace/fir/middle-east/emirates-omae.md) |

*Source: airport operator's own published ATS Communication Facilities table (retrieved 2026-07-25); no independent AIP cross-check achieved this pass.*

---

## 9. Navaids

| Aid | Ident | Freq | Hours | Notes |
|---|---|---|---|---|
| VOR | RAV | 113.600 | H24 | Coverage 200 NM; 🟧 **unusable below stated altitudes in three sectors** due to Hajar Mountains terrain — see §3.1 |
| DME | RAV | CH83X | H24 | Co-located with VOR; same sector restriction applies |
| LOC RWY 34 | IRK | 110.500 | H24 | CAT I |
| GP RWY 34 | — | 329.600 | H24 | Angle 3.0°, RDH 60 ft |
| DME RWY 34 | IRK | CH42X | H24 | Co-located with GP; flight-checked range 25 NM; reads zero at touchdown |

*Source: airport operator's own published Radio Navigation and Landing Aids table (retrieved 2026-07-25); no independent AIP cross-check achieved this pass.*

---

## 10. Arrival

- **Transition altitude / level:** Not published / verify. 🟧
- **Speed:** Standard 250 KIAS below FL100 (ICAO norm) — confirm no local override on current chart.
- **Preferential runway logic:** Not formally published; single-runway field so wind is the deciding factor. RWY 34, as the sole precision-approach runway, is the practical default in marginal ceiling/visibility, subject to tailwind limits.
- **Approaches (names/types only — verify minima on current AIRAC charts):**

| RWY | Approach | IAF | FAF/FAP alt | Notes |
|---|---|---|---|---|
| 34 | ILS CAT I (IRK/GP) | Not confirmed 🟧 | Not confirmed 🟧 | Sole precision approach at the field |
| 16 | Non-precision (type not confirmed) 🟧 | Not confirmed 🟧 | Not confirmed 🟧 | Verify current chart for procedure name/type |

- **STARs (names only):** Not confirmed in reachable sources — pull the current-AIRAC STAR list at planning. 🟧
- **LVP:** 🟥 No CAT II/III capability published — RWY 34 CAT I is the field's low-visibility ceiling. An event below CAT I minima is a diversion trigger, not a lower-minima option.
- **Missed approach watch-items:** Terrain-driven, not traffic-driven — the Hajar Mountains lie close east of the field; fly the published missed approach precisely and do not shorten a turn toward high ground. Verify climb-gradient/turn constraints on the current chart.

---

## 11. Departure

- **SIDs (names only — fly the charted version):** Not confirmed in reachable research — pull the current-AIRAC SID list at planning. 🟧
- **RNP / climb-gradient requirements:** Not confirmed; the close-in Hajar Mountains terrain to the east may drive a non-standard climb-gradient or turn requirement off RWY 34 — verify on the current chart. See [`OM E — PBN and RNP Operations`](../../../../../flight-ops/pbn-and-rnp-operations.md).
- **Take-off minima:** Not published / verify. 🟧
- **Start-up / push-back:** Not independently confirmed; no separate aircraft Ground frequency is published (§8) — expect Tower to handle start-up/taxi coordination. 🟧
- **ATC slot / CTOT & clearance:** No IATA slot-coordination or CTOT/ATFM regime found; the operative constraint is the **PPR regime** for operations between 2200–0800 local (§5/§6) rather than a flow-managed slot system.
- **De-icing:** **NIL** — not provided/required in this climate.

---

## 12. Noise & Environmental

- **Noise abatement (NAP):** None published — the airport's own operations reference states "No Restrictions are in place" for aircraft noise. 🟧 Not independently cross-checked against a primary AIP source.
- **Night noise / dB limits:** None published; the **PPR requirement 2200–0800 local** (§5/§6) is the field's operative overnight constraint, not a noise-charge regime.
- **Engine run-up restrictions:** Not published / verify. 🟧
- **Reverse thrust / idle-reverse policy:** Not published / verify. 🟧

---

## 13. Ground operations

- **Stands for our types:** 19 numbered stands — **Stands 1–3** (asphalt, PCN 58/F/B/W/U, 130 × 81 m) and **Stands 4–19** (concrete, PCN 120/F/B/W/T, 487 × 210 m apron), plus a dedicated General Aviation parking apron (concrete, PCN 111/R/B/W/T, ~32,678 m²). Maximum aircraft size accommodated is **up to Boeing 747** for positioning/overhaul; hangar space is available only **up to A320 with prior permission** — no hangar or repair facility for larger visiting aircraft. 🟧
- **Push-back:** Not independently confirmed — mandatory-vs-self-manoeuvre policy not published. 🟧
- **Standard taxi routes:** Taxiways **Sierra, November, Loop A, Loop B** (asphalt, 23 m wide, 18 m shoulders), **Kilo** (concrete, 12 m), **Lima** (concrete, 28 m, 2.5 m shoulders) and **Mike** (concrete, 9 m) connect the stands to the RWY 16/34 thresholds — confirm exact routing with Tower on the day (no separate aircraft Ground frequency, §8).
- **Hot spots / tight taxiways:** None independently confirmed in reachable sources — confirm current chart. 🟧
- **Follow-me:** Not confirmed. 🟧

---

## 14. Weather & seasonal (durable)

- **Climate / prevailing wind:** Hot, arid Gulf-coast climate; no aerodrome-specific prevailing-wind statistic found this pass. 🟧
- **Seasonal hazards:** Summer extreme heat/density-altitude effects and shamal-driven blowing dust are the standing regional hazards (see [Middle East area brief](../../../../airspace/middle-east.md) §11) — no OMRK-specific frequency data found.
- **Local effects:** Proximity to the Hajar Mountains/Jebel Jais may produce local terrain-driven wind effects (down-slope/valley flow); not independently confirmed for this field. 🟧

> **Live weather — pull at planning (T-2h):** METAR, TAF, TREND, SIGMET/AIRMET. Not stored here.

---

## 15. NOTAMs

> **Pull at planning (T-2h).** Perishable — not stored here. Check: runway/taxiway closures, navaid U/S (especially the RAV VOR/DME sector restriction, §3.1/§9), lighting, obstacle/crane, RFF downgrade, GPS/RAIM, TFR, conflict-zone advisories affecting the Emirates FIR. Source: official AIS / OFP NOTAM block.

---

## 16. Fuel & alternate planning notes

- **Typical role for us:** **Not currently in the K Global network** — OMRK is not in VAMSYS, so it holds no assigned destination, base or alternate role at present. Treat this brief as general reference pending any future network addition.
- **Nearest suitable alternates:** **Not in VAMSYS** 🟧 — as general operational geography only (not a sourced company-alternate list): [Sharjah Intl (OMSJ)](../omsj/index.md), OMDB (Dubai Intl) and [Al Ain Intl (OMAL)](../omal/index.md)/OMAA (Abu Dhabi/Zayed Intl, the K Global Middle East bridge hub) are the nearest major Gulf hubs.
- **Fuel-uplift notes:** Jet A-1 and Avtur via the airport's own bowser service (ADNOC-sourced), H24. 🟧 The Jet A-1 supplied **does not contain an anti-icing (FSII) additive** — confirm own-aircraft cold-fuel handling requirement before uplift. See [`OM E — Fuel Policy`](../../../../../flight-ops/fuel-policy.md).
- **Range/perf flags for our fleet:** 3,760 m/45 m (ARC 4E) is generically non-limiting for narrowbody types and most widebody at moderate weights; no K Global type is currently validated at this field. See [`OM B — Fleet Capability Matrix`](../../../../../fleet/capability-matrix.md).

---

## 17. Fleet-specific notes (optional)

- No K Global type is currently assigned to OMRK (not in VAMSYS). If the field is added to the network in future, confirm type-by-type suitability against ARC 4E/3,760 m runway length, the RWY-34-only precision-approach limitation, and the PPR/overnight-ops regime described above. See [`OM B — Fleet Capability Matrix`](../../../../../fleet/capability-matrix.md).

---

## 18. Open items (🟧 — confirm against AIP / current AIRAC)

- **Field elevation discrepancy** — OurAirports gives 102 ft/31 m; Wikipedia and this network's prior stub give 94 ft/29 m; not reconciled against a primary AIP table.
- **GCAA eAIP AD 2 OMRK** — page identified but not independently rendered/extracted (JavaScript frameset); all figures below AIP-tier pending a direct cross-check.
- **Magnetic variation (1° E)** — not epoch-dated in the source used.
- **RWY 16 approach procedure name/type** — confirmed as "non-precision" only; exact procedure name not found.
- **SIDs/STARs (current names)** — not obtained this pass; pull the live current-AIRAC procedure list before use.
- **Transition altitude/level, take-off minima, LVTO minima** — not confirmed in reachable sources.
- **Push-back policy, follow-me availability, rapid-exit taxiway/hot-spot detail** — not confirmed.
- **Engine run-up restriction, reverse-thrust/idle-reverse policy** — not confirmed.
- **Start-up/clearance-delivery procedure** — no separate Delivery frequency found; assumed handled by Tower, not independently confirmed.
- **RFF CAT 7/9 adequacy** — stated by the operator; not cross-checked against a primary AIP RFF table.
- **VATSIM cross-check** — no VATSIM vACC/division-published airport briefing or SOP for OMRK was located this pass; re-check if the field is added to the network.

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim material (current-AIRAC charts) informs content but is not listed here.*

- GCAA — eAIP AD 2 OMRK (current AIRAC cycle) — https://www.gcaa.gov.ae/en/ais/AIPHtmlFiles/AIP/Current/AIRACs/2026-P02/html/eAIP/AD-2.OMRK-en-GB.html (identified 2026-07-26; page renders via a JavaScript frameset not reachable via a standard fetch — content not independently extracted this pass).
- Ras Al Khaimah International Airport (airport operator) — "Operating Rules and Procedures" (runway/declared-distance/PCN tables, ATS communications, navaids, fuel, RFF, handling, PPR/radar-hours policy) — https://www.rakairport.com/operations.html (retrieved 2026-07-25).
- Ras Al Khaimah International Airport — "Landing Permission & Procedures" — https://www.rakairport.com/landing_permission.html (retrieved 2026-07-25).
- Ras Al Khaimah International Airport — "Facilities & Services" — https://www.rakairport.com/facilities_services.html (retrieved 2026-07-25).
- OurAirports — https://ourairports.com/airports/OMRK/ and /runways.html and /frequencies.html (retrieved 2026-07-25). *ARP/elevation/runway/frequency cross-check.*
- Wikipedia — "Ras Al Khaimah International Airport" — https://en.wikipedia.org/wiki/Ras_Al_Khaimah_International_Airport (retrieved 2026-07-25). *History, coordinates, carrier list — cross-check; elevation figure differs from OurAirports, see §18.*
- SkyVector — https://skyvector.com/airport/OMRK/Ras-Al-Khaimah-International-Airport (retrieved 2026-07-25). *Chart pointer.*
- World Airport Codes — https://www.world-airport-codes.com/united-arab-emirates/ras-al-khaimah-6217.html (retrieved 2026-07-25). *Runway/frequency cross-check.*
- Khaleej Times — "RAK Airport unveils new terminal to boost tourism as it eyes 3 million travellers," 2025-06-19 — https://www.khaleejtimes.com/business/aviation/uae-rak-airport-new-terminal-tourism-3-million-passengers (retrieved 2026-07-25). *Terminal expansion, passenger-growth context.*
- Skift — "Ras Al Khaimah Airport Targets New Far East Airlines, More European Links," 2026-02-04 — https://skift.com/2026/02/04/ras-al-khaimah-airport-targets-new-far-east-airlines-more-european-links/ (retrieved 2026-07-25). *Traffic/expansion/route-strategy context.*

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-26 | Built from national AIP; K Global fields from live VAMSYS; 4-page pack. |
