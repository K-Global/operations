# WSSS — Singapore Changi · Arrival Page

**Version** v0.1 · **Updated** 2026-07-26 · **Status** Draft

**WSSS / SIN** · Changi, East Region, Singapore · Asia

> **Read-me:** Tactical arrival aid for the sim, not a chart. Companion to the [WSSS Briefing](index.md), [Dispatch](dispatch.md) and [Departure](departure.md) pages. STARs/approaches are listed **by name only or flagged not-yet-confirmed** — fly the charted current-AIRAC version; minima shown are pointers, always verify on the current chart. Static data only; live wx/NOTAM are pulled at planning. Open 🟧 items are in §Open items. Flag legend 🟥 restriction/hazard · 🟧 caution/unverified · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| Usual landing runway(s) | Config-dependent between 02L/02C and 20R/20C; **RWY 02R/20L is never a landing runway** under current civil-service status |
| Usual approach | ILS CAT II (02L) / ILS CAT II–III (02C/20C); RNP on 02L, 02C, 20R, 20C |
| Config logic | Monsoon-driven wind pattern; a confirmed predominant direction was not obtained this pass 🟧 |
| Transition level | By QNH; **transition altitude 11,000 ft**, **TL FL130** (Singapore FIR-wide) |
| LVP trigger | Haze-season visibility reduction (Aug–Oct) is the routine trigger at this field, rather than fog — CAT II/III on the equipped runway ends is the standing mitigation 🟧 (exact RVR trigger not confirmed) |
| Missed-approach driver | Airspace/traffic density (dense multi-airport TMA), not terrain |

---

## 2. STAR / transition selection

- **STARs (names only — verify current AIRAC):** Not confirmed in reachable research pass — pull the current-AIRAC STAR list at planning. 🟧
- **Selection by arrival direction / runway:** Not confirmed; expect Singapore Approach to assign the STAR-to-runway transition for the active configuration based on wind/traffic.
- **Transition to approach:** Expect a radar-vectored transition onto final consistent with a busy, radar-controlled TMA; verify the charted transition.
- **Speed / flow constraints on the STAR:** Published speed/altitude gates are pointers only — verify chart; expect additional flow speed control given the dense multi-airport environment shared with Seletar and Paya Lebar Air Base traffic.

---

## 3. Descent & energy plan

- **Top-of-descent trigger:** Standard descent-profile planning; plan TOD to meet the first STAR altitude gate. Haze-driven reduced-visibility arrivals or a predawn Sumatra-squall passage can compress sequencing — brief an early-descent/holding contingency in season.
- **Speed control:** STAR speed gates and 250 KIAS below FL100 (ICAO norm) — confirm current chart.
- **Altitude constraints:** Key STAR crossing constraints are pointers — fly the charted altitudes.
- **Energy traps:** Late runway/config changes ahead of a monsoon wind shift, and holding/resequencing during a haze event or squall passage, are the main energy traps at this field.

---

## 4. Approach selection by runway

*Names only — verify minima on current AIRAC charts.*

| RWY | Approach (name) | LVP / CAT note | Minima pointer (verify AIRAC) |
|---|---|---|---|
| 02L | ILS; RNP | **CAT II** 🟧 | verify current chart |
| 20R | ILS; RNP | Category not confirmed 🟧 | verify current chart — 740 m displaced threshold, LDA 3,260 m |
| 02C | ILS (ident ICE); RNP | **CAT III** 🟧 | verify current chart |
| 20C | ILS (ident ICC); RNP | **CAT II/III** 🟧 | verify current chart |
| 02R / 20L | — none (civil) — | 🟥 **Never a landing runway** — not in civil service under current status | n/a |

- **LVP triggers:** Transboundary haze (Aug–Oct) is the routine visibility-reduction trigger at WSSS; CAT II/III capability on the equipped runway ends (02L, 02C, 20C) is the standing mitigation. Exact RVR trigger values not confirmed this pass. 🟧

---

## 5. Approach hazards (terrain / CFIT / specific threats)

- **CFIT / terrain:** 🟩 None. Singapore is flat with no close-in high terrain relevant to any Changi arrival path; the country's highest point (Bukit Timah, ~163 m) lies well clear to the west.
- **Specific threats:** 🟥 The **extremely dense multi-airport TMA** — Seletar (WSSL) ~8 NM NW, Paya Lebar Air Base (WSAP) ~5 NM WNW, Tengah Air Base (WSAT) ~17 NM W — sustains continuous high traffic density under Singapore Approach radar control. **Sumatra squalls** (Apr–Nov, predawn/early-morning) can bring sudden severe wind shear onto the approach with limited warning, though generally trackable on weather radar. **RWY 02R/20L is RSAF-only** — expect coordination/crossing traffic in its vicinity even though it is never a civil arrival option.
- **Airspace / traffic:** 🟥 Very high density under Singapore Approach — brief for re-sequencing and extended vectoring, especially during a haze event or squall passage.

---

## 6. Missed approach watch-items

- **Terrain-driven MAP notes:** Terrain is not the driver (flat island state) — fly the published MAP and verify climb-gradient/turn on the current chart.
- **Re-sequencing environment:** A go-around drops you back into a very dense, multi-airport radar environment shared with Seletar and Paya Lebar Air Base traffic — expect extended vectoring and possible holding before re-sequencing, especially during a haze event.
- **Go-around traps:** Traffic/config awareness given the proximity of RSAF operations near RWY 02R/20L, and the general high-density TMA, remain workload factors during the miss even though RWY 02R/20L itself is never the landing runway.

---

## 7. Landing runway / LDA & braking / vacate

- **LDA by runway:** 02L **4,000 m**; 20R **3,260 m** (740 m displaced threshold — do not touch down short of it); 02C/20C **4,000 m** 🟧 (assumed symmetric, not independently confirmed). All figures ample for any K Global widebody at typical arrival weights.
- **Braking / vacate:** Rapid-exit taxiway detail not confirmed in reachable sources — confirm with Ground/Apron on the day. 🟧
- **Runway-excursion watch:** 🟧 RWY 20R's displaced threshold is the one confirmed distance-reduction case; frequent tropical convective-shower wet-runway braking-action awareness applies field-wide, though no de-icing/contamination-by-frost consideration exists in this climate.

---

## 8. Taxi-in routing to terminal & hot spots

- **Typical taxi-in by runway → terminal:** After landing on the assigned runway, taxi in to the assigned terminal per Ground/Apron assignment; VAMSYS mirror gives a planning taxi-in time of **12 min** `[VAMSYS mirror 2026-07-26]`.
- **Hot spots / tight taxiways:** Not identified by name in reachable public sources this pass — flag for AIRAC confirmation, particularly given the field's active Changi East construction history around RWY 02C/20C and the RWY 02R/20L conversion works. 🟧 See [Briefing §13](index.md).
- **Stand/gate notes:** See [Dispatch §3](dispatch.md) — T3 (8 A380-capable gates of 28) and T4 (4 widebody stands) are the clearest confirmed widebody clusters; current gate assignment for our operation not yet confirmed.

---

## 9. Arrival frequency sequence

- **Sequence:** **Singapore Approach (124.05/124.60/126.30, sector-specific) → Singapore Arrival 119.30/119.40/119.55 → Tower (Changi Tower/Apron 121.90, Singapore Tower 118.25/118.60, Changi East Tower 122.25) → Singapore Ground 121.00/121.72/121.85/122.55/124.30/125.65.** Take the assigned frequency and confirm current chart. (Frequencies from Briefing §8; two tier-4 sources disagree on exact runway-to-tower mapping — treat as 🟧.)
- **Approach/Departure control:** **Singapore Approach** is the facility for Changi's terminal approach; **Singapore ACC** (Singapore FIR, WSJC) hands off en route inbound — see [Singapore (WSJC) FIR brief](../../../../airspace/fir/asia/singapore-wsjc.md). 🟧 Exact sector/frequency assignment is AIRAC-dependent.

---

## 10. Gotchas

- **RWY 02R/20L is never a landing runway** — do not expect it as an arrival option under any configuration while it remains RSAF-only.
- **RWY 20R's 740 m displaced threshold** reduces its usable landing distance to 3,260 m — do not plan to touch down short of it.
- **Haze events (Aug–Oct) can suppress visibility for extended periods** — brief the CAT II/III plan for the equipped runway ends and a holding/diversion contingency in season.
- **Sumatra squalls can arrive with limited warning in the predawn/early-morning hours (Apr–Nov)** — watch the ATIS wind trend and weather radar closely during this window.
- **Extremely dense multi-airport TMA** (Changi/Seletar/Paya Lebar Air Base/Tengah Air Base) sustains continuous high traffic density — expect vectoring/holding, especially during a weather event or peak bank.
- **ATC frequency-to-runway mapping is inconsistent across public sources** — confirm the correct approach/tower frequency locally rather than assuming a fixed mapping.

---

## Open items (🟧 — confirm against AIP / current AIRAC)

- Current-AIRAC STAR names and exact approach minima per runway.
- ILS category/ident confirmation for RWY 02L and RWY 20R.
- Exact LVP/haze-driven visibility trigger values.
- Rapid-exit taxiway/vacate detail.
- Predominant/preferential runway-in-use logic (02- vs 20-configuration).
- Current taxi-in routing and gate assignment for our operation.

> **Live data — pull at planning:** wx/METAR/TAF/TREND, NOTAM (runway/approach/navaid/lighting, esp. RWY 02R/20L civil-service progress and any Changi East construction status), ATIS config/wind trend, PSI/haze status. Not stored in this durable file.

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim charts inform content but are not listed here.*

- **CAAS AIP Singapore, AD 2 WSSS** (eAIP landing page, cycle valid from 2026-03-19) — https://aim-sg.caas.gov.sg/aim-content/uploads/aip/31-MAR-2026/AIP/2026-03-19-000000/html/eAIP/SG-AD-2-WSSS-en-GB.html — primary source of record; not independently retrieved this session, see Briefing page for full note.
- **CAAS AIP Singapore, ENR 1.7** — https://aim-sg.caas.gov.sg/aim-content/uploads/aip/2025-07-24/final/2017-08-17-Non-AIRAC/html/eAIP/ENR-1.7-en-GB.html (retrieved 2026-07-26). *Transition altitude/level.*
- Wikipedia — "Singapore Changi Airport" — https://en.wikipedia.org/wiki/Singapore_Changi_Airport (retrieved 2026-07-26). *RWY 20R displaced threshold, RWY 02R/20L status.*
- SkyVector — https://skyvector.com/airport/WSSS/Singapore-Changi-International-Airport (retrieved 2026-07-26). *Communications frequencies, nearby-airport bearings.*
- CAAS Newsroom — "Seletar Airport Closed due to Prolonged Poor Visibility Caused by Haze" — https://www.caas.gov.sg/about-caas/newsroom/Detail/seletar-airport-closed-due-to-prolonged-poor-visibility-caused-by-haze (retrieved 2026-07-26). *Haze/visibility operational corroboration.*

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-26 | Built from national AIP; K Global fields from live VAMSYS; 4-page pack. |
