# High-Elevation Aerodrome Operations — OM E Procedure

**Scope:** Location-agnostic capability/procedure policy for operations at **high-elevation aerodromes** — the *field-elevation / density-altitude* performance regime, distinct from cruise altitude (a pressurisation/oxygen topic) and from latitude (the Polar doc). Covers density altitude & true-airspeed effects, thrust-limited **takeoff** (longer TODR, reduced net climb gradient, SID minimum-climb-gradient and engine-out escape), energy-managed **landing** (higher groundspeed, longer LDR, higher ROD), pressurisation/oxygen & engine-start considerations, payload/fuel penalties, and the interaction with cold-temperature altimetry. Applies proportionally by elevation and temperature; illustrated by real network fields — Bogotá **SKBO** (~8,360 ft), Quito **SEQM** (~7,910 ft), Addis **HAAB** (~7,656 ft), Mexico City **MMMX** (~7,293 ft), Denver **KDEN** (~5,434 ft) and the mountain field Reno **KRNO** (4,415 ft, hot-and-high). An airport brief *applies* this method to a place; this file *defines* it.
**Version** v0.1 · **Updated** 2026-07-25 · **Status** Draft — public-source-verified (FAA density-altitude & high-altitude material / ICAO Annex 6 & Annex 14 / SKYbrary); type- and field-specific numbers flagged 🟧.

> **Read-me — regime & scoping (read first):** This is an **OM E Operations** procedure (capability/method), **not** a chart, a clearance, or a performance table. It states *what changes* when an aerodrome sits high (or hot enough that its **density altitude** is high) and *how K Global plans around it*; the **actual takeoff/landing distances, RTOW, climb gradients and V-speeds come from the AFM/QRH/OFP performance module for the type, day and runway** — computed at dispatch, never read off this page. "High-elevation" here means the **regime**, not a single altitude: as a working trigger K Global treats any aerodrome **≳ 8,000 ft field elevation, or any field where the day's density altitude drives the performance limit** (a hot lower field like KRNO qualifies), as a high-elevation operation. Where a figure is type- or field-specific it is flagged 🟧 and must be verified against the AFM/OFP. Cruise-altitude pressurisation/oxygen and high-latitude cold cruise are **not** owned here (see Cross-references). Flag legend: 🟥 hard requirement/hazard · 🟧 caution/unverified/field- or type-specific · 🟩 normal. Sim context: X-Plane 11 / SimBrief dispatch.

---

## 1. Snapshot

| Field | Value |
|---|---|
| What this regime is | The **field-elevation / density-altitude** performance regime — reduced air density cuts engine thrust and aerodynamic performance and raises true airspeed/groundspeed for a given indicated speed |
| Working trigger (K Global) | 🟧 **≳ 8,000 ft field elevation**, **or** any field where the day's **density altitude** is the binding performance constraint (hot-and-high lower fields included) |
| Density altitude | **Pressure altitude corrected for non-standard temperature** — the altitude the air "feels like" to the aeroplane. Rises with elevation, temperature and humidity; on a hot day at a high field it can sit **thousands of feet above the field elevation** 🟥 |
| TAS/GS effect | For a given IAS, **TAS ≈ IAS × √(ρ₀/ρ)** — roughly **+2% TAS per 1,000 ft** of density altitude. At 8,000 ft DA, true (and ground) speed at rotation/touchdown is **~15–16% higher** than the same field at sea level 🟥 |
| Takeoff — the limit | 🟥 **Thrust-limited, not always field-length-limited:** flat-rated engines lose available thrust with altitude/temperature; **TODR grows** and the **net take-off flight-path climb gradient shrinks** → SID **minimum-climb-gradient** compliance and engine-out obstacle/escape routing become the binding items |
| Landing — the limit | 🟥 **Higher groundspeed → longer LDR and higher rate of descent.** Landing energy scales with **GS²**; brake energy, autobrake selection and go-around climb gradient all degrade at altitude |
| Payload/fuel penalty | 🟥 High-elevation/hot departures typically force a **reduced takeoff weight** (payload and/or fuel) to meet climb-gradient and field limits — a planning penalty, not just a runway check |
| Cold-temperature link | 🟧 Many high fields are **also cold** (Andean/Ethiopian highlands, winter continental) → cold-temperature altimetry over-read applies **on top of** the density-altitude regime (§8) |
| Network examples | **SKBO** ~8,358 ft · **SEQM** ~7,910 ft · **HAAB** ~7,656 ft · **MMMX** ~7,293 ft · **KDEN** ~5,434 ft · **KRNO** 4,415 ft (hot-and-high, mountainous) 🟧 |

---

## 2. Validation summary

| Domain | Flag | Note |
|---|---|---|
| Density-altitude concept & TAS effect | 🟩 | Pressure altitude corrected for temperature; TAS ≈ IAS × √(ρ₀/ρ), ~+2%/1,000 ft. Sourced (FAA density-altitude / SKYbrary). |
| Takeoff — thrust limit & TODR growth | 🟥 | Reduced air density cuts flat-rated thrust; higher TAS at V-speeds lengthens the ground roll. Actual TODR/RTOW from AFM — **compute, never assume the long runway is enough.** |
| Net climb gradient / SID minimum climb | 🟥 | Second-segment and net take-off-flight-path gradients degrade at high DA; many high/terrain fields publish **>200 ft/NM** SID minima and engine-out procedures. Verify per chart/type. |
| Engine-out escape / driftdown routing | 🟥 | Standard SID climb is not guaranteed OEI at high DA; a **specific engine-out obstacle/escape procedure** (special departure) is required where terrain bites. |
| Landing — LDR & ROD | 🟥 | Higher GS lengthens landing roll (energy ∝ GS²) and raises ROD for a given path angle; brake-energy and go-around gradient degrade. Recompute LDR for the day. |
| Pressurisation / oxygen / engine start | 🟧 | Smaller ground pressurisation differential but reduced bleed/APU margin and hot-and-high start considerations; type-specific — verify AFM/FCOM. |
| Payload/fuel penalty | 🟥 | Weight reduction is often the mitigation; a real dispatch trade, not a formality. |
| Cold-temperature altimetry interaction | 🟧 | Applies at cold high fields on top of the density-altitude regime; see Cold Weather Ops. Field-specific correction thresholds. |

---

## 3. Applicability & the density-altitude concept

- **Three different "altitudes" — do not conflate — 🟥:** this doc owns the **aerodrome field-elevation / density-altitude** regime (performance on/near the runway). **Cruise-altitude** pressurisation and crew/pax oxygen belong to the type/FCOM and general ops; **high latitude** cold cruise belongs to the Polar doc. A field can be high *and* cold *and* short *and* high-latitude simultaneously — this file is one axis of that.
- **Density altitude — 🟩 the governing quantity:** density altitude is **pressure altitude corrected for temperature** (and, more weakly, humidity) — the altitude at which the standard atmosphere has the same air density the aeroplane is actually flying in. High field elevation, high temperature and high humidity each *raise* it. A field at 7,600 ft on an ISA+20 day behaves like a field near **10,000 ft** density altitude. **The performance limit tracks density altitude, not the sign on the field-elevation plate.**
- **True-airspeed / groundspeed effect — 🟥:** aerodynamic forces and indicated airspeed depend on **dynamic pressure (½ρV²)**, so for a given IAS the **true airspeed rises as density falls**: TAS ≈ IAS × √(ρ₀/ρ), a rule-of-thumb **~2% per 1,000 ft** of density altitude. Consequences that drive everything below: at rotation and at touchdown the **groundspeed is materially higher** than the same IAS at sea level (≈+15–16% at 8,000 ft DA), which lengthens ground rolls, raises brake/tyre energy, and steepens the rate of descent needed to hold a given approach angle.
- **Engine-thrust effect — 🟥:** turbofan **thrust falls with reducing air density** (mass flow drops). Flat-rated engines hold rated thrust only up to a **corner-point temperature**; above it, and at altitude, **available thrust decreases** — so a high/hot departure is typically **thrust-limited**, and the excess thrust that produces climb gradient shrinks fastest of all.
- **Why it is a network issue for K Global:** the Andean and Ethiopian highland hubs/alternates (SKBO, SEQM, HAAB), the Mexican plateau (MMMX), the US high plains/mountain fields (KDEN, KRNO) all sit in or near this regime. Widebody weight/thrust margins are **not** immune — see §7.
- **Per-type hot-and-high sensitivity — 🟩/🟧:** the relative hot-and-high sensitivity of each fleet type is captured in the **Fleet Capability Matrix** (`../OM B Fleet/Fleet Capability Matrix.md`, Table D, "Hot-and-high sensitivity" column) — e.g. the geared-turbofan narrowbodies and the A359/B789 rate low, while the heavy quads (A346, B748) and high-MTOW types carry a notable hot/high payload penalty. It is an **indicative type-tendency** brief, not a substitute for the AFM/OFP performance calc for the day (the actual RTOW/gradient numbers remain AFM outputs). Cite the matrix for the per-type tendency rather than restating it.

---

## 4. Takeoff at high elevation — thrust, distance & climb gradient

- **Thrust-limited takeoff — 🟥:** at high density altitude the available takeoff thrust is reduced, so the **regulated take-off weight (RTOW)** is frequently set by **climb gradient or the net take-off flight path**, not by runway length. **Do not assume a long runway removes the constraint** — the limit is often thrust/gradient (as recorded at KRNO, where even the 11,001 ft runway does not lift the hot-and-high penalty).
- **Take-off distance required (TODR) grows — 🟥:** V₁/VR/V₂ are flown at broadly similar **IAS**, but the **TAS/groundspeed at those speeds is higher**, so the aeroplane must accelerate to (and, on an RTO, stop from) a higher true speed — lengthening both the acceleration and the accelerate-stop distances. Combined with reduced thrust, TODR at a high field can exceed the sea-level figure substantially. Balanced-field / V₁ logic is unchanged in method (see Short & Limited Runway Ops) but the *numbers* move.
- **Reduced net climb gradient → SID minimum-climb-gradient compliance — 🟥:** the **net take-off flight path** (first/second/final-segment gradients, all-engine and one-engine-inoperative) degrades at high DA. Many high-elevation and terrain fields publish **SID minimum climb gradients well above the standard 200 ft/NM**, with altitude/temperature-dependent tables. At dispatch: confirm the type can **meet the published SID minimum climb gradient at the planned weight, elevation and temperature** — if not, reduce weight, wait for cooler air, or select a different SID/runway.
- **Engine-out obstacle clearance & escape routing — 🟥:** the SID guarantees terrain clearance **all-engines**; it does **not** guarantee it with an engine failed. At high/terrain fields a **specific engine-out (OEI) obstacle-clearance procedure / emergency-turn / escape routing** is required — often a published special departure (e.g. terrain-driven obstacle departures such as the KRNO SPARKS ONE OBSTACLE). Brief the **OEI escape routing and the driftdown/level-off altitude** before every high-field departure; at fields ringed by high terrain the OEI net flight path and any driftdown ceiling can be the true limiting case. Cross-reference the driftdown method in ETOPS/EDTO and the terrain detail in the airport/airspace briefs.
- **Reduced-thrust (assumed-temperature/flex) takeoff — 🟧:** flex/assumed-temperature derates are **restricted or unavailable** when the field is already thrust-limited, or where a minimum climb gradient or contaminated runway applies. Treat full-rated thrust as the default at a limiting high field and verify the flex policy against the AFM/FCOM. **Operator policy — 🟩 [K Global OpsSpec 2026-07-25]:** reduced-thrust takeoff — **flex (assumed-temperature)** and **fixed derate, capped at a maximum of 25%** — is **permitted fleet-wide**, subject in every case to the AFM/runway/obstacle limits for the day — at a thrust/gradient-limited high field those limits will frequently rule flex/derate out in practice; full-rated thrust remains the fallback.
- **EFB take-off performance application (OPT) — 🟩 [K Global OpsSpec 2026-07-25]:** the **Electronic Flight Bag take-off performance application (OPT)** is **authorised** to compute the field- and gradient-limited RTOW, V-speeds and net take-off flight path at high-elevation/high-density-altitude fields, in place of paper AFM tables, subject to the approved EFB performance software and database being current. This authorises the **calculation tool** only — the underlying thrust/gradient limits (§4) are unchanged.

---

## 5. Landing at high elevation — groundspeed, distance & energy

- **Higher groundspeed for the same VREF — 🟥:** VREF is an **IAS**, but at high DA the corresponding **TAS and touchdown groundspeed are ~15%+ higher** than at sea level. Landing kinetic energy scales with **groundspeed squared**, so the **landing distance required (LDR) lengthens** and **brake and tyre energy rise** — the same effect that makes short high fields doubly demanding (see Short & Limited Runway Ops).
- **Higher rate of descent on the glidepath — 🟥:** to hold a **3° (or steeper) path** at a higher groundspeed the **rate of descent is higher** (ROD ≈ GS × sin θ; ~5 × GS in kt as a rule of thumb). Crews must expect and accept a higher ROD and higher power setting on a stabilised approach; a stabilised-approach gate flown to sea-level ROD expectations will feel fast and high. Energy management on approach is the headline handling item.
- **Autobrake / braking & flap — 🟧:** the higher touchdown groundspeed argues for an **earlier/higher autobrake selection** and disciplined use of reverse and speedbrake; select the **landing flap that minimises approach speed** consistent with go-around performance. Recompute the **operational landing distance** for the day's density altitude, runway state and wind — do not use a generic sea-level number.
- **Go-around / rejected-landing gradient — 🟥:** balked-landing and missed-approach **climb gradients degrade at high DA** exactly as takeoff gradients do, and many high/terrain fields publish **elevated missed-approach climb gradients**. Confirm the aeroplane can meet the published missed-approach gradient at landing weight before commencing the approach; brief the missed-approach vertical and lateral path against terrain (a repeated theme at KRNO/HAAB/SKBO).
- **Circling & visual manoeuvring — 🟧:** circling radii are larger at higher TAS, and high fields are often terrain-constrained; verify circling minima/NA per chart and prefer a straight-in where terrain and NOTAMs allow.

---

## 6. Pressurisation, oxygen, engine start & systems

- **Pressurisation on the ground — 🟩/🟧:** at a high field the **cabin is already near field elevation**, so the ground and initial-climb pressurisation differential is *smaller*, not larger — no special action beyond normal schedules. The relevant cruise cabin-altitude/oxygen limits are a **type/FCOM** matter, not this regime.
- **Engine and APU start — 🟧:** high density altitude reduces **starter/bleed and APU** performance; hot-and-high conditions can slow starts and narrow start margins. Confirm the **APU altitude-start envelope** and any hot-and-high start technique against the FCOM before dispatch to a high field; a marginal APU or bleed defect weighs more here (feeds the MEL screen).
- **Bleed/anti-ice thrust penalty — 🟧:** engine bleed extraction (packs, anti-ice) **further reduces available thrust** on an already thrust-limited departure — the takeoff RTOW/gradient case must be computed with the **anti-ice/bleed configuration actually used** if cold high conditions require it (a direct link to the cold-temperature interaction, §8).
- **Systems/limits to verify — 🟧:** tyre-speed limits (higher liftoff/touchdown groundspeed can approach tyre-speed limits at extreme DA), brake-energy limits, and any type-specific **maximum operating field-elevation** or crosswind limits. Verify against the AFM/FCOM.

---

## 7. Payload, fuel & dispatch penalties

- **Weight reduction is the primary mitigation — 🟥:** where thrust/gradient/field limits cannot all be met at the desired weight, the dispatch answer is a **reduced takeoff weight** — traded as **payload, fuel, or both**. This is a genuine commercial/operational penalty at high-elevation departures and must be planned, not discovered at the runway.
- **Time-of-day / temperature planning — 🟧:** because **temperature drives density altitude**, the same field can be limiting on a hot afternoon and unrestricted at dawn; where the network allows, plan high-field departures for the **cooler part of the day** to recover payload.
- **Runway selection & intersection departures — 🟥:** use the **full length** of the most favourable runway; intersection/reduced-length departures are rarely appropriate at a thrust/gradient-limited high field.
- **Alternate & fuel interaction — 🟧:** a high-elevation destination or alternate may itself carry a landing-weight or go-around-gradient limit; confirm the **destination and alternate** are usable at the planned landing weight, and that any weight reduction still leaves lawful reserves.
- **Compute per type/day — 🟧:** all figures are AFM/OFP outputs. This file sets the *method and the flags*; the *numbers* are produced at dispatch for the specific type, weight, elevation, temperature, wind and runway state.

---

## 8. Interaction with cold-temperature altimetry & terrain

- **Many high fields are also cold — 🟧:** the Andean (SKBO, SEQM), Ethiopian (HAAB) and continental plateau/mountain fields (MMMX, KDEN, KRNO) can be **cold as well as high**. In cold air the **altimeter over-reads** (true altitude below indicated), eroding the very obstacle clearance that the elevated SID/missed-approach gradients are protecting. Apply the **cold-temperature altimetry correction** per the Cold Weather Ops procedure where the field is a Cold Temperature Restricted Airport or below the correction threshold — **on top of** the density-altitude performance work here. (KRNO is FAA-flagged as a Cold Temperature Airport, correction at/below −13 °C.)
- **Terrain is usually the co-hazard — 🟥:** high-elevation fields are frequently **mountain-ringed** (Truckee Meadows bowl at KRNO, Andean terrain at SKBO/SEQM, highland terrain at HAAB). CFIT and the degraded OEI/missed climb gradients are the same problem seen from two sides — brief the **MSA, SID minimum climb gradient, OEI escape routing and missed-approach gradient** together, against the current-AIRAC terrain/obstacle data, before every operation.
- **Do not net the effects the wrong way:** high density altitude and cold temperature push performance in *opposite* directions on thrust (cold air = more thrust/denser air) but the **altimetry over-read hazard exists whenever it is cold**, independent of the density-altitude case. Treat the performance calc and the altimetry correction as **two separate checks**.

---

## 9. Network application (illustrative)

| Field | Elev (ft) | Regime notes | Owning brief |
|---|---|---|---|
| **SKBO** El Dorado | ~8,358 | High-elevation Andean hub; thrust/gradient-limited departures, terrain, frequently cold | `../OM C .../South America/Colombia/SKBO — El Dorado Intl.md` |
| **SEQM** Quito | ~7,910 | High-elevation, terrain-ringed Andean field; hot-and-high + cold; steep terrain | `../OM C .../South America/Ecuador/SEQM — Mariscal Sucre Intl.md` |
| **HAAB** Bole | ~7,656 | Ethiopian highland hub; high-elevation performance is the driver (§ TEM) | `../OM C .../Africa/Ethiopia/HAAB — Bole Intl.md` |
| **MMMX** Benito Juárez | ~7,293 | Mexican plateau; hot-and-high, dense traffic; thrust/gradient limits | `../OM C .../North America/Mexico/MMMX — Benito Juarez Intl.md` |
| **KDEN** Denver | ~5,434 🟧 | High plains; density altitude drives summer RTOW despite long runways | *brief pending* 🟧 |
| **KRNO** Reno-Tahoe | 4,415 | **Hot-and-high, mountainous** — DA, not field length, is the limit; obstacle departures | `../OM C .../North America/United States/KRNO — Reno-Tahoe Intl.md` |

*Elevations are illustrative snapshot figures (some sources vary — e.g. HAAB 7,625–7,656 ft); the owning airport brief §1/§7 is authoritative. KDEN has no K Global brief yet 🟧.*

---

## Cross-references

- **Short & Limited Runway Operations (OM E)** — field-length-limited takeoff/landing, balanced field, LDR factoring (the *distance* side of the same performance coin): `./Short and Limited Runway Operations.md`
- **Cold Weather Operations (OM E)** — cold-temperature altimetry correction and contaminated-runway ops that frequently overlay a cold high field: `./Cold Weather Operations.md`
- **Steep Approach Operations (OM E)** — steep/terrain-constrained approaches that often coincide with high/mountain fields: `./Steep Approach Operations.md`
- **ETOPS / EDTO Procedures (OM E)** — OEI driftdown method underlying high-field engine-out escape routing: `./ETOPS-EDTO Procedures.md`
- **Fleet Capability Matrix (OM B)** — the per-type **hot-and-high sensitivity** column (Table D) as an indicative type-tendency brief; the day's RTOW/gradient numbers stay AFM/OFP outputs. Cite it rather than restating per-type tendencies: `../OM B Fleet/Fleet Capability Matrix.md`
- **A339 — Dispatch / Intro** — the type's hot-and-high notes, performance module and limits: `../OM B Fleet/OM B Airbus/A339/A339 — Dispatch.md`, `../OM B Fleet/OM B Airbus/A339/A339 — Intro.md`
- **KRNO — Reno-Tahoe** (hot-and-high, mountainous; obstacle departure): `../OM C Routes and Destinations/Airports/North America/United States/KRNO — Reno-Tahoe Intl.md`
- **HAAB — Bole** (high-elevation hub): `../OM C Routes and Destinations/Airports/Africa/Ethiopia/HAAB — Bole Intl.md`
- **SKBO / SEQM / MMMX** (high-elevation network fields): `../OM C Routes and Destinations/Airports/South America/Colombia/SKBO — El Dorado Intl.md`, `.../South America/Ecuador/SEQM — Mariscal Sucre Intl.md`, `.../North America/Mexico/MMMX — Benito Juarez Intl.md`

---

## Open items (🟧 — confirm)

- **K Global high-elevation trigger** — the ≳8,000 ft / density-altitude-limited working definition is a proposed policy threshold; confirm and codify (and whether a formal special-airport/enhanced-briefing gate applies, as flagged for KRNO).
- **Type maximum operating field elevation & hot-and-high limits** — confirm the AFM figure and any flex/assumed-temperature restrictions for the A339 and other network types at high fields.
- **SID minimum-climb-gradient & OEI escape data** — held per field/type on the current AIRAC chart and AFM; not stored here. Confirm the fleet meets the published gradients at each high field.
- **KDEN brief** — no K Global airport brief exists for Denver yet; create or confirm before relying on it as a high-elevation example/alternate.
- **APU/engine hot-and-high start envelopes** — verify against FCOM for each type.
- **Field-elevation figures** — snapshot values vary between sources (e.g. HAAB); the owning airport brief is authoritative.

---

## Sources & References
*Public URLs only. Cite origin + retrieved dates. Subscription/in-sim material (AFM/QRH/FCOM, SimBrief performance) may inform content but is not listed. Durable policy — no live weather/performance data stored here.*

- **FAA — Density Altitude (Safety Brief / P-8740-02) & Pilot's Handbook of Aeronautical Knowledge, Ch. 4 (atmosphere, density altitude, performance)** — density altitude = pressure altitude corrected for temperature; effect on thrust, TODR and climb — https://www.faa.gov/sites/faa.gov/files/2022-06/DensityAltitude.pdf and https://www.faa.gov/regulations_policies/handbooks_manuals/aviation/phak (retrieved 2026-07-25).
- **SKYbrary — Density Altitude** — definition, TAS/thrust/performance effects, high-and-hot takeoff and landing implications — https://skybrary.aero/articles/density-altitude (retrieved 2026-07-25).
- **SKYbrary — Mountainous Area Operations / Operations at High Elevation Aerodromes** — terrain, minimum climb gradients, engine-out escape, OEI obstacle clearance — https://skybrary.aero/articles/mountainous-area-operations (retrieved 2026-07-25).
- **SKYbrary — Take-off / Net Take-off Flight Path & Minimum Climb Gradient** — reduced climb gradient at high DA, SID minimum-climb-gradient compliance, OEI net flight path — https://skybrary.aero/articles/aircraft-performance (retrieved 2026-07-25) 🟧 confirm exact article.
- **ICAO Annex 6 — Operation of Aircraft, Part I (aeroplane performance operating limitations — take-off, en-route OEI, landing)** — obstacle-limited/climb-limited take-off weight, net flight path — summarised via SKYbrary (ICAO not freely hosted): https://skybrary.aero/articles/aeroplane-performance (retrieved 2026-07-25).
- **ICAO Annex 14 — Aerodromes, Vol I (aerodrome reference temperature, declared distances, physical characteristics)** — high/hot aerodrome design basis referenced for performance context — via SKYbrary (retrieved 2026-07-25).
- **FAA AIM 7-3 / Cold Temperature Restricted Airports** — cold-temperature altimetry over-read and correction, cited for the cold-high interaction (see Cold Weather Ops) — https://www.faa.gov/air_traffic/publications/atpubs/aim_html/chap7_section_3.html (retrieved 2026-07-25).

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1.3 | 2026-07-25 | OpsSpec batch 3: TA/TL published, GLS where supported, EFB perf authorised, derate ≤25%, PIC extra-fuel discretion, tankering ≥10% guideline. |
| v0.1.2 | 2026-07-25 | OpsSpec batch 2: operator approvals set (RVSM all mainline, oceanic RNP4+RNP10, NAT HLA, CPDLC/ADS-C FANS, PBCS, cold-temp correction crew+FMS, flex/derate takeoff, MMEL baseline, autoland currency, RNP-AR per-field). |
| v0.1.1 | 2026-07-25 | Wired per-type capability facts to the Fleet Capability Matrix (operator-approval values remain pending OpsSpec). Added a pointer to the matrix hot-and-high sensitivity column (Table D) as an indicative per-type tendency brief; day's RTOW/gradient numbers stay AFM/OFP outputs. |
| v0.1 | 2026-07-25 | Initial draft. Third OM E — Operations location-agnostic procedure. Defines the high-elevation / density-altitude *aerodrome-performance* regime (distinct from cruise altitude and from latitude): density altitude & TAS/GS effects, thrust-limited takeoff with TODR growth and reduced net climb gradient (SID minimum-climb-gradient + OEI escape routing), energy-managed landing (higher GS/LDR/ROD), pressurisation/oxygen & engine-start considerations, payload/fuel penalties, and the cold-temperature-altimetry/terrain interaction. Illustrated with real network fields (SKBO/SEQM/HAAB/MMMX/KDEN/KRNO). Built from FAA density-altitude & PHAK material + ICAO Annex 6/14 + SKYbrary. Cross-linked to Short & Limited Runway Ops, Cold Weather Ops, Steep Approach Ops, ETOPS/EDTO, A339 Dispatch/Intro, and the KRNO/HAAB/SKBO/SEQM/MMMX briefs. Trigger threshold, type limits and KDEN brief flagged open. |
