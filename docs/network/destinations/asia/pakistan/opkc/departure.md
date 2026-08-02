# OPKC — Jinnah Intl · Departure Page

**OPKC / KHI** · Karachi, Pakistan · Asia
**Version** v0.1 · **Updated** 2026-07-26 · **Status** Draft

> **Read-me:** Tactical departure aid for the sim, not a chart. Companion to the [OPKC Briefing](index.md), [Dispatch](dispatch.md) and [Arrival](arrival.md) pages. SIDs/procedures are listed **by name only or flagged not-yet-confirmed** — fly the charted current-AIRAC version; verify every gradient, minima and routing on the current chart. Static data only; live wx/NOTAM/CTOT are pulled at planning. Open 🟧 items are in §Open items. Flag legend 🟥 restriction/hazard · 🟧 caution/unverified · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| Usual departure runway(s) | **07R/25L** (established, unaffected by recent works) and **07L/25R** (recently reconstructed, reportedly ICAO Code 4F/A380-capable since Feb 2026) — both parallel pairs; selection logic not confirmed 🟧 |
| Config logic | Wind/traffic driven between the 07- and 25-directions — not independently confirmed this pass 🟧 |
| Transition altitude | Not published / verify 🟧 |
| Take-off minima | Published per AIP; not obtained this pass 🟧 |
| CTOT / flow regime | No slot-coordination level confirmed; a 2025 parking-capacity coordination directive is the more concrete documented constraint 🟧 |
| De-icing on departure | **NIL** — not a factor in Karachi's climate 🟩 |

---

## 2. Stand → runway taxi routing & hot spots

- **Typical routings by runway:** Not confirmed — confirm the exact taxi routing with Ground on the day; the field's taxiway system is reported able to handle up to 12 aircraft simultaneously `[Wikipedia]`, a general capacity indicator only.
- **Hot spots / tight taxiways:** Not confirmed in reachable sources this pass. 🟧 Construction-related taxiway restrictions are plausible in the immediate aftermath of the RWY 07L/25R reconstruction (completed Feb 2026) — verify current NOTAMs before taxi planning.
- **Runway crossings / read-back-required points:** Not confirmed — expect explicit crossing/hold-short instructions given the two-parallel-runway layout; confirm locally. 🟧
- **Low-vis taxi caveats:** Not confirmed; Karachi's coastal location can occasionally produce winter/early-morning haze or fog, but no SMGCS/low-vis taxi procedure data was found this pass. 🟧

---

## 3. Runway / SID selection logic

- **By wind / config:** Not independently confirmed — expect a wind-driven choice between the 07- and 25-directions on both runway pairs; confirm current ATIS wind/config on the day.
- **By departure direction:** Not confirmed in reachable sources. 🟧
- **Noise / preferential-runway program:** No noise-abatement or preferential-runway rule confirmed in reachable sources this pass. 🟧
- **Interaction with arrivals:** Karachi Approach/Tower manage the two-parallel-runway layout under radar control; no specific dependent-configuration or crossing-constraint detail was obtained this pass. See the [Asia airspace general brief](../../../../airspace/asia.md) for the wider Karachi (OPKR) FIR picture.

---

## 4. SID list (names only)

*Fly the charted current-AIRAC version. RNP/gradient notes are pointers only — verify on the chart.*

| SID (name) | Runway(s) | RNP / gradient note | Notes |
|---|---|---|---|
| Not confirmed in reachable research pass 🟧 | 07L / 25R / 07R / 25L | Confirm RNP/gradient requirement per SID on current chart; given the regional **India–Pakistan border GNSS-interference** caution (see [Asia airspace general brief](../../../../airspace/asia.md) and [`OM E — PBN and RNP Operations`](../../../../../flight-ops/pbn-and-rnp-operations.md)), confirm RNP integrity monitoring on any RNP SID | Pull the live current-AIRAC SID list before use |

---

## 5. Initial climb, speed & noise-abatement departure

- **Initial climb / speed:** Per SID/ATC; standard 250 KIAS below FL100 (ICAO norm) — confirm current chart. 🟧
- **Noise-abatement departure procedure (NADP):** Not independently confirmed in reachable sources. 🟧
- **Early turn / altitude constraints:** Published per SID — verify constraints on the current chart. 🟧

---

## 6. Engine-out / emergency-turn & obstacle considerations

- **Engine-out / emergency-turn procedure:** No published EO/emergency-turn specifics confirmed in reachable sources — apply the operator/type EOSID for the assigned runway. 🟧
- **Close-in / distant obstacles:** Flat Indus-delta coastal plain with the Arabian Sea immediately south — no significant close-in terrain or obstacle identified in reachable sources. 🟩
- **Special DP / obstacle DP:** Not confirmed in reachable sources — verify on current chart. 🟧

---

## 7. Low-vis takeoff & de-icing on departure

- **LVTO minima / procedure:** Not confirmed in reachable sources this pass. 🟧 See [`OM E — Low Visibility Operations`](../../../../../flight-ops/low-visibility-operations.md).
- **De-icing:** **NIL** — not a factor in Karachi's hot, arid-to-semi-arid climate. 🟩

---

## 8. Clearance / CTOT & departure frequency sequence

- **Clearance delivery:** Not independently confirmed — no dedicated Delivery frequency was located this pass; confirm whether clearance is issued on Ground (121.6) at this field. 🟧
- **Frequency sequence:** **Ground 121.6 → Tower 118.3 → Approach 125.5.** (Frequencies from [Briefing §8](index.md).) Take the assigned frequency and confirm current chart; a dedicated Delivery frequency was not confirmed this pass. 🟧
- **CTOT / slot handling:** No slot-coordination level or ATFM/CTOT programme confirmed for OPKC; comply with any locally assigned flow-control instruction, and note the **2025 parking-capacity coordination directive** as the more concrete documented practical constraint — cross-ref [Dispatch §3/§4](dispatch.md). 🟧

---

## 9. Performance watch-items for our types

- **Field-length / weight:** Both runways are long by any measure (07R/25L ~11,155 ft; 07L/25R publicly reported at ~11,500 ft post-upgrade) and are **not expected to be limiting** for any K Global type once current declared distances are confirmed (Briefing §7/§18). 🟧
- **Density altitude / temperature:** 🟥 **The genuine performance watch-item at this field.** Despite the low (100 ft) field elevation, Karachi's pre-monsoon heat (documented peak 44.8°C, June 2015) drives real density-altitude/derate planning on a fully loaded hot-season departure — confirm current-day OAT against type performance data at planning, and treat the Apr–Jun window as the highest-risk period for a max-weight, hot-day departure.
- **Contamination / wet-runway:** SW monsoon (Jul–Sep) convective rain is the relevant seasonal consideration; no specific contamination/braking-action data confirmed this pass. 🟧
- **Link to OM B:** See [`OM B — Fleet Capability Matrix`](../../../../../fleet/capability-matrix.md) — confirm type-specific high-OAT performance/derate data for a hot-season OPKC departure; no field-length penalty is expected once current declared distances are confirmed.

---

## 10. Gotchas

- **Hot-season (roughly Apr–Jun) departures carry a genuine density-altitude/derate risk** despite the field's low elevation — Karachi has recorded air temperatures near 45°C; do not treat a sea-level field as automatically non-performance-limiting here.
- **RWY 07L/25R was recently reconstructed (completed Feb 2026)** — confirm current declared distances/PCN before planning a near-max-weight departure; public tier-4 figures may still reflect the pre-upgrade runway.
- **No confirmed slot/CTOT regime, but a 2025 parking-capacity coordination directive is on record** — confirm current apron/stand availability before an unplanned or infrequent rotation into OPKC.
- **Documented history of ad hoc, security-driven flight suspensions** during India–Pakistan regional tension — check live security bulletins/NOTAMs, not just routine wx/NOTAM items, before departure planning during any period of elevated regional tension.
- **India–Pakistan border GNSS-interference hotspot** (see [Asia airspace general brief](../../../../airspace/asia.md)) — relevant to any RNP SID; confirm DME/DME/IRU fallback.

---

## Open items (🟧 — confirm against AIP / current AIRAC)

- Current-AIRAC SID names and RNP/gradient specifics per runway.
- Take-off minima / DVA exact figures.
- Clearance-delivery frequency and start-up/push-back procedure detail.
- Preferential-runway/config logic and taxi hot spots.
- NADP preference (no fleet-wide NADP confirmed).
- LVTO minima and low-vis taxi procedure detail.
- EOSID/engine-out procedure detail per runway.
- Current status of the 2025 parking-capacity coordination directive and any successor NOTAM.

> **Live data — pull at planning:** wx/METAR/TAF (with particular attention to current OAT for performance planning), NOTAM (runway/taxiway/navaid/lighting, especially any residual RWY 07L/25R construction-related item), CTOT/flow status, current security/airspace-restriction NOTAMs. Not stored in this durable file.

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim charts inform content but are not listed here.*

- OurAirports — https://ourairports.com/airports/OPKC/frequencies.html (retrieved 2026-07-26). *Ground/Tower/Approach frequencies.*
- SkyVector — https://skyvector.com/airport/OPKC (retrieved 2026-07-26). *Runway headings, frequencies.*
- Profit by Pakistan Today — "First Commercial Landing Successfully Conducted on Upgraded Runway 07L/25R at Jinnah International Airport, Karachi," 19 Feb 2026 — https://profit.pakistantoday.com.pk/2026/02/19/karachi-airport-certifies-main-runway-for-a380-operations-after-18-month-upgrade (retrieved 2026-07-26). *RWY 07L/25R reconstruction scope/completion.*
- Dawn.com — "Karachi endures 'hottest' period after 2015 heatwave" — https://www.dawn.com/news/1843043 (retrieved 2026-07-26). *2015 heatwave peak temperature, performance-planning relevance.*

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-26 | Built from territory AIP; K Global fields from live VAMSYS; 4-page pack. |
