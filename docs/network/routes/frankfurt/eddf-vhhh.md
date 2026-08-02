# EDDF – VHHH · Route Briefing
### Frankfurt – Hong Kong

**Flight number(s):** PAX K5617 (A35K) 🟧 currently HIDDEN in live VAMSYS · CARGO K59402 (freighters, active) · **Direction:** Eastbound (EDDF → VHHH) · **Service days:** 7/week (both services)
<!-- No radio callsigns in OM content (governance §1.3). Flight numbers are commercial identifiers and OK; do not add an ATC callsign. -->

**Version** v0.3 · **Updated** 2026-07-25 · **Status** Draft

> **Read-me:** Durable reference for the city pair — standing routing, ETOPS, alternates and hazards. Not a clearance and not the day's plan: file and fly the SimBrief/current-AIRAC route with that day's winds and levels. Live wx/NOTAM/conflict bulletins are pulled at planning (§12). Open 🟧 items in §11. Flag legend 🟥 restriction/hazard · 🟧 caution · 🟩 normal. **This is a DUAL pax + cargo pairing — VHHH is both the Asia cargo superhub (unit 9, active — §1/§4b/§7) AND a Premier-network pax destination point (A35K, currently HIDDEN in live VAMSYS 🟧 — should be un-hidden; §1/§4a/§7). Both legs share the durable Russia-avoidance routing (§3, §9); §5 covers the two distinct EDTO pictures.**

---

## 1. Snapshot

| Field | Value |
|---|---|
| City pair | EDDF → VHHH (Frankfurt/Main → Hong Kong Intl) |
| Role | 🟧 **DUAL — PAX + CARGO.** VHHH is the Asia cargo superhub (unit 9, **active**) **and** a Premier-network pax destination point (A35K, currently **HIDDEN** in live VAMSYS — should be un-hidden, per `routes.md`). This brief covers **both** legs. |
| Flight number(s) | **PAX: K5617** (A35K) 🟧 currently HIDDEN in VAMSYS — see §11 · **CARGO: K59402** (B77F/MD11/B74F, active) `[VAMSYS routes.json, pulled 2026-07-25]` |
| Frequency | **PAX 7/wk** (design figure) 🟧 pending un-hide/confirmation · **CARGO 7/week — daily service, active** `[VAMSYS routes.json, pulled 2026-07-25]` |
| Distance | **PAX ~5,560 NM** (VAMSYS pax-leg design figure) · **CARGO 4,939 NM** — VAMSYS dispatch distance `[VAMSYS routes.json, pulled 2026-07-25]` (previously estimated ~5,000 NM pure great-circle over Siberia for the cargo leg); **both materially longer as practically routed** SOUTH of Russia — see §3 / §9 🟥 |
| Typical cruise / step | **PAX (A35K):** 🟧 standard widebody-pax profile, M.82–.85 toward FL380 expected — no reference pax OFP yet (leg hidden). **CARGO:** M.82–.85; step **FL310 → FL330 → FL350**, cruise ceiling **FL350** (VAMSYS-modelled — lower than a widebody-pax cruise, consistent with a heavier main-deck-cargo payload profile). Both transition to **China metric levels** at the Chinese FIR boundary (crew reads the FLAS feet-equivalent, flies in feet) 🟧 |
| Cost index (default) | **CARGO CI 35** `[VAMSYS routes.json, pulled 2026-07-25]` — markedly lower than the pax long-haul routes, consistent with a fuel-priority freighter cost structure. **PAX CI** 🟧 not yet in the VAMSYS pull (leg hidden); expect **CI 65–70** once un-hidden, consistent with the sibling widebody-pax pairings. |
| Block time | **~12h00–13h00** (Russia-avoidance routing adds track over the great circle; both legs) 🟧 |
| Fleet | **PAX — Assigned: A350-1000 (A35K)** `[routes.md design register / VAMSYS pax-leg design_type]` · Allowed 🟧 pending un-hide confirmation, expected the standard widebody-pax set (A339 · A388 · A359 · A346 · B748 · B77W · B789 · A35K) → [`OM B — A35K`](../../../fleet/a35k/dispatch.md). **CARGO — main-deck freighters only: B77F · MD11 · B74F** → [`OM B — B77F`](../../../fleet/b77f/dispatch.md) · [`OM B — MD11`](../../../fleet/md11/dispatch.md) · [`OM B — B748`](../../../fleet/b748/dispatch.md) (covers the 748-8F/B74F freighter variant) · [Fleet Capability Matrix](../../../fleet/capability-matrix.md) |
| ETOPS / EDTO | **PAX (A35K, twin):** widebody-twin operator rule time **180 min** `[K Global OpsSpec 2026-07-25]` (type certified to 370 min) — see §5. **CARGO:** applicable — EDTO where over-water/remote 🟥; **B77F** (twin) 180 min 🟧 confirm B77F-specific approval; **MD11** (tri-jet) and **B74F** (quad) — **EDTO adequate-aerodrome concept**, no twin-ETOPS diversion-time limit — see §5 |
| Sector type | Long-haul · **DUAL pax + cargo** · **EDTO** · **Russia-avoidance-routed** (materially longer than GC) · China flow-controlled / metric-level transit |

---

## 2. Validation summary

| Domain | Flag | Note |
|---|---|---|
| Range vs fleet capability | 🟩 | **PAX:** ~5,560 NM (VAMSYS pax-leg design figure) is comfortably within range for the assigned **A35K (A350-1000)**. **CARGO:** 4,939 NM (VAMSYS dispatch distance); the Russia-avoidance track as actually flown is materially longer (~5,700–6,000 NM estimated) but within the cleared **cargo fleet's** range (B77F/MD11/B74F) with margin. Confirm the assigned type/tail and payload at dispatch for both legs (§7). |
| ETOPS/EDTO adequacy | 🟧 | Over-water/remote segments (Central-Asian / western-China remote terrain, any Bay-of-Bengal or SCS over-water portion depending on the day's south-of-Russia track) make this an **EDTO** sector for **both** legs. **PAX (A35K, twin):** widebody-twin rule time 180 min (type capable to 370) comfortably covers it. **CARGO — B77F** (twin) 180 min covers it, 🟧 confirm B77F-specific OpsSpec approval; **MD11** (tri-jet) and **B74F** (quad) are planned under the EDTO adequate-aerodrome concept (no twin-ETOPS diversion-time limit). §5. |
| Overflight / conflict-zone risk | 🟥 | **The headline item — Russia-avoidance — applies to BOTH the pax and cargo legs.** European-modelled operators currently avoid Russian airspace, so the practical routing runs **south of Russia** (materially longer than the Siberian great circle) for both services. Durable planning context, not a political stance; the crew flies the filed/validated route. Also China ADIZ / Taiwan-Strait tension near the eastern trunk. Re-check live (§9). |
| Terrain / MORA on track | 🟧 | The south-of-Russia corridor skirts high terrain — the **Caucasus, the Zagros fringe (avoided), the Hindu Kush / Pamir / Tian Shan and the western Chinese ranges / Tibetan-Plateau edge** — where grid-MORA can exceed a loaded twin's driftdown ceiling on **both** the pax and cargo legs, forcing **pre-planned depressurisation/driftdown escape routes** on the highest segments (§6). |
| Alternate coverage (dep/enroute/dest) | 🟩 | Dep EDDM; dest **ZGSZ / ZGGG / VMMC**, weather-independent **RCTP** in typhoon season; enroute Central-Asian / western-Chinese fields — shared by both legs. Dense over China; sparser across the Central-Asian remote belt. Confirm passenger-handling capability (customs/immigration, terminal capacity) at the destination alternates for the **pax** leg, distinct from the cargo-ramp fit needed for the freighter leg. §8. |
| Curfew / slot at either end | 🟧 | EDDF slot-coordinated + **night-flight restrictions**; VHHH H24 but PRD-flow-managed and typhoon-disruption-prone — applies to both legs. Confirm on the Airport briefs (§10). |
| Fuel availability / tankering | 🟩 | Jet A-1 at both ends; no tankering driver for either leg. Fuel-freeze is a **potential** concern only on the longest/highest cold-air segments — monitor tank temp, not a standing driver (§7). |

---

## 3. Standard / preferred routing
- **Filed route string:** VAMSYS `routes.json` carries identity/fleet/CI/distance only, not a filed airway string — confirm the current-AIRAC route on the day's SimBrief OFP 🟧 — the durable pattern is **Continental Europe → SE Europe / Turkey → SOUTH of Russia via the Caucasus / Caspian / Central-Asia corridor (Turkey → Georgia/Azerbaijan → Caspian → Kazakhstan/Central Asia) → western/central China → the Pearl River Delta / Hong Kong FIR.** The practical routing is **materially longer than the direct great circle over Siberia** because Russian airspace is avoided (§9). Fly the day's validated string, not a stored airway list.
- **FIRs crossed (durable, west→east):** German upper airspace via [Langen (EDGG)](../../airspace/fir/europe/langen-edgg.md) and Karlsruhe UAC → the European continental / SE-European sequence in the [Europe airspace brief](../../airspace/europe.md) → the **Turkey/Caucasus/Caspian gateway** at the northern edge of the [Middle East / Gulf airspace brief](../../airspace/middle-east.md) (the *northern* bypass, not the Gulf core — Emirates hub-FIR detail in [Emirates (OMAE)](../../airspace/fir/middle-east/emirates-omae.md) applies only if a Gulf divert is used) → the Central-Asia / **western-and-central China** sequence in the [Asia airspace brief](../../airspace/asia.md) (China metric levels + strict ATFM) → arrival in [Hong Kong (VHHK)](../../airspace/fir/asia/hong-kong-vhhk.md).
- **One-way / level-capped segments:** RVSM **FL290–FL410** throughout (EUR / MID / APAC); **8.33 kHz** in the European sector only. **China assigns cruising levels in METRES** — the crew reads the feet-equivalent off the **China RVSM FLAS conversion table** and flies in feet, with the metric↔feet transition normally at the Chinese FIR boundary. In the Hong Kong FIR, **aircraft unable to meet RNP 10 / RNP 4 minima must flight-plan FL280 or below** (see the [Hong Kong (VHHK) FIR brief §5](../../airspace/fir/asia/hong-kong-vhhk.md)).
- **Common ATC re-routes / choke points:** European FRA loading out of EDDF; the **Caucasus/Caspian corridor** is a constrained gateway (Iran overflight also largely avoided — narrowing the usable band, with heavy GNSS interference around the Black Sea/Caucasus); **China strict ATFM** (CTOT slots, MINIT spacing, ground holding, short-notice flow restrictions) across the western/central China trunks; the **Guangzhou/Shenzhen mega-TMA boundary** and PRD flow control into VHHK.
- **Corridor discipline:** 🟧 Hold the filed/validated corridor — the south-of-Russia band is politically and procedurally constrained, and GNSS interference around the Caucasus/Black Sea makes the DME/DME/IRU cross-check a live procedure; see §6/§9.

---

## 4. Sector profile
🟧 **This is a DUAL pax + cargo pairing — two distinct sector profiles share the same durable Russia-avoidance routing (§3, §9).**

### 4a. Pax service — K5617 (A35K)
🟧 **Currently HIDDEN in live VAMSYS — should be un-hidden** (VHHH is a Premier-network pax destination point per `routes.md`, not solely a cargo hub). Eastbound, design distance **~5,560 NM** on the **assigned hero type A350-1000 (A35K)**. Pending un-hide, block time/cost index/step profile are estimated from the sibling widebody-pax long-haul pairings (EDDF–WSSS/SBGR/KLAX): a **CI 65–70** long-haul cruise, **M.82–.85**, step-climbing toward **FL380** as weight burns off. Like the cargo leg, the **pure great circle over Siberia is not flown** — the south-of-Russia corridor drives the same routing-length fuel/block premium described below for the cargo leg. Cross-reference the [A35K Dispatch pack](../../../fleet/a35k/dispatch.md) for type performance once the leg is live.

### 4b. Cargo service — K59402 (B77F / MD11 / B74F)
🟥 **This is a main-deck CARGO sector (unit 9)** — VAMSYS confirms the operated frequency (**K59402**, 7/week) is flown by **freighters only (B77F / MD11 / B74F)**. Eastbound, **~12h00–13h00** block over a **4,939 NM VAMSYS dispatch distance** at **CI 35** — a notably lower, more fuel-priority cost index than the pax long-haul routes (CI 65–70), consistent with a cargo-economics profile. The **pure great circle is ~5,000 NM over Siberia, but that line is not flown** — with Russian airspace avoided, the practical south-of-Russia routing runs **materially longer (~5,700–6,000 NM as routed)**, and that extra track is the defining feature of the pairing's block time and fuel (§9). Cruise **M.82–.85** with a step-climb toward **FL350** (VAMSYS-modelled cruise ceiling — lower than the pax widebody routes, consistent with heavier main-deck cargo payload) as weight burns off, transitioning to **metric levels** on entering Chinese airspace. Departing Frankfurt, the routing runs the Caucasus/Central-Asia corridor into a China-night transit and an arrival at Hong Kong (rotate for the day's schedule). Winds are the dominant block/burn variable across the Central-Asian and western-China trunks; **China flow control** (§3), in season **typhoon disruption** at the PRD end (§10), and standard **freighter ground-handling/loading turnaround** (no pax/crew-rest cabin considerations) are the operational drivers.

---

## 5. ETOPS / EDTO
- **Applicability — PAX (A35K, twin):** 🟧 the assigned pax hero type is a widebody twin — operator rule time **180 min** `[K Global OpsSpec 2026-07-25]` (A35K type-certified to 370 min). The pax leg shares the cargo leg's south-of-Russia corridor (§3/§9), so the same remote/high-terrain EDTO picture below applies once the pax service is un-hidden and flying.
- **Applicability — CARGO:** 🟥 **EDTO applies where the routing is over-water/remote** — the diversion-sparse Central-Asian / western-Chinese remote terrain belt, and any over-water portion (Bay of Bengal or South China Sea) the day's south-of-Russia track may include. **B77F** is a widebody twin — operator rule time **180 min** `[K Global OpsSpec 2026-07-25]` (type certified to 330 min) 🟧 **B77F-specific rule time is not yet confirmed in OpsSpec — verify before assuming the 180-min value applies**. 🟩 **MD11** (tri-jet) and **B74F** (quad) are not ETOPS-diversion-limited in the twin sense — the **ICAO EDTO adequate-aerodrome concept still applies** (any 2+-engine aeroplane). Method and definitions live in [ETOPS / EDTO Procedures](../../../flight-ops/etops-edto.md) — this brief *applies* them to both legs.
- **Entry / exit points:** OFP-specific 🟧 — the binding EDTO/escape windows are the **remote high-terrain Central-Asian/western-China belt** (where terrain, not water, drives the escape planning — §6) and any over-water crossing on the day's track; applies to both the pax and cargo services. Identify each critical point and its limiting alternate on the OFP.
- **En-route alternates (durable set — confirm live availability):** Central-Asian and western/central-Chinese fields along the corridor (type/route-specific); on the eastern end the **PRD cluster** (ZGSZ / ZGGG / VMMC) and **RCTP (Taipei)** as a weather-independent typhoon-season fallback → [`VHHH`](../../destinations/asia/hong-kong/vhhh/index.md) · [`ZGSZ`](../../destinations/asia/china/zgsz/index.md) · [`ZGGG`](../../destinations/asia/china/zggg/index.md) · [`VMMC`](../../destinations/asia/macau/vmmc/index.md) · [`RCTP`](../../destinations/asia/taiwan/rctp/index.md). Confirm passenger-handling status for the pax leg's nominated alternates (§8).
- **Critical-fuel / depressurised-escape note:** 🟥 Carry fuel for the EDTO critical-fuel scenario (decompression + engine-out driftdown to the limiting alternate, with reserves and anti-ice/APU penalties) — applies to both legs. 🟥 On the **high-terrain Central-Asian/western-China segments the depressurisation/driftdown escape route** — a laterally-offset descent down a valley/plateau corridor to a level the aircraft holds one-engine, clear of terrain — is the binding emergency-planning item where MORA exceeds the driftdown ceiling; brief it from the OFP (§6).

---

## 6. Terrain, airspace & oceanic
- **MSA / high-MORA belts on track:** 🟥 The south-of-Russia corridor skirts serious high terrain — the **Caucasus**, the **Hindu Kush / Pamir / Tian Shan**, and the **western-Chinese ranges / eastern edge of the Tibetan Plateau** — where grid-MORA can exceed a loaded twin's single-engine driftdown ceiling. On the highest segments a **pre-planned depressurisation/driftdown escape route** is mandatory route-specific planning (§5). The **Zagros** underlies the avoided Iran fringe. The eastern approaches into the PRD are low.
- **FIRs & control type:** 🟩 Continental **radar + ADS-B** across Europe, the Caucasus/Central-Asian developed FIRs, China and the Hong Kong FIR; **China runs strict centralised ATFM** and **metric levels** (§3). No routine oceanic-procedural segment on the standard south-of-Russia track (contrast the Bay-of-Bengal routings), though the day's track may include over-water portions. Datalink where available — [Datalink & Oceanic Procedures](../../../flight-ops/datalink-and-oceanic-procedures.md), [PBN and RNP Operations](../../../flight-ops/pbn-and-rnp-operations.md), [RVSM Operations](../../../flight-ops/rvsm-operations.md).
- **Oceanic / remote procedures:** 🟧 The operational "remote" discipline here is **terrain-driven** (escape routes, cold-temperature altimetry on the high fields) rather than oceanic. **GNSS jamming/spoofing** around the **Black Sea / Caucasus** (spoofed positions often centred on Crimea) makes the DME/DME/IRU cross-check and conventional-navaid fallback live procedures on the western half; localised interference also reported in the Myanmar-north / border pockets if the track runs that way (§9).

---

## 7. Fuel & payload (this pairing)
- **Critical fuel scenario:** 🟥 Sized by the EDTO critical point / terrain-escape case (§5) over the remote Central-Asian/western-China belt — applies to **both** the pax and cargo legs. This, not still-air burn, sets the reserve floor. Block/trip figures are OFP-specific 🟧, and are **driven up by the Russia-avoidance track length** (§3) on both services.
- **Fuel-freeze awareness:** 🟧 The longest/highest segments across Central Asia / the western-China plateau in winter cold-soak the fuel — monitor tank temperature against the **Jet A-1 freeze point −47 °C** on the coldest legs (both pax and cargo) and mitigate by descent to warmer air / higher Mach if it trends toward the limit. Not a standing driver like the polar routes, but a seasonal watch-item on the highest cold-air cruise.
- **Tankering economics:** 🟩 Jet A-1 available both ends; no periodic-shortage or price driver makes tankering the plan on either leg. Method: [Fuel Policy](../../../flight-ops/fuel-policy.md).
- **Payload limits — PAX (A35K):** 🟧 standard widebody-pax payload/range planning — confirm the day's TOW/payload against the A35K's payload-range once the leg is un-hidden and a reference OFP exists → [`OM B — A35K Dispatch`](../../../fleet/a35k/dispatch.md). The Russia-avoidance track length (§3) eats into payload-range margin the same way it does on the cargo leg.
- **Payload limits — CARGO:** 🟥 **This is a main-deck cargo sector** — the assigned freighter (B77F / MD11 / B74F) is payload-driven and typically MTOW-limited off EDDF, and the Russia-avoidance track length eats into payload-range at high loads. Confirm the assigned type's payload-range against the OFP → [Fleet Capability Matrix](../../../fleet/capability-matrix.md) and the type Dispatch pack ([B77F](../../../fleet/b77f/dispatch.md) · [MD11](../../../fleet/md11/dispatch.md) · [B748](../../../fleet/b748/dispatch.md) for the B74F variant). **VHHH is the cargo superhub AND a pax destination point** — both roles are first-order features of this pairing, neither an adjunct to the other.

---

## 8. Alternates
| Role | ICAO | Distance | Notes |
|---|---|---|---|
| Departure alternate | **EDDM** | short (intra-Germany) | Munich — same-country, high-capacity, all-weather (Airport brief to build 🟧). |
| En-route alternate (corridor) | Central-Asian / W-China fields | route-specific | Along the south-of-Russia corridor; type/route-specific — confirm on the OFP against terrain-escape windows (§5, §6). |
| Destination alternate | **ZGSZ** | ~20 NM N of VHHH (PRD) | [Shenzhen–Bao'an](../../destinations/asia/china/zgsz/index.md) — closest cross-boundary field (Guangzhou FIR); metric levels / PRD flow control. |
| Destination alternate | **VMMC** | ~35 NM W of VHHH (PRD) | [Macau](../../destinations/asia/macau/vmmc/index.md) — close PRD alternate (Guangzhou FIR). |
| Destination alternate | **ZGGG** | ~75 NM NW of VHHH | [Guangzhou–Baiyun](../../destinations/asia/china/zggg/index.md) — high-capacity PRD alternate. |
| Destination alternate (typhoon-independent) | **RCTP** | ~430 NM E of VHHH | [Taipei–Taoyuan](../../destinations/asia/taiwan/rctp/index.md) — weather-independent fallback when a typhoon degrades the whole PRD cluster (Taipei FIR). |

**Rationale & gaps:** The PRD packs several long-runway fields within minutes (ZGSZ/VMMC/ZGGG), so destination redundancy is high in normal weather. 🟥 The single biggest destination caveat is **typhoon disruption degrading the whole PRD cluster simultaneously** (May–Nov) — plan a weather-independent alternate further afield (RCTP) in season. Across the corridor, the Central-Asian remote belt is **sparser and terrain-limited** — the escape-route/EDTO planning (§5, §6), not field count, is the binding item there.

---

## 9. Overflight & conflict-zone (durable) — 🟥 RUSSIA-AVOIDANCE THE HEADLINE ITEM
- **Corridor & states overflown:** Germany → continental / SE Europe → **Turkey → Caucasus (Georgia/Azerbaijan) → Caspian → Central Asia (Kazakhstan and neighbours) → western/central China → the Pearl River Delta / Hong Kong FIR.** This *south-of-Russia* corridor is the durable routing. Overflight permits / state routing directives apply on the Caucasus/Central-Asia and **China** legs (China requires prior permit/approval for foreign operators) — confirm at planning.
- **Russia avoidance — 🟥 the defining durable constraint (context, not a political stance):** European-modelled operators **currently avoid Russian airspace**. The direct great circle EDDF→VHHH runs over **Siberia**; with that airspace out, the practical routing is pushed **south of Russia**, which is **materially longer than the great circle** and drives the block time, fuel and payload of the pairing. This brief states it as **durable planning context** — **the crew flies the filed/validated route** and does not make the routing decision in the cockpit.
- **Iran avoidance interaction:** 🟧 because Iranian airspace is also largely avoided (see the [Middle East brief §9](../../airspace/middle-east.md)), the usable Caucasus/Caspian band between Russia and Iran is **narrow** — a constrained gateway that concentrates traffic and is sensitive to short-notice change.
- **China ADIZ / Taiwan-Strait tension — 🟧/🟥:** the eastern trunk toward the PRD runs near the **overlapping China / Taiwan / Korea / Japan ADIZs** and the Taiwan-Strait military-activity picture; comply with the ADIZ position-reporting/flight-plan requirements of the relevant state and fly the cleared airway/level (misidentification risk if military and civil tracks converge). See the [Asia brief §9](../../airspace/asia.md).
- **GNSS jamming & spoofing — 🟥 western half.** Around the **Black Sea / Caucasus** (spoofed positions often centred on Crimea) and, if the track runs that way, the Myanmar-north / border pockets. Brief the DME/DME/IRU cross-check and conventional-navaid fallback; notify ATC early.
- **Overflight permits / diplomatic:** Caucasus/Central-Asian states and China require permits / specific routing directives — confirm lead times and any temporary-corridor conditions at planning.

> **Currency:** re-check the **ICAO Conflict Zone Information Repository, EASA CZIBs / Information Notes, state NOTAMs, ADIZ requirements, and OPSGROUP / safeairspace.net** and operator routing policy at planning — this is durable context, not live clearance. The Russia-avoidance corridor and the Caucasus gateway can change at short notice; **keep the filed route in-corridor.**

---

## 10. Hazards & watch-items
- **Seasonal:** 🟥 **Typhoon season (~May–Nov, peak Jul–Sep)** — the defining terminal hazard; tropical cyclones in the SCS/western Pacific can shut VHHH and the whole PRD cluster, force large re-routes and generate severe windshear/turbulence (Hong Kong T8+ signals drive disruption). 🟥 **Low-level windshear / terrain turbulence on the VHHH approaches** (airflow over Lantau, worst in strong gusty typhoon-season flow — managed by the airport windshear system and the regional LSWDCP). **Winter jet-stream CAT** over the high-terrain corridor and **monsoon convection** are enroute drivers. Handle tactically — [Adverse Weather and Windshear](../../../flight-ops/adverse-weather-and-windshear.md).
- **Route-specific binding hazards:** 🟥 **Russia-avoidance routing/length** (§9); **high-terrain driftdown/escape planning** on the Central-Asian/western-China segments (§6); **China strict ATFM + metric-level transition** (§3); **PRD flow control + ADIZ / Taiwan-Strait picture** (§9); **GNSS interference** on the western half (§9).
- **End-field constraints:** EDDF — slot-coordinated, **night-flight restrictions**; VHHH — H24 but PRD-flow-managed, terrain-windshear-prone and typhoon-disruption-prone. Confirm current specifics on the [EDDF](../../destinations/europe/germany/eddf/index.md) and [VHHH](../../destinations/asia/hong-kong/vhhh/index.md) Airport briefs (both baseline stubs — build out 🟧).
- **Volcanic ash:** 🟧 VAAC Tokyo covers the region (Philippine arc a distant wildcard across the Manila boundary); Icelandic ash (VAAC London) the European wildcard. Pull VA advisories at planning — [Volcanic Ash Avoidance](../../../flight-ops/volcanic-ash-avoidance.md).

---

## 11. Open items (🟧 — confirm)
- **Role/fleet** — RESOLVED as **DUAL pax + cargo**: **CARGO** confirmed active from VAMSYS `routes.json` (pulled 2026-07-25) — **K59402**, 7/week (daily), CI 35, 4,939 NM, B77F/MD11/B74F. **PAX** — **K5617** (A35K, ~5,560 NM) exists in VAMSYS but is 🟧 **currently HIDDEN — should be un-hidden** per `routes.md` (VHHH is a Premier-network pax destination point, not solely a cargo hub); confirm pax CI/frequency/allowed-fleet set once un-hidden.
- **Assigned tail** and the **filed route string** — remain OFP-specific; confirm on the day's SimBrief OFP.
- **The §9 Russia-avoidance corridor is live** — the usable Caucasus/Caspian/Central-Asia band, Iran-avoidance interaction, ADIZ requirements and GNSS-interference advisories must be re-verified every dispatch.
- **B77F EDTO rule time** — not yet confirmed in OpsSpec; confirm before assuming the 180-min widebody-twin value applies (Fleet Capability Matrix Table A) 🟧.
- **MD11 (tri-jet) / B74F (quad) EDTO** — both planned under the adequate-aerodrome concept (no twin-ETOPS diversion-time limit); confirm the operator EDTO handling at dispatch.
- **High-terrain escape routes** — the Central-Asian/western-China per-route grid-MORA and depressurisation/driftdown escape routes are route-specific; build/verify from the OFP engineering (§6).
- **China overflight permit + current FLAS metric-level table** and the metric↔feet transition point — confirm at planning (§3).
- **EDDF / VHHH / PRD / RCTP airport briefs** — currently baseline stubs; build out curfew/slot, runway, windshear and hazard detail as the airport set fills.

---

## 12. Per-flight briefing (not stored here)
The dispatch pre-flight briefing — SimBrief OFP, live METAR/TAF/NOTAM, that day's winds/levels, the **current Russia-avoidance / Caucasus-corridor picture, China ATFM measures and GNSS advisories**, tail assignment (pax or freighter), load, and the day's EDTO entry/exit and terrain-escape picture — is generated at planning (T-2h) and lives in the dispatch pack, **not** in this durable file.

---

## Sources & References
*Public URLs only. Cite origin + retrieved dates. VAMSYS mirror and in-sim charts inform content but are not listed as public citations.*

- Overflight / conflict picture (Russia avoidance, Caucasus corridor, GNSS interference) — safeairspace.net (https://safeairspace.net) (retrieved 2026-07-25)
- Conflict Zone Information Bulletins / Information Notes (per-state) and ADIZ context — EASA (https://www.easa.europa.eu/en/domains/air-operations/czibs) (retrieved 2026-07-25)
- China metric RVSM (FLAS feet-equivalent, metric↔feet transition) — SKYbrary, *China RVSM* (https://skybrary.aero/articles/china-reduced-vertical-separation-minima-rvsm) (retrieved 2026-07-25)
- China / regional ATFM (CTOT/MINIT, flow control) — ICAO APAC Regional ATFM Concept of Operations (https://www.icao.int/sites/default/files/APAC/Documents/edocs/ATM/Asia-Pacific-Regional-Air-Traffic-Flow-Management-Concept-of-Operations-version-1.0-September-2015.pdf) (retrieved 2026-07-25)
- East China Sea / Taiwan-Strait ADIZ analysis — CSIS / AMTI (https://amti.csis.org/counter-co-east-china-sea-adiz/) (retrieved 2026-07-25)
- EDTO / ETOPS concept — SKYbrary, *ETOPS* (https://skybrary.aero/articles/etops) (retrieved 2026-07-25)

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-25 | Initial build — durable EDDF–VHHH long-haul route brief. Europe → SE Europe/Turkey → **south-of-Russia corridor (Caucasus/Caspian/Central Asia — Russia-avoidance, materially longer than the ~5,000 NM Siberian great circle; durable context, crew flies the filed route)** → western/central China (metric levels + strict ATFM) → PRD / Hong Kong (VHHK); **EDTO (widebody-twin 180 min; B77F rule time pending; B748 quad adequate-aerodrome)**; high-terrain driftdown/escape belt (Caucasus/Pamir/Tian-Shan/W-China); widebody pax fleet (B77W/A359) + **freighters (B77F/B748) as VHHH is the cargo superhub**, flagged 🟧 pending VAMSYS; alternates EDDM / corridor fields / dest ZGSZ+VMMC+ZGGG + typhoon-independent RCTP; **§9 Russia-avoidance built as the headline 🟥 item + China ADIZ / Taiwan-Strait + GNSS, re-check live.** Cross-linked to OM B (Fleet Capability Matrix + B77W/A359/B77F/B748), OM E (ETOPS-EDTO / Datalink-Oceanic / PBN / RVSM / Fuel / Adverse Weather / Volcanic Ash), Airspace (Europe / Middle East / Asia general + Langen / Emirates / Hong Kong FIR) and the EDDF/VHHH/PRD/RCTP airport briefs. |
| v0.2 | 2026-07-25 | Identity/fleet/distance/CI/frequency set from live VAMSYS routes.json (source of truth); pending-VAMSYS flags cleared. **Reconciled as a CARGO route (unit 9)** — VAMSYS confirms K59402 is operated exclusively by main-deck freighters (B77F/MD11/B74F), not the previously-flagged pax widebody set (B77W/A359); §1 role/fleet, §2, §4 sector profile and §7 payload rewritten to reflect main-deck cargo operations; Russia-avoidance routing content (§3, §9) retained unchanged. |
| v0.3 | 2026-07-25 | Reconciled to routes.md design register: assigned hero type + multi-services set; EDDF-VHHH restored to dual pax+cargo. |
</content>
