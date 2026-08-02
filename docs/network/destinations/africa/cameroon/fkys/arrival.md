# FKYS — Nsimalen · Arrival Page

**FKYS / NSI** · Yaoundé, Centre Region, Cameroon · Africa
**Version** v0.1 · **Updated** 2026-07-26 · **Status** Draft — provisional

> **Read-me:** Tactical arrival aid for the sim, not a chart. Companion to the [FKYS Briefing](index.md), Dispatch and Departure pages. STARs/approaches are listed **by name only** — fly the charted current-AIRAC version; minima shown are pointers, always verify on the current chart. Static data only; live wx/NOTAM are pulled at planning. Open 🟧 items are in §Open items. Flag legend 🟥 restriction/hazard · 🟧 caution/unverified · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| Usual landing runway(s) | 01 or 19 — single runway, wind-selected 🟧 |
| Usual approach | Not published / verify — no ILS/RNP procedure confirmed 🟧 |
| Config logic | Wind-driven |
| Transition level | Not published / verify 🟧 |
| LVP trigger | Not published / verify — no confirmed low-vis capability 🟧 |
| Missed-approach driver | Terrain (surrounding hilly plateau, unconfirmed close-in) and weather — see §5 |

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
- **Altitude constraints:** Not published / verify — factor in the 2,278 ft field elevation when planning the descent profile. 🟧
- **Energy traps:** Undulating plateau terrain plus a moderate field elevation reduces the margin for a late, steep correction — plan a stabilised approach with normal margins rather than relying on last-minute adjustment.

---

## 4. Approach selection by runway

*Names only — verify minima on current AIRAC charts.*

| RWY | Approach (name) | LVP / CAT note | Minima pointer (verify AIRAC) |
|---|---|---|---|
| 01 | Not published / verify | 🟧 No ILS/RNP confirmed | Verify current chart |
| 19 | Not published / verify | 🟧 No ILS/RNP confirmed | Verify current chart |

---

## 5. Approach hazards (terrain / CFIT / specific threats)

- **CFIT / terrain:** 🟧 Yaoundé's undulating plateau/hilly setting surrounds the airport site; no confirmed close-in obstacle or MSA figure was found in reachable sources — verify the current area chart before flying any non-standard approach or visual manoeuvring at low altitude. See [Briefing §3.1](index.md).
- **Specific threats:** ITCZ-band convective weather in season (embedded CB, turbulence) — see [Briefing §3.4](index.md).
- **Airspace / traffic:** Brazzaville FIR (FCCC) (Douala is the local ACC/sector; the controlling FIR is Brazzaville, FCCC) — control type not confirmed, likely procedural; see [Brazzaville (FCCC) FIR Briefing](../../../../airspace/fir/africa/brazzaville-fccc.md) and [Africa — Airspace Briefing](../../../../airspace/africa.md).

---

## 6. Missed approach watch-items

- **Terrain-driven MAP notes:** 🟧 Not confirmed as close-in, but the surrounding hilly terrain means a missed approach should not be assumed to be over flat ground in every direction — verify the charted missed-approach path and MSA.
- **Re-sequencing environment:** Not confirmed — single-runway field, no parallel/crossing-runway resequencing complexity.
- **Go-around traps:** Combination of moderate field elevation and undulating terrain — brief the missed-approach climb gradient/heading precisely rather than assuming a generic flat-terrain go-around.

---

## 7. Landing runway / LDA & braking / vacate

- **LDA by runway:** Not published / verify — working figure ~3,400 m per runway, no displaced-threshold data found (Briefing §7). 🟧
- **Braking / vacate:** Not published / verify — rapid-exit taxiway inventory not found. 🟧
- **Runway-excursion watch:** 🟧 Seasonal ITCZ-band rain is a plausible braking-action consideration; single runway means no reciprocal-direction option if conditions favour the other end.

---

## 8. Taxi-in routing to terminal & hot spots

- **Typical taxi-in by runway → terminal:** Not published / verify. 🟧
- **Hot spots / tight taxiways:** Not published / verify — cross-ref [Briefing §13](index.md). 🟧
- **Stand/gate notes:** Cross-ref [FKYS Dispatch §3](dispatch.md).

---

## 9. Arrival frequency sequence

- **Sequence:** Approach (121.3 MHz, tier-4) → Tower (119.1 MHz, tier-4) → Ground — full sequence not confirmed; reference [Briefing §8](index.md).
- **Approach/Departure control:** Nsimalen Approach, 121.3 MHz (tier-4, not AIP-cross-checked). 🟧

---

## 10. Gotchas

- **No confirmed precision approach** — plan a visual/non-precision arrival as the default assumption until the current AIRAC procedure set is verified.
- **Undulating plateau terrain around the field** — not confirmed as close-in, but do not assume flat surrounding terrain; verify the MSA/area chart.
- **Single runway** — expect a full circuit/re-approach rather than a reciprocal-direction quick-swap if conditions change late.

---

## Open items (🟧 — confirm against AIP / current AIRAC)

- Approach/STAR inventory, transition level, LVP trigger, LDA/declared distances, taxi-in routing, hot spots — none confirmed in reachable sources.
- Terrain/MSA detail around the field — not confirmed as close-in or benign; verify against the current area chart.

> **Live data — pull at planning:** wx/METAR/TAF/TREND, NOTAM (runway/approach/navaid/lighting), ATIS config, ground-delay/flow status. Not stored in this durable file.

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim charts inform content but are not listed here.*

- OurAirports — https://ourairports.com/airports/FKYS/ , /runways.html , /frequencies.html (retrieved 2026-07-26).
- Wikipedia — "Yaoundé Nsimalen International Airport" — https://en.wikipedia.org/wiki/Yaound%C3%A9_Nsimalen_International_Airport (retrieved 2026-07-26).

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-26 | Built from national AIP/ASECNA; K Global fields from live VAMSYS; 4-page pack. |
