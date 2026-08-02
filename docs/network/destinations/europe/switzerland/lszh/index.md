# LSZH — Zurich · Airport Briefing

**LSZH / ZRH** · Kloten, Zurich, Switzerland · Europe
**Version** v0.1 · **Updated** 2026-07-26 · **Status** Draft

> **Read-me:** Planning aid for the sim, not a chart. Static data is drawn from AIP Switzerland (Skyguide eAIP) where reachable, corroborated by public tier-4 sources where the eAIP could not be fetched this pass; approaches/SIDs/STARs are listed **by name only or flagged not-yet-confirmed** — fly the charted current-AIRAC version. Live weather/NOTAMs are pulled at planning (§14/§15). Open 🟧 items are listed in §18. Flag legend 🟥 restriction/hazard · 🟧 caution/unverified · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| ARP (lat/long) | N47°27′53″ / E008°32′57″ (47.458056, 8.548056) `[OurAirports, cross-checked vs tier-4 corroboration]` |
| Field elevation | **1,417 ft / 432 m AMSL** |
| Mag variation | 🟧 ~3° E — single tier-4 source, not independently AIP-confirmed |
| Time zone | UTC+1 (CET) / UTC+2 (CEST, EU DST observed) 🟧 general Switzerland convention, not field-specific sourced |
| Runway(s) | **10/28** 2,500 × 60 m · **14/32** 3,300 × 60 m (RWY14 threshold displaced 150 m) · **16/34** 3,700 × 60 m (RWY34 threshold displaced 470 m) — all concrete |
| Preferential runway | Config/wind/noise-driven **Day / Morning / Evening operating-concept regime** tied to a German cross-border night-approach restriction — see §5/§10/§11/§12 |
| Longest LDA | 🟧 Not published / verify — TORA/TODA/ASDA sourced; LDA not independently confirmed (§7) |
| Approaches | **ILS CAT III on 14 and 16**; **ILS CAT I (non-standard minima) on 28** (not CAT II/III suitable); **ILS CAT I on 34** — see §9/§10 |
| RFF category | 🟧 Not published / verify |
| Control type | **Radar** — Zurich Tower/Approach on the field; **Switzerland FIR (LSAS)** en route — no dedicated FIR brief exists in-library; see [Europe airspace briefing](../../../../airspace/europe.md) 🟧 |
| Elevation class | Near sea-level-adjacent (1,417 ft) — **not** hot-and-high; the defining threats are surrounding hill terrain and the cross-border night-approach restriction, not density altitude |
| Special-airport status | 🟥 **German-airspace night/early-morning restriction** on northern approaches under a unilateral German ordinance limiting overflight of southern Germany, driving a three-tier Day/Morning/Evening runway-use regime; **RWY28 and RWY34 carry no CAT II/III capability** — see §5 |
| Customs / PoE | Yes — international processing on field; exact desk hours 🟧 not confirmed |
| K Global category | **H** `[VAMSYS mirror 2026-07-26]` |
| K Global base | **No** `[VAMSYS mirror 2026-07-26]` |
| Company preferred alternates | LFSB, [LSGG](../lsgg/index.md), EDDM `[VAMSYS mirror 2026-07-26]` |
| Taxi-in / taxi-out (VAMSYS) | **14 min / 16 min** `[VAMSYS mirror 2026-07-26]` |

---

## 2. Validation summary

| Domain | Flag | Note |
|---|---|---|
| Terrain / CFIT | 🟥 | Hills to 2,400–3,000 ft AMSL within 4–7 NM (S/SW/W); the **Lägern ridge** (~2,841 ft, ~15 km NW) is directly implicated in a historical night non-precision-approach CFIT accident — see §3.1. |
| Runway length vs fleet perf | 🟩 | 3,300 m / 3,700 m main runways are ample for any K Global Category H type; the 2,500 m cross runway (10/28) is non-limiting for its typical role. |
| Approach availability / minima | 🟧 | CAT III only on 14/16; **28 and 34 have no CAT II/III fallback** — a real constraint outside the Day-concept window. |
| Airspace / traffic / control | 🟧 | Busy hub with an intersecting-runway geometry (10/28 × 16/34); Switzerland FIR (LSAS) has no dedicated brief in-library — see §3.2. |
| Weather / seasonal hazard | 🟧 | Bise/föhn local wind effects; winter fog is the driver for the CAT III infrastructure that does exist. |
| Curfew / slots / hours | 🟥 | Hard field night curfew **plus** the separate German cross-border restriction on northern approaches layered on top — see §5/§6/§12. |
| RFF category vs our types | 🟧 | Not published / verify. |
| Fuel availability | 🟧 | Multi-supplier assumed (reported ~5 licensed refuellers); not individually confirmed. |
| Customs / handling / security | 🟧 | Customs confirmed present; exact hours and handling-agent detail not confirmed. |

---

## 3. Threat & Error Management (TEM)

### 3.1 CFIT / Terrain 🟥
Terrain rises to roughly **2,400 ft AMSL ~4 NM south**, **2,600 ft ~7 NM southwest**, and **3,000 ft ~5 NM west** of the field, with the Alps proper further south. The **Lägern ridge** (part of the Jura chain, ~2,841 ft / 866 m), roughly 15 km northwest of the field, is the terrain feature directly implicated in a **2001 night non-precision-approach accident on the RWY28 approach** (a regional-jet arrival flying the non-ILS approach in poor visibility struck high ground, with significant loss of life) — an event tightly linked to the political dispute that produced the German cross-border restriction described in §5/§12. Verify current MSA sectors on the AIRAC chart; exact sector altitudes were not obtained in this research pass. 🟧

### 3.2 Airborne conflict / traffic 🟧
Zurich's **intersecting-runway geometry** — the 10/28 cross-runway intersects the 16/34 parallel-style pair — combined with high-density hub traffic drives continuous crossing-clearance workload for both ATC and crews. **Switzerland FIR (LSAS)** governs en route control; no dedicated Switzerland FIR brief exists in-library yet — cross-ref the general [Europe airspace briefing](../../../../airspace/europe.md) for continental context and flag the FIR-specific gap. 🟧

### 3.3 Runway excursion 🟧
**RWY14's threshold is displaced 150 m** and **RWY34's threshold is displaced 470 m** — both reduce the usable landing distance below the published TORA on those ends. Exact current LDA figures were not independently confirmed this pass (§7) — do not assume TORA equals usable landing distance on either end. No runway-contamination-specific data was found.

### 3.4 Weather threat 🟧
Two named regional winds are relevant: the **bise** (a cold, dry northeasterly channelling down the Swiss Plateau/Rhine corridor) and the **föhn** (a warm, gusty southerly downslope wind off the Alps) — neither was independently quantified for LSZH-specific frequency/strength this pass, but both are established regional climatology. Winter fog/low stratus is the field's principal low-visibility driver, which is why CAT III capability exists on 14/16 — but **not** on 28/34, which are explicitly unsuitable for low-vis operations.

### 3.5 Operational considerations 🟥
The single largest planning driver at this field is the **German cross-border night/early-morning restriction** on northern approaches (§5/§12) — a structural three-tier **Day / Morning / Evening operating-concept** regime governing which runway carries the arrival stream by time of day, not a minor chart nuance. It is compounded by a **hard field night curfew** and by the fact that the two runways forced into use outside the Day-concept window (28 and 34) carry **no CAT II/III capability** — a real low-visibility exposure during the restricted hours. Confirm current-day exact hour bands before planning (§18).

---

## 4. Cautions & Warnings

- Northern approaches (14/16) are **barred during defined night/early-morning hours** under the German restriction — RWY28/34 become the load-bearing runways at those times, and **neither carries CAT II/III capability**.
- **RWY28** is CAT I only with **non-standard minima**; **RWY34** is CAT I only — never assume a CAT III fallback on either.
- **RWY14 (150 m) and RWY34 (470 m)** both carry a displaced threshold — verify current LDA before treating published TORA as usable landing distance.
- **Crossing-runway geometry** (10/28 × 16/34) plus taxiway wingspan restrictions reported near ILS critical/sensitive areas — expect close ATC sequencing and read-back-heavy ground handling.
- Terrain (Lägern ridge NW; hills S/SW/W) is a genuine factor on the non-precision/night-restricted approach configuration — historically implicated in a fatal CFIT accident (§3.1).
- A strict noise-track-deviation reporting regime exists — unexplained deviations from the noise-abatement routing can be referred to the national civil aviation regulator.

---

## 5. Aerodrome category, restrictions & crew qualification

- **Special-airport / category:** Not operator-categorised as a restricted-crew "special airport" in reachable sources; the standing crew-briefing items are the German night-restriction runway logic and the RWY28/34 CAT-I-only limitation. 🟥
- **Crew-qualification gate:** CAT II/III currency required for a low-visibility arrival — but **only on RWY14/16**; RWY28/34 have no CAT II/III fallback, so a low-vis event outside the Day-concept window is a real operational constraint. 🟧
- **Operating restrictions / bans:** Night/early-morning restriction on northern (14/16) approaches under a German unilateral ordinance ("DVO") limiting overflight of southern Germany — historically reported hour bands (e.g., a 21:00–07:00-type window, tightened over successive years since a 2003 dispute) are carried here as 🟧 **needing current re-verification**, not as a confirmed present-day figure. Separately, a **hard field night curfew** (historically reported around 23:00/23:30–06:00, special-permit only) restricts all movements regardless of the German restriction. 🟥
- **Overflight / entry / permits:** Standard Schengen/non-Schengen international arrival; no special state permit required. 🟩
- **Operations notes:** ANSP — **Skyguide**; airport operator — **Flughafen Zürich AG**; slot administration via the Swiss national coordinator — coordination level not confirmed this pass. 🟧

---

## 6. General / hours / services

| Item | Value | Flag |
|---|---|---|
| ATS hours | Not confirmed exact; airport operates on the order of 06:00–23:30 local with a delay-clearance-only tail | 🟧 |
| AD operating hours | As above | 🟧 |
| Night / curfew restrictions | Hard field curfew (special permit only) **plus** the separate German northern-approach restriction — see §5/§12 | 🟥 |
| RFF category | Not published / verify | 🟧 |
| Fuel | Jet A-1 assumed, multi-supplier (reported ~5 licensed refuellers; names not confirmed) | 🟧 |
| PCN | Not published / verify | 🟧 |
| Customs | Yes; exact desk hours not confirmed | 🟧 |
| Handling / FBO | Multiple ground handlers on field (at least one major international handler confirmed present); not individually confirmed for our operation | 🟧 |

---

## 7. Runways & declared distances

| RWY | Dimensions | Surface / PCN | TORA | TODA | ASDA | LDA | Notes |
|---|---|---|---|---|---|---|---|
| 10 | 2,500 × 60 m | Concrete / PCN not published 🟧 | 2,500 m | 2,560 m | 2,500 m | Not published / verify 🟧 | — |
| 28 | 2,500 × 60 m | Concrete / PCN not published 🟧 | 2,500 m | 2,560 m | 2,500 m | Not published / verify 🟧 | Non-precision/non-standard-minima approach; not CAT II/III suitable |
| 14 | 3,300 × 60 m | Concrete / PCN not published 🟧 | 3,300 m | 3,360 m | 3,300 m | Not published / verify 🟧 | **Threshold displaced 150 m**; CAT III |
| 32 | 3,300 × 60 m | Concrete / PCN not published 🟧 | 3,300 m | 3,360 m | 3,300 m | Not published / verify 🟧 | — |
| 16 | 3,700 × 60 m | Concrete / PCN not published 🟧 | 3,700 m | 3,760 m | 3,700 m | Not published / verify 🟧 | CAT III |
| 34 | 3,700 × 60 m | Concrete / PCN not published 🟧 | 3,700 m | 3,760 m | 3,700 m | Not published / verify 🟧 | **Threshold displaced 470 m**; CAT I only |

*Figures reproduced from a tier-4 AIP-style extract (not the primary Skyguide eAIP, which was unreachable this session — JS/frameset, see Sources). One secondary source describes the 16/34 surface as asphalt rather than concrete — flagged as an unresolved discrepancy. LDA and PCN are not confirmed from any reachable source; treat all figures in this table as needing a live-AIRAC/eAIP cross-check before operational use. All distances in metres.*

---

## 8. Communications

| Service | Callsign | Frequency | Hours | Notes |
|---|---|---|---|---|
| ATIS | Zurich ATIS | 125.725 (alt. source: distinct value) 🟧 | H24 (assumed) | Two reachable sources disagree in detail — cross-check current AIRAC |
| Delivery | Zurich Delivery | 121.925 / 121.930 (sources differ) 🟧 | H24 (assumed) | |
| Ground | Zurich Ground | 121.902 / 121.905 (sources differ) 🟧 | HX | |
| Tower | Zurich Tower | 118.100; Tower-2 (14/32) 120.230 🟧 | Mixed | |
| Approach / Arrival | Zurich Arrival West 130.560 · East 135.230 · Final/ILS-intercept 125.325/125.330 🟧 | Mixed | Sector-specific — take the assigned frequency |
| Centre / FIR | Switzerland FIR (LSAS) — "Swiss Radar"/"Swiss Info" per current AIRAC | H24 | No dedicated FIR brief exists in-library — see [Europe airspace briefing](../../../../airspace/europe.md) 🟧 |

*Two independently-reachable tier-4 frequency sets (a public nav-data aggregator and a virtual-ATC training manual reproducing AIP-style tables) disagree in several places — neither is the primary eAIP. Treat every frequency here as 🟧 pending a live-AIRAC cross-check.*

---

## 9. Navaids

| Aid | Ident | Freq | Hours | Notes |
|---|---|---|---|---|
| VOR/DME | KLO (Kloten) | 114.85 | H24 (assumed) | On field |
| VOR/DME | ZUE (Zurich East) | 110.05 | H24 (assumed) | |
| VOR | WIL (Willisau) | 116.90 | H24 (assumed) | |
| DME | TRA (Trasadingen) | 114.30 | H24 (assumed) | DME only |
| ILS 14 | IKL | 111.75 | H24 | **CAT III** capable |
| ILS 16 | IZH | 110.50 | H24 | **CAT III** capable |
| ILS 28 | IZW | 109.75 | H24 | **CAT I only, non-standard minima** — not CAT II/III suitable |
| ILS 34 | IZS | 110.75 | H24 | **CAT I only** |

*All idents/frequencies sourced to a tier-4 AIP-style extract (virtual-ATC training manual); not independently confirmed against the primary Skyguide eAIP this pass. 🟧*

---

## 10. Arrival

- **Transition altitude / level:** Not confirmed this pass — verify current chart. 🟧
- **Speed:** Standard 250 KIAS below FL100 (EU/ICAO norm) — confirm no local override.
- **Preferential runway logic:** Three operating concepts govern runway use by time of day: **Day concept** — main takeoff RWY28, main landing RWY14 (RWY16 also used for some long-haul movements); **Morning concept** — main takeoff RWY32/34, main landing RWY34; **Evening concept** — main takeoff RWY32/34, main landing switches to RWY28. Wind overrides apply (e.g., strong westerly favours takeoff RWY32/landing RWY28; bise/northeasterly favours takeoff RWY10/landing RWY14 or RWY34 in the evening). Exact time-of-day boundaries are historically reported but flagged 🟧 pending current re-verification (§18).
- **Approaches (names only — verify minima on current AIRAC charts):**

| RWY | Approach | IAF | FAF/FAP alt | Notes |
|---|---|---|---|---|
| 14 | ILS (IKL) | Not confirmed 🟧 | Not confirmed 🟧 | CAT III |
| 16 | ILS (IZH) | Not confirmed 🟧 | Not confirmed 🟧 | CAT III |
| 28 | ILS (IZW), non-standard minima; RNP reported as a preferred alternative in some tier-4 sources 🟧 | Not confirmed 🟧 | Not confirmed 🟧 | Not CAT II/III suitable |
| 34 | ILS (IZS) | Not confirmed 🟧 | Not confirmed 🟧 | CAT I only |

- **STARs (names only):** A partial name (e.g. a "BERSU"-family arrival feeding the ILS 14) surfaced in a tier-4 source; the full current-AIRAC STAR list was not obtained — pull it at planning. 🟧
- **LVP:** CAT IIIb capability exists on 14/16 only (reported minima on the order of 0–50 ft ceiling / 75 m RVR in a tier-4 source); **28 and 34 are explicitly not suitable for CAT II/III operation.** Exact current LVP trigger conditions not confirmed. 🟧
- **Missed approach watch-items:** Terrain to the S/SW/W and the Lägern ridge to the NW are the relevant considerations — the historically sensitive case is a non-precision missed approach on RWY28 in marginal weather (§3.1).

---

## 11. Departure

- **SIDs (names only — fly the charted version):** A partial name set surfaced in tier-4 research — **VEBIT**, **DEGES**, **ZUE**, **WIL**, **GERSA** families — not confirmed as the current-AIRAC set; pull the live SID list at planning. 🟧
- **RNP / climb-gradient requirements:** Confirm gradient/equipage per SID on the current chart. See [`OM E — PBN and RNP Operations`](../../../../../flight-ops/pbn-and-rnp-operations.md).
- **Take-off minima:** Not confirmed this pass. 🟧
- **Start-up / push-back:** Not confirmed this pass — confirm procedure locally. 🟧
- **ATC slot / CTOT & clearance:** Slot-administered through the Swiss national coordinator; exact IATA level not confirmed. 🟧 A historically-reported local rule restricted RWY28 departure slots in a mid-morning window to protect an unconstrained inbound rush — treat as tier-4 and verify current status. 🟧
- **De-icing:** Two dedicated de-icing pads confirmed present; season/throughput detail not confirmed. See [`OM E — Cold Weather Operations`](../../../../../flight-ops/cold-weather-operations.md).

---

## 12. Noise & Environmental

- **Noise abatement (NAP):** The **Day / Morning / Evening operating-concept regime** (§10/§11) *is* the field's noise-abatement structure — runway assignment by time of day is driven as much by noise/cross-border considerations as by wind. Layered on top is the **German cross-border restriction** limiting northern (14/16) approaches during defined night/early-morning hours to reduce overflight of southern Germany — the field's single most consequential noise/schedule constraint (§5).
- **Night noise / dB limits:** No specific per-movement dB limit confirmed; a track-deviation reporting/enforcement regime exists — unexplained deviations from noise-abatement routing can be referred to the national civil aviation regulator. 🟧
- **Engine run-up restrictions:** Not confirmed. 🟧
- **Reverse thrust / idle-reverse policy:** Not confirmed. 🟧

---

## 13. Ground operations

- **Stands for our types:** Passenger operations are split across multiple docks (a Schengen-only dock, a mixed Schengen/non-Schengen dock, and a non-Schengen midfield satellite reached by an automated people-mover); widebody-specific stand data was not found in reachable sources. 🟧
- **Push-back:** Not confirmed. 🟧
- **Standard taxi routes:** Confirm with Ground/Apron on the day.
- **Hot spots / tight taxiways:** Reported taxiway wingspan restrictions near ILS critical/sensitive areas (protecting ILS 28 in particular), plus the **10/28 × 16/34 crossing-runway geometry**, are the recognised complex ground points — treat as tier-4 pending AIP confirmation. 🟧
- **Follow-me:** Availability not confirmed. 🟧

---

## 14. Weather & seasonal (durable)

- **Climate / prevailing wind:** Temperate Swiss-Plateau climate.
- **Seasonal hazards:** Two named regional winds are relevant — the **bise** (cold, dry northeasterly) and the **föhn** (warm, gusty southerly downslope off the Alps); winter fog/low stratus is the field's low-visibility driver, mitigated only on 14/16 by CAT III infrastructure.
- **Local effects:** Föhn-related mechanical turbulence in the lee of nearby high ground is plausible but not independently quantified for this field. 🟧

> **Live weather — pull at planning (T-2h):** METAR, TAF, TREND, SIGMET/AIRMET. Not stored here.

---

## 15. NOTAMs

> **Pull at planning (T-2h).** Perishable — not stored here. Check: runway/taxiway closures, navaid U/S, current status of the German-airspace approach restriction, CAT III equipment status on 14/16, lighting, obstacle/crane, RFF downgrade, GPS/RAIM for RNP procedures. Source: official AIS / OFP NOTAM block.

---

## 16. Fuel & alternate planning notes

- **Typical role for us:** Destination / alternate — **not** a K Global base. `[VAMSYS mirror 2026-07-26]`
- **Nearest suitable alternates:** Company preferred alternates **LFSB**, [**LSGG**](../lsgg/index.md), **EDDM** `[VAMSYS mirror 2026-07-26]` — confirm suitability, runway/RFF adequacy and current minima per leg.
- **Fuel-uplift notes:** Jet A-1 assumed available, multi-supplier (reported ~5 licensed refuellers); not individually confirmed. 🟧 See [`OM E — Fuel Policy`](../../../../../flight-ops/fuel-policy.md).
- **Range/perf flags for our fleet:** Main runways (3,300 m / 3,700 m) are non-limiting for any K Global Category H type. See [`OM B — Fleet Capability Matrix`](../../../../../fleet/capability-matrix.md).

---

## 17. Fleet-specific notes (optional)

- Category H crews should note the **RWY28/34 CAT-I-only limitation** when planning a low-visibility arrival outside the Day-concept window — no CAT II/III fallback exists on those ends. See [`OM B — Fleet Capability Matrix`](../../../../../fleet/capability-matrix.md) and [`OM E — Low Visibility Operations`](../../../../../flight-ops/low-visibility-operations.md).

---

## 18. Open items (🟧 — confirm against AIP / current AIRAC)

- **Skyguide eAIP** could not be fetched this session (JS/frameset) — every figure below should be re-verified against it or a current AIRAC chart when reachable.
- **Magnetic variation, RFF category, PCN (all runways), LDA (all runways)** — not found in any reachable source.
- **Exact current hour bands for the German northern-approach restriction** and the field's own night curfew — historically reported figures carried here are not current-day-confirmed.
- **ATC frequencies** — two tier-4 sources disagree; reconcile against current AIRAC.
- **SIDs/STARs (current names)** — only a partial, likely dated, tier-4 list obtained.
- **MSA sector altitudes** — not obtained this pass.
- **Customs/immigration desk hours, fuel supplier names, handling agent for our operation, widebody stand/apron chart, taxiway hot-spot specifics, engine run-up/reverse-thrust policy, slot-coordination level** — none confirmed in reachable sources.

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim material (current-AIRAC charts) informs content but is not listed here.*

- **AIP Switzerland (Skyguide eAIP)** — https://www.eaip.skyguide.ch/ — attempted 2026-07-26; JS/frameset, not reachable via automated fetch this session. Nominal primary source of record; not yet used to verify this pack.
- OurAirports — https://ourairports.com/airports/LSZH/ (retrieved 2026-07-26). *ARP/elevation/runway cross-check.*
- Zurich Airport (Flughafen Zürich AG) — operating-concepts / flight-operations pages, flughafen-zuerich.ch (retrieved 2026-07-26). *Day/Morning/Evening operating concepts; curfew statement.*
- swissinfo.ch — "Germany limits flights into Zurich," 2003-04-17 — https://www.swissinfo.ch/eng/banking-fintech/germany-limits-flights-into-zurich/3272390 (retrieved 2026-07-26). *German restriction history.*
- en.wikipedia.org/wiki/Zurich_Airport (retrieved 2026-07-26). *Terminal/dock structure, historical CFIT-accident context, fuel-supplier count.*
- slotcoordination.ch — Zurich airport restrictions page (retrieved 2026-07-26). *Slot/curfew figures.*
- IVAO Switzerland — Zurich Air Traffic Management Manual (AIP-style reproduction) — ch.ivao.aero (retrieved 2026-07-26). *Runway/nav/frequency/SID-family detail — network-sim training document, not regulatory; used only for corroboration, flagged throughout.*

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-26 | Built from AIP Switzerland (Skyguide); K Global fields from live VAMSYS; 4-page pack. |
