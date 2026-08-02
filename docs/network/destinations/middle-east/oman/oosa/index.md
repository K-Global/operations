# OOSA — Salalah · Airport Briefing

**OOSA / SLL** · Salalah, Dhofar Governorate, Oman · Middle East
**Version** v0.1 · **Updated** 2026-07-26 · **Status** Draft

> **Read-me:** Planning aid for the sim, not a chart. Static data is drawn from the Oman PACA/CAA eAIP where reachable, cross-checked against public aeronautical aggregators; approaches/SIDs/STARs are listed **by name only or flagged not-yet-confirmed** — fly the charted current-AIRAC version. Live weather/NOTAMs are pulled at planning (§14/§15). Open 🟧 items are listed in §18. Flag legend 🟥 restriction/hazard · 🟧 caution/unverified · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| ARP (lat/long) | N17°02.32′ / E054°05.48′ (17.0387, 54.0913) `[SkyVector; OurAirports cross-check]` |
| Field elevation | **73 ft / 22 m AMSL** (OurAirports; Universal Weather cross-check; matches SkyVector's RWY 07 threshold figure) 🟧 — a separate tier-4 summary figure (SkyVector airport-level field, and the pre-existing stub's Navigraph-derived figure) reports **90 ft**; primary AIP AD 2.1 elevation not independently re-confirmed this build — treat 73 ft as the better-corroborated figure pending AIP confirmation |
| Mag variation | 🟧 **Not confirmed** — sources disagree: Universal Weather reports 000°E, AC-U-KWIK reports 01E. Use the current-AIRAC chart value |
| Time zone | **UTC+4** (Asia/Muscat) — no DST observed |
| Runway(s) | **07/25**, single runway, **3,997 × 60 m (13,114 × 197 ft)**, hard surface (asphalt) `[SkyVector; OurAirports]` — Oman CAA's own airport page states "4 km × 75 m," consistent within normal rounding of an official operator statement. An older aggregator figure (10,965 × 148 ft) also circulates — almost certainly a stale pre-2015 (pre-rebuild) domestic-runway figure, superseded by the 2015 new-airport opening; **not used here** but noted for the record |
| Preferential runway | Not published / verify 🟧 — no primary preferential-runway rule found; expect wind-driven selection between 07/25, with the khareef-season SW monsoon flow a likely seasonal driver (see §3.4/§14) |
| Longest LDA | Not published / verify 🟧 — full-length runway assumed, no displaced threshold confirmed |
| Approaches | **ILS and/or VOR/DME reported** (aggregator summary referencing the Oman eAIP AD 2.OOSA page) — 🟧 the live eAIP page could not be independently re-rendered this build to confirm verbatim (JS-delivered frameset); a search-index excerpt further suggests **CAT II approval on both runway ends**, but this is **not independently confirmed** — verify on the current AIRAC chart before relying on it |
| RFF category | **CAT 9** (AC-U-KWIK) 🟧 — tier-4, not primary-AIP-confirmed |
| Control type | **Radar/procedural mix reported** — Salalah Approach/Radar (119.10/126.25) and Tower (118.20/129.57) published; Muscat FIR (OOMM) provides overlying/en-route control — see §3.2 and the [Middle East regional airspace brief](../../../../airspace/middle-east.md) 🟧 |
| Elevation class | Sea-level (73 ft) — **not** hot-and-high; performance driver is seasonal weather (khareef monsoon), not density altitude |
| Special-airport status | **Joint civil/military field** — co-located with RAFO Salalah (Royal Air Force of Oman air base); no operator-published "restricted-crew special airport" category found — see §5 🟧 |
| Customs / PoE | **Yes** — designated international Port of Entry since 2003; exact CIQ desk hours not confirmed. One business-aviation data source (Universal Weather) flags "customs available: No," which likely reflects ad-hoc/GA off-hours limitations rather than the scheduled commercial operation — flag discrepancy 🟧 |
| K Global category | **Not set** `[VAMSYS mirror 2026-07-26]` 🟧 — VAMSYS record exists but the category field is empty/unconfigured |
| K Global base | **No** `[VAMSYS mirror 2026-07-26]` |
| Company preferred alternates | **OMAD, OMAA, OOMS** `[VAMSYS mirror 2026-07-26]` |
| Taxi-in / taxi-out (VAMSYS) | **n/a** `[VAMSYS mirror 2026-07-26]` 🟧 — not set in VAMSYS |

---

## 2. Validation summary

| Domain | Flag | Note |
|---|---|---|
| Terrain / CFIT | 🟧 | Airport sits on the flat Salalah coastal plain; the Dhofar escarpment (Jebel Qara massif, rising to roughly 1,200 m) runs along the coast inland/north of the field — regional terrain, not a confirmed close-in obstacle, but exact bearing/distance from the ARP to the first high ground was not independently confirmed this build. Verify the MSA ring on the current chart. |
| Runway length vs fleet perf | 🟩 | 3,997 m is ample for any K Global type; single-runway field has no redundancy if closed. |
| Approach availability / minima | 🟧 | ILS/VOR-DME reported; CAT II claim not independently confirmed. Verify current AIRAC. |
| Airspace / traffic / control | 🟩 | Secondary/regional Omani gateway, not a dense hub; Muscat FIR (OOMM) provides area control and also runs a large Arabian Sea oceanic sector on this coast — see §3.2. |
| Weather / seasonal hazard | 🟥 | **Khareef monsoon (Jun–Sep)** is the field's defining hazard — persistent low stratus, drizzle and reduced visibility. See §3.4/§14. |
| Curfew / slots / hours | 🟧 | Slot coordination reported ("Slots Required: Yes"); published AD/ATS hours are internally inconsistent across sources (H24 tower vs. a restricted Su–Th 0330–1130Z + O/T-on-request schedule) — reconcile against current AIP. |
| RFF category vs our types | 🟧 | CAT 9 reported (tier-4); confirm against our largest scheduled type's requirement per [OM B — Fleet Capability Matrix](../../../../../fleet/capability-matrix.md). |
| Fuel availability | 🟧 | Jet A-1 ("JET ONLY") reported available; supplier/hours not confirmed. |
| Customs / handling / security | 🟧 | International PoE confirmed; handling reported mandatory; several FBO/ground-handling agents identified (§13/Dispatch §5) but not confirmed as K Global's contracted handler. |

---

## 3. Threat & Error Management (TEM)

### 3.1 CFIT / Terrain 🟧
OOSA sits at 73 ft AMSL on the flat **Salalah coastal plain**. The **Dhofar Mountains** (Jebel Qara massif) form a limestone escarpment running roughly parallel to the coast, rising to approximately 1,200 m in places, generally to the north/inland of the city and airport. This is regional terrain rather than a confirmed close-in obstacle for the runway/approach environment itself — the airport's own siting on the plain is a mitigating factor — but the exact bearing and distance from the ARP to the first significant high ground were **not independently confirmed this build**. Verify the MSA sectors and any terrain-driven missed-approach constraint on the current chart before relying on this as a non-factor.

### 3.2 Airborne conflict / traffic 🟩
Salalah is Oman's **secondary international gateway after Muscat**, with a materially lower traffic density than the Gulf's major hubs — though passenger volumes rise sharply during the khareef tourism season (Jun–Sep), when regional carriers add seasonal capacity on the Muscat–Salalah and Gulf–Salalah routes. **Muscat FIR (OOMM)** provides area/en-route control; the same FIR also runs a large **Arabian Sea oceanic sector** on this coast, making Salalah a natural coastal gateway/exit point for that oceanic flank — see the [Middle East regional airspace brief](../../../../airspace/middle-east.md) §3/§8, which lists OOSA as a southern/Arabian-Sea alternate. As a co-located civil/military field (RAFO Salalah), expect occasional military traffic in the circuit and coordination requirements — not independently detailed this build. 🟧

### 3.3 Runway excursion 🟧
Single runway 07/25, hard (asphalt) surface, 3,997 × 60 m. No displaced threshold or overrun detail was independently confirmed this build — treat declared distances as "Not published / verify" pending AIP access (§7). The standing seasonal excursion risk is **khareef-season wet/contaminated runway** from persistent drizzle (§3.4) rather than any structural pavement issue; PCN figures circulating in secondary sources were not independently corroborated and are not repeated here.

### 3.4 Weather threat 🟥
The **khareef (SW Indian Ocean monsoon) season, roughly June–September,** is Salalah's defining operational hazard and the reason this field is treated as a first-class weather-risk item in the regional airspace brief. The monsoon flow reaching the Dhofar coast brings **persistent low stratus, mist and gentle drizzle** (locally "ghayth") rather than convective storms — annual rainfall is low (roughly 95 mm), concentrated as light khareef drizzle in Jul–Aug. Reported visibility degradation is most severe in **July**, when coastal zones can see **near-continuous fog with visibility often below 500 m**, particularly in the morning until roughly 11:00 local; conditions typically improve through **August**, with inland visibility recovering to **roughly 2–4 km** as the mist retreats from the coast. 🟧 These figures are drawn from general khareef-climatology/tourism sources, not an aviation MET climatology, and are **not confirmed as airport-specific ceiling/RVR statistics** — treat as directional guidance for planning risk, not a substitute for the live TAF/METAR/SIGMET picture pulled at planning (§14). Outside the khareef window, the climate reverts to the arid Arabian Peninsula norm (heat, low humidity, negligible precipitation). See [`OM E — Adverse Weather and Windshear`](../../../../../flight-ops/adverse-weather-and-windshear.md) and [`OM E — Low Visibility Operations`](../../../../../flight-ops/low-visibility-operations.md).

### 3.5 Operational considerations 🟧
Plan around: (1) the **khareef seasonal surge** — Omani carriers materially expand Salalah capacity for the Jun–Sep tourism season (per CAA/operator public statements), which can stress ramp, stand and handling capacity at a field sized for a lower baseline traffic level; (2) the **joint civil/military status** (RAFO Salalah co-located) — expect occasional coordination/priority traffic; (3) **slot coordination reported required** — confirm current status and lead time before planning; and (4) an **inconsistent published-hours picture** (§6) that should be reconciled against the current AIP/NOTAM before treating the field as unrestricted H24.

---

## 4. Cautions & Warnings

- **Khareef monsoon (Jun–Sep)** can drop coastal visibility below 500 m for extended periods, especially July mornings — brief an LVP/diversion contingency for any Jun–Sep rotation into or out of OOSA. 🟥
- **Single runway (07/25)** — no redundancy if the runway is closed; a closure diverts all traffic.
- **Joint civil/military field** (RAFO Salalah co-located) — expect occasional military traffic and coordination requirements.
- **Published operating-hours data conflicts** across sources (H24 tower vs. a restricted weekly schedule) — verify current AD/ATS hours before planning a non-standard-hours arrival/departure.
- **Mag variation and RFF category are tier-4-sourced only** — not confirmed from a primary AIP table this build; verify current chart/AIP.
- **Approach/CAT II claims are not independently confirmed** — treat as provisional pending direct AIP verification (§18).

---

## 5. Aerodrome category, restrictions & crew qualification

- **Special-airport / category:** Not operator-categorised as a restricted-crew special airport in reachable sources; the standing crew-briefing item is the **khareef-season low-visibility environment** (§3.4). 🟧
- **Crew-qualification gate:** No specific crew-qualification restriction found; LVP familiarity/currency is recommended for any khareef-season (Jun–Sep) rotation. 🟧
- **Operating restrictions / bans:** None confirmed. Note for the record: the Oman AIP amendment history shows a **SUP 07/2024 "OOSA — Salalah Airport — Suspension of SID & STAR Procedure,"** since **cancelled** per the AIP AMDT 02/25 cover page — a resolved historical item, not a current restriction, but a reminder that SID/STAR availability at this field has changed by NOTAM/supplement before and should be pulled fresh at planning. 🟧
- **Overflight / entry / permits:** Standard Oman international arrival; state overflight/landing permit requirements for non-scheduled operators apply generally in Oman — not independently re-confirmed for OOSA specifically this build. 🟧
- **Operations notes:** Co-located military operator — **RAFO Salalah** (Royal Air Force of Oman). Civil airport operated under **Oman Airports** / Public Authority for Civil Aviation (PACA) oversight. Specific OPS contact not confirmed.

---

## 6. General / hours / services

| Item | Value | Flag |
|---|---|---|
| ATS hours | Reported inconsistently — one tier-4 source states Tower H24 while the same source's "Airport Hours" field shows a restricted **Su–Th 0330–1130Z, other times on request**; other public sources describe the airport generally as operating around the clock. **Reconcile against current AIP/NOTAM.** | 🟧 |
| AD operating hours | See above — not independently reconciled this build | 🟧 |
| Night / curfew restrictions | Not confirmed either way | 🟧 |
| RFF category | CAT 9 (tier-4) | 🟧 |
| Fuel | Jet A-1 reported ("JET ONLY"); hours/supplier not confirmed | 🟧 |
| PCN | Not published / verify — figures seen in secondary sources were not independently corroborated and are not repeated here | 🟧 |
| Customs | International PoE confirmed (Yes); exact desk hours not confirmed; one business-aviation source flags customs unavailable for ad-hoc/GA ops | 🟧 |
| Handling / FBO | Handling reported **mandatory**; flight-support/ground-handling contacts identified include Air Services Tourism LLC (AST), Moonjet Flight Support, Just Aviation and Sahab Aviation Services — none confirmed as K Global's contracted handler | 🟧 |

---

## 7. Runways & declared distances

| RWY | Dimensions | Surface / PCN | TORA | TODA | ASDA | LDA | Notes |
|---|---|---|---|---|---|---|---|
| 07 | 3,997 × 60 m (13,114 × 197 ft) | Asphalt / PCN not published — verify 🟧 | Not published / verify 🟧 | Not published / verify 🟧 | Not published / verify 🟧 | Not published / verify 🟧 | Threshold elevation reported 73 ft |
| 25 | 3,997 × 60 m (13,114 × 197 ft) | Asphalt / PCN not published — verify 🟧 | Not published / verify 🟧 | Not published / verify 🟧 | Not published / verify 🟧 | Not published / verify 🟧 | Threshold elevation reported 88 ft |

*Source: SkyVector and OurAirports (cross-checked); the Oman CAA's own Salalah Airport page independently states the runway as "4 km in length and 75 m in width," consistent within normal rounding of an official operator statement. Declared distances (TORA/TODA/ASDA/LDA) were not obtained from the primary AIP this build — the live eAIP AD 2.OOSA page could not be independently re-rendered (JS-delivered frameset) — treat all declared-distance cells as unconfirmed pending direct AIP access. No displaced threshold confirmed either way. All distances in metres/feet as marked.*

---

## 8. Communications

| Service | Callsign | Frequency | Hours | Notes |
|---|---|---|---|---|
| ATIS | Salalah ATIS | 125.10 | Not confirmed 🟧 | |
| Delivery | Not published / verify | — | — | 🟧 |
| Ground | Salalah Ground | 124.02 | Not confirmed 🟧 | |
| Tower | Salalah Tower | 118.20 / 129.57 | Reported H24 (one source) — reconcile with §6 🟧 | |
| Approach | Salalah Approach | 119.10 / 126.25 | Not confirmed 🟧 | |
| Radar | Salalah Radar | 119.10 | Not confirmed 🟧 | Same freq as Approach per source data |
| Centre / FIR | **Muscat FIR (OOMM)** | Per current AIRAC | H24 (typical FIR practice, not independently confirmed for OOMM specifically) | See the [Middle East regional airspace brief](../../../../airspace/middle-east.md) — no dedicated Muscat (OOMM) FIR brief exists yet in this library |
| Emergency | Guard | 121.50 | H24 (standard) | |

*Source: SkyVector (retrieved 2026-07-26). Frequencies not cross-checked against a primary AIP table this build — treat as provisional pending current-AIRAC confirmation.*

---

## 9. Navaids

| Aid | Ident | Freq | Hours | Notes |
|---|---|---|---|---|
| VOR | SLL | 112.80 | Not confirmed 🟧 | On/near field (SkyVector: 243°/1.6 NM from the airport reference point) |
| ILS/VOR-DME (approach) | Not confirmed | — | — | Aggregator summary reports an ILS and/or VOR/DME-based approach exists at OOSA; specific ident/frequency/runway assignment not independently confirmed this build 🟧 — verify current AIRAC chart |

*A distant NDB (GDA, Al-Ghaidah, 354 kHz) appears in SkyVector's "nearby navaids" list at ~122 NM/245° — too far to be operationally relevant to OOSA approach procedures and not included above.*

---

## 10. Arrival

- **Transition altitude / level:** Not published / verify. 🟧
- **Speed:** Standard 250 KIAS below FL100 (ICAO norm) assumed — confirm no local override on current chart.
- **Preferential runway logic:** Not published / verify — expect wind-driven 07/25 selection; the khareef-season SW monsoon flow may be a seasonal driver, not confirmed. 🟧
- **Approaches (names only — verify minima on current AIRAC charts):**

| RWY | Approach | IAF | FAF/FAP alt | Notes |
|---|---|---|---|---|
| 07 | ILS and/or VOR/DME (reported) | Not confirmed | Not confirmed | Verify on current AIRAC — approach type/ident not independently confirmed this build 🟧 |
| 25 | ILS and/or VOR/DME (reported) | Not confirmed | Not confirmed | Verify on current AIRAC — approach type/ident not independently confirmed this build 🟧 |

- **STARs (names only):** Not confirmed in reachable research — pull the current-AIRAC STAR list at planning. 🟧
- **LVP:** Trigger conditions not independently confirmed; the operative driver is the **khareef-season low-ceiling/low-visibility environment** (§3.4/§14) — treat any Jun–Sep arrival as an LVP-risk arrival pending confirmation of the actual trigger RVR/ceiling. 🟧
- **Missed approach watch-items:** Terrain is not a confirmed close-in driver given the coastal-plain siting (§3.1); the operative missed-approach concern in-season is re-flying an approach into persistent low stratus/drizzle conditions rather than a terrain constraint.

---

## 11. Departure

- **SIDs (names only — fly the charted version):** Not confirmed in reachable research — pull the current-AIRAC SID list at planning. Note the historical SID/STAR suspension supplement at this field (§5) as a reminder to re-verify procedure availability each visit. 🟧
- **RNP / climb-gradient requirements:** Not confirmed. See [`OM E — PBN and RNP Operations`](../../../../../flight-ops/pbn-and-rnp-operations.md). 🟧
- **Take-off minima:** Not published / verify. 🟧
- **Start-up / push-back:** Not confirmed. 🟧
- **ATC slot / CTOT & clearance:** Slot coordination reported **required** at this field (tier-4); no CTOT/ATFM program independently confirmed — plausibly related to khareef-season capacity management given the seasonal traffic surge (§3.5). Confirm current slot regime before scheduling. 🟧
- **De-icing:** **NIL** — arid/tropical climate, no de-icing requirement. 🟩

---

## 12. Noise & Environmental

- **Noise abatement (NAP):** Not confirmed. 🟧
- **Night noise / dB limits:** Not confirmed. 🟧
- **Engine run-up restrictions:** Not confirmed. 🟧
- **Reverse thrust / idle-reverse policy:** Not confirmed. 🟧

---

## 13. Ground operations

- **Stands for our types:** The 2015-rebuilt terminal (65,000 m², 8 passenger boarding bridges, 30 check-in counters, 10 gates) was designed for up to 2M pax/year (expandable to 6M) per the Oman CAA's own airport page — exact Code E/F stand count/layout not confirmed. 🟧
- **Push-back:** Not confirmed. 🟧
- **Standard taxi routes:** Not confirmed. The original airport masterplan included a new parallel taxiway alongside the runway per CAA/press reporting at the time of the 2011–2015 rebuild — current taxiway layout not independently re-confirmed. 🟧
- **Hot spots / tight taxiways:** Not confirmed. 🟧
- **Follow-me:** Not confirmed. 🟧

---

## 14. Weather & seasonal (durable)

- **Climate / prevailing wind:** Arid Arabian Peninsula climate for most of the year; transformed Jun–Sep by the **khareef (SW Indian Ocean monsoon)**, which uniquely reaches the Dhofar coast among Gulf-region fields.
- **Seasonal hazards:** **Khareef monsoon (Jun–Sep)** — persistent low stratus, mist and gentle drizzle, with visibility degradation most severe in **July** (coastal fog often <500 m, especially mornings) improving through **August** (inland visibility recovering to ~2–4 km) — see §3.4 for detail and sourcing caveats. Outside the khareef window, standard arid-climate conditions (heat, negligible precipitation) prevail; the Middle East regional brief also notes rare tropical-cyclone landfall risk on the Arabian Sea/Oman coast in the shoulder seasons — see the [Middle East regional airspace brief](../../../../airspace/middle-east.md) §11.
- **Local effects:** Coastal fog/drizzle is the standout local effect during khareef; the Dhofar escarpment inland may locally modify wind/visibility patterns but this was not independently detailed this build.

> **Live weather — pull at planning (T-2h):** METAR, TAF, TREND, SIGMET/AIRMET, TC advisories. Not stored here.

---

## 15. NOTAMs

> **Pull at planning (T-2h).** Perishable — not stored here. Check: runway closure (no redundancy — §7), navaid U/S, lighting, RFF downgrade, current SID/STAR availability (this field has a recent history of SID/STAR suspension supplements — §5), khareef-season LVP status, GPS/RAIM, and any military-coordination NOTAM given the co-located RAFO Salalah air base. Source: AIS / OFP NOTAM block.

---

## 16. Fuel & alternate planning notes

- **Typical role for us:** Regional destination and/or **southern/Arabian Sea alternate** — the [Middle East regional airspace brief](../../../../airspace/middle-east.md) §8 lists OOSA as a diversion option on the Muscat/Arabian Sea flank.
- **Nearest suitable alternates:** Company preferred alternates **OMAD** (Al Dhafra, UAE — plain text, cross-country, no dedicated brief in this library), **OMAA** (Zayed Intl, UAE — plain text, cross-country), **[OOMS](../ooms/index.md)** (Muscat Intl, Oman — same-country sibling) `[VAMSYS mirror 2026-07-26]` — confirm suitability, runway/RFF adequacy and current minima per leg.
- **Fuel-uplift notes:** Jet A-1 reported available; specific into-plane provider/hours not confirmed. 🟧 See [`OM E — Fuel Policy`](../../../../../flight-ops/fuel-policy.md).
- **Range/perf flags for our fleet:** 3,997 m runway is non-limiting for any K Global type. See [`OM B — Fleet Capability Matrix`](../../../../../fleet/capability-matrix.md) for type-by-type reference; the operative planning consideration at OOSA is the khareef-season weather picture, not aircraft performance.

---

## 17. Fleet-specific notes (optional)

- No type-specific runway-length, RFF or elevation consideration was found for any K Global type at OOSA — see [`OM B — Fleet Capability Matrix`](../../../../../fleet/capability-matrix.md). The single-runway/no-redundancy characteristic (§4) and khareef-season LVP exposure (§3.4) apply equally across the fleet.

---

## 18. Open items (🟧 — confirm against AIP / current AIRAC)

- **Primary AIP access** — the Oman CAA eAIP AD 2.OOSA page could not be independently re-rendered this build (JS-delivered frameset); all figures below need direct AIP confirmation.
- **Field elevation** — 73 ft (OurAirports/Universal Weather) vs. 90 ft (SkyVector summary field / stub Navigraph figure) — unresolved discrepancy.
- **Magnetic variation** — sources disagree (000°E vs. 01E).
- **Declared distances (TORA/TODA/ASDA/LDA)** and **PCN** — not obtained from a primary source this build.
- **ATS/AD operating hours and curfew status** — internally inconsistent tier-4 reporting (H24 tower vs. a restricted weekly schedule).
- **RFF category (CAT 9)** — tier-4 only, not primary-AIP-confirmed.
- **Approach type/ident and the reported CAT II claim** — not independently confirmed; sourced only to a search-index excerpt of the eAIP page.
- **SIDs/STARs (current names)** — not obtained; note the field's recent SID/STAR suspension-supplement history as a reminder to re-verify each visit.
- **Take-off minima, RNP/climb-gradient requirements, NAP/noise items, engine run-up and reverse-thrust policy, follow-me availability, push-back policy** — none confirmed in reachable sources.
- **Fuel supplier and uplift hours** — assumed available, not individually confirmed.
- **Customs/immigration desk hours** — assumed PoE-standard, one business-aviation source reports customs unavailable for ad-hoc ops; not reconciled.
- **Slot-coordination regime detail** (level, coordinator, lead time) — "required" reported, mechanics not confirmed.
- **Exact khareef ceiling/RVR trigger figures** — sourced to general tourism/climatology material, not an aviation MET climatology; treat as directional only.
- **No dedicated Muscat (OOMM) FIR brief exists yet** in this library — Muscat FIR is named in text per the regional brief; build a dedicated FIR brief as route density requires.

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim material (current-AIRAC charts) informs content but is not listed here.*

- **Oman Civil Aviation Authority (PACA/CAA) — eAIP, AD 2.OOSA (Aerodrome — Salalah)** — https://aim.caa.gov.om/eAIP_Oman/final/2026-02-19-Non-AIRAC/html/eAIP/AD-2.OOSA-en-GB.html (retrieved 2026-07-26). *Primary source of record; the live page could not be independently re-rendered this build (JS-delivered frameset) — content not directly verified.*
- Oman Civil Aviation Authority — eAIP AMDT 02/25 cover/amendment index — https://aim.caa.gov.om/eAIP_AMDT_02-25/final/2025-05-15/html/cover-en-GB.html (retrieved 2026-07-26). *Confirms SUP 07/2024 OOSA SID/STAR suspension supplement, since cancelled.*
- Oman Civil Aviation Authority — "Our Airports — Salalah Airport" — https://www.caa.gov.om/en/caa-2/our-airports/salalah-airport (retrieved 2026-07-26). *Official regulator/operator statement: opening date, runway ~4 km × 75 m, terminal facilities, ATC tower.*
- OurAirports — https://ourairports.com/airports/OOSA/ (retrieved 2026-07-26). *Coordinates, elevation, PoE tag.*
- SkyVector — https://skyvector.com/airport/OOSA/Salalah-Airport (retrieved 2026-07-26). *Coordinates, runway dimensions, ATC/navaid frequencies.*
- AC-U-KWIK — https://acukwik.com/Airport-Info/OOSA (retrieved 2026-07-26). *RFF category, slots/handling flags, reported hours, FBO/handler contacts.*
- Universal Weather and Aviation — https://www.universalweather.com/airports/OOSA-SLL-SALALAH-AIRPORT-SALALAH-ZUFAR-OMAN/ (retrieved 2026-07-26). *Elevation/mag-var cross-check, slots, customs, runway data.*
- Wikipedia — "Salalah Airport" — https://en.wikipedia.org/wiki/Salalah_Airport (retrieved 2026-07-26). *History, 2015 rebuild/opening, military co-location, traffic context.*
- World Airport Codes — https://www.world-airport-codes.com/oman/salalah-6472.html (retrieved 2026-07-26). *Cross-check only — runway/frequency figures partly stale.*
- Oman Civil Aviation Authority — khareef-season readiness statement — https://www.caa.gov.om/en/media/news/2026/caa-affirms-readiness-of-the-aviation-system-fo-khareef-dhofar-2026 (retrieved 2026-07-26). *Seasonal capacity/ops context.*
- Wego Travel Blog — "Salalah Weather in Summer" — https://blog.wego.com/salalah-weather-in-summer/ (retrieved 2026-07-26). *Khareef visibility/fog degradation detail — general climatology, not aviation MET source.*
- Companion OM C file: [Middle East regional airspace brief](../../../../airspace/middle-east.md) — Muscat FIR (OOMM) context, Arabian Sea oceanic sector, khareef seasonal hazard, OOSA listed as a diversion alternate.

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-26 | Built from national AIP; K Global fields from live VAMSYS; 4-page pack. |
