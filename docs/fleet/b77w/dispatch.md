<!--
================================================================================
  K Global — AIRFRAME PACK · DISPATCH  ·  B77W Boeing 777-300ER
  Curated layer. Anonymous · version-controlled · public sources only.
  FLAG LEGEND  🟥 hard requirement/hazard   🟧 caution/unverified   🟩 normal/confirmed
================================================================================
-->

# B77W — Boeing 777-300ER · Dispatch

**B77W / 777 family** · Long-haul heavy widebody twin, EDTO high-capacity trunk aircraft
**Version** v0.1 · **Updated** 2026-07-25 · **Status** Draft

> **Read-me:** How this type is dispatched at K Global. Method (fuel policy, ETOPS rules) is defined once in OM E — this file **applies** it to the B77W. Flag legend 🟥 hard · 🟧 caution · 🟩 normal.

---

## 1. Snapshot (planning)

| Field | Value |
|---|---|
| OEW / MZFW / MTOW / MLW | ~168,000 🟧 / ~237,700 🟧 / ~351,500 🟧 / ~251,300 kg 🟧 `[VERIFY]` |
| Max fuel | ~145 t (~181,300 L) 🟧 `[VERIFY]` |
| Payload (K Global config) | ~442 pax + 30,000 kg belly `[VAMSYS mirror 2026-07-25]` — one of the fleet's largest twin payloads |
| Typical block burn | High-teens t/hr order (heavy twin) 🟧 `[VERIFY]` — no reference OFP yet |
| Cost index (default) | Per OM E economy policy 🟧 `[VERIFY]` |
| Reserve rule | Final reserve + alternate per OM E fuel policy 🟧 `[VERIFY OM E]` |
| Contingency | Per OM E policy (5% / ERA) 🟧 `[VERIFY OM E]` |
| ETOPS/EDTO | **Approved EDTO rule time: 180 min** (widebody twin) 🟩 `[K Global OpsSpec 2026-07-25]`; type certified **up to 330 min** (GE90) 🟥 |

## 2. SimBrief setup
- **Airframe profile:** Boeing **777-300ER (B77W)** — GE90-115B
- **Aircraft-data overrides:** OEW / MZFW / MTOW / MLW / max fuel — set to VAMSYS mirror figures where they differ from SimBrief defaults (targets: MTOW ~351,500 / MLW ~251,300 / MZFW ~237,700 kg 🟧 `[VERIFY]`); ceiling ~FL431; engines GE90-115B; PBN/equip per fleet standard 🟧 `[VERIFY]`
- **Dispatch overrides:** reserve rule, contingency %, fuel factor, cruise mode/sub, climb/descent per OM E; cost index per OM E economy policy; **ETOPS threshold & rule selector = 180 min** (widebody-twin approved rule time) 🟩 `[K Global OpsSpec 2026-07-25]`
- **Fuel overrides:** minfob / minfod / atc / mel / wxx / added / tankering — default unless route-specific 🟧
- Basis: VAMSYS `simbrief_overrides` for this type `[VAMSYS mirror 2026-07-25]`

## 3. Fuel policy applied
OM E's generic fuel policy resolves for the B77W as taxi + trip + contingency + alternate + final reserve + any additional/holding. Exact reserve/contingency percentages are defined in OM E — **apply, do not restate here** (see `../../../OM E Operations/` fuel-policy docs). As a heavy twin with ~145 t max fuel and very high MTOW, the aircraft carries substantial EDTO/critical-fuel margin on typical trunk sectors, but at max payload (~442 pax + 30 t belly) the ZFW is high and available fuel-to-MTOW headroom shrinks — on the longest sectors expect a **payload-vs-fuel trade**. **Tankering:** the large tank gives real tankering headroom on short-turn pairs, weight-and-CG permitting; assess hub-vs-outstation price differentials per leg. Confirm figures against the first B77W OFP when available. 🟧 `[VERIFY OM E]`

## 4. Payload & loading
- K Global config: **~442 pax + 30,000 kg belly** `[VAMSYS mirror 2026-07-25]` — the belly is a significant cargo revenue role (LD3/LD6 container-capable lower deck plus bulk hold).
- Standard pax/bag weights and belly container plan per OM E loading policy; watch CG with the long -300ER fuselage (aft-CG sensitivity on light-forward loads) — trim per loadsheet. 🟧
- **High ZFW / MZFW proximity:** at full pax + 30 t cargo the ZFW approaches MZFW; confirm ZFW ≤ MZFW and landing weight ≤ MLW before dispatch on payload-heavy legs. 🟥
- **Hot-and-high / short-field penalties:** thrust-limited/field-limited takeoffs at FAOR/HAAB/NBO and at length-limited fields can force reduced payload or fuel on long legs — check per field before committing schedule. 🟧

## 5. ETOPS / EDTO 🟥
- **Capability:** the 777-300ER (GE90) is EDTO-certified **up to 330 min** (Boeing/regulator) 🟩. K Global operates to the **approved rule time**, not the type maximum. **Approved EDTO rule time: 180 min** (widebody twin) 🟩 `[K Global OpsSpec 2026-07-25]` — see the Fleet Capability Matrix Table A ([Fleet Capability Matrix](../capability-matrix.md)).
- **Method:** defined once in OM E — see `../../../OM E Operations/ETOPS-EDTO Procedures.md`. This file only records the type application.
- **En-route alternates:** planned per route from the OM E adequate-aerodrome set for the crossing (North Atlantic/Canada, North/Central Pacific, Indian Ocean, etc.); confirm per leg. As a heavy twin the depressurised/single-engine driftdown adequate-field coverage must be checked for each ETOPS segment. 🟧
- **Critical-fuel note:** the critical-fuel scenario (decompression + engine-out driftdown at the ETOPS entry point to the most limiting en-route alternate) must be checked against the fuel plan per OM E; the ~145 t tank leaves margin on typical trunk sectors, but verify against the first B77W OFP. 🟥

## 6. Route applicability
- **Cleared/typical:** high-density intercontinental trunks within ~7,370 NM structural range 🟧 `[VERIFY]`; the frame to reach for on the densest EDDF and twin-coast North America trunks and long Asia/Middle East sectors where a smaller twin under-sizes the market.
- **Watch:** ultra-long-haul at max payload (payload-vs-fuel trade); hot-and-high and length-limited departures where TOW is capped (§4); Code E stand-length fit at constrained fields (Intro §4).
- Link to OM C route briefs (planned): OM C route briefs (planned) and OM C route briefs (planned).

## 7. Dispatch watch-items

| Item | Flag | Note |
|---|---|---|
| Range vs longest scheduled sector | 🟧 | ~7,370 NM structural `[VERIFY]`; payload-vs-fuel trade at max ZFW on longest legs |
| Hot-and-high / field-length limit | 🟧 | High MTOW → field- and thrust-limited at FAOR/HAAB/NBO and short fields |
| ETOPS adequacy on thin routes | 🟥 | Approved rule time **180 min** (widebody twin) 🟩 `[K Global OpsSpec 2026-07-25]`; type capable to 330 — confirm en-route alternates per leg |
| High ZFW vs MZFW | 🟧 | ~442 pax + 30 t belly approaches MZFW — verify ZFW/MLW before payload-heavy dispatch |
| Tankering opportunity/risk | 🟩 | Large tank gives headroom; check hub price differentials + CG |

---

## Sources & References
*Public URLs only. Private/OEM/add-on documents may inform content but must never be listed here.*

- Boeing — 777-300ER product page — https://www.boeing.com/commercial/777
- Boeing — Boeing to Offer up to 330-Minute ETOPS on 777 — https://boeing.mediaroom.com/2011-12-12-Boeing-to-Offer-up-to-330-Minute-ETOPS-on-777
- Boeing — Boeing 777-300ER Performs 330-Minute ETOPS Flight — https://boeing.mediaroom.com/2003-10-15-Boeing-777-300ER-Performs-330-Minute-ETOPS-Flight
- SKYbrary — Boeing 777-300 (B77W) — https://skybrary.aero/aircraft/b77w
- Wikipedia — Boeing 777 — https://en.wikipedia.org/wiki/Boeing_777

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-25 | Initial draft — dispatch built from public Boeing/regulator data + VAMSYS mirror + Fleet Capability Matrix (EDTO 180-approved, type-capable 330). No reference OFP yet; planning figures `[VERIFY]` pending first OFP. |
