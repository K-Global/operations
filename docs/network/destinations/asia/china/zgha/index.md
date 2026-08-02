# ZGHA — Changsha/Huanghua · Airport Briefing

**ZGHA / CSX** · Changsha, Hunan, China · Asia
**Version** v0.1 · **Updated** 2026-07-26 · **Status** Draft — provisional, AIP China gated; **not in VAMSYS**

> **Read-me:** Planning aid for the sim, not a chart. Static data is cross-checked from public sources (AIP China / CAAC-AISC is subscription-gated and was not directly reachable this pass); approaches/SIDs/STARs are listed **by name/category only** — fly the charted current-AIRAC version. Live weather/NOTAMs are pulled at planning (§14/§15). **This field is not present in the VAMSYS fleet/route mirror** — category, base flag, taxi times and preferred alternates are all 🟧 pending reconciliation. Open 🟧 items are listed in §18. Flag legend 🟥 restriction/hazard · 🟧 caution/unverified · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| ARP (lat/long) | 28.1892, 113.2200 `[OurAirports]` |
| Field elevation | **217 ft / 66 m AMSL** `[OurAirports]` |
| Mag variation | Not published / verify 🟧 |
| Time zone | UTC+8 (China Standard Time, no DST) 🟩 |
| Runway(s) | **18L/36R** 3,800 × 60 m (concrete) · **18R/36L** 3,200 × 45 m (asphalt) — **two true parallel runways**, both aligned 18/36 (N–S) `[OurAirports]` |
| Preferential runway | Not published / verify 🟧 |
| Longest LDA | ~3,800 m (18L/36R) — exact declared-distance table not confirmed 🟧 |
| Approaches | Not published / verify — no ILS category data found in reachable public sources this pass 🟧 |
| RFF category | Not published / verify 🟧 |
| Control type | Radar (assumed, consistent with the continental-China pattern in the [Asia airspace brief](../../../../airspace/asia.md)) 🟧 |
| Elevation class | Near sea-level field (217 ft); Changsha city sits in the Xiang River plain, though **central Hunan is bordered by hill/mountain ranges** (Wuling/Xuefeng to the west, Luoxiao to the east) — a general regional awareness item rather than a confirmed field-specific hazard — see §3.1 🟧 |
| Special-airport status | None found in reachable sources 🟧 |
| Customs / PoE | Yes — regional international gateway; exact desk hours not confirmed 🟧 |
| K Global category | **Not in VAMSYS** 🟧 |
| K Global base | **Not in VAMSYS** 🟧 |
| Company preferred alternates | **Not in VAMSYS** 🟧 |
| Taxi-in / taxi-out (VAMSYS) | **Not in VAMSYS** 🟧 |

---

## 2. Validation summary

| Domain | Flag | Note |
|---|---|---|
| Terrain / CFIT | 🟧 | Changsha itself sits in the Xiang River plain; central Hunan's hill/mountain ranges lie further out — a general regional awareness item, not independently confirmed as a close-in field hazard. |
| Runway length vs fleet perf | 🟩 | Both parallels (3,200 m / 3,800 m) are ample for any K Global widebody at this field elevation. |
| Approach availability / minima | 🟧 | No ILS category data found in reachable public sources this pass. |
| Airspace / traffic / control | 🟧 | Regional Hunan-province gateway; China's standard continental radar/ADS-B + centralised ATFM environment applies — field-specific detail not confirmed. |
| Weather / seasonal hazard | 🟧 | Central-China humid subtropical climate — summer heat/monsoon convection; field-specific frequency data not found. |
| Curfew / slots / hours | 🟧 | Not confirmed in reachable public sources. |
| RFF category vs our types | 🟧 | Category not published/verified this pass. |
| Fuel availability | 🟧 | Assumed available as a regional hub; supplier/hours not confirmed. |
| Customs / handling / security | 🟧 | International PoE assumed as a regional gateway; desk hours not confirmed. |

---

## 3. Threat & Error Management (TEM)

### 3.1 CFIT / Terrain 🟧
ZGHA sits at 217 ft AMSL in the **Xiang River plain** around Changsha. Hunan province as a whole is bordered by hill/mountain ranges — the **Wuling and Xuefeng ranges to the west**, the **Luoxiao range to the east** — but no field-specific close-in terrain or MSA data was found in reachable public sources this pass. Treat this as a **general regional awareness item** rather than a confirmed field hazard; verify the MSA ring and any close-in obstacles on the current area chart before relying on this brief for terrain planning. 🟧

### 3.2 Airborne conflict / traffic 🟧
ZGHA is Hunan province's primary international gateway, with a two-parallel-runway layout and an active terminal-expansion programme (Terminal 3 construction began Feb 2022). China's standard centralised ATFM/flow-control regime (§6 of the [Asia airspace brief](../../../../airspace/asia.md)) applies as at any major PRC hub; the field sits generally within the **Guangzhou (ZGZU)** area-control sector for southern/south-central China traffic. Field-specific sequencing detail not confirmed. 🟧

### 3.3 Runway excursion 🟧
No displaced-threshold or declared-distance table was found in reachable public sources. The two parallels differ materially in length/width/surface (18L/36R concrete 3,800×60 m vs 18R/36L asphalt 3,200×45 m) — confirm the assigned runway before planning.

### 3.4 Weather threat 🟧
Central-China humid subtropical climate — summer heat and monsoon-season convective activity are the standard regional pattern. No ZGHA-specific frequency/statistic was found this pass — treat as general regional climatology pending a primary-source confirmation. See §14.

### 3.5 Operational considerations 🟧
Plan around: (1) the **unconfirmed regional-terrain picture** (§3.1) — Hunan's surrounding hill/mountain ranges warrant a current-chart MSA check even though no field-specific close-in hazard was found; and (2) China's **strict ATFM/flow-control regime** at a growing regional hub (§3.2). This field is **not yet reconciled in the VAMSYS fleet/route mirror** — category, base status, alternates and taxi times are all pending confirmation (§16/§18).

---

## 4. Cautions & Warnings

- **Two parallel runways differ materially in length/width/surface** (18L/36R concrete 3,800×60 m vs 18R/36L asphalt 3,200×45 m) — confirm the assigned runway before planning.
- **Central Hunan is bordered by hill/mountain ranges** (Wuling/Xuefeng west, Luoxiao east) — no field-specific close-in hazard confirmed, but verify the MSA ring on the current chart.
- **Active terminal-expansion programme (T3)** — expect evolving ground layout/procedures at this growing regional gateway.
- **This airport is not in the VAMSYS mirror** — category, base flag, preferred alternates and taxi times are all open items.
- Primary AIP (AIP China / CAAC-AISC) was not directly reachable this pass — most operational figures below are flagged 🟧 pending confirmation.

---

## 5. Aerodrome category, restrictions & crew qualification

- **Special-airport / category:** Not operator-categorised as a restricted-crew "special airport" in reachable sources. 🟧
- **Crew-qualification gate:** None specific to ZGHA identified. 🟧
- **Operating restrictions / bans:** Not confirmed in reachable sources — verify current AIRAC/AIP. 🟧
- **Overflight / entry / permits:** Standard PRC international arrival; China requires prior overflight/entry permit for foreign operators generally — confirm at planning per the [Asia airspace brief §9](../../../../airspace/asia.md). 🟧
- **Operations notes:** ANSP — CAAC / regional Air Traffic Management Bureau, generally within the Guangzhou (ZGZU) sector for southern/south-central China; airport operator — Hunan Airport Group / Changsha Huanghua International Airport Co. A Terminal 3 expansion project began construction 28 Feb 2022.

---

## 6. General / hours / services

| Item | Value | Flag |
|---|---|---|
| ATS hours | Not published / verify (major-hub H24 assumed) | 🟧 |
| AD operating hours | Not published / verify | 🟧 |
| Night / curfew restrictions | Not published / verify | 🟧 |
| RFF category | Not published / verify | 🟧 |
| Fuel | Jet A-1 assumed available as a regional hub; supplier/hours not confirmed | 🟧 |
| PCN | Not published / verify | 🟧 |
| Customs | International PoE assumed; desk hours not confirmed | 🟧 |
| Handling / FBO | Not published / verify | 🟧 |

---

## 7. Runways & declared distances

| RWY | Dimensions | Surface / PCN | TORA | TODA | ASDA | LDA | Notes |
|---|---|---|---|---|---|---|---|
| 18L | 3,800 × 60 m | Concrete / PCN not published 🟧 | Not published 🟧 | Not published 🟧 | Not published 🟧 | Not published 🟧 | Longer/wider of the two parallels |
| 36R | 3,800 × 60 m | Concrete / PCN not published 🟧 | Not published 🟧 | Not published 🟧 | Not published 🟧 | Not published 🟧 | |
| 18R | 3,200 × 45 m | Asphalt / PCN not published 🟧 | Not published 🟧 | Not published 🟧 | Not published 🟧 | Not published 🟧 | Second (shorter) parallel, entered use 30 Mar 2017 |
| 36L | 3,200 × 45 m | Asphalt / PCN not published 🟧 | Not published 🟧 | Not published 🟧 | Not published 🟧 | Not published 🟧 | |

*Source: OurAirports (dimensions/surface); Wikipedia (second-runway commissioning date). No declared-distance table found in reachable public sources — AIP China / CAAC-AISC gated. All distances metric.*

---

## 8. Communications

| Service | Callsign | Frequency | Hours | Notes |
|---|---|---|---|---|
| ATIS | Not published / verify | 🟧 | 🟧 | |
| Delivery | Not published / verify | 🟧 | 🟧 | |
| Ground | Not published / verify | 🟧 | 🟧 | |
| Tower | Not published / verify | 🟧 | 🟧 | |
| Approach | Not published / verify | 🟧 | 🟧 | |
| Centre / FIR | Guangzhou (ZGZU) sector | Per current AIRAC | H24 (assumed) | No dedicated Asia FIR brief built yet for the Guangzhou ACC/Changsha sector — see the area-level [Asia airspace brief](../../../../airspace/asia.md) |

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
- **Preferential runway logic:** Not published / verify — confirm how the two parallels (18L/36R, 18R/36L) are allocated by wind/traffic. 🟧
- **Approaches (names only — verify minima on current AIRAC charts):**

| RWY | Approach | IAF | FAF/FAP alt | Notes |
|---|---|---|---|---|
| 18L/36R | Not published / verify 🟧 | Not published | Not published | No ILS/approach category data found |
| 18R/36L | Not published / verify 🟧 | Not published | Not published | No ILS/approach category data found |

- **STARs (names only):** Not published / verify. 🟧
- **LVP:** Not confirmed — no LVP/CAT data found in reachable sources. 🟧
- **Missed approach watch-items:** Terrain is not confirmed as a close-in factor at the field itself; verify the current-chart MSA given central Hunan's surrounding hill/mountain ranges (§3.1).

---

## 11. Departure

- **SIDs (names only — fly the charted version):** Not published / verify. 🟧
- **RNP / climb-gradient requirements:** Not published / verify — see [`OM E — PBN and RNP Operations`](../../../../../flight-ops/pbn-and-rnp-operations.md) for the regional PBN framework. 🟧
- **Take-off minima:** Not published / verify. 🟧
- **Start-up / push-back:** Not published / verify. 🟧
- **ATC slot / CTOT & clearance:** China's standard centralised ATFM applies at this regional hub (see [Asia airspace brief §6](../../../../airspace/asia.md)); field-specific regime not confirmed. 🟧
- **De-icing:** Not published / verify — central-China winters can bring occasional cold spells; season/provisioning not confirmed. 🟧

---

## 12. Noise & Environmental

- **Noise abatement (NAP):** Not published / verify. 🟧
- **Night noise / dB limits:** Not published / verify. 🟧
- **Engine run-up restrictions:** Not published / verify. 🟧
- **Reverse thrust / idle-reverse policy:** Not published / verify. 🟧

---

## 13. Ground operations

- **Stands for our types:** Not published / verify — active terminal-expansion programme (T3) underway; current widebody stand allocation not confirmed. 🟧
- **Push-back:** Not published / verify. 🟧
- **Standard taxi routes:** Not published / verify — confirm with Ground on the day, particularly given the ongoing T3 construction. 🟧
- **Hot spots / tight taxiways:** Not published / verify. 🟧
- **Follow-me:** Not published / verify. 🟧

---

## 14. Weather & seasonal (durable)

- **Climate / prevailing wind:** Humid subtropical climate typical of central/south-central China (Hunan); prevailing wind not independently confirmed this pass.
- **Seasonal hazards:** Standard central-China **hot, humid summers** and **monsoon-season convective activity**. No ZGHA-specific frequency statistic confirmed. 🟧
- **Local effects:** Changsha sits in the Xiang River plain; surrounding hill/mountain ranges (§3.1) are a regional rather than immediate-field consideration.

> **Live weather — pull at planning (T-2h):** METAR, TAF, TREND, SIGMET/AIRMET. Not stored here.

---

## 15. NOTAMs

> **Pull at planning (T-2h).** Perishable — not stored here. Check: runway/taxiway closures (esp. any T3-construction-related restrictions), navaid U/S, lighting, obstacle/crane, RFF downgrade, GPS/RAIM, China ATFM/flow measures, conflict-zone. Source: AIS / OFP NOTAM block.

---

## 16. Fuel & alternate planning notes

- **Typical role for us:** Not in VAMSYS — role (destination/alternate) pending fleet/route reconciliation. 🟧
- **Nearest suitable alternates:** **Not in VAMSYS** 🟧 — no company-preferred alternate list exists for this field; confirm suitable south-central-China alternates at planning per the [Asia airspace brief §8](../../../../airspace/asia.md).
- **Fuel-uplift notes:** Jet A-1 assumed available as a regional hub; supplier/hours not confirmed. 🟧 See [`OM E — Fuel Policy`](../../../../../flight-ops/fuel-policy.md).
- **Range/perf flags for our fleet:** Field length/strength (up to 3,800 m) non-limiting for any K Global type at this elevation. See [`OM B — Fleet Capability Matrix`](../../../../../fleet/capability-matrix.md).

---

## 17. Fleet-specific notes (optional)

- No fleet-specific consideration identified. See [`OM B — Fleet Capability Matrix`](../../../../../fleet/capability-matrix.md).

---

## 18. Open items (🟧 — confirm against AIP / current AIRAC)

- **This field is not present in the VAMSYS fleet/route mirror** — category, base flag, preferred alternates and taxi times all need reconciliation before this brief can be treated as operationally complete.
- **Primary AIP (AIP China / CAAC-AISC) not directly reached this pass** — nearly every operational figure below needs primary-source confirmation.
- Mag variation, transition altitude, RFF category, curfew/slot regime.
- ATC frequencies and navaid idents/frequencies — none found in reachable public sources.
- Exact declared-distance (TORA/TODA/ASDA/LDA) table per runway.
- Approach/ILS category data — no information found in reachable public sources this pass.
- SID/STAR names and current preferential-runway logic.
- **Central Hunan regional terrain (Wuling/Xuefeng/Luoxiao ranges)** — no field-specific close-in MSA/obstacle data confirmed; verify on the current area chart.
- **Guangzhou (ZGZU) sector / Changsha-area ACC** has no dedicated Asia FIR brief built yet — only the area-level Asia brief exists.

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim material (current-AIRAC charts) informs content but is not listed here.*

- OurAirports — https://ourairports.com/airports/ZGHA/ and /runways.html (retrieved 2026-07-26). *ARP/elevation/runway cross-check.*
- Wikipedia — "Changsha Huanghua International Airport" — https://en.wikipedia.org/wiki/Changsha_Huanghua_International_Airport (retrieved 2026-07-26). *Second-runway commissioning (30 Mar 2017), Terminal 3 construction start (28 Feb 2022).*
- **AIP China (CAAC / AISC)** — subscription-gated, not directly reachable this pass. Primary-source verification pending; treat operational figures above as provisional until cross-checked against the current AIP/AIRAC.

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-26 | Built from AIP China (public cross-check where gated); not in VAMSYS — all K Global fields 🟧; 4-page pack. |
