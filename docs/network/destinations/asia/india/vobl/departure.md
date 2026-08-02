# VOBL — Kempegowda Intl · Departure Page

**VOBL / BLR** · Bengaluru (Devanahalli), Karnataka, India · Asia
**Version** v0.1 · **Updated** 2026-07-26 · **Status** Draft — AIP India-derived

> **Read-me:** Tactical departure aid for the sim, not a chart. Companion to the [VOBL Briefing](index.md), [Dispatch](dispatch.md) and [Arrival](arrival.md) pages. SIDs/procedures are listed **by name only or flagged not-yet-confirmed** — fly the charted current-AIRAC version; verify every gradient, minima and routing on the current chart. Static data only; live wx/NOTAM/CTOT are pulled at planning. Open 🟧 items are in §Open items. Flag legend 🟥 restriction/hazard · 🟧 caution/unverified · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| Usual departure runway(s) | Wind/mode-dependent — **09R/27L (south) mandatory for Code-F aircraft** in every mode; 09L/27R (north, CAT I) available for departures in segregated/dependent/single-runway modes |
| Config logic | Wind and LVP status select the active mode (09/27 Segregated, 09 Dependent, single-runway); Code-F traffic is always routed to the south runway |
| Transition altitude | 7,000 ft — verify no local override on current chart 🟧 |
| Take-off minima | Published per AIP; exact figures not confirmed this pass 🟧 |
| CTOT / flow regime | No IATA slot level confirmed; published hourly runway-movement capacity caps apply instead — see [Dispatch §4](dispatch.md) 🟧 |
| De-icing on departure | **NIL** — not required at this field |

---

## 2. Stand → runway taxi routing & hot spots

- **Typical routings by runway:** From Terminal 2 (or Terminal 1 for a domestic rotation), Ground routes toward the assigned departure runway via the taxiway network (A/A1–A11, B/B1–B4, D, F, G/G1/G4, H/H1–H10, K, M, N/N1/N2, P/P1, Q, R, S, plus taxilanes L1–L3); confirm the exact taxi with Ground/Apron on the day.
- **Hot spots / tight taxiways:** 🟥 A dedicated hot-spot chart is published (AIP AD 2.24) but its content was not extracted this pass — verify on current chart before ground movement. Known ILS-protection ground constraints: **TWY H1/H2 closed when ILS RWY 09R is active; TWY H9/H10 closed when ILS RWY 27L is active.** Taxilane L2 lighting is reserved for Code-D and above; L1/L3 for Code-C and below — confirm lane assignment for a widebody push/taxi.
- **Runway crossings / read-back-required points:** Cross-field taxiways link the two runways; expect explicit crossing/hold-short instructions, particularly during segregated-mode operation when arrival and departure streams run on different runways simultaneously.
- **Low-vis taxi caveats:** During CAT II/III operation on RWY 09R/27L, **mandatory follow-me** applies below RVR 350 m for arrivals to non-ASMGL stands or on taxiways without centreline lighting, and below RVR 550 m on TWY P/Q for aircraft without serviceable ADS-B. Lane changes (L1↔L3) are not permitted below RVR 200 m, and pushback is restricted (max 3 simultaneous per apron, max 4 combined across Apron 1&2 or 3&4) during low-vis single-runway operation. 🟧

---

## 3. Runway / SID selection logic

- **By wind / config:** Multiple modes exist: **09/27 Segregated** (one runway arrivals-only, the reciprocal departures-only), **09 Dependent** (RWY 09R arrivals / RWY 09L departures), and **single-runway modes** (09L/27R or 09R/27L alone, used when the other runway is closed). Mode selection is wind- and LVP-driven.
- **By departure direction:** No specific directional-departure runway assignment found (unlike, e.g., a dedicated one-way departure runway) — the governing constraint is instead the **Code-F restriction to RWY 09R/27L in every mode**, and the mandatory-SID requirement driven by the nearby VOYK military airbase (see §6).
- **Noise / preferential-runway program:** No formal NADP or preferential-runway noise program found; the only published noise-abatement measure is minimising reverse-thrust use after landing (Arrival-side, not departure-side).
- **Interaction with arrivals:** In segregated/dependent modes, departures on one runway operate alongside a continuous arrival stream on the other — brief for concurrent parallel-runway activity. During LVP, only 27 Segregated Mode, 09 Dependent Mode, or single-RWY 09R/27L mode are used.

---

## 4. SID list (names only)

*Fly the charted current-AIRAC version. RNP/gradient notes are pointers only — verify on the chart.*

| SID (name) | Runway(s) | RNP / gradient note | Notes |
|---|---|---|---|
| RNAV 1 SID (name not confirmed) | 09L | Waypoint series confirmed (e.g. BL402…) 🟧 | Pull the live current-AIRAC SID name/gradient before use |
| RNAV 1 SID (name not confirmed) | 09R | Waypoint series confirmed (e.g. BL401…) 🟧 | Pull the live current-AIRAC SID name/gradient before use |
| RNAV 1 SID (name not confirmed) | 27L | Published, waypoint list confirmed 🟧 | Pull the live current-AIRAC SID name/gradient before use |
| RNAV 1 SID (name not confirmed) | 27R | Not independently confirmed this pass 🟧 | Pull the live current-AIRAC SID list before use |

---

## 5. Initial climb, speed & noise-abatement departure

- **Initial climb / speed:** Per SID/ATC; 250 KIAS below FL100 (ICAO norm assumed) — confirm current chart. 🟧
- **Noise-abatement departure procedure (NADP):** No mandated NADP1/2 preference found in reachable sources; the airport's sole published noise-abatement measure (minimising reverse thrust) applies to arrivals, not departures. 🟧
- **Early turn / altitude constraints:** **Departures must strictly follow the promulgated SID** because of the nearby VOYK military airbase — this is an explicit AIP-published constraint, not merely good practice (see §6). Published SID altitude/turn constraints — verify on current chart.

---

## 6. Engine-out / emergency-turn & obstacle considerations

- **Engine-out / emergency-turn procedure:** No published EO/emergency-turn specifics confirmed in reachable sources — apply the operator/type EOSID for the assigned runway. 🟧
- **Close-in / distant obstacles:** No significant close-in terrain (undulating Deccan plateau); the operative "obstacle" consideration is airspace, not terrain — **Yelahanka (VOYK) military airbase**, 3.2–4.3 NM south of the runway thresholds, shares a near-identical 090/270 orientation and hosts active military helicopter circuits (up to 1.5 NM north of its runway, ≤700 ft AGL) and fixed-wing training traffic (practice ILS to VOYK RWY 27, VOR-185 training up to 6,000 ft). The AIP requires departures to strictly follow the promulgated SID specifically because of this proximity.
- **Special DP / obstacle DP:** Not confirmed in reachable sources beyond the VOYK-driven strict-SID-adherence requirement above — verify on current chart. 🟧

---

## 7. Low-vis takeoff & de-icing on departure

- **LVTO minima / procedure:** LVP framework applies per Briefing §10 (Safeguarding Procedures at RVR <1,200 m/ceiling trending to 400→200 ft; LVP implemented at RVR <800 m/ceiling <200 ft); specific LVTO RVR minima for departure were not isolated from the general LVP minima table this pass. 🟧 Mandatory follow-me on the north runway's RETs (A5–A9) and TWY A10 applies in the event of an abandoned takeoff when RVR ≤350 m.
- **De-icing:** **NIL** — not applicable at this field.

---

## 8. Clearance / CTOT & departure frequency sequence

- **Clearance delivery:** Bengaluru Delivery **121.825** (main, CLD-1) / **121.900** (backup, CLD-2), both 0000–1730 UTC; beyond this window, clearance delivery is on **121.775**.
- **Frequency sequence:** **Delivery 121.825/121.900 (0000–1730 UTC; else 121.775) → Ground 121.650/121.775 (SMC-1/SMC-2, H24) → Tower 118.475/124.350 (TWR-1 main/backup) or 119.050/123.675 (TWR-2 main/backup), H24 → Bengaluru Radar 121.250 (Approach Departure/Arrival, sector-specific) or 127.750 (Approach Departure, main).** Take the assigned frequency and confirm current chart. (Frequencies from Briefing §8.)
- **CTOT / slot handling:** No IATA slot-coordination level confirmed; the published hourly runway-movement capacity caps are the practical flow constraint at peak banks — comply with any locally assigned sequencing instruction. 🟧

---

## 9. Performance watch-items for our types

- **Field-length / weight:** Both runways (4,000 m) are non-limiting for any K Global type; **Code-F aircraft must depart from RWY 09R/27L** — never plan a Code-F departure from the north runway.
- **Density altitude / temperature:** 3,003 ft field elevation combined with a 36.6°C AIP reference temperature is a real, quantifiable input to takeoff-performance calculations (reduced air density, marginally longer takeoff roll/climb requirement) — genuinely elevated for India, though not hot-and-high by extreme international standards. Non-limiting given the 4,000 m runway length, but factor it into performance planning in the hottest pre-monsoon weeks (Mar–May).
- **Contamination / wet-runway:** No de-icing/snow consideration at this tropical field; monsoon-season (Jun–Sep) heavy-rain contamination/braking-action is a plausible seasonal consideration, not independently confirmed with airport-specific data this pass. 🟧
- **Link to OM B:** See [`OM B — Fleet Capability Matrix`](../../../../../fleet/capability-matrix.md) — no field-length constraint for any K Global type at VOBL; the elevation/reference-temperature input is the only real performance factor, and it is non-limiting on these runway lengths.

---

## 10. Gotchas

- **Code-F aircraft depart from RWY 09R/27L only** — never plan or expect a Code-F departure from the north runway (09L/27R), in any operating mode.
- **Strictly fly the promulgated SID** — this is an explicit AIP requirement because of the nearby VOYK military airbase, not a general-practice recommendation.
- **RWY 09L/27R is CAT I only** — it remains available as a departure runway in several modes, but do not expect any low-visibility takeoff capability there beyond CAT I minima.
- **Winter pre-dawn fog (Dec–Jan)** can trigger LVP with pushback restrictions (max 3 simultaneous per apron) and mandatory follow-me with little warning ahead of the early-morning departure bank.
- **TWY H1/H2 or H9/H10 closures** apply automatically whenever the corresponding ILS (RWY 09R or RWY 27L) is active — confirm current runway-in-use before assuming taxiway availability near the south-runway ILS critical areas.
- **No curfew, but hourly runway-movement capacity caps are real** — a schedule padded assuming unconstrained flow can still queue at a busy bank.

---

## Open items (🟧 — confirm against AIP / current AIRAC)

- Current-AIRAC SID names (only waypoint-series identifiers confirmed this pass) and RNP/gradient specifics per runway.
- Take-off minima / LVTO RVR figures specific to departure.
- Start-up/push-back procedure detail (cross-bleed/APU notification).
- NADP preference, if any — none confirmed as mandated.
- EOSID/engine-out procedure detail per runway.
- ATFM/flow-program specifics for VOBL beyond the published hourly capacity caps.

> **Live data — pull at planning:** wx/METAR/TAF, NOTAM (runway/taxiway/navaid/lighting, esp. south-runway ILS/CAT IIIB status), CTOT/flow status, current winter-fog/LVP status. Not stored in this durable file.

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim charts inform content but are not listed here.*

- **AAI eAIP India, AD 2 VOBL**, AMDT 04-25, eff. 2025-08-07 — https://aim-india.aai.aero/eaip/eaip-v2-04-2025/eAIP/IN-AD%202.1VOBL-en-GB.html (retrieved 2026-07-26). *Runway/SID index, communications, local aerodrome regulations (VOYK), LVP/pushback-restriction detail.*
- AIM India — VOBL RNAV 1 SID waypoint lists (RWY 09L/09R/27L) — https://aim-india.aai.aero/eaip-v2-6-2023/eAIP/VOBL-SID-RWY-09R-RNAV1-GNSS-WAYPOINTS.pdf and related (retrieved 2026-07-26). *SID waypoint-series corroboration; full procedure names not obtained.*

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-26 | Built from AIP India (AAI); K Global fields from live VAMSYS; 4-page pack. |
