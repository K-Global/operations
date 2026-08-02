# LIMZ — Cuneo-Levaldigi · Arrival Page

**LIMZ / CUF** · Levaldigi (Savigliano), Cuneo Province, Piedmont, Italy · Europe
**Version** v0.1 · **Updated** 2026-07-26 · **Status** Draft

> **Read-me:** Tactical arrival aid for the sim, not a chart. Companion to the [LIMZ Briefing](index.md), [Dispatch](dispatch.md) and [Departure](departure.md) pages. STARs/approaches are listed **by name only** — fly the charted current-AIRAC version; minima shown are pointers, always verify on the current chart. Static data only; live wx/NOTAM are pulled at planning. Open 🟧 items are in §Open items. Flag legend 🟥 restriction/hazard · 🟧 caution/unverified · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| Usual landing runway(s) | Not published / verify — single runway **03/21**, usable both directions; no preferential-runway rule identified 🟧 |
| Usual approach | **RWY 21**: ILS/LOC and RNAV(GNSS) referenced (exact name not confirmed) 🟧 · **RWY 03**: no confirmed instrument approach — circling/visual only 🟥 |
| Config logic | Wind-dependent (single bidirectional runway); no published logic identified 🟧 |
| Transition level | Variable by QNH per a network-sim-sourced table — see §3; not confirmed against the primary AIP 🟧 |
| LVP trigger | Not published / verify — field's reported low-fog profile suggests infrequent LVP need, not confirmed 🟧 |
| Missed-approach driver | Terrain (Maritime Alps to the southwest, RWY 21 side) — not independently quantified this pass 🟧 |

---

## 2. STAR / transition selection

- **STARs (names only):** Not confirmed from a primary source this pass — no STAR names were identified in reachable sources; verify the current-AIRAC STAR list at planning. 🟧
- **Selection by arrival direction / runway:** Not published / verify. 🟧
- **Transition to approach:** Not published / verify — likely a radar-vectored transition from Milano Radar (Torino sector) onto the RWY 21 approach, given the field's own AFIS/non-radar status; not confirmed. 🟧
- **Speed / flow constraints on the STAR:** Not published / verify — verify current chart. 🟧

---

## 3. Descent & energy plan

- **Top-of-descent trigger:** Not published / verify — plan a standard descent profile pending current-AIRAC confirmation.
- **Speed control:** Standard 250 KIAS below FL100 assumed (ICAO/EU norm); TA/TL per a network-sim-sourced table — TA **7,000 ft**; TL variable by QNH (QNH ≥1013 hPa → FL80; 995–1012 → FL85; 977–994 → FL90; <977 → FL95) — not independently confirmed against the primary AIP. 🟧
- **Altitude constraints:** Not published / verify — verify current chart. 🟧
- **Energy traps:** A shallow runway-end elevation difference is reported between RWY 03 (thr ≈1,267 ft) and RWY 21 (thr ≈1,217 ft) in public data — not independently confirmed; verify the actual runway profile before assuming a downhill-landing effect on 21. 🟧

---

## 4. Approach selection by runway

*Names only — verify minima on current AIRAC charts.*

| RWY | Approach (name) | LVP / CAT note | Minima pointer (verify AIRAC) |
|---|---|---|---|
| 21 | ILS / LOC and RNAV(GNSS) referenced (exact chart name not confirmed) | CAT/LVP status not confirmed 🟧 | Not published / verify — network-sim sourced only |
| 03 | No confirmed published instrument approach | — | Circling/visual only — verify current AIRAC 🟥 |

---

## 5. Approach hazards (terrain / CFIT / specific threats)

- **CFIT / terrain:** 🟥 The Maritime Alps rise close to the southwest, culminating at Monte Argentera (3,297 m/10,817 ft) — a genuine high-terrain quadrant relative to the field's 1,267 ft elevation. RWY 21 (heading 210°) points toward this terrain. Exact peak bearings/distances and MSA sector minima were not sourced this pass — cross-reference [Briefing §3.1](index.md) and pull the area/MSA chart at planning.
- **Specific threats:** No closely-spaced parallels or offset/converging approaches (single runway). Wake, wind-shear and fog-capacity threats appear low per the field's public weather profile ("rarely subject to strong fog or wind") — not independently quantified. 🟧
- **Airspace / traffic:** Non-radar, AFIS-serviced field; low traffic density; Milano Radar/ACC (LIMM) provides the approach/en-route service. See [Briefing §3.2](index.md). 🟧

---

## 6. Missed approach watch-items

- **Terrain-driven MAP notes:** The RWY 21 missed approach plausibly climbs away from the southwest high-terrain quadrant back toward the plain — not independently confirmed; verify current chart. 🟥
- **Re-sequencing environment:** Low traffic density; re-sequencing is procedural (AFIS/Milano Radar) rather than radar-vectored on the field itself. 🟧
- **Go-around traps:** Not published / verify — no field-specific go-around trap identified. 🟧

---

## 7. Landing runway / LDA & braking / vacate

- **LDA by runway:** ~2,100 m both directions per a network-sim source — see [Briefing §7](index.md) for the full declared-distance caveat and source discrepancy. 🟧
- **Braking / vacate:** Not published / verify — no rapid-exit taxiway data identified; a single-runway field of this size likely has a minimal taxiway system. 🟧
- **Runway-excursion watch:** No displaced threshold identified; a shallow reported slope toward RWY 21 (§3) is not independently confirmed. Contamination risk in winter should be assumed despite the field's low-fog/low-wind reputation. 🟧

---

## 8. Taxi-in routing to terminal & hot spots

- **Typical taxi-in by runway → terminal:** Not published / verify — minimal taxiway system expected for a field this size. 🟧
- **Hot spots / tight taxiways:** None identified in reachable sources — plausible given field size, not confirmed. 🟧
- **Stand/gate notes:** See [Dispatch §3](dispatch.md) — no widebody/Code E stand data identified; field in practice suits narrowbody-or-smaller equipment.

---

## 9. Arrival frequency sequence

- **Sequence:** Milano Radar (Torino sector) **129.275** → Milano Information (FIS) **124.925** (as applicable) → Cuneo AFIS/TWR **119.550** — see [Briefing §8](index.md) for full detail and caveats.
- **Approach/Departure control:** Milano Radar / Milano ACC (LIMM) — the former "Torino Approach" sector was absorbed into Milano Radar from 30 Nov 2023. No dedicated Milano FIR brief exists yet in this tree; refer to [Europe — General](../../../../airspace/europe.md) in the interim. 🟧

---

## 10. Gotchas

- Only **RWY 21** has a confirmed published instrument approach in reachable sources — do not plan a RWY 03 IMC arrival without current-AIRAC verification of an available procedure.
- **AFIS (not full ATC tower)** on the field — non-radar, procedural sequencing; approach/en-route service is remote via Milano Radar/ACC.
- **AD/ATS hours are limited** (07:00–21:00 local, non-H24) — a late or early arrival outside this window is unlikely to have any service available.
- The Maritime Alps rise close to the southwest on the RWY 21 side — respect published MSA/circling minima once confirmed.
- **This field is outside the K Global (VAMSYS) network** — no stand/handling/alternate-suitability assumption should be made without VAMSYS reconciliation.

---

## Open items (🟧 — confirm against AIP / current AIRAC)

- STAR names, transition routing — none confirmed from a primary source.
- Approach minima and exact chart names for RWY 21; RWY 03 approach status (circling-only) not confirmed from a primary source.
- TA/TL table — sourced to a network-sim reference only.
- Runway threshold-elevation difference / slope — reported in public data, not independently confirmed.
- LDA/declared-distance figures — see [Briefing §7](index.md) source-discrepancy note.
- MSA sectors and quantified terrain bearings/distances for the RWY 21 side.
- Taxi-in routing and stand/gate assignment.

> **Live data — pull at planning:** wx/METAR/TAF/TREND, NOTAM (runway/approach/navaid/lighting/AFIS-hours), ATIS-equivalent config, ground-delay/flow status. Not stored in this durable file.

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim charts inform content but are not listed here.*

- IVAO Italy — Aerodrome QuickOverview LIMZ (network-sim document, not regulatory) — https://quickoverview.ivao.it/aerodrome/show/LIMZ (retrieved 2026-07-26). *TA/TL table, approach references, frequencies.*
- SkyVector — https://skyvector.com/airport/LIMZ/Cuneo-Levaldigi-Airport (retrieved 2026-07-26). *Runway heading/threshold elevation.*
- Wikipedia (Italian) — "Aeroporto di Cuneo-Levaldigi" — https://it.wikipedia.org/wiki/Aeroporto_di_Cuneo-Levaldigi (retrieved 2026-07-26). *Weather profile.*

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-26 | Built from AIP Italia (ENAV); K Global fields from live VAMSYS; 4-page pack. |
