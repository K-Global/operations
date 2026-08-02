# LEMD — Adolfo Suárez Madrid-Barajas · Airport Briefing

**LEMD / MAD** · Madrid, Spain · Europe
**Version** v0.1 · **Updated** 2026-07-26 · **Status** Draft

> **Read-me:** Planning aid for the sim, not a chart. Static data is drawn from AIP España (ENAIRE eAIP, AD 2-LEMD) plus standard public aeronautical data; approaches/SIDs/STARs are listed **by name only or flagged not-yet-confirmed** — fly the charted current-AIRAC version. Live weather/NOTAMs are pulled at planning (§14/§15). Open 🟧 items are listed in §18. Flag legend 🟥 restriction/hazard · 🟧 caution/unverified · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| ARP (lat/long) | 40°28′20″N / 3°33′39″W (40.4722, -3.5608) `[AIP España AD 2-LEMD 2.2]` |
| Field elevation | **609 m / 1998 ft AMSL** (reference temperature 34°C; low average temperature 5°C) |
| Mag variation | **0° (2020)**, annual change 8.1′E |
| Time zone | UTC+1 (CET) / UTC+2 (CEST, EU DST observed) |
| Runway(s) | Four parallel **segregated one-way pairs**: **14L/32R**, **14R/32L** (3,500 m / 3,988 m), **18L/36R**, **18R/36L** (3,500 m / 4,179 m) — see §5/§7 |
| Preferential runway | Wind/noise/time-of-day dependent **segregated North/South configuration** — North (arrivals 32L/32R, departures 36L/36R) is preferential 0700–2300 LT; South (arrivals 18L/18R, departures 14L/14R) is non-preferential — see §10/§11 |
| Longest LDA | 3,365 m (18R) among the landing-only runways; 4,179 m TORA (36L) among the takeoff-only runways |
| Approaches | **ILS CAT III on all four landing-designated runways** (32R/MBB, 32L/MAA, 18L/IML, 18R/IMR); **14L/14R/36R/36L have no published approach — takeoff-only** |
| RFF category | **CAT 10** (ICAO highest category) 🟩 |
| Control type | **Radar** — Madrid TWR/SDP on the field; **Madrid APP** terminal; **Madrid ACC (LECM)** en route — no curated FIR brief exists yet; see [Europe — Airspace Briefing](../../../../airspace/europe.md) 🟧 |
| Elevation class | 1,998 ft AMSL — not classically "hot-and-high," but the **Meseta plateau elevation combined with a 34°C reference temperature** is a genuine summer-afternoon performance consideration on the shorter runway pair — see §3.5/§17 🟧 |
| Special-airport status | 🟥 **Four fully segregated one-way runways** (each physical runway is takeoff-only or landing-only, never both) — an unusual and demanding independent-parallel geometry; **T1-2-3 and T4-T4S are two separate terminal complexes, not connected airside** — see §5/§13 |
| Customs / PoE | **Yes — H24** (T1 and T4S international halls) `[AIP España AD 2-LEMD 2.3]` 🟩 |
| K Global category | **L** `[VAMSYS mirror 2026-07-25]` 🟩 |
| K Global base | **No** `[VAMSYS mirror 2026-07-25]` |
| Company preferred alternates | **LEBL, LEPA, LPPT** `[VAMSYS mirror 2026-07-25]` |
| Taxi-in / taxi-out (VAMSYS) | **16 min / 20 min** `[VAMSYS mirror 2026-07-25]` |

---

## 2. Validation summary

| Domain | Flag | Note |
|---|---|---|
| Terrain / CFIT | 🟩 | Field sits on the flat Meseta plateau at 1,998 ft; the Sistema Central (Guadarrama range, peaks to ~2,400 m) lies well north of the field and is not a close-in arrival/departure factor at normal profiles. Exact MSA-sector figures not independently re-verified this pass 🟧. |
| Runway length vs fleet perf | 🟩 | 3,500–4,179 m runways are ample for any K Global widebody; the plateau elevation + high summer reference temperature (34°C) is a performance-derate input on hot afternoons, not a length-limiting one. |
| Approach availability / minima | 🟩 | CAT III on all four landing-designated runways — deep low-visibility capability; ILS sub-category (IIIA/IIIB) not confirmed from a primary table this pass 🟧. |
| Airspace / traffic / control | 🟥 | One of Europe's busiest airports; four-runway independent segregated-parallel operation drives sustained high controller/crew workload and full A-CDM/FAM sequencing — see §3.2/§13. |
| Weather / seasonal hazard | 🟧 | Continental Meseta climate — hot dry summers, cold winters with an active snow plan (1 Nov–31 Mar); occasional winter fog, not independently quantified this pass. |
| Curfew / slots / hours | 🟥 | **Hard night noise-quota ban (CR-4 and above) 23:00–06:59 LT**; marginally-compliant aircraft banned outright day and night since 2012; slot-coordination level not independently confirmed this pass 🟧 — see §6/§12. |
| RFF category vs our types | 🟩 | CAT 10 — above any of our fleet's requirement. |
| Fuel availability | 🟩 | Jet A-1, H24, no stated limitations. |
| Customs / handling / security | 🟩 | H24 customs/immigration and H24 handling confirmed at AIP level; specific K Global handling agent not yet contracted/confirmed 🟧. |

---

## 3. Threat & Error Management (TEM)

### 3.1 CFIT / Terrain 🟩
LEMD sits at 1,998 ft AMSL on the flat Meseta plateau. The nearest significant terrain is the **Sistema Central / Sierra de Guadarrama** (peaks to roughly 2,400 m), well north of the field and not a close-in factor for standard arrival, departure or missed-approach paths on any of the four segregated runways. Verify the current-chart MSA ring as routine practice; exact grid-MORA figures for the immediate terminal area were not independently re-confirmed this pass 🟧.

### 3.2 Airborne conflict / traffic 🟥
Madrid-Barajas runs **four fully segregated one-way runways** — each physical runway is dedicated to takeoff-only or landing-only, never both — giving two parallel "arrival avenues" (32L/32R by day, 18L/18R by night-reciprocal) and two parallel "departure avenues" (36L/36R, 14L/14R). This independent-parallel geometry, one of the more unusual major-hub layouts in Europe, sustains continuous high traffic density under **Madrid APP** and full **A-CDM/FAM** (Flight Activation Monitoring, EUROCONTROL) sequencing discipline — TOBT/TSAT compliance is not optional here (§13). Cross-ref [Europe — Airspace Briefing](../../../../airspace/europe.md) for the enroute Madrid ACC (LECM) picture; **no dedicated LECM FIR brief exists in the library yet** 🟧.

### 3.3 Runway excursion 🟧
Four of the eight runway ends carry a **displaced threshold** reducing usable LDA: 32R (500 m), 32L (928 m), 18L (500 m), 18R (814 m) — all on the landing-designated runways. Combined with segregated one-way use (no reciprocal-direction option if the assigned runway is unavailable), a runway/navaid outage has an outsized operational impact. RESA notes on 32L/32R/18L/18R reference **"item 23 (EMAS)"** in the source AIP extract — confirming engineered materials arresting system infrastructure exists at the north-side runway ends, but the specific system/location detail was not independently obtained this pass 🟧.

### 3.4 Weather threat 🟧
Continental Meseta climate: hot, dry summers (reference temperature 34°C) and cold winters (average low 5°C) with an active **snow-removal plan (1 Nov–31 Mar)** and GRF (Global Reporting Format) runway-condition reporting. Summer convective activity over the Iberian plateau is standard regional climatology (see [Europe — Airspace Briefing](../../../../airspace/europe.md) §11). No LEMD-specific fog-frequency statistic was found in reachable sources this pass — treat winter early-morning fog as a possibility to verify at planning, not a confirmed signature hazard on the scale of a coastal/basin field. See §14.

### 3.5 Operational considerations 🟥
Three durable planning constraints: (1) the **segregated four-runway independent-parallel geometry** demands full A-CDM/TOBT-TSAT discipline and precise runway-role awareness (never assume a runway is bidirectional); (2) the **hard night noise-quota ban** — CR-4-or-higher aircraft cannot take off or land 23:00–06:59 LT, and marginally-compliant aircraft are banned outright at all hours — a genuine schedule constraint (§6/§12); and (3) **Terminal 1-2-3 and Terminal 4-T4S are two physically separate complexes, roughly 3 km apart and not connected airside** — any connection crossing the two complexes requires exiting the secure zone, a shuttle bus, and re-clearing security, historically 60+ minutes (§13). RFF, navaid and CAT III infrastructure are all first-tier; most open items are currency/administrative confirmations rather than safety-critical gaps.

---

## 4. Cautions & Warnings

- **Every runway is one-way only** — 14L, 14R, 36R and 36L are **takeoff-only**; 32R, 32L, 18L and 18R are **landing-only**. Never assume or request the reciprocal role.
- **Four displaced thresholds** (32R 500 m, 32L 928 m, 18L 500 m, 18R 814 m) materially reduce usable LDA on those runways — brief the actual landing distance, not the physical runway length.
- **Terminal complexes are not airside-connected** — a same-aircraft or crew connection between the T1-2-3 cluster and the T4-T4S cluster requires landside transfer and full security re-clearance; build real connection time.
- **Hard night noise-quota ban 23:00–06:59 LT** for CR-4-and-above aircraft — a late schedule slip risks an outright prohibited movement, not just a fine.
- **Aerodrome closed to piston-engined aircraft and to training operations** — a standing local restriction, not a NOTAM item.
- **A-CDM/TOBT-TSAT compliance is mandatory** — EUROCONTROL's FAM system will suspend an inactive flight plan; keep TOBT/EOBT current from three hours before EOBT.
- **1983 Madrid Airport runway collision** (historical/reputational note): a fatal ground collision on the runway system in poor visibility remains a reference case in Spanish aviation-safety history — no current operational impact, but underlines why segregated-runway discipline and low-visibility taxi procedure are taken seriously here.

---

## 5. Aerodrome category, restrictions & crew qualification

- **Special-airport / category:** Not operator-categorised as a restricted-crew "special airport" in reachable sources; the standing crew-briefing items are the **segregated one-way-runway geometry** and the **CAT III low-visibility environment** on all four landing runways. 🟥
- **Crew-qualification gate:** CAT II/III currency required for full-capability ops into any of the four CAT III-equipped landing runways. 🟧
- **Operating restrictions / bans:** Closed to piston-engined aircraft; closed to training operations; all aircraft must have a contracted handling agent; General/Business Aviation aircraft under 10,000 kg MTOW and/or fewer than 20 seats must engage one of two airport-authorised GA/Business managers. No RNP AR ban found in reachable sources — verify current AIRAC. 🟧
- **Overflight / entry / permits:** Standard EU/Schengen and non-Schengen international arrival; no special state permit required. 🟩
- **Operations notes:** Airport operator — **Aena**. ANSP — **ENAIRE** (Madrid APP/TWR; Madrid ACC LECM en route). Real-time (day-of-operation) slot requests are handled through the Airport Operations Center.

---

## 6. General / hours / services

| Item | Value | Flag |
|---|---|---|
| ATS hours | H24 | 🟩 |
| AD operating hours | H24 | 🟩 |
| Night / curfew restrictions | **Night noise-quota ban 23:00–06:59 LT** for CR-4-or-higher aircraft; marginally-compliant aircraft banned day and night since 2012 | 🟥 |
| RFF category | **CAT 10** | 🟩 |
| Fuel | Jet A-1, H24, no stated uplift limitations | 🟩 |
| PCN | Runway-specific — see §7; apron/taxiway PCN varies widely by ramp/stand, 59–150 range | 🟩 |
| Customs | H24 (T1 and T4S international halls) | 🟩 |
| Handling / FBO | Multiple ramp agents (Groundforce, South Europe Ground Services, Aviapartner) plus dedicated GA/Business FBOs; specific K Global contract not confirmed 🟧 | 🟧 |

---

## 7. Runways & declared distances

| RWY | Dimensions | Surface / PCN | TORA | TODA | ASDA | LDA | Notes |
|---|---|---|---|---|---|---|---|
| 14L | 3,500 × 60 m | Asphalt / PCN 133/F/A/W/T | 3,500 m | 3,800 m | 3,500 m | NU | **Takeoff-only** — no approach published |
| 32R | 3,500 × 60 m | Asphalt / PCN 133/F/A/W/T | NU | NU | NU | 3,000 m | **Landing-only**; THR displaced 500 m; ILS CAT III (MBB); RESA note references EMAS 🟧 |
| 14R | 3,988 × 60 m | Asphalt / PCN 83/F/A/W/T | 3,988 m | 4,210 m | 3,988 m | NU | **Takeoff-only** — no approach published |
| 32L | 3,988 × 60 m | Asphalt / PCN 83/F/A/W/T | NU | NU | NU | 3,060 m | **Landing-only**; THR displaced 928 m; ILS CAT III (MAA); RESA note references EMAS 🟧 |
| 18L | 3,500 × 60 m | Asphalt / PCN 134/F/A/W/T | NU | NU | NU | 3,000 m | **Landing-only**; THR displaced 500 m; ILS CAT III (IML) |
| 36R | 3,500 × 60 m | Asphalt / PCN 134/F/A/W/T | 3,500 m | 3,800 m | 3,500 m | NU | **Takeoff-only** — no approach published |
| 18R | 4,179 × 60 m | Asphalt / PCN 111/F/A/W/T | NU | NU | NU | 3,365 m | **Landing-only**; THR displaced 814 m; ILS CAT III (IMR) |
| 36L | 4,179 × 60 m | Asphalt (first 273.5 m concrete, PCN 81/R/B/W/U) / PCN 111/F/A/W/T | 4,179 m | 4,609 m | 4,179 m | NU | **Takeoff-only** — no approach published |

*Source: AIP España AD 2-LEMD 2.12/2.13, AIRAC AMDT 408/26, eff. 09-JUL-26 (retrieved 2026-07-26). All distances in metres. NU = not usable for that operation on this one-way runway.*

---

## 8. Communications

| Service | Callsign | Frequency | Hours | Notes |
|---|---|---|---|---|
| ATIS | Madrid/Barajas Information | 118.255 (ARR) · 130.855 (DEP) | H24 | D-ATIS also provided |
| Delivery / Clearance | Madrid Clearances | 130.080 (East: RBO/PINAR/NANDO) · 130.355 (West: SIE/ZMR/BARDI/CCS/VTB) | H24 | DCL datalink clearance available |
| Ground / Apron (SDP) | Barajas Apron | 121.705 (S-South) · 121.855 (S-North) · 123.005 (W-South) · 123.255 (W-North) · 123.480 (backup) | H24 | Apron Management Service |
| Ground Movement (GMC) | Barajas Ground | 121.630 (E-South) · 121.755 (E-North) · 121.980 (Central-South) · 123.155 (Central-North) | H24 | |
| Tower | Barajas TWR | 118.080 (ARR 18R/DEP 36L) · 118.155 (ARR 32L/DEP 14R) · 118.680 (ARR 18L/DEP 36R) · 118.980 (ARR 32R/DEP 14L) · 120.155/120.655 (backup) | H24 | Frequency assignment follows the active runway pairing |
| Approach | Madrid APP | 118.400 (APP/I) · 118.755/124.030/134.955 (APP/L) · 128.700 (APP/H) · 136.105 (APP) · 127.100 (Initial) · 127.505 (Final) · 124.230 (Dep W) · 131.175 (Dep E) · 130.805/134.030 (backup) | H24 | Sector-specific — take the assigned frequency |
| Centre / FIR | Madrid ACC (LECM) | Per current AIRAC | H24 | No dedicated FIR brief in-library — see [Europe — Airspace Briefing](../../../../airspace/europe.md) 🟧 |

*Source: AIP España AD 2-LEMD 2.18, AMDT 408/26, eff. 09-JUL-26 (retrieved 2026-07-26).*

---

## 9. Navaids

| Aid | Ident | Freq | Hours | Notes |
|---|---|---|---|---|
| DVOR/DME | BRA | 116.450 MHz / CH 111Y | H24 | On field |
| ILS 32L | MAA | 109.900 MHz | H24 | **CAT III**; GP 333.800, DME CH 36X |
| ILS 32R | MBB | 109.100 MHz | H24 | **CAT III**; GP 331.400, DME CH 28X |
| ILS 18L | IML | 111.500 MHz | H24 | **CAT III**; GP 332.900, DME CH 52X |
| ILS 18R | IMR | 110.700 MHz | H24 | **CAT III**; GP 330.200, DME CH 44X |

*On-field navaids only; approximately ten additional area VORs (PDT, RBO, SIE, SSY, NVS, TLD, CNR, NEA, BAN, CJN) support the Madrid TMA/enroute structure per AIP España AD 2-LEMD 2.19, AMDT 408/26, eff. 09-JUL-26 (retrieved 2026-07-26).*

---

## 10. Arrival

- **Transition altitude / level:** TA 3,962 m / 13,000 ft MSL (unusually high vs. sea-level fields, reflecting the plateau elevation); TL by QNH — verify current chart. 🟧
- **Speed:** Standard 250 KIAS below FL100 (EU/ICAO norm) — confirm no local override on current chart.
- **Preferential runway logic:** **Segregated North/South configuration.** By day (0700–2300 LT), preferential North config lands on **32L/32R**; non-preferential South config lands on **18L/18R**. By night (2300–0700 LT), preferential North narrows to **32R** only, non-preferential South to **18L** only. Madrid ACC assigns arrivals by TMA geographic entry (East traffic → 32R/18L, West traffic → 32L/18R) except when safety or flow requires otherwise.
- **Approaches (names only — verify minima on current AIRAC charts):**

| RWY | Approach | Notes |
|---|---|---|
| 32R | ILS CAT III (MBB) | THR displaced 500 m |
| 32L | ILS CAT III (MAA) | THR displaced 928 m |
| 18L | ILS CAT III (IML) | THR displaced 500 m |
| 18R | ILS CAT III (IMR) | THR displaced 814 m |
| 14L/14R/36R/36L | — none — | **Never arrival runways** — takeoff-only, no approach published |

- **STARs (names only):** Not confirmed in reachable research pass — pull the current-AIRAC STAR list at planning. 🟧
- **LVP:** CAT III procedures apply on all four landing runways; exact RVR/trigger figures not confirmed this pass. 🟧
- **Missed approach watch-items:** Terrain is not the primary driver (flat plateau clear of close-in high ground); the operative missed-approach concern is re-sequencing into a very high-density, four-runway segregated-parallel traffic environment under full A-CDM flow control.

---

## 11. Departure

- **SIDs (names only — fly the charted version):** Not confirmed in reachable research pass — pull the current-AIRAC SID list at planning; note that a contingency **ODP (LEMD1N / LEMD1W)** is referenced in the local regulations for use if Madrid APP contact cannot be established after departure. 🟧
- **RNP / climb-gradient requirements:** Local regulation requires any RNAV1-noncompliant aircraft to report on first contact with Clearance; verify RNP/gradient per SID on the current chart. See [`OM E — PBN and RNP Operations`](../../../../../flight-ops/pbn-and-rnp-operations.md).
- **Take-off minima:** Published per AIP — exact figures not confirmed this pass. 🟧
- **Start-up / push-back:** Full **A-CDM** procedure (TOBT/TSAT/EOBT) — request start-up between TOBT-5 and TSAT+5; DCL datalink clearance available; APU use prohibited during taxi at remote-stand towing zones (Ramps 5/6); **powerback (reverse-thrust push) is prohibited**.
- **ATC slot / CTOT & clearance:** Full **A-CDM/FAM** (Flight Activation Monitoring via EUROCONTROL) — an inactive flight plan (stale TOBT/EOBT) can be automatically suspended; keep the flight plan current from three hours before EOBT. Slot-coordination level not independently confirmed this pass. 🟧
- **De-icing:** Dedicated frequencies exist for **RWY 36L (123.330)** and **RWY 36R (130.255)** de-icing operations; season per the published snow plan (1 Nov–31 Mar). See [`OM E — Cold Weather Operations`](../../../../../flight-ops/cold-weather-operations.md).

---

## 12. Noise & Environmental

- **Noise abatement (NAP):** Segregated-runway/preferential-configuration logic (§10/§11) is the primary noise-management tool rather than a named NADP; no LEMD-specific NADP1/2 mandate confirmed in reachable sources. 🟧
- **Night noise / dB limits:** Aircraft classified **CR-4 or higher** (EPNdB-based Noise Quota classification) are **prohibited from taking off or landing 23:00–06:59 LT**; marginally-compliant subsonic jets (Annex 16 Vol. I, Ch.3, margin ≤5 EPNdB) have been banned outright, day and night, since 28 September 2012. Limited exceptions apply for safety, humanitarian and weather-driven delay cases.
- **Engine run-up restrictions:** Not confirmed in reachable sources — verify locally. 🟧
- **Reverse thrust / idle-reverse policy:** **Powerback (reverse-thrust for stand exit) is prohibited.** Standard idle-reverse on landing not separately restricted in reachable sources.

---

## 13. Ground operations

- **Stands for our types:** Widebody-capable Code E/F stands are concentrated across the T1-2-3 apron (Ramps 0–7) and the T4/T4S apron complex; exact current widebody gate assignment for our operation not confirmed 🟧. | 🟧
- **Push-back:** Handling-agent-managed; towed exit at remote Ramp 5/6 stands requires **electric tractors only, engines switched off**; contact-stand engine start above idle is prohibited until the aircraft is aligned on the taxiway.
- **Standard taxi routes:** Extensive published standard routes by stand and configuration (AD 2-LEMD 2.20) — confirm with Ground/Apron on the day; Code E/F aircraft (incl. A346, A35K, B77W, B764, A388) are subject to named taxiway wingspan/oversteer restrictions.
- **Hot spots / tight taxiways:** 🟥 Code-letter-restricted taxiway network with numerous simultaneous-occupancy conflict rules (e.g. TWY Z2/Z4 cannot be used simultaneously by two Code E aircraft; TWY EB1 wingspan-limited if TWY EC1 holds an A380) — high ground-workload complexity reflecting the four-runway segregated layout.
- **Follow-me:** Provided sunset-to-sunrise for specific remote-ramp stands (Ramps 1/2/4) and on pilot request in adverse visibility.
- **Terminal transfer:** 🟥 **T1-2-3 and T4-T4S are two separate complexes ~3 km apart, not connected airside** — any inter-complex connection requires landside transfer and full security re-clearance (historically 60+ minutes).

---

## 14. Weather & seasonal (durable)

- **Climate / prevailing wind:** Continental Meseta climate — hot, dry summers (reference temperature 34°C) and cold winters (average low 5°C); no maritime moderation at this inland plateau field.
- **Seasonal hazards:** Active **snow-removal plan (1 Nov–31 Mar)** with GRF runway-condition reporting; summer convective storms are standard regional climatology (see [Europe — Airspace Briefing](../../../../airspace/europe.md) §11). No LEMD-specific fog-frequency data found this pass. 🟧
- **Local effects:** None beyond standard continental-plateau seasonal variation; no coastal/basin fog signature comparable to a maritime field.

> **Live weather — pull at planning (T-2h):** METAR, TAF, TREND, SIGMET/AIRMET. Not stored here.

---

## 15. NOTAMs

> **Pull at planning (T-2h).** Perishable — not stored here. Check: runway/taxiway closures (esp. the segregated-runway pairing and A-CDM procedure status), navaid U/S, CAT III equipment status, lighting, obstacle/crane, RFF downgrade, GPS/RAIM for RNP procedures, current AUP/UUP or RAD constraints in Spanish airspace. Source: official AIS / OFP NOTAM block.

---

## 16. Fuel & alternate planning notes

- **Typical role for us:** Destination / origin field — not a K Global base. `[VAMSYS mirror 2026-07-25]`
- **Nearest suitable alternates:** Company preferred alternates [**LEBL**](../lebl/index.md) (Barcelona), **LEPA** (Palma de Mallorca), **LPPT** (Lisbon) `[VAMSYS mirror 2026-07-25]` — confirm suitability, runway/RFF adequacy and current minima per leg.
- **Fuel-uplift notes:** Jet A-1, H24, no stated limitations. See [`OM E — Fuel Policy`](../../../../../flight-ops/fuel-policy.md).
- **Range/perf flags for our fleet:** Field length non-limiting for any K Global type on the longer runway pair (18R/36L, 4,179/4,609 m). The plateau elevation (1,998 ft) combined with a 34°C reference temperature is a genuine, if modest, hot-day performance-derate input on departure planning — see [`OM B — Fleet Capability Matrix`](../../../../../fleet/capability-matrix.md). 🟧

---

## 17. Fleet-specific notes (optional)

- No K Global type carries a field-length or field-elevation limitation at LEMD. The operative planning items are (1) CAT III currency for winter/low-vis operations on the four landing runways — see [`OM E — Low Visibility Operations`](../../../../../flight-ops/low-visibility-operations.md) — and (2) the T1-2-3 / T4-T4S airside split, which affects connection planning more than aircraft performance. See [`OM B — Fleet Capability Matrix`](../../../../../fleet/capability-matrix.md).

---

## 18. Open items (🟧 — confirm against AIP / current AIRAC)

- **Runway naming vs. legacy reference material** — confirmed current AIRAC (AMDT 408/26) designations are 14L/32R, 14R/32L, 18L/36R, 18R/36L; consistent with the anchor used to build this pack.
- **ILS sub-category (IIIA/IIIB/IIIC)** for MAA/MBB/IML/IMR — not confirmed from a primary table this pass.
- **EMAS system specifics** — RESA notes on 32L/32R/18L/18R reference "item 23 (EMAS)" in the source extract; exact location/spec not independently obtained.
- **SIDs/STARs (current names)** — not obtained in this research pass; pull the live current-AIRAC procedure list before use.
- **Slot-coordination level** (IATA Level 1/2/3) — not independently confirmed.
- **Take-off minima, engine run-up restriction, exact LVP/CAT III RVR trigger values** — none confirmed in reachable sources.
- **Handling agent contracted for our operation and confirmed turnaround time** — not yet established.
- **MSA/grid-terrain figures for the immediate terminal area** — general Sistema Central/Meseta context given; not independently re-verified against a current chart.
- **Winter fog frequency** — no LEMD-specific statistic found; treat as a possibility to verify at planning, not a confirmed signature hazard.

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim material (current-AIRAC charts) informs content but is not listed here.*

- **AIP España (ENAIRE eAIP), AD 2-LEMD 2.1–2.20**, AIRAC AMDT 408/26, eff. 09-JUL-26 — https://aip.enaire.es/aip/contenido_AIP/AD/AD2/LEMD/LE_AD_2_LEMD_en.pdf (retrieved 2026-07-26). *ARP/elevation, runway geometry/declared distances/PCN, ILS idents/frequencies, ATC frequencies, RFF category, night noise-quota regulation, preferential configuration, A-CDM procedure.*
- Aeropuerto Madrid-Barajas — terminal guide — https://www.aeropuertomadrid-barajas.com/eng/madrid-airport-terminals.htm (retrieved 2026-07-26). *T1-2-3 / T4-T4S complex split and airside-connection detail.*
- Blacklane — "A 2026 Guide to Madrid Barajas Airport (MAD)" — https://www.blacklane.com/en/blog/travel/airports/a-guide-to-madrid-barajas-airport-mad/ (retrieved 2026-07-26). *Terminal layout corroboration.*
- OurAirports — https://ourairports.com/airports/LEMD/runways.html (retrieved 2026-07-26). *Runway/EMAS cross-check.*
- Wikipedia — "1983 Madrid Airport runway collision" (retrieved 2026-07-26). *Historical note.*

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-26 | Built from AIP España (ENAIRE); K Global fields from live VAMSYS; 4-page pack. |
