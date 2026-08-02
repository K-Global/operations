# LKPR — Praha/Ruzyně (Václav Havel Airport Prague) · Arrival Page

**LKPR / PRG** · Prague-Ruzyně, Czech Republic · Europe
**Version** v0.1 · **Updated** 2026-07-26 · **Status** Draft — tier-4 corroborated, primary AIP not reachable this build

> **Read-me:** Tactical arrival aid for the sim, not a chart. Companion to the [LKPR Briefing](index.md), [Dispatch](dispatch.md) and [Departure](departure.md) pages. STARs/approaches are listed **by name only or flagged not-yet-confirmed** — fly the charted current-AIRAC version; minima shown are pointers, always verify on the current chart. Static data only; live wx/NOTAM are pulled at planning. Open 🟧 items are in §Open items. Flag legend 🟥 restriction/hazard · 🟧 caution/unverified · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| Usual landing runway(s) | **RWY 24** (most-used, prevailing westerly wind); **RWY 30** used often; **RWY 06** rarely; **RWY 12** only exceptionally `[Wikipedia, AIP-cited]` |
| Usual approach | ILS on the assigned runway; CAT II/III capability commonly reported on **06/24** (not independently confirmed); CAT I only on **12/30** |
| Config logic | Wind-driven; RWY 24 dominant, RWY 12/30 reserved for non-preferred wind and CAT I only |
| Transition level | Not published / verify 🟧 |
| LVP trigger | Winter fog/low stratus (regional climatology); exact RVR trigger not confirmed 🟧 |
| Missed-approach driver | Regional undulating terrain / traffic re-sequencing — quantified terrain data not obtained this build |

---

## 2. STAR / transition selection

- **STARs (names only — verify current AIRAC):** Not confirmed in reachable sources — pull the current-AIRAC STAR list at planning. 🟧
- **Selection by arrival direction / runway:** Prevailing westerly wind favours **RWY 24**; **RWY 30** is used often as the secondary direction; **RWY 06** rarely; **RWY 12** only exceptionally `[Wikipedia, AIP-cited]`.
- **Transition to approach:** Not confirmed — expect radar vectoring to final under Praha/Ruzyně Approach; verify the charted transition.
- **Speed / flow constraints on the STAR:** Not confirmed — verify chart; standard 250 KIAS below FL100 applies as the EU/ICAO norm.

---

## 3. Descent & energy plan

- **Top-of-descent trigger:** Standard descent-profile planning; plan TOD to meet the first STAR altitude gate (not independently confirmed this build).
- **Speed control:** 250 KIAS below FL100 (EU/ICAO norm) — confirm current chart.
- **Altitude constraints:** Not confirmed — pointers only, fly the charted altitudes.
- **Energy traps:** A late runway/config change (e.g., a shift toward the less-common 06/12 directions) and any winter fog-driven re-sequencing are the plausible energy traps at this field; not independently confirmed with LKPR-specific data.

---

## 4. Approach selection by runway

*Names only — verify minima on current AIRAC charts.*

| RWY | Approach (name) | LVP / CAT note | Minima pointer (verify AIRAC) |
|---|---|---|---|
| 06 | ILS | CAT II/III capability commonly reported — not independently confirmed 🟧 | verify current chart |
| 24 | ILS | CAT II/III capability commonly reported — not independently confirmed 🟧; **most-used runway** | verify current chart |
| 12 | ILS | **CAT I only** `[Wikipedia, AIP-cited]`; approach overflies populated areas 🟧 | verify current chart |
| 30 | ILS | **CAT I only** `[Wikipedia, AIP-cited]`; used often as secondary direction 🟧 | verify current chart |

- **LVP triggers:** Winter fog/low-stratus conditions are the presumed routine trigger, consistent with regional Central European climatology; exact RVR values and confirmed CAT sub-category not obtained this build. 🟧

---

## 5. Approach hazards (terrain / CFIT / specific threats)

- **CFIT / terrain:** 🟧 The aerodrome itself is on a flat plateau (1,247 ft), but the surrounding Central Bohemian upland is genuinely undulating. A historical precedent exists: a 30 October 1975 accident (Inex-Adria Aviopromet Flight 450) involved a DC-9 striking high ground on approach in fog. No quantified peak/MSA data was obtained this build — cross-ref [Briefing §3.1](index.md) and fly the current chart's MSA ring.
- **Specific threats:** RWY 12/30's CAT I-only equipage and populated-area overflight (Prague 6, Kladno) mean this pair offers a thinner low-visibility margin than the (reportedly) better-equipped 06/24 pair — confirm current capability before accepting an approach to 12/30 in marginal weather. 🟧
- **Airspace / traffic:** Moderate density under Praha/Ruzyně Approach (radar-controlled); not comparable to a major congested hub.

---

## 6. Missed approach watch-items

- **Terrain-driven MAP notes:** Fly the published MAP and verify climb-gradient/turn constraints on the current chart; the surrounding terrain is undulating rather than extreme, but quantified data was not obtained this build. 🟧
- **Re-sequencing environment:** A go-around returns you to a moderate-density radar environment under Praha/Ruzyně Approach; extended vectoring/holding is plausible during a winter fog event but not independently confirmed.
- **Go-around traps:** Config/runway awareness if operating to the less-common 06/12 directions; no LKPR-specific go-around trap confirmed in reachable sources.

---

## 7. Landing runway / LDA & braking / vacate

- **LDA by runway:** Not published / verify — full runway length (3,715 m for 06/24; 3,250 m for 12/30) used only as a proxy; exact declared distances and any displaced threshold not confirmed. 🟧 Cross-ref [Briefing §7](index.md).
- **Braking / vacate:** Rapid-exit taxiway detail not confirmed in reachable sources. 🟧
- **Runway-excursion watch:** 🟧 No displaced-threshold data confirmed; winter-contamination braking-action consideration applies during the assumed Nov–Mar/Apr de-icing season (see Briefing §14).

---

## 8. Taxi-in routing to terminal & hot spots

- **Typical taxi-in by runway → terminal:** After landing, taxi in to **Terminal 1** (non-Schengen/international) or **Terminal 2** (Schengen) per Ground/Apron assignment; VAMSYS mirror gives a planning taxi-in time of **12 min** `[VAMSYS mirror 2026-07-26]`.
- **Hot spots / tight taxiways:** Not published / verify — pull the current airport ground chart at planning; note the former **RWY 04/22** is permanently closed and repurposed as taxiway/apron space. 🟧
- **Stand/gate notes:** See [Dispatch §3](dispatch.md) — widebody/Code E stand allocation not confirmed.

---

## 9. Arrival frequency sequence

- **Sequence:** **Praha/Ruzyně Approach (119.01, or Praha Approach 120.53/127.58/335.60/378.75, or Praha/Ruzyně Approach 136.08 — sector-specific) → Praha/Ruzyně Tower 118.11 (or 134.56/335.60/378.75) → Ruzyně Ground 121.91.** Take the assigned frequency and confirm current chart. (Frequencies from Briefing §8; tier-4 sourced, not independently AIRAC-verified.)
- **Approach/Departure control:** Praha/Ruzyně Approach is the terminal approach facility; FIR is **Praha (LKAA)** — no dedicated FIR brief exists yet, cross-ref [Europe — General Airspace](../../../../airspace/europe.md). 🟧

---

## 10. Gotchas

- **RWY 04/22 is never a landing runway** — permanently closed, taxiway/parking use only.
- **RWY 12/30 is CAT I only and overflies populated areas** — do not expect the same low-vis margin as RWY 06/24, and expect it only when wind dictates.
- **Winter fog/low-stratus events** can affect approach capability quickly — confirm current CAT/LVP status on the assigned runway before planning.
- **Regional terrain is undulating, not flat** — a historical fog-related accident (1975) underscores the value of MSA/vertical-guidance discipline; verify current chart terrain data.
- **ATC frequencies in this pack are tier-4 sourced** — cross-check against the current AIRAC chart.

---

## Open items (🟧 — confirm against AIP / current AIRAC)

- Current-AIRAC STAR names and exact approach minima per runway.
- ILS category/sub-category confirmation on RWY 06/24.
- Exact LVP/CAT trigger RVR values.
- Rapid-exit taxiway/vacate detail.
- Current taxi-in routing and gate assignment.
- Quantified terrain/MSA data for the missed-approach and CFIT sections.

> **Live data — pull at planning:** wx/METAR/TAF/TREND, NOTAM (runway/approach/navaid/lighting), ATIS config/wind trend, current Praha (LKAA) FIR status. Not stored in this durable file.

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim charts inform content but are not listed here.*

- **ANS CR / AIM Czech Republic eAIP** — https://aim.rlp.cz — attempted, not reachable in a usable form as of 2026-07-26; not used as a direct citation this build.
- SkyVector — https://skyvector.com/airport/LKPR (retrieved 2026-07-26). *ATC frequencies, runway dimensions/threshold elevations.*
- Wikipedia — "Václav Havel Airport Prague" — https://en.wikipedia.org/wiki/V%C3%A1clav_Havel_Airport_Prague (retrieved 2026-07-26). *Preferential-runway usage pattern, RWY 12/30 CAT I/populated-area-overflight note, historical accident record (1975).*

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-26 | Built from national AIP; K Global fields from live VAMSYS; 4-page pack. |
