# ZSPD — Pudong · Arrival Page

**ZSPD / PVG** · Pudong, Shanghai, China · Asia
**Version** v0.1 · **Updated** 2026-07-26 · **Status** Draft — public cross-check build, primary-AIP verification pending

> **Read-me:** Tactical arrival aid for the sim, not a chart. Companion to the [ZSPD Briefing](index.md), [Dispatch](dispatch.md) and [Departure](departure.md) pages. STARs/approaches are listed **by name only or flagged not-yet-confirmed** — fly the charted current-AIRAC version; minima shown are pointers, always verify on the current chart. Static data only; live wx/NOTAM are pulled at planning. Open 🟧 items are in §Open items. Flag legend 🟥 restriction/hazard · 🟧 caution/unverified · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| Usual landing runway(s) | One of the two independent runway pairs — **West** (17L/35R + 17R/35L) or **East** (16L/34R + 16R/34L) — assigned by wind/flow; not a published fixed rule 🟧 |
| Usual approach | ILS; **CAT III capability reported** at the field (historically first on RWY 34L) — per-runway current category not confirmed 🟧 |
| Config logic | Wind and **CAAC ATFM/flow-control** driven; the two runway pairs operate largely independently |
| Transition level | Not published / verify 🟧 |
| LVP trigger | Seasonal fog/haze episodes; exact RVR trigger not confirmed 🟧 |
| Missed-approach driver | **Airspace/traffic density** (dual-airport Shanghai metroplex, very high movement rate) — not terrain |

---

## 2. STAR / transition selection

- **STARs (names only — verify current AIRAC):** Not confirmed in reachable research pass — pull the current-AIRAC STAR list at planning. 🟧
- **Selection by arrival direction / runway:** Shanghai Approach assigns the active runway pair (West 17/35 or East 16/34) and the STAR-to-runway transition tactically based on wind/flow; no published fixed rule found.
- **Transition to approach:** Expect an RNAV-STAR-to-ILS transition with radar vectors onto final, consistent with China's PBN/RNP-1 terminal implementation — see [`OM E — PBN and RNP Operations`](../../../../../flight-ops/pbn-and-rnp-operations.md). Verify the charted transition.
- **Speed / flow constraints on the STAR:** Published speed/altitude gates are pointers only — verify chart; expect additional flow-speed control given the very high traffic density and CAAC ATFM measures.

---

## 3. Descent & energy plan

- **Top-of-descent trigger:** Standard descent-profile planning; plan TOD to meet the first STAR altitude gate. Expect possible speed/level restrictions or extended routing from CAAC flow control in the dense Shanghai TMA.
- **Speed control:** STAR speed gates and 250 KIAS below FL100 (ICAO norm) — confirm current chart.
- **Altitude constraints:** Key STAR crossing constraints are pointers — fly the charted altitudes.
- **Energy traps:** Late runway/pair changes (a shift between the West and East runway systems, or a wind-driven reconfiguration) and holding/resequencing during a typhoon-season weather event or a CAAC flow-control ground-delay program are the main energy traps at this field.

---

## 4. Approach selection by runway

*Names only — verify minima on current AIRAC charts.*

| RWY | Approach (name) | LVP / CAT note | Minima pointer (verify AIRAC) |
|---|---|---|---|
| 17L/35R | ILS (ident/name not confirmed) 🟧 | CAT capability not confirmed for this runway specifically | verify current chart |
| 17R/35L | ILS (ident/name not confirmed) 🟧 | CAT capability not confirmed for this runway specifically | verify current chart |
| 16L/34R | ILS (ident/name not confirmed) 🟧 | CAT capability not confirmed for this runway specifically | verify current chart |
| 16R/34L | ILS (ident/name not confirmed) 🟧 | **CAT III reported here historically (RWY 34L, near Terminal 2)** 🟧 | verify current chart |

- **LVP triggers:** Seasonal fog/haze episodes are the routine ZSPD LVP trigger; exact RVR/trigger figures and current per-runway ILS category are not confirmed this pass. 🟧

---

## 5. Approach hazards (terrain / CFIT / specific threats)

- **CFIT / terrain:** 🟩 None. Flat Yangtze-delta coastal/reclaimed land at 4 m AMSL — no close-in high terrain relevant to any arrival path.
- **Specific threats:** 🟥 The **two closely-spaced N–S runway pairs** (~250–430 m within each pair) mean wake-turbulence and dependent/independent-operation awareness matters within a pair; the ~2.3–2.4 km gap to the other pair generally decouples the two systems from each other. **Bird/wildlife activity** from the surrounding coastal wetlands is a plausible, not independently sourced, watch item. See [`OM E — Wake Turbulence Separation`](../../../../../flight-ops/wake-turbulence-separation.md) for general dependent-parallel-runway wake guidance.
- **Airspace / traffic:** 🟥 Very high density under **Shanghai Approach** (15 published sectors, Briefing §8) — one of the busiest terminal areas on the planet, compounded by the **dual-airport Shanghai metroplex** sharing airspace with Hongqiao (ZSSS), ~23 NM away. Brief for re-sequencing and extended vectoring, especially during a CAAC flow-control event or marginal typhoon-season weather.

---

## 6. Missed approach watch-items

- **Terrain-driven MAP notes:** Terrain is not the driver (flat coastal delta) — fly the published MAP and verify climb-gradient/turn on the current chart.
- **Re-sequencing environment:** A go-around drops you back into a very high-density, dual-airport-metroplex radar environment under active CAAC flow control — expect extended vectoring and possible holding before re-sequencing, especially during a typhoon-season weather event.
- **Go-around traps:** Traffic/config awareness across the active runway pair during the miss; freighter traffic feeding the East-side cargo aprons is an additional traffic-density factor to track.

---

## 7. Landing runway / LDA & braking / vacate

- **LDA by runway:** 17L/35R ~4,000 m; 16L/34R and 16R/34L ~3,800 m; 17R/35L ~3,400 m (length-based, not a confirmed certified LDA — see [Briefing §7](index.md)) 🟧. No displaced thresholds confirmed either way. All four are ample for any K Global widebody at typical arrival weights.
- **Braking / vacate:** Rapid-exit taxiway detail not confirmed in reachable sources — confirm with Ground/Apron on the day. 🟧
- **Runway-excursion watch:** 🟧 No displaced thresholds confirmed; heavy typhoon-season and summer-convective rainfall is the relevant contamination/braking-action consideration (no specific braking-action data sourced this pass).

---

## 8. Taxi-in routing to terminal & hot spots

- **Typical taxi-in by runway → terminal:** After landing on the assigned West or East runway pair, taxi in to T1/T2 or the S1/S2 satellite gates per Ground/Apron assignment; VAMSYS mirror gives a planning taxi-in time of **18 min** `[VAMSYS mirror 2026-07-26]`.
- **Hot spots / tight taxiways:** Not identified by name in reachable public sources this pass — confirm with Ground/Apron and the current chart. 🟥 Given the very high movement rate and mixed pax/cargo traffic, treat ground taxi generally as a high-workload phase regardless of named hot spots.
- **Stand/gate notes:** See [Dispatch §3](dispatch.md) — widebody international traffic concentrates at T1/T2/S1/S2; exact current gate assignment amid the Terminal 3 build-out is not confirmed.

---

## 9. Arrival frequency sequence

- **Sequence:** **Shanghai Approach (one of 15 published sectors, 119.07–128.05) → Pudong Tower (118.32/118.40/118.57/118.72/118.80/124.35, by runway/sector) → Pudong Ground (121.62/121.65 West, 121.70/121.80 East, 121.87) → Pudong Apron (121.65/121.97/122.12/122.60/122.70).** Take the assigned frequency and confirm current chart. (Frequencies from Briefing §8.)
- **Approach/Departure control:** **Shanghai Approach** is the facility for ZSPD's terminal approach; **Shanghai (ZSHA) ACC/FIR** hands off en route — see the [Asia airspace brief](../../../../airspace/asia.md). 🟧 Exact sector/frequency assignment is AIRAC-dependent and traffic-load dependent given the dual-airport metroplex.

---

## 10. Gotchas

- **ZSPD's four runways are two independent, closely-spaced pairs, not four interchangeable runways** — confirm the active pair and any dependent/independent operating status within it before briefing the approach.
- **RWY 15/33 is a separate, non-parallel runway reserved for COMAC C919 test flights only** — never expect it as a landing option under scheduled commercial ops; check NOTAMs for test-flight activity nearby.
- **Typhoon season (~May–Nov, peak Jul–Sep) can deteriorate quickly** — brief a holding/diversion contingency in season even if the arrival forecast looks workable at dispatch time; real cases (Bebinca 2024, Chanthu 2021, Lekima 2019, Noul 2026) show the field can go from normal ops to a near-total ground stop within hours.
- **Dual-airport Shanghai metroplex (ZSPD/ZSSS, ~23 NM apart)** sustains continuous high traffic density and vectoring/holding — expect this as routine, not exceptional.
- **CAAC ATFM flow-control holds and re-sequencing** are common even in good weather, simply from sustained demand — don't assume a delay implies a weather or emergency cause.
- **Historical RTO/runway-excursion case (Avient Aviation Flight 324, 2009)** occurred on departure, not arrival, but is a standing field-wide reminder of strict procedural discipline at ZSPD.

---

## Open items (🟧 — confirm against AIP / current AIRAC)

- Current-AIRAC STAR names and exact approach minima per runway.
- Current per-runway ILS category (CAT I/II/III) — only historically confirmed for RWY 34L.
- Exact LVP/CAT III trigger RVR values.
- Rapid-exit taxiway/vacate detail.
- Named taxiway hot spots.
- Current taxi-in routing and gate assignment amid the Terminal 3 build-out.

> **Live data — pull at planning:** wx/METAR/TAF/TREND, NOTAM (runway/approach/navaid/lighting, esp. CAT III equipment status and RWY 15/33 C919 test-flight activity), ATIS config/wind trend, tropical-cyclone advisories in season, current CAAC ATFM/ground-delay status. Not stored in this durable file.

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim charts inform content but are not listed here.*

- OurAirports — https://ourairports.com/airports/ZSPD/runways.html and /frequencies.html (retrieved 2026-07-26).
- SkyVector — https://skyvector.com/airport/ZSPD/Shanghai-Pudong-Airport (retrieved 2026-07-26). *Runway geometry/coordinates, communications, nearby navaids.*
- SHINE News — CAT III ILS deployment history, RWY 34L — https://www.shine.cn/news/metro/1803011072/ (retrieved 2026-07-26).
- Wikipedia — "Shanghai Pudong International Airport" — https://en.wikipedia.org/wiki/Shanghai_Pudong_International_Airport (retrieved 2026-07-26).
- Aviation Week — fifth (C919 test) runway detail — https://aviationweek.com/air-transport/airports-networks/shanghai-pudong-airport-open-fifth-runway-year (retrieved 2026-07-26).
- AeroTime / nomadlawyer.org — typhoon disruption history — https://www.aerotime.aero/articles/shanghai-sees-massive-flight-cancellations-as-typhoon-bebinca-hits and https://www.nomadlawyer.org/typhoon-noul-disrupts-china-aviation-delays-cancellations-2026 (retrieved 2026-07-26).

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-26 | Built from AIP China (public cross-check where gated); K Global fields from live VAMSYS; 4-page pack. |
