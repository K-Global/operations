# LIMF — Torino/Caselle · Arrival Page

**LIMF / TRN** · Caselle Torinese, Piedmont, Italy · Europe
**Version** v0.1 · **Updated** 2026-07-26 · **Status** Draft

> **Read-me:** Tactical arrival aid for the sim, not a chart. Companion to the [LIMF Briefing](index.md), [Dispatch](dispatch.md) and [Departure](departure.md) pages. STARs/approaches are listed **by name only or flagged not-yet-confirmed** — fly the charted current-AIRAC version; minima shown are pointers, always verify on the current chart. Static data only; live wx/NOTAM are pulled at planning. Open 🟧 items are in §Open items. Flag legend 🟥 restriction/hazard · 🟧 caution/unverified · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| Usual landing runway(s) | **RWY 36** (preferential runway, wind permitting — Briefing §1/§3); RWY 18 used when wind/braking action dictates otherwise |
| Usual approach | ILS CAT II/III RWY 36 (ident ITOC); VOR/NDB(Locator) RWY 36 also published; **RWY 18 has no precision approach found** — circling/visual only, verify current AIRAC 🟧 |
| Config logic | Wind-driven; RWY 36 preferred while tailwind component ≤7 kt (dry) / ≤5 kt (wet), or when braking action is not "poor" |
| Transition level | By ATC/QNH; transition altitude reported 6,000 ft in chart-derived material — not confirmed from a primary AIP table this pass 🟧 |
| LVP trigger | Reported (chart-derived, not primary-AIP-confirmed) RVR 550 m at the touchdown zone or ceiling below 200 ft in the approach sector — CAT II/III on RWY 36 is the standing mitigation, but **only in that direction** 🟧 |
| Missed-approach driver | Terrain to the north/west (Briefing §3.1), not airspace/traffic density |

---

## 2. STAR / transition selection

- **STARs (names only — verify current AIRAC):** Reachable chart-derived material references arrival routings via **ANAKI**, **LAGEN**, **ABN**, **CSL**, **KUMIN**, **GEN**, **LEV**, **ODINA**, **SIRLO**, **SRN**, and **VEROB**-named STARs/transitions to RWY 36 — pull the live current-AIRAC STAR list before use; names not verified against a primary AIP table this pass. 🟧
- **Selection by arrival direction / runway:** RWY 36 is the dominant landing runway in normal wind conditions (§1); RWY 18 is used when wind or braking action dictates otherwise, subject to the noise-abatement limitation on RWY 18 use (Briefing §12).
- **Transition to approach:** Expect an RNAV/conventional-STAR-to-ILS transition with radar vectors onto final for RWY 36; for RWY 18 (no precision approach found), expect a visual or circling transition — verify the charted procedure.
- **Speed / flow constraints on the STAR:** 250 KIAS below FL100 (EU/ICAO norm); further terminal-area speed gates down to roughly 160 KT near the threshold are referenced in chart-derived material — verify current chart.

---

## 3. Descent & energy plan

- **Top-of-descent trigger:** Standard descent-profile planning; plan TOD to meet the first STAR altitude gate. A fog-driven single-stream or reduced-rate arrival flow in winter can compress the descent — brief an early-descent contingency.
- **Speed control:** STAR speed gates and 250 KIAS below FL100 — confirm current chart.
- **Altitude constraints:** Key STAR crossing constraints are pointers — fly the charted altitudes; given the field's Alpine-proximity terrain (Briefing §3.1), do not accept an early descent below a charted altitude on any northern/western arrival segment.
- **Energy traps:** Late runway/config changes (36↔18 ahead of a wind shift), and any holding/resequencing during a winter fog event, are the main energy traps at this field; a late switch to RWY 18 also removes the precision-approach option (§1).

---

## 4. Approach selection by runway

*Names only — verify minima on current AIRAC charts.*

| RWY | Approach (name) | LVP / CAT note | Minima pointer (verify AIRAC) |
|---|---|---|---|
| 36 | ILS (ITOC); VOR; NDB(Locator) | **CAT II/III** — special aircrew/aircraft certification required 🟧 | verify current chart |
| 18 | No precision approach found in reachable sources | Circling/visual only assumed — verify current AIRAC 🟧 | verify current chart |

- **LVP triggers:** Po Valley radiational/advection fog (Oct–Mar) is the routine trigger; CAT II/III on RWY 36 is the standing mitigation, but a fog event with wind favouring RWY 18 leaves **no precision-approach option** at this single-runway field (Briefing §3.4). Exact current RVR/ceiling trigger values not confirmed from a primary AIP table this pass. 🟧

---

## 5. Approach hazards (terrain / CFIT / specific threats)

- **CFIT / terrain:** 🟥 Terrain rises sharply toward the north and west of the field — area-chart MSA sectors step from roughly 3,600 ft (south/east) to well over 12,000–15,000 ft (north/northwest), reflecting the proximity of the Graian and Cottian Alps, including named peaks Rocciamelone (3,538 m) and Gran Paradiso (4,061 m). This is the field's genuine CFIT threat — fly the charted STAR/approach track and MSA precisely, especially on any go-around or vectored approach in weather.
- **Specific threats:** 🟧 Single-runway field with precision-approach capability in only one direction (RWY 36); a runway-arresting cable/plinth is reported within the RWY 36-end strip (military heritage, verify current NOTAM status); joint civil/military traffic mix.
- **Airspace / traffic:** 🟩 Moderate density; radar environment, historically under Torino Approach, cross-checked as possibly now under Milano ACC/Radar (verify current AIRAC) — see [Airspace — Europe general](../../../../airspace/europe.md) pending a dedicated Milano (LIMM) FIR brief.

---

## 6. Missed approach watch-items

- **Terrain-driven MAP notes:** Terrain to the north/west is the operative missed-approach concern (§5) — fly the published missed-approach track and climb gradient precisely; do not turn early toward high ground. Verify current-chart climb-gradient/turn constraints.
- **Re-sequencing environment:** Single-runway field with moderate traffic — a go-around typically re-sequences into a straightforward single-stream pattern rather than a dense multi-runway environment, but a fog event can still force extended holding given the field's single precision-approach direction.
- **Go-around traps:** Terrain awareness on the missed-approach track (north/west quadrant) is the primary trap; also watch for the RWY 36-end runway-arresting cable/plinth area on any low go-around near that end.

---

## 7. Landing runway / LDA & braking / vacate

- **LDA by runway:** RWY 36 **2,948 m**; RWY 18 **2,574 m** — both reflect displaced thresholds (352 m and 726 m respectively) rather than a distance-usability issue; cross-ref [Briefing §7](index.md). Both are non-limiting for narrowbody/typical widebody landing weights at this stage length; confirm the shorter RWY 18 figure against the specific type in OM B.
- **Braking / vacate:** Rapid-exit taxiway detail not confirmed in reachable sources — confirm with Ground/Tower on the day. 🟧
- **Runway-excursion watch:** 🟧 Preferential-runway tailwind thresholds (7 kt dry / 5 kt wet) define the runway-change trigger; braking action reported "poor" removes the preferential-runway logic — treat any wet/contaminated-runway report as a cue to expect a runway change or reduced tailwind tolerance.

---

## 8. Taxi-in routing to terminal & hot spots

- **Typical taxi-in by runway → terminal:** After landing on the assigned runway (36 or 18), taxi in to the Main Apron or Kilo (K) Apron per Ground/Tower assignment; confirm exact routing on the day. VAMSYS gives no taxi-in figure for this field (Briefing §1) — plan generically pending an update.
- **Hot spots / tight taxiways:** 🟥 A charted ground hot spot ("HS1") exists at the field — exact location not resolved this research pass, verify current aerodrome chart. Reported Main Apron taxilane wingspan limits (on the order of 36–38 m) are narrower than full Code E — confirm before any large Code E taxi-in movement.
- **Stand/gate notes:** See [Dispatch §3](dispatch.md) — widebody stand assignment not independently confirmed; follow-me assistance reported mandatory for movements to/from Kilo Apron and the GA Apron, and during Low Visibility Procedures.

---

## 9. Arrival frequency sequence

- **Sequence:** **Approach (historically "Torino Approach" 121.100/129.275, cross-checked as possibly now provided by Milano Radar 129.275/125.275) → Torino Tower 118.500 (H24) → Torino Ground 121.700 (historically HX 0600–2200 LT).** Take the assigned frequency and confirm current chart. (Frequencies from Briefing §8.) 🟧
- **Approach/Departure control:** Historically **Torino Approach**; current public cross-checks suggest the function may now sit with **Milano ACC/Radar** — confirm the current-AIRAC sectorisation before planning. See [Airspace — Europe general](../../../../airspace/europe.md) pending a dedicated Milano (LIMM) FIR brief. 🟧

---

## 10. Gotchas

- **RWY 18 has no precision approach** — never plan a low-vis arrival expecting an ILS on that runway; a fog event with wind favouring RWY 18 has no same-field precision-approach fallback.
- **Terrain rises sharply to the north/west** — brief the MSA and missed-approach track precisely; never accept a shortcut into that quadrant under vectoring.
- **Charted magnetic anomaly zone** — cross-check compass/heading indications on any heading-based segment.
- **Preferential-runway wind thresholds are tight (7 kt dry / 5 kt wet tailwind)** — watch the ATIS wind trend for a late runway-change cue.
- **Runway-arresting cable/plinth reported near the RWY 36 end** (military heritage) — verify current NOTAM status; a low go-around or long landing near that end warrants awareness.
- **Joint civil/military field** — expect test-flight/military traffic mixed into the arrival sequence.
- **Night movement restriction 23:00–06:00 local** — do not plan a schedule relying on a late arrival that would fall outside the published exceptions (Briefing §5/§12).

---

## Open items (🟧 — confirm against AIP / current AIRAC)

- Current-AIRAC STAR names and exact approach minima per runway.
- Exact LVP/CAT II-III trigger RVR/ceiling values.
- Rapid-exit taxiway/vacate detail.
- Current taxi-in routing and stand/gate assignment for K Global service.
- Current approach-control provider/frequency (historically Torino Approach; possibly reassigned to Milano ACC/Radar).
- Exact location of the charted ground hot spot ("HS1").

> **Live data — pull at planning:** wx/METAR/TAF/TREND, NOTAM (runway/approach/navaid/lighting, especially the RWY 36 ILS — the field's only precision-approach direction), ATIS config/wind trend, current AUP/UUP or RAD status in Milano airspace. Not stored in this durable file.

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim charts inform content but are not listed here.*

- **AIP Italia (ENAV), AD 2 LIMF** (reachable extract, 2008–2009-era amendment dates) — mirrored via https://www.yumpu.com/it/document/view/15905390/1-limf-torino-caselle (retrieved 2026-07-26). Runway/declared-distance data, preferential-runway logic, communications, navaids.
- SkyVector — https://skyvector.com/airport/LIMF/Torino-Caselle-Airport (retrieved 2026-07-26). *Runway/displaced-threshold/navaid cross-check; approach-control reassignment comment.*
- Wikipedia — "Turin Airport" — https://en.wikipedia.org/wiki/Turin_Airport (retrieved 2026-07-26). *General cross-check; ILS-category claim flagged uncited on the source itself.*

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-26 | Built from AIP Italia (ENAV); K Global fields from live VAMSYS; 4-page pack. |
