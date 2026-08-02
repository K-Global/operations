# GMAD — Al Massira Intl · Arrival Page

**GMAD / AGA** · Agadir (Temsia), Souss-Massa, Morocco · Africa
**Version** v0.1 · **Updated** 2026-07-26 · **Status** Draft

> **Read-me:** Tactical arrival aid for the sim, not a chart. Companion to the [GMAD Briefing](index.md), [Dispatch](dispatch.md) and [Departure](departure.md) pages. STARs/approaches are listed **by name only** — fly the charted current-AIRAC version; minima shown are pointers, always verify on the current chart. Static data only; live wx/NOTAM are pulled at planning. Open 🟧 items are in §Open items. Flag legend 🟥 restriction/hazard · 🟧 caution/unverified · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| Usual landing runway(s) | **27** preferred (ILS CAT II); **09** reciprocal (visual/PAPI) |
| Usual approach | ILS CAT II on 27; visual/PAPI or non-precision on 09 |
| Config logic | Wind-driven, with an equipment bias toward RWY 27 |
| Transition level | By QNH — not independently confirmed this pass 🟧 |
| LVP trigger | CAT II ops on RWY 27 imply LVP procedures exist; exact RVR/trigger not confirmed 🟧 |
| Missed-approach driver | **Obstacle**-driven (lit masts ~6 NM out) rather than terrain-driven — see §5 |

---

## 2. STAR / transition selection

- **STARs (names only):** Not confirmed in the reachable AIP text extract — the AIP chart index confirms published STAR chart pages exist (AD 2 GMAD-33-1-1/33-1-2) but does not name them here. Pull the current-AIRAC list at planning. 🟧
- **Selection by arrival direction / runway:** Not detailed in the reachable AIP text. The on-field DVOR/DME (ADM, 117.200) and two NDBs (ALS, AML) plausibly support transitions to either runway; not independently confirmed. 🟧
- **Transition to approach:** RWY 27 final approach is fixed by LOC/GP ident ADA (ILS CAT II); RWY 09 approach transition (visual/non-precision) is not detailed in the reachable extract. 🟧
- **Speed / flow constraints on the STAR:** Standard 250 KIAS below FL100 assumed — not field-specific confirmed.

---

## 3. Descent & energy plan

- **Top-of-descent trigger:** Standard rule-of-thumb (e.g. 3:1) — no field-specific procedure found in reachable sources.
- **Speed control:** Standard; the on-field DVOR/DME (ADM, 117.200) supports distance-based descent planning.
- **Altitude constraints:** Not confirmed this pass — verify current chart. 🟧
- **Energy traps:** RWY 27 is the only equipped/precision runway; a late runway change to 09 in marginal weather trades away ILS and approach lighting — brief this explicitly as a plan-continuity trap, not a routine reciprocal swap.

---

## 4. Approach selection by runway

*Names only — verify minima on current AIRAC charts.*

| RWY | Approach (name) | LVP / CAT note | Minima pointer (verify AIRAC) |
|---|---|---|---|
| 27 | ILS CAT II (ident ADA, LOC 110.300 / GP 335.000) | CAT II — confirm current LVP RVR trigger 🟧 | Verify current AIRAC minima |
| 09 | Visual / PAPI (3°, MEHT 22.58 m); non-precision (VOR/NDB-based, name not confirmed) 🟧 | No LVP infrastructure on this end | Verify current AIRAC minima |

---

## 5. Approach hazards (terrain / CFIT / specific threats)

- **CFIT / terrain:** 🟥 Flat Atlantic coastal plain; no distant high-terrain figure was obtained in this research pass. The AIP obstacle table lists two **lit RTM broadcast masts, ~140.2 m and ~140.6 m AGL**, inside the RWY 09/27 approach/take-off surface roughly 6 NM from the field `[AIP AD 2.10]` — a real, sourced close-in obstacle. Verify MSA/terrain and obstacle clearance on the current chart before flying anything other than the charted procedure. Cross-ref [Briefing §3.1](index.md).
- **Specific threats:** Single runway — no closely-spaced parallel or offset/converging approach configuration to manage. Coastal fog/marine-layer is plausible per the AIP's own humidity data (see [Briefing §14](index.md)) but not independently confirmed against a fog-frequency statistic. 🟧
- **Airspace / traffic:** Class C CTR, 6 NM radius, single combined Tower/Approach unit; moderate leisure-charter traffic density. Cross-ref [Briefing §3.2](index.md).

---

## 6. Missed approach watch-items

- **Terrain-driven MAP notes:** Obstacle-driven rather than terrain-driven — the two ~140 m/459 ft AGL lit masts ~6 NM out (§5) are the one quantified close-in obstacle. Verify missed-approach climb-gradient/obstacle clearance on the current chart. 🟧
- **Re-sequencing environment:** Single runway, moderate traffic density — re-sequencing should be straightforward relative to a multi-runway hub.
- **Go-around traps:** None confirmed beyond the general obstacle note above.

---

## 7. Landing runway / LDA & braking / vacate

- **LDA by runway:** **3,200 m** both runways, no displaced threshold `[AIP AD 2.13]`. 🟩
- **Braking / vacate:** No rapid-exit/high-speed-turnoff data confirmed in the reachable AIP text. TWY A/B and D/D5 (the widest taxiways on field) are the plausible primary exits — confirm locally. 🟧
- **Runway-excursion watch:** Symmetric declared distances; no snow/ice season. Wet-runway (rain) braking action is the only seasonal consideration and is not independently quantified this pass. 🟧

---

## 8. Taxi-in routing to terminal & hot spots

- **Typical taxi-in by runway → terminal:** Not confirmed by runway in reachable sources — likely via TWY A/B/D/D5 to the C-series apron stands; confirm with Ground on arrival. 🟧
- **Hot spots / tight taxiways:** 🟥 A **WIG WAG warning-light system** is installed at the **TWY D1/RWY** and **TWY D5/RWY** intersections `[AIP AD 2.9]` — cross-ref [Briefing §13](index.md).
- **Stand/gate notes:** Cross-ref [Dispatch §3](dispatch.md) — Code E/F stand suitability not confirmed; A1–A27 positions are light-aircraft-rated (5,700 kg/0.90 MPa) and not usable by K Global fleet types.

---

## 9. Arrival frequency sequence

- **Sequence:** Approach (Al Massira Approach, 120.900/118.200) → Tower (Al Massira Tower, 119.500/118.000) — reference [Briefing §8](index.md). No separate Ground frequency was found in the reachable AIP text.
- **Approach/Departure control:** Al Massira Approach — radar vs procedural control not confirmed in reachable sources. 🟧

---

## 10. Gotchas

- **RWY 09 offers no ILS or approach lighting** — expect a visual/non-precision profile if wind favours 09; don't assume ILS-equivalent capability across both runway ends.
- **The RTM broadcast-mast obstacles (~140 m/459 ft AGL, ~6 NM out)** sit under the extended runway approach/departure surface — respect charted terrain/obstacle clearance, especially on a missed approach.
- **WIG WAG-protected TWY D1/RWY and TWY D5/RWY intersections** are active runway-crossing hot spots on taxi-in.
- **No de-icing capability exists on field** — a non-issue in normal conditions but zero mitigation if ever needed.
- **PAPI MEHT differs slightly by runway** (22.58 m on RWY 09 vs 21.79 m on RWY 27) — confirm eye-to-wheel margin for any long-body type assigned here.

---

## Open items (🟧 — confirm against AIP / current AIRAC)

- STAR names, transition-to-approach routing, altitude constraints on the descent — not confirmed in the reachable AIP text extract.
- Transition level by QNH — not independently confirmed.
- LVP RVR/trigger figures for the RWY 27 CAT II approach — not confirmed.
- High-speed-exit/rapid-turnoff taxiway data — not confirmed.
- Radar vs procedural approach control — not stated in the reachable AIP extract.

> **Live data — pull at planning:** wx/METAR/TAF/TREND, NOTAM (runway/approach/navaid/lighting), ATIS config, ground-delay/flow status. Not stored in this durable file.

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim charts inform content but are not listed here.*

- **SIA-Maroc (ONDA) AIP Morocco, AD 2 GMAD** (current package, AIRAC AMDT N°05/26–N°08/25, eff. dates 07 Aug 2025 – 14 May 2026) — https://siamaroc.onda.ma/eaip/AD/AD2GMAD.pdf (retrieved 2026-07-26).
- OurAirports — https://ourairports.com/airports/GMAD/runways.html (retrieved 2026-07-26). *Cross-check.*

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-26 | Built from AIP Morocco (ONDA); K Global fields from live VAMSYS; 4-page pack. |
