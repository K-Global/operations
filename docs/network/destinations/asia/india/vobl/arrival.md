# VOBL — Kempegowda Intl · Arrival Page

**VOBL / BLR** · Bengaluru (Devanahalli), Karnataka, India · Asia
**Version** v0.1 · **Updated** 2026-07-26 · **Status** Draft — AIP India-derived

> **Read-me:** Tactical arrival aid for the sim, not a chart. Companion to the [VOBL Briefing](index.md), [Dispatch](dispatch.md) and [Departure](departure.md) pages. STARs/approaches are listed **by name only or flagged not-yet-confirmed** — fly the charted current-AIRAC version; minima shown are pointers, always verify on the current chart. Static data only; live wx/NOTAM are pulled at planning. Open 🟧 items are in §Open items. Flag legend 🟥 restriction/hazard · 🟧 caution/unverified · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| Usual landing runway(s) | Wind/mode-dependent — **09R/27L (south) mandatory for Code-F aircraft**; 09L/27R (north, CAT I) available for arrivals in segregated/dependent/single-runway modes |
| Usual approach | ILS — **CAT IIIB on 09R/27L**; **CAT I only on 09L/27R** |
| Config logic | Wind- and LVP-driven mode selection (09/27 Segregated, 09 Dependent, single-runway); during LVP only 27 Segregated, 09 Dependent, or single-RWY 09R/27L modes are used |
| Transition level | By QNH; transition altitude 7,000 ft — verify current chart 🟧 |
| LVP trigger | Winter pre-dawn radiation fog (typ. Dec–Jan); Safeguarding Procedures at RVR <1,200 m/ceiling trending 400→200 ft, LVP at RVR <800 m/ceiling <200 ft 🟧 (exact operational trigger sequencing per Briefing §10) |
| Missed-approach driver | Airspace/traffic (nearby VOYK military airbase), not terrain |

---

## 2. STAR / transition selection

- **STARs (names only — verify current AIRAC):** **PEXEG 7N** and **GUNIM 7N** (via the GUNIM transition, W81/N563) are confirmed by name from the reachable AIP extract; the full current-AIRAC STAR set was not obtained this pass — pull the live list at planning. 🟧
- **Selection by arrival direction / runway:** Bengaluru Radar assigns the STAR-to-runway transition for the active mode (09/27 Segregated, 09 Dependent, or single-runway). **Code-F arrivals are always routed to RWY 09R/27L.**
- **Transition to approach:** Expect an RNAV-STAR-to-ILS transition with radar vectors onto final; the Approach/Radar controller vectors arriving aircraft to intercept the localizer not less than 10 NM from touchdown per the published LVP procedure, and does not apply speed control within 20 NM of touchdown during CAT II/III operations.
- **Speed / flow constraints on the STAR:** Published speed/altitude gates are pointers only — verify chart.

---

## 3. Descent & energy plan

- **Top-of-descent trigger:** Standard descent-profile planning; plan TOD to meet the first STAR altitude gate.
- **Speed control:** STAR speed gates and 250 KIAS below FL100 (ICAO norm assumed) — confirm current chart. 🟧
- **Altitude constraints:** Key STAR crossing constraints are pointers — fly the charted altitudes.
- **Energy traps:** Late runway/mode changes driven by a developing fog event or a shift from segregated to single-runway operation are the main energy trap at this field — build in an early-decision contingency for a runway-mode change during a winter-morning arrival.

---

## 4. Approach selection by runway

*Names only — verify minima on current AIRAC charts.*

| RWY | Approach (name) | LVP / CAT note | Minima pointer (verify AIRAC) |
|---|---|---|---|
| 09L | ILS (IBAN) | **CAT I only** 🟩 | verify current chart |
| 27R | ILS (IDEV) | **CAT I only** 🟩 | verify current chart |
| 09R | ILS (IBLN) | **CAT I/II/IIIB** — south runway, primary low-vis/Code-F runway 🟩 | TDZ RVR 550 m (CAT I) / 300 m (CAT II) / 175 m (CAT III) — verify current chart |
| 27L | ILS (IDVN) | **CAT I/II/IIIB** — south runway, primary low-vis/Code-F runway 🟩 | TDZ RVR 550 m (CAT I) / 300 m (CAT II) / 175 m (CAT III) — verify current chart |

- **LVP triggers:** Winter pre-dawn radiation fog (typically Dec–Jan) is the routine trigger; CAT I operations continue until TDZ RVR falls below 550 m even after LVP is declared elsewhere on the field. RWY 09L/27R **never** supports better than CAT I regardless of LVP status — a crew planning a CAT II/III arrival must be assigned RWY 09R/27L. 🟧 (Primary-source figures per Briefing §18 discrepancy note re: north-runway CAT status claims in secondary sources.)

---

## 5. Approach hazards (terrain / CFIT / specific threats)

- **CFIT / terrain:** 🟩 None significant. Undulating Deccan plateau at 3,003 ft; the reachable obstacle table lists only airfield-adjacent furniture, no close-in high terrain.
- **Specific threats:** 🟥 **Yelahanka (VOYK) military airbase**, 3.2–4.3 NM south, shares a near-identical 090/270 runway orientation. Military helicopter circuits (≤1.5 NM north of VOYK's runway, ≤700 ft AGL) and fixed-wing training traffic (practice ILS to VOYK RWY 27, 3.2 NM south of VOBL's RWY 09R/27L extended centreline; VOR-185 training up to 6,000 ft) operate close to VOBL's approach paths. This is a standing traffic-proximity threat to brief on every arrival, not an occasional NOTAM item.
- **Airspace / traffic:** 🟧 Class D CTR (surface–FL95), Class C above; Bengaluru Radar provides approach control. Traffic density/congestion picture not independently quantified this pass — treat as a busy, high-traffic Indian metro hub.

---

## 6. Missed approach watch-items

- **Terrain-driven MAP notes:** Terrain is not the driver — fly the published missed approach and verify climb-gradient/turn on the current chart.
- **VOYK-driven turn restriction:** 🟥 **No left turn after a missed approach from RWY 27L; no right turn after a missed approach from RWY 09R** — this is an explicit AIP-published restriction because of the VOYK military airbase, and must be briefed before every approach to these runways.
- **Re-sequencing environment:** A go-around returns the aircraft to a Bengaluru Radar-controlled environment with concurrent VOYK military traffic in the vicinity — expect vectoring and possible holding before re-sequencing.
- **Go-around traps:** Runway-mode awareness (segregated vs dependent vs single-runway) during the miss; confirm which runway/mode is active before re-approach, especially during a developing fog event.

---

## 7. Landing runway / LDA & braking / vacate

- **LDA by runway:** All four designators (09L/27R/09R/27L) — **4,000 m**, no displaced thresholds published 🟧 (not independently re-confirmed against a live AIRAC). Ample for any K Global type on either runway.
- **Braking / vacate:** Rapid-exit taxiway (RET) detail exists (RET A5–A9 on the north runway; equivalent south-runway exits referenced in the LVP procedure) but full vacate/exit-speed detail not confirmed in reachable sources — confirm with Ground on the day. 🟧
- **Runway-excursion watch:** 🟧 No displaced thresholds confirmed; monsoon-season (Jun–Sep) heavy-rain contamination/braking-action is a plausible seasonal consideration, not independently confirmed with airport-specific data this pass.

---

## 8. Taxi-in routing to terminal & hot spots

- **Typical taxi-in by runway → terminal:** After landing on the assigned runway, taxi in to **Terminal 2** (international arrivals) or **Terminal 1** (domestic) per Ground/Apron assignment; VAMSYS mirror gives a planning taxi-in time of **12 min** `[VAMSYS mirror 2026-07-26]`.
- **Hot spots / tight taxiways:** 🟥 A dedicated hot-spot chart is published (AIP AD 2.24) but its content was not extracted this pass — verify on current chart. Known ILS-protection ground constraints: **TWY H1/H2 closed when ILS RWY 09R is active; TWY H9/H10 closed when ILS RWY 27L is active.** Taxilane L2 is reserved for Code-D and above; L1/L3 for Code-C and below.
- **Stand/gate notes:** See [Dispatch §3](dispatch.md) — Terminal 2 carries Code-F gate provisions; exact current widebody gate assignment not yet confirmed.

---

## 9. Arrival frequency sequence

- **Sequence:** **Bengaluru Radar 121.250 (Approach Arrival, main) / 125.275 (backup) → Bengaluru Tower 118.475/124.350 (TWR-1) or 119.050/123.675 (TWR-2), H24 → Bengaluru Ground 121.650/121.775 (SMC-1/SMC-2), H24.** Take the assigned frequency and confirm current chart. (Frequencies from Briefing §8.)
- **Approach/Departure control:** **Bengaluru Radar** provides Bengaluru's terminal approach control; parent FIR believed **Chennai FIR** 🟧 (not explicitly confirmed in the reachable AD 2 VOBL extract) — see [Asia airspace general brief](../../../../airspace/asia.md).

---

## 10. Gotchas

- **No left turn after a missed approach from 27L; no right turn after a missed approach from 09R** — hard AIP restriction driven by the adjacent VOYK military airbase.
- **RWY 09L/27R never supports better than CAT I** — do not expect a CAT II/III arrival there regardless of LVP status; only RWY 09R/27L carries CAT IIIB.
- **Code-F aircraft land on RWY 09R/27L only** — never expect or plan a Code-F arrival on the north runway.
- **Winter pre-dawn fog (Dec–Jan)** can drop the field into LVP quickly ahead of the early-morning bank — brief the CAT IIIB plan (south runway only) and a Chennai/Hyderabad diversion contingency in season.
- **Military traffic at VOYK** (helicopter circuits, fixed-wing ILS/VOR training) operates close to VOBL's approach paths — maintain a heightened traffic scan on approach, especially south-side.
- **Mode changes** (segregated ↔ dependent ↔ single-runway) can occur with a developing fog event or wind shift — watch the ATIS for a runway/mode change.

---

## Open items (🟧 — confirm against AIP / current AIRAC)

- Current-AIRAC STAR names beyond PEXEG 7N/GUNIM 7N, and exact approach minima per runway.
- Rapid-exit taxiway/vacate detail for both runways.
- Parent FIR confirmation (believed Chennai FIR).
- Current taxi-in routing and gate assignment given the Terminal 1/Terminal 2 split.
- Traffic-density/congestion detail under Bengaluru Radar.

> **Live data — pull at planning:** wx/METAR/TAF/TREND, NOTAM (runway/approach/navaid/lighting, esp. south-runway CAT IIIB equipment status), ATIS config/mode, current winter-fog/LVP status, VOYK military-activity NOTAMs. Not stored in this durable file.

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim charts inform content but are not listed here.*

- **AAI eAIP India, AD 2 VOBL**, AMDT 04-25, eff. 2025-08-07 — https://aim-india.aai.aero/eaip/eaip-v2-04-2025/eAIP/IN-AD%202.1VOBL-en-GB.html (retrieved 2026-07-26). *STAR/IAP index, runway/declared-distance data, communications, local aerodrome regulations (VOYK missed-approach restrictions), LVP procedure detail.*
- Deccan Herald — "Fog delays 67 flights at KIA" and related winter-fog reporting — https://www.deccanherald.com/india/karnataka/bengaluru/fog-delays-67-flights-at-kia-789333 (retrieved 2026-07-26). *Winter-fog/LVP arrival-disruption corroboration.*

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-26 | Built from AIP India (AAI); K Global fields from live VAMSYS; 4-page pack. |
