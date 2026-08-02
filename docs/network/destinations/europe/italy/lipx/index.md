# LIPX — Verona/Villafranca · Airport Briefing

**LIPX / VRN** · Villafranca di Verona, Veneto, Italy · Europe
**Version** v0.1 · **Updated** 2026-07-26 · **Status** Draft

> **Read-me:** Planning aid for the sim, not a chart. Static data is drawn from the AIP Italia (ENAV) AD 2 LIPX aerodrome pages plus public tier-4 corroboration; approaches/SIDs/STARs are listed **by name only or flagged not-yet-confirmed** — fly the charted current-AIRAC version. Live weather/NOTAMs are pulled at planning (§14/§15). Open 🟧 items are listed in §18. Flag legend 🟥 restriction/hazard · 🟧 caution/unverified · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| ARP (lat/long) | 45°23'47"N / 010°53'16"E `[AIP Italia AD 2 LIPX 1-1]` |
| Field elevation | **240 ft AMSL** (reference temperature 29.3°C; geoid undulation 146.4 ft) |
| Mag variation | 🟧 **2° E** at the 2008.11 epoch, annual change 6' E, per the AIP cycle retrieved; current-day value not independently re-confirmed against current AIRAC — a secular-drift estimate would put it nearer ~3.8° E, **not a sourced AIP figure** |
| Time zone | UTC+1 (CET) / UTC+2 (CEST, EU DST observed) |
| Runway(s) | **04/22** — single runway, 3,068 × 45 m, asphalt (bituminous conglomerate), PCN 87/F/A/W/T |
| Preferential runway | **RWY 04** (AIP-published preferential use) — operationally the CAT III-served landing direction; heavier/Code D–E aircraft typically depart **RWY 22** southbound, climbing away from the high terrain north of the field and avoiding the RWY 04 no-turning-pad constraint — see §3.5/§10/§11 🟧 (tier-4 corroborated nuance, not itself AIP-stated) |
| Longest LDA | **3,010 m (RWY 04)**; RWY 22 LDA is **2,657 m** (411 m displaced threshold) — see §7 |
| Approaches | **ILS CAT IIIB on RWY 04 only** (ident IVF); **RWY 22 has no published instrument approach** — LVTO-approved departure runway only 🟥 |
| RFF category | **CAT 8 ICAO** `[AIP Italia AD 2 LIPX 1-2]` 🟧 adequate for narrowbody/regional types; **below K Global's widebody requirement** — see §2/§18 |
| Control type | **Radar-capable TMA** — Verona APP/Radar on the field; **Villafranca TWR** (Class D ATZ); **Milano ACC (LIMM)** en route — see [Europe airspace brief](../../../../airspace/europe.md) 🟧 no dedicated Italian FIR brief exists yet in this library |
| Elevation class | Near sea-level (240 ft) — **not** hot-and-high; the defining performance/reliability drivers are **winter Po Valley fog** and **close-in high terrain to the north** (Alps/Lessini foothills), not density altitude |
| Special-airport status | 🟥 **Joint civil/military aerodrome** (Italian Air Force co-located); single runway, terrain-constrained northern sector, and **no turning pad at the RWY 04 threshold** — see §5 |
| Customs / PoE | **Yes** — H24; AD designated a Frontier Veterinary Inspection Point for non-EU flights `[AIP Italia AD 2 LIPX 1-2]` |
| K Global category | **R** `[VAMSYS mirror 2026-07-26]` |
| K Global base | **No** `[VAMSYS mirror 2026-07-26]` |
| Company preferred alternates | **LIMC, LIPE, LSZH** `[VAMSYS mirror 2026-07-26]` |
| Taxi-in / taxi-out (VAMSYS) | **6 min / 8 min** `[VAMSYS mirror 2026-07-26]` |

---

## 2. Validation summary

| Domain | Flag | Note |
|---|---|---|
| Terrain / CFIT | 🟥 | High ground (Alps/Lessini foothills) close north of the field; RWY 22 carries no published instrument approach and tier-4 sources describe a steep northern STAR/descent profile — a genuine CFIT-relevant consideration, unlike a flat-plain field. See §3.1. |
| Runway length vs fleet perf | 🟩 | 3,068 m (TORA/ASDA) is ample for narrowbody/regional types; single runway means **zero redundancy** if it closes. |
| Approach availability / minima | 🟧 | ILS CAT IIIB on RWY 04 only; **RWY 22 has no instrument approach** — if wind/traffic favours 22, IMC arrivals are not an option on this field. |
| Airspace / traffic / control | 🟧 | Joint civil/military single-runway field; Class D ATZ; moderate mixed civil/state/military traffic; single point of failure on runway closure. |
| Weather / seasonal hazard | 🟥 | **Po Valley radiation/advection fog** is the field's defining hazard — historically severe enough that the airport operator installed a fog-dispersal system and the AIP publishes a 75 m RVR operating floor under CAT IIIB. |
| Curfew / slots / hours | 🟧 | AD administration/ATS/customs all H24; **no published curfew or slot regime found** in the reachable AIP extract — not asserted as curfew-free, confirm locally. |
| RFF category vs our types | 🟧 | CAT 8 ICAO is adequate for narrowbody/regional aircraft but **below the requirement for K Global's widebody fleet** (A339/A346/A359/B77W/B748/A388) — relevant only if a widebody diversion/charter is ever planned here. |
| Fuel availability | 🟩 | JET A1 confirmed, multi-supplier (CARBOIL/TAMOIL), extended published hours plus 2 h PN outside them. |
| Customs / handling / security | 🟩 | H24 customs, security and two confirmed ground handlers (AGS Handling, GH Verona). |

---

## 3. Threat & Error Management (TEM)

### 3.1 CFIT / Terrain 🟥
Villafranca sits at the southern edge of the pre-Alpine foothills (the Lessini range) with the main Alpine chain not far beyond — a materially different terrain profile from a flat Po Valley field. The AIP publishes **no instrument approach for RWY 22**, and RWY 22's only approved instrument use is as a **LVTO departure runway** (§7 remarks) — a strong operational signal that the northern sector is terrain-constrained for arrivals. Public tier-4 sources describe a northern arrival profile that crosses the Alps at or above FL150 before descending to FL120 over Lake Garda and continuing down a steep STAR to RWY 04, with **false glideslope captures** reported during the steep descent 🟧 (not independently confirmed from a primary chart this pass — verify current AIRAC). Brief the MSA ring and terrain display religiously on any arrival from the north or west.

### 3.2 Airborne conflict / traffic 🟧
LIPX is a **joint civil/military aerodrome** — the west side of the field carries dedicated military "ring" aprons operated by the **Italian Air Force**, with separate remote-stand taxi routings and mandatory follow-me on the military side (§13). The **Verona ATZ** is Class D (3.0 NM radius, surface–2,000 ft AMSL) under **Villafranca TWR**, with **Verona APP/Radar** providing the surrounding TMA service; en-route context sits under **Milano ACC (LIMM)** — see the [Europe airspace brief](../../../../airspace/europe.md) 🟧 (no dedicated Italian FIR brief exists yet in this library — confirm sector/frequency detail at planning). Traffic is a leisure/charter-heavy mix (seasonal schedule/charter carriers) rather than a dense hub flow, but the single-runway/no-parallel-capacity geometry means any ground or runway-occupancy delay propagates quickly.

### 3.3 Runway excursion 🟧
RWY 22 carries a **substantial displaced threshold — 411 m (1,348 ft)** — reducing its LDA from the nominal 3,068 m to **2,657 m**; RWY 04's displaced threshold is far more modest at 58 m (LDA 3,010 m). Do not apply the nominal runway length to either direction without checking §7. Separately, the AIP records **no turning pad at the RWY 04 threshold**: ICAO Code D/E aircraft departing RWY 04 or landing RWY 22 must pre-notify the aerodrome operator of unassisted 180°-turn capability before flight-plan submission; if unable, a ground-assisted turn is only arranged when no traffic is expected in the following 60 minutes, otherwise **arriving aircraft divert and departing aircraft reschedule** (AIP AD 2 LIPX §20.6.4). An aborted take-off on RWY 22 without unassisted-turn capability leaves the aircraft holding position on the runway awaiting a ground-assisted tow — a real runway-blockage/traffic-halt scenario to brief for Code D/E operations.

### 3.4 Weather threat 🟥
**Winter Po Valley radiation and advection fog** — intensified by the basin's proximity to the Alps/Lessini foothills — is Villafranca's signature hazard. The operator has run an on-field **fog-dispersal system since 2003** (tier-4/operator-sourced) specifically to hold visibility usable, and the AIP publishes an **aerodrome operating minimum of RVR not less than 75 m** under LVP with CAT II/CAT IIIA/B approach approval on RWY 04 (AIP AD 2 LIPX §20.4). LVP activate at **RVR ≤ 550 m and/or cloud base < 200 ft**, or earlier at ATC's discretion on a pilot report or explicit request. Summer brings the standard pre-Alpine risk of afternoon convective activity over the foothills — general regional climatology, no field-specific frequency statistic found. See §14.

### 3.5 Operational considerations 🟧
Three durable constraints define this field: (1) **RWY 22 is not an IFR landing option** — the field's entire low-visibility arrival capability rides on RWY 04's ILS CAT IIIB, so a strong tailwind-on-04 scenario in marginal weather is a genuine planning problem, not a routine config swap; (2) the **no-turning-pad limitation at RWY 04 THR** drives Code D/E aircraft toward RWY 22 for departure and constrains RWY 22 landings — pre-confirm turn capability with the operator before planning either; (3) the **joint civil/military status** adds a coordination layer (separate handling channel for state/military traffic, mandatory follow-me on the military side) that a purely civil field would not have. RFF (CAT 8) and fuel/handling infrastructure are otherwise straightforward for narrowbody/regional operations; the open items in §18 are mostly currency/chart confirmations rather than newly-discovered safety gaps.

---

## 4. Cautions & Warnings

- **RWY 22 has no published instrument approach** — never plan an IMC arrival on 22; if wind/traffic favours it, expect a hold/diversion contingency until RWY 04 is usable, or visual-only operation in VMC. 🟥
- **No turning pad at the RWY 04 threshold** — Code D/E aircraft must pre-confirm unassisted 180°-turn capability before flight planning, or face a scripted divert/reschedule outcome (§3.3). 🟥
- **Winter Po Valley fog is severe and frequent** — the field's CAT IIIB/75 m-RVR infrastructure exists because of it; brief the LVP contingency on every winter sector into LIPX. 🟧
- **Joint civil/military field** — military aprons and remote stands run separate follow-me/coordination rules; never deviate into military taxiways/aprons outside the briefed routing. 🟥
- **(Tier-4) RWY 04 departures require an initial right turn after 750 ft, not left** — a known autopilot/heading-bug trap given the terrain orientation to the north; verify on the current chart. 🟧

---

## 5. Aerodrome category, restrictions & crew qualification

- **Special-airport / category:** Not independently ENAC/operator-categorised as a restricted-crew "special airport" in reachable public sources, but the joint civil/military status, single-runway/no-turning-pad geometry and CAT III fog operations combine into a genuinely complex profile. 🟧
- **Crew-qualification gate:** CAT II/III currency is required for winter low-visibility operations into RWY 04; no independent confirmation of a captain-only-approach policy was found in reachable sources. 🟧
- **Operating restrictions / bans:** RWY 22 has **no published approach** (LVTO/departure only) — never plan an instrument arrival there; ICAO Code D/E aircraft must pre-confirm 180°-turn capability at the RWY 04 threshold or coordinate a ground-assisted turn (§7/§13). 🟥
- **Overflight / entry / permits:** Standard EU/Schengen international arrival; no special state permit found for civil operations. State/military aircraft must coordinate with a listed handling agent in advance (AIP AD 2 LIPX §20.6.3). 🟧
- **Operations notes:** ANSP — **ENAV S.p.A.** (Centro Aeroportuale Verona); Airport operator — **Aeroporto Valerio Catullo di Verona Villafranca S.p.A.**; the military side is operated by the **Aeronautica Militare** (Italian Air Force).

---

## 6. General / hours / services

| Item | Value | Flag |
|---|---|---|
| ATS hours | H24 | 🟩 |
| AD operating hours | H24 (aerodrome administration, customs, health/sanitation all H24) | 🟩 |
| Night / curfew restrictions | Not found in the reachable AIP extract — **not asserted as curfew-free**, confirm current noise/curfew regulation locally | 🟧 |
| RFF category | **CAT 8 ICAO** | 🟧 (see §2) |
| Fuel | JET A1 (CARBOIL — ENI/Kuwait Petroleum Italia/Tamoil/Air BP brands, plus TAMOIL); published HR 0600–2300, other hours 2 h PN | 🟩 |
| PCN | Runway 87/F/A/W/T; apron 77/R/B/W/T; taxiways 53–100/F or R depending on TWY — see §7/§13 | 🟩 |
| Customs | H24; AD designated Frontier Veterinary Inspection Point for non-EU flights | 🟩 |
| Handling / FBO | **AGS Handling** and **GH Verona** — H24 for scheduled flights; **Sky Services** (0800–2000, H24 on request) coordinates state/military traffic | 🟩 |

---

## 7. Runways & declared distances

| RWY | Dimensions | Surface / PCN | TORA | TODA | ASDA | LDA | Notes |
|---|---|---|---|---|---|---|---|
| 04 | 3,068 × 45 m | Asphalt (bituminous conglomerate) / PCN 87/F/A/W/T | 3,068 m | 3,234 m | 3,068 m | **3,010 m** | DTHR 58 m. Intersection take-off "C" (pilot/TWR request only): TORA 2,049 m / TODA 2,215 m / ASDA 2,049 m. RESA 90×90 m; strip 3,188×300 m; clearway 166×150 m. |
| 22 | 3,068 × 45 m | Asphalt (bituminous conglomerate) / PCN 87/F/A/W/T | 3,068 m | 3,345 m | 3,068 m | **2,657 m** | DTHR **411 m** — significant reduction vs nominal length. **No published instrument approach; LVTO-approved for departure only.** Intersection take-offs "Y" (2,597/2,874/2,597 m) and "F" (2,450/2,727/2,450 m), pilot/TWR request only. RESA 90×90 m; strip 3,188×300 m; clearway 277×150 m. |

*Source: AIP Italia (ENAV), AD 2 LIPX 1-5/1-6, amendment cycle carries dates 01 MAR–26 APR 2018 (mirror retrieved 2026-07-26) — treat exact current-cycle declared distances as needing a live-AIRAC cross-check, though the single-runway geometry itself is very unlikely to have changed. All distances in metres.*

---

## 8. Communications

| Service | Callsign | Frequency | Hours | Notes |
|---|---|---|---|---|
| ATIS | Verona ATIS | 124.120 | H24 (assumed) | 🟧 tier-4 sourced (SkyVector); not confirmed in the reachable primary AIP extract |
| Delivery | — | — | — | No separate delivery frequency published; clearance handled via Villafranca TWR 🟧 |
| Ground | Villafranca GND | 121.750 | See remarks (ATC discretion) `[AIP Italia AD 2 LIPX 1-8]` | |
| Tower | Villafranca TWR | 118.650 | H24 `[AIP Italia AD 2 LIPX 1-8]` | Also apron-movement authority (Codice della Navigazione Art. 691bis/705) |
| Approach | Verona APP / Verona Radar | 118.550 / 124.250 / 135.900 | H24 `[AIP Italia AD 2 LIPX 1-8]` | Same facility carries both callsigns on these frequencies per the AIP |
| Centre / FIR | Milano ACC (LIMM) | Per current AIRAC | H24 | See [Europe airspace brief](../../../../airspace/europe.md) 🟧 no dedicated Italian FIR brief in this library yet |
| Apron (operator) | Villa Apron | 131.500 | H24 | Aerodrome-operator push-back/taxi/stand-allocation authority |
| State/military coordination | Sky Services Verona | 131.900 | 0800–2000; H24 on request | Handling coordination for state/military flights |

*Source: AIP Italia (ENAV), AD 2 LIPX 1-8/1-11 (mirror retrieved 2026-07-26). ATIS frequency is tier-4/not independently confirmed — flagged above.*

---

## 9. Navaids

| Aid | Ident | Freq | Hours | Notes |
|---|---|---|---|---|
| ILS LOC (RWY 04) | IVF | 110.10 | H24 | **CAT IIIB**; back beam not usable; coverage reduced to 18 NM |
| ILS GP (RWY 04) | — | 334.40 | H24 | Slope 3°; RDH 17.45 m |
| DME-P (RWY 04) | IVF | CH38X | H24 | Final-approach mode not usable (see GEN 3.4) |
| Marker (OM/MM, RWY 04) | — | 75.00 | H24 | Outer and middle marker, standard tone/light differentiation |
| VORTAC (on field) | VIL | 115.80 (CH105X) | H24 | VOR + TACAN, on-field |
| DVOR/DME (regional, off-field) | BEG / BOA / BSA / TZO / SRN | Various — see current AIRAC | H24 | Distant aids supporting STAR/airway transitions to the north/west; exact assignment by procedure — verify current chart 🟧 |

*Source: AIP Italia (ENAV), AD 2 LIPX 1-7/1-9 (mirror retrieved 2026-07-26) — long-lived infrastructure, unlikely to have changed, but not independently re-confirmed against a current AIRAC.*

---

## 10. Arrival

- **Transition altitude / level:** TA **6,000 ft AMSL** `[AIP Italia AD 2 LIPX 1-8]`; TL by QNH — verify current chart.
- **Speed:** Standard 250 KIAS below FL100 (EU/ICAO norm) — confirm no local override on current chart.
- **Preferential runway logic:** RWY 04 is the AIP-published preferential runway and the field's only IFR landing option (ILS CAT IIIB); RWY 22 has no instrument approach — see §3.5.
- **Approaches (names only — verify minima on current AIRAC charts):**

| RWY | Approach | IAF | FAF/FAP alt | Notes |
|---|---|---|---|---|
| 04 | ILS (IVF), CAT IIIB | Not confirmed 🟧 | Not confirmed 🟧 | Only instrument-approach runway on the field |
| 22 | — none published — | n/a | n/a | LVTO/departure-only; never an arrival option in IMC 🟥 |

- **STARs (names only):** Not confirmed in reachable AIP text extract (chart-only index) — pull the current-AIRAC STAR list at planning. 🟧 Tier-4 sources describe a steep northern profile crossing the Alps at/above FL150, descending to FL120 over Lake Garda before joining the approach — not independently verified this pass. 🟧
- **LVP:** Trigger **RVR ≤ 550 m and/or cloud base < 200 ft** (or earlier at ATC discretion); aerodrome operating minimum **RVR not less than 75 m** under CAT II/CAT IIIA/B on RWY 04.
- **Missed approach watch-items:** Terrain to the north is the operative driver, not traffic density — verify the published climb-gradient/turn on the current chart; a go-around in marginal weather re-enters the same terrain-constrained sector with no alternate runway available at the field itself.

---

## 11. Departure

- **SIDs (names only — fly the charted version):** Not confirmed in reachable research pass (chart-only index) — pull the current-AIRAC SID list at planning. 🟧 Tier-4 sources describe an initial **right** turn after 750 ft off RWY 04 (not left — a known autopilot/heading-bug trap), with north/eastbound SIDs requiring multiple turns to climb clear of the terrain. 🟧
- **RNP / climb-gradient requirements:** Not confirmed this pass — given the close-in terrain, expect a steep or segmented initial climb; verify current chart. See [OM E — PBN and RNP Operations](../../../../../flight-ops/pbn-and-rnp-operations.md).
- **Take-off minima:** RWY 04 departures are **not permitted below RVR 550 m**, or whenever weather prevents Villafranca TWR from visually monitoring all or part of the manoeuvring area (AIP AD 2 LIPX §20.4.2) 🟥. RWY 22 is approved for LVTO; exact RVR minima not confirmed this pass. 🟧
- **Start-up / push-back:** Departing aircraft must receive an "all clear" from ground staff and the aerodrome operator must confirm "AIRCRAFT READY" to ATC before start-up is issued (AIP AD 2 LIPX §20.2.5). Push-back manoeuvres end at IHP M1/M2, J1 or R1; TWR approval required before starting.
- **ATC slot / CTOT & clearance:** No slot-coordination or CTOT/ATFM regime found in reachable sources — treat as a non-coordinated field pending confirmation. 🟧
- **De-icing:** Available **H24, 15 November – 15 March**; 3× FMC LMD 2000 + 1× Cristanini 6000/100 units, Kilfrost ABC3 Type II fluid, 50,000 L storage, provided by the aerodrome operator. See [OM E — Cold Weather Operations](../../../../../flight-ops/cold-weather-operations.md).

---

## 12. Noise & Environmental

- **Noise abatement (NAP):** Not confirmed in reachable sources — verify locally. 🟧
- **Night noise / dB limits:** Not confirmed in reachable sources — verify locally. 🟧
- **Engine run-up restrictions:** Not confirmed in reachable sources — verify locally. 🟧
- **Reverse thrust / idle-reverse policy:** Not confirmed in reachable sources — verify locally. 🟧

---

## 13. Ground operations

- **Stands for our types:** Main civil apron stands reached via Apron TWY P (31–37), Taxilane R (11–14, 21–23), Taxilane M (41–47) and Taxilane J (51–57, 48); no widebody-configured stands identified. Military remote stands are separate and operated by the Italian Air Force. 🟧 | 🟧
- **Push-back:** Follow-me is **mandatory for ICAO Code E aircraft** and for helicopters on the main apron; push-back manoeuvres terminate at IHP M1/M2, J1 or R1 with prior TWR approval.
- **Standard taxi routes:** RWY 04 arrivals typically vacate via TWY K (or W/K depending on ICAO code, per ATC instruction); RWY 22 departures from the main civil apron enter via TWY K (AIP AD 2 LIPX §20.2/§20.6).
- **Hot spots / tight taxiways:** 🟥 **TWY Y is entry-only** (apron → runway, never an exit); **TWY T is limited to ICAO Code C** aircraft; **Code F aircraft taxiing on Apron TWY P must keep the outboard engine at idle**; the **apron and most of the civil taxiway up to (but excluding) the RWY 22 holding position are not visible from the tower** due to obstruction — a genuine ground-movement blind spot (AIP AD 2 LIPX §20.6.1).
- **Follow-me:** Mandatory on the main apron when **RVR ≤ 550 m**, for **ICAO Code E aircraft**, and for helicopters; **always mandatory** on the military apron and aprons up to TWY T.

---

## 14. Weather & seasonal (durable)

- **Climate / prevailing wind:** Po Valley / pre-Alpine climate; the AIP's RWY 04 preferential-use rule is consistent with a prevailing wind or infrastructure bias toward that direction — exact prevailing-wind data not independently confirmed this pass. 🟧
- **Seasonal hazards:** **Winter radiation/advection fog**, intensified by the field's proximity to the Alps/Lessini foothills, is the defining hazard — severe enough that the operator installed a fog-dispersal system (tier-4/operator-sourced) and the AIP publishes a 75 m RVR operating floor under CAT IIIB. Summer brings the standard pre-Alpine risk of afternoon convective activity over the foothills — general regional climatology, no field-specific frequency statistic found.
- **Local effects:** Proximity to Lake Garda (approx. 15–20 km NW) may locally modulate breeze and fog patterns — not independently quantified this pass. 🟧

> **Live weather — pull at planning (T-2h):** METAR, TAF, TREND, SIGMET/AIRMET. Not stored here.

---

## 15. NOTAMs

> **Pull at planning (T-2h).** Perishable — not stored here. Check: runway/taxiway closures, ILS/navaid U/S (esp. CAT IIIB status on RWY 04, the field's only instrument approach), lighting, obstacle/crane, RFF downgrade, fog-dispersal system status, GPS/RAIM for RNP procedures. Source: official AIS / OFP NOTAM block (ARO-CBO Milano).

---

## 16. Fuel & alternate planning notes

- **Typical role for us:** **Destination** — regional/short-haul network point, not a base `[VAMSYS mirror 2026-07-26]`.
- **Nearest suitable alternates:** Company preferred alternates [**LIMC**](../limc/index.md) (Malpensa), [**LIPE**](../lipe/index.md) (Bologna), and **LSZH** (Zurich, Switzerland) 🟧 no OM C brief exists in this library — named per VAMSYS with no working link `[VAMSYS mirror 2026-07-26]`. Confirm suitability, runway/RFF adequacy and current minima per leg.
- **Fuel-uplift notes:** JET A1 confirmed, multi-supplier (CARBOIL/TAMOIL), extended published hours (0600–2300) plus 2 h prior-notice availability outside them. See [OM E — Fuel Policy](../../../../../flight-ops/fuel-policy.md).
- **Range/perf flags for our fleet:** Field length (3,068 m) is non-limiting for narrowbody/regional types. **RFF CAT 8 is a real constraint for any widebody diversion or charter** — see [OM B — Fleet Capability Matrix](../../../../../fleet/capability-matrix.md).

---

## 17. Fleet-specific notes (optional)

- LIPX is a narrowbody/regional destination in the network, not a widebody field — the single 3,068 m runway is non-limiting for the network's short/medium-haul types. The one type-relevant flag is **RFF CAT 8**, which is adequate for narrowbody/regional aircraft but below the requirement for K Global's widebody fleet (A339/A346/A359/B77W/B748/A388) — relevant only if a widebody diversion or charter is ever planned into this field. See [OM B — Fleet Capability Matrix](../../../../../fleet/capability-matrix.md).

---

## 18. Open items (🟧 — confirm against AIP / current AIRAC)

- **Magnetic variation** — sourced to a 2008.11 epoch (2° E, 6' E/yr); current-day value not independently re-confirmed.
- **Declared distances / PCN / lighting tables** — sourced to a 2018 AIP amendment cycle (01 MAR–26 APR 2018); single-runway geometry very unlikely to have changed, but exact current-cycle figures not re-verified against a live AIRAC.
- **ATIS frequency (124.120)** — tier-4 sourced (SkyVector); not confirmed in the reachable primary AIP extract.
- **Delivery frequency** — none found; clearance assumed handled via Villafranca TWR.
- **SIDs/STARs (current names, gradients, transitions)** — not obtained in this research pass; pull the live current-AIRAC procedure list before use.
- **Prevailing wind / climate data** — not independently confirmed; RWY 04 preferential-use rule taken as a proxy indicator only.
- **Noise abatement procedure, night dB limits, engine run-up and reverse-thrust policy** — none confirmed in reachable sources.
- **Curfew / noise-related operating restriction** — none found; not asserted as curfew-free, confirm locally.
- **Slot coordination / CTOT / ATFM regime** — none found; treated as non-coordinated pending confirmation.
- **Steep northern STAR profile and false-glideslope-capture reports** — tier-4 (flight-sim community) sourced only; not independently confirmed from a primary chart.
- **RWY 22 "visual approach for light aircraft only" characterisation** — tier-4 sourced; the primary AIP confirms no instrument approach and LVTO-only departure use on RWY 22, but does not itself state a VFR-only/light-aircraft-only restriction.

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim material (current-AIRAC charts) informs content but is not listed here.*

- **AIP Italia (ENAV), AD 2 LIPX 1-1 through 1-11** — aerodrome administrative/geographical data, hours, RFF, runway physical characteristics and declared distances, lighting, ATS airspace, communications, navaids, local traffic regulations and AWO/LVP procedures; amendment cycle dates 01 MAR 2018 (A1/18) through 21 JUN 2018 (A5/18) — mirrored via https://va.mite.gov.it/File/Documento/340816 (retrieved 2026-07-26). **Treat exact current-cycle figures (frequencies, PCN, mag-var, declared distances) as needing a live-AIP cross-check.**
- OurAirports — https://ourairports.com/airports/LIPX/ and /runways.html (retrieved 2026-07-26). *ARP/elevation/runway cross-check.*
- SkyVector — https://skyvector.com/airport/LIPX/Verona-Villafranca-Airport (retrieved 2026-07-26). *Coordinates, frequencies cross-check, nearby navaids.*
- Wikipedia — "Verona Villafranca Airport" — https://en.wikipedia.org/wiki/Verona_Villafranca_Airport (retrieved 2026-07-26). *History, fog-dispersal system, CAT IIIB corroboration, terminal-expansion project.*
- FlightGear wiki — "Verona Villafranca Airport" — https://wiki.flightgear.org/Verona_Villafranca_Airport (retrieved 2026-07-26). *Flight-sim community source — terrain/departure-turn/steep-STAR corroboration only, not regulatory.*
- Aeroporto Valerio Catullo di Verona Villafranca S.p.A. (operator site) — https://www.aeroportoverona.it/en_gb (retrieved 2026-07-26). *Operator/terminal-project corroboration.*

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-26 | Built from AIP Italia (ENAV); K Global fields from live VAMSYS; 4-page pack. |
