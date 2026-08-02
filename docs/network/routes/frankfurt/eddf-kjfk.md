# EDDF – KJFK · Route Briefing
### Frankfurt – New York

**Flight number(s):** K51101 (A380-800, daily — lead pax service) · K51001 (Concorde, First-only flagship, 4/wk) · K51203 (A321XLR, 5/wk) · cargo K59502 (777F) · **Direction:** Westbound (EDDF → KJFK) · **Service days:** daily (A380) / 4/wk (Concorde) / 5/wk (A321XLR) / 7/wk (cargo)
<!-- No radio callsigns in OM content (governance §1.3). Flight numbers are commercial identifiers and OK; do not add an ATC callsign. -->

**Version** v0.2 · **Updated** 2026-07-25 · **Status** Draft

> **Read-me:** Durable reference for the city pair — standing routing, ETOPS, alternates and hazards. Not a clearance and not the day's plan: file and fly the SimBrief/current-AIRAC route with that day's winds and levels. Live wx/NOTAM/conflict bulletins are pulled at planning (§12). Open 🟧 items in §11. Flag legend 🟥 restriction/hazard · 🟧 caution · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| City pair | EDDF → KJFK (Frankfurt/Main → New York-John F Kennedy Intl) |
| Flight number(s) | **Three distinct pax services + cargo:** **K51101** (A380-800, everyday four-class Premier Hub connector) · **K51001** (Concorde, First-only supersonic flagship) · **K51203** (A321XLR, premium long-range narrowbody) · **K59502** (cargo, 777F) `[routes.md design register]` |
| Frequency | **K51101 daily · K51001 4/wk · K51203 5/wk · K59502 (cargo) 7/wk** `[routes.md design register / VAMSYS routes.json, pulled 2026-07-25]` |
| Distance | **3,339 NM** — VAMSYS dispatch distance `[VAMSYS routes.json, pulled 2026-07-25]` |
| Typical cruise / step | M.80–.82; step **FL310 → FL340 → FL360 → FL380** (FL380 confirmed as the VAMSYS-modelled cruise level) |
| Cost index (default) | **CI 70** `[VAMSYS routes.json, pulled 2026-07-25]` |
| Block time | **~8h00–8h30** westbound 🟧 (wind-dependent) — confirm per OFP |
| Fleet | **Assigned (per service): A380-800** (K51101, daily) · **Concorde** (K51001, First-only, 4/wk) · **A321XLR** (K51203, 5/wk) · **777F** (K59502, cargo, 7/wk) · **Allowed (wider pax set across the frequencies):** A339 · A359 · A35K · A346 · A388 · B748 · B77W · B789 · A21N · CONC, plus **freighters B77F / MD11 / B74F on the cargo frequency** → [`OM B — A388`](../../../fleet/a388/dispatch.md) · [`OM B — Concorde`](../../../fleet/conc/dispatch.md) · [`OM B — B77F`](../../../fleet/b77f/dispatch.md) · [Fleet Capability Matrix](../../../fleet/capability-matrix.md) |
| ETOPS / EDTO | **EDTO applicable — NAT crossing** 🟥 — see §5 |
| Sector type | Long-haul · transatlantic · **NAT (OTS / random) oceanic** |

---

## 2. Validation summary

| Domain | Flag | Note |
|---|---|---|
| Range vs fleet capability | 🟩 | 3,339 NM (VAMSYS dispatch distance) is a comfortable transatlantic sector for the cleared fleet set (A339/A359/A35K/A346/A388/B748/B77W/B789/A21N/CONC pax; B77F/MD11/B74F on the cargo frequency) — well inside range with full payload; not range-limited (§1). |
| ETOPS/EDTO adequacy | 🟧 | NAT crossing — **EDTO applies**. Alternate coverage on this mid-latitude track is comparatively good (Iceland BIKF, Gander/Canadian Atlantic, Greenland available), so the leg is normally plannable well within the widebody-twin operator rule time (180 min per the Fleet Matrix). Confirm the **planned rule time** and alternate forecasts each dispatch (§5, §8). |
| Overflight / conflict-zone risk | 🟩 | Track is over friendly states and open North Atlantic — no conflict-zone corridor. Re-check live regardless (§9). |
| Terrain / MORA on track | 🟩 | Open-ocean oceanic core has no en-route terrain; New England / New York coast-in is low coastal plain. Terrain matters only on a Greenland/Canadian diversion (§6, §8). |
| Alternate coverage (dep/enroute/dest) | 🟧 | Dep EDDM; dest KEWR + KBOS (both curated); en-route BIKF / Canadian Atlantic (Gander/Goose Bay) — **briefs to build 🟧**, BGSF available. Adequate for the NAT crossing (§8). |
| Curfew / slot at either end | 🟧 | EDDF slot-coordinated + night restrictions; KJFK slot-controlled (IATA Level 3) with heavy flow management (GDP/ground-stop exposure) — confirm on the Airport briefs (§10). |
| Fuel availability / tankering | 🟩 | Jet A-1 at both ends; no tankering driver. Winter cold-soak on the high-FL cruise is a lesser watch-item than on the polar pairings — monitor tank fuel temp but not normally binding (§7). |

---

## 3. Standard / preferred routing
- **Filed route string:** the day's **NAT OTS track or a random great-circle routing** between the European exit fix and the North-American coast-in — filed against that day's winds and the westbound OTS validity window (`1130–1900 UTC at 30°W`). No durable airway string is stored; fly the **SimBrief / current-AIRAC route** with the assigned **oceanic clearance (track, level, Mach)**. `[routes.json / current AIRAC]` 🟧
- **FIRs crossed:** Langen (EDGG) → Amsterdam (EHAA) / London (EGTT) upper → **Shanwick Oceanic (EGGX)** → **Gander Oceanic (CZQX)** → Moncton (CZQM) / Gander Domestic → Boston (KZBW) → **New York (KZNY)**. Departure FIR: [Langen (EDGG)](../../airspace/fir/europe/langen-edgg.md); European upper-airspace picture: [Europe airspace brief](../../airspace/europe.md); oceanic transit: [North Atlantic (NAT)](../../airspace/north-atlantic.md); coast-in and CONUS domestic + destination ARTCC: [North America](../../airspace/north-america.md) and [New York (KZNY)](../../airspace/fir/north-america/new-york-kzny.md). A more northerly track (via Reykjavik/Greenland) invokes the [Arctic](../../airspace/arctic.md) picture — conditional on the day's OTS.
- **One-way / level-capped segments:** the **westbound OTS is a unidirectional daytime peak**; NAT HLA **RVSM FL290–FL410** (RVSM approval required); typical OTS levels FL340–FL400. Oceanic level/Mach are assigned in the oceanic clearance — request step-climbs early.
- **Common ATC re-routes / choke points:** European SID/first-airway loading out of EDDF; **oceanic entry point (OEP) and level/Mach negotiation** at the Shanwick boundary; coast-in metering through Gander/Moncton into Boston; **dense New York TMA (N90) sequencing** and chronic **GDP / ground-stop** exposure into KJFK — the busiest, most flow-constrained terminal airspace in the world.
- **Corridor discipline:** 🟩 No conflict-zone corridor on this pairing — but hold the **cleared oceanic track exactly** (procedural, non-radar), fly **Mach Number Technique**, and apply **SLOP (right-only, 0–2 NM)** per [Datalink & Oceanic Procedures](../../../flight-ops/datalink-and-oceanic-procedures.md); see §6.

---

## 4. Sector profile
🟧 **This pairing runs three distinct passenger services plus a cargo working, not one flight number.** The **A380-800 (K51101, daily)** is the everyday four-class Premier Hub connector and the lead pax service on this profile; the **Concorde (K51001, 4/wk)** is the supersonic First-only flagship (single-cabin, ~100 seats, over-water-only — see the Concorde Dispatch pack for its distinct Mach 2 profile, not the subsonic narrative below); the **A321XLR (K51203, 5/wk)** is the premium long-range narrowbody service. A main-deck **777F cargo working (K59502, 7/wk)** operates the same city pair with its own payload/EDTO picture. The block/level narrative below describes the standard **subsonic widebody-pax operation** (A380/A321XLR norm) — the Concorde flies a materially different supersonic profile and is not covered by this step-climb/CI narrative.

Westbound transatlantic, **~8h00–8h30** block (wind-dependent) at **CI 70** (VAMSYS dispatch cost index) — the day's block and levels are OFP-driven, filed against that day's winds, not this durable string. Cruise **M.80–.82** with a step-climb profile (**FL310 → FL380**) as fuel burns off, riding the **daytime westbound OTS window**. Departing Frankfurt gives a same-day afternoon arrival into New York — a largely **day-lit** crossing. Winds dominate: a strong North Atlantic jet on the nose can add materially to block and burn and drives the day's optimum track and levels; conversely a favourable slot shortens the leg. The binding operational realities are **procedural oceanic discipline** across the middle third and **flow management into the KJFK TMA** at the destination end.

---

## 5. ETOPS / EDTO
- **Applicability:** 🟥 **EDTO — NAT oceanic crossing.** The great-circle/OTS track leaves continental radar over the North Atlantic; the EDTO threshold-ring geometry is covered by the coast-out/coast-in and mid-Atlantic alternates below. Method and definitions are in [ETOPS / EDTO Procedures](../../../flight-ops/etops-edto.md) — this brief *applies* them. The widebody-twin **operator-approved rule time is 180 min** per the [Fleet Capability Matrix](../../../fleet/capability-matrix.md); the mid-latitude NAT crossing is normally plannable **well within** that (often within 120-min rings given Iceland/Gander/Canadian-Atlantic coverage) — confirm the **planned rule time** each dispatch 🟧.
- **Entry / exit points:** the EDTO entry/exit and **critical point (equal-time point)** are computed on the day's OFP against the assigned track — not stored here (no fixed coordinates for a track that changes daily) 🟧.
- **En-route alternates:**
  - **BIKF — Keflavík** (Iceland) — primary eastern-NAT / coast-in–out gateway; full international. **Brief to build** 🟧 (see [North Atlantic §8](../../airspace/north-atlantic.md)).
  - **CYQX — Gander** / **CYYR — Goose Bay** (Canadian Atlantic) — western coast-in alternates; long runways. **Briefs to build** 🟧.
  - [**BGSF — Kangerlussuaq**](../../destinations/north-america/greenland/bgsf/index.md) — Greenland alternate available for a more northerly track.
- **Critical-fuel / depressurised-escape note:** 🟥 The leg carries fuel for the **critical-fuel scenario** — decompression **+** engine-out driftdown from the critical point to the limiting alternate, with ice/anti-ice/APU penalties and reserves. EDTO planning weather-minima add-ons apply; an alternate is usable only if forecast at/above minima across its window of possible use. Confirm the **operator EDTO approval / planned rule time** before assuming coverage (§8).

---

## 6. Terrain, airspace & oceanic
- **MSA / high-MORA belts on track:** 🟩 None in the cruise core (open ocean); the New England / New York coast-in is **low coastal plain** (KZNY terrain is a non-factor — Catskills/Poconos foothills only). Terrain becomes relevant only on a **Greenland/Canadian diversion** (Greenland ice-cap, cold-temperature altimetry) — cross-ref the alternate briefs and the [Arctic](../../airspace/arctic.md) picture.
- **FIRs & control type:** Continental radar in Europe and over Canada/US; **procedural (non-radar) oceanic** across the Shanwick/Gander segment. NAT HLA is RVSM FL290–FL410 with **CPDLC + ADS-C (FANS 1/A)** the mandated working environment — see [North Atlantic](../../airspace/north-atlantic.md). The destination ARTCC is fully radar/ADS-B — see [New York (KZNY)](../../airspace/fir/north-america/new-york-kzny.md).
- **Oceanic / remote procedures:** 🟥 Datalink-first discipline — CPDLC/ADS-C logon 10–25 min before OCA entry, oceanic clearance readback, **Mach Number Technique**, **SLOP (right-only, up to 2 NM)**, and HF/SELCAL + SATVOICE as fallback. Apply the globally-standardised **NAT in-flight contingency and weather-deviation** procedure (turn/offset, 300 ft level change) if a revised clearance cannot be obtained. Full method: [Datalink & Oceanic Procedures](../../../flight-ops/datalink-and-oceanic-procedures.md) and [North Atlantic](../../airspace/north-atlantic.md).

---

## 7. Fuel & payload (this pairing)
- **Critical fuel scenario:** 🟥 Governed by the EDTO critical point (§5) — decompression + driftdown to the limiting NAT alternate (BIKF / Canadian Atlantic / Greenland) with ice/APU penalties and reserves; this, not still-air burn, sizes the reserve on the oceanic legs. Trip/block figures are OFP-driven and not stored here 🟧.
- **Fuel-freeze awareness:** 🟧 **Jet A-1 freeze point −47 °C.** A mid-latitude NAT crossing is colder-exposed than a continental leg but **less severe than the polar pairings** — monitor **tank fuel temperature** on long high-FL winter cruise; mitigate by descent to warmer air and/or higher Mach if it trends toward the limit. Not normally binding on this pairing, but a winter watch-item. Full logic: [Polar & High-Latitude Operations](../../../flight-ops/polar.md).
- **Tankering economics:** 🟩 Jet A-1 available both ends; no periodic-shortage or price driver makes tankering the plan here. Method: [Fuel Policy](../../../flight-ops/fuel-policy.md).
- **Payload limits:** 🟩 At ~3,660 NM a widebody twin is **not range- or field-limited** ex EDDF — full-payload sector. Type performance: [Fleet Capability Matrix](../../../fleet/capability-matrix.md).

---

## 8. Alternates
| Role | ICAO | Distance | Notes |
|---|---|---|---|
| Departure alternate | **EDDM** | short (intra-Germany) | [EDDM — Munich](../../destinations/europe/germany/eddm/index.md) — same-country, high-capacity, all-weather. |
| En-route alternate | **BIKF** | eastern-NAT coast-in/out | Keflavík (Iceland) — primary NAT gateway, full international. **Brief to build** 🟧 — see [North Atlantic §8](../../airspace/north-atlantic.md). |
| En-route alternate | **CYQX / CYYR** | western coast-in (Canada) | Gander / Goose Bay — Canadian Atlantic gateways, long runways. **Briefs to build** 🟧. |
| En-route alternate | **BGSF** | Greenland (northerly track) | [BGSF — Kangerlussuaq](../../destinations/north-america/greenland/bgsf/index.md) — available if the day's OTS runs north. |
| Destination alternate | **KEWR** | co-terminal (~10 NM W) | [KEWR — Newark Liberty Intl](../../destinations/north-america/united-states/kewr/index.md) — full international; shares the congested N90 metro (correlated flow/weather with KJFK). |
| Destination alternate (secondary) | **KBOS** | ~160 NM NE of KJFK | [KBOS — Logan Intl](../../destinations/north-america/united-states/kbos/index.md) — across the Boston ARTCC (KZBW) boundary; de-correlated from the New York metro weather/flow. |

**Rationale & gaps:** The NAT enroute alternates (BIKF, Gander/Goose Bay, with Greenland available on a northerly track) give **adequate coast-out/coast-in coverage** for the crossing — better than the polar pairings — but **BIKF and the Canadian-Atlantic fields are not yet curated OM C briefs** 🟧 (build if they become planned alternates). At the destination end, **KEWR is correlated** with KJFK (same N90 metro, same weather/GDP event), so **KBOS** provides the de-correlated destination alternate when a New-York-wide low-visibility or flow event is in play. Confirm all forecasts at/above planning minima each dispatch.

---

## 9. Overflight & conflict-zone (durable)
- **Corridor & states overflown:** Germany → Benelux/UK upper airspace → North Atlantic oceanic → Canada → United States. All friendly, no overflight-permit regime on the transatlantic track.
- **Conflict / risk zones near track:** 🟩 **None on track** — the routing runs west over friendly Europe and open North Atlantic. No Russian, Middle-East or Sahel airspace is involved.
- **Overflight permits / diplomatic:** None required for the standard routing.

> **Currency:** re-check safeairspace.net / OPSGROUP and state NOTAMs at planning — this is durable context, not live clearance. Keep the filed route in-corridor.

---

## 10. Hazards & watch-items
- **Seasonal:** North Atlantic **jetstream and CAT** (block/burn and turbulence driver, worst in winter); **winter nor'easters / snow / de-ice** and **summer convection / Atlantic tropical systems (Jun–Nov)** at the New York end drive **GDPs, ground stops and reduced runway acceptance**; occasional high-latitude **space-weather HF/GNSS degradation** on a northerly track (monitor NOAA space-wx as a dispatch input).
- **Route-specific binding hazards:** 🟥 **Procedural oceanic discipline** and datalink dependency across the NAT (§6); **NAT OTS track/level/Mach conformance + SLOP** (§3, §6); **extreme New York TMA density and flow management (GDP/ground-stop)** into KJFK (§3).
- **End-field constraints:** EDDF — slot-coordinated, night-flight restrictions; KJFK — **IATA Level 3 slot-controlled**, chronic flow constraints, winter/summer weather closures of arrival gates. Confirm current specifics on the [EDDF](../../destinations/europe/germany/eddf/index.md) and [KJFK](../../destinations/north-america/united-states/kjfk/index.md) Airport briefs (KJFK brief currently a baseline stub 🟧).
- **Other:** en-route alternate briefs (BIKF, Gander/Goose Bay) not yet built — a load/dispatch item if selected (§8).

---

## 11. Open items (🟧 — confirm)
- **Flight number(s)** and **service days** — RESOLVED: **K51001** (also K51101/K51203; cargo K59502), 4/week, from VAMSYS `routes.json` (pulled 2026-07-25).
- **Cleared fleet** — RESOLVED from VAMSYS: wide pax set (A339/A359/A35K/A346/A388/B748/B77W/B789/A21N/CONC) plus freighters (B77F/MD11/B74F) on the cargo frequency.
- **Distance / CI** — RESOLVED: 3,339 NM (VAMSYS dispatch distance), CI 70. **Block / fuel** remain OFP-specific; confirm per dispatch.
- **Planned EDTO rule time** — widebody-twin ceiling is 180 min (Fleet Matrix); the NAT crossing is normally plannable within 120 — confirm the value used each dispatch (§5).
- **En-route alternate briefs** — BIKF, CYQX (Gander), CYYR (Goose Bay) are referenced but **not yet curated OM C briefs** (§8).
- **KJFK / (KEWR/KBOS) airport briefs** — KJFK is a baseline stub; build out destination-end detail (curfew/slot, runways, minima) when required (§10).

---

## 12. Per-flight briefing (not stored here)
The dispatch pre-flight briefing — SimBrief OFP, live METAR/TAF/NOTAM, that day's winds/levels/**OTS track message (TMI)**, tail assignment, load, and the day's EDTO entry/exit and critical-point picture — is generated at planning (T-2h) and lives in the dispatch pack, **not** in this durable file.

---

## Sources & References
*Public URLs only. Cite origin + retrieved dates. VAMSYS mirror and in-sim charts inform content but are not listed as public citations.*

- Great-circle distance reference — Great Circle Mapper (https://www.gcmap.com) (retrieved 2026-07-25)
- Overflight / conflict picture — safeairspace.net (https://safeairspace.net) (retrieved 2026-07-25)
- North Atlantic oceanic structure (OTS, HLA, PBCS, contingency, SLOP) — ICAO NAT Doc 007, *North Atlantic Operations and Airspace Manual* (https://www.icao.int/EURNAT/Pages/EUR-and-NAT-Document.aspx) (retrieved 2026-07-25)
- Oceanic / NAT contingency & weather-deviation — FAA AIP ENR 7.3 (https://www.faa.gov/air_traffic/publications/atpubs/aip_html/part2_enr_section_7.3.html) (retrieved 2026-07-25)
- ETOPS/EDTO concept summary — SKYbrary, *ETOPS* (https://skybrary.aero/articles/etops) (retrieved 2026-07-25)
- Frankfurt / German AIP ENR (route & airspace) — DFS AIP (https://aip.dfs.de) (retrieved 2026-07-25)

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-25 | Initial build — durable EDDF–KJFK route brief. Transatlantic NAT (OTS/random) crossing, ~3,660 NM GC; EDTO/NAT applicability with mid-latitude alternate coverage (BIKF / Gander / Goose Bay, Greenland available); procedural-oceanic/datalink discipline + SLOP; dense KJFK TMA / GDP flow at the destination end. Cross-linked to OM B (Fleet Capability Matrix), OM E (ETOPS/Polar/Fuel/Datalink), Airspace (Europe/NAT/Arctic/North America + KZNY FIR) and Airport briefs (EDDF/KJFK/EDDM/KEWR/KBOS/BGSF). Fleet, identity, CI/block/fuel and planned rule time flagged pending VAMSYS `routes.json`/OFP. |
| v0.2 | 2026-07-25 | Identity/fleet/distance/CI/frequency set from live VAMSYS routes.json (source of truth); pending-VAMSYS flags cleared. |
| v0.3 | 2026-07-25 | Reconciled to routes.md design register: assigned hero type + multi-services set; EDDF-VHHH restored to dual pax+cargo. |
