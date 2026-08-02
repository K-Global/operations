# KIAD — Washington Dulles International · Departure Page

**KIAD / IAD** · Dulles, Virginia, United States · North America
**Version** v0.1 · **Updated** 2026-07-26 · **Status** Draft

> **Read-me:** Tactical departure aid for the sim, not a chart. Companion to the [KIAD Briefing](index.md), [Dispatch](dispatch.md) and [Arrival](arrival.md) pages. SIDs/procedures are listed **by name only or flagged not-yet-confirmed** — fly the charted current-AIRAC version; verify every gradient, minima and routing on the current chart. Static data only; live wx/NOTAM/CTOT are pulled at planning. Open 🟧 items are in §Open items. Flag legend 🟥 restriction/hazard · 🟧 caution/unverified · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| Usual departure runway(s) | Flow-dependent — **01-config** ("north flow": 01C/01L/01R) or **19-config** ("south flow": 19C/19R/19L); RWY 12/30 used for crosswind/alternate-flow ops |
| Config logic | Wind/traffic/PCT-flow driven; no single fixed preferential rule confirmed 🟧 |
| Transition altitude | US-standard **18,000 ft MSL / FL180** (national standard, not field-specific) |
| Take-off minima | Published per AIP; exact figures not confirmed this pass 🟧 |
| CTOT / flow regime | No slot-specific CTOT regime identified; standard FAA ATCSCC ground-delay/flow programs apply in adverse conditions 🟧 |
| De-icing on departure | Available — dedicated remote pad(s) reported, season typ. Nov–Mar |

---

## 2. Stand → runway taxi routing & hot spots

- **Typical routings by runway:** From Concourse A/B or C/D, Ground routes toward the assigned departure runway (01- or 19-config main pair, or 12/30 for crosswind ops); confirm the exact taxi with Ground/Ramp on the day. **Taxilane C is the active primary taxilane** per AIP remark.
- **Hot spots / tight taxiways:** 🟧 No FAA-published hot-spot panel was reachable this pass — confirm against the current Chart Supplement/airport diagram hot-spot listing. Known AIP-published ground constraints: 🟥 **Taxilane A (between A1–A5) is closed to aircraft with a wingspan over 118 ft**; **TWY E1 is restricted to aircraft under 79 ft wingspan**; **B747-8 aircraft are capped at 17 kt taxi speed on TWY J.**
- **Runway crossings / read-back-required points:** Not individually confirmed in reachable sources — expect standard crossing/hold-short instructions per Ground/Tower assignment. 🟧
- **Low-vis taxi caveats:** SMGCS/low-vis taxi procedures apply consistent with the field's CAT II/III environment on several runways; follow-me availability not confirmed. 🟧

---

## 3. Runway / SID selection logic

- **By wind / config:** PCT assigns "north flow" (01-config) or "south flow" (19-config) per prevailing wind and traffic; RWY 12/30 provides a crosswind/alternate-flow option. Exact selection thresholds not confirmed in reachable sources. 🟧
- **By departure direction:** Not independently confirmed by direction beyond the runway/config logic above — verify current SID routing on the chart.
- **Noise / preferential-runway program:** MWAA publishes noise-monitoring (WebTrak) information; specific preferential-runway/noise-abatement routing detail was not confirmed in reachable sources this pass. 🟧
- **Interaction with arrivals:** KIAD's four-runway layout (two long parallel pairs plus a crosswind pair) supports simultaneous/dependent arrival and departure streams under PCT; specific dependent-configuration rules not confirmed. 🟧

---

## 4. SID list (names only)

*Fly the charted current-AIRAC version. RNP/gradient notes are pointers only — verify on the chart.*

| SID (name) | Runway(s) | RNP / gradient note | Notes |
|---|---|---|---|
| BUNZZ, CAPITAL ONE, CLTCH, JCOBY, JDUBB, JERES, MCRAY, RNLDI, SCRAM, WOOLY (RNAV families) 🟧 | Per current chart | Multiple RNAV SIDs reported; RNP type/gradient not confirmed | 🟧 Assembled from public flight-tracking references, not independently confirmed against current AIRAC — pull the live current-AIRAC SID list before use |

---

## 5. Initial climb, speed & noise-abatement departure

- **Initial climb / speed:** Per SID/ATC; 250 KIAS below 10,000 ft MSL (14 CFR § 91.117, US national standard) — confirm current chart.
- **Noise-abatement departure procedure (NADP):** Not confirmed in reachable sources this pass — MWAA operates a WebTrak noise-monitoring/complaint portal but no specific mandated fleet-wide NADP was found. 🟧
- **Early turn / altitude constraints:** Published per SID — verify constraints on the current chart.

---

## 6. Engine-out / emergency-turn & obstacle considerations

- **Engine-out / emergency-turn procedure:** No published EO/emergency-turn specifics confirmed in reachable sources — apply the operator/type EOSID for the assigned runway. 🟧
- **Close-in / distant obstacles:** Rolling Piedmont terrain — no significant close-in obstacle/terrain factor identified for any runway.
- **Special DP / obstacle DP:** Not confirmed in reachable sources — verify on current chart. 🟧

---

## 7. Low-vis takeoff & de-icing on departure

- **LVTO minima / procedure:** LVP applies consistent with the field's CAT II/III infrastructure on several runways; specific LVTO RVR minima not confirmed this pass. 🟧
- **De-icing:** Dedicated remote de-icing pads reported (a mainline-carrier-run pad and a separate regional-carrier pad); exact pad locations/assignment by departure runway not confirmed from a primary source this pass. Season typ. Nov–Mar. See [`OM E — Cold Weather Operations`](../../../../../flight-ops/cold-weather-operations.md). 🟧

---

## 8. Clearance / CTOT & departure frequency sequence

- **Clearance delivery:** Dulles Clearance Delivery **135.7 / 317.8** (H24).
- **Frequency sequence:** **Delivery 135.7/317.8 → Ground West 121.625/348.6 or Ground East 121.9/317.8 → MWAA Ramp Control 129.55 (push-back/power clearance, mandatory from all apron positions) → Tower (RWY-specific: 120.1/317.8 for 01R/19L, 120.25/348.6 for 01C/19C, or 134.425/348.6 for 01L/19R & 12/30) → Potomac Approach/Departure (sector-specific, e.g. 118.675–135.775 range).** Take the assigned frequency and confirm current chart. (Frequencies from Briefing §8.)
- **CTOT / slot handling:** No slot-specific CTOT regime identified for KIAD; standard FAA ATCSCC ground-delay/flow-management programs apply in peak/adverse conditions. Comply with any assigned EDCT. 🟧

---

## 9. Performance watch-items for our types

- **Field-length / weight:** RWY 01C/19C and 01R/19L (11,500 ft) and RWY 12/30 (10,501 ft) are non-limiting for any K Global type; RWY 01L/19R (9,400 ft) is likewise ample for typical departure weights.
- **Density altitude / temperature:** Non-issue at 312 ft, Mid-Atlantic temperate climate — no hot-and-high penalty.
- **Contamination / wet-runway:** Winter snow/ice/de-icing season is the relevant seasonal consideration (§7); no specific contamination/braking-action data confirmed this pass. 🟧
- **Link to OM B:** See [`OM B — Fleet Capability Matrix`](../../../../../fleet/capability-matrix.md) — no field-length or field-elevation performance penalty for any K Global type at KIAD.

---

## 10. Gotchas

- **RWY 19C's published LDA is 411 ft shorter than its TORA** — relevant to an aborted-takeoff/accelerate-stop assumption on this runway; confirm the current declared-distance basis.
- **RWY 30 has no published ILS and departures use the "upper antenna" for ATC communications** per a published AIP local remark — a non-standard note worth briefing before any RWY 30 departure.
- **Taxilane A (between A1–A5) is closed above 118 ft wingspan; TWY E1 is restricted below 79 ft wingspan; B747-8 is capped at 17 kt on TWY J** — confirm correct taxi routing for Code E/F equipment before pushback.
- **MWAA Ramp Tower clearance is mandatory for push-back/power from all apron positions** — do not commence push-back without it.
- **Overnight engine run-ups (2200–0700 local) require prior Airport Operations approval** — relevant to any late maintenance run before a night departure.
- **No curfew at KIAD** — unlike KDCA, a late-day departure delay carries no hard movement-ban consequence, though ATCSCC flow programs may still apply.
- Large bird flocks and deer are noted in the vicinity of the airport (published AIP remark) — maintain a wildlife-strike scan on the take-off roll and initial climb.

---

## Open items (🟧 — confirm against AIP / current AIRAC)

- Current-AIRAC SID names and RNP/gradient specifics per runway.
- Take-off minima exact figures.
- De-icing pad assignment by departure runway.
- NADP/noise-abatement-routing preference (not confirmed as mandated).
- LVTO RVR minima and follow-me/SMGCS specifics.
- EOSID/engine-out procedure detail per runway.
- Airport diagram hot-spot panel (not reachable this pass).

> **Live data — pull at planning:** wx/METAR/TAF, NOTAM (runway/taxiway/navaid/lighting), CTOT/ATFM, de-icing status/pad assignment, current DC SFRA/ADIZ NOTAM or TFR status. Not stored in this durable file.

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim charts inform content but are not listed here.*

- **FAA Aeronautical Information Publication, Part 3 AD 2 — District of Columbia (KIAD)** — runway/declared-distance data, communications, published local remarks — https://www.faa.gov/air_traffic/publications/atpubs/aip_html/part3_ad_2.0_district_of_columbia.html (retrieved 2026-07-26).
- FlightAware — KIAD SID/STAR procedure index — https://www.flightaware.com/resources/airport/KIAD/procedures (retrieved 2026-07-26). *Tier-4 SID name list — not independently confirmed against current AIRAC.*
- Metropolitan Washington Airports Authority — "Overview of Dulles" — https://www.mwaa.com/overview-dulles (retrieved 2026-07-26). *Group VI Modification-of-Standards note, ramp/taxi context.*

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-26 | Built from FAA sources; K Global fields from live VAMSYS; 4-page pack. |
