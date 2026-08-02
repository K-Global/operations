# LROP — Henri Coandă · Dispatch Page

**LROP / OTP** · Otopeni, near Bucharest, Romania · Europe
**Version** v0.1 · **Updated** 2026-07-26 · **Status** Draft

> **Read-me:** Dispatcher/commercial planning aid for the sim, not a chart. Companion to the [LROP Briefing](index.md) (informational), [Departure](departure.md) and [Arrival](arrival.md) pages. Static airport/commercial characteristics only; live fuel prices, slot files, CTOTs and demand are pulled at planning (see §Live-data). Any procedure/approach is named only — fly/verify the charted current-AIRAC version. Open 🟧 items are in §Open items. Flag legend 🟥 restriction/hazard · 🟧 caution/unverified · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| Role in network | **Destination** `[VAMSYS mirror 2026-07-26]` |
| Terminals in use for us | Single main terminal complex (Departures Hall / Arrivals Hall, connected "Finger" airside concourse) — no confirmed multi-terminal split |
| Widebody stands available | Apron 2 clusters reported B767/B773/B744-capable (201, 201A, 202–205) per a network-sim stand reference — not independently reconfirmed 🟧 |
| Slot regime | Not confirmed — no evidence found of IATA Level 2/3 coordination 🟧 |
| Curfew | None identified 🟧 |
| Primary handling agent | Not independently confirmed; Globeground/Menzies reported historically (dated source) 🟧 |
| Fuel supplier(s) | Not confirmed 🟧 |
| Customs / PoE for pax | **Yes** — Romania's principal international gateway; hours not confirmed 🟧 |
| De-icing | Available on stand/taxiway; season not confirmed 🟧 |

---

## 2. Terminals & concourses

- **Terminal layout:** A single main terminal building comprising the Departures Hall (formerly International Departures) and the Arrivals Hall (formerly International Arrivals/Domestic), linked by a shopping walkway. An airside "Finger" concourse (expanded in phases through 2011) is organised into Schengen/non-Schengen transit flows. 38 gates reported, 14 with jetways (Wikipedia-sourced, dated). 🟧
- **Our operation uses:** Not independently confirmed — treat as the standard international arrivals/departures flow pending handling confirmation. 🟧
- **International arrivals / CBP-equivalent hall:** International arrivals clear passport control in the Arrivals Hall; Romania's current Schengen air-border status should be reconfirmed as it affects whether intra-EU arrivals bypass full immigration control. 🟧
- **Notes:** A second terminal ("Henri Coandă 2") has been publicly discussed for eastward expansion in modular stages — status/completion not confirmed this pass. 🟧

---

## 3. Stands / gates (by code letter & our fleet)

- **Widebody (Code E) stands:** A network-sim (VATSIM) stand-assignment reference lists Apron 2 positions 201 (B767/A31, pushback), 201A (B744, start-up) and 202–205 (B773, pushback) as the widebody-capable cluster. **Not independently confirmed against a real-world stand map** — treat as a planning proxy only. 🟧
- **Stands NOT usable by our types:** Regional/Code C gates (Apron 1 stands 116–122; Apron 2 "regional" cluster 218–223) are not sized for Code E — do not plan a widebody onto them.
- **Remote / hardstand positions:** Stand 108 (Apron 1) is reported as a B77W remote position per the same reference. 🟧
- **Contact vs remote for our arrivals:** Expect a contact widebody-capable stand for a scheduled international arrival; remote/hardstand use not typical for scheduled service.
- **Ground-movement stand caveats:** **Code ≥4D aircraft must vacate RWY 08R via TWY D only**, or await towing with engines 1 & 4 shut down — see [Briefing §13](index.md) and the Departure/Arrival taxi sections.

---

## 4. Slots, curfew & CTOT regime

- **Slot coordination level:** Not confirmed in reachable sources — no evidence found of formal IATA-level slot coordination at LROP. 🟧
- **Curfew / night restriction:** None identified. 🟧
- **CTOT / flow control:** Standard EUROCONTROL Network Manager ATFM/CTOT practice may apply during periods of congestion, consistent with general EU-network practice — not independently LROP-sourced. 🟧
- **Commercial impact:** Absent a confirmed curfew or slot regime, the primary schedule-integrity risk at LROP is winter weather (de-icing throughput) and the Code ≥4D taxi-in constraint at RWY 08R rather than a hard administrative restriction.

---

## 5. Handling agents & turnaround

- **Handling agent(s):** Not independently confirmed for the current operation; Globeground and Menzies are reported historically (dated Wikipedia source). 🟧
- **Typical turnaround time for our type:** Not independently confirmed; VAMSYS mirror gives **taxi-in 12 min / taxi-out 15 min** for planning purposes `[VAMSYS mirror 2026-07-26]`.
- **Services:** Standard international-gateway provision (push-back, GPU/PCA, water/lav, catering, cabin clean) expected; not individually confirmed. 🟧
- **Turnaround risk items:** Winter de-icing throughput, the Code ≥4D RWY 08R taxi-in constraint, and general gate/stand availability during peak banks are the plausible turnaround-risk drivers pending firmer confirmation.

---

## 6. Load factors & seasonality

- **Demand peaks:** Not independently sourced for LROP specifically — treat as standard European-gateway business/leisure mix pending network-schedule confirmation. 🟧
- **Day-of-week / seasonal pattern:** Not confirmed. 🟧
- **Cargo / belly capacity:** Not confirmed for LROP specifically. 🟧
- **Connection banks:** Set by the K Global network schedule rather than third-party demand data; cross-ref the route register.

---

## 7. Fuel

- **Supplier / into-plane:** Not confirmed in reachable sources. 🟧
- **Uplift availability & hours:** Jet A-1 assumed available H24 as the country's main gateway; not independently confirmed. 🟧
- **Price / tankering angle:** Assess price differentials to/from home-hub per leg at planning. See [`OM E — Fuel Policy`](../../../../../flight-ops/fuel-policy.md).
- **Quality / freeze notes:** Standard Jet A-1; no cold-soak/fuel-freeze consideration specific to LROP itself.

---

## 8. Customs / immigration & PoE for pax

- **Port of Entry:** Yes — international arrivals hall.
- **CBP-equivalent / immigration hours:** Not confirmed in reachable sources; assumed major-gateway H24 coverage. 🟧
- **Pre-clearance / visa-transit notes:** Standard entry per nationality; Romania's Schengen air-border status should be reconfirmed for current-day passenger-flow planning. 🟧
- **Late/overnight/diversion caveat:** No curfew identified, so late/overnight arrival is not itself a constraint; confirm immigration-desk staffing for off-peak arrivals. 🟧

---

## 9. De-icing provisioning & season

- **Availability:** **Available** — on stand / taxiway per local operational practice. 🟩
- **Season:** Continental-climate winter season assumed (roughly Nov–Mar); exact AIP-published months not confirmed. 🟧
- **Provisioning:** Fluid type/throughput not confirmed. 🟧
- **Commercial impact:** Winter de-icing throughput is the plausible principal seasonal delay-risk driver pending firmer confirmation. See [`OM E — Cold Weather Operations`](../../../../../flight-ops/cold-weather-operations.md).

---

## 10. Typical delays / reliability

- **Signature delay driver:** Not independently confirmed; winter weather (snow/icing) is the plausible seasonal driver given the continental climate. 🟧
- **Ground-delay / flow-program exposure:** Not confirmed; moderate-density Class A TMA/Class C CTR structure suggests some ATFM exposure during peak/adverse conditions. 🟧
- **On-time reliability picture:** Not independently sourced for LROP. 🟧

---

## 11. Curfew & noise-charge commercial impact

- **Noise-charge regime:** Not confirmed in reachable sources; the field's standing noise-abatement measure is the full-length-only takeoff rule for all jets (§Briefing §12). 🟧
- **Curfew infringement consequence:** Not applicable — no curfew identified.
- **Scheduling guardrails:** Absent a confirmed curfew, the main scheduling guardrail is winter de-icing/weather buffer and confirming the Code ≥4D ground-ops constraint before planning a widebody rotation.

---

## Open items (🟧 — confirm against AIP / operator data)

- Current terminal/stand assignment and confirmed widebody gate cluster for our operation.
- Ground handling agent(s) contracted for our operation and confirmed minimum turnaround time.
- Slot-coordination level (if any) and CTOT/ATFM exposure specific to LROP.
- Fuel into-plane provider and uplift hours.
- Customs/immigration desk hours and current Schengen air-border status.
- Day-of-week/seasonal load pattern and belly-cargo capacity specific to the K Global operation.
- Noise-charge regime and any curfew-adjacent charging structure.

> **Live data — pull at planning:** fuel price, slot/CTOT file, current ATFM/ground-delay program, demand/load, stand allocation, current AUP/UUP or RAD status in the Bucuresti TMA. Not stored in this durable file.

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim material may inform content but is not listed here.*

- **AIP Romania (ROMATSA / AIS Romania), AD 2.5-40 Visual Approach Chart — LROP**, eff. 2016-02-04 — https://www.aisro.ro/files/harti/LR_AD_2_LROP_5-40_en.pdf (retrieved 2026-07-26).
- Wikipedia — "Henri Coandă International Airport" — https://en.wikipedia.org/wiki/Henri_Coand%C4%83_International_Airport (retrieved 2026-07-26). *Terminal/concourse structure, historical handling agents.*
- VATSIM Romania vACC — LROP airport operational documentation — https://docs.rovacc.ro/airports/LROP.html (retrieved 2026-07-26). *Stand-assignment reference — network-sim, not regulatory.*

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-26 | Built from AIP Romania (ROMATSA); K Global fields from live VAMSYS; 4-page pack. |
