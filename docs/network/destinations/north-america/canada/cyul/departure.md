# CYUL — Pierre Elliott Trudeau Intl · Departure Page

**CYUL / YUL** · Dorval, Montréal, Québec, Canada · North America
**Version** v0.1 · **Updated** 2026-07-26 · **Status** Draft

> **Read-me:** Tactical departure aid for the sim, not a chart. Companion to the [CYUL Briefing](index.md), [Dispatch](dispatch.md) and [Arrival](arrival.md) pages. SIDs/procedures are listed **by name only or flagged not-yet-confirmed** — fly the charted current-AIRAC version; verify every gradient, minima and routing on the current chart. Static data only; live wx/NOTAM/CTOT are pulled at planning. Open 🟧 items are in §Open items. Flag legend 🟥 restriction/hazard · 🟧 caution/unverified · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| Usual departure runway(s) | **24L/24R** preferred (West operations, up to 5 kt tailwind); RWY 06R/24L normally used for departures |
| Config logic | Preferential Runway Program — West preferred to route departures over Lac Saint-Louis; wind-dependent otherwise |
| Transition altitude | 18,000 ft (Canadian domestic standard) |
| Take-off minima | Published per AIP; exact figures not confirmed this pass 🟧 |
| CTOT / flow regime | Not confirmed — assumed non-coordinated/schedule-facilitated 🟧 |
| De-icing on departure | Available — dedicated facility, 8 bays, up to 48 aircraft/hour |

---

## 2. Stand → runway taxi routing & hot spots

- **Typical routings by runway:** From the single main terminal, Ground/Apron (under **positive ATC control**) routes toward the assigned departure runway (normally 06R/24L, or the 24-config for West operations); confirm the exact taxi with Apron/Ground on the day.
- **Hot spots / tight taxiways:** 🟥 **South Ramp between gates 47 and 49 is prohibited to aircraft with wingspan ≥ 36 m (118 ft)** — route via **North Ramp only** for our widebody equipment. The **former RWY 10/28 is now Taxiway Charlie** and does not require a crossing clearance — confirm current taxiway identifiers (many taxiways off RWY 06L/24R have been renamed) rather than relying on legacy scenery/signage.
- **Runway crossings / read-back-required points:** Two-runway geometry (post-10/28 decommissioning) is comparatively simple; follow all apron positive-control instructions exactly (North Ramp/South Ramp/East Lane/West Lane).
- **Low-vis taxi caveats:** SMGCS/low-vis taxi routing applies in winter snow/freezing-rain conditions; follow-me availability not confirmed. 🟧

---

## 3. Runway / SID selection logic

- **By wind / config:** **West operations preferred** — RWY 24L/R used up to a 5 kt tailwind to keep departures over Lac Saint-Louis, south-west of the field, minimizing noise over populated areas.
- **By departure direction:** RWY 06R/24L is normally the departure/GA/secondary-arrival runway; RWY 06L/24R is normally reserved for arrivals (per the CZUL vACC briefing — network-sim cross-check).
- **Noise / preferential-runway program:** The West-preference program (above) is the field's defining noise-abatement logic; the CYUL2 (Montreal Two) departure procedure applies minimum altitudes before turns for noise-abatement purposes. 🟧
- **Interaction with arrivals:** With only two active parallel runways (post-10/28 decommissioning), departure/arrival interaction is comparatively straightforward versus a multi-runway CSPO hub (contrast with CYYZ) — confirm current dependent/independent operation status on the day.

---

## 4. SID list (names only)

*Fly the charted current-AIRAC version. RNP/gradient notes are pointers only — verify on the chart.*

| SID (name) | Runway(s) | RNP / gradient note | Notes |
|---|---|---|---|
| **CYUL2 ("Montreal Two")** 🟧 | All active runways | Runway-heading climb; non-jet maintain 3,000 ft, jet maintain 5,000 ft, then vectors — verify current-AIRAC gradient/structure | Sourced to CZUL (VATSIM vACC) 2024 pilot briefing — network-sim cross-check, not a primary AIP pull; verify against the live chart |

---

## 5. Initial climb, speed & noise-abatement departure

- **Initial climb / speed:** Per the CYUL2 procedure (tier-4/vACC-sourced): runway-heading climb, **non-jet aircraft maintain 3,000 ft / jet aircraft maintain 5,000 ft**, then expect vectors to the assigned route — do not turn on course or climb higher without an ATC instruction. Verify against the current-AIRAC SID before use. 🟧
- **Noise-abatement departure procedure (NADP):** Not independently confirmed by type/NADP-variant this pass; the West-preference Preferential Runway Program (§3) is the field's primary noise-abatement mechanism, and the departure procedure includes minimum altitudes before turns. 🟧
- **Early turn / altitude constraints:** Published per SID — verify constraints on the current chart. 🟧

---

## 6. Engine-out / emergency-turn & obstacle considerations

- **Engine-out / emergency-turn procedure:** No published EO/emergency-turn specifics confirmed in reachable sources — apply the operator/type EOSID for the assigned runway. 🟧
- **Close-in / distant obstacles:** Flat St. Lawrence Valley / island-of-Montréal plain — no significant close-in terrain or obstacle consideration identified this pass.
- **Special DP / obstacle DP:** Not confirmed in reachable sources — verify on current chart. 🟧

---

## 7. Low-vis takeoff & de-icing on departure

- **LVTO minima / procedure:** Not independently confirmed this pass — CYUL has no CAT III capability (contrast with CYYZ); RWY 06L's reported CAT II capability is the field's best low-vis asset, but its relevance is primarily to arrivals. Verify current LVTO minima on the chart. 🟧
- **De-icing:** Dedicated aircraft **deicing facility** — eight bays, 24 trucks, up to 48 aircraft/hour; positioned per ADM procedure (exact pad-to-runway sequencing not confirmed this pass). See [`OM E — Cold Weather Operations`](../../../../../flight-ops/cold-weather-operations.md). 🟧

---

## 8. Clearance / CTOT & departure frequency sequence

- **Clearance delivery:** Montréal Clearance **125.600** (H24 assumed). Pre-Departure Clearances (PDCs) are reported available on request per the CZUL vACC network reference — real-world PDC availability not independently confirmed. 🟧
- **Frequency sequence:** **Delivery 125.600 → Apron/Ramp 122.075 (East/West split reported) → Ground 121.900/121.000 (East/West split reported) → Tower 119.900/119.300 (North/South split reported) → Montréal Departure 124.650/120.425 (North/South split reported) 🟧 (discrepancy vs OurAirports 118.9 — see Briefing §8).** Take the assigned frequency and confirm current chart.
- **CTOT / slot handling:** Not confirmed — assumed non-coordinated/schedule-facilitated pending verification. 🟧

---

## 9. Performance watch-items for our types

- **Field-length / weight:** RWY 06L/24R (3,353 m) is non-limiting for any K Global type; RWY 06R/24L (2,926 m) should be checked per type/weight on hot or contaminated days.
- **Density altitude / temperature:** Non-issue at ~118 ft, temperate climate — no hot-and-high penalty.
- **Contamination / wet-runway:** Heavy winter snowfall (~220 cm/year) and freezing rain are the relevant seasonal consideration (§7); no specific contamination/braking-action data confirmed this pass. 🟧
- **Link to OM B:** See [`OM B — Fleet Capability Matrix`](../../../../../fleet/capability-matrix.md) — no field-length or field-elevation performance penalty for any K Global type on RWY 06L/24R.

---

## 10. Gotchas

- 🟥 **The former RWY 10/28 no longer exists as a runway — it is Taxiway Charlie.** Do not expect (or request) a runway-crossing clearance for it; older scenery/charts may mislead here.
- 🟥 **South Ramp between gates 47–49 is closed to wingspan ≥ 36 m** — route our widebody equipment via North Ramp only.
- **Apron is under positive ATC control** — follow North Ramp/South Ramp/East Lane/West Lane instructions exactly; no need to report reaching the gate.
- **West-operations preference (RWY 24L/R up to 5 kt tailwind)** — do not assume the reciprocal (06-config) is the default; check ATIS.
- **Weight-based curfew (>45,000 kg jets: 07:00–24:00 takeoff / 07:00–01:00 landing)** — build buffer into the last rotation to avoid needing an ADM exemption.
- **Heavy winter snowfall can develop quickly** — confirm current deicing-facility status before a winter departure; the field rarely suspends ops but expect queuing at peak.

---

## Open items (🟧 — confirm against AIP / current AIRAC)

- Current-AIRAC SID name/structure (CYUL2 sourced to a VATSIM vACC briefing, not primary AIP).
- Take-off minima / DVA exact figures.
- Start-up/push-back procedure detail (cross-bleed/APU notification) under the positive-ATC-controlled apron.
- NADP preference by type.
- LVTO minima specifics (no CAT III at this field).
- EOSID/engine-out procedure detail per runway.
- Real-world PDC availability/procedure (vACC-sourced only this pass).

> **Live data — pull at planning:** wx/METAR/TAF, NOTAM (runway/taxiway/navaid/lighting — confirm current Taxiway Charlie status), CTOT/flow status, deicing-facility status. Not stored in this durable file.

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim charts inform content but are not listed here.*

- **NAV CANADA — Aeronautical Information Publications** — https://www.navcanada.ca/en/aeronautical-information/publications.aspx (retrieved 2026-07-26).
- **CZUL (VATSIM Canada vACC) — CYUL Pilot Briefing, 2024** — https://czul.ca/pdf/CYUL_2024_Pilot_Briefing.pdf (retrieved 2026-07-26). *Network-sim document — CYUL2 departure procedure, preferential-runway program, apron control structure.*
- Aéroports de Montréal (ADM) — "Noise Abatement" — https://www.admtl.com/en-CA/community/soundscape-management/noise-abatement (retrieved 2026-07-26).
- Airport Improvement — deicing facility detail — https://airportimprovement.com/article/trudeau-intl-invests-deicing-services-and-glycol-recycling-facilities/ (retrieved 2026-07-26).

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-26 | Built from NAV CANADA (CFS/CAP); K Global fields from live VAMSYS; 4-page pack. |
