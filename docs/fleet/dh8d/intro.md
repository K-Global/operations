<!--
================================================================================
  K Global — AIRFRAME PACK · INTRO  ·  DH8D De Havilland Canada Dash 8 Q400
  Curated layer. Anonymous · version-controlled · public sources only.
  FLAG LEGEND  🟥 hard requirement/hazard   🟧 caution/unverified   🟩 normal/confirmed
================================================================================
-->

# DH8D — De Havilland Canada Dash 8 Q400 · Intro

**DH8D · TURBOPROP 🟥 — high-speed turboprop, not a jet** · Regional turboprop, Regional network
**Version** v0.1 · **Updated** 2026-07-25 · **Status** Draft

> **Read-me:** Type reference for X-Plane, not a substitute for the aircraft's own documentation. Figures carry provenance tags; verify `[VERIFY]` items before use. Capability values (EDTO, RVSM, PBN, LVO, RECAT, RFF) are **not researched to mainline standard** for this type — the Fleet Capability Matrix carries the DH8D in its **secondary/indicative table** only, every cell 🟧. **Flag 🟥 — this is a turboprop**, the only powerplant family in this pack: two shaft-turbine engines each driving a constant-speed propeller through a reduction gearbox, not a turbofan. Crew procedures, systems and QRH content differ materially from the CRJ/Embraer jets documented elsewhere in this group — do not cross-brief. Flag legend 🟥 hard · 🟧 caution · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| ICAO type designator | **DH8D** |
| Manufacturer model | De Havilland Canada (formerly Bombardier) **DHC-8-400 "Dash 8 Q400"** 🟩 |
| Powerplant type 🟥 | **TURBOPROP** — 2 × **Pratt & Whitney Canada PW150A** free-turbine turboprop engines, each driving a **six-blade, constant-speed, fully-feathering propeller** (publicly documented as a Dowty/Collins Aerospace R408) 🟩; rated in the **5,071 shp (3,781 kW)** class per public spec tables 🟩 — exact normal vs uptrim takeoff-rating split not confirmed against a primary type-certificate source `[VERIFY]` |
| Type-certificate holder | De Havilland Aircraft of Canada (Dash 8 programme, formerly Bombardier) 🟩 — Transport Canada TCDS **A-142** |
| Variants operated | Dash 8 Q400 (DHC-8-400 series) — single sub-type `[VERIFY — VAMSYS]`; the Q400 is the stretched, high-speed member of the wider Dash 8 family (Q100/200/300 are older, slower, lower-capacity types **not** operated by K Global per the Fleet Index) |
| Cockpit crew | **Two pilots** 🟩 |
| ICAO code letter | **C** — wingspan 28.4 m 🟩 |
| Config (K Global) | Regional network, **6 Regional business unit** — **2 tails** `[VAMSYS mirror 2026-07-25]`; seat/cargo breakout not yet confirmed `[VERIFY — VAMSYS]` — public Q400 seating spans a **typical 78-seat (30 in pitch)** to a **maximum 90-seat (28 in pitch)** high-density configuration 🟩 |
| MTOW / OEW | **30,481 kg** (67,200 lb) 🟩 / **17,819 kg** (39,284 lb) 🟩 |
| MZFW / MLW | MZFW **~26,308 kg** (OEW + max payload 8,489 kg, derived — not an independently published MZFW figure) 🟧 `[VERIFY — TCDS]`; MLW not found in surveyed public sources 🟧 `[VERIFY — TCDS A-142]` |
| Max fuel | **6,526 L** (1,724 US gal) 🟧 — the public spec table this is drawn from merges figures across the Q-series family; cross-check before use `[VERIFY]` |
| Service ceiling | **25,000 ft** standard; **27,000 ft (FL270)** on the drop-down-oxygen-mask-equipped variant 🟩 |
| Typical cruise | **Up to ~360 KTAS** (667 km/h) — publicly marketed as the **fastest turboprop in production** 🟩 — flag 🟥 **high-speed turboprop**: cruise performance and descent planning sit closer to a regional jet than to a conventional turboprop; do not brief it with slow-turboprop assumptions |
| Range (rep. payload) | **~1,100 NM** (2,040 km) 🟩 |
| ETOPS/EDTO | Regional short-haul type — **not EDTO-planned**; twin-turboprop, not a driftdown/EDTO case at K Global's stage lengths — see Dispatch & matrix |
| RECAT-EU / wake / RFF | **Not in the mainline Fleet Capability Matrix tables** — see the matrix's **secondary/indicative table** (🟧 throughout): RECAT-EU E / ICAO wake M (indicative); RFF category not tabulated for this type — see §4 |

## 2. Modelling & profile mapping 🟥

The three-way mapping — **no external source records this; it is a K Global decision:**

> **Real type:** DH8D (De Havilland Canada Dash 8 Q400, PW150A) → **SimBrief profile:** DH8D → **Sim model:** FlyJSim Q4XP for X-Plane 11/12 🟧 `[VERIFY]`

The dispatch profile (SimBrief DH8D) should model the correct twin-turboprop airframe/engine family and drive the OFP burn once type-level fuel figures are confirmed. The candidate X-Plane model is identified in Sim-Model but **not yet formally approved** by K Global management (marked 🟧 `[VERIFY]`) — same open posture as the other regional packs pending a decision. **Flag 🟥 turboprop + high-speed:** this mapping must not be confused with a jet profile — SimBrief turboprop performance modelling (prop efficiency, torque-limited climb, autofeather logic) is a materially different calculation from the CRJ/Embraer jets in this group, and the Q400's unusually high cruise speed for a turboprop makes generic "slow turboprop" fuel-planning assumptions equally wrong. Any fuel-burn comparison between the SimBrief OFP and the flown model must be validated in Sim-Model before this pack is Verified. Cross-ref Dispatch §2 (SimBrief setup) and the Sim-Model file for the candidate model and its fidelity notes.

## 3. Role in the network

Regional turboprop operating in the **6 Regional** business unit `[VAMSYS mirror 2026-07-25]` — a short-field, short-stage-length complement to the City/Regional jet fleet (CRJ7/CRJ9/CRJ2), used where a smaller-gauge, shorter-runway-capable aircraft suits the route rather than a jet. **2 tails** confirmed against the Fleet Index (not an aggregate figure — this type's count is broken out on its own, unlike the four-type Bombardier group). See the [Fleet overview](../index.md) for the wider Regional Jets/turboprops group note, and OM C route briefs (planned) under OM C route briefs (planned).

## 4. Dimensions & ground footprint

- Length **32.8 m** (107 ft 9 in); height **8.4 m** (27 ft 5 in — tall due to the **T-tail**); wingspan **28.4 m** (93 ft 3 in); wing area 64 m² 🟩
- **ICAO Code C** — standard regional-turboprop stands/gates; no wingspan-restricted taxiway concerns. 🟩
- **RFF category:** not tabulated in the Fleet Capability Matrix (secondary table carries no RFF column for deferred types). By ICAO Annex 14 length band (28–<39 m), the 32.8 m length would indicate **Cat 6** — stated here as an **indicative, non-matrix-sourced** estimate only 🟧 `[VERIFY]`; confirm against the matrix once this type is researched to mainline standard.
- Single-aisle, forward passenger door, one Type II/III overwing exit, plus forward and aft baggage compartments (both external-access only, opening outward). **T-tail** configuration, shared in character with the CRJ7/CRJ9 T-tail note elsewhere in this group — tailplane sits clear of the propeller wake but raises the same **deep-stall / pitch-up awareness** consideration common to T-tail types; see QRH Ch 1 and Ch 7.
- **Engine nacelle intake bypass/guard doors 🟧:** twin-turboprop nacelles of this type commonly incorporate an intake guard that can be selected to reduce ingestion of precipitation, ice and debris during ground operations and in icing conditions — a turboprop-specific ground-handling item with no jet-engine equivalent in this group. Confirm the flown model represents this `[VERIFY]`.

## 5. Weights

| | kg |
|---|---|
| OEW | 17,819 🟩 |
| MZFW | ~26,308 (derived — OEW + max payload) 🟧 `[VERIFY — TCDS A-142]` |
| MTOW | 30,481 🟩 |
| MLW | Not found in surveyed public sources 🟧 `[VERIFY — TCDS A-142]` |
| Max fuel | 6,526 L (1,724 US gal) 🟧 `[VERIFY]` — source table merges Q-series figures |
| Max payload | 8,489 kg (18,716 lb) 🟩 |

K Global operates a single Q400 sub-type `[VERIFY — VAMSYS]`; confirm cabin configuration (seat count) and any operator weight-variant options against the VAMSYS mirror or Transport Canada TCDS A-142 before use in performance planning 🟧 `[VERIFY]`.

## 6. Performance

- Service ceiling **25,000 ft** (27,000 ft/FL270 on the drop-down-oxygen variant); cruise up to **~360 KTAS** — publicly marketed as the fastest turboprop in production 🟩. **Flag 🟥 high-speed turboprop:** treat descent-planning and speed/altitude coordination closer to a regional jet than a conventional turboprop — this type does not behave like the slower Saab 340B or ATR types elsewhere in this group.
- **Powerplant 🟥:** 2 × PW150A shaft-turbine engines, each in the **5,071 shp (3,781 kW)** class per public spec tables 🟩; each drives a six-blade constant-speed, fully-feathering propeller through a reduction gearbox 🟩. Engine control is split across two flight-deck levers — a **power lever** (commands engine power via FADEC, and propeller blade angle in the ground/reverse range) and a **condition lever** (sets propeller governing RPM, selects power ratings, commands manual feather, and controls fuel on/off for start and shutdown) — a control architecture common to modern turboprops and materially different from the single-thrust-lever jets in this group. `[VERIFY]` exact figures against TCDS/VAMSYS.
- **Autofeather 🟥:** an automatic propeller-feathering function is provided to reduce drag promptly after an engine failure — arming and trigger logic is a turboprop-specific safety system with no jet equivalent; see QRH Ch 2/Ch 1. Exact trigger thresholds are not restated here — confirm against the flown model / type training source `[VERIFY]`.
- Average fuel flow — no public reference surveyed and **no K Global reference OFP** yet on file 🟧 `[VERIFY]` — dispatch figures are public-Wikipedia/manufacturer-spec-derived only (watch-item).
- **Cost index:** set per OM E / route economics; no DH8D reference OFP CI yet 🟧 `[VERIFY]`.
- **Field length:** takeoff ~1,425 m (4,675 ft); landing ~1,289 m (4,230 ft) (public spec table, MTOW/MLW, ISA, SL) 🟩 — notably short-field capable relative to the jets in this group, a key Regional-network role driver.
- **Icing 🟥:** turboprops of this class are commonly certified for flight into known icing conditions, using pneumatic de-ice boots on the wing/tail leading edges and nacelle inlets plus electrically heated propellers, pitot/static probes, AOA vanes and windshields — re-expressed general turboprop knowledge, not a confirmed type-specific certification statement for K Global's tails 🟧 `[VERIFY — TCDS A-142]`. See Dispatch §5 and QRH Ch 9.
- **Hot-and-high:** not yet assessed by K Global; the matrix's secondary table does not carry a hot-and-high column for this type. Turboprops generally retain good relative thrust margin at altitude/temperature versus similarly sized jets, but this is an assumption, not a confirmed rating — flag 🟧 pending assessment.

## 7. Validation summary

| Domain | Flag | Note |
|---|---|---|
| Powerplant identity | 🟥 | **TURBOPROP** — 2× PW150A, six-blade constant-speed prop; do not brief with turbofan/jet QRH or checklist assumptions from elsewhere in this group |
| High-speed cruise | 🟥 | ~360 KTAS is unusually fast for a turboprop — descent/speed planning should not default to "slow turboprop" assumptions |
| Hot-and-high / field performance | 🟧 | Not assessed; no matrix column for this type — treat as unconfirmed |
| Range vs network Regional sectors | 🟩 | ~1,100 NM comfortably covers short-stage Regional-network sectors |
| ETOPS/EDTO adequacy | 🟧 | Regional short-haul twin-turboprop; not EDTO-planned; matrix marks EDTO applicability indicative only |
| Icing / de-ice discipline | 🟥 | Pneumatic boot + electric anti-ice architecture (general turboprop knowledge, re-expressed) — confirm against TCDS before training to any specific limitation |
| Stand / gate compatibility | 🟩 | Code letter C — standard regional footprint |
| Modelling fidelity (sim vs real) | 🟧 | Approved X-Plane model not yet confirmed — see Sim-Model |

## 8. Related pack files

**Built:** [Dispatch](dispatch.md) · [Sim-Model](sim-model.md) · [Checklist](checklist.md) · [QRH](qrh.md) · [Livery](livery.md) · [Pack index](index.md)
Fleet Index → [overview](../index.md) · [Capability values (secondary/indicative table)](../capability-matrix.md)

---

## Sources & References
*Public URLs only. Private/OEM/add-on documents may inform content but must never be listed here.*

- Wikipedia — De Havilland Canada Dash 8 — https://en.wikipedia.org/wiki/De_Havilland_Canada_Dash_8
- Transport Canada — Type Certificate Data Sheet A-142 (DHC-8 series) — https://wwwapps.tc.gc.ca/saf-sec-sur/2/nico-celn/c_d.aspx?lang=eng&aprv_num=A-142
- Wikipedia — Pratt & Whitney Canada PW100 (covers PW150A) — https://en.wikipedia.org/wiki/Pratt_%26_Whitney_Canada_PW100
- De Havilland Aircraft of Canada — Dash 8-400 — https://dehavilland.com/en/aircraft/dash-8-400

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-25 | Initial draft — built from public Wikipedia/Transport Canada TCDS/Pratt & Whitney Canada data, informed (re-expressed, not copied) by general public turboprop-systems knowledge; capability values cross-linked to the Fleet Capability Matrix's secondary/indicative table; turboprop + high-speed-cruise premise flagged 🟥 throughout; sim model candidate (FlyJSim Q4XP) identified 🟧 `[VERIFY]`; MZFW derived (not independently published) and flagged. |
