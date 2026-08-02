# SKBO — El Dorado Intl · Departure Page

**SKBO / BOG** · Bogotá, Colombia · South America
**Version** v0.1 · **Updated** 2026-07-26 · **Status** Draft — Aerocivil Colombia AIP not reachable this pass; built from tier-4 public sources

> **Read-me:** Tactical departure aid for the sim, not a chart. Companion to the [SKBO Briefing](index.md), [Dispatch](dispatch.md) and [Arrival](arrival.md) pages. SIDs/procedures are listed **by name only** — fly the charted current-AIRAC version; verify every gradient, minima and routing on the current chart. Static data only; live wx/NOTAM/CTOT are pulled at planning. Open 🟧 items are in §Open items. Flag legend 🟥 restriction/hazard · 🟧 caution/unverified · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| Usual departure runway(s) | Not published / verify — expect selection between **14L/32R** and **14R/32L** (current designation; see [Briefing §7](index.md) for the legacy 13/31 discrepancy) 🟧 |
| Config logic | Not published / verify — wind/flow-driven expected between the two parallels 🟧 |
| Transition altitude | Not published / verify 🟧 |
| Take-off minima | Published — verify current chart 🟧 |
| CTOT / flow regime | Not confirmed — no ATFM/EDCT programme identified this pass 🟧 |
| De-icing on departure | Not typically expected (equatorial-latitude field); not confirmed as never-required 🟧 |

---

## 2. Stand → runway taxi routing & hot spots

- **Typical routings by runway:** Not confirmed in reachable sources this pass — confirm with Ground/Apron on the day. 🟧
- **Hot spots / tight taxiways:** Not confirmed in reachable sources this pass. 🟧
- **Runway crossings / read-back-required points:** Not confirmed in reachable sources. 🟧
- **Low-vis taxi caveats:** SKBO's early-morning fog exposure (see [Briefing §3.4/§14](index.md)) makes SMGCS-style low-visibility taxi guidance and follow-me availability a real planning question — availability/procedure not confirmed in reachable sources. 🟧

---

## 3. Runway / SID selection logic

- **By wind / config:** Not published / verify — expect wind-driven selection between the two parallel runways; no published preferential-runway rule found. 🟧
- **By departure direction:** Not confirmed in reachable sources. 🟧
- **Noise / preferential-runway program:** Not confirmed in reachable sources. 🟧
- **Interaction with arrivals:** Both parallels are full-length; independent vs dependent parallel operations not confirmed in reachable sources. 🟧

---

## 4. SID list (names only)

*Fly the charted current-AIRAC version. Climb-gradient / RNP notes are pointers only — verify on the chart.*

| SID (name) | Runway(s) | RNP / gradient note | Notes |
|---|---|---|---|
| Not confirmed in reachable research pass | 14L/32R, 14R/32L | Terrain-constrained Andean departures typically carry RNP/RNAV design and an elevated minimum-climb-gradient table 🟧 | Pull the current-AIRAC SID list at planning — see [`OM E — PBN and RNP Operations`](../../../../../flight-ops/pbn-and-rnp-operations.md) |

---

## 5. Initial climb, speed & noise-abatement departure

- **Initial climb / speed:** Standard 250 KIAS below FL100 (ICAO norm) expected — confirm no local override on current chart. 🟧
- **Noise-abatement departure procedure (NADP):** Not confirmed in reachable sources — verify locally. 🟧
- **Early turn / altitude constraints:** Not confirmed in reachable sources — published constraints, if any, must be verified on the current chart, particularly given the close-in Cerros Orientales terrain (see [Briefing §3.1](index.md)). 🟧

---

## 6. Engine-out / emergency-turn & obstacle considerations

- **Engine-out / emergency-turn procedure:** Not confirmed in reachable sources this pass — given the close-in high terrain to the east of the field (Cerros Orientales), a **specific engine-out obstacle-clearance/escape procedure is plausible and should be assumed to exist** pending confirmation; do not assume the standard SID protects an engine-out case. 🟥
- **Close-in / distant obstacles:** The **Cerros Orientales** ridge, part of the Eastern Andes, rises to terrain in excess of 10,000 ft within a few nautical miles east of the field — see [Briefing §3.1](index.md). This is the dominant obstacle consideration for any departure with an eastward component.
- **Special DP / obstacle DP:** Not confirmed in reachable sources — verify on the current chart whether a named obstacle departure procedure exists for either runway. 🟧

---

## 7. Low-vis takeoff & de-icing on departure

- **LVTO minima / procedure:** Not published / verify — early-morning fog is a recurring hazard at SKBO (see [Briefing §3.4](index.md)); confirm current LVTO minima and RVR requirements on the current chart before a fog-season early departure. 🟧
- **De-icing:** Not typically expected given the equatorial latitude despite the 8,361 ft elevation; not confirmed as never-required on cold mornings — verify locally. 🟧

---

## 8. Clearance / CTOT & departure frequency sequence

- **Clearance delivery:** Not confirmed in reachable sources — cross-ref [Briefing §8](index.md) (Delivery frequency not published).
- **Frequency sequence:** Delivery → Ground → Tower → Departure — the reachable tier-4 source provides only **Bogotá Departure 119.5** (shared with Approach) and **Bogotá FIS 126.9**; Delivery/Ground/Tower frequencies are **not published** in reachable sources — see [Briefing §8](index.md) for the full caveat on this table's likely incompleteness. 🟧
- **CTOT / slot handling:** Not confirmed — no ATFM/EDCT programme identified for SKBO this pass. 🟧

---

## 9. Performance watch-items for our types

- **Field-length / weight:** **Non-limiting** — both parallels are a generous 3,800 m (12,467 ft); field length is not expected to be the binding constraint. 🟥 *(flagged red as a caution against the common trap of assuming length removes the performance limit — see below.)*
- **Density altitude / temperature:** **Hot-and-high — the binding constraint.** At 8,361 ft, SKBO's takeoff performance is frequently **thrust/climb-gradient-limited rather than field-length-limited**; compute RTOW, V-speeds and net take-off flight path for the day's temperature and weight — do not assume the long runway removes the constraint. See [`OM E — High-Elevation Aerodrome Operations`](../../../../../flight-ops/high-elevation-aerodrome-operations.md) §4 for the full method. 🟥
- **Contamination / wet-runway:** Bogotá's bimodal wet season (Mar–May, Sep–Nov) brings frequent rain/thunderstorm activity — factor wet/contaminated-runway performance and current NOTAM/runway-condition reports at planning. 🟧
- **Link to OM B:** See the [`Fleet Capability Matrix`](../../../../../fleet/capability-matrix.md) (Table D, hot-and-high sensitivity column) for the specific type's tendency; the day's actual RTOW/gradient numbers remain AFM/OFP outputs.

---

## 10. Gotchas

- **Do not let the 3,800 m runway length create false confidence** — the binding SKBO departure constraint is density-altitude thrust/gradient, not field length.
- **Engine-out obstacle clearance to the east is a real consideration** given the close-in Cerros Orientales — confirm the escape routing/driftdown plan before departure, not after an engine failure.
- **Early-morning fog is a recurring departure hazard** — build LVTO-minima and RVR checks into the pre-departure flow during the fog-prone window.
- **Runway-designator discrepancy** — confirm whether the active AIRAC cycle uses **14L/32R & 14R/32L** or the legacy **13L/31R & 13R/31L**; do not assume either without checking.
- **ATC frequency picture for this field is very likely incomplete** — do not rely solely on the published Delivery/Ground/Tower gaps in the Briefing table; confirm the full sequence locally/on the current chart.

---

## Open items (🟧 — confirm against AIP / current AIRAC)

- Preferential runway/config logic, standard taxi routings and hot spots — not confirmed.
- SID names, RNP/gradient tables and any special obstacle departure procedure — not confirmed this pass.
- Take-off minima, transition altitude, and CTOT/ATFM applicability — not confirmed.
- Delivery/Ground/Tower frequencies — not found in reachable sources; only Departure/FIS confirmed.
- Engine-out obstacle-clearance procedure specifics (idents, turn points, driftdown altitude) — not confirmed; treated as plausible/required pending chart verification.
- Runway-designator discrepancy (14/32 current vs legacy 13/31) — not reconciled against the current AIRAC.

> **Live data — pull at planning:** wx/METAR/TAF, NOTAM (runway/taxiway/navaid/lighting), CTOT/ATFM, de-icing status. Not stored in this durable file.

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim charts inform content but are not listed here.*

- OurAirports — https://ourairports.com/airports/SKBO/runways.html , /frequencies.html (retrieved 2026-07-26; underlying record last updated 2024-04-22). *Runway/frequency tier-4 baseline.*
- Companion OM C file: [SKBO — Briefing](index.md) — full static/TEM reference, terrain and frequency detail for this field.
- Companion OM E file: [`High-Elevation Aerodrome Operations`](../../../../../flight-ops/high-elevation-aerodrome-operations.md) — density-altitude takeoff method.
- Companion OM E file: [`PBN and RNP Operations`](../../../../../flight-ops/pbn-and-rnp-operations.md).
- **Aerocivil Colombia AIP (AD 2 SKBO)** — primary source of record; not reachable in this research pass.

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-26 | Built from national AIP; K Global fields from live VAMSYS; 4-page pack. |
