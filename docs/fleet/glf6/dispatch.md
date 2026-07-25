<!--
================================================================================
  K Global — AIRFRAME PACK · DISPATCH  ·  GLF6 Gulfstream G650ER
  Curated layer. Anonymous · version-controlled · public sources only.
  FLAG LEGEND  🟥 hard requirement/hazard   🟧 caution/unverified   🟩 normal/confirmed
================================================================================
-->

# GLF6 — Gulfstream G650ER · Dispatch

**GLF6 / Gulfstream GVI family** · Ultra-long-range large-cabin business jet, Executive unit (VIP)
**Version** v0.1 · **Updated** 2026-07-25 · **Status** Draft

> **Read-me:** How this type is dispatched at K Global. Method (fuel policy) is defined once in OM E — this file **applies** it to the GLF6, adapted for **Executive-unit VIP charter operation**, which is a different dispatch paradigm from the scheduled mainline pax/cargo network. Capability values are held in the Fleet Capability Matrix secondary table (🟧 indicative) — cited, not restated. Flag legend 🟥 hard · 🟧 caution · 🟩 normal.

---

## 1. Snapshot (planning)

| Field | Value |
|---|---|
| OEW / MTOW (ER) | ~24,700 / ~46,990 kg 🟧 `[VERIFY]` |
| MZFW / MLW | Not confirmed from public source in this build 🟧 `[VERIFY]` |
| Max fuel | ER adds ~1,814 kg over standard G650 (exact ER total not confirmed) 🟧 `[VERIFY]` |
| Payload (K Global config) | VIP — indicative 8–19 pax, exact cabin config pending VAMSYS reseed `[VERIFY — VAMSYS]` |
| Typical block burn | ~1,090 kg/hr at M0.85/FL470 (public reference), rising to ~1,360 kg/hr at M0.90 🟧 — no GLF6 reference OFP yet 🟧 |
| Cost index (default) | Not a mainline-style route-economics decision for this unit — VIP missions typically prioritise time/comfort over fuel cost; set per OM E guidance if adopted 🟧 |
| Reserve rule | Per OM E fuel policy (final reserve + alternate) — apply the generic policy; no bizjet-specific override on file 🟧 |
| Contingency | Per OM E fuel policy — apply the generic policy 🟧 |
| ETOPS/EDTO | **Not the operating paradigm** — see §5 |

## 2. SimBrief setup

- **Airframe profile:** GLF6 (Gulfstream G650ER) — SimBrief GLF6/G650 profile family
- **Aircraft-data overrides:** OEW / MTOW / max fuel — set to VAMSYS mirror figures where they differ from SimBrief defaults 🟧 `[VERIFY]`; ceiling FL510; engines BR725 🟧 `[VERIFY]`
- **Dispatch overrides:** reserve rule, contingency, fuel factor, cruise mode/sub per OM E generic fuel policy — no bizjet-specific OpsSpec override recorded yet 🟧; **no ETOPS/EDTO rule-time selector applies to this unit** — see §5
- **Fuel overrides:** minfob / minfod / atc / mel / wxx / added / tankering — default unless mission-specific; tankering less relevant given the type's already-large fuel fraction relative to payload 🟧
- Basis: VAMSYS `simbrief_overrides` for this type — not yet confirmed `[VERIFY — VAMSYS]`

## 3. Fuel policy applied

OM E's generic fuel policy resolves for the GLF6 as taxi + trip + contingency + alternate + final reserve + any additional/holding, per the same structure applied fleet-wide — see `../../../OM E Operations/Fuel Policy.md`. No Executive-unit-specific fuel policy override is recorded; this file applies the mainline generic policy pending an Executive-unit decision. **Tankering** is of limited relevance to this type: the G650ER already carries a very large fuel fraction relative to its typical VIP payload (8–19 pax vs ~46,990 kg MTOW), so price-driven tankering upside is smaller than for a payload-constrained mainline aircraft — assess case-by-case per OM E if used at all.

## 4. Payload & loading

- K Global config: VIP — indicative 8–19 pax, exact cabin configuration and seat/berth layout pending VAMSYS reseed `[VERIFY — VAMSYS]`.
- No belly-cargo role for this type — VIP baggage only, within the aircraft's baggage-compartment volume; standard pax/bag weight assumptions per OM E loading policy apply where relevant, adapted for the much smaller headcount typical of VIP charter.
- Weight-and-balance: apply standard business-jet CG discipline; keep loaded weight within confirmed limits once MZFW/MLW are sourced (see Intro §5 — currently 🟧 `[VERIFY]`).

## 5. Long-range over-water operation 🟥 — not an ETOPS/EDTO rule-time type

- **The GLF6 is not dispatched under an ETOPS/EDTO rule-time framework the way the mainline twin fleet is.** Executive-unit VIP charter is not a scheduled network service, and classic ETOPS/EDTO rule-time approvals are a mainline-fleet OpsSpec construct (see [Fleet Capability Matrix](../capability-matrix.md) Table A and `../../../OM E Operations/ETOPS-EDTO Procedures.md`) that has not been extended to this unit.
- **What actually applies:** the GLF6 is an ultra-long-range twin (~7,500 NM structural range) that **routinely flies intercontinental and transoceanic sectors without an intermediate stop** — real-world G650ER flights have covered Hong Kong–Teterboro and Singapore–Tucson non-stop. Long-range over-water/remote-area planning for this unit should still address diversion-airport adequacy, oceanic communications/navigation requirements, and fuel reserves for the specific routing — but as a **route-by-route VIP mission-planning exercise**, not a fleet-wide approved rule time.
- **Watch-item:** if K Global's Executive unit begins flying this type on a more scheduled or repeat-route basis such that a formal rule-time/adequate-aerodrome approval becomes appropriate, that would be a new OM E / OpsSpec decision — not yet made. Do not assume a rule time by analogy to the mainline widebody twins.

## 6. Steep approach / LCY capability 🟧

- Gulfstream conducted **G650 steep-approach certification trials at London City Airport (LCY) in September 2018** (public source, AIN) — LCY requires a ~5.5° approach, steeper than the ~3° standard, and is commonly used as the reference case for steep-approach-capable business jets.
- **This is a type-capability data point, not a confirmed K Global operator approval.** Whether K Global's Executive unit is approved to fly steep/LCY-class approaches on the GLF6 is **not yet decided** — it ties directly into the OM E **Steep Approach Operations** deferred decision, which currently notes several business-jet types (Falcon 7X, Challenger/Legacy-class, Gulfstream) as options once the mainline steep-approach solution (expected to be Embraer E190/E195-based) is resolved. See `../../../OM E Operations/Steep Approach Operations.md` and the Fleet Capability Matrix §Open items.
- **Do not treat this type as steep-approach-operational at K Global** until that OM E decision is made and recorded here.

## 7. Dispatch watch-items

| Item | Flag | Note |
|---|---|---|
| No GLF6 reference OFP yet | 🟧 | Burn figures are public-Gulfstream-derived — replace with type OFP figures when first flown |
| MZFW / MLW not confirmed | 🟧 | Not published by OEM in the sources used for this build — source from VAMSYS/OEM before performance planning |
| Steep approach / LCY operator approval | 🟥 | Type conducted LCY trials (2018); **K Global operator approval not yet decided** — OM E Steep Approach Operations deferred |
| ETOPS/EDTO rule time | 🟩 | Not applicable as a mainline-style approval for this unit — long-range over-water flights are planned mission-by-mission (§5) |
| Sim model unconfirmed | 🟧 | X-Plane Gulfstream G650 add-on not yet a confirmed management decision — see Intro §2 |
| VIP config / VAMSYS reseed | 🟧 | Exact pax config and tail split (GLF6 vs GLF5, currently combined at 12 total) pending live VAMSYS read |

---

## Sources & References
*Public URLs only. Private/OEM/add-on documents may inform content but must never be listed here.*

- Wikipedia — Gulfstream G650 / G700 / G800 — https://en.wikipedia.org/wiki/Gulfstream_G650
- SKYbrary — Gulfstream Aerospace G650 (GLF6) — https://skybrary.aero/aircraft/glf6
- Aviation International News — Gulfstream G650 Conducts Steep Approach Trials at LCY (2018) — https://www.ainonline.com/aviation-news/business-aviation/2018-09-20/gulfstream-g650-conducts-steep-approach-trials-lcy
- Simple Flying — Which Aircraft Can Land At London City Airport? — https://simpleflying.com/london-city-airport-approved-aircraft/

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-25 | Initial draft — dispatch built from public Wikipedia/SKYbrary/AIN data; Executive-unit VIP fuel-policy framing (generic OM E policy applied, no bizjet override yet); long-range over-water note replaces an ETOPS/EDTO rule time (not the operating paradigm); steep-approach/LCY flagged as type-capable but operator-unapproved, tied to the OM E deferred decision. |
