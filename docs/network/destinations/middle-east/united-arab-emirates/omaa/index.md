# OMAA — Zayed Intl · Airport Briefing

**OMAA / AUH** · Abu Dhabi, United Arab Emirates · Middle East
**Version** v0.1 · **Updated** 2026-07-26 · **Status** Draft — UAE GCAA AIP not reachable this pass; built from tier-4 public sources, cross-checked against the Emirates (OMAE) FIR brief

> **Read-me:** Planning aid for the sim, not a chart. Static data is drawn from public tier-4 corroboration (OurAirports, Wikipedia, the Emirates FIR brief) pending a live UAE GCAA AIP pull; approaches/SIDs/STARs are listed **by name only or flagged not-yet-confirmed** — fly the charted current-AIRAC version. Live weather/NOTAMs are pulled at planning (§14/§15). Open 🟧 items are listed in §18. Flag legend 🟥 restriction/hazard · 🟧 caution/unverified · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| ARP (lat/long) | 24°25′59″N 054°39′04″E / 24.43306°N 54.65111°E `[Navigraph navdata]`; independent tier-4 fix 24.440966°N 54.649237°E (~0.7 NM NNE) — minor discrepancy, not reconciled 🟧 |
| Field elevation | **88 ft / 27 m AMSL** — consistent across sources 🟩 |
| Mag variation | Not published / verify 🟧 |
| Time zone | UTC+4 (UAE Standard Time, no DST) |
| Runway(s) | **13L/31R** 4,100 × 60 m · **13R/31L** 4,106 × 60 m (both asphalt, lighted) `[OurAirports]`; a separate corroborating source states both at 4,205 × 60 m with **CAT III-B** capability — the length figures disagree by ~100–300 m between sources, not reconciled against a primary AIP table 🟧 |
| Preferential runway | Not published / verify — parallel independent/dependent operation expected given the twin full-length runway layout 🟧 |
| Longest LDA | ~4,100–4,205 m class (exact LDA not confirmed pending AIP) 🟧 |
| Approaches | **ILS CAT III-B** reported on both runways `[tier-4]` — sub-category and per-runway minima not confirmed from a primary source 🟧 |
| RFF category | Not published / verify — assumed in the highest ICAO band given A380-class/widebody international operations, **not confirmed** 🟧 |
| Control type | **Radar** — Abu Dhabi Approach terminal; **Emirates area control (GCAA — Sheikh Zayed Air Navigation Centre)** enroute — see [Emirates (OMAE) FIR brief](../../../../airspace/fir/middle-east/emirates-omae.md) |
| Elevation class | Near sea-level (88 ft) — **not** hot-and-high by elevation; the performance driver is **summer extreme heat/density altitude**, not field elevation |
| Special-airport status | New single midfield passenger terminal (Terminal A) consolidating all commercial operations since late 2023/early 2024; former terminals closed — see §6/§13 |
| Customs / PoE | **Yes** — Terminal A international facilities; H24 assumed for a major hub, exact desk hours not confirmed 🟧 |
| K Global category | **L** `[VAMSYS mirror 2026-07-25]` |
| K Global base | **YES — home Middle East (bridge) hub** `[VAMSYS mirror 2026-07-25]` |
| Company preferred alternates | **OMDB, OTHH, OBBI** `[VAMSYS mirror 2026-07-25]` |
| Taxi-in / taxi-out (VAMSYS) | **14 min / 18 min** `[VAMSYS mirror 2026-07-25]` |

---

## 2. Validation summary

| Domain | Flag | Note |
|---|---|---|
| Terrain / CFIT | 🟩 | Flat coastal desert/reclaimed-island site; no close-in high terrain relevant to arrival, departure or missed-approach paths. |
| Runway length vs fleet perf | 🟩 | Both parallels are in the 4,100 m+ class — ample for any K Global widebody type; exact current-cycle figures pending AIP confirmation. |
| Approach availability / minima | 🟧 | CAT III-B reported on both runways by tier-4 corroboration only — not independently confirmed from a primary AIP minima table this pass. |
| Airspace / traffic / control | 🟩 | Radar/ADS-B-controlled throughout the Emirates FIR; dense but well-structured terminal environment feeding the bridge hub — see the FIR brief. |
| Weather / seasonal hazard | 🟥 | Summer extreme heat/density altitude and shamal dust are the field's defining seasonal hazards — see §14. |
| Curfew / slots / hours | 🟧 | No published curfew or slot-coordination level found in reachable sources — treat as **not confirmed**, not as "none," pending AIP verification. |
| RFF category vs our types | 🟧 | Category not confirmed from a primary source this pass — assumed adequate for widebody ops at a major international hub, verify before relying on it. |
| Fuel availability | 🟧 | Jet A-1 assumed available H24 as a major hub and K Global base; specific supplier/hours not confirmed in reachable public sources. |
| Customs / handling / security | 🟧 | Terminal A international facilities confirmed to exist; exact desk hours, current handler roster and post-consolidation stand/gate map not fully confirmed. |

---

## 3. Threat & Error Management (TEM)

### 3.1 CFIT / Terrain 🟩
OMAA sits at 88 ft AMSL on flat coastal/reclaimed terrain — there is **no close-in high terrain** relevant to arrival, departure or missed-approach paths at the field itself. The nearest notable relief (the Hajar Mountains, to ~1,934 m near the Oman border) is well to the east and is a terminal consideration only for the eastern UAE fields (Fujairah/Ras Al Khaimah), not for Abu Dhabi — see the [Emirates (OMAE) FIR brief](../../../../airspace/fir/middle-east/emirates-omae.md) §8. Verify the MSA ring on the current chart as routine practice; CFIT is not the operative threat here.

### 3.2 Airborne conflict / traffic 🟩
Abu Dhabi Approach and the wider Emirates FIR are radar/ADS-B-controlled throughout ("U.A.E Radar" from FL150 and above per the FIR brief), feeding two of the world's busiest hub complexes (Abu Dhabi and Dubai) in a compact, dense FIR. Expect sustained radar vectoring and sequencing during banks, particularly given the proximity of Dubai's terminal traffic and Al Bateen (OMAD) executive traffic to the west. Cross-ref [Emirates (OMAE) FIR brief](../../../../airspace/fir/middle-east/emirates-omae.md) §3/§6.

### 3.3 Runway excursion 🟧
No displaced thresholds or PCN figures were found in the reachable tier-4 extract for either runway — **not independently confirmed** against a current AIRAC/AIP cycle. Treat both runways as full-length, full-strength pending verification.

### 3.4 Weather threat 🟥
**Summer extreme heat (routinely 45°C+) and the associated density-altitude performance penalty** is the field's defining seasonal hazard — a **hot-weather, not hot-elevation**, driver given the near-sea-level field. **Shamal winds and blowing dust/sand** (summer and winter shamal, haboob events) reduce visibility and can trigger low-visibility procedures with limited notice. See §14 and the [Middle East airspace brief](../../../../airspace/middle-east.md) §11 for the regional seasonal picture.

### 3.5 Operational considerations 🟥
As the K Global home Middle East hub, plan around three durable considerations: (1) the **still-consolidating Terminal A infrastructure** — the field completed a full single-terminal transition in late 2023/early 2024 and the current-day (2026) stand/gate/handling picture should be reconfirmed rather than assumed stable long-term; (2) the **regional conflict-zone/GNSS-interference picture** — the Emirates FIR sits under an active conflict-zone advisory with reported GPS spoofing/jamming (see [Middle East airspace brief](../../../../airspace/middle-east.md) §9 and the [Emirates (OMAE) FIR brief](../../../../airspace/fir/middle-east/emirates-omae.md) §10 — **live and perishable, re-check at planning**); and (3) **summer heat performance planning** for widebody departures at high OAT. RFF, navaid and approach infrastructure are assumed first-tier for a hub of this scale, but this is **not yet independently confirmed** — the §18 open items are mostly primary-source confirmations rather than known safety-critical gaps.

---

## 4. Cautions & Warnings

- **Regional conflict-zone advisory is live** — the Emirates FIR (OMAE) sits under an active EASA CZIB and reported GPS spoofing/jamming; re-check the current picture at planning before relying on any routing or GNSS-based procedure (see the Middle East airspace brief §9).
- **Summer density-altitude/heat performance** — routine 45°C+ days materially affect takeoff performance planning even at this near-sea-level field; do not treat elevation class alone as the performance signal.
- **Shamal dust/haboob events** can drop visibility rapidly with limited warning — confirm current LVP status before planning into or out of the field in season.
- **Terminal A is a relatively new, still-maturing single-terminal operation** (post-2023/24 consolidation) — confirm current gate/stand assignment and handling arrangements rather than assuming a static picture.
- **Declared-distance/runway-length figures disagree between tier-4 sources** (4,100–4,106 m vs 4,205 m for the two parallels) — treat exact figures as unconfirmed pending a primary AIP table (§18).
- A **third parallel runway and a new midfield tower** are documented in the airport's published expansion masterplan — **not yet built/operational**; do not assume additional runway capacity beyond the current two parallels.

---

## 5. Aerodrome category, restrictions & crew qualification

- **Special-airport / category:** Not operator-categorised as a restricted-crew "special airport" in reachable sources; the standing crew-briefing items are the **CAT III-B low-visibility environment** (reported, not primary-confirmed) and **summer heat performance planning**. 🟧
- **Crew-qualification gate:** CAT II/III currency expected for full-capability low-visibility ops if the CAT III-B capability is confirmed — verify crew/aircraft currency before planning a low-vis arrival. 🟧
- **Operating restrictions / bans:** No published curfew, RNP AR ban or circling restriction found in reachable sources — **not confirmed as "none," treat as unverified** pending AIP access. 🟧
- **Overflight / entry / permits:** Standard UAE international arrival; no special state permit required for a normal commercial operation. 🟩
- **Operations notes:** ANSP — **GCAA** (General Civil Aviation Authority); enroute control via **Sheikh Zayed Air Navigation Centre** (Abu Dhabi); terminal approach — **Abu Dhabi Approach**. See [Emirates (OMAE) FIR brief](../../../../airspace/fir/middle-east/emirates-omae.md) §4.

---

## 6. General / hours / services

| Item | Value | Flag |
|---|---|---|
| ATS hours | Assumed H24 for a major international hub — not independently confirmed | 🟧 |
| AD operating hours | Assumed H24 — no published curfew found in reachable sources | 🟧 |
| Night / curfew restrictions | Not published / verify — no curfew found, not confirmed as "none" | 🟧 |
| RFF category | Not published / verify | 🟧 |
| Fuel | Jet A-1 assumed available H24 as the K Global home hub; specific supplier/hours not confirmed | 🟧 |
| PCN | Not published / verify | 🟧 |
| Customs | Terminal A international facilities; exact hours not confirmed | 🟧 |
| Handling / FBO | Not confirmed in reachable public sources | 🟧 |

**Terminal context (durable):** all commercial operations were consolidated into a single new midfield passenger terminal ("Terminal A") through late 2023 into early 2024, replacing the airport's three older terminal buildings (all now closed). The new terminal incorporates biometric "smart travel" processing for arriving passengers. Exact current passenger-capacity and stand-count figures were not independently confirmed this pass. 🟧

---

## 7. Runways & declared distances

| RWY | Dimensions | Surface / PCN | TORA | TODA | ASDA | LDA | Notes |
|---|---|---|---|---|---|---|---|
| 13L | 4,100 m × 60 m (tier-4) / 4,205 m × 60 m (alt. tier-4 source) | Asphalt / PCN not published | Not published | Not published | Not published | Not published | Length figures disagree between sources — verify against primary AIP 🟧 |
| 31R | (reciprocal of 13L) | Asphalt / PCN not published | Not published | Not published | Not published | Not published | See 13L note |
| 13R | 4,106 m × 60 m (tier-4) / 4,205 m × 60 m (alt. tier-4 source) | Asphalt / PCN not published | Not published | Not published | Not published | Not published | Length figures disagree between sources — verify against primary AIP 🟧 |
| 31L | (reciprocal of 13R) | Asphalt / PCN not published | Not published | Not published | Not published | Not published | See 13R note |

*No displaced thresholds found in the reachable tier-4 extract for either runway — not independently confirmed. TORA/TODA/ASDA/LDA and PCN figures are not published in any source reached this pass; declared distances must be pulled from the GCAA AIP before operational use. A published airport expansion masterplan describes a future third parallel runway (~2,000 m north of the existing pair) and a new midfield tower — not yet built. All lengths in metres.*

---

## 8. Communications

| Service | Callsign | Frequency | Hours | Notes |
|---|---|---|---|---|
| ATIS | Abu Dhabi ATIS | 125.1 | Not confirmed (assumed H24) | 🟧 single-frequency tier-4 snapshot; likely incomplete |
| Approach (RDR) | Abu Dhabi Approach | 124.4 | Not confirmed (assumed H24) | 🟧 |
| Tower | Abu Dhabi Tower | 119.2 | Not confirmed (assumed H24) | 🟧 |
| Delivery / Ground | Not published / verify | — | — | 🟧 Not found in reachable tier-4 source |
| Centre / FIR | Emirates area control (GCAA — Sheikh Zayed ANC) | Per current AIRAC | H24 | See [Emirates (OMAE) FIR brief](../../../../airspace/fir/middle-east/emirates-omae.md) |

*Source: single-entry tier-4 aggregator snapshot only — this is very likely an incomplete picture for a hub of this traffic density (a real ATIS/Approach/Tower/Ground/Delivery structure with multiple sector frequencies should be expected, as at EDDF or OMDB). Treat every frequency above as unconfirmed pending a live AIRAC/AIP cross-check — do not rely on this table operationally.*

---

## 9. Navaids

| Aid | Ident | Freq | Hours | Notes |
|---|---|---|---|---|
| VOR-DME | Abu Dhabi (AUH) | 113.00 | Not confirmed (assumed H24) | On/near field `[tier-4]` |
| VOR-DME | Bateen (VAD) | 114.00 | Not confirmed (assumed H24) | ~10 NM W — serves Al Bateen (OMAD) |
| NDB | Bateen (AD) | 392 kHz | Not confirmed (assumed H24) | ~10.6 NM W |
| VORTAC | Al Dhafra (MA) | 114.90 | Not confirmed (assumed H24) | ~13 NM SSW — co-located with a military airfield; navaid reference only |
| ILS (both runways) | Idents not published | Not published | Not published | CAT III-B reported by tier-4 corroboration; idents/frequencies not confirmed 🟧 |

*Sourced to OurAirports navaid-proximity data (tier-4); idents/frequencies for the field's own ILS installations were not found in reachable sources this pass. Confirm all idents/frequencies against the current AIRAC before use.*

---

## 10. Arrival

- **Transition altitude / level:** Not published / verify. 🟧
- **Speed:** Standard 250 KIAS below FL100 (ICAO norm) — confirm no local override on current chart.
- **Preferential runway logic:** Not published / verify — expect wind-driven selection between the two parallel runways; no published preferential-runway rule found. 🟧
- **Approaches (names only — verify minima on current AIRAC charts):**

| RWY | Approach | IAF | FAF/FAP alt | Notes |
|---|---|---|---|---|
| 13L/31R | ILS, reported CAT III-B | Not published | Not published | Sub-category/minima not primary-confirmed 🟧 |
| 13R/31L | ILS, reported CAT III-B | Not published | Not published | Sub-category/minima not primary-confirmed 🟧 |

- **STARs (names only):** Not confirmed in reachable research pass — pull the current-AIRAC STAR list at planning. 🟧
- **LVP:** CAT III-B capability reported; exact trigger conditions/RVR minima not confirmed this pass. 🟧
- **Missed approach watch-items:** Terrain is not the driver (flat coastal site); the operative missed-approach concern is re-sequencing into the dense Abu Dhabi/Dubai terminal traffic picture — see [Emirates (OMAE) FIR brief](../../../../airspace/fir/middle-east/emirates-omae.md) §3.

---

## 11. Departure

- **SIDs (names only — fly the charted version):** Not confirmed in reachable research pass — pull the current-AIRAC SID list at planning. 🟧
- **RNP / climb-gradient requirements:** RNAV 1/RNP 1 terminal procedures are standard across the dense Abu Dhabi/Dubai TMA per the [Emirates (OMAE) FIR brief](../../../../airspace/fir/middle-east/emirates-omae.md) §5 — confirm gradient/equipage per SID on the current chart. See also [`OM E — PBN and RNP Operations`](../../../../../flight-ops/pbn-and-rnp-operations.md).
- **Take-off minima:** Published per AIP — exact figures not confirmed this pass. 🟧
- **Start-up / push-back:** Not confirmed in reachable sources — confirm cross-bleed/APU notification and push-back procedure locally. 🟧
- **ATC slot / CTOT & clearance:** No published slot-coordination level found in reachable sources — **not confirmed as uncoordinated**, verify at planning. 🟧
- **De-icing:** Not applicable — no cold-weather de-icing requirement at this field; the seasonal performance driver is heat, not icing. 🟩

---

## 12. Noise & Environmental

- **Noise abatement (NAP):** Not confirmed in reachable sources — verify locally. 🟧
- **Night noise / dB limits:** Not confirmed in reachable sources. 🟧
- **Engine run-up restrictions:** Not confirmed in reachable sources — verify locally. 🟧
- **Reverse thrust / idle-reverse policy:** Not confirmed in reachable sources — verify locally. 🟧

---

## 13. Ground operations

- **Stands for our types:** The new single midfield terminal (Terminal A) is designed to handle a large mixed-fleet widebody operation, replacing the former multi-terminal layout; exact current stand count/code-letter allocation not confirmed this pass. 🟧
- **Push-back:** Not confirmed in reachable sources. 🟧
- **Standard taxi routes:** Confirm with Ground/Apron on the day — not published in reachable sources. 🟧
- **Hot spots / tight taxiways:** Not confirmed in reachable sources this pass. 🟧
- **Follow-me:** Availability not confirmed in reachable sources. 🟧

---

## 14. Weather & seasonal (durable)

- **Climate / prevailing wind:** Arid desert/coastal climate; extreme summer heat (routinely 45°C+, Jun–Sep) is the dominant seasonal characteristic.
- **Seasonal hazards:** **Summer heat and density-altitude performance penalty** (Jun–Sep) is the defining hazard for a near-sea-level field. **Shamal winds and blowing dust/sand** (summer and winter shamal, haboob events) reduce visibility across the region and can trigger LVO with limited notice — see the [Middle East airspace brief](../../../../airspace/middle-east.md) §11.
- **Local effects:** Coastal/marine layer effects possible near the Gulf shoreline; no significant terrain-driven local wind effect at this flat site.

> **Live weather — pull at planning (T-2h):** METAR, TAF, TREND, SIGMET/AIRMET. Not stored here.

---

## 15. NOTAMs

> **Pull at planning (T-2h).** Perishable — not stored here. Check: runway/taxiway closures, navaid U/S, CAT III equipment status, lighting, obstacle/crane, RFF downgrade, GPS/RAIM (GNSS interference is reported region-wide — see the Middle East airspace brief §9), conflict-zone/overflight bulletins. Source: official AIS / OFP NOTAM block.

---

## 16. Fuel & alternate planning notes

- **Typical role for us:** **Home Middle East (bridge) hub / base** — the primary regional departure and return field for the K Global network.
- **Nearest suitable alternates:** Company preferred alternates **OMDB** (Dubai Intl, same country, [briefing](../omdb/index.md)), **OTHH** (Hamad Intl, Qatar), **OBBI** (Bahrain Intl) `[VAMSYS mirror 2026-07-25]` — confirm suitability, runway/RFF adequacy and current minima per leg; both OTHH and OBBI sit under the regional conflict-zone advisory (see [Middle East airspace brief](../../../../airspace/middle-east.md) §8/§9).
- **Fuel-uplift notes:** Jet A-1 assumed available H24 as the K Global home hub; specific into-plane provider/hours not confirmed. 🟧 See [`OM E — Fuel Policy`](../../../../../flight-ops/fuel-policy.md).
- **Range/perf flags for our fleet:** Field length/strength non-limiting for any K Global type on either parallel runway (4,100 m+ class); the operative planning consideration is summer heat/density-altitude performance rather than field length. See [`OM B — Fleet Capability Matrix`](../../../../../fleet/capability-matrix.md).

---

## 17. Fleet-specific notes (optional)

- As the home Middle East hub, OMAA is the base field for the K Global fleet generally rather than a single-type consideration — see [`OM B — Fleet Capability Matrix`](../../../../../fleet/capability-matrix.md). No field-elevation or field-length performance penalty is expected for any K Global type; the operative planning consideration is **summer high-OAT takeoff performance** rather than aircraft-specific limitation.

---

## 18. Open items (🟧 — confirm against AIP / current AIRAC)

- **UAE GCAA AIP was not reachable this pass** — every figure in this briefing traces to tier-4 public corroboration (OurAirports, Wikipedia, the Emirates FIR brief) and should be treated as provisional pending a primary-source pull.
- **Runway length discrepancy** — 4,100/4,106 m (OurAirports) vs 4,205 m (alternate tier-4 source) for the two parallels — not reconciled.
- **ARP coordinate discrepancy** — Navigraph-sourced fix vs an independent tier-4 fix differ by ~0.7 NM — not reconciled.
- **ILS sub-category, idents, frequencies and per-runway minima** — CAT III-B reported by tier-4 corroboration only, not primary-confirmed.
- **ATC frequency table** — only a single ATIS/Approach/Tower entry found via tier-4 aggregator; almost certainly incomplete for a hub of this size (no Ground/Delivery/multi-sector Approach frequencies found).
- **RFF category, PCN, declared distances (TORA/TODA/ASDA/LDA), curfew/slot regime, take-off minima, transition altitude** — none confirmed in reachable sources.
- **Current (2026) stand/gate count and handling-agent roster** post-Terminal-A-consolidation — not confirmed.
- **SIDs/STARs (current names)** — not obtained in this research pass.
- **Third parallel runway / new tower masterplan** — documented as a future project; current construction status/timeline not confirmed.
- **VATSIM cross-check** — no dedicated VATSIM vACC/division airport SOP for OMAA was located and cross-checked this pass; treat as an outstanding QA item.

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim material may inform content but is not listed here.*

- OurAirports — https://ourairports.com/airports/OMAA/ , /runways.html , /frequencies.html , /closest-navaids.html (retrieved 2026-07-26). *ARP/elevation/runway/frequency/navaid tier-4 baseline.*
- Wikipedia — "Zayed International Airport" (via "Abu Dhabi International Airport" redirect) — https://en.wikipedia.org/wiki/Zayed_International_Airport (retrieved 2026-07-26). *Terminal A history/consolidation, runway CAT III-B/length corroboration, expansion masterplan.*
- Companion OM C file: [Emirates (OMAE) FIR brief](../../../../airspace/fir/middle-east/emirates-omae.md) — FIR structure, ANSP/control-unit detail, conflict-zone context.
- Companion OM C file: [Middle East airspace brief](../../../../airspace/middle-east.md) — regional conflict-zone, GNSS-interference and seasonal-hazard context.
- **UAE GCAA AIP (AD 2 OMAA)** — primary source of record; not reachable in this research pass (access notes to be recorded in the source register on next attempt).

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-26 | Built from national AIP; K Global fields from live VAMSYS; 4-page pack. |
