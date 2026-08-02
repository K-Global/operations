# LIPZ — Venice/Tessera (Marco Polo) · Airport Briefing

**LIPZ / VCE** · Tessera, Venice, Veneto, Italy · Europe
**Version** v0.1 · **Updated** 2026-07-26 · **Status** Draft — AIP Italia (ENAV)-derived, cross-checked

> **Read-me:** Planning aid for the sim, not a chart. Static data is drawn from AIP Italia (ENAV eAIP) content as quoted/cross-referenced by public aviation-information sources (the ENAV eAIP portal itself is login-gated and was not directly reachable this research pass — see §18), plus standard public aeronautical data; approaches/SIDs/STARs are listed **by name only** — fly the charted current-AIRAC version. Live weather/NOTAMs are pulled at planning (§14/§15). Open 🟧 items are listed in §18. Flag legend 🟥 restriction/hazard · 🟧 caution/unverified · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| ARP (lat/long) | 45°30′19″N / 012°21′07″E (45.50528, 12.35194) |
| Field elevation | **7 ft / 2 m AMSL** — essentially sea level, on the edge of the Venice lagoon |
| Mag variation | **4° E (2020.0)**, annual increase **8′ E** — per the AIP obstacle chart cycle effective 19 Mar 2026 (AIRAC A3/26) |
| Time zone | UTC+1 (CET) / UTC+2 (CEST, EU DST observed) |
| Runway(s) | **04R/22L** 3,300 × 45 m (asphalt) — main/preferential pair · **04L/22R** ≈2,780 × 45 m (asphalt), threshold 04L displaced ≈94 m — **backup-only**, doubles as taxiway "T" when 04R/22L is active 🟧 |
| Preferential runway | **04R/22L** is the active preferential pair; ATC selects the in-use direction (04R or 22L) while tailwind component ≤10 kt. **04L/22R is not used concurrently** with 04R/22L and is reserved for maintenance/contingency on the main pair 🟧 (exact wind-selection wording not fully disambiguated from reachable sources) |
| Longest LDA | 3,300 m (04R/22L); 04L/22R shorter and displaced-threshold-affected — not independently confirmed to the metre 🟧 |
| Approaches | **ILS CAT III + RNP (LPV) on RWY 04R only**; RNP (LNAV-only) and VOR on 22L, 04L (ATC discretion) and 22R (ATC discretion) — **no precision approach on the reciprocal/parallel directions** |
| RFF category | **ICAO CAT 9** (per 2023-cycle AIP text) 🟧 |
| Control type | **Radar** — Venezia Tower/Ground on the field; **Padova ACC** ("Padova Radar") provides approach/area control (Venezia APP was disestablished Dec 2023); en-route in the **Milano FIR (LIMM)** — see [Europe airspace](../../../../airspace/europe.md) 🟧 (no dedicated Italian FIR brief exists yet in this library) |
| Elevation class | Sea-level (7 ft) — **not** hot-and-high; the defining reliability driver is **lagoon fog** and the field's single-direction CAT III capability, not density altitude |
| Special-airport status | Not ENAC-categorised as a restricted-crew "special airport" in reachable sources; the standing crew-briefing items are the **single-runway-pair operational reliance**, **CAT III limited to RWY 04R only**, and **lagoon fog** — see §5 |
| Customs / PoE | **Yes** — major international gateway; departure floor has a confirmed Schengen/non-Schengen split; exact desk hours not confirmed 🟧 |
| K Global category | **S** `[VAMSYS mirror 2026-07-26]` |
| K Global base | **No** `[VAMSYS mirror 2026-07-26]` |
| Company preferred alternates | **LIMC, LIPE, LIRF** `[VAMSYS mirror 2026-07-26]` |
| Taxi-in / taxi-out (VAMSYS) | **10 min / 12 min** `[VAMSYS mirror 2026-07-26]` |

---

## 2. Validation summary

| Domain | Flag | Note |
|---|---|---|
| Terrain / CFIT | 🟩 | Flat lagoon-edge/coastal plain; no high terrain. Temporary cranes penetrating the Inner Horizontal Surface were notified for 2026–2027 — verify current NOTAM/obstacle chart before relying on this as closed. |
| Runway length vs fleet perf | 🟧 | Main pair (04R/22L, 3,300 m) is ample for any K Global type. The backup pair (04L/22R, ≈2,780 m, displaced threshold) is meaningfully shorter and **not normally available** — never plan alternate performance assuming its routine use. |
| Approach availability / minima | 🟥 | **CAT III/LVTO is published for RWY 04R only.** The reciprocal (22L) and the backup pair (04L/22R) carry RNP-LNAV/VOR non-precision approaches only — a wind/config shift away from the 04R landing direction in low visibility is a real capability drop, not a paperwork nuance. |
| Airspace / traffic / control | 🟧 | Class D ATZ/CTR; approach/area control was consolidated into **Padova ACC** in Dec 2023 (the former dedicated Venezia APP frequency no longer exists) — verify current sectorisation. Two permanently prohibited-area pairs (over the historic city and over the Porto Marghera petrochemical complex) sit close to the circuit. |
| Weather / seasonal hazard | 🟥 | **Lagoon/coastal fog** at a near-sea-level field is the defining hazard — directly why RWY 04R carries CAT III/LVTO infrastructure while nothing else at the field does. |
| Curfew / slots / hours | 🟧 | No explicit curfew found in reachable sources; published Ground ATS hours (0500–2300L, ATC discretion overnight) imply reduced but not necessarily prohibited night activity. Slot-coordination level not confirmed. |
| RFF category vs our types | 🟩 | ICAO CAT 9 — above any K Global fleet requirement. |
| Fuel availability | 🟩 | Two named suppliers with published hours; H24 available within 90 min PN for humanitarian/state/emergency/diverted flights. |
| Customs / handling / security | 🟧 | Confirmed international gateway with a Schengen/non-Schengen terminal split; desk hours and the scheduled-carrier ground handler are not confirmed in reachable sources. |

---

## 3. Threat & Error Management (TEM)

### 3.1 CFIT / Terrain 🟩
LIPZ sits at 7 ft AMSL on reclaimed land at the edge of the Venice lagoon — flat coastal terrain with **no close-in high ground**. This is a non-issue field for terrain in the classic sense. The one live obstacle item is a set of **temporary cranes notified as penetrating the Inner Horizontal Surface** (heights up to roughly 240 ft AMSL, several kilometres north of the field, validity spanning 2026–2027) — verify current status via NOTAM/obstacle chart rather than treating this brief as the record of it (§15).

### 3.2 Airborne conflict / traffic 🟧
Traffic density is moderate rather than hub-level. Approach/area control was consolidated from a dedicated Venezia APP into **Padova ACC ("Padova Radar")** in December 2023 — crews familiar with an older "Venezia Radar" reference should expect the current Padova Radar frequencies instead. Two **permanently prohibited areas sit close to the circuit**: LI P234/A and /B over the historic city of Venice itself (south/south-west of the field) and LI P353/A and /B over the **Porto Marghera petrochemical complex** (also south-west) — both are no-fly zones for civil traffic except aircraft engaged in LIPZ's own instrument procedures. Track discipline near these zones matters more here than raw traffic count. Cross-ref [Europe airspace](../../../../airspace/europe.md) 🟧 (Milano FIR/Padova ACC relationship not independently confirmed from a primary source this pass; no dedicated Italian FIR brief exists yet in this library).

### 3.3 Runway excursion 🟧
RWY 04R/22L (3,300 m) is non-limiting for any K Global type. The backup pair, RWY 04L/22R, is shorter (≈2,780 m with the 04L threshold displaced by roughly 94 m) and is used only for maintenance/contingency on the main pair — **never plan it as routinely available length**. Runway-occupancy discipline is actively enforced: arriving traffic on 04R/22L must vacate no later than a named taxiway (TWY F for 04R, TWY C for 22L), and on 04L/22R no later than TWY K (04L) or TWY P (22R) — extended occupancy risks interrupting the next approach on this effectively single-runway operation.

### 3.4 Weather threat 🟥
**Lagoon and coastal fog at a near-sea-level field** is LIPZ's signature hazard — the direct reason RWY 04R (and only RWY 04R) carries ILS CAT III, LVTO approval, and an aerodrome operating minimum down to RVR 75 m. Low Visibility Procedures activate on RVR ≤550 m and/or cloud base <200 ft (or on a rapid deterioration trend), consistent with a field that regularly sees radiation/advection fog off the water. Because CAT III capability does not exist on the reciprocal or the backup runway, a fog event coinciding with a wind that favours 22L (or forces use of 04L/22R) is a genuine diversion-risk combination, not merely an inconvenience. See §14.

### 3.5 Operational considerations 🟥
Three durable planning constraints define this field: (1) **CAT III/LVTO exists on RWY 04R only** — brief the non-precision fallback (RNP-LNAV/VOR) explicitly for any other runway/direction; (2) the field is functionally a **single active runway pair** (04R/22L), with 04L/22R held in reserve and doubling as a taxiway when the main pair is active — plan schedule buffer around any main-pair disruption rather than assuming a ready parallel; (3) the airport sits directly on the lagoon edge with **published bird-concentration mapping** and two permanent city/industrial prohibited zones close to the circuit — a lagoon-wildlife/bird-strike consideration is a realistic addition to the fog threat, not a separate afterthought. RFF (CAT 9) and fuel supply are first-tier; most open items in §18 are currency/administrative confirmations rather than safety-critical gaps.

---

## 4. Cautions & Warnings

- **CAT III and LVTO exist on RWY 04R only** — never assume the reciprocal (22L) or the backup pair (04L/22R) carries the same low-visibility capability.
- **04L/22R is backup/contingency-only** and doubles as taxiway "T" when 04R/22L is active — do not plan on it as a routinely available second runway.
- **Lagoon fog can develop with limited warning** at this near-sea-level, water-adjacent field — check current LVP status before planning a marginal-weather arrival.
- **Two permanent prohibited-area pairs** (over the historic city, and over the Porto Marghera petrochemical zone) sit close to the circuit, south/south-west of the field.
- **Published bird-concentration chart** exists for the aerodrome vicinity — a lagoon-edge wildlife/bird-strike consideration.
- **Intersection take-offs and runway-occupancy vacate points are runway-specific** (see §7/§13) — confirm the assigned intersection/exit rather than assuming full-length/nearest-exit use.
- **Approach/area control moved from a dedicated Venezia APP to Padova ACC in Dec 2023** — do not brief an outdated "Venezia Radar" expectation.

---

## 5. Aerodrome category, restrictions & crew qualification

- **Special-airport / category:** Not ENAC-categorised as a restricted-crew special airport in reachable sources; the standing crew-briefing items are the **single-direction CAT III/LVP environment** and the **single-active-runway-pair** operational model. 🟧
- **Crew-qualification gate:** CAT II/III currency required for a low-visibility arrival on RWY 04R; confirm crew/aircraft currency before planning any marginal-weather approach, and brief explicitly that no CAT III fallback exists if the wind/config forces 22L or the backup pair. 🟧
- **Operating restrictions / bans:** No RNP AR restriction or circling ban found in reachable sources — verify current AIRAC. 🟧 A general-aviation PPR regime applies to non-scheduled GA/air-taxi traffic (not applicable to scheduled commercial operations).
- **Overflight / entry / permits:** Standard EU/Schengen and non-Schengen international arrival; VFR overflight of Venice and neighbouring built-up areas below 3,000 ft is prohibited (VFR-specific, non-binding on our IFR operation but useful situational awareness). 🟩
- **Operations notes:** Airport operator — **SAVE S.p.A.** (also operates Treviso Airport). Regulator — **ENAC, DT Nord-Est**, based on the field. Approach/area control — **Padova ACC**; en-route — **Milano FIR (LIMM)**.

---

## 6. General / hours / services

| Item | Value | Flag |
|---|---|---|
| ATS hours | Tower H24; Ground published 0500–2300L (0400–2200Z), ATC discretion overnight | 🟧 |
| AD operating hours | Not confirmed in reachable sources — Tower H24 suggests near-continuous availability | 🟧 |
| Night / curfew restrictions | No explicit curfew found; overnight Ground service is at ATC discretion rather than guaranteed | 🟧 |
| RFF category | **ICAO CAT 9** | 🟧 |
| Fuel | Jet A-1 — **Levorato Marcevaggi S.r.l.** (540,000 L / 9 tankers) and **Carboil S.r.l.** (≈394,000 L / 8 tankers); published hours 0500–2100L, H24 within 90 min PN for humanitarian/state/hospital/emergency/diverted flights | 🟩 |
| PCN | Not confirmed in reachable sources | 🟧 |
| Customs | International gateway with Schengen/non-Schengen terminal split confirmed; exact desk hours not confirmed | 🟧 |
| Handling / FBO | Scheduled-carrier ground handler not confirmed in reachable public sources; named GA/business-aviation handlers (SAVE Venice General Aviation, Sky Services, Argos V.P.H.) serve PPR-based non-scheduled traffic, not necessarily representative of scheduled-carrier handling | 🟧 |

---

## 7. Runways & declared distances

| RWY | Dimensions | Surface / PCN | TORA | TODA | ASDA | LDA | Notes |
|---|---|---|---|---|---|---|---|
| 04R | 3,300 × 45 m | Asphalt / PCN not confirmed 🟧 | 3,300 m (INT TKOF 'B' 3,170 m and 'C' 2,290 m available on request) | Not confirmed 🟧 | Not confirmed 🟧 | 3,300 m | Main/preferential; ILS CAT III + ALS CAT II/III (900 m) + PAPI 3°; between 2100–0500L departures must use INT TKOF 'C' unless unable; vacate no later than TWY F |
| 22L | 3,300 × 45 m | Asphalt / PCN not confirmed 🟧 | 3,300 m (INT TKOF 'H' 2,650 m available) | Not confirmed 🟧 | Not confirmed 🟧 | 3,300 m | Reciprocal of 04R; SALS (420 m) + PAPI 3.2°; **no ILS on this direction**; vacate no later than TWY C |
| 04L | ≈2,780 m × 45 m (source discrepancy: one public source gives 2,738 m — not independently reconciled) 🟧 | Asphalt / PCN not confirmed 🟧 | ≈2,780 m (INT TKOF 'S' 2,420 m available) | Not confirmed 🟧 | Not confirmed 🟧 | Reduced by the ≈94 m displaced threshold — exact figure not confirmed 🟧 | **Backup/contingency-only** — doubles as TWY "T" when 04R/22L active; SALS (660 m) + PAPI 3.2°; vacate no later than TWY K |
| 22R | ≈2,780 × 45 m | Asphalt / PCN not confirmed 🟧 | ≈2,780 m (INT TKOF 'K' 2,040 m and 'TURN PAD' 2,600 m available) | Not confirmed 🟧 | Not confirmed 🟧 | ≈2,780 m, not independently confirmed 🟧 | **Backup/contingency-only**; SALS (420 m) + PAPI 3.2°; vacate no later than TWY P |

*04R/22L and 04L/22R cannot be used simultaneously — the AIP treats them as a single active-runway system with 04L/22R held for maintenance/contingency on the main pair. Runway magnetic orientation is approximately 039°/219° (04-side/22-side). Declared-distance figures above are cross-checked across multiple public aviation-information sources quoting current AIRAC amendments, not read directly from the ENAV eAIP portal (login-gated) this pass — treat TORA/TODA/ASDA gaps and the 04L/22R length discrepancy as 🟧 pending direct primary confirmation.*

---

## 8. Communications

| Service | Callsign | Frequency | Hours | Notes |
|---|---|---|---|---|
| ATIS | Venice Arrival and Departure Information | 128.655 (per most current cross-checked source; some aggregator listings show 122.225 — discrepancy, likely stale) 🟧 | H24 | 8.33 kHz channel spacing |
| Delivery | Venezia Delivery | 118.255 | At ATC discretion | Availability announced via ATIS or on 131.480 ("Aerodrome Operations") |
| Ground | Venezia Ground | 121.705 (also 118.255 at ATC discretion) | 0500–2300L (0400–2200Z); ATC discretion 2300–0500L | 8.33 kHz channel spacing |
| Tower | Venezia Tower | 120.200 (H24); 118.255 at ATC discretion | H24 | |
| Approach | Padova Radar | 118.900 / 120.725 (additional sector 134.750 reported) | H24 | Provided by **Padova ACC** — dedicated Venezia APP was disestablished Dec 2023 🟧 |
| Centre / FIR | Milano ACC (LIMM), delegated locally to Padova ACC | Per current AIRAC | H24 | See [Europe airspace](../../../../airspace/europe.md) 🟧 — no dedicated Italian FIR brief exists yet in this library; Padova/Milano ACC delegation relationship not independently confirmed from a primary source this pass |

*A "Venezia Gonio Homer" (VDF, 120.20 MHz) formerly listed for this field was decommissioned in 2024 — do not brief it as current.*

---

## 9. Navaids

| Aid | Ident | Freq | Hours | Notes |
|---|---|---|---|---|
| ILS | VTS | Not confirmed in reachable sources 🟧 | H24 | Serves **RWY 04R only** — CAT III (upgraded from CAT IIIB in 2023); aerodrome operating minimum RVR 75 m |
| VOR/DME | TES (Tessera) | Not confirmed in reachable sources 🟧 | H24 | On/near field; final-approach and SID/STAR radial reference for LIPZ procedures |
| VOR/DME | CHI (Chioggia) | 114.10 (CH88X) | H24 | Used throughout LIPZ STAR/SID/holding structure |
| VOR/DME | VIC | 113.40 (CH81X) | H24 | Used in several LIPZ SID/STAR routings |

*The NDB "CHI" (408 kHz) formerly associated with this navaid pairing was decommissioned in 2021 — do not brief it as current.*

---

## 10. Arrival

- **Transition altitude / level:** TA **6,000 ft**; TL varies by QNH (lower QNH → higher TL) — verify exact banding on current chart. 🟧
- **Speed:** Standard 250 KIAS below FL100; radar-vectored traffic reduces further on approach (200 kt at the LOC/radial-intercept turn or 12 NM straight-in, 180 kt at 8 NM/LOC-intercept completion, 160 kt inside 5 NM from the threshold/TDZ) — pointers only, verify current chart.
- **Preferential runway logic:** RWY 04R/22L is the active preferential pair; ATC selects the in-use direction while tailwind component stays ≤10 kt. RWY 04L/22R is not used concurrently and is reserved for maintenance/contingency.
- **Approaches (names only — verify minima on current AIRAC charts):**

| RWY | Approach | IAF | Notes |
|---|---|---|---|
| 04R | ILS or LOC (multiple chart variants Y/Z/X/W), RNP (LPV/LNAV), VOR | LAREN / AKADO | **Only runway direction with a precision (CAT III) approach**; RVR min 75 m |
| 22L | RNP (LNAV only), VOR | LAREN / ERSAB | No ILS on this direction |
| 04L (ATC discretion) | RNP (LNAV only), VOR | LAREN / AKADO | Backup runway |
| 22R (ATC discretion) | RNP (LNAV only), VOR | LAREN / ERSAB | Backup runway |

- **STARs (names only):** **STAR RNAV1** (to IAF LAREN — from the west via ALBET, from the south via OTGIG/BASOG) and a conventional **STAR (ATC discretion)** for non-RNAV-equipped aircraft (to IAF LAREN/ERSAB via the same terminal fixes) — verify current AIRAC naming/suffix.
- **LVP:** Trigger — RVR ≤550 m and/or cloud base <200 ft (or a rapid deterioration trend). CAT III/LVTO published for RWY 04R only.
- **Missed approach watch-items:** Terrain is not the driver (flat coastal plain); the operative concerns are re-sequencing on a functionally single-runway field and respecting the prohibited-area boundaries close to the circuit during any extended vectoring.

---

## 11. Departure

- **SIDs (names only — fly the charted version):** **SID RNAV1 RWY 04R/L** and **SID RWY 04R/L (TES VOR/DME, conventional)** to terminal fixes AKADO, CHI, ROSKA, ROKIB, VIC; **SID RNAV1 RWY 22R/L** and **SID RWY 22R/L (conventional)** to the same fix family — multiple RNAV/conventional suffix variants exist per runway/ATC routing; verify the current-AIRAC index.
- **RNP / climb-gradient requirements:** Minimum climb gradients as steep as **515 ft/NM (8.5%)** on some RWY 04R/L RNAV SIDs, tapering to **425–455 ft/NM (7.0–7.5%)** on others — verify the specific gradient/equipage per assigned SID on the current chart. See [`OM E — PBN and RNP Operations`](../../../../../flight-ops/pbn-and-rnp-operations.md).
- **Take-off minima:** Not confirmed in reachable sources — verify current AIRAC. 🟧
- **Start-up / push-back:** Push-back/start-up clearance must be obtained from Venezia TWR/GND before commencing; APU use is limited to 5 minutes before TOBT for engine start, or up to 60 min before departure / 20 min after arrival if fixed/mobile ground power is unavailable. 🟧 (cross-checked via a network-sim operational reference, not independently AIP-confirmed this pass)
- **ATC slot / CTOT & clearance:** Slot-coordination level not confirmed in reachable sources. 🟧 Departure clearance is typically requested ahead of start-up per local practice — verify current procedure.
- **De-icing:** Availability/season not confirmed in reachable public sources 🟧 — Venice's maritime, near-sea-level setting makes de-icing a lower-probability requirement than at Alpine/continental Italian fields, but presence and procedure are not confirmed. See [`OM E — Cold Weather Operations`](../../../../../flight-ops/cold-weather-operations.md).

---

## 12. Noise & Environmental

- **Noise abatement (NAP):** No specific NADP or preferential noise-routing procedure confirmed for LIPZ scheduled-carrier departures in reachable sources this pass. 🟧
- **Night noise / dB limits:** Not confirmed in reachable sources. 🟧
- **Engine run-up restrictions:** Not confirmed in reachable sources. 🟧
- **APU / single-engine taxi recommendation:** Single-engine taxi into/out of the apron is recommended where possible; four-engine (Code F) aircraft are required to shut down or idle the outboard engines on the apron. 🟧 (network-sim operational reference, not independently AIP-confirmed)

---

## 13. Ground operations

- **Stands for our types:** Visual Docking Guidance System (VDGS) confirmed at stand 433 and stands 322–330; wider stand/gate allocation for widebody Code E types not confirmed in reachable sources. 🟧
- **Push-back:** Mandatory ATC approval (Venezia TWR/GND) before commencing push-back at the main apron; pilot/handling-operator responsibility during the manoeuvre.
- **Standard taxi routes:** When RWY 04R/22L is the active runway, **RWY 04L/22R itself is used as taxiway "T"** — confirm this dual-use routing with Ground before taxi. Runway-vacate discipline is enforced by named exits (§7).
- **Hot spots / tight taxiways:** 🟥 Taxiway **Y** is restricted to Aeronavali (MRO) traffic only; taxiways **KA** and **KB** are restricted to Polizia di Stato and Vigili del Fuoco/Guardia di Finanza respectively — do not plan routine commercial taxi through these.
- **Follow-me:** Availability not confirmed in reachable sources; radio-failure ground procedures reference follow-me support for both arriving and departing traffic. 🟧

---

## 14. Weather & seasonal (durable)

- **Climate / prevailing wind:** Temperate Mediterranean/humid-subtropical coastal climate at the edge of the Venice lagoon.
- **Seasonal hazards:** **Lagoon and coastal fog** — the field's defining hazard, and the direct reason RWY 04R (and only RWY 04R) carries CAT III/LVTO infrastructure down to RVR 75 m. No LIPZ-specific fog-day statistic was found in reachable sources this pass; treat as the standing seasonal risk consistent with the published LVP trigger (RVR ≤550 m / cloud base <200 ft). 🟧
- **Local effects:** Lagoon-edge location also brings a **published bird-concentration hazard** in the aerodrome vicinity — a wildlife/bird-strike consideration alongside the fog risk.

> **Live weather — pull at planning (T-2h):** METAR, TAF, TREND, SIGMET/AIRMET. Not stored here.

---

## 15. NOTAMs

> **Pull at planning (T-2h).** Perishable — not stored here. Check specifically: runway/taxiway closures and the 04R/22L ↔ 04L/22R active-configuration status, ILS/CAT III equipment status, navaid U/S (confirm VTS ILS and TES/CHI/VIC VOR/DME status), lighting, obstacle/crane notices (a multi-crane obstacle supplement near the field was current through 2026–2027 at last check — verify), RFF downgrade, GPS/RAIM for RNP procedures, and the status of ongoing apron/manoeuvring-area works implementing new low-visibility taxi routes. Source: official AIS / OFP NOTAM block.

---

## 16. Fuel & alternate planning notes

- **Typical role for us:** Destination — not a K Global base. `[VAMSYS mirror 2026-07-26]`
- **Nearest suitable alternates:** Company preferred alternates [**LIMC**](../limc/index.md) (Milan Malpensa), [**LIPE**](../lipe/index.md) (Bologna), [**LIRF**](../lirf/index.md) (Rome Fiumicino) `[VAMSYS mirror 2026-07-26]` — confirm suitability, runway/RFF adequacy and current minima per leg.
- **Fuel-uplift notes:** Jet A-1 via Levorato Marcevaggi S.r.l. and Carboil S.r.l., published hours 0500–2100L with H24/90-min-PN provision for qualifying flight categories. See [`OM E — Fuel Policy`](../../../../../flight-ops/fuel-policy.md).
- **Range/perf flags for our fleet:** Main runway pair (3,300 m) is non-limiting for any K Global type; the shorter backup pair is not routinely available. See [`OM B — Fleet Capability Matrix`](../../../../../fleet/capability-matrix.md) for type-by-type range/performance reference.

---

## 17. Fleet-specific notes (optional)

- No field-length or field-elevation performance penalty is expected for any K Global type on the main runway pair (04R/22L, 3,300 m). The operative planning consideration for every type is the **single-direction CAT III/LVP capability** and the **functionally single active-runway-pair** model, rather than aircraft performance. See [`OM B — Fleet Capability Matrix`](../../../../../fleet/capability-matrix.md).

---

## 18. Open items (🟧 — confirm against AIP / current AIRAC)

- **ENAV eAIP direct access** — the official eAIP Italia portal is login-gated/subscription and was not directly reachable this research pass; all figures above are cross-checked across multiple public aviation-information sources quoting current AIRAC amendment text, not read from the primary source document itself.
- **04L/22R exact declared distances** — one public source gives 2,738 m, another (with a stated 94 m displaced threshold) implies a different figure; not reconciled to the metre.
- **PCN (all runways)** — not found in reachable sources.
- **ILS (VTS) and VOR/DME (TES) frequencies** — idents confirmed, frequencies not found in reachable sources.
- **ATIS frequency** — most current cross-check gives 128.655; an older aggregator listing shows 122.225 — discrepancy not resolved.
- **Slot-coordination level, AD operating hours, and any curfew** — not confirmed in reachable sources.
- **Scheduled-carrier ground handling agent** — not confirmed; only PPR-based GA/business-aviation handlers are documented by name.
- **Customs/immigration desk hours** — not confirmed.
- **De-icing availability/season, take-off minima, NADP/noise-abatement procedure, engine run-up restriction** — none confirmed in reachable sources.
- **Milano FIR (LIMM) ↔ Padova ACC delegation relationship** — referenced by name per this library's Europe airspace file, but the precise administrative relationship was not independently confirmed from a primary source this pass; no dedicated Italian FIR brief exists yet in this library.
- **Temporary crane obstacle supplement and low-visibility taxi-route construction works** — both were current at last check (validity windows extending into 2026–2027); re-verify via NOTAM as these may have since expired or changed phase.

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim material (current-AIRAC charts, the login-gated ENAV eAIP portal) informs content but is not listed here.*

- OurAirports — https://ourairports.com/airports/LIPZ/ and /runways.html and /frequencies.html (retrieved 2026-07-26). *ARP/elevation/runway/frequency cross-check.*
- Wikipedia — "Venice Marco Polo Airport" — https://en.wikipedia.org/wiki/Venice_Marco_Polo_Airport (retrieved 2026-07-26). *ARP, elevation, terminal/Schengen split, operator.*
- OpenAIP — "VENEZIA / TESSERA" — https://www.openaip.net/data/airports/62614c235e9ded571044b7c6 (retrieved 2026-07-26). *Runway dimensions, ATS frequency cross-check, magnetic variation.*
- Aeronautical Information (Fabio Patrassi) — "La Control Zone di Venezia" — https://aeronauticalinformation.it/index.php/2022/09/28/la-control-zone-di-venezia/ (retrieved 2026-07-26). *ATZ/CTR structure, Padova ACC consolidation, approach speed control, prohibited areas — quotes current AIP text with AIRAC amendment references.*
- Aeronautical Information (Fabio Patrassi) — "Aeroporti di Venezia Tessera e Venezia Lido" — https://aeronauticalinformation.it/index.php/2022/10/05/aeroporti-di-venezia-tessera-e-venezia-lido/ (retrieved 2026-07-26). *Runway dimensions/intersections, PAPI/approach lighting, RFF category, ATS frequencies, fuel suppliers, taxiway restrictions, bird-concentration chart, LVP triggers, mag variation — quotes current AIP text with AIRAC amendment references. Site also covers the separate Venezia Lido (LIPV) aerodrome; content specific to LIPV was excluded from this brief.*
- Aeronautical Information (Fabio Patrassi) — "Procedure strumentali di Venezia Tessera" — https://aeronauticalinformation.it/index.php/2022/10/20/procedure-strumentali-di-venezia-tessera/ (retrieved 2026-07-26). *STAR/SID/approach names, IAFs, climb gradients — quotes current AIP text with AIRAC amendment references.*
- IVAO Italy QuickOverview — "LIPZ" — https://quickoverview.ivao.it/aerodrome/show/LIPZ (retrieved 2026-07-26). *Network-sim operational reference — TA, ATS frequency list, runway TORA/LDA cross-check, SID list. Not regulatory.*
- POSCON Pilot Resources — "LIPZ / VCE - Tessera" — https://forums.poscon.net/docs/pilots/eur/ita/lipz/ (retrieved 2026-07-26). *Network-sim operational reference — preferential-runway logic, LVP criteria, RFF/CAT III confirmation, push-back/APU procedure, runway-occupancy discipline. Not regulatory.*

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-26 | Built from AIP Italia (ENAV); K Global fields from live VAMSYS; 4-page pack. |
