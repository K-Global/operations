# GOBD — Blaise Diagne Intl · Dispatch Page

**GOBD / DSS** · Diass, Thiès Region (serves Dakar), Senegal · Africa
**Version** v0.1 · **Updated** 2026-07-26 · **Status** Draft — provisional

> **Read-me:** Dispatcher/commercial planning aid for the sim, not a chart. Companion to the [GOBD Briefing](index.md) (informational), [Departure](departure.md) and [Arrival](arrival.md) pages. Static airport/commercial characteristics only; live fuel prices, slot files, CTOTs and demand are pulled at planning. Any procedure/approach is named only — fly/verify the charted current-AIRAC version. Open 🟧 items are in §Open items. Flag legend 🟥 restriction/hazard · 🟧 caution/unverified · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| Role in network | West-Africa network gateway / destination `[VAMSYS mirror 2026-07-26]` |
| Terminals in use for us | Single international terminal (whole-field build, opened 2017) — not individually confirmed for our specific gate assignment 🟧 |
| Widebody stands available | Not confirmed; the field routinely handles widebody international service (Emirates, Turkish, Delta, TAP) 🟧 |
| Slot regime | None found in reachable sources — assumed unrestricted |
| Curfew | None found in reachable sources 🟧 |
| Primary handling agent | Not confirmed 🟧 |
| Fuel supplier(s) | Not confirmed 🟧 |
| Customs / PoE for pax | **Yes** — Senegal's principal international Port of Entry; exact desk hours not confirmed 🟧 |
| De-icing | **NIL** — coastal-tropical field |

---

## 2. Terminals & concourses

- **Terminal layout:** Single modern international terminal complex, opened December 2017 to replace the in-city Léopold Sédar Senghor field; domestic/international split not confirmed. 🟧
- **Our operation uses:** Not individually confirmed — assume main international terminal pending local confirmation.
- **International arrivals / CBP hall:** Confirmed international arrivals facility (national Port of Entry); exact hall layout/connection implications not confirmed. 🟧
- **Notes:** A rail link (Train Express Regional Dakar–AIBD) connects the airport to downtown Dakar — relevant to crew/pax ground transport planning, not a terminal-operations item per se.

---

## 3. Stands / gates (by code letter & our fleet)

- **Widebody (Code E/F) stands:** Not confirmed; the field is understood to be widebody-capable given its current international operator mix, but stand count/config is not confirmed this pass. 🟧
- **Stands NOT usable by our types:** Not confirmed. 🟧
- **Remote / hardstand positions:** Not confirmed. 🟧
- **Contact vs remote for our arrivals:** Not confirmed. 🟧
- **Ground-movement stand caveats:** Cross-ref [GOBD Departure](departure.md) §2 and [Briefing](index.md) §13 — neither taxi hot spot nor stand-specific caveats were identified in reachable sources.

---

## 4. Slots, curfew & CTOT regime

- **Slot coordination level:** None found in reachable sources — assumed non-coordinated. 🟧
- **Curfew / night restriction:** None found in reachable sources. 🟧
- **CTOT / flow control:** Not confirmed; no ATFM/EDCT-style program identified for this field.
- **Commercial impact:** Absent a confirmed slot/curfew regime, schedule flexibility is assumed good — confirm locally before relying on this for schedule planning.

---

## 5. Handling agents & turnaround

- **Handling agent(s):** Not confirmed. 🟧
- **Typical turnaround time for our type:** Not confirmed; taxi-in/taxi-out is **12 min / 15 min** `[VAMSYS mirror 2026-07-26]`, which is on the longer side for a single-runway field and should be built into schedule block times. 🟧
- **Services:** Not individually confirmed (pushback, GPU/PCA, water/lav, catering, cabin clean).
- **Turnaround risk items:** Single-runway environment (no parallel/alternate runway during ground delay or runway obstruction) is the standing structural risk — see [Briefing](index.md) §3.5.

---

## 6. Load factors & seasonality

- **Demand peaks:** Not confirmed; Dakar is a major West-African gateway with year-round international scheduled service (Air France, Air Senegal, Emirates, Turkish, Delta, TAP, Brussels Airlines and others per public airline-service data) plus seasonal European leisure carriers (TUI, Neos, Smartwings charter).
- **Day-of-week / seasonal pattern:** Not confirmed.
- **Cargo / belly capacity:** Confirmed cargo presence (Air France Cargo, DHL Aviation) — belly/freighter demand exists but volumes not confirmed.
- **Connection banks:** Not confirmed.

---

## 7. Fuel

- **Supplier / into-plane:** Not confirmed. 🟧
- **Uplift availability & hours:** Assumed available as the national gateway; H24 status not confirmed. 🟧
- **Price / tankering angle:** Not assessed — pull live at planning. See [`OM E — Fuel Policy`](../../../../../flight-ops/fuel-policy.md).
- **Quality / freeze notes:** Not a driver at this near-sea-level, warm-climate field.

---

## 8. Customs / immigration & PoE for pax

- **Port of Entry:** **Yes** — Senegal's principal international gateway.
- **CBP / immigration hours:** Not confirmed. 🟧
- **Pre-clearance / visa-transit notes:** Not confirmed. 🟧
- **Late/overnight/diversion caveat:** Off-peak/overnight staffing not confirmed. 🟧

---

## 9. De-icing provisioning & season

- **Availability:** **NIL** — coastal-tropical climate, no de-icing requirement.
- **Season:** N/A.
- **Provisioning:** N/A.
- **Commercial impact:** None.

---

## 10. Typical delays / reliability

- **Signature delay driver:** Not confirmed; the single-runway configuration is the structural constraint most likely to produce delay under any abnormal (disabled aircraft, contamination) scenario.
- **Ground-delay / flow-program exposure:** Not confirmed — no ATFM/flow program identified.
- **On-time reliability picture:** Not confirmed. 🟧

---

## 11. Curfew & noise-charge commercial impact

- **Noise-charge regime:** Not confirmed. 🟧
- **Curfew infringement consequence:** N/A — no curfew identified.
- **Scheduling guardrails:** None specific to this field identified; standard schedule buffer against the taxi-in/out figures above (§5) is prudent given the single-runway environment.

---

## Open items (🟧 — confirm against AIP / operator data)

- Terminal/gate/stand assignment for our operation; widebody stand count and configuration.
- Handling agent(s), turnaround-time benchmark, and services provided.
- Slot regime, curfew and any CTOT/flow-control applicability (none found — confirm the negative).
- Fuel supplier, uplift hours and pricing signal.
- Customs/immigration desk hours, including overnight/diversion coverage.
- Demand seasonality and connection-bank timing for schedule planning.

> **Live data — pull at planning:** fuel price, slot/CTOT file, ATFM/ground-delay program, current demand/load, stand allocation. Not stored in this durable file.

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim material may inform content but is not listed here.*

- OurAirports — https://ourairports.com/airports/GOBD/ (retrieved 2026-07-26). *Facility data cross-check.*
- Wikipedia — "Blaise Diagne International Airport" — https://en.wikipedia.org/wiki/Blaise_Diagne_International_Airport (retrieved 2026-07-26). *Operator, opening date, airline/cargo service list, rail link.*

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-26 | Built from national AIP; K Global fields from live VAMSYS; 4-page pack. |
