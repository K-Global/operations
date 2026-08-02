# FACT — Cape Town Intl · Airport Briefing

**FACT / CPT** · Cape Town, Western Cape, South Africa · Africa
**Version** v0.1 · **Updated** 2026-07-26 · **Status** Draft

> **Read-me:** Planning aid for the sim, not a chart. Static data is from AIP South Africa (ATNS/SACAA), AD 2 FACT; approaches/SIDs/STARs are listed **by name only** — fly the charted current-AIRAC version. Live weather/NOTAMs are pulled at planning (§14/§15). Open 🟧 items are listed in §18. Flag legend 🟥 restriction/hazard · 🟧 caution/unverified · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| ARP (lat/long) | 33°58′16.93″S / 018°36′15.45″E (-33.97137, 18.60429) `[AIP South Africa AD 2 FACT 2.2]` |
| Field elevation | **151 ft AMSL** — reference temperature 22.2°C; circuit altitude 1,500 ft ALT |
| Mag variation | 25° W (2018 epoch), annual change 0°7′ W 🟧 (epoch not re-verified against current AIRAC) |
| Time zone | UTC+2 (SAST, no DST) |
| Runway(s) | **01/19** 3,201 × 61 m (asphalt, main jet runway) · **16/34** 1,701 × 46 m (asphalt, also usable as a taxiway for all classes) |
| Preferential runway | Wind-driven 01↔19 on the main runway; the strong **SE "Cape Doctor"** (Sep–Mar, peaking Nov–Mar, commonly 20–35+ kt) blows across rather than along 01/19 (016°/196°M) — a **significant crosswind driver**, not a headwind benefit, on the primary runway |
| Longest LDA | 3,201 m (RWY 01/19, either end) |
| Approaches | **ILS on both 01 and 19** — RWY 01 LOC/GP published **operating within ICAO CAT IIIB tolerances**; RWY 19 ILS CAT II (GP angle 3.2°, steep — see §3.4/§10) |
| RFF category | **CAT 9** 🟩 |
| Control type | **Radar** — Cape Town Approach; see [Africa Airspace brief](../../../../airspace/africa.md) for the Cape Town FIR (**FACA**) |
| Elevation class | Sea-level (151 ft) — **not** hot-and-high; the field's defining performance/reliability driver is the **SE "Cape Doctor" crosswind**, not density altitude |
| Special-airport status | Not operator-categorised; standing briefing items are the **Cape Doctor crosswind** and the **Tygerberg Mountain mast within the RWY 19 PAPI coverage** (§4) |
| Customs / PoE | **Yes** — scheduled-operations hours; all international/regional flights must park on the main aprons to clear immigration 🟧 |
| K Global category | **L** `[VAMSYS mirror 2026-07-26]` |
| K Global base | **Yes** `[VAMSYS mirror 2026-07-26]` |
| Company preferred alternates | **FADN** (Durban — plain reference, see [FADN briefing](../fadn/index.md) for the closed/reconciliation caveat), **FAGE** (Gough Island — plain reference; 🟧 see §18, an implausible operational alternate given ~2,700 km remote South Atlantic location) `[VAMSYS mirror 2026-07-26]` |
| Taxi-in / taxi-out (VAMSYS) | **12 min / 15 min** `[VAMSYS mirror 2026-07-26]` |

---

## 2. Validation summary

| Domain | Flag | Note |
|---|---|---|
| Terrain / CFIT | 🟧 | Table Mountain/Cape Peninsula high ground lies to the west/southwest of the field; not close-in to the runway approach paths themselves, but relevant to the Tygerberg Mountain mast in the RWY 19 PAPI coverage (§4) and general area awareness. |
| Runway length vs fleet perf | 🟩 | 3,201 m (01/19) is ample for any K Global type at sea-level performance; non-limiting. |
| Approach availability / minima | 🟩 | ILS on both ends of the main runway, with RWY 01 published within CAT IIIB tolerances — strong low-vis capability. |
| Airspace / traffic / control | 🟩 | Radar-served (Cape Town Approach); moderate traffic density versus the network's larger hubs. |
| Weather / seasonal hazard | 🟥 | **The SE "Cape Doctor"** (Sep–Mar, peaking Nov–Mar) is the field's defining hazard — strong, gusty crosswind on RWY 01/19 with documented flight delays/diversions in strong events (§14). |
| Curfew / slots / hours | 🟧 | No hard curfew found; no jet intersection takeoffs/engine run-ups 2000–0400; customs hours tied to scheduled operations rather than a flat H24 figure — verify. |
| RFF category vs our types | 🟩 | CAT 9 meets or exceeds any K Global type requirement. |
| Fuel availability | 🟩 | Jet A-1 and AVGAS 100 available via multiple suppliers; primary supplier H24. |
| Customs / handling / security | 🟧 | International/regional traffic must use the main aprons for immigration (recent-law note in AIP); confirm current procedure. |

---

## 3. Threat & Error Management (TEM)

### 3.1 CFIT / Terrain 🟧
FACT sits at 151 ft on the Cape Flats, with the Cape Peninsula high ground (Table Mountain, Constantiaberg) to the south/southwest and the Tygerberg/Durbanville hills to the north — none close-in to the runway centreline, but the **Tygerberg Mountain mast (787 ft AMSL) sits within the RWY 19 PAPI coverage area**, outside the instrument obstacle-limitation surface but a specific VFR caution (§4). Verify the MSA ring on the current chart as routine practice.

### 3.2 Airborne conflict / traffic 🟩
FACT is radar-served by **Cape Town Approach** (119.7 MHz, H24) with **Cape Town Control (ACC)** and **Cape Town Information** (FIS, sectored West/East) covering the surrounding **FACA** FIR (see [Africa Airspace brief](../../../../airspace/africa.md)). Traffic density is moderate relative to the network's larger hubs; a Director position (124.35 MHz) activates during high-traffic periods.

### 3.3 Runway excursion 🟧
No displaced thresholds are published on RWY 01/19; declared distances are symmetric (3,201 m all four figures) except TODA, which is extended by a clearway on both ends (4,172 m off 01, 3,544 m off 19). The AIP publishes **intersection-reduced TORA/ASDA figures** for RWY 01 at TWY C (2,080 m), RWY 19 at TWY E (1,875 m) and the RWY 19/16-34 intersection (2,630 m) — confirm the full-length position is used for any performance-limiting operation. RWY 16/34 (1,701 m) is also usable as a taxiway for all aircraft classes — a dual-use runway/taxiway configuration to keep in mind during ground operations.

### 3.4 Weather threat 🟥
**The SE "Cape Doctor" is the field's defining weather hazard.** This persistent south-easterly wind blows from roughly September through March, peaking in strength and frequency November–March, commonly in the **20–35+ kt** range in exposed conditions. Because RWY 01/19 is oriented roughly NNE–SSW (016°/196° magnetic) while the Cape Doctor blows from the southeast, the wind strikes the main runway at a **significant crosswind angle rather than as a headwind benefit** — a well-documented operational constraint at this airport, with reported crosswind-driven delays and diversions in strong events. RWY 16/34 is oriented closer to the SE–NW axis but is the shorter (1,701 m), lower-category runway. High bird activity is also noted October–March, coinciding with the same season. See §14.

### 3.5 Operational considerations 🟧
Plan around: (1) the **Cape Doctor crosswind** on RWY 01/19 as the standing seasonal go/no-go consideration; (2) the **Tygerberg Mountain PAPI-coverage mast caution** on RWY 19 for VFR flights (§4); and (3) the **immigration/apron-parking requirement** for international/regional arrivals noted in the current AIP, which may affect stand planning. RFF, ILS and navaid infrastructure are first-tier; RWY 01's CAT IIIB-tolerance ILS is a strong low-visibility asset for this airport.

---

## 4. Cautions & Warnings

- 🟥 **The SE "Cape Doctor" wind (Sep–Mar, peak Nov–Mar) produces a significant crosswind on RWY 01/19** — check the current wind against type/crew crosswind limits before committing; strong events have historically caused delays/diversions at this field.
- 🟧 **Tygerberg Mountain mast sits within the RWY 19 PAPI coverage area** (11.8° azimuth from extended centreline, 2.41° vertical angle) — VFR flights must not establish a glideslope on the PAPI beyond 5 NM from the RWY 19 threshold.
- 🟧 **High bird activity at the field October–March** — exercise caution during takeoff and landing in this window.
- 🟧 **Avoid overflying Tygerberg Hospital**, 3 NM north of the field, when departing RWY 01 or RWY 34.
- 🟧 **RWY 16/34 is also used as a taxiway** for all aircraft classes — maintain awareness of mixed runway/taxiway use in that area.
- 🟧 **International/regional arrivals must park on the main aprons** to clear immigration per a relatively recent AIP-noted law change — confirm current stand-planning implications with handling.

---

## 5. Aerodrome category, restrictions & crew qualification

- **Special-airport / category:** Not operator-categorised as a restricted-crew "special airport"; the standing crew-briefing items are the **Cape Doctor crosswind** and the **RWY 19 PAPI/Tygerberg mast caution**. 🟧
- **Crew-qualification gate:** RWY 01 ILS is published as operating within ICAO CAT IIIB tolerances "without restriction" — confirm crew/aircraft CAT II/III currency before planning a low-vis approach on RWY 01. 🟧
- **Operating restrictions / bans:** No jet-aircraft intersection takeoffs and no engine run-ups 2000–0400; no RNP AR restriction found in reachable sources — verify current AIRAC. 🟧
- **Overflight / entry / permits:** Standard international arrival; no special state permit required beyond normal South African entry requirements. 🟩
- **Operations notes:** ANSP/ATC — **ATNS**; Airport operator — **Airports Company South Africa (ACSA)**.

---

## 6. General / hours / services

| Item | Value | Flag |
|---|---|---|
| ATS hours | H24 | 🟩 |
| AD operating hours | H24 | 🟩 |
| Night / curfew restrictions | No hard curfew found; no jet intersection takeoffs/engine run-ups 2000–0400 | 🟧 |
| RFF category | CAT 9 | 🟩 |
| Fuel | Jet A-1 + AVGAS 100 — Cape Town Intl Fuelling Services (H24), Air BP/Signature (limited hours + on-request after-hours), Shell/Execujet (H24 on request) | 🟩 |
| PCN | RWY 01/19 PCN 66/F/A/X/T; RWY 16/34 PCN 32/F/A/X/U; aprons PCN 53/R/A/X/U | 🟩 |
| Customs | Tied to scheduled-operations hours; international/regional traffic must use main aprons | 🟧 |
| Handling / FBO | Menzies Aviation, Swissport Cargo Services, Bidair Cargo | 🟩 |

---

## 7. Runways & declared distances

| RWY | Dimensions | Surface / PCN | TORA | TODA | ASDA | LDA | Notes |
|---|---|---|---|---|---|---|---|
| 01 | 3,201 × 61 m | Asphalt / PCN 66/F/A/X/T | 3,201 m | 4,172 m | 3,201 m | 3,201 m | Intersection TWY C: TORA/ASDA 2,080 m |
| 19 | 3,201 × 61 m | Asphalt / PCN 66/F/A/X/T | 3,201 m | 3,544 m | 3,201 m | 3,201 m | Intersection TWY E: TORA/ASDA 1,875 m |
| 16 | 1,701 × 46 m | Asphalt / PCN 32/F/A/X/U | 1,701 m | 1,701 m | 1,701 m | 1,701 m | Also usable as taxiway; RWY 19/16-34 intersection: TORA/ASDA 2,630 m |
| 34 | 1,701 × 46 m | Asphalt / PCN 32/F/A/X/U | 1,701 m | 1,701 m | 1,701 m | 1,701 m | Also usable as taxiway |

*Source: AIP South Africa (ATNS), AD 2 FACT 2.12/2.13. Threshold elevations: 01 144 ft, 19 147 ft, 16 143 ft, 34 151 ft. No displaced thresholds published. All distances in metres.*

---

## 8. Communications

| Service | Callsign | Frequency | Hours | Notes |
|---|---|---|---|---|
| ATIS | Cape Town ATIS | 127.000 | 0330–2200 | Remote broadcast at FASL on 127.600 |
| Delivery | Cape Town Clearance Delivery | 122.100 | Mon–Fri 0330–1700, Sat 0500–1500, Sun 0500–1700 | Additional aerodrome-control sector for high-demand periods |
| Ground | Cape Town Ground (SMC) | 121.9 | H24 | Operations-monitoring of traffic only |
| Tower | Cape Town Tower | 118.1 | H24 | Operations-monitoring of traffic only |
| Director | Cape Town Director | 124.35 | During high traffic volumes | |
| Approach | Cape Town Approach | 119.7 | H24 | Extended-range relay via Jonaskop |
| Centre / FIR | Cape Town Control (ACC) 125.1 (H24); Cape Town Information West 131.125 (0500–1700) / East 127.575, 124.7 FPL/SAR (0500–1700) | Mixed | See [Africa Airspace brief](../../../../airspace/africa.md) for the Cape Town FIR (FACA) | |

*Source: AIP South Africa, AD 2 FACT 2.18. Outside FIS hours pilots follow unmanned-airspace procedures.*

---

## 9. Navaids

| Aid | Ident | Freq | Hours | Notes |
|---|---|---|---|---|
| NDB | CB | 462.5 kHz | H24 | THR RWY 19/27, west of centreline; 30 W |
| ILS LOC 19 | KSI | 109.1 MHz | H24 | CAT II |
| ILS GP 19 | — | 331.4 MHz | H24 | GP angle **3.2°** (steep); Tygerberg mast within PAPI coverage — VFR caution (§4) |
| ILS LOC 01 | CTI | 110.3 MHz | H24 | **Published operating within ICAO CAT IIIB tolerances, available without restriction** |
| ILS GP 01 | — | 335 MHz | H24 | GP angle 3.0°; CAT IIIB tolerances |
| VOR | CTV | 115.7 MHz | H24 | On field |
| DME | CTV | 1191 MHz / CH104X | H24 | Co-located with VOR |
| DME | CTI / KSI | 110.3 / 109.1 MHz | H24 | Co-located with respective ILS GP |

*Source: AIP South Africa, AD 2 FACT 2.19.*

---

## 10. Arrival

- **Transition altitude / level:** TA 7,500 ft; TL by QNH — verify current chart. 🟧
- **Speed:** Standard 250 KIAS below FL100 — confirm no local override on current chart.
- **Preferential runway logic:** Wind-driven 01↔19; the SE Cape Doctor's crosswind angle to the runway (rather than a clean headwind) means runway selection is a genuine crosswind-limit decision in season, not a simple into-wind default.
- **Approaches (names only — verify minima on current AIRAC charts):**

| RWY | Approach | IAF | FAF/FAP alt | Notes |
|---|---|---|---|---|
| 01 | ILS (CTI) — within CAT IIIB tolerances | Per chart | Per chart | Strongest low-vis capability at the field |
| 19 | ILS Z / ILS Y (KSI, CAT II) | Per chart | Per chart | AIP: expect ILS Z clearance unless otherwise directed when RWY 19 in use |

- **STARs (names only):** ERDAS, GETEN, ROBBEN ISLAND, ASPIK, EVUKI (runway-specific variants for 01 and 19; verify current AIRAC).
- **LVP:** RWY 01's CAT IIIB-tolerance ILS is the field's standing low-vis asset; exact trigger RVR not confirmed this pass. 🟧
- **Missed approach watch-items:** Not terrain-driven at this field; the operative concern is re-sequencing plus the crosswind/gust environment during a Cape Doctor event.

---

## 11. Departure

- **SIDs (names only — fly the charted version):** TETAN, KODES, IMSOM, OKTED — runway-specific variants for 01 and 19; verify current AIRAC.
- **RNP / climb-gradient requirements:** No hot-and-high consideration at this sea-level field; standard gradient compliance per SID — verify current chart.
- **Take-off minima:** Published per AIP; exact figures not confirmed this pass. 🟧
- **Start-up / push-back:** Contact Cape Town Ground 121.9 MHz for start clearance; Apron Control (122.65 MHz) for parking-bay/hazard information prior to taxi.
- **ATC slot / CTOT & clearance:** No IATA slot-coordination level found in reachable sources — treat as uncoordinated pending confirmation. 🟧
- **De-icing:** **NIL** — no facilities published; not required at this sea-level, temperate-climate field.

---

## 12. Noise & Environmental

- **Noise abatement (NAP):** Maximum speed for jet aircraft per AIP ENR 1.5 §9.1; noise-abatement SID procedures per the same reference; avoid overflying Tygerberg Hospital (3 NM N) when departing RWY 01 or 34.
- **Night noise / dB limits:** No specific per-movement dB limit found; the operative restriction is the intersection-takeoff/run-up ban.
- **Engine run-up restrictions:** No engine run-ups 2000–0400 without emergency justification.
- **Reverse thrust / idle-reverse policy:** Not confirmed in reachable sources — verify locally. 🟧

---

## 13. Ground operations

- **Stands for our types:** Main aprons (A/B/C) handle Jet A-1 hydrant refuelling at 3,000 L/min; aircraft with wingspan ≥52 m must use apron taxiways solely to access stands (not as a through-route) and reduce taxi speed to 10 kt or below. 🟧
- **Push-back:** Push-back procedures require the Apron Office to be advised of destination/PAX/crew before departure; only call-sign, registration, requested flight level and parking bay are to be passed to Ground before start-up.
- **Standard taxi routes:** For light/medium aircraft, RWY 19 in use → vacate at TWY C; RWY 01 in use → vacate at TWY E or RWY 34. For heavy aircraft, RWY 19 in use → vacate at TWY B or C; RWY 01 in use → vacate at TWY A, TWY E or RWY 34.
- **Hot spots / tight taxiways:** 🟧 TWY D3/D4 restricted to light and medium aircraft only; TWY H is lit/marked and operated by security personnel — establish radio contact with SMC before moving past the security gate on TWY H; TWY T lacks appropriate markings/lighting — exercise caution.
- **Follow-me:** Not confirmed in reachable sources. 🟧

---

## 14. Weather & seasonal (durable)

- **Climate / prevailing wind:** Mediterranean-type climate (wet winters, dry summers). 🟥 The defining wind feature is the **SE "Cape Doctor"** — a persistent, often strong south-easterly that blows roughly September through March, peaking in strength/frequency November–March, commonly in the 20–35+ kt range in exposed conditions — a significant crosswind on RWY 01/19.
- **Seasonal hazards:** Cape Doctor crosswind season (Sep–Mar, peak Nov–Mar) is the field's principal reliability driver; winter (Jun–Aug) brings Atlantic frontal systems with rain and north-westerly wind shifts. High bird activity is also noted October–March.
- **Local effects:** Table Mountain/Cape Peninsula topography channels and strengthens the SE wind locally — a well-documented Cape Town phenomenon.

> **Live weather — pull at planning (T-2h):** METAR, TAF, TREND, SIGMET/AIRMET. Not stored here.

---

## 15. NOTAMs

> **Pull at planning (T-2h).** Perishable — not stored here. Check: runway/taxiway closures, navaid U/S, lighting, obstacle/crane, RFF downgrade, GPS/RAIM, current wind/crosswind advisories. Source: AIS / OFP NOTAM block.

---

## 16. Fuel & alternate planning notes

- **Typical role for us:** **Base** — a principal K Global Southern Africa network field.
- **Nearest suitable alternates:** Company preferred alternates **FADN** (plain reference — see [FADN briefing](../fadn/index.md) for the closed-field/reconciliation caveat; ~1,500+ km distant, a long-haul alternate choice) and **FAGE** (Gough Island, plain reference) `[VAMSYS mirror 2026-07-26]` — 🟧 **both alternates warrant VAMSYS review**: FADN is a decommissioned civil field, and FAGE (Gough Island) is an extremely remote South Atlantic island station, not a plausible operational alternate for a Cape Town-based turn. Confirm suitability, runway/RFF adequacy and current status before relying on either.
- **Fuel-uplift notes:** Jet A-1 and AVGAS 100 via Cape Town Intl Fuelling Services (H24), Air BP/Signature Flight Support (limited hours + on-request after-hours) and Shell/Execujet (H24 on request). See [`OM E — Fuel Policy`](../../../../../flight-ops/fuel-policy.md).
- **Range/perf flags for our fleet:** 🟩 Field length/strength non-limiting for any K Global type at sea-level performance. See [`OM B — Fleet Capability Matrix`](../../../../../fleet/capability-matrix.md).

---

## 17. Fleet-specific notes (optional)

- No type-specific field-performance consideration at this sea-level field. The one fleet-relevant item is **crosswind-limit compliance during Cape Doctor events** — check the day's wind against the type's certificated/operator crosswind limit before committing to RWY 01/19. See [`OM B — Fleet Capability Matrix`](../../../../../fleet/capability-matrix.md).

---

## 18. Open items (🟧 — confirm against AIP / current AIRAC)

- **Magnetic variation** — sourced to a 2018 epoch; current-day value not independently re-confirmed.
- **CAT II/CAT IIIB RVR/trigger minima** — RWY 01 published within CAT IIIB tolerances; exact operational RVR figures not confirmed this pass.
- **Take-off minima** — not confirmed this pass.
- **Customs/immigration exact hours** — tied to "scheduled operations"; exact desk hours not confirmed.
- **FAGE as a company-preferred alternate** — Gough Island is an extremely remote South Atlantic station; this VAMSYS-sourced alternate warrants operational review/correction.
- **Slot-coordination level** — no IATA level found in reachable sources.
- **SID/STAR current-AIRAC names and gradient tables** — verify against the current cycle before use.

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim material (current-AIRAC charts) informs content but is not listed here.*

- **AIP South Africa (ATNS/SACAA), AD 2 FACT** — https://cad.atns.co.za/SmartAIM/EAipPackages/15-OCT-21/2021-10-15-000000/html/eAIP/FA-AD-2-FACT-en-US.html (retrieved 2026-07-26). *ARP/elevation, runways/declared distances, RFF, communications, navaids, ATS airspace, ground operations, obstacles, noise abatement.*
- Cape Town Magazine — "The Cape Doctor" — https://www.capetownmagazine.com/cape-doctor (retrieved 2026-07-26). *Cape Doctor seasonal wind pattern/strength corroboration.*
- Wikipedia — "Cape Doctor" — https://en.wikipedia.org/wiki/Cape_Doctor (retrieved 2026-07-26). *Corroboration.*
- OurAirports — https://ourairports.com/airports/FACT/ (retrieved 2026-07-26). *Cross-check only.*

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-26 | Built from AIP South Africa (ATNS); K Global fields from live VAMSYS; 4-page pack. |
