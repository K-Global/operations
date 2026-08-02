# TNCM — Princess Juliana Intl · Departure Page

**TNCM / SXM** · Simpson Bay, Sint Maarten · North America
**Version** v0.1 · **Updated** 2026-07-26 · **Status** Draft

> **Read-me:** Tactical departure aid for the sim, not a chart. Companion to the [TNCM Briefing](index.md), [Dispatch](dispatch.md) and [Arrival](arrival.md) pages. SIDs/procedures are listed **by name only** — fly the charted current-AIRAC version; verify every gradient, minima and routing on the current chart. Static data only; live wx/NOTAM/CTOT are pulled at planning. Open 🟧 items are in §Open items. Flag legend 🟥 restriction/hazard · 🟧 caution/unverified · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| Usual departure runway(s) | **RWY 10** routine; RWY 28 by wind |
| Config logic | Wind-driven; no formal preferential-runway program published |
| Transition altitude | 5,000 ft AMSL (Juliana CTZ) 🟧 |
| Take-off minima | Not confirmed this pass 🟧 |
| CTOT / flow regime | None identified |
| De-icing on departure | **NIL** |

---

## 2. Stand → runway taxi routing & hot spots

- **Typical routings by runway:** From the single apron (TNCM A) via taxiways A–E to the assigned runway threshold; confirm the exact taxi with Ground/Tower on the day.
- **Hot spots / tight taxiways:** 🟥 **Taxiways F, G1, G2 and H are narrow (5.0–11.0 m) and PCN 9-rated** — not suitable for K Global aircraft; do not accept a taxi clearance via these without confirming aircraft suitability.
- **Runway crossings / read-back-required points:** Single runway, no crossing traffic; standard hold-short discipline applies at the runway-holding position.
- **Low-vis taxi caveats:** No SMGCS/low-vis taxi procedure identified; not a routine concern at this field given the typically benign taxi environment. 🟧

---

## 3. Runway / SID selection logic

- **By wind / config:** Wind-driven runway selection between RWY 10 and RWY 28; no published preferential program.
- **By departure direction:** RWY 10 departures: **mandatory right turn** (left turn only for light non-jet aircraft, day, ATC-approved). RWY 28 departures: **left turn unless a right turn is requested and approved by ATC.**
- **Noise / preferential-runway program:** None published (Briefing §12 — "no procedures in place"); the mandatory-turn rules above are obstacle/track-management, not noise-driven.
- **Interaction with arrivals:** Single runway — departures and arrivals share the same runway; sequencing is by Tower, no parallel/crossing-runway interaction to manage.

---

## 4. SID list (names only)

*Fly the charted current-AIRAC version. RNP/gradient notes are pointers only — verify on the chart.*

| SID (name) | Runway(s) | RNP / gradient note | Notes |
|---|---|---|---|
| MODOR TWO | 10 | Jet departures — verify gradient on current chart 🟧 | |
| BOPAT TWO | 10 | Turboprop/propeller departures | |
| JULNA2 / PELCN2 / MULLT2 | 10 (per AIP chart index) | Not independently verified this pass 🟧 | Confirm current assignment/runway on the day's chart |
| — | 28 | No dedicated SID confirmed | ATC-instructed routing |

---

## 5. Initial climb, speed & noise-abatement departure

- **Initial climb / speed:** All departing traffic must **visually ensure clearance from terrain and obstacles until passing 2,600 ft AMSL**; standard 250 KIAS below FL100 thereafter.
- **Noise-abatement departure procedure (NADP):** None published — the mandatory turn-out rules (§3) are the field's departure-track management, not a noise programme.
- **Early turn / altitude constraints:** RWY 10: right turn immediately after departure (mandatory except light non-jet, ATC-approved, day-only left turn). RWY 28: left turn unless a right turn is ATC-approved.

---

## 6. Engine-out / emergency-turn & obstacle considerations

- **Engine-out / emergency-turn procedure:** No dedicated EOSID confirmed in reachable sources — apply the operator/type EOSID for the assigned runway, bearing in mind the high ground north/northwest of the field. 🟧
- **Close-in / distant obstacles:** High ground (obstacle-charted to ~1,118 ft) lies roughly 3–4 NM north/northwest of the field, off the RWY 28 extended centreline/RWY 10 turn-out area — this is the direct reason for the mandatory right-turn-out on RWY 10 and the general "maintain visual terrain clearance to 2,600 ft" rule. 🟥
- **Special DP / obstacle DP:** Not confirmed in reachable sources beyond the mandatory-turn rules above — verify on current chart. 🟧

---

## 7. Low-vis takeoff & de-icing on departure

- **LVTO minima / procedure:** No LVP/CAT II-III infrastructure identified at this field; standard take-off minima apply (not confirmed from a primary table this pass). 🟧
- **De-icing:** **NIL** — not applicable.

---

## 8. Clearance / CTOT & departure frequency sequence

- **Clearance delivery:** Juliana Delivery **121.650** (when required).
- **Frequency sequence:** **Delivery 121.650 (when required) → Tower 118.700 (0700–2100 LT) / 128.950 (when Tower/Approach de-combined) → Juliana Approach 128.950 (backup 119.700).** Take the assigned frequency and confirm current chart. IFR departures must contact Tower for start-up/ATC clearance; clearance may be requested at the earliest 10 minutes prior to engine start. (Frequencies from Briefing §8.)
- **CTOT / slot handling:** No ATFM/CTOT regime identified for this field. 🟧

---

## 9. Performance watch-items for our types

- **Field-length / weight:** 🟥 **Field-length-limiting** — 2,300 m TORA with reduced LDA on both ends (Briefing §7) drives a hard performance-limited takeoff weight; confirm current-day figures for the assigned type, do not assume prior-trip numbers apply.
- **Density altitude / temperature:** Non-issue at sea level; standard tropical reference temperature (31°C) is the relevant performance input, not density altitude.
- **Contamination / wet-runway:** No winter/de-icing season; tropical-shower wet-runway braking-action consideration applies year-round, intensifying in hurricane season (Jun–Nov).
- **Link to OM B:** See [`OM B — Fleet Capability Matrix`](../../../../../fleet/capability-matrix.md) and [`OM E — Short and Limited Runway Operations`](../../../../../flight-ops/short-and-limited-runway-operations.md) — treat every TNCM departure as a performance-limited-weight case.

---

## 10. Gotchas

- **Mandatory right turn out on RWY 10** — do not plan or expect a left turn unless flying a light non-jet type with an ATC-approved day-only exception.
- **Maintain visual terrain/obstacle clearance to 2,600 ft AMSL on departure** — this is a stated AIP requirement, not merely good practice.
- **Short runway, minimal margin** — treat every departure as performance-limited; do not assume "always enough runway" from a prior, lighter rotation.
- **Documented jet-blast hazard at the RWY 10 threshold/perimeter fence** (public area immediately behind the displaced threshold) — brief blast discipline for line-up and initial roll.
- **No wind-shear detection equipment on the field** — increase vigilance for gust-front effects on the initial climb in showery/frontal conditions.
- **Narrow/low-strength taxiways (F, G1, G2, H) are off-limits** — confirm the assigned taxi routing uses A–E only.

---

## Open items (🟧 — confirm against AIP / current AIRAC)

- Current-AIRAC SID assignment logic (MODOR TWO/BOPAT TWO/JULNA2/PELCN2/MULLT2) by runway and aircraft category.
- Take-off minima exact figures.
- EOSID/engine-out procedure detail per runway.
- CTOT/flow-control applicability (none found, not independently confirmed as "none").

> **Live data — pull at planning:** wx/METAR/TAF, NOTAM (runway/taxiway/navaid/lighting, bird activity), CTOT/ATFM status, tropical-cyclone advisories in season. Not stored in this durable file.

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim charts inform content but are not listed here.*

- **DC-ANSP eAIP, AD 2 TNCM — Sint Maarten**, publication cycle 2024-11-28 — https://dc-ansp.org/eAIS/eAIP-Publications/2024-11-28/eAIP/AD%202%20TNCM%20-%20SINT%20MAARTEN%201-en-US.html (retrieved 2026-07-26). *Flight procedures, SID index, communications.*

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-26 | Built from national/territory AIP; K Global fields from live VAMSYS; 4-page pack. |
