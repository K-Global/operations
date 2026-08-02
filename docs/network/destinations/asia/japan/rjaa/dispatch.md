# RJAA — Tokyo Narita · Dispatch Page

**RJAA / NRT** · Narita, Chiba Prefecture, Japan · Asia
**Version** v0.1 · **Updated** 2026-07-26 · **Status** Draft

> **Read-me:** Dispatcher/commercial planning aid for the sim, not a chart. Companion to the [RJAA Briefing](index.md) (informational), [Departure](departure.md) and [Arrival](arrival.md) pages. Static airport/commercial characteristics only; live fuel prices, slot files, CTOTs and demand are pulled at planning (see §Live-data). Any procedure/approach is named only — fly/verify the charted current-AIRAC version. Open 🟧 items are in §Open items. Flag legend 🟥 restriction/hazard · 🟧 caution/unverified · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| Role in network | **Destination / alternate** `[VAMSYS mirror 2026-07-26]` — not a K Global base |
| Terminals in use for us | Not confirmed — RJAA operates three terminals (T1, T2, T3); exact assignment for a company outside the field's established carrier groupings is not confirmed 🟧 |
| Widebody stands available | Code E/F (including A380-class) stands exist across the terminal complex; exact count/allocation not confirmed 🟧 |
| Slot regime | No IATA slot-coordination level confirmed; annual-movement-cap/curfew regime is the operative capacity constraint 🟧 |
| Curfew | **Hard 00:00–06:00 JST**; stricter single-runway noise-limited rule 23:00–24:00 JST 🟥 |
| Primary handling agent | Not confirmed 🟧 |
| Fuel supplier(s) | Jet A-1, multiple providers reported publicly; not individually confirmed for our operation 🟧 |
| Customs / PoE for pax | **Yes** — all three terminals; desks run **published reduced hours, not H24** 🟧 |
| De-icing | Season typical of Kanto-plain winters; pad locations/provisioning not confirmed 🟧 |

---

## 2. Terminals & concourses

- **Terminal layout:** **Terminal 1** — North Wing, Central Building and South Wing, plus four satellite concourses, floor area approx. 463,000 m², 40 gates. **Terminal 2** — Main Building and Satellite, floor area approx. 391,000 m², 32 gates; can handle Code F (A380-class) aircraft. **Terminal 3** — dedicated low-cost-carrier terminal, opened 2015, approx. 66,000 m², 11 gates, uses outdoor gates/airstairs rather than jet bridges for a large share of its stands.
- **Our operation uses:** Not confirmed — terminal/gate assignment for a company outside the field's established carrier groupings would be set by NAA/handling on a case-by-case basis. 🟧
- **International arrivals / immigration hall:** International arrivals clear immigration in whichever terminal the flight is assigned; published immigration hours are **05:30–24:00 JST (approx.)**, not H24 — see §8.
- **Notes:** 🟧 Ongoing third-runway/expansion construction works are under way at the airport (target completion has slipped beyond FY2028/2029 per public reporting); no terminal-level operational impact identified for current-day planning, but re-check at the next update cycle.

---

## 3. Stands / gates (by code letter & our fleet)

- **Widebody (Code E/F) stands:** Code F (A380-class) parking is confirmed to exist at the field (published wide-body ground-movement rules reference A380-class taxiway clearances directly); exact stand/pier allocation not confirmed. 🟧
- **Stands NOT usable by our types:** Terminal 3's narrow-body-oriented, airstair-served stands are not sized for Code E/F — do not plan a widebody onto them.
- **Remote / hardstand positions:** Not confirmed in reachable sources. 🟧
- **Contact vs remote for our arrivals:** Not confirmed — expect a contact gate as the default assumption for a scheduled international widebody arrival, pending local confirmation.
- **Ground-movement stand caveats:** Code F aircraft operate under a **reduced 90 m taxiway centreline separation**, require **10.5 m wingtip-to-fence clearance on TWY K**, and are subject to **mandatory tow at stands D3/N1** — see [Briefing §13](index.md) and the Departure/Arrival taxi sections.

---

## 4. Slots, curfew & CTOT regime

- **Slot coordination level:** No IATA slot-coordination level confirmed in reachable public sources. 🟧
- **Curfew / night restriction:** **Hard curfew — no take-off or landing 00:00–06:00 JST**, exception only for a genuine in-flight emergency or unavoidable safety situation. **Only RWY 16R/34L (Runway A) is available 23:00–24:00 JST**, and any aircraft operating in that hour — scheduled or delayed — must meet a quantified noise standard (10 EPNdB below the total permitted level, 2 EPNdB below at each measuring point). 🟥
- **Delayed-flight nuances:** The 23:00–24:00 JST rule applies regardless of whether the movement was originally scheduled earlier — it is a noise-compliance gate, not solely a lateness exemption. There is no published allowance for movements after 00:00 JST outside a genuine emergency.
- **CTOT / flow control:** No EUROCONTROL-style CTOT/ATFM program identified for RJAA in reachable sources; the operative capacity constraint appears to be the field's own annual-movement cap and curfew regime rather than a flow-management program. 🟧
- **Commercial impact:** The **hard curfew** and the **noise-limited shoulder hour** are the two dominant scheduling guardrails at RJAA — any schedule that plans a landing or departure close to 23:00–00:00 JST carries real compliance/diversion risk; build buffer accordingly.

---

## 5. Handling agents & turnaround

- **Handling agent(s):** Not confirmed for a K Global operation in reachable public sources; multiple third-party ground-handling/fuel providers operate at the field generally. 🟧
- **Typical turnaround time for our type:** Not independently confirmed; VAMSYS mirror gives **taxi-in 18 min / taxi-out 20 min** for planning purposes `[VAMSYS mirror 2026-07-26]` — build the gate turn around these plus standard widebody service times.
- **Services:** Push-back, GPU/PCA, potable water/lav, catering and cabin services expected at a major international gateway; not individually confirmed.
- **Turnaround risk items:** The **curfew/noise-shoulder-hour regime** (§4) is the dominant schedule-integrity risk — a turnaround that slips toward the 23:00 JST boundary carries real consequence. Low-visibility ground restrictions (stop-bar taxiway closures, §13) are a secondary seasonal risk item.

---

## 6. Load factors & seasonality

- **Demand peaks:** As a major international gateway serving the Greater Tokyo area, RJAA carries substantial year-round demand; specific K Global load/seasonality data is not independently sourced for this build. 🟧
- **Day-of-week / seasonal pattern:** Not independently sourced — treat as standard international long-haul business/leisure mix pending network-schedule confirmation. 🟧
- **Cargo / belly capacity:** RJAA is historically one of the world's largest air-cargo gateways by tonnage; confirm K Global belly-cargo uplift plans against payload at planning. 🟧
- **Connection banks:** Not applicable — RJAA is not a K Global base; connection-bank timing is set by whichever base the flight connects through.

---

## 7. Fuel

- **Supplier / into-plane:** **Jet A-1** confirmed available; specific into-plane provider for a K Global operation not confirmed. 🟧
- **Uplift availability & hours:** **H24**, via hydrant and truck refuelling `[JCAB AIP AD 2 RJAA 2.4]`. 🟩
- **Price / tankering angle:** Not independently sourced — assess price differential to the departure base per leg at planning. See [`OM E — Fuel Policy`](../../../../../flight-ops/fuel-policy.md).
- **Quality / freeze notes:** Standard Jet A-1; no cold-soak/fuel-freeze consideration specific to RJAA itself — relevant only to the outbound long-haul leg profile, not the RJAA uplift.

---

## 8. Customs / immigration & PoE for pax

- **Port of Entry:** Yes — international halls in all three terminals.
- **CBP-equivalent / immigration hours:** **Approx. 05:30–24:00 JST**; Customs approx. **06:00–23:00 JST**; Quarantine (human) approx. **06:00–00:30 JST**; Quarantine (animal/plant) approx. **06:00–24:00 JST** (converted from published UTC hours) — **not H24**. 🟧
- **Pre-clearance / visa-transit notes:** Standard international entry per nationality; no pre-clearance programme identified at RJAA.
- **Late/overnight/diversion caveat:** 🟥 The **hard curfew (00:00–06:00 JST)** already prevents scheduled movement in the deepest overnight hours, but note that customs/immigration/quarantine desk hours do not fully span even the permitted operating window — an unplanned diversion into RJAA near the edges of the operating day carries a genuine passenger-processing risk distinct from the curfew itself.

---

## 9. De-icing provisioning & season

- **Availability:** Not confirmed — pad location/provisioning not identified in reachable sources. 🟧
- **Season:** Kanto-plain winters bring occasional snow; treat as a seasonal (roughly Dec–Feb) consideration pending confirmation.
- **Provisioning:** Not confirmed. 🟧
- **Commercial impact:** Winter fog/low-stratus days (driving CAT II/III reliance on RWY 16R specifically) are a more clearly documented seasonal risk than de-icing throughput at this field — see [`OM E — Cold Weather Operations`](../../../../../flight-ops/cold-weather-operations.md) and [`OM E — Low Visibility Operations`](../../../../../flight-ops/low-visibility-operations.md).

---

## 10. Typical delays / reliability

- **Signature delay driver:** **Winter Kanto-plain radiation fog/low stratus**, compounded by the fact that only RWY 16R carries CAT II/III capability — a fog event with wind favouring the reciprocal or parallel runway is a more significant reliability threat here than at a field with CAT III on every runway direction.
- **Ground-delay / flow-program exposure:** Not independently confirmed; the shared Tokyo-area (RJAA/RJTT) terminal airspace is a plausible source of sequencing delay during peak periods. 🟧
- **On-time reliability picture:** Winter mornings (fog/low stratus) and the 23:00 JST curfew-shoulder boundary carry the highest schedule-risk exposure for RJAA operations. 🟧

---

## 11. Curfew & noise-charge commercial impact

- **Noise-charge regime:** Not independently confirmed in reachable public sources for RJAA; a quantified **EPNdB compliance standard** applies specifically to the 23:00–24:00 JST shoulder hour (§4), which functions as a noise-compliance gate rather than a simple charge. 🟧
- **Curfew infringement consequence:** The **00:00–06:00 JST curfew is a hard movement restriction** — a take-off or landing outside the emergency exception is not merely penalised, it is disallowed.
- **Scheduling guardrails:** Build buffer into any rotation that could push a landing or departure toward 23:00–00:00 JST; treat any schedule slipping past 00:00 JST as a **diversion-risk trigger**, per the curfew rules in §4.

---

## Open items (🟧 — confirm against AIP / operator data)

- Terminal/gate assignment for our operation (not tied to any of the field's established carrier groupings).
- Ground handling agent(s) contracted for our operation and confirmed minimum turnaround time.
- Fuel into-plane provider (multiple providers exist at the field generically).
- Customs/immigration/quarantine desk hours — converted from published UTC figures, not independently re-verified against current AIRAC.
- Slot-coordination level and any CTOT/ATFM-equivalent program specific to RJAA.
- De-icing pad location/provisioning and season.
- Day-of-week/seasonal load pattern and belly-cargo capacity specific to the K Global operation.
- Noise-charge regime beyond the quantified EPNdB shoulder-hour standard already confirmed.

> **Live data — pull at planning:** fuel price, slot/CTOT file if any, current demand/load, stand allocation, current NOTAM status on the third-runway/expansion construction works. Not stored in this durable file.

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim material may inform content but is not listed here.*

- **Civil Aviation Bureau, Japan (JCAB) — AIP Japan, AD 2 RJAA** (mirrored full-text extract) — https://nagodede.github.io/aip/japan/documents/RJAA_full.pdf (retrieved 2026-07-26). *Fuel, hours, curfew/noise-shoulder-hour text, ground-movement rules.*
- Narita International Airport Corporation — "Capacity Enhancement of Narita Airport: Relaxation of restrictions on night flights" — https://www.narita-kinoukyouka.jp/en/mitigation.html (retrieved 2026-07-26). *Operating-hours phasing, curfew rationale.*
- Wikipedia — "Narita International Airport" — https://en.wikipedia.org/wiki/Narita_International_Airport (retrieved 2026-07-26). *Terminal layout/gate counts, cargo-gateway status.*
- The Japan Times — "Opening of third runway at Narita Airport to be delayed due to land issues," 2026-03-31 — https://www.japantimes.co.jp/news/2026/03/31/japan/narita-airport-third-runway-delay/ (retrieved 2026-07-26). *Construction/expansion status.*
- OurAirports — https://ourairports.com/airports/RJAA/ (retrieved 2026-07-26). *Cross-check.*

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-26 | Built from national AIP; K Global fields from live VAMSYS; 4-page pack. |
