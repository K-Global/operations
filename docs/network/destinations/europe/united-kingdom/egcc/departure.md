# EGCC — Manchester · Departure Page

**EGCC / MAN** · Manchester, England, United Kingdom · Europe
**Version** v0.1 · **Updated** 2026-07-26 · **Status** Draft

> **Read-me:** Tactical departure aid for the sim, not a chart. Companion to the [EGCC Briefing](index.md), [Dispatch](dispatch.md) and [Arrival](arrival.md) pages. SIDs/procedures are listed **by name only** — fly the charted current-AIRAC version; verify every gradient, minima and routing on the current chart. Static data only; live wx/NOTAM/CTOT are pulled at planning. Open 🟧 items are in §Open items. Flag legend 🟥 restriction/hazard · 🟧 caution/unverified · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| Usual departure runway(s) | **23L / 23R** in westerly (preferred) operation; **05L / 05R** in easterly operation |
| Config logic | Westerly (23-config) preferred at all times when safe: headwind, tailwind ≤5 kt (either runway or at 2,000 ft), crosswind ≤15 kt, ILS/approach lights serviceable |
| Transition altitude | 5,000 ft |
| Take-off minima | Published per AIP; exact figures not confirmed this pass 🟧 |
| CTOT / flow regime | Slot-coordinated Level 3 (ACL); EUROCONTROL ATFM/CTOT expected in peak/adverse conditions 🟧 |
| De-icing on departure | Available H24 — Swissport / Menzies / Aero Mag 2000 MAN Ltd |

---

## 2. Stand → runway taxi routing & hot spots

- **Typical routings by runway:** From Terminal 2 or Terminal 3, Ground/Apron routes toward the assigned departure runway (23L/23R main pair westerly, 05L/05R easterly); confirm the exact taxi with Ground/Tower on the day, noting the active dual/single-runway configuration.
- **Hot spots / tight taxiways:** 🟥 **B777, A340-600 and A380 are PROHIBITED from Taxiway Lima** — never plan a Lima routing for these types. Taxiway November-Charlie has **painted centreline only** and requires a Follow-Me service in darkness or LVP `[Manchester Airport ASI-15 §2.4.2(g)]`. Several taxiways are wingspan-restricted to ≤36 m (November-Alpha/Bravo Blue/Orange, Zulu-Blue/Orange, Lima south of Stand 6, Juliet-Echo, Juliet-Foxtrot, Golf east of Stand 55) — do not route a Code E/F aircraft onto these. A380 taxi routes are separately charted with a reduced 49 m centreline-to-object clearance along Taxiways Alpha and Juliet (J1–J4).
- **Runway crossings / read-back-required points:** Under LVP, specific taxiway routes are closed (A4–D1, D1–A4, C2–P3 right turn, P3–C2 left turn) and CAT II/III holding points apply — for RWY 23R single-runway operation, aircraft enter via **J1 or M1**; for RWY 05L single-runway operation, aircraft enter via **A1, AG1 or AF1** `[Manchester Airport ASI-15 §2.3–2.3.1]`.
- **Low-vis taxi caveats:** Under LVP Vis, movement rate falls to roughly 24/hour and free-ranging vehicle movement is restricted to point-to-point clearances only; a Follow-Me is provided over unlit portions of the manoeuvring area. 🟧

---

## 3. Runway / SID selection logic

- **By wind / config:** **Westerly operation (23-config) is preferred at all times** the criteria are met: headwind component, tailwind ≤5 kt (either runway or at 2,000 ft), crosswind ≤15 kt, ILS and approach lights serviceable. Easterly operation (05-config) is used when wind dictates otherwise `[Manchester Airport ASI-8 §1.1]`.
- **By departure direction:** In **dual/segregated operation**, the standard configuration is **Westerly: 23L departures / 23R arrivals**; **Easterly: 05L departures / 05R arrivals**. Runway 2 (05R/23L) departures from the "wrong" runway of the pair (e.g. 05R for performance reasons during 23-config dual ops) may be accommodated if the resultant delay is acceptable to the pilot `[Manchester Airport ASI-8 §1.2]`. Outside the promulgated dual-runway hours, or 22:00–06:00 under any circumstances, operations revert to **single-runway on 05L/23R** and Runway 2 is not used for take-off except in emergency, when Runway 1 is unsafe/under maintenance, or on pilot request for departure performance/technical reasons.
- **Noise / preferential-runway program:** Southbound departures fly one of two dedicated noise-abatement SIDs — **SANBA** (jet aircraft only) or **LISTO** (propeller aircraft, light jets ≤35,000 kg MTOW, and BAe146/E135-145/CRJ/Global Express/Gulfstream-series types) `[IVAO XU EGCC local procedures, cross-checked against Manchester Airport's own PNR naming]`. Westbound and eastbound departures are grouped for wake/route separation purposes into a **West group (ASMIM, EKLAD, KUXEM, MONTY)** and an **East group (DESIG, POLE HILL/POL, SONEX)**.
- **Interaction with arrivals:** Departures interact with the continuous arrival stream on the paired runway during dual/segregated operation; in single-runway operation on 05L/23R, departures and arrivals share the one active runway under Tower sequencing.

---

## 4. SID list (names only)

*Fly the charted current-AIRAC version. Naming/grouping is a pointer only — verify designator suffix, routing and gradient on the chart.*

| SID (name) | Group / Runway(s) | RNP / gradient note | Notes |
|---|---|---|---|
| SANBA (formerly HONILEY) | Southbound noise-abatement | Verify RNP/gradient on current chart 🟧 | **Jet aircraft only** |
| LISTO (formerly LIS72) | Southbound noise-abatement | Verify RNP/gradient on current chart 🟧 | Propeller aircraft, light jets ≤35,000 kg MTOW, BAe146/E135-145/CRJ/Global Express/Gulfstream-series; aircraft filed LISTO but rerouted via SANBA fly N859 to HON VOR |
| ASMIM / EKLAD / KUXEM / MONTY (formerly NOK/WAL) | West group | Verify RNP/gradient on current chart 🟧 | Westbound-routed departures |
| DESIG (formerly DESY) / POLE HILL (POL) / SONEX | East group | Verify RNP/gradient on current chart 🟧 | Eastbound-routed departures |

*Names sourced to Manchester Airport's own Runway Data Sheet/Noise Action Plan publications and cross-checked against a network-sim (IVAO) reference — pull the live current-AIRAC SID list and exact designator suffix before use.*

---

## 5. Initial climb, speed & noise-abatement departure

- **Initial climb / speed:** Per SID/ATC; a minimum height of **500 ft AAL before commencing any turn** after take-off (except aircraft ≤5,700 kg MTOW, or when instructed to make an Early Turn by ATC) `[Manchester Airport ASI-8 §4]`.
- **Noise-abatement departure procedure (NADP):** All departing aircraft (except those ≤5,700 kg MTOW) fly the assigned Noise Preferential Route (NPR) until reaching the published release altitude; track performance is monitored against a **1.5 km compliance corridor** and a 95% on-track target, with financial noise/track penalties for exceedances `[Manchester Airport ASI-8 §4; Noise Action Plan 2024-2028]`.
- **Early turn / altitude constraints:** ATC may issue an Early Turn to certain smaller jet/propeller types to reduce the incidence of Non-Standard Departures (NSDs); both are uncommon (each under ~1% of departures per the Runway Data Sheet) — expect the standard NPR/SID routing as the default.

---

## 6. Engine-out / emergency-turn & obstacle considerations

- **Engine-out / emergency-turn procedure:** No published EO/emergency-turn specifics confirmed in reachable sources — apply the operator/type EOSID for the assigned runway. 🟧
- **Close-in / distant obstacles:** Flat Cheshire/Greater Manchester plain — **no significant close-in terrain** relevant to any departure or engine-out path (see [Briefing §3.1](index.md)).
- **Special DP / obstacle DP:** Not confirmed in reachable sources — verify on current chart. 🟧

---

## 7. Low-vis takeoff & de-icing on departure

- **LVTO minima / procedure:** LVP applies per the graduated LVP Alert/Cloud/Vis states (§2/Briefing §3.4); **LVP Cloud permits departures from RWY 23L**, while **LVP Vis restricts operation to single-runway on 23R or 05L only** — confirm current LVP state and eligible departure runway before pushback. Specific LVTO RVR minima not confirmed this pass. 🟧
- **De-icing:** Available H24, contacts Swissport / Menzies / Aero Mag 2000 MAN Ltd. See [`OM E — Cold Weather Operations`](../../../../../flight-ops/cold-weather-operations.md).

---

## 8. Clearance / CTOT & departure frequency sequence

- **Clearance delivery:** Manchester Delivery **121.705** (0630–2200 / 0530–2100 winter); outside these hours, Ground takes delivery calls on 121.705.
- **Frequency sequence:** **Delivery 121.705 → Ground 121.855 (day) / 121.705 (night, 2200–0630 / 2100–0530 winter) → Tower 118.630 (AIR North) or 119.405 (AIR South) → Manchester Radar 118.580 (South)/135.005 (North).** Take the assigned frequency and confirm current chart. (Frequencies from [Briefing §8](index.md).)
- **CTOT / slot handling:** **All flights PPR at all times**; **IATA Level 3 slot-coordinated** (ACL); EUROCONTROL ATFM/CTOT regulation expected in peak/adverse conditions. Comply with any assigned CTOT/slot. 🟧

---

## 9. Performance watch-items for our types

- **Field-length / weight:** Both runway pairs (~3,048–3,050 m) are non-limiting for any K Global type in the **L** category; mind the displaced-threshold-reduced LDA figures if relevant to a reject/abort scenario, though TORA/TODA/ASDA are the governing departure figures (see [Briefing §7](index.md)).
- **Density altitude / temperature:** Non-issue at 257 ft, temperate maritime climate — no hot-and-high penalty.
- **Contamination / wet-runway:** Autumn/winter frontal-rain and de-icing season is the relevant seasonal consideration (§7); no specific contamination/braking-action figure confirmed this pass. 🟧
- **Link to OM B:** See [`OM B — Fleet Capability Matrix`](../../../../../fleet/capability-matrix.md) — no field-length or field-elevation performance penalty for any K Global type at EGCC.

---

## 10. Gotchas

- **B777, A340-600 and A380 are PROHIBITED from Taxiway Lima** — never plan a Lima routing for these types; confirm an alternative taxi route to/from stand.
- **Runway 2 (05R/23L) is not available for take-off outside the promulgated dual-runway hours or between 22:00–06:00 under any circumstances**, except emergency, Runway 1 unserviceable/under maintenance, or pilot request for departure performance/technical reasons.
- **Segregated dual/single-runway mode changes with time of day** — confirm the active configuration via ATIS before assuming a departure runway.
- **QC8/QC16-rated aircraft cannot operate 23:00–06:59; QC4-rated aircraft cannot be scheduled to depart 23:30–05:59** — verify aircraft QC classification against the schedule before a late-day rotation; the airfield operations duty manager will typically prohibit a flight not pushed back at least 30 minutes before the 23:00 threshold.
- **SANBA/LISTO southbound noise SIDs are type-differentiated** (jet vs. propeller/light-jet) — confirm the correct SID is filed for the aircraft type.
- **Taxiway November-Charlie has painted centreline only** and needs a Follow-Me in darkness/LVP — do not assume unassisted taxi through this area at night or in low visibility.
- **All flights are PPR at all times** — a filed flight plan does not itself authorise the movement.

---

## Open items (🟧 — confirm against AIP / current AIRAC)

- Current-AIRAC SID designator suffixes (e.g. 1R/1Y/2R) and RNP/gradient specifics per runway.
- Take-off minima / DVA exact figures.
- Start-up/push-back procedure detail (cross-bleed/APU notification).
- EOSID/engine-out procedure detail per runway.
- LVTO RVR minima specifics.
- Segregated dual-runway operating-hour window — Manchester's own Airside Standing Instruction flags an internal query against the published AIP times; confirm against a live AIRAC.

> **Live data — pull at planning:** wx/METAR/TAF, NOTAM (runway/taxiway/navaid/lighting, esp. Runway 2/segregated-mode status), CTOT/ATFM, de-icing status. Not stored in this durable file.

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim charts inform content but are not listed here. See Sources for the tier hierarchy.*

- **UK AIP (NATS AIS), AD 2 EGCC**, AIRAC cycle effective 2026-03-19 — https://www.aurora.nats.co.uk/htmlAIP/Publications/2026-03-19-AIRAC/html/eAIP/EG-AD-2.EGCC-en-GB.html (retrieved 2026-07-26).
- Manchester Airport — Airside Standing Instruction 8, "Aircraft Noise" — https://assets.live.dxp.maginfrastructure.com/f/73114/x/0ff030296a/asi-8-aircraft-noise.pdf (retrieved 2026-07-26). *Preferential runway/config logic, NPR track adherence, QC regime.*
- Manchester Airport — Airside Standing Instruction 15, "Low Visibility Procedures" — https://assets.live.dxp.maginfrastructure.com/f/73114/x/44b8f0b603/asi-15-low-visibility-procedures.pdf (retrieved 2026-07-26). *LVP taxiway restrictions and holding points.*
- Manchester Airport — Runway Data Sheet — https://assets.live.dxp.maginfrastructure.com/f/73114/x/639c2972b3/man-runway-data-sheet-2023.pdf (retrieved 2026-07-26). *SANBA/LISTO/PNR names, early-turn/NSD statistics.*
- IVAO XU Documentation Library — "Manchester (EGCC)" local procedures — https://wiki.ivao.aero/en/home/divisions/xu/atc/aerodrome/local-procedure/manchester/egcc (retrieved 2026-07-26). *Network-sim reference, not regulatory — SID separation grouping (West/East), frequency structure.*

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-26 | Built from UK AIP (NATS AIS); K Global fields from live VAMSYS; 4-page pack. |
