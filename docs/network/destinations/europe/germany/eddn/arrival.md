# EDDN — Nuremberg · Arrival Page

**EDDN / NUE** · Nuremberg, Bavaria, Germany · Europe
**Version** v0.1 · **Updated** 2026-07-25 · **Status** Draft

> **Read-me:** Tactical arrival aid for the sim, not a chart. Companion to the [EDDN Briefing](index.md), [Dispatch](dispatch.md) and [Departure](departure.md) pages. STARs/approaches are listed **by name only or flagged not-yet-confirmed** — fly the charted current-AIRAC version; minima shown are pointers, always verify on the current chart. Static data only; live wx/NOTAM are pulled at planning. Open 🟧 items are in §Open items. Flag legend 🟥 restriction/hazard · 🟧 caution/unverified · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| Usual landing runway(s) | **10 or 28** — single runway, direction of use is wind-driven |
| Usual approach | 🟧 Not independently confirmed — ILS reported present, category/minima to verify on current AIRAC |
| Config logic | Wind-driven only — no multi-runway configuration choice exists |
| Transition level | 🟧 Not confirmed — confirm on current AIP |
| LVP trigger | 🟧 Not confirmed |
| Missed-approach driver | 🟩 Not terrain — no close-in high terrain identified (Briefing §3.1) |

---

## 2. STAR / transition selection

- **STARs (names only — verify current AIRAC):** 🟧 Not confirmed from reachable sources.
- **Selection by arrival direction / runway:** Single runway 10/28 — direction of use is wind-driven; sequencing is handled by **München Radar**, not Langen — see Briefing §3.2/§18. 🟧
- **Transition to approach:** 🟧 Not confirmed.
- **Speed / flow constraints on the STAR:** Standard ICAO/EU 250 KIAS below FL100 — confirm no local override.

---

## 3. Descent & energy plan

- **Top-of-descent trigger:** 🟧 Not confirmed — standard descent-profile planning.
- **Speed control:** Standard 250 KIAS below FL100 (EU/ICAO norm) — confirm current chart.
- **Altitude constraints:** 🟧 Not confirmed — pointer only, verify chart.
- **Energy traps:** No terrain-driven energy trap identified (Briefing §3.1); no specific EDDN energy-trap data confirmed beyond general single-runway sequencing discipline.

---

## 4. Approach selection by runway

*Names only — verify minima on current AIRAC charts.*

| RWY | Approach (name) | LVP / CAT note | Minima pointer (verify AIRAC) |
|---|---|---|---|
| 10 | 🟧 Not confirmed | 🟧 Not confirmed | Verify current chart |
| 28 | 🟧 Not confirmed | 🟧 Not confirmed | Verify current chart |

- **LVP triggers:** 🟧 Not confirmed — ILS presence/category itself is not independently confirmed for EDDN (Briefing §9).

---

## 5. Approach hazards (terrain / CFIT / specific threats)

- **CFIT / terrain:** 🟩 None identified — EDDN sits at a modest 1,046 ft MSL with no close-in high terrain (Briefing §3.1); not a CFIT-significant field.
- **Specific threats:** 🟧 No crosswind runway alternative exists — the January 2010 737-800 take-off-roll excursion (Briefing §3.3) is a real, if dated, precedent for runway-surface-event risk on this single runway.
- **Airspace / traffic:** 🟧 Approach worked by **München Radar** — this field sits in **München FIR (EDMM)**, not Langen (EDGG); no dedicated München FIR brief exists yet in this network — see [Europe area brief](../../../../airspace/europe.md) for general regional context and Briefing §3.2/§18.

---

## 6. Missed approach watch-items

- **Terrain-driven MAP notes:** 🟩 Not applicable — no significant terrain factor identified; confirm the current published missed approach on the AIRAC chart.
- **Re-sequencing environment:** 🟧 Not confirmed — smaller regional field, expect a less complex re-sequencing environment than at a major hub, but not verified.
- **Go-around traps:** 🟧 Not confirmed.

---

## 7. Landing runway / LDA & braking / vacate

- **LDA by runway:** 🟧 Physical length 2,700 m (8,858 ft) for both 10 and 28; exact published LDA not confirmed — see [Briefing §7](index.md).
- **Braking / vacate:** 🟧 Rapid-exit taxiway detail not confirmed in reachable sources.
- **Runway-excursion watch:** 🟧 No crosswind runway alternative exists; the 2010 runway-excursion precedent (Briefing §3.3) is a genuine, if dated, caution item for this runway.

---

## 8. Taxi-in routing to terminal & hot spots

- **Typical taxi-in by runway → terminal:** 🟧 Not confirmed from reachable sources; VAMSYS taxi-in time is **not set** for EDDN `[VAMSYS mirror 2026-07-25]`.
- **Hot spots / tight taxiways:** 🟧 None identified from reachable sources.
- **Stand/gate notes:** See [Dispatch §3](dispatch.md) — no widebody stand infrastructure confirmed for our operation; **A380 explicitly not licensed** regardless.

---

## 9. Arrival frequency sequence

- **Sequence:** **München Radar 129.525 → Nürnberg Director 119.475 → Tower 118.305 → Ground 121.76.** Take the assigned frequency and confirm current chart. (Frequencies from [Briefing §8](index.md).) Note the approach hand-off is from **München Radar**, confirming EDDN sits in München FIR (EDMM), not Langen — see Briefing §3.2/§18. 🟧
- **Approach/Departure control:** **München Radar** (DFS) works the terminal approach; no dedicated München (EDMM) FIR brief exists yet in this network. See the [Europe area brief](../../../../airspace/europe.md) for general regional context pending a dedicated build. 🟧

---

## 10. Gotchas

- **Approach/departure worked by München Radar, not Langen** — brief the correct FIR context; do not assume the Langen (EDGG) brief's specifics apply directly to EDDN beyond shared regional weather patterns.
- **No hard curfew, but genuinely noise-sensitive at night** — do not assume a quiet overnight ramp; be aware of the Erlangen noise-abatement controversy.
- **Single runway, no crosswind alternative** — the 2010 runway-excursion precedent is a real caution item.
- **A380 explicitly not licensed** — never expect or plan an A388 arrival here without independent AIP re-confirmation.

---

## Open items (🟧 — confirm against AIP / current AIRAC)

- Current-AIRAC STAR names and approach names/minima per runway.
- ILS presence/category/ident/frequency confirmation.
- LVP trigger conditions.
- Rapid-exit taxiway/vacate detail.
- Transition altitude/level exact figures.
- München (EDMM) FIR brief — does not yet exist in this network.

> **Live data — pull at planning:** wx/METAR/TAF/TREND, NOTAM (runway/approach/navaid/lighting), ATIS config/wind trend. Not stored in this durable file.

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim charts inform content but are not listed here.*

- OurAirports — Nuremberg Airport (NUE, EDDN) — https://ourairports.com/airports/EDDN/ , /runways.html , /closest-navaids.html (retrieved 2026-07-25).
- Wikipedia — Nuremberg Airport — https://en.wikipedia.org/wiki/Nuremberg_Airport (retrieved 2026-07-25). *2010 runway-excursion incident; A380 non-licensing.*
- See [EDDN Briefing](index.md) Sources & References for the full source list.

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-25 | Built from DFS eAIP + Briefing; folded to 4-page pack. |
