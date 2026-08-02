# EGPF — Glasgow · Dispatch Page

**EGPF / GLA** · Glasgow (Paisley), Renfrewshire, Scotland, United Kingdom · Europe
**Version** v0.1 · **Updated** 2026-07-26 · **Status** Draft

> **Read-me:** Dispatcher/commercial planning aid for the sim, not a chart. Companion to the [EGPF Briefing](index.md) (informational), [Departure](departure.md) and [Arrival](arrival.md) pages. Static airport/commercial characteristics only; live fuel prices, slot files, CTOTs and demand are pulled at planning (see §Live-data). Any procedure/approach is named only — fly/verify the charted current-AIRAC version. Open 🟧 items are in §Open items. Flag legend 🟥 restriction/hazard · 🟧 caution/unverified · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| Role in network | **Destination / spoke** — not a K Global base `[VAMSYS mirror 2026-07-26]` |
| Terminals in use for us | Single terminal building; three airside piers (West/International, Central, East) — see §2 |
| Widebody stands available | **Stand 30** (Code F/A380-capable, West Pier) is the field's established heavy position; other West Pier stands (gates 27–36) take Code C/D/E with airbridges 🟧 |
| Slot regime | Not confirmed in reachable sources 🟧 |
| Curfew | **No hard curfew**; night-noise Ch.3 restriction 2330–0559 (2230–0459) on non-compliant jets 🟧 |
| Primary handling agent | Not singularly designated — four agents on field (Gama Aviation, Menzies Aviation, Signature Flight Support, Swissport GB Ltd); our contracted agent not confirmed 🟧 |
| Fuel supplier(s) | Pentland Aviation; Signature Aviation Services (bowser) — AVTUR Jet A-1, AVGAS 100LL |
| Customs / PoE for pax | **Yes — H24** |
| De-icing | **Available H24** |

---

## 2. Terminals & concourses

- **Terminal layout:** Glasgow operates from a **single terminal building** with two landside check-in zones and one centralised airside security area, feeding **three airside piers**: **West Pier** (the field's international/long-haul pier, the widest stands and the only Code F/airbridge-equipped position), **Central Pier** (short-haul/domestic, airbridge-equipped), and **East Pier** (low-cost/regional, no airbridges — steps and bus boarding). All arrivals, regardless of pier or check-in zone used for departure, are processed through a single arrivals hall.
- **Our operation uses:** Any K Global widebody or Code F movement should plan the **West Pier**, where Stand 30 and its Code F safeguarding procedures sit (see [Briefing §13](index.md)); narrowbody service would typically use Central or West Pier stands depending on gate availability. 🟧 Confirm exact gate assignment with handling — not independently sourced per-flight this pass.
- **International arrivals / CBP-equivalent hall:** International arrivals clear Border Force/immigration in the single ground-floor arrivals hall; no separate international terminal building exists at this field.
- **Notes:** 🟧 Public reporting describes a multi-year (2025–2027) airside pier renovation programme at this field, the first significant pier overhaul in roughly three decades — potentially relevant to stand availability/allocation during the works window; not reflected in the AIP extract used for this build. Confirm current stand status with handling if this becomes operationally relevant.

---

## 3. Stands / gates (by code letter & our fleet)

- **Widebody (Code E/F) stands:** **Stand 30** on the West Pier is the field's established heavy/Code F position, with dedicated AIP-published stand-safeguarding procedures (hold points, reduced centreline-to-object clearance, vehicle-holding controls) that vary by runway-in-use and CAT status — see [Briefing §13](index.md). Other West Pier stands (gates 27–36, all airbridge-equipped per tier-4 corroboration) are the field's Code C/D/E cluster. 🟧
- **Stands NOT usable by our types:** East Pier stands are bus-boarding, non-airbridge positions oriented to narrowbody/regional traffic — not sized or equipped for a Code E/F movement.
- **Remote / hardstand positions:** Not itemised in reachable sources; the field's stand list (per a VATSIM UK reference, network-sim/non-regulatory) runs from single digits through the 30s and includes a small number in the 60s/80s range, consistent with a compact single-pier-cluster layout rather than extensive remote hardstand — not an official count. 🟧
- **Contact vs remote for our arrivals:** Expect a contact West Pier stand for any widebody/Code F arrival; confirm with handling.
- **Ground-movement stand caveats:** Taxiway link **C1** is restricted to aircraft ≤30,000 kg MTWA (do not route a widebody via C1); the Stand 30 hold-point logic changes with runway-in-use and CAT condition — see [Briefing §13](index.md) and the Departure/Arrival taxi sections.

---

## 4. Slots, curfew & CTOT regime

- **Slot coordination level:** Not confirmed in reachable sources — do not assume a coordination level without verification. 🟧
- **Curfew / night restriction:** **No hard curfew identified.** The operative restriction is a **Chapter-3 noise-compliance gate**: jets not meeting ICAO Annex 16 Vol I Part II Ch.3 noise standards may not depart **2330–0559 (2230–0459)** except by discretionary written permission of the Operations Director. A Chapter-3-compliant modern jet is not restricted by this rule — it is materially narrower than EDDF's hard core night ban, and should not be over-stated as a full movement ban. 🟧
- **CTOT / flow control:** Not independently confirmed for this field; treat as standard UK/EUROCONTROL Network Manager ATFM practice pending confirmation. 🟧
- **Commercial impact:** Because the night restriction is Chapter-3-compliance-gated rather than a hard ban, the primary commercial guardrail here is confirming fleet noise-certification status against the 2330–0559 window, rather than avoiding the window outright as would be required at a hard-curfew field.

---

## 5. Handling agents & turnaround

- **Handling agent(s):** Four agents operate on field — **Gama Aviation, Menzies Aviation, Signature Flight Support, Swissport GB Ltd** — with H24 availability noted for at least some; the specific agent contracted for our operation is not confirmed in reachable sources. 🟧
- **Typical turnaround time for our type:** Not independently confirmed; VAMSYS mirror gives **taxi-in 12 min / taxi-out 14 min** for planning purposes `[VAMSYS mirror 2026-07-26]` — build the gate turn around these plus standard service times for the assigned type.
- **Services:** Push-back, GPU/PCA, water/lav, catering and cabin services expected as standard at a Code C–E contact stand; confirm Code F service provision (push-back tug capability, ground equipment) ahead of any Stand 30 movement. 🟧
- **Turnaround risk items:** Seasonal wildlife activity (Sept–Apr, see [Briefing §3.4](index.md)) can affect ground/apron operations tactically; the Stand 30 hold-point/vehicle-control regime adds ground-movement complexity around any Code F turn; the reported multi-year pier renovation programme (§2) is a watch-item for stand availability.

---

## 6. Load factors & seasonality

- **Demand peaks:** Not independently sourced for the K Global operation at this field; treat as standard UK regional/leisure demand pattern pending route-register confirmation. 🟧
- **Day-of-week / seasonal pattern:** Not confirmed this pass. 🟧
- **Cargo / belly capacity:** Not confirmed for this field; treat as a standard narrowbody/regional belly-cargo profile pending confirmation. 🟧
- **Connection banks:** Not applicable — EGPF is a spoke, not a hub, in the K Global network; connection timing is set by the network schedule against the base field(s), not locally.

---

## 7. Fuel

- **Supplier / into-plane:** **Pentland Aviation** and **Signature Aviation Services** (bowser) — AVTUR Jet A-1, AVGAS 100LL.
- **Uplift availability & hours:** **H24**, per the AD 2 EGPF operating-hours table. 🟩
- **Price / tankering angle:** Not independently sourced this pass — pull live at planning per [`OM E — Fuel Policy`](../../../../../flight-ops/fuel-policy.md). 🟧
- **Quality / freeze notes:** Standard Jet A-1; no cold-soak/fuel-freeze consideration specific to EGPF itself.

---

## 8. Customs / immigration & PoE for pax

- **Port of Entry:** Yes — single arrivals hall, H24 Customs & Immigration per the AD 2 EGPF hours table.
- **CBP-equivalent / immigration hours:** **H24**. 🟩
- **Pre-clearance / visa-transit notes:** Standard UK entry per nationality; no pre-clearance programme at this field.
- **Late/overnight/diversion caveat:** No hard curfew — the operative overnight constraint is the Chapter-3 noise-compliance gate (§4), not immigration-desk staffing, which is published H24.

---

## 9. De-icing provisioning & season

- **Availability:** **Available — H24**, per the AD 2 EGPF operating-hours table. 🟩
- **Season:** Not explicitly stated in the reachable extract; treat as a standard UK/Scottish winter de-icing season (roughly Oct–Apr) pending confirmation. 🟧
- **Provisioning:** Fluid type, pad-vs-gate provisioning and throughput at peak not confirmed this pass. 🟧
- **Commercial impact:** West-coast Scottish winter weather (§Briefing §14) combined with unconfirmed de-icing throughput data is a seasonal schedule-buffer consideration pending further detail.

---

## 10. Typical delays / reliability

- **Signature delay driver:** West-coast Atlantic-exposed weather (wind/rain) is the general seasonal expectation; the field's seasonal wildlife hazard (Sept–Apr, §Briefing §3.4) is a distinct, sourced operational-delay/diversion-risk factor around bird-control activity and strike-avoidance holding, where relevant.
- **Ground-delay / flow-program exposure:** Not independently confirmed for this field. 🟧
- **On-time reliability picture:** Not independently sourced; treat as a standard UK regional-field reliability profile pending confirmation. 🟧

---

## 11. Curfew & noise-charge commercial impact

- **Noise-charge regime:** Noise limits of 94 dB(A) day / 87 dB(A) night at monitoring points are published; whether these translate into a per-movement noise surcharge is not confirmed in reachable sources. 🟧
- **Curfew infringement consequence:** No hard curfew — the consequence of a Chapter-3-non-compliant departure inside 2330–0559 (2230–0459) without discretionary Operations Director permission would be a restriction on that specific movement, not a field-wide penalty regime.
- **Scheduling guardrails:** Confirm the assigned aircraft's ICAO Annex 16 Vol I Part II Ch.3 noise-certification status before planning any departure inside the 2330–0559 window; for a compliant type this is a non-issue, for a non-compliant type it is a hard gate absent discretionary permission.

---

## Open items (🟧 — confirm against AIP / operator data)

- Slot-coordination level for this field — not identified in reachable sources.
- Handling agent contracted for our operation, and confirmed minimum turnaround time.
- Exact gate/stand assignment practice for K Global widebody vs narrowbody service.
- De-icing season window, fluid provisioning and peak throughput.
- Demand pattern, cargo/belly capacity, and reliability data specific to the K Global operation at this field.
- Noise-charge/surcharge regime detail beyond the published dB monitoring-point limits.
- Current stand availability/allocation given the reported 2025–2027 airside pier renovation programme (public reporting, not AIP-confirmed).

> **Live data — pull at planning:** fuel price, slot/CTOT file, current ATFM/ground-delay program, demand/load, stand allocation, current bird-hazard NOTAMs in season. Not stored in this durable file.

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim material may inform content but is not listed here.*

- **UK NATS eAIP — AD 2 EGPF**, AIRAC effective 2022-06-16 — https://www.aurora.nats.co.uk/htmlAIP/Publications/2022-06-16-AIRAC/html/eAIP/EG-AD-2.EGPF-en-GB.html (retrieved 2026-07-26). *Hours, fuel, handling, RFF, noise limits.*
- AirportMapHQ — "Glasgow Airport Map 2026 — GLA Terminal & Gate Guide" — https://airportmaphq.com/glasgow-airport-map-terminal.html (retrieved 2026-07-26). *Tier-4 — terminal/pier/gate layout, airside pier-renovation programme context.*
- VATSIM UK — Glasgow (EGPF) airport reference — https://www.vatsim.uk/airports/EGPF (retrieved 2026-07-26). *Network-sim, not regulatory — stand-list/heavy-stand corroboration.*

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-26 | Built from UK AIP (NATS AIS); K Global fields from live VAMSYS; 4-page pack. |
