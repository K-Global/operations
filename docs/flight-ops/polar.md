---
title: Polar & High-Latitude Ops
---

<span class="kg-eyebrow">OM E · Operations</span>

# Polar & High-Latitude Operations

**Location-agnostic capability and procedure policy for operations at high
latitude and near the poles** — fuel freeze and cold soak, cold-weather
diversion-field ops, communications/datalink redundancy, space weather and
cosmic radiation, true/grid navigation, and en-route-alternate and MEL strategy.
It applies proportionally by latitude and is illustrated by the worked flight
**KAY09MA** (EDDF–KSFO, A330-900neo), whose great-circle track peaks at **~70°N**
through the Reykjavik and Nuuk FIRs and Canadian Northern Domestic Airspace.

!!! note "Regime — 70°N vs the 78°N polar area"
    The FAA **North Polar Area is the entire area north of 78°N**; the formal
    polar-route rule-set (two designated en-route alternates, a fuel-freeze
    strategy, cold-soak plan, a cosmic-radiation programme, communication
    redundancy) is triggered there. **KAY09MA peaks at ~70°N — high-latitude /
    near-polar, not inside the 78°N polar area.** The polar-route requirements are
    therefore applied here as **good practice, proportionally**: some already bite
    at 70°N; others are reserved for true polar routing north of 78°N. Live data
    (fuel temp, space weather, NOTAM, weather) is pulled at dispatch — this page
    is durable policy only.

## 1. Snapshot

| Field | Value |
|---|---|
| Regime (this page) | **High-latitude / near-polar**, peak ~70°N. **Not** the FAA North Polar Area (north of 78°N) |
| Formal polar-route trigger | **North of 78°N** (FAA AC 120-42B) — reference regime, not this route |
| Binding hazards at ~70°N | **Fuel freeze / cold soak** (Jet A-1 −47 °C vs en-route SAT to −54 °C) · cold-weather diversion-field ops (altimetry, contaminated runway, de-ice) · **HF/GNSS space-weather degradation** · **true-track / grid nav** in Canadian NDA · sparse, widely-spaced alternates |
| Reserved for true polar (>78°N) | Formal two-designated-alternate rule · **Iridium mandatory north of 80°N** · NOAA S-scale as an operational divert trigger · full cosmic-radiation dose programme |
| Fuel grade / freeze pt | **Jet A-1, freeze point −47 °C** (Jet A −40 °C; TS-1 ≈ −50 °C). Confirm the loaded grade on the OFP |
| Comms posture (70°N) | HF (Reykjavik Radio / Canadian HF) + SATCOM (Inmarsat qualifies) + CPDLC/ADS-C; VHF at terminals. Carry redundancy; Iridium not mandated below 80°N but is the space-weather fallback |
| Nav posture | **TRUE-track reference across the Canadian NDA** (0° declination); grid nav reserved for the high Arctic (~>78°N); IRS alignment discipline at high latitude |
| Illustrative flight | **KAY09MA** EDDF–KSFO, A330-900neo; BIRD → BGGL → Canadian NDA / Edmonton FIR; cold alternates BGSF, BGTL, CYZF |

## 2. Regime — where 70°N sits vs the 78°N polar area

- **FAA North Polar Area.** Per FAA AC 120-42B, the North Polar Area is the
  entire area **north of 78°N** (the South Polar Area is south of 60°S).
  Operations within it invoke the FAA polar-operations requirements on top of
  ETOPS/EDTO: a validated set of diversion (en-route) alternates, a fuel-freeze
  strategy, cold-soak consideration, a recovery plan for passengers after a
  diversion to a cold place, a crew-training element, and a communication-capability
  requirement.
- **Where KAY09MA sits.** The EDDF–KSFO great-circle track peaks at ~70°N — about
  8° of latitude south of the 78°N polar floor. High-latitude / near-polar, not
  "polar" in the FAA sense, so the formal polar-route rule-set is not legally
  triggered — but the underlying hazards do not switch off at 78°N; several are
  already present at 70°N.
- **What bites at 70°N:** fuel freeze and cold soak (§3); cold-weather ops at
  diversion fields (§4); HF plus space-weather HF/GNSS degradation and SATCOM
  redundancy (§5, §6); true-track navigation across the Canadian NDA and
  magnetic-heading unreliability (§7); sparse, widely-spaced alternates and
  ETOPS/EDTO-style diversion planning (§8).
- **Reserved for true polar (>78°N / >80°N):** formal designation of en-route
  alternates as a polar-area requirement; Iridium-mandatory comms north of 80°N;
  NOAA S-scale as an operational divert trigger; a full crew cosmic-radiation
  dose-monitoring programme; grid navigation as the primary reference.
- **Relationship to ETOPS/EDTO.** High-latitude diversion planning uses the same
  time/fuel-to-adequate-alternate discipline as [ETOPS/EDTO](etops-edto.md);
  polar-area rules sit *on top of* it, they do not replace it.

## 3. Fuel freeze & cold soak

- **Freeze points — know the loaded grade.** Jet A-1 max freeze point **−47 °C**;
  Jet A −40 °C; TS-1 (Russian) ≈ −50 °C. K Global loads Jet A-1 — confirm the
  grade on each OFP; a Jet A uplift raises the freeze point to −40 °C and
  materially cuts the polar margin.
- **The limit is TANK FUEL TEMPERATURE, not SAT/TAT.** The freeze point applies
  to the bulk fuel temperature in the tanks, which lags air temperature by hours
  as the fuel cold-soaks on a long high-FL leg. SAT/TAT tells you the
  environment; the **fuel-temperature indication** tells you the margin.
- **KAY09MA margin.** The OFP shows SAT down to **−54 °C** en route — below the
  Jet A-1 −47 °C freeze point — so tank fuel will cool toward the limit over a
  multi-hour high-latitude cruise. **Monitor tank fuel temperature against −47 °C
  continuously** through the cold cruise. (On true polar routes SAT can run −65
  to −70 °C; the logic is identical, only the margin is tighter.)
- **Mitigation — two levers:**
    1. **Descend to warmer air** — a lower level typically finds warmer SAT and
       slows/reverses the cold soak.
    2. **Increase Mach** — higher TAS raises ram/TAT heating of the airframe and,
       over time, the fuel.

    Apply proactively as fuel temp trends toward the freeze point plus the type
    buffer, before the limit is reached; coordinate level/Mach changes with ATC in
    procedural airspace.
- **Aircraft protection.** Fuel heating/recirculation and the fuel-temperature
  warning system are the primary defences; a serviceable fuel-temperature
  indication is an MEL item that weighs more on this route (§8).

## 4. Cold-weather ops & altimetry at diversion fields

Applies at any high-latitude divert — brief the cold alternates **BGSF**,
**BGTL**, **CYZF** on the OFP.

- **Cold-temperature altimetry corrections.** In very cold air the altimeter
  over-reads (true altitude is lower than indicated), eroding obstacle clearance
  on approach. Apply the required correction at Cold Temperature Restricted
  Airports; where no aircraft auto-compensation exists, use the ICAO Cold
  Temperature Error Table for the affected approach segment(s) and **report the
  corrected altitude to ATC**. Greenland/Canadian Arctic fields routinely sit well
  below the correction threshold in winter.
- **Contaminated-runway braking.** Snow/ice/slush cut braking action and
  directional control; use the current runway condition report (global reporting
  format) and recompute landing performance — margins at short high-latitude
  fields (e.g. BGSF) are the constraint.
- **Cold-soaked-fuel frost (CSFF).** After a long cold cruise, frost can form on
  the upper wing over the cold-soaked tanks even in above-freezing, high-humidity
  ground conditions — inspect and de-ice per the clean-aircraft policy.
- **De-/anti-ice.** Plan holdover-time management and fluid availability at remote
  fields; some Arctic diversion fields have limited de-ice capability — factor
  into alternate selection.
- **Airframe cold limits.** Extreme cold affects APU/engine start, tyre/hydraulic
  limits and ground servicing — consult the type cold-weather limits. Field-specific
  altimetry/runway/de-ice detail lives in each airport brief.

## 5. Communications & datalink at high latitude

- **Posture at 70°N.** The route stays within HF (Reykjavik Radio / Canadian HF)
  and Inmarsat SATCOM coverage, backed by CPDLC/ADS-C (FANS 1/A) where mandated
  and VHF at the terminal ends. This is adequate without Iridium — but carry the
  full redundancy because the environment degrades HF (§6).
- **North of 80°N — Iridium required (reserved regime).** Above ~80°N,
  geostationary Inmarsat coverage fails; Iridium (low-earth-orbit) is the
  qualifying SATCOM. KAY09MA does not reach 80°N, so Iridium is not mandated here
  — but it is the recommended space-weather fallback and mandatory on any true
  polar routing.
- **HF families & SELCAL.** Two long-range comm systems, at least one HF, SELCAL
  check after first contact — detail in the North Atlantic and Arctic airspace
  briefs.
- **Comms-failure fallback.** SATVOICE/CPDLC when HF is degraded; broadcast on
  121.5 / 123.45; procedural position reports at compulsory points.

## 6. Space weather & cosmic radiation

- **NOAA SWPC scales.** NOAA rates space weather on **R** (radio blackouts), **S**
  (solar radiation storms / energetic protons) and **G** (geomagnetic storms)
  scales, each 1–5. The **S-scale** is the polar-route driver: a solar radiation
  storm begins at ≥10 MeV proton flux ≥ 10 pfu; at **S3** HF comms may be
  degraded/interrupted by polar-cap absorption, and people at high latitude/altitude
  can receive elevated radiation. Monitor SWPC at dispatch.
- **Operational use by regime.**
    - **True polar (>78°N):** S3+ is an operational **avoid/divert** trigger.
    - **High-latitude (~70°N, this route):** S-scale is a **monitored input** —
      expect HF degradation, use SATCOM/CPDLC redundancy, and consider a lower
      latitude/level; not an automatic divert.
- **Cosmic radiation — dose principle.** Galactic cosmic radiation dose rises with
  both altitude and latitude; a solar particle event produces a large but
  short-lived spike, strongly latitude-dependent. The crew-dose principle — track
  exposure, and during a significant event reduce dose by descending and/or routing
  to lower latitude — applies proportionally; a formal dose-monitoring programme is
  a regulatory / >78°N-regime item. No live dose or space-weather data is stored
  here.

## 7. Navigation — true/grid & magnetic-pole proximity

- **Magnetic heading unreliable at high latitude.** Approaching the magnetic pole
  the horizontal component of the Earth's field weakens and converges, so magnetic
  compass/heading becomes unreliable — the basis for true/grid reference at high
  latitude.
- **Canadian Northern Domestic Airspace is TRUE-referenced.** Across the NDA,
  navigation, runway numbering and winds are referenced to **TRUE north**; ILS/VOR/NDB
  are set to TRUE with 0° declination, and airways and terminal procedures are
  True-referenced. **Set the FMS/aircraft to the correct True/Magnetic reference**
  on entering/leaving the NDA.
- **Grid navigation — reserved for the high Arctic.** Grid nav (polar-stereographic
  chart, gyro aligned to a reference meridian) is the technique north of ~78° where
  even True is impractical near the pole. KAY09MA at ~70°N uses True reference
  across the NDA, not grid.
- **IRS considerations.** At high latitude, IRS/IRU performance and alignment
  degrade toward the pole; ensure a good pre-departure alignment, rely on GNSS/IRS
  hybrid position, and treat GNSS as space-weather-vulnerable (§6).

## 8. En-route alternates & MEL considerations

- **Designate adequate en-route alternate(s), proportional to latitude.** The FAA
  polar-area rule (effectively two designated en-route alternates) is triggered
  north of 78°N. At 70°N K Global applies the principle proportionally: designate
  sufficient adequate en-route alternate(s) so that at least one is reasonably
  expected to be suitable across expected weather, using ETOPS/EDTO-style
  time/fuel-to-alternate discipline. Fields are sparse and widely spaced.
- **Cold alternates for KAY09MA:** **BGSF Kangerlussuaq** (most reliable Greenland
  field, procedural since radar ended ~Nov 2025), **BGTL Pituffik** (far-N
  Greenland, PPR/military), **CYZF Yellowknife** (NDA, True-referenced). Brief
  altimetry/runway/de-ice from each field's airport brief.
- **MEL items that weigh more in the cold/remote environment** — confirm status at
  dispatch and re-weigh any open item:
    - **Fuel-temperature indication** — the primary defence against fuel freeze (§3).
    - **APU** — cold-start capability and backup electrics/bleed after a diversion.
    - **Air-conditioning pack (one-pack ops)** — pressurisation/redundancy margin.
    - **Anti-/de-ice systems** — icing and CSFF exposure.
    - **Communication redundancy** (HF, SATCOM, CPDLC) — degraded-HF environment.

## 9. Related procedures

- [ETOPS / EDTO Procedures](etops-edto.md) — the diversion time/fuel discipline
  underlying high-latitude alternate planning.
- The **Arctic** and **North Atlantic** airspace briefs carry the FIR structure,
  comms detail, terrain/icecap driftdown and diversion tables referenced above.
- The **A330-900neo (A339)** fleet page carries type cold-weather limits, fuel
  system and IRS/nav specifics.

## Sources & references

*Public sources only; durable policy — no live data stored here.*

- **FAA AC 120-42B** — Extended Operations (ETOPS and Polar Operations); North
  Polar Area = north of 78°N; polar diversion-alternate, fuel-freeze, cold-soak,
  communication-capability and training requirements.
- **SKYbrary** — aviation fuel freeze points (Jet A-1 −47 °C, Jet A −40 °C, TS-1 ≈
  −50 °C); cosmic radiation and impact of space weather on aviation.
- **NOAA SWPC** — space-weather scales (R/S/G), solar radiation storms, GOES proton
  flux, HF radio communications / D-RAP.
- **FAA / ICAO** — Cold Temperature Restricted Airports and the ICAO Cold
  Temperature Error Table (altimetry over-read correction).
