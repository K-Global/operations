# GMFF — Saïss Intl · Arrival Page

**GMFF / FEZ** · Fez, Morocco · Africa
**Version** v0.1 · **Updated** 2026-07-26 · **Status** Draft

> **Read-me:** Tactical arrival aid for the sim, not a chart. Companion to the [GMFF Briefing](index.md), [Dispatch](dispatch.md) and [Departure](departure.md) pages. STARs/approaches are listed **by name only** — fly the charted current-AIRAC version; minima shown are pointers, always verify on the current chart. Static data only; live wx/NOTAM are pulled at planning. Open 🟧 items are in §Open items. Flag legend 🟥 restriction/hazard · 🟧 caution/unverified · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| Usual landing runway(s) | 09 or 27 — single runway, no crosswind alternative; selection logic not confirmed 🟧 |
| Usual approach | Not confirmed — no ILS reported at this field in any reachable source; an on-field VOR (FES 115.70) may support a conventional approach 🟧 |
| Config logic | Not confirmed — presumed wind-driven 🟧 |
| Transition level | Not confirmed — verify current chart 🟧 |
| LVP trigger | No CAT II/III or LVP infrastructure confirmed at this field 🟧 |
| Missed-approach driver | **Terrain** — Middle Atlas high ground rises to the south/southeast of the field (see §5) |

---

## 2. STAR / transition selection

- **STARs (names only):** Not confirmed in reachable research pass — pull the current-AIRAC STAR list at planning. 🟧
- **Selection by arrival direction / runway:** Not confirmed. 🟧
- **Transition to approach:** Not confirmed — no ILS reported; any transition would be to a conventional (VOR-based or similar) approach pending current-chart confirmation. 🟧
- **Speed / flow constraints on the STAR:** Not confirmed — verify chart. 🟧

---

## 3. Descent & energy plan

- **Top-of-descent trigger:** Not confirmed — no field-specific rule of thumb obtained this pass. 🟧
- **Speed control:** Standard 250 KIAS below FL100 (ICAO norm) assumed pending local override confirmation.
- **Altitude constraints:** Not confirmed — verify current chart, particularly for any arrival routed over or near the Middle Atlas high ground to the south/southeast (§5). 🟧
- **Energy traps:** No crosswind-runway alternative (single runway 09/27) means a late runway-direction change is not possible — plan the approach direction with confidence in the forecast wind, and treat any late wind-shift report as a potential go-around/diversion trigger rather than a runway swap.

---

## 4. Approach selection by runway

*Names only — verify minima on current AIRAC charts.*

| RWY | Approach (name) | LVP / CAT note | Minima pointer (verify AIRAC) |
|---|---|---|---|
| 09 | Not confirmed — verify current AIRAC | No CAT infrastructure confirmed 🟧 | Verify current chart |
| 27 | Not confirmed — verify current AIRAC | No CAT infrastructure confirmed 🟧; displaced threshold reduces LDA (Briefing §7) | Verify current chart |

---

## 5. Approach hazards (terrain / CFIT / specific threats)

- **CFIT / terrain:** 🟥 The field sits at ~1,900 ft on the Saïss Plain, but the **Middle Atlas** rises to peaks above 3,000 m (highest **Jebel Bou Naceur, 3,340 m**) beginning within a few tens of NM to the south/southeast — Ifrane, itself in the Atlas foothills, is only ~32 NM S/SSE of Fez. Any arrival routing that brings the aircraft south or southeast of the field should be flown strictly to the charted MSA/STAR altitudes; no primary MSA/obstacle table was obtained in this research pass — cross-ref [GMFF Briefing](index.md) §3.1.
- **Specific threats:** No closely-spaced parallel runways, offset/converging approaches, or published wind-shear/fog-frequency data found in reachable sources for this field specifically; general climate notes (Briefing §14) suggest winter inland-plain fog/low cloud is plausible at night. 🟧
- **Airspace / traffic:** Regional single-runway field; control-facility type (radar vs procedural) not independently confirmed — cross-ref [GMFF Briefing](index.md) §3.2 and [Africa — General Airspace](../../../../airspace/africa.md).

---

## 6. Missed approach watch-items

- **Terrain-driven MAP notes:** The Middle Atlas high ground to the south/southeast (§5) is the primary consideration for any missed approach, particularly off RWY 27 (which faces west, away from the high ground on the approach but whose missed-approach turn/routing should still be checked against the current chart). Verify current-chart missed-approach terrain clearance and any turn/gradient constraint. 🟧
- **Re-sequencing environment:** Not confirmed — traffic density/vectoring practice not obtained from a primary source. 🟧
- **Go-around traps:** No field-specific go-around hazard confirmed beyond the general terrain caution above.

---

## 7. Landing runway / LDA & braking / vacate

- **LDA by runway:** RWY 09 ≈3,200 m (no displaced threshold reported); RWY 27 reduced by a displaced threshold reported as either 250 m (OurAirports) or 221 m/725 ft (SkyVector) — a source discrepancy, use the more conservative published LDA until confirmed on the current chart. See [GMFF Briefing](index.md) §7. 🟧
- **Braking / vacate:** No rapid-exit-taxiway data found in reachable sources. 🟧
- **Runway-excursion watch:** No crosswind-runway alternative exists at this field — a crosswind/tailwind event outside limits cannot be mitigated by a runway swap. Contamination/braking-action data not confirmed (Briefing §7). 🟧

---

## 8. Taxi-in routing to terminal & hot spots

- **Typical taxi-in by runway → terminal:** Not confirmed — single-runway field, presumed single parallel taxiway to a single terminal; no routing detail obtained from a primary source this pass. 🟧
- **Hot spots / tight taxiways:** None identified in reachable sources. 🟧
- **Stand/gate notes:** Cross-ref [GMFF Dispatch](dispatch.md) §3 — stand/gate layout not confirmed, and the terminal is reported to be mid-expansion (Dispatch §2).

---

## 9. Arrival frequency sequence

- **Sequence:** (Approach — see below) → **Fès Tower 118.60** → (Ground — not published; cross-ref [GMFF Briefing](index.md) §8).
- **Approach/Departure control:** "Fès Approach" — frequency reported as **121.40** (SkyVector) or **118.500** (IVAO Morocco Division network-sim document, not regulatory) — discrepancy not resolved this pass; verify current chart before relying on either figure. 🟧

---

## 10. Gotchas

- **No crosswind-runway alternative** — a late wind shift cannot be handled by a runway change; treat as a go-around/diversion trigger.
- **Middle Atlas high ground to the south/southeast** — respect MSA/STAR altitudes precisely; do not descend early on that side of the field.
- **Displaced threshold on RWY 27** reduces usable landing distance by an unconfirmed but non-trivial amount (~220–250 m depending on source) — do not assume the full 3,200 m is available for landing on that runway.
- **Approach-frequency discrepancy** between public sources (121.40 vs 118.500) — confirm the correct current frequency at planning.
- **Terminal is reported mid-expansion** (Dispatch §2) — expect possible apron/stand layout changes versus older charts/references.

---

## Open items (🟧 — confirm against AIP / current AIRAC)

- Approach names/minima, STARs, transition level, LVP status, taxi-in routing, Ground frequency — none confirmed in reachable public sources this pass.
- Displaced-threshold/LDA discrepancy on RWY 27 (250 m vs 221 m/725 ft).
- Approach-frequency discrepancy (121.40 vs 118.500) unresolved.
- Terrain/MSA quantification for the missed approach not obtained from a primary chart.

> **Live data — pull at planning:** wx/METAR/TAF/TREND, NOTAM (runway/approach/navaid/lighting), ATIS config, ground-delay/flow status. Not stored in this durable file.

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim charts inform content but are not listed here.*

- OurAirports — https://ourairports.com/airports/GMFF/runways.html (retrieved 2026-07-26). *Displaced-threshold figure.*
- SkyVector — https://skyvector.com/airport/GMFF/Fes-Saiss-International-Airport (retrieved 2026-07-26). *Runway/threshold detail, displaced-threshold figure, Approach frequency.*
- IVAO Morocco Division — "IVAO Morocco Division Rules — Based Pilots and ATC," v1.0, 2016-03-04 — mirrored via https://silo.tips/download/ivao-morocco-division (retrieved 2026-07-26). **Network-sim training document, not regulatory** — cross-check only.
- Journey Beyond Travel — "Morocco's Mountain Ranges: An Overview" — https://www.journeybeyondtravel.com/blog/morocco-mountains-high-atlas-middle-atlas-anti-atlas.html (retrieved 2026-07-26). *Middle Atlas terrain corroboration.*

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-26 | Built from AIP Morocco (ONDA); K Global fields from live VAMSYS; 4-page pack. |
