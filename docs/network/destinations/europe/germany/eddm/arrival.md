# EDDM — Munich (Franz Josef Strauß) · Arrival Page

**EDDM / MUC** · Freising, Bavaria, Germany · Europe
**Version** v0.1 · **Updated** 2026-07-25 · **Status** Draft

> **Read-me:** Tactical arrival aid for the sim, not a chart. Companion to the [EDDM Briefing](index.md), [Dispatch](dispatch.md) and [Departure](departure.md) pages. STARs/approaches are listed **by name only** — fly the charted current-AIRAC version; minima shown are pointers, always verify on the current chart. Static data only; live wx/NOTAM are pulled at planning. Open 🟧 items are in §Open items. Flag legend 🟥 restriction/hazard · 🟧 caution/unverified · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| Usual landing runway(s) | **08L/26R** (Northern) for north-bound traffic; **08R/26L** (Southern) for south-bound traffic |
| Usual approach | ILS CAT II/III on the assigned runway end; NDB and RNAV(GPS) also available on all four ends |
| Config logic | Direction-of-flight split; both runways independent and can run simultaneously — physical 08-vs-26 direction is wind-dependent |
| Transition level | By QNH; transition altitude 5,000 ft — verify current chart 🟧 |
| LVP trigger | Not confirmed exact RVR trigger; ILS approved to CAT IIIb on all four runway ends per VATSIM SOP citing AIP 🟧 |
| Missed-approach driver | Traffic density / HIRO sequencing, not terrain |

---

## 2. STAR / transition selection

- **STARs (names only — verify current AIRAC):** Clearance-limit fixes **BETOS, NAPSA, LANDU, ROKIL** depending on inbound direction; RNAV transitions are flown from these fixes.
- **Selection by arrival direction / runway:** North-bound traffic generally routed to the Northern Runway (08L/26R); south-bound traffic to the Southern Runway (08R/26L).
- **Transition to approach:** RNAV transitions flown from the clearance-limit fixes above onto the ILS.
- **Speed / flow constraints on the STAR:** 250 KIAS below FL100 (standard), plus TMA-specific restrictions per chart.
- **FMC/RNAV transition caution:** 🟧 Per VATSIM Germany operational guidance, many FMC implementations mis-sequence the RNAV transition at Munich — the transition should start at the **next-to-last** STAR waypoint, but some FMCs append it after the STAR's final waypoint instead, causing an unwanted fly-to-and-back. Compare the FMC waypoint list against the published arrival chart and remove the redundant STAR endpoint if needed — verify against your own FMS/aircraft type behaviour.

---

## 3. Descent & energy plan

- **Top-of-descent trigger:** Standard descent-profile planning to meet the first STAR altitude gate; no unusual EDDM-specific descent constraint identified.
- **Speed control:** 250 KIAS below FL100 (standard); TMA-specific restrictions per chart.
- **Altitude constraints:** Key STAR crossing constraints are pointers — fly the charted altitudes.
- **Energy traps:** The FMC/RNAV transition mis-sequencing caution above (§2) is the standout EDDM-specific trap; otherwise standard HIRO-driven sequencing/vectoring during peak traffic.

---

## 4. Approach selection by runway

*Names only — verify minima on current AIRAC charts.*

| RWY | Approach (name) | LVP / CAT note | Minima pointer (verify AIRAC) |
|---|---|---|---|
| 08L | ILS, NDB, RNAV (GPS) | **CAT II/III** (IIIb per SOP citing AIP) 🟩 | verify current chart |
| 26R | ILS, NDB, RNAV (GPS) | **CAT II/III** (IIIb per SOP citing AIP) 🟩 | verify current chart |
| 08R | ILS, NDB, RNAV (GPS) | **CAT II/III** (IIIb per SOP citing AIP) 🟩 | verify current chart |
| 26L | ILS, NDB, RNAV (GPS) | **CAT II/III** (IIIb per SOP citing AIP) 🟩 | verify current chart |

- **LVP triggers:** Not confirmed exact RVR trigger; CAT II/III currency required to exploit the field's full LVP capability. 🟧

---

## 5. Approach hazards (terrain / CFIT / specific threats)

- **CFIT / terrain:** 🟩 Low. Flat Bavarian plain at 1,487 ft; the Alps rise ~50–60 NM south, well outside the standard TMA corridors — relevant to regional diversion planning and mountain-wave/turbulence potential on strong southerly-flow days, not to the field's approach paths.
- **Specific threats:** 🟧 Widely-spaced, fully independent parallel runways (not closely-spaced) — no dependent-approach wake constraint between them; HIRO intersection-departure sequencing on the ground is the more common interaction point.
- **Airspace / traffic:** 🟧 Radar-controlled major European hub under München Radar/Approach (Director, Feeder positions); Langen ACC en route — brief for sustained high traffic density.

---

## 6. Missed approach watch-items

- **Terrain-driven MAP notes:** Terrain is not the driver — no significant close-in terrain; fly the published MAP and verify climb-gradient/turn on the current chart.
- **Re-sequencing environment:** A go-around returns you to a high-density radar environment with HIRO ground-sequencing in effect — expect vectoring/holding, especially during peak banks.
- **Go-around traps:** No terrain-specific trap; traffic/config awareness on the independent parallel set during the miss.

---

## 7. Landing runway / LDA & braking / vacate

- **LDA by runway:** Full-length TODA/ASDA/LDA per direction not individually confirmed from reachable sources 🟧 — treat the 4,000 m physical length as the reference and verify exact declared LDA against DFS AIP AD 2 EDDM before relying on it for a limiting-weight arrival.
- **Braking / vacate:** Rapid-exit taxiway detail not confirmed in reachable sources — confirm with Ground/Apron on the day. 🟧
- **Runway-excursion watch:** 🟧 A 2011 BFU-investigated runway excursion on 08R followed an ILS localizer signal disturbance from a departing aircraft during a CAT I autoland — maintain a firm go-around trigger on any late-stage autoland deviation. Both runways are 4,000 m — reverse thrust rarely required by design; winter snow/persistent snow cover is the relevant contamination/braking-action consideration.

---

## 8. Taxi-in routing to terminal & hot spots

- **Typical taxi-in by runway → terminal:** After landing, taxi in via the two-phase system (numbered entry N1–N4 north / S1–S8 south, then handed to Ground) toward Terminal 1, Terminal 2/satellite, or the cargo apron per assignment; VAMSYS mirror gives a planning taxi-in time of **16 min** `[VAMSYS mirror 2026-07-25]`.
- **Hot spots / tight taxiways:** 🟥 Colour-coded (orange/blue) restricted lines on taxiways **W1, C3, E1, D3, D6 and E3**, with wingspan-banded limits — taxi with vigilance, especially when assigned a colour-coded line.
- **Stand/gate notes:** See [Dispatch §3](dispatch.md) — Terminal 2 satellite stands 243–256 and cargo apron 901–907 are the widebody clusters; Terminal 1 stands 101–109/118–121 have specific restrictions.

---

## 9. Arrival frequency sequence

- **Sequence:** **München Director/Radar 118.825/131.225/120.775 → München Tower North/South 118.705/120.505 → München Ground North/South 121.980/121.830 → Apron (Vorfeld 1/2/3) 121.780/121.710/121.930.** Take the assigned frequency and confirm current chart. (Frequencies from Briefing §8.)
- **Approach/Departure control:** **München Radar/Approach** (Director, Feeder positions) is the facility for Munich's terminal approach; **Langen ACC (EDGG)** hands off en route inbound — see [Langen (EDGG) FIR brief](../../../../airspace/fir/europe/langen-edgg.md). 🟧 Exact sector/frequency assignment is AIRAC-dependent.

---

## 10. Gotchas

- **FMC/RNAV transition mis-sequencing** — verify the FMC waypoint list against the published arrival chart and remove any redundant STAR endpoint (§2).
- **A 2011 CAT-I autoland runway excursion on 08R** followed an ILS localizer signal disturbance from a departing aircraft — maintain a firm go-around trigger on any late-stage autoland deviation.
- **Föhn wind** can shift temperature/wind rapidly even in winter — watch the ATIS/TAF trend, not a static forecast.
- **Winter snowfall/persistent snow cover** — confirm runway/taxiway friction reports before a winter arrival.
- **Night-noise regime** — a late arrival risks falling outside the bonus-list eligibility window (core no-movement 00:00–05:00); do not plan a schedule relying on a shoulder-hour landing without confirming eligibility.
- **Colour-coded restricted taxi lines (W1, C3, E1, D3, D6, E3)** on taxi-in — confirm wingspan eligibility before using one.

---

## Open items (🟧 — confirm against AIP / current AIRAC)

- Current-AIRAC STAR names and exact approach minima per runway.
- ILS sub-category confirmation beyond the VATSIM SOP citation of CAT IIIb.
- Exact LVP/CAT trigger RVR values.
- Rapid-exit taxiway/vacate detail.
- Full-length declared LDA per runway direction (only intersection-based TORA figures currently sourced).

> **Live data — pull at planning:** wx/METAR/TAF/TREND, NOTAM (runway/approach/navaid/lighting), ATIS config/wind trend, HIRO intersection availability. Not stored in this durable file.

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim charts inform content but are not listed here. See <../../../_Templates/_Sources.md> for the tier hierarchy.*

- OpenNav — EDDM chart index (approach/STAR chart titles) — https://opennav.com/airport/EDDM (retrieved 2026-07-25).
- VATSIM Germany Knowledgebase — "SOPs FIR München — EDDM München Airport" (see Briefing page for full citations). *CAT IIIb-all-runway ILS approval, FMC RNAV-transition caution, clearance-limit fixes.*
- SKYbrary — "B773, Munich Germany, 2011" — https://skybrary.aero/accidents-and-incidents/b773-munich-germany-2011 (retrieved 2026-07-25). *Runway-excursion case, §Gotchas source.*

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-25 | Built from DFS eAIP + Briefing; folded to 4-page pack. |
