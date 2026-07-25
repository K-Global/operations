<!--
================================================================================
  K Global — AIRFRAME PACK · DISPATCH  ·  A21N Airbus A321neo family
  Curated layer. Anonymous · version-controlled · public sources only.
  FLAG LEGEND  🟥 hard requirement/hazard   🟧 caution/unverified   🟩 normal/confirmed
================================================================================
-->

# A21N — Airbus A321neo family · Dispatch

**A21N / A320 family** · Narrowbody twin; neo standard density, LR/XLR long-thin missions
**Version** v0.1 · **Updated** 2026-07-25 · **Status** Draft

> **Read-me:** How this type is dispatched at K Global. Method (fuel policy, ETOPS rules) is defined once in OM E — this file **applies** it to the A21N. Capability values are held in the Fleet Capability Matrix — cited, not restated. Flag legend 🟥 hard · 🟧 caution · 🟩 normal.

---

## 1. Snapshot (planning)

| Field | Value |
|---|---|
| MTOW (variant) | neo/LR ~97,000 · **XLR ~101,000** kg 🟧 `[VERIFY]` |
| Max fuel | neo ~26,730 L; **LR/XLR ~32,940 L** (additional centre tanks/RCT) 🟧 `[VERIFY]` |
| Payload (K Global config, fleet-wide) | 185 pax + 4,000 kg belly `[VAMSYS mirror 2026-07-25]` — LR/XLR Premier-Business config `[VERIFY]` |
| Typical block burn | ~2.6–2.9 t/hr avg short/medium-haul cruise (public reference) 🟧 — no A21N reference OFP yet 🟧 |
| Cost index (default) | Per OM E / route economics — no A21N reference OFP CI yet 🟧 `[VERIFY]` |
| Reserve rule | Final reserve **30 min** + alternate per OM E fuel policy 🟩 `[K Global OpsSpec 2026-07-25]` |
| Contingency | **5% / ERA** per OM E fuel policy 🟩 `[K Global OpsSpec 2026-07-25]` |
| ETOPS/EDTO | **Approved EDTO rule time: 120 min** (narrowbody twin) 🟩 `[K Global OpsSpec 2026-07-25]`; type certified up to **180 min** 🟥 — see §5 & matrix |

## 2. SimBrief setup

- **Airframe profile:** A21N (A321neo) — SimBrief has no distinct LR/XLR profile; use A21N base profile plus manual overrides below for LR/XLR flights.
- **Aircraft-data overrides:** OEW / MZFW / MTOW / MLW / max fuel — set to VAMSYS mirror figures where they differ from SimBrief defaults 🟧 `[VERIFY]`; ceiling ~FL391; engines LEAP-1A or PW1100G per tail; PBN/equip per fleet standard (RVSM, RNP AR 0.3, full RNP APCH — see matrix Table B) 🟧 `[VERIFY]`
- **Dispatch overrides:** reserve rule (final reserve 30 min), contingency 5%/ERA, fuel factor, cruise mode/sub, climb/descent per OM E; **ETOPS threshold & rule selector = 120 min** (narrowbody twin) `[K Global OpsSpec 2026-07-25]`
- **LR/XLR sub-fleet:** override max fuel to ~32,940 L (additional centre tanks/RCT) and MTOW to variant value (LR ~97,000 / XLR ~101,000 kg) for long-thin pairings; confirm Premier-Business payload config before dispatch 🟧 `[VERIFY]`
- **Fuel overrides:** minfob / minfod / atc / mel / wxx / added / tankering — default unless route-specific 🟧
- Basis: VAMSYS `simbrief_overrides` for this type `[VAMSYS mirror 2026-07-25]`

## 3. Fuel policy applied

OM E's generic fuel policy resolves for the A21N as taxi + trip + **contingency (5% / ERA)** + alternate + **final reserve (30 min)** + any additional/holding `[K Global OpsSpec 2026-07-25]`. Public short/medium-haul cruise burn is **~2.6–2.9 t/hr** 🟧; against ~21–26 t max fuel (variant-dependent) the neo carries adequate reserve margin on standard sectors, and the LR/XLR's additional centre-tank fuel extends that to the long-thin missions the sub-variants exist for. **Tankering:** assess Frankfurt-vs-outstation price differentials per leg — narrowbody tank size limits tankering headroom, but short-turn neo pairs can still benefit weight-and-CG permitting; tankering is authorised **case-by-case** per OM E `[K Global OpsSpec 2026-07-25]`. Exact reserve/contingency values are defined in OM E — apply, do not restate here beyond the figures above. See `../../../OM E Operations/` fuel policy.

## 4. Payload & loading

- K Global config: **185 pax + 4,000 kg belly** (fleet-wide mirror figure) `[VAMSYS mirror 2026-07-25]`; LR/XLR Premier-Business config not yet confirmed 🟧 `[VERIFY]`.
- Standard pax/bag weights and belly bulk/limited-container plan per OM E loading policy; keep ZFW within variant MZFW and CG within envelope. 🟧
- **Hot-and-high / short-field penalties:** matrix rates hot/high sensitivity **Moderate** — LR/XLR heavier loads penalise hot/high TOW more than the base neo; thrust-limited takeoffs at FAOR/HAAB/NBO can force reduced payload or fuel on longer/thinner legs at high TOW — check per field, and per variant, before committing schedule. See [Fleet Capability Matrix](../capability-matrix.md) (Table D). 🟧

## 5. ETOPS / EDTO 🟥

- **Capability:** A21N type is EDTO-certified **up to 180 minutes** (twin, classic ETOPS). K Global operates to the **approved rule time**, not the type maximum. **Approved EDTO rule time: 120 min** (narrowbody twin) 🟩 `[K Global OpsSpec 2026-07-25]` — the 180-min certification is the type ceiling, not the K Global approval.
- **Method:** defined once in OM E — see `../../../OM E Operations/ETOPS-EDTO Procedures.md`. Capability/approval values are held in [Fleet Capability Matrix](../capability-matrix.md) (Table A). This file only records the type application.
- **En-route alternates:** selected per route from the OM E adequate-aerodrome set — particularly relevant for LR/XLR long-thin sectors; no A21N reference OFP alternates yet on file 🟧 — populate when the first type OFP is flown.
- **Critical-fuel note:** the LR/XLR long-thin missions are the sub-variant's raison d'être — critical-fuel scenario (engine-out driftdown at the ETOPS entry point to the most limiting en-route alternate) must be checked against the fuel plan per OM E on every LR/XLR sector approaching the 120-min rule-time boundary. 🟥

## 6. Route applicability

- **Cleared/typical:** neo — short-to-medium-haul standard-density narrowbody trunks; LR — long-thin Premier-Business sectors within ~4,000 NM; XLR — extended long-thin sectors within ~4,700 NM, reaching missions previously requiring a widebody.
- **Watch:** hot-and-high departures where payload is thrust-capped (§4, more pronounced on LR/XLR); confirm reserves on any LR/XLR sector approaching structural range; LR/XLR-only pairings must be flown by the correct sub-fleet, not the standard-tank neo.
- Link to OM C route briefs (planned): OM C route briefs (planned) and OM C route briefs (planned).

## 7. Dispatch watch-items

| Item | Flag | Note |
|---|---|---|
| No A21N reference OFP yet | 🟧 | Burn/CI/alternates are public-Airbus-derived — replace with type OFP figures when first flown |
| Range vs longest scheduled sector | 🟧 | neo ~3,500 / LR ~4,000 / XLR ~4,700 NM structural — confirm reserves on longest LR/XLR pairing |
| Hot-and-high payload limit | 🟧 | FAOR/HAAB/NBO thrust-limited at high TOW — payload/fuel penalties more pronounced on LR/XLR (matrix: Moderate) |
| ETOPS adequacy on long-thin routes | 🟥 | Approved rule time **120 min** (narrowbody twin) 🟩 `[K Global OpsSpec 2026-07-25]`; type 180 — confirm en-route alternates per LR/XLR leg |
| SimBrief has no LR/XLR profile | 🟧 | Base A21N profile + manual fuel/weight overrides required for LR/XLR dispatch |

---

## Sources & References
*Public URLs only. Private/OEM/add-on documents may inform content but must never be listed here.*

- Airbus — A321neo type page — https://www.aircraft.airbus.com/en/aircraft/a320-the-most-successful-aircraft-family-ever/a321neo
- Airbus — A321XLR type page — https://www.aircraft.airbus.com/en/aircraft/a320-the-most-successful-aircraft-family-ever/a321xlr
- EASA — TCDS EASA.A.064 Airbus A320 (covers A318/A319/A320/A321) — https://www.easa.europa.eu/en/document-library/type-certificates/aircraft-cs-25/easaa064-airbus-a318-a319-a320-and-a321
- SKYbrary — Airbus A321 (A321) — https://skybrary.aero/aircraft/a321
- Wikipedia — Airbus A321XLR — https://en.wikipedia.org/wiki/Airbus_A321XLR

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-25 | Initial draft — dispatch built from public Airbus/EASA data + VAMSYS mirror; OpsSpec values applied (EDTO 120 min type-180, contingency 5%/ERA, final reserve 30 min, tankering case-by-case); LR/XLR overrides noted (no distinct SimBrief profile); capability values cross-linked to the Fleet Capability Matrix; no type OFP yet (watch-item). |
