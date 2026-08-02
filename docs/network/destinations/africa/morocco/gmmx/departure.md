# GMMX — Menara Intl · Departure Page

**GMMX / RAK** · Marrakesh, Morocco · Africa
**Version** v0.1 · **Updated** 2026-07-26 · **Status** Draft

> **Read-me:** Tactical departure aid for the sim, not a chart. Companion to the [GMMX Briefing](index.md), [Dispatch](dispatch.md) and [Arrival](arrival.md) pages. SIDs/procedures are listed **by name only** — fly the charted current-AIRAC version; verify every gradient, minima and routing on the current chart. Static data only; live wx/NOTAM/CTOT are pulled at planning. Open 🟧 items are in §Open items. Flag legend 🟥 restriction/hazard · 🟧 caution/unverified · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| Usual departure runway(s) | Not published / verify 🟧 — single runway 10/28; usage split by wind only |
| Config logic | Wind-driven (only runway available) |
| Transition altitude | Not published / verify 🟧 |
| Take-off minima | Not published / verify 🟧 |
| CTOT / flow regime | None identified — Not published / verify 🟧 |
| De-icing on departure | NIL expected (semi-arid climate) — not officially confirmed 🟧 |

---

## 2. Stand → runway taxi routing & hot spots

- **Typical routings by runway:** Not published / verify 🟧. VAMSYS taxi-out time of 8 min `[VAMSYS mirror 2026-07-26]` is consistent with a short, direct apron-to-runway routing typical of a single-runway regional field.
- **Hot spots / tight taxiways:** None identified in reachable sources. 🟧
- **Runway crossings / read-back-required points:** Not applicable — single runway, no parallel/crossing runway to cross.
- **Low-vis taxi caveats:** Not published / verify 🟧

---

## 3. Runway / SID selection logic

- **By wind / config:** Only one runway pair (10/28); selection is purely by wind component into either RWY 10 or RWY 28. RWY 10's 280 m displaced threshold affects landing distance, not takeoff distance — but confirm the current AIP declared-distance table before treating TODA/ASDA as unaffected.
- **By departure direction:** RWY 10 gives an eastbound initial track; RWY 28 gives a westbound initial track. No further routing preference confirmed.
- **Noise / preferential-runway program:** Not published / verify 🟧
- **Interaction with arrivals:** Single-runway field — departures and arrivals share the same runway; sequencing is entirely Tower-managed with no parallel-runway complexity.

---

## 4. SID list (names only)

*Fly the charted current-AIRAC version. Climb-gradient / RNP notes are pointers only — verify on the chart.*

| SID (name) | Runway(s) | RNP / gradient note | Notes |
|---|---|---|---|
| Not confirmed — verify current AIRAC 🟧 | 10/28 | Not published / verify 🟧 | Pull the current-AIRAC SID list at planning |

---

## 5. Initial climb, speed & noise-abatement departure

- **Initial climb / speed:** Standard 250 KIAS <FL100 assumed (ICAO norm) — not independently confirmed for GMMX.
- **Noise-abatement departure procedure (NADP):** Not published / verify 🟧
- **Early turn / altitude constraints:** Not published / verify 🟧. Any southbound turn after departure must respect MSA given the High Atlas terrain to the south ([Briefing §3.1](index.md)).

---

## 6. Engine-out / emergency-turn & obstacle considerations

- **Engine-out / emergency-turn procedure:** Not published / verify 🟧 🟥 — flag pending confirmation given the proximity of significant regional high terrain to the south.
- **Close-in / distant obstacles:** The High Atlas range — Jebel Toubkal (4,167 m/13,671 ft, North Africa's highest peak) — lies approximately 34 nm S/SSE of the field. This is a distant, not close-in, terrain feature, but it is genuinely relevant to any degraded-climb scenario requiring a southbound track. The immediate airport vicinity is a flat plain. Cross-ref [Briefing §3.1](index.md).
- **Special DP / obstacle DP:** Not confirmed — verify current AIRAC. 🟧

---

## 7. Low-vis takeoff & de-icing on departure

- **LVTO minima / procedure:** Not published / verify 🟧
- **De-icing:** NIL expected given the semi-arid Haouz-plain climate — not officially confirmed. 🟧

---

## 8. Clearance / CTOT & departure frequency sequence

- **Clearance delivery:** Not published / verify 🟧 — no dedicated Delivery frequency found in reachable sources; cross-ref [Briefing §8](index.md).
- **Frequency sequence:** Ground/Delivery (not published) → **MARRAKECH TWR** (118.10 / 118.70) → **MARRAKECH APP** (119.70 / 120.10) → Casablanca ACC (GMMM, frequency not published) — see [Briefing §8](index.md).
- **CTOT / slot handling:** None identified in reachable sources. 🟧

---

## 9. Performance watch-items for our types

- **Field-length / weight:** Non-limiting for K Global Category S operations — 3,100 m runway.
- **Density altitude / temperature:** Field elevation (1,545 ft) is sea-level-adjacent, not hot-and-high; however genuine Marrakech summer heat (semi-arid Haouz-plain climate) can still erode performance margins on the hottest days — not independently quantified for GMMX this pass. 🟧
- **Contamination / wet-runway:** Semi-arid climate; contamination exposure expected to be low but not officially confirmed. 🟧
- **Link to OM B:** See [Fleet Capability Matrix](../../../../../fleet/capability-matrix.md) — no GMMX-specific type restriction identified.

---

## 10. Gotchas

- Single runway (10/28) — no redundancy; any obstruction or disabled aircraft closes the field to fixed-wing traffic entirely.
- RWY 10's 280 m (918 ft) displaced threshold reduces landing distance from that end — do not assume the full 3,100 m physical length is usable landing on RWY 10; confirm current declared distances before dispatch.
- High Atlas terrain (Toubkal, 13,671 ft) lies ~34 nm S/SSE — respect MSA on any non-standard southbound track after departure.
- An unusually high proportion of this field's operational detail (exact frequencies, PCN, RFF, hours, SIDs) could not be confirmed from the primary AIP this pass — treat this as a provisional/Draft pack and re-verify before operational reliance.

---

## Open items (🟧 — confirm against AIP / current AIRAC)

- Primary AIP (ONDA eAIP) not reachable this pass — SID list, take-off minima, TA, NADP, LVTO minima, engine-out procedure and CTOT regime are all unconfirmed pending direct AIP access.
- Preferential-runway/config logic beyond simple wind selection not confirmed.
- Delivery/Ground frequencies not found in reachable sources.

> **Live data — pull at planning:** wx/METAR/TAF, NOTAM (runway/taxiway/navaid/lighting), CTOT/ATFM, de-icing status. Not stored in this durable file.

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim charts inform content but are not listed here. See the source register for the tier hierarchy.*

- OurAirports — https://ourairports.com/airports/GMMX/runways.html , /frequencies.html (retrieved 2026-07-26).
- SkyVector — https://skyvector.com/airport/GMMX (retrieved 2026-07-26). *Frequencies, runway heading.*
- Wikipedia — "Toubkal" — https://en.wikipedia.org/wiki/Toubkal (retrieved 2026-07-26). *Terrain elevation/distance for engine-out/obstacle context.*
- Primary source attempted, not reachable: AIP Morocco (ONDA eAIP), AD 2 GMMX — https://siamaroc.onda.ma/eaip/ad/AD2GMMX.pdf (attempted 2026-07-26, not reachable via public web fetch this pass).

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-26 | Built from AIP Morocco (ONDA); K Global fields from live VAMSYS; 4-page pack. |
