# EKCH — Copenhagen/Kastrup · Dispatch Page

**EKCH / CPH** · Copenhagen (Kastrup), Denmark · Europe
**Version** v0.1 · **Updated** 2026-07-26 · **Status** Draft — AIP Denmark (Naviair)-derived

> **Read-me:** Dispatcher/commercial planning aid for the sim, not a chart. Companion to the [EKCH Briefing](index.md) (informational), [Departure](departure.md) and [Arrival](arrival.md) pages. Static airport/commercial characteristics only; live fuel prices, slot files, CTOTs and demand are pulled at planning (see §Live-data). Any procedure/approach is named only — fly/verify the charted current-AIRAC version. Open 🟧 items are in §Open items. Flag legend 🟥 restriction/hazard · 🟧 caution/unverified · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| Role in network | **Destination** — Nordic hub, not a K Global base `[VAMSYS mirror 2026-07-26]` |
| Terminals in use for us | Integrated **Terminal 2/3** concourse plus dedicated low-cost pier ("CPH Go", Pier F); pier/gate assignment for our operation not independently confirmed 🟧 |
| Widebody stands available | Not independently quantified this pass — CPH is reported to operate 100+ gates across piers A–F, no widebody-specific count confirmed 🟧 |
| Slot regime | 🟧 **Coordinated — Airport Coordination Denmark (ACD)**; consistent with **Level 3** based on ACD's mandatory individual-flight-approval role, not independently confirmed against a directly-quoted primary "Level 3" label |
| Curfew | **No hard curfew** — noise-quota night regime 2300–0600 (advance approval required for jet/heavy-prop takeoffs) 🟥 |
| Primary handling agent | Ramp/ground handling operationally H24 per AIP; specific handler for our operation not confirmed 🟧 |
| Fuel supplier(s) | Jet A-1, H24 per AIP; specific into-plane provider not confirmed 🟧 |
| Customs / PoE for pax | **Yes** — H24, open to traffic to/from all states 🟩 |
| De-icing | **Available** — three dedicated pads (TWY A/B/V); season not AIP-dated, inferred Oct–Apr |

---

## 2. Terminals & concourses

- **Terminal layout:** Copenhagen operates an integrated **Terminal 2/3** concourse (the airport's main international/full-service terminal complex) plus a dedicated low-cost facility, **"CPH Go" (Pier F)**, used by easyJet/Ryanair/Wizz Air/Transavia-type low-cost carriers per CPH's own operations page.
- **Our operation uses:** Pier/gate assignment for our operation is not independently confirmed this pass — treat as full-service Terminal 2/3 pending handling confirmation. 🟧
- **International arrivals / passport-control hall:** Piers A/B are reported Schengen-only, Pier C predominantly non-Schengen, Piers D/E/F flexible (Schengen or non-Schengen) — **this pier breakdown is corroborated only by a VATSIM community reference, not an independently confirmed primary CPH source.** 🟧
- **Notes:** Cargo stands are concentrated at the G-apron (G120–G137 per the same community reference); GA/business-jet traffic is commonly routed to Roskilde (EKRK) instead of Kastrup. 🟧

---

## 3. Stands / gates (by code letter & our fleet)

- **Widebody (Code E/F) stands:** Not independently quantified this pass — no primary CPH source gave a widebody-specific stand count or pier concentration. 🟧
- **Stands NOT usable by our types:** Not confirmed — verify with handling at planning.
- **Remote / hardstand positions:** Not confirmed in reachable public sources. 🟧
- **Contact vs remote for our arrivals:** Expect a contact gate for a scheduled Category L turn at a major full-service pier; confirm with handling.
- **Ground-movement stand caveats:** The **RWY 12/30 crossing** affects ground routing between the eastern and western parts of the aerodrome — see [Briefing §13](index.md) and the Departure/Arrival taxi sections.

---

## 4. Slots, curfew & CTOT regime

- **Slot coordination level:** 🟧 **Coordinated via Airport Coordination Denmark (ACD)** — the AIP's requirement for mandatory individual-flight approval on schedule changes is consistent with IATA **Level 3 (fully coordinated)**, but this was not independently confirmed against a directly-quoted primary IATA/WASG "Level 3" label this pass.
- **Curfew / night restriction:** **No hard curfew.** Night-period **2300–0600** noise-quota regime: jet/heavy-prop (≥11,000 kg MTOM) takeoffs require **advance CPH approval** based on noise-certification data measured against an **80 dB(A)** threshold at designated monitoring positions; a fallback ATC-issued permission exists absent advance approval; **no advance approval ever required for landing**. RWY 04R carries an additional night takeoff restriction for light/medium aircraft absent ATC instruction. 🟥
- **CTOT / flow control:** Copenhagen is an **A-CDM / "ANI-Airport"**, providing the full DPI message set to EUROCONTROL's Network Manager — this can influence ATFM/CTOT calculation beyond the standard EOBT-3h A-CDM window, up to 48h before EOBT for data-sharing purposes. 🟧
- **Commercial impact:** Schedule integrity around the night-quota window is the dominant commercial guardrail here — a delayed jet departure risks needing advance noise approval it may not have, rather than an outright movement ban.

---

## 5. Handling agents & turnaround

- **Handling agent(s):** Ramp/ground handling is operationally H24 per AIP; the specific ground handler(s) contracted for our operation are not confirmed in reachable public sources. 🟧
- **Typical turnaround time for our type:** Not independently confirmed; VAMSYS mirror gives **taxi-in 14 min / taxi-out 18 min** for planning purposes `[VAMSYS mirror 2026-07-26]` — build the gate turn around these plus standard Category L service times.
- **Services:** Push-back, GPU/PCA, potable water/lav, catering and cabin services expected at a major Nordic-hub Category L stand (standard major-hub provision).
- **Turnaround risk items:** De-icing-pad throughput in winter, and ground-routing complexity around the RWY 12/30 crossing when it is active for crosswind operations, are the principal turnaround risk items identified this pass.

---

## 6. Load factors & seasonality

- **Demand peaks:** As a Nordic hub destination (not a K Global base), demand/connection patterns are set by the network schedule rather than independently sourced EKCH-specific data. 🟧
- **Day-of-week / seasonal pattern:** Not independently sourced for EKCH specifically — treat as standard Northern European business/leisure mix pending network-schedule confirmation. 🟧
- **Cargo / belly capacity:** Not independently sourced for EKCH's passenger-side belly cargo; the field also carries dedicated cargo apron/stand capacity per §3. 🟧
- **Connection banks:** Cross-ref the route register for inbound/outbound wave structure — not independently sourced this pass.

---

## 7. Fuel

- **Supplier / into-plane:** Jet A-1 confirmed available; specific into-plane provider not confirmed in reachable public sources. 🟧
- **Uplift availability & hours:** H24 per AIP operational-hours table. 🟩
- **Price / tankering angle:** Assess price differentials to/from base per leg at planning. See [OM E — Fuel Policy](../../../../../flight-ops/fuel-policy.md).
- **Quality / freeze notes:** Standard Jet A-1; no cold-soak/fuel-freeze consideration specific to EKCH itself.

---

## 8. Customs / immigration & PoE for pax

- **Port of Entry:** Yes — H24, open to traffic to/from all states `[AIP AD 2-EKCH-2 §3]`.
- **CBP-equivalent / immigration hours:** H24 confirmed.
- **Pre-clearance / visa-transit notes:** Standard Schengen/non-Schengen entry per nationality; pier structure splits Schengen (Piers A/B) from non-Schengen (Pier C) traffic per a community reference — not independently primary-confirmed. 🟧
- **Late/overnight/diversion caveat:** Customs/immigration is H24, so the night-quota noise regime (§4) rather than desk staffing is the dominant late/overnight constraint here.

---

## 9. De-icing provisioning & season

- **Availability:** **Available** — three dedicated de-icing pads/taxiways: **TWY A, TWY B, TWY V**, each with its own ATC channel and stop-marking/stop-light system. 🟩
- **Season:** Not explicitly AIP-dated in the reachable extract — inferred Scandinavian winter window (approx. Oct–Apr), not a quoted AIP figure. 🟧
- **Provisioning:** Post-deice, aircraft taxi to an illuminated stop line and await ground-crew signal before calling ATC for taxi clearance — a structured, multi-pad system supporting simultaneous de-icing across the three locations.
- **Commercial impact:** Winter wind events (driving crosswind-runway use, §4/Briefing §10) compounded by de-icing-pad queuing are the principal seasonal delay-risk drivers. See [OM E — Cold Weather Operations](../../../../../flight-ops/cold-weather-operations.md).

---

## 10. Typical delays / reliability

- **Signature delay driver:** Strong-wind days driving crosswind-runway (12/30) activation, compounded by winter de-icing-pad throughput. 🟧
- **Ground-delay / flow-program exposure:** Not independently sourced for EKCH-specific ATFM/ground-delay frequency this pass — expect standard EUROCONTROL flow management as a coordinated European hub. 🟧
- **On-time reliability picture:** Winter wind/de-icing season carries the highest schedule-risk exposure identified this pass. 🟧

---

## 11. Curfew & noise-charge commercial impact

- **Noise-charge regime:** Not independently confirmed this pass — Danish Air Navigation Act §82 and BL 3-40 provide the legal basis for the noise-abatement/quota system including a punishment/fine clause for violations; specific per-movement noise-charge tariffs not sourced. 🟧
- **Curfew infringement consequence:** No hard curfew exists, but an unapproved night-period jet/heavy-prop takeoff outside the noise-quota framework is a **regulatory violation under BL 3-40**, not merely a charge — treat the night-quota approval requirement as a hard planning constraint. 🟥
- **Scheduling guardrails:** Build buffer into late-day rotations so a jet departure delayed toward 2300 is not left needing an advance noise approval it does not hold; this is the primary scheduling guardrail for this field.

---

## Open items (🟧 — confirm against AIP / operator data)

- Pier/gate assignment for our operation and any widebody-specific stand data.
- Ground handling agent(s) contracted for our operation and confirmed minimum turnaround time.
- Fuel into-plane provider.
- Exact slot-coordination level (Level 2 vs Level 3) — inferred Level 3, not directly quoted from a primary IATA/WASG source.
- De-icing exact season window (inferred Oct–Apr, not AIP-quoted).
- Day-of-week/seasonal load pattern and belly-cargo capacity specific to the K Global operation.
- Specific per-movement noise-charge tariff structure.

> **Live data — pull at planning:** fuel price, slot/CTOT file, current ATFM/ground-delay program, demand/load, stand allocation. Not stored in this durable file.

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim material may inform content but is not listed here.*

- **AIP Denmark (Naviair), AD 2-EKCH** — https://aim.naviair.dk/media/files/5f0a31y3ymq/EK_AD_2_EKCH_en.pdf (retrieved 2026-07-26). *Operational hours, RFF, night-noise-quota regime, de-icing pads.*
- Copenhagen Airports (CPH) — "Operational information" — https://www.cph.dk/en/cph-business/aviation/operations (retrieved 2026-07-26). *Terminal/pier structure.*
- VATSIM Scandinavia — EKCH reference — https://wiki.vatsim-scandinavia.org/books/danish-airports-charts/page/ekch-copenhagenkastrup (retrieved 2026-07-26). *Network-sim document, not regulatory — stand/pier cross-check only.*

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-26 | Built from AIP Denmark (Naviair); K Global fields from live VAMSYS; 4-page pack. |
