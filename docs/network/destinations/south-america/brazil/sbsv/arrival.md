# SBSV — Dep L E Magalhaes Intl · Arrival Page

**SBSV / SSA** · Salvador, Bahia, Brazil · South America

**Version** v0.1 · **Updated** 2026-07-26 · **Status** Draft

> **Read-me:** Tactical arrival aid for the sim, not a chart. Companion to the [SBSV Briefing](index.md), Dispatch and Departure pages. STARs/approaches are listed **by name only** — fly the charted current-AIRAC version; minima shown are pointers, always verify on the current chart. Static data only; live wx/NOTAM are pulled at planning. Open 🟧 items are in §Open items. Flag legend 🟥 restriction/hazard · 🟧 caution/unverified · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| Usual landing runway(s) | Not published — 10/28 primary, 17/35 secondary/crosswind; wind-dependent |
| Usual approach | Not confirmed this pass — verify current AIRAC 🟧 |
| Config logic | Wind-driven; two intersecting runways |
| Transition level | Not published / verify 🟧 |
| LVP trigger | Not published / verify 🟧 |
| Missed-approach driver | None terrain-driven identified (flat coastal field) — traffic/airspace only |

---

## 2. STAR / transition selection

- **STARs (names only):** Not confirmed this pass — pull the current-AIRAC STAR list at planning. 🟧
- **Selection by arrival direction / runway:** Not published — two-runway field, direction by wind.
- **Transition to approach:** Not confirmed.
- **Speed / flow constraints on the STAR:** Standard 250 KIAS <FL100 assumed; verify chart.

---

## 3. Descent & energy plan

- **Top-of-descent trigger:** Standard rule-of-thumb planning; no field-specific override identified.
- **Speed control:** Standard ICAO speed schedule assumed.
- **Altitude constraints:** Not published — verify current chart.
- **Energy traps:** None specific identified — flat coastal field, no terrain-driven energy trap found this pass.

---

## 4. Approach selection by runway

*Names only — verify minima on current AIRAC charts.*

| RWY | Approach (name) | LVP / CAT note | Minima pointer (verify AIRAC) |
|---|---|---|---|
| 10 | Not confirmed this pass 🟧 | Not confirmed | Verify current chart |
| 28 | Not confirmed this pass 🟧 | Not confirmed | Verify current chart |
| 17 | Not confirmed this pass 🟧 | Not confirmed | Verify current chart — short runway, secondary |
| 35 | Not confirmed this pass 🟧 | Not confirmed | Verify current chart — short runway, secondary |

---

## 5. Approach hazards (terrain / CFIT / specific threats)

- **CFIT / terrain:** 🟩 No terrain-related accident history or chart obstacle identified this pass — the field sits on flat coastal ground among sand dunes and native vegetation. Verify MSA/MORA on the current chart as routine practice; cross-ref [SBSV Briefing](index.md) §3.1.
- **Specific threats:** Two intersecting runways (10/28 and 17/35) — verify runway-crossing/dependent-operations procedures on the current chart; no closely-spaced-parallel concern (single pair of intersecting strips, not parallels).
- **Airspace / traffic:** FIR jurisdiction at this latitude carried per task guidance as Recife FIR (SBRE) but **not independently confirmed** — cross-ref [South America — Airspace Briefing](../../../../airspace/south-america.md) and [SBSV Briefing](index.md) §3.2/§18.

---

## 6. Missed approach watch-items

- **Terrain-driven MAP notes:** None identified — flat coastal field.
- **Re-sequencing environment:** Two-runway field; expect standard re-sequencing into Tower's pattern; note co-location with Salvador Air Force Base.
- **Go-around traps:** None specific identified this pass.

---

## 7. Landing runway / LDA & braking / vacate

- **LDA by runway:** 3,005 m (10/28), 1,520 m (17/35) — no displaced threshold reported for either; cross-ref [SBSV Briefing](index.md) §7. Confirm current AIP figures before treating as audit-grade. 🟧
- **Braking / vacate:** Not confirmed — rapid-exit taxiway data not obtained this pass.
- **Runway-excursion watch:** Wetter-season (Apr–Jul) wet-runway braking-action degradation — not quantified; 17/35 carries less length margin for a contaminated-runway scenario. 🟧

---

## 8. Taxi-in routing to terminal & hot spots

- **Typical taxi-in by runway → terminal:** Not confirmed — confirm with Ground on the day.
- **Hot spots / tight taxiways:** None identified in reachable sources. 🟧
- **Stand/gate notes:** Cross-ref [SBSV Dispatch](dispatch.md) §3.

---

## 9. Arrival frequency sequence

- **Sequence:** Approach/"Salvador CON" (120.800) → Tower (118.300) → Ground (121.900) `[OurAirports, tier-4, undated]` 🟧 — cross-ref [SBSV Briefing](index.md) §8.
- **Approach/Departure control:** Salvador Approach — sector/procedure-specific frequencies not confirmed this pass. 🟧

---

## 10. Gotchas

- 17/35 is a short secondary runway (1,520 m) — do not expect it to be assigned for widebody equipment without confirmation of adequate LDA for the arriving type.
- Two intersecting (not parallel) runways — verify crossing/dependent-operations procedure on the current chart.
- K Global VAMSYS category is unset for this field — confirm before crewing/scheduling.

---

## Open items (🟧 — confirm against AIP / current AIRAC)

- Approach names/minima, STAR names, transition level, LVP trigger — none confirmed from a primary source this pass.
- FIR jurisdiction at Salvador's latitude (Recife vs. Brasília) — not independently confirmed, see [SBSV Briefing](index.md) §18.

> **Live data — pull at planning:** wx/METAR/TAF/TREND, NOTAM (runway/approach/navaid/lighting), ATIS config, ground-delay/flow status. Not stored in this durable file.

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim charts inform content but are not listed here.*

- OurAirports — https://ourairports.com/airports/SBSV/frequencies.html , /runways.html , /closest-navaids.html (retrieved 2026-07-26).
- Wikipedia — "Salvador Bahia Airport" — https://en.wikipedia.org/wiki/Deputado_Lu%C3%ADs_Eduardo_Magalh%C3%A3es_International_Airport (retrieved 2026-07-26).

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-26 | Built from AIP Brasil (DECEA); K Global fields from live VAMSYS; 4-page pack. |
