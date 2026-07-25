<!--
================================================================================
  K Global — AIRFRAME PACK · DISPATCH  ·  PC12 Pilatus PC-12
  Curated layer. Anonymous · version-controlled · public sources only.
  FLAG LEGEND  🟥 hard requirement/hazard   🟧 caution/unverified   🟩 normal/confirmed
================================================================================
-->

# PC12 — Pilatus PC-12 · Dispatch

**PC12 / Pilatus PC-12** · Single-engine turboprop, Executive-unit short/regional
**Version** v0.1 · **Updated** 2026-07-25 · **Status** Draft

> **Read-me:** How this type is dispatched at K Global. Method (fuel policy, alternate/reserve logic) is defined once in OM E — this file **applies** it to the PC12, with adjustments for its single-engine turboprop character (§5). Capability values are held in the Fleet Capability Matrix secondary (indicative) table — cited, not restated. Flag legend 🟥 hard · 🟧 caution · 🟩 normal.

---

## 1. Snapshot (planning)

| Field | Value |
|---|---|
| Empty weight / MZFW / MTOW / MLW | 2,810 🟩 / 4,100 🟩 / 4,740 🟩 / 4,500 🟩 kg |
| Max fuel | 1,226 kg (~1,521 L) 🟩 |
| Payload (K Global config) | `[VERIFY — VAMSYS]`; manufacturer reference 6–9 pax |
| Typical block burn | **~189 kg/hr average** — derived (max fuel ÷ endurance at 1,845 NM/285 kn cruise), not a primary OFP figure 🟧 |
| Cost index (default) | Not a standard jet-style CI parameter for a single-engine turboprop dispatch profile 🟧 `[VERIFY — confirm how SimBrief models this type]` |
| Reserve rule | Final reserve **30 min** + alternate per OM E fuel policy 🟩 `[K Global OpsSpec 2026-07-25]` |
| Contingency | **5% / ERA** per OM E fuel policy 🟩 `[K Global OpsSpec 2026-07-25]` |
| ETOPS/EDTO | **Not applicable — single engine.** No twin-engine diversion-time concept applies; see §5 |

## 2. SimBrief setup

- **Airframe profile:** PC12 — understood to exist in SimBrief's aircraft-type list 🟧 `[VERIFY]`; confirm the profile matches the delivered K Global sub-variant (standard PC-12/47E vs "NG"/"NGX" avionics/engine upgrade) before dispatch.
- **Aircraft-data overrides:** empty weight / MZFW / MTOW / MLW / max fuel — set to VAMSYS mirror figures where they differ from SimBrief defaults 🟧 `[VERIFY]`; ceiling FL300; single PT6A-67P turboprop 🟩.
- **Dispatch overrides:** reserve rule (final reserve 30 min), contingency 5%/ERA, fuel factor, climb/descent per OM E; **no ETOPS/EDTO threshold selector applies** (§5) — confirm the SimBrief profile does not silently apply a twin-engine EDTO logic to this type.
- **Fuel overrides:** minfob / minfod / atc / mel / wxx / added / tankering — default unless route-specific; tankering headroom is minimal given the ~1,521 L tank (§3) 🟧.
- Basis: VAMSYS `simbrief_overrides` for this type, where populated `[VAMSYS mirror 2026-07-25]`.

## 3. Fuel policy applied

OM E's generic fuel policy resolves for the PC12 as taxi + trip + **contingency (higher of 5% of trip, or 3% with a suitable en-route alternate)** + alternate + **final reserve (30 min)** + any additional/discretionary `[K Global OpsSpec 2026-07-25]`. No primary per-hour burn figure is on file for this type; the **~189 kg/hr** average cited in §1 is a derived sanity-check only (1,226 kg max fuel over the ~6.5 hr endurance implied by 1,845 NM at 285 kn cruise), not a substitute for a flown OFP. **Tankering:** the PC-12's small (~1,521 L) tank leaves negligible tankering headroom under the OM E ≥10% price-differential guideline `[K Global OpsSpec 2026-07-25]` — tankering is not a meaningful lever for this type; plan fuel to mission requirement rather than price arbitrage. See `../../../OM E Operations/Fuel Policy.md`.

## 4. Payload & loading

- K Global config: `[VERIFY — VAMSYS]`; manufacturer reference 6–9 passenger seats.
- Standard pax/bag weights per OM E loading policy where applicable to Executive-unit charter-style manifests; keep ZFW within MZFW **4,100 kg** and CG within the envelope. 🟩
- No belly-cargo hold — small aircraft, cabin/baggage-compartment loading only.
- Given the type's short field-length performance (§1), payload/fuel trade-offs at genuinely short or unimproved strips should be checked against the published PC-12 weight-altitude-temperature performance charts before scheduling 🟧 — none held on file here (source layer only, not restated in this curated pack).

## 5. Single-engine turboprop — dispatch implications (not ETOPS/EDTO) 🟥

The PC-12 is a **single-engine** aircraft — this is not a twin operating under a reduced EDTO rule time; it is a fundamentally different risk/dispatch model:

- **No ETOPS/EDTO concept applies.** There is no diversion-time rule, no "critical fuel" scenario, and no adequate-aerodrome screening of the kind used for the twin/quad mainline fleet. The relevant planning question for a single-engine aircraft is **engine-failure/forced-landing-site coverage** along the route, not a diversion-time limit.
- **OM E gap — flagged, not fabricated.** No current OM E Operations document defines a K Global single-engine commercial-ops policy (e.g. terrain/route screening for a total-power-loss scenario, any night/IMC or overwater single-engine restriction some authorities apply to commercial single-engine turboprop operations). This pack does **not** invent one — it flags the gap for the OM open-items roll-up. Do not assume the ETOPS-EDTO Procedures method (`../../../OM E Operations/ETOPS-EDTO Procedures.md`) applies by analogy; it is written for multi-engine aircraft and does not transfer.
- **Single-pilot capability** is a type certification fact (🟩); it is a separate question from K Global's own crewing policy for this aircraft, which sits in OM A/D, not here 🟧 `[VERIFY]`.

## 6. Route applicability

- **Cleared/typical:** short/regional Executive-unit sectors within the ~1,845 NM structural range at FL300 and below — this type does not substitute for the E35L/GLF6/FA7X on long-range Executive missions.
- **Possible use-case — unpaved/short-strip destinations.** The PC-12's short-field performance (§1 Intro) is commonly exploited for gravel/grass/unimproved-strip access in general service; whether K Global uses the type this way for any specific destination is a network/route-planning decision, **not yet confirmed** against the K Global airport register 🟧 `[VERIFY]`.
- **Watch — SimBrief profile / EDTO leakage:** confirm the SimBrief profile does not apply an inappropriate twin-engine dispatch logic to this single-engine type (§2, §5).
- Link to OM C route briefs (planned): OM C route briefs (planned) and OM C route briefs (planned).

## 7. Dispatch watch-items

| Item | Flag | Note |
|---|---|---|
| No PC12 reference OFP yet | 🟧 | Burn figures are derived/public-sourced — replace with type OFP figures when first flown |
| Single-engine ops policy gap | 🟥 | No OM E doc yet defines single-engine-specific commercial dispatch policy — open item, do not apply twin-engine EDTO logic by analogy |
| SimBrief profile / variant match | 🟧 | Confirm PC-12 profile matches delivered sub-variant and does not silently model twin-engine EDTO logic |
| Range vs Executive-unit long-range missions | 🟧 | ~1,845 NM structural — short/regional only |
| Single-pilot crewing policy | 🟧 | Type-certified single-pilot; K Global's actual crewing decision is an OM A/D question |
| Unpaved/short-strip network use | 🟧 | Capability noted; not yet confirmed as an active K Global network use-case |

---

## Sources & References
*Public URLs only. Private/OEM/add-on documents may inform content but must never be listed here.*

- Wikipedia — Pilatus PC-12 (dimensions, weights, engine, performance table) — https://en.wikipedia.org/wiki/Pilatus_PC-12
- Pilatus Aircraft — PC-12 Technical Data — https://www.pilatus-aircraft.com/en/pc-12/technical-data
- AOPA — Pilatus PC-12 aircraft guide — https://www.aopa.org/go-fly/aircraft-and-ownership/aircraft/pilatus-pc-12

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-25 | Initial draft — dispatch built from public Wikipedia/Pilatus/AOPA data + VAMSYS mirror; OpsSpec values applied (contingency 5%/ERA, final reserve 30 min); explicitly no ETOPS/EDTO applicability (single-engine, not a twin under a reduced rule time); single-engine commercial-ops policy gap flagged as an open item against the OM E catalogue; no type OFP yet (watch-item). |
