# LFPO — Paris-Orly · Departure Page

**LFPO / ORY** · Paris (Orly), Île-de-France, France · Europe
**Version** v0.1 · **Updated** 2026-07-26 · **Status** Draft

> **Read-me:** Tactical departure aid for the sim, not a chart. Companion to the [LFPO Briefing](index.md), [Dispatch](dispatch.md) and [Arrival](arrival.md) pages. SIDs/procedures are listed **by name only or flagged not-yet-confirmed** — fly the charted current-AIRAC version; verify every gradient, minima and routing on the current chart. Static data only; live wx/NOTAM/CTOT are pulled at planning. Open 🟧 items are in §Open items. Flag legend 🟥 restriction/hazard · 🟧 caution/unverified · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| Usual departure runway(s) | RWY 06/24 and 07/25 (CAT III-equipped main pair); RWY 02 **IFR take-off prohibited** — never assign |
| Config logic | Wind/traffic-driven; exact preferential-runway rule not confirmed this pass 🟧 |
| Transition altitude | Commonly reported 5,000 ft nationwide for France; not independently confirmed for LFPO 🟧 |
| Take-off minima | Published per AIP; exact figures not confirmed this pass 🟧 |
| CTOT / flow regime | Slot-coordinated Level 3 (COHOR), plus a rolling-hour runway-movement cap; EUROCONTROL ATFM/CTOT expected in peak/adverse conditions 🟧 |
| De-icing on departure | Available — provisioning confirmed, exact pad locations not obtained this pass 🟧 |

---

## 2. Stand → runway taxi routing & hot spots

- **Typical routings by runway:** From Orly 1/2 or Orly 4, Ground routes toward the assigned departure runway (06/24 or 07/25 main pair); confirm the exact taxi with Ground/Approach on the day. High-speed exit taxiways (W35, W43–W46) serve the main runway pair with runway-specific speed limits.
- **Hot spots / tight taxiways:** 🟥 The **RWY 02/20 × 07/25 intersection** carries an AIP-flagged pavement-geometry anomaly (curvature radius and inter-curve distance below international recommended values) — a documented irregularity for ground planning near that junction. Crews of aircraft with a wingspan over 63 m must specify aircraft type at first contact with Orly ATC and again on Ground frequency. Code E crews (A340-600/B777-300/A350-1000 class) are advised to use over-steering technique in curves.
- **Runway crossings / read-back-required points:** Expect explicit crossing/hold-short instructions at the 02/20 × 07/25 intersection and at any taxiway crossing the active departure runway.
- **Low-vis taxi caveats:** 🟧 LVP conditions are declared when ceiling ≤ 200 ft or RVR ≤ 600 m. Under LVP, lining-up is restricted to the taxiway leading to the runway extremity only, and permanent/controlled stop bars follow a defined lighting sequence per visibility band (see current AIRAC/AIP AD 2.20.4.1 for the exact stop-bar logic).

---

## 3. Runway / SID selection logic

- **By wind / config:** Not confirmed from the reachable AIP extract this pass — RWY 06/24 and 07/25 are the primary CAT III-equipped pair; RWY 02/20 is the secondary/crosswind runway with reduced capability (CAT I on 02 only, visual-only on 20, IFR take-off prohibited on 02). 🟧
- **By departure direction:** Not confirmed this pass. 🟧
- **Noise / preferential-runway program:** Not confirmed beyond the curfew/movement-cap regime itself — verify locally. 🟧
- **Interaction with arrivals:** Orly Approach operates within a combined, dense multi-airport Paris CTR shared with De Gaulle/Le Bourget/Villacoublay — expect coordination-driven runway/config decisions tied to the wider TMA picture, not LFPO traffic alone.

---

## 4. SID list (names only)

*Fly the charted current-AIRAC version. RNP/gradient notes are pointers only — verify on the chart.*

| SID (name) | Runway(s) | RNP / gradient note | Notes |
|---|---|---|---|
| Not confirmed in reachable research pass 🟧 | 06/24, 07/25 | Not confirmed 🟧 | Pull the live current-AIRAC SID list before use |

---

## 5. Initial climb, speed & noise-abatement departure

- **Initial climb / speed:** Per SID/ATC; 250 KIAS below FL100 (EU/ICAO norm) — confirm current chart.
- **Noise-abatement departure procedure (NADP):** Not confirmed in reachable sources this pass — LFPO's dense urban/residential surroundings and the hard curfew regime strongly imply an active noise-routing programme; verify on current chart. 🟧
- **Early turn / altitude constraints:** Published per SID — verify constraints on the current chart. 🟧

---

## 6. Engine-out / emergency-turn & obstacle considerations

- **Engine-out / emergency-turn procedure:** No published EO/emergency-turn specifics confirmed in reachable sources — apply the operator/type EOSID for the assigned runway. 🟧
- **Close-in / distant obstacles:** Flat Paris-basin location — no significant close-in terrain. No LFPO-specific close-in obstacle confirmed in reachable sources this pass. 🟧
- **Special DP / obstacle DP:** Not confirmed in reachable sources — verify on current chart. 🟧

---

## 7. Low-vis takeoff & de-icing on departure

- **LVTO minima / procedure:** LVP applies when ceiling ≤ 200 ft or RVR ≤ 600 m `[AIP France AD 2 LFPO.20.4.1]`; specific LVTO RVR minima not confirmed this pass. 🟧 Available only on the CAT III-equipped runways (06/24/07/25) — RWY 02 is CAT I only and RWY 20 has no instrument approach at all.
- **De-icing:** Provided; 4 handling teams / 20 vehicles reported; fluids include potassium formate (KFOR), sodium formate (NAFO), and Propylene Glycol Type 1/4. Exact pad locations/positions not obtained in this research pass. 🟧 See [`OM E — Cold Weather Operations`](../../../../../flight-ops/cold-weather-operations.md).

---

## 8. Clearance / CTOT & departure frequency sequence

- **Clearance delivery:** ORLY Delivery ("ORLY Prevol") **121.555** (HO).
- **Frequency sequence:** **Delivery 121.555 → Ground 121.705 (H24) / 121.815 (aux) → Tower 118.700 (HO) / 120.500 (aux) → Approach 118.855 / 120.855 / 124.450 / 127.750 (reserved DEP) / 128.380 (aux, reserved DEP), sector-specific.** Take the assigned frequency and confirm current chart. (Frequencies from Briefing §8.)
- **CTOT / slot handling:** **IATA Level 3 slot-coordinated** (COHOR), plus a rolling-hour runway-movement cap; comply with any assigned CTOT/slot restriction. Given the field's **hard curfew (23:30–06:00, tightening from 25 Oct 2026)**, the clearance/departure sequence for a late-day rotation should always be planned with the curfew boundary as a hard scheduling gate, not merely a courtesy buffer. 🟥

---

## 9. Performance watch-items for our types

- **Field-length / weight:** RWY 06/24 (3,650 m) and 07/25 (3,320 m) are non-limiting for any K Global type; RWY 02 (2,400 m) is **IFR take-off prohibited** — never plan a departure from it regardless of performance.
- **Density altitude / temperature:** Non-issue at 291 ft, temperate climate — no hot-and-high penalty.
- **Contamination / wet-runway:** Winter de-icing season is the relevant seasonal consideration (§7); no specific contamination/braking-action data confirmed this pass. 🟧
- **Link to OM B:** See [`OM B — Fleet Capability Matrix`](../../../../../fleet/capability-matrix.md) — no field-length or field-elevation performance penalty for any K Global type at LFPO on the main runway pair.

---

## 10. Gotchas

- **RWY 02 — IFR take-off prohibited.** Never assign or expect a departure from it under IFR.
- **The hard curfew (23:30–06:00) is the standout departure gotcha at this field** — a late-day departure delay risks being pushed into the curfew window with no routine tolerance; from 25 Oct 2026, the reference time for noise-sensitive fleet types moves earlier still (23:15 off-block, partial 22:00 ban).
- **The RWY 02/20 × 07/25 intersection** carries a documented pavement-geometry anomaly — expect published crossing constraints and treat it as a genuine ground-navigation caution point, not routine geometry.
- **Fuel uplift is published 0500–2230 local only** — a late-evening departure near the curfew boundary should not assume routine fuel service without prior arrangement.
- **Combined multi-airport Paris CTR** (Orly/CDG/Le Bourget/Villacoublay share one approach-control complex) — expect coordination-driven routing/sequencing beyond LFPO's own traffic picture.
- **Code E aircraft** (A340-600/B777-300/A350-1000 class) — over-steering technique recommended in taxi curves per the AIP; crews must announce aircraft type (wingspan > 63 m) at first contact with ATC and Ground.

---

## Open items (🟧 — confirm against AIP / current AIRAC)

- Current-AIRAC SID names and RNP/gradient specifics per runway.
- Preferential-runway/config logic (wind/noise/flow-driven selection rule).
- Take-off minima exact figures.
- Noise-abatement departure procedure (NADP) detail.
- De-icing pad locations/positions.
- EOSID/engine-out procedure detail per runway.
- LVTO RVR minima specifics.

> **Live data — pull at planning:** wx/METAR/TAF, NOTAM (runway/taxiway/navaid/lighting, esp. the RWY 02/20 × 07/25 intersection), CTOT/ATFM, de-icing status. Not stored in this durable file.

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim charts inform content but are not listed here.*

- **SIA France eAIP, AD 2 LFPO** (AIRAC cycle effective 11 Jun 2026, package dated 09 Jul 2026) — communications, runway/declared-distance data, ground-movement rules, LVP triggers — https://www.sia.aviation-civile.gouv.fr/media/dvd/eAIP_09_JUL_2026/FRANCE/AIRAC-2026-07-09/html/eAIP/FR-AD-2.LFPO-fr-FR.html (retrieved 2026-07-26).
- COHOR — Paris Orly Airport (ORY/LFPO) — https://www.cohor.org/en/airports/paris-orly-airport-ory-lfpo/ (retrieved 2026-07-26). *Slot regime, runway-capacity mechanism.*
- OurAirports — https://ourairports.com/airports/LFPO/runways.html and /frequencies.html (retrieved 2026-07-26). *Cross-check.*

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-26 | Built from SIA France eAIP; K Global fields from live VAMSYS; 4-page pack. |
