# LFSB — Basel-Mulhouse · Dispatch Page

**LFSB / BSL** · Saint-Louis, Haut-Rhin, France (EuroAirport Basel-Mulhouse-Freiburg — trinational field, published in the French AIP) · Europe
**Version** v0.1 · **Updated** 2026-07-26 · **Status** Draft

> **Read-me:** Dispatcher/commercial planning aid for the sim, not a chart. Companion to the [LFSB Briefing](index.md) (informational), [Departure](departure.md) and [Arrival](arrival.md) pages. Static airport/commercial characteristics only; live fuel prices, slot files, CTOTs and demand are pulled at planning (see §Live-data). Any procedure/approach is named only — fly/verify the charted current-AIRAC version. Open 🟧 items are in §Open items. Flag legend 🟥 restriction/hazard · 🟧 caution/unverified · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| Role in network | Destination / diversion field — **not a base** `[VAMSYS mirror 2026-07-26]` 🟧 (exact route assignment not specified in this build) |
| K Global category | **H** `[VAMSYS mirror 2026-07-26]` |
| Terminals in use for us | 🟧 Not detailed in the reachable AIP extract. The field is administered binationally with separate French (0400–2300) and Swiss (0415–2300) customs desks on-site, implying a dual-sector passenger facility — exact terminal/hall layout not confirmed |
| Widebody stands available | 🟧 Not published / verify. Code F traffic (A380/An-225-class) is accommodated under special ground procedures (§3/Briefing §13), but a specific widebody stand count/layout was not captured this pass |
| Slot regime | **COHOR**-coordinated (French national slot coordinator) — exact IATA level (2 vs 3) not confirmed 🟧 |
| Curfew | **Yes** — binational decree, hard Chapter-3 (>97 EPNdB) night landing ban 2300–0800 plus general commercial curfew clauses 🟥 |
| Primary handling agent | Jet Aviation, AMAC, Air Service Basel (ASB), NOMAD, SR Technics; also Swissport, CGS — primary contractor for our operation not confirmed 🟧 |
| Fuel supplier(s) | **SASCA** and **KLINZING Aviation** |
| Customs / PoE for pax | **Yes** — French customs 0400–2300, Swiss customs 0415–2300, immigration H24 🟧 |
| De-icing | **Available**, except overnight **0000–0600 local** |

---

## 2. Terminals & concourses

- **Terminal layout:** 🟧 Not detailed in the reachable AIP extract. The field is a single trinational airport under binational (French-Swiss) public administration ("Etablissement Public Franco-Suisse Aéroport de Bâle-Mulhouse"), with the administering body maintaining addresses in both Saint-Louis, FRANCE and Basel, SUISSE. On-site French customs (0400–2300) and Swiss customs (0415–2300) operate on different hours, implying separate national processing sectors within the terminal — exact concourse/hall split not confirmed.
- **Our operation uses:** Not specified in this build — confirm gate/terminal assignment with handling. 🟧
- **International arrivals / CBP-equivalent hall:** French and Swiss customs desks operate on-site (0400–2300 and 0415–2300 respectively); immigration and border police (police aux frontières) are H24. Confirm which hall applies to a given routing/nationality mix.
- **Notes:** 🟧 Binational dual-customs structure is a real operational nuance for pax flow — build extra connection-time margin until the exact hall/terminal split is confirmed locally.

---

## 3. Stands / gates (by code letter & our fleet)

- **Widebody (Code E/F) stands:** 🟧 Not published / verify. Code F aircraft (A380-800, B747-8F, Antonov 124, Lockheed C-5 Galaxy, Antonov 225) are handled under mandatory special ground procedures (thresholds-only runway entry/exit, CAT III holding points, FOLLOW-ME escort for the A380 and An-225) — see [Briefing §3.5/§13](index.md) — but a specific stand/gate layout for these types was not captured this pass.
- **Stands NOT usable by our types:** **TWY A, C, C1, J, K are wingspan-restricted to <36 m** — any stand reached only via these taxiways is not usable by Code E/F aircraft.
- **Remote / hardstand positions:** South main parking + Cargo apron (concrete, 68 F/B/W/T; cargo apron 72 R/B/W/T) and North main parking + express-freight apron (mixed concrete/asphalt, 68 F/B/W/T; express-freight 50 R/B/W/T) — specific remote/hardstand counts not published. 🟧
- **Contact vs remote for our arrivals:** Not confirmed. 🟧
- **Ground-movement stand caveats:** The two runway pairs (07/25 and 15/33) **physically cross** at the ARP — expect crossing instructions on any stand-to-runway taxi. **U-turns are forbidden anywhere on the platform.** See [Briefing §13](index.md) and the Departure/Arrival taxi sections.

---

## 4. Slots, curfew & CTOT regime

- **Slot coordination level:** **COHOR**-coordinated (French national slot coordinator); exact IATA Level (2 vs 3) not independently confirmed this pass. 🟧
- **Curfew / night restriction:** Binational decree ("Arrêté du 6 août 2021") — Chapter 3 (ICAO Annex 16) aircraft certified above **97 EPNdB** may not land **2300–0800**, nor **2100–2300 on Sundays** and joint French/Swiss public holidays (1 January, Good Friday, Easter Monday, 1 May, 25 December, 26 December; winter LT, summer −1 hr). General commercial-flight restrictions further prohibit landing **2300–0400** and stand departure for takeoff roughly **2300–0500** 🟧 (exact end-hour not independently re-confirmed — verify AD 2 LFSB.21.1.2.3.1). Stand departure is also barred **2200–2300** unless the flight was delayed for reasons beyond the carrier's control (in which case takeoff in that window is permitted, with reasons owed to the civil aviation authorities within 48 hours). 🟥
- **CTOT / flow control:** Not independently confirmed for LFSB specifically — general EUROCONTROL Network Manager ATFM/CTOT practice applies as a COHOR-coordinated French field. 🟧
- **Commercial impact:** The binational curfew is the dominant schedule constraint here — a late rotation risks either a prohibited landing/departure or an administrative fine of up to **€40,000** per the decree. Build buffer into any leg where a delay could push arrival past 2300 or departure into the overnight window.

---

## 5. Handling agents & turnaround

- **Handling agent(s):** Jet Aviation, AMAC, Air Service Basel (ASB), NOMAD, SR Technics; also Swissport, CGS. Specific contractor for our operation not confirmed. 🟧
- **Typical turnaround time for our type:** Not independently confirmed; VAMSYS mirror gives **taxi-in 13 min / taxi-out 16 min** for planning purposes `[VAMSYS mirror 2026-07-26]` — build the gate turn around these plus standard service times.
- **Services:** Cargo handling facilities are described as modern; push-back, GPU/PCA, water/lav, catering and cabin services are expected at a standard international stand — not individually itemised in the reachable extract. 🟧
- **Turnaround risk items:** De-icing-pad unavailability overnight (0000–0600), the crossing-runway ground-movement geometry, and the wingspan-restricted taxiways (A/C/C1/J/K) can each add unplanned turn time for larger types.

---

## 6. Load factors & seasonality

- **Demand peaks:** Not published / verify — no LFSB-specific demand data captured this pass. 🟧
- **Day-of-week / seasonal pattern:** Not published / verify. 🟧
- **Cargo / belly capacity:** Cargo handling facilities are described as modern, with a dedicated cargo apron (PCN 72 R/B/W/T) and express-freight apron (PCN 50 R/B/W/T) — belly/freighter split for our operation not confirmed. 🟧
- **Connection banks:** Not published / verify. 🟧

---

## 7. Fuel

- **Supplier / into-plane:** **SASCA** and **KLINZING Aviation**.
- **Uplift availability & hours:** JET A1 (CIV-MIL) and AVGAS, **0400–2200**. Outside these hours, refuelling is restricted to scheduled/delayed commercial flights, State flights and MEDEVAC with advance notice before **2000 local** to a standby phone line (odd months SASCA, even months KLINZING). 🟧
- **Price / tankering angle:** Not published / verify — pull live at planning. 🟧
- **Quality / freeze notes:** Standard JET A1. Storage capacity max **1,980 m³**. SASCA trucks: JET A1, **180 m³** capacity, flow 25/50/105 m³/hr. KLINZING trucks: JET A1, **500 m³** capacity, flow 50/120 m³/hr; AVGAS 6 m³. No cold-soak/fuel-freeze consideration specific to LFSB itself. See [`OM E — Fuel Policy`](../../../../../flight-ops/fuel-policy.md).

---

## 8. Customs / immigration & PoE for pax

- **Port of Entry:** Yes.
- **CBP-equivalent / immigration hours:** French customs **0400–2300**; Swiss customs **0415–2300**; immigration and police aux frontières **H24**. 🟧 (customs coverage is near round-the-clock but not full H24)
- **Pre-clearance / visa-transit notes:** Binational dual-customs structure — confirm the correct desk (French vs Swiss) for the passenger nationality/flow on a given rotation. 🟧
- **Late/overnight/diversion caveat:** The **binational noise-curfew regime** (§4) is the dominant late/overnight constraint rather than customs-desk staffing — a delayed arrival near or after 2300 risks the Chapter-3/general commercial landing ban regardless of customs hours. 🟥

---

## 9. De-icing provisioning & season

- **Availability:** **Available**, except overnight **0000–0600 local**. 🟩 (with the overnight gap noted 🟧)
- **Season:** Not specified in the reachable extract — plan for standard Central European winter operations generically and confirm locally. 🟧
- **Provisioning:** Dedicated de-icing stands up to Code C at **F5, F6, F7 and the North corridor**; Code D and above are de-iced **on stand**.
- **Commercial impact:** The overnight de-icing gap (0000–0600) compounds the binational curfew window — a winter rotation that slips into the very early morning faces both a potential curfew issue and no de-icing service until 0600. See [`OM E — Cold Weather Operations`](../../../../../flight-ops/cold-weather-operations.md).

---

## 10. Typical delays / reliability

- **Signature delay driver:** Not independently confirmed for LFSB — the binational curfew/decree regime and the overnight de-icing gap are the clearest structural delay-risk drivers identified in this build. 🟧
- **Ground-delay / flow-program exposure:** Not published / verify. 🟧
- **On-time reliability picture:** Not published / verify. 🟧

---

## 11. Curfew & noise-charge commercial impact

- **Noise-charge regime:** Non-compliance with the binational noise decree can lead to an ACNUSA-equivalent administrative fine of up to **€40,000** for a corporate entity — a direct financial disincentive against curfew-adjacent operations.
- **Curfew infringement consequence:** The Chapter-3 (>97 EPNdB) night landing ban (2300–0800) and the general commercial-flight landing/stand-departure restrictions (§4) are **hard movement restrictions**, not merely charges — a non-exempt movement outside the permitted windows is disallowed outright, not simply penalised.
- **Scheduling guardrails:** Build buffer so a normal operational delay does not push a landing into the 2300–0400 window or a stand departure into the 2300–~0500 window (🟧 exact end-hour unconfirmed, §4); treat any schedule slipping toward 2200–2300 as requiring the delay-justification and 48-hour-notification process described in §4.

---

## Open items (🟧 — confirm against AIP / operator data)

- Terminal/concourse layout and gate assignment for our operation.
- Widebody (Code E/F) stand count and layout.
- Ground handling agent(s) contracted for our operation and confirmed minimum turnaround time.
- Slot-coordination level (IATA Level 2 vs 3) — COHOR-coordinated confirmed, level not independently verified.
- Exact end-hour of the commercial stand-departure curfew window (~0500 pattern estimate) — verify AD 2 LFSB.21.1.2.3.1.
- Fuel price/tankering angle.
- Demand seasonality, day-of-week pattern and belly-cargo capacity specific to the K Global operation.
- De-icing season/months (not specified in the reachable extract).
- Typical delay drivers / on-time reliability picture.

> **Live data — pull at planning:** fuel price, slot/CTOT file, current ATFM/ground-delay program, demand/load, stand allocation, current AUP/UUP or RAD status. Not stored in this durable file.

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim material may inform content but is not listed here.*

- **SIA France (Service de l'Information Aéronautique) eAIP — AD 2 LFSB**, eff. 14 MAY 2026, AIRAC cycle 09 JUL 2026 (retrieved 2026-07-26) — https://www.sia.aviation-civile.gouv.fr/ — hours/services, fuel, handling, customs, curfew/noise decree, de-icing provisioning.

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-26 | Built from SIA France eAIP; K Global fields from live VAMSYS; 4-page pack. |
