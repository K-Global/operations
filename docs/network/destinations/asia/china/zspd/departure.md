# ZSPD — Pudong · Departure Page

**ZSPD / PVG** · Pudong, Shanghai, China · Asia
**Version** v0.1 · **Updated** 2026-07-26 · **Status** Draft — public cross-check build, primary-AIP verification pending

> **Read-me:** Tactical departure aid for the sim, not a chart. Companion to the [ZSPD Briefing](index.md), [Dispatch](dispatch.md) and [Arrival](arrival.md) pages. SIDs/procedures are listed **by name only or flagged not-yet-confirmed** — fly the charted current-AIRAC version; verify every gradient, minima and routing on the current chart. Static data only; live wx/NOTAM/CTOT are pulled at planning. Open 🟧 items are in §Open items. Flag legend 🟥 restriction/hazard · 🟧 caution/unverified · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| Usual departure runway(s) | One of the two independent runway pairs — **West** (17L/35R + 17R/35L) or **East** (16L/34R + 16R/34L) — assigned by wind/flow; not a published fixed rule 🟧 |
| Config logic | Wind and **CAAC ATFM/flow-control** driven; the two runway pairs operate largely independently of each other |
| Transition altitude | Not published / verify 🟧 |
| Take-off minima | Published per AIP; not confirmed this pass 🟧 |
| CTOT / flow regime | **China's centralised CAAC ATFM** (CTOT/MINIT/ground holding) expected at this very-high-density field 🟥 |
| De-icing on departure | Mild subtropical climate; not a high-demand de-icing field 🟧 |

---

## 2. Stand → runway taxi routing & hot spots

- **Typical routings by runway:** From T1/T2 or the S1/S2 satellite gates, Ground/Apron route the aircraft toward the assigned runway pair (West 17L/35R+17R/35L or East 16L/34R+16R/34L); confirm the exact taxi with Apron/Ground on the day given the ~2.3–2.4 km separation between the two pairs and the correspondingly different taxiway systems serving each.
- **Hot spots / tight taxiways:** Not identified by name in reachable public sources this pass — confirm with Ground/Apron and the current chart before assuming any specific junction is benign. 🟧 Given the sheer density of ZSPD's movement rate and the freighter traffic sharing the system (§13 of the Briefing), treat ground taxi as a high-workload phase generally, independent of any named hot spot.
- **Runway crossings / read-back-required points:** Not confirmed — expect explicit crossing/hold-short instructions when routing between the East and West runway systems or across active taxiways serving the cargo apron.
- **Low-vis taxi caveats:** Confirm SMGCS/low-vis taxi routing and follow-me availability locally in the event of a fog/haze reduced-visibility event (§14 of the Briefing). 🟧

---

## 3. Runway / SID selection logic

- **By wind / config:** Not published as a fixed preferential rule; the active runway pair (West vs East) and specific runway within it are assigned tactically by Shanghai Approach/Tower based on wind and traffic flow.
- **By departure direction:** Not confirmed — no published directional-preference rule found for northbound (16x) vs southbound (17x/35x... note the runway family here uses 16/34 and 17/35 pairs, not a single reciprocal) departures. Confirm on the day.
- **Noise / preferential-runway program:** Not confirmed in reachable sources. 🟧
- **Interaction with arrivals:** The **two-independent-pair geometry** (see [Briefing §7](index.md)) means a departure off one pair typically interacts little with arrivals on the other pair, but within a pair, the two closely-spaced runways (~250–430 m apart) require correct understanding of dependent-vs-independent operation for the specific configuration in use — confirm with ATC.

---

## 4. SID list (names only)

*Fly the charted current-AIRAC version. RNP/gradient notes are pointers only — verify on the chart.*

| SID (name) | Runway(s) | RNP / gradient note | Notes |
|---|---|---|---|
| Not confirmed in reachable research pass 🟧 | All four commercial runways | China implements RNP 1 terminal SIDs across its continental FIRs, including Shanghai (ZSHA) — verify RNP/gradient per SID on current chart. See [`OM E — PBN and RNP Operations`](../../../../../flight-ops/pbn-and-rnp-operations.md) | Pull the live current-AIRAC SID list before use |

---

## 5. Initial climb, speed & noise-abatement departure

- **Initial climb / speed:** Per SID/ATC; 250 KIAS below FL100 (ICAO norm) expected — confirm current chart.
- **Noise-abatement departure procedure (NADP):** Not confirmed in reachable sources. 🟧
- **Early turn / altitude constraints:** Published per SID — verify constraints on the current chart. 🟧

---

## 6. Engine-out / emergency-turn & obstacle considerations

- **Engine-out / emergency-turn procedure:** No published EO/emergency-turn specifics confirmed in reachable sources — apply the operator/type EOSID for the assigned runway. 🟧
- **Close-in / distant obstacles:** Flat coastal/reclaimed-land setting at 4 m AMSL — **no significant close-in terrain obstacle** for any departure runway. The main non-terrain consideration is the shared airspace/traffic environment with the East pair, West pair, and the Hongqiao (ZSSS) metroplex (§3.2 of the Briefing), not obstacles.
- **Special DP / obstacle DP:** Not confirmed in reachable sources — verify on current chart. 🟧

---

## 7. Low-vis takeoff & de-icing on departure

- **LVTO minima / procedure:** LVP relevant given the field's reported CAT III infrastructure and seasonal fog/haze episodes; specific LVTO RVR minima not confirmed this pass. 🟧
- **De-icing:** Mild subtropical climate; not a high-demand de-icing field. Occasional light icing/sleet possible on the coldest winter days. See [`OM E — Cold Weather Operations`](../../../../../flight-ops/cold-weather-operations.md). 🟧

---

## 8. Clearance / CTOT & departure frequency sequence

- **Clearance delivery:** Pudong Delivery — 121.62 / 121.95 (Briefing §8).
- **Frequency sequence:** **Delivery 121.62/121.95 → Apron 121.65/121.97/122.12/122.60/122.70 → Ground 121.62/121.65 (West)/121.70/121.80 (East)/121.87 → Tower 118.32/118.40 (East)/118.57/118.72/118.80 (17L/35R)/124.35 (17R/35L) → Shanghai Approach (one of 15 published sectors between 119.07 and 128.05).** Take the assigned frequency and confirm current chart. (Frequencies from Briefing §8.)
- **CTOT / slot handling:** Widely reported as slot-coordinated; **China's centralised CAAC ATFM** (CTOT/MINIT/ground holding) is expected as standard practice at this very-high-density field — comply with any assigned CTOT. See the [Asia airspace brief](../../../../airspace/asia.md) §6. 🟥

---

## 9. Performance watch-items for our types

- **Field-length / weight:** All four commercial runways (3,400–4,000 m) are non-limiting for any K Global type; field length is not a departure constraint at ZSPD.
- **Density altitude / temperature:** Non-issue at 4 m AMSL, though summer heat/humidity is high — no hot-and-high performance penalty, but confirm standard performance-limiting temperature planning per type.
- **Contamination / wet-runway:** Heavy typhoon-season and summer-convective rainfall is the relevant seasonal consideration — braking-action/contamination data not confirmed this pass. 🟧
- **Link to OM B:** See [`OM B — Fleet Capability Matrix`](../../../../../fleet/capability-matrix.md) — no field-length or field-elevation performance penalty confirmed for any K Global type at ZSPD.

---

## 10. Gotchas

- **ZSPD's four runways operate as two independent, closely-spaced pairs (West 17L/35R+17R/35L; East 16L/34R+16R/34L) — never assume any pair/runway relationship without confirming the active configuration with ATC.**
- **A separate, non-parallel fifth runway (15/33) is reserved for COMAC C919 test flights** — check NOTAMs for test-flight activity; it is not part of the scheduled commercial system.
- **Historical RTO/runway-excursion case (Avient Aviation Flight 324, 2009, MD-11F cargo freighter)** underlines the value of strict thrust-lever/takeoff-power cross-check discipline at this field — the accident was traced to a throttle-lever discrepancy that the crew detected but did not correct in time.
- **Typhoon season (~May–Nov, peak Jul–Sep) can force a same-day ground stop** with limited warning — brief the possibility even on a day that looks clear at push-back time; conditions can deteriorate quickly as a system approaches.
- **China's CAAC ATFM/flow control is routine, not exceptional** — expect CTOT/MINIT and ground-holding instructions even in benign weather, simply due to the sustained high traffic density feeding this and the adjacent Hongqiao (ZSSS) field.
- **Heavy freighter traffic (FedEx/UPS/DHL/PACTL) shares the runway/taxiway system** — expect mixed pax/cargo sequencing, particularly around banks feeding the East-side cargo aprons.

---

## Open items (🟧 — confirm against AIP / current AIRAC)

- Current-AIRAC SID names and RNP/gradient specifics per runway.
- Take-off minima / DVA exact figures.
- Preferential-runway/config logic (published rule, if any).
- Start-up/push-back procedure detail (cross-bleed/APU notification).
- Noise-abatement procedure (NADP), if published.
- LVTO RVR minima and follow-me/SMGCS specifics.
- EOSID/engine-out procedure detail per runway.
- Named taxiway hot spots.

> **Live data — pull at planning:** wx/METAR/TAF, NOTAM (runway/taxiway/navaid/lighting, esp. RWY 15/33 C919 test-flight status), CTOT/ATFM, tropical-cyclone advisories in season. Not stored in this durable file.

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim charts inform content but are not listed here.*

- OurAirports — https://ourairports.com/airports/ZSPD/frequencies.html and /runways.html (retrieved 2026-07-26).
- SkyVector — https://skyvector.com/airport/ZSPD/Shanghai-Pudong-Airport (retrieved 2026-07-26). *Communications, runway geometry.*
- Wikipedia — "Shanghai Pudong International Airport" — https://en.wikipedia.org/wiki/Shanghai_Pudong_International_Airport (retrieved 2026-07-26). *Runway/C919-test-runway history.*
- Aviation Week — fifth (C919 test) runway detail — https://aviationweek.com/air-transport/airports-networks/shanghai-pudong-airport-open-fifth-runway-year (retrieved 2026-07-26).
- AVHerald — Avient Aviation MD-11 runway-excursion case — https://avherald.com/h?article=423638d8 (retrieved 2026-07-26).
- Wikipedia — "Avient Aviation Flight 324" — https://en.wikipedia.org/wiki/Avient_Aviation_Flight_324 (retrieved 2026-07-26).
- AeroTime / nomadlawyer.org — typhoon disruption history — https://www.aerotime.aero/articles/shanghai-sees-massive-flight-cancellations-as-typhoon-bebinca-hits (retrieved 2026-07-26).

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-26 | Built from AIP China (public cross-check where gated); K Global fields from live VAMSYS; 4-page pack. |
