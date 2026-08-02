# OOSA — Salalah · Arrival Page

**OOSA / SLL** · Salalah, Dhofar Governorate, Oman · Middle East
**Version** v0.1 · **Updated** 2026-07-26 · **Status** Draft

> **Read-me:** Tactical arrival aid for the sim, not a chart. Companion to the [OOSA Briefing](index.md), [Dispatch](dispatch.md) and [Departure](departure.md) pages. STARs/approaches are listed **by name only or flagged not-yet-confirmed** — fly the charted current-AIRAC version; minima shown are pointers, always verify on the current chart. Static data only; live wx/NOTAM are pulled at planning. Open 🟧 items are in §Open items. Flag legend 🟥 restriction/hazard · 🟧 caution/unverified · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| Usual landing runway(s) | **07 or 25** — single runway, wind-driven selection; no preferential rule confirmed 🟧 |
| Usual approach | ILS and/or VOR/DME reported (aggregator summary of the eAIP) — not independently confirmed this build 🟧 |
| Config logic | Wind-driven; possible khareef-season seasonal bias not confirmed 🟧 |
| Transition level | Not published / verify 🟧 |
| LVP trigger | **Khareef monsoon (Jun–Sep)** — persistent low stratus/drizzle, coastal visibility often <500 m in July mornings; exact RVR/ceiling trigger not confirmed 🟧 |
| Missed-approach driver | Not confirmed as terrain-driven given coastal-plain siting; re-sequencing/weather is the more likely driver 🟧 |

---

## 2. STAR / transition selection

- **STARs (names only — verify current AIRAC):** Not confirmed in reachable research — pull the current-AIRAC STAR list at planning. 🟧
- **Selection by arrival direction / runway:** Not confirmed — single runway, expect wind-driven 07/25 selection with radar/procedural vectoring from Salalah Approach.
- **Transition to approach:** Not confirmed. 🟧
- **Speed / flow constraints on the STAR:** Not confirmed — standard 250 KIAS below FL100 (ICAO norm) assumed pending chart confirmation.

---

## 3. Descent & energy plan

- **Top-of-descent trigger:** Standard descent-profile planning; no field-specific TOD rule confirmed.
- **Speed control:** 250 KIAS below FL100 (ICAO norm) — confirm current chart.
- **Altitude constraints:** Not confirmed — verify chart. 🟧
- **Energy traps:** The main energy/planning trap at OOSA is **weather-driven** rather than terrain or traffic-density — a khareef-season arrival can encounter a rapid ceiling/visibility drop with limited warning; brief an early go-around/diversion decision point rather than pressing a late visual approach in marginal conditions.

---

## 4. Approach selection by runway

*Names only — verify minima on current AIRAC charts.*

| RWY | Approach (name) | LVP / CAT note | Minima pointer (verify AIRAC) |
|---|---|---|---|
| 07 | ILS and/or VOR/DME (reported) | Not independently confirmed; a search-index excerpt suggests CAT II capability — unverified 🟧 | Verify current chart |
| 25 | ILS and/or VOR/DME (reported) | Not independently confirmed; a search-index excerpt suggests CAT II capability — unverified 🟧 | Verify current chart |

- **LVP triggers:** Khareef-season (Jun–Sep) low ceiling/visibility is the routine seasonal trigger at OOSA; exact RVR/ceiling figures not confirmed from a primary source this build. 🟧

---

## 5. Approach hazards (terrain / CFIT / specific threats)

- **CFIT / terrain:** 🟧 The field sits on the flat Salalah coastal plain; the Dhofar escarpment (Jebel Qara massif, ~1,200 m) lies generally inland/north of the airport — regional terrain, not a confirmed close-in obstacle for the approach path itself, but exact bearing/distance from the field was not independently confirmed this build. Verify the MSA ring on the current chart — see [Briefing §3.1](index.md).
- **Specific threats:** 🟥 **Khareef-season (Jun–Sep) low stratus/drizzle** is the field's defining approach hazard — persistent coastal fog can reduce visibility below 500 m, especially July mornings. No wake, closely-spaced-parallel or offset-approach threat identified (single runway).
- **Airspace / traffic:** 🟩 Secondary/regional Omani gateway — traffic density is materially lower than the Gulf's major hubs outside the khareef tourism-season surge; **Muscat FIR (OOMM)** provides area control — see the [Middle East regional airspace brief](../../../../airspace/middle-east.md).

---

## 6. Missed approach watch-items

- **Terrain-driven MAP notes:** Not confirmed as a terrain-driven procedure given the coastal-plain siting — fly the published missed approach and verify on current chart.
- **Re-sequencing environment:** Traffic density is generally low outside the khareef peak; re-sequencing pressure is more likely a khareef-season phenomenon (seasonal capacity surge) than a standing year-round factor.
- **Go-around traps:** No specific go-around trap identified in reachable sources; weather (khareef-season low ceiling) is the operative go-around driver rather than a terrain or configuration trap.

---

## 7. Landing runway / LDA & braking / vacate

- **LDA by runway:** Not published / verify — declared distances not obtained from a primary source this build (see [Briefing §7](index.md)). Overall runway length (3,997 m) is ample for any K Global type regardless of the exact LDA figure. 🟧
- **Braking / vacate:** Not confirmed — rapid-exit taxiway detail not identified. 🟧
- **Runway-excursion watch:** 🟧 Khareef-season (Jun–Sep) persistent drizzle is the relevant wet-runway/braking-action consideration; no displaced threshold confirmed either way.

---

## 8. Taxi-in routing to terminal & hot spots

- **Typical taxi-in by runway → terminal:** Not confirmed — single-runway field, taxiway/terminal-approach routing not independently obtained this build. VAMSYS taxi-in/out fields are **n/a** for this field `[VAMSYS mirror 2026-07-26]`. 🟧
- **Hot spots / tight taxiways:** Not confirmed. 🟧
- **Stand/gate notes:** See [Dispatch §3](dispatch.md) — widebody/Code E-F stand allocation not confirmed for our operation.

---

## 9. Arrival frequency sequence

- **Sequence:** **Salalah Approach/Radar 119.10/126.25 → Salalah Tower 118.20/129.57 → Salalah Ground 124.02.** Take the assigned frequency and confirm current chart (frequencies from Briefing §8; not cross-checked against a primary AIP table). 🟧
- **Approach/Departure control:** **Salalah Approach/Radar** handles the terminal area; **Muscat FIR (OOMM)** hands off en route inbound — see the [Middle East regional airspace brief](../../../../airspace/middle-east.md). No dedicated Muscat (OOMM) FIR brief exists yet in this library. 🟧

---

## 10. Gotchas

- **Khareef season (Jun–Sep) can bring rapid, unforecast-feeling coastal fog/drizzle** — brief a go-around/diversion contingency, especially for a July morning arrival.
- **Single runway (07/25)** — no reciprocal-runway complexity, but no redundancy if it is unavailable.
- **Co-located military air base (RAFO Salalah)** — be aware of possible military traffic in the circuit.
- **Approach-type/CAT II claims are unverified** — do not assume CAT II minima are available without confirming on the current AIRAC chart.
- **Published operating-hours/curfew status is unresolved** — confirm current AD hours before planning a late/off-schedule arrival.

---

## Open items (🟧 — confirm against AIP / current AIRAC)

- Current-AIRAC STAR names and exact approach minima per runway.
- Approach ident/type and CAT II confirmation.
- Exact khareef-season LVP/CAT trigger RVR values.
- Rapid-exit taxiway/vacate detail and taxi-in routing.
- Transition level and altitude-constraint detail.

> **Live data — pull at planning:** wx/METAR/TAF/TREND, NOTAM (runway/approach/navaid/lighting), ATIS config, current khareef-season LVP/flow status. Not stored in this durable file.

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim charts inform content but are not listed here.*

- SkyVector — https://skyvector.com/airport/OOSA/Salalah-Airport (retrieved 2026-07-26). *Runway/communications data.*
- Wego Travel Blog — "Salalah Weather in Summer" — https://blog.wego.com/salalah-weather-in-summer/ (retrieved 2026-07-26). *Khareef visibility degradation detail — general climatology, not aviation MET source.*
- Tandfonline — "Geomorphology of the Jebel Qara and coastal plain of Salalah" — https://www.tandfonline.com/doi/full/10.1080/17445647.2019.1708488 (retrieved 2026-07-26). *Dhofar/Jebel Qara terrain context.*

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-26 | Built from national AIP; K Global fields from live VAMSYS; 4-page pack. |
