# SAEZ — Ezeiza Intl/Ministro Pistarini · Arrival Page

**SAEZ / EZE** · Buenos Aires (Ezeiza), Argentina · South America
**Version** v0.1 · **Updated** 2026-07-26 · **Status** Draft — ANAC/EANA AIP not reachable this pass; built from tier-4 public sources

> **Read-me:** Tactical arrival aid for the sim, not a chart. Companion to the [SAEZ Briefing](index.md), [Dispatch](dispatch.md) and [Departure](departure.md) pages. STARs/approaches are listed **by name only** — fly the charted current-AIRAC version; minima shown are pointers, always verify on the current chart. Static data only; live wx/NOTAM are pulled at planning. Open 🟧 items are in §Open items. Flag legend 🟥 restriction/hazard · 🟧 caution/unverified · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| Usual landing runway(s) | Not published / verify — expect wind-driven selection between the 11/29 and 17/35 pairs, with RWY 35's reduced LDA (~2,805 m) a factor at higher landing weights 🟧 |
| Usual approach | ILS reported by config; category/minima not primary-confirmed 🟧 |
| Config logic | Wind-driven; no published preferential-runway rule found 🟧 |
| Transition level | Not published / verify (by QNH) 🟧 |
| LVP trigger | Reported CAT II/III capability, consistent with winter radiation-fog exposure; exact trigger conditions not confirmed 🟧 |
| Missed-approach driver | Traffic/airspace re-sequencing (Buenos Aires SAEZ/SABE picture) — not terrain |

---

## 2. STAR / transition selection

- **STARs (names only):** Not confirmed in reachable research pass — pull the current-AIRAC STAR list at planning. 🟧
- **Selection by arrival direction / runway:** Not confirmed in reachable sources. 🟧
- **Transition to approach:** Not confirmed — expect vectoring from Ezeiza Approach given the radar-controlled terminal environment ([SAEZ — Briefing](index.md) §3.2). 🟧
- **Speed / flow constraints on the STAR:** Not confirmed — verify chart. 🟧

---

## 3. Descent & energy plan

- **Top-of-descent trigger:** Not published — use standard planning rule of thumb pending a specific local constraint. 🟧
- **Speed control:** Standard 250 KIAS < FL100 (ICAO norm) assumed absent a published local override.
- **Altitude constraints:** Not confirmed — verify chart. 🟧
- **Energy traps:** None terrain-driven (flat site); the principal energy/config trap is a late runway change between the 11/29 and 17/35 pairs, and low-visibility go-around risk in winter fog.

---

## 4. Approach selection by runway

*Names only — verify minima on current AIRAC charts.*

| RWY | Approach (name) | LVP / CAT note | Minima pointer (verify AIRAC) |
|---|---|---|---|
| 11/29 | ILS, reported | Category not confirmed 🟧 | Verify current chart |
| 17/35 | ILS, reported | Category not confirmed; RWY 35 LDA-limited (~2,805 m) 🟧 | Verify current chart |

---

## 5. Approach hazards (terrain / CFIT / specific threats)

- **CFIT / terrain:** None identified — flat Pampas terrain, cross-ref [SAEZ — Briefing](index.md) §3.1. 🟩
- **Specific threats:** Winter (austral May–Aug) radiation fog/low stratus is the field's principal approach hazard, with reported (not primary-confirmed) CAT II/III instrumentation to support it — see [SAEZ — Briefing](index.md) §3.4/§14. 🟧
- **Airspace / traffic:** Radar-controlled terminal environment shared with SABE traffic — cross-ref [SAEZ — Briefing](index.md) §3.2.

---

## 6. Missed approach watch-items

- **Terrain-driven MAP notes:** Not applicable — flat site.
- **Re-sequencing environment:** Expect vectoring back into the Buenos Aires terminal traffic picture (SAEZ/SABE); confirm current holding pattern on the chart. 🟧
- **Go-around traps:** Low-visibility go-around procedure should be briefed in winter fog season given the field's reported CAT II/III environment. 🟧

---

## 7. Landing runway / LDA & braking / vacate

- **LDA by runway:** 11/29 ≈ 3,300 m (10,827 ft, pending AIP confirmation); 17 ≈ 3,105 m (10,187 ft); **35 ≈ 2,805 m (9,203 ft)** after the 300 m (984 ft) displaced threshold — cross-ref [SAEZ — Briefing](index.md) §7.
- **Braking / vacate:** Rapid-exit taxiway layout not confirmed in reachable sources. 🟧
- **Runway-excursion watch:** RWY 35 is the field's LDA-limited case — check against type/weight before selecting it as the landing runway; no contamination data confirmed. 🟧

---

## 8. Taxi-in routing to terminal & hot spots

- **Typical taxi-in by runway → terminal:** Not published in reachable sources — confirm with Ground/ATC on the day. 🟧
- **Hot spots / tight taxiways:** Not confirmed in reachable sources this pass — cross-ref [SAEZ — Briefing](index.md) §13. 🟧
- **Stand/gate notes:** Cross-ref [SAEZ — Dispatch](dispatch.md) §3.

---

## 9. Arrival frequency sequence

- **Sequence:** Ezeiza Approach (119.9) → Ezeiza Tower (118.6) → Ground (121.75) — per [SAEZ — Briefing](index.md) §8; treat as a possibly incomplete tier-4 snapshot.
- **Approach/Departure control:** Ezeiza Approach; sector/STAR-specific frequencies not confirmed — verify current chart. 🟧

---

## 10. Gotchas

- RWY 35's displaced threshold reduces LDA to **~2,805 m** — do not assume the full 3,105 m runway length is available for landing on that runway.
- Winter (May–Aug) radiation fog can develop with limited notice — brief the low-visibility approach/go-around before descent in season.
- No confirmed hot spots this pass — treat the taxi-in layout as unconfirmed until verified locally.

---

## Open items (🟧 — confirm against AIP / current AIRAC)

- STAR names, transition level and top-of-descent constraints — not obtained in this research pass.
- Approach category/minima and LVP trigger conditions (RVR) — CAT II/III reported only, not primary-confirmed.
- Taxi-in routing and hot spots — not confirmed.
- Missed-approach holding pattern — not confirmed.
- VATSIM cross-check — no dedicated VATSIM vACC/division airport SOP for SAEZ was located and cross-checked this pass.

> **Live data — pull at planning:** wx/METAR/TAF/TREND, NOTAM (runway/approach/navaid/lighting), ATIS config, ground-delay/flow status. Not stored in this durable file.

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim charts inform content but are not listed here.*

- OurAirports — https://ourairports.com/airports/SAEZ/ , /runways.html , /frequencies.html (retrieved 2026-07-26). *Runway/frequency tier-4 baseline.*
- Wikipedia — "Ministro Pistarini International Airport" — https://en.wikipedia.org/wiki/Ministro_Pistarini_International_Airport (retrieved 2026-07-26).
- Companion OM C file: [SAEZ — Briefing](index.md).
- Companion OM E file: [Low Visibility Operations](../../../../../flight-ops/low-visibility-operations.md).
- **ANAC/EANA AIP (AD 2 SAEZ)** — primary source of record; not reachable in this research pass.

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-26 | Built from national AIP; K Global fields from live VAMSYS; 4-page pack. |
