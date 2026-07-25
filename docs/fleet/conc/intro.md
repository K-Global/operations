<!--
================================================================================
  K Global — AIRFRAME PACK · INTRO  ·  CONC Concorde (supersonic transport)
  Curated layer. Anonymous · version-controlled · public sources only.
  FLAG LEGEND  🟥 hard requirement/hazard   🟧 caution/unverified   🟩 normal/confirmed
================================================================================
-->

# CONC — Concorde · Intro

**CONC / Concorde — its own unique type rating** · Four-engine slender-ogival-delta **supersonic transport (SST)**; the fleet's heritage showcase, operated as a single Premier unit
**Version** v0.1 · **Updated** 2026-07-25 · **Status** Draft

> **Read-me:** Type reference for X-Plane 11, not a substitute for the aircraft's own documentation. Concorde is **unlike every other type in the fleet** — supersonic, three-crew, no flaps/slats, reheat, droop nose, CG-by-fuel-transfer — and the pack is heavily flagged where public data substitutes for type documentation. Figures carry provenance tags; verify `[VERIFY]` items before use. Capability values are held in the Fleet Capability Matrix **secondary/indicative table** (🟧 throughout — see [Fleet Capability Matrix](../capability-matrix.md)). Flag legend 🟥 hard · 🟧 caution · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| ICAO type designator | **CONC** |
| Family / type rating | **Its own unique type** — no shared rating with any other fleet aircraft 🟩 |
| Variants operated | Concorde (production supersonic transport) `[VAMSYS mirror 2026-07-25]` |
| Engines (modelled) | **Four × Rolls-Royce / Snecma Olympus 593 Mk 610** afterburning turbojets — **reheat (afterburner)** fitted 🟥 |
| Crew | **Three-crew flight deck: Captain + First Officer + Flight Engineer** 🟥 — *unusual vs the two-crew glass fleet; the Flight Engineer works a dedicated systems/fuel panel* |
| ICAO code letter | **C** 🟧 — wingspan ~25.6 m sits in the Code C band (24–<36 m); length ~61.7 m is long for a Code C frame — confirm stand/taxiway handling per field `[VERIFY]` |
| Config (K Global) | ~**100 pax** (Premier unit) `[VAMSYS mirror 2026-07-25]` 🟧 `[VERIFY]` |
| MTOW / MLW / MZFW / OEW | ~185,070 / ~111,130 / ~92,080 / ~78,700 kg 🟧 `[VERIFY]` |
| Max fuel | ~95,680 kg (~119,300 L) 🟧 `[VERIFY]` |
| Service ceiling | **~FL600** (~60,000 ft) 🟥 |
| Typical cruise | **Mach 2.04** (~1,176 kt TAS) at FL500–600 🟥 |
| Range (rep. payload) | ~3,900 NM (~7,250 km) 🟧 `[VERIFY]` |
| ETOPS/EDTO | **Four-engine heritage type — no modern twin ETOPS/EDTO regime applies**; supersonic ops out of scope for the mainline matrix — see Dispatch |
| RFF category required | Indicative **~Cat 9** (length ~61.7 m, ICAO 61–<76 m band) 🟧 `[VERIFY]` |

## 2. Modelling & profile mapping 🟥

The three-way mapping — **no external source records this; it is a K Global decision:**

> **Real type:** CONC (Concorde, 4 × Olympus 593 Mk 610 with reheat) → **SimBrief profile:** Concorde / CONC supersonic profile (if available; may require a custom/community airframe) 🟧 `[VERIFY]` → **Sim model:** X-Plane 11 Concorde add-on — **candidate: Colimata Concorde FXP (XP11 build)** 🟧 `[VERIFY]`

Concorde is a **special case for OFP planning**: mainstream dispatch profiles are built around subsonic jet-transport cruise, and a supersonic Mach-2 / FL600 profile with reheat and a transonic CG-transfer schedule is **not** a standard SimBrief airframe — the profile selection, cruise schedule and reheat/supersonic burn must be validated (or a bespoke profile built) before this pack is Verified 🟧. The approved X-Plane 11 flight model is a management decision; the lead candidate is **Colimata Concorde FXP**, but note its current **v3 is X-Plane 12-only** — the XP11-compatible build is an earlier version (Sim-Model §1). Cross-ref Dispatch §2 (SimBrief setup) and the Sim-Model file.

## 3. Role in the network
Concorde is the fleet's **supersonic heritage showcase**, operated as a **single Premier unit** with 10 tails `[VAMSYS mirror 2026-07-25]`. It is not a workhorse: it is a prestige/flagship frame reserved for signature Premier services — high-yield, low-density (~100 seats) point-to-point sectors within its ~3,900 NM range, typically transoceanic runs where supersonic cruise gives a genuine block-time advantage and where noise/routing rules permit supersonic segments (largely overwater). It sits entirely apart from the mainline widebody stack; its binding limits are **range (short for a "long-haul" frame), supersonic-corridor/overwater routing, and reheat fuel burn** rather than seat count.

## 4. Dimensions & ground footprint
- Length **~61.66 m** (202 ft 4 in); wingspan **~25.6 m** (83 ft 10 in); height **~12.2 m** (40 ft) 🟧 `[VERIFY]`
- **Heat-stretch note 🟧:** at Mach 2 cruise the airframe skin heats substantially (nose stagnation ~127 °C) and the fuselage **grows ~0.25 m (~10 in) in length** from thermal expansion, then shrinks back on cooldown — a genuine, type-defining structural behaviour, not a ground-footprint issue but recorded here as a signature fact.
- **ICAO Code C** 🟧 by wingspan (~25.6 m, Code C band 24–<36 m), but the **long, slender fuselage (~61.7 m)** is unusual for a Code C frame — confirm stand length, taxiway fillets and turn-pad radii per field `[VERIFY]`.
- **Slender ogival delta wing — no flaps, no slats, no leading-edge devices** 🟥. Low-speed lift comes from the delta's **leading-edge vortices** at high angle of attack, which is why the aircraft flies a distinctive **nose-high attitude** on approach and needs the droop nose for visibility (below).
- **Droop (variable-incidence) nose + retractable visor** 🟥 for forward visibility at the high approach/taxi pitch attitudes: nose **up/streamlined** with visor raised for supersonic and high-speed flight; **5° down** (visor down) for taxi, takeoff and subsonic flight; **12.5° down** for approach and landing. Cross-ref Checklist (droop-nose schedule).
- **RFF ~Cat 9** indicative 🟧 (length-derived) — confirm cover per field.
- Multi-wheel main gear on high-pressure tyres; tall, long-legged stance for the high-pitch rotation/landing attitude. Tyre condition and FOD are a real hazard for this type (QRH Ch 8).

## 5. Weights
| | kg |
|---|---|
| OEW | ~78,700 🟧 `[VERIFY]` |
| MZFW | ~92,080 🟧 `[VERIFY]` |
| MTOW | ~185,070 🟧 `[VERIFY]` |
| MLW | ~111,130 🟧 `[VERIFY]` |
| Max fuel | ~95,680 (~119,300 L) 🟧 `[VERIFY]` |

Note the **very high fuel fraction**: max fuel (~95.7 t) exceeds the operating empty weight (~78.7 t) — the type carries more fuel than airframe, a direct consequence of supersonic-cruise and reheat burn (Dispatch §3). K Global operates ~100 pax in a Premier configuration; exact weights/config pending VAMSYS confirmation 🟧 `[VERIFY — VAMSYS weight variant / config]`.

## 6. Performance
- **Cruise Mach 2.04** (~1,176 kt TAS) at **FL500–600**; service ceiling **~FL600** 🟥. The type **accelerates through the transonic region (M0.95→~M1.7) on reheat**, then sustains supersonic cruise **without reheat** above ~M1.7 — the only fleet type that routinely flies supersonic.
- **Transonic CG shift managed by fuel transfer** 🟥 (signature item — see §7 and Checklist): as the aircraft accelerates through the transonic region the wing's aerodynamic centre moves aft, so fuel is pumped **aft** into trim tanks to move the CG aft and keep the aircraft in trim without large control-surface drag; on deceleration fuel is pumped **forward** again. This is a continuous, actively-managed operation, not a set-and-forget trim.
- **Reheat takeoff** 🟥: all four reheats lit for takeoff to meet field length; noise-abatement procedures and reheat cancellation after the initial climb are part of the departure. Reheat and supersonic cruise make block fuel burn **very high** (Dispatch §3).
- **Range ~3,900 NM** (~7,250 km) 🟧 — short for a "long-haul" frame; a genuine planning limit.
- **Field length:** long — reheat is required to make existing runways at high takeoff weight; assess per field 🟧 `[VERIFY]`.
- **Supersonic-ops considerations 🟥:** skin/Mach-temperature limits (Tmo ~127 °C region), **ozone** management (catalytic converters in the air-conditioning), and **cosmic-radiation** monitoring at FL500–600 (a flight-deck radiation meter and a descent limit) — all unique to this type; captured in Dispatch and QRH.

## 7. Validation summary

| Domain | Flag | Note |
|---|---|---|
| **Transonic CG management by fuel transfer** | 🟥 | The type's signature handling item — fuel pumped aft/forward across the transonic region to track the aerodynamic-centre shift; mishandling is a real out-of-limits hazard (QRH Ch 6) |
| **Reheat / supersonic fuel burn** | 🟥 | Very high block burn; range ~3,900 NM is a binding planning limit (Dispatch §3) |
| **Three-crew flight deck (Flight Engineer panel)** | 🟥 | Systems/fuel/electrics worked by a dedicated Flight Engineer — a different crew concept from the two-crew glass fleet |
| Droop nose / no flaps-slats / delta vortex lift | 🟥 | Droop-nose schedule + high-AoA approach are type-defining; see Checklist |
| Supersonic-ops environment (ozone, cosmic radiation, skin temp) | 🟧 | Unique FL500–600 concerns; monitored, with descent limits |
| Sim-model fidelity (supersonic FM, reheat, CG transfer) | 🟧 | Colimata FXP candidate; **v3 is XP12-only, XP11 build is earlier** — see Sim-Model |
| ETOPS/EDTO / capability data | 🟧 | Heritage type; **secondary/indicative** matrix only — not researched to mainline standard |
| Range vs network sectors | 🟧 | ~3,900 NM — short; supersonic-corridor/overwater routing constrains where it flies (Dispatch §6) |

## 8. Related pack files
**Built:** [Intro](intro.md) · [Dispatch](dispatch.md) · [Sim-Model](sim-model.md) · [Checklist](checklist.md) · [QRH](qrh.md) · [Livery](livery.md) · [Pack index](index.md)
Fleet Index → [overview](../index.md) · [Capability values (secondary/indicative table)](../capability-matrix.md)

---

## Sources & References
*Public URLs only. Private/OEM/add-on documents may inform content but must never be listed here.*

- SKYbrary — Aérospatiale / BAC Concorde (CONC) — https://skybrary.aero/aircraft/conc
- Heritage Concorde — Olympus 593 Mk 610 engines / reheat — https://www.heritageconcorde.com/concorde-olympus-593-mk610-engines
- Heritage Concorde — technical library (droop nose, fuel/CG transfer, systems) — https://www.heritageconcorde.com/
- Wikipedia — Concorde — https://en.wikipedia.org/wiki/Concorde
- Wikipedia — Rolls-Royce/Snecma Olympus 593 — https://en.wikipedia.org/wiki/Rolls-Royce/Snecma_Olympus_593

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-25 | Initial draft — built from public SKYbrary/Heritage Concorde/Wikipedia data + VAMSYS mirror. Signature 🟥 items flagged: transonic CG-by-fuel-transfer, reheat/supersonic burn, three-crew (Flight Engineer) deck, droop nose / no flaps-slats. Cruise M2.04 / FL600 and reheat stated; supersonic-ops environment (ozone, cosmic radiation, skin-temp) recorded. Sim-model = Colimata Concorde FXP candidate (XP11 build; v3 is XP12-only) 🟧 `[VERIFY]`. Capability data cross-linked to the Fleet Capability Matrix secondary/indicative table (🟧). No airline names per governance. |
