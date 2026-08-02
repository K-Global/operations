# SBFZ — Pinto Martins Intl · Departure Page

**SBFZ / FOR** · Fortaleza, Ceará, Brazil · South America

**Version** v0.1 · **Updated** 2026-07-26 · **Status** Draft

> **Read-me:** Tactical departure aid for the sim, not a chart. Companion to the [SBFZ Briefing](index.md), Dispatch and Arrival pages. SIDs/procedures are listed **by name only** — fly the charted current-AIRAC version; verify every gradient, minima and routing on the current chart. Static data only; live wx/NOTAM/CTOT are pulled at planning. Open 🟧 items are in §Open items. Flag legend 🟥 restriction/hazard · 🟧 caution/unverified · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| Usual departure runway(s) | Not published — single runway 13/31, wind-dependent |
| Config logic | Wind-driven (single runway, no config choice beyond direction) |
| Transition altitude | Not published / verify 🟧 |
| Take-off minima | Not published / verify 🟧 |
| CTOT / flow regime | None identified |
| De-icing on departure | NIL — tropical coastal field |

---

## 2. Stand → runway taxi routing & hot spots

- **Typical routings by runway:** Not confirmed — single-runway field with a single terminal apron; confirm with Ground on the day. 🟧
- **Hot spots / tight taxiways:** None identified in reachable sources. 🟧
- **Runway crossings / read-back-required points:** Not confirmed.
- **Low-vis taxi caveats:** Not confirmed. 🟧

---

## 3. Runway / SID selection logic

- **By wind / config:** Single runway (13/31) — direction chosen by wind; no parallel/crosswind alternative.
- **By departure direction:** Not published — verify current AIP/ATIS practice.
- **Noise / preferential-runway program:** Not published / verify. 🟧
- **Interaction with arrivals:** Single runway — arrivals and departures share the same strip; sequencing per Tower.

---

## 4. SID list (names only)

*Fly the charted current-AIRAC version. Climb-gradient / RNP notes are pointers only — verify on the chart.*

| SID (name) | Runway(s) | RNP / gradient note | Notes |
|---|---|---|---|
| Not confirmed this pass — verify current AIRAC | 13/31 | 🟧 | Brazil operates an extensive RNAV SID network nationally — see [South America — Airspace Briefing](../../../../airspace/south-america.md) |

---

## 5. Initial climb, speed & noise-abatement departure

- **Initial climb / speed:** Standard initial climb/speed schedule assumed; not independently confirmed. 🟧
- **Noise-abatement departure procedure (NADP):** Not published / verify. 🟧
- **Early turn / altitude constraints:** Not published — verify current chart given the S/SW high ground noted in [SBFZ Briefing](index.md) §3.1.

---

## 6. Engine-out / emergency-turn & obstacle considerations

- **Engine-out / emergency-turn procedure:** Not confirmed this pass. 🟧
- **Close-in / distant obstacles:** High ground rises to the S/SW of the field (Maranguape/Baturité massif) — not a close-in obstacle but relevant to any departure routing toward that sector; cross-ref [SBFZ Briefing](index.md) §3.1. 🟧
- **Special DP / obstacle DP:** Not confirmed — verify on chart.

---

## 7. Low-vis takeoff & de-icing on departure

- **LVTO minima / procedure:** Not published / verify. 🟧
- **De-icing:** NIL — tropical coastal field, no de-icing requirement. 🟩

---

## 8. Clearance / CTOT & departure frequency sequence

- **Clearance delivery:** Not separately identified in reachable sources — likely combined with Ground/Tower at a field this size; cross-ref [SBFZ Briefing](index.md) §8. 🟧
- **Frequency sequence:** Ground (121.950) → Tower (129.000) → Approach (133.000) `[OurAirports, tier-4, undated]` 🟧
- **CTOT / slot handling:** None identified — treat as uncoordinated pending confirmation.

---

## 9. Performance watch-items for our types

- **Field-length / weight:** Non-limiting at sea level for narrowbody and most widebody types on the reported 2,755 m runway; confirm current-cycle runway length (§7 of the Briefing) before treating as audit-grade.
- **Density altitude / temperature:** Sea-level field — density altitude is not a meaningful factor; standard tropical-heat performance margin applies on the hottest afternoons.
- **Contamination / wet-runway:** Rainy-season (Feb–Jun) wet-runway braking-action consideration — not quantified this pass. 🟧
- **Link to OM B:** See [`OM B — Fleet Capability Matrix`](../../../../../fleet/capability-matrix.md) for type-by-type reference; no field-specific type penalty identified.

---

## 10. Gotchas

- Single runway — no reciprocal-direction flexibility if the active is blocked; factor this into alternate/holding planning.
- High ground inland to the S/SW — historically implicated in a fatal 1982 CFIT accident on approach (not a departure event, but a standing reminder to respect MSA on any routing toward that sector).
- K Global VAMSYS category is unset for this field — confirm before crewing/scheduling.

---

## Open items (🟧 — confirm against AIP / current AIRAC)

- SID names/gradients, take-off minima, transition altitude, NADP policy, engine-out procedure — none confirmed from a primary source this pass.
- Clearance-delivery frequency (may be combined with Ground/Tower) — not independently confirmed.

> **Live data — pull at planning:** wx/METAR/TAF, NOTAM (runway/taxiway/navaid/lighting), CTOT/ATFM, de-icing status. Not stored in this durable file.

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim charts inform content but are not listed here.*

- OurAirports — https://ourairports.com/airports/SBFZ/frequencies.html , /runways.html (retrieved 2026-07-26).
- Wikipedia — "Fortaleza Airport" — https://en.wikipedia.org/wiki/Pinto_Martins_International_Airport (retrieved 2026-07-26). *Historical accident context for §6.*

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-26 | Built from AIP Brasil (DECEA); K Global fields from live VAMSYS; 4-page pack. |
