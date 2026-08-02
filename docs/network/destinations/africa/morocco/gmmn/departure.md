# GMMN — Mohammed V Intl · Departure Page

**GMMN / CMN** · Casablanca, Morocco · Africa
**Version** v0.1 · **Updated** 2026-07-26 · **Status** Draft

> **Read-me:** Tactical departure aid for the sim, not a chart. Companion to the [GMMN Briefing](index.md), [Dispatch](dispatch.md) and [Arrival](arrival.md) pages. SIDs/procedures are listed **by name only or flagged not-yet-confirmed** — fly the charted current-AIRAC version; verify every gradient, minima and routing on the current chart. Static data only; live wx/NOTAM/CTOT are pulled at planning. Open 🟧 items are in §Open items. Flag legend 🟥 restriction/hazard · 🟧 caution/unverified · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| Usual departure runway(s) | **35R** (northerly config, RWY 35 favoured) or **17L** (southerly config) per the segregated one-way logic — see §3 |
| Config logic | Segregated parallel logic, not wind-driven independent parallels: northerly config = 35L land/35R depart; southerly config = 17L depart/17R land; up to 7 KT tailwind, the 35-config is used |
| Transition altitude | 4,000 ft (cross-checked, not AIP-confirmed) 🟧 |
| Take-off minima | Not confirmed in reachable sources 🟧 |
| CTOT / flow regime | Reported IATA Level 3 slot coordination (tier-4 only, not reconciled — see [Dispatch §4](dispatch.md)); TSAT-style start-up sequencing described operationally 🟧 |
| De-icing on departure | Not applicable / NIL — no infrastructure or season found in reachable sources 🟧 |

---

## 2. Stand → runway taxi routing & hot spots

- **Typical routings by runway:** No fixed regulated taxi routes are published; advisory practice (Maghreb vACC cross-check) is for outbound (departing) traffic to use the outer taxiways while inbound traffic uses apron inner taxiways, with unidirectional entries/exits recommended where practical. Confirm the exact taxi routing with Ground on the day.
- **Hot spots / tight taxiways:** 🟥 Chart-informed **holding-position confusion risk** near the parallel-runway hold points for **17L/17R** (Twy N area) and **35L/35R** (Twy S area) — pilots authorised to depart via these taxiways must be careful not to confuse the holding position of the parallel runway. Not independently AIP-confirmed.
- **Runway crossings / read-back-required points:** Per the Maghreb vACC cross-check, Ground must hand off crossing traffic to Tower well before the aircraft reaches the RWY 17L/35R holding point to allow time for a crossing clearance; runway-crossing clearances may be bundled into the taxi clearance subject to Ground/Tower coordination.
- **Low-vis taxi caveats:** During Low Visibility Procedures, ground movement is reported to be divided into zones with restricted exit taxiways and a cap on the number of aircraft manoeuvring simultaneously (network-sim cross-check) — confirm current SMGCS-equivalent procedure and follow-me availability. 🟧

---

## 3. Runway / SID selection logic

- **By wind / config:** GMMN does not appear to run true independent-parallel operations. Cross-checked ATC-procedure material describes a **segregated one-way logic**: in the dominant northerly configuration, **RWY 35L is dedicated to landing and 35R to takeoff**; in the southerly configuration, **RWY 17L is dedicated to takeoff and 17R to landing**. Running this segregated mode requires a minimum weather threshold (visibility ≥2,000 m, ceiling ≥500 ft per the cross-check source); Tower determines the direction of operations, and configurations are not mixed. Up to a 7 KT tailwind component, the RWY 35 configuration is used. 🟧
- **By departure direction:** Not independently differentiated by direction in reachable sources beyond the config logic above.
- **Noise / preferential-runway program:** A reversed day/night tailwind-takeoff preference is chart-informed: daytime (0600–2300L) tailwind departures favour the RWY 35 config; nighttime (2300–0600L) tailwind departures shift to the RWY 17 config. Not independently AIP-confirmed. 🟧
- **Interaction with arrivals:** Because runways are segregated by role rather than run as independent parallels, a departure off the "takeoff" runway of the active configuration operates alongside a continuous arrival stream on the parallel "landing" runway — maintain awareness of the active configuration's role assignment rather than assuming either runway is available for either purpose.

---

## 4. SID list (names only)

*Fly the charted current-AIRAC version. RNP/gradient notes are pointers only — verify on the chart.*

| SID (name) | Runway(s) | RNP / gradient note | Notes |
|---|---|---|---|
| Not confirmed in reachable research pass 🟧 | 17L / 35R (and reciprocal ends per config) | Not confirmed — verify RNP/gradient on current chart | Historic chart material references departure routings via waypoints/navaids including NUA and SLK; current SID names/idents were not obtained this pass — pull the live current-AIRAC SID list before use |

---

## 5. Initial climb, speed & noise-abatement departure

- **Initial climb / speed:** Per SID/ATC; 250 KIAS below FL100 within the Casablanca TMA — confirm current chart.
- **Noise-abatement departure procedure (NADP):** No specific NADP1/2 designation confirmed in reachable sources; a chart-informed general departure-climb profile exists (reduced-thrust cutback in the initial climb) — verify NADP specifics and any altitude/thrust constraints on the current chart. 🟧
- **Early turn / altitude constraints:** Published per SID — verify constraints on the current chart. 🟧

---

## 6. Engine-out / emergency-turn & obstacle considerations

- **Engine-out / emergency-turn procedure:** No published EO/emergency-turn specifics confirmed in reachable sources — apply the operator/type EOSID for the assigned runway. 🟧
- **Close-in / distant obstacles:** Flat Casablanca-Settat coastal plain — no significant close-in terrain/obstacle identified in reachable sources (see [Briefing §3.1](index.md)).
- **Special DP / obstacle DP:** Not confirmed in reachable sources — verify on current chart. 🟧

---

## 7. Low-vis takeoff & de-icing on departure

- **LVTO minima / procedure:** LVP applies per the cross-checked three-stage regime (Preparation/In-force/Termination, keyed to RVR and cloud base — see [Briefing §10](index.md)); specific LVTO RVR minima by CAT not confirmed this pass. During a CAT II/III take-off, the localiser-sensitive area ahead of the departing aircraft must remain unviolated from the issuance of take-off clearance until the aircraft has passed the runway's departure end (network-sim cross-check). 🟧
- **De-icing:** No de-icing infrastructure or season identified in reachable sources — treat as **NIL** pending confirmation. 🟧

---

## 8. Clearance / CTOT & departure frequency sequence

- **Clearance delivery:** Per the Maghreb vACC cross-check, start-up clearance is typically issued together with the en-route clearance, requested by the pilot roughly 10 minutes before EOBT; a dedicated public Delivery frequency was not isolated separately from Ground in reachable cross-check sources — see [Briefing §8](index.md). 🟧
- **Frequency sequence:** **Ground 130.600 (start-up/pushback/taxi) → Tower 118.500 (departure) → Approach 119.900/121.300.** Take the assigned frequency and confirm current chart. (Frequencies from Briefing §8 — cross-checked, not AIP-primary.)
- **CTOT / slot handling:** Reported IATA Level 3 slot coordination (tier-4 only, unreconciled — [Dispatch §4](dispatch.md)); a TSAT-style start-up sequencing practice is described operationally during high-traffic periods. 🟧

---

## 9. Performance watch-items for our types

- **Field-length / weight:** RWY 17L/35R and 17R/35L (~3,717 m / 3,711 m) are non-limiting for any K Global type.
- **Density altitude / temperature:** Non-issue at 656 ft, mild coastal climate — no hot-and-high penalty.
- **Contamination / wet-runway:** No seasonal contamination/de-icing consideration identified; the more relevant seasonal factor is low-visibility fog risk rather than runway contamination (see [Briefing §3.4](index.md)). 🟧
- **Link to OM B:** See [`OM B — Fleet Capability Matrix`](../../../../../fleet/capability-matrix.md) — no field-length or field-elevation performance penalty for any K Global type at GMMN.

---

## 10. Gotchas

- **GMMN does not run independent parallel operations** — runways are segregated by role (35L land/35R depart, or 17L depart/17R land) rather than freely interchangeable; always confirm the assigned runway's role.
- **Approach/CAT capability is not uniform across the field** (CAT III on 35R/35L only, CAT I only on 17R, 17L unconfirmed) — this matters for planning a return/diversion as much as for arrivals; see [Briefing §9](index.md).
- **Holding-position confusion risk** near the 17L/17R and 35L/35R parallel hold points — read back hold-short instructions carefully, especially near Twy N/Twy S.
- **Reversed day/night tailwind-takeoff runway preference** — do not assume the daytime RWY 35 preference applies unchanged at night; the config can shift to RWY 17 outside 0600–2300L. 🟧
- **Reverse thrust is prohibited on apron/stands** (chart-informed) — a ground-handling caution rather than a landing-roll one.
- **Active multi-year construction programme** (new runway/terminal/tower) — expect evolving taxi routing and construction NOTAMs through ~2029.

---

## Open items (🟧 — confirm against AIP / current AIRAC)

- Current-AIRAC SID names and RNP/gradient specifics per runway.
- Take-off minima / DVA exact figures.
- NADP designation and exact climb-profile figures.
- LVTO RVR minima by CAT.
- EOSID/engine-out procedure detail per runway.
- Dedicated Delivery frequency, if one exists separately from Ground.

> **Live data — pull at planning:** wx/METAR/TAF, NOTAM (runway/taxiway/navaid/lighting, esp. construction-related closures), CTOT/ATFM, LVP status. Not stored in this durable file.

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim charts inform content but are not listed here.*

- Maghreb vACC (VATSIM Morocco division) — "Casablanca MV (GMMN)" aerodrome procedures — https://docs.vatsim.ma/controllers/aerodrome-procedures/casablanca/ (retrieved 2026-07-26; page last updated 2023-10-12). **Network-sim document, not regulatory** — segregated-runway logic, taxi/crossing procedure, LVP stages, start-up/TSAT sequencing.
- SkyVector — https://skyvector.com/airport/GMMN (retrieved 2026-07-26). *Frequencies.*
- See the [GMMN Briefing](index.md) for the full source register and the ONDA AIP access-attempt note.

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-26 | Built from AIP Morocco (ONDA); K Global fields from live VAMSYS; 4-page pack. |
