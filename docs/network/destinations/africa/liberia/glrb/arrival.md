# GLRB — Roberts Intl · Arrival Page

**GLRB / ROB** · Harbel, Margibi County (serves Monrovia), Liberia · Africa
**Version** v0.1 · **Updated** 2026-07-26 · **Status** Draft — provisional

> **Read-me:** Tactical arrival aid for the sim, not a chart. Companion to the [GLRB Briefing](index.md), [Dispatch](dispatch.md) and [Departure](departure.md) pages. STARs/approaches are listed **by name only** — fly the charted current-AIRAC version; minima shown are pointers, always verify on the current chart. Static data only; live wx/NOTAM are pulled at planning. Open 🟧 items are in §Open items. Flag legend 🟥 restriction/hazard · 🟧 caution/unverified · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| Usual landing runway(s) | 04 or 22 — single runway, wind-selected 🟧 |
| Usual approach | Not confirmed; on-field VOR-DME/NDB suggests conventional approach capability at minimum 🟧 |
| Config logic | Wind-driven only |
| Transition level | Not published / verify 🟧 |
| LVP trigger | Not published / verify 🟧 |
| Missed-approach driver | Traffic/sequencing (single runway) — not terrain |

---

## 2. STAR / transition selection

- **STARs (names only):** Not confirmed in reachable research pass — pull the current-AIRAC STAR list at planning. 🟧
- **Selection by arrival direction / runway:** Not confirmed.
- **Transition to approach:** Not confirmed.
- **Speed / flow constraints on the STAR:** Not confirmed — pointer only, verify chart.

---

## 3. Descent & energy plan

- **Top-of-descent trigger:** Not confirmed — standard planning assumption pending local data.
- **Speed control:** 250 KIAS below FL100 per ICAO norm — confirm no local override on current chart.
- **Altitude constraints:** Not confirmed — pointer only, verify chart.
- **Energy traps:** None field-specific identified; standard high-close-in/tailwind-descent discipline applies generically.

---

## 4. Approach selection by runway

*Names only — verify minima on current AIRAC charts.*

| RWY | Approach (name) | LVP / CAT note | Minima pointer (verify AIRAC) |
|---|---|---|---|
| 04 | Not confirmed 🟧 | Not confirmed 🟧 | On-field VOR-DME (ROB, 113.80) and dual NDB suggest conventional approach capability — verify current chart |
| 22 | Not confirmed 🟧 | Not confirmed 🟧 | Same as above; **mind the 366 m displaced threshold reducing usable landing distance on this end** |

---

## 5. Approach hazards (terrain / CFIT / specific threats)

- **CFIT / terrain:** 🟩 None — flat coastal plain near Harbel, Margibi County (see [Briefing](index.md) §3.1).
- **Specific threats:** 🟥 A historical accident on record for this field (5 March 1967, a Varig DC-8 on a mistaken approach missed the runway threshold by roughly 1,836 m, resulting in a fire and 51 fatalities) underscores the value of rigorous approach-awareness and go-around discipline in marginal-visibility conditions — no current infrastructure deficiency is implicated, but the event is worth briefing as a sharp historical reminder for this field. No offset/converging-approach or closely-spaced-parallel considerations apply (single runway).
- **Airspace / traffic:** Liberia's principal international gateway; control type not independently confirmed — assessed procedural-leaning per the **Roberts (GLRB) FIR**, whose ident is shared with this airport (see [Briefing](index.md) §3.2 and the [Africa Airspace Briefing](../../../../airspace/africa.md)).

---

## 6. Missed approach watch-items

- **Terrain-driven MAP notes:** None — terrain is a non-factor at this field.
- **Re-sequencing environment:** Single runway — a missed approach re-sequences behind following traffic with no parallel-runway alternative; expect vectoring/holding per ATC instruction.
- **Go-around traps:** None field-specific identified beyond standard low-visibility/threshold-awareness discipline (§5).

---

## 7. Landing runway / LDA & braking / vacate

- **LDA by runway:** ≈2,987 m on RWY 22 (3,353 m less the 366 m displaced threshold); ≈3,353 m on RWY 04 approaching over the full length — **confirm this direction-specific figure against the current AIP** before use (see [Briefing](index.md) §7). 🟧
- **Braking / vacate:** Rapid-exit taxiway layout not confirmed. 🟧
- **Runway-excursion watch:** 🟥 Historical precedent exists at this field (1989 rejected-takeoff overrun; 2012 landing-gear/brake damage attributed to then-poor pavement) — the runway has since been refurbished (2016–2019) but current condition is not independently confirmed. Maintain conservative braking-action assumptions, particularly in the heavy May–Oct wet season.

---

## 8. Taxi-in routing to terminal & hot spots

- **Typical taxi-in by runway → terminal:** Not confirmed — confirm with Ground on the day.
- **Hot spots / tight taxiways:** None identified in reachable sources — not confirmed absent (cross-ref [Briefing](index.md) §13). 🟧
- **Stand/gate notes:** Cross-ref [Dispatch](dispatch.md) §3 — stand configuration not confirmed this pass; note the adjacent UN-use airside buildings and VIP facility near the original terminal (situational awareness only, not an operational constraint).

---

## 9. Arrival frequency sequence

- **Sequence:** Approach (124.5, "Roberts Approach") → Tower (118.3, "Roberts Tower") → Ground (121.9) `[OurAirports, tier-4]` — reference [Briefing](index.md) §8; confirm current AIRAC.
- **Approach/Departure control:** Single combined Approach frequency per reachable tier-4 data; not independently AIP-confirmed. 🟧

---

## 10. Gotchas

- **Single-runway environment** — no parallel-runway option if a go-around or ground stop is required; expect holding/re-sequencing.
- **RWY 22 displaced threshold (366 m)** — do not assume symmetric landing distance between the two runway directions.
- **Historical mistaken-approach precedent (1967)** at this field is a sharp reminder to maintain positive threshold/runway identification, particularly in any reduced-visibility arrival.

---

## Open items (🟧 — confirm against AIP / current AIRAC)

- Approach names and minima per runway; STAR names; transition level; LVP trigger conditions.
- Direction-specific LDA confirmation (RWY 04 vs RWY 22) against the official declared-distance table.
- Taxi-in routing and any taxiway hot spots.
- Rapid-exit taxiway layout / vacate points.
- Current runway pavement condition/PCN post-refurbishment.

> **Live data — pull at planning:** wx/METAR/TAF/TREND, NOTAM (runway/approach/navaid/lighting), ATIS config, ground-delay/flow status. Not stored in this durable file.

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim charts inform content but are not listed here.*

- OurAirports — https://ourairports.com/airports/GLRB/runways.html , /frequencies.html , /closest-navaids.html (retrieved 2026-07-26). *Runway, frequency, navaid data — tier-4.*
- Wikipedia — "Roberts International Airport" — https://en.wikipedia.org/wiki/Roberts_International_Airport (retrieved 2026-07-26). *1967 Varig accident detail; renovation and runway-condition history.*

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-26 | Built from national AIP; K Global fields from live VAMSYS; 4-page pack. |
