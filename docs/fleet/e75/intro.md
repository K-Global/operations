<!--
================================================================================
  K Global — AIRFRAME PACK · INTRO  ·  E75 Embraer E175
  Curated layer. Anonymous · version-controlled · public sources only.
  FLAG LEGEND  🟥 hard requirement/hazard   🟧 caution/unverified   🟩 normal/confirmed
================================================================================
-->

# E75 — Embraer E175 · Intro

**E75 / E-Jet family — common type rating E170/E175** · Regional narrowbody twin, the stretched member of K Global's E-Jet regional pair
**Version** v0.1 · **Updated** 2026-07-25 · **Status** Draft

> **Read-me:** Type reference for X-Plane 11, not a substitute for the aircraft's own documentation. Figures carry provenance tags; verify `[VERIFY]` items before use. Capability values (EDTO, RVSM, PBN, LVO, RECAT, RFF) are not restated here — see the Fleet Capability Matrix (secondary/indicative table for this type). Flag legend 🟥 hard · 🟧 caution · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| ICAO type designator | **E75** |
| Family / type rating | Embraer E-Jet (first generation) — **E175 and E170 (`E75`/`E70`) share one flight-crew type rating**, distinct from the separate E190/E195 rating; Honeywell Primus Epic avionics enables the common-rating design 🟩 |
| Variants operated | Embraer 175 (single sub-type) `[VERIFY — VAMSYS]` |
| Engines (modelled) | **2 × GE CF34-8E**, ~14,500 lbf (64 kN) thrust each 🟩 |
| ICAO code letter | **C** — wingspan ~26.01 m (STD) / ~28.65 m (LR winglet option), Code C stands/gates 🟩 |
| Config (K Global) | ~76–88 seats + belly cargo `[VERIFY — VAMSYS]` |
| MTOW / MLW / MZFW / OEW | ~38,800 / ~34,000 / ~33,300 / ~21,700 kg 🟧 `[VERIFY]` |
| Max fuel | ~9,850 kg (~12,675 L) 🟧 `[VERIFY]` |
| Service ceiling | ~FL410 🟧 `[VERIFY]` |
| Typical cruise | M0.78 (max M0.82) 🟧 `[VERIFY]` |
| Range (rep. payload) | ~2,000 NM 🟧 `[VERIFY]` |
| ETOPS/EDTO | Twin; no K Global rule time asserted — regional/city sectors, see Dispatch §5 & matrix |
| RECAT-EU / wake / RFF | See [Fleet Capability Matrix](../capability-matrix.md) (secondary/indicative table) — RECAT-EU **D–E** 🟧 / ICAO **M** 🟧; **RFF Cat 6** (length ~31.67 m) 🟧 |

## 2. Modelling & profile mapping 🟥

The three-way mapping — **no external source records this; it is a K Global decision:**

> **Real type:** E175 (Embraer 175, CF34-8E) → **SimBrief profile:** E175 → **Sim model:** not yet decided (X-Plane 11) 🟧 `[VERIFY]`

No approved X-Plane 11 flight model has yet been designated for the E175 — this is an open management decision, the same posture the mainline packs carry for their sim-model choice before Sim-Model is built. The dispatch profile (SimBrief E175) should model the correct airframe/engine family and drive the OFP burn once flown. Any fuel-burn comparison between a future OFP and the flown model must be validated in Sim-Model before this pack is Verified. Cross-ref Dispatch §2 (SimBrief setup) and the Sim-Model file (to build).

## 3. Role in the network

Stretched member of K Global's first-generation E-Jet pair (E175 is the E170 fuselage lengthened ~1.78 m), flown across the **City** and **Regional** units on short/thin sectors — the larger-capacity partner to the E70 within the same type-rating pair. Shares the **E170/E175 common type rating** with the E70, giving crew-scheduling flexibility across both regional types — a real-world Embraer design feature (Honeywell Primus Epic EFIS common cockpit), not a K Global-specific arrangement. Distinct from the separate E190/E195 rating and from the older ERJ-145 type rating. Register/unit split not yet broken out from the combined Embraer-group total (~30 tails across E190/E195/E70/E75/E145/E35L) `[VERIFY — VAMSYS]` — see [Fleet Index](../index.md).

## 4. Dimensions & ground footprint

- Length **~31.67 m** (103 ft 11 in); wingspan **~26.01 m** STD (~28.65 m with the E175-specific angled-winglet LR option); height/width per E-Jet common cross-section **2.00 m × 2.74 m** 🟧 `[VERIFY]`
- **ICAO Code C** — standard regional-jet stand/gate footprint; no wingspan-restricted taxiway concerns. 🟩
- **RFF Cat 6** (length ~31.67 m → 28–<39 m band, indicative) — see [Fleet Capability Matrix](../capability-matrix.md) secondary table; confirm Cat 6 cover at all scheduled fields. 🟧
- Single-aisle, four-abreast (2+2) cabin; twin main-deck doors plus overwing exits; single lower-deck belly hold. GPU/air-start and de-ice footprint per narrowbody-regional standard.

## 5. Weights

| | kg |
|---|---|
| OEW | ~21,700 🟧 `[VERIFY]` |
| MZFW | ~33,300 🟧 `[VERIFY]` |
| MTOW | ~38,800 🟧 `[VERIFY]` |
| MLW | ~34,000 🟧 `[VERIFY]` |
| Max fuel | ~9,850 (~12,675 L) 🟧 `[VERIFY]` |

Multiple E175 weight variants exist across the type certificate (STD, LR, SU, SC/LL — differing MTOW/max ramp weight/range) — confirm which sub-variant the VAMSYS mirror carries before use in performance planning 🟧 `[VERIFY — VAMSYS weight variant]`.

## 6. Performance

- Service ceiling **~FL410**; typical cruise **M0.78** (max **M0.82**) 🟧 `[VERIFY]`.
- No K Global reference OFP yet on file — burn/CI figures are public-Embraer-derived, not OFP-verified 🟧.
- **Cost index:** set per OM E / route economics; no E75 reference OFP CI yet 🟧 `[VERIFY]`.
- **Hot-and-high:** not yet assessed against the E-Jet's CF34-8E thrust margin at K Global's high-elevation hubs; treat as 🟧 open until researched to mainline standard (matrix secondary table is indicative only).

## 7. Steep approach — not certified 🟥

The **standard E175 (first-generation E-Jet) is not steep-approach certified.** The steep-capable Embraer variant is the **E190-E2/E195-E2** (second generation) — a different airframe from the E70/E75 pair K Global operates. This ties directly to the OM E steep-approach deferral: K Global's planned London City/steep-field solution is expected to draw on the **E190/E195** family (a different type-rating pair from this one), not the E70/E75.

**Note:** the newer **E175-E2** (not built by K Global) differs from this airframe in several respects, including a redesigned wing and engine; do not conflate its capability with the standard first-generation E175 documented here. See `../../../OM E Operations/Steep Approach Operations.md`.

## 8. Validation summary

| Domain | Flag | Note |
|---|---|---|
| Hot-and-high / field performance | 🟧 | Not yet researched to mainline standard; matrix secondary table indicative only |
| Range vs network regional/city sectors | 🟩 | ~2,000 NM structural comfortably covers short-haul regional/city sector lengths |
| ETOPS/EDTO adequacy | 🟩 | Twin; regional/city stage lengths keep flights inside standard (non-EDTO) planning — no rule time asserted, see Dispatch §5 |
| Steep approach | 🟥 | Standard E175 not steep-certified (E190-E2/E195-E2 differs, E175-E2 also not the K Global build); no candidate for the OM E steep deferral |
| Stand / gate compatibility | 🟩 | Code letter C / RFF Cat 6 (indicative) — standard regional-jet footprint |
| Modelling fidelity (sim vs real) | 🟧 | X-Crafts E-Jets Family (E175 unit) now designated as candidate — see Sim-Model; formal test-and-approve pass still open |

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
| v0.2 | 2026-07-25 | Pack completed — Sim-Model (X-Crafts E-Jets Family E175 unit designated, 🟧 approval pending; winglet-configuration caution noted), Checklist (EICAS normal flow), QRH (chaptered EICAS abnormal/emergency reference, memory items 🟥) and Livery (EDDF base, D-AK scheme, register seeded `[VERIFY — VAMSYS]`) built; §9 links updated, no dead links; §8 modelling-fidelity row updated to reflect the designated candidate. |
| v0.1 | 2026-07-25 | Initial draft — built from public Embraer/EASA/Wikipedia data cloning the A320 Intro pattern; capability values cross-linked to the Fleet Capability Matrix (secondary/indicative table); common E170/E175 type-rating note added; steep-approach non-certification flagged (including the E175-E2 distinction) and tied to the OM E steep deferral; approved sim model undecided `[VERIFY]`. Sim-Model, Checklist, QRH and Livery left to build. |
