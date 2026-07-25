<!--
================================================================================
  K Global — AIRFRAME PACK · DISPATCH  ·  E145 Embraer ERJ-145
  Curated layer. Anonymous · version-controlled · public sources only.
  FLAG LEGEND  🟥 hard requirement/hazard   🟧 caution/unverified   🟩 normal/confirmed
================================================================================
-->

# E145 — Embraer ERJ-145 · Dispatch

**E145 / ERJ family (own type rating)** · Regional narrowbody twin, short-sector core
**Version** v0.1 · **Updated** 2026-07-25 · **Status** Draft

> **Read-me:** How this type is dispatched at K Global. Method (fuel policy, ETOPS rules) is defined once in **OM E** — this file **applies** it to the E145. Capability values are held in the Fleet Capability Matrix (secondary/indicative table for this type) — cited, not restated. Flag legend 🟥 hard · 🟧 caution · 🟩 normal.

---

## 1. Snapshot (planning)

| Field | Value |
|---|---|
| MTOW | ~22,000 kg (LR-family variant) 🟧 `[VERIFY]` |
| OEW / Max fuel | `[VERIFY]` — variant-dependent, not yet sourced |
| Payload (K Global config) | **~50 seats**, no dedicated large-container belly cargo 🟧 `[VERIFY — VAMSYS]` |
| Typical block burn | `[VERIFY]` — no E145 reference OFP yet; regional short-sector cruise burn is materially lower than the mainline narrowbody fleet 🟧 |
| Cost index (default) | Per OM E / route economics — no E145 reference OFP CI yet 🟧 `[VERIFY]` |
| Reserve rule | Final reserve **30 min** + alternate per OM E fuel policy 🟩 `[K Global OpsSpec 2026-07-25]` |
| Contingency | **5% / ERA** per OM E fuel policy 🟩 `[K Global OpsSpec 2026-07-25]` |
| ETOPS/EDTO | Twin-engine airframe, but flown exclusively on short **regional** sectors — **no K Global EDTO rule time is applicable or approved for this type**; see §5 |

## 2. SimBrief setup

- **Airframe profile:** E145 (ERJ-145) — SimBrief E145
- **Aircraft-data overrides:** MTOW / OEW / max fuel — set to VAMSYS mirror figures once the type reseed lands 🟧 `[VERIFY]`; ceiling ~FL370; engines Rolls-Royce AE 3007 series; PBN/equip per fleet standard — regional-sector equipage (RNAV/RNP APCH) not yet confirmed for this type 🟧 `[VERIFY]`
- **Dispatch overrides:** reserve rule (final reserve 30 min), contingency 5%/ERA, fuel factor, cruise mode/sub, climb/descent per OM E; **no ETOPS/EDTO rule-time selector applies** — regional short-sector operation
- **Fuel overrides:** minfob / minfod / atc / mel / wxx / added / tankering — default unless route-specific 🟧
- Basis: VAMSYS `simbrief_overrides` for this type, pending reseed `[VERIFY — VAMSYS]`

## 3. Fuel policy applied

OM E's generic fuel policy resolves for the E145 as taxi + trip + **contingency (5% / ERA)** + alternate + **final reserve (30 min)** + any additional/holding `[K Global OpsSpec 2026-07-25]`. No K Global reference OFP has yet been flown for this type, so trip-burn and cost-index figures remain public-derived and unverified 🟧. **Tankering:** the ERJ-145's small max-fuel capacity relative to the mainline fleet gives little tankering headroom; tankering is authorised **case-by-case** per OM E `[K Global OpsSpec 2026-07-25]` but is expected to be rarely economic on this type's short regional sectors. See `../../../OM E Operations/` fuel policy.

## 4. Payload & loading

- K Global config: **~50 seats** 🟧 `[VERIFY — VAMSYS]` — group-level stub not yet broken out per type; confirm exact seat count and any belly-cargo allowance against the live VAMSYS reseed.
- Standard pax/bag weights per OM E loading policy; the ERJ-145's smaller ZFW/CG envelope than the mainline fleet warrants close attention on full-load short sectors, particularly with aft-loaded cabin configurations typical of the type's offset-aisle three-abreast layout. 🟧
- **Hot-and-high / field performance:** not yet assessed to the mainline standard for this type (see Intro §6/§7) — treat as a watch-item pending a dedicated study, especially for any regional sector serving a high-elevation field. 🟧

## 5. ETOPS / EDTO 🟥

- **Capability:** the E145 is a **twin-engine** airframe and is not intrinsically exempt from the ETOPS/EDTO construct — but K Global flies this type **exclusively on short regional sectors** within the network, where diversion time to an adequate aerodrome never approaches any EDTO threshold. **No K Global EDTO rule time is applicable or has been approved for this type** 🟩 — this is a network-design fact (short-sector regional deployment), not an unresolved OpsSpec gap.
- **Method:** the general EDTO framework is defined once in OM E — see `../../../OM E Operations/ETOPS-EDTO Procedures.md`. This file records that the framework simply does not bind on the E145's route set; revisit only if the type is ever scheduled onto a longer/thinner sector approaching an EDTO threshold.
- **En-route alternates:** selected per route from the OM E adequate-aerodrome set as for any type; no special EDTO planning is triggered on this type's current mission profile.

## 6. Route applicability

- **Cleared/typical:** short regional sectors flown by the **Regional** business unit — feeder/thin-demand routes below the density/range tier of the E-Jet pairs (E70/E75, E190/E195) and the mainline narrowbody fleet (A319/A320/A21N).
- **Watch:** confirm the type's exact K Global seat/cargo configuration against the VAMSYS reseed before publishing route economics; confirm hot-and-high field performance before scheduling into any high-elevation Regional-unit field.
- Link to OM C route briefs (planned): OM C route briefs (planned) and OM C route briefs (planned).

## 7. Dispatch watch-items

| Item | Flag | Note |
|---|---|---|
| No E145 reference OFP yet | 🟧 | Burn/CI figures are public-derived only — replace with type OFP figures when first flown |
| VAMSYS config not yet broken out | 🟧 | Group stub carries an aggregate ~30-tail figure across all five Embraer types; per-type seats/tails await a live reseed — see the [Fleet overview](../index.md) |
| Hot-and-high assessment outstanding | 🟧 | Not yet studied to the mainline standard — treat any high-elevation Regional field as unverified for this type |
| No EDTO rule time applicable | 🟩 | Confirmed by network design — type flies short regional sectors only; revisit only if mission profile changes |
| Sub-variant (STD/ER/LR/LU/XR) unconfirmed | 🟧 | Public sources describe several MTOW/fuel variants under the E145 ICAO designator — confirm which K Global operates before using weight figures for planning |
| No steep-approach capability | 🟩 | Not a steep-approach type; K Global's LCY/steep-field solution is expected to be based on the E190/E195 instead — see Fleet Capability Matrix §Open items |

---

## Sources & References
*Public URLs only. Private/OEM/add-on documents may inform content but must never be listed here.*

- Embraer — commercial aircraft (public) — https://www.embraer.com
- EASA — Type Certificate Data Sheet, Embraer EMB-135/EMB-145 family — https://www.easa.europa.eu/en/document-library/type-certificates
- SKYbrary — Embraer ERJ 145 (E145) — https://skybrary.aero/aircraft/e145
- Wikipedia — Embraer ERJ 145 family — https://en.wikipedia.org/wiki/Embraer_ERJ_145_family

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-25 | Initial draft — dispatch built from public Embraer/EASA/SKYbrary data per the task brief's data anchors; OpsSpec values applied (contingency 5%/ERA, final reserve 30 min, tankering case-by-case); no EDTO rule time applicable (short regional sectors only, confirmed by network design, not a gap); no type OFP yet (watch-item); capability values cross-linked to the Fleet Capability Matrix secondary table. |
