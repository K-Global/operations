# ZGHA — Changsha/Huanghua · Departure Page

**ZGHA / CSX** · Changsha, Hunan, China · Asia
**Version** v0.1 · **Updated** 2026-07-26 · **Status** Draft — provisional, AIP China gated; **not in VAMSYS**

> **Read-me:** Tactical departure aid for the sim, not a chart. Companion to the [ZGHA Briefing](index.md), [Dispatch](dispatch.md) and [Arrival](arrival.md) pages. SIDs/procedures are listed **by name only or flagged not-yet-confirmed** — fly the charted current-AIRAC version; verify every gradient, minima and routing on the current chart. Static data only; live wx/NOTAM/CTOT are pulled at planning. Open 🟧 items are in §Open items. Flag legend 🟥 restriction/hazard · 🟧 caution/unverified · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| Usual departure runway(s) | Not published / verify 🟧 |
| Config logic | Not published / verify — two parallel runways (18L/36R, 18R/36L), allocation logic unconfirmed 🟧 |
| Transition altitude | Not published / verify 🟧 |
| Take-off minima | Not published / verify 🟧 |
| CTOT / flow regime | China standard centralised ATFM expected at this regional hub — field-specific regime not confirmed 🟧 |
| De-icing on departure | Not published / verify — central-China winters can bring occasional cold spells, season not confirmed 🟧 |

---

## 2. Stand → runway taxi routing & hot spots

- **Typical routings by runway:** Not published / verify — confirm with Ground/Apron on the day, particularly given the active Terminal 3 construction programme. 🟧
- **Hot spots / tight taxiways:** Not published / verify — construction-related taxi restrictions are plausible near the T3 build area. 🟧
- **Runway crossings / read-back-required points:** Not confirmed. 🟧
- **Low-vis taxi caveats:** Not confirmed. 🟧

---

## 3. Runway / SID selection logic

- **By wind / config:** Not published / verify. 🟧
- **By departure direction:** Two true parallel runways aligned 18/36 (N–S) — no published allocation logic found. 🟧
- **Noise / preferential-runway program:** Not published / verify. 🟧
- **Interaction with arrivals:** Not confirmed — verify current AIP ENR/AD procedures for the parallel configuration. 🟧

---

## 4. SID list (names only)

*Fly the charted current-AIRAC version. RNP/gradient notes are pointers only — verify on the chart.*

| SID (name) | Runway(s) | RNP / gradient note | Notes |
|---|---|---|---|
| Not confirmed in reachable research pass 🟧 | 18L/36R, 18R/36L | China implements RNAV/RNP terminal procedures broadly per the [Asia airspace brief §4](../../../../airspace/asia.md) — field-specific SID/gradient not confirmed | Pull the live current-AIRAC SID list before use |

---

## 5. Initial climb, speed & noise-abatement departure

- **Initial climb / speed:** Per SID/ATC; standard 250 KIAS below FL100 (ICAO norm) — confirm current chart.
- **Noise-abatement departure procedure (NADP):** Not published / verify. 🟧
- **Early turn / altitude constraints:** Not confirmed — verify current chart. 🟧

---

## 6. Engine-out / emergency-turn & obstacle considerations

- **Engine-out / emergency-turn procedure:** Not confirmed in reachable sources. 🟧
- **Close-in / distant obstacles:** No confirmed close-in high terrain at the field; central Hunan's surrounding hill/mountain ranges (Wuling/Xuefeng west, Luoxiao east) are a regional rather than confirmed field-specific consideration — see [Briefing §3.1](index.md). 🟧
- **Special DP / obstacle DP:** Not confirmed — verify on current chart. 🟧

---

## 7. Low-vis takeoff & de-icing on departure

- **LVTO minima / procedure:** Not confirmed — no ILS/LVP category data found in reachable sources. 🟧
- **De-icing:** Not published / verify — central-China winters can bring occasional cold spells; season/provisioning not confirmed. 🟧

---

## 8. Clearance / CTOT & departure frequency sequence

- **Clearance delivery:** Not published / verify. 🟧
- **Frequency sequence:** Not confirmed — no ATC frequency table found in reachable public sources this pass (see [Briefing §8](index.md)). 🟧
- **CTOT / slot handling:** China's standard centralised ATFM applies at this regional hub; comply with any assigned CTOT. 🟧

---

## 9. Performance watch-items for our types

- **Field-length / weight:** 18L/36R (3,800 m) is non-limiting for any K Global type at this field elevation; **18R/36L (3,200 m) is the shorter parallel** — confirm assignment before planning a heavy departure from it.
- **Density altitude / temperature:** Non-issue at 217 ft; humid subtropical climate — no hot-and-high penalty.
- **Contamination / wet-runway:** No seasonal contamination data confirmed this pass. 🟧
- **Link to OM B:** See [`OM B — Fleet Capability Matrix`](../../../../../fleet/capability-matrix.md) — no field-length/elevation performance penalty expected for any K Global type on 18L/36R.

---

## 10. Gotchas

- **Runway 18R/36L is materially shorter (3,200 m)** than 18L/36R (3,800 m) — confirm the assigned runway before planning a heavy departure.
- **Active Terminal 3 construction programme** — expect evolving ground layout/procedures at this growing regional gateway.
- **This field is not in the VAMSYS mirror** — no planning taxi time exists; use conservative estimates pending reconciliation.
- Most tactical departure data (SIDs, minima, frequencies, terrain/MSA specifics) is **not confirmed from a primary AIP source this pass** — treat this page as a planning skeleton, not chart-equivalent.

---

## Open items (🟧 — confirm against AIP / current AIRAC)

- Current-AIRAC SID names, RNP/gradient specifics, take-off minima.
- ATC frequencies and clearance-delivery procedure.
- Two-runway allocation/config logic.
- EOSID/engine-out procedure detail.
- Central-Hunan regional terrain/MSA — no field-specific close-in data confirmed.
- LVTO minima and de-icing availability/season.

> **Live data — pull at planning:** wx/METAR/TAF, NOTAM (runway/taxiway/navaid/lighting, esp. T3-construction restrictions), CTOT/ATFM, de-icing status. Not stored in this durable file.

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
