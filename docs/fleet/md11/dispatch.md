<!--
================================================================================
  K Global — AIRFRAME PACK · DISPATCH  ·  MD11 McDonnell Douglas MD-11F
  Curated layer. Anonymous · version-controlled · public sources only.
  FLAG LEGEND  🟥 hard requirement/hazard   🟧 caution/unverified   🟩 normal/confirmed
================================================================================
-->

# MD11 — McDonnell Douglas MD-11F · Dispatch

**MD11 / MD-11 family** · Widebody trijet freighter — main-deck cargo
**Version** v0.1 · **Updated** 2026-07-25 · **Status** Draft

> **Read-me:** How this type is dispatched at K Global. Method (fuel policy, EDTO rules) is defined once in OM E — this file **applies** it to the MD11. Capability values are held in the Fleet Capability Matrix's **secondary/indicative table** (MD-11F is a deferred type, not yet researched to the mainline standard) — cited, not restated. Flag legend 🟥 hard · 🟧 caution · 🟩 normal.

---

## 1. Snapshot (planning)

| Field | Value |
|---|---|
| OEW / MTOW | ~118,000–129,000 🟧 / ~273,300–285,988 🟧 kg (engine variant dependent — GE CF6-80C2D1F vs PW4460/4462) |
| MZFW / MLW | Not yet sourced for this pack 🟧 `[VERIFY]` |
| Max fuel | ~117,400 kg (~146,200 L) 🟧 `[VERIFY]` |
| Payload (K Global config) | **Freighter — ~91,185 kg cargo, no pax** `[VAMSYS mirror 2026-07-25]` |
| Typical block burn | No MD11 reference OFP yet — indicative only, do not assume a figure without a public reference 🟧 |
| Cost index (default) | Per OM E / route economics — no MD11 reference OFP CI yet 🟧 `[VERIFY]` |
| Reserve rule | Final reserve **30 min** + alternate per OM E fuel policy 🟩 `[K Global OpsSpec 2026-07-25]` |
| Contingency | **5% / ERA** per OM E fuel policy 🟩 `[K Global OpsSpec 2026-07-25]` |
| EDTO/ETOPS | **Trijet — not a classic-ETOPS twin.** ICAO EDTO adequate-aerodrome concept applies (2+ engines) 🟩; **operator rule time NOT set** 🟧 [operator — VERIFY] (MD-11F is a deferred type, not in OpsSpec batch 1) — see §5 |

## 2. SimBrief setup
- **Airframe profile:** MD11 — SimBrief MD11 (engine sub-type per K Global's confirmed variant, GE CF6-80C2D1F or PW4460/4462 — **not yet confirmed**) 🟧 `[VERIFY]`
- **Aircraft-data overrides:** OEW / MTOW / max fuel / max payload — set to VAMSYS mirror figures where they differ from SimBrief defaults, **once the engine variant is confirmed** (the OEW/MTOW spread in Intro §5 is engine-dependent and must not be split the difference); ceiling FL432; PBN/equip per fleet standard where applicable (RVSM — confirm per matrix secondary table; oceanic PBN not yet extended to deferred types) 🟧 `[VERIFY]`
- **Dispatch overrides:** reserve rule (final reserve 30 min), contingency 5%/ERA, fuel factor, cruise mode/sub, climb/descent per OM E; **EDTO threshold & rule selector — NOT set for this type** (see §5) — do not default to any twin/quad value without confirmation 🟧
- **Fuel overrides:** minfob / minfod / atc / mel / wxx / added / tankering — default unless route-specific 🟧
- **Freighter loadsheet:** main-deck + three-position lower-deck cargo build (no pax) — see §4
- Basis: VAMSYS `simbrief_overrides` for this type `[VAMSYS mirror 2026-07-25]`

## 3. Fuel policy applied
OM E's generic fuel policy resolves for the MD11 as taxi + trip + **contingency (5% / ERA)** + alternate + **final reserve (30 min)** + any additional/holding `[K Global OpsSpec 2026-07-25]`. No type reference OFP exists yet, so block-burn figures are not asserted here — populate once the first MD11 OFP is flown. Against ~117,400 kg max fuel and a ~91,185 kg max structural payload, the type — like the other freighters in this fleet — is **payload-vs-fuel limited** on its longest legs; watch the ZFW/fuel trade carefully given the type's smaller main-deck volume (~610 m³) constrains how payload is physically built even before weight limits bind. **Tankering:** assess Frankfurt-vs-outstation price differentials per leg; tankering is authorised **case-by-case** per OM E, weight-and-CG permitting `[K Global OpsSpec 2026-07-25]`. Exact reserve/contingency values are defined in OM E — apply, do not restate here beyond the figures above. See `../../../OM E Operations/` fuel policy.

## 4. Payload & loading 🟥
- K Global config: **freighter — ~91,185 kg cargo, no passengers** `[VAMSYS mirror 2026-07-25]`. **Main-deck cargo** (via the forward main-deck side cargo door, ~610 m³ volume) **plus three lower-deck cargo positions — forward, center, and aft** (LD3-container-capable) — one more lower-deck zone than the twin freighters in this fleet (777F/748F have two).
- **Main-deck loading / CG distinction 🟥:** as with the other main-deck freighters in this fleet, payload sits largely on the main deck, high and along the fuselage — this demands active **CG management** (pallet-position planning, floor-loading/pallet-weight limits) through all fuel states. The MD-11's **aft-biased cruise CG design** (a fuel-ballast tank in the horizontal stabilizer shifts CG aft in cruise for efficiency, emptying before landing to move CG forward — Intro §2/§6) makes the loadsheet CG **interact directly with the type's known handling sensitivity**: a load plan that leaves the CG toward the aft limit compounds the reduced-pitch-damping/LSAS-dependent handling trait, particularly in the landing phase. Loadsheet CG discipline on this type is not just a structural check — it is a handling-safety input. 🟥
- **Center gear (§ Intro 4):** normal configuration is center-gear-extended; loadsheet and performance planning assume this configuration. Center-gear-retracted operation (special weight/performance data) is out of scope for routine K Global dispatch.
- **Hot-and-high / long-field penalties:** not yet researched to the mainline standard (matrix secondary table) 🟧 — provisionally treat as Moderate pending confirmation; the type's inherently faster landing speeds (Intro §6) apply regardless of field elevation.

## 5. EDTO / ETOPS 🟥
- **Capability:** the MD-11F is a **trijet, not a classic-ETOPS twin** — loss of any one engine still leaves two operating, a fundamentally different risk profile from a twin's single-engine-inoperative case. Per ICAO Annex 6, the **EDTO adequate-aerodrome concept applies to aeroplanes with 2 or more engines**, so the trijet is not exempt from EDTO planning even though it carries no twin-style ETOPS diversion-time certification. This mirrors the treatment given to the quad types (A346/A388/B748) in the Fleet Capability Matrix, not the twins.
- **Operator rule time — OPEN 🟧:** the MD-11F sits in the matrix's **secondary/deferred table**, marked indicative throughout and **not yet researched to the mainline standard**. No OpsSpec batch has set an operator rule time or adequate-aerodrome policy for this type. **K Global decision (this pack): leave the MD11 EDTO/adequate-aerodrome policy 🟧 pending research and OpsSpec**, exactly as done for the B77F and the quad types — a blank beats a guess, and governance forbids inventing an operator approval by inference.
- **Method:** defined once in OM E — see `../../../OM E Operations/ETOPS-EDTO Procedures.md`. Capability/approval values, once researched, belong in [Fleet Capability Matrix](../capability-matrix.md). This file only records the type application.
- **En-route alternates:** selected per route from the OM E adequate-aerodrome set; no MD11 reference OFP alternates yet on file 🟧 — populate when the first type OFP is flown and a policy is set.
- **Critical-fuel note:** given the type's smaller fleet role (4 tails) and undetermined EDTO policy, do not plan an EDTO-rule-dependent sector on an assumed value 🟥.

## 6. Route applicability
- **Cleared/typical:** shorter- to medium-haul cargo sectors within the ~3,500 NM structural-payload range — the type's niche within the 9 Cargo unit's network is a network-planning decision (OM C), not fixed by this pack; its smaller main-deck volume and 4-tail fleet size point toward thinner-volume or shorter-stage lanes relative to the 777F/748F.
- **Watch:** the **undetermined EDTO/adequate-aerodrome policy** — do not plan an EDTO-rule-dependent sector on an assumed value 🟥; main-deck CG/load-plan discipline, sharpened by the type's handling sensitivity (§4) 🟥; the type's inherently faster landing speeds narrowing runway-length margin at every field (Intro §6) 🟧; confirm engine variant (GE vs PW) before relying on any performance figure.
- Link to OM C route briefs (planned): OM C route briefs (planned) and OM C route briefs (planned).

## 7. Dispatch watch-items

| Item | Flag | Note |
|---|---|---|
| MD11 EDTO/adequate-aerodrome policy not researched | 🟥 | Deferred type — matrix secondary table 🟧 indicative only; do not assume any rule time or diversion policy |
| Engine variant not confirmed | 🟧 | GE CF6-80C2D1F vs PW4460/4462 — materially different OEW/MTOW; confirm before SimBrief/performance work |
| No MD11 reference OFP yet | 🟧 | Burn/CI/alternates not yet sourced — populate with type OFP figures once first flown |
| Main-deck loading / CG — handling interaction | 🟥 | Loadsheet CG is a handling-safety input on this type, not just structural (Intro §2, §6) — aft CG compounds the LSAS-dependent pitch sensitivity |
| Faster standard landing speed | 🟧 | ~10–20 kt faster than comparable widebodies — narrows runway-length/approach margin at every field |
| Center gear configuration | 🟧 | Confirm center-gear-extended is assumed in all performance/loadsheet planning; retracted ops out of scope |
| Tankering opportunity/risk | 🟧 | Case-by-case per OM E; check price differentials + CG, mindful of the smaller main-deck volume |

---

## Sources & References
*Public URLs only. Private/OEM/add-on documents may inform content but must never be listed here.*

- Wikipedia — McDonnell Douglas MD-11 — https://en.wikipedia.org/wiki/McDonnell_Douglas_MD-11
- ICAO — ETOPS & EDTO technical awareness (Annex 6 EDTO; 2+ engine applicability) — https://www.icao.int/sites/default/files/WACAF/MeetingDocs/2025/Seminar%20on%20Aircraft/AI_SPECIFIC_APPROVAL-2025-ETOPS-EDTO_Part1_v1_0_OPT.pdf
- SKYbrary — Cargo Compartment Fire (general) — https://skybrary.aero/articles/cargo-compartment-fire

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-25 | Initial draft — dispatch built from public Wikipedia/ICAO data + VAMSYS mirror; OpsSpec values applied (contingency 5%/ERA, final reserve 30 min, tankering case-by-case); **EDTO/adequate-aerodrome policy left 🟧 pending research** (deferred type, treated like the quads, not inherited from any twin); main-deck loading/CG discipline explicitly tied to the type's known handling sensitivity 🟥; engine variant (GE vs PW) flagged open; no type OFP yet (watch-item). |
