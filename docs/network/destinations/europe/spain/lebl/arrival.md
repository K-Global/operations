# LEBL — Josep Tarradellas Barcelona-El Prat · Arrival Page

**LEBL / BCN** · Barcelona, Spain · Europe
**Version** v0.1 · **Updated** 2026-07-26 · **Status** Draft

> **Read-me:** Tactical arrival aid for the sim, not a chart. Companion to the [LEBL Briefing](index.md), [Dispatch](dispatch.md) and [Departure](departure.md) pages. STARs/approaches are listed **by name only or flagged not-yet-confirmed** — fly the charted current-AIRAC version; minima shown are pointers, always verify on the current chart. Static data only; live wx/NOTAM are pulled at planning. Open 🟧 items are in §Open items. Flag legend 🟥 restriction/hazard · 🟧 caution/unverified · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| Usual landing runway(s) | **24R** by day in the preferential West-parallel configuration (0700–2300 LT); **06L** in the non-preferential East-parallel configuration; **02** in the night-preferential North crossed-runway config (2300–0700 LT), **24L** non-preferential |
| Usual approach | **ILS CAT II/III** on 24R/06L/06R/24L; **ILS CAT I only** on RWY 02 |
| Config logic | **Segregated day/night configuration**, held to ~10 kt tailwind gust / 20 kt crosswind (considered from 7 kt tailwind) |
| Transition level | By QNH; transition altitude 1,850 m / 6,000 ft MSL — verify current chart 🟧 |
| LVP trigger | CAT II/III on 06L/24R/06R/24L; **RWY 02 is CAT I-minima only** — a materially different low-vis capability on the night-preferential runway 🟧 |
| Missed-approach driver | Airspace/traffic density (mixed crossing + parallel three-runway environment), not terrain |

---

## 2. STAR / transition selection

- **STARs (names only — verify current AIRAC):** Not confirmed in reachable research pass — pull the current-AIRAC STAR list at planning. 🟧
- **Selection by arrival direction / runway:** The active **day/night segregated configuration** (§1) determines the landing runway; Barcelona APP assigns the STAR-to-runway transition for the active configuration.
- **Transition to approach:** Expect an RNAV-STAR-to-ILS transition with radar vectors onto final under Barcelona APP; verify the charted transition.
- **Speed / flow constraints on the STAR:** Published speed/altitude gates are pointers only — verify chart; expect flow-sequencing speed control in the high-density mixed-runway environment.

---

## 3. Descent & energy plan

- **Top-of-descent trigger:** Standard descent-profile planning; plan TOD to meet the first STAR altitude gate.
- **Speed control:** STAR speed gates and 250 KIAS below FL100 (EU/ICAO norm) — confirm current chart.
- **Altitude constraints:** Key STAR crossing constraints are pointers — fly the charted altitudes.
- **Energy traps:** Late runway/config changes (day↔night shift, or an unplanned config change ahead of a wind shift) are the main energy trap; a shift to RWY 02 brings a **materially lower CAT I approach capability** than the parallel-pair CAT II/III runways — do not assume uniform low-vis capability across a config change.

---

## 4. Approach selection by runway

*Names only — verify minima on current AIRAC charts.*

| RWY | Approach (name) | LVP / CAT note | Minima pointer (verify AIRAC) |
|---|---|---|---|
| 24R | ILS (BCA) | **CAT II/III** — preferential day-config landing runway 🟩 | verify current chart |
| 06L | ILS (QAA) | **CAT II/III** — THR displaced 430 m 🟩 | verify current chart |
| 06R | ILS (BLE) | **CAT II/III** 🟩 | verify current chart |
| 24L | ILS (BLW) | **CAT II/III** — restricted-use departure runway, still a normal arrival runway 🟩 | verify current chart |
| 02 | ILS (BLT) | **CAT I only** — preferential night-config landing runway, lowest low-vis capability at the field 🟧 | verify current chart |
| 20 | — none — | **Never a landing runway** — no approach published, not usable for landing | n/a |

- **LVP triggers:** CAT II/III procedures apply on the four parallel-pair runways; RWY 02 (the night-preferential landing runway) is CAT I-minima only — brief the reduced capability specifically for night arrivals. Exact RVR trigger figures not confirmed this pass. 🟧

---

## 5. Approach hazards (terrain / CFIT / specific threats)

- **CFIT / terrain:** 🟩 None. Flat coastal delta at 14 ft AMSL — no close-in high terrain relevant to any arrival path.
- **Specific threats:** 🟧 Several approach/departure tracks run over open Mediterranean water given the field's direct coastal siting — benign for CFIT but a genuine consideration for **visual reference at night over water** and for any offshore convective cell tracking onshore; not independently quantified as a frequency statistic this pass. Wake from the adjacent parallel is a standing consideration during simultaneous operations on the 06L/24R or 06R/24L pairs.
- **Airspace / traffic:** 🟥 High density under **Barcelona APP** at a major Mediterranean gateway, particularly in summer peak season; brief for re-sequencing and extended vectoring, especially during a config change.

---

## 6. Missed approach watch-items

- **Terrain-driven MAP notes:** Terrain is not the driver (flat coastal delta) — fly the published MAP and verify climb-gradient/turn on the current chart.
- **Re-sequencing environment:** A go-around drops you back into a high-density, mixed crossing/parallel-runway traffic environment — expect vectoring and possible holding before re-sequencing, especially in summer peak traffic.
- **Go-around traps:** A missed approach on RWY 02 (night-preferential, CAT I-only) in marginal visibility carries the field's least forgiving low-vis margin — brief the go-around and diversion contingency specifically for this scenario.

---

## 7. Landing runway / LDA & braking / vacate

- **LDA by runway:** 24R **3,352 m**; 06R/24L **2,660 m** each; 06L **2,922 m** (THR displaced 430 m); 02 **2,528 m**; 20 **not usable for landing**. All confirmed distances are ample for any K Global widebody at typical arrival weights, but RWY 06L's displaced threshold means the **usable landing distance is shorter than the physical runway length** — brief accordingly. 🟧
- **Braking / vacate:** Named rapid-exit taxiways are published per runway with wake-turbulence-category-specific distance-from-threshold tables (e.g. R1–R6/P1–P6 for the 06L/24R pair, G4–G9 for 06R/24L, UB/U3L for 02); use the assigned RET or report inability at first contact.
- **Runway-excursion watch:** 🟧 RWY 06L's 430 m displaced threshold is the field's one runway-shortening factor; no other displaced thresholds found in the reachable extract.

---

## 8. Taxi-in routing to terminal & hot spots

- **Typical taxi-in by runway → terminal:** After landing, taxi in to the assigned T1 or T2 apron per Ground (GMC)/handling assignment; VAMSYS mirror gives a planning taxi-in time of **14 min** `[VAMSYS mirror 2026-07-25]`.
- **Hot spots / tight taxiways:** 🟥 AIP-flagged **runway-holding-position siting anomalies** on TWY K7 (RWY 02 approach surface) and TWY Z6/Z7/Z8/Y6/Y7/S14/N16 (RWY 06L approach surface), each carrying size-based taxi restrictions through those and adjacent points. Code F aircraft (A388, A346, B748, AN124) face additional named taxiway restrictions.
- **Stand/gate notes:** See [Dispatch §3](dispatch.md) — widebody clusters exist across Ramps 1–3, 9–17 and 30/32; exact gate assignment for our operation not yet confirmed. Remember **T1 and T2 are not airside-connected** if the arrival gate differs from an onward connection's departure terminal.

---

## 9. Arrival frequency sequence

- **Sequence:** **Barcelona APP (per assigned sector) → Barcelona TWR (118.105 Local ARR/ARR+DEP) → Ground/GMC (121.655 GMC C / 121.705 GMC N / 122.230 GMC S) → Apron/handling as assigned.** Take the assigned frequency and confirm current chart. (Frequencies from Briefing §8.)
- **Approach/Departure control:** **Barcelona APP** is the facility for Barcelona's terminal approach; **Barcelona ACC (LECB)** hands off en route inbound — no dedicated FIR brief exists in-library yet, see [Europe — Airspace Briefing](../../../../airspace/europe.md). 🟧 Exact sector/frequency assignment is AIRAC-dependent.

---

## 10. Gotchas

- **RWY 02 (the night-preferential landing runway) is CAT I-minima only** — do not assume the field's overall CAT III presence extends to it; brief the reduced capability for night/marginal-visibility arrivals specifically.
- **RWY 20 has no approach and is never a landing runway.**
- **RWY 06L has a 430 m displaced threshold** — brief the actual 2,922 m LDA, not the 3,352 m physical length.
- **Segregated day/night config change is a wholesale runway reassignment**, often crossing between the parallel pairs and the crossing runway — watch ATIS closely around shift changes (0700/2300 LT).
- **T1 and T2 are not airside-connected** — a same-aircraft or crew connection across the two terminals needs a landside shuttle-bus transfer.
- **Several approach/departure tracks run over open Mediterranean water** given the coastal siting — be alert to reduced visual reference at night over water.

---

## Open items (🟧 — confirm against AIP / current AIRAC)

- Current-AIRAC STAR names and exact approach minima per runway.
- ILS sub-category (IIIA/IIIB) confirmation for the CAT II/III-equipped runways.
- Exact LVP/CAT trigger RVR values, including the RWY 02 CAT I minima.
- Confirmed gate/terminal assignment for our operation (T1 vs. T2).
- Runway-designation discrepancy noted in the Briefing (§18) — the AIP currently designates the crossing pair 02/20, not "07/25."

> **Live data — pull at planning:** wx/METAR/TAF/TREND, NOTAM (runway/approach/navaid/lighting, esp. CAT II/III equipment status), ATIS config/wind trend, current AUP/UUP or RAD status in Spanish airspace. Not stored in this durable file.

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim charts inform content but are not listed here.*

- **AIP España (ENAIRE eAIP), AD 2-LEBL** (runway/declared-distance data, ILS idents/frequencies, communications, preferential configuration, minimum runway occupancy tables) — AIRAC AMDT 2026/408, eff. 09-JUL-26 — https://aip.enaire.es/aip/contenido_AMDT/LE_Amdt_2026_408_AD_2_LEBL_es.html (retrieved 2026-07-26).

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-26 | Built from AIP España (ENAIRE); K Global fields from live VAMSYS; 4-page pack. |
