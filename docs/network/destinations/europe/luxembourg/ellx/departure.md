# ELLX — Luxembourg-Findel · Departure Page

**ELLX / LUX** · Findel (Niederanven), near Luxembourg City, Luxembourg · Europe
**Version** v0.1 · **Updated** 2026-07-26 · **Status** Draft

> **Read-me:** Tactical departure aid for the sim, not a chart. Companion to the [ELLX Briefing](index.md), [Dispatch](dispatch.md) and [Arrival](arrival.md) pages. SIDs/procedures are listed **by name only** — fly the charted current-AIRAC version; verify every gradient, minima and routing on the current chart. Static data only; live wx/NOTAM/CTOT are pulled at planning. Open 🟧 items are in §Open items. Flag legend 🟥 restriction/hazard · 🟧 caution/unverified · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| Usual departure runway(s) | **06 or 24** — single runway, wind-driven; no explicit AIP preferential-runway rule found 🟧 |
| Config logic | Wind-driven (no crosswind alternative); low-visibility departures are unaffected by the CAT I/CAT III approach asymmetry (relevant to arrivals, not departures) |
| Transition altitude | 5,000 ft AMSL |
| Take-off minima | **RVR 125 m hard floor** (emergency excepted); further chart-specific minima not published / verify 🟧 |
| CTOT / flow regime | Not confirmed as slot-coordinated; treat as standard EUROCONTROL ATFM/CTOT practice pending confirmation 🟧 |
| De-icing on departure | Available — **on-stand only**, H24, KFOR/NAFO fluids |

---

## 2. Stand → runway taxi routing & hot spots

- **Typical routings by runway:** From the cargo apron (P7), Business Aviation apron (P5) or passenger stands, Ground/Tower routes toward the assigned runway end via taxiways A1/A2/B-series/C/D/E/F/G/H as applicable; confirm the exact taxi with Tower/Apron on the day (no separate Ground frequency was found — see Briefing §8).
- **Hot spots / tight taxiways:** 🟥 Intersection take-off points on **TWY F/G/H** (RWY06) and **TWY C/F** (RWY24) are **barred to WTC 'H' aircraft ≥136,000 kg** — confirm the assigned departure point is compatible with the aircraft's weight category before accepting an intersection departure. The **TWY B1 "green lane"** is a designated vehicle corridor requiring Tower authorisation to cross — expect additional ground-vehicle activity here given the field's heavy freight/handling-vehicle traffic.
- **Runway crossings / read-back-required points:** Not detailed in reachable sources beyond the intersection/green-lane items above — expect explicit crossing instructions at any runway/taxiway junction. 🟧
- **Low-vis taxi caveats:** LVP procedures apply consistent with RWY24's CAT II/III environment; published LVP holding points are **TWY B4** (RWY06 departures, CAT II/III) and **TWY A** (RWY24 departures, CAT II/III), with **TWY C** usable as an intermediate take-off position. Follow-me availability not confirmed. 🟧

---

## 3. Runway / SID selection logic

- **By wind / config:** Single runway (06/24) — wind is the sole determinant of the operating direction; there is no crosswind-runway alternative. A crosswind beyond type limits is a diversion driver, not a runway-change option.
- **By departure direction:** No AIP-stated directional preference found; runway selection follows wind. 🟧
- **Noise / preferential-runway program:** The published SID set itself constitutes the noise-abatement procedure — a minimum 3.3% climb gradient to 4,000 ft QNH applies (based on 250 KIAS/25° bank/ISA+15°C) with the quietest available aircraft configuration required, unless ATC instructs otherwise.
- **Interaction with arrivals:** Single-runway field — departures and arrivals share the one runway, and the field carries an unusually heavy freighter/passenger/GA traffic mix for its size (public reporting cites ~100,000 annual movements). Expect sequencing pressure between departure and arrival streams even in good weather.

---

## 4. SID list (names only)

*Fly the charted current-AIRAC version. RNP/gradient notes are pointers only — verify on the chart.*

| SID (name) | Runway(s) | RNP / gradient note | Notes |
|---|---|---|---|
| DIK5T, ASMOX4T, EXCOS4T, GTQ4T, MMD2T, RAPOR8T | 06 | Conventional SIDs; min. 3.3% climb gradient to 4,000 ft QNH | Verify current chart |
| LNO1P, ARCKY1P, RAPOR1P, MMD1P, ASMOX1P, EXCOS1P, GTQ3P | 06 | RNAV1 | Verify RNP-1 equipage/gradient on current chart. See [`OM E — PBN and RNP Operations`](../../../../../flight-ops/pbn-and-rnp-operations.md) |
| DIK5X, ASMOX4Z, EXCOS4X, GTQ4X, MMD2X, RAPOR8X | 24 | Conventional SIDs; min. 3.3% climb gradient to 4,000 ft QNH | Verify current chart |
| LNO1R, ARCKY1R, RAPOR1R, MMD1R, ASMOX1R, EXCOS2R, GTQ2R | 24 | RNAV1 | Verify RNP-1 equipage/gradient on current chart |

---

## 5. Initial climb, speed & noise-abatement departure

- **Initial climb / speed:** Per SID/ATC; minimum climb gradient **3.3% to 4,000 ft QNH** based on 250 KIAS/25° bank/ISA+15°C, unless ATC instructs otherwise.
- **Noise-abatement departure procedure (NADP):** The published SIDs themselves constitute the noise-abatement procedure — climb to 4,000 ft is to be flown with the "most noise-abatement-efficient" aircraft configuration/setting. No separate fleet-wide NADP1/NADP2 designation confirmed beyond this. 🟧
- **Early turn / altitude constraints:** Published per SID — verify current chart for exact turn/altitude constraints.

---

## 6. Engine-out / emergency-turn & obstacle considerations

- **Engine-out / emergency-turn procedure:** No published EO/emergency-turn specifics confirmed in reachable sources — apply the operator/type EOSID for the assigned runway. 🟧
- **Close-in / distant obstacles:** AIP-published **unlit, unmarked vegetation obstacles** stand close to both runway ends (roughly 1,195–1,291 ft elevation, i.e. ~30–60 ft above local terrain) — a relevant close-in obstacle consideration on initial climb from either runway. No MSA/obstacle-clearance altitude table beyond the general PANS-OPS rule is available in reachable sources. 🟧
- **Special DP / obstacle DP:** Not confirmed in reachable sources — verify on current chart. 🟧

---

## 7. Low-vis takeoff & de-icing on departure

- **LVTO minima / procedure:** Published **RVR take-off minimum is a hard 125 m floor** (emergency departures excepted); LVP holding points are **TWY B4** (RWY06, CAT II/III) and **TWY A** (RWY24, CAT II/III), with **TWY C** usable as an intermediate take-off position. Further LVTO chart-specific detail not published / verify. 🟧
- **De-icing:** **On-stand only** (no dedicated remote pad) — **KFOR** (potassium formate) and **NAFO** (sodium formate) fluids, H24. Because de-icing occurs at the gate/stand rather than a remote pad, plan for potential stand-dwell extension during a winter de-icing event. See [`OM E — Cold Weather Operations`](../../../../../flight-ops/cold-weather-operations.md).

---

## 8. Clearance / CTOT & departure frequency sequence

- **Clearance delivery:** Luxembourg Delivery **121.855** (H24).
- **Frequency sequence:** **Delivery 121.855 → Tower 118.105 (H24 — no separate Ground frequency published, see Briefing §8) → Luxembourg Radar/Approach 120.885 (primary) / 120.165 or 119.950 (spare).** Take the assigned frequency and confirm current chart. (Frequencies from Briefing §8.)
- **CTOT / slot handling:** Not confirmed as slot-coordinated in reachable sources; treat as subject to standard EUROCONTROL Network Manager ATFM/CTOT practice pending confirmation. 🟧

---

## 9. Performance watch-items for our types

- **Field-length / weight:** The single 4,002 m runway is non-limiting for any K Global type. Intersection take-offs are published but **barred to WTC 'H' aircraft ≥136,000 kg** at several named taxiways on both ends (§2) — confirm a full-length departure for any heavier type.
- **Density altitude / temperature:** Non-issue — temperate climate, no hot-and-high penalty despite the field's 1,234 ft elevation.
- **Contamination / wet-runway:** Winter icing/de-icing season is the relevant seasonal consideration (§7); no specific contamination/braking-action data is published. 🟧
- **Link to OM B:** See [`OM B — Fleet Capability Matrix`](../../../../../fleet/capability-matrix.md) — no field-length or field-elevation performance penalty for any K Global type at ELLX. **Code F aircraft other than the field's largest routinely accepted freighter type require 72-hour advance special permission** — confirm before scheduling a heavy widebody freighter movement.

---

## 10. Gotchas

- **Single runway 06/24 — no crosswind alternative.** A crosswind beyond type limits is a diversion driver, not a runway-change option.
- **RWY06's slope profile is AIP-flagged as capable of producing an optical illusion**, primarily on approach — be aware of the runway's longitudinal grade change even from the departure side.
- **Intersection take-offs are barred for WTC 'H' aircraft ≥136,000 kg** at several named taxiways — do not assume an intersection departure is available for a heavier type without checking the weight-category restriction.
- **RVR take-off minimum of 125 m is a hard floor** — no departure below that value except emergency.
- **Unlit, unmarked vegetation obstacles stand close to both runway ends** — a relevant close-in consideration on initial climb.
- **Code F aircraft other than the field's largest routinely accepted freighter type require 72-hour advance special permission** — this is a planning-lead-time item, not a same-day request.
- **Engine run-ups are confined to TWY I and time-windowed** — prohibited outright on Sundays and public holidays; a 2-hour prior approval from the Airport Duty Manager is required.
- **The curfew (2200–0500 local) has no confirmed blanket freight exemption** — a delayed late-day departure risks being prohibited outright; build buffer into the last rotation (see Dispatch §4).

---

## Open items (🟧 — confirm against AIP / current AIRAC)

- Take-off minima beyond the published RVR 125 m floor (DVA/chart-specific figures).
- Start-up/push-back procedure detail.
- CTOT/slot-coordination status and EUROCONTROL ATFM specifics for ELLX.
- NADP1/NADP2 fleet-wide designation (only the general 3.3%-gradient/quietest-setting rule is confirmed).
- EOSID/engine-out procedure detail per runway.
- Runway-crossing/read-back-point detail beyond the intersection and green-lane items already captured.

> **Live data — pull at planning:** wx/METAR/TAF, NOTAM (runway/taxiway/navaid/lighting), CTOT/ATFM, de-icing status, current curfew-exemption NOTAMs. Not stored in this durable file.

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim charts inform content but are not listed here.*

- **Luxembourg AIP, AD 2 ELLX** (mirrored via the Belgian AIS eAIP, skeyes) — https://ops.skeyes.be/html/belgocontrol_static/eaip/eAIP_Main/html/eAIP/EB-AD-2.ELLX-en-GB.html (retrieved 2026-07-26). *SID index, communications, LVP holding points, obstacle table, de-icing provisioning.*
- OurAirports — https://ourairports.com/airports/ELLX/frequencies.html (retrieved 2026-07-26). *Frequency cross-check.*

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-26 | Built from national AIP; K Global fields from live VAMSYS; 4-page pack. |
