# ORBI — Baghdad Intl · Airport Briefing

**ORBI / BGW** · Baghdad, Iraq · Middle East
**Version** v0.1 · **Updated** 2026-07-26 · **Status** Draft — Iraq AIP (ICAA) not reachable this pass; built from cross-checked public tier-4 sources

> **Read-me:** Planning aid for the sim, not a chart. Static data is drawn from cross-checked public sources (OurAirports, SkyVector, Wikipedia) pending a live ICAA (Iraq Civil Aviation Authority) AIP pull; approaches/SIDs/STARs are listed **by name only or flagged not-yet-confirmed** — fly the charted current-AIRAC version. **A standing 🟥 caution on Baghdad (ORBB) FIR conflict-zone/security status appears in §2, §3.2, §4, §5 and §18 — read it before every flight; it is live and perishable and must be re-verified at planning.** Live weather/NOTAMs are pulled at planning (§14/§15). Open 🟧 items are listed in §18. Flag legend 🟥 restriction/hazard · 🟧 caution/unverified · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| ARP (lat/long) | 33°15′45″N 044°14′04″E / 33.2625, 44.2346 `[OurAirports/SkyVector — consistent]` |
| Field elevation | **114 ft AMSL** `[OurAirports/SkyVector]` — a company reference figure of ~112 ft is close but not identical; minor survey-rounding variance, not reconciled against a primary AIP table 🟧 |
| Mag variation | Not published / verify 🟧 |
| Time zone | **UTC+3 (AST)** — Iraq does not observe DST |
| Runway(s) | **15L/33R** 4,000 × 60 m concrete, lighted · **15R/33L** 3,301 × 45 m, surface reported as concrete by one source and "unknown" by another — **not lighted** 🟧 |
| Preferential runway | Not published / verify 🟧 |
| Longest LDA | Not published / verify 🟧 — 15L/33R (4,000 m / 13,124 ft physical length) is the longest runway; no primary declared-distance table obtained this pass |
| Approaches | Not published / verify 🟧 — no ILS ident/frequency found in reachable sources; treat as unconfirmed rather than "none" |
| RFF category | Not published / verify 🟧 |
| Control type | **Radar** — Baghdad Approach/Departure on the field; **Baghdad (ORBB) FIR** en route — see [Middle East airspace brief](../../../../airspace/middle-east.md) |
| Elevation class | Near sea-level (114 ft) — **not** hot-and-high by elevation; extreme summer heat (commonly 45°C+) is the region's density-altitude driver, not field elevation 🟧 |
| Special-airport status | 🟥 **K Global category R** `[VAMSYS mirror 2026-07-26]` — consistent with the field's history of tactical/steep (spiral) arrival and departure profiles flown here due to the surrounding threat environment (military/civil co-located field); see §3.5/§4/§5 |
| Customs / PoE | **Yes** — Iraq's primary international gateway; exact desk hours not confirmed 🟧 |
| K Global category | **R** `[VAMSYS mirror 2026-07-26]` |
| K Global base | Not stated as a base in the fields provided — treat as **destination** pending confirmation 🟧 |
| Company preferred alternates | **OERK, OMDB, OTHH** (all cross-country) `[VAMSYS mirror 2026-07-26]` |
| Taxi-in / taxi-out (VAMSYS) | **10 min / 12 min** `[VAMSYS mirror 2026-07-26]` |

---

## 2. Validation summary

| Domain | Flag | Note |
|---|---|---|
| Terrain / CFIT | 🟩 | Flat Mesopotamian plain; no close-in high terrain relevant to arrival, departure or missed-approach paths. |
| Runway length vs fleet perf | 🟩 | 15L/33R (4,000 m) is ample for any K Global type; 15R/33L (3,301 m, unlit, surface unconfirmed) is a secondary/reduced-capability runway — treat as day/VMC-only pending verification. |
| Approach availability / minima | 🟧 | No ILS or other approach identified in reachable sources this pass — not confirmed as absent, simply unverified. Verify current AIRAC. |
| Airspace / traffic / control | 🟥 | **STANDING CAUTION.** Baghdad (ORBB) FIR is under an active EASA Conflict Zone Information Bulletin ("avoid at all levels"); multiple states impose altitude floors (FL280–FL320) for any operation in the FIR; the airport itself has a documented history of rocket/drone attacks. See §3.2. |
| Weather / seasonal hazard | 🟧 | Extreme summer heat (routinely 45°C+) and seasonal shamal dust storms are the defining hazards; no AIP-sourced statistic obtained this pass. |
| Curfew / slots / hours | 🟧 | Not published / verify — no curfew or slot-coordination regime identified in reachable sources. |
| RFF category vs our types | 🟧 | Not published / verify. |
| Fuel availability | 🟧 | Jet A-1 assumed available as the country's primary gateway; supplier/hours not confirmed. |
| Customs / handling / security | 🟥 | International PoE confirmed to exist, but the field sits inside an active security/conflict-zone advisory (§3.2/§5) — ground security posture, checkpoint access and handling continuity should all be treated as dynamic, not routine. |

---

## 3. Threat & Error Management (TEM)

### 3.1 CFIT / Terrain 🟩
ORBI sits at 114 ft AMSL on the flat Mesopotamian plain — there is **no close-in high terrain** relevant to arrival, departure or missed-approach paths. This is a non-issue field for terrain; verify the MSA ring on the current chart as routine practice, but CFIT is not the operative threat here.

### 3.2 Airborne conflict / traffic 🟥
> **STANDING CAUTION — read before every flight.** Baghdad (ORBB) FIR is documented in the [Middle East regional airspace brief](../../../../airspace/middle-east.md) as part of the **conflict-affected core** of the region, currently under an **active EASA Conflict Zone Information Bulletin advising operators not to operate in FIR Baghdad (ORBB) at any altitude or flight level** (CZIB 2026-05, issued 08 Jul 2026, valid to 31 Aug 2026). Multiple states impose their own altitude floors for any operation that does transit the FIR: the **FAA (SFAR 77)** prohibits US operators, US-registered aircraft and FAA-certificated airmen from operating below **FL320** in the Baghdad FIR through 26 Oct 2027; the **UK and Canada** recommend not entering below **FL320**; **Germany** recommends not entering below **FL280**; **France** additionally restricts any transit to specific corridors (**M860/L602/L718 northbound, UM688 southbound**) at or above FL320. A current Iraqi NOTAM (**ORBB A0279/26**) additionally warns of **GPS jamming/spoofing in the northern part of the country**. The stated primary risk across every source is **missile/drone activity and the potential for misidentification by air-defence systems** (military and paramilitary) operating in or near Iraqi airspace, compounded by the presence of **violent non-state actors** with both capability and intent. **This picture is live and perishable — it is not re-derived here.** Pull the current EASA CZIB, the Iraqi NOTAM set, and any applicable company routing policy at every planning cycle, before every flight. This note takes no position on any party or cause — it states only that the status is variable, materially elevated, and must be checked. Cross-ref [Middle East airspace brief](../../../../airspace/middle-east.md) §9.

Day-to-day terminal traffic is handled by Baghdad Approach/Departure on VHF radar; no unusual civil VFR-mix issue was identified in reachable sources, but the field is documented to have experienced direct **rocket and weaponised-drone attacks** on or near the airport itself (see §3.5).

### 3.3 Runway excursion 🟧
No displaced-threshold or declared-distance table was found in reachable sources for either runway — **not independently confirmed**. **15R/33L** is reported unlit and its surface is inconsistently described (concrete vs. "unknown") between sources — treat it as a reduced-capability secondary runway pending verification, not a routine reciprocal to 15L/33R.

### 3.4 Weather threat 🟧
Baghdad's climate is defined by **extremely hot, dry summers** (routine daytime highs of 45°C+), which can drive meaningful density-altitude performance penalties even though the field itself is near sea-level — this is a **temperature-driven**, not elevation-driven, hot-and-high consideration. **Shamal dust storms** (both the persistent summer shamal and the frontal winter shamal common to the wider Middle East/Gulf region) can reduce visibility with limited warning. Winter can bring occasional fog. No EDDF/Iraq-specific frequency statistic was found — treat as regional climatology pending a primary source. See §14.

### 3.5 Operational considerations 🟥
Plan around three durable constraints: (1) the **conflict-zone/security status of the ORBB FIR** (§3.2) is the dominant planning driver, not a routine one — treat the CZIB, the FL-floor advisories and the current NOTAM picture as mission-critical, re-checked every time; (2) the field has a **documented history of tactical/steep (spiral) arrival and departure profiles** flown here as a direct consequence of the surrounding threat environment during the field's military/civil co-located era (it was operated for years as "Baghdad International Airport / New Al Muthana Air Base," alongside a US military presence referenced in public sources as "Camp Sather") — current-day civil operational requirements for such profiles are **not independently confirmed** for today's traffic, but crews should not assume a standard extended straight-in profile without checking current guidance; (3) the airport has been the direct target of **rocket and weaponised-drone attacks** on multiple occasions (FAA Information Notes document strikes in Apr 2021, Jun 2021 ×2, and continuing militia activity through 2022) — ground security posture should be treated as dynamic.

---

## 4. Cautions & Warnings

- 🟥 **STANDING CAUTION — conflict-zone/airspace status.** Baghdad (ORBB) FIR is under an active EASA CZIB advising against operation at any altitude; multiple states impose FL280–FL320 floors for any transit. Check the current CZIB, state NOTAMs and company routing policy before every flight — see [Middle East airspace brief](../../../../airspace/middle-east.md) §9.
- 🟥 **Historically associated with tactical/steep (spiral) arrival and departure profiles** flown here due to the surrounding threat environment — do not assume a standard straight-in/departure profile without checking current operational guidance.
- 🟧 **GPS jamming/spoofing reported in the northern part of Iraq** (Iraq NOTAM ORBB A0279/26) — expect possible GNSS degradation on approach; brief the conventional-navaid/DME cross-check and notify ATC promptly if position uncertainty is suspected.
- 🟥 **The airport itself has been directly targeted by rocket and weaponised-drone attacks** on multiple documented occasions — ground security posture is dynamic, not routine.
- 🟧 **RWY 15R/33L is reported unlit and its surface is not independently confirmed** — treat as day/VMC-only and reduced-capability pending verification.
- 🟧 **Extreme summer heat (45°C+) can drive a meaningful density-altitude performance penalty** despite the field's low elevation — confirm current-day performance planning, don't assume a sea-level-benign day.

---

## 5. Aerodrome category, restrictions & crew qualification

- **Special-airport / category:** **K Global category R (Restricted)** `[VAMSYS mirror 2026-07-26]` 🟥 — consistent with the field's tactical-approach history and the surrounding threat environment (§3.2/§3.5/§4). Confirm current company crew/aircraft eligibility policy for a Category-R assignment before planning.
- **Crew-qualification gate:** Not published in the fields provided — given the Cat R designation, treat as requiring command-level/qualified-crew review pending confirmation of company policy. 🟧
- **Operating restrictions / bans:** No overflight ban applies to Iraq's own carriers, but multiple external states restrict their own operators: **FAA SFAR 77** prohibits US operators/airmen below **FL320** through 26 Oct 2027; **UK/Canada** recommend not below FL320; **Germany** recommends not below FL280; **France** restricts transit to specific corridors at or above FL320. Confirm current company routing policy for any Baghdad-associated operation. 🟥
- **Overflight / entry / permits:** Standard Iraqi visa/customs procedure expected for scheduled international arrivals; no additional permit identified beyond the standing security advisory (§3.2). 🟧
- **Operations notes:** **Iraq Civil Aviation Authority (ICAA)** is the state regulator; the field has historically operated with co-located civil and (US-led) military infrastructure. Security-controlled ground access is likely, consistent with reporting from other Iraqi international fields — not independently confirmed for ORBI specifically. 🟧

---

## 6. General / hours / services

| Item | Value | Flag |
|---|---|---|
| ATS hours | Assumed H24 as the country's primary international gateway; not confirmed | 🟧 |
| AD operating hours | Not published / verify | 🟧 |
| Night / curfew restrictions | None identified in reachable sources | 🟧 |
| RFF category | Not published / verify | 🟧 |
| Fuel | Jet A-1 assumed available; supplier/hours not confirmed | 🟧 |
| PCN | Not published / verify | 🟧 |
| Customs | Yes — hours not confirmed | 🟧 |
| Handling / FBO | Not published / verify | 🟧 |

---

## 7. Runways & declared distances

| RWY | Dimensions | Surface / PCN | TORA | TODA | ASDA | LDA | Notes |
|---|---|---|---|---|---|---|---|
| 15L | 4,000 × 60 m (13,124 × 197 ft) | Concrete, lighted / PCN not published 🟧 | Not published 🟧 | Not published 🟧 | Not published 🟧 | Not published 🟧 | Threshold elev. 113 ft |
| 33R | (reciprocal) | Concrete, lighted / PCN not published 🟧 | Not published 🟧 | Not published 🟧 | Not published 🟧 | Not published 🟧 | Threshold elev. 110 ft |
| 15R | 3,301 × 45 m (10,830 × 148 ft) | Concrete per one source, "unknown" per another 🟧, **not lighted** | Not published 🟧 | Not published 🟧 | Not published 🟧 | Not published 🟧 | Threshold elev. 114 ft |
| 33L | (reciprocal) | As above 🟧, **not lighted** | Not published 🟧 | Not published 🟧 | Not published 🟧 | Not published 🟧 | Threshold elev. 111 ft |

*Physical dimensions and threshold elevations cross-checked between OurAirports and SkyVector (good agreement); a primary declared-distance (TORA/TODA/ASDA/LDA) table and PCN were not obtained this pass — treat as 🟧 pending ICAA AIP confirmation. All distances as sourced.*

---

## 8. Communications

| Service | Callsign | Frequency | Hours | Notes |
|---|---|---|---|---|
| ATIS | Baghdad ATIS | 126.925 | Not confirmed 🟧 | |
| Delivery | Not separately published | — | — | Not published / verify 🟧 |
| Ground | Baghdad Ground | 121.400 / 121.700 | Not confirmed 🟧 | |
| Tower | Baghdad Tower | 118.700 / 118.900 | Not confirmed 🟧 | |
| Approach | Baghdad Approach | 122.400 / 128.200 | Not confirmed 🟧 | |
| Departure | Baghdad Departure | 128.200 | Not confirmed 🟧 | Shares 128.200 with Approach per source — verify sector split on current chart |
| Centre / FIR | Baghdad (ORBB) — exact ACC frequency not obtained this pass | — | — | See [Middle East airspace brief](../../../../airspace/middle-east.md) |

*Frequencies sourced to SkyVector; not cross-checked against a primary ICAA AIP chart this pass — treat as indicative, verify current AIRAC. 🟧*

---

## 9. Navaids

| Aid | Ident | Freq | Hours | Notes |
|---|---|---|---|---|
| VOR | BGD (Baghdad) | 112.90 | Not confirmed 🟧 | On/near field (~1.8 NM) |
| ILS | Not published / verify | — | — | No ILS ident/frequency found in reachable sources this pass 🟧 |

---

## 10. Arrival

- **Transition altitude / level:** Not published / verify. 🟧
- **Speed:** Standard 250 KIAS below FL100 (ICAO norm) — confirm no local override on current chart.
- **Preferential runway logic:** Not published / verify. 🟧
- **Approaches (names only — verify minima on current AIRAC charts):**

| RWY | Approach | IAF | FAF/FAP alt | Notes |
|---|---|---|---|---|
| 15L / 33R | Not published / verify 🟧 | — | — | Verify current AIRAC |
| 15R / 33L | Not published / verify 🟧 | — | — | Unlit runway — verify current serviceability/NOTAM before planning |

- **STARs (names only):** Not published / verify — pull the current-AIRAC procedure list at planning. 🟧
- **LVP:** Not published / verify. 🟧
- **Missed approach watch-items:** Terrain is not the driver (flat plain) — the operative concern at this field is the **conflict-zone/security environment** (§3.2), not a navigational hazard.

---

## 11. Departure

- **SIDs (names only — fly the charted version):** Not published / verify — pull the current-AIRAC procedure list at planning. 🟧
- **RNP / climb-gradient requirements:** Not published / verify. See [`OM E — PBN and RNP Operations`](../../../../../flight-ops/pbn-and-rnp-operations.md). 🟧
- **Take-off minima:** Not published / verify. 🟧
- **Start-up / push-back:** Not published / verify. 🟧
- **ATC slot / CTOT & clearance:** No slot-coordination regime identified; the operative constraint on routing is the FIR-level conflict-zone/altitude-floor picture (§3.2/§5), not a commercial CTOT programme. 🟧
- **De-icing:** Not published — given the region's climate, a low-probability requirement, but not confirmed as NIL. 🟧

---

## 12. Noise & Environmental

- **Noise abatement (NAP):** Not published / verify. 🟧
- **Night noise / dB limits:** Not published / verify. 🟧
- **Engine run-up restrictions:** Not published / verify. 🟧
- **Reverse thrust / idle-reverse policy:** Not published / verify. 🟧

---

## 13. Ground operations

- **Stands for our types:** Not published / verify. 🟧
- **Push-back:** Not published / verify. 🟧
- **Standard taxi routes:** Not published / verify — confirm with Ground on the day.
- **Hot spots / tight taxiways:** Not published / verify. 🟧
- **Follow-me:** Not published / verify. 🟧

---

## 14. Weather & seasonal (durable)

- **Climate / prevailing wind:** Arid Mesopotamian climate — extremely hot, dry summers (routine highs of 45°C+) and mild, occasionally wet winters.
- **Seasonal hazards:** **Shamal dust storms** (persistent summer shamal plus frontal winter shamal, consistent with the wider Gulf/Middle East region) can reduce visibility with limited warning; occasional winter fog. Extreme summer heat is a **density-altitude performance driver** despite the field's low elevation.
- **Local effects:** None beyond the above identified in reachable sources.

> **Live weather — pull at planning (T-2h):** METAR, TAF, TREND, SIGMET/AIRMET. Not stored here.

---

## 15. NOTAMs

> **Pull at planning (T-2h).** Perishable — not stored here. Check: runway/taxiway closures (esp. RWY 15R/33L serviceability), navaid U/S, lighting, obstacle/crane, RFF downgrade, GPS/RAIM (northern-Iraq jamming/spoofing advisory). **Given the standing conflict-zone caution (§3.2/§4), place particular emphasis on the current EASA CZIB, the Iraqi NOTAM set for FIR Baghdad (ORBB), and any active company routing restriction before every flight.** Source: AIS / OFP NOTAM block.

---

## 16. Fuel & alternate planning notes

- **Typical role for us:** Destination (not stated as a base). `[VAMSYS mirror 2026-07-26]`
- **Nearest suitable alternates:** **OERK, OMDB, OTHH** (all cross-country — reference by ICAO only, never as a folder link) `[VAMSYS mirror 2026-07-26]`.
- **Fuel-uplift notes:** Jet A-1 assumed available as the country's primary gateway; specific supplier/hours not confirmed. 🟧 See [`OM E — Fuel Policy`](../../../../../flight-ops/fuel-policy.md).
- **Range/perf flags for our fleet:** Field length/strength non-limiting for any K Global type on the main runway (15L/33R, 4,000 m). See [`OM B — Fleet Capability Matrix`](../../../../../fleet/capability-matrix.md).

---

## 17. Fleet-specific notes (optional)

- No type-specific performance consideration identified beyond the general Category-R crew-qualification gate (§5), which applies fleet-wide rather than to a single type. See [`OM B — Fleet Capability Matrix`](../../../../../fleet/capability-matrix.md).

---

## 18. Open items (🟧 — confirm against AIP / current AIRAC)

- **The entire ORBB FIR conflict-zone/security picture is live** — the current EASA CZIB, Iraqi NOTAMs and company routing policy must be re-verified at every planning cycle; do not treat this file's snapshot as current clearance.
- **Primary ICAA (Iraq Civil Aviation Authority) AIP** — not reachable this pass (icaa.gov.iq PDF timed out); all data below is tier-4 sourced pending a direct pull.
- Mag variation, RFF category, PCN, take-off minima, transition altitude/level, LVP triggers — none confirmed.
- Approach/ILS/SID/STAR names and minima — none obtained this pass.
- RWY 15R/33L surface composition and current serviceability — sources disagree ("concrete" vs. "unknown"); confirm before planning any use.
- ATS/AD operating hours, curfew, slot regime, RFF, fuel supplier/hours, customs desk hours, handling agent, stand/gate assignment — none confirmed.
- Noise/environmental and ground-operations detail (§12/§13) — none published in reachable sources.
- K Global base-flag status — not stated in the fields provided; treated as destination pending confirmation.

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim material may inform content but is not listed here.*

- OurAirports — https://ourairports.com/airports/ORBI/ and /runways.html (retrieved 2026-07-26). *ARP/elevation/runway cross-check.*
- SkyVector — https://skyvector.com/airport/ORBI/Baghdad-International-Airport (retrieved 2026-07-26). *Runway/comms/navaid cross-check.*
- Wikipedia — "Baghdad International Airport" — https://en.wikipedia.org/wiki/Baghdad_International_Airport (retrieved 2026-07-26). *Field history, military/civil co-location, historical naming.*
- Safe Airspace (OPSGROUP) — "Iraq" — https://safeairspace.net/iraq/ (retrieved 2026-07-26). *Current EASA CZIB, state NOTAMs, FAA SFAR 77, historical attack timeline — live/advisory source, re-check at planning.*
- EASA — Conflict Zone Information Bulletins — https://www.easa.europa.eu/en/domains/air-operations/czibs (retrieved 2026-07-26). *CZIB 2026-05 reference — advisory/live source.*
- FAA — SFAR 77, "Extension of the Prohibition Against Certain Flights in the Baghdad Flight Information Region (FIR)" — https://www.federalregister.gov/documents/2024/10/16/2024-23785 (retrieved 2026-07-26).
- **Companion OM C files:** [Middle East airspace brief](../../../../airspace/middle-east.md) (Baghdad/ORBB FIR regional conflict-zone context) · same-folder [Dispatch](dispatch.md), [Departure](departure.md), [Arrival](arrival.md) pages.

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-26 | Built from public aeronautical data (AIP/threat verification pending); K Global fields from live VAMSYS; 4-page pack. |
