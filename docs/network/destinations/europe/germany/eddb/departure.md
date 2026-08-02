# EDDB — Berlin Brandenburg · Departure Page

**EDDB / BER** · Berlin/Schönefeld, Germany · Europe
**Version** v0.1 · **Updated** 2026-07-25 · **Status** Draft

> **Read-me:** Tactical departure aid for the sim, not a chart. Companion to the [EDDB Briefing](index.md), [Dispatch](dispatch.md) and [Arrival](arrival.md) pages. SIDs/procedures are listed **by name only or flagged not-yet-confirmed** — fly the charted current-AIRAC version; verify every gradient, minima and routing on the current chart. **Runway designators changed 2024-10-03 due to magnetic drift — this page uses the current designators (06L/24R, 06R/24L); see the Briefing §3.2/§18.** Static data only; live wx/NOTAM/CTOT are pulled at planning. Open 🟧 items are in §Open items. Flag legend 🟥 restriction/hazard · 🟧 caution/unverified · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| Usual departure runway(s) | **06L/24R** (north pair, generally serving north-apron stands) or **06R/24L** (south pair, generally serving south-apron stands) — parking-position-based logic 🟧 |
| Config logic | Parking-position/wind-driven; the two parallels are **independent** (not crossing, unlike EDDH) |
| Transition altitude | **5,000 ft** MSL (German nationwide standard) — verify no local override on current chart 🟧 |
| Take-off minima | Not confirmed — verify current AIRAC 🟧 |
| CTOT / flow regime | **Slot-coordinated by Airport Coordination Germany** — CTOT compliance mandatory 🟥 |
| De-icing on departure | Available (standard German winter climate, modern purpose-built hub); pad location not confirmed 🟧 |

---

## 2. Stand → runway taxi routing & hot spots

- **Typical routings by runway:** North-apron stands (Apron 1-4/A/E) generally route to **06L/24R**; south-apron stands (Apron B/C) generally route to **06R/24L** — ATC may deviate from this as required (see [Briefing §10](index.md)).
- **Hot spots / tight taxiways:** 🟥 **Documented pushback hotspot near taxi lane N1** (Apron 3, stands 40/41/42) — a pushback tug may temporarily not be fully clear of the apron safety line at these adjacent stands; the aircraft must be stopped until obstacle clearance is confirmed. Documented pushback movements from stands E21–E35 route to the P2-Orange taxiway.
- **Runway crossings / read-back-required points:** Not itemised in reachable sources; the two runways are **independent parallels**, generally lower crossing-conflict workload than EDDH.
- **Low-vis taxi caveats:** SMGCS/low-vis taxi routing expected in winter fog consistent with the field's CAT II/III environment; follow-me availability not confirmed. 🟧

---

## 3. Runway / SID selection logic

- **By wind / config:** Parking-position-based logic is the primary driver (§2); wind/config swap between 06/24 ends applies as at any runway. Confirm current allocation against your assigned apron/stand (see [Briefing §4](index.md)).
- **By departure direction:** Not confirmed from a reachable source — verify current AIRAC. 🟧
- **Noise / preferential-runway program:** Not itemised in reachable sources. 🟧
- **Interaction with arrivals:** The two **independent parallels** support simultaneous arrival/departure streams with generally lower coordination workload than a crossing-runway field (see [Briefing §3.2](index.md)).

---

## 4. SID list (names only)

*Fly the charted current-AIRAC version. RNP/gradient notes are pointers only — verify on the chart.*

| SID (name) | Runway(s) | RNP / gradient note | Notes |
|---|---|---|---|
| Not confirmed in reachable research pass 🟧 | 06L / 06R / 24L / 24R | Not confirmed — verify RNAV-1 equipage requirement on current chart | Pull the live current-AIRAC SID list before use — confirm it reflects the **2024-10-03 runway redesignation** (06L/24R, 06R/24L), not the older 07/25 designators |

---

## 5. Initial climb, speed & noise-abatement departure

- **Initial climb / speed:** Per SID/ATC; 250 KIAS below FL100 (EU/ICAO norm) — confirm current chart.
- **Noise-abatement departure procedure (NADP):** Not confirmed in reachable sources. 🟧
- **Early turn / altitude constraints:** Not confirmed — verify on the current chart. 🟧

---

## 6. Engine-out / emergency-turn & obstacle considerations

- **Engine-out / emergency-turn procedure:** Not confirmed in reachable sources — apply the operator/type EOSID for the assigned runway. 🟧
- **Close-in / distant obstacles:** None — flat Brandenburg plain at 157 ft elevation, no significant terrain (see [Briefing §3.1](index.md)).
- **Special DP / obstacle DP:** Not confirmed in reachable sources — verify on current chart. 🟧

---

## 7. Low-vis takeoff & de-icing on departure

- **LVTO minima / procedure:** LVP applies consistent with the field's winter fog risk and CAT II/III ILS capability (confirmed by chart-title reference on at least one runway end); specific LVTO RVR minima not confirmed this pass. 🟧
- **De-icing:** Facilities expected available at a modern purpose-built hub; pad location(s)/procedure not confirmed. See [`OM E — Cold Weather Operations`](../../../../../flight-ops/cold-weather-operations.md). 🟧

---

## 8. Clearance / CTOT & departure frequency sequence

- **Clearance delivery:** Not separately confirmed — may be combined with Ground; verify locally (see [Briefing §8](index.md)). 🟧
- **Frequency sequence:** **Ground 129.505 → Tower (Nord) 120.03 (06L/24R) or Tower (Süd) 118.805 (06R/24L) → Bremen Radar (Bremen ACC, EDWW), frequency not confirmed for BER specifically.** Take the assigned frequency and confirm current chart. (Frequencies from [Briefing §8](index.md); all tier-4 sourced, treat as unconfirmed pending current-AIRAC cross-check.)
- **CTOT / slot handling:** **Slot-coordinated by Airport Coordination Germany** — CTOT compliance is mandatory; obtain and respect the assigned slot on the OFP. 🟥

---

## 9. Performance watch-items for our types

- **Field-length / weight:** Both parallels (11,811 ft / 13,123 ft) are non-limiting for any K Global type; the north pair (06L/24R) carries displaced thresholds up to 985 ft, still ample (see [Briefing §7](index.md)).
- **Density altitude / temperature:** Non-issue at 157 ft elevation, continental-influenced lowland climate — no hot-and-high penalty.
- **Contamination / wet-runway:** Winter snow/icing is the relevant seasonal consideration (see [Briefing §3.3](index.md)); no specific contamination/braking-action data confirmed this pass. 🟧
- **Link to OM B:** See [`OM B — Fleet Capability Matrix`](../../../../../fleet/capability-matrix.md) — no field-length or field-elevation performance penalty for any K Global type at BER; as Berlin's sole scheduled hub, BER may see a broader mix of types than the smaller regional fields.

---

## 10. Gotchas

- **Runway designators changed 2024-10-03** (07L/25R → 06L/24R; 07R/25L → 06R/24L) due to magnetic drift — confirm any older reference material or chart is not being used unknowingly.
- **Slot-coordinated airport** — CTOT compliance is mandatory; do not assume schedule flexibility.
- **Pushback hotspot near taxi lane N1** (Apron 3, stands 40/41/42) — expect the aircraft to be stopped until obstacle clearance is confirmed.
- **Two independent parallel runways** — lower crossing-conflict workload than EDDH, but confirm current runway allocation against your assigned apron/stand.
- **Displaced thresholds on the north pair only** (06L +970 ft / 24R +985 ft) — verify the correct LDA/TORA for the assigned end.

---

## Open items (🟧 — confirm against AIP / current AIRAC)

- Current-AIRAC SID names and RNP/gradient specifics per runway (confirm they reflect the 2024-10-03 redesignation).
- Take-off minima / DVA exact figures.
- Departure-direction and noise-abatement-runway preference logic.
- NADP preference (not confirmed).
- LVTO RVR minima and follow-me/SMGCS specifics.
- EOSID/engine-out procedure detail per runway.
- Clearance-delivery frequency (may be combined with Ground); Bremen Radar frequency specific to BER not confirmed.

> **Live data — pull at planning:** wx/METAR/TAF, NOTAM (runway/taxiway/navaid/lighting, esp. N1 pushback area status), CTOT/ATFM, de-icing status. Not stored in this durable file.

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim charts inform content but are not listed here.*

- OurAirports — Berlin Brandenburg Airport (EDDB) runways & frequencies — https://ourairports.com/airports/EDDB/runways.html , https://ourairports.com/airports/EDDB/frequencies.html (retrieved 2026-07-25).
- VATSIM Germany Knowledgebase — EDDB Berlin/Brandenburg — https://knowledgebase.vatsim-germany.org/books/airports-bremen-fir-edww/chapter/eddb-berlinbrandenburg/export/html (retrieved 2026-07-25). *Parking-position-based preferential runway logic, N1 pushback hotspot.*
- Aviation24.be — "Berlin Brandenburg Airport to rename runways due to shifts in Earth's magnetic field" — https://www.aviation24.be/airports/berlin/berlin-brandenburg-airport-to-rename-runways-due-to-shifts-in-earths-magnetic-field/ (retrieved 2026-07-25). *2024-10-03 redesignation.*

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-25 | Built from DFS eAIP + Briefing; folded to 4-page pack. |
