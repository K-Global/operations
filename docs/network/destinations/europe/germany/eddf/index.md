# EDDF — Frankfurt/Main · Airport Briefing

**EDDF / FRA** · Frankfurt am Main, Hesse, Germany · Europe
**Version** v0.2 · **Updated** 2026-07-25 · **Status** Draft — DFS eAIP-derived, K Global home-hub build

> **Read-me:** Planning aid for the sim, not a chart. Static data is drawn from the DFS eAIP (AIP Germany, AD 2 EDDF) plus standard public aeronautical data; approaches/SIDs/STARs are listed **by name only or flagged not-yet-confirmed** — fly the charted current-AIRAC version. Live weather/NOTAMs are pulled at planning (§14/§15). Open 🟧 items are listed in §18. Flag legend 🟥 restriction/hazard · 🟧 caution/unverified · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| ARP (lat/long) | N50°01′59.90″ / E008°34′13.64″ (50.0333, 8.5705) `[DFS AIP AD 2 EDDF 1-1]` |
| Field elevation | **364 ft / 111 m AMSL** (reference temperature 24.2°C) |
| Mag variation | 🟧 **1.4° E** per the 2012 AIP cycle retrieved; current-day value not re-confirmed against current AIRAC — third-party declination tools disagree by ~2° for "Frankfurt," a present-day estimate from secular drift is roughly ~3°E, **not a sourced AIP figure** |
| Time zone | UTC+1 (CET) / UTC+2 (CEST, EU DST observed) |
| Runway(s) | **07L/25R** 2,800 × 45 m (concrete, **landing-only**) · **07C/25C** 4,000 × 60 m (asphalt) · **07R/25L** 4,000 × 45 m (asphalt) · **18** 4,000 × 45 m (concrete/asphalt, **takeoff-only**, South) |
| Preferential runway | Config/wind/noise/flow-dependent; prevailing south/south-westerly wind favours the **07-configuration** (arrivals 07L/07C/07R, departures 07C/07R and/or **18** south); 25-configuration is the less-common reciprocal — see §10/§11 |
| Longest LDA | 4,000 m (07C/25C, 07R/25L) |
| Approaches | **ILS CAT III on all three parallel runways** (6 runway ends — IFNE/IFNW, IFCE/IFCW, IFSE/IFSW); GBAS steep-approach (3.2°) available on Centre/South (and Northwest) runways for equipped operators; **RWY 18 has no published approach — takeoff-only** |
| RFF category | **CAT 10** (ICAO highest category — A380-capable) 🟩 |
| Control type | **Radar** — Frankfurt Tower/Apron/Ground on the field; **Langen Radar** (DFS) approach; **Langen ACC (EDGG)** en route — see [Langen (EDGG) FIR brief](../../../../airspace/fir/europe/langen-edgg.md) |
| Elevation class | Near sea-level (364 ft) — **not** hot-and-high; the performance/reliability driver here is **winter Rhine-Main basin fog/low-visibility**, not density altitude |
| Special-airport status | 🟥 **Slot-coordinated IATA Level 3**; unusual **asymmetric one-way runway pair** (07L/25R landing-only, 18 takeoff-only) and a full parallel-triplet-plus-crossing-runway geometry — see §5 |
| Customs / PoE | **Yes** — Terminal 1 and Terminal 3 international halls; major-hub H24 expectation 🟧 (exact desk hours not confirmed) |
| K Global category | **L** `[VAMSYS mirror 2026-07-25]` 🟩 |
| K Global base | **YES — home hub** `[VAMSYS mirror 2026-07-25]` 🟩 |
| Company preferred alternates | **EDDM, EHAM, EBBR** `[VAMSYS mirror 2026-07-25]` |
| Taxi-in / taxi-out (VAMSYS) | **18 min / 22 min** `[VAMSYS mirror 2026-07-25]` |

---

## 2. Validation summary

| Domain | Flag | Note |
|---|---|---|
| Terrain / CFIT | 🟩 | Flat Rhine-Main basin; no close-in high terrain. Non-factor for the field itself. |
| Runway length vs fleet perf | 🟩 | 4,000 m main runways (07C/25C, 07R/25L) are ample for any K Global widebody; 07L/25R (2,800 m, landing-only) and RWY 18 (3,970 m TORA, takeoff-only) are non-limiting for their respective one-way roles. |
| Approach availability / minima | 🟩 | CAT III on all three parallels — the deepest low-visibility capability in the network; sub-category (IIIA/IIIB) not confirmed from a primary table this pass 🟧. |
| Airspace / traffic / control | 🟥 | One of the busiest hubs in Europe; three parallel runways **plus** a perpendicular crossing runway (18) drives sustained high controller/crew workload — see §3.2. |
| Weather / seasonal hazard | 🟥 | Rhine-Main basin winter **radiation/freezing fog and temperature inversions** are the field's defining threat — directly why CAT III infrastructure exists here. |
| Curfew / slots / hours | 🟥 | **Slot-coordinated Level 3** (FHKD coordinator) **and** a hard **core night ban 23:00–05:00** with shoulder-hour movement caps — see §6/§12. |
| RFF category vs our types | 🟩 | CAT 10 — above any of our fleet's requirement. |
| Fuel availability | 🟧 | Jet A-1 assumed available H24 as a major hub; specific supplier/hours not confirmed in reachable public sources. |
| Customs / handling / security | 🟧 | T1/T3 international halls confirmed; exact desk hours and current (post-T3) widebody stand/gate assignment not fully confirmed — terminal programme is mid-transition in 2026 (see §6/§13). |

---

## 3. Threat & Error Management (TEM)

### 3.1 CFIT / Terrain 🟩
EDDF sits at 364 ft AMSL in the flat Rhine-Main basin — there is **no close-in high terrain** relevant to arrival, departure or missed-approach paths. This is a non-issue field for terrain; verify the MSA ring on the current chart as routine practice, but CFIT is not the operative threat here.

### 3.2 Airborne conflict / traffic 🟥
Frankfurt combines **three full-length east–west parallel runways (07L/25R, 07C/25C, 07R/25L) with a perpendicular fourth runway (18)** used for southbound-only departures — an unusual and demanding airfield geometry that few major hubs replicate. Sustained high traffic density under **Langen Radar** (DFS approach) and Frankfurt Tower drives continuous parallel-dependent operations, frequent runway-crossing sequencing at the **RWY 18 turnaround area**, and elevated controller/crew workload during both arrival and departure banks. The AIP itself flags several taxiway junctions (TWY N7, TWY R15, the RWY 18/TWY Y turnaround, and the zones between 07C/25C–TWY L and 07R/25L–TWY M) for special centreline lighting treatment — a direct signal that these are recognised complex/caution points. Cross-ref [Langen (EDGG) FIR brief](../../../../airspace/fir/europe/langen-edgg.md).

### 3.3 Runway excursion 🟧
No displaced thresholds were found in the reachable AIP extract for any of the four runways — **not independently re-confirmed against a current AIRAC cycle**, flagged for verification. The one genuine pavement-strength transition is on RWY 18, where the surface changes from concrete (PCN 90/R/A/W/T) to an asphalt section (PCN 74/F/A/W/T) for the first 1,425 m from the threshold — a strength note, not a distance-usability issue. RWY 07L/25R (landing-only, 2,800 m) and RWY 18 (takeoff-only, 3,970 m TORA) are each usable in one direction only for their respective role — brief the correct one-way assignment, don't assume bidirectional use.

### 3.4 Weather threat 🟥
The **Rhine-Main basin is prone to winter radiation and freezing fog under temperature inversions**, routinely dropping visibility below the minima needed for a normal ILS CAT I approach — this is the airport's signature weather hazard and the direct operational reason CAT III autoland capability is installed on all three parallel runways. Winter also brings a recognised **snow/de-icing season** (Fraport publishes a seasonal Deicing Procedure document each year, typically Oct–Apr). Summer brings the standard Central European afternoon **convective/thunderstorm risk**; no EDDF-specific frequency statistic was found for this — treat as general regional climatology. See §14.

### 3.5 Operational considerations 🟥
Plan around three durable constraints: (1) the **RWY 18 south-departure hot spot** — its turnaround area and approach taxiways are AIP-flagged complex points, and it interacts with parallel-runway traffic; (2) the **slot-coordinated Level 3 regime** with **FHKD** as coordinator, meaning schedule integrity (on-time pushback) has real network consequences; and (3) the **hard core night ban 23:00–05:00** — a late or delayed inbound/outbound has real diversion/permit consequences (see §6/§12). RFF, navaid and approach infrastructure are all first-tier; the open items in §18 are mostly currency/administrative confirmations rather than safety-critical gaps.

---

## 4. Cautions & Warnings

- **RWY 18 is takeoff-only** (southbound departures) and **RWY 07L/25R is landing-only** — never assume either is available in the reciprocal role; both are one-way by declared-distance publication.
- **Winter fog/temperature-inversion season** can put the field below CAT I minima with little warning — CAT III currency/capability is the standing mitigation; check current LVP status before planning.
- **Core night ban 23:00–05:00** is hard — a delayed departure after midnight is prohibited outright, and a delayed arrival after midnight must divert. Build schedule buffer, especially on late-day westbound legs returning to base.
- **RWY 18's turnaround area and several named taxiway junctions (TWY N7, R15, TWY Y, TWY L, TWY M)** are AIP-flagged complex/caution points — expect crossing instructions and read-back-heavy ground handling near these.
- **Historical/reputational note (RWY 18 "Startbahn West"):** the runway was fiercely contested through the 1970s–80s (a 1981 Wiesbaden demonstration drew over 120,000 protesters) before opening in 1984 — no current operational impact, but explains the runway's isolated south-end alignment and community-noise sensitivity (Kelsterbach) that still shapes its usage pattern today.
- **Three-parallel-plus-crossing-runway geometry** sustains a high radio/traffic workload almost continuously during banks — maintain a heightened traffic scan even under radar.
- Mag variation and several ATC frequencies are sourced to an older AIP cycle — treat exact current values as 🟧 pending a live AIRAC cross-check (§18).

---

## 5. Aerodrome category, restrictions & crew qualification

- **Special-airport / category:** Not operator-categorised as a restricted-crew "special airport" in reachable sources; the standing crew-briefing items are the **RWY 18 one-way-south hot spot** and the **CAT III low-visibility environment**. 🟥
- **Crew-qualification gate:** CAT II/III currency required for full-capability ops into the CAT III-equipped parallels in winter low-vis conditions — confirm crew/aircraft currency before planning a low-vis arrival. 🟧
- **Operating restrictions / bans:** Core night ban 23:00–05:00 (§6/§12); no RNP AR ban or circling restriction found in reachable sources — verify current AIRAC. 🟧
- **Overflight / entry / permits:** Standard EU/Schengen and non-Schengen international arrival; no special state permit required. 🟩
- **Operations notes:** ANSP — **DFS Deutsche Flugsicherung** (Langen Radar approach, Langen ACC en route); Airport operator — **Fraport AG** (also operates Apron Control). Slot coordinator — **Flughafenkoordination Deutschland GmbH (FHKD / "Fluko")** under §27a(1) LuftVG.

---

## 6. General / hours / services

| Item | Value | Flag |
|---|---|---|
| ATS hours | Tower/Delivery/Apron H24; Ground and some Tower positions HX (activated per traffic) | 🟩 |
| AD operating hours | Scheduled ops **05:00–23:00** local; core night ban outside this window (§12) | 🟥 |
| Night / curfew restrictions | **Core night ban 23:00–05:00**; shoulder hours 22:00–23:00 & 05:00–06:00 capped at an average **133 movements/night/year**; daytime noise-class restriction Mon–Fri 08:00–20:00 only (not weekends) for non-noise-reduced types | 🟥 |
| RFF category | **CAT 10** | 🟩 |
| Fuel | Jet A-1 assumed available H24 (major hub); specific into-plane supplier/hours not confirmed | 🟧 |
| PCN | Runway-specific — see §7; taxiways/apron concrete PCN 74/R/A/W/T, asphalt sections PCN 74/F/A/W/T | 🟩 |
| Customs | T1 & T3 international halls; exact desk hours not confirmed | 🟧 |
| Handling / FBO | Fraport AG (Apron Control, push-back approvals) plus multiple third-party ground handlers (not individually confirmed) | 🟧 |

---

## 7. Runways & declared distances

| RWY | Dimensions | Surface / PCN | TORA | TODA | ASDA | LDA | Notes |
|---|---|---|---|---|---|---|---|
| 07L | 2,800 × 45 m | Concrete / PCN 74/R/A/W/T | — | — | — | 2,800 m | **Landing-only** — no TORA/TODA/ASDA published |
| 25R | 2,800 × 45 m | Concrete / PCN 74/R/A/W/T | — | — | — | 2,800 m | **Landing-only** — no TORA/TODA/ASDA published |
| 07C | 4,000 × 60 m | Asphalt / PCN 74/F/A/W/T | 4,000 m | 4,060 m | 4,000 m | 4,000 m | Main parallel; CAT III |
| 25C | 4,000 × 60 m | Asphalt / PCN 74/F/A/W/T | 4,000 m | 4,000 m | 4,000 m | 4,000 m | Main parallel; CAT III |
| 07R | 4,000 × 45 m | Asphalt / PCN 74/F/A/W/T | 4,000 m | 4,060 m | 4,000 m | 4,000 m | Main parallel; CAT III |
| 25L | 4,000 × 45 m | Asphalt / PCN 74/F/A/W/T | 4,000 m | 4,060 m | 4,000 m | 4,000 m | Main parallel; CAT III |
| 18 | 4,000 × 45 m | Concrete (PCN 90/R/A/W/T) + asphalt section (PCN 74/F/A/W/T, first 1,425 m from THR) | 3,970 m | 4,030 m | 3,970 m | — | **Takeoff-only, South** — no LDA published; no approach |

*Source: DFS AIP Germany, AD 2 EDDF 2.12/2.13 (AIRAC cycle retrieved carries 2011–2012 amendment dates — core runway geometry is very unlikely to have changed since, as no new runway has been built, but exact current-cycle PCN/overrun figures should be cross-checked against a live AIRAC before treating as audit-grade). No displaced thresholds found in the reachable extract — 🟧 not independently re-confirmed. All distances in metres.*

---

## 8. Communications

| Service | Callsign | Frequency | Hours | Notes |
|---|---|---|---|---|
| ATIS | Frankfurt ATIS | 118.025 | H24 (assumed) | 🟧 |
| Delivery | Frankfurt Delivery | 121.900 | H24 | Initial call / start-up request |
| Apron | Frankfurt Apron (Fraport Apron Control) | 121.550 / 121.650 / 121.750 / 121.850 / 121.950 | H24 | Push-back approvals, apron taxi guidance — English/German |
| Ground | Frankfurt Ground | 121.800 | HX | Taxi guidance within DFS AoR |
| Tower | Frankfurt Tower | 119.900 (H24) · Tower West 124.850 (HX, RWY 18 departures) · 118.775 (H24) · standby 136.500/378.350 · 127.325 (HX) | Mixed H24/HX | Multiple positions — take the assigned frequency |
| Arrival / Director | Frankfurt Arrival 118.500 · Frankfurt Director 127.275/375.450 (HX) | — | Mixed | |
| Approach (Langen Radar) | Langen Radar | 120.150 / 136.125 / 372.850 / 126.550 and 120.800 / 125.350 / 277.800 / 119.025 | Mixed H24/HX | Sector-specific — take the assigned frequency |
| Centre / FIR | Langen ACC (EDGG) — "Langen Radar"/upper handoff | Per current AIRAC | H24 | See [Langen (EDGG) FIR brief](../../../../airspace/fir/europe/langen-edgg.md) |

*Source: DFS AIP Germany, AD 2 EDDF 2.17/2.18 (2012-cycle extract retrieved) — treat exact frequencies as 🟧 pending a live-AIRAC cross-check, though the tower/ground/apron/delivery structure itself is stable. Cross-checked against a VATSIM Germany hobby reference chart (not authoritative) which shows closely matching values.*

---

## 9. Navaids

| Aid | Ident | Freq | Hours | Notes |
|---|---|---|---|---|
| VOR/DME (TACAN) | FFM | 114.20 (CH89X) | H24 (assumed) | Frankfurt DVORTAC, on field |
| DME (TACAN) | FRD | 115.90 (CH106X) | H24 (assumed) | On field |
| VOR | CHA | 115.50 | H24 (assumed) | Charlie VOR, ~20 NM SE |
| NDB | FW | 382 kHz | H24 (assumed) | ~5.1 NM WSW, ILS-associated locator |
| NDB | FR | 297 kHz | H24 (assumed) | ~5.4 NM ENE, ILS-associated locator |
| ILS 07L | IFNE | 111.75 | H24 | CAT III (sub-category not confirmed — commonly reported IIIB) 🟧 |
| ILS 25R | IFNW | 111.35 | H24 | CAT III 🟧 |
| ILS 07C | IFCE | 110.55 | H24 | CAT III 🟧; GBAS steep (3.2°) also available |
| ILS 25C | IFCW | 111.55 | H24 | CAT III 🟧; GBAS steep (3.2°) also available |
| ILS 07R | IFSE | 110.95 | H24 | CAT III 🟧 |
| ILS 25L | IFSW | 111.15 | H24 | CAT III 🟧 |

*All idents/frequencies sourced to the DFS AIP 2011–2012 cycle extract; long-lived infrastructure, unlikely to have changed, but not independently re-confirmed against a current AIRAC.*

---

## 10. Arrival

- **Transition altitude / level:** TA 5,000 ft MSL; TL by QNH — not independently confirmed this pass, verify current chart. 🟧
- **Speed:** Standard 250 KIAS below FL100 (EU/ICAO norm) — confirm no local override on current chart.
- **Preferential runway logic:** Wind/traffic/noise-dependent. Prevailing south/south-westerly wind favours the **07-configuration** (arrivals split across 07L/07C/07R). GBAS technology (since 30 Mar 2017) permits a steeper 3.2° approach on the Centre and South runways (and the Northwest runway) for equipped operators, raising overflight altitude over noise-sensitive suburbs.
- **Approaches (names only — verify minima on current AIRAC charts):**

| RWY | Approach | Notes |
|---|---|---|
| 07L | ILS CAT III (IFNE) | Landing-only runway — a primary arrival runway in the 07-configuration |
| 25R | ILS CAT III (IFNW) | Reciprocal — used in 25-configuration only |
| 07C | ILS CAT III (IFCE); GBAS steep 3.2° | |
| 25C | ILS CAT III (IFCW); GBAS steep 3.2° | |
| 07R | ILS CAT III (IFSE) | |
| 25L | ILS CAT III (IFSW) | |
| 18 | — none — | **Never an arrival runway** (takeoff-only, no approach published) |

- **STARs (names only):** Not confirmed in reachable research pass — pull the current-AIRAC STAR list at planning. 🟧
- **LVP:** CAT III trigger conditions apply per Rhine-Main basin winter fog/inversion risk (§14); exact RVR/trigger figures not confirmed this pass. 🟧
- **Missed approach watch-items:** Terrain is not the driver (flat basin); the operative missed-approach concern is re-sequencing into a very high-density, three-parallel-plus-crossing-runway traffic environment.

---

## 11. Departure

- **SIDs (names only — fly the charted version):** Not confirmed in reachable research pass — pull the current-AIRAC SID list at planning. 🟧
- **RNP / climb-gradient requirements:** Frankfurt implemented at least one RNP departure route from every runway by end-2019 (ahead of the EU's PBN mandate); confirm gradient/equipage per SID on the current chart. See [`OM E — PBN and RNP Operations`](../../../../../flight-ops/pbn-and-rnp-operations.md).
- **Take-off minima:** Published per AIP — exact figures not confirmed this pass. 🟧
- **Start-up / push-back:** Apron/push-back approvals handled by **Fraport Apron Control** (121.550–121.950); confirm cross-bleed/APU notification procedure locally. 🟧
- **ATC slot / CTOT & clearance:** **IATA Level 3 slot-coordinated** (coordinator **FHKD**); EUROCONTROL Network Manager ATFM/CTOT regulation applies as standard practice for a congested EU hub (not independently EDDF-sourced this pass). 🟧
- **De-icing:** Dedicated remote pads — **DP1/DP2** (west of the RWY 18 threshold, "DPW") used primarily for RWY 18 departures with restricted use for RWY 07 departures; **DP3E/DP3W** at TWY N7; **DP4E/DP4W** at TWY V159/V161, preferred for RWY 25/07 departures. Most pads have east/west halves enabling simultaneous de-icing of two aircraft. Season per Fraport's published annual Deicing Procedure (typ. Oct–Apr). See [`OM E — Cold Weather Operations`](../../../../../flight-ops/cold-weather-operations.md).

---

## 12. Noise & Environmental

- **Noise abatement (NAP):** Default departure routing for all aircraft **except two-engine Heavies** is the **"Südumfliegung" (southern bypass) / M/H-departure** — an initial left turn south before turning north, avoiding noise over cities west of the field and conflicts with missed-approach traffic. Segmented/curved approaches reduce noise over Offenbach, Hanau, Maintal (westerly arrivals) and Mainz, Bischofsheim (easterly arrivals) at the cost of increased footprint elsewhere. A contentious **AMTIX Short SID** redirection over Darmstadt was trialled Nov 2020 and halted Jan 2021 over possible safety concerns — a live example of noise/safety trade-offs at this field; confirm current status.
- **Night noise / dB limits:** Governed primarily through the core night ban and shoulder-hour movement cap (§6/§12) rather than a published per-movement dB limit; noise-related charges apply under the Airport Charges Regulation (in force since 1 Jan 2023), including a **3× daytime-rate surcharge** for delayed landings/take-offs after 23:00.
- **Engine run-up restrictions:** Not confirmed in reachable sources — verify locally. 🟧
- **Reverse thrust / idle-reverse policy:** Not confirmed in reachable sources — verify locally. 🟧

---

## 13. Ground operations

- **Stands for our types:** Widebody-capable positions historically concentrated in **T1 Concourse A/"A-Plus"** (8 stands, able to take 4× A380 or 7× B747 simultaneously) and **Concourse C13–C20** (purpose-built A380 gates); **Terminal 3** (opened 23 Apr 2026, piers G/H/J) adds new capacity but exact widebody gate assignment there is not yet confirmed. Approx. 180+ total apron parking positions across Aprons A–E — **figure is blog/aggregator-sourced, not an official count** 🟧. | 🟧
- **Push-back:** Apron/push-back approvals handled by Fraport Apron Control; mandatory-vs-self-manoeuvre policy for Code E/F stands not confirmed. 🟧
- **Standard taxi routes:** Confirm with Ground/Apron on the day; expect routing via the AIP-flagged complex junctions below.
- **Hot spots / tight taxiways:** 🟥 **TWY N7**, **TWY R15** (between RWY 07R/25L and TWY S), the **RWY 18/TWY Y turnaround area**, the zone between **RWY 07C/25C and TWY L**, and between **RWY 07R/25L and TWY M** — all AIP-flagged for special (yellow/green) centreline lighting, indicating recognised complex/caution ground junctions, particularly active when RWY 18 is running a southbound departure bank alongside continuous parallel-runway traffic.
- **Follow-me:** Availability not confirmed in reachable source — verify locally. 🟧

---

## 14. Weather & seasonal (durable)

- **Climate / prevailing wind:** Temperate Central European climate in the low-lying Rhine-Main basin; prevailing wind south/south-westerly, consistent with the 07-configuration being the dominant operational orientation.
- **Seasonal hazards:** **Winter radiation/freezing fog under temperature inversions** is the field's defining hazard — the basin location traps cold, humid air near the surface, routinely dropping visibility below CAT I minima; this is the direct operational reason all three parallel runways carry CAT III infrastructure. Winter also brings a recognised **snow/de-icing season** (Fraport's dedicated remote pads, §11). Summer carries the standard Central European risk of afternoon **convective storms** — general regional climatology, no EDDF-specific frequency statistic found.
- **Local effects:** Basin-trapped fog is the standout local effect; no other notable terrain/sea-breeze effects at this inland field.

> **Live weather — pull at planning (T-2h):** METAR, TAF, TREND, SIGMET/AIRMET. Not stored here.

---

## 15. NOTAMs

> **Pull at planning (T-2h).** Perishable — not stored here. Check: runway/taxiway closures (esp. RWY 18 turnaround area and the AIP-flagged taxiway junctions), navaid U/S, CAT III equipment status, lighting, obstacle/crane, RFF downgrade, current AUP/UUP or RAD constraints in the Langen FIR, GPS/RAIM for RNP procedures. Source: official AIS / OFP NOTAM block.

---

## 16. Fuel & alternate planning notes

- **Typical role for us:** **Home hub / base** — the primary departure and return field for the K Global network.
- **Nearest suitable alternates:** Company preferred alternates [**EDDM**](../eddm/index.md) (Munich), **EHAM** (Amsterdam Schiphol), **EBBR** (Brussels) `[VAMSYS mirror 2026-07-25]` — confirm suitability, runway/RFF adequacy and current minima per leg.
- **Fuel-uplift notes:** Jet A-1 assumed available H24 as a major hub; specific into-plane provider/hours not confirmed. 🟧 See [`OM E — Fuel Policy`](../../../../../flight-ops/fuel-policy.md).
- **Range/perf flags for our fleet:** Field length/strength non-limiting for any K Global type on the main runway pair (4,000 m). See [`OM B — Fleet Capability Matrix`](../../../../../fleet/capability-matrix.md) for type-by-type range/performance reference.

---

## 17. Fleet-specific notes (optional)

- As the home hub, EDDF is the base field for the K Global fleet generally rather than a single-type consideration — see [`OM B — Fleet Capability Matrix`](../../../../../fleet/capability-matrix.md). For the long-haul EDDF–KSFO reference pairing, see [`OM B — A339 Dispatch`](../../../../../fleet/a339/dispatch.md) — no field-elevation or field-length performance penalty for the A339 at EDDF; the operative planning consideration is winter CAT III reliance and slot/curfew schedule integrity rather than aircraft performance.

---

## 18. Open items (🟧 — confirm against AIP / current AIRAC)

- **Magnetic variation** — sourced to a 2012 AIP cycle (1.4° E); current-day value not independently re-confirmed; secular-drift estimate (~3° E) is not a sourced figure.
- **Declared distances / PCN table** — sourced to a 2011 AIP amendment cycle; core runway geometry unlikely to have changed, but exact current-cycle figures not re-verified.
- **ILS sub-category (IIIA/IIIB/IIIC)** — commonly reported elsewhere as CAT IIIB but not confirmed from a primary AIP table this pass.
- **ATC frequencies** — sourced to a 2012 AIP cycle plus a non-authoritative hobby cross-check; representative but not current-AIRAC-verified.
- **SIDs/STARs (current names)** — not obtained in this research pass; pull the live current-AIRAC procedure list before use.
- **Displaced thresholds** — none found in the reachable extract; not independently re-confirmed as "none exist" on the current AIRAC.
- **Terminal/gate assignment for widebody long-haul traffic** — evolving due to the 2026 Terminal 2 closure (9 Jun 2026, modernisation until the mid-2030s) and Terminal 3 opening (23 Apr 2026); current-day (post-T3) gate map not fully confirmed.
- **Apron stand count (~180+)** — blog/aggregator-sourced, not an official Fraport/ACI figure.
- **Take-off minima, engine run-up restriction, reverse-thrust/idle-reverse policy, follow-me availability, push-back mandatory-vs-self-manoeuvre policy** — none confirmed in reachable sources.
- **Fuel supplier(s) and into-plane hours** — assumed H24 major-hub availability, not individually confirmed.
- **Customs/immigration desk hours** — not confirmed; assumed major-hub H24 coverage.
- **EUROCONTROL CTOT/ATFM specifics for EDDF** — general practice for a congested EU hub, not independently EDDF-sourced.

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim material (current-AIRAC charts) informs content but is not listed here.*

- **DFS AIP Germany (Luftfahrthandbuch Deutschland), AD 2 EDDF 2.1–2.19**, amendment cycle retrieved carries dates 2011–2012 (e.g. AMDT 12, eff. 20 Oct 2011; AD 2 EDDF 1-9, 28 Jun 2012) — runway geometry/declared distances/PCN, ILS idents/frequencies, ATC frequencies, RFF category, taxiway-lighting hot-spot remarks — mirrored via https://silo.tips/download/eddf-ad-21-aerodrome-location-indicator-and-name-eddf-frankfurt-main-eddf-ad-22 (retrieved 2026-07-25). **Treat exact current-cycle figures (frequencies, PCN, mag-var) as needing a live-AIP cross-check.**
- OurAirports — https://ourairports.com/airports/EDDF/ and /runways.html and /closest-navaids.html (retrieved 2026-07-25). *ARP/elevation/runway/navaid cross-check.*
- Simple Flying — "Why Frankfurt's Runway 18 Is Only Used For Takeoffs In One Direction," 2021-04-05 — https://simpleflying.com/frankfurt-runway-18-one-direction/ (retrieved 2026-07-25). *RWY 18 operational-logic corroboration.*
- Wikipedia — "Runway 18 West" — https://en.wikipedia.org/wiki/Runway_18_West (retrieved 2026-07-25). *Startbahn West history.*
- Aeroplan.ch — "Frankfurt / Runway 07L–25R, CAT III" — https://aeroplan.ch/portfolio/frankfurt-runway-07l-25r-cat-iii/ (retrieved 2026-07-25). *CAT III infrastructure/lighting corroboration.*
- Fraport — "Runway System and Operating Hours" — https://www.fraport.com/en/sustainability/dialog-with-neighbors/noise-and-air/flight-operations/runway-system-and-operating-hours.html (retrieved 2026-07-25). *Curfew/operating-hours primary operator statement.*
- Fraport — "Active Noise Abatement" — https://www.fraport.com/en/sustainability/dialog-with-neighbors/noise-and-air/measures/active-noise-abatement.html (retrieved 2026-07-25). *NAP/NADP/GBAS/AMTIX detail.*
- Fraport — Deicing Procedure (DIP) 2024-2025 — https://cdm.frankfurt-airport.com/content/dam/fraport-company-cdm/documents/binary/documents/deicing-procedure/EN-DIP%202024-2025.pdf (retrieved 2026-07-25). *De-icing pad locations/provisioning.*
- The Local — "Frankfurt airport night flight ban confirmed," 2012-04-04 — https://www.thelocal.de/20120404/41751 (retrieved 2026-07-25). *Curfew legal history.*
- International Law Office / Arnecke Siebold — "Federal Administrative Court upholds flight ban at Frankfurt Airport" — https://internationallawoffice.com/Newsletters/Aviation/Germany/Arnecke-Siebold-Rechtsanwlte/Federal-Administrative-Court-upholds-flight-ban-at-Frankfurt-Airport (retrieved 2026-07-25). *Curfew legal basis.*
- Fluko / FHKD — "Level 3 Flughäfen" and homepage — https://fluko.org/en/flughaefen/flughaefen-level-3/ , https://fluko.org/en/ (retrieved 2026-07-25). *Slot-coordination level and coordinator.*
- DFS — "Locations" — https://www.dfs.de/homepage/en/company/locations/ (retrieved 2026-07-25). *Langen ACC corroboration.*
- FrankfurtRide — Frankfurt Airport terminals guide — https://frankfurtride.com/blog/frankfurt-airport-terminals-guide/ (retrieved 2026-07-25). *Terminal/concourse structure, T2 closure/T3 opening dates — travel-guide source, not AIP-grade.*

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.2 | 2026-07-25 | Built from DFS eAIP; K Global fields from live VAMSYS; folded to 4-page hub pack. |
