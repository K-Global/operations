# UUEE — Sheremetyevo · Departure Page

**UUEE / SVO** · Khimki, Moscow Oblast, Russia · Europe
**Version** v0.1 · **Updated** 2026-07-26 · **Status** Draft

> **Read-me:** Tactical departure aid for the sim, not a chart. Companion to the [UUEE Briefing](index.md), [Dispatch](dispatch.md) and [Arrival](arrival.md) pages. SIDs/procedures are listed **by name only or flagged not-yet-confirmed** — fly the charted current-AIRAC version. Static data only, built from public sources (Russian AIP verification pending 🟧 throughout). Open 🟧 items are in §Open items. Flag legend 🟥 restriction/hazard · 🟧 caution/unverified · 🟩 normal.

> 🟥 **Network status — standby/reference only.** UUEE is not currently part of the active K Global route network. This page is a standby/reference entry, not current tactical guidance. Current overflight/operating constraints are not tracked here.

---

## 1. Snapshot

| Field | Value |
|---|---|
| Usual departure runway(s) | Not published / verify 🟧 |
| Config logic | Not published / verify 🟧 |
| Transition altitude | Not published / verify 🟧 |
| Take-off minima | Not published / verify 🟧 |
| CTOT / flow regime | Not published / verify 🟧 |
| De-icing on departure | Expected in season (severe continental winter); specifics not confirmed 🟧 |

---

## 2. Stand → runway taxi routing & hot spots

- **Typical routings by runway:** Not published / verify. 🟧
- **Hot spots / tight taxiways:** Not published / verify — no field-specific hot-spot data obtained; the three-parallel-runway geometry is a plausible source of ground-movement complexity by analogy with other multi-parallel hubs. 🟧
- **Runway crossings / read-back-required points:** Not published / verify. 🟧
- **Low-vis taxi caveats:** Not published / verify. 🟧

---

## 3. Runway / SID selection logic

- **By wind / config:** Not published / verify. 🟧
- **By departure direction:** Not published / verify. 🟧
- **Noise / preferential-runway program:** Not published / verify. 🟧
- **Interaction with arrivals:** Reported dependent (non-independent) triple-parallel operation (§Briefing §3.2) — tier-4, unconfirmed — would affect departure/arrival interleaving if this field is ever reactivated.

---

## 4. SID list (names only)

*Fly the charted current-AIRAC version. RNP/gradient notes are pointers only — verify on the chart.*

| SID (name) | Runway(s) | RNP / gradient note | Notes |
|---|---|---|---|
| Not confirmed in reachable research pass 🟧 | 06L / 06C / 06R | Not published 🟧 | Pull the live current-AIRAC SID list before use |

---

## 5. Initial climb, speed & noise-abatement departure

- **Initial climb / speed:** Not confirmed — assume standard ICAO norms pending chart verification. 🟧
- **Noise-abatement departure procedure (NADP):** Not published / verify. 🟧
- **Early turn / altitude constraints:** Not published / verify. 🟧

---

## 6. Engine-out / emergency-turn & obstacle considerations

- **Engine-out / emergency-turn procedure:** Not published / verify. 🟧
- **Close-in / distant obstacles:** Flat Moscow-region lowland — no significant close-in terrain expected, but not independently confirmed. 🟧
- **Special DP / obstacle DP:** Not published / verify. 🟧

---

## 7. Low-vis takeoff & de-icing on departure

- **LVTO minima / procedure:** Not published / verify. 🟧
- **De-icing:** Expected given the severe continental winter (Briefing §14); pad locations/provisioning not confirmed this pass. 🟧 See [`OM E — Cold Weather Operations`](../../../../../flight-ops/cold-weather-operations.md).

---

## 8. Clearance / CTOT & departure frequency sequence

- **Clearance delivery:** Sheremetyevo Delivery **120.875** (hours not confirmed) — see [Briefing §8](index.md). 🟧
- **Frequency sequence:** **Delivery 120.875 → Ground 119.0/121.8/122.9 (by taxiway zone) → Apron 121.9/123.6/130.35/134.55 (by terminal zone) → Tower 120.7/131.5 → Radar 118.1/122.7.** Take the assigned frequency and confirm current chart. (Frequencies from Briefing §8, tier-4 sourced.) 🟧
- **CTOT / slot handling:** Not published / verify. 🟧

---

## 9. Performance watch-items for our types

- **Field-length / weight:** All three parallels (3,200–3,700 m) are non-limiting for any K Global type.
- **Density altitude / temperature:** Non-issue at 630 ft — no hot-and-high penalty. The relevant temperature consideration is the opposite extreme: severe winter cold and cold-soak/APU-start considerations, not density altitude.
- **Contamination / wet-runway:** Winter snow/ice contamination is the relevant seasonal consideration (§Briefing §14); no specific braking-action data confirmed this pass. 🟧
- **Link to OM B:** See [`OM B — Fleet Capability Matrix`](../../../../../fleet/capability-matrix.md) — no field-length or field-elevation performance penalty identified for a Category L type at UUEE.

---

## 10. Gotchas

- 🟥 **Field is not currently served** — this page is reference only; do not use for live tactical planning without a full current-AIRAC and current-AIP rebuild.
- **Runway designators have already shifted once** (historical "07/25" series → current "06/24" series) — treat any older chart/procedure referencing "07/25" as outdated.
- Reported **dependent-only parallel-runway operation** (§Briefing §3.2) — unconfirmed, verify current AIP before relying on it.
- **Severe winter cold and extensive de-icing season** is a standing seasonal factor at this hub.

---

## Open items (🟧 — confirm against AIP / current AIRAC)

- Current-AIRAC SID names and RNP/gradient specifics.
- Take-off minima, transition altitude.
- Taxi routing and hot-spot detail.
- LVTO minima and de-icing pad specifics.
- CTOT/ATFM applicability.

> **Live data — pull at planning:** wx/METAR/TAF, NOTAM (runway/taxiway/navaid/lighting), CTOT/ATFM, de-icing status, current overflight/operating-restriction bulletins for Russian airspace. Not stored in this durable file.

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim charts inform content but are not listed here.*

- OurAirports — https://ourairports.com/airports/UUEE/frequencies.html , /runways.html (retrieved 2026-07-26).
- FlightPlanDatabase — "UUEE" — https://flightplandatabase.com/airport/UUEE (retrieved 2026-07-26). *Parallel-runway operating-mode note.*

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-26 | Built from public aeronautical data (AIP verification pending); K Global fields from live VAMSYS; 4-page pack. |
