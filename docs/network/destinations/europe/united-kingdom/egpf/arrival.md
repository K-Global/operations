# EGPF — Glasgow · Arrival Page

**EGPF / GLA** · Glasgow (Paisley), Renfrewshire, Scotland, United Kingdom · Europe
**Version** v0.1 · **Updated** 2026-07-26 · **Status** Draft

> **Read-me:** Tactical arrival aid for the sim, not a chart. Companion to the [EGPF Briefing](index.md), [Dispatch](dispatch.md) and [Departure](departure.md) pages. STARs/approaches are listed **by name only or flagged not-yet-confirmed** — fly the charted current-AIRAC version; minima shown are pointers, always verify on the current chart. Static data only; live wx/NOTAM are pulled at planning. Open 🟧 items are in §Open items. Flag legend 🟥 restriction/hazard · 🟧 caution/unverified · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| Usual landing runway(s) | **05 or 23** — single runway, wind-driven direction of use |
| Usual approach | ILS RWY05 (IUU) or ILS RWY23 (IOO), both CAT III-designated |
| Config logic | No published preferential-runway rule found in the reachable extract; direction of use is wind-driven 🟧 |
| Transition level | By QNH; transition altitude **6,000 ft** — TL itself not confirmed this pass 🟧 |
| LVP trigger | Not confirmed — CAT III LLZ/GP designation on both ends implies LVO capability; exact RVR trigger not stated in reachable extract 🟧 |
| Missed-approach driver | No quantified close-in terrain identified; single-runway/no-crosswind-alternative geometry and the seasonal wildlife hazard are the more immediate operational factors |

---

## 2. STAR / transition selection

- **STARs (names only — verify current AIRAC):** Not confirmed in reachable research pass — pull the current-AIRAC STAR list at planning. 🟧
- **Selection by arrival direction / runway:** Single runway 05/23 — the active runway direction (wind-driven) determines the approach flown; no published preferential-runway rule identified.
- **Transition to approach:** Expect a radar vector onto the ILS final for the active runway end under Glasgow Approach/Radar; a VATSIM UK reference for this field describes a **ROBBO** reporting point (GOW VOR/DME radial 281°/16 NM) at the TMA boundary for traffic joining controlled airspace from the west — network-sim corroboration only, not independently AIP-confirmed this pass. 🟧
- **Speed / flow constraints on the STAR:** 250 KIAS below FL100 (UK/ICAO norm); published STAR speed/altitude gates not confirmed this pass — verify current chart.

---

## 3. Descent & energy plan

- **Top-of-descent trigger:** Standard descent-profile planning to the transition altitude of 6,000 ft and onward vectoring to the ILS; no field-specific TOD rule confirmed this pass.
- **Speed control:** 250 KIAS below FL100 (UK/ICAO norm) — confirm current chart for any local override.
- **Altitude constraints:** Key STAR crossing constraints not confirmed this pass — fly the charted altitudes.
- **Energy traps:** A late runway change (05↔23) ahead of a wind shift is the main energy trap at this single-runway field — watch the ATIS wind trend. The RWY23 displaced threshold (LDA 2,356 m) also warrants an early energy-management check on a limiting-weight arrival.

---

## 4. Approach selection by runway

*Names only — verify minima on current AIRAC charts.*

| RWY | Approach (name) | LVP / CAT note | Minima pointer (verify AIRAC) |
|---|---|---|---|
| 05 | ILS (IUU) | CAT III-designated 🟧 (sub-category not confirmed) | verify current chart |
| 23 | ILS (IOO) | CAT III-designated 🟧 (sub-category not confirmed); **displaced threshold — LDA 2,356 m**, well short of TODA (3,090 m) | verify current chart |

- **LVP triggers:** CAT III LLZ/GP designation on both runway ends implies a genuine low-visibility capability at this field; exact RVR/trigger conditions not confirmed this pass. 🟧

---

## 5. Approach hazards (terrain / CFIT / specific threats)

- **CFIT / terrain:** 🟧 No quantified close-in terrain identified in the reachable AIP extract for this build. General regional geography (Kilpatrick Hills N/NE, Renfrewshire uplands S — see [Briefing §3.1](index.md)) is noted but not sourced from this build's AIP data — verify the MSA/obstacle ring on the current chart before relying on this brief for terrain clearance.
- **Specific threats:** 🟥 **Large Greylag/Canada goose and Whooper swan flocks, September–April**, regularly exceeding 100 birds and observed flying up to 500 ft — squarely within the approach flight-path altitude band. This is a quantified, AIP-documented hazard, not a generic caution; active bird control operates with ATC liaison but strike risk remains real in season.
- **Airspace / traffic:** Class D CTR/ATZ, radar service under Glasgow Approach/Radar; moderate traffic density expected for a regional-category field — no unusual airspace-density factor identified.

---

## 6. Missed approach watch-items

- **Terrain-driven MAP notes:** No quantified close-in terrain driver identified (§5) — fly the published missed approach and verify climb-gradient/turn constraints on the current chart.
- **Re-sequencing environment:** Single-runway field — a go-around returns you to a straightforward single-runway sequencing environment rather than a complex parallel/crossing-runway re-entry.
- **Go-around traps:** The seasonal wildlife hazard (§5) is the more distinctive go-around/missed-approach-altitude-band consideration at this field than terrain or traffic complexity.

---

## 7. Landing runway / LDA & braking / vacate

- **LDA by runway:** RWY05 **2,661 m**; RWY23 **2,356 m** (displaced threshold — the ~734 m gap versus TODA is explained by the AIP-published displaced-threshold arrows on RWY23; never use the physical/TODA figure as a landing-distance proxy for this end). See [Briefing §7](index.md).
- **Braking / vacate:** Rapid-exit taxiway detail not itemised in the reachable extract; Code A–E aircraft may exit RWY05 via A1, B1 or E1, and RWY23 via A1, B1, D1, E1, F1 or G1 (VATSIM UK reference — network-sim corroboration only, not independently AIP-confirmed). 🟧 A Code F (A380) arrival vacates at **G** (RWY23 in use, CAT I) or via **A/B** (RWY05 in use); under CAT II/III, Code F vacates at **A or G** regardless of runway direction — see [Briefing §13](index.md).
- **Runway-excursion watch:** 🟧 The RWY23 LDA gap (§above) and the single-runway/no-crosswind-alternative geometry are the standing runway-excursion watch-items at this field; no specific contamination/braking-action statistic confirmed this pass, though the RWY23 threshold-to-Link-F section carries a published fast-drying capability following 2017 resurfacing.

---

## 8. Taxi-in routing to terminal & hot spots

- **Typical taxi-in by runway → terminal:** After landing, taxi in toward the West Pier (Stand 30/Code F or Code C–E stands), Central Pier or East Pier per Ground/Tower assignment; VAMSYS mirror gives a planning taxi-in time of **12 min** `[VAMSYS mirror 2026-07-26]`. For a **Code F arrival**: vacate at **G** with RWY23 in use (CAT I) or via **A/B** with RWY05 in use; under CAT II/III, vacate at **A or G** regardless of runway direction.
- **Hot spots / tight taxiways:** 🟥 Taxiway link **C1** is restricted to aircraft ≤30,000 kg MTWA — never taxi a widebody via C1. The **47.5 m reduced centreline-to-object clearance** (Alpha1–ATC Tower, ATC Tower–Golf2, Golf2–Golf1) applies to accommodate Code F wingspan, with active red-light vehicle-holding control during Code F movements — see [Briefing §13](index.md). **Soft grass verges** alongside paved surfaces warrant caution off the marked centreline.
- **Stand/gate notes:** See [Dispatch §3](dispatch.md) — West Pier (Stand 30/Code F, plus Code C–E stands) is the field's widebody cluster; Central and East Piers are narrowbody/regional.

---

## 9. Arrival frequency sequence

- **Sequence:** **Glasgow Approach/Radar 119.100 (H24, primary; 125.250/128.755 as directed) → Glasgow Tower 118.805 (H24) → Glasgow Ground 121.705 (seasonal hours — may be closed tactically, closures on ATIS).** Take the assigned frequency and confirm current chart. (Frequencies from [Briefing §8](index.md).)
- **Approach/Departure control:** **Glasgow Approach/Glasgow Radar** on the field; **Scottish FIR (EGPX)** en route hands off inbound traffic — **no dedicated Scottish FIR brief exists yet in this network**, see [Briefing §18](index.md). A VATSIM UK reference for this field labels the en-route sector "Scottish Control" — network-sim corroboration only. 🟧

---

## 10. Gotchas

- **RWY23's displaced threshold cuts LDA to 2,356 m** — do not plan landing distance off the longer TODA/physical-length figure for this runway end.
- **Single runway, no crosswind alternative** — a late wind shift forcing a runway-direction change is the field's principal energy/config trap.
- **Large goose/swan flocks (100+ birds, up to 500 ft) Sept–Apr** — brief bird-strike awareness specifically on approach/initial climb in this window.
- **Code F (A380) vacate-runway assignment changes with both runway-in-use and CAT status** — G (RWY23/CAT I), A/B (RWY05/CAT I), or A/G (CAT II/III) — do not assume a fixed vacate point.
- **Taxiway link C1 is capped at 30,000 kg MTWA** — never taxi a widebody through C1 on the way in.
- **Ground frequency (121.705) keeps seasonal hours and may close tactically** — do not assume it is live outside its published hours.
- **GOW VOR/DME is shared with Edinburgh (EGPH)** — do not assume it is uniquely tuned/serving this field alone when cross-checking navigation.

---

## Open items (🟧 — confirm against AIP / current AIRAC)

- Current-AIRAC STAR names and exact approach minima per runway.
- ILS sub-category (IIIA/IIIB/IIIC) confirmation.
- Exact LVP/RVR trigger values.
- Rapid-exit taxiway/vacate detail beyond the VATSIM UK network-sim cross-check.
- MSA/terrain quantification for the missed-approach and descent profile.
- ROBBO reporting point / western-joining procedure — network-sim sourced only, not AIP-confirmed this pass.

> **Live data — pull at planning:** wx/METAR/TAF/TREND, NOTAM (runway/approach/navaid/lighting, esp. Stand 30/Code F safeguarding status), ATIS config/wind trend, current bird-hazard NOTAMs in season. Not stored in this durable file.

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim charts inform content but are not listed here.*

- **UK NATS eAIP — AD 2 EGPF**, AIRAC effective 2022-06-16 — https://www.aurora.nats.co.uk/htmlAIP/Publications/2022-06-16-AIRAC/html/eAIP/EG-AD-2.EGPF-en-GB.html (retrieved 2026-07-26). *Runway/declared distances, navaids, AD 2.20 local aerodrome regulations (Code F vacate logic), communications.*
- VATSIM UK — Glasgow (EGPF) airport reference — https://www.vatsim.uk/airports/EGPF (retrieved 2026-07-26). *Network-sim, not regulatory — ROBBO reporting point, exit-taxiway list corroboration.*

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-26 | Built from UK AIP (NATS AIS); K Global fields from live VAMSYS; 4-page pack. |
