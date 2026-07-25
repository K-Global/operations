<!--
================================================================================
  K Global — AIRFRAME PACK · INTRO  ·  MD11 McDonnell Douglas MD-11F
  Curated layer. Anonymous · version-controlled · public sources only.
  FLAG LEGEND  🟥 hard requirement/hazard   🟧 caution/unverified   🟩 normal/confirmed
================================================================================
-->

# MD11 — McDonnell Douglas MD-11F · Intro

**MD11 / MD-11 family — own type rating** · Widebody **trijet freighter**; the fleet's smallest and oldest-generation cargo type, filed under **OM B Boeing** (McDonnell Douglas merged into Boeing in 1997)
**Version** v0.1 · **Updated** 2026-07-25 · **Status** Draft

> **Read-me:** Type reference for X-Plane 11, not a substitute for the aircraft's own documentation. Figures carry provenance tags; verify `[VERIFY]` items before use. Capability values (EDTO, RVSM, PBN, LVO, RECAT, RFF) are not restated here — see the Fleet Capability Matrix **secondary/indicative table** (the MD-11F sits in the deferred-type table, 🟧 throughout, not yet researched to the mainline standard). The MD-11 is **not** a Boeing-designed airframe (McDonnell Douglas heritage, DC-10 derivative) but is filed under OM B Boeing per K Global's manufacturer grouping since the 1997 merger. Flag legend 🟥 hard · 🟧 caution · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| ICAO type designator | **MD11** |
| Family / type rating | McDonnell Douglas **MD-11** — own type rating, distinct from the DC-10 predecessor and from every Boeing mainline type in this fleet 🟩 |
| Variants operated | **MD-11F freighter only** — one designator, single variant, **main-deck cargo, no passengers** `[VAMSYS mirror 2026-07-25]` |
| Engines (modelled) | **3** — 2 wing pylon-mounted + **1 tail-mounted (S-duct through the vertical fin/tailcone)** — a **trijet**, DC-10-derived layout 🟩; **General Electric CF6-80C2D1F** or **Pratt & Whitney PW4460/4462** — K Global's actual engine variant **not yet confirmed** 🟧 `[VERIFY]` |
| Flight deck | **Two-pilot glass cockpit** (EFIS/EIS, dual FMC/FMS) — **no flight engineer**; a generational step up in automation from the three-crew DC-10 it replaced 🟩 |
| ICAO code letter | Wingspan **51.97 m** sits right at the Code D/E boundary (52 m) — treated as **Code D** pending confirmation 🟧 `[VERIFY]` |
| Config (K Global) | **Freighter — main-deck cargo, no seats**; ~91,000 kg max structural payload `[VAMSYS mirror 2026-07-25]` |
| MTOW / OEW | MTOW **~273,300–286,000 kg** (variant/engine dependent) 🟧; OEW **~118,000–129,000 kg** (engine dependent — GE variant heavier) 🟧 `[VERIFY]` |
| Max payload | **~91,185 kg** (freighter, public reference) 🟧 `[VERIFY]` |
| Max fuel | **~117,400 kg** (~146,200 L) 🟧 `[VERIFY]` |
| Service ceiling | **FL432** (43,200 ft) 🟩 |
| Typical cruise | **M0.83** (M0.88 max) 🟩 |
| Range (rep. payload) | **~3,500 NM** at max structural payload (public reference ~3,533 NM); order **~4,000 NM** is a rounded planning figure 🟧 `[VERIFY]` |
| EDTO/ETOPS | **Trijet — not a classic-ETOPS twin construct.** ICAO EDTO adequate-aerodrome concept applies (2+ engines); **operator rule time NOT set** — see Dispatch §5 & matrix |
| RECAT-EU / wake / RFF | Matrix **secondary (indicative) table**: RECAT-EU **B** (Upper Heavy) / ICAO **H** 🟧 indicative, unconfirmed; **RFF Cat 9** (length 61.2–61.6 m → 61–<76 m band) 🟧 — see [Fleet Capability Matrix](../capability-matrix.md) |

## 2. Modelling & profile mapping 🟥

The three-way mapping — **no external source records this; it is a K Global decision:**

> **Real type:** MD11 (MD-11F, 3 × CF6-80C2D1F or PW4460/4462) → **SimBrief profile:** MD11 → **Sim model:** X-Plane 11 **Rotate MD-11 (Freighter edition)** (candidate) — approved model 🟧 `[VERIFY]`

Unlike the B77F pack's open question of *whether a freighter variant exists at all* on the flown add-on generation, the candidate model here explicitly ships a dedicated **Freighter edition** as a distinct product from the Passenger edition — a materially lower-severity gap. What remains open is (1) confirming K Global's installed copy is genuinely the **Freighter** edition, (2) confirming which **engine variant** (GE CF6 vs PW4000) the installed copy represents against K Global's actual fleet engines, and (3) running the formal test-and-approve pass. None of this is resolved yet — flagged 🟧 `[VERIFY]` throughout. Resolve in Sim-Model before this pack is Verified. Cross-ref Dispatch §2 (SimBrief setup) and the Sim-Model file.

**Flag — trijet + tail (S-duct) #2 engine + LSAS handling + freighter 🟥.** Four traits define this type's operational character and recur throughout this pack: **(1)** it is a **trijet** (2 wing + 1 tail-mounted engine on an S-duct through the vertical fin) — a materially different engine-failure and EDTO posture from every twin and quad in the K Global fleet; **(2)** the **tail-mounted #2 engine** has a distinct inlet/duct geometry and failure-asymmetry profile from a wing engine; **(3)** the type carries **genuinely demanding handling qualities** — a smaller horizontal tailplane than its DC-10 predecessor, an aft-shifting cruise CG (fuel-ballast tank in the stabilizer, for fuel efficiency) and reduced pitch damping, compensated by the **Longitudinal Stability Augmentation System (LSAS)** — a real, public, and material 🟥 handling item, not a cosmetic caution; and **(4)** it is a **freighter** — main-deck cargo, no passengers, distinct loading/CG discipline. See §6 and the QRH for detail.

## 3. Role in the network

The **smallest and oldest-generation type in the 9 Cargo business unit** (4 tails) — a legacy trijet freighter sitting well below the 777F (35 tails, main-deck long-haul workhorse) and the 747-8F (part of the 21-tail 748 fleet, quad heavy) in both size and modernity. Main-deck cargo only, no passengers. Its niche is thinner-volume or shorter-stage cargo routes where the larger twin/quad main-deck freighters are oversized, or where the type's independent three-engine layout and smaller footprint suit a specific lane — exact route assignment is an OM C / network-planning decision, not fixed by this pack. Based at the Frankfurt (EDDF) superhub within the multi-hub cargo network, consistent with the rest of the cargo fleet.

## 4. Dimensions & ground footprint

- Length **61.6 m** (GE-powered) / **61.2 m** (PW-powered) — variant dependent 🟧 `[VERIFY]`; wingspan **51.97 m** (right at the Code D/E boundary); height **17.65 m** 🟩
- **ICAO Code D (provisional)** 🟧 `[VERIFY]` — a narrower footprint than the Code E 777F/748F, but still a large widebody; confirm stand/taxiway suitability at each scheduled field before assuming a smaller-type slot is adequate.
- **RFF Cat 9** (61.2–61.6 m → 61–<76 m band, just inside the threshold) — same fire-cover tier as the 777F/748F 🟧; confirm Cat 9 cover at all scheduled fields. See [Fleet Capability Matrix](../capability-matrix.md) (secondary table).
- **Wake — RECAT-EU B (Upper Heavy) / ICAO H:** 🟧 indicative only (matrix secondary/deferred table, not yet researched to mainline standard) — do not treat as confirmed.
- **Freighter loading footprint 🟥:** main-deck cargo access via a large **forward main-deck side cargo door** (aft of the flight deck) onto a main-deck cargo hold of roughly 610 m³ — smaller in volume than the 777F/748F main deck — plus **lower-deck holds in three positions (forward, center, aft)**, LD3-container-capable. Three lower-deck fire/loading zones (vs. two on the twins in this fleet) is a genuine configuration difference — confirm all three positions in any loading, fire, or door check.
- **Ground gear footprint 🟥:** a **five-point landing gear** — nose gear + two wing-mounted main gears + a **center (2-wheel) gear mounted under the rear fuselage**, a DC-10/trijet-heritage trait not shared by any twin or quad type in this fleet. Normal K Global operation is with the center gear **extended** (standard configuration); center-gear-retracted operation requires special performance data and weight limits and is **out of scope** for routine ops. The extra gear leg affects ramp/turn geometry and pavement-loading distribution (ACN/PCN) — confirm at constrained fields.

## 5. Weights

| | kg |
|---|---|
| OEW | ~118,000–129,000 (engine variant dependent — GE heavier than PW) 🟧 `[VERIFY]` |
| MZFW | Not yet sourced for this pack 🟧 `[VERIFY]` |
| MTOW | ~273,300–285,988 (standard); ER variant up to ~285,988 🟩 |
| MLW | Not yet sourced for this pack 🟧 `[VERIFY]` |
| Max payload | ~91,185 (freighter) 🟧 `[VERIFY]` |
| Max fuel | ~117,400 (~146,200 L) 🟧 `[VERIFY]` |

The OEW/MTOW spread reflects the **engine choice** (GE CF6-80C2D1F airframes run heavier than PW4460/4462 airframes) — confirm K Global's actual engine variant before treating either end of the range as authoritative. MZFW/MLW are not yet sourced publicly for this pack and must be added once a type OFP or a confirmed public reference is available.

## 6. Performance

- Service ceiling **FL432** (43,200 ft); typical cruise **M0.83** (M0.88 max) 🟩.
- **Cost index:** set on the FMC PERF INIT page; default CI per OM E economy policy 🟧 `[VERIFY]` — no MD11 reference OFP CI yet on file.
- **Field length:** long — public reference takeoff distance at MTOW is on the order of **~9,725 ft (2,964 m)**, ER variant **~10,800 ft (3,292 m)** 🟧 `[VERIFY]` — broadly comparable to the 777F/748F in this fleet.
- **Handling / landing-speed penalty 🟥:** the MD-11 carries one of the **highest wing loadings of any airliner**, and — combined with its smaller tailplane and aft-biased cruise CG design (§2) — flies standard **landing speeds roughly 10–20 kt faster** than comparable widebodies. This directly narrows the runway-length and approach-stability margin versus the twins/quads in this fleet and is a genuine performance caution, not just a handling note — confirm landing distance against the actual approach speed for the day's weight/config, not a generic widebody assumption.
- **Hot-and-high:** not yet researched to the mainline standard (matrix secondary table, indicative only) 🟧; provisionally assess **Moderate** sensitivity pending confirmation — the three-engine layout gives reasonable thrust margin, but the high wing loading and landing-speed penalty above apply regardless of field elevation/temperature.

## 7. Validation summary

| Domain | Flag | Note |
|---|---|---|
| **Handling qualities (relaxed longitudinal stability / LSAS)** | 🟥 | Smaller tailplane + aft-shifting cruise CG (fuel-ballast tank), reduced pitch damping, compensated by LSAS; landing speeds 10–20 kt faster than comparable types — genuine hazard item, not cosmetic. See QRH Ch 9/Ch 1. |
| Trijet engine layout / tail (#2) engine | 🟧 | Distinct inlet geometry (S-duct) and failure-asymmetry profile vs. a wing engine; not yet modelled/verified on the candidate sim |
| Field performance / high landing speed | 🟧 | Long field at MTOW; landing-speed penalty narrows margin — public-derived, not OFP-verified |
| EDTO/trijet diversion policy | 🟧 | Not a classic ETOPS twin; EDTO adequate-aerodrome concept applies but **operator rule time not set** — treat like the quad types, no assumed value |
| Stand / gate & RFF | 🟧 | Code letter D (provisional, borderline E); RFF Cat 9 — confirm at all scheduled fields |
| Freighter loading discipline | 🟥 | Main-deck cargo (side door, ~610 m³) + three lower-deck positions (fwd/center/aft) — active main-deck CG management; distinct from pax loading |
| Five-point gear (center gear) | 🟧 | Nose + 2 main + center fuselage gear — confirm ramp/turn geometry and ACN/PCN at constrained fields |
| Modelling fidelity (sim vs real) | 🟧 | Candidate model (Rotate MD-11, Freighter edition) unconfirmed/untested — see Sim-Model |

## 8. Related pack files
**Built:** [Dispatch](dispatch.md) · [Sim-Model](sim-model.md) · [Checklist](checklist.md) · [QRH](qrh.md) · [Livery](livery.md) · [Pack index](index.md) · Fleet Capability Matrix: [Fleet Capability Matrix](../capability-matrix.md) (secondary table) · Fleet Index → [overview](../index.md)

---

## Sources & References
*Public URLs only. Private/OEM/add-on documents may inform content but must never be listed here.*

- Wikipedia — McDonnell Douglas MD-11 — https://en.wikipedia.org/wiki/McDonnell_Douglas_MD-11
- Rotate — MD-11 Freighter product page (X-Plane.Org Store) — https://store.x-plane.org/Rotate-MD-11-Freighter_p_1580.html
- Rotate Simulation — developer site — https://rotatesim.com/
- SKYbrary — Cargo Compartment Fire (general, Class E main-deck concept) — https://skybrary.aero/articles/cargo-compartment-fire
- SKYbrary — Aircraft type designators / dimensions reference — https://skybrary.aero/

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-25 | Initial draft — built from public Wikipedia/Rotate data + VAMSYS mirror + Fleet Capability Matrix secondary table; trijet layout, tail (#2) S-duct engine, LSAS/handling hazard, and freighter main-deck/five-point-gear configuration all captured and flagged 🟥; engine variant (GE vs PW) and sim-model edition both open `[VERIFY]`; no type OFP yet (figures `[VERIFY]` pending). |
| v0.2 | 2026-07-25 | §8 updated — Sim-Model, Checklist, QRH and Livery built; pack complete, no dead links. |
