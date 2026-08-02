# VHHH — Hong Kong International · Departure Page

**VHHH / HKG** · Chek Lap Kok, Lantau, Hong Kong SAR · Asia
**Version** v0.1 · **Updated** 2026-07-26 · **Status** Draft

> **Read-me:** Tactical departure aid for the sim, not a chart. Companion to the [VHHH Briefing](index.md), [Dispatch](dispatch.md) and [Arrival](arrival.md) pages. SIDs/procedures are listed **by name only or flagged not-yet-confirmed** — fly the charted current-AIRAC version; verify every gradient, minima and routing on the current chart. Static data only; live wx/NOTAM/CTOT are pulled at planning. Open 🟧 items are in §Open items. Flag legend 🟥 restriction/hazard · 🟧 caution/unverified · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| Usual departure runway(s) | **Centre (07C/25C)** primary under the segregated-mode concept; **South (07R/25L)** also used in mixed mode |
| Config logic | Segregated mode: Centre = departures, South = mixed; monsoon-driven prevailing wind sets 07- vs 25-configuration |
| Transition altitude | **9,000 ft** — unusually high vs. common norms 🟧 |
| Take-off minima | Published per AIP; exact figures not confirmed this pass 🟧 |
| CTOT / flow regime | ACDM/TSAT flow management (no formal slot level confirmed) 🟧 |
| De-icing on departure | **NIL** — not provisioned/required |

---

## 2. Stand → runway taxi routing & hot spots

- **Typical routings by runway:** From the Midfield Concourse or Terminal 1 stands, Ground routes via the A–K taxiway network toward the assigned runway — Centre most commonly for departures, South also used in mixed mode; confirm the exact taxi with Ground/Apron on the day.
- **Hot spots / tight taxiways:** 🟥 The **Sky Bridge** underpass over Taxilane B7 near Stand N12/R16 (28 m height clearance); several bridge-taxiway junctions (H/V, V/V4, V4/W, W/H, W/TXL W2, S/H, T/H, D/E) are AIP-noted as **not available** for straight-section use — plan routing accordingly.
- **Runway crossings / read-back-required points:** Independent triple-parallel-runway operation requires crossing clearances between the taxiway systems serving North/Centre/South — expect explicit ATC instructions and confirm the assigned runway positively given the near-identical designators.
- **Low-vis taxi caveats:** SMGCS/low-vis taxi routing would be expected under LVP conditions; not independently confirmed in reachable sources this pass. 🟧

---

## 3. Runway / SID selection logic

- **By wind / config:** Prevailing monsoon wind sets the 07- vs 25-configuration — northeasterly winter monsoon and southwesterly summer monsoon each favour a different orientation; confirm current ATIS.
- **By departure direction:** The **Centre Runway (07C/25C)** is the standard departure runway under the segregated-mode concept; **South (07R/25L)** is also used in mixed mode. Independent parallel departures off **RWY 07C** are assigned SIDs carrying a distinguishing suffix and require the crew to report the assigned SID to Tower on handoff so the correct turn direction is applied 🟧 (VATSIM vACC cross-check — verify against current AIRAC).
- **Noise / preferential-runway program:** NADP 1 or NADP 2 permitted at operator discretion for all RWY 07 departures `[CAD AIP AD 2 VHHH 2.21]`; the daily noise-mitigation period (1500–2300 UTC) shifts the South Runway to standby, concentrating departures on Centre overnight.
- **Interaction with arrivals:** Centre/South departure streams interact with the North Runway's continuous arrival stream under segregated mode; independent parallel operations demand continuous vigilance given the three near-identical runway designators.

---

## 4. SID list (names only)

*Fly the charted current-AIRAC version. RNP/gradient notes are pointers only — verify on the chart.*

| SID (name) | Runway(s) | RNP / gradient note | Notes |
|---|---|---|---|
| Not confirmed from the primary AIP in this research pass 🟧 | 07C / 07R / 25C / 25L | RNAV SID structure standard field-wide; independent-parallel RWY 07C departures carry a distinguishing SID suffix — verify gradient/turn-direction on current chart | Contingency conventional SIDs (VOR/DME-defined, ending in a discontinuity requiring ATC vectors) also referenced by a VATSIM vACC cross-check — pull the live current-AIRAC SID list before use |

---

## 5. Initial climb, speed & noise-abatement departure

- **Initial climb / speed:** A VATSIM vACC cross-check reports an initial climb of **5,000 ft for all HKIA departures regardless of SID** 🟧 (not independently confirmed against the primary AIP this pass); 250 KIAS below FL100 is the standard ICAO speed — confirm current chart.
- **Noise-abatement departure procedure (NADP):** NADP 1 or NADP 2 permitted at operator discretion for all RWY 07 take-offs; no single fleet-mandated procedure `[CAD AIP AD 2 VHHH 2.21]`.
- **Early turn / altitude constraints:** Independent-parallel RWY 07C departures require a specific turn direction per the assigned SID (§3) — verify constraints on the current chart.

---

## 6. Engine-out / emergency-turn & obstacle considerations

- **Engine-out / emergency-turn procedure:** Not confirmed in reachable sources this pass — apply the operator/type EOSID for the assigned runway. 🟧
- **Close-in / distant obstacles:** **Lantau Island high ground** (peaks ~1,000 m/3,280 ft) lies close south of the field — a factor for any southbound turn or climb-out path. **Castle Peak (1,919 ft AMSL, obstruction-lit)** lies roughly 15 NM to the northwest per the AIP obstacle chart — relevant to northbound/westbound departure paths.
- **Special DP / obstacle DP:** Not confirmed in reachable sources — verify on current chart. 🟧

---

## 7. Low-vis takeoff & de-icing on departure

- **LVTO minima / procedure:** LVP would be expected given the field's runway-specific CAT II/III infrastructure; exact LVTO RVR minima not confirmed this pass. 🟧
- **De-icing:** **NIL** — not provisioned; Hong Kong's subtropical climate does not require a de-icing season `[CAD AIP AD 2 VHHH 2.3/2.4]`. 🟩

---

## 8. Clearance / CTOT & departure frequency sequence

- **Clearance delivery:** Hong Kong Delivery **122.15** (H24) — 2-way PDC via data-link available.
- **Frequency sequence:** **Delivery 122.15 → Ground 121.6/121.875/122.125/122.55/122.6 (H24) → Tower 118.2/118.4 (AMC South)/118.7 (AMC North) (H24) → Departure 123.8/122.0 (H24) → Hong Kong (VHHK) ACC.** Take the assigned frequency and confirm current chart. (Frequencies from Briefing §8.)
- **CTOT / slot handling:** No formal slot-level regime confirmed; ACDM/TSAT flow management applies during high-demand periods (see Dispatch §4). 🟧

---

## 9. Performance watch-items for our types

- **Field-length / weight:** All three 3,800 m runways are non-limiting for any K Global type.
- **Density altitude / temperature:** Non-issue at 28 ft — sea-level field; the published reference temperature (34°C) is a genuine performance input for peak-summer take-off planning, distinct from a hot-and-high case.
- **Contamination / wet-runway:** Monsoon/typhoon-season heavy rain is the relevant seasonal consideration; all runways are grooved full-length; no specific braking-action data confirmed this pass. 🟧
- **Link to OM B:** See [`OM B — Fleet Capability Matrix`](../../../../../fleet/capability-matrix.md) — no field-length or field-elevation performance penalty for any home-based type at VHHH; check the 34°C reference-temperature figure against type-specific take-off charts for peak-summer departures.

---

## 10. Gotchas

- **Three near-identical runway designators** (07L/07C/07R, 25L/25C/25R) — always read back and confirm the assigned runway explicitly.
- **ILS category is NOT uniform by runway end** — confirm the correct CAT for the assigned runway before planning a low-vis departure.
- **Segregated-mode roles (Centre = departures) are the default, not a guarantee** — single/mixed-runway mode is used for maintenance; confirm the assigned runway with ATC/ATIS.
- **Transition altitude is unusually high at 9,000 ft** — brief the altimetry transition explicitly.
- **Lantau Island high ground lies close south of the field** — maintain terrain awareness on any southbound turn after departure.
- **Typhoon Signal No. 8 or above grounds all flights outright** — build typhoon-season (~May–Nov) schedule contingency; this is a hard stop, not a gradual capacity reduction.
- **Independent-parallel RWY 07C departures require reporting the assigned SID to Tower** so the correct turn direction is applied — confirm current procedure.

---

## Open items (🟧 — confirm against AIP / current AIRAC)

- Current-AIRAC SID names and RNP/gradient specifics per runway.
- Take-off minima / exact figures.
- Initial climb altitude (5,000 ft reported by network-sim cross-check only).
- Start-up/push-back procedure detail (ACDM/TSAT status, colour-coded pushback confirmation).
- LVTO RVR minima and SMGCS/low-vis taxi specifics.
- EOSID/engine-out procedure detail per runway.

> **Live data — pull at planning:** wx/METAR/TAF, NOTAM (runway/taxiway/navaid/lighting, esp. single/mixed-runway mode status), ACDM/TSAT status, current tropical cyclone signal status. Not stored in this durable file.

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim charts inform content but are not listed here.*

- **CAD Hong Kong eAIP, AD 2 VHHH** (cycle valid from 11 Jun 2026, published 2026-04-16) — SID/DP index, runway/declared-distance data, communications, obstacle chart — https://www.ais.gov.hk/eaip_20260611/2026-06-11-000000/html/eAIP/VH-AD-2-VHHH-en-US.html (retrieved 2026-07-26).
- Hong Kong Observatory — "Terrain-induced Windshear & Turbulence over the Hong Kong International Airport" — https://www.hko.gov.hk/en/education/aviation-and-marine/aviation/00457-terraininduced-windshear-turbulence-over-the-hong-kong-international-airport.html (retrieved 2026-07-26). *Lantau obstacle/terrain corroboration.*
- **VATSIM Hong Kong vACC — VHHH Pilot Briefing** (Release 2601) — https://vathk.com/pdf/PB_VHHH_2601.pdf (retrieved 2026-07-26). *Network-sim cross-check of departure-runway logic, SID suffix convention, initial climb altitude, frequency list — flagged 🟧 wherever used as the sole source; not regulatory.*

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-26 | Built from national AIP; K Global fields from live VAMSYS; 4-page pack. |
