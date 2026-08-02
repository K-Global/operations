# LFOB — Beauvais-Tillé · Departure Page

**LFOB / BVA** · Beauvais, Hauts-de-France, France · Europe
**Version** v0.1 · **Updated** 2026-07-26 · **Status** Draft

> **Read-me:** Tactical departure aid for the sim, not a chart. Companion to the [LFOB Briefing](index.md), [Dispatch](dispatch.md) and [Arrival](arrival.md) pages. SIDs/procedures are listed **by name only** — fly the charted current-AIRAC version; verify every gradient, minima and routing on the current chart. Static data only; live wx/NOTAM/CTOT are pulled at planning. Open 🟧 items are in §Open items. Flag legend 🟥 restriction/hazard · 🟧 caution/unverified · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| Usual departure runway(s) | **12 or 30** — whichever the wind favours; single runway, no config choice |
| Config logic | Wind-driven only — no parallel-runway or noise-preference alternative to weigh |
| Transition altitude | 5,000 ft AMSL — verify no local override on current chart 🟧 |
| Take-off minima | Published per AIP; exact figures not confirmed this pass 🟧 |
| CTOT / flow regime | None confirmed; standard EUROCONTROL ATFM may apply in network disruption 🟧 |
| De-icing on departure | Available on request, typ. Oct–May; no dedicated pads |

---

## 2. Stand → runway taxi routing & hot spots

- **Typical routings by runway:** From the single terminal apron, Ground routes toward whichever end of RWY 12/30 is active via taxiways N/W/R/T (or A/P for light traffic only); confirm the exact taxi with Tower/Ground on the day.
- **Hot spots / tight taxiways:** 🟩 None specifically AIP-flagged as complex/caution junctions — a materially simpler single-runway ground environment than a multi-runway hub. TWY A/P (7.5 m) and TWY H (grass, day-only, wingspan <15 m) are light-aircraft-only and not relevant to K Global equipment.
- **Runway crossings / read-back-required points:** Not applicable — single runway, no crossing-runway geometry.
- **Low-vis taxi caveats:** Not independently confirmed in reachable sources; standard low-vis taxi discipline applies given the field's winter fog risk. 🟧

---

## 3. Runway / SID selection logic

- **By wind / config:** The active runway (12 or 30) is determined entirely by wind — there is no parallel or alternate runway to select for a better crosswind angle. Accept the published crosswind component as briefed.
- **By departure direction:** RWY 12 departs to the southeast; RWY 30 departs to the northwest — selection follows wind, not route direction.
- **Noise / preferential-runway program:** No specific noise-preferential-runway program identified beyond the general circling guidance to avoid overflying the village of Tillé (relevant primarily to arrivals/circling, not departure routing). 🟧
- **Interaction with arrivals:** Single-runway field — departures and arrivals share the same runway sequentially; no simultaneous-parallel interaction to manage.

---

## 4. SID list (names only)

*Fly the charted current-AIRAC version. RNP/gradient notes are pointers only — verify on the chart.*

| SID (name) | Runway(s) | RNP / gradient note | Notes |
|---|---|---|---|
| SID CONV RWY 12 | 12 | Conventional departure — verify routing on current chart | |
| SID RNAV RWY 12 | 12 | RNAV — verify RNP level/gradient on current chart 🟧 | |
| SID CONV RWY 30 | 30 | Conventional departure — verify routing on current chart | |
| SID RNAV RWY 30 | 30 | RNAV — verify RNP level/gradient on current chart 🟧 | |

---

## 5. Initial climb, speed & noise-abatement departure

- **Initial climb / speed:** Per SID/ATC; 250 KIAS below FL100 (EU/ICAO norm) — confirm current chart.
- **Noise-abatement departure procedure (NADP):** No specific NADP1/2 mandate identified in reachable sources. 🟧
- **Early turn / altitude constraints:** Published per SID — verify on the current chart.

---

## 6. Engine-out / emergency-turn & obstacle considerations

- **Engine-out / emergency-turn procedure:** No published EO/emergency-turn specifics confirmed in reachable sources — apply the operator/type EOSID for the assigned runway. 🟧
- **Close-in / distant obstacles:** No significant close-in obstacle noted for the departure paths in reachable sources; the field's one documented terrain/altimetry item (the irregular terrain step-profile under the RWY 12 radio-altimeter coverage area) is an **arrival**-side consideration — see [Briefing §3.1](index.md).
- **Special DP / obstacle DP:** Not confirmed in reachable sources — verify on current chart. 🟧

---

## 7. Low-vis takeoff & de-icing on departure

- **LVTO minima / procedure:** Not confirmed in reachable sources this pass — verify current chart, particularly relevant given the field's winter fog risk. 🟧
- **De-icing:** Available **on request**, typically October–May; two Vestergaard Elephant MY de-icing units, ABAX Ecowing AD2 Type 2 fluid. Not a dedicated remote-pad operation — throughput may be more limited than at a pad-based field in a busy de-icing period. See [`OM E — Cold Weather Operations`](../../../../../flight-ops/cold-weather-operations.md).

---

## 8. Clearance / CTOT & departure frequency sequence

- **Clearance delivery:** No dedicated Delivery frequency identified — clearance is obtained via **Beauvais Tower 121.400/123.985** or **Beauvais Approach 121.400/123.985** per current local procedure (cross-ref [Briefing §8](index.md)). 🟧
- **Frequency sequence:** **Ops coordination 131.540 (ground handling) → Tower 121.400/123.985 → Beauvais Approach 121.400 (aux)/123.985 (8.33, sector WEST/EAST) → Paris FIR (LFFF) en route.** Take the assigned frequency and confirm current chart.
- **CTOT / slot handling:** No CTOT/slot regime confirmed for LFOB; standard EUROCONTROL ATFM regulation may apply in network-wide disruption. 🟧

---

## 9. Performance watch-items for our types

- **Field-length / weight:** RWY 30 full-length (2,429 m) is generally workable for narrowbody LCC-class types; **RWY 12's displaced threshold reduces usable LDA to 2,385 m** (a landing, not take-off, consideration — TORA/TODA/ASDA on RWY 12 remain 2,429 m for departure planning). Confirm weight-limited performance for the specific type/conditions on the day.
- **Density altitude / temperature:** Non-issue at 359 ft, temperate climate — no hot-and-high penalty.
- **Contamination / wet-runway:** Winter (Oct–May) de-icing season is the relevant seasonal consideration; no dedicated contamination/braking-action statistic confirmed this pass. 🟧
- **Link to OM B:** See [`OM B — Fleet Capability Matrix`](../../../../../fleet/capability-matrix.md) and [`OM E — Short and Limited Runway Operations`](../../../../../flight-ops/short-and-limited-runway-operations.md) — this is a genuine single-runway, no-alternative-length field for narrowbody performance planning.

---

## 10. Gotchas

- **No runway choice** — whichever direction the wind favours (12 or 30) is the only option; there is no parallel or crosswind-favoured alternative.
- **RWY 04/22 (708 × 18 m, unlit, day-only GA strip)** is never a commercial-jet departure option.
- **Four-engine aircraft with wingspan ≥36 m or main-gear width ≥9 m are not accommodated** on RWY 12/30 shoulders — non-issue for narrowbody LCC-class equipment.
- **Field is not H24** — ATS 0615–2200 (extendable for scheduled flights) and a hard curfew 0000–0500 — do not plan a departure that risks slipping into the restricted window.
- **De-icing is on-request, not pad-based** — build extra buffer in the Oct–May season versus a dedicated multi-pad field.
- **No Delivery frequency identified separately from Tower/Approach** — confirm the current local clearance procedure before departure.

---

## Open items (🟧 — confirm against AIP / current AIRAC)

- Current-AIRAC SID routing/RNP details per runway.
- Take-off minima / LVTO exact figures.
- NADP preference (none confirmed).
- EOSID/engine-out procedure detail per runway.
- Clearance-delivery procedure/frequency confirmation.
- CTOT/ATFM applicability specific to LFOB.

> **Live data — pull at planning:** wx/METAR/TAF, NOTAM (runway/taxiway/navaid/lighting), CTOT/ATFM, de-icing status. Not stored in this durable file.

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim charts inform content but are not listed here.*

- **AIP France, AD 2 LFOB** (AIRAC AMDT 02/25, eff. 20 Feb 2025) — SID index, runway/declared-distance data, communications — compiled/mirrored via DIRCAM MIAC1, https://www.dircam.dsae.defense.gouv.fr/images/Stories/Doc/MIAC1/miac1_beauvais_lfob.pdf (retrieved 2026-07-26).
- OurAirports — https://ourairports.com/airports/LFOB/runways.html (retrieved 2026-07-26). *Runway cross-check.*

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-26 | Built from SIA France eAIP; K Global fields from live VAMSYS; 4-page pack. |
