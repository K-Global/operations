# DTTA — Carthage · Arrival Page

**DTTA / TUN** · Tunis, Tunis Governorate, Tunisia · Africa
**Version** v0.1 · **Updated** 2026-07-26 · **Status** Draft — provisional, tier-4 sourced

> **Read-me:** Tactical arrival aid for the sim, not a chart. Companion to the [DTTA Briefing](index.md), [Dispatch](dispatch.md) and [Departure](departure.md) pages. STARs/approaches are listed **by name only** — fly the charted current-AIRAC version; minima shown are pointers, always verify on the current chart. Static data only; live wx/NOTAM are pulled at planning. Open 🟧 items are in §Open items. Flag legend 🟥 restriction/hazard · 🟧 caution/unverified · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| Usual landing runway(s) | Not published / verify — 01/19 (3,200 m, no displaced threshold) is presumed primary over 11/29 (2,840 m, RWY 29 displaced ~200 m) 🟧 |
| Usual approach | Not published / verify — CAT III capability asserted at network level (task brief), not independently confirmed 🟧 |
| Config logic | Not published / verify 🟧 |
| Transition level | Not published / verify 🟧 |
| LVP trigger | Not published / verify 🟧 |
| Missed-approach driver | Not confirmed as terrain-driven; re-sequencing at the network's busiest field is the more likely operative concern |

---

## 2. STAR / transition selection

- **STARs (names only):** Not published / verify — pull the current-AIRAC STAR list at planning. 🟧
- **Selection by arrival direction / runway:** Not published / verify.
- **Transition to approach:** Not published / verify.
- **Speed / flow constraints on the STAR:** Standard ICAO 250 KIAS below FL100 assumed — verify chart.

---

## 3. Descent & energy plan

- **Top-of-descent trigger:** Not published / verify — plan per standard company profile pending field-specific data.
- **Speed control:** Standard ICAO/company speed schedule assumed.
- **Altitude constraints:** Not published / verify — verify chart.
- **Energy traps:** None field-specific identified this pass; no close-in high terrain confirmed (see [Briefing §3.1](index.md)).

---

## 4. Approach selection by runway

*Names only — verify minima on current AIRAC charts.*

| RWY | Approach (name) | LVP / CAT note | Minima pointer (verify AIRAC) |
|---|---|---|---|
| 01/19 | Not published / verify 🟧 | CAT III capability asserted at network level (task brief); no primary-source ILS ident/category confirmed | Verify current chart |
| 11/29 | Not published / verify 🟧 | RWY 29 has a displaced threshold (~200 m) — reduced landing distance | Verify current chart; confirm exact LDA |

---

## 5. Approach hazards (terrain / CFIT / specific threats)

- **CFIT / terrain:** No close-in high terrain confirmed; low-lying coastal site adjoining the Lake of Tunis — see [Briefing §3.1](index.md). 🟩
- **Specific threats:** **RWY 29's displaced threshold (~200 m)** reduces usable landing distance on that runway end — confirm the exact declared LDA before selecting 29 for landing.
- **Airspace / traffic:** Principal Tunisian gateway; radar approach assumed, not independently confirmed — see [Briefing §3.2](index.md) and the [Africa airspace brief](../../../../airspace/africa.md).

---

## 6. Missed approach watch-items

- **Terrain-driven MAP notes:** Not confirmed as terrain-driven — verify chart.
- **Re-sequencing environment:** As the principal national gateway and hub of the K Global Tunisia sub-network, expect vectoring back into the busiest traffic picture in this batch of fields.
- **Go-around traps:** None field-specific identified beyond the RWY 29 displaced-threshold point above.

---

## 7. Landing runway / LDA & braking / vacate

- **LDA by runway:** 01/19 — 3,200 m physical, no displaced threshold noted; 11/29 — 2,840 m physical, **RWY 29 reduced by the ~200 m displaced threshold**. Exact declared LDA not confirmed from a primary source. See [Briefing §7](index.md). 🟧
- **Braking / vacate:** Not published / verify.
- **Runway-excursion watch:** RWY 29 is the LDA-limited case at this field (§5) — treat with caution pending AIP confirmation. 🟧

---

## 8. Taxi-in routing to terminal & hot spots

- **Typical taxi-in by runway → terminal:** Not published / verify — confirm with Ground on the day.
- **Hot spots / tight taxiways:** Not published / verify. See [Briefing §13](index.md). 🟧
- **Stand/gate notes:** Not published / verify — cross-ref [Dispatch §3](dispatch.md).

---

## 9. Arrival frequency sequence

- **Sequence:** Approach (121.200) → Tower (118.100) → Ground (121.900), per the tier-4 frequency list in [Briefing §8](index.md) — not independently AIP-confirmed.
- **Approach/Departure control:** Tunis Approach, per tier-4 source; sector-specific detail not confirmed. 🟧

---

## 10. Gotchas

- **RWY 29's displaced threshold (~200 m)** — never assume the full physical runway length is landing-usable on that end; confirm the declared LDA.
- CAT III is asserted at the network/VAMSYS level (task brief) — do not treat as an AIP-confirmed fact without a current-AIRAC cross-check.
- Sirocco-type dust events can reduce visibility with gusty wind — check current TAF/SIGMET before the approach.

---

## Open items (🟧 — confirm against AIP / current AIRAC)

- STAR names, approach names/minima, transition level.
- Exact declared LDA for RWY 29 (displaced threshold).
- Runway/config selection logic (01/19 vs 11/29).
- Taxi-in routing and confirmed hot spots.

> **Live data — pull at planning:** wx/METAR/TAF/TREND, NOTAM (runway/approach/navaid/lighting), ATIS config, ground-delay/flow status. Not stored in this durable file.

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim charts inform content but are not listed here.*

- OurAirports — https://ourairports.com/airports/DTTA/ , /runways.html , /frequencies.html , /closest-navaids.html (retrieved 2026-07-26). *Runway geometry (incl. RWY 29 displaced threshold), tier-4 frequency and navaid baseline.*

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-26 | Built from national AIP; K Global fields from live VAMSYS; 4-page pack. |
