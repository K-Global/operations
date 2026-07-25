<!--
================================================================================
  K Global — AIRFRAME PACK · INTRO  ·  CRJ2 Bombardier CRJ-200
  Curated layer. Anonymous · version-controlled · public sources only.
  FLAG LEGEND  🟥 hard requirement/hazard   🟧 caution/unverified   🟩 normal/confirmed
================================================================================
-->

# CRJ2 — Bombardier CRJ-200 · Intro

**CRJ2 — Bombardier CRJ-200, CL-600-2B19 · SEPARATE type rating from the CRJ700/900 (`CRJ7`/`CRJ9`)** · Narrowbody regional jet, City/Regional network
**Version** v0.1 · **Updated** 2026-07-25 · **Status** Draft

> **Read-me:** Type reference for X-Plane, not a substitute for the aircraft's own documentation. Figures carry provenance tags; verify `[VERIFY]` items before use. Capability values (EDTO, RVSM, PBN, LVO, RECAT, RFF) are **not researched to mainline standard** for this type — the Fleet Capability Matrix carries the CRJ2 in its **secondary/indicative table** only, every cell 🟧. Flag legend 🟥 hard · 🟧 caution · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| ICAO type designator | **CRJ2** |
| Manufacturer model | CL-600-2B19 (Regional Jet Series 100/200) 🟩 — the CRJ-200 is the re-engined development of the earlier CRJ-100, near-identical airframe |
| Family / type rating | Bombardier/Canadair CRJ series — **this is a SEPARATE, distinct practical type rating from the CRJ700/900** (`CRJ7`/`CRJ9`) pack in this group; older/smaller airframe on the same broad type certificate lineage but a different wing, avionics-generation depth and systems fit — see the [Fleet overview](../index.md), "Type-rating grouping" 🟩 |
| Type-certificate holder | **MHI RJ Aviation ULC** (formerly Bombardier Inc., formerly Canadair; CRJ program acquired by Mitsubishi Heavy Industries, closed 2020-06-01) 🟩 — carries the same **FAA TCDS A21EA** "CL-600 Regional Jet Series" family certificate as the CRJ700/900 🟧 `[VERIFY]`; EASA equivalent cited as **EASA.IM.A.673** "CL-600 Regional Jet Series" 🟧 `[VERIFY]` |
| Variants operated | Bombardier CRJ-200 (single sub-type) `[VERIFY — VAMSYS]`; family also includes the earlier CRJ-100 and the ER/LR range-optimised sub-variants 🟧 |
| Engines | **2 × GE CF34-3B1** — improved-efficiency development of the CRJ-100's CF34-3A1, ~41 kN (9,220 lbf) takeoff thrust per engine 🟧 `[VERIFY]`; electronic engine control fitted, but this is an **earlier engine-control generation than the full-authority FADEC** on the CRJ700/900's CF34-8 series — confirm exact control architecture `[VERIFY]` |
| ICAO code letter | **B** — wingspan ~21.2 m, i.e. **smaller aerodrome-reference footprint than the CRJ700/900 (Code C)** 🟩 |
| Config (K Global) | City/Regional network `[VERIFY — VAMSYS]`; seats/cargo not yet broken out per type — aggregate ~10 tails across the four-type Bombardier group (CRJ7/CRJ9/CRJ2/CL30) `[VERIFY — VAMSYS]` |
| MTOW / OEW | ER 23,133 kg / LR 24,041 kg 🟩 (Wikipedia, sourced Bombardier fact sheet); OEW **13,835 kg** 🟩 |
| MZFW / MLW | Not published as a discrete figure in the surveyed public sources 🟧 `[VERIFY — FAA TCDS A21EA]` — OEW + max payload (13,835 + 6,124 kg ≈ 19,959 kg) is a **derived estimate only**, not a certified MZFW; MLW not found 🟧 `[VERIFY]` |
| Max fuel | **6,489 kg** (8,081 US gal / 2,135 US gal listed, ≈ 8,081 L) 🟩 |
| Service ceiling | 41,000 ft (FL410) 🟩 |
| Typical cruise | Normal cruise **M0.74** (~424 kt TAS) 🟩; high-speed cruise **M0.81** (~465 kt) 🟩 |
| Range (rep. payload) | **ER ~1,305–1,345 NM / LR ~1,650–1,700 NM** 🟩 (Wikipedia, variant-dependent); SKYbrary's own "indicative performance" table separately cites a shorter ~1,000 NM planning figure at a different payload/reserve assumption 🟧 — treat range as **variant- and mission-dependent**, not a single number |
| ETOPS/EDTO | Regional short-haul type — **not typically EDTO-planned**; no K Global rule time asserted — see Dispatch & matrix |
| RECAT-EU / wake / RFF | **Not in the mainline Fleet Capability Matrix tables** — see the matrix's **secondary/indicative table** (🟧 throughout): ICAO wake category **M** (medium); RECAT-EU category not tabulated for this type; RFF category not tabulated — see §4 |

## 2. Modelling & profile mapping 🟥

The three-way mapping — **no external source records this; it is a K Global decision:**

> **Real type:** CRJ2 (Bombardier CRJ-200, CL-600-2B19, CF34-3B1) → **SimBrief profile:** CRJ2 (CRJ2) 🟧 `[VERIFY]` → **Sim model:** JRollon CRJ-200 for X-Plane 11 🟧 `[VERIFY]`

The dispatch profile (SimBrief CRJ2) models the correct airframe/engine family and drives the OFP burn. The candidate X-Plane model — **JRollon's CRJ-200** (also distributed as an Aerosoft-branded XP11 release) — is identified in Sim-Model but **not yet formally approved** by K Global management (marked 🟧 `[VERIFY]`), the same open posture as the CRJ700/900 pair pending a decision. Any fuel-burn comparison between the SimBrief OFP and the flown model must be validated in Sim-Model before this pack is Verified. Cross-ref Dispatch §2 (SimBrief setup) and the Sim-Model file for the candidate model and its fidelity notes.

## 3. Role in the network

Narrowbody regional jet operating in the **City** and **Regional** business units `[VERIFY — VAMSYS]` — the smallest-gauge, oldest-generation type in the regional group, a step below the CRJ700/900 in both seat count and range. Sits on the same broad CRJ type-certificate lineage as the CRJ700/900 but is **documented and rated separately** — different wing (hard wing, no leading-edge devices — §6), different weight class, and an older avionics/systems generation. Crews are **not** assumed cross-qualified between this type and the CRJ700/900 without a distinct type-rating course; do not treat the CRJ series as a single common rating across all four Bombardier types (see the [Fleet overview](../index.md), "Type-rating grouping").

## 4. Dimensions & ground footprint

- Length **26.80 m** (87 ft 10 in); height **6.30 m** (20 ft 8 in); wingspan **~21.2 m** (69 ft 6 in / 21.21 m per SKYbrary, 21.18 m per Wikipedia — minor source variance) 🟩
- **ICAO Code B** (SKYbrary aerodrome reference code "3B") — a **smaller stand/taxiway footprint than the CRJ700/900 (Code C)**; no wingspan-restricted taxiway concerns for this type. 🟩
- **RFF category:** not tabulated in the Fleet Capability Matrix (secondary table carries no RFF column for deferred types). By ICAO Annex 14 length band (24–<28 m), the 26.80 m length would indicate **Cat 5** — one band below the CRJ700's indicative Cat 6 — stated here as an **indicative, non-matrix-sourced** estimate only 🟧 `[VERIFY]`; confirm against the matrix once the CRJ packs are researched to mainline standard.
- Single-aisle, one main-deck passenger door forward plus a rear airstair/service door and overwing exits; single lower-deck belly hold; engines mounted both sides of the rear fuselage. GPU/air-start and de-ice footprint per regional-jet standard. **T-tail** configuration — tailplane sits clear of engine/wing wake but raises a specific **deep-stall / pitch-up awareness** requirement common to T-tail types; see QRH Ch 1 and Ch 7.

## 5. Weights

| | kg |
|---|---|
| OEW | **13,835** (30,500 lb) 🟩 |
| MZFW | Not published as a discrete figure 🟧 `[VERIFY — FAA TCDS A21EA]` — OEW + max payload gives a derived ≈19,959 kg estimate only, not a certified value |
| MTOW | **ER 23,133 / LR 24,041** 🟩 |
| MLW | Not found in surveyed public sources 🟧 `[VERIFY — FAA TCDS A21EA]` |
| Max fuel | **6,489** (8,081 L / 2,135 US gal) 🟩 |
| Max payload | **6,124** (13,500 lb) 🟩 |

K Global operates a single CRJ-200 sub-type `[VERIFY — VAMSYS]`; confirm the exact weight variant (ER vs LR) against the FAA TCDS A21EA or the VAMSYS mirror before use in performance planning 🟧 `[VERIFY]`.

## 6. Performance

- Service ceiling **41,000 ft**; normal cruise ~424 kt TAS at M0.74; high-speed cruise M0.81 (~465 kt) 🟩.
- Average fuel flow — no public reference surveyed and **no K Global reference OFP** yet on file 🟧 `[VERIFY]` — dispatch figures are public-Bombardier/SKYbrary/Wikipedia-derived only (watch-item).
- **Cost index:** set per OM E / route economics; no CRJ2 reference OFP CI yet 🟧 `[VERIFY]`.
- **Field length:** takeoff LR 1,920 m / ER 1,770 m (SL, ISA, MTOW); landing ~1,480 m (SL, MLW) 🟩 (Wikipedia); SKYbrary's separate "indicative performance" table cites a shorter ~1,527 m takeoff / ~1,423 m landing figure at a different weight/assumption set 🟧 `[VERIFY]` — treat as source-variant, confirm before use.
- **Wing / high-lift note 🟥 — MANDATORY:** the CRJ-200 retains the **original CRJ wing design with NO leading-edge slats or other leading-edge high-lift devices** — a genuine **"hard wing."** This is the defining handling difference from the CRJ700/900 (which were redesigned with leading-edge slats — see the CRJ7/CRJ9 packs). The practical consequences: **higher approach speeds and AOA margins are flown throughout** (no slat-extended low-speed lift augmentation), **greater sensitivity to airframe icing and ground contamination** (a hard, unslatted leading edge is less tolerant of ice/frost/contamination-induced boundary-layer disruption than a slatted wing), and a correspondingly **stricter ground de-ice holdover and in-flight anti-ice discipline**. Treat this as a hard operational discipline item, not a cosmetic distinction — see QRH Ch 0/Ch 7/Ch 9 and Dispatch §4 for what this drives operationally.
- **Hot-and-high:** not yet assessed by K Global; the matrix's secondary table does not carry a hot-and-high column for this type. The hard wing's higher approach-speed/AOA-margin profile (above) makes hot-and-high and short/contaminated-field combinations a **watch item** even before a formal assessment — flag 🟧 pending assessment.

## 7. Validation summary

| Domain | Flag | Note |
|---|---|---|
| Hot-and-high / field performance | 🟧 | Not assessed; no matrix column for this type — treat as unconfirmed; hard wing raises the stakes of any future assessment |
| Range vs network City/Regional sectors | 🟩 | ~1,650–1,700 NM (LR) comfortably covers the City/Regional short-haul set; ER sub-variant (~1,305–1,345 NM) still adequate for shorter sectors |
| ETOPS/EDTO adequacy | 🟧 | Regional short-haul type; not typically EDTO-planned; matrix marks EDTO applicability indicative only |
| Wing / icing note | 🟥 | **Genuine hard wing** — no leading-edge slats; higher approach speeds, tighter ice/contamination discipline than the slatted CRJ700/900. This is the single most important handling distinction in this pack — do not brief this type using CRJ700/900 slatted-wing assumptions. |
| Stand / gate compatibility | 🟩 | Code letter B — smaller footprint than the CRJ700/900 (Code C) |
| Modelling fidelity (sim vs real) | 🟧 | Approved X-Plane model not yet confirmed — see Sim-Model |

## 8. Related pack files

**Built:** [Dispatch](dispatch.md) · [Sim-Model](sim-model.md) · [Checklist](checklist.md) · [QRH](qrh.md) · [Livery](livery.md) · [Pack index](index.md)
Same-family, **separately rated** sibling group: [CRJ7 pack](../crj7/index.md) · [CRJ9 pack](../crj9/index.md) · Fleet Index → [overview](../index.md) · [Capability values (secondary/indicative table)](../capability-matrix.md)

---

## Sources & References
*Public URLs only. Private/OEM/add-on documents may inform content but must never be listed here.*

- MHI RJ Aviation Group (CRJ program, successor to Bombardier) — https://www.mhi.com/business/products-services/aviation/aircraft-aftermarket-service/crj
- SKYbrary — Bombardier Regional Jet CRJ-200 (CRJ2) — https://skybrary.aero/aircraft/crj2
- Wikipedia — Bombardier CRJ100/200 — https://en.wikipedia.org/wiki/Bombardier_CRJ100/200
- Wikipedia — General Electric CF34 — https://en.wikipedia.org/wiki/General_Electric_CF34
- EASA — Type Certificate Data Sheet EASA.IM.A.673, CL-600 Regional Jet Series — https://www.easa.europa.eu/en/document-library/type-certificates/aircraft-cs-25-cs-22-cs-23-cs-vla-cs-lsa/easaima673-cl-600

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-25 | Initial draft — built from public MHIRJ/SKYbrary/Wikipedia/EASA TCDS data; documented as a **separate type rating** from the CRJ700/900 (not a common-rating pairing); hard-wing/no-slat handling premise flagged 🟥 as the pack's defining discipline item; capability values cross-linked to the Fleet Capability Matrix's secondary/indicative table (not yet researched to mainline standard); candidate sim model (JRollon CRJ-200, XP11) a management decision `[VERIFY]`. |
