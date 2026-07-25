<!--
================================================================================
  K Global — AIRFRAME PACK · DISPATCH  ·  A319 Airbus A319-100
  Curated layer. Anonymous · version-controlled · public sources only.
  FLAG LEGEND  🟥 hard requirement/hazard   🟧 caution/unverified   🟩 normal/confirmed
================================================================================
-->

# A319 — Airbus A319-100 · Dispatch

**A319 / A320 family** · Narrowbody twin, thinnest/smallest-capacity mainline frame
**Version** v0.1 · **Updated** 2026-07-25 · **Status** Draft

> **Read-me:** How this type is dispatched at K Global. Method (fuel policy, ETOPS rules) is defined once in OM E — this file **applies** it to the A319. Capability values are held in the Fleet Capability Matrix — cited, not restated. Flag legend 🟥 hard · 🟧 caution · 🟩 normal.

---

## 1. Snapshot (planning)

| Field | Value |
|---|---|
| OEW / MZFW / MTOW / MLW | ~40,800 🟧 / ~57,900 / ~75,500 / ~62,500 kg 🟧 `[VERIFY]` |
| Max fuel | ~19,050 kg (~24,210 L — same tank as A320 family) 🟧 `[VERIFY]` |
| Payload (K Global config) | 120 pax + 7,500 kg belly `[VAMSYS mirror 2026-07-25]` |
| Typical block burn | ~2.2–2.4 t/hr avg short/medium-haul cruise (public reference; lighter than A320) 🟧 — no A319 reference OFP yet 🟧 |
| Cost index (default) | Per OM E / route economics — no A319 reference OFP CI yet 🟧 `[VERIFY]` |
| Reserve rule | Final reserve **30 min** + alternate per OM E fuel policy 🟩 `[K Global OpsSpec 2026-07-25]` |
| Contingency | **5% / ERA** per OM E fuel policy 🟩 `[K Global OpsSpec 2026-07-25]` |
| ETOPS/EDTO | **Approved EDTO rule time: 120 min** (narrowbody twin) 🟩 `[K Global OpsSpec 2026-07-25]`; type certified up to **180 min** 🟥 — see §5 & matrix |

## 2. SimBrief setup

- **Airframe profile:** A319 (A319-100) — SimBrief A319
- **Aircraft-data overrides:** OEW / MZFW / MTOW / MLW / max fuel — set to VAMSYS mirror figures where they differ from SimBrief defaults 🟧 `[VERIFY]`; ceiling ~FL410; engines CFM56-5B or V2500 per tail; PBN/equip per fleet standard (RVSM, RNP AR 0.3, full RNP APCH — see matrix Table B) 🟧 `[VERIFY]`
- **Dispatch overrides:** reserve rule (final reserve 30 min), contingency 5%/ERA, fuel factor, cruise mode/sub, climb/descent per OM E; **ETOPS threshold & rule selector = 120 min** (narrowbody twin) `[K Global OpsSpec 2026-07-25]`
- **Fuel overrides:** minfob / minfod / atc / mel / wxx / added / tankering — default unless route-specific 🟧
- Basis: VAMSYS `simbrief_overrides` for this type `[VAMSYS mirror 2026-07-25]`

## 3. Fuel policy applied

OM E's generic fuel policy resolves for the A319 as taxi + trip + **contingency (5% / ERA)** + alternate + **final reserve (30 min)** + any additional/holding `[K Global OpsSpec 2026-07-25]`. Public short/medium-haul cruise burn is **~2.2–2.4 t/hr** 🟧; against ~19 t max fuel (same tank as the A320 family, on a lighter airframe) the aircraft carries the best reserve margin in the narrowbody fleet on its thin-route mission set. **Tankering:** assess Frankfurt-vs-outstation price differentials per leg — narrowbody tank size limits tankering headroom vs the widebody fleet, but the type's light weight and short-turn thin-route pattern can still make tankering worthwhile weight-and-CG permitting; tankering is authorised **case-by-case** per OM E `[K Global OpsSpec 2026-07-25]`. Exact reserve/contingency values are defined in OM E — apply, do not restate here beyond the figures above. See `../../../OM E Operations/` fuel policy.

## 4. Payload & loading

- K Global config: **120 pax + 7,500 kg belly** `[VAMSYS mirror 2026-07-25]`.
- Standard pax/bag weights and belly bulk/limited-container plan per OM E loading policy; keep ZFW within MZFW ~57,900 kg and CG within envelope. 🟧
- **Hot-and-high / short-field penalties:** matrix rates hot/high sensitivity **Low** — best-performing narrowbody in the fleet hot/high; still confirm per-field at FAOR/HAAB/NBO on thin, low-frequency routes before committing schedule. See [Fleet Capability Matrix](../capability-matrix.md) (Table D). 🟩

## 5. ETOPS / EDTO 🟥

- **Capability:** A319 type is EDTO-certified **up to 180 minutes** (twin, classic ETOPS). K Global operates to the **approved rule time**, not the type maximum. **Approved EDTO rule time: 120 min** (narrowbody twin) 🟩 `[K Global OpsSpec 2026-07-25]` — the 180-min certification is the type ceiling, not the K Global approval.
- **Method:** defined once in OM E — see `../../../OM E Operations/ETOPS-EDTO Procedures.md`. Capability/approval values are held in [Fleet Capability Matrix](../capability-matrix.md) (Table A). This file only records the type application.
- **En-route alternates:** selected per route from the OM E adequate-aerodrome set; no A319 reference OFP alternates yet on file 🟧 — populate when the first type OFP is flown.
- **Critical-fuel note:** narrowbody twin EDTO scenarios are typically confined to overwater/remote short-hop sectors within the network; check against the fuel plan per OM E on any route approaching the 120-min rule-time boundary. 🟥

## 6. Route applicability

- **Cleared/typical:** thinnest/lowest-demand short-to-medium-haul sectors within ~3,700 NM structural range — the A319 fills the niche below the A320 where full-size narrowbody capacity would under-fill. Not typically flown on oceanic/EDTO-limiting long-thin routes.
- **Watch:** with only 6 tails, availability/substitution risk is higher than the larger narrowbody fleets — confirm tail availability before committing schedule on A319-specific pairings.
- Link to OM C route briefs (planned): OM C route briefs (planned) and OM C route briefs (planned).

## 7. Dispatch watch-items

| Item | Flag | Note |
|---|---|---|
| No A319 reference OFP yet | 🟧 | Burn/CI/alternates are public-Airbus-derived — replace with type OFP figures when first flown |
| Range vs longest scheduled sector | 🟧 | ~3,700 NM structural — confirm reserves on longer thin-route pairings |
| Hot-and-high payload limit | 🟩 | Best hot/high performer in the narrowbody fleet (matrix: Low); still check high-elevation fields per leg |
| ETOPS adequacy on thin routes | 🟥 | Approved rule time **120 min** (narrowbody twin) 🟩 `[K Global OpsSpec 2026-07-25]`; type 180 — confirm en-route alternates per leg |
| Small tail count (6) | 🟧 | Higher substitution/availability risk than A320/A21N — confirm tail availability before scheduling |

---

## Sources & References
*Public URLs only. Private/OEM/add-on documents may inform content but must never be listed here.*

- Airbus — A319 type page — https://www.aircraft.airbus.com/en/aircraft/a320-the-most-successful-aircraft-family-ever/a319
- EASA — TCDS EASA.A.064 Airbus A320 (covers A318/A319/A320/A321) — https://www.easa.europa.eu/en/document-library/type-certificates/aircraft-cs-25/easaa064-airbus-a318-a319-a320-and-a321
- SKYbrary — Airbus A319 (A319) — https://skybrary.aero/aircraft/a319
- Wikipedia — Airbus A320 family — https://en.wikipedia.org/wiki/Airbus_A320_family

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-25 | Initial draft — dispatch built from public Airbus/EASA data + VAMSYS mirror; OpsSpec values applied (EDTO 120 min type-180, contingency 5%/ERA, final reserve 30 min, tankering case-by-case); capability values cross-linked to the Fleet Capability Matrix; no type OFP yet (watch-item). |
