# EKBI — Billund · Airport Briefing

**EKBI / BLL** · Billund, Jutland, Denmark · Europe
**Version** v0.1 · **Updated** 2026-07-26 · **Status** Draft — AIP Denmark (Naviair)-derived

> **Read-me:** Planning aid for the sim, not a chart. Static data is drawn from the AIP Denmark (Naviair eAIP, AD 2-EKBI) plus standard public aeronautical data; approaches/SIDs are listed **by name only or flagged not-yet-confirmed** — fly the charted current-AIRAC version. Live weather/NOTAMs are pulled at planning (§14/§15). Open 🟧 items are listed in §18. Flag legend 🟥 restriction/hazard · 🟧 caution/unverified · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| ARP (lat/long) | 55°44′25.16″N / 009°09′06.40″E (55.7403, 9.1518) `[AIP Denmark AD 2-EKBI-1 §2.1]` |
| Field elevation | **246 ft AMSL** (reference temperature 22°C) `[AIP AD 2-EKBI-1 §2.3]` 🟧 secondary sources (Wikipedia/OurAirports/SkyVector) consistently give 247 ft — AIP figure used as authoritative, discrepancy noted |
| Mag variation | 5° E (2025), annual change increasing ~10′/yr `[AIP AD 2-EKBI-1 §2.5]` |
| Time zone | UTC+1 (CET) / UTC+2 (CEST, EU DST observed) |
| Runway(s) | **09/27** — single runway, 3,101 × 45 m, asphalt, PCN 110/F/A/X/T; both thresholds displaced 150 m |
| Preferential runway | No parallel/crosswind runway exists — 09/27 is used bidirectionally by wind; a community reference notes 09 may be used for departure and 27 for landing in a direct-crosswind wind state to minimise taxi time |
| Longest LDA | 2,951 m (either threshold, after the 150 m displacement) |
| Approaches | **ILS CAT II/III on both runway ends** (idents BIL/109.750 on 09, LEL/110.700 on 27); RNP published both ends; **no STARs published** — direct-to-fix or vectors |
| RFF category | **CAT 7**, CAT 8 available with PPR `[AIP AD 2-EKBI-2 §6.1]` 🟩 |
| Control type | **Radar (Approach)** — Billund Approach/Tower on the field; multi-radar track service from **Copenhagen ACC — Copenhagen FIR (EKDK)**; no dedicated FIR brief exists yet in this library — see [Europe (Continental) Airspace Briefing](../../../../airspace/europe.md) 🟧 (general reference only, not EKDK-specific) |
| Elevation class | Near sea-level (246 ft) — not hot-and-high; no density-altitude driver |
| Special-airport status | 🟧 **Level 3 coordinated** via **Airport Coordination Denmark (ACD)**; single-runway field with **no STARs published** (direct/vectored arrivals) and a significant dedicated **cargo operation** — see §5/§13/§16 |
| Customs / PoE | **Yes** — H24, open to traffic to/from all states `[AIP AD 2-EKBI-1 §3.2]` 🟩 |
| K Global category | **R** `[VAMSYS mirror 2026-07-26]` 🟩 |
| K Global base | **No** `[VAMSYS mirror 2026-07-26]` |
| Company preferred alternates | **EKCH** (Copenhagen-Kastrup), **ESGG** (Gothenburg-Landvetter) `[VAMSYS mirror 2026-07-26]` — [EKCH folder](../ekch/index.md) exists in this library; ESGG has no folder/brief yet, referenced as plain text |
| Taxi-in / taxi-out (VAMSYS) | **6 min / 8 min** `[VAMSYS mirror 2026-07-26]` |

---

## 2. Validation summary

| Domain | Flag | Note |
|---|---|---|
| Terrain / CFIT | 🟩 | Flat Jutland terrain; AIP obstacle table shows only one hazardous obstacle (an antenna, 391 ft elevation/148 ft AGL) — a non-issue field for CFIT. |
| Runway length vs fleet perf | 🟩 | 3,101 m single runway is ample for any K Global Category R type; no parallel/crosswind runway exists — single-runway dependency is the operative constraint, not length. |
| Approach availability / minima | 🟩 | ILS CAT II/III on both ends is a strong capability for a regional field; RNP published both ends; no STARs — expect vectors. |
| Airspace / traffic / control | 🟧 | Billund Approach/Tower H24; two active glider areas within the TMA/CTR (Karlskov and Vandel lines) worked by prior agreement — see §3.2. No dedicated Copenhagen FIR (EKDK) brief exists yet in this library. |
| Weather / seasonal hazard | 🟧 | Jutland/North Sea-influenced maritime climate; single runway with no crosswind alternate makes strong-wind days the field's principal weather-driven planning consideration; winter de-icing season (1 Oct–30 Apr, AIP-dated). |
| Curfew / slots / hours | 🟥 | **No hard curfew** but a **night-period (2300–0600) advance-approval requirement for takeoffs**, plus **Level 3 slot coordination via ACD** — see §6/§12. |
| RFF category vs our types | 🟩 | CAT 7 (CAT 8 with PPR) — meets or exceeds requirement for our Category R type. |
| Fuel availability | 🟩 | Jet A-1 confirmed, 2,900 L/min fuelling rate, carnet-card payment (Air BP / DCC & Shell Aviation Denmark) — a well-documented field for fuel. |
| Customs / handling / security | 🟧 | H24 customs confirmed; ground handling is in-house (GHBA — Ground Handling Billund Airport), not independently confirmed for our specific operation. |

---

## 3. Threat & Error Management (TEM)

### 3.1 CFIT / Terrain 🟩
EKBI sits at 246 ft AMSL on flat Jutland terrain. The AIP obstacle sections show no significant close-in terrain and only a single hazardous obstacle — an antenna at 391 ft elevation / 148 ft AGL, well clear of normal approach/departure paths. CFIT is not the operative threat at this field.

### 3.2 Airborne conflict / traffic 🟧
Billund Approach/Tower operate H24 with a single-runway 09/27 configuration. Two active glider areas exist within the Billund TMA/CTR, activated on request by Billund Approach per agreement with the Danish gliding union: the **"Karlskov line"** (55°46′31″N 008°35′41″E to 55°48′34″N 009°41′43″E) and the **"Vandel line"** (55°40′07″N 008°36′24″E to 55°42′10″N 009°42′16″E). IFR flights are separated from active glider areas; VFR flights receive traffic information on request but not full separation service when crossing an active area. No dedicated Copenhagen FIR (EKDK) en-route brief exists in this library; see [Europe (Continental) Airspace Briefing](../../../../airspace/europe.md) 🟧 for continental-transit context only.

### 3.3 Runway excursion 🟧
Both thresholds of RWY 09/27 are displaced approximately **150 m (492 ft)** per cross-checked secondary sources — the full 3,101 m physical runway yields a **2,951 m LDA** from either direction. This displacement figure was not independently re-confirmed word-for-word in the primary AIP declared-distance text extracted this pass, though the resulting 2,951 m LDA figure is internally consistent with the AIP's own declared-distance table. RESA is available both ends; stopway 200 × 90 m and clearway 3,221 × 280 m both ends provide substantial margin. Single-runway field — no crosswind-runway excursion escape exists if 09/27 itself is contaminated or the crosswind exceeds aircraft limits.

### 3.4 Weather threat 🟧
Jutland's North Sea-influenced maritime climate exposes EKBI to significant crosswind on 09/27 with **no parallel or crosswind runway alternate** — this is the field's defining operational constraint rather than a terrain or approach-minima issue. A documented historical case (Danish AAIB report, 3 December 1999) records a Copenhagen-bound flight diverting to Billund during a severe North Sea storm and encountering a windshear warning on the RWY 27 approach before a successful second-attempt landing — illustrating both Billund's real-world role as a storm alternate and that RWY 27 approaches can be subject to windshear in severe frontal weather. Winter brings a recognised de-icing season, **1 October to 30 April** (AIP-dated). See §14.

### 3.5 Operational considerations 🟧
Plan around three durable constraints: (1) **single-runway dependency** — no crosswind/parallel alternate exists, so strong-wind days are a direct operational driver rather than a secondary consideration; (2) **no published STARs** — arrivals are direct-to-fix or radar-vectored, requiring good situational awareness of the fix structure rather than a charted arrival transition; and (3) the field's **substantial dedicated cargo operation** (~90,000 tonnes/year, 50+ freighter movements/week) shares the single runway and apron system with passenger traffic, adding to overall movement density at a field with only one runway.

---

## 4. Cautions & Warnings

- **No parallel or crosswind runway exists** — a strong-crosswind day has no runway-orientation escape at this field; brief for possible diversion planning on forecast severe-crosswind days.
- **No STARs are published** — expect a direct-to-fix or vectored arrival rather than a charted STAR transition; maintain fix/holding awareness accordingly.
- **Two active glider areas (Karlskov and Vandel lines) operate within the Billund TMA/CTR** on request — confirm activity status via ATIS/ATC, particularly for VFR traffic which does not receive full separation service from them.
- **RWY 27 approaches have a documented historical windshear event** during severe North Sea frontal weather (AAIB report, 1999) — treat forecast severe-wind/frontal conditions with particular caution on this runway end.
- **Both thresholds are displaced ~150 m** — mind the reduced LDA (2,951 m from either direction) versus the full 3,101 m physical runway length.
- **Elevation figure discrepancy:** AIP states 246 ft; nearly all secondary sources state 247 ft — a one-foot difference with no operational significance, but noted for data-integrity awareness.

---

## 5. Aerodrome category, restrictions & crew qualification

- **Special-airport / category:** Not operator-categorised as a restricted-crew "special airport" in reachable sources; the standing crew-briefing items are the **single-runway/no-crosswind-alternate** constraint and the **CAT II/III low-visibility environment on both ends**. 🟧
- **Crew-qualification gate:** CAT II/III currency required for full-capability low-vis arrivals; confirm crew/aircraft currency before planning a low-vis approach. 🟧
- **Operating restrictions / bans:** No RNP AR ban or circling restriction found in reachable sources — verify current AIRAC. School/training flights restricted to specific daytime windows (0900–1900 or 0900–1500 depending on type) — not relevant to scheduled ops but confirms the field's mixed traffic character. 🟧
- **Overflight / entry / permits:** Standard EU/Schengen international arrival; airport handles both Schengen and non-Schengen traffic. No special state permit required. 🟩
- **Operations notes:** Airport operator — **Billund Lufthavn A/S** (jointly owned by six western-Jutland municipalities); ground handling — **GHBA (Ground Handling Billund Airport)**, in-house; slot coordinator — **Airport Coordination Denmark (ACD)**. All aircraft above 3,500 kg MTOM require ACD slot coordination `[AIP AD 2-EKBI-2 §4.7.e]`.

---

## 6. General / hours / services

| Item | Value | Flag |
|---|---|---|
| ATS hours | **H24** `[AIP AD 2-EKBI §3.7]` — note this corrects an assumption that a regional field of this size might not be H24 | 🟩 |
| AD operating hours | **H24** `[AIP AD 2-EKBI §3.1]` | 🟩 |
| Night / curfew restrictions | **No hard curfew** — takeoffs in the period **2300–0600 local** require advance approval issued by Billund Airport; landing on RWY 09 to be avoided 2200–0700 if RWY 27 is in use (and the reverse) `[AIP AD 2-EKBI §21]` | 🟥 |
| RFF category | **CAT 7**, CAT 8 available with PPR | 🟩 |
| Fuel | Jet A-1 only; 2,900 L/min fuelling rate; carnet-card payment (Air BP / DCC & Shell Aviation Denmark) `[AIP AD 2-EKBI-1/2 §4.2/§4.3]` | 🟩 |
| PCN | Runway PCN 110/F/A/X/T; Apron North PCN 110/F/C/W/T (remote parking 90/F/C/W/T); Apron South PCN 110/R/A/X/T | 🟩 |
| Customs | **H24** `[AIP AD 2-EKBI §3.2]` | 🟩 |
| Handling / FBO | **GHBA (Ground Handling Billund Airport)** in-house; separate cargo handlers (CHBA, Spirit Air Cargo Handling, WFS) for freight traffic | 🟩 |

---

## 7. Runways & declared distances

| RWY | Dimensions | Surface / PCN | TORA | TODA | ASDA | LDA | Notes |
|---|---|---|---|---|---|---|---|
| 09 | 3,101 × 45 m | Asphalt / PCN 110/F/A/X/T | 3,101 m | 3,101 m | 3,101 m | 2,951 m | **THR displaced ~150 m**; RESA available; stopway 200×90 m, clearway 3,221×280 m; Code 4E/PA-3B |
| 27 | 3,101 × 45 m | Asphalt / PCN 110/F/A/X/T | 3,101 m | 3,101 m | 3,101 m | 2,951 m | **THR displaced ~150 m**; RESA available; stopway 200×90 m, clearway 3,221×280 m; Code 4E/PA-3B |

*Source: AIP Denmark (Naviair), AD 2-EKBI §12/§13 (retrieved 2026-07-26); full-length TORA/TODA/ASDA figures (3,101 m) and the derived 2,951 m LDA both directions are internally consistent with the AIP's declared-distance table. The exact ~150 m (492 ft) displaced-threshold distance is cross-checked against OurAirports/SkyVector (retrieved 2026-07-26) rather than independently confirmed word-for-word in the primary AIP text this pass — 🟧 flagged for verification. Reduced-declared-distance intersection departures (via TWY A/B/F/C on RWY 09; TWY K/M/PSN Y/C/B on RWY 27) exist in the AIP but are not reproduced here as full-length departures are standard for our operation. All distances in metres.*

---

## 8. Communications

| Service | Callsign | Frequency | Hours | Notes |
|---|---|---|---|---|
| ATIS (arrival) | Billund Arrival Information | 118.780 | H24 | DOC FL200/60 NM |
| ATIS (departure) | Billund Departure Information | 129.105 | H24 | DOC 1,000 ft/5 NM |
| Marshaller | Billund Marshaller | 131.505 | — | Ramp guidance |
| Handling | Billund Handling | 131.905 | — | Handling coordination, de-icing requests |
| Tower (arr) | Billund Tower | 119.005 | H24 | DOC 4,000 ft/25 NM |
| Tower (dep) | Billund Tower | 129.505 | H24 | DOC 4,000 ft/25 NM |
| Arrival | Billund Arrival | 119.255 | H24 | DOC FL200/50 NM |
| Approach | Billund Approach | 127.580 | H24 | DOC FL250/50 NM |
| De-icing (north) | Billund De-icing North | 131.805 | HO | |
| De-icing (south) | Billund De-icing South | 131.410 | HO | Prior arrangement only |
| Emergency | — | 121.500 | H24 | |
| Centre / FIR | Copenhagen ACC — Copenhagen FIR (EKDK) | Per current AIRAC | H24 | No dedicated FIR brief in this library — see [Europe (Continental) Airspace Briefing](../../../../airspace/europe.md) 🟧 (general reference only) |

*Source: AIP Denmark (Naviair), AD 2-EKBI §18 (retrieved 2026-07-26); cross-checked against OurAirports/SkyVector (retrieved 2026-07-26), which show slightly older/rounded values and omit the split arrival/departure Tower frequencies — treat the AIP figures above as authoritative. Radar: PSR 2833/2757 MHz H24; MSSR 1030 H24, multi-radar track from Copenhagen ACC.*

---

## 9. Navaids

| Aid | Ident | Freq | Hours | Notes |
|---|---|---|---|---|
| ILS/LOC 09 | BIL | 109.750 | HO | ILS class III/E/4 — **CAT III capable**; GP 333.050, angle 3°, RDH 50 ft |
| ILS/LOC 27 | LEL | 110.700 | HO | ILS class III/E/4 — **CAT III capable**; GP 330.200, angle 3°, RDH 49 ft |
| VOR | ALS | 114.700 | H24 | Off-field; DOC FL500/60 NM |

*All idents/frequencies sourced to AIP Denmark (Naviair), AD 2-EKBI §19 (retrieved 2026-07-26). "HO" = hours other than continuous for the localizer signal itself; associated glidepath/DME are H24 — confirm current NOTAM status before assuming an ILS is radiating. Both ends confirmed CAT II/III by AIP class and independently corroborated by a VATSIM Scandinavia community reference ("Both ends have ILS CAT II/III. This is the normal procedure.").*

---

## 10. Arrival

- **Transition altitude / level:** Not independently confirmed to a specific figure this pass — verify current chart. 🟧
- **Speed:** Standard 250 KIAS below FL100 (EU/ICAO norm) — confirm no local override on current chart.
- **Preferential runway logic:** No parallel/crosswind runway exists; runway selection is purely wind-driven between 09 and 27. A community reference notes that in a direct-crosswind wind state (e.g., wind from ~180° or ~360°), RWY 09 may be used for departure and RWY 27 for landing (or vice versa) specifically to shorten taxi times — an operational nuance, not a formal AIP rule. 🟧
- **Approaches (names only — verify minima on current AIRAC charts):**

| RWY | Approach | Notes |
|---|---|---|
| 09 | ILS or LOC (CAT I/II/III); RNP | Both charted "Z" and "Y" ILS/LOC variants published per the AIP chart index |
| 27 | ILS or LOC (CAT I/II/III); RNP | Both charted "Z" and "Y" ILS/LOC variants published per the AIP chart index |

- **STARs (names only):** **None published.** A community reference confirms: "There are no STARs in Billund. Expect direct to ILS fix or vectors." — corroborated by the absence of any STAR chart in the AIP's own chart index.
- **LVP:** CAT II/III infrastructure on both ends supports low-visibility ops; exact RVR/trigger figures not confirmed this pass. 🟧
- **Missed approach watch-items:** Terrain is not the driver (flat field); the operative concern is re-sequencing without a charted STAR structure, and windshear potential on the RWY 27 approach during severe frontal weather (§3.4).

---

## 11. Departure

- **SIDs (names only — fly the charted version):** **P-RNAV SIDs published for both RWY 09 and RWY 27** (3 charts each per the AIP chart index). Alternate SIDs **ASKOV** and **GOKIM** may be issued at ATC discretion if unable to fly P-RNAV. Flight-plan termination points for international flights include **RERPA, INTET, ABINO, RIDSI, ALS, MIKRO, BAMPI** with compulsory post-BAMPI routings on specific airways.
- **RNP / climb-gradient requirements:** P-RNAV equipage expected for the standard SIDs; verify gradient/equipage on the current chart. See [OM E — PBN and RNP Operations](../../../../../flight-ops/pbn-and-rnp-operations.md).
- **Take-off minima:** Published per AIP — exact figures not confirmed this pass. 🟧
- **Start-up / push-back:** Coordinate via Billund Handling (131.905); confirm cross-bleed/APU notification procedure locally. 🟧
- **ATC slot / CTOT & clearance:** **Level 3 coordinated via Airport Coordination Denmark (ACD)** — all aircraft above 3,500 kg MTOM require slot coordination. IFR departure clearance available from EOBT −30 min. 🟧
- **De-icing:** De-icing pad on **Apron North** (Densiphalt, PCN 90/F/C/W/T), season **1 October – 30 April** (AIP-dated); request via Billund Handling (131.905), supervised on "Billund De-icing North" (131.805, HO). Apron South de-icing available only by prior arrangement ("Billund De-icing South," 131.410). See [OM E — Cold Weather Operations](../../../../../flight-ops/cold-weather-operations.md).

---

## 12. Noise & Environmental

- **Noise abatement (NAP):** No dedicated fixed-track noise-departure procedure was confirmed in reachable sources beyond the general night-period approval requirement (§6). 🟧
- **Night noise / dB limits:** Takeoffs in the period **2300–0600 local** require advance approval from Billund Airport; no specific dB(A) threshold was confirmed for this field in reachable sources (contrast with EKCH's documented 80 dB(A) threshold). 🟧
- **Engine run-up restrictions:** Not confirmed in reachable sources — verify locally. 🟧
- **Reverse thrust / idle-reverse policy:** Not confirmed in reachable sources — verify locally. 🟧

---

## 13. Ground operations

- **Stands for our types:** **Apron North** (Densiphalt, PCN 110/F/C/W/T; remote parking PCN 90/F/C/W/T) is the passenger-terminal apron used by all passenger aircraft per a community reference; **Apron South** (concrete, PCN 110/R/A/X/T) handles cargo/VIP/GA traffic. Stands 25–26 and 38–40 are flexible (Schengen/non-Schengen); 27–37 Schengen-only; 65–94 long-term parking. Exact total stand/gate count not independently confirmed — a low-authority secondary source cites "16 gates across two terminals," not corroborated against a primary source. 🟧 | 🟧
- **Push-back:** Marshaller-guided for stands without AGNIS/docking mirror (stands 26, 29, 31, 32, 34, 35, 38 have AGNIS but still require marshaller presence); all other stands require full marshaller guidance.
- **Standard taxi routes:** Confirm with Ground/Handling on the day; taxiways A/B/C (23 m, PCN 110/F/A/X/T) serve the main runway/apron connections, J/K/S (23 m, PCN 90/F/C/W/T) and D/F/N (23 m, PCN 70/F/C/W/T) serve secondary routings, with G/G2 (12 m) restricted to Code A/B aircraft.
- **Hot spots / tight taxiways:** No text-labelled "Hot Spot" entries found in the reachable AIP extract; the field's single-runway/single-set-of-parallel-taxiway layout is comparatively simple relative to a multi-runway hub. 🟧
- **Follow-me:** Availability not confirmed in reachable source — verify locally. 🟧

---

## 14. Weather & seasonal (durable)

- **Climate / prevailing wind:** Jutland, North Sea-influenced maritime climate; wind exposure with **no crosswind-runway alternate** is the field's defining operational characteristic.
- **Seasonal hazards:** De-icing season is AIP-dated **1 October – 30 April**. Severe North Sea frontal weather can bring windshear conditions, particularly documented on the RWY 27 approach (§3.4, historical AAIB case). No EKBI-specific convective-storm frequency statistic found — treat as general regional climatology.
- **Local effects:** No notable terrain/sea-breeze local effect beyond the general North Sea wind exposure; two active glider areas within the TMA/CTR are a traffic-pattern consideration rather than a weather one (§3.2).

> **Live weather — pull at planning (T-2h):** METAR, TAF, TREND, SIGMET/AIRMET. Not stored here.

---

## 15. NOTAMs

> **Pull at planning (T-2h).** Perishable — not stored here. Check: runway closures (single-runway field — a closure has no in-field alternate), navaid U/S, CAT II/III equipment status, lighting, obstacle/crane, RFF downgrade, glider-area activity status, GPS/RAIM for RNP procedures. Source: official AIS / OFP NOTAM block.

---

## 16. Fuel & alternate planning notes

- **Typical role for us:** Destination / origin — not a K Global base; the field's substantial dedicated cargo operation (~90,000 tonnes/year) operates alongside our passenger service.
- **Nearest suitable alternates:** Company preferred alternates **EKCH** (Copenhagen-Kastrup — [in-library brief available](../ekch/index.md)) and **ESGG** (Gothenburg-Landvetter — no in-library folder/brief yet, referenced as plain text) `[VAMSYS mirror 2026-07-26]` — confirm suitability, runway/RFF adequacy and current minima per leg at planning.
- **Fuel-uplift notes:** **Jet A-1 only**, confirmed 2,900 L/min fuelling capacity, gravity refuelling possible; payment only via carnet fuel cards from **Air BP** or **DCC & Shell Aviation Denmark** — sustainable aviation fuel (SAF) has also been introduced at this field per operator/press sources. See [OM E — Fuel Policy](../../../../../flight-ops/fuel-policy.md).
- **Range/perf flags for our fleet:** Field length (3,101 m) non-limiting for any K Global Category R type. See [OM B — Fleet Capability Matrix](../../../../../fleet/capability-matrix.md) for type-by-type range/performance reference.

---

## 17. Fleet-specific notes (optional)

- No field-elevation or field-length performance penalty for our Category R type at EKBI; the operative planning consideration is the single-runway/no-crosswind-alternate constraint (§3.4/§4) rather than aircraft performance. See [OM B — Fleet Capability Matrix](../../../../../fleet/capability-matrix.md).

---

## 18. Open items (🟧 — confirm against AIP / current AIRAC)

- **Elevation discrepancy** — AIP states 246 ft; nearly all secondary sources state 247 ft; used 246 ft as authoritative.
- **Displaced-threshold exact distance (~150 m/492 ft)** — cross-checked against secondary sources, not independently confirmed word-for-word in the primary AIP declared-distance text this pass.
- **Take-off minima, transition altitude/level exact figure, noise-abatement dB(A) threshold (if any), engine run-up restriction, reverse-thrust/idle-reverse policy, follow-me availability** — none confirmed in reachable sources.
- **Total stand/gate count** — only a low-authority secondary figure ("16 gates") found, not corroborated.
- **Taxiway "Hot Spots"** — none found in the text-searchable AIP extract.
- **CTOT/ATFM-specific procedure for EKBI** — Level 3 coordination confirmed via Airport Coordination Denmark, but no dedicated ATFM/CTOT AIP section was found this pass; standard EUROCONTROL practice assumed.

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim material (current-AIRAC charts) informs content but is not listed here.*

- **AIP Denmark (Naviair), AD 2-EKBI** — AIRAC amendment cycle context: core AD 2 data AMDT 01/26 (eff. 22 Jan 2026), Noise Abatement AMDT 10/25 (eff. 2 Oct 2025), Chart list AMDT 12/25 (eff. 27 Nov 2025) — https://aim.naviair.dk/media/files/3ju3arpdevq/EK_AD_2_EKBI_en.pdf (retrieved 2026-07-26). *ARP/elevation/mag-var, runway physical characteristics and classification, declared distances, ATC frequencies, navaids, RFF, night-noise-approval requirement, de-icing, glider areas, slot coordination.*
- OurAirports — https://ourairports.com/airports/EKBI/ , /runways.html , /frequencies.html (retrieved 2026-07-26). *Cross-check on physical dimensions, displaced thresholds, elevation, frequency rounding.*
- SkyVector — https://skyvector.com/airport/EKBI/Billund-Airport (retrieved 2026-07-26). *Coordinates/elevation/frequency cross-check.*
- VATSIM Scandinavia — "EKBI Billund Airport" chart/ops reference — https://wiki.vatsim-scandinavia.org/books/danish-airports-charts/page/ekbi-billund-airport (retrieved 2026-07-26). *Network-sim document, not regulatory — apron/stand and STAR-absence cross-check only.*
- Billund Airport (bll.dk) — Cargo operations — https://www.bll.dk/cargo (retrieved 2026-07-26). *Cargo volume, handlers, freighter operators.*
- Billund Airport (bll.dk) — GHBA organisation page — https://www.bll.dk/en/about-the-airport/aviation/ghba/organization (retrieved 2026-07-26). *Ground handling structure (role titles only — no individual names cited per governance).*
- Airport Coordination Denmark — https://airportcoordination.com/airport.php?code=BLL (retrieved 2026-07-26). *Level 3 slot-coordination confirmation.*
- SKYbrary — Danish AAIB report HCL 70/99 (Boeing 737-500, 3 Dec 1999, Billund diversion) — https://skybrary.aero/sites/default/files/bookshelf/317.pdf (retrieved 2026-07-26). *Historical windshear/diversion case, RWY 27.*
- Wikipedia — "Billund Airport" — https://en.wikipedia.org/wiki/Billund_Airport (retrieved 2026-07-26). *Historical/ownership/traffic-context corroboration; dated statistics, not used for safety-critical figures.*

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-26 | Built from AIP Denmark (Naviair); K Global fields from live VAMSYS; 4-page pack. |
