# LIMF — Torino/Caselle · Airport Briefing

**LIMF / TRN** · Caselle Torinese, Piedmont, Italy · Europe
**Version** v0.1 · **Updated** 2026-07-26 · **Status** Draft

> **Read-me:** Planning aid for the sim, not a chart. Static data is drawn from AIP Italia (ENAV eAIP, AD 2 LIMF) plus standard public aeronautical data; approaches/SIDs/STARs are listed **by name only or flagged not-yet-confirmed** — fly the charted current-AIRAC version. Live weather/NOTAMs are pulled at planning (§14/§15). Open 🟧 items are listed in §18. Flag legend 🟥 restriction/hazard · 🟧 caution/unverified · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| ARP (lat/long) | 45°12′09″N / 007°38′58″E (45.20250, 7.64944) `[AIP Italia AD 2 LIMF 2.1]` |
| Field elevation | **989 ft / 301 m AMSL** (reference temperature 27.3°C) |
| Mag variation | 🟧 **1° E (epoch 2005.0)**, annual change 6′ E, charted **anomaly zone** — current-day value not independently re-confirmed against current AIRAC; a secular-drift estimate (roughly ~3° E today) is **not a sourced figure** |
| Time zone | UTC+1 (CET) / UTC+2 (CEST, EU DST observed) |
| Runway(s) | **18/36**, 3,300 × 60 m, asphalt (single runway) — 🟧 this pack's brief referenced "05/23"; every cross-checked source (AIP Italia, OurAirports, SkyVector, Wikipedia) confirms the field's **only runway is 18/36** — treat "05/23" as superseded/incorrect and verify against current AIRAC if a renumbering is suspected |
| Preferential runway | **RWY 36** preferred for take-off and landing, provided tailwind component ≤7 kt (dry runway) or ≤5 kt (wet runway); criterion not applied if tailwind exceeds those limits or braking action is "poor" |
| Longest LDA | **2,948 m (RWY 36)**; RWY 18 LDA 2,574 m |
| Approaches | **ILS CAT II/III RWY 36** (ident ITOC, special aircrew/aircraft certification required); VOR and NDB(Locator) approaches also published to RWY 36; **RWY 18 has no precision approach found in reachable sources** — circling/visual only, verify current AIRAC 🟧 |
| RFF category | **CAT 9 ICAO** `[AIP Italia AD 2 LIMF 2.6]` 🟧 sourced to an older AIP cycle, verify current |
| Control type | **Radar.** Torino Tower on the field (H24); approach control was historically "Torino Approach" but current public cross-checks (2024) indicate the approach function is now provided by **Milano ACC/Radar** — not independently re-confirmed against a current AIRAC 🟧. En-route: **Milano ACC (LIMM)** — see [Airspace — Europe general](../../../../airspace/europe.md); 🟧 **no dedicated Milano (LIMM) FIR brief exists yet in this tree** — the general Europe page is the interim reference. |
| Elevation class | Near sea-level (989 ft) — **not** hot-and-high; the performance/reliability drivers here are **Po Valley winter fog** and **Alpine-proximity terrain**, not density altitude |
| Special-airport status | 🟧 Joint civil/military aerodrome (Leonardo/Aeritalia flight-test plants on the field); charted **magnetic anomaly zone**; a runway-arresting cable/plinth installation is noted within the RWY 36-end strip (military heritage) — see §4/§7 |
| Customs / PoE | **Yes** — H24 per the reachable AIP cycle; not independently re-confirmed 🟧 |
| K Global category | **Not set in VAMSYS — verify** `[VAMSYS mirror 2026-07-26]` 🟧 |
| K Global base | **No** `[VAMSYS mirror 2026-07-26]` |
| Company preferred alternates | **LFLJ, LIMC, LSGS** `[VAMSYS mirror 2026-07-26]` — see §16 for link status |
| Taxi-in / taxi-out (VAMSYS) | **Not published / verify** `[VAMSYS mirror 2026-07-26]` 🟧 |

---

## 2. Validation summary

| Domain | Flag | Note |
|---|---|---|
| Terrain / CFIT | 🟥 | Field sits at the eastern edge of the Alpine chain; terrain rises sharply to the north/west — see §3.1. |
| Runway length vs fleet perf | 🟩 | 3,300 m TORA and 2,574–2,948 m LDA (direction-dependent) are non-limiting for narrowbody and typical widebody operations at this stage length; confirm the RWY 18 LDA (2,574 m, shorter of the two) against the specific type in OM B. |
| Approach availability / minima | 🟧 | CAT II/III exists **only on RWY 36**; RWY 18 has no precision approach found — a single-direction low-vis capability, not full-field redundancy. |
| Airspace / traffic / control | 🟩 | Moderate traffic, radar environment; joint civil/military field adds a test-flight traffic mix. |
| Weather / seasonal hazard | 🟥 | Po Valley radiational/advection fog (Oct–Mar) under stable high pressure and inversions, compounded by Alpine-proximity terrain and possible mountain-wave effects — see §3.4/§14. |
| Curfew / slots / hours | 🟥 | **IATA Level 3** slot-coordinated (Assoclearance) **and** a night movement restriction (23:00–06:00 local, with exceptions) — see §6/§12. |
| RFF category vs our types | 🟧 | CAT 9 — cross-check against current fleet requirement via OM B; sourced to an older AIP cycle. |
| Fuel availability | 🟧 | Multiple suppliers historically listed (not H24 across the board); not independently re-confirmed. |
| Customs / handling / security | 🟧 | H24 customs per the reachable AIP cycle; multi-agent handling historically listed; neither independently re-confirmed against current operator data. |

---

## 3. Threat & Error Management (TEM)

### 3.1 CFIT / Terrain 🟥
Turin sits in the Po Valley immediately south/east of the Alpine chain, which arcs around the north, west and southwest of the field via the Graian and Cottian Alps. Area-chart MSA sectors around the field's on-field CSL VOR step up sharply from around 3,600 ft in the southern/eastern quadrant to well over 12,000–15,000 ft toward the north and northwest — a direct reflection of the mountains' proximity. Named peaks in that quadrant include **Rocciamelone** (3,538 m / 11,608 ft, Graian Alps, roughly WNW of the field via the Susa valley) and **Gran Paradiso** (4,061 m / 13,323 ft, further NW) — both far above any normal arrival, departure or missed-approach altitude on the field's northern/western side. This is the field's genuine CFIT story: fly the charted MSA and STAR/SID tracks precisely, especially during a missed approach or any vectoring in marginal weather toward the high ground — never accept an off-track shortcut to the north or west below the charted safe altitude.

### 3.2 Airborne conflict / traffic 🟩
Traffic density is moderate compared with a major hub. The field is a **joint civil/military aerodrome** — Leonardo (formerly Aeritalia/Alenia) operates flight-test and production activity from North and South plants on the airfield, adding a test/military traffic mix to the radar picture. Approach control has historically been "Torino Approach"; current public cross-checks indicate the function may now sit with **Milano ACC/Radar** — confirm the current-AIRAC sectorisation before planning. See [Airspace — Europe general](../../../../airspace/europe.md) pending a dedicated Milano (LIMM) FIR brief.

### 3.3 Runway excursion 🟧
The single runway is displaced at both ends — **RWY 18 DTHR 726 m, RWY 36 DTHR 352 m** — which is why the two directions' LDA (2,574 m and 2,948 m respectively) differ materially from the 3,300 m physical/TORA length; this is a **displaced-threshold effect, not a distance-usability issue**, but it must be briefed per direction. The RWY 36-end strip is also noted (older AIP-era remark) to contain a **runway-arresting cable and plinths** — a military-heritage feature — verify current NOTAM status before any operation near that end. The preferential-runway tailwind thresholds (7 kt dry / 5 kt wet) mean a late wind shift close to those limits is a realistic runway-change trigger; braking action reported as "poor" removes the preferential-runway logic entirely.

### 3.4 Weather threat 🟥
**Po Valley radiational and advection fog**, typically October–March under stable high-pressure ridging and low-level temperature inversions, is the field's defining weather hazard — the same basin-fog phenomenon documented across northern Italy's Po plain. The mitigation is **CAT II/III on RWY 36 only** — a fog event coinciding with a wind state favouring RWY 18 removes precision-approach capability entirely at this single-runway field. The Alpine proximity additionally raises a **mountain-wave/rotor turbulence** consideration on days with strong northerly or north-westerly flow over the mountains — see [`OM E — Adverse Weather and Windshear`](../../../../../flight-ops/adverse-weather-and-windshear.md). See also §14.

### 3.5 Operational considerations 🟧
Three durable constraints shape planning here: (1) **IATA Level 3 slot coordination** (national coordinator Assoclearance) means schedule integrity has real network consequences; (2) a **night movement restriction (23:00–06:00 local)**, with exceptions for pre-2300 delayed flights, humanitarian/emergency/rescue flights, and Chapter-3/noise-certified propeller and turboprop aircraft — see §6/§12; and (3) because this is a **single-runway field**, any RWY 36 ILS/lighting/navaid outage removes the **only** precision-approach direction outright — a materially different risk profile from a multi-runway field, with no same-field fallback beyond circling/visual.

---

## 4. Cautions & Warnings

- **Single runway (18/36), no redundancy** — an RWY 36 ILS/lighting/navaid outage removes the field's only precision-approach direction; there is no alternate runway to fall back to on-field.
- **Terrain rises quickly to the north and west** (Alpine chain, peaks above 3,500–4,000 m within a comparatively short distance) — respect MSA rigorously on any go-around or vectored approach in weather.
- **RWY 36-end strip reportedly contains a runway-arresting cable/plinth installation** (military-heritage feature) — verify current status via NOTAM before any operation near that area. 🟧
- **Po Valley fog (Oct–Mar)** can drop the field below CAT I minima; if the operative wind favours RWY 18, there is **no precision-approach direction available** at all.
- **Charted magnetic anomaly zone** — cross-check compass/heading indications, particularly relevant given the older-cycle magnetic variation data (§1).
- **Night movement restriction 23:00–06:00 local** — do not plan a schedule that relies on a late arrival or departure without buffer.
- **Joint civil/military field** — expect test-flight and military traffic mixed into the circuit/radar picture.

---

## 5. Aerodrome category, restrictions & crew qualification

- **Special-airport / category:** Not found to be ENAC-categorised as a restricted-crew "special airport" in reachable sources; the standing crew-briefing items are the **Alpine-terrain proximity** and the **single-direction (RWY 36-only) low-visibility capability**. 🟧
- **Crew-qualification gate:** CAT II/III currency required for low-vis operations on RWY 36; special aircrew and aircraft certification is called out for CAT II/III operations in reachable chart-derived material — confirm current requirement. 🟧
- **Operating restrictions / bans:** Night movement restriction **23:00–06:00 local** (exceptions: flights scheduled before 23:00 subject to delay; humanitarian/emergency/rescue flights; jet aircraft complying with Chapter 3, or propeller/turboprop aircraft with noise certification). An older AIP cycle also records training flights forbidden 22:00–05:00 and constrained 05:00–22:00 — verify current applicability to scheduled commercial ops. 🟥
- **Overflight / entry / permits:** Standard EU/Schengen international arrival; no special state permit required. 🟩
- **Operations notes:** ANSP — **ENAV S.p.A.** (Torino Tower on-field H24; approach control per §3.2/§8). Airport operator — **SAGAT S.p.A.** Slot coordinator — **Assoclearance** (national coordinator for Italian coordinated airports). Joint civil/military field with Leonardo (Aeritalia/Alenia legacy) flight-test plants on the airfield.

---

## 6. General / hours / services

| Item | Value | Flag |
|---|---|---|
| ATS hours | Tower H24; Ground historically 0600–2200 LT (HX); Approach H24 (function now cross-checked as possibly provided by Milano ACC — verify) | 🟧 |
| AD operating hours | Aerodrome administration H24; scheduled ops subject to the night movement restriction (§12) | 🟥 |
| Night / curfew restrictions | **23:00–06:00 local** movement restriction, with exceptions (§5/§12) | 🟥 |
| RFF category | **CAT 9 ICAO** | 🟧 |
| Fuel | Jet A-1 historically multi-supplier (ENI, Kuwait Petroleum Italia, Air BP Italia), hours not H24 across suppliers; not independently re-confirmed | 🟧 |
| PCN | Runway PCN 115/F/B/X/T (asphalt); Main apron PCN 114/R/A/X/T; Kilo apron PCN 119/R/A/X/T; GA apron strength NIL | 🟧 verify current |
| Customs | H24 per reachable AIP cycle; not independently re-confirmed | 🟧 |
| Handling / FBO | SAGAT Handling (confirmed still operating per operator site); historically also Aviapartner, ESAIR Handling, TEAM S.r.l. and others — current roster not independently confirmed | 🟧 |

---

## 7. Runways & declared distances

| RWY | Dimensions | Surface / PCN | TORA | TODA | ASDA | LDA | Notes |
|---|---|---|---|---|---|---|---|
| 18 | 3,300 × 60 m | Asphalt / PCN 115/F/B/X/T | 3,300 m | 3,750 m | 3,300 m | 2,574 m | DTHR 726 m from physical threshold; no precision approach found; RESA 120 × 150 m; strip 3,420 × 300 m; clearway 450 × 150 m |
| 36 | 3,300 × 60 m | Asphalt / PCN 115/F/B/X/T | 3,300 m | 3,600 m | 3,300 m | 2,948 m | DTHR 352 m from physical threshold; ILS CAT II/III + VOR + NDB approaches; **preferential runway** (§1); RESA 240 × 150 m; strip 3,420 × 300 m; clearway 300 × 150 m; OFZ applies; runway-arresting cable/plinth reported within strip near this end 🟧 |

*Source: AIP Italia, AD 2 LIMF §2.10–2.13 (reachable extract carries an amendment cycle dated 2008); LDA figures are internally consistent with TORA minus each runway's displaced threshold. Cross-checked against OurAirports and SkyVector runway data (consistent). All distances in metres. Treat exact current-cycle PCN/RESA/clearway figures as needing a live-AIRAC cross-check. Runway reference code (ICAO Annex 14): **4E**.*

---

## 8. Communications

| Service | Callsign | Frequency | Hours | Notes |
|---|---|---|---|---|
| ATIS | Torino Terminal Information | 120.475 (also reported 120.480) | H24 (assumed) | 🟧 |
| Ground | Torino Ground | 121.700 | Historically 0600–2200 LT (HX) — verify current | 🟧 |
| Tower | Torino Tower | 118.500 | H24 | |
| Approach | Historically "Torino Approach" 121.100 / 129.275 | H24 (assumed) | 🟧 current sources (2024 cross-check) suggest the function may now be provided by **Milano Radar** on 129.275/125.275 — not independently re-confirmed against current AIRAC |
| Centre / FIR | **Milano ACC (LIMM)** | Per current AIRAC | H24 | 🟧 No dedicated Milano (LIMM) FIR brief exists yet in this tree — see [Airspace — Europe general](../../../../airspace/europe.md) in the interim |

*Source: AIP Italia AD 2 LIMF §2.17/2.18 (2008–2011-era extract) cross-checked against OurAirports frequency data and a 2024 public operational comment noting the approach-control reassignment to Milano ACC. Treat exact current frequencies/sectorisation as 🟧 pending a live-AIRAC cross-check.*

---

## 9. Navaids

| Aid | Ident | Freq | Hours | Notes |
|---|---|---|---|---|
| ILS/LOC (+ DME) RWY 36 | ITOC | 108.7 | H24 | CAT II/III; special aircrew/aircraft certification required 🟧 |
| VOR/DME | CSL (Caselle) | 116.75 | H24 (assumed) | On-field |
| NDB (Locator) | CAS | 357 kHz | H24 (assumed) | Associated with the RWY 36 ILS/NDB approach |
| VOR/DME | TOP (Torino) | 114.5 / 392.5 | H24 (assumed) | ~19 NM from the field; en-route/STAR transition aid, not an on-field approach aid |
| VOR/DME | BLA (Biella) | 116.10 | H24 (assumed) | ~30 NM; used in STAR/transition routings |
| NDB | ABN | 420 kHz | H24 (assumed) | Used in STAR routings (e.g. ABN-named arrivals) — exact siting not independently confirmed 🟧 |

*Idents/frequencies sourced to the reachable AIP Italia extract and cross-checked against SkyVector/OurAirports navaid data (consistent for CSL, TOP, BLA). Long-lived on-field infrastructure, but not independently re-confirmed against a current AIRAC cycle.*

---

## 10. Arrival

- **Transition altitude / level:** Transition altitude reported as 6,000 ft in reachable chart-derived material; transition level by ATC/QNH — not independently confirmed from a primary AIP table this pass. 🟧
- **Speed:** Standard 250 KIAS below FL100 (EU/ICAO norm); further speed gates reported for the terminal area (down to 160 KT approaching the threshold) — verify current chart.
- **Preferential runway logic:** RWY 36 preferred for landing subject to the tailwind thresholds in §1 (≤7 kt dry / ≤5 kt wet); RWY 18 used when wind or braking action dictates otherwise.
- **Approaches (names only — verify minima on current AIRAC charts):**

| RWY | Approach | IAF | FAF/FAP alt | Notes |
|---|---|---|---|---|
| 36 | ILS (CAT II/III, ITOC); VOR; NDB(Locator) | Per current chart | Per current chart | CAT II/III — special aircrew/aircraft certification required 🟧 |
| 18 | No precision approach found in reachable sources | — | — | Circling/visual only assumed — verify current AIRAC 🟧 |

- **STARs (names only — verify current AIRAC):** Arrival names reported in reachable chart-derived material include routings referencing **ANAKI**, **LAGEN**, **ABN**, **CSL**, **KUMIN**, **GEN**, **LEV**, **ODINA**, **SIRLO**, **SRN**, and **VEROB**-named transitions/STARs to RWY 36 — pull the live current-AIRAC STAR list before use; names not verified against a primary AIP table this pass. 🟧
- **LVP:** Activation reported at RVR 550 m at the touchdown zone or ceiling below 200 ft in the approach sector (chart-derived, not independently confirmed against a primary AIP table) — verify current trigger values. 🟧
- **Missed approach watch-items:** Terrain to the north/west is the operative missed-approach concern (§3.1) — do not turn off the charted missed-approach track toward high ground; re-sequencing density is otherwise moderate.

---

## 11. Departure

- **SIDs (names only — fly the charted version):** Departure names reported in reachable chart-derived material include **SIRLO**-, **TOP**-, **ASTIG**-, **ABESI**-, **CANNE**-, **IXUSA**-, **GEN**- and **KUKEV**-named SIDs/transitions from RWY 18/36 — pull the live current-AIRAC SID list before use; names not verified against a primary AIP table this pass. 🟧
- **RNP / climb-gradient requirements:** Reachable chart-derived material references minimum climb gradients materially steeper than standard (on the order of 5–8%) for some RNAV departure routings — a real gradient consideration for a loaded departure; verify exact current-chart gradient and equipage requirement before planning. 🟧 See [`OM E — PBN and RNP Operations`](../../../../../flight-ops/pbn-and-rnp-operations.md).
- **Take-off minima:** Published per AIP; exact figures not confirmed this pass. 🟧
- **Start-up / push-back:** Push-back approved by Torino Tower; push-back reported to be performed heading south at some stands — confirm current local procedure. 🟧
- **ATC slot / CTOT & clearance:** **IATA Level 3 slot-coordinated** (national coordinator **Assoclearance**); EUROCONTROL Network Manager ATFM/CTOT regulation applies as standard practice for a coordinated EU field. 🟧
- **De-icing:** Availability/season/procedure not confirmed from a primary source this pass — assume a Central European de-icing season (roughly Oct–Apr) pending confirmation. 🟧 See [`OM E — Cold Weather Operations`](../../../../../flight-ops/cold-weather-operations.md).

---

## 12. Noise & Environmental

- **Noise abatement (NAP):** RWY 18 use is limited to ATC requirement specifically to reduce noise over the neighbourhood south of the airport; pilots may request RWY 18 for take-off or landing for weather/technical/safety reasons, subject to possible delay. A three-tier noise-zoning scheme (Areas A/B/C, approved 2013 by the Airport Noise Commission under Italian Ministerial Decree 31/10/97) governs land-use and noise thresholds around the field.
- **Night noise / dB limits:** Governed primarily through the night movement restriction (23:00–06:00 local) rather than a published per-movement dB limit in reachable sources. 🟧
- **Engine run-up restrictions:** Reported forbidden 14:00–16:00 local and 23:00–06:00 local except for aircraft to be immediately utilised; idle-only runs at parking stands, with any test exceeding idle requiring prior coordination with the local CAA. 🟧 not independently confirmed against a primary AIP table this pass.
- **Reverse thrust / idle-reverse policy:** Reverse reported limited to idle thrust except for provable safety reasons; between 23:00–06:00 local, landing aircraft are reported expected to use the full available runway length to reach the apron rather than use reverse thrust above idle, where landing performance allows. 🟧 not independently confirmed against a primary AIP table this pass.

---

## 13. Ground operations

- **Stands for our types:** Main Apron and Kilo (K) Apron are the principal aircraft-parking areas; taxiway/taxilane wingspan constraints have been reported on some Main Apron taxilanes (on the order of 36–38 m) — narrower than full Code E (up to 65 m) — confirm current wingspan limits before planning any larger Code E movement on those taxilanes. 🟧 | 🟧
- **Push-back:** Push-back reported mandatory for certain stands and for aircraft exceeding a wingspan threshold on others; approved by Torino Tower. 🟧
- **Standard taxi routes:** Confirm with Ground/Tower on the day; a taxiway (reported as TWY D) has been noted as usable only by ICAO Code A/B aircraft — not relevant to K Global widebody/narrowbody types but worth being aware of for ramp-area routing. 🟧
- **Hot spots / tight taxiways:** A charted ground hot spot ("HS1") is referenced in reachable chart-derived material; exact location not resolved from this research pass — verify current aerodrome chart. 🟧
- **Follow-me:** Follow-me assistance reported mandatory for certain stands/aprons (e.g. Kilo Apron, GA Apron) and during Low Visibility Procedures — confirm current requirement. 🟧

---

## 14. Weather & seasonal (durable)

- **Climate / prevailing wind:** Temperate climate in the Po Valley at the foot of the Alps; warm summers, cold winters, partly cloudy year-round.
- **Seasonal hazards:** **Po Valley radiational/advection fog**, principally October–March, forming under stable high-pressure conditions and low-level temperature inversions, associated mainly with weak westerly/north-westerly flow — a well-documented regional phenomenon across northern Italy. Winter also implies a de-icing season (exact months/provisioning not confirmed this pass, §11). Alpine proximity raises a mountain-wave/turbulence consideration in strong northerly/north-westerly flow aloft.
- **Local effects:** Basin/valley fog is the standout local effect; terrain-channelled wind effects near the Alpine foothills are plausible but not quantified in reachable sources this pass. 🟧

> **Live weather — pull at planning (T-2h):** METAR, TAF, TREND, SIGMET/AIRMET. Not stored here.

---

## 15. NOTAMs

> **Pull at planning (T-2h).** Perishable — not stored here. Check: RWY 36 ILS/navaid status (the field's only precision-approach direction), runway/taxiway closures, RFF downgrade, GPS/RAIM for RNAV procedures, lighting, obstacle/crane, and any AUP/UUP or RAD constraints in Milano airspace. Source: official AIS / OFP NOTAM block.

---

## 16. Fuel & alternate planning notes

- **Typical role for us:** Destination on the K Global network (non-base) — exact route/frequency role not established from this pass; VAMSYS shows no base flag and no category assigned (§1). 🟧
- **Nearest suitable alternates (Company preferred, per VAMSYS):**
  - **LFLJ** (Grenoble-Le Versoud, France) — 🟧 **no K Global airport brief exists in the current tree for LFLJ.**
  - [**LIMC**](../limc/index.md) (Milano/Malpensa) — built concurrently in this same batch.
  - **LSGS** (Sion, Switzerland) — 🟧 **no K Global airport brief exists in the current tree for LSGS.**
  `[VAMSYS mirror 2026-07-26]` — confirm suitability, runway/RFF adequacy and current minima per leg regardless of brief status.
- **Fuel-uplift notes:** Jet A-1 historically multi-supplier (ENI, Kuwait Petroleum Italia, Air BP Italia), hours not H24 across all suppliers; not independently re-confirmed. 🟧 See [`OM E — Fuel Policy`](../../../../../flight-ops/fuel-policy.md).
- **Range/perf flags for our fleet:** Field length/strength non-limiting for narrowbody and typical widebody operations on RWY 36 (2,948 m LDA); RWY 18's shorter LDA (2,574 m) is the tighter case — confirm against the specific type in [`OM B — Fleet Capability Matrix`](../../../../../fleet/capability-matrix.md).

---

## 17. Fleet-specific notes (optional)

- No widebody-specific stand or performance constraint identified beyond the general RWY 18 LDA note (§16) and the taxiway wingspan caution (§13). See [`OM B — Fleet Capability Matrix`](../../../../../fleet/capability-matrix.md) for type-by-type range/performance reference. The field's operative planning considerations are the single-runway/single-direction low-vis capability and Alpine-proximity terrain rather than aircraft performance.

---

## 18. Open items (🟧 — confirm against AIP / current AIRAC)

- **Runway designation mismatch** — this pack's originating brief referenced "05/23"; every source checked (AIP Italia, OurAirports, SkyVector, Wikipedia) confirms the field's only runway is **18/36**. No evidence of a recent renumbering was found. Treat "05/23" as incorrect/superseded pending any contrary current-AIRAC evidence.
- **Magnetic variation** — sourced to a 2005.0 epoch (1° E); current-day value not independently re-confirmed; secular-drift estimate is not a sourced figure.
- **RFF category, PCN, declared distances** — sourced to an AIP cycle carrying 2008-era amendment dates; core runway geometry is very unlikely to have changed (no new runway built), but exact current-cycle figures should be cross-checked against a live AIRAC.
- **Approach control provider/frequencies** — historically "Torino Approach"; a 2024 public cross-check suggests the function may now be provided by Milano ACC/Radar — not confirmed from a primary AIP table this pass.
- **ILS sub-category (II vs IIIA/IIIB)** — reachable chart-derived material and public sources are not fully consistent (one public source cites CAT IIIB but itself flags the claim as uncited); not confirmed from a primary AIP table this pass.
- **SIDs/STARs (current names)** — named from chart-derived material, not obtained from a primary AIP table this pass; pull the live current-AIRAC procedure list before use.
- **RWY 18 approach type** — no precision approach found in reachable sources; confirm whether a non-precision/circling procedure is currently published.
- **Take-off minima, LVP exact RVR/ceiling trigger, de-icing availability/season, follow-me/hot-spot detail, taxiway wingspan limits** — none confirmed from a primary source this pass.
- **Fuel supplier(s)/hours and handling agent roster** — sourced to an older cycle; current roster not independently confirmed.
- **No dedicated Milano (LIMM) FIR brief exists yet in this tree** — see [Airspace — Europe general](../../../../airspace/europe.md) in the interim.
- **LFLJ and LSGS have no K Global airport brief anywhere in the current tree** — noted per §16; do not infer suitability without independent verification per leg.
- **K Global category and taxi-in/taxi-out** — unset/not published in VAMSYS; verify before relying on either field.

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim material (current-AIRAC charts) informs content but is not listed here.*

- **AIP Italia (ENAV), AD 2 LIMF** — reachable extract carries amendment dates from 2008–2009 (e.g. AD 2 LIMF 1-1, 18 Jun 2009; AD 2 LIMF 1-5, 04 Dec 2008) — mirrored via https://www.yumpu.com/it/document/view/15905390/1-limf-torino-caselle (retrieved 2026-07-26). ARP, elevation, magnetic variation, RFF category, runway/declared-distance data, PCN, communications, navaids, apron/handling/fuel hours, night restriction and preferential-runway logic. **Treat exact current-cycle figures (frequencies, PCN, mag-var, restriction hours) as needing a live-AIP cross-check.**
- OurAirports — https://ourairports.com/airports/LIMF/ and /runways.html and /frequencies.html (retrieved 2026-07-26). *ARP/elevation/runway/frequency cross-check.*
- SkyVector — https://skyvector.com/airport/LIMF/Torino-Caselle-Airport (retrieved 2026-07-26). *Runway/displaced-threshold/navaid cross-check; includes a 2024 public comment on the approach-control reassignment to Milano ACC.*
- Wikipedia — "Turin Airport" — https://en.wikipedia.org/wiki/Turin_Airport (retrieved 2026-07-26). *General airport description; runway/ILS-category claim flagged "citation needed" on the source itself.*
- SAGAT (airport operator) — "Airport noise" — https://www.torinoairport.com/en/sagat/group/environment/airport-noise (retrieved 2026-07-26). *Noise-zoning/commission background.*
- Assoclearance (Italian national slot coordinator) — coordinated-airport listing for Torino/Caselle (TRN) — https://www.assoclearance.it/coordinamento/aeroporti-coordinati/TRN/ (retrieved 2026-07-26). *IATA Level 3 slot-coordination status.*
- ENAC — Regolamento di Scalo, Torino (Rev. 10, 09/08/2024) — https://www.enac.gov.it/app/uploads/2024/08/Regolamento-di-Scalo_Torino.pdf (retrieved 2026-07-26). *Airport regulation framework; coordinated-airport confirmation.*
- Public search corroboration (night restriction 23:00–06:00 local, run-up/reverse-thrust notes, RWY 18 noise-limited use) — cross-checked against the AIP-derived extract above; exact source page not independently re-fetched this pass, treat as 🟧 pending primary-table confirmation.

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-26 | Built from AIP Italia (ENAV); K Global fields from live VAMSYS; 4-page pack. |
