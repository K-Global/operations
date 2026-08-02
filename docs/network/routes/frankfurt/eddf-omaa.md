# EDDF – OMAA · Route Briefing
### Frankfurt – Abu Dhabi

**Flight number(s):** K51115 · **Direction:** South-eastbound (EDDF → OMAA) · **Service days:** 7/week (daily)
<!-- No radio callsigns in OM content (governance §1.3). Flight numbers are commercial identifiers and OK; do not add an ATC callsign. -->

**Version** v0.2 · **Updated** 2026-07-25 · **Status** Draft

> **Read-me:** Durable reference for the city pair — standing routing, ETOPS, alternates and hazards. Not a clearance and not the day's plan: file and fly the SimBrief/current-AIRAC route with that day's winds and levels. Live wx/NOTAM/conflict bulletins are pulled at planning (§12). **The Middle-East conflict-zone picture (§9) is live and perishable — re-check every dispatch.** Open 🟧 items in §11. Flag legend 🟥 restriction/hazard · 🟧 caution · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| City pair | EDDF → OMAA (Frankfurt/Main → Abu Dhabi / Zayed Intl) |
| Flight number(s) | **K51115** |
| Frequency | **7/week — daily service** `[VAMSYS routes.json, pulled 2026-07-25]` |
| Distance | **2,623 NM** — VAMSYS dispatch distance `[VAMSYS routes.json, pulled 2026-07-25]` (previously estimated ~2,960 NM public great-circle) |
| Typical cruise / step | M.80–.82; typical **FL350 → FL370** as weight burns off (FL370 confirmed as the VAMSYS-modelled cruise level; estimate step 🟧 — confirm on SimBrief OFP) |
| Cost index (default) | **CI 70** `[VAMSYS routes.json, pulled 2026-07-25]` |
| Block time | **~6h30** eastbound (estimate 🟧 — confirm at planning) |
| Fleet | **Assigned: 747-8i (B748)** `[routes.md design register]` · Allowed: widebody pax — 5 fleet types `[VAMSYS routes.json: fleet_count = 5; specific type codes not itemised in this pull]` → [`OM B — B748`](../../../fleet/b748/dispatch.md) · [Fleet Capability Matrix](../../../fleet/capability-matrix.md) · 🟧 confirm exact 5-type Allowed set at dispatch |
| ETOPS / EDTO | **Not the binding constraint** — largely continental with dense diversions; widebody rule time **180 min** available, A21N **120 min** 🟧 — see §5 |
| Sector type | Medium-haul · **conflict-zone-routed** (Middle East corridor discipline) 🟥 |

---

## 2. Validation summary

| Domain | Flag | Note |
|---|---|---|
| Range vs fleet capability | 🟩 | 2,623 NM (VAMSYS dispatch distance) is comfortably within range for the cleared widebody-pax fleet set (5 types per VAMSYS); not range-limited. Payload/hot-and-high at the Gulf end is the live economics item (§7). |
| ETOPS/EDTO adequacy | 🟩/🟧 | Routing is predominantly **over land** with dense diversion fields; ETOPS rings are not the driver. The real diversion constraint is **conflict-zone exclusion** — the nearest field may be in avoid-airspace (§8, §9). |
| Overflight / conflict-zone risk | 🟥 | **The defining feature.** Track threads the Middle-East corridor while avoiding **Syria / Iraq / Iran / Yemen / Red Sea**; **pervasive GNSS jamming & spoofing**. Live & perishable — re-check every dispatch (§9). |
| Terrain / MORA on track | 🟧 | Mostly benign (Balkans/Anatolia moderate; desert/sea across the Gulf). The **Asir/Sarawat** and **Hajar** belts matter only on a southern-bypass diversion (§6). |
| Alternate coverage (dep/enroute/dest) | 🟧 | Dep EDDM; dest OMDB/OMDW; enroute corridor fields (Turkey/Egypt/Saudi/Gulf) are dense but **conflict-filtered** — confirm availability against the live closure map (§8). |
| Curfew / slot at either end | 🟧 | EDDF slot-coordinated + night-flight restrictions; OMAA H24 but dense Gulf TMA flow — confirm on the Airport briefs (§10). |
| Fuel availability / tankering | 🟩 | Jet A-1 both ends; warm climate (no fuel-freeze driver). No standing tankering case — confirm price differential at planning (§7). |

---

## 3. Standard / preferred routing
- **Filed route string:** indicative southern/eastern-Mediterranean corridor — `EDDF (SID) … (SE Europe / Balkans) … (Turkey, LTAA/LTBB) … (E-Mediterranean / Nicosia LCCC) … (Egypt HECC / Saudi Jeddah OEJD) … (Gulf trunk) … (Emirates OMAE arrival) OMAA` `[SimBrief / current AIRAC — VAMSYS routes.json does not carry a filed airway string]` 🟧. **The exact corridor is conflict-map-dependent** — a straighter Turkey→Iraq→Gulf track is *not* flown while Iraq/Iran/Syria are under CZIB; the flyable set is smaller than the published network and changes by NOTAM (§9).
- **FIRs crossed (indicative):** Langen (**EDGG**) → European upper FIRs → Turkey (**LTAA/LTBB**) → Nicosia (**LCCC**) / Cairo (**HECC**) → Jeddah (**OEJD**, Saudi Arabia) → **Emirates (OMAE)**, Abu Dhabi. Departure/European picture: [Europe airspace brief](../../airspace/europe.md); the transit region and its conflict core: [Middle East](../../airspace/middle-east.md); destination FIR: [Emirates (OMAE)](../../airspace/fir/middle-east/emirates-omae.md).
- **One-way / level-capped segments:** RVSM **FL290–FL410** throughout (Europe + MID region); MID **RNAV 5** enroute, **RNP 1 / RNP APCH** into the Gulf TMA. Managed **temporary RNAV corridors** and flow control (CTOT) apply on the surviving southern bypass — request/accept the assigned routing.
- **Common ATC re-routes / choke points:** European SID/first-airway loading out of EDDF; **frequency congestion and blocked transmissions reported in the Jeddah (OEJD) / Cairo (HECC) FIRs** on the overloaded bypass (§5 of the Middle East brief); dense multi-sector "U.A.E. Radar" sequencing into OMAA.
- **Corridor discipline:** 🟥 **Hold the cleared/managed corridor exactly** — with Syria/Iraq/Iran/Yemen airspace adjacent, an un-coordinated deviation carries elevated **misidentification** risk. See §9 and the [Middle East](../../airspace/middle-east.md) brief §9/§10.

---

## 4. Sector profile
South-eastbound medium-haul, ~6h30 block (estimate) over a **2,623 NM VAMSYS dispatch distance** at **CI 70**, flown by the **assigned hero type 747-8i (B748)** within the wider widebody-pax allowed set (design register: the company Knowledge base). Cruise **M.80–.82** with a modest step-climb (**~FL350 → FL370**) as weight burns off — the leg is light enough that the fleet is not range- or MTOW-stretched, so the planning workload is dominated not by fuel but by **which corridor is open** on the day and by the **Gulf-end arrival** into a hot, dense terminal environment. Departing Frankfurt, the routing runs SE across the Balkans and Turkey, then swings clear of the conflict core via the Eastern-Mediterranean / Egypt–Saudi bypass before turning down the Gulf trunk to Abu Dhabi. Day/night geometry and winds shift the block modestly; the corridor and levels are filed against that day's picture, not this durable string.

---

## 5. ETOPS / EDTO
- **Applicability:** 🟧 **EDTO is not the binding constraint on this pairing.** The track is predominantly over land with a dense diversion network across Europe, Turkey and the Gulf; the widebody twins (A339/B789) carry an operator rule time of **180 min** and the A21N narrowbody twin **120 min** — comfortably covered here. Method and definitions: [ETOPS / EDTO Procedures](../../../flight-ops/etops-edto.md) — this brief *applies* them; per-type values live in the [Fleet Capability Matrix](../../../fleet/capability-matrix.md).
- **Entry / exit points:** none of note — no long single over-water leg on the standard corridor (short Eastern-Mediterranean / Gulf water crossings only). Confirm on the day's OFP if a more water-biased routing is issued.
- **En-route alternates:** dense corridor fields — Turkey (e.g. **LTFM/Istanbul**), Egypt (**HECA/Cairo**), Saudi Arabia (**OEJN/OERK/OEDF**), and the Gulf hubs (**OMDB/OMDW/OTHH/OBBI**) → see the [Middle East](../../airspace/middle-east.md) brief §8. 🟥 **Filter every nominal divert against the live CZIB/closure map** — Iraq/Iran/Yemen/SW-Saudi fields are unavailable.
- **Critical-fuel / depressurised-escape note:** 🟥 the escape constraint here is **political geography, not terrain or fuel range** — a decompression/engine-out descent must reach a **usable, non-conflict** field. Plan the escape route against the current closure map (§9), not just distance.

---

## 6. Terrain, airspace & oceanic
- **MSA / high-MORA belts on track:** 🟧 moderate over the **Balkans/Anatolia**; low desert and sea across the Gulf approach. The high belts — **Asir/Sarawat (SW Saudi ~3,000 m)** and the **Hajar Mountains (Oman/UAE east ~1,900 m)** — are relevant only on a southern-bypass or eastern diversion, not on the cruise core (see [Middle East](../../airspace/middle-east.md) §7 and [Emirates (OMAE)](../../airspace/fir/middle-east/emirates-omae.md) §8).
- **FIRs & control type:** continental **radar + ADS-B** throughout (Europe, Turkey, the developed Gulf/Arabian FIRs); **no procedural oceanic** segment on the standard corridor. CPDLC available in the **Jeddah (OEJD)** FIR and **Emirates upper airspace** for equipped aircraft. Mode S + ADS-B Out required — see [PBN and RNP Operations](../../../flight-ops/pbn-and-rnp-operations.md) and [RVSM Operations](../../../flight-ops/rvsm-operations.md).
- **Oceanic / remote procedures:** not applicable (continental routing). The only datalink dependency is optional CPDLC in Jeddah/Emirates upper airspace.

---

## 7. Fuel & payload (this pairing)
- **Critical fuel scenario:** 🟧 not ETOPS-driven; standard contingency + alternate + final reserve per [Fuel Policy](../../../flight-ops/fuel-policy.md) and [OM A A08 — Fuel and Payload Policy](../../../general/a08-fuel-and-payload-policy.md). Carry corridor-contingency fuel for a possible re-route around a short-notice FIR closure (§9).
- **Tankering economics:** 🟩 Jet A-1 available both ends; no standing shortage driver. Confirm the fuel-price differential at planning before electing to tanker.
- **Payload limits:** 🟧 **hot-and-high / high-temperature performance at the Gulf end** is the live item — summer OMAA temperatures penalise landing/TOW margins and the A339 (moderate hot-and-high sensitivity) and A21N (heavier LR/XLR loads) feel it most; the leg is otherwise not MTOW-limited at EDDF. Type performance: [Fleet Capability Matrix](../../../fleet/capability-matrix.md) (Table D) and [High-Elevation Aerodrome Operations](../../../flight-ops/high-elevation-aerodrome-operations.md) (hot-and-high context).

---

## 8. Alternates
| Role | ICAO | Distance | Notes |
|---|---|---|---|
| Departure alternate | **EDDM** | short (intra-Germany) | [EDDM — Munich](../../destinations/europe/germany/eddm/index.md) — same-country, high-capacity, all-weather. |
| En-route alternate(s) | Turkey / Egypt / Saudi corridor fields | corridor | e.g. LTFM, HECA, OEJN/OERK/OEDF — dense but **conflict-filtered**; confirm live (see [Middle East](../../airspace/middle-east.md) §8). |
| Destination alternate | **OMDB** | ~55 NM (in-FIR) | [OMDB — Dubai Intl](../../destinations/middle-east/united-arab-emirates/omdb/index.md) — major H24 Gulf field, same FIR (OMAE). |
| Destination alternate (secondary) | **OMDW** | ~50 NM (in-FIR) | [OMDW — Al Maktoum Intl](../../destinations/middle-east/united-arab-emirates/omdw/index.md) — long-runway / cargo alternate, H24, same FIR. |

**Rationale & gaps:** The Emirates FIR is extremely dense with diversion fields (OMDB/OMDW plus OMSJ/OMFJ), so **destination alternate coverage is strong** and ETP is not a driver in the terminal area. The 🟥 gap is enroute and political: the surviving corridor is bracketed by closed/high-risk airspace (Iraq/Iran/Yemen/SW-Saudi), so a mid-route diversion must be pre-briefed against the **live closure map** — treat a single-field closure or FIR withdrawal as a routing constraint, not a footnote. **OMFJ (Fujairah)** on the Gulf-of-Oman side is useful if Strait-of-Hormuz / Gulf routing is constrained.

---

## 9. Overflight & conflict-zone (durable)
- **Corridor & states overflown (indicative):** Germany → SE Europe / Balkans → Turkey → Eastern Mediterranean / Egypt → Saudi Arabia → UAE (Emirates FIR). The exact set is corridor-dependent and NOTAM-driven.
- **Conflict / risk zones near track:** 🟥 **This is the mission-critical planning item.** The routing must **avoid Syria (OSTT), Iraq (ORBB), Iran (OIIX), Yemen (OYSC) and the Red Sea / Bab-el-Mandeb arc** — all under active EASA CZIB "avoid" or high-risk assessments. The **Gulf FIRs (Bahrain, Kuwait, Qatar, UAE/OMAE) sit under CZIB advisory** yet remain worked under **managed temporary corridors**; **Kuwait overflight is prohibited outright**. **GNSS jamming & spoofing is pervasive** across the Gulf and Eastern Mediterranean — expect FMS drift, spurious GPWS, and brief the DME/DME/IRU cross-check and conventional-navaid fallback (see [Middle East](../../airspace/middle-east.md) §9 and [Emirates (OMAE)](../../airspace/fir/middle-east/emirates-omae.md) §10).
- **Overflight permits / diplomatic:** state-specific routing directives and permits may apply on the surviving corridor (e.g. Egypt/Saudi routing, Turkey). Confirm at planning. Airspace-compliance policy: [OM A A13 — Rules of the Air and Airspace Compliance](../../../general/a13-rules-of-the-air-and-airspace-compliance.md).

> **Currency:** re-check the **ICAO Conflict Zone Information Repository, EASA CZIBs (per-state), state NOTAMs and OPSGROUP/safeairspace** at planning — this is durable context, not live clearance. Keep the filed route in-corridor. This is the single most important dispatch item for the pairing.

---

## 10. Hazards & watch-items
- **Route-specific binding hazards:** 🟥 **Middle-East conflict-zone corridor discipline** — avoid Syria/Iraq/Iran/Yemen/Red Sea, hold the managed corridor, re-check live (§9); 🟥 **pervasive GNSS jamming/spoofing** across the Gulf/Eastern Med (§9).
- **Seasonal / environmental:** **shamal winds and blowing dust / haboob** (summer and winter shamal) can collapse RVR at the Gulf end and trigger LVO; **extreme heat / density altitude (Jun–Sep)** — a hot-and-high performance driver at OMAA (§7). Convection limited over the arid interior. See [Adverse Weather and Windshear](../../../flight-ops/adverse-weather-and-windshear.md) and [Low Visibility Operations](../../../flight-ops/low-visibility-operations.md).
- **End-field constraints:** EDDF — slot-coordinated, night-flight restrictions; OMAA — H24 but **dense Gulf TMA** flow and hot/dusty operating environment. Confirm current specifics on the [EDDF](../../destinations/europe/germany/eddf/index.md) and [OMAA — Zayed Intl](../../destinations/middle-east/united-arab-emirates/omaa/index.md) Airport briefs.
- **Other:** frequency congestion / blocked transmissions on the Jeddah–Cairo bypass (keep TCAS active; consider a PAN if an un-cleared deviation becomes necessary).

---

## 11. Open items (🟧 — confirm)
- **Flight number(s)**, **service days**, **distance**, **cost index** — RESOLVED from VAMSYS `routes.json` (pulled 2026-07-25): **K51115**, 7/week (daily), 2,623 NM, CI 70.
- **Exact fleet type set** — VAMSYS gives `fleet_count = 5` (widebody pax) without itemising the type codes in this pull; confirm the specific 5 types and the per-type EDTO rule time via the [Fleet Capability Matrix](../../../fleet/capability-matrix.md).
- **Cruise levels / step, block time and fuel tonnages** — estimates only; confirm against the SimBrief OFP once a reference plan exists.
- **The entire §9 conflict-zone / overflight picture is live** — advisories, managed corridors, FIR-closure state and GNSS-interference advisories must be re-verified every dispatch.
- **Corridor / filed-route string** — indicative; the flyable set is NOTAM-driven and smaller than the published network. Pull the day's SimBrief/AIRAC route.
- **OMAA / OMDB / OMDW airport briefs** are baseline stubs (facts pending VAMSYS) — verify runway/curfew/alternate detail as they are built out.

---

## 12. Per-flight briefing (not stored here)
The dispatch pre-flight briefing — SimBrief OFP, live METAR/TAF/NOTAM, that day's winds/levels, tail assignment, load, the **current conflict-zone / managed-corridor and GNSS-interference picture**, and the day's hot-and-high performance numbers — is generated at planning (T-2h) and lives in the dispatch pack, **not** in this durable file.

---

## Sources & References
*Public URLs only. Cite origin + retrieved dates. VAMSYS mirror and in-sim charts inform content but are not listed as public citations.*

- Great-circle distance (EDDF–OMAA ~2,960 NM) — Great Circle Mapper (http://www.gcmap.com) (retrieved 2026-07-25)
- Overflight / conflict-zone picture — Safe Airspace / OPSGROUP (https://safeairspace.net) (retrieved 2026-07-25) *(advisory/live source — re-check at planning)*
- EASA — Conflict Zone Information Bulletins, Middle East / per-state (https://www.easa.europa.eu/en/domains/air-operations/czibs) (retrieved 2026-07-25) *(advisory/live source)*
- ICAO MID regional supplementary procedures (Doc 7030) & MID PBN/RVSM material — MID RVSM FL290–410, RNAV 5, RNP 1 (https://www.icao.int) (retrieved 2026-07-25)
- Frankfurt / German AIP ENR (route & airspace) — DFS AIP (https://aip.dfs.de) (retrieved 2026-07-25)

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-25 | Initial build from the route briefing template — durable EDDF–OMAA medium-haul brief. ~2,960 NM GC; Europe → SE Europe/Turkey → Middle-East conflict-zone corridor (avoid Syria/Iraq/Iran/Yemen/Red Sea; via Turkey/Egypt/Saudi bypass; pervasive GNSS jamming/spoofing 🟥) → Gulf → Emirates FIR (OMAE), Abu Dhabi (OMAA). EDTO not the binding constraint (continental, dense diversions); conflict-zone corridor discipline and hot-and-high/dust the defining hazards. Cross-linked to the Middle East + Europe airspace briefs, the Emirates (OMAE) FIR brief, OM B Fleet Capability Matrix, OM E (ETOPS-EDTO / PBN / RVSM / Fuel / High-Elevation / Adverse Weather / LVO), OM A (A08/A13) and the EDDF/OMAA/OMDB/OMDW airport briefs. Flight number(s), fleet and OFP perf figures pending VAMSYS 🟧. |
| v0.2 | 2026-07-25 | Identity/fleet/distance/CI/frequency set from live VAMSYS routes.json (source of truth); pending-VAMSYS flags cleared. |
| v0.3 | 2026-07-25 | Reconciled to routes.md design register: assigned hero type + multi-services set; EDDF-VHHH restored to dual pax+cargo. |
