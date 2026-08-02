# ZHHH — Wuhan/Tianhe · Airport Briefing

**ZHHH / WUH** · Wuhan (Huangpi), Hubei, China · Asia
**Version** v0.1 · **Updated** 2026-07-26 · **Status** Draft — provisional, AIP China gated; **not in VAMSYS**

> **Read-me:** Planning aid for the sim, not a chart. Static data is cross-checked from public sources (AIP China / CAAC-AISC is subscription-gated and was not directly reachable this pass); approaches/SIDs/STARs are listed **by name/category only** — fly the charted current-AIRAC version. Live weather/NOTAMs are pulled at planning (§14/§15). **This field is not present in the VAMSYS fleet/route mirror** — category, base flag, taxi times and preferred alternates are all 🟧 pending reconciliation. Open 🟧 items are listed in §18. Flag legend 🟥 restriction/hazard · 🟧 caution/unverified · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| ARP (lat/long) | 30.7748, 114.2137 (30°47′06″N, 114°12′24″E) `[OurAirports / Wikipedia]` |
| Field elevation | **113 ft / 34.5 m AMSL** `[OurAirports / Wikipedia]` |
| Mag variation | Not published / verify 🟧 |
| Time zone | UTC+8 (China Standard Time, no DST) 🟩 |
| Runway(s) | **04/22** 3,400 × 45 m (asphalt) · **05L/23R** 3,600 × 60 m (concrete) · **05R/23L** 3,200 × 45 m (concrete, third runway, completed early 2025) `[OurAirports / Wikipedia]` |
| Preferential runway | Not published / verify 🟧 |
| Longest LDA | ~3,600 m (05L/23R) — exact declared-distance table not confirmed 🟧 |
| Approaches | **ILS reported: RWY 04 CAT II / RWY 22 CAT I; RWY 05L CAT II / RWY 23R CAT I** (Wikipedia-sourced runway note, tier-4 — not independently confirmed against a primary AIP table). ⚠️ This conflicts with an initial task brief noting "CAT III" for this field — **treat the CAT category as unresolved pending primary-AIP confirmation** 🟧 |
| RFF category | Not published / verify 🟧 |
| Control type | Radar (assumed, consistent with the continental-China pattern in the [Asia airspace brief](../../../../airspace/asia.md)) 🟧 |
| Elevation class | Sea-level field (113 ft) on the flat **Jianghan Plain** — no hot-and-high consideration; no significant close-in terrain identified 🟩 |
| Special-airport status | None found in reachable sources 🟧 |
| Customs / PoE | Yes — international gateway; participates in China's 144-hour transit-visa-exemption programme (per Wikipedia); exact desk hours not confirmed 🟧 |
| K Global category | **Not in VAMSYS** 🟧 |
| K Global base | **Not in VAMSYS** 🟧 |
| Company preferred alternates | **Not in VAMSYS** 🟧 |
| Taxi-in / taxi-out (VAMSYS) | **Not in VAMSYS** 🟧 |

---

## 2. Validation summary

| Domain | Flag | Note |
|---|---|---|
| Terrain / CFIT | 🟩 | Flat Jianghan Plain; no close-in high terrain identified in reachable sources. |
| Runway length vs fleet perf | 🟩 | All three runways (3,200–3,600 m) are ample for any K Global widebody at this field elevation. |
| Approach availability / minima | 🟧 | ILS CAT I/II reported per-runway (Wikipedia, tier-4); a separate task-level note flagged CAT III for this field — **the discrepancy is unresolved**, treat as an open item. |
| Airspace / traffic / control | 🟧 | Central-China's busiest airport (31M+ pax/yr, 14th-busiest nationally); China's standard continental radar/ADS-B + centralised ATFM environment applies — field-specific detail not confirmed. |
| Weather / seasonal hazard | 🟧 | Jianghan Plain/central-China climate — summer heat and monsoon convection, winter fog possible on the river plain; field-specific frequency data not found. |
| Curfew / slots / hours | 🟧 | Not confirmed in reachable public sources. |
| RFF category vs our types | 🟧 | Category not published/verified this pass. |
| Fuel availability | 🟧 | Assumed available as a major hub; supplier/hours not confirmed. |
| Customs / handling / security | 🟧 | International PoE and 144-hour transit-exemption programme confirmed generally; exact desk hours not confirmed. |

---

## 3. Threat & Error Management (TEM)

### 3.1 CFIT / Terrain 🟩
ZHHH sits at 113 ft AMSL on the flat **Jianghan Plain** in Wuhan's Huangpi District, roughly 26 km north of the city centre. No close-in high terrain was identified in reachable sources — this is a non-issue field for terrain. Verify the MSA ring on the current chart as routine practice, but CFIT is not the operative threat here.

### 3.2 Airborne conflict / traffic 🟧
ZHHH is the **busiest airport in central China** (31.3M+ passengers in 2025, the 14th-busiest nationally), a hub for China Eastern and China Southern Airlines and a focus city for Air China. A **third runway (05R/23L, 3,200 m) was completed in early 2025**, expanding the field's capacity in step with continued traffic growth. China's standard centralised ATFM/flow-control regime (§6 of the [Asia airspace brief](../../../../airspace/asia.md)) applies as at any major PRC hub; field-specific sector/frequency detail not confirmed. 🟧

### 3.3 Runway excursion 🟧
No displaced-threshold or declared-distance table was found in reachable public sources. The three runways differ in length/width/surface (04/22 asphalt 3,400×45 m; 05L/23R concrete 3,600×60 m; 05R/23L concrete 3,200×45 m) — confirm the assigned runway before planning.

### 3.4 Weather threat 🟧
Wuhan sits on the Jianghan Plain at the confluence of the Yangtze and Han rivers — the regional climate brings **hot, humid summers**, **monsoon-season convective activity**, and the potential for **winter/spring river-plain fog** typical of central-China low-lying plain cities. No ZHHH-specific frequency/statistic was found this pass — treat as general regional climatology pending a primary-source confirmation. See §14.

### 3.5 Operational considerations 🟧
Plan around: (1) an **unresolved ILS category discrepancy** — Wikipedia-sourced data show CAT I/II by runway end while an initial task note flagged CAT III for this field (§1) — confirm from a primary AIP table before relying on either figure; and (2) China's **strict ATFM/flow-control regime** at a fast-growing, very-high-volume central-China hub (§3.2). This field is **not yet reconciled in the VAMSYS fleet/route mirror** — category, base status, alternates and taxi times are all pending confirmation (§16/§18).

---

## 4. Cautions & Warnings

- **ILS category is unresolved** — public runway-end data suggest CAT I/II while a separate note flagged CAT III; confirm the actual capability from a primary AIP source before planning a low-visibility approach here.
- **Three runways differ materially in length/width/surface** — confirm the assigned runway before planning.
- **A third runway (05R/23L) opened only in early 2025** — expect evolving procedures/taxi routing as the airfield adapts to the new layout; treat any older third-party data with caution.
- **This airport is not in the VAMSYS mirror** — category, base flag, preferred alternates and taxi times are all open items.
- Primary AIP (AIP China / CAAC-AISC) was not directly reachable this pass — most operational figures below are flagged 🟧 pending confirmation.

---

## 5. Aerodrome category, restrictions & crew qualification

- **Special-airport / category:** Not operator-categorised as a restricted-crew "special airport" in reachable sources. 🟧
- **Crew-qualification gate:** None specific to ZHHH identified. 🟧
- **Operating restrictions / bans:** Not confirmed in reachable sources — verify current AIRAC/AIP. 🟧
- **Overflight / entry / permits:** Standard PRC international arrival; China requires prior overflight/entry permit for foreign operators generally — confirm at planning per the [Asia airspace brief §9](../../../../airspace/asia.md). Wuhan participates in China's **144-hour transit-visa-exemption programme** for passengers from 53 countries transiting to a third country. 🟧
- **Operations notes:** ANSP — CAAC / regional Air Traffic Management Bureau (Wuhan ACC, ZHWH); airport operator — Wuhan Tianhe International Airport Co. Ltd. ZHHH is the only scheduled passenger airport serving the Wuhan metropolitan area proper (the nearby Ezhou Huahu International Airport serves as a dedicated cargo hub for the region).

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
| Customs | International PoE + 144-hr transit-exemption programme confirmed generally; exact desk hours not confirmed | 🟧 |
| Handling / FBO | Not published / verify | 🟧 |

---

## 7. Runways & declared distances

| RWY | Dimensions | Surface / PCN | TORA | TODA | ASDA | LDA | Notes |
|---|---|---|---|---|---|---|---|
| 04 | 3,400 × 45 m | Asphalt / PCN not published 🟧 | Not published 🟧 | Not published 🟧 | Not published 🟧 | Not published 🟧 | Reported ILS CAT II (tier-4) |
| 22 | 3,400 × 45 m | Asphalt / PCN not published 🟧 | Not published 🟧 | Not published 🟧 | Not published 🟧 | Not published 🟧 | Reported ILS CAT I (tier-4) |
| 05L | 3,600 × 60 m | Concrete / PCN not published 🟧 | Not published 🟧 | Not published 🟧 | Not published 🟧 | Not published 🟧 | Reported ILS CAT II (tier-4); longest/widest runway |
| 23R | 3,600 × 60 m | Concrete / PCN not published 🟧 | Not published 🟧 | Not published 🟧 | Not published 🟧 | Not published 🟧 | Reported ILS CAT I (tier-4) |
| 05R | 3,200 × 45 m | Concrete / PCN not published 🟧 | Not published 🟧 | Not published 🟧 | Not published 🟧 | Not published 🟧 | Third runway, completed early 2025 — no CAT data found |
| 23L | 3,200 × 45 m | Concrete / PCN not published 🟧 | Not published 🟧 | Not published 🟧 | Not published 🟧 | Not published 🟧 | |

*Source: OurAirports (dimensions/surface); Wikipedia (per-runway ILS category note, tier-4). No declared-distance table or primary-AIP category confirmation found in reachable public sources — AIP China / CAAC-AISC gated. All distances metric.*

---

## 8. Communications

| Service | Callsign | Frequency | Hours | Notes |
|---|---|---|---|---|
| ATIS | Not published / verify | 🟧 | 🟧 | |
| Delivery | Not published / verify | 🟧 | 🟧 | |
| Ground | Not published / verify | 🟧 | 🟧 | |
| Tower | Not published / verify | 🟧 | 🟧 | |
| Approach | Not published / verify | 🟧 | 🟧 | |
| Centre / FIR | Wuhan ACC (ZHWH) | Per current AIRAC | H24 (assumed) | No dedicated Asia FIR brief built yet for Wuhan ACC — see the area-level [Asia airspace brief](../../../../airspace/asia.md) |

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
- **Preferential runway logic:** Not published / verify — confirm how the three runways (04/22, 05L/23R, 05R/23L) are allocated by wind/traffic. 🟧
- **Approaches (names only — verify minima on current AIRAC charts):**

| RWY | Approach | IAF | FAF/FAP alt | Notes |
|---|---|---|---|---|
| 04 | ILS reported (CAT II per tier-4) 🟧 | Not published | Not published | Category unresolved — verify current AIRAC |
| 22 | ILS reported (CAT I per tier-4) 🟧 | Not published | Not published | Verify current AIRAC |
| 05L | ILS reported (CAT II per tier-4) 🟧 | Not published | Not published | Category unresolved — verify current AIRAC |
| 23R | ILS reported (CAT I per tier-4) 🟧 | Not published | Not published | Verify current AIRAC |
| 05R/23L | Not confirmed 🟧 | Not published | Not published | Newest runway (2025) — no approach data found |

- **STARs (names only):** Not published / verify. 🟧
- **LVP:** Not confirmed; if the CAT II report is accurate an LVP regime would exist on 04/05L — exact trigger conditions not sourced. 🟧
- **Missed approach watch-items:** Terrain is not the driver (flat plain); the operative concern is re-sequencing into a very busy, fast-growing central-China hub.

---

## 11. Departure

- **SIDs (names only — fly the charted version):** Not published / verify. 🟧
- **RNP / climb-gradient requirements:** Not published / verify — see [`OM E — PBN and RNP Operations`](../../../../../flight-ops/pbn-and-rnp-operations.md) for the regional PBN framework. 🟧
- **Take-off minima:** Not published / verify. 🟧
- **Start-up / push-back:** Not published / verify. 🟧
- **ATC slot / CTOT & clearance:** China's standard centralised ATFM applies at this very-high-volume, fast-growing hub (see [Asia airspace brief §6](../../../../airspace/asia.md)); field-specific regime not confirmed. 🟧
- **De-icing:** Not published / verify — central-China winters can bring occasional cold/fog spells; season/provisioning not confirmed. 🟧

---

## 12. Noise & Environmental

- **Noise abatement (NAP):** Not published / verify. 🟧
- **Night noise / dB limits:** Not published / verify. 🟧
- **Engine run-up restrictions:** Not published / verify. 🟧
- **Reverse thrust / idle-reverse policy:** Not published / verify. 🟧

---

## 13. Ground operations

- **Stands for our types:** Not published / verify — Terminal 3 (opened 2017, capacity 35M pax/yr) is the field's principal terminal; widebody gate allocation not confirmed. 🟧
- **Push-back:** Not published / verify. 🟧
- **Standard taxi routes:** Not published / verify — the new (2025) third runway implies evolving taxi routing; confirm with Ground on the day. 🟧
- **Hot spots / tight taxiways:** Not published / verify. 🟧
- **Follow-me:** Not published / verify. 🟧

---

## 14. Weather & seasonal (durable)

- **Climate / prevailing wind:** Humid subtropical climate on the Jianghan Plain at the Yangtze/Han river confluence; prevailing wind not independently confirmed this pass.
- **Seasonal hazards:** **Hot, humid summers**, **monsoon-season convective activity**, and potential **winter/spring river-plain fog** are the regional pattern for central-China low-lying river-plain cities. No ZHHH-specific frequency statistic confirmed. 🟧
- **Local effects:** Low-lying river-plain location; no significant terrain effects identified.

> **Live weather — pull at planning (T-2h):** METAR, TAF, TREND, SIGMET/AIRMET. Not stored here.

---

## 15. NOTAMs

> **Pull at planning (T-2h).** Perishable — not stored here. Check: runway/taxiway closures (esp. any residual work around the new third runway), navaid U/S, lighting, obstacle/crane, RFF downgrade, GPS/RAIM, China ATFM/flow measures, conflict-zone. Source: AIS / OFP NOTAM block.

---

## 16. Fuel & alternate planning notes

- **Typical role for us:** Not in VAMSYS — role (destination/alternate) pending fleet/route reconciliation. 🟧
- **Nearest suitable alternates:** **Not in VAMSYS** 🟧 — no company-preferred alternate list exists for this field; the region's dense central-China airport network (per the [Asia airspace brief §8](../../../../airspace/asia.md)) suggests good alternate coverage generally, but no specific field has been vetted for this route pending reconciliation.
- **Fuel-uplift notes:** Jet A-1 assumed available as a major hub; supplier/hours not confirmed. 🟧 See [`OM E — Fuel Policy`](../../../../../flight-ops/fuel-policy.md).
- **Range/perf flags for our fleet:** Field length/strength (up to 3,600 m) non-limiting for any K Global type at this elevation. See [`OM B — Fleet Capability Matrix`](../../../../../fleet/capability-matrix.md).

---

## 17. Fleet-specific notes (optional)

- No fleet-specific consideration identified. See [`OM B — Fleet Capability Matrix`](../../../../../fleet/capability-matrix.md).

---

## 18. Open items (🟧 — confirm against AIP / current AIRAC)

- **This field is not present in the VAMSYS fleet/route mirror** — category, base flag, preferred alternates and taxi times all need reconciliation before this brief can be treated as operationally complete.
- **Primary AIP (AIP China / CAAC-AISC) not directly reached this pass** — nearly every operational figure below needs primary-source confirmation.
- **ILS category discrepancy** — Wikipedia-sourced per-runway data (CAT I/II) vs. a separate task-level note (CAT III) for this field — unresolved, confirm from a primary AIP table.
- Mag variation, transition altitude, RFF category, curfew/slot regime.
- ATC frequencies and navaid idents/frequencies — none found in reachable public sources.
- Exact declared-distance (TORA/TODA/ASDA/LDA) table per runway.
- Procedures/approach data for the new (2025) third runway (05R/23L) — not yet reflected in most public sources.
- **Wuhan ACC (ZHWH)** has no dedicated Asia FIR brief built yet — only the area-level Asia brief exists.

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim material (current-AIRAC charts) informs content but is not listed here.*

- OurAirports — https://ourairports.com/airports/ZHHH/ and /runways.html (retrieved 2026-07-26). *ARP/elevation/runway cross-check.*
- Wikipedia — "Wuhan Tianhe International Airport" — https://en.wikipedia.org/wiki/Wuhan_Tianhe_International_Airport (retrieved 2026-07-26). *History, terminal programme, per-runway ILS category note, third-runway completion (early 2025), 144-hour transit-visa programme.*
- **AIP China (CAAC / AISC)** — subscription-gated, not directly reachable this pass. Primary-source verification pending; treat operational figures above as provisional until cross-checked against the current AIP/AIRAC.

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-26 | Built from AIP China (public cross-check where gated); not in VAMSYS — all K Global fields 🟧; 4-page pack. |
