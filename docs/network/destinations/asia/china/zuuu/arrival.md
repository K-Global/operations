# ZUUU — Chengdu/Shuangliu · Arrival Page

**ZUUU / CTU** · Chengdu, Sichuan, China · Asia
**Version** v0.1 · **Updated** 2026-07-26 · **Status** Draft — provisional, AIP China gated

> **Read-me:** Tactical arrival aid for the sim, not a chart. Companion to the [ZUUU Briefing](index.md), [Dispatch](dispatch.md) and [Departure](departure.md) pages. STARs/approaches are listed **by name only or flagged not-yet-confirmed** — fly the charted current-AIRAC version; minima shown are pointers, always verify on the current chart. Static data only; live wx/NOTAM are pulled at planning. Open 🟧 items are in §Open items. Flag legend 🟥 restriction/hazard · 🟧 caution/unverified · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| Usual landing runway(s) | Not published / verify 🟧 |
| Usual approach | ILS reported (CAT III per tier-4 corroboration, both parallels) 🟧 |
| Config logic | Not published / verify 🟧 |
| Transition level | Not published / verify 🟧 |
| LVP trigger | Not confirmed; CAT III capability reported would imply an LVP regime exists — exact trigger not sourced 🟧 |
| Missed-approach driver | Not terrain at the field itself (flat basin) — see §5 |

---

## 2. STAR / transition selection

- **STARs (names only — verify current AIRAC):** Not confirmed in reachable research pass. 🟧
- **Selection by arrival direction / runway:** Not published / verify. 🟧
- **Transition to approach:** Not confirmed — verify charted transition. 🟧
- **Speed / flow constraints on the STAR:** Not confirmed; expect standard flow-speed control given China's centralised ATFM (see [Asia airspace brief §6](../../../../airspace/asia.md)). 🟧

---

## 3. Descent & energy plan

- **Top-of-descent trigger:** Standard descent-profile planning; no field-specific trigger confirmed. 🟧
- **Speed control:** STAR speed gates and 250 KIAS below FL100 (ICAO norm) — confirm current chart.
- **Altitude constraints:** Not confirmed — fly the charted altitudes. 🟧
- **Energy traps:** None field-specific confirmed; standard high-density-hub resequencing risk applies.

---

## 4. Approach selection by runway

*Names only — verify minima on current AIRAC charts.*

| RWY | Approach (name) | LVP / CAT note | Minima pointer (verify AIRAC) |
|---|---|---|---|
| 02L/20R | ILS reported (tier-4) 🟧 | CAT III reported, sub-category unconfirmed | verify current chart |
| 02R/20L | ILS reported (tier-4) 🟧 | CAT III reported, sub-category unconfirmed | verify current chart |

- **LVP triggers:** Sichuan Basin haze/fog/stagnant-air episodes (§14 of the Briefing) are the plausible regional trigger; exact RVR/trigger figures not sourced. 🟧

---

## 5. Approach hazards (terrain / CFIT / specific threats)

- **CFIT / terrain:** 🟧 The field itself sits in the flat Chengdu Basin — no close-in high terrain on a normal arrival. The region's defining terrain (Hengduan Shan/Tibetan Plateau edge) lies well to the west/northwest and is a factor for westbound routing/diversion, not the standard arrival profile — see [Briefing §3.1](index.md).
- **Specific threats:** Two parallel runways of differing surface/width (§7 of the Briefing) — confirm dependent vs independent parallel-approach procedures on the current chart. 🟧
- **Airspace / traffic:** 🟧 Very high traffic density as one of China's busiest hubs; expect vectoring/resequencing, particularly in haze/fog conditions.

---

## 6. Missed approach watch-items

- **Terrain-driven MAP notes:** Not the driver at the field (flat basin) — fly the published MAP and verify climb-gradient/turn on the current chart.
- **Re-sequencing environment:** A go-around at a very-high-volume Chinese hub likely means extended vectoring/holding before resequencing, especially in a haze/fog event. 🟧
- **Go-around traps:** None field-specific confirmed.

---

## 7. Landing runway / LDA & braking / vacate

- **LDA by runway:** Not published / verify — no declared-distance table found in reachable sources. 🟧
- **Braking / vacate:** Not confirmed — confirm with Ground/Apron on the day. 🟧
- **Runway-excursion watch:** 🟧 No displaced-threshold data confirmed; confirm current runway/surface assignment (02L/20R asphalt 45 m vs 02R/20L concrete 60 m) before planning.

---

## 8. Taxi-in routing to terminal & hot spots

- **Typical taxi-in by runway → terminal:** Not confirmed; VAMSYS mirror gives a planning taxi-in time of **12 min** `[VAMSYS mirror 2026-07-26]`.
- **Hot spots / tight taxiways:** Not published / verify. 🟧
- **Stand/gate notes:** See [Dispatch §3](dispatch.md) — current terminal/gate assignment not confirmed given the ZUUU↔ZUTF traffic rebalancing.

---

## 9. Arrival frequency sequence

- **Sequence:** Not confirmed — no ATC frequency table found in reachable public sources this pass (see [Briefing §8](index.md)). 🟧
- **Approach/Departure control:** **Chengdu ACC (ZUUU/ZPPP)** — no dedicated Asia FIR brief built yet; see the area-level [Asia airspace brief](../../../../airspace/asia.md). 🟧

---

## 10. Gotchas

- **Sichuan Basin haze/fog can reduce visibility quickly in season** — brief a holding/diversion contingency and check current LVP status.
- **Two parallel runways differ in surface/width** — confirm the assigned runway before planning the approach/rollout.
- **Post-2021 ZUUU↔ZUTF traffic rebalancing** — reconfirm terminal/gate assumptions each planning cycle.
- Most tactical arrival data (STARs, minima, frequencies) is **not confirmed from a primary AIP source this pass** — treat this page as a planning skeleton, not chart-equivalent.

---

## Open items (🟧 — confirm against AIP / current AIRAC)

- Current-AIRAC STAR names and exact approach minima per runway.
- ILS CAT III report — sub-category and per-runway assignment unconfirmed.
- LVP/CAT III trigger RVR values.
- Rapid-exit taxiway/vacate detail and current taxi-in routing/gate assignment.

> **Live data — pull at planning:** wx/METAR/TAF/TREND, NOTAM (runway/approach/navaid/lighting), ATIS config, China ATFM/ground-delay status. Not stored in this durable file.

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim charts inform content but are not listed here.*

- OurAirports — https://ourairports.com/airports/ZUUU/runways.html (retrieved 2026-07-26).
- **AIP China (CAAC / AISC)** — subscription-gated, not directly reachable this pass.

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-26 | Built from AIP China (public cross-check where gated); K Global fields from live VAMSYS; 4-page pack. |
