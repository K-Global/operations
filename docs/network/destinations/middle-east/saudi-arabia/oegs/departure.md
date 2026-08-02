# OEGS — Qassim / Prince Naif Bin Abdulaziz · Departure Page

**OEGS / ELQ** · Buraidah, Al-Qassim Province, Saudi Arabia · Middle East
**Version** v0.1 · **Updated** 2026-07-26 · **Status** Draft — provisional

> **Read-me:** Tactical departure aid for the sim, not a chart. Companion to the [OEGS Briefing](index.md), [Dispatch](dispatch.md) and [Arrival](arrival.md) pages. SIDs/procedures are listed **by name only** — fly the charted current-AIRAC version; verify every gradient, minima and routing on the current chart. Static data only; live wx/NOTAM/CTOT are pulled at planning. Open 🟧 items are in §Open items. Flag legend 🟥 restriction/hazard · 🟧 caution/unverified · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| Usual departure runway(s) | 15 or 33 — no published preferential rule; wind-driven |
| Config logic | Wind-driven; standard circuit RWY 15 left-hand / RWY 33 right-hand |
| Transition altitude | 13,000 ft |
| Take-off minima | Published — not confirmed this pass 🟧 |
| CTOT / flow regime | None identified |
| De-icing on departure | NIL (climate non-factor) |

---

## 2. Stand → runway taxi routing & hot spots

- **Typical routings by runway:** Via TWY A/A1/A2 or TWY B/B1 (all 26 m, asphalt PCN 65/F/A/W/T) from Royal Apron or Civil Apron. Confirm the day's routing with Ground.
- **Hot spots / tight taxiways:** None flagged in reachable AIP data. 🟩
- **Runway crossings / read-back-required points:** Not independently confirmed. 🟧
- **Low-vis taxi caveats:** Not confirmed. 🟧

---

## 3. Runway / SID selection logic

- **By wind / config:** No preferential-runway rule published; runway in use follows wind, with RWY 15 favoured when the ILS is operationally desirable (single ILS runway, §Briefing §3.5).
- **By departure direction:** Both runways share the same published departure-procedure shape (§4).
- **Noise / preferential-runway program:** None published.
- **Interaction with arrivals:** Single-runway field — arrivals and departures share the one strip; sequencing is by Tower/Approach.

---

## 4. SID list (names only)

*Fly the charted current-AIRAC version. Climb-gradient / RNP notes are pointers only — verify on the chart.*

| SID (name) | Runway(s) | RNP / gradient note | Notes |
|---|---|---|---|
| Published RWY 15 departure procedure | 15 | 🟥 **Min climb gradient 365 ft/NM (6.0%) to 5,000 ft — "if unable to comply, procedure not authorised"** | Climb on runway heading to 5,000 ft; expect radar vectors to the flight-planned route |
| Published RWY 33 departure procedure | 33 | 🟥 Same gradient requirement | Same shape as RWY 15 |

---

## 5. Initial climb, speed & noise-abatement departure

- **Initial climb / speed:** Runway-heading climb to 5,000 ft under the 6.0% gradient requirement before radar vectors — verify exact profile on the current chart.
- **Noise-abatement departure procedure (NADP):** None published. 🟧
- **Early turn / altitude constraints:** No turn before radar vectors are issued — see §4.

---

## 6. Engine-out / emergency-turn & obstacle considerations

- **Engine-out / emergency-turn procedure:** Not independently confirmed — verify current chart. 🟧 Given the 6.0% all-engine climb-gradient requirement, one-engine-inoperative performance at this field elevation/temperature is a genuine planning item.
- **Close-in / distant obstacles:** No obstacles published in reachable AIP data (table returns NIL) — cross-ref [Briefing §3.1](index.md).
- **Special DP / obstacle DP:** Not confirmed. 🟧

---

## 7. Low-vis takeoff & de-icing on departure

- **LVTO minima / procedure:** Not confirmed this pass — verify current chart. 🟧
- **De-icing:** NIL — not applicable to this climate.

---

## 8. Clearance / CTOT & departure frequency sequence

- **Clearance delivery:** Via Gassim Tower/Ground — cross-ref [Briefing §8](index.md).
- **Frequency sequence:** Ground (121.900) → Tower (118.000) → Approach (119.150).
- **CTOT / slot handling:** No ATFM/CTOT programme identified for this field.

---

## 9. Performance watch-items for our types

- **Field-length / weight:** 3,000 m at 2,126 ft elevation — length is workable for narrowbody types; the **6.0% minimum climb gradient is the binding constraint**, potentially limiting on a hot day/high-weight departure. 🟥
- **Density altitude / temperature:** 2,126 ft field elevation + 34°C reference temperature — a genuine hot-and-high case. See [`OM E — High-Elevation Aerodrome Operations`](../../../../../flight-ops/high-elevation-aerodrome-operations.md).
- **Contamination / wet-runway:** No seasonal contamination pattern identified.
- **Link to OM B:** No fleet assignment; validate climb-gradient capability against [`OM B — Fleet Capability Matrix`](../../../../../fleet/capability-matrix.md) once a type is assigned.

---

## 10. Gotchas

- 🟥 **6.0% (365 ft/NM) minimum climb gradient to 5,000 ft on both runways** — AIP-stated hard authorisation gate; this is the field's single most important departure planning item.
- 🟧 **RWY 33 has no precision approach** — a RWY 15 departure with a RWY 33 return in low weather has no ILS reciprocal.
- 🟧 A dedicated "royal parking" position exists for very heavy aircraft (up to 395 t) with a Code-C-apron-sharing rule when occupied — an unusual ground-ops case, not routine capacity.

---

## Open items (🟧 — confirm against AIP / current AIRAC)

- Exact take-off minima, LVTO minima, engine-out/emergency-turn procedure, NADP — none confirmed from a primary chart this pass.
- Assigned-type climb-gradient validation against the 6.0% requirement — pending fleet/route assignment.

> **Live data — pull at planning:** wx/METAR/TAF, NOTAM (runway/taxiway/navaid/lighting), CTOT/ATFM, de-icing status (not applicable). Not stored in this durable file.

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim charts inform content but are not listed here.*

- **SANS/GACA eAIP Kingdom of Saudi Arabia, AD 2 OEGS — Gassim/Prince Naif Bin Abdulaziz**, AIRAC AMDT cycle retrieved (2025-01-02 amendment series) — https://aimss.sans.com.sa/assets/FileManagerFiles/AIP%20AMDT%2006_24_2025_01_02/eAIP/AD%202%20OEGS%20GASSIM%20-%20PRINCE%20NAIF%20BIN%20ABDULAZIZ-en-GB.html (retrieved 2026-07-26).

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-26 | Built from SANS/GACA AIP (GACA); K Global fields not in VAMSYS (flagged); 4-page pack. |
