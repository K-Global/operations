<!--
================================================================================
  K Global — AIRFRAME PACK · DISPATCH  ·  B77F Boeing 777F
  Curated layer. Anonymous · version-controlled · public sources only.
  FLAG LEGEND  🟥 hard requirement/hazard   🟧 caution/unverified   🟩 normal/confirmed
================================================================================
-->

# B77F — Boeing 777F · Dispatch

**B77F / 777 family** · Long-haul heavy widebody-twin freighter — main-deck cargo
**Version** v0.1 · **Updated** 2026-07-25 · **Status** Draft

> **Read-me:** How this type is dispatched at K Global. Method (fuel policy, EDTO rules) is defined once in OM E — this file **applies** it to the B77F. Capability values are held in the Fleet Capability Matrix — cited, not restated. Shares the 777 type with the passenger [B77W](../b77w/dispatch.md); keep consistent. Flag legend 🟥 hard · 🟧 caution · 🟩 normal.

---

## 1. Snapshot (planning)

| Field | Value |
|---|---|
| OEW / MZFW / MTOW / MLW | ~144,000 🟧 / ~248,600 🟧 / ~347,800 🟩 / ~260,800 🟧 kg |
| Max fuel | ~145 t (~181,300 L) 🟧 `[VERIFY]` |
| Payload (K Global config) | **Freighter — 102,000 kg cargo, no pax** `[VAMSYS mirror 2026-07-25]` |
| Typical block burn | ~7 t/hr avg long-haul cruise (public 777 reference) 🟧 — no B77F reference OFP yet 🟧 |
| Cost index (default) | Per OM E / route economics — no B77F reference OFP CI yet 🟧 `[VERIFY]` |
| Reserve rule | Final reserve **30 min** + alternate per OM E fuel policy 🟩 `[K Global OpsSpec 2026-07-25]` |
| Contingency | **5% / ERA** per OM E fuel policy 🟩 `[K Global OpsSpec 2026-07-25]` |
| ETOPS/EDTO | Twin — type certified up to **330 min** (GE90) 🟩; **operator rule time NOT yet set for the freighter** 🟧 [operator — VERIFY] (not in OpsSpec batch 1) — see §5 & matrix |

## 2. SimBrief setup
- **Airframe profile:** B77F (777F / GE90-110B1) — SimBrief B77F
- **Aircraft-data overrides:** OEW / MZFW / MTOW / MLW / max fuel — set to VAMSYS mirror figures where they differ from SimBrief defaults (MTOW ~347,800 / MLW ~260,800 / MZFW ~248,600 🟧); ceiling ~FL430; engines 2 × GE90-110B1; PBN/equip per fleet standard (RVSM, RNP 4 + RNAV 10 oceanic, RNP AR 0.3, full RNP APCH — see matrix Table B) 🟧 `[VERIFY]`
- **Dispatch overrides:** reserve rule (final reserve 30 min), contingency 5%/ERA, fuel factor, cruise mode/sub, climb/descent per OM E; **ETOPS threshold & rule selector — NOT yet set for the freighter** (see §5) — do not default to the 180-min twin value without confirmation 🟧
- **Fuel overrides:** minfob / minfod / atc / mel / wxx / added / tankering — default unless route-specific 🟧
- **Freighter loadsheet:** main-deck cargo build (no pax) — see §4
- Basis: VAMSYS `simbrief_overrides` for this type `[VAMSYS mirror 2026-07-25]`

## 3. Fuel policy applied
OM E's generic fuel policy resolves for the B77F as taxi + trip + **contingency (5% / ERA)** + alternate + **final reserve (30 min)** + any additional/holding `[K Global OpsSpec 2026-07-25]`. Public 777 long-haul cruise burn is **~7 t/hr** 🟧 (indicative; no type OFP yet); against ~145 t max fuel the aircraft trades tankage against a heavy main-deck payload — long cargo sectors at max structural payload (~102 t) are **payload-vs-fuel limited**, so watch the ZFW/fuel trade on the longest legs. **Tankering:** assess Frankfurt-vs-outstation price differentials per leg; tankering is authorised **case-by-case** per OM E, weight-and-CG permitting — but headroom is tighter than a pax twin when carrying max freight `[K Global OpsSpec 2026-07-25]`. Exact reserve/contingency values are defined in OM E — apply, do not restate here beyond the figures above. See `../../../OM E Operations/` fuel policy.

## 4. Payload & loading 🟥
- K Global config: **freighter — 102,000 kg cargo, no passengers** `[VAMSYS mirror 2026-07-25]`. **Main-deck cargo + lower-deck holds**, loaded through the **main-deck side cargo door** (palletised main-deck positions) plus forward/aft lower-deck cargo.
- **Main-deck loading / CG distinction 🟥:** unlike a passenger aircraft's belly-only loading, the 777F's payload sits largely on the **main deck**, high and along the full fuselage length. This demands active **CG management** — main-deck pallet-position planning and a load distribution that keeps the loaded CG within the freighter envelope through all fuel states, plus main-deck floor-loading and pallet-weight limits. It is a materially different loading discipline from the pax B77W; the load plan (not just total weight) governs. Keep ZFW within MZFW ~248,600 kg. 🟥
- **Hot-and-high / long-field penalties:** matrix rates hot/high sensitivity **Moderate**; high freight TOW makes thrust-/field-limited takeoffs at FAOR/HAAB/NBO force reduced payload or fuel on long legs — check per field before committing schedule. See [Fleet Capability Matrix](../capability-matrix.md) (Table D). 🟧

## 5. ETOPS / EDTO 🟥
- **Capability:** the 777F is a **twin** and classic ETOPS applies; the GE90-powered 777 type is EDTO-certified **up to 330 min** (Boeing) 🟩 — a type fact, not the operator approval.
- **Operator rule time — OPEN 🟧:** **the B77F EDTO rule time is NOT yet set.** OpsSpec batch 1 (2026-07-25) set the widebody-twin rule time to **180 min** for the *passenger* widebody twins (including the B77W), but **the 777F freighter was specifically not included** — the matrix holds the B77F operator cell **🟧 [operator — VERIFY]** with the note *"not in OpsSpec batch 1 — confirm before assuming a rule time."**
- **K Global decision (this pack):** **leave the B77F EDTO rule time 🟧 pending OpsSpec**, rather than inheriting the 180-min widebody-twin value from the B77W. Rationale: the Fleet Capability Matrix is the single source of truth for operator approvals and it deliberately holds this cell open with an explicit warning; the freighter is a distinct type certificate and was consciously excluded from batch 1; governance forbids inventing an operator approval by inference (a blank beats a guess). The widebody-twin policy default (180 min) is the **expected** value once an OpsSpec batch sets it, and the type is certified well beyond that (330 min) — but until the OpsSpec is issued, **no rule time is assumed and no EDTO-rule-dependent sector may be planned on an assumed value.** Confirm before use. 🟥
- **Method:** defined once in OM E — see `../../../OM E Operations/ETOPS-EDTO Procedures.md`. Capability/approval values are held in [Fleet Capability Matrix](../capability-matrix.md) (Table A). This file only records the type application.
- **En-route alternates:** selected per route from the OM E adequate-aerodrome set (transoceanic/near-polar driftdown fields); no B77F reference OFP alternates yet on file 🟧 — populate when the first type OFP is flown and the rule time is set.
- **Critical-fuel note:** critical-fuel scenario (decompression + engine-out driftdown at the EDTO entry point to the most limiting en-route alternate) must be checked against the fuel plan per OM E; note the payload-vs-fuel tightness at max freight (§3). 🟥

## 6. Route applicability
- **Cleared/typical:** long intercontinental cargo trunks within ~4,900 NM at max structural payload (~102 t) — the FRA + HKG two-anchor cargo grid and deep freight sectors. Longer sectors trade payload for fuel. EDTO-dependent transoceanic great-circle cargo routings are available **only once the operator rule time is set** (§5).
- **Watch:** the **open EDTO rule time** — do not plan an EDTO-rule-dependent sector on an assumed value 🟥; main-deck CG/load-plan discipline (§4) 🟥; hot-and-high departures where payload is field/thrust-capped (§4); confirm payload-vs-fuel trade on any sector approaching structural range.
- Link to OM C route briefs (planned): OM C route briefs (planned) and OM C route briefs (planned).

## 7. Dispatch watch-items

| Item | Flag | Note |
|---|---|---|
| B77F EDTO rule time not set | 🟥 | **Operator rule time OPEN** — matrix 🟧 [operator — VERIFY]; excluded from OpsSpec batch 1; do not assume 180 min — confirm before planning EDTO-dependent sectors |
| No B77F reference OFP yet | 🟧 | Burn/CI/alternates public-derived — replace with type OFP figures when first flown |
| Main-deck loading / CG | 🟥 | Main-deck cargo (side door) + lower-deck — active CG/load-position management; load plan governs, not just total weight |
| Range/payload vs longest cargo sector | 🟧 | ~4,900 NM at ~102 t max payload — payload-vs-fuel trade on long legs; confirm reserves |
| Hot-and-high / long-field payload limit | 🟧 | FAOR/HAAB/NBO field/thrust-limited at high freight TOW — payload/fuel penalties (matrix: Moderate) |
| Tankering opportunity/risk | 🟧 | Tighter headroom than a pax twin at max freight; case-by-case per OM E; check price differentials + CG |

---

## Sources & References
*Public URLs only. Private/OEM/add-on documents may inform content but must never be listed here.*

- Boeing — 777 Freighter product page — https://www.boeing.com/commercial/777
- Boeing — Boeing to Offer up to 330-Minute ETOPS on 777 — https://boeing.mediaroom.com/2011-12-12-Boeing-to-Offer-up-to-330-Minute-ETOPS-on-777
- SKYbrary — Boeing 777 Freighter (B77L / 777F) — https://skybrary.aero/aircraft/b77l
- ICAO — ETOPS & EDTO technical awareness (Annex 6 EDTO; 2+ engine applicability) — https://www.icao.int/sites/default/files/WACAF/MeetingDocs/2025/Seminar%20on%20Aircraft/AI_SPECIFIC_APPROVAL-2025-ETOPS-EDTO_Part1_v1_0_OPT.pdf
- Wikipedia — Boeing 777 (777F) — https://en.wikipedia.org/wiki/Boeing_777

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-25 | Initial draft — dispatch built from public Boeing/SKYbrary/ICAO data + VAMSYS mirror; OpsSpec values applied (contingency 5%/ERA, final reserve 30 min, tankering case-by-case); **EDTO decision: rule time left 🟧 pending OpsSpec** (freighter excluded from batch 1; matrix is source of truth; not inherited from B77W's 180 min — expected default once set) 🟥; freighter main-deck loading/CG discipline captured; capability values cross-linked to the Fleet Capability Matrix; no type OFP yet (watch-item). |
