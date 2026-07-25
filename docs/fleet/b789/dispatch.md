<!--
================================================================================
  K Global — AIRFRAME PACK · DISPATCH  ·  B789 Boeing 787-9 Dreamliner
  Curated layer. Anonymous · version-controlled · public sources only.
  FLAG LEGEND  🟥 hard requirement/hazard   🟧 caution/unverified   🟩 normal/confirmed
================================================================================
-->

# B789 — Boeing 787-9 Dreamliner · Dispatch

**B789 / 787 family** · Long-haul widebody twin, EDTO trunk aircraft
**Version** v0.1 · **Updated** 2026-07-25 · **Status** Draft

> **Read-me:** How this type is dispatched at K Global. Method (fuel policy, ETOPS rules) is defined once in OM E — this file **applies** it to the B789. Flag legend 🟥 hard · 🟧 caution · 🟩 normal.

---

## 1. Snapshot (planning)

| Field | Value |
|---|---|
| OEW / MZFW / MTOW / MLW | ~128,000 🟧 / ~181,000 🟧 / ~254,700 🟧 / ~192,800 🟧 `[VERIFY]` |
| Max fuel | ~101 t (~126,900 L) 🟧 `[VERIFY]` |
| Payload (K Global config) | 315 pax + 25,000 kg belly `[VAMSYS mirror 2026-07-25]` |
| Typical block burn | ~5.4–5.7 t/hr avg (public 787-9 order of magnitude) 🟧 `[VERIFY]` — no OFP flown yet |
| Cost index (default) | Per OM E / SimBrief profile default 🟧 `[VERIFY]` |
| Reserve rule | Final reserve 30 min + alternate per OM E fuel policy 🟩 `[K Global OpsSpec 2026-07-25]` |
| Contingency | 5% / ERA per OM E policy 🟩 `[K Global OpsSpec 2026-07-25]` |
| ETOPS/EDTO | **Approved EDTO rule time: 180 min** (widebody twin) 🟩 `[K Global OpsSpec 2026-07-25]`; type certified to **330 min** 🟥 |

## 2. SimBrief setup
- **Airframe profile:** Boeing 787-9 — SimBrief **B789**
- **Aircraft-data overrides:** OEW / MZFW / MTOW / MLW / max fuel — set to VAMSYS mirror figures where they differ from SimBrief defaults (MTOW ~254,700 / MLW ~192,800 / MZFW ~181,000 🟧 `[VERIFY]`); ceiling ~FL430; **engines GEnx-1B or Trent 1000 — select to match confirmed K Global fit** 🟧 `[VERIFY]`; PBN/equip per fleet standard (RNP AR 0.3, full RNP APCH, RVSM, oceanic RNP 4 / RNP 10 — see Matrix Table B) 🟩
- **Dispatch overrides:** reserve rule, contingency 5%/ERA, fuel factor, cruise mode/sub, climb/descent per OM E; cost index per profile default; **ETOPS threshold & rule selector = 180 min** (widebody-twin approved rule time) 🟩 `[K Global OpsSpec 2026-07-25]`
- **Fuel overrides:** minfob / minfod / atc / mel / wxx / added / tankering — default unless route-specific 🟧
- Basis: VAMSYS `simbrief_overrides` for this type `[VAMSYS mirror 2026-07-25]`

## 3. Fuel policy applied
OM E's generic fuel policy resolves for the B789 as taxi + trip + contingency (5%/ERA) + alternate + final reserve (30 min) + any additional/holding — method is defined once in OM E; apply, do not restate the percentages here. The 787-9's low trip burn against a ~101 t tank gives comfortable EDTO/critical-fuel margin on the network's thin-to-medium intercontinental trunks. **Tankering:** assess Frankfurt-vs-outstation price differentials per leg; the large tank gives real tankering headroom on short-turn pairs, weight-and-CG permitting. Reserve/contingency values are 🟩 set by OpsSpec but a reference OFP has not yet been flown for this type — burn figures here are public order-of-magnitude and must be OFP-verified before use. 🟧 `[VERIFY OM E]`

## 4. Payload & loading
- K Global config: **315 pax + 25,000 kg belly** `[VAMSYS mirror 2026-07-25]`.
- Standard pax/bag weights and belly LD3-container plan per OM E loading policy; confirm CG within envelope at dispatch (no OFP-verified loadsheet yet for this type). 🟧
- **Hot-and-high / short-field penalties:** the 787-9's strong thrust-to-weight makes it one of the less hot/high-sensitive widebodies (Matrix Table D, low–moderate) — but thrust-limited takeoffs at FAOR/HAAB/NBO can still trim payload or fuel on the longest legs. Check per field before committing schedule. 🟧

## 5. ETOPS / EDTO 🟥
- **Capability:** the 787 type is EDTO-certified to **330 minutes** (Boeing/FAA/EASA). K Global operates to the **OpsSpec-approved rule time**, not the type maximum. **Approved EDTO rule time: 180 min** (widebody twin) 🟩 `[K Global OpsSpec 2026-07-25]` — the B789, as a widebody twin, is approved to the full 180-min OpsSpec rule time. The type's 330-min certification is headroom, not the approval ceiling.
- **Method:** defined once in OM E — see `../../../OM E Operations/ETOPS-EDTO Procedures.md`. This file only records the type application.
- **En-route alternates:** selected per route at dispatch — the driftdown/decompression adequate fields covering each oceanic/near-polar crossing (e.g. North Atlantic/Canada, mid-Pacific, Indian Ocean per pairing). No reference leg flown yet; populate per-route en-route alternates when the first OFP is built. 🟧
- **Critical-fuel note:** critical-fuel scenario (decompression + engine-out driftdown at the ETOPS entry point to the most limiting en-route alternate) must be checked against the fuel plan per OM E; the ~101 t tank against the 787-9's low trip burn leaves adequate margin on typical network sectors. 🟥

## 6. Route applicability
- **Cleared/typical:** thin-to-medium intercontinental trunks within ~7,565 NM range; well suited to transoceanic/near-polar routings that need EDTO reach but not a larger frame. The efficiency workhorse for medium-density long-haul where a 315-seat twin sizes better than the 777/747.
- **Watch:** ultra-long-haul beyond demonstrated range, and hot-and-high departures where payload is thrust-capped (§4).
- Link to OM C route briefs (planned): OM C route briefs (planned) and OM C route briefs (planned).

## 7. Dispatch watch-items

| Item | Flag | Note |
|---|---|---|
| Range vs longest scheduled sector | 🟧 | ~7,565 NM range — confirm reserves on any longer trunk; no OFP flown yet |
| Hot-and-high payload limit | 🟧 | FAOR/HAAB/NBO thrust-limited on longest legs; lower sensitivity than the quads |
| ETOPS adequacy on thin routes | 🟥 | Approved rule time **180 min** (widebody twin) 🟩 `[K Global OpsSpec 2026-07-25]`; type capable 330 min — confirm en-route alternates per leg |
| Tankering opportunity/risk | 🟩 | Large tank gives headroom; check hub price differentials + CG |
| Engine fit / burn baseline | 🟧 | GEnx-1B vs Trent 1000 fit unconfirmed — resolve before OFP burn comparison |

---

## Sources & References
*Public URLs only. Private/OEM/add-on documents may inform content but must never be listed here.*

- Boeing — 787 Dreamliner type page — https://www.boeing.com/commercial/787
- Boeing — Boeing Receives 330-Minute ETOPS Certification for 787s — https://boeing.mediaroom.com/2014-05-28-Boeing-Receives-330-Minute-ETOPS-Certification-for-787s
- Boeing — 787 Airplane Characteristics for Airport Planning — https://www.boeing.com/content/dam/boeing/boeingdotcom/commercial/airports/acaps/787.pdf
- EASA — TCDS EASA.IM.A.115 Boeing 787 — https://www.easa.europa.eu/en/document-library/type-certificates
- SKYbrary — Boeing 787-9 (B789) — https://skybrary.aero/aircraft/b789
- Wikipedia — Boeing 787 Dreamliner — https://en.wikipedia.org/wiki/Boeing_787_Dreamliner

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-25 | Initial draft — dispatch built from public Boeing/EASA data + VAMSYS mirror config + Fleet Capability Matrix + OpsSpec batch 1/2 approvals (EDTO 180 approved / 330 capable). No reference OFP flown yet. |
