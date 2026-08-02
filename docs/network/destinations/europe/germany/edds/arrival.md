# EDDS — Stuttgart · Arrival Page

**EDDS / STR** · Stuttgart, Baden-Württemberg, Germany · Europe
**Version** v0.1 · **Updated** 2026-07-25 · **Status** Draft

> **Read-me:** Tactical arrival aid for the sim, not a chart. Companion to the [EDDS Briefing](index.md), [Dispatch](dispatch.md) and [Departure](departure.md) pages. STARs/approaches are listed **by name only or flagged not-yet-confirmed** — fly the charted current-AIRAC version; minima shown are pointers, always verify on the current chart. Static data only; live wx/NOTAM are pulled at planning. Open 🟧 items are in §Open items. Flag legend 🟥 restriction/hazard · 🟧 caution/unverified · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| Usual landing runway(s) | **07 or 25** — single runway, direction of use is wind-driven |
| Usual approach | ILS (CAT III reported 🟧) or RNAV (GPS)/RNP — verify exact category/minima on current AIRAC |
| Config logic | Wind-driven only — no multi-runway configuration choice exists |
| Transition level | 🟧 By QNH; transition altitude not confirmed for EDDS specifically — verify current chart |
| LVP trigger | 🟧 If the reported CAT III capability is confirmed, standard LVP trigger conditions would apply — not independently confirmed |
| Missed-approach driver | **Filder-plateau terrain geometry** — the ground drops away toward the Neckar valley/Stuttgart basin more than the field elevation alone suggests |

---

## 2. STAR / transition selection

- **STARs (names only — verify current AIRAC):** 🟧 Not confirmed from reachable sources — pull from current AIRAC.
- **Selection by arrival direction / runway:** Single runway 07/25 — direction of use is wind-driven; **Stuttgart Director** assigns the sequencing/transition for the active runway.
- **Transition to approach:** 🟧 Not confirmed — expect a radar-vectored transition onto final under Langen Radar Approach/Stuttgart Director.
- **Speed / flow constraints on the STAR:** Standard ICAO/EU 250 KIAS below FL100 — confirm no local override; single-runway sequencing may compress spacing relative to a multi-runway field.

---

## 3. Descent & energy plan

- **Top-of-descent trigger:** 🟧 Not confirmed — standard descent-profile planning; the single-runway sequencing under Stuttgart Director may compress the arrival flow relative to a multi-runway field.
- **Speed control:** Standard 250 KIAS below FL100 (EU/ICAO norm) — confirm current chart.
- **Altitude constraints:** 🟧 Not confirmed — pointer only, verify chart.
- **Energy traps:** The **Filder-plateau terrain geometry** (Briefing §3.1) is the standing energy/awareness trap — the ground drops away toward the Neckar valley/Stuttgart basin more than the 1,276 ft field elevation alone suggests; do not fly an early visual manoeuvre based on the modest elevation figure.

---

## 4. Approach selection by runway

*Names only — verify minima on current AIRAC charts.*

| RWY | Approach (name) | LVP / CAT note | Minima pointer (verify AIRAC) |
|---|---|---|---|
| 07 | ILS (category not independently confirmed — reported CAT III historically) 🟧, RNAV (GPS)/RNP 🟧 | CAT III reported, not independently confirmed | 300 m displaced threshold — verify current chart |
| 25 | ILS 🟧, RNAV (GPS)/RNP 🟧 | CAT III reported, not independently confirmed | No displacement reported this end — verify current chart |

- **LVP triggers:** 🟧 Not independently confirmed — if CAT III capability is confirmed on the current AIRAC, standard LVP trigger conditions would apply.

---

## 5. Approach hazards (terrain / CFIT / specific threats)

- **CFIT / terrain:** 🟧 EDDS sits atop the **Filder plateau** (1,276 ft), with the Stuttgart city basin and Neckar valley well below and the **Swabian Jura** upland further south — not a cruise/enroute CFIT driver, but a genuine local terrain-geometry item for circling/visual segments; cross-ref [Briefing §3.1](index.md). Read the MSA/obstacle rings on the current chart rather than assuming the flat-terrain picture the modest elevation figure might suggest.
- **Specific threats:** No wake/closely-spaced-parallel consideration — single runway. Strong crosswind is the standing threat given no crosswind-runway alternative exists on the field.
- **Airspace / traffic:** 🟩 **Langen FIR (EDGG)**, fully radar-controlled, with a dedicated **Stuttgart Director** function feeding the single-runway sequence — see [Langen (EDGG) FIR brief](../../../../airspace/fir/europe/langen-edgg.md). Moderate-to-high traffic density for a single-runway field given EDDS's regional-hub role and **Level 3** slot-coordination status.

---

## 6. Missed approach watch-items

- **Terrain-driven MAP notes:** Fly the published missed approach rather than an early visual manoeuvre — the **Filder-plateau terrain geometry** (§3.1/§5 above) means the ground drops away toward the surrounding valleys more than the field elevation alone suggests.
- **Re-sequencing environment:** A go-around re-enters the single-runway sequence under **Stuttgart Director** — expect vectoring/holding before re-sequencing given the field's **Level 3** capacity pressure.
- **Go-around traps:** No on-field runway alternative exists — a go-around driven by a runway-surface issue (rather than a standard missed approach) has no parallel-runway workaround.

---

## 7. Landing runway / LDA & braking / vacate

- **LDA by runway:** 🟧 RWY 07 — physical length 3,345 m less the 300 m (984 ft) displaced threshold, exact published LDA not confirmed; RWY 25 — 3,345 m physical length, no displacement reported, exact published LDA not confirmed. See [Briefing §7](index.md).
- **Braking / vacate:** 🟧 Rapid-exit taxiway detail not confirmed in reachable sources — confirm with Ground on the day.
- **Runway-excursion watch:** 🟧 No crosswind runway alternative exists — a strong crosswind or contaminated-runway event is a genuine excursion-risk driver on this single runway; exact TORA/TODA/ASDA/LDA per direction not confirmed.

---

## 8. Taxi-in routing to terminal & hot spots

- **Typical taxi-in by runway → terminal:** 🟧 Not confirmed from reachable sources; VAMSYS mirror gives a planning taxi-in time of **10 min** `[VAMSYS mirror 2026-07-25]`. Single-runway layout simplifies routing relative to a multi-runway field.
- **Hot spots / tight taxiways:** 🟧 None identified from reachable sources — verify current AIP/NOTAM hot-spot chart. Cross-ref [Briefing §13](index.md).
- **Stand/gate notes:** See [Dispatch §3](dispatch.md) — no widebody stand infrastructure identified; narrowbody City-unit spoke only.

---

## 9. Arrival frequency sequence

- **Sequence:** **Langen Radar Approach 119.2 / Stuttgart Director 119.85 → Stuttgart Tower 118.805/119.065 → Stuttgart Ground 118.605.** Take the assigned frequency and confirm current chart. (Frequencies from [Briefing §8](index.md).)
- **Approach/Departure control:** **Stuttgart Director** (dedicated function reflecting the single-runway sequencing workload) under **Langen Radar** (DFS) approach; **Langen ACC (EDGG)** en route — see [Langen (EDGG) FIR brief](../../../../airspace/fir/europe/langen-edgg.md). 🟧 Exact sector/frequency assignment is AIRAC-dependent.

---

## 10. Gotchas

- **Single runway, no crosswind alternative** — a strong crosswind or runway-surface event closes the field entirely; there is no parallel-runway workaround.
- **RWY 07 threshold displaced 300 m (984 ft)** — confirm the correct LDA for RWY 07 arrivals, not the full physical length.
- **Filder-plateau terrain geometry** — do not assume flat-terrain surroundings from the modest 1,276 ft elevation figure; the ground drops away toward the Neckar valley/Stuttgart basin.
- **Level 3 fully coordinated** — a late arrival can cascade into a missed slot on the ground; build buffer.
- **Night-operation restrictions in force** — do not plan a schedule that relies on a post-curfew landing; exact hours unconfirmed.

---

## Open items (🟧 — confirm against AIP / current AIRAC)

- Current-AIRAC STAR names and exact approach minima per runway.
- ILS category/ident/frequency confirmation.
- Exact LVP/CAT III trigger conditions.
- Rapid-exit taxiway/vacate detail.
- Transition altitude/level exact figures.

> **Live data — pull at planning:** wx/METAR/TAF/TREND, NOTAM (runway/approach/navaid/lighting), ATIS config/wind trend, current night-restriction/slot status. Not stored in this durable file.

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim charts inform content but are not listed here.*

- OurAirports — Stuttgart Airport (STR, EDDS) — https://ourairports.com/airports/EDDS/ , /runways.html , /closest-navaids.html (retrieved 2026-07-25).
- Wikipedia — Stuttgart Airport — https://en.wikipedia.org/wiki/Stuttgart_Airport (retrieved 2026-07-25). *Terrain/plateau geography.*
- See [EDDS Briefing](index.md) Sources & References for the full source list.

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-25 | Built from DFS eAIP + Briefing; folded to 4-page pack. |
