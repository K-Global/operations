# RCTP — Taiwan Taoyuan Intl · Arrival Page

**RCTP / TPE** · Taoyuan, Taiwan · Asia
**Version** v0.1 · **Updated** 2026-07-26 · **Status** Draft — AIP Taiwan (CAA)-derived, Asia network build

> **Read-me:** Tactical arrival aid for the sim, not a chart. Companion to the [RCTP Briefing](index.md), [Dispatch](dispatch.md) and [Departure](departure.md) pages. STARs/approaches are listed **by name only or flagged not-yet-confirmed** — fly the charted current-AIRAC version; minima shown are pointers, always verify on the current chart. Static data only; live wx/NOTAM are pulled at planning. Open 🟧 items are in §Open items. Flag legend 🟥 restriction/hazard · 🟧 caution/unverified · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| Usual landing runway(s) | ATC/wind-assigned across both pairs — no single preferential rule confirmed 🟧; fixed traffic-pattern rule 05L/05R left-hand, 23R/23L right-hand |
| Usual approach | ILS on the assigned runway end (all four ends equipped); exact CAT sub-category not confirmed 🟧 |
| Config logic | ATC/wind-driven; no single published rule confirmed this pass 🟧 |
| Transition level | By QNH; Transition Altitude **11,000 ft** `[AIP 2.17]` — verify TL on current chart 🟧 |
| LVP trigger | RVR < 550 m (or VIS 800 m if RVR unavailable); tightens further below 300 m and 175 m RVR 🟧 |
| Missed-approach driver | Not terrain-class; charted LOC-sector/obstacle restrictions and traffic/airspace density are the operative drivers |

---

## 2. STAR / transition selection

- **STARs (names only — verify current AIRAC):** **BAKER 1A/1B, DRAKE 1A/1B, GRACE 1A/1B, TONGA 1A/1B, TNN 1A/1B** — keyed to the FIR entry fix: SALMI/SULEM/KASKA → BAKER; BULAN → DRAKE; SEDKU → GRACE; ENVAR/OLDID → TONGA; KAPLI/POTIB → TNN `[AIP 2.22.1/2.22.4]`.
- **Selection by arrival direction / runway:** The **"A"** suffix is flown for RWY 05L/05R and the **"B"** suffix for RWY 23L/23R; Taipei ACC/Approach assigns the transition for the active configuration.
- **Transition to approach:** A **Continuous Descent Operation (CDO)** is available **1700–2300 UTC daily** for RNAV/FMC-capable aircraft (LNAV + VNAV, continuing the planned vertical path onto the ILS of the landing runway), subject to the ILS being in operation, RVR at/above ILS CAT I minimum, and no navigation-system degradation `[AIP 2.22.4]`. Request "CDO" on first contact with Taipei ACC; ATC will re-clear or terminate the CDO if traffic or the runway-in-use changes.
- **Speed / flow constraints on the STAR:** Mandatory arrival speed control — **280 KT IAS at/below FL250 and at/above FL130**; **maximum 280 KT IAS below FL130 and at/above 10,000 ft** — unless ATC instructs otherwise or the aircraft is entering holding `[AIP 2.22.3]`. Non-CDO descent planning: via BAKER 1/DRAKE 1/GRACE 1, cross COPRA/DRAKE/GRACE at/maintain **FL200** (RWY 05L/05R) or **FL140** (RWY 23R/23L); via TONGA 1/TNN 1, cross BOCCA/MENON/ARLEN/ABSOL at/maintain **FL290** `[AIP 2.22.5]`.

---

## 3. Descent & energy plan

- **Top-of-descent trigger:** Plan TOD to meet the STAR-specific crossing gates above (FL200/FL140/FL290 per arrival STAR and runway); a CDO (where approved) plans a continuous descent from cruise onto the ILS vertical path.
- **Speed control:** 280 KT IAS gates per §2 above; comply unless ATC instructs otherwise.
- **Altitude constraints:** Per the STAR-specific crossing altitudes above — pointer only, verify current chart.
- **Energy traps:** A late runway-configuration change (05↔23, driven by a wind shift or an ATC-initiated CDO termination) is the primary identified energy trap — a CDO in progress may be amended or cancelled if the runway-in-use changes mid-descent.

---

## 4. Approach selection by runway

*Names only — verify minima on current AIRAC charts.*

| RWY | Approach (name) | LVP / CAT note | Minima pointer (verify AIRAC) |
|---|---|---|---|
| 05L | ILS (LOC ITIA / GP) | CAT II/III-grade infrastructure (R-UPS, LVP to RVR 175 m); exact ILS sub-category not confirmed 🟧 | Verify current chart |
| 23R | ILS (LOC ITYA / GP) | Same 🟧 | Verify current chart |
| 05R | ILS (LOC ICKS / GP) | Same 🟧 | Verify current chart |
| 23L | ILS (LOC ICJN / GP) | Same 🟧; most-reduced LDA (3,450 m, THR displaced 350 m) | Verify current chart |

- **LVP triggers:** RVR < 550 m or VIS 800 m if RVR unavailable — see [Briefing §10](index.md)/[Departure §7](departure.md).

---

## 5. Approach hazards (terrain / CFIT / specific threats)

- **CFIT / terrain:** 🟧 No Himalaya-belt-class exposure; however **LOC 05L is unusable beyond 17 NM between 24°–26° left of course** due to terrain, and **LOC 23R / LOC 23L are each unusable beyond 10° left of course** due to terrain — fly the charted sector, don't rely on raw LOC guidance outside it. The on-field VOR/DME (APU) shows indicator swing on the 115°–315° radial sector due to terrain effects.
- **Specific threats:** AIP-published obstacles (buildings up to 501 ft, an electric tower at 333 ft, trees up to 375 ft) sit within the 23L-approach/05R-take-off funnel; further buildings/trees (112–235 ft) affect the 05L/23R and 05R/23L funnels — standard obstacle-clearance compliance applies via the charted procedure.
- **Airspace / traffic:** RCTP is a major East-Asia hub under **Radar** control (Taipei Approach); expect vectoring/sequencing at busy periods — see [Asia Airspace Brief](../../../../airspace/asia.md) for the wider Taipei (**RCAA**) FIR picture.

---

## 6. Missed approach watch-items

- **Terrain-driven MAP notes:** Not a terrain-class driver at this field; fly the published missed approach and verify climb-gradient/turn on the current chart.
- **Re-sequencing environment:** A go-around returns the aircraft to a high-density Radar environment under Taipei Approach — expect vectoring/possible holding, especially during a bank or an active LVP event.
- **Go-around traps:** Pilots must notify Tower immediately on a go-around `[AIP 2.20.1]`; brief for concurrent reciprocal-configuration traffic given the fixed left/right traffic-pattern rule ([Briefing §13](index.md)).

---

## 7. Landing runway / LDA & braking / vacate

- **LDA by runway:** 05L/23R **3,660 m** (no displacement); 05R **3,700 m** (THR displaced 100 m); 23L **3,450 m** (THR displaced 350 m — the most-reduced landing distance at the field). Always brief the correct LDA per runway/direction, not the full physical runway length.
- **Braking / vacate:** Standard vacate checkpoints are published for low-visibility operations (§8 below); rapid-exit taxiway detail beyond that is not confirmed in reachable sources. 🟧
- **Runway-excursion watch:** 🟧 RWY 23L's 350 m threshold displacement is the largest at the field — confirm the LDA-vs-required-landing-distance margin explicitly for this runway/direction, especially in a tropical-rain/wet-runway event.

---

## 8. Taxi-in routing to terminal & hot spots

- **Typical taxi-in by runway → terminal:** Under low-visibility conditions, unless ATC instructs otherwise for separation, arriving aircraft vacate and proceed to: **RWY 05L** → TWY N/N10 or L/L2; **RWY 23R** → TWY P/P1 or N/N2/P2; **RWY 05R** → TWY S/S9; **RWY 23L** → TWY R/R1 or S/S3 `[AIP 2.20.5]`. VAMSYS mirror gives a planning taxi-in time of **12 min** `[VAMSYS mirror 2026-07-26]`.
- **Hot spots / tight taxiways:** 🟥 Three AIP-published Hot Spots — **TWY N11/L2** and **TWY N9/L1** crossing RWY 05L/23R to/from the cargo apron (bays 516–525), and the **service road/TWY S8** crossing RWY 05R/23L to/from the south fire station — taxi with vigilance, especially during a concurrent runway-crossing movement.
- **Stand/gate notes:** See [Dispatch §3](dispatch.md) — Code E/F-rated stands exist across Aprons A–D/cargo/remote-parking; exact gate assignment for our operation not confirmed. 🟧

---

## 9. Arrival frequency sequence

- **Sequence:** **Taipei Approach (119.60/119.70/121.00/123.50/125.10/125.60/128.50 MHz, sector-dependent) → Taipei Tower 118.70 MHz (alt 129.30 MHz) → Taipei Ground 121.60 MHz (Apron B/C/Remote-Parking 601–615, 2200–1600 UTC) or 121.70 MHz (otherwise).** Take the assigned frequency and confirm current chart (frequencies from [Briefing §8](index.md)).
- **Approach/Departure control:** **Taipei Approach** (Radar) handles all IFR traffic to/from RCTP; **Taipei Tower** handles the VMC traffic pattern only; **Taipei ACC** hands off en route — see [Asia Airspace Brief](../../../../airspace/asia.md) for the Taipei (**RCAA**) FIR. 🟧 Exact sector/frequency assignment is AIRAC-dependent.

---

## 10. Gotchas

- **RWY 23L carries the field's largest threshold displacement** (350 m, LDA 3,450 m) — don't assume the full physical runway length is available for landing.
- **LOC 05L/23R/23L sectors are each terrain-restricted** (17 NM/24°–26° left for 05L; 10° left for 23R and 23L) — fly the charted sector.
- **Fixed left/right traffic-pattern rule** (05L/05R left, 23R/23L right) — a go-around must be reported to Tower immediately.
- **Typhoon season (~Jun–Oct, peak Jul–Sep)** can force a rapid LVP/ground-stop event or a large-scale re-route — brief a diversion contingency in season.
- **Three AIP-published ground Hot Spots** on taxi-in near the cargo apron and south fire station — expect crossing instructions.
- **Bird activity year-round, peaking Mar–May** — brief a strike-risk lookout in season.

---

## Open items (🟧 — confirm against AIP / current AIRAC)

- Exact ILS sub-category (CAT I/II/III) per runway end.
- Current-AIRAC STAR names/altitudes (confirmed from a 2023-cycle AIP extract — re-verify against a more current cycle).
- Transition level (by QNH) exact figure.
- Rapid-exit taxiway/vacate detail beyond the published LVP checkpoints.
- Current gate/stand assignment for the K Global operation.

> **Live data — pull at planning:** wx/METAR/TAF/TREND, NOTAM (runway/approach/navaid/lighting, esp. LVP/Stop-Bar/Surface Movement Surveillance System status), ATIS config, bird-activity advisories, typhoon/tropical-cyclone advisories. Not stored in this durable file.

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim charts inform content but are not listed here.*

- **AIP Taiwan (Civil Aeronautics Administration, MOTC), AD 2 RCTP**, AMDT 01-23, eff. 2023-01-12 — STAR/holding-fix data, CDO/descent-planning procedures, arrival speed control, runway/declared-distance data, communications, local aerodrome regulations (LVP vacate checkpoints) — https://ais.caa.gov.tw/eaip/AIP%20AMDT%2001-23_2023_01_12/eAIP/RC-AD%202%20RCTP%20%E8%87%BA%E7%81%A3%E6%A1%83%E5%9C%92%E5%9C%8B%E9%9A%9BTAIPEI-TAIWAN%20TAOYUAN%20INTL-en-GB.html (retrieved 2026-07-26).
- OurAirports — https://ourairports.com/airports/RCTP/runways.html (retrieved 2026-07-26). *Displaced-threshold corroboration.*

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-26 | Built from national AIP; K Global fields from live VAMSYS; 4-page pack. |
