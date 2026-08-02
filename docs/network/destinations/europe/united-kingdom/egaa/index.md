# EGAA — Aldergrove · Airport Briefing

**EGAA / BFS** · Aldergrove, Co. Antrim, Northern Ireland, United Kingdom · Europe
**Version** v0.1 · **Updated** 2026-07-26 · **Status** Draft

> **Read-me:** Planning aid for the sim, not a chart. Companion to the [EGAA Dispatch](dispatch.md), [Departure](departure.md) and [Arrival](arrival.md) pages. Static data is drawn from the UK AIP (NATS AIS, AD 2 EGAA); approaches/SIDs/STARs are listed **by name only or flagged not-yet-confirmed** — fly the charted current-AIRAC version. Live weather/NOTAMs are pulled at planning (§14/§15). Open 🟧 items are listed in §18. Flag legend 🟥 restriction/hazard · 🟧 caution/unverified · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| ARP (lat/long) | 54°39′27″N 006°12′57″W (midpoint of RWY 07/25) `[UK AIP AD 2 EGAA]` |
| Field elevation | **268 ft / 82 m AMSL** (geoid undulation 185 ft; reference temperature 16°C) |
| Mag variation | **2.15°W** (2022 epoch), annual change 0.22°E |
| Time zone | UTC+0 (GMT) / UTC+1 (BST, UK Daylight Saving) |
| Runway(s) | **07/25** 2,780 × 45 m asphalt (grooved) — non-precision 07 / ILS CAT III 25 · **17/35** 1,891 × 45 m asphalt (porous friction coat) — ILS CAT I 17 / non-precision 35 |
| Preferential runway | No single published preferential-runway rule found — wind/traffic-driven; **low-visibility conditions strongly favour landing on RWY 25**, the only CAT III approach on the field — see §3.5/§10 |
| Longest LDA | 2,780 m (RWY 25) |
| Approaches | **ILS CAT III RWY 25** · **ILS CAT I RWY 17** · **non-precision only RWY 07 and RWY 35** (no ILS) — see §9 |
| RFF category | **CAT A7, H24**; **CAT 8/9 available on request with 24 hours' prior notice only** 🟧 — full widebody-category coverage is **not** automatically on standby, see §3.5/§5 |
| Control type | Radar/procedural mix — **Aldergrove Approach** combines with Tower under the single callsign "Aldergrove" when notified via ATIS; **Aldergrove Director** is HX 0700–2200 (0600–2100) only, not H24 🟧 |
| Elevation class | Near sea-level (268 ft) — **not** hot-and-high; no density-altitude performance driver |
| Special-airport status | Mixed-precision, two-crossing-runway-pair field with backtrack/one-way ground-manoeuvre quirks and an RFF-category-on-request caveat — see §5 |
| Customs / PoE | **Yes — H24** |
| K Global category | **R** `[VAMSYS mirror 2026-07-26]` |
| K Global base | **No** `[VAMSYS mirror 2026-07-26]` |
| Company preferred alternates | **EGPH, EIDW, EGCC** `[VAMSYS mirror 2026-07-26]` |
| Taxi-in / taxi-out (VAMSYS) | **6 min / 8 min** `[VAMSYS mirror 2026-07-26]` |

---

## 2. Validation summary

| Domain | Flag | Note |
|---|---|---|
| Terrain / CFIT | 🟧 | No close-in high terrain identified in the reachable AIP AD 2 extract; Co. Antrim terrain is generally undulating at range — not independently quantified against an MSA chart this pass. |
| Runway length vs fleet perf | 🟧 | RWY 07/25 (2,780 m) is ample for narrowbody and typical widebody weights; **RWY 17/35 (1,891 m, LDA down to 1,791–1,799 m)** is materially shorter and LDA-limited — confirm against the operating type before planning that pair for a heavier aircraft. |
| Approach availability / minima | 🟥 | **Asymmetric across the field: CAT III (RWY 25), CAT I only (RWY 17), non-precision only (RWY 07 and RWY 35)** — the defining TEM item at this airport, see §3.5. |
| Airspace / traffic / control | 🟧 | Class D CTR (9 NM, SFC–FL105); field sits in **Scottish FIR (EGPX)** — **no dedicated Scottish FIR brief exists yet in this network**, see §18. Director position not H24. |
| Weather / seasonal hazard | 🟧 | Atlantic-influenced Northern Ireland climate — recurring low cloud/fog/wind; no EGAA-specific frequency statistic found this pass. |
| Curfew / slots / hours | 🟩 | No hard curfew found in the reachable primary AIP text; tier-4 sources corroborate H24/365-day ops with no slot coordination — a CDA noise-mitigation procedure is tier-4-only and unverified, see §6/§12. |
| RFF category vs our types | 🟧 | CAT A7 is H24, but **CAT 8/9 needs 24 hours' prior notice** — a real advance-planning constraint, not an automatic capability. |
| Fuel availability | 🟩 | AVTUR Jet A-1 H24 (North Air, Global Trek Aviation) confirmed in the primary AIP; AVGAS 100LL hours are restricted. |
| Customs / handling / security | 🟩 | Customs/Immigration and Security both confirmed H24 in the primary AIP; individual handling-agent hours vary (§6). |

---

## 3. Threat & Error Management (TEM)

### 3.1 CFIT / Terrain 🟧
EGAA sits at 268 ft AMSL, roughly 11.5 NM northwest of Belfast in Co. Antrim, Northern Ireland. No close-in high terrain is identified in the reachable AIP AD 2 extract for this build; the surrounding Antrim countryside is generally undulating rather than mountainous, but this has **not been independently quantified** against a current MSA/obstacle chart. Treat as a routine verification item rather than a known hazard — read the MSA ring on the current chart before any arrival/departure/missed-approach planning.

### 3.2 Airborne conflict / traffic 🟧
Belfast CTR is Class D, 9 NM radius, SFC to FL105; the ATZ is 2.5 NM radius, SFC–2,000 ft AGL. The field is worked by **Aldergrove Approach** (133.125, H24), which combines with Tower under the single callsign "Aldergrove" when notified via ATIS — a single-controller-multiplex model that demands situational awareness of workload and service configuration. **Aldergrove Director** (120.905) is HX 0700–2200 (0600–2100) only, **not H24** — outside those hours, expect the combined Approach/Tower service rather than a dedicated director position. UAS operators flying above 400 ft AGL in the vicinity must notify NATS via the Non-Standard Flight Portal at least 14 days ahead — relevant background for drone-related NOTAM awareness. **EGAA sits in Scottish FIR (EGPX)**, worked by Scottish ACC — **no dedicated Scottish FIR brief exists yet in this network** (only a Langen (EDGG) FIR brief has been built to date); this file links to the [Europe area brief](../../../../airspace/europe.md) for general regional context pending that build — see §18, a genuine documentation gap.

### 3.3 Runway excursion 🟥
EGAA's two runway pairs carry several real, sourced ground-manoeuvre quirks that must be briefed, not assumed:
- **RWY 07 full-length take-off requires a backtrack** from the Delta taxiway entry point (turning area 70 m wide at the RWY 07 threshold) — there is no simple line-up-and-go for a full-length departure off 07.
- **RWY 17 landing requires a backtrack** via a turning area 90 × 85 m south of the RWY 35 displaced threshold.
- **RWY 35 has a displaced threshold**, reducing LDA to **1,799 m** (from 1,891 m physical runway length), with a **0.76% downslope over the first 400 m of the LDA** — a genuine energy-management note on an already-shorter runway.
- **180° turns on RWY 17 are NOT permitted for aircraft of 737/A319 size or greater** — such aircraft must continue to the RWY 35 turning circle instead of attempting a tight U-turn. This is a hard, type-driven ground-manoeuvre restriction that captures most of the K Global narrowbody-and-larger fleet — cross-ref [`OM B — Fleet Capability Matrix`](../../../../../fleet/capability-matrix.md).
- The RWY 17/35 pair (1,891 m) is meaningfully shorter than RWY 07/25 (2,780 m) and carries the field's only LDA-limited/displaced-threshold role.

### 3.4 Weather threat 🟧
Northern Ireland's Atlantic-influenced maritime climate brings frequent low cloud, fog, wind and precipitation; no EGAA-specific fog-frequency statistic was found in the reachable primary source this pass. De-icing is provisioned "as required" per the AIP, consistent with a genuine winter icing season — see §14.

### 3.5 Operational considerations 🟥
Two durable constraints define this field's operational character:

**(1) Asymmetric low-visibility capability.** RWY 25 carries the field's only **ILS CAT III** approach; RWY 17 is **ILS CAT I only**; RWY 07 and RWY 35 have **no ILS at all** (non-precision only). This means the approach capability available to a crew is materially different depending on which runway wind and traffic assign — in marginal or low-vis weather where wind does not clearly favour RWY 25, a crew can be funnelled onto a non-precision or CAT-I-only approach with significantly less favourable minima than CAT III. Brief this runway-dependent minima asymmetry explicitly before any approach in deteriorating weather, and weight dispatch fuel/alternate planning accordingly — see [`OM E — Low Visibility Operations`](../../../../../flight-ops/low-visibility-operations.md).

**(2) RFF category is not automatically at full widebody coverage.** RFF Category A7 is provided H24, but **Category 8 and 9 are available only on request with 24 hours' prior notice**. Any unplanned widebody movement — a diversion, a charter surge, or a schedule change routed here without advance coordination — would have only Cat A7 coverage unless the 24-hour notice has been given. This is a real planning gate for K Global, not a formality; treat it as a hard advance-notice item for any widebody consideration at this field.

RFF, navaid and approach infrastructure are otherwise standard for the field's category; the open items in §18 are mostly currency/administrative confirmations rather than newly-identified safety-critical gaps.

---

## 4. Cautions & Warnings

- **RWY 25 is the only CAT III approach on the field**; RWY 17 is CAT I only; RWY 07 and RWY 35 are non-precision only — runway assignment materially changes low-visibility capability.
- **RFF Category 8/9 needs 24 hours' prior notice** — it is not on standing readiness; plan ahead for any widebody movement.
- **180° turn is NOT permitted on RWY 17** for 737/A319-size aircraft or larger — must continue to the RWY 35 turning circle instead.
- **RWY 07 full-length take-off and RWY 17 landing both require a backtrack manoeuvre** — never assume a straight-in/straight-out.
- **RWY 35's displaced threshold** reduces LDA to 1,799 m with a 0.76% downslope over the first 400 m — an energy-management note on the shorter runway pair.
- **Aldergrove Director is HX 0700–2200 (0600–2100) only, not H24** — confirm the current ATC service configuration before planning an off-hours arrival/departure.
- **Minimum third-party insurance of £3,000,000** is required to operate at this airport (AD 2.20) — an administrative gate; confirm company policy meets this.
- **PPR required for use of the RWY 07/25 vacate at Taxiway Bravo**, due to apron pushback procedures — do not assume free use of this taxiway.
- **No dedicated Scottish (EGPX) FIR brief exists yet in this network** — a genuine documentation gap; see §18.

---

## 5. Aerodrome category, restrictions & crew qualification

- **Special-airport / category:** K Global VAMSYS aerodrome category **R** `[VAMSYS mirror 2026-07-26]`. Not identified as an operator-restricted "special airport" in the reachable AIP beyond the runway-asymmetry and backtrack items covered in §3. 🟧
- **Crew-qualification gate:** No CAT II/III-specific crew-currency mandate confirmed for RWY 25 in reachable sources; apply standard company CAT III currency requirements before planning a low-visibility arrival there. The RWY 17/35 backtrack manoeuvres and the RWY 17 180°-turn prohibition (737/A319-size and larger) should be briefed pre-flight for any crew rostered to this field. 🟧
- **Operating restrictions / bans:** 180° turns not permitted on RWY 17 for 737/A319-size aircraft or greater (continue to the RWY 35 turning circle instead); PPR required for the RWY 07/25 vacate at Taxiway Bravo due to apron pushback procedures. No RNP AR ban or circling restriction identified in reachable sources — verify current AIRAC. 🟧
- **Overflight / entry / permits:** Standard UK international arrival, no special state permit required. A **military apron remains on the field** (ex-RAF Aldergrove Flying Station heritage) — strictly PPR, coordinated through Aldergrove Air Ops, Mon–Fri 0800–1700 (0700–1600). Not relevant to scheduled civil operations, but a genuine on-field coordination point should any joint-use movement ever be tasked.
- **Operations notes:** Administered by **Belfast International Airport Ltd**. Minimum third-party insurance of **£3,000,000** required (AD 2.20). Notable capability: the airport's cargo handling offers a full range of equipment available **"up to B747-400 and AN124 aircraft"** — a genuinely significant heavy-cargo capacity worth flagging for any future K Global cargo-unit routing consideration.

---

## 6. General / hours / services

| Item | Value | Flag |
|---|---|---|
| ATS hours | H24 | 🟩 |
| AD operating hours | H24 — AD Administration H24; AIS Briefing Office H24 (self-briefing); ATS Reporting Office H24; MET Briefing Office H24 | 🟩 |
| Night / curfew restrictions | No hard curfew found in the reachable primary AIP text; tier-4 sources report H24/365-day operation with no slot coordination required, and a **continuous descent approach (CDA) noise-mitigation procedure 2200–0700** (approx. 220 kt by 20 NM, 180 kt on base leg, 160 kt on the ILS) — this CDA item is **tier-4-sourced only**, not found in the reachable primary AIP text this pass; recommend confirming against the airport's own noise/operations pages | 🟧 |
| RFF category | CAT A7, H24; **CAT 8/9 available on request with 24 hours' prior notice only** | 🟧 |
| Fuel | AVTUR Jet A-1 **H24** (North Air and Global Trek Aviation); AVGAS 100LL **0900–1700 (0800–1600)** | 🟩 |
| PCN | RWY 07/25 — PCN 71/R/B/X/T; RWY 17/35 — PCN 71/F/C/W/U | 🟩 |
| Customs | H24 | 🟩 |
| Handling / FBO | HAE / Swissport / Global Trek Aviation — H24; EAC — 0900–1700; Woodgate Executive Air Charter — 0900–2000 plus by arrangement; Jet Assist — H24 by prior arrangement | 🟩 |

---

## 7. Runways & declared distances

| RWY | Dimensions | Surface / PCN | TORA | TODA | ASDA | LDA | Notes |
|---|---|---|---|---|---|---|---|
| 07 | 2,780 × 45 m | Asphalt, grooved / PCN 71/R/B/X/T | 2,780 m | 3,073 m | 2,780 m | 2,780 m | **Non-precision only** (no ILS); THR elev 205.8 ft (TDZ 208.0 ft); slope 1:148 up. **Full-length take-off requires a backtrack** from the Delta taxiway entry point; turning area 70 m wide at the threshold. |
| 25 | 2,780 × 45 m | Asphalt, grooved / PCN 71/R/B/X/T | 2,779 m | 3,141 m | 2,779 m | 2,780 m | **ILS CAT III (IAG)**; THR elev 267.5 ft (TDZ 257.5 ft); slope 1:148 down. Only CAT III approach on the field. |
| 17 | 1,891 × 45 m | Asphalt, porous friction coat / PCN 71/F/C/W/U | 1,791 m | 1,889 m | 1,791 m | 1,791 m | **ILS CAT I only (IFT)**; THR elev 206.1 ft (TDZ 215.6 ft); slope −1:114 down. **Landing requires a backtrack** via a turning area 90 × 85 m south of the RWY 35 displaced threshold. **180° turn NOT permitted for 737/A319-size aircraft or greater** — continue to the RWY 35 turning circle. |
| 35 | 1,891 × 45 m | Asphalt, porous friction coat / PCN 71/F/C/W/U | 1,891 m | 2,111 m | 1,891 m | **1,799 m (displaced)** | **Non-precision only** (no ILS); THR elev 257.8 ft (TDZ 257.8 ft, displaced threshold); slope 1:113 up. Downslope of **0.76% over the first 400 m** of the LDA. |

*Several intersection take-off distances are also published from the Delta, Bravo and Charlie taxiway entry points — summarised here rather than individually transcribed; verify exact intersection figures on the current AIRAC chart if an intersection departure is planned. All distances in metres. Source: UK AIP (NATS AIS), AD 2 EGAA, AIRAC effective 2025-03-20 — re-verify against the current AIRAC cycle before operational use.*

---

## 8. Communications

| Service | Callsign | Frequency | Hours | Notes |
|---|---|---|---|---|
| ATIS | Aldergrove Information | 126.130 | H24 | |
| Approach | Aldergrove Approach | 133.125 | H24 | DOC 60 NM/24,500 ft. When notified via ATIS, **Radar and Tower combine on this frequency under the single callsign "Aldergrove."** |
| Director | Aldergrove Director | 120.905 | HX 0700–2200 (0600–2100) | **Not H24** — outside these hours, expect combined Approach/Tower service. 🟧 |
| Tower | Aldergrove Tower | 118.300 | H24 | |
| Ground | Aldergrove Ground | 121.755 | As directed by ATC | |
| Fire (non-ATS) | — | 121.600 | — | |
| Emergency | — | 121.500 | — | |
| Centre / FIR | Scottish ACC (EGPX) | Per current AIRAC | H24 | **No dedicated Scottish FIR brief exists yet in this network** — see [Europe area brief](../../../../airspace/europe.md) for general regional context and §18. |

*Source: UK AIP (NATS AIS), AD 2 EGAA, AIRAC effective 2025-03-20.*

---

## 9. Navaids

| Aid | Ident | Freq | Hours | Notes |
|---|---|---|---|---|
| ILS RWY 17 | IFT | LOC 110.900 / GP 330.800 | H24 (assumed) | **CAT I only.** RDH 50 ft. AIP note: "aircraft may experience glidepath fluctuations outside 8 NM." 🟧 |
| ILS RWY 25 | IAG | LOC 109.900 / GP 333.800 | H24 (assumed) | **CAT III.** RDH 52 ft. AIP note: "caution due to small fluctuations apparent between 8 NM and 5 NM." 🟧 |
| VOR/DME | BEL | 117.200 (CH119X) | H24 (assumed) | On-field, elevation 221 ft. DOC 40 NM/50,000 ft (200 NM/50,000 ft in one sector); possible VOR bearing fluctuations reported in specific sectors. 🟧 |
| DME | IAG / IFT | Paired with ILS RWY 25 / RWY 17 respectively | H24 (assumed) | |

*Source: UK AIP (NATS AIS), AD 2 EGAA, AIRAC effective 2025-03-20. ILS sub-category detail (e.g. IIIA/IIIB for RWY 25) not further broken out in the reachable extract — verify on current AIRAC. 🟧*

---

## 10. Arrival

- **Transition altitude / level:** TA 6,000 ft; TL by QNH — not confirmed in reachable sources this pass, verify current chart. 🟧
- **Speed:** Standard 250 KIAS below FL100 (UK/ICAO norm) — confirm no local override.
- **Preferential runway logic:** No single published preferential-runway rule found — wind/traffic-driven. **Low-visibility conditions strongly favour landing on RWY 25**, the field's only CAT III approach — see §3.5.
- **Approaches (names only — verify minima on current AIRAC charts):**

| RWY | Approach | Notes |
|---|---|---|
| 07 | Non-precision (procedure name/type not confirmed in reachable source) 🟧 | No ILS — verify current AIRAC |
| 25 | ILS (IAG) | **CAT III** — sub-category not confirmed 🟧 |
| 17 | ILS (IFT) | **CAT I only** — glidepath fluctuation caution outside 8 NM |
| 35 | Non-precision (procedure name/type not confirmed in reachable source) 🟧 | No ILS; displaced threshold |

- **STARs (names only):** Not confirmed in reachable research pass — pull the current-AIRAC STAR list at planning. 🟧
- **LVP:** CAT III trigger conditions apply per the field's low-visibility risk on RWY 25 (§3.5); exact RVR/trigger figures not confirmed this pass. 🟧
- **Missed approach watch-items:** No confirmed terrain driver (§3.1); the operative missed-approach concern is the **runway-dependent minima asymmetry** — a missed approach flown from a non-precision or CAT-I-only runway carries materially different minima than one from CAT III RWY 25. Brief this before descent.

---

## 11. Departure

- **SIDs (names only — fly the charted version):** Not confirmed in reachable research pass — pull the current-AIRAC SID list at planning. 🟧
- **RNP / climb-gradient requirements:** Not confirmed this pass — verify equipage/gradient on the current chart. See [`OM E — PBN and RNP Operations`](../../../../../flight-ops/pbn-and-rnp-operations.md).
- **Take-off minima:** Published per AIP — exact figures not confirmed this pass. 🟧
- **Start-up / push-back:** **PPR required for use of the RWY 07/25 vacate at Taxiway Bravo**, due to apron pushback procedures — a real advance-coordination item, not a formality.
- **ATC slot / CTOT & clearance:** No slot coordination required per tier-4 corroboration (unverified against a primary source this pass) 🟧; standard UK/EU ATFM/CTOT flow-management practice may still apply in constrained circumstances.
- **De-icing:** Provisioned "as required" per the primary AIP; no dedicated pad or holdover-time detail confirmed this pass. 🟧 See [`OM E — Cold Weather Operations`](../../../../../flight-ops/cold-weather-operations.md).

---

## 12. Noise & Environmental

- **Noise abatement (NAP):** Not confirmed from the reachable primary AIP text this pass. Tier-4 public sources report a **continuous descent approach (CDA) noise-mitigation procedure 2200–0700** with speed constraints of approximately 220 kt by 20 NM, 180 kt on base leg and 160 kt on the ILS — flagged 🟧 as **tier-4-sourced and unverified against the primary AIP**; recommend confirming against the airport's own noise/operations pages before relying on it operationally.
- **Night noise / dB limits:** Not confirmed in reachable sources. 🟧
- **Engine run-up restrictions:** Not confirmed in reachable sources. 🟧
- **Reverse thrust / idle-reverse policy:** Not confirmed in reachable sources. 🟧

---

## 13. Ground operations

- **Stands for our types:** Not detailed in the reachable primary source this pass. 🟧 A military apron remains on the field (ex-RAF Aldergrove heritage), strictly PPR via Aldergrove Air Ops (Mon–Fri 0800–1700/0700–1600) — not relevant to scheduled civil stand planning.
- **Push-back:** **PPR required for use of the RWY 07/25 vacate at Taxiway Bravo**, due to apron pushback procedures. 🟥
- **Standard taxi routes:** The AIP publishes a **Standard Arrival Routing for IFR RWY 25 arrivals to the main terminal**: after landing, vacate right onto RWY 35, right onto Taxiway Charlie, then hold at C2 pending further ATC taxi clearance. This is a genuine, distinctive quirk — a RWY 25 arrival crosses onto the field's *other* runway (35) as part of its standard routing to the terminal. Brief this explicitly; it is a real ground-complexity point, not an incidental detail. 🟧
- **Hot spots / tight taxiways:** 🟥 **Taxiway Bravo** (PPR, apron pushback procedures); the **RWY 25-arrival-via-RWY 35 crossing routing** described above; **winter RWY 17/35 sweeping priority** is addressed in local snow-clearance procedures (detail not confirmed this pass). 🟧
- **Follow-me:** Not confirmed in reachable sources. 🟧

---

## 14. Weather & seasonal (durable)

- **Climate / prevailing wind:** Northern Ireland's Atlantic-influenced maritime climate — frequent low cloud, fog, wind and precipitation.
- **Seasonal hazards:** Winter fog/low cloud is a recurring regional theme, consistent with why RWY 25's CAT III infrastructure exists at this field; de-icing is provisioned "as required" per the AIP, consistent with a genuine winter icing season. No EGAA-specific fog-frequency statistic was found in this pass. 🟧
- **Local effects:** Not detailed in reachable sources this pass. 🟧

> **Live weather — pull at planning (T-2h):** METAR, TAF, TREND, SIGMET/AIRMET. Not stored here.

---

## 15. NOTAMs

> **Pull at planning (T-2h).** Perishable — not stored here. Check: runway/taxiway closures (esp. Taxiway Bravo PPR status and the RWY 25-via-RWY 35 arrival routing), navaid U/S (ILS RWY 17/25, VOR/DME BEL), lighting, obstacle/crane, RFF downgrade or the current Cat 8/9-on-request status, GPS/RAIM, and any Director-position service-hour changes. Source: official AIS / OFP NOTAM block.

---

## 16. Fuel & alternate planning notes

- **Typical role for us:** Destination / alternate — **not** a K Global base `[VAMSYS mirror 2026-07-26]`.
- **Nearest suitable alternates:** Company preferred alternates [**EGPH**](../egph/index.md) (Edinburgh), [**EIDW**](../../ireland/eidw/index.md) (Dublin), [**EGCC**](../egcc/index.md) (Manchester) `[VAMSYS mirror 2026-07-26]` — confirm suitability, runway/RFF adequacy and current minima per leg.
- **Fuel-uplift notes:** AVTUR Jet A-1 available **H24** (North Air and Global Trek Aviation); AVGAS 100LL restricted to 0900–1700 (0800–1600). See [`OM E — Fuel Policy`](../../../../../flight-ops/fuel-policy.md).
- **Range/perf flags for our fleet:** RWY 17/35 (1,891 m, LDA down to 1,791–1,799 m) is the shorter, LDA-limited pair — confirm against type/weight before planning it for a heavier aircraft; RWY 07/25 (2,780 m) is non-limiting for narrowbody and typical widebody weights. See [`OM B — Fleet Capability Matrix`](../../../../../fleet/capability-matrix.md).

---

## 17. Fleet-specific notes (optional)

- **180° turn restriction, RWY 17:** Not permitted for 737/A319-size aircraft or larger — affects most of the K Global narrowbody-and-above fleet; such aircraft must continue to the RWY 35 turning circle instead. See [`OM B — Fleet Capability Matrix`](../../../../../fleet/capability-matrix.md) for type-by-type reference.
- **RFF Cat 8/9-on-request caveat:** Directly relevant to any widebody consideration at this field — the 24-hour advance-notice requirement should be built into any dispatch plan involving a K Global widebody type.

---

## 18. Open items (🟧 — confirm against AIP / current AIRAC)

- **Scottish (EGPX) FIR brief does not yet exist in this network.** EGAA is worked by Scottish ACC per this field's own AIP data; only a Langen (EDGG) FIR brief has been built so far. This is a genuine network gap, flagged explicitly rather than papered over — a dedicated Scottish FIR brief should be built.
- **CDA noise-mitigation procedure (2200–0700)** — tier-4-sourced only, not found in the reachable primary AIP text this pass; confirm against the airport's own noise/operations pages.
- **SIDs/STARs (current names), take-off minima, transition level** — not confirmed in reachable sources.
- **ILS RWY 25 sub-category (IIIA/IIIB/IIIC)** — not confirmed from a primary table this pass.
- **Non-precision approach type/name for RWY 07 and RWY 35** — not confirmed; do not assume a specific procedure type without checking the current AIRAC.
- **Terrain/MSA quantification** — no close-in high terrain identified, but not independently confirmed against a current MSA chart.
- **Stands/apron layout for our types** — not detailed in reachable sources.
- **Engine run-up restrictions, reverse-thrust/idle-reverse policy, follow-me availability, push-back mandatory-vs-self-manoeuvre policy** — none confirmed.
- **Intersection take-off distances (Delta/Bravo/Charlie)** — summarised rather than individually transcribed; verify exact figures on current AIRAC if needed.
- **AIRAC currency** — the primary source retrieved carries an effective date of 2025-03-20; re-verify against the current AIRAC cycle before operational use.

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim material (current-AIRAC charts) informs content but is not listed here.*

- **UK AIP (NATS AIS), AD 2 EGAA**, AIRAC effective 2025-03-20 — https://www.aurora.nats.co.uk/htmlAIP/Publications/2025-03-20-AIRAC/html/eAIP/EG-AD-2.EGAA-en-GB.html (retrieved 2026-07-26). *Primary source for ARP, elevation, mag var, runways/declared distances, PCN, RFF, hours, communications, navaids, local aerodrome regulations (AD 2.20).* **Re-verify against the current AIRAC cycle before operational use.**
- OurAirports — https://ourairports.com/airports/EGAA/ (retrieved 2026-07-26). *Cross-check.*
- SkyVector — https://skyvector.com/airport/EGAA (retrieved 2026-07-26). *Cross-check.*
- Wikipedia — "Belfast International Airport" — https://en.wikipedia.org/wiki/Belfast_International_Airport (retrieved 2026-07-26). *General background/traffic-character context only — cited neutrally, not as a K Global operational relationship.*

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-26 | Built from UK AIP (NATS AIS); K Global fields from live VAMSYS; 4-page pack. |
