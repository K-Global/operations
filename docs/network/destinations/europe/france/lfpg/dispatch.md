# LFPG — Paris Charles de Gaulle · Dispatch Page

**LFPG / CDG** · Roissy-en-France, Île-de-France, France · Europe
**Version** v0.1 · **Updated** 2026-07-26 · **Status** Draft

> **Read-me:** Dispatcher/commercial planning aid for the sim, not a chart. Companion to the [LFPG Briefing](index.md) (informational), [Departure](departure.md) and [Arrival](arrival.md) pages. Static airport/commercial characteristics only; live fuel prices, slot files, CTOTs and demand are pulled at planning (see §Live-data). Any procedure/approach is named only — fly/verify the charted current-AIRAC version. Open 🟧 items are in §Open items. Flag legend 🟥 restriction/hazard · 🟧 caution/unverified · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| Role in network | **Destination / alternate-network field — not a K Global base** `[VAMSYS mirror 2026-07-26]` |
| Terminals in use for us | Not individually confirmed — CDG operates **Terminal 1**, the **Terminal 2 series (2A–2G)** and **Terminal 3**; see §2 🟧 |
| Widebody stands available | Not individually confirmed by terminal this pass; the Terminal 2 series (notably 2E/2F/Satellite 3-4) is the historic widebody/long-haul cluster at this hub 🟧 |
| Slot regime | **IATA Level 3** — coordinator **COHOR** |
| Curfew | **None (H24 field)** — a **night quota/slot-restriction regime** applies instead 🟧 | 
| Primary handling agent | Not confirmed 🟧 |
| Fuel supplier(s) | Jet A-1, major-hub multi-supplier assumed; not individually confirmed 🟧 |
| Customs / PoE for pax | **Yes** — international halls across T1/T2-series/T3; exact desk hours not confirmed 🟧 |
| De-icing | Assumed available at this hub scale; provisioning/season not confirmed this pass 🟧 |

---

## 2. Terminals & concourses

- **Terminal layout:** **Terminal 1** — the original 1974 circular Paul Andreu design with seven satellite buildings, refurbished 2020–2023. **Terminal 2** — a linear complex expanded into **seven sub-terminals, 2A through 2G**, interconnected by elevated walkways (2A–2F) with 2G reachable only by shuttle bus; the CDGVAL light-rail and RER B/TGV rail station sit within the Terminal 2 complex. **Terminal 3** — a single arrivals/departures building with **no boarding gates**; all passengers are bussed to stand, historically used for charter/low-cost carriers.
- **Our operation uses:** Not confirmed for K Global specifically this pass 🟧 — terminal/gate assignment depends on handling-agent allocation at planning; the Terminal 2 series (particularly the 2E/2F/Satellite cluster, purpose-built for long-haul widebody and A380 traffic) is the most probable assignment for an intercontinental widebody operation at this hub, but this is **not a confirmed allocation**.
- **International arrivals / CBP-equivalent hall:** International arrivals clear passport control within the assigned terminal; **CDGVAL** (automated people-mover) connects T1, T2 and T3 — build inter-terminal connection time accordingly for any onward network leg.
- **Notes:** 🟧 CDG's terminal programme has seen substantial reconfiguration in recent years (T2A/2C baggage-system renovation reopened 23 May 2024; T2D reopened 18 Apr 2023; T2B reopened 2 Jun 2021) — confirm current terminal/gate assignment with handling before finalising a stand plan. Groupe ADP has also announced a **terminal renaming programme effective March 2027** — treat current terminal labels (T1/T2x/T3) as subject to change on that date.

---

## 3. Stands / gates (by code letter & our fleet)

- **Widebody (Code E/F) stands:** Not individually confirmed for K Global this pass 🟧. The Terminal 2E/2F cluster (including Satellite 3, opened 2007, and Satellite 4, opened 2012, both purpose-built for A380/Code F aircraft) is the historic widebody/long-haul concentration at this hub.
- **Stands NOT usable by our types:** Terminal 3 operates a **no-boarding-gate, all-bus model** — every passenger movement to/from a Terminal 3 stand is by airport bus; confirm this is compatible with the planned turnaround before assigning a K Global widebody there.
- **Remote / hardstand positions:** Not confirmed this pass; a bus-boarding/remote-stand model is standard at Terminal 3 by design. 🟧
- **Contact vs remote for our arrivals:** Expect a contact widebody gate for a scheduled international arrival in the Terminal 2 series; confirm with handling. 🟧
- **Ground-movement stand caveats:** The **segregated dependent-parallel-doublet runway assignment**, the **TJ1/TJ2/TJ3 (Terminal 2G) taxiway-excursion caution area**, and the **Terminal 2 apron intermediate holding points** (e.g. Stop TE1, Middle 1–4, FedEx apron) all affect ground routing between stands and the runway system — see [Briefing §13](index.md) and the Departure/Arrival taxi sections.

---

## 4. Slots, curfew & CTOT regime

- **Slot coordination level:** **IATA Level 3** — coordinator **COHOR** (the single French slot coordinator, also covering LFPO and LFOB in this network). 🟥
- **Curfew / night restriction:** **No hard curfew — the field operates 24/24H.** A **night quota/slot-restriction regime** applies instead, under a 6 Nov 2003 Ministerial decree (amended 2 May 2012, consolidated 2019): **departures restricted 00:00–04:59** and **arrivals restricted 00:30–05:29** local block time. Movements within these windows require an **airline-held quota slot** allocated by COHOR; an airline without an allocated quota **cannot operate** in the restricted window at all. Cancelled or unused night quota is **permanently lost for the season — no rollover.** A separate acoustic-classification restriction additionally limits the noisiest aircraft categories across a wider night window — exact hours/classes not independently confirmed this pass. 🟥
- **CTOT / flow control:** EUROCONTROL Network Manager ATFM/CTOT regulation applies as standard practice for a congested, slot-coordinated EU hub. 🟧 COHOR also publishes seasonal (S/W) **runway-capacity coordination parameters** (10-minute-period slot caps by hour) and **terminal-capacity (departure passenger flow) limits** per season — these shape schedulable frequency at this field but exact current-season figures were not extracted this pass. 🟧
- **Commercial impact:** With no hard curfew, the dominant scheduling constraint is **slot availability and the night-quota mechanism** rather than a fixed close-out time — a late-evening rotation that slips into the quota-restricted window risks being **unable to operate at all** without a pre-held quota slot, regardless of operational cause.

---

## 5. Handling agents & turnaround

- **Handling agent(s):** Not confirmed in reachable public sources this pass. 🟧
- **Typical turnaround time for our type:** Not independently confirmed; VAMSYS mirror gives **taxi-in 18 min / taxi-out 20 min** for planning purposes `[VAMSYS mirror 2026-07-26]` — build the gate turn around these plus standard widebody service times.
- **Services:** Push-back, GPU/PCA, potable water/lav, catering and cabin services all expected at a hub-scale Code E/F stand; note **push-back clearance is valid for one minute only** — re-confirm before proceeding if push does not commence promptly (see [Briefing §4](index.md)).
- **Turnaround risk items:** Gate/terminal assignment uncertainty (given the terminal-programme reconfiguration noted in §2), de-icing-pad throughput in winter (not independently confirmed), and ground-routing complexity around the segregated runway doublets and Terminal 2 apron intermediate holding points can each add unplanned turn time.

---

## 6. Load factors & seasonality

- **Demand peaks:** Not independently sourced for the K Global operation specifically; CDG overall handles very high year-round intercontinental/European demand (world's 14th-busiest airport in 2024, ~70.3M passengers, ~466,500 movements) as France's principal long-haul hub and major international connecting point. 🟧
- **Day-of-week / seasonal pattern:** Not independently sourced for our operation — treat as standard major-hub business/leisure mix pending network-schedule confirmation. 🟧
- **Cargo / belly capacity:** CDG is Europe's second-busiest cargo airport after Frankfurt (≈1.9M tonnes in 2024) — confirm K Global belly-cargo uplift plans against payload at planning. 🟧
- **Connection banks:** Not confirmed for the K Global schedule at this field — cross-ref the route register for inbound/outbound wave structure.

---

## 7. Fuel

- **Supplier / into-plane:** Jet A-1 assumed available as a major hub; specific into-plane provider not confirmed in reachable public sources. 🟧
- **Uplift availability & hours:** H24 assumed; not independently confirmed. 🟧
- **Price / tankering angle:** Assess price differentials against the home base and other network fields per leg — no LFPG-specific figure sourced this pass. See <../../../../../OM E Operations/Fuel Policy.md>.
- **Quality / freeze notes:** Standard Jet A-1; no cold-soak/fuel-freeze consideration specific to LFPG itself.

---

## 8. Customs / immigration & PoE for pax

- **Port of Entry:** Yes — international arrivals halls across Terminal 1, the Terminal 2 series and Terminal 3.
- **CBP-equivalent / immigration hours:** Not confirmed in reachable public sources; assumed major-hub H24 coverage. 🟧
- **Pre-clearance / visa-transit notes:** Standard Schengen/non-Schengen entry per nationality; no pre-clearance programme at LFPG.
- **Late/overnight/diversion caveat:** With **no hard curfew**, the dominant late/overnight constraint is the **night quota/slot-restriction mechanism** (§4) rather than immigration-desk staffing — a flight arriving inside the quota-restricted window without an allocated quota slot faces a regulatory (not just staffing) constraint. 🟥

---

## 9. De-icing provisioning & season

- **Availability:** Not confirmed in reachable public sources this pass; dedicated remote/central de-icing provisioning is assumed at this hub scale but not individually sourced. 🟧
- **Season:** Standard Central European de-icing season assumed (roughly Oct–Apr); not independently confirmed for LFPG. 🟧
- **Provisioning:** Not confirmed — see [Briefing §11](index.md). A de-icing-pad **entry/exit clearance requirement** and a **de-icing stop bar** are confirmed operational features (collision risk with de-icing trucks is a named local threat item). 🟩
- **Commercial impact:** Winter low-visibility periods combined with any de-icing-pad queuing are the principal seasonal delay-risk drivers at this field — build winter schedule buffer accordingly. See <../../../../../OM E Operations/Cold Weather Operations.md>.

---

## 10. Typical delays / reliability

- **Signature delay driver:** **Traffic-sequencing density** in the segregated dependent-parallel-doublet environment, compounded seasonally by **winter fog/low-visibility periods** (LVP reported historically under ~5% of the time per an industry ATC presentation).
- **Ground-delay / flow-program exposure:** High, given the field's traffic volume (one of Europe's busiest, Level 3 slot-coordinated) and its structurally complex four-runway segregated configuration — expect EUROCONTROL flow management in peak/adverse conditions. 🟧
- **On-time reliability picture:** Winter mornings (fog/low-vis) and any period of active terminal-programme reconfiguration carry the highest schedule-risk exposure at this field. 🟧

---

## 11. Curfew & noise-charge commercial impact

- **Noise-charge regime:** Not independently confirmed this pass — a noise-related charge structure is typical for a major EU hub of this scale but no LFPG-specific figure was sourced. 🟧
- **Curfew infringement consequence:** LFPG has **no hard curfew**; the operative consequence structure is instead **night-quota infringement**, enforced by **ACNUSA** (noise control authority), which may levy fines **up to €40,000** per infringement. An operational cause (including a diversion forced by the Orly curfew) is explicitly **not** an excusing circumstance under the governing decree.
- **Scheduling guardrails:** Because there is no fixed close-out time, the guardrail is **slot/quota discipline**, not a curfew buffer — avoid scheduling a rotation that depends on an unallocated night-quota slot, and treat any schedule slipping into the 00:00–05:29 window without a held quota as an **operational non-starter**, not merely a fee risk.

---

## Open items (🟧 — confirm against AIP / operator data)

- Terminal/gate assignment for the K Global operation (T1 / T2-series / T3) — not confirmed this pass.
- Ground handling agent(s) contracted for our operation and confirmed minimum turnaround time.
- Fuel into-plane provider and uplift hours.
- Customs/immigration desk hours across terminals.
- De-icing pad availability, location, provisioning and season.
- Noise-charge regime specifics (rate structure, QC/noise-category charging if any).
- EUROCONTROL CTOT/ATFM specifics for LFPG (general practice assumed, not independently sourced).
- Day-of-week/seasonal load pattern and belly-cargo capacity specific to the K Global operation.
- Current-season (S26/W26) COHOR runway-capacity and terminal-capacity coordination parameters (published as image data this pass, not extracted to figures).

> **Live data — pull at planning:** fuel price, slot/CTOT file, current ATFM/ground-delay program, demand/load, stand allocation, current AUP/UUP or RAD status in the Paris (LFFF) FIR. Not stored in this durable file.

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim material may inform content but is not listed here.*

- **SIA France eAIP, AD 2 LFPG** — https://www.sia.aviation-civile.gouv.fr/ (retrieved 2026-07-26). *Not extractable to raw fetch this pass — see Briefing page for access note.*
- COHOR — "Paris Charles de Gaulle Airport (CDG/LFPG)" — https://www.cohor.org/en/airports/aeroport-de-paris-charles-de-gaulle-cdg-lfpg/ (retrieved 2026-07-26). *Slot level/coordinator, night-restriction decrees, runway/terminal capacity parameters.*
- Wikipedia — "Charles de Gaulle Airport" — https://en.wikipedia.org/wiki/Charles_de_Gaulle_Airport (retrieved 2026-07-26). *Terminal layout/history, traffic and cargo statistics.*
- French Ministry for Ecology (ecologie.gouv.fr) — "LFPG/Paris-Charles de Gaulle/CDG" local-safety-team threat brief — https://www.ecologie.gouv.fr/sites/default/files/documents/CDG_en.pdf (retrieved 2026-07-26). *Ground-ops threat items (de-icing, push-back, apron holding points).*
- CE Delft — "Night Flight Restrictions and Airline Responses at Major European Airports" — https://cedelft.eu/wp-content/uploads/sites/2/2021/04/CE_Delft_7621_Night_Flight_Restrictions_FINAL.pdf (retrieved 2026-07-26). *Night quota-slot regime corroboration.*

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-26 | Built from SIA France eAIP; K Global fields from live VAMSYS; 4-page pack. |
