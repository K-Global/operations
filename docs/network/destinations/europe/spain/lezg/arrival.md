# LEZG — Zaragoza · Arrival Page

**LEZG / ZAZ** · Garrapinillos, Zaragoza, Aragón, Spain · Europe
**Version** v0.1 · **Updated** 2026-07-26 · **Status** Draft — AIP España-derived

> **Read-me:** Tactical arrival aid for the sim, not a chart. Companion to the [LEZG Briefing](index.md), [Dispatch](dispatch.md) and [Departure](departure.md) pages. STARs/approaches are listed **by name only or flagged not-yet-confirmed** — fly the charted current-AIRAC version; minima shown are pointers, always verify on the current chart. Static data only; live wx/NOTAM are pulled at planning. Open 🟧 items are in §Open items. Flag legend 🟥 restriction/hazard · 🟧 caution/unverified · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| Usual landing runway(s) | **30R** (civil ILS CAT II/III) is the field's primary precision-equipped landing runway; **RWY 30L** is not usable for landing by B748/AN124-class aircraft |
| Usual approach | **ILS CAT II/III (RWY 30R, ident IZZA)** — the only civil ILS in the AIP extract |
| Config logic | Not published in reachable AIP text; the Cierzo wind (Briefing §3.4) is the dominant practical driver on many days |
| Transition level | By QNH; transition altitude 1,850 m / 6,000 ft — verify current chart 🟧 |
| LVP trigger | Any transmissometer RVR < 600 m, or visibility < 800 m if U/S, **or** cloud base ≤ 250 ft (75 m) |
| Missed-approach driver | **Weather (Cierzo wind)** and **traffic (joint civil/military mix)**, not terrain |

---

## 2. STAR / transition selection

- **STARs (names only — verify current AIRAC):** Not confirmed in reachable research pass — pull the current-AIRAC STAR list at planning. 🟧
- **Selection by arrival direction / runway:** Not published in reachable AIP text; expect Zaragoza APP to assign the runway/transition per current wind (especially Cierzo activity) and traffic, including military-flying deconfliction.
- **Transition to approach:** Expect radar vectors to the ILS on RWY 30R under Zaragoza APP; civil approach coverage for RWY 12L, 12R and 30L is not confirmed in the reachable AIP extract (military PAR/SRE radar approaches exist for exclusive military use on all four ends).
- **Speed / flow constraints on the STAR:** Not confirmed this pass — verify chart.

---

## 3. Descent & energy plan

- **Top-of-descent trigger:** Standard descent-profile planning.
- **Speed control:** 250 KIAS below FL100 (EU/ICAO norm) — confirm current chart.
- **Altitude constraints:** Key STAR crossing constraints are pointers — fly the charted altitudes.
- **Energy traps:** 🟥 **The Cierzo wind** — a strong, NW-channelled Ebro-valley wind with historical gusts to 160 km/h — is the standout energy/handling trap here; given the runway orientation (roughly 120°/300° magnetic), a north-westerly Cierzo episode can present as a significant crosswind or near-runway-aligned gust depending on the exact wind angle on the day. Brief a stabilised-approach gate and a firm go-around policy for high-gust conditions. See [`OM E — Adverse Weather and Windshear`](../../../../../flight-ops/adverse-weather-and-windshear.md).

---

## 4. Approach selection by runway

*Names only — verify minima on current AIRAC charts.*

| RWY | Approach (name) | LVP / CAT note | Minima pointer (verify AIRAC) |
|---|---|---|---|
| 30R | ILS CAT II/III (IZZA) | Primary civil precision runway 🟩 | verify current chart |
| 12L | — | LVTO-authorised (departure only); no published civil landing approach found this pass 🟧 | n/a |
| 12R / 30L | Military PAR/SRE radar approaches (exclusive military use) | Civil RNP/visual coverage not confirmed this pass 🟧 | verify current chart |

- **LVP triggers:** Any transmissometer RVR < 600 m, or visibility < 800 m if transmissometers U/S, **or** reported cloud base ≤ 250 ft (75 m). Cancelled when all transmissometers show RVR > 1,000 m **and** cloud base ≥ 300 ft (90 m). During LVP, the tower has **no direct visibility of the civil apron** and a "follow-me" vehicle is used throughout; arrivals vacate RWY 30R via the A-1/A-2/A-3/A-4 intersections with TA toward the civil/military apron.

---

## 5. Approach hazards (terrain / CFIT / specific threats)

- **CFIT / terrain:** 🟩 No significant close-in high terrain identified for this open Ebro-valley-plain field at 862 ft AMSL — terrain is not the operative arrival threat here.
- **Specific threats:** 🟥 **The Cierzo wind** — historical gusts recorded to 160 km/h at this field, with gusts over 100 km/h several times a year — is a genuine, well-documented crosswind/gust hazard on approach and landing. Additionally, **RWY 30L is not usable for landing** by a B748/AN124-class aircraft (TWY B-5 not sized for that class) under the field's special heavy-aircraft procedure.
- **Airspace / traffic:** 🟧 **Joint civil/military aerodrome** — the AIP explicitly cautions on military-flight activity; simultaneous parallel-runway VFR/IFR use is authorised **only in VMC**. Delays after a heavy/turbulent-wake-category landing are possible pending runway inspection (AIP-noted).

---

## 6. Missed approach watch-items

- **Terrain-driven MAP notes:** Not applicable — terrain is not the driver at this field (§5).
- **Re-sequencing environment:** The joint civil/military traffic mix can add re-sequencing complexity after a go-around, particularly during active military-flying periods.
- **Go-around traps:** A destabilised approach into a Cierzo gust event should be flown as an immediate, firm go-around — do not attempt to salvage a large crosswind/gust excursion close to the ground.

---

## 7. Landing runway / LDA & braking / vacate

- **LDA by runway:** RWY 30R **3,032 m**; RWY 12R/30L **3,718 m** (RWY 30L not usable for landing by B748/AN124-class aircraft under the special procedure). No displaced thresholds published for the civil-relevant runway ends — ample margin for any K Global widebody.
- **Braking / vacate:** No rapid-exit taxiway detail specifically confirmed beyond the standard taxiway network (A-1 through A-5, B/C-series) — confirm with Ground on the day. 🟧
- **Runway-excursion watch:** 🟧 No displaced-threshold factor found; standard wet/contaminated-runway caution applies given the winter snow-plan season (1 Dec-31 Mar) and the field's Cierzo-wind crosswind exposure.

---

## 8. Taxi-in routing to terminal & hot spots

- **Typical taxi-in by runway → terminal:** RWY 30R arrivals to the civil apron: vacate via A-1, A-2, A-3 or A-4, taxi via TA, entering the civil apron via C-1.1/C-2.2 (or per ATC instruction). No taxi-in time reference available `[not in VAMSYS]`.
- **Hot spots / tight taxiways:** 🟧 **TWY C1 is a shared taxiway** between the northern and southern manoeuvring-area zones, especially significant during LVP; **Code E/F aircraft exit the civil apron via TWY C-2.2** and, if four-engined, must taxi with outboard engines at idle across the whole movement area.
- **Stand/gate notes:** See [Dispatch §3](dispatch.md) — civil apron PRKG 1-16 is the relevant commercial stand block; no Code-E-specific stand restriction confirmed (contrast neighbouring LEBB).

---

## 9. Arrival frequency sequence

- **Sequence:** **Zaragoza APP 119.305/127.055/125.005 → Zaragoza TWR 122.105 (civil) → Zaragoza TWR 118.105 (GMC).** Take the assigned frequency and confirm current chart. (Frequencies from Briefing §8.)
- **Approach/Departure control:** **Zaragoza APP** provides H24 terminal radar service, including a dedicated military GCA (PAR/SRE radar approach) capability; en-route hand-off is to **Madrid ACC (LECM)** — see [Europe (Continental) Airspace Briefing](../../../../airspace/europe.md) 🟧 (no dedicated Spanish FIR brief exists in this library).

---

## 10. Gotchas

- **The Cierzo wind can produce severe crosswind/gust conditions** — historical gusts to 160 km/h; brief a firm stabilised-approach gate and go-around discipline.
- **Joint civil/military field with active fast-jet traffic** — "caution must be exercised due to military flights" per the AIP.
- **Civil ILS exists on RWY 30R only** — do not expect an equivalent precision approach on the other three runway ends without confirming current-AIRAC coverage.
- **RWY 30L is not usable for landing** by exceptionally large (B748/AN124-class) aircraft.
- **During LVP the tower has no visibility of the civil apron** — expect mandatory follow-me guidance and single-aircraft-per-zone taxiing.
- **Significant bird/raptor activity** — wood pigeons, rock doves, birds of prey, and seasonal starling/crane/stork movements.
- **Not currently in VAMSYS** — no company taxi-time, stand-allocation, or alternates reference exists for this field yet.

---

## Open items (🟧 — confirm against AIP / current AIRAC)

- Current-AIRAC STAR names and exact approach minima per runway.
- Civil approach coverage for RWY 12L, 12R and 30L beyond the military-only PAR/SRE service.
- Rapid-exit taxiway/vacate detail.
- Taxi-in time and stand-allocation practice (field not currently in VAMSYS).

> **Live data — pull at planning:** wx/METAR/TAF/TREND (with particular attention to Cierzo-wind gust reports), NOTAM (runway/approach/navaid/lighting, military-activity NOTAMs), ATIS config/wind trend, current LVP status. Not stored in this durable file.

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim charts inform content but are not listed here.*

- AIP España (ENAIRE eAIP) — AD 2-LEZG, items 12-14, 19, 20, 22, 23 — https://aip.enaire.es/aip/contenido_AIP/AD/AD2/LEZG/LE_AD_2_LEZG_en.pdf (retrieved 2026-07-26). Runway/declared-distance data, ILS detail, LVP procedure, bird-hazard detail, taxi-in routing.
- Wikipedia — "Cierzo" — https://en.wikipedia.org/wiki/Cierzo (retrieved 2026-07-26). Regional wind-phenomenon corroboration.

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-26 | Built from AIP España (ENAIRE); K Global fields from live VAMSYS; 4-page pack. |
