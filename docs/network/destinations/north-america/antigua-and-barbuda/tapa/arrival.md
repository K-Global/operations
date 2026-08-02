# TAPA — V C Bird Intl · Arrival Page

**TAPA / ANU** · Osbourn, Saint George Parish, Antigua and Barbuda · North America
**Version** v0.1 · **Updated** 2026-07-26 · **Status** Draft — provisional, primary AIP not reachable this pass

> **Read-me:** Tactical arrival aid for the sim, not a chart. Companion to the [TAPA Briefing](index.md), [Dispatch](dispatch.md) and [Departure](departure.md) pages. STARs/approaches are listed **by name only** — fly the charted current-AIRAC version; minima shown are pointers, always verify on the current chart. Static data only; live wx/NOTAM are pulled at planning. Open 🟧 items are in §Open items. Flag legend 🟥 restriction/hazard · 🟧 caution/unverified · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| Usual landing runway(s) | Wind-dependent, RWY 07 or RWY 25 |
| Usual approach | RNAV / DME-ARC / VOR (procedural, non-radar) |
| Config logic | Wind-driven; no formal preferential-runway program identified |
| Transition level | By QNH; TL FL040 (tier-4) 🟧 |
| LVP trigger | No LVP/CAT II-III infrastructure identified — non-precision minima only 🟧 |
| Missed-approach driver | Non-radar procedural re-sequencing rather than terrain |

---

## 2. STAR / transition selection

- **STARs (names only — verify current AIRAC):** None identified — this is a non-radar procedural field; arrivals are flown via the DME-ARC/VOR transitions listed in §4 rather than a charted STAR. 🟧
- **Selection by arrival direction / runway:** Wind-driven runway selection; procedural reporting points feed each runway's approach (§4).
- **Transition to approach:** Procedural — no radar vectoring is available; pilots fly the published transition (DME arc or VOR radial inbound) to each approach.
- **Speed / flow constraints on the STAR:** Standard 250 KIAS below FL100 — verify any local constraint on the current chart.

---

## 3. Descent & energy plan

- **Top-of-descent trigger:** Standard descent-profile planning to meet the first procedural fix/altitude; the non-radar environment means less flexibility for a late/vectored descent adjustment than at a radar-equipped field — plan a conservative profile.
- **Speed control:** 250 KIAS below FL100 (standard); confirm any local constraint on the current chart.
- **Altitude constraints:** Fly the published procedural altitudes at each reporting point (§4) — no radar-assigned "descend when ready" flexibility should be assumed.
- **Energy traps:** A tier-4 source notes a **turbulence caution on the RWY 07 approach in east/south-east wind** — treat as an energy/stability trap requiring extra margin on that configuration. A late runway-configuration change (07↔25) driven by a wind shift is also a trap given the procedural (non-radar) re-sequencing environment.

---

## 4. Approach selection by runway

*Names only — verify minima on current AIRAC charts.*

| RWY | Approach (name) | LVP / CAT note | Minima pointer (verify AIRAC) |
|---|---|---|---|
| 07 | RNAV; 12 DME ARC; VOR/DME; VOR | Non-precision; procedural (non-radar) 🟧 | verify current chart; tier-4 reporting points EMALI/BOPAR (RNAV), OMREL (VOR/DME) |
| 25 | 12 DME ARC; VOR/DME; VOR | Non-precision; procedural (non-radar) 🟧 | verify current chart; tier-4 reporting point LENED (VOR/DME) |
| — | NDB-A | Circling | verify current chart |

---

## 5. Approach hazards (terrain / CFIT / specific threats)

- **CFIT / terrain:** 🟩 No close-in high terrain identified in reachable sources (Briefing §3.1); the primary AIP obstacle chart was not reachable this pass — treat as provisionally clear, not independently verified. 🟧
- **Specific threats:** 🟧 Turbulence caution on the RWY 07 approach in east/south-east wind (tier-4 sourced) — brief accordingly and consider extra approach-speed margin in that condition.
- **Airspace / traffic:** 🟥 **Non-radar procedural control** — no local surveillance radar; expect procedural separation, position reporting and a workload profile distinct from radar-equipped network fields. En-route control is Piarco (TTZP).

---

## 6. Missed approach watch-items

- **Terrain-driven MAP notes:** No significant terrain driver identified (Briefing §3.1) — fly the published missed approach and verify climb-gradient/turn on the current chart if one exists.
- **Re-sequencing environment:** 🟥 A go-around in this **non-radar procedural environment** requires re-establishing procedural separation rather than simply accepting radar vectors — brief this explicitly, as it differs materially from a radar-equipped field.
- **Go-around traps:** No terrain-specific trap identified; the operative concern is workload/communication during procedural re-sequencing.

---

## 7. Landing runway / LDA & braking / vacate

- **LDA by runway:** RWY 07 ≈2,538 m (derived from a ≈500 m/1,640 ft displaced threshold); RWY 25 ≈2,738 m (derived from a ≈300 m/984 ft displaced threshold) — **not independently AIP-confirmed**, cross-ref [Briefing §7](index.md). 🟧
- **Braking / vacate:** No rapid-exit taxiway detail confirmed. 🟧
- **Runway-excursion watch:** 🟧 Displaced thresholds reduce usable LDA below the full 3,038 m pavement length on both ends — confirm current-day landing performance against the (unconfirmed) exact figures once the primary AIP is accessible.

---

## 8. Taxi-in routing to terminal & hot spots

- **Typical taxi-in by runway → terminal:** After landing, taxi in via the field's taxiway system to the single ramp/Terminal A apron; VAMSYS mirror gives a planning taxi-in time of **6 min** `[VAMSYS mirror 2026-07-26]`.
- **Hot spots / tight taxiways:** 🟥 **Taxiway A is restricted to day operations only, aircraft ≤65,000 lb (29,500 kg) MTOW and ≤100 ft (30 m) wingspan** — confirm the assigned taxi-in routing uses an alternate taxiway for any K Global Code C/D+ aircraft. Cross-ref [Briefing §13](index.md).
- **Stand/gate notes:** See [Dispatch §3](dispatch.md) — widebody-capable stand count not independently confirmed.

---

## 9. Arrival frequency sequence

- **Sequence:** **V C Bird Approach 119.100 (procedural, non-radar) → V C Bird Tower 118.200 → V C Bird Ground 121.900.** Take the assigned frequency and confirm current chart. (Frequencies from Briefing §8.)
- **Approach/Departure control:** **V C Bird Approach** — procedural (non-radar); en-route hand-off to/from **Piarco (TTZP)**. 🟧 Confirm current sector/frequency assignment on the day's chart.

---

## 10. Gotchas

- **Non-radar, procedural approach control** — no radar vectoring by default; fly the published transition/reporting-point sequence precisely.
- **No charted STAR** — arrivals are flown via DME-ARC/VOR transitions rather than a lateral/vertical STAR procedure.
- **Turbulence caution on the RWY 07 approach in east/south-east wind** — brief accordingly.
- **Displaced thresholds reduce usable LDA on both runway ends** — do not assume the full 3,038 m pavement length is available for landing.
- **Taxiway A is day-only and weight/wingspan-restricted** — confirm taxi-in routing avoids it for our aircraft.
- **Hurricane season (Jun–Nov)** carries real diversion/closure risk across the Leeward Islands.

---

## Open items (🟧 — confirm against AIP / current AIRAC)

- **Primary AIP not reachable this pass** — re-verify this entire page against the Eastern Caribbean AIP when access is available.
- Exact approach minima per runway/procedure.
- Exact LDA/displaced-threshold figures (only derived tier-4 figures obtained this pass).
- Rapid-exit taxiway/vacate detail.
- Current sector/frequency assignment for V C Bird Approach.

> **Live data — pull at planning:** wx/METAR/TAF/TREND, NOTAM (runway/approach/navaid/lighting), ATIS config/wind trend, tropical-cyclone advisories in season. Not stored in this durable file.

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim charts inform content but are not listed here.*

- VATSIM Caribbean (VATCAR, Piarco FIR division) — "V.C. Bird International Airport (TAPA)" airport SOP — https://piarco.vatcar.net/wp-content/uploads/2021/08/VC-Bird-International-Airport-TAPA.pdf (retrieved 2026-07-26). **Network-sim document, not regulatory** — procedural (non-radar) approach description, reporting points, holding fixes, RWY 07 turbulence caution.
- SkyVector — https://skyvector.com/airport/TAPA/St-Johns-Vc-Bird-Antigua-Airport (retrieved 2026-07-26). *Displaced-threshold distances, communications.*

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-26 | Built from national/territory AIP; K Global fields from live VAMSYS; 4-page pack. |
