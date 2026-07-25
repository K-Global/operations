<!--
================================================================================
  K Global — AIRFRAME PACK · DISPATCH  ·  A388 Airbus A380-800
  Curated layer. Anonymous · version-controlled · public sources only.
  FLAG LEGEND  🟥 hard requirement/hazard   🟧 caution/unverified   🟩 normal/confirmed
================================================================================
-->

# A388 — Airbus A380-800 · Dispatch

**A388 / A380 family** · Four-engine double-deck flagship, highest-capacity frame
**Version** v0.1 · **Updated** 2026-07-25 · **Status** Draft

> **Read-me:** How this type is dispatched at K Global. Method (fuel policy, EDTO rules) is defined once in OM E — this file **applies** it to the A388. Capability values are held in the Fleet Capability Matrix — cited, not restated. Flag legend 🟥 hard · 🟧 caution · 🟩 normal.

---

## 1. Snapshot (planning)

| Field | Value |
|---|---|
| OEW / MZFW / MTOW / MLW | ~277,000 / ~361,000 / ~575,000 / ~394,000 kg 🟧 `[VERIFY]` |
| Max fuel | ~254 t (~320,000 L) 🟧 `[VERIFY]` |
| Payload (K Global config) | A380-800: **555 pax + 40,000 kg belly** `[VAMSYS mirror 2026-07-25]` |
| Typical block burn | High (four engines, very high TOW) — no A388 reference OFP yet 🟧 |
| Cost index (default) | Per OM E / route economics — no A388 reference OFP CI yet 🟧 `[VERIFY]` |
| Reserve rule | Final reserve **30 min** + alternate per OM E fuel policy 🟩 `[K Global OpsSpec 2026-07-25]` |
| Contingency | **5% / ERA** per OM E fuel policy 🟩 `[K Global OpsSpec 2026-07-25]` |
| ETOPS/EDTO | **Quad — no ETOPS diversion-time limit; ICAO EDTO adequate-aerodrome concept applies (2+ engines)** — see §5 & matrix |

## 2. SimBrief setup
- **Airframe profile:** A388 (A380-800) — SimBrief A388
- **Engine sub-selection:** Trent 900 *or* GP7200 — set to match the K Global engine fit **once fixed** (currently open 🟧); this drives the OFP burn
- **Aircraft-data overrides:** OEW / MZFW / MTOW / MLW / max fuel — set to VAMSYS mirror figures where they differ from SimBrief defaults 🟧 `[VERIFY]`; ceiling ~FL430; PBN/equip per fleet standard (RVSM, RNP 4 + RNAV 10 oceanic, RNP AR 0.3, full RNP APCH — see matrix Table B) 🟧 `[VERIFY]`
- **Dispatch overrides:** reserve rule (final reserve 30 min), contingency 5%/ERA, fuel factor, cruise mode/sub, climb/descent per OM E; **no ETOPS threshold/rule-time selector applies — quad: EDTO adequate-aerodrome planning, not a twin diversion-time rule** (see §5)
- **Fuel overrides:** minfob / minfod / atc / mel / wxx / added / tankering — default unless route-specific 🟧
- Basis: VAMSYS `simbrief_overrides` for this type `[VAMSYS mirror 2026-07-25]`

## 3. Fuel policy applied
OM E's generic fuel policy resolves for the A388 as taxi + trip + **contingency (5% / ERA)** + alternate + **final reserve (30 min)** + any additional/holding `[K Global OpsSpec 2026-07-25]`. Block burn is high (four engines, very high TOW) 🟧 — no A388 reference OFP yet on file; against ~254 t max fuel the aircraft carries generous margin on the dense trunk set. **Tankering:** assess Frankfurt-vs-outstation price differentials per leg — the very large tank gives real tankering headroom, weight-and-CG permitting; tankering is authorised **case-by-case** per OM E `[K Global OpsSpec 2026-07-25]`. Exact reserve/contingency values are defined in OM E — apply, do not restate here beyond the figures above. See `../../../OM E Operations/` fuel policy.

## 4. Payload & loading
- K Global config: **A380-800 — 555 pax + 40,000 kg belly** `[VAMSYS mirror 2026-07-25]` — the largest single-frame payload in the fleet across two full decks.
- Standard pax/bag weights and belly LD3 container plan per OM E loading policy; keep ZFW within MZFW (~361,000 kg) and CG within envelope. Twin-deck loading and the outsized OEW make CG management and turn-round loading planning more involved than the twin widebodies. 🟧
- **Hot-and-high / long-field penalties:** matrix rates hot/high sensitivity **Moderate–high** (very heavy airframe, long field requirement); thrust-limited takeoffs at FAOR/HAAB/NBO can force reduced payload or fuel on long legs at high TOW — check per field before committing schedule. See [Fleet Capability Matrix](../capability-matrix.md) (Table D). 🟧

## 5. ETOPS / EDTO 🟥
- **Quad — no twin-style ETOPS diversion-time limit.** As a four-engine aeroplane the A388 is **not** subject to a twin ETOPS diversion-time rule; there is **no rule-time value** to select. **However, ICAO EDTO (Extended Diversion Time Operations, Annex 6) adequate-aerodrome planning applies to aeroplanes with two or more engines** — so the A388 is **not exempt from EDTO planning**: adequate en-route aerodromes must still be identified along the route per the EDTO framework. State this as the adequate-aerodrome concept, **not** a diversion-time limit. 🟩
- **Method:** defined once in OM E — see `../../../OM E Operations/ETOPS-EDTO Procedures.md`. Capability/approval values are held in [Fleet Capability Matrix](../capability-matrix.md) (Table A), where the A388 quad EDTO cell reads "no ETOPS diversion-time limit; EDTO adequate-aerodrome planning applies" 🟩. This file only records the type application.
- **En-route alternates:** selected per route from the OM E adequate-aerodrome set (the EDTO adequate-aerodrome concept — not a twin driftdown time); no A388 reference OFP alternates yet on file 🟧 — populate when the first type OFP is flown.
- **Critical-fuel note:** the EDTO critical-fuel scenario per OM E should still be checked against the fuel plan; the ~254 t tank leaves adequate margin on the trunk set. 🟧

## 6. Route applicability
- **Cleared/typical:** densest, highest-demand intercontinental trunks within ~8,000 NM structural range where the 555-seat capacity fills **and** a Code F stand is available at **both** ends. As a quad it routes freely over remote/oceanic tracks under EDTO adequate-aerodrome planning (no twin diversion-time cap).
- **Watch:** 🟥 **Code F stand/gate availability at both ends is the binding scheduling limit — confirm before every leg** (see Intro §4); hot-and-high departures where payload is thrust-capped (§4); long field length at MTOW; confirm reserves on any sector approaching structural range.
- Link to OM C route briefs (planned): OM C route briefs (planned) and OM C route briefs (planned).

## 7. Dispatch watch-items

| Item | Flag | Note |
|---|---|---|
| **Code F stand/gate at both ends** | 🟥 | ICAO Code F (79.8 m span) + RFF Cat 10 — confirm Code F stands + Cat 10 RFF at **both** ends before every leg; the binding limit for this type |
| Quad EDTO handling | 🟩 | **No twin ETOPS diversion-time rule — EDTO adequate-aerodrome planning (2+ engines) still applies**; no rule-time value to set |
| Engine choice (Trent 900 vs GP7200) | 🟧 | K Global fit not yet fixed — drives SimBrief sub-selection & burn |
| No A388 reference OFP yet | 🟧 | Burn/CI/alternates are public-derived — replace with type OFP figures when first flown |
| Hot-and-high / long-field payload limit | 🟧 | FAOR/HAAB/NBO + long field at high TOW — payload/fuel penalties (matrix: Moderate–high) |
| Tankering opportunity/risk | 🟩 | Very large tank gives headroom; case-by-case per OM E; check hub price differentials + CG |

---

## Sources & References
*Public URLs only. Private/OEM/add-on documents may inform content but must never be listed here.*

- Airbus — A380 type page — https://www.aircraft.airbus.com/en/aircraft/a380
- EASA — TCDS EASA.A.110 Airbus A380 — https://www.easa.europa.eu/en/document-library/type-certificates
- ICAO — ETOPS & EDTO technical awareness (Annex 6 EDTO; 2+ engine applicability) — https://www.icao.int/
- SKYbrary — Airbus A380-800 (A388) — https://skybrary.aero/aircraft/a388
- Wikipedia — Airbus A380 — https://en.wikipedia.org/wiki/Airbus_A380

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-25 | Initial draft — dispatch built from public Airbus/EASA data + VAMSYS mirror; OpsSpec values applied (contingency 5%/ERA, final reserve 30 min, tankering case-by-case); **quad EDTO handled as ICAO adequate-aerodrome concept — no twin diversion-time rule**; **Code F stand constraint** flagged 🟥 as the binding dispatch limit; engine choice open 🟧; capability values cross-linked to the Fleet Capability Matrix; no type OFP yet (watch-item). |
