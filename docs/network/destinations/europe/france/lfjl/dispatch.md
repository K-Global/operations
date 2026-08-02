# LFJL — Metz-Nancy-Lorraine · Dispatch Page

**LFJL / ETZ** · Metz-Nancy, Lorraine (Grand Est), France · Europe
**Version** v0.1 · **Updated** 2026-07-26 · **Status** Draft

> **Read-me:** Dispatcher/commercial planning aid for the sim, not a chart. Companion to the [LFJL Briefing](index.md) (informational), [Departure](departure.md) and [Arrival](arrival.md) pages. Static airport/commercial characteristics only; live fuel prices, slot files, CTOTs and demand are pulled at planning (see §Live-data). Any procedure/approach is named only — fly/verify the charted current-AIRAC version. Open 🟧 items are in §Open items. Flag legend 🟥 restriction/hazard · 🟧 caution/unverified · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| Role in network | **Not set in VAMSYS** — Base: **No**; K Global category: **not set** `[VAMSYS mirror 2026-07-26]` 🟧 |
| Terminals in use for us | Not published / verify — no terminal/concourse detail captured in the reachable AD 2 extract beyond the apron "P" parking area 🟧 |
| Widebody stands available | Not published / verify — no stand-rating data found; the single 04/22 runway pair (3,050 m) is sized for narrowbody/regional-jet operations 🟧 |
| Slot regime | None identified — assumed uncoordinated/Level 1 🟧 |
| Curfew | No noise abatement procedures currently published (AD 2 LFJL.21 heading exists, no content) — do not assume no restriction exists operationally 🟧 |
| Primary handling agent | Contact AD operator — no named handling agent 🟧 |
| Fuel supplier(s) | Not named — JET A1 (CIV-MIL) only, via the AD operator 🟧 |
| Customs / PoE for pax | On request only, 24 h prior notice — not a walk-up Port of Entry 🟧 |
| De-icing | **Available** — 1 Vestergaard-type de-icing truck; season not specified 🟧 |

---

## 2. Terminals & concourses

- **Terminal layout:** Not published / verify — no terminal/concourse split identified in the reachable AD 2 extract. 🟧
- **Our operation uses:** Not set — K Global base and category fields are not set in VAMSYS (§1); no route/fleet assignment confirmed for this field. 🟧
- **International arrivals / customs hall:** Customs/police available on request only, 24 h prior notice — treat as a non-walk-up Port of Entry; confirm terminal/hall location locally. 🟧
- **Notes:** No terminal-transition programme or construction note found in reachable sources. 🟧

---

## 3. Stands / gates (by code letter & our fleet)

- **Widebody (Code E/F) stands:** Not published / verify — no stand-rating data captured; **TWY T1 and T2 are limited to Code E aircraft with a main-gear width ≤ 13.77 m**, a relevant ground-movement constraint for any Code E type routed here. 🟧
- **Stands NOT usable by our types:** Not published / verify. 🟧
- **Remote / hardstand positions:** Not published / verify. Apron "P" parking is subject to a prior-request restriction (before takeoff, by phone) except for scheduled commercial flights (§4). 🟧
- **Contact vs remote for our arrivals:** Not published / verify. 🟧
- **Ground-movement stand caveats:** The **RWY 22 turn-around area** requires a special AD-administration-coordinated procedure for any aircraft above Code C — see [Briefing §13](index.md) and the Departure/Arrival taxi sections.

---

## 4. Slots, curfew & CTOT regime

- **Slot coordination level:** None identified in reachable sources — treat as uncoordinated/Level 1. 🟧
- **Curfew / night restriction:** No noise abatement procedures are currently published for LFJL (AD 2 LFJL.21 heading exists, no content) — flagged as an open item, not a confirmed absence of any operational restriction. 🟧
- **CTOT / flow control:** Not independently identified as an ATFM-regulated field in reachable sources; treat any CTOT exposure as standard EUROCONTROL Network Manager practice for a European regional field rather than a field-specific regime. 🟧
- **Commercial impact:** Absent a published curfew or slot regime, the dominant scheduling guardrails at LFJL are (1) ATS operating **scheduled hours only** (Mon–Fri 0445–2100, Sat 0445–1900, Sun 0800–2100) and (2) the **RFFS-not-provided-outside-published-windows gate** (§6/§9) — both constrain the schedulable movement window more than any noise or slot regime.

---

## 5. Handling agents & turnaround

- **Handling agent(s):** Contact the **AD operator** — no named third-party handling agent identified in reachable sources. 🟧
- **Typical turnaround time for our type:** Not set in VAMSYS `[VAMSYS mirror 2026-07-26]` 🟧 — no route/fleet assignment confirmed for this field; build turnaround planning around standard narrowbody/regional service times pending confirmation.
- **Services:** Not published / verify beyond de-icing (1 Vestergaard-type truck, available) and the general-aviation apron-access restrictions in §3/§Ground operations. 🟧
- **Turnaround risk items:** The non-H24 ATS window (movements must fall within scheduled hours or trigger the uncontrolled/AFIS-type fallback), the RFFS-not-provided-outside-windows gate, and the RWY 22 turn-around area's special-procedure requirement for Code C+ aircraft are the standing turnaround-risk items at this field.

---

## 6. Load factors & seasonality

- **Demand peaks:** Not set — no route/fleet assignment confirmed for this field in VAMSYS (§1). 🟧
- **Day-of-week / seasonal pattern:** Not sourced. 🟧
- **Cargo / belly capacity:** Not published / verify. 🟧
- **Connection banks:** Not applicable — LFJL is not a K Global base (§1).

---

## 7. Fuel

- **Supplier / into-plane:** Not named — JET A1 (CIV-MIL) only, available for any scheduled commercial aircraft via the AD operator. 🟧
- **Uplift availability & hours:** Available for scheduled commercial aircraft; outside these windows, fueling requires contacting the AD operator, with a possible standby fuel-tender arrangement. 🟧
- **Price / tankering angle:** Not sourced — no LFJL-specific price signal identified; K Global base/category not set (§1). See [`OM E — Fuel Policy`](../../../../../flight-ops/fuel-policy.md).
- **Quality / freeze notes:** JET A1 (CIV-MIL) only — no AVGAS listed in the reachable extract; no cold-soak/fuel-freeze consideration specific to this field identified.

---

## 8. Customs / immigration & PoE for pax

- **Port of Entry:** On request only, 24 h prior notice — not a walk-up Port of Entry. 🟧
- **CBP-equivalent / immigration hours:** No standing desk hours published — coverage is on-request with 24 h prior notice. 🟧
- **Pre-clearance / visa-transit notes:** Standard Schengen/non-Schengen entry per nationality; no pre-clearance programme identified.
- **Late/overnight/diversion caveat:** With customs on request only (24 h prior notice) and ATS itself not H24, a late/overnight or diversion arrival should not assume any walk-up Port of Entry coverage. 🟥

---

## 9. De-icing provisioning & season

- **Availability:** **Available** — 1 Vestergaard-type de-icing truck. 🟩
- **Season:** Not specified in the reachable source data. 🟧
- **Provisioning:** Single-truck provisioning only (no multi-pad/simultaneous-aircraft capability identified) — a plausible throughput constraint at peak winter demand. 🟧
- **Commercial impact:** With only one de-icing truck confirmed, winter throughput is a plausible seasonal delay-risk driver — build schedule buffer accordingly. See [`OM E — Cold Weather Operations`](../../../../../flight-ops/cold-weather-operations.md).

---

## 10. Typical delays / reliability

- **Signature delay driver:** The **hard crosswind limit** (20 kt wet / 25 kt dry) on the field's only runway pair is the most explicit AIP-published operational-restriction driver; LVP conditions (RVR ≤ 800 m or ceiling ≤ 200 ft) are the secondary weather-driven delay risk. 🟥
- **Ground-delay / flow-program exposure:** Not independently sourced; treat as low relative to a major hub given the field's regional traffic density and lack of an identified slot-coordination regime. 🟧
- **On-time reliability picture:** The RFFS-not-provided-outside-published-windows gate and the non-H24 ATS schedule are the two structural reliability constraints at this field — any movement outside those windows is not simply degraded, it is disallowed. 🟥

---

## 11. Curfew & noise-charge commercial impact

- **Noise-charge regime:** Not confirmed in reachable public sources. 🟧
- **Curfew infringement consequence:** No noise abatement procedures are currently published for LFJL — there is no confirmed noise-based curfew to infringe, but this is an open item (§18 of the Briefing), not a confirmed absence of any restriction. 🟧
- **Scheduling guardrails:** Build schedule buffer around (1) the non-H24 ATS window and (2) the RFF published windows (§9/Briefing §6) rather than around a noise curfew — these are the field's real hard operational gates.

---

## Open items (🟧 — confirm against AIP / operator data)

- K Global category, base role, primary handling agent and fuel supplier — not set/named in VAMSYS or reachable sources.
- Terminal/concourse layout and widebody/Code-E stand-rating detail.
- Slot-coordination level and any CTOT/ATFM exposure specific to LFJL.
- Ground handling minimum turnaround time for our operation.
- Day-of-week/seasonal demand pattern and belly-cargo capacity.
- De-icing season months and throughput capacity beyond the single confirmed truck.
- Noise-charge regime, if any.
- Exact customs desk-hours interpretation of the "on request, 24 h prior notice" condition.

> **Live data — pull at planning:** fuel price, slot/CTOT file (if any), current ATFM/ground-delay program, demand/load, stand allocation, current RFF-level NOTAM. Not stored in this durable file.

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim material may inform content but is not listed here.*

- **SIA France eAIP — AD 2 LFJL**, eff. 14 MAY 2026, AIRAC 09 JUL 2026 (retrieved 2026-07-26) — https://www.sia.aviation-civile.gouv.fr/ (eAIP France portal; AD 2 LFJL section within the current AIRAC package). *Hours, RFF, fuel, customs, de-icing, ground-operations data.*

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-26 | Built from SIA France eAIP; K Global fields from live VAMSYS; 4-page pack. |
