# GFLL — Freetown Intl · Arrival Page

**GFLL / FNA** · Lungi, Sierra Leone (serves Freetown, across the estuary) · Africa
**Version** v0.1 · **Updated** 2026-07-26 · **Status** Draft — provisional

> **Read-me:** Tactical arrival aid for the sim, not a chart. Companion to the [GFLL Briefing](index.md), [Dispatch](dispatch.md) and [Departure](departure.md) pages. STARs/approaches are listed **by name only** — fly the charted current-AIRAC version; minima shown are pointers, always verify on the current chart. Static data only; live wx/NOTAM are pulled at planning. Open 🟧 items are in §Open items. Flag legend 🟥 restriction/hazard · 🟧 caution/unverified · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| Usual landing runway(s) | 12 or 30 — single runway, wind-selected 🟧 |
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
| 12 | Not confirmed 🟧 | Not confirmed 🟧 | On-field VOR-DME (LGI, 115.50) and dual NDB suggest conventional approach capability — verify current chart |
| 30 | Not confirmed 🟧 | Not confirmed 🟧 | Same as above |

---

## 5. Approach hazards (terrain / CFIT / specific threats)

- **CFIT / terrain:** 🟩 None on the airport side — flat, low-lying Lungi peninsula (see [Briefing](index.md) §3.1). The Freetown-peninsula highlands lie across the estuary to the south, well clear of the field's own approach paths.
- **Specific threats:** No offset/converging-approach or closely-spaced-parallel considerations (single runway); wake-turbulence spacing behind heavy widebody arrivals is the standard generic consideration.
- **Airspace / traffic:** Sole international gateway for Sierra Leone; control type not independently confirmed — assessed procedural-leaning per the **Roberts (GLRB) FIR** (see [Briefing](index.md) §3.2 and the [Africa Airspace Briefing](../../../../airspace/africa.md)).

---

## 6. Missed approach watch-items

- **Terrain-driven MAP notes:** None — terrain is a non-factor on the airport side.
- **Re-sequencing environment:** Single runway — a missed approach re-sequences behind following traffic with no parallel-runway alternative; expect vectoring/holding per ATC instruction.
- **Go-around traps:** None field-specific identified.

---

## 7. Landing runway / LDA & braking / vacate

- **LDA by runway:** ≈3,200 m each direction — no displaced threshold identified in reachable sources (see [Briefing](index.md) §7). 🟧 Not AIP-confirmed.
- **Braking / vacate:** Rapid-exit taxiway layout not confirmed. 🟧
- **Runway-excursion watch:** 🟧 No excursion history was found for this field in reachable sources — standard wet-runway braking-action discipline applies, particularly during the Jun–Oct monsoon season (heaviest rainfall of the three West-African fields covered this pass).

---

## 8. Taxi-in routing to terminal & hot spots

- **Typical taxi-in by runway → terminal:** Not confirmed — confirm with Ground on the day; the new (March 2023) terminal's taxiway connections are not individually detailed in reachable sources.
- **Hot spots / tight taxiways:** None identified in reachable sources — not confirmed absent (cross-ref [Briefing](index.md) §13). 🟧
- **Stand/gate notes:** Cross-ref [Dispatch](dispatch.md) §3 — stand configuration not confirmed this pass.

---

## 9. Arrival frequency sequence

- **Sequence:** Approach (119.1) → Tower (118.1) → Ground (121.9) `[OurAirports, tier-4]` — reference [Briefing](index.md) §8; confirm current AIRAC.
- **Approach/Departure control:** Single combined Approach frequency per reachable tier-4 data; not independently AIP-confirmed. 🟧

---

## 10. Gotchas

- **Single-runway environment** — no parallel-runway option if a go-around or ground stop is required; expect holding/re-sequencing.
- **No confirmed precision approach (ILS)** — on-field VOR-DME/NDB exist, but ILS presence is not confirmed; verify current AIRAC before planning a low-visibility arrival.
- Once on the ground, remember **the terminal is not adjacent to Freetown city** — any passenger connecting onward into Freetown itself needs ferry/water-taxi/road transfer time, not a simple landside walk (see [Dispatch](dispatch.md) §2).

---

## Open items (🟧 — confirm against AIP / current AIRAC)

- Approach names and minima per runway; STAR names; transition level; LVP trigger conditions.
- ILS/precision-approach presence — on-field VOR-DME/NDB confirmed, ILS not confirmed (see [Briefing](index.md) §9/§18).
- Taxi-in routing and any taxiway hot spots in the new (2023) terminal layout.
- Rapid-exit taxiway layout / vacate points.

> **Live data — pull at planning:** wx/METAR/TAF/TREND, NOTAM (runway/approach/navaid/lighting), ATIS config, ground-delay/flow status. Not stored in this durable file.

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim charts inform content but are not listed here.*

- OurAirports — https://ourairports.com/airports/GFLL/runways.html , /frequencies.html , /closest-navaids.html (retrieved 2026-07-26). *Runway, frequency, navaid data — tier-4.*
- Wikipedia — "Freetown International Airport" — https://en.wikipedia.org/wiki/Freetown_International_Airport (retrieved 2026-07-26).

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-26 | Built from national AIP; K Global fields from live VAMSYS; 4-page pack. |
