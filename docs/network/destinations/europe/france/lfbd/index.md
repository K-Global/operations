# LFBD — Bordeaux-Mérignac · Airport Briefing

**LFBD / BOD** · Mérignac (Bordeaux), Gironde, France · Europe
**Version** v0.1 · **Updated** 2026-07-26 · **Status** Draft

> **Read-me:** Planning aid for the sim, not a chart. Static data is drawn from the SIA France eAIP (AIP France, AD 2 LFBD, cycle effective 14 MAY 2026) plus public cross-checks; approaches/SIDs/STARs are listed **by name only or flagged not-yet-confirmed** — fly the charted current-AIRAC version. Live weather/NOTAMs are pulled at planning (§14/§15). Open 🟧 items are listed in §18. Flag legend 🟥 restriction/hazard · 🟧 caution/unverified · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| ARP (lat/long) | 44°49'43"N / 000°42'55"W (runway intersection) `[SIA eAIP AD 2 LFBD.2]` |
| Field elevation | **166 ft AMSL** (reference temperature 25.6°C; geoid undulation 152 ft) |
| Mag variation | **1.0821° E** (2025 epoch, annual change +0.126°) |
| Time zone | UTC+1 (CET) / UTC+2 (CEST, EU DST observed) |
| Runway(s) | **05/23** 3,100 × 45 m (bituminous, PCN 64 F/C/W/T) · **11/29** 2,415 × 45 m (bituminous, PCN 53 F/C/W/T) |
| Preferential runway | Wind-dependent; 05/23 used up to a **15 kt crosswind** when both runways are available; RWY 23 used up to a **5 kt tailwind** — see §10/§11 |
| Longest LDA | 3,100 m (05/23) |
| Approaches | **ILS CAT III on RWY 23** (LOC "BD" 110.3) · **ILS CAT I on RWY 29** (LOC "BEI" 111.15) · RWY 05/11 have no ILS — VOR-DME/visual environment only |
| RFF category | **CAT 8** (seasonally modulated 5/7/8/9 — see §6) 🟩 |
| Control type | **Radar** — Aquitaine Approche / Mérignac Approche (DSNA); Mérignac Tour on the field; **Bordeaux ACC (LFBB)** en route — no dedicated OM C FIR brief yet, see [Europe Airspace Briefing](../../../../airspace/europe.md) 🟧 |
| Elevation class | Near sea-level (166 ft) — **not** hot-and-high |
| Special-airport status | **RWY 11/29 use-restricted** (wingspan ≥ 52 m and named heavy types prohibited; PCN 53 limit) — see §5 🟥 |
| Customs / PoE | **Yes** — H24 `[SIA eAIP AD 2 LFBD.3]` |
| K Global category | **R** `[VAMSYS mirror 2026-07-26]` |
| K Global base | **No** `[VAMSYS mirror 2026-07-26]` |
| Company preferred alternates | **LFRS, LPPT, LEMD** `[VAMSYS mirror 2026-07-26]` |
| Taxi-in / taxi-out (VAMSYS) | **10 min / 12 min** `[VAMSYS mirror 2026-07-26]` |

---

## 2. Validation summary

| Domain | Flag | Note |
|---|---|---|
| Terrain / CFIT | 🟩 | Flat Gironde/Garonne-basin coastal plain; no close-in high terrain relevant to any approach or departure path. |
| Runway length vs fleet perf | 🟩 | 3,100 m main pair (05/23) is ample for any K Global Category R type; 11/29 (2,415 m) is use-restricted by wingspan/type rather than length — see §5. |
| Approach availability / minima | 🟧 | ILS CAT III on 23 gives strong low-vis capability on one runway only; RWY 05/11 have no instrument approach beyond VOR/visual — sub-category (IIIA/IIIB) not confirmed from a primary table this pass. |
| Airspace / traffic / control | 🟩 | Regional radar environment (Aquitaine/Mérignac Approche, DSNA); moderate traffic density, not comparable to a Tier-1 hub. |
| Weather / seasonal hazard | 🟧 | Atlantic-influenced coastal climate; winter fog/low-stratus episodes are the main seasonal driver of CAT III reliance on RWY 23 — no field-specific frequency statistic found this pass. |
| Curfew / slots / hours | 🟧 | No published hard curfew found in the reachable AIP extract (ATS, customs, fuel and handling all quote H24 or H24-on-request) — **absence of a curfew is not independently re-confirmed against current AIRAC**; treat as open pending verification. |
| RFF category vs our types | 🟩 | CAT 8 (seasonally modulated) — adequate for K Global Category R operations. |
| Fuel availability | 🟩 | Two suppliers on field (TOTAL, World Fuel Services), near-H24 coverage with on-call outside scheduled hours. |
| Customs / handling / security | 🟩 | H24 customs/immigration; mandatory airport handling service; multiple ground handlers on field. |

---

## 3. Threat & Error Management (TEM)

### 3.1 CFIT / Terrain 🟩
LFBD sits at 166 ft AMSL on the flat Gironde coastal plain west of Bordeaux — there is no close-in high terrain relevant to arrival, departure or missed-approach paths. Verify the MSA ring on the current chart as routine practice, but CFIT is not the operative threat at this field.

### 3.2 Airborne conflict / traffic 🟩
Moderate regional traffic under **Aquitaine Approche / Mérignac Approche** (DSNA, radar). Not a high-density environment compared to a network hub — no unusual airborne-conflict driver identified in the reachable AIP extract. Cross-ref [Europe Airspace Briefing](../../../../airspace/europe.md); a dedicated **Bordeaux (LFBB) ACC/FIR brief does not yet exist in OM C** — flagged for future build. 🟧

### 3.3 Runway excursion 🟧
RWY 11/29 is **use-restricted**: prohibited to aircraft with wingspan ≥ 52 m and to a list of named heavy types (military tankers/transports, DC-10/MD-11/L-1011/Tu-154/Tu-204 and the Beluga A300-600ST); any aircraft exceeding the RWY 11/29 PCN 53 tonnage requires an explicit ATC clearance to use 05/23 instead. Declared-distance asymmetry is notable on 11/29: LDA on 11 (2,415 m) exceeds its own TORA (2,365 m) — brief the correct declared distance for the operation (takeoff vs landing), don't assume symmetry. **LFBD cannot be filed as an alternate for A380 or An-124** (Code F exclusion).

### 3.4 Weather threat 🟧
Atlantic-influenced coastal climate; winter fog/low-stratus episodes are the likely driver behind the CAT III installation on RWY 23 (the field's single precision runway direction), though no field-specific fog-frequency statistic was found in the reachable extract. Summer convective activity is standard Aquitaine-region climatology. See §14.

### 3.5 Operational considerations 🟧
Plan around three durable items: (1) **RWY 11/29's asymmetric use restriction** (wingspan/type list, PCN 53 limit, ATC-clearance fallback to 05/23); (2) a **push-back clearance that is only valid for 1 minute** — request accordingly; and (3) the **absence of a confirmed curfew** in the reachable extract — do not assume unrestricted night ops without a current-AIRAC re-check (§18).

---

## 4. Cautions & Warnings

- **RWY 11/29 is wingspan- and type-restricted** (≥ 52 m wingspan and named heavy types prohibited) — never plan a K Global widebody-adjacent operation onto 11/29 without checking current restrictions.
- **RWY 23 carries the field's only CAT III ILS** — RWY 05/11 have no instrument approach beyond VOR/visual; a wind shift to the 05/11 orientation drops the field to a visual/VOR-only environment.
- **Push-back clearance is valid for 1 minute only** — a delayed push after clearance requires a fresh request.
- **B747/A340/DC-10-class aircraft must be towed** on TWY U1/U2 (jet-blast risk) between the parking area and TWY U; A380/An-124 must taxi at idle thrust throughout.
- **TWY L2 is prohibited below RVR 550 m** except for smaller home-based aircraft with a "Follow-me"; several taxiways carry hard wingspan limits (E2, E3/E5, G, L1–L7, S4, F, W4, EN — see §13).
- **No confirmed hard curfew** was found in the reachable extract — do not assume unrestricted night movements without confirming against the current AIRAC (§18).

---

## 5. Aerodrome category, restrictions & crew qualification

- **Special-airport / category:** Not operator-categorised as a restricted-crew "special airport"; the standing crew-briefing item is the **RWY 11/29 use restriction** (wingspan/type/PCN) rather than an approach-category constraint. 🟥
- **Crew-qualification gate:** No specific crew-currency gate identified beyond standard CAT III currency for a low-visibility RWY 23 arrival. 🟧
- **Operating restrictions / bans:** RWY 11/29 prohibited to wingspan ≥ 52 m and to named heavy types (see §3.3); RWY 11/29 traffic exceeding PCN 53 requires ATC clearance to divert to 05/23; **LFBD is not usable as an alternate aerodrome for A380 or An-124**. No RNP AR ban or circling restriction found in the reachable extract — verify current AIRAC. 🟧
- **Overflight / entry / permits:** Standard EU/Schengen operation; no special state permit required. 🟩
- **Operations notes:** ANSP — **DSNA**; airport operator — **SA-ADBM** (Société Aéroport de Bordeaux Mérignac); mandatory airport handling service; the field also hosts military/BA106 activity (Armée de l'Air) with a dedicated MIL frequency (140.275) for MET/diversion/EVASAN/VIP coordination.

---

## 6. General / hours / services

| Item | Value | Flag |
|---|---|---|
| ATS hours | H24 | 🟩 |
| AD operating hours | H24 (administration, customs, health, ATS all H24) | 🟩 |
| Night / curfew restrictions | **None found in the reachable AIP extract** — not independently re-confirmed as "no curfew" against current AIRAC | 🟧 |
| RFF category | **CAT 8**, seasonally modulated: level 8 (0430–1630 local, both seasons), level 7 (1630–0430 May–Sep; 1630–2300 Oct–Apr), level 5 (2300–0430 Oct–Apr only); level 9 available on 48 h PPR | 🟩 |
| Fuel | **TOTAL** (Jet A1 / Jet A1 SAF / Avgas 100LL via dispenser) 0430–2300/0000 local depending on season, on-call outside; **World Fuel Services** (Jet A1) 0500–2300, on-call outside | 🟩 |
| PCN | 05/23: 64 F/C/W/T · 11/29: 53 F/C/W/T (bituminous both) | 🟩 |
| Customs | H24 | 🟩 |
| Handling / FBO | Mandatory airport handling service; **Alyzia Province**, **Air France**, **AviaPartner**, **Onet Airport Services**, **Avia VIP** (GA); military ops via BA106 Bureau Opérations | 🟩 |

---

## 7. Runways & declared distances

| RWY | Dimensions | Surface / PCN | TORA | TODA | ASDA | LDA | Notes |
|---|---|---|---|---|---|---|---|
| 05 | 3,100 × 45 m | Bituminous / PCN 64 F/C/W/T | 3,100 m | 3,500 m | 3,100 m | 3,100 m | Only on ATC clearance requested at start-up |
| 23 | 3,100 × 45 m | Bituminous / PCN 64 F/C/W/T | 3,100 m | 3,500 m | 3,100 m | 3,100 m | Field's CAT III direction |
| 11 | 2,415 × 45 m | Bituminous / PCN 53 F/C/W/T | 2,365 m | 2,765 m | 2,365 m | 2,415 m | Wingspan/type-restricted — see §3.3/§5 |
| 29 | 2,415 × 45 m | Bituminous / PCN 53 F/C/W/T | 2,415 m | 2,575 m | 2,415 m | 2,415 m | Wingspan/type-restricted — see §3.3/§5 |

*Source: SIA France eAIP, AD 2 LFBD.12/.13, cycle effective 14 MAY 2026. Intersection take-offs are published from several taxiways (B/C/D/S4 on 05/23; G/P4/P5 on 11/29) — confirm the exact intersection distance with ATC/Ground before use. RESA 240 × 90 m all four runway ends. All distances in metres.*

---

## 8. Communications

| Service | Callsign | Frequency | Hours | Notes |
|---|---|---|---|---|
| ATIS | Mérignac | 131.155 | H24 | |
| FIS | Aquitaine Information | 120.575 | H24 | |
| Approach | Aquitaine Approche | 119.275 (sectors BE1/2) · 129.875 (sectors BW1/2) · 126.730 (auxiliary, on ATC instruction) | H24 | |
| Approach | Mérignac Approche | 121.200 | H24 | On ATC instruction |
| Ground | Mérignac Sol | 121.900 · 121.730 (on ATC instruction) | H24 | |
| Tower | Mérignac Tour | 118.300 | H24 | |
| VDF (homer) | Mérignac Gonio | 118.300 / 119.275 / 120.575 / 121.500 / 126.730 / 129.875 | H24 | |
| Centre / FIR | **Bordeaux ACC (LFBB)** | Per current AIRAC | H24 | No dedicated OM C brief yet — see [Europe Airspace Briefing](../../../../airspace/europe.md) 🟧 |

*Source: SIA France eAIP, AD 2 LFBD.18, cycle effective 14 MAY 2026.*

---

## 9. Navaids

| Aid | Ident | Freq | Hours | Notes |
|---|---|---|---|---|
| VOR-DME | BMC | 113.75 (CH 84Y) | H24 | On field; 150 NM (225°..315°)/100 NM FL500 coverage |
| LOC 23 (CAT III) | BD | 110.3 | H24 | Serves the field's CAT III direction |
| GP 23 | — | 335 | H24 | Slope 3.0°, RDH 18.2 m/60 ft |
| DME 23 | — | CH 40X | H24 | 25 NM FL250 |
| LOC 29 (CAT I) | BEI | 111.15 | H24 | |
| GP 29 | — | 331.55 | H24 | Slope 3.0°, RDH 16.4 m/54 ft |
| DME 29 | — | CH 48Y | H24 | 25 NM FL250 |

*No ILS serves RWY 05 or RWY 11 — visual/VOR-DME environment on that orientation. Source: SIA France eAIP, AD 2 LFBD.19, cycle effective 14 MAY 2026.*

---

## 10. Arrival

- **Transition altitude / level:** Not confirmed from a primary table this pass — verify current chart. 🟧
- **Speed:** Standard 250 KIAS below FL100 (EU/ICAO norm) — confirm no local override.
- **Preferential runway logic:** Wind-driven. When both 05/23 and 11/29 are available, **05/23 is used up to a 15 kt crosswind** (gusts included); **RWY 23 is used up to a 5 kt tailwind** (gusts included). ATC also weighs upper wind gradient, weather, navaid availability and operational constraints. Final approaches to **RWY 23 and 29 are systematically flown with ILS or GNSS guidance**; visual approaches on 23/29 are **prohibited**. On RWY 05/11 a visual approach must follow the published Visual Approach Environment chart.
- **Approaches (names only — verify minima on current AIRAC charts):**

| RWY | Approach | Notes |
|---|---|---|
| 05 | Visual only (per Environment chart) | No ILS; visual approach permitted with chart compliance |
| 23 | ILS CAT III (BD) | Field's precision direction; visual approach prohibited |
| 11 | Visual only (per Environment chart) | No ILS; RWY use-restricted (§5) |
| 29 | ILS CAT I (BEI); VOR-DME 23 (crew-currency use, ATC approval required) | Visual approach prohibited |

- **STARs (names only):** Not confirmed in reachable research pass — pull the current-AIRAC STAR list at planning. 🟧
- **LVP:** CAT III trigger conditions apply on RWY 23; exact RVR/trigger figures not confirmed this pass. 🟧
- **Missed approach watch-items:** Terrain is not the driver (flat coastal plain); the operative concern is re-sequencing under Aquitaine/Mérignac Approche.

---

## 11. Departure

- **SIDs (names only — fly the charted version):** Not confirmed in reachable research pass — pull the current-AIRAC SID list at planning. 🟧
- **RNP / climb-gradient requirements:** Not independently confirmed for LFBD this pass — verify per SID on the current chart. See [`OM E — PBN and RNP Operations`](../../../../../flight-ops/pbn-and-rnp-operations.md).
- **Take-off minima:** Published per AIP; exact figures not confirmed this pass. 🟧
- **Start-up / push-back:** Departure clearance available via **data-link (DCL), H24** — requestable up to 60 min before estimated start-up; crew acknowledgement due within 5 min of clearance issue; contact Ground if no echo 10 min before start-up. **Push-back/taxi clearance is delivered on the Ground frequency and is valid for 1 minute only.**
- **ATC slot / CTOT & clearance:** No slot-coordination level confirmed in the reachable extract — EUROCONTROL Network Manager ATFM/CTOT applies as general practice; not independently LFBD-sourced. 🟧
- **De-icing:** Available, H24 on request. **AviaPartner** operates 2 FMC-type de-icers (Type II fluid, 75/25); **Alyzia Province** operates 2 Elephant-type de-icers (Type I and Type IV fluid). Snow plan active 1 Dec–31 Mar; clearance priority is RWY 05/23 and its taxiway, then the apron, then RWY 11/29. See [`OM E — Cold Weather Operations`](../../../../../flight-ops/cold-weather-operations.md).

---

## 12. Noise & Environmental

- **Noise abatement (NAP):** Jet aircraft fly **ICAO NADP1** — maintain V2+10 (or attitude-limited speed) to 3,000 ft AAL in take-off flap configuration, then normal climb speed and flap retraction beyond 3,000 ft AAL. Published SID tracks must be rigorously followed and may only be modified below 5,000 ft AMSL on ATC instruction.
- **Night noise / dB limits:** No published per-movement dB limit or hard curfew found in the reachable extract. 🟧
- **Engine run-up restrictions:** Not confirmed in reachable sources — verify locally. 🟧
- **Reverse thrust / idle-reverse policy:** Not confirmed in reachable sources — verify locally. 🟧
- **APU restrictions:** Use of fixed/mobile ground power ("moyens de substitution") is **mandatory** except on equipment failure or technical incompatibility; departing-flight APU use is time-limited relative to ETD where the stand is GPU-equipped (exact minutes not confirmed — extract truncated this pass). 🟧

---

## 13. Ground operations

- **Stands for our types:** Multiple apron groups (A/B/C/D/F/Y cement concrete; J/K/L4-6/U5 bituminous); no dedicated widebody-cluster description found — K Global Category R operations expected on the standard commercial apron. 🟧
- **Push-back:** Mandatory marshaller on all stands (no automated visual docking guidance). B747/A340/DC-10-class aircraft **must be towed** on TWY U1/U2 (jet-blast risk); A380/An-124 must taxi at **idle thrust** throughout the apron. Over-steering technique recommended for B777-300ER, A380, A340-500/600, A350, B777-200/300, B787 and any aircraft > 65 m wingspan when turning on turn-pad 05.
- **Standard taxi routes:** Confirm with Ground/Apron on the day; several taxiways carry hard wingspan limits — TWY G/S4/F: 52 m (except a list of named heavies); TWY E2 (W1/W2→P2/P3): 36 m; E3/E5/W4/EN/WN: 36 m; L1: 21.5 m (31.71 m on the L5 connector); L2: 14 m (≤ 14 m wingspan only, home-based exception to 18 m); L3: 14 m; L4: 16.3 m; L5/L6: 26.3–26.3 m.
- **Hot spots / tight taxiways:** 🟥 **TWY U/U1/U2** (industrial-area taxiways — idle-thrust only, mandatory radio contact before entry, jet-blast caution in the U1-U turn); **TWY L2** (obstacle masts 15 m from centreline, prohibited below RVR 550 m except small home-based aircraft with follow-me, mandatory follow-me below RVR 350 m on taxiways without centreline lighting).
- **Follow-me:** Provided under low-RVR conditions per a published stand-by-stand table (§20.4 of the AIP) — several stand groups (J/K, and D6/B-series on some conditions) require follow-me below RVR 550 m; most main apron stands (A/C/D-series/F/Y) retain direct entry/exit down to RVR 350 m.

---

## 14. Weather & seasonal (durable)

- **Climate / prevailing wind:** Temperate Atlantic-coastal climate on the Gironde plain; the RWY 05/23-favouring wind pattern (crosswind/tailwind criteria in §10) implies a prevailing wind component broadly aligned with that orientation.
- **Seasonal hazards:** Winter fog/low-stratus is the plausible driver behind the field's CAT III installation on RWY 23, though no LFBD-specific frequency statistic was found. Snow/de-icing season runs 1 Dec–31 Mar (snow plan active). Summer convective activity is standard for the Aquitaine region — no field-specific data found.
- **Local effects:** No notable terrain/sea-breeze effect identified at this inland-of-coast, flat-terrain field.

> **Live weather — pull at planning (T-2h):** METAR, TAF, TREND, SIGMET/AIRMET. Not stored here.

---

## 15. NOTAMs

> **Pull at planning (T-2h).** Perishable — not stored here. Check: runway/taxiway closures (note the scheduled lighting-maintenance Tuesdays — odd weeks for 05/23, even weeks for 11/29, runway inactive during maintenance), navaid U/S, ILS CAT III status, lighting, obstacle/crane, RFF downgrade, GPS/RAIM. Source: official AIS / OFP NOTAM block.

---

## 16. Fuel & alternate planning notes

- **Typical role for us:** Category R destination/enroute field within the K Global network (not a base).
- **Nearest suitable alternates:** Company preferred alternates **LFRS** ([Nantes-Atlantique](../lfrs/index.md)), **LPPT** ([Lisbon Humberto Delgado](../../portugal/lppt/index.md)), **LEMD** ([Madrid-Barajas](../../spain/lemd/index.md)) `[VAMSYS mirror 2026-07-26]` — confirm suitability, runway/RFF adequacy and current minima per leg.
- **Fuel-uplift notes:** Jet A1 available from two suppliers (TOTAL, World Fuel Services), near-H24 with on-call coverage outside scheduled hours. See [`OM E — Fuel Policy`](../../../../../flight-ops/fuel-policy.md).
- **Range/perf flags for our fleet:** Field length/strength non-limiting for K Global Category R operations on the main runway pair (3,100 m). RWY 11/29 use is wingspan/type-restricted (§3.3/§5) — do not plan a K Global widebody-adjacent type onto 11/29 without confirming eligibility. See [`OM B — Fleet Capability Matrix`](../../../../../fleet/capability-matrix.md).

---

## 17. Fleet-specific notes (optional)

- No LFBD-specific type consideration beyond the general RWY 11/29 wingspan/type restriction (§3.3/§5), which is not expected to affect standard K Global Category R equipment. See [`OM B — Fleet Capability Matrix`](../../../../../fleet/capability-matrix.md).

---

## 18. Open items (🟧 — confirm against AIP / current AIRAC)

- **Curfew/night restriction** — no hard curfew found in the reachable extract; absence not independently re-confirmed against current AIRAC.
- **SIDs/STARs (current names)** — not obtained in this research pass; pull the live current-AIRAC procedure list before use.
- **Transition altitude/level, take-off minima, LVP RVR trigger, ILS sub-category (23)** — not confirmed from a primary table this pass.
- **Slot regime / CTOT specifics** — general EUROCONTROL practice assumed, not independently LFBD-sourced.
- **APU departure time-limit exact figure** — source extract truncated before the full value.
- **Engine run-up restriction, reverse-thrust/idle-reverse policy** — not confirmed in reachable sources.
- **Bordeaux (LFBB) ACC/FIR brief** — does not yet exist in OM C Airspace; this field currently links only to the general [Europe Airspace Briefing](../../../../airspace/europe.md).
- **Widebody/Category-R stand allocation detail** — apron-group layout confirmed, but no dedicated stand-cluster description found.
- **Minor VOR-DME BMC altitude note** — table states 210 ft, a footnote states "ALT VOR 161" — discrepancy not resolved this pass.

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim material (current-AIRAC charts) informs content but is not listed here.*

- **SIA France eAIP, AD 2 LFBD** (AD 2.1–2.21), cycle effective 14 MAY 2026 — https://www.sia.aviation-civile.gouv.fr/media/dvd/eAIP_14_MAY_2026/FRANCE/AIRAC-2026-05-14/html/eAIP/FR-AD-2.LFBD-fr-FR.html (retrieved 2026-07-26). *Primary source for ARP, elevation, mag var, runways/declared distances, RFF, hours, communications, navaids, local traffic regulations, noise abatement.*
- OurAirports — https://ourairports.com/airports/LFBD/ (retrieved 2026-07-26). *Cross-check only.*

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-26 | Built from SIA France eAIP; K Global fields from live VAMSYS; 4-page pack. |
