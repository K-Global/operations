# EGGP — Liverpool · Arrival Page

**EGGP / LPL** · Liverpool (Speke), Merseyside, England, United Kingdom · Europe
**Version** v0.1 · **Updated** 2026-07-26 · **Status** Draft

> **Read-me:** Tactical arrival aid for the sim, not a chart. Companion to the [EGGP Briefing](index.md), [Dispatch](dispatch.md) and [Departure](departure.md) pages. STARs/approaches are listed **by name only or flagged not-yet-confirmed** — fly the charted current-AIRAC version; minima shown are pointers, always verify on the current chart. Static data only; live wx/NOTAM are pulled at planning. Open 🟧 items are in §Open items. Flag legend 🟥 restriction/hazard · 🟧 caution/unverified · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| Usual landing runway(s) | **09 or 27** — wind-driven, single runway, no crosswind alternative |
| Usual approach | ILS RWY 09 (ILVR) or ILS CAT III RWY 27 (ILQ), per config |
| Config logic | Wind-driven; **RWY 27 arrivals additionally shaped by Manchester Airport's runway-in-use** — see §5 |
| Transition level | Not independently confirmed this pass; TA 5,000 ft 🟧 |
| LVP trigger | RWY 27 CAT III subject to serviceability/CAA-accepted operator minima; RWY 09 category not confirmed to the same standard 🟧 |
| Missed-approach driver | **Airspace integration with Manchester traffic (RWY 27)** rather than terrain |

---

## 2. STAR / transition selection

- **STARs (names only):** Not individually named in reachable sources — pull the current-AIRAC STAR list at planning. 🟧 Named holding/reporting fixes: **TIPOD, KEGUN**, NDB **LPL**, VOR **WAL** (Wallasey).
- **Selection by arrival direction / runway:** **RWY 27 arrivals are shaped by Manchester's runway-in-use** — with Manchester RWY 05L/05R active, a left-hand circuit to RWY 27 is not available except in an emergency and all aircraft are positioned for a right-hand circuit, required to pass north abeam Liverpool (WAL 10 DME) at or below 3,000 ft descending to 2,500 ft or below by WAL 18 DME; KEGUN arrivals from the south are initially positioned west of the field and cannot track within 5 NM until at or below 3,000 ft. With Manchester RWY 23L/23R active, a left-hand circuit to RWY 27 is available (pass south abeam Liverpool at or below 3,000 ft, descending to 2,000 ft or below north abeam the WHI NDB); for a right-hand circuit, pass north abeam Liverpool (WAL 10 DME) at or below 4,000 ft descending to 2,500 ft or below by WAL 18 DME. More restrictive profiles exist on an infrequent basis and are advised individually by ATC.
- **Transition to approach:** Not independently confirmed this pass — expect vectoring under Liverpool Approach/Radar given the Manchester-coordination constraints above. 🟧
- **Speed / flow constraints on the STAR:** Standard 250 KIAS below FL100 — verify chart for local overrides. Recommended to join final approach at not less than 3 NM (arrivals other than light VFR aircraft must maintain ≥2,000 ft AAL until cleared to descend).

---

## 3. Descent & energy plan

- **Top-of-descent trigger:** Standard rule-of-thumb pending current-chart constraint confirmation — plan extra track/altitude margin for RWY 27 given the Manchester-proximity constraint (§2). 🟧
- **Speed control:** 250 KIAS below FL100; inbound aircraft (other than light VFR) maintain ≥2,000 ft AAL until cleared to descend.
- **Altitude constraints:** RWY 27 arrivals: specific altitude/DME gates apply depending on Manchester's runway in use (§2) — verify the current-day restriction with ATC, do not assume a standard profile.
- **Energy traps:** **Continuous Descent Approaches are available only on RWY 09** — "Runway 27 operations may require prolonged flight at lower altitude for airspace integration," a direct consequence of the Manchester-proximity constraint; plan energy management accordingly on a RWY 27 arrival, especially on a long-body type.

---

## 4. Approach selection by runway

*Names only — verify minima on current AIRAC charts.*

| RWY | Approach (name) | LVP / CAT note | Minima pointer (verify AIRAC) |
|---|---|---|---|
| 09 | ILS (ILVR); CDA available | Category not confirmed as plain-text designator this pass 🟧 | Verify current chart |
| 27 | ILS CAT III (ILQ) | CAA-accepted operator minima required; NDB LPL needle swings >±5° reported 6–8 NM DME on this approach 🟧 | Verify current chart |

---

## 5. Approach hazards (terrain / CFIT / specific threats)

- **CFIT / terrain:** Low-lying field (81 ft); obstacle tables list close-in trees/fences/masts/chimneys up to ~654 ft elevation in the approach/circling sectors — not independently cross-checked against the current MSA/obstacle chart this pass. Cross-ref [Briefing §3.1](index.md). 🟧
- **Specific threats:** 🟥 **Manchester Airport proximity (20 NM east) directly restricts RWY 27 arrival descent profiles** — the exact circuit/altitude constraint depends on Manchester's runway in use; this is the field's standout approach hazard/procedural complexity item, not terrain. **NDB LPL needle swings exceeding ±5°** are reported during the RWY 27 approach between 6 and 8 NM DME. RWY 27's undershoot RESA is only 37 m due to a public highway, containing the ILS localiser and a fence/hedge.
- **Airspace / traffic:** Class D CTR/ATZ, radar and procedural service; cross-ref [Briefing §3.2](index.md) for the full Manchester-coordination detail.

---

## 6. Missed approach watch-items

- **Terrain-driven MAP notes:** Not primarily terrain-driven; no close-in high ground identified as the dominant factor.
- **Re-sequencing environment:** Re-sequencing after a RWY 27 go-around must account for the **Manchester-coordination positioning constraints** (§2) — expect ATC to re-integrate the aircraft into the same north/south-abeam altitude-gated pattern rather than a generic vector.
- **Go-around traps:** The dominant go-around driver at this field is expected to be the **airspace-integration constraint with Manchester on RWY 27**, not terrain or weather.

---

## 7. Landing runway / LDA & braking / vacate

- **LDA by runway:** RWY 09 — **2,101 m** (threshold permanently displaced 61 m); RWY 27 — **2,285 m** (full length, but undershoot RESA only 37 m). Never assume full-length landing distance on RWY 09. See [Briefing §7](index.md).
- **Braking / vacate:** Departing RWY 27 aircraft (context: arriving traffic reference) hold at Alpha 2 per LVP ground procedure; arriving aircraft continue to the runway end, vacate via Charlie, report runway vacated and reaching Alpha 8 when LVP are in force. Stop bars at A2/A3/A8/K/T/U/V/W illuminated during LVP.
- **Runway-excursion watch:** 🟧 RWY 09's 61 m displaced threshold (LDA 2,101 m vs 2,162 m TORA/ASDA) is the key excursion-relevant figure; RWY 27's short undershoot RESA (37 m) is a real overrun-margin caution on that end; contamination/braking-action data for winter operations not confirmed this pass.

---

## 8. Taxi-in routing to terminal & hot spots

- **Typical taxi-in by runway → terminal:** Main Apron access via Taxiways Uniform/Victor/Whisky; Eastern Apron access via Taxiway Tango. **Wingspan ≥36 m aircraft must enter the Main Apron via Taxiway Whiskey.**
- **Hot spots / tight taxiways:** 🟥 **Wingspan ≥52 m aircraft require a follow-me escort on Taxiway Alpha** (Holding Point A3 to the RWY 27 threshold); **stands 1 and 32 are out of ATC's direct sightline** — cross-ref [Briefing §13](index.md).
- **Stand/gate notes:** Eastern Apron stand-size markings (51/54 up to B757, 52/55 up to B767, 53/56 up to B737) — cross-ref [Dispatch §3](dispatch.md).

---

## 9. Arrival frequency sequence

- **Sequence:** **Liverpool Approach 119.855 / Liverpool Radar 118.455 (as directed) or 119.855 (H24) → Tower 126.355 (H24) → Ground 121.955 (as directed).** Reference the field's actual frequencies in [Briefing §8](index.md).
- **Approach/Departure control:** Liverpool Approach/Radar provides both radar (10 cm approach radar) and procedural service depending on serviceability/traffic — confirm current chart for sector-specific frequencies given the Manchester-coordination positioning requirements. 🟧

---

## 10. Gotchas

- **Manchester Airport proximity directly restricts RWY 27 arrival descent profiles** — do not assume a standard profile; the exact constraint depends on Manchester's runway in use on the day.
- **RWY 09's 61 m displaced threshold** cuts LDA to 2,101 m versus 2,162 m TORA/ASDA — do not assume full-length landing distance.
- **RWY 27's undershoot RESA is only 37 m**, with the ILS localiser and a fence/hedge as obstacles in it — a real overrun-margin consideration.
- **NDB LPL needle swings exceeding ±5°** are reported on the RWY 27 approach between 6 and 8 NM DME.
- **CDA is available only on RWY 09** — expect a less efficient, lower-altitude profile on RWY 27 for airspace integration with Manchester.
- **Wingspan ≥52 m aircraft need a follow-me escort on Taxiway Alpha** approaching the RWY 27 threshold from taxi-in.

---

## Open items (🟧 — confirm against AIP / current AIRAC)

- Current-AIRAC STAR names and transition-to-approach detail.
- Transition level (by QNH).
- LVP RVR trigger figures for RWY 27 CAT III; RWY 09 approach category designator.
- Terrain/obstacle bearings — not independently cross-checked against the current MSA/obstacle chart.
- Contamination/braking-action data for winter operations.

> **Live data — pull at planning:** wx/METAR/TAF/TREND, NOTAM (runway/approach/navaid/lighting, bird activity), ATIS config, Manchester runway-in-use (drives RWY 27 arrival profile), ground-delay/flow status. Not stored in this durable file.

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim charts inform content but are not listed here.*

- **UK NATS eAIP — AIP United Kingdom, AD 2 EGGP**, AIRAC effective 2020-10-08 — https://www.aurora.nats.co.uk/htmlAIP/Publications/2020-10-08-AIRAC/html/eAIP/EG-AD-2.EGGP-en-GB.html (retrieved 2026-07-26). *Approach/navaid data, declared distances, Manchester-coordination detail, arrival taxi routes.*
- OurAirports — https://ourairports.com/airports/EGGP/ (retrieved 2026-07-26).

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-26 | Built from UK AIP (NATS AIS); K Global fields from live VAMSYS; 4-page pack. |
