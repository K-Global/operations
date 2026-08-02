# FOOL — Léon-Mba · Arrival Page

**FOOL / LBV** · Libreville, Estuaire Province, Gabon · Africa
**Version** v0.1 · **Updated** 2026-07-26 · **Status** Draft — provisional

> **Read-me:** Tactical arrival aid for the sim, not a chart. Companion to the [FOOL Briefing](index.md), Dispatch and Departure pages. STARs/approaches are listed **by name only** — fly the charted current-AIRAC version; minima shown are pointers, always verify on the current chart. Static data only; live wx/NOTAM are pulled at planning. Open 🟧 items are in §Open items. Flag legend 🟥 restriction/hazard · 🟧 caution/unverified · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| Usual landing runway(s) | 16 or 34 — single runway, wind-selected 🟧 |
| Usual approach | Not published / verify — no ILS/RNP procedure confirmed 🟧 |
| Config logic | Wind-driven |
| Transition level | Not published / verify 🟧 |
| LVP trigger | Not published / verify — no confirmed low-vis capability 🟧 |
| Missed-approach driver | Weather (convective) and over-water geometry rather than terrain — see §5 |

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
- **Energy traps:** Heavy equatorial wet-season rain/CB can force late runway/config changes — build in an energy buffer.

---

## 4. Approach selection by runway

*Names only — verify minima on current AIRAC charts.*

| RWY | Approach (name) | LVP / CAT note | Minima pointer (verify AIRAC) |
|---|---|---|---|
| 16 | Not published / verify | 🟧 No ILS/RNP confirmed; likely over-water final segment | Verify current chart |
| 34 | Not published / verify | 🟧 No ILS/RNP confirmed | Verify current chart |

---

## 5. Approach hazards (terrain / CFIT / specific threats)

- **CFIT / terrain:** 🟩 Flat coastal terrain at the field itself — non-issue for the immediate approach/missed-approach path. See [Briefing §3.1](index.md).
- **Specific threats:** 🟥 Equatorial wet-season convective rain/thunderstorm activity — embedded CB, low-level wind shear/microburst risk on approach (Briefing §3.4). The coastal alignment also means at least one approach direction is flown over open water — brief accordingly, noting the two historical ditching-related accidents near this field.
- **Airspace / traffic:** Brazzaville FIR (FCCC) (Libreville is the local ACC/sector; the controlling FIR is Brazzaville, FCCC) — control type not confirmed, likely procedural; see [Brazzaville (FCCC) FIR Briefing](../../../../airspace/fir/africa/brazzaville-fccc.md) and [Africa — Airspace Briefing](../../../../airspace/africa.md).

---

## 6. Missed approach watch-items

- **Terrain-driven MAP notes:** Not a factor at this field — see §5.
- **Re-sequencing environment:** Not confirmed — single-runway field, no parallel/crossing-runway resequencing complexity.
- **Go-around traps:** Equatorial wet-season convective weather is the more likely driver of a go-around here than terrain or traffic density — brief accordingly in season, and be mindful of the over-water missed-approach segment on at least one runway direction.

---

## 7. Landing runway / LDA & braking / vacate

- **LDA by runway:** Not published / verify — working figure ~3,000 m per runway, no displaced-threshold data found (Briefing §7). 🟧
- **Braking / vacate:** Not published / verify — rapid-exit taxiway inventory not found. 🟧
- **Runway-excursion watch:** 🟥 Wet/contaminated-runway braking-action caution in the wet season; single runway means no reciprocal-direction option if conditions favour the other end.

---

## 8. Taxi-in routing to terminal & hot spots

- **Typical taxi-in by runway → terminal:** Not published / verify. 🟧
- **Hot spots / tight taxiways:** Not published / verify — cross-ref [Briefing §13](index.md). 🟧
- **Stand/gate notes:** Cross-ref [FOOL Dispatch §3](dispatch.md).

---

## 9. Arrival frequency sequence

- **Sequence:** Approach → Tower (118.7 MHz, tier-4) → Ground — full sequence not confirmed; reference [Briefing §8](index.md).
- **Approach/Departure control:** Not confirmed — facility name/frequency not found publicly. 🟧

---

## 10. Gotchas

- **No confirmed precision approach** — plan a visual/non-precision arrival as the default assumption until the current AIRAC procedure set is verified.
- **Over-water final segment on at least one runway direction** — brief this realistically; the field's coastal alignment and its documented ditching-accident history are a standing reminder, not a routine assumption to skip.
- **Single runway** — expect a full circuit/re-approach rather than a reciprocal-direction quick-swap if conditions change late.

---

## Open items (🟧 — confirm against AIP / current AIRAC)

- Approach/STAR inventory, transition level, LVP trigger, LDA/declared distances, taxi-in routing, hot spots, approach/departure control frequency — none confirmed in reachable sources.

> **Live data — pull at planning:** wx/METAR/TAF/TREND, NOTAM (runway/approach/navaid/lighting), ATIS config, ground-delay/flow status. Not stored in this durable file.

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim charts inform content but are not listed here.*

- OurAirports — https://ourairports.com/airports/FOOL/ , /runways.html , /frequencies.html (retrieved 2026-07-26).
- Wikipedia — "Léon-Mba International Airport" — https://en.wikipedia.org/wiki/Libreville_International_Airport (retrieved 2026-07-26).

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-26 | Built from national AIP/ASECNA; K Global fields from live VAMSYS; 4-page pack. |
