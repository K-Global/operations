# KSMF — Sacramento International · Dispatch Page

**KSMF / SMF** · Sacramento, California, United States · North America
**Version** v0.1 · **Updated** 2026-07-26 · **Status** Draft — commercial/handling specifics are largely tier-4 and flagged; VAMSYS network fields confirmed.

> **Read-me:** Dispatcher/commercial planning aid for X-Plane 11, not a chart. Companion to the [KSMF Briefing](index.md) (informational), [Departure](departure.md) and [Arrival](arrival.md) pages. Static airport/commercial characteristics only; live fuel prices, slot files, CTOTs and demand are pulled at planning (see §Live-data). Any procedure/approach is named only — fly/verify the charted current-AIRAC version. Open 🟧 items are in §Open items. Flag legend 🟥 restriction/hazard · 🟧 caution/unverified · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| Role in network | Destination alternate for the reference EDDF–KSFO OFP (filed alternate routing TRUKN2 TRUKN DCT FEVTA FEVTA1, RWY 17L) |
| VAMSYS category | **R** |
| Base | **No** |
| VAMSYS alternates | **KSJC** San Jose Intl, **KSFO** San Francisco Intl (see §8) |
| VAMSYS taxi time (out/in) | **10 / 12 min** |
| Terminals in use for us | Terminal A (13 gates) / Terminal B (19 gates), 32 passenger gates total; not confirmed which is used for a widebody diversion 🟧 |
| Widebody stands available | Not confirmed by code letter; ADG V-capable spot identified at West Ramp Spot 66 (GA ramp, irregular-ops only) 🟧 |
| Slot regime | None identified — no formal slot control found 🟩 |
| Curfew | None found — verify 🟧 |
| Primary handling agent | Modern Aviation International (sole FBO; IS-BAH registered) 🟧 |
| Fuel supplier(s) | 100LL, Jet-A via Modern Aviation International |
| Customs / PoE for pax | Yes — Customs Landing Rights Airport / PoE since 2006-10-05; hours/eAPIS not confirmed 🟧 |
| De-icing | Not published — Central Valley winters mild but foggy 🟧 |

---

## 2. Terminals & concourses

- **Terminal layout:** Terminal A (13 gates) and Terminal B (19 gates) = 32 passenger gates; separate cargo apron and a GA/FBO ramp (West Ramp, Modern Aviation).
- **Our operation uses:** Not formally assigned — KSMF is carried as a destination alternate for the reference EDDF–KSFO OFP, not a scheduled stop. A widebody diversion would normally use a terminal gate; the West Ramp ADG V spot (Spot 66) is an irregular-ops fallback only.
- **International arrivals / CBP hall:** Customs Landing Rights Airport / Port of Entry since 2006-10-05; specific hours and FIS-hall location not confirmed in reachable sources. 🟧
- **Notes:** Verify actual widebody gate/stand assignment process with handling before relying on a terminal gate for a diversion. 🟧

---

## 3. Stands / gates (by code letter & our fleet)

- **Widebody (Code E/F) stands:** Not confirmed by code letter in reachable sources. 🟧
- **Stands NOT usable by our types:** Not applicable to stands directly; the confirmed constraint is taxiway-based — **TWY Y4 and TWY B1 restricted to wingspan <118 ft (Group III)** — any widebody must avoid these (Briefing §13).
- **Remote / hardstand positions:** West Ramp Spot 66 is ADG V-capable (pushes onto TWY A after ATC approval) but is GA/FBO-ramp, not a normal widebody position — irregular-ops fallback only. 🟧
- **Contact vs remote for our arrivals:** Expect a contact terminal gate under normal circumstances; confirm with handling.
- **Ground-movement stand caveats:** Mandatory tail-to-north push-back from Terminal gates A1, A3, A5; West Ramp spots 63W/65W/66/F1 are tow-in/tow-out only via TWY B2 — cross-ref [Departure](departure.md) §2 and Briefing §13.

---

## 4. Slots, curfew & CTOT regime

- **Slot coordination level:** None identified in reachable sources. 🟩
- **Curfew / night restriction:** None found in reachable sources — verify. 🟧
- **CTOT / flow control:** No formal slot/ATFM regime confirmed; standard US domestic clearance delivery applies (Briefing §11). 🟧
- **Commercial impact:** As a diversion-only field, the operative commercial constraints are **ARFF Index C adequacy** and **FBO fuel-uplift scale** (§7), not slots or curfew.

---

## 5. Handling agents & turnaround

- **Handling agent(s):** Modern Aviation International — sole publicly-listed FBO, IS-BAH registered, NATA Safety 1st certified, contract fuel. Scheduled-carrier ramp handling agent not confirmed. 🟧
- **Typical turnaround time for our type:** Not applicable/not confirmed — KSMF is planned as a diversion alternate, not a scheduled turnaround point. 🟧
- **Services:** Not confirmed beyond FBO fuel service — verify GPU/PCA/water/catering availability if this field is ever used for an actual diversion. 🟧
- **Turnaround risk items:** FBO fuel-uplift scale (§7) and ARFF Index adequacy (§8/Briefing §16) are the material risk items for an actual widebody diversion turnaround.

---

## 6. Load factors & seasonality

- **Demand peaks:** Not applicable — KSMF carries no scheduled K Global demand; it is an OFP destination-alternate reference only.
- **Day-of-week / seasonal pattern:** Not applicable in the current role.
- **Cargo / belly capacity:** A separate cargo apron exists at the field, but not applicable to our current alternate-only role.
- **Connection banks:** Not applicable in the current role.

---

## 7. Fuel

- **Supplier / into-plane:** 100LL and Jet-A via Modern Aviation International — the **sole FBO**, GA/charter-oriented.
- **Uplift availability & hours:** Confirmed available; hours and into-plane scale for airline-size uplift not confirmed. 🟧
- **Price / tankering angle:** Not researched — pull live price at planning; **verify into-plane contract/capacity before planning any uplift beyond minimum alternate fuel** (Briefing §16). 🟥
- **Quality / freeze notes:** Standard Jet-A; low field elevation (27 ft) keeps cold-soak/density-altitude concerns minor relative to a high-elevation field. Tule-fog-season low temperatures are the more relevant seasonal consideration — see [Cold Weather Operations](../../../../../flight-ops/cold-weather-operations.md) (OM E) for ground-cold-weather method if de-icing is required.

---

## 8. Customs / immigration & PoE for pax

- **Port of Entry:** Yes — Customs Landing Rights Airport / Port of Entry designated 2006-10-05.
- **CBP / immigration hours:** Not confirmed — direct CBP.gov fact-sheet re-fetch returned no retrievable content (likely JS-rendered); genuinely unresolved from reachable sources. 🟧
- **Pre-clearance / visa-transit notes:** Advance-notice (eAPIS) requirement for international arrivals not confirmed. 🟧
- **Late/overnight/diversion caveat:** Customs hours are unconfirmed — material for a late-night/overnight international diversion; do not assume 24h staffing without local confirmation. 🟧

---

## 9. De-icing provisioning & season

- **Availability:** Not published in reachable sources. 🟧
- **Season:** Central Valley winters are mild but foggy (Tule fog, Nov–Mar) — confirm de-icing availability/procedure if operating in season low temperatures. See [Cold Weather Operations](../../../../../flight-ops/cold-weather-operations.md) (OM E).
- **Provisioning:** Fluid type/holdover/throughput not published — verify locally. 🟧
- **Commercial impact:** Not modelled in the current alternate-only role; would add ground-time risk in a rare winter cold event.

---

## 10. Typical delays / reliability

- **Signature delay driver:** **Tule fog (Nov–Mar)** — dense radiation fog that can drop visibility to near zero with little warning; secondary driver is wildfire-smoke haze (Jun–Oct). See Briefing §3.4/§14.
- **Ground-delay / flow-program exposure:** Not confirmed; no slot/flow-control regime found. 🟧
- **On-time reliability picture:** Not applicable in the current diversion-only role, but Tule-fog season should be weighted heavily in any live diversion decision favouring KSMF's CAT II/III runway (17R).

---

## 11. Curfew & noise-charge commercial impact

- **Noise-charge regime:** No numeric dB limit published; noise-sensitive area west of the field along the Sacramento River, with a direct instruction to avoid local jet turns and to fly VFR patterns to the east. 🟧
- **Curfew infringement consequence:** No hard curfew found — not applicable. 🟩
- **Scheduling guardrails:** Not applicable in the current alternate-only role; the noise-abatement missed-approach instruction (fly to runway departure end, don't break out early in VFR) applies to any operation here regardless of role.

---

## Open items (🟧 — confirm against AIP / operator data)

- Widebody gate/stand assignment process and scheduled-carrier ramp handling agent — not confirmed.
- CBP/customs hours and eAPIS/advance-notice requirement — CBP.gov fact sheet inaccessible (likely JS-rendered).
- Fuel into-plane capacity/contract scale at Modern Aviation FBO for airline-scale uplift.
- ARFF Index C adequacy vs the actual diverting widebody type, and any mutual-aid upgrade arrangement.
- De-icing provisioning detail (fluid type, holdover, throughput).

> **Live data — pull at planning:** fuel price, current NOTAM/ATFM status, demand/load (not applicable — alternate-only role), CBP staffing for the planned slot. Not stored in this durable file.

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim material may inform content but is not listed here.*

- AirNav — KSMF — https://www.airnav.com/airport/KSMF (retrieved 2026-07-25). *FBO/fuel data, PoE designation date — also underlies the [KSMF Briefing](index.md); see its Sources section for the full citation list.*
- U.S. CBP — Sacramento International Airport (KSMF) General Aviation Fact Sheet — https://www.cbp.gov/document/general-aviation/sacramento-international-airport-ksmf-fact-sheet-details — re-fetched 2026-07-25, returned no retrievable content.
- K Global VAMSYS network mirror — airport category, base flag, alternates and taxi-time fields (retrieved 2026-07-26).

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-26 | Built from FAA sources + Briefing; folded to 4-page pack. VAMSYS network fields (category R, non-base, alternates KSJC/KSFO, taxi 10/12) embedded in §1. Commercial/handling specifics remain largely open pending scheduled-carrier data, consistent with KSMF's alternate-only role. |
