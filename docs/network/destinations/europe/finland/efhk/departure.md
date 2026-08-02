# EFHK — Helsinki-Vantaa · Departure Page

**EFHK / HEL** · Vantaa, Uusimaa, Finland · Europe
**Version** v0.1 · **Updated** 2026-07-26 · **Status** Draft — Fintraffic ANS AIP-derived, K Global build

> **Read-me:** Tactical departure aid for the sim, not a chart. Companion to the [EFHK Briefing](index.md), [Dispatch](dispatch.md) and [Arrival](arrival.md) pages. SIDs/procedures are listed **by name only or flagged not-yet-confirmed** — fly the charted current-AIRAC version; verify every gradient, minima and routing on the current chart. Static data only; live wx/NOTAM/CTOT are pulled at planning. Open 🟧 items are in §Open items. Flag legend 🟥 restriction/hazard · 🟧 caution/unverified · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| Usual departure runway(s) | **RWY 22R** primary (toward SW); shifts to **RWY 04R** with northerly/easterly wind |
| Config logic | Independent parallel operations on 04L/22R and 04R/22L (since Nov 2007); 15/33 as a third differently-oriented strip; ~20 runway combinations possible |
| Transition altitude | 5,000 ft AMSL (EFHK CTR North/South) |
| Take-off minima | Published per AIP; exact figures not confirmed this pass 🟧 |
| CTOT / flow regime | Fully slot-coordinated; PPR for non-based aircraft 🟧 |
| De-icing on departure | Available — two-tier system (gate-position + remote Apron 6/8) |

---

## 2. Stand → runway taxi routing & hot spots

- **Typical routings by runway:** From the assigned terminal section (Schengen 5–36 or non-Schengen 37–55), Ground routes toward the assigned departure runway; confirm the exact taxi with Ground/Apron on the day.
- **Hot spots / tight taxiways:** 🟧 Formally charted hot spots are on the graphical Aerodrome Chart, not captured in the text AIP extract used to build this page. Procedural note: aircraft landing RWY 22L must not vacate via taxiway ZG unless specifically instructed by ATC (an arrival-side constraint relevant to ground flow generally).
- **Runway crossings / read-back-required points:** Not confirmed this pass. 🟧
- **Low-vis taxi caveats:** Stop bars are positioned on every taxiway leading to a runway; where separate CAT II/III holding points exist, an additional closer stop bar sits on TWY ZD, ZG and Y. 🟧

---

## 3. Runway / SID selection logic

- **By wind / config:** Primary takeoff runway is **RWY 22R** (toward the SW); the configuration shifts to **RWY 04R** (toward the NE) with northerly/easterly wind. Independent parallel operations on 04L/22R and 04R/22L have been possible since November 2007.
- **By departure direction:** Southbound/SW departures typically use RWY 22R; northbound/NE departures use RWY 04R when wind dictates.
- **Noise / preferential-runway program:** **Jet takeoffs on RWY 15 (toward the SE) are avoided at night** due to population density beneath that flight path; **propeller takeoffs to the SE are prohibited at night outright** unless safety dictates otherwise. Low-noise aircraft may use RWY 22L southbound concurrently with RWY 22R departures during the day.
- **Interaction with arrivals:** A dependent-parallel-approach mode exists (ATIS then reports RWY 15 touchdown-zone wind instead of runway-specific wind) — confirm the active mode, as it affects the arrival/departure interaction on the parallel set.

---

## 4. SID list (names only)

*Fly the charted current-AIRAC version. RNP/gradient notes are pointers only — verify on the chart.*

| SID (name) | Runway(s) | RNP / gradient note | Notes |
|---|---|---|---|
| Not confirmed in reachable public sources 🟧 | 04L / 22R / 04R / 22L / 15 / 33 | Not confirmed 🟧 | SID/STAR charts are graphical (AD 2.24), not captured in the text AIP extract used — pull the live current-AIRAC SID list before use |

---

## 5. Initial climb, speed & noise-abatement departure

- **Initial climb / speed:** Per SID/ATC; 250 KIAS below FL100 (EU/ICAO norm) — confirm current chart.
- **Noise-abatement departure procedure (NADP):** Not confirmed by name in reachable sources; the field's dominant noise mechanism is **runway-preference logic** (avoid RWY 15 SE departures for jets at night; prohibit propeller SE departures at night) rather than a stated NADP variant. 🟧
- **Early turn / altitude constraints:** Published per SID — verify constraints on the current chart.

---

## 6. Engine-out / emergency-turn & obstacle considerations

- **Engine-out / emergency-turn procedure:** Not confirmed in reachable sources — apply the operator/type EOSID for the assigned runway. 🟧
- **Close-in / distant obstacles:** Flat, low-lying, forested/lake terrain in Uusimaa — no significant close-in high terrain identified in reachable sources.
- **Special DP / obstacle DP:** Not confirmed — verify on current chart. 🟧

---

## 7. Low-vis takeoff & de-icing on departure

- **LVTO minima / procedure:** LVP applies consistent with the field's CAT III infrastructure on 04L/22R and CAT II on 22L; specific LVTO RVR minima not confirmed this pass. 🟧
- **De-icing:** **Two-tier system** — main **gate-position de-icing** via "Helsinki De-icing Supervisor" (127.025, HO), or the **Remote De-icing Apron (Aprons 6/8)** via "Remote De-icing Supervisor" (133.850, HO), outside the normal ATC manoeuvring area. Request window 0330–2330 UTC, 20 min prior to TOBT; integrated into Airport CDM (a de-icing order recalculates TSAT). See [`OM E — Cold Weather Operations`](../../../../../flight-ops/cold-weather-operations.md).

---

## 8. Clearance / CTOT & departure frequency sequence

- **Clearance delivery:** Not separately itemised in the AIP extract retrieved — coordinate via Ground/Tower per current chart. 🟧
- **Frequency sequence:** **Ground 121.800/118.125 → Tower 118.600/118.850 → Helsinki Radar 119.100/129.850 → Helsinki Arrival 119.900/124.325 (departure handoff as applicable).** Take the assigned frequency and confirm current chart. (Frequencies from Briefing §8.)
- **CTOT / slot handling:** Fully slot-coordinated regime; PPR for non-based aircraft; comply with any assigned CTOT/EDCT-equivalent. 🟧

---

## 9. Performance watch-items for our types

- **Field-length / weight:** RWY 04R (3,500 m) and 04L/22R (3,060 m) are non-limiting for any K Global type; RWY 15/33 (2,901 m) is likewise ample for typical operations. Remember the **displaced thresholds on 22R (LDA 3,000 m) and 04R (LDA 3,200 m)** don't affect a takeoff (TORA is full length) but matter for a subsequent arrival.
- **Density altitude / temperature:** Non-issue at 180 ft, temperate-to-severe-winter climate — no hot-and-high penalty.
- **Contamination / wet-runway:** Winter snow/ice contamination is the **most significant seasonal consideration of the three fields in this pack** — a documented fatal precedent exists (2005 Cessna 208B wing-ice/snow stall crash shortly after takeoff). Brief pre-departure wing inspection and de-icing holdover discipline seriously.
- **Link to OM B:** See [`OM B — Fleet Capability Matrix`](../../../../../fleet/capability-matrix.md) — no field-length or field-elevation performance penalty for any K Global type at EFHK.

---

## 10. Gotchas

- **CAT III is not available on every runway** — only 04L/22R carry CAT III; 22L is CAT II; 04R/15 are CAT I; **RWY 33 has no ILS at all**.
- **De-icing routing depends on the tier assigned** — gate-position vs remote Apron 6/8; confirm which applies and build the CDM TOBT/TSAT recalculation into the turn plan.
- **Winter icing is a real, documented hazard here** — the 2005 Cessna 208B fatal stall-crash shortly after takeoff underscores the seriousness of wing-ice/snow-contamination discipline at this field, the harshest-winter field of the three in this pack.
- **Night noise-routing restrictions** — jet takeoffs on RWY 15 (SE) are avoided at night; propeller SE departures are banned outright at night.
- **PPR required for non-based aircraft** and a fully slot-coordinated regime — confirm slot/PPR status well ahead of a schedule change.
- **Follow-me car is mandatory for all A380 movements** — relevant if operating near such traffic on shared taxiways.

---

## Open items (🟧 — confirm against AIP / current AIRAC)

- Current-AIRAC SID names and RNP/gradient specifics per runway.
- Take-off minima / DVA exact figures.
- Clearance delivery frequency (not itemised in the text extract retrieved).
- EOSID/engine-out procedure detail per runway.
- Taxiway hot spots by ID (graphical chart, not captured in text extract).
- NADP preference/name.

> **Live data — pull at planning:** wx/METAR/TAF, NOTAM (runway/taxiway/navaid/lighting), CTOT/ATFM, de-icing status/tier assignment. Not stored in this durable file.

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim charts inform content but are not listed here.*

- **Fintraffic ANS — AIP Finland, AD 2 EFHK**, AIRAC cycle 003-2023 (eff. 2023-06-15) — communications/de-icing/ground-ops remarks — https://www.ais.fi/eaip/003-2023_2023_06_15/eAIP/EF-AD%202%20EFHK%20-%20HELSINKI-VANTAA%201-en-GB.html (retrieved 2026-07-26).
- Wikipedia — "Helsinki Airport" — https://en.wikipedia.org/wiki/Helsinki_Airport (retrieved 2026-07-26). *Runway configuration/noise-routing logic, 2005 icing accident, independent-parallel-ops date.*

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-26 | Built from Fintraffic ANS AIP Finland; K Global fields from live VAMSYS; 4-page pack. |
