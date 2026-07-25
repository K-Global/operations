<!--
================================================================================
  K Global — AIRFRAME PACK · DISPATCH  ·  A339 Airbus A330-900neo
  Curated layer. Anonymous · version-controlled · public sources only.
  FLAG LEGEND  🟥 hard requirement/hazard   🟧 caution/unverified   🟩 normal/confirmed
================================================================================
-->

# A339 — Airbus A330-900neo · Dispatch

**A339 / A330 family** · Long-haul widebody twin, EDTO trunk aircraft
**Version** v0.1 · **Updated** 2026-07-25 · **Status** Draft

> **Read-me:** How this type is dispatched at K Global. Method (fuel policy, ETOPS rules) is defined once in OM E — this file **applies** it to the A339. Flag legend 🟥 hard · 🟧 caution · 🟩 normal.

---

## 1. Snapshot (planning)

| Field | Value |
|---|---|
| OEW / MZFW / MTOW / MLW | ~135,093 🟧 / 181,000 / 251,000 / 191,000 `[OFP EDDF–KSFO 2026-07-25]` |
| Max fuel | ~111 t (139,090 L) 🟧 `[VERIFY]` |
| Payload (K Global config) | 288 pax + 20,000 kg belly `[VAMSYS mirror 2026-07-25]` (reference leg flew 286 pax, 40.7 t payload incl. 12.1 t cargo `[OFP EDDF–KSFO 2026-07-25]`) |
| Typical block burn | ~5.9 t/hr avg → ~67.8 t on the ~11h33 EDDF–KSFO reference leg `[OFP EDDF–KSFO 2026-07-25]` |
| Cost index (default) | CI 10 `[OFP EDDF–KSFO 2026-07-25]` |
| Reserve rule | Final reserve + alternate per OM E fuel policy 🟧 `[VERIFY]` |
| Contingency | Per OM E policy 🟧 `[VERIFY]` |
| ETOPS/EDTO | **Approved EDTO rule time: 180 min** (widebody twin) 🟩 [K Global OpsSpec 2026-07-25]; reference OFP dispatched conservatively at **ETOPS 120 min**; type certified beyond 180 (up to 285) 🟥 |

## 2. SimBrief setup
- **Airframe profile:** Airbus A330-900 (Trent 7000) — SimBrief A339
- **Aircraft-data overrides:** OEW / MZFW / MTOW / MLW / max fuel — set to VAMSYS mirror figures where they differ from SimBrief defaults (MTOW 251,000 / MLW 191,000 / MZFW 181,000 `[OFP EDDF–KSFO 2026-07-25]`); ceiling FL411; engines Trent 7000-72; PBN/equip per fleet standard 🟧 `[VERIFY]`
- **Dispatch overrides:** reserve rule, contingency %, fuel factor, cruise mode/sub, climb/descent per OM E; **cost index CI 10**; **ETOPS threshold & rule selector = 120 min** for the reference leg `[OFP EDDF–KSFO 2026-07-25]`
- **Fuel overrides:** minfob / minfod / atc / mel / wxx / added / tankering — default unless route-specific 🟧
- Basis: VAMSYS `simbrief_overrides` for this type `[VAMSYS mirror 2026-07-25]`

## 3. Fuel policy applied
OM E's generic fuel policy resolves for the A339 as taxi + trip + contingency + alternate + final reserve + any additional/holding. Reference leg burned trip ~**67.8 t** at CI 10, avg flow **5,863 kg/hr**, over a step-climbed FL310→FL380 profile `[OFP EDDF–KSFO 2026-07-25]`. Against ~111 t max fuel the aircraft carries comfortable EDTO/critical-fuel margin on this sector. **Tankering:** assess Frankfurt-vs-outstation price differentials per leg; the large tank (139,090 L) gives real tankering headroom on short-turn pairs, weight-and-CG permitting. Exact reserve/contingency percentages are defined in OM E — apply, do not restate here. 🟧 `[VERIFY OM E]`

## 4. Payload & loading
- K Global config: **288 pax + 20,000 kg belly** `[VAMSYS mirror 2026-07-25]`. Reference leg dispatched **286 pax, 40.7 t total payload including 12.1 t cargo** `[OFP EDDF–KSFO 2026-07-25]`.
- Standard pax/bag weights and belly LD3/LD6 container plan per OM E loading policy; CG within envelope on the reference dispatch (ZFW 175,167 kg vs MZFW 181,000 kg) `[OFP EDDF–KSFO 2026-07-25]`.
- **Hot-and-high / short-field penalties:** thrust-limited takeoffs at FAOR/HAAB/NBO can force reduced payload or fuel on long legs — check per field before committing schedule. 🟧

## 5. ETOPS / EDTO 🟥
- **Capability:** A330neo type is EDTO-certified **beyond 180 minutes, up to 285 min** (Airbus/EASA). K Global operates to the **OFP-approved rule time**, not the type maximum. The reference EDDF–KSFO OFP dispatched at **ETOPS 120 min** `[OFP EDDF–KSFO 2026-07-25]`. **Approved EDTO rule time: 180 min** (widebody twin) 🟩 `[K Global OpsSpec 2026-07-25]` — the A339, as a widebody twin, is approved to the full 180-min OpsSpec rule time; the reference leg's 120-min dispatch was a conservative choice on that specific route, not the approval ceiling.
- **Method:** defined once in OM E — see `../../../OM E Operations/ETOPS-EDTO Procedures.md`. This file only records the type application.
- **En-route alternates (reference leg):** **BGSF** (Kangerlussuaq, Greenland) and **CYZF** (Yellowknife, Canada) `[OFP EDDF–KSFO 2026-07-25]` — the depressurised/single-engine driftdown adequate fields covering the near-polar Atlantic/Canada crossing.
- **Critical-fuel note:** critical-fuel scenario (decompression + engine-out driftdown at the ETOPS entry point to the most limiting en-route alternate) must be checked against the fuel plan per OM E; on the reference sector the ~111 t tank leaves adequate margin over the ~67.8 t trip burn. 🟥

## 6. Route applicability
- **Cleared/typical:** thin-to-medium intercontinental trunks within ~7,200 NM structural range; reference pairing **EDDF–KSFO** (~5,123 NM GC) `[OFP EDDF–KSFO 2026-07-25]`. Well suited to transoceanic/near-polar routings that need EDTO reach but not a larger frame.
- **Watch:** ultra-long-haul beyond demonstrated range, and hot-and-high departures where payload is thrust-capped (§4).
- Link to OM C route briefs (planned): OM C route briefs (planned) and OM C route briefs (planned).

## 7. Dispatch watch-items

| Item | Flag | Note |
|---|---|---|
| Range vs longest scheduled sector | 🟧 | 5,123 NM flown vs ~7,200 NM structural — confirm reserves on any longer trunk |
| Hot-and-high payload limit | 🟧 | FAOR/HAAB/NBO thrust-limited — payload/fuel penalties |
| ETOPS adequacy on thin routes | 🟥 | Approved rule time **180 min** (widebody twin) 🟩 [K Global OpsSpec 2026-07-25]; OFP dispatched 120 min on the reference leg (conservative, within approval) — confirm en-route alternates per leg |
| Tankering opportunity/risk | 🟩 | Large tank gives headroom; check hub price differentials + CG |

---

## Sources & References
*Public URLs only. Private/OEM/add-on documents may inform content but must never be listed here.*

- Airbus — A330-900 type page — https://www.aircraft.airbus.com/en/aircraft/a330/a330-900
- Airbus — EASA certifies A330neo for "beyond 180 minutes" ETOPS — https://www.airbus.com/en/newsroom/press-releases/2019-01-easa-certifies-a330neo-for-beyond-180-minutes-etops
- EASA — TCDS EASA.A.004 Airbus A330 — https://www.easa.europa.eu/en/downloads/7518/en
- SKYbrary — Airbus A330neo (A339) — https://skybrary.aero/aircraft/a339
- Wikipedia — Airbus A330neo — https://en.wikipedia.org/wiki/Airbus_A330neo

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1.2 | 2026-07-25 | OpsSpec batch 1: operator-approval values set (EDTO 180/120, LVO CAT IIIB/I, LVTO 125m, RNP AR 0.3, RNP APCH+LPV, contingency 5%/ERA, final reserve 30 min, tankering case-by-case; steep approach deferred). |
| v0.1.1 | 2026-07-25 | Governance scrub: removed callsign and build-process references per OM content rules. |
| v0.1 | 2026-07-25 | Initial draft — dispatch built from the reference EDDF–KSFO OFP (2026-07-25, ETOPS 120, alts BGSF/CYZF) + public data |
