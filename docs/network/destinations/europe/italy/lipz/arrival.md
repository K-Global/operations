# LIPZ — Venice/Tessera (Marco Polo) · Arrival Page

**LIPZ / VCE** · Tessera, Venice, Veneto, Italy · Europe
**Version** v0.1 · **Updated** 2026-07-26 · **Status** Draft — AIP Italia (ENAV)-derived, cross-checked

> **Read-me:** Tactical arrival aid for the sim, not a chart. Companion to the [LIPZ Briefing](index.md), [Dispatch](dispatch.md) and [Departure](departure.md) pages. STARs/approaches are listed **by name only** — fly the charted current-AIRAC version; minima shown are pointers, always verify on the current chart. Static data only; live wx/NOTAM are pulled at planning. Open 🟧 items are in §Open items. Flag legend 🟥 restriction/hazard · 🟧 caution/unverified · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| Usual landing runway(s) | **04R or 22L** (the active direction of the main runway pair), selected by ATC while tailwind component ≤10 kt |
| Usual approach | **ILS CAT III on RWY 04R only**; RNP (LNAV) or VOR non-precision on 22L (and on the backup pair 04L/22R, ATC discretion) |
| Config logic | Wind-driven selection of the 04R/22L active direction; RWY 04L/22R not used concurrently with the main pair |
| Transition level | By QNH; **transition altitude 6,000 ft** — verify current TL banding on the chart 🟧 |
| LVP trigger | RVR ≤550 m and/or cloud base <200 ft, or a rapid deterioration trend 🟧 (exact interaction with each runway's minima not fully confirmed) |
| Missed-approach driver | Airspace/traffic re-sequencing on a functionally single-runway field, and the nearby permanent prohibited areas — not terrain |

---

## 2. STAR / transition selection

- **STARs (names only — verify current AIRAC):** **STAR RNAV1** to IAF **LAREN** (from the west via ALBET; from the south via OTGIG/BASOG); a conventional **STAR (ATC discretion)** for non-RNAV-equipped aircraft to IAF **LAREN/ERSAB** via the same terminal-fix family. Holding patterns are established on LAREN and (RNAV1 STAR) on ERSAB, ALBET, OTGIG and BASOG.
- **Selection by arrival direction / runway:** STAR/IAF assignment follows the arrival direction (west via ALBET, south via OTGIG/BASOG) rather than the landing runway directly; Padova Radar assigns the transition to the active runway configuration.
- **Transition to approach:** From IAF LAREN, an RNAV transition (TR 038°) leads to the IF for the RWY 04R ILS/RNP approaches; from IAF LAREN/ERSAB, transitions lead to the RWY 22L RNP approach. Expect radar vectoring onto final under Padova Radar.
- **Speed / flow constraints on the STAR:** 250 KIAS below FL100 (standard), reducing to 200 kt at the LOC/radial-intercept turn or 12 NM straight-in, 180 kt at 8 NM/LOC-intercept completion, and **160 kt inside 5 NM from the threshold/TDZ** on final — pointers only, verify current chart.

---

## 3. Descent & energy plan

- **Top-of-descent trigger:** Standard descent-profile planning to meet the first STAR/holding-fix altitude gate (LAREN, ERSAB, ALBET, OTGIG, BASOG all carry defined crossing altitudes) — verify current chart.
- **Speed control:** STAR speed gates as above; confirm current chart for the assigned transition.
- **Altitude constraints:** Multiple published crossing altitudes along each STAR (e.g., LAREN +4,000 ft, various intermediate fixes stepping down from FL090–FL130) — pointers only, verify chart.
- **Energy traps:** A late runway/config change (04R↔22L, or a shift to the backup pair) ahead of a wind shift is the field's principal energy trap, **compounded by the loss of CAT III capability** on anything other than RWY 04R — brief an early-decision contingency rather than carrying excess energy into a late runway change in marginal weather.

---

## 4. Approach selection by runway

*Names only — verify minima on current AIRAC charts.*

| RWY | Approach (name) | LVP / CAT note | Minima pointer (verify AIRAC) |
|---|---|---|---|
| 04R | ILS or LOC (chart variants Y/Z/X/W), RNP (LPV/LNAV), VOR | **CAT III + LVTO approved**; RVR min 75 m 🟩 | verify current chart |
| 22L | RNP (LNAV only), VOR | **No ILS / no precision approach on this direction** 🟧 | verify current chart |
| 04L (ATC discretion) | RNP (LNAV only), VOR | Backup runway; no precision approach | verify current chart |
| 22R (ATC discretion) | RNP (LNAV only), VOR | Backup runway; no precision approach | verify current chart |

- **LVP triggers:** RVR ≤550 m and/or cloud base <200 ft (or a rapid deterioration trend). Because CAT III exists on RWY 04R only, an LVP event coinciding with a wind favouring 22L (or forcing the backup pair) is a genuine capability drop — brief the non-precision fallback explicitly rather than assuming ILS-equivalent minima are available on every runway. 🟥

---

## 5. Approach hazards (terrain / CFIT / specific threats)

- **CFIT / terrain:** 🟩 None of consequence. Flat lagoon-edge/coastal plain at 7 ft AMSL. A temporary multi-crane obstacle penetrating the Inner Horizontal Surface was notified for 2026–2027 several kilometres from the field — verify current NOTAM status.
- **Specific threats:** 🟥 **Lagoon/coastal fog** is the standout weather threat, directly tied to the fact that only RWY 04R carries CAT III capability. **Published bird-concentration mapping** exists for the aerodrome vicinity — a lagoon-edge wildlife/bird-strike consideration. Two permanent prohibited-area pairs (over the historic city of Venice, and over the Porto Marghera petrochemical complex) sit close to the circuit, south/south-west of the field — maintain track discipline during vectoring near these zones.
- **Airspace / traffic:** 🟧 Moderate density under **Padova ACC ("Padova Radar")**, which consolidated the former dedicated Venezia APP function in December 2023 — do not brief an outdated "Venezia Radar" expectation.

---

## 6. Missed approach watch-items

- **Terrain-driven MAP notes:** Terrain is not the driver (flat coastal plain) — fly the published missed approach and verify climb-gradient/turn on the current chart.
- **Re-sequencing environment:** A go-around on this functionally single-active-runway-pair field returns you into a shared arrival/departure stream on RWY 04R/22L — expect vectoring/holding (established patterns exist on LAREN, AKADO, ERSAB, INDOD and others) rather than an independent parallel to be re-sequenced onto.
- **Go-around traps:** Awareness of the two permanent prohibited-area pairs close to the circuit during any extended vectoring on the miss; runway-occupancy/vacate discipline on the ground remains a factor for the next arrival even though it does not directly affect the aircraft going around.

---

## 7. Landing runway / LDA & braking / vacate

- **LDA by runway:** 04R/22L **3,300 m** (no displaced threshold on either end, not independently confirmed to the metre 🟧); 04L/22R shorter and reduced by an approximately 94 m displaced threshold on the 04L end — exact LDA figures not independently confirmed 🟧. The main pair is ample for any K Global type; the backup pair is not routinely available (§9, Departure page).
- **Braking / vacate:** Landing traffic on 04R/22L must vacate no later than a named taxiway (TWY F for 04R, TWY C for 22L); on 04L/22R no later than TWY K (04L) or TWY P (22R) — rapid-exit taxiway detail beyond these named points not confirmed. 🟧
- **Runway-excursion watch:** 🟧 De-icing/contamination data not confirmed this pass (Departure page §7) — treat winter braking-action as an unquantified risk pending confirmation; no LIPZ-specific tailwind-tendency note found beyond the standard ≤10 kt tailwind-component runway-selection rule.

---

## 8. Taxi-in routing to terminal & hot spots

- **Typical taxi-in by runway → terminal:** After landing on the assigned 04R/22L direction, taxi in to the main apron per Ground assignment; VAMSYS mirror gives a planning taxi-in time of **10 min** `[VAMSYS mirror 2026-07-26]`. If landing on the backup pair (04L/22R, ATC discretion), note that this runway also functions as taxiway "T" when the main pair is active, so ground routing may differ from a standard arrival.
- **Hot spots / tight taxiways:** 🟥 Taxiway **Y** (Aeronavali-only), **KA** (Polizia di Stato-only) and **KB** (Vigili del Fuoco/Guardia di Finanza-only) — do not expect a routine commercial taxi-in clearance through these. Cross-ref [Briefing §13](index.md).
- **Stand/gate notes:** See [Dispatch §3](dispatch.md) — VDGS confirmed at stand 433 and stands 322–330; wider widebody stand allocation for our operation not confirmed.

---

## 9. Arrival frequency sequence

- **Sequence:** **Padova Radar 118.900/120.725 (sector-specific) → Venezia Tower 120.200 (H24)/118.255 (ATC discretion) → Venezia Ground 121.705/118.255.** Take the assigned frequency and confirm current chart. (Frequencies from Briefing §8.)
- **Approach/Departure control:** **Padova ACC** ("Padova Radar") is the facility for Venice's terminal approach and area control, consolidated from a formerly separate Venezia APP in December 2023; en-route inbound handoff is within the **Milano FIR (LIMM)** — see [Europe airspace](../../../../airspace/europe.md) 🟧 (Milano/Padova ACC delegation relationship not independently confirmed from a primary source this pass; no dedicated Italian FIR brief exists yet in this library).

---

## 10. Gotchas

- **ILS CAT III exists on RWY 04R only** — never expect the same low-visibility capability on 22L or on the backup pair (04L/22R); brief the RNP/VOR non-precision fallback explicitly.
- **RWY 04L/22R is backup/contingency-only** and doubles as a taxiway during main-pair operations — do not expect it as a routine second arrival runway.
- **Lagoon/coastal fog can develop with limited warning** — check current LVP status before committing to a marginal-weather arrival, especially if the active runway is anything other than 04R.
- **Two permanent prohibited-area pairs close to the circuit** (over the historic city, and over Porto Marghera) — maintain track discipline during any vectoring or holding.
- **Published bird-concentration hazard** in the aerodrome vicinity, consistent with the lagoon-edge setting.
- **Approach/area control moved from a dedicated Venezia APP to Padova ACC in Dec 2023** — do not brief an outdated "Venezia Radar" expectation.
- **Config swap (04R↔22L) driven by a wind shift** can bring a late runway change with a real capability drop (loss of CAT III) if the change moves away from 04R.

---

## Open items (🟧 — confirm against AIP / current AIRAC)

- Exact LDA figures for 04R/22L and 04L/22R (displaced-threshold arithmetic not independently reconciled).
- Rapid-exit taxiway/vacate detail beyond the named runway-occupancy points.
- Exact interaction between the published LVP trigger and each runway/direction's specific minima.
- Milano FIR (LIMM) ↔ Padova ACC delegation relationship — referenced by name per this library's Europe airspace file but not independently confirmed from a primary source this pass.
- Current status of the multi-crane obstacle supplement (validity window extending into 2026–2027 at last check).

> **Live data — pull at planning:** wx/METAR/TAF/TREND, NOTAM (runway/approach/navaid/lighting, esp. current active-runway configuration and CAT III/LVP equipment status), ATIS config/wind trend, current status in the Milano FIR/Padova ACC area. Not stored in this durable file.

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim charts inform content but are not listed here.*

- Aeronautical Information (Fabio Patrassi) — "Procedure strumentali di Venezia Tessera" — https://aeronauticalinformation.it/index.php/2022/10/20/procedure-strumentali-di-venezia-tessera/ (retrieved 2026-07-26). *STAR/approach names, IAFs, holding patterns, altitude/speed constraints — quotes current AIP text with AIRAC amendment references.*
- Aeronautical Information (Fabio Patrassi) — "La Control Zone di Venezia" — https://aeronauticalinformation.it/index.php/2022/09/28/la-control-zone-di-venezia/ (retrieved 2026-07-26). *Approach speed control, Padova ACC consolidation, prohibited areas.*
- Aeronautical Information (Fabio Patrassi) — "Aeroporti di Venezia Tessera e Venezia Lido" — https://aeronauticalinformation.it/index.php/2022/10/05/aeroporti-di-venezia-tessera-e-venezia-lido/ (retrieved 2026-07-26). *Runway-occupancy/vacate points, PAPI/approach lighting, bird-concentration chart, LVP triggers — quotes current AIP text with AIRAC amendment references.*
- POSCON Pilot Resources — "LIPZ / VCE - Tessera" — https://forums.poscon.net/docs/pilots/eur/ita/lipz/ (retrieved 2026-07-26). *CAT III/LVTO confirmation, LVP criteria, preferential-runway logic. Network-sim reference, not regulatory.*
- IVAO Italy QuickOverview — "LIPZ" — https://quickoverview.ivao.it/aerodrome/show/LIPZ (retrieved 2026-07-26). *TA/TL banding, ATS frequency cross-check. Network-sim reference, not regulatory.*

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-26 | Built from AIP Italia (ENAV); K Global fields from live VAMSYS; 4-page pack. |
