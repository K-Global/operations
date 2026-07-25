<!--
================================================================================
  K Global — AIRFRAME PACK · DISPATCH  ·  GLF5 Gulfstream G550
  Curated layer. Anonymous · version-controlled · public sources only.
  FLAG LEGEND  🟥 hard requirement/hazard   🟧 caution/unverified   🟩 normal/confirmed
================================================================================
-->

# GLF5 — Gulfstream G550 · Dispatch

**GLF5 / Gulfstream GV-SP family** · Ultra-long-range large-cabin business jet, Executive unit (VIP)
**Version** v0.1 · **Updated** 2026-07-25 · **Status** Draft

> **Read-me:** How this type is dispatched at K Global. Method (fuel policy) is defined once in OM E — this file **applies** it to the GLF5, adapted for **Executive-unit VIP charter operation**, which is a different dispatch paradigm from the scheduled mainline pax/cargo network. Capability values are held in the Fleet Capability Matrix secondary table (🟧 indicative) — cited, not restated. Flag legend 🟥 hard · 🟧 caution · 🟩 normal.

---

## 1. Snapshot (planning)

| Field | Value |
|---|---|
| OEW / MTOW | ~21,909 / ~41,277 kg 🟩 |
| Gross weight (published) / MLW | ~24,721 kg 🟧 (possible MZFW proxy) / ~34,156 kg 🟩 |
| Max fuel | ~18,733 kg 🟩 |
| Payload (K Global config) | VIP — indicative 14–19 pax, exact cabin config pending VAMSYS reseed `[VERIFY — VAMSYS]` |
| Typical block burn | ~2,000–2,300 kg first hour, decreasing to ~1,100–1,400 kg by hour three (public reference, LRC profile) 🟧 — no GLF5 reference OFP yet 🟧 |
| Cost index (default) | Not a mainline-style route-economics decision for this unit — VIP missions typically prioritise time/comfort over fuel cost; set per OM E guidance if adopted 🟧 |
| Reserve rule | Per OM E fuel policy (final reserve + alternate) — apply the generic policy; no bizjet-specific override on file 🟧 |
| Contingency | Per OM E fuel policy — apply the generic policy 🟧 |
| ETOPS/EDTO | **Not the operating paradigm** — see §5 |

## 2. SimBrief setup

- **Airframe profile:** GLF5 (Gulfstream G550) — SimBrief GLF5/G550 profile
- **Aircraft-data overrides:** OEW / MTOW / MLW / max fuel — set to VAMSYS mirror figures where they differ from SimBrief defaults 🟧 `[VERIFY]`; ceiling FL510; engines BR710 🟩
- **Dispatch overrides:** reserve rule, contingency, fuel factor, cruise mode/sub per OM E generic fuel policy — no bizjet-specific OpsSpec override recorded yet 🟧; **no ETOPS/EDTO rule-time selector applies to this unit** — see §5
- **Fuel overrides:** minfob / minfod / atc / mel / wxx / added / tankering — default unless mission-specific; tankering less relevant given the type's already-large fuel fraction relative to payload 🟧
- Basis: VAMSYS `simbrief_overrides` for this type — not yet confirmed `[VERIFY — VAMSYS]`

## 3. Fuel policy applied

OM E's generic fuel policy resolves for the GLF5 as taxi + trip + contingency + alternate + final reserve + any additional/holding, per the same structure applied fleet-wide — see `../../../OM E Operations/Fuel Policy.md`. No Executive-unit-specific fuel policy override is recorded; this file applies the mainline generic policy pending an Executive-unit decision. **Tankering** is of limited relevance to this type: the G550 already carries a large fuel fraction (~18,733 kg) relative to its typical VIP payload, so price-driven tankering upside is smaller than for a payload-constrained mainline aircraft — assess case-by-case per OM E if used at all.

## 4. Payload & loading

- K Global config: VIP — indicative 14–19 pax (2 pilots + 0–2 cabin attendants), exact cabin configuration and seat/berth layout pending VAMSYS reseed `[VERIFY — VAMSYS]`.
- No belly-cargo role for this type — VIP baggage only, within the ~4.81 m³ usable baggage-compartment volume (public reference); standard pax/bag weight assumptions per OM E loading policy apply where relevant, adapted for the much smaller headcount typical of VIP charter.
- Weight-and-balance: apply standard business-jet CG discipline; keep loaded weight within the confirmed MTOW (~41,277 kg) / MLW (~34,156 kg) limits, noting the published "gross weight" (~24,721 kg) may approximate MZFW pending confirmation (see Intro §5).

## 5. Long-range over-water operation 🟥 — not an ETOPS/EDTO rule-time type

- **The GLF5 is not dispatched under an ETOPS/EDTO rule-time framework the way the mainline twin fleet is.** Executive-unit VIP charter is not a scheduled network service, and classic ETOPS/EDTO rule-time approvals are a mainline-fleet OpsSpec construct (see [Fleet Capability Matrix](../capability-matrix.md) Table A and `../../../OM E Operations/ETOPS-EDTO Procedures.md`) that has not been extended to this unit.
- **What actually applies:** the GLF5 is an ultra-long-range twin (~6,750 NM structural range, endurance ~14.5 hr on the closely related GV airframe) that **routinely flies intercontinental and transoceanic sectors without an intermediate stop**. Long-range over-water/remote-area planning for this unit should still address diversion-airport adequacy, oceanic communications/navigation requirements, and fuel reserves for the specific routing — but as a **route-by-route VIP mission-planning exercise**, not a fleet-wide approved rule time.
- **Watch-item:** if K Global's Executive unit begins flying this type on a more scheduled or repeat-route basis such that a formal rule-time/adequate-aerodrome approval becomes appropriate, that would be a new OM E / OpsSpec decision — not yet made. Do not assume a rule time by analogy to the mainline widebody twins.

## 6. Steep approach / LCY capability 🟧

- The G550/GV-SP family is **commonly cited among steep-approach/LCY-capable business-jet types**, alongside the G650, Falcon 7X and Challenger/Legacy-class aircraft (public reference: Simple Flying's LCY-approved-aircraft roundup). The type's short-field performance (~1,800 m take-off / ~840 m landing run) supports this reputation.
- **This is a type-capability data point, not a confirmed K Global operator approval.** Whether K Global's Executive unit is approved to fly steep/LCY-class approaches on the GLF5 is **not yet decided** — it ties directly into the OM E **Steep Approach Operations** deferred decision, which currently notes several business-jet types (Falcon 7X, Challenger/Legacy-class, Gulfstream) as options once the mainline steep-approach solution (expected to be Embraer E190/E195-based) is resolved. See `../../../OM E Operations/Steep Approach Operations.md` and the Fleet Capability Matrix §Open items.
- **Do not treat this type as steep-approach-operational at K Global** until that OM E decision is made and recorded here.

## 7. Dispatch watch-items

| Item | Flag | Note |
|---|---|---|
| No GLF5 reference OFP yet | 🟧 | Burn figures are public-Gulfstream-derived — replace with type OFP figures when first flown |
| "Gross weight" vs MZFW | 🟧 | Published Gulfstream figure (~24,721 kg) may approximate MZFW — confirm terminology before use in performance planning |
| Steep approach / LCY operator approval | 🟥 | Type commonly cited as steep-approach/LCY-capable; **K Global operator approval not yet decided** — OM E Steep Approach Operations deferred |
| ETOPS/EDTO rule time | 🟩 | Not applicable as a mainline-style approval for this unit — long-range over-water flights are planned mission-by-mission (§5) |
| Sim model unconfirmed | 🟧 | X-Plane Gulfstream G550 add-on not yet a confirmed management decision — see Intro §2 |
| VIP config / VAMSYS reseed | 🟧 | Exact pax config and tail split (GLF5 vs GLF6, currently combined at 12 total) pending live VAMSYS read |

---

## Sources & References
*Public URLs only. Private/OEM/add-on documents may inform content but must never be listed here.*

- Wikipedia — Gulfstream G550 — https://en.wikipedia.org/wiki/Gulfstream_G550
- Simple Flying — Which Aircraft Can Land At London City Airport? — https://simpleflying.com/london-city-airport-approved-aircraft/
- Wikipedia — Gulfstream V (closely related GV airframe; endurance/range reference) — https://en.wikipedia.org/wiki/Gulfstream_V

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-25 | Initial draft — dispatch built from public Wikipedia data; Executive-unit VIP fuel-policy framing (generic OM E policy applied, no bizjet override yet); long-range over-water note replaces an ETOPS/EDTO rule time (not the operating paradigm); steep-approach/LCY flagged as type-capable but operator-unapproved, tied to the OM E deferred decision. |
