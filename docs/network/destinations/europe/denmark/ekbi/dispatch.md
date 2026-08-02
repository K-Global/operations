# EKBI — Billund · Dispatch Page

**EKBI / BLL** · Billund, Jutland, Denmark · Europe
**Version** v0.1 · **Updated** 2026-07-26 · **Status** Draft — AIP Denmark (Naviair)-derived

> **Read-me:** Dispatcher/commercial planning aid for the sim, not a chart. Companion to the [EKBI Briefing](index.md) (informational), [Departure](departure.md) and [Arrival](arrival.md) pages. Static airport/commercial characteristics only; live fuel prices, slot files, CTOTs and demand are pulled at planning (see §Live-data). Any procedure/approach is named only — fly/verify the charted current-AIRAC version. Open 🟧 items are in §Open items. Flag legend 🟥 restriction/hazard · 🟧 caution/unverified · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| Role in network | **Destination** — Denmark's second-largest airport, western-Jutland gateway and cargo hub; not a K Global base `[VAMSYS mirror 2026-07-26]` |
| Terminals in use for us | **Apron North** passenger terminal (all passenger aircraft); cargo/VIP/GA route via **Apron South** |
| Widebody stands available | Not applicable at scale — EKBI is primarily a narrowbody/regional field; total stand/gate count not independently confirmed 🟧 |
| Slot regime | **Level 3 — coordinated via Airport Coordination Denmark (ACD)**; all aircraft above 3,500 kg MTOM require slot coordination |
| Curfew | **No hard curfew** — advance-approval requirement for takeoffs 2300–0600 local 🟥 |
| Primary handling agent | **GHBA (Ground Handling Billund Airport)** — in-house operator handling |
| Fuel supplier(s) | **Jet A-1 only**; carnet cards from **Air BP** or **DCC & Shell Aviation Denmark** |
| Customs / PoE for pax | **Yes** — H24, open to traffic to/from all states 🟩 |
| De-icing | **Available** — Apron North pad, season **1 Oct – 30 Apr** (AIP-dated) |

---

## 2. Terminals & concourses

- **Terminal layout:** Billund's passenger operation is concentrated on **Apron North** (a single integrated passenger terminal complex); **Apron South** (concrete, PCN 110/R/A/X/T) is dedicated to cargo, VIP and general-aviation traffic.
- **Our operation uses:** Apron North — the standard passenger stand assignment for scheduled Category R service.
- **International arrivals / passport-control hall:** Airport handles both Schengen and non-Schengen traffic; stands 27–37 are Schengen-only, stands 25–26/38–40 are flexible.
- **Notes:** Billund operates a **substantial dedicated cargo business** (~90,000 tonnes/year, 50+ freighter operations/week) sharing the single runway with passenger traffic — factor this into overall movement-density expectations at the field, even though cargo uses a physically separate apron. 🟧

---

## 3. Stands / gates (by code letter & our fleet)

- **Widebody (Code E/F) stands:** Not applicable — EKBI is a narrowbody/regional-scale field; no widebody-specific stand data confirmed or expected. 🟧
- **Stands NOT usable by our types:** Not confirmed — verify with GHBA at planning.
- **Remote / hardstand positions:** Stands 65–94 are long-term parking per a community reference; not independently confirmed as primary source. 🟧
- **Contact vs remote for our arrivals:** Confirm with GHBA on the day; stands 26, 29, 31, 32, 34, 35, 38 have AGNIS/docking-mirror guidance but still require marshaller presence, all others require full marshaller guidance.
- **Ground-movement stand caveats:** Single-runway field with a comparatively simple taxiway layout relative to a multi-runway hub — no equivalent of a cross-runway crossing complexity identified. See [Briefing §13](index.md).

---

## 4. Slots, curfew & CTOT regime

- **Slot coordination level:** **Level 3 (fully coordinated)**, confirmed directly via Airport Coordination Denmark (ACD) — all aircraft above 3,500 kg MTOM require slot coordination; business/GA traffic requires PPR via an FBO. 🟥
- **Curfew / night restriction:** **No hard curfew.** Takeoffs in the period **2300–0600 local** require **advance approval** issued by Billund Airport. Landing on RWY 09 to be avoided 2200–0700 if RWY 27 is in use (and the reverse for RWY 27 takeoffs if RWY 09 is in use). No specific dB(A) noise-quota threshold confirmed for this field in reachable sources (contrast with Copenhagen's documented 80 dB(A) figure). 🟥
- **CTOT / flow control:** No dedicated ATFM/CTOT section was found in the reachable AIP text; standard EUROCONTROL Network Manager practice is assumed given Level 3 coordination status, but this is inference rather than an EKBI-specific citation. 🟧
- **Commercial impact:** The Level 3 coordination requirement and the night-period approval regime are the two commercial guardrails shaping schedulable windows at this field; there is no equivalent of a hard movement ban outside the advance-approval mechanism.

---

## 5. Handling agents & turnaround

- **Handling agent(s):** **GHBA (Ground Handling Billund Airport)** — the airport's own in-house ground-handling operation (not a third-party contractor); handling requests via OPS phone (H24), SITA BLLAPXH. Cargo traffic is handled separately by CHBA, Spirit Air Cargo Handling, or WFS. 🟩
- **Typical turnaround time for our type:** Not independently confirmed; VAMSYS mirror gives **taxi-in 6 min / taxi-out 8 min** for planning purposes `[VAMSYS mirror 2026-07-26]` — build the gate turn around these plus standard Category R service times.
- **Services:** Push-back/marshaller guidance, GPU/PCA, potable water/lav, catering and cabin services expected at a regional-hub passenger stand.
- **Turnaround risk items:** De-icing-pad throughput in winter (Apron North pad, single primary location) and strong-wind days affecting the single-runway operation are the principal turnaround risk items identified this pass.

---

## 6. Load factors & seasonality

- **Demand peaks:** Denmark's second-largest airport by passenger volume (reported ~4 million passengers, 2023, per a community/press reference) — not independently sourced for K Global-specific demand patterns. 🟧
- **Day-of-week / seasonal pattern:** Not independently sourced for EKBI specifically — treat as standard Northern European business/leisure mix pending network-schedule confirmation. 🟧
- **Cargo / belly capacity:** EKBI is a significant dedicated cargo gateway (~90,000 tonnes/year; scheduled freighter operators include major integrators and Maersk Air Cargo per public sources) operating on a physically separate apron (Apron South) from our passenger service — belly-cargo interaction with the dedicated freighter operation not independently assessed. 🟧
- **Connection banks:** Cross-ref the route register for inbound/outbound wave structure — not independently sourced this pass.

---

## 7. Fuel

- **Supplier / into-plane:** **Jet A-1 only** — payment via carnet fuel cards from **Air BP** or **DCC & Shell Aviation Denmark**. 🟩
- **Uplift availability & hours:** Fuelling operationally H24 per AIP; fuelling capacity **2,900 L/min**; gravity refuelling possible. 🟩
- **Price / tankering angle:** Assess price differentials to/from base per leg at planning. Sustainable aviation fuel (SAF) has reportedly been introduced at this field per operator/press sources — confirm current availability at planning. See [OM E — Fuel Policy](../../../../../flight-ops/fuel-policy.md).
- **Quality / freeze notes:** Standard Jet A-1; no cold-soak/fuel-freeze consideration specific to EKBI itself.

---

## 8. Customs / immigration & PoE for pax

- **Port of Entry:** Yes — H24, open to traffic to/from all states `[AIP AD 2-EKBI §3.2]`.
- **CBP-equivalent / immigration hours:** H24 confirmed.
- **Pre-clearance / visa-transit notes:** Standard Schengen/non-Schengen entry per nationality; stand assignment splits Schengen-only (27–37) from flexible (25–26/38–40) per a community reference. 🟧
- **Late/overnight/diversion caveat:** Customs/immigration is H24, so the night-period takeoff-approval regime (§4) rather than desk staffing is the dominant late/overnight constraint here.

---

## 9. De-icing provisioning & season

- **Availability:** **Available** — dedicated de-icing pad on **Apron North** (Densiphalt, PCN 90/F/C/W/T); Apron South de-icing available only by prior arrangement. 🟩
- **Season:** **1 October – 30 April** (AIP-dated). 🟩
- **Provisioning:** Request via Billund Handling (131.905), supervised on "Billund De-icing North" (131.805, HO); aircraft registration used as the de-icing callsign.
- **Commercial impact:** Single primary de-icing location (Apron North) means winter throughput at the pad is the principal seasonal delay-risk driver, compounded by the field's overall strong-wind/single-runway exposure. See [OM E — Cold Weather Operations](../../../../../flight-ops/cold-weather-operations.md).

---

## 10. Typical delays / reliability

- **Signature delay driver:** Strong-wind days affecting the single-runway (no crosswind alternate) operation, compounded by winter de-icing-pad throughput. 🟧
- **Ground-delay / flow-program exposure:** Not independently sourced for EKBI-specific ATFM/ground-delay frequency this pass. 🟧
- **On-time reliability picture:** Winter wind/de-icing season carries the highest schedule-risk exposure identified this pass; the field's real-world use as a storm alternate for Copenhagen (§Briefing §3.4) illustrates its general resilience to adverse weather relative to its size. 🟧

---

## 11. Curfew & noise-charge commercial impact

- **Noise-charge regime:** Not independently confirmed this pass — no specific per-movement noise-charge tariff or dB(A) quota threshold found for EKBI in reachable sources (contrast with Copenhagen's documented framework). 🟧
- **Curfew infringement consequence:** No hard curfew exists; an unapproved night-period (2300–0600) takeoff without advance approval would be a regulatory non-compliance, treated as a hard planning constraint. 🟥
- **Scheduling guardrails:** Build buffer into late-day rotations so a departure delayed toward 2300 is not left without the required advance approval; this is the primary scheduling guardrail for this field.

---

## Open items (🟧 — confirm against AIP / operator data)

- Total stand/gate count for the passenger apron.
- Fine-grained demand/seasonality data specific to the K Global operation.
- Cargo/belly-capacity interaction on the passenger side.
- Specific per-movement noise-charge tariff structure (if any).
- CTOT/ATFM-specific procedure for EKBI (Level 3 coordination confirmed; dedicated ATFM section not found).

> **Live data — pull at planning:** fuel price, slot/CTOT file, current ATFM/ground-delay program, demand/load, stand allocation. Not stored in this durable file.

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim material may inform content but is not listed here.*

- **AIP Denmark (Naviair), AD 2-EKBI** — https://aim.naviair.dk/media/files/3ju3arpdevq/EK_AD_2_EKBI_en.pdf (retrieved 2026-07-26). *Operational hours, RFF, night-approval regime, de-icing, fuel, slot coordination.*
- Billund Airport (bll.dk) — Cargo operations — https://www.bll.dk/cargo (retrieved 2026-07-26). *Cargo volume/handlers.*
- Billund Airport (bll.dk) — GHBA organisation page — https://www.bll.dk/en/about-the-airport/aviation/ghba/organization (retrieved 2026-07-26). *Ground handling structure.*
- Airport Coordination Denmark — https://airportcoordination.com/airport.php?code=BLL (retrieved 2026-07-26). *Level 3 slot-coordination confirmation.*
- VATSIM Scandinavia — EKBI reference — https://wiki.vatsim-scandinavia.org/books/danish-airports-charts/page/ekbi-billund-airport (retrieved 2026-07-26). *Network-sim document, not regulatory — stand/apron cross-check only.*

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-26 | Built from AIP Denmark (Naviair); K Global fields from live VAMSYS; 4-page pack. |
