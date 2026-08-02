# EDDV — Hannover · Dispatch Page

**EDDV / HAJ** · Langenhagen (Hannover), Germany · Europe
**Version** v0.1 · **Updated** 2026-07-25 · **Status** Draft

> **Read-me:** Dispatcher/commercial planning aid for the sim, not a chart. Companion to the [EDDV Briefing](index.md) (informational), [Departure](departure.md) and [Arrival](arrival.md) pages. Static airport/commercial characteristics only; live fuel prices, slot files, CTOTs and demand are pulled at planning (see §Live-data). Any procedure/approach is named only — fly/verify the charted current-AIRAC version. Open 🟧 items are in §Open items. Flag legend 🟥 restriction/hazard · 🟧 caution/unverified · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| Role in network | Destination/origin, German domestic/regional network; **not a K Global base** `[VAMSYS mirror 2026-07-25]` |
| Terminals in use for us | Terminals A/B/C (jet-bridge-equipped: A 6, B 6, C 8 gates); Terminal D used in peak periods 🟧 |
| Widebody stands available | All three main terminals reported capable of Boeing 747-class aircraft; exact stand count/allocation not independently confirmed 🟧 |
| Slot regime | None confirmed — no formal slot-coordination regime found for Hannover in reachable sources (unlike EDDB) 🟧 |
| Curfew | None hard-published; noise-certificate-based restriction ≈2200/2300–0600 local — 24h field, not a Hamburg-style curfew 🟧 |
| Primary handling agent | Not confirmed 🟧 |
| Fuel supplier(s) | Jet A-1 expected; not confirmed 🟧 |
| Customs / PoE for pax | Yes — non-Schengen scheduled/charter destinations served; exact hours not confirmed 🟧 |
| De-icing | Available — expected standard German winter provision; procedure/season detail not confirmed 🟧 |

**K Global network fields (live VAMSYS):** Category **R** · Base **No** · Preferred alternates **EDDF, EDDB, EDDH** · Taxi-in **10 min** / taxi-out **12 min**.

---

## 2. Terminals & concourses

- **Terminal layout:** Terminals A, B and C (C the largest, opened 1998) each jet-bridge-equipped; a Terminal D used for peak passenger periods; the Karl Jatho GA terminal handles general aviation separately.
- **Our operation uses:** Not independently confirmed which terminal/concourse our operation is assigned — expect one of A/B/C given scheduled international/charter service; confirm with handling. 🟧
- **International arrivals / CBP-equivalent hall:** Confirmed international/non-Schengen service operates from the field; exact hall/terminal assignment not confirmed. 🟧
- **Notes:** No terminal-programme transition identified (unlike EDDF's 2026 T2/T3 changeover) — treat the A/B/C/D structure as stable pending confirmation. 🟧

---

## 3. Stands / gates (by code letter & our fleet)

- **Widebody (Code E/F) stands:** All three main terminals (A/B/C) are reported capable of handling Boeing 747-class aircraft; exact per-stand code-letter data not independently confirmed against the current AD chart. 🟧
- **Stands NOT usable by our types:** None specifically identified — narrow-body short/medium-haul types are the expected equipment on this domestic German field; no stand-size constraint found for the current K Global fleet. See [Briefing §17](index.md).
- **Remote / hardstand positions:** Not confirmed. 🟧
- **Contact vs remote for our arrivals:** Not confirmed — expect a contact gate for scheduled service pending handling confirmation. 🟧
- **Ground-movement stand caveats:** Be explicit about avoiding any routing that would place a K Global type on the short/unlit centre runway (09C/27C) — see [Briefing §13](index.md) and the Departure/Arrival taxi sections.

---

## 4. Slots, curfew & CTOT regime

- **Slot coordination level:** No formal slot-coordination regime confirmed for Hannover in reachable sources — contrast with EDDB, which is coordinated. Confirm on the current OFP. 🟧
- **Curfew / night restriction:** Noise-certificate-based restriction reported broadly for the ≈2200/2300–0600 local window (ICAO Annex 16 Vol I Ch 3/4/14 dependent) — **not a hard universal curfew**; Hannover is one of the few 24h-operating German fields, with overnight cargo/night-mail movements a known feature. Exact current parameters unconfirmed. 🟧
- **CTOT / flow control:** Not confirmed as a formal ATFM/CTOT-managed field in reachable sources; general EUROCONTROL Network Manager practice may still apply in peak/adverse conditions. 🟧
- **Commercial impact:** The absence of a hard curfew (unlike Hamburg) gives some late/early scheduling flexibility, but the noise-certificate-based restriction should not be assumed absent — confirm current parameters before scheduling a movement in the 2200–0600 window.

---

## 5. Handling agents & turnaround

- **Handling agent(s):** Not confirmed from reachable public sources — full scheduled-hub handling is expected given international/charter service. 🟧
- **Typical turnaround time for our type:** Not independently confirmed; VAMSYS mirror gives **taxi-in 10 min / taxi-out 12 min** for planning purposes `[VAMSYS mirror 2026-07-25]` — build the gate turn around these plus standard narrow-body service times.
- **Services:** Push-back, GPU/PCA, water/lav, catering and cabin clean expected at a scheduled-hub terminal stand (standard German-hub provision); not individually confirmed. 🟧
- **Turnaround risk items:** Confirming the assigned runway is not the short/unlit centre runway (09C/27C) is the standing ground-ops caution; winter contamination (snow/slush/ice) can extend de-icing and taxi times in season.

---

## 6. Load factors & seasonality

- **Demand peaks:** Not independently sourced for EDDV specifically — treat as standard German domestic/regional demand pending network-schedule confirmation. 🟧
- **Day-of-week / seasonal pattern:** Not confirmed. 🟧
- **Cargo / belly capacity:** Hannover has a historical overnight-integrator/night-airmail role — relevant to any belly-cargo planning, though not independently confirmed for the current K Global operation. 🟧
- **Connection banks:** Not applicable — EDDV is not a K Global base; connection timing is set by the network schedule at the relevant hub end of each pairing.

---

## 7. Fuel

- **Supplier / into-plane:** Jet A-1 expected on field; specific supplier not confirmed. 🟧
- **Uplift availability & hours:** Not confirmed. 🟧
- **Price / tankering angle:** Not independently sourced — assess price differential to/from EDDF (home base) per leg at planning. See [`OM E — Fuel Policy`](../../../../../flight-ops/fuel-policy.md).
- **Quality / freeze notes:** Standard Jet A-1; no cold-soak/fuel-freeze consideration specific to EDDV.

---

## 8. Customs / immigration & PoE for pax

- **Port of Entry:** Yes — scheduled international/charter destinations including non-Schengen service confirmed.
- **CBP-equivalent / immigration hours:** Not confirmed. 🟧
- **Pre-clearance / visa-transit notes:** Standard Schengen/non-Schengen entry per nationality; no pre-clearance programme identified.
- **Late/overnight/diversion caveat:** No hard curfew, but confirm current noise-certificate-based restriction parameters (§4) before planning a late/overnight movement; customs desk staffing for an off-peak arrival is not confirmed. 🟧

---

## 9. De-icing provisioning & season

- **Availability:** Expected available given standard German winter climate; specific facility/procedure not confirmed. 🟧
- **Season:** Typical Central/North European de-icing season, roughly Oct–Apr (not independently EDDV-sourced). 🟧
- **Provisioning:** Fluid type, holdover implications and peak throughput not confirmed. 🟧
- **Commercial impact:** Winter fog/low stratus (§14 of the Briefing) combined with de-icing requirements are the principal seasonal delay-risk drivers at this field.

---

## 10. Typical delays / reliability

- **Signature delay driver:** Winter fog/low stratus in the North German lowland climate — mitigated by confirmed CAT II/III capability (via ATIS LVP remark), but exact current LVP status/trigger conditions should be pulled at planning.
- **Ground-delay / flow-program exposure:** Not confirmed — moderate traffic density expected relative to major hubs; no formal slot/CTOT regime identified (§4). 🟧
- **On-time reliability picture:** Winter fog mornings are the highest schedule-risk exposure identified; the three-runway configuration with a short/unlit centre runway (09C/27C) is a standing ground-ops caution rather than a reliability driver in itself. 🟧

---

## 11. Curfew & noise-charge commercial impact

- **Noise-charge regime:** Not confirmed from reachable sources — a noise-certificate-based restriction applies broadly in the 2200/2300–0600 window; exact charge structure not sourced. 🟧
- **Curfew infringement consequence:** No hard curfew identified (unlike Hamburg) — consequence of movement outside the noise-restriction window not confirmed. 🟧
- **Scheduling guardrails:** Build buffer around the ≈2200/2300–0600 noise-restriction window pending confirmation of exact current parameters; do not assume Hannover behaves like a hard-curfew field.

---

## Open items (🟧 — confirm against AIP / operator data)

- Terminal/gate assignment for our operation.
- Handling agent(s) and confirmed minimum turnaround time.
- Slot-coordination status (none currently identified, unlike EDDB) and any CTOT/ATFM exposure.
- Exact noise-certificate-based restriction bounds (2200 vs 2300 start reported variously) and any associated noise-charge structure.
- Fuel into-plane provider and uplift hours.
- Customs/immigration desk hours.
- De-icing facility/procedure and season detail.
- Day-of-week/seasonal load pattern and belly-cargo capacity specific to the K Global operation.
- **No dedicated Bremen FIR/EDWW airspace brief exists in OM C** 🟧 — see [Briefing §4/§18](index.md); the general [Europe area brief](../../../../airspace/europe.md) covers the Langen/continental corridor only, not Bremen FIR.

> **Live data — pull at planning:** fuel price, slot/CTOT file (if any), current ATFM/ground-delay program, demand/load, stand allocation, current runway-in-use. Not stored in this durable file.

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim material may inform content but is not listed here.*

- OurAirports — Hannover Airport (EDDV) — https://ourairports.com/airports/EDDV/pilot-info.html , https://ourairports.com/airports/EDDV/frequencies.html (retrieved 2026-07-25).
- VATSIM Germany Knowledgebase — EDDV Hannover Airport (Bremen FIR/EDWW) — https://knowledgebase.vatsim-germany.org/books/airports-bremen-fir-edww/chapter/eddv-hannover (retrieved 2026-07-25).
- Wikipedia — Hannover Airport — https://en.wikipedia.org/wiki/Hanover/Langenhagen_International_Airport (retrieved 2026-07-25). *Terminal structure, 24h-operation note.*

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-25 | Built from DFS eAIP-derived Briefing + live VAMSYS; new page, part of the fold to a 4-page pack. |
