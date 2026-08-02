# OMAL — Al Ain Intl · Airport Briefing

**OMAL / AAN** · Al Ain, Abu Dhabi Emirate, United Arab Emirates · Middle East
**Version** v0.1 · **Updated** 2026-07-26 · **Status** Draft

> **Read-me:** Planning aid for the sim, not a chart. Static data is drawn from the GCAA (General Civil Aviation Authority) UAE AIP, AD 2 OMAL, cross-checked against public aeronautical databases; approaches/SIDs/STARs are listed **by name only** — fly the charted current-AIRAC version. Live weather/NOTAMs are pulled at planning (§14/§15). Open 🟧 items are listed in §18. Flag legend 🟥 restriction/hazard · 🟧 caution/unverified · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| ARP (lat/long) | 24°15′42″N / 055°36′33″E (24.2617, 55.6092) — mid-point of runway, on centreline `[GCAA AIP AD 2 OMAL]` |
| Field elevation | **865 ft / 264 m AMSL** (reference temperature 39°C; geoid undulation −104 ft) `[GCAA AIP AD 2 OMAL]` — 🟧 public cross-check sources (OurAirports, SKYbrary, Wikipedia, handler databases) report 866–869 ft; treated as immaterial variance, AIP figure is of record — see §18 |
| Mag variation | 🟧 **002° E** — epoch not stated in the reachable source; treat as indicative only |
| Time zone | UTC+4 (UAE Standard Time — no DST observed) |
| Runway(s) | **01/19**, 4,005 × 45 m (13,140 × 148 ft), asphalt, single runway |
| Preferential runway | 🟧 Wind-determined; single runway serves both directions — no published preferential-runway rule found |
| Longest LDA | 4,005 m (either direction) |
| Approaches | ILS (RWY 01 and RWY 19), VOR, **RNP APCH** (Cat A–E, both runway ends) — idents/minima not confirmed 🟧 |
| RFF category | 🟧 **CAT 9**, with **CAT 10 available on 1-hour prior notice** — confirm against current AIRAC |
| Control type | **Radar-served terminal** — ATS Al Ain (Tower/Ground) on the field; approach control is **remoted to Abu Dhabi Radar East**, not an on-field radar unit |
| Elevation class | Near sea-level (865 ft) — **not** hot-and-high by elevation, but the hot-desert climate (BWh, summer 40–45°C+) drives a real **density-altitude performance penalty** 🟧 |
| Special-airport status | 🟥 Not operator-categorised as a restricted-crew special airport, but real operational constraints apply: Code F/A380 taxiway restriction, training flow-control gating, and a preferred unscheduled-arrival window — see §5 |
| Customs / PoE | **Yes** — tagged Port of Entry; exact desk hours not confirmed 🟧 |
| K Global category | **Not set — not in VAMSYS** 🟧 |
| K Global base | **No** |
| Company preferred alternates | **Not in VAMSYS** 🟧 — as general operational geography only (not a sourced VAMSYS figure), OMAA and OMDB are the nearest major Gulf hubs |
| Taxi-in / taxi-out (VAMSYS) | **Not in VAMSYS** 🟧 |

---

## 2. Validation summary

| Domain | Flag | Note |
|---|---|---|
| Terrain / CFIT | 🟥 | Jebel Hafeet (summit ~1,249 m / 4,098 ft AMSL) rises roughly 15 NM SE of the field — a real, standalone high-terrain feature in an otherwise flat desert setting. See §3.1. |
| Runway length vs fleet perf | 🟩 | 4,005 m single runway is non-limiting for any K Global widebody type, subject to an OM B performance check. |
| Approach availability / minima | 🟧 | ILS/VOR/RNP APCH available by name on both runway ends; idents and published minima not confirmed from a reachable primary table. |
| Airspace / traffic / control | 🟧 | Radar-served (Abu Dhabi Radar East approach), but the field carries a very high volume of GA/flight-training traffic sharing the single runway — see §3.2. |
| Weather / seasonal hazard | 🟧 | UAE-wide winter radiation-fog season (Nov–May, worst Jan–Feb) plus shamal dust; extreme summer heat drives a density-altitude penalty. See §14. |
| Curfew / slots / hours | 🟧 | No formal curfew confirmed; operator material suggests traffic is normally daylight-hours-heavy given the training-flight character, and unscheduled (non-VVIP/VIP) arrivals are preferably scheduled 1300–0300 UTC subject to Al Ain OPS Management approval. Not corroborated as a hard restriction. |
| RFF category vs our types | 🟧 | CAT 9 (CAT 10 on 1-hour PN) — confirm against the assigned type's OM B RFF requirement before relying on this field. |
| Fuel availability | 🟧 | Jet A-1 assumed available given the field's international/training/cargo character; specific supplier and hours not confirmed. |
| Customs / handling / security | 🟧 | Port of Entry tagged Yes; desk hours and a confirmed primary ground handler not found in reachable sources. |

---

## 3. Threat & Error Management (TEM)

### 3.1 CFIT / Terrain 🟥
Al Ain sits in otherwise flat desert terrain, but **Jebel Hafeet** — Abu Dhabi's (and one of the UAE's) highest peaks, summit **~1,249 m / 4,098 ft AMSL** — rises roughly **15 NM south-east of the ARP** (computed from published coordinates; not an AIP-stated distance, flag 🟧), representing **~3,230 ft of vertical relief above the field**. This is a standalone massif rather than part of the Hajar range further east (see the [Emirates (OMAE) FIR brief](../../../../airspace/fir/middle-east/emirates-omae.md) §8 for the FIR-wide terrain picture, which correctly treats the interior/western FIR as low desert — Jebel Hafeet is the field-specific exception that brief does not capture). Respect the current-chart MSA sectors on any southerly or south-easterly departure, arrival, or missed-approach segment; do not descend below the charted minimum safe altitude in that quadrant on a visual or radar-vectored segment.

### 3.2 Airborne conflict / traffic 🟧
OMAL's single runway (01/19) is shared between scheduled/charter traffic and a significant resident **flight-training population** — Khalifa Bin Zayed Flying Academy, Etihad Flight College and Horizon Flight Training Academy are all based at the field — generating a reported **600+ movements per day** on the one runway, per the field's air navigation service provider. Approach control is **remoted to Abu Dhabi Radar East** rather than worked by an on-field radar unit, and training activity is itself gated by the **"Al Ain Flow Control System,"** requiring approval from both **ATS Al Ain and Abu Dhabi Radar East** before a training sortie is flown — a clear signal that the authority manages this as a congested circuit/training environment rather than a quiet regional field. Expect a high volume of touch-and-go/circuit traffic mixed with any transport-category movement; maintain a heightened traffic scan even under radar/approach control. Cross-ref the [Emirates (OMAE) FIR brief](../../../../airspace/fir/middle-east/emirates-omae.md) for the wider FIR control picture.

### 3.3 Runway excursion 🟧
The single runway carries full-length declared distances of 4,005 m in both directions (see §7) with no displaced threshold found in reachable sources — ample length for any K Global type. Published intersection-departure distances exist (down to 2,000 m at the mid-field taxiway) but are not relevant to a full-length widebody departure. No braking-action or contamination data specific to OMAL was found; the desert climate removes any winter-contamination concern, but confirm dust/sand accumulation practice locally.

### 3.4 Weather threat 🟧
OMAL sits in a **hot desert climate (Köppen BWh)** with summer maxima commonly **40–45°C**, which drives a genuine **density-altitude performance penalty** despite the field's low elevation. The UAE experiences a recognised **winter radiation-fog season (November–May, densest January–February)**, typically forming in the early hours and persisting into the mid-morning; this is generally described as a coastal-city phenomenon but interior desert locations are also affected by radiation cooling and can see reduced visibility, compounded by **shamal dust storms** that reduce visibility further at any time of year. See §14.

### 3.5 Operational considerations 🟥
Plan around three durable, field-specific constraints: (1) **Code F/A380 aircraft are restricted to taxiways A, E, F, L, M and O, with no backtracking or 180° turn permitted on the runway** — a hard ground-manoeuvring constraint for any large-code movement; (2) **training and flow-control gating** via the Al Ain Flow Control System, requiring dual ATS Al Ain + Abu Dhabi Radar East approval; and (3) an operational note that **unscheduled aircraft (other than VVIP/VIP) should plan arrival times preferably between 1300–0300 UTC**, subject to prior approval from Al Ain OPS Management — treat this as a scheduling constraint to confirm before planning any non-scheduled movement. The field carries **no K Global category, base flag, or company alternate status** — it is not currently in VAMSYS, so all commercial/dispatch parameters in this pack are general-reference only.

---

## 4. Cautions & Warnings

- **Jebel Hafeet** rises to ~4,098 ft AMSL roughly 15 NM SE of the field — respect MSA on any southerly/south-easterly routing; do not treat the area as uniformly flat desert.
- **Code F/A380 aircraft:** taxiways A, E, F, L, M and O only — **no backtracking or 180° turn on the runway**.
- **Very high GA/flight-training traffic density** (600+ movements/day reported) on the single runway — maintain a heightened traffic scan even under radar/approach control.
- **Winter radiation fog (Nov–May, worst Jan–Feb)** and **shamal dust** can reduce visibility with limited warning.
- **Extreme summer heat** drives a real density-altitude penalty despite the low field elevation — confirm performance planning accounts for this.
- **Not in VAMSYS** — no company category, base flag, preferred-alternate list or taxi-time data exists for this field; treat every commercial/ops parameter here as unconfirmed until the field is formally added to the network.

---

## 5. Aerodrome category, restrictions & crew qualification

- **Special-airport / category:** Not operator-categorised as a restricted-crew special airport in reachable sources; however, real operational gating applies as below. 🟥
- **Crew-qualification gate:** None published beyond standard type currency; confirm dust/fog-season low-visibility currency before any winter operation. 🟧
- **Operating restrictions / bans:** Code F/A380 aircraft restricted to taxiways A, E, F, L, M and O, with **no backtracking/180° turn on the runway**; training subject to the **Al Ain Flow Control System** (approval required from both ATS Al Ain and Abu Dhabi Radar East); unscheduled aircraft (other than VVIP/VIP) should plan arrivals preferably **1300–0300 UTC**, subject to prior approval from Al Ain OPS Management. 🟥
- **Overflight / entry / permits:** Third-party ground-handling sources describe a UAE landing permit and airport parking-slot arrangement as mandatory for non-scheduled operators; not independently confirmed against the primary AIP. 🟧
- **Operations notes:** ANSP services (aerodrome and approach control) are provided under GCAA oversight by **GANS (Global Air Navigation Services)**; the airport operator is reported as Abu Dhabi Airports. The field is also reported to be developing a **VVIP terminal and MRO ("MOR") facility** as part of a wider aerospace-park programme — timeline not confirmed. 🟧

---

## 6. General / hours / services

| Item | Value | Flag |
|---|---|---|
| ATS hours | Not confirmed from a primary source; operator material implies heavy daylight-hours training activity | 🟧 |
| AD operating hours | Not confirmed | 🟧 |
| Night / curfew restrictions | No formal curfew found in reachable sources; not corroborated as a hard restriction | 🟧 |
| RFF category | **CAT 9** (CAT 10 available on 1-hour prior notice) | 🟧 |
| Fuel | Jet A-1 assumed available given the field's international/training/cargo role; supplier and hours not confirmed | 🟧 |
| PCN | Not published / verify | 🟧 |
| Customs | Port of Entry tagged Yes; exact desk hours not confirmed | 🟧 |
| Handling / FBO | Multiple third-party FBO/ground-handling agents advertise service at the field (general-aviation-oriented); no single confirmed primary handler for scheduled/commercial traffic | 🟧 |

---

## 7. Runways & declared distances

| RWY | Dimensions | Surface / PCN | TORA | TODA | ASDA | LDA | Notes |
|---|---|---|---|---|---|---|---|
| 01 | 4,005 × 45 m | Asphalt, paved and lighted / PCN not published 🟧 | 4,005 m | 4,250 m | 4,005 m | 4,005 m | Full-length. Intersection departure at TWY B: TORA 2,800 m / TODA 3,045 m / ASDA 2,800 m; at TWY C (mid-field): TORA 2,000 m / TODA 2,245 m / ASDA 2,000 m — not relevant to a full-length widebody departure |
| 19 | 4,005 × 45 m | Asphalt, paved and lighted / PCN not published 🟧 | 4,005 m | 4,405 m | 4,005 m | 4,005 m | Full-length. Intersection departure at TWY D: TORA 2,670 m / TODA 3,070 m / ASDA 2,670 m; at TWY C (mid-field): TORA 2,000 m / TODA 2,400 m / ASDA 2,000 m — not relevant to a full-length widebody departure |

*Source: GCAA AIP UAE, AD 2 OMAL (current AIRAC 2026-P02 cycle) — declared distances. No displaced threshold found in reachable sources. 🟧 Runway threshold elevations are reported elsewhere as RWY 01 ~865 ft / RWY 19 ~838 ft (SkyVector) — not independently AIP-confirmed at threshold level, flagged for verification. All distances in metres.*

---

## 8. Communications

| Service | Callsign | Frequency | Hours | Notes |
|---|---|---|---|---|
| ATIS | Al Ain ATIS | 126.050 | Not confirmed 🟧 | |
| Delivery | Not confirmed | — | — | Not independently found — confirm with ATS Al Ain |
| Ground | Al Ain Ground | 129.150 | Not confirmed 🟧 | |
| Tower | Al Ain Tower | 119.850 | Not confirmed 🟧 | On-field ATS Al Ain |
| Approach | Abu Dhabi Radar East | 132.67 / 133.55 / 135.35 | Not confirmed 🟧 | **Remoted approach control — not an on-field unit**; sector-specific, take the assigned frequency |
| Centre / FIR | Emirates Area Control ("U.A.E Radar", GCAA) | Per current AIRAC | H24 | See [Emirates (OMAE) FIR brief](../../../../airspace/fir/middle-east/emirates-omae.md) |
| Emergency | Guard | 121.50 | H24 | |

*Frequencies cross-checked across OurAirports, SkyVector and a third-party handling reference; treat as 🟧 pending a live-AIRAC cross-check.*

---

## 9. Navaids

| Aid | Ident | Freq | Hours | Notes |
|---|---|---|---|---|
| VOR | ALA | 115.90 | Not confirmed 🟧 | On-field ("Al Ain" VOR, ~1.3 NM from ARP) |
| ILS | Not confirmed | — | — | ILS reported available on both RWY 01 and RWY 19; ident/frequency not confirmed 🟧 |

*Nearby en-route aids (not field-serving): VOR MIN (Minhad) 115.20, ~47 NM; VOR ADV (Abu Dhabi) 114.25, ~52 NM; VOR ALB (Al Bateen) 114.00, ~65 NM.*

---

## 10. Arrival

- **Transition altitude / level:** Not confirmed from a reachable primary source — verify current chart. 🟧
- **Speed:** Standard 250 KIAS below FL100 (ICAO norm) — not independently OMAL-sourced. 🟧
- **Preferential runway logic:** Wind-determined; single runway serves both directions equally — no published preferential-runway rule found. 🟧
- **Approaches (names only — verify minima on current AIRAC charts):**

| RWY | Approach | IAF | FAF/FAP alt | Notes |
|---|---|---|---|---|
| 01 | ILS; RNP APCH (Cat A–E) | Not confirmed | Not confirmed | Ident/minima not confirmed 🟧 |
| 19 | ILS; RNP APCH (Cat A–E); VOR | Not confirmed | Not confirmed | Ident/minima not confirmed 🟧 |

- **STARs (names only — verify current AIRAC):** RNAV1 STARs reported — RWY 01: **GIDIS 2K, ITRAX 1K, KANIP 1K, ROVOS 2K**; RWY 19: **GIDIS 2L, ITRAX 2L, ITRAX 2M, KANIP 2L, ROVOS 3L**. 🟧
- **LVP:** Winter radiation-fog season (§14) is the plausible trigger; exact RVR/trigger figures not confirmed. 🟧
- **Missed approach watch-items:** Terrain to the south-east (Jebel Hafeet, §3.1) is the relevant consideration on a south/south-easterly missed approach; elsewhere the surrounding terrain is flat desert.

---

## 11. Departure

- **SIDs (names only — fly the charted version):** RNAV1 SIDs reported — RWY 01: **GIDIS 1H, LABRI 2H, MURGU 1H, RETAS 2H, ROVOS 1H**; RWY 19: **GIDIS 1J, LABRI 2J, MURGU 1J, RETAS 2J, ROVOS 1J**. 🟧
- **RNP / climb-gradient requirements:** RNAV1 SIDs are published from both runway ends; verify gradient/equipage per SID on the current chart. See [`OM E — PBN and RNP Operations`](../../../../../flight-ops/pbn-and-rnp-operations.md).
- **Take-off minima:** Not confirmed. 🟧
- **Start-up / push-back:** Not confirmed — confirm cross-bleed/APU and push-back procedure with ATS Al Ain/handling agent. 🟧
- **ATC slot / CTOT & clearance:** No slot-coordination or ATFM/CTOT regime found in reachable sources. 🟧
- **De-icing:** **NIL** — hot desert climate, no de-icing requirement.

---

## 12. Noise & Environmental

- **Noise abatement (NAP):** Not found in reachable sources. 🟧
- **Night noise / dB limits:** Not found. 🟧
- **Engine run-up restrictions:** Not found. 🟧
- **Reverse thrust / idle-reverse policy:** Not found. 🟧

---

## 13. Ground operations

- **Stands for our types:** Not confirmed — the apron is oriented toward GA/training traffic; widebody stand suitability is unconfirmed. 🟧
- **Push-back:** Not confirmed. 🟧
- **Standard taxi routes:** 🟥 **Code F/A380 aircraft restricted to taxiways A, E, F, L, M and O**; **no backtracking or 180° turn permitted on the runway**.
- **Hot spots / tight taxiways:** No additional hot spots confirmed beyond the Code F taxiway restriction above. 🟧
- **Follow-me:** Not confirmed. 🟧

---

## 14. Weather & seasonal (durable)

- **Climate / prevailing wind:** Hot desert climate (Köppen **BWh**); prevailing regional wind pattern not independently confirmed for OMAL specifically — the wider Emirates FIR/Middle East pattern includes NW shamal winds (see [Middle East airspace brief](../../../../airspace/middle-east.md)). 🟧
- **Seasonal hazards:** UAE-wide **winter radiation-fog season (November–May, densest January–February)**, typically forming in the early hours (roughly 0300–1000 local) — most commonly described as a coastal phenomenon, but interior desert locations can also be affected by radiation cooling; **shamal dust storms** reduce visibility at any time of year; **extreme summer heat (40–45°C+)** drives a density-altitude performance penalty despite the field's low elevation.
- **Local effects:** No local terrain-wind effects independently confirmed beyond the general presence of Jebel Hafeet to the south-east (§3.1).

> **Live weather — pull at planning (T-2h):** METAR, TAF, TREND, SIGMET/AIRMET (dust/fog). Not stored here.

---

## 15. NOTAMs

> **Pull at planning (T-2h).** Perishable — not stored here. Check: runway/taxiway closures (esp. the Code F/A380 taxiway restriction), navaid U/S, lighting, obstacle/crane, RFF downgrade, GPS/RAIM (GNSS interference is a recognised regional issue — see the [Emirates (OMAE) FIR brief](../../../../airspace/fir/middle-east/emirates-omae.md) §9), TFR, conflict-zone advisories. Source: AIS / OFP NOTAM block.

---

## 16. Fuel & alternate planning notes

- **Typical role for us:** None confirmed — OMAL is **not in VAMSYS** and carries no current K Global network role. Its general-aviation/training/cargo character (per §3.2/§5) would make it, at most, a possible future interior alternate rather than a scheduled destination.
- **Nearest suitable alternates:** Not a VAMSYS-confirmed list. As general operational geography only (not sourced from VAMSYS) — OMAA (Abu Dhabi/Zayed Intl, ~53.5 NM) and OMDB (Dubai Intl, ~60.8 NM) are the nearest major Gulf hubs; OMDW (~45.9 NM), OMSJ (~64.1 NM) and OMRK (~82.8 NM) are also within range. Confirm any actual alternate suitability, runway/RFF adequacy and current minima independently before use.
- **Fuel-uplift notes:** Jet A-1 assumed available given the field's international/training/cargo character; specific into-plane provider/hours not confirmed. 🟧 See [`OM E — Fuel Policy`](../../../../../flight-ops/fuel-policy.md).
- **Range/perf flags for our fleet:** Runway length (4,005 m) is non-limiting for any K Global type. See [`OM B — Fleet Capability Matrix`](../../../../../fleet/capability-matrix.md) for type-by-type reference; confirm RFF category (CAT 9/10) against the assigned type's requirement.

---

## 17. Fleet-specific notes (optional)

- No K Global type is currently based or scheduled here — OMAL is not in VAMSYS. If ever used as an ad hoc alternate, confirm the **Code F/A380 taxiway restriction** (§13) and **RFF category** against the assigned type before planning; see [`OM B — Fleet Capability Matrix`](../../../../../fleet/capability-matrix.md).

---

## 18. Open items (🟧 — confirm against AIP / current AIRAC)

- **Field elevation** — primary AIP figure (865 ft) differs by a few feet from several tier-4 cross-checks (866–869 ft); immaterial but unreconciled.
- **Magnetic variation (002° E)** — epoch not stated.
- **ATS/AD operating hours, night restrictions** — no formal curfew confirmed; daylight-hours-heavy operator characterisation not corroborated as a hard rule.
- **RFF category (CAT 9 / CAT 10 on 1-hr PN)** — not independently re-confirmed from a primary table this pass.
- **ILS ident/frequency and published approach minima** (both runway ends) — not found.
- **Transition altitude/level, take-off minima, LVP trigger RVR** — not found.
- **Fuel supplier and uplift hours** — assumed available, not confirmed.
- **Customs/immigration desk hours and a confirmed primary ground handler** — not found.
- **PCN** — not published in reachable sources.
- **Noise abatement, night-noise limits, engine run-up and reverse-thrust policy** — none confirmed.
- **Stand/apron suitability for Code E/F transport-category aircraft** — not confirmed; apron appears GA/training-oriented.
- **VVIP terminal / MRO ("aerospace park") development timeline** — reported but not independently confirmed.
- **OMAL is not in VAMSYS** — no K Global category, base flag, preferred-alternate list or taxi-time data exists; all such fields above are placeholders pending network reconciliation.

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim material may inform content but is not listed here.*

- **GCAA (General Civil Aviation Authority, UAE) — AIP, AD 2 OMAL**, current AIRAC cycle 2026-P02 — https://www.gcaa.gov.ae/en/ais/AIPHtmlFiles/AIP/Current/AIRACs/2026-P02/pdf/AD-2.OMAL.pdf (retrieved 2026-07-26). *Primary source of record for ARP, elevation, declared distances, RFF category, taxiway restrictions and operational notes.*
- OurAirports — https://ourairports.com/airports/OMAL/ and /runways.html and /frequencies.html (retrieved 2026-07-26). *ARP/elevation/runway/frequency cross-check.*
- SkyVector — https://skyvector.com/airport/OMAL/Al-Ain-International-Airport (retrieved 2026-07-26). *Coordinates, runway heading/elevation, frequencies, nearby navaids/airports cross-check.*
- Wikipedia — "Al Ain International Airport" — https://en.wikipedia.org/wiki/Al_Ain_International_Airport (retrieved 2026-07-26).
- SKYbrary — "Al Ain International Airport" — https://skybrary.aero/airports/omal (retrieved 2026-07-26). *Climatology, runway data cross-check.*
- Universal Weather and Aviation — OMAL/AAN airport data page — https://www.universalweather.com/airports/OMAL-AAN-AL-AIN-INTERNATIONAL-AIRPORT-AL-AIN-ABU-DHABI-UNITED-ARAB-EMIRATES/ (retrieved 2026-07-26). *Magnetic variation, Port-of-Entry status cross-check.*
- Global Air Navigation Services (GANS) — "Al Ain International Airport" — https://gans.aero/airports/al-ain-international-airport/ (retrieved 2026-07-26). *Operator statement on traffic character, based flying-training organisations, movement volume, aerospace-park development.*
- FLYTAG Flight Support — OMAL/AAN ground handling & landing permits — https://flytag.co/region/middle-east/omal-aan-landing-permits-ground-handling-united-arab-emirates.html (retrieved 2026-07-26). *Frequency and permit-requirement cross-check — commercial handling-agent source, not regulatory.*
- Wikipedia — "Jebel Hafeet" — https://en.wikipedia.org/wiki/Jebel_Hafeet (retrieved 2026-07-26). *Terrain height/coordinates for the §3.1 CFIT item.*

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-26 | Built from national AIP; K Global fields from live VAMSYS; 4-page pack. |
