# LHBP — Budapest Liszt Ferenc Intl · Departure Page

**LHBP / BUD** · Budapest, Hungary · Europe
**Version** v0.1 · **Updated** 2026-07-26 · **Status** Draft

> **Read-me:** Tactical departure aid for the sim, not a chart. Companion to the [LHBP Briefing](index.md), [Dispatch](dispatch.md) and [Arrival](arrival.md) pages. SIDs/procedures are listed **by name only or flagged not-yet-confirmed** — fly the charted current-AIRAC version; verify every gradient, minima and routing on the current chart. Static data only; live wx/NOTAM/CTOT are pulled at planning. Open 🟧 items are in §Open items. Flag legend 🟥 restriction/hazard · 🟧 caution/unverified · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| Usual departure runway(s) | Not published / verify — no primary-source preferential-runway rule obtained 🟧 |
| Config logic | Wind/ATC-flow dependent; specific rule not confirmed 🟧 |
| Transition altitude | Not published / verify 🟧 |
| Take-off minima | Not published / verify 🟧 |
| CTOT / flow regime | Slot-coordination level not sourced; EUROCONTROL ATFM/CTOT applies as standard EU practice 🟧 |
| De-icing on departure | Assumed available in season (typ. Oct–Apr); pad location not confirmed 🟧 |

---

## 2. Stand → runway taxi routing & hot spots

- **Typical routings by runway:** Not published / verify — confirm the exact taxi with Ground/Apron on the day. 🟧
- **Hot spots / tight taxiways:** No primary-chart hot-spot list was obtained this build — this is an open item, not a confirmed "none exist" finding. 🟥 Treat all taxi routing as unfamiliar-airport-caution until confirmed locally.
- **Runway crossings / read-back-required points:** Not published / verify. 🟧
- **Low-vis taxi caveats:** Winter Pannonian Basin fog risk (Briefing §3.4/§14) makes SMGCS/low-vis taxi procedure relevant in season; specifics not confirmed. 🟧

---

## 3. Runway / SID selection logic

- **By wind / config:** Not published / verify — no primary-source preferential-runway rule obtained this build. 🟧
- **By departure direction:** Not published / verify. 🟧
- **Noise / preferential-runway program:** Not published / verify. 🟧
- **Interaction with arrivals:** RWY 13L/31R (3,707 m) and RWY 13R/31L (3,010 m) share the same 127°/307° orientation but are laterally separated by roughly 2 NM rather than configured as a close parallel pair — confirm current dependent/independent operating status with ATC; do not assume close-parallel procedures apply (see [Briefing §3.2](index.md)).

---

## 4. SID list (names only)

*Fly the charted current-AIRAC version. RNP/gradient notes are pointers only — verify on the chart.*

| SID (name) | Runway(s) | RNP / gradient note | Notes |
|---|---|---|---|
| Not published / verify 🟧 | 13L/31R, 13R/31L | Not published / verify | Pull the live current-AIRAC SID list before use. See [`OM E — PBN and RNP Operations`](../../../../../flight-ops/pbn-and-rnp-operations.md). |

---

## 5. Initial climb, speed & noise-abatement departure

- **Initial climb / speed:** Per SID/ATC; 250 KIAS below FL100 (EU/ICAO norm) — confirm current chart.
- **Noise-abatement departure procedure (NADP):** Not published / verify. 🟧
- **Early turn / altitude constraints:** Not published / verify — verify constraints on the current chart. 🟧

---

## 6. Engine-out / emergency-turn & obstacle considerations

- **Engine-out / emergency-turn procedure:** Not published / verify — apply the operator/type EOSID for the assigned runway. 🟧
- **Close-in / distant obstacles:** Flat Pannonian Basin — no significant close-in terrain identified (see [Briefing §3.1](index.md)); no specific obstacle confirmed from reachable sources this build. 🟧
- **Special DP / obstacle DP:** Not published / verify — verify on current chart. 🟧

---

## 7. Low-vis takeoff & de-icing on departure

- **LVTO minima / procedure:** Not published / verify — winter Pannonian Basin fog risk makes this a real seasonal consideration (see [Briefing §3.4](index.md)). 🟧 See [`OM E — Low Visibility Operations`](../../../../../flight-ops/low-visibility-operations.md).
- **De-icing:** Assumed available given the recognised Central European Oct–Apr de-icing season; specific pad location/provisioning not confirmed. 🟧 See [`OM E — Cold Weather Operations`](../../../../../flight-ops/cold-weather-operations.md).

---

## 8. Clearance / CTOT & departure frequency sequence

- **Clearance delivery:** Budapest Delivery **134.54/134.55** (hours not confirmed — see [Briefing §8](index.md)). 🟧
- **Frequency sequence:** **Budapest Delivery (134.54/134.55) → Budapest Ground (121.90/121.91) / Apron South-West (122.45/131.55) → Budapest Tower (118.10/119.97) → Budapest Director/Approach (119.51, 122.97, 123.86, 124.90 — sector-specific).** Take the assigned frequency and confirm current chart. (Frequencies from Briefing §8, tier-4-sourced.)
- **CTOT / slot handling:** Slot-coordination level not sourced; comply with any assigned CTOT/EDCT-equivalent per EUROCONTROL Network Manager practice. 🟧

---

## 9. Performance watch-items for our types

- **Field-length / weight:** Main runway (3,707 m) is non-limiting for narrow/medium-body fleet types typically serving a destination field of this kind; exact TORA/TODA figures not confirmed — see [Briefing §7](index.md). 🟧
- **Density altitude / temperature:** Non-issue at 495 ft, temperate continental climate — no hot-and-high penalty.
- **Contamination / wet-runway:** Winter snow/icing season is the relevant seasonal consideration (§7); no specific contamination/braking-action data confirmed this build. 🟧
- **Link to OM B:** See [`OM B — Fleet Capability Matrix`](../../../../../fleet/capability-matrix.md) — no field-length or field-elevation performance penalty identified for any K Global type at this destination pending declared-distance confirmation.

---

## 10. Gotchas

- **Declared distances (TORA/TODA/ASDA/LDA) were not obtained this build** — do not assume runway-length margins without cross-checking the current AIP.
- **RWY 13L/31R and RWY 13R/31L are same-orientation but laterally separated** (~2 NM) rather than a close parallel pair — confirm current dependent/independent operating logic with ATC, don't assume either way.
- **No named hot spots/taxiway complexity points were sourced** for this field — treat ground routing with unfamiliar-airport caution until confirmed locally.
- **Winter fog/temperature-inversion season (typ. Oct–Apr)** is the field's signature seasonal risk — build schedule buffer and confirm LVP/de-icing readiness in season.
- **A historical CFIT-adjacent accident** (IL-18, beyond RWY 31, fog/darkness/crew-coordination factors — see [Briefing §3.4](index.md)) is a standing reminder to brief conservative low-vis/night departure discipline.

---

## Open items (🟧 — confirm against AIP / current AIRAC)

- Current-AIRAC SID names and RNP/gradient specifics per runway.
- Preferential-runway/config logic.
- Take-off minima and transition altitude.
- Start-up/push-back procedure detail (cross-bleed/APU notification).
- LVTO RVR minima and de-icing pad location/provisioning.
- EOSID/engine-out procedure detail per runway.
- Named taxiway hot spots and runway-crossing points.

> **Live data — pull at planning:** wx/METAR/TAF, NOTAM (runway/taxiway/navaid/lighting), CTOT/ATFM, de-icing status. Not stored in this durable file.

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim charts inform content but are not listed here.*

- **HungaroControl eAIP (AIP Hungary, AD 2 LHBP)** — portal not accessible via a public raw fetch this build; not used as a citation for any figure above (retrieval attempted 2026-07-26).
- OurAirports — https://ourairports.com/airports/LHBP/frequencies.html (retrieved 2026-07-26). *Communications cross-check.*
- SkyVector — https://skyvector.com/airport/LHBP (retrieved 2026-07-26). *Runway/threshold and communications cross-check.*

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-26 | Built from national AIP; K Global fields from live VAMSYS; 4-page pack. |
