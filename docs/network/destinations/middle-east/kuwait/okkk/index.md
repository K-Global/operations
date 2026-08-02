# OKKK — Kuwait Intl · Airport Briefing

**OKKK / KWI** · Kuwait City, Kuwait · Middle East
**Version** v0.1 · **Updated** 2026-07-26 · **Status** Draft

> **Read-me:** Planning aid for the sim, not a chart. Static data is drawn from the Kuwait DGCA Aeronautical Information Publication (AIP) procedure/chart index plus tier-4 public corroboration; approaches/SIDs/STARs are listed **by name/type only** — fly the charted current-AIRAC version. Live weather/NOTAMs are pulled at planning (§14/§15). **This field sits inside an active regional conflict-zone/security picture (§3.2/§3.5) — re-check the live status at planning, every time.** Open 🟧 items are listed in §18. Flag legend 🟥 restriction/hazard · 🟧 caution/unverified · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| ARP (lat/long) | 29.22677, 47.97995 `[Navigraph navdata]` — cross-checked within ~0.3 km by OurAirports/SkyVector/Universal Weather 🟩 |
| Field elevation | **204 ft AMSL** `[Navigraph navdata]` — matches Wikipedia/SkyVector; OurAirports/Universal Weather show 206 ft (minor 2 ft variance, non-critical) 🟧 |
| Mag variation | **002° E** (Universal Weather, tier-4 only) — not cross-checked against a primary AIP table this pass 🟧 |
| Time zone | UTC+3 (Arabia Standard Time) — no DST observed |
| Runway(s) | **15L/33R** 3,500 × 45 m asphalt · **15R/33L** 3,400 × 45 m (some sources: 46 m) concrete · **16/34** 4,580 × 60 m asphalt — new third runway, commissioned 30 Oct 2025 🟧 |
| Preferential runway | Wind/ATC-determined; OKKK-specific logic not published this pass 🟧. Regional shamal (NW) climatology would tend to favour a 33/34-direction configuration — inferred, not field-sourced |
| Longest LDA | Full physical length of 16/34 is 4,580 m; declared TORA/TODA/ASDA/LDA figures **not extracted from the primary AIP this pass — Not published / verify** 🟧 |
| Approaches | **ILS CAT I/II** (RWY 34, 33L, 16, 15R) · **ILS Z CAT I/II** (RWY 33R, 15L) · **RNP (RNAV GNSS) APCH** (RWY 34, 33L, 16, 15R) · Visual approach chart published. **No CAT III chart found in the current AIP index** — differs from an initial CAT III planning assumption; treat as CAT II until re-confirmed 🟧 |
| RFF category | Not published / verify 🟧 |
| Control type | **Radar** — Kuwait Approach (tier-4: 121.3 MHz); Kuwait (OKAC) is one of the developed, radar/ADS-B-surveilled continental Gulf FIRs per the regional airspace picture 🟧 |
| Elevation class | Sea-level (204 ft) but **not benign** — regularly exceeds 50°C in summer per the airport's own design documentation, a real density-altitude/derate driver despite the low field elevation — see [`OM E — High-Elevation Aerodrome Operations`](../../../../../flight-ops/high-elevation-aerodrome-operations.md) (applies to a "hot lower field" as well as true high elevation) 🟧 |
| Special-airport status | 🟥 **Active regional conflict-zone context.** Kuwait (OKAC) FIR **overflight is prohibited** (arrivals/departures to OKKK remain operable with prior approval); the field sits under an EASA CZIB "avoid at all levels" advisory alongside Bahrain/Qatar/UAE/W. Gulf of Oman (current through 31 Aug 2026); the airport itself has sustained drone-strike damage during 2026, and its main international terminal is currently closed for repairs (§5/§6). GNSS jamming/spoofing is pervasive regionally. See §3.2/§3.5 and the [Middle East Airspace Briefing](../../../../airspace/middle-east.md) |
| Customs / PoE | **Yes** 🟩 (Universal Weather confirms Port-of-Entry status); exact desk hours not confirmed 🟧 |
| K Global category | **L** `[VAMSYS mirror 2026-07-26]` |
| K Global base | **No** `[VAMSYS mirror 2026-07-26]` |
| Company preferred alternates | **OMDB, OTHH, OBBI** `[VAMSYS mirror 2026-07-26]` — plain ICAO reference only (each in a different country); **all three sit inside the same Gulf CZIB-affected bloc as OKKK itself** — re-verify each independently at planning, not just the destination |
| Taxi-in / taxi-out (VAMSYS) | **12 min / 15 min** `[VAMSYS mirror 2026-07-26]` |

---

## 2. Validation summary

| Domain | Flag | Note |
|---|---|---|
| Terrain / CFIT | 🟩 | Flat reclaimed coastal desert; no close-in high terrain relevant to any phase of flight. |
| Runway length vs fleet perf | 🟩 | All three runways (3,400–4,580 m) are non-limiting for any K Global type; the real planning driver is hot-weather derate, not runway length. |
| Approach availability / minima | 🟧 | ILS CAT I/II + RNP on four runway ends, ILS Z CAT I/II on the other two; **no CAT III found in the current AIP procedure index** — confirm current low-visibility capability before relying on it. |
| Airspace / traffic / control | 🟥 | **OKAC FIR overflight prohibited**; field under active EASA CZIB "avoid at all levels"; pervasive GNSS jamming/spoofing region-wide. Arrivals/departures to OKKK itself operate under a live, security-driven flow regime. |
| Weather / seasonal hazard | 🟧 | Extreme summer heat (routinely >50°C) driving density-altitude/derate; shamal dust; occasional winter fog — OKKK-specific frequency not independently sourced. |
| Curfew / slots / hours | 🟧 | No curfew or slot-coordination regime found in reachable sources; ATS/AD operating hours not independently confirmed. |
| RFF category vs our types | 🟧 | Not published / verify. |
| Fuel availability | 🟧 | Jet A-1 assumed available as a major international gateway; supplier/hours not confirmed. |
| Customs / handling / security | 🟥 | **Terminal 1 — the airport's primary international terminal — is currently closed for repairs** following 2026 drone-strike damage; confirm current terminal/gate assignment before planning a call here (§5/§6). |

---

## 3. Threat & Error Management (TEM)

### 3.1 CFIT / Terrain 🟩
OKKK sits at 204 ft AMSL on flat, reclaimed coastal desert with **no close-in high terrain** relevant to arrival, departure or missed-approach paths. Verify the MSA ring on the current chart as routine practice, but CFIT is not the operative threat at this field.

### 3.2 Airborne conflict / traffic 🟥
This is the field's defining threat. **Kuwait (OKAC) FIR overflight is prohibited** — arrivals and departures to OKKK itself remain operable, but only **with prior approval** under the current security regime, which has been repeatedly extended through 2026 (most recently reported through at least early August). The field sits inside an active **EASA Conflict Zone Information Bulletin advising "avoid at all levels"** alongside Bahrain, Qatar, UAE and the Gulf of Oman west of 58°E (current cycle valid through 31 Aug 2026); at least one state (France) has separately directed its own carriers not to enter Kuwait FIR at all as of late July 2026. The airport has already sustained **direct drone-strike damage** during 2026 (see §3.5), and **GNSS jamming/spoofing is pervasive** across the Gulf per the regional airspace picture — expect FMS position drift and spurious terrain/GPWS alerts, cross-check DME/DME/IRU, and be ready to request radar vectors as the reliable fallback. Because the arrival/departure phase at OKKK is flown *inside* the affected FIR rather than merely transiting it, this field carries the sharpest edge of the regional picture. Cross-ref the [Middle East Airspace Briefing](../../../../airspace/middle-east.md) §9/§11 for the live, re-check-at-planning detail — nothing perishable is stored here.

### 3.3 Runway excursion 🟧
No displaced-threshold or contamination data was found in reachable sources for any of the three runways. All three (3,400–4,580 m) are long and wide relative to any K Global type, so length itself is not a driver; standard tailwind/braking-action vigilance applies pending current-AIRAC confirmation of any published caveats.

### 3.4 Weather threat 🟧
Kuwait's summer climate is severe: the airport's own design documentation records **regular temperatures in excess of 50°C**, a genuine density-altitude/derate performance consideration despite the field's low (204 ft) elevation — see [`OM E — High-Elevation Aerodrome Operations`](../../../../../flight-ops/high-elevation-aerodrome-operations.md), which explicitly extends to a "hot lower field" regime. The region's **shamal (NW) wind and blowing dust/haboob** seasons (documented at the regional level) are a plausible visibility hazard here; occasional winter radiation fog is a known Gulf-coastal characteristic, though no OKKK-specific frequency statistic was found. See §14.

### 3.5 Operational considerations 🟥
Three durable items to plan around: (1) the **conflict-zone/security environment** in §3.2 — a live constraint on overflight and a real (if currently mitigated) risk to the field itself, which has already absorbed drone-strike damage in 2026 including, per public reporting, effects on airport radar equipment during the March 2026 attacks; (2) **Terminal 1 — the terminal that normally serves all international airlines at OKKK — is currently closed for repairs** with no confirmed reopening date, while Terminal 4 (Kuwait Airways) and Terminal 5 (Jazeera Airways) continue to operate as carrier-dedicated facilities (§6); confirm current terminal assignment before planning a K Global call here; (3) **all three company-preferred alternates (OMDB, OTHH, OBBI) sit inside the same CZIB-affected Gulf bloc** as OKKK itself — alternate planning needs its own live security check, not an assumption inherited from the destination. RFF/navaid infrastructure otherwise appears standard for a major international gateway; the §18 open items are mostly currency/administrative gaps rather than additional safety-critical unknowns.

---

## 4. Cautions & Warnings

- **OKAC/Kuwait FIR overflight is prohibited** — arrivals/departures to OKKK require prior approval under the current security regime; re-verify at planning, every time.
- **Terminal 1 (the main international terminal) is closed for repairs** following 2026 drone-strike damage — confirm current terminal/gate assignment before planning a call.
- **GNSS jamming/spoofing is pervasive** in this FIR and neighbouring Gulf airspace — brief the conventional-navaid (DME/DME/IRU) fallback and expect ATC to issue radar vectors/runway-heading departures as compensation.
- **No CAT III chart was found** in the current AIP procedure index — do not assume deep low-visibility capability without a fresh check.
- **Extreme summer heat (routinely >50°C)** drives a real density-altitude/derate consideration despite the field's low elevation.
- **The new third runway (16/34, 4,580 m) lies to the west of the main terminal complex**, oriented independently of the 15/33 parallel pair — expect a materially different taxi routing depending on assigned runway.

---

## 5. Aerodrome category, restrictions & crew qualification

- **Special-airport / category:** Not operator-categorised as a restricted-crew "special airport" in reachable sources; the standing crew-briefing items are the active regional conflict-zone/security environment and the extreme-heat performance regime. 🟥
- **Crew-qualification gate:** No specific restricted-crew requirement found; standard qualification applies. Hot-weather performance-planning discipline (derate, V-speeds, tyre-speed limits) should be treated as routine at this field. 🟧
- **Operating restrictions / bans:** OKAC FIR **overflight prohibited** (arrivals/departures only, with prior approval) 🟥; no RNP AR ban or circling restriction found in reachable sources — verify current AIRAC. 🟧
- **Overflight / entry / permits:** 🟥 Prior approval required for OKAC FIR operations under the current security regime (extensions reported through at least early August 2026); at least one state has separately directed its own carriers not to enter Kuwait FIR at all as of late July 2026 — confirm current state-specific guidance at planning. Standard Gulf-state visa/entry rules otherwise apply.
- **Operations notes:** Authority — Kuwait **Directorate General of Civil Aviation (DGCA)** / Public Authority for Civil Aviation (PACA). A new air traffic control tower with 360° radar coverage across all three runways was commissioned 30 Oct 2025 alongside the new third runway. A portion of the airport complex (Abdullah Al-Mubarak Air Base) is shared with the Kuwait Air Force and hosts a dedicated Cargo City facility on the field's western side — be aware of mixed civil/military traffic and facilities sharing the aerodrome.

---

## 6. General / hours / services

| Item | Value | Flag |
|---|---|---|
| ATS hours | Not confirmed; assumed continuous (H24) as a major international gateway | 🟧 |
| AD operating hours | Not confirmed; assumed continuous | 🟧 |
| Night / curfew restrictions | None found in reachable sources | 🟧 |
| RFF category | Not published / verify | 🟧 |
| Fuel | Jet A-1 assumed available; supplier/hours not confirmed | 🟧 |
| PCN | Not published / verify | 🟧 |
| Customs | Yes (Port of Entry confirmed); exact desk hours not confirmed | 🟧 |
| Handling / FBO | Multiple ground handlers expected at a major Gulf gateway; none individually confirmed | 🟧 |
| Terminals in service | **T1** (main international) — **closed for repairs** after 2026 drone-strike damage, no confirmed reopening date · **T2** — under construction (Foster + Partners design), targeted for opening late 2026 · **T3** — general-aviation terminal, closed for T2-construction reasons · **T4** — Kuwait Airways, operating · **T5** — Jazeera Airways, operating | 🟥 |

---

## 7. Runways & declared distances

| RWY | Dimensions | Surface / PCN | TORA | TODA | ASDA | LDA | Notes |
|---|---|---|---|---|---|---|---|
| 15L / 33R | 3,500 × 45 m | Asphalt / PCN not published | Not published / verify 🟧 | Not published / verify 🟧 | Not published / verify 🟧 | Not published / verify 🟧 | Full-length figures only; declared-distance table not extracted from the primary AIP this pass |
| 15R / 33L | 3,400 × 45 m (some sources: 46 m) | Concrete / PCN not published | Not published / verify 🟧 | Not published / verify 🟧 | Not published / verify 🟧 | Not published / verify 🟧 | Minor width variance across sources; non-critical |
| 16 / 34 | 4,580 × 60 m | Asphalt / PCN not published | Not published / verify 🟧 | Not published / verify 🟧 | Not published / verify 🟧 | Not published / verify 🟧 | **New third runway**, commissioned 30 Oct 2025; lies west of the main terminal complex, oriented independently of the 15/33 pair (approx. 160°/340° vs 152°/332°) 🟧; among the longest runways in the world, built A380-capable and designed for resilience against extreme heat and flash-flooding |

*Physical dimensions cross-checked across OurAirports, SkyVector, ENR and NACO project reporting; the Kuwait DGCA AIP AD 2.OKKK chart index (Full AIP 01/25, eff. 30 Oct 2025) confirms all three runways are currently AIP-published with dedicated obstacle charts, but the numeric declared-distance table could not be extracted from the primary PDF in this research pass — treat all distance figures above as 🟧 pending direct AIP confirmation.*

---

## 8. Communications

| Service | Callsign | Frequency | Hours | Notes |
|---|---|---|---|---|
| ATIS | Kuwait ATIS | 126.225 | Not confirmed | 🟧 tier-4 sourced only |
| Delivery | Not published / verify | — | — | 🟧 |
| Ground | Kuwait Ground | 121.7 | Not confirmed | 🟧 tier-4 sourced only |
| Tower | Kuwait Tower | 118.3 | Not confirmed | 🟧 tier-4 sourced only |
| Approach | Kuwait Approach | 121.3 | Not confirmed | 🟧 tier-4 sourced only |
| Centre / FIR | Kuwait Area Control Centre (OKAC) | Not published / verify | — | See the [Middle East Airspace Briefing](../../../../airspace/middle-east.md) |

*All frequencies sourced to OurAirports (tier-4 only) — not cross-checked against the primary AIP this pass; treat as indicative pending a live-AIRAC/current-chart confirmation.*

---

## 9. Navaids

| Aid | Ident | Freq | Hours | Notes |
|---|---|---|---|---|
| VOR | KUA (Kuwait) | 114.15 | Not confirmed | On/near field 🟧 |
| ILS (RWY 34, 33L, 16, 15R) | Not published / verify | Not published / verify | H24 assumed | CAT I/II per AIP chart index; idents/frequencies not extracted this pass 🟧 |
| ILS Z (RWY 33R, 15L) | Not published / verify | Not published / verify | H24 assumed | CAT I/II per AIP chart index; "Z" suffix — confirm reason/current procedure on chart 🟧 |
| NDB | None confirmed on-field | — | — | Nearest referenced NDBs (e.g. Abadan, Ras Tanajib) are distant regional aids, not OKKK approach aids 🟩 |

---

## 10. Arrival

- **Transition altitude / level:** Not confirmed 🟧 — verify current chart.
- **Speed:** Standard 250 KIAS below FL100 (ICAO norm) — confirm no local override.
- **Preferential runway logic:** Wind/ATC-determined; OKKK-specific criteria not published this pass. 🟧
- **Approaches (names/types only — verify minima on current AIRAC charts):**

| RWY | Approach | IAF | FAF/FAP alt | Notes |
|---|---|---|---|---|
| 34 | ILS CAT I/II; RNP (RNAV GNSS) | Not published 🟧 | Not published 🟧 | |
| 33L | ILS CAT I/II; RNP (RNAV GNSS) | Not published 🟧 | Not published 🟧 | |
| 33R | ILS Z CAT I/II | Not published 🟧 | Not published 🟧 | Confirm reason for "Z" suffix on current chart |
| 16 | ILS CAT I/II; RNP (RNAV GNSS) | Not published 🟧 | Not published 🟧 | |
| 15R | ILS CAT I/II; RNP (RNAV GNSS) | Not published 🟧 | Not published 🟧 | |
| 15L | ILS Z CAT I/II | Not published 🟧 | Not published 🟧 | Confirm reason for "Z" suffix on current chart |

- **STARs (names only):** RNAV (GNSS) STAR sets are published per the AIP chart index, grouped by arrival direction — one set covering RWY 34/33L, another covering RWY 16/15R. Exact designators not extracted this pass — pull the current-AIRAC STAR list at planning. 🟧
- **LVP:** Trigger conditions not confirmed. With no CAT III chart found in the current index, do not assume deep LVP capability without re-confirming. 🟧
- **Missed approach watch-items:** Terrain is not a factor (flat desert). The operative missed-approach concern is re-entry into a security/flow-managed, GNSS-degraded airspace environment (§3.2) rather than any terrain or traffic-density driver.

---

## 11. Departure

- **SIDs (names only — fly the charted version):** RNAV (GNSS) SID charts are published per the AIP index for RWY 15R, 16, 33L and 34; no dedicated SID chart was found in the reachable index for RWY 15L/33R. Exact designators not extracted this pass — pull the current-AIRAC SID list at planning. 🟧
- **RNP / climb-gradient requirements:** PBN SID infrastructure is confirmed present; gradient specifics not sourced this pass. See [`OM E — PBN and RNP Operations`](../../../../../flight-ops/pbn-and-rnp-operations.md).
- **Take-off minima:** Not published / verify. 🟧
- **Start-up / push-back:** Not confirmed in reachable sources. 🟧
- **ATC slot / CTOT & clearance:** No evidence of a formal slot-coordination regime found; not confirmed either way. 🟧
- **De-icing:** **NIL** — not a normal requirement given the climate. Occasional winter fog, not icing, is the relevant cool-season consideration (§14).

---

## 12. Noise & Environmental

- **Noise abatement (NAP):** Not confirmed in reachable sources. 🟧
- **Night noise / dB limits:** Not confirmed. 🟧
- **Engine run-up restrictions:** Not confirmed. 🟧
- **Reverse thrust / idle-reverse policy:** Not confirmed. 🟧

---

## 13. Ground operations

- **Stands for our types:** The AIP chart index confirms dedicated Cargo City, General Aviation, North West and Western Apron (with SafeGate docking guidance) facilities; specific Code E/F stand counts/assignment for a K Global call are not sourced. 🟧
- **Push-back:** Not confirmed. 🟧
- **Standard taxi routes:** Not confirmed. The new 16/34 runway lies west of the main terminal complex — expect a materially different (likely longer) taxi to/from it than from the original 15/33 parallel pair. 🟧
- **Hot spots / tight taxiways:** Not sourced this pass. 🟧
- **Follow-me:** Availability not confirmed. 🟧

---

## 14. Weather & seasonal (durable)

- **Climate / prevailing wind:** Hot desert climate; the airport's own resilience-design documentation records summer temperatures **regularly exceeding 50°C**. Occasional torrential rain/flash-flood risk is also a documented design consideration.
- **Seasonal hazards:** Summer heat/density-altitude is the defining hazard (§3.4); the region's **shamal (NW) wind and blowing dust/haboob** seasons are a plausible visibility hazard here per regional climatology; winter radiation fog is a known Gulf-coastal characteristic, though no OKKK-specific frequency statistic was found.
- **Local effects:** None beyond the above sourced; flat terrain, no notable sea-breeze/terrain-wind effects found.

> **Live weather — pull at planning (T-2h):** METAR, TAF, TREND, SIGMET/AIRMET, dust/heat advisories. Not stored here.

---

## 15. NOTAMs

> **Pull at planning (T-2h).** Perishable — not stored here. Check specifically: **current OKAC FIR overflight/entry status and any state-specific directives** (§3.2/§9 of the Middle East Airspace Briefing), **GNSS jamming/interference advisories**, ATC radar/navaid serviceability (airport infrastructure has been targeted during 2026), runway/taxiway closures, current terminal/gate status (Terminal 1 remains closed for repairs), lighting, obstacle/crane, RFF downgrade, TFR. Source: AIS / OFP NOTAM block.

---

## 16. Fuel & alternate planning notes

- **Typical role for us:** Destination (not a K Global base) `[VAMSYS mirror 2026-07-26]`.
- **Nearest suitable alternates:** OMDB, OTHH, OBBI `[VAMSYS mirror 2026-07-26]` — plain ICAO reference (each a different country from Kuwait). **All three sit inside the same Gulf CZIB-affected bloc as OKKK itself** — confirm each independently against the live security picture at planning, not just the destination.
- **Fuel-uplift notes:** Jet A-1 assumed available as a major international gateway; specific supplier/hours not confirmed. 🟧 See [`OM E — Fuel Policy`](../../../../../flight-ops/fuel-policy.md).
- **Range/perf flags for our fleet:** Runway length/strength is non-limiting for any K Global type on any of the three runways; the actual planning consideration is hot-weather derate performance, not field length. See [`OM B — Fleet Capability Matrix`](../../../../../fleet/capability-matrix.md).

---

## 17. Fleet-specific notes (optional)

- No single-type-specific field-length or RFF consideration was identified — the 3,400–4,580 m runway set is non-limiting fleet-wide. The genuine fleet-wide consideration is **hot-weather/density-altitude derate performance**, which applies equally across the network's types rather than to any one airframe; see [`OM B — Fleet Capability Matrix`](../../../../../fleet/capability-matrix.md) for type-by-type performance reference.

---

## 18. Open items (🟧 — confirm against AIP / current AIRAC)

- **Mag variation (002° E)** — sourced to a single tier-4 provider (Universal Weather), not cross-checked against a primary AIP table.
- **Field elevation** — 204 ft (Navigraph/Wikipedia/SkyVector) vs 206 ft (OurAirports/Universal Weather); minor, non-critical variance.
- **Declared distances (TORA/TODA/ASDA/LDA)** for all three runways — the primary AIP PDF (AD 2.OKKK-7/8) could not be retrieved/parsed in this research pass; only full physical runway lengths are cross-corroborated.
- **CAT III capability** — an initial planning assumption; **not supported** by the current AIP chart index, which lists CAT I/II (and ILS Z CAT I/II) only. Re-confirm on the current AIRAC before ruling CAT III definitively out.
- **RFF category, PCN, ATS/AD operating hours, curfew regime, fuel supplier/hours, customs desk hours, handling agent(s)** — none confirmed in reachable sources.
- **ILS/navaid idents and frequencies** — the AIP confirms which approach charts exist (by runway/type) but idents/frequencies were not extracted from the primary source this pass; communications frequencies are tier-4 (OurAirports) only.
- **SID/STAR exact designators** — chart existence confirmed via the AIP index; specific procedure names not extracted this pass.
- **Reason for the "Z" suffix on the RWY 33R/15L ILS approaches** — not established from reachable sources; confirm on the current chart.
- **Runway 16/34 exact orientation/PCN/surface detail** — cross-corroborated across tier-4 sources for length (4,580 m) and width (60 m) but not confirmed against the primary declared-distance table.
- **Current OKAC FIR overflight-prohibition end-date and any state-specific carrier directives** — this is a live, fast-moving picture; re-verify at every planning cycle per the [Middle East Airspace Briefing](../../../../airspace/middle-east.md).
- **Terminal 1 reopening date** — not confirmed as of this build; monitor DGCA/airport notices.
- **VATSIM/IVAO cross-check** — an IVAO XG (Khaleej region) Kuwait ATC SOP wiki page exists, confirming a network-sim SOP is maintained for OKKK, but its operational content (runway/taxi/frequency detail) could not be extracted (JavaScript-rendered page) in this pass — re-attempt at the next update cycle.

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim material may inform content but is not listed here.*

- **Kuwait DGCA — Aeronautical Information Publication (AIP), Full AIP 01/25**, publication date 21 Aug 2025, implementation/effective 30 Oct 2025 — AD 2.OKKK chart/procedure index (runway designators 15L/33R, 15R/33L, 16/34; ILS/RNP/visual approach charts by runway; SID/STAR chart existence; obstacle, apron and parking charts including Cargo City, General Aviation, North West and Western Apron) — https://dgca.gov.kw/AIP (retrieved 2026-07-26). **Tier 1 primary** for structure/chart-existence; individual PDF documents could not be retrieved/parsed for numeric declared-distance, frequency and minima data in this pass — those figures remain 🟧.
- OurAirports — https://ourairports.com/airports/OKKK/ , /runways.html, /frequencies.html (retrieved 2026-07-26). *ARP/elevation/runway/frequency cross-check — tier 4.*
- SkyVector — https://skyvector.com/airport/OKKK/Kuwait-International-Airport (retrieved 2026-07-26). *Coordinates, runway heading/elevation cross-check — tier 4.*
- Universal Weather and Aviation — Kuwait Intl Airport (OKKK/KWI) — https://www.universalweather.com/airports/OKKK-KWI-KUWAIT-INTERNATIONAL-AIRPORT-KUWAIT-AL-KUWAYT-KUWAIT/ (retrieved 2026-07-26). *Mag variation, Port-of-Entry/customs, longest-runway cross-check — tier 4.*
- Wikipedia — "Kuwait International Airport" — https://en.wikipedia.org/wiki/Kuwait_International_Airport (retrieved 2026-07-26). *Terminal history/status, 2026 conflict-related closures and drone-strike damage, runway/elevation cross-check.*
- Engineering News-Record — "Kuwait Advances $5.8B Airport Program as New Runway, Tower Enter Service," 2025-11-03 — https://www.enr.com/articles/61792-kuwait-advances-58b-airport-program-as-new-runway-tower-enter-service (retrieved 2026-07-26). *Third-runway (16/34) and new ATC tower commissioning detail.*
- Times Kuwait — "Kuwait Airport to open third runway; new control tower to boost safety and efficiency," 2025-10-14 — https://timeskuwait.com/kuwait-airport-to-open-third-runway-new-control-tower-to-boost-safety-and-efficiency/ (retrieved 2026-07-26). *Third-runway commissioning date/purpose.*
- NACO (Royal HaskoningDHV) — "Delivering future-ready designs for maximum flexibility at Kuwait Airport" — https://www.naco.nl/en/projects/delivering-future-ready-designs-for-maximum-flexibility-at-kuwait-international-airport (retrieved 2026-07-26). *Third-runway design, extreme-heat/flash-flood resilience detail.*
- Wego Travel Blog — "Is Kuwait Airport Open? Terminals, Airlines and Flight Status," last updated 2026-07-09 (accessed with July 2026 content) — https://blog.wego.com/is-kuwait-airport-open-after-the-us-iran-ceasefire/ (retrieved 2026-07-26). *Current terminal operating status (T1 closed, T4/T5 operating, T2 under construction, T3 closed).*
- Safe Airspace (OPSGROUP) — Kuwait country page — https://safeairspace.net/kuwait/ (retrieved 2026-07-26). *Live CZIB/conflict-zone status, OKAC FIR overflight-prohibition detail.* Advisory/live source — re-check at planning.
- [Middle East / Gulf Airspace Briefing](../../../../airspace/middle-east.md) (companion OM C file) — FIR mosaic, CZIB detail, GNSS-jamming picture, three-corridor routing context.
- IVAO XG (Khaleej Region) — Kuwait ATC SOP wiki — https://wiki.xg.ivao.aero/en/home/Kuwait_SOP (retrieved 2026-07-26). *Network-sim SOP exists for OKKK; operational content not extractable this pass (JS-rendered page). Not authoritative — corroboration only.*

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-26 | Built from national AIP; K Global fields from live VAMSYS; 4-page pack. |
