# LFSB — Basel-Mulhouse · Departure Page

**LFSB / BSL** · Saint-Louis, Haut-Rhin, France (EuroAirport Basel-Mulhouse-Freiburg — trinational field, published in the French AIP) · Europe
**Version** v0.1 · **Updated** 2026-07-26 · **Status** Draft

> **Read-me:** Tactical departure aid for the sim, not a chart. Companion to the [LFSB Briefing](index.md), [Dispatch](dispatch.md) and [Arrival](arrival.md) pages. SIDs/procedures are listed **by name only or flagged not-yet-confirmed** — fly the charted current-AIRAC version; verify every gradient, minima and routing on the current chart. Static data only; live wx/NOTAM/CTOT are pulled at planning. Open 🟧 items are in §Open items. Flag legend 🟥 restriction/hazard · 🟧 caution/unverified · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| Usual departure runway(s) | Not published / verify 🟧 — structurally, **RWY 15/33** (3,900 m) is the more capable pair; **RWY 07** is takeoff-only on the short pair, **RWY 25** is also takeoff-capable |
| Config logic | Wind/ATC-dependent; not detailed in the reachable AIP extract 🟧 |
| Transition altitude | **7,000 ft** (fixed) |
| Take-off minima | Published per AIP; exact figures not confirmed this pass 🟧 |
| CTOT / flow regime | **COHOR**-coordinated; exact IATA level and CTOT/ATFM specifics not confirmed 🟧 |
| De-icing on departure | Available, except overnight **0000–0600 local**; dedicated stands to Code C at F5/F6/F7 + North corridor, Code D+ on stand |

---

## 2. Stand → runway taxi routing & hot spots

- **Typical routings by runway:** Not detailed in the reachable AIP extract — confirm the exact taxi routing with Ground/Apron on the day. 🟧
- **Hot spots / tight taxiways:** 🟥 **TWY A, C, C1, J, K are wingspan-restricted to <36 m** — not usable by Code E/F aircraft; plan an alternate routing for any wide-span type. **TWY C/C1** and the area near the **Jet Aviation/Swiss maintenance gate north of THR 25** are flagged for reduced ATC obstacle-advisory capability in low visibility.
- **Runway crossings / read-back-required points:** The **07/25 and 15/33 runway pairs physically cross** at the ARP — expect explicit crossing instructions and read-backs for any taxi route that crosses the opposite pair.
- **Low-vis taxi caveats:** In low visibility, ATC may be unable to advise crews of obstacles on TWY C/C1 and near the Jet Aviation/Swiss maintenance gate — maintain heightened vigilance; SMGCS/low-vis routing specifics and follow-me availability not confirmed beyond the mandatory A380/An-225 FOLLOW-ME requirement. 🟧

---

## 3. Runway / SID selection logic

- **By wind / config:** Not published / verify — no prevailing-wind data captured in this research pass. 🟧
- **By departure direction:** **RWY 07 is takeoff-only** (LDA 0, landing prohibited) and can be used for departures in that direction; **RWY 25** is also takeoff-capable, with intersection departures available from TWY C1 (TORA 1,600 m) and TWY V (TORA 1,250 m) for shorter-field-capable aircraft. On the long pair, **RWY 15** offers intersection departures from TWY F (1,870 m), TWY G (2,370 m) and TWY H (3,000 m); **RWY 33** offers one intersection departure from TWY D (2,900 m). Full-length departures are recommended for any K Global widebody type — intersection departures are not typically appropriate for heavy aircraft.
- **Noise / preferential-runway program:** Not published / verify — no noise-abatement departure routing was captured in this research pass beyond the binational curfew regime (see Briefing §12). 🟧
- **Interaction with arrivals:** The two runway pairs **physically cross** at the ARP — departures off either pair interact with arrival/crossing traffic on the other; expect ATC sequencing and crossing coordination.

---

## 4. SID list (names only)

*Fly the charted current-AIRAC version. RNP/gradient notes are pointers only — verify on the chart.*

| SID (name) | Runway(s) | RNP / gradient note | Notes |
|---|---|---|---|
| SID RWY15 RNAV | 15 | RNAV-coded departure; gradient/equipage not transcribed — verify current chart 🟧 | Confirmed by name in the reachable extract |
| SID RWY33 RNAV | 33 | RNAV-coded departure; gradient/equipage not transcribed — verify current chart 🟧 | Confirmed by name in the reachable extract |
| Not confirmed 🟧 | 07 / 25 | — | SID names for the short pair not confirmed in this research pass — pull the current-AIRAC SID list before use |

---

## 5. Initial climb, speed & noise-abatement departure

- **Initial climb / speed:** Per SID/ATC; 250 KIAS below FL100 (EU/ICAO norm) — confirm current chart.
- **Noise-abatement departure procedure (NADP):** Not confirmed in reachable sources — verify locally against the binational noise-curfew regime (Briefing §12). 🟧
- **Early turn / altitude constraints:** Published per SID — verify on current chart. 🟧

---

## 6. Engine-out / emergency-turn & obstacle considerations

- **Engine-out / emergency-turn procedure:** No published EO/emergency-turn specifics confirmed in reachable sources — apply the operator/type EOSID for the assigned runway. 🟧
- **Close-in / distant obstacles:** No close-in high terrain identified in the reachable AIP extract (§Briefing 3.1) — not hot-and-high. Exact obstacle data beyond runway/taxiway restrictions not independently sourced this pass. 🟧
- **Special DP / obstacle DP:** Not confirmed in reachable sources — verify on current chart. 🟧

---

## 7. Low-vis takeoff & de-icing on departure

- **LVTO minima / procedure:** Not confirmed in reachable sources — verify current chart. 🟧 Note that low-vis ATC obstacle-advisory capability is specifically limited near TWY C/C1 and the Jet Aviation/Swiss maintenance gate (Briefing §4).
- **De-icing:** Available except overnight **0000–0600 local**. Dedicated stands up to Code C at **F5, F6, F7 and the North corridor**; Code D and above de-iced **on stand**. Season not specified in the reachable extract — plan for standard Central European winter operations generically. 🟧 See [`OM E — Cold Weather Operations`](../../../../../flight-ops/cold-weather-operations.md).

---

## 8. Clearance / CTOT & departure frequency sequence

- **Clearance delivery:** **BALE Prevol** 121.955 MHz (H24).
- **Frequency sequence:** **BALE Prevol (Delivery) 121.955 → BALE Sol (Ground) 121.605 → BALE Tour (Tower) 118.300 (+129.250 aux) → BALE Approche/Control** (sector-specific — 125.160/127.285/128.910/129.250/130.900/133.510/125.415/126.990, delegated across Zurich ACC and Langen ACC sectors) **→ Zurich ACC / Langen ACC / Reims ACC (LFEE)** per the departure routing. Take the assigned frequency and confirm current chart. (Frequencies from Briefing §8.)
- **CTOT / slot handling:** **COHOR**-coordinated; exact IATA level and CTOT/ATFM specifics for LFSB not independently confirmed this pass. 🟧

---

## 9. Performance watch-items for our types

- **Field-length / weight:** **RWY 15/33 (3,900 m)** is non-limiting for any K Global type. **RWY 07/25 (1,860 m)** is short by comparison and asymmetric (RWY 07 takeoff-only, TORA 1,715 m) — treat as a caution item for heavier/hotter-day departures if assigned; confirm performance against the current chart. 🟧
- **Density altitude / temperature:** Non-issue at 885 ft, temperate climate — reference temperature 28.48°C; no hot-and-high penalty.
- **Contamination / wet-runway:** Not confirmed in reachable sources — de-icing provisioning (§7) is the relevant seasonal consideration; braking-action data not captured this pass. 🟧
- **Link to OM B:** See [`OM B — Fleet Capability Matrix`](../../../../../fleet/capability-matrix.md) — Code F types (A380/An-225-class) require field-specific ground-movement review (Briefing §3.5) before planning into LFSB.

---

## 10. Gotchas

- **RWY 07 is takeoff-only** — never expect or plan a landing on RWY 07 (LDA 0, landing prohibited).
- **The 07/25 and 15/33 runway pairs physically cross** at the ARP — expect explicit crossing instructions regardless of assigned departure runway.
- **RWY 25 requires serviceable PAPI/threshold-identification lighting** for approach — relevant to reciprocal traffic during your departure sequencing.
- **TWY A, C, C1, J, K are wingspan-restricted (<36 m)** — plan an alternate taxi route for any Code E/F type.
- **Pushback approval is valid for only 1 minute** — must begin within that window of the approval.
- **U-turns are forbidden anywhere on the platform** (taxiways and runways).
- **Binational curfew regime is hard** — a delayed departure risks the general commercial stand-departure restriction (~2300–0500, exact end-hour unconfirmed) or the Chapter-3 night-landing-adjacent provisions; build buffer into the last rotation.
- **De-icing is unavailable 0000–0600 local** — a delayed winter departure in that window has no de-icing service until 0600.
- **Code F aircraft (A380/An-225-class) require FOLLOW-ME and CAT III holding-point procedures** — confirm applicability before planning these types.

---

## Open items (🟧 — confirm against AIP / current AIRAC)

- Usual departure runway(s) and wind/config-driven selection logic.
- Current-AIRAC SID names for RWY 07/25 and RNP/gradient specifics for all SIDs.
- Take-off minima exact figures.
- NADP/noise-abatement departure procedure detail.
- LVTO RVR minima and low-vis taxi/follow-me specifics beyond the mandatory A380/An-225 requirement.
- EOSID/engine-out procedure detail per runway.
- CTOT/ATFM specifics and confirmed IATA slot level for LFSB.

> **Live data — pull at planning:** wx/METAR/TAF, NOTAM (runway/taxiway/navaid/lighting, especially near the crossing-runway junctions and Code F-restricted taxiways), CTOT/ATFM, de-icing status. Not stored in this durable file.

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim charts inform content but are not listed here.*

- **SIA France (Service de l'Information Aéronautique) eAIP — AD 2 LFSB**, eff. 14 MAY 2026, AIRAC cycle 09 JUL 2026 (retrieved 2026-07-26) — https://www.sia.aviation-civile.gouv.fr/ — declared distances/intersection departures, SID index, communications, Code F ground procedures, de-icing provisioning.

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-26 | Built from SIA France eAIP; K Global fields from live VAMSYS; 4-page pack. |
