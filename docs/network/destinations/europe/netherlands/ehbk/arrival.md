# EHBK — Maastricht Aachen · Arrival Page

**EHBK / MST** · Beek, Limburg, Netherlands · Europe
**Version** v0.1 · **Updated** 2026-07-26 · **Status** Draft — provisional (LVNL eAIP not directly reachable this pass)

> **Read-me:** Tactical arrival aid for the sim, not a chart. Companion to the [EHBK Briefing](index.md), [Dispatch](dispatch.md) and [Departure](departure.md) pages. STARs/approaches are listed **by name only or flagged not-yet-confirmed** — fly the charted current-AIRAC version; minima shown are pointers, always verify on the current chart. Static data only; live wx/NOTAM are pulled at planning. Open 🟧 items are in §Open items. Flag legend 🟥 restriction/hazard · 🟧 caution/unverified · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| Usual landing runway(s) | **03 or 21** — wind-selected; single-runway field |
| Usual approach | ILS CAT III on RWY 21 (upgraded 2008); RWY 03 approach category not confirmed 🟧 |
| Config logic | Wind-driven direction selection only |
| Transition level | Not confirmed this pass 🟧 |
| LVP trigger | Not confirmed this pass — CAT III infrastructure exists on RWY 21 🟧 |
| Missed-approach driver | Traffic density is low; no terrain driver identified |

---

## 2. STAR / transition selection

- **STARs (names only — verify current AIRAC):** Not confirmed in reachable research pass — pull the current-AIRAC STAR list at planning. 🟧
- **Selection by arrival direction / runway:** Single-runway field — wind alone determines the active direction (03 or 21); Beek Approach assigns the transition.
- **Transition to approach:** Not confirmed this pass — verify the charted transition. 🟧
- **Speed / flow constraints on the STAR:** Published speed/altitude gates are pointers only — verify chart.

---

## 3. Descent & energy plan

- **Top-of-descent trigger:** Standard descent-profile planning; plan TOD to meet the first STAR/approach altitude gate.
- **Speed control:** 250 KIAS below FL100 (EU/ICAO norm) — confirm current chart.
- **Altitude constraints:** Key crossing constraints are pointers — fly the charted altitudes.
- **Energy traps:** No distinctive energy trap identified for this field beyond standard single-runway arrival planning.

---

## 4. Approach selection by runway

*Names only — verify minima on current AIRAC charts.*

| RWY | Approach (name) | LVP / CAT note | Minima pointer (verify AIRAC) |
|---|---|---|---|
| 21 | ILS | **CAT III** (upgraded 2008) 🟧 exact minima not confirmed | verify current chart |
| 03 | Not confirmed 🟧 | Approach category not confirmed | verify current chart |

- **LVP triggers:** RWY 21's CAT III capability implies a mature low-visibility regime; exact trigger conditions/RVR values not confirmed this pass. 🟧

---

## 5. Approach hazards (terrain / CFIT / specific threats)

- **CFIT / terrain:** 🟩 None identified. Rolling South Limburg countryside, no significant high terrain near the field or approach paths.
- **Specific threats:** No distinctive specific threat identified beyond standard single-runway-field considerations.
- **Airspace / traffic:** 🟩 Low density relative to the national hubs; the on-field **Maastricht UAC (MUAC)** facility manages upper airspace across Benelux/NW Germany but is not a source of local terminal-area complexity.

---

## 6. Missed approach watch-items

- **Terrain-driven MAP notes:** No terrain driver identified — fly the published MAP and verify climb-gradient/turn on the current chart. 🟧
- **Re-sequencing environment:** Low-density field; re-sequencing after a missed approach is not expected to be a significant factor outside the Feb–Jul 2027 Eindhoven-closure period (§Briefing §4), when traffic may be temporarily elevated.
- **Go-around traps:** Not confirmed in reachable sources this pass. 🟧

---

## 7. Landing runway / LDA & braking / vacate

- **LDA by runway:** Not independently confirmed this pass — physical runway length 2,750 m with displaced thresholds reported (~250 m) both ends; exact declared LDA not obtained. 🟧 See [Briefing §7](index.md).
- **Braking / vacate:** Rapid-exit taxiway detail not confirmed in reachable sources. 🟧
- **Runway-excursion watch:** 🟧 Displaced thresholds reported both ends — do not assume full 2,750 m LDA without verification; confirm before any low-margin performance calculation.

---

## 8. Taxi-in routing to terminal & hot spots

- **Typical taxi-in by runway → terminal:** Single-runway field with a compact taxiway layout; VAMSYS mirror gives a planning taxi-in time of **6 min** `[VAMSYS mirror 2026-07-26]`.
- **Hot spots / tight taxiways:** Not confirmed in reachable sources this pass. 🟧
- **Stand/gate notes:** See [Dispatch §3](dispatch.md) — passenger terminal vs cargo terminal assignment depends on the nature of the movement.

---

## 9. Arrival frequency sequence

- **Sequence:** **Beek Approach 120.205 → Beek Tower 119.480 → Beek Clearance Delivery/Ground 121.830.** Take the assigned frequency and confirm current chart. (Frequencies from Briefing §8.)
- **Approach/Departure control:** **Beek Approach** (LVNL) is the local terminal facility within Amsterdam FIR (EHAA) — see [Europe airspace briefing](../../../../airspace/europe.md) 🟧 no dedicated EHAA FIR brief in-library yet. The on-field **Maastricht UAC (MUAC)** handles upper airspace, not local approach control.

---

## 10. Gotchas

- **Single runway, no configuration fallback** — a runway closure is a full-field closure.
- **Displaced thresholds reported both ends (~250 m)** — do not assume full 2,750 m LDA without current-AIRAC confirmation.
- **RWY 21 CAT III is the field's primary low-visibility capability** — confirm the assigned runway/approach pairing before planning a low-vis arrival; RWY 03's approach category is unconfirmed.
- **Materially busier field expected Feb–Jul 2027** while Eindhoven Airport is closed for runway renovation and Transavia/TUI fly Netherlands relocate flights here — expect more traffic/stand competition in that window.
- **Reported night curfew (23:00–06:00)** with a limited cargo-movement allowance — a delayed arrival risks falling outside the confirmed allowance; verify current terms before planning a late arrival.

---

## Open items (🟧 — confirm against LVNL eAIP / current AIRAC)

- Current-AIRAC STAR names and exact approach minima per runway.
- Exact declared LDA for both runway directions.
- LVP/CAT III trigger RVR values.
- Rapid-exit taxiway/vacate detail.
- Transition level.

> **Live data — pull at planning:** wx/METAR/TAF/TREND, NOTAM (runway/approach/navaid/lighting), ATIS config/wind trend. Not stored in this durable file.

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim charts inform content but are not listed here.*

- **LVNL eAIP (AIP Netherlands)** — https://eaip.lvnl.nl/ — attempted direct fetch 2026-07-26; AD 2.EHBK did not resolve. Primary verification **PENDING**.
- Wikipedia — "Maastricht Aachen Airport" — https://en.wikipedia.org/wiki/Maastricht_Aachen_Airport (retrieved 2026-07-26). *ILS/CAT III upgrade history (2008), MUAC location.*
- OurAirports — https://ourairports.com/airports/EHBK/runways.html (retrieved 2026-07-26). *Runway/displaced-threshold data.*

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-26 | Built from AIP Netherlands (LVNL); K Global fields from live VAMSYS; 4-page pack. |
