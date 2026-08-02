# LLBG — Ben Gurion · Arrival Page

**LLBG / TLV** · Tel Aviv (Lod), Israel · Middle East
**Version** v0.1 · **Updated** 2026-07-26 · **Status** Draft

> **Read-me:** Tactical arrival aid for X-Plane 11, not a chart. Companion to the [LLBG Briefing](index.md), [Dispatch](dispatch.md) and [Departure](departure.md) pages. STARs/approaches are listed **by name only** — fly the charted current-AIRAC version; minima shown are pointers, always verify on the current chart. Static data only; live wx/NOTAM are pulled at planning. Open 🟧 items are in §Open items. Flag legend 🟥 restriction/hazard · 🟧 caution/unverified · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| Usual landing runway(s) | **RWY 12** preferred (tailwind ≤10 kt dry/≤5 kt wet); RWY 30 or 21 preferred at high traffic volume |
| Usual approach | ILS CAT I on the assigned runway; RNP (RNAV) also published on RWY 08/12/21 |
| Config logic | Wind/tailwind-limit and traffic-volume driven |
| Transition level | By QNH; transition altitude referenced to AIP ENR 1.4 — not confirmed this pass 🟧 |
| LVP trigger | RVR <800 m or visibility <1200 m; RWY 21 preferred LVP arrival runway (RWY 26 in an LVP emergency) — no CAT III backup 🟧 |
| Missed-approach driver | ATC/traffic-sequencing, not terrain |

---

## 2. STAR / transition selection

- **STARs (names only — verify current AIRAC):** **PURLA1** (RWY 08) · **GODED2, NINET1** (RWY 12/30) · **TOMAL 2B, SALAM 2B** (RWY 12) · **AMMOS 1A/1B, AMMIT 1A, SALAM 2A** (RWY 21) · **AMMOS 1C/1D, AMMIT 1C, SALAM 2C** (RWY 26) · **AMMOS 1E/1F, AMMIT 1E, SALAM 3E** (RWY 30).
- **Selection by arrival direction / runway:** RWY 12 is the default preferred landing runway subject to the tailwind limits (§1); RWY 30 or 21 are preferred when a high volume of traffic is expected `[Israel AIP AD 2 LLBG 2.22]`. The SALAM-family STARs relate to arrivals from the Amman FIR side; AMMOS/AMMIT-family STARs feed RWY 21/26/30.
- **Transition to approach:** Expect an RNAV-STAR-to-ILS transition with radar vectoring onto final; a dedicated RNAV transition chart exists for **ILS RWY 21-26**. Verify the charted transition.
- **Speed / flow constraints on the STAR:** Published speed/altitude gates are pointers only — verify chart; standard ICAO 250 KIAS below FL100 assumed.

---

## 3. Descent & energy plan

- **Top-of-descent trigger:** Plan TOD to meet the first STAR altitude gate; a **Continuous Descent Approach (CDA)** technique is the AIP's stated arrival philosophy — descend at the rate best suited to join the glidepath/final segment without level flight, maintaining en-route configuration as long as practicable and establishing landing configuration/approach speed shortly before or at 4 miles final `[Israel AIP AD 2 LLBG 2.21]`.
- **Speed control:** STAR speed gates and standard ICAO 250 KIAS below FL100 — confirm current chart.
- **Altitude constraints:** Key STAR crossing constraints are pointers — fly the charted altitudes.
- **Energy traps:** A late runway-configuration change (RWY 12 arrival default versus RWY 30/21 at high traffic volume) ahead of a wind shift is the main energy/sequencing trap at this field; there is no significant terrain-driven energy trap (flat coastal plain).

---

## 4. Approach selection by runway

*Names only — verify minima on current AIRAC charts.*

| RWY | Approach (name) | LVP / CAT note | Minima pointer (verify AIRAC) |
|---|---|---|---|
| 08 | ILS CAT I (BC); RNP (RNAV) | CAT I only — no CAT III 🟩 | verify current chart |
| 12 | ILS CAT I (BG); RNP (RNAV) | CAT I only; preferred default landing runway 🟩 | verify current chart |
| 21 | ILS CAT I (BN); LOC (BN, backup); RNP X; RNP Y | CAT I only; **preferred LVP arrival runway** 🟧 | verify current chart |
| 26 | ILS CAT I (BA) | CAT I only; preferred RWY in an LVP **emergency** 🟧 | verify current chart |
| 30 | ILS CAT I (BD) | CAT I only; closed for takeoff 23:00–06:00 LT (arrival unaffected) 🟩 | verify current chart |
| 03 | — none published — | **Never plan as an IFR arrival runway** | n/a |

- **LVP triggers:** RVR <800 m or visibility <1200 m per the AIP's own definition `[Israel AIP AD 2 LLBG 2.22]`; **no CAT III capability exists at this field** (Briefing §3.4/§5) — an LVP event caps arrivals at CAT I minima with genuine delay/diversion exposure. Expect increased ATC separation and delay under LVP.

---

## 5. Approach hazards (terrain / CFIT / specific threats)

- **CFIT / terrain:** 🟩 None significant. Flat Israeli coastal plain at 134 ft AMSL — no close-in high terrain relevant to any arrival path (Briefing §3.1).
- **Specific threats:** 🟧 **Bird concentration in the vicinity of the airport is AIP-flagged** (AD 2.23) — maintain a bird-strike lookout on final approach. No CAT III backup for an LVP event (§4).
- **Airspace / traffic:** 🟥 **Standing caution** — Tel Aviv (LLLL) FIR and surrounding regional airspace status is variable and NOTAM-driven; re-check current NOTAMs and state bulletins before every arrival (Briefing §3.2/§4). Operationally, expect a dense radar-controlled terminal environment with mixed civil/state traffic.

---

## 6. Missed approach watch-items

- **Terrain-driven MAP notes:** Not applicable — flat coastal plain, no terrain-driven missed-approach constraint.
- **Re-sequencing environment:** In case of a missed approach on a visual approach, pilots must follow ATC instructions for re-sequencing `[Israel AIP AD 2 LLBG 2.22]`; expect vectoring back into the active radar sequence.
- **Go-around traps:** Configuration/traffic awareness during re-sequencing; confirm the active runway configuration has not changed during the miss.

---

## 7. Landing runway / LDA & braking / vacate

- **LDA by runway:** 03/21 **2,772 m** · 08 **3,580 m** (noise-abatement-reduced TORA does not affect LDA) · 26 **3,462 m** (600 m displaced threshold) · 12 **3,112 m** · 30 **3,032 m** (75 m displaced threshold) — all ample for a Category L arrival, but **brief the declared figure, not the physical pavement length** (Briefing §3.3/§7).
- **Braking / vacate:** Named rapid-exit taxiways by landing runway: RWY 26 via W4; RWY 08 via (rapid-exit) W3; RWY 30 via (rapid-exit) Z onto K; RWY 12 via (rapid-exit) Y onto M; RWY 21 via E3 onto M (to Terminal 3/aprons X/H) or T3 onto K (to aprons J/L/N/V) `[Israel AIP AD 2 LLBG 2.20]`. Pilots are requested to vacate without delay unless otherwise advised by ATC.
- **Runway-excursion watch:** 🟧 Displaced thresholds on RWY 26 (600 m) and RWY 30 (75 m); no winter-contamination consideration at this warm-climate field.

---

## 8. Taxi-in routing to terminal & hot spots

- **Typical taxi-in by runway → terminal:** Per the named rapid-exit taxiways above, taxi in to Terminal 3 (via M or K, depending on landing runway and destination apron) or to aprons N/J/L per Ground/Apron assignment; VAMSYS mirror gives a planning taxi-in time of **12 min** `[VAMSYS mirror 2026-07-26]`.
- **Hot spots / tight taxiways:** 🟥 **Taxilane H is wingspan-restricted to a maximum of 36 m** — relevant only for a larger-than-Category-L type; not limiting for our standard operation. Terminal 3 concourse stands use AVDGS — taxi accurately on the centreline before, during and after the final turn into the stand to avoid AVDGS misidentification, and turn off taxi/landing lights when not required to avoid blinding the system `[Israel AIP AD 2 LLBG 2.20]`.
- **Stand/gate notes:** See [Dispatch §3](dispatch.md) — Category L stands available across aprons N/J/L and the Terminal 3 concourses; gate assignment for our operation not yet individually confirmed.

---

## 9. Arrival frequency sequence

- **Sequence:** **Ben-Gurion Approach/Arrival 120.500 / 131.100 (by ATC) → Ben-Gurion TMA 119.500 → Tower Arrival 132.100 (RWY 21 only) or Tower 134.600 → Ground East 121.950 / Ground West 121.750.** Take the assigned frequency and confirm current chart (frequencies from Briefing §8).
- **Approach/Departure control:** **Ben-Gurion Approach** is the facility for the terminal area, vectoring per the Surveillance Minimum Altitude Chart (SMAC); **Tel Aviv (LLLL) FIR** hands off en route inbound — see [Middle East airspace brief](../../../../airspace/middle-east.md). 🟧 Exact sector/frequency assignment is AIRAC-dependent.

---

## 10. Gotchas

- **RWY 03 is never an IFR arrival runway** — no published instrument approach exists for it; verify current AIRAC before assuming interchangeability with RWY 21.
- **No CAT III backup** — an LVP event (RVR <800 m/vis <1200 m) caps the field at CAT I minima; brief a holding/diversion contingency if conditions are marginal.
- **Displaced thresholds on RWY 26 (600 m) and RWY 30 (75 m)** — brief the declared LDA, not the physical runway length.
- **Config swap (RWY 12 default vs RWY 30/21 at high traffic volume)** can bring a runway change late in the approach — watch the ATIS/traffic-volume trend.
- **Bird concentration in the airport vicinity** — maintain a lookout on final approach (AIP AD 2.23).
- **AVDGS stands at Terminal 3** require accurate centreline tracking into the turn and lights-off discipline to avoid system misidentification.
- **Standing reminder:** confirm current NOTAMs and regional airspace-status bulletins before every arrival (Briefing §3.2/§4) — do not treat this file's snapshot as current clearance.

---

## Open items (🟧 — confirm against AIP / current AIRAC)

- Current-AIRAC STAR names and exact approach minima per runway.
- Transition altitude/level exact figures (AIP ENR 1.4 not reached this pass).
- Exact sector/frequency assignment for Approach/Departure control.
- Rapid-exit taxiway/vacate detail beyond the named RETs already captured.

> **Live data — pull at planning:** wx/METAR/TAF/TREND, NOTAM (runway/approach/navaid/lighting), ATIS config/wind trend, and the current regional airspace-status/NOTAM picture (Briefing §3.2). Not stored in this durable file.

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim charts inform content but are not listed here.*

- **Israel CAAI eAIP, AD 2 LLBG** — AIRAC cycle effective 2023-06-15 (retrieved 2026-07-26) — https://e-aip.azurefd.net/2023-06-15-AIRAC/html/eAIP/LL-AD-2.LLBG-en-GB.html . *STAR/IAP index, runway/declared-distance data, communications, local traffic regulations, CDA arrival philosophy, LVP.*
- See the [Briefing page](index.md) for full ARP/runway/comms/navaid citations.

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-26 | Built from national AIP; K Global fields from live VAMSYS; 4-page pack. |
