# OMSJ — Sharjah Intl · Airport Briefing

**OMSJ / SHJ** · Sharjah, United Arab Emirates · Middle East
**Version** v0.1 · **Updated** 2026-07-26 · **Status** Draft

> **Read-me:** Planning aid for the sim, not a chart. Static data is drawn from public tier-4 aeronautical sources (OurAirports, SkyVector, SKYbrary, Wikipedia) and a VATSIM-network aerodrome reference cross-checked against the GCAA eAIP (see §Sources) — the GCAA eAIP itself was not directly reachable during this build; approaches/SIDs/STARs are listed **by name only or flagged not-yet-confirmed** — fly the charted current-AIRAC version. Live weather/NOTAMs are pulled at planning (§14/§15). Open 🟧 items are listed in §18. Flag legend 🟥 restriction/hazard · 🟧 caution/unverified · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| ARP (lat/long) | N25°19.8′ / E055°30.9′ (25.330, 55.515) — cross-checked OurAirports (25.3286, 55.5172) and SkyVector (N25°19.75′/E55°30.97′); minor variance across sources, normal for tier-4 data 🟧 |
| Field elevation | **111 ft AMSL** — OurAirports and SKYbrary agree; Wikipedia states 116 ft and SkyVector/a VATSIM aerodrome reference state 118 ft. **Not independently reconciled to a single primary figure** — treat 111 ft as the working value and verify against current AIP 🟧 |
| Mag variation | 🟧 **1.8° E (2012 epoch) / +0.05° E annual change**, per a VATSIM-network aerodrome reference — not confirmed against a current-cycle primary AIP table |
| Time zone | UTC+4 (no DST observed, standard UAE practice) |
| Runway(s) | **12/30**, single runway, 4,060 × 60 m, asphalt |
| Preferential runway | 🟥 **Not locally wind-determined** — the active runway at Sharjah is set to match the active runway direction at Dubai Intl (OMDB) because of close arrival/departure interaction inside the Dubai CTA — see §3.2 |
| Longest LDA | **3,760 m** both runway ends (both thresholds carry an approx. 300 m/984 ft displacement per the LDA figure — see §7) |
| Approaches | ILS/DME both runway ends (RWY 12 ISRE 108.550 / RWY 30 ISHW 111.950) plus a published RNAV (RNP) Y approach to RWY 30 — names only, verify current chart; one tier-4 flight-sim source describes RWY 12 as GPS-only, conflicting with the ILS/DME figure above — flagged 🟧, see §18 |
| RFF category | Not published / verify 🟧 |
| Control type | **Radar** — but *not* self-contained: terminal control for Sharjah traffic is worked by **Dubai Approach/Departures**; Sharjah Tower/Ground handle the aerodrome movement area only (Class D CTR, surface–1,500 ft) under the overlying Dubai CTA (Class C, 1,500 ft–FL155) — see §3.2 and the [Emirates (OMAE) FIR brief](../../../../airspace/fir/middle-east/emirates-omae.md) |
| Elevation class | Sea-level (111 ft) — **not** hot-and-high by elevation, but a genuine **extreme-heat/density-altitude** driver applies in summer (hot desert climate, Köppen BWh, 40–45°C common Jun–Sep) 🟧 |
| Special-airport status | Not operator-categorised in reachable sources 🟧. The field's real distinguishing character is **operational dependence on Dubai Intl (OMDB)** for runway/config and terminal-airspace sequencing (see §3.2/§3.5) rather than a classic "special airport" hazard profile |
| Customs / PoE | **Yes — H24** (per a tier-4 AIP-data extract) 🟧 |
| K Global category | **Not set — not in VAMSYS** 🟧 |
| K Global base | **No** |
| Company preferred alternates | **Not in VAMSYS** 🟧 — as general operational geography (not a sourced VAMSYS company-alternate list), the nearest major Gulf hubs are OMDB (~9 NM), OMAA (~71 NM) and OMRK (~28–29 NM) |
| Taxi-in / taxi-out (VAMSYS) | **Not in VAMSYS** 🟧 |

---

## 2. Validation summary

| Domain | Flag | Note |
|---|---|---|
| Terrain / CFIT | 🟩 | Flat coastal desert; no close-in high terrain. The nearest significant relief (Hajar Mountains) lies well east, near Ras Al Khaimah/Fujairah/Al Ain, not a factor for OMSJ's own approach/departure paths. |
| Runway length vs fleet perf | 🟩 | Single 4,060 m runway (LDA 3,760 m both ends) is non-limiting for any K Global type — but the field is not in VAMSYS, so no company-confirmed operation exists yet. |
| Approach availability / minima | 🟧 | ILS/DME reported both ends plus an RNAV (RNP) Y RWY 30; one tier-4 source conflicts on RWY 12 (GPS-only) — not reconciled to a primary AIP table. |
| Airspace / traffic / control | 🟥 | The defining characteristic of this field: **Sharjah's active runway, SIDs/STARs and departure release are all coordinated through, and effectively subordinate to, the Dubai CTA** — see §3.2. |
| Weather / seasonal hazard | 🟥 | Extreme summer heat/density altitude, regional shamal dust, and **GNSS jamming/spoofing specifically reported at Sharjah** in the regional Middle East airspace picture (see §3.4/§14). |
| Curfew / slots / hours | 🟩 | No curfew identified in reachable sources; aerodrome, fuel and customs all reported H24 — consistent with its cargo/low-cost-carrier traffic profile. |
| RFF category vs our types | 🟧 | Not published / verify. |
| Fuel availability | 🟧 | Jet A-1 reported available H24; specific into-plane supplier for this field not individually confirmed. |
| Customs / handling / security | 🟧 | H24 customs reported; sole scheduled/cargo ground handler appears to be Sharjah Aviation Services (SAS) — not independently confirmed as an exclusive arrangement. |

---

## 3. Threat & Error Management (TEM)

### 3.1 CFIT / Terrain 🟩
OMSJ sits at 111 ft AMSL on flat coastal desert terrain roughly 13 km southeast of Sharjah city — there is no close-in high ground relevant to arrival, departure or missed-approach paths. This is a non-issue field for terrain in the classic sense; verify the MSA ring on the current chart as routine practice. Two historical accidents in the approach environment near the field (a 1997 CFIT-pattern accident roughly 13 km out, and a 2004 approach-phase accident) are noted here as general vigilance context rather than an indication of a live terrain hazard — no current obstacle or MSA concern was found in reachable sources.

### 3.2 Airborne conflict / traffic 🟥
This is the field's operative TEM threat, and it is not the usual "busy hub" story — it is **structural dependence on the adjacent Dubai Intl (OMDB) terminal environment**, roughly 9 NM away. A VATSIM-network operational reference (cross-checked against the eAIP) states plainly that the active runway at Sharjah is determined by the active runway direction at Dubai, because of close interaction between the two fields' arrival and departure streams inside the Dubai CTA. Sharjah shares common SID/STAR endpoints with Dubai specifically to manage this shared traffic flow. Departure release from Sharjah is coordinated between Sharjah Tower, Dubai Departures/Approach and Dubai Tower whenever multiple aircraft are routing to the same exit point, and named flow-control minima apply into the Muscat FIR from certain Sharjah departures (3-minute longitudinal separation via specific SID/exit-point pairs). **IFR departures receive no handoff from Sharjah Tower** — pilots are expected to change to the assigned Dubai Departures frequency themselves after airborne, a real workload/gotcha item (see §11 and the Departure page). Cross-ref the [Emirates (OMAE) FIR brief](../../../../airspace/fir/middle-east/emirates-omae.md) and the [Middle East regional airspace brief](../../../../airspace/middle-east.md) for the wider Strait-of-Hormuz/Gulf-FIR conflict-zone and GNSS-interference picture that also applies here.

### 3.3 Runway excursion 🟧
Both runway ends carry a displaced threshold reducing the landing distance available from the full 4,060 m to **3,760 m** — a roughly 300 m (984 ft) displacement reported on both 12 and 30. One tier-4 source (OurAirports) records the displacement on RWY 30 only; a VATSIM-network aerodrome reference and SkyVector both show it on both ends. Brief the correct LDA (3,760 m) for the assigned runway rather than assuming the full published length — the actual figure is non-limiting for K Global types either way, but the gap between TORA/ASDA (4,060 m) and LDA (3,760 m) should not be conflated.

### 3.4 Weather threat 🟥
OMSJ has a **hot desert climate (Köppen BWh)** with summer maximum temperatures of 40–45°C common — a real density-altitude/performance consideration even though field elevation itself is sea-level (see §3.5 and Briefing §14). The wider Gulf region is subject to seasonal **shamal winds and blowing dust/haboob events** that reduce visibility and can trigger low-visibility procedures with little warning (see the [Middle East regional airspace brief](../../../../airspace/middle-east.md) §11). Most notably, the regional airspace brief specifically names **Sharjah among the Gulf hubs where GNSS jamming/spoofing has been reported on arrival and departure** (alongside Bahrain, Doha, Abu Dhabi and Dammam) — crews should expect possible GPS position drift, be ready to cross-check DME/DME/IRU, and advise ATC promptly; see the [Emirates (OMAE) FIR brief](../../../../airspace/fir/middle-east/emirates-omae.md) §10 for the FIR-wide detail.

### 3.5 Operational considerations 🟥
Three durable planning points: (1) **Dubai-TMA dependency** — runway direction, SID/STAR assignment and departure sequencing at Sharjah all flow from Dubai's operational state, so a busy or degraded Dubai TMA day directly affects Sharjah's own schedule reliability; (2) **no CPDLC/datalink clearance at Sharjah** — IFR clearance delivery is voice-only via Sharjah Ground, a workload item at a busy cargo/low-cost hub; (3) **traffic-mix character** — the field is a major Middle East cargo gateway (five dedicated cargo terminals; home to Lufthansa Cargo's regional hub tenancy and served by carriers including UPS) and the base of a large low-cost carrier (Air Arabia), giving it a genuinely different operational rhythm — high cargo-freighter and narrowbody-LCC movement density — from a typical widebody scheduled-passenger field. Extreme summer heat is a standing performance consideration for any type operating close to MTOW off the single runway.

---

## 4. Cautions & Warnings

- **The active runway is not locally wind-determined** — it follows Dubai Intl's active configuration. Do not assume a runway assignment from ATIS wind alone.
- **No tower-to-departure handoff on IFR departures** — pilots must self-select and change to the assigned Dubai Departures frequency after airborne; Sharjah Tower will not provide it.
- **Both runway thresholds are displaced** — LDA is 3,760 m, not the full 4,060 m; brief the correct figure.
- **GNSS jamming/spoofing has been specifically reported at Sharjah** as part of the wider Gulf pattern — expect possible FMS position drift; cross-check DME/DME/IRU and advise ATC early.
- **Extreme summer heat (40–45°C, BWh climate)** — a real density-altitude/performance driver despite sea-level elevation.
- One tier-4 source states the aerodrome is **not normally available for A380-800 diversions except for Emirates** flights — the dedicated cargo apron is separately reported as Code F (A380-class) capable for freighter types; verify current AIP before planning any large-type diversion.
- **Wrong-turn ground hotspot**: after vacating RWY 12 onto taxiway B11, aircraft must always turn left onto B — a right turn onto A12 is explicitly prohibited per the VATSIM-network ground-movement reference (see §13).

---

## 5. Aerodrome category, restrictions & crew qualification

- **Special-airport / category:** Not operator-categorised as a restricted-crew "special airport" in reachable sources. 🟧
- **Crew-qualification gate:** None specifically identified; standard ILS/RNAV proficiency applies. Confirm current low-visibility-procedure (LVP) trigger values and any CAT II/III equipment status before relying on them — a tier-4 network-sim reference describes LVO trigger conditions (RVR/visibility ≤1,500 m or ceiling ≤500 ft, all ops suspended below RVR 350 m) but does not establish confirmed CAT II/III ground infrastructure at this field; treat as unconfirmed. 🟧
- **Operating restrictions / bans:** No curfew identified; no RNP AR restriction found. One tier-4 source states the aerodrome is not normally available for A380-800 diversions except Emirates flights — not corroborated from a primary source. 🟧
- **Overflight / entry / permits:** Standard UAE civil arrival; no special state permit identified for a normal international operation. See the regional [Middle East airspace brief](../../../../airspace/middle-east.md) for the wider Gulf conflict-zone/overflight-advisory picture that applies to the region generally.
- **Operations notes:** **Sharjah Aviation Services (SAS)** appears to be the principal ground handler for scheduled/cargo traffic (IATA CEIV Pharma-certified cold-chain cargo handling) and landing aircraft are reportedly required to contact SAS Operations prior to landing to confirm stand allocation. **Gama Aviation** operates a dedicated Business Aviation Centre/FBO at the field for bizjet traffic.

---

## 6. General / hours / services

| Item | Value | Flag |
|---|---|---|
| ATS hours | H24 reported | 🟧 |
| AD operating hours | H24 reported | 🟧 |
| Night / curfew restrictions | None identified | 🟧 |
| RFF category | Not published / verify | 🟧 |
| Fuel | Jet A-1, H24 reported | 🟧 |
| PCN | Not published / verify | 🟧 |
| Customs | H24 reported | 🟧 |
| Handling / FBO | Sharjah Aviation Services (SAS) — scheduled/cargo; Gama Aviation — business aviation FBO | 🟧 |

---

## 7. Runways & declared distances

| RWY | Dimensions | Surface / PCN | TORA | TODA | ASDA | LDA | Notes |
|---|---|---|---|---|---|---|---|
| 12 | 4,060 × 60 m | Asphalt / PCN not published 🟧 | 4,060 m (full length); 3,011 m (intersection) | Not published 🟧 | 4,060 m (full length); 3,011 m (intersection) | **3,760 m** | Displaced threshold ≈300 m; standard full-length departure holding point reported as B2, intersection option further down the runway |
| 30 | 4,060 × 60 m | Asphalt / PCN not published 🟧 | 4,060 m (full length); 3,052 m (intersection) | Not published 🟧 | 4,060 m (full length); 3,052 m (intersection) | **3,760 m** | Displaced threshold ≈300 m; standard full-length departure holding point reported as B20, intersection option further down the runway |

*Source: a VATSIM-network aerodrome reference stating it is derived from the GCAA eAIP and CAA regulations (see §Sources); cross-checked for elevation/dimensions against OurAirports and SkyVector. 🟧 Not independently re-confirmed against a directly-retrieved primary AIP page — the GCAA eAIP portal itself could not be reached during this build. All distances in metres.*

---

## 8. Communications

| Service | Callsign | Frequency | Hours | Notes |
|---|---|---|---|---|
| ATIS | Sharjah ATIS | 122.400 | H24 assumed | 🟧 |
| Ground | Sharjah Ground | 121.875 | H24 assumed | All clearances and ground contact |
| Tower | Sharjah Tower | 118.600 | H24 assumed | Aerodrome movement area; does **not** provide a handoff to departure control (§3.2) |
| Approach / Departure | **Dubai Departures (South) 121.025** (primary departure) · **Dubai Departures (North) 124.675** · **Dubai Arrivals 124.900** (serves OMDB, OMSJ and OMDW) | H24 assumed | 🟧 Sharjah has no dedicated terminal-approach frequency of its own — terminal control is provided by Dubai | |
| Centre / FIR | Emirates Area Control (GCAA, "U.A.E Radar") | Per current AIRAC | H24 | See [Emirates (OMAE) FIR brief](../../../../airspace/fir/middle-east/emirates-omae.md) |
| Ground handling coordination (non-ATC) | SAS Operations | 129.600 | — | Landing aircraft reportedly required to contact prior to landing for stand allocation; not an ATC frequency |

*Source: a VATSIM-network aerodrome/ATC reference (stated as eAIP-derived) cross-checked against SkyVector's published frequency list, which agrees on ATIS/Ground/Tower and separately lists the Dubai-area frequencies. 🟧 Treat exact current values as pending a live-AIRAC cross-check.*

---

## 9. Navaids

| Aid | Ident | Freq | Hours | Notes |
|---|---|---|---|---|
| ILS/DME (RWY 12) | ISRE | 108.550 | H24 assumed | 🟧 One tier-4 flight-sim source instead describes RWY 12 as a GPS/RNAV-only approach — discrepancy not reconciled, see §18 |
| ILS/DME (RWY 30) | ISHW | 111.950 | H24 assumed | Also served by a published RNAV (RNP) Y approach (name only) |
| VOR (external) | MINHAD (MIN) | 115.20 | H24 assumed | ~19.3 NM, radial 018° |
| VOR (external) | RAS AL KHAIMAH (RAV) | 113.60 | H24 assumed | ~28.0 NM, radial 234° |
| VOR/NDB (external) | ABUMUSA ISLAND (ABM) | 115.40 / 285 kHz | H24 assumed | ~42–42.4 NM |
| VOR (external) | FUJAIRAH (FJV) | 113.80 | H24 assumed | ~47.6 NM, radial 284° |

*On-field ILS/DME idents and frequencies sourced to a VATSIM-network aerodrome reference; external VOR/NDB list from SkyVector. 🟧 Not independently re-confirmed against a current AIRAC.*

---

## 10. Arrival

- **Transition altitude / level:** **13,000 ft / FL150** — the standard UAE-wide value (matches Dubai) 🟧, per a VATSIM-network aerodrome reference; not independently confirmed against a primary AIP table.
- **Speed:** Arrival speed schedule inside the Dubai TMA (informational, tier-4 network-sim reference — verify current chart): 210–250 kt at CTA entry, 180–230 kt downwind-to-base, 160–210 kt on base, 190 kt until 10 DME, 160 kt until 4 DME.
- **Preferential runway logic:** 🟥 Entirely slaved to Dubai Intl's active runway direction — see §3.2. There is no independent Sharjah wind-based selection.
- **Approaches (names only — verify minima on current AIRAC charts):**

| RWY | Approach | IAF | FAF/FAP alt | Notes |
|---|---|---|---|---|
| 12 | ILS (ISRE) | Not published / verify 🟧 | Not published / verify 🟧 | One tier-4 source instead reports GPS/RNAV-only — verify current chart |
| 30 | ILS (ISHW); RNAV (RNP) Y | Not published / verify 🟧 | Not published / verify 🟧 | |

- **STARs (names only):** Not independently confirmed in reachable sources. STAR assignment is reported as being based on the waypoint at which the flight enters the Dubai TMA, with Sharjah sharing common SID/STAR endpoints with Dubai — pull the current-AIRAC STAR list at planning. 🟧
- **LVP:** A tier-4 network-sim reference states LVO commences at touchdown RVR ≤1,500 m, meteorological visibility ≤1,500 m, or cloud ceiling ≤500 ft (pre-emptively at ≤3,000 m/700 ft forecast declining), with all operations suspended below RVR 350 m — this describes a generic LVO trigger structure and does **not** confirm CAT II/III ground infrastructure at OMSJ specifically. 🟧
- **Missed approach watch-items:** Not terrain-driven (flat coastal desert). The operative concern is re-sequencing back into the Dubai TMA traffic environment that Sharjah's arrivals are embedded within.

---

## 11. Departure

- **SIDs (names only — fly the charted version):** Not independently confirmed from a primary AIP source. A tier-4 network-sim reference lists SID assignment by first-waypoint, with named waypoints including ANVIX, DAVMO, EMERU, IVURO, KUTLI, MIROT, NABIX, RIDAP and SENPA feeding specific SID identifiers per runway — pull the current-AIRAC SID list at planning. 🟧
- **RNP / climb-gradient requirements:** Not confirmed. See [`OM E — PBN and RNP Operations`](../../../../../flight-ops/pbn-and-rnp-operations.md).
- **Take-off minima:** Not published / verify. 🟧
- **Start-up / push-back:** Reported practice is to contact Sharjah Ground approximately 10 minutes prior to start-up with callsign, type, stand, requested level, destination and current ATIS/QNH; push-back is ground-controlled (standard/short/long push types depending on stand position) rather than self-manoeuvre. 🟧
- **ATC slot / CTOT & clearance:** No curfew or formal slot-coordination level identified for OMSJ; **no CPDLC/datalink clearance delivery** is reported — IFR clearance is by voice via Ground. Departure release is coordinated with Dubai Departures/Approach and Dubai Tower when multiple departures share an exit point (Dubai CTA flow control), and named flow-control separation applies toward specific Muscat FIR entry points from certain Sharjah SIDs. See [`OM E — Datalink and Oceanic Procedures`](../../../../../flight-ops/datalink-and-oceanic-procedures.md).
- **De-icing:** **NIL** — hot desert climate, no de-icing requirement. 🟩

---

## 12. Noise & Environmental

- **Noise abatement (NAP):** Not confirmed in reachable sources. 🟧
- **Night noise / dB limits:** None identified — consistent with the field's H24, no-curfew operating pattern.
- **Engine run-up restrictions:** Not confirmed. 🟧
- **Reverse thrust / idle-reverse policy:** Not confirmed. 🟧

---

## 13. Ground operations

- **Stands for our types:** 🟧 Passenger apron positions 1A–1C and 11–26 are reported as Code C (medium) capable only; positions 2–8 as Code E (heavy) capable; the dedicated cargo apron (positions 50–62) is reported as Code F (A380-class) capable for freighter operations — this sits in apparent tension with a separate tier-4 note that the aerodrome is not normally available for A380-800 passenger diversions except Emirates flights. Since OMSJ is not in VAMSYS, no K Global stand assignment exists.
- **Push-back:** Ground-controlled; standard, short and long push-back types reported depending on stand position, with simultaneous push-back permitted given at least 2-stand separation (not permitted in the 11–26 alleyway or between stands 1A–1C).
- **Standard taxi routes:** Departure — passenger-apron traffic (stands 1A–26) via taxiway A/A20 to holding point B20 (RWY 30) or via A/A2 to holding point B2 (RWY 12); cargo-apron traffic (stands 50–62) via Z8, A8 and B to the same holding points. Arrival — RWY 30 traffic vacates via B6/B7 then taxis via A6/A to stand; RWY 12 traffic vacates via B11/B14 then taxis via A14/A to stand.
- **Hot spots / tight taxiways:** 🟥 Eastbound taxiway-B traffic flow between B2 and B7 blocks the RWY 30 exit taxiways; westbound B-flow between B14 and B11 blocks the RWY 12 exits. A specific wrong-turn hotspot is reported after vacating RWY 12 onto B11 — aircraft must always turn **left** onto B, never right onto A12.
- **Follow-me:** Availability not confirmed. 🟧

---

## 14. Weather & seasonal (durable)

- **Climate / prevailing wind:** Hot desert climate (Köppen BWh); coastal Persian Gulf location brings periodic humidity/haze on top of the typical Gulf climatology.
- **Seasonal hazards:** Summer maximum temperatures of 40–45°C are common (SKYbrary) — a density-altitude/performance consideration even at sea-level elevation. The wider Gulf region experiences seasonal **shamal winds and blowing dust/haboob events** (see the [Middle East regional airspace brief](../../../../airspace/middle-east.md) §11) that can degrade visibility with limited warning. **GNSS jamming/spoofing has been specifically reported at Sharjah** as part of a wider Gulf-hub pattern (alongside Bahrain, Doha, Abu Dhabi and Dammam) — see the [Emirates (OMAE) FIR brief](../../../../airspace/fir/middle-east/emirates-omae.md) §10.
- **Local effects:** Coastal humidity/haze; no notable terrain-driven local wind effects given the flat surrounding desert.

> **Live weather — pull at planning (T-2h):** METAR, TAF, TREND, SIGMET/AIRMET, GNSS-interference advisories. Not stored here.

---

## 15. NOTAMs

> **Pull at planning (T-2h).** Perishable — not stored here. Check: runway/taxiway closures, navaid U/S, lighting, obstacle/crane, RFF downgrade, GPS/RAIM/GNSS-interference advisories (a known live issue in this area — see §14), conflict-zone bulletins for the wider Gulf/Strait-of-Hormuz picture. Source: AIS / OFP NOTAM block.

---

## 16. Fuel & alternate planning notes

- **Typical role for us:** Not in VAMSYS — no confirmed company role. As general operational geography, its proximity to the Emirates FIR bridge hub (OMAA) and to OMDB makes it a plausible future diversion/cargo-adjacent field, but this is not a sourced company designation.
- **Nearest suitable alternates:** Not in VAMSYS 🟧. General Gulf geography only: OMDB (~9 NM), OMRK (~28–29 NM), OMAA (~71 NM) — same-country siblings [OMAL — Al Ain Intl](../omal/index.md) and [OMRK — Ras Al Khaimah Intl](../omrk/index.md) also sit in the wider Emirates FIR bridge-hub network.
- **Fuel-uplift notes:** Jet A-1 reported available H24; specific into-plane supplier not confirmed for this field individually — regional fuel suppliers active in the UAE market include Air BP, Shell Aviation, ENOC Aviation, ADNOC Distribution and Chevron (not OMSJ-specific confirmation). 🟧 See [`OM E — Fuel Policy`](../../../../../flight-ops/fuel-policy.md).
- **Range/perf flags for our fleet:** Field length/strength (4,060 m runway, 3,760 m LDA) non-limiting for any K Global type. See [`OM B — Fleet Capability Matrix`](../../../../../fleet/capability-matrix.md).

---

## 17. Fleet-specific notes (optional)

- OMSJ is not currently in VAMSYS, so no type-specific K Global consideration exists yet. Generically, field length is non-limiting for any current K Global type; the summer density-altitude/heat consideration (§3.4/§3.5) would be the standing performance watch-item for any future operation here. See [`OM B — Fleet Capability Matrix`](../../../../../fleet/capability-matrix.md).

---

## 18. Open items (🟧 — confirm against AIP / current AIRAC)

- **Field elevation** — sources disagree (111 ft vs 116 ft vs 118 ft); not reconciled to a single primary figure.
- **Magnetic variation** — sourced to a 2012-epoch tier-4 reference; not independently re-confirmed.
- **RWY 12 approach type** — an ILS/DME (ISRE 108.550) is reported by one tier-4 source, while another (flight-sim community) source describes RWY 12 as GPS/RNAV-only; not reconciled.
- **RFF category, PCN, take-off minima, NAP, engine run-up/reverse-thrust policy, follow-me availability** — none confirmed in reachable sources.
- **Displaced-threshold extent** — sources disagree on whether both runway ends or only RWY 30 carries the ~300 m displacement (the LDA figures used here, 3,760 m both ends, assume both).
- **CAT II/III ground infrastructure** — an LVO trigger structure is described in a tier-4 network-sim reference, but confirmed CAT II/III equipment at OMSJ specifically was not found.
- **A380-800 diversion restriction** — one tier-4 source states the aerodrome is not normally available for A380-800 diversions except Emirates flights, while the cargo apron is separately described as Code F/A380-capable; not reconciled.
- **SIDs/STARs (current names)** — not obtained from a primary source this pass; pull the live current-AIRAC procedure list before use.
- **Fuel supplier(s) and into-plane hours specific to OMSJ** — not individually confirmed.
- **Customs/immigration desk hours** — reported H24 but not independently confirmed.
- **GCAA eAIP direct access** — the official eAIP portal could not be reached during this build; all figures above should be re-verified against it once accessible.

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim material (current-AIRAC charts) informs content but is not listed here.*

- OurAirports — https://ourairports.com/airports/OMSJ/ and /runways.html (retrieved 2026-07-26). *ARP, elevation, runway/displaced-threshold data.*
- SkyVector — https://skyvector.com/airport/OMSJ/Sharjah-International-Airport (retrieved 2026-07-26). *Coordinates, runway dimensions, communications, nearby navaids and airports.*
- SKYbrary — https://skybrary.aero/airports/omsj (retrieved 2026-07-26). *Elevation, coordinates, climate (Köppen BWh), runway data, historical accident references.*
- Wikipedia — "Sharjah International Airport" — https://en.wikipedia.org/wiki/Sharjah_International_Airport (retrieved 2026-07-26). *General history, elevation (116 ft variant), runway length ("longest in the Middle East" per a 2010 airport yearbook), cargo/LCC traffic character, historical accidents.*
- Arabian vACC (VATSIM) — Library, Sharjah Aerodrome Information, Air Control and Ground Movement Procedures — https://library.vatsim-arabian.com/aerodrome/sharjah/aerodrome/ , /air/ , /gmc/ and https://library.vatsim-arabian.com/pilots/sharjah/overview/ , /departures/ , /arrivals/ (retrieved 2026-07-26). *Network-sim document, not regulatory — states it is derived from the GCAA eAIP and applicable CAA regulations; used here for cross-check of ARP, mag var, TA/TL, runway/declared-distance data, ILS idents/frequencies, Dubai-TMA runway/SID/STAR dependency, ground-movement/hotspot detail. Per the VATSIM cross-check requirement in `_Instructions`, this is the operational-content validation source for this build.*
- MetarCentral — OMSJ Charts, Approach Plates & Airport Operations — https://metarcentral.com/airport/OMSJ/operations (retrieved 2026-07-26). *Aggregator citing an AIP data extract (Apr 2026) for fuel/customs/operating hours, apron/stand layout, and the A380-diversion restriction note; links to the official GCAA eAIP page which could not itself be directly rendered during this build.*
- GCAA (General Civil Aviation Authority, UAE) — eAIP AD-2.OMSJ — https://www.gcaa.gov.ae/en/ais/AIPHtmlFiles/AIP/Current/AIRACs/2026-P02/pdf/AD-2.OMSJ.pdf and https://www.gcaa.gov.ae/en/ais/AIPHtmlFiles/AIP/Current/AIRACs/2026-P02/html/eAIP/AD-2.OMSJ-en-GB.html (identified via search; **not reachable for direct text extraction during this build** — flagged for future re-verification).
- Air Arabia Cargo — "Sharjah" airport-facilities page — https://cargo.airarabia.com/airport-facilities/sharjah/ (retrieved 2026-07-26). *Cargo terminal count/layout, IATA CEIV Pharma certification, Sharjah Aviation Services as ground handler.*
- CAPA (Centre for Aviation) — Sharjah Airport profile — https://centreforaviation.com/data/profiles/airports/sharjah-airport-shj (retrieved 2026-07-26). *Ground/cargo handlers, fuel suppliers, cargo-hub character.*
- Business Air News — Sharjah Intl handbook page — https://www.businessairnews.com/hb_airportpage.html?recnum=1774 (retrieved 2026-07-26). *Gama Aviation Business Aviation Centre/FBO corroboration.*
- Sleeping in Airports — Sharjah Airport Guide — https://www.sleepinginairports.net/guides/sharjah-airport-guide.htm (retrieved 2026-07-26). *H24 operating-hours corroboration, terminal/passenger-facility detail.*

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-26 | Built from national AIP; K Global fields from live VAMSYS; 4-page pack. |
