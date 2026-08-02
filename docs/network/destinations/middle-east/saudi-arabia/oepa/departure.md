# OEPA — Al Qaisumah International · Departure Page

**OEPA / AQI** · Al Qaisumah / Hafr Al-Batin, Eastern Province, Saudi Arabia · Middle East
**Version** v0.1 · **Updated** 2026-07-26 · **Status** Draft — provisional

> **Read-me:** Tactical departure aid for the sim, not a chart. Companion to the [OEPA Briefing](index.md), [Dispatch](dispatch.md) and [Arrival](arrival.md) pages. SIDs/procedures are listed **by name only** — fly the charted current-AIRAC version; verify every gradient, minima and routing on the current chart. **This is an uncontrolled field — no ATC clearance service exists; see Briefing §2/§5.** Static data only; live wx/NOTAM/CTOT are pulled at planning. Open 🟧 items are in §Open items. Flag legend 🟥 restriction/hazard · 🟧 caution/unverified · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| Usual departure runway(s) | 16 or 34 — no published preferential rule; wind-driven |
| Config logic | Wind-driven; no ATC to assign configuration — self-select per TIBA |
| Transition altitude | 13,000 ft |
| Take-off minima | Published — not confirmed this pass 🟧 |
| CTOT / flow regime | 🟥 None — no ATS unit exists; PPR (3-hour prior notice) is the operative gate |
| De-icing on departure | NIL (climate non-factor) |

---

## 2. Stand → runway taxi routing & hot spots

- **Typical routings by runway:** Via the parallel taxiway (PARL TXY, 45 m) or the secondary taxiway (TXY, 27.5 m), both asphalt PCN 61/F/A/W/T, from the Civil Apron.
- **Hot spots / tight taxiways:** None flagged in reachable AIP data. 🟩
- **Runway crossings / read-back-required points:** Not applicable — no ATC to issue read-backs; self-coordinate via TIBA (122.800).
- **Low-vis taxi caveats:** Not confirmed; with no ATS unit, low-visibility taxi is a crew self-separation matter. 🟧

---

## 3. Runway / SID selection logic

- **By wind / config:** No preferential-runway rule published; with no ATC, runway selection is a crew decision based on wind/traffic self-announced on TIBA.
- **By departure direction:** RWY 16 and RWY 34 share the same published departure-procedure shape (§4).
- **Noise / preferential-runway program:** None published.
- **Interaction with arrivals:** Single-runway, uncontrolled field — self-sequence with any other traffic via TIBA (122.800).

---

## 4. SID list (names only)

*Fly the charted current-AIRAC version. Climb-gradient / RNP notes are pointers only — verify on the chart.*

| SID (name) | Runway(s) | RNP / gradient note | Notes |
|---|---|---|---|
| Published RWY 16 departure procedure | 16 | Not confirmed 🟧 | Climb on runway heading to 3,000 ft, then proceed via the flight-planned route, continue climb to cleared level |
| Published RWY 34 departure procedure | 34 | Not confirmed 🟧 | Same shape as RWY 16 |

---

## 5. Initial climb, speed & noise-abatement departure

- **Initial climb / speed:** Runway-heading climb to 3,000 ft before proceeding via the flight-planned route (§4); confirm speed schedule on the current chart.
- **Noise-abatement departure procedure (NADP):** None published. 🟧
- **Early turn / altitude constraints:** Not independently confirmed — verify current chart.

---

## 6. Engine-out / emergency-turn & obstacle considerations

- **Engine-out / emergency-turn procedure:** Not independently confirmed — verify current chart. 🟧
- **Close-in / distant obstacles:** No obstacle-table entries returned in this pass (AIP table NIL) — cross-ref [Briefing §3.1](index.md). Flat desert-plain setting.
- **Special DP / obstacle DP:** Not confirmed. 🟧

---

## 7. Low-vis takeoff & de-icing on departure

- **LVTO minima / procedure:** Not confirmed this pass — with no ATS unit, low-vis takeoff is entirely a crew/operator-minima matter. 🟧
- **De-icing:** NIL — not applicable to this climate.

---

## 8. Clearance / CTOT & departure frequency sequence

- **Clearance delivery:** 🟥 **None — no ATS unit exists.** Departures are self-coordinated via TIBA (122.800 MHz, H24); the **only mandatory published call is to the Flight Service on 133.500 MHz, 15 minutes before arrival** (an arrival-side requirement — no equivalent pre-departure call is published).
- **Frequency sequence:** TIBA (122.800) only — no Ground/Tower/Approach frequency published.
- **CTOT / slot handling:** No ATFM/CTOT programme; the operative gate is **PPR (3-hour prior notice)** for any non-scheduled flight.

---

## 9. Performance watch-items for our types

- **Field-length / weight:** 3,050 m at 1,175 ft elevation is non-limiting for narrowbody types generally. 🟧
- **Density altitude / temperature:** 1,175 ft field elevation + 38°C reference temperature — a standard hot-day input, not a hot-and-high case.
- **Contamination / wet-runway:** No seasonal contamination pattern identified.
- **Link to OM B:** No fleet assignment; see [`OM B — Fleet Capability Matrix`](../../../../../fleet/capability-matrix.md) once assigned.

---

## 10. Gotchas

- 🟥 **No ATC exists at this field** — every departure is a self-announce (TIBA, 122.800) event; do not expect a clearance, a sequencing instruction, or a controller of any kind.
- 🟥 **PPR (3-hour prior notice) required for non-scheduled flights** — confirm this is in hand before planning any departure.
- 🟥 **Published operating hours 04:00–20:00 local** — do not plan a departure outside this window without separately confirming availability.
- 🟧 **RWY 16 has no precision approach and no reciprocal ILS** for a low-weather return.

---

## Open items (🟧 — confirm against AIP / current AIRAC)

- Exact take-off minima, LVTO minima, engine-out/emergency-turn procedure, NADP — none confirmed from a primary chart this pass.
- PPR request channel/contact point — not published in reachable AIP data.

> **Live data — pull at planning:** wx/METAR/TAF, NOTAM (runway/taxiway/navaid/lighting), de-icing status (not applicable), and — critically — current PPR grant and operating-hours confirmation. Not stored in this durable file.

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim charts inform content but are not listed here.*

- **SANS/GACA eAIP Kingdom of Saudi Arabia, AD 2 OEPA — Al Qaisumah International**, AIRAC AMDT cycle retrieved (2025-01-02 amendment series) — https://aimss.sans.com.sa/assets/FileManagerFiles/AIP%20AMDT%2006_24_2025_01_02/eAIP/AD%202%20OEPA%20AL%20QAISUMAH%20INTERNATIONAL-en-GB.html (retrieved 2026-07-26).

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-26 | Built from SANS/GACA AIP (GACA); K Global fields not in VAMSYS (flagged); 4-page pack. |
