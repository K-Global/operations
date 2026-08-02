# GMMX — Menara Intl · Arrival Page

**GMMX / RAK** · Marrakesh, Morocco · Africa
**Version** v0.1 · **Updated** 2026-07-26 · **Status** Draft

> **Read-me:** Tactical arrival aid for the sim, not a chart. Companion to the [GMMX Briefing](index.md), [Dispatch](dispatch.md) and [Departure](departure.md) pages. STARs/approaches are listed **by name only** — fly the charted current-AIRAC version; minima shown are pointers, always verify on the current chart. Static data only; live wx/NOTAM are pulled at planning. Open 🟧 items are in §Open items. Flag legend 🟥 restriction/hazard · 🟧 caution/unverified · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| Usual landing runway(s) | Not published / verify 🟧 — single runway 10/28, wind-dependent |
| Usual approach | ILS (CAT II reported present, ONDA/Wikipedia) — runway not confirmed 🟧 |
| Config logic | Wind-driven (only runway available) |
| Transition level | Not published / verify 🟧 |
| LVP trigger | Not published / verify 🟧 |
| Missed-approach driver | Terrain-aware — High Atlas range to the south, see [Briefing §3.1](index.md) |

---

## 2. STAR / transition selection

- **STARs (names only):** Not confirmed — verify current AIRAC. 🟧
- **Selection by arrival direction / runway:** Not published / verify 🟧
- **Transition to approach:** ILS reported present; RNAV-to-ILS transition detail not confirmed. 🟧
- **Speed / flow constraints on the STAR:** Not GMMX-specific-sourced this pass — apply standard 250 KIAS <FL100 (ICAO norm) pending chart confirmation.

---

## 3. Descent & energy plan

- **Top-of-descent trigger:** Not published / verify 🟧 — apply standard planning rule of thumb pending chart confirmation.
- **Speed control:** Standard 250 KIAS <FL100 (ICAO norm) assumed.
- **Altitude constraints:** Not published / verify 🟧
- **Energy traps:** Single-runway field with no alternate runway if a late runway-change or go-around is needed — plan energy conservatively. High Atlas terrain to the south (§5) removes any margin for a low, high-energy excursion off the standard track.

---

## 4. Approach selection by runway

*Names only — verify minima on current AIRAC charts.*

| RWY | Approach (name) | LVP / CAT note | Minima pointer (verify AIRAC) |
|---|---|---|---|
| 10/28 | ILS (CAT II reported, ONDA/Wikipedia) — runway assignment not confirmed | Sub-category/LVP trigger not confirmed 🟧 | Verify current chart |
| 10/28 | VOR/DME, NDB (names only, ONDA/Wikipedia) | — | Verify current chart |

---

## 5. Approach hazards (terrain / CFIT / specific threats)

- **CFIT / terrain:** 🟥 High Atlas range — Jebel Toubkal (4,167 m / 13,671 ft, North Africa's highest peak) — rises approximately 63 km (34 nm) south/south-southeast of Marrakesh; the field itself sits on the flat Haouz plain at 1,545 ft. Standard east–west RWY 10/28 approach and departure tracks run broadly parallel to the terrain front, but **any south-side vectoring, holding, or missed-approach turn must respect the current MSA sectors** — verify the area/approach chart. Cross-ref [Briefing §3.1](index.md).
- **Specific threats:** Single runway — no closely-spaced parallel or converging-approach complexity. Wake-turbulence and fog exposure not independently confirmed for GMMX this pass.
- **Airspace / traffic:** Confirmed radar approach control (MARRAKECH APP, [Briefing §8](index.md)); procedural-vs-radar classification and traffic density not independently confirmed. 🟧

---

## 6. Missed approach watch-items

- **Terrain-driven MAP notes:** Respect MSA on any southbound missed-approach track given the High Atlas terrain to the south — verify current chart gradient/turn constraints. 🟧
- **Re-sequencing environment:** Single-runway field — re-sequencing logic is straightforward (no parallel-runway complexity), but a go-around removes the only runway from use until resequenced.
- **Go-around traps:** Not published / verify 🟧

---

## 7. Landing runway / LDA & braking / vacate

- **LDA by runway:** RWY 10 ≈2,820 m (3,100 m − 280 m displaced threshold; derived from OurAirports' displacement figure, **not** an official declared-distance publication) 🟧; RWY 28 ≈3,100 m (no displacement reported this end; not officially published) 🟧 — cross-ref [Briefing §7](index.md).
- **Braking / vacate:** Not published / verify 🟧 — no rapid-exit taxiway data found in reachable sources.
- **Runway-excursion watch:** RWY 10's displaced threshold reduces available landing distance from that end — confirm current declared-distance figures before dispatch. No contamination or tailwind-tendency data found for this field. 🟧

---

## 8. Taxi-in routing to terminal & hot spots

- **Typical taxi-in by runway → terminal:** Not published / verify 🟧. VAMSYS taxi-in time of 6 min `[VAMSYS mirror 2026-07-26]` suggests a short, direct routing typical of a single-runway regional field.
- **Hot spots / tight taxiways:** None identified in reachable sources — cross-ref [Briefing §13](index.md). 🟧
- **Stand/gate notes:** Cross-ref [Dispatch §3](dispatch.md).

---

## 9. Arrival frequency sequence

- **Sequence:** **MARRAKECH APP** (119.70 / 120.10) → **MARRAKECH TWR** (118.10 / 118.70) → Ground (not published) — reference [Briefing §8](index.md).
- **Approach/Departure control:** MARRAKECH APP; sector-specific detail not confirmed — verify current chart. 🟧

---

## 10. Gotchas

- Single runway — a late runway-change or go-around removes the only landing surface from use until resequenced; no parallel-runway option.
- RWY 10's 280 m displaced threshold reduces landing distance from that end — do not plan against the full 3,100 m physical length landing on RWY 10.
- High Atlas terrain (Toubkal, 13,671 ft) lies ~34 nm S/SSE of the field — any non-standard southbound vector, hold, or go-around track must respect current MSA.
- An ILS (CAT II reported) is present at the field, but its runway assignment and current minima could not be confirmed from a reachable primary source this pass — verify fully on the current AIRAC chart before planning a low-visibility arrival.

---

## Open items (🟧 — confirm against AIP / current AIRAC)

- Primary AIP (ONDA eAIP) not reachable this pass — STAR list, transition level, LVP trigger, missed-approach gradient/turn constraints and full approach minima are all unconfirmed pending direct AIP access.
- ILS runway assignment, ident, frequency and sub-category not confirmed.
- Rapid-exit taxiway / vacate data not found.

> **Live data — pull at planning:** wx/METAR/TAF/TREND, NOTAM (runway/approach/navaid/lighting), ATIS config, ground-delay/flow status. Not stored in this durable file.

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim charts inform content but are not listed here. See the source register for the tier hierarchy.*

- OurAirports — https://ourairports.com/airports/GMMX/runways.html , /frequencies.html (retrieved 2026-07-26).
- SkyVector — https://skyvector.com/airport/GMMX (retrieved 2026-07-26). *Frequencies, runway heading, per-threshold elevation.*
- Wikipedia — "Marrakesh Menara Airport" — https://en.wikipedia.org/wiki/Menara_International_Airport (retrieved 2026-07-26). *ILS CAT II / VOR-DME-NDB description.*
- Wikipedia — "Toubkal" — https://en.wikipedia.org/wiki/Toubkal (retrieved 2026-07-26). *Terrain elevation/distance for §5 CFIT analysis.*
- Primary source attempted, not reachable: AIP Morocco (ONDA eAIP), AD 2 GMMX — https://siamaroc.onda.ma/eaip/ad/AD2GMMX.pdf (attempted 2026-07-26, not reachable via public web fetch this pass).

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-26 | Built from AIP Morocco (ONDA); K Global fields from live VAMSYS; 4-page pack. |
