# LIRP — San Giusto · Arrival Page

**LIRP / PSA** · Pisa, Tuscany, Italy · Europe
**Version** v0.1 · **Updated** 2026-07-26 · **Status** Draft — AIP Italia (ENAV)-derived, K Global network build

> **Read-me:** Tactical arrival aid for the sim, not a chart. Companion to the [LIRP Briefing](index.md), [Dispatch](dispatch.md) and [Departure](departure.md) pages. STARs/approaches are listed **by name only or flagged not-yet-confirmed** — fly the charted current-AIRAC version; minima shown are pointers, always verify on the current chart. Static data only; live wx/NOTAM are pulled at planning. Open 🟧 items are in §Open items. Flag legend 🟥 restriction/hazard · 🟧 caution/unverified · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| Usual landing runway(s) | **03R** is the field's primary operational runway; **21R** has no published approach identified this pass 🟧 |
| Usual approach | ILS/LOC on 03R (CAT IIIA reported); VOR-Z on 03L; RNP-Z/RNP-Y on 21L (restricted-area-dependent) |
| Config logic | Night one-way routing (23:00–06:00): RWY 03R available for landing, tailwind ≤10 kt |
| Transition level | By QNH — see Briefing §10 QNH/TL table 🟧 |
| LVP trigger | Not confirmed this pass 🟧 |
| Missed-approach driver | Restricted-area (LI R18 Altopascio) dependency for RNP-Z RWY 21L; otherwise standard procedural missed approach — terrain is not a factor |

---

## 2. STAR / transition selection

- **STARs (names only — verify current AIRAC):** **STAR RNAV1** (RWY 03R/L and RWY 21/L variants) and **STAR VOR (ATC discretion)** are published, with feeder routing reported from **north/west via MIVKI** and from **south/east referencing the ELB (Elba) VOR** — pull the current-AIRAC STAR chart for exact routing. 🟧
- **Selection by arrival direction / runway:** Pisa Approach assigns the STAR-to-runway transition for the active configuration; **03R is the field's primary landing runway**.
- **Transition to approach:** Expect a STAR-to-ILS/LOC (03R) or STAR-to-VOR/RNP (03L/21L) transition with vectors onto final; verify the charted transition.
- **Speed / flow constraints on the STAR:** Published speed/altitude gates are pointers only — verify chart.

---

## 3. Descent & energy plan

- **Top-of-descent trigger:** Standard descent-profile planning; plan TOD to meet the first STAR altitude gate.
- **Speed control:** STAR speed gates and 250 KIAS below FL100 (EU/ICAO norm) — confirm current chart.
- **Altitude constraints:** Key STAR crossing constraints are pointers — fly the charted altitudes.
- **Energy traps:** Confirm current runway/config assignment early — **03L is normally a taxi route, not an active runway**, so do not plan an approach to it without confirming current activation status (only used as a runway if 03R/21L is closed).

---

## 4. Approach selection by runway

*Names only — verify minima on current AIRAC charts.*

| RWY | Approach (name) | LVP / CAT note | Minima pointer (verify AIRAC) |
|---|---|---|---|
| 03R | ILS or LOC; VOR-Z; RNP | **CAT IIIA reported** 🟧 | Renamed from "04R" charts effective AIRAC A3/26 (19 Mar 2026); verify current chart |
| 03L | VOR-Z (minima as published for 03R) | Not confirmed 🟧 | Renamed from "04L" charts effective AIRAC A3/26; **normally a taxi route — confirm activation status** |
| 21L | RNP-Z; RNP-Y | 🟥 **RNP-Z conditional on restricted area LI R18 Altopascio activity** | Renamed from "22L" charts effective AIRAC A3/26; verify current NOTAM/restricted-area status |
| 21R | No published approach identified this pass | — | Not confirmed 🟧 |

- **LVP triggers:** Not confirmed this pass — no specific LVP trigger data or ILS sub-category detail found beyond the tier-4-reported CAT IIIA on 03R. 🟧

---

## 5. Approach hazards (terrain / CFIT / specific threats)

- **CFIT / terrain:** 🟩 None. Flat Arno-river coastal plain at 6 ft AMSL — no close-in high terrain relevant to any arrival path.
- **Specific threats:** 🟧 **Joint civil/military traffic** — Italian Air Force C-130J/C-27J transport aircraft share the circuit and local airspace; expect coordination with military movements distinct from a purely civil field. **RNP-Z RWY 21L availability depends on restricted-area LI R18 Altopascio activity status** — confirm before planning to rely on this procedure.
- **Airspace / traffic:** 🟧 Moderate civil traffic density relative to the network's major hubs, with the added joint-military dimension described above; Pisa Approach manages both.

---

## 6. Missed approach watch-items

- **Terrain-driven MAP notes:** Terrain is not the driver (flat coastal plain) — fly the published MAP and verify climb-gradient/turn on the current chart.
- **Re-sequencing environment:** A go-around at a field of this traffic profile is less likely to encounter the dense re-sequencing seen at the network's major hubs, but confirm current traffic/military-coordination status.
- **Go-around traps:** A **conventional/RNAV1 holding pattern is established on waypoint VANXI** (inbound 279° / outbound 099°, MHA 2,000 ft, IAS max 190 kt) and serves as the missed-approach hold for multiple published procedures — verify current chart before relying on this as the default.

---

## 7. Landing runway / LDA & braking / vacate

- **LDA by runway:** 03R **2,849 m** (149 m displaced threshold); 21L **2,735 m** (257 m displaced threshold); 03L **2,495 m** (298 m displaced threshold, and normally a taxi route rather than an active runway — confirm activation status); 21R **2,736 m** (no displacement reported, but no published approach identified this pass). All figures are shorter than the network's major hubs — confirm weight-limited landing performance for larger K Global types.
- **Braking / vacate:** Rapid-exit taxiway detail not confirmed in reachable sources — confirm with Ground/Apron on the day. 🟧
- **Runway-excursion watch:** 🟧 Three of the four runway ends carry displaced thresholds (03L, 03R, 21L) — mind LDA vs. full runway length, and confirm current figures against a primary AIP table before dispatch use.

---

## 8. Taxi-in routing to terminal & hot spots

- **Typical taxi-in by runway → terminal:** After landing on 03R (the field's primary runway), taxi in to the civil terminal per Ground assignment. **VAMSYS record carries no taxi-time value for this field** — build the taxi-in conservatively pending confirmation. `[VAMSYS mirror 2026-07-26]`
- **Hot spots / tight taxiways:** Not confirmed in reachable sources this pass — pull the current AD 2 chart's hot-spot annex before use. **Taxiways A–F and P are reported available up to ICAO Code E; Taxiway O is reported limited to Code C** — confirm Code E suitability before routing a widebody via Taxiway O. 🟧
- **Stand/gate notes:** See [Dispatch §3](dispatch.md) — the civil terminal's modest gate/jetbridge count suggests primarily narrowbody sizing; confirm widebody stand suitability with handling before finalising a stand plan.

---

## 9. Arrival frequency sequence

- **Sequence:** **Pisa Approach 126.080 → Pisa Tower 118.775 (a separate tier-4 source reports 119.100 — unresolved, confirm against a primary AIP table) → Pisa Ground 120.080.** Take the assigned frequency and confirm current chart. (Frequencies from Briefing §8, network-sim sourced — not independently AIP-confirmed.) 🟧
- **Approach/Departure control:** **Pisa Approach** is the facility for this field's terminal approach; both **Roma ACC (LIRR)** and **Milano ACC (LIMM)** appear as en-route handoffs in network-sim data, reflecting the field's position near the LIRR/LIMM FIR boundary — no dedicated in-library Roma or Milano FIR brief exists; see [Europe — Airspace Briefing](../../../../airspace/europe.md) 🟧 (general continental brief only, does not cover Italy FIR specifics).

---

## 10. Gotchas

- **Runway designators changed from 04/22 to 03/21, effective AIRAC A3/26 (19 March 2026)** — confirm any chart or tool referencing this field uses the current naming before briefing a crew.
- **03L/21R is normally a taxi route, not an active runway** — never plan an arrival to it without confirming current activation status.
- **RNP-Z RWY 21L availability is tied to restricted-area LI R18 Altopascio activity** — do not assume this procedure is always usable.
- **Joint civil/military aerodrome** — expect Italian Air Force transport traffic sharing the circuit; brief for possible military-coordination sequencing.
- **Three of four runway ends carry displaced thresholds** — confirm the correct LDA for the assigned runway before committing to a landing distance assumption.
- **Runway lengths here are shorter than the network's major hubs** — confirm landing performance rather than assuming non-limiting for larger K Global types.

---

## Open items (🟧 — confirm against AIP / current AIRAC)

- Current-AIRAC STAR names and exact approach minima per runway.
- ILS sub-category (CAT IIIA reported on 03R) and ident/frequency confirmation.
- Exact LVP trigger data (none found this pass).
- Rapid-exit taxiway/vacate detail.
- RNP-Z RWY 21L / restricted-area LI R18 Altopascio interaction and current activation procedure.
- Tower frequency conflict (118.775 vs 119.100) — resolve against a primary AIP table.
- Current taxi-in routing and widebody gate/stand suitability for our operation.

> **Live data — pull at planning:** wx/METAR/TAF/TREND, NOTAM (runway/approach/navaid/lighting, esp. 03L/21R activation status and restricted-area LI R18 Altopascio), ATIS config/wind trend, military-traffic notices. Not stored in this durable file.

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim charts inform content but are not listed here.*

- Aeronautical Information (Italy) — "Procedure strumentali di Pisa" — https://aeronauticalinformation.it/index.php/2024/04/09/procedure-strumentali-di-pisa/ (retrieved 2026-07-26). *STAR/approach names, AIRAC A3/26 runway-designator change, VANXI missed-approach hold, LI R18 Altopascio restricted-area note.*
- IVAO Italy — Quick Overview, Pisa San Giusto — https://quickoverview.ivao.it/aerodrome/show/LIRP (retrieved 2026-07-26). *Runway/declared-distance data, communications — network-sim source, not regulatory.*
- OurAirports — https://ourairports.com/airports/LIRP/runways.html (retrieved 2026-07-26). *Current 03/21 designators, displaced-threshold figures.*

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-26 | Built from AIP Italia (ENAV); K Global fields from live VAMSYS; 4-page pack. |
