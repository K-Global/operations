# EGLL — Heathrow · Arrival Page

**EGLL / LHR** · Hillingdon, Greater London, United Kingdom · Europe
**Version** v0.1 · **Updated** 2026-07-26 · **Status** Draft

> **Read-me:** Tactical arrival aid for the sim, not a chart. Companion to the [EGLL Briefing](index.md), [Dispatch](dispatch.md) and [Departure](departure.md) pages. STARs/approaches are listed **by name only or flagged not-yet-confirmed** — fly the charted current-AIRAC version; minima shown are pointers, always verify on the current chart. Static data only; live wx/NOTAM are pulled at planning. Open 🟧 items are in §Open items. Flag legend 🟥 restriction/hazard · 🟧 caution/unverified · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| Usual landing runway(s) | Whichever runway holds the **landing role** under the active segregated-mode configuration — 09L or 27R (or the reciprocal via the westerly-ops 15:00 role-swap) |
| Usual approach | ILS (CAT III capability); per-end category/idents not confirmed this pass 🟧 |
| Config logic | Segregated mode: one runway landing, other departing; westerly-preferred; daily role-swap at 15:00 local **only in westerly ops** — easterly ops keep 09L permanently as the landing runway |
| Transition level | By QNH; transition altitude 🟧 not independently confirmed for EGLL this pass |
| LVP trigger | Autumn/winter London Basin radiation fog/low stratus — CAT III/stop-bar infrastructure is the standing mitigation 🟧 (exact RVR trigger not confirmed) |
| Missed-approach driver | Airspace/traffic density (four active holding stacks, segregated-mode structure), not terrain |

---

## 2. STAR / transition selection

- **STARs (names only — verify current AIRAC):** Not confirmed as formal designators this pass — the four holding stacks (**Bovingdon/BNN** NW, **Biggin/BIG** SE, **Lambourne/LAM** NE, **Ockham/OCK** SW) are confirmed by name and descend in 1,000 ft increments from roughly 16,000 ft to 8,000 ft `[tier-4 corroboration]`; pull the current-AIRAC STAR list at planning. 🟧
- **Selection by arrival direction / runway:** The active segregated-mode configuration (westerly-preferred) determines which runway is landing; London Terminal Control/Heathrow Director assigns the stack-to-runway transition for the active configuration.
- **Transition to approach:** Expect a stack-to-ILS transition with radar vectors onto final; verify the charted transition.
- **Speed / flow constraints on the STAR:** Published speed/altitude gates are pointers only — verify chart; expect additional flow speed control given the high-density environment and frequent stack holding.

---

## 3. Descent & energy plan

- **Top-of-descent trigger:** Standard descent-profile planning; plan TOD to meet the first stack/STAR altitude gate. Fog-driven reduced-rate arrivals in autumn/winter can compress the descent — brief an early-descent/holding contingency.
- **Speed control:** STAR speed gates and 250 KIAS below FL100 (UK/ICAO norm) — confirm current chart.
- **Altitude constraints:** Key STAR/stack crossing constraints (stacks work 16,000 ft down to 8,000 ft in 1,000 ft layers) are pointers — fly the charted altitudes.
- **Energy traps:** Extended stack holding during fog/inversion events or a delay backlog is the main energy/fuel-planning trap at this field — brief a holding-fuel contingency generously.

---

## 4. Approach selection by runway

*Names only — verify minima on current AIRAC charts.*

| RWY | Approach (name) | LVP / CAT note | Minima pointer (verify AIRAC) |
|---|---|---|---|
| 09L | ILS | CAT III capability — displaced threshold, reduced LDA 3,592 m 🟧 | verify current chart |
| 27R | ILS | CAT III capability 🟧 | verify current chart |
| 09R | ILS | CAT III capability — displaced threshold, reduced LDA 3,350 m 🟧 | verify current chart |
| 27L | ILS | CAT III capability 🟧 | verify current chart |

- **LVP triggers:** Autumn/winter radiation fog/low stratus under London Basin conditions is the routine EGLL trigger — CAT III/stop-bar infrastructure is the standing mitigation. Per-end ILS category/sub-category not confirmed from a primary table this pass. 🟧

---

## 5. Approach hazards (terrain / CFIT / specific threats)

- **CFIT / terrain:** 🟩 None. Flat London Basin at 83 ft AMSL — no close-in high terrain relevant to any arrival path.
- **Specific threats:** 🟥 Very high, sustained traffic density with **four active holding stacks** feeding a **segregated-mode** two-runway system — expect vectoring/holding, especially in marginal weather or during a delay backlog. **Displaced thresholds on both landing runways** reduce the usable LDA — brief the correct figure, not the full physical runway length.
- **Airspace / traffic:** 🟥 One of the world's busiest terminal areas under **London Terminal Control/Heathrow Director** — brief for re-sequencing and extended vectoring, especially in fog.

---

## 6. Missed approach watch-items

- **Terrain-driven MAP notes:** Terrain is not the driver (flat basin) — fly the published MAP and verify climb-gradient/turn on the current chart.
- **Re-sequencing environment:** A go-around drops you back into a very high-density, segregated-mode traffic environment with four active holding stacks — expect extended vectoring and possible holding before re-sequencing, especially during a fog event.
- **Go-around traps:** Traffic/config awareness given the segregated-mode structure; a missed approach does not have a second simultaneously-available landing runway.

---

## 7. Landing runway / LDA & braking / vacate

- **LDA by runway:** 09L **3,592 m** (309 m displaced threshold); 27R **3,882 m** (no displacement); 09R **3,350 m** (308 m displaced threshold); 27L **3,658 m** (no displacement) `[UK AIP AD 2.13]` — all non-limiting for K Global types at typical arrival weights, but brief the correct reduced figure on the displaced-threshold runways.
- **Braking / vacate:** Rapid-exit taxiway detail not confirmed in reachable sources — confirm with Ground/Director on the day. 🟧
- **Runway-excursion watch:** 🟧 Displaced-threshold LDA reduction is the primary factor; winter-contamination braking-action consideration applies in the de-icing season (mechanical/chemical/ethylene-glycol programme confirmed, AIP AD 2.7).

---

## 8. Taxi-in routing to terminal & hot spots

- **Typical taxi-in by runway → terminal:** After landing on the assigned runway, taxi in to the assigned terminal (T2/T3/T4/T5) per Ground/Director assignment; VAMSYS mirror gives a planning taxi-in time of **20 min** `[VAMSYS mirror 2026-07-26]`.
- **Hot spots / tight taxiways:** 🟧 No named ICAO hot-spot designators confirmed in the AIP extract reached this pass — Heathrow's general reputation for a tight, complex ground layout is well documented generically; taxi with elevated vigilance pending a confirmed hot-spot list.
- **Stand/gate notes:** See [Dispatch §3](dispatch.md) — widebody clusters at T5 Concourse C, T3 Pier 6, T4, T2; specific gate assignment for our operation not confirmed.

---

## 9. Arrival frequency sequence

- **Sequence:** **Heathrow Director → Heathrow Tower → Heathrow Ground.** Take the assigned frequency and confirm current chart. (Frequencies from Briefing §8 — flagged tier-4/unconfirmed pending AIP AD 2.18 cross-check.)
- **Approach/Departure control:** **Heathrow Director** (London Terminal Control) is the facility for Heathrow's terminal approach; **London (EGTT)** hands off en route inbound — **no dedicated EGTT FIR brief exists yet in this library**; see [Europe airspace briefing](../../../../airspace/europe.md) for continental context. 🟧

---

## 10. Gotchas

- **Segregated-mode operation** — only one runway is ever landing at a time; confirm the active configuration before planning fuel/holding contingency.
- **Easterly ops keep 09L permanently as the landing runway** (no daily role-swap) — do not assume the westerly-ops 15:00 alternation pattern applies.
- **Displaced thresholds on both landing runways** — 09L −309 m, 09R −308 m — brief the reduced LDA.
- **Autumn/winter radiation fog events can drop the field below CAT I minima quickly** — brief the CAT III plan and a holding/diversion contingency in season.
- **Four active holding stacks (BNN/BIG/LAM/OCK)** sustain continuous high traffic density — expect vectoring/holding, especially in marginal weather or during a bank.
- **Numerous lit/unlit cranes near the field** — treat as a live NOTAM item given ongoing London-area construction.
- **Night restricted period ≈2300–0400** — a delayed arrival risks the movement being barred outright; do not plan a schedule that relies on a post-restriction landing.

---

## Open items (🟧 — confirm against AIP / current AIRAC)

- Current-AIRAC STAR names and exact approach minima per runway.
- ILS category/sub-category and idents per runway end.
- Exact LVP/CAT III trigger RVR values.
- Rapid-exit taxiway/vacate detail.
- Named ground-movement hot spots.
- Transition altitude/level for EGLL specifically.

> **Live data — pull at planning:** wx/METAR/TAF/TREND, NOTAM (runway/approach/navaid/lighting, esp. CAT III equipment status), ATIS config/wind trend, current holding/flow status. Not stored in this durable file.

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim charts inform content but are not listed here.*

- **UK AIP (NATS AIS), AD 2‑EGLL**, AIRAC cycle effective 2022‑06‑16 — https://www.aurora.nats.co.uk/htmlAIP/Publications/2022-06-16-AIRAC/html/eAIP/EG-AD-2.EGLL-en-GB.html (retrieved 2026-07-26). *Declared distances, obstacles, seasonal/de-icing.*
- Wikipedia — "Heathrow arrival stacks" — https://en.wikipedia.org/wiki/Heathrow_holding_stack (retrieved 2026-07-26). *Holding-stack detail.*
- Wikipedia — "Heathrow Airport" — https://en.wikipedia.org/wiki/Heathrow_Airport (retrieved 2026-07-26). *Segregated-mode/westerly-preference operation.*

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-26 | Built from UK AIP (NATS AIS); K Global fields from live VAMSYS; 4-page pack. |
