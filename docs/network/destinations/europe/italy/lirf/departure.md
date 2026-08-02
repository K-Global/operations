# LIRF — Fiumicino · Departure Page

**LIRF / FCO** · Fiumicino, Rome, Lazio, Italy · Europe
**Version** v0.1 · **Updated** 2026-07-26 · **Status** Draft — AIP Italia (ENAV)-derived, K Global network build

> **Read-me:** Tactical departure aid for the sim, not a chart. Companion to the [LIRF Briefing](index.md), [Dispatch](dispatch.md) and [Arrival](arrival.md) pages. SIDs/procedures are listed **by name only or flagged not-yet-confirmed** — fly the charted current-AIRAC version; verify every gradient, minima and routing on the current chart. Static data only; live wx/NOTAM/CTOT are pulled at planning. Open 🟧 items are in §Open items. Flag legend 🟥 restriction/hazard · 🟧 caution/unverified · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| Usual departure runway(s) | Reported as the **16/34 parallel pair** for the bulk of scheduled traffic, with **07/25** used mainly for westbound departures per prevailing wind — not independently confirmed this pass 🟧 |
| Config logic | Wind/traffic/noise-dependent; not independently confirmed in detail |
| Transition altitude | **6,000 ft** (IVAO Italy reference) 🟧 |
| Take-off minima | Not confirmed this pass 🟧 |
| CTOT / flow regime | Slot-coordinated Level 3; EUROCONTROL ATFM/CTOT expected in peak/adverse conditions 🟧 |
| De-icing on departure | Not confirmed — lower seasonal likelihood at this Mediterranean coastal field 🟧 |

---

## 2. Stand → runway taxi routing & hot spots

- **Typical routings by runway:** Confirm exact taxi routing with Apron/Ground on the day; the historical third parallel (16C/34C) is now **Taxiway "D"** and forms part of the ground-movement network between stands and the active runway system.
- **Hot spots / tight taxiways:** Not confirmed in reachable sources this pass — pull the current AD 2 chart's hot-spot annex before use. 🟧
- **Runway crossings / read-back-required points:** Not confirmed this pass — expect explicit crossing/hold-short instructions given the field's near-parallel-plus-crossing-strip geometry.
- **Low-vis taxi caveats:** SMGCS/low-vis taxi routing plausible during any coastal-fog event; follow-me availability not confirmed. 🟧

---

## 3. Runway / SID selection logic

- **By wind / config:** Not independently confirmed in detail this pass; the 16/34 parallel pair is reported as the field's primary operating pair.
- **By departure direction:** RWY 07/25 is reported used mainly for westbound departures per prevailing wind — not independently confirmed. 🟧
- **Noise / preferential-runway program:** Not confirmed in detail this pass — night-hour runway-use restrictions (Briefing §6/§12) function as a de-facto noise-routing mechanism.
- **Interaction with arrivals:** The field's reduced effective runway capacity (16C/34C closure, see Briefing §3.2) concentrates both arrival and departure flow onto fewer strips than the original four-strip design — expect dependent-configuration workload at peak banks.

---

## 4. SID list (names only)

*Fly the charted current-AIRAC version. RNP/gradient notes are pointers only — verify on the chart.*

| SID (name) | Runway(s) | RNP / gradient note | Notes |
|---|---|---|---|
| OST 1D / RATIR 1D / OST 1E | 07 | Not confirmed 🟧 | Network-sim (IVAO Italy) sourced |
| PODOX / PEPIX / KONUT / ESINO / NENIG / SOSIV / XENOL / OKUNO / RIFFI / ROTUN / SIPRO / TIBER / GISPA / SOVAN (and RNAV/conventional variants) | 16L / 16R / 25 / 34L / 34R | Not confirmed 🟧 | Network-sim (IVAO Italy) sourced — **not regulatory**; pull the live current-AIRAC SID list before use |

---

## 5. Initial climb, speed & noise-abatement departure

- **Initial climb / speed:** Per SID/ATC; 250 KIAS below FL100 (EU/ICAO norm) — confirm current chart.
- **Noise-abatement departure procedure (NADP):** Not confirmed in reachable sources this pass. 🟧
- **Early turn / altitude constraints:** Published per SID — verify constraints on the current chart.

---

## 6. Engine-out / emergency-turn & obstacle considerations

- **Engine-out / emergency-turn procedure:** No published EO/emergency-turn specifics confirmed in reachable sources — apply the operator/type EOSID for the assigned runway. 🟧
- **Close-in / distant obstacles:** Flat Roman coastal plain — no significant close-in terrain identified. The Tyrrhenian coastline lies immediately to the west of the 16/34 pair; confirm any coastal-obstacle notes on the current chart.
- **Special DP / obstacle DP:** Not confirmed in reachable sources — verify on current chart. 🟧

---

## 7. Low-vis takeoff & de-icing on departure

- **LVTO minima / procedure:** Coastal fog is a plausible seasonal factor; specific LVTO RVR minima not confirmed this pass. 🟧
- **De-icing:** Not confirmed — Mediterranean coastal climate makes this a lower-frequency seasonal consideration than at continental fields; confirm current provisioning for any winter rotation. See [`OM E — Cold Weather Operations`](../../../../../flight-ops/cold-weather-operations.md). 🟧

---

## 8. Clearance / CTOT & departure frequency sequence

- **Clearance delivery:** Fiumicino Delivery **121.800** (per Briefing §8, network-sim sourced).
- **Frequency sequence:** **Delivery 121.800 → Ground 121.900 / West Ground 122.125 → Tower 118.700 / East Tower 127.625 (16L/34R only, when activated) → Roma Departure 130.900 / Roma Director 131.250.** Take the assigned frequency and confirm current chart. (Frequencies from Briefing §8, network-sim sourced — not independently AIP-confirmed.) 🟧
- **CTOT / slot handling:** **IATA Level 3 slot-coordinated**; EUROCONTROL ATFM/CTOT regulation expected in peak/adverse conditions. Comply with any assigned CTOT/EDCT-equivalent. 🟧

---

## 9. Performance watch-items for our types

- **Field-length / weight:** The 3,900 m parallel pair (16L/34R, 16R/34L) is non-limiting for any K Global type; RWY 07/25 (3,300 m, 411 m displaced threshold on 07) is likewise non-limiting for typical operating weights.
- **Density altitude / temperature:** Non-issue at 13 ft, Mediterranean coastal climate — no hot-and-high penalty.
- **Contamination / wet-runway:** No specific seasonal contamination/braking-action data confirmed this pass; treat wet-runway braking as a standard caution. 🟧
- **Link to OM B:** See [`OM B — Fleet Capability Matrix`](../../../../../fleet/capability-matrix.md) — no field-length or field-elevation performance penalty identified for any K Global type at LIRF.

---

## 10. Gotchas

- **RWY 16C/34C no longer exists as a runway** — it is permanently closed and repurposed as Taxiway "D." Never expect it as a departure option; stale navdata may still show it as active.
- **RWY 16L's apparent LDA/TORA gap** (Briefing §3.3/§7) is a landing-distance flag, not a departure-length constraint, but confirm the current chart before assuming any runway-length figure at this field.
- **Reduced effective runway capacity** from the 16C/34C closure concentrates departure flow onto fewer strips than the field's original design — expect sequencing delay at peak banks.
- **Slot-coordinated Level 3** — a late pushback has real network consequences; build buffer into the rotation.
- **Bird-strike/wildlife hazard is a standing threat** at this field (Briefing §3.4) — maintain vigilance during the initial climb, especially in spring/autumn migration windows.
- ATC frequencies and SID names in this pack are network-sim sourced — treat as indicative and confirm against the current AIRAC before use.

---

## Open items (🟧 — confirm against AIP / current AIRAC)

- Current-AIRAC SID names and RNP/gradient specifics per runway.
- Take-off minima / DVA exact figures.
- Start-up/push-back procedure detail (cross-bleed/APU notification).
- NADP preference.
- LVTO RVR minima and follow-me/SMGCS specifics.
- EOSID/engine-out procedure detail per runway.
- Confirm current runway-configuration/preferential-runway logic against a primary source (reported wind-driven pattern is tier-4 sourced only).

> **Live data — pull at planning:** wx/METAR/TAF, NOTAM (runway/taxiway/navaid/lighting), CTOT/ATFM, de-icing status, wildlife-hazard bulletins. Not stored in this durable file.

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim charts inform content but are not listed here.*

- IVAO Italy — Quick Overview, Roma Fiumicino — https://quickoverview.ivao.it/aerodrome/show/LIRF (retrieved 2026-07-26). *SID index, communications, TA/TL table — network-sim source, not regulatory.*
- OurAirports — https://ourairports.com/airports/LIRF/runways.html (retrieved 2026-07-26). *Runway/declared-distance corroboration.*

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-26 | Built from AIP Italia (ENAV); K Global fields from live VAMSYS; 4-page pack. |
