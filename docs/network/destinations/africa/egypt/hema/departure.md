# HEMA — Marsa Alam International · Departure Page

**HEMA / RMF** · Marsa Alam, Red Sea Governorate, Egypt (~60 km N of Marsa Alam town) · Africa
**Version** v0.1 · **Updated** 2026-07-26 · **Status** Draft — provisional, AIP AD-2 pages not directly reachable this pass

> **Read-me:** Tactical departure aid for X-Plane 11, not a chart. Companion to the [HEMA Briefing](index.md), [Dispatch](dispatch.md) and [Arrival](arrival.md) pages. No SID data was confirmed in reachable sources this pass, and the **runway magnetic designation itself is unresolved** (see Briefing §18) — fly the charted current-AIRAC version and confirm the runway identity before use. Static data only; live wx/NOTAM/CTOT are pulled at planning. Open 🟧 items are in §Open items. Flag legend 🟥 restriction/hazard · 🟧 caution/unverified · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| Usual departure runway(s) | 🟥 Single runway — designation unresolved (12/30 per this pack's source instruction vs 15/33 per current public data) — confirm on current AIRAC before flight |
| Config logic | Not published / verify 🟧 |
| Transition altitude | Not published / verify 🟧 |
| Take-off minima | Not confirmed 🟧 |
| CTOT / flow regime | Not confirmed — verify on OFP 🟧 |
| De-icing on departure | N/A (hot desert/coastal climate) |

---

## 2. Stand → runway taxi routing & hot spots

- **Typical routings by runway:** Not confirmed in reachable sources — single runway, confirm with Ground/Tower on the day. 🟧
- **Hot spots / tight taxiways:** Not captured. 🟧
- **Runway crossings / read-back-required points:** Not confirmed — single runway, unlikely to require a crossing, but not verified. 🟧
- **Low-vis taxi caveats:** Not confirmed; not typically a factor at this hot, generally clear coastal field, but not independently confirmed. 🟧

---

## 3. Runway / SID selection logic

- **By wind / config:** Not published / verify — single runway; the active departure direction depends on wind, confirm with ATC. 🟧
- **By departure direction:** Not confirmed. 🟧
- **Noise / preferential-runway program:** Not published / verify. 🟧
- **Interaction with arrivals:** Single-runway field — arrivals and departures share the one runway; expect sequential (not parallel) operations.

---

## 4. SID list (names only)

*No SID data confirmed in reachable sources this pass. Fly the charted current-AIRAC version.*

| SID (name) | Runway(s) | RNP / gradient note | Notes |
|---|---|---|---|
| Not confirmed in reachable research pass 🟧 | Single RWY — designation unresolved (§Briefing §18) | Not confirmed | Pull the current-AIRAC SID list before use; confirm the runway identity first |

---

## 5. Initial climb, speed & noise-abatement departure

- **Initial climb / speed:** Not confirmed; 250 KIAS below FL100 (standard ICAO norm, presumed). 🟧
- **Noise-abatement departure procedure (NADP):** Not published / verify. 🟧
- **Early turn / altitude constraints:** Not confirmed — verify current chart. 🟧

---

## 6. Engine-out / emergency-turn & obstacle considerations

- **Engine-out / emergency-turn procedure:** Not confirmed — apply the operator/type EOSID for the assigned runway. 🟧
- **Close-in / distant obstacles:** Red Sea coastal plain expected at the field; Eastern Desert hill country lies inland (west) — not independently confirmed as a close-in obstacle factor.
- **Special DP / obstacle DP:** Not confirmed — verify on current chart. 🟧

---

## 7. Low-vis takeoff & de-icing on departure

- **LVTO minima / procedure:** Not confirmed this pass. 🟧
- **De-icing:** **N/A** — hot desert/coastal climate.

---

## 8. Clearance / CTOT & departure frequency sequence

- **Clearance delivery:** Not confirmed — no HEMA-specific delivery frequency found. 🟧
- **Frequency sequence:** Not confirmed in reachable sources — pull the current-AIRAC comms table before flight. Cairo Control (HECC) is the en-route FIR authority — see [HECA Briefing §8](../heca/index.md) for the Cairo FIR frequency set (cross-reference only). 🟧
- **CTOT / slot handling:** Not confirmed — verify on OFP each operation. 🟧

---

## 9. Performance watch-items for our types

- **Field-length / weight:** Single runway ~3,430 m (minus 90 m displaced thresholds each end per current public data) — non-limiting for any K Global type once declared distances are confirmed.
- **Density altitude / temperature:** **Summer high density altitude** is the likely performance driver at this hot Red Sea coastal field.
- **Contamination / wet-runway:** Not a significant seasonal factor at this desert/coastal field.
- **Link to OM B:** See [`OM B — Fleet Capability Matrix`](../../../../../fleet/capability-matrix.md) — field length non-limiting for any home-network type; hot-day performance is the item to check in summer.

---

## 10. Gotchas

- 🟥 **The runway's own magnetic designation is unresolved** (12/30 vs 15/33) — confirm against the current AIRAC before assigning or briefing a runway identity; do not assume either figure.
- **Both thresholds reportedly displaced 90 m** — confirm current LDA before computing departure distances if a reduced-length calculation matters.
- **Field elevation is unresolved across sources** (~251 ft this pack vs 213 ft OurAirports) — do not use any single figure for a performance-critical calculation without AIP confirmation.
- **No confirmed SID/comms/navaid data this pass** — brief conservatively and pull the current-AIRAC chart set before flight.
- **Self-positioned VFR is not permitted in Egypt** — expect IFR/CVFR handling throughout.
- Summer density altitude — check take-off performance on hot days.

---

## Open items (🟧 — confirm against AIP / current AIRAC)

- 🟥 **Runway magnetic designation** — the single highest-priority open item for this field (§Briefing §18).
- Current-AIRAC SID names and any RNP/gradient specifics.
- Take-off minima.
- Departure clearance/frequency sequence — none confirmed in reachable sources.
- EOSID/engine-out procedure detail.

> **Live data — pull at planning:** wx/METAR/TAF, NOTAM (runway/taxiway/navaid/lighting, incl. any runway-renumbering notice), CTOT/ATFM if any. Not stored in this durable file.

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim charts inform content but are not listed here.*

- OurAirports — https://ourairports.com/airports/HEMA/runways.html (retrieved 2026-07-26). *Runway data — conflicts with this pack's source instruction on designation (see Briefing §18).*
- Egypt NANSC AIP register — https://www.nansceg.net (not independently re-fetched for HEMA AD 2 this pass).

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-26 | Built from AIP Egypt (NANSC); K Global fields from live VAMSYS; 4-page pack. |
