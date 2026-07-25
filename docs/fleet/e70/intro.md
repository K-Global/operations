<!--
================================================================================
  K Global — AIRFRAME PACK · INTRO  ·  E70 Embraer E170
  Curated layer. Anonymous · version-controlled · public sources only.
  FLAG LEGEND  🟥 hard requirement/hazard   🟧 caution/unverified   🟩 normal/confirmed
================================================================================
-->

# E70 — Embraer E170 · Intro

**E70 / E-Jet family — common type rating E170/E175** · Regional narrowbody twin, the smaller member of K Global's E-Jet regional pair
**Version** v0.1 · **Updated** 2026-07-25 · **Status** Draft

> **Read-me:** Type reference for X-Plane 11, not a substitute for the aircraft's own documentation. Figures carry provenance tags; verify `[VERIFY]` items before use. Capability values (EDTO, RVSM, PBN, LVO, RECAT, RFF) are not restated here — see the Fleet Capability Matrix (secondary/indicative table for this type). Flag legend 🟥 hard · 🟧 caution · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| ICAO type designator | **E70** |
| Family / type rating | Embraer E-Jet (first generation) — **E170 and E175 (`E70`/`E75`) share one flight-crew type rating**, distinct from the separate E190/E195 rating; Honeywell Primus Epic avionics enables the common-rating design 🟩 |
| Variants operated | Embraer 170 (single sub-type) `[VERIFY — VAMSYS]` |
| Engines (modelled) | **2 × GE CF34-8E**, ~14,500 lbf (64 kN) thrust each 🟩 |
| ICAO code letter | **C** — wingspan ~26.01 m, Code C stands/gates 🟩 |
| Config (K Global) | ~72–78 seats + belly cargo `[VERIFY — VAMSYS]` |
| MTOW / MLW / MZFW / OEW | ~37,200 / ~32,900 / ~30,900 / ~21,000 kg 🟧 `[VERIFY]` |
| Max fuel | ~9,850 kg (~12,675 L) 🟧 `[VERIFY]` |
| Service ceiling | ~FL410 🟧 `[VERIFY]` |
| Typical cruise | M0.78 (max M0.82) 🟧 `[VERIFY]` |
| Range (rep. payload) | ~2,100 NM 🟧 `[VERIFY]` |
| ETOPS/EDTO | Twin; no K Global rule time asserted — regional/short-haul sectors, see Dispatch §5 & matrix |
| RECAT-EU / wake / RFF | See [Fleet Capability Matrix](../capability-matrix.md) (secondary/indicative table) — RECAT-EU **D–E** 🟧 / ICAO **M** 🟧; **RFF Cat 6** (length ~29.90 m) 🟧 |

## 2. Modelling & profile mapping 🟥

The three-way mapping — **no external source records this; it is a K Global decision:**

> **Real type:** E170 (Embraer 170, CF34-8E) → **SimBrief profile:** E170 → **Sim model:** not yet decided (X-Plane 11) 🟧 `[VERIFY]`

No approved X-Plane 11 flight model has yet been designated for the E170 — this is an open management decision, the same posture the mainline packs carry for their sim-model choice before Sim-Model is built. The dispatch profile (SimBrief E170) should model the correct airframe/engine family and drive the OFP burn once flown. Any fuel-burn comparison between a future OFP and the flown model must be validated in Sim-Model before this pack is Verified. Cross-ref Dispatch §2 (SimBrief setup) and the Sim-Model file (to build).

## 3. Role in the network

Smaller member of K Global's first-generation E-Jet pair, flown in the **Regional** unit on thin/short-haul sectors below the density and range of the mainline narrowbody fleet (A319/A320/A21N). Shares the **E170/E175 common type rating** with the E75 (Embraer 175), giving crew-scheduling flexibility across both regional types — a real-world Embraer design feature (Honeywell Primus Epic EFIS common cockpit), not a K Global-specific arrangement. Sits below the E75 in seats/range within the same type-rating pair; distinct from the separate E190/E195 rating and from the older ERJ-145 type rating. Register/unit split not yet broken out from the combined Embraer-group total (~30 tails across E190/E195/E70/E75/E145/E35L) `[VERIFY — VAMSYS]` — see [Fleet Index](../index.md).

## 4. Dimensions & ground footprint

- Length **~29.90 m** (98 ft 1 in); wingspan **~26.01 m** (84 ft 4 in); height/width per E-Jet common cross-section **2.00 m × 2.74 m** 🟧 `[VERIFY]`
- **ICAO Code C** — standard regional-jet stand/gate footprint; no wingspan-restricted taxiway concerns. 🟩
- **RFF Cat 6** (length ~29.90 m → 28–<39 m band, indicative) — see [Fleet Capability Matrix](../capability-matrix.md) secondary table; confirm Cat 6 cover at all scheduled fields. 🟧
- Single-aisle, four-abreast (2+2) cabin; twin main-deck doors plus overwing exits; single lower-deck belly hold. GPU/air-start and de-ice footprint per narrowbody-regional standard.

## 5. Weights

| | kg |
|---|---|
| OEW | ~21,000 🟧 `[VERIFY]` |
| MZFW | ~30,900 🟧 `[VERIFY]` |
| MTOW | ~37,200 🟧 `[VERIFY]` |
| MLW | ~32,900 🟧 `[VERIFY]` |
| Max fuel | ~9,850 (~12,675 L) 🟧 `[VERIFY]` |

Multiple E170 weight variants exist across the type certificate (STD, LR, SU, SE — differing MTOW/range) — confirm which sub-variant the VAMSYS mirror carries before use in performance planning 🟧 `[VERIFY — VAMSYS weight variant]`.

## 6. Performance

- Service ceiling **~FL410**; typical cruise **M0.78** (max **M0.82**) 🟧 `[VERIFY]`.
- No K Global reference OFP yet on file — burn/CI figures are public-Embraer-derived, not OFP-verified 🟧.
- **Cost index:** set per OM E / route economics; no E70 reference OFP CI yet 🟧 `[VERIFY]`.
- **Hot-and-high:** not yet assessed against the E-Jet's CF34-8E thrust margin at K Global's high-elevation hubs; treat as 🟧 open until researched to mainline standard (matrix secondary table is indicative only).

## 7. Steep approach — not certified 🟥

The **standard E170 (first-generation E-Jet) is not steep-approach certified.** The steep-capable Embraer variant is the **E190-E2/E195-E2** (second generation) — a different airframe from the E70/E75 pair K Global operates. This ties directly to the OM E steep-approach deferral: K Global's planned London City/steep-field solution is expected to draw on the **E190/E195** family (a different type-rating pair from this one), not the E70/E75. See `../../../OM E Operations/Steep Approach Operations.md`.

## 8. Validation summary

| Domain | Flag | Note |
|---|---|---|
| Hot-and-high / field performance | 🟧 | Not yet researched to mainline standard; matrix secondary table indicative only |
| Range vs network regional sectors | 🟩 | ~2,100 NM structural comfortably covers short-haul regional sector lengths |
| ETOPS/EDTO adequacy | 🟩 | Twin; regional stage lengths keep flights inside standard (non-EDTO) planning — no rule time asserted, see Dispatch §5 |
| Steep approach | 🟥 | Standard E170 not steep-certified (E190-E2/E195-E2 differs); no candidate for the OM E steep deferral |
| Stand / gate compatibility | 🟩 | Code letter C / RFF Cat 6 (indicative) — standard regional-jet footprint |
| Modelling fidelity (sim vs real) | 🟧 | X-Crafts E-Jets Family (E170 unit) now designated as candidate — see Sim-Model; formal test-and-approve pass still open |

## 9. Related pack files

**Built:** [Dispatch](dispatch.md) · [Sim-Model](sim-model.md) · [Checklist](checklist.md) · [QRH](qrh.md) · [Livery](livery.md) · [Pack index](index.md)
Fleet Index → [overview](../index.md) · [Capability values](../capability-matrix.md)

---

## Sources & References
*Public URLs only. Private/OEM/add-on documents may inform content but must never be listed here.*

- Embraer — Commercial aviation, E-Jets — https://www.embraer.com
- EASA — Type-Certificate Data Sheet EASA.IM.A.001, Embraer ERJ 170 (covers ERJ 170-100/E170 and ERJ 170-200/E175) — https://www.easa.europa.eu/en/document-library/type-certificates/aircraft-cs-25-cs-22-cs-23-cs-vla-cs-lsa/easaima001-erj-170
- Wikipedia — Embraer E-Jet family — https://en.wikipedia.org/wiki/Embraer_E-Jet_family
- Wikipedia — General Electric CF34 — https://en.wikipedia.org/wiki/General_Electric_CF34
- SKYbrary — Aircraft type reference — https://skybrary.aero/

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.2 | 2026-07-25 | Pack completed — Sim-Model (X-Crafts E-Jets Family E170 unit designated, 🟧 approval pending), Checklist (EICAS normal flow), QRH (chaptered EICAS abnormal/emergency reference, memory items 🟥) and Livery (EDDF base, D-AK scheme, register seeded `[VERIFY — VAMSYS]`) built; §9 links updated, no dead links; §8 modelling-fidelity row updated to reflect the designated candidate. |
| v0.1 | 2026-07-25 | Initial draft — built from public Embraer/EASA/Wikipedia data cloning the A320 Intro pattern; capability values cross-linked to the Fleet Capability Matrix (secondary/indicative table); common E170/E175 type-rating note added; steep-approach non-certification flagged and tied to the OM E steep deferral; approved sim model undecided `[VERIFY]`. Sim-Model, Checklist, QRH and Livery left to build. |
