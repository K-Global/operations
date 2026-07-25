<!--
================================================================================
  K Global — AIRFRAME PACK · DISPATCH  ·  B738 Boeing 737-800
  Curated layer. Anonymous · version-controlled · public sources only.
  FLAG LEGEND  🟥 hard requirement/hazard   🟧 caution/unverified   🟩 normal/confirmed
================================================================================
-->

# B738 — Boeing 737-800 · Dispatch

**B738 / 737 Next Generation family** · Narrowbody twin, short/medium-haul workhorse
**Version** v0.1 · **Updated** 2026-07-25 · **Status** Draft

> **Read-me:** How this type is dispatched at K Global. Method (fuel policy, ETOPS rules) is defined once in OM E — this file **applies** it to the B738. Capability values are held in the Fleet Capability Matrix — cited, not restated. Flag legend 🟥 hard · 🟧 caution · 🟩 normal.

---

## 1. Snapshot (planning)

| Field | Value |
|---|---|
| OEW / MZFW / MTOW / MLW | 41,413 🟩 / ~62,732 🟧 / 79,016 🟩 / ~66,360 kg 🟧 `[VERIFY]` |
| Max fuel | 26,020 L 🟩 |
| Payload (K Global config) | 189 pax + 5,000 kg belly `[VAMSYS mirror 2026-07-25]` |
| Typical block burn | ~2,010–2,155 kg/hr (M0.785–M0.82, FL410, public reference) 🟧 — no B738 reference OFP yet 🟧 |
| Cost index (default) | Per OM E / route economics — no B738 reference OFP CI yet 🟧 `[VERIFY]` |
| Reserve rule | Final reserve **30 min** + alternate per OM E fuel policy 🟩 `[K Global OpsSpec 2026-07-25]` |
| Contingency | **5% / ERA** per OM E fuel policy 🟩 `[K Global OpsSpec 2026-07-25]` |
| ETOPS/EDTO | **Approved EDTO rule time: 120 min** (narrowbody twin) 🟩 `[K Global OpsSpec 2026-07-25]`; type certified up to **180 min** (up to 207 min with approval) 🟩 — see §5 & matrix |

## 2. SimBrief setup

- **Airframe profile:** B738 (737-800 / CFM56-7B) — SimBrief B738
- **Aircraft-data overrides:** OEW / MZFW / MTOW / MLW / max fuel — set to VAMSYS mirror figures where they differ from SimBrief defaults (MTOW 79,016 / OEW 41,413 🟩; MZFW/MLW 🟧 `[VERIFY]`); ceiling 41,000 ft; engines CFM56-7B; PBN/equip per fleet standard (RVSM, RNP AR 0.3, full RNP APCH — see matrix Table B) 🟧 `[VERIFY]`
- **Dispatch overrides:** reserve rule (final reserve 30 min), contingency 5%/ERA, fuel factor, cruise mode/sub, climb/descent per OM E; **ETOPS threshold & rule selector = 120 min** (narrowbody twin) `[K Global OpsSpec 2026-07-25]`
- **Fuel overrides:** minfob / minfod / atc / mel / wxx / added / tankering — default unless route-specific 🟧
- Basis: VAMSYS `simbrief_overrides` for this type `[VAMSYS mirror 2026-07-25]`

## 3. Fuel policy applied

OM E's generic fuel policy resolves for the B738 as taxi + trip + **contingency (5% / ERA)** + alternate + **final reserve (30 min)** + any additional/holding `[K Global OpsSpec 2026-07-25]`. Public long-range cruise burn is **~2,010 kg/hr** at M0.785/FL410, rising to **~2,096–2,155 kg/hr** at M0.80–0.82 🟧 — against 26,020 L max fuel the aircraft carries adequate reserve margin on its short/medium-haul trunk set, in line with the rest of the narrowbody fleet. **Tankering:** assess hub-vs-outstation price differentials per leg per OM E; the 737-800's moderate tank size gives limited but real tankering headroom on short-turn pairs, weight-and-CG permitting — case-by-case per OM E `[K Global OpsSpec 2026-07-25]`. Exact reserve/contingency values are defined in OM E — apply, do not restate here beyond the figures above. See `../../../OM E Operations/` fuel policy.

## 4. Payload & loading

- K Global config: **189 pax + 5,000 kg belly** `[VAMSYS mirror 2026-07-25]`.
- Standard pax/bag weights and belly bulk-hold loading per OM E loading policy; keep ZFW within MZFW (~62,732 kg 🟧 `[VERIFY]`) and CG within envelope. 🟧
- **Hot-and-high / short-field penalties:** matrix rates hot/high sensitivity **Moderate** — CFM56-7B is thrust-limited relative to newer geared-turbofan/LEAP-class engines; high-elevation/high-temperature fields can force reduced payload or fuel at high TOW — check per field before committing schedule. See [Fleet Capability Matrix](../capability-matrix.md) (Table D). 🟧

## 5. ETOPS / EDTO 🟥

- **Capability:** 737-800 is a narrowbody twin; classic ETOPS applies, type certified up to **180 min** (up to 207 min with additional approval, per manufacturer/operator ETOPS packages). K Global operates to the **approved rule time**, not the type maximum. **Approved EDTO rule time: 120 min** (narrowbody twin) 🟩 `[K Global OpsSpec 2026-07-25]`.
- **Method:** defined once in OM E — see `../../../OM E Operations/ETOPS-EDTO Procedures.md`. Capability/approval values are held in [Fleet Capability Matrix](../capability-matrix.md) (Table A). This file only records the type application.
- **En-route alternates:** selected per route from the OM E adequate-aerodrome set; no B738 reference OFP alternates yet on file 🟧 — populate when the first type OFP is flown.
- **Critical-fuel note:** critical-fuel scenario (decompression + engine-out driftdown at the ETOPS entry point to the most limiting en-route alternate) must be checked against the fuel plan per OM E; the 26,020 L tank leaves adequate margin on the short/medium-haul trunk set at the 120-min rule time. 🟥

## 6. Route applicability

- **Cleared/typical:** short/medium-haul trunk and secondary-market sectors within the ~2,935 NM structural range. The B738 complements the larger Airbus narrowbody fleet (A319/A320/A21N) with a Boeing-flight-deck option; its 189-seat config sits between the A320 (150) and A21N (185).
- **Watch:** hot-and-high departures where payload is thrust-capped (§4); confirm reserves on any sector approaching structural range; **LVO minima are CAT I**, not CAT IIIB, pending confirmation of the delivered fail-operational autoland configuration (HUD-dependent) — do not assume low-visibility autoland capability without checking matrix Table C.
- Link to OM C route briefs (planned): OM C route briefs (planned) and OM C route briefs (planned).

## 7. Dispatch watch-items

| Item | Flag | Note |
|---|---|---|
| No B738 reference OFP yet | 🟧 | Burn/CI/alternates are public-Boeing-derived — replace with type OFP figures when first flown |
| Range vs longest scheduled sector | 🟧 | ~2,935 NM structural — confirm reserves on longer narrowbody sectors |
| Hot-and-high payload limit | 🟧 | CFM56-7B thrust-limited at high TOW at hot/high fields (matrix: Moderate) |
| LVO minima — CAT I not CAT IIIB | 🟥 | Operator minima set at CAT I `[K Global OpsSpec 2026-07-25]`; fail-operational autoland status (HUD-dependent) unconfirmed for delivered config — see matrix Table C |
| ETOPS adequacy on thin routes | 🟩 | Approved rule time **120 min** (narrowbody twin) 🟩 `[K Global OpsSpec 2026-07-25]`; type 180 (up to 207 w/ approval) — confirm en-route alternates per leg |
| Tankering opportunity/risk | 🟧 | Moderate tank gives limited headroom; case-by-case per OM E; check hub price differentials + CG |

---

## Sources & References
*Public URLs only. Private/OEM/add-on documents may inform content but must never be listed here.*

- Boeing — 737 family / 737-800 technical characteristics — https://www.boeing.com/commercial/737ng
- Wikipedia — Boeing 737 Next Generation — https://en.wikipedia.org/wiki/Boeing_737_Next_Generation
- Wikipedia — CFM International CFM56 — https://en.wikipedia.org/wiki/CFM_International_CFM56

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-25 | Initial draft — dispatch built from public Boeing/Wikipedia data + VAMSYS mirror; OpsSpec values applied (EDTO 120 min type-180/207, contingency 5%/ERA, final reserve 30 min, tankering case-by-case); capability values cross-linked to the Fleet Capability Matrix; LVO CAT I (not CAT IIIB, fail-operational config unconfirmed) flagged 🟥; no type OFP yet (watch-item). |
