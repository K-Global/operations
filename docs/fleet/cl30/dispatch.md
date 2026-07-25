<!--
================================================================================
  K Global — AIRFRAME PACK · DISPATCH  ·  CL30 Bombardier Challenger 300
  Curated layer. Anonymous · version-controlled · public sources only.
  FLAG LEGEND  🟥 hard requirement/hazard   🟧 caution/unverified   🟩 normal/confirmed
================================================================================
-->

# CL30 — Bombardier Challenger 300 · Dispatch

**CL30 / Bombardier Challenger 300** · Super-midsize business jet, Executive unit VIP/charter-style ops
**Version** v0.1 · **Updated** 2026-07-25 · **Status** Draft

> **Read-me:** How this type is dispatched at K Global. Method (fuel policy, EDTO rules) is defined once in OM E — this file **applies** it to the CL30. Capability values are held in the Fleet Capability Matrix secondary (indicative) table — cited, not restated. Flag legend 🟥 hard · 🟧 caution · 🟩 normal.

---

## 1. Snapshot (planning)

| Field | Value |
|---|---|
| OEW / MTOW / Max payload | ~10,659 / ~17,622 / ~1,588 kg 🟩 |
| Max fuel | ~6,418 kg (~14,150 lb) 🟩 |
| Payload (K Global config) | ~8–9 pax VIP configuration `[VERIFY — VAMSYS]` — no belly-cargo role; bizjet baggage compartment only |
| Typical cruise burn | ~1,500 lb/hr at M0.80; ~1,929 lb/hr at M0.83 (public reference) 🟧 — no CL30 reference OFP yet 🟧 |
| Cost index (default) | Per OM E / mission economics — no CL30 reference OFP CI yet 🟧 `[VERIFY]` |
| Reserve rule | Final reserve **30 min** + alternate per OM E fuel policy 🟩 `[K Global OpsSpec 2026-07-25]` (generic policy; applies fleet-wide, bizjet ops included) |
| Contingency | **5% / ERA** per OM E fuel policy 🟩 `[K Global OpsSpec 2026-07-25]` |
| Engines | **2 × Honeywell HTF7000** — twin 🟩 |
| EDTO/diversion-time | Type-applicable classic ETOPS construct (twin), but **no K Global operator rule time established** — see §5 |

## 2. SimBrief setup

- **Airframe profile:** Challenger 300 (CL30) — SimBrief CL30 profile 🟧 `[VERIFY — confirm exact profile availability/defaults]`
- **Aircraft-data overrides:** OEW / MTOW / max fuel / max payload — set to VAMSYS mirror figures where they differ from SimBrief defaults 🟧 `[VERIFY]`; ceiling FL450; engines 2 × HTF7000; equipage per fleet standard once confirmed (RVSM, PBN — see matrix secondary table, all 🟧 indicative for this type) 🟧 `[VERIFY]`
- **Dispatch overrides:** reserve rule (final reserve 30 min), contingency 5%/ERA, fuel factor, cruise mode/sub, climb/descent per OM E; **no EDTO threshold/rule-time selector applies** — do not set one without an explicit OpsSpec value (see §5)
- **Fuel overrides:** minfob / minfod / atc / mel / wxx / added / tankering — default unless mission-specific; VIP/charter missions may carry PIC-discretion extra fuel per OM E `[K Global OpsSpec 2026-07-25 batch 3]` 🟧
- Basis: VAMSYS `simbrief_overrides` for this type, once populated `[VAMSYS mirror 2026-07-25]`

## 3. Fuel policy applied

OM E's generic fuel policy resolves for the CL30 as taxi + trip + **contingency (5% / ERA)** + alternate + **final reserve (30 min)** + any additional/holding `[K Global OpsSpec 2026-07-25]`. Public cruise burn is **~1,500–1,929 lb/hr** depending on cruise Mach 🟧 against ~6,418 kg max fuel — reserve margin is adequate for the type's typical VIP/charter mission lengths, but is proportionally tighter than the larger Falcon 7X given the smaller fuel load; confirm reserves on the longest planned mission. **Tankering:** bizjet missions are typically shorter and more variable in routing than mainline trunk sectors; assess price differentials case-by-case, weight/CG permitting, per OM E's tankering policy (case-by-case authorisation, ≥10% per OpsSpec batch 3) `[K Global OpsSpec 2026-07-25]`. Exact reserve/contingency values are defined in OM E — apply, do not restate here beyond the figures above. See `../../../OM E Operations/Fuel Policy.md`.

## 4. Payload & loading

- K Global config: **~8–9 pax VIP configuration** `[VERIFY — VAMSYS]`; no belly/cargo hold role (bizjet baggage compartment only, within max payload ~1,588 kg).
- Standard pax/bag weights per OM E loading policy; keep ZFW within structural limits and CG within envelope. 🟧
- **Short-field:** published figures (TO ~1,466 m, landing ~792 m) are solid for the class but not independently assessed against specific K Global network fields. 🟧

## 5. EDTO / ETOPS 🟥

- **Type fact — twin, classic-ETOPS-applicable 🟩:** the Challenger 300 carries **two** Honeywell HTF7000 engines — the classic ETOPS twin-engine construct type-applies, unlike the FA7X trijet. This is a type fact only.
- **No K Global operator rule time exists for this type 🟥:** unlike the mainline twins (120/180 min per OpsSpec batch 1), **no OpsSpec value has been set for the CL30**. Per the task brief and general OM E discipline: **do not assert an ETOPS/EDTO rule time for this type.** Any mission approaching an extended-diversion scenario (long overwater/remote VIP charter sector, unlikely given the type's shorter ~3,100 NM range but not excluded) must be assessed case-by-case and confirmed operationally before dispatch — an open item, not a cleared capability.
- **En-route alternates:** selected per mission from the OM E adequate-aerodrome set; no CL30 reference OFP alternates yet on file 🟧 — populate when the first type OFP is flown.
- See `../../../OM E Operations/ETOPS-EDTO Procedures.md` and [Fleet Capability Matrix](../capability-matrix.md) secondary table.

## 6. Route applicability

- **Cleared/typical:** Executive-unit VIP/charter-style missions, on-demand point-to-point, not fixed trunk routes. ~3,100 NM structural range covers most VIP/charter sectors within and between K Global's regions; shorter-range than the Falcon 7X/Gulfstream pair.
- **Steep approach / London City:** **not** typically an LCY candidate for this type (Intro §3) — no action required for the OM E steep-approach deferral unless a future source confirms otherwise.
- **Watch:** confirm reserves on any mission approaching the ~3,100 NM structural range; short-field figures are favourable on paper but unassessed against specific network fields.
- Link to OM C route briefs (planned, VIP/charter missions not yet route-briefed): OM C route briefs (planned).

## 7. Dispatch watch-items

| Item | Flag | Note |
|---|---|---|
| No CL30 reference OFP yet | 🟧 | Burn/CI/alternates are public-Bombardier-derived — replace with type OFP figures when first flown |
| No K Global EDTO rule time | 🟥 | Twin, type-applicable classic ETOPS construct, but no operator rule time set — do not assume one; assess any extended-diversion mission case-by-case |
| Range vs longest planned mission | 🟧 | ~3,100 NM structural (public reference; ~3,065 NM also cited) — confirm reserves on the longest sector |
| Not a steep-approach candidate | 🟩 | Recorded for completeness — no LCY/steep-field action expected for this type |
| SimBrief profile availability | 🟧 | Confirm the CL30 profile exists/defaults correctly in SimBrief before first dispatch |
| Sim model unconfirmed | 🟧 | An X-Plane 11 CL30 add-on exists in K Global's reference material; formal approval pending — see Intro §2 |

---

## Sources & References
*Public URLs only. Private/OEM/add-on documents may inform content but must never be listed here.*

- Bombardier Business Aircraft — Challenger 300/350 — https://businessaircraft.bombardier.com
- Wikipedia — Bombardier Challenger 300 (weights, range, fuel flow, field lengths, HTF7000) — https://en.wikipedia.org/wiki/Bombardier_Challenger_300
- Transport Canada — Type Certificate Data Sheet A-234 (Challenger 300/350) — https://wwwapps.tc.gc.ca/saf-sec-sur/2/nico-celn/c_d.aspx

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-25 | Initial draft — dispatch built from public Bombardier/Wikipedia data + VAMSYS mirror; OpsSpec values applied where generic (contingency 5%/ERA, final reserve 30 min, tankering case-by-case); twin-engine EDTO type-note recorded with explicit no-rule-time flag (per task instruction, no ETOPS rule time asserted); explicitly recorded as not a steep-approach candidate; no type OFP yet (watch-item). |
