# EDDF – KLAX · Route Briefing
### Frankfurt – Los Angeles

**Flight number(s):** K51103 (cargo frequency K59602) · **Direction:** Westbound (EDDF → KLAX) · **Service days:** 5/week
<!-- No radio callsigns in OM content (governance §1.3). Flight numbers are commercial identifiers and OK; do not add an ATC callsign. -->

**Version** v0.2 · **Updated** 2026-07-25 · **Status** Draft

> **Read-me:** Durable reference for the city pair — standing routing, ETOPS, alternates and hazards. Not a clearance and not the day's plan: file and fly the SimBrief/current-AIRAC route with that day's winds and levels. Live wx/NOTAM/conflict bulletins are pulled at planning (§12). Open 🟧 items in §11. Flag legend 🟥 restriction/hazard · 🟧 caution · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| City pair | EDDF → KLAX (Frankfurt/Main → Los Angeles Intl) |
| Flight number(s) | **K51103** (cargo frequency **K59602**) |
| Frequency | **5/week** `[VAMSYS routes.json, pulled 2026-07-25]` |
| Distance | **5,030 NM** — VAMSYS dispatch distance `[VAMSYS routes.json, pulled 2026-07-25]` |
| Typical cruise / step | M.80–.82; step **FL310 → FL340 → FL360 → FL380** (FL380 confirmed as the VAMSYS-modelled cruise level) |
| Cost index (default) | **CI 70** `[VAMSYS routes.json, pulled 2026-07-25]` |
| Block time | **~11h30–12h00** westbound 🟧 (wind-dependent) — confirm per OFP |
| Fleet | **Assigned: A350-1000 (A35K)** · Allowed: A339 · A388 · A359 · A346 · B748 · B77W · B789 · A35K (VAMSYS widebody set); **cargo (K59602): 777F** → [`OM B — A35K`](../../../fleet/a35k/dispatch.md) · [Fleet Capability Matrix](../../../fleet/capability-matrix.md) |
| ETOPS / EDTO | **EDTO — planned 120 min+** 🟥 — see §5 |
| Sector type | Ultra-long-haul · **EDTO** · **high-latitude / near-polar** (track peaks ~70°N) |

---

## 2. Validation summary

| Domain | Flag | Note |
|---|---|---|
| Range vs fleet capability | 🟩 | 5,030 NM (VAMSYS dispatch distance) is within range for the cleared widebody-pax fleet set (A339/A388/A359/A346/B748/B77W/B789/A35K); confirm the assigned type/tail at dispatch (§1). |
| ETOPS/EDTO adequacy | 🟧 | **120 min+** planned; Greenland/Canadian alternates (BGSF, CYZF) cover the near-polar gap but are sparse and weather-exposed — confirm forecast at/above EDTO minima each dispatch (§5, §8). |
| Overflight / conflict-zone risk | 🟩 | Great-circle track is over friendly states and open ocean / near-polar wilderness — no conflict-zone corridors on track. Re-check live regardless (§9). |
| Terrain / MORA on track | 🟧 | Oceanic/ice-cap segment has no en-route terrain; **but the western-US descent into KLAX crosses high terrain** (Sierra Nevada / San Gabriel-San Bernardino) that drives the driftdown/decompression floor on the inland leg (§6, [KZLA §8](../../airspace/fir/north-america/los-angeles-kzla.md)). |
| Alternate coverage (dep/enroute/dest) | 🟧 | Dep EDDM; dest KSFO + KLAS; en-route BGSF/CYZF. Adequate but **widely spaced** across the near-polar leg (§8). |
| Curfew / slot at either end | 🟧 | EDDF slot-coordinated + night restrictions; KLAX no hard curfew but noise/flow and **marine-layer** single-flow constraints — confirm on the Airport briefs (§10). |
| Fuel availability / tankering | 🟩 | Jet A-1 at both ends; no tankering driver. **Fuel-freeze margin** on the cold near-polar cruise is the live concern, not availability (§7). |

---

## 3. Standard / preferred routing
- **Filed route string:** a **near-polar great-circle routing** much like the EDDF–KSFO leg — Europe → North Atlantic / Reykjavik → Greenland → Canadian Northern Domestic Airspace (true-track) → western US → the Los Angeles basin. No durable airway string is stored; fly the **SimBrief / current-AIRAC route** with that day's winds/levels and the assigned oceanic clearance. `[routes.json / current AIRAC]` 🟧
- **FIRs crossed:** Langen (EDGG) → Hannover (EDVV) / Copenhagen (EKDK) → Polaris/Bodø Oceanic (ENOB) → **Reykjavik (BIRD)** → **Nuuk (BGGL)** → **Edmonton (CZEG)** → adjacent Canadian domestic → Salt Lake (KZLC) / Oakland (KZOA) → **Los Angeles (KZLA)**. Departure FIR: [Langen (EDGG)](../../airspace/fir/europe/langen-edgg.md); European upper-airspace picture: [Europe airspace brief](../../airspace/europe.md); oceanic transit: [North Atlantic (NAT)](../../airspace/north-atlantic.md); high-latitude/ice-cap/Canadian-north: [Arctic](../../airspace/arctic.md); coast-in and CONUS domestic: [North America](../../airspace/north-america.md); destination ARTCC: [Los Angeles (KZLA)](../../airspace/fir/north-america/los-angeles-kzla.md).
- **One-way / level-capped segments:** NAT HLA **RVSM FL290–FL410** (RVSM approval required); oceanic clearance on a cleared track/random routing with assigned Mach. The step-climb profile (FL310→380) is flown as weight and OAT allow; oceanic level changes are procedural — request early.
- **Common ATC re-routes / choke points:** European SID/first-airway loading out of EDDF; oceanic entry point and level negotiation at the Bodø/Reykjavik boundary; **true-track transition** into the Canadian Northern Domestic Airspace; coast-in metering into the western-US centers; **terrain-engineered RNAV STAR** flow into the mountain-ringed KLAX basin (marine-layer-dependent runway config, SCT sequencing).
- **Corridor discipline:** 🟩 No conflict-zone corridor on this pairing — but hold the **oceanic/near-polar track exactly** (procedural, non-radar) and apply **SLOP (right-only, up to 2 NM)** where published; see §6 and [Datalink & Oceanic Procedures](../../../flight-ops/datalink-and-oceanic-procedures.md).

---

## 4. Sector profile
Westbound ultra-long-haul, **~11h30–12h00** block (wind-dependent) at **CI 70** (VAMSYS dispatch cost index) on a weight-sensitive leg, flown by the **assigned hero type A350-1000 (A35K)** within the wider widebody-pax allowed set (a **777F cargo working, K59602**, operates the same pairing; design register: the company Knowledge base) — the day's block, fuel and levels are OFP-driven and filed against that day's winds, not this durable string. Cruise **M.80–.82** with a classic four-step climb **FL310 → FL340 → FL360 → FL380** as fuel burns off — the near-polar great circle keeps the aircraft in cold air for most of the cruise (see §7 fuel-freeze). Departing Frankfurt mid-day, the routing chases daylight north-westward across the Atlantic and Canadian north into an afternoon arrival on the US West Coast — largely a **day-lit high-latitude cruise**, easing (not removing) the cold-soak monitoring workload versus a night polar leg. Winds are the dominant variable: the North Atlantic / Canadian jet drives the day's optimum track and levels and can add materially to block and burn.

---

## 5. ETOPS / EDTO
- **Applicability:** 🟥 **EDTO — planned ETOPS RULE TIME 120 min+ (near-polar).** The great-circle track leaves the European/North-American threshold rings over the North Atlantic / Greenland / Canadian near-polar segment; the diversion rings of the Greenland and Canadian alternates cover the gap. Method and definitions are in [ETOPS / EDTO Procedures](../../../flight-ops/etops-edto.md) — this brief *applies* them. The long-range widebody-twin **operator-approved rule time is 180 min** per the [Fleet Capability Matrix](../../../fleet/capability-matrix.md) (types certified well beyond); confirm the **value planned** each dispatch 🟧.
- **Entry / exit points:** the EDTO entry/exit and **critical point (equal-time point)** are computed on the day's OFP against the assigned near-polar track (entry-side alternate typically **BGSF**, exit-side **CYZF**) — not stored here as fixed coordinates 🟧.
- **En-route alternates:**
  - [**BGSF — Kangerlussuaq**](../../destinations/north-america/greenland/bgsf/index.md) — entry-side / Greenland.
  - [**CYZF — Yellowknife**](../../destinations/north-america/canada/cyzf/index.md) — exit-side / Canadian north.
  - [**BGTL — Pituffik Space Base**](../../destinations/north-america/greenland/bgtl/index.md) — additional Greenland field available (military/PPR — confirm at dispatch).
- **Critical-fuel / depressurised-escape note:** 🟥 The leg must carry fuel for the **critical-fuel scenario** — simultaneous decompression **+** engine-out driftdown from the critical point to the limiting alternate, with ice/anti-ice/APU penalties and reserves. EDTO planning weather-minima add-ons apply; an alternate is usable only if forecast at/above minima across its window of possible use. Confirm the **operator EDTO approval / planned rule time** before assuming coverage (§8).

---

## 6. Terrain, airspace & oceanic
- **MSA / high-MORA belts on track:** 🟧 None in the cruise core (open ocean, then the Greenland ice cap and sub-Arctic Canada at high FL). Terrain becomes binding at **two points**: on a **diversion** over the **Greenland ice cap** (high plateau, cold-temperature altimetry), and on the **western-US descent into KLAX** — the LA basin is ringed by the **Sierra Nevada (Mt Whitney 14,505 ft)** and **San Gabriel / San Bernardino (to ~11,500 ft)** ranges, which set the MEA/MORA and the engine-out/decompression driftdown floor on the inland leg. See [Los Angeles (KZLA) §8](../../airspace/fir/north-america/los-angeles-kzla.md).
- **FIRs & control type:** Continental radar in Europe and over Canada/US; **procedural (non-radar) oceanic** across the Bodø/Reykjavik/Nuuk segment. NAT HLA is RVSM FL290–FL410 with **CPDLC + ADS-C (FANS 1/A)** the working environment — see [North Atlantic](../../airspace/north-atlantic.md) and [Arctic](../../airspace/arctic.md).
- **Oceanic / remote procedures:** 🟥 Datalink-first discipline — CPDLC/ADS-C logon ahead of oceanic entry, position/clearance readback, **Mach Number Technique**, **SLOP (right-only, up to 2 NM)**, and voice (HF/SATVOICE) as fallback; expect **HF degradation** under space weather at high latitude. **True-track reference across the Canadian Northern Domestic Airspace** (magnetic heading unreliable near the pole). Full method: [Datalink & Oceanic Procedures](../../../flight-ops/datalink-and-oceanic-procedures.md) and [Polar & High-Latitude Operations](../../../flight-ops/polar.md).

---

## 7. Fuel & payload (this pairing)
- **Critical fuel scenario:** 🟥 Governed by the EDTO critical point (§5) — decompression + driftdown to BGSF/CYZF with ice/APU penalties. This, not still-air burn, sizes the reserve. Trip/block figures are OFP-driven and not stored here 🟧.
- **Fuel-freeze awareness (this route's live concern):** 🟥 **Jet A-1 freeze point −47 °C**; on the cold near-polar cruise the SAT runs deeply negative (comparable to the EDDF–KSFO leg, where the reference OFP showed SAT to −54 °C), so **tank fuel temperature** (which lags the air as it cold-soaks) will trend toward the freeze point. **Monitor tank fuel temp continuously**; mitigate by **descent to warmer air** and/or **higher Mach** before the limit — full logic in [Polar & High-Latitude Operations](../../../flight-ops/polar.md). Confirm the loaded grade is Jet A-1 on the OFP; a Jet-A uplift raises the freeze point to −40 °C and cuts the margin.
- **Tankering economics:** 🟩 Jet A-1 available both ends; no periodic-shortage or price driver makes tankering the plan here. Method: [Fuel Policy](../../../flight-ops/fuel-policy.md).
- **Payload limits:** 🟧 On a ~5,100 NM near-polar leg the sector is **fuel/weight-sensitive** — trading payload for contingency/tanker fuel is a direct swap, as on the sister EDDF–KSFO leg (which plans MTOW-limited). Confirm the assigned type's take-off-weight picture ex EDDF per OFP. Type performance: [Fleet Capability Matrix](../../../fleet/capability-matrix.md).

---

## 8. Alternates
| Role | ICAO | Distance | Notes |
|---|---|---|---|
| Departure alternate | **EDDM** | short (intra-Germany) | [EDDM — Munich](../../destinations/europe/germany/eddm/index.md) — same-country, high-capacity, all-weather. |
| En-route alternate | **BGSF** | entry-side (Greenland) | [BGSF — Kangerlussuaq](../../destinations/north-america/greenland/bgsf/index.md) — EDTO entry-side; cold-weather/ice-cap field, declared distances 🟧 (see brief). |
| En-route alternate | **CYZF** | exit-side (Canada) | [CYZF — Yellowknife](../../destinations/north-america/canada/cyzf/index.md) — EDTO exit-side; sub-Arctic, cold-weather ops. |
| En-route alternate | **BGTL** | Greenland (available) | [BGTL — Pituffik Space Base](../../destinations/north-america/greenland/bgtl/index.md) — additional high-Arctic field; PPR/military status — confirm at dispatch. |
| Destination alternate | **KSFO** | ~290 NM NW of KLAX | [KSFO — San Francisco Intl](../../destinations/north-america/united-states/ksfo/index.md) — primary; full international, but **shares the coastal marine-layer regime** — see the KSFO brief. |
| Destination alternate (secondary) | **KLAS** | ~205 NM NE of KLAX | Las Vegas-Harry Reid — desert alternate, **de-correlated from the LA-basin marine layer**; full international. **Brief to build** 🟧 (see [KZLA §9](../../airspace/fir/north-america/los-angeles-kzla.md)). |

**Rationale & gaps:** The EDTO alternates (BGSF, CYZF, with BGTL available) are adequate but **sparse and widely spaced**, sit in a cold/remote environment, and are **weather-exposed** — the near-polar leg's usability turns on their forecasts, which must be confirmed at/above EDTO planning minima for the window of use (§5). 🟧 Treat a single-field forecast deterioration over Greenland/northern Canada as an EDTO planning constraint, not a footnote. At the destination end, **KSFO is a coastal field correlated with a broad West-Coast marine-layer/low-visibility event**; **KLAS** (inland desert) is the de-correlated secondary and the better choice when the whole California coast is fogged in. KLAS is not yet a curated OM C brief 🟧.

---

## 9. Overflight & conflict-zone (durable)
- **Corridor & states overflown:** Germany → Danish/Norwegian upper airspace → North Atlantic oceanic → Greenland (Kingdom of Denmark) → Canada → United States. All friendly, no overflight-permit regime on the great-circle track.
- **Conflict / risk zones near track:** 🟩 **None on track** — the routing avoids all active conflict corridors by geography (it runs north-west over ocean and near-polar wilderness). No Russian, Middle-East or Sahel airspace is involved.
- **Overflight permits / diplomatic:** None required for the standard routing. BGTL is a **military space base** — any actual use is PPR/coordination-driven (confirm on the Airport brief), but it is a diversion field, not overflown.

> **Currency:** re-check safeairspace.net / OPSGROUP and state NOTAMs at planning — this is durable context, not live clearance. Keep the filed route in-corridor.

---

## 10. Hazards & watch-items
- **Seasonal:** North Atlantic / Canadian **jetstream and CAT** (block/burn and turbulence driver, worst in winter); **space-weather HF/GNSS degradation** at high latitude (monitor NOAA space-wx as a dispatch input — not an automatic divert trigger below 78°N); **cold-weather diversion-field conditions** (contaminated runways, cold-temperature altimetry, de-ice) at BGSF/CYZF/BGTL year-round.
- **Route-specific binding hazards:** 🟥 **Fuel freeze / cold soak** on the near-polar cruise (§7); **procedural oceanic discipline** and datalink dependency (§6); **true-track navigation** across the Canadian NDA (§6); **sparse EDTO alternates** (§8); **high terrain on the KLAX inland descent** (Sierra / San Gabriel — driftdown floor, §6).
- **End-field constraints:** EDDF — slot-coordinated, night-flight restrictions; KLAX — **marine-layer / coastal-stratus** low ceilings (west-flow bias, morning single-flow), **Santa-Ana downslope wind / mountain-wave turbulence**, and **wildfire smoke / fire TFRs** in season. Confirm current specifics on the [EDDF](../../destinations/europe/germany/eddf/index.md) and [KLAX](../../destinations/north-america/united-states/klax/index.md) Airport briefs (KLAX brief currently a baseline stub 🟧) and the [KZLA FIR brief](../../airspace/fir/north-america/los-angeles-kzla.md).
- **Other:** fuel/weight-sensitive payload (§7) — load control is a live economics/performance item every flight; KLAS enroute/dest alternate brief not yet built (§8).

---

## 11. Open items (🟧 — confirm)
- **Flight number(s)** and **service days** — RESOLVED: **K51103** (cargo K59602), 5/week, from VAMSYS `routes.json` (pulled 2026-07-25).
- **Cleared fleet** — RESOLVED from VAMSYS: widebody pax set A339/A388/A359/A346/B748/B77W/B789/A35K.
- **Distance / CI** — RESOLVED: 5,030 NM (VAMSYS dispatch distance), CI 70. **Block / fuel / TOW** remain OFP-specific; confirm per dispatch.
- **Operator EDTO approval / planned rule time** — widebody-twin ceiling is 180 min (Fleet Matrix); near-polar leg planned to 120 min+ — confirm the value used each dispatch (§5).
- **EDTO alternate forecasts** — BGSF/CYZF/BGTL are weather-exposed; usability confirmed per dispatch against EDTO planning minima (§5, §8).
- **BGTL access status** — military/PPR; confirm availability as a diversion field at dispatch (§8, §9).
- **BGSF/CYZF declared distances** — absent from reachable public sources (see Airport briefs §Open items).
- **KLAS destination-alternate brief** — referenced but not yet a curated OM C brief (§8).
- **KLAX airport brief** — baseline stub; build out destination-end detail (marine-layer/runway config, minima, curfew/slot) when required (§10).
- **Loaded fuel grade** — confirm Jet A-1 (not Jet A) on each OFP for the fuel-freeze margin (§7).

---

## 12. Per-flight briefing (not stored here)
The dispatch pre-flight briefing — SimBrief OFP, live METAR/TAF/NOTAM, that day's winds/levels/oceanic track, tail assignment, load, and the day's EDTO entry/exit and fuel-temp picture — is generated at planning (T-2h) and lives in the dispatch pack, **not** in this durable file.

---

## Sources & References
*Public URLs only. Cite origin + retrieved dates. VAMSYS mirror and in-sim charts inform content but are not listed as public citations.*

- Great-circle distance reference — Great Circle Mapper (https://www.gcmap.com) (retrieved 2026-07-25)
- Overflight / conflict picture — safeairspace.net (https://safeairspace.net) (retrieved 2026-07-25)
- ETOPS/EDTO & polar operations method — FAA AC 120-42B, *Extended Operations (ETOPS and Polar Operations)* (https://www.faa.gov/regulations_policies/advisory_circulars) (retrieved 2026-07-25)
- North Atlantic oceanic structure — ICAO NAT Doc 007, *North Atlantic Operations and Airspace Manual* (https://www.icao.int/EURNAT/Pages/EUR-and-NAT-Document.aspx) (retrieved 2026-07-25)
- EDTO / ETOPS concept summary — SKYbrary, *ETOPS* (https://skybrary.aero/articles/etops) (retrieved 2026-07-25)
- Frankfurt / German AIP ENR (route & airspace) — DFS AIP (https://aip.dfs.de) (retrieved 2026-07-25)

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-25 | Initial build — durable EDDF–KLAX route brief. Near-polar/NAT great-circle crossing, ~5,100 NM GC (sister leg to EDDF–KSFO); EDTO-120+ / high-latitude with Greenland/Canadian alternates (BGSF/CYZF, BGTL available); fuel-freeze/cold-soak, true-track NDA, procedural-oceanic/datalink discipline; high-terrain KLAX inland descent (Sierra/San Gabriel driftdown) + marine-layer/Santa-Ana/wildfire hazards. Cross-linked to OM B (Fleet Capability Matrix), OM E (ETOPS/Polar/Fuel/Datalink), Airspace (Europe/NAT/Arctic/North America + KZLA FIR) and Airport briefs (EDDF/KLAX/EDDM/KSFO/BGSF/CYZF/BGTL). Fleet, identity, CI/block/fuel/TOW and planned rule time flagged pending VAMSYS `routes.json`/OFP. |
| v0.2 | 2026-07-25 | Identity/fleet/distance/CI/frequency set from live VAMSYS routes.json (source of truth); pending-VAMSYS flags cleared. |
| v0.3 | 2026-07-25 | Reconciled to routes.md design register: assigned hero type + multi-services set; EDDF-VHHH restored to dual pax+cargo. |
