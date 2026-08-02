# LEMD — Adolfo Suárez Madrid-Barajas · Dispatch Page

**LEMD / MAD** · Madrid, Spain · Europe
**Version** v0.1 · **Updated** 2026-07-26 · **Status** Draft

> **Read-me:** Dispatcher/commercial planning aid for the sim, not a chart. Companion to the [LEMD Briefing](index.md) (informational), [Departure](departure.md) and [Arrival](arrival.md) pages. Static airport/commercial characteristics only; live fuel prices, slot files, CTOTs and demand are pulled at planning (see §Live-data). Any procedure/approach is named only — fly/verify the charted current-AIRAC version. Open 🟧 items are in §Open items. Flag legend 🟥 restriction/hazard · 🟧 caution/unverified · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| Role in network | **Destination** — not a K Global base `[VAMSYS mirror 2026-07-25]` |
| Terminals in use for us | Not yet confirmed; LEMD operates **two physically separate complexes** — T1-2-3 and T4-T4S, not connected airside 🟧 |
| Widebody stands available | Code E/F stands present across both complexes; exact count/allocation for our operation not confirmed 🟧 |
| Slot regime | Not independently confirmed (real-time/day-of-operation slot process exists via the Airport Operations Center) 🟧 |
| Curfew | **Night noise-quota ban 23:00–06:59 LT** for CR-4-or-higher aircraft 🟥 |
| Primary handling agent | Not confirmed — Groundforce, South Europe Ground Services and Aviapartner operate at the field 🟧 |
| Fuel supplier(s) | Jet A-1, H24; specific into-plane provider not confirmed 🟧 |
| Customs / PoE for pax | **Yes — H24** (T1 and T4S international halls) 🟩 |
| De-icing | **Available** — dedicated de-icing frequencies for RWY 36L/36R; season per published snow plan (1 Nov–31 Mar) |

---

## 2. Terminals & concourses

- **Terminal layout:** LEMD operates **two separate airport complexes roughly 3 km apart**: **T1/T2/T3** (older cluster; T1 handles SkyTeam/Star Alliance international and Schengen traffic plus low-cost carriers; T2 mainly Schengen for Air Europa; T3 a small adjacent regional/overflow terminal) and **T4/T4S** (Iberia and oneworld-partner hub; T4 domestic/Schengen, T4S the satellite for non-Schengen international, reached via automated people-mover after security).
- **Our operation uses:** 🟧 Not yet confirmed — depends on handling-agent and gate assignment at contract.
- **International arrivals / CBP-equivalent hall:** International arrivals clear passport control in T1 or T4S depending on gate assignment; both halls are confirmed H24.
- **Notes:** 🟧 **The two complexes are not connected airside** — any connection crossing between them requires leaving the secure zone, a free shuttle bus, and re-clearing security at the other end (historically 60+ minutes). This is a first-order consideration for any onward network connection routed through LEMD.

---

## 3. Stands / gates (by code letter & our fleet)

- **Widebody (Code E/F) stands:** Present across both complexes (T1-2-3 Ramps 0–7 and the T4/T4S apron); exact current widebody gate assignment for our operation not confirmed. 🟧
- **Stands NOT usable by our types:** Narrowbody/regional stands in the older T2/T3 apron are not sized for Code E/F — do not plan a widebody there.
- **Remote / hardstand positions:** Remote stands exist at Ramps 5/6 (T1-2-3 side); towed exit from these positions requires **electric tractors only, engines switched off** — no self-taxi from these ramps.
- **Contact vs remote for our arrivals:** Expect a contact widebody gate for a scheduled destination turn; confirm with handling on the day.
- **Ground-movement stand caveats:** The four-runway segregated-parallel layout and extensive Code-letter taxiway restrictions (§13 of the Briefing) affect ground routing between stands and the runway system — see [Briefing §13](index.md) and the Departure/Arrival taxi sections.

---

## 4. Slots, curfew & CTOT regime

- **Slot coordination level:** Not independently confirmed this pass; a real-time (day-of-operation) slot-request process is available via the Airport Operations Center outside published-schedule hours. 🟧
- **Curfew / night restriction:** **Hard night noise-quota ban 23:00–06:59 LT** for aircraft rated **CR-4 or higher** (EPNdB-based classification). **Marginally-compliant** subsonic jets (Annex 16 Vol. I, Ch.3, cumulative margin ≤5 EPNdB) have been banned outright, day and night, since 28 September 2012. Limited exceptions apply for delays within 30 minutes of schedule (where caused by the programmed operation), safety, humanitarian/urgent-aid flights, and weather/industrial-action disruption. 🟥
- **CTOT / flow control:** Full **A-CDM** (Airport Collaborative Decision Making) with **FAM** (Flight Activation Monitoring, EUROCONTROL) — flight plans must stay updated (TOBT/EOBT) from three hours before EOBT or risk automatic suspension. 🟧
- **Commercial impact:** The **night noise-quota ban is a hard movement restriction**, not a charge — build schedule buffer on any late-day rotation into or out of LEMD to avoid a post-23:00 CR-4+ movement. A-CDM discipline (accurate TOBT) is itself a commercial lever — an inaccurate TOBT risks losing the assigned TSAT and re-sequencing.

---

## 5. Handling agents & turnaround

- **Handling agent(s):** Groundforce, South Europe Ground Services and Aviapartner operate ramp handling at LEMD; the agent contracted for our operation is not yet confirmed. 🟧
- **Typical turnaround time for our type:** Not independently confirmed; VAMSYS mirror gives **taxi-in 16 min / taxi-out 20 min** for planning purposes `[VAMSYS mirror 2026-07-25]` — build the gate turn around these plus standard widebody service times.
- **Services:** Push-back, GPU/PCA, potable water/lav, catering and cabin services expected at a major-hub Code E/F stand; note push-back is **towed only with engines switched off** at remote-ramp stands, and **powerback (reverse-thrust exit) is prohibited** everywhere.
- **Turnaround risk items:** A-CDM/TOBT accuracy directly affects the assigned TSAT; the segregated four-runway ground-movement complexity (§13 of the Briefing) can add unplanned taxi time; any inter-complex (T1-2-3 ↔ T4-T4S) connection adds a substantial, non-airside transfer.

---

## 6. Load factors & seasonality

- **Demand peaks:** Madrid is a major Iberian/Latin-American gateway with year-round business and leisure demand; K Global-specific demand patterns are set by the network schedule rather than by third-party data. 🟧
- **Day-of-week / seasonal pattern:** Not independently sourced for LEMD specifically — treat as standard major-hub business/leisure mix pending network-schedule confirmation. 🟧
- **Cargo / belly capacity:** Not independently sourced this pass; LEMD has substantial general cargo facilities per AIP (up to 10,000 kg cargo-handling capacity referenced at AD 2.4) — confirm K Global belly-cargo uplift plans against payload at planning. 🟧
- **Connection banks:** Not applicable — LEMD is a destination, not a K Global connection base.

---

## 7. Fuel

- **Supplier / into-plane:** Jet A-1; specific into-plane provider not confirmed in reachable public sources. 🟧
- **Uplift availability & hours:** **H24**, no stated limitations per AIP. 🟩
- **Price / tankering angle:** Assess price differentials against the K Global home hub and network alternates per leg — no LEMD-specific price signal sourced this pass. See [`OM E — Fuel Policy`](../../../../../flight-ops/fuel-policy.md).
- **Quality / freeze notes:** Standard Jet A-1; no cold-soak/fuel-freeze consideration specific to LEMD itself.

---

## 8. Customs / immigration & PoE for pax

- **Port of Entry:** Yes — international halls in **Terminal 1** and **Terminal 4S**.
- **CBP-equivalent / immigration hours:** **H24**, confirmed at AIP level. 🟩
- **Pre-clearance / visa-transit notes:** Standard Schengen/non-Schengen entry per nationality; no pre-clearance programme at LEMD.
- **Late/overnight/diversion caveat:** Customs/immigration are staffed H24, so the **night noise-quota ban** (§4) is the dominant late/overnight operational constraint here rather than immigration-desk staffing.

---

## 9. De-icing provisioning & season

- **Availability:** **Available** — dedicated ATC frequencies for de-icing operations on **RWY 36L (123.330)** and **RWY 36R (130.255)**; de-icing service itself is provided by the ground handling agent (per AIP AD 2.4), not a separate airport-run facility. 🟧
- **Season:** Published snow plan applies **1 Nov–31 Mar**; GRF (Global Reporting Format) runway-condition reporting year-round.
- **Provisioning:** Handling-agent-provided; specific fluid type/holdover throughput not confirmed this pass. 🟧
- **Commercial impact:** Winter de-icing-season throughput at a handling-agent-provided (not dedicated remote-pad) facility is a seasonal delay-risk consideration — build winter schedule buffer accordingly. See [`OM E — Cold Weather Operations`](../../../../../flight-ops/cold-weather-operations.md).

---

## 10. Typical delays / reliability

- **Signature delay driver:** Not independently quantified this pass; the **segregated four-runway independent-parallel geometry** combined with strict A-CDM/FAM sequencing means an inaccurate TOBT or ground-movement snag can cascade quickly. 🟧
- **Ground-delay / flow-program exposure:** Expected at a major, high-density EU hub; EUROCONTROL Network Manager ATFM/CTOT regulation applies as standard practice. 🟧
- **On-time reliability picture:** Not independently sourced for LEMD specifically. 🟧

---

## 11. Curfew & noise-charge commercial impact

- **Noise-charge regime:** Not independently confirmed in reachable sources beyond the noise-quota classification (CR-0.5 to CR-16) used to determine the night-ban eligibility — this classification may also underpin a landing-fee noise surcharge, not confirmed this pass. 🟧
- **Curfew infringement consequence:** The **night noise-quota ban is a hard movement restriction** for CR-4-and-above aircraft 23:00–06:59 LT — a prohibited movement outside the narrow exception set (§4) is disallowed outright, not merely penalised.
- **Scheduling guardrails:** Build buffer into any rotation that could push a CR-4+ movement past 23:00 LT or before 07:00 LT; treat schedule slippage toward the night window as a **diversion/delay-risk trigger**.

---

## Open items (🟧 — confirm against AIP / operator data)

- Terminal/gate assignment for our operation (T1-2-3 vs. T4-T4S) once handling is contracted.
- Ground handling agent(s) contracted for our operation and confirmed minimum turnaround time.
- Slot-coordination level (IATA Level 1/2/3) for LEMD.
- Fuel into-plane provider and confirmed uplift hours/price signal.
- Noise-charge/landing-fee surcharge regime tied to the CR noise-quota classification.
- Day-of-week/seasonal load pattern and belly-cargo capacity specific to the K Global operation.
- On-time reliability data specific to LEMD.

> **Live data — pull at planning:** fuel price, slot/CTOT file, current ATFM/ground-delay program, demand/load, stand allocation, current AUP/UUP or RAD status in Spanish airspace. Not stored in this durable file.

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim material may inform content but is not listed here.*

- **AIP España (ENAIRE eAIP), AD 2-LEMD** — AIRAC AMDT 408/26, eff. 09-JUL-26 — https://aip.enaire.es/aip/contenido_AIP/AD/AD2/LEMD/LE_AD_2_LEMD_en.pdf (retrieved 2026-07-26). *Night noise-quota regulation, A-CDM/FAM procedure, cargo/fuel facilities, customs hours.*
- Aeropuerto Madrid-Barajas — terminal guide — https://www.aeropuertomadrid-barajas.com/eng/madrid-airport-terminals.htm (retrieved 2026-07-26). *T1-2-3/T4-T4S complex split.*

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-26 | Built from AIP España (ENAIRE); K Global fields from live VAMSYS; 4-page pack. |
