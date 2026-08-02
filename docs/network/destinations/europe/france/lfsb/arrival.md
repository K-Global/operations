# LFSB — Basel-Mulhouse · Arrival Page

**LFSB / BSL** · Saint-Louis, Haut-Rhin, France (EuroAirport Basel-Mulhouse-Freiburg — trinational field, published in the French AIP) · Europe
**Version** v0.1 · **Updated** 2026-07-26 · **Status** Draft

> **Read-me:** Tactical arrival aid for the sim, not a chart. Companion to the [LFSB Briefing](index.md), [Dispatch](dispatch.md) and [Departure](departure.md) pages. STARs/approaches are listed **by name only or flagged not-yet-confirmed** — fly the charted current-AIRAC version; minima shown are pointers, always verify on the current chart. Static data only; live wx/NOTAM are pulled at planning. Open 🟧 items are in §Open items. Flag legend 🟥 restriction/hazard · 🟧 caution/unverified · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| Usual landing runway(s) | **RWY 25, RWY 15, RWY 33** — **RWY 07 is never a landing runway** (LDA 0, landing prohibited) |
| Usual approach | **ILS CAT III (RWY 15)**; **ILS CAT I (RWY 33)**; **PAPI-referenced only, no ILS published (RWY 25)** |
| Config logic | Wind/ATC-dependent; not detailed in the reachable AIP extract 🟧 |
| Transition level | By QNH; transition altitude fixed at **7,000 ft** — TL calculated by BALE APP |
| LVP trigger | CAT III infrastructure exists only on RWY 15; exact RVR trigger values not confirmed this pass 🟧 |
| Missed-approach driver | Not terrain-driven (no close-in high terrain identified); airspace/traffic re-sequencing within the multi-agency delegated CTR, and around the physically crossing runway pairs |

---

## 2. STAR / transition selection

- **STARs (names only — verify current AIRAC):** A single conventional STAR construct applies across all runways (charted generically, no distinctive public name) — pull the current-AIRAC procedure list at planning. 🟧
- **Selection by arrival direction / runway:** Not detailed in the reachable extract beyond the runway-specific landing restrictions (RWY 07 never a landing runway; RWY 25 PAPI-mandatory; RWY 15/33 the long-pair options). 🟧
- **Transition to approach:** For **RWY 33**, the initial approach to intercept the ILS is preferentially flown by **radar vectoring**; a charted initial-approach phase (AD 2 LFSB IAC RWY33 VPT B) exists but is **usable only on ATC instruction**. For RWY 15/25, transition detail not confirmed this pass. 🟧
- **Speed / flow constraints on the STAR:** Published speed/altitude gates are pointers only — verify chart; 250 KIAS below FL100 (EU/ICAO norm) applies as standard.

---

## 3. Descent & energy plan

- **Top-of-descent trigger:** Not published / verify — plan TOD to meet the fixed 7,000 ft transition altitude and the first STAR/vectoring gate. 🟧
- **Speed control:** 250 KIAS below FL100 (EU/ICAO norm) — confirm current chart.
- **Altitude constraints:** Not published / verify — pointer only, fly the charted altitudes. 🟧
- **Energy traps:** The **physically crossing runway pairs** and the multi-agency delegated CTR (§Briefing 3.2) create a re-sequencing/vectoring risk; a late runway/config change between the 07/25 and 15/33 pairs is a plausible energy trap given the asymmetric landing restrictions on each end.

---

## 4. Approach selection by runway

*Names only — verify minima on current AIRAC charts.*

| RWY | Approach (name) | LVP / CAT note | Minima pointer (verify AIRAC) |
|---|---|---|---|
| 07 | — none — | **Never a landing runway** (LDA 0, landing prohibited) 🟥 | n/a |
| 25 | PAPI-referenced (no ILS in this extract) | PAPI use **mandatory** day and night; approach **prohibited** if PAPI or threshold-identification lights are unserviceable 🟥 | verify current chart |
| 15 | ILS (ident MH); RNP approach | **CAT III** 🟩 | verify current chart |
| 33 | ILS (ident BLU); RNP approach | **CAT I only** 🟧 — initial approach preferentially radar-vectored; charted initial approach (VPT B) usable only on ATC instruction | verify current chart |

---

## 5. Approach hazards (terrain / CFIT / specific threats)

- **CFIT / terrain:** 🟩 None identified. LFSB sits at 885 ft AMSL in the Upper Rhine plain — no close-in high terrain relevant to any arrival path in the reachable AIP extract; not hot-and-high.
- **Specific threats:** 🟥 **RWY 33 is CAT I only** — its physical reciprocal RWY 15 carries the field's only CAT III capability. In low-vis with wind favouring RWY 33, no autoland/CAT III option exists on that runway. **RWY 25 approach is prohibited outright if PAPI/threshold-identification lighting is unserviceable.** Displaced thresholds on RWY 25 (DTHR 884 ft) and RWY 33 (DTHR 880 ft) materially reduce usable LDA versus full runway length — see §7.
- **Airspace / traffic:** 🟥 Trinational CTR BALE, split into four Class D sub-parts delegated across **Zurich ACC** and **Langen ACC (DFS)**, overlays the physically crossing runway pairs — expect re-sequencing and explicit crossing instructions, particularly in marginal weather. Cross-ref [Briefing §3.2](index.md).

---

## 6. Missed approach watch-items

- **Terrain-driven MAP notes:** Not the driver — no close-in high terrain identified. Fly the published missed approach and verify climb-gradient/turn constraints on the current chart.
- **Re-sequencing environment:** A go-around returns you to a multi-agency delegated CTR overlaying physically crossing runway pairs — expect vectoring and possible holding before re-sequencing, especially if RWY 33 is active (CAT I only) in marginal weather.
- **Go-around traps:** Awareness of crossing-pair traffic on the miss; a go-around off RWY 33 or RWY 25 in low-vis compounds the CAT I/PAPI-dependency limitations noted in §5.

---

## 7. Landing runway / LDA & braking / vacate

- **LDA by runway:** RWY 07 **0 m** (landing prohibited) · RWY 25 **1,600 m** (DTHR 884 ft, reduced from 1,860 m TORA) · RWY 15 **3,900 m** (no displaced threshold) · RWY 33 **2,780 m** (DTHR 880 ft, reduced from the full 3,900 m runway length — a ~1,120 m reduction). Cross-ref [Briefing §7](index.md).
- **Braking / vacate:** RWY 33 landing — **recommended vacate via TWY H**. Rapid-exit taxiway detail for other runways not confirmed. 🟧
- **Runway-excursion watch:** 🟥 The RWY 33 displaced threshold trims a substantial ~1,120 m off the runway's full length for landing purposes — do not assume the full 3,900 m is available. RWY 25's displaced threshold similarly trims LDA to 1,600 m. RWY 07 is never usable for landing under any circumstance.

---

## 8. Taxi-in routing to terminal & hot spots

- **Typical taxi-in by runway → terminal:** Not detailed in the reachable AIP extract — confirm with Ground/Apron on the day. VAMSYS mirror gives a planning taxi-in time of **13 min** `[VAMSYS mirror 2026-07-26]`.
- **Hot spots / tight taxiways:** 🟥 **TWY A, C, C1, J, K are wingspan-restricted (<36 m)** — not usable by Code E/F aircraft. **TWY C/C1** and the area near the **Jet Aviation/Swiss maintenance gate north of THR 25** are flagged for reduced ATC obstacle-advisory capability in low visibility — taxi with vigilance. **U-turns are forbidden anywhere on the platform.**
- **Stand/gate notes:** See [Dispatch §3](dispatch.md) — widebody stand layout not confirmed this pass; Code F traffic subject to mandatory FOLLOW-ME/CAT III holding-point procedures.

---

## 9. Arrival frequency sequence

- **Sequence:** **BALE Approche/Control** (sector-specific — 125.160/127.285/128.910/129.250/130.900/133.510/125.415/126.990, delegated across Zurich ACC and Langen ACC sectors) **→ BALE Tour (Tower) 118.300** (+129.250 aux) **→ BALE Sol (Ground) 121.605.** Take the assigned frequency and confirm current chart. (Frequencies from Briefing §8.)
- **Approach/Departure control:** **BALE Approche** provides the terminal approach service by delegation from **Zurich ACC** (Franco-Swiss part, AWY G4/AZ1–AZ4/T1–T3 sectors) or **Langen ACC (DFS)** (German parts, STAUFEN AREA), depending on the arrival sector — see [Briefing §3.2](index.md) and [Europe (Continental) airspace briefing](../../../../airspace/europe.md). 🟧 Exact sector/frequency assignment is AIRAC-dependent; no dedicated Reims (LFEE) FIR brief exists in-library yet.

---

## 10. Gotchas

- **RWY 07 is never a landing runway** — do not expect it as an arrival option under any configuration.
- **RWY 33 is CAT I only** — its reciprocal RWY 15 holds the field's only CAT III capability; brief a holding/diversion contingency if wind favours 33 in low-vis.
- **RWY 25 approach is prohibited outright if PAPI or threshold-identification lighting is unserviceable** — this is a hard gate, not a caution.
- **Displaced thresholds on RWY 25 (884 ft) and RWY 33 (880 ft) meaningfully reduce usable LDA** — do not assume full runway length is available for landing.
- **The 07/25 and 15/33 runway pairs physically cross** at the ARP — expect crossing traffic and explicit ATC instructions on any configuration.
- **Trinational, multi-agency delegated CTR** (Zurich ACC / Langen ACC) — confirm the correct sector/frequency for the arrival segment being flown.
- **Recommended vacate via TWY H after an RWY 33 landing.**
- **Low-visibility taxi-in caution** near TWY C/C1 and the Jet Aviation/Swiss maintenance gate north of THR 25.
- **Binational curfew** — a delayed arrival risks the Chapter-3 (>97 EPNdB) night-landing ban (2300–0800) or the general commercial landing restriction (2300–0400); do not plan a schedule that relies on a post-curfew landing.

---

## Open items (🟧 — confirm against AIP / current AIRAC)

- Current-AIRAC STAR names and exact approach minima per runway.
- Config logic / preferential-runway selection by wind — not detailed in the reachable extract.
- Exact LVP/CAT III RVR trigger values for RWY 15.
- Rapid-exit taxiway/vacate detail beyond the RWY 33 → TWY H recommendation.
- Exact sector/frequency assignment for BALE Approche by arrival direction (Zurich ACC vs Langen ACC delegation).

> **Live data — pull at planning:** wx/METAR/TAF/TREND, NOTAM (runway/approach/navaid/lighting, especially PAPI serviceability on RWY 25 and CAT III equipment status on RWY 15), ATIS config/wind trend, current AUP/UUP or RAD status. Not stored in this durable file.

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim charts inform content but are not listed here.*

- **SIA France (Service de l'Information Aéronautique) eAIP — AD 2 LFSB**, eff. 14 MAY 2026, AIRAC cycle 09 JUL 2026 (retrieved 2026-07-26) — https://www.sia.aviation-civile.gouv.fr/ — declared distances/LDA, navaids, ATS/airspace delegation structure, ground-operations restrictions.

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-26 | Built from SIA France eAIP; K Global fields from live VAMSYS; 4-page pack. |
