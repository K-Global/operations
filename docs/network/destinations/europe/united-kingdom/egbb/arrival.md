# EGBB — Birmingham · Arrival Page

**EGBB / BHX** · Birmingham (Bickenhill, Solihull), England, United Kingdom · Europe
**Version** v0.1 · **Updated** 2026-07-26 · **Status** Draft

> **Read-me:** Tactical arrival aid for the sim, not a chart. Companion to the [EGBB Briefing](index.md), [Dispatch](dispatch.md) and [Departure](departure.md) pages. STARs/approaches are listed **by name only or flagged not-yet-confirmed** — fly the charted current-AIRAC version; minima shown are pointers, always verify on the current chart. Static data only; live wx/NOTAM are pulled at planning. Open 🟧 items are in §Open items. Flag legend 🟥 restriction/hazard · 🟧 caution/unverified · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| Usual landing runway(s) | **RWY 33** (preferred when dry, wind ≤5 KT at the RWY 33 anemometer) 🟧; RWY 15 by ATC/operational reasons |
| Usual approach | ILS CAT III on the assigned runway end |
| Config logic | Wind/surface-condition driven — single runway, no configuration choice beyond direction |
| Transition level | By QNH; transition altitude 6,000 ft |
| LVP trigger | CAT II/III procedures apply on both runway ends subject to facility serviceability; exact RVR trigger not confirmed 🟧 |
| Missed-approach driver | Airspace/traffic sequencing in Class D — **not** terrain |

---

## 2. STAR / transition selection

- **STARs (names only — verify current AIRAC):** Standard inbound release/transition fixes are **GROVE** and **CHASE**; a STAR structure via **OLIVE** exists but is reserved for use only when the **HON VOR is out of service** — do not expect an OLIVE routing under normal navaid serviceability. A recent AIRAC cycle (2603) reportedly replaced the "BEGAM" STAR series with "OMENU" — **treat all STAR names as unconfirmed for the current cycle** and pull the live procedure list at planning. 🟧
- **Selection by arrival direction / runway:** Birmingham Radar assigns the STAR/transition to the active runway (33 preferred, 15 by exception); Coventry (EGBE)-bound traffic on airways is also routed on Birmingham STARs and positioned for Coventry by Birmingham Approach — an airspace-sharing quirk worth situational awareness.
- **Transition to approach:** Expect vectoring from the GROVE/CHASE release point onto the ILS for the runway in use; continuous descent approach (CDA) technique is expected throughout.
- **Speed / flow constraints on the STAR:** Aircraft should be flown no faster than 250 KT below FL100, reducing to 250–210 KT during the intermediate approach; ATC will impose 180 KT or less inside 10 DME I-BM/I-BIR. CDAs commence from 6,000 ft QNH. Verify current chart for any additional constraint.

---

## 3. Descent & energy plan

- **Top-of-descent trigger:** Plan to meet the CDA profile from 6,000 ft QNH per the published continuous-descent-approach technique — a low-power, low-drag profile with ATC providing range-to-touchdown checks rather than level-off segments.
- **Speed control:** 250 KT below FL100 tapering to 250–210 KT on the intermediate approach, then 180 KT or less inside 10 DME I-BM/I-BIR (subject to ATC speed instruction for separation).
- **Altitude constraints:** No level-off intended under the CDA technique — key constraint is achieving the glidepath intercept height for the assigned distance-to-touchdown without excess power/drag. Verify current chart for any hard altitude gate.
- **Energy traps:** A late runway change (33↔15) driven by a wind shift is the primary energy trap at this single-runway field — a late switch to the reciprocal runway requires a full re-plan of the approach, not just a runway-number change, given each end carries a materially different displaced-threshold LDA (§7).

---

## 4. Approach selection by runway

*Names only — verify minima on current AIRAC charts.*

| RWY | Approach (name) | LVP / CAT note | Minima pointer (verify AIRAC) |
|---|---|---|---|
| 15 | ILS (IBIR) | **CAT III** 🟩 — false capture possible approaching from the north | verify current chart |
| 33 | ILS (IBM) | **CAT III** 🟩 | verify current chart |

- **LVP triggers:** CAT II/III procedures apply on both ends subject to facility serviceability; ATC Low Visibility Procedures are announced via ATIS/RTF when in effect. Exact RVR trigger values not confirmed this pass. 🟧

---

## 5. Approach hazards (terrain / CFIT / specific threats)

- **CFIT / terrain:** 🟩 None of significance. Flat West Midlands plain at 339 ft AMSL; the approach-funnel obstacle table lists only low, expected obstacles (trees, hedges, a gantry, lamp posts, ILS localizer/monitor structures) generally under 90 ft AGL. See [Briefing §3.1](index.md) for the wider circling-area obstacle picture and the NOTAM-check caveat on one unusually tall crane northwest of the field.
- **Specific threats:** 🟧 Single runway, no parallel/alternate landing surface — any go-around or runway-availability issue compresses directly into re-sequencing rather than a config swap. Building-induced turbulence/wind shear is AIP-warned in strong-wind conditions given runway orientation.
- **Airspace / traffic:** 🟩 Class D CTR/ATZ under Birmingham Radar; moderate traffic density; part of Coventry's (EGBE) ATZ lies inside Birmingham's controlled airspace — an awareness item for EGBE-adjacent routing, not a standing conflict risk.

---

## 6. Missed approach watch-items

- **Terrain-driven MAP notes:** Terrain is not the driver (flat plain) — fly the published missed approach and verify climb-gradient/turn on the current chart.
- **Re-sequencing environment:** A go-around at a single-runway field returns the aircraft into a Class D radar environment with no parallel runway to absorb the traffic — expect vectoring/holding at GROVE or CHASE pending re-sequencing.
- **Go-around traps:** No terrain trap; the operative risk is workload/traffic re-sequencing on a busy single-runway day, and confirming the correct runway/config on any subsequent approach attempt if wind has shifted meanwhile.

---

## 7. Landing runway / LDA & braking / vacate

- **LDA by runway:** **RWY 15: 2,581 m; RWY 33: 2,450 m** — both **reduced from the 3,052 m physical runway length by displaced thresholds** (RWY 15 displaced 291 m; RWY 33 displaced 447 m). Always brief the declared LDA for the assigned runway, not the full physical length. Both figures are ample for the K Global R-category fleet; cross-ref [Briefing §7](index.md).
- **Braking / vacate:** After landing on **RWY 15 and vacating onto Taxiway C, do not proceed beyond C2** without specific ATC instruction. Rapid-exit taxiway detail beyond this is not confirmed in reachable sources — confirm with Ground/Tower on the day. 🟧
- **Runway-excursion watch:** 🟧 The AIP warns that **standing water can be encountered on the runway edge between Taxiways Foxtrot and Bravo** when the surface is reported wet — a runway-edge, not centreline, contamination risk. Both displaced thresholds reduce the excursion margin versus the full physical length; treat LDA as the operative number, not 3,052 m.

---

## 8. Taxi-in routing to terminal & hot spots

- **Typical taxi-in by runway → terminal:** After landing, taxi in via the lettered taxiway system to the assigned Terminal Apron stand (North Stands 40–60, South Stands 1–25, or remote 70–86) or the Elmdon Apron (501–506); VAMSYS mirror gives a planning taxi-in time of **12 min** `[VAMSYS mirror 2026-07-26]`. Pilots should select the first convenient runway exit unless otherwise advised by ATC — all appropriate runway exits are illuminated.
- **Hot spots / tight taxiways:** 🟥 **Taxiway D between D4 and D5 is wingspan-limited to 42 m** — larger aircraft are routed via Taxiway E; cross-ref [Briefing §13](index.md). Code E aircraft entering **Taxiway Foxtrot** from the Elmdon Apron area receive follow-me guidance due to reduced main-gear-to-pavement-edge clearance on the bend. **Taxiways T/U and Stands 81–86 close overnight** (Mon–Sat 2300–0700, Sun 2300–0800 local).
- **Stand/gate notes:** See [Dispatch §3](dispatch.md) — Terminal Apron stand allocation for the K Global operation not confirmed; self-manoeuvring onto Terminal Apron stands is prohibited without separate Airfield Operations approval, so plan for marshaller/Safedock guidance and likely tow/push assistance where applicable.

---

## 9. Arrival frequency sequence

- **Sequence:** **Birmingham Radar 123.980 (H24) / 131.330 (as directed) or Birmingham Director 131.005 (as directed) → Birmingham Tower 118.305 (H24) → Birmingham Ground 121.805 (on request).** Take the assigned frequency and confirm current chart. (Frequencies from [Briefing §8](index.md).)
- **Approach/Departure control:** **Birmingham Radar/Director** is the facility for Birmingham's terminal approach; no separate area-control handoff brief exists for the London FIR (EGTT) in this library — see [Europe airspace general brief](../../../../airspace/europe.md) for enroute context, flagged as a scope gap in [Briefing §18](index.md). 🟧

---

## 10. Gotchas

- **RWY 33 is the default preferred landing runway** (dry, ≤5 KT) — do not assume RWY 15 without a stated operational reason or contrary wind/surface state. 🟧
- **Both thresholds are displaced by different amounts** (291 m/447 m) — the two runway ends do NOT have symmetric LDA; re-brief LDA on any late runway change.
- **After landing RWY 15 via Taxiway C, do not proceed past C2** without an explicit ATC instruction.
- **Single runway, no redundancy** — a go-around or runway-availability event compresses straight into re-sequencing, with no parallel runway to relieve traffic.
- **Building-induced turbulence/wind shear** is AIP-warned in strong-wind conditions given runway orientation — brief accordingly on a gusty approach.
- **Standing water risk between Taxiways Foxtrot and Bravo** on a wet-runway report — a runway-edge hazard on rollout/vacate.
- **Bird activity (pigeons) may cross the runway up to 100 ft AGL** — H24 dispersal is in effect but does not eliminate the risk.
- **Taxiway D wingspan limit (42 m) applies on taxi-in too**, not just taxi-out — confirm routing via Taxiway E if applicable.

---

## Open items (🟧 — confirm against AIP / current AIRAC)

- Current-AIRAC STAR names and exact approach minima per runway (GROVE/CHASE/OLIVE and the reported BEGAM→OMENU rename need re-verification against the live procedure list).
- Preferential-runway rule (RWY 33 default) — re-verify against the current (2026-03-19) AIRAC cycle text, not fully reachable in this research pass.
- Exact LVP/CAT III RVR trigger values.
- Rapid-exit taxiway/vacate detail beyond the RWY 15/Taxiway C restriction.
- Confirmed stand assignment and taxi-in routing for the K Global operation.

> **Live data — pull at planning:** wx/METAR/TAF/TREND, NOTAM (runway/approach/navaid/lighting, esp. CAT III equipment status on either end, Taxiway D restriction status), ATIS config/wind trend, current night-quota/closure status. Not stored in this durable file.

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim charts inform content but are not listed here.*

- **NATS UK eAIP, AD 2 EGBB**, AIRAC effective 2026-03-19 — https://www.aurora.nats.co.uk/htmlAIP/Publications/2026-03-19-AIRAC/html/eAIP/EG-AD-2.EGBB-en-GB.html (retrieved 2026-07-26). *Runway/declared-distance data, navaids, communications, transition altitude.*
- **NATS UK eAIP, AD 2 EGBB**, AIRAC effective 2022-06-16 (historical cycle cross-check) — https://www.aurora.nats.co.uk/htmlAIP/Publications/2022-06-16-AIRAC/html/eAIP/EG-AD-2.EGBB-en-GB.html (retrieved 2026-07-26). *CDA technique, preferential runway, RWY 15/Taxiway C restriction, taxiway hot spots.*
- VATSIM UK — "EGBB | Birmingham" airfield information — https://www.vatsim.uk/airports/EGBB (retrieved 2026-07-26). *Network-sim, not regulatory — GROVE/CHASE/OLIVE STAR-usage cross-check, transition altitude confirmation.*
- IVAO Documentation Library — "Birmingham (EGBB)" local procedures — https://wiki.ivao.aero/en/home/divisions/xu/atc/aerodrome/local-procedure/midlands/egbb (retrieved 2026-07-26). *Network-sim, not regulatory — CDA speed/altitude cross-check.*

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-26 | Built from UK AIP (NATS AIS); K Global fields from live VAMSYS; 4-page pack. |
