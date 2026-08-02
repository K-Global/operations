# FKKD — Douala · Arrival Page

**FKKD / DLA** · Douala, Littoral Region, Cameroon · Africa
**Version** v0.1 · **Updated** 2026-07-26 · **Status** Draft — provisional

> **Read-me:** Tactical arrival aid for the sim, not a chart. Companion to the [FKKD Briefing](index.md), Dispatch and Departure pages. STARs/approaches are listed **by name only** — fly the charted current-AIRAC version; minima shown are pointers, always verify on the current chart. Static data only; live wx/NOTAM are pulled at planning. Open 🟧 items are in §Open items. Flag legend 🟥 restriction/hazard · 🟧 caution/unverified · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| Usual landing runway(s) | 12 or 30 — single runway, wind-selected 🟧 |
| Usual approach | Not published / verify — no ILS/RNP procedure confirmed 🟧 |
| Config logic | Wind-driven |
| Transition level | Not published / verify 🟧 |
| LVP trigger | Not published / verify — no confirmed low-vis capability 🟧 |
| Missed-approach driver | Weather (convective) rather than terrain — see §5 |

---

## 2. STAR / transition selection

- **STARs (names only):** Not published / verify. 🟧
- **Selection by arrival direction / runway:** Not confirmed.
- **Transition to approach:** Not confirmed — no procedure inventory found.
- **Speed / flow constraints on the STAR:** Not published / verify. 🟧

---

## 3. Descent & energy plan

- **Top-of-descent trigger:** Standard rule-of-thumb planning assumed; no field-specific constraint found.
- **Speed control:** Standard 250 KIAS below FL100 (ICAO norm) assumed.
- **Altitude constraints:** Not published / verify. 🟧
- **Energy traps:** Heavy wet-season rain/CB can force late runway/config changes — build in an energy buffer during the Jul–Sep peak.

---

## 4. Approach selection by runway

*Names only — verify minima on current AIRAC charts.*

| RWY | Approach (name) | LVP / CAT note | Minima pointer (verify AIRAC) |
|---|---|---|---|
| 12 | Not published / verify | 🟧 No ILS/RNP confirmed | Verify current chart |
| 30 | Not published / verify | 🟧 No ILS/RNP confirmed | Verify current chart |

---

## 5. Approach hazards (terrain / CFIT / specific threats)

- **CFIT / terrain:** 🟩 Flat coastal/estuary terrain at the field itself — non-issue for the immediate approach/missed-approach path. Mount Cameroon (~13,255 ft) lies ~50 NM WSW — a regional feature, not a close-in approach hazard at FKKD. See [Briefing §3.1](index.md).
- **Specific threats:** 🟥 Heavy convective rain/thunderstorm activity (Jul–Sep peak) — embedded CB, low-level wind shear/microburst risk on approach; see [Briefing §3.4](index.md).
- **Airspace / traffic:** Brazzaville FIR (FCCC) (Douala is the local ACC/sector; the controlling FIR is Brazzaville, FCCC) — control type not confirmed, likely procedural; see [Brazzaville (FCCC) FIR Briefing](../../../../airspace/fir/africa/brazzaville-fccc.md) and [Africa — Airspace Briefing](../../../../airspace/africa.md).

---

## 6. Missed approach watch-items

- **Terrain-driven MAP notes:** Not a factor at this field — see §5.
- **Re-sequencing environment:** Not confirmed — single-runway field, no parallel/crossing-runway resequencing complexity.
- **Go-around traps:** Wet-season convective weather is the more likely driver of a go-around here than terrain or traffic density — brief accordingly in season.

---

## 7. Landing runway / LDA & braking / vacate

- **LDA by runway:** Not published / verify — working figure ~2,850 m per runway, no displaced-threshold data found (Briefing §7). 🟧
- **Braking / vacate:** Not published / verify — rapid-exit taxiway inventory not found. 🟧
- **Runway-excursion watch:** 🟥 Wet/contaminated-runway braking-action caution in the wet season (Jul–Sep peak); single runway means no reciprocal-direction option if conditions favour the other end.

---

## 8. Taxi-in routing to terminal & hot spots

- **Typical taxi-in by runway → terminal:** Not published / verify. 🟧
- **Hot spots / tight taxiways:** Not published / verify — cross-ref [Briefing §13](index.md). 🟧
- **Stand/gate notes:** Cross-ref [FKKD Dispatch §3](dispatch.md).

---

## 9. Arrival frequency sequence

- **Sequence:** Approach → Tower (119.7 MHz, tier-4) → Ground — full sequence not confirmed; reference [Briefing §8](index.md).
- **Approach/Departure control:** Not confirmed — facility name/frequency not found publicly. 🟧

---

## 10. Gotchas

- **No confirmed precision approach** — plan a visual/non-precision arrival as the default assumption until the current AIRAC procedure set is verified.
- **Single runway** — a late wind shift close to minimums may mean a runway change rather than a reciprocal-direction option is unavailable; the field only has the one strip either way, so expect a full circuit/re-approach rather than a quick swap.
- **Wet-season CB build-up in the afternoon/evening (Jul–Sep peak)** — expect convective activity to shape the arrival picture; hold fuel/energy margin for weather-driven delay or diversion.

---

## Open items (🟧 — confirm against AIP / current AIRAC)

- Approach/STAR inventory, transition level, LVP trigger, LDA/declared distances, taxi-in routing, hot spots, approach/departure control frequency — none confirmed in reachable sources.

> **Live data — pull at planning:** wx/METAR/TAF/TREND, NOTAM (runway/approach/navaid/lighting), ATIS config, ground-delay/flow status. Not stored in this durable file.

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim charts inform content but are not listed here.*

- OurAirports — https://ourairports.com/airports/FKKD/ , /runways.html , /frequencies.html (retrieved 2026-07-26).
- Wikipedia — "Douala International Airport" — https://en.wikipedia.org/wiki/Douala_International_Airport (retrieved 2026-07-26).

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-26 | Built from national AIP/ASECNA; K Global fields from live VAMSYS; 4-page pack. |
