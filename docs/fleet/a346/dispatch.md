<!--
================================================================================
  K Global — AIRFRAME PACK · DISPATCH  ·  A346 Airbus A340-600
  Curated layer. Anonymous · version-controlled · public sources only.
  FLAG LEGEND  🟥 hard requirement/hazard   🟧 caution/unverified   🟩 normal/confirmed
================================================================================
-->

# A346 — Airbus A340-600 · Dispatch

**A346 / A340 family** · Four-engine long-fuselage widebody, long/thin ultra-range frame
**Version** v0.1 · **Updated** 2026-07-25 · **Status** Draft

> **Read-me:** How this type is dispatched at K Global. Method (fuel policy, EDTO rules) is defined once in OM E — this file **applies** it to the A346. Capability values are held in the Fleet Capability Matrix — cited, not restated. Flag legend 🟥 hard · 🟧 caution · 🟩 normal.

---

## 1. Snapshot (planning)

| Field | Value |
|---|---|
| OEW / MZFW / MTOW / MLW | ~177,000 / ~245,000 / ~380,000 / ~265,000 kg 🟧 `[VERIFY]` |
| Max fuel | ~156 t (~194,900 L) 🟧 `[VERIFY]` |
| Payload (K Global config) | A340-600: **368 pax + 40,000 kg belly** `[VAMSYS mirror 2026-07-25]` |
| Typical block burn | High for the seat count (four Trent 556, heavy long-fuselage) — no A346 reference OFP yet 🟧 |
| Cost index (default) | Per OM E / route economics — no A346 reference OFP CI yet 🟧 `[VERIFY]` |
| Reserve rule | Final reserve **30 min** + alternate per OM E fuel policy 🟩 `[K Global OpsSpec 2026-07-25]` |
| Contingency | **5% / ERA** per OM E fuel policy 🟩 `[K Global OpsSpec 2026-07-25]` |
| ETOPS/EDTO | **Quad — no ETOPS diversion-time limit; ICAO EDTO adequate-aerodrome concept applies (2+ engines)** — see §5 & matrix |

## 2. SimBrief setup
- **Airframe profile:** A346 (A340-600 / Trent 556) — SimBrief A346
- **Aircraft-data overrides:** OEW / MZFW / MTOW / MLW / max fuel — set to VAMSYS mirror figures where they differ from SimBrief defaults 🟧 `[VERIFY]`; ceiling ~FL410; engines Trent 556; PBN/equip per fleet standard (RVSM, RNP 4 + RNAV 10 oceanic, RNP AR 0.3, full RNP APCH — see matrix Table B) 🟧 `[VERIFY]`
- **Dispatch overrides:** reserve rule (final reserve 30 min), contingency 5%/ERA, fuel factor, cruise mode/sub, climb/descent per OM E; **no ETOPS threshold/rule-time selector applies — quad: EDTO adequate-aerodrome planning, not a twin diversion-time rule** (see §5)
- **Fuel overrides:** minfob / minfod / atc / mel / wxx / added / tankering — default unless route-specific 🟧
- Basis: VAMSYS `simbrief_overrides` for this type `[VAMSYS mirror 2026-07-25]`

## 3. Fuel policy applied
OM E's generic fuel policy resolves for the A346 as taxi + trip + **contingency (5% / ERA)** + alternate + **final reserve (30 min)** + any additional/holding `[K Global OpsSpec 2026-07-25]`. Block burn is high for the seat count (four Trent 556, heavy long-fuselage airframe) 🟧 — no A346 reference OFP yet on file; against ~156 t max fuel the aircraft carries adequate margin on the long/thin trunk set. **Tankering:** assess Frankfurt-vs-outstation price differentials per leg, weight-and-CG permitting; tankering is authorised **case-by-case** per OM E `[K Global OpsSpec 2026-07-25]`. Exact reserve/contingency values are defined in OM E — apply, do not restate here beyond the figures above. See `../../../OM E Operations/` fuel policy.

## 4. Payload & loading
- K Global config: **A340-600 — 368 pax + 40,000 kg belly** `[VAMSYS mirror 2026-07-25]`.
- Standard pax/bag weights and belly LD3 container plan per OM E loading policy; keep ZFW within MZFW (~245,000 kg) and CG within envelope. The long fuselage makes fore/aft CG and trim more sensitive — brief loading distribution. 🟧
- **Hot-and-high / long-field penalties:** matrix rates hot/high sensitivity **High** (quad, historically thrust-limited, notable hot/high payload penalty); thrust-limited takeoffs at FAOR/HAAB/NBO can force reduced payload or fuel on long legs at high TOW — the A346 is more penalised than the A359/A339; check per field before committing schedule. See [Fleet Capability Matrix](../capability-matrix.md) (Table D). 🟧
- **Tail-strike:** long fuselage (75.36 m) — pitch-limit / tail-strike awareness on rotation and flare; brief per type.

## 5. ETOPS / EDTO 🟥
- **Quad — no twin-style ETOPS diversion-time limit.** As a four-engine aeroplane the A346 is **not** subject to a twin ETOPS diversion-time rule; there is **no rule-time value** to select. **However, ICAO EDTO (Extended Diversion Time Operations, Annex 6) adequate-aerodrome planning applies to aeroplanes with two or more engines** — so the A346 is **not exempt from EDTO planning**: adequate en-route aerodromes must still be identified along the route per the EDTO framework. State this as the adequate-aerodrome concept, **not** a diversion-time limit. 🟩
- **Method:** defined once in OM E — see `../../../OM E Operations/ETOPS-EDTO Procedures.md`. Capability/approval values are held in [Fleet Capability Matrix](../capability-matrix.md) (Table A), where the A346 quad EDTO cell reads "no ETOPS diversion-time limit; EDTO adequate-aerodrome planning applies" 🟩. This file only records the type application.
- **En-route alternates:** selected per route from the OM E adequate-aerodrome set (the EDTO adequate-aerodrome concept — not a twin driftdown time); no A346 reference OFP alternates yet on file 🟧 — populate when the first type OFP is flown.
- **Critical-fuel note:** the EDTO critical-fuel scenario per OM E should still be checked against the fuel plan; the ~156 t tank leaves adequate margin on the long/thin trunk set. 🟧

## 6. Route applicability
- **Cleared/typical:** long/thin premium intercontinental trunks within ~7,900 NM structural range where a quad's routing freedom is wanted but the A388's capacity would not fill. As a quad it routes freely over remote/oceanic tracks under EDTO adequate-aerodrome planning (no twin diversion-time cap).
- **Watch:** hot-and-high departures where payload is thrust-capped (§4 — the A346 is the most hot/high-penalised widebody in the fleet); long field length at MTOW; long-fuselage tail-strike on rotation/flare; confirm reserves on any sector approaching structural range.
- Link to OM C route briefs (planned): OM C route briefs (planned) and OM C route briefs (planned).

## 7. Dispatch watch-items

| Item | Flag | Note |
|---|---|---|
| Quad EDTO handling | 🟩 | **No twin ETOPS diversion-time rule — EDTO adequate-aerodrome planning (2+ engines) still applies**; no rule-time value to set |
| Hot-and-high payload limit | 🟧 | Matrix rates sensitivity **High** — FAOR/HAAB/NBO thrust-limited at high TOW; most hot/high-penalised widebody in the fleet |
| Long-fuselage tail-strike | 🟧 | 75.36 m — pitch-limit / tail-strike awareness on rotation/flare; longest airframe in the fleet |
| No A346 reference OFP yet | 🟧 | Burn/CI/alternates are public-derived — replace with type OFP figures when first flown |
| Range vs longest scheduled sector | 🟧 | ~7,900 NM structural — confirm reserves on long trunks `[VERIFY]` |
| Tankering opportunity/risk | 🟩 | Case-by-case per OM E; check hub price differentials + CG |

---

## Sources & References
*Public URLs only. Private/OEM/add-on documents may inform content but must never be listed here.*

- Airbus — A340 type page — https://www.aircraft.airbus.com/en/previous-aircraft/a340
- EASA — TCDS EASA.A.015 Airbus A340 — https://www.easa.europa.eu/en/document-library/type-certificates
- ICAO — ETOPS & EDTO technical awareness (Annex 6 EDTO; 2+ engine applicability) — https://www.icao.int/
- SKYbrary — Airbus A340-600 (A346) — https://skybrary.aero/aircraft/a346
- Wikipedia — Airbus A340 — https://en.wikipedia.org/wiki/Airbus_A340

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-25 | Initial draft — dispatch built from public Airbus/EASA data + VAMSYS mirror; OpsSpec values applied (contingency 5%/ERA, final reserve 30 min, tankering case-by-case); **quad EDTO handled as ICAO adequate-aerodrome concept — no twin diversion-time rule**; hot-and-high (High) and long-fuselage tail-strike watch-items called out; capability values cross-linked to the Fleet Capability Matrix; no type OFP yet (watch-item). |
