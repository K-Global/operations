# KSAN — San Diego Intl · Arrival Page

**KSAN / SAN** · San Diego, California, United States · North America
**Version** v0.1 · **Updated** 2026-07-26 · **Status** Draft

> **Read-me:** Tactical arrival aid for the sim, not a chart. Companion to the [KSAN Briefing](index.md), [Dispatch](dispatch.md) and [Departure](departure.md) pages. STARs/approaches are listed **by name only** — fly the charted current-AIRAC version; minima shown are pointers, always verify on the current chart. Static data only; live wx/NOTAM are pulled at planning. Open 🟧 items are in §Open items. Flag legend 🟥 restriction/hazard · 🟧 caution/unverified · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| Usual landing runway(s) | **RWY 27** in the prevailing onshore westerly flow (the field's dominant configuration, landing toward downtown); **RWY 09** in the reciprocal case (landing over the bay/Point Loma) |
| Usual approach | RWY 27: **RNAV (RNP) Z / RNAV (GPS) Y / LOC** (no ILS glideslope) · RWY 09: **ILS Y/LOC Y, ILS Z/LOC Z, RNAV (GPS)** |
| Config logic | Wind-driven, single-runway field — no independent flow/noise-only override |
| Transition level | By QNH; transition altitude 18,000 ft MSL (US standard) 🟧 |
| LVP trigger | Coastal marine-layer stratus/fog, concentrated Oct–Feb; no CAT II/III infrastructure identified — reduced-visibility arrivals rely on the RNAV/LOC/ILS procedures listed above 🟧 |
| Missed-approach driver | **Terrain/obstacle** on the RWY 27 side (close-in downtown/parking-structure environment) plus re-sequencing into the busy single-runway SoCal terminal environment |

---

## 2. STAR / transition selection

- **STARs (names only — verify current AIRAC):** **BARET FIVE** — pull the current-AIRAC transition/runway assignment at planning.
- **Selection by arrival direction / runway:** The prevailing onshore westerly wind makes **RWY 27** the field's dominant landing configuration (landing toward downtown, over the close-in obstacle environment described in §5); **RWY 09** (landing over the bay toward Point Loma) is used in the reciprocal/offshore-wind case ("the flip," per local terminology). SoCal Approach assigns the STAR-to-runway transition for the active configuration.
- **Transition to approach:** Expect a STAR-to-final transition with SoCal Approach vectors; RWY 27 transitions onto the non-precision RNAV/LOC final, RWY 09 onto the ILS final where assigned.
- **Speed / flow constraints on the STAR:** Published speed/altitude gates are pointers only — verify chart; expect additional SoCal TRACON flow/speed control given the shared Southern California terminal-area traffic density.

---

## 3. Descent & energy plan

- **Top-of-descent trigger:** Standard descent-profile planning; plan TOD to meet the first STAR altitude gate. A single-runway field with no parallel/crossing runway to absorb a flow event means late speed/altitude adjustments from ATC are a realistic possibility — brief an early-descent contingency.
- **Speed control:** STAR speed gates and standard 250 KIAS below 10,000 ft MSL (14 CFR 91.117) — confirm current chart.
- **Altitude constraints:** Key STAR crossing constraints are pointers — fly the charted altitudes; give particular attention to any constraint feeding the RWY 27 close-in obstacle environment on short final (§5).
- **Energy traps:** A **late runway-configuration change ("the flip" between RWY 09 and RWY 27)** ahead of a wind shift is the single-runway field's classic energy trap — a late reassignment from the expected configuration compresses the arrival profile with no second runway to absorb the disruption. Marine-layer holding/re-sequencing (§14) is the other standing energy trap.

---

## 4. Approach selection by runway

*Names only — verify minima on current AIRAC charts.*

| RWY | Approach (name) | LVP / CAT note | Minima pointer (verify AIRAC) |
|---|---|---|---|
| 09 | ILS Y or LOC Y RWY 09 | ILS available 🟩 | verify current chart |
| 09 | ILS Z or LOC Z RWY 09 | Alternate ILS/LOC variant | verify current chart |
| 09 | RNAV (GPS) RWY 09 | | verify current chart |
| 27 | RNAV (RNP) Z RWY 27 | **No glideslope** — RNP AR-type procedure, confirm operator/aircraft authorisation 🟧 | verify current chart |
| 27 | RNAV (GPS) Y RWY 27 | **No glideslope** | verify current chart |
| 27 | LOC RWY 27 | **No glideslope** — non-precision only | verify current chart |

- **LVP triggers:** Coastal marine-layer stratus/fog (Oct–Feb concentration) is the routine KSAN trigger; the field is reported to carry relatively high landing minima versus a typical ILS CAT I runway because of the short-runway/close-in-obstacle environment — no CAT II/III infrastructure identified. RWY 27's total lack of a glideslope makes it the more minima-sensitive end in marginal weather. 🟧

---

## 5. Approach hazards (terrain / CFIT / specific threats)

- **CFIT / terrain:** 🟥 The **RWY 27 approach is the field's defining hazard** — final approach passes low over Balboa Park and Hillcrest before crossing directly above a multi-story parking structure and downtown San Diego high-rises in roughly the last quarter-mile, which is why the runway carries a large **1,810 ft displaced threshold** and a steeper-than-standard **3.50° PAPI** (versus 3.30° on the RWY 09 side). FAA obstruction data records a 31 ft tree at 674 ft from the runway (15:1 slope to clear), a published 44:1 approach-surface ratio to the displaced threshold, a 61 ft sign at 250 ft from the runway, and a +40 ft light pole 110 ft from the runway end — fly the charted vertical/lateral profile exactly; do not accept a steeper-than-charted visual correction late on final. On the RWY 09 side, Point Loma high ground lies to the west/southwest of the offshore approach sector — not charted as a penetrating obstacle but part of the wider terrain context locally cited for this basin. Cross-ref [Briefing §3.1](index.md).
- **Specific threats:** 🟧 **No ILS glideslope exists to RWY 27** — every arrival to that end is a non-precision RNAV/LOC approach regardless of weather; this is a standing threat multiplier when combined with marine-layer low ceiling/visibility. Wake turbulence is a standard single-runway-sequencing consideration but not otherwise elevated at this field.
- **Airspace / traffic:** 🟧 Busy shared Southern California TRACON airspace (SoCal Approach) alongside KLAX, KONT, KSNA and general-aviation traffic; expect vectoring and sequencing delay during peak banks or marine-layer single-approach-stream events, with no parallel runway to add capacity. Cross-ref [Los Angeles (KZLA) FIR brief](../../../../airspace/fir/north-america/los-angeles-kzla.md).

---

## 6. Missed approach watch-items

- **Terrain-driven MAP notes:** The RWY 27 missed approach must clear the same close-in downtown/parking-structure/high-rise environment described in §5 on the way to a published missed-approach altitude — fly the charted MAP exactly and do not improvise a turn early. Verify climb-gradient/turn constraints on the current chart.
- **Re-sequencing environment:** A go-around at a single-runway field with no parallel/crossing runway drops the aircraft back into the same busy SoCal TRACON sequencing environment with no separate runway to re-route to — expect vectoring and possible holding before re-sequencing, especially during a marine-layer event or a busy bank.
- **Go-around traps:** The lack of an ILS glideslope on RWY 27 means a go-around decision on that end is being made off a non-precision profile — brief the go-around trigger and technique in advance given the close-in obstacle environment on this end specifically.

---

## 7. Landing runway / LDA & braking / vacate

- **LDA by runway:** RWY 09 **7,280 ft**; RWY 27 **7,591 ft** — both materially shorter than the 9,401 ft physical runway length because of the large displaced thresholds (1,000 ft / 1,810 ft respectively). Non-limiting for typical widebody landing weights but leaves reduced margin versus the raw runway length — confirm performance for each type/weight. Cross-ref [Briefing §7](index.md).
- **Braking / vacate:** Rapid-exit taxiway detail not confirmed in reachable sources — confirm with Ground/Ramp on the day; note the wingspan-limited RWY 09/TWY D/TWY Bravo exit combination (§8) when planning the vacate for a widebody. 🟧
- **Runway-excursion watch:** 🟧 Reduced LDA versus physical runway length on both ends is the standing runway-excursion consideration at this field; wet-runway/contamination is rare in this dry coastal climate but not impossible during an occasional Pacific storm system.

---

## 8. Taxi-in routing to terminal & hot spots

- **Typical taxi-in by runway → terminal:** After landing on the assigned runway, taxi in to **Terminal 2** per Ground/Ramp assignment; VAMSYS mirror gives a planning taxi-in time of **12 min** `[VAMSYS mirror 2026-07-26]`.
- **Hot spots / tight taxiways:** 🟥 Aircraft exiting **RWY 09 at TWY D and turning right onto TWY Bravo are limited to a maximum wingspan of 136 ft** (B757-300W-equivalent) — every K Global widebody type is excluded from this specific exit/turn combination; plan an alternative taxi-in routing for any RWY 09 landing. Aircraft crossing **RWY 09/27 on TWY C6** must hold short of TWY C6 facing west on TWY C. Taxiing aircraft are prohibited from passing to the south of aircraft located on TWY B into the alley between Gates 7 and 14 — relevant to Terminal 2 stand access. Cross-ref [Briefing §13](index.md).
- **Stand/gate notes:** See [Dispatch §3](dispatch.md) — Terminal 2 international/widebody-capable concourse pairing; published remarks flag restricted gate space as a recognised field limitation.

---

## 9. Arrival frequency sequence

- **Sequence:** **SoCal Approach 119.6 (West) / 124.35 (East) → Lindbergh Tower 118.3/338.225 → Lindbergh Ground 123.9 → Ramp Control 129.775/131.975 (0600–2400, Terminal 2) or Ground 123.9 (0000–0600).** Take the assigned frequency and confirm current chart. (Frequencies from Briefing §8.)
- **Approach/Departure control:** **Southern California TRACON ("SoCal Approach")** is the facility for San Diego's terminal approach; **Los Angeles ARTCC (KZLA)** hands off en route inbound — see [Los Angeles (KZLA) FIR brief](../../../../airspace/fir/north-america/los-angeles-kzla.md). 🟧 Exact sector/frequency assignment is AIRAC-dependent.

---

## 10. Gotchas

- **RWY 27's approach has no ILS glideslope** — every arrival on that end is non-precision (RNAV/LOC) regardless of weather; brief this as the default expectation, not an exception.
- **The RWY 27 final passes very close over a parking structure and downtown high-rises** — respect the charted vertical profile and the steeper 3.50° PAPI exactly; do not "duck under" on a visual segment.
- **Large displaced thresholds on both ends** (1,000 ft RWY 09 / 1,810 ft RWY 27) reduce the usable LDA well below the 9,401 ft physical runway length — confirm actual LDA before assuming margin.
- **Single runway — no parallel/crossing option.** Any disabled aircraft or closure on 09/27 stops all arrivals; hold a firm KLAX/KLAS diversion trigger.
- **"The flip" — a late RWY 09/27 configuration change ahead of a wind shift** is the field's classic late-notice trap; watch the ATIS wind trend closely on the descent.
- **RWY 09 exit via TWY D onto TWY Bravo is wingspan-limited to 136 ft** — plan the alternative taxi-in routing in advance for every widebody landing on RWY 09.
- **Practice approaches and touch-and-go operations are prohibited** — every approach must be flown as a full-stop landing.
- **Marine-layer fog (Oct–Feb) can drop the field below comfortable minima with limited warning** — treat morning arrivals in this window as a standing diversion-risk trigger.

---

## Open items (🟧 — confirm against AIP / current AIRAC)

- Current-AIRAC BARET FIVE STAR transition/runway assignment and exact approach minima per runway.
- RNP AR authorisation status for RNAV (RNP) Z RWY 27.
- Exact published landing minima (ceiling/visibility) per approach — general "relatively high minima" characterisation is tier-4-sourced, not transcribed from a primary minima table.
- Rapid-exit taxiway/vacate detail.
- Current Terminal 2 taxi-in routing and gate assignment for our operation.

> **Live data — pull at planning:** wx/METAR/TAF/TREND, NOTAM (runway/approach/navaid/lighting), ATIS config/wind trend ("the flip" risk), marine-layer status and any ground-delay program. Not stored in this durable file.

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim charts inform content but are not listed here.*

- **AirNav — KSAN** (FAA Chart Supplement / 5010 mirror — STAR/IAP index, runway/declared-distance data, PAPI angles, obstruction data, communications, taxiway remarks) — https://www.airnav.com/airport/KSAN (retrieved 2026-07-26).
- OurAirports — KSAN — https://ourairports.com/airports/KSAN/runways.html (retrieved 2026-07-26). *Cross-check.*
- Airliners.net forum — "San Diego's Lindbergh Field, An Extreme Airport?" — https://www.airliners.net/forum/viewtopic.php?t=553735 (retrieved 2026-07-26). *RWY 27 approach/parking-structure corroboration — tier-4.*
- Yahoo News — marine-layer fog impact on SAN operations — https://www.yahoo.com/news/does-fog-affect-flying-san-005155678.html (retrieved 2026-07-26). *Tier-4.*

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-26 | Built from FAA sources; K Global fields from live VAMSYS; 4-page pack. |
