# LFBO — Toulouse-Blagnac · Arrival Page

**LFBO / TLS** · Blagnac (Toulouse), Haute-Garonne, France · Europe
**Version** v0.1 · **Updated** 2026-07-26 · **Status** Draft

> **Read-me:** Tactical arrival aid for the sim, not a chart. Companion to the [LFBO Briefing](index.md), [Dispatch](dispatch.md) and [Departure](departure.md) pages. STARs/approaches are listed **by name only or flagged not-yet-confirmed** — fly the charted current-AIRAC version; minima shown are pointers, always verify on the current chart. Static data only; live wx/NOTAM are pulled at planning. Open 🟧 items are in §Open items. Flag legend 🟥 restriction/hazard · 🟧 caution/unverified · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| Usual landing runway(s) | **14R/32L** (main CAT III/longer pair); **RWY 14R only** mandated 2200–0600 in the RWY-14 configuration |
| Usual approach | **ILS CAT III on RWY 14R**; ILS (sub-category unconfirmed) on 14L/32R/32L |
| Config logic | Config-dependent; night-hours rule funnels RWY-14-config traffic to 14R (§Briefing §11) |
| Transition level | By QNH — not confirmed this pass 🟧 |
| LVP trigger | Not confirmed for LFBO specifically; RWY 14R must be vacated via TWY M2 under LVP 🟧 |
| Missed-approach driver | Traffic/config re-sequencing in a mixed commercial/Airbus-test environment, not terrain |

---

## 2. STAR / transition selection

- **STARs (names only — verify current AIRAC):** Not confirmed in reachable research pass — pull the current-AIRAC STAR list at planning. 🟧
- **Selection by arrival direction / runway:** Config-dependent; RWY 14R is the field's precision/night-mandated direction. Night-hours rule (2200–0600, RWY-14 configuration) restricts **landings to RWY 14R only** — do not expect 14L as a night-arrival option in that configuration.
- **Transition to approach:** Not individually documented — expect radar vectors from Blagnac/Toulouse Approche onto final.
- **Speed / flow constraints on the STAR:** Published speed/altitude gates are pointers only — verify chart.

---

## 3. Descent & energy plan

- **Top-of-descent trigger:** Standard descent-profile planning; plan TOD to meet the first STAR altitude gate.
- **Speed control:** 250 KIAS below FL100 (EU/ICAO norm) — confirm current chart.
- **Altitude constraints:** Key STAR crossing constraints are pointers — fly the charted altitudes.
- **Energy traps:** A late runway/config change ahead of the night-hours cutover (RWY-14-config traffic funnels to 14R only at 2200) is the field's clearest schedule-adjacent energy trap — brief the possibility of a runway reassignment if the arrival is timed close to 2200 or 0600.

---

## 4. Approach selection by runway

*Names only — verify minima on current AIRAC charts.*

| RWY | Approach (name) | LVP / CAT note | Minima pointer (verify AIRAC) |
|---|---|---|---|
| 14L | ILS (TG, 108.9) | Sub-category not confirmed 🟧 | verify current chart |
| 32R | ILS (TD, 108.35) | Sub-category not confirmed 🟧 | verify current chart |
| 14R | ILS (TBS, 110.7) | **CAT III** 🟩 — night-mandated runway in RWY-14 config | verify current chart |
| 32L | ILS (TBN, 109.3) | Sub-category not confirmed 🟧 | verify current chart |

- **LVP triggers:** Not confirmed for LFBO specifically this pass — treat as indicative pending current-AIRAC confirmation. 🟧 RWY 14R must be vacated at its extremity via TWY M2 under LVP; TWY M4 usable only on specific ATC clearance.

---

## 5. Approach hazards (terrain / CFIT / specific threats)

- **CFIT / terrain:** 🟩 None. Garonne-valley plain at 499 ft AMSL — no close-in high terrain relevant to any arrival path.
- **Specific threats:** 🟧 Mixed commercial/Airbus flight-test traffic sharing the field — expect non-standard traffic patterns and confirm sequencing awareness with ATC, particularly around Code F (A380/An-124/B747-8/B777-300) movements.
- **Airspace / traffic:** 🟩 Radar environment under Blagnac/Toulouse Approche (DSNA) — moderate traffic density with the manufacturer-traffic caveat above.

---

## 6. Missed approach watch-items

- **Terrain-driven MAP notes:** Terrain is not the driver (flat valley plain) — fly the published MAP and verify climb-gradient/turn on the current chart.
- **Re-sequencing environment:** Expect standard radar vectoring for re-sequencing after a miss; factor in potential Airbus flight-test traffic in the pattern.
- **Go-around traps:** RWY 14R's CAT III capability is the field's principal low-vis mitigation; a go-around during marginal weather should anticipate that the other three runway ends carry ILS of unconfirmed sub-category.

---

## 7. Landing runway / LDA & braking / vacate

- **LDA by runway:** 14L/32R **3,025 m** each; 14R/32L **3,503 m** each — no displaced thresholds identified in the reachable extract; cross-ref [Briefing §7](index.md).
- **Braking / vacate:** Rapid-exit taxiway detail not confirmed in reachable sources — confirm with Ground/Apron on the day. Under LVP, **RWY 14R must be vacated at its extremity via TWY M2**; **TWY M4** requires a specific ATC clearance. 🟧
- **Runway-excursion watch:** 🟧 No displaced thresholds confirmed; de-icing availability/season not confirmed this pass, so no specific winter-contamination braking-action data is available — build conservative margin pending confirmation.

---

## 8. Taxi-in routing to terminal & hot spots

- **Typical taxi-in by runway → terminal:** After landing, taxi in per Ground/Apron assignment; VAMSYS mirror gives a planning taxi-in time of **10 min** `[VAMSYS mirror 2026-07-26]`.
- **Hot spots / tight taxiways:** 🟥 **TWY P101** is Airbus-manufacturer (A380) activity only. **TWY P10** is clearstrip-limited to 84 m (captain's-responsibility taxi 52–65 m wingspan, forbidden ≥ 65 m except manufacturer activity). Half-turns on taxiways/runways are prohibited for turbojets > 24 m wingspan and turboprops > 36 m wingspan.
- **Stand/gate notes:** See [Dispatch §3](dispatch.md) — Code F traffic parks at dedicated stand D51; K Global Category R stand/terminal assignment not individually confirmed.

---

## 9. Arrival frequency sequence

- **Sequence:** **Blagnac/Toulouse Approche (121.105 / 120.355 / 123.850 / 124.975 / 125.180 / 129.305) → Blagnac Tour 118.100 → Blagnac Sol (Ground) 121.900.** Take the assigned frequency and confirm current chart. (Frequencies from Briefing §8.)
- **Approach/Departure control:** **Blagnac Approche** and **Toulouse Approche** (DSNA) provide the terminal approach service; **Bordeaux ACC (LFBB)** hands off en route inbound — no dedicated OM C FIR brief exists yet, see [Europe Airspace Briefing](../../../../airspace/europe.md). 🟧

---

## 10. Gotchas

- **Night RWY-use rule funnels RWY-14-config landings to 14R only** between 2200–0600 — do not expect 14L as an arrival option in that configuration and window.
- **Mixed commercial/Airbus flight-test traffic** — maintain heightened awareness for non-standard patterns and Code F ground movements, even though this is primarily a ground-operations rather than airborne threat.
- **Noise-curfew eligibility applies on arrival too** — a non-compliant or under-margin turbofan aircraft may not land in the restricted window even if the flight is otherwise on schedule.
- **RWY 14R vacate procedure under LVP is via TWY M2 only** — do not plan a different high-speed exit assuming normal-visibility routing during LVP.

---

## Open items (🟧 — confirm against AIP / current AIRAC)

- Current-AIRAC STAR names and exact approach minima per runway.
- Transition level and LVP RVR/ceiling trigger for LFBO specifically.
- ILS sub-category on 14L/32R/32L.
- Rapid-exit taxiway/vacate detail outside LVP.
- Stand/gate assignment for K Global arrivals.

> **Live data — pull at planning:** wx/METAR/TAF/TREND, NOTAM (runway/approach/navaid/lighting, esp. CAT III equipment status and P101/M2/M4), ATIS config/wind trend. Not stored in this durable file.

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim charts inform content but are not listed here.*

- **SIA France eAIP, AD 2 LFBO** (AD 2.13, 2.18, 2.19, 2.21), mirrored via DIRCAM MIAC1, cycles AMDT 06/25 / eff. 12 JUN 2025 / eff. 28 DEC 2023 — https://www.dircam.dsae.defense.gouv.fr/images/Stories/Doc/MIAC1/miac1_toulouse_blagnac_lfbo.pdf (retrieved 2026-07-26).

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-26 | Built from SIA France eAIP; K Global fields from live VAMSYS; 4-page pack. |
