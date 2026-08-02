# EPWA — Warsaw Chopin · Departure Page

**EPWA / WAW** · Warsaw, Poland · Europe
**Version** v0.1 · **Updated** 2026-07-26 · **Status** Draft

> **Read-me:** Tactical departure aid for the sim, not a chart. Companion to the [EPWA Briefing](index.md), [Dispatch](dispatch.md) and [Arrival](arrival.md) pages. SIDs/procedures are listed **by name only or flagged not-yet-confirmed** — fly the charted current-AIRAC version; verify every gradient, minima and routing on the current chart. Static data only; live wx/NOTAM/CTOT are pulled at planning. Open 🟧 items are in §Open items. Flag legend 🟥 restriction/hazard · 🟧 caution/unverified · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| Usual departure runway(s) | Not published / verify 🟧 — no wind/noise-based selection rule confirmed |
| Config logic | Presumed wind/noise driven; not confirmed. The field's **two intersecting (not parallel) runways** mean the departure-runway choice directly interacts with the arrival runway in use — see §3 |
| Transition altitude | Not published / verify 🟧 |
| Take-off minima | Not published / verify 🟧 |
| CTOT / flow regime | Not confirmed — general EUROCONTROL Network Manager practice may apply as standard EU-airspace practice 🟧 |
| De-icing on departure | Assumed available given continental winter climate; season/procedure not confirmed 🟧 |

---

## 2. Stand → runway taxi routing & hot spots

- **Typical routings by runway:** Not confirmed from Terminal A to either runway pair — confirm the exact taxi with Ground/Apron on the day.
- **Hot spots / tight taxiways:** 🟧 No individually named taxiway hot spots confirmed in reachable sources. The **intersection of RWY 11/29 and RWY 15/33** is the field's structural ground-dependency point and should be treated as the default caution area — a departure routed toward either runway may need to cross or hold short of the other pair's alignment.
- **Runway crossings / read-back-required points:** Expect explicit crossing/hold-short instructions around the runway intersection; specific named points not confirmed. 🟧
- **Low-vis taxi caveats:** SMGCS-type low-visibility taxi routing is plausible given the field's winter fog risk, but not confirmed. 🟧

---

## 3. Runway / SID selection logic

- **By wind / config:** Not confirmed — no published preferential-runway rule found.
- **By departure direction:** Not confirmed.
- **Noise / preferential-runway program:** Not published / verify. 🟧
- **Interaction with arrivals:** Because RWY 11/29 and RWY 15/33 **physically intersect** rather than running as independent parallels, a departure off one pair directly constrains simultaneous arrival/departure use of the other — this is the field's defining runway-selection consideration, distinct from an independent-parallel hub. Reported current-rules capacity is ~34 movements/hour combined.

---

## 4. SID list (names only)

*Fly the charted current-AIRAC version. RNP/gradient notes are pointers only — verify on the chart.*

| SID (name) | Runway(s) | RNP / gradient note | Notes |
|---|---|---|---|
| Not published / verify 🟧 | 11 / 29 / 15 / 33 | Not confirmed | Pull the live current-AIRAC SID list before use |

---

## 5. Initial climb, speed & noise-abatement departure

- **Initial climb / speed:** Per SID/ATC; 250 KIAS below FL100 (EU/ICAO norm) — confirm current chart.
- **Noise-abatement departure procedure (NADP):** Not published / verify 🟧
- **Early turn / altitude constraints:** Not published — verify on the current chart. 🟧

---

## 6. Engine-out / emergency-turn & obstacle considerations

- **Engine-out / emergency-turn procedure:** Not confirmed in reachable sources — apply the operator/type EOSID for the assigned runway. 🟧
- **Close-in / distant obstacles:** Flat Mazovian Lowland — no significant close-in terrain or obstacle confirmed in reachable sources.
- **Special DP / obstacle DP:** Not confirmed — verify on current chart. 🟧

---

## 7. Low-vis takeoff & de-icing on departure

- **LVTO minima / procedure:** Not published / verify — plausible given the field's winter fog risk. 🟧
- **De-icing:** Availability assumed given the field's continental winter climate; pad location/procedure not confirmed. See [`OM E — Cold Weather Operations`](../../../../../flight-ops/cold-weather-operations.md). 🟧

---

## 8. Clearance / CTOT & departure frequency sequence

- **Clearance delivery:** Okęcie Delivery **121.605** (H24 assumed).
- **Frequency sequence:** **Okęcie Delivery 121.605 → Okęcie Ground 121.905 (reported HX 0330–2200) → Okęcie Tower 118.305 → Warszawa Approach 125.055 / 128.805 / 135.930 (Director 129.380).** Take the assigned frequency and confirm current chart. (Frequencies from Briefing §8.)
- **CTOT / slot handling:** Not confirmed — comply with any assigned CTOT/flow instruction. 🟧

---

## 9. Performance watch-items for our types

- **Field-length / weight:** RWY 15/33 (3,690 m) is non-limiting for any K Global type likely to serve this destination. **RWY 11/29 (2,800 m)** is comparatively short, and its RWY 29 end carries a ~500 m displaced threshold that further reduces the usable distance from that direction — check against the assigned type. See [`OM E — Short and Limited Runway Operations`](../../../../../flight-ops/short-and-limited-runway-operations.md) and [`OM B — Fleet Capability Matrix`](../../../../../fleet/capability-matrix.md). 🟧
- **Density altitude / temperature:** Non-issue at 362 ft, temperate continental climate — no hot-and-high penalty.
- **Contamination / wet-runway:** Winter snow/icing season is the relevant seasonal consideration; RWY 11 carries a historical (1993) wet-runway excursion accident — treat braking-action reports on this runway pair with elevated caution. See [`OM E — Cold Weather Operations`](../../../../../flight-ops/cold-weather-operations.md). 🟥
- **Link to OM B:** See [`OM B — Fleet Capability Matrix`](../../../../../fleet/capability-matrix.md) for type-by-type range/performance reference.

---

## 10. Gotchas

- **Displaced thresholds mean published runway length is not the usable distance** on RWY 29 (~500 m displaced) or RWY 33 (~661 m displaced) — brief the correct figure for the assigned runway and direction.
- **The runway pair intersects rather than running in parallel** — a departure on one pair directly interacts with arrival traffic on the other; expect sequencing holds during banks.
- **RWY 11 carries a historical (1993) runway-excursion accident** under wet/contaminated conditions — treat contaminated-surface braking-action reports on this runway with elevated caution.
- **Ground ATC is reported HX (0330–2200)** — confirm frequency/service availability for a very early departure.
- **Winter fog/snow/icing season** — confirm current LVP and de-icing status before a winter-season departure.

---

## Open items (🟧 — confirm against AIP / current AIRAC)

- Current-AIRAC SID names and RNP/gradient specifics per runway.
- Preferential-runway/wind-based selection logic.
- Take-off minima and transition altitude.
- Start-up/push-back procedure detail.
- NADP preference and noise-abatement departure routing.
- LVTO RVR minima.
- EOSID/engine-out procedure detail per runway.
- CTOT/slot regime specifics.

> **Live data — pull at planning:** wx/METAR/TAF, NOTAM (runway/taxiway/navaid/lighting, esp. the runway-intersection area), CTOT/ATFM, de-icing status. Not stored in this durable file.

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim charts inform content but are not listed here.*

- OurAirports — https://ourairports.com/airports/EPWA/runways.html (retrieved 2026-07-26). *Runway dimensions/displaced thresholds.*
- OurAirports — https://ourairports.com/airports/EPWA/frequencies.html (retrieved 2026-07-26). *ATC frequencies/hours.*
- SkyVector — https://skyvector.com/airport/EPWA (retrieved 2026-07-26). *Cross-check of runway headings/displaced thresholds/frequencies.*
- Wikipedia — "Warsaw Chopin Airport" — https://en.wikipedia.org/wiki/Warsaw_Chopin_Airport (retrieved 2026-07-26). *Historical runway-excursion accident (RWY 11, 1993), movements/hour capacity.*

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-26 | Built from national AIP; K Global fields from live VAMSYS; 4-page pack. |
