# LEMI — Región de Murcia International (Corvera) · Departure Page

**LEMI / RMU** · Corvera, Murcia, Spain · Europe
**Version** v0.1 · **Updated** 2026-07-25 · **Status** Draft — AIP España (ENAIRE)-derived

> **Read-me:** Tactical departure aid for the sim, not a chart. Companion to the [LEMI Briefing](index.md), [Dispatch](dispatch.md) and [Arrival](arrival.md) pages. SIDs/procedures are listed **by name only or flagged not-yet-confirmed** — fly the charted current-AIRAC version; verify every gradient, minima and routing on the current chart. Static data only; live wx/NOTAM/CTOT are pulled at planning. Open 🟧 items are in §Open items. Flag legend 🟥 restriction/hazard · 🟧 caution/unverified · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| Usual departure runway(s) | **RWY05 or RWY23** — wind-driven, single runway used bidirectionally |
| Config logic | Wind-driven; only RWY23 carries an ILS (relevant for arrival planning, not departure per se) |
| Transition altitude | Not confirmed this pass 🟧 |
| Take-off minima | Not confirmed this pass 🟧 |
| CTOT / flow regime | Not a classic slot regime — seasonal operating hours are the dominant constraint (see Dispatch §4) |
| De-icing on departure | Not confirmed; no dedicated section found 🟧 |

---

## 2. Stand → runway taxi routing & hot spots

- **Typical routings by runway:** From the single terminal, Murcia GMC (121.755) routes traffic to the assigned runway. **Code E aircraft access the apron solely via TWY F**, with oversteering/entry-exit via **A1/C2**. One rapid-exit taxiway (RET) and 4 holding bays are part of the field's design.
- **Hot spots / tight taxiways:** None formally itemised beyond the Code E TWY F routing requirement. 🟧
- **Runway crossings / read-back-required points:** Not itemised in reachable sources — expect standard read-back discipline.
- **Low-vis taxi caveats:** 🟥 Note the field has **no LVP capability at all** — this affects the approach/landing side primarily, but crews should be aware low-vis contingency planning is materially constrained at this field generally.

---

## 3. Runway / SID selection logic

- **By wind / config:** Wind-driven; RWY23 carries the field's only ILS, relevant mainly to the arrival side of a rotation through LEMI. Departure runway selection is a straightforward wind-favour decision.
- **By departure direction:** Not otherwise differentiated.
- **Noise / preferential-runway program:** No noise-abatement section located — not confirmed. 🟧
- **Interaction with arrivals:** Single-runway field — departures and arrivals share the active runway; standard sequencing applies, low traffic volume reduces congestion risk.

---

## 4. SID list (names only)

*Fly the charted current-AIRAC version. RNP/gradient notes are pointers only — verify on the chart.*

| SID (name) | Runway(s) | RNP / gradient note | Notes |
|---|---|---|---|
| Not confirmed in reachable research pass 🟧 | 05 / 23 | Not confirmed 🟧 | Pull the live current-AIRAC SID list before use |

---

## 5. Initial climb, speed & noise-abatement departure

- **Initial climb / speed:** Per SID/ATC; 250 KIAS below FL100 (EU/ICAO norm) — confirm current chart.
- **Noise-abatement departure procedure (NADP):** Not confirmed — no noise-abatement section located. 🟧
- **Early turn / altitude constraints:** Not confirmed — verify current chart, particularly given the field's genuinely higher/more inland terrain (644 ft elevation, hilly semi-arid surroundings). 🟧

---

## 6. Engine-out / emergency-turn & obstacle considerations

- **Engine-out / emergency-turn procedure:** Not confirmed in reachable sources — apply the operator/type EOSID for the assigned runway. 🟧
- **Close-in / distant obstacles:** LEMI sits at a genuinely higher elevation (644 ft) amid hilly, semi-arid terrain relative to the network's coastal fields — the bird-hazard section's raptor profile (golden eagle, Bonelli's eagle, short-toed snake eagle) corroborates this terrain character. Exact obstacle/terrain-clearance data was not obtained this pass. 🟧
- **Special DP / obstacle DP:** Not confirmed — verify on current chart. 🟧

---

## 7. Low-vis takeoff & de-icing on departure

- **LVTO minima / procedure:** 🟥 **The field has no LVP (Low Visibility Procedures) capability** — a hard, AIP-confirmed limitation. Do not plan a low-vis departure at LEMI assuming any fallback beyond the RWY23 CAT I ILS baseline (which is itself an arrival-side consideration, not a takeoff aid).
- **De-icing:** Not confirmed; no dedicated section located in reachable sources. 🟧

---

## 8. Clearance / CTOT & departure frequency sequence

- **Clearance delivery:** Not separately published — combined with Murcia TWR.
- **Frequency sequence:** **Ground (Murcia GMC) 121.755 → Murcia TWR 121.330 → San Javier APP 130.300 (backup 125.025).** Take the assigned frequency and confirm current chart. Note **San Javier APP retains the historic Murcia–San Javier identity/frequency** — not a combined "Valencia APP" facility. (Frequencies from Briefing §8.)
- **CTOT / slot handling:** Not a classic slot regime; the field's seasonal operating-hours envelope (Dispatch §4) is the dominant scheduling constraint — comply with any assigned CTOT/EDCT-equivalent if issued. 🟧

---

## 9. Performance watch-items for our types

- **Field-length / weight:** 3,000 m is non-limiting for any K Global narrowbody or Code E type. **Code F operations are explicitly not permitted at this aerodrome.**
- **Density altitude / temperature:** LEMI's elevation (644 ft) and warmer reference temperature (33°C) are a modest step up from the network's coastal fields — not a classic hot-and-high limitation, but a genuine departure from the sea-level norm elsewhere in this pack.
- **Contamination / wet-runway:** No specific contamination/braking-action data confirmed this pass. 🟧
- **Link to OM B:** See [`OM B — Fleet Capability Matrix`](../../../../../fleet/capability-matrix.md) — no field-length performance penalty for any permitted K Global type; Code F is categorically excluded regardless of performance.

---

## 10. Gotchas

- **No LVP capability at this field** — do not assume any low-vis contingency beyond the RWY23 CAT I ILS baseline.
- **RWY05 has no ILS** — relevant mainly to arrival planning, but a reminder the field's precision-approach infrastructure is asymmetric.
- **Code F is barred entirely** — do not schedule this type into LEMI under any circumstance.
- **Seasonal, non-H24 operating hours** — confirm current published hours before planning any early/late movement; PPR (+1 hr) applies outside them.
- **San Javier APP frequency/identity legacy** — do not confuse this unit with "Valencia APP"; it is a distinct historic naming convention from the airport LEMI replaced.
- **Documented poor on-time performance** (64.5% on-time departures reported) — build schedule buffer accordingly.

---

## Open items (🟧 — confirm against AIP / current AIRAC)

- Current-AIRAC SID names and RNP/gradient specifics per runway.
- Transition altitude and take-off minima exact figures.
- EOSID/engine-out procedure detail per runway, particularly relative to LEMI's hillier terrain.
- Exact MSA/terrain-clearance data (would require the actual IAC approach charts).
- K Global taxi-in/taxi-out timing (not set in VAMSYS).

> **Live data — pull at planning:** wx/METAR/TAF, NOTAM (runway/taxiway/navaid/lighting, esp. the single ILS on RWY23 given the field's no-LVP status), current PPR/operating-hours status, de-icing status. Not stored in this durable file.

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim charts inform content but are not listed here.*

- **AIP España (ENAIRE), AD 2-LEMI**, current AIRAC amendment — https://aip.enaire.es/aip/contenido_AMDT/LE_Amdt_A_2026_05_AD_2_LEMI_en.html (retrieved 2026-07-26). *Runway/taxiway data, communications, Code E/F provisions, operating hours.*
- Wikipedia — "Región de Murcia International Airport" — https://en.wikipedia.org/wiki/Regi%C3%B3n_de_Murcia_International_Airport (retrieved 2026-07-26). *On-time-performance reputation.*

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-25 | Built from AIP España (ENAIRE); K Global fields from live VAMSYS; 4-page pack. |
