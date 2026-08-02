# FACT — Cape Town Intl · Arrival Page

**FACT / CPT** · Cape Town, Western Cape, South Africa · Africa
**Version** v0.1 · **Updated** 2026-07-26 · **Status** Draft

> **Read-me:** Tactical arrival aid for the sim, not a chart. Companion to the [FACT Briefing](index.md), [Dispatch](dispatch.md) and [Departure](departure.md) pages. STARs/approaches are listed **by name only** — fly the charted current-AIRAC version; minima shown are pointers, always verify on the current chart. Static data only; live wx/NOTAM are pulled at planning. Open 🟧 items are in §Open items. Flag legend 🟥 restriction/hazard · 🟧 caution/unverified · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| Usual landing runway(s) | **01 or 19** — wind/crosswind-driven |
| Usual approach | ILS on the assigned runway; RWY 01 within CAT IIIB tolerances, RWY 19 CAT II |
| Config logic | 🟥 Selected primarily for **crosswind-limit compliance** against the SE "Cape Doctor" (Sep–Mar, peak Nov–Mar), not a clean headwind default |
| Transition level | By QNH; TA 7,500 ft — verify current chart 🟧 |
| LVP trigger | Not confirmed this pass; RWY 01's CAT IIIB-tolerance ILS is the standing low-vis asset 🟧 |
| Missed-approach driver | Airspace/traffic re-sequencing and crosswind/gust management, not terrain |

---

## 2. STAR / transition selection

- **STARs (names only — verify current AIRAC):** ERDAS, GETEN, ROBBEN ISLAND, ASPIK, EVUKI — runway-specific variants for 01 and 19; verify current AIRAC.
- **Selection by arrival direction / runway:** The active 01/19 selection (crosswind-driven, §1) determines the STAR-to-runway feed; Cape Town Approach assigns the transition.
- **Transition to approach:** Expect an RNAV-STAR-to-ILS transition with radar vectors onto final; verify the charted transition.
- **Speed / flow constraints on the STAR:** Published speed/altitude gates are pointers only — verify chart.

---

## 3. Descent & energy plan

- **Top-of-descent trigger:** Standard descent-profile planning; plan TOD to meet the first STAR altitude gate.
- **Speed control:** STAR speed gates and 250 KIAS below FL100 — confirm current chart.
- **Altitude constraints:** Key STAR crossing constraints are pointers — fly the charted altitudes.
- **Energy traps:** Gusty, mechanically-turbulent conditions during a Cape Doctor event can produce airspeed/energy excursions on final — brief a stabilised-approach discipline and a firm go-around decision point in season.

---

## 4. Approach selection by runway

*Names only — verify minima on current AIRAC charts.*

| RWY | Approach (name) | LVP / CAT note | Minima pointer (verify AIRAC) |
|---|---|---|---|
| 01 | ILS (CTI) | Published **within ICAO CAT IIIB tolerances**, available without restriction 🟩 | verify current chart |
| 19 | ILS Z / ILS Y (KSI) | **CAT II**; GP angle 3.2° (steep); Tygerberg Mountain mast within PAPI coverage — VFR flights not to establish glideslope on PAPI beyond 5 NM from THR 🟧 | verify current chart |

- **LVP triggers:** Not confirmed this pass; RWY 01's CAT IIIB-tolerance ILS is the field's standing low-vis mitigation. 🟧

---

## 5. Approach hazards (terrain / CFIT / specific threats)

- **CFIT / terrain:** 🟧 Cape Peninsula high ground (Table Mountain, Constantiaberg) lies south/southwest of the field, not close-in to the runway centrelines; the **Tygerberg Mountain mast (787 ft AMSL)** sits within the RWY 19 PAPI coverage area — a specific VFR caution, not an instrument-approach obstacle-clearance issue.
- **Specific threats:** 🟥 **The SE "Cape Doctor"** (Sep–Mar, peak Nov–Mar, commonly 20–35+ kt in exposed conditions) produces a significant crosswind on final for RWY 01/19 — the field's defining approach hazard. High bird activity is also noted October–March, coinciding with the same season.
- **Airspace / traffic:** 🟩 Moderate traffic density under Cape Town Approach; standard radar sequencing.

---

## 6. Missed approach watch-items

- **Terrain-driven MAP notes:** Not terrain-driven at this field — fly the published MAP and verify climb-gradient/turn on the current chart.
- **Re-sequencing environment:** A go-around during a Cape Doctor event returns you to a gusty, crosswind-affected environment — expect vectoring for re-sequencing and brief a firm crosswind-limit go/no-go for the next attempt.
- **Go-around traps:** Gust-induced energy/configuration excursions on the initial approach are the primary go-around trigger in season, more so than traffic conflict.

---

## 7. Landing runway / LDA & braking / vacate

- **LDA by runway:** 01/19 **3,201 m** (no displaced thresholds published); 16/34 **1,701 m** (dual-use taxiway/runway) — see [Briefing §7](index.md).
- **Braking / vacate:** For light/medium aircraft, RWY 19 in use → vacate at TWY C without delay; RWY 01 in use → vacate at TWY E or RWY 34. For heavy aircraft, RWY 19 in use → vacate at TWY B or C; RWY 01 in use → vacate at TWY A, TWY E or RWY 34.
- **Runway-excursion watch:** 🟧 Gusty crosswind conditions during Cape Doctor events raise runway-excursion risk on landing rollout; winter (Jun–Aug) frontal-system rain is the seasonal wet-runway consideration.

---

## 8. Taxi-in routing to terminal & hot spots

- **Typical taxi-in by runway → terminal:** After landing, vacate per §7 and taxi in via Ground/Apron assignment to the main terminal aprons (A/B/C); VAMSYS mirror gives a planning taxi-in time of **12 min** `[VAMSYS mirror 2026-07-26]`.
- **Hot spots / tight taxiways:** 🟧 See [Briefing §13](index.md) — TWY D3/D4 (light/medium only), TWY H (security-gated, radio contact required), TWY T (marking/lighting caution).
- **Stand/gate notes:** See [Dispatch §2](dispatch.md) — international/regional arrivals must park on the main aprons to clear immigration.

---

## 9. Arrival frequency sequence

- **Sequence:** **Cape Town Approach (119.7, Director 124.35 during high traffic) → Tower 118.1 → Ground (SMC) 121.9.** Take the assigned frequency and confirm current chart. (Frequencies from Briefing §8.)
- **Approach/Departure control:** **Cape Town Approach** (ATNS) is the terminal facility; **Cape Town Control (ACC)** hands off en route inbound — see [Africa Airspace brief](../../../../airspace/africa.md) for the Cape Town FIR (FACA). 🟧 Exact sector/frequency assignment is AIRAC-dependent.

---

## 10. Gotchas

- **The Cape Doctor makes runway selection a crosswind decision, not a headwind one** — check crosswind limits before committing, especially Nov–Mar.
- **RWY 19's PAPI coverage includes the Tygerberg Mountain mast** — VFR flights must not establish a glideslope on the PAPI beyond 5 NM from the threshold.
- **High bird activity October–March** — exercise caution on the approach and landing roll.
- **RWY 16/34 is also a taxiway** — maintain ground-movement awareness on taxi-in if operations are active there.
- **Gusty crosswind conditions can produce late go-around decisions** in Cape Doctor season — brief a firm stabilised-approach gate.

---

## Open items (🟧 — confirm against AIP / current AIRAC)

- Current-AIRAC STAR names and exact approach minima per runway.
- CAT II/CAT IIIB RVR/trigger values.
- Current taxi-in routing and gate assignment for our operation, given the apron-parking-for-immigration requirement.

> **Live data — pull at planning:** wx/METAR/TAF/TREND (esp. wind/crosswind), NOTAM (runway/approach/navaid/lighting), ATIS config/wind trend. Not stored in this durable file.

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim charts inform content but are not listed here.*

- **AIP South Africa (ATNS/SACAA), AD 2 FACT** — STAR/IAP index, runway/declared-distance data, communications, ground-ops remarks — https://cad.atns.co.za/SmartAIM/EAipPackages/15-OCT-21/2021-10-15-000000/html/eAIP/FA-AD-2-FACT-en-US.html (retrieved 2026-07-26).
- Cape Town Magazine — "The Cape Doctor" — https://www.capetownmagazine.com/cape-doctor (retrieved 2026-07-26).

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-26 | Built from AIP South Africa (ATNS); K Global fields from live VAMSYS; 4-page pack. |
