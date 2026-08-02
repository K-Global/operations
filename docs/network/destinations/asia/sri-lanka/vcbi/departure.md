# VCBI — Bandaranaike Intl Colombo · Departure Page

**VCBI / CMB** · Colombo, Sri Lanka · Asia
**Version** v0.1 · **Updated** 2026-07-26 · **Status** Draft

> **Read-me:** Tactical departure aid for the sim, not a chart. Companion to the [VCBI Briefing](index.md), [Dispatch](dispatch.md) and [Arrival](arrival.md) pages. SIDs/procedures are listed **by name only or flagged not-yet-confirmed** — fly the charted current-AIRAC version; verify every gradient, minima and routing on the current chart. Static data only; live wx/NOTAM/CTOT are pulled at planning. Open 🟧 items are in §Open items. Flag legend 🟥 restriction/hazard · 🟧 caution/unverified · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| Usual departure runway(s) | **04 or 22** — VCBI has a **single runway with no parallel/second runway**; wind is the primary selection driver |
| Config logic | Wind-driven between 04 and 22; no published preferential-runway program identified 🟧 |
| Transition altitude | Not published / verify 🟧 |
| Take-off minima | Published per AIP; exact figures not confirmed this pass 🟧 |
| CTOT / flow regime | No slot-coordination level or CTOT program confirmed; a reported terminal/space capacity constraint is the field's operative limitation (see Dispatch §4) 🟧 |
| De-icing on departure | **NIL** — tropical climate, no icing exposure 🟩 |

---

## 2. Stand → runway taxi routing & hot spots

- **Typical routings by runway:** From the assigned apron (Alpha/Bravo/Charlie/Delta/Echo — see [Dispatch §3](dispatch.md)), Ground routes toward the assigned end of the single runway (04 or 22); confirm the exact taxi with Ground on the day.
- **Hot spots / tight taxiways:** Not confirmed in reachable sources this pass — no named hot spot or wingspan-limited taxiway identified for VCBI. 🟧
- **Runway crossings / read-back-required points:** Not independently confirmed — expect explicit crossing/hold-short instructions per standard practice; confirm locally.
- **Low-vis taxi caveats:** No SMGCS-style low-visibility taxi procedure confirmed for VCBI this pass. 🟧

---

## 3. Runway / SID selection logic

- **By wind / config:** Wind-driven choice between RWY 04 and 22 — this is the field's **only** runway, so there is no alternate runway to fall back on if the assigned direction is unsuitable for any other reason (contamination, disabled aircraft, etc.). Confirm current ATIS wind/config on the day.
- **By departure direction:** Not independently confirmed beyond the wind-driven 04/22 choice. 🟧
- **Noise / preferential-runway program:** No published noise-abatement or preferential-runway program identified this pass. 🟧
- **Interaction with arrivals:** With a single runway, departures and arrivals share the same movement area — expect sequencing interaction between inbound and outbound traffic at a busy international gateway; cross-ref the [Asia airspace general brief](../../../../airspace/asia.md) for the Colombo (VCCF) FIR context.

---

## 4. SID list (names only)

*Fly the charted current-AIRAC version. RNP/gradient notes are pointers only — verify on the chart.*

| SID (name) | Runway(s) | RNP / gradient note | Notes |
|---|---|---|---|
| Not confirmed in reachable research pass 🟧 | 04 / 22 | Not confirmed — verify RNP/gradient requirement per SID on current chart | Pull the live current-AIRAC SID list before use. See [`OM E — PBN and RNP Operations`](../../../../../flight-ops/pbn-and-rnp-operations.md) |

---

## 5. Initial climb, speed & noise-abatement departure

- **Initial climb / speed:** Per SID/ATC; 250 KIAS below FL100 (ICAO norm) — confirm current chart.
- **Noise-abatement departure procedure (NADP):** Not confirmed in reachable sources this pass. 🟧
- **Early turn / altitude constraints:** Published per SID — verify constraints on the current chart.

---

## 6. Engine-out / emergency-turn & obstacle considerations

- **Engine-out / emergency-turn procedure:** No published EO/emergency-turn specifics confirmed in reachable sources — apply the operator/type EOSID for the assigned runway. 🟧
- **Close-in / distant obstacles:** Flat coastal plain (Briefing §3.1) — no significant close-in terrain or obstacle identified in reachable sources.
- **Special DP / obstacle DP:** Not confirmed in reachable sources — verify on current chart. 🟧

---

## 7. Low-vis takeoff & de-icing on departure

- **LVTO minima / procedure:** Not confirmed in reachable sources this pass. 🟧 See [`OM E — Low Visibility Operations`](../../../../../flight-ops/low-visibility-operations.md).
- **De-icing:** **NIL** — tropical climate, no icing exposure. 🟩

---

## 8. Clearance / CTOT & departure frequency sequence

- **Clearance delivery:** Not separately published — likely combined with Ground at this field size; confirm locally. 🟧
- **Frequency sequence:** **Ground 121.9 MHz → Tower 118.7 MHz → Colombo Approach (120.9 MHz per current tier-4 sources, or 132.4 MHz per an older reference — unresolved conflict, confirm current AIRAC).** Take the assigned frequency. (Frequencies from [Briefing §8](index.md).) 🟥 confirm the Approach frequency before use.
- **CTOT / slot handling:** No slot-coordination level or CTOT/ATFM program confirmed for VCBI; comply with any locally assigned flow-control instruction. 🟧

---

## 9. Performance watch-items for our types

- **Field-length / weight:** VCBI's single runway (3,350 m) is non-limiting for a K Global category **L** type.
- **Density altitude / temperature:** Non-issue at 30 ft, tropical climate — no hot-and-high penalty.
- **Contamination / wet-runway:** Monsoon-season rain (SW May–Sep, NE Oct–Nov) is the relevant seasonal consideration; no specific contamination/braking-action data confirmed for VCBI this pass. 🟧
- **Link to OM B:** See [`OM B — Fleet Capability Matrix`](../../../../../fleet/capability-matrix.md) — no field-length or field-elevation performance penalty identified for any K Global type at VCBI.

---

## 10. Gotchas

- **Single runway, no parallel/second runway** — any runway-affecting event during your departure window (disabled aircraft ahead, contamination, a monsoon cell over the field) has no internal alternative; expect ground delay or a schedule impact rather than a runway swap.
- **Monsoon-season convective weather** — expect the possibility of thunderstorm-driven ground stops during the May–September and October–November wet seasons; build buffer into any tight rotation.
- **Approach frequency conflict** — confirm whether Colombo Approach is on 120.9 MHz or 132.4 MHz before relying on either published figure.
- **Reported terminal/capacity constraint** — do not assume schedule flexibility; VCBI has publicly reported denying additional weekly frequency requests for capacity reasons.
- **Co-located military airfield (SLAF Katunayake)** — be aware of the adjoining active Air Force base; no current operational restriction identified beyond historical awareness.

---

## Open items (🟧 — confirm against AIP / current AIRAC)

- Current-AIRAC SID names and RNP/gradient specifics per runway.
- Take-off minima / DVA exact figures.
- Clearance delivery frequency and start-up/push-back procedure detail.
- NADP preference (none confirmed).
- LVTO minima and low-visibility taxi procedure specifics.
- EOSID/engine-out procedure detail per runway.
- Confirm the Colombo Approach frequency (120.9 vs 132.4 MHz).

> **Live data — pull at planning:** wx/METAR/TAF, NOTAM (runway/taxiway/navaid/lighting — the single runway makes any closure a full-field event), CTOT/flow status. Not stored in this durable file.

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim charts inform content but are not listed here.*

- **AIP Sri Lanka** (Civil Aviation Authority of Sri Lanka / Airport & Aviation Services (Sri Lanka) Ltd), AD 2 VCBI — identified via public search at https://www.airport.lk/aasl/AIS/AMDT%20WEB/AIP%20FROM%2021%20MAR%202024/PDF/VCBI%20AD%202-1%20TO%202-95.pdf (retrieved 2026-07-26). *Primary source of record — not independently rendered as readable text this pass.*
- OurAirports — https://ourairports.com/airports/VCBI/frequencies.html (retrieved 2026-07-26). *Ground/Tower/Approach/ATIS frequency cross-check.*
- SkyVector — https://skyvector.com/airport/VCBI (retrieved 2026-07-26). *Frequency cross-check.*

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-26 | Built from territory AIP; K Global fields from live VAMSYS; 4-page pack. |
