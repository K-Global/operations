# SBSV — Dep L E Magalhaes Intl · Departure Page

**SBSV / SSA** · Salvador, Bahia, Brazil · South America

**Version** v0.1 · **Updated** 2026-07-26 · **Status** Draft

> **Read-me:** Tactical departure aid for the sim, not a chart. Companion to the [SBSV Briefing](index.md), Dispatch and Arrival pages. SIDs/procedures are listed **by name only** — fly the charted current-AIRAC version; verify every gradient, minima and routing on the current chart. Static data only; live wx/NOTAM/CTOT are pulled at planning. Open 🟧 items are in §Open items. Flag legend 🟥 restriction/hazard · 🟧 caution/unverified · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| Usual departure runway(s) | Not published — 10/28 primary, 17/35 secondary/crosswind; wind-dependent |
| Config logic | Wind-driven; 10/28 (3,005 m) preferred for widebody equipment over 17/35 (1,520 m) pending declared-distance confirmation |
| Transition altitude | Not published / verify 🟧 |
| Take-off minima | Not published / verify 🟧 |
| CTOT / flow regime | None identified |
| De-icing on departure | NIL — tropical coastal field |

---

## 2. Stand → runway taxi routing & hot spots

- **Typical routings by runway:** Not confirmed — confirm with Ground on the day. 🟧
- **Hot spots / tight taxiways:** None identified in reachable sources. 🟧
- **Runway crossings / read-back-required points:** Not confirmed — two-runway field, verify crossing points on current chart.
- **Low-vis taxi caveats:** Not confirmed. 🟧

---

## 3. Runway / SID selection logic

- **By wind / config:** 10/28 (3,005 m) is the primary/longer runway; 17/35 (1,520 m) serves as a secondary/crosswind runway — treat as non-primary for our widebody equipment pending declared-distance confirmation.
- **By departure direction:** Not published — verify current AIP/ATIS practice.
- **Noise / preferential-runway program:** Not published / verify. 🟧
- **Interaction with arrivals:** Two-runway field; sequencing per Tower. Field co-located with Salvador Air Force Base — expect occasional military traffic coordination.

---

## 4. SID list (names only)

*Fly the charted current-AIRAC version. Climb-gradient / RNP notes are pointers only — verify on the chart.*

| SID (name) | Runway(s) | RNP / gradient note | Notes |
|---|---|---|---|
| Not confirmed this pass — verify current AIRAC | 10/28, 17/35 | 🟧 | Brazil operates an extensive RNAV SID network nationally — see [South America — Airspace Briefing](../../../../airspace/south-america.md) |

---

## 5. Initial climb, speed & noise-abatement departure

- **Initial climb / speed:** Standard initial climb/speed schedule assumed; not independently confirmed. 🟧
- **Noise-abatement departure procedure (NADP):** Not published / verify. 🟧
- **Early turn / altitude constraints:** Not published — verify current chart.

---

## 6. Engine-out / emergency-turn & obstacle considerations

- **Engine-out / emergency-turn procedure:** Not confirmed this pass. 🟧
- **Close-in / distant obstacles:** None identified — flat coastal dune/vegetation terrain, no terrain-related accident history found this pass. 🟩
- **Special DP / obstacle DP:** Not confirmed — verify on chart.

---

## 7. Low-vis takeoff & de-icing on departure

- **LVTO minima / procedure:** Not published / verify. 🟧
- **De-icing:** NIL — tropical coastal field, no de-icing requirement. 🟩

---

## 8. Clearance / CTOT & departure frequency sequence

- **Clearance delivery:** "Salvador Traffic" (121.100, tagged CLD) — cross-ref [SBSV Briefing](index.md) §8. 🟧 tier-4 sourced.
- **Frequency sequence:** Clearance/Traffic (121.100) → Ground (121.900) → Tower (118.300) → Approach/Con (120.800) `[OurAirports, tier-4, undated]` 🟧
- **CTOT / slot handling:** None identified — treat as uncoordinated pending confirmation.

---

## 9. Performance watch-items for our types

- **Field-length / weight:** Non-limiting on 10/28 (3,005 m) at sea level for narrowbody and most widebody types; 17/35 (1,520 m) is likely limiting for larger widebody equipment — confirm current declared distances before any planned use.
- **Density altitude / temperature:** Sea-level field — density altitude is not a meaningful factor.
- **Contamination / wet-runway:** Wetter-season (Apr–Jul) wet-runway braking-action consideration — not quantified this pass. 🟧
- **Link to OM B:** See [`OM B — Fleet Capability Matrix`](../../../../../fleet/capability-matrix.md) for type-by-type reference; no field-specific type penalty identified on 10/28.

---

## 10. Gotchas

- 17/35 is a **short secondary runway (1,520 m)** relative to our widebody types — do not plan its use without confirmed declared distances.
- Field shares infrastructure with Salvador Air Force Base — expect occasional military traffic.
- K Global VAMSYS category is unset for this field — confirm before crewing/scheduling.

---

## Open items (🟧 — confirm against AIP / current AIRAC)

- SID names/gradients, take-off minima, transition altitude, NADP policy, engine-out procedure — none confirmed from a primary source this pass.
- Declared distances for 17/35 specifically — needed before any widebody planning against that runway.

> **Live data — pull at planning:** wx/METAR/TAF, NOTAM (runway/taxiway/navaid/lighting), CTOT/ATFM, de-icing status. Not stored in this durable file.

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim charts inform content but are not listed here.*

- OurAirports — https://ourairports.com/airports/SBSV/frequencies.html , /runways.html (retrieved 2026-07-26).
- Wikipedia — "Salvador Bahia Airport" — https://en.wikipedia.org/wiki/Deputado_Lu%C3%ADs_Eduardo_Magalh%C3%A3es_International_Airport (retrieved 2026-07-26).

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-26 | Built from AIP Brasil (DECEA); K Global fields from live VAMSYS; 4-page pack. |
