# EHEH — Eindhoven · Arrival Page

**EHEH / EIN** · Eindhoven, Noord-Brabant, Netherlands · Europe
**Version** v0.1 · **Updated** 2026-07-26 · **Status** Draft — provisional (LVNL eAIP not directly reachable this pass)

> **Read-me:** Tactical arrival aid for the sim, not a chart. Companion to the [EHEH Briefing](index.md), [Dispatch](dispatch.md) and [Departure](departure.md) pages. STARs/approaches are listed **by name only or flagged not-yet-confirmed** — fly the charted current-AIRAC version; minima shown are pointers, always verify on the current chart. Static data only; live wx/NOTAM are pulled at planning. Open 🟧 items are in §Open items. Flag legend 🟥 restriction/hazard · 🟧 caution/unverified · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| Usual landing runway(s) | **03 or 21** — wind-selected; single-runway field |
| Usual approach | ILS on 03/21, reported available from 2,000 ft; CAT sub-category not confirmed 🟧 |
| Config logic | Wind-driven direction selection only |
| Transition level | Not confirmed this pass 🟧 |
| LVP trigger | Not confirmed this pass — low-visibility procedures reported in use for safety/capacity 🟧 |
| Missed-approach driver | Traffic mix (joint civil/military), not terrain |

---

## 2. STAR / transition selection

- **STARs (names only — verify current AIRAC):** Not confirmed in reachable research pass — pull the current-AIRAC STAR list at planning. 🟧
- **Selection by arrival direction / runway:** Single-runway field — wind alone determines the active direction (03 or 21); **RAPCON South** (military-operated) assigns the transition.
- **Transition to approach:** Not confirmed this pass — verify the charted transition. 🟧
- **Speed / flow constraints on the STAR:** Published speed/altitude gates are pointers only — verify chart.

---

## 3. Descent & energy plan

- **Top-of-descent trigger:** Standard descent-profile planning; plan TOD to meet the first STAR/approach altitude gate.
- **Speed control:** 250 KIAS below FL100 (EU/ICAO norm) — confirm current chart.
- **Altitude constraints:** Key crossing constraints are pointers — fly the charted altitudes. Note the **1,500 ft AMSL minimum intercept altitude for a visual approach final** (§4), a hard planning number for this field.
- **Energy traps:** No distinctive energy trap identified beyond standard single-runway arrival planning and awareness of mixed civil/military traffic sequencing.

---

## 4. Approach selection by runway

*Names only — verify minima on current AIRAC charts.*

| RWY | Approach (name) | LVP / CAT note | Minima pointer (verify AIRAC) |
|---|---|---|---|
| 03 | ILS | Reported available from 2,000 ft 🟧 CAT sub-category not confirmed | verify current chart |
| 21 | ILS | As above 🟧 | verify current chart |

- **Visual approach:** Aircraft flying a visual approach **shall intercept the final approach leg at or above 1,500 ft AMSL**, specifically to minimise noise nuisance — a concrete, sourced procedural requirement at this field, not a generic recommendation.
- **LVP triggers:** Low-visibility procedures are reported in use "to guarantee aircraft safety and optimal use of ATC capacity"; exact trigger conditions/RVR not confirmed this pass. 🟧

---

## 5. Approach hazards (terrain / CFIT / specific threats)

- **CFIT / terrain:** 🟩 None identified. Flat Noord-Brabant countryside, no significant high terrain near the field or approach paths.
- **Specific threats:** 🟥 **Joint civil/military traffic mix** — RNLAF Air Mobility Command movements (A330 MRTT tanker/transport, C-130H Hercules) share the field and its single runway with a dense civil low-cost network; approach control is provided by the military-operated **RAPCON South** rather than a civil-only facility. Brief for an ATC-provision model and traffic mix that differs from a purely civil field.
- **Airspace / traffic:** 🟧 Traffic density is generally moderate for a regional field, but the military presence and coordination bodies (MCCE, EATC) hosted here mean transport/tanker traffic patterns may differ from a purely civil low-cost network — not independently quantified this pass.

---

## 6. Missed approach watch-items

- **Terrain-driven MAP notes:** No terrain driver identified — fly the published MAP and verify climb-gradient/turn on the current chart. 🟧
- **Re-sequencing environment:** Re-sequencing after a missed approach should account for the field's mixed civil/military traffic under military-operated approach control — confirm current sequencing expectations are not assumed identical to a civil-only field.
- **Go-around traps:** Not confirmed in reachable sources this pass. 🟧

---

## 7. Landing runway / LDA & braking / vacate

- **LDA by runway:** Not independently confirmed this pass — physical runway length 3,000 m with displaced thresholds reported (~250 m) both ends; exact declared LDA not obtained. 🟧 See [Briefing §7](index.md). **Note the runway is scheduled for widening as part of the 1 Feb – 19 Jul 2027 closure** — re-verify this table after that work completes.
- **Braking / vacate:** Rapid-exit taxiway detail not confirmed in reachable sources. 🟧
- **Runway-excursion watch:** 🟧 Displaced thresholds reported both ends — do not assume full 3,000 m LDA without verification.

---

## 8. Taxi-in routing to terminal & hot spots

- **Typical taxi-in by runway → terminal:** Single-runway field; civil terminal on the eastern side, military air base to the west. VAMSYS mirror gives a planning taxi-in time of **6 min** `[VAMSYS mirror 2026-07-26]`. A new east-side taxiway is planned as part of the 2027 runway-renovation project.
- **Hot spots / tight taxiways:** Not confirmed in reachable sources this pass. 🟧
- **Stand/gate notes:** See [Dispatch §3](dispatch.md) — civil terminal expansion (27,300 m² → 35,000 m²) is under construction; confirm current gate assignment with handling.

---

## 9. Arrival frequency sequence

- **Sequence:** **RAPCON South Approach 123.180 (military-operated) → Eindhoven Arrival 124.530 → Eindhoven Tower 131.005 → Eindhoven Ground 121.930.** Take the assigned frequency and confirm current chart. (Frequencies from Briefing §8.)
- **Approach/Departure control:** **RAPCON South** — a **military-operated** radar approach facility, within Amsterdam FIR (EHAA) — see [Europe airspace briefing](../../../../airspace/europe.md) 🟧 no dedicated EHAA FIR brief in-library yet. Confirm current procedures given the joint civil/military ATC-provision model.

---

## 10. Gotchas

- **Single runway, no configuration fallback** — a runway closure is a full-field closure.
- **CRITICAL — the field is scheduled for a FULL CLOSURE 1 February – 19 July 2027** for runway renovation — do not plan any arrival through this field in that window without reconfirming its status.
- **Approach control is military-operated (RAPCON South)** — a different ATC-provision model from a purely civil field; brief accordingly.
- **Visual-approach final must be intercepted at or above 1,500 ft AMSL** for noise mitigation — a concrete, sourced procedural minimum for this field.
- **De facto absence of scheduled night flights** — do not plan a late-night arrival without independent confirmation of current operating hours.
- **Displaced thresholds reported both ends (~250 m)** — confirm current-AIRAC declared distances before any low-margin performance calculation.

---

## Open items (🟧 — confirm against LVNL eAIP / current AIRAC)

- Current-AIRAC STAR names and exact approach minima per runway.
- Exact declared LDA for both runway directions (subject to change post-2027 widening).
- LVP/CAT trigger RVR values.
- Rapid-exit taxiway/vacate detail.
- Transition level.
- Confirm exact 2027 closure dates before any routing near that window.

> **Live data — pull at planning:** wx/METAR/TAF/TREND, NOTAM (runway/approach/navaid/lighting, military-activity notices), ATIS config/wind trend, current field-availability status ahead of the 2027 closure. Not stored in this durable file.

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim charts inform content but are not listed here.*

- **LVNL eAIP (AIP Netherlands)** — https://eaip.lvnl.nl/ — attempted direct fetch 2026-07-26; AD 2.EHEH did not resolve. Primary verification **PENDING**.
- Wikipedia — "Eindhoven Airport" — https://en.wikipedia.org/wiki/Eindhoven_Airport (retrieved 2026-07-26). *Joint civil/military status, RAPCON reference, MCCE/EATC.*
- OurAirports — https://ourairports.com/airports/EHEH/runways.html (retrieved 2026-07-26). *Runway/displaced-threshold data.*
- Eindhoven Airport — "Renovation of Eindhoven Air Base runway to start in February 2027" — https://www.eindhovenairport.nl/en/news-and-media/renovation-of-eindhoven-air-base-runway-to-start-in-february-2027 (retrieved 2026-07-26).

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-26 | Built from AIP Netherlands (LVNL); K Global fields from live VAMSYS; 4-page pack. |
