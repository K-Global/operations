# LFOB — Beauvais-Tillé · Dispatch Page

**LFOB / BVA** · Beauvais, Hauts-de-France, France · Europe
**Version** v0.1 · **Updated** 2026-07-26 · **Status** Draft

> **Read-me:** Dispatcher/commercial planning aid for the sim, not a chart. Companion to the [LFOB Briefing](index.md) (informational), [Departure](departure.md) and [Arrival](arrival.md) pages. Static airport/commercial characteristics only; live fuel prices, slot files and demand are pulled at planning (see §Live-data). Any procedure/approach is named only — fly/verify the charted current-AIRAC version. Open 🟧 items are in §Open items. Flag legend 🟥 restriction/hazard · 🟧 caution/unverified · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| Role in network | **Secondary destination / alternate** — not a K Global base `[VAMSYS mirror 2026-07-26]` |
| Terminals in use for us | Single passenger terminal complex (two connected buildings); no widebody-class boarding infrastructure |
| Widebody stands available | **None** — 12 numbered apron stands, all narrowbody-rated (PCN 39–69) |
| Slot regime | 🟧 None identified in reachable sources — not confirmed as IATA Level 2/3 |
| Curfew | **Hard ban 0000–0500 local**; Chapter-3 noise-margin restriction 2200–0000 & 0500–0700 🟥 |
| Primary handling agent | Not confirmed in reachable public sources 🟧 |
| Fuel supplier(s) | **AVITAIR** (AVGAS 100LL, JET A1 TR0) |
| Customs / PoE for pax | **Yes** — desk on field; exact hours not confirmed 🟧 |
| De-icing | **On request**, typ. Oct–May; no dedicated pads |

---

## 2. Terminals & concourses

- **Terminal layout:** A single passenger-facing terminal complex; not a multi-terminal hub structure. No jetway/pier-based widebody boarding infrastructure identified.
- **Our operation uses:** The single terminal building — no terminal choice to plan around, unlike a multi-terminal field.
- **International arrivals / CBP hall:** Customs/police presence confirmed on field (§Dispatch §8); exact hall/hours not independently confirmed. 🟧
- **Notes:** No terminal-transition programme or construction noted in reachable sources. 🟩

---

## 3. Stands / gates (by code letter & our fleet)

- **Widebody (Code E/F) stands:** **None identified** — this is a narrowbody-only field by apron design (12 numbered stands, PCN range 39–69). 🟩 Non-issue for a secondary-destination/alternate role.
- **Stands NOT usable by our types:** None flagged specifically as unusable for narrowbody LCC-class equipment; the field's overall apron design is narrowbody-oriented.
- **Remote / hardstand positions:** Not independently itemised beyond the 12 numbered stands. 🟧
- **Contact vs remote for our arrivals:** Not confirmed — a secondary/low-cost field of this size commonly uses a mix of contact and remote/bussed positions; confirm with handling. 🟧
- **Ground-movement stand caveats:** Simple single-runway apron/taxiway layout (see [Briefing §13](index.md)) — no AIP-flagged complex ground junctions identified.

---

## 4. Slots, curfew & CTOT regime

- **Slot coordination level:** 🟧 Not confirmed in reachable sources — no IATA Level 2/3 coordination identified for LFOB.
- **Curfew / night restriction:** 🟥 **Hard movement ban 0000–0500 local.** Chapter-3 aircraft with cumulative noise margin **<5 EPNdB** are additionally restricted 2200–0000 and 0500–0700. A narrow, criteria-based exemption path exists for a 0000–0100 landing only — not a general late-arrival allowance.
- **CTOT / flow control:** Not independently confirmed for LFOB; standard EUROCONTROL Network Manager ATFM/CTOT regulation may apply in network-wide disruption. 🟧
- **Commercial impact:** The **non-H24 ATS window (0615–2200, extendable for scheduled flights)** combined with the hard night ban makes **last-rotation buffer** the primary scheduling guardrail at this field — there is materially less late-evening/early-morning flexibility than at a slot-coordinated H24 hub.

---

## 5. Handling agents & turnaround

- **Handling agent(s):** Not confirmed in reachable public sources. 🟧 General handling services are published as available 0615(ATS)/0515(AD)–2145/2200.
- **Typical turnaround time for our type:** Not confirmed. 🟧 VAMSYS taxi-in/taxi-out fields are **not set (n/a)** for this field — no planning figure available from that source either.
- **Services:** Standard narrowbody turnaround services expected (push-back, GPU, water/lav, catering); cargo handling and hangar/repair for visiting aircraft are explicitly **NIL** per AIP.
- **Turnaround risk items:** De-icing is **on-request** rather than pad-based (§9) — this can add unplanned turn time in the Oct–May season if throughput is constrained. The non-H24 ATS window also compresses the usable operating day relative to an H24 field.

---

## 6. Load factors & seasonality

- **Demand peaks:** Consistent with a low-cost/charter-oriented secondary gateway serving the greater Paris catchment area — expect leisure/seasonal skew rather than steady business traffic. No K Global-specific demand data available this pass. 🟧
- **Day-of-week / seasonal pattern:** Not independently sourced for LFOB specifically. 🟧
- **Cargo / belly capacity:** Cargo handling facilities are explicitly **NIL** per AIP — no belly-cargo planning relevant at this field.
- **Connection banks:** As a secondary destination/alternate (not a base), LFOB does not anchor a connection bank in the K Global network schedule.

---

## 7. Fuel

- **Supplier / into-plane:** **AVITAIR** — AVGAS 100LL and JET A1 TR0.
- **Uplift availability & hours:** AVGAS 100LL via automatic dispenser, **H24**, card payment. JET A1 TR0 tied to **ATS hours (0615–2200, extendable for scheduled flights)** — not a standing H24 uplift. 🟧
- **Price / tankering angle:** As a secondary destination/alternate, LFOB is not the network's tankering reference point; assess price differentials against the outbound base per leg. See [`OM E — Fuel Policy`](../../../../../flight-ops/fuel-policy.md).
- **Quality / freeze notes:** Standard JET A1 TR0; no cold-soak/fuel-freeze consideration specific to this field.

---

## 8. Customs / immigration & PoE for pax

- **Port of Entry:** Yes — customs/police desk confirmed present on field.
- **CBP-equivalent / immigration hours:** Not confirmed in reachable public sources; presumed tied to ATS/scheduled-flight hours rather than standing H24 coverage. 🟧
- **Pre-clearance / visa-transit notes:** Standard Schengen/non-Schengen entry per nationality; no pre-clearance programme identified.
- **Late/overnight/diversion caveat:** The **hard night ban 0000–0500** is the dominant late/overnight constraint at this field rather than desk staffing — a delayed arrival cannot legally land in this window regardless of customs coverage. 🟥

---

## 9. De-icing provisioning & season

- **Availability:** **On request**, not a dedicated remote-pad operation. 🟧 Equipment: two Vestergaard Elephant MY de-icing units; fluid ABAX Ecowing AD2 Type 2.
- **Season:** Typically **October–May** per AIP.
- **Provisioning:** On-request basis implies more limited simultaneous throughput than a dedicated multi-pad hub — build schedule buffer accordingly in season.
- **Commercial impact:** De-icing queuing is the field's principal seasonal delay-risk driver, compounded by the non-H24 operating window. See [`OM E — Cold Weather Operations`](../../../../../flight-ops/cold-weather-operations.md).

---

## 10. Typical delays / reliability

- **Signature delay driver:** Winter fog/low-cloud events (§Briefing §14), compounded by the **RWY 30 CAT-I-only limitation** — if wind favours RWY 30 during a low-vis event, the field's approach capability is capped below RWY 12's CAT III level.
- **Ground-delay / flow-program exposure:** Not independently confirmed for LFOB; a single-runway secondary field of this size is not expected to carry the flow-program exposure of a major hub. 🟧
- **On-time reliability picture:** Winter mornings (fog) and the de-icing on-request throughput limit are the primary schedule-risk exposures. 🟧

---

## 11. Curfew & noise-charge commercial impact

- **Noise-charge regime:** Not independently confirmed in reachable sources beyond the Chapter-3 noise-margin movement restriction itself (§4/§Briefing §12). 🟧
- **Curfew infringement consequence:** The **0000–0500 ban is a hard movement restriction**, not a chargeable event — a non-exempt take-off/landing in this window is disallowed outright, with only a narrow criteria-based exemption for a 0000–0100 landing.
- **Scheduling guardrails:** Build buffer into the last rotation of the day so a normal operational delay does not push a landing or departure into the restricted 2200–0000/0500–0700 window, let alone the hard 0000–0500 ban.

---

## Open items (🟧 — confirm against AIP / operator data)

- Slot-coordination level (none confirmed — treated as uncoordinated pending verification).
- Handling agent(s) contracted for our operation and confirmed minimum turnaround time.
- Customs/immigration desk hours.
- Terminal/gate assignment detail and contact-vs-remote stand allocation for our operation.
- Demand/seasonality pattern and any noise-charge schedule specific to LFOB.
- VAMSYS taxi-in/taxi-out — not set (n/a); no planning figure available from that source.

> **Live data — pull at planning:** fuel price, current ATFM/ground-delay program status, demand/load, stand allocation, current AUP/UUP or RAD status in the Paris FIR. Not stored in this durable file.

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim material may inform content but is not listed here.*

- **AIP France, AD 2 LFOB** (AIRAC AMDT 02/25, eff. 20 Feb 2025; RFFS AMDT 13/23, eff. 28 Dec 2023) — compiled/mirrored via DIRCAM MIAC1, https://www.dircam.dsae.defense.gouv.fr/images/Stories/Doc/MIAC1/miac1_beauvais_lfob.pdf (retrieved 2026-07-26).
- OurAirports — https://ourairports.com/airports/LFOB/ (retrieved 2026-07-26). *Cross-check.*
- Wikipedia — "Beauvais–Tillé Airport" — https://en.wikipedia.org/wiki/Beauvais%E2%80%93Till%C3%A9_Airport (retrieved 2026-07-26). *Curfew/terminal background.*

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-26 | Built from SIA France eAIP; K Global fields from live VAMSYS; 4-page pack. |
