# FALA — Lanseria Intl · Arrival Page

**FALA / HLA** · Lanseria, Gauteng (NW of Johannesburg), South Africa · Africa
**Version** v0.1 · **Updated** 2026-07-26 · **Status** Draft

> **Read-me:** Tactical arrival aid for the sim, not a chart. Companion to the [FALA Briefing](index.md), [Dispatch](dispatch.md) and [Departure](departure.md) pages. STARs/approaches are listed **by name only** — fly the charted current-AIRAC version; minima shown are pointers, always verify on the current chart. Static data only; live wx/NOTAM are pulled at planning. Open 🟧 items are in §Open items. Flag legend 🟥 restriction/hazard · 🟧 caution/unverified · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| Usual landing runway(s) | **07 preferred for instrument arrivals** (only ILS-equipped end); 25 wind-dependent, RNAV only |
| Usual approach | ILS Z / VOR Z / VOR Y (RWY 07, via LIV); RNAV (RWY 25) |
| Config logic | Wind-driven, but constrained by the single ILS end (07) — an active RWY 25 configuration limits arrivals to RNAV |
| Transition level | By QNH; TA 8,000 ft — verify current chart 🟧 |
| LVP trigger | No CAT II/III infrastructure — a low-vis event with RWY 25 active is a genuine constraint 🟧 |
| Missed-approach driver | **Terrain** — high ground ~5.5 NM west of the field (§5) |

---

## 2. STAR / transition selection

- **STARs (names only — verify current AIRAC):** Not detailed by name beyond the ILS Z/VOR Z/VOR Y RWY 07 and RNAV RWY 25 procedures in the reachable AIP chart index — verify current AIRAC.
- **Selection by arrival direction / runway:** Inbound instrument traffic for RWY 07 is vectored by **Johannesburg (FAOR) Approach** to intercept LIV radial 245 inbound by 14 DME, then handed to **FALA Approach by 12 DME LIV** for the straight-in ILS or VOR/DME clearance.
- **Transition to approach:** Radar-vectored transition from Johannesburg Approach onto the LIV-based final for RWY 07; RWY 25 arrivals use the RNAV procedure.
- **Speed / flow constraints on the STAR:** Not detailed in reachable sources — verify chart.

---

## 3. Descent & energy plan

- **Top-of-descent trigger:** Standard descent-profile planning; coordinate the Johannesburg-to-Lanseria Approach hand-off point (12 DME LIV) into the descent plan.
- **Speed control:** 250 KIAS below FL100 — confirm current chart.
- **Altitude constraints:** Key crossing constraints are pointers — fly the charted altitudes, particularly with the terrain caution west of the field in mind.
- **Energy traps:** The two-facility Johannesburg-to-Lanseria hand-off sequence can compress the arrival if vectoring runs long — brief an early-descent contingency and confirm the hand-off has occurred by 12 DME LIV.

---

## 4. Approach selection by runway

*Names only — verify minima on current AIRAC charts.*

| RWY | Approach (name) | LVP / CAT note | Minima pointer (verify AIRAC) |
|---|---|---|---|
| 07 | ILS Z (LAI) / VOR Z / VOR Y (via LIV) | No CAT II/III — standard/CAT I equivalent 🟧 | verify current chart |
| 25 | RNAV | **No ILS** — RNAV approach only 🟧 | verify current chart |

- **LVP triggers:** Not confirmed this pass; the absence of CAT II/III infrastructure and the single ILS end make a low-vis event with RWY 25 active a genuine operational constraint. 🟧

---

## 5. Approach hazards (terrain / CFIT / specific threats)

- **CFIT / terrain:** 🟥 **High ground ("Swart Koppies," ~5,338 ft) lies approximately 5.5 NM west of the field.** The AIP specifically cautions pilots to exercise care maintaining terrain clearance toward the west of the airfield during **night operations and poor visibility** — the field's defining approach hazard.
- **Specific threats:** 🟧 **Hot-air-balloon activity** (25 NM radius of Kloofzicht Lodge/Cradle of Humankind, GND–7,500 ft AMSL, daily sunrise–sunset) and **hang-gliding/paragliding** (Krugersdorp Ridge, GND–6,400 ft AMSL, daily sunrise–sunset) are genuine low-level VFR traffic hazards in the wider vicinity. **Sky lanterns** have also been reported within the aerodrome vicinity per AIP remark.
- **Airspace / traffic:** 🟧 Combined Tower/Approach position; the Johannesburg-to-Lanseria hand-off sequence (§2) is the notable procedural item.

---

## 6. Missed approach watch-items

- **Terrain-driven MAP notes:** 🟥 The high ground west of the field is the primary missed-approach consideration — fly the published MAP and verify climb-gradient/turn on the current chart, with particular attention at night or in poor visibility.
- **Re-sequencing environment:** A go-around returns you into the Johannesburg-area radar environment for re-sequencing back to FALA Approach or diversion to FAOR.
- **Go-around traps:** Given the hot-and-high regime, confirm the missed-approach/go-around climb gradient is achievable at the day's weight/temperature before committing to the approach on a hot afternoon.

---

## 7. Landing runway / LDA & braking / vacate

- **LDA by runway:** 07 **2,996 m**; 25 **2,925 m** (a modest reduction versus TORA, not independently explained in reachable sources) — see [Briefing §7](index.md).
- **Braking / vacate:** Not detailed by named rapid-exit taxiway in reachable sources — confirm with Tower/Ground on the day. 🟧
- **Runway-excursion watch:** 🟧 The runway's published longitudinal slope (-1.30%/+1.30%) is a factor in landing-distance and braking-energy calculations at this elevation; Highveld convective-season rain (Oct–Apr) is the seasonal wet-runway consideration.

---

## 8. Taxi-in routing to terminal & hot spots

- **Typical taxi-in by runway → terminal:** After landing, taxi in via Ground/Tower assignment to the main apron (A, B or C per aircraft class); VAMSYS mirror gives a planning taxi-in time of **6 min** `[VAMSYS mirror 2026-07-26]`.
- **Hot spots / tight taxiways:** 🟧 See [Briefing §13](index.md) — Category C-or-greater caution on Taxiway A3 opposite Apron C (steep embankment 16 m north of the taxiway edge).
- **Stand/gate notes:** See [Dispatch §3](dispatch.md) — international flights must park on the main apron (A or B); Class C-and-larger aircraft on Apron C (own power) or nose-in Apron B.

---

## 9. Arrival frequency sequence

- **Sequence:** **Johannesburg (FAOR) Approach (vectoring) → FALA Approach/Tower 124.0 (final clearance, no later than 12 DME LIV) → Ground (SMC) 121.65 (0345–1700) → Apron 122.85 (non-ATC).** Take the assigned frequency and confirm current chart. (Frequencies from Briefing §8.)
- **Approach/Departure control:** **FALA Tower** combines Tower and Approach; **Johannesburg (FAOR) Approach** provides the initial vectoring for RWY 07 instrument arrivals — see [Africa Airspace brief](../../../../airspace/africa.md) for the Johannesburg FIR (FAJA). 🟧 Exact sector/frequency assignment is AIRAC-dependent.

---

## 10. Gotchas

- **RWY 25 has no ILS** — an active 25 configuration limits arrivals to RNAV only; confirm this is compatible with the day's weather/minima.
- **High ground ~5.5 NM west of the field** — a genuine terrain-awareness item, especially at night or in poor visibility.
- **Two-facility arrival sequence** (Johannesburg Approach → FALA Approach) — confirm the hand-off has occurred by 12 DME LIV; do not assume a direct Lanseria-only clearance.
- **Hot-air-balloon and hang/paragliding activity** in the wider vicinity — a low-level VFR traffic awareness item.
- **Limited SMC (Ground) hours (0345–1700)** — confirm the after-hours taxi-in/parking procedure before an off-hours arrival.

---

## Open items (🟧 — confirm against AIP / current AIRAC)

- Current-AIRAC approach minima for RWY 07 and RWY 25.
- Rapid-exit taxiway/vacate detail.
- Current stand assignment for K Global operations, given the field's general-aviation stand structure.

> **Live data — pull at planning:** wx/METAR/TAF/TREND, NOTAM (runway/approach/navaid/lighting — esp. the single ILS on RWY 07), hot-air-balloon/paragliding activity notices. Not stored in this durable file.

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim charts inform content but are not listed here.*

- **AIP South Africa (ATNS/SACAA), AD 2 FALA** — approach procedures, runway/declared-distance data, communications, terrain/hazard remarks — https://cad.atns.co.za/SmartAIM/EAipPackages/15-JUL-22/2022-07-15-000000/html/eAIP/FA-AD-2-FALA-en-US.html (retrieved 2026-07-26).

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-26 | Built from AIP South Africa (ATNS); K Global fields from live VAMSYS; 4-page pack. |
