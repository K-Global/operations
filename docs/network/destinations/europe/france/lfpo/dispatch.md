# LFPO — Paris-Orly · Dispatch Page

**LFPO / ORY** · Paris (Orly), Île-de-France, France · Europe
**Version** v0.1 · **Updated** 2026-07-26 · **Status** Draft

> **Read-me:** Dispatcher/commercial planning aid for the sim, not a chart. Companion to the [LFPO Briefing](index.md) (informational), [Departure](departure.md) and [Arrival](arrival.md) pages. Static airport/commercial characteristics only; live fuel prices, slot files, CTOTs and demand are pulled at planning (see §Live-data). Any procedure/approach is named only — fly/verify the charted current-AIRAC version. Open 🟧 items are in §Open items. Flag legend 🟥 restriction/hazard · 🟧 caution/unverified · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| Role in network | 🟧 **Not published / verify — LFPO is not in the VAMSYS airport database.** Real-world role is a major secondary Paris gateway and CDG's most natural geographic alternate — see [LFPG Briefing](../lfpg/index.md). |
| Terminals in use for us | 🟧 Not confirmed — real-world terminal structure is the unified **Orly 1/2/3/4** complex (see §2) |
| Widebody stands available | 🟧 Historically ~23 jetway stands (Orly 1/2, several widebody-capable) + ~15 jetway stands (Orly 4, some widebody-capable); current-day figures not independently confirmed |
| Slot regime | **IATA Level 3** — coordinator **COHOR** 🟥 |
| Curfew | **Hard curfew 23:30–06:00**; tightening from 25 Oct 2026 (§4) 🟥 |
| Primary handling agent | 🟧 Several third-party ground handlers operate at the field per the AIP; specific K Global contracted handler not confirmed |
| Fuel supplier(s) | Jet A-1 only; specific supplier not confirmed 🟧 |
| Customs / PoE for pax | **Yes — H24** `[AIP France AD 2 LFPO.3]` |
| De-icing | **Available** — 4 handling teams / 20 vehicles reported; season not independently confirmed |

---

## 2. Terminals & concourses

- **Terminal layout:** LFPO operates a single unified terminal complex since 2019, restructured from the former Orly-Ouest (West) and Orly-Sud (South) terminals into four numbered zones: **Orly 1 & 2** (former West, historically domestic/Corsica/EU-leaning traffic — gates A/B and C respectively), **Orly 3** (the newer junction building linking the other three, duty-free/lounge concentration), and **Orly 4** (former South, historically the airport's principal long-haul/international terminal — gates E/F). 🟧
- **Our operation uses:** Not confirmable from VAMSYS (no entry). Given the historical long-haul concentration at the former South terminal (now **Orly 4**), that would be the natural candidate for any K Global widebody operation — confirm with handling before finalising a stand plan. 🟧
- **International arrivals / CBP-equivalent hall:** Passport control is split by terminal zone; the unified single-terminal design (2019) allows landside movement between all four zones under one roof.
- **Notes:** 🟧 Exact current-day widebody gate/pier assignment is not independently confirmed — confirm with handling before finalising a stand plan.

---

## 3. Stands / gates (by code letter & our fleet)

- **Widebody (Code E/F) stands:** Historically concentrated in **Orly 1/2** (23 jetway-equipped stands, several widebody-capable) and **Orly 4** (15 jetway-equipped stands, some widebody-capable). Current-day allocation not independently confirmed. 🟧
- **Stands NOT usable by our types:** Narrowbody-oriented gates in the domestic-leaning Orly 1/2 zones are not sized for Code E/F — do not plan a widebody onto them without confirmation.
- **Remote / hardstand positions:** Not independently confirmed this pass; the AIP's apron-strength table (AD 2.8) shows a wide range of parking-area PCN values by zone (65–116), consistent with a mix of contact and remote-capable positions. 🟧
- **Contact vs remote for our arrivals:** Not confirmed — assume contact gate pending handling confirmation.
- **Ground-movement stand caveats:** A380/B747-8 movements are restricted to specific GMC-chart routings with weight limits (398 t / 600 t) and a mandatory follow-me car for A380 — see [Briefing §13](index.md).

---

## 4. Slots, curfew & CTOT regime

- **Slot coordination level:** **IATA Level 3** — coordinator **COHOR**. Coordinated opening times: Summer season 06:20–23:29 local (arrivals) / 06:00–23:19 local (departures); Winter season the same local clock. Runway capacity is additionally managed by a rolling-hour movement cap (a maximum count of movements per rolling 60-minute window, stepped in 10-minute increments), which varies seasonally and during runway-works periods — pull the current COHOR coordination parameters at planning. 🟥
- **Curfew / night restriction:** **Hard curfew 23:30–06:00 local**, in force since a 1968 decree and unchanged in its core hours as of the most recent confirmed reporting. **From 25 October 2026**, the regime tightens further: a **partial ban from 22:00** applies to the noisiest aircraft types (only the "most virtuous" — lowest-noise-classified — aircraft may operate after 22:00); the curfew reference point changes from **take-off time (23:30)** to **off-block/parking-position departure time (23:15)** — a stricter, earlier-triggering definition; and curfew exemptions are narrowed to **security, safety or public-order cases only** (previously broader categories existed). 🟥
- **Additional regulatory ceiling:** LFPO's total movements have been capped at **250,000 per year since a 1994 decree** — the airport operator's own published planning assumes stabilisation near 229,000 movements by 2035 as aircraft grow larger/fuller rather than more numerous. This is a network-capacity constraint distinct from the nightly curfew.
- **CTOT / flow control:** EUROCONTROL Network Manager ATFM/CTOT regulation applies as standard practice for a congested, slot-coordinated hub. 🟧
- **Commercial impact:** The hard curfew makes **last-rotation buffer** and **on-time performance into the last landing slot before 23:30** (and, from late 2026, before the earlier 22:00/23:15 reference points for noise-sensitive fleet types) the dominant scheduling guardrails at this field — more binding than at a typical slot-coordinated hub because there is **no late-arrival tolerance**: a delayed arrival that cannot land before the curfew boundary has no routine recourse but diversion.

---

## 5. Handling agents & turnaround

- **Handling agent(s):** Several third-party ground handlers are named in the AIP handling-services register for cargo/ramp/passenger services at the field; the specific handler contracted for our operation is not confirmed in reachable public sources. 🟧
- **Typical turnaround time for our type:** Not confirmed — no VAMSYS mirror exists for this field. 🟧
- **Services:** Push-back, GPU/PCA, potable water/lav, catering and cabin services are standard-provision at a major-airport Code E/F stand; oxygen and related servicing is available from operating airlines per the AIP.
- **Turnaround risk items:** De-icing-pad throughput in winter, the field's dense multi-airport shared-CTR arrival flow (possible extended vectoring compressing the turn window), and the **curfew boundary itself** (a late inbound risks missing the last usable slot before 23:30) are the principal turnaround risk items here.

---

## 6. Load factors & seasonality

- **Demand peaks:** Not independently sourced for a K Global operation — no VAMSYS entry exists. 🟧
- **Day-of-week / seasonal pattern:** Not confirmed. 🟧
- **Cargo / belly capacity:** Not confirmed for this field specifically. 🟧
- **Connection banks:** Not confirmed — dependent on the network schedule once a K Global routing to this field exists.

---

## 7. Fuel

- **Supplier / into-plane:** Jet A-1 only (100LL not available); specific into-plane provider not confirmed in reachable public sources. 🟧
- **Uplift availability & hours:** **Published 0500–2230 local only** — **not provided 2230–0500 except by special arrangement negotiated with local fuelling services** `[AIP France AD 2 LFPO.3]`. 🟥 This is a genuine gap against the curfew boundary (23:30–06:00): a late-evening turn scheduled close to the curfew has roughly a one-hour window (2230–2330) where routine fuel service is not guaranteed.
- **Price / tankering angle:** Not confirmed — assess relative to network tankering policy at planning. See [`OM E — Fuel Policy`](../../../../../flight-ops/fuel-policy.md).
- **Quality / freeze notes:** Standard Jet A-1; discharge rates by truck reported up to 15,000 L/min for higher-flow positions; hydrant system rated 900 m³/hr.

---

## 8. Customs / immigration & PoE for pax

- **Port of Entry:** Yes — customs and immigration (Douanes et police) confirmed **H24** `[AIP France AD 2 LFPO.3]`.
- **CBP-equivalent / immigration hours:** **H24**, per the primary AIP. 🟩
- **Pre-clearance / visa-transit notes:** Standard Schengen/non-Schengen entry per nationality; no pre-clearance programme at LFPO.
- **Late/overnight/diversion caveat:** The **hard curfew (23:30–06:00)** is the dominant late/overnight constraint here rather than immigration-desk staffing (which is H24) — a delayed arrival unable to land before the curfew boundary has no routine recourse but diversion. 🟥

---

## 9. De-icing provisioning & season

- **Availability:** **Provided** per the AIP (AD 2.3: "Assuré" / "Provided"); **4 handling teams and 20 de-icing vehicles** reported (AD 2.4). 🟩
- **Season:** Not independently confirmed for LFPO specifically — Central European de-icing season (typically Oct–Apr) assumed pending confirmation. 🟧
- **Provisioning:** Fluids include **potassium formate (KFOR)**, **sodium formate (NAFO)**, and **Propylene Glycol Type 1 and Type 4 (PG)**; runway/taxiway/apron treated simultaneously per the AIP's snow-plan principles, with the stated objective of avoiding a full platform closure during snow/ice operations.
- **Commercial impact:** Winter fog/low-vis events combined with de-icing-pad queuing are the principal seasonal delay-risk drivers, compounded by the field's **CAT III capability being limited to RWY 06/24/07/25** (not RWY 02/20) — a config change to the secondary runway pair during a low-vis event sharply reduces capability. See [`OM E — Cold Weather Operations`](../../../../../flight-ops/cold-weather-operations.md).

---

## 10. Typical delays / reliability

- **Signature delay driver:** Winter Paris-basin fog/low-visibility events, compounded by the field's dense shared multi-airport CTR traffic flow (De Gaulle/Le Bourget/Villacoublay). 🟧
- **Ground-delay / flow-program exposure:** High, given the slot-coordinated Level 3 regime, the rolling-hour runway-movement cap, and the 250,000-movements/year regulatory ceiling — expect EUROCONTROL flow management in peak/adverse conditions. 🟧
- **On-time reliability picture:** The **hard curfew is the field's single largest schedule-integrity risk** — any operational delay on the last rotation of the day carries a real risk of falling outside the 23:30–06:00 window with no routine late-arrival tolerance. 🟥

---

## 11. Curfew & noise-charge commercial impact

- **Noise-charge regime:** Not confirmed in reachable sources beyond the curfew/movement-cap regime itself this pass. 🟧
- **Curfew infringement consequence:** The **hard curfew 23:30–06:00** is a **hard movement restriction**, not merely a charge — French authorities have historically enforced it as an outright prohibition outside narrow exemption categories (from 25 Oct 2026, narrowed further to security/safety/public-order cases only).
- **Scheduling guardrails:** Build buffer into the last rotation of the day so a normal operational delay does not push a landing or departure past the curfew boundary; treat any schedule slipping toward 23:00–23:30 as a **diversion-risk trigger** for inbound legs. From late 2026, noise-sensitive fleet types should additionally budget against the earlier **22:00 partial ban** and the stricter **23:15 off-block reference time**.

---

## Open items (🟧 — confirm against AIP / operator data)

- **LFPO is not in the VAMSYS airport database** — role in network, terminal/stand assignment, handling agent, turnaround time, demand pattern and preferred-alternate status are all unconfirmed; do not assume any of them.
- Current terminal/gate assignment for a K Global widebody operation.
- Ground handling agent(s) contracted for our operation and confirmed minimum turnaround time.
- Fuel into-plane provider and any special-arrangement procedure for the 2230–0500 non-published hours.
- De-icing season months specific to LFPO (assumed Central European Oct–Apr pending confirmation).
- EUROCONTROL CTOT/ATFM specifics for LFPO (general practice assumed, not independently sourced).
- Noise-charge regime detail (surcharge structure, if any, beyond the curfew/movement-cap mechanism).
- The **25 October 2026 curfew tightening** is sourced to secondary reporting on a government announcement — reconfirm against a primary regulatory text once in force.
- Day-of-week/seasonal load pattern and belly-cargo capacity specific to any K Global operation at this field.

> **Live data — pull at planning:** fuel price, slot/CTOT file, current ATFM/ground-delay program, demand/load, stand allocation, current COHOR coordination parameters, current AUP/UUP or RAD status in the Paris CTR/TMA. Not stored in this durable file.

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim material may inform content but is not listed here.*

- **SIA France eAIP, AD 2 LFPO** (AIRAC cycle effective 11 Jun 2026, package dated 09 Jul 2026) — https://www.sia.aviation-civile.gouv.fr/media/dvd/eAIP_09_JUL_2026/FRANCE/AIRAC-2026-07-09/html/eAIP/FR-AD-2.LFPO-fr-FR.html (retrieved 2026-07-26). *Operating hours, fuel hours, customs hours, de-icing provisioning, handling register.*
- COHOR — Paris Orly Airport (ORY/LFPO) — https://www.cohor.org/en/airports/paris-orly-airport-ory-lfpo/ (retrieved 2026-07-26). *Slot-coordination level, coordinated opening times, runway-capacity rolling-hour mechanism, regulatory decree register.*
- Aviation Week — "France Imposes Stricter Night Curfew To Curb Paris Orly Airport Noise," 2025-07-10 (retrieved 2026-07-26). *2026 curfew-tightening announcement.*
- FL360aero — "Stricter curfew introduced to reduce noise pollution at Orly Airport," 2025-07-11 — https://fl360aero.com/detail/stricter-curfew-introduced-to-reduce-noise-pollution-at-orly-airport-residents-expected-more/2142 (retrieved 2026-07-26). *Curfew hours, 250,000/year movement cap, 2035 stabilisation forecast, 2026 tightening detail.*
- Wikipedia / Aviation24.be — terminal structure (Orly 1/2/3/4) — see Briefing page for full citations.

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-26 | Built from SIA France eAIP; K Global fields from live VAMSYS; 4-page pack. |
