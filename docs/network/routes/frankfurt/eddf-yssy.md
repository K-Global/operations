# EDDF – YSSY · Route Briefing
### Frankfurt – Sydney

**Flight number(s):** K51109 · **Direction:** South-eastbound (EDDF → YSSY), **VAMSYS-modelled NON-STOP** 🟧 · **Service days:** 3/week
<!-- No radio callsigns in OM content (governance §1.3). Flight numbers are commercial identifiers and OK; do not add an ATC callsign. -->

**Version** v0.2 · **Updated** 2026-07-25 · **Status** Draft

> **Read-me:** Durable reference for the city pair — standing routing, ETOPS, alternates and hazards. Not a clearance and not the day's plan: file and fly the SimBrief/current-AIRAC route with that day's winds and levels. **Live VAMSYS `routes.json` confirms this city pair is operated as a single NON-STOP sector — flight K51109, 3/week, 8,902 NM, at CI 70 on the largest widebodies (A388/A359/A346/B748/B77W/B789/A35K). This is the network reality and is stated as fact below (§1, §3, §4). 🟧 REALISM CAVEAT (retained): 8,902 NM exceeds the real-world non-stop range of most of these types — in reality only an ultra-long-range frame (A35K-class) would even be marginal at this distance, so the sim models a non-stop flight the real aircraft would struggle to fly non-stop (§1, §7).** Live wx/NOTAM/conflict bulletins are pulled at planning (§12). Open 🟧 items in §11. Flag legend 🟥 restriction/hazard · 🟧 caution · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| City pair | EDDF → YSSY (Frankfurt/Main → Sydney / Kingsford Smith) |
| Flight number(s) | **K51109** |
| Frequency | **3/week** `[VAMSYS routes.json, pulled 2026-07-25]` |
| Distance | **8,902 NM** — VAMSYS dispatch distance, **modelled NON-STOP** `[VAMSYS routes.json, pulled 2026-07-25]` (close to the ~8,900 NM public great-circle previously cited) |
| Range reality | 🟧 **Network reality: flown non-stop (VAMSYS).** REALISM CAVEAT retained: 8,902 NM **exceeds the real-world non-stop range of most of the cleared types** — only an ultra-long-range frame (A35K-class) is even marginal at this distance in reality. This brief states the sim/network fact (non-stop, these types) while flagging the realism gap honestly (§4, §7). |
| Typical cruise / step | Long high-FL cruise, M.82–.85, step-climb to **FL380** (VAMSYS-modelled cruise ceiling) as weight burns off 🟧 |
| Cost index (default) | **CI 70** `[VAMSYS routes.json, pulled 2026-07-25]` |
| Block time | 🟧 Non-stop at this distance is estimated **~19h–21h** block (wind-dependent; no reference OFP yet) |
| Fleet | **Assigned: A350-1000 ULR (A35K)** `[routes.md design register]` — the only frame in the allowed set genuinely suited to this non-stop distance · Allowed (VAMSYS-modelled): A388 · A359 · A346 · B748 · B77W · B789 · A35K — the largest widebodies, flown **non-stop** per VAMSYS (🟧 realism caveat retained — see §7) → [`OM B — A35K`](../../../fleet/a35k/dispatch.md) · [Fleet Capability Matrix](../../../fleet/capability-matrix.md) |
| Sector type | **Ultra-long-haul** · multi-region (Europe → Middle East → Asia → Oceania) · **oceanic ETOPS/EDTO** · **VAMSYS-modelled non-stop** 🟧 (realism caveat) |

---

## 2. Validation summary

| Domain | Flag | Note |
|---|---|---|
| Range vs fleet capability | 🟧 | **VAMSYS models this route non-stop** at 8,902 NM on the largest widebodies (A388/A359/A346/B748/B77W/B789/A35K), flight K51109, 3/week. **REALISM CAVEAT:** 8,902 NM exceeds the real-world non-stop range of most of these types (typical real-world max ranges run ~7,300–9,700 NM depending on type/variant) — only an ultra-long-range frame is even marginal. Stated as network reality, not a real-world capability endorsement (§4, §7). |
| ETOPS/EDTO adequacy | 🟥 | Long over-water / oceanic segments (Indian Ocean, SE-Asia/Indonesia to the Australian oceanic sectors) drive **EDTO** with **sparse alternates**; widebody-twin rule time **180 min** (matrix), sizing each oceanic leg's ETPs. |
| Overflight / conflict-zone risk | 🟥 | The Europe→Asia routing threads the **Middle-East conflict core** (avoid Syria/Iraq/Iran/Yemen/Red Sea) and skirts **overflight-avoidance zones in Asia** (North Korea, Myanmar) depending on the hub/leg chosen — re-check live (§9). |
| Terrain / MORA on track | 🟧 | Benign at cruise over ocean; the **Himalaya belt** (world's highest MORA) and the **Australian Alps** matter only if a given leg/diversion routes near them (§6). |
| Alternate coverage (dep/enroute/dest) | 🟥 | Dep EDDM; dest YMML/YSCB/YBBN; the **Indian-Ocean and South-Pacific oceanic legs have sparse, widely-spaced diversions** (Perth, Learmonth, Diego Garcia, Cocos) — ETP-driven (§8). |
| Curfew / slot at either end | 🟥 | **YSSY has a legislated 2300–0600 curfew** (Sydney night-flight ban) plus a movement cap — a hard arrival-planning constraint; EDDF slot-coordinated. Confirm on the Airport briefs (§10). |
| Fuel availability / tankering | 🟩/🟧 | Jet A-1 at all realistic hubs and both ends; **fuel-freeze / cold-soak** on the long high-FL legs is the live concern (monitor tank temp), not availability (§7). |

---

## 3. Standard / preferred routing
- **Filed route string:** 🟧 **VAMSYS models this pairing as a single NON-STOP sector (K51109)** — there is no filed airway string in `routes.json` (identity/fleet/CI/distance only), so the exact track is per the day's SimBrief/current-AIRAC OFP. Indicative non-stop structure: EDDF → SE Europe/Turkey → **Middle-East corridor** → South Asia (Mumbai/Chennai) → SE Asia (Singapore/Kuala Lumpur) → Indonesia → **Australian oceanic sectors** → Melbourne FIR → Sydney, flown as one ultra-long-range, wind-optimised random track. 🟧 the realism gap (§1, §7) does not change the network fact that this is planned/dispatched as one non-stop sector.
- **FIRs crossed (indicative, single non-stop sector):** Langen (**EDGG**) → European upper FIRs → Turkey → **Middle-East corridor** → South Asia (Mumbai/Chennai) → SE Asia (**Singapore WSJC** / Kuala Lumpur) → Indonesia (Jakarta **WIIF**) → Australian oceanic (**Brisbane YBBB**) → **Melbourne (YMMM)** (which contains Sydney). Region briefs: [Europe](../../airspace/europe.md) · [Middle East](../../airspace/middle-east.md) · [Asia](../../airspace/asia.md) · [Oceania](../../airspace/oceania.md); destination FIR: [Melbourne (YMMM)](../../airspace/fir/oceania/melbourne-ymmm.md).
- **One-way / level-capped segments:** RVSM **FL290–FL410** throughout; **RNP 4 / RNAV 10 (RNP 10)** over the oceanic sectors (Bay of Bengal, SE-Asia/Indonesia, Australian oceanic); **CPDLC + ADS-C (FANS 1/A)** required oceanic. Managed Middle-East corridors and Asian ATFM (CTOT/MINIT) flow control apply.
- **Common ATC re-routes / choke points:** Middle-East corridor selection and congestion (Jeddah/Cairo); Asian metric-level / flow-control transitions; oceanic clearance and level negotiation at the Indonesian → Australian oceanic boundary; **YSSY curfew-driven arrival slotting** and the Sydney basin runway config.
- **Corridor discipline:** 🟥 hold the managed Middle-East corridor exactly (avoid the adjacent conflict core — §9); over the oceanic sectors apply **SLOP** and datalink discipline — see [Datalink and Oceanic Procedures](../../../flight-ops/datalink-and-oceanic-procedures.md).

---

## 4. Sector profile
🟧 **Network reality: this is flown as a single NON-STOP sector** — VAMSYS `routes.json` confirms flight **K51109**, 3/week, at **8,902 NM** and **CI 70** on the largest widebodies (A388/A359/A346/B748/B77W/B789/A35K). The **design register assigns the A350-1000 ULR (A35K) as the hero type** for this pairing — the only frame in the allowed set built for the distance; the wider widebody set remains the VAMSYS-modelled allowed fleet. This is stated as fact for planning purposes. **REALISM CAVEAT (retained):** 8,902 NM exceeds the real-world non-stop range of most of these types — even the ultra-long-range A35K is only marginal in reality, and the pax/pax-cargo-mix types (A388/A346/B748/B77W/B789) fall meaningfully short of this distance in real-world service. The sim therefore models a non-stop flight the real aircraft would struggle to fly non-stop; this is a standing 🟧 realism gap, not a dispatch blocker — the network/OFP treats it as flyable. A single ultra-long-range cruise (M.82–.85, step-climbing toward FL380 as weight burns off) with its own ETOPS/EDTO, oceanic and fuel-temperature picture (§5–§7). Crew provisions are a first-order constraint on a sector this long: an ultra-long non-stop operation drives **crew augmentation, in-flight rest and flight-time-limitation planning** — see [OM A A04 — Crew Composition](../../../general/a04-crew-composition.md) and [OM A A06 — Crew Health, Fatigue and Flight-Time Limitations](../../../general/a06-crew-health-fatigue-and-flight-time-limitations.md). Winds (the Middle-East/South-Asia flow and the Indian-Ocean/Australian jets) dominate block time and the day's optimum track and levels — filed against that day's winds, not this durable string.

---

## 5. ETOPS / EDTO
- **Applicability:** 🟥 **EDTO applies across the oceanic sectors of this single non-stop flight** — long over-water stretches across the **Indian Ocean**, the SE-Asia / Indonesian sectors and the **Australian oceanic** areas leave the diversion-field thresholds. Operator rule time for the widebody twins is **180 min** (A339/A359/A35K/B789); A35K type capability extends to 370 min. Quads (A388/B748) and the A346 (quad) are not twin-ETOPS-limited but the EDTO adequate-aerodrome concept still applies. Method: [ETOPS / EDTO Procedures](../../../flight-ops/etops-edto.md); per-type values in the [Fleet Capability Matrix](../../../fleet/capability-matrix.md) (Table A).
- **Entry / exit points:** routing-dependent — computed per OFP for each oceanic crossing within the single non-stop sector (Bay of Bengal, SCS/Indonesia, and the Indian/Southern-Ocean or Tasman/Coral flank). Not a single fixed pair on this pairing.
- **En-route alternates (oceanic flank, indicative):** [Perth (YPPH)](../../destinations/oceania/australia/ypph/index.md), Learmonth (YPLM), Cocos (YPCC) and **Diego Garcia (FJDG)** on the Indian-Ocean flank; SE-Asian fields (Singapore, KL, Jakarta) on the northern approach. Widely spaced — verify RFF/hours/weather on the day (see [Oceania](../../airspace/oceania.md) §8).
- **Critical-fuel / depressurised-escape note:** 🟥 the flight carries fuel for the **critical-fuel scenario** on each oceanic segment of the non-stop sector (decompression + engine-out driftdown to the limiting alternate, with reserves and EDTO planning minima) — sparse alternates make the ETP the binding item, not still-air burn.

---

## 6. Terrain, airspace & oceanic
- **MSA / high-MORA belts on track:** 🟧 benign at cruise over the oceanic and desert stretches. The **Himalaya belt** — the world's highest MORA/driftdown terrain — is relevant only if a South-Asia leg routes near it; the **Australian Alps / Snowy Mountains (~7,310 ft)** and Blue Mountains near Sydney are a terminal, not cruise, consideration (see [Melbourne (YMMM)](../../airspace/fir/oceania/melbourne-ymmm.md) §8).
- **FIRs & control type:** dense **radar + ADS-B** over Europe, the developed Gulf/Asian continental FIRs and the Australian continent; **procedural oceanic** (FANS CPDLC/ADS-C, RNP 4 / RNAV 10) over the Bay of Bengal, parts of the SCS/Indonesia and the Australian oceanic sectors. **ADS-B Out is mandatory** in Australian controlled airspace. See [PBN and RNP Operations](../../../flight-ops/pbn-and-rnp-operations.md) and [RVSM Operations](../../../flight-ops/rvsm-operations.md).
- **Oceanic / remote procedures:** 🟥 datalink-first discipline — CPDLC/ADS-C logon before oceanic entry, Mach Number Technique, **SLOP** offset, HF/SATVOICE fallback; ICAO Doc 4444 oceanic contingency and weather-deviation procedure over the open ocean. Note **AUSOTS is retired → User Preferred Routes** in Australian oceanic airspace; the trans-Tasman/Indian-Ocean tracks are random/wind-optimised, not an organised-track grid. Full method: [Datalink and Oceanic Procedures](../../../flight-ops/datalink-and-oceanic-procedures.md).

---

## 7. Fuel & payload (this pairing)
- **Critical fuel scenario:** 🟥 governed by the **oceanic EDTO ETPs** (§5) across the non-stop sector — decompression + driftdown to a sparse Indian-Ocean/Australian alternate. This, plus the ultra-long still-air burn, sizes the reserve. Standard policy: [Fuel Policy](../../../flight-ops/fuel-policy.md) and [OM A A08 — Fuel and Payload Policy](../../../general/a08-fuel-and-payload-policy.md).
- **Range/payload reality — 🟧 REALISM CAVEAT (retained):** VAMSYS models this sector **non-stop at 8,902 NM** on the largest widebodies (A388/A359/A346/B748/B77W/B789/A35K) — stated as network fact (§1, §4). In the real world, **8,902 NM exceeds the non-stop range of most of these types**; only an ultra-long-range frame (A35K-class) is even marginal, and it would trade payload heavily for fuel to attempt it. This is a **sim-vs-reality gap**: the network/OFP treats the sector as flyable non-stop and this brief plans it that way, while flagging that the real aircraft would struggle to achieve this distance non-stop. State this caveat honestly on every plan; it is not a dispatch blocker within the operated network.
- **Fuel-freeze / cold-soak awareness:** 🟧 the long high-FL non-stop cruise cold-soaks the fuel — monitor **tank fuel temperature** vs the **Jet A-1 freeze point (−47 °C)**; mitigate by descent to warmer air and/or higher Mach. Confirm the loaded grade is Jet A-1. See [Polar and High-Latitude Operations](../../../flight-ops/polar.md) (cold-soak logic).
- **Tankering economics:** 🟩 Jet A-1 available at both ends; no standing tankering driver — confirm price differentials at planning.

---

## 8. Alternates
| Role | ICAO | Distance | Notes |
|---|---|---|---|
| Departure alternate | **EDDM** | short (intra-Germany) | [EDDM — Munich](../../destinations/europe/germany/eddm/index.md) — same-country, high-capacity, all-weather. |
| En-route/adequate field (not a scheduled stop) | **OMAA** / **WSSS** | mid-route | [OMAA — Zayed Intl](../../destinations/middle-east/united-arab-emirates/omaa/index.md) (Middle-East bridge hub) or [WSSS — Changi](../../destinations/asia/singapore/wsss/index.md) (Asia hub) — usable diversion/technical-stop fields underneath the non-stop track; **not a scheduled transit stop** — VAMSYS operates K51109 non-stop (§1, §3, §4). |
| En-route alternate(s) | **YPPH** / FJDG / YPLM / YPCC | oceanic flank | [Perth (YPPH)](../../destinations/oceania/australia/ypph/index.md); Diego Garcia / Learmonth / Cocos — sparse, widely spaced, ETP-driven (see [Oceania](../../airspace/oceania.md) §8). |
| Destination alternate | **YMML** | ~380 NM SW | [Melbourne — Tullamarine](../../airspace/fir/oceania/melbourne-ymmm.md) (brief to build) — major, H24. |
| Destination alternate (secondary) | **YSCB / YBBN** | ~130 / ~410 NM | Canberra (in-FIR) / Brisbane — Sydney-basin alternates; confirm curfew/hours. |

**Rationale & gaps:** 🟥 the **oceanic segments of the non-stop sector are the alternate-coverage gap** — over the Indian Ocean and the Australian oceanic sectors a suitable field can be hundreds of NM away, several with limited RFF/hours/weather, so **every over-water segment is ETP/EDTO-driven** (compute the ETPs and confirm each nominated alternate on the OFP). The Australian mainland end is dense (YMML/YSCB/YBBN/YPAD), so destination alternate coverage is strong — but **YSSY's night curfew** (§10) can force an alternate purely on arrival timing, independent of weather. Note the realism caveat (§1/§7): should the real-world range shortfall ever require a technical stop, OMAA/WSSS are the natural en-route fields, but that is not how VAMSYS operates this frequency.

---

## 9. Overflight & conflict-zone (durable)
- **Corridor & states overflown (indicative):** Germany → SE Europe / Turkey → **Middle-East corridor** → South Asia → SE Asia / Indonesia → Australian oceanic → Australia (Melbourne FIR). Exact set is leg- and NOTAM-dependent.
- **Conflict / risk zones near track:** 🟥 the Europe→Asia portion threads the **Middle-East conflict core** — **avoid Syria (OSTT), Iraq (ORBB), Iran (OIIX), Yemen (OYSC) and the Red Sea / Bab-el-Mandeb**, all under active CZIB/high-risk, with **pervasive GNSS jamming/spoofing** (see [Middle East](../../airspace/middle-east.md) §9). In Asia, keep clear of **overflight-avoidance zones — North Korea (Pyongyang ZKKP)** and **conflict-risk Myanmar (Yangon VYYF)** — depending on the leg/routing (see [Asia](../../airspace/asia.md) §9). Oceania itself is 🟩 benign (PNG overflight-permit admin only).
- **Overflight permits / diplomatic:** multiple state permits/routing directives across the Middle-East and Asian corridors; **PNG (AYPM) overflight permit** if a Coral-Sea routing is used. Airspace-compliance policy: [OM A A13 — Rules of the Air and Airspace Compliance](../../../general/a13-rules-of-the-air-and-airspace-compliance.md).

> **Currency:** re-check the **ICAO Conflict Zone Information Repository, EASA CZIBs, state NOTAMs and OPSGROUP/safeairspace** at planning — durable context, not live clearance. Keep every leg in-corridor.

---

## 10. Hazards & watch-items
- **Route-specific binding hazards:** 🟥 **ultra-long crew, fuel & augmentation** (OM A A04/A06); 🟥 **Middle-East conflict-zone corridors + GNSS jamming/spoofing** (§9); 🟥 **Indian-Ocean / oceanic ETOPS with sparse alternates** (§5, §8); 🟥 **YSSY night curfew** (§10 below).
- **Seasonal / environmental:** 🟥 **South Pacific / Coral-Sea tropical cyclones (Nov 1 – Apr 30, peak Jan–Mar)** on the Oceania approach — re-routes, alternate wash-outs, destination disruption; **subtropical-jet CAT** across SE Australia; **monsoon convection** and **NW-Pacific/SCS typhoons (~May–Nov)** on the Asian legs; **VAAC Darwin/Wellington volcanic ash** (Indonesia/PNG/NZ) as a strategic wildcard; **fuel-freeze / cold-soak** on the long high-FL legs (§7). See [Adverse Weather and Windshear](../../../flight-ops/adverse-weather-and-windshear.md).
- **End-field constraints:** EDDF — slot-coordinated, night restrictions; **YSSY — legislated 2300–0600 curfew and hourly movement cap** (a hard arrival-timing constraint) plus Sydney-basin runway/noise management. Confirm current specifics on the [EDDF](../../destinations/europe/germany/eddf/index.md) and [YSSY — Kingsford Smith](../../destinations/oceania/australia/yssy/index.md) Airport briefs.
- **Other:** 🟧 the **realism gap** (§1, §7) between the VAMSYS-modelled non-stop distance and the real-world non-stop range of the cleared types is a standing watch-item, not a scheduling one — the network operates it non-stop and this brief plans it that way.

---

## 11. Open items (🟧 — confirm)
- **Flight number(s)**, **service days**, **distance**, **cost index**, **fleet** — RESOLVED from VAMSYS `routes.json` (pulled 2026-07-25): **K51109**, 3/week, 8,902 NM, CI 70, non-stop, largest-widebody fleet set A388/A359/A346/B748/B77W/B789/A35K.
- **Operating pattern** — RESOLVED: VAMSYS confirms this is operated **non-stop**, not one-stop via a hub; the previous one-stop framing is superseded.
- **Realism caveat vs real-world range** — 🟧 standing open item: 8,902 NM exceeds the real-world non-stop range of most of the cleared types; this is a modelled/network fact, not a real-world performance claim — flag on every plan (§1, §4, §7).
- **Per-type EDTO rule time** — confirm via VAMSYS and the [Fleet Capability Matrix](../../../fleet/capability-matrix.md).
- **Crew augmentation / FTL** for the ultra-long non-stop sector — confirm against OM A A04/A06 for the actual pattern.
- **Cruise levels/steps, block times, fuel tonnages** — estimates only; confirm on the SimBrief OFP.
- **§9 conflict-zone / overflight picture is live** — Middle-East CZIBs, Asian avoidance zones (North Korea/Myanmar), managed corridors and GNSS advisories re-verified every dispatch.
- **YSSY curfew / movement-cap** exact terms — confirm on the airport brief; may drive the arrival slot independent of weather.
- **Oceanic alternate briefs** (YPPH built; Learmonth/Cocos/Diego Garcia/YMML/YSCB to build) — verify RFF/hours/weather as they become planned ETOPS/EDTO alternates.

---

## 12. Per-flight briefing (not stored here)
The dispatch pre-flight briefing — SimBrief OFP per leg, live METAR/TAF/NOTAM, that day's winds/levels/oceanic tracks, tail assignment, load, the current conflict-zone / GNSS picture, the oceanic ETP and fuel-temperature picture, and the YSSY curfew slot — is generated at planning (T-2h) and lives in the dispatch pack, **not** in this durable file.

---

## Sources & References
*Public URLs only. Cite origin + retrieved dates. VAMSYS mirror and in-sim charts inform content but are not listed as public citations.*

- Great-circle distance (EDDF–YSSY ~8,900 NM / ~16,500 km) — Great Circle Mapper (http://www.gcmap.com) (retrieved 2026-07-25)
- Overflight / conflict-zone picture — Safe Airspace / OPSGROUP (https://safeairspace.net) (retrieved 2026-07-25) *(advisory/live source — re-check at planning)*
- EASA — Conflict Zone Information Bulletins (Middle East / Asia per-state) (https://www.easa.europa.eu/en/domains/air-operations/czibs) (retrieved 2026-07-25) *(advisory/live source)*
- ETOPS/EDTO & ultra-long-range operations method — FAA AC 120-42B / ICAO Annex 6 EDTO (https://www.faa.gov/regulations_policies/advisory_circulars) (retrieved 2026-07-25)
- South Pacific tropical-cyclone season (Nov 1 – Apr 30) — Fiji Met Service (RSMC Nadi) / Australian BoM (https://www.bom.gov.au/climate/cyclones/south-pacific/) (retrieved 2026-07-25)
- Sydney (YSSY) curfew & movement cap — Australian Government legislation reference (Sydney Airport Curfew Act 1995 / Sydney Airport Demand Management Act 1997) (https://www.legislation.gov.au) (retrieved 2026-07-25)
- Frankfurt / German AIP ENR (route & airspace) — DFS AIP (https://aip.dfs.de) (retrieved 2026-07-25)

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-25 | Initial build from the route briefing template — durable EDDF–YSSY ultra-long-haul brief. **~8,900 NM GC treated honestly as beyond non-stop fleet range → realistically one-stop via an Asia/Middle-East hub (WSSS/OMAA); non-stop only marginal on A35K 🟥** (stated explicitly in §1/§4/§7). Regions transited Europe → Middle East (conflict-zone corridor, avoid Syria/Iraq/Iran/Yemen/Red Sea; GNSS jamming) → Asia (North Korea/Myanmar avoidance) → Oceania, destination Melbourne FIR (YMMM) containing Sydney (YSSY). Indian-Ocean/oceanic ETOPS with sparse alternates; ultra-long crew/fuel/augmentation (OM A A04/A06); S-Pacific/Coral-Sea cyclones (Nov–Apr); YSSY night curfew. Cross-linked to Europe/Middle East/Asia/Oceania airspace briefs, Emirates (OMAE) + Melbourne (YMMM) FIR briefs, OM B Fleet Capability Matrix, OM E (ETOPS-EDTO / Datalink-Oceanic / PBN / RVSM / Fuel / Polar / Adverse Weather), OM A (A04/A06/A08/A13) and the EDDF/OMAA/WSSS/YPPH/YSSY airport briefs. Flight number(s), operating pattern, fleet and OFP perf figures pending VAMSYS 🟧. |
| v0.2 | 2026-07-25 | Identity/fleet/distance/CI/frequency set from live VAMSYS routes.json (source of truth); pending-VAMSYS flags cleared. **Reconciled as VAMSYS-modelled NON-STOP** — routes.json confirms K51109 (3/week) is flown non-stop at 8,902 NM on the largest widebodies (A388/A359/A346/B748/B77W/B789/A35K), superseding the previous one-stop-via-hub framing; §1/§3/§4/§7/§8/§11 rewritten to state the non-stop network reality as fact while **retaining the 🟧 realism caveat** that 8,902 NM exceeds the real-world non-stop range of most of the cleared types. |
| v0.3 | 2026-07-25 | Reconciled to routes.md design register: assigned hero type + multi-services set; EDDF-VHHH restored to dual pax+cargo. |
