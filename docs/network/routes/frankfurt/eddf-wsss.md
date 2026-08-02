# EDDF – WSSS · Route Briefing
### Frankfurt – Singapore

**Flight number(s):** K51107 (cargo frequency K59302) · **Direction:** Eastbound (EDDF → WSSS) · **Service days:** 5/week
<!-- No radio callsigns in OM content (governance §1.3). Flight numbers are commercial identifiers and OK; do not add an ATC callsign. -->

**Version** v0.2 · **Updated** 2026-07-25 · **Status** Draft

> **Read-me:** Durable reference for the city pair — standing routing, ETOPS, alternates and hazards. Not a clearance and not the day's plan: file and fly the SimBrief/current-AIRAC route with that day's winds and levels. Live wx/NOTAM/conflict bulletins are pulled at planning (§12). Open 🟧 items in §11. Flag legend 🟥 restriction/hazard · 🟧 caution · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| City pair | EDDF → WSSS (Frankfurt/Main → Singapore–Changi) |
| Flight number(s) | **K51107** (cargo frequency **K59302**) |
| Frequency | **5/week** `[VAMSYS routes.json, pulled 2026-07-25]` |
| Distance | **5,547 NM** — VAMSYS dispatch distance `[VAMSYS routes.json, pulled 2026-07-25]`. Pure great-circle is ~5,350 NM; the VAMSYS figure sits between the GC and the ~5,880 NM practically-routed (conflict-zone-detour) distance previously estimated — treat 5,547 NM as the VAMSYS planning figure, confirm the day's actual routed distance on the OFP (§3, §9). |
| Typical cruise / step | M.82–.85; step **FL310 → FL350 → FL370 → FL390/FL410** as weight/OAT allow (metric-level conversions not applicable on this routing — no China transit) 🟧 |
| Cost index (default) | **CI 70** `[VAMSYS routes.json, pulled 2026-07-25]` |
| Block time | **~13h00–13h45** (routed distance + hot high-temp cruise) 🟧 |
| Fleet | **Assigned: A380-800** · Allowed: A339 · A388 · A359 · A346 · B748 · B77W · B789 · A35K (VAMSYS widebody set); **cargo (K59302): 777F** → [`OM B — A388`](../../../fleet/a388/dispatch.md) · [`A359`](../../../fleet/a359/dispatch.md) · [`A35K`](../../../fleet/a35k/dispatch.md) · [Fleet Capability Matrix](../../../fleet/capability-matrix.md) |
| ETOPS / EDTO | **Applicable — EDTO** 🟥; widebody-twin operator rule time **180 min** `[K Global OpsSpec 2026-07-25]` — see §5 |
| Sector type | Ultra-long-haul · **EDTO** · **conflict-zone-corridor-constrained** (Middle East) · hot-and-high-temperature cruise |

---

## 2. Validation summary

| Domain | Flag | Note |
|---|---|---|
| Range vs fleet capability | 🟩 | 5,547 NM (VAMSYS dispatch distance) is within range for the cleared widebody-pax fleet set (A339/A388/A359/A346/B748/B77W/B789/A35K); confirm tail/type and the day's routed distance/payload at dispatch (§7). |
| ETOPS/EDTO adequacy | 🟧 | Over-water/remote legs (Arabian Sea flank, **Bay of Bengal**, Andaman/SE-Asia approaches) make this an **EDTO** sector; widebody-twin rule time **180 min** covers it against Gulf/India/SE-Asia alternates, but the diversion set on the Middle-East corridor is **thinned by conflict-zone exclusions** — confirm usable fields against the live CZIB map each dispatch (§5, §8). |
| Overflight / conflict-zone risk | 🟥 | **The headline item.** The Middle-East transit must route *around* Iran/Iraq/Syria/Yemen and the Red Sea/Bab-el-Mandeb threat arc; **Kuwait overflight prohibited**; **pervasive GNSS jamming/spoofing**. Live & perishable — re-check every dispatch (§9). |
| Terrain / MORA on track | 🟧 | Benign over the Gulf/Arabian interior and the maritime SE-Asian legs; the belts that matter are the **Asir/Sarawat** (SW Saudi) on the southern bypass and, if a northerly re-route is used, high ground toward the Zagros — a diversion consideration, not a cruise one (§6). |
| Alternate coverage (dep/enroute/dest) | 🟧 | Dep EDDM; dest **WMKK + VTBS**; enroute Gulf (OMAA/OMDB/OOMS), India (VOMM/VABB/VOBL), Colombo (VCBI), SE Asia (VTBS/WMKK). Dense in absolute terms but **conflict exclusions remove nominal Gulf-core diverts** (§8). |
| Curfew / slot at either end | 🟧 | EDDF slot-coordinated + **night-flight restrictions**; WSSS H24 curfew-free but slot/flow-managed in the tight Singapore FIR funnel — confirm on the Airport briefs (§10). |
| Fuel availability / tankering | 🟩 | Jet A-1 at both ends; no periodic-shortage or price driver makes tankering the plan. Fuel-freeze is **not** a driver — this is a warm, hot-high-temperature routing, not a cold-soak one (§7). |

---

## 3. Standard / preferred routing
- **Filed route string:** VAMSYS `routes.json` carries identity/fleet/CI/distance only, not a filed airway string — confirm the current-AIRAC route on the day's SimBrief OFP 🟧 — the durable pattern is **Continental Europe → SE Europe / Turkey → the surviving Middle-East southern corridor (around the Iran/Iraq/Syria closures) → South Asia (India / Bay of Bengal) → the Andaman/Malacca approaches → Singapore FIR**. Fly the day's validated string, not a stored airway list.
- **FIRs crossed (durable, west→east):** German upper airspace via [Langen (EDGG)](../../airspace/fir/europe/langen-edgg.md) and Karlsruhe UAC → the European continental/SE-European sequence in the [Europe airspace brief](../../airspace/europe.md) → the Turkey/Levant gateway into the [Middle East / Gulf airspace brief](../../airspace/middle-east.md) (Jeddah **OEJD** / Emirates **OMAE** / Muscat **OOMM** on the southern bypass — bridge-hub FIR detail in [Emirates (OMAE)](../../airspace/fir/middle-east/emirates-omae.md)) → the India/Bay-of-Bengal and SE-Asia sequence in the [Asia airspace brief](../../airspace/asia.md) → arrival in [Singapore (WSJC)](../../airspace/fir/asia/singapore-wsjc.md).
- **One-way / level-capped segments:** RVSM **FL290–FL410** throughout (EUR / MID / APAC); **8.33 kHz** in the European sector only. Over any **Bay-of-Bengal procedural oceanic** portion, **RNP 4 + CPDLC/ADS-C (FANS 1/A)** buys the reduced (30 NM) separation — sub-RNP-4 aircraft take the wider minima. No metric-level transition (the routing does not enter Chinese airspace).
- **Common ATC re-routes / choke points:** European FRA loading out of EDDF; **the Middle-East corridor is the choke point** — the flyable route set is smaller than the published network and moves by NOTAM/temporary-RNAV bulletin (§9); severe **frequency congestion** reported on the Jeddah/Cairo southern-bypass corridor; **Bay-of-Bengal** oceanic entry/exit coordination; the **Singapore/Malacca Strait funnel** and dense KL/Jakarta boundary handoffs into WSJC.
- **Corridor discipline:** 🟥 **This is a conflict-zone-adjacent routing — hold the filed/managed corridor exactly.** Deviating from a cleared corridor in the Middle East carries elevated **misidentification** risk; keep the route in-corridor and see §9 plus the [Middle East brief §9/§10](../../airspace/middle-east.md).

---

## 4. Sector profile
Eastbound ultra-long-haul, **~13h00–13h45** block over a **5,547 NM VAMSYS dispatch distance** at **CI 70** (the conflict-zone detour drives the actually-flown distance above the ~5,350 NM pure great circle — confirm the day's routed distance on the OFP), flown by the **assigned hero type A380-800** within the wider widebody-pax allowed set (a **777F cargo working, K59302**, operates the same pairing; design register: the company Knowledge base). Cruise **M.82–.85** with a step-climb profile **FL310 → FL350 → FL370 → FL390/410** as fuel burns off. Unlike the near-polar EDDF–KSFO leg, this is a **warm-air, hot-high-temperature cruise** — the cruise sits in low-latitude air where **high SAT reduces the available cruise ceiling and thrust margin** and drives the step profile, and where **Jet A-1 freeze is a non-issue**. Departing Frankfurt, the routing runs the length of the Middle-East corridor into a South-Asia night and an early-morning arrival at Changi (rotate for the day's schedule). Winds are the dominant block/burn variable across the Gulf and the Bay of Bengal, and the seasonal **monsoon/ITCZ convective belt** across South and SE Asia is the tactical weather driver (§10).

---

## 5. ETOPS / EDTO
- **Applicability:** 🟥 **EDTO applies.** The over-water/remote legs — the **Arabian Sea flank** of the southern bypass, the **Bay of Bengal** procedural oceanic sector, and the **Andaman/Malacca** approaches — take the aircraft beyond the standard diversion-time threshold from an adequate aerodrome. Widebody-twin **operator rule time 180 min** `[K Global OpsSpec 2026-07-25]` (the A359/A35K types are certified well beyond — up to 370 min — and the A339 to 285 min; the leg is planned to the operator 180-min rule). Method and definitions live in [ETOPS / EDTO Procedures](../../../flight-ops/etops-edto.md) — this brief *applies* them.
- **Entry / exit points:** OFP-specific 🟧 — the binding EDTO windows are the **Bay-of-Bengal crossing** (Chennai/Kolkata oceanic) and the **Arabian Sea/Gulf-of-Oman** flank if the southern bypass exits via Muscat over water. Identify each critical point and its limiting alternate on the day's OFP.
- **En-route alternates (durable set — confirm live availability):**
  - **Gulf:** [Emirates (OMAE)](../../airspace/fir/middle-east/emirates-omae.md) hubs **OMAA / OMDB / OMDW** and **OOMS (Muscat)** — southern-bypass exit / Arabian-Sea coast-in.
  - **South Asia:** **VABB (Mumbai)**, **VOMM (Chennai — Bay-of-Bengal oceanic gateway)**, **VOBL (Bengaluru)**, **VCBI (Colombo — southern Bay of Bengal)**.
  - **SE Asia:** **VTBS (Bangkok)**, **WMKK (Kuala Lumpur)** — Malacca/Indochina coast-in and the destination-alternate pair.
- **Critical-fuel / depressurised-escape note:** 🟥 Carry fuel for the EDTO critical-fuel scenario (decompression + engine-out driftdown from the critical point to the limiting alternate, with reserves and any anti-ice/APU penalties). EDTO planning weather minima add-ons apply — an alternate is usable only if forecast at/above minima across its window of use. 🟥 **On the Middle-East corridor the nearest field may sit in avoid-airspace** — validate every EDTO alternate against the current CZIB/closure map, not just against range (§8, §9).

---

## 6. Terrain, airspace & oceanic
- **MSA / high-MORA belts on track:** 🟧 Largely benign — low desert and sea across the Gulf/Arabian interior, and low over-water MORA across the Bay of Bengal and the maritime SE-Asian legs. The terrain that matters on a diversion is the **Asir / Sarawat highlands** (SW Saudi, ~3,000 m) skirted by the southern bypass, and — only if a northerly re-route toward the Caucasus/Iran fringe is ever used — the **Zagros** high ground (avoided in practice). The Himalaya belt is **north of** this routing and is not a factor.
- **FIRs & control type:** 🟩 Continental **radar + ADS-B** across Europe, the developed Gulf/Arabian FIRs, India and the developed SE-Asian FIRs; 🟧 **procedural** only over the **Bay of Bengal** (Chennai/Kolkata oceanic, RNP 4 + FANS) and any Arabian-Sea oceanic portion of the Muscat flank. Datalink-first discipline applies on the procedural sectors — see [Datalink & Oceanic Procedures](../../../flight-ops/datalink-and-oceanic-procedures.md) and [PBN and RNP Operations](../../../flight-ops/pbn-and-rnp-operations.md).
- **Oceanic / remote procedures:** 🟧 Over the Bay of Bengal apply the ICAO Doc 4444 oceanic contingency and weather-deviation method (strategic/lateral offset, SLOP where published, position broadcast); expect **frequency congestion** on the Jeddah/Cairo corridor and the India–SE-Asia gateways. **GNSS jamming/spoofing** across the Gulf/Eastern-Mediterranean means the DME/DME/IRU cross-check and conventional-navaid fallback are live procedures on the western half of the route (§9).

---

## 7. Fuel & payload (this pairing)
- **Critical fuel scenario:** 🟥 Sized by the EDTO critical point (§5) over the Bay of Bengal / Arabian-Sea flank — decompression + driftdown to the limiting Gulf/India/SE-Asia alternate. This, not still-air burn, sets the reserve floor. Block/trip figures are OFP-specific 🟧.
- **Hot-and-high-temperature cruise (this route's live concern):** 🟥 The low-latitude cruise sits in **high-SAT air**; high temperatures **reduce the optimum/maximum cruise altitude and the thrust margin**, driving the step-climb profile and making the day's winds/temperatures the dominant burn variable. **Jet A-1 freeze is not a factor** here (contrast the polar routes). Type performance: [Fleet Capability Matrix](../../../fleet/capability-matrix.md).
- **Tankering economics:** 🟩 Jet A-1 available both ends; no periodic-shortage or price driver makes tankering the plan on this pairing. Method: [Fuel Policy](../../../flight-ops/fuel-policy.md).
- **Payload limits:** 🟧 Ultra-long sector — expect a **payload-vs-fuel trade** on the A339 in particular (range-sensitive) and MTOW/structural considerations off EDDF; the A359/A35K carry the sector with more margin. Confirm the assigned type's payload-range against the OFP → [Fleet Capability Matrix](../../../fleet/capability-matrix.md) and the type Dispatch pack.

---

## 8. Alternates
| Role | ICAO | Distance | Notes |
|---|---|---|---|
| Departure alternate | **EDDM** | short (intra-Germany) | Munich — same-country, high-capacity, all-weather (Airport brief to build 🟧). |
| En-route alternate (Gulf) | **OMAA / OMDB** | Gulf corridor | [Emirates (OMAE) FIR](../../airspace/fir/middle-east/emirates-omae.md) hubs; H24, full-service. 🟥 Gulf FIRs are CZIB-affected — confirm availability live (§9). |
| En-route alternate (Arabian Sea coast-in) | **OOMS** | southern-bypass exit | Muscat — Arabian-Sea oceanic gateway; khareef-monsoon ceilings at nearby Salalah (OOSA) Jun–Sep. |
| En-route alternate (South Asia) | **VABB / VOMM** | India / Bay-of-Bengal | Mumbai (W-India coast-in) and Chennai (Bay-of-Bengal oceanic gateway) → [`VABB`](../../destinations/asia/india/vabb/index.md) · [`VOMM`](../../destinations/asia/india/vomm/index.md). |
| En-route alternate (S Bay of Bengal) | **VCBI** | Indian Ocean flank | [Colombo–Bandaranaike](../../destinations/asia/sri-lanka/vcbi/index.md) — southern Bay-of-Bengal / Indian-Ocean coverage. |
| Destination alternate | **WMKK** | ~160 NM NNW of WSSS | [Kuala Lumpur–Sepang](../../destinations/asia/malaysia/wmkk/index.md) — primary destination alternate, adjacent Kuala Lumpur FIR (WMFC), immediate cross-boundary redundancy. |
| Destination alternate (secondary) | **VTBS** | ~740 NM N of WSSS | [Bangkok–Suvarnabhumi](../../destinations/asia/thailand/vtbs/index.md) — longer-range Indochina alternate, weather-independent of a Malacca/Singapore convective event. |

**Rationale & gaps:** The absolute field density is high — the Gulf/Saudi trunk, the Indian coast and the developed SE-Asian FIRs all put long runways within range. 🟥 The real constraint is **conflict-zone exclusion on the western half**: the closures over Iran/Iraq/Yemen and the SW-Saudi field closures strip out many nominal Middle-East diverts, and the Red Sea / Bab-el-Mandeb arc and Bay-of-Bengal crossing are genuine ETP windows — plan each divert against the live CZIB/closure map (§9). At the destination end, WMKK gives immediate cross-boundary redundancy and VTBS a weather-independent fallback if a monsoon/convective event closes the Singapore/Malacca terminal complex.

---

## 9. Overflight & conflict-zone (durable) — 🟥 MIDDLE-EAST CORRIDOR THE HEADLINE ITEM
- **Corridor & states overflown:** Germany → continental / SE Europe → **Turkey/Levant gateway** → the surviving **Middle-East southern corridor** (Egypt/Jeddah **OEJD** ↔ Emirates **OMAE** / Muscat **OOMM**) → India (Mumbai/Chennai/Kolkata FIRs) / **Bay of Bengal** → the Andaman/Malacca approaches → Singapore FIR. Overflight permits / state routing directives apply on the Middle-East and South-Asia legs — confirm at planning.
- **Conflict / risk zones near track — 🟥 avoid, re-check live:**
  - **Iran (Tehran OIIX), Iraq (Baghdad ORBB), Syria (Damascus OSTT), Yemen (Sanaa OYSC)** — all under active EASA CZIB "avoid at all levels" / high-risk; the routing must thread the surviving corridor *around* them. **Kuwait (OKAC) overflight is prohibited outright** — a hole in the middle of the Gulf structure.
  - **Red Sea / Bab-el-Mandeb threat arc** — the southern bypass's trade-off for avoiding Iran/Iraq; Houthi ballistic-missile/UAS activity and defensive intercepts create a **debris/misidentification** hazard, with intercepts raising risk over **northern Saudi Arabia** and the **Red Sea corridor**; four SW-Saudi airports are NOTAM-closed.
  - **Myanmar (Yangon VYYF)** — *if* a Bay-of-Bengal-to-SE-Asia routing clips the Yangon FIR, operate **at or above FL260** per the EASA Information Note (airspace below FL260 assessed as affected; surface-fire/MANPADS and northern-FIR GNSS spoofing) and take the risk into account.
- **GNSS jamming & spoofing — 🟥 pervasive on the western half.** Complete GPS loss on Gulf arrival/departure, interference into neighbouring FIRs, and spoofed positions (often centred on Crimea) across the Gulf/Eastern Mediterranean/Black Sea. Expect it; brief the **DME/DME/IRU cross-check and conventional-navaid fallback**, and notify ATC early.
- **Overflight permits / diplomatic:** several Middle-East and South-Asian states require permits / specific routing directives — confirm lead times and any temporary-corridor conditions at planning.

> **Currency:** re-check the **ICAO Conflict Zone Information Repository, EASA CZIBs (Middle East / per-state), state NOTAMs, and OPSGROUP / safeairspace.net** and operator routing policy at planning — this is durable context, not live clearance. The Middle-East picture changes at short notice; **keep the filed route in-corridor.** This is the mission-critical planning item for the pairing.

---

## 10. Hazards & watch-items
- **Seasonal:** 🟥 **Monsoon / ITCZ convection** across South and SE Asia (SW monsoon ~May–Sep, NE monsoon ~Nov–Mar, inter-monsoon convective peak) — deep embedded CB and the dominant tactical weather driver on the eastern half; **equatorial convection and Sumatra squalls** year-round at the Singapore/Malacca terminal end (§ Singapore FIR); **shamal dust / extreme heat** across the Gulf; **Arabian-Sea SW monsoon** (Jun–Sep, Salalah khareef) on the southern flank. Handle tactically — see [Adverse Weather and Windshear](../../../flight-ops/adverse-weather-and-windshear.md).
- **Route-specific binding hazards:** 🟥 **Middle-East conflict-zone corridor discipline** (§9); **pervasive GNSS interference** on the western half (§9); **Bay-of-Bengal procedural oceanic** discipline and datalink dependency (§6); **frequency congestion** on the Jeddah/Cairo corridor.
- **End-field constraints:** EDDF — slot-coordinated, **night-flight restrictions**; WSSS — H24 but slot/flow-managed in the tight Singapore FIR funnel, with equatorial convection / Sumatra squalls the terminal weather driver. Confirm current specifics on the [EDDF](../../destinations/europe/germany/eddf/index.md) and [WSSS](../../destinations/asia/singapore/wsss/index.md) Airport briefs (both baseline stubs — build out 🟧).
- **Volcanic ash:** 🟧 the Indonesian arc (VAAC Darwin) is a distant wildcard for the southern SE-Asian approaches; Icelandic ash (VAAC London) the European wildcard. Pull VA advisories at planning — [Volcanic Ash Avoidance](../../../flight-ops/volcanic-ash-avoidance.md).

---

## 11. Open items (🟧 — confirm)
- **Flight number(s)**, **service days**, **cost index**, **fleet** — RESOLVED from VAMSYS `routes.json` (pulled 2026-07-25): **K51107** (cargo K59302), 5/week, CI 70, widebody-pax set A339/A388/A359/A346/B748/B77W/B789/A35K.
- **Assigned tail** and the **filed route string** — remain OFP-specific; confirm on the day's SimBrief OFP.
- **VAMSYS distance (5,547 NM) vs the actually-flown conflict-zone-detour distance** — confirm the day's routed distance on the OFP; VAMSYS may sit between the GC (~5,350 NM) and the previously-estimated routed figure (~5,880 NM).
- **The entire §9 conflict-zone picture is live** — Iran/Iraq/Syria/Yemen closures, the Red Sea/Bab-el-Mandeb arc, Kuwait overflight prohibition, the usable managed-corridor set, and GNSS-interference advisories must be re-verified every dispatch.
- **EDTO alternate availability** — Gulf/India/SE-Asia fields confirmed against EDTO planning minima *and* the live CZIB/closure map for the window of use (§5, §8).
- **Bay-of-Bengal RNP-4 / FANS eligibility** for the assigned tail (30 NM vs 50 NM minima) — confirm on the OFP.
- **Myanmar (Yangon FIR) exposure** — confirm whether the day's Bay-of-Bengal→SE-Asia routing clips VYYF and, if so, the FL260-floor practice (§9).
- **EDDF / WSSS / WMKK / VTBS / India / Colombo airport briefs** — currently baseline stubs; build out curfew/slot, runway and hazard detail as the airport set fills.

---

## 12. Per-flight briefing (not stored here)
The dispatch pre-flight briefing — SimBrief OFP, live METAR/TAF/NOTAM, that day's winds/levels, the **current Middle-East conflict-zone / managed-corridor picture and GNSS advisories**, tail assignment, load, and the day's EDTO entry/exit and critical-fuel picture — is generated at planning (T-2h) and lives in the dispatch pack, **not** in this durable file.

---

## Sources & References
*Public URLs only. Cite origin + retrieved dates. VAMSYS mirror and in-sim charts inform content but are not listed as public citations.*

- Overflight / conflict picture (Iran, Iraq, Syria, Yemen, Red Sea / Houthi) — safeairspace.net (https://safeairspace.net) (retrieved 2026-07-25)
- Conflict Zone Information Bulletins (Middle East / per-state; Myanmar Information Note) — EASA (https://www.easa.europa.eu/en/domains/air-operations/czibs) (retrieved 2026-07-25)
- Middle-East routing / three-corridor picture, GNSS interference, Jeddah/Cairo congestion — OPSGROUP (https://ops.group/blog/dodging-danger-the-three-routes-through-the-middle-east/) (retrieved 2026-07-25)
- Bay-of-Bengal oceanic (RNP 4 + FANS, 30 NM) and APAC PBN — ICAO APAC BOBASIO / FIT-BOB material (https://www.icao.int/sites/default/files/sp-files/APAC/Documents/Meetings/2010/fitbob12_bob_rhs_tf2/fitbob_WP03.pdf) (retrieved 2026-07-25)
- EDTO / ETOPS concept — SKYbrary, *ETOPS* (https://skybrary.aero/articles/etops) (retrieved 2026-07-25)

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-25 | Initial build — durable EDDF–WSSS ultra-long-haul route brief. Europe → SE Europe/Turkey → Middle-East southern corridor (around Iran/Iraq/Syria/Yemen; Kuwait overflight prohibited; Red Sea/Bab-el-Mandeb arc; pervasive GNSS jamming/spoofing) → South Asia / Bay of Bengal → Malacca → Singapore (WSJC); ~5,350 NM GC / ~5,880 NM routed; **EDTO (widebody-twin 180 min)**; hot-high-temperature cruise (no fuel-freeze); long-range widebody-twin fleet (A359/A35K/A339) flagged 🟧 pending VAMSYS; alternates EDDM / Gulf / India / Colombo / dest WMKK+VTBS; **§9 Middle-East conflict-zone corridor built as the headline 🟥 item, re-check live.** Cross-linked to OM B (Fleet Capability Matrix + A359/A35K/A339), OM E (ETOPS-EDTO / Datalink-Oceanic / PBN / Fuel / Adverse Weather / Volcanic Ash), Airspace (Europe / Middle East / Asia general + Langen / Emirates / Singapore FIR) and the EDDF/WSSS/WMKK/VTBS airport briefs. |
| v0.2 | 2026-07-25 | Identity/fleet/distance/CI/frequency set from live VAMSYS routes.json (source of truth); pending-VAMSYS flags cleared. |
| v0.3 | 2026-07-25 | Reconciled to routes.md design register: assigned hero type + multi-services set; EDDF-VHHH restored to dual pax+cargo. |
</content>
</invoke>
