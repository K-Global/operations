# OMSJ — Sharjah Intl · Arrival Page

**OMSJ / SHJ** · Sharjah, United Arab Emirates · Middle East
**Version** v0.1 · **Updated** 2026-07-26 · **Status** Draft

> **Read-me:** Tactical arrival aid for the sim, not a chart. Companion to the [OMSJ Briefing](index.md), [Dispatch](dispatch.md) and [Departure](departure.md) pages. STARs/approaches are listed **by name only or flagged not-yet-confirmed** — fly the charted current-AIRAC version; minima shown are pointers, always verify on the current chart. Static data only; live wx/NOTAM are pulled at planning. Open 🟧 items are in §Open items. Flag legend 🟥 restriction/hazard · 🟧 caution/unverified · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| Usual landing runway(s) | **12 or 30** — whichever matches Dubai Intl's active runway direction |
| Usual approach | ILS on the assigned runway (RWY 12 ISRE 108.550 / RWY 30 ISHW 111.950) plus a published RNAV (RNP) Y approach to RWY 30 — the exact expected approach is passed on the Sharjah Arrival ATIS 🟧 |
| Config logic | 🟥 Slaved to Dubai Intl's active configuration, not locally wind-determined — see [Briefing §3.2](index.md) |
| Transition level | By QNH; transition altitude 13,000 ft 🟧 (UAE-wide standard value, not independently confirmed for OMSJ) |
| LVP trigger | 🟧 A tier-4 source describes LVO commencing at RVR/visibility ≤1,500 m or ceiling ≤500 ft (pre-emptive at ≤3,000 m/700 ft forecast declining), all ops suspended below RVR 350 m — confirmed CAT II/III equipment at OMSJ not established |
| Missed-approach driver | Traffic/airspace re-sequencing into the Dubai TMA — not terrain-driven |

---

## 2. STAR / transition selection

- **STARs (names only — verify current AIRAC):** Not independently confirmed from a primary source. STAR assignment is reported as being based on the waypoint at which the flight enters the Dubai TMA, with ATC assigning the appropriate STAR depending on traffic conditions and the active runway — Sharjah shares common SID/STAR endpoints with Dubai for exactly this reason. Pull the current-AIRAC STAR list at planning. 🟧
- **Selection by arrival direction / runway:** The arrival runway is passed on the Sharjah Arrival ATIS and is determined by the active runway direction at Dubai Intl, not by local wind at Sharjah.
- **Transition to approach:** Expect an RNAV-STAR-to-ILS (or RNAV RNP) transition with Dubai-area radar vectoring; verify the charted transition.
- **Speed / flow constraints on the STAR:** 🟧 A tier-4 network-sim reference for the shared Dubai TMA gives an indicative speed schedule: 210–250 kt at CTA entry, 180–230 kt downwind-to-base, 160–210 kt on base leg, 190 kt until 10 DME and 160 kt until 4 DME. Speed restrictions apply unless ATC calls "NO ATC SPEED RESTRICTION." Treat as informative planning context — verify current chart/ATC instruction.

---

## 3. Descent & energy plan

- **Top-of-descent trigger:** Standard descent-profile planning to meet the first STAR/CTA-entry speed and altitude gate (see §2). No unusual terrain-driven descent constraint at this flat coastal-desert field.
- **Speed control:** Per the Dubai TMA speed schedule above; "DESCEND VIA STAR," "DESCEND UNRESTRICTED" and "CANCEL STAR SPEEDS" are reported as standard ATC phraseology used in this TMA — verify current chart and comply with ATC instruction over any planning reference.
- **Altitude constraints:** All STARs into Sharjah reportedly carry altitude and speed restrictions that apply unless explicitly cancelled by ATC — pointer only, fly the charted values.
- **Energy traps:** Because the landing runway follows Dubai's configuration rather than local wind, a late runway/config change driven by a Dubai wind shift is a real possibility — monitor the Arrival ATIS for the current runway assignment rather than assuming continuity from a previous visit or from local Sharjah wind.

---

## 4. Approach selection by runway

*Names only — verify minima on current AIRAC charts.*

| RWY | Approach (name) | LVP / CAT note | Minima pointer (verify AIRAC) |
|---|---|---|---|
| 12 | ILS (ISRE) | 🟧 One tier-4 flight-sim source instead describes RWY 12 as GPS/RNAV-only — not reconciled | Verify current chart |
| 30 | ILS (ISHW); RNAV (RNP) Y | 🟧 CAT capability not confirmed | Verify current chart |

- **LVP triggers:** See §1/Briefing §10 — a generic LVO trigger structure is reported (RVR/visibility ≤1,500 m or ceiling ≤500 ft) but confirmed CAT II/III ground infrastructure at OMSJ was not established from a primary source. 🟧

---

## 5. Approach hazards (terrain / CFIT / specific threats)

- **CFIT / terrain:** 🟩 None. Flat coastal desert at 111 ft AMSL (elevation figure carries a source discrepancy — see Briefing §1/§18) — no close-in high terrain relevant to any arrival path.
- **Specific threats:** 🟥 The field's approach environment is embedded in the dense **Dubai TMA** — expect vectoring, sequencing and potential holding driven by Dubai's own traffic level, since Sharjah's runway and STAR assignment are subordinate to Dubai's operational state (see [Briefing §3.2](index.md)). Two historical approach-phase accidents near the field (1997 and 2004) are noted as general vigilance context in the Briefing — no current obstacle/procedure concern was found in reachable sources.
- **Airspace / traffic:** 🟥 High-density shared airspace with Dubai Intl and Al Maktoum (OMDW) — see the [Emirates (OMAE) FIR brief](../../../../airspace/fir/middle-east/emirates-omae.md) for the wider bridge-hub/FIR picture, including the region's GNSS-jamming/spoofing pattern that has been specifically reported at Sharjah.

---

## 6. Missed approach watch-items

- **Terrain-driven MAP notes:** Not applicable — flat coastal desert, no terrain-driven missed-approach constraint identified.
- **Re-sequencing environment:** A go-around at Sharjah returns the aircraft into the shared, high-density Dubai TMA radar environment — expect vectoring and possible holding before re-sequencing, particularly if Dubai itself is busy or flow-managed at the time.
- **Go-around traps:** Awareness of Dubai-area traffic and the current runway/config assignment (which may itself change if Dubai's wind/config shifts) is the operative concern on the miss, rather than a local terrain or obstacle trap.

---

## 7. Landing runway / LDA & braking / vacate

- **LDA by runway:** Both runway ends report an LDA of **3,760 m** against a full 4,060 m runway length, reflecting an approximately 300 m displaced threshold — sources disagree on whether the displacement applies to both ends or RWY 30 only (see [Briefing §3.3/§18](index.md)). Either figure is non-limiting for any K Global type.
- **Braking / vacate:** A tier-4 network-sim reference states aircraft must not stop on the rapid-exit taxiways and should continue taxiing per ATC instruction; reported vacate points are B6/B7 for RWY 30 arrivals and B11/B14 for RWY 12 arrivals. 🟧
- **Runway-excursion watch:** 🟧 Displaced-threshold LDA (3,760 m) should be briefed rather than the full published runway length; no seasonal contamination/braking-action concern at this hot, low-precipitation field.

---

## 8. Taxi-in routing to terminal & hot spots

- **Typical taxi-in by runway → terminal:** Reported practice (verify locally): **RWY 30** arrivals vacate via B6 or B7, then taxi via A6 and A to the assigned stand. **RWY 12** arrivals vacate via B11 or B14, then taxi via A14 and A to the assigned stand.
- **Hot spots / tight taxiways:** 🟥 A specific wrong-turn hotspot is reported after vacating RWY 12 onto **B11** — aircraft must always turn **left** onto B; a right turn onto **A12** is explicitly not permitted per the tier-4 ground-movement reference. Eastbound B-flow between B2–B7 and westbound B-flow between B14–B11 are separately reported as conflicting with runway-exit traffic (see [Briefing §13](index.md)).
- **Stand/gate notes:** See [Dispatch §3](dispatch.md) — not applicable for K Global since OMSJ is not in VAMSYS; general Code-letter stand restrictions are noted there.

---

## 9. Arrival frequency sequence

- **Sequence:** **Dubai Arrivals 124.900 (serves OMDB/OMSJ/OMDW) → Sharjah Tower 118.600 → Sharjah Ground 121.875.** (Frequencies from [Briefing §8](index.md).)
- **Approach/Departure control:** Sharjah has no dedicated terminal-approach frequency of its own — arrivals are worked by **Dubai Arrivals** as part of the shared Dubai TMA, handing off to Sharjah Tower for the final approach/landing segment. See the [Emirates (OMAE) FIR brief](../../../../airspace/fir/middle-east/emirates-omae.md) for the enroute/FIR-level picture. 🟧 Exact sector/frequency assignment is AIRAC-dependent.

---

## 10. Gotchas

- **The landing runway is not locally wind-determined** — it follows Dubai Intl's active configuration; monitor the Arrival ATIS rather than assuming from local wind.
- **A go-around returns you into the shared Dubai TMA traffic environment** — expect vectoring/holding, especially if Dubai is busy.
- **Do not turn right onto A12 after vacating RWY 12 via B11** — always a left turn onto B.
- **Both runway thresholds carry a displaced-threshold LDA of 3,760 m** — brief the correct figure, not the full 4,060 m runway length.
- **GNSS jamming/spoofing has been specifically reported at this field** as part of a wider Gulf pattern — be ready to cross-check DME/DME/IRU and advise ATC if FMS position drift is suspected.
- **No dedicated Sharjah approach frequency** — arrivals are worked by Dubai Arrivals; confirm the correct frequency sequence rather than expecting a Sharjah-only approach controller.

---

## Open items (🟧 — confirm against AIP / current AIRAC)

- Current-AIRAC STAR names and exact approach minima per runway.
- RWY 12 approach type (ILS vs GPS/RNAV-only — sources disagree).
- Confirmed CAT II/III equipment status and exact LVP/RVR trigger values.
- Rapid-exit taxiway/vacate detail beyond the reported B6/B7/B11/B14 points.
- Displaced-threshold extent (both runway ends vs RWY 30 only).

> **Live data — pull at planning:** wx/METAR/TAF/TREND, NOTAM (runway/approach/navaid/lighting), ATIS config/runway assignment, Dubai-area arrival-flow status, GNSS-interference advisories. Not stored in this durable file.

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim charts inform content but are not listed here.*

- Arabian vACC (VATSIM) — Sharjah Aerodrome Information, Air Control Procedures, Ground Movement Procedures, Arriving Traffic — https://library.vatsim-arabian.com/aerodrome/sharjah/aerodrome/ , /air/ , /gmc/ and https://library.vatsim-arabian.com/pilots/sharjah/arrivals/ (retrieved 2026-07-26). *Network-sim document, not regulatory — states it is derived from the GCAA eAIP and applicable CAA regulations; used here for cross-check of STAR/runway-assignment logic, Dubai TMA speed schedule, arrival taxi routing/hotspots, frequency sequence. Per the VATSIM cross-check requirement in `_Instructions`, this is the operational-content validation source for this build.*
- OurAirports — https://ourairports.com/airports/OMSJ/runways.html (retrieved 2026-07-26). *Displaced-threshold and LDA corroboration.*
- SkyVector — https://skyvector.com/airport/OMSJ/Sharjah-International-Airport (retrieved 2026-07-26). *Runway/displaced-threshold and communications cross-check.*
- SKYbrary — https://skybrary.aero/airports/omsj (retrieved 2026-07-26). *Historical accident references, climate corroboration.*

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-26 | Built from national AIP; K Global fields from live VAMSYS; 4-page pack. |
