# DNEN — Akanu Ibiam · Departure Page

**DNEN / ENU** · Enugu, Enugu State, Nigeria · Africa
**Version** v0.1 · **Updated** 2026-07-26 · **Status** Draft — provisional

> **Read-me:** Tactical departure aid for the sim, not a chart. Companion to the [DNEN Briefing](index.md), [Dispatch](dispatch.md) and [Arrival](arrival.md) pages. SIDs/procedures are listed **by name only** — fly the charted current-AIRAC version; verify every gradient, minima and routing on the current chart. **Runway length is an unresolved, safety-critical open item — see the Briefing §7/§18; do not plan take-off performance against either published figure without AIP confirmation.** Static data only; live wx/NOTAM/CTOT are pulled at planning. Open 🟧 items are in §Open items. Flag legend 🟥 restriction/hazard · 🟧 caution/unverified · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| Usual departure runway(s) | Not published / verify — both 08 and 26 usable; single-runway field 🟧 |
| Config logic | Not published / verify 🟧 |
| Transition altitude | Not published / verify 🟧 |
| Take-off minima | Not published / verify 🟧 |
| CTOT / flow regime | None identified |
| De-icing on departure | NIL |

---

## 2. Stand → runway taxi routing & hot spots

- **Typical routings by runway:** Not published / verify. 🟧
- **Hot spots / tight taxiways:** 🟧 Joint civil/military aerodrome — expect possible shared taxiway/apron infrastructure with the co-located Air Force base; specific hot spots not identified in reachable sources.
- **Runway crossings / read-back-required points:** Single runway (08/26) — no parallel/crossing runway configuration confirmed, though military helicopter operating areas may exist off the main movement area.
- **Low-vis taxi caveats:** Not published / verify. 🟧

---

## 3. Runway / SID selection logic

- **By wind / config:** Not published / verify — single-runway field, both-direction use per prevailing wind. 🟧
- **By departure direction:** Not published / verify. 🟧
- **Noise / preferential-runway program:** Not published / verify. 🟧
- **Interaction with arrivals:** Single-runway operation — arrivals and departures share the same runway; sequencing per Tower/Approach (combined on 123.30 per tier-4 source).

---

## 4. SID list (names only)

*Fly the charted current-AIRAC version. Climb-gradient / RNP notes are pointers only — verify on the chart.*

| SID (name) | Runway(s) | RNP / gradient note | Notes |
|---|---|---|---|
| Not published / verify | 08/26 | Not confirmed 🟧 | No current-AIRAC SID names obtained this pass |

---

## 5. Initial climb, speed & noise-abatement departure

- **Initial climb / speed:** Standard initial climb/speed schedule expected — not independently confirmed for this field.
- **Noise-abatement departure procedure (NADP):** Not published / verify. 🟧
- **Early turn / altitude constraints:** Not published / verify. 🟧

---

## 6. Engine-out / emergency-turn & obstacle considerations

- **Engine-out / emergency-turn procedure:** Not published / verify. 🟧
- **Close-in / distant obstacles:** No specific close-in high-terrain hazard identified — rolling plateau terrain around Enugu; cross-ref [DNEN Briefing](index.md) §3.1. Local obstacle survey not confirmed.
- **Special DP / obstacle DP:** Not published / verify. 🟧

---

## 7. Low-vis takeoff & de-icing on departure

- **LVTO minima / procedure:** Not published / verify. 🟧
- **De-icing:** NIL — near-equatorial field.

---

## 8. Clearance / CTOT & departure frequency sequence

- **Clearance delivery:** Not published / verify — cross-ref [DNEN Briefing](index.md) §8. 🟧
- **Frequency sequence:** Delivery → Ground → **Enugu Tower/Approach (123.30, combined)** → Kano ACC — see Briefing §8; delivery/ground not confirmed.
- **CTOT / slot handling:** None identified.

---

## 9. Performance watch-items for our types

- **Field-length / weight:** 🟥 **Do not plan take-off performance against either published runway-length figure (2,402 m vs 3,000 m) until resolved against the AIP** — see [DNEN Briefing](index.md) §7/§18 and [`OM E — Short and Limited Runway Operations`](../../../../../flight-ops/short-and-limited-runway-operations.md).
- **Density altitude / temperature:** Highest elevation of the four fields in this build (466–514 ft) — still not hot-and-high, but note the modest elevation difference from the coastal fields.
- **Contamination / wet-runway:** ITCZ rainy season (Apr–Oct) — expect wet-runway braking-action consideration; no published contamination-reporting procedure confirmed. 🟧
- **Link to OM B:** See [`OM B — Fleet Capability Matrix`](../../../../../fleet/capability-matrix.md) — do not select a type against this field until the runway-length conflict is resolved.

---

## 10. Gotchas

- 🟥 **Runway length is unresolved between sources (2,402 m vs 3,000 m)** — the single most important gotcha in this pack; verify before any performance-critical planning.
- Joint civil/military aerodrome — expect helicopter/military traffic mix on frequency and in the pattern.
- No confirmed SID/departure-procedure names — pull the current-AIRAC chart.

---

## Open items (🟧 — confirm against AIP / current AIRAC)

- 🟥 Runway length (2,402 m vs 3,000 m) — priority item.
- SIDs, take-off minima, NADP, engine-out procedure, taxi routing, transition altitude, clearance-delivery/ground frequencies, military-activity NOTAM picture — none confirmed in reachable sources.

> **Live data — pull at planning:** wx/METAR/TAF, NOTAM (runway/taxiway/navaid/lighting, military activity), CTOT/ATFM, de-icing status. Not stored in this durable file.

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim charts inform content but are not listed here.*

- SkyVector — DNEN / Enugu/Akanu Ibiam Airport — https://skyvector.com/airport/DNEN/Enugu-Akanu-Ibiam-Airport (retrieved 2026-07-26). *Runway/frequency data.*
- OurAirports — https://ourairports.com/airports/DNEN/runways.html (retrieved 2026-07-26). *Conflicting runway-length figure.*

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-26 | Built from AIP Nigeria (NCAA); K Global fields from live VAMSYS; 4-page pack. Runway-length source conflict flagged as priority open item. |
