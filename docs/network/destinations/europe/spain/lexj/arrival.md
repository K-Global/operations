# LEXJ — Seve Ballesteros-Santander · Arrival Page

**LEXJ / SDR** · Maliaño, Cantabria, Spain · Europe
**Version** v0.1 · **Updated** 2026-07-26 · **Status** Draft — AIP España-derived

> **Read-me:** Tactical arrival aid for the sim, not a chart. Companion to the [LEXJ Briefing](index.md), [Dispatch](dispatch.md) and [Departure](departure.md) pages. STARs/approaches are listed **by name only or flagged not-yet-confirmed** — fly the charted current-AIRAC version; minima shown are pointers, always verify on the current chart. Static data only; live wx/NOTAM are pulled at planning. Open 🟧 items are in §Open items. Flag legend 🟥 restriction/hazard · 🟧 caution/unverified · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| Usual landing runway(s) | **11 or 29** — single runway, no displaced threshold either end |
| Usual approach | **ILS CAT I (RWY 29)** — the field's only precision runway; RWY 11 is RNP (LPV/LNAV)/VOR/NDB only |
| Config logic | Wind-driven; **RWY 29 approach explicitly not recommended in S-SW gale conditions** (§5) |
| Transition level | By QNH; transition altitude 1,850 m / 6,000 ft — verify current chart 🟧 |
| LVP trigger | 🟧 **Not applicable — no LVP at this field.** PPOAM 550 (movement-area standstill) applies instead below RVR 800 m |
| Missed-approach driver | **Weather (wind shear)**, not terrain or traffic |

---

## 2. STAR / transition selection

- **STARs (names only — verify current AIRAC):** Not confirmed in reachable research pass — pull the current-AIRAC STAR list at planning. 🟧
- **Selection by arrival direction / runway:** Wind-driven; the field's one explicit rule is to **avoid the RWY 29 approach** when the surface wind at THR 29 is S-SW (190-220°) at ≥20 kt with gusts >30 kt (§5).
- **Transition to approach:** Continuous-descent operations are supported — ATC may clear aircraft via a standard STAR or via a "direct-to" clearance to an intermediate STAR fix, the IAF, an intermediate-approach fix, or the IF, at an appropriate procedure altitude, to enable a continuous descent.
- **Speed / flow constraints on the STAR:** Not confirmed this pass — verify chart.

---

## 3. Descent & energy plan

- **Top-of-descent trigger:** Standard descent-profile planning; the field supports continuous-descent clearances (§2) which can be requested/expected traffic permitting.
- **Speed control:** 250 KIAS below FL100 (EU/ICAO norm) — confirm current chart.
- **Altitude constraints:** Key STAR crossing constraints are pointers — fly the charted altitudes.
- **Energy traps:** 🟥 **AIP-documented wind shear on the RWY 29 approach** is the standout energy trap — S-SW wind 190-220° at ≥20 kt with gusts >30 kt produces severe turbulence up to 10 NM from the field, surface to ~1,800 ft. Brief a stabilised-approach gate and an unhesitating go-around/runway-change policy for this specific, named condition. See [`OM E — Adverse Weather and Windshear`](../../../../../flight-ops/adverse-weather-and-windshear.md).

---

## 4. Approach selection by runway

*Names only — verify minima on current AIRAC charts.*

| RWY | Approach (name) | LVP / CAT note | Minima pointer (verify AIRAC) |
|---|---|---|---|
| 11 | RNP Z (LPV only), RNP Y (LNAV, LNAV/VNAV), VOR, NDB | No ILS on this runway 🟧 | verify current chart |
| 29 | ILS CAT I (STA), RNP Y (LNAV, LNAV/VNAV) | Field's only precision runway; **not recommended in S-SW gale conditions** (§5) | verify current chart |

- **LVP triggers:** 🟧 **Not applicable.** No LVP exists at this field; the **PPOAM 550** movement-area standstill procedure governs ground movement instead (single-aircraft taxi 550-800 m RVR; full standstill below 550 m) — this does not itself change approach minima, but confirms there is no LVP-driven visual-aid upgrade to expect on the ground side.

---

## 5. Approach hazards (terrain / CFIT / specific threats)

- **CFIT / terrain:** 🟩 No significant close-in high terrain identified for this sea-level, coastal field in reachable sources — terrain is not the operative arrival threat here (contrast the neighbouring LEBB field).
- **Specific threats:** 🟥 **AIP-documented, quantified wind shear on the RWY 29 approach**: an S-SW wind measured at THR 29 between 190° and 220°, at 20 kt or more with frequent gusts above 30 kt, generates severe turbulence extending up to 10 NM from the field, from the surface to an estimated 1,800 ft. **The AIP's own guidance is that the RWY 29 approach is not recommended under these conditions** — treat this as a primary go/no-go and runway-selection driver, not a background caution.
- **Airspace / traffic:** 🟧 Combined APP/TWR position with ATS surveillance assistance only — final-approach monitoring, other-traffic monitoring, and departure separation functions are **suspended if the Solórzano radar is unavailable**, and are **not guaranteed below 1,000 ft AMSL (north ATZ half) or 2,000 ft AMSL (south ATZ half)**. Brief for a procedural-control mindset.

---

## 6. Missed approach watch-items

- **Terrain-driven MAP notes:** Not applicable — terrain is not the driver at this field (§5).
- **Re-sequencing environment:** Given the limited-surveillance environment (§5), expect a more procedural re-sequencing after a go-around than at a fully radar-assured field — brief accordingly.
- **Go-around traps:** 🟥 A destabilised approach into the RWY 29 wind-shear phenomenon should be flown as an **immediate, firm go-around** — the AIP's explicit "not recommended" guidance for that condition supports switching to RWY 11 (non-precision, but out of the documented shear zone) rather than persisting with RWY 29 in marginal S-SW gale conditions.

---

## 7. Landing runway / LDA & braking / vacate

- **LDA by runway:** RWY 11 and RWY 29 both **2,320 m**, no displaced threshold on either end — the full published length is usable for landing on both runways.
- **Braking / vacate:** No rapid-exit taxiway detail confirmed in reachable sources beyond the standard Y1-Y4 taxiway network — confirm with Tower/Ground on the day. 🟧
- **Runway-excursion watch:** 🟧 No displaced-threshold factor at this field (unlike neighbouring LEBB); standard wet/contaminated-runway caution applies, particularly given the winter snow-plan season (1 Dec-31 Mar).

---

## 8. Taxi-in routing to terminal & hot spots

- **Typical taxi-in by runway → terminal:** RWY 29-in-use: arrivals exit via **TWY Y2, Y3 or Y4**, entering the apron via **GATE B** (unless operationally coordinated otherwise). RWY 11-in-use: arrivals exit via **TWY Y2 or Y1**, entering the apron via **GATE A** (unless operationally coordinated otherwise). VAMSYS mirror does not publish a taxi-in time for this field 🟧.
- **Hot spots / tight taxiways:** 🟥 **The parallel taxiway does not reach either runway threshold** — arriving aircraft will generally need to be sequenced off the runway itself onto the Y-series taxiways; higher-code-letter (D/E) aircraft require mandatory oversteer at several named turns during taxi-in.
- **Stand/gate notes:** See [Dispatch §3](dispatch.md) — higher-code-letter aircraft default to **PRKG 10** (or combined PRKG 12-13 with follow-me guidance); no dedicated widebody boarding-bridge stand confirmed.

---

## 9. Arrival frequency sequence

- **Sequence:** **Santander TWR 118.375 (APP function) → Santander TWR 118.105 (TWR function) → Santander TWR 121.705 (GMC function).** Santander operates a **combined APP/TWR position** — take the assigned frequency and confirm current chart. (Frequencies from Briefing §8.)
- **Approach/Departure control:** Combined **Santander TWR** position provides APP and TWR functions on the field; en-route hand-off is to **Madrid ACC (LECM)** — see [Europe (Continental) Airspace Briefing](../../../../airspace/europe.md) 🟧 (no dedicated Spanish FIR brief exists in this library).

---

## 10. Gotchas

- **AIP-documented wind shear on the RWY 29 approach** — S-SW wind 190-220° at ≥20 kt with gusts >30 kt is a named, quantified hazard with an explicit AIP recommendation against that approach; take it as seriously as a chart-published limitation.
- **RWY 11 has no ILS** — expect RNP (LPV/LNAV), VOR or NDB only; brief the correct approach type in advance if RWY 29 is not usable.
- **No LVP at this field** — the PPOAM 550 ground-movement standstill procedure applies instead; do not expect an LVP-style lighting/stop-bar regime.
- **Combined APP/TWR position with limited surveillance assurance** — ATS surveillance functions are suspended if the Solórzano radar is down, and position assistance is not guaranteed below 1,000-2,000 ft AMSL within the ATZ.
- **Gull activity mid-June to mid-September**, peaking July-August after rain — a real bird-strike risk on short final and the runway.
- **A fixed radar-test transponder near the field can trigger spurious TCAS advisories** on pre-version-7 TCAS-equipped aircraft — these do not represent real traffic.
- **Taxiway does not reach the runway threshold** — expect to exit via a Y-series taxiway some distance from the threshold, not a direct high-speed turnoff at the numbers.

---

## Open items (🟧 — confirm against AIP / current AIRAC)

- Current-AIRAC STAR names and exact approach minima per runway.
- Rapid-exit taxiway/vacate detail.
- Confirmed widebody stand/gate solution and taxi-in time (VAMSYS mirror currently blank).
- LVTO/PPOAM interaction detail for a low-visibility arrival scenario.

> **Live data — pull at planning:** wx/METAR/TAF/TREND (with particular attention to the THR 29 wind direction/speed vs the documented shear trigger), NOTAM (runway/approach/navaid/lighting), ATIS config/wind trend, current PPOAM/RVR status. Not stored in this durable file.

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim charts inform content but are not listed here.*

- AIP España (ENAIRE eAIP) — AD 2-LEXJ, items 12-14, 19, 22, 23 — https://aip.enaire.es/AIP/contenido_AIP/AD/AD2/LEXJ/LE_AD_2_LEXJ_en.pdf (retrieved 2026-07-26). Runway/declared-distance data, ILS detail, wind-shear phenomenon (item 23), PPOAM 550, bird-hazard detail, taxi-in routing.

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-26 | Built from AIP España (ENAIRE); K Global fields from live VAMSYS; 4-page pack. |
