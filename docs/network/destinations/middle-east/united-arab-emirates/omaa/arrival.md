# OMAA — Zayed Intl · Arrival Page

**OMAA / AUH** · Abu Dhabi, United Arab Emirates · Middle East
**Version** v0.1 · **Updated** 2026-07-26 · **Status** Draft — UAE GCAA AIP not reachable this pass; built from tier-4 public sources

> **Read-me:** Tactical arrival aid for the sim, not a chart. Companion to the [OMAA Briefing](index.md), [Dispatch](dispatch.md) and [Departure](departure.md) pages. STARs/approaches are listed **by name only or flagged not-yet-confirmed** — fly the charted current-AIRAC version; minima shown are pointers, always verify on the current chart. Static data only; live wx/NOTAM are pulled at planning. Open 🟧 items are in §Open items. Flag legend 🟥 restriction/hazard · 🟧 caution/unverified · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| Usual landing runway(s) | Not published / verify — expect wind-driven selection between 13L/31R and 13R/31L 🟧 |
| Usual approach | ILS, reported CAT III-B capability on both runways (tier-4 corroboration only) 🟧 |
| Config logic | Not confirmed in reachable sources 🟧 |
| Transition level | By QNH; transition altitude not confirmed this pass 🟧 |
| LVP trigger | Shamal dust/haboob and any fog event — exact RVR trigger not confirmed 🟧 |
| Missed-approach driver | Airspace/traffic density (dense Abu Dhabi/Dubai terminal environment), not terrain |

---

## 2. STAR / transition selection

- **STARs (names only — verify current AIRAC):** Not confirmed in reachable research pass — pull the current-AIRAC STAR list at planning. 🟧
- **Selection by arrival direction / runway:** Not confirmed in reachable sources — expect radar vectoring by Abu Dhabi Approach onto the active configuration. 🟧
- **Transition to approach:** Expect an RNAV-STAR-to-ILS transition with radar vectors onto final, consistent with the dense radar-controlled Emirates FIR — see [Emirates (OMAE) FIR brief](../../../../airspace/fir/middle-east/emirates-omae.md) §3.
- **Speed / flow constraints on the STAR:** Not confirmed — verify chart. 🟧

---

## 3. Descent & energy plan

- **Top-of-descent trigger:** Standard descent-profile planning; plan TOD to meet the first STAR altitude gate (not published this pass). 🟧
- **Speed control:** 250 KIAS below FL100 (ICAO norm) — confirm current chart.
- **Altitude constraints:** Key STAR crossing constraints are pointers — fly the charted altitudes. 🟧
- **Energy traps:** Late runway/config changes ahead of a wind shift, and reduced-visibility events during shamal dust, are the main energy/planning traps at this field.

---

## 4. Approach selection by runway

*Names only — verify minima on current AIRAC charts.*

| RWY | Approach (name) | LVP / CAT note | Minima pointer (verify AIRAC) |
|---|---|---|---|
| 13L/31R | ILS | Reported **CAT III-B** — not primary-confirmed 🟧 | verify current chart |
| 13R/31L | ILS | Reported **CAT III-B** — not primary-confirmed 🟧 | verify current chart |

- **LVP triggers:** Shamal dust/haboob visibility events are the routine trigger candidate at this field; exact RVR trigger and ILS sub-category not confirmed from a primary table this pass. 🟧

---

## 5. Approach hazards (terrain / CFIT / specific threats)

- **CFIT / terrain:** 🟩 None. Flat coastal/desert site at 88 ft AMSL — no close-in high terrain relevant to any arrival path.
- **Specific threats:** 🟧 Twin full-length parallel runways support independent or dependent parallel operations during peak banks; exact parallel-approach procedure (independent vs dependent, minimum stagger) not confirmed in reachable sources.
- **Airspace / traffic:** 🟩 Radar/ADS-B-controlled throughout the dense Emirates FIR terminal environment — brief for vectoring/sequencing typical of a major hub, especially during banks that overlap with Dubai's terminal traffic. See [Emirates (OMAE) FIR brief](../../../../airspace/fir/middle-east/emirates-omae.md) §3/§6.

---

## 6. Missed approach watch-items

- **Terrain-driven MAP notes:** Terrain is not the driver (flat coastal site) — fly the published MAP and verify climb-gradient/turn on the current chart.
- **Re-sequencing environment:** A go-around drops you back into the dense Abu Dhabi terminal radar environment — expect vectoring and possible holding before re-sequencing, especially during a shamal-dust visibility event.
- **Go-around traps:** Not confirmed in reachable sources beyond standard dense-terminal-area considerations. 🟧

---

## 7. Landing runway / LDA & braking / vacate

- **LDA by runway:** Not published in reachable sources — both runways are in the 4,100 m+ class per tier-4 corroboration, ample for any K Global widebody at typical arrival weights (see [Briefing §7](index.md)). 🟧
- **Braking / vacate:** Rapid-exit taxiway detail not confirmed in reachable sources — confirm with Ground/Apron on the day. 🟧
- **Runway-excursion watch:** 🟧 No displaced thresholds confirmed; no contamination/braking-action consideration at this warm, dry-climate field under normal conditions.

---

## 8. Taxi-in routing to terminal & hot spots

- **Typical taxi-in by runway → terminal:** After landing, taxi in to **Terminal A** per Ground/Apron assignment; VAMSYS mirror gives a planning taxi-in time of **14 min** `[VAMSYS mirror 2026-07-25]`.
- **Hot spots / tight taxiways:** Not confirmed in reachable sources this pass. 🟧
- **Stand/gate notes:** See [Dispatch §3](dispatch.md) — current widebody stand allocation at Terminal A not yet confirmed.

---

## 9. Arrival frequency sequence

- **Sequence:** **Emirates area control / Abu Dhabi Approach 124.4 → Abu Dhabi Tower 119.2 → Ground (not confirmed) → Apron (not confirmed).** The tier-4 frequency snapshot found is very likely incomplete for a hub of this size — take the assigned frequency and confirm current chart (see [Briefing §8](index.md)). 🟧
- **Approach/Departure control:** **Abu Dhabi Approach** is the terminal facility; **Emirates area control (GCAA — Sheikh Zayed ANC)** hands off en route — see [Emirates (OMAE) FIR brief](../../../../airspace/fir/middle-east/emirates-omae.md). 🟧 Exact sector/frequency assignment is AIRAC-dependent.

---

## 10. Gotchas

- **Shamal dust/haboob events can drop visibility rapidly** — brief the low-visibility contingency and check current LVP status before arrival planning in season.
- **Twin full-length parallel runways** support high-density parallel operations during banks — maintain a heightened traffic scan even under radar.
- **Config swap driven by a wind shift** can bring a late runway change — watch the ATIS wind trend.
- **Terminal A is a relatively new, still-maturing single-terminal operation** — confirm current taxi-in routing and gate assignment rather than assuming a static picture.
- **Regional conflict-zone/GNSS-interference advisory is live** — cross-check current GNSS integrity/RAIM status and be prepared for radar-vector fallback (see the Middle East airspace brief §9).

---

## Open items (🟧 — confirm against AIP / current AIRAC)

- Current-AIRAC STAR names and exact approach minima per runway.
- ILS sub-category (CAT III-B reported, not primary-confirmed) and idents/frequencies.
- Exact LVP/CAT III trigger RVR values.
- Rapid-exit taxiway/vacate detail.
- Current taxi-in routing and gate assignment at Terminal A.
- Full arrival frequency sequence (only a partial tier-4 snapshot found).

> **Live data — pull at planning:** wx/METAR/TAF/TREND, NOTAM (runway/approach/navaid/lighting), ATIS config/wind trend, the current regional conflict-zone/GNSS-interference picture. Not stored in this durable file.

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim charts inform content but are not listed here.*

- OurAirports — https://ourairports.com/airports/OMAA/frequencies.html , /closest-navaids.html (retrieved 2026-07-26).
- Wikipedia — "Zayed International Airport" — https://en.wikipedia.org/wiki/Zayed_International_Airport (retrieved 2026-07-26). *CAT III-B corroboration.*
- Companion OM C file: [Emirates (OMAE) FIR brief](../../../../airspace/fir/middle-east/emirates-omae.md) — terminal control context.
- **UAE GCAA AIP (AD 2 OMAA)** — primary source of record; not reachable in this research pass.

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-26 | Built from national AIP; K Global fields from live VAMSYS; 4-page pack. |
