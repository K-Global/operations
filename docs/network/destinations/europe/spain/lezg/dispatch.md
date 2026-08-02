# LEZG — Zaragoza · Dispatch Page

**LEZG / ZAZ** · Garrapinillos, Zaragoza, Aragón, Spain · Europe
**Version** v0.1 · **Updated** 2026-07-26 · **Status** Draft — AIP España-derived

> **Read-me:** Dispatcher/commercial planning aid for the sim, not a chart. Companion to the [LEZG Briefing](index.md) (informational), [Departure](departure.md) and [Arrival](arrival.md) pages. Static airport/commercial characteristics only; live fuel prices, slot files, CTOTs and demand are pulled at planning (see §Live-data). Any procedure/approach is named only — fly/verify the charted current-AIRAC version. Open 🟧 items are in §Open items. Flag legend 🟥 restriction/hazard · 🟧 caution/unverified · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| Role in network | 🟧 **Not in VAMSYS** — field has not been created in the network `[VAMSYS mirror 2026-07-26]` |
| Terminals in use for us | Single civil passenger terminal, separate from the military side of the joint aerodrome |
| Widebody stands available | 🟩 Civil apron PRKG 1-16 (concrete, no Code-E-specific restriction found); Code E/F aircraft exit via TWY C-2.2 for jet-blast mitigation |
| Slot regime | Commercial pax flights needing extended hours: **12-hour-advance SLOT PPR**; GA/IFR-VFR: **3-hour-advance SLOT PPR**, apron-capacity dependent |
| Curfew | No hard curfew; ATS is **H24**, cargo ops **H24 all year**; passenger AD hours published with PPR extension 🟧 |
| Primary handling agent | SOUTH, GROUNDFORCE, ARAGONAIR, UNITED AVIATION (all serve commercial + general aviation) |
| Fuel supplier(s) | Exolum Aviation, SLCA (Jet A-1, 100LL) |
| Customs / PoE for pax | **Yes** — Customs CIV **H24** 🟩; Immigration hours tied to published airport hours |
| De-icing | **Available H24** at commercial-aviation stands (hot water/glycol, handling-agent-provided) |

---

## 2. Terminals & concourses

- **Terminal layout:** Single civil passenger terminal, physically and administratively separate from the military side (Base Aérea de Zaragoza) of this joint aerodrome.
- **Our operation uses:** 🟧 Not determined — field is not currently in the K Global network.
- **International arrivals / CBP-equivalent hall:** Standard Schengen/non-Schengen split; Customs is **H24** (a distinguishing feature versus the other two Spanish fields in this pack, which are HR AD only).
- **Notes:** Hotel accommodation exists but is military-only, subject to availability and 72-hour PPR — not relevant to civil passenger planning. Restaurant, bus/taxi/car-hire transport and tourist information are available on the civil side. 🟧

---

## 3. Stands / gates (by code letter & our fleet)

- **Widebody (Code E/F) stands:** 🟩 Civil apron PRKG 1-16 (concrete, PCN 62-107 by section) — no Code-E-specific stand restriction confirmed in reachable sources (contrast the severe restrictions at neighbouring LEBB). **Code E/F aircraft must exit the civil apron via TWY C-2.2** specifically to minimise jet-blast impact on other stands.
- **Stands NOT usable by our types:** PRKG 20-23 (general aviation, asphalt) and PRKG 30-34 (hangar apron, daylight-only, 13.56 m max wingspan) are not sized for Code E/F.
- **Remote / hardstand positions:** Not separately confirmed beyond the numbered civil PRKG inventory. 🟧
- **Contact vs remote for our arrivals:** Not determined — field not currently in VAMSYS/network schedule. 🟧
- **Ground-movement stand caveats:** Mandatory two-engines-running access/exit at minimum thrust applies at PRKG 12/13 and 6/6A/7/7A/8/8A/9/9A — see [Briefing §13](index.md).

---

## 4. Slots, curfew & CTOT regime

- **Slot coordination level:** Not formally IATA-coordinated in reachable AIP text; however, **explicit PPR-slot requirements apply**: commercial passenger flights needing extended operating hours require a **12-hour-advance SLOT PPR** from LEZG CEOPS (with aircraft type, registration, operator, origin/destination and EOBT/ETA/ETD); GA/IFR-VFR traffic requires a **3-hour-advance SLOT PPR**, subject to apron capacity, with unauthorised traffic **not permitted**. 🟧
- **Curfew / night restriction:** No hard passenger-ops curfew found; **ATS is H24** and cargo operations run **H24 all year** — this is a materially more permissive hours regime than the other two Spanish fields in this pack. 🟧
- **CTOT / flow control:** Not independently confirmed for this field's ATFM exposure beyond standard EUROCONTROL practice. 🟧
- **Commercial impact:** The SLOT PPR requirement (12h passenger / 3h GA) is the binding scheduling mechanic here — a same-day irregular-ops re-route into LEZG would need to clear this PPR gate; the H24 ATS/cargo regime otherwise gives more schedule flexibility than the other two fields in this pack.

---

## 5. Handling agents & turnaround

- **Handling agent(s):** **SOUTH**, **GROUNDFORCE**, **ARAGONAIR** and **UNITED AVIATION** all serve commercial and general aviation. Handling is mandatory for all civilian operations, including non-commercial.
- **Typical turnaround time for our type:** 🟧 Not confirmed — field is not currently in VAMSYS; no taxi-in/taxi-out reference available.
- **Services:** Push-back, GPU (AC up to 120 kVA / DC up to 2,500 A on the military side; civil GPU/PCA not separately quantified), de-icing (H24, hot water/glycol) and standard ramp services expected via the named agents.
- **Turnaround risk items:** The joint civil/military traffic mix (Briefing §3.2) and the Cierzo-wind crosswind/gust exposure (Briefing §3.4) are the standing turnaround-risk items; the SLOT PPR gate (§4) is a planning-stage risk rather than a ramp-turnaround one.

---

## 6. Load factors & seasonality

- **Demand peaks:** Zaragoza is primarily known as a **cargo operations hub** (Air China Cargo, Atlas Air, Avianca Cargo, Cargolux, China Cargo Airlines, Emirates SkyCargo, Ethiopian Cargo, Qatar Airways Cargo, Saudia Cargo and others), with a smaller scheduled/charter passenger operation (Ryanair, Wizz Air, Vueling, Iberia seasonal, Volotea seasonal, and charter carriers to leisure/diaspora destinations).
- **Day-of-week / seasonal pattern:** Not independently modelled for a K Global operation. 🟧
- **Cargo / belly capacity:** 🟥 **This is a major European air-cargo gateway** — civil cargo-handling facilities are stated as having no limitations, and the field's runway/apron infrastructure is heavily used by dedicated freighter operators. Any future K Global cargo-network consideration at this field should weigh this existing freighter density.
- **Connection banks:** Not applicable — field not currently in the K Global schedule.

---

## 7. Fuel

- **Supplier / into-plane:** **Exolum Aviation** and **SLCA** — confirmed Jet A-1 and 100LL suppliers; military fuel (F-34) is separately provisioned and not relevant to civil planning.
- **Uplift availability & hours:** Civil refuelling capacity is stated as having **no limitations**; hours tied to HR AD / O/R (on request). 🟧
- **Price / tankering angle:** Not independently sourced this pass. 🟧 See [`OM E — Fuel Policy`](../../../../../flight-ops/fuel-policy.md).
- **Quality / freeze notes:** Standard Jet A-1; the field's moderate elevation (862 ft) and warm reference temperature (32°C) are not a cold-soak/fuel-freeze consideration.

---

## 8. Customs / immigration & PoE for pax

- **Port of Entry:** Yes — civil terminal, standard Schengen/non-Schengen processing.
- **CBP-equivalent / immigration hours:** Customs is **CIV H24** 🟩 — the most permissive customs regime of the three Spanish fields in this pack; Immigration hours are tied to the published civil AD hours (V: 0445-2100, I: 0545-2200) rather than H24. 🟧
- **Pre-clearance / visa-transit notes:** Standard Schengen/non-Schengen entry per nationality; no pre-clearance programme.
- **Late/overnight/diversion caveat:** With **Customs H24** and cargo ops **H24 all year**, this field is materially more permissive for an off-hours/diversion scenario than the other two Spanish fields in this pack — though a passenger flight would still need the 12-hour SLOT PPR mechanic (§4) if outside standard published passenger hours.

---

## 9. De-icing provisioning & season

- **Availability:** **Available H24** at commercial-aviation stands, using hot water and glycol units, provided by handling agents. 🟩 (Military de-icing is separately "NO" — not applicable to civil planning.)
- **Season:** Snow-plan period 1 December to 31 March; equipment includes a snowplough truck with melter spreader/blade and a sweeper vehicle; treatment materials are potassium acetate, sodium formate and urea.
- **Provisioning:** Handling-agent-operated at the commercial stand.
- **Commercial impact:** H24 de-icing availability is a genuine commercial advantage versus the other two Spanish fields in this pack (LEBB restricts de-icing-apron use during LVP; LEXJ's de-icing service status is ambiguous in the AIP). See [`OM E — Cold Weather Operations`](../../../../../flight-ops/cold-weather-operations.md).

---

## 10. Typical delays / reliability

- **Signature delay driver:** 🟥 The **Cierzo wind** (Ebro-valley NW-channelled gale, historical gusts to 160 km/h) is the field's defining reliability threat — see [Briefing §3.4](index.md).
- **Ground-delay / flow-program exposure:** Not independently quantified for LEZG; the joint civil/military traffic mix (Briefing §3.2) may add sequencing complexity during periods of active military flying. 🟧
- **On-time reliability picture:** Not independently modelled — field not currently in the K Global schedule. 🟧

---

## 11. Curfew & noise-charge commercial impact

- **Noise-charge regime:** Not confirmed in reachable public sources. 🟧
- **Curfew infringement consequence:** No hard curfew found; the operative scheduling mechanic is the **SLOT PPR regime** (§4), not a noise-driven movement ban.
- **Scheduling guardrails:** If this field is brought into the K Global network, build the 12-hour (passenger) / 3-hour (GA) SLOT PPR lead time into any schedule-change or irregular-ops planning, and treat Cierzo-wind days as a real go/no-go consideration given the recorded gust magnitudes.

---

## Open items (🟧 — confirm against AIP / operator data)

- **Field is not in VAMSYS** — no role, category, base flag, alternates, taxi times, or handling-agent contract exist for this field; confirm whether/when network integration is planned.
- Civil turnaround-time reference (no taxi-in/taxi-out data available).
- Fuel price/tankering signal relative to network alternates.
- Cargo-network fit given the field's existing freighter density (Cargo unit consideration).
- Noise-charge regime.

> **Live data — pull at planning:** fuel price, slot/PPR file, current ATFM/ground-delay program, demand/load, stand allocation, current Cierzo-wind/gust advisory status. Not stored in this durable file.

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim material may inform content but is not listed here.*

- AIP España (ENAIRE eAIP) — AD 2-LEZG, items 3-9, 20 — https://aip.enaire.es/aip/contenido_AIP/AD/AD2/LEZG/LE_AD_2_LEZG_en.pdf (retrieved 2026-07-26). Operating hours, SLOT PPR requirements, handling agents, fuel suppliers, de-icing provisioning.
- Wikipedia — "Zaragoza Airport" — https://en.wikipedia.org/wiki/Zaragoza_Airport (retrieved 2026-07-26). Cargo-carrier network, passenger traffic context.

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-26 | Built from AIP España (ENAIRE); K Global fields from live VAMSYS; 4-page pack. |
