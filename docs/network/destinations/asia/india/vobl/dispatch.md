# VOBL — Kempegowda Intl · Dispatch Page

**VOBL / BLR** · Bengaluru (Devanahalli), Karnataka, India · Asia
**Version** v0.1 · **Updated** 2026-07-26 · **Status** Draft — AIP India-derived

> **Read-me:** Dispatcher/commercial planning aid for the sim, not a chart. Companion to the [VOBL Briefing](index.md) (informational), [Departure](departure.md) and [Arrival](arrival.md) pages. Static airport/commercial characteristics only; live fuel prices, slot files, CTOTs and demand are pulled at planning (see §Live-data). Any procedure/approach is named only — fly/verify the charted current-AIRAC version. Open 🟧 items are in §Open items. Flag legend 🟥 restriction/hazard · 🟧 caution/unverified · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| Role in network | **Destination / spoke (non-base)** `[VAMSYS mirror 2026-07-26]` |
| Terminals in use for us | **Terminal 2** (international operations since 12 Sep 2023, Code-F gate provisions) is the expected international-arrivals terminal; **Terminal 1** is domestic-only from the same date 🟧 |
| Widebody stands available | Terminal 2 has Code-F gate provisions; exact widebody stand count/allocation not independently confirmed 🟧 |
| Slot regime | No IATA slot level confirmed; airport instead publishes explicit **hourly runway-movement capacity caps** (§4) 🟧 |
| Curfew | **None found** — ATS/customs/fuel/handling/security all H24 🟩 |
| Primary handling agent | Not confirmed in reachable sources 🟧 |
| Fuel supplier(s) | Jet A-1, multi-oil-company shared fuel farm (built/operated via Indian Oil Skytanking Ltd) |
| Customs / PoE for pax | **Yes — H24** 🟩 |
| De-icing | **NIL** — not required at this tropical-latitude field 🟩 |

---

## 2. Terminals & concourses

- **Terminal layout:** **Terminal 1** (original terminal, expanded 2011–2013 as "T1A," 35 million pax/year capacity) has been **domestic-only since 12 September 2023**, handling IndiGo, Akasa Air, Alliance Air and SpiceJet domestic services. **Terminal 2** (Phase 1 opened, began domestic ops 15 Jan 2023; took over **all international operations plus Air India/Air India Express/Star Air domestic flights** from 12 Sep 2023) is a 255,000 m² facility with 95 check-in counters, 17 security lanes, 9 baggage-claim belts, 34 conventional + 6 electronic immigration gates, and gate provisions for Code-F aircraft (A380/747-8 class).
- **Our operation uses:** Given VOBL's role as a non-base destination, expect **Terminal 2** for any international K Global service; confirm actual gate/terminal assignment with handling, as T1/T2 traffic allocation continues to evolve with Terminal 2 Phase 2 construction (adds a further 20 million pax/year capacity). 🟧
- **International arrivals / CBP-equivalent hall:** International arrivals clear immigration in Terminal 2 (34 conventional + 6 e-gates); Terminal 1 no longer processes international pax.
- **Notes:** 🟧 Terminal 1's historically A380/Code-F-capable gates 41–42 predate the 2023 domestic-only change for T1 — current Code-F gate location (most likely within Terminal 2's Code-F provisions) is not independently confirmed. Terminal 2 Phase 2 and an eventual Terminal 3 (masterplan, targeting 90–100 million pax/year capacity, expected late 2020s/early 2030s) will further shift the terminal picture — re-verify at each build refresh.

---

## 3. Stands / gates (by code letter & our fleet)

- **Widebody (Code E/F) stands:** Terminal 2 carries Code-F gate provisions per its design brief; exact widebody stand numbers/count not independently confirmed. 🟧 **Code-F aircraft are restricted to RWY 09R/27L (south runway) in all operating modes** — this is a hard runway-assignment constraint, not merely a preference (see Briefing §3.2/§10).
- **Stands NOT usable by our types:** Domestic-oriented Terminal 1 bus-gate stands (lower-floor gates 3–9/19–25) are sized for narrowbody domestic traffic; do not plan an international widebody rotation there.
- **Remote / hardstand positions:** Apron stand groups span numbered series V36–V70 and 1–123 (plus sub-series) across four PCN zones (76–92/R/B/W/T); bridge-mounted (jetbridge) equipment is mandatory on contact stands. Remote/hardstand allocation for a scheduled international widebody service is not confirmed. 🟧
- **Contact vs remote for our arrivals:** Expect a contact gate at Terminal 2 for a scheduled international arrival; confirm with handling.
- **Ground-movement stand caveats:** ILS-protection ground constraints apply during CAT IIIB operations on the south runway — **TWY H1/H2 closed when ILS RWY 09R is active; TWY H9/H10 closed when ILS RWY 27L is active** — see [Briefing §13](index.md) and the Departure/Arrival taxi sections.

---

## 4. Slots, curfew & CTOT regime

- **Slot coordination level:** No IATA slot level (1/2/3) confirmed in reachable public sources. 🟧 The airport instead publishes explicit **hourly runway-movement capacity caps**: single-runway mode — 33 arrivals-only / 33 departures-only / 42 mixed movements per hour; segregated mode — 35/35/60, with each Code-F, Code-E or ATR movement counted as **two** ATMs. `[AAI eAIP AD 2 VOBL 2.3]`
- **Curfew / night restriction:** **None found.** ATS, customs, fuel, handling and security are all published H24; only the aerodrome operator's own administrative office keeps limited hours (Mon–Fri 0300–1200 UTC). 🟩
- **CTOT / flow control:** Not independently confirmed for VOBL specifically; India's domestic ATFM practice would be expected to apply at a high-traffic hub during peak-bank congestion or adverse weather (e.g. winter fog LVP events). 🟧
- **Commercial impact:** The published hourly capacity caps — not a slot regime in the EU/IATA sense — are the practical constraint on schedulable movement windows at peak banks; winter pre-dawn fog (Dec–Jan) is the dominant irregular-operations risk (§10/§11).

---

## 5. Handling agents & turnaround

- **Handling agent(s):** Not confirmed in reachable public sources. 🟧
- **Typical turnaround time for our type:** Not independently confirmed; VAMSYS mirror gives **taxi-in 12 min / taxi-out 15 min** for planning purposes `[VAMSYS mirror 2026-07-26]` — build the gate turn around these plus standard type service times.
- **Services:** Bridge-mounted (jetbridge) equipment is mandatory on contact stands; standard push-back, GPU/PCA, potable water/lav, catering and cabin-clean services expected at an international Code E/F stand.
- **Turnaround risk items:** Winter pre-dawn fog/LVP events (sequencing delays, possible mandatory follow-me below RVR 350–550 m), and the airport's hourly runway-capacity caps during peak banks, are the principal sources of unplanned turn-time risk.

---

## 6. Load factors & seasonality

- **Demand peaks:** VOBL is the third-busiest airport in India (44.47 million passengers, FY2025-26) and a hub for Air India, Alliance Air, DHL Aviation, FedEx Express and Star Air, with Air India Express, Akasa Air and IndiGo operating bases there — a large, year-round origin/destination market rather than a pure connecting hub for K Global. 🟧 (Third-party traffic statistic; not independently verified for K Global-specific demand.)
- **Day-of-week / seasonal pattern:** Not independently sourced for K Global's operation; general Indian domestic/international leisure-and-business mix assumed pending network-schedule confirmation. 🟧
- **Cargo / belly capacity:** VOBL is a major Indian cargo gateway — three dedicated cargo terminals (AISATS with pharmaceutical cold-chain capability; a DHL/Blue Dart joint facility; and a Menzies Aviation Bobba facility plus a new domestic cargo terminal opened Feb 2025), with a combined international cargo capacity of ~680,000 tonnes/year and total capacity (incl. domestic) of ~1.4 million tonnes/year against ~450,000–532,000 tonnes/year currently handled. Confirm K Global belly-cargo uplift plans against payload at planning. 🟧
- **Connection banks:** As a non-base spoke destination, VOBL's connection-bank timing for K Global is set by the network schedule at the connecting hub rather than by local demand data — cross-ref the route register.

---

## 7. Fuel

- **Supplier / into-plane:** Jet A-1 via a shared, multi-oil-company fuel farm (11 acres, built by Indian Oil Skytanking Ltd, fed by a ~36 km pipeline from a storage terminal at Devanagonthi); individual into-plane operator for our flights not confirmed. 🟧
- **Uplift availability & hours:** **H24**, via fuel hydrants, dispensers and bowsers. `[AAI eAIP AD 2 VOBL 2.3/2.4]`
- **Price / tankering angle:** Not independently sourced; assess relative price/tankering angle at planning per leg. See [`OM E — Fuel Policy`](../../../../../flight-ops/fuel-policy.md).
- **Quality / freeze notes:** Standard Jet A-1; no cold-soak/fuel-freeze consideration at this tropical-latitude field.

---

## 8. Customs / immigration & PoE for pax

- **Port of Entry:** Yes — international arrivals processed at **Terminal 2** (34 conventional + 6 electronic immigration gates).
- **CBP-equivalent / immigration hours:** **H24** per AIP. 🟩
- **Pre-clearance / visa-transit notes:** Standard Indian visa/e-visa entry per nationality; no pre-clearance programme at VOBL.
- **Late/overnight/diversion caveat:** No curfew or immigration-desk staffing gap identified — customs/immigration is H24, so a late or diverted arrival is not blocked by desk hours. The operative overnight risk is instead **winter pre-dawn fog/LVP** disrupting the morning bank (§10). 🟧

---

## 9. De-icing provisioning & season

- **Availability:** **NIL.** `[AAI eAIP AD 2 VOBL 2.3/2.4]` 🟩
- **Season:** Not applicable — VOBL's tropical-plateau climate does not require de-icing.
- **Provisioning:** Not applicable.
- **Commercial impact:** None. See [`OM E — Cold Weather Operations`](../../../../../flight-ops/cold-weather-operations.md) for network-wide policy where relevant to other legs; not a consideration for VOBL itself.

---

## 10. Typical delays / reliability

- **Signature delay driver:** **Winter pre-dawn radiation fog (typically Dec–Jan)** — Low Visibility Procedures are activated ahead of the early-morning departure bank, producing sequencing delays across dozens of flights on a bad-fog morning and, in more severe events, diversions to Chennai or Hyderabad. This is the field's dominant reliability risk, comparable in character (though not season) to a fog-prone temperate hub.
- **Ground-delay / flow-program exposure:** The airport's published hourly runway-movement capacity caps (§4) mean peak-bank congestion is a structural, not just a weather-driven, risk; exact ATFM/flow-program specifics for VOBL not independently confirmed. 🟧
- **On-time reliability picture:** Early-morning winter departures carry the highest schedule-risk exposure at this field; pre-monsoon (Mar–May) afternoon/evening convective storms are a secondary, more localized disruption risk. 🟧

---

## 11. Curfew & noise-charge commercial impact

- **Noise-charge regime:** No noise-charge or noise-category surcharge regime found in reachable sources; the only published noise-abatement measure is minimising reverse-thrust use after landing. 🟧
- **Curfew infringement consequence:** Not applicable — no curfew exists at VOBL.
- **Scheduling guardrails:** Given the absence of a curfew, the real scheduling guardrail is the **winter fog window** — build buffer into early-morning rotations December–January, and be prepared for the runway-capacity caps to bind during peak banks generally.

---

## Open items (🟧 — confirm against AIP / operator data)

- Ground-handling agent(s) contracted for our operation and confirmed minimum turnaround time.
- Current-day widebody/Code-F gate assignment (Terminal 2, following T1's 2023 shift to domestic-only).
- IATA slot coordination level, if any (published hourly capacity caps found instead).
- ATFM/ground-delay program specifics for VOBL.
- Fuel into-plane operator/price signal specific to K Global's operation.
- Day-of-week/seasonal load pattern and belly-cargo capacity specific to the K Global operation.

> **Live data — pull at planning:** fuel price, current ATFM/ground-delay program, current demand/load, stand allocation, current winter-fog/LVP status. Not stored in this durable file.

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim material may inform content but is not listed here.*

- **AAI eAIP India, AD 2 VOBL**, AMDT 04-25, eff. 2025-08-07 — https://aim-india.aai.aero/eaip/eaip-v2-04-2025/eAIP/IN-AD%202.1VOBL-en-GB.html (retrieved 2026-07-26). *Operating hours, runway-capacity caps, fuel, customs, de-icing status.*
- Wikipedia — "Kempegowda International Airport" — https://en.wikipedia.org/wiki/Kempegowda_International_Airport (retrieved 2026-07-26). *Terminal 1/Terminal 2 history and split, cargo-terminal detail, fuel-farm detail, passenger/cargo statistics.*
- Deccan Herald — "Fog delays 67 flights at KIA" and related reporting — https://www.deccanherald.com/india/karnataka/bengaluru/fog-delays-67-flights-at-kia-789333 (retrieved 2026-07-26). *Winter-fog/LVP reliability corroboration.*
- OurAirports — https://ourairports.com/airports/VOBL/ (retrieved 2026-07-26). *Cross-check.*

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-26 | Built from AIP India (AAI); K Global fields from live VAMSYS; 4-page pack. |
