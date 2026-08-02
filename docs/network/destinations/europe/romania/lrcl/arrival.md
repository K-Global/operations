# LRCL — Avram Iancu · Arrival Page

**LRCL / CLJ** · Cluj-Napoca, Romania · Europe
**Version** v0.1 · **Updated** 2026-07-26 · **Status** Draft

> **Read-me:** Tactical arrival aid for the sim, not a chart. Companion to the [LRCL Briefing](index.md), [Dispatch](dispatch.md) and [Departure](departure.md) pages. STARs/approaches are listed **by name only or flagged not-yet-confirmed** — fly the charted current-AIRAC version; minima shown are pointers, always verify on the current chart. Static data only; live wx/NOTAM are pulled at planning. Open 🟧 items are in §Open items. Flag legend 🟥 restriction/hazard · 🟧 caution/unverified · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| Usual landing runway(s) | **07 or 25** — single runway, direction per wind |
| Usual approach | ILS RWY 25; RNAV (GNSS) RWY 07/25; VOR RWY 07 |
| Config logic | Wind-driven; no preferential-runway program confirmed |
| Transition level | By QNH; transition altitude not confirmed — verify current chart 🟧 |
| LVP trigger | Not confirmed 🟧 |
| Missed-approach driver | Single-runway sequencing; terrain not independently ruled out this pass |

---

## 2. STAR / transition selection

- **STARs (names only — verify current AIRAC):** An RNAV Arrival Chart exists for both RWY 07 and RWY 25 per the AIP chart index; specific STAR names not confirmed this pass. 🟧
- **Selection by arrival direction / runway:** Single runway — direction selected by wind; no confirmed preferential logic.
- **Transition to approach:** Expect a STAR-to-ILS (RWY 25) or STAR-to-RNAV (either runway) transition with Napoca Approach vectoring; verify the charted transition.
- **Speed / flow constraints on the STAR:** Published speed/altitude gates are pointers only — verify chart.

---

## 3. Descent & energy plan

- **Top-of-descent trigger:** Standard descent-profile planning; plan TOD to meet the first STAR altitude gate.
- **Speed control:** STAR speed gates and 250 KIAS below FL100 (EU/ICAO norm) — confirm current chart.
- **Altitude constraints:** Key STAR crossing constraints are pointers — fly the charted altitudes.
- **Energy traps:** 🟥 The field's **documented January 2016 runway-excursion event** followed an extended flare and long touchdown (~700 m past the RWY 25 threshold) on a wet-snow-contaminated runway — brief firm energy management, a defined touchdown-zone target, and a low threshold for go-around, particularly in winter contamination conditions.

---

## 4. Approach selection by runway

*Names only — verify minima on current AIRAC charts.*

| RWY | Approach (name) | LVP / CAT note | Minima pointer (verify AIRAC) |
|---|---|---|---|
| 07 | RNAV (GNSS); VOR | CAT not confirmed 🟧 | Displaced threshold (787 ft/~240 m) reduces LDA — verify current chart |
| 25 | ILS; RNAV (GNSS) | Historically CAT I (2001) upgraded to CAT II (2009, per Wikipedia) — **not reconfirmed as current** 🟧 | verify current chart |

---

## 5. Approach hazards (terrain / CFIT / specific threats)

- **CFIT / terrain:** 🟧 Field elevation 1,039 ft in the Transylvanian basin — no specific close-in high-terrain hazard identified in reachable sources, but **not independently verified against an MSA/area chart** this pass. Treat with more caution than the flat-plain Bucharest fields until confirmed.
- **Specific threats:** 🟥 Winter runway contamination is the field's documented hazard — see the January 2016 wet-snow excursion precedent (§3 above). Single-runway field: no parallel-runway wake/spacing consideration, but no reciprocal-direction alternative either.
- **Airspace / traffic:** 🟧 Regional-scale traffic under Napoca Approach; control-type (radar vs procedural) not independently confirmed.

---

## 6. Missed approach watch-items

- **Terrain-driven MAP notes:** Not independently confirmed this pass — verify the published MAP and climb-gradient/turn on the current chart given the Transylvanian-basin terrain context. 🟧
- **Re-sequencing environment:** Single-runway field — a go-around returns traffic into a sequential (not parallel) environment under Napoca Approach.
- **Go-around traps:** Winter contamination conditions (§3) are the field's standing go-around trigger consideration — maintain a low threshold to go around rather than accept a long or firm landing on a contaminated runway.

---

## 7. Landing runway / LDA & braking / vacate

- **LDA by runway:** Nominal 2,040 m, **reduced on RWY 07 by a 787 ft (~240 m) displaced threshold** — confirm the current published LDA before planning a landing on 07. 🟧
- **Braking / vacate:** Rapid-exit taxiway detail not confirmed; the former 08/26 runway now serves as a taxiway (§Briefing §7). 🟧
- **Runway-excursion watch:** 🟥 Documented January 2016 precedent (wet-snow contamination, extended flare, long touchdown, runway excursion, no injuries) — this is the field's standing runway-excursion watch-item. Confirm current braking-action reporting and maintain a conservative landing-distance margin in winter conditions.

---

## 8. Taxi-in routing to terminal & hot spots

- **Typical taxi-in by runway → terminal:** After landing, taxi in via the former 08/26 runway (now a taxiway) to the single terminal apron; VAMSYS mirror gives a planning taxi-in time of **6 min** `[VAMSYS mirror 2026-07-26]`, consistent with the field's compact layout.
- **Hot spots / tight taxiways:** None specifically identified in reachable sources — not independently verified. 🟧
- **Stand/gate notes:** See [Dispatch §3](dispatch.md) — single terminal, 12 gates post-2024 extension; widebody stand capability not confirmed.

---

## 9. Arrival frequency sequence

- **Sequence:** **Napoca Approach 119.680 (sector-specific alternates reported) → Cluj Tower 118.700 (or 134.400 alternate).** Take the assigned frequency and confirm current chart. (Frequencies from Briefing §8 — SkyVector-sourced, tier-4, not primary-confirmed.)
- **Approach/Departure control:** **Napoca Approach** provides terminal service; **București ACC (LRBB)** hands off en route inbound — no dedicated FIR brief yet published, see [Europe airspace brief](../../../../airspace/europe.md). 🟧

---

## 10. Gotchas

- **Single runway, no on-field alternative** — a runway closure or disabled aircraft has no reciprocal-direction or parallel-runway workaround.
- **RWY 07's displaced threshold (787 ft/~240 m)** reduces available landing distance from that direction.
- **Documented winter contamination excursion precedent (Jan 2016)** — do not accept an extended flare or long touchdown on a contaminated runway; go around early if the touchdown zone is missed.
- Field elevation and Transylvanian terrain context are higher/hillier than the Bucharest fields — verify the current MSA chart rather than assuming a flat-plain profile.

---

## Open items (🟧 — confirm against AIP / current AIRAC)

- Current-AIRAC STAR names and exact approach minima per runway.
- Transition altitude/level and current ILS category on RWY 25.
- Current RWY 07 displaced-threshold distance and full declared-distance table.
- MSA/terrain profile — not independently verified against an area chart this pass.

> **Live data — pull at planning:** wx/METAR/TAF/TREND, NOTAM (runway/approach/navaid/lighting), ATIS config/wind trend. Not stored in this durable file.

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim charts inform content but are not listed here.*

- SkyVector — https://skyvector.com/airport/LRCL/Avram-Iancu-Airport (retrieved 2026-07-26). *Frequencies, displaced threshold — tier-4, not primary-confirmed.*
- Wikipedia — "Cluj International Airport" — https://en.wikipedia.org/wiki/Cluj_International_Airport (retrieved 2026-07-26). *2016 runway-excursion incident, ILS category history.*
- AIP Romania (ROMATSA / AIS Romania) AIRAC AIP AMDT 13/25, WEF 2025-11-27 — https://www.aisro.ro/files/amdt/LR_Amdt_A_2025_13_en.pdf (retrieved 2026-07-26). *Approach-name chart index.*

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-26 | Built from AIP Romania (ROMATSA); K Global fields from live VAMSYS; 4-page pack. |
