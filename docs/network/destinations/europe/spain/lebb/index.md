# LEBB — Bilbao · Airport Briefing

**LEBB / BIO** · Loiu, Biscay (Basque Country), Spain · Europe
**Version** v0.1 · **Updated** 2026-07-26 · **Status** Draft — AIP España-derived

> **Read-me:** Planning aid for the sim, not a chart. Static data is drawn from AIP España (ENAIRE eAIP), AD 2-LEBB, plus public cross-checks; approaches/SIDs/STARs are listed **by name only or flagged not-yet-confirmed** — fly the charted current-AIRAC version. Live weather/NOTAMs are pulled at planning (§14/§15). Open 🟧 items are listed in §18. Flag legend 🟥 restriction/hazard · 🟧 caution/unverified · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| ARP (lat/long) | 43°18′04″N / 2°54′38″W (43.3011, -2.9106) `[AIP AD 2-LEBB]` |
| Field elevation | **41 m / 136 ft AMSL** (reference temperature 26°C, low average 7°C) |
| Mag variation | 🟧 **0° (2020 epoch)**, annual change 8.5′E — current-day value not re-derived from a current AIRAC; secular drift since 2020 is small (~1°) but not a sourced figure |
| Time zone | UTC+1 (CET) / UTC+2 (CEST, EU DST observed) |
| Runway(s) | **12/30** 2,540 × 45 m / 2,600 × 45 m (main, precision-equipped) · **10/28** 1,910 × 45 m (secondary, non-precision, VFR-preferred) |
| Preferential runway | Wind-driven; no single dominant config confirmed in reachable AIP text — verify current ATIS/METAR trend at planning 🟧 |
| Longest LDA | 2,540 m (RWY 12) — RWY 30 LDA reduced to 2,140 m by a 460 m displaced threshold; RWY 28 LDA reduced to 1,355 m by a 555 m displaced threshold |
| Approaches | **ILS CAT I (RWY 12, ident IBO)**; **RWY 30 precision-approach lighting classed CAT II** (750 m sequenced flashers, ident IBL) — confirm current CAT II/III operational status and minima on the chart; RWY 10/28 have no precision aid (threshold-identification lighting only) |
| RFF category | **CAT 7**, CAT 8 on demand (30 days' notice) 🟩 |
| Control type | **Radar** — Bilbao APP/TWR on the field; en-route under **Madrid ACC (LECM)** — no dedicated Spanish FIR brief in this library; see [Europe (Continental) Airspace Briefing](../../../../airspace/europe.md) 🟧 |
| Elevation class | Near sea-level (136 ft) — **not** hot-and-high; the defining performance/reliability drivers are **surrounding hilly terrain and documented low-level windshear**, not density altitude |
| Special-airport status | 🟥 **Surrounded by hills; demanding approach environment with a documented history of windshear and low-visibility events** — two public-record accidents at this field (§3/§4); Code E aircraft face severe stand/taxi/PAPI restrictions (§13) — see §5 |
| Customs / PoE | **Yes** — HR AD (airport operating hours); not H24 🟧 |
| K Global category | **S** `[VAMSYS mirror 2026-07-26]` — VAMSYS category-letter definitions are not documented in this library; treat "S" as a special/demanding-field flag pending confirmation against OM B training-gate criteria 🟧 |
| K Global base | **No** `[VAMSYS mirror 2026-07-26]` |
| Company preferred alternates | **LESO (San Sebastián), LEMD (Madrid-Barajas)** `[VAMSYS mirror 2026-07-26]` |
| Taxi-in / taxi-out (VAMSYS) | **10 min / 12 min** `[VAMSYS mirror 2026-07-26]` |

---

## 2. Validation summary

| Domain | Flag | Note |
|---|---|---|
| Terrain / CFIT | 🟥 | Bilbao is hemmed in by the Basque hills; Iberia Flight 610 (Madrid–Bilbao) struck Mount Oiz on approach in 1985 with total loss. Not a flat-field brief — quantify terrain/MSA from the current area chart before flying here. |
| Runway length vs fleet perf | 🟧 | RWY 12/30 (2,540–2,600 m) is workable for narrowbody/regional types but is **limiting for K Global widebody (Code E) types** given the displaced thresholds and taxi/stand restrictions below; RWY 10/28 (1,910 m, further reduced by obstacle clearance and a non-usable last 90 m) is materially shorter still. |
| Approach availability / minima | 🟧 | ILS CAT I on 12, CAT II-classed lighting on 30; sub-category and current minima not independently confirmed this pass. RWY 10/28 has no instrument precision aid. |
| Airspace / traffic / control | 🟩 | Bilbao APP/TWR radar service on the field; moderate traffic for a regional hub; en route under Madrid ACC. |
| Weather / seasonal hazard | 🟥 | Documented **windshear on approach** (Iberia 1456, 2001, gear collapse on landing) — the single sharpest TEM item at this field; brief accordingly (§3.4). |
| Curfew / slots / hours | 🟧 | No hard curfew found in reachable AIP text, but the airport is **not H24** — published hours with a PPR extension window; confirm against current AIP before planning a late rotation. |
| RFF category vs our types | 🟩 | CAT 7 (CAT 8 on 30 days' request) — adequate for the network; confirm CAT 8 lead time if operating a larger type. |
| Fuel availability | 🟩 | Jet A-1 and 100LL confirmed, two named suppliers (Exolum, SLCA), hours tied to airport operating hours. |
| Customs / handling / security | 🟧 | Customs HR AD (not H24); four handling agents named, mandatory handling contract for all ops (commercial and GA) except based aircraft. |

---

## 3. Threat & Error Management (TEM)

### 3.1 CFIT / Terrain 🟥
Bilbao Airport sits in a valley at 136 ft AMSL and is **surrounded by the hills of the Basque Country** — the original 1936 site survey rejected the location for exactly this reason before it was eventually built at Sondika/Loiu regardless. The defining historical event is **Iberia Flight 610** (Madrid–Bilbao), which struck **Mount Oiz** on approach on 19 February 1985 with the loss of all 148 aboard — a public-record CFIT accident tied directly to this field's terrain environment. Quantify current MSA sectors and named peaks from the area/approach chart before flying here; this is not a benign-terrain field.

### 3.2 Airborne conflict / traffic 🟩
Moderate regional traffic under Bilbao APP/TWR radar service; no unusual airborne-conflict factor identified in reachable sources. En-route control is Madrid ACC (LECM) — see [Europe (Continental) Airspace Briefing](../../../../airspace/europe.md) 🟧 (no dedicated Spanish FIR brief exists in this library; flagged for a future FIR-level build).

### 3.3 Runway excursion 🟧
RWY 30 carries a **460 m displaced threshold** and RWY 28 a **555 m displaced threshold**, each cutting materially into published LDA (RWY 30 LDA 2,140 m vs 2,600 m TORA; RWY 28 LDA 1,355 m vs 1,910 m TORA) — brief the correct displaced-threshold picture per runway, don't assume full-length landing distance. RWY 10/28's **last 90 m is not usable for either takeoff or landing**, and RWY 10's TORA is separately reduced to 1,195 m for obstacle-clearance reasons on departure. Back-track is restricted: RWY 28 back-track is authorised only to CRJ900-size aircraft; RWY 12/30 back-track is authorised only occasionally, by day, in ideal VMC, and only up to A321/B737-size aircraft — **no widebody back-track capability at this field**.

### 3.4 Weather threat 🟥
The single sharpest weather item at Bilbao is **documented low-level windshear on approach**: on 7 February 2001, **Iberia Flight 1456** (arriving from Barcelona) encountered windshear on landing and suffered a landing-gear collapse — all aboard survived, 25 injured. This is a public-record event, not a hypothetical threat, and should be briefed explicitly for any approach into this field, particularly in disturbed/gusty wind conditions. See also [`OM E — Adverse Weather and Windshear`](../../../../../flight-ops/adverse-weather-and-windshear.md). RWY 30 is CAT II-lighting equipped and **usable for low-visibility departures**; **Low Visibility Procedures (LVP) are available** at this field (trigger RVR < 550 m or visibility < 800 m if transmissometers are unserviceable) — see [`OM E — Low Visibility Operations`](../../../../../flight-ops/low-visibility-operations.md). A defined snow-plan season (1 Dec–31 Mar) applies.

### 3.5 Operational considerations 🟥
Three durable constraints define this field for a K Global widebody operation: (1) **Code E aircraft may only park at PRKG 6A (bridge) or PRKG 111 (remote)** — no other stand is available, PAPI on RWY 12/30 is **not usable** for Code E aircraft, and multiple curved taxiway sections require deliberate oversteering with signalman guidance because wheel clearance to the taxiway edge is under 4 m; (2) **no widebody back-track capability** on any runway (§3.3); (3) the field is **not H24** — published operating hours with a PPR-based extension, so a late/irregular rotation needs advance coordination. RFF, fuel and handling infrastructure are otherwise standard for a regional hub; the open items in §18 are mostly currency confirmations.

---

## 4. Cautions & Warnings

- **Documented windshear on approach** — Iberia Flight 1456 (2001) suffered a gear collapse on landing after encountering windshear; brief a stabilised-approach/go-around contingency for any gusty or frontal wind day.
- **Surrounded by hills; historical CFIT accident** (Iberia Flight 610, Mount Oiz, 1985) — verify MSA sectors and terrain on the current area chart; do not descend below charted minima early.
- **Code E aircraft are severely stand/taxi restricted** — only PRKG 6A and PRKG 111 usable, PAPI RWY 12/30 not usable for Code E, mandatory oversteer at multiple named taxiway sections, no access via GATES B or A1.
- **No widebody back-track on any runway** — RWY 28 back-track capped at CRJ900; RWY 12/30 back-track capped at A321/B737 and only occasional/day/VMC.
- **RWY 28 and RWY 30 both carry displaced thresholds** (555 m and 460 m respectively) that materially reduce LDA — brief the correct number per runway.
- **RWY 10/28's last 90 m is unusable for takeoff or landing** — do not plan on the full published length.
- **Field is not H24** — published operating hours with a PPR extension; confirm before planning a late rotation or diversion.

---

## 5. Aerodrome category, restrictions & crew qualification

- **Special-airport / category:** Not formally ICAO-categorised as restricted-crew in reachable AIP text, but the operator-level VAMSYS category **"S"** and the terrain/windshear/low-vis profile in this brief indicate a demanding field warranting captain-experience or briefing gates per company policy — confirm against OM B training standards. 🟧
- **Crew-qualification gate:** CAT II currency recommended given RWY 30's CAT II-classed lighting/LVP availability; confirm current-AIRAC minima and crew currency before planning a low-vis arrival. 🟧
- **Operating restrictions / bans:** No widebody back-track on any runway (§3.3); Code E stand/PAPI/taxi restrictions (§13); no RNP AR ban found in reachable sources — verify current AIRAC. 🟧
- **Overflight / entry / permits:** Standard EU/Schengen arrival; no special state permit required. 🟩
- **Operations notes:** ANSP/airport operator — **Aena**. Handling is **mandatory for all operations, including non-commercial**, except aircraft based at the field.

---

## 6. General / hours / services

| Item | Value | Flag |
|---|---|---|
| ATS hours | V: 0430-2150, I: 0530-2250; extendable to V: 0430-2300, I: 0530-2359 | 🟧 |
| AD operating hours | V: 0445-2130, I: 0545-2230, PPR 1h10 before/after published hours | 🟧 |
| Night / curfew restrictions | No hard curfew found in reachable text; field closes outside published hours absent PPR — engine tests above idle forbidden 0000-0600 LT | 🟧 |
| RFF category | CAT 7 (CAT 8 on 30 days' request) | 🟩 |
| Fuel | Jet A-1, 100LL — Exolum and SLCA, hours tied to AD operating hours | 🟩 |
| PCN | Runway/taxiway-specific — see §7; TWY C1 limited to Code C max, TWY S1 to Code A max | 🟧 |
| Customs | HR AD (not H24) | 🟧 |
| Handling / FBO | Aviapartner, Ground Force (commercial + GA), United Aviation Services (GA), NIS (GA) — mandatory contract for all operations | 🟩 |

---

## 7. Runways & declared distances

| RWY | Dimensions | Surface / PCN | TORA | TODA | ASDA | LDA | Notes |
|---|---|---|---|---|---|---|---|
| 10 | 1,910 × 45 m | ASPH / PCN 91/F/A/W/T | 1,195 m (1) | 1,195 m (1) | 1,195 m (1) | 1,910 m | (1) TORA/TODA/ASDA reduced for obstacle clearance on departure |
| 28 | 1,910 × 45 m | ASPH / PCN 91/F/A/W/T | 1,910 m (2) | 2,055 m | 1,910 m (2) | 1,355 m (2) | Displaced threshold 555 m; (2) last 90 m not usable for takeoff or landing |
| 12 | 2,540 × 45 m | ASPH / graded PCN (76 near THR to 145 far end) | 2,540 m | 2,650 m | 2,540 m | 2,540 m | Precision CAT I (IBO) |
| 30 | 2,600 × 45 m | ASPH / graded PCN | 2,600 m | 2,700 m | 2,600 m | 2,140 m | Displaced threshold 460 m; CAT II-classed approach lighting (IBL) |
| 28 FM stop bar | — | — | 1,640 m | 1,785 m | 1,640 m | — | Intersection departure |
| 30 INT C2 | — | — | 2,335 m | 2,435 m | 2,335 m | — | Intersection departure |

*Source: AIP España, AD 2-LEBB items 12/13 (WEF 15-MAY-25, AIRAC AMDT 04/25). All distances in metres. Both RWY 10/28's last 90 m and RWY 10's TORA reduction are obstacle-clearance driven, not pavement-quality issues.*

---

## 8. Communications

| Service | Callsign | Frequency | Hours | Notes |
|---|---|---|---|---|
| ATIS | Bilbao Information | 118.830 | HR ATS | D-ATIS also available via datalink |
| Approach | Bilbao APP | 127.450 (128.580 back-up) | HR ATS | |
| Tower | Bilbao TWR | 118.500 | HR ATS | ATIS will advise when TWR and GMC share 118.500 |
| Ground | Bilbao GMC | 121.705 | HR ATS | |
| Emergency | — | 121.500 / 243.000 | HR ATS | |
| Military | — | 257.800 | HR ATS | |
| Centre / FIR | Madrid ACC (LECM) | Per current AIRAC | H24 | See [Europe (Continental) Airspace Briefing](../../../../airspace/europe.md) 🟧 |

*Source: AIP España, AD 2-LEBB item 18/19 (2024 cycle). "HR ATS" reflects the field's published, non-H24 ATS hours (§6) — confirm before planning an off-hours call.*

---

## 9. Navaids

| Aid | Ident | Freq | Hours | Notes |
|---|---|---|---|---|
| DVOR | BLV | 115.900 | H24 | Signal-loss/coverage caveats published on specific radials — see current AIP |
| DME | BLV | CH 106X | H24 | 40 NM coverage with radial-specific limits below certain flight levels |
| NDB | B | 395.000 | H24 | U/S between 155°/255° and 115°/135° |
| ILS/LOC 12 | IBO | 111.550 | H24 | CAT I; below CAT I chart minimum, published ILS/PAPI discrepancy noted |
| ILS/DME 12 | IBO | CH 52Y | H24 | |
| ILS/LOC 30 | IBL | 110.300 | H24 | CAT I ident; RWY 30 approach lighting classed CAT II (750 m) — confirm current sub-category on chart; below CAT I chart minimum, published ILS/PAPI discrepancy noted |
| ILS/DME 30 | IBL | CH 40X | H24 | |

*Source: AIP España, AD 2-LEBB item 19. The published ILS/PAPI discrepancy below chart minima on both runways is an AIP-stated caution — brief it, don't assume PAPI backs up the ILS glidepath below minimums.*

---

## 10. Arrival

- **Transition altitude / level:** 1,850 m / 6,000 ft (CTR upper limit) — confirm TA/TL split on current chart. 🟧
- **Speed:** Standard 250 KIAS below FL100 (EU/ICAO norm) — confirm no local override on current chart.
- **Preferential runway logic:** Wind-driven; RWY 10/28 is **VFR-preferred**. No single dominant IFR config confirmed in reachable AIP text — check ATIS/METAR trend at planning. 🟧
- **Approaches (names only — verify minima on current AIRAC charts):**

| RWY | Approach | Notes |
|---|---|---|
| 12 | ILS CAT I (IBO) | Below-minima ILS/PAPI discrepancy published — verify chart |
| 30 | ILS, CAT II-classed lighting (IBL) | Confirm current CAT II/III operational status; below-minima ILS/PAPI discrepancy published |
| 10 | — | No precision aid; threshold ID lighting only |
| 28 | — | No precision aid; threshold ID lighting only; displaced threshold |

- **STARs (names only):** Not confirmed in reachable research pass — pull the current-AIRAC STAR list at planning. 🟧
- **LVP:** **Available.** Trigger: any transmissometer RVR < 550 m, or visibility < 800 m if transmissometers are unserviceable. Cancelled when all transmissometers show RVR > 1,000 m (or visibility > 1,000 m) with a firm improving trend. De-icing apron is **not usable** during LVP (§13/§16 alternate position applies).
- **Missed approach watch-items:** Terrain is the driver here, not traffic — the surrounding hills and the 1985 Mount Oiz accident (§3.1) make early level-off and MSA discipline the standing concern on any go-around.

---

## 11. Departure

- **SIDs (names only — fly the charted version):** Not confirmed in reachable research pass — pull the current-AIRAC SID list at planning. 🟧
- **RNP / climb-gradient requirements:** Not independently confirmed this pass — verify per-SID gradient/equipage on the current chart. 🟧
- **Take-off minima:** Published per AIP; exact figures not confirmed this pass. 🟧
- **Start-up / push-back:** Pilots request start-up/taxi from **Bilbao GMC**; DCL (data-link clearance) departure procedures are in use for ATC clearance and start-up — see AIP ENR 1.5 §3 for the RCD/CLD/CDA message sequence. Voice always prevails over data link on discrepancy.
- **ATC slot / CTOT & clearance:** Bilbao exchanges A-CDM messages (A-DPI/C-DPI) with NMOC; confirm current CTOT/ATFM exposure at planning. 🟧
- **De-icing:** De-icing apron for aircraft up to Code C; **PRKG 111** for aircraft up to Code E; **PRKG 14** as an alternate for Code C or when the de-icing apron is unusable (e.g. during LVP). **Code D/E aircraft de-ice at their own parking stand.** See [`OM E — Cold Weather Operations`](../../../../../flight-ops/cold-weather-operations.md).

---

## 12. Noise & Environmental

- **Noise abatement (NAP):** Helicopters must avoid overflying Erandio, Sondika, Loiu, Zamudio and Derio during the aerodrome traffic circuit, holding, or radio-failure orbits south of the field, maintaining not below 1,000 ft above field elevation. High-noise helicopter types (Bell 212 class or above) must not use the RWY 10/28 circuit for training. No fixed-wing NAP/NADP detail confirmed in reachable sources. 🟧
- **Night noise / dB limits:** Not confirmed in reachable sources. 🟧
- **Engine run-up restrictions:** Engine tests above idle power are **forbidden 0000-0600 LT**; positions are the occupied stand (idle) or PRKG 11 / TWY T4 (north apron, above-idle).
- **Reverse thrust / idle-reverse policy:** Not confirmed in reachable sources — verify locally. 🟧

---

## 13. Ground operations

- **Stands for our types:** 🟥 **Code E aircraft may only park at PRKG 6A (boarding-bridge position) or PRKG 111 (remote, autonomous exit)** — no other stand is authorised for Code E. **PAPI RWY 12/30 is not usable for Code E aircraft.**
- **Push-back:** Mandatory-direction push-back applies (facing east for RWY 30 ops, west for RWY 12 ops); several simultaneous-push-back restrictions apply around PRKG 1-7/21 and 6A/2 — confirm with Ground on the day.
- **Standard taxi routes:** Code E arrivals must vacate RWY 12 via TWY C2 or RWY 30 via TWY C6, taxi via TWY T to A2; departures exit the apron via TWY A2 (from PRKG 6A) or TWY A1 (from PRKG 111), taxiing via TWY T to the runway.
- **Hot spots / tight taxiways:** 🟥 Multiple curved sections require **mandatory oversteering by Code E aircraft** (RWY12-C2, C2-T1, T1-C2, C2-RWY30, C6-T6, T6-C6, and the T3/T4-A2 entries/exits) because wheel clearance to the taxiway edge is under 4 m; TWY C1 is capped at Code C, TWY S1 at Code A.
- **Follow-me:** Required for Code E aircraft at several gate transitions; standard "SÍGAME" (follow-me) service used field-wide during LVP.

---

## 14. Weather & seasonal (durable)

- **Climate / prevailing wind:** Atlantic-influenced coastal-hills climate; no single dominant wind direction confirmed in reachable AIP text.
- **Seasonal hazards:** 🟥 **Windshear on approach is a documented, non-hypothetical hazard at this field** (Iberia 1456, 2001) — treat gusty/frontal wind days with particular caution. A defined snow-plan season (1 Dec-31 Mar) applies, with potassium-acetate/urea ground treatment. See [`OM E — Adverse Weather and Windshear`](../../../../../flight-ops/adverse-weather-and-windshear.md) and [`OM E — Cold Weather Operations`](../../../../../flight-ops/cold-weather-operations.md).
- **Local effects:** Surrounding hilly terrain (§3.1) can generate mechanical turbulence and channelled wind effects near the field boundary — no AIP-published quantification found this pass; corroborate against current METAR/TAF trend at planning. 🟧

> **Live weather — pull at planning (T-2h):** METAR, TAF, TREND, SIGMET/AIRMET. Not stored here.

---

## 15. NOTAMs

> **Pull at planning (T-2h).** Perishable — not stored here. Check: runway/taxiway closures, LVP/CAT II-III equipment status, PAPI status for RWY 12/30 (Code E relevance), navaid U/S, obstacle/crane, RFF downgrade, GPS/RAIM. Source: official AIS / OFP NOTAM block.

---

## 16. Fuel & alternate planning notes

- **Typical role for us:** Destination / alternate (non-base field). `[VAMSYS mirror 2026-07-26]`
- **Nearest suitable alternates:** Company preferred alternates **LESO** (San Sebastián) and **LEMD** ([Madrid-Barajas](../lemd/index.md)) `[VAMSYS mirror 2026-07-26]` — confirm suitability, runway/RFF adequacy and current minima per leg.
- **Fuel-uplift notes:** Jet A-1 and 100LL confirmed via Exolum and SLCA; hours tied to airport operating hours (not H24). See [`OM E — Fuel Policy`](../../../../../flight-ops/fuel-policy.md).
- **Range/perf flags for our fleet:** Runway length (2,540-2,600 m main pair) and the Code E stand/taxi/PAPI restrictions (§13) are the binding planning constraints here, not range. See [`OM B — Fleet Capability Matrix`](../../../../../fleet/capability-matrix.md). 🟧

---

## 17. Fleet-specific notes (optional)

- Any K Global Code E (widebody) type planned into LEBB must plan for **PRKG 6A or PRKG 111 only**, **no PAPI on RWY 12/30**, and mandatory oversteer/signalman guidance on several taxiway sections (§13) — this is a real, field-specific constraint, not a generic caution. See [`OM B — Fleet Capability Matrix`](../../../../../fleet/capability-matrix.md).

---

## 18. Open items (🟧 — confirm against AIP / current AIRAC)

- Preferential/dominant IFR runway configuration by wind — not confirmed from reachable AIP text.
- RWY 30 ILS sub-category (II/IIIA/IIIB) — approach lighting is classed CAT II (750 m); exact current operational category not confirmed from a primary minima table this pass.
- SIDs/STARs (current names and RNP/gradient detail) — not obtained in this research pass; pull the live current-AIRAC procedure list before use.
- Take-off minima exact figures.
- Local terrain/MSA quantification (peaks, bearings/distances) beyond the historical Mount Oiz reference — pull from the current area/approach chart.
- Windshear/turbulence quantification specific to LEBB (no AIP-published wind-threshold table found, unlike the neighbouring LEXJ field) — corroborate against METAR/TAF trend at planning.
- Reverse-thrust/idle-reverse policy, night noise/dB limits, follow-me availability outside Code E/LVP contexts.
- VAMSYS category-letter "S" definition — not documented in this library; confirm against OM B/training-gate criteria.
- Magnetic variation current-day value (sourced to 2020 epoch).

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim material (current-AIRAC charts) informs content but is not listed here.*

- AIP España (ENAIRE eAIP) — AD 2-LEBB, items 1-22, WEF 15-MAY-25 (AIRAC AMDT 04/25), earlier items dated back to AMDT 12/24 / 01/24 — mirrored via https://ops.group/blog/wp-content/uploads/2025/07/LEBB-AIP.pdf (retrieved 2026-07-26). Runway/declared-distance data, RFF, frequencies, navaids, local regulations, LVP, noise procedures, Code E restrictions.
- Wikipedia — "Bilbao Airport" — https://en.wikipedia.org/wiki/Bilbao_Airport (retrieved 2026-07-26). Historical development, Iberia Flight 610 (1985, Mount Oiz) and Iberia Flight 1456 (2001, windshear/gear collapse) accident corroboration.
- OurAirports — https://ourairports.com/airports/LEBB/ (retrieved 2026-07-26). ARP/elevation/runway cross-check.

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-26 | Built from AIP España (ENAIRE); K Global fields from live VAMSYS; 4-page pack. |
