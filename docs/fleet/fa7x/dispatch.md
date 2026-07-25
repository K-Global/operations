<!--
================================================================================
  K Global — AIRFRAME PACK · DISPATCH  ·  FA7X Dassault Falcon 7X
  Curated layer. Anonymous · version-controlled · public sources only.
  FLAG LEGEND  🟥 hard requirement/hazard   🟧 caution/unverified   🟩 normal/confirmed
================================================================================
-->

# FA7X — Dassault Falcon 7X · Dispatch

**FA7X / Dassault Falcon 7X** · Large-cabin trijet business jet, Executive unit VIP/charter-style ops
**Version** v0.1 · **Updated** 2026-07-25 · **Status** Draft

> **Read-me:** How this type is dispatched at K Global. Method (fuel policy, EDTO rules) is defined once in OM E — this file **applies** it to the FA7X. Capability values are held in the Fleet Capability Matrix secondary (indicative) table — cited, not restated. Flag legend 🟥 hard · 🟧 caution · 🟩 normal.

---

## 1. Snapshot (planning)

| Field | Value |
|---|---|
| BOW / MTOW / Max payload | ~16,601 / ~31,751 / ~1,996 kg 🟩 |
| Max fuel | ~14,488 kg (~31,940 lb) 🟩 |
| Payload (K Global config) | ~12–16 pax VIP configuration `[VERIFY — VAMSYS]` — no belly-cargo role; bizjet baggage compartment only |
| Typical cruise burn | ~2,250 lb/hr (~1.02 t/hr); first-hour burn ~4,000 lb (climb-inclusive) (public reference) 🟧 — no FA7X reference OFP yet 🟧 |
| Cost index (default) | Per OM E / mission economics — no FA7X reference OFP CI yet 🟧 `[VERIFY]` |
| Reserve rule | Final reserve **30 min** + alternate per OM E fuel policy 🟩 `[K Global OpsSpec 2026-07-25]` (generic policy; applies fleet-wide, bizjet ops included) |
| Contingency | **5% / ERA** per OM E fuel policy 🟩 `[K Global OpsSpec 2026-07-25]` |
| Engines | **3 × PW307A** — trijet; three-engine redundancy is dispatch-relevant (see §5) 🟩 |
| EDTO/diversion-time | **No K Global operator rule time established** for this type — see §5 |

## 2. SimBrief setup

- **Airframe profile:** Falcon 7X (FA7X) — SimBrief FA7X profile 🟧 `[VERIFY — confirm exact profile availability/defaults]`
- **Aircraft-data overrides:** BOW / MTOW / max fuel / max payload — set to VAMSYS mirror figures where they differ from SimBrief defaults 🟧 `[VERIFY]`; ceiling FL510; engines 3 × PW307A; equipage per fleet standard once confirmed (RVSM, PBN — see matrix secondary table, all 🟧 indicative for this type) 🟧 `[VERIFY]`
- **Dispatch overrides:** reserve rule (final reserve 30 min), contingency 5%/ERA, fuel factor, cruise mode/sub, climb/descent per OM E; **no EDTO threshold/rule-time selector applies** — do not set one without an explicit OpsSpec value (see §5)
- **Fuel overrides:** minfob / minfod / atc / mel / wxx / added / tankering — default unless mission-specific; VIP/charter missions may carry PIC-discretion extra fuel per OM E `[K Global OpsSpec 2026-07-25 batch 3]` 🟧
- Basis: VAMSYS `simbrief_overrides` for this type, once populated `[VAMSYS mirror 2026-07-25]`

## 3. Fuel policy applied

OM E's generic fuel policy resolves for the FA7X as taxi + trip + **contingency (5% / ERA)** + alternate + **final reserve (30 min)** + any additional/holding `[K Global OpsSpec 2026-07-25]`. Public cruise burn is **~2,250 lb/hr (~1.02 t/hr)** 🟧 against ~14,488 kg max fuel — the type's structural efficiency (BOW roughly half MTOW) gives generous reserve margin relative to typical VIP/charter mission lengths. **Tankering:** bizjet missions are typically shorter and more variable in routing than mainline trunk sectors; assess price differentials case-by-case, weight/CG permitting, per OM E's tankering policy (case-by-case authorisation, ≥10% per OpsSpec batch 3) `[K Global OpsSpec 2026-07-25]`. Exact reserve/contingency values are defined in OM E — apply, do not restate here beyond the figures above. See `../../../OM E Operations/Fuel Policy.md`.

## 4. Payload & loading

- K Global config: **~12–16 pax VIP configuration** `[VERIFY — VAMSYS]`; no belly/cargo hold role (bizjet baggage compartment only, within max payload ~1,996 kg).
- Standard pax/bag weights per OM E loading policy; keep ZFW within structural limits and CG within envelope. 🟧
- **Short-field / hot-and-high:** the type's published short-field figures (TO BFL ~1,740 m, landing ~631 m) suggest favourable performance at constrained fields, but this has **not** been assessed against specific K Global network fields — treat as an open item, not a cleared capability. 🟧

## 5. EDTO / ETOPS — trijet note 🟥

- **Type fact — trijet, not a classic-ETOPS twin 🟩:** the Falcon 7X carries **three** PW307A engines. Classic ETOPS is a twin-engine construct; it does not apply to this type in the way it applies to the mainline narrowbody/widebody twins. The relevant framework for 3+-engine aircraft is the broader **ICAO EDTO adequate-aerodrome concept** (Annex 6), which applies to aeroplanes with two or more engines — the same framing K Global uses for the quad types (A346/A388/B748) in the mainline fleet. See [Fleet Capability Matrix](../capability-matrix.md) §"EDTO vs ETOPS" note and `../../../OM E Operations/ETOPS-EDTO Procedures.md`.
- **No K Global operator rule time exists for this type 🟥:** unlike the mainline twins (120/180 min per OpsSpec batch 1) and unlike the quads (adequate-aerodrome concept, rule time not applicable), **no OpsSpec value has been set for the FA7X**. Per the task brief and general OM E discipline: **do not assert an ETOPS/EDTO rule time for this type.** Any mission approaching an extended-diversion scenario (long overwater/remote VIP charter sector) must be assessed case-by-case against the OM E adequate-aerodrome framework and confirmed operationally before dispatch — this is an open item, not a cleared capability.
- **En-route alternates:** selected per mission from the OM E adequate-aerodrome set; no FA7X reference OFP alternates yet on file 🟧 — populate when the first type OFP is flown.

## 6. Route applicability

- **Cleared/typical:** Executive-unit VIP/charter-style missions, on-demand point-to-point, not fixed trunk routes. ~5,950 NM (8 pax) structural range covers long-range VIP sectors comfortably.
- **Steep approach / London City (EGLC) candidacy 🟧:** flagged prominently per Intro §3 and the OM E Steep Approach doc — the Falcon 7X is commonly cited in business-aviation sources as an LCY-class candidate, but this is **not** an operator approval and the specific certification has not been independently confirmed to a primary source in this pass. If K Global's network ever serves EGLC or an equivalent steep field with this type, the operator steep-approach approval (crew qualification, configuration, VREF additive, go-around gradient) must be separately established per `../../../OM E Operations/Steep Approach Operations.md` before any such mission is flown.
- **Watch:** hot-and-high/short-field performance is favourable on paper (§4) but unassessed against specific network fields; confirm before committing any mission to a short/constrained field.
- Link to OM C route briefs (planned, VIP/charter missions not yet route-briefed): OM C route briefs (planned).

## 7. Dispatch watch-items

| Item | Flag | Note |
|---|---|---|
| No FA7X reference OFP yet | 🟧 | Burn/CI/alternates are public-Dassault-derived — replace with type OFP figures when first flown |
| No K Global EDTO/EDTO-equivalent rule time | 🟥 | Trijet; adequate-aerodrome concept applies (2+ engines) but no operator rule time set — do not assume one; assess any extended-diversion mission case-by-case |
| Steep approach / London City candidacy | 🟧 | Prominently flagged, not operator-approved, not independently source-confirmed — open item for the OM E steep-approach decision |
| Hot-and-high / short-field performance | 🟧 | Published figures favourable but unassessed against K Global network fields |
| SimBrief profile availability | 🟧 | Confirm the FA7X profile exists/defaults correctly in SimBrief before first dispatch |
| Sim model unconfirmed | 🟧 | No approved X-Plane 11 add-on on file — see Intro §2 |

---

## Sources & References
*Public URLs only. Private/OEM/add-on documents may inform content but must never be listed here.*

- Dassault Aviation / Dassault Falcon — Falcon 7X aircraft page — https://www.dassaultfalcon.com/aircraft/falcon-7x
- Wikipedia — Dassault Falcon 7X (weights, range, fuel burn, field lengths, PW307A) — https://en.wikipedia.org/wiki/Dassault_Falcon_7X
- EASA — Type Certificate Data Sheet A155 (Dassault Falcon 7X) — https://www.easa.europa.eu/en/document-library/type-certificates
- SKYbrary — Steep Approach — https://skybrary.aero/articles/steep-approach

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-25 | Initial draft — dispatch built from public Dassault/Wikipedia data + VAMSYS mirror; OpsSpec values applied where generic (contingency 5%/ERA, final reserve 30 min, tankering case-by-case); trijet/EDTO-adequate-aerodrome note recorded with explicit no-rule-time flag (per task instruction, no ETOPS rule time asserted); steep-approach/London City candidacy carried through from Intro; no type OFP yet (watch-item). |
