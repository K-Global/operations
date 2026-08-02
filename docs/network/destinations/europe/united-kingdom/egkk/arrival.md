# EGKK — Gatwick · Arrival Page

**EGKK / LGW** · Crawley, West Sussex, United Kingdom · Europe
**Version** v0.1 · **Updated** 2026-07-26 · **Status** Draft

> **Read-me:** Tactical arrival aid for the sim, not a chart. Companion to the [EGKK Briefing](index.md), [Dispatch](dispatch.md) and [Departure](departure.md) pages. STARs/approaches are listed **by name only or flagged not-yet-confirmed** — fly the charted current-AIRAC version; minima shown are pointers, always verify on the current chart. Static data only; live wx/NOTAM are pulled at planning. Open 🟧 items are in §Open items. Flag legend 🟥 restriction/hazard · 🟧 caution/unverified · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| Usual landing runway(s) | **08R or 26L (main)** — essentially all landings; **08L/26R (standby)** only if the main runway is closed/unavailable |
| Usual approach | ILS (CAT III capability) on the main runway; RNAV(GNSS) or SRA only if the standby runway is in use |
| Config logic | Wind-driven; standby runway is not an independent-parallel arrival option |
| Transition level | By QNH; **transition altitude 6,000 ft** `[UK AIP AD 2.17]` 🟩 |
| LVP trigger | Not confirmed exact RVR figure this pass; CAT III on the main runway is the standing mitigation for low-visibility conditions 🟧 |
| Missed-approach driver | Airspace/traffic density (single-effective-runway sequencing), not terrain |

---

## 2. STAR / transition selection

- **STARs (names only — verify current AIRAC):** Not confirmed as formal designators this pass — the two holding stacks (**WILLO**, west of Lewes above Burgess Hill, and **TIMBA**, above Heathfield) are confirmed by name, with below-6,000 ft holding at the **Mayfield (MAY)** VOR `[Gatwick noise-portal PDF, tier-4]`; pull the current-AIRAC STAR list at planning. 🟧
- **Selection by arrival direction / runway:** Nearly all arrivals land on the main runway (08R/26L) regardless of stack of origin; Gatwick Director assigns the stack-to-runway transition for the active configuration.
- **Transition to approach:** Expect a stack-to-ILS transition with radar vectors onto final on the main runway; verify the charted transition.
- **Speed / flow constraints on the STAR:** Published speed/altitude gates are pointers only — verify chart; the minimum stack altitude is 7,000 ft (noise-driven) with MAY VOR holding below 6,000 ft `[tier-4]`.

---

## 3. Descent & energy plan

- **Top-of-descent trigger:** Standard descent-profile planning; plan TOD to meet the first stack/STAR altitude gate.
- **Speed control:** STAR speed gates and 250 KIAS below FL100 (UK/ICAO norm) — confirm current chart.
- **Altitude constraints:** Key STAR/stack crossing constraints are pointers — fly the charted altitudes.
- **Energy traps:** Extended stack holding during peak demand or any main-runway disruption is the main energy/fuel-planning trap at this field, given the single-effective-runway structure — brief a holding-fuel contingency generously.

---

## 4. Approach selection by runway

*Names only — verify minima on current AIRAC charts.*

| RWY | Approach (name) | LVP / CAT note | Minima pointer (verify AIRAC) |
|---|---|---|---|
| 08R | ILS | CAT III capability — displaced threshold, reduced LDA 2,765 m 🟧 | verify current chart |
| 26L | ILS | CAT III capability — displaced threshold, reduced LDA 2,830 m 🟧 | verify current chart |
| 08L | RNAV (GNSS) / SRA only | **No ILS** — only when main runway unavailable, reduced LDA 2,241 m | verify current chart |
| 26R | RNAV (GNSS) / SRA only | **No ILS** — only when main runway unavailable, reduced LDA 2,146 m | verify current chart |

- **LVP triggers:** CAT III applies to the main runway; exact RVR/trigger figures not confirmed this pass. 🟧 The standby runway has **no ILS** — an arrival planned onto 08L/26R in low visibility needs an RNAV(GNSS)- or SRA-capable approach, not an ILS.

---

## 5. Approach hazards (terrain / CFIT / specific threats)

- **CFIT / terrain:** 🟩 None. Flat Sussex/Surrey lowland at 203 ft AMSL — no close-in high terrain relevant to any arrival path.
- **Specific threats:** 🟥 The **200 m runway spacing** means the standby runway can never be treated as an independent simultaneous arrival option — all arrivals sequence onto the single effective runway. Displaced thresholds reduce usable LDA on all four ends — brief the correct figure.
- **Airspace / traffic:** 🟥 High density under **Gatwick Director** given the single-effective-runway constraint — brief for re-sequencing and extended vectoring/holding, especially during peak banks or any main-runway disruption.

---

## 6. Missed approach watch-items

- **Terrain-driven MAP notes:** Terrain is not the driver (flat lowland) — fly the published MAP and verify climb-gradient/turn on the current chart.
- **Re-sequencing environment:** A go-around drops you back into the single-effective-runway sequencing environment — expect extended vectoring and possible holding before re-sequencing, since there is no independent parallel runway to absorb the miss.
- **Go-around traps:** Awareness of any traffic queued for the standby runway if the main runway is temporarily degraded during your approach.

---

## 7. Landing runway / LDA & braking / vacate

- **LDA by runway:** 08R **2,765 m** (395 m displaced threshold); 26L **2,830 m** (425 m displaced threshold); 08L **2,241 m** (321 m displaced threshold); 26R **2,146 m** (415 m displaced threshold) `[UK AIP AD 2.12/2.13]` — all non-limiting for K Global types at typical arrival weights, but brief the correct reduced figure.
- **Braking / vacate:** **RETILs (Rapid Exit Taxiway Indicator Lights)** confirmed on the first and second rapid-exit taxiways for RWY 08R/26L, 3-2-1 amber countdown `[UK AIP AD 2.14]`.
- **Runway-excursion watch:** 🟧 Displaced-threshold LDA reduction is the primary factor; winter-contamination braking-action consideration applies in the de-icing season (potassium acetate/ethylene glycol programme confirmed, AIP AD 2.7). Maximum weight limit 562,000 kg applies but is not a factor for our fleet.

---

## 8. Taxi-in routing to terminal & hot spots

- **Typical taxi-in by runway → terminal:** After landing on the main runway, taxi in to North or South Terminal per Ground/Director assignment; VAMSYS mirror gives a planning taxi-in time of **16 min** `[VAMSYS mirror 2026-07-26]`.
- **Hot spots / tight taxiways:** 🟧 **HS1 (Foxtrot Romeo RET)** near the 26L/26R junction — vacating via taxiway FR does not require clearance to cross 26R onto taxiway J (can look like a runway crossing); **HS2 (Taxiway Juliet)** — caution where it deviates north. Sourced to a dated AIP-chart mirror, not independently re-confirmed against the current-cycle AIP text — verify current chart.
- **Stand/gate notes:** See [Dispatch §3](dispatch.md) — North Terminal's 3 A380-capable stands are the confirmed heavy-widebody cluster; specific gate assignment for our operation not confirmed.

---

## 9. Arrival frequency sequence

- **Sequence:** **Gatwick Director (118.95/126.82/129.02, sector-specific) → Gatwick Tower (124.230/134.230) → Gatwick Ground (121.805).** Take the assigned frequency and confirm current chart. (Frequencies from Briefing §8, flagged tier-4/unconfirmed pending AIP AD 2.18 cross-check.)
- **Approach/Departure control:** **Gatwick Director** is the facility for Gatwick's terminal approach; **London (EGTT)** hands off en route inbound — **no dedicated EGTT FIR brief exists yet in this library**; see [Europe airspace briefing](../../../../airspace/europe.md) for continental context. 🟧

---

## 10. Gotchas

- **The standby runway is never a simultaneous-independent arrival option** — confirm which runway (main or standby) is active before planning approach type (ILS vs RNAV/SRA).
- **Displaced thresholds on all four runway ends** — brief the reduced LDA.
- **HS1 area near 26L/26R** can look like a runway crossing but is not always one by default — confirm the specific ATC instruction.
- **Single-effective-runway sequencing means extended holding is more likely during peak demand or any main-runway disruption** — brief a generous holding-fuel contingency.
- **Night period 2300–0700** — a delayed arrival risks the movement being barred outright; do not plan a schedule that relies on a post-restriction landing.
- **Lit tower cranes near the field (South Terminal railway station area)** — treat as a live NOTAM item.

---

## Open items (🟧 — confirm against AIP / current AIRAC)

- Current-AIRAC STAR names and exact approach minima per runway.
- ILS category/sub-category and idents on the main runway.
- Exact LVP/CAT III trigger RVR values.
- HS1/HS2 hot-spot confirmation against the current-cycle AIP.
- Current post-Northern-Runway-project taxi-in routing (project not yet operational — confirm status before relying on any future change).

> **Live data — pull at planning:** wx/METAR/TAF/TREND, NOTAM (runway/approach/navaid/lighting, esp. main/standby runway status), ATIS config/wind trend, current holding/flow status. Not stored in this durable file.

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim charts inform content but are not listed here.*

- **UK AIP (NATS AIS), AD 2‑EGKK**, AIRAC cycle effective 2022‑06‑16 — https://www.aurora.nats.co.uk/htmlAIP/Publications/2022-06-16-AIRAC/html/eAIP/EG-AD-2.EGKK-en-GB.html (retrieved 2026-07-26). *Declared distances, lighting/RETIL detail, transition altitude.*
- AIP chart mirror (AIRAC 07/2019) — https://airportcodes.aero/charts/EGKK.pdf (retrieved 2026-07-26). *Hot spots.*
- Gatwick Airport noise portal — holding stacks — https://aircraftnoise.gatwickairport.com/2021/03/29/arrivals-and-holding/ (retrieved 2026-07-26).

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-26 | Built from UK AIP (NATS AIS); K Global fields from live VAMSYS; 4-page pack. |
