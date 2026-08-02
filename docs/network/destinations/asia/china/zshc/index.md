# ZSHC — Hangzhou/Xiaoshan · Airport Briefing

**ZSHC / HGH** · Hangzhou, Zhejiang, China · Asia
**Version** v0.1 · **Updated** 2026-07-26 · **Status** Draft — provisional, AIP China gated; **not in VAMSYS**

> **Read-me:** Planning aid for the sim, not a chart. Static data is cross-checked from public sources (AIP China / CAAC-AISC is subscription-gated and was not directly reachable this pass); approaches/SIDs/STARs are listed **by name/category only** — fly the charted current-AIRAC version. Live weather/NOTAMs are pulled at planning (§14/§15). **This field is not present in the VAMSYS fleet/route mirror** — category, base flag, taxi times and preferred alternates are all 🟧 pending reconciliation. Open 🟧 items are listed in §18. Flag legend 🟥 restriction/hazard · 🟧 caution/unverified · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| ARP (lat/long) | 30.2361, 120.4289 `[OurAirports]` |
| Field elevation | **23 ft / 7 m AMSL** `[OurAirports]` |
| Mag variation | Not published / verify 🟧 |
| Time zone | UTC+8 (China Standard Time, no DST) 🟩 |
| Runway(s) | **06/24** 3,400 × 60 m (concrete) · **07/25** 3,600 × 45 m (concrete) — **two near-parallel runways**, both bearing approx. 063°/243° `[OurAirports; bearing cross-check]` |
| Preferential runway | Not published / verify 🟧 |
| Longest LDA | ~3,600 m (07/25) — exact declared-distance table not confirmed 🟧 |
| Approaches | **ILS CAT III** reported for this field per the operator/route-planning brief — **not independently corroborated by a public source in this research pass**; treat as unconfirmed pending primary-AIP access 🟧 |
| RFF category | Not published / verify 🟧 |
| Control type | Radar (assumed, consistent with the continental-China pattern in the [Asia airspace brief](../../../../airspace/asia.md)) 🟧 |
| Elevation class | Sea-level field (23 ft) on the flat **Hangzhou/Qiantang River plain** — no hot-and-high consideration; no significant close-in terrain identified 🟩 |
| Special-airport status | None found in reachable sources 🟧 |
| Customs / PoE | Yes — major East-China international gateway; exact desk hours not confirmed 🟧 |
| K Global category | **Not in VAMSYS** 🟧 |
| K Global base | **Not in VAMSYS** 🟧 |
| Company preferred alternates | **Not in VAMSYS** 🟧 |
| Taxi-in / taxi-out (VAMSYS) | **Not in VAMSYS** 🟧 |

---

## 2. Validation summary

| Domain | Flag | Note |
|---|---|---|
| Terrain / CFIT | 🟩 | Flat Hangzhou/Qiantang River plain; no close-in high terrain identified in reachable sources. |
| Runway length vs fleet perf | 🟩 | Both runways (3,400 m / 3,600 m) are ample for any K Global widebody at this field elevation. |
| Approach availability / minima | 🟧 | CAT III reported for this field but not corroborated by an independent public source this pass — treat as unconfirmed. |
| Airspace / traffic / control | 🟧 | Major East-China hub serving the Yangtze River Delta/Hangzhou region; China's standard continental radar/ADS-B + centralised ATFM environment applies — field-specific detail not confirmed. |
| Weather / seasonal hazard | 🟧 | East-China coastal-plain climate — summer heat/monsoon convection and **typhoon-season exposure (~May–Nov, peak Jul–Sep)** per the regional pattern in the [Asia airspace brief §11](../../../../airspace/asia.md); field-specific frequency data not found. |
| Curfew / slots / hours | 🟧 | Not confirmed in reachable public sources. |
| RFF category vs our types | 🟧 | Category not published/verified this pass. |
| Fuel availability | 🟧 | Assumed available as a major hub; supplier/hours not confirmed. |
| Customs / handling / security | 🟧 | International PoE assumed as a major East-China gateway; desk hours not confirmed. |

---

## 3. Threat & Error Management (TEM)

### 3.1 CFIT / Terrain 🟩
ZSHC sits at 23 ft AMSL on the flat **Hangzhou/Qiantang River plain** in Zhejiang province. No close-in high terrain was identified in reachable sources — this is a non-issue field for terrain. Verify the MSA ring on the current chart as routine practice, but CFIT is not the operative threat here.

### 3.2 Airborne conflict / traffic 🟧
ZSHC is a major gateway for the Yangtze River Delta / Hangzhou region, operating a multi-terminal complex (T1/T2/T3) and two near-parallel runways. China's standard centralised ATFM/flow-control regime (§6 of the [Asia airspace brief](../../../../airspace/asia.md)) applies as at any major PRC hub, and the field sits within the broader **Shanghai (ZSHA)** area-control sector for East-China traffic; field-specific sequencing detail not confirmed. 🟧

### 3.3 Runway excursion 🟧
No displaced-threshold or declared-distance table was found in reachable public sources. The two runways differ in length/width (06/24: 3,400×60 m; 07/25: 3,600×45 m) despite near-identical bearings — confirm the assigned runway before planning.

### 3.4 Weather threat 🟧
Hangzhou sits on the East-China coastal plain and is exposed to the region's **NW-Pacific/South China Sea typhoon season (~May–Nov, peak Jul–Sep)** described in the [Asia airspace brief §11](../../../../airspace/asia.md), alongside standard summer monsoon convection. No ZSHC-specific frequency/statistic was found this pass — treat as general regional climatology pending a primary-source confirmation. See §14.

### 3.5 Operational considerations 🟧
Plan around: (1) the **unconfirmed CAT III report** (§1) — do not rely on it without primary-AIP confirmation; and (2) **typhoon-season exposure** as an East-China coastal-plain field (§3.4). This field is **not yet reconciled in the VAMSYS fleet/route mirror** — category, base status, alternates and taxi times are all pending confirmation (§16/§18).

---

## 4. Cautions & Warnings

- **ILS CAT III report is unconfirmed** — no independent public corroboration found this pass; do not plan a low-visibility approach relying on this capability without primary-AIP confirmation.
- **Two near-parallel runways differ in length/width** (06/24 3,400×60 m vs 07/25 3,600×45 m) — confirm the assigned runway before planning.
- **Typhoon-season exposure (~May–Nov, peak Jul–Sep)** — build weather-independent alternate planning and extra fuel/holding in season, per the regional pattern.
- **This airport is not in the VAMSYS mirror** — category, base flag, preferred alternates and taxi times are all open items.
- Primary AIP (AIP China / CAAC-AISC) was not directly reachable this pass — most operational figures below are flagged 🟧 pending confirmation.

---

## 5. Aerodrome category, restrictions & crew qualification

- **Special-airport / category:** Not operator-categorised as a restricted-crew "special airport" in reachable sources. 🟧
- **Crew-qualification gate:** None specific to ZSHC identified. 🟧
- **Operating restrictions / bans:** Not confirmed in reachable sources — verify current AIRAC/AIP. 🟧
- **Overflight / entry / permits:** Standard PRC international arrival; China requires prior overflight/entry permit for foreign operators generally — confirm at planning per the [Asia airspace brief §9](../../../../airspace/asia.md). 🟧
- **Operations notes:** ANSP — CAAC / regional Air Traffic Management Bureau, within the broader Shanghai (ZSHA) sector; airport operator — Hangzhou Xiaoshan International Airport Co.

---

## 6. General / hours / services

| Item | Value | Flag |
|---|---|---|
| ATS hours | Not published / verify (major-hub H24 assumed) | 🟧 |
| AD operating hours | Not published / verify | 🟧 |
| Night / curfew restrictions | Not published / verify | 🟧 |
| RFF category | Not published / verify | 🟧 |
| Fuel | Jet A-1 assumed available as a major hub; supplier/hours not confirmed | 🟧 |
| PCN | Not published / verify | 🟧 |
| Customs | International PoE assumed; desk hours not confirmed | 🟧 |
| Handling / FBO | Not published / verify | 🟧 |

---

## 7. Runways & declared distances

| RWY | Dimensions | Surface / PCN | TORA | TODA | ASDA | LDA | Notes |
|---|---|---|---|---|---|---|---|
| 06 | 3,400 × 60 m | Concrete / PCN not published 🟧 | Not published 🟧 | Not published 🟧 | Not published 🟧 | Not published 🟧 | Near-parallel with 07/25 (both ~063°/243°) |
| 24 | 3,400 × 60 m | Concrete / PCN not published 🟧 | Not published 🟧 | Not published 🟧 | Not published 🟧 | Not published 🟧 | |
| 07 | 3,600 × 45 m | Concrete / PCN not published 🟧 | Not published 🟧 | Not published 🟧 | Not published 🟧 | Not published 🟧 | Longer of the two |
| 25 | 3,600 × 45 m | Concrete / PCN not published 🟧 | Not published 🟧 | Not published 🟧 | Not published 🟧 | Not published 🟧 | |

*Source: OurAirports (dimensions/surface); bearing cross-check from public airport-data aggregators. No declared-distance table or primary-AIP category confirmation found in reachable public sources — AIP China / CAAC-AISC gated. All distances metric.*

---

## 8. Communications

| Service | Callsign | Frequency | Hours | Notes |
|---|---|---|---|---|
| ATIS | Not published / verify | 🟧 | 🟧 | |
| Delivery | Not published / verify | 🟧 | 🟧 | |
| Ground | Not published / verify | 🟧 | 🟧 | |
| Tower | Not published / verify | 🟧 | 🟧 | |
| Approach | Not published / verify | 🟧 | 🟧 | |
| Centre / FIR | Shanghai (ZSHA) sector | Per current AIRAC | H24 (assumed) | No dedicated Asia FIR brief built yet for the Shanghai ACC/Hangzhou sector — see the area-level [Asia airspace brief](../../../../airspace/asia.md) |

*No ATC frequency table found in reachable public sources this pass. Pull current-AIRAC values at planning.*

---

## 9. Navaids

| Aid | Ident | Freq | Hours | Notes |
|---|---|---|---|---|
| Not published / verify 🟧 | — | — | — | No navaid table found in reachable public sources this pass |

---

## 10. Arrival

- **Transition altitude / level:** Not published / verify. 🟧
- **Speed:** Standard 250 KIAS below FL100 (ICAO norm) — confirm no local override on current chart.
- **Preferential runway logic:** Not published / verify — confirm how the two near-parallel runways (06/24, 07/25) are allocated by wind/traffic. 🟧
- **Approaches (names only — verify minima on current AIRAC charts):**

| RWY | Approach | IAF | FAF/FAP alt | Notes |
|---|---|---|---|---|
| 06/24 | ILS reported, CAT III unconfirmed 🟧 | Not published | Not published | Verify current AIRAC |
| 07/25 | ILS reported, CAT III unconfirmed 🟧 | Not published | Not published | Verify current AIRAC |

- **STARs (names only):** Not published / verify. 🟧
- **LVP:** Not confirmed; the CAT III report (§1) is unconfirmed by independent sources — do not assume an LVP regime without primary-AIP confirmation. 🟧
- **Missed approach watch-items:** Terrain is not the driver (flat plain); the operative concern is typhoon-season weather and re-sequencing at a busy East-China hub.

---

## 11. Departure

- **SIDs (names only — fly the charted version):** Not published / verify. 🟧
- **RNP / climb-gradient requirements:** Not published / verify — see [`OM E — PBN and RNP Operations`](../../../../../flight-ops/pbn-and-rnp-operations.md) for the regional PBN framework. 🟧
- **Take-off minima:** Not published / verify. 🟧
- **Start-up / push-back:** Not published / verify. 🟧
- **ATC slot / CTOT & clearance:** China's standard centralised ATFM applies at this major East-China hub (see [Asia airspace brief §6](../../../../airspace/asia.md)); field-specific regime not confirmed. 🟧
- **De-icing:** Not published / verify — East-China coastal-plain winters are generally mild; season/provisioning not confirmed. 🟧

---

## 12. Noise & Environmental

- **Noise abatement (NAP):** Not published / verify. 🟧
- **Night noise / dB limits:** Not published / verify. 🟧
- **Engine run-up restrictions:** Not published / verify. 🟧
- **Reverse thrust / idle-reverse policy:** Not published / verify. 🟧

---

## 13. Ground operations

- **Stands for our types:** Not published / verify — a multi-terminal (T1/T2/T3) major East-China gateway; widebody gate allocation not confirmed. 🟧
- **Push-back:** Not published / verify. 🟧
- **Standard taxi routes:** Not published / verify — confirm with Ground on the day. 🟧
- **Hot spots / tight taxiways:** Not published / verify. 🟧
- **Follow-me:** Not published / verify. 🟧

---

## 14. Weather & seasonal (durable)

- **Climate / prevailing wind:** Humid subtropical coastal-plain climate typical of the Yangtze River Delta; prevailing wind not independently confirmed this pass.
- **Seasonal hazards:** **NW-Pacific/South China Sea typhoon season (~May–Nov, peak Jul–Sep)** per the regional pattern in the [Asia airspace brief §11](../../../../airspace/asia.md); standard East-China summer monsoon convection. No ZSHC-specific frequency statistic confirmed. 🟧
- **Local effects:** Low-lying coastal-plain location; no significant terrain effects identified.

> **Live weather — pull at planning (T-2h):** METAR, TAF, TREND, SIGMET/AIRMET, tropical-cyclone advisories. Not stored here.

---

## 15. NOTAMs

> **Pull at planning (T-2h).** Perishable — not stored here. Check: runway/taxiway closures, navaid U/S, lighting, obstacle/crane, RFF downgrade, GPS/RAIM, China ATFM/flow measures, typhoon/tropical-cyclone advisories, conflict-zone. Source: AIS / OFP NOTAM block.

---

## 16. Fuel & alternate planning notes

- **Typical role for us:** Not in VAMSYS — role (destination/alternate) pending fleet/route reconciliation. 🟧
- **Nearest suitable alternates:** **Not in VAMSYS** 🟧 — no company-preferred alternate list exists for this field; the dense East-China/Yangtze-Delta airport network (per the [Asia airspace brief §8](../../../../airspace/asia.md)) suggests good alternate coverage generally, but no specific field has been vetted for this route pending reconciliation.
- **Fuel-uplift notes:** Jet A-1 assumed available as a major hub; supplier/hours not confirmed. 🟧 See [`OM E — Fuel Policy`](../../../../../flight-ops/fuel-policy.md).
- **Range/perf flags for our fleet:** Field length/strength (3,400–3,600 m) non-limiting for any K Global type at this elevation. See [`OM B — Fleet Capability Matrix`](../../../../../fleet/capability-matrix.md).

---

## 17. Fleet-specific notes (optional)

- No fleet-specific consideration identified. See [`OM B — Fleet Capability Matrix`](../../../../../fleet/capability-matrix.md).

---

## 18. Open items (🟧 — confirm against AIP / current AIRAC)

- **This field is not present in the VAMSYS fleet/route mirror** — category, base flag, preferred alternates and taxi times all need reconciliation before this brief can be treated as operationally complete.
- **Primary AIP (AIP China / CAAC-AISC) not directly reached this pass** — nearly every operational figure below needs primary-source confirmation.
- **ILS CAT III report is unconfirmed** — no independent public corroboration found; verify from a primary AIP table before relying on this capability.
- Mag variation, transition altitude, RFF category, curfew/slot regime.
- ATC frequencies and navaid idents/frequencies — none found in reachable public sources.
- Exact declared-distance (TORA/TODA/ASDA/LDA) table per runway.
- SID/STAR names and current preferential-runway logic.
- **Shanghai (ZSHA) sector / Hangzhou-area ACC** has no dedicated Asia FIR brief built yet — only the area-level Asia brief exists.

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim material (current-AIRAC charts) informs content but is not listed here.*

- OurAirports — https://ourairports.com/airports/ZSHC/ and /runways.html (retrieved 2026-07-26). *ARP/elevation/runway cross-check.*
- Wikipedia — "Hangzhou Xiaoshan International Airport" — https://en.wikipedia.org/wiki/Hangzhou_Xiaoshan_International_Airport (retrieved 2026-07-26). *General airport reference.*
- **AIP China (CAAC / AISC)** — subscription-gated, not directly reachable this pass. Primary-source verification pending; treat operational figures above as provisional until cross-checked against the current AIP/AIRAC.

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-26 | Built from AIP China (public cross-check where gated); not in VAMSYS — all K Global fields 🟧; 4-page pack. |
