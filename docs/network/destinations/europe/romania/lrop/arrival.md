# LROP — Henri Coandă · Arrival Page

**LROP / OTP** · Otopeni, near Bucharest, Romania · Europe
**Version** v0.1 · **Updated** 2026-07-26 · **Status** Draft

> **Read-me:** Tactical arrival aid for the sim, not a chart. Companion to the [LROP Briefing](index.md), [Dispatch](dispatch.md) and [Departure](departure.md) pages. STARs/approaches are listed **by name only or flagged not-yet-confirmed** — fly the charted current-AIRAC version; minima shown are pointers, always verify on the current chart. Static data only; live wx/NOTAM are pulled at planning. Open 🟧 items are in §Open items. Flag legend 🟥 restriction/hazard · 🟧 caution/unverified · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| Usual landing runway(s) | **RWY 08L or 08R** (default configuration) |
| Usual approach | ILS — CAT II on 08L, CAT IIIA on 08R; CAT I on 26L/26R when in use |
| Config logic | Wind-driven; RWY 08 preferred absent a meaningful tailwind |
| Transition level | By QNH; transition altitude not confirmed — verify current chart 🟧 |
| LVP trigger | Not confirmed — CAT II/IIIA infrastructure implies an LVP regime exists 🟧 |
| Missed-approach driver | Airspace/traffic (Class A TMA / Class C CTR structure), not terrain |

---

## 2. STAR / transition selection

- **STARs (names only — verify current AIRAC):** Not confirmed in reachable research pass — pull the current-AIRAC STAR list at planning. 🟧
- **Selection by arrival direction / runway:** RWY 08 (08L/08R) is the dominant landing configuration; the 26L/26R reciprocal is used when wind dictates. Bucharest Approach/Director assigns the STAR-to-runway transition for the active configuration.
- **Transition to approach:** Expect a STAR-to-ILS transition with radar vectors onto final in the dominant 08-config; verify the charted transition.
- **Speed / flow constraints on the STAR:** Published speed/altitude gates are pointers only — verify chart.

---

## 3. Descent & energy plan

- **Top-of-descent trigger:** Standard descent-profile planning; plan TOD to meet the first STAR altitude gate.
- **Speed control:** STAR speed gates and 250 KIAS below FL100 (EU/ICAO norm) — confirm current chart.
- **Altitude constraints:** Key STAR crossing constraints are pointers — fly the charted altitudes.
- **Energy traps:** A late runway/config change (08↔26 ahead of a wind shift) is the main energy trap identified at this field.

---

## 4. Approach selection by runway

*Names only — verify minima on current AIRAC charts.*

| RWY | Approach (name) | LVP / CAT note | Minima pointer (verify AIRAC) |
|---|---|---|---|
| 08L | ILS + NDB | **CAT II** 🟧 | verify current chart |
| 08R | ILS + NDB | **CAT IIIA** 🟧 — Code ≥4D taxi-in via TWY D only after landing | verify current chart |
| 26L | ILS + NDB | **CAT I**; LVTO available | verify current chart |
| 26R | ILS + NDB | **CAT I**; LVTO available | verify current chart |

- **LVP triggers:** Not confirmed from a primary AIP table this pass; CAT II/IIIA capability on the 08-direction pair is the standing low-visibility mitigation. 🟧

---

## 5. Approach hazards (terrain / CFIT / specific threats)

- **CFIT / terrain:** 🟩 None. Flat Wallachian Plain at 314 ft AMSL — no close-in high terrain relevant to any arrival path.
- **Specific threats:** 🟧 Two closely-spaced parallel runways support simultaneous/dependent operations — maintain wake and spacing awareness during parallel approaches. No displaced thresholds identified.
- **Airspace / traffic:** 🟧 Moderate-to-high density under Bucharest Approach/Director within the Class A Bucuresti TMA / Class C Otopeni CTR — brief for possible re-sequencing/vectoring, especially in marginal weather.

---

## 6. Missed approach watch-items

- **Terrain-driven MAP notes:** Terrain is not the driver (flat plain) — fly the published MAP and verify climb-gradient/turn on the current chart.
- **Re-sequencing environment:** A go-around returns you to the Bucharest Approach/Director radar environment within the Class A TMA — expect vectoring and possible holding before re-sequencing.
- **Go-around traps:** Traffic/config awareness on the parallel-runway pair during the miss.

---

## 7. Landing runway / LDA & braking / vacate

- **LDA by runway:** Nominal 3,500 m on either runway pair — full TORA/TODA/ASDA/LDA breakdown not obtained this pass 🟧. No displaced thresholds identified in reachable sources.
- **Braking / vacate:** Rapid-exit taxiway detail not confirmed in reachable sources — confirm with Ground/Apron on the day. 🟧 **Code ≥4D aircraft landing on RWY 08R may only vacate via TWY D**, or must wait for towing with engines 1 & 4 shut down.
- **Runway-excursion watch:** 🟧 No displaced thresholds confirmed; winter-contamination braking-action consideration applies in the continental-climate winter season.

---

## 8. Taxi-in routing to terminal & hot spots

- **Typical taxi-in by runway → terminal:** After landing, taxi in to the main apron via the high-speed taxiways "Oscar"/"Victor" where applicable per Ground/Apron assignment; VAMSYS mirror gives a planning taxi-in time of **12 min** `[VAMSYS mirror 2026-07-26]`.
- **Hot spots / tight taxiways:** 🟥 **Code ≥4D aircraft vacating RWY 08R may only use TWY D** (or must be towed with engines 1 & 4 shut down); **TWY V and TWY W are exit-only** and must not be used to enter or cross the runway.
- **Stand/gate notes:** See [Dispatch §3](dispatch.md) — widebody-capable cluster reported at Apron 2 (stands 201/201A/202–205) per a network-sim reference; not independently reconfirmed.

---

## 9. Arrival frequency sequence

- **Sequence:** **Bucharest Approach 119.415 (sector-specific alternates reported) → Otopeni Tower 118.805 (or 120.90 alternate) → Otopeni Ground 121.855.** Take the assigned frequency and confirm current chart. (Frequencies from Briefing §8.)
- **Approach/Departure control:** **Bucharest Approach/Director** provides terminal radar service within the Bucuresti TMA; **București ACC (LRBB)** hands off en route inbound — no dedicated FIR brief yet published, see [Europe airspace brief](../../../../airspace/europe.md). 🟧

---

## 10. Gotchas

- **Code ≥4D aircraft landing RWY 08R can only vacate via TWY D** (or must be towed) — brief this before any widebody arrival.
- **TWY V/TWY W are exit-only** — never expect to cross or enter the runway via either.
- **RWY 08 is the default landing configuration** — a change to 26 signals a meaningful tailwind shift; watch the ATIS wind trend.
- Frequencies and minima referenced here span multiple data vintages — confirm every figure against the current AIRAC before relying on it operationally.

---

## Open items (🟧 — confirm against AIP / current AIRAC)

- Current-AIRAC STAR names and exact approach minima per runway.
- Transition altitude/level and exact LVP/CAT trigger values.
- Rapid-exit taxiway/vacate detail beyond the Code ≥4D/TWY D rule.
- ILS idents for all four runway ends.

> **Live data — pull at planning:** wx/METAR/TAF/TREND, NOTAM (runway/approach/navaid/lighting), ATIS config/wind trend, current AUP/UUP or RAD status in the Bucuresti TMA. Not stored in this durable file.

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim charts inform content but are not listed here.*

- **AIP Romania (ROMATSA / AIS Romania), AD 2.5-40 Visual Approach Chart — LROP**, eff. 2016-02-04 — https://www.aisro.ro/files/harti/LR_AD_2_LROP_5-40_en.pdf (retrieved 2026-07-26). *TMA/CTR structure, ATC frequencies.*
- VATSIM Romania vACC — LROP airport operational documentation — https://docs.rovacc.ro/airports/LROP.html (retrieved 2026-07-26). *Per-runway CAT breakdown, ground-ops rules — network-sim, not regulatory.*

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-26 | Built from AIP Romania (ROMATSA); K Global fields from live VAMSYS; 4-page pack. |
