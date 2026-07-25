<!--
================================================================================
  K Global — AIRFRAME PACK · DISPATCH  ·  CRJ2 Bombardier CRJ-200
  Curated layer. Anonymous · version-controlled · public sources only.
  FLAG LEGEND  🟥 hard requirement/hazard   🟧 caution/unverified   🟩 normal/confirmed
================================================================================
-->

# CRJ2 — Bombardier CRJ-200 · Dispatch

**CRJ2 — SEPARATE type rating from the CRJ700/900** · Narrowbody regional jet, City/Regional network
**Version** v0.1 · **Updated** 2026-07-25 · **Status** Draft

> **Read-me:** How this type is dispatched at K Global. Method (fuel policy, ETOPS rules) is defined once in OM E — this file **applies** it to the CRJ2. Capability values are held in the Fleet Capability Matrix's **secondary/indicative table** (🟧 throughout — this type is not yet researched to mainline standard) — cited, not restated. Flag legend 🟥 hard · 🟧 caution · 🟩 normal.

---

## 1. Snapshot (planning)

| Field | Value |
|---|---|
| OEW / MZFW / MTOW / MLW | 13,835 🟩 / not published, derived ≈19,959 estimate only 🟧 `[VERIFY]` / ER 23,133 · LR 24,041 🟩 / not found 🟧 `[VERIFY]` kg |
| Max fuel | **6,489 kg** (8,081 L) 🟩 |
| Payload (K Global config) | `[VERIFY — VAMSYS]` — not yet broken out per type; see group aggregate (~10 tails across four Bombardier types); max structural payload 6,124 kg 🟩 |
| Typical block burn | No public reference and **no K Global reference OFP** yet 🟧 `[VERIFY]` |
| Cost index (default) | Per OM E / route economics — no CRJ2 reference OFP CI yet 🟧 `[VERIFY]` |
| Reserve rule | Final reserve **30 min** + alternate per OM E fuel policy 🟩 `[K Global OpsSpec 2026-07-25]` (generic fleet-wide policy, applied here) |
| Contingency | **5% / ERA** per OM E fuel policy 🟩 `[K Global OpsSpec 2026-07-25]` |
| ETOPS/EDTO | **Regional short-haul type — not typically EDTO-planned; no K Global rule time asserted.** Matrix secondary table marks this type "Twin" 🟧 indicative only — see §5 |

## 2. SimBrief setup

- **Airframe profile:** CRJ2 (Bombardier CRJ-200) — SimBrief CRJ2 🟧 `[VERIFY]`
- **Aircraft-data overrides:** OEW 13,835 kg 🟩; MTOW ER 23,133 / LR 24,041 kg 🟩 — confirm which sub-variant K Global's tails carry `[VERIFY — VAMSYS]`; max fuel 6,489 kg 🟩; MZFW/MLW pending confirmation 🟧 `[VERIFY]`; ceiling FL410; engines CF34-3B1; PBN/equip — **not confirmed** for this type (matrix secondary table, indicative only) 🟧 `[VERIFY]`
- **Dispatch overrides:** reserve rule (final reserve 30 min), contingency 5%/ERA, fuel factor, cruise mode/sub, climb/descent per OM E; **ETOPS threshold — not applicable in normal City/Regional service; do not set an EDTO rule time for this type without a specific route case** `[VERIFY]`
- **Fuel overrides:** minfob / minfod / atc / mel / wxx / added / tankering — default unless route-specific 🟧
- Basis: VAMSYS `simbrief_overrides` for this type — not yet populated `[VERIFY — VAMSYS]`

## 3. Fuel policy applied

OM E's generic fuel policy resolves for the CRJ2 as taxi + trip + **contingency (5% / ERA)** + alternate + **final reserve (30 min)** + any additional/holding `[K Global OpsSpec 2026-07-25]`. No public or K Global-verified cruise burn figure is on file for this type 🟧 — the SKYbrary/Wikipedia field-length and cruise figures (Intro §6) suggest the type behaves as a conventional older-generation short-haul regional jet on fuel, but this has not been confirmed against a flown OFP. **Tankering:** this is the smallest-tank type in the group (max fuel 6,489 kg, well below the CRJ700/900) — assess price-differential tankering case-by-case per OM E, weight-and-CG permitting, noting the tighter fuel-vs-payload trade on this airframe 🟧 `[K Global OpsSpec 2026-07-25]`. Exact reserve/contingency values are defined in OM E — apply, do not restate here beyond the figures above. See `../../../OM E Operations/` fuel policy.

## 4. Payload & loading

- K Global config: not yet broken out per type — `[VERIFY — VAMSYS]`; the group aggregate is ~10 tails across four Bombardier types (CRJ7/CRJ9/CRJ2/CL30), City/Regional/Executive units.
- Standard pax/bag weights and belly bulk loading plan per OM E loading policy; keep ZFW within MZFW (once confirmed) and CG within envelope; max structural payload 6,124 kg 🟩. 🟧
- **Hot-and-high / short-field penalties:** not assessed for this type — no matrix column covers hot-and-high sensitivity for the secondary/indicative table. The hard wing's higher approach-speed/AOA-margin profile (below) makes any future hot-and-high assessment for this type especially important. Treat as unconfirmed until a K Global assessment is made. 🟧
- **Hard-wing / contamination discipline note 🟥 — MANDATORY:** the CRJ-200 has **NO leading-edge slats** (Intro §6) — a genuine hard wing, unlike the slatted CRJ700/900. This drives (a) **higher approach speeds and AOA margins** flown routinely (no slat-extended low-speed lift), and (b) **stricter ice/ground-contamination discipline** — a shorter/less forgiving margin against airframe icing and contamination-induced boundary-layer disruption than a slatted wing. Loading/dispatch planning should build in conservative contingency around cold-weather/icing-season operations and short/marginal fields for this type specifically — do not apply CRJ700/900 slatted-wing assumptions to this type.

## 5. ETOPS / EDTO 🟥

- **Capability:** the Fleet Capability Matrix carries the CRJ2 only in its **secondary/indicative table**, marking it "Twin" 🟧 — this is an **indicative** note, not a confirmed type fact researched to mainline standard.
- **K Global application:** the CRJ2 flies the **City/Regional network** — short-haul sectors within structural range, not the EDTO-relevant oceanic/remote long-thin routes flown by the mainline widebody fleet. Its shorter structural range (~1,650–1,700 NM LR / ~1,305–1,345 NM ER — Intro §1) further narrows its practical route set below the CRJ700/900. **No EDTO rule time is asserted for this type** — none is needed for its normal route set, and none should be assumed or set in SimBrief without a specific route case and a fresh capability review.
- **Method:** defined once in OM E — see `../../../OM E Operations/ETOPS-EDTO Procedures.md`. Capability/approval values are held in [Fleet Capability Matrix](../capability-matrix.md) (secondary table for this type). This file only records the type application.
- **En-route alternates:** selected per route from the OM E adequate-aerodrome set as applicable; not normally an EDTO consideration for this type's route set. 🟧

## 6. Route applicability

- **Cleared/typical:** City and Regional network short-haul sectors, within the ~1,650–1,700 NM (LR) / ~1,305–1,345 NM (ER) structural range (variant-dependent, Intro §1) — the shortest structural range in the regional group. Not flown on oceanic/EDTO-limiting long-thin routes — those remain mainline widebody territory.
- **Watch:** hot-and-high performance unassessed (§4); the hard wing (Intro §6) raises the operational stakes of icing-season and marginal-field scheduling — confirm reserves and field performance per field before scheduling into thin-margin airports; confirm ER vs LR weight-variant fit before assuming the longer-range figure applies.
- **Same-family, separately rated sibling:** the CRJ700/900 (`CRJ7`/`CRJ9`) shares this pack's broad type-certificate lineage but is a **distinct type rating** with a slatted wing and different weight class — see the [CRJ7 Dispatch](../crj7/dispatch.md) for contrast, not for crew-scheduling interchange.
- Link to OM C route briefs (planned): OM C route briefs (planned) and OM C route briefs (planned).

## 7. Dispatch watch-items

| Item | Flag | Note |
|---|---|---|
| No CRJ2 reference OFP yet | 🟧 | Burn/CI/alternates are public-SKYbrary/Bombardier/Wikipedia-derived only — replace with type OFP figures when first flown |
| MZFW/MLW not confirmed | 🟧 | MZFW is a derived estimate only (OEW + max payload); MLW not found — confirm against FAA TCDS A21EA or VAMSYS |
| ER vs LR weight variant | 🟧 | Confirm which sub-variant K Global's tails carry before treating MTOW/range figures as authoritative |
| Payload/config not broken out | 🟧 | `[VERIFY — VAMSYS]` — group aggregate only; reseed when VAMSYS type-level data is available |
| Hot-and-high payload limit | 🟧 | Not assessed — no matrix column for this type; hard wing raises the stakes of any future assessment |
| ETOPS/EDTO | 🟧 | Not typically EDTO-planned; no K Global rule time asserted; matrix secondary-table capability note is indicative only |
| Hard wing / icing discipline | 🟥 | **No leading-edge slats** — higher approach speeds, stricter ice/contamination discipline than the CRJ700/900; do not brief this type using slatted-wing assumptions |
| Separate type rating from CRJ7/CRJ9 | 🟥 | This is **not** a common-rating pairing — crew scheduling must treat the CRJ2 as its own qualification, distinct from the CRJ700/900 |

---

## Sources & References
*Public URLs only. Private/OEM/add-on documents may inform content but must never be listed here.*

- MHI RJ Aviation Group (CRJ program, successor to Bombardier) — https://www.mhi.com/business/products-services/aviation/aircraft-aftermarket-service/crj
- SKYbrary — Bombardier Regional Jet CRJ-200 (CRJ2) — https://skybrary.aero/aircraft/crj2
- Wikipedia — Bombardier CRJ100/200 — https://en.wikipedia.org/wiki/Bombardier_CRJ100/200

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-25 | Initial draft — dispatch built from public MHIRJ/SKYbrary/Wikipedia data; OpsSpec values applied (contingency 5%/ERA, final reserve 30 min, tankering case-by-case with tight-tank caveat); no EDTO rule time asserted (regional short-haul type, shortest range in the group); capability values cross-linked to the Fleet Capability Matrix's secondary/indicative table; no type OFP yet (watch-item); hard-wing/no-slat discipline flagged 🟥 as mandatory; separate-type-rating premise from CRJ7/CRJ9 flagged 🟥. |
