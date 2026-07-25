<!--
================================================================================
  K Global — AIRFRAME PACK · DISPATCH  ·  SF34 Saab 340B
  Curated layer. Anonymous · version-controlled · public sources only.
  FLAG LEGEND  🟥 hard requirement/hazard   🟧 caution/unverified   🟩 normal/confirmed
================================================================================
-->

# SF34 — Saab 340B · Dispatch

**SF34 · Saab 340B — TURBOPROP** · Small regional feeder, Regional network (EDDF-only)
**Version** v0.1 · **Updated** 2026-07-25 · **Status** Draft

> **Read-me:** How this type is dispatched at K Global. Method (fuel policy, ETOPS rules) is defined once in OM E — this file **applies** it to the SF34. Capability values are held in the Fleet Capability Matrix's **secondary/indicative table** (🟧 throughout — this type is not yet researched to mainline standard) — cited, not restated. **This is a turboprop with a 25,000 ft ceiling** — icing, terrain and weather avoidance are done tactically (routing/timing/holding) rather than by climbing above them, which changes the dispatch conversation from every jet pack in this group. Flag legend 🟥 hard · 🟧 caution · 🟩 normal.

---

## 1. Snapshot (planning)

| Field | Value |
|---|---|
| OEW / MTOW | ~8,618 🟩 / ~13,608 (30,000 lb, post-SB) 🟩 kg — confirm K Global's 340B tails carry the post-SB MTOW `[VERIFY — VAMSYS]` |
| Max payload / max fuel | ~3,400 kg (7,500 lb) 🟩 / ~2,580 kg (5,690 lb) 🟩 |
| Payload (K Global config) | `[VERIFY — VAMSYS]` — typical 33–36 seat single-class, most commonly 34 🟩; K Global's exact cabin/cargo split not yet confirmed |
| Typical block burn | No public reference and **no K Global reference OFP** yet 🟧 `[VERIFY]` — manufacturer fuel consumption figure ~0.94 kg/km at representative cruise (Intro §6) |
| Cost index (default) | Per OM E / route economics — no SF34 reference OFP CI yet 🟧 `[VERIFY]` |
| Reserve rule | Final reserve **30 min** + alternate per OM E fuel policy 🟩 `[K Global OpsSpec 2026-07-25]` (generic fleet-wide policy, applied here) |
| Contingency | **5% / ERA** per OM E fuel policy 🟩 `[K Global OpsSpec 2026-07-25]` |
| ETOPS/EDTO | **Not applicable.** Twin turboprop, FL250 ceiling, short-haul Regional network — no oceanic/remote-route case. Matrix secondary table marks this type "Twin" 🟧 indicative only — see §5 |

## 2. SimBrief setup

- **Airframe profile:** SF34 (Saab 340B) — SimBrief SF34
- **Aircraft-data overrides:** OEW ~8,618 kg / MTOW ~13,608 kg (confirm post-SB fit `[VERIFY — VAMSYS]`) / max fuel ~2,580 kg / max payload ~3,400 kg; ceiling FL250; engines 2× GE CT7-9B; propeller supplier (Dowty vs Hamilton Standard) `[VERIFY — VAMSYS]`; PBN/equip — **not confirmed** for this type (matrix secondary table, indicative only) 🟧 `[VERIFY]`
- **Dispatch overrides:** reserve rule (final reserve 30 min), contingency 5%/ERA, fuel factor, cruise mode/sub, climb/descent per OM E; **no ETOPS/EDTO rule time applicable — do not set one for this type** `[VERIFY]`
- **Fuel overrides:** minfob / minfod / atc / mel / wxx / added / tankering — default unless route-specific 🟧
- Basis: VAMSYS `simbrief_overrides` for this type — not yet populated `[VERIFY — VAMSYS]`

## 3. Fuel policy applied

OM E's generic fuel policy resolves for the SF34 as taxi + trip + **contingency (5% / ERA)** + alternate + **final reserve (30 min)** + any additional/holding `[K Global OpsSpec 2026-07-25]`. No public or K Global-verified cruise burn figure is on file for this type beyond the manufacturer's ~0.94 kg/km cruise-consumption figure 🟧 — this has not been confirmed against a flown OFP. **Small fuel tanks (~2,580 kg max):** the SF34's fuel capacity is an order of magnitude smaller than the jet fleet's — tankering is rarely economic on a type this size and should not be assumed without a specific case; the operative planning constraint is more often **minimum diversion fuel on a short, thin sector** than a tankering opportunity `[K Global OpsSpec 2026-07-25]`. See `../../../OM E Operations/` fuel policy.

## 4. Payload & loading

- K Global config: typical 33–36 seat single-class, most commonly 34 (Intro §1) `[VERIFY — VAMSYS]`; only 2 tails in the entire Saab group (Fleet Index) — this is a small, thin-route feeder, not a scheduled trunk.
- Standard pax/bag weights and belly/nose bulk loading plan per OM E loading policy; keep ZFW within MZFW (once confirmed, Intro §5) and CG within envelope — CG margin on a small turboprop is typically tighter in absolute terms than on the jet fleet, watch loading sequence. 🟧
- **Hot-and-high / short-field penalties:** not assessed for this type — no matrix column covers hot-and-high sensitivity for the secondary/indicative table. Small turboprops are often more field-length- and density-altitude-sensitive per seat than jets; treat as unconfirmed until a K Global assessment is made. 🟧
- **Icing / de-ice discipline note 🟥:** the SF34 carries prop de-ice (electrically heated blades), airframe/tail anti-ice or de-ice protection, and engine inlet anti-ice — standard turboprop ice-protection architecture, but with **less performance margin to spare than a jet** if ice accretes on the wing/tail or a prop imbalances from asymmetric ice shedding. Ground de-ice holdover time, no-icing-conditions-uncleared-takeoff discipline, and prompt selection of ice protection systems in flight are all first-order items for this type — see QRH Ch 9. Exact system architecture (pneumatic boots vs another de-ice method) is `[VERIFY]` pending a confirmed public source.

## 5. ETOPS / EDTO 🟥

- **Capability:** the Fleet Capability Matrix carries the SF34 only in its **secondary/indicative table**, marking it "Twin" 🟧 — an **indicative** note, not a confirmed type fact researched to mainline standard.
- **K Global application:** the SF34 flies the **Regional** network, EDDF-based only, at a **25,000 ft** service ceiling and ~730 NM structural range. There is **no EDTO/ETOPS case whatsoever** for this type — it operates entirely within short-haul continental sectors, well inside any diversion-time consideration the mainline fleet must plan for. **No EDTO rule time is asserted, and none should ever be set in SimBrief for this type.**
- **Method:** defined once in OM E — see `../../../OM E Operations/ETOPS-EDTO Procedures.md`. Capability/approval values are held in [Fleet Capability Matrix](../capability-matrix.md) (secondary table for this type). This file only records the type application.
- **En-route alternates:** selected per route from the OM E adequate-aerodrome set as applicable — for this type the more operationally relevant driver is usually **icing/weather diversion planning**, not extended-range single-engine driftdown. 🟧

## 6. Route applicability

- **Cleared/typical:** Regional network short, thin sectors out of EDDF, within the ~730 NM structural range (variant/payload-dependent, Intro §1). Not flown on any long-thin or oceanic route — that territory belongs to the mainline widebody fleet entirely.
- **Watch:** hot-and-high performance unassessed (§4); confirm propeller supplier and post-SB MTOW fit before assuming performance figures; confirm reserves and field performance per field before scheduling into thin-margin airports, especially in icing-prone seasons/regions.
- **No common-rated sibling.** Unlike the Bombardier packs in this group, the SF34 is the sole type in the Saab manufacturer group at K Global — no shared type rating exists to cross-reference.
- Link to OM C route briefs (planned): OM C route briefs (planned) and OM C route briefs (planned).

## 7. Dispatch watch-items

| Item | Flag | Note |
|---|---|---|
| No SF34 reference OFP yet | 🟧 | Burn/CI/alternates are public-Wikipedia/Saab-derived only — replace with type OFP figures when first flown |
| MZFW/MLW not confirmed | 🟧 | Not found in surveyed public sources — confirm against EASA.A.068 or VAMSYS |
| Propeller supplier (Dowty vs Hamilton Standard) | 🟧 | Confirm which K Global's two tails carry before treating prop-system figures as authoritative |
| Post-SB MTOW fit | 🟧 | Confirm the 340B post-Service-Bulletin 30,000 lb MTOW applies to K Global's tails, not the baseline 340A figure |
| Payload/config not broken out | 🟧 | `[VERIFY — VAMSYS]` — typical 33–36 seat range cited; K Global's exact fit pending |
| Hot-and-high / short-field payload limit | 🟧 | Not assessed — no matrix column for this type |
| ETOPS/EDTO | 🟩 | Not applicable — confirmed by route/range/ceiling, not merely indicative |
| Icing / de-ice discipline | 🟥 | Core operational item for this small turboprop — see §4 and QRH Ch 9; exact de-ice system architecture `[VERIFY]` |
| No shared type rating | 🟩 | Sole type in the Saab manufacturer group — no sibling pack to cross-reference, unlike the Bombardier/ATR packs |

---

## Sources & References
*Public URLs only. Private/OEM/add-on documents may inform content but must never be listed here.*

- Wikipedia — Saab 340 — https://en.wikipedia.org/wiki/Saab_340
- EASA — Type Certificate Data Sheet EASA.A.068 (SAAB SF340A, 340B) — https://www.easa.europa.eu/en/document-library/type-certificates/noise/easaa068-saab-340

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-25 | Initial draft — dispatch built from public Wikipedia/EASA TCDS data; OpsSpec values applied (contingency 5%/ERA, final reserve 30 min); no ETOPS/EDTO case confirmed applicable (not merely indicative, given range/ceiling); icing/de-ice discipline flagged 🟥 as the type's first-order dispatch item; no type OFP yet (watch-item); no shared type rating (sole Saab-group type). |
