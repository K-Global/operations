# OMAL — Al Ain Intl · Departure Page

**OMAL / AAN** · Al Ain, Abu Dhabi Emirate, United Arab Emirates · Middle East
**Version** v0.1 · **Updated** 2026-07-26 · **Status** Draft

> **Read-me:** Tactical departure aid for the sim, not a chart. Companion to the [OMAL Briefing](index.md), [Dispatch](dispatch.md) and [Arrival](arrival.md) pages. SIDs/procedures are listed **by name only** — fly the charted current-AIRAC version; verify every gradient, minima and routing on the current chart. Static data only; live wx/NOTAM/CTOT are pulled at planning. Open 🟧 items are in §Open items. Flag legend 🟥 restriction/hazard · 🟧 caution/unverified · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| Usual departure runway(s) | **01 or 19** — single runway, wind-determined; no published preferential-runway rule found 🟧 |
| Config logic | Wind-driven; ATC assigns the in-use direction on the day |
| Transition altitude | Not confirmed — verify current chart 🟧 |
| Take-off minima | Not published in reachable sources — verify current chart 🟧 |
| CTOT / flow regime | None confirmed; the field's own **Al Ain Flow Control System** gates training sorties (dual ATS Al Ain + Abu Dhabi Radar East approval) rather than a commercial CTOT programme |
| De-icing on departure | **NIL** — hot desert climate |

---

## 2. Stand → runway taxi routing & hot spots

- **Typical routings by runway:** Not confirmed — apron/taxi assignment for any transport-category departure would need to be confirmed with ATS Al Ain/handling agent given the field's GA/training-oriented layout.
- **Hot spots / tight taxiways:** 🟥 **Code F/A380 aircraft are restricted to taxiways A, E, F, L, M and O**, and **no backtracking or 180° turn is permitted on the runway** — a hard constraint for any large-code ground movement. No other named hot spots confirmed in reachable sources.
- **Runway crossings / read-back-required points:** Not confirmed. 🟧
- **Low-vis taxi caveats:** Winter radiation-fog season (Briefing §14) is the relevant seasonal driver; SMGCS/low-vis routing detail and follow-me availability not confirmed. 🟧

---

## 3. Runway / SID selection logic

- **By wind / config:** Single runway (01/19) — ATC selects the in-use direction by reported surface wind; no published preferential-runway rule found. 🟧
- **By departure direction:** No directional preference beyond wind found.
- **Noise / preferential-runway program:** Not found in reachable sources. 🟧
- **Interaction with arrivals:** With only one runway, departures and arrivals share the same surface — expect sequencing behind/ahead of the field's high volume of resident flight-training traffic (Briefing §3.2).

---

## 4. SID list (names only)

*Fly the charted current-AIRAC version. RNP/gradient notes are pointers only — verify on the chart.*

| SID (name) | Runway(s) | RNP / gradient note | Notes |
|---|---|---|---|
| GIDIS 1H, LABRI 2H, MURGU 1H, RETAS 2H, ROVOS 1H | 01 | RNAV 1 — verify gradient/equipage on current chart 🟧 | Names only |
| GIDIS 1J, LABRI 2J, MURGU 1J, RETAS 2J, ROVOS 1J | 19 | RNAV 1 — verify gradient/equipage on current chart 🟧 | Names only |

See [`OM E — PBN and RNP Operations`](../../../../../flight-ops/pbn-and-rnp-operations.md) for the RNAV 1/RNP framework applied across the network.

---

## 5. Initial climb, speed & noise-abatement departure

- **Initial climb / speed:** Per SID/ATC; 250 KIAS below FL100 (ICAO norm) — not independently OMAL-sourced. 🟧
- **Noise-abatement departure procedure (NADP):** Not found in reachable sources. 🟧
- **Early turn / altitude constraints:** Published per SID — verify current chart. 🟧

---

## 6. Engine-out / emergency-turn & obstacle considerations

- **Engine-out / emergency-turn procedure:** No published EOSID/emergency-turn specifics confirmed — apply the operator/type EOSID for the assigned runway. 🟧
- **Close-in / distant obstacles:** No close-in obstacles confirmed; the significant terrain feature is **Jebel Hafeet** (summit ~4,098 ft AMSL), roughly 15 NM south-east of the field (see [Briefing §3.1](index.md)) — relevant to any engine-out or emergency-turn routing toward the south-east quadrant. 🟥
- **Special DP / obstacle DP:** Not confirmed — verify on current chart. 🟧

---

## 7. Low-vis takeoff & de-icing on departure

- **LVTO minima / procedure:** Not confirmed; winter radiation-fog season (Briefing §14) is the plausible LVP driver. 🟧
- **De-icing:** **NIL** — hot desert climate, no de-icing requirement.

---

## 8. Clearance / CTOT & departure frequency sequence

- **Clearance delivery:** Not independently confirmed as a separate frequency — likely combined with ATS Al Ain Tower/Ground; confirm locally. 🟧
- **Frequency sequence:** **ATS Al Ain Ground 129.150 → Al Ain Tower 119.850 → Abu Dhabi Radar East (approach/departure) 132.67 / 133.55 / 135.35** (sector-specific — take the assigned frequency). See [Briefing §8](index.md) for the full communications table.
- **CTOT / slot handling:** No ATFM/CTOT regime confirmed for OMAL. 🟧

---

## 9. Performance watch-items for our types

- **Field-length / weight:** The single runway (4,005 m full length either direction) is non-limiting for any K Global type.
- **Density altitude / temperature:** 🟧 Field elevation is low (865 ft), but the hot-desert climate (summer 40–45°C+) drives a real density-altitude performance penalty — confirm performance planning accounts for this on a summer departure.
- **Contamination / wet-runway:** No winter-contamination concern at this desert field; dust/sand accumulation practice not confirmed. 🟧
- **Link to OM B:** See [`OM B — Fleet Capability Matrix`](../../../../../fleet/capability-matrix.md) — no field-length or field-elevation performance penalty expected for any K Global type at OMAL; confirm the Code F/A380 taxiway restriction (§2) against the assigned type.

---

## 10. Gotchas

- **Code F/A380 aircraft:** taxiways A, E, F, L, M, O only — **no backtracking or 180° turn on the runway**.
- **Single runway shared with a very high volume of resident flight-training traffic** (600+ movements/day reported) — do not assume a quiet regional-field departure sequence.
- **Training sorties are gated by the Al Ain Flow Control System** (dual ATS Al Ain + Abu Dhabi Radar East approval) — expect this traffic pattern to shape sequencing even though it does not directly apply to a transport-category departure.
- **Approach control is remoted to Abu Dhabi Radar East**, not an on-field radar unit — confirm the correct departure frequency assignment.
- **Jebel Hafeet** (~4,098 ft AMSL, ~15 NM SE) is a real terrain feature on any south-easterly departure track or emergency turn — do not assume uniformly flat desert.
- **Unscheduled arrivals (other than VVIP/VIP) are preferably scheduled 1300–0300 UTC**, subject to Al Ain OPS Management approval — relevant to any ad hoc positioning/repositioning leg into the field.

---

## Open items (🟧 — confirm against AIP / current AIRAC)

- Take-off minima and transition altitude.
- Noise-abatement departure procedure (NADP), if any.
- EOSID/engine-out procedure detail per runway.
- Clearance-delivery frequency (if distinct from Ground/Tower).
- LVTO RVR minima and low-vis taxi/SMGCS specifics.
- Preferential-runway/wind-assignment logic — not published in reachable sources.

> **Live data — pull at planning:** wx/METAR/TAF, NOTAM (runway/taxiway/navaid/lighting, esp. the Code F/A380 taxiway restriction), CTOT/ATFM (none currently confirmed), GNSS-interference advisories (see [Emirates (OMAE) FIR brief](../../../../airspace/fir/middle-east/emirates-omae.md) §9). Not stored in this durable file.

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim charts inform content but are not listed here.*

- **GCAA (UAE) — AIP, AD 2 OMAL**, current AIRAC 2026-P02 — https://www.gcaa.gov.ae/en/ais/AIPHtmlFiles/AIP/Current/AIRACs/2026-P02/pdf/AD-2.OMAL.pdf (retrieved 2026-07-26). *SID names/RNAV designation, taxiway restriction, communications.*
- SkyVector — https://skyvector.com/airport/OMAL/Al-Ain-International-Airport (retrieved 2026-07-26). *Frequencies, runway heading cross-check.*
- Global Air Navigation Services (GANS) — https://gans.aero/airports/al-ain-international-airport/ (retrieved 2026-07-26). *Traffic character/flow-control system.*

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-26 | Built from national AIP; K Global fields from live VAMSYS; 4-page pack. |
