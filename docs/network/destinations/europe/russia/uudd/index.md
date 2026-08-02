# UUDD — Domodedovo · Airport Briefing

**UUDD / DME** · Domodedovo, Moscow Oblast, Russia · Europe
**Version** v0.1 · **Updated** 2026-07-26 · **Status** Draft

> **Read-me:** Planning aid for the sim, not a chart. Static data is drawn from standard public aeronautical data (OurAirports, SKYbrary, Wikipedia) — the Russian AIP (CAI) is not openly reachable this pass, so **every figure in this brief carries a primary-source-verification-pending flag 🟧** unless stated otherwise. Approaches/SIDs/STARs are listed **by name only or flagged not-yet-confirmed** — fly the charted current-AIRAC version. Live weather/NOTAMs are pulled at planning (§14/§15). Open 🟧 items are listed in §18. Flag legend 🟥 restriction/hazard · 🟧 caution/unverified · 🟩 normal.

> 🟥 **Network status — standby/reference only.** K Global's network is built around avoidance of Russian airspace (the network's long-haul route briefs route around Russia). UUDD is therefore **not currently part of the active K Global route network** — this pack exists as a standby/reference entry, not current operational guidance. Current overflight and airport-operating constraints affecting Russian airspace are not tracked in this durable file — check official state/NOTAM bulletins before any operational consideration. **UUDD is not in VAMSYS** — category, base flag, taxi times and alternates below are unpopulated pending reconciliation.

---

## 1. Snapshot

| Field | Value |
|---|---|
| ARP (lat/long) | 55°24′33″N / 37°54′27″E (55.40917, 37.90750) `[Navigraph navdata seed, VAMSYS mirror stub]`; OurAirports/SKYbrary cross-check 55.408798, 37.906300 / 55°24′31″N 37°54′12″E — minor discrepancy, not AIP-verified 🟧 |
| Field elevation | **588 ft / 179 m** `[OurAirports, SKYbrary — two independent public sources agree]`; VAMSYS mirror stub carries 592 ft — minor discrepancy, neither AIP-verified 🟧 |
| Mag variation | Not published / verify 🟧 — notably, this field's **runway designators are themselves mid-drift**: older public sources (e.g. SKYbrary) show a "14/32" series while more recently updated sources (OurAirports, 2024) show a "13/31" series for what appears to be the same physical runways — consistent with ongoing secular magnetic-variation change at this Moscow-region field, as separately documented at sister field UUEE (§Open items) |
| Time zone | UTC+3 (MSK) — no DST observed |
| Runway(s) | Public sources disagree on current designators/lengths (see mag-variation note above and §7) — most-recently-updated data (OurAirports 2024–2025): **13C/31C** 2,370 × 53 m concrete (active, shortened from a longer runway due to third-runway construction) · **13L/33R** 3,794 × 53 m concrete, **reported CLOSED** (NOTAM-cited repair closure, Oct 2025) · **13R/31L** 3,500 × 60 m concrete (main active runway). An older snapshot (SKYbrary) shows the same three physical runways as "14C/32C" 2,600×45, "14R/32L" 3,500×70, "14L/32R" 3,794×53 — 🟧 neither vintage independently AIP-confirmed |
| Preferential runway | Not published / verify 🟧 |
| Longest LDA | Not published — longest physical runway on record is the (reportedly closed) 3,794 m strip; the longest currently-open runway per the most recent source is 13R/31L at 3,500 m 🟧 |
| Approaches | ILS/DME reported on the main runway(s); Wikipedia states the field holds **ILS CAT IIIA status** — not independently confirmed against a primary AIP table this pass 🟧 |
| RFF category | Not published / verify — Wikipedia states the field was certified in 2009 for **ICAO Category F / New Large Aircraft (NLA) operations (e.g. A380)**, implying a high RFF category, but the RFF category itself is not separately confirmed 🟧 |
| Control type | Radar — Moscow Terminal/Approach; **Moscow FIR/UIR (UUWV)** en route. **No dedicated Moscow FIR brief exists in this library** — see [Europe airspace placeholder](../../../../airspace/europe.md) 🟧 (that file briefs a different DE–FR–ES–PT continental sector; linked only as the nearest available placeholder pending a dedicated Moscow FIR brief) |
| Elevation class | Near sea-level-equivalent (588 ft) — not hot-and-high; no density-altitude driver |
| Special-airport status | 🟥 **Field not currently served** (see network-status banner above). One runway (former "14L/32R", now reported as "13L/33R") is **reported closed** per a 2025 NOTAM citation in a public source — currency of this closure is not independently confirmed. Domodedovo is also reported (Wikipedia) as **Russia's first airport certified for simultaneous parallel-runway operations**. 🟧 |
| Customs / PoE | Yes — historically a major international gateway (Terminal 2 international segment). Current desk hours/status not confirmed 🟧 |
| K Global category | 🟧 **Not in VAMSYS — pending reconciliation** |
| K Global base | 🟧 **Not in VAMSYS — pending reconciliation** |
| Company preferred alternates | 🟧 **Not in VAMSYS — pending reconciliation** |
| Taxi-in / taxi-out (VAMSYS) | 🟧 **Not in VAMSYS — pending reconciliation** |

---

## 2. Validation summary

| Domain | Flag | Note |
|---|---|---|
| Network / overflight status | 🟥 | Not currently served — network avoids Russian airspace; standby/reference entry only. Re-verify current overflight/operating status before any use. |
| Terrain / CFIT | 🟩 | Flat Moscow-region terrain (Russian Plain); no close-in high ground. Non-issue for the field itself. |
| Runway length vs fleet perf | 🟧 | Public sources disagree on current runway designators/lengths and on which runway is open/closed (§7) — resolve against a primary source before relying on any figure. |
| Approach availability / minima | 🟧 | ILS/DME reported; a public source cites **CAT IIIA** status, not independently confirmed. SIDs/STARs/exact minima not obtained. |
| Airspace / traffic / control | 🟧 | Radar-controlled Moscow TMA; reported as Russia's first simultaneous-parallel-ops field — current runway-availability picture (one runway reportedly closed) not resolved. |
| Weather / seasonal hazard | 🟥 | Severe continental winter (heavy snow/ice, sustained sub-zero temperatures, extensive de-icing season) is the field's defining seasonal hazard — same regional climatology as UUEE. |
| Curfew / slots / hours | 🟧 | Not confirmed in reachable public sources; one tier-4 source describes the terminal as operating H24. |
| RFF category vs our types | 🟧 | Not directly confirmed; ICAO Category F (NLA/A380) certification since 2009 implies a high category. |
| Fuel availability | 🟧 | Assumed available as a major hub; not confirmed, and not re-verified for current-day accessibility given the field's non-active network status. |
| Customs / handling / security | 🟧 | Historically full international customs/handling infrastructure; current hours/agent not confirmed. A public source also notes a change of airport ownership in 2025–2026 (see §5) — operational continuity of handling arrangements not independently verified. |

---

## 3. Threat & Error Management (TEM)

### 3.1 CFIT / Terrain 🟩
UUDD sits at approximately 588 ft AMSL in the flat Moscow-region lowland — there is **no close-in high terrain** relevant to arrival, departure, or missed-approach paths. Verify the MSA ring on the current chart as routine practice, but CFIT is not the operative threat at this field. (Note: a 2010 accident involving a ferry flight into fog near this field is a documented historical CFIT-adjacent event at UUDD, driven by weather rather than terrain — see §3.4.)

### 3.2 Airborne conflict / traffic 🟧
UUDD's three-parallel-runway layout is in an active state of reconfiguration in public sources: Wikipedia describes an ongoing **third-runway construction program** that shortened one runway and is associated with the closure of another; the most recently updated public source (OurAirports, 2024–2025) reports one runway (**13L/33R**, formerly the field's longest at 3,794 m) as **closed** per a cited NOTAM. **This picture has not been independently confirmed against a primary AIP source** and should not be relied upon for any operational planning. Domodedovo is also reported as the first Russian airport certified for simultaneous parallel-runway departures — a status that would be directly affected by any runway closure. No dedicated Moscow FIR brief exists in this library to cross-reference control-type or special-use-airspace detail (see §1 airspace placeholder note).

### 3.3 Runway excursion 🟧
No declared-distance table or displaced-threshold data was obtained in this pass — flagged for verification against a primary source. The principal seasonal excursion driver at this field is **winter runway contamination** (snow, ice, slush) during the extended cold season (§14), consistent with regional climatology.

### 3.4 Weather threat 🟥
UUDD's defining hazard is the **severe Moscow-region continental winter** — heavy and sustained snowfall, extended sub-zero temperatures, and an intensive de-icing season, identical in character to sister field UUEE. Fog and temperature-inversion events are a recognised risk at low-lying Moscow-region fields in the transitional seasons; a documented 2010 accident at this field (a non-passenger ferry flight that came down in a forest short of the runway) occurred while attempting to land in fog, illustrating the reality of this risk at UUDD specifically. Summer carries the standard risk of continental **convective storms**.

### 3.5 Operational considerations 🟥
The dominant "operational consideration" here is the **standing network-avoidance status** itself (§1 banner) — UUDD is not in current active route service, and is **not in VAMSYS**. A further complicating factor for this field specifically is a **2025–2026 change of ownership**: the airport was nationalised by the Russian state in mid-2025 and subsequently sold at auction in January 2026 to a subsidiary of sister field UUEE (Sheremetyevo) — a corporate/administrative fact, noted here neutrally as it may affect handling continuity, contact points, and operational documentation if this field is ever reactivated. Should UUDD ever become operationally relevant again, a **full current-AIP rebuild is mandatory** before use, including resolution of the runway-designator/closure discrepancy in §3.2 and independent re-verification of current overflight/operating constraints affecting Russian airspace.

---

## 4. Cautions & Warnings

- 🟥 **Field is not currently served by the K Global network** — the network routes around Russian airspace. Treat this brief as standby/reference only, not current operational guidance.
- 🟥 **Current overflight and airport-operating constraints affecting Russian airspace and this field should be checked against official state/NOTAM bulletins** before any operational consideration — this file does not track that status.
- 🟥 **One runway is reported closed** (former "14L/32R" / current "13L/33R") per a cited 2025 NOTOM/NOTAM reference in a public source — **not independently confirmed as current**; do not assume any runway's availability without a live NOTAM check.
- Runway designators are **mid-drift between two numbering conventions** ("14/32" vs "13/31") across different-vintage public sources — treat any older chart/procedure referencing the "14/32" series with caution pending current-AIRAC confirmation.
- **Severe continental winter** (heavy snow/ice, extended sub-zero season) is a historically major seasonal factor at this hub, with a documented fog-related accident on record (§3.4).
- **2025–2026 change of airport ownership** (nationalisation, then sale to a Sheremetyevo subsidiary) — noted as a factual administrative development that may affect operational continuity if this field is reactivated; not independently followed up this pass.
- **Extended data non-currency:** with no current K Global operations here and the field absent from VAMSYS, this brief could only be corroborated against public tier-4 sources — treat every figure as provisional pending a live-AIP rebuild.

---

## 5. Aerodrome category, restrictions & crew qualification

- **Special-airport / category:** Not operator-categorised in reachable public sources; the standing crew-briefing items would be the network non-currency itself, the unresolved runway-closure/renumbering picture (§3.2), and the severe winter-ops environment. 🟥
- **Crew-qualification gate:** Not applicable while the field is outside active service; if reactivated, a cold-weather-ops and low-visibility-currency review would be required, alongside confirmation of the field's cited CAT IIIA capability. 🟧
- **Operating restrictions / bans:** Not published / verify. 🟧
- **Overflight / entry / permits:** 🟥 Overflight/entry into Russian airspace and any state-permit requirements are governed by prevailing state and international restrictions **not tracked in this durable file** — confirm current guidance through official channels before any operational use.
- **Operations notes:** Ownership history — the airport operated for decades as Russia's only privately owned major airport (East Line / Dmitry Kamenshchik) until a June 2025 nationalisation by the Russian Federal Property Agency, followed by a January 2026 sale to **Perspektiva**, a subsidiary of sister field **UUEE (Sheremetyevo)**. This is recorded here as a neutral factual/administrative note, not an operational assessment. 🟧

---

## 6. General / hours / services

| Item | Value | Flag |
|---|---|---|
| ATS hours | Not published / verify — one tier-4 source describes the terminal complex as operating H24 | 🟧 |
| AD operating hours | Not published / verify | 🟧 |
| Night / curfew restrictions | Not published / verify — no curfew found in reachable sources | 🟧 |
| RFF category | Not published / verify — ICAO Category F (NLA/A380) certified since 2009 per a public source | 🟧 |
| Fuel | Jet A-1 assumed as a major hub; supplier/hours not confirmed | 🟧 |
| PCN | Not published / verify | 🟧 |
| Customs | Historically full international customs (Terminal 2 international segment); current hours not confirmed | 🟧 |
| Handling / FBO | Not published / verify; note recent change of airport ownership (§5) | 🟧 |

---

## 7. Runways & declared distances

| RWY | Dimensions | Surface / PCN | TORA | TODA | ASDA | LDA | Notes |
|---|---|---|---|---|---|---|---|
| 13C/31C | 2,370 × 53 m | Concrete | Not published 🟧 | Not published 🟧 | Not published 🟧 | Not published 🟧 | Current designator per OurAirports (2024–2025); reported shortened from a longer runway due to third-runway construction |
| 13L/33R | 3,794 × 53 m | Concrete | — | — | — | — | **Reported CLOSED** (cited NOTAM, repair, Oct 2025) — verify current status before any planning use |
| 13R/31L | 3,500 × 60 m | Concrete | — | — | — | — | Reported as the main active runway |

*Source: OurAirports (tier-4, crowd-sourced), retrieved 2026-07-26 — designators/lengths as most recently updated. An older-vintage cross-check (SKYbrary) shows what appears to be the same three physical runways under a "14/32" designator series (14C/32C 2,600×45 m; 14R/32L 3,500×70 m; 14L/32R 3,794×53 m) — the two sources do not fully agree on width or exact designator, consistent with an in-progress runway renumbering/reconstruction program. 🟧 **Neither vintage is AIP-confirmed; treat the entire table as pending primary-source verification, and re-check current runway/NOTAM status before any use.** All distances in metres.*

---

## 8. Communications

| Service | Callsign | Frequency | Hours | Notes |
|---|---|---|---|---|
| ATIS | Domodedovo ATIS | 128.3 | Not confirmed 🟧 | |
| Delivery (CLD) | Domodedovo Delivery | 123.75 | Not confirmed 🟧 | |
| Ground | Domodedovo Ground | 119.0 (taxiing) | Not confirmed 🟧 | |
| Apron (RMP) | Domodedovo Apron | 130.6 | Not confirmed 🟧 | |
| Tower | Domodedovo Tower | 118.6 | Not confirmed 🟧 | |
| Radar (KRUG) | Domodedovo Radar / "KRUG" | 127.7 | Not confirmed 🟧 | |
| Approach | Domodedovo Approach | 120.6 | Not confirmed 🟧 | |
| Transit (MISC) | Domodedovo Transit | 129.15 | Not confirmed 🟧 | |
| VOLMET | PMSV | 127.875 | Not confirmed 🟧 | Shared regional VOLMET frequency (also listed for UUEE) |
| Centre / FIR | Moscow FIR/UIR (UUWV) — no dedicated brief in-library | Per current AIRAC | — | See [Europe airspace placeholder](../../../../airspace/europe.md) 🟧 |

*Source: OurAirports (tier-4, crowd-sourced), retrieved 2026-07-26 — 🟧 not cross-checked against a primary AIP; treat frequency assignments as indicative only.*

---

## 9. Navaids

| Aid | Ident | Freq | Hours | Notes |
|---|---|---|---|---|
| ILS/DME | Not published / verify 🟧 | Not published 🟧 | Not confirmed 🟧 | Public sources report ILS/DME on the main runway(s); a public source cites **CAT IIIA** capability — ident/frequency/exact sub-category not independently confirmed |
| VOR/DME | Not published / verify 🟧 | Not published 🟧 | Not confirmed 🟧 | |
| NDB | Not published / verify 🟧 | Not published 🟧 | Not confirmed 🟧 | |

*No primary-source navaid table was reachable this pass — the entire table is pending AIP verification.*

---

## 10. Arrival

- **Transition altitude / level:** Not published / verify. 🟧
- **Speed:** Not confirmed — assume standard ICAO 250 KIAS below FL100 pending chart verification. 🟧
- **Preferential runway logic:** Not published / verify. 🟧
- **Approaches (names only — verify minima on current AIRAC charts):**

| RWY | Approach | IAF | FAF/FAP alt | Notes |
|---|---|---|---|---|
| 13R/31L (reported main runway) | ILS/DME reported; CAT IIIA cited in a public source 🟧 | Not published 🟧 | Not published 🟧 | Name/minima not obtained; verify current designator |
| 13C/31C | Not confirmed 🟧 | Not published 🟧 | Not published 🟧 | |
| 13L/33R | **Reported closed** — not an available approach if closure is current 🟧 | — | — | Verify current NOTAM status |

- **STARs (names only):** Not confirmed in reachable research pass — pull the current-AIRAC STAR list at planning. 🟧
- **LVP:** Not published / verify — a public source cites CAT IIIA capability, consistent with the field's severe winter fog/inversion risk (§14), but exact trigger conditions not confirmed. 🟧
- **Missed approach watch-items:** Terrain is not the driver (flat lowland); the operative concern, if this field is ever used, would be re-sequencing in the dense Moscow TMA and the currently unresolved runway-availability picture (§3.2/§7).

---

## 11. Departure

- **SIDs (names only — fly the charted version):** Not confirmed in reachable research pass — pull the current-AIRAC SID list at planning. 🟧
- **RNP / climb-gradient requirements:** Not published / verify. 🟧
- **Take-off minima:** Not published / verify. 🟧
- **Start-up / push-back:** Not published / verify. 🟧
- **ATC slot / CTOT & clearance:** Not published / verify — slot regime not confirmed. 🟧
- **De-icing:** A public source describes an expanded, two-stage de-icing system (slush/ice removal followed by fluid application) historically implemented at this field — consistent with the severe continental winter (§14), but current-day pad locations/provisioning not confirmed. 🟧 See [`OM E — Cold Weather Operations`](../../../../../flight-ops/cold-weather-operations.md).

---

## 12. Noise & Environmental

- **Noise abatement (NAP):** Not published / verify. 🟧
- **Night noise / dB limits:** Not published / verify. 🟧
- **Engine run-up restrictions:** Not published / verify. 🟧
- **Reverse thrust / idle-reverse policy:** Not published / verify. 🟧

---

## 13. Ground operations

- **Stands for our types:** Not published / verify — the field was certified for **ICAO Category F (New Large Aircraft, e.g. A380) operations in March 2009** per a public source, implying widebody-capable stand infrastructure exists, but current stand/gate assignment not confirmed. 🟧
- **Push-back:** Not published / verify. 🟧
- **Standard taxi routes:** Not published / verify. 🟧
- **Hot spots / tight taxiways:** Not published / verify — the reported runway-closure/reconstruction program (§3.2/§7) is a plausible source of ground-movement complexity (construction-adjacent taxiways), but no field-specific hot-spot data was obtained. 🟧
- **Follow-me:** Not published / verify. 🟧

---

## 14. Weather & seasonal (durable)

- **Climate / prevailing wind:** Humid continental climate (Köppen **Dfb**) per SKYbrary — variable weather patterns, large seasonal temperature variance; warm/humid summers with frequent thunderstorms, cold winters with frequent snowfall and persistent snow cover. Same regional climatology as sister field UUEE.
- **Seasonal hazards:** **Severe winter (typically Nov–Mar/Apr)** — heavy snowfall, sustained sub-zero temperatures, and an extensive de-icing season are the field's defining seasonal characteristic. Fog/temperature-inversion events are a recognised risk at low-lying Moscow-region fields in the shoulder seasons — illustrated by a documented 2010 fog-related accident at this field (a non-passenger ferry flight, no fatalities) (§3.4). Summer carries standard continental **convective storm** risk.
- **Local effects:** No notable terrain/sea-breeze effects at this inland, flat-terrain field; winter contamination and fog are the standout local effects.

> **Live weather — pull at planning (T-2h):** METAR, TAF, TREND, SIGMET/AIRMET. Not stored here.

---

## 15. NOTAMs

> **Pull at planning (T-2h).** Perishable — not stored here. Given the field's network non-currency and the **unresolved runway-closure/renumbering picture** (§7), a current NOTAM check is essential before any operational use — do not assume any runway's availability from this brief. Also check current **overflight/operating-restriction bulletins** for Russian airspace generally. Source: official AIS / OFP NOTAM block.

---

## 16. Fuel & alternate planning notes

- **Typical role for us:** **Not currently served — standby/reference entry only** (§1 banner). Not a scheduled departure, destination, or alternate in current network planning. Not in VAMSYS.
- **Nearest suitable alternates:** Sister field [**UUEE** (Sheremetyevo)](../uuee/index.md) within the Moscow area — confirm current suitability, runway/RFF adequacy, minima, and airspace/overflight status before relying on it. No VAMSYS-sourced preferred-alternate list exists for UUDD (not in VAMSYS).
- **Fuel-uplift notes:** Assumed available as a major hub; not confirmed, and not re-verified for current-day accessibility. 🟧 See [`OM E — Fuel Policy`](../../../../../flight-ops/fuel-policy.md).
- **Range/perf flags for our fleet:** Runway lengths are plausibly non-limiting for K Global types on the main runway (3,500 m active per most recent source), but the unresolved runway-closure picture (§7) means this should be re-confirmed before use. See [`OM B — Fleet Capability Matrix`](../../../../../fleet/capability-matrix.md).

---

## 17. Fleet-specific notes (optional)

- A public source states the field was certified for ICAO Category F / New Large Aircraft (e.g. A380) operations in 2009, suggesting no widebody-specific stand/field-length constraint historically — **not independently confirmed**, and the current runway-availability picture (§7) is unresolved. See [`OM B — Fleet Capability Matrix`](../../../../../fleet/capability-matrix.md) for general type reference should the field ever return to active planning.

---

## 18. Open items (🟧 — confirm against AIP / current AIRAC)

- **Entire primary-source (AIP) verification** — the Russian AIP (CAI) was not reachable this pass; every figure in this brief is public-source (tier-4) only.
- **Runway designator/length/closure discrepancy** — public sources disagree between a "14/32" and a "13/31" numbering, and on which runway (if any) is currently closed; this is the single most important item to resolve before any operational use.
- **ARP / elevation discrepancy** — 588 ft/179 m (OurAirports/SKYbrary, agreeing) vs 592 ft (VAMSYS mirror stub); not reconciled.
- **Mag variation** — not obtained; note the apparent runway-designator drift discussed above.
- **Declared distances (TORA/TODA/ASDA/LDA), PCN** — not obtained; only physical runway dimensions sourced, and those disputed (see above).
- **ILS/navaid idents, frequencies, CAT sub-category** — a public source cites CAT IIIA; not independently confirmed against a primary table.
- **SIDs/STARs, take-off minima, TA/TL** — not obtained.
- **RFF category, ATS/AD hours, curfew, customs/handling hours** — not confirmed.
- **VAMSYS reconciliation** — UUDD is not currently present in VAMSYS; category, base flag, taxi times and preferred alternates are all unpopulated.
- **Operational continuity following the 2025–2026 ownership change** (nationalisation, then sale to a Sheremetyevo subsidiary) — not independently followed up this pass.
- **Current overflight/operating-restriction status for Russian airspace** — not tracked in this durable file; must be checked through official channels before any operational use.

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim material (current-AIRAC charts) informs content but is not listed here.*

- OurAirports — https://ourairports.com/airports/UUDD/ , /runways.html , /frequencies.html (retrieved 2026-07-26). *ARP/elevation/runway/frequency cross-check, including a comment citing NOTAM A3594/25 (RWY 13L/31R repair closure) — tier-4, crowd-sourced.*
- SKYbrary Aviation Safety — "Moscow/Domodedovo International Airport (UUDD)" — https://skybrary.aero/airports/uudd (retrieved 2026-07-26). *Older-vintage runway table (14/32 series), climatology (Köppen Dfb), elevation cross-check.*
- Wikipedia — "Moscow Domodedovo Airport" — https://en.wikipedia.org/wiki/Moscow_Domodedovo_Airport (retrieved 2026-07-26). *ICAO Category F/NLA certification (2009), ILS CAT IIIA citation, first-simultaneous-parallel-ops claim, third-runway construction/renumbering history, ownership history (nationalisation 2025, sale to Sheremetyevo subsidiary Perspektiva 2026), 2010 fog-related accident, terminal/de-icing history — general encyclopedic source, not independently AIP-verified.*

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-26 | Built from public aeronautical data (AIP verification pending); K Global fields from live VAMSYS; 4-page pack. |
