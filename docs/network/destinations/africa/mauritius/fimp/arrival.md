# FIMP — Sir Seewoosagur Ramgoolam International · Arrival Page

**FIMP / MRU** · Plaine Magnien, Mauritius · Africa
**Version** v0.1 · **Updated** 2026-07-26 · **Status** Draft — AIP-verified (companion to [FIMP Briefing](index.md) v0.2)

> **Read-me:** Tactical arrival aid for the sim, not a chart. Companion to the [FIMP Briefing](index.md), [Dispatch](dispatch.md) and [Departure](departure.md) pages. STARs/approaches are listed **by name only** — fly the charted current-AIRAC version; minima shown are pointers, always verify on the current chart. Static data only; live wx/NOTAM are pulled at planning. Open 🟧 items are in §Open items. Flag legend 🟥 restriction/hazard · 🟧 caution/unverified · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| Usual landing runway(s) | **RWY 14** — SE trade winds favour it; also the only ILS runway |
| Usual approach | ILS CAT I (RWY 14); VOR/DME or RNP (RWY 32, no ILS) |
| Config logic | Wind-driven; no published preferential-runway rule |
| Transition level | By QNH; first usable level **FL060** |
| LVP trigger | Not separately tabulated in AD 2 🟧 |
| Missed-approach driver | **Terrain** — RWY 14 MAP turns back toward rising terrain inland |

---

## 2. STAR / transition selection

- **STARs (names only):** RWY 14 — **FFLAC, GABKI**; RWY 32 — **GEVEV, EPREX, EVOTU**; plus RNP transitions on both.
- **Selection by arrival direction / runway:** Determined by Approach per traffic direction and the prevailing SE trade wind (favouring RWY 14).
- **Transition to approach:** RNAV STAR to ILS (RWY 14) or VOR/RNP (RWY 32) — procedural, non-radar; expect position-report-based sequencing rather than radar vectors.
- **Speed / flow constraints on the STAR:** Standard 250 KIAS < FL100; observe charted STAR speed/altitude gates — verify current chart. 🟧

---

## 3. Descent & energy plan

- **Top-of-descent trigger:** Plan against TA/TL 4,000 ft and first usable level FL060; procedural FIR means less tactical flexibility for a late descent request — build in margin.
- **Speed control:** 250 KIAS < FL100 (ICAO standard); no local override identified.
- **Altitude constraints:** Per the charted STAR — pointer only, verify current chart. 🟧
- **Energy traps:** A late runway change between RWY 14 (ILS) and RWY 32 (no ILS, VOR/RNP only) carries a real approach-type change, not just a runway change — brief both approach types before descent if the wind is marginal.

---

## 4. Approach selection by runway

*Names only — verify minima on current AIRAC charts.*

| RWY | Approach (name) | LVP / CAT note | Minima pointer (verify AIRAC) |
|---|---|---|---|
| 14 | **ILS CAT I** (IPL 109.900), LLZ/DME, VOR (PLS)/DME, RNP | CAT I only — no CAT II/III published | Verify current chart 🟧 |
| 32 | VOR/DME (PLS), RNP | **No ILS** | Verify current chart 🟧 |

---

## 5. Approach hazards (terrain / CFIT / specific threats)

- **CFIT / terrain:** 🟥 High terrain **NW/W and N** of the field (Black River Gorges massif ~828 m/2,717 ft; Pieter Both/Le Pouce ~810–823 m near Port Louis) — see [Briefing §3.1](index.md). No radar/MVA backup; fly the charted approach precisely and honour all step-downs.
- **Specific threats:** RWY 32 has **no ILS** — a VOR/RNP-only approach in marginal weather is a higher-workload event than the RWY 14 ILS. PAPI RWY 14 is 3.5° (left side) — mind eye-to-wheel height on a long-body over the threshold.
- **Airspace / traffic:** Procedural, **no radar** — CTR Class C SFC–3,500 ft, TMA Class C to FL245; helicopter (coastal/Riche en Eau) and skydiving (Mon Loisir TSA, NW) traffic add to the picture. Position-report discipline, not radar vectors.

---

## 6. Missed approach watch-items

- **Terrain-driven MAP notes:** The **RWY 14 missed approach turns back toward rising terrain** inland — brief the published MAP track, heading and climb gradient before commencing the approach, not after a go-around is called.
- **Re-sequencing environment:** Procedural non-radar re-sequencing after a missed approach will be slower than a radar environment — plan fuel accordingly, especially in cyclone-season weather.
- **Go-around traps:** RWY 32 (no ILS) go-around from a VOR/RNP approach carries the same terrain consideration; do not turn early off the missed-approach track.

---

## 7. Landing runway / LDA & braking / vacate

- **LDA by runway:** RWY 14 — **3,040 m** (fixed regardless of starter extension); RWY 32 — **3,040 m** full length. See [Briefing §7](index.md) for the full declared-distance table.
- **Braking / vacate:** Not separately published (rapid-exit taxiway data not identified) — standard vacate via TWY A/C per Tower instruction.
- **Runway-excursion watch:** 🟧 SE trade winds usually favour RWY 14; on RWY 32 watch tailwind/crosswind component and wet-surface braking in the wet season.

---

## 8. Taxi-in routing to terminal & hot spots

- **Typical taxi-in by runway → terminal:** Via TWY A/B/C to the commercial apron, or direct to the GA/private apron for business-jet arrivals — confirm with Ground/Tower (combined position, no separate Ground frequency).
- **Hot spots / tight taxiways:** 🟥 **TWY B closed** (per FIR-sourced data, not independently re-confirmed against the current AIRAC); narrow **TWY K (18.7 m)** and **TWY L (15 m)** — confirm wingspan clearance for the assigned type. See [Briefing §13](index.md).
- **Stand/gate notes:** GA-apron reference stand is Citation-class charted — 🟧 confirm a G650ER fits, or expect a commercial-apron assignment instead; see [Dispatch §3](dispatch.md).

---

## 9. Arrival frequency sequence

- **Sequence:** Approach (119.100) → Tower (118.100) — **no separate Ground frequency**, Tower handles ground movement. See [Briefing §8](index.md).
- **Approach/Departure control:** **Mauritius Approach**, procedural (no radar) — confirm sector assignment on initial contact; H24.

---

## 10. Gotchas

- **RWY 32 has no ILS** — a late runway-change plan must account for a VOR/RNP-only approach, not an ILS reciprocal.
- **PAPI RWY 14 is 3.5° (left side)** — long-body eye-to-wheel check over the threshold.
- **RWY 14 missed approach turns toward rising terrain** — brief the MAP before the approach, not after a go-around.
- No radar — expect position-report-based sequencing and wider in-trail spacing than a radar arrival.
- **TWY B closed** (unconfirmed currency) — don't assume it's available for taxi-in routing.

---

## Open items (🟧 — confirm against AIP / current AIRAC)

- LVP trigger conditions; STAR speed/altitude constraints; RWY 32 missed-approach detail.
- Rapid-exit/vacate taxiway data (not identified in the reachable extract).
- TWY B closure currency against the current AIRAC.

> **Live data — pull at planning:** wx/METAR/TAF/TREND, NOTAM (runway/approach/navaid/lighting, esp. TWY B and IPL ILS), ATIS config, cyclone-season TC advisory. Not stored in this durable file.

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim charts inform content but are not listed here.*

- **Mauritius eAIP, AD 2 FIMP, eff. 15 MAY 2025** (DCA Mauritius) — approaches, navaids, declared distances, ATS airspace (retrieved 2026-06-26).
- IVAO FIMM OPMAN — STAR names, FIR Centre freq, P/R/D areas (retrieved 2026-06-26). *Tier-4 — network-sim doc, not regulatory.*

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-26 | Built from the FIMP Briefing (Mauritius eAIP-derived) and live VAMSYS fields; new arrival page as part of the 4-page fold. |
