# LEBL — Josep Tarradellas Barcelona-El Prat · Departure Page

**LEBL / BCN** · Barcelona, Spain · Europe
**Version** v0.1 · **Updated** 2026-07-26 · **Status** Draft

> **Read-me:** Tactical departure aid for the sim, not a chart. Companion to the [LEBL Briefing](index.md), [Dispatch](dispatch.md) and [Arrival](arrival.md) pages. SIDs/procedures are listed **by name only or flagged not-yet-confirmed** — fly the charted current-AIRAC version; verify every gradient, minima and routing on the current chart. Static data only; live wx/NOTAM/CTOT are pulled at planning. Open 🟧 items are in §Open items. Flag legend 🟥 restriction/hazard · 🟧 caution/unverified · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| Usual departure runway(s) | **24L / 24R** by day in the preferential West-parallel configuration (0700–2300 LT); **06R / 06L** in the non-preferential East-parallel configuration; **06R** in the night-preferential North config (2300–0700 LT), **24L** non-preferential |
| Config logic | **Segregated day/night preferential configuration**, held to ~10 kt tailwind gust / 20 kt crosswind (considered from 7 kt tailwind); RWY 24R and RWY 06L departures are **restricted** to aircraft justifying a longer-length need than the adjacent runway provides |
| Transition altitude | 1,850 m / 6,000 ft MSL — verify no local override on current chart 🟧 |
| Take-off minima | Published per AIP; exact figures not confirmed this pass 🟧 |
| CTOT / flow regime | Full **A-CDM/FAM** (EUROCONTROL); real-time slot process; EOBT/ETA must match assigned slot or the flight plan may be refused 🟧 |
| De-icing on departure | Available — handling-agent-provided, no dedicated remote pad confirmed; season per snow plan (15 Nov–15 Mar) |

---

## 2. Stand → runway taxi routing & hot spots

- **Typical routings by runway:** Confirm the exact taxi with Ground (GMC)/handling on the day; routing differs by terminal/ramp and active configuration.
- **Hot spots / tight taxiways:** 🟥 AIP-flagged **runway-holding-position siting anomalies**: the RWY 02 approach surface is penetrated by the holding-point position on **TWY K7** (with size-based taxi restrictions through TWY LS for certain aircraft); the RWY 06L approach surface is penetrated by holding points on **TWY Z6/Z7/Z8/Y6/Y7/S14/N16**, with associated size-based taxi restrictions through those and several adjacent points. Code F aircraft (A388, A346, B748, AN124) are subject to additional named taxiway restrictions per the published GMC chart.
- **Runway crossings / read-back-required points:** Crossed-runway operations (RWY 02/20 crossing the 06/24 parallels) mean a departure or arrival on one pair may require an explicit crossing clearance relative to the other — expect read-back-heavy handling during a config that uses both.
- **Low-vis taxi caveats:** Follow-me guidance is mandatory for towed aircraft, corporate aviation, Code D+ aircraft to stands without visual docking guidance, helicopters, and Ramp 32 movements; available on request otherwise. 🟧

---

## 3. Runway / SID selection logic

- **By wind / config:** **Segregated day/night configuration.** Day (0700–2300 LT) preferential West-parallel: departures **24L and 24R** (24R restricted-use, §5); non-preferential East-parallel: departures **06R and 06L** (06L restricted-use, §5). Night (2300–0700 LT) preferential North crossed-runway: departures **06R**; non-preferential West single-runway: departures **24L**.
- **By departure direction:** Runway assignment follows the active segregated configuration; the SID itself carries destination-direction routing.
- **Noise / preferential-runway program:** RWY 24R and RWY 06L departures are **restricted to aircraft that can justify needing more runway length** than the adjacent (24L/06R) runway provides — this requires a documented performance/safety justification submitted within 7 days of the operation and a **mandatory RNAV1 SID "DNP" (Despegue No Preferente)**. This is the field's core noise/environmental-management lever.
- **Interaction with arrivals:** The mixed crossing (02/20) plus parallel (06L/24R, 06R/24L) layout means departures and arrivals can interact across runway pairs depending on the active configuration — brief the specific config in use via ATIS.

---

## 4. SID list (names only)

*Fly the charted current-AIRAC version. RNP/gradient notes are pointers only — verify on the chart.*

| SID (name) | Runway(s) | RNP / gradient note | Notes |
|---|---|---|---|
| Not confirmed in reachable research pass 🟧 | 24L / 24R / 06R / 06L | RNAV1 "DNP" (Despegue No Preferente) SID mandatory for restricted-use departures off 24R/06L | Jet aircraft unable to maintain 190 kt (02/06R/20/24L departures) or 210 kt (specified 24R segments) must notify Tower on first contact — pull the live current-AIRAC SID list before use |

---

## 5. Initial climb, speed & noise-abatement departure

- **Initial climb / speed:** Per SID/ATC; 250 KIAS below FL100 (EU/ICAO norm) — confirm current chart. Minimum-IAS segments exist on several SIDs (190 kt on 02/06R/20/24L departures at specified points, 210 kt on RWY 24R segments) — notify Tower on first contact if unable to comply.
- **Noise-abatement departure procedure (NADP):** No separately named NADP confirmed; the **restricted-use rule for RWY 24R/06L departures** (requiring longer-runway-need justification and a mandatory RNAV1 DNP SID) is the field's primary noise-management mechanism for the parallel-runway pairs. 🟧
- **Early turn / altitude constraints:** Published per SID — verify constraints on the current chart. IFR traffic contacts Barcelona APP on the SID-specific frequency before crossing 2,000 ft, unless instructed otherwise by Tower; if contact cannot be established, recontact Barcelona TWR.

---

## 6. Engine-out / emergency-turn & obstacle considerations

- **Engine-out / emergency-turn procedure:** No published EO/emergency-turn specifics confirmed in reachable sources — apply the operator/type EOSID for the assigned runway. 🟧
- **Close-in / distant obstacles:** Flat coastal delta at the field itself — no significant close-in terrain on any of the three runway pairs. The Mediterranean lies immediately south/east; no obstacle consideration beyond standard overwater departure awareness.
- **Special DP / obstacle DP:** Not confirmed in reachable sources — verify on current chart. 🟧

---

## 7. Low-vis takeoff & de-icing on departure

- **LVTO minima / procedure:** LVP procedures apply on the CAT II/III-equipped 06L/24R and 06R/24L pairs; specific LVTO RVR minima not confirmed this pass. 🟧
- **De-icing:** Provided **by the handling agent**; no dedicated airport remote pad confirmed this pass. Season per the published snow plan (15 Nov–15 Mar). See [`OM E — Cold Weather Operations`](../../../../../flight-ops/cold-weather-operations.md). 🟧

---

## 8. Clearance / CTOT & departure frequency sequence

- **Clearance delivery:** Barcelona CLR — **121.805 MHz**.
- **Frequency sequence:** **Clearances (121.805) → Ground/GMC (121.655 GMC C / 121.705 GMC N / 122.230 GMC S) → Tower (118.105 Local ARR+DEP / 118.330 Local DEP) → Barcelona APP (per SID-assigned sector, e.g. 121.155/125.250/126.505/127.700 APP-H or 119.105/135.280 APP-L).** Take the assigned frequency and confirm current chart. (Frequencies from Briefing §8.)
- **CTOT / slot handling:** Real-time slot process via the Airport Operations Center; the LEBL operations office may **refuse a flight plan whose EOBT/ETA does not match the assigned airport slot**. Full A-CDM/FAM discipline applies — keep TOBT/EOBT current. 🟧

---

## 9. Performance watch-items for our types

- **Field-length / weight:** 24L/24R and 06R/06L (2,660–3,412 m) are non-limiting for any K Global type.
- **Density altitude / temperature:** Non-issue at 14 ft, Mediterranean climate — no hot-and-high penalty.
- **Contamination / wet-runway:** Winter snow-plan season (15 Nov–15 Mar) is a low-frequency consideration at this mild coastal field; no specific contamination/braking-action statistic confirmed this pass. 🟧
- **Link to OM B:** See [`OM B — Fleet Capability Matrix`](../../../../../fleet/capability-matrix.md) — no field-length or field-elevation performance penalty for any K Global type at LEBL.

---

## 10. Gotchas

- **RWY 20 has no LDA and no approach — takeoff-only.** Never expect a landing clearance there.
- **RWY 24R and RWY 06L departures require a documented longer-runway-length justification plus a mandatory RNAV1 DNP SID** — do not assume free choice of the parallel-pair runway.
- **Segregated day/night configuration changes the active departure runway by time of day**, not purely by wind — check ATIS around shift boundaries (0700/2300 LT).
- **The RWY 02/06L runway-holding-position siting anomalies** create size-based taxi restrictions through several named taxiways — confirm the correct route for the aircraft's code letter.
- **Powerback (reverse-thrust stand exit) is prohibited.**
- **EOBT/ETA must match the assigned airport slot** — a mismatch risks the operations office refusing the flight plan outright.
- **Minimum-IAS SID segments (190/210 kt)** exist on several departures — notify Tower on first contact if the aircraft cannot comply.

---

## Open items (🟧 — confirm against AIP / current AIRAC)

- Current-AIRAC SID names and RNP/gradient specifics per runway.
- Take-off minima / exact LVTO RVR figures.
- Slot-coordination level and CTOT/ATFM specifics for LEBL.
- EOSID/engine-out procedure detail per runway.
- AD 2-LEBL §21 noise-procedure detail (referenced but not obtained this pass).

> **Live data — pull at planning:** wx/METAR/TAF, NOTAM (runway/taxiway/navaid/lighting), CTOT/ATFM, de-icing status. Not stored in this durable file.

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim charts inform content but are not listed here.*

- **AIP España (ENAIRE eAIP), AD 2-LEBL** (local regulations, communications) — AIRAC AMDT 2026/408, eff. 09-JUL-26 — https://aip.enaire.es/aip/contenido_AMDT/LE_Amdt_2026_408_AD_2_LEBL_es.html (retrieved 2026-07-26). *Preferential configuration, restricted-use runway rule, SID minimum-IAS notification, communications, taxi restrictions.*

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-26 | Built from AIP España (ENAIRE); K Global fields from live VAMSYS; 4-page pack. |
