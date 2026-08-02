# LHBP — Budapest Liszt Ferenc Intl · Arrival Page

**LHBP / BUD** · Budapest, Hungary · Europe
**Version** v0.1 · **Updated** 2026-07-26 · **Status** Draft

> **Read-me:** Tactical arrival aid for the sim, not a chart. Companion to the [LHBP Briefing](index.md), [Dispatch](dispatch.md) and [Departure](departure.md) pages. STARs/approaches are listed **by name only or flagged not-yet-confirmed** — fly the charted current-AIRAC version; minima shown are pointers, always verify on the current chart. Static data only; live wx/NOTAM are pulled at planning. Open 🟧 items are in §Open items. Flag legend 🟥 restriction/hazard · 🟧 caution/unverified · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| Usual landing runway(s) | Not published / verify — no primary-source preferential-runway rule obtained 🟧 |
| Usual approach | ILS presumed on the main runway pair (13L/31R); CAT III commonly referenced for RWY 31R in tier-4/community material only — not independently confirmed 🟧 |
| Config logic | Wind/ATC-flow dependent; specific rule not confirmed 🟧 |
| Transition level | Not published / verify 🟧 |
| LVP trigger | Winter Pannonian Basin radiation-fog/inversion risk is the likely driver; exact trigger conditions not confirmed 🟧 |
| Missed-approach driver | Not terrain-driven (flat basin); most likely traffic/airspace re-sequencing, not independently confirmed 🟧 |

---

## 2. STAR / transition selection

- **STARs (names only — verify current AIRAC):** Not published / verify — pull the current-AIRAC STAR list at planning. 🟧
- **Selection by arrival direction / runway:** Not published / verify — no primary-source rule obtained this build. 🟧
- **Transition to approach:** Not published / verify — expect a standard STAR-to-ILS transition with radar vectors onto final under Budapest Approach/Director; verify the charted transition. 🟧
- **Speed / flow constraints on the STAR:** Not published / verify — 250 KIAS below FL100 (EU/ICAO norm) applies generically; confirm current chart. 🟧

---

## 3. Descent & energy plan

- **Top-of-descent trigger:** Standard descent-profile planning; plan TOD to meet the first STAR altitude gate once confirmed.
- **Speed control:** 250 KIAS below FL100 (EU/ICAO norm) — confirm current chart.
- **Altitude constraints:** Not published / verify — key STAR crossing constraints are pointers only, fly the charted altitudes once confirmed. 🟧
- **Energy traps:** Winter fog/inversion events forcing holding/re-sequencing, and any late runway/config change ahead of a wind shift, are the most likely energy traps at this field pending confirmation.

---

## 4. Approach selection by runway

*Names only — verify minima on current AIRAC charts.*

| RWY | Approach (name) | LVP / CAT note | Minima pointer (verify AIRAC) |
|---|---|---|---|
| 13L/31R | ILS (presumed) | CAT III commonly referenced for 31R in tier-4/community material — not independently confirmed 🟧 | Not published / verify |
| 13R/31L | ILS (presumed) | Category/minima not confirmed 🟧 | Not published / verify |

- **LVP triggers:** Winter Pannonian Basin radiation-fog/inversion risk is the likely trigger driver; exact RVR/trigger conditions not confirmed this build. 🟧 See [`OM E — Low Visibility Operations`](../../../../../flight-ops/low-visibility-operations.md).

---

## 5. Approach hazards (terrain / CFIT / specific threats)

- **CFIT / terrain:** 🟩 None identified. Flat Pannonian/Carpathian Basin at 495 ft AMSL — the Buda Hills lie on the far side of the city, well clear of any arrival path (see [Briefing §3.1](index.md)).
- **Specific threats:** 🟧 RWY 13L/31R and RWY 13R/31L share the same 127°/307° orientation but are laterally separated by roughly 2 NM — confirm current dependent/independent operating status with ATC rather than assuming close-parallel wake/spacing rules. No other specific approach threat confirmed from reachable sources this build.
- **Airspace / traffic:** 🟧 Budapest Approach/Director operates across multiple sector frequencies, consistent with sustained regional-hub traffic; density/re-sequencing exposure not independently quantified this build.

---

## 6. Missed approach watch-items

- **Terrain-driven MAP notes:** Terrain is not the driver (flat basin) — fly the published MAP and verify climb-gradient/turn on the current chart once confirmed.
- **Re-sequencing environment:** A go-around likely returns you into scheduled/regional-hub radar traffic under Budapest Approach/Director — expect possible vectoring/holding, especially during a winter fog event, pending confirmation of actual traffic density.
- **Go-around traps:** Not published / verify — no specific go-around trap confirmed for this field this build. 🟧

---

## 7. Landing runway / LDA & braking / vacate

- **LDA by runway:** Not published / verify for either runway (see [Briefing §7](index.md)) — do not assume runway-length margins without cross-checking the current AIP. 🟧
- **Braking / vacate:** Rapid-exit taxiway detail not confirmed in reachable sources — confirm with Ground/Apron on the day. 🟧
- **Runway-excursion watch:** 🟧 No displaced thresholds confirmed either way; winter-contamination braking-action consideration applies in the assumed Oct–Apr de-icing season (see [Briefing §14](index.md)).

---

## 8. Taxi-in routing to terminal & hot spots

- **Typical taxi-in by runway → terminal:** Not published / verify — confirm routing with Ground/Apron on arrival; VAMSYS mirror gives a planning taxi-in/out figure of **12/15 min** (in/out assignment not certain) `[VAMSYS mirror 2026-07-26]`. 🟧
- **Hot spots / tight taxiways:** 🟥 No primary-chart hot-spot list was obtained this build — this is an open item, not a confirmed "none exist" finding; taxi with unfamiliar-airport caution until confirmed locally.
- **Stand/gate notes:** See [Dispatch §3](dispatch.md) — Terminal 2B **Pier B** is the one confirmed wide-body-capable concourse; other stand assignment not confirmed.

---

## 9. Arrival frequency sequence

- **Sequence:** **Budapest Director/Approach (119.51, 122.97, 123.86, 124.90 — sector-specific) → Budapest Tower (118.10/119.97) → Budapest Ground (121.90/121.91) / Apron South-West (122.45/131.55).** Take the assigned frequency and confirm current chart. (Frequencies from Briefing §8, tier-4-sourced.)
- **Approach/Departure control:** **Budapest Approach/Director** is the terminal facility; **Budapest ACC** — Budapest (LHCC) FIR — hands off en route inbound; see [Europe airspace brief](../../../../airspace/europe.md) pending a dedicated LHCC FIR brief. 🟧

---

## 10. Gotchas

- **Winter fog/temperature-inversion events (typ. Oct–Apr)** are the field's signature seasonal risk — brief a holding/diversion contingency in season.
- **RWY 13L/31R and RWY 13R/31L are same-orientation but laterally separated** rather than close-spaced parallels — confirm current dependent/independent operating logic with ATC.
- **No named hot spots/taxiway complexity points were sourced** for this field — taxi in with unfamiliar-airport caution until confirmed locally.
- **A historical CFIT-adjacent accident** (IL-18, beyond RWY 31, fog/darkness/crew-coordination factors — see [Briefing §3.4](index.md)) is a standing reminder to brief conservative low-vis/night arrival discipline.
- **Declared distances/LDA were not obtained this build** — do not assume runway-length margins without cross-checking the current AIP.

---

## Open items (🟧 — confirm against AIP / current AIRAC)

- Current-AIRAC STAR names and exact approach minima per runway.
- ILS CAT sub-category confirmation (CAT III on 31R is tier-4-only).
- Exact LVP/CAT trigger RVR values.
- Rapid-exit taxiway/vacate detail.
- Current taxi-in routing and terminal/gate assignment for our operation.
- Exact taxi-in vs taxi-out assignment of the VAMSYS 12/15 min figures.

> **Live data — pull at planning:** wx/METAR/TAF/TREND, NOTAM (runway/approach/navaid/lighting), ATIS config/wind trend, current traffic/flow status. Not stored in this durable file.

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim charts inform content but are not listed here.*

- **HungaroControl eAIP (AIP Hungary, AD 2 LHBP)** — portal not accessible via a public raw fetch this build; not used as a citation for any figure above (retrieval attempted 2026-07-26).
- OurAirports — https://ourairports.com/airports/LHBP/ , /closest-navaids.html (retrieved 2026-07-26).
- SkyVector — https://skyvector.com/airport/LHBP (retrieved 2026-07-26). *Runway/threshold data.*
- Wikipedia — "Budapest Ferenc Liszt International Airport" — https://en.wikipedia.org/wiki/Budapest_Ferenc_Liszt_International_Airport (retrieved 2026-07-26). *Historical IL-18 accident, terminal structure.*

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-26 | Built from national AIP; K Global fields from live VAMSYS; 4-page pack. |
