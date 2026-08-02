# KIAD — Washington Dulles International · Arrival Page

**KIAD / IAD** · Dulles, Virginia, United States · North America
**Version** v0.1 · **Updated** 2026-07-26 · **Status** Draft

> **Read-me:** Tactical arrival aid for the sim, not a chart. Companion to the [KIAD Briefing](index.md), [Dispatch](dispatch.md) and [Departure](departure.md) pages. STARs/approaches are listed **by name only or flagged not-yet-confirmed** — fly the charted current-AIRAC version; minima shown are pointers, always verify on the current chart. Static data only; live wx/NOTAM are pulled at planning. Open 🟧 items are in §Open items. Flag legend 🟥 restriction/hazard · 🟧 caution/unverified · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| Usual landing runway(s) | Flow-dependent — **01-config** ("north flow": 01C/01L/01R) or **19-config** ("south flow": 19C/19R/19L); RWY 12/30 used for crosswind/alternate-flow ops |
| Usual approach | ILS on seven of eight runway ends; CAT II/III on 01L, 19C, 01R (confirmed) and probably 19R/19L (lighting evidence, sub-category unconfirmed); **RWY 30 visual/RNAV only — no ILS** |
| Config logic | Wind/traffic/PCT-flow driven; no single fixed rule confirmed 🟧 |
| Transition level | US-standard **FL180** (transition altitude 18,000 ft MSL nationwide) |
| LVP trigger | Winter low-vis/fog events; CAT II/III capability on several runways is the standing mitigation; exact RVR trigger not confirmed 🟧 |
| Missed-approach driver | Airspace/traffic density under Potomac Consolidated TRACON (PCT), not terrain |

---

## 2. STAR / transition selection

- **STARs (names only — 🟧 verify current AIRAC):** CAVLR, COATT, DELRO, GIBBZ, HYPER, PRIVO, PRTZL, SELINSGROVE, WAYNZ, WIGOL (RNAV STAR families reported) — assembled from public flight-tracking references, not independently confirmed against current AIRAC; pull the live current-AIRAC STAR list at planning.
- **Selection by arrival direction / runway:** PCT assigns the STAR-to-runway transition for the active flow configuration (01- or 19-config); RWY 12/30 used for crosswind arrivals.
- **Transition to approach:** Expect an RNAV-STAR-to-ILS transition with radar vectors onto final under PCT; verify the charted transition.
- **Speed / flow constraints on the STAR:** Published speed/altitude gates are pointers only — verify chart; expect additional flow speed control given the dense DC-metro traffic environment.

---

## 3. Descent & energy plan

- **Top-of-descent trigger:** Standard descent-profile planning; plan TOD to meet the first STAR altitude gate. Winter low-vis events or PCT flow-management can compress the descent — brief an early-descent contingency.
- **Speed control:** STAR speed gates and 250 KIAS below 10,000 ft MSL (14 CFR § 91.117) — confirm current chart.
- **Altitude constraints:** Key STAR crossing constraints are pointers — fly the charted altitudes.
- **Energy traps:** Late runway/config changes (01-config ↔ 19-config ahead of a wind shift), and holding/resequencing during winter weather or high-density PCT traffic, are the main energy traps at this field.

---

## 4. Approach selection by runway

*Names only — verify minima on current AIRAC charts.*

| RWY | Approach (name) | LVP / CAT note | Minima pointer (verify AIRAC) |
|---|---|---|---|
| 01C | ILS (OSZ) | CAT I 🟩 | verify current chart |
| 19C | ILS (DLX) | **CAT II/III** 🟩 | verify current chart |
| 01L | ILS (OIU) | **CAT II/III** 🟩 | verify current chart |
| 19R | ILS (ISU) | 🟧 sub-category not confirmed | verify current chart |
| 01R | ILS (IAD) | **CAT II/III** 🟩 | verify current chart |
| 19L | ILS (SGC) | 🟧 sub-category not confirmed | verify current chart |
| 12 | ILS (AJU) | CAT I 🟩 | verify current chart |
| 30 | — none — | **No ILS published** — visual/RNAV only | n/a |

- **LVP triggers:** Winter low-visibility/fog events are the plausible KIAD trigger; CAT II/III capability on 01L/19C/01R (and probably 19R/19L) is the standing mitigation. Exact RVR/trigger values not confirmed from a primary table this pass. 🟧

---

## 5. Approach hazards (terrain / CFIT / specific threats)

- **CFIT / terrain:** 🟩 None of significance. Rolling Piedmont terrain at 312 ft AMSL — no close-in high ground relevant to any arrival path.
- **Specific threats:** 🟥 KIAD operates inside the dense **Potomac Consolidated TRACON (PCT)** airspace shared with KDCA and KBWI, overlaid by the **Washington, DC SFRA/ADIZ** (14 CFR Part 93 Subpart V) — routine IFR arrivals under continuous ATC contact satisfy the SFRA automatically, but any lost-comm/NORDO event near Washington carries real intercept-risk consequences (cross-ref Briefing §3.2). Wake-turbulence spacing between the parallel runway pairs is a standing consideration during simultaneous/dependent operations.
- **Airspace / traffic:** 🟥 High density under PCT, particularly during peak DC-metro banks — brief for re-sequencing and extended vectoring, especially in marginal weather.

---

## 6. Missed approach watch-items

- **Terrain-driven MAP notes:** Terrain is not the driver (rolling Piedmont, non-limiting) — fly the published MAP and verify climb-gradient/turn on the current chart.
- **Re-sequencing environment:** A go-around returns you to the dense PCT/DC-metro radar environment — expect extended vectoring and possible holding before re-sequencing, especially during winter weather.
- **Go-around traps:** Traffic/config awareness on the active flow (01- vs 19-config) during the miss; confirm current runway assignment before re-establishing.

---

## 7. Landing runway / LDA & braking / vacate

- **LDA by runway:** 01C, 01R, 19L **11,500 ft**; 01L, 19R **9,400 ft**; 12, 30 **10,501 ft**; **19C 11,089 ft** (411 ft short of its own TORA — basis not confirmed 🟧). All figures ample for any K Global type at typical arrival weights.
- **Braking / vacate:** Rapid-exit taxiway detail not confirmed in reachable sources — confirm with Ground on the day. 🟧
- **Runway-excursion watch:** 🟧 RWY 19C's LDA/TORA discrepancy (§Briefing §3.3) is noted but non-limiting; winter contamination/braking-action consideration applies in the Nov–Mar snow/ice season (see Briefing §14).

---

## 8. Taxi-in routing to terminal & hot spots

- **Typical taxi-in by runway → terminal:** After landing on the assigned 01- or 19-config runway (or 12/30), taxi in to Concourse A/B or C/D per Ground/Ramp assignment; VAMSYS mirror gives a planning taxi-in time of **16 min** `[VAMSYS mirror 2026-07-25]`. **Taxilane C is the active primary taxilane** per AIP remark.
- **Hot spots / tight taxiways:** 🟧 No FAA-published hot-spot panel was reachable this pass — confirm against the current Chart Supplement/airport diagram hot-spot listing. Known AIP-published ground constraints: **Taxilane A (between A1–A5) closed above 118 ft wingspan; TWY E1 restricted below 79 ft wingspan; B747-8 capped at 17 kt on TWY J** — cross-ref Briefing §13.
- **Stand/gate notes:** See [Dispatch §3](dispatch.md) — widebody clusters at Concourse B (41 loading bridges) and Concourse C/D; confirm current gate assignment and AeroTrain-vs-mobile-lounge routing for international arrivals with handling.

---

## 9. Arrival frequency sequence

- **Sequence:** **Potomac Approach (sector-specific, e.g. 118.675–135.775 range) → Tower (RWY-specific: 120.1/317.8 for 01R/19L, 120.25/348.6 for 01C/19C, or 134.425/348.6 for 01L/19R & 12/30) → Ground West 121.625/348.6 or Ground East 121.9/317.8 → MWAA Ramp Control 129.55 (contact gate) or FBO frequency for GA/itinerant traffic.** Take the assigned frequency and confirm current chart. (Frequencies from Briefing §8.)
- **Approach/Departure control:** **Potomac Consolidated TRACON (PCT)** is the facility for Dulles' terminal approach; **Washington ARTCC (ZDC)** hands off en route inbound — see [North America airspace overview](../../../../airspace/north-america.md). 🟧 Exact sector/frequency assignment is AIRAC/traffic-dependent.

---

## 10. Gotchas

- **RWY 30 is never a precision-approach runway** — no ILS published; visual/RNAV only.
- **RWY 19C's LDA is 411 ft shorter than its TORA** — confirm the current declared-distance basis if planning a length-critical arrival on this runway.
- **International arrivals route through the mobile-lounge/"plane mate" sterile corridor to the IAB, not a direct jet-bridge-to-CBP flow** — this affects realistic connection-time planning distinct from a typical jet-bridge arrival.
- **KIAD sits inside the DC SFRA outer ring within the dense multi-airport PCT complex (KDCA/KBWI)** — expect vectoring/holding, especially in marginal weather or during a bank.
- **Config swap (01-config ↔ 19-config) driven by a wind shift** can bring a late runway change — watch the ATIS wind trend.
- **No curfew at KIAD** — a delayed arrival carries no hard movement-ban consequence, unlike KDCA.
- Large bird flocks and deer are noted in the vicinity of the airport (published AIP remark) — maintain a wildlife-strike scan through short final and landing roll.

---

## Open items (🟧 — confirm against AIP / current AIRAC)

- Current-AIRAC STAR names and exact approach minima per runway.
- ILS sub-category (CAT II vs III) confirmation for RWY 19R and 19L.
- Exact LVP/CAT II-III trigger RVR values.
- Rapid-exit taxiway/vacate detail.
- Current AeroTrain-vs-mobile-lounge taxi-in/gate routing for international arrivals.
- Airport diagram hot-spot panel (not reachable this pass).

> **Live data — pull at planning:** wx/METAR/TAF/TREND, NOTAM (runway/approach/navaid/lighting, esp. CAT II/III equipment status), ATIS config/wind trend, current DC SFRA/ADIZ NOTAM or TFR status. Not stored in this durable file.

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim charts inform content but are not listed here.*

- **FAA Aeronautical Information Publication, Part 3 AD 2 — District of Columbia (KIAD)** — runway/declared-distance data, communications, published local remarks — https://www.faa.gov/air_traffic/publications/atpubs/aip_html/part3_ad_2.0_district_of_columbia.html (retrieved 2026-07-26).
- FlightAware — KIAD Instrument Approach Procedures index (ILS RWY 01R / 19C / 01L "CAT II-III" listings) and STAR index — https://www.flightaware.com/resources/airport/KIAD/IAP and https://www.flightaware.com/resources/airport/KIAD/procedures (retrieved 2026-07-26). *Tier-4 cross-check of CAT II/III runway assignment and STAR name list — not independently confirmed against current AIRAC.*
- eCFR — 14 CFR Part 93, Subpart V (Washington, DC Metropolitan Area SFRA) — https://www.ecfr.gov/current/title-14/chapter-I/subchapter-F/part-93/subpart-V (retrieved 2026-07-26).
- Metropolitan Washington Airports Authority — "Overview of Dulles" — https://www.mwaa.com/overview-dulles (retrieved 2026-07-26). *IAB/mobile-lounge sterile-corridor detail.*

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-26 | Built from FAA sources; K Global fields from live VAMSYS; 4-page pack. |
