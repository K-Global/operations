# FCBB — Maya-Maya · Arrival Page

**FCBB / BZV** · Brazzaville, Republic of the Congo · Africa
**Version** v0.1 · **Updated** 2026-07-26 · **Status** Draft — public-source/VAMSYS build, AIP not independently reachable this pass

> **Read-me:** Tactical arrival aid for the sim, not a chart. Companion to the [FCBB Briefing](index.md), [Dispatch](dispatch.md) and [Departure](departure.md) pages. STARs/approaches are listed **by name only or flagged not-yet-confirmed** — fly the charted current-AIRAC version; minima shown are pointers, always verify on the current chart. Static data only; live wx/NOTAM are pulled at planning. Open 🟧 items are in §Open items. Flag legend 🟥 restriction/hazard · 🟧 caution/unverified · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| Usual landing runway(s) | Not published / verify — single runway 05/23 🟧 |
| Usual approach | Not confirmed in reachable sources 🟧 |
| Config logic | Not confirmed; wind-driven assumption pending local data 🟧 |
| Transition level | Not published / verify 🟧 |
| LVP trigger | Not published / verify 🟧 |
| Missed-approach driver | Not terrain (flat basin) — weather/traffic-coordination is the plausible driver |

---

## 2. STAR / transition selection

- **STARs (names only — verify current AIRAC):** Not confirmed in reachable research pass — pull the current-AIRAC STAR list at planning. 🟧
- **Selection by arrival direction / runway:** Not confirmed. 🟧
- **Transition to approach:** Not confirmed — likely procedural (non-radar) per the regional default; confirm locally. 🟧
- **Speed / flow constraints on the STAR:** Not confirmed. 🟧

---

## 3. Descent & energy plan

- **Top-of-descent trigger:** Standard descent-profile planning; no field-specific constraint confirmed. 🟧
- **Speed control:** 250 KIAS below FL100 (ICAO norm) assumed — confirm current chart.
- **Altitude constraints:** Not confirmed — fly the charted altitudes. 🟧
- **Energy traps:** No specific energy trap confirmed; the field's historical weather-related accident record ([Briefing §3.4](index.md)) argues for conservative energy management in marginal visibility/rain.

---

## 4. Approach selection by runway

*Names only — verify minima on current AIRAC charts.*

| RWY | Approach (name) | LVP / CAT note | Minima pointer (verify AIRAC) |
|---|---|---|---|
| 05 | Not confirmed in reachable sources 🟧 | Not confirmed | verify current chart |
| 23 | Not confirmed in reachable sources 🟧 | Not confirmed | verify current chart |

- **LVP triggers:** Not published / verify. 🟧

---

## 5. Approach hazards (terrain / CFIT / specific threats)

- **CFIT / terrain:** 🟩 None. Flat Congo-basin lowland at 1,048 ft AMSL on the north bank of the Congo/Malebo Pool — no close-in high terrain relevant to any arrival path.
- **Specific threats:** 🟧 The field's own accident history includes a **2009 cargo An-12 crash on approach** (from Pointe-Noire) and a **2012 cargo Il-76 crash short of the runway in bad weather**, with substantial ground casualties in a residential area — both are real, sourced reminders that this field's marginal-weather approach environment carries genuine historical risk. Brief a conservative stabilised-approach/go-around discipline in rain or reduced visibility.
- **Airspace / traffic:** 🟧 FCBB sits only **~13.7 NM from FZAA (Kinshasa)** under a shared cross-border "Brazzaville–Kinshasa Pool" TMA spanning two ANSPs (ASECNA/RVA) — expect coordination workload atypical of a single-agency approach environment; confirm the current inter-agency procedure.

---

## 6. Missed approach watch-items

- **Terrain-driven MAP notes:** Not applicable — flat basin, no terrain driver.
- **Re-sequencing environment:** The shared cross-border TMA with FZAA (§5) may add sequencing complexity on a go-around — confirm current procedure.
- **Go-around traps:** No specific trap confirmed; the field's weather-accident history argues for a firm go-around decision rather than pressing a marginal approach.

---

## 7. Landing runway / LDA & braking / vacate

- **LDA by runway:** 3,300 m (05/23) — not independently split from TORA/TODA/ASDA this pass ([Briefing §7](index.md)); ample for narrowbody/regional-widebody types but the shortest LDA of the three fields in this build. 🟧
- **Braking / vacate:** Rapid-exit taxiway detail not confirmed — confirm with Tower/Ground on the day. 🟧
- **Runway-excursion watch:** 🟧 No contamination/displaced-threshold data confirmed; treat the 2012 landing-short accident (bad weather) as a standing reminder to brief a stabilised approach and a firm missed-approach decision point.

---

## 8. Taxi-in routing to terminal & hot spots

- **Typical taxi-in by runway → terminal:** Not confirmed — single terminal, single runway; confirm with Ground on the day. VAMSYS mirror gives a planning taxi-in time of **6 min** `[VAMSYS mirror 2026-07-26]`.
- **Hot spots / tight taxiways:** Not published / verify. 🟧 Note the pre-2010 original runway alignment survives as a parallel taxiway ([Briefing §13](index.md)).
- **Stand/gate notes:** See [Dispatch §3](dispatch.md) — stand/gate detail not confirmed this pass.

---

## 9. Arrival frequency sequence

- **Sequence:** **Brazzaville Centre (FCCC/ASECNA) → Brazzaville CON/TWR 121.1 MHz** (single frequency in the reachable tier-4 source — [Briefing §8](index.md)). Take the assigned frequency and confirm current chart. 🟧
- **Approach/Departure control:** Not confirmed — no dedicated approach-control frequency found in reachable sources; treat as procedural/tower-worked pending confirmation. 🟧

---

## 10. Gotchas

- **Single runway (05/23), 3,300 m** — the shortest LDA of the three regional fields; brief accordingly for a heavy/long-haul arrival.
- **FCBB sits ~13.7 NM from FZAA (Kinshasa)** under a shared cross-border TMA — expect a busier, more coordination-heavy terminal environment than the field's size alone would suggest.
- **Historical weather-related landing accidents at this field** (2009, 2012) — brief a firm stabilised-approach and go-around discipline in rain/reduced visibility.
- **The pre-2010 original runway survives as a parallel taxiway** — do not mistake it for a usable second runway on arrival.

---

## Open items (🟧 — confirm against AIP / current AIRAC)

- Current-AIRAC STAR names and exact approach minima per runway.
- Rapid-exit taxiway/vacate detail.
- Approach-control frequency and the cross-border TMA coordination procedure with FZAA.

> **Live data — pull at planning:** wx/METAR/TAF/TREND, NOTAM (runway/approach/navaid/lighting), ATIS config/wind trend, current TMA-coordination status. Not stored in this durable file.

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim charts inform content but are not listed here.*

- OurAirports — https://ourairports.com/airports/FCBB/ (retrieved 2026-07-25).
- Wikipedia — "Maya-Maya Airport" — https://en.wikipedia.org/wiki/Maya-Maya_Airport (retrieved 2026-07-25). *Accident history.*
- ASECNA eAIP (ENR 0.6 index) — https://aim.asecna.aero/html/eAIP/FR-_00ENR-0.6.eAIP-fr-FR.html (retrieved 2026-07-25).

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-26 | Built from national AIP; K Global fields from live VAMSYS; 4-page pack. |
