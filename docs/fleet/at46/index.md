# AT46 — ATR 42-600 · Pack Index

> **ICAO type designator:** AT46 · **Type cert:** EASA TCDS A.084 (ATR42/ATR72, held by ATR) · **Engines:** 2 × Pratt & Whitney Canada PW127M/PW127XT-M `[VERIFY — VAMSYS]` · **TURBOPROP** 🟥
> **Status:** 🟧 Pack complete (Draft) — all six files drafted (v0.1) from public ATR/EASA TCDS/SKYbrary/AeroCorner/Wikipedia data; capability values not yet researched to mainline standard (Fleet Capability Matrix secondary/indicative table only, all 🟧); **no candidate sim model exists for this type at all** 🟥 (harder gap than the AT76's -500-vs--600 sub-variant mismatch — see Sim-Model for the three undecided options).

## Variants operated

| VAMSYS name | Class | Seats | Cargo (kg) |
|---|---|---|---|
| ATR 42-600 | `[VERIFY — VAMSYS]` | `[VERIFY — VAMSYS]` | `[VERIFY — VAMSYS]` |

Config `[VERIFY — VAMSYS]`; Regional network `[VERIFY — VAMSYS]` (per-type tail count not yet broken out from the two-type ATR aggregate of 5 tails — see the [Fleet overview](../index.md)). Weights: MTOW ~18,600 kg 🟩 (public reference) / OEW, MZFW, MLW not found in surveyed public sources 🟧 `[VERIFY]`; max fuel ~3,600 kg 🟧 `[VERIFY]`. Typical seating 40–50 (commonly 48). Shares the **ATR-600 common type rating with the AT76** (ATR 72-600) — see [AT76](../at76/index.md). Capability values (EDTO, RVSM, PBN, LVO, steep, RECAT, RFF): see the Fleet Capability Matrix's **secondary/indicative table** — [Fleet Capability Matrix](../capability-matrix.md) (this type is not yet researched to mainline standard; every cell 🟧).

**Turboprop flag 🟥:** this is a **turbine-propeller** aircraft, not a jet — power management (torque/ITT/Np/Ng), condition levers, autofeather, propeller/airframe ice protection, ground beta/reverse deceleration, and a hard **FL250** service ceiling all distinguish it from every other type in this OM B tree, and are architecturally identical to the AT76's under the shared ATR-600 type rating. See Intro §6 and the Checklist/QRH for the full turboprop-specific handling set.

**Sim-model gap 🟥:** unlike every other pack in this OM B tree, **no dedicated ATR 42 product of any sub-variant was identified in the public X-Plane 11/12 market** — see [AT46 Sim-Model](sim-model.md) for the gap analysis and the three undecided options (await market, cross-family substitution from the AT76's ATR 72-500 candidate, or leave sim-unsupported pending decision). This pack's Checklist/QRH remain valid ground-school/procedural references regardless of the gap.

## Pack files

- [AT46 — Intro](intro.md) — v0.1 Draft ✅ built
- [AT46 — Dispatch](dispatch.md) — v0.1 Draft ✅ built
- [AT46 — Sim-Model](sim-model.md) — v0.1 Draft ✅ built
- [AT46 — Checklist](checklist.md) — v0.1 Draft ✅ built
- [AT46 — QRH](qrh.md) — v0.1 Draft ✅ built
- [AT46 — Livery](livery.md) — v0.1 Draft ✅ built

Common-rated sibling: [AT76 pack](../at76/index.md) · Fleet Index → [overview](../index.md) · [Capability values](../capability-matrix.md)

---

## Sources & References
*Public URLs only. Private/OEM/add-on documents may inform content but must never be listed here.*

- SKYbrary — ATR ATR-42-600 (AT46) — https://skybrary.aero/aircraft/at46
- EASA — Type Certificate Data Sheet A.084 (ATR42/ATR72) — https://www.easa.europa.eu/en/document-library/type-certificates
- ATR Aircraft — ATR 42-600 factsheet — https://www.atr-aircraft.com/wp-content/uploads/2020/07/Factsheets_-_ATR_42-600.pdf
- ATR Aircraft — PW127XT engine — https://www.atr-aircraft.com/innovation/pw127xt-engine/
- P&WC / Forecast International — PW127XT-L ready for the ATR 42-600S — https://flightplan.forecastinternational.com/2023/10/11/pwcs-pw127xt-l-engine-is-ready-for-the-atr-42-600s/
- AeroCorner — ATR 42-600 — https://aerocorner.com/aircraft/atr-42-600/
- Wikipedia — ATR 42 — https://en.wikipedia.org/wiki/ATR_42

## Change Log

| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-25 | Built all six files (Intro / Dispatch / Sim-Model / Checklist / QRH / Livery) from public ATR/EASA TCDS/SKYbrary/AeroCorner/Wikipedia data; turboprop-specific content flagged prominently throughout (power management, autofeather, prop/airframe ice protection, ground beta/reverse, FL250 ceiling), mirroring the AT76 pack's structure given the shared ATR-600 type rating; total absence of any candidate X-Plane sim model identified as this pack's fidelity gap 🟥 (harder than the AT76's sub-variant mismatch), with three undecided options laid out in Sim-Model; capability values cross-linked to the Fleet Capability Matrix's secondary/indicative table; registration count left honestly unseeded pending VAMSYS type-level breakout; livery blocked upstream by the sim-model gap; cross-referenced AT76 as the common-rated ATR-600 sibling. |
