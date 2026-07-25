# B748 — Boeing 747-8 · Pack Index

> **ICAO type designator:** B748 (covers **747-8i** passenger and **747-8F** freighter) · **Engines:** 4 × GE GEnx-2B67 (quad) · **ICAO code letter:** F
> **Status:** 🟩 Pack complete (Draft) — all six files built: Intro, Dispatch, Sim-Model, Checklist, QRH, Livery (v0.1/v0.2) from public Boeing/EASA/SKYbrary/SSG data + VAMSYS mirror + Fleet Capability Matrix. Approved sim model (SSG 747-8 candidate) a management decision still open `[VERIFY]`.

## Variants operated

| VAMSYS name | Class | Business unit(s) | Tails | Seats | Cargo (kg) |
|---|---|---|--:|---|---|
| Boeing 747-8i | Pax / Belly-cargo | 1 Premier · 2 Intercontinental | 12 | 331 `[VERIFY]` | 45,000 `[VERIFY]` |
| Boeing 747-8F | Freighter (main-deck) | 9 Cargo | 9 | — | main-deck cargo `[VERIFY]` |

Config `[VAMSYS mirror 2026-07-25]`; **21 tails** total. Both variants share ICAO **B748** and the 747-8 type rating; they are distinguished inside this pack. The 8F's main-deck payload and the 8i's belly-cargo figure are **different loadsheets** — kept separate in Dispatch §4 (8F requires active main-deck CG management; loaded via side + nose cargo doors). MTOW class ~447.7 t both variants. Reg blocks `D-AKF/V` (freighter). Capability values (EDTO, RVSM, PBN, LVO, RECAT, RFF Cat 10): see [Fleet Capability Matrix](../capability-matrix.md) — note the **quad** EDTO posture (no ETOPS diversion limit; EDTO adequate-aerodrome concept; operator rule-time cell open 🟧).

## Pack files

- [B748 — Intro](intro.md) — v0.2 Draft ✅ built
- [B748 — Dispatch](dispatch.md) — v0.1 Draft ✅ built
- [B748 — Sim-Model](sim-model.md) — v0.1 Draft ✅ built
- [B748 — Checklist](checklist.md) — v0.1 Draft ✅ built
- [B748 — QRH](qrh.md) — v0.1 Draft ✅ built
- [B748 — Livery](livery.md) — v0.1 Draft ✅ built

Fleet Index → [overview](../index.md) · [Capability values](../capability-matrix.md)

---

## Sources & References
*Public URLs only. Private/OEM/add-on documents may inform content but must never be listed here.*

- Boeing — 747-8 product page — https://www.boeing.com/commercial/747
- SKYbrary — Boeing 747-8 (B748) — https://skybrary.aero/aircraft/b748
- SSG — Boeing 747-8 Inter Anniversary Edition product page — https://store.x-plane.org/B-747-8-Inter-Anniversary-Edition_p_1079.html

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.3 | 2026-07-25 | **Completed pack** — Sim-Model, Checklist, QRH and Livery built (SSG 747-8 candidate model, both 8i/8F variants; four-engine QRH with quad-specific multiple-engine-flameout and main-deck-vs-lower-deck cargo-fire items; 21-tail livery register split 12×8i/9×8F). All six pack files now built (Draft, v0.1). |
| v0.1 | — | Mirror stub (variant/config/weights) |
| v0.2 | 2026-07-25 | Converted stub to pack index; built Intro + Dispatch (dispatch-critical core) from public Boeing/EASA/SKYbrary data + VAMSYS mirror; **Code F + quad** captured (no ETOPS diversion limit / EDTO adequate-aerodrome; operator rule-time cell open 🟧); 8i pax + 8F main-deck freighter loadsheets separated; capability values cross-linked to the Fleet Capability Matrix. Sim-Model / Checklist / QRH / Livery deferred to follow-up. |
