# LEVC — Valencia · Arrival Page

**LEVC / VLC** · Manises, Valencian Community, Spain · Europe
**Version** v0.1 · **Updated** 2026-07-25 · **Status** Draft — AIP España (ENAIRE)-derived

> **Read-me:** Tactical arrival aid for the sim, not a chart. Companion to the [LEVC Briefing](index.md), [Dispatch](dispatch.md) and [Departure](departure.md) pages. STARs/approaches are listed **by name only or flagged not-yet-confirmed** — fly the charted current-AIRAC version; minima shown are pointers, always verify on the current chart. Static data only; live wx/NOTAM are pulled at planning. Open 🟧 items are in §Open items. Flag legend 🟥 restriction/hazard · 🟧 caution/unverified · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| Usual landing runway(s) | **RWY12 or RWY30** — wind-driven, single runway used bidirectionally |
| Usual approach | ILS CAT I (either end) or RNP LPV/LNAV |
| Config logic | Wind-driven; symmetric infrastructure both ends |
| Transition level | Not confirmed this pass 🟧 |
| LVP trigger | Not confirmed in detail — CAT I baseline both ends, no CAT II/III found 🟧 |
| Missed-approach driver | Not terrain (flat plain); re-sequencing/weather (notably autumn DANA) is the operative driver |

---

## 2. STAR / transition selection

- **STARs (names only — verify current AIRAC):** Not confirmed in reachable research pass — pull the current-AIRAC STAR list at planning. 🟧
- **Selection by arrival direction / runway:** Wind-driven choice between RWY12 and RWY30 — both ends carry equivalent ILS CAT I + RNP LPV/LNAV infrastructure, so there is no approach-capability asymmetry to plan around (unlike LEAL/LEMG in this network).
- **Transition to approach:** Radar vectors from Valencia APP onto the assigned ILS/RNP approach; verify the charted transition.
- **Speed / flow constraints on the STAR:** Published speed/altitude gates are pointers only — verify chart.

---

## 3. Descent & energy plan

- **Top-of-descent trigger:** Standard descent-profile planning; plan TOD to meet the first STAR altitude gate.
- **Speed control:** 250 KIAS below FL100 (EU/ICAO norm) — confirm current chart.
- **Altitude constraints:** Key STAR crossing constraints are pointers — fly the charted altitudes.
- **Energy traps:** Under autumn Gota Fría/DANA conditions, expect potential holding/diversion decisions to be made well before the approach phase — the field's real "energy trap" in that season is a late go/no-go call rather than an in-approach profile issue. Otherwise, no notable energy trap identified at this flat, symmetric single-runway field.

---

## 4. Approach selection by runway

*Names only — verify minima on current AIRAC charts.*

| RWY | Approach (name) | LVP / CAT note | Minima pointer (verify AIRAC) |
|---|---|---|---|
| 12 | ILS (VLN); RNP (LPV/LNAV) | **CAT I** 🟩 | verify current chart |
| 30 | ILS (IVC); RNP (LPV/LNAV) | **CAT I** 🟩 — mind the **300 m displaced threshold** (LDA 2,915 m) | verify current chart |

- **LVP triggers:** Not confirmed in detail — CAT I infrastructure confirmed both ends; no CAT II/III found in reachable sources. 🟧

---

## 5. Approach hazards (terrain / CFIT / specific threats)

- **CFIT / terrain:** 🟩 None. Flat Valencian coastal plain at 240 ft AMSL — no close-in high terrain relevant to any arrival path.
- **Specific threats:** 🟥 **Gota Fría/DANA** autumn torrential-rain events are the field's genuinely severe specific threat — the 30 Oct 2024 event flooded the runway/apron and forced roughly 30 diversions with operations suspended overnight. Treat any active DANA advisory in the Oct–Nov window as a serious arrival-planning factor, not routine weather.
- **Airspace / traffic:** 🟩 Moderate density under **Valencia APP**, confirmed **Barcelona ACC (LECB)** territory en route.

---

## 6. Missed approach watch-items

- **Terrain-driven MAP notes:** Not a driver — flat terrain; fly the published MAP and verify climb-gradient/turn on the current chart.
- **Re-sequencing environment:** Moderate-density radar environment under Valencia APP; not a high-congestion field relative to major hubs.
- **Go-around traps:** In active Gota Fría/DANA conditions, a go-around may quickly become a diversion decision given the potential for runway/apron flooding rather than a simple re-approach.

---

## 7. Landing runway / LDA & braking / vacate

- **LDA by runway:** RWY12 **3,215 m**; RWY30 **2,915 m** (300 m displaced threshold). Ample for any K Global type at either end.
- **Braking / vacate:** Rapid-exit taxiway detail not confirmed in reachable sources — confirm with Ground/Apron on the day. 🟧
- **Runway-excursion watch:** 🟧 Standard braking-action considerations apply; the field's dominant wet-weather risk is the DANA/Gota Fría flood scenario (a closure event) rather than a routine contamination/braking-action nuance.

---

## 8. Taxi-in routing to terminal & hot spots

- **Typical taxi-in by runway → terminal:** After landing on the assigned runway, taxi in per Valencia GMC (121.880) assignment; VAMSYS mirror gives a planning taxi-in time of **10 min** `[VAMSYS mirror 2026-07-25]`.
- **Hot spots / tight taxiways:** None formally itemised in reachable sources beyond the AIP's Code E/F oversteering procedures for larger types (Briefing §13). 🟧
- **Stand/gate notes:** See [Dispatch §3](dispatch.md) — AIP-published Code E/F capability at PRKG 23/24/25/27/29; gates 1–4 are the non-Schengen pier.

---

## 9. Arrival frequency sequence

- **Sequence:** **Valencia APP 120.100 (APP/L) / 124.750 (APP/H) → Valencia TWR 118.555 (backup 125.480) → Valencia GMC (Ground) 121.880.** Take the assigned frequency and confirm current chart. (Frequencies from Briefing §8.)
- **Approach/Departure control:** **Valencia APP** is the dedicated local unit; en-route is confirmed **Barcelona ACC (LECB)** — the Valencia TMA sits under **LECB_W_CTR**, see [Europe (Continental) Airspace Briefing](../../../../airspace/europe.md) 🟧, no dedicated Spanish FIR brief exists in-library yet.

---

## 10. Gotchas

- **RWY30's 300 m displaced threshold** (LDA 2,915 m) — confirm this is correctly applied in landing-distance planning.
- **Autumn Gota Fría/DANA events can flood the runway/apron with limited notice** — the 30 Oct 2024 event is a live, recent precedent; treat any active regional heavy-precipitation advisory as a serious arrival-planning factor.
- **The former RWY04/22 is permanently closed** — never expect it as an arrival option.
- **Night noise-abatement regime** (reverse-thrust-from-idle restriction) applies on any arrival within the 2300–0700 LT window.
- **Gates 1–4 are the non-Schengen pier** — confirm gate assignment against Schengen/non-Schengen routing needs on arrival.

---

## Open items (🟧 — confirm against AIP / current AIRAC)

- Current-AIRAC STAR names and exact approach minima per runway.
- Transition level.
- Rapid-exit taxiway/vacate detail.
- Exact LVP/CAT trigger conditions.

> **Live data — pull at planning:** wx/METAR/TAF/TREND, NOTAM (runway/approach/navaid/lighting, especially any DANA/Gota Fría flooding advisory), ATIS config/wind trend. Not stored in this durable file.

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim charts inform content but are not listed here.*

- **AIP España (ENAIRE), AD 2-LEVC**, current AIRAC — https://aip.enaire.es/AIP/contenido_AIP/AD/AD2/LEVC/LE_AD_2_LEVC_en.html (retrieved 2026-07-26). *STAR/IAP index, runway/declared-distance data, communications.*
- AeroTime — "Storm floods Valencia airport, disrupts nearly 80 flights" — https://www.aerotime.aero/articles/storm-floods-valencia-airport-disrupts-nearly-80-flights (retrieved 2026-07-26).

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-25 | Built from AIP España (ENAIRE); K Global fields from live VAMSYS; 4-page pack. |
