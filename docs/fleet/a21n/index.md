# A21N — Airbus A321neo family · Pack Index

> **ICAO type designator:** A21N (covers A321neo, A321LR, A321XLR — all neo family) · **Type cert:** EASA.A.064 (A318/A319/A320/A321) · **Engines:** CFM LEAP-1A or Pratt & Whitney PW1100G
> **Status:** 🟩 Pack complete (Draft) — all six files drafted (v0.1) from public Airbus/EASA/SKYbrary data + VAMSYS mirror; approved sim model (ToLiss A321, base + NEO expansion) a management decision still open `[VERIFY]`.

## Variants operated

| VAMSYS name | Class | Business unit(s) | Tails | Seats | Cargo (kg) |
|---|---|---|--:|---|---|
| Airbus A321neo | Pax / Belly-cargo | 3 Regular · 7 Charter | 40 | 185 `[VAMSYS mirror 2026-07-25]` | 4000 `[VAMSYS mirror 2026-07-25]` |
| Airbus A321LR | Pax (Premier-Business) | 1 Premier | 18 | `[VERIFY]` | `[VERIFY]` |
| Airbus A321XLR | Pax (Premier-Business) | 1 Premier | 4 | `[VERIFY]` | `[VERIFY]` |

K Global operates **no classic A321ceo** — all three variants above share ICAO **A21N**; distinguished inside this pack. Reg block `D-AKT`. 62 tails total. Capability values (EDTO, RVSM, PBN, LVO, RECAT, RFF Cat 7): see [Fleet Capability Matrix](../capability-matrix.md).

## Pack files

- [A21N — Intro](intro.md) — v0.1 Draft ✅ built
- [A21N — Dispatch](dispatch.md) — v0.1 Draft ✅ built
- [A21N — Sim-Model](sim-model.md) — v0.1 Draft ✅ built (ToLiss A321 base + NEO expansion, candidate 🟧 `[VERIFY]`)
- [A21N — Checklist](checklist.md) — v0.1 Draft ✅ built
- [A21N — QRH](qrh.md) — v0.1 Draft ✅ built
- [A21N — Livery](livery.md) — v0.1 Draft ✅ built (D-AKT reg block, 62 tails: 40 neo / 18 LR / 4 XLR)

Fleet Index → [overview](../index.md) · [Capability values](../capability-matrix.md)

---

## Sources & References
*Public URLs only. Private/OEM/add-on documents may inform content but must never be listed here.*

- Airbus — A321neo type page — https://www.aircraft.airbus.com/en/aircraft/a320-the-most-successful-aircraft-family-ever/a321neo
- Airbus — A321XLR type page — https://www.aircraft.airbus.com/en/aircraft/a320-the-most-successful-aircraft-family-ever/a321xlr
- EASA — TCDS EASA.A.064 Airbus A320 (covers A318/A319/A320/A321) — https://www.easa.europa.eu/en/document-library/type-certificates/aircraft-cs-25/easaa064-airbus-a318-a319-a320-and-a321
- SKYbrary — Airbus A321 (A321) — https://skybrary.aero/aircraft/a321

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | — | Mirror stub (variant/config/tails) |
| v0.2 | 2026-07-25 | Converted stub to pack index; built Intro + Dispatch (dispatch-critical core) from public Airbus/EASA/SKYbrary data + VAMSYS mirror; one designator documented across neo/LR/XLR; capability values cross-linked to the Fleet Capability Matrix. Sim-Model / Checklist / QRH / Livery deferred — left to build. |
| v0.3 | 2026-07-25 | Completed pack — Sim-Model, Checklist, QRH, Livery built (v0.1) cloning the A339 pattern; ToLiss A321 base + NEO expansion identified as candidate model (two-package requirement, LR/XLR fuel-tank/weight-envelope config flagged 🟥 for tail-match); QRH Ch 6 extended with LR/XLR rear-centre-tank handling; Livery register split 40 neo / 18 LR / 4 XLR under D-AKT block. Pack now 🟩 complete (Draft); approved-model decision remains open `[VERIFY]`. |
