<!--
================================================================================
  K Global — AIRFRAME PACK · INTRO  ·  SF34 Saab 340B
  Curated layer. Anonymous · version-controlled · public sources only.
  FLAG LEGEND  🟥 hard requirement/hazard   🟧 caution/unverified   🟩 normal/confirmed
================================================================================
-->

# SF34 — Saab 340B · Intro

**SF34 · Saab 340B — TURBOPROP** · Small regional feeder, Regional network (EDDF-only)
**Version** v0.1 · **Updated** 2026-07-25 · **Status** Draft

> **Read-me:** Type reference for X-Plane, not a substitute for the aircraft's own documentation. Figures carry provenance tags; verify `[VERIFY]` items before use. **This is a TURBOPROP, and the smallest/most regional airframe in the K Global fleet** — different powerplant, systems, handling and network role from every jet pack in this group; do not brief it from a CRJ/E-jet mental model. Capability values (EDTO, RVSM, PBN, LVO, RECAT, RFF) are **not researched to mainline standard** for this type — the Fleet Capability Matrix carries the SF34 in its **secondary/indicative table** only, every cell 🟧. Flag legend 🟥 hard · 🟧 caution · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| ICAO type designator | **SF34** 🟩 |
| Manufacturer model | Saab 340B (second-generation production block, 340B-160 to 340B-359) 🟩 |
| Manufacturer | **Saab AB** (Linköping, Sweden) — originally a Saab/Fairchild Aircraft (US) partnership for the 340A; Fairchild exited the programme in 1985 and Saab became sole producer from the 340B onward 🟩 |
| Type-certificate | **EASA.A.068** (SAAB SF340A, 340B) 🟩 — FAA-validated for US operators; K Global treats EASA.A.068 as the primary public reference |
| Variants operated | Saab 340B `[VERIFY — VAMSYS]` — the manufacturer group also produced the earlier 340A (lower-thrust CT7-5A2 engines) and the later 340B Plus (active noise/vibration control, some extended wingtips); K Global's fleet is the 340B production block, not A or B Plus, pending VAMSYS confirmation |
| Engines | **2 × General Electric CT7-9B** free-turbine turboprops, 1,870 shp (1,390 kW) each for takeoff 🟩 — conventional power-lever/condition-lever/prop-lever control, **not FADEC** in the sense of the mainline jet fleet; confirm exact engine-control architecture before training to a "digital" assumption 🟧 `[VERIFY]` |
| Propellers | 4-blade, constant-speed, fully-feathering, reversible — **Dowty**-family propellers on K Global's tails per fleet convention `[VERIFY — VAMSYS]`; the type was also produced with Hamilton Standard 14RF19 propellers depending on production run/customer option — confirm which supplier fits K Global's two tails 🟧 `[VERIFY]` |
| ICAO code letter | **B** — wingspan 21.44 m (smaller footprint than every jet pack in this group, which sit at Code C) 🟩 |
| Config (K Global) | **Regional** business unit, EDDF-based only (not multi-hub) 🟩 — typical 33–36 seat single-class cabin, most commonly configured 34 🟩; K Global's exact cabin/cargo split `[VERIFY — VAMSYS]` |
| OEW / MTOW | ~8,618 kg average operational empty weight 🟩 / ~13,608 kg (30,000 lb, 340B post-Service-Bulletin MTOW) 🟩 — see §5 |
| Max payload | ~3,400 kg (7,500 lb) 🟩 |
| Service ceiling | **25,000 ft (FL250)** 🟩 — well below the jet fleet; drives a materially different route/terrain/weather planning picture (see Dispatch) |
| Typical cruise | ~283 kt / 524 km/h 🟩 |
| Range (rep. payload) | ~730 NM long-range cruise with 34 pax + baggage (manufacturer data via Wikipedia) 🟩; other public figures cite up to ~900 NM under reduced-payload/ferry conditions — variant- and payload-dependent, treat the higher figure as 🟧 `[VERIFY]` |
| ETOPS/EDTO | **Not applicable** — twin turboprop, short-haul feeder, FL250 ceiling; no oceanic/remote-route case exists for this type. Matrix secondary table marks it "Twin" 🟧 indicative only — see Dispatch §5 |
| RECAT-EU / wake / RFF | **Not in the mainline Fleet Capability Matrix tables** — see the matrix's **secondary/indicative table** (🟧 throughout): RECAT-EU F / ICAO wake **Light (L)** (indicative); RFF category not tabulated for this type — see §4 |

## 2. Modelling & profile mapping 🟥

The three-way mapping — **no external source records this; it is a K Global decision:**

> **Real type:** SF34 (Saab 340B, CT7-9B) → **SimBrief profile:** SF34 (Saab 340B) → **Sim model:** Carenado Saab 340B for X-Plane 11 🟧 `[VERIFY]`

The dispatch profile (SimBrief SF34) models the correct airframe/engine family and drives the OFP burn. The candidate X-Plane model is identified in Sim-Model but **not yet formally approved** by K Global management (marked 🟧 `[VERIFY]`) — same open posture as the other regional packs pending a decision. Any fuel-burn comparison between the SimBrief OFP and the flown model must be validated in Sim-Model before this pack is Verified. Cross-ref Dispatch §2 (SimBrief setup) and the Sim-Model file for the candidate model and its fidelity notes.

## 3. Role in the network

**Small regional turboprop** operating in the **Regional** business unit only `[VERIFY — VAMSYS]` — the thinnest, shortest-sector tier of the K Global network, below even the CRJ7/CRJ9/CRJ-200 regional jets and the Dash 8/ATR turboprops. Regional remains an **EDDF-only** unit (unlike City, Intercontinental, Executive, Charter/Vacation and Cargo, which have gone multi-hub) — the SF34 is not based or scheduled outside Frankfurt. With only **2 tails** (the entire Saab manufacturer group at K Global, per the Fleet Index — unlike the multi-type Bombardier/Embraer aggregates, this count is SF34-specific) it is one of the smallest fleets K Global operates, likely covering a small number of short, thin EDDF spokes rather than a scheduled trunk.

## 4. Dimensions & ground footprint

- Length **19.73 m** (64 ft 9 in); height **6.97 m** (22 ft 10 in); wingspan **21.44 m** (70 ft 4 in); wing area 41.81 m² 🟩
- **ICAO Code B** — smaller stand/taxiway footprint than any jet pack in this group (Code C); simplifies remote-stand and small-apron operations at thin regional fields. 🟩
- **RFF category:** not tabulated in the Fleet Capability Matrix (secondary table carries no RFF column for deferred types). By ICAO Annex 14 length band (18–<24 m), the 19.73 m length would indicate **Cat 4** — stated here as an **indicative, non-matrix-sourced** estimate only 🟧 `[VERIFY]`; confirm against the matrix once the turboprop packs are researched to mainline standard.
- Low-wing, twin-turboprop configuration; single-aisle cabin with a forward airstair/door and a small belly/nose cargo hold. **Pressurised cabin** — the overhead panel carries a dedicated pressurisation/emergency panel with a manual **PRESS DUMP** switch, confirming this type is not an unpressurised light turboprop despite its size; see QRH Ch 9. 🟩
- Conventional tail (not T-tail) — no deep-stall/tailplane-blanking consideration of the kind flagged on the T-tail jets in this group; the type does, however, carry a **stick shaker AND stick pusher** stall-protection pair (confirmed by the overhead test panel's STALL 1/2 test switches) — a more assertive stall-protection fit than some regional jets. 🟩

## 5. Weights

| | kg |
|---|---|
| OEW | ~8,618 (average operational empty weight) 🟩 |
| MTOW | ~13,608 (30,000 lb, 340B post-SB 340-51-033/Mod 3655) 🟩 — baseline 340A figure was 13,154 kg; confirm K Global's tails carry the higher 340B MTOW `[VERIFY — VAMSYS]` |
| Max payload | ~3,400 (7,500 lb) 🟩 |
| Max fuel | ~2,580 (5,690 lb) 🟩 |
| MZFW / MLW | Not found in the public sources surveyed 🟧 `[VERIFY — EASA.A.068]` |

K Global operates a single Saab 340B sub-type (2 tails) `[VERIFY — VAMSYS]`; confirm the exact production block (avoid conflating with the lower-thrust 340A or the later 340B Plus) against EASA.A.068 or the VAMSYS mirror before use in performance planning 🟧 `[VERIFY]`.

## 6. Performance

- Service ceiling **25,000 ft (FL250)** — materially lower than every jet pack in this group; weather/terrain/icing avoidance is done by routing and timing, not by climbing over it. 🟥
- Cruise speed ~283 kt (524 km/h); rate of climb ~2,010 ft/min; takeoff distance ~1,285 m (4,220 ft) at representative weight (manufacturer data) 🟩.
- Fuel consumption ~0.94 kg/km (manufacturer data); no K Global reference OFP yet on file 🟧 `[VERIFY]` — dispatch figures are public-Saab/Wikipedia-derived only (watch-item).
- **Cost index:** set per OM E / route economics; no SF34 reference OFP CI yet 🟧 `[VERIFY]`.
- **Turboprop powerplant note 🟥:** unlike every other pack in this group, thrust is delivered through **free-turbine turboprops driving constant-speed, fully-feathering, reversible propellers** — power management is via **power lever + condition lever** (and prop lever, per the flown model's control layout), not a thrust lever alone. **Autofeather** is a safety-critical system: if torque on either engine drops below the armed threshold during a critical phase (approximately takeoff through initial climb), the system automatically drives that propeller to feather to remove drag from a failed engine — see QRH Ch 1/Ch 2 memory item. Do not brief this type using jet-engine EICAS/thrust-lever mental models.
- **Hot-and-high:** not yet assessed by K Global; the matrix's secondary table does not carry a hot-and-high column for this type. Piston/turboprop-era short-field aircraft are often more altitude/temperature-sensitive than jets on a per-seat basis — treat as an assumption, not a confirmed rating, flag 🟧 pending assessment.

## 7. Validation summary

| Domain | Flag | Note |
|---|---|---|
| Turboprop vs jet handling | 🟥 | This is the **only turboprop with the smallest airframe** in the group's built packs — power/condition-lever management, autofeather, and prop/airframe ice protection are fundamentally different from the CRJ/E-jet packs; do not cross-brief |
| Flight-deck generation | 🟧 | Early-generation **CRT-based EFIS** (EADI/EHSI, Rockwell Collins EFD-86) paired with conventional analog engine gauges and a switch/lever-heavy overhead panel — this is **neither** a modern glass cockpit **nor** a fully analog "steam gauge" flight deck; brief it as its own generation, not either extreme |
| Range vs network Regional sectors | 🟩 | ~730 NM long-range-cruise structural range comfortably covers the short, thin Regional/EDDF-only sector set |
| ETOPS/EDTO adequacy | 🟩 | Not applicable — twin turboprop, FL250 ceiling, no oceanic/remote route case for this type |
| Icing / prop & airframe ice protection | 🟥 | Turboprop icing discipline (prop de-ice, airframe/tail anti-ice, holdover-time management) is a core operational item for this type — see Dispatch §4 and QRH Ch 9 |
| Stand / gate compatibility | 🟩 | Code letter B — smaller footprint than the jet packs in this group |
| Modelling fidelity (sim vs real) | 🟧 | Approved X-Plane model not yet confirmed — see Sim-Model |

## 8. Related pack files

**Built:** [Dispatch](dispatch.md) · [Sim-Model](sim-model.md) · [Checklist](checklist.md) · [QRH](qrh.md) · [Livery](livery.md) · [Pack index](index.md)
Fleet Index → [overview](../index.md) · [Capability values (secondary/indicative table)](../capability-matrix.md)

---

## Sources & References
*Public URLs only. Private/OEM/add-on documents may inform content but must never be listed here.*

- Wikipedia — Saab 340 — https://en.wikipedia.org/wiki/Saab_340
- EASA — Type Certificate Data Sheet EASA.A.068 (SAAB SF340A, 340B) — https://www.easa.europa.eu/en/document-library/type-certificates/noise/easaa068-saab-340
- Wikipedia — General Electric T700/CT7 — https://en.wikipedia.org/wiki/General_Electric_T700

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-25 | Initial draft — built from public Wikipedia/EASA TCDS data; flagged as a TURBOPROP and the smallest airframe in the group (🟥); flight-deck generation corrected (early CRT-based EFIS, not full glass nor fully analog); capability values cross-linked to the Fleet Capability Matrix's secondary/indicative table; candidate sim model (Carenado Saab 340B, X-Plane 11) identified pending management approval `[VERIFY]`. |
