# KSMF — Sacramento International · Arrival Page

**KSMF / SMF** · Sacramento, California, United States · North America
**Version** v0.1 · **Updated** 2026-07-26 · **Status** Draft — exact approach minima and LVP trigger conditions unverified in reachable sources; verify current AIRAC.

> **Read-me:** Tactical arrival aid for X-Plane 11, not a chart. Companion to the [KSMF Briefing](index.md), [Dispatch](dispatch.md) and [Departure](departure.md) pages. STARs/approaches are listed **by name only** — fly the charted current-AIRAC version; minima shown are pointers, always verify on the current chart. Static data only; live wx/NOTAM are pulled at planning. Open 🟧 items are in §Open items. Flag legend 🟥 restriction/hazard · 🟧 caution/unverified · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| Usual landing runway(s) | Wind-driven between **17L/35R** and **17R/35L**; **17R** preferred in low-vis (CAT II/III, ALSF2) |
| Usual approach | ILS RWY 17R (SA CAT I / CAT II-III) primary in low-vis; ILS 17L (SA CAT II) / 35L (CAT I) otherwise; RNAV (GPS)/RNAV (RNP) on 35R (no ILS) |
| Config logic | Wind-driven; afternoon "Delta breeze" shifts wind NW/W later in the day |
| Transition level | FL180 (US-wide standard) |
| LVP trigger | Tule-fog-driven; exact trigger conditions not published — verify current chart 🟧 |
| Missed-approach driver | **Noise abatement** (fly to runway departure end in VFR conditions) — **not terrain** |

---

## 2. STAR / transition selection

- **STARs (names only — verify current AIRAC):** **FEVTA ONE (RNAV)** *(reference OFP alternate arrival — filed FEVTA FEVTA1 to RWY 17L)*; SLMMR FIVE (RNAV); SUUTR FOUR (RNAV); TUDOR TWO. All four were marked **NEW** in the sourced AIRAC cycle (eff. 11 Jun 2026) — confirm currency before use.
- **Selection by arrival direction / runway:** FEVTA ONE feeds the reference EDDF–KSFO OFP alternate arrival to RWY 17L; NORCAL assigns the STAR-to-approach transition for the active runway/config.
- **Transition to approach:** Expect an RNAV-STAR-to-ILS transition with radar vectors onto the assigned runway; verify the charted transition.
- **Speed / flow constraints on the STAR:** 250 KIAS below FL100 (US standard); published STAR speed/altitude gates are pointers only — verify current chart.

---

## 3. Descent & energy plan

- **Top-of-descent trigger:** Standard ~3:1 baseline; flat terrain and low field elevation (27 ft) mean no terrain-driven early-descent constraint, unlike a high-elevation/mountain field.
- **Speed control:** STAR speed gates and 250 KIAS below FL100 — confirm current chart.
- **Altitude constraints:** Key STAR crossing constraints (e.g. FEVTA ONE ladder) are pointers — fly the charted altitudes.
- **Energy traps:** A late runway/config change between the 17R/35L (CAT II/III) and 17L/35R pairs in a developing Tule-fog scenario is the main energy/planning trap — confirm the active low-vis runway early, not on final.

---

## 4. Approach selection by runway

*Names only — verify minima on current AIRAC charts.*

| RWY | Approach (name) | LVP / CAT note | Minima pointer (verify AIRAC) |
|---|---|---|---|
| 17R | ILS or LOC, ILS (SA CAT I), **ILS (CAT II-III)** | ALSF2 — primary low-vis runway (Tule fog) 🟩 | LOC I-SMF 111.10; verify current chart |
| 17L | ILS or LOC, **ILS (SA CAT II)** | SA CAT II — operator/crew Special Authorization required 🟧 | LOC I-MDK 111.75; verify current chart |
| 35L | ILS or LOC | CAT I (MALSR) 🟩 | LOC I-HUX 111.10; verify current chart |
| 35R | RNAV (RNP) Z, RNAV (GPS) Y **only — no ILS** | OFP NOTAM referenced RNAV (GPS) Y RWY 35R, LNAV/VNAV DA 384 🟧 | verify current AIRAC |

- **LVP triggers:** Driven by **Tule fog (Nov–Mar)** dropping visibility rapidly and with little warning; **17R (CAT II/III, ALSF2)** is the LVP-capable runway. Exact trigger conditions not published — verify current chart. 🟧

---

## 5. Approach hazards (terrain / CFIT / specific threats)

- **CFIT / terrain:** 🟩 **Low.** Flat Central Valley floor (~27 ft); Sierra Nevada foothills >50 NM east, Coast Range >30 NM west — neither factors into the terminal area. This is a benign-terrain field, in clear contrast to KRNO.
- **Specific threats:** 🟥 **Tule fog** is the defining hazard — dense radiation fog forming under stagnant high pressure, typically Nov–Mar, can drop visibility to near zero with little warning; have a live diversion/CAT II-III plan. **RWY 35R has no ILS** — RNAV (GPS)/RNAV (RNP) only, verify current minima.
- **Airspace / traffic:** 🟩 Radar Class C, NORCAL Approach; straightforward controlled airspace, no adjacent-FIR complexity. Cross-ref [North America Airspace](../../../../airspace/north-america.md) (Oakland ARTCC / NORCAL TRACON FIR brief).

---

## 6. Missed approach watch-items

- **Terrain-driven MAP notes:** Not applicable — terrain is not a driver at KSMF (flat valley). This is a clear contrast to KRNO, where terrain is the primary missed-approach hazard.
- **Re-sequencing environment:** Straightforward Class C radar environment; no unusual re-sequencing complexity published.
- **Go-around traps:** The operative caution is the **noise-abatement instruction**: when conducting an IFR approach in VFR conditions, the missed approach must be flown to the runway's departure end — **do not break out early**, even though nothing terrain-related is forcing that track.

---

## 7. Landing runway / LDA & braking / vacate

- **LDA by runway (no displaced thresholds anywhere — Briefing §7):** 17L/35R **8,605 ft** full length; 17R/35L **8,598 ft** full length. All four ends carry LDA equal to the physical runway length — no displaced-threshold math required, unlike most fields in this library.
- **Braking / vacate:** No rapid-exit/high-speed-turnoff detail published — plan a standard vacate and confirm with Ground; straightforward two-parallel-runway layout.
- **Runway-excursion watch:** 🟧 Field itself is non-limiting (long runways, no displaced thresholds); the caution items are procedural — Group III taxiway wingspan restriction (TWY Y4, B1, <118 ft) must be respected on rollout/exit routing, not on the runway itself.

---

## 8. Taxi-in routing to terminal & hot spots

- **Typical taxi-in by runway → terminal:** Not detailed in reachable sources; **VAMSYS taxi-in time is 12 min** (Dispatch §1). Expect taxi to Terminal A (13 gates) or Terminal B (19 gates) per Ground.
- **Hot spots / tight taxiways:** 🟥 **TWY Y4 and TWY B1 restricted to wingspan <118 ft (Group III)** — any widebody must avoid these and use the main parallel taxiways. A portion of **TWY W (500–2,100 ft east of TWY A) is not visible from the tower** — expect closer ATC coordination there. Cross-ref Briefing §13 and [Departure](departure.md) §2.
- **Stand/gate notes:** Gate/stand assignment for a widebody diversion not confirmed — cross-ref [Dispatch](dispatch.md) §3.

---

## 9. Arrival frequency sequence

- **Sequence:** **NORCAL Approach 125.25 (primary; sector splits SW 125.4, W-NE 127.4, E-SE 257.9/259.1/317.5/353.7) → Capitol Tower 125.7/256.7 → Capitol Ground 121.7/256.7.** STAR-specific handoff: FEVTA 125.25/257.9; SLMMR 120.45/353.7; SUUTR 124.8/263.15; TUDOR 120.45/353.7. (Frequencies from Briefing §8; take the assigned frequency and confirm current chart.)
- **Approach/Departure control:** NORCAL Approach (Class C); Oakland ARTCC overlying en route. 🟧

---

## 10. Gotchas

- **Tule fog can appear with little warning, Nov–Mar** — brief a CAT II/III (17R) plan and a holding/diversion contingency in season; a clean METAR earlier in the shift does not rule this out.
- **RWY 35R has no ILS** — do not plan it as a low-vis option; RNAV (GPS)/RNAV (RNP) only.
- **17L is SA CAT II** — needs operator/crew Special Authorization; do not plan it as the low-vis primary without that (use 17R instead).
- **Missed approach in VFR conditions must go to the runway departure end** — a noise-abatement rule, not a terrain one; don't break out early even though nothing forces it.
- **This is a benign-terrain field** — don't import KRNO-style terrain caution here; the real threats are fog and taxiway wingspan restrictions.
- **STARs FEVTA/SLMMR/SUUTR/TUDOR were all marked NEW** in the sourced cycle — reconfirm currency before relying on them.

---

## Open items (🟧 — confirm against AIP / current AIRAC)

- Exact approach minima for all four runway ends — not text-extractable from reachable free sources; verify current AIRAC chart.
- LVP exact trigger conditions.
- STARs FEVTA ONE, SLMMR FIVE, SUUTR FOUR, TUDOR TWO all marked NEW — re-verify currency, inherently time-bound.
- Rapid-exit/high-speed-turnoff taxiway detail and standard taxi-in routing.
- Widebody gate/stand assignment process for an actual diversion.

> **Live data — pull at planning:** wx/METAR/TAF/TREND (esp. Tule-fog risk Nov–Mar, wildfire-smoke haze Jun–Oct), NOTAM (runway/approach/navaid/lighting, esp. 17R CAT II/III equipment), ATIS config. Not stored in this durable file.

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim charts inform content but are not listed here.*

- AirNav — KSMF — https://www.airnav.com/airport/KSMF (retrieved 2026-07-25). *STAR/IAP index, runway/LDA data, communications frequencies — also underlies the [KSMF Briefing](index.md) §7/§9/§10.*
- **FAA IAP charts (d-TPP cycle 2606), aeronav.faa.gov** — ILS RWY 17L/17R/35L component idents/frequencies (retrieved 2026-07-25) — see Briefing §9 for full citation.
- SkyVector — SMF Sacramento International Airport — https://skyvector.com/airport/SMF/Sacramento-International-Airport (retrieved 2026-07-25).

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-26 | Built from FAA sources + Briefing; folded to 4-page pack. Tule-fog/CAT II-III emphasis carried forward as the defining arrival hazard, explicitly contrasted with KRNO's terrain-driven profile; noise-abatement missed-approach rule cross-referenced. Exact minima and LVP triggers remain open 🟧 items. |
