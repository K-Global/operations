# LCLK — Larnaca International · Arrival Page

**LCLK / LCA** · Larnaca, Cyprus · Europe
**Version** v0.1 · **Updated** 2026-07-26 · **Status** Draft

> **Read-me:** Tactical arrival aid for the sim, not a chart. Companion to the [LCLK Briefing](index.md), [Dispatch](dispatch.md) and [Departure](departure.md) pages. STARs/approaches are listed **by name only or flagged not-yet-confirmed** — fly the charted current-AIRAC version; minima shown are pointers, always verify on the current chart. Static data only; live wx/NOTAM are pulled at planning. Open 🟧 items are in §Open items. Flag legend 🟥 restriction/hazard · 🟧 caution/unverified · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| Usual landing runway(s) | **04 or 22** — single-runway field; wind-dependent selection, exact criteria not sourced 🟧 |
| Usual approach | Not published / verify — commonly associated with an ILS on RWY 22 in general aviation references, but not confirmed from a primary source 🟧 |
| Config logic | Wind-driven; no published preferential-runway rule confirmed |
| Transition level | Not published / verify 🟧 |
| LVP trigger | Not published / verify — low-visibility events are not expected to be a defining hazard at this coastal Mediterranean field, but no trigger/procedure is confirmed 🟧 |
| Missed-approach driver | Not sourced — terrain is not the driver (flat coastal site) |

---

## 2. STAR / transition selection

- **STARs (names only — verify current AIRAC):** Not published / verify. 🟧
- **Selection by arrival direction / runway:** Single runway 04/22; selection is wind-driven between the two directions, exact criteria not sourced. 🟧
- **Transition to approach:** Not published / verify. 🟧
- **Speed / flow constraints on the STAR:** Not published / verify — 250 KIAS below FL100 (ICAO/EU norm) assumed; confirm current chart.

---

## 3. Descent & energy plan

- **Top-of-descent trigger:** Standard descent-profile planning; no LCLK-specific constraint identified. Plan TOD to meet the first STAR altitude gate once confirmed on the current chart.
- **Speed control:** STAR speed gates and 250 KIAS below FL100 (ICAO/EU norm) — confirm current chart.
- **Altitude constraints:** Not published / verify — fly the charted altitudes once the current-AIRAC STAR is obtained. 🟧
- **Energy traps:** A late runway-direction change (04↔22) driven by a coastal sea-breeze wind shift (Briefing §14) is the main energy trap anticipated at this field; no other LCLK-specific trap is sourced.

---

## 4. Approach selection by runway

*Names only — verify minima on current AIRAC charts.*

| RWY | Approach (name) | LVP / CAT note | Minima pointer (verify AIRAC) |
|---|---|---|---|
| 22 | Not published / verify — commonly reported as an ILS in general references 🟧 | Not confirmed | Verify current chart |
| 04 | Not published / verify 🟧 | Not confirmed | Verify current chart |

- **LVP triggers:** Not published / verify. 🟧

---

## 5. Approach hazards (terrain / CFIT / specific threats)

- **CFIT / terrain:** 🟩 None. Flat coastal site at 8 ft AMSL; no close-in high terrain on any approach path (Briefing §3.1). The Troodos range lies well inland and is not a factor.
- **Specific threats:** 🟧 **Coastal sea-breeze wind effects** — expect possible wind-direction shifts and crosswind/gust components given there is only one runway orientation with no crosswind-relief alternative (Briefing §3.4). No wake, closely-spaced-parallel, or offset-approach threat exists — single-runway field.
- **Airspace / traffic:** 🟧 LCLK sits in the **Nicosia FIR (LCCC)**; no dedicated FIR brief exists in this library yet (Briefing §3.2/§18) — traffic density/procedural-vs-radar picture for the approach environment is not sourced.

---

## 6. Missed approach watch-items

- **Terrain-driven MAP notes:** Not applicable — flat coastal site, no terrain driver (Briefing §3.1).
- **Re-sequencing environment:** Not published / verify — traffic/airspace density picture for a go-around is not sourced. 🟧
- **Go-around traps:** No LCLK-specific trap identified beyond standard config/flow awareness; confirm on current chart.

---

## 7. Landing runway / LDA & braking / vacate

- **LDA by runway:** RWY 04 ≈2,994 m (no displacement published); RWY 22 ≈2,819 m accounting for the 175 m (575 ft) displaced threshold — both figures sourced to OurAirports, not independently confirmed against a primary declared-distance table. 🟧 See Briefing §7.
- **Braking / vacate:** Not published / verify — no rapid-exit taxiway detail confirmed. 🟧
- **Runway-excursion watch:** 🟧 Mind the reduced LDA on RWY 22 (displaced threshold); no contamination/braking-action data confirmed.

---

## 8. Taxi-in routing to terminal & hot spots

- **Typical taxi-in by runway → terminal:** Not published / verify — single-runway field with a comparatively simple taxiway layout expected; VAMSYS mirror gives a planning taxi-in time of **9 min** `[VAMSYS mirror 2026-07-26]`.
- **Hot spots / tight taxiways:** Not published / verify. 🟧
- **Stand/gate notes:** See [Dispatch §3](dispatch.md) — no widebody/Code-E stand or terminal pier assignment confirmed for our operation.

---

## 9. Arrival frequency sequence

- **Sequence:** **Nicosia ACC (LCCC, frequency not published/verify) → Larnaca Approach 121.2 → Larnaca Tower 119.4 → Ground (not published/verify).** Take the assigned frequency and confirm current chart. (Tower/Approach frequencies from Briefing §8, sourced to a single tier-4 listing.) 🟧
- **Approach/Departure control:** **Larnaca Approach** (121.2) is indicated as the terminal approach facility by a published frequency; **Nicosia ACC (LCCC)** hands off en route inbound — no dedicated Nicosia FIR brief exists in this library yet (Briefing §3.2/§18). 🟧

---

## 10. Gotchas

- **Single runway (04/22) — no redundancy and no crosswind-relief alternative** — any obstruction closes the field outright.
- **RWY 22's threshold is displaced 175 m (575 ft)** — mind the reduced LDA on that direction.
- **Coastal sea-breeze wind shifts** can drive a late runway-direction change — watch the ATIS wind trend.
- **Summer heat, not terrain, is this field's operative performance consideration** — brief accordingly for a heavier/longer-range type.
- **No STAR/approach-name/minima data is confirmed in this pack** — treat §2/§4 as pull-at-planning items, not settled reference.

---

## Open items (🟧 — confirm against AIP / current AIRAC)

- Current-AIRAC STAR names and approach names/minima per runway.
- Transition level and any LVP trigger/procedure.
- Rapid-exit taxiway/vacate detail and taxi-in routing to the terminal.
- Nicosia ACC (LCCC) sector/frequency structure and Ground frequency (not published / verify).
- Traffic/airspace density picture for the approach and missed-approach environment.

> **Live data — pull at planning:** wx/METAR/TAF/TREND, NOTAM (runway/approach/navaid/lighting — single-runway field, any closure is airport-closing), ATIS config/wind trend. Not stored in this durable file.

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim charts inform content but are not listed here.*

- **DCA Cyprus / national eAIP** — primary source of record for AD 2 LCLK; **not available from a reachable public source** — see the [LCLK Briefing](index.md) Sources section and §18 for detail.
- OurAirports — https://ourairports.com/airports/LCLK/runways.html , /frequencies.html (retrieved 2026-07-25). *Runway/displaced-threshold and Tower/Approach frequency cross-check.*

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-26 | Built from national AIP; K Global fields from live VAMSYS; 4-page pack. |
