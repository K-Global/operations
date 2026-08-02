# MBPV — Providenciales Intl · Arrival Page

**MBPV / PLS** · Providenciales, Turks and Caicos Islands · North America
**Version** v0.1 · **Updated** 2026-07-26 · **Status** Draft — provisional, primary AIP not reachable this pass

> **Read-me:** Tactical arrival aid for the sim, not a chart. Companion to the [MBPV Briefing](index.md), [Dispatch](dispatch.md) and [Departure](departure.md) pages. STARs/approaches are listed **by name only** — fly the charted current-AIRAC version; minima shown are pointers, always verify on the current chart. Static data only; live wx/NOTAM are pulled at planning. Open 🟧 items are in §Open items. Flag legend 🟥 restriction/hazard · 🟧 caution/unverified · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| Usual landing runway(s) | Wind-dependent, RWY 10 or RWY 28 |
| Usual approach | RNAV (GNSS) / VOR/DME / NDB (not independently AIP-confirmed) |
| Config logic | Wind-driven; no preferential-runway program identified |
| Transition level | Not confirmed this pass 🟧 |
| LVP trigger | No LVP/CAT II-III infrastructure identified 🟧 |
| Missed-approach driver | Not confirmed — no significant terrain identified (§5) |

---

## 2. STAR / transition selection

- **STARs (names only — verify current AIRAC):** Not independently confirmed from a primary source this pass; general-aviation reference material describes RNAV arrival transitions into the field, but exact names/logic are unconfirmed. 🟧
- **Selection by arrival direction / runway:** Wind-driven runway selection; transition logic not confirmed. 🟧
- **Transition to approach:** Approach control under **Nassau (MYNA)** jurisdiction per tier-4 sources; exact vectoring/transition procedure not confirmed. 🟧
- **Speed / flow constraints on the STAR:** Standard 250 KIAS below FL100 — verify any local constraint on the current chart.

---

## 3. Descent & energy plan

- **Top-of-descent trigger:** Standard descent-profile planning; no unusual early-descent trigger identified.
- **Speed control:** 250 KIAS below FL100 (standard); confirm any local constraint on the current chart.
- **Altitude constraints:** Not confirmed this pass. 🟧
- **Energy traps:** No specific energy trap identified in reachable sources; treat a late runway-configuration change (10↔28) driven by a wind shift as the standard generic risk pending further confirmation.

---

## 4. Approach selection by runway

*Names only — verify minima on current AIRAC charts.*

| RWY | Approach (name) | LVP / CAT note | Minima pointer (verify AIRAC) |
|---|---|---|---|
| 10 | RNAV (GNSS); VOR/DME; NDB (not independently AIP-confirmed) | Non-precision 🟧 | verify current chart |
| 28 | RNAV (GNSS); VOR/DME; NDB (not independently AIP-confirmed) | Non-precision 🟧 | verify current chart |

---

## 5. Approach hazards (terrain / CFIT / specific threats)

- **CFIT / terrain:** 🟩 Low-lying Caicos Islands terrain — no significant high ground identified near the field in reachable sources; the primary AIP obstacle chart was not reachable this pass — treat as provisionally clear, not independently verified. 🟧
- **Specific threats:** 🟧 General-aviation community references for this field mention nearby parachute/parasail activity (Grace Bay area) and occasional wildlife on the movement area — treat as a NOTAM-watch item rather than a confirmed standing hazard pending primary-source verification.
- **Airspace / traffic:** 🟧 Approach control under Nassau (MYNA) jurisdiction per tier-4 sources; traffic density and exact control-facility assignment not independently confirmed.

---

## 6. Missed approach watch-items

- **Terrain-driven MAP notes:** No terrain driver identified (§5); fly the published missed approach and verify climb-gradient/turn on the current chart.
- **Re-sequencing environment:** Not independently confirmed — verify current radar/procedural service level under Nassau (MYNA) jurisdiction before assuming vectored re-sequencing. 🟧
- **Go-around traps:** None specifically identified in reachable sources. 🟧

---

## 7. Landing runway / LDA & braking / vacate

- **LDA by runway:** RWY 10 ≈2,806 m; RWY 28 ≈2,806 m (near-symmetric, tier-4 corroborated) — cross-ref [Briefing §7](index.md); **not independently AIP-confirmed**. 🟧
- **Braking / vacate:** No rapid-exit taxiway detail confirmed. 🟧
- **Runway-excursion watch:** 🟧 Declared distances not AIP-confirmed — confirm current-day landing performance before relying on the tier-4 estimate.

---

## 8. Taxi-in routing to terminal & hot spots

- **Typical taxi-in by runway → terminal:** Not itemised in reachable sources; confirm with Ground/Tower on the day. 🟧 No VAMSYS taxi-in time is available for this field pending registration.
- **Hot spots / tight taxiways:** 🟧 A general-aviation chart-derived reference notes certain taxiways restricted to **Code D and below** — confirm current taxiway weight/wingspan limits before routing a Code E/F aircraft to a specific stand. Cross-ref [Briefing §13](index.md).
- **Stand/gate notes:** See [Dispatch §3](dispatch.md) — widebody-capable stand count not independently confirmed.

---

## 9. Arrival frequency sequence

- **Sequence:** Not independently confirmed from a citable public source this pass — expect a standard Approach → Tower → Ground sequence under Nassau (MYNA) jurisdiction (Briefing §8); confirm actual frequencies with the current AIRAC/OFP package before use. 🟧
- **Approach/Departure control:** **Nassau (MYNA)** approach jurisdiction per tier-4 sources; en-route **Miami Center (KZMA)** per the task-level routing context. 🟧 Confirm current sector/frequency assignment on the day's chart.

---

## 10. Gotchas

- **Field not yet reconciled in VAMSYS** — do not assume standard company alternates, category or taxi times without checking current registration status.
- **Primary AIP not reachable this pass** — treat approach minima and declared-distance data as provisional.
- **Possible Code-D taxiway limitation** (tier-4 sourced) — confirm before routing a Code E/F aircraft to a stand via a restricted taxiway.
- **General wildlife-on-movement-area and nearby parachute/parasail activity (Grace Bay)** — check current NOTAMs.
- **Hurricane season (Jun–Nov)** carries real diversion/closure risk across the Turks and Caicos Islands.

---

## Open items (🟧 — confirm against AIP / current AIRAC)

- **Primary UK/TCI AIP not reachable this pass** — re-verify this entire page against it when access is available.
- Exact approach minima per runway/procedure.
- Exact declared distances (only a near-symmetric tier-4 estimate obtained this pass).
- Rapid-exit taxiway/vacate detail.
- Current sector/frequency assignment for Providenciales Approach/Tower.

> **Live data — pull at planning:** wx/METAR/TAF/TREND, NOTAM (runway/approach/navaid/lighting, wildlife/parachute activity), ATIS config/wind trend, tropical-cyclone advisories in season. Not stored in this durable file.

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim charts inform content but are not listed here.*

- VATSIM Caribbean (VATCAR, Nassau FIR division) — "MBPV – Providenciales International" airport briefing — https://nassau.vatcar.net/wp-content/uploads/2023/09/MBPV-Briefing.pdf (retrieved 2026-07-26). **Network-sim document, not regulatory** — used per the VATSIM cross-check provision for RNAV approach-procedure naming and the alternate elevation figure; corroboration only, not authoritative.

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-26 | Built from national/territory AIP; K Global fields from live VAMSYS; 4-page pack. |
