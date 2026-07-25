<!--
================================================================================
  K Global — AIRFRAME PACK · DISPATCH  ·  BCS3 Airbus A220-300
  Curated layer. Anonymous · version-controlled · public sources only.
  FLAG LEGEND  🟥 hard requirement/hazard   🟧 caution/unverified   🟩 normal/confirmed
================================================================================
-->

# BCS3 — Airbus A220-300 · Dispatch

**BCS3 / A220 family** · Narrowbody twin, thin-route/regional-trunk gap-filler
**Version** v0.1 · **Updated** 2026-07-25 · **Status** Draft

> **Read-me:** How this type is dispatched at K Global. Method (fuel policy, ETOPS rules) is defined once in OM E — this file **applies** it to the BCS3. Capability values are held in the Fleet Capability Matrix — cited, not restated. Flag legend 🟥 hard · 🟧 caution · 🟩 normal.

---

## 1. Snapshot (planning)

| Field | Value |
|---|---|
| OEW / MZFW / MTOW / MLW | ~40,600 🟧 / ~58,600 🟧 / up to 70,900 🟩 / ~62,600 kg 🟧 `[VERIFY]` |
| Max fuel | ~19,130 L 🟧 `[VERIFY]` |
| Payload (K Global config) | 140 pax + 2,500 kg belly `[VAMSYS mirror 2026-07-25]` |
| Typical block burn | No BCS3 reference OFP yet 🟧 — PW1500G is a geared-turbofan with a strong fuel-economy public reputation but no type-specific K Global figure on file |
| Cost index (default) | Per OM E / route economics — no BCS3 reference OFP CI yet 🟧 `[VERIFY]` |
| Reserve rule | Final reserve **30 min** + alternate per OM E fuel policy 🟩 `[K Global OpsSpec 2026-07-25]` |
| Contingency | **5% / ERA** per OM E fuel policy 🟩 `[K Global OpsSpec 2026-07-25]` |
| ETOPS/EDTO | **Approved EDTO rule time: 120 min** (narrowbody twin) 🟩 `[K Global OpsSpec 2026-07-25]`; type certified up to **180 min** (classic ETOPS) 🟩 — see §5 & matrix |

## 2. SimBrief setup

- **Airframe profile:** BCS3 (A220-300 / PW1500G) — SimBrief BCS3
- **Aircraft-data overrides:** OEW / MZFW / MTOW / MLW / max fuel — set to VAMSYS mirror figures where they differ from SimBrief defaults (confirm delivered MTOW option — up to 70,900 kg); ceiling FL410; engines PW1500G; PBN/equip per fleet standard (RVSM, RNP AR 0.3, full RNP APCH — see matrix Table B) 🟧 `[VERIFY]`
- **Dispatch overrides:** reserve rule (final reserve 30 min), contingency 5%/ERA, fuel factor, cruise mode/sub, climb/descent per OM E; **ETOPS threshold & rule selector = 120 min** (narrowbody twin) `[K Global OpsSpec 2026-07-25]`
- **Fuel overrides:** minfob / minfod / atc / mel / wxx / added / tankering — default unless route-specific 🟧
- Basis: VAMSYS `simbrief_overrides` for this type `[VAMSYS mirror 2026-07-25]`

## 3. Fuel policy applied

OM E's generic fuel policy resolves for the BCS3 as taxi + trip + **contingency (5% / ERA)** + alternate + **final reserve (30 min)** + any additional/holding `[K Global OpsSpec 2026-07-25]`. No type-specific K Global OFP burn figure is on file yet 🟧 — the PW1500G's geared-turbofan design is publicly reputed for strong fuel economy relative to older-generation narrowbody engines, but this pack does not assert a burn rate pending a flown reference OFP. **Tankering:** assess per OM E on a case-by-case basis once burn/tank data is confirmed; the ~19,130 L tank is modest relative to the widebody fleet, so tankering headroom is inherently limited. Exact reserve/contingency values are defined in OM E — apply, do not restate here beyond the figures above. See `../../../OM E Operations/` fuel policy.

## 4. Payload & loading

- K Global config: **140 pax + 2,500 kg belly** `[VAMSYS mirror 2026-07-25]`.
- Standard pax/bag weights and bulk-hold belly loading per OM E loading policy; keep ZFW within MZFW (~58,600 kg 🟧 `[VERIFY]`) and CG within envelope. 🟧
- **Hot-and-high:** matrix rates hot/high sensitivity **Low** — PW1500G geared-turbofan gives a comparatively strong thrust margin at altitude/temperature versus older narrowbody twins; no material payload penalty expected at the K Global network's scheduled fields, but confirm per field before scheduling. See [Fleet Capability Matrix](../capability-matrix.md) (Table D). 🟩

## 5. ETOPS / EDTO 🟥

- **Capability:** A220 is a narrowbody twin; classic ETOPS applies, type certified up to **180 min**. K Global operates to the **approved rule time**, not the type maximum. **Approved EDTO rule time: 120 min** (narrowbody twin) 🟩 `[K Global OpsSpec 2026-07-25]`.
- **Method:** defined once in OM E — see `../../../OM E Operations/ETOPS-EDTO Procedures.md`. Capability/approval values are held in [Fleet Capability Matrix](../capability-matrix.md) (Table A). This file only records the type application.
- **En-route alternates:** selected per route from the OM E adequate-aerodrome set; no BCS3 reference OFP alternates yet on file 🟧 — populate when the first type OFP is flown.
- **Critical-fuel note:** critical-fuel scenario (decompression + engine-out driftdown at the ETOPS entry point to the most limiting en-route alternate) must be checked against the fuel plan per OM E; the modest ~19,130 L tank leaves comparatively tighter margin than the widebody fleet on any route approaching structural range. 🟥

## 6. Route applicability

- **Cleared/typical:** thin/regional trunks and slot- or runway-constrained fields within the narrowbody-twin range envelope (~3,350–3,550 NM at the higher-MTOW option). The BCS3's small fleet size (5 tails) means scheduling is opportunistic rather than a dedicated network segment.
- **Watch:** confirm the delivered MTOW option (63.1 / 67.6 / 69.9 / 70.9 t) against VAMSYS before assuming range/payload; **steep-approach fields are out of scope** — the A220-300 is not steep-certified (the A220-100 is); confirm reserves on any sector approaching structural range given the modest tank size.
- Link to OM C route briefs (planned): OM C route briefs (planned) and OM C route briefs (planned).

## 7. Dispatch watch-items

| Item | Flag | Note |
|---|---|---|
| No BCS3 reference OFP yet | 🟧 | Burn/CI/alternates not yet established — replace with type OFP figures when first flown |
| MTOW option not confirmed | 🟧 | A220-300 delivered at one of several MTOW steps (63.1–70.9 t) — confirm against VAMSYS before range/payload planning |
| Steep approach out of scope | 🟥 | A220-**300** is not steep-certified (A220-**100** is) — do not schedule LCY/steep-field sectors on this type; see matrix Table C |
| Type rating / crewing | 🟥 | BD-500 is a stand-alone rating, no CCQ with A320/A330/A350 — confirm crew availability before scheduling |
| ETOPS adequacy on thin routes | 🟩 | Approved rule time **120 min** (narrowbody twin) 🟩 `[K Global OpsSpec 2026-07-25]`; type 180 min — confirm en-route alternates per leg |
| Small fuel tank / limited tankering headroom | 🟧 | ~19,130 L tank is modest vs widebody fleet — case-by-case per OM E, watch structural-range sectors |

---

## Sources & References
*Public URLs only. Private/OEM/add-on documents may inform content but must never be listed here.*

- Airbus — A220 aircraft family page — https://www.airbus.com/en/products-services/commercial-aircraft/a220-family
- Wikipedia — Airbus A220 — https://en.wikipedia.org/wiki/Airbus_A220
- Wikipedia — Pratt & Whitney PW1000G — https://en.wikipedia.org/wiki/Pratt_%26_Whitney_PW1000G
- Simple Flying — Which Aircraft Can Land At London City Airport? (A220-100 vs -300 steep-approach distinction) — https://simpleflying.com/london-city-airport-approved-aircraft/

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-25 | Initial draft — dispatch built from public Airbus/Wikipedia data + VAMSYS mirror; OpsSpec values applied (EDTO 120 min type-180, contingency 5%/ERA, final reserve 30 min); capability values cross-linked to the Fleet Capability Matrix; steep-approach exclusion and stand-alone type rating flagged 🟥; no type OFP yet (watch-item). |
