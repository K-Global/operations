# EIDW — Dublin International · Airport Briefing

**EIDW / DUB** · Dublin, Ireland · Europe
**Version** v0.1 · **Updated** 2026-07-26 · **Status** Draft

> **Read-me:** Planning aid for the sim, not a chart. Static data is drawn from public aeronautical data (OurAirports, SkyVector, Wikipedia) cross-checked against each other; the primary Irish AIP (AirNav Ireland eAIP, AD 2 EIDW) is not available from a reachable public source — anything AIP-grade (declared distances, RFF, PCN, exact current frequencies, approach minima) is flagged 🟧 pending a live-AIRAC cross-check. Approaches/SIDs/STARs are listed **by name only or flagged not-yet-confirmed** — fly the charted current-AIRAC version. Live weather/NOTAMs are pulled at planning (§14/§15). Open 🟧 items are listed in §18. Flag legend 🟥 restriction/hazard · 🟧 caution/unverified · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| ARP (lat/long) | 53°25′43″N / 006°15′44″W (53.428713, -6.262121) `OurAirports` — 🟧 a second tier-4 source (SkyVector) gives 53°25′17″N / 006°16′12″W for the field reference point; a small discrepancy, not independently resolved against the AIP |
| Field elevation | **242 ft / 74 m AMSL** |
| Mag variation | 🟧 **Not published / verify** — regional variation is westerly; exact current-epoch AIP value not published |
| Time zone | UTC+0 (winter, GMT-equivalent) / **UTC+1 (summer, Irish Standard Time — EU DST observed)**; clock changes synchronised with the UK |
| Runway(s) | **10L/28R** "North Runway" 3,110 × 45 m (concrete) · **10R/28L** 2,637 × 45 m (asphalt, the original main runway, opened 1989 as "10/28") · **16/34** 2,072 × 45 m (asphalt, cross runway; also used as a taxiway for 10R/28L traffic by day) |
| Preferential runway | Wind/flow/noise-dependent; Ireland's Atlantic-facing exposure gives a **prevailing south-westerly wind**, which favours the **28-direction** on the parallel pair; 16/34 sees most use in the evening/other-configuration cases — see §10/§11 |
| Longest LDA | 🟧 **Not published / verify** — full physical length of 10L/28R (3,110 m) is the longest runway; exact declared LDA (accounting for any threshold/stopway) not confirmed |
| Approaches | ILS referenced on both parallel runways (10L/28R, 10R/28L); **CAT III capability** noted for the network — runway-specific sub-category and RVR minima 🟧 **not confirmed**; 16/34 approach type not confirmed, plausibly non-precision/visual given its secondary/crosswind role 🟧 |
| RFF category | 🟧 **Not published / verify** |
| Control type | **Radar** — Dublin Approach/Tower on the field; enroute in **Shannon FIR (EISN)**, air navigation services provided by **AirNav Ireland** (successor ANSP to the IAA's air-navigation function) — no dedicated Shannon FIR brief exists in this system yet; see [Europe — Airspace Briefing](../../../../airspace/europe.md) for general European airspace/regulatory context 🟧 |
| Elevation class | Near sea-level (242 ft) — **not** hot-and-high; the defining performance/reliability driver is **Atlantic wind exposure** (strong/gusty surface wind, crosswind) rather than density altitude |
| Special-airport status | 🟥 Referenced as an **IATA Level 3 slot-coordinated** airport network-wide; the **North Runway (10L/28R) carries night-time operating restrictions** tied to its 2007 planning permission — see §5/§6/§12 |
| Customs / PoE | **Yes** — Terminal 2 hosts a **US CBP preclearance facility** (pre-inspection since 1994, treaty basis 2009); Ireland is **not in the Schengen Area** — the UK–Ireland Common Travel Area (CTA) applies, but all other arrivals (including intra-EU) clear Irish immigration on arrival |
| K Global category | **L** `[VAMSYS mirror 2026-07-26]` |
| K Global base | **No** `[VAMSYS mirror 2026-07-26]` |
| Company preferred alternates | **EINN, EGPH, EGPF** `[VAMSYS mirror 2026-07-26]` — plain ICAO reference only; EGPH/EGPF are cross-country (UK), EINN has no built page in this system |
| Taxi-in / taxi-out (VAMSYS) | **12 min / 16 min** `[VAMSYS mirror 2026-07-26]` |

---

## 2. Validation summary

| Domain | Flag | Note |
|---|---|---|
| Terrain / CFIT | 🟩 | Flat coastal plain north of Dublin city; nearest high ground (Wicklow Mountains, ~order 3,000 ft) is well south of the field and not a factor for standard arrival/departure/missed-approach paths. |
| Runway length vs fleet perf | 🟩 | Both the North Runway (3,110 m) and the original main runway (2,637 m) are ample for any K Global type; the 2,072 m cross runway is non-limiting for its secondary/crosswind role. |
| Approach availability / minima | 🟧 | ILS referenced on both parallels with CAT III capability cited for the network; exact runway-specific sub-category/minima not confirmed. |
| Airspace / traffic / control | 🟧 | Ireland's busiest airport by a wide margin, radar-controlled; a two-parallel-plus-crossing-runway layout (with the cross runway doubling as a daytime taxiway) adds ground-routing complexity without Frankfurt-scale traffic density. |
| Weather / seasonal hazard | 🟥 | Atlantic-facing exposure drives frequent **strong/gusty wind and crosswind conditions** — the field's signature TEM item — plus routine wet-runway rain and occasional radiation fog. |
| Curfew / slots / hours | 🟥 | Referenced as **IATA Level 3** slot-coordinated; the **North Runway carries a night-time operating restriction** tied to its planning permission, separate from the airfield's general H24 operation — see §6/§12. |
| RFF category vs our types | 🟧 | Not published / verify. |
| Fuel availability | 🟧 | Jet A-1 assumed available as a major international hub; supplier/hours not confirmed. |
| Customs / handling / security | 🟩 | US preclearance in T2 is a well-documented, durable feature; general desk hours for standard EU/non-EU immigration not confirmed 🟧. |

---

## 3. Threat & Error Management (TEM)

### 3.1 CFIT / Terrain 🟩
EIDW sits at 242 ft AMSL on the flat coastal plain of north County Dublin, close to the Irish Sea. There is **no close-in high terrain** relevant to arrival, departure or missed-approach paths — the nearest significant high ground, the Wicklow Mountains (order of 3,000 ft), lies well to the south of any normal EIDW routing. This is a non-issue field for terrain; verify the MSA ring on the current chart as routine practice, but CFIT is not the operative threat here.

### 3.2 Airborne conflict / traffic 🟧
Dublin is by a wide margin the busiest airport on the island of Ireland, with a dense, continuous schedule of narrowbody and widebody movements under radar control. The airfield's **two parallel runways (10L/28R, 10R/28L) plus a perpendicular cross runway (16/34)** create a layout that demands attention to configuration, especially since 16/34 doubles as a **daytime taxiway** for traffic using 10R/28L — a routing detail worth briefing so it is not mistaken for an active runway crossing. Traffic density is high but the airfield does not approach the continuous three-parallel-plus-crossing intensity of the largest continental hubs; treat this as a moderate, not extreme, workload driver.

### 3.3 Runway excursion 🟧
No displaced thresholds or contamination notes are found in the reachable tier-4 sources for any of the three runways — **not independently confirmed against the AIP**. The realistic runway-excursion driver at this field is **wind**: gusty, often quartering or crosswind conditions on the 16/34 cross runway, and tailwind-tendency risk on the parallel pair if a late wind shift is not caught before landing. Wet-runway braking-action degradation in routine Irish rain is a standing, non-exotic consideration.

### 3.4 Weather threat 🟥
Dublin is **Atlantic-facing and wind-exposed** — Ireland's west-coast weather systems track directly across the country, and Dublin regularly sees **strong, gusty surface wind**, particularly from Atlantic frontal systems and winter gales out of the south-west/west. This is the field's defining TEM item: expect crosswind and gust-factor planning to be a routine part of every approach/departure brief here, not an exceptional case. Secondary hazards are routine **rain/wet-runway conditions** and occasional **radiation fog** in still, high-pressure conditions (more a low-visibility/approach-minima consideration than a wind one). See [OM E — Adverse Weather and Windshear](../../../../../flight-ops/adverse-weather-and-windshear.md) and §14.

### 3.5 Operational considerations 🟥
Two durable constraints shape planning at this field: (1) the **North Runway (10L/28R) night-time operating restriction** — the runway's 2007 planning permission carried 31 conditions, and a night-time restriction tied to those conditions has been the subject of an ongoing regulatory dispute between the airport operator and the planning/noise authority in the years since the runway's August 2022 opening; exact current permitted-movement figures and enforcement status are **not confirmed in reachable sources** — treat as a live constraint to verify before planning any night operation dependent on the North Runway (the older 10R/28L runway is not subject to the same condition); and (2) the field's status as a **slot-coordinated (referenced Level 3) airport**, meaning schedule integrity has real commercial consequences network-wide. RFF, navaid and declared-distance figures are mostly currency/administrative gaps (§18) rather than safety-critical unknowns.

---

## 4. Cautions & Warnings

- **Wind is the standing hazard at this field** — Atlantic-facing exposure means gusty/crosswind conditions are routine, not exceptional; brief the crosswind limit and gust factor every time.
- **RWY 16/34 doubles as a daytime taxiway** for 10R/28L traffic — do not assume a runway-status indication without confirming the active configuration with ATC.
- **The North Runway (10L/28R) carries a night-time operating restriction** tied to its planning conditions — confirm current status before planning a night movement dependent on it; the older runway (10R/28L) is not subject to the same restriction.
- **US preclearance operates from Terminal 2** — passengers on precleared US-bound services complete CBP formalities in Dublin and are handled as domestic arrivals in the US; this affects gate/terminal planning for US-bound turns.
- **Ireland is outside the Schengen Area** — all non-Common-Travel-Area arrivals (including intra-EU) clear Irish immigration on arrival; do not assume Schengen-style free movement.
- Declared distances, RFF category, exact ILS sub-category and several ATC frequencies are **not confirmed against a primary AIP source** — treat exact figures as 🟧 pending a live-AIRAC cross-check (§18).

---

## 5. Aerodrome category, restrictions & crew qualification

- **Special-airport / category:** Not operator-categorised as a restricted-crew "special airport" in reachable sources; the standing crew-briefing items are the **Atlantic wind/crosswind exposure** and the **North Runway night-time restriction**. 🟧
- **Crew-qualification gate:** No specific low-experience-crew ban or special sim-training requirement found in reachable sources — confirm current company policy. 🟧
- **Operating restrictions / bans:** North Runway (10L/28R) night-time operating restriction per its planning conditions (§3.5/§6/§12); no RNP AR ban or circling restriction found in reachable sources — verify current AIRAC. 🟧
- **Overflight / entry / permits:** Standard EU international arrival; Ireland is **not** in the Schengen Area (Common Travel Area with the UK applies instead) — no special overflight permit required for the field itself. 🟩
- **Operations notes:** Airport operator — **daa** (formerly Dublin Airport Authority); ANSP — **AirNav Ireland** (successor to the IAA's air navigation service function) providing Dublin Approach/Tower and Shannon FIR (EISN) services; regulator — the **Irish Aviation Authority (IAA)**.

---

## 6. General / hours / services

| Item | Value | Flag |
|---|---|---|
| ATS hours | Assumed H24 given the long-haul transatlantic schedule; not independently confirmed | 🟧 |
| AD operating hours | The airfield itself operates H24 with **no whole-field curfew** found in reachable sources | 🟧 |
| Night / curfew restrictions | **North Runway (10L/28R) only** — a night-time operating restriction is attached to its 2007 planning permission (31 conditions); exact current movement caps/hours and enforcement status not confirmed. The older runway (10R/28L) carries no equivalent restriction in reachable sources. | 🟥 |
| RFF category | Not published / verify | 🟧 |
| Fuel | Jet A-1 assumed available as a major hub; supplier/hours not confirmed | 🟧 |
| PCN | Not published / verify | 🟧 |
| Customs | US CBP preclearance in Terminal 2 (confirmed, durable feature); general immigration desk hours not confirmed | 🟧 |
| Handling / FBO | Not confirmed in reachable sources | 🟧 |

---

## 7. Runways & declared distances

| RWY | Dimensions | Surface / PCN | TORA | TODA | ASDA | LDA | Notes |
|---|---|---|---|---|---|---|---|
| 10L | 3,110 × 45 m | Concrete / PCN not published 🟧 | Not published 🟧 | Not published 🟧 | Not published 🟧 | Not published 🟧 | "North Runway" — opened 24 Aug 2022; longest runway on the field |
| 28R | 3,110 × 45 m | Concrete / PCN not published 🟧 | Not published 🟧 | Not published 🟧 | Not published 🟧 | Not published 🟧 | Reciprocal of 10L |
| 10R | 2,637 × 45 m | Asphalt / PCN not published 🟧 | Not published 🟧 | Not published 🟧 | Not published 🟧 | Not published 🟧 | Original main runway (opened 1989 as "10/28"; redesignated 10R/28L 8 Oct 2020) |
| 28L | 2,637 × 45 m | Asphalt / PCN not published 🟧 | Not published 🟧 | Not published 🟧 | Not published 🟧 | Not published 🟧 | Reciprocal of 10R |
| 16 | 2,072 × 45 m | Asphalt / PCN not published 🟧 | Not published 🟧 | Not published 🟧 | Not published 🟧 | Not published 🟧 | Cross runway; also used as a taxiway for 10R/28L traffic during the day |
| 34 | 2,072 × 45 m | Asphalt / PCN not published 🟧 | Not published 🟧 | Not published 🟧 | Not published 🟧 | Not published 🟧 | Reciprocal of 16; sees most runway-role use in the evening/other-configuration cases |

*Source: OurAirports and SkyVector runway data (tier-4, cross-checked between the two). Physical dimensions are consistent between sources; declared distances (TORA/TODA/ASDA/LDA), PCN and any displaced threshold are **not confirmed against a primary AIP source** — treat physical length as a planning proxy only and confirm exact declared distances before operational use. A former fourth runway, 11/29 (closed 2007), was demolished to make way for the North Runway construction. All distances in metres.*

---

## 8. Communications

| Service | Callsign | Frequency | Hours | Notes |
|---|---|---|---|---|
| ATIS | Dublin Information (ATIS) | 124.525 / 124.53 | Assumed H24 🟧 | Minor frequency-rounding difference between two tier-4 sources |
| Delivery | Dublin Delivery | 🟧 121.875 (per one tier-4 source) **or** 122.98 (per another) — **not reconciled** | Assumed H24 | Confirm on current chart before use |
| Ground | Dublin Ground | 121.80 (both sources agree) / 125.88 (secondary, one source) | Assumed H24 | |
| Tower | Dublin Tower | 118.60 (both sources agree) | Assumed H24 | |
| Approach | Dublin Approach | 121.10 (both sources agree); additional sector frequencies 119.55 / 119.93 / 133.28 per one source | Mixed, sector-specific | Take the assigned frequency |
| Centre / FIR | Shannon FIR (EISN) — AirNav Ireland | Per current AIRAC 🟧 | H24 | No dedicated FIR brief in this system yet — see [Europe — Airspace Briefing](../../../../airspace/europe.md) for general context; Shannon FIR runs surface–FL660, with the upper sector near Donegal delegated to Scottish Control (EGPX) |
| Flight Information | Dublin/Shannon FIS | 118.50 | H24 (assumed) | |

*Source: OurAirports and SkyVector frequency data (tier-4), cross-checked between the two — agreement on Ground (121.80), Tower (118.60), Approach (121.10) and Flight Information (118.50); a discrepancy exists on the clearance-delivery frequency. Treat all values as 🟧 pending a live-AIRAC cross-check.*

---

## 9. Navaids

| Aid | Ident | Freq | Hours | Notes |
|---|---|---|---|---|
| VOR/DME | DAP (Collinstown) | 111.20 | H24 (assumed) | On-field VOR/DME |
| VOR/DME | DUB (Dublin) | 114.90 | H24 (assumed) | ~4.5 nm NNW of the field |
| NDB | OP | 397 kHz | H24 (assumed) | ~4.5 nm ESE |
| NDB | OE | 316 kHz | H24 (assumed) | ~6.0 nm W |
| ILS 10L/28R | Not published / verify 🟧 | — | — | ILS referenced for this runway; ident/frequency not confirmed |
| ILS 10R/28L | Not published / verify 🟧 | — | — | ILS referenced for this runway; ident/frequency not confirmed |

*Source: OurAirports closest-navaids data and SkyVector (tier-4, cross-checked — VOR/DME idents and frequencies agree between the two sources). ILS idents/frequencies and exact CAT sub-category are **not found in reachable sources** — pull from the current AIRAC before planning a low-vis approach.*

---

## 10. Arrival

- **Transition altitude / level:** Not published / verify. 🟧
- **Speed:** Standard 250 KIAS below FL100 (ICAO/EU norm) — confirm no local override on current chart.
- **Preferential runway logic:** Wind/traffic-dependent; the prevailing south-westerly Atlantic wind favours the **28-direction** on the main parallel pair. RWY 16/34 is used mainly in the evening or other configuration cases and otherwise serves as a daytime taxiway.
- **Approaches (names only — verify minima on current AIRAC charts):**

| RWY | Approach | IAF | FAF/FAP alt | Notes |
|---|---|---|---|---|
| 10L/28R | ILS (name/ident not confirmed) 🟧 | Not published 🟧 | Not published 🟧 | CAT III capability referenced network-wide; sub-category not confirmed |
| 10R/28L | ILS (name/ident not confirmed) 🟧 | Not published 🟧 | Not published 🟧 | Original main runway |
| 16/34 | Not confirmed 🟧 | — | — | Plausibly non-precision/visual given secondary/crosswind role — not confirmed |

- **STARs (names only):** Not confirmed in reachable sources — pull the current-AIRAC STAR list at planning. 🟧
- **LVP:** Not confirmed; occasional radiation fog is the plausible trigger context (§14). 🟧
- **Missed approach watch-items:** Terrain is not the driver (flat coastal plain); the operative missed-approach concerns are wind/gust handling and re-sequencing into Dublin's dense, though not extreme, traffic flow.

---

## 11. Departure

- **SIDs (names only — fly the charted version):** Not confirmed in reachable sources — pull the current-AIRAC SID list at planning. 🟧
- **RNP / climb-gradient requirements:** Not confirmed; confirm PBN equipage/gradient per SID on the current chart. See [OM E — PBN and RNP Operations](../../../../../flight-ops/pbn-and-rnp-operations.md).
- **Take-off minima:** Published per AIP — not confirmed. 🟧
- **Start-up / push-back:** Not confirmed in reachable sources — confirm procedure locally. 🟧
- **ATC slot / CTOT & clearance:** Referenced network-wide as **IATA Level 3** slot-coordinated; exact coordinator and CTOT/ATFM specifics for EIDW not independently confirmed. 🟧
- **De-icing:** Available in the Irish winter season (typ. Nov–Mar); exact pad/gate location, fluid type and holdover provisioning **not confirmed in reachable sources**. See [OM E — Cold Weather Operations](../../../../../flight-ops/cold-weather-operations.md).

---

## 12. Noise & Environmental

- **Noise abatement (NAP):** Not confirmed in reachable sources — pull current noise-routing procedures at planning. 🟧
- **Night noise / dB limits:** The **North Runway (10L/28R) carries a night-time operating restriction** tied to its 2007 planning permission (31 conditions); this has been the subject of an ongoing regulatory dispute between the airport operator and the planning/noise authority following the runway's August 2022 opening. Exact current permitted-movement numbers, hours and enforcement status are **not confirmed in reachable sources** — flagged as a live item to verify, not a fixed figure to plan against. 🟥
- **Engine run-up restrictions:** Not confirmed in reachable sources. 🟧
- **Reverse thrust / idle-reverse policy:** Not confirmed in reachable sources. 🟧

---

## 13. Ground operations

- **Stands for our types:** Dublin operates two passenger terminals — **Terminal 1** and **Terminal 2** (the latter hosting the US CBP preclearance facility and generally handling the transatlantic/long-haul-oriented schedule). Widebody stand allocation for a K Global service is not confirmed in reachable sources. 🟧 | 🟧
- **Push-back:** Not confirmed in reachable sources. 🟧
- **Standard taxi routes:** Confirm with Ground/Apron on the day; note that **RWY 16/34 functions as a daytime taxiway** for 10R/28L traffic, a routing detail worth briefing so it is not read as an active-runway crossing.
- **Hot spots / tight taxiways:** Not independently confirmed in reachable sources — confirm current hot-spot chart locally. 🟧
- **Follow-me:** Availability not confirmed in reachable source — verify locally. 🟧

---

## 14. Weather & seasonal (durable)

- **Climate / prevailing wind:** Temperate maritime climate, **Atlantic-facing and wind-exposed** — Ireland sits directly in the track of Atlantic frontal systems, giving Dublin a **prevailing south-westerly wind** and routinely strong/gusty conditions, especially with winter Atlantic low-pressure systems.
- **Seasonal hazards:** **Strong/gusty wind and crosswind exposure year-round** is the field's signature hazard, most pronounced with autumn/winter Atlantic gales. Routine **wet-runway rain** is a standing consideration. **Radiation fog** is possible in still, high-pressure conditions (more a low-visibility/minima consideration than a wind one). Occasional winter frost/snow brings a genuine, if less frequent than continental-Europe, **de-icing season** (typ. Nov–Mar).
- **Local effects:** Coastal/Irish Sea proximity; no significant terrain-driven local wind effect — the wind exposure here is regional/synoptic (Atlantic weather systems), not a terrain-channelling effect.

> **Live weather — pull at planning (T-2h):** METAR, TAF, TREND, SIGMET/AIRMET. Not stored here.

---

## 15. NOTAMs

> **Pull at planning (T-2h).** Perishable — not stored here. Check: runway/taxiway closures, North Runway night-restriction NOTAMs, navaid U/S, lighting, obstacle/crane, RFF downgrade, GPS/RAIM for RNP procedures. Source: official AIS / OFP NOTAM block.

---

## 16. Fuel & alternate planning notes

- **Typical role for us:** **Destination / non-hub network field** — K Global base = No `[VAMSYS mirror 2026-07-26]`.
- **Nearest suitable alternates:** **EINN** (Shannon, same country, ~100 nm WSW — no built page in this system), **EGPH** (Edinburgh, UK) and **EGPF** (Glasgow, UK), both cross-country `[VAMSYS mirror 2026-07-26]` — confirm suitability, runway/RFF adequacy and current minima per leg.
- **Fuel-uplift notes:** Jet A-1 assumed available as a major hub; specific into-plane provider/hours not confirmed. 🟧 See [OM E — Fuel Policy](../../../../../flight-ops/fuel-policy.md).
- **Range/perf flags for our fleet:** Field length/strength non-limiting for any K Global type on either parallel runway. See [OM B — Fleet Capability Matrix](../../../../../fleet/capability-matrix.md) for type-by-type range/performance reference; the operative planning consideration at this field is **wind/crosswind limits**, not runway length or elevation.

---

## 17. Fleet-specific notes (optional)

- No widebody stand or field-length limitation is known for any K Global type at EIDW. The one type-relevant consideration is **crosswind/gust-limit management** on the 16/34 cross runway and on the parallel pair during Atlantic frontal passages — check the assigned type's demonstrated crosswind limit against current wind before accepting a non-preferred runway. See [OM B — Fleet Capability Matrix](../../../../../fleet/capability-matrix.md).

---

## 18. Open items (🟧 — confirm against AIP / current AIRAC)

- **Primary AIP (AirNav Ireland eAIP, AD 2 EIDW)** — not independently retrieved; all figures below should be cross-checked against it before the pack is moved to "Verified."
- **ARP coordinates** — two tier-4 sources (OurAirports, SkyVector) disagree by a small margin; not resolved against the AIP.
- **Magnetic variation** — not published / verify.
- **Declared distances (TORA/TODA/ASDA/LDA) and PCN** for all three runways — only physical dimensions confirmed; declared distances not obtained.
- **RFF category** — not published/verify.
- **ILS idents, frequencies and CAT sub-category** for 10L/28R and 10R/28L — CAT III capability referenced network-wide but not runway-specific, and not independently sourced.
- **Clearance-delivery frequency** — two tier-4 sources disagree (121.875 vs 122.98); not reconciled.
- **SIDs/STARs (current names)** — not obtained; pull the live current-AIRAC procedure list before use.
- **North Runway (10L/28R) night-time operating restriction** — exact current permitted-movement figures, hours and enforcement status not confirmed; this has been a live regulatory matter since the runway's August 2022 opening and should be re-verified before relying on any figure.
- **IATA slot-coordination level** — referenced as Level 3 per network briefing convention; not independently re-sourced.
- **Noise abatement procedures, engine run-up restriction, reverse-thrust/idle-reverse policy, follow-me availability, push-back policy** — none confirmed in reachable sources.
- **Terminal/stand assignment for a K Global service** — not confirmed.
- **De-icing pad location/provisioning** — availability assumed seasonally; specifics not confirmed.
- **No VATSIM Ireland vACC airport SOP/briefing has been located** — if one exists publicly, cross-check runway-configuration and taxi-routing content against it per the standard workflow.
- **Shannon FIR (EISN) brief** — no dedicated FIR page exists in this system yet; this pack links to the general [Europe — Airspace Briefing](../../../../airspace/europe.md) for interim context only, which does not cover Irish/Shannon-specific airspace structure.

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim material (current-AIRAC charts) informs content but is not listed here.*

- OurAirports — https://ourairports.com/airports/EIDW/ , /runways.html , /frequencies.html , /closest-navaids.html (retrieved 2026-07-26). *ARP/elevation, runway list/dimensions, ATC frequencies, VOR/NDB idents and frequencies.*
- SkyVector — https://skyvector.com/airport/EIDW/Dublin-Airport (retrieved 2026-07-26). *Coordinate/runway/frequency/navaid cross-check.*
- Wikipedia — "Dublin Airport" — https://en.wikipedia.org/wiki/Dublin_Airport (retrieved 2026-07-26). *History, runway/terminal development, North Runway construction and opening date, 11/29 closure, US preclearance.*
- Wikipedia — "United States border preclearance" — https://en.wikipedia.org/wiki/United_States_border_preclearance (retrieved 2026-07-26). *Dublin preclearance history (1986 pre-inspection arrangement; operational at Dublin from 1994; 2009 treaty).*
- Wikipedia — "Shannon Flight Information Region" — https://en.wikipedia.org/wiki/Shannon_Flight_Information_Region (retrieved 2026-07-26). *Shannon FIR (EISN) structure, AirNav Ireland/IAA roles, SOTA/NOTA, Scottish Control (EGPX) upper-sector delegation near Donegal.*
- Wikipedia — "DAA (company)" — https://en.wikipedia.org/wiki/DAA_(company) (retrieved 2026-07-26). *Airport operator background, North Runway cost/opening corroboration, planning-permission timeline reference.*

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-26 | Built from national AIP; K Global fields from live VAMSYS; 4-page pack. |
