# EDDF – RJTT · Route Briefing
### Frankfurt – Tokyo (Haneda)

**Flight number(s):** K51105 (A380-800, 5/wk) · K52055 (747-8i, daily) · cargo K59452 (777F) · **Direction:** Eastbound (EDDF → RJTT) · **Service days:** 5/wk (A380-800) / daily (747-8i) / 7/wk (cargo)
<!-- No radio callsigns in OM content (governance §1.3). Flight numbers are commercial identifiers and OK; do not add an ATC callsign. -->

**Version** v0.2 · **Updated** 2026-07-25 · **Status** Draft

> **Read-me:** Durable reference for the city pair — standing routing, ETOPS, alternates and hazards. Not a clearance and not the day's plan: file and fly the SimBrief/current-AIRAC route with that day's winds and levels. Live wx/NOTAM/conflict bulletins are pulled at planning (§12). Open 🟧 items in §11. Flag legend 🟥 restriction/hazard · 🟧 caution · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| City pair | EDDF → RJTT (Frankfurt/Main → Tokyo–Haneda) |
| Flight number(s) | **Two pax services + cargo:** **K51105** (A380-800) · **K52055** (747-8i) · **K59452** (cargo, 777F) `[routes.md design register]` |
| Frequency | **K51105 5/wk (A380-800) · K52055 daily (747-8i) · K59452 7/wk (cargo)** `[routes.md design register / VAMSYS routes.json, pulled 2026-07-25]` |
| Distance | **5,052 NM** — VAMSYS dispatch distance `[VAMSYS routes.json, pulled 2026-07-25]` 🟧 shorter than the ~5,350 NM Siberian great circle cited previously — VAMSYS may not model the Russia-avoidance southern-routing add-on; treat as the VAMSYS planning figure, confirm the day's actual routed distance on the OFP (§3/§9, §11). |
| Typical cruise / step | M.84–.85; step **FL310 → FL340 → FL360 → FL380** (FL380 confirmed as the VAMSYS-modelled cruise level) |
| Cost index (default) | **CI 70** `[VAMSYS routes.json, pulled 2026-07-25]` |
| Block time | ~**12h30–13h30** routing-dependent (Russia-avoidance track is longer than the GC) 🟧 |
| Fleet | **Assigned: A380-800** (K51105, 5/wk) **· 747-8i** (K52055, daily) · **Allowed:** A359 · A388 · A346 · B748 · B77W · B789 · A35K · A339 (widebody pax set); **cargo (K59452): 777F** → [`OM B — A388`](../../../fleet/a388/dispatch.md) · [`OM B — B748`](../../../fleet/b748/dispatch.md) · [Fleet Capability Matrix](../../../fleet/capability-matrix.md) |
| ETOPS / EDTO | **EDTO applicable — operator rule time 180 min** (widebody twin) 🟥 — see §5 |
| Sector type | Ultra-long-haul · **EDTO** · trans-Asian (Russia-avoidance southern routing) |

---

## 2. Validation summary

| Domain | Flag | Note |
|---|---|---|
| Range vs fleet capability | 🟧 | 5,052 NM (VAMSYS dispatch distance) is comfortably within the cleared widebody-pax fleet's range (A359/A388/A346/B748/B77W/B789/A35K/A339), **but the Russia-avoidance routing may add materially to the day's flown distance/burn beyond the VAMSYS figure** — confirm the day's OFP TOW/payload against the *flown* (not VAMSYS) track. |
| ETOPS/EDTO adequacy | 🟩/🟧 | Operator **180-min** widebody-twin rule time applies. The **southern continental routing keeps a dense diversion network** (Central Asia/China/Korea/Japan), so EDTO is *not* the binding driver except on the **Yellow Sea / final over-water approach to Japan**; a **high-latitude alternative** would reintroduce a genuine oceanic/near-polar EDTO problem (§5). |
| Overflight / conflict-zone risk | 🟥 | **Russia-overflight avoidance** shapes the whole routing (§9); **North Korea (ZKKP) avoided**; **overlapping China/Korea/Japan ADIZ** and Taiwan-Strait activity near the NE-Asia approach; **border GNSS interference** pockets. Live & perishable — re-check (§9). |
| Terrain / MORA on track | 🟥 | Southern routing overflies the **Tien Shan / Pamir / western-China high terrain and the Himalaya-belt fringe** — the world's highest enroute MORA; **pre-planned depressurisation/driftdown escape routes** apply (Asia brief §7). Japanese Alps + Fuji at the destination end. |
| Alternate coverage (dep/enroute/dest) | 🟩/🟧 | Dep EDDM; dest RJAA/RJBB; enroute RKSI + the dense China/Korea network. Adequate; **RJTT and RJBB have no OM C brief yet** (§8). |
| Curfew / slot at either end | 🟧 | EDDF slot-coordinated + night restrictions; **RJTT is slot-controlled with a night-movement/"Haneda curfew" regime and a noise-abatement over-bay approach structure** — confirm on the Airport briefs (§10). |
| Fuel availability / tankering | 🟩 | Jet A-1 at both ends; no tankering driver. Carry the routing-length + ITCZ-free convective/typhoon holding pad (§7, §10). |

---

## 3. Standard / preferred routing
- **Filed route string:** VAMSYS `routes.json` does not carry a filed airway string (identity/fleet/CI/distance only — see §1); confirm the current-AIRAC route on the day's SimBrief OFP 🟧 — **representative planning geometry only:** `EDDF → SE Europe → Türkiye (LTAA) → Caucasus/Caspian → Central Asia (Turkmenistan/Uzbekistan/Kazakhstan/Kyrgyzstan) → western China (Ürümqi ZWUQ) → China interior trunks → E-China (Shanghai ZSHA) → Yellow Sea → Incheon (RKRR) → Fukuoka (RJJJ), Tokyo ACC → RJTT`. Do **not** substitute waypoints — fly the day's validated string.
- **FIRs crossed (indicative, Russia-avoidance southern routing):** departure [Langen (EDGG)](../../airspace/fir/europe/langen-edgg.md) and the European upper-airspace picture in the [Europe airspace brief](../../airspace/europe.md); the trans-Türkiye/Caucasus/Caspian transition touches the [Middle East airspace brief](../../airspace/middle-east.md) at its northern edge; the Central-Asia → China → Korea → Japan core is the [Asia airspace brief](../../airspace/asia.md); the destination FIR is **Fukuoka (RJJJ)** — the single ICAO FIR covering all Japan, with **Tokyo ACC** the sector containing RJTT/RJAA — see [Tokyo (RJJJ)](../../airspace/fir/asia/tokyo-rjjj.md). The **high-latitude alternative** (should it ever be filed) reintroduces the [Arctic](../../airspace/arctic.md) near-polar picture.
- **One-way / level-capped segments:** RVSM **FL290–FL410** region-wide; 🟥 **China assigns cruising levels in METRES** (RVSM metric FLAS) — the metric↔feet transition occurs at the China FIR boundary in the adjacent FIR; brief the FLAS table (Asia brief §4, [RVSM Operations](../../../flight-ops/rvsm-operations.md)). Fixed ATS-route network throughout Asia — no Free Route Airspace.
- **Common ATC re-routes / choke points:** 🟥 **China strict ATFM/flow control** — CTOT slots, MINIT spacing, ground holding and short-notice flow restrictions across the Chinese metroplex FIRs; Central-Asia trunk capacity; **Yellow-Sea / Incheon-to-Kanto handover** density; **RJTT Tokyo TMA** arrival flow (over-bay noise-abatement routings, tidal runway-config changes).
- **Corridor discipline:** 🟥 hold the filed track precisely where it runs adjacent to Russian and North Korean airspace and through the overlapping ADIZs (§9); comply with any ADIZ position-reporting requirement on the East-China-Sea/Yellow-Sea routes.

---

## 4. Sector profile
🟧 **This pairing runs two distinct passenger services plus a cargo working.** The **A380-800 (K51105, 5/wk)** is the four-class Premier Hub connector; the **747-8i (K52055, daily)** is the everyday high-frequency widebody service; a main-deck **777F cargo working (K59452, 7/wk)** operates the same city pair with its own payload/EDTO picture. Both pax services share the routing/hazard picture below (design register: the company Knowledge base).

Eastbound ultra-long-haul. On the **direct great circle (~5,350 NM)** the natural track crosses Siberia; because **European-modelled operators currently avoid Russian overflight**, the **practical filed routing runs south of Russia** and is materially longer (block ~12h30–13h30, routing-dependent) than the VAMSYS-modelled dispatch distance of **5,052 NM** (§1, §9). Cruise **M.84–.85** with a conventional step-climb (**FL310 → FL340 → FL360 → FL380**, at **CI 70**) as fuel burns off and China's metric-level allocation permits. The trans-Asian track chases the clock eastbound into a next-day arrival at Tokyo; the day's winds (the Asian subtropical jet in winter) drive the optimum track, levels and burn — filed against that day's winds, not this durable string. A **high-latitude alternative** exists in principle (over the top, near-polar) but is longer still and reintroduces the oceanic/near-polar EDTO, fuel-freeze and datalink picture of the polar routes ([Polar & High-Latitude Operations](../../../flight-ops/polar.md)) — not the standard plan for this pair.

---

## 5. ETOPS / EDTO
- **Applicability:** 🟥 **EDTO — operator rule time 180 min** (A359/B77W are widebody twins; type capability is well beyond — A359 to 370 min, B77W to 330 min — but the leg is planned to the operator **180 min**). Method and definitions live in [ETOPS / EDTO Procedures](../../../flight-ops/etops-edto.md) — this brief *applies* them; capability/approval values are in the [Fleet Capability Matrix](../../../fleet/capability-matrix.md).
- **Where EDTO actually bites:** 🟧 the **southern continental routing is diversion-rich** (Central Asia, China, Korea and Japan all provide fields within short range), so the classic ETOPS ring is *not* the binding constraint across most of the track. The genuine remote/over-water windows are the **Yellow Sea and the final Pacific-facing approach to the Kanto terminal area**, plus any **diversion-sparse high-terrain segment** over western China where the constraint is terrain-driftdown, not over-water range (§6). Identify the critical point and its alternate on each OFP.
- **En-route alternates (EDTO / enroute):**
  - [**RKSI — Incheon**](../../destinations/asia/south-korea/rksi/index.md) — NE-Asia / Yellow-Sea enroute alternate, the last major field before the Japan coast-in.
  - **China network** (e.g. Shanghai–Pudong ZSPD, Beijing–Capital ZBAA, Ürümqi and the interior fields) — dense continental coverage on the China leg; briefs to build 🟧 (see Asia brief §8).
  - [**RJAA — Narita**](../../destinations/asia/japan/rjaa/index.md) — NE-Asia node / coast-in alternate at the destination end.
- **Critical-fuel / depressurised-escape note:** 🟥 over the **western-China / Tien Shan / Himalaya-belt high terrain** the binding emergency case is **depressurisation/engine-out driftdown clearing terrain** (grid-MORA can exceed a loaded twin's one-engine driftdown ceiling) — the **pre-planned escape route**, not the direct track, is the survivable path (Asia brief §7/§10). Over water (Yellow Sea/Japan approach) the EDTO critical-fuel scenario governs. Confirm the operator EDTO approval and the day's ETP/escape-route on the OFP.

---

## 6. Terrain, airspace & oceanic
- **MSA / high-MORA belts on track:** 🟥 on the southern routing, the **Tien Shan, Pamir/Karakoram and the northern fringe of the Himalaya/Tibetan Plateau** across Central Asia and western China are the **highest enroute terrain on Earth** (plateau 4,000–5,000 m; peaks beyond 7,000–8,000 m) — grid-MORA drives **route-specific depressurisation/driftdown escape planning** (Asia brief §7). At the destination end, the **Japanese Alps (~3,000 m) and Mt Fuji (3,776 m)** sit near the Kanto terminal area (RJJJ brief §8).
- **FIRs & control type:** continental **radar + ADS-B** across Europe, Türkiye/Caucasus, the Central-Asian states, China, Korea and over the Japanese landmass; **procedural pockets** are not a feature of this routing (the Fukuoka *oceanic* block lies on the Pacific side, off-track for a westerly arrival). **China metric levels + strict ATFM** are the defining regional procedure (Asia brief §4/§6, [RVSM Operations](../../../flight-ops/rvsm-operations.md), [PBN and RNP Operations](../../../flight-ops/pbn-and-rnp-operations.md)).
- **Oceanic / remote procedures:** 🟧 limited — the only genuinely remote stretches are the **Yellow Sea and the coast-in to Japan**; standard datalink discipline (CPDLC where available) applies — [Datalink & Oceanic Procedures](../../../flight-ops/datalink-and-oceanic-procedures.md). Should a high-latitude alternative ever be flown, the full oceanic/near-polar/datalink regime of the polar routes applies instead.

---

## 7. Fuel & payload (this pairing)
- **Critical fuel scenario:** 🟥 sized by whichever binds on the day — the **terrain-driftdown escape** over the western-China high terrain, or the **EDTO over-water critical point** on the Yellow Sea / Japan approach (§5). Carry the escape-route and ETP fuel from the OFP, not still-air burn.
- **Routing-length reserve:** 🟥 the **Russia-avoidance track is materially longer than the GC**, so block fuel is driven by the *flown* distance and the day's jet — plan against the validated OFP string, and carry a pad for **China ATFM ground/enroute holding** and **NE-Asia typhoon-season** deviations (§10).
- **Tankering economics:** 🟩 Jet A-1 both ends; no periodic-shortage or price driver makes tankering the plan here. Method: [Fuel Policy](../../../flight-ops/fuel-policy.md).
- **Payload limits:** 🟧 the long flown distance pushes TOW up — confirm the day's payload against MTOW/performance for the *flown* track; trading payload for contingency fuel is a direct swap on a leg this length. Type performance via the [Fleet Capability Matrix](../../../fleet/capability-matrix.md).

---

## 8. Alternates
| Role | ICAO | Distance | Notes |
|---|---|---|---|
| Departure alternate | **EDDM** | short (intra-Germany) | [EDDM — Munich](../../destinations/europe/germany/eddm/index.md) — same-country, high-capacity, all-weather. |
| En-route alternate | **RKSI** | Yellow Sea / pre-coast-in | [RKSI — Incheon](../../destinations/asia/south-korea/rksi/index.md) — last major NE-Asia field before Japan; H24. |
| En-route alternate | **China network** | China leg | Shanghai–Pudong (ZSPD), Beijing–Capital (ZBAA), Ürümqi and interior fields — dense coverage; **metric levels + flow control**; briefs to build 🟧 (Asia brief §8). |
| Destination alternate | **RJAA** | ~30–35 NM NE of RJTT | [RJAA — Narita](../../destinations/asia/japan/rjaa/index.md) — two-field Tokyo pairing; NE-Asia node. |
| Destination alternate (secondary) | **RJBB** | ~210 NM SW (Kansai) | Osaka–Kansai — weather-independent of the Kanto area; **no OM C brief yet** 🟧 (RJJJ brief §9). |

**Rationale & gaps:** The Tokyo destination pairing is strong — **RJAA (Narita)** gives a close two-field Kanto option and **RJBB (Kansai)** a weather-independent field ~210 NM SW that clears a Tokyo-area typhoon/low-visibility event. Enroute, **RKSI** is the natural last-resort field before the Japan coast-in, backed by the dense China/Korea network. 🟧 **RJTT (Haneda) itself and RJBB have no OM C airport briefs yet** — build RJTT as a priority (it is a planned hub end) and RJBB if it becomes a standing alternate. Note **RJTT is slot-controlled with a night-curfew/noise regime** — confirm the current picture on the Airport brief.

---

## 9. Overflight & conflict-zone (durable)
- **Corridor & states overflown:** Germany → SE Europe → Türkiye → Caucasus/Caspian → the Central-Asian states → China → Korea → Japan (Russia-avoidance southern routing). Several states require **overflight permits** for foreign operators (**China** in particular) — confirm at planning.
- **Russia-overflight avoidance — 🟥 the defining durable feature of this pair:** European-modelled operators **currently avoid Russian airspace**, so the direct great-circle-over-Siberia track is **not flown**; the practical routing runs **south of Russia** (Central Asia → China → Korea → Japan) and is materially longer. **This is stated as standing operational context, not a political position** — the crew files and flies the routing on the day's OFP and does not make a routing judgement in the cockpit. A high-latitude alternative (over the top) is the other Russia-avoiding option and is longer still.
- **Conflict / risk zones near track:** 🟥 **North Korea (Pyongyang FIR, ZKKP) — avoided** (unannounced ballistic-missile activity; route around it on the NE-Asia approach); **overlapping China/Korea/Japan ADIZ and Taiwan-Strait military activity** near the East-China-Sea/Yellow-Sea segment — comply with ADIZ position-reporting and fly the cleared airway/level; **border GNSS jamming/spoofing** pockets on the Central-Asia/western-China gateways (cross-check DME/DME/IRU). Full picture in the [Asia airspace brief](../../airspace/asia.md) §9 — **live and perishable**.
- **Overflight permits / diplomatic:** **China** requires prior permit/approval for foreign operators; other Central-Asian states per state. Confirm lead times at planning.

> **Currency:** re-check safeairspace.net / OPSGROUP, the ICAO Conflict Zone Information Repository, EASA CZIBs (North Korea), ADIZ requirements and state NOTAMs at planning — this is durable context, not live clearance. Keep the filed route in-corridor.

---

## 10. Hazards & watch-items
- **Seasonal:** 🟥 **NW-Pacific / typhoon season (~May–Nov, peak Jul–Sep)** — tropical cyclones regularly affect the Tokyo/Kanto area and force terminal closures, holding and large re-routes (RJJJ brief §11); plan weather-independent alternates and a holding pad in season. 🟥 **Winter subtropical/polar-jet CAT** over Japan and the Asian high terrain — severe clear-air turbulence, especially near the mountains. 🟥 **Volcanic ash** — Japan has many active volcanoes (Sakurajima and others); **VAAC Tokyo** is the responsible advisory centre — pull VA advisories at planning ([Volcanic Ash Avoidance](../../../flight-ops/volcanic-ash-avoidance.md)). Monsoon convection across the South/SE-Asian fringe of some routings.
- **Route-specific binding hazards:** 🟥 **Russia-avoidance routing/length** (§4/§9); **China metric levels + strict ATFM/flow control** (§3/§6); **high-terrain driftdown/escape** over Central Asia/western China (§6); **overlapping ADIZ + North Korea avoidance** (§9); **border GNSS interference** (§9).
- **End-field constraints:** EDDF — slot-coordinated, night-flight restrictions; **RJTT — slot-controlled, night-movement/curfew regime, over-bay noise-abatement approaches, tidal runway-config changes and Tokyo-TMA density**. Confirm current specifics on the [EDDF](../../destinations/europe/germany/eddf/index.md) Airport brief and the RJTT brief (to build 🟧). See also [Adverse Weather and Windshear](../../../flight-ops/adverse-weather-and-windshear.md).
- **Other:** routing-length payload economics (§7) — a live load-control item on a leg this long.

---

## 11. Open items (🟧 — confirm)
- **Flight number(s)** and **service days** — RESOLVED: **K51105** (also K52055; cargo K59452), 5/week, from VAMSYS `routes.json` (pulled 2026-07-25).
- **Fleet assignment** — RESOLVED from VAMSYS: widebody pax set A359/A388/A346/B748/B77W/B789/A35K/A339; confirm the day's tail at dispatch.
- **VAMSYS distance vs Russia-avoidance flown distance** — VAMSYS models 5,052 NM; this is shorter than the ~5,350 NM Siberian great circle, so it may not fully capture the southern-routing add-on — confirm the day's actual routed distance/burn on the OFP.
- **Filed route string** — the Russia-avoidance southern routing is represented as planning geometry only; take the exact string from the day's validated SimBrief/current-AIRAC OFP.
- **China overflight permit / ATFM measures** — confirm the operator's China permit and the day's CTOT/MINIT/flow restrictions at planning.
- **§9 overflight picture is live** — Russia-avoidance, North Korea (ZKKP), ADIZ activity and GNSS-interference re-verified at planning; do not treat this file's snapshot as current.
- **Terrain driftdown/escape routes** — build/verify route-specific from ENR charts and the OFP for the Central-Asia/western-China high-terrain segment.
- **RJTT (Haneda) and RJBB (Kansai) airport briefs** — not built yet; build RJTT as a priority (planned hub end).
- **China metric-level FLAS table** — confirm the day's metric levels and the metric↔feet transition points.

---

## 12. Per-flight briefing (not stored here)
The dispatch pre-flight briefing — SimBrief OFP, live METAR/TAF/NOTAM, that day's winds/levels, the validated Russia-avoidance string, China ATFM/flow measures, the day's ETP/escape-route and fuel-temp picture, tail assignment and load — is generated at planning (T-2h) and lives in the dispatch pack, **not** in this durable file.

---

## Sources & References
*Public URLs only. Cite origin + retrieved dates. VAMSYS mirror and in-sim charts inform content but are not listed as public citations.*

- Overflight / conflict picture (Russia avoidance, North Korea, ADIZ) — safeairspace.net (https://safeairspace.net) (retrieved 2026-07-25)
- Russia-overflight-avoidance context for European operators — EASA Conflict Zone Information Bulletin, Russia (https://www.easa.europa.eu/en/domains/air-operations/czibs) (retrieved 2026-07-25)
- ETOPS/EDTO method — FAA AC 120-42B, *Extended Operations (ETOPS and Polar Operations)* (https://www.faa.gov/regulations_policies/advisory_circulars) (retrieved 2026-07-25)
- Japan FIR / RVSM / oceanic structure — JCAB AIP Japan, ENR (https://aisjapan.mlit.go.jp/) (retrieved 2026-07-25)
- China metric RVSM (FLAS) — SKYbrary, *China Reduced Vertical Separation Minima (RVSM)* (https://skybrary.aero/articles/china-reduced-vertical-separation-minima-rvsm) (retrieved 2026-07-25)
- Volcanic ash advisory responsibility (VAAC Tokyo) — ICAO / JMA VAAC Tokyo (https://ds.data.jma.go.jp/svd/vaac/data/) (retrieved 2026-07-25)
- Frankfurt / German AIP ENR (route & airspace) — DFS AIP (https://aip.dfs.de) (retrieved 2026-07-25)

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-25 | Initial build — durable EDDF–RJTT (Frankfurt–Tokyo/Haneda) route brief. ~5,350 NM GC over Siberia, but **Russia-overflight-avoidance southern routing (Central Asia → China → Korea → Japan)** stated as the durable flown track (materially longer), framed as standing operational context not a political position. Destination FIR Fukuoka (RJJJ)/Tokyo ACC; EDTO operator rule time 180 min (widebody twin), diversion-rich continental routing with the over-water Yellow-Sea/Japan-approach and high-terrain driftdown as the real emergency drivers; China metric levels + strict ATFM; overlapping ADIZ + North Korea avoidance + border GNSS interference (§9, live); typhoon (May–Nov) + winter-jet CAT + volcanic ash (VAAC Tokyo); Tokyo-TMA/RJTT slot-curfew. Cross-linked to OM B (Fleet Capability Matrix), OM E (ETOPS/RVSM/PBN/Datalink/Fuel/Volcanic-Ash/Polar/Adverse-Weather), Airspace (Europe/Asia/Middle East/Arctic + Tokyo RJJJ FIR + Langen EDGG) and Airport briefs (EDDF/EDDM/RKSI/RJAA; RJTT/RJBB to build). Fleet, flight numbers, filed string 🟧 pending VAMSYS. |
| v0.2 | 2026-07-25 | Identity/fleet/distance/CI/frequency set from live VAMSYS routes.json (source of truth); pending-VAMSYS flags cleared. |
| v0.3 | 2026-07-25 | Reconciled to routes.md design register: assigned hero type + multi-services set; EDDF-VHHH restored to dual pax+cargo. |
