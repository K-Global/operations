# LFMT — Montpellier-Méditerranée · Departure Page

**LFMT / MPL** · Montpellier (Mauguio), Hérault, Occitanie, France · Europe
**Version** v0.1 · **Updated** 2026-07-26 · **Status** Draft — SIA France eAIP-derived

> **Read-me:** Tactical departure aid for the sim, not a chart. Companion to the [LFMT Briefing](index.md), [Dispatch](dispatch.md) and [Arrival](arrival.md) pages. SIDs/procedures are listed **by name only** — fly the charted current-AIRAC version; verify every gradient, minima and routing on the current chart. Static data only; live wx/NOTAM/CTOT are pulled at planning. Open 🟧 items are in §Open items. Flag legend 🟥 restriction/hazard · 🟧 caution/unverified · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| Usual departure runway(s) | **12L** at night (2100–0700 local summer −1 hr, noise-preferred, until 5 kt tailwind/vis > 1,900 m); otherwise wind/config-driven between **12L and 30R** |
| Config logic | Noise-preferential at night (12L); wind/tailwind-component driven by day — RWY 30R is the sea-facing/precision end |
| Transition altitude | 5,000 ft (TMA Montpellier) |
| Take-off minima | Published per AIP — exact figures not confirmed this pass 🟧 |
| CTOT / flow regime | IATA Level 1 (facilitated) — no dedicated CTOT regime confirmed; standard EUROCONTROL flow measures may apply in congestion/weather 🟧 |
| De-icing on departure | Available — single mobile unit field-wide, by prior agreement, season 1 Dec–31 Mar |

---

## 2. Stand → runway taxi routing & hot spots

- **Typical routings by runway:** From the commercial apron (B/C/D series stands), Ground routes toward the assigned departure runway (12L or 30R) via the standard taxiway network; confirm the exact routing with Ground/Apron on the day.
- **Hot spots / tight taxiways:** 🟥 Several taxiways (J, M, T1–T6, V, W1, W2, Y) are restricted to aircraft with undercarriage width < 9 m — consistent with the field's own wingspan/gear-width ceiling, but a discipline point nonetheless. **TWY W1 carries a documented "no entry" sign with a known gap in "no-entry-bar" lighting equipment** — a specific night/low-vis taxi-discipline caution. Holding-point mandatory-instruction signs and WIG-WAG protection lights are sited at TWY J, T1, T6, V, W1 and Y — expect explicit hold-short/crossing instructions at these points.
- **Runway crossings / read-back-required points:** Expect explicit crossing instructions at the WIG-WAG-protected holding points above.
- **Low-vis taxi caveats:** 🟧 SMGCS/low-vis taxi routing applies consistent with the field's LVP authorisation on RWY 12L/30R; follow-me availability not confirmed.

---

## 3. Runway / SID selection logic

- **By wind / config:** RWY 30R is preferred for approaches (until an 8 kt tailwind component) and carries the field's only precision (ILS CAT I) infrastructure; RWY 12L is the noise-preferred night departure runway. Reduced runway separation is applied on this runway pair per national ATC regulation.
- **By departure direction:** RWY 12L departures track southeast (toward the coast/lagoon area before turning); RWY 30R departures track northwest. A specific **visual departure off the secondary runway pair (30L/12R)** may be authorised only in narrow contingency conditions (VOR FJR failure, visibility ≥ 5 km, ceiling > 2,000 ft, westbound turn) — not relevant to K Global's assigned runway (12L/30R).
- **Noise / preferential-runway program:** Night departures (2100–0700 local summer −1 hr) are preferred on **RWY 12L**, until a 5 kt tailwind component and visibility > 1,900 m; maritime/over-sea routing is preferred generally for environmental reasons. TMA speed is limited to **250 kt throughout** (a local rule, not just below FL100).
- **Interaction with arrivals:** RWY 30R carries the bulk of arrival traffic (noise-preferred, precision-equipped); a departure off 12L operates largely independently of the 30R arrival stream given the runway's one-strip, opposite-end relationship — confirm sequencing with Tower.

---

## 4. SID list (names only)

*Fly the charted current-AIRAC version. RNP/gradient notes are pointers only — verify on the chart.*

| SID (name) | Runway(s) | RNP / gradient note | Notes |
|---|---|---|---|
| RNAV departure (initial / "NORD" / "SUD" variants) | 12L | GNSS and/or DME/DME sensor required; DME/DME-only systems need inertial nav + pre-line-up position check (< 0.17 NM) 🟧 | RNAV departures preferred and ATC-declared in service |
| RNAV departure | 30R | Same RNAV equipage note as above 🟧 | |
| Conventional SID | 12L/30R | N/A | Assigned if crew announces "Non-RNAV" at start-up request |

---

## 5. Initial climb, speed & noise-abatement departure

- **Initial climb / speed:** Jets departing RWY 30R maintain take-off power to **1,500 ft AGL**, then climb thrust at **V2+10** to **3,000 ft** (published AIP noise-abatement procedure). TMA speed is limited to 250 kt overall.
- **Noise-abatement departure procedure (NADP):** Maritime/over-sea routing preferred generally; night departures specifically routed via RWY 12L (§3). No separate NADP1/NADP2 designation confirmed beyond the RWY 30R power-setting procedure above. 🟧
- **Early turn / altitude constraints:** Published per SID/local traffic pattern (e.g. the AIP-specified initial right turn at 1.4 NM FJR to join the downwind for circuit-flight cases; right-hand downwind for RWY 30R follows MAG 123°) — verify actual departure-track constraints on the current chart.

---

## 6. Engine-out / emergency-turn & obstacle considerations

- **Engine-out / emergency-turn procedure:** No published EO/emergency-turn specifics confirmed in reachable sources — apply the operator/type EOSID for the assigned runway. 🟧
- **Close-in / distant obstacles:** Flat Mediterranean coastal plain — no significant close-in terrain. The one notable environmental consideration is the **Étang de l'Or lagoon**, immediately adjacent to both runway ends — not an obstacle in the classic sense, but a documented consequence area for a runway-excursion/overrun scenario (Briefing §3.3).
- **Special DP / obstacle DP:** Not confirmed in reachable sources — verify on current chart. 🟧

---

## 7. Low-vis takeoff & de-icing on departure

- **LVTO minima / procedure:** RWY 12L/30R is authorised for LVP use; specific LVTO RVR minima not confirmed this pass. 🟧
- **De-icing:** Available by prior agreement with the field's contracted ground-handling agency; **only one mobile de-icing unit exists field-wide** — plan for potential queuing if another aircraft requires treatment first. Season: 1 December–31 March. See [`OM E — Adverse Weather and Windshear`](../../../../../flight-ops/adverse-weather-and-windshear.md).

---

## 8. Clearance / CTOT & departure frequency sequence

- **Clearance delivery:** Not separately published in the reachable AIP extract — appears combined with Ground/Tower positions; confirm locally. 🟧
- **Frequency sequence:** **Montpellier Ground 121.955 → Montpellier Tower 118.200/118.775 → Montpellier Approach (sector-specific: 120.375 auxiliary / 127.280 sector FB / 130.855 sector FA / 131.055 sector FE).** Take the assigned frequency and confirm current chart. (Frequencies from Briefing §8.)
- **CTOT / slot handling:** IATA Level 1 (facilitated) — no dedicated CTOT regime confirmed for this field; comply with any EUROCONTROL flow measure assigned during regional congestion or adverse weather. 🟧

---

## 9. Performance watch-items for our types

- **Field-length / weight:** RWY 12L/30R (2,600 m) is **non-limiting for any Code C K Global type**. The genuinely binding constraint is the **wingspan (>36 m)/gear-width (>9 m) restriction** on this same runway pair — confirm the assigned type's clearance before dispatch (not a length/weight performance issue).
- **Density altitude / temperature:** Non-issue at 17 ft AMSL — no hot-and-high penalty.
- **Contamination / wet-runway:** Convective-storm season (late summer/autumn) and the winter de-icing window (1 Dec–31 Mar, single-unit constraint) are the relevant seasonal considerations — no specific contamination/braking-action statistic confirmed this pass. 🟧
- **Link to OM B:** See [`OM B — Fleet Capability Matrix`](../../../../../fleet/capability-matrix.md) — confirm wingspan/gear-width clearance for the assigned type; no field-length or field-elevation performance penalty applies to any cleared Code C type at LFMT.

---

## 10. Gotchas

- **RWY 12L/30R is prohibited to aircraft with wingspan > 36 m or main-gear width > 9 m** — verify the assigned type before dispatch; this is a hard AIP restriction, not a soft preference.
- **RWY 12R/30L is banned outright to turbojets and aircraft > 5.7 t** — never assign or expect a K Global departure from this runway pair.
- **TWY W1 has a documented "no entry" sign with a known "no-entry-bar" lighting gap** — a specific taxi-discipline point at night/low-vis.
- **Only one mobile de-icing unit exists field-wide** — expect queuing risk in winter if another aircraft requires treatment first.
- **Night departures are noise-preferred on RWY 12L** (2100–0700 local summer −1 hr) — do not assume the daytime-preferred RWY 30R config carries over after dark.
- **The Étang de l'Or lagoon sits immediately off both runway ends** — a stabilised, disciplined take-off roll and rejected-takeoff decision-making are the relevant mitigations, particularly in gusty Tramontane or convective conditions.
- **TMA speed is limited to 250 kt throughout** — a local rule, not just the generic "below FL100" norm.

---

## Open items (🟧 — confirm against AIP / current AIRAC)

- Current-AIRAC SID names (beyond the RNAV/conventional category names extracted this pass) and exact RNP/gradient specifics per runway.
- Take-off minima exact figures.
- Clearance-delivery frequency/procedure detail (appears combined with Ground/Tower).
- NADP designation beyond the published RWY 30R power-setting procedure.
- LVTO RVR minima and follow-me/SMGCS specifics.
- EOSID/engine-out procedure detail per runway.

> **Live data — pull at planning:** wx/METAR/TAF, NOTAM (runway/taxiway/navaid/lighting, esp. TWY W1 status), CTOT/ATFM, de-icing unit availability/status. Not stored in this durable file.

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim charts inform content but are not listed here.*

- **SIA France eAIP, AD 2 LFMT** (AIRAC cycle 11 JUN 2026, amendment 05/26, eff. 2026-05-14) — SID/departure index, noise-abatement procedures, taxiway-lighting remarks, local traffic regulations — https://www.sia.aviation-civile.gouv.fr/media/dvd/eAIP_11_JUN_2026/FRANCE/AIRAC-2026-06-11/html/eAIP/FR-AD-2.LFMT-fr-FR.html (retrieved 2026-07-26).

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-26 | Built from SIA France eAIP; K Global fields from live VAMSYS; 4-page pack. |
