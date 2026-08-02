# LIPX — Verona/Villafranca · Departure Page

**LIPX / VRN** · Villafranca di Verona, Veneto, Italy · Europe
**Version** v0.1 · **Updated** 2026-07-26 · **Status** Draft

> **Read-me:** Tactical departure aid for the sim, not a chart. Companion to the [LIPX Briefing](index.md), [Dispatch](dispatch.md) and [Arrival](arrival.md) pages. SIDs/procedures are listed **by name only or flagged not-yet-confirmed** — fly the charted current-AIRAC version; verify every gradient, minima and routing on the current chart. Static data only; live wx/NOTAM/CTOT are pulled at planning. Open 🟧 items are in §Open items. Flag legend 🟥 restriction/hazard · 🟧 caution/unverified · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| Usual departure runway(s) | **RWY 22** for Code D/E types (avoids the RWY 04 no-turning-pad constraint, climbs away from terrain); **RWY 04** per the AIP's published preferential-use rule and for lighter types 🟧 (tier-4-informed nuance) |
| Config logic | Terrain and no-turning-pad driven, not a simple wind-based swap — see Briefing §3.5 |
| Transition altitude | **6,000 ft AMSL** `[AIP Italia AD 2 LIPX 1-8]` |
| Take-off minima | RWY 04: **no departure below RVR 550 m**, or when weather prevents TWR visually monitoring the manoeuvring area 🟥; RWY 22: approved for LVTO, exact RVR minima not confirmed 🟧 |
| CTOT / flow regime | None found — treated as non-coordinated pending confirmation 🟧 |
| De-icing on departure | Available — H24, 15 Nov–15 Mar |

---

## 2. Stand → runway taxi routing & hot spots

- **Typical routings by runway:** Departing aircraft from the main civil apron enter **RWY 22 via TWY K**. Aircraft from military remote stands cross TWY T, continue on TWY C to RHP C, and after ATC clearance enter the runway, vacating via TWY W before proceeding behind follow-me on Apron TWY P to RHP K (AIP AD 2 LIPX §20.6.4) — civil operations should not encounter this routing, but be aware of it as inbound military traffic.
- **Hot spots / tight taxiways:** 🟥 **TWY Y is entry-only** (apron → runway, never usable as an exit); **TWY T is limited to ICAO Code C** aircraft; **Code F aircraft on Apron TWY P must keep the outboard engine at idle**; the **apron and most of the civil taxiway up to (but excluding) the RWY 22 holding position are not visible from the tower** — a genuine ground-movement blind spot requiring strict read-back discipline.
- **Runway crossings / read-back-required points:** Any routing that crosses between civil and military taxiway segments (TWY T, TWY C, TWY W) should expect explicit ATC crossing/hold-short instructions.
- **Low-vis taxi caveats:** 🟧 In conditions where the tower cannot visually monitor the manoeuvring area, ground movements are **reduced to one aircraft at a time** (AIP AD 2 LIPX §20.4.5); follow-me is mandatory on the main apron at RVR ≤ 550 m.

---

## 3. Runway / SID selection logic

- **By wind / config:** RWY 04 is the AIP-published preferential runway; no independently confirmed wind-threshold table was found for a routine 04↔22 config swap. 🟧
- **By departure direction:** **RWY 22** is the default departure runway for heavier/Code D–E aircraft — it avoids the RWY 04 no-turning-pad constraint (Briefing §3.3) and climbs south, away from the high terrain north of the field (tier-4 corroborated). 🟧
- **Noise / preferential-runway program:** No noise-abatement departure program confirmed in reachable sources. 🟧
- **Interaction with arrivals:** RWY 04 is the field's only IFR-served landing runway (ILS CAT IIIB) — with a single runway there is no simultaneous-use consideration, but a departure off RWY 22 and an arrival on RWY 04 are mutually exclusive on this single-runway field; sequencing is a straightforward alternation, not a dependent-parallel scenario.

---

## 4. SID list (names only)

*Fly the charted current-AIRAC version. RNP/gradient notes are pointers only — verify on the chart.*

| SID (name) | Runway(s) | RNP / gradient note | Notes |
|---|---|---|---|
| Not confirmed in reachable research pass 🟧 | 04 / 22 | Terrain to the north likely drives a steep or segmented initial climb on northbound departures — verify RNP/gradient on current chart | Pull the live current-AIRAC SID list before use. Tier-4 sources describe an initial **right** turn after 750 ft off RWY 04 (not left — a known autopilot/heading-bug trap), with north/eastbound SIDs requiring multiple turns to climb clear of terrain. 🟧 |

---

## 5. Initial climb, speed & noise-abatement departure

- **Initial climb / speed:** Not confirmed this pass; standard 250 KIAS below FL100 (EU/ICAO norm) applies generally — confirm current chart. Given the close-in terrain to the north, expect a steeper or segmented initial climb profile than a flat-plain field. 🟧
- **Noise-abatement departure procedure (NADP):** No mandated NADP confirmed in reachable sources. 🟧
- **Early turn / altitude constraints:** Tier-4 sources describe an initial **right turn after 750 ft** off RWY 04 (heading approximately 154° or 245° depending on the SID in use) — a known trap, since a left turn is a common autopilot/heading-bug error at this field. 🟧 Verify on the current chart before relying on this.

---

## 6. Engine-out / emergency-turn & obstacle considerations

- **Engine-out / emergency-turn procedure:** No published EO/emergency-turn specifics confirmed in reachable sources — apply the operator/type EOSID for the assigned runway/SID. 🟧
- **Close-in / distant obstacles:** 🟥 **High terrain (Alps/Lessini foothills) to the north** of the field is the dominant obstacle consideration for any northbound departure or EOSID — cross-ref [Briefing §3.1](index.md). RWY 22 departures climbing south are comparatively less terrain-exposed.
- **Special DP / obstacle DP:** Not confirmed in reachable sources — verify on current chart. 🟧

---

## 7. Low-vis takeoff & de-icing on departure

- **LVTO minima / procedure:** RWY 04 departures are **not permitted below RVR 550 m**, or whenever weather prevents Villafranca TWR from visually monitoring all or part of the manoeuvring area (AIP AD 2 LIPX §20.4.2) 🟥. RWY 22 is approved for LVTO operations; exact RVR minima not confirmed this pass. 🟧
- **De-icing:** Available **H24, 15 November – 15 March**; 3× FMC LMD 2000 + 1× Cristanini 6000/100, Kilfrost ABC3 Type II fluid, 50,000 L storage, aerodrome-operator provided. See [OM E — Cold Weather Operations](../../../../../flight-ops/cold-weather-operations.md).

---

## 8. Clearance / CTOT & departure frequency sequence

- **Clearance delivery:** No separate delivery frequency published — clearance is assumed to be handled via **Villafranca TWR 118.650**. 🟧
- **Frequency sequence:** **Villafranca TWR 118.650 (clearance/start-up) → Villafranca GND 121.750 (taxi, ATC discretion hours) → [apron: Villa Apron 131.500, aerodrome operator, push-back/taxi instructions and stand allocation] → Verona APP/Verona Radar 118.550 / 124.250 / 135.900 → Milano ACC (LIMM)** — see [Europe airspace brief](../../../../airspace/europe.md) 🟧 no dedicated Italian FIR brief exists yet in this library; confirm sector/frequency assignment on the current chart. (Frequencies from Briefing §8.)
- **CTOT / slot handling:** No slot-coordination or ATFM/CTOT regime found in reachable sources — treat as non-coordinated pending confirmation. 🟧

---

## 9. Performance watch-items for our types

- **Field-length / weight:** RWY 04/22 (3,068 m TORA/ASDA) is non-limiting for narrowbody/regional types; note RWY 22's reduced LDA (2,657 m, 411 m displaced threshold) is a **landing** consideration, not a departure one.
- **Density altitude / temperature:** Non-issue at 240 ft, temperate/pre-Alpine climate — no hot-and-high penalty.
- **Contamination / wet-runway:** The aerodrome operator friction-tests the runway monthly (MPL 0.60 / MFL 0.50 per ENAC standards); winter snow/de-icing season (§7) is the relevant seasonal consideration.
- **Link to OM B:** RFF CAT 8 is adequate for narrowbody/regional types but below the requirement for K Global's widebody fleet — see [OM B — Fleet Capability Matrix](../../../../../fleet/capability-matrix.md).

---

## 10. Gotchas

- **No turning pad at the RWY 04 threshold** — Code D/E aircraft must pre-confirm unassisted 180°-turn capability before flight planning, or expect a scripted divert (arrivals) / reschedule (departures) outcome.
- **(Tier-4) RWY 04 departures require an initial right turn after 750 ft, not left** — a known autopilot/heading-bug trap given the terrain to the north; verify on current chart.
- **RWY 22 has no published approach and is departure/LVTO-only** — never plan an arrival there.
- **The apron and most of the civil taxiway (up to short of the RWY 22 holding position) are not visible from the tower** — expect strict read-back discipline, especially in low-vis.
- **TWY Y is entry-only (apron → runway)** — do not expect it as an exit.
- **Joint civil/military field** — follow the briefed routing; do not deviate into military taxiways/aprons.
- **An aborted take-off on RWY 22 without confirmed 180°-turn capability** leaves the aircraft holding position on the runway awaiting a ground-assisted tow — a real runway-blockage scenario for Code D/E types.

---

## Open items (🟧 — confirm against AIP / current AIRAC)

- Current-AIRAC SID names, RNP/gradient specifics and initial-climb/turn constraints per runway.
- NADP preference (none confirmed as mandated).
- EOSID/engine-out procedure detail per runway.
- Exact LVTO RVR minima on RWY 22.
- Slot coordination / CTOT / ATFM applicability — none confirmed, none found.
- Wind-threshold table for a routine RWY 04↔22 config swap (RWY 04 preferential-use rule confirmed; swap criteria not confirmed).

> **Live data — pull at planning:** wx/METAR/TAF, NOTAM (runway/taxiway/navaid/lighting, esp. ILS CAT IIIB status and fog-dispersal system status), CTOT/ATFM (if any), de-icing status. Not stored in this durable file.

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim charts inform content but are not listed here.*

- **AIP Italia (ENAV), AD 2 LIPX 1-1 through 1-11** (2018 amendment cycle) — runway/declared-distance data, communications, local traffic regulations, AWO/LVP procedures — mirrored via https://va.mite.gov.it/File/Documento/340816 (retrieved 2026-07-26).
- FlightGear wiki — "Verona Villafranca Airport" — https://wiki.flightgear.org/Verona_Villafranca_Airport (retrieved 2026-07-26). *Departure-turn/terrain corroboration — flight-sim community source, not regulatory.*
- SkyVector — https://skyvector.com/airport/LIPX/Verona-Villafranca-Airport (retrieved 2026-07-26).

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-26 | Built from AIP Italia (ENAV); K Global fields from live VAMSYS; 4-page pack. |
