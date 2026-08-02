# LIRP — San Giusto · Departure Page

**LIRP / PSA** · Pisa, Tuscany, Italy · Europe
**Version** v0.1 · **Updated** 2026-07-26 · **Status** Draft — AIP Italia (ENAV)-derived, K Global network build

> **Read-me:** Tactical departure aid for the sim, not a chart. Companion to the [LIRP Briefing](index.md), [Dispatch](dispatch.md) and [Arrival](arrival.md) pages. SIDs/procedures are listed **by name only or flagged not-yet-confirmed** — fly the charted current-AIRAC version; verify every gradient, minima and routing on the current chart. Static data only; live wx/NOTAM/CTOT are pulled at planning. Open 🟧 items are in §Open items. Flag legend 🟥 restriction/hazard · 🟧 caution/unverified · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| Usual departure runway(s) | **03R** is the field's primary operational runway; **03L is normally a taxi route**, activated as a runway only if 03R/21L is closed 🟧 |
| Config logic | Not independently confirmed in detail; night one-way routing applies 23:00–06:00 (RWY 21L for take-off) |
| Transition altitude | **6,000 ft** (IVAO Italy reference) 🟧 |
| Take-off minima | Not confirmed this pass 🟧 |
| CTOT / flow regime | None reported — no slot/CTOT regime independently sourced for this field 🟧 |
| De-icing on departure | Not confirmed — lower seasonal likelihood at this Mediterranean coastal field 🟧 |

---

## 2. Stand → runway taxi routing & hot spots

- **Typical routings by runway:** Confirm exact taxi routing with Ground/Apron on the day. **Taxiways A–F and P are reported available up to ICAO Code E; Taxiway O is reported limited to Code C** — confirm Code E suitability for K Global widebody types before routing via Taxiway O.
- **Hot spots / tight taxiways:** Not confirmed in reachable sources this pass — pull the current AD 2 chart's hot-spot annex before use. 🟧
- **Runway crossings / read-back-required points:** Not confirmed this pass. 🟧
- **Low-vis taxi caveats:** SMGCS/low-vis taxi routing status not confirmed; follow-me availability not confirmed. 🟧

---

## 3. Runway / SID selection logic

- **By wind / config:** Not independently confirmed in detail this pass; **03R is the field's primary operational runway**, with **03L normally serving as the main taxi route** rather than an active runway.
- **By departure direction:** Night one-way routing (23:00–06:00) assigns **RWY 21L for take-off** (tailwind ≤10 kt) per network-sim data — not independently AIP-confirmed. 🟧
- **Noise / preferential-runway program:** Not confirmed in detail; the night one-way-routing pattern (§1) functions as a de-facto noise-abatement mechanism.
- **Interaction with arrivals:** The joint civil/military environment (46ª Brigata Aerea transport traffic) shares the circuit and local airspace — expect coordination with military movements distinct from purely civil traffic flow.

---

## 4. SID list (names only)

*Fly the charted current-AIRAC version. RNP/gradient notes are pointers only — verify on the chart.*

| SID (name) | Runway(s) | RNP / gradient note | Notes |
|---|---|---|---|
| GINAR / SPEZI / BEROK / VANXI / DOCME (Conv and RNAV variants) | 03R / 03L / 21L / 21R | New **RNP1 initial-climb procedures for RWY 03R and 03L** introduced with the AIRAC A3/26 (19 Mar 2026) runway-designator change 🟧 | Network-sim (IVAO Italy) and aeronautical-information-site sourced — **not regulatory**; pull the live current-AIRAC SID list before use. SID **AKUTO 6F** was cancelled and replaced by **DOCME 6F** effective AIRAC A8/25 (7 Aug 2025) |

---

## 5. Initial climb, speed & noise-abatement departure

- **Initial climb / speed:** Per SID/ATC; 250 KIAS below FL100 (EU/ICAO norm) — confirm current chart.
- **Noise-abatement departure procedure (NADP):** Not confirmed in reachable sources this pass; the night one-way-routing pattern (§1/§3) is the field's identified noise-management mechanism. 🟧
- **Early turn / altitude constraints:** Published per SID — verify constraints on the current chart. Note the **RNP1 initial-climb procedures for RWY 03R/03L are new as of AIRAC A3/26** — confirm the current chart rather than any pre-2026-03-19 procedure.

---

## 6. Engine-out / emergency-turn & obstacle considerations

- **Engine-out / emergency-turn procedure:** No published EO/emergency-turn specifics confirmed in reachable sources — apply the operator/type EOSID for the assigned runway. 🟧
- **Close-in / distant obstacles:** Flat Arno-river coastal plain — no significant close-in terrain identified in reachable sources.
- **Special DP / obstacle DP:** Not confirmed in reachable sources — verify on current chart. 🟧

---

## 7. Low-vis takeoff & de-icing on departure

- **LVTO minima / procedure:** Not confirmed in reachable sources this pass. 🟧
- **De-icing:** Not confirmed — Mediterranean coastal climate makes this a lower-frequency seasonal consideration; confirm current provisioning for any winter rotation. See [`OM E — Cold Weather Operations`](../../../../../flight-ops/cold-weather-operations.md). 🟧

---

## 8. Clearance / CTOT & departure frequency sequence

- **Clearance delivery:** Not independently confirmed as a distinct frequency this pass — confirm with Pisa Ground/Tower.
- **Frequency sequence:** **Pisa Ground 120.080 → Pisa Tower 118.775 (a separate tier-4 source reports 119.100 — unresolved conflict, confirm against a primary AIP table) → Pisa Approach 126.080.** Take the assigned frequency and confirm current chart. (Frequencies from Briefing §8, network-sim sourced — not independently AIP-confirmed.) 🟧
- **CTOT / slot handling:** No slot/CTOT regime independently sourced for this field; a **PPR requirement is reported** — confirm current procedure with handling before finalising a departure slot. 🟧

---

## 9. Performance watch-items for our types

- **Field-length / weight:** **03R (~2,993 m) is the primary usable length; 03L (~2,792 m) is normally a taxi route.** Both are shorter than the network's major hubs — confirm weight-limited performance for larger K Global types on the current chart rather than assuming non-limiting. See [`OM E — Short and Limited Runway Operations`](../../../../../flight-ops/short-and-limited-runway-operations.md). 🟧
- **Density altitude / temperature:** Non-issue at 6 ft, Mediterranean coastal climate — no hot-and-high penalty.
- **Contamination / wet-runway:** No specific seasonal contamination/braking-action data confirmed this pass; treat wet-runway braking as a standard caution. 🟧
- **Link to OM B:** See [`OM B — Fleet Capability Matrix`](../../../../../fleet/capability-matrix.md) — confirm type-specific field-length performance given this field's shorter runways relative to the network's major hubs.

---

## 10. Gotchas

- **Runway designators changed from 04/22 to 03/21, effective AIRAC A3/26 (19 March 2026)** — confirm any chart or tool referencing this field uses the current naming.
- **03L/21R is normally a taxi route, not an active runway** — confirm current activation status before planning any operation on it; it is only used as a runway if 03R/21L is closed.
- **Joint civil/military aerodrome** — expect Italian Air Force C-130J/C-27J transport traffic sharing the circuit; coordinate departure sequencing accordingly.
- **Runway lengths here are shorter than the network's major hubs** — confirm weight-limited performance rather than assuming non-limiting, especially for larger K Global types.
- **PPR is reported required** — confirm current procedure and lead time with handling before planning a rotation into or out of this field.
- ATC frequencies show an unresolved conflict between sources (Tower 118.775 vs 119.100) — confirm against a primary AIP table before relying on either.

---

## Open items (🟧 — confirm against AIP / current AIRAC)

- Current-AIRAC SID names and RNP/gradient specifics per runway (especially the new RNP1 RWY 03R/03L procedures).
- Take-off minima / DVA exact figures.
- Start-up/push-back procedure detail and any military-coordination requirement.
- NADP preference / noise-abatement departure detail.
- LVTO RVR minima and follow-me/SMGCS specifics.
- EOSID/engine-out procedure detail per runway.
- Tower frequency conflict (118.775 vs 119.100) — resolve against a primary AIP table.

> **Live data — pull at planning:** wx/METAR/TAF, NOTAM (runway/taxiway/navaid/lighting, esp. 03L/21R activation status and restricted-area LI R18 Altopascio), CTOT/ATFM (if applicable), de-icing status, military-traffic notices. Not stored in this durable file.

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim charts inform content but are not listed here.*

- IVAO Italy — Quick Overview, Pisa San Giusto — https://quickoverview.ivao.it/aerodrome/show/LIRP (retrieved 2026-07-26). *SID index, communications, taxiway code-letter restrictions, TA/TL table — network-sim source, not regulatory.*
- Aeronautical Information (Italy) — "Procedure strumentali di Pisa" — https://aeronauticalinformation.it/index.php/2024/04/09/procedure-strumentali-di-pisa/ (retrieved 2026-07-26). *AIRAC A3/26 runway-designator change and RNP1 initial-climb procedure introduction; SID cancellation/replacement history (AKUTO 6F → DOCME 6F, AIRAC A8/25).*
- OurAirports — https://ourairports.com/airports/LIRP/runways.html (retrieved 2026-07-26). *Runway/declared-distance corroboration.*

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-26 | Built from AIP Italia (ENAV); K Global fields from live VAMSYS; 4-page pack. |
