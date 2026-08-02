# EDDL — Düsseldorf International · Dispatch Page

**EDDL / DUS** · Lohausen, Düsseldorf, North Rhine-Westphalia, Germany · Europe
**Version** v0.1 · **Updated** 2026-07-25 · **Status** Draft

> **Read-me:** Dispatcher/commercial planning aid for the sim, not a chart. Companion to the [EDDL Briefing](index.md) (informational), [Departure](departure.md) and [Arrival](arrival.md) pages. Static airport/commercial characteristics only; live fuel prices, slot files, CTOTs and demand are pulled at planning (see §Live-data). Any procedure/approach is named only — fly/verify the charted current-AIRAC version. Open 🟧 items are in §Open items. Flag legend 🟥 restriction/hazard · 🟧 caution/unverified · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| Role in network | **Destination / alternate** `[VAMSYS mirror 2026-07-25]` |
| K Global category | **R** `[VAMSYS mirror 2026-07-25]` |
| K Global base | **No** `[VAMSYS mirror 2026-07-25]` |
| Company preferred alternates | **EHAM, EDDF, EBBR** `[VAMSYS mirror 2026-07-25]` |
| Taxi-in / taxi-out (VAMSYS) | **14 min / 16 min** `[VAMSYS mirror 2026-07-25]` |
| Terminals in use for us | Terminal A (hub-carrier/alliance, Schengen + Non-Schengen); Terminal B (Schengen only); Terminal C (Non-Schengen only) |
| Widebody stands available | A380 limited to a single stand (gate C02A per third-party reference); a small number of additional stands A380-capable but not consistently modelled 🟧 |
| Slot regime | **Slot-coordinated** — level/coordinator not confirmed 🟧 |
| Curfew | Core no-movement window **00:00–05:00**; broader restricted band ~2200–0600 — see §4 🟧 |
| Primary handling agent | Not confirmed in reachable sources 🟧 |
| Fuel supplier(s) | Jet A-1 confirmed on field; specific supplier not confirmed 🟧 |
| Customs / PoE for pax | **Yes** — AOE confirmed; hours not confirmed 🟧 |
| De-icing | **Available** — two dedicated areas (East/West), coordinator frequency 135.225, seasonal |

---

## 2. Terminals & concourses

- **Terminal layout:** **Terminal A** — hub-carrier and alliance-partner flights, both Schengen and Non-Schengen. **Terminal B** — Schengen only. **Terminal C** — Non-Schengen only.
- **Our operation uses:** Terminal A is the expected assignment for a hub-carrier/alliance-style K Global operation; confirm split by route (Schengen vs Non-Schengen) with handling. 🟧
- **International arrivals / CBP-equivalent hall:** AOE (customs) confirmed on field; Terminal C handles Non-Schengen arrivals — exact desk hours not confirmed. 🟧
- **Notes:** No terminal-transition programme confirmed for EDDL in reachable sources. 🟧

---

## 3. Stands / gates (by code letter & our fleet)

- **Widebody (Code E/F) stands:** Main runway-served stands support Code E widebody operation; the **A380 is limited to a single stand** (gate C02A per third-party operational reference), with a small number of additional stands reported A380-capable but not consistently modelled. 🟧
- **Stands NOT usable by our types:** None specifically identified for K Global's Code E fleet beyond the A380-specific single-stand limitation (not a current fleet concern).
- **Remote / hardstand positions:** Not confirmed in reachable sources. 🟧
- **Contact vs remote for our arrivals:** Expect a contact stand for a scheduled K Global operation; confirm with handling.
- **Ground-movement stand caveats:** See [Briefing §13](index.md) — **Twy P1/L5** mutual wide-body restriction (max A330/A343-class, ~60.5 m, when a B744/B777/A350-class aircraft occupies the other) and **Twy M/T1 between P1–L9** (restricted to A310/B757-class when an A380 occupies the other) affect ground routing between stands and the runway system.

---

## 4. Slots, curfew & CTOT regime

- **Slot coordination level:** **Slot-coordinated**; exact IATA level and coordinator identity not confirmed in reachable sources. 🟧
- **Curfew / night restriction:** A hard core no-movement window **00:00–05:00** (emergency/rescue only) is consistently reported; a broader restricted band in the 2200–0600 range (some sources cite a 2200–2300 departure restriction and a 2300/2330–0600 arrival restriction) is reported with some inconsistency between secondary sources. 🟧
- **CTOT / flow control:** Not independently confirmed for EDDL specifically; per operational SOP, average time from start-up approval to take-off clearance runs **10–15 min (05-ops)** to **15–20 min (23-ops)** — broadly consistent with the K Global taxi-out planning figure (16 min). 🟧
- **Commercial impact:** The night-noise regime is the dominant scheduling guardrail — build buffer to avoid a late/early rotation falling into the core no-movement window or the broader restricted band.

---

## 5. Handling agents & turnaround

- **Handling agent(s):** Not confirmed in reachable public sources — full major-hub handling is present on field per the Briefing §6, but the specific contracted handler for our operation is not confirmed. 🟧
- **Typical turnaround time for our type:** Not independently confirmed; VAMSYS mirror gives **taxi-in 14 min / taxi-out 16 min** for planning purposes `[VAMSYS mirror 2026-07-25]` — build the gate turn around these plus standard service times.
- **Services:** Push-back (mandatory for heavy aircraft, onto taxiway T or P4), GPU/PCA, water/lav, catering and cabin services expected at a major-hub Code E stand.
- **Turnaround risk items:** Ground-conflict points at the apron-to-taxiway-M intersections (P1–P4), holding-point congestion at L9 during 05-ops, and winter de-icing throughput are the recurring turnaround-stretch risks.

---

## 6. Load factors & seasonality

- **Demand peaks:** Not independently sourced for the K Global operation specifically — treat as standard major-European-hub seasonality pending network-schedule confirmation. 🟧
- **Day-of-week / seasonal pattern:** Not confirmed in reachable sources. 🟧
- **Cargo / belly capacity:** Not confirmed in reachable sources specific to EDDL. 🟧
- **Connection banks:** Not applicable — EDDL is not a K Global base; treat as a point-to-point destination/alternate pending network-schedule confirmation.

---

## 7. Fuel

- **Supplier / into-plane:** Jet A-1 confirmed on field; specific into-plane provider not confirmed in reachable public sources. 🟧
- **Uplift availability & hours:** Not independently confirmed; assumed H24 given hub scale. 🟧
- **Price / tankering angle:** Assess price differential against home-base tankering economics per leg — pull live at planning. See [`OM E — Fuel Policy`](../../../../../flight-ops/fuel-policy.md).
- **Quality / freeze notes:** Standard Jet A-1; no cold-soak/fuel-freeze consideration specific to EDDL itself.

---

## 8. Customs / immigration & PoE for pax

- **Port of Entry:** Yes — AOE confirmed; Terminal C handles Non-Schengen arrivals.
- **CBP-equivalent / immigration hours:** Not confirmed in reachable public sources; assumed major-hub H24 coverage. 🟧
- **Pre-clearance / visa-transit notes:** Standard Schengen entry per nationality; no pre-clearance programme confirmed.
- **Late/overnight/diversion caveat:** The core no-movement window (00:00–05:00) is the dominant late/overnight constraint rather than immigration-desk staffing — a delayed arrival past the window boundary carries diversion risk. 🟧

---

## 9. De-icing provisioning & season

- **Availability:** **Available** — two dedicated areas: **East** (used during 23-ops) and **West** (used during 05-ops), coordinator frequency **135.225**. 🟩
- **Season:** Typical Central/Western European de-icing season; exact months not confirmed for EDDL specifically. 🟧
- **Provisioning:** Per-position code-letter limits from Code C to Code F reported at the de-icing areas.
- **Commercial impact:** Winter de-icing-area assignment (East vs West, tied to runway configuration) is a recurring scheduling/turnaround consideration in season. See [`OM E — Cold Weather Operations`](../../../../../flight-ops/cold-weather-operations.md).

---

## 10. Typical delays / reliability

- **Signature delay driver:** Not confirmed from a primary reliability source for EDDL specifically; the **closely-spaced, asymmetric runway pair** (§Briefing §3.2) constraining segregated (not independent) parallel operation is the structural factor most likely to compress capacity at peak traffic. 🟧
- **Ground-delay / flow-program exposure:** Not confirmed in reachable sources specific to EDDL. 🟧
- **On-time reliability picture:** Runway-configuration changes (05-ops vs 23-ops) and the night-noise regime carry the most identifiable schedule-risk exposure. 🟧

---

## 11. Curfew & noise-charge commercial impact

- **Noise-charge regime:** Not confirmed in reachable public sources for EDDL specifically. 🟧
- **Curfew infringement consequence:** Core no-movement window (00:00–05:00) is a hard restriction (emergency/rescue only); the broader 2200–0600 restricted band carries departure/arrival-specific limitations reported with some inconsistency between sources — verify current AIP/NfL before relying on a shoulder-hour movement.
- **Scheduling guardrails:** Build buffer into any rotation that could otherwise slip toward the reported 2200–2300 departure restriction or the 2300/2330 arrival restriction; treat the MODRU #K (9.5% gradient, RF-leg, prior coordination) and NETEX (night/weekend-only, military-airspace-dependent) SID constraints as further routing considerations for a late/off-peak departure.

---

## Open items (🟧 — confirm against AIP / operator data)

- Terminal assignment for the K Global operation and Schengen/Non-Schengen split.
- Contracted ground handling agent(s) and confirmed minimum turnaround time.
- Slot coordination level (exact IATA tier) and coordinator identity; exact CTOT/ATFM practice for EDDL.
- Fuel into-plane provider and uplift hours.
- Customs/immigration desk hours.
- Exact current night-noise regime boundary times (core 00:00–05:00 window is consistently reported; the surrounding 2200–2300/2300–0600 band varies by secondary source).
- De-icing season months and fluid-type/throughput detail.
- Day-of-week/seasonal load pattern and belly-cargo capacity specific to the K Global operation.
- Noise-charge regime detail.

> **Live data — pull at planning:** fuel price, slot/CTOT file, current ATFM/ground-delay program, demand/load, stand allocation. Not stored in this durable file.

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim material may inform content but is not listed here. See <../../../_Templates/_Sources.md> for the tier hierarchy.*

- OpenNav — EDDL chart index — https://opennav.com/airport/EDDL (retrieved 2026-07-25).
- OurAirports — https://ourairports.com/airports/EDDL/ (retrieved 2026-07-25). *AOE tag.*
- Wikipedia — Düsseldorf Airport — https://en.wikipedia.org/wiki/D%C3%BCsseldorf_Airport (retrieved 2026-07-25). *Terminal/apron layout, corporate-aviation-hub context.*
- VATSIM Germany Knowledgebase — SOPs FIR Langen — EDDL Düsseldorf Airport (see Briefing page for full citations). *De-icing areas, start-up-to-clearance timing, taxiway hot-spot detail.*

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-25 | Built from DFS eAIP + Briefing; folded to 4-page pack. |
