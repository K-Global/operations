# ENGM — Oslo Gardermoen · Departure Page

**ENGM / OSL** · Ullensaker, Akershus/Viken, Norway · Europe
**Version** v0.1 · **Updated** 2026-07-26 · **Status** Draft — public-data build

> **Read-me:** Tactical departure aid for the sim, not a chart. Companion to the [ENGM Briefing](index.md), [Dispatch](dispatch.md) and [Arrival](arrival.md) pages. SIDs/procedures are listed **by name only or flagged not-yet-confirmed** — fly the charted current-AIRAC version; verify every gradient, minima and routing on the current chart. Static data only; live wx/NOTAM/CTOT are pulled at planning. Open 🟧 items are in §Open items. Flag legend 🟥 restriction/hazard · 🟧 caution/unverified · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| Usual departure runway(s) | Wind/traffic dependent within the independent-parallel-runway concept — exact segregated-mode assignment not AIP-confirmed 🟧 |
| Config logic | Independent parallel-runway operation; ~80 movements/hour design capacity |
| Transition altitude | Not published / verify 🟧 |
| Take-off minima | Not published / verify 🟧 |
| CTOT / flow regime | Not confirmed — general Northern-Europe ATFM practice may apply 🟧 |
| De-icing on departure | Available — three platforms reported; fluid use restricted (aquifer) |

---

## 2. Stand → runway taxi routing & hot spots

- **Typical routings by runway:** Confirm the exact taxi with Ground/Apron on the day; two runway-end ground radars are reported for surface-movement monitoring.
- **Hot spots / tight taxiways:** Not confirmed in reachable public sources — verify AIP aerodrome chart before flight. 🟧
- **Runway crossings / read-back-required points:** Not confirmed this pass. 🟧
- **Low-vis taxi caveats:** SMGCS/low-vis taxi routing plausible given the field's winter fog exposure and reported CAT III infrastructure; not independently confirmed. 🟧

---

## 3. Runway / SID selection logic

- **By wind / config:** Runway selection is wind/traffic dependent within the field's independent-parallel-runway design; exact assignment logic (which runway favours departures vs arrivals under which wind state) is not AIP-confirmed this pass. 🟧
- **By departure direction:** Not confirmed. 🟧
- **Noise / preferential-runway program:** Not confirmed — no named NADP found in reachable sources. 🟧
- **Interaction with arrivals:** Independent-parallel-runway design is intended to minimise dependency between the two runways; confirm current mixed-mode practice with ATC/current AIRAC.

---

## 4. SID list (names only)

*Fly the charted current-AIRAC version. RNP/gradient notes are pointers only — verify on the chart.*

| SID (name) | Runway(s) | RNP / gradient note | Notes |
|---|---|---|---|
| Not confirmed in reachable public sources 🟧 | 01L / 19R / 01R / 19L | Not confirmed 🟧 | Pull the live current-AIRAC SID list before use |

---

## 5. Initial climb, speed & noise-abatement departure

- **Initial climb / speed:** Per SID/ATC; 250 KIAS below FL100 (EU/ICAO norm) — confirm current chart.
- **Noise-abatement departure procedure (NADP):** Not confirmed in reachable sources. 🟧
- **Early turn / altitude constraints:** Published per SID — verify constraints on the current chart.

---

## 6. Engine-out / emergency-turn & obstacle considerations

- **Engine-out / emergency-turn procedure:** Not confirmed in reachable sources — apply the operator/type EOSID for the assigned runway. 🟧
- **Close-in / distant obstacles:** Flat Trandum Delta plain — no significant close-in terrain identified in reachable sources.
- **Special DP / obstacle DP:** Not confirmed — verify on current chart. 🟧

---

## 7. Low-vis takeoff & de-icing on departure

- **LVTO minima / procedure:** LVP plausible given the field's winter freezing-fog exposure and reported CAT III infrastructure; specific LVTO RVR minima not confirmed this pass. 🟧
- **De-icing:** **Three platforms reported** (secondary-sourced from an AIP extract, not independently re-confirmed); fluid use is **restricted** owing to the field's position over the Trandum Delta aquifer — confirm current-season provisioning locally. See [`OM E — Cold Weather Operations`](../../../../../flight-ops/cold-weather-operations.md).

---

## 8. Clearance / CTOT & departure frequency sequence

- **Clearance delivery:** Gardermoen Delivery, reported 121.68/121.93 — confirm current chart (Briefing §8). 🟧
- **Frequency sequence:** **Delivery → Ground → Tower → Approach/Departure** — see [Briefing §8](index.md) for the reported frequency set; confirm current chart before use.
- **CTOT / slot handling:** Slot-coordination level and CTOT/ATFM applicability not independently confirmed — comply with any assigned CTOT/EDCT-equivalent. 🟧

---

## 9. Performance watch-items for our types

- **Field-length / weight:** 3,600 m (01L/19R) and 2,950 m (01R/19L) are non-limiting for any K Global type at typical weights; exact declared distances not confirmed — see Briefing §7.
- **Density altitude / temperature:** Non-issue at 681 ft, temperate/continental climate — no hot-and-high penalty.
- **Contamination / wet-runway:** Winter snow/ice contamination is the principal seasonal consideration here — no specific braking-action statistic confirmed this pass. 🟧
- **Link to OM B:** See [`OM B — Fleet Capability Matrix`](../../../../../fleet/capability-matrix.md) — no field-length or field-elevation performance penalty identified for any K Global type at ENGM.

---

## 10. Gotchas

- **Two independent parallel runways** — positively confirm the assigned runway before departure; SKYbrary flags runway misidentification as a named risk at this field.
- **De-icing fluid provisioning is constrained** by the underlying Trandum Delta aquifer — do not assume unlimited fluid availability in a heavy winter-weather push.
- **Reported night restriction 23:00–06:00** (north-side exception) — sourced to an older reference; build buffer into late-day departures pending a live-regime check.
- **Winter freezing fog/freezing rain can develop with limited warning** (Dec 1998 precedent) — brief the CAT III/de-icing contingency plan.

---

## Open items (🟧 — confirm against AIP / current AIRAC)

- Current-AIRAC SID names and RNP/gradient specifics per runway.
- Take-off minima / DVA exact figures.
- Transition altitude/level.
- Independent-parallel-runway segregated-mode assignment logic.
- Start-up/push-back procedure detail.
- LVTO RVR minima.
- EOSID/engine-out procedure detail per runway.
- Taxiway hot spots.

> **Live data — pull at planning:** wx/METAR/TAF, NOTAM (runway/taxiway/navaid/lighting), CTOT/ATFM, de-icing status/pad assignment. Not stored in this durable file.

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim charts inform content but are not listed here.*

- OurAirports — https://ourairports.com/airports/ENGM/ , /frequencies.html (retrieved 2026-07-26).
- SkyVector — https://skyvector.com/airport/ENGM/Oslo-Gardermoen-Airport (retrieved 2026-07-26).
- Wikipedia — "Oslo Airport, Gardermoen" — https://en.wikipedia.org/wiki/Oslo_Airport,_Gardermoen (retrieved 2026-07-26). *De-icing/aquifer constraint, 1998 icing event.*

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-26 | Built from public AIP-adjacent data; K Global fields from live VAMSYS; 4-page pack. |
