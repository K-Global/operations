# ELLX — Luxembourg-Findel · Arrival Page

**ELLX / LUX** · Findel (Niederanven), near Luxembourg City, Luxembourg · Europe
**Version** v0.1 · **Updated** 2026-07-26 · **Status** Draft

> **Read-me:** Tactical arrival aid for the sim, not a chart. Companion to the [ELLX Briefing](index.md), [Dispatch](dispatch.md) and [Departure](departure.md) pages. STARs/approaches are listed **by name only** — fly the charted current-AIRAC version; minima shown are pointers, always verify on the current chart. Static data only; live wx/NOTAM are pulled at planning. Open 🟧 items are in §Open items. Flag legend 🟥 restriction/hazard · 🟧 caution/unverified · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| Usual landing runway(s) | **06 or 24** — single runway, wind-driven; no explicit AIP preferential-runway rule found 🟧 |
| Usual approach | ILS CAT I (RWY06, ident ILE) or ILS CAT II/III (RWY24, ident ILW), per assigned runway |
| Config logic | Wind-driven (no crosswind alternative); RWY24 operationally favoured in low-visibility conditions given its CAT II/III capability vs RWY06's CAT I-only status (inference, not an AIP-stated rule) 🟧 |
| Transition level | By QNH; transition altitude 5,000 ft AMSL — TL not published as a fixed value 🟧 |
| LVP trigger | Tied to CAT II/III operations on RWY24; exact RVR/trigger figures not published / verify 🟧 |
| Missed-approach driver | Airspace/traffic density and close-in obstacles, not major terrain |

---

## 2. STAR / transition selection

- **STARs (names only — verify current AIRAC):** REMBA5K, LNO7K, BETEX4K, EXCOS2K, AKELU5K, MMD6K.
- **Selection by arrival direction / runway:** Single-runway field — the active runway (06 or 24) is wind-determined; Luxembourg Radar/Approach assigns the STAR-to-runway transition for the active configuration.
- **Transition to approach:** Expect a STAR-to-ILS/VOR/RNP-APCH transition with radar vectors onto final; verify the charted transition.
- **Speed / flow constraints on the STAR:** Published radar-vectoring speed restrictions — **250 KIAS max** crossing 25 DME LUX or below FL100; **180 KIAS max** at FAF/FAP.

---

## 3. Descent & energy plan

- **Top-of-descent trigger:** Standard descent-profile planning; plan TOD to meet the first STAR/radar-vectoring speed gate (250 KIAS at 25 DME LUX/FL100, 180 KIAS at FAF/FAP).
- **Speed control:** As above — confirm current chart for any additional STAR-specific speed/altitude gates.
- **Altitude constraints:** Key STAR crossing constraints are pointers — fly the charted altitudes.
- **Energy traps:** The AIP-flagged **reduced radar coverage north of the field below 2,500 ft** is a relevant awareness item if vectored that direction. The field's high annual movement count on a single runway (~100,000/yr per public reporting) means sequencing/holding pressure is a standing possibility even in good weather — brief an early-descent contingency.

---

## 4. Approach selection by runway

*Names only — verify minima on current AIRAC charts.*

| RWY | Approach (name) | LVP / CAT note | Minima pointer (verify AIRAC) |
|---|---|---|---|
| 06 | ILS (ILE); VOR 06; RNP APCH (LNAV, LNAV/VNAV) 06 | **CAT I only** 🟧 — never rely on this end for CAT II/III minima | Verify current chart |
| 24 | ILS (ILW); VOR 24; RNP APCH (LNAV, LNAV/VNAV) 24 | **CAT II/III** 🟩 — the field's full low-vis capability resides here | Verify current chart |

- **LVP triggers:** Tied to CAT II/III operations on RWY24; exact RVR/trigger figures not published / verify. 🟧 **Circling approaches are prohibited** (published) — a missed/rejected approach must fly the published miss, not a visual circle.

---

## 5. Approach hazards (terrain / CFIT / specific threats)

- **CFIT / terrain:** 🟧 The field sits at 1,234 ft AMSL on the Luxembourg plateau — elevated for the region but not mountainous. AIP-published **unlit, unmarked vegetation obstacles** stand close to both runway ends (roughly 30–60 ft above local terrain), affecting the VOR/LNAV/LNAV-VNAV approach obstacle assessment to both ends. No MSA sector table is published in the reachable source — cross-ref [Briefing §3.1](index.md).
- **Specific threats:** 🟧 RWY06's longitudinal slope profile is AIP-flagged as capable of producing an **optical illusion on approach**, with the **opposite threshold not visible** from either end. The field's traffic mix combines substantial widebody freighter movements with scheduled passenger and GA/training traffic on a single runway — brief for wake-turbulence awareness behind heavier freighter types.
- **Airspace / traffic:** 🟧 Class D CTR under radar control; the AIP notes **reduced radar coverage north of the field below 2,500 ft**. Brussels (EBBU) is understood to provide the surrounding area control environment — no dedicated FIR brief exists yet in this system; cross-ref [Airspace/General/Europe.md](../../../../airspace/europe.md).

---

## 6. Missed approach watch-items

- **Terrain-driven MAP notes:** Not a major-terrain field, but the close-in unlit vegetation obstacles near both thresholds (§5) are a relevant awareness item on the missed approach climb — fly the published MAP and verify climb-gradient/turn on the current chart.
- **Re-sequencing environment:** A go-around returns the aircraft to a single-runway, high-annual-movement radar environment with a heavy freighter/passenger/GA mix — expect vectoring and possible holding before re-sequencing, especially in marginal weather.
- **Go-around traps:** **Circling is prohibited** — do not attempt a visual circle after a missed approach; fly the published miss. The AIP-flagged reduced radar coverage north of the field below 2,500 ft remains relevant if the miss vectors that direction.

---

## 7. Landing runway / LDA & braking / vacate

- **LDA by runway:** 06 and 24 both **4,002 m** — no displaced thresholds published. RESA is asymmetric and below the ICAO-recommended 240 m at both ends (**130 × 150 m at RWY06**, **97 × 150 m at RWY24**) 🟧 — the 4,002 m LDA itself is ample for any K Global type, but the shorter RESA is a runway-excursion-margin consideration.
- **Braking / vacate:** Rapid-exit taxiway detail not confirmed in reachable sources — confirm with Tower on the day. 🟧
- **Runway-excursion watch:** 🟧 No crosswind-runway alternative (single runway); asymmetric, sub-standard RESA at both ends; winter-contamination braking-action consideration applies in the de-icing season (Briefing §14).

---

## 8. Taxi-in routing to terminal & hot spots

- **Typical taxi-in by runway → terminal:** After landing, taxi in via the assigned taxiway routing (A1/A2/B-series/C/D/E/F/G/H) to the passenger terminal, the dedicated cargo apron (**P7**), or the Business Aviation apron (**P5**) per Tower/Apron assignment; VAMSYS mirror gives a planning taxi-in time of **10 min** `[VAMSYS mirror 2026-07-26]`.
- **Hot spots / tight taxiways:** 🟥 The **TWY B1 "green lane"** vehicle corridor requires Tower authorisation to cross — taxi with vigilance given the field's heavy freight/handling-vehicle traffic. Intersection points restricted for WTC 'H' aircraft (§Briefing §13) are primarily a departure consideration but remain relevant to overall ground-traffic awareness on taxi-in.
- **Stand/gate notes:** See [Dispatch §3](dispatch.md) — cargo apron P7 and Business Aviation apron P5 are the confirmed specialised aprons; passenger-terminal gate assignment for our operation not yet confirmed.

---

## 9. Arrival frequency sequence

- **Sequence:** **Luxembourg Radar/Approach 120.885 (primary) / 120.165 or 119.950 (spare) → Luxembourg Arrival 118.905 (HX, control on final approach with radar) → Luxembourg Tower 118.105 (H24).** No separate Ground frequency was found in reachable sources — Tower is assumed to handle ground movement (see Briefing §8). Take the assigned frequency and confirm current chart.
- **Approach/Departure control:** **Luxembourg Radar** provides the field's terminal approach service; Brussels (EBBU) is understood to provide the surrounding area control environment — see [Airspace/General/Europe.md](../../../../airspace/europe.md) 🟧. Exact sector/frequency assignment is AIRAC-dependent.

---

## 10. Gotchas

- **RWY06 is CAT I only** — never expect CAT II/III minima on this end; the field's full low-visibility capability resides on **RWY24**.
- **RWY06's slope profile can produce an optical illusion on approach**, and the opposite threshold is not visible from either end — brief this explicitly before a first-time approach into either runway.
- **Single runway, no crosswind alternative** — a crosswind beyond type limits is a diversion driver, not a runway-change option.
- **Circling is prohibited** — a missed/rejected approach must fly the published miss, not a visual circle.
- **Unlit, unmarked vegetation obstacles stand close to both thresholds** — a relevant close-in awareness item, particularly at night or in marginal visibility.
- **RESA at both ends is below the ICAO-recommended 240 m and asymmetric** (130 m at RWY06, 97 m at RWY24) — factor into runway-excursion risk awareness, especially in contaminated-runway conditions.
- **Reduced radar coverage north of the field below 2,500 ft** — be aware if vectored or self-navigating in that sector.
- **The curfew (2200–0500 local) applies to arrivals too** — a delayed arrival timed into the window must qualify under a named exemption; the field is not to be treated as a usable alternate during that window (see Dispatch §4/§8).

---

## Open items (🟧 — confirm against AIP / current AIRAC)

- Exact LVP/CAT II/III trigger RVR values for RWY24.
- Transition level (only transition altitude confirmed).
- Rapid-exit taxiway/vacate detail.
- Current taxi-in routing and gate/pier assignment for our operation.
- MSA sector/altitude table (only the general PANS-OPS obstacle-clearance rule was found in text).
- Dedicated FIR brief for Brussels (EBBU) area control — does not yet exist in this system; the linked Europe.md general airspace brief and the Langen (EDGG) FIR brief (formatting reference only, different FIR) are the only currently available cross-references.

> **Live data — pull at planning:** wx/METAR/TAF/TREND, NOTAM (runway/approach/navaid/lighting, esp. ILS CAT II/III equipment status on RWY24), ATIS config/wind trend, current curfew-exemption NOTAMs. Not stored in this durable file.

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim charts inform content but are not listed here.*

- **Luxembourg AIP, AD 2 ELLX** (mirrored via the Belgian AIS eAIP, skeyes) — https://ops.skeyes.be/html/belgocontrol_static/eaip/eAIP_Main/html/eAIP/EB-AD-2.ELLX-en-GB.html (retrieved 2026-07-26). *STAR/approach index, runway/declared-distance data, communications, obstacle table.*
- OurAirports — https://ourairports.com/airports/ELLX/runways.html (retrieved 2026-07-26). *Runway-dimension cross-check.*
- SKYbrary — "Luxembourg (ELLX)" — https://skybrary.aero/airports/ellx (retrieved 2026-07-26). *Runway-dimension cross-check.*

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-26 | Built from national AIP; K Global fields from live VAMSYS; 4-page pack. |
