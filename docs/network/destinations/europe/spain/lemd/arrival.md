# LEMD — Adolfo Suárez Madrid-Barajas · Arrival Page

**LEMD / MAD** · Madrid, Spain · Europe
**Version** v0.1 · **Updated** 2026-07-26 · **Status** Draft

> **Read-me:** Tactical arrival aid for the sim, not a chart. Companion to the [LEMD Briefing](index.md), [Dispatch](dispatch.md) and [Departure](departure.md) pages. STARs/approaches are listed **by name only or flagged not-yet-confirmed** — fly the charted current-AIRAC version; minima shown are pointers, always verify on the current chart. Static data only; live wx/NOTAM are pulled at planning. Open 🟧 items are in §Open items. Flag legend 🟥 restriction/hazard · 🟧 caution/unverified · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| Usual landing runway(s) | **32L / 32R** by day in the preferential North configuration (0700–2300 LT); **18L / 18R** in the non-preferential South configuration; **32R only** in the night-preferential North config (2300–0700 LT), **18L only** non-preferential |
| Usual approach | **ILS CAT III** on the assigned landing runway (all four landing runways are CAT III-equipped) |
| Config logic | Wind/time-of-day driven **segregated North/South configuration**; Madrid ACC assigns by TMA geographic entry (East → 32R/18L, West → 32L/18R) except when safety/flow dictates otherwise |
| Transition level | By QNH; transition altitude 3,962 m / 13,000 ft MSL — verify current chart 🟧 |
| LVP trigger | CAT III procedures apply on all four landing runways; exact RVR trigger not confirmed this pass 🟧 |
| Missed-approach driver | Airspace/traffic density (four-runway segregated-parallel environment under A-CDM flow), not terrain |

---

## 2. STAR / transition selection

- **STARs (names only — verify current AIRAC):** Not confirmed in reachable research pass — pull the current-AIRAC STAR list at planning. 🟧
- **Selection by arrival direction / runway:** Madrid ACC assigns arrivals by **TMA geographic entry criteria** — traffic arriving from the East is normally cleared to **32R/18L**, traffic from the West to **32L/18R** — except when a different runway is required for safety or continuous traffic flow.
- **Transition to approach:** Expect an RNAV-STAR-to-ILS transition with radar vectors onto final under Madrid APP; verify the charted transition.
- **Speed / flow constraints on the STAR:** Published speed/altitude gates are pointers only — verify chart; expect flow-sequencing speed control given the high-density segregated-parallel environment.

---

## 3. Descent & energy plan

- **Top-of-descent trigger:** Standard descent-profile planning; plan TOD to meet the first STAR altitude gate. The elevated field (1,998 ft) and high transition altitude (13,000 ft) mean the descent profile terminates at a materially higher indicated altitude than a sea-level field — brief accordingly.
- **Speed control:** STAR speed gates and 250 KIAS below FL100 (EU/ICAO norm) — confirm current chart.
- **Altitude constraints:** Key STAR crossing constraints are pointers — fly the charted altitudes.
- **Energy traps:** Late runway/config changes (North↔South ahead of a wind shift) and re-sequencing/holding during peak banks are the main energy traps at this field; the segregated-runway system means a late config change is a **wholesale runway reassignment**, not a same-pair reciprocal swap.

---

## 4. Approach selection by runway

*Names only — verify minima on current AIRAC charts.*

| RWY | Approach (name) | LVP / CAT note | Minima pointer (verify AIRAC) |
|---|---|---|---|
| 32R | ILS (MBB) | **CAT III** — THR displaced 500 m 🟩 | verify current chart |
| 32L | ILS (MAA) | **CAT III** — THR displaced 928 m 🟩 | verify current chart |
| 18L | ILS (IML) | **CAT III** — THR displaced 500 m 🟩 | verify current chart |
| 18R | ILS (IMR) | **CAT III** — THR displaced 814 m 🟩 | verify current chart |
| 14L/14R/36R/36L | — none — | **Never landing runways** — takeoff-only, no approach published | n/a |

- **LVP triggers:** CAT III procedures apply on all four landing runways; ILS sub-category (IIIA/IIIB) and exact RVR trigger not confirmed from a primary table this pass. 🟧

---

## 5. Approach hazards (terrain / CFIT / specific threats)

- **CFIT / terrain:** 🟩 None close-in. Flat Meseta plateau at 1,998 ft AMSL; the Sistema Central (Guadarrama range, peaks ~2,400 m) lies well north of the field and is not a factor on standard arrival profiles.
- **Specific threats:** 🟥 **Four fully segregated one-way runways** sustain continuous high traffic density on two independent-parallel arrival avenues; a runway/navaid outage on the assigned landing runway has no same-pair reciprocal fallback (the reciprocal designation is takeoff-only). Wake from the adjacent parallel is a standing consideration during simultaneous independent operations.
- **Airspace / traffic:** 🟥 Very high density under **Madrid APP** — one of Europe's busiest terminal areas; brief for re-sequencing and extended vectoring, especially in marginal weather or during a config change.

---

## 6. Missed approach watch-items

- **Terrain-driven MAP notes:** Terrain is not the driver (flat plateau) — fly the published MAP and verify climb-gradient/turn on the current chart.
- **Re-sequencing environment:** A go-around drops you back into a very high-density, four-runway segregated-parallel environment under strict A-CDM flow discipline — expect extended vectoring and possible holding before re-sequencing.
- **Go-around traps:** Traffic/config awareness on the parallel arrival avenue during the miss; the independent-parallel geometry means the adjacent runway may be conducting simultaneous arrivals or departures depending on config.

---

## 7. Landing runway / LDA & braking / vacate

- **LDA by runway:** 32R **3,000 m** (THR displaced 500 m); 32L **3,060 m** (THR displaced 928 m); 18L **3,000 m** (THR displaced 500 m); 18R **3,365 m** (THR displaced 814 m) — all four are ample for any K Global widebody at typical arrival weights, but the displaced thresholds mean the **usable landing distance is materially shorter than the physical runway length**; brief the actual LDA, not the runway length. 🟧
- **Braking / vacate:** Named rapid-exit taxiways are published per runway (e.g. K4/K5 for 32R, L2–L5/L7 for 32L, Y4/Y5 for 18L, Z7/Z8/Z10 for 18R) with wake-turbulence-category-specific distance-from-threshold tables; use the assigned RET or report inability at first contact.
- **Runway-excursion watch:** 🟧 Displaced thresholds on all four landing runways; RESA notes reference EMAS infrastructure on the north-side runways (32L/32R) — winter-contamination braking-action consideration applies in the Nov–Mar snow-plan season.

---

## 8. Taxi-in routing to terminal & hot spots

- **Typical taxi-in by runway → terminal:** After landing, taxi in to the assigned T1-2-3 or T4/T4S apron per Ground/SDP assignment; VAMSYS mirror gives a planning taxi-in time of **16 min** `[VAMSYS mirror 2026-07-25]`. Routing differs materially depending on which apron complex the flight is assigned to.
- **Hot spots / tight taxiways:** 🟥 Dense Code-letter-restricted taxiway network with simultaneous-occupancy conflict rules (§13 of the Briefing); Code F aircraft (and A346/A35K/B77W/B764) must oversteer at numerous named turns. Taxi with vigilance, especially during a concurrent departure bank on the paired runway.
- **Stand/gate notes:** See [Dispatch §3](dispatch.md) — widebody clusters exist in both apron complexes; exact gate assignment for our operation not yet confirmed. Remember the **T1-2-3 / T4-T4S airside split** if the arrival gate differs from an onward connection's departure complex.

---

## 9. Arrival frequency sequence

- **Sequence:** **Madrid APP (per assigned sector) → Barajas TWR (118.080/118.155/118.680/118.980, per active runway pairing) → Ground/GMC (121.630/121.755/121.980/123.155) → Apron/SDP (121.705/121.855/123.005/123.255, per ramp/side).** Take the assigned frequency and confirm current chart. (Frequencies from Briefing §8.)
- **Approach/Departure control:** **Madrid APP** is the facility for Madrid's terminal approach; **Madrid ACC (LECM)** hands off en route inbound — no dedicated FIR brief exists in-library yet, see [Europe — Airspace Briefing](../../../../airspace/europe.md). 🟧 Exact sector/frequency assignment is AIRAC-dependent.

---

## 10. Gotchas

- **Every landing runway (32R, 32L, 18L, 18R) has a displaced threshold** — the usable LDA is shorter than the physical runway; do not brief off the raw runway length.
- **The reciprocal of the assigned landing runway is takeoff-only** — there is no same-pair fallback if the assigned runway becomes unavailable; expect a full config-side change instead.
- **Segregated config change (North↔South) is a wholesale runway reassignment**, not a same-pair wind-driven swap — watch the ATIS closely around shift changes (0700/2300 LT).
- **T1-2-3 and T4-T4S are not airside-connected** — a same-aircraft or crew connection across the two complexes needs a full landside transfer and security re-clearance.
- **Four-runway independent-parallel geometry** sustains continuous high traffic density — expect vectoring/holding, especially in marginal weather or during a bank.
- **A-CDM/FAM governs the whole ground/departure sequence** even for the arriving aircraft's subsequent turn — an inaccurate TOBT on the next departure can affect gate/stand planning knock-on.

---

## Open items (🟧 — confirm against AIP / current AIRAC)

- Current-AIRAC STAR names and exact approach minima per runway.
- ILS sub-category (IIIA/IIIB) confirmation for all four landing runways.
- Exact LVP/CAT III trigger RVR values.
- Confirmed gate/apron assignment for our operation (T1-2-3 vs. T4-T4S).
- EMAS system location/spec detail (referenced but not independently obtained).

> **Live data — pull at planning:** wx/METAR/TAF/TREND, NOTAM (runway/approach/navaid/lighting, esp. CAT III equipment status), ATIS config/wind trend, current AUP/UUP or RAD status in Spanish airspace. Not stored in this durable file.

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim charts inform content but are not listed here.*

- **AIP España (ENAIRE eAIP), AD 2-LEMD 2.12/2.13/2.17–2.19/2.20** — AIRAC AMDT 408/26, eff. 09-JUL-26 — https://aip.enaire.es/aip/contenido_AIP/AD/AD2/LEMD/LE_AD_2_LEMD_en.pdf (retrieved 2026-07-26). *Runway/declared-distance data, ILS idents/frequencies, communications, preferential configuration, minimum runway occupancy tables.*

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-26 | Built from AIP España (ENAIRE); K Global fields from live VAMSYS; 4-page pack. |
