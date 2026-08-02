# ESSA — Stockholm Arlanda · Dispatch Page

**ESSA / ARN** · Sigtuna, Stockholm County, Sweden · Europe
**Version** v0.1 · **Updated** 2026-07-26 · **Status** Draft — LFV AIP-derived, K Global build

> **Read-me:** Dispatcher/commercial planning aid for the sim, not a chart. Companion to the [ESSA Briefing](index.md) (informational), [Departure](departure.md) and [Arrival](arrival.md) pages. Static airport/commercial characteristics only; live fuel prices, slot files, CTOTs and demand are pulled at planning (see §Live-data). Any procedure/approach is named only — fly/verify the charted current-AIRAC version. Open 🟧 items are in §Open items. Flag legend 🟥 restriction/hazard · 🟧 caution/unverified · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| Role in network | **Destination** `[VAMSYS mirror 2026-07-26]` |
| Terminals in use for us | **Terminal 5** (primary international/Schengen-non-Schengen hub, post-2024–2025 consolidation) most likely for our long-haul operation — not independently confirmed 🟧 |
| Widebody stands available | Terminal 5: 31 bridge-connected stands, some A380-capable since 2018; Terminal 2: 8 bridge-connected stands |
| Slot regime | **Mandatory allocation for essentially all flights** per AIP language — reads as fully coordinated; exact current IATA level not confirmed 🟥 |
| Curfew | None found in reachable sources — verify current AIP/Swedavia noise regulations 🟧 |
| Primary handling agent | Not confirmed for our operation; historical de-icing/handling vendors on field include Menzies Aviation, Moose Aviation, Nordic Aero (dated list) 🟧 |
| Fuel supplier(s) | Jet A-1 via hydrant, "no limitations" — specific supplier brand not confirmed 🟧 |
| Customs / PoE for pax | **Yes** — Terminal 5 primary hub; Terminal 3 has **no** customs facility |
| De-icing | **Available** — runway-dependent routing (remote Apron M for 01R/19L; near-terminal for 01L/19R and 08/26) |

---

## 2. Terminals & concourses

- **Terminal layout:** Four terminals (2, 3, 4, 5 — there has never been a Terminal 1). **Terminal 2** (opened 1990): Air France, KLM, easyJet, Transavia, Vueling, Czech Airlines. **Terminal 3** (opened 1990, walk-out/airstair boarding, no jet bridges, **no customs facility**): domestic/regional (BRA, PopulAir, Jonair, Västflyg). **Terminal 4** (opened 1983, "T5 – C Gates," 14 bridge-connected stands): low-cost carriers (Ryanair, Wizz Air); **as of October 2025 has no independent check-in/security/customs/baggage of its own** — fully folded into Terminal 5 operationally, airside-only pier extension. **Terminal 5** (opened 1976 as "Arlanda International," renamed 1992, 31 bridge-connected stands across Piers D/E/F): SAS/Norwegian hub, handles both Schengen and non-Schengen, hosts the Sky City landside concourse above Arlanda Central Station.
- **Our operation uses:** Most likely **Terminal 5** for a scheduled long-haul international arrival/departure given its widebody/A380-capable gates and full customs facility — not independently confirmed for our specific operation. 🟧
- **International arrivals / CBP-equivalent hall:** Terminal 5 is the confirmed customs/immigration hub (H24) following the 2022 airside T4↔T5 connection and the October 2025 full consolidation. Terminal 3 passengers requiring customs are bussed to Terminal 5.
- **Notes:** 🟧 Terminal programme underwent a multi-year consolidation (2022 airside T4/T5 link; October 2025 full T4 facility fold-in) — confirm current gate/concourse assignment with handling before finalising a stand plan.

---

## 3. Stands / gates (by code letter & our fleet)

- **Widebody (Code E/F) stands:** Terminal 5 Piers D/E/F (31 bridge-connected stands total across the terminal), with **some gates A380-capable since 2018**; Terminal 2 (8 bridge-connected stands) is a secondary widebody-capable cluster. 🟧
- **Stands NOT usable by our types:** Terminal 3's walk-out/airstair positions and Terminal 4's low-cost-carrier gates are not expected to be sized/configured for scheduled widebody long-haul — do not plan a widebody there without confirmation.
- **Remote / hardstand positions:** Not confirmed in reachable public sources beyond the dedicated de-icing Apron M positions (M5–M9), which are a de-icing stop, not a parking stand. 🟧
- **Contact vs remote for our arrivals:** Expect a contact widebody gate at Terminal 5 for a scheduled international arrival.
- **Ground-movement stand caveats:** Taxiway bridges connect the main terminal complex to RWY 01R/19L; arriving aircraft must not use an exit taxiway requiring a turn >90°; max wingspan 24 m on Apron S between SA–SC; jet-blast restriction on Apron F when another aircraft is parked behind — see [Briefing §13](index.md).

---

## 4. Slots, curfew & CTOT regime

- **Slot coordination level:** AIP language describes **mandatory slot allocation for essentially all flights** (exemptions limited to weather/medical/technical/security diversions, SAR, daylight VMC helicopter ops) — this reads as a **fully-coordinated regime**, stronger than a simple Level 2 designation. Slot coordinator of record per an older AIP cycle: **Airport Coordination Sweden (ACS)** — confirm current coordinator. 🟥
- **Curfew / night restriction:** No explicit curfew found in reachable sources — do not assume unrestricted night ops without a direct AIP/Swedavia confirmation. 🟧
- **CTOT / flow control:** EUROCONTROL Network Manager ATFM/CTOT regulation applies as standard practice for a congested, slot-coordinated Nordic hub. 🟧
- **Commercial impact:** Schedule integrity (on-time pushback/slot compliance) has direct network consequences given the near-universal mandatory-slot regime.

---

## 5. Handling agents & turnaround

- **Handling agent(s):** **Ground handling is mandatory for all flights** (hospital/state-aircraft exempt) — specific handler for our operation not confirmed; historical (dated) vendor roster on field includes Menzies Aviation, Moose Aviation, Nordic Aero (de-icing-specific). 🟧
- **Typical turnaround time for our type:** Not independently confirmed; VAMSYS mirror gives **taxi-in 15 min / taxi-out 17 min** for planning purposes `[VAMSYS mirror 2026-07-26]` — build the gate turn around these plus standard widebody service times.
- **Services:** Push-back (compulsory at nose-in stands, power-back never a substitute), GPU/PCA, potable water/lav, catering and cabin services expected at a major Nordic-hub Code E/F stand.
- **Turnaround risk items:** Gate availability during peak banks (post-consolidation T4/T5 transition), de-icing-pad throughput in winter (runway-dependent routing adds complexity — see §9), and taxiway-bridge routing to/from RWY 01R/19L can each add unplanned turn time.

---

## 6. Load factors & seasonality

- **Demand peaks:** As a major Nordic hub (home base for SAS and Norwegian Air Shuttle generally), ESSA carries year-round European and intercontinental demand; specific K Global demand pattern not independently sourced. 🟧
- **Day-of-week / seasonal pattern:** Not independently sourced for K Global's specific operation — treat as standard European-capital business/leisure mix pending network-schedule confirmation. 🟧
- **Cargo / belly capacity:** Arlanda hosts a Cargo City with scheduled freighter operators (Korean Air Cargo, Lufthansa Cargo, Turkish Airlines Cargo) plus express integrators and An-124 outsize charters — confirm K Global belly-cargo uplift plans against payload at planning. 🟧
- **Connection banks:** Cross-ref the route register for inbound/outbound wave structure relevant to this destination.

---

## 7. Fuel

- **Supplier / into-plane:** Jet A-1 via hydrant fuelling, reported "no limitations"; delivered to the field by ship to Gävle, rail to Brista, then pipeline — specific into-plane brand/agent not confirmed. 🟧
- **Uplift availability & hours:** H24 per AIP. 🟩
- **Price / tankering angle:** Assess price differential vs the departure field per leg — pull live at planning. See [`OM E — Fuel Policy`](../../../../../flight-ops/fuel-policy.md).
- **Quality / freeze notes:** Standard Jet A-1; the field's notable cold-weather risk is airframe **cold-soak/clear-ice** on the ground overnight (§3.4 Briefing) rather than a fuel-freeze consideration.

---

## 8. Customs / immigration & PoE for pax

- **Port of Entry:** Yes — **Terminal 5** is the confirmed Schengen/non-Schengen customs/immigration hub (H24) following the 2022/2025 consolidation.
- **CBP-equivalent / immigration hours:** H24 per AIP. 🟩
- **Pre-clearance / visa-transit notes:** Standard Schengen/non-Schengen entry per nationality; **Terminal 3 has no customs facility** — arriving passengers there are bussed to Terminal 5.
- **Late/overnight/diversion caveat:** No explicit curfew found; customs/immigration operate H24, so late/overnight arrivals are not expected to face a desk-hours constraint — confirm no unpublished operational restriction exists. 🟧

---

## 9. De-icing provisioning & season

- **Availability:** **Available**, with **runway-dependent routing**: departures via **RWY 01R/19L** de-ice at **remote Apron M (positions M5–M9)**, coordinated on **131.425 "Arlanda Apron"** after Ground release, with a yellow illuminated stop line and mandatory Ground-frequency monitoring throughout; departures via **RWY 01L/19R or RWY 08/26** de-ice at the stand or a designated spot near the terminal (Terminal 2 area, ahead of push-back). 🟩
- **Season:** Consistent with a Köppen Dfb climate — reasonably inferred as roughly Oct/Nov–Apr; exact published start/end dates not confirmed. 🟧
- **Provisioning:** Dedicated seasonal clearing fleet (blowers, sweepers, snowploughs, slingers, spreaders) with a stated clearance priority of runway > taxiway > apron > roads; de-icing-specific vendors historically included Menzies Aviation, Moose Aviation, Nordic Aero, SK ICE (dated roster — confirm current). 🟧
- **Commercial impact:** Winter clear-ice/cold-soak risk (§3.4 Briefing) combined with runway-dependent de-icing routing are the principal seasonal delay-risk drivers here — build winter schedule buffer accordingly, particularly if the assigned departure runway is 01R/19L (remote-apron routing adds taxi time). See [`OM E — Cold Weather Operations`](../../../../../flight-ops/cold-weather-operations.md).

---

## 10. Typical delays / reliability

- **Signature delay driver:** **Winter snow/ice and clear-ice cold-soak risk** — mitigated by CAT III infrastructure on 01L/01R/19L and a dedicated de-icing regime, but a recognised seasonal reliability factor, compounded by runway-dependent de-icing routing and de-icing-pad throughput.
- **Ground-delay / flow-program exposure:** Not independently quantified for ESSA this pass, but expect EUROCONTROL flow management in peak/adverse conditions given the mandatory-slot regime. 🟧
- **On-time reliability picture:** Winter snow/ice events and the 08/26 peak-hour-only restriction (capacity constraint during high demand) carry the highest schedule-risk exposure at this field. 🟧

---

## 11. Curfew & noise-charge commercial impact

- **Noise-charge regime:** Take-off charges are partly based on aircraft environmental/noise performance (general Swedavia practice); exact tariff/surcharge structure not confirmed. 🟧
- **Curfew infringement consequence:** No explicit curfew found — confirm none exists before assuming unrestricted night ops; RWY 08/26's peak-hour-only restriction is the clearest documented environmental operating constraint at this field.
- **Scheduling guardrails:** Given the near-universal mandatory-slot regime, on-time pushback compliance is the primary scheduling guardrail at this field rather than a curfew-avoidance buffer.

---

## Open items (🟧 — confirm against AIP / operator data)

- Current widebody gate assignment for our operation given the 2024–2025 terminal consolidation.
- Ground handling agent(s) contracted for our operation and confirmed minimum turnaround time.
- Fuel into-plane provider/brand.
- Current slot-coordination level/coordinator of record (reconcile against the mandatory-allocation language found).
- Explicit confirmation that no night curfew exists.
- Day-of-week/seasonal load pattern and belly-cargo capacity specific to the K Global operation.
- Precise de-icing-season dates and current de-icing/handling vendor roster.

> **Live data — pull at planning:** fuel price, slot/CTOT file, current ATFM/ground-delay program, demand/load, stand allocation. Not stored in this durable file.

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim material may inform content but is not listed here.*

- **LFV AIP Sweden, AD 2 ESSA** (2012–2014 cycle extract; current cycle confirmed live at AMDT 4/2026 via https://aro.lfv.se) — https://opennav.com/pdf/ESSA/ES_AD_2_ESSA_en.pdf (retrieved 2026-07-26).
- Wikipedia — "Stockholm Arlanda Airport" — https://en.wikipedia.org/wiki/Stockholm_Arlanda_Airport (retrieved 2026-07-26). *Terminal history/2024–2025 consolidation, de-icing zones, fuel delivery chain, cargo operators, environmental permit history.*

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-26 | Built from LFV AIP; K Global fields from live VAMSYS; 4-page pack. |
