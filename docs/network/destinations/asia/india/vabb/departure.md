# VABB — Chhatrapati Shivaji Maharaj International · Departure Page

**VABB / BOM** · Mumbai, Maharashtra, India · Asia
**Version** v0.1 · **Updated** 2026-07-26 · **Status** Draft — AIP India-derived

> **Read-me:** Tactical departure aid for the sim, not a chart. Companion to the [VABB Briefing](index.md), [Dispatch](dispatch.md) and [Arrival](arrival.md) pages. SIDs/procedures are listed **by name/category only or flagged not-yet-confirmed** — fly the charted current-AIRAC version; verify every gradient, minima and routing on the current chart. Static data only; live wx/NOTAM/CTOT are pulled at planning. Open 🟧 items are in §Open items. Flag legend 🟥 restriction/hazard · 🟧 caution/unverified · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| Usual departure runway(s) | **RWY 09 or 27** (main pair); **RWY 14/32 only when 09/27 is unavailable** (maintenance/weather/emergency) |
| Config logic | 09/27 is the default pair under MIAL's single-runway-at-a-time policy (since mid-2013); config selection otherwise wind/traffic driven |
| Transition altitude | Not confirmed this pass — verify current chart 🟧 |
| Take-off minima | Published per AIP; exact figures not confirmed this pass 🟧 |
| CTOT / flow regime | No confirmed formal slot level; structural capacity ceiling (~44 ATMs/hr) drives routine ATFM-style flow management 🟧 |
| De-icing on departure | **NIL** — not required at this tropical/coastal field |

---

## 2. Stand → runway taxi routing & hot spots

- **Typical routings by runway:** From Terminal 2 (our operation), Ground/Apron routes toward the assigned runway via the full-length parallel taxiway system (13 taxiways incl. 4 rapid-exit serve RWY 09/27; 10 taxiways incl. 3 rapid-exit serve RWY 14/32); confirm the exact taxi with Ground/Apron on the day.
- **Hot spots / tight taxiways:** 🟥 The **RWY 09/27 × RWY 14/32 intersection** south of the terminal buildings is the field's principal ground/runway-crossing hot spot given the intersecting-runway geometry. MIAL's own 2025 capital programme references ongoing work on **Taxiway M (west side)** and a **dual-use Taxiway Zulu** (taxiway by day, aircraft stand at night) — both indicative of an actively-reconfigured, congestion-prone airside layout. Confirm current taxiway status against NOTAMs before taxi.
- **Runway crossings / read-back-required points:** Any taxi routing that crosses the RWY 09/27–14/32 intersection zone, or that transits the published primary isolation bay (TWY E9, used when RWY 09/27 is active) or secondary isolation bay (near TWY N11 / RWY 27 threshold, used when RWY 14/32 is active), should expect explicit crossing/hold-short instructions.
- **Low-vis taxi caveats:** Surface Movement Radar (SMR) is fitted on the field, supporting low-visibility surface guidance; specific SMGCS/low-vis taxi routing detail and follow-me availability not confirmed this pass. 🟧

---

## 3. Runway / SID selection logic

- **By wind / config:** RWY 09/27 is the default pair; exact wind-based runway-selection criteria (09 vs 27) not confirmed this pass — expect ATC-driven config per prevailing wind and traffic flow.
- **By departure direction:** No directional (e.g. polar/oceanic) routing preference identified — this is a regional/international gateway with a full range of departure directions.
- **Noise / preferential-runway program:** No specific published NADP or preferential-runway noise program confirmed in reachable sources this pass. 🟧
- **Interaction with arrivals:** Because RWY 09/27 and RWY 14/32 **physically intersect**, the field cannot run fully independent simultaneous departure/arrival streams across both pairs — MIAL scrapped simultaneous cross-runway operations in mid-2013 in favour of single-runway-at-a-time operation. Expect departures and arrivals to share the same active runway pair, with RWY 14/32 substituted in only when 09/27 is unavailable.

---

## 4. SID list (names only)

*Fly the charted current-AIRAC version. RNP/gradient notes are pointers only — verify on the chart.*

| SID (name) | Runway(s) | RNP / gradient note | Notes |
|---|---|---|---|
| Not confirmed in reachable research pass 🟧 | 09 / 27 / 14 / 32 | Not confirmed — verify RNP/gradient requirements per SID on current chart | Pull the live current-AIRAC SID list before use. See [`OM E — PBN and RNP Operations`](../../../../../flight-ops/pbn-and-rnp-operations.md) |

---

## 5. Initial climb, speed & noise-abatement departure

- **Initial climb / speed:** Per SID/ATC; 250 KIAS below FL100 (ICAO/India norm) — confirm current chart.
- **Noise-abatement departure procedure (NADP):** No specific published NADP confirmed in reachable sources this pass — verify locally. 🟧
- **Early turn / altitude constraints:** Not confirmed this pass — the dense close-in obstacle field on the RWY 09/27 approach/take-off surfaces (buildings, trees, electrical structures up to ~220 ft, per the AIP obstacle register) makes early-turn/altitude discipline particularly important on this runway pair — fly the published profile.

---

## 6. Engine-out / emergency-turn & obstacle considerations

- **Engine-out / emergency-turn procedure:** Not confirmed in reachable sources — apply the operator/type EOSID for the assigned runway. 🟧
- **Close-in / distant obstacles:** 🟥 RWY 09/27's take-off surfaces carry an unusually dense AIP-published obstacle register — buildings, trees (many coconut palms) and electrical/antenna structures ranging roughly 35–220 ft within the immediate approach/take-off area, reflecting the airport's location amid dense Mumbai suburbs. Further out, a lit ~1,018 ft TV mast (Doordarshan Tower) and an isolated ~272 ft hill obstacle are charted in the wider circling area. RWY 32's departure/approach corridor historically abutted Trombay Hill (~4.5 NM) and the Bhabha Atomic Research Centre nuclear complex; current restriction status not independently reconfirmed this pass. Brief the charted obstacle/climb-gradient profile — do not assume a clear, terrain-free departure path just because the field is coastal/flat.
- **Special DP / obstacle DP:** Not confirmed in reachable sources — verify on current chart. 🟧

---

## 7. Low-vis takeoff & de-icing on departure

- **LVTO minima / procedure:** Monsoon/fog-driven low-visibility events are the routine trigger; RWY 27 carries the field's deepest published low-vis approach capability (ILS CAT II) — 🟧 exact LVTO RVR minima and whether a comparable low-vis departure procedure exists are not confirmed this pass.
- **De-icing:** **NIL** — not applicable at this tropical/coastal field.

---

## 8. Clearance / CTOT & departure frequency sequence

- **Clearance delivery:** Mumbai Delivery **121.85** (H24, assumed) — see [Briefing §8](index.md).
- **Frequency sequence:** **Mumbai Delivery 121.85 → Mumbai Ground 121.75/121.85/121.90 → Mumbai Tower 118.10/122.50 → Mumbai Approach/Radar 119.30/120.35/127.90 (sector-specific).** Take the assigned frequency and confirm current chart; frequencies are sourced to a tier-4 aggregator, not cross-checked against the primary AD 2.18 table (Briefing §8). 🟧
- **CTOT / slot handling:** No confirmed formal slot-coordination level for VABB; treat ATFM-style flow management as a standing planning assumption given the field's structural ~44 ATMs/hr capacity ceiling, particularly in the monsoon season. 🟧

---

## 9. Performance watch-items for our types

- **Field-length / weight:** RWY 09/27 (3,448 m) is non-limiting for any K Global type. **RWY 14/32 (2,871 m)** is shorter, narrower, and carries smaller published RESAs than ICAO-recommended (14: 90 × 90 m; 32: 150 × 100 m) — treat as materially more limiting if ever assigned as a departure runway (only occurs when 09/27 is unavailable). See [`OM E — Short and Limited Runway Operations`](../../../../../flight-ops/short-and-limited-runway-operations.md).
- **Density altitude / temperature:** Non-issue at 40 ft AMSL; reference temperature 34.6°C is a routine tropical figure, not a hot-and-high performance driver.
- **Contamination / wet-runway:** The **SW monsoon (Jun–Sep)** is the relevant seasonal consideration — heavy rain and airside waterlogging can affect braking action/contamination status; cross-ref [`OM E — Adverse Weather and Windshear`](../../../../../flight-ops/adverse-weather-and-windshear.md). No dedicated contamination/braking-action statistic confirmed this pass. 🟧
- **Link to OM B:** See [`OM B — Fleet Capability Matrix`](../../../../../fleet/capability-matrix.md) — no field-length or field-elevation performance penalty for any K Global type on RWY 09/27; confirm margins before any RWY 14/32 departure.

---

## 10. Gotchas

- **RWY 09/27 and RWY 14/32 physically intersect** — the field runs single-runway-at-a-time, not independent dual-runway ops; do not assume simultaneous departure/arrival streams on both pairs.
- **RWY 14/32 is the fallback runway only** — shorter, narrower, smaller RESAs; expect it only when 09/27 is unavailable.
- **Dense close-in obstacle field on RWY 09/27's take-off surfaces** — buildings/trees/electrical structures up to ~220 ft per the AIP register; fly the published profile, don't cut the departure short visually.
- **RWY 32 has no ILS** and historically abutted a nuclear-facility no-fly consideration (Trombay Hill/BARC) — confirm current status if ever assigned this runway.
- **No hard curfew, but a hard capacity ceiling (~44 ATMs/hr)** — expect routine ATFM-style sequencing delay, especially in the monsoon, rather than a clock-time cutoff.
- **Monsoon season (Jun–Sep)** can bring sudden heavy-rain/reduced-visibility departure delay with little warning — build schedule buffer in-season.
- **Ground-handling agent assignment is in transition (2025)** — confirm push-back/dispatch coordination with the current handler.

---

## Open items (🟧 — confirm against AIP / current AIRAC)

- Current-AIRAC SID names and RNP/gradient specifics per runway.
- Take-off minima / DVA exact figures.
- Transition altitude.
- Start-up/push-back procedure detail (cross-bleed/APU notification, mandatory-vs-self-manoeuvre).
- Noise-abatement/NADP preference, if any.
- LVTO RVR minima and follow-me/SMGCS specifics.
- EOSID/engine-out procedure detail per runway.
- Current status of any RWY 32 approach/departure restriction relative to Trombay Hill/BARC.

> **Live data — pull at planning:** wx/METAR/TAF, NOTAM (runway/taxiway/navaid/lighting, esp. RWY 14/32 availability and Taxiway M/Zulu status), CTOT/ATFM, monsoon-season waterlogging advisories. Not stored in this durable file.

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim charts inform content but are not listed here.*

- **Airports Authority of India — eAIP India, AD 2 VABB** (2023-cycle mirror) — https://aim-india.aai.aero/eaip-v2-01-2023/eAIP/IN-AD%202.1VABB-en-GB.html (retrieved 2026-07-26). *Taxiway index, isolation bays, obstacle register, de-icing (NIL).*
- **AERA — CSMIA Fourth Control Period Stakeholder Consultation**, 25 March 2025 — https://aera.gov.in/uploads/stack_holder/17436568126440.pdf (retrieved 2026-07-26). *Runway capacity, RESA figures, Taxiway M/Zulu projects.*
- SkyVector — https://skyvector.com/airport/VABB/Chhatrapati-Shivaji-International-Airport (retrieved 2026-07-26). *Communications frequency cross-check.*
- Wikipedia — "Chhatrapati Shivaji Maharaj International Airport" — https://en.wikipedia.org/wiki/Chhatrapati_Shivaji_Maharaj_International_Airport (retrieved 2026-07-26). *Single-runway-operation policy history, Trombay Hill/BARC note.*

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-26 | Built from AIP India (AAI); K Global fields from live VAMSYS; 4-page pack. |
