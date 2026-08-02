# EIDW — Dublin International · Departure Page

**EIDW / DUB** · Dublin, Ireland · Europe
**Version** v0.1 · **Updated** 2026-07-26 · **Status** Draft

> **Read-me:** Tactical departure aid for the sim, not a chart. Companion to the [EIDW Briefing](index.md), [Dispatch](dispatch.md) and [Arrival](arrival.md) pages. SIDs/procedures are listed **by name only or flagged not-yet-confirmed** — fly the charted current-AIRAC version; verify every gradient, minima and routing on the current chart. Static data only; live wx/NOTAM/CTOT are pulled at planning. Open 🟧 items are in §Open items. Flag legend 🟥 restriction/hazard · 🟧 caution/unverified · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| Usual departure runway(s) | **28R / 28L** in the prevailing south-westerly wind ("28-configuration"); **16/34** used mainly in the evening/other-configuration cases |
| Config logic | Atlantic-facing prevailing south-westerly wind favours the 28-direction; wind/flow-driven configuration changes are routine at this field |
| Transition altitude | Not published / verify 🟧 |
| Take-off minima | Published per AIP; not confirmed 🟧 |
| CTOT / flow regime | Referenced network-wide as Level 3 slot-coordinated; EUROCONTROL ATFM/CTOT plausible, not independently confirmed 🟧 |
| De-icing on departure | Available, season typ. Nov–Mar; exact provisioning not confirmed |

---

## 2. Stand → runway taxi routing & hot spots

- **Typical routings by runway:** Not confirmed in reachable sources — confirm the exact taxi with Ground/Apron on the day. 🟧
- **Hot spots / tight taxiways:** No named hot spots confirmed in reachable sources. 🟥 One structural point worth briefing regardless: **RWY 16/34 functions as a daytime taxiway** for traffic using 10R/28L — treat any routing across it with the same care as a runway-adjacent movement, and confirm with ATC whether it is active as a runway or in taxiway use at the time. 🟧
- **Runway crossings / read-back-required points:** Not confirmed — expect explicit crossing/hold-short instructions at any runway-adjacent taxi route, particularly around the 16/34 dual-use area.
- **Low-vis taxi caveats:** Not confirmed in reachable sources — SMGCS/low-vis taxi routing would plausibly apply during radiation-fog events (§14 of the Briefing). 🟧

---

## 3. Runway / SID selection logic

- **By wind / config:** Prevailing south-westerly Atlantic wind drives the **28-configuration** (28R/28L) as the more common orientation; the reciprocal 10-configuration is used when wind dictates, and 16/34 is brought into runway use mainly in the evening or other configuration cases.
- **By departure direction:** Not confirmed — no directional SID/departure-runway pairing found in reachable sources. 🟧
- **Noise / preferential-runway program:** Not confirmed in reachable sources. 🟧
- **Interaction with arrivals:** Departures off the active parallel interact with the arrival stream on the reciprocal/adjacent runway per standard mixed-mode operation; the daytime taxiway use of 16/34 adds a ground-routing interaction worth confirming locally.

---

## 4. SID list (names only)

*Fly the charted current-AIRAC version. RNP/gradient notes are pointers only — verify on the chart.*

| SID (name) | Runway(s) | RNP / gradient note | Notes |
|---|---|---|---|
| Not confirmed in reachable sources 🟧 | 28R / 28L / 10L / 10R / 16 / 34 | Confirm RNP/gradient requirement per SID on the current chart | Pull the live current-AIRAC SID list before use |

---

## 5. Initial climb, speed & noise-abatement departure

- **Initial climb / speed:** Per SID/ATC; 250 KIAS below FL100 (ICAO/EU norm) — confirm current chart.
- **Noise-abatement departure procedure (NADP):** Not confirmed in reachable sources. 🟧
- **Early turn / altitude constraints:** Published per SID — not confirmed; verify on the current chart. 🟧

---

## 6. Engine-out / emergency-turn & obstacle considerations

- **Engine-out / emergency-turn procedure:** Not confirmed in reachable sources — apply the operator/type EOSID for the assigned runway. 🟧
- **Close-in / distant obstacles:** Flat coastal plain, no significant close-in terrain (see [Briefing §3.1](index.md)); no specific man-made obstacle noted in reachable sources. 🟧
- **Special DP / obstacle DP:** Not confirmed in reachable sources — verify on current chart. 🟧

---

## 7. Low-vis takeoff & de-icing on departure

- **LVTO minima / procedure:** Not confirmed; occasional radiation fog is the plausible low-vis trigger context (Briefing §14). 🟧
- **De-icing:** Available in the Irish winter season (typ. Nov–Mar); exact pad/gate location, fluid type and holdover provisioning **not confirmed in reachable sources**. See [OM E — Cold Weather Operations](../../../../../flight-ops/cold-weather-operations.md).

---

## 8. Clearance / CTOT & departure frequency sequence

- **Clearance delivery:** Dublin Delivery — 🟧 frequency not reconciled between sources (121.875 vs 122.98; see [Briefing §8](index.md)); confirm on current chart.
- **Frequency sequence:** **Delivery → Ground (121.80) → Tower (118.60) → Approach (121.10, sector-specific).** Take the assigned frequency and confirm current chart. (Frequencies from Briefing §8.)
- **CTOT / slot handling:** Referenced network-wide as **IATA Level 3** slot-coordinated; comply with any assigned CTOT/EDCT-equivalent. 🟧

---

## 9. Performance watch-items for our types

- **Field-length / weight:** Both the North Runway (3,110 m, 28R/10L) and the original main runway (2,637 m, 28L/10R) are non-limiting for any K Global type; the 2,072 m cross runway (16/34) is likewise ample for its secondary role.
- **Density altitude / temperature:** Non-issue at 242 ft, temperate maritime climate — no hot-and-high penalty.
- **Contamination / wet-runway:** Routine rain/wet-runway braking-action consideration is the standing seasonal factor here, more than snow/ice. 🟧
- **Wind / crosswind:** The dominant performance watch-item at this field — **Atlantic-facing wind exposure** means gust-factor and crosswind-limit checks are a routine part of every departure, not an exceptional case; check the assigned type's demonstrated crosswind limit against current wind, especially if assigned the 16/34 cross runway.
- **Link to OM B:** See [OM B — Fleet Capability Matrix](../../../../../fleet/capability-matrix.md) — no field-length or field-elevation performance penalty for any K Global type at EIDW.

---

## 10. Gotchas

- **Wind is the standing departure consideration** — Atlantic exposure gives frequent gusty/crosswind conditions; do not treat a strong-wind brief as exceptional at this field.
- **RWY 16/34 doubles as a daytime taxiway** for 10R/28L traffic — confirm its active status (runway vs taxiway) with ATC before assuming a crossing is routine.
- **The North Runway (10L/28R) carries a night-time operating restriction** tied to its planning conditions — do not plan a late-night departure dependent on it without confirming current status; the older runway (10R/28L) is not subject to the same restriction.
- **Clearance-delivery frequency is unreconciled between two tier-4 sources** — confirm the correct frequency on the current chart rather than relying on either cited value.
- **Ireland is outside the Schengen Area** — no operational effect on the departure itself, but relevant if briefing pax-facing connection expectations.

---

## Open items (🟧 — confirm against AIP / current AIRAC)

- Current-AIRAC SID names and RNP/gradient specifics per runway.
- Take-off minima / DVA exact figures.
- Start-up/push-back procedure detail.
- Noise-abatement departure procedure (NADP) preference, if any.
- LVTO RVR minima and low-vis taxi/SMGCS specifics.
- EOSID/engine-out procedure detail per runway.
- Named taxiway hot spots (none confirmed — likely a research gap rather than a "none exist" finding).
- Clearance-delivery frequency reconciliation.

> **Live data — pull at planning:** wx/METAR/TAF, NOTAM (runway/taxiway/navaid/lighting, esp. North Runway night-restriction and 16/34 taxiway-use status), CTOT/ATFM, de-icing status. Not stored in this durable file.

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim charts inform content but are not listed here.*

- OurAirports — https://ourairports.com/airports/EIDW/ , /runways.html , /frequencies.html (retrieved 2026-07-26).
- SkyVector — https://skyvector.com/airport/EIDW/Dublin-Airport (retrieved 2026-07-26).
- Wikipedia — "Dublin Airport" — https://en.wikipedia.org/wiki/Dublin_Airport (retrieved 2026-07-26). *Runway 16/34 daytime-taxiway use, prevailing configuration context.*

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-26 | Built from national AIP; K Global fields from live VAMSYS; 4-page pack. |
