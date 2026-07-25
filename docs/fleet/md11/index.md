# MD11 — McDonnell Douglas MD-11F · Pack Index

> **ICAO type designator:** MD11 · **Engines:** 3 (2 wing + 1 tail-mounted, S-duct) — GE CF6-80C2D1F or PW4460/4462 🟧 `[VERIFY]` · **ICAO code letter:** D (provisional, borderline E) 🟧
> **Status:** 🟩 Pack complete (Draft) — all six files built (v0.1): Intro, Dispatch, Sim-Model, Checklist, QRH, Livery, from public Wikipedia/Rotate data + VAMSYS mirror + Fleet Capability Matrix (secondary/indicative table). Approved sim model (Rotate MD-11, Freighter edition) a management decision still open `[VERIFY]`. **EDTO/adequate-aerodrome policy not researched** 🟧 (deferred type — see below). **Genuine handling hazard 🟥** — reduced pitch damping / LSAS dependency — flagged throughout.

## Variants operated

| VAMSYS name | Class | Business unit | Tails | Seats | Cargo (kg) |
|---|---|---|---|--:|---|
| McDonnell Douglas MD-11F | Freighter (main-deck + 3-position lower-deck) | 9 Cargo | 4 | — | ~91,185 |

Config `[VAMSYS mirror 2026-07-25]`; **4 tails** — the smallest register and the oldest-generation type in the K Global fleet. One designator, single variant — **main-deck cargo, no passengers**. Weights: MTOW ~273,300–285,988 / OEW ~118,000–129,000 kg (both engine-variant dependent, GE vs PW — `[VERIFY]`). A **trijet** — 2 wing-mounted engines + 1 tail-mounted engine on an S-duct through the vertical fin, McDonnell Douglas/DC-10 heritage. Filed under **OM B Boeing** per K Global's manufacturer grouping (McDonnell Douglas merged into Boeing in 1997), though it shares no type lineage with any Boeing-designed airframe in this fleet. Capability values (RECAT, wake, RFF Cat 9): see [Fleet Capability Matrix](../capability-matrix.md) **secondary/indicative table** — not yet researched to the mainline standard.

**Handling note 🟥:** this type carries a genuinely demanding handling profile — a smaller horizontal tailplane than its DC-10 predecessor, an aft-shifting cruise CG (stabilizer fuel-ballast tank), and reduced natural pitch damping, compensated by the **Longitudinal Stability Augmentation System (LSAS)**. Standard landing speeds run ~10–20 kt faster than comparable widebodies. This is captured as a hard flag throughout the pack (Intro §2/§6, QRH Ch 1/Ch 9), not a cosmetic caution.

**EDTO note:** a **trijet, not a classic-ETOPS twin** — the ICAO EDTO adequate-aerodrome concept applies (2+ engines) but **no operator rule time or adequate-aerodrome policy has been researched/set** for this deferred type (matrix secondary table, indicative only). This pack treats it like the quad types (A346/A388/B748) — **left 🟧 pending research/OpsSpec**, no assumed value (Dispatch §5).

## Pack files

- [MD11 — Intro](intro.md) — v0.1 Draft ✅ built
- [MD11 — Dispatch](dispatch.md) — v0.1 Draft ✅ built
- [MD11 — Sim-Model](sim-model.md) — v0.1 Draft ✅ built
- [MD11 — Checklist](checklist.md) — v0.1 Draft ✅ built
- [MD11 — QRH](qrh.md) — v0.1 Draft ✅ built
- [MD11 — Livery](livery.md) — v0.1 Draft ✅ built

Fleet Index → [overview](../index.md) · [Capability values (secondary table)](../capability-matrix.md)

---

## Sources & References
*Public URLs only. Private/OEM/add-on documents may inform content but must never be listed here.*

- Wikipedia — McDonnell Douglas MD-11 — https://en.wikipedia.org/wiki/McDonnell_Douglas_MD-11
- Rotate — MD-11 Freighter product page — https://store.x-plane.org/Rotate-MD-11-Freighter_p_1580.html

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-25 | **Full pack built** (all seven files: Intro, Dispatch, Sim-Model, Checklist, QRH, Livery, and this index) from public Wikipedia/Rotate data + VAMSYS mirror + Fleet Capability Matrix secondary table; informed by re-expressed general MD-11 systems/handling knowledge (no OEM/FCOM/airline-manual text, no airline names). Trijet layout, tail-mounted (#2, S-duct) engine, five-point (center) gear, three-position lower-deck cargo, and the type's genuine reduced-pitch-damping/LSAS handling hazard all captured and flagged 🟥 throughout. EDTO/adequate-aerodrome policy left 🟧 pending research (deferred type, treated like the quads). Engine variant (GE CF6-80C2D1F vs PW4460/4462) and sim-model edition/test status both open `[VERIFY]`. No dead links. |
