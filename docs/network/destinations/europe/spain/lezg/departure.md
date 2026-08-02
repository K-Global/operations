# LEZG — Zaragoza · Departure Page

**LEZG / ZAZ** · Garrapinillos, Zaragoza, Aragón, Spain · Europe
**Version** v0.1 · **Updated** 2026-07-26 · **Status** Draft — AIP España-derived

> **Read-me:** Tactical departure aid for the sim, not a chart. Companion to the [LEZG Briefing](index.md), [Dispatch](dispatch.md) and [Arrival](arrival.md) pages. SIDs/procedures are listed **by name only or flagged not-yet-confirmed** — fly the charted current-AIRAC version; verify every gradient, minima and routing on the current chart. Static data only; live wx/NOTAM/CTOT are pulled at planning. Open 🟧 items are in §Open items. Flag legend 🟥 restriction/hazard · 🟧 caution/unverified · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| Usual departure runway(s) | **12L/30R** (civil-primary, 3,032 m) or **12R/30L** (3,718 m, joint civil/military) |
| Config logic | Not published in reachable AIP text; the Cierzo wind (Briefing §3.4) is the dominant practical driver on many days |
| Transition altitude | 1,850 m / 6,000 ft (CTR upper limit) — verify TA/TL split on current chart 🟧 |
| Take-off minima | RWY 12L and RWY 30R are LVTO-authorised; exact figures not confirmed this pass 🟧 |
| CTOT / flow regime | Commercial pax extended-hours: 12h SLOT PPR; GA/IFR-VFR: 3h SLOT PPR; standard EUROCONTROL ATFM otherwise expected 🟧 |
| De-icing on departure | Available **H24** at commercial stands, hot water/glycol, handling-agent-provided |

---

## 2. Stand → runway taxi routing & hot spots

- **Typical routings by runway:** **RWY 12L departures:** civil apron via TWY C-1.1/C-2.2, TA, to holding position A-1. **RWY 30R departures:** civil apron via TWY C-2.2 and A-5. Dedicated routings also exist for the joint military aprons (East/South/West) crossing RWY 12R/30L with ATC clearance where required — confirm with Ground on the day.
- **Hot spots / tight taxiways:** 🟧 **TWY C1 is a shared taxiway** between the northern (RWY 12L/30R-adjacent) and southern (RWY 12R/30L-adjacent) manoeuvring-area zones, particularly significant during LVP (§7) when only one aircraft/formation is normally authorised per zone. **Code E/F aircraft exit the civil apron specifically via TWY C-2.2** to minimise jet-blast impact on other stands, and must taxi with **outboard engines at idle** across the whole movement area if four-engined.
- **Runway crossings / read-back-required points:** Crossing RWY 12R/30L from certain apron/taxiway routings (e.g. south/west military apron routings) requires explicit ATC clearance — confirm the current routing and any crossing-clearance requirement with Ground.
- **Low-vis taxi caveats:** 🟧 During LVP, the **tower has no direct visibility of the civil apron** — a "follow-me" vehicle guides aircraft on request on both civil and military aprons, and departures proceed from the apron up to the threshold of the runway in use under this guidance.

---

## 3. Runway / SID selection logic

- **By wind / config:** Not published in reachable AIP text; the Cierzo wind (a strong NW-channelled Ebro-valley wind, historical gusts to 160 km/h) is the dominant practical driver on many days given the field's exposure (Briefing §3.4).
- **By departure direction:** Not confirmed in reachable sources this pass. 🟧
- **Noise / preferential-runway program:** No fixed-wing NAP/NADP detail confirmed. 🟧
- **Interaction with arrivals:** Simultaneous parallel-runway VFR/IFR use is authorised **only in VMC**; the joint civil/military traffic mix (Briefing §3.2) adds sequencing complexity during active military flying periods.

---

## 4. SID list (names only)

*Fly the charted current-AIRAC version. Climb-gradient / RNP notes are pointers only — verify on the chart.*

| SID (name) | Runway(s) | RNP / gradient note | Notes |
|---|---|---|---|
| Not confirmed in reachable research pass 🟧 | 12L / 30R / 12R / 30L | Not confirmed this pass | Pull the live current-AIRAC SID list before use |

---

## 5. Initial climb, speed & noise-abatement departure

- **Initial climb / speed:** Per SID/ATC; 250 KIAS below FL100 (EU/ICAO norm) — confirm current chart.
- **Noise-abatement departure procedure (NADP):** No fixed-wing NADP detail confirmed in reachable sources. 🟧
- **Early turn / altitude constraints:** Published per SID — verify constraints on the current chart.

---

## 6. Engine-out / emergency-turn & obstacle considerations

- **Engine-out / emergency-turn procedure:** No published EO/emergency-turn specifics confirmed in reachable sources — apply the operator/type EOSID for the assigned runway. 🟧
- **Close-in / distant obstacles:** No significant close-in high terrain identified for this open Ebro-valley-plain field (Briefing §3.1) — terrain is not the primary departure-path concern here.
- **Special DP / obstacle DP:** Not confirmed in reachable sources — verify on current chart. Note the runway-mounted arresting-cable barriers on both runway pairs (Briefing §3.5/§18) are military ground infrastructure, not an airborne departure-path hazard under normal civil operations.

---

## 7. Low-vis takeoff & de-icing on departure

- **LVTO minima / procedure:** RWY 12L and RWY 30R are confirmed **LVTO-authorised**. LVP trigger: any transmissometer RVR < 600 m, or visibility < 800 m if transmissometers are unserviceable, **or** reported cloud base ≤ 250 ft (75 m). Cancelled when all transmissometers show RVR > 1,000 m **and** cloud base ≥ 300 ft (90 m). See [`OM E — Low Visibility Operations`](../../../../../flight-ops/low-visibility-operations.md).
- **De-icing:** **Available H24** at commercial-aviation stands (hot water/glycol, handling-agent-provided). See [`OM E — Cold Weather Operations`](../../../../../flight-ops/cold-weather-operations.md).

---

## 8. Clearance / CTOT & departure frequency sequence

- **Clearance delivery:** Standard ATC clearance/start-up procedure via Zaragoza TWR/GMC on the appropriate frequency; ground engine tests above idle require prior coordination with CEOPS and use the A-5 holding bay.
- **Frequency sequence:** **Zaragoza TWR 122.105 (civil)/118.105 (GMC) → Zaragoza APP 119.305/127.055/125.005 (civil sectors).** Take the assigned frequency and confirm current chart. (Frequencies from Briefing §8.)
- **CTOT / slot handling:** Commercial passenger flights needing extended operating hours require a **12-hour-advance SLOT PPR**; GA/IFR-VFR traffic requires a **3-hour-advance SLOT PPR**. Standard EUROCONTROL ATFM/CTOT practice otherwise expected. 🟧

---

## 9. Performance watch-items for our types

- **Field-length / weight:** Both runway pairs (3,032 m and 3,718 m) are **non-limiting for any K Global type** — the longer pair was historically qualified as a NASA Space Shuttle TAL contingency runway, underlining its length/strength margin.
- **Density altitude / temperature:** Moderate elevation (862 ft) with a warm reference temperature (32°C) — not classically hot-and-high, but confirm performance margin for a summer-afternoon departure at maximum weight. 🟧
- **Contamination / wet-runway:** Winter snow-plan season (1 Dec-31 Mar) is the relevant seasonal consideration; no specific contamination/braking-action data confirmed this pass. 🟧
- **Link to OM B:** See [`OM B — Fleet Capability Matrix`](../../../../../fleet/capability-matrix.md) — no field-length or field-elevation performance penalty expected for any K Global type at LEZG.

---

## 10. Gotchas

- **The Cierzo wind can produce significant crosswind/gust components with historical gusts to 160 km/h** — treat as a real go/no-go consideration, not background weather.
- **Joint civil/military field** — active fast-jet and transport military flying; "caution must be exercised due to military flights" per the AIP.
- **RWY 12R is not authorised for takeoff** under the special heavy-aircraft (B748/AN124-class) procedure — a class-specific restriction relevant only to exceptionally large types.
- **Code E/F four-engined aircraft must taxi with outboard engines at idle** across the entire movement area.
- **TWY C1 is a shared taxiway** between the northern and southern manoeuvring-area zones — expect deconfliction awareness here, especially during LVP.
- **SLOT PPR lead times (12h passenger / 3h GA)** apply to any extended-hours or GA departure — plan accordingly for irregular-ops scenarios.

---

## Open items (🟧 — confirm against AIP / current AIRAC)

- Current-AIRAC SID names and RNP/gradient specifics per runway.
- Take-off/LVTO minima exact figures.
- Preferential-runway/config logic by wind.
- EOSID/engine-out procedure detail per runway.
- Density-altitude/summer-performance margin confirmation for the warmest reference-temperature days.

> **Live data — pull at planning:** wx/METAR/TAF (with particular attention to Cierzo-wind gust reports), NOTAM (runway/taxiway/navaid/lighting, military-activity NOTAMs), CTOT/ATFM, de-icing status. Not stored in this durable file.

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim charts inform content but are not listed here.*

- AIP España (ENAIRE eAIP) — AD 2-LEZG, items 12, 18, 20-22 — https://aip.enaire.es/aip/contenido_AIP/AD/AD2/LEZG/LE_AD_2_LEZG_en.pdf (retrieved 2026-07-26). Taxi procedures, heavy-aircraft (B748/AN124) taxi routes, LVP, SLOT PPR requirements, engine-test procedure.
- Wikipedia — "Cierzo" — https://en.wikipedia.org/wiki/Cierzo (retrieved 2026-07-26). Regional wind-phenomenon corroboration.

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-26 | Built from AIP España (ENAIRE); K Global fields from live VAMSYS; 4-page pack. |
