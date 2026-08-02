# MUHA — Jose Marti Intl · Arrival Page

**MUHA / HAV** · Havana, Cuba · North America
**Version** v0.1 · **Updated** 2026-07-26 · **Status** Draft

> **Read-me:** Tactical arrival aid for the sim, not a chart. Companion to the [MUHA Briefing](index.md), [Dispatch](dispatch.md) and [Departure](departure.md) pages. STARs/approaches are listed **by name only where confirmed, or flagged not-yet-confirmed** — fly the charted current-AIRAC version; minima shown are pointers, always verify on the current chart. Static data only; live wx/NOTAM are pulled at planning. The primary AIP Cuba package was not reachable this build — figures here are tier-4 or VATSIM-operational-cross-check sourced and flagged accordingly. Open 🟧 items are in §Open items. Flag legend 🟥 restriction/hazard · 🟧 caution/unverified · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| Usual landing runway(s) | Not published / verify 🟧 — general Cuba climatology (prevailing easterly trade winds) would tend to favour RWY 06 |
| Usual approach | ILS preferred on RWY 06 when available; RNP/VOR only on RWY 24 (no ILS) |
| Config logic | Wind-driven (assumed); not confirmed 🟧 |
| Transition level | By QNH; transition altitude 3,000 ft per a VATSIM operational cross-check — not confirmed against the primary AIP 🟧 |
| LVP trigger | Not published / verify 🟧 — no CAT II/III infrastructure confirmed at this field |
| Missed-approach driver | Non-precision-approach margin on RWY 24 and single-runway re-sequencing — not terrain |

---

## 2. STAR / transition selection

- **STARs (names only — verify current AIRAC):** Not confirmed in reachable sources — pull the current-AIRAC STAR list at planning. 🟧
- **Selection by arrival direction / runway:** Not published / verify 🟧 — general climatology (prevailing easterly trade winds) would tend to favour RWY 06 for arrivals.
- **Transition to approach:** Not confirmed in reachable sources. 🟧
- **Speed / flow constraints on the STAR:** 250 KIAS below FL100 (standard ICAO norm per a VATSIM operational cross-check). 🟧

---

## 3. Descent & energy plan

- **Top-of-descent trigger:** Standard descent-profile planning; no field-specific published figure identified in reachable sources.
- **Speed control:** 250 KIAS below FL100 (standard norm) — confirm current chart.
- **Altitude constraints:** Not published / verify 🟧
- **Energy traps:** The RWY 24 non-precision-only approach (no reciprocal ILS) is the main "which-runway" energy consideration in marginal weather; single-runway re-sequencing after a go-around is the other, given there is no parallel runway to absorb a missed approach.

---

## 4. Approach selection by runway

*Names only — verify minima on current AIRAC charts.*

| RWY | Approach (name) | LVP / CAT note | Minima pointer (verify AIRAC) |
|---|---|---|---|
| 06 | ILS (IHA), RNP, VOR | No CAT II/III infrastructure confirmed 🟧 | verify current chart |
| 24 | RNP, VOR | **No ILS** — non-precision only 🟥 | verify current chart |

- **LVP triggers:** Not published / verify 🟧 — no CAT II/III infrastructure confirmed at this field.

---

## 5. Approach hazards (terrain / CFIT / specific threats)

- **CFIT / terrain:** 🟩 None identified — flat coastal plain; low MSA sectors corroborated via a NOTAM cross-check citing the primary AIP (see [Briefing §3.1](index.md)).
- **Specific threats:** 🟥 RWY 24 has **no precision approach** — a marginal-ceiling event with wind favouring RWY 24 creates a genuine non-precision-minima exposure, and the single-runway field removes any config-change escape available at a multi-runway airport.
- **Airspace / traffic:** 🟧 Moderate international/domestic/general-aviation mix under Havana Terminal; procedural-vs-radar control status not confirmed (see [Briefing §3.2](index.md)).

---

## 6. Missed approach watch-items

- **Terrain-driven MAP notes:** Terrain is not the driver — flat coastal plain; fly the published missed approach and verify climb-gradient/turn on the current chart.
- **Re-sequencing environment:** Single-runway field — a go-around re-enters the same traffic stream with no parallel-runway relief; expect vectoring/re-sequencing behind other arrivals and departures on the one runway.
- **Go-around traps:** A RWY 24 non-precision go-around in marginal weather is the standout risk given there is no ILS on that runway end.

---

## 7. Landing runway / LDA & braking / vacate

- **LDA by runway:** 4,000 m (06 or 24, full length assumed) — not independently confirmed from a primary declared-distance table (see [Briefing §7](index.md)). 🟧
- **Braking / vacate:** Not published / verify 🟧
- **Runway-excursion watch:** 🟧 Wet-season/hurricane-season heavy rainfall is a braking-action consideration; no displaced threshold identified in reachable sources.

---

## 8. Taxi-in routing to terminal & hot spots

- **Typical taxi-in by runway → terminal:** Per a VATSIM operational cross-check, arriving traffic taxis via the reverse of the standard out-routes (see [Departure §2](departure.md)) into the assigned apron; VAMSYS mirror gives a planning taxi-in time of **12 min** `[VAMSYS mirror 2026-07-26]`.
- **Hot spots / tight taxiways:** Not published / verify 🟧
- **Stand/gate notes:** See [Dispatch §3](dispatch.md) — Terminal 3 (Apron 3) international gates plus remote stands.

---

## 9. Arrival frequency sequence

- **Sequence:** **Havana Terminal/Approach 120.300 → Marti Tower 118.100 → Marti Ground 121.900.** Take the assigned frequency and confirm current chart. (Frequencies from [Briefing §8](index.md).) 🟧
- **Approach/Departure control:** **Havana Terminal** (approach) and **Havana Center** (en route) within the **Habana FIR (MUFH)**; exact sector/frequency assignment is AIRAC-dependent and not independently confirmed. 🟧

---

## 10. Gotchas

- **Only one runway (06/24)** — no crosswind or config escape if wind/weather disfavours the active runway.
- **RWY 24 has no ILS** — a marginal-ceiling arrival should expect RWY 06 preference.
- **Atlantic hurricane season (Jun–Nov, peak Aug–Oct)** can force short-notice diversion — hold a live alternate (MKJS or TJSJ) (see [Briefing §16](index.md)).
- **Real-world overflight/entry-permit administration for the Habana FIR** is a standing planning layer distinct from the airport's physical characteristics — see [Briefing §5](index.md).

---

## Open items (🟧 — confirm against AIP / current AIRAC)

- Current-AIRAC STAR names and exact approach minima per runway.
- Transition altitude (3,000 ft) and TL-setting logic — VATSIM SOP-sourced, not primary-AIP-confirmed.
- Rapid-exit taxiway/vacate detail and hot-spot/tight-taxiway information.
- Approach/departure-control sector and frequency assignment (AIRAC-dependent).
- Primary AIP Cuba (IACC) AD 2 MUHA package was not reachable this build — see [Briefing §18](index.md) for the full list of unverified figures.

> **Live data — pull at planning:** wx/METAR/TAF/TREND, NOTAM (runway/approach/navaid/lighting — single-runway field), ATIS config/wind trend, tropical-cyclone/TFR status for the Habana FIR. Not stored in this durable file.

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim charts inform content but are not listed here.*

- Bigorre.org — MUHA NOTAM feed citing AIP/Cuba AIRAC AMDT 2-25 (AD 2 MUHA MSA table reference) — https://www.bigorre.org/aero/notam/muha/en (retrieved 2026-07-26).
- VATCAR (VATSIM Caribbean Division) — Havana FIR, "José Martí Int'l Airport (MUHA) Pilot Briefing," v1.1, 2025-02-28 — https://havana.vatcar.net/wp-content/uploads/2025/02/MUHA-Pilot-Briefing.pdf (retrieved 2026-07-26). *Network-sim SOP, not regulatory — approach/runway and taxi-in cross-check.*
- See [MUHA — Briefing](index.md) for the full source list.

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-26 | Built from national/territory AIP; K Global fields from live VAMSYS; 4-page pack. |
