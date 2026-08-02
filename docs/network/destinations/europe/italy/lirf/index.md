# LIRF — Fiumicino · Airport Briefing

**LIRF / FCO** · Fiumicino, Rome, Lazio, Italy · Europe
**Version** v0.1 · **Updated** 2026-07-26 · **Status** Draft — AIP Italia (ENAV)-derived, K Global network build

> **Read-me:** Planning aid for the sim, not a chart. Static data is drawn from AIP Italia (ENAV eAIP) where reachable, cross-checked against public tier-4 sources (OurAirports, IVAO Italy network data, community airport databases); approaches/SIDs/STARs are listed **by name only or flagged not-yet-confirmed** — fly the charted current-AIRAC version. Live weather/NOTAMs are pulled at planning (§14/§15). Open 🟧 items are listed in §18. Flag legend 🟥 restriction/hazard · 🟧 caution/unverified · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| ARP (lat/long) | N41°48′16.3″ / E012°15′07.2″ (41.8045, 12.2520) `[OurAirports]` 🟧 |
| Field elevation | **13 ft / 4 m AMSL** (one tier-4 source cites 14 ft — treat as noise, not a material discrepancy) |
| Mag variation | Not confirmed this pass — verify current AIRAC 🟧 |
| Time zone | UTC+1 (CET) / UTC+2 (CEST, EU DST observed) |
| Runway(s) | **07/25** 3,300 m asphalt · **16L/34R** 3,900 m asphalt · **16R/34L** 3,900 m asphalt — **three operational strips.** A fourth, **16C/34C** (3,600 m), is carried in some navdata/legacy sources but is **permanently closed and reused as Taxiway "D"** — see §18 discrepancy note 🟥 |
| Preferential runway | Wind/traffic/noise-dependent; the parallel 16/34 pair carries the bulk of scheduled traffic, with 07/25 reported as used mainly for westbound departures per prevailing wind — not independently confirmed this pass 🟧 |
| Longest LDA | 3,900 m (16R/34L — no displacement found) |
| Approaches | **ILS** on 16L/34R and 16R/34L (CAT IIIB / CAT IIIA respectively per tier-4 corroboration — not confirmed from a primary AIP table this pass); **RNAV (GNSS)** on all three strips; **VOR** on 07/25 and 16R/34L 🟧 |
| RFF category | **CAT 9** (tier-4 sourced — not confirmed from a primary AIP table this pass) 🟧 |
| Control type | **Radar** — Roma Approach (Departure/Director/Arrivals sectors) on the field; **Roma ACC (LIRR)** en route — no dedicated Roma FIR brief exists in-library; see [Europe — Airspace Briefing](../../../../airspace/europe.md) 🟧 (general continental brief only, does not cover Italy/Roma FIR specifics) |
| Elevation class | Sea-level coastal plain — **not** hot-and-high; the standing environmental driver here is **wildlife/bird-strike risk** from adjoining coastal wetlands, not density altitude |
| Special-airport status | 🟥 **Slot-coordinated IATA Level 3** hub; historical loss of a third parallel runway (16C/34C, closed/converted to taxiway) concentrates traffic onto fewer strips than the field was originally built with — see §5 |
| Customs / PoE | **Yes** — Terminal 1 and Terminal 3 international halls; Terminal 3 reported as the primary non-Schengen hall per tier-4 source 🟧 |
| K Global category | **L** `[VAMSYS mirror 2026-07-26]` 🟩 |
| K Global base | **No** `[VAMSYS mirror 2026-07-26]` |
| Company preferred alternates | **LIRA** (Ciampino), **LIMC** (Milano Malpensa) `[VAMSYS mirror 2026-07-26]` — no in-library brief exists yet for LIRA; see [LIMC Briefing](../limc/index.md) |
| Taxi-in / taxi-out (VAMSYS) | **18 min / 20 min** `[VAMSYS mirror 2026-07-26]` |

---

## 2. Validation summary

| Domain | Flag | Note |
|---|---|---|
| Terrain / CFIT | 🟩 | Flat Roman coastal plain on the Tyrrhenian shoreline; no close-in high terrain. |
| Runway length vs fleet perf | 🟩 | 3,900 m parallel pair (16L/34R, 16R/34L) is ample for any K Global widebody; 07/25 (3,300 m, one displaced threshold) is non-limiting for typical operating weights. |
| Approach availability / minima | 🟧 | ILS reported on both parallels (CAT IIIA/IIIB); sub-category assignment and exact minima not confirmed from a primary AIP table this pass. |
| Airspace / traffic / control | 🟥 | Major slot-coordinated hub sharing a busy Roma TMA with nearby Ciampino (LIRA) traffic; the field's effective runway capacity is reduced from its original four-strip design (see §3.2/§5). |
| Weather / seasonal hazard | 🟧 | Coastal fog/mist potential in winter; documented, long-standing **bird-strike/wildlife hazard** from adjoining coastal wetland nature reserves — see §3.4. |
| Curfew / slots / hours | 🟥 | **IATA Level 3 slot-coordinated**; no hard curfew found (H24 operation), but night-hour runway-use restrictions and noise surcharges apply — see §6/§12. |
| RFF category vs our types | 🟧 | CAT 9 reported (tier-4) — above any of our fleet's requirement if confirmed, but not primary-sourced this pass. |
| Fuel availability | 🟧 | Jet A-1 assumed available as a major hub; specific supplier/hours not confirmed in reachable public sources. |
| Customs / handling / security | 🟧 | T1/T3 international halls reported; exact desk hours and current post-expansion terminal/gate split for widebody long-haul traffic not fully confirmed. |

---

## 3. Threat & Error Management (TEM)

### 3.1 CFIT / Terrain 🟩
LIRF sits at 13 ft AMSL on the flat Roman coastal plain, immediately adjacent to the Tyrrhenian Sea to the west. There is **no close-in high terrain** relevant to arrival, departure or missed-approach paths at any of the three operational runways. Verify the MSA ring on the current chart as routine practice, but CFIT is not the operative threat at this field.

### 3.2 Airborne conflict / traffic 🟥
LIRF is one of Italy's busiest hubs and an **IATA Level 3 slot-coordinated** aerodrome, operating a **near-parallel pair (16L/34R, 16R/34L)** plus a **crossing strip (07/25)**. The airfield was originally built with a third parallel (**16C/34C**), which is now **permanently closed and repurposed as Taxiway "D"** — meaning the field's actual usable runway capacity is lower than its four-strip layout suggests, concentrating both arrival and departure flow onto two effective strips at peak banks. Roma Approach manages this alongside nearby **Ciampino (LIRA)** traffic in a shared, busy Roma TMA. Expect sustained radar workload, frequent parallel-dependent sequencing, and vectoring/holding at busy periods.

### 3.3 Runway excursion 🟧
RWY 07 carries a **411 m displaced threshold** (OurAirports); no other displaced thresholds were found on 25, 16R or 34L. RWY 16L shows an apparent **gap between TORA (3,902 m) and LDA (~3,002 m)** in the reachable tier-4 dataset that is **not explained by any displaced-threshold figure found this pass** — flagged for verification against a live AIRAC before treating as authoritative (§18). No contamination/braking-action data was found; treat wet-runway braking as a standard seasonal caution.

### 3.4 Weather threat 🟧
Coastal Mediterranean climate: winter can bring morning coastal fog/mist over the Roman plain, and the Tyrrhenian's proximity brings a standard sea-breeze/onshore-wind influence on runway selection. The field's **standing, well-documented threat is wildlife/bird-strike risk** — LIRF sits amid coastal wetlands and protected nature reserves (including the WWF Oasi Vasche di Maccarese immediately nearby), and a **bird-monitoring and scaring programme has been in continuous operation at the field since 1989** per peer-reviewed wildlife-strike research. Treat this as a standing seasonal caution, elevated during spring/autumn migration.

### 3.5 Operational considerations 🟥
Plan around three durable constraints: (1) the **historical loss of the third parallel (16C/34C → Taxiway D)**, which reduces effective runway capacity below the field's original four-strip design; (2) the **Level 3 slot-coordinated regime**, meaning schedule integrity has real network consequences; and (3) the **standing bird-strike/wildlife hazard** from the adjoining wetland reserves. RFF and approach infrastructure otherwise appear first-tier; most open items in §18 are currency/confirmation gaps rather than safety-critical.

---

## 4. Cautions & Warnings

- **RWY 16C/34C no longer exists as a runway** — it is permanently closed and repurposed as Taxiway "D." Any navdata, chart or brief still showing it as a fourth active strip is stale; never plan an approach or departure on it.
- **Bird-strike/wildlife hazard is a standing, documented threat** at this field due to adjoining coastal wetland reserves — brief accordingly, especially during spring/autumn migration windows.
- **RWY 16L's apparent LDA shortfall against its TORA** is unexplained in reachable sources — treat the shorter figure as authoritative until confirmed on a current chart.
- **Slot-coordinated Level 3** — schedule integrity matters; a late pushback has network consequences.
- Roma TMA traffic density is shared with **Ciampino (LIRA)** close by — maintain a heightened traffic scan even under radar.
- Terminal/gate assignment for widebody long-haul traffic is not independently confirmed this pass — confirm with handling before finalising a stand plan.

---

## 5. Aerodrome category, restrictions & crew qualification

- **Special-airport / category:** Not operator-categorised as a restricted-crew "special airport" in reachable sources; the standing crew-briefing items are the **effective-capacity-reduction from the 16C/34C closure** and the **bird-strike/wildlife environment**. 🟧
- **Crew-qualification gate:** No specific low-experience-crew restriction found in reachable sources — verify current operator policy. 🟧
- **Operating restrictions / bans:** No hard curfew found; night-hour runway-use restrictions apply (§6/§12). RNP AR / circling restriction status not confirmed — verify current AIRAC. 🟧
- **Overflight / entry / permits:** Standard EU/Schengen and non-Schengen international arrival; no special state permit required for EU/EASA-state operators. 🟩
- **Operations notes:** ANSP — **ENAV** (Roma Approach on the field; Roma ACC/LIRR en route). Airport operator — **Aeroporti di Roma (ADR)**. Slot coordinator — Italy's national slot-coordination body under the IATA Level 3 framework (specific coordinator name not confirmed this pass 🟧).

---

## 6. General / hours / services

| Item | Value | Flag |
|---|---|---|
| ATS hours | H24 assumed for a major hub — not individually confirmed | 🟧 |
| AD operating hours | H24 — general aviation reported restricted to 23:01–06:00 local when LIRA is closed (tier-4) | 🟧 |
| Night / curfew restrictions | No hard curfew; **RWY 16R/34L reported closed 22:00–05:00** except for ops/MET/safety reasons; **RWY 16L/34R reported closed every Sunday 22:30–00:30** for ILS ground check — both per IVAO Italy network data, treat as indicative pending AIP confirmation | 🟧 |
| RFF category | **CAT 9** (tier-4) | 🟧 |
| Fuel | Jet A-1 assumed available H24 as a major hub; specific into-plane supplier/hours not confirmed | 🟧 |
| PCN | Not confirmed in reachable sources this pass | 🟧 |
| Customs | T1 & T3 international halls; reported 24 h border-police presence (tier-4); exact desk hours not confirmed | 🟧 |
| Handling / FBO | Aeroporti di Roma (ADR) plus third-party ground handlers — specific handler for our operation not confirmed | 🟧 |

---

## 7. Runways & declared distances

| RWY | Dimensions | Surface / PCN | TORA | TODA | ASDA | LDA | Notes |
|---|---|---|---|---|---|---|---|
| 07 | 3,300 × 45 m | Asphalt / PCN not confirmed 🟧 | 3,307 m | Not published/verify 🟧 | Not published/verify 🟧 | 2,892 m | **Displaced threshold 411 m** |
| 25 | 3,300 × 45 m | Asphalt / PCN not confirmed 🟧 | 3,307 m | Not published/verify 🟧 | Not published/verify 🟧 | 3,307 m | No displacement found |
| 16L | 3,900 × 60 m | Asphalt / PCN not confirmed 🟧 | 3,902 m | Not published/verify 🟧 | Not published/verify 🟧 | 3,002 m | ILS (CAT IIIB reported); **LDA/TORA gap not explained — verify** 🟧 |
| 34R | 3,900 × 60 m | Asphalt / PCN not confirmed 🟧 | 3,902 m | Not published/verify 🟧 | Not published/verify 🟧 | 3,902 m | No displacement found |
| 16R | 3,900 × 60 m | Asphalt / PCN not confirmed 🟧 | 3,902 m | Not published/verify 🟧 | Not published/verify 🟧 | 3,902 m | ILS (CAT IIIA reported) |
| 34L | 3,900 × 60 m | Asphalt / PCN not confirmed 🟧 | 3,902 m | Not published/verify 🟧 | Not published/verify 🟧 | 3,902 m | No displacement found |
| ~~16C/34C~~ | ~~3,600 × 45 m~~ | — | — | — | — | — | 🟥 **CLOSED — permanently decommissioned, now Taxiway "D."** Do not use for any operation. Retained here only to flag the discrepancy against navdata/anchor material still showing it as active. |

*Sources: OurAirports (runway dimensions, displacement, closure status), IVAO Italy network TORA/LDA data (cross-check only, network-sim sourced, not regulatory). TODA/ASDA not obtained from a primary AIP table this pass — 🟧 treat all declared-distance figures as needing a live-AIRAC cross-check before dispatch use. All distances in metres.*

---

## 8. Communications

| Service | Callsign | Frequency | Hours | Notes |
|---|---|---|---|---|
| ATIS (arrival) | Fiumicino ATIS | 126.125 | H24 (assumed) 🟧 | |
| ATIS (departure) | Fiumicino ATIS | 121.850 | H24 (assumed) 🟧 | |
| Delivery | Fiumicino Delivery | 121.800 | H24 (assumed) | |
| Ground | Fiumicino Ground · West Ground | 121.900 · 122.125 | H24 (assumed) | West Ground activated per traffic |
| Tower | Fiumicino Tower · East Tower | 118.700 · 127.625 | H24 / HX | East Tower controls 16L/34R only when activated |
| Approach | Roma Departure · Roma Director · Roma Arrivals | 130.900 · 131.250 · 125.500 | Mixed | Sector-specific — take the assigned frequency |
| Centre / FIR | Roma ACC (LIRR) — "Roma Radar" (NE/TS sectors) · Roma Information (FSS) | 124.200 · 127.350 · 125.750 | H24 | No dedicated in-library Roma FIR brief; see [Europe — Airspace Briefing](../../../../airspace/europe.md) 🟧 |

*Source: IVAO Italy network quick-overview data (cross-check only, network-sim sourced — not regulatory; representative of current published frequencies but not independently AIP-confirmed this pass). Treat as 🟧 pending a live-AIRAC cross-check.*

---

## 9. Navaids

| Aid | Ident | Freq | Hours | Notes |
|---|---|---|---|---|
| VOR/DME | OST (Ostia) | Not confirmed this pass 🟧 | H24 (assumed) | Referenced by multiple SID/STAR fix names (e.g. OST 1D/1E); serves the field area |
| ILS 16L | Not confirmed this pass 🟧 | Not confirmed this pass 🟧 | H24 (assumed) | CAT IIIB reported (tier-4) |
| ILS 16R | Not confirmed this pass 🟧 | Not confirmed this pass 🟧 | H24 (assumed) | CAT IIIA reported (tier-4) |
| ILS 07/25 | Not confirmed this pass 🟧 | Not confirmed this pass 🟧 | H24 (assumed) | CAT I reported (tier-4) |

*No primary AIP navaid table was reachable this pass — idents/frequencies are flagged for verification rather than fabricated. Confirm all navaid data on the current AIRAC before use.*

---

## 10. Arrival

- **Transition altitude / level:** TA **6,000 ft**; TL variable by QNH (IVAO Italy reference table: QNH <977 hPa → TL 85; 977–994 → TL 80; 995–1012 → TL 75; ≥1013 → TL 70) — cross-check current AIRAC. 🟧
- **Speed:** Standard 250 KIAS below FL100 (EU/ICAO norm) — confirm no local override on current chart.
- **Preferential runway logic:** Wind/traffic/noise-dependent; the 16/34 parallel pair is the primary scheduled-traffic pair, with 07/25 reported used mainly for westbound departures — not independently confirmed this pass. 🟧
- **Approaches (names only — verify minima on current AIRAC charts):**

| RWY | Approach | Notes |
|---|---|---|
| 16L | ILS (CAT IIIB reported); RNAV (GNSS) | Verify sub-category and minima on current chart |
| 16R | ILS (CAT IIIA reported); VOR; RNAV (GNSS) | |
| 07 | VOR; RNAV (GNSS) | |
| 25 | ILS (CAT I reported); RNAV (GNSS) | |
| 34L / 34R | ILS/RNAV (GNSS) reciprocal to 16R/16L | |

- **STARs (names only):** Not confirmed in reachable research pass — pull the current-AIRAC STAR list at planning. 🟧
- **LVP:** Coastal fog can reduce visibility below CAT I minima in winter; exact RVR/trigger figures not confirmed this pass. 🟧
- **Missed approach watch-items:** Terrain is not the driver (flat coastal plain); the operative concern is re-sequencing into a busy, slot-coordinated Roma TMA shared with nearby Ciampino traffic.

---

## 11. Departure

- **SIDs (names only — fly the charted version):** Network-sim (IVAO Italy) data lists RNAV/conventional SIDs by fix — **OST, RATIR** (RWY 07); **PODOX, PEPIX, KONUT, ESINO, NENIG, SOSIV, XENOL, OKUNO, RIFFI, ROTUN, SIPRO, TIBER, GISPA, SOVAN** and related variants (RWY 16L/16R/25/34L/34R) — network-sim sourced, **not regulatory**; pull the live current-AIRAC SID list before use. 🟧
- **RNP / climb-gradient requirements:** Not confirmed this pass — verify RNP/gradient per SID on the current chart. See [`OM E — PBN and RNP Operations`](../../../../../flight-ops/pbn-and-rnp-operations.md). 🟧
- **Take-off minima:** Not confirmed this pass. 🟧
- **Start-up / push-back:** Not confirmed this pass — confirm cross-bleed/APU notification procedure and push-back approval process locally. 🟧
- **ATC slot / CTOT & clearance:** **IATA Level 3 slot-coordinated**; EUROCONTROL Network Manager ATFM/CTOT regulation applies as standard practice for a congested EU hub (not independently LIRF-sourced this pass). 🟧
- **De-icing:** Not confirmed in reachable sources — Mediterranean coastal climate makes de-icing a lower-frequency seasonal consideration than at continental European fields, but confirm current provisioning. See [`OM E — Cold Weather Operations`](../../../../../flight-ops/cold-weather-operations.md). 🟧

---

## 12. Noise & Environmental

- **Noise abatement (NAP):** Not confirmed in detail this pass — verify current noise-routing procedures on the current chart. 🟧
- **Night noise / dB limits:** No hard curfew found; **noise surcharges reported for movements 23:00–06:00** (tier-4), and the reported **RWY 16R/34L closure 22:00–05:00** / **RWY 16L/34R Sunday closure 22:30–00:30** function as de-facto night noise-routing restrictions (§6). 🟧
- **Engine run-up restrictions:** Not confirmed in reachable sources — verify locally. 🟧
- **Reverse thrust / idle-reverse policy:** Not confirmed in reachable sources — verify locally. 🟧

---

## 13. Ground operations

- **Stands for our types:** Widebody-capable stands are reported concentrated around **Terminal 3** and select Terminal 1 piers; exact current-day gate assignment for K Global widebody long-haul traffic is not confirmed this pass. 🟧
- **Push-back:** Mandatory-vs-self-manoeuvre policy for Code E/F stands not confirmed. 🟧
- **Standard taxi routes:** Confirm with Ground/Apron on the day; note that the historical third parallel (16C/34C) is now **Taxiway "D"** and forms part of the ground-movement network, not a runway.
- **Hot spots / tight taxiways:** Not confirmed in reachable sources this pass — pull the current AD 2 chart's hot-spot annex before use. 🟧
- **Follow-me:** Availability not confirmed in reachable source — verify locally. 🟧

---

## 14. Weather & seasonal (durable)

- **Climate / prevailing wind:** Mediterranean coastal climate on the Tyrrhenian shoreline; prevailing wind direction not independently confirmed this pass, though 07/25 is reported used mainly for westbound departures. 🟧
- **Seasonal hazards:** Winter coastal fog/mist over the Roman plain is a plausible seasonal factor (not independently frequency-sourced this pass); summer carries the standard Mediterranean risk of afternoon convective activity. The field's **standing, best-documented hazard is wildlife/bird-strike risk** from adjoining coastal wetland nature reserves, actively managed since 1989 (§3.4).
- **Local effects:** Sea-breeze influence typical of a coastal field; no notable terrain-driven local effect.

> **Live weather — pull at planning (T-2h):** METAR, TAF, TREND, SIGMET/AIRMET. Not stored here.

---

## 15. NOTAMs

> **Pull at planning (T-2h).** Perishable — not stored here. Check: runway/taxiway closures, navaid U/S, lighting, obstacle/crane, RFF downgrade, wildlife-hazard bulletins, GPS/RAIM for RNP procedures, current Roma TMA/FIR restrictions. Source: official AIS / OFP NOTAM block.

---

## 16. Fuel & alternate planning notes

- **Typical role for us:** Destination / alternate-adjacent hub within the network; not a K Global base. `[VAMSYS mirror 2026-07-26]`
- **Nearest suitable alternates:** Company preferred alternates **LIRA** (Ciampino — no in-library brief yet) and [**LIMC**](../limc/index.md) (Milano Malpensa) `[VAMSYS mirror 2026-07-26]` — confirm suitability, runway/RFF adequacy and current minima per leg.
- **Fuel-uplift notes:** Jet A-1 assumed available H24 as a major hub; specific into-plane provider/hours not confirmed. 🟧 See [`OM E — Fuel Policy`](../../../../../flight-ops/fuel-policy.md).
- **Range/perf flags for our fleet:** Field length/strength non-limiting for any K Global type on the 3,900 m parallel pair. See [`OM B — Fleet Capability Matrix`](../../../../../fleet/capability-matrix.md) for type-by-type reference.

---

## 17. Fleet-specific notes (optional)

- No field-elevation or field-length performance penalty identified for any K Global type at LIRF. The operative planning considerations are the **reduced effective runway capacity** (16C/34C closure) and the **bird-strike/wildlife environment** rather than aircraft performance. See [`OM B — Fleet Capability Matrix`](../../../../../fleet/capability-matrix.md).

---

## 18. Open items (🟧 — confirm against AIP / current AIRAC)

- **Runway 16C/34C discrepancy** — carried as an active fourth runway in some navdata/anchor material (and in older stub data), but corroborated **closed and converted to Taxiway "D"** by OurAirports and current Wikipedia data (three-runway field). Treated as closed in this brief — re-confirm against a live AIP Italia AD 2 LIRF chart.
- **RWY 16L LDA/TORA gap** — reachable tier-4 data shows LDA (~3,002 m) well short of TORA (3,902 m) with no displaced-threshold figure to explain it; verify against a primary AIP table.
- **ILS sub-categories, idents and frequencies** — reported (CAT IIIA/IIIB on 16R/16L, CAT I on 07/25) but not confirmed from a primary AIP table this pass.
- **Mag variation, PCN, TODA/ASDA, take-off minima, noise-abatement procedure detail, engine run-up/reverse-thrust policy, follow-me availability** — none confirmed in reachable sources.
- **RFF category (CAT 9)** — tier-4 sourced, not primary-confirmed.
- **ATC frequencies** — sourced to IVAO Italy network-sim data; representative but not independently AIP-confirmed.
- **SIDs/STARs (current names)** — SID fix names obtained from network-sim data only; STAR names not obtained this pass — pull the live current-AIRAC procedure list before use.
- **Terminal/gate assignment for widebody long-haul traffic** — not fully confirmed against current-day terminal configuration.
- **Fuel supplier(s)/hours, customs desk hours, handling agent(s), night-hour runway-restriction figures** — sourced to community/tier-4 data only, not independently AIP-confirmed.
- **No in-library brief exists yet for LIRA (Ciampino)**, a company-preferred alternate — link when built.

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim material (current-AIRAC charts) informs content but is not listed here.*

- OurAirports — https://ourairports.com/airports/LIRF/runways.html and /frequencies.html (retrieved 2026-07-26). *Runway dimensions, displacement, closure status of 16C/34C, ARP/elevation.*
- IVAO Italy — Quick Overview, Roma Fiumicino — https://quickoverview.ivao.it/aerodrome/show/LIRF (retrieved 2026-07-26). *TORA/LDA, ATC frequencies, SID names, TA/TL table — network-sim document, not regulatory; used for operational cross-check only.*
- Wikipedia — "Rome Fiumicino Airport" — https://en.wikipedia.org/wiki/Rome_Fiumicino_Airport (retrieved 2026-07-26). *Current three-runway configuration, general field description.*
- Data Sky Center — LIRF — https://dataskycenter.com/airport/LIRF (retrieved 2026-07-26). *Community-sourced cross-check: RFF/frequency/terminal detail; not authoritative.*
- PLOS One — "Wildlife Strike Risk Assessment in Several Italian Airports" and related bird-strike research referencing Fiumicino/Oasi Vasche di Maccarese (retrieved 2026-07-26). *Bird-strike/wildlife hazard corroboration.*

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-26 | Built from AIP Italia (ENAV); K Global fields from live VAMSYS; 4-page pack. |
