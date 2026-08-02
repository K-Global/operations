# UUEE — Sheremetyevo · Arrival Page

**UUEE / SVO** · Khimki, Moscow Oblast, Russia · Europe
**Version** v0.1 · **Updated** 2026-07-26 · **Status** Draft

> **Read-me:** Tactical arrival aid for the sim, not a chart. Companion to the [UUEE Briefing](index.md), [Dispatch](dispatch.md) and [Departure](departure.md) pages. STARs/approaches are listed **by name only or flagged not-yet-confirmed** — fly the charted current-AIRAC version; minima shown are pointers. Static data only, built from public sources (Russian AIP verification pending 🟧 throughout). Open 🟧 items are in §Open items. Flag legend 🟥 restriction/hazard · 🟧 caution/unverified · 🟩 normal.

> 🟥 **Network status — standby/reference only.** UUEE is not currently part of the active K Global route network. This page is a standby/reference entry, not current tactical guidance. Current overflight/operating constraints are not tracked here.

---

## 1. Snapshot

| Field | Value |
|---|---|
| Usual landing runway(s) | Not published / verify 🟧 |
| Usual approach | ILS reported on the parallel runways; sub-category not confirmed 🟧 |
| Config logic | Not published / verify 🟧 |
| Transition level | Not published / verify 🟧 |
| LVP trigger | Not published / verify — severe winter weather (§Briefing §14) makes low-vis events plausible in season 🟧 |
| Missed-approach driver | Terrain is not the driver (flat lowland); airspace/traffic in the dense Moscow TMA would be the operative concern |

---

## 2. STAR / transition selection

- **STARs (names only — verify current AIRAC):** Not confirmed in reachable research pass — pull the current-AIRAC STAR list at planning. 🟧
- **Selection by arrival direction / runway:** Not published / verify. 🟧
- **Transition to approach:** Not published / verify. 🟧
- **Speed / flow constraints on the STAR:** Not published / verify. 🟧

---

## 3. Descent & energy plan

- **Top-of-descent trigger:** Not published / verify — standard descent-profile planning pending chart verification. 🟧
- **Speed control:** Assume standard ICAO 250 KIAS below FL100 pending chart verification. 🟧
- **Altitude constraints:** Not published / verify. 🟧
- **Energy traps:** Not published / verify; winter weather events (icing, contamination, reduced visibility) are the plausible seasonal energy-management driver by analogy with regional climatology. 🟧

---

## 4. Approach selection by runway

*Names only — verify minima on current AIRAC charts.*

| RWY | Approach (name) | LVP / CAT note | Minima pointer (verify AIRAC) |
|---|---|---|---|
| 06L/06C/06R/24L/24C/24R | ILS reported, name/ident not confirmed 🟧 | CAT sub-category not confirmed 🟧 | Not published / verify |

- **LVP triggers:** Not published / verify — winter fog/inversion events are a plausible regional risk (§Briefing §14), not field-specifically confirmed. 🟧

---

## 5. Approach hazards (terrain / CFIT / specific threats)

- **CFIT / terrain:** 🟩 None identified. Flat Moscow-region lowland at approximately 630 ft AMSL — no close-in high terrain relevant to any arrival path.
- **Specific threats:** 🟧 Reported dependent (non-independent) triple-parallel operation (§Briefing §3.2) — tier-4, unconfirmed; if accurate, this would constrain simultaneous arrival streams across the three parallels.
- **Airspace / traffic:** 🟧 Dense Moscow terminal area; no dedicated Moscow FIR brief exists in this library — see [Europe airspace placeholder](../../../../airspace/europe.md).

---

## 6. Missed approach watch-items

- **Terrain-driven MAP notes:** Terrain is not the driver (flat lowland) — fly the published MAP and verify climb-gradient/turn on the current chart.
- **Re-sequencing environment:** Not published / verify — a dense Moscow TMA and reported dependent-parallel operating mode would plausibly extend re-sequencing time if this field is ever reactivated. 🟧
- **Go-around traps:** Not published / verify. 🟧

---

## 7. Landing runway / LDA & braking / vacate

- **LDA by runway:** Not published — only physical runway lengths obtained (3,200–3,700 m); declared distances not confirmed. 🟧
- **Braking / vacate:** Not published / verify. 🟧
- **Runway-excursion watch:** 🟧 Winter contamination (snow/ice) is the plausible seasonal risk by analogy with regional climatology; not field-specifically confirmed.

---

## 8. Taxi-in routing to terminal & hot spots

- **Typical taxi-in by runway → terminal:** Not published / verify. 🟧
- **Hot spots / tight taxiways:** Not published / verify — no field-specific data obtained. 🟧
- **Stand/gate notes:** See [Dispatch §3](dispatch.md) — not currently an active destination.

---

## 9. Arrival frequency sequence

- **Sequence:** **Radar 118.1/122.7 → Tower 120.7/131.5 → Ground 119.0/121.8/122.9 (by taxiway zone) → Apron 121.9/123.6/130.35/134.55 (by terminal zone).** Take the assigned frequency and confirm current chart. (Frequencies from Briefing §8, tier-4 sourced.) 🟧
- **Approach/Departure control:** Sheremetyevo Radar (§Briefing §8); Moscow FIR/UIR (UUWV) en route — no dedicated FIR brief exists in this library. 🟧

---

## 10. Gotchas

- 🟥 **Field is not currently served** — this page is reference only; do not use for live tactical planning without a full current-AIRAC and current-AIP rebuild.
- **Runway designators have already shifted once** (historical "07/25" series → current "06/24" series) — treat any older chart/procedure referencing "07/25" as outdated.
- Reported **dependent-only parallel-runway operation** — unconfirmed, verify current AIP before relying on it.
- **Severe winter weather** (snow, ice, sub-zero temperatures, possible fog/inversion events) is a standing seasonal factor — brief accordingly if this field is ever operationally relevant.

---

## Open items (🟧 — confirm against AIP / current AIRAC)

- Current-AIRAC STAR names and approach minima per runway.
- ILS/navaid ident, frequency, CAT sub-category.
- LDA/declared-distance table.
- Taxi-in routing and hot-spot detail.
- Independent-vs-dependent parallel-approach operating mode.

> **Live data — pull at planning:** wx/METAR/TAF/TREND, NOTAM (runway/approach/navaid/lighting), ATIS config, current overflight/operating-restriction bulletins for Russian airspace. Not stored in this durable file.

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim charts inform content but are not listed here.*

- OurAirports — https://ourairports.com/airports/UUEE/frequencies.html , /runways.html (retrieved 2026-07-26).
- FlightPlanDatabase — "UUEE" — https://flightplandatabase.com/airport/UUEE (retrieved 2026-07-26). *Parallel-runway operating-mode note.*

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-26 | Built from public aeronautical data (AIP verification pending); K Global fields from live VAMSYS; 4-page pack. |
