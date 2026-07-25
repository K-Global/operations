<!--
================================================================================
  K Global — AIRFRAME PACK · DISPATCH  ·  B748 Boeing 747-8 (8i / 8F)
  Curated layer. Anonymous · version-controlled · public sources only.
  FLAG LEGEND  🟥 hard requirement/hazard   🟧 caution/unverified   🟩 normal/confirmed
================================================================================
-->

# B748 — Boeing 747-8 · Dispatch

**B748 / 747 family** · Four-engine widebody flagship — 747-8i pax + 747-8F freighter
**Version** v0.1 · **Updated** 2026-07-25 · **Status** Draft

> **Read-me:** How this type is dispatched at K Global. Method (fuel policy, EDTO rules) is defined once in OM E — this file **applies** it to the B748. Capability values are held in the Fleet Capability Matrix — cited, not restated. Flag legend 🟥 hard · 🟧 caution · 🟩 normal.

---

## 1. Snapshot (planning)

| Field | Value |
|---|---|
| OEW / MZFW / MTOW / MLW (8i) | ~220,000 🟧 / ~295,300 🟧 / ~447,700 🟩 / ~312,100 🟧 kg |
| OEW / MZFW / MTOW / MLW (8F) | ~197,000 🟧 / ~330,000 🟧 / ~447,700 🟩 / ~346,100 🟧 kg |
| Max fuel | ~226,000 kg (~291,000 L) 🟧 `[VERIFY]` |
| Payload (K Global config) | 8i: **331 pax + 45,000 kg belly**; 8F: **main-deck cargo, no pax** `[VAMSYS mirror 2026-07-25]` |
| Typical block burn | ~10–11 t/hr avg long-haul cruise (public four-engine reference) 🟧 — no B748 reference OFP yet 🟧 |
| Cost index (default) | Per OM E / route economics — no B748 reference OFP CI yet 🟧 `[VERIFY]` |
| Reserve rule | Final reserve **30 min** + alternate per OM E fuel policy 🟩 `[K Global OpsSpec 2026-07-25]` |
| Contingency | **5% / ERA** per OM E fuel policy 🟩 `[K Global OpsSpec 2026-07-25]` |
| ETOPS/EDTO | **Quad — no ETOPS diversion-time limit; ICAO EDTO adequate-aerodrome concept applies (2+ engines)** — no operator rule-time value applies 🟧 [operator — VERIFY] — see §5 & matrix |

## 2. SimBrief setup
- **Airframe profile:** B748 (747-8 / GEnx-2B) — SimBrief B748; one profile drives both 8i and 8F (variant difference carried in the loadsheet, §4)
- **Aircraft-data overrides:** OEW / MZFW / MTOW / MLW / max fuel — set to VAMSYS mirror figures per variant where they differ from SimBrief defaults (MTOW ~447,700; **8i MZFW ~295,300 / 8F MZFW ~330,000** 🟧); ceiling ~FL430; engines 4 × GEnx-2B67; PBN/equip per fleet standard (RVSM, RNP 4 + RNAV 10 oceanic, RNP AR 0.3, full RNP APCH — see matrix Table B) 🟧 `[VERIFY]`
- **Dispatch overrides:** reserve rule (final reserve 30 min), contingency 5%/ERA, fuel factor, cruise mode/sub, climb/descent per OM E; **EDTO — no ETOPS rule-time selector applies (quad)**; use adequate-aerodrome planning, not a diversion-time threshold `[K Global OpsSpec 2026-07-25]`
- **Fuel overrides:** minfob / minfod / atc / mel / wxx / added / tankering — default unless route-specific 🟧
- **Variant loadsheet:** select the **8i (pax + belly)** or **8F (main-deck cargo)** loadsheet per tail — these are different ZFW/CG builds (§4)
- Basis: VAMSYS `simbrief_overrides` for this type `[VAMSYS mirror 2026-07-25]`

## 3. Fuel policy applied
OM E's generic fuel policy resolves for the B748 as taxi + trip + **contingency (5% / ERA)** + alternate + **final reserve (30 min)** + any additional/holding `[K Global OpsSpec 2026-07-25]`. Public four-engine long-haul cruise burn is **~10–11 t/hr** 🟧 (indicative; no type OFP yet); against ~226 t max fuel the aircraft carries large mission/reserve headroom on the trunk and cargo sets. **Tankering:** the very large tank gives real tankering headroom on short-turn pairs, weight-and-CG permitting; assess Frankfurt-vs-outstation price differentials per leg — tankering is authorised **case-by-case** per OM E `[K Global OpsSpec 2026-07-25]`. Exact reserve/contingency values are defined in OM E — apply, do not restate here beyond the figures above. See `../../../OM E Operations/` fuel policy.

## 4. Payload & loading
- **8i (passenger):** K Global config **331 pax + 45,000 kg belly** `[VAMSYS mirror 2026-07-25]`. Standard pax/bag weights and belly LD3/LD6 container plan per OM E loading policy; keep ZFW within the 8i MZFW (~295,300 kg) and CG within envelope. 🟧
- **8F (freighter) 🟥:** **main-deck cargo, no passengers.** The 8F loadsheet is a **distinct build** from the 8i — main-deck pallet/ULD positions plus lower-deck cargo, loaded through the side cargo door and the **nose-loading door** (outsize/long loads). Main-deck loading demands active **CG management**: pallet-position planning and a main-deck load distribution that keeps the loaded CG within the freighter envelope through all fuel states — a materially different loading discipline from belly-only pax loading. Keep ZFW within the 8F MZFW (~330,000 kg). Keep the two variants' loadsheets separate; never carry an 8i belly figure onto an 8F plan. 🟥
- **Hot-and-high / long-field penalties:** matrix rates hot/high sensitivity **Moderate–high**; thrust-limited/field-limited takeoffs at FAOR/HAAB/NBO can force reduced payload or fuel on long legs at high TOW — check per field before committing schedule. See [Fleet Capability Matrix](../capability-matrix.md) (Table D). 🟧

## 5. ETOPS / EDTO 🟥
- **Capability:** the 747-8 is a **four-engine (quad)** aircraft and therefore carries **no twin-style ETOPS diversion-time limit** — classic ETOPS is a twin construct. **However, ICAO EDTO (Annex 6) adequate-aerodrome / threshold-time planning applies to aeroplanes with two or more engines**, so the B748 is **not exempt from EDTO planning** even though no diversion-time rule value applies. 🟥
- **Operator rule time:** **no ETOPS rule-time value applies to the quad** — the matrix holds the B748 operator cell **🟧 [operator — VERIFY]** (quad — ICAO EDTO adequate-aerodrome concept, no ETOPS diversion limit); the quad EDTO rule time is an open item pending a further OpsSpec batch. Do **not** assume a 180-min-style twin rule for this type. 🟧
- **Method:** defined once in OM E — see `../../../OM E Operations/ETOPS-EDTO Procedures.md`. Capability/approval values are held in [Fleet Capability Matrix](../capability-matrix.md) (Table A). This file only records the type application.
- **En-route alternates:** selected per route from the OM E adequate-aerodrome set (transoceanic/near-polar/remote fields) under the EDTO adequate-aerodrome concept; no B748 reference OFP alternates yet on file 🟧 — populate when the first type OFP is flown.
- **Critical-fuel note:** the EDTO critical-fuel/adequate-aerodrome scenario must still be checked against the fuel plan per OM E even though no diversion-time limit binds the quad; the ~226 t tank leaves large margin on the trunk/cargo set. 🟥

## 6. Route applicability
- **Cleared/typical:** 8i — dense premium intercontinental trunks within ~7,700 NM; 8F — main-deck heavy/outsize cargo on the FRA + HKG grid and long cargo trunks (~4,100 NM at max structural payload). As a quad with no diversion-time limit, the B748 is a natural fit for deep-oceanic/transpolar great-circle routings that a twin's EDTO rule would constrain — subject to EDTO adequate-aerodrome planning.
- **Watch:** **Code F** stand/taxiway availability at every field (§Intro 4) 🟥; hot-and-high departures where payload is field/thrust-capped (§4); confirm reserves on any sector approaching structural range; never mix 8i/8F loadsheets.
- Link to OM C route briefs (planned): OM C route briefs (planned) and OM C route briefs (planned).

## 7. Dispatch watch-items

| Item | Flag | Note |
|---|---|---|
| No B748 reference OFP yet | 🟧 | Burn/CI/alternates are public-derived — replace with type OFP figures when first flown |
| Quad EDTO rule time | 🟧 | **No ETOPS diversion limit** (quad); operator cell 🟧 [operator — VERIFY] — EDTO adequate-aerodrome planning applies; do not assume a twin rule time |
| Code F stand/taxiway limits | 🟥 | Wingspan 68.4 m → Code F — confirm Code F stands, taxiways and RFF Cat 10 at every field |
| 8i vs 8F loadsheet separation | 🟥 | Pax + belly vs main-deck cargo are different ZFW/CG builds — keep separate; 8F needs active main-deck CG management |
| Hot-and-high / long-field payload limit | 🟧 | FAOR/HAAB/NBO field/thrust-limited at high TOW — payload/fuel penalties (matrix: Moderate–high) |
| Tankering opportunity/risk | 🟩 | Very large tank gives headroom; case-by-case per OM E; check hub price differentials + CG |

---

## Sources & References
*Public URLs only. Private/OEM/add-on documents may inform content but must never be listed here.*

- Boeing — 747-8 product page — https://www.boeing.com/commercial/747
- Boeing — 747-8 Airplane Characteristics for Airport Planning — https://www.boeing.com/content/dam/boeing/boeingdotcom/company/about_bca/startup/pdf/historical/747_8.pdf
- SKYbrary — Boeing 747-8 (B748) — https://skybrary.aero/aircraft/b748
- ICAO — ETOPS & EDTO technical awareness (Annex 6 EDTO; 2+ engine applicability) — https://www.icao.int/sites/default/files/WACAF/MeetingDocs/2025/Seminar%20on%20Aircraft/AI_SPECIFIC_APPROVAL-2025-ETOPS-EDTO_Part1_v1_0_OPT.pdf
- Wikipedia — Boeing 747-8 — https://en.wikipedia.org/wiki/Boeing_747-8

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-25 | Initial draft — dispatch built from public Boeing/EASA/ICAO data + VAMSYS mirror; OpsSpec values applied (contingency 5%/ERA, final reserve 30 min, tankering case-by-case); **quad — no ETOPS diversion limit, EDTO adequate-aerodrome concept applies**, operator rule-time cell 🟧 [operator — VERIFY] (open item); 8i pax + 8F main-deck freighter loadsheets kept separate; capability values cross-linked to the Fleet Capability Matrix; no type OFP yet (watch-item). |
