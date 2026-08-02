# ZBAA — Beijing Capital · Arrival Page

**ZBAA / PEK** · Shunyi District, Beijing, China · Asia
**Version** v0.1 · **Updated** 2026-07-26 · **Status** Draft

> **Read-me:** Tactical arrival aid for the sim, not a chart. Companion to the [ZBAA Briefing](index.md), [Dispatch](dispatch.md) and [Departure](departure.md) pages. STARs/approaches are listed **by name only or flagged not-yet-confirmed** — fly the charted current-AIRAC version; minima shown are pointers, always verify on the current chart. Static data only; live wx/NOTAM are pulled at planning. Open 🟧 items are in §Open items. Flag legend 🟥 restriction/hazard · 🟧 caution/unverified · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| Usual landing runway(s) | Config-dependent across the three parallel N–S runways (01/19, 18L/36R, 18R/36L) — take the active configuration from ATIS |
| Usual approach | ILS reported across the runway set by tier-4 aggregators (category not confirmed); **independent parallel ILS to 36L/36R/01**, **dependent parallel ILS to 18L/18R/19** per config — see [Briefing §3.2](index.md) |
| Config logic | Wind/traffic/CAAC-flow-driven; regional seasonal wind tendency (winter northerly/north-westerly, summer southerly/south-easterly) is climatology, not a sourced wind rose — take the current ATIS 🟧 |
| Transition level | Not published / verify 🟧 |
| LVP trigger | Consistent with seasonal spring sand-dust and winter fog/snow risk; exact RVR trigger not confirmed 🟧 |
| Missed-approach driver | Airspace/traffic density (independent/dependent triple-parallel-runway environment under active CAAC flow management), not terrain |

---

## 2. STAR / transition selection

- **STARs (names only — verify current AIRAC):** Not confirmed in reachable research pass — pull the current-AIRAC STAR list at planning. 🟧
- **Selection by arrival direction / runway:** Not confirmed from a public source; expect Beijing/Capital Approach to assign the STAR-to-runway transition per the active configuration (§Briefing §3.2). 🟧
- **Transition to approach:** Expect a STAR-to-ILS transition with radar vectors onto final under Beijing/Capital Approach; specific transition procedure not confirmed. 🟧
- **Speed / flow constraints on the STAR:** Not confirmed — expect additional flow speed control given the field's very high traffic density and active CAAC ATFM regime. 🟧

---

## 3. Descent & energy plan

- **Top-of-descent trigger:** Standard descent-profile planning; plan TOD to meet the first STAR altitude gate. CAAC flow-control measures (minutes-in-trail, ground/airborne holding) can compress or extend the arrival profile with limited notice — brief a flexible energy plan.
- **Speed control:** Standard ICAO 250 KIAS below 10,000 ft assumed; confirm current chart for any local override. 🟧
- **Altitude constraints:** Key STAR crossing constraints are pointers — fly the charted altitudes; not confirmed this pass. 🟧
- **Energy traps:** Late runway/configuration changes (a wind shift moving the active runway set from the 18-series to the 36-series or vice versa) and holding/resequencing during CAAC flow-control events or seasonal dust/snow weather are the main energy traps at this field.

---

## 4. Approach selection by runway

*Names only — verify minima on current AIRAC charts.*

| RWY | Approach (name) | LVP / CAT note | Minima pointer (verify AIRAC) |
|---|---|---|---|
| 01 | Not confirmed 🟧 | ILS reported, category not sourced | verify current chart |
| 19 | Not confirmed 🟧 | ILS reported, category not sourced | verify current chart |
| 18L | Not confirmed 🟧 | **Dependent-parallel role** in the 18-series configuration | verify current chart |
| 36R | Not confirmed 🟧 | **Independent-parallel role** in the 36-series configuration | verify current chart |
| 18R | Not confirmed 🟧 | **Dependent-parallel role** in the 18-series configuration | verify current chart |
| 36L | Not confirmed 🟧 | **Independent-parallel role** in the 36-series configuration | verify current chart |

- **LVP triggers:** Consistent with seasonal spring sand-dust and winter fog/snow risk (§14 of the Briefing); exact RVR trigger values and ILS sub-category not confirmed from a primary table this pass. 🟧

---

## 5. Approach hazards (terrain / CFIT / specific threats)

- **CFIT / terrain:** 🟩 None close-in. ZBAA sits at 116 ft AMSL on the flat North China Plain — no significant terrain relevant to any arrival path at the field itself; the nearest relief (Yan Mountains/Taihang range) lies well clear.
- **Specific threats:** 🟥 **Independent parallel ILS approaches to 36L/36R/01** and **dependent parallel ILS approaches to 18L/18R/19** (per configuration) sustain continuous high traffic density across the three-runway set; wake-turbulence awareness during simultaneous/dependent parallel operations is a standing consideration. Expect periodic CAAC flow-control-driven resequencing, especially in adverse (dust/winter) weather.
- **Airspace / traffic:** 🟥 Very high density under Beijing/Capital Approach — one of Asia's busiest terminal areas (442,046 movements, 2025); brief for extended vectoring and holding, especially during a configuration change or a flow-control event.

---

## 6. Missed approach watch-items

- **Terrain-driven MAP notes:** Terrain is not the driver (flat plain) — fly the published missed approach and verify climb-gradient/turn on the current chart. 🟧
- **Re-sequencing environment:** A go-around returns the aircraft to a very high-density, independent/dependent triple-parallel-runway radar environment under active CAAC sequencing — expect extended vectoring and possible holding before re-sequencing, especially during a dust-storm or winter-weather event.
- **Go-around traps:** Traffic/configuration awareness on the parallel-runway set during the miss; no terrain-specific missed-approach hazard identified.

---

## 7. Landing runway / LDA & braking / vacate

- **LDA by runway:** Physical runway lengths — 01/19 and 18L/36R at 3,800 m, 18R/36L at 3,200 m — are all ample for any K Global widebody; **declared LDA is not published in any reachable public source this pass**, so treat physical length as the working figure pending AIP confirmation. 🟧
- **Braking / vacate:** Rapid-exit taxiway detail not confirmed in reachable sources — confirm with Ground/Apron on the day. 🟧
- **Runway-excursion watch:** 🟧 No displaced-threshold data confirmed for any runway; winter-contamination braking-action consideration applies in the roughly Dec–Feb snow/ice season (see Briefing §14).

---

## 8. Taxi-in routing to terminal & hot spots

- **Typical taxi-in by runway → terminal:** After landing on the assigned runway, expect Ground/Apron routing toward the **Terminal 3 international concourse** (our expected arrival gate, per Dispatch §2); VAMSYS mirror gives a planning taxi-in time of **20 minutes** `[VAMSYS mirror 2026-07-26]` — noticeably longer than a compact single-terminal field, consistent with the three-runway/three-terminal layout.
- **Hot spots / tight taxiways:** 🟧 No specific named hot spots or taxiway junctions were obtainable from a reachable public chart source this pass — a genuine gap, not an assertion that none exist. Given the field's very high traffic density, taxi with elevated vigilance and confirm routing with Ground/Apron.
- **Stand/gate notes:** See [Dispatch §3](dispatch.md) — Terminal 3 international concourse and at least one Terminal 2 gate are confirmed A380-capable; exact gate assignment for our operation not yet confirmed.

---

## 9. Arrival frequency sequence

- **Sequence:** **Beijing/Capital Approach (sector-specific, see Briefing §8) → Beijing Tower (118.05/118.30/118.50/118.60/124.30) → Beijing Ground (121.70–121.95) → Beijing Apron (121.95/122.12/122.22/122.62/122.67).** Take the assigned frequency and confirm current chart. (Frequencies from Briefing §8, cross-checked between SkyVector and OurAirports.) 🟧
- **Approach/Departure control:** **Beijing/Capital Approach** is the terminal-control facility; **Beijing (ZBPE) ACC** hands off en route inbound — see [Asia — Airspace Briefing](../../../../airspace/asia.md). 🟧 Exact sector/frequency assignment is AIRAC-dependent and not fully corroborated across sources.

---

## 10. Gotchas

- **Three parallel N–S runways with an independent/dependent triple-parallel operating capability** — never assume a single "usual" landing runway; take the active configuration from ATIS.
- **Spring sand-dust events (Mar–May) can drop visibility abruptly and region-wide** — brief a holding/diversion contingency in season, not just a standard fog/LVP plan.
- **Winter snow/ice season (Dec–Feb)** has produced documented multi-day disruption at northern Chinese hubs in recent winters — expect increased ATC spacing and possible ground-delay programs.
- **Config swap driven by a wind shift** (18-series ↔ 36-series) can bring a late runway change — watch the ATIS wind trend.
- **CAAC flow-control resequencing** during a dust or winter-weather event is a routine, not exceptional, occurrence at this field — brief crews accordingly.
- **Long taxi-in** (VAMSYS planning figure 20 minutes) reflects the three-runway/three-terminal layout — do not plan a tight connection assuming a short taxi-in.
- **CAAC can impose short-notice, event-driven restrictions** affecting the arrival environment (documented historical precedent) — always check the current NOTAM picture.

---

## Open items (🟧 — confirm against AIP / current AIRAC)

- Current-AIRAC STAR names and exact approach minima per runway.
- ILS category/sub-category confirmation per runway end.
- Exact LVP/CAT trigger RVR values.
- Rapid-exit taxiway/vacate detail and named hot spots — no public chart data found this pass.
- Current taxi-in routing and gate/concourse assignment for our operation.
- Beijing/Capital Approach sector-to-frequency mapping (current AIRAC).

> **Live data — pull at planning:** wx/METAR/TAF/TREND (incl. sand-dust SIGMET in season), NOTAM (runway/approach/navaid/lighting), ATIS config/wind trend, current CAAC ATFM/flow-control status. Not stored in this durable file.

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim charts inform content but are not listed here.*

- **AIP China (CAAC / AISC), eAIP China** — https://www.eaipchina.cn/ — attempted, gated/unreachable this pass (retrieved attempt 2026-07-26).
- SkyVector — https://skyvector.com/airport/ZBAA/Beijing-Capital-Airport (retrieved 2026-07-26). *Runway/frequency data.*
- OurAirports — https://ourairports.com/airports/ZBAA/frequencies.html and /runways.html (retrieved 2026-07-26). *Frequency/runway cross-check.*
- Wikipedia — "List of airports with triple takeoff/landing capability" — https://en.wikipedia.org/wiki/List_of_airports_with_triple_takeoff/landing_capability (retrieved 2026-07-26). *Independent/dependent triple-parallel-runway operating capability.*
- Vision Times — "Beijing Hit by Force-14 Winds as Sandstorm Triggers Severe Pollution in 130 Cities" (2026-02-23) — https://www.visiontimes.com/2026/02/23/beijing-hit-by-force-14-winds-as-sandstorm-triggers-severe-pollution-in-130-cities.html (retrieved 2026-07-26). *Seasonal sand-dust event corroboration.*

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-26 | Built from AIP China (public cross-check where gated); K Global fields from live VAMSYS; 4-page pack. |
