# MBPV — Providenciales Intl · Departure Page

**MBPV / PLS** · Providenciales, Turks and Caicos Islands · North America
**Version** v0.1 · **Updated** 2026-07-26 · **Status** Draft — provisional, primary AIP not reachable this pass

> **Read-me:** Tactical departure aid for the sim, not a chart. Companion to the [MBPV Briefing](index.md), [Dispatch](dispatch.md) and [Arrival](arrival.md) pages. SIDs/procedures are listed **by name only** — fly the charted current-AIRAC version; verify every gradient, minima and routing on the current chart. Static data only; live wx/NOTAM/CTOT are pulled at planning. Open 🟧 items are in §Open items. Flag legend 🟥 restriction/hazard · 🟧 caution/unverified · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| Usual departure runway(s) | Wind-dependent, RWY 10 or RWY 28 |
| Config logic | Wind-driven; no preferential-runway program identified |
| Transition altitude | Not confirmed this pass 🟧 |
| Take-off minima | Not confirmed this pass 🟧 |
| CTOT / flow regime | None identified |
| De-icing on departure | **NIL** |

---

## 2. Stand → runway taxi routing & hot spots

- **Typical routings by runway:** Not itemised in reachable sources; confirm the exact taxi routing with Ground/Tower on the day. 🟧
- **Hot spots / tight taxiways:** 🟧 A general-aviation chart-derived reference notes certain taxiways restricted to **Code D and below** — treat as unconfirmed guidance and verify current taxiway weight/wingspan limits before routing a Code E/F aircraft.
- **Runway crossings / read-back-required points:** Single runway — no crossing traffic; standard hold-short discipline applies.
- **Low-vis taxi caveats:** Not confirmed. 🟧

---

## 3. Runway / SID selection logic

- **By wind / config:** Wind-driven runway selection between RWY 10 and RWY 28; no published preferential program identified.
- **By departure direction:** Not confirmed. 🟧
- **Noise / preferential-runway program:** None identified.
- **Interaction with arrivals:** Single runway; airspace/traffic-control interaction not independently confirmed pending primary-source access (Briefing §3.2).

---

## 4. SID list (names only)

*Fly the charted current-AIRAC version. RNP/gradient notes are pointers only — verify on the chart.*

| SID (name) | Runway(s) | RNP / gradient note | Notes |
|---|---|---|---|
| RNAV (GNSS) departure procedures | 10 | Not independently confirmed from a primary AIP source this pass 🟧 | General-aviation reference material describes RNAV departure routings off RWY 10 with an initial climb altitude in the low thousands of feet — treat names/altitudes as unconfirmed pending AIP access |
| — | 28 | Not confirmed | No departure-procedure detail obtained for RWY 28 this pass 🟧 |

---

## 5. Initial climb, speed & noise-abatement departure

- **Initial climb / speed:** Not confirmed from a primary source this pass; standard 250 KIAS below FL100 expected. 🟧
- **Noise-abatement departure procedure (NADP):** None identified.
- **Early turn / altitude constraints:** Not confirmed. 🟧

---

## 6. Engine-out / emergency-turn & obstacle considerations

- **Engine-out / emergency-turn procedure:** Not confirmed in reachable sources — apply the operator/type EOSID for the assigned runway. 🟧
- **Close-in / distant obstacles:** No significant terrain identified near the field (Briefing §3.1); not independently AIP-confirmed. 🟧
- **Special DP / obstacle DP:** Not confirmed. 🟧

---

## 7. Low-vis takeoff & de-icing on departure

- **LVTO minima / procedure:** No LVP/CAT II-III infrastructure identified; standard take-off minima expected (not confirmed from a primary table this pass). 🟧
- **De-icing:** **NIL** — not applicable.

---

## 8. Clearance / CTOT & departure frequency sequence

- **Clearance delivery:** Not confirmed this pass. 🟧
- **Frequency sequence:** Not independently confirmed from a citable public source this pass — expect a standard Ground → Tower → Approach sequence under Nassau (MYNA) jurisdiction (Briefing §8); confirm actual frequencies with the current AIRAC/OFP package before use. 🟧
- **CTOT / slot handling:** No ATFM/CTOT regime identified in reachable sources. 🟧

---

## 9. Performance watch-items for our types

- **Field-length / weight:** Full pavement length (≈2,807 m, tier-4 corroborated) is not expected to be limiting for K Global types, but exact declared distances are not AIP-confirmed — verify before relying on it. 🟧
- **Density altitude / temperature:** Non-issue at sea level.
- **Contamination / wet-runway:** No de-icing season; tropical-shower wet-runway braking-action consideration applies year-round, intensifying in hurricane season (Jun–Nov).
- **Link to OM B:** See [`OM B — Fleet Capability Matrix`](../../../../../fleet/capability-matrix.md) — no field-length penalty identified for K Global types at this field, pending AIP confirmation.

---

## 10. Gotchas

- **Field not yet reconciled in VAMSYS** — do not assume standard company alternates, category or taxi times without checking current registration status.
- **Primary AIP not reachable this pass** — treat frequency, minima and declared-distance data as provisional.
- **Possible Code-D taxiway limitation** (tier-4 sourced) — confirm before routing a Code E/F aircraft via any restricted taxiway.
- **Hurricane season (Jun–Nov)** carries real diversion/closure risk across the Turks and Caicos Islands.

---

## Open items (🟧 — confirm against AIP / current AIRAC)

- **Primary UK/TCI AIP not reachable this pass** — re-verify this entire page against it when access is available.
- Take-off minima exact figures.
- Current SID names and gradient/altitude requirements per runway.
- EOSID/engine-out procedure detail per runway.
- Departure/clearance-delivery frequencies.

> **Live data — pull at planning:** wx/METAR/TAF, NOTAM (runway/taxiway/navaid/lighting), CTOT/ATFM status, tropical-cyclone advisories in season. Not stored in this durable file.

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim charts inform content but are not listed here.*

- VATSIM Caribbean (VATCAR, Nassau FIR division) — "MBPV – Providenciales International" airport briefing — https://nassau.vatcar.net/wp-content/uploads/2023/09/MBPV-Briefing.pdf (retrieved 2026-07-26). **Network-sim document, not regulatory** — used per the VATSIM cross-check provision for RNAV departure-procedure naming; corroboration only, not authoritative.

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-26 | Built from national/territory AIP; K Global fields from live VAMSYS; 4-page pack. |
