# SBFZ — Pinto Martins Intl · Arrival Page

**SBFZ / FOR** · Fortaleza, Ceará, Brazil · South America

**Version** v0.1 · **Updated** 2026-07-26 · **Status** Draft

> **Read-me:** Tactical arrival aid for the sim, not a chart. Companion to the [SBFZ Briefing](index.md), Dispatch and Departure pages. STARs/approaches are listed **by name only** — fly the charted current-AIRAC version; minima shown are pointers, always verify on the current chart. Static data only; live wx/NOTAM are pulled at planning. Open 🟧 items are in §Open items. Flag legend 🟥 restriction/hazard · 🟧 caution/unverified · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| Usual landing runway(s) | Not published — single runway 13/31, wind-dependent |
| Usual approach | Not confirmed this pass — verify current AIRAC 🟧 |
| Config logic | Wind-driven (single runway) |
| Transition level | Not published / verify 🟧 |
| LVP trigger | Not published / verify 🟧 |
| Missed-approach driver | Terrain (high ground S/SW) — see §5/§6 |

---

## 2. STAR / transition selection

- **STARs (names only):** Not confirmed this pass — pull the current-AIRAC STAR list at planning. 🟧
- **Selection by arrival direction / runway:** Not published — single runway, direction by wind.
- **Transition to approach:** Not confirmed.
- **Speed / flow constraints on the STAR:** Standard 250 KIAS <FL100 assumed; verify chart.

---

## 3. Descent & energy plan

- **Top-of-descent trigger:** Standard rule-of-thumb planning; no field-specific override identified.
- **Speed control:** Standard ICAO speed schedule assumed.
- **Altitude constraints:** Not published — verify current chart, particularly on any arrival routing from the S/SW given the terrain noted below.
- **Energy traps:** None specific identified beyond standard high-close-in-terrain awareness on southerly arrivals (§5).

---

## 4. Approach selection by runway

*Names only — verify minima on current AIRAC charts.*

| RWY | Approach (name) | LVP / CAT note | Minima pointer (verify AIRAC) |
|---|---|---|---|
| 13 | Not confirmed this pass 🟧 | Not confirmed | Verify current chart |
| 31 | Not confirmed this pass 🟧 | Not confirmed | Verify current chart |

---

## 5. Approach hazards (terrain / CFIT / specific threats)

- **CFIT / terrain:** 🟧 High ground rises inland to the **S/SW of the field (Maranguape/Baturité massif)**, within roughly 25–40 NM — not chart-quantified this pass. This sector was implicated in a fatal **1982 CFIT accident** (a VASP Boeing 727 descended below a safe profile ~25 km south of the airport on approach, 137 fatalities) and a **1998 accident** (commuter aircraft struck a house 2 km short of the runway). Respect MSA/MORA rigorously on any approach transiting this sector — cross-ref [SBFZ Briefing](index.md) §3.1.
- **Specific threats:** None else identified — single runway, no closely-spaced parallels or offset-approach concern.
- **Airspace / traffic:** Recife FIR (SBRE) continental sector, standard domestic-Brazil control — cross-ref [South America — Airspace Briefing](../../../../airspace/south-america.md) and [SBFZ Briefing](index.md) §3.2.

---

## 6. Missed approach watch-items

- **Terrain-driven MAP notes:** Given the S/SW high ground, a missed approach off RWY 31 should follow the charted missed-approach procedure precisely — not chart-verified this pass. 🟧
- **Re-sequencing environment:** Single-runway field; expect standard re-sequencing into Tower's pattern.
- **Go-around traps:** None else identified.

---

## 7. Landing runway / LDA & braking / vacate

- **LDA by runway:** 2,755 m both directions (no displaced threshold reported) — cross-ref [SBFZ Briefing](index.md) §7. Confirm current AIP figure before treating as audit-grade. 🟧
- **Braking / vacate:** Not confirmed — rapid-exit taxiway data not obtained this pass.
- **Runway-excursion watch:** Rainy-season (Feb–Jun) wet-runway braking-action degradation — not quantified. 🟧

---

## 8. Taxi-in routing to terminal & hot spots

- **Typical taxi-in by runway → terminal:** Not confirmed — single terminal apron; confirm with Ground on the day.
- **Hot spots / tight taxiways:** None identified in reachable sources. 🟧
- **Stand/gate notes:** Cross-ref [SBFZ Dispatch](dispatch.md) §3.

---

## 9. Arrival frequency sequence

- **Sequence:** Approach (133.000) → Tower (129.000) → Ground (121.950) `[OurAirports, tier-4, undated]` 🟧 — cross-ref [SBFZ Briefing](index.md) §8.
- **Approach/Departure control:** Fortaleza Approach — sector/procedure-specific frequencies not confirmed this pass. 🟧

---

## 10. Gotchas

- High ground inland to the S/SW — historical CFIT precedent (1982); do not cut the profile short on a southerly arrival.
- Single runway — no reciprocal-direction flexibility; factor into go-around/diversion planning.
- K Global VAMSYS category is unset for this field — confirm before crewing/scheduling.

---

## Open items (🟧 — confirm against AIP / current AIRAC)

- Approach names/minima, STAR names, transition level, LVP trigger — none confirmed from a primary source this pass.
- Exact bearing/distance/elevation of the S/SW high ground relative to the final approach course — described qualitatively from a 1982 accident report only.

> **Live data — pull at planning:** wx/METAR/TAF/TREND, NOTAM (runway/approach/navaid/lighting), ATIS config, ground-delay/flow status. Not stored in this durable file.

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim charts inform content but are not listed here.*

- OurAirports — https://ourairports.com/airports/SBFZ/frequencies.html , /runways.html , /closest-navaids.html (retrieved 2026-07-26).
- Wikipedia — "Fortaleza Airport" — https://en.wikipedia.org/wiki/Pinto_Martins_International_Airport (retrieved 2026-07-26). *1982/1998 accident context for §5/§6.*

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-26 | Built from AIP Brasil (DECEA); K Global fields from live VAMSYS; 4-page pack. |
