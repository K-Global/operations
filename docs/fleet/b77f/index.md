# B77F — Boeing 777F · Pack Index

> **ICAO type designator:** B77F · **Engines:** 2 × GE GE90-110B1 (twin) · **ICAO code letter:** E
> **Status:** 🟩 Pack complete (Draft) — all six files built (v0.1): Intro, Dispatch, Sim-Model, Checklist, QRH, Livery, from public Boeing/SKYbrary/FlightFactor data + VAMSYS mirror + Fleet Capability Matrix. Approved sim model (FlightFactor 777 / 777F variant candidate) a management decision still open `[VERIFY]` — see Sim-Model for the added open question of whether the 777F variant exists on the XP11-generation product at all. **EDTO operator rule time still open** 🟧 (see below).

## Variants operated

| VAMSYS name | Class | Business unit | Tails | Seats | Cargo (kg) |
|---|---|---|--:|---|---|
| Boeing 777F | Freighter (main-deck) | 9 Cargo | 35 | — | 102,000 |

Config `[VAMSYS mirror 2026-07-25]`; **35 tails**. One designator, single variant — **main-deck cargo, no passengers**. Weights: MTOW ~347,800 / MLW ~260,800 / MZFW ~248,600 kg. Shares the **777 type rating** and much of the ground/dispatch handling with the passenger [B77W](../b77w/index.md) — kept consistent and cross-referenced — but differs in the **main-deck freighter loading discipline** (side cargo door; active main-deck CG management — Dispatch §4). Capability values (RVSM, PBN, LVO, RECAT, RFF Cat 9): see [Fleet Capability Matrix](../capability-matrix.md).

**EDTO note:** twin — type certified up to **330 min** (GE90) 🟩, but the **operator rule time is NOT yet set for the freighter** (excluded from OpsSpec batch 1; matrix cell 🟧 [operator — VERIFY]). This pack **leaves it 🟧 pending OpsSpec** rather than inheriting the passenger B77W's 180-min value — do not plan EDTO-rule-dependent sectors on an assumed value (Dispatch §5).

## Pack files

- [B77F — Intro](intro.md) — v0.1/v0.2 Draft ✅ built
- [B77F — Dispatch](dispatch.md) — v0.1 Draft ✅ built
- [B77F — Sim-Model](sim-model.md) — v0.1 Draft ✅ built
- [B77F — Checklist](checklist.md) — v0.1 Draft ✅ built
- [B77F — QRH](qrh.md) — v0.1 Draft ✅ built
- [B77F — Livery](livery.md) — v0.1 Draft ✅ built

Passenger sibling: [B77W](../b77w/index.md) · Fleet Index → [overview](../index.md) · [Capability values](../capability-matrix.md)

---

## Sources & References
*Public URLs only. Private/OEM/add-on documents may inform content but must never be listed here.*

- Boeing — 777 Freighter product page — https://www.boeing.com/commercial/777
- SKYbrary — Boeing 777 Freighter (B77L / 777F) — https://skybrary.aero/aircraft/b77l

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | — | Mirror stub (variant/config/cargo) |
| v0.2 | 2026-07-25 | Converted stub to pack index; built Intro + Dispatch (dispatch-critical core) from public Boeing/SKYbrary data + VAMSYS mirror; freighter (main-deck cargo, no pax) + main-deck loading/CG discipline captured; shares 777 type with B77W (cross-referenced); **EDTO rule time left 🟧 pending OpsSpec** (freighter excluded from batch 1, not inherited from B77W); capability values cross-linked to the Fleet Capability Matrix. Sim-Model / Checklist / QRH / Livery deferred to follow-up. |
| v0.3 | 2026-07-25 | **Completed pack** — Sim-Model, Checklist, QRH, Livery built by cloning the B77W (777-type sibling) pattern, informed by re-expressed public 777/777F systems and cargo-fire-class knowledge (no OEM/add-on manual text, no airline names). Sim-Model flags a new open item beyond B77W's: whether the FlightFactor 777F/freighter variant exists at all on the XP11-generation product (vs. a newer XP12-only line) — 🟥 `[VERIFY]`. Checklist/QRH restate the shared 777 flight-deck flow with freighter substitutions (loadsheet/main-deck door/no-cabin items; main-deck Class E cargo-fire handling with no in-flight extinguishing discharge, added to memory items 🟥; two-pilot flight-deck evacuation, no passenger-cabin evacuation). Livery seeded to 35 tails, EDDF, D-AK, cargo house scheme 🟧 pending, regs/MSN `[VERIFY — VAMSYS]`. Main-deck loading/CG discipline and open EDTO rule time (🟧 pending OpsSpec) restated throughout. All six pack files now built; Intro §8 updated, no dead links. |
