# OYSY — Sayun Intl · Departure Page

**OYSY / GXF** · Seiyun (Say'un), Hadhramaut Governorate, Yemen · Middle East
**Version** v0.1 · **Updated** 2026-07-26 · **Status** Draft — public-data build, primary AIP unreachable

> **Read-me:** Tactical departure aid for the sim, not a chart. Companion to the [OYSY Briefing](index.md), [Dispatch](dispatch.md) and [Arrival](arrival.md) pages. SIDs/procedures are listed **by name only** — none were obtained from a reachable source this pass. Static data only; live wx/NOTAM/CTOT are pulled at planning. Open 🟧 items are in §Open items. Flag legend 🟥 restriction/hazard · 🟧 caution/unverified · 🟩 normal.

---

> 🟥 **STANDING CAUTION — Yemen active-conflict airspace.** OYSY is **not in VAMSYS**. This page is reference material only — the field sits inside the Sana'a FIR (OYSC), assessed **HIGH risk at all altitudes** by EASA CZIB, and its runway is reported **not lighted** (day-only in practice). See the [Middle East Airspace brief](../../../../airspace/middle-east.md) §9 and the [Briefing](index.md) standing-caution banner.

---

## 1. Snapshot

| Field | Value |
|---|---|
| Usual departure runway(s) | 🟧 07/25 (per OurAirports; task-brief anchor cited "08/26" — unresolved discrepancy, see [Briefing §18](index.md)) |
| Config logic | Not published / verify — likely wind-driven end selection only |
| Transition altitude | Not published / verify 🟧 |
| Take-off minima | 🟥 Not published; **runway not lighted** makes day-VMC departure the only assumable case |
| CTOT / flow regime | Not applicable |
| De-icing on departure | NIL |

---

## 2. Stand → runway taxi routing & hot spots

- **Typical routings by runway:** Not published / verify. 🟧
- **Hot spots / tight taxiways:** Not published / verify. 🟧
- **Runway crossings / read-back-required points:** Not published / verify. 🟧
- **Low-vis taxi caveats:** 🟥 Not applicable in practice — no lighting infrastructure confirmed for low-vis/night taxi.

---

## 3. Runway / SID selection logic

- **By wind / config:** Not published / verify. 🟧
- **By departure direction:** Not published / verify. 🟧
- **Noise / preferential-runway program:** Not published / verify. 🟧
- **Interaction with arrivals:** Reciprocal-use scheduling on the single runway would be the governing constraint; not independently confirmed. 🟧

---

## 4. SID list (names only)

*Fly the charted current-AIRAC version. No SID names were obtained from a reachable source this pass.*

| SID (name) | Runway(s) | RNP / gradient note | Notes |
|---|---|---|---|
| Not published / verify 🟧 | 07/25 | Not published 🟧 | Confirm runway designator against AIP before any procedure lookup |

---

## 5. Initial climb, speed & noise-abatement departure

- **Initial climb / speed:** Standard ICAO profile assumed, not locally confirmed.
- **Noise-abatement departure procedure (NADP):** Not published / verify. 🟧
- **Early turn / altitude constraints:** Not published / verify. 🟧

---

## 6. Engine-out / emergency-turn & obstacle considerations

- **Engine-out / emergency-turn procedure:** Not published / verify. 🟧
- **Close-in / distant obstacles:** Interior Hadhramaut plateau/wadi terrain — no MSA/obstacle chart obtained this pass; moderate field elevation (2,097 ft) is a real but secondary factor versus OYSN. Cross-ref [Briefing §3.1](index.md).
- **Special DP / obstacle DP:** Not published / verify. 🟧

---

## 7. Low-vis takeoff & de-icing on departure

- **LVTO minima / procedure:** 🟥 Not applicable in any meaningful sense — unlit runway precludes low-visibility/night takeoff regardless of any LVP procedure.
- **De-icing:** NIL — not a climate consideration at this field.

---

## 8. Clearance / CTOT & departure frequency sequence

- **Clearance delivery:** Not published / verify — cross-ref [Briefing §8](index.md). 🟧
- **Frequency sequence:** Tower (118.4) only obtained `[OurAirports, tier-4 — not AIP-confirmed]`; no Ground/Delivery/Approach frequency identified.
- **CTOT / slot handling:** Not applicable.

---

## 9. Performance watch-items for our types

- **Field-length / weight:** 3,000 m reported runway length is workable on paper for most K Global types, but the reported **37 m width** is narrower than OYAA/OYSN (45 m) — check wingspan/code-letter suitability before assuming viability. No declared-distance breakdown available. 🟧
- **Density altitude / temperature:** Moderate elevation (2,097 ft) plus a hot interior-desert climate — a real but secondary performance factor versus OYSN's 7,216 ft.
- **Contamination / wet-runway:** Not published / verify. 🟧
- **Link to OM B:** See [`OM B — Fleet Capability Matrix`](../../../../../fleet/capability-matrix.md) for type-by-type reference, with particular attention to wingspan/code-letter fit given the narrower reported runway width.

---

## 10. Gotchas

- 🟥 **Runway reported not lighted** — do not plan any night departure.
- 🟧 **Runway designator discrepancy** (07/25 per OurAirports vs. "08/26" in the task-brief anchor) — resolve against AIP before any procedure lookup.
- 🟧 Narrower runway (37 m) than OYAA/OYSN — check code-letter/wingspan fit.
- 🟧 No SID, minima, or navaid data was obtained from a primary source — tactical departure planning here is currently unsupported by verified data.

---

## Open items (🟧 — confirm against AIP / current AIRAC)

- Runway designator (07/25 vs. 08/26) — unresolved, confirm against AIP Yemen.
- SIDs, take-off minima, MSA/obstacle detail — none obtained from a primary source.
- ATC frequency — sourced to OurAirports (tier-4), single frequency only.
- Security/airspace status — re-check against the ICAO Conflict Zone Information Repository, EASA CZIBs and OPSGROUP/safeairspace.net.

> **Live data — pull at planning:** wx/METAR/TAF, NOTAM (runway/taxiway/navaid/lighting), CTOT/ATFM, and — critically for this field — current security-clearance and conflict-zone NOTAM status. Not stored in this durable file.

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim charts inform content but are not listed here.*

- OurAirports — https://ourairports.com/airports/OYSY/frequencies.html , /runways.html (retrieved 2026-07-26). *Frequency/runway/lighting cross-check — tier-4.*
- Safe Airspace (OPSGROUP) — "Yemen" — https://safeairspace.net/yemen/ (retrieved 2026-07-26). *Live conflict-zone risk picture.*

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-26 | Built from public aeronautical data (AIP/status verification pending); K Global fields from live VAMSYS; 4-page pack. |
