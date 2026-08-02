# Polar & High-Latitude Operations — OM E Procedure

**Scope:** Location-agnostic capability/procedure policy for operations at high latitude and near the poles — fuel freeze & cold soak, cold-weather diversion-field ops, communications/datalink redundancy, space-weather & cosmic radiation, true/grid navigation, and en-route-alternate & MEL strategy. Applies proportionally by latitude; illustrated by the reference EDDF–KSFO OFP (2026-07-25) (A330-900neo) whose great-circle track peaks at **~70°N** through the Reykjavik and Nuuk FIRs and Canadian Northern Domestic Airspace.
**Version** v0.1 · **Updated** 2026-07-25 · **Status** Draft — public-source-verified (FAA AC 120-42B / ICAO / SKYbrary / NOAA SWPC); some numeric thresholds route-/type-specific and flagged 🟧.

> **Read-me — regime & scoping (read first):** This is an **OM E Operations** procedure (capability/method), not an airspace brief and not a clearance. The **FAA "North Polar Area" is defined as the entire area north of 78°N** (AC 120-42B); the formal *polar-route* rule-set (two designated en-route alternates, a fuel-freeze strategy, cold-soak plan, a cosmic-radiation program, and communication redundancy) is triggered there. **the reference EDDF–KSFO route peaks at ~70°N — it is high-latitude / near-polar, NOT inside the 78°N polar area.** So the polar-route requirements are treated here as **good practice applied proportionally**: this document states, item by item, which ones already bite at 70°N (fuel freeze, cold-weather diversion ops, HF/space-weather degradation, sparse alternates, true/grid nav in Canadian NDA) and which are reserved for true polar routing north of 78°N (formal two-alternate designation, Iridium-only comms north of 80°N, S-scale divert triggers). Live data (fuel temp, space-wx, NOTAM, wx) is pulled at dispatch and in flight — this file is durable policy only. Airspace specifics live in the Arctic and North Atlantic briefs (cross-referenced, not duplicated). Flag legend: 🟥 hard requirement/hazard · 🟧 caution/unverified/route-specific · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| Regime (this doc) | **High-latitude / near-polar**, peak ~70°N. **Not** the FAA North Polar Area (north of 78°N) |
| Formal polar-route trigger | **North of 78°N** (FAA AC 120-42B) — reference regime, not this route |
| Binding hazards at ~70°N | 🟥 **Fuel freeze / cold soak** (Jet A-1 −47 °C vs en-route SAT to −54 °C) · cold-weather diversion-field ops (altimetry, contaminated runway, de-ice) · **HF/GNSS space-weather degradation** · **true-track/grid nav** in Canadian NDA · sparse, widely-spaced alternates |
| Reserved for true polar (>78°N) | Formal two-designated-en-route-alternate rule · **Iridium mandatory north of 80°N** · NOAA S-scale as an operational divert trigger · full cosmic-radiation dose program |
| Fuel grade / freeze pt | **Jet A-1, freeze point −47 °C** (Jet A −40 °C; TS-1 ≈ −50 °C). Confirm loaded grade on the OFP |
| Comms posture (70°N) | HF (Reykjavik Radio / Canadian HF) + SATCOM (Inmarsat qualifies) + CPDLC/ADS-C; VHF at terminals. Carry redundancy; Iridium not *mandated* below 80°N but is the space-wx fallback |
| Nav posture | **TRUE-track reference across Canadian NDA** (0° declination navaids/procedures); grid nav reserved for high Arctic (~>78°N); IRS alignment discipline at high latitude |
| Illustrative OFP | **Reference EDDF–KSFO OFP (2026-07-25)**, A330-900neo; BIRD → BGGL → Canadian NDA/Edmonton FIR; cold alternates BGSF, BGTL, CYZF |

---

## 2. Validation summary

| Domain | Flag | Note |
|---|---|---|
| Regime classification (70°N vs 78°N) | 🟩 | Verified against FAA AC 120-42B North Polar Area definition (north of 78°N). Route is high-latitude, below the polar-area floor. |
| Fuel freeze / cold soak | 🟥 | Jet A-1 freeze −47 °C; OFP SAT to −54 °C means the freeze margin is real — **monitor tank fuel temperature**, mitigate by descent to warmer air and/or higher Mach. Binds at 70°N. |
| Cold-weather diversion-field ops | 🟥 | Cold-temperature altimetry corrections, contaminated-runway braking, cold-soaked-fuel frost, de-ice at BGSF/BGTL/CYZF. Binds at any high-lat divert. |
| Communications / datalink | 🟧 | HF + SATCOM (Inmarsat qualifies at 70°N) + CPDLC/ADS-C adequate; **Iridium mandatory only north of 80°N**. Carry redundancy; expect HF degradation in space-wx. |
| Space weather (HF/GNSS) | 🟧 | Polar-cap absorption (S3+) degrades HF and GNSS at high latitude. On true polar routes NOAA **S-scale is the divert trigger**; at 70°N it is a monitored dispatch input, not an automatic divert. |
| Cosmic radiation | 🟧 | Elevated dose at high lat/alt; SPE dose spikes. Dose-monitoring **principle** applies; formal program is a >78°N/regulatory item. No live dose data stored here. |
| Navigation (true/grid, mag pole) | 🟥 | Magnetic heading unreliable at high latitude; **NDA is TRUE-referenced**; grid reserved for high Arctic. Binds across the NDA segment. |
| En-route alternates / MEL | 🟥 | Sparse fields; designate adequate en-route alternate(s) proportional to latitude. MEL items (APU, one pack, anti-ice, fuel-temp indication) weigh more in cold/remote ops. |

---

## 3. Definitions & regime — where 70°N sits vs the 78°N polar area

- **FAA North Polar Area — 🟥 definition:** per **FAA AC 120-42B**, the North Polar Area is **the entire area north of 78°N** (the South Polar Area is south of 60°S). Operations *within* that area invoke the FAA polar-operations requirements on top of ETOPS/EDTO: a validated set of **diversion (en-route) alternate airports**, a **fuel-freeze strategy**, **cold-soak** consideration, a **recovery plan for passengers after a diversion to a cold place**, a **crew training** element, and a **communication-capability** requirement (routes must retain a means of communication under expected space-weather conditions). 🟧 Exact AC 120-42B clause numbering not reproduced here (durable summary; verify against the AC).
- **Where the reference route sits (EDDF–KSFO, 2026-07-25):** the great-circle EDDF–KSFO track **peaks at ~70°N** across the Reykjavik (BIRD) and Nuuk (BGGL) FIRs and Canadian Northern Domestic Airspace. That is **~8° of latitude south of the 78°N polar floor** — **high-latitude / near-polar, not "polar"** in the FAA sense. The formal polar-route rule-set is therefore **not legally triggered**, but the underlying hazards do not switch off at 78°N; several are already present at 70°N.
- **Proportional-application principle — which requirements bite at 70°N:**
  - **Bites now (70°N):** fuel freeze & cold soak (§4); cold-weather ops at diversion fields (§5); HF + space-weather HF/GNSS degradation and SATCOM redundancy (§6, §7); true-track navigation across the Canadian NDA and magnetic-heading unreliability (§8); sparse, widely-spaced alternates and ETOPS/EDTO-style diversion planning (§9).
  - **Reserved for true polar (>78°N / >80°N):** the **formal designation of en-route alternates** as a polar-area requirement; **Iridium-mandatory** comms **north of 80°N** (Inmarsat geostationary coverage fails); **NOAA S-scale as an operational divert trigger**; a **full crew cosmic-radiation dose-monitoring program**; grid-navigation as the primary reference.
- **Relationship to ETOPS/EDTO:** high-latitude diversion planning uses the same time/fuel-to-adequate-alternate discipline as ETOPS/EDTO; polar-area rules sit **on top of** ETOPS/EDTO, they do not replace it. See `./ETOPS-EDTO Procedures.md`.

---

## 4. Fuel freeze & cold soak

- **Freeze points — 🟥 know the loaded grade:** **Jet A-1 max freeze point −47 °C**; **Jet A −40 °C**; **TS-1 (Russian) ≈ −50 °C**. K Global loads **Jet A-1** — confirm the grade on each OFP; a Jet A uplift at a US/short-field station raises the freeze point to −40 °C and materially cuts the polar margin.
- **The limit is TANK FUEL TEMPERATURE, not SAT/TAT — 🟥:** the freeze point applies to the **bulk fuel temperature in the tanks**, which lags air temperature by hours as the fuel cold-soaks on a long high-FL leg. SAT/TAT tells you the environment; the **fuel-temperature indication** tells you the margin.
- **Reference margin (EDDF–KSFO, 2026-07-25):** the OFP shows **SAT down to −54 °C** en route. That is **below the Jet A-1 −47 °C freeze point**, so tank fuel *will* cool toward the limit over a multi-hour high-latitude cruise. Freeze margin is real on this route — **monitor tank fuel temperature against −47 °C continuously** through the cold cruise segment. (Note: on true polar routes SAT can run −65 to −70 °C; the mitigation logic is identical, only the margin is tighter.)
- **Mitigation — 🟥 two levers:**
  1. **Descend to warmer air** — a lower level typically finds warmer SAT and slows/reverses the cold soak.
  2. **Increase Mach** — higher TAS raises **ram/TAT heating** of the airframe and, over time, the fuel.
  Apply proactively as fuel temp trends toward the freeze point plus the type buffer, before the limit is reached; coordinate any level/Mach change with ATC (procedural airspace — see the Arctic brief §5/§10). Cross-reference the Arctic brief §8 (fuel-freeze note) and North Atlantic §8 — do not duplicate.
- **Aircraft protection:** fuel-heating/recirculation and the fuel-temperature warning system are the primary defences; a **serviceable fuel-temperature indication** is an MEL item that weighs more on this route (§9).

---

## 5. Cold-weather ops & altimetry at diversion fields

Applies at any high-latitude divert — brief the cold alternates **BGSF**, **BGTL**, **CYZF** on the OFP.

- **Cold-temperature altimetry corrections — 🟥:** in very cold air the altimeter **over-reads** (true altitude is lower than indicated), eroding obstacle clearance on approach. The FAA publishes **Cold Temperature Restricted Airports (CTRA)** requiring a correction at/below an airport-specific temperature; where no aircraft auto-compensation exists, apply the **ICAO Cold Temperature Error Table** (AIM 7-2-3) to the segment(s) — intermediate, final and/or missed approach — and **report the corrected altitude to ATC**. Greenland/Canadian Arctic fields routinely sit well below the correction threshold in winter. Confirm the aircraft's temperature-compensation capability and whether it is used or the manual table applies.
- **Contaminated-runway braking — 🟥:** snow/ice/slush cut braking action and directional control; use the current runway condition report (RCR/RWYCC / global reporting format) and recompute landing performance for the reported friction — margins at short high-latitude fields (e.g. BGSF) are the constraint.
- **Cold-soaked-fuel frost (CSFF):** after a long cold cruise, frost can form on the **upper wing over the cold-soaked tanks** even in above-freezing, high-humidity ground conditions — inspect and de-ice per the contamination/clean-aircraft policy.
- **De-/anti-ice:** plan for holdover-time management and fluid availability at remote fields; some Arctic diversion fields have limited de-ice capability — factor into alternate selection.
- **Airframe cold-start / limits:** extreme cold ground temperatures affect APU/engine start, tyre/hydraulic limits and ground servicing; consult the type cold-weather limits (A339 — cross-ref §Cross-references). See the individual airport briefs (BGSF/BGTL/CYZF) for field-specific altimetry/runway/de-ice detail — do not duplicate here.

---

## 6. Communications & datalink at high latitude

- **Posture at 70°N — 🟧:** the route stays within **HF (Reykjavik Radio / Canadian HF) and Inmarsat SATCOM** coverage, backed by **CPDLC/ADS-C (FANS 1/A)** where mandated and VHF at the terminal ends. This is **adequate without Iridium** — but carry the full redundancy because the environment degrades HF (§7).
- **North of 80°N — Iridium required — 🟥 (reserved regime):** above ~80°N, **geostationary Inmarsat coverage fails** (satellites sit over the equator, too low on the horizon); **Iridium** (low-earth-orbit, true polar coverage) is the qualifying SATCOM. The reference route does not reach 80°N, so Iridium is **not mandated** here — but it is the recommended space-weather fallback and would be **mandatory on any true polar routing**.
- **HF families & SELCAL:** two long-range comm systems, at least one HF, SELCAL check after first contact — full detail in the North Atlantic brief §5 and Arctic brief §5 (do not duplicate).
- **Space-weather HF/GNSS degradation — 🟧:** **polar-cap absorption (PCA)** from a solar proton event ionises the D-region and **blacks out HF across the polar cap** (can last days); high-latitude ionospheric **scintillation degrades GNSS**. On true polar routes **NOAA S-scale (S3+)** is the historical signal to **avoid/divert** polar routing; at 70°N it is a **monitored dispatch input** and a prompt to lean on SATCOM/CPDLC, not an automatic divert. Full space-weather treatment in §7 and Arctic brief §11.
- **Comms-failure fallback:** SATVOICE/CPDLC when HF is degraded; broadcast on 121.5 / 123.45; procedural position reports at compulsory points (Arctic brief §10).

---

## 7. Space weather (HF/GNSS) & cosmic radiation

- **NOAA SWPC scales — 🟧 the reference framework:** NOAA rates space weather on **R** (radio blackouts / solar flares, HF on the sunlit side), **S** (solar radiation storms / energetic protons), and **G** (geomagnetic storms) scales, each **1–5**. The **S-scale** is the polar-route driver: a **Solar Radiation Storm** begins when **≥10 MeV proton flux ≥ 10 pfu**; at **S3** HF comms **may be degraded/interrupted by polar-cap absorption**, and passengers/crew at high latitude/altitude can receive elevated radiation. Monitor SWPC (HF-impacts page, D-RAP model, R/S/G scales) at dispatch.
- **Operational use by regime — 🟥 boundary:**
  - **True polar (>78°N):** S3+ is an operational **avoid/divert** trigger — carriers routinely do not fly polar routes with a radiation storm in progress.
  - **High-latitude (~70°N, this route):** S-scale is a **monitored input** — expect HF degradation, use SATCOM/CPDLC redundancy, and consider a lower latitude/level; not an automatic divert.
- **Cosmic radiation — dose principle 🟧:** galactic cosmic radiation dose **rises with both altitude and latitude** (at 50°N up to ~4× the equatorial dose; higher toward the pole). A **solar particle event (SPE / GLE)** produces a large but short-lived dose spike, strongly latitude-dependent (orders of magnitude larger near the geomagnetic pole). Typical annual aircrew dose is a few mSv. The **crew-dose-monitoring principle** — track exposure, and during a significant SPE reduce dose by **descending and/or routing to lower latitude** — applies proportionally; a **formal dose-monitoring/limitation program** is a regulatory/>78°N-regime item, not triggered at 70°N. No live dose or space-wx data is stored in this file (pull at dispatch).

---

## 8. Navigation — true/grid & magnetic-pole proximity

- **Magnetic heading unreliable at high latitude — 🟥:** approaching the magnetic pole the horizontal component of the Earth's field weakens and converges, so **magnetic compass/heading becomes unreliable** — the basis for true/grid reference at high latitude.
- **Canadian Northern Domestic Airspace is TRUE-referenced — 🟥:** across the **NDA**, navigation, runway numbering and winds are referenced to **TRUE north**; all ILS/VOR/NDB are set to **TRUE with 0° declination**, and all conventional/PBN airways and terminal procedures are True-referenced. **Set the FMS/aircraft to the correct True/Magnetic reference for the airspace** on entering/leaving the NDA. (Full airspace detail: Arctic brief §4.)
- **Grid navigation — reserved for the high Arctic 🟧:** grid nav (polar-stereographic chart, gyro aligned to a reference meridian, corrected for convergence/precession) is the technique **north of ~78°** where even True is impractical near the pole. **The reference route at ~70°N uses True reference across the NDA, not grid** — grid is documented here as the true-polar method, not a requirement for this route.
- **IRS considerations — 🟧:** at high latitude, IRS/IRU performance and alignment degrade toward the pole (rapid meridian convergence, alignment-latitude limits); ensure a good pre-departure alignment, rely on **GNSS/IRS hybrid** position, and treat GNSS as space-weather-vulnerable (§7). 🟧 Type-specific IRS high-latitude limits — verify against A339 FCOM/limitations.

---

## 9. En-route alternates & MEL considerations

- **Designate adequate en-route alternate(s), proportional to latitude — 🟥:** the FAA polar-area rule (a validated set of diversion alternates, effectively **two designated en-route alternates**) is **triggered north of 78°N**. At 70°N K Global applies the **principle proportionally**: designate sufficient adequate en-route alternate(s) so that at least one is reasonably expected to be suitable/available across expected weather, using ETOPS/EDTO-style time/fuel-to-alternate discipline. Fields are **sparse and widely spaced** — see the Arctic brief §8 diversion table (BIKF, BGSF, BGGH, CYFB, CYYR, CYZF, CYEG, …) and BGTL. Do not duplicate that table here.
- **Cold alternates for the reference route (EDDF–KSFO, 2026-07-25):** **BGSF Kangerlussuaq** (most reliable Greenland field, procedural since radar ended ~Nov 2025), **BGTL Pituffik** (far-N Greenland, PPR/military), **CYZF Yellowknife** (NDA, True-referenced). Brief altimetry/runway/de-ice from each field's airport brief (§Cross-references).
- **MEL items that weigh more in the cold/remote environment — 🟥:** confirm status at dispatch and re-weigh any open MEL against this route —
  - **Fuel-temperature indication** — the primary defence against fuel freeze (§4); an unserviceable indication removes the margin monitor.
  - **APU** — cold-start capability, backup electrics/bleed after a diversion to a cold, sparsely-serviced field.
  - **Air-conditioning pack (one-pack ops)** — pressurisation/redundancy margin over remote terrain.
  - **Anti-/de-ice systems** (engine/wing anti-ice, probe heat) — icing and CSFF exposure.
  - **Communication redundancy** (HF, SATCOM, CPDLC) — degraded-HF environment (§6/§7).
  Any of these open shifts the alternate/route decision; document the assessment on the release.

---

## 10. Dispatch & in-flight application — EDDF–KSFO worked context

**Route:** EDDF–KSFO, A330-900neo (A339), great-circle peak **~70°N**, via BIRD → BGGL → Canadian NDA / Edmonton FIR. **High-latitude, below the 78°N polar floor.**

**At dispatch:**
1. **Confirm regime** — ~70°N, not polar-area; apply §3 proportional set (fuel freeze, cold-alt, comms redundancy, true-nav, space-wx monitor). Formal two-alternate designation / Iridium / S-scale-divert **not** triggered.
2. **Fuel grade** — verify **Jet A-1** loaded (freeze −47 °C); flag any Jet A uplift.
3. **Cold-cruise margin** — check the OFP SAT profile (to **−54 °C**) against the −47 °C fuel-freeze limit; note the monitoring requirement and mitigation levers (§4).
4. **En-route alternates** — designate/brief **BGSF, BGTL, CYZF** (plus BIKF/CYFB/CYYR as ETP fields per Arctic §8); confirm each open, wx above minima, de-ice/runway state.
5. **Space weather** — pull **NOAA SWPC** R/S/G + D-RAP; if S3+ is forecast, expect HF degradation and consider a lower-latitude/level plan.
6. **MEL** — re-weigh fuel-temp indication, APU, packs, anti-ice, comms (§9).
7. **Nav reference** — brief the **TRUE-track** transition across the Canadian NDA (§8).

**In flight:**
- **Monitor tank fuel temperature** vs −47 °C through the cold cruise; if trending to the limit, **descend to warmer air and/or increase Mach** (§4), coordinating with procedural ATC.
- **Comms:** maintain CPDLC/ADS-C + HF; SELCAL check; fall back to SATCOM if HF degrades under PCA (§6/§7).
- **If a divert is required:** apply cold-temperature altimetry corrections, recompute contaminated-runway landing performance, and expect CSFF/de-ice at the field (§5).
- **Space weather:** if an SPE develops, treat elevated dose and HF loss as prompts to consider **lower latitude/level** (§7) — at 70°N a monitored input, not an automatic divert.

---

## Cross-references

- **Arctic / High-Latitude Domestic airspace brief** — FIR structure, comms detail, terrain/icecap driftdown (§7), diversion table (§8), space-wx live-data (§11): `../OM C Routes and Destinations/Airspace/General/Arctic.md`
- **North Atlantic (NAT) airspace brief** — oceanic crossing, HF families, fuel-freeze & space-wx notes, contingency/SLOP: `../OM C Routes and Destinations/Airspace/General/North Atlantic.md`
- **North America — Canadian Domestic + Western US** (Edmonton/Vancouver FIRs, NDA true-track, ADS-B, cold-temp corrections): `../OM C Routes and Destinations/Airspace/General/North America.md`; high-lat/Greenland terrain in the Arctic brief: `../OM C Routes and Destinations/Airspace/General/Arctic.md`
- **ETOPS / EDTO Procedures** — diversion time/fuel discipline underlying high-lat alternate planning: `./ETOPS-EDTO Procedures.md`
- **BGSF — Kangerlussuaq** (cold alternate): `../OM C Routes and Destinations/Airports/North America/Greenland/BGSF — Kangerlussuaq.md`
- **BGTL — Pituffik Space Base** (far-N cold alternate, PPR): `../OM C Routes and Destinations/Airports/North America/Greenland/BGTL — Pituffik Space Base.md`
- **CYZF — Yellowknife** (NDA cold alternate): `../OM C Routes and Destinations/Airports/North America/Canada/CYZF — Yellowknife.md`
- **A339 (A330-900neo) Dispatch** — type cold-weather limits, fuel system, IRS/nav: `../OM B Fleet/OM B Airbus/A339/A339.md`

---

## Open items (🟧 — confirm)

- **AC 120-42B clause numbering** — exact section references for the North Polar Area definition and the polar-ops requirement set (durable summary captured; verify against the AC text).
- **A339 type specifics** — fuel-freeze buffer/logic, fuel-temp warning behaviour, IRS high-latitude/alignment limits, one-pack/APU cold limits (verify against FCOM/limitations; feed into §4/§8/§9).
- Alternate-field weather-suitability windows and cold-temperature-correction SOPs are applied per-OFP at planning, not stored here.
- **Cold-temperature-correction capability** — confirm whether the A339 auto-compensates or the manual ICAO table applies, and codify the SOP.
- **TS-1 freeze point** — cited ≈ −50 °C from secondary sources; confirm the exact spec value if TS-1 uplift ever becomes relevant.

---

## Sources & References
*Public URLs only. Cite origin + retrieved dates. Subscription/in-sim material may inform content but is not listed. Durable policy — no live space-wx/fuel/NOTAM data stored here.*

- **FAA AC 120-42B — Extended Operations (ETOPS and Polar Operations)** — North Polar Area = north of 78°N; polar diversion-alternate, fuel-freeze, cold-soak, communication-capability and training requirements — https://www.faa.gov/regulations_policies/advisory_circulars/index.cfm/go/document.information/documentid/73587 and SKYbrary summary https://skybrary.aero/bookshelf/faa-ac-120-42b-extended-range-operations-etops-and-polar-operations (retrieved 2026-07-25).
- **SKYbrary — Aviation Fuels Technical Review / fuel freeze points** — Jet A-1 −47 °C, Jet A −40 °C, TS-1 ≈ −50 °C — https://skybrary.aero/sites/default/files/bookshelf/2478.pdf (retrieved 2026-07-25).
- **SKYbrary — Cosmic Radiation / Impact of Space Weather on Aviation** — dose vs altitude/latitude, SPE spikes, crew-dose principle — https://skybrary.aero/articles/cosmic-radiation and https://skybrary.aero/articles/impact-space-weather-aviation (retrieved 2026-07-25).
- **NOAA SWPC — Space Weather Scales / Solar Radiation Storm / GOES Proton Flux** — R/S/G scales 1–5, S-scale ≥10 MeV ≥10 pfu, S3 HF polar-cap-absorption effects — https://www.spaceweather.gov/noaa-scales-explanation , https://www.spaceweather.gov/phenomena/solar-radiation-storm , https://www.spaceweather.gov/products/goes-proton-flux (retrieved 2026-07-25).
- **NOAA SWPC — HF radio communications / D-RAP** — polar-cap absorption HF blackout mechanism — https://www.spaceweather.gov/impacts/hf-radio-communications and https://www.swpc.noaa.gov/products/d-region-absorption-predictions-d-rap (retrieved 2026-07-25).
- **FAA — Cold Temperature Restricted Airports (CTRA) / ICAO Cold Temperature Error Table (AIM 7-2-3)** — cold-temp altimetry over-read and correction procedure — https://www.faa.gov/air_traffic/publications/atpubs/aim_html/chap7_section_3.html and https://www.faa.gov/air_traffic/publications/atpubs/ntap/part2_gen19001.html (retrieved 2026-07-25).
- **ICAO / SKYbrary — high-latitude comms (Inmarsat vs Iridium north of 80°N)** — corroborated with the Arctic & North Atlantic airspace briefs (NAT Doc 007 / AIP sources therein) — see `../OM C Routes and Destinations/Airspace/General/Arctic.md` §5 (retrieved 2026-07-25).

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1.1 | 2026-07-25 | Governance scrub: removed callsign and build-process references per OM content rules. |
| v0.1 | 2026-07-25 | Initial draft. First OM E — Operations location-agnostic procedure for polar & high-latitude ops. Scoped ~70°N (reference EDDF–KSFO OFP, 2026-07-25, A339) vs the FAA 78°N North Polar Area, with proportional application stated item by item. Built from FAA AC 120-42B + SKYbrary (fuel/cosmic/space-wx) + NOAA SWPC + FAA CTRA/ICAO cold-temp table; cross-linked to Arctic & North Atlantic briefs, A339 dispatch, and BGSF/BGTL/CYZF. ETOPS-EDTO cross-ref and A339 type specifics flagged open. |
