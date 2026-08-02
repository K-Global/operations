# EDDF – SBGR · Route Briefing
### Frankfurt – São Paulo (Guarulhos)

**Flight number(s):** K51111 (cargo frequency K59702) · **Direction:** Southbound (EDDF → SBGR) · **Service days:** 5/week
<!-- No radio callsigns in OM content (governance §1.3). Flight numbers are commercial identifiers and OK; do not add an ATC callsign. -->

**Version** v0.2 · **Updated** 2026-07-25 · **Status** Draft

> **Read-me:** Durable reference for the city pair — standing routing, ETOPS, alternates and hazards. Not a clearance and not the day's plan: file and fly the SimBrief/current-AIRAC route with that day's winds and levels. Live wx/NOTAM/conflict bulletins are pulled at planning (§12). Open 🟧 items in §11. Flag legend 🟥 restriction/hazard · 🟧 caution · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| City pair | EDDF → SBGR (Frankfurt/Main → São Paulo–Guarulhos) |
| Flight number(s) | **K51111** (cargo frequency **K59702**) |
| Frequency | **5/week** `[VAMSYS routes.json, pulled 2026-07-25]` |
| Distance | **5,286 NM** — VAMSYS dispatch distance `[VAMSYS routes.json, pulled 2026-07-25]` — Europe → Iberia/Canaries → EUR-SAM Corridor (South Atlantic) → Brazil |
| Typical cruise / step | M.83–.85; step **FL340 → FL360 → FL380** within the corridor even/odd allocation (FL380 confirmed as the VAMSYS-modelled cruise level) |
| Cost index (default) | **CI 70** `[VAMSYS routes.json, pulled 2026-07-25]` |
| Block time | ~**11h30–12h00** 🟧 |
| Fleet | **Assigned: A350-1000 (A35K)** · Allowed: A339 · A388 · A359 · A346 · B748 · B77W · B789 · A35K (VAMSYS widebody set); **cargo (K59702): 777F** → [`OM B — A35K`](../../../fleet/a35k/dispatch.md) · [Fleet Capability Matrix](../../../fleet/capability-matrix.md) |
| ETOPS / EDTO | **EDTO applicable — operator rule time 180 min** (widebody twin); **South Atlantic committed segment** 🟥 — see §5 |
| Sector type | Long-haul · **ETOPS/EDTO oceanic** · organised South Atlantic corridor |

---

## 2. Validation summary

| Domain | Flag | Note |
|---|---|---|
| Range vs fleet capability | 🟩 | 5,286 NM (VAMSYS dispatch distance) within range for the cleared widebody-pax fleet set (A339/A388/A359/A346/B748/B77W/B789/A35K); confirm the day's OFP TOW/payload. |
| ETOPS/EDTO adequacy | 🟥 | **ETOPS/EDTO-committed South Atlantic segment** — the mid-ocean stretch is the thinnest diversion window and the headline threat; operator **180-min** widebody-twin rule time applies. ETP pair **GVAC (Sal) ⇄ SBFZ (Fortaleza)** — confirm the day's ETP/alternate weather (§5, §8). |
| Overflight / conflict-zone risk | 🟩 | Benign — open-ocean corridor, no overflight-permit states on the crossing; coastal-state entry handled at the domestic FIR/arrival. **Corridor discipline (RVSM/RNP/SLOP) is the "restriction", not conflict** (§9). Re-check live regardless. |
| Terrain / MORA on track | 🟩 | Open ocean — no enroute terrain across the corridor core; driftdown is diversion-field-limited, not terrain-limited. Serra do Mar/Mantiqueira only at the Brazilian coast-in (Curitiba FIR §8). |
| Alternate coverage (dep/enroute/dest) | 🟧 | Dep EDDM; enroute GVAC (Sal) + Brazilian coast-in (SBRF/SBNT); dest SBGL/SBKP. Adequate, but the **mid-ocean stretch between the ETP fields is genuinely sparse** (§8). |
| Curfew / slot at either end | 🟧 | EDDF slot-coordinated + night restrictions; SBGR high-density hub — confirm on the Airport briefs (§10). |
| Fuel availability / tankering | 🟩 | Jet A-1 both ends; no tankering driver. Carry the **ITCZ-deviation** pad (§7, §10). |

---

## 3. Standard / preferred routing
- **Filed route string:** VAMSYS `routes.json` carries identity/fleet/CI/distance only, not a filed airway string — confirm the current-AIRAC route on the day's SimBrief OFP 🟧 — **representative planning geometry (per the EUR-SAM Corridor brief):** `EDDF → coast-out Iberia/Portugal → Canaries → EUR-SAM Corridor South Atlantic organised system (Canarias GCCC → Sal Oceanic GVSC → Dakar Oceanic GOOO → Atlántico SBAO) → UN741 (southbound) → coast-in NE Brazil → SANPA-type arrival into São Paulo → SBGR`. Southbound on **UN741** is consistent with its unidirectional-south designation — fly the current-AIRAC/SimBrief string, don't substitute waypoints.
- **FIRs crossed:** departure [Langen (EDGG)](../../airspace/fir/europe/langen-edgg.md) and the European upper-airspace picture in the [Europe airspace brief](../../airspace/europe.md); the ocean crossing is the organised **[EUR-SAM Corridor](../../airspace/eur-sam-corridor.md)** (Canarias GCCC → Sal Oceanic GVSC → Dakar Oceanic GOOO → Atlántico SBAO); the broader area picture is the [South America airspace brief](../../airspace/south-america.md); the destination FIR is **Curitiba (SBCW)** — the coast-in continental FIR that contains SBGR — see [Curitiba (SBCW)](../../airspace/fir/south-america/curitiba-sbcw.md).
- **One-way / level-capped segments:** 🟥 corridor **fixed-route directionality** — **UN741 unidirectional SOUTHbound**; the even/odd flight-level allocation scheme applies (bidirectional routes: SB even / NB odd). RVSM **FL290–FL410**; most corridor demand sits **FL340–FL380**. Confirm UN866 directionality and any PBCS/RLatSM activation at planning (EUR-SAM brief §4/§6).
- **Common ATC re-routes / choke points:** Iberian coast-out flow; **oceanic clearance and Mach assignment** at corridor entry; **ITCZ lateral deviations** near the African-side coast-out (§10); Atlântico → Brasília → Curitiba ACC → APP-SP coast-in handover; SBGR arrival flow.
- **Corridor discipline:** 🟥 hold the **oceanic track/level/Mach exactly** (procedural, non-radar core), fly the **assigned true Mach (Mach Number Technique)**, and apply **SLOP** where recommended — the corridor's separation regime depends on it. See §6 and [Datalink & Oceanic Procedures](../../../flight-ops/datalink-and-oceanic-procedures.md).

---

## 4. Sector profile
Southbound long-haul, ~11h30–12h00 block over a **5,286 NM VAMSYS dispatch distance** at **CI 70**, flown by the **assigned hero type A350-1000 (A35K)** within the wider widebody-pax allowed set (a **777F cargo working, K59702**, operates the same pairing; design register: the company Knowledge base). The routing runs Europe → Iberia/Canaries → the **organised South Atlantic (EUR-SAM Corridor)** → Brazil, largely a warm-latitude oceanic cruise (no polar cold-soak — fuel-freeze is *not* the driver it is on the Arctic routes; EUR-SAM brief §7). Cruise **M.83–.85** with a step-climb within the corridor's even/odd level allocation as weight burns off — request via CPDLC/HF. The dominant enroute variable is the **ITCZ convective band** on the African-side coast-out (in boreal summer it sits ~5–10°N over the Dakar/Sal region), which drives the day's most-likely contingency (weather deviation) and a fuel pad. Filed against that day's winds and oceanic clearance, not this durable string.

---

## 5. ETOPS / EDTO
- **Applicability:** 🟥 **EDTO — operator rule time 180 min** (A359/A339/B789 are widebody twins; type capability is beyond — A359 to 370 min, A339 to 285 min, B789 to 330 min — but the leg is planned to the operator **180 min**). The **South Atlantic is the committed ETOPS/EDTO segment**. Method and definitions in [ETOPS / EDTO Procedures](../../../flight-ops/etops-edto.md) — this brief *applies* them; capability/approval values in the [Fleet Capability Matrix](../../../fleet/capability-matrix.md).
- **Entry / exit points:** oceanic entry at the corridor boundary (Canarias/Sal); the **mid-ocean ETP** sits between the African-side and Brazilian-side fields — beyond it the critical alternate flips from Sal to the Brazilian coast. **OFP-provided ETP ≈ mid-ocean** (verify on the day's OFP 🟧; EUR-SAM brief §8).
- **En-route alternates (ETP pair + coast-in):**
  - [**GVAC — Amílcar Cabral (Sal)**](../../destinations/africa/cape-verde/gvac/index.md) — primary African-side ETOPS alternate / corridor gateway; long runway, H24.
  - **SBFZ — Fortaleza** — primary Brazilian-side ETOPS alternate (NE-Brazil coast-in); brief to build 🟧 (EUR-SAM brief §8).
  - [**SBRF — Recife**](../../destinations/south-america/brazil/sbrf/index.md) — coast-in alternate (alternative to SBFZ); full international.
- **Critical-fuel / depressurised-escape note:** 🟥 the leg must carry fuel for the **EDTO critical-fuel scenario** across the committed segment — decompression + engine-out driftdown to the ETP alternate, with reserves; over open ocean the constraint is **range to a runway**, not terrain (driftdown ceiling is well above the sea). The **mid-ocean stretch between GVAC and SBFZ is the genuine no-quick-divert window** — confirm both ETP fields meet ETOPS-alternate weather + RFF minima at the planned times (§8).

---

## 6. Terrain, airspace & oceanic
- **MSA / high-MORA belts on track:** 🟩 none across the corridor core — open ocean, MORA not a cruise factor. Terrain exists only at the ends: the **Canary Islands (Teide ~12,200 ft)** on coast-out and the **Serra do Mar / Serra da Mantiqueira** behind the São Paulo/Rio coast on coast-in (Curitiba FIR §8) — both handled in the airport briefings, not the oceanic cruise.
- **FIRs & control type:** 🟥 **procedural (non-radar) oceanic** across the corridor (Canarias/Sal/Dakar/Atlántico) — HF primary + SELCAL, SATVOICE/CPDLC where equipped, space-based ADS-B in Dakar Oceanic; **RVSM FL290–410 · RNAV 10 (RNP 10) minimum**, RNP 4 + RCP240/RSP180 for the reduced PBCS minima (EUR-SAM brief §4). Coast-in Brazil is **radar/ADS-B continental** (Curitiba FIR, [RVSM Operations](../../../flight-ops/rvsm-operations.md), [PBN and RNP Operations](../../../flight-ops/pbn-and-rnp-operations.md)).
- **Oceanic / remote procedures:** 🟥 datalink/HF discipline — **SELCAL check**, position reports over compulsory oceanic waypoints (or ADS-C contract where up), **Mach Number Technique**, **SLOP** offset, and the **South Atlantic oceanic contingency** (SAT Doc 002 — 5 NM offset / 500–1000 ft level offset, TIBA on 123.45) and **ITCZ weather-deviation** procedure. Full method: [Datalink & Oceanic Procedures](../../../flight-ops/datalink-and-oceanic-procedures.md) and the [EUR-SAM Corridor](../../airspace/eur-sam-corridor.md) brief §10.

---

## 7. Fuel & payload (this pairing)
- **Critical fuel scenario:** 🟥 governed by the EDTO ETP (§5) — decompression + driftdown to GVAC/SBFZ across the committed South Atlantic segment; this, not still-air burn, sizes the reserve.
- **ITCZ deviation reserve:** 🟥 carry a **fuel pad for lateral deviations through the ITCZ convective band** on the African-side coast-out — the most likely contingency actually exercised on this leg (§10, EUR-SAM brief §11).
- **Fuel-freeze:** 🟩 **not a significant driver** — the equatorial/tropical South Atlantic stays relatively warm; monitor tank temperature per normal SOP but expect ample margin (contrast the Arctic routes).
- **Tankering economics:** 🟩 Jet A-1 both ends; no periodic-shortage or price driver. Method: [Fuel Policy](../../../flight-ops/fuel-policy.md).
- **Payload limits:** 🟧 confirm the day's payload against MTOW/performance; trading payload for contingency/ITCZ fuel is a direct swap. Type performance via the [Fleet Capability Matrix](../../../fleet/capability-matrix.md).

---

## 8. Alternates
| Role | ICAO | Distance | Notes |
|---|---|---|---|
| Departure alternate | **EDDM** | short (intra-Germany) | [EDDM — Munich](../../destinations/europe/germany/eddm/index.md) — same-country, high-capacity, all-weather. |
| En-route alternate | **GVAC** | African-side / mid-ocean | [GVAC — Amílcar Cabral (Sal)](../../destinations/africa/cape-verde/gvac/index.md) — **ETP-pair field**, primary African-side ETOPS alternate; long runway, H24. |
| En-route alternate | **SBRF** | Brazilian coast-in | [SBRF — Recife](../../destinations/south-america/brazil/sbrf/index.md) — coast-in alternate; full international. |
| En-route alternate | **SBNT** | Brazilian coast-in (NE) | Natal — NE-Brazil coast-in alternate; **no OM C brief yet** 🟧. |
| Destination alternate | **SBGL** | ~185 NM ENE (Rio) | [SBGL — Galeão](../../destinations/south-america/brazil/sbgl/index.md) — weather-independent of the São Paulo area; full international. |
| Destination alternate (secondary) | **SBKP** | ~50 NM NW (Campinas) | [SBKP — Viracopos](../../destinations/south-america/brazil/sbkp/index.md) — natural São Paulo-area alternate; H24, cargo. |

**Rationale & gaps:** The committed ETOPS segment is bracketed by the **GVAC (Sal) ⇄ SBFZ (Fortaleza)** ETP pair; **SBFZ has no OM C brief yet** (build 🟧), with **SBRF (Recife)** the built coast-in alternative and **SBNT (Natal)** a further NE-Brazil coast-in option (brief to build 🟧). The **mid-ocean stretch between the ETP fields is the genuinely sparse window** — Fernando de Noronha (SBFN) is the only true mid-ocean island and is limited (don't assume it as a usable ETOPS alternate without checking runway/RFF/hours). Destination pairing **SBGL (Rio, weather-independent of São Paulo) + SBKP (Campinas, close-in)** covers a São Paulo-area convection/fog event.

---

## 9. Overflight & conflict-zone (durable)
- **Corridor & states overflown:** Germany → Iberia/Portugal → Canaries (Spain) → the South Atlantic oceanic FIRs (Cabo Verde/Senegal control the corridor) → Brazil. 🟩 **No overflight-permit states on the oceanic crossing**; coastal-state entry is handled at the domestic FIR/arrival (Brazil arrival, Iberia/Canaries departure).
- **Conflict / risk zones near track:** 🟩 **none** — the open-ocean corridor is benign for conflict-zone purposes. **The binding "restriction" on this pair is corridor discipline, not conflict:** RVSM/RNP navigation accuracy, Mach Number Technique, SLOP, and exact adherence to the assigned oceanic clearance — the procedural non-radar regime depends on it (§3/§6).
- **Overflight permits / diplomatic:** none required for the standard oceanic routing.

> **Currency:** re-check the ICAO Conflict Zone Information Repository / state NOTAMs and operator routing policy at planning — this list is durable context, not live clearance. Keep the filed route in-corridor.

---

## 10. Hazards & watch-items
- **Seasonal:** 🟥 **ITCZ / equatorial convection** on the African-side coast-out (boreal-summer band ~5–10°N over the Dakar/Sal region) — embedded and towering CB, heavy rain and turbulence at cruise levels; the dominant enroute hazard and the reason weather-deviation is the most-likely contingency (§6, EUR-SAM brief §11). 🟧 **HF/GNSS space-weather degradation** on the equatorial crossing (carry HF + SATVOICE/CPDLC redundancy; confirm the space-wx product's issue timestamp). At the Brazilian end: **austral-summer convection (Oct–Mar)** over the São Paulo/SE-Brazil terminal area and **winter fog/low stratus (Jun–Aug) at SBGR** (Curitiba FIR §11, [Adverse Weather and Windshear](../../../flight-ops/adverse-weather-and-windshear.md)).
- **Route-specific binding hazards:** 🟥 **South Atlantic ETOPS/EDTO** committed segment / mid-ocean diversion gap (§5/§8); **EUR-SAM corridor discipline** (RVSM/RNP, MNT, SLOP, fixed-route directionality) (§3/§6/§9); **ITCZ convection** (§7/§10).
- **End-field constraints:** EDDF — slot-coordinated, night-flight restrictions; SBGR — very high terminal traffic density, plateau **winter fog/low-visibility** driver. Confirm current specifics on the [EDDF](../../destinations/europe/germany/eddf/index.md) and [SBGR](../../destinations/south-america/brazil/sbgr/index.md) Airport briefs.
- **Other:** Brazil operates a **fixed ATS-route network** (no Free Route Airspace) on coast-in — plan the published structure (Curitiba FIR §7).

---

## 11. Open items (🟧 — confirm)
- **Flight number(s)**, **service days**, **distance**, **cost index**, **fleet** — RESOLVED from VAMSYS `routes.json` (pulled 2026-07-25): **K51111** (cargo K59702), 5/week, 5,286 NM, CI 70, widebody-pax set A339/A388/A359/A346/B748/B77W/B789/A35K.
- **Assigned tail** and **filed route string** — corridor geometry represented as planning context; take the exact string and oceanic clearance from the day's validated SimBrief/current-AIRAC OFP.
- **PBCS / RLatSM activation and UN866 directionality** — confirm which reduced minima are operationally in force and current corridor directionality at planning (EUR-SAM brief §12).
- **Day's ETP + ETOPS-alternate weather (GVAC/SBFZ)** — from the OFP; confirm both fields at/above ETOPS-alternate minima.
- **SBFZ (Fortaleza) and SBNT (Natal) airport briefs** — not built yet; build if they become primary ETOPS/coast-in alternates.
- **HF/space-weather check** — confirm the product's issue timestamp before acting on any GO/NO-GO read (documented stale-data caveat).

---

## 12. Per-flight briefing (not stored here)
The dispatch pre-flight briefing — SimBrief OFP, live METAR/TAF/NOTAM, that day's winds/levels/oceanic clearance and Mach, the ITCZ position, the day's ETP and ETOPS-alternate weather, tail assignment and load — is generated at planning (T-2h) and lives in the dispatch pack, **not** in this durable file.

---

## Sources & References
*Public URLs only. Cite origin + retrieved dates. VAMSYS mirror and in-sim charts inform content but are not listed as public citations.*

- EUR/SAM Corridor structure & separation — ICAO SAT Doc 003, *Application of Separation Minima in EUR/SAM Corridor* (https://www.icao.int/WACAF) (retrieved 2026-07-25)
- South Atlantic oceanic contingency — ICAO SAT Doc 002, *ATM Operational Contingency Plan for South Atlantic Oceanic FIRs* (https://www.icao.int/WACAF) (retrieved 2026-07-25)
- ETOPS/EDTO method — FAA AC 120-42B, *Extended Operations (ETOPS and Polar Operations)* (https://www.faa.gov/regulations_policies/advisory_circulars) (retrieved 2026-07-25)
- Overflight / conflict picture (benign South Atlantic) — safeairspace.net (https://safeairspace.net) (retrieved 2026-07-25)
- Brazil FIR / RVSM / route structure — AIP BRASIL ENR (DECEA/AISWEB) (https://aisweb.decea.mil.br) (retrieved 2026-07-25)
- Frankfurt / German AIP ENR (route & airspace) — DFS AIP (https://aip.dfs.de) (retrieved 2026-07-25)

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-25 | Initial build — durable EDDF–SBGR (Frankfurt–São Paulo/Guarulhos) route brief. ~5,280 NM GC; Europe → Iberia/Canaries → **EUR-SAM Corridor (organised South Atlantic: Canarias → Sal Oceanic → Dakar Oceanic → Atlántico)** → Brazil → **Curitiba FIR (SBCW)**. **ETOPS/EDTO** committed South Atlantic segment (operator rule time 180 min, GVAC ⇄ SBFZ ETP pair, mid-ocean gap the headline threat); OM E ETOPS + Datalink/Oceanic applied (SLOP, MNT, oceanic contingency); corridor discipline (RVSM/RNP, fixed-route directionality UN741 SB); ITCZ convection band the dominant enroute hazard; South Atlantic warm (no fuel-freeze driver). Alternates enroute GVAC/SBRF/SBNT, dest SBGL/SBKP. Cross-linked to OM B (Fleet Capability Matrix), OM E (ETOPS/RVSM/PBN/Datalink/Fuel/Adverse-Weather), Airspace (Europe/EUR-SAM Corridor/South America + Curitiba SBCW FIR + Langen EDGG) and Airport briefs (EDDF/EDDM/GVAC/SBRF/SBGL/SBKP/SBGR; SBFZ/SBNT to build). Fleet, flight numbers, filed string 🟧 pending VAMSYS. |
| v0.2 | 2026-07-25 | Identity/fleet/distance/CI/frequency set from live VAMSYS routes.json (source of truth); pending-VAMSYS flags cleared. |
| v0.3 | 2026-07-25 | Reconciled to routes.md design register: assigned hero type + multi-services set; EDDF-VHHH restored to dual pax+cargo. |
