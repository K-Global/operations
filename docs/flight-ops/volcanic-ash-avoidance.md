# Volcanic Ash Avoidance — OM E Procedure

**Scope:** Location-agnostic procedure policy for **avoiding volcanic ash** — the hazard to engines, airframe and pitot-static systems; the **International Airways Volcano Watch (IAVW)** and the nine **Volcanic Ash Advisory Centres (VAAC)**; Volcanic Ash Advisories/graphics, ASHTAM and SIGMET; **avoidance as the standing rule** (do not fly into ash); a summarised **encounter procedure** that points to the aircraft QRH; and flight-planning / re-route policy. This file *defines* the method; the aircraft QRH holds the memory drill, and **all live ash products (VAA, SIGMET, ASHTAM) are pulled at planning and in flight** — no live advisory is stored here.
**Version** v0.1 · **Updated** 2026-07-25 · **Status** Draft — public-source-verified (ICAO Annex 3 & Doc 9691 / Doc 9766 IAVW / VAAC London·Anchorage·Tokyo / SKYbrary); the aircraft-specific encounter drill is flagged 🟧 — fly it from the QRH, not this page.

> **Read-me — regime & scoping (read first):** This is an **OM E Operations** procedure (method/policy), **not** the QRH memory drill, a chart, or a live ash product. It states the *concepts* and K Global's standing policy of **total avoidance**; the **engine-handling memory items and exit checklist come from the type QRH**, applied by the crew. Live products — **Volcanic Ash Advisory (VAA) + graphics, Volcanic Ash SIGMET, ASHTAM/NOTAM, and the contaminated-area charts** — are **pulled at planning and in flight**, never cached here, because ash clouds move and forecasts are revised every few hours. Where the response is type-specific it is flagged 🟧. Flag legend: 🟥 hard requirement/hazard · 🟧 caution/unverified/type- or route-specific · 🟩 normal. Sim context: X-Plane 11 / SimBrief dispatch.

---

## 1. Snapshot

| Field | Value |
|---|---|
| The rule | 🟥 **Do not fly into volcanic ash.** Ash is to be avoided entirely — there is no "safe" penetration technique. Plan and re-route around it; if inadvertently encountered, **exit by the shortest safe path** (§5) |
| Why it is lethal | Ash is fine, hard, abrasive silicate that **melts in the hot section** and re-solidifies on turbine nozzles/blades → thrust loss, surge, **flame-out**; it sandblasts windscreens/leading edges, erodes compressors, and **blocks pitot-static/TAT probes** → unreliable airspeed/altitude. It is often **not on weather radar** and can be invisible at night |
| Detection help | **IAVW / VAAC** advisories, **Volcanic Ash SIGMET**, **ASHTAM**, satellite/graphics — plus crew clues: acrid/sulphur (electrical) smell, haze/dust in the cabin, **St Elmo's fire / engine-inlet glow**, sharp cabin-air change, unexpected engine indications |
| Warning system | The **International Airways Volcano Watch (IAVW)** — an ICAO framework of **nine VAACs**, State volcano observatories, MWOs and NOTAM offices, issuing coordinated advisories and forecasts |
| VAACs relevant to K Global | **London** (Iceland / NE North Atlantic → NAT tracks), **Anchorage** (Alaska/Aleutians/N Pacific → high-latitude & Pacific routes), **Tokyo** (Japan/Kamchatka/W Pacific → Asia hub & Pacific); plus Toulouse, Washington, Montréal, Buenos Aires, Darwin, Wellington covering the rest of the globe |
| Products | **VAA** (text, 6-hourly + as needed, with 6/12/18 h forecast polygons) and **VAG** (graphic); **Volcanic Ash SIGMET** from the MWO; **ASHTAM** (special NOTAM series with the colour-code alert level) |
| Encounter concept | 🟥 Summarised: **reduce thrust toward idle / avoid climb**, **turn 180° to exit** the cloud (usually a descending turn out of the ash upwind of the source), manage engines/anti-ice/pressurisation per the QRH, **don oxygen** if smoke/fumes — then divert. **The QRH memory drill governs — this is a concept, not the checklist** |
| Planning stance | 🟥 If any part of the planned track/level lies in a **current or forecast ash area**, re-plan (re-route/re-level/delay) to remain clear with margin. No dispatch through forecast ash |

---

## 2. Validation summary

| Domain | Flag | Note |
|---|---|---|
| Total-avoidance policy | 🟥 | Sourced (ICAO Doc 9691 / EUR Doc 019 / SKYbrary). Post-2010 doctrine still centres on avoidance; any "ash concentration threshold" charts are for State/operator risk assessment, not a licence to penetrate. |
| Hazard mechanism (engines/airframe/pitot-static) | 🟥 | ICAO Doc 9691, SKYbrary Volcanic Ash. Melting silicate in the hot section, probe blockage → unreliable airspeed; radar generally does not paint dry ash. |
| IAVW / nine VAACs | 🟩 | ICAO Doc 9766 (IAVW Handbook). Nine centres; London/Anchorage/Tokyo the primary ones for K Global's NAT/Pacific/high-latitude network. |
| VAA / VAG / SIGMET / ASHTAM chain | 🟩 | VAAC issues VAA/VAG; MWO issues Volcanic Ash SIGMET; NOTAM office issues ASHTAM (colour code). Pull all at planning. |
| Encounter procedure | 🟧 | Concept sourced (reduce thrust, avoid climb, 180° exit, anti-ice/engine care, O2). **Exact sequence and engine-relight actions are type-QRH-specific — verify.** |
| Colour-code alert levels | 🟧 | Green/Yellow/Orange/Red aviation colour code sourced (ICAO/observatories); mapping to operational restrictions is authority/State-specific — verify at planning. |
| Re-route / re-level policy | 🟥 | Avoid current and forecast (6/12/18 h) polygons with margin; ash rises/descends and drifts, so lateral **and** vertical separation matters. |

---

## 3. The hazard — why ash is avoided entirely

- **Engines — 🟥:** volcanic ash is fine, angular, hard **silicate glass**. Ingested, it **melts in the combustor/hot section** (well below its notional melt point at engine gas temperatures) and **re-freezes** on the cooler high-pressure turbine nozzles and blades, restricting flow → **compressor surge, thrust rollback and flame-out**. Reducing thrust lowers gas temperature and can help the fused deposits shed; this is why the encounter drill reduces thrust. Ash also **erodes** compressor blades and abrades the gas path over time.
- **Airframe & windows — 🟧:** sandblasting **frosts windscreens and landing lights** (can render them opaque), pits and erodes leading edges/radome, and contaminates the airframe.
- **Pitot-static / probes — 🟥:** ash can **block pitot, static and TAT probes**, producing **unreliable airspeed/altitude** indications on top of the engine problems — a compounding emergency. Apply the unreliable-airspeed technique from the QRH as needed.
- **Air-conditioning / cabin — 🟧:** ash and sulphurous gases enter via the bleed/packs → **acrid smell, haze, eye/throat irritation**; don oxygen if smoke/fumes procedures apply.
- **Not radar-visible — 🟥:** dry ash generally does **not** return on weather radar and can be **invisible at night** or blend with cloud — so the crew cannot rely on radar to avoid it. Avoidance depends on **advisories and forecasts**, not on-board sensing.
- **Crew recognition clues:** sudden **cabin haze/dust**, **acrid/sulphur/electrical smell**, **St Elmo's fire** on the windscreen and a bright **orange/white glow in the engine inlets**, static discharges, sharp temperature/smell change in cabin air, and abnormal engine indications.

---

## 4. The IAVW & VAAC system (the warning chain)

- **International Airways Volcano Watch (IAVW) — 🟩:** the ICAO framework (Annex 3 / Doc 9766) that coordinates the detection and notification of volcanic ash to aviation. Its actors: **State Volcano Observatories** (report eruptions), **Volcanic Ash Advisory Centres (VAAC)**, **Meteorological Watch Offices (MWO)** and **NOTAM/ATS units**.
- **The nine VAACs — 🟩:** each is responsible for a region and issues coordinated ash advisories:

  | VAAC | Region (indicative) | Relevance to K Global |
  |---|---|---|
  | **London** | Iceland & NE North Atlantic | 🟥 **NAT tracks** (EDDF–KSFO-type near-polar/oceanic legs); Icelandic eruptions can close/curtail the North Atlantic |
  | **Anchorage** | Alaska, Aleutians, N Pacific | 🟥 High-latitude & **N Pacific** routings, Alaskan diversion airspace |
  | **Tokyo** | Japan, Kamchatka, W Pacific | 🟥 **Asia hub** (WSSS/RJTT/VHHH network) and W-Pacific routes |
  | Toulouse | Europe, Africa, Middle East | Continental Europe / Africa hubs |
  | Washington | Contiguous US, Caribbean, C America | N-American arrivals/diversions |
  | Montréal | Canada, Arctic Canada | Arctic/Canadian near-polar (see Polar doc) |
  | Buenos Aires | S America (S of ~10–20°S), Andes | EUR-SAM / South America hub |
  | Darwin | Indonesia, SE Asia | SE-Asia routings |
  | Wellington | SW Pacific, NZ | Oceania hub |

- **Products the crew/dispatch use — 🟥:**
  - **Volcanic Ash Advisory (VAA)** — text advisory from the responsible VAAC: source volcano, observed ash, and **forecast polygons at +6/+12/+18 h** by flight-level band. Reissued at least 6-hourly and whenever conditions change.
  - **Volcanic Ash Graphic (VAG)** — the graphical version of the VAA.
  - **Volcanic Ash SIGMET** — issued by the MWO for the FIR; the tactical in-flight warning.
  - **ASHTAM** — a special NOTAM series giving the aerodrome/airspace status and the **ICAO aviation colour code** (Green → Yellow → Orange → **Red**) for volcano activity.
- **Live-only — 🟥:** every one of these is time-critical and revised frequently; K Global stores **none** of them — they are **pulled at planning and refreshed in flight** (SIGMET/ASHTAM via the airspace briefs' info sources).

---

## 5. Avoidance & the encounter procedure

- **Avoidance is the rule — 🟥:** the entire policy is **do not enter ash**. Plan clear of current and forecast ash (§6); in flight, treat any reported/forecast ash on track as a hard boundary and re-route around it with margin — laterally **and** in level, since ash occupies a band of flight levels and drifts.
- **Encounter procedure — 🟥 (summarised concept — the QRH memory drill governs):** if ash is inadvertently entered (recognition clues in §3), the objective is to **get out the way you came in** while protecting the engines. Broadly, and subject to the type QRH:
  1. **Thrust — reduce toward idle** (lowers gas temperature, helps shed fused deposits; avoids high-power thermal stress) 🟧.
  2. **Do not climb — avoid altitude increase**; an **180° turn** to exit is normally the shortest way out of the cloud (typically a **descending turn** back along track, upwind of the source) — but terrain/MSA and driftdown must be respected.
  3. **Engine anti-ice / all anti-ice ON** and **packs/bleeds** managed per QRH to help stabilise the engines and cabin; be ready for **surge, flame-out and relight** attempts.
  4. **Oxygen — don masks / smoke procedure** if fumes or smoke enter the cabin.
  5. **Monitor airspeed** — expect **unreliable airspeed** from blocked probes; apply pitch/power reference from the QRH.
  6. **Once clear — divert/land** at a suitable field for inspection; do **not** re-enter the cloud, and expect degraded windscreen visibility on approach.
  - **This section is a concept, not the checklist.** Fly the **type QRH "Volcanic Ash Encounter" memory items** — engine handling and relight logic differ by type 🟧.
- **After any encounter:** the airframe/engines require inspection before further flight; report the encounter (VOLMET/PIREP and to the operator) so the VAAC/observatory and other traffic benefit.

---

## 6. Flight-planning & re-route policy

- **At planning — 🟥:** before dispatch, pull the **VAA/VAG for every VAAC region the route crosses**, the **Volcanic Ash SIGMETs** for the FIRs, and any **ASHTAM/NOTAM**. If the planned track or any planned/likely flight level intersects a **current or forecast (+6/+12/+18 h) ash polygon**, the flight is **re-planned** — re-route laterally, change levels to stay clear of the ash band, delay, or cancel. No dispatch through forecast ash.
- **Contingency & alternates — 🟧:** on routes near active VAAC regions (Iceland/NAT, Aleutians/N-Pacific, Japan/Kamchatka), carry a **re-route/diversion plan** and extra fuel, and choose alternates **not** downwind of the plume. Coordinate with the near-polar/oceanic diversion set where relevant (see the Polar doc and airspace briefs).
- **In flight — 🟥:** refresh SIGMET/ASHTAM at the FIR boundaries and via datalink; if a new plume or a revised forecast puts ash on track, request re-route/re-level early. A drifting plume can close a track behind you — keep the picture current.
- **Contaminated-area charts — 🟧:** where a State/authority publishes ash-concentration or contaminated-area charts for a specific event, they are used at the **planning/risk-assessment** level; they do **not** authorise penetrating visible/forecast ash — the crew rule remains total avoidance.

---

## Cross-references

- **Polar & High-Latitude Operations (OM E)** — Iceland/Aleutian/Kamchatka plumes sit directly on the high-latitude diversion set; ash re-routing layered onto polar diversion planning: `./Polar and High-Latitude Operations.md`
- **ETOPS / EDTO Procedures (OM E)** — an ash re-route can change the en-route-alternate/critical-fuel picture on an EDTO leg: `./ETOPS-EDTO Procedures.md`
- **Adverse Weather & Windshear (OM E)** — the other "avoid entirely, do not penetrate" hazard; radar limits (ash is generally not painted): `./Adverse Weather and Windshear.md`
- **North Atlantic (NAT) airspace brief** — London-VAAC region; Icelandic-eruption re-route/closure context and oceanic SIGMET sources: `../OM C Routes and Destinations/Airspace/General/North Atlantic.md` 🟧 (referenced; confirm the brief exists)
- **Arctic / High-Latitude airspace brief** — high-latitude / Anchorage & Montréal VAAC context and diversion fields: `../OM C Routes and Destinations/Airspace/General/Arctic.md`
- **North America** — no standalone airspace brief yet (Anchorage/Washington VAAC coverage); interim content in the Arctic brief: `../OM C Routes and Destinations/Airspace/General/Arctic.md` 🟧
- **Fleet Index** — for the type QRH holding the "Volcanic Ash Encounter" memory items and unreliable-airspeed drill: `../OM B Fleet/Fleet Index.md`

---

## Open items (🟧 — confirm)

- **Type "Volcanic Ash Encounter" QRH drill** — exact memory items, thrust/anti-ice handling and engine-relight logic per fleet type (Airbus vs Boeing differ) — read from each QRH and codify in the airframe packs.
- **ICAO aviation colour-code mapping** — how Green/Yellow/Orange/Red on an ASHTAM maps to any operational restriction for K Global — confirm against the authority/OpsSpec.
- **VAAC region boundaries** — indicative in §4; verify exact areas of responsibility against the current IAVW handbook for edge-of-region routings.
- **NAT airspace brief** — cross-ref assumes a North Atlantic brief exists; confirm/redirect the link (currently NAT/North-America content is partly in the Arctic brief).
- **Ash-concentration/contaminated-area chart policy** — confirm whether K Global's authority uses concentration thresholds for any risk-assessed operation, or pure avoidance only.

---

## Sources & References
*Public URLs only. Cite origin + retrieved dates. Live products (VAA/VAG/SIGMET/ASHTAM) and subscription material (QRH, SimBrief) may inform content but are not stored or listed here.*

- **ICAO Doc 9691 — Manual on Volcanic Ash, Radioactive Material and Toxic Chemical Clouds, 3rd Ed. 2015** — hazard science, ash effects on aircraft/engines, avoidance doctrine — via SKYbrary bookshelf: https://skybrary.aero/bookshelf/doc-9691-an954-manual-volcanic-ash-radioactive-material-and-toxic-chemical-clouds (retrieved 2026-07-25).
- **ICAO Doc 9766 — Handbook on the International Airways Volcano Watch (IAVW)** — IAVW structure, the nine VAACs, VAA/ASHTAM chain — https://skybrary.aero/sites/default/files/bookshelf/450.pdf (retrieved 2026-07-25).
- **ICAO Annex 3 — Meteorological Service for International Air Navigation** — Volcanic Ash SIGMET, VAAC advisory requirements, MWO responsibilities (ICAO not freely hosted; via SKYbrary) — https://skybrary.aero/articles/volcanic-ash-advisory-centre-vaac (retrieved 2026-07-25).
- **SKYbrary — Volcanic Ash Advisory Centre (VAAC)** — the nine centres, advisory products, regional responsibility — https://skybrary.aero/articles/volcanic-ash-advisory-centre-vaac (retrieved 2026-07-25).
- **SKYbrary — Managing Volcanic Ash Risk to the Safety of Flights** — avoidance doctrine, planning, encounter response — https://skybrary.aero/articles/managing-volcanic-ash-risk-safety-flights (retrieved 2026-07-25).
- **SKYbrary — ASHTAM** — the special NOTAM series and ICAO aviation colour code — https://skybrary.aero/articles/ashtam (retrieved 2026-07-25).
- **London VAAC (UK Met Office)** — Iceland / NE North Atlantic advisories relevant to NAT tracks — https://acct.metoffice.gov.uk/services/transport/aviation/regulated/international-aviation/vaac/index (retrieved 2026-07-25). *(Anchorage VAAC — NOAA/NWS; Tokyo VAAC — JMA — pull live at planning.)*

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-25 | Initial draft. Second of four OM E — Operations weather/procedure docs in this batch. Covers the volcanic-ash hazard (engines/airframe/pitot-static, radar-invisible), the IAVW and nine VAACs (London/Anchorage/Tokyo mapped to NAT/Pacific/high-latitude routes), the VAA/VAG/SIGMET/ASHTAM product chain, total-avoidance as the rule, a summarised encounter concept referencing the type QRH (reduce thrust, avoid climb, 180° exit, anti-ice/engine care, don O2), and flight-planning/re-route policy. Built from ICAO Doc 9691 / Doc 9766 (IAVW) / Annex 3 and SKYbrary (VAAC / Managing Volcanic Ash Risk / ASHTAM). Cross-linked to Polar, ETOPS/EDTO, Adverse Weather, NAT & Arctic briefs and the Fleet Index. Type QRH drill, colour-code mapping and exact VAAC boundaries flagged open. |
