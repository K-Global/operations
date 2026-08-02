# LFMN — Nice-Côte d'Azur · Dispatch Page

**LFMN / NCE** · Nice, Alpes-Maritimes, France · Europe
**Version** v0.1 · **Updated** 2026-07-26 · **Status** Draft — SIA France eAIP-derived

> **Read-me:** Dispatcher/commercial planning aid for the sim, not a chart. Companion to the [LFMN Briefing](index.md) (informational), [Departure](departure.md) and [Arrival](arrival.md) pages. Static airport/commercial characteristics only; live fuel prices, slot files, CTOTs and demand are pulled at planning (see §Live-data). Any procedure/approach is named only — fly/verify the charted current-AIRAC version. Open 🟧 items are in §Open items. Flag legend 🟥 restriction/hazard · 🟧 caution/unverified · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| Role in network | **Destination / origin station**, aerodrome category **M**, not a base `[VAMSYS mirror 2026-07-26]` |
| Terminals in use for us | Terminal 1 / Terminal 2 (linked by free shuttle bus/tram); Business Aviation Terminal adjacent to T2 for any charter/private movement |
| Widebody stands available | Code F (A380) push-pull procedures documented at specific stands (2B, 17, 52B, 54B, 56B) — exceptional/charter use, not routine scheduled capacity 🟧 |
| Slot regime | Not confirmed — no IATA coordination level found in reachable sources 🟧 |
| Curfew | **No blanket curfew** — noise-class-based restriction: Chapter 2 / marginal Chapter 3 jets banned landing 23:30–06:15 and departing 23:15–06:00 local 🟥 |
| Primary handling agent | Commercial: Air France, Aviapartner, Menzies, Alyzia. Business/private: Aviapartner (Executive), Signature, DC Aviation-G Ops — specific K Global contract not confirmed 🟧 |
| Fuel supplier(s) | **SASCA** and **WF Aviation Services** (Jet A-1) |
| Customs / PoE for pax | **Yes** — H24 |
| De-icing | 🟥 **Not provided** — no dispatched capability under any circumstances (AIP AD 2.3 §11) |

---

## 2. Terminals & concourses

- **Terminal layout:** **Terminal 1** and **Terminal 2**, connected by free shuttle buses/trams, both also linked by free tram to the on-site Nice Saint-Augustin (Aéroport) SNCF rail station. Restaurants, banking and tourist-office services are available in both terminals. A dedicated **Business Aviation Terminal** (opened 2010, ~1,500 m²) sits adjacent to Terminal 2, housing operations rooms, VIP/crew lounges and several business-aviation operators' offices.
- **Our operation uses:** Not independently confirmed for the K Global route plan this pass — assign per current handling-agent allocation at check-in/planning. 🟧
- **International arrivals / CBP-equivalent hall:** Standard Schengen/non-Schengen split across T1/T2; customs and immigration operate H24 (AIP AD 2.3 §2).
- **Notes:** Confirm current gate/terminal assignment with handling before finalising a stand plan; no terminal-transition programme was identified in reachable sources (unlike some larger K Global hubs). 🟧

---

## 3. Stands / gates (by code letter & our fleet)

- **Widebody (Code E/F) stands:** The AIP documents specific A380 push-pull towing procedures at stands **2B, 17, 52B, 54B and 56B** (AD 2 LFMN 20.3.2) — this confirms occasional Code F capability exists, driven by charter/event traffic (Cannes Film Festival, Monaco Grand Prix, Cannes Lions, summer yachting season) rather than routine scheduled service. 🟧
- **Stands NOT usable by our types:** Taxiway/stand access for large-wingspan aircraft (A380, B747-8, AN-124, C-5) is restricted to specific routings per the airport's ground-movement charts — confirm against current AIRAC/airport diagram before planning any oversized movement.
- **Remote / hardstand positions:** Business/private traffic on **Parking KILO** is towed between the parking area and start-up stands; engines/APU must be shut down entering KILO at the "STOP ENGINE AND APU" line, and APU use is prohibited while parked there (400 Hz/28 V ground power and air conditioning are compulsory at the starting stands instead).
- **Contact vs remote for our arrivals:** Not independently confirmed for the K Global operation — confirm with handling. 🟧
- **Ground-movement stand caveats:** Short taxi distances from certain stands to the RWY 04L/22R holding points are AIP-flagged as a runway-incursion risk given the field's staggered/"inverted" runway-pair operation — see [Briefing §3.3/§13](index.md) and the Departure/Arrival taxi sections.

---

## 4. Slots, curfew & CTOT regime

- **Slot coordination level:** Not confirmed in reachable sources — no IATA Level 1/2/3 designation was found for LFMN. Treat as unconfirmed rather than assuming an uncoordinated field. 🟧
- **Curfew / night restriction:** **Not a blanket movement ban.** Per the 2 March 2010 ministerial order, aircraft in **ICAO Annex 16 Chapter 2**, or **Chapter 3 jets with a cumulative certified-noise margin below 13 EPNdB**, are prohibited from **landing between 23:30–06:15** and **departing between 23:15–06:00** local time. Modern Chapter 3/Chapter 4-compliant K Global equipment with adequate noise margin is not automatically excluded by this rule — confirm the specific type's cumulative margin (calculable via the DGAC's "Caramel" tool) before planning any late-evening/early-morning movement. 🟥
- **CTOT / flow control:** Not independently confirmed for LFMN — no EUROCONTROL-specific detail found in reachable sources this pass. 🟧
- **Commercial impact:** The night noise-class restriction is the dominant scheduling guardrail here — build buffer so a normal operational delay does not push a marginal-margin aircraft's arrival past 23:30 or departure past 23:15 local. The strict noise-abatement-routing enforcement (straight-in-approach infringement risk, §11 of the Briefing) is a secondary but real commercial exposure (ACNUSA fines to €40,000).

---

## 5. Handling agents & turnaround

- **Handling agent(s):** Commercial customers: **Air France**, **Aviapartner**, **Menzies**, **Alyzia**. Private/business customers: **Aviapartner (Executive)**, **Signature**, **DC Aviation-G Ops**. The specific agent contracted for the K Global operation is not confirmed in reachable public sources. 🟧
- **Typical turnaround time for our type:** Not independently confirmed; VAMSYS mirror gives **taxi-in 10 min / taxi-out 12 min** for planning purposes `[VAMSYS mirror 2026-07-26]` — build the gate turn around these plus standard narrow-body/regional service times.
- **Services:** Push-back (marshaller/VDGS-assisted), GPU/PCA where stand-equipped, potable water/lav, catering and cabin services expected at a standard Category M contact stand.
- **Turnaround risk items:** Reduced-margin taxiway routing north of TWY U (speed-limited, over-steering technique recommended for wingspan >36 m), the staggered-runway-pair ground-movement pattern (§3), and seasonal event-driven congestion (Cannes Film Festival, Monaco Grand Prix, Cannes Lions, summer yachting season) can each add unplanned turn time.

---

## 6. Load factors & seasonality

- **Demand peaks:** Nice is a strongly leisure/tourism-skewed Côte d'Azur gateway with a pronounced summer peak; major recurring events (Cannes Film Festival mid-May, Monaco Grand Prix late May, Cannes Lions mid-June, summer yachting season June–August) drive significant additional traffic, especially business/private aviation. 🟧 Not independently sourced for the K Global schedule specifically.
- **Day-of-week / seasonal pattern:** Weekly shape skews toward leisure/weekend travel with a strong summer season; confirm against the K Global network schedule. 🟧
- **Cargo / belly capacity:** Not a significant dedicated cargo gateway in reachable sources; treat as belly-only for planning purposes pending confirmation. 🟧
- **Connection banks:** Not a K Global base — connection-bank timing is set by the network schedule at the relevant hub rather than by local demand at LFMN.

---

## 7. Fuel

- **Supplier / into-plane:** **SASCA** (20–80 m³ trucks, 2,300 L/min) and **WF Aviation Services** (35–45 m³ trucks, 2,500 L/min), both Jet A-1.
- **Uplift availability & hours:** SASCA — no prior notice required, 0400–2100 local. WF Aviation Services — no prior notice required, 0400–2200 local. Outside these hours, on-request 1 hr after aircraft landing, via SA ACA on the field or the handling agent. Accepted payment cards vary by supplier (TOTAL/Sterling BP for SASCA; WFS/Avcard/Colt/MH Aviation/Multiservice/Alliance/UVAIR for WF Aviation Services).
- **Price / tankering angle:** Not independently sourced this pass — assess price differential against the relevant K Global base/hub per leg at planning. See [`OM E — Fuel Policy`](../../../../../flight-ops/fuel-policy.md).
- **Quality / freeze notes:** Standard Jet A-1; no cold-soak/fuel-freeze consideration specific to this Mediterranean-climate field.

---

## 8. Customs / immigration & PoE for pax

- **Port of Entry:** Yes — H24 (AIP AD 2.3 §2).
- **CBP-equivalent / immigration hours:** H24, per the AIP.
- **Pre-clearance / visa-transit notes:** Standard Schengen/non-Schengen entry per nationality; no pre-clearance programme identified at LFMN.
- **Late/overnight/diversion caveat:** Customs/immigration is H24, so desk staffing is not the binding constraint overnight — the **night noise-class restriction** (§4) is the operative late/overnight planning limiter for K Global equipment near the noise-margin threshold.

---

## 9. De-icing provisioning & season

- **Availability:** 🟥 **Not provided.** The AIP explicitly states de-icing service is "not provided" at LFMN (AD 2.3 §11) and no de-icing facilities are listed (AD 2.4 §4).
- **Season:** Given the Mediterranean climate, de-icing need is rare, but this is a **zero-capability** field, not merely a limited one — there is no fallback if conditions occur.
- **Provisioning:** N/A — no fluid type, pad, or throughput data exists because no service is provided.
- **Commercial impact:** Any forecast of freezing precipitation or frost affecting a scheduled movement is a **planning-stop event** at this field — there is no on-site mitigation. See [`OM E — Cold Weather Operations`](../../../../../flight-ops/cold-weather-operations.md) for contingency guidance (diversion/delay planning), and [`OM E — Adverse Weather and Windshear`](../../../../../flight-ops/adverse-weather-and-windshear.md) for the related wind/windshear hazards described in the Briefing.

---

## 10. Typical delays / reliability

- **Signature delay driver:** Weather-related closure risk from sea-breeze-reversal tailwind events and terrain-driven windshear/downdraught (see Briefing §3.4/§14), plus the strict noise-abatement-routing enforcement that can constrain runway/procedure choice even in otherwise flyable weather.
- **Ground-delay / flow-program exposure:** Not independently confirmed for LFMN specifically. 🟧 Seasonal event traffic (Cannes Film Festival, Monaco Grand Prix, Cannes Lions, summer yachting season) is a known source of elevated business/private-aviation congestion.
- **On-time reliability picture:** IFALPA specifically flags that **the field may close if weather minimums are not met** in westerly wind conditions — build schedule buffer and holding-fuel margin accordingly, especially outside the peak of summer. 🟧

---

## 11. Curfew & noise-charge commercial impact

- **Noise-charge regime:** Not independently confirmed beyond the ACNUSA infringement-fine mechanism (up to €40,000 for a legal entity) tied to noise-abatement-routing non-compliance and the night noise-class restriction (§4/§12 of the Briefing). No separate per-movement noise surcharge schedule was found in reachable sources. 🟧
- **Curfew infringement consequence:** Non-compliance with the night noise-class restriction, or flying a restricted straight-in approach when the indirect procedure is in force, can trigger an ACNUSA administrative fine of up to €40,000 for a legal entity — a real commercial exposure, not merely a phraseology matter.
- **Scheduling guardrails:** Build buffer into the last rotation of the day so a normal operational delay does not push a marginal-noise-margin aircraft's landing past 23:30 or departure past 23:15 local; treat any schedule slipping toward the night-restriction window as a planning-attention trigger, and confirm the operating type's cumulative noise margin in advance if it is close to the 13 EPNdB threshold.

---

## Open items (🟧 — confirm against AIP / operator data)

- Current terminal/stand assignment for the K Global operation (T1 vs. T2).
- Ground handling agent(s) contracted for our operation and confirmed minimum turnaround time.
- IATA slot-coordination level (none confirmed found — do not assume uncoordinated status).
- Fuel price/tankering angle specific to this route pairing.
- Day-of-week/seasonal load pattern and belly-cargo capacity specific to the K Global operation.
- Noise-charge/per-movement surcharge schedule, if any, beyond the ACNUSA infringement-fine mechanism.
- Ground-delay/flow-program exposure specific to LFMN.

> **Live data — pull at planning:** fuel price, slot/CTOT file (if any), current ATFM/ground-delay program, demand/load, stand allocation, current noise-abatement NOTAM traffic (event-driven restrictions in season). Not stored in this durable file.

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim material may inform content but is not listed here.*

- **SIA France eAIP, AD 2 LFMN** (AIRAC effective 2026-06-11) — https://www.sia.aviation-civile.gouv.fr/media/dvd/eAIP_11_JUN_2026/FRANCE/AIRAC-2026-06-11/html/eAIP/FR-AD-2.LFMN-fr-FR.html (retrieved 2026-07-26). *Terminal/handling/fuel/customs hours, stand-towing procedures, de-icing status.*
- DGAC / DSNA — "Environmental Briefing Nice-Côte d'Azur" — https://www.dca-gops.com/wp-content/uploads/2023/12/Environmental-briefing-v5.pdf (retrieved 2026-07-26). *Night noise-class restriction hours, APU restrictions, ACNUSA fine mechanism.*
- IFALPA — Safety Bulletin 25SAB01, "Operations at Nice (NCE/LFMN) Airport" — https://www.ifalpa.org/wp-content/uploads/2025/12/25sab01-operations-at-nice-airport.pdf (retrieved 2026-07-26). *Weather-closure/holding-fuel guidance.*
- Wikipedia — "Nice Côte d'Azur Airport" — https://en.wikipedia.org/wiki/Nice_C%C3%B4te_d%27Azur_Airport (retrieved 2026-07-26). *Terminal/Business Aviation Terminal corroboration.*

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-26 | Built from SIA France eAIP; K Global fields from live VAMSYS; 4-page pack. |
