# LIPE — Bologna/Borgo Panigale (Guglielmo Marconi) · Arrival Page

**LIPE / BLQ** · Bologna, Emilia-Romagna, Italy · Europe
**Version** v0.1 · **Updated** 2026-07-26 · **Status** Draft

> **Read-me:** Tactical arrival aid for the sim, not a chart. Companion to the [LIPE Briefing](index.md), [Dispatch](dispatch.md) and [Departure](departure.md) pages. STARs/approaches are listed **by name only** — fly the charted current-AIRAC version; minima shown are pointers, always verify on the current chart. Static data only; live wx/NOTAM are pulled at planning. Open 🟧 items are in §Open items. Flag legend 🟥 restriction/hazard · 🟧 caution/unverified · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| Usual landing runway(s) | **RWY 12** — preferential for landing, code D/E/F 🟧 |
| Usual approach | ILS/LOC/VOR/RNAV by config; ILS reported CAT IIIB on RWY 12 (sub-category unconfirmed) 🟧 |
| Config logic | Wind driven; reinforced at night by the noise-abatement direction rule toward RWY 12 |
| Transition level | By QNH per a published table — not independently confirmed this pass 🟧 |
| LVP trigger | Reported to restrict operations to **RWY 12 only** when in effect — exact trigger conditions/RVR not confirmed 🟧 |
| Missed-approach driver | Not terrain-driven (flat basin); single-runway-field diversion timing is the operative concern |

---

## 2. STAR / transition selection

- **STARs (names only):** Not confirmed in reachable research pass — pull the current-AIRAC STAR list at planning. 🟧
- **Selection by arrival direction / runway:** Not independently characterised beyond the RWY 12 preferential-landing logic (§1). 🟧
- **Transition to approach:** Not confirmed in reachable sources — verify current chart for RNAV-to-ILS transition/vectoring expectations. 🟧
- **Speed / flow constraints on the STAR:** Not confirmed — pointer only, verify chart.

---

## 3. Descent & energy plan

- **Top-of-descent trigger:** Not confirmed in reachable sources — use standard planning rule of thumb pending a chart-sourced figure.
- **Speed control:** Standard 250 KIAS below FL100 (EU/ICAO norm); confirm no local override on current chart.
- **Altitude constraints:** Not confirmed — pointer only, verify chart.
- **Energy traps:** As a single-runway field with displaced thresholds reducing usable LDA (2,493 m RWY 12 / 2,442 m RWY 30 — see [Briefing §7](index.md)), a late runway-change or high-and-close-in energy state carries more consequence than at a longer/multi-runway field — plan a stabilised approach with margin.

---

## 4. Approach selection by runway

*Names only — verify minima on current AIRAC charts.*

| RWY | Approach (name) | LVP / CAT note | Minima pointer (verify AIRAC) |
|---|---|---|---|
| 12 | ILS, LOC, VOR, RNAV | ILS reported **CAT IIIB** (sub-category unconfirmed); **preferential landing runway**; sole runway usable under LVP 🟧 | Not published / verify |
| 30 | ILS, LOC, VOR, RNAV | Used for landing when wind/traffic dictates reciprocal direction 🟧 | Not published / verify |

*Circling is reported **not authorised** on either runway end per a network-sim operational reference — not independently AIP-confirmed. 🟧*

---

## 5. Approach hazards (terrain / CFIT / specific threats)

- **CFIT / terrain:** No close-in high terrain — LIPE sits at 123 ft AMSL in the flat Po Valley basin. Verify the MSA ring on the current chart as routine practice; CFIT is not the operative threat at this field. 🟩
- **Specific threats:** **Winter Po Valley radiation fog** is the field's signature approach hazard, driving reliance on the CAT-IIIB-reported ILS on RWY 12 and the LVP-to-RWY-12-only restriction (§1/§4). No wake-turbulence or closely-spaced-parallel consideration applies — single-runway field.
- **Airspace / traffic:** Single-runway regional traffic volume (~83,000 movements/year) under Bologna Approach/Radar; not comparable to major-hub density. Cross-ref [Briefing §3.2](index.md).

---

## 6. Missed approach watch-items

- **Terrain-driven MAP notes:** Not applicable — flat basin, no close-in terrain.
- **Re-sequencing environment:** Moderate regional traffic; re-sequencing complexity is expected to be low relative to a major hub, but not independently confirmed. 🟧
- **Go-around traps:** The defining consideration on a go-around at LIPE is that **this is a single-runway field** — there is no parallel-runway or reciprocal-direction fallback, which raises the operational weight of a timely diversion decision if a second approach is also marginal (e.g. in a fog/LVP scenario restricted to RWY 12 only).

---

## 7. Landing runway / LDA & braking / vacate

- **LDA by runway:** **2,493 m (RWY 12) / 2,442 m (RWY 30)** — both reduced from the 2,800 m physical runway length by displaced thresholds (~310 m RWY 12, ~362 m RWY 30); cross-ref [Briefing §7](index.md). Figures are tier-4/network-sim sourced, not primary-AIP-confirmed. 🟧
- **Braking / vacate:** Rapid-exit/high-speed turnoff data not confirmed in reachable sources; standard taxiway exit is reported as **TWY J** 🟧.
- **Runway-excursion watch:** Displaced thresholds reduce usable LDA below the physical runway length — confirm the correct LDA for the runway in use, not TORA; regional winter climate implies a plausible contaminated/wet-runway season, braking-action data not confirmed. 🟧

---

## 8. Taxi-in routing to terminal & hot spots

- **Typical taxi-in by runway → terminal:** Standard entry taxiway is reported as **TWY K** 🟧 — not independently AIP-confirmed; confirm with Ground on the day.
- **Hot spots / tight taxiways:** No named hot spots beyond the entry/exit taxiway assignment were found in reachable sources — cross-ref [Briefing §13](index.md). 🟧
- **Stand/gate notes:** All 24 gates are bus gates (no jetways) — expect an apron bus transfer regardless of stand assignment; cross-ref [Dispatch §3](dispatch.md).

---

## 9. Arrival frequency sequence

- **Sequence:** Bologna Radar/Approach (West sector 133.775 / East sector 118.150) → Bologna Tower (120.800) → Bologna Ground (121.925) — see [Briefing §8](index.md) for the full table and sourcing caveats. 🟧
- **Approach/Departure control:** **Bologna Approach/Radar** on the field; **Milano ACC (LIMM)** en route — no dedicated Italian FIR brief exists yet in this library, see [Europe airspace overview](../../../../airspace/europe.md). 🟧

---

## 10. Gotchas

- **Single runway** — a go-around or diversion decision carries more weight here than at a multi-runway field; there is no parallel/reciprocal fallback.
- **LVP reportedly restricted to RWY 12 only** — brief the fog/LVP scenario in advance, especially if wind favours RWY 30.
- **Displaced thresholds both ends** — do not assume the full 2,800 m physical runway is usable landing distance from the threshold.
- **Night noise rule can direct arrivals to RWY 12 regardless of light-wind preference for the reciprocal runway.**
- **All gates are bus gates** — plan extra time after landing before pax reach the terminal.

---

## Open items (🟧 — confirm against AIP / current AIRAC)

- STAR names, transition logic, top-of-descent/altitude constraints — not obtained in this research pass.
- ILS sub-category (IIIA/IIIB) and exact LVP trigger/RVR minima.
- LDA figures (2,493 m/2,442 m) — tier-4/network-sim sourced, not primary-AIP-confirmed.
- Rapid-exit taxiway/braking-action data.
- Circling-not-authorised status — sourced to a network-sim reference only.

> **Live data — pull at planning:** wx/METAR/TAF/TREND, NOTAM (runway/approach/navaid/lighting), ATIS config, current LVP/ground-delay status. Not stored in this durable file.

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim charts inform content but are not listed here.*

- IVAO Italian Division — Airport QuickOverview, LIPE — https://quickoverview.ivao.it/aerodrome/show/LIPE (retrieved 2026-07-26). *Network-sim operational reference, not regulatory — TORA/LDA, preferential runway logic, circling status, taxiway entry/exit assignment, frequencies. Corroboration only.*
- SkyVector — https://skyvector.com/airport/LIPE/Bologna-Borgo-Panigale-Airport (retrieved 2026-07-26). *Displaced-threshold figures.*
- Full source set and tier notes: see the [LIPE Briefing](index.md) Sources & References.

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-26 | Built from AIP Italia (ENAV); K Global fields from live VAMSYS; 4-page pack. |
