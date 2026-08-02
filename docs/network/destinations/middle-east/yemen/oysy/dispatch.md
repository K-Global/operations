# OYSY — Sayun Intl · Dispatch Page

**OYSY / GXF** · Seiyun (Say'un), Hadhramaut Governorate, Yemen · Middle East
**Version** v0.1 · **Updated** 2026-07-26 · **Status** Draft — public-data build, primary AIP unreachable

> **Read-me:** Dispatcher/commercial planning aid for the sim, not a chart. Companion to the [OYSY Briefing](index.md) (informational), [Departure](departure.md) and [Arrival](arrival.md) pages. Static airport/commercial characteristics only; live fuel prices, slot files, CTOTs and demand are pulled at planning (see §Live-data). Any procedure/approach is named only. Open 🟧 items are in §Open items. Flag legend 🟥 restriction/hazard · 🟧 caution/unverified · 🟩 normal.

---

> 🟥 **STANDING CAUTION — Yemen active-conflict airspace.** OYSY is **not in VAMSYS** and carries no company destination record. Although this field lies inland and has not been reported as a direct strike target, it sits inside the Sana'a FIR (OYSC), assessed **HIGH risk at all altitudes** by EASA CZIB. This page is reference/situational-awareness material only. See the [Middle East Airspace brief](../../../../airspace/middle-east.md) §9.

---

## 1. Snapshot

| Field | Value |
|---|---|
| Role in network | **Not in VAMSYS** — no destination record; no role in the network 🟧 |
| Terminals in use for us | Not applicable |
| Widebody stands available | Not published / verify 🟧 |
| Slot regime | Not applicable |
| Curfew | 🟥 **De facto — runway not lighted, effectively day-only** |
| Primary handling agent | Not applicable — no scheduled operation |
| Fuel supplier(s) | Not published / verify 🟧 |
| Customs / PoE for pax | Tagged Port of Entry in public data; hours not published 🟧 |
| De-icing | NIL — not a climate consideration |

---

## 2. Terminals & concourses

- **Terminal layout:** A passenger terminal exists; no concourse/pier breakdown obtained from a reachable public source. 🟧
- **Our operation uses:** Not applicable — no scheduled K Global operation; field carries no VAMSYS record.
- **International arrivals / CBP-equivalent hall:** Tagged as a Port of Entry in public data; hall location/hours not published. 🟧
- **Notes:** As of September 2022, the field's sole reported user/carrier operated flights to Aden, Cairo and Jeddah — a thin service pattern; do not assume full international-gateway terminal infrastructure. 🟧

---

## 3. Stands / gates (by code letter & our fleet)

- **Widebody (Code E/F) stands:** Not published / verify — the reported 37 m runway width would need checking against any widebody's code-letter requirement before this were ever relevant. 🟧
- **Stands NOT usable by our types:** Not published / verify. 🟧
- **Remote / hardstand positions:** Not published / verify. 🟧
- **Contact vs remote for our arrivals:** Not applicable.
- **Ground-movement stand caveats:** Not published / verify — remote interior field, limited-infrastructure profile assumed pending confirmation. 🟧

---

## 4. Slots, curfew & CTOT regime

- **Slot coordination level:** Not applicable. 🟧
- **Curfew / night restriction:** 🟥 **De facto night restriction — runway reported not lighted.** No published curfew regime beyond this structural limit.
- **CTOT / flow control:** Not applicable.
- **Commercial impact:** None assessed — not a commercial planning candidate under the standing caution.

---

## 5. Handling agents & turnaround

- **Handling agent(s):** Not published / verify. 🟧
- **Typical turnaround time for our type:** **Not in VAMSYS** — no taxi-time or turnaround figure available. 🟧
- **Services:** Not published / verify. 🟧
- **Turnaround risk items:** Limited-infrastructure interior field — assume minimal service depth pending confirmation. 🟧

---

## 6. Load factors & seasonality

- **Demand peaks:** Not applicable — no scheduled K Global service.
- **Day-of-week / seasonal pattern:** Not published / verify. 🟧
- **Cargo / belly capacity:** Not published / verify. 🟧
- **Connection banks:** Not applicable.

---

## 7. Fuel

- **Supplier / into-plane:** Not published / verify. 🟧
- **Uplift availability & hours:** Not published / verify. 🟧
- **Price / tankering angle:** Not applicable — no live pricing available; tankering-in would be the conservative default if this field were ever relevant.
- **Quality / freeze notes:** Not published / verify; not expected to be a cold-soak-relevant field.

---

## 8. Customs / immigration & PoE for pax

- **Port of Entry:** Tagged as a Port of Entry in public data (OurAirports #customs tag).
- **CBP-equivalent / immigration hours:** Not published / verify. 🟧
- **Pre-clearance / visa-transit notes:** Not published / verify. 🟧
- **Late/overnight/diversion caveat:** Not applicable — no night capability (unlit runway).

---

## 9. De-icing provisioning & season

- **Availability:** NIL — not a climate consideration at this field.
- **Season:** Not applicable.
- **Provisioning:** Not applicable.
- **Commercial impact:** None.

---

## 10. Typical delays / reliability

- **Signature delay driver:** Structural — unlit runway forces day-only operation; beyond that, security/airspace status. 🟥
- **Ground-delay / flow-program exposure:** Not applicable.
- **On-time reliability picture:** No reliability data available; not a commercial planning candidate. 🟧

---

## 11. Curfew & noise-charge commercial impact

- **Noise-charge regime:** Not published / verify. 🟧
- **Curfew infringement consequence:** Not applicable.
- **Scheduling guardrails:** Not applicable — no schedule should be built against this field under the standing caution.

---

## Open items (🟧 — confirm against AIP / operator data)

- Every commercial figure in this page is unconfirmed from a primary source — AIP Yemen (CAMA) was not reachable this pass.
- Runway lighting status ("not lighted" per OurAirports) should be re-confirmed against a primary source before being treated as a hard constraint in any future planning exercise.
- VAMSYS absence confirmed as of this build; re-confirm if network status ever changes.
- Security/airspace status is perishable — re-check against the ICAO Conflict Zone Information Repository, EASA CZIBs and OPSGROUP/safeairspace.net at any planning touchpoint.

> **Live data — pull at planning:** fuel price, current demand/load, stand allocation, and — critically for this field — current security-clearance and conflict-zone NOTAM status. Not stored in this durable file.

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim material may inform content but is not listed here.*

- OurAirports — https://ourairports.com/airports/OYSY/ (retrieved 2026-07-26). *Port-of-Entry tag, runway-lighting cross-check.*
- Wikipedia — "Seiyun Airport" — https://en.wikipedia.org/wiki/Seiyun_Airport (retrieved 2026-07-26). *2022 carrier/route pattern.*
- Safe Airspace (OPSGROUP) — "Yemen" — https://safeairspace.net/yemen/ (retrieved 2026-07-26). *Live conflict-zone risk picture.*

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-26 | Built from public aeronautical data (AIP/status verification pending); K Global fields from live VAMSYS; 4-page pack. |
