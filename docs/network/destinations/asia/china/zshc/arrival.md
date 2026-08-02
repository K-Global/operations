# ZSHC — Hangzhou/Xiaoshan · Arrival Page

**ZSHC / HGH** · Hangzhou, Zhejiang, China · Asia
**Version** v0.1 · **Updated** 2026-07-26 · **Status** Draft — provisional, AIP China gated; **not in VAMSYS**

> **Read-me:** Tactical arrival aid for the sim, not a chart. Companion to the [ZSHC Briefing](index.md), [Dispatch](dispatch.md) and [Departure](departure.md) pages. STARs/approaches are listed **by name only or flagged not-yet-confirmed** — fly the charted current-AIRAC version; minima shown are pointers, always verify on the current chart. Static data only; live wx/NOTAM are pulled at planning. Open 🟧 items are in §Open items. Flag legend 🟥 restriction/hazard · 🟧 caution/unverified · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| Usual landing runway(s) | Not published / verify 🟧 |
| Usual approach | ILS reported; CAT III unconfirmed by independent sources this pass 🟧 |
| Config logic | Not published / verify — two near-parallel runways, allocation logic unconfirmed 🟧 |
| Transition level | Not published / verify 🟧 |
| LVP trigger | Not confirmed; CAT III report unconfirmed — do not assume an LVP regime without primary-AIP confirmation 🟧 |
| Missed-approach driver | Not terrain (flat plain) — typhoon-season weather/traffic re-sequencing is the operative concern |

---

## 2. STAR / transition selection

- **STARs (names only — verify current AIRAC):** Not confirmed in reachable research pass. 🟧
- **Selection by arrival direction / runway:** Not published / verify — two near-parallel runways (06/24, 07/25); allocation logic unconfirmed. 🟧
- **Transition to approach:** Not confirmed — verify charted transition. 🟧
- **Speed / flow constraints on the STAR:** Not confirmed; expect standard flow-speed control given China's centralised ATFM (see [Asia airspace brief §6](../../../../airspace/asia.md)). 🟧

---

## 3. Descent & energy plan

- **Top-of-descent trigger:** Standard descent-profile planning; no field-specific trigger confirmed. 🟧
- **Speed control:** STAR speed gates and 250 KIAS below FL100 (ICAO norm) — confirm current chart.
- **Altitude constraints:** Not confirmed — fly the charted altitudes. 🟧
- **Energy traps:** None field-specific confirmed; typhoon-season weather-driven late runway/routing changes are the plausible seasonal energy trap.

---

## 4. Approach selection by runway

*Names only — verify minima on current AIRAC charts.*

| RWY | Approach (name) | LVP / CAT note | Minima pointer (verify AIRAC) |
|---|---|---|---|
| 06/24 | ILS reported (tier-4) 🟧 | CAT III reported, **not independently corroborated** | verify current chart |
| 07/25 | ILS reported (tier-4) 🟧 | CAT III reported, **not independently corroborated** | verify current chart |

- **LVP triggers:** Not confirmed; typhoon-season heavy rain/low visibility (§14 of the Briefing) is the plausible regional trigger — exact RVR/trigger figures not sourced. 🟧

---

## 5. Approach hazards (terrain / CFIT / specific threats)

- **CFIT / terrain:** 🟩 None. Flat Hangzhou/Qiantang River plain at 23 ft AMSL — no close-in high terrain relevant to any arrival path.
- **Specific threats:** 🟧 Two near-parallel runways of differing length/width — confirm dependent/independent approach procedures on the current chart. **Typhoon-season weather** (heavy rain, wind shear, low visibility) is the field's most significant seasonal threat.
- **Airspace / traffic:** 🟧 Major East-China Yangtze-Delta gateway; expect vectoring/resequencing, particularly during typhoon-season weather disruption.

---

## 6. Missed approach watch-items

- **Terrain-driven MAP notes:** Not the driver (flat plain) — fly the published MAP and verify climb-gradient/turn on the current chart.
- **Re-sequencing environment:** A go-around during typhoon-season weather or peak traffic likely means extended vectoring/holding. 🟧
- **Go-around traps:** None field-specific confirmed beyond seasonal weather.

---

## 7. Landing runway / LDA & braking / vacate

- **LDA by runway:** Not published / verify — no declared-distance table found in reachable sources. 🟧
- **Braking / vacate:** Not confirmed — confirm with Ground/Apron on the day. 🟧
- **Runway-excursion watch:** 🟧 No displaced-threshold data confirmed; typhoon-season heavy-rain braking-action consideration is plausible; confirm current runway assignment given the length/width variance.

---

## 8. Taxi-in routing to terminal & hot spots

- **Typical taxi-in by runway → terminal:** Not confirmed; **this field is not in the VAMSYS mirror** — no planning taxi time exists. 🟧
- **Hot spots / tight taxiways:** Not published / verify. 🟧
- **Stand/gate notes:** See [Dispatch §3](dispatch.md) — multi-terminal (T1/T2/T3) complex, exact gate assignment not confirmed.

---

## 9. Arrival frequency sequence

- **Sequence:** Not confirmed — no ATC frequency table found in reachable public sources this pass (see [Briefing §8](index.md)). 🟧
- **Approach/Departure control:** **Shanghai (ZSHA) sector** — no dedicated Asia FIR brief built yet; see the area-level [Asia airspace brief](../../../../airspace/asia.md). 🟧

---

## 10. Gotchas

- **ILS CAT III report is unconfirmed** — no independent public corroboration found; brief the possibility that CAT I/II is the actual capability pending primary-AIP verification.
- **Typhoon-season weather (~May–Nov, peak Jul–Sep)** can force rapid config/routing changes — brief a holding/diversion contingency in season.
- **Two near-parallel runways of differing length/width** — confirm assignment before planning the approach/rollout.
- **This field is not in the VAMSYS mirror** — no planning taxi-in figure exists; use a conservative estimate.
- Most tactical arrival data (STARs, minima, frequencies) is **not confirmed from a primary AIP source this pass** — treat this page as a planning skeleton, not chart-equivalent.

---

## Open items (🟧 — confirm against AIP / current AIRAC)

- Current-AIRAC STAR names and exact approach minima per runway.
- ILS CAT III report — no independent public corroboration found this pass.
- LVP trigger RVR values.
- Rapid-exit taxiway/vacate detail and taxi-in routing/gate assignment.

> **Live data — pull at planning:** wx/METAR/TAF/TREND, NOTAM (runway/approach/navaid/lighting), ATIS config, China ATFM/ground-delay status, tropical-cyclone advisories. Not stored in this durable file.

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim charts inform content but are not listed here.*

- OurAirports — https://ourairports.com/airports/ZSHC/runways.html (retrieved 2026-07-26).
- **AIP China (CAAC / AISC)** — subscription-gated, not directly reachable this pass.

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-26 | Built from AIP China (public cross-check where gated); not in VAMSYS — all K Global fields 🟧; 4-page pack. |
