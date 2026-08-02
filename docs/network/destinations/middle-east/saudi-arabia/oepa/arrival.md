# OEPA — Al Qaisumah International · Arrival Page

**OEPA / AQI** · Al Qaisumah / Hafr Al-Batin, Eastern Province, Saudi Arabia · Middle East
**Version** v0.1 · **Updated** 2026-07-26 · **Status** Draft — provisional

> **Read-me:** Tactical arrival aid for the sim, not a chart. Companion to the [OEPA Briefing](index.md), [Dispatch](dispatch.md) and [Departure](departure.md) pages. STARs/approaches are listed **by name only** — fly the charted current-AIRAC version; minima shown are pointers, always verify on the current chart. **This is an uncontrolled field — no ATC service exists; see Briefing §2/§5.** Static data only; live wx/NOTAM are pulled at planning. Open 🟧 items are in §Open items. Flag legend 🟥 restriction/hazard · 🟧 caution/unverified · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| Usual landing runway(s) | 16 or 34 — wind-driven, no published preferential rule |
| Usual approach | ILS CAT I / RNP / VOR RWY 34; RNP / VOR RWY 16 |
| Config logic | Wind-driven; no ATC to assign configuration — self-select per TIBA |
| Transition level | By QNH — verify current chart 🟧 |
| LVP trigger | 🟥 Not applicable — no ATS unit to declare LVPs; treat as a crew self-minima decision |
| Missed-approach driver | Absence of any controlling authority; terrain not a factor |

---

## 2. STAR / transition selection

- **STARs (names only):** Not confirmed in reachable research pass — pull the current-AIRAC STAR list at planning. 🟧
- **Selection by arrival direction / runway:** Not independently confirmed.
- **Transition to approach:** No radar vectoring service exists — self-navigate per the filed procedure; call the Flight Service on 133.500 MHz **15 minutes before arrival** as required by AIP.
- **Speed / flow constraints on the STAR:** Standard ICAO 250 KIAS below FL100 unless otherwise directed.

---

## 3. Descent & energy plan

- **Top-of-descent trigger:** Not independently confirmed — plan against the current chart; no ATC vectoring is available to assist.
- **Speed control:** 250 KIAS below FL100 (standard); confirm any local override on current chart.
- **Altitude constraints:** Not independently confirmed this pass — verify current chart.
- **Energy traps:** None field-specific identified beyond the standard low-elevation-field profile; the **absence of ATC** means energy/sequencing management is entirely on the crew.

---

## 4. Approach selection by runway

*Names only — verify minima on current AIRAC charts.*

| RWY | Approach (name) | LVP / CAT note | Minima pointer (verify AIRAC) |
|---|---|---|---|
| 34 | ILS/LOC (IHFR), RNP, VOR | CAT I | Verify current chart |
| 16 | RNP, VOR | No precision approach | Verify current chart |

---

## 5. Approach hazards (terrain / CFIT / specific threats)

- **CFIT / terrain:** 🟩 Flat Eastern-Province desert plain at 1,175 ft AMSL; no close-in high terrain identified — cross-ref [Briefing §3.1](index.md).
- **Specific threats:** 🟧 The **HFR VOR/TACAN is AIP-flagged as restricted beyond 30 NM below 5,000 ft** due to terrain roughness/scalloping — a navaid-reception caveat relevant to any VOR-based approach or transition. RWY 16's complete absence of a precision approach is the main runway-selection threat in marginal weather.
- **Airspace / traffic:** 🟥 **Uncontrolled Class G ATZ, no ATS unit** — self-separate via TIBA (122.800 MHz); cross-ref [Briefing §3.2](index.md).

---

## 6. Missed approach watch-items

- **Terrain-driven MAP notes:** Not applicable — flat desert plain.
- **Re-sequencing environment:** No ATC exists to re-sequence a missed approach — self-announce intentions on TIBA (122.800) and re-fly the procedure per the chart.
- **Go-around traps:** None field-specific identified beyond the general absence of ATC support.

---

## 7. Landing runway / LDA & braking / vacate

- **LDA by runway:** 3,050 m both directions (no displaced threshold) — cross-ref [Briefing §7](index.md).
- **Braking / vacate:** No rapid-exit taxiway data published; standard vacate via the parallel or secondary taxiway.
- **Runway-excursion watch:** No tailwind-tendency or contamination pattern identified this pass. 🟧

---

## 8. Taxi-in routing to terminal & hot spots

- **Typical taxi-in by runway → terminal:** Via the parallel taxiway (PARL TXY) or secondary taxiway (TXY) to the Civil Apron; self-coordinate with the handling agent, as no ATS unit exists.
- **Hot spots / tight taxiways:** None flagged in reachable AIP data — cross-ref [Briefing §13](index.md). 🟩
- **Stand/gate notes:** No K Global stand assignment (not in VAMSYS) — cross-ref [Dispatch §3](dispatch.md).

---

## 9. Arrival frequency sequence

- **Sequence:** 🟥 **No Tower/Approach/Ground frequency exists.** TIBA self-announce on 122.800 MHz throughout; the AIP-mandated **Flight Service call on 133.500 MHz, 15 minutes before arrival**, is the only formal pre-arrival contact requirement.
- **Approach/Departure control:** None — uncontrolled field. 🟥

---

## 10. Gotchas

- 🟥 **No ATC exists at this field** — every arrival is a self-announce (TIBA, 122.800) event with a mandatory 15-minute-prior Flight Service call (133.500); do not expect a controller, sequencing, or a clearance of any kind.
- 🟥 **PPR (3-hour prior notice) required for non-scheduled flights** — an unplanned diversion here is not viable without prior coordination.
- 🟥 **Published operating hours 04:00–20:00 local** — do not plan an arrival outside this window without separately confirming availability.
- 🟧 **RWY 16 has no precision approach** — plan for RNP/VOR minima if RWY 16 is in use, and note the HFR VOR's published reception restriction beyond 30 NM below 5,000 ft.

---

## Open items (🟧 — confirm against AIP / current AIRAC)

- STAR names/tracks, LVP-equivalent guidance (there being no LVP authority), transition level, top-of-descent guidance, rapid-exit taxiway data — none confirmed from a primary chart this pass.
- Operational implication of the HFR VOR reception restriction for any procedure relying on it beyond 30 NM below 5,000 ft.

> **Live data — pull at planning:** wx/METAR/TAF/TREND, NOTAM (runway/approach/navaid/lighting), and — critically — current PPR grant and operating-hours confirmation. Not stored in this durable file.

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim charts inform content but are not listed here.*

- **SANS/GACA eAIP Kingdom of Saudi Arabia, AD 2 OEPA — Al Qaisumah International**, AIRAC AMDT cycle retrieved (2025-01-02 amendment series) — https://aimss.sans.com.sa/assets/FileManagerFiles/AIP%20AMDT%2006_24_2025_01_02/eAIP/AD%202%20OEPA%20AL%20QAISUMAH%20INTERNATIONAL-en-GB.html (retrieved 2026-07-26).

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-26 | Built from SANS/GACA AIP (GACA); K Global fields not in VAMSYS (flagged); 4-page pack. |
