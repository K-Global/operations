# ZGHA — Changsha/Huanghua · Arrival Page

**ZGHA / CSX** · Changsha, Hunan, China · Asia
**Version** v0.1 · **Updated** 2026-07-26 · **Status** Draft — provisional, AIP China gated; **not in VAMSYS**

> **Read-me:** Tactical arrival aid for the sim, not a chart. Companion to the [ZGHA Briefing](index.md), [Dispatch](dispatch.md) and [Departure](departure.md) pages. STARs/approaches are listed **by name only or flagged not-yet-confirmed** — fly the charted current-AIRAC version; minima shown are pointers, always verify on the current chart. Static data only; live wx/NOTAM are pulled at planning. Open 🟧 items are in §Open items. Flag legend 🟥 restriction/hazard · 🟧 caution/unverified · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| Usual landing runway(s) | Not published / verify 🟧 |
| Usual approach | Not published / verify — no ILS category data found in reachable sources this pass 🟧 |
| Config logic | Not published / verify — two parallel runways, allocation logic unconfirmed 🟧 |
| Transition level | Not published / verify 🟧 |
| LVP trigger | Not confirmed — no LVP/CAT data found 🟧 |
| Missed-approach driver | Not confirmed as terrain-driven at the field itself; verify current-chart MSA given central Hunan's surrounding hill/mountain ranges |

---

## 2. STAR / transition selection

- **STARs (names only — verify current AIRAC):** Not confirmed in reachable research pass. 🟧
- **Selection by arrival direction / runway:** Not published / verify — two parallel runways (18L/36R, 18R/36L); allocation logic unconfirmed. 🟧
- **Transition to approach:** Not confirmed — verify charted transition. 🟧
- **Speed / flow constraints on the STAR:** Not confirmed; expect standard flow-speed control given China's centralised ATFM (see [Asia airspace brief §6](../../../../airspace/asia.md)). 🟧

---

## 3. Descent & energy plan

- **Top-of-descent trigger:** Standard descent-profile planning; no field-specific trigger confirmed. 🟧
- **Speed control:** STAR speed gates and 250 KIAS below FL100 (ICAO norm) — confirm current chart.
- **Altitude constraints:** Not confirmed — fly the charted altitudes, and confirm the MSA given central Hunan's surrounding hill/mountain ranges (§3.1 of the Briefing). 🟧
- **Energy traps:** None field-specific confirmed.

---

## 4. Approach selection by runway

*Names only — verify minima on current AIRAC charts.*

| RWY | Approach (name) | LVP / CAT note | Minima pointer (verify AIRAC) |
|---|---|---|---|
| 18L/36R | Not published / verify 🟧 | No category data found | verify current chart |
| 18R/36L | Not published / verify 🟧 | No category data found | verify current chart |

- **LVP triggers:** Not confirmed. 🟧

---

## 5. Approach hazards (terrain / CFIT / specific threats)

- **CFIT / terrain:** 🟧 Changsha city sits in the Xiang River plain; central Hunan's surrounding hill/mountain ranges (Wuling/Xuefeng west, Luoxiao east) are a **regional** consideration — no field-specific close-in terrain hazard was confirmed in reachable sources this pass. Verify the MSA ring on the current area chart before treating this as a non-issue field.
- **Specific threats:** 🟧 Two parallel runways of differing length/width/surface — confirm dependent/independent approach procedures on the current chart.
- **Airspace / traffic:** 🟧 Regional Hunan-province gateway; expect standard China ATFM-managed traffic flow, field-specific sequencing not confirmed.

---

## 6. Missed approach watch-items

- **Terrain-driven MAP notes:** Not confirmed as the driver at the field itself; verify climb-gradient/turn on the current chart given the regional hill/mountain terrain context (§5). 🟧
- **Re-sequencing environment:** Not confirmed field-specifically. 🟧
- **Go-around traps:** None field-specific confirmed.

---

## 7. Landing runway / LDA & braking / vacate

- **LDA by runway:** Not published / verify — no declared-distance table found in reachable sources. 🟧
- **Braking / vacate:** Not confirmed — confirm with Ground/Apron on the day. 🟧
- **Runway-excursion watch:** 🟧 No displaced-threshold data confirmed; confirm current runway assignment given the length/width variance across the two parallels (3,800×60 m vs 3,200×45 m).

---

## 8. Taxi-in routing to terminal & hot spots

- **Typical taxi-in by runway → terminal:** Not confirmed; **this field is not in the VAMSYS mirror** — no planning taxi time exists. 🟧
- **Hot spots / tight taxiways:** Not published / verify — construction-related restrictions are plausible near the active Terminal 3 build area. 🟧
- **Stand/gate notes:** See [Dispatch §3](dispatch.md) — terminal/gate assignment not confirmed given the T3 construction programme.

---

## 9. Arrival frequency sequence

- **Sequence:** Not confirmed — no ATC frequency table found in reachable public sources this pass (see [Briefing §8](index.md)). 🟧
- **Approach/Departure control:** **Guangzhou (ZGZU) sector** — no dedicated Asia FIR brief built yet; see the area-level [Asia airspace brief](../../../../airspace/asia.md). 🟧

---

## 10. Gotchas

- **Regional hill/mountain terrain context** (Wuling/Xuefeng/Luoxiao ranges) — no field-specific close-in hazard confirmed, but verify the current-chart MSA before assuming a flat-field profile.
- **Runway 18R/36L is materially shorter** than 18L/36R — confirm assignment before planning the approach/rollout for a heavy arrival.
- **Active Terminal 3 construction** may affect taxi-in routing/gate assignment — confirm current status at planning.
- **This field is not in the VAMSYS mirror** — no planning taxi-in figure exists; use a conservative estimate.
- Most tactical arrival data (STARs, minima, frequencies) is **not confirmed from a primary AIP source this pass** — treat this page as a planning skeleton, not chart-equivalent.

---

## Open items (🟧 — confirm against AIP / current AIRAC)

- Current-AIRAC STAR names and exact approach minima per runway.
- ILS/approach category data — none found in reachable public sources this pass.
- Central-Hunan regional terrain/MSA — no field-specific close-in data confirmed.
- Rapid-exit taxiway/vacate detail and taxi-in routing/gate assignment.

> **Live data — pull at planning:** wx/METAR/TAF/TREND, NOTAM (runway/approach/navaid/lighting, esp. T3-construction restrictions), ATIS config, China ATFM/ground-delay status. Not stored in this durable file.

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim charts inform content but are not listed here.*

- OurAirports — https://ourairports.com/airports/ZGHA/runways.html (retrieved 2026-07-26).
- Wikipedia — "Changsha Huanghua International Airport" — https://en.wikipedia.org/wiki/Changsha_Huanghua_International_Airport (retrieved 2026-07-26).
- **AIP China (CAAC / AISC)** — subscription-gated, not directly reachable this pass.

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-26 | Built from AIP China (public cross-check where gated); not in VAMSYS — all K Global fields 🟧; 4-page pack. |
