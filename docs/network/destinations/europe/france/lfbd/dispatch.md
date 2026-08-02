# LFBD — Bordeaux-Mérignac · Dispatch Page

**LFBD / BOD** · Mérignac (Bordeaux), Gironde, France · Europe
**Version** v0.1 · **Updated** 2026-07-26 · **Status** Draft

> **Read-me:** Dispatcher/commercial planning aid for the sim, not a chart. Companion to the [LFBD Briefing](index.md) (informational), [Departure](departure.md) and [Arrival](arrival.md) pages. Static airport/commercial characteristics only; live fuel prices, slot files, CTOTs and demand are pulled at planning (see §Live-data). Any procedure/approach is named only — fly/verify the charted current-AIRAC version. Open 🟧 items are in §Open items. Flag legend 🟥 restriction/hazard · 🟧 caution/unverified · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| Role in network | **Destination** — Category R `[VAMSYS mirror 2026-07-26]` |
| Terminals in use for us | Not individually confirmed — standard commercial apron/terminal 🟧 |
| Widebody stands available | Not confirmed — RWY 11/29 use restriction (§Briefing §5) is the operative sizing constraint rather than a stand count 🟧 |
| Slot regime | Not confirmed in reachable extract — treat as unregulated pending verification 🟧 |
| Curfew | **None found in reachable AIP** — not independently re-confirmed 🟧 |
| Primary handling agent | Mandatory airport handling service; multiple agents on field (Alyzia Province, Air France, AviaPartner, Onet) — specific K Global handler not confirmed 🟧 |
| Fuel supplier(s) | **TOTAL** and **World Fuel Services** (both Jet A1) |
| Customs / PoE for pax | **Yes** — H24 |
| De-icing | **Available**, H24 on request — AviaPartner (Type II) and Alyzia Province (Type I/IV) |

---

## 2. Terminals & concourses

- **Terminal layout:** Not individually detailed in the reachable AIP extract — LFBD operates commercial passenger terminal facilities plus a general-aviation apron (Aviation Générale, hangars/handling) and an industrial zone (Novespace, SAB, DAS) with its own radio-contact requirements. 🟧
- **Our operation uses:** Standard commercial apron/terminal — not individually confirmed for K Global. 🟧
- **International arrivals / CBP-equivalent hall:** H24 customs/immigration; hall/terminal detail not confirmed. 🟧
- **Notes:** No terminal-transition programme identified — confirm current gate/stand assignment with handling before finalising a stand plan.

---

## 3. Stands / gates (by code letter & our fleet)

- **Widebody (Code E/F) stands:** Not individually confirmed; the field's operative sizing constraint is the **RWY 11/29 wingspan/type restriction** (≥ 52 m prohibited) rather than a published stand cluster — see [Briefing §5](index.md). 🟧
- **Stands NOT usable by our types:** Not confirmed — several taxiways carry hard wingspan limits (see [Briefing §13](index.md)) that would constrain access to some parking areas for larger types.
- **Remote / hardstand positions:** Apron groups J/K and the industrial-zone stands (SAB/DAS/Novespace) are distinct from the main commercial apron — confirm allocation with handling.
- **Contact vs remote for our arrivals:** Not confirmed — expect standard commercial-apron allocation for a Category R type.
- **Ground-movement stand caveats:** TWY U/U1/U2 (industrial-area) require idle thrust and mandatory radio contact; B747/A340/DC-10-class aircraft must be towed there — see [Briefing §13](index.md) and the Departure/Arrival taxi sections.

---

## 4. Slots, curfew & CTOT regime

- **Slot coordination level:** Not confirmed in the reachable extract — treat as unregulated pending verification. 🟧
- **Curfew / night restriction:** **No hard curfew found** in the reachable AD 2.20/2.21 extract — ATS, customs, health and handling all operate H24 or H24-on-request, which is consistent with (but does not prove) the absence of a movement restriction. Not independently re-confirmed against current AIRAC. 🟧
- **CTOT / flow control:** EUROCONTROL Network Manager ATFM/CTOT regulation applies as general European practice; not independently LFBD-sourced. 🟧
- **Commercial impact:** With no confirmed curfew, the main schedule-integrity driver is **RWY 23's ILS CAT III dependency** in poor weather and the **RWY 11/29 use restriction** rather than a slot/curfew regime — but do not schedule assuming unrestricted night ops without confirming current AIP.

---

## 5. Handling agents & turnaround

- **Handling agent(s):** Mandatory airport handling service in force; agents on field include **Alyzia Province** (commercial aviation/cargo, GA), **Air France**, **AviaPartner**, **Onet Airport Services**, and **Avia VIP** (general aviation). Specific K Global-contracted handler not confirmed. 🟧
- **Typical turnaround time for our type:** Not independently confirmed; VAMSYS mirror gives **taxi-in 10 min / taxi-out 12 min** for planning purposes `[VAMSYS mirror 2026-07-26]`.
- **Services:** Push-back (mandatory marshaller on all stands — no automated visual docking guidance), GPU/PCA (fixed/mobile substitute power devices mandatory except on failure/incompatibility), fuelling, de-icing on request.
- **Turnaround risk items:** RWY 11/29 wingspan/type restriction if a diversion or alternate-runway need arises; de-icing-pad throughput in the 1 Dec–31 Mar season; mandatory towing for B747/A340/DC-10-class aircraft adds ground-handling time.

---

## 6. Load factors & seasonality

- **Demand peaks:** Not independently sourced for LFBD specifically — treat as a regional Atlantic-coast French destination with a business/leisure mix pending network-schedule confirmation. 🟧
- **Day-of-week / seasonal pattern:** Not confirmed. 🟧
- **Cargo / belly capacity:** Not confirmed for K Global's operation at this field. 🟧
- **Connection banks:** Not a K Global hub — connection timing is set by the network schedule; cross-ref the route register.

---

## 7. Fuel

- **Supplier / into-plane:** **TOTAL** (Jet A1 / Jet A1 SAF / Avgas 100LL via dispenser) and **World Fuel Services** (Jet A1). 🟩
- **Uplift availability & hours:** TOTAL: 0430–2300 local (winter) / 0430–0000 local (summer), on-call outside scheduled hours; WFS: 0500–2300 local, on-call outside. Payment: Visa/Mastercard and cash up to €750 max (TOTAL); contact handling agent 1 hr ahead for on-call fuelling.
- **Price / tankering angle:** Not independently sourced this pass — assess price differential vs departure/base field per leg. See [`OM E — Fuel Policy`](../../../../../flight-ops/fuel-policy.md).
- **Quality / freeze notes:** Jet A1 / Jet A1 SAF standard; no cold-soak/fuel-freeze consideration specific to LFBD.

---

## 8. Customs / immigration & PoE for pax

- **Port of Entry:** Yes.
- **CBP-equivalent / immigration hours:** H24.
- **Pre-clearance / visa-transit notes:** Standard Schengen/non-Schengen entry per nationality; no pre-clearance programme.
- **Late/overnight/diversion caveat:** With customs/immigration at H24 and no confirmed curfew, no operative overnight PoE constraint identified — re-confirm against current AIRAC before relying on unrestricted late/overnight operation. 🟧

---

## 9. De-icing provisioning & season

- **Availability:** **Available**, H24 on request — **AviaPartner** operates 2 FMC-type de-icers (Type II fluid, 75/25 mix); **Alyzia Province** operates 2 Elephant-type de-icers (Type I and Type IV fluid). 🟩
- **Season:** Snow plan active **1 Dec–31 Mar**. Clearance priority order: RWY 05/23 and its taxiway first, then the apron, then RWY 11/29 and its taxiway.
- **Provisioning:** Snow-removal equipment includes 3 skew blades, 2 liquid de-icing spreaders (Ecoway F-35, potassium formate), 1 solid de-icing spreader (Clearway 6S, sodium acetate) and 1 sweeper; solid snow-removal salt (sodium chloride) also available.
- **Commercial impact:** Winter fog/low-stratus (driving CAT III reliance on RWY 23) combined with de-icing-pad activity are the principal seasonal delay-risk drivers. See [`OM E — Cold Weather Operations`](../../../../../flight-ops/cold-weather-operations.md).

---

## 10. Typical delays / reliability

- **Signature delay driver:** Likely winter fog/low-stratus on the RWY 23 CAT III direction; RWY 05/11 have no instrument approach so a wind shift to that orientation can compress arrival capacity in marginal weather. 🟧
- **Ground-delay / flow-program exposure:** Not independently confirmed — treat as low given the field's regional (non-hub) traffic profile. 🟧
- **On-time reliability picture:** No LFBD-specific reliability data found this pass. 🟧

---

## 11. Curfew & noise-charge commercial impact

- **Noise-charge regime:** Not confirmed in the reachable extract. 🟧
- **Curfew infringement consequence:** No confirmed curfew exists at this field per the reachable extract — no infringement-consequence data applicable pending verification.
- **Scheduling guardrails:** In the absence of a confirmed curfew, the operative scheduling guardrail is **weather margin around the RWY 23 CAT III direction** rather than a curfew buffer — build contingency for a config change to the non-precision 05/11 orientation.

---

## Open items (🟧 — confirm against AIP / operator data)

- Terminal/stand assignment for K Global operations.
- Slot coordination level (if any) and confirmed absence of a curfew.
- Ground handling agent(s) contracted for our operation and confirmed minimum turnaround time.
- Fuel price/tankering differential vs base.
- Day-of-week/seasonal load pattern and belly-cargo capacity specific to the K Global operation.
- On-time reliability picture and ground-delay/flow-program exposure.

> **Live data — pull at planning:** fuel price, slot/CTOT file, current ATFM/ground-delay program, demand/load, stand allocation. Not stored in this durable file.

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim material may inform content but is not listed here.*

- **SIA France eAIP, AD 2 LFBD**, cycle effective 14 MAY 2026 — https://www.sia.aviation-civile.gouv.fr/media/dvd/eAIP_14_MAY_2026/FRANCE/AIRAC-2026-05-14/html/eAIP/FR-AD-2.LFBD-fr-FR.html (retrieved 2026-07-26).
- OurAirports — https://ourairports.com/airports/LFBD/ (retrieved 2026-07-26). *Cross-check only.*

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-26 | Built from SIA France eAIP; K Global fields from live VAMSYS; 4-page pack. |
