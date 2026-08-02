# MUHA — Jose Marti Intl · Departure Page

**MUHA / HAV** · Havana, Cuba · North America
**Version** v0.1 · **Updated** 2026-07-26 · **Status** Draft

> **Read-me:** Tactical departure aid for the sim, not a chart. Companion to the [MUHA Briefing](index.md), [Dispatch](dispatch.md) and [Arrival](arrival.md) pages. SIDs/procedures are listed **by name only where confirmed, or flagged not-yet-confirmed** — fly the charted current-AIRAC version; verify every gradient, minima and routing on the current chart. Static data only; live wx/NOTAM/CTOT are pulled at planning. The primary AIP Cuba package was not reachable this build — figures here are tier-4 or VATSIM-operational-cross-check sourced and flagged accordingly. Open 🟧 items are in §Open items. Flag legend 🟥 restriction/hazard · 🟧 caution/unverified · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| Usual departure runway(s) | Not published / verify 🟧 — general Cuba climatology (prevailing easterly trade winds) would tend to favour RWY 06 |
| Config logic | Wind-driven (assumed); not confirmed 🟧 |
| Transition altitude | 3,000 ft per a VATSIM operational cross-check — not confirmed against the primary AIP 🟧 |
| Take-off minima | Not published / verify 🟧 |
| CTOT / flow regime | None identified; not confirmed 🟧 |
| De-icing on departure | **NIL** — tropical sea-level field, non-factor 🟩 |

---

## 2. Stand → runway taxi routing & hot spots

- **Typical routings by runway:** Per a VATSIM Havana FIR operational cross-check — Apron 1 → RWY 06 via named taxiways **G, A**; Apron 2 → RWY 06 via **I/J, A**; Apron 3 → RWY 06 via **D, A**; Apron 1 → RWY 24 via **G/H**; Apron 2 → RWY 24 via **I, A**; Apron 3 → RWY 24 via **D, E, A**. Network-sim sourced — confirm the actual routing with Ground/Tower on the day. 🟧
- **Hot spots / tight taxiways:** Not published / verify 🟧
- **Runway crossings / read-back-required points:** Not confirmed in reachable sources. 🟧
- **Low-vis taxi caveats:** Not published / verify 🟧 — no LVP infrastructure confirmed at this field.

---

## 3. Runway / SID selection logic

- **By wind / config:** Not published / verify 🟧 — general climatology (prevailing easterly trade winds) would tend to favour RWY 06.
- **By departure direction:** A VATSIM operational cross-check reports a **no-left-turn restriction after RWY 06 departure for Category C/D aircraft** — not confirmed against the primary AIP. 🟧
- **Noise / preferential-runway program:** Not published / verify 🟧
- **Interaction with arrivals:** Single-runway field — departures and arrivals share the one runway; sequencing interaction with inbound traffic is inherent to the field's configuration rather than driven by a runway-pair relationship.

---

## 4. SID list (names only)

*Fly the charted current-AIRAC version. RNP/gradient notes are pointers only — verify on the chart.*

| SID (name) | Runway(s) | RNP / gradient note | Notes |
|---|---|---|---|
| **EMUPA3** | 06 | RNAV/RNP SID — gradient/equipage not confirmed 🟧 | Named via a NOTAM cross-check citing the primary AIP; verify current chart before use |
| Not confirmed in reachable sources 🟧 | 24 | — | No RWY 24 SID name obtained — pull the current-AIRAC SID list at planning |

---

## 5. Initial climb, speed & noise-abatement departure

- **Initial climb / speed:** A VATSIM operational cross-check reports an initial climb to **FL150** after departure with handoff to Havana Center; 250 KIAS below FL100 (standard ICAO norm) applies. 🟧
- **Noise-abatement departure procedure (NADP):** Not published / verify 🟧
- **Early turn / altitude constraints:** The reported no-left-turn restriction (RWY 06, Category C/D) is the only specific constraint surfaced in reachable sources — verify current chart. 🟧

---

## 6. Engine-out / emergency-turn & obstacle considerations

- **Engine-out / emergency-turn procedure:** Not published / verify 🟧
- **Close-in / distant obstacles:** No significant close-in terrain identified — flat coastal plain (see [Briefing §3.1](index.md)). 🟩
- **Special DP / obstacle DP:** Not published / verify 🟧

---

## 7. Low-vis takeoff & de-icing on departure

- **LVTO minima / procedure:** Not published / verify 🟧 — no LVP infrastructure confirmed at this field.
- **De-icing:** **NIL** — tropical sea-level field, non-factor. 🟩

---

## 8. Clearance / CTOT & departure frequency sequence

- **Clearance delivery:** Havana Delivery **126.000** (VATSIM operational cross-check only). 🟧
- **Frequency sequence:** **Delivery 126.000 → Ground 121.900 (Marti Ground) → Tower 118.100 (Marti Tower) → Havana Terminal/Approach 120.300 → Havana Center 124.550 (alternate departure 128.700).** Take the assigned frequency and confirm current chart. (Frequencies from [Briefing §8](index.md).) 🟧
- **CTOT / slot handling:** No CTOT/slot regime identified in reachable sources. 🟧

---

## 9. Performance watch-items for our types

- **Field-length / weight:** 4,000 m single runway is non-limiting for any Category L type. 🟩
- **Density altitude / temperature:** Sea-level (210 ft), tropical climate — non-issue for density altitude, though high ambient temperature/humidity is a standard planning consideration for performance margins in the wet season. 🟧
- **Contamination / wet-runway:** Wet-season/hurricane-season heavy rainfall is a braking-action consideration; no specific contamination data confirmed. 🟧
- **Link to OM B:** See [OM B — Fleet Capability Matrix](../../../../../fleet/capability-matrix.md) — no field-length or field-elevation performance penalty for any K Global Category L type at MUHA.

---

## 10. Gotchas

- **Only one runway (06/24)** — a closure removes the field entirely; always hold a live alternate (MKJS or TJSJ).
- **RWY 24 has no ILS** — expect RWY 06 preference in marginal weather.
- **Unconfirmed no-left-turn restriction after RWY 06 departure for Category C/D aircraft** — verify current chart/NOTAM before relying on it.
- **Atlantic hurricane season (Jun–Nov, peak Aug–Oct)** can force short-notice schedule or alternate changes.
- **Real-world overflight/entry-permit administration for the Habana FIR** is a standing planning layer distinct from the airport's physical characteristics — see [Briefing §5](index.md).

---

## Open items (🟧 — confirm against AIP / current AIRAC)

- Current-AIRAC SID names (RWY 24) and RNP/gradient specifics per runway.
- Take-off minima and preferential-runway/wind logic.
- Start-up/push-back procedure detail.
- No-left-turn-after-RWY-06 restriction — confirm against the primary AIP.
- Transition altitude (3,000 ft) and initial-climb (FL150) figures — VATSIM SOP-sourced, not primary-AIP-confirmed.
- Primary AIP Cuba (IACC) AD 2 MUHA package was not reachable this build — see [Briefing §18](index.md) for the full list of unverified figures.

> **Live data — pull at planning:** wx/METAR/TAF, NOTAM (runway/navaid/lighting — single-runway field), CTOT/ATFM, tropical-cyclone/TFR status for the Habana FIR. Not stored in this durable file.

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim charts inform content but are not listed here.*

- Bigorre.org — MUHA NOTAM feed citing AIP/Cuba AIRAC AMDT 2-25 — https://www.bigorre.org/aero/notam/muha/en (retrieved 2026-07-26). *RWY 06 SID name (EMUPA3).*
- VATCAR (VATSIM Caribbean Division) — Havana FIR, "José Martí Int'l Airport (MUHA) Pilot Briefing," v1.1, 2025-02-28 — https://havana.vatcar.net/wp-content/uploads/2025/02/MUHA-Pilot-Briefing.pdf (retrieved 2026-07-26). *Network-sim SOP, not regulatory — taxi-routing, frequency-sequence, initial-climb and no-left-turn cross-check.*
- See [MUHA — Briefing](index.md) for the full source list.

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-26 | Built from national/territory AIP; K Global fields from live VAMSYS; 4-page pack. |
