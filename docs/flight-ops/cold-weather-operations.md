# Cold Weather Operations — OM E Procedure

**Scope:** Location-agnostic capability/procedure policy for the **ground & airfield cold-weather regime** — ground **de/anti-icing** (Type I/II/III/IV fluids, holdover times, the clean-aircraft concept, the pre-takeoff contamination check), **contaminated-runway operations** via the **Global Reporting Format (GRF)** with **RWYCC / RCAM / TALPA** and braking-action reporting, **cold-temperature altimetry corrections** (Cold Temperature Restricted Airports and the ICAO cold-temperature error concept), **cold-soaked-fuel frost**, **engine/APU cold start & limits**, winter ops & recovery at remote diversion fields, and **cold-weather MEL** items. This doc owns the **ground/aerodrome** cold regime; the **cruise fuel-freeze / cold-soak** hazard is owned by the Polar & High-Latitude doc (cross-referenced, not duplicated). Applies wherever ground contamination, cold-soaked structure, cold surfaces or cold-temperature altimetry bite — winter continental, high-latitude and cold high-elevation fields. An airport brief flags a field's cold hazards; this file *defines the method*.
**Version** v0.1 · **Updated** 2026-07-25 · **Status** Draft — public-source-verified (ICAO Doc 9640 / Annex 6 / Annex 14 & GRF / TALPA material / FAA / SKYbrary); type- and field-specific numbers flagged 🟧.

> **Read-me — regime & scoping (read first):** This is an **OM E Operations** procedure (capability/method), **not** a chart, a clearance, or a holdover/altimetry table. It states the **cold-weather ground & airfield concepts and how K Global applies them**; the **actual holdover times, fluid types/mixes, RWYCC-to-braking mapping, cold-temperature corrections and contaminated landing/takeoff distances come from the current HOT tables, the GRF report, the ICAO cold-temperature error table and the AFM/OFP** — pulled at the time and place of operation, never read off this page. **Division of labour:** this doc = the **ground/aerodrome** cold regime (de-ice, contaminated runway, cold-temp altimetry, cold start); the **cruise fuel-freeze / cold-soak** limit lives in the **Polar & High-Latitude** doc; **runway declared distances and landing-distance factoring** live in **Short & Limited Runway Ops** (this doc supplies the RWYCC/braking-action input). Where a figure is type-/fluid-/field-specific it is flagged 🟧. Flag legend: 🟥 hard requirement/hazard · 🟧 caution/unverified/field- or type-specific · 🟩 normal. Sim context: X-Plane 11 / SimBrief dispatch.

---

## 1. Snapshot

| Field | Value |
|---|---|
| What this regime is | The **ground & airfield cold-weather** regime — airframe contamination, contaminated runways, cold-temperature altimetry, cold-soaked structure/fuel, cold start. **Not** cruise fuel-freeze (that is the Polar doc) |
| Clean-aircraft concept | 🟥 **No person may take off with frost, ice or snow adhering to any critical surface** (wing, control surface, stabiliser, engine inlet, sensors). The overriding rule — everything below serves it |
| De/anti-icing fluids | 🟩 **Type I** (heated, low-viscosity — de-ice) · **Type II/III/IV** (thickened — anti-ice holdover). Type IV = longest holdover; Type III = regional/lower-speed. Applied per SAE/ISO standards |
| Holdover time (HOT) | 🟥 The estimated time anti-ice fluid protects the surface, from **HOT tables** by fluid/precip type/intensity/OAT; a **guideline**, superseded by the **pre-takeoff contamination check** 🟥 |
| Pre-takeoff contamination check | 🟥 A check that the critical surfaces remain clean **within the HOT and before takeoff**; if HOT is exceeded or contamination is seen → **re-treat** |
| Runway condition reporting | 🟥 **Global Reporting Format (GRF)** — the aerodrome assigns a **Runway Condition Code (RWYCC 0–6)** per third of the runway using the **RCAM (Runway Condition Assessment Matrix / TALPA)**; crews get RWYCC + contaminant + depth + braking action |
| Braking action | 🟥 RWYCC maps to braking action (Good→Nil); feeds the **operational landing-distance assessment** (Short & Limited Runway Ops). RWYCC **0** / "Nil" reported = **runway not usable** 🟥 |
| Cold-temperature altimetry | 🟥 In cold air the **altimeter over-reads** (true altitude below indicated). Apply the **ICAO cold-temperature error correction** at **Cold Temperature Restricted Airports (CTRA)** / below the field threshold, and **report corrected altitudes to ATC** |
| Cold-soaked-fuel frost (CSFF) | 🟧 Frost on the upper wing over cold-soaked tanks even in above-freezing humid conditions after a cold cruise — inspect/de-ice |
| Cold alternates (network) | 🟧 **BGSF, BGTL, CYZF** — remote winter diversion fields; de-ice, RWYCC, cold-temp correction and recovery all apply |

---

## 2. Validation summary

| Domain | Flag | Note |
|---|---|---|
| Clean-aircraft concept | 🟥 | No takeoff with contamination on critical surfaces. ICAO Doc 9640 / Annex 6. The non-negotiable rule. |
| De/anti-icing fluids (I/II/III/IV) | 🟩 | Type I de-ice; Type II/III/IV thickened anti-ice holdover. SAE/ISO fluid standards. Type/mix from HOT tables. |
| Holdover time & pre-takeoff check | 🟥 | HOT is a guideline from tables; the **pre-takeoff contamination check** governs. Exceed HOT or see contamination → re-treat. |
| Global Reporting Format (GRF) / RWYCC / RCAM / TALPA | 🟥 | ICAO GRF live worldwide since 2021; RWYCC 0–6 per runway third via RCAM; harmonised with FAA TALPA. Report includes contaminant/depth/coverage. |
| Braking action → landing distance | 🟥 | RWYCC/braking action feeds the operational landing-distance assessment (Short & Limited Runway Ops §5). Nil/0 = unusable. |
| Cold-temperature altimetry correction | 🟥 | Altimeter over-reads in cold air; ICAO error table / CTRA correction; report corrected altitude to ATC. Field threshold-specific. |
| Cold-soaked-fuel frost | 🟧 | Upper-wing frost over cold-soaked tanks post-cruise; inspect and treat under clean-aircraft rule. |
| Engine/APU cold start & limits, MEL | 🟧 | Cold-start technique, oil/hydraulic/tyre cold limits, APU start envelope; cold-weather MEL items (anti-ice, probe heat, APU). Type-specific — verify FCOM/MEL. |

---

## 3. The clean-aircraft concept & ground de/anti-icing

- **Clean-aircraft concept — 🟥 the governing rule:** **no takeoff may be attempted with frost, snow, slush or ice adhering to the wings, control surfaces, horizontal stabiliser, propellers, engine inlets, or other critical surfaces (including sensors/probes and, per policy, the fuselage).** Contamination destroys lift, increases drag and stall speed, and can jam controls — it has caused numerous fatal takeoff accidents. Everything in this section exists to deliver a clean aeroplane at the start of the takeoff roll.
- **De-icing vs anti-icing — 🟩:**
  - **De-icing** removes existing contamination — typically **heated Type I** fluid (orange, low viscosity), and/or mechanical/forced-air methods.
  - **Anti-icing** provides a protective film that delays re-contamination — **thickened Type II/III/IV** fluids applied cold or hot.
  - A **two-step** procedure (Type I de-ice, then Type II/IV anti-ice) is common in active precipitation.
- **Fluid types — 🟩/🟧:**
  - **Type I** — low viscosity, **de-ice**, short holdover.
  - **Type II** — thickened, **anti-ice** holdover, for aeroplanes with rotation speed ≳ 100 kt.
  - **Type III** — thickened, intermediate, for **lower-speed/regional** aeroplanes.
  - **Type IV** — thickened, **longest holdover**, the widebody anti-ice standard in significant precipitation.
  Fluids meet **SAE/ISO** specifications; the **type, mix (fluid/water ratio) and application** are selected from the current HOT tables for the conditions.
- **Holdover time (HOT) — 🟥:** the **estimated time** the anti-ice fluid will prevent the formation/accumulation of contamination, read from **HOT tables** as a function of **fluid type/mix, precipitation type and intensity, and OAT**. HOT is a **planning guideline only** — it starts at the **beginning of the final fluid application** and is invalidated by heavier precipitation, a change of precip type, or a long taxi/hold.
- **Pre-takeoff contamination check — 🟥 governs over HOT:** before takeoff the crew must confirm the **critical surfaces remain clean**. If the **HOT has been exceeded**, or **contamination is observed**, or conditions changed — **the aeroplane must be re-treated** (return for de-ice) before takeoff. Do not depart on an expired HOT without a positive contamination check.
- **Practical dispatch discipline — 🟧:** plan the **de-ice/hold/taxi sequence to depart within the HOT**, brief the re-treat trigger, and confirm **fluid availability** at remote fields (many cold alternates have limited de-ice capability — factor into alternate selection, §7).

---

## 4. Contaminated-runway operations — GRF, RWYCC, RCAM & TALPA

- **Global Reporting Format (GRF) — 🟥:** since **ICAO GRF entered force (2021)**, aerodromes assess and report runway surface condition in a **standardised** way. For each **third** of the runway the aerodrome reports a **Runway Condition Code (RWYCC 0–6)**, the **contaminant type**, **depth**, and **coverage (%)** — assembled into a **Runway Condition Report (RCR)**. This replaced the old, inconsistent friction/"good-medium-poor" ad-hoc reporting.
- **RCAM / TALPA — 🟩:** the aerodrome assigns the RWYCC using the **Runway Condition Assessment Matrix (RCAM)** — the ICAO matrix (harmonised with the FAA **TALPA** framework) that maps **contaminant type, depth and temperature** to a code and an **associated braking action**. The crew uses the reported RWYCC (downgraded by pilot report/experience if worse than assessed) to select the **contaminated performance data**.
- **RWYCC → braking action → performance — 🟥:**
  - **6** = dry · **5** = good (wet/thin frost) · **4** = good-to-medium · **3** = medium · **2** = medium-to-poor · **1** = poor · **0** = **less than poor / Nil**.
  - **RWYCC 0 / "Nil" braking action → the runway is not usable** for landing or takeoff.
  - The reported code and braking action feed the **operational (in-flight) landing-distance assessment** and the **contaminated accelerate-stop / V₁** — both **owned in Short & Limited Runway Ops** (this doc supplies the surface input; do not duplicate the distance method).
- **Pilot braking-action reports — 🟧:** crews **report actual braking action** (Good/Medium/Poor/Nil, or the RWYCC-linked terms) after landing; a report **worse** than the published RWYCC must **downgrade** the code for following traffic. Standardised terminology per the GRF/AIM.
- **Contaminant-specific hazards — 🟥:** standing water/slush → **aquaplaning (hydroplaning)** and impingement drag on takeoff; wet snow → drag + poor braking; **ice / compacted snow** → very poor braking and directional control; **cold, dry snow on a very cold runway** may give better braking than wet ice. Use the **reported** condition, and recompute; a downhill slope or tailwind compounds every case.

---

## 5. Cold-temperature altimetry corrections

- **The error — 🟥:** the pressure altimeter is calibrated to the ISA temperature profile; in air **colder than ISA** the atmosphere is denser and the aircraft is **lower than the altimeter indicates** — the altimeter **over-reads**, eroding obstacle clearance on approach, the missed approach, and departure. The colder the temperature and the greater the height above the altimeter source, the larger the error (tens to hundreds of feet).
- **When & where to correct — 🟥:**
  - **Cold Temperature Restricted Airports (CTRA):** the FAA (and equivalent authorities/AIPs) publish airports where the terrain/procedure margin requires a **mandatory correction at/below a published airport-specific temperature** — applied to the specified segment(s) (intermediate, final, and/or missed approach). *Example in the network: KRNO is FAA-flagged, correction at/below −13 °C.*
  - **General cold-temperature correction:** where obstacle clearance matters and temperatures are well below ISA, apply the **ICAO cold-temperature error correction** (the ICAO **cold-temperature error table**, e.g. FAA AIM 7-3) to the affected altitudes.
- **Operator policy — 🟩 [K Global OpsSpec 2026-07-25]:** K Global's cold-temperature altitude correction is **crew-applied by policy** — the crew computes and applies the correction as the default method on every affected segment. Where a type's FMS provides an **approved cold-temperature compensation**, that automatic correction is **credited** in place of the manual step (i.e. the crew need not separately hand-compute it), but only for the segment(s) the system is actually approved/active for — confirm per type before crediting it.
- **How — 🟧:**
  - **Aircraft with temperature compensation:** if the FMS/altimetry system provides an **approved cold-temperature compensation** and it is used, follow the type procedure; **confirm whether the system is approved/active for the segment** (some cover the final approach only).
  - **Manual correction:** where no approved compensation applies (the crew-applied default per policy above), compute the correction from the **ICAO table** (function of height above the reporting station and aerodrome temperature) and **add it to the affected published altitude(s)**.
  - **Report to ATC — 🟥:** when applying a correction to an **assigned/ATC altitude** (e.g. an intermediate segment or a holding altitude), **advise ATC** of the corrected altitude so separation is preserved. (Final-approach corrections inside the FAF are generally flown without a separate ATC advisory per procedure — verify against the applicable AIP/AIM.)
- **Do not confuse with QNH/altimeter setting — 🟧:** the cold-temperature error exists **even with the correct QNH set** — it is a temperature effect on the height of pressure levels, not a subscale error. It is also **independent of** the high-elevation density-altitude performance case (that is High-Elevation Aerodrome Ops); a **cold high field needs both** checks.

---

## 6. Cold-soaked-fuel frost, engine/APU cold start & limits

- **Cold-soaked-fuel frost (CSFF) — 🟧:** after a long high-altitude/cold cruise the wing structure over the fuel tanks is **cold-soaked**; on the ground, **frost can form on the upper (and sometimes lower) wing surface even in above-freezing, humid conditions**, and even without visible precipitation. It falls under the **clean-aircraft rule** — inspect the upper wing after a cold sector, and **de-ice** if frost is present (some types permit a thin, defined under-wing frost — verify the type limit before invoking any allowance).
- **Cold-soaked structure — 🟧:** cold-soaked fuel can also refreeze precipitation contact-frozen to the wing (clear ice) that is hard to see — brief a **tactile check** where policy/type requires after cold sectors in humid/precip conditions.
- **Engine & APU cold start — 🟧:** extreme cold affects **starter torque, oil viscosity, and start times**; follow the **cold-start technique and any pre-oil/pre-heat requirements** in the FCOM. Confirm the **APU cold-start / cold-soak limits** and battery capability — the APU is often the power source needed at a cold, unserviced diversion field (link to the Polar-doc MEL weighting).
- **Cold ground limits — 🟧:** watch **minimum operating temperatures** (fuel, hydraulic fluid, tyres, seals, servicing), **hydraulic/tyre cold limits**, and hangar/pre-heat requirements; verify the type cold-weather limits before dispatch to a very cold field.

---

## 7. Winter ops & recovery at remote diversion fields

- **Remote cold alternates — 🟥:** the network's cold diversion fields — **BGSF Kangerlussuaq**, **BGTL Pituffik**, **CYZF Yellowknife** — combine everything in this doc: **limited/uncertain de-ice capability**, contaminated runways (**RWYCC** the constraint on their shorter runways), routine **cold-temperature altimetry correction**, and **CSFF** after a cold cruise. Factor **de-ice availability** into alternate selection — an alternate that cannot re-treat the aeroplane for the departure leg is a one-way field in precipitation.
- **Recovery after a cold diversion — 🟧:** plan for the consequences of actually diverting to a cold, sparsely-serviced field — **ground heating, de-ice fluid stock, passenger welfare, snow clearance, limited handling** — echoing the FAA polar recovery-plan concept (Polar doc). This is an operational-planning item, not a live-data store.
- **Runway state on arrival — 🟥:** treat the **GRF RWYCC** as the binding input for the **arrival landing-distance assessment** (Short & Limited Runway Ops §5); a short, cold, contaminated remote runway is the compound worst case.
- **Field-specific detail:** altimetry thresholds, runway/RWYCC history, de-ice capability and recovery notes live in **each field's airport brief** — do not duplicate here.

---

## 8. Cold-weather MEL & dispatch considerations

- **MEL items that weigh more in the cold — 🟥 (screen at dispatch):**
  - **Engine/wing anti-ice, probe/pitot/static heat** — an inoperative anti-ice or probe-heat item may be **no-go** in icing/cold conditions where it is dispatch-permissible in warm weather.
  - **APU** — cold-start capability and backup electrics/bleed after a diversion to a cold field.
  - **Air-conditioning pack / bleed** — pressurisation/anti-ice bleed margin.
  - **Fuel-temperature indication** — the fuel-freeze monitor (primarily a **Polar-doc** concern, but relevant to any cold sector).
  - **Wheel-brake / anti-skid** — braking-action-critical on contaminated runways.
  Re-weigh any open MEL item against the **cold/contaminated** environment and document the assessment on the release.
- **De-ice planning — 🟧:** confirm **de-ice availability and fluid type** at departure **and** at the destination/alternates; build the **HOT-limited departure sequence** and the re-treat trigger into the plan.
- **Performance data — 🟥:** ensure the **contaminated-runway takeoff and landing data** (and the reduced/contaminated V₁) are available for the day's RWYCC — computed via Short & Limited Runway Ops, using this doc's surface input.
- **Do not net opposing effects — 🟧:** cold air **increases** available thrust (helps takeoff/climb) but the **contaminated runway, altimetry over-read and anti-ice bleed penalty** all **degrade** the margin — treat each as a separate check; the runway and altimetry hazards do not switch off just because the cold air helps thrust.

---

## Cross-references

- **Polar & High-Latitude Operations (OM E)** — **owns** the **cruise fuel-freeze / cold-soak** limit (Jet A-1 −47 °C, tank-temperature monitoring, descend/increase-Mach mitigation); this doc deliberately does **not** duplicate it: `./Polar and High-Latitude Operations.md`
- **Short & Limited Runway Operations (OM E)** — **owns** the contaminated/wet **landing-distance factoring**, the **operational (arrival) landing-distance assessment** and the **contaminated accelerate-stop / V₁** that consume this doc's RWYCC/braking-action input: `./Short and Limited Runway Operations.md`
- **High-Elevation Aerodrome Operations (OM E)** — the density-altitude performance case that overlays a **cold high** field; cold-temp altimetry applies on top of it: `./High-Elevation Aerodrome Operations.md`
- **Steep Approach Operations (OM E)** — steep approaches where cold-temperature altimetry error is most obstacle-critical: `./Steep Approach Operations.md`
- **ETOPS / EDTO Procedures (OM E)** — alternate suitability including runway state and de-ice availability in the diversion window: `./ETOPS-EDTO Procedures.md`
- **BGSF — Kangerlussuaq** (cold alternate; de-ice, RWYCC, cold-temp correction): `../OM C Routes and Destinations/Airports/North America/Greenland/BGSF — Kangerlussuaq.md`
- **BGTL — Pituffik Space Base** (far-north cold alternate; contaminated-runway ops): `../OM C Routes and Destinations/Airports/North America/Greenland/BGTL — Pituffik Space Base.md`
- **CYZF — Yellowknife** (NDA cold alternate; winter ops): `../OM C Routes and Destinations/Airports/North America/Canada/CYZF — Yellowknife.md`
- **KRNO — Reno-Tahoe** (Cold Temperature Airport, correction at/below −13 °C): `../OM C Routes and Destinations/Airports/North America/United States/KRNO — Reno-Tahoe Intl.md`
- **A339 — Dispatch** — the type's anti-ice/de-ice, cold-start and cold-weather limits: `../OM B Fleet/OM B Airbus/A339/A339 — Dispatch.md`

---

## Open items (🟧 — confirm)

- **Holdover-time tables & fluid policy** — confirm the current SAE/authority HOT tables in use, the fluid types stocked network-wide, and the K Global pre-takeoff-contamination-check SOP and re-treat triggers.
- **Cold-temperature-correction policy** — RESOLVED by OpsSpec batch 2 (2026-07-25): **crew-applied by policy**, with **FMS-automatic correction credited where the type provides it** 🟩. Still open: confirm whether the A339 (and other types) provide **approved** cold-temperature compensation and for which segments; codify the ATC-report rule (which segments require advising ATC).
- **CTRA list & thresholds** — hold per-field CTRA temperatures in the airport briefs (KRNO −13 °C confirmed); build the network list.
- **Contaminated-runway performance data** — confirm the AFM contaminated takeoff/landing data and contaminated-V₁ logic are available in the SimBrief/AFM profile for each type.
- **Under-wing frost allowance** — confirm the type-specific permitted-frost limit (if any) before any allowance is invoked under the clean-aircraft rule.
- **De-ice availability at cold alternates** — confirm BGSF/BGTL/CYZF de-ice capability and fluid stock; record in each brief.
- **Cold-weather MEL subset** — confirm the anti-ice/probe-heat/APU/pack items that become no-go in cold/icing conditions.

---

## Sources & References
*Public URLs only. Cite origin + retrieved dates. Subscription/in-sim material (HOT tables, AFM/QRH/FCOM, SimBrief) may inform content but is not listed. Durable policy — no live weather/NOTAM/RWYCC/HOT data stored here.*

- **ICAO Doc 9640 — Manual of Aircraft Ground De-icing/Anti-icing Operations** — clean-aircraft concept, Type I/II/III/IV fluids, holdover time, de/anti-ice procedures, pre-takeoff check — summarised via SKYbrary (ICAO not freely hosted): https://skybrary.aero/articles/aircraft-ground-de-icing (retrieved 2026-07-25).
- **SKYbrary — Aircraft De-icing / Anti-icing / Holdover Time / Clean Aircraft Concept** — fluid types, HOT tables, pre-takeoff contamination check, wing contamination effects — https://skybrary.aero/articles/holdover-time-hot and https://skybrary.aero/articles/de-icing-anti-icing-fluid (retrieved 2026-07-25).
- **ICAO — Global Reporting Format (GRF) for Runway Surface Conditions / Annex 6, 8, 14 & PANS-Aerodromes (Doc 9981)** — RWYCC 0–6 per runway third, Runway Condition Report, RCAM, in force 2021 — via SKYbrary: https://skybrary.aero/articles/global-reporting-format-grf (retrieved 2026-07-25).
- **FAA — TALPA (Takeoff and Landing Performance Assessment) / Runway Condition Assessment Matrix (RCAM) & braking-action reporting** — contaminant-to-RWYCC mapping harmonised with ICAO GRF, braking-action terminology — https://www.faa.gov/airports/engineering/talpa (retrieved 2026-07-25).
- **SKYbrary — Contaminated Runway / Braking Action / Aquaplaning** — contaminant hazards, braking-action reporting, hydroplaning — https://skybrary.aero/articles/contaminated-runway and https://skybrary.aero/articles/runway-condition-code-rwycc (retrieved 2026-07-25).
- **FAA AIM 7-3 & Cold Temperature Restricted Airports (CTRA) / ICAO Cold-Temperature Error Table** — altimeter over-read in cold air, mandatory correction airports/segments, ICAO correction table, ATC reporting — https://www.faa.gov/air_traffic/publications/atpubs/aim_html/chap7_section_3.html and https://www.faa.gov/air_traffic/flight_info/aeronav/digital_products/dtpp/search (CTRA list) (retrieved 2026-07-25).
- **SKYbrary — Cold Temperature Altitude Corrections / Cold Soaked Fuel Frost** — cold-temperature altimetry correction concept and CSFF formation and treatment — https://skybrary.aero/articles/altimeter-temperature-error-correction and https://skybrary.aero/articles/cold-soaked-fuel-frost (retrieved 2026-07-25).
- **ICAO Annex 6 — Operation of Aircraft, Part I (ground de-icing/anti-icing, adverse-weather operations)** — operator de/anti-ice programme requirement — via SKYbrary (retrieved 2026-07-25).

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1.1 | 2026-07-25 | OpsSpec batch 2: operator approvals set (RVSM all mainline, oceanic RNP4+RNP10, NAT HLA, CPDLC/ADS-C FANS, PBCS, cold-temp correction crew+FMS, flex/derate takeoff, MMEL baseline, autoland currency, RNP-AR per-field). |
| v0.1 | 2026-07-25 | Initial draft. Fifth OM E — Operations location-agnostic procedure for the **ground & airfield cold-weather** regime (explicitly not cruise fuel-freeze — cross-referenced to the Polar doc). Defines the clean-aircraft concept and ground de/anti-icing (Type I/II/III/IV fluids, holdover time, pre-takeoff contamination check, re-treat), contaminated-runway ops via the Global Reporting Format (RWYCC 0–6 / RCAM / TALPA / braking-action reporting, feeding the Short & Limited Runway landing-distance assessment), cold-temperature altimetry corrections (CTRA, ICAO cold-temperature error table, ATC reporting), cold-soaked-fuel frost, engine/APU cold start & cold limits, winter ops & recovery at remote diversion fields (BGSF/BGTL/CYZF), and cold-weather MEL items. Built from ICAO Doc 9640 + GRF/PANS-Aerodromes + FAA TALPA/AIM 7-3/CTRA + Annex 6/14 + SKYbrary. Cross-linked to Polar & High-Latitude Ops, Short & Limited Runway Ops, High-Elevation Aerodrome Ops, Steep Approach Ops, ETOPS/EDTO, the cold alternate briefs and A339 Dispatch. HOT tables, cold-temp-compensation capability, CTRA list and cold-weather MEL subset flagged open. |
