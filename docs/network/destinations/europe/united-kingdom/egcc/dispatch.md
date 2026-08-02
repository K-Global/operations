# EGCC — Manchester · Dispatch Page

**EGCC / MAN** · Manchester, England, United Kingdom · Europe
**Version** v0.1 · **Updated** 2026-07-26 · **Status** Draft

> **Read-me:** Dispatcher/commercial planning aid for the sim, not a chart. Companion to the [EGCC Briefing](index.md) (informational), [Departure](departure.md) and [Arrival](arrival.md) pages. Static airport/commercial characteristics only; live fuel prices, slot files, CTOTs and demand are pulled at planning (see §Live-data). Any procedure/approach is named only — fly/verify the charted current-AIRAC version. Open 🟧 items are in §Open items. Flag legend 🟥 restriction/hazard · 🟧 caution/unverified · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| Role in network | **Destination** `[VAMSYS mirror 2026-07-26]` |
| Terminals in use for us | Terminal 2 (main international/long-haul terminal post-2025 expansion) or Terminal 3 (low-cost/domestic) per route/handler assignment — confirm current gate assignment 🟧 |
| Widebody stands available | Multiple Code E-capable stands across Terminal 2's piers; exact current widebody count not independently confirmed this pass 🟧 |
| Slot regime | **IATA Level 3** (fully coordinated) — coordinator **Airport Coordination Ltd (ACL)** |
| Curfew | No absolute movement ban, but a hard **Quota Count (QC) night-noise regime**: QC8/QC16 banned 23:00–06:59; QC4 scheduling ban 23:30–05:59 🟥 |
| Primary handling agent | Mandatory nominated handling agent for all visiting aircraft — Signature Flight Support, Menzies, Swissport, dnata, Star Handling, DHL, Jet2, Weston Aviation, T25; specific contracted agent for our operation not confirmed 🟧 |
| Fuel supplier(s) | AVTUR Jet A-1 (no anti-icing additive), hydrants at all pier stands |
| Customs / PoE for pax | **Yes** — H24 |
| De-icing | **Available** — H24, contacts Swissport / Menzies / Aero Mag 2000 MAN Ltd |

---

## 2. Terminals & concourses

- **Terminal layout:** Manchester operates **Terminal 2** and **Terminal 3** as its two active passenger terminals. **Terminal 1 closed permanently on 19 November 2025**, with part of its footprint absorbed into an expanded Terminal 3. Terminal 2's £1.3bn expansion completed through 2025 (new security hall with CT scanners, refurbished departure lounge, new Pier 2) and now handles roughly 70% of the airport's passenger traffic, including the bulk of long-haul and international-carrier services. Terminal 3 remains the smaller of the two, focused on low-cost/domestic carriers (it is Ryanair's main Manchester base) and is itself under refurbishment (expanded departure lounge, new entrance area using former T1 space). 🟧
- **Our operation uses:** Long-haul/international scheduled service of our type would typically route through **Terminal 2**; confirm current gate/pier assignment with handling given the terminal programme's very recent (2025) completion. 🟧
- **International arrivals / CBP-equivalent hall:** International arrivals clear UK Border Force in the terminal of arrival (T2 or T3 depending on gate); no pre-clearance programme at EGCC.
- **Notes:** 🟧 The Terminal 1→Terminal 3 footprint transfer and Terminal 2 pier completion are very recent (through Nov 2025) — confirm current gate/concourse assignment with handling before finalising a stand plan.

---

## 3. Stands / gates (by code letter & our fleet)

- **Widebody (Code E/F) stands:** Terminal 2's expanded pier structure (including new Pier 2, completed 2025) is the primary widebody-capable cluster post-transformation; exact current widebody stand count/list not independently confirmed this pass. 🟧
- **Stands NOT usable by our types:** Narrowbody/regional-oriented Terminal 3 gates are not sized for Code E/F — do not plan a widebody onto them; several taxiway approaches to stands are wingspan-restricted to ≤36 m (see [Briefing §13](index.md)) — confirm stand reachability for Code E/F before planning.
- **Remote / hardstand positions:** Availability/count not independently confirmed this pass. 🟧
- **Contact vs remote for our arrivals:** Expect a contact gate for a scheduled destination turn; confirm with handling.
- **Ground-movement stand caveats:** **B777, A340-600 and A380 are PROHIBITED from Taxiway Lima** 🟥 — a real ground-routing constraint for Code E/F stand access; several taxiways near stands are wingspan-restricted (November-Alpha/Bravo Blue/Orange, Zulu-Blue/Orange, Lima south of Stand 6, Juliet-Echo, Juliet-Foxtrot, Golf east of Stand 55) — see [Briefing §13](index.md) and the Departure/Arrival taxi sections.

---

## 4. Slots, curfew & CTOT regime

- **Slot coordination level:** **IATA Level 3** — coordinator **Airport Coordination Ltd (ACL)**; scheduling detail governed by ACL's published **Local Rule 1** (mechanism cited; exact current content is a subscription/coordinator document). 🟥
- **Curfew / night restriction:** No absolute night movement ban, but a hard **Quota Count (QC) regime**: QC8/QC16-rated aircraft are prohibited 23:00–06:59; QC4-rated aircraft may not be **scheduled** to depart 23:30–05:59; night movements 23:30–05:59 are capped at ≤7% of total annual movements against a published seasonal cap (exact current-season figure pull-at-planning). The airfield operations duty manager will typically prohibit a flight from operating if it has not pushed back at least 30 minutes before the 23:00 QC8/16 curfew `[Manchester Airport ASI-8 §2]`. 🟥
- **CTOT / flow control:** EUROCONTROL Network Manager ATFM/CTOT regulation applies as standard practice for a congested, slot-coordinated UK hub. 🟧
- **Commercial impact:** Schedule integrity (on-time pushback) has direct network consequences given the Level 3 regime and PPR requirement; the QC night regime makes **QC classification of the assigned aircraft type** and **buffer ahead of the 23:00/23:30 thresholds** the two biggest scheduling guardrails for a late-day rotation into or out of EGCC.

---

## 5. Handling agents & turnaround

- **Handling agent(s):** All visiting aircraft require a **mandatory nominated handling agent**; confirmed operators at the field include Signature Flight Support, Menzies, Swissport, dnata, Star Handling, DHL, Jet2, Weston Aviation and T25 — the specific agent contracted for our operation is not confirmed in reachable public sources. 🟧
- **Typical turnaround time for our type:** Not independently confirmed; VAMSYS mirror gives **taxi-in 14 min / taxi-out 18 min** for planning purposes `[VAMSYS mirror 2026-07-26]` — build the gate turn around these plus standard service times.
- **Services:** Push-back, GPU/PCA, potable water/lav, catering and cabin services all expected at a Code E/F contact stand (standard major-regional-hub provision).
- **Turnaround risk items:** Gate availability during the still-settling post-transformation terminal programme (2025 T1 closure/T2 completion), de-icing throughput in the autumn/winter season, and the segregated dual/single-runway configuration (affecting taxi times) can each add unplanned turn time.

---

## 6. Load factors & seasonality

- **Demand peaks:** As the UK's third-busiest airport and largest outside the South East, Manchester anchors year-round European short/medium-haul and a meaningful long-haul programme; connection banks and route mix at EGCC are set by the network schedule rather than by third-party demand data specific to our operation.
- **Day-of-week / seasonal pattern:** Not independently sourced for our specific route pattern — treat as a standard UK-hub business/leisure mix with summer leisure peaking, pending network-schedule confirmation. 🟧
- **Cargo / belly capacity:** Manchester handles a meaningful express-cargo/air-freight movement volume alongside passenger services generally; confirm K Global belly-cargo uplift plans against payload at planning. 🟧
- **Connection banks:** Not the base — inbound/outbound wave timing at EGCC is set by the destination-route schedule; cross-ref the route register.

---

## 7. Fuel

- **Supplier / into-plane:** AVTUR Jet A-1 (no anti-icing additive); specific into-plane provider not confirmed in reachable public sources. 🟧
- **Uplift availability & hours:** Hydrants at all pier stands; no over-wing fuelling; H24. 🟩
- **Price / tankering angle:** Assess price differentials versus base/hub per leg at planning — no EGCC-specific price signal sourced this pass. See [`OM E — Fuel Policy`](../../../../../flight-ops/fuel-policy.md).
- **Quality / freeze notes:** Standard Jet A-1; no cold-soak/fuel-freeze consideration specific to the EGCC uplift itself.

---

## 8. Customs / immigration & PoE for pax

- **Port of Entry:** Yes — international arrivals processed through UK Border Force in the terminal of arrival (T2 or T3).
- **CBP-equivalent / immigration hours:** H24 (customs and Port Health confirmed H24 per AIP). 🟩
- **Pre-clearance / visa-transit notes:** Standard UK entry per nationality; no pre-clearance programme at EGCC.
- **Late/overnight/diversion caveat:** No absolute curfew, but the **QC8/QC16 night ban (23:00–06:59)** is the dominant late/overnight constraint rather than immigration-desk staffing — a delayed arrival into the QC8/16-banned window cannot land regardless of desk hours unless the aircraft/operation is QC-compliant. 🟥

---

## 9. De-icing provisioning & season

- **Availability:** **Available H24** — contacts Swissport / Menzies / Aero Mag 2000 MAN Ltd. 🟩
- **Season:** Typical UK de-icing season, broadly autumn through spring; exact EGCC-specific season dates not independently confirmed this pass. 🟧
- **Provisioning:** Multiple confirmed de-icing contractors support winter throughput; pad/gate provisioning detail not independently confirmed this pass. 🟧
- **Commercial impact:** Autumn/winter low-cloud/fog days combined with de-icing throughput are the principal seasonal delay-risk drivers at this field — build winter schedule buffer accordingly. See [`OM E — Cold Weather Operations`](../../../../../flight-ops/cold-weather-operations.md).

---

## 10. Typical delays / reliability

- **Signature delay driver:** Low cloud/stratus/radiation fog triggering LVP — mitigated by CAT III infrastructure on the primary runway pair (05L/23R) but the field reverts to **single-runway operation** during LVP Vis regardless of which configuration was previously active, reducing capacity. 🟧
- **Ground-delay / flow-program exposure:** Meaningful, given the segregated dual/single-runway mode and status as a busy, slot-coordinated Level 3 UK hub — expect EUROCONTROL flow management in peak/adverse conditions. 🟧
- **On-time reliability picture:** Autumn/winter low-vis mornings and the still-settling post-transformation terminal environment (2025 T1 closure/T2 completion) carry the highest schedule-risk exposure. 🟧

---

## 11. Curfew & noise-charge commercial impact

- **Noise-charge regime:** Departure noise penalties apply above **90 dB(A)** (07:00–22:59), **82 dB(A)** (23:00–23:29 and 06:00–06:59) and **81 dB(A)** (23:30–05:59), measured 6.5 km from start of roll `[Manchester Airport ASI-8 §3]` — a direct financial disincentive against noisy late/night operations. Airlines are also charged differentially by aircraft noise certification (QC class) under the fees and charges structure.
- **Curfew infringement consequence:** No absolute movement ban exists, but a **QC8/QC16-rated aircraft cannot legally operate 23:00–06:59**, and a **QC4-rated aircraft cannot be scheduled to depart 23:30–05:59** — this is a hard scheduling constraint tied to aircraft type, not merely a charge.
- **Scheduling guardrails:** Build buffer so a normal operational delay does not push a QC8/QC16-sensitive rotation into the 23:00–06:59 window, and do not schedule a QC4-classed type to depart inside 23:30–05:59; treat the airfield operations duty manager's 30-minutes-before-23:00 pushback rule as a hard planning guardrail for the last rotation of the day.

---

## Open items (🟧 — confirm against AIP / operator data)

- Current post-transformation (2025 Terminal 1 closure / Terminal 2 expansion) gate/pier assignment for our operation.
- Ground handling agent(s) contracted for our operation and confirmed minimum turnaround time.
- Fuel into-plane provider (beyond confirmed Jet A-1/hydrant availability).
- De-icing season dates and pad/gate provisioning detail specific to EGCC.
- EUROCONTROL CTOT/ATFM specifics for EGCC (general practice assumed, not independently EGCC-sourced).
- Day-of-week/seasonal load pattern and belly-cargo capacity specific to the K Global operation.
- ACL Local Rule 1 exact current content (subscription/coordinator document).
- Current-season QC points-budget usage and night-movement cap figures.

> **Live data — pull at planning:** fuel price, slot/CTOT file, current ATFM/ground-delay program, demand/load, stand allocation, current LVP status. Not stored in this durable file.

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim material may inform content but is not listed here. See Sources for the tier hierarchy.*

- **UK AIP (NATS AIS), AD 2 EGCC**, AIRAC cycle effective 2026-03-19 — https://www.aurora.nats.co.uk/htmlAIP/Publications/2026-03-19-AIRAC/html/eAIP/EG-AD-2.EGCC-en-GB.html (retrieved 2026-07-26).
- Manchester Airport — Airside Standing Instruction 8, "Aircraft Noise" — https://assets.live.dxp.maginfrastructure.com/f/73114/x/0ff030296a/asi-8-aircraft-noise.pdf (retrieved 2026-07-26). *QC regime, noise penalties.*
- Manchester Airport — Noise Action Plan Summary 2024-2028 — https://assets.live.dxp.maginfrastructure.com/f/73114/x/9fc958e22b/9119_mag_noise_action_plan_man_1920x1080_summary_v3.pdf (retrieved 2026-07-26). *QC points budget, fees/charges differentiation.*
- Simple Flying — "More Airlines Move Over To Manchester Airport's Revamped Terminal 2" — https://simpleflying.com/more-airlines-move-manchester-airport-terminal-2/ (retrieved 2026-07-26). *Terminal 1 closure/Terminal 2 completion timeline.*
- Wikipedia — "Manchester Airport" — https://en.wikipedia.org/wiki/Manchester_Airport (retrieved 2026-07-26). *Terminal programme corroboration.*
- Airport Coordination Limited (ACL) — https://www.acl-uk.org/ (retrieved 2026-07-26). *Level 3 coordinator confirmation.*

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-26 | Built from UK AIP (NATS AIS); K Global fields from live VAMSYS; 4-page pack. |
