# LFQQ — Lille-Lesquin · Dispatch Page

**LFQQ / LIL** · Lille, Hauts-de-France, France · Europe
**Version** v0.1 · **Updated** 2026-07-26 · **Status** Draft

> **Read-me:** Dispatcher/commercial planning aid for the sim, not a chart. Companion to the [LFQQ Briefing](index.md) (informational), [Departure](departure.md) and [Arrival](arrival.md) pages. Static airport/commercial characteristics only; live fuel prices, slot files, CTOTs and demand are pulled at planning (see §Live-data). Any procedure/approach is named only — fly/verify the charted current-AIRAC version. Open 🟧 items are in §Open items. Flag legend 🟥 restriction/hazard · 🟧 caution/unverified · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| Role in network | **Regional / spoke destination** `[VAMSYS mirror 2026-07-26]` — Category **R**, not a base |
| Terminals in use for us | Single-terminal field; Parking B is the commercial-aviation apron used for scheduled traffic |
| Widebody stands available | Two gangway stands (B08/B11) rated B747-400-class in the primary AIP extract; a network reference additionally shows B77W-class capability — not independently AIP-confirmed 🟧 |
| Slot regime | None identified — assumed uncoordinated/Level 1 🟧 |
| Curfew | No hard movement curfew found; narrower training/visual-approach/engine-run-up restrictions apply instead (see [Briefing §5/§12](index.md)) 🟧 |
| Primary handling agent | **AVIAPARTNER** (passenger/commercial); SOGAREL AG/FRET for general aviation and freight |
| Fuel supplier(s) | **AVITAIR** (into-plane, Jet A-1 by truck; 100LL automatic station) |
| Customs / PoE for pax | **Yes** — 0500–2200; O/R coverage if requested before 1700 🟧 |
| De-icing | **Available** — two remote units (FMC-SMD1200-type); fluid Type I/II; no dedicated pad location confirmed 🟧 |

---

## 2. Terminals & concourses

- **Terminal layout:** Single passenger terminal building serving both domestic and international scheduled/charter traffic; no multi-terminal split identified.
- **Our operation uses:** **Parking B** (commercial aviation apron, gangway and non-gangway stands) — see [Briefing §13](index.md).
- **International arrivals / customs hall:** Single customs/immigration facility, 0500–2200 with O/R coverage if requested before 1700 🟧 (exact interpretation of the O/R condition not fully disambiguated).
- **Notes:** No terminal-transition programme or construction note found in reachable sources — treat the terminal layout as stable. 🟧

---

## 3. Stands / gates (by code letter & our fleet)

- **Widebody (Code E) stands:** B08 and B11 (gangway, B747-400-class in the primary AIP extract; B77W-class per a network reference) and B09/B12 (gangway, B767-300-class). 🟧
- **Stands NOT usable by our types:** Parking C (general aviation, self-manoeuvring) excludes A340-600, A350 and B777-300 per the network reference; not intended for scheduled commercial turns in any case.
- **Remote / hardstand positions:** Non-gangway Parking B positions (B01–B06, B13–B17) are narrowbody/regional-scale (Embraer/CRJ-class) with self-manoeuvring exit; bussing not confirmed. 🟧
- **Contact vs remote for our arrivals:** Expect a gangway stand for a scheduled turn where Category-R traffic type warrants it; smaller regional equipment may use a non-gangway Parking B position.
- **Ground-movement stand caveats:** The **published AIP hot spot** near taxiway holding point P5 (RWY 02/20 access) affects ground routing between stands and the runway system — see [Briefing §13](index.md) and the Departure/Arrival taxi sections.

---

## 4. Slots, curfew & CTOT regime

- **Slot coordination level:** None identified in reachable sources — treat as uncoordinated/Level 1. 🟧
- **Curfew / night restriction:** No blanket movement ban found. Narrower restrictions apply instead: **visual approaches prohibited weekends/public holidays and nightly 2100–0500**; training-flight restrictions (Heavy prohibited; turbojet/turboprop weekday-PPR-only); engine-run-up restrictions 2100–0600 (commercial-departure exception before 0800, Tower permission required). 🟧
- **CTOT / flow control:** Not independently identified as an ATFM-regulated field in reachable sources; treat any CTOT exposure as standard EUROCONTROL Network Manager practice for a European regional field rather than a field-specific regime. 🟧
- **Commercial impact:** Absent a hard curfew, the dominant scheduling guardrail at LFQQ is the **winter overnight RFF downgrade (CAT 7→CAT 5, 2200–0500, Nov–Mar)** — confirm RFF adequacy for a late/early winter movement rather than planning around a curfew that does not exist here.

---

## 5. Handling agents & turnaround

- **Handling agent(s):** **AVIAPARTNER** for passenger/commercial flights (0400–2100, PPR outside these hours); **SOGAREL AG** for general aviation; **SOGAREL FRET** for freight. Handling is **mandatory on Parking C and D for all flights** for security reasons.
- **Typical turnaround time for our type:** Not independently confirmed; VAMSYS mirror gives **taxi-in 6 min / taxi-out 8 min** for planning purposes `[VAMSYS mirror 2026-07-26]` — build the gate turn around these plus standard narrowbody/regional service times.
- **Services:** Standard passenger handling (push-back where required, GPU, cabin/catering services) expected at a Parking B gangway stand for a scheduled turn.
- **Turnaround risk items:** PPR windows outside AVIAPARTNER's 0400–2100 core hours, de-icing-unit throughput in winter (only two units confirmed), and ground-routing awareness near the P5 hot spot can each add unplanned turn time.

---

## 6. Load factors & seasonality

- **Demand peaks:** Not independently sourced for the K Global operation specifically; as a Category-R regional/spoke field, demand is set by the network schedule rather than third-party data. 🟧
- **Day-of-week / seasonal pattern:** Not sourced — treat as standard European regional business/leisure mix pending network-schedule confirmation. 🟧
- **Cargo / belly capacity:** LFQQ carries a genuine real-world freight role (dedicated Parking D freight apron, SOGAREL FRET handling, cargo-specific loading/palletising equipment) — confirm K Global belly-cargo uplift plans against payload at planning if used for cargo legs. 🟧
- **Connection banks:** As a spoke destination, LFQQ's turn timing is set by the network schedule rather than by local connection-bank structure.

---

## 7. Fuel

- **Supplier / into-plane:** **AVITAIR** (Jet A-1, into-plane by truck); 100LL via an automatic station on Parking E.
- **Uplift availability & hours:** Jet A-1 PPR window 0500–2100 with a surcharge outside these hours; 100LL station H24. Payment by credit card (TOTAL, VISA, SIGNATURE, UVAIR) or cash.
- **Price / tankering angle:** Regional/spoke field — assess tankering economics against the assigned base/hub per leg; no LFQQ-specific price signal sourced. See [`OM E — Fuel Policy`](../../../../../flight-ops/fuel-policy.md).
- **Quality / freeze notes:** Standard Jet A-1; no cold-soak/fuel-freeze consideration specific to this short/regional-leg profile.

---

## 8. Customs / immigration & PoE for pax

- **Port of Entry:** Yes.
- **CBP-equivalent / immigration hours:** 0500–2200; on-request (O/R) coverage if requested before 1700 🟧 — exact operational meaning of the O/R condition not fully disambiguated.
- **Pre-clearance / visa-transit notes:** Standard Schengen/non-Schengen entry per nationality; no pre-clearance programme identified.
- **Late/overnight/diversion caveat:** No desk coverage confirmed outside 0500–2200 — a late/overnight arrival should confirm customs availability rather than assume it. 🟧

---

## 9. De-icing provisioning & season

- **Availability:** **Available** — two remote de-icing units (FMC-SMD1200-type) confirmed in the primary AIP extract; no dedicated named pad location found. 🟧
- **Season:** Typical northern-France de-icing season (autumn–winter); exact months not separately confirmed for LFQQ. 🟧
- **Provisioning:** Fluid Type I (50/50 hot/warm) and Type II (100% and 75/25%) both available.
- **Commercial impact:** With only two confirmed units, winter throughput is a plausible seasonal delay-risk driver at peak — build modest winter schedule buffer. See [`OM E — Cold Weather Operations`](../../../../../flight-ops/cold-weather-operations.md).

---

## 10. Typical delays / reliability

- **Signature delay driver:** **Northern-France low-cloud/fog/drizzle**, consistent with the field's published LVP trigger (RVR ≤550 m / ceiling ≤200 ft) — the plausible principal weather-driven delay risk. 🟧
- **Ground-delay / flow-program exposure:** Not independently sourced; treat as low relative to a major hub given the field's regional traffic density and lack of an identified slot-coordination regime. 🟧
- **On-time reliability picture:** Winter low-visibility events and the overnight RFF downgrade window (2200–0500, Nov–Mar) carry the highest schedule-risk exposure at this field. 🟧

---

## 11. Curfew & noise-charge commercial impact

- **Noise-charge regime:** Not confirmed in reachable public sources. 🟧
- **Curfew infringement consequence:** No hard curfew identified — the operative overnight constraint is instead the **RFF winter downgrade (CAT 7→CAT 5, 2200–0500, Nov–Mar)** and the engine-run-up restriction outside 0600–2100 (commercial-departure exception before 0800, Tower permission required).
- **Scheduling guardrails:** Build winter-night buffer around the RFF downgrade window rather than a curfew; avoid scheduling a training/test-flight-style movement inside the engine-run-up restricted hours without prior Tower coordination.

---

## Open items (🟧 — confirm against AIP / operator data)

- Widebody (B77W-class) stand capability at B08/B11 — sourced to a network reference, not independently AIP-confirmed.
- Slot-coordination level and any CTOT/ATFM exposure specific to LFQQ.
- Ground handling minimum turnaround time for our operation (VAMSYS planning figures used in the interim).
- Day-of-week/seasonal demand pattern and belly-cargo capacity specific to the K Global operation.
- De-icing season months and exact pad/location detail.
- Noise-charge regime, if any.
- Exact operational meaning of the customs "O/R before 1700" condition.

> **Live data — pull at planning:** fuel price, slot/CTOT file (if any), current ATFM/ground-delay program, demand/load, stand allocation, current RFF-level NOTAM. Not stored in this durable file.

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim material may inform content but is not listed here.*

- **SIA France eAIP, AD 2 LFQQ** (extract, amendment dates 2012–2015) — https://beardsell.com/flying/Italy_2015/Fairoaks-LeTouquet/LFQQ-lille-text.pdf (retrieved 2026-07-26). *Handling/hours/fuel/de-icing/RFF data.*
- OurAirports — https://ourairports.com/airports/LFQQ/ (retrieved 2026-07-26).
- IVAO France Documentation — "LFQQ - Lille Lesquin" (AIRAC 2603) — https://wiki.ivao.fr/books/manex-aeroports-civils/page/lfqq-lille-lesquin (retrieved 2026-07-26). *Stand-capability and LVP cross-check — network sim document, not regulatory.*

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-26 | Built from SIA France eAIP; K Global fields from live VAMSYS; 4-page pack. |
