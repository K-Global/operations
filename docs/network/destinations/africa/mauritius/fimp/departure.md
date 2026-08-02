# FIMP — Sir Seewoosagur Ramgoolam International · Departure Page

**FIMP / MRU** · Plaine Magnien, Mauritius · Africa
**Version** v0.1 · **Updated** 2026-07-26 · **Status** Draft — AIP-verified (companion to [FIMP Briefing](index.md) v0.2)

> **Read-me:** Tactical departure aid for the sim, not a chart. Companion to the [FIMP Briefing](index.md), [Dispatch](dispatch.md) and [Arrival](arrival.md) pages. SIDs/procedures are listed **by name only** — fly the charted current-AIRAC version; verify every gradient, minima and routing on the current chart. Static data only; live wx/NOTAM/CTOT are pulled at planning. Open 🟧 items are in §Open items. Flag legend 🟥 restriction/hazard · 🟧 caution/unverified · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| Usual departure runway(s) | **RWY 14** — SE trade winds favour it; also the only ILS runway (relevant to config continuity, not departure itself) |
| Config logic | Wind-driven (SE trade winds); no published preferential-runway rule |
| Transition altitude | 4,000 ft |
| Take-off minima | Published per chart — not confirmed this pass 🟧 |
| CTOT / flow regime | None identified — procedural, non-radar FIR; clearance via Tower/Approach |
| De-icing on departure | **NIL** (tropical) |

---

## 2. Stand → runway taxi routing & hot spots

- **Typical routings by runway:** GA-apron stand to RWY 14 or 32 via the main taxiway system (A/B/C); confirm routing with Ground/Tower on the day.
- **Hot spots / tight taxiways:** 🟥 **TWY B closed** per FIR-sourced data (not independently re-confirmed against the current AIRAC); narrow taxiways **K (18.7 m)** and **L (15 m)** are wingspan-limited for larger types — confirm clearance for the assigned type before taxiing.
- **Runway crossings / read-back-required points:** Not separately identified — Tower handles Ground/Delivery at FIMP (no separate Ground frequency published); expect combined-position phraseology.
- **Low-vis taxi caveats:** Not published — verify locally. 🟧

---

## 3. Runway / SID selection logic

- **By wind / config:** No published preferential-runway rule; **SE trade winds usually favour RWY 14** (136° M) for both arrivals and departures.
- **By departure direction:** RWY 14 RNAV SIDs fan north/northeast (EVANA, ETGOR, IBSIS, SOBAT, OSKAR, UDMED, GABKI, UTIVA, OKMAR, TIBAG, NIBIS, RASMA); RWY 32 RNAV SIDs (SOBAT 1B, IBSIS 1B, ETGOR 1B, KINIX 1B, ATLOP 1B and others) serve the reciprocal.
- **Noise / preferential-runway program:** None — NAP is NIL (eAIP AD 2.21).
- **Interaction with arrivals:** Single runway, procedural non-radar control — no simultaneous dependent-runway issue, but in-trail spacing is by position report, not radar, so expect wider gaps than a radar environment.

---

## 4. SID list (names only)

*Fly the charted current-AIRAC version. Climb-gradient / RNP notes are pointers only — verify on the chart.*

| SID (name) | Runway(s) | RNP / gradient note | Notes |
|---|---|---|---|
| EVANA, ETGOR, IBSIS, SOBAT, OSKAR, UDMED, GABKI, UTIVA, OKMAR, TIBAG, NIBIS, RASMA | 14 | Several are **RNP 1** — confirm equipage per SID 🟧 | RNAV; RWY 14 North variant has DUPNA/UTRUP transitions |
| SOBAT 1B, IBSIS 1B, ETGOR 1B, KINIX 1B, ATLOP 1B (+ others) | 32 | RNP 1 variants exist — confirm equipage per SID 🟧 | RNAV, reciprocal-runway set |

---

## 5. Initial climb, speed & noise-abatement departure

- **Initial climb / speed:** Standard ICAO 250 KIAS < FL100; observe the charted SID altitude/speed constraints.
- **Noise-abatement departure procedure (NADP):** **NIL** — no NAP published (eAIP AD 2.21).
- **Early turn / altitude constraints:** Helicopter and east-coast traffic (Beau-Vallon/Le Souffleur, TLOFs ALPHA/PAPA) can restrict early left turns off the **RWY 14 North SID** — climb on the SID as charted rather than turning early.

---

## 6. Engine-out / emergency-turn & obstacle considerations

- **Engine-out / emergency-turn procedure:** Not separately published in the reachable AD 2 extract — verify on the current chart. 🟧
- **Close-in / distant obstacles:** High terrain lies **NW/W and N** of the field (Black River Gorges massif ~828 m/2,717 ft; Pieter Both/Le Pouce ~810–823 m near Port Louis) — see [Briefing §3.1](index.md). Read exact MSA sectors off the AFC area chart; the field itself sits on the low coastal plain (184 ft).
- **Special DP / obstacle DP:** Not identified — name-only pointer, verify current chart.

---

## 7. Low-vis takeoff & de-icing on departure

- **LVTO minima / procedure:** Not separately tabulated in the reachable AD 2 extract — verify current chart. 🟧
- **De-icing:** **NIL** (tropical field).

---

## 8. Clearance / CTOT & departure frequency sequence

- **Clearance delivery:** No separate Delivery frequency published — **Mauritius Tower (118.100)** handles clearance, ground and tower functions; see [Briefing §8](index.md).
- **Frequency sequence:** Tower (118.100) → Approach (119.100, procedural) → Centre (129.300, Mauritius FIMM) — all H24.
- **CTOT / slot handling:** No CTOT/ATFM regime identified in AD 2 — clearance is procedural via Tower/Approach position reports, not a flow programme.

---

## 9. Performance watch-items for our types

- **Field-length / weight:** Non-limiting for G650ER/ACJ321 — LDA 3,040 m, TORA up to 3,370 m (RWY 14 with starter extension).
- **Density altitude / temperature:** Low coastal field (184 ft, ref temp 29.7 °C) — not a hot-and-high performance driver.
- **Contamination / wet-runway:** Wet-season convective showers can wet the runway; no contamination/braking-action data published for FIMP — treat as standard wet-runway planning.
- **Link to OM B:** See [Briefing §17](index.md) — G650ER GA-apron stand suitability is the operative caveat, not field performance.

---

## 10. Gotchas

- **RWY 32 has no ILS** — a same-runway instrument departure/arrival continuity assumption doesn't hold; RWY 14 is the only ILS runway.
- **TWY B closed** (unconfirmed currency) and narrow TWY K/L — check wingspan clearance before accepting a taxi route through them.
- Helicopter/east-coast traffic can force an early-left-turn restriction off the **RWY 14 North SID** — fly the SID as charted, don't anticipate the turn.
- No separate Ground/Delivery frequency — Tower handles everything; don't expect a frequency change between pushback and taxi.
- Procedural (non-radar) FIR — position-report discipline substitutes for radar separation; brief this explicitly for crews used to radar environments.

---

## Open items (🟧 — confirm against AIP / current AIRAC)

- Take-off minima; SID climb-gradient/RNP specifics; engine-out/obstacle DP detail.
- LVTO minima/procedure.
- TWY B closure currency against the current AIRAC.

> **Live data — pull at planning:** wx/METAR/TAF, NOTAM (runway/taxiway/navaid/lighting, esp. TWY B and IPL ILS), cyclone-season TC advisory, GPS/RAIM for RNP. Not stored in this durable file.

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim charts inform content but are not listed here.*

- **Mauritius eAIP, AD 2 FIMP, eff. 15 MAY 2025** (DCA Mauritius) — runway/declared distances, SID names, ATS airspace, local traffic regs (retrieved 2026-06-26).
- IVAO FIMM OPMAN — SID/STAR names, taxiway widths (retrieved 2026-06-26). *Tier-4 — network-sim doc, not regulatory.*

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-26 | Built from the FIMP Briefing (Mauritius eAIP-derived) and live VAMSYS fields; new departure page as part of the 4-page fold. |
