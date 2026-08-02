# FVFA — Victoria Falls International · Airport Briefing

**FVFA / VFA** · Victoria Falls, Zimbabwe (~18–22 km SE of town, sources vary — see §18) · Africa
**Version** v0.1 · **Updated** 2026-07-26 · **Status** Draft — public-source/VAMSYS build; primary CAAZ AIP not publicly reached this pass (subscription/order-form only) — see §18

> **Read-me:** Planning aid for the sim, not a chart. **The Zimbabwe CAAZ eAIP is not openly reachable** — CAAZ's Air Navigation Services page (caaz.co.zw/ans) points to an AIP/Supplements order form, not an open eAIP portal. Static data below is built from **OurAirports, SkyVector, learn-atc.com, Universal Weather (Feasibility-IQ public summary tier) and the Airports Company of Zimbabwe (ACZ) — the official state airport operator** — with discrepancies between these tier-4 sources flagged rather than silently resolved (§18). Approaches/SIDs/STARs are **not confirmed by name** in any reachable public source this pass — do not infer names; fly the charted current-AIRAC version once available. Live weather/NOTAMs are pulled at planning (§14/§15). Open 🟧 items are listed in §18. Flag legend 🟥 restriction/hazard · 🟧 caution/unverified · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| ARP (lat/long) | **-18.097437, 25.836867** `[OurAirports, retrieved 2026-07-26]` — cross-checked -18.0959, 25.8390 `[Universal Weather]` and -18.09417, 25.84000 `[legacy stub / Navigraph navdata]`. All three cluster within ~0.5 NM of each other — non-safety-critical survey-point variance, not a material discrepancy, but not reconciled to a single AIP-published ARP. 🟧 |
| Field elevation | **3,490 ft / 1,064 m** `[OurAirports; Wikipedia; Universal Weather — 3-source corroborated]`. Reconciles against the **legacy stub's 3,500 ft (Navigraph navdata)**: SkyVector separately records RWY 12 threshold elevation **3,500 ft** and RWY 30 threshold **3,472 ft** — the legacy 3,500 ft figure matches the RWY 12 threshold survey point, not the ARP. **3,490 ft is adopted here as the ARP/headline value**; the 3,500 ft legacy figure is not wrong, it is a different reference point. 🟧 |
| Mag variation | **008°W** `[Universal Weather, retrieved 2026-07-26]` — single tier-4 source, not cross-checked against a second. 🟧 |
| Time zone | UTC+2 (CAT — Central Africa Time, no DST) — standard Zimbabwe civil time, not independently AIP-sourced this pass. |
| Runway(s) | Single — **12/30**. **4,000 × 60 m asphalt, lighted, with parallel taxiway** per **ACZ (official state airport operator)**, corroborated by Universal Weather (13,123 × 197 ft). 🟧 **OurAirports/SkyVector/learn-atc all show 4,000 × 45 m** — apparently pre-2016-expansion legacy width data not updated on those aggregators; the wider 60 m figure is adopted as current or per the airport operator + Universal Weather. See §7. |
| Preferential runway | Not published / verify 🟧 |
| Longest LDA | Not published / verify 🟧 (physical runway 4,000 m; no declared-distance table found in reachable sources) |
| Approaches | **CAT II ILS confirmed to exist on the field** (ACZ: "Category II Instrument Landing System (ILS) and Airfield Ground Lighting (AGL) system") — **runway not specified** in any reachable source; RNAV/GNSS approach capability referenced generically by one tier-4 source (learn-atc) without procedure names. **No SID/STAR/approach names confirmed** — do not infer. 🟧 |
| RFF category | **CAT 8** `[ACZ — official airport operator, retrieved 2026-07-26]` |
| Control type | 🟧 Presumed **procedural / limited-surveillance** — Approach and Tower share a **single published frequency, 121.1 MHz** (learn-atc, SkyVector), consistent with the continental AFI default (see [Africa Airspace brief](../../../../airspace/africa.md) §3) but not independently confirmed as radar or non-radar. |
| Elevation class | **Moderate (3,490 ft)** — not classically hot-and-high, but combined with high dry-season ambient temperatures (roughly Sep–Oct, ahead of the rains) the density-altitude margin narrows on hot afternoons. 🟧 |
| Special-airport status | None found in reachable sources; not operator-categorised. |
| Customs / PoE | 🟥 **Conflicting sources.** **ACZ (official airport operator)** names an on-site Immigration officer and a ZIMRA (Zimbabwe Revenue Authority — Customs) officer by role, consistent with Victoria Falls' status as Zimbabwe's principal tourism gateway and an international Airport of Entry (Universal Weather: "Airport of Entry: Yes"). **However, the same Universal Weather record separately flags "Customs available: No"**, and hours are gated behind a premium tier. Given the named on-site immigration/customs contacts from the airport's own operator, **customs/immigration are treated as available** for planning purposes here, but the conflicting "No" field is not silently discarded — flagged for verification. See §18. |
| K Global category | **Not set** `[VAMSYS mirror 2026-07-26]` — 🟧 VAMSYS `category` field is null for this airport. The H/L/M/S/R category scheme is not yet defined project-wide (the company Knowledge base item B-008); no category should be inferred from field length, RFF, or traffic mix in the interim. |
| K Global base | **No** `[VAMSYS mirror 2026-07-26]` |
| K Global suitable alternate | Not yet assessed in VAMSYS `[VAMSYS mirror 2026-07-26]` 🟧 |
| Company preferred alternates | **FLKK** (Lusaka, Zambia), **FVRG** (Robert Gabriel Mugabe Intl, Harare, Zimbabwe), **FBSK** (Sir Seretse Khama Intl, Gaborone, Botswana) `[VAMSYS mirror 2026-07-26]` — see §16 for distance estimates. |
| Taxi-in / taxi-out (VAMSYS) | Not published / verify 🟧 |

---

## 2. Validation summary

| Domain | Flag | Note |
|---|---|---|
| Terrain / CFIT | 🟩 | Field sits on the plateau above the Zambezi gorge; no close-in high terrain on the standard approach/departure paths. The Victoria Falls gorge itself is a genuine close-in terrain/visual feature but lies ~18–22 km from the field, relevant chiefly to sightseeing/scenic flights, not the main instrument approach. |
| Runway length vs fleet perf | 🟩 | 4,000 m — ample for the K Global widebody-twin fleet (A339, A359, B789, B77W) and narrowbody types under normal conditions; declared distances not published — verify before a genuinely performance-limited case. |
| Approach availability / minima | 🟧 | CAT II ILS confirmed to exist (runway unspecified); no procedure names or minima confirmed in reachable sources — treat as unconfirmed until AIP/AIRAC access is obtained. |
| Airspace / traffic / control | 🟧 | Combined APP/TWR single frequency suggests a lean/procedural control model; cross-border proximity to Zambia's Livingstone gateway (~16–17 NM N) adds a coordination consideration. See §3.2. |
| Weather / seasonal hazard | 🟧 | Clear dry (Apr–Oct) / wet (Nov–Mar) split typical of the region; hottest, highest-density-altitude period is Sep–Oct ahead of the rains; wet-season convective activity per the continental ITCZ picture. |
| Curfew / slots / hours | 🟥 | **ACZ states explicit 12 h daily operation, 0600–1800, extendable only "upon request, subject to approval."** This is a de facto soft curfew that constrains early/late scheduling without prior coordination — see §5/§11 for the scheduling implication. Conflicts with a general Wikipedia claim of 24 h operation (§18). |
| RFF category vs our types | 🟩 | CAT 8 is a substantial rating, ample for the fleet's likely requirement at this field. |
| Fuel availability | 🟧 | Jet A-1 + AVGAS confirmed on-field (two named suppliers, ACZ); hours of supply not published. |
| Customs / handling / security | 🟥 | See Customs/PoE discrepancy above — treat the "No" field from Universal Weather as unresolved against ACZ's named on-site contacts; confirm before relying on either. |

---

## 3. Threat & Error Management (TEM)

### 3.1 CFIT / Terrain  🟩
Victoria Falls Airport sits on the relatively flat Zimbabwean plateau at 3,490 ft, roughly 18–22 km SE of Victoria Falls town and the Zambezi River gorge (sources vary on the exact distance/bearing — §18). There is no close-in high terrain bearing on the standard instrument approach or departure paths. The gorge itself — steep-sided, with the Zambezi River dropping through it — is a genuine terrain/visual feature for the region's extensive scenic/sightseeing flight operations (fixed-wing and helicopter "flight of angels" tours over the falls), but it does not sit on the main runway's approach/departure corridor. No numeric MSA/obstacle data was found in reachable sources this pass — verify against the current AIRAC area chart once available.

### 3.2 Airborne conflict / traffic  🟧
The field publishes a **single combined Approach/Tower frequency, 121.1 MHz** — consistent with a lean-staffed, likely procedural (non-radar) control model, in keeping with the continental AFI default of largely procedural en-route/terminal control outside the major hubs (see [Africa Airspace brief](../../../../airspace/africa.md) §3). Victoria Falls is also a significant **seasonal leisure/charter/scenic-flight node**: expect a traffic mix of scheduled/charter airline movements, general-aviation and safari-transfer light aircraft, and dedicated sightseeing helicopter/microlight operations over the falls and gorge, layered onto whatever separation standard actually applies — not independently confirmed. **Cross-border proximity:** Zambia's **Harry Mwaanga Nkumbula International Airport (FLHN)**, serving Livingstone, lies approximately **16–17 NM N** across the Zambezi/Zambia border (per SkyVector/learn-atc). *Note: the assigned task's cross-border anchor ("HRVG") does not correspond to any valid Zambian ICAO code and is presumed a mistyping — FLHN is the actual field identified in public data and is the one carried forward here.* The two international fields sit close enough that cross-FIR traffic coordination (Zimbabwe's Harare FIR, FVHF, vs. the Zambian side) is a plausible operational consideration, though not independently confirmed this pass.

### 3.3 Runway excursion  🟧
Single runway **12/30, 4,000 m long** — not length-limited under normal conditions regardless of which width figure (45 m vs. 60 m, §7) is current. No displaced threshold or contamination data found in reachable sources. The **wet season (Nov–Mar)** brings the region's rains; standard wet/contaminated-runway braking-action caution applies in season — no FVFA-specific runway friction or drainage data found.

### 3.4 Weather threat  🟧
Southern Africa's classic **two-season split**: a **dry season roughly April–October** (cooler June–August, hot and building toward the rains in Sep–Oct) and a **wet season roughly November–March** bringing convective storms consistent with the continental ITCZ picture (see [Africa Airspace brief](../../../../airspace/africa.md) §11). The **hot late-dry-season period (Sep–Oct)**, combined with the field's moderate elevation (3,490 ft), narrows density-altitude performance margins on the warmest afternoons — not a hot-and-high field in the classic sense, but not a non-issue either. Separately, the **Victoria Falls spray column** ("Mosi-oa-Tunya" — the smoke that thunders) can rise several hundred metres and drift with the wind, occasionally reducing visibility in the immediate gorge area — a consideration for scenic/sightseeing flights operating close to the falls, not for the main terminal 18–22 km away. See §14.

### 3.5 Operational considerations  🟧
**Published operating hours are 12 h daily (0600–1800), extendable only on request and subject to approval (ACZ)** — treat this as a de facto soft curfew for scheduling purposes until confirmed otherwise; an early-morning or late-evening movement likely needs prior coordination. The field sits at the heart of the **Kavango–Zambezi Trans-Frontier Conservation Area (KAZA-TFCA)**, the world's largest trans-frontier conservation area, spanning Zimbabwe, Zambia, Namibia, Botswana and Angola, and immediately adjoins wildlife-rich reserves (the Victoria Falls Private Game Reserve borders Zambezi National Park; Hwange National Park, one of Southern Africa's largest elephant populations, lies within the wider region). This is a **qualitative wildlife-strike risk consideration** — no FVFA-specific bird/wildlife-strike statistic was found in reachable sources this pass; flagged as a caution, not a confirmed hazard rate.

---

## 4. Cautions & Warnings

- 🟥 **Published hours are 12 h/day (0600–1800), extension "subject to approval"** — do not assume H24 availability; confirm before planning an off-hours movement.
- 🟥 **Customs/immigration availability is source-conflicted** (ACZ names on-site officers; one tier-4 aggregator flags "Customs available: No") — confirm before relying on either for a passenger-carrying operation.
- Runway width is reported as **either 45 m or 60 m** depending on source — verify current AIP/NOTAM figure before any wingspan-critical planning (unlikely to bind given the fleet, but not reconciled here).
- Field lies within a major wildlife conservation corridor (KAZA-TFCA) — qualitative wildlife/bird-strike caution near the field and on approach/departure; no confirmed statistic.
- Combined single-frequency Approach/Tower (121.1 MHz) — workload/traffic-mixing caution during the leisure/charter peak season.
- Victoria Falls spray/mist can locally reduce visibility near the gorge — relevant to scenic flights, not the main terminal.
- No SID/STAR/approach names or minima confirmed in any reachable public source — do not plan against inferred procedure names.

---

## 5. Aerodrome category, restrictions & crew qualification

- **Special-airport / category:** Not categorised in any reachable source. 🟧
- **Crew-qualification gate:** None published. A confirmed CAT II ILS exists on the field (runway unspecified) — if operationally used, standard CAT II crew/aircraft certification and the company's low-visibility operations procedures apply; see [`OM E — Low Visibility Operations`](../../../../../flight-ops/low-visibility-operations.md). 🟧
- **Operating restrictions / bans:** 🟥 **Published operating hours 0600–1800 daily (12 h), extendable only "upon request, subject to approval"** (ACZ) — treat as a scheduling constraint akin to a soft curfew. No RNP AR ban, circling restriction, or other operating ban found in reachable sources — not confirmed either way.
- **Overflight / entry / permits:** Zimbabwe overflight/landing permit requirements are a standing dispatch item across the region generally (see [Africa Airspace brief](../../../../airspace/africa.md) §9); no FVFA-specific permit detail found this pass. 🟧
- **Operations notes:** Regulator — **Civil Aviation Authority of Zimbabwe (CAAZ)**. Airport operator — **Airports Company of Zimbabwe (ACZ)**, which manages Victoria Falls as one of eight Zimbabwean airports. FIR — **Harare FIR (FVHF)** (no dedicated FIR brief yet exists in this repo; see the continental [Africa Airspace brief](../../../../airspace/africa.md)).

---

## 6. General / hours / services

| Item | Value | Flag |
|---|---|---|
| ATS hours | Not independently confirmed; presumed to track AD operating hours | 🟧 |
| AD operating hours | **12 h daily, 0600–1800**; extendable on request, subject to approval `[ACZ]` — conflicts with a general Wikipedia claim of 24 h operation | 🟥 |
| Night / curfew restrictions | Effectively a soft curfew outside 0600–1800 pending prior approval (above) | 🟥 |
| RFF category | **CAT 8** `[ACZ]` | 🟩 |
| Fuel | **Jet A-1 + AVGAS**, ex PUMA Aviation and ZUVA Petroleum (both based on-field) `[ACZ]`; hours not published | 🟧 |
| PCN | Not published / verify | 🟧 |
| Customs | On-site Immigration + ZIMRA Customs contacts named `[ACZ]` — conflicts with a tier-4 "Customs available: No" flag; see §1/§18 | 🟥 |
| Handling / FBO | Two aviation-fuel suppliers based on-field (PUMA, ZUVA); dedicated ground-handling agent not identified in reachable sources | 🟧 |

---

## 7. Runways & declared distances

| RWY | Dimensions | Surface / PCN | TORA | TODA | ASDA | LDA | Notes |
|---|---|---|---|---|---|---|---|
| 12 | 4,000 × 60 m (per ACZ/Universal Weather) — **45 m per OurAirports/SkyVector/learn-atc** 🟧 | Asphalt, lighted / PCN not published | Not published 🟧 | Not published 🟧 | Not published 🟧 | Not published 🟧 | THR elevation 3,500 ft `[SkyVector]`. Parallel taxiway confirmed. |
| 30 | 4,000 × 60 m (per ACZ/Universal Weather) — **45 m per OurAirports/SkyVector/learn-atc** 🟧 | Asphalt, lighted / PCN not published | Not published 🟧 | Not published 🟧 | Not published 🟧 | Not published 🟧 | THR elevation 3,472 ft `[SkyVector]`. |

*The 4,000 m length is consistent across every source (OurAirports, SkyVector, learn-atc, ACZ, Universal Weather). The runway **width** conflicts: ACZ (the official airport operator, describing the post-expansion facility explicitly built to take B747-400/B777/A340-category widebodies) and Universal Weather both show **60 m**; OurAirports, SkyVector and learn-atc all show **45 m**, which appears to be un-updated pre-2016-expansion legacy data carried over between aggregators that plausibly all draw from the same stale record. The 60 m figure is adopted as the operationally current one but is not independently AIP-confirmed. No declared-distance (TORA/TODA/ASDA/LDA) table was found in any reachable source — a genuine gap, not a rounding issue. All dimensions in metres.*

---

## 8. Communications

| Service | Callsign | Frequency | Hours | Notes |
|---|---|---|---|---|
| ATIS | Falls ATIS | 127.500 | Not published 🟧 | `[learn-atc, SkyVector]` |
| Delivery | Not published | — | — | 🟧 |
| Ground | Not published | — | — | 🟧 |
| Tower | Falls Tower | 121.100 | Not published 🟧 | Shares the Approach frequency (below) — combined position |
| Approach | Falls Approach | 121.100 | Not published 🟧 | Same published frequency as Tower `[OurAirports, learn-atc, SkyVector — 3-source agreement]` |
| Centre / FIR | Harare (FVHF) | Not published / verify | — | 🟧 |

*Callsign "Falls". Frequencies corroborated across three independent tier-4 sources (OurAirports, learn-atc, SkyVector) — the combined APP/TWR frequency is treated as a genuine field characteristic rather than a data error, though not confirmed against a primary AIP. Emergency 121.500 (standard).*

---

## 9. Navaids

| Aid | Ident | Freq | Hours | Notes |
|---|---|---|---|---|
| VOR | VFA | 116.70 MHz | Not published 🟧 | On field, ~1.5 NM `[SkyVector]`. DME collocation not confirmed — treat as VOR only pending verification. 🟧 |
| NDB | VF | 274 kHz | Not published 🟧 | ~1.1 NM WNW `[OurAirports]`. Currency/operational status vs. the on-field VOR not confirmed. 🟧 |
| NDB | FA | 256 kHz | Not published 🟧 | ~4.4 NM WNW `[OurAirports]`. Currency not confirmed. 🟧 |
| VOR/DME (cross-border) | VLI | 112.50 MHz | Not published | Livingstone, Zambia — ~17 NM N `[OurAirports/SkyVector]` |
| VOR/DME (cross-border) | KAV/KSV | 113.30 MHz | Not published | Kasane, Botswana — ~41–42 NM WNW `[OurAirports/SkyVector]` |
| VOR/DME | VWN | 114.50 MHz | Not published | Hwange National Park, Zimbabwe — ~73–74 NM ESE/SE `[OurAirports/SkyVector]` |

*No ILS ident/frequency or DME-equipped confirmation found in reachable sources despite ACZ confirming a CAT II ILS exists on the field — a genuine gap. Navaid idents/frequencies above are tier-4 (OurAirports/SkyVector) cross-checked between the two; not verified against a primary AIP.*

---

## 10. Arrival

- **Transition altitude / level:** Not published / verify 🟧
- **Speed:** Standard regional speed restrictions presumed; not independently confirmed.
- **Preferential runway logic:** Not published / verify 🟧
- **Approaches (names only — verify minima on current AIRAC charts):**

| RWY | Approach | IAF | FAF/FAP alt | Notes |
|---|---|---|---|---|
| 12/30 | **CAT II ILS confirmed to exist on the field (runway not specified); RNAV/GNSS capability referenced generically** — no procedure names confirmed | Not published 🟧 | Not published 🟧 | Do not infer a procedure name; verify against CAAZ AIP/current AIRAC once accessible |

- **STARs (names only):** Not confirmed in any reachable source. 🟧
- **LVP:** Trigger conditions not published. 🟧
- **Missed approach watch-items:** No close-in high terrain identified on the standard approach; the Zambezi gorge lies well clear of the field. Verify the actual missed-approach path/terrain on current AIRAC once available.

---

## 11. Departure

- **SIDs (names only — fly the charted version):** Not confirmed in any reachable source. 🟧
- **RNP / climb-gradient requirements:** Not published — see [`OM E — PBN and RNP Operations`](../../../../../flight-ops/pbn-and-rnp-operations.md) for the general capability/authorisation framework; field-specific requirement unconfirmed. 🟧
- **Take-off minima:** Not published / verify 🟧
- **Start-up / push-back:** Not published / verify 🟧
- **ATC slot / CTOT & clearance:** No slot regime found in public sources ("Slots required: N/A" per Universal Weather); clearance procedure not confirmed. 🟧
- **De-icing:** **NIL** — subtropical plateau field, no de-icing requirement expected.

---

## 12. Noise & Environmental

- **Noise abatement (NAP):** Not published / verify 🟧
- **Night noise / dB limits:** Not applicable in the conventional sense given the field's stated daytime-only (0600–1800) operating hours; not independently confirmed. 🟧
- **Engine run-up restrictions:** Not published / verify 🟧
- **Reverse thrust / idle-reverse policy:** Not published / verify 🟧

---

## 13. Ground operations

- **Stands for our types:** **Parking for 10 wide-body aircraft and 18 light aircraft; 3 aerobridges** `[ACZ]` — ample apparent capacity for the fleet, not independently verified by stand/wingspan detail. 🟧
- **Push-back:** Not published; presumed required for code D/E/F types per standard practice. 🟧
- **Standard taxi routes:** Single **parallel taxiway** confirmed alongside the runway `[ACZ]`; detailed routing not published.
- **Hot spots / tight taxiways:** Not published / verify 🟧
- **Follow-me:** Availability not confirmed. 🟧

---

## 14. Weather & seasonal (durable)

- **Climate / prevailing wind:** Subtropical plateau climate; two clearly defined seasons.
- **Seasonal hazards:** **Dry season (roughly Apr–Oct)**, building to the hottest, highest-density-altitude period in **Sep–Oct** ahead of the rains; **wet season (roughly Nov–Mar)** bringing convective storms consistent with the continental ITCZ band (see [Africa Airspace brief](../../../../airspace/africa.md) §11). The **Victoria Falls spray column** can drift with the wind and locally reduce visibility near the gorge — a scenic-flight consideration, not a main-terminal one.
- **Local effects:** No FVFA-specific turbulence, sea-breeze, or terrain-wind effect identified in reachable sources.

> **Live weather — pull at planning (T-2h):** METAR, TAF, TREND, SIGMET/AIRMET. Not stored here.

---

## 15. NOTAMs

> **Pull at planning (T-2h).** Perishable — not stored here. Check: runway/taxiway closures, navaid U/S (the on-field VOR VFA and the CAT II ILS in particular), lighting, obstacle/crane, RFF downgrade below CAT 8, GPS/RAIM, hours-of-operation extension notices, wildlife-hazard NOTAMs. Source: AIS / OFP NOTAM block.

---

## 16. Fuel & alternate planning notes

- **Typical role for us:** Leisure/tourism-gateway destination (Victoria Falls) on the Southern-Africa network; not currently a K Global base (§1).
- **Nearest suitable alternates:** **FLKK** (Lusaka, Zambia) — approx. **225 NM NE** (great-circle estimate computed from public coordinates, not a filed distance) 🟧; **FVRG** (Robert Gabriel Mugabe Intl, Harare, Zimbabwe) — approx. **300 NM E** (computed estimate) 🟧; **FBSK** (Sir Seretse Khama Intl, Gaborone, Botswana) — approx. **385 NM S** (computed estimate) 🟧. `[VAMSYS mirror 2026-07-26]`. Separately, **FLHN** (Harry Mwaanga Nkumbula Intl, Livingstone, Zambia) is the nearest international field of any kind at ~16–17 NM N, but is not carried in VAMSYS as a company-preferred alternate for this build — cross-border customs/handling considerations would apply if ever used as such.
- **Fuel-uplift notes:** Jet A-1 and AVGAS confirmed available on-field from two named suppliers (PUMA Aviation, ZUVA Petroleum); supply hours not published — see [`OM E — Fuel Policy`](../../../../../flight-ops/fuel-policy.md).
- **Range/perf flags for our fleet:** 4,000 m runway is non-limiting for the widebody-twin fleet (A339, A359, B789, B77W) and narrowbody types under normal conditions; the moderate-elevation/hot-dry-season density-altitude margin (§3.4/§3.5) is the more relevant performance watch-item than field length. See [`OM B — Fleet Capability Matrix`](../../../../../fleet/capability-matrix.md).

---

## 17. Fleet-specific notes (optional)

- **Widebody twins (A339, A359, B789, B77W):** Field length (4,000 m) and RFF (CAT 8) are non-limiting per public data; stand capacity (10 widebody positions, 3 aerobridges per ACZ) appears ample, not independently verified against wingspan/code-letter detail.
- **Narrowbody types (A320-family, A21N, B738):** Standard ops expected; no field-specific constraint identified.
- **General:** No fleet-specific performance penalty beyond the general hot-dry-season density-altitude caution (§3.4/§3.5) was identified in reachable sources.

---

## 18. Open items (🟧 — confirm against AIP / current AIRAC)

- 🟥 **Operating-hours conflict** — ACZ states 12 h/day (0600–1800, extendable on request); Wikipedia states 24 h operation. Confirm current hours before assuming either.
- 🟥 **Customs/immigration availability conflict** — ACZ names on-site immigration/ZIMRA officers; Universal Weather's public summary flags "Customs available: No." Confirm before relying on either.
- **Runway width conflict** — 45 m (OurAirports/SkyVector/learn-atc, likely stale pre-2016-expansion data) vs. 60 m (ACZ/Universal Weather, current). Adopted 60 m here; verify against current AIP.
- **ARP coordinate spread** — three sources (OurAirports, Universal Weather, legacy Navigraph) cluster within ~0.5 NM; not reconciled to a single AIP figure.
- **Field elevation reconciliation** — 3,490 ft (ARP, 3-source corroborated) vs. legacy stub's 3,500 ft (which matches the SkyVector RWY 12 threshold survey point, not the ARP). Both are plausible; not silently overridden.
- **CAAZ eAIP not publicly reachable** — declared distances, PCN, mag variation cross-check, ATS/customs hours, navaid frequencies/idents, SID/STAR/approach names and minima, and the runway serving the CAT II ILS are all unconfirmed against a primary source. Subscription/order-form contact: ais@caaz.co.zw.
- **On-field VOR (VFA, 116.70) vs. the two nearby NDBs (VF 274 kHz, FA 256 kHz)** — currency and relationship (superseded/retained) not confirmed.
- **Task-anchor correction** — the assigned task's Zambia cross-border anchor ("HRVG") does not match any valid Zambian ICAO code; public data identifies **FLHN** (Harry Mwaanga Nkumbula Intl, Livingstone) as the actual nearby field, ~16–17 NM N. Flagged and corrected here, not silently substituted.
- **VAMSYS category field is null** — doubly pending: (a) the undefined H/L/M/S/R scheme (the company Knowledge base B-008), and (b) no field-specific assessment yet performed.
- **Distance-to-town discrepancy** — ACZ states 21 km SE of Victoria Falls town; Wikipedia states 18 km S; Universal Weather/OurAirports coordinates imply ~22.5 km. Not material to operations, noted for completeness.
- **No VATSIM vACC/division airport SOP found** for FVFA this pass — operational cross-check per the build instructions could not be performed; re-check if one becomes available.

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim material may inform content but is not listed here.*

- **Civil Aviation Authority of Zimbabwe (CAAZ) — Air Navigation Services** — https://www.caaz.co.zw/ans/ (retrieved 2026-07-26). *AIP/AIC access is via a subscription order form (ais@caaz.co.zw), not an open eAIP — primary verification not obtained this pass.*
- **Airports Company of Zimbabwe (ACZ) — Victoria Falls International Airport** — https://www.acz.co.zw/airports/tour/victoria-falls-international-airport (retrieved 2026-07-26). *Official state airport-operator source — runway dimensions (4,000 × 60 m), RFF CAT 8, CAT II ILS/AGL, stand count, fuel suppliers, published operating hours, terminal/passenger-capacity data, distance-to-town figure.*
- **OurAirports** — https://ourairports.com/airports/FVFA/ , /runways.html , /frequencies.html , /closest-navaids.html (retrieved 2026-07-26). *ARP, elevation, runway (45 m width), frequency and navaid cross-check — tier-4.*
- **SkyVector** — https://skyvector.com/airport/FVFA/Victoria-Falls-Airport (retrieved 2026-07-26). *Coordinates, elevation (3,500 ft), runway threshold elevations, on-field VOR (VFA 116.70), frequencies, nearby navaids.*
- **learn-atc.com — FVFA Aerodrome** — https://www.learn-atc.com/tools/aerodrome/FVFA (retrieved 2026-07-26). *Runway/frequency cross-check (Falls App/Tower 121.1, ATIS 127.5).*
- **Universal Weather and Aviation — FVFA/VFA airport page** — https://www.universalweather.com/airports/FVFA-VFA-VICTORIA-FALLS-INTERNATIONAL-AIRPORT-VICTORIA-FALLS-MASVINGO-VICTORIA-ZIMBABWE/ (retrieved 2026-07-26). *Elevation, coordinates, magnetic variation, Airport-of-Entry flag, runway width (60 m) cross-check, conflicting customs-availability flag (public-tier summary; most detail gated behind a paid product).*
- **Wikipedia — "Victoria Falls Airport"** — https://en.wikipedia.org/wiki/Victoria_Falls_Airport (retrieved 2026-07-26). *History, 2013 $150M Exim Bank of China-funded runway/terminal expansion, distance-to-town figure, general operating-hours claim.*
- [Africa Airspace brief](../../../../airspace/africa.md) — Harare FIR (FVHF) context, continental seasonal/ITCZ picture, procedural-control default, overflight-permit standing item.

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-26 | Built from national AIP; K Global fields from live VAMSYS; 4-page pack. |
