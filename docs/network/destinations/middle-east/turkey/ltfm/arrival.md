# LTFM — İstanbul Airport · Arrival Page

**LTFM / IST** · Arnavutköy, İstanbul, Türkiye · Middle East
**Version** v0.1 · **Updated** 2026-07-26 · **Status** Draft — DHMİ AIP-derived

> **Read-me:** Tactical arrival aid for the sim, not a chart. Companion to the [LTFM Briefing](index.md), [Dispatch](dispatch.md) and [Departure](departure.md) pages. STARs/approaches are listed **by name only** — fly the charted current-AIRAC version; minima shown are pointers, always verify on the current chart. Static data only; live wx/NOTAM are pulled at planning. Open 🟧 items are in §Open items. Flag legend 🟥 restriction/hazard · 🟧 caution/unverified · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| Usual landing runway(s) | Wind/traffic/flow-dependent across the five-runway set; confirm on ATIS 🟧 |
| Usual approach | ILS CAT III (16R/34L, 17L/35R, 18/36) or ILS CAT I (16L/34R, 17R/35L) by assigned runway |
| Config logic | Traffic-flow driven; triple independent parallel approach operations since 17 Apr 2025 |
| Transition level | By QNH; TA 12,000 ft — TL not independently confirmed 🟧 |
| LVP trigger | Not confirmed — CAT III infrastructure exists on three of five runways 🟧 |
| Missed-approach driver | Traffic/re-sequencing (not terrain — rolling ground, no close-in high terrain reported) |

---

## 2. STAR / transition selection

- **STARs (names only):** Not confirmed in reachable research pass — pull the current-AIRAC STAR list at planning. 🟧
- **Selection by arrival direction / runway:** Not confirmed in reachable sources; expect ATC/ATIS assignment given the five-runway, triple-independent-parallel-approach environment.
- **Transition to approach:** Not confirmed — verify current chart for RNAV-to-ILS transition and expected vectoring under Yeşilköy APP/Radar's multi-sector structure (SWU/SWN/SWS/SWD/SWF on the west side, SEU/SEN/SEC/SES/SEF on the east side, SCF for centre-final).
- **Speed / flow constraints on the STAR:** Not confirmed — pointer only, verify chart.

---

## 3. Descent & energy plan

- **Top-of-descent trigger:** Not confirmed in reachable sources — plan per standard distance/altitude rule of thumb pending chart confirmation.
- **Speed control:** Standard 250 KIAS below FL100 (ICAO norm) expected; STAR-specific speed gates not confirmed.
- **Altitude constraints:** Not confirmed — pointer only, verify chart.
- **Energy traps:** The five-runway, triple-independent-parallel-approach environment creates a genuine late-runway-change/re-sequencing risk; maintain flexibility on the approach briefing until the runway/config is confirmed on ATIS.

---

## 4. Approach selection by runway

*Names only — verify minima on current AIRAC charts.*

| RWY | Approach (name) | LVP / CAT note | Minima pointer (verify AIRAC) |
|---|---|---|---|
| 16R | ILS (IUCB) | CAT III 🟧 | Verify current chart |
| 34L | ILS (IUCA) | CAT III 🟧 | Verify current chart |
| 16L | Visual/PAPI (no ILS confirmed) | CAT I lighting only 🟧 | Verify current chart |
| 34R | Visual/PAPI (no ILS confirmed) | CAT I lighting only 🟧 | Verify current chart |
| 17R | Visual/PAPI (no ILS confirmed) | CAT I lighting only 🟧 | Verify current chart |
| 35L | Visual/PAPI (no ILS confirmed) | CAT I lighting only 🟧 | Verify current chart |
| 17L | ILS (IUCF) | CAT III 🟧 | Verify current chart |
| 35R | ILS (IUCE) | CAT III 🟧 | Verify current chart |
| 18 | ILS (IUCD), Calvert lighting | CAT III 🟧 | Verify current chart |
| 36 | ILS (IUCC), Calvert lighting | CAT III 🟧 | Verify current chart |

---

## 5. Approach hazards (terrain / CFIT / specific threats)

- **CFIT / terrain:** 🟥 No close-in high terrain identified in reachable sources for this near-sea-level, rolling-ground field — cross-ref [Briefing §3.1](index.md). Not independently cross-checked against a current MSA chart this pass — treat as a lower-priority item pending verification, but do not assume "non-factor" without checking the chart.
- **Specific threats:** Triple independent parallel approaches (since Apr 2025) across four long parallels plus a crosswind runway (18/36) — a genuinely complex multi-runway arrival environment; confirm wake-turbulence spacing and dependent-approach procedures on the current chart.
- **Airspace / traffic:** High density under Yeşilköy APP/Radar's multi-sector structure — cross-ref [Briefing §3.2](index.md) and the [Middle East airspace brief](../../../../airspace/middle-east.md).

---

## 6. Missed approach watch-items

- **Terrain-driven MAP notes:** Not a terrain-driven field per reachable sources — pointer only, verify chart.
- **Re-sequencing environment:** Very high — five runways, triple independent parallel approaches, and dense Yeşilköy APP/Radar sectorisation mean a missed approach re-enters a busy sequencing environment.
- **Go-around traps:** Not individually confirmed — brief the standard go-around procedure and expect prompt vectoring given traffic density.

---

## 7. Landing runway / LDA & braking / vacate

- **LDA by runway:** 4,100 m (17R/35L, 17L/35R), 3,750 m (16R/34L, 16L/34R), 3,060 m (18/36) — all equal to full runway length (no displaced thresholds published); cross-ref [Briefing §7](index.md).
- **Braking / vacate:** Not individually confirmed — extensive taxiway system with multiple exits per runway expected at this scale; confirm rapid-exit taxiways on current chart.
- **Runway-excursion watch:** 🟧 No displaced thresholds published; RWY 18/36 carries a concrete/high-friction-surface treatment near each threshold (strength/friction note, not a distance issue) — see [Briefing §3.3](index.md).

---

## 8. Taxi-in routing to terminal & hot spots

- **Typical taxi-in by runway → terminal:** Not individually confirmed — extensive lettered taxiway system (A–T) serving a central terminal/apron complex; confirm routing with Ground on the day.
- **Hot spots / tight taxiways:** 🟥 Numerous Code-C/E/F width transitions are referenced on named taxiway segments (e.g. TWY D, E5, F3, G1, T2, T3, T5, T7, T9 at various intersections) — cross-ref [Briefing §13](index.md); confirm current hot-spot markings on the chart.
- **Stand/gate notes:** Cross-ref [Dispatch §3](dispatch.md).

---

## 9. Arrival frequency sequence

- **Sequence:** Approach (Yeşilköy APP/Radar, sector-specific — SWF/SEF/SCF final sectors feed Tower) → Tower (5 positions) → Ground (9 sector pairs) — reference the field's actual frequencies in [Briefing §8](index.md).
- **Approach/Departure control:** Yeşilköy APP/Radar; İstanbul TWR takes over when required/transferred by Yeşilköy APP. Sector/STAR-specific frequencies — verify current chart. 🟧

---

## 10. Gotchas

- **Confirm the active runway/configuration on ATIS before briefing the approach** — the five-runway, triple-independent-parallel-approach environment means the assigned runway is genuinely not predictable without checking ATIS/ATC.
- **16L/34R and 17R/35L carry no confirmed ILS** — if assigned one of these runways, brief for a visual/PAPI approach and verify current chart minima; do not assume CAT III availability across the field.
- **RWY 18/36's Calvert lighting system** looks different from the Barette system on the other four runways — a visual-environment note for the approach.
- **High traffic density** under multi-sector Yeşilköy APP/Radar control — expect vectoring and maintain a heightened traffic scan even under radar.

---

## Open items (🟧 — confirm against AIP / current AIRAC)

- STAR names and transitions — not obtained this pass.
- Transition level (by QNH).
- LVP trigger conditions and exact RVR minima.
- Confirmation of ILS presence/absence on 16L/34R and 17R/35L.
- Named taxiway hot spots — consolidated list not reached this pass.
- Rapid-exit taxiway locations per runway.

> **Live data — pull at planning:** wx/METAR/TAF/TREND, NOTAM (runway/approach/navaid/lighting), ATIS config, ground-delay/flow status. Not stored in this durable file.

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim charts inform content but are not listed here.*

- **DHMİ AIP Türkiye, AD 2 LTFM** (current AIRAC extract, cycles through AMDT 03/26) — https://www.dhmi.gov.tr/AIPDocuments/LT_AD_2_LTFM_en.pdf (retrieved 2026-07-26).
- Public aviation-news reporting on triple independent parallel runway operations (17 Apr 2025) — general search corroboration; not individually re-verified this pass. *Advisory/secondary source — flagged 🟧.*

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-26 | Built from national AIP; K Global fields from live VAMSYS; 4-page pack. |
