# EDDF – KSFO · Route Briefing
### Frankfurt – San Francisco

**Flight number(s):** K52001 · **Direction:** Westbound (EDDF → KSFO) · **Service days:** 7/week (daily)
<!-- No radio callsigns in OM content (governance §1.3). Flight numbers are commercial identifiers and OK; do not add an ATC callsign. -->

**Version** v0.2 · **Updated** 2026-07-25 · **Status** Draft

> **Read-me:** Durable reference for the city pair — standing routing, ETOPS, alternates and hazards. Not a clearance and not the day's plan: file and fly the SimBrief/current-AIRAC route with that day's winds and levels. Live wx/NOTAM/conflict bulletins are pulled at planning (§12). Open 🟧 items in §11. Flag legend 🟥 restriction/hazard · 🟧 caution · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| City pair | EDDF → KSFO (Frankfurt/Main → San Francisco Intl) |
| Flight number(s) | **K52001** |
| Frequency | **7/week — daily service** `[VAMSYS routes.json, pulled 2026-07-25]` |
| Distance | **4,936 NM** — VAMSYS dispatch distance `[VAMSYS routes.json, pulled 2026-07-25]` |
| Typical cruise / step | M.80–.82; step **FL310 → FL340 → FL360 → FL380** (FL380 confirmed as the VAMSYS-modelled cruise level) `[reference OFP 2026-07-25 / VAMSYS routes.json]` |
| Cost index (default) | **CI 65** `[VAMSYS routes.json, pulled 2026-07-25]` |
| Block time | ~**11h33** `[reference OFP 2026-07-25]` |
| Fleet | **Assigned: A350-900 (A359)** · Allowed: A339 · A388 · A359 · A346 · B748 · B77W · B789 · A35K (VAMSYS widebody set) → [`OM B — A359`](../../../fleet/a359/dispatch.md) · [Fleet Capability Matrix](../../../fleet/capability-matrix.md) |
| ETOPS / EDTO | **120 min** 🟥 — see §5 |
| Sector type | Long-haul · **EDTO** · **high-latitude / near-polar** (track peaks ~70°N) |

---

## 2. Validation summary

| Domain | Flag | Note |
|---|---|---|
| Range vs fleet capability | 🟩 | 4,936 NM (VAMSYS dispatch distance) is within range for the cleared widebody-pax fleet (A339/A388/A359/A346/B748/B77W/B789/A35K); **TOW 251 t is MTOW-limited** at 286 pax on the reference A339 OFP — payload capped, not range-limited (§7). |
| ETOPS/EDTO adequacy | 🟧 | **120 min** planned; Greenland/Canadian alternates (BGSF, CYZF, BGTL) cover the near-polar gap but are sparse and weather-exposed — confirm forecast at/above EDTO minima each dispatch (§5, §8). |
| Overflight / conflict-zone risk | 🟩 | Great-circle track is over friendly states and open ocean/near-polar wilderness — no conflict-zone corridors on track. Re-check live regardless (§9). |
| Terrain / MORA on track | 🟩 | Oceanic/ice-cap segment has no en-route terrain; Greenland ice cap and western-Canada/US terrain matter only on a diversion (§6, §8). |
| Alternate coverage (dep/enroute/dest) | 🟧 | Dep EDDM; dest KSMF + KRNO; en-route BGSF/CYZF/BGTL. Adequate but **widely spaced** across the near-polar leg (§8). |
| Curfew / slot at either end | 🟧 | EDDF slot-coordinated + night restrictions; KSFO no curfew but noise/flow constraints — confirm on the Airport briefs (§10). |
| Fuel availability / tankering | 🟩 | Jet A-1 at both ends; no tankering driver. **Fuel-freeze margin** on the cold cruise is the live concern, not availability (§7). |

---

## 3. Standard / preferred routing
- **Filed route string:** `EDDF MARUN7F Y150 TOLGI DOROR ATNAK GUNPA 6510N/01000W … 7000N/06000W ADSAM 7000N/07000W 6900N/09000W 6500N/10400W YSM 5500N/11600W DSD RBL BDEGA4 KSFO` `[reference OFP 2026-07-25 / current AIRAC]`
- **FIRs crossed:** Langen (EDGG) → Hannover (EDVV) / Copenhagen (EKDK) → Polaris/Bodø Oceanic (ENOB) → Reykjavik (BIRD) → Nuuk (BGGL) → Edmonton (CZEG) → Vancouver (CZVR) → Seattle (KZSE) → Oakland (KZOA). departure FIR: [Langen (EDGG)](../../airspace/fir/europe/langen-edgg.md); European upper-airspace picture: [Europe airspace brief](../../airspace/europe.md); oceanic transit: [North Atlantic (NAT)](../../airspace/north-atlantic.md); high-latitude/ice-cap/Canadian-north: [Arctic](../../airspace/arctic.md); coast-in and CONUS domestic: [North America](../../airspace/north-america.md).
- **One-way / level-capped segments:** NAT HLA **RVSM FL290–FL410** (RVSM approval required); oceanic clearance on a cleared track/random routing with assigned Mach. The step-climb profile (FL310→380) is flown as weight and OAT allow; oceanic level changes are procedural — request early.
- **Common ATC re-routes / choke points:** European SID/first-airway loading out of EDDF (MARUN/Y150); oceanic entry point and level negotiation at the Bodø/Reykjavik boundary; coast-in metering into the Edmonton/Vancouver FIRs; **BDEGA arrival** flow and runway config at KSFO (west-flow bias, marine-layer sequencing).
- **Corridor discipline:** 🟩 No conflict-zone corridor on this pairing — but hold the **oceanic/near-polar track exactly** (procedural, non-radar) and apply **SLOP** where published; see §6 and [Datalink & Oceanic Procedures](../../../flight-ops/datalink-and-oceanic-procedures.md).

---

## 4. Sector profile
Westbound long-haul, ~11h33 block at **CI 65** (VAMSYS dispatch cost index for this pairing) on a MTOW-limited, into-the-jet leg, flown by the **assigned hero type A350-900 (A359)** within the wider widebody-pax allowed set (design register: the company Knowledge base). Cruise **M.80–.82** with a classic four-step climb **FL310 → FL340 → FL360 → FL380** as fuel burns off — the high-latitude great circle keeps the aircraft in cold air for most of the cruise (see §7 fuel-freeze). Departing Frankfurt mid-day, the routing chases daylight north-westward across the Atlantic and Canadian north into an afternoon arrival on the US West Coast — largely a **day-lit high-latitude cruise**, which eases the cold-soak monitoring workload versus a night polar leg but does not remove it. Winds are the dominant variable: the North Atlantic/Canadian jet can add materially to block and burn, and drives the day's optimum track and levels (filed against that day's winds, not this durable string).

---

## 5. ETOPS / EDTO
- **Applicability:** 🟥 **EDTO — planned ETOPS RULE TIME 120 min.** The great-circle track leaves the European/North-American threshold rings over the North Atlantic/Greenland/Canadian near-polar segment; the 120-min rings of the Greenland and Canadian alternates cover the gap. Method and definitions are in [ETOPS / EDTO Procedures](../../../flight-ops/etops-edto.md) — this brief *applies* them.
- **Entry / exit points:** **ENTRY ≈ N6952.3 W07818.0** (entry-side alternate **BGSF**) → **EXIT ≈ N6618.0 W10021.0** (exit-side alternate **CYZF**). **Critical point (for the critical-fuel scenario) ≈ N6925.4 W08539.8.** `[reference OFP 2026-07-25]`
- **En-route alternates:**
  - [**BGSF — Kangerlussuaq**](../../destinations/north-america/greenland/bgsf/index.md) — entry-side / Greenland.
  - [**CYZF — Yellowknife**](../../destinations/north-america/canada/cyzf/index.md) — exit-side / Canadian north.
  - [**BGTL — Pituffik Space Base**](../../destinations/north-america/greenland/bgtl/index.md) — additional Greenland field available.
- **Critical-fuel / depressurised-escape note:** 🟥 The leg must carry fuel for the **critical-fuel scenario** — simultaneous depressurisation **+** engine-out driftdown from the critical point to the limiting alternate, with ice/anti-ice/APU penalties and reserves. EDTO planning weather minima add-ons apply (reference OFP **WX MIN 600 ft / 3219 m ≈ 2 SM**); an alternate is usable only if forecast at/above minima across its window of possible use. Confirm the **operator EDTO approval / approved rule time** before assuming anything above 120 min (the A339 type is capable well beyond, but the leg is planned to 120) 🟧.

---

## 6. Terrain, airspace & oceanic
- **MSA / high-MORA belts on track:** 🟩 None en route in the cruise core (open ocean, then the Greenland ice cap and sub-Arctic Canada at high FL). Terrain becomes relevant only on a **diversion** — the **Greenland ice cap** (high plateau, cold-temperature altimetry) and western-Canada / Sierra-Nevada terrain near the destination end (cross-ref the alternate Airport briefs).
- **FIRs & control type:** Continental radar in Europe and over Canada/US; **procedural (non-radar) oceanic** across the Bodø/Reykjavik/Nuuk segment. NAT HLA is RVSM FL290–FL410 with **CPDLC + ADS-C (FANS 1/A)** the working environment — see [North Atlantic](../../airspace/north-atlantic.md) and [Arctic](../../airspace/arctic.md).
- **Oceanic / remote procedures:** 🟥 Datalink-first discipline — CPDLC/ADS-C logon ahead of oceanic entry, position/clearance readback, **Mach Number Technique**, **SLOP** offset, and voice (HF/SATVOICE) as fallback; expect **HF degradation** under space weather at high latitude. **True-track reference across the Canadian Northern Domestic Airspace** (magnetic heading unreliable near the pole). Full method: [Datalink & Oceanic Procedures](../../../flight-ops/datalink-and-oceanic-procedures.md) and [Polar & High-Latitude Operations](../../../flight-ops/polar.md).

---

## 7. Fuel & payload (this pairing)
- **Critical fuel scenario:** 🟥 Governed by the EDTO critical point (§5) — decompression + driftdown to BGSF/CYZF with ice/APU penalties. This, not still-air burn, sizes the reserve. Block fuel **~76.4 t**, trip **~67.8 t** `[reference OFP 2026-07-25]`.
- **Fuel-freeze awareness (this route's live concern):** 🟥 **Jet A-1 freeze point −47 °C**; the reference OFP shows **SAT down to −54 °C** across the cold high-latitude cruise, so **tank fuel temperature** (which lags the air by hours as it cold-soaks) will trend toward the freeze point. **Monitor tank fuel temp continuously**; mitigate by **descent to warmer air** and/or **higher Mach** before the limit — full logic in [Polar & High-Latitude Operations §4](../../../flight-ops/polar.md). Confirm the loaded grade is Jet A-1 on the OFP; a Jet-A uplift raises the freeze point to −40 °C and cuts the margin.
- **Tankering economics:** 🟩 Jet A-1 available both ends; no periodic-shortage or price driver makes tankering the plan here. Method: [Fuel Policy](../../../flight-ops/fuel-policy.md).
- **Payload limits:** 🟥 **MTOW-limited** — planned **TOW 251 t at 286 pax** is against MTOW, so payload is capped by structural take-off weight, not by range or field length at EDDF. Trading payload for contingency/tanker fuel is a direct swap on this leg. Type performance: [`OM B — A339 Dispatch`](../../../fleet/a339/dispatch.md).

---

## 8. Alternates
| Role | ICAO | Distance | Notes |
|---|---|---|---|
| Departure alternate | **EDDM** | short (intra-Germany) | [EDDM — Munich](../../destinations/europe/germany/eddm/index.md) — same-country, high-capacity, all-weather. |
| En-route alternate | **BGSF** | entry-side (Greenland) | [BGSF — Kangerlussuaq](../../destinations/north-america/greenland/bgsf/index.md) — EDTO entry-side; cold-weather/ice-cap field, declared distances 🟧 (see brief). |
| En-route alternate | **CYZF** | exit-side (Canada) | [CYZF — Yellowknife](../../destinations/north-america/canada/cyzf/index.md) — EDTO exit-side; sub-Arctic, cold-weather ops. |
| En-route alternate | **BGTL** | Greenland (available) | [BGTL — Pituffik Space Base](../../destinations/north-america/greenland/bgtl/index.md) — additional high-Arctic field; PPR/military status — confirm at dispatch. |
| Destination alternate | **KSMF** | ~72 NM NE of KSFO | [KSMF — Sacramento Intl](../../destinations/north-america/united-states/ksmf/index.md) — primary destination alternate, inland (out of the marine layer). |
| Destination alternate (secondary) | **KRNO** | ~130 NM E of KSFO | [KRNO — Reno-Tahoe Intl](../../destinations/north-america/united-states/krno/index.md) — secondary; high terrain around the field (see brief). |

**Rationale & gaps:** The EDTO alternates (BGSF, CYZF, with BGTL available) are adequate but **sparse and widely spaced**, sit in a cold/remote environment, and are **weather-exposed** — the near-polar leg's usability turns on their forecasts, which must be confirmed at/above EDTO planning minima for the window of use (§5). 🟧 Treat a single-field forecast deterioration over Greenland/northern Canada as an EDTO planning constraint, not a footnote. Destination pairing KSMF (inland, marine-layer-free) + KRNO covers a KSFO low-visibility/marine-layer event; KRNO carries its own terrain caveat.

---

## 9. Overflight & conflict-zone (durable)
- **Corridor & states overflown:** Germany → Danish/Norwegian upper airspace → North Atlantic oceanic → Greenland (Kingdom of Denmark) → Canada → United States. All friendly, no overflight-permit regime on the great-circle track.
- **Conflict / risk zones near track:** 🟩 **None on track** — the routing avoids all active conflict corridors by geography (it runs north-west over ocean and near-polar wilderness). No Russian, Middle-East or Sahel airspace is involved.
- **Overflight permits / diplomatic:** None required for the standard routing. BGTL is a **military space base** — any actual use is PPR/coordination-driven (confirm on the Airport brief), but it is a diversion field, not overflown.

> **Currency:** re-check safeairspace.net / OPSGROUP and state NOTAMs at planning — this is durable context, not live clearance. Keep the filed route in-corridor.

---

## 10. Hazards & watch-items
- **Seasonal:** North Atlantic / Canadian **jetstream and CAT** (block/burn and turbulence driver, worst in winter); **space-weather HF/GNSS degradation** at high latitude (monitor NOAA space-wx as a dispatch input — not an automatic divert trigger below 78°N); **cold-weather diversion-field conditions** (contaminated runways, cold-temperature altimetry, de-ice) at BGSF/CYZF/BGTL year-round.
- **Route-specific binding hazards:** 🟥 **Fuel freeze / cold soak** on the cold cruise (§7); **procedural oceanic discipline** and datalink dependency (§6); **true-track navigation** across the Canadian NDA (§6); **sparse EDTO alternates** (§8).
- **End-field constraints:** EDDF — slot-coordinated, night-flight restrictions; KSFO — **marine-layer / low-visibility** and single-approach-flow potential, west-flow bias, BDEGA arrival flow. Confirm current specifics on the [EDDF](../../destinations/europe/germany/eddf/index.md) and [**KSFO — Briefing**](../../destinations/north-america/united-states/ksfo/index.md) Airport briefs.
- **Other:** MTOW-limited payload (§7) — load control is a live economics/performance item every flight.

---

## 11. Open items (🟧 — confirm)
- **Flight number(s)** and **service days** — RESOLVED: **K52001**, 7/week (daily), from VAMSYS `routes.json` (pulled 2026-07-25).
- **Operator EDTO approval / approved rule time** — reference leg planned to 120 min; confirm the OpsSpec ceiling before planning above 120 (§5).
- **EDTO alternate forecasts** — BGSF/CYZF/BGTL are weather-exposed; usability confirmed per dispatch against EDTO planning minima (§5, §8).
- **BGTL access status** — military/PPR; confirm availability as a diversion field at dispatch (§8, §9).
- **BGSF/CYZF declared distances** — absent from reachable public sources (see Airport briefs §Open items).
- **Loaded fuel grade** — confirm Jet A-1 (not Jet A) on each OFP for the fuel-freeze margin (§7).

---

## 12. Per-flight briefing (not stored here)
The dispatch pre-flight briefing — SimBrief OFP, live METAR/TAF/NOTAM, that day's winds/levels/oceanic track, tail assignment, load, and the day's EDTO entry/exit and fuel-temp picture — is generated at planning (T-2h) and lives in the dispatch pack, **not** in this durable file.

---

## Sources & References
*Public URLs only. Cite origin + retrieved dates. VAMSYS mirror and in-sim charts inform content but are not listed as public citations.*

- Overflight / conflict picture — safeairspace.net (https://safeairspace.net) (retrieved 2026-07-25)
- ETOPS/EDTO & polar operations method — FAA AC 120-42B, *Extended Operations (ETOPS and Polar Operations)* (https://www.faa.gov/regulations_policies/advisory_circulars) (retrieved 2026-07-25)
- North Atlantic oceanic structure — ICAO NAT Doc 007, *North Atlantic Operations and Airspace Manual* (https://www.icao.int/EURNAT/Pages/EUR-and-NAT-Document.aspx) (retrieved 2026-07-25)
- EDTO / ETOPS concept summary — SKYbrary, *ETOPS* (https://skybrary.aero/articles/etops) (retrieved 2026-07-25)
- Frankfurt / German AIP ENR (route & airspace) — DFS AIP (https://aip.dfs.de) (retrieved 2026-07-25)

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-25 | Initial build — durable EDDF–KSFO route brief seeded from the reference EDDF–KSFO OFP (2026-07-25); ETOPS-120, near-polar/high-latitude, fuel-freeze, oceanic/datalink and MTOW-limited-payload picture; cross-linked to OM B (A339), OM E (ETOPS/Polar/Fuel/Datalink), Airspace (Europe/NAT/Arctic/North America) and Airport briefs (EDDF/KSFO/EDDM/KSMF/KRNO/BGSF/CYZF/BGTL). |
| v0.2 | 2026-07-25 | Identity/fleet/distance/CI/frequency set from live VAMSYS routes.json (source of truth); pending-VAMSYS flags cleared. |
| v0.3 | 2026-07-25 | Reconciled to routes.md design register: assigned hero type + multi-services set; EDDF-VHHH restored to dual pax+cargo. |
</content>
</invoke>
