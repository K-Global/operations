# GOBD — Blaise Diagne Intl · Arrival Page

**GOBD / DSS** · Diass, Thiès Region (serves Dakar), Senegal · Africa
**Version** v0.1 · **Updated** 2026-07-26 · **Status** Draft — provisional

> **Read-me:** Tactical arrival aid for the sim, not a chart. Companion to the [GOBD Briefing](index.md), [Dispatch](dispatch.md) and [Departure](departure.md) pages. STARs/approaches are listed **by name only** — fly the charted current-AIRAC version; minima shown are pointers, always verify on the current chart. Static data only; live wx/NOTAM are pulled at planning. Open 🟧 items are in §Open items. Flag legend 🟥 restriction/hazard · 🟧 caution/unverified · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| Usual landing runway(s) | 01 or 19 — single runway, wind-selected 🟧 |
| Usual approach | Not confirmed 🟧 |
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
| 01 | Not confirmed 🟧 | Not confirmed 🟧 | Verify current chart |
| 19 | Not confirmed 🟧 | Not confirmed 🟧 | Verify current chart |

---

## 5. Approach hazards (terrain / CFIT / specific threats)

- **CFIT / terrain:** 🟩 None — flat coastal Cap-Vert/Thiès plain, no close-in high terrain (see [Briefing](index.md) §3.1).
- **Specific threats:** No offset/converging-approach or closely-spaced-parallel considerations (single runway); wake-turbulence spacing behind heavy widebody arrivals is the standard generic consideration.
- **Airspace / traffic:** Major West-African international gateway; control type (radar vs procedural) not independently confirmed — see [Briefing](index.md) §3.2 and the [Africa Airspace Briefing](../../../../airspace/africa.md).

---

## 6. Missed approach watch-items

- **Terrain-driven MAP notes:** None — terrain is a non-factor at this field.
- **Re-sequencing environment:** Single runway — a missed approach re-sequences behind following traffic with no parallel-runway alternative; expect vectoring/holding per ATC instruction.
- **Go-around traps:** None field-specific identified.

---

## 7. Landing runway / LDA & braking / vacate

- **LDA by runway:** ≈3,380 m in each direction (3,500 m physical runway less the 120 m displaced threshold) — **not AIP-confirmed**, treat as an estimate pending the official declared-distance table (see [Briefing](index.md) §7/§18). 🟧
- **Braking / vacate:** Rapid-exit taxiway layout not confirmed. 🟧
- **Runway-excursion watch:** 🟥 A rejected-takeoff/runway-excursion accident occurred at this field on 9 May 2024; while that event was a departure-phase RTO rather than a landing overrun, it underscores the value of conservative braking-action assumptions and full awareness of the displaced-threshold LDA reduction, particularly in wet monsoon-season conditions (Jun–Oct).

---

## 8. Taxi-in routing to terminal & hot spots

- **Typical taxi-in by runway → terminal:** Not confirmed — confirm with Ground on the day.
- **Hot spots / tight taxiways:** None identified in reachable sources — not confirmed absent (cross-ref [Briefing](index.md) §13). 🟧
- **Stand/gate notes:** Cross-ref [Dispatch](dispatch.md) §3 — stand configuration not confirmed this pass.

---

## 9. Arrival frequency sequence

- **Sequence:** Arrival/Approach (120.5) → Tower (118.8) → Ground `[OurAirports, tier-4]` — reference [Briefing](index.md) §8; confirm current AIRAC.
- **Approach/Departure control:** Combined Arrival/Approach frequency (120.5) per reachable tier-4 data; not independently AIP-confirmed. 🟧

---

## 10. Gotchas

- **Single-runway environment** — no parallel-runway option if a go-around or ground stop is required; expect holding/re-sequencing.
- **Displaced-threshold LDA** — confirm the correct in-use landing distance rather than assuming the full 3,500 m physical length.
- **No confirmed on-field precision-approach navaid** in reachable tier-4 sources (see [Briefing](index.md) §9/§18) — verify approach/navaid availability on the current AIRAC chart before planning a low-visibility arrival.

---

## Open items (🟧 — confirm against AIP / current AIRAC)

- Approach names and minima per runway; STAR names; transition level; LVP trigger conditions.
- On-field navaid/ILS infrastructure — not confirmed (see [Briefing](index.md) §18).
- Taxi-in routing and any taxiway hot spots.
- Rapid-exit taxiway layout / vacate points.

> **Live data — pull at planning:** wx/METAR/TAF/TREND, NOTAM (runway/approach/navaid/lighting), ATIS config, ground-delay/flow status. Not stored in this durable file.

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim charts inform content but are not listed here.*

- OurAirports — https://ourairports.com/airports/GOBD/runways.html , /frequencies.html , /closest-navaids.html (retrieved 2026-07-26). *Runway, frequency, navaid data — tier-4.*
- Wikipedia — "Blaise Diagne International Airport" — https://en.wikipedia.org/wiki/Blaise_Diagne_International_Airport (retrieved 2026-07-26).

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-26 | Built from national AIP; K Global fields from live VAMSYS; 4-page pack. |
