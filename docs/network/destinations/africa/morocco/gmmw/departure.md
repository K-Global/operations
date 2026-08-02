# GMMW — El Aroui Intl (Nador) · Departure Page

**GMMW / NDR** · El Aroui, Nador Province, Morocco · Africa
**Version** v0.1 · **Updated** 2026-07-26 · **Status** Draft

> **Read-me:** Tactical departure aid for the sim, not a chart. Companion to the [GMMW Briefing](index.md), Dispatch and Arrival pages. SIDs/procedures are listed **by name only** — fly the charted current-AIRAC version; verify every gradient, minima and routing on the current chart. Static data only; live wx/NOTAM/CTOT are pulled at planning. Open 🟧 items are in §Open items. Flag legend 🟥 restriction/hazard · 🟧 caution/unverified · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| Usual departure runway(s) | 08 or 26 — wind-determined; single runway, no config choice | 🟧 |
| Config logic | Wind-only; no published preferential-runway rule found | 🟧 |
| Transition altitude | Not published / verify | 🟧 |
| Take-off minima | Not published / verify — published — verify current chart | 🟧 |
| CTOT / flow regime | Not confirmed — see [GMMW Dispatch](dispatch.md) §4 | 🟧 |
| De-icing on departure | NIL expected (climate); not formally documented | 🟧 |

---

## 2. Stand → runway taxi routing & hot spots

- **Typical routings by runway:** Not published; single runway (08/26) with a presumably simple parallel-taxiway-to-apron layout — not confirmed from a reachable source. 🟧
- **Hot spots / tight taxiways:** None identified in reachable sources. 🟧
- **Runway crossings / read-back-required points:** Not confirmed. 🟧
- **Low-vis taxi caveats:** Not confirmed; no SMGCS/low-vis taxi routing documented for this field. 🟧

---

## 3. Runway / SID selection logic

- **By wind / config:** Single runway 08/26 — the operative runway is whichever end gives the better headwind/crosswind component; no published preferential-runway program was found.
- **By departure direction:** Not applicable — single runway, no directional SID split confirmed.
- **Noise / preferential-runway program:** None identified in reachable sources. 🟧
- **Interaction with arrivals:** Single runway serves both arrivals and departures — sequencing is a direct function of the runway-redundancy constraint noted in the [GMMW Briefing](index.md) §3.5.

---

## 4. SID list (names only)

*Fly the charted current-AIRAC version. Climb-gradient / RNP notes are pointers only — verify on the chart.*

| SID (name) | Runway(s) | RNP / gradient note | Notes |
|---|---|---|---|
| Not confirmed — verify current AIRAC | 08/26 | Not confirmed 🟧 | No SID names obtained from a reachable public source this pass |

---

## 5. Initial climb, speed & noise-abatement departure

- **Initial climb / speed:** Not published / verify. Standard ICAO 250 KIAS below FL100 assumed absent a local override — confirm on current chart. 🟧
- **Noise-abatement departure procedure (NADP):** None identified in reachable sources. 🟧
- **Early turn / altitude constraints:** Not published — verify current chart. 🟧

---

## 6. Engine-out / emergency-turn & obstacle considerations

- **Engine-out / emergency-turn procedure:** Not confirmed whether a runway-specific procedure exists — verify current chart. 🟥
- **Close-in / distant obstacles:** Rif mountain terrain rises to the south/southwest of the field (cross-ref [GMMW Briefing](index.md) §3.1); no close-in obstacle data confirmed for either runway direction. An engine-out departure toward high ground to the south/southwest should be treated with elevated caution pending chart-specific EO guidance. 🟧
- **Special DP / obstacle DP:** Not confirmed — verify on current chart. 🟧

---

## 7. Low-vis takeoff & de-icing on departure

- **LVTO minima / procedure:** Not published / verify — verify current chart. 🟧
- **De-icing:** NIL expected given the Mediterranean-coastal North African climate; formal absence not documented from a primary source. 🟧

---

## 8. Clearance / CTOT & departure frequency sequence

- **Clearance delivery:** Not published / verify — no dedicated Delivery frequency confirmed; cross-ref [GMMW Briefing](index.md) §8. 🟧
- **Frequency sequence:** Ground (Nador Traffic 126.55) → Tower (Nador Tower 118.65); a Delivery-specific frequency and an ATIS (125.00, single-source) are referenced in the Briefing §8 but not fully cross-checked. 🟧
- **CTOT / slot handling:** Slot-requirement status is unresolved (conflicting tier-4 reports) — see [GMMW Dispatch](dispatch.md) §4. Treat CTOT/ATFM applicability as unconfirmed. 🟧

---

## 9. Performance watch-items for our types

- **Field-length / weight:** 3,000 m is non-limiting on paper for narrowbody/medium-widebody types; declared distances (TORA/TODA/ASDA) and PCN are unconfirmed, so treat the largest K Global types as unconfirmed-adequate pending AIP verification. 🟧
- **Density altitude / temperature:** Sea-level-adjacent field (574 ft) — density altitude is a non-issue here. 🟩
- **Contamination / wet-runway:** No seasonal braking-action data confirmed; Mediterranean-coastal climate suggests occasional wet-runway conditions rather than sustained contamination risk. 🟧
- **Link to OM B:** See [Fleet Capability Matrix](../../../../../fleet/capability-matrix.md) — no GMMW-specific type consideration confirmed beyond the general PCN/declared-distance caveat above.

---

## 10. Gotchas

- 🟥 **No runway redundancy** — 08/26 is the only runway; any runway-affecting event closes the field outright (see [GMMW Briefing](index.md) §3.5).
- 🟧 Declared distances and PCN are unconfirmed — do not assume the full 3,000 m is unrestricted for planning without an AIP cross-check.
- 🟧 Slot/CTOT applicability is unresolved between conflicting tier-4 sources — verify before assuming unconstrained access.
- 🟧 Terrain rises to the south/southwest — an engine-out or emergency-turn scenario toward that sector has not been chart-verified in this pass.

---

## Open items (🟧 — confirm against AIP / current AIRAC)

- SID names, RNP/gradient requirements, take-off minima, initial-climb speed schedule — none confirmed from a reachable public source.
- Taxi routing, hot spots, low-vis taxi procedure — not published.
- Clearance-delivery frequency and full frequency sequence — partially confirmed only (Tower/Ground).
- Engine-out/obstacle departure procedure, especially with respect to Rif terrain to the south/southwest — not confirmed.
- CTOT/ATFM/slot applicability — conflicting tier-4 reports, unresolved.

> **Live data — pull at planning:** wx/METAR/TAF, NOTAM (runway/taxiway/navaid/lighting), CTOT/ATFM, de-icing status. Not stored in this durable file.

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim charts inform content but are not listed here.*

- OurAirports — https://ourairports.com/airports/GMMW/frequencies.html (retrieved 2026-07-26). *Ground/Tower frequency.*
- SkyVector — https://skyvector.com/airport/GMMW (retrieved 2026-07-26). *ATIS/Tower frequency listing.*
- AirportGuide.com — https://airportguide.com/airport/info/NDR (retrieved 2026-07-26). *Tower/Ground frequency cross-check.*

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-26 | Built from AIP Morocco (ONDA); K Global fields from live VAMSYS; 4-page pack. |
