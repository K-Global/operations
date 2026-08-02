# LFRS — Nantes Atlantique · Dispatch Page

**LFRS / NTE** · Bouguenais (Nantes), Pays de la Loire, France · Europe
**Version** v0.1 · **Updated** 2026-07-26 · **Status** Draft

> **Read-me:** Dispatcher/commercial planning aid for the sim, not a chart. Companion to the [LFRS Briefing](index.md) (informational), [Departure](departure.md) and [Arrival](arrival.md) pages. Static airport/commercial characteristics only; live fuel prices, slot files, CTOTs and demand are pulled at planning (see §Live-data). Any procedure/approach is named only — fly/verify the charted current-AIRAC version. Open 🟧 items are in §Open items. Flag legend 🟥 restriction/hazard · 🟧 caution/unverified · 🟩 normal.

---

## 1. Snapshot — K Global VAMSYS fields `[VAMSYS mirror 2026-07-26]`

| Field | Value |
|---|---|
| **K Global Category** | **R** |
| **Base** | **No** |
| **Preferred alternates** | **LFBD** (Bordeaux-Mérignac) · **EGGW** (London Luton) · **LFML** (Marseille-Provence) |
| **Taxi-in** | **6 min** |
| **Taxi-out** | **8 min** |
| Role in network | **Destination (Category R)** — not a base |
| Terminals in use for us | Single-terminal international airport; no multi-terminal split confirmed in the reachable source 🟧 |
| Widebody stands available | Field is not sized for widebody long-haul operation (2,853 m runway); **Stand 5A** is the field's reserved widebody position (A330-200/300, B777-200, B787, A340-200/300) |
| Slot regime | Seasonal — **COHOR-coordinated in summer, schedule-facilitated in winter** (EU Reg 95/93, as amended) 🟧 |
| Curfew | **Hard 0000–0600 local**; Chapter 3 sub-13-EPNdB restricted 2200–0600 🟥 |
| Primary handling agent | Mandatory ground handling; specific agent not individually named in the source extract 🟧 |
| Fuel supplier(s) | Confirmed available H24; specific supplier not confirmed 🟧 |
| Customs / PoE for pax | **Yes** — random-inspection basis, 2 hr prior notice required before ETA 🟧 |
| De-icing | **Available** on-field; season/procedure not detailed 🟧 |

---

## 2. Terminals & concourses

- **Terminal layout:** LFRS operates as a single-terminal international airport under administrator **Aéroport du Grand Ouest (AGO)**; no multi-terminal/concourse split was found in the reachable AIP extract. 🟧
- **Our operation uses:** Standard terminal gate/stand assignment per handling on the day; **Stand 5A** (widebody-reserved) and **Stand 18A** (B757-200, oversteering technique required) are the only individually named stands in the source — see [Briefing §13](index.md).
- **International arrivals / CBP-equivalent hall:** Customs operate on a random-inspection basis with a **2 hr prior notice requirement before ETA** — build this into any international pax-flow planning. 🟧
- **Notes:** No terminal-programme transition or construction note found in the reachable source. 🟧

---

## 3. Stands / gates (by code letter & our fleet)

- **Widebody (Code E/F) stands:** **Stand 5A** is reserved for widebody types (A330-200/300, B777-200, B787, A340-200/300) — pilots are advised to keep taxi speed on TWY RC limited given the final turn onto the stand. 🟧 No other widebody-specific stand is named in the reachable extract.
- **Stands NOT usable by our types:** **TWY RD is limited to aircraft with wingspan < 36 m; TWY D and E are limited to aircraft with main-gear outer width (OMGWS) < 9 m** — this constrains which stands a wide-gear or wide-span type can reach via those taxiways. See [Briefing §13](index.md).
- **Remote / hardstand positions:** General-aviation areas **INDIA, JULIETT and NOVEMBER** are reserved for GA parking and are not available for scheduled Category R service; INDIA is for authorised based aircraft only, JULIETT/NOVEMBER for light single-engine aircraft with wingspan < 12.8 m, and both are prohibited to helicopters and unusable at night or when RVR < 350 m.
- **Contact vs remote for our arrivals:** Stand entry requires marshaller assistance (conventional gestures), or the aircraft must hold on the taxiway centreline and request ATC assistance if no marshaller is present. Parking is generally **nose-in**.
- **Ground-movement stand caveats:** **Follow-me is mandatory for entry to stand KILO 1 when RVR < 350 m.** See [Briefing §13](index.md) and the Departure/Arrival taxi sections.

---

## 4. Slots, curfew & CTOT regime

- **Slot coordination level:** Seasonal — Nantes Atlantique is a **coordinated airport in summer scheduling seasons** and a **schedule-facilitated airport in winter seasons**, designated by decree of the Minister of Civil Aviation under EU Regulation 95/93 (as amended). Slot/schedule recommendations for any IFR landing/takeoff (except force majeure, emergency landing, or State/humanitarian flights) go through the coordinator **COHOR** (the French slot-coordination association). 🟧 This is functionally consistent with an IATA Level 3 (summer, full allocation) / Level 2 (winter, facilitation/recommendation only) regime, but the precise IATA numeral was not independently restated in the AIP text itself — only the functional coordinated/facilitated split is sourced.
- **Curfew / night restriction:** 🟥 **Hard curfew 0000–0600 local — no aircraft may land or leave the parking stand for takeoff.** Only two narrow exceptions exist: (1) flights scheduled 2100–2330 delayed for reasons beyond the carrier's control, or (2) flights scheduled 0630–0900 brought forward for reasons beyond the carrier's control — each requires advance notification to the Minister of Civil Aviation (who may object) and subsequent justification to civil aviation services within 2 working days. Chapter 3 aircraft with cumulative noise margin < 13 EPNdB may not land or leave the stand for takeoff 2200–0600. Chapter 2 aircraft are permanently prohibited. Enforcement is by **ACNUSA**, with corporate fines of up to **€40,000** for non-compliance (Transport Code L6361-4/L6361-9).
- **CTOT / flow control:** Not independently sourced for LFRS specifically; treat standard EUROCONTROL Network Manager ATFM/CTOT practice as applicable during the coordinated summer season. 🟧
- **Commercial impact:** The hard curfew and the seasonal COHOR regime are the two dominant commercial constraints at this destination — schedule buffer against the 0000–0600 window is materially more important here than at most France network fields, given the narrow and administratively gated nature of the delay/advance exceptions.

---

## 5. Handling agents & turnaround

- **Handling agent(s):** Ground handling is **mandatory**, contracted via a handling company; the specific agent(s) servicing our operation are not individually named in the reachable source. 🟧
- **Typical turnaround time for our type:** Not independently confirmed; VAMSYS mirror gives **taxi-in 6 min / taxi-out 8 min** for planning purposes `[VAMSYS mirror 2026-07-26]` — build the gate turn around these plus standard Category R service times.
- **Services:** Standard push-back/marshalling, GPU/PCA, water/lav, catering and cabin services expected for a scheduled Category R turn; de-icing available on-field in season.
- **Turnaround risk items:** Marshaller-assisted stand entry (or ATC-directed centreline hold if no marshaller present) can add time versus a self-manoeuvring stand; the field's mandatory follow-me requirement for stand KILO 1 in low-RVR conditions is a specific low-visibility turnaround-time risk. 🟧

---

## 6. Load factors & seasonality

- **Demand peaks:** Not independently sourced for LFRS specifically — treat as standard regional French destination demand pending network-schedule confirmation. 🟧
- **Day-of-week / seasonal pattern:** Not confirmed in the reachable extract. 🟧
- **Cargo / belly capacity:** Not confirmed in the reachable extract. 🟧
- **Connection banks:** As a non-base Category R destination, LFRS's schedule is set by the network route register rather than by local connection-bank structure — cross-reference the route register for wave timing.

---

## 7. Fuel

- **Supplier / into-plane:** Fueling confirmed **available H24**; specific into-plane provider not confirmed in the reachable source. 🟧
- **Uplift availability & hours:** H24 (sourced). 🟩
- **Price / tankering angle:** No LFRS-specific price signal sourced this pass — assess relative price differential to base/hub per leg at planning. See [`OM E — Fuel Policy`](../../../../../flight-ops/fuel-policy.md).
- **Quality / freeze notes:** No cold-soak/fuel-freeze consideration specific to this short-to-medium-haul European destination.

---

## 8. Customs / immigration & PoE for pax

- **Port of Entry:** Yes — immigration services H24. 🟩
- **CBP-equivalent / immigration hours:** H24 (sourced). 🟩
- **Pre-clearance / visa-transit notes:** Customs operate on a **random-inspection basis**, with a **2 hr prior notice requirement before ETA** — build this lead time into any international pax-flow or diversion planning. 🟧
- **Late/overnight/diversion caveat:** 🟥 The **hard curfew 0000–0600** is the dominant late/overnight constraint — a delayed arrival that would land in this window is prohibited outright regardless of customs/immigration desk availability; plan diversion contingency accordingly, not merely a late-arrival passenger-flow contingency.

---

## 9. De-icing provisioning & season

- **Availability:** **Available** on-field. 🟩 Specific pad location/count not detailed in the reachable extract. 🟧
- **Season:** Not specified in the reachable extract — treat as the standard Western European de-icing season (broadly Oct–Apr) pending confirmation. 🟧
- **Provisioning:** Fluid type, holdover-time implications and peak-season throughput not detailed in the reachable extract. 🟧
- **Commercial impact:** Winter de-icing exposure is a standard Western-European-coastal-field consideration; no LFRS-specific delay data found. See [`OM E — Cold Weather Operations`](../../../../../flight-ops/cold-weather-operations.md).

---

## 10. Typical delays / reliability

- **Signature delay driver:** 🟥 The **ACNUSA-enforced noise/curfew regime** is the field's defining reliability constraint — any operational delay that risks pushing a departure or arrival into the 0000–0600 window carries hard-stop consequences (prohibition, not merely a charge), unlike a typical soft curfew.
- **Ground-delay / flow-program exposure:** Seasonal COHOR coordination in summer raises schedule-integrity stakes; winter facilitation is comparatively lower-stakes. 🟧
- **On-time reliability picture:** No LFRS-specific on-time performance data sourced this pass; the curfew and RWY 21 RNP-AR-only environment (in low-visibility RWY 03-unavailable scenarios) are the two structural risk factors to weight most heavily. 🟧

---

## 11. Curfew & noise-charge commercial impact

- **Noise-charge regime:** Not independently detailed for LFRS in the reachable extract beyond the administrative-fine framework below. 🟧
- **Curfew infringement consequence:** 🟥 Enforcement is by **ACNUSA**, with **corporate fines of up to €40,000** for non-compliance (Transport Code articles L6361-4/L6361-9) — this is a **hard movement restriction**, not merely a charged surcharge: a non-exempt movement in the 0000–0600 window is disallowed outright, not simply penalised after the fact.
- **Scheduling guardrails:** Build buffer into any rotation touching LFRS so that a routine operational delay does not push a landing or a stand-departure into the 0000–0600 window. Any schedule slipping toward the 2100–2330 (delayed-departure) or 0630–0900 (advanced-departure) exception windows must go through the Ministerial-notification-and-justification process described in §4/Briefing §12 — do not treat those exceptions as routine schedule flexibility.

---

## Open items (🟧 — confirm against AIP / operator data)

- Handling agent(s) contracted for our operation and confirmed minimum turnaround time.
- Fuel into-plane provider.
- Terminal/concourse structure detail (single-terminal assumption not independently cross-checked against a terminal map).
- Precise IATA slot-level numeral for the COHOR coordinated/facilitated seasonal split.
- De-icing season window and pad/provisioning detail.
- Day-of-week/seasonal demand pattern, belly-cargo capacity and connection-bank structure specific to the K Global operation.
- CTOT/ATFM specifics for LFRS (general EUROCONTROL practice assumed, not independently sourced).
- Noise-charge fee schedule detail beyond the administrative-fine framework.

> **Live data — pull at planning:** fuel price, slot/CTOT file, current ATFM/ground-delay program, demand/load, stand allocation, current AUP/UUP or RAD status in the Brest FIR. Not stored in this durable file.

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim material may inform content but is not listed here.*

- **SIA France eAIP — AD 2 LFRS**, AIRAC cycle eff. 09 JUL 2026 (retrieved 2026-07-26) — https://www.sia.aviation-civile.gouv.fr/ (eAIP France portal; AD 2 LFRS section within the current AIRAC package). Primary source for hours/services, RFF, ground operations, slot/curfew/noise regime (AD 2 LFRS.21) and stand/taxiway restrictions.

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-26 | Built from SIA France eAIP; K Global fields from live VAMSYS; 4-page pack. |
