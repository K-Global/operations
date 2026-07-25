<!--
================================================================================
  K Global — AIRFRAME PACK · INTRO  ·  CL30 Bombardier Challenger 300
  Curated layer. Anonymous · version-controlled · public sources only.
  FLAG LEGEND  🟥 hard requirement/hazard   🟧 caution/unverified   🟩 normal/confirmed
================================================================================
-->

# CL30 — Bombardier Challenger 300 · Intro

**CL30 / Bombardier Challenger 300** · Super-midsize business jet, Executive unit (VIP / charter-style operation)
**Version** v0.1 · **Updated** 2026-07-25 · **Status** Draft

> **Read-me:** Type reference for X-Plane 11, not a substitute for the aircraft's own documentation. Figures carry provenance tags; verify `[VERIFY]` items before use. Capability values (EDTO, RVSM, PBN, LVO, RECAT, RFF) are not restated here — see the Fleet Capability Matrix **secondary (indicative) table**, which covers this type at 🟧 confidence. Flag legend 🟥 hard · 🟧 caution · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| ICAO type designator | **CL30** |
| Family / type rating | Bombardier Challenger 300 — clean-sheet design, distinct from the larger Challenger 600/604/605/650 family; the improved Challenger 350/3500 variants are related but not confirmed as operated 🟩 |
| Variants operated | Bombardier Challenger 300 (baseline) `[VAMSYS mirror 2026-07-25]` |
| Engines | **2 × Honeywell HTF7000** turbofans 🟩 — twin, ~6,826 lbf (30.4 kN) thrust each |
| ICAO code letter | **B** — wingspan 19.46 m (15–<24 m band) 🟩 |
| Config (K Global) | ~8–9 pax VIP configuration, Executive unit `[VERIFY — VAMSYS]` |
| MTOW / OEW / Max payload | ~17,622 kg (38,850 lb) / ~10,659 kg (23,500 lb) / ~1,588 kg (3,500 lb) 🟩 |
| Max fuel | ~6,418 kg (14,150 lb) 🟩 |
| Service ceiling | **FL450** (45,000 ft) 🟩 |
| Typical cruise | M0.80 (max **M0.83**) 🟩 |
| Range (8 pax, public reference) | **~3,100 NM** 🟩 (public/Wikipedia reference; some sources cite ~3,065 NM depending on payload/reserve assumptions — reconcile against the manufacturer performance chart 🟧 `[VERIFY]`) |
| ETOPS/EDTO | Twin — classic ETOPS construct **type-applies**, but **no K Global operator rule time is established** for this type — see Dispatch & matrix |
| Steep approach / London City (EGLC) | **Not** typically an LCY steep-approach candidate 🟩 — unlike the Falcon 7X/Legacy-class noted in the OM E Steep Approach doc, the Challenger 300 is not commonly cited in that candidate group; treat as **not steep-approach relevant** for this type pending any contrary confirmation |
| RECAT-EU / wake / RFF | See [Fleet Capability Matrix](../capability-matrix.md) secondary table — 🟧 indicative throughout (RECAT-EU **F–E**, ICAO wake **M–L**); RFF **Cat 4** (length 20.92 m, 18–<24 m band) 🟧 computed, confirm |

## 2. Modelling & profile mapping 🟥

The three-way mapping — **no external source records this; it is a K Global decision:**

> **Real type:** CL30 (Bombardier Challenger 300, 2 × HTF7000) → **SimBrief profile:** Challenger 300 (CL30) 🟧 `[VERIFY — confirm exact SimBrief profile availability/defaults]` → **Sim model:** approved X-Plane 11 add-on **not yet formally confirmed** 🟧 `[VERIFY]`

An X-Plane 11 Challenger 300 study-level add-on already exists in K Global's internal reference material, but its formal approval as the K Global-flown model is an **open management decision**, not yet confirmed — the same posture as the mainline fleet's unconfirmed sim-model items. The dispatch profile should model the correct twin/HTF7000 airframe and drive the OFP burn; any fuel-burn comparison between the SimBrief OFP and the eventual flown model must be validated in a Sim-Model file (to build) before this pack is Verified.

## 3. Role in the network

Super-midsize business jet operated by the **Executive** unit for VIP/charter-style missions — on-demand point-to-point work, shorter-range than the Falcon 7X / Gulfstream G650ER/G550 pair at the top of the business-jet group. Combined with regional Bombardier types (CRJ700/900, CRJ-200) the wider Bombardier group totals ~10 tails `[VERIFY — VAMSYS]`; the CL30-specific count is not yet broken out. The type covers shorter VIP/charter sectors than the long-range large-cabin bizjets, filling a role analogous to the narrowbody/regional split in the mainline fleet.

**Not a steep-approach candidate 🟩:** the OM E Steep Approach Operations doc (`../../../OM E Operations/Steep Approach Operations.md`) names the Falcon 7X, Challenger/Legacy-**class** and Gulfstream types generically as commonly LCY-capable in the wider market — but that reference is to the broader Challenger/Legacy category, not a specific confirmation for the baseline Challenger 300. No public source reviewed in this pass confirms Challenger 300 EGLC/steep-approach certification; treat this type as **not** an LCY candidate unless a future source confirms otherwise.

## 4. Dimensions & ground footprint

- Length **20.92 m** (68.63 ft); wingspan **19.46 m** (63 ft 10 in); height **6.2 m** (20 ft 4 in) 🟩
- **ICAO Code B** (15–<24 m wingspan band) — compact business-jet footprint; no wingspan-restricted taxiway concerns. 🟩
- **RFF Cat 4** (20.92 m → 18–<24 m band per ICAO Annex 14) 🟧 computed from the public length figure; confirm against each field's ARFF category assignment for this type.
- Cabin: single-aisle super-midsize cabin, typically 8–9 passenger configurations (up to 19 total occupants including crew per the type certificate, not the K Global VIP fit-out). Two-pilot flight deck (crew of two); Rockwell Collins Pro Line 21 avionics suite.

## 5. Weights

| | kg |
|---|---|
| OEW | ~10,659 🟩 |
| MTOW | ~17,622 🟩 |
| Max payload | ~1,588 🟩 |
| Max fuel | ~6,418 (~14,150 lb) 🟩 |

K Global operates the baseline Challenger 300 (not the improved Challenger 350/3500 variants, which carry different HTF7350 engines and higher weights). Confirm the exact delivered variant/weight fit against the VAMSYS mirror before use in performance planning 🟧 `[VERIFY — VAMSYS weight variant]`.

## 6. Performance

- Service ceiling **FL450**; typical cruise **M0.80** (max **M0.83**) 🟩.
- Reference cruise fuel flow **~1,500 lb/hr** at M0.80/FL410-class cruise weights (public reference); **~1,929 lb/hr** at the higher M0.83 speed 🟧 — no K Global type-specific reference OFP yet on file (watch-item).
- **Cost index:** set per OM E / mission economics; no CL30 reference OFP CI yet 🟧 `[VERIFY]`.
- **Field length:** takeoff **~1,466 m** (4,810 ft); landing **~792 m** (2,600 ft) 🟩 — solid short-field performance for the class, though not assessed against specific K Global network fields.
- **Hot-and-high:** not independently assessed for K Global's network; treat as an open item pending mission-specific review. 🟧

## 7. Validation summary

| Domain | Flag | Note |
|---|---|---|
| Twin-engine configuration (2 × HTF7000) | 🟩 | Confirmed type fact |
| Range vs typical Executive-unit missions | 🟩 | ~3,100 NM covers most VIP/charter sectors; confirm reserves on the longest planned mission |
| EDTO/ETOPS adequacy | 🟧 | Type is a classic-ETOPS-applicable twin, but no K Global operator rule time is established; do not assume one — see Dispatch §5 |
| Steep approach / London City capability | 🟩 | Not typically an LCY candidate for this type — noted for completeness, not a hazard |
| Stand / gate compatibility | 🟩 | Code letter B / RFF Cat 4 (computed) — compact business-jet footprint |
| Modelling fidelity (sim vs real) | 🟧 | An X-Plane 11 CL30 add-on exists in K Global's reference material; formal approval as the flown model is an open management decision |

## 8. Related pack files

**Built:** [Dispatch](dispatch.md) · [Sim-Model](sim-model.md) · [Checklist](checklist.md) · [QRH](qrh.md) · [Livery](livery.md) · [Pack index](index.md)
Fleet Index → [overview](../index.md) · [Capability values (secondary indicative table)](../capability-matrix.md) · Steep Approach policy: `../../../OM E Operations/Steep Approach Operations.md`

---

## Sources & References
*Public URLs only. Private/OEM/add-on documents may inform content but must never be listed here.*

- Bombardier Business Aircraft — Challenger 300/350 — https://businessaircraft.bombardier.com
- Wikipedia — Bombardier Challenger 300 (dimensions, weights, range, HTF7000, type certification) — https://en.wikipedia.org/wiki/Bombardier_Challenger_300
- Transport Canada — Type Certificate Data Sheet A-234 (Challenger 300/350) — https://wwwapps.tc.gc.ca/saf-sec-sur/2/nico-celn/c_d.aspx
- SKYbrary — Steep Approach — https://skybrary.aero/articles/steep-approach

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1.1 | 2026-07-25 | §8 updated — Sim-Model, Checklist, QRH and Livery built; pack now fully cross-linked (no to-build items remaining). |
| v0.1 | 2026-07-25 | Initial draft — pack core (Intro) built from public Bombardier/Wikipedia/Transport Canada data + VAMSYS mirror; range figure reconciled (~3,100 NM public reference vs ~3,065 NM commonly-cited figure, flagged for confirmation); explicitly noted as **not** a typical steep-approach/London City candidate, distinguishing it from the Falcon 7X; capability values cross-linked to the Fleet Capability Matrix secondary (indicative) table; approved sim model an open management decision. |
