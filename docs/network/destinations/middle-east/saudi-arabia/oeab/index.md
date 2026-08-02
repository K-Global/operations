# OEAB — Abha · Airport Briefing

**OEAB / AHB** · Abha, Saudi Arabia · Middle East
**Version** v0.1 · **Updated** 2026-07-26 · **Status** Draft

> **Read-me:** Planning aid for the sim, not a chart. Static data is drawn from the GACA/SANS Saudi eAIP (AD 2 OEAB) plus standard public aeronautical data; approaches/SIDs/STARs are listed **by name only** — fly the charted current-AIRAC version. Live weather/NOTAMs are pulled at planning (§14/§15). Open 🟧 items are listed in §18. Flag legend 🟥 restriction/hazard · 🟧 caution/unverified · 🟩 normal.

> 🟥 **STANDING SAFETY NOTICE — DO NOT PLAN WITHOUT A LIVE NOTAM CHECK.** This field has been subject to repeated Houthi missile/drone attacks and coordinated NOTAM closures (most recently 13 July 2026, alongside OEGN/Jizan, OENG/Najran and OESH/Sharurah). As of the most recent research pass (2026-07-26) the open/closed status could not be confirmed with certainty — see §9/§18. **Verify current NOTAM/closure status before any flight planning to this field**, independent of this document's snapshot.

---

## 1. Snapshot

| Field | Value |
|---|---|
| ARP (lat/long) | N18°14'25" / E042°39'23" (18.2404, 42.6566) `[GACA eAIP AD 2.2]` |
| Field elevation | **6,858 ft** (reference temperature 33°C) `[GACA eAIP AD 2.2]` — **the highest-elevation field in the K Global Saudi network** |
| Mag variation | 3° E (2020 epoch) `[GACA eAIP AD 2.2]` |
| Time zone | UTC+3 (AST), no DST |
| Runway(s) | **13/31** — single runway, 3,350 × 45 m. **Correction: the runway is 13/31, not 16/34** — every source reviewed (AIP, Wikipedia, SkyVector, OurAirports) agrees; no evidence of a 16/34 designation was found 🟧 |
| Preferential runway | Not published — a single runway; direction per wind |
| Longest LDA | 3,350 m (both directions) |
| Approaches | **ILS CAT I** on RWY 13 only; **VOR** on 13 and 31; **RNP** not confirmed this pass |
| RFF category | **CAT 9** 🟩 |
| Control type | **Radar** (TMAR, PSR/MSSR from ground level up), Class C CTR / Class B TMA / Class A CTA |
| Elevation class | 🟥 **VERY HIGH ELEVATION (6,858 ft) — mountain airport, hot-and-high + surrounding terrain, a major performance/terrain driver.** See [`OM E — High-Elevation Aerodrome Operations`](../../../../../flight-ops/high-elevation-aerodrome-operations.md) — **cross-linked prominently, apply in full for this field.** |
| Special-airport status | 🟥 **Conflict-zone affected** — repeated Houthi missile/drone attacks since 2019; most recently closed by coordinated NOTAM 13 July 2026. **Verify current status before planning** — see §9. |
| Customs / PoE | **Yes** — H24 `[GACA eAIP AD 2.3]` (when open) |
| K Global category | **Not in VAMSYS** 🟧 |
| K Global base | **Not in VAMSYS** 🟧 |
| Company preferred alternates | **Not in VAMSYS** 🟧 — nearest suitable planning candidates pending reconciliation: **OEJN** (Jeddah, ~480 km) and **OERK** (Riyadh, ~730 km); the closer SW-Saudi fields (Jizan, Najran) share the same conflict-zone exposure and should not be assumed available |
| Taxi-in / taxi-out (VAMSYS) | **Not in VAMSYS** 🟧 |

---

## 2. Validation summary

| Domain | Flag | Note |
|---|---|---|
| Terrain / CFIT | 🟥 | Airport sits atop the Sarawat/Asir mountain range with a dramatic western escarpment toward the Tihamah coastal plain; the AIP-published mandatory departure climb gradients (5.5%/334 ft/NM, both runway directions) are the clearest evidence of a genuinely terrain-constrained environment. |
| Runway length vs fleet perf | 🟧 | 3,350 m is generous for the elevation, but hot-and-high density altitude plus the mandatory climb gradient can jointly force takeoff-weight restrictions on hot days — a genuine dual constraint, not a simple length check. |
| Approach availability / minima | 🟧 | ILS CAT I on RWY 13 only; RWY 31 has VOR only (SALS lighting, non-precision-oriented). |
| Airspace / traffic / control | 🟧 | Radar environment (TMAR); circuit/circling coordination required with neighbouring Khamis Mushait (OEKM) military field ~9 NM away. |
| Weather / seasonal hazard | 🟧 | Local nickname "the City of Fog" — low-vis procedure exists in the AIP; monsoon-influenced rainfall atypical for Saudi Arabia; possible winter frost at elevation with **no de-icing capability on field.** |
| Curfew / slots / hours | 🟧 | ATS/services H24 per AIP, but **AD Administration office hours are Sun–Thu 05:00–13:00 UTC** — a genuine limited-office-hours item distinct from ATS availability. No curfew found. |
| RFF category vs our types | 🟩 | CAT 9 — adequate for the network's widebody types (when the field is operating). |
| Fuel availability | 🟩 | Jet A-1, tanker-delivered; **de-icing NIL** despite winter-cold profile. |
| Customs / handling / security | 🟥 | **Field is not in VAMSYS**, and is subject to active conflict-zone NOTAM closures — treat any planning to OEAB as provisional pending a live check. |

---

## 3. Threat & Error Management (TEM)

### 3.1 CFIT / Terrain 🟥
OEAB sits atop the **Sarawat Mountains** (the Asir segment of the range that runs the length of western Arabia), on a high interior plateau abruptly bounded to the west by an escarpment dropping toward the **Tihamah coastal plain** (the Jizan direction) — a drop reported at over 2,000 m by regional-geography sources, though this specific figure is travel-content-sourced rather than AIP-grade. The highest peaks in the immediate Saudi portion of the range — **Jabal Sawda/Soudah**, officially ~3,015 m (9,892 ft), with a live surveying dispute over whether neighbouring Jabal Ferwa (~3,002 m) is marginally higher — rise roughly 900–1,000 m above the airport elevation itself. **The single clearest AIP-level evidence of a severely terrain-constrained environment is the mandatory minimum departure climb gradient of 5.5% (334 ft/NM) on both runway directions, each explicitly gated "if unable to comply, procedure not authorized."** This is roughly three times a standard 200 ft/NM default gradient and is a hard performance gate, not an advisory note. Holding altitudes at the ABH DVORTAC (11,000–12,000 ft, roughly 4,100–5,150 ft above field elevation) reinforce the high-MSA/terrain-clearance regime. **Cross-link prominently:** [`OM E — High-Elevation Aerodrome Operations`](../../../../../flight-ops/high-elevation-aerodrome-operations.md) — apply this guidance in full for OEAB.

### 3.2 Airborne conflict / traffic 🟧
OEAB shares circuit/circling coordination requirements with the neighbouring military field **Khamis Mushait (OEKM)**, roughly 9 NM away — right-hand circuits for RWY 13 (left-hand only if coordinated with Abha Approach), left-hand for RWY 31 (right-hand only if coordinated with Abha Approach **and** Khamis Tower). This is presented in the AIP primarily as an airspace-coordination note. Cross-ref the [Middle East airspace brief](../../../../airspace/middle-east.md) — Abha sits within the **Jeddah FIR (OEJD)**, in the region the airspace brief specifically identifies as the **Asir/Sarawat terrain belt** on the southern-bypass corridor, now further complicated by the active conflict picture below.

### 3.3 Runway excursion 🟩
No displaced thresholds found; the single runway carries a 120 m stopway and 300 m clearway each end. RWY 31 has the higher/uphill threshold (6,858 ft vs. 6,832 ft at RWY 13) with a −0.25% downhill slope for landings on that end — a minor but real consideration for landing-distance and go-around performance planning on 31.

### 3.4 Weather threat 🟧
Abha's local nickname, **"the City of Fog,"** reflects routine afternoon cloud/mist through the peaks — a genuine, if not independently quantified, low-visibility factor; the AIP's own **low-visibility procedure** (restricting to one movement at a time when TWR cannot observe aircraft operations) directly corroborates that reduced-visibility ops are a known, procedurally addressed condition here. **Monsoon-influenced rainfall** (atypical for Saudi Arabia generally) makes the Sarawat Mountains one of the greenest parts of the Arabian Peninsula, with rain more common in spring (Mar–May) and mid-summer (Jul–Aug) — a plausible but not independently quantified convective-weather season. **Winter nights** at this elevation can drop to 3–7°C with **possible frost at higher elevations near Al-Soudah** — genuinely unusual for Saudi Arabia — but **de-icing is explicitly NIL** at this field: even if icing risk exists meteorologically, there is no on-field mitigation. See §14.

### 3.5 Operational considerations 🟥
Four durable items to plan around: (1) **the mandatory 5.5%/334 ft/NM departure climb gradient**, compounding hot-and-high engine/lift performance penalties — some aircraft/weight/temperature combinations may need takeoff-weight restrictions despite the generous 3,350 m runway; (2) **the field is not in VAMSYS** — all K Global operational fields are pending reconciliation; (3) **repeated, currently active Houthi missile/drone attacks and coordinated NOTAM closures** (§9) — this is the single most important planning consideration for this field and must be re-verified live at planning time, every time; (4) **no de-icing capability** despite a winter-cold, possible-frost profile at this elevation.

---

## 4. Cautions & Warnings

- 🟥 **VERIFY CURRENT NOTAM/CLOSURE STATUS BEFORE ANY PLANNING** — this field has a live, active history of conflict-zone closures; do not rely on this document's snapshot. See §9.
- **Mandatory minimum climb gradient 5.5% (334 ft/NM) on both runway directions** — "procedure not authorized" if unable to comply; this is a hard performance gate.
- **Runway is 13/31, not 16/34** — correcting an earlier internal assumption; use 13/31 throughout.
- **Hot-and-high performance**: 6,858 ft elevation with a 33°C AIP reference temperature is a major density-altitude driver — this is the highest-elevation field in the K Global Saudi network by a wide margin.
- **No CAT II/III capability, and RWY 31 has no ILS at all** — plan CAT I minima on RWY 13 only.
- **No de-icing capability** despite a winter-cold, possible-frost profile — do not assume any on-field mitigation.
- **"City of Fog"** — routine mountain cloud/mist; the AIP's own low-vis procedure (one movement at a time) reflects this as a known condition.
- Circuit coordination required with neighbouring **Khamis Mushait (OEKM)** military field.
- **Field is not in VAMSYS** — do not assume a category, base flag, alternates or taxi-time figure without reconciliation.

---

## 5. Aerodrome category, restrictions & crew qualification

- **Special-airport / category:** Not formally categorised as a restricted-crew "special airport" in reachable AIP text, but the combination of very-high elevation, mandatory steep climb gradients and active conflict-zone exposure make this a field warranting elevated crew briefing and command-level review before any operation. 🟥
- **Crew-qualification gate:** No formal high-elevation-specific crew-qualification requirement was found in reachable sources, but operators should apply [`OM E — High-Elevation Aerodrome Operations`](../../../../../flight-ops/high-elevation-aerodrome-operations.md) in full, including any command-experience or performance-briefing requirement it specifies. 🟧
- **Operating restrictions / bans:** The mandatory departure climb-gradient requirement (§3.1) is explicitly gated — "if unable to comply, procedure not authorized" — the closest thing to a hard operating ban in the reachable AIP text. No RNP AR ban or circling restriction beyond the OEKM-coordination rule was found. 🟧
- **Overflight / entry / permits:** Standard Saudi international arrival when the field is open; **the region is subject to an active regional conflict — cross-ref the [Middle East airspace brief](../../../../airspace/middle-east.md) §9** for the live conflict-zone picture before planning any leg into this airspace.
- **Operations notes:** Aerodrome operator — **GACA**. AD Administration office hours Sun–Thu 05:00–13:00 UTC (distinct from H24 ATS/service availability). Cargo handling — Saudia Airlines, by prior arrangement.

---

## 6. General / hours / services

| Item | Value | Flag |
|---|---|---|
| ATS hours | H24 (when the field is open) `[GACA eAIP AD 2.3]` | 🟧 |
| AD operating hours | H24 at the ATS level; **AD Administration office Sun–Thu 05:00–13:00 UTC only** | 🟧 |
| Night / curfew restrictions | None found beyond the administration-office-hours item above | 🟩 |
| RFF category | CAT 9 | 🟩 |
| Fuel | Jet A-1, tanker-delivered, variable rate | 🟩 |
| PCN | Runway PCN 87/F/A/W/T; Apron 1 PCN 53/R/A/W/T, Apron 2 PCN 58/F/A/W/T | 🟩 |
| Customs | H24 when open, per AIP; field's operating status is currently subject to conflict-zone NOTAM — verify | 🟥 |
| Handling / FBO | Saudia Airlines (cargo handling, by request); repair via Saudia/handling agents by prior arrangement | 🟧 |

---

## 7. Runways & declared distances

| RWY | Dimensions | Surface / PCN | TORA | TODA | ASDA | LDA | Notes |
|---|---|---|---|---|---|---|---|
| 13 | 3,350 × 45 m | Asphalt / PCN 87/F/A/W/T | 3,350 m | 3,650 m | 3,470 m | 3,350 m | THR 6,832 ft; +0.25% slope |
| 31 | 3,350 × 45 m | Asphalt / PCN 87/F/A/W/T | 3,350 m | 3,650 m | 3,470 m | 3,350 m | THR 6,858 ft (highest point); −0.25% slope |

*Source: GACA/SANS eAIP AD 2.12/2.13 (retrieved 2026-07-26). No displaced thresholds found. All distances in metres. Strip 3,710 × 300 m; RESA 90 × 90 m each end; 120 m stopway and 300 × 150 m clearway each end.*

---

## 8. Communications

| Service | Callsign | Frequency | Hours | Notes |
|---|---|---|---|---|
| ATIS | Abha Information | 128.650 | H24 | |
| Ground | Ground Control | 121.700 | H24 | |
| Tower | Abha Tower | 118.100 | H24 | + 358.800 (military) |
| Approach | Abha Approach | 124.500 (Upper primary) / 125.800 (Upper standby) / 130.500 (Lower) | H24 | |
| Centre / FIR | Jeddah FIR (OEJD) | Per current AIRAC | H24 | See [Middle East airspace brief](../../../../airspace/middle-east.md) |

*Source: GACA/SANS eAIP AD 2.18 (retrieved 2026-07-26); cross-checked against SkyVector. No discrete Clearance Delivery frequency found. 🟧*

---

## 9. Navaids

| Aid | Ident | Freq | Hours | Notes |
|---|---|---|---|---|
| ILS/DME 13 | IABH | 109.900 | H24 | CAT I. **RWY 31 has no ILS.** |
| DVOR/TACAN | ABH | 112.900 (CH76X) | H24 | On field |

*Source: GACA/SANS eAIP AD 2.19 (retrieved 2026-07-26).*

### 🟥 Current conflict-zone / NOTAM-closure status — read before planning

- **Attack history (2019–2021):** OEAB has been struck by Houthi missiles/drones multiple times — 12 June 2019 (arrivals hall, 1 killed), 23 June 2019, 2 July 2019, a foiled drone/boat attack 31 August 2020, a drone strike on **10 February 2021 that damaged a Flyadeal A320 on the ground**, and a further drone attack 31 August 2021. An informal Saudi-Houthi truce from around March 2022 paused direct strikes for roughly four years.
- **Major 2026 re-escalation:** On **13 July 2026**, following a Saudi strike on Sanaa's runway, the Houthis launched six ballistic missiles/drones at **Abha International Airport and King Khaled Air Base, Khamis Mushait** — the first direct exchange in roughly four years. Saudi air defences reportedly intercepted the missiles. **Saudi authorities issued a coordinated NOTAM closing four southern civilian airports simultaneously — OEAB Abha, OEGN Jizan, OENG Najran and OESH Sharurah** — within a four-minute window, consistent with a centralised ESCAT-style protocol. This is independently corroborated by OPSGROUP (17 July 2026) and Solace Global (21 July 2026), the latter stating the closure "has been repeatedly extended and remains in effect" as of that date.
- **Status as of this research pass (2026-07-26):** **Ambiguous.** A live NOTAM aggregator check showed no active aerodrome-closure NOTAM for OEAB, which may mean the field has reopened, or may reflect a lag/gap in that feed. **No definitive reopening announcement was found.** Given the fast-moving conflict backdrop (concurrent regional escalation, a declared Houthi maritime blockade near Bab al-Mandeb as of 20 July 2026), **treat this as a live, perishable item — re-verify via a current NOTAM source immediately before any flight planning to OEAB**, not from this document.

---

## 10. Arrival

- **Transition altitude / level:** TA 13,000 ft `[GACA eAIP AD 2.17]`; TL by QNH — verify current chart.
- **Speed:** 250 KIAS below FL100 — confirm current chart.
- **Preferential runway logic:** Single runway; direction per wind.
- **Approaches (names only — verify minima on current AIRAC charts):**

| RWY | Approach | Notes |
|---|---|---|
| 13 | ILS or LOC (IABH), VOR | CAT I |
| 31 | VOR | **No ILS** — SALS lighting only |

- **STARs (names only):** Not confirmed this pass — pull the current-AIRAC name at planning. 🟧
- **LVP:** Low-vis procedure triggers when TWR cannot observe aircraft operations — one movement at a time; no CAT II/III capability.
- **Missed approach watch-items:** Holds at ABH DVORTAC — MHA 12,000 ft for ILS/LOC RWY 13 and VOR RWY 13; MHA 11,000 ft for VOR RWY 31, max 230 KIAS — both well above field elevation, reflecting the high-terrain-clearance environment. Fly the published MAP; verify current chart.

---

## 11. Departure

- **SIDs (names only — fly the charted version):** Not confirmed this pass; the AIP publishes explicit departure climb procedures rather than named SIDs in the extract reviewed — see below. 🟧
- **RNP / climb-gradient requirements:** 🟥 **RWY 13: climb runway heading to 9,000 ft, then proceed via flight-planned route, minimum climb gradient 5.5% (334 ft/NM) — "if unable to comply, procedure not authorized." RWY 31: climb runway heading to 10,500 ft, same minimum gradient, same "not authorized if unable" clause.** This is a hard performance gate — verify against current-type performance data before dispatch. See [`OM E — PBN and RNP Operations`](../../../../../flight-ops/pbn-and-rnp-operations.md) and, critically, [`OM E — High-Elevation Aerodrome Operations`](../../../../../flight-ops/high-elevation-aerodrome-operations.md).
- **Take-off minima:** Published per AIP — exact figures not confirmed this pass. 🟧
- **Start-up / push-back:** Not confirmed in reachable sources. 🟧
- **ATC slot / CTOT & clearance:** No slot-coordination regime identified. 🟩
- **De-icing:** **NIL** — not provided. See [`OM E — Cold Weather Operations`](../../../../../flight-ops/cold-weather-operations.md) — a genuine gap given the winter-cold/possible-frost profile at this elevation.

---

## 12. Noise & Environmental

- **Noise abatement (NAP):** Not published in reachable sources. 🟧
- **Night noise / dB limits:** Not published; no curfew or noise-charge regime identified.
- **Engine run-up restrictions:** Not confirmed in reachable sources. 🟧
- **Reverse thrust / idle-reverse policy:** Not confirmed in reachable sources. 🟧

---

## 13. Ground operations

- **Stands for our types:** Two aprons — Apron 1 (concrete, PCN 53/R/A/W/T) and Apron 2 (concrete/asphalt, PCN 58/F/A/W/T); specific Code E/F designation not confirmed. 🟧
- **Push-back:** Not individually confirmed for our operation. 🟧
- **Standard taxi routes:** Confirm with Ground/Apron on the day; taxiways A/A1/A2 asphalt, PCN 58/F/A/W/T.
- **Hot spots / tight taxiways:** None specifically named in the reachable AIP extract.
- **Follow-me:** Availability not confirmed in reachable sources. 🟧

---

## 14. Weather & seasonal (durable)

- **Climate / prevailing wind:** Arid subtropical climate strongly moderated by altitude — "very mild winters and hot summers" relative to lowland Saudi Arabia; a sample AIP-era METAR shows 43°C air temp with M02 dew point, illustrating the large diurnal swing typical here.
- **Seasonal hazards:** **"The City of Fog"** — routine afternoon mountain cloud/mist, addressed by the AIP's own low-vis procedure. **Winter cold** — nighttime temperatures 3–7°C (Dec–Feb), with **possible frost at higher elevations near Al-Soudah** — genuinely unusual for Saudi Arabia, but **de-icing is explicitly NIL**. **Monsoon-influenced rainfall**, more common in spring (Mar–May) and mid-summer (Jul–Aug), makes this one of the greenest corners of the Arabian Peninsula — plausible convective-weather risk in the wet season, not independently quantified.
- **Local effects:** Mountain-top siting drives essentially all of the field's weather character; escarpment/orographic effects toward the Tihamah plain to the west.

> **Live weather — pull at planning (T-2h):** METAR, TAF, TREND, SIGMET/AIRMET (convective, mountain fog). Not stored here.

---

## 15. NOTAMs

> 🟥 **Pull at planning (T-2h) — MANDATORY for this field given active conflict-zone exposure.** Perishable — not stored here. Check specifically: **aerodrome-closure status** (this field has been repeatedly NOTAM-closed in 2026 — see §9), runway/taxiway closures, navaid U/S, lighting, obstacle/crane, RFF downgrade, GPS/RAIM, and the current Middle East conflict-zone/overflight bulletins. Source: official AIS / OFP NOTAM block. See also the [Middle East airspace brief](../../../../airspace/middle-east.md) §9, which explicitly lists this field among the SW-Saudi airports affected by the Houthi threat arc.

---

## 16. Fuel & alternate planning notes

- **Typical role for us:** Destination — a regional tourism gateway (Asir/Al-Soudah, cool-climate domestic tourism); **not a K Global base** (VAMSYS: not in VAMSYS 🟧). **Currently subject to active conflict-zone risk — treat as a provisional/high-scrutiny destination pending live verification.**
- **Nearest suitable alternates:** **Not in VAMSYS** 🟧 — durable planning candidates pending reconciliation: **OEJN** (Jeddah, ~480 km) and **OERK** (Riyadh, ~730 km). **Do not assume the geographically closer SW-Saudi fields (Jizan/OEGN, Najran/OENG) are available** — they share the same conflict-zone exposure and have been subject to the same coordinated closures.
- **Fuel-uplift notes:** Jet A-1, tanker-delivered; specific into-plane provider not confirmed. 🟧 See [`OM E — Fuel Policy`](../../../../../flight-ops/fuel-policy.md).
- **Range/perf flags for our fleet:** 🟥 3,350 m runway length is generous, but **hot-and-high density altitude combined with the mandatory 5.5% departure climb gradient is a genuine dual performance constraint** — confirm current-type takeoff-weight performance for both runway directions before dispatch. See [`OM B — Fleet Capability Matrix`](../../../../../fleet/capability-matrix.md) and [`OM E — High-Elevation Aerodrome Operations`](../../../../../flight-ops/high-elevation-aerodrome-operations.md).

---

## 17. Fleet-specific notes (optional)

- 🟥 **Every K Global type dispatched to OEAB should have a specific takeoff-performance calculation run against the AIP's 33°C reference temperature, 6,858 ft elevation, and the mandatory 5.5%/334 ft/NM climb gradient on both runway ends** — this is not a generic-airport dispatch; treat OEAB as requiring the same performance rigor as any other high-elevation/hot-and-high field in the network. See [`OM B — Fleet Capability Matrix`](../../../../../fleet/capability-matrix.md) and [`OM E — High-Elevation Aerodrome Operations`](../../../../../flight-ops/high-elevation-aerodrome-operations.md).

---

## 18. Open items (🟧 — confirm against AIP / current AIRAC)

- 🟥 **Current NOTAM/closure status is ambiguous as of this research pass (2026-07-26) — re-verify live before any planning. This is the single highest-priority open item for this field.**
- **Field is not in VAMSYS** — category, base flag, alternates and taxi times all pending reconciliation.
- **Runway designator corrected to 13/31** — the original tasking assumption of 16/34 is not supported by any source reviewed.
- **Jabal Sawda/Soudah elevation** — official figure ~3,015 m (9,892 ft); a commonly-repeated ~3,133 m/10,280 ft figure was not corroborated by any source found — treat as unverified.
- **MSA sector altitudes and detailed obstacle/terrain profile** — not extracted from the AIP's dedicated obstacle/terrain-chart PDFs this pass.
- **Formal density-altitude/performance calculation** — not run this pass; the AIP's own 33°C/6,858 ft figures are clean inputs for a type-specific performance engineering pass.
- **Take-off minima, engine run-up, reverse-thrust policy, follow-me availability** — not confirmed in reachable sources.
- **Ground handling agent for our operation** — not confirmed.
- **AIP currency** — retrieved cycle dated AMDT 09/26 (2026-01-23); verify against current AIRAC before operational use.

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim material (current-AIRAC charts) informs content but is not listed here.*

- **GACA/SANS eAIP, AD 2 OEAB Abha**, AIRAC AMDT 09/26, eff. 2026-01-23 — https://aimss.sans.com.sa/assets/FileManagerFiles/AIP%20AMDT%2009_26_2026_01_23/eAIP/AD%202%20OEAB%20ABHA-en-GB.html (retrieved 2026-07-26).
- Wikipedia — "Abha International Airport" — https://en.wikipedia.org/wiki/Abha_International_Airport (retrieved 2026-07-26). *Attack history, runway designator, tourism context.*
- Wikipedia — "Sarawat Mountains" — https://en.wikipedia.org/wiki/Sarawat_Mountains (retrieved 2026-07-26). *Regional terrain/escarpment geography.*
- OPSGROUP — "Middle East Airspace: Current Operational Picture," 17 July 2026 — https://ops.group/blog/middle-east-airspace-current-operational-picture/ (retrieved 2026-07-26). *Four-airport coordinated NOTAM closure, corroboration.*
- Solace Global — Gulf Sitrep, 21 July 2026 — https://www.solaceglobal.com/news/2026/07/21/gulf-sitrep-2107/ (retrieved 2026-07-26). *Closure-status corroboration.*
- Washington Post — "Yemen's Houthis strike Saudi Arabia's Abha airport," 13 July 2026 — https://www.washingtonpost.com/world/2026/07/13/yemen-houthis-airport-saudi-strikes/3eb0c79c-7eae-11f1-8a16-393bd03340b0_story.html (retrieved 2026-07-26). *Attack event.*

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-26 | Built from AIP Saudi Arabia (GACA); K Global fields from live VAMSYS; 4-page pack. Runway corrected to 13/31 from tasking's 16/34. |
