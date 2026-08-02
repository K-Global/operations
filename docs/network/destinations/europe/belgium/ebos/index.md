# EBOS — Ostend-Bruges · Airport Briefing

**EBOS / OST** · Ostend (Middelkerke), West Flanders, Belgium · Europe
**Version** v0.1 · **Updated** 2026-07-26 · **Status** Draft — AIP-verified (skeyes eAIP, AD 2 EBOS, direct retrieval successful this session)

> **Read-me:** Planning aid for the sim, not a chart. Static data is drawn directly from the skeyes eAIP (AIP Belgium, AD 2 EBOS); approaches/SIDs/STARs are listed **by name only** — fly the charted current-AIRAC version. Live weather/NOTAMs are pulled at planning (§14/§15). **EBOS is not a field in the K Global VAMSYS network** — category, base flag, taxi times and preferred alternates are all unassigned and flagged 🟧 in §1/§16. Open 🟧 items are listed in §18. Flag legend 🟥 restriction/hazard · 🟧 caution/unverified · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| ARP (lat/long) | 51°11′56″N 002°51′44″E `[AIP Belgium AD 2 EBOS]`; sited 211° MAG / 620 m from TWR |
| Field elevation | **7 ft** AMSL (reference temperature 21°C); geoid undulation 146 ft `[AIP Belgium AD 2 EBOS]` |
| Mag variation | **1° E (2020)**; annual change not available `[AIP Belgium AD 2 EBOS]` |
| Time zone | UTC+1 (CET) / UTC+2 (CEST, EU DST observed) |
| Runway(s) | **08/26**, 3,200 × 45 m, concrete/asphalt, PCN 86/F/C/W/T |
| Preferential runway | **Wind/time-of-day-driven, AIP-published:** between 21:00–07:00 (20:00–06:00), if crosswind ≤15 kt and tailwind ≤5 kt (traffic permitting), **RWY 26 is used for take-off and RWY 08 for landing** |
| Longest LDA | 2,900 m (RWY 08); 2,785 m (RWY 26) — see §7 |
| Approaches | **ILS CAT I on both runway ends** (08 and 26); RNP APCH also published both ends |
| RFF category | **CAT 9** `[AIP Belgium AD 2 EBOS]` |
| Control type | **Radar/Procedural mixed** — Oostende Approach + Oostende Tower (skeyes); field sits in **Brussels FIR (EBBU)**, Oostende CTR is Class D |
| Elevation class | Sea-level coastal field (7 ft) — **not** hot-and-high |
| Special-airport status | Cargo-focused field with a defined helicopter runway-use rule, big-aircraft (A380/747-8F/An124/An225) special-procedure requirement, and a night-time noise/QC movement restriction — see §5/§12 |
| Customs / PoE | **H24** `[AIP Belgium AD 2 EBOS]` |
| K Global category | **Not in VAMSYS network** — unassigned 🟧 |
| K Global base | **Not in VAMSYS network** — unassigned 🟧 |
| Company preferred alternates | **Not in VAMSYS network** — unassigned 🟧 |
| Taxi-in / taxi-out (VAMSYS) | **Not in VAMSYS network** — unassigned 🟧 |

---

## 2. Validation summary

| Domain | Flag | Note |
|---|---|---|
| Terrain / CFIT | 🟩 | Flat coastal Flanders; sea-level field, close-in obstacles are all low vegetation/small objects near both thresholds (§7 obstacle data), no CFIT concern. |
| Runway length vs fleet perf | 🟩 | Single runway 3,200 m — ample for any K Global type; big-aircraft (A380/747-8F/An124/An225) ops require prior coordination with Airport Authorities (§5). |
| Approach availability / minima | 🟩 | ILS CAT I both ends, min RVR 550 m for CAT I ops; RNP APCH also published both ends. |
| Airspace / traffic / control | 🟩 | Oostende CTR is Class D, single-runway field; genuine local caution is the shared **UAS (drone) geographical zones VLL0/1/2** within the CTR — ATC cannot ensure systematic UAS tracking (§3.2). |
| Weather / seasonal hazard | 🟧 | North Sea-coastal field — routine sea fog/crosswind exposure expected; not independently detailed beyond the AIP's runway-strip-soft-after-heavy-rain caution (§3.3/§14). |
| Curfew / slots / hours | 🟥 | **Night-movement noise restriction 22:00–05:00 (21:00–04:00): aircraft >8,618 kg MTOW certified to Annex 16 Vol. I Ch. 2/3/5 permitted only if QC ≤12; QC >12 forbidden outright** — see §12. |
| RFF category vs our types | 🟩 | CAT 9 — adequate for standard K Global operations. |
| Fuel availability | 🟩 | AVGAS 100LL and Jet A1, H24, confirmed `[AIP Belgium AD 2 EBOS]` — note Air BP card **no longer accepted**. |
| Customs / handling / security | 🟩 | H24 customs/immigration/security/handling all confirmed `[AIP Belgium AD 2 EBOS]`. |

---

## 3. Threat & Error Management (TEM)

### 3.1 CFIT / Terrain 🟩
EBOS sits at 7 ft AMSL on the flat Belgian coastal plain. Close-in obstacle data published for both runway ends (RWY 08 and RWY 26) shows only low vegetation/small objects (10–90 ft AGL range) — no CFIT-relevant terrain. Non-issue field for terrain.

### 3.2 Airborne conflict / traffic 🟧
Oostende CTR is **Class D**, controlled by Oostende Tower, vertical limit 1,500 ft AMSL, H24. A genuine local caution: **UAS (drone) geographical zones VLL0, VLL1 and VLL2 exist within the CTR, and ATC cannot ensure systematic tracking of UAS traffic** `[AIP Belgium AD 2 EBOS]` — maintain a heightened visual scan at low level in the circuit/approach environment. The field sits in **Brussels FIR (EBBU)**, for which no dedicated OM C FIR brief exists — see [Europe (Continental) Airspace briefing](../../../../airspace/europe.md) 🟧.

### 3.3 Runway excursion 🟧
The AIP carries an explicit caution: **"RWY strip soft after heavy rain"** `[AIP Belgium AD 2 EBOS]` — a direct excursion-adjacent hazard in wet conditions given the coastal-plain drainage environment. LDA is reduced from the full 3,200 m runway length on both ends (2,900 m on 08, 2,785 m on 26) — see §7.

### 3.4 Weather threat 🟧
As a North Sea-coastal field, routine exposure to sea fog, onshore wind and crosswind conditions is expected; the AIP's published night runway-swap logic (§1/§12) is itself evidence of a genuine, regularly-managed crosswind/tailwind consideration. No AIP-published seasonal-hazard narrative beyond the runway-strip-soft-after-heavy-rain caution (§3.3) — treat coastal fog/wind as a standing caution pending live weather at planning (§14).

### 3.5 Operational considerations 🟩
EBOS is a comparatively low-complexity, well-instrumented single-runway field (ILS CAT I both ends, RNP APCH both ends, PALS approach lighting, full LVO procedure published) with clear, AIP-published rules for night noise, big-aircraft handling, and helicopter runway use. The standing planning items are the **night noise/QC movement restriction** (§12) and the requirement for **prior coordination on any A380/747-8F/An124/An225-class operation** (§5) — neither is a hazard, both are administrative/commercial planning items.

---

## 4. Cautions & Warnings

- **Runway strip soft after heavy rain** — explicit AIP caution; brief for reduced-braking-action/excursion risk in wet conditions.
- **Night runway-swap logic (21:00–07:00 / 20:00–06:00):** RWY 26 for take-off, RWY 08 for landing when crosswind ≤15 kt and tailwind ≤5 kt, traffic permitting — confirm active configuration with ATC/ATIS.
- **QC-restricted night window (22:00–05:00 / 21:00–04:00):** aircraft >8,618 kg MTOW need QC ≤12 to operate; QC >12 is **forbidden outright** — see §12.
- **Pre-departure engine/power checks are prohibited on the parking position** — a dedicated run-up area is used after taxi clearance, one aircraft at a time by ATC clearance.
- **Reverse thrust is idle-power only, except when safety-required.**
- **Aircraft shall not leave the stand before the preceding aircraft has taken off or parked** — a sequencing rule specific to this field.
- **A380 / B747-8F / An124 / An225 operations require prior permission and coordination with Airport Authorities** — do not assume unrestricted access for these types.
- **UAS (drone) zones exist within the CTR and are not systematically tracked by ATC** — maintain a heightened visual scan.
- **High-visibility clothing is mandatory airside for all crew/personnel at all times.**

---

## 5. Aerodrome category, restrictions & crew qualification

- **Special-airport / category:** Not operator-categorised as a restricted-crew "special airport"; the standing procedural items are the **big-aircraft prior-coordination requirement** (A380/747-8F/An124/An225) and the **night noise/QC restriction** (§12). 🟧
- **Crew-qualification gate:** None specific published; standard ILS CAT I currency applies. 🟩
- **Operating restrictions / bans:** Take-off/landing of aircraft without radio, gliders, and balloons is **prohibited**; banner-towing/throwing is prohibited; ULM operations restricted to compliant types; training-flight restrictions apply (no training Sundays/holidays, no training >6 t MTOW in Jul/Aug, training only 08:00–21:00 (07:00–20:00), military max 3 training flights/day, max 4 aircraft simultaneous in the circuit) `[AIP Belgium AD 2 EBOS]`. 🟥
- **Overflight / entry / permits:** Standard EU/Schengen international arrival; no special state permit required for scheduled commercial ops. Non-home-based training requires PPR. 🟩
- **Operations notes:** ANSP — **skeyes**. Airport operator — **Internationale Luchthaven Oostende-Brugge (LEM Oostende-Brugge)**. Handling — Aviapartner (cargo/GA handling on Apron 3); fuelling — Uplift.

---

## 6. General / hours / services

| Item | Value | Flag |
|---|---|---|
| ATS hours | **H24** `[AIP Belgium AD 2 EBOS]` | 🟩 |
| AD operating hours | **H24** (AD operator H24) `[AIP Belgium AD 2 EBOS]` | 🟩 |
| Night / curfew restrictions | No hard curfew; **noise/QC movement restriction 22:00–05:00 (21:00–04:00)** for aircraft >8,618 kg MTOW (§12) | 🟥 |
| RFF category | **CAT 9** `[AIP Belgium AD 2 EBOS]` | 🟩 |
| Fuel | **AVGAS 100LL and Jet A1, H24** `[AIP Belgium AD 2 EBOS]`; Air BP card no longer accepted | 🟩 |
| PCN | Apron 1: 101/R/D/W/T · Apron 2: 86/F/C/W/T · Apron 3: 52/F/C/X/T · Runway: 86/F/C/W/T `[AIP Belgium AD 2 EBOS]` | 🟩 |
| Customs | **H24** `[AIP Belgium AD 2 EBOS]` | 🟩 |
| Handling / FBO | **H24**; Aviapartner (cargo/GA, Apron 3); North Sea Aviation Center (hangar/small repairs) `[AIP Belgium AD 2 EBOS]` | 🟩 |

---

## 7. Runways & declared distances

| RWY | Dimensions | Surface / PCN | TORA | TODA | ASDA | LDA | Notes |
|---|---|---|---|---|---|---|---|
| 08 | 3,200 × 45 m | Concrete/asphalt, PCN 86/F/C/W/T | 3,200 m | 3,200 m | 3,200 m | **2,900 m** | True bearing 076.51°; strip 3,320 × 300 m; RESA 210 × 150 m; slope +0.03% |
| 26 | 3,200 × 45 m | Concrete/asphalt, PCN 86/F/C/W/T | 3,200 m | 3,200 m | 3,200 m | **2,785 m** | True bearing 256.51°; strip 3,320 × 300 m; RESA 240 × 150 m; slope −0.01% |

**Intersection take-offs (pilot-acceptance basis):** RWY 08 from C1 (1,761 m, restricted to aircraft ≤5,700 kg during HJ), D1 (2,079 m), E1 (2,285 m). RWY 26 from A (2,178 m), B1 (1,610 m), C1 (1,438 m, same 5,700 kg/HJ restriction).

*Source: AIP Belgium (skeyes eAIP), AD 2 EBOS, retrieved 2026-07-26 — direct primary-source retrieval. All distances in metres. RWY strip explicitly noted "soft after heavy rain" (§3.3).*

---

## 8. Communications

| Service | Callsign | Frequency | Hours | Notes |
|---|---|---|---|---|
| ATIS | Oostende Information | 126.130 | H24 | 8.33 kHz; **D-ATIS available** |
| Approach | Oostende Approach | 120.600 (primary) / 266.075 | H24 | Emergency 121.500/243.000; supplementary 127.330 (8.33 kHz) |
| Tower | Oostende Tower | 118.180 (primary, 8.33 kHz) / 266.075 | H24 | Emergency 121.500/243.000; supplementary 127.330 (8.33 kHz) |
| Ground | Oostende Ground | 121.980 (8.33 kHz) | H24 | Supplementary 127.330 (8.33 kHz) |
| VDF | Oostende Homer | 120.600 / 121.500 / 118.180 (8.33 kHz) | H24 | Supplementary 127.330 (8.33 kHz) |
| Centre / FIR | Brussels FIR (EBBU) | Per current AIRAC | H24 | No dedicated FIR brief in-library — see [Europe (Continental) Airspace briefing](../../../../airspace/europe.md) 🟧 |

*Source: AIP Belgium (skeyes eAIP), AD 2 EBOS, retrieved 2026-07-26.*

---

## 9. Navaids

| Aid | Ident | Freq | Hours | Notes |
|---|---|---|---|---|
| NDB | ONO | 399.5 kHz | H24 | Coverage 50 NM; holding fix (§10) |
| Locator (L) | DD | 352.5 kHz | H24 | 0.85 NM WSW of THR 08; coverage 25 NM |
| Locator (L) | OO | 375 kHz | H24 | Collocated with MM ILS 26; coverage 25 NM |
| ILS 08 (CAT I) — LOC | IMI | 111.550 | H24 | 076° GEO / 1.71 NM from THR 08; no back-beam; reliable within 35° either side of course |
| ILS 08 — GP | — | 332.750 | H24 | Slope 3°, RDH 52 ft |
| DME (ILS 08) | IMI | CH 52Y | H24 | Collocated with GP, 315 m from THR 08 |
| ILS 26 (CAT I) — LOC | IOS | 111.300 | H24 | 256° GEO / 1.65 NM from THR 26; no back-beam; reliable within 35° either side of course |
| ILS 26 — GP | — | 332.300 | H24 | Slope 3°, RDH 51 ft |
| DME (ILS 26) | IOS | CH 50X | H24 | Collocated with GP, 339 m from THR 26 |
| OM (ILS 26) | dash/dash | 75 MHz | H24 | 4.66 NM from THR 26 |
| MM (ILS 26) | dot/dash | 75 MHz | H24 | 0.61 NM from THR 26 |

*Source: AIP Belgium (skeyes eAIP), AD 2 EBOS, retrieved 2026-07-26.*

---

## 10. Arrival

- **Transition altitude / level:** TA **4,500 ft AMSL** (Oostende CTR) `[AIP Belgium AD 2 EBOS]`.
- **Speed:** Standard 250 KIAS below FL100 (EU/ICAO norm); holding entry speed limited to **185 KIAS max** (§ONO holding, below).
- **Preferential runway logic:** Night window (21:00–07:00 / 20:00–06:00): if crosswind ≤15 kt and tailwind ≤5 kt (traffic permitting), **RWY 26 for take-off, RWY 08 for landing**; PIC may request another runway if the runway-in-use is considered unsuitable for safety/performance, subject to ATC acceptance.
- **Approaches (names only — verify minima on current AIRAC charts):**

| RWY | Approach | IAF | FAF/FAP alt | Notes |
|---|---|---|---|---|
| 08 | ILS or LOC (CAT I); RNP APCH | AUZON (RNP) | @2,000 ft (OS08F, RNP) | Min RVR 550 m for CAT I ops; RNP APCH VPA 3.00°, TCH 52 ft |
| 26 | ILS or LOC (CAT I); NDB; RNP APCH | NOYON (RNP) | @2,000 ft (OS26F, RNP) | Min RVR 550 m for CAT I ops; RNP APCH VPA 3.00°, TCH 51 ft |

- **STARs (names only):** **COA5A** (via COA DVOR/ONO NDB, RNAV1 overlay via DENUT/OS902/OS901/FERDI/KOK transitions) — see AD 2.EBOS-STAR charts for full transition detail; fly the charted current-AIRAC version.
- **LVP:** **Preparation phase** begins below 1,200 m visibility; **operations phase** begins when RVR falls below 600 m; **termination phase** when visibility exceeds 800 m and improving `[AIP Belgium AD 2 EBOS]`.
- **Missed approach watch-items:** If not landed within 30 minutes of the normal approach/landing allowance, **leave Oostende CTR/TMA on track 045° MAG below 1,650 ft QNH** and land at the first suitable aerodrome with visual conditions `[AIP Belgium AD 2 EBOS]` — a distinctive, AIP-published fallback procedure specific to this field.

---

## 11. Departure

- **SIDs (names only — fly the charted version):** Straight-departure family via **ONO** (COA6S, KOK5S, NIK4S, MAK6S, FERDI4S, SASKI6S — the latter two crossing EBR17, requiring ATC to obtain crossing clearance before airborne) and a turning-departure family via a 500 ft turn onto the DD 292/293 radial (COA7M, KOK6M, KONAN4M, MAK4M, FERDI4M, NIK4M, SASKI6M — several also crossing EBR17). RNAV1-equipped (GNSS or DME/DME/IRU with automatic runway update).
- **RNP / climb-gradient requirements:** RNAV 1 SIDs; **no critical navaid associated** — initial guidance to 3,000 ft assumes GNSS or INS/IRU use. See [`OM E — PBN and RNP Operations`](../../../../../flight-ops/pbn-and-rnp-operations.md).
- **Take-off minima:** **Minimum RVR 200 m for take-off**, except when authorised by the CAA or in an emergency `[AIP Belgium AD 2 EBOS]`.
- **Start-up / push-back:** **Pre-departure checks (including engine/power checks) are prohibited on the parking position** — performed instead at a dedicated run-up area after taxi clearance, one aircraft at a time by ATC clearance, at holding bays near RWY intersections A and M. Apron 2 stands **230–233 have no push-back service — self-manoeuvring only, max span width 43 m**.
- **ATC slot / CTOT & clearance:** No slot-coordination regime identified; standard clearance-delivery procedure via Tower/Ground.
- **De-icing:** **Available**, H24 `[AIP Belgium AD 2 EBOS]`; pad/procedure detail beyond availability not further specified in the reachable extract. See [`OM E — Cold Weather Operations`](../../../../../flight-ops/cold-weather-operations.md).

---

## 12. Noise & Environmental

- **Noise abatement (NAP):** Noise-abatement descent/approach using continuous-descent and reduced-power/reduced-drag techniques applies under published conditions; turbo-jet aircraft use the minimum certified landing flap setting unless the PIC determines otherwise for safety `[AIP Belgium AD 2 EBOS]`.
- **Night noise / dB limits:** 🟥 **Between 22:00 and 05:00 (21:00–04:00), movements of aircraft >8,618 kg MTOW certified to ICAO Annex 16 Vol. I Chapters 2, 3 or 5 are allowed only if their Quota Count (QC) is ≤12; movements with QC >12 are forbidden.** Training aircraft <2,000 kg MTOW require a noise certificate ≤76 dB(A) per Annex 16 Vol. I Part II or an "environmental surcharge" applies `[AIP Belgium AD 2 EBOS]`.
- **Engine run-up restrictions:** Engine test runs/idle checks in the open air without silencers are restricted to the minimum and require prior Airport Inspection permission; permitted only **06:00–22:00 (05:00–21:00)** except when authorised, and only at the holding bays near RWY intersections A and M `[AIP Belgium AD 2 EBOS]`.
- **Reverse thrust / idle-reverse policy:** **Reverse thrust shall not be used above idle power except for safety** `[AIP Belgium AD 2 EBOS]`. Between 22:00–05:00 (21:00–04:00), excessive reverse thrust should be avoided if conditions permit and a long landing considered instead.
- **APU policy:** APU shall be shut down at the earliest opportunity after arrival on stand and restarted only when essential; not left running unattended. Additional APU use outside normal parameters requires Airport Inspection approval, with **no exceptions 22:00–05:00 (21:00–04:00)** unless for safety.

---

## 13. Ground operations

- **Stands for our types:** Apron 1 (PCN 101/R/D/W/T, highest strength), Apron 2 (PCN 86/F/C/W/T), Apron 3 (PCN 52/F/C/X/T, GA/cargo handling, Aviapartner). **B777-300-class aircraft taxiing to/from Apron 2 via TWY K shall always route via TWY C2** `[AIP Belgium AD 2 EBOS]` — a fleet-relevant routing note for any K Global widebody visiting this field. Aircraft taxi to stand on engine power on Aprons 1 and 2.
- **Push-back:** Apron 2 stands **230, 231, 232, 233 have no push-back service — self-manoeuvring only, max span width 43 m** `[AIP Belgium AD 2 EBOS]`. 🟥
- **Standard taxi routes:** TWY C1 usable only during HJ by aircraft ≤5,700 kg; turns from TWY B1↔K4 or D1↔K5 restricted to ICAO Code C aircraft max; TWY B1 limited to aircraft with OMGWS <9 m `[AIP Belgium AD 2 EBOS]`.
- **Hot spots / tight taxiways:** A dedicated **Hot Spots appendix** and **Ground Movement Responsibilities appendix** are published on the AD 2.EBOS-ADC charts — consult the current chart for named hot spots; not transcribed here per governance.
- **Follow-me:** **Available**, guides aircraft from runway exit to stand and stand to holding position; **no follow-me on Apron 1 unless requested** `[AIP Belgium AD 2 EBOS]`.

---

## 14. Weather & seasonal (durable)

- **Climate / prevailing wind:** North Sea-coastal temperate maritime climate; the AIP's published night runway-swap logic (crosswind/tailwind-triggered) reflects a real, recurring crosswind consideration at this coastal single-runway field.
- **Seasonal hazards:** No AIP-published seasonal-hazard narrative beyond the **"RWY strip soft after heavy rain"** caution (§3.3/§4); coastal sea fog and onshore wind are a general regional expectation, not independently detailed in the reachable extract.
- **Local effects:** Coastal location; no notable terrain effect at this sea-level field.

> **Live weather — pull at planning (T-2h):** METAR, TAF, TREND, SIGMET/AIRMET. Not stored here.

---

## 15. NOTAMs

> **Pull at planning (T-2h).** Perishable — not stored here. Check: runway/taxiway closures, navaid U/S, lighting, obstacle/crane, RFF downgrade, current SNOWTAM/RCR (runway condition), GPS/RAIM for RNP procedures. Source: official AIS / OFP NOTAM block.

---

## 16. Fuel & alternate planning notes

- **Typical role for us:** **Not in the K Global VAMSYS network** — no assigned role (departure/destination/alternate/tech-stop) this session. 🟧
- **Nearest suitable alternates:** No VAMSYS-designated alternates exist for this field. For general planning awareness only (not a company designation), the nearest Belgian fields with OM C briefs in this library are [**EBBR**](../ebbr/index.md) (Brussels) and [**EBLG**](../eblg/index.md) (Liège) — confirm suitability, runway/RFF adequacy and current minima independently before use. 🟧
- **Fuel-uplift notes:** **AVGAS 100LL and Jet A1, H24, confirmed** `[AIP Belgium AD 2 EBOS]`; Air BP fuel card **no longer accepted** — confirm payment method in advance. See [`OM E — Fuel Policy`](../../../../../flight-ops/fuel-policy.md).
- **Range/perf flags for our fleet:** Single 3,200 m runway is non-limiting for any K Global type at normal weights; the explicit **B777-300 TWY K→C2 routing note** (§13) is the one fleet-specific procedural item confirmed in the AIP. See [`OM B — Fleet Capability Matrix`](../../../../../fleet/capability-matrix.md).

---

## 17. Fleet-specific notes (optional)

- **B777-300-class aircraft** taxiing to/from Apron 2 via TWY K must route via TWY C2 — an AIP-published, fleet-relevant routing constraint (§13). Any K Global type in the A380/747-8F/An124/An225 class requires **prior coordination with Airport Authorities** before operating here (§5). No other type-specific consideration identified.

---

## 18. Open items (🟧 — confirm against AIP / current AIRAC)

- **K Global VAMSYS status** — EBOS is not currently in the VAMSYS network; category, base flag, taxi times and preferred alternates are all unassigned pending a future network decision.
- **QC formula detail** — the AIP publishes the QC calculation as QC = 10^[(G−85)/10] where "G" is a certified noise-level input; the full definition of "G" was truncated in the reachable extract — confirm the complete formula/table against the current AIP before using QC values operationally.
- **Departure noise-abatement altitude profile** (turbo-jet and propeller climb/power-reduction schedule by altitude band) — table values were truncated in the reachable extract; confirm on the current chart/AIP.
- **Named taxiway hot spots** — a dedicated Hot Spots appendix exists on the AD 2.EBOS-ADC charts; not transcribed here per governance (names-only/no-transcription rule) — consult the current chart.
- **Seasonal weather climatology** (fog frequency, prevailing wind rose) — not detailed in the reachable AIP extract; pull from MET/climatological sources at a future build pass if this field is added to the active network.
- **De-icing pad location/provisioning detail** — availability confirmed H24 but exact pad/procedure not detailed in the reachable extract.

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim material (current-AIRAC charts) informs content but is not listed here.*

- **AIP Belgium (skeyes eAIP), AD 2 EBOS** — https://ops.skeyes.be/html/belgocontrol_static/eaip/eAIP_Main/html/eAIP/EB-AD-2.EBOS-en-GB.html (also PDF: https://ops.skeyes.be/html/belgocontrol_static/eaip/eAIP_Main/pdf/EB_AD_2_EBOS_en.pdf) — retrieved 2026-07-26, **direct primary-source retrieval, full AD 2 EBOS extract obtained**. Primary source for all runway, declared-distance, communications, navaid, LVO, noise/QC, ground-operations and procedural data in this brief.
- Wikipedia — "Ostend–Bruges International Airport" — https://en.wikipedia.org/wiki/Ostend%E2%80%93Bruges_International_Airport (retrieved 2026-07-26). *History, general field description, city/location cross-check.*

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-26 | Built from AIP Belgium (skeyes); K Global fields from live VAMSYS (EBOS not in network — flagged); 4-page pack. |
