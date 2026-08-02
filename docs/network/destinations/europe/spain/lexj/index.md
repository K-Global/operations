# LEXJ — Seve Ballesteros-Santander · Airport Briefing

**LEXJ / SDR** · Maliaño, Cantabria, Spain · Europe
**Version** v0.1 · **Updated** 2026-07-26 · **Status** Draft — AIP España-derived

> **Read-me:** Planning aid for the sim, not a chart. Static data is drawn from AIP España (ENAIRE eAIP), AD 2-LEXJ; approaches/SIDs/STARs are listed **by name only or flagged not-yet-confirmed** — fly the charted current-AIRAC version. Live weather/NOTAMs are pulled at planning (§14/§15). Open 🟧 items are listed in §18. Flag legend 🟥 restriction/hazard · 🟧 caution/unverified · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| ARP (lat/long) | 43°25′37″N / 3°49′12″W (43.4269, -3.8200) `[AIP AD 2-LEXJ]` |
| Field elevation | **5 m / 16 ft AMSL** (reference temperature 24°C, low average 9°C) |
| Mag variation | **0° (2025 epoch)**, annual change 10′E |
| Time zone | UTC+1 (CET) / UTC+2 (CEST, EU DST observed) |
| Runway(s) | **11/29**, single runway, 2,320 × 45 m, asphalt |
| Preferential runway | Wind-driven; **RWY 29 approach is explicitly not recommended in S-SW gale conditions** (§3.4) — no other preferential rule published |
| Longest LDA | 2,320 m both ends — no displaced threshold on either runway |
| Approaches | **ILS CAT I on RWY 29 only** (ident STA); **RWY 11 has no ILS** — RNP Z (LPV), RNP Y (LNAV/LNAV-VNAV), VOR and NDB approaches only |
| RFF category | **CAT 7**, CAT 8 on demand (15 days' notice) 🟩 |
| Control type | **Procedural / non-radar** — Santander APP/TWR combined position, surveillance-assisted only within limited coverage of the Solórzano en-route radar; en-route under **Madrid ACC (LECM)** — see [Europe (Continental) Airspace Briefing](../../../../airspace/europe.md) 🟧 |
| Elevation class | Sea-level (16 ft) — **not** hot-and-high; the defining hazard is **coastal wind shear/turbulence on the RWY 29 approach**, not density altitude |
| Special-airport status | 🟥 **AIP-documented wind-shear/turbulence phenomenon on the RWY 29 approach** (§3.4); **no LVP** — a movement-area standstill procedure (PPOAM 550) substitutes; higher-code-letter (D/E) ops require a special published procedure — see §5/§13 |
| Customs / PoE | **Yes** — hours tied to published airport hours, not H24 🟧 |
| K Global category | 🟧 **Not set** `[VAMSYS mirror 2026-07-26]` — aerodrome category has not been assigned in VAMSYS; treat as unclassified pending confirmation |
| K Global base | **No** `[VAMSYS mirror 2026-07-26]` |
| Company preferred alternates | **LEBB (Bilbao), LFBZ (Biarritz), LFBD (Bordeaux-Mérignac)** `[VAMSYS mirror 2026-07-26]` |
| Taxi-in / taxi-out (VAMSYS) | 🟧 **Not available** `[VAMSYS mirror 2026-07-26]` |

---

## 2. Validation summary

| Domain | Flag | Note |
|---|---|---|
| Terrain / CFIT | 🟩 | Sea-level coastal field on the Cantabrian coast; no significant close-in terrain identified in reachable sources — the field's defining threat is wind-shear, not terrain. |
| Runway length vs fleet perf | 🟧 | 2,320 m single runway with intersection take-off options (down to 1,030 m) — workable for narrowbody/regional types; **materially short and single-runway for a K Global widebody (Code D/E) operation**, and the field publishes a special higher-code-letter-aircraft procedure (§13) referencing an A330-200 as the reference type. |
| Approach availability / minima | 🟧 | ILS CAT I on RWY 29 only; RWY 11 has RNP (LPV/LNAV), VOR and NDB only — no ILS. **No LVP available at this field** (§3.4). |
| Airspace / traffic / control | 🟧 | Procedural/non-radar tower environment; ATS surveillance system functions are suspended if the Solórzano or (LEBB-shared) radar feed is unavailable, and position/navigation-assistance functions are not guaranteed below 1,000 ft AMSL (north ATZ half) or 2,000 ft AMSL (south ATZ half). |
| Weather / seasonal hazard | 🟥 | **AIP-documented wind-shear/turbulence phenomenon specific to the RWY 29 approach** (§3.4) — the sharpest, most explicitly quantified hazard in this brief. |
| Curfew / slots / hours | 🟧 | Not H24 — published hours with PPR extension; PPR required for non-scheduled-commercial operations. |
| RFF category vs our types | 🟩 | CAT 7 (CAT 8 on 15 days' request) — adequate for the network. |
| Fuel availability | 🟩 | Jet A-1 and 100LL confirmed via EXOLUM, hours tied to AD operating hours. |
| Customs / handling / security | 🟧 | Two named handling agents (South Europe Ground Services for commercial + GA; United Aviation Services for GA <10 t/<20 seats); customs hours tied to AD hours, not H24. |

---

## 3. Threat & Error Management (TEM)

### 3.1 CFIT / Terrain 🟩
LEXJ sits at 16 ft AMSL on the Cantabrian coast; no significant close-in high terrain was identified in reachable AIP text for this field specifically. This is not the operative threat here — verify the MSA ring on the current chart as routine practice, but terrain is not the field's defining hazard (contrast with the neighbouring LEBB field).

### 3.2 Airborne conflict / traffic 🟧
Santander operates a **combined APP/TWR position** with ATS surveillance systems used only to assist aerodrome control — final-approach flight-path monitoring, other-traffic monitoring near the field, and separation between successive departures. **All of these functions are suspended if the Solórzano radar is unavailable**, and position/navigation-assistance to other traffic is **not guaranteed below 1,000 ft AMSL in the northern ATZ half or below 2,000 ft AMSL in the southern half**. Brief for a procedural-control mindset, not a fully radar-assured environment. En-route control is Madrid ACC (LECM) — see [Europe (Continental) Airspace Briefing](../../../../airspace/europe.md) 🟧.

### 3.3 Runway excursion 🟩
No displaced thresholds on RWY 11 or RWY 29 — both TORA/TODA/ASDA/LDA are a symmetric 2,320 m (with 2,380 m TODA each way). Intersection take-offs are published at Y2/Y3 (RWY 11) and Y1/Y2 (RWY 29), down to 1,030 m at the shortest — confirm the correct reduced distance if an intersection departure is used. No unusual excursion driver identified beyond standard wet/contaminated-runway caution.

### 3.4 Weather threat 🟥
The AIP **explicitly documents a wind-shear/turbulence phenomenon on the RWY 29 approach**: Cantabria's orographic conditions combine with the field's location such that an **S-SW wind measured at THR 29 between 190° and 220°, at 20 kt or more, with frequent gusts above 30 kt, generates severe turbulence extending up to 10 NM from the field, from the surface to an estimated 1,800 ft**. The AIP's own recommendation is direct: **"the THR 29 approach is not recommended" under these conditions.** This is a quantified, named, primary-source hazard — not a generic caution — and should be the first weather item briefed for any arrival here. See also [`OM E — Adverse Weather and Windshear`](../../../../../flight-ops/adverse-weather-and-windshear.md). **No Low Visibility Procedures (LVP) exist at this field**; instead, a **Movement-Area Operational Standstill Procedure (PPOAM 550)** applies below RVR 800 m (single-aircraft taxiing 550-800 m RVR; full standstill below 550 m) — see [`OM E — Low Visibility Operations`](../../../../../flight-ops/low-visibility-operations.md). A defined snow-plan season (1 Dec-31 Mar) applies.

### 3.5 Operational considerations 🟧
Three durable constraints define this field: (1) the **quantified RWY 29 wind-shear phenomenon** (§3.4) is the field's signature threat and should drive a real go/no-go decision in S-SW gale conditions; (2) **no LVP** — PPOAM 550 substitutes, which is materially more restrictive for ground movement than a standard LVP regime; (3) **higher-code-letter (D/E) operations require a dedicated published procedure** (§5/§13) referencing an A330-200 as the reference type, with default parking at PRKG 10 and mandatory oversteering at several named turns. Bird activity (gulls, mid-June to mid-September) is also AIP-documented (§14).

---

## 4. Cautions & Warnings

- **AIP-documented wind shear on the RWY 29 approach** — S-SW wind 190-220° at ≥20 kt with gusts >30 kt generates severe turbulence up to 10 NM out, surface to ~1,800 ft; the AIP itself recommends **not** flying the RWY 29 approach under these conditions.
- **No Low Visibility Procedures (LVP)** — the PPOAM 550 standstill procedure applies instead, which is more restrictive for taxi/ground movement than LVP at other fields.
- **RWY 11 has no ILS** — only RNP (LPV/LNAV), VOR and NDB approaches are published; do not expect an ILS option on this runway.
- **ATS surveillance functions are suspended** if the Solórzano radar is unavailable, and are not guaranteed below 1,000-2,000 ft AMSL within the ATZ — brief for procedural control.
- **Gull concentrations** (mid-June to mid-September, peaking July-August) driven by flying-ant swarms after rain — a real, seasonal bird-strike risk on/near the runway.
- **Higher-code-letter (D/E) aircraft require a special published procedure** — do not plan a widebody arrival without briefing the PRKG 10 default-stand and oversteer requirements (§13).
- A fixed radar-test transponder near the field (Mode A 7777) can generate spurious TCAS traffic advisories on pre-version-7 TCAS equipment — these do not represent real traffic.

---

## 5. Aerodrome category, restrictions & crew qualification

- **Special-airport / category:** Not formally ICAO-categorised as restricted-crew in reachable AIP text; VAMSYS category is **unset** 🟧. The wind-shear-on-RWY-29 hazard and the dedicated higher-code-letter-aircraft procedure both point to a field warranting a specific company briefing/training gate — confirm against OM B/training standards. 🟧
- **Crew-qualification gate:** No CAT II/III relevant here (no LVP, ILS CAT I only on RWY 29) — the standing gate item is currency/briefing for the RWY 29 wind-shear phenomenon and, for widebody types, the higher-code-letter procedure. 🟧
- **Operating restrictions / bans:** No RNP AR ban or circling restriction found in reachable sources — verify current AIRAC. 🟧
- **Overflight / entry / permits:** Standard EU/Schengen arrival; no special state permit required. 🟩
- **Operations notes:** ANSP/airport operator — **Aena**. Handling is mandatory for all operations (including non-commercial) where passengers/crew access the terminal, with limited exemptions (national state flights, based aircraft with airport accreditation, holders of a valid General Aviation Pilot Card outside non-Schengen routings).

---

## 6. General / hours / services

| Item | Value | Flag |
|---|---|---|
| ATS hours | V: 0415-2120, I: 0515-2220; extendable to V: 0415-2320, I: 0515-0020 on PPR activation | 🟧 |
| AD operating hours | V: 0430-2100 (PPR 2h), I: 0530-2200 (PPR 2h) | 🟧 |
| Night / curfew restrictions | No hard curfew found in reachable text; field is **not H24** — PPR required outside published hours | 🟧 |
| RFF category | CAT 7 (CAT 8 on 15 days' request) | 🟩 |
| Fuel | Jet A-1, 100LL — EXOLUM, hours tied to AD operating hours | 🟩 |
| PCN | Taxiway 23 m wide, PCN 102/F/A/W/T; apron PCN varies 63-136/R/B/W/T by stand | 🟩 |
| Customs | HR AD (not H24), except scheduled commercial flights | 🟧 |
| Handling / FBO | South Europe Ground Services (commercial + GA, regulated tariff); United Aviation Services (GA <10 t/<20 seats) | 🟩 |

---

## 7. Runways & declared distances

| RWY | Dimensions | Surface / PCN | TORA | TODA | ASDA | LDA | Notes |
|---|---|---|---|---|---|---|---|
| 11 | 2,320 × 45 m | ASPH / PCN 115/F/A/W/T (first 200 m concrete, PCN 71/R/C/W/T) | 2,320 m | 2,380 m | 2,320 m | 2,320 m | No displaced threshold |
| 29 | 2,320 × 45 m | ASPH / PCN 115/F/A/W/T (first 120 m concrete, PCN 71/R/C/W/T) | 2,320 m | 2,380 m | 2,320 m | 2,320 m | No displaced threshold; ILS CAT I |
| 11 INT Y2 | — | — | 1,312 m | 1,372 m | 1,312 m | — | Intersection departure (helicopter use only per AIP note) |
| 11 INT Y3 | — | — | 1,943 m | 2,003 m | 1,943 m | — | Intersection departure |
| 29 INT Y1 | — | — | 1,833 m | 1,893 m | 1,833 m | — | Intersection departure |
| 29 INT Y2 | — | — | 1,030 m | 1,090 m | 1,030 m | — | Intersection departure (helicopter use only per AIP note) |

*Source: AIP España, AD 2-LEXJ items 12/13 (WEF 26-DEC-24, AIRAC AMDT 12/24). All distances in metres. No displaced thresholds on either runway end.*

---

## 8. Communications

| Service | Callsign | Frequency | Hours | Notes |
|---|---|---|---|---|
| ATIS | Santander Information | 127.530 | HR ATS | D-ATIS also available via datalink |
| Approach | Santander TWR | 118.375 | HR ATS | Combined APP/TWR position |
| Tower | Santander TWR | 118.105 | HR ATS | |
| Ground | Santander TWR | 121.705 | HR ATS | GMC function |
| Emergency | — | 121.500 | HR ATS | |
| Military | — | 257.800 | HR ATS | |
| Centre / FIR | Madrid ACC (LECM) | Per current AIRAC | H24 | See [Europe (Continental) Airspace Briefing](../../../../airspace/europe.md) 🟧 |

*Source: AIP España, AD 2-LEXJ item 18/19 (2025 cycle). Note APP and TWR functions share Santander TWR — this is a combined-position field, not a stand-alone approach control.*

---

## 9. Navaids

| Aid | Ident | Freq | Hours | Notes |
|---|---|---|---|---|
| DVOR | SNR | 115.300 | H24 | 40 NM coverage with radial-specific U/S sectors and possible signal oscillations — see current AIP for detail |
| DME | SNR | CH 100X | H24 | Coverage caveats as per DVOR |
| NDB | SA | 416.000 | H24 | |
| ILS/LOC 29 | STA | 110.900 | H24 | CAT I; 17-25 NM coverage depending on off-centreline angle |
| ILS/GP 29 | — | 330.800 | H24 | 3°, RDH 17.7 m; full fly-up indications may not be received below GP to the right of runway centreline |
| ILS/DME 29 | STA | CH 46X | H24 | |

*Source: AIP España, AD 2-LEXJ item 19. RWY 11 has no ILS/LOC/GP — approaches are RNP (LPV/LNAV), VOR and NDB only (§10).*

---

## 10. Arrival

- **Transition altitude / level:** 1,850 m / 6,000 ft (CTR upper limit) — confirm TA/TL split on current chart. 🟧
- **Speed:** Standard 250 KIAS below FL100 (EU/ICAO norm) — confirm no local override on current chart.
- **Preferential runway logic:** Wind-driven; the AIP explicitly advises **against the RWY 29 approach** in S-SW gale conditions (§3.4) — this is the field's one hard preferential-runway rule.
- **Approaches (names only — verify minima on current AIRAC charts):**

| RWY | Approach | Notes |
|---|---|---|
| 11 | RNP Z (LPV only), RNP Y (LNAV, LNAV/VNAV), VOR, NDB | No ILS on this runway |
| 29 | ILS CAT I (STA), RNP Y (LNAV, LNAV/VNAV) | Preferred precision runway; not recommended in S-SW gale conditions (§3.4) |

- **STARs (names only):** Not confirmed in reachable research pass — pull the current-AIRAC STAR list at planning. 🟧
- **LVP:** **Not available at this field.** The Movement-Area Operational Standstill Procedure (PPOAM 550) applies instead for ground movement below RVR 800 m — see §13.
- **Missed approach watch-items:** Traffic/terrain are not the primary drivers; the standing concern is a **destabilised approach into wind shear on RWY 29** — brief an unhesitating go-around policy for that scenario specifically.

---

## 11. Departure

- **SIDs (names only — fly the charted version):** Not confirmed in reachable research pass — pull the current-AIRAC SID list at planning. 🟧
- **RNP / climb-gradient requirements:** Not independently confirmed this pass — verify per-SID gradient/equipage on the current chart. 🟧
- **Take-off minima:** Published per AIP; exact figures not confirmed this pass. 🟧
- **Start-up / push-back:** Pilots request start-up/push-back from ATC on the appropriate frequency; aircraft must be ready to start within 5 minutes of the request. All stands are autonomous (self-manoeuvring); departures use minimum start power and must not exceed idle power through the turn.
- **ATC slot / CTOT & clearance:** Not independently confirmed for this field's ATFM exposure — treat as standard EUROCONTROL flow-management practice pending confirmation. 🟧
- **De-icing:** No dedicated de-icing pad; hot water and glycol units are applied at the parking stand by the handling agent (per AIP item 4) — note the operating-hours table separately lists "De-icing: No" as a scheduled service, so **treat de-icing as available only via handling-agent arrangement, not as a standing field service.** 🟧 See [`OM E — Cold Weather Operations`](../../../../../flight-ops/cold-weather-operations.md).

---

## 12. Noise & Environmental

- **Noise abatement (NAP):** No fixed-wing NAP/NADP detail confirmed in reachable sources; repeated training approaches require prior ATC authorisation and are traffic-dependent. 🟧
- **Night noise / dB limits:** Not confirmed in reachable sources. 🟧
- **Engine run-up restrictions:** Above-idle engine tests require CEOPS approval; authorised positions are TWY T-1 (nose toward THR 29) or TWY T-3 (nose toward THR 11).
- **Reverse thrust / idle-reverse policy:** Not confirmed in reachable sources — verify locally. 🟧

---

## 13. Ground operations

- **Stands for our types:** 🟧 **Higher-code-letter (D and E) aircraft** — referenced against an A330-200 — require a **dedicated published operating procedure**: entries/exits to/from the apron only via TWY A (with TWY T guidance available if the manoeuvring area is affected); use of turning pads 11/29 with a nose-wheel steering angle greater than 45°; mandatory oversteer at named turns (A-T1, A-T2, T1-Y1, T2-Y2, Y3-T3, Y4-T3, 11/29-Y1 through Y4). **Default stand is PRKG 10**, with combined use of PRKG 12-13 possible (with a "SÍGAME"/follow-me reference point provided for nose-wheel positioning).
- **Push-back:** All stands are autonomous — no dedicated push-back-only positions; minimum start power used on exit.
- **Standard taxi routes:** RWY 29-in-use: departures exit via GATE A (taxi T1/Y1), arrivals exit via Y2/Y3/Y4 and enter via GATE B. RWY 11-in-use: departures exit via GATE B (taxi T3/Y4/Y3), arrivals exit via Y2/Y1 and enter via GATE A. (Gate assignments can be coordinated differently by the movement-area supervision service for operational reasons.)
- **Hot spots / tight taxiways:** 🟧 Simultaneous use of the runway and its parallel taxiway is **incompatible when a Code E aircraft is involved** — expect sequencing constraints. Passenger foot-crossing of apron taxiways is forbidden except for aircraft without ground handling, under strict conditions.
- **Follow-me:** Available and used for guidance during higher-code-letter operations and generally where required.

---

## 14. Weather & seasonal (durable)

- **Climate / prevailing wind:** Cantabrian coastal climate; the field's orographic setting produces the quantified S-SW wind-shear phenomenon on the RWY 29 approach (§3.4).
- **Seasonal hazards:** 🟥 **Wind shear/turbulence on the RWY 29 approach** is the field's defining seasonal/meteorological hazard (§3.4). A defined snow-plan season (1 Dec-31 Mar) also applies. **Gull concentrations** (principally yellow-legged gull, *Larus michahellis*) occur roughly 15 June-15 September, most likely in July-August, following rain with stable, humid, warm, calm conditions — driven by mass flying-ant emergence over the runway and unpaved areas. Additional bird movements: mute swan/mallard (generally parallel to the runway), rock dove (outside THR 11). See [`OM E — Adverse Weather and Windshear`](../../../../../flight-ops/adverse-weather-and-windshear.md).
- **Local effects:** Occasional dense smoke reported at 1.2 NM from THR 29 near a specific charted position — a specific, named local hazard, not generic haze.

> **Live weather — pull at planning (T-2h):** METAR, TAF, TREND, SIGMET/AIRMET. Not stored here.

---

## 15. NOTAMs

> **Pull at planning (T-2h).** Perishable — not stored here. Check: runway/taxiway closures, navaid U/S (especially RWY 29 ILS given it is the field's only precision approach), lighting, obstacle/crane, RFF downgrade, GPS/RAIM (RWY 11 RNP relevance), bird-activity NOTAMs in season. Source: official AIS / OFP NOTAM block.

---

## 16. Fuel & alternate planning notes

- **Typical role for us:** Destination / alternate (non-base field). `[VAMSYS mirror 2026-07-26]`
- **Nearest suitable alternates:** Company preferred alternates **LEBB** ([Bilbao](../lebb/index.md)), **LFBZ** (Biarritz) and **LFBD** (Bordeaux-Mérignac) `[VAMSYS mirror 2026-07-26]` — confirm suitability, runway/RFF adequacy and current minima per leg.
- **Fuel-uplift notes:** Jet A-1 and 100LL confirmed via EXOLUM; hours tied to AD operating hours (not H24). See [`OM E — Fuel Policy`](../../../../../flight-ops/fuel-policy.md).
- **Range/perf flags for our fleet:** The single 2,320 m runway and the dedicated higher-code-letter (D/E) operating procedure (§13) are the binding planning constraints here — not range. See [`OM B — Fleet Capability Matrix`](../../../../../fleet/capability-matrix.md). 🟧

---

## 17. Fleet-specific notes (optional)

- Any K Global Code D/E (widebody) type planned into LEXJ must brief the field's **dedicated higher-code-letter procedure**: default PRKG 10, mandatory oversteer at several named turns, and confirm current performance margin against the single 2,320 m runway. See [`OM B — Fleet Capability Matrix`](../../../../../fleet/capability-matrix.md).

---

## 18. Open items (🟧 — confirm against AIP / current AIRAC)

- VAMSYS aerodrome category — currently unset; confirm intended classification.
- VAMSYS taxi-in/taxi-out times — not published; confirm before scheduling.
- SIDs/STARs (current names and RNP/gradient detail) — not obtained in this research pass; pull the live current-AIRAC procedure list before use.
- Take-off minima exact figures.
- ATFM/CTOT exposure specific to LEXJ — not independently sourced.
- De-icing service status — the operating-hours table lists "No" while the facilities table describes handling-agent-provided hot water/glycol; reconcile before relying on it.
- Reverse-thrust/idle-reverse policy and night noise/dB limits.

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim material (current-AIRAC charts) informs content but is not listed here.*

- AIP España (ENAIRE eAIP) — AD 2-LEXJ, items 1-25, WEF dates 26-DEC-24 through 22-JAN-26 (AIRAC AMDT 12/24 through 01/26) — https://aip.enaire.es/AIP/contenido_AIP/AD/AD2/LEXJ/LE_AD_2_LEXJ_en.pdf (retrieved 2026-07-26). Runway/declared-distance data, RFF, frequencies, navaids, local regulations, LVP/PPOAM, wind-shear phenomenon, bird hazards, higher-code-letter procedure.
- Wikipedia — "Santander Airport" — https://en.wikipedia.org/wiki/Santander_Airport (retrieved 2026-07-26). General cross-check.
- OurAirports — https://ourairports.com/airports/LEXJ/ (retrieved 2026-07-26). ARP/elevation/runway cross-check.

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-26 | Built from AIP España (ENAIRE); K Global fields from live VAMSYS; 4-page pack. |
