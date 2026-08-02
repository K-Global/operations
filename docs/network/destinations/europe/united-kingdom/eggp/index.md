# EGGP — Liverpool · Airport Briefing

**EGGP / LPL** · Liverpool (Speke), Merseyside, England, United Kingdom · Europe
**Version** v0.1 · **Updated** 2026-07-26 · **Status** Draft

> **Read-me:** Planning aid for the sim, not a chart. Static data is drawn from the UK NATS eAIP (AIP United Kingdom, AD 2 EGGP); approaches/SIDs/STARs are listed **by name only or flagged not-yet-confirmed** — fly the charted current-AIRAC version. Live weather/NOTAMs are pulled at planning (§14/§15). Open 🟧 items are listed in §18. Flag legend 🟥 restriction/hazard · 🟧 caution/unverified · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| ARP (lat/long) | 53°20′01″N 002°50′59″W — centre of RWY 09/27; 6.5 NM SE of Liverpool `[AIP AD 2 EGGP 2.2]` |
| Field elevation | **81 ft AMSL** (geoid undulation 171 ft; reference temperature 18 °C) |
| Mag variation | **0.64° W (2022)**, annual change **0.21° E** 🟧 verify current epoch on live chart |
| Time zone | UTC+0 (GMT) / UTC+1 (BST) — AIP gives dual Zulu/local hours throughout; no separate zone label found 🟧 |
| Runway(s) | Single **09/27**, 2,285 × 46 m, asphalt, grooved, PCN 77/F/C/W/T |
| Preferential runway | Wind-driven; **RWY 27 arrivals are additionally constrained by Manchester Airport traffic proximity** — see §3.2 |
| Longest LDA | 2,285 m (RWY 27) |
| Approaches | **ILS RWY 09** (ident ILVR; category not confirmed as a plain-text CAT designator in reachable extract) / **ILS CAT III RWY 27** (ident ILQ) — CAT II/III both confirmed by AIP text for RWY 27 specifically |
| RFF category | **Category A7** (Categories 8 and 9 available on request by prior notice) |
| Control type | **Radar and procedural** — Liverpool Approach/Radar (10 cm approach radar); both radar and non-radar procedures documented |
| Elevation class | Near sea-level (81 ft) — not hot-and-high, no density-altitude driver |
| Special-airport status | 🟥 **PPR for all non-based aircraft; mandatory handling for all visiting/non-based aircraft**; **all flights except GA/military require prior approval of the Airport Operations Director and prior notification to Airport Co-ordination Ltd (ACL)** — see §5 |
| Customs / PoE | **Yes** — H24 |
| K Global category | **Not set** 🟧 `[VAMSYS mirror 2026-07-26]` |
| K Global base | **No** `[VAMSYS mirror 2026-07-26]` |
| Company preferred alternates | **EGCC, EGBB, EGTK** `[VAMSYS mirror 2026-07-26]` — **EGTK (Oxford/Kidlington) has no OM C entry in this network; link left unresolved** 🟧 |
| Taxi-in / taxi-out (VAMSYS) | **Not set** 🟧 `[VAMSYS mirror 2026-07-26]` |

---

## 2. Validation summary

| Domain | Flag | Note |
|---|---|---|
| Terrain / CFIT | 🟧 | Low-lying field (81 ft); obstacle table lists trees/fences/masts/chimneys up to ~654 ft elevation in the vicinity, none flagged as a close-in CFIT driver — not independently cross-checked against the current MSA/obstacle chart. See §3.1. |
| Runway length vs fleet perf | 🟧 | 2,285 m single runway with RWY 09's threshold displaced 61 m (LDA 2,101 m) is workable for narrowbody/regional types but a real weight/length constraint for a Code E widebody — check OM B Fleet Capability Matrix per type. |
| Approach availability / minima | 🟩 | RWY 27 explicitly CAT III (ident ILQ); RWY 09 (ILVR) not confirmed to the same category in reachable sources — asymmetric capability by runway direction, brief accordingly. |
| Airspace / traffic / control | 🟥 | **Proximity to Manchester Airport (20 NM east) directly constrains RWY 27 arrival descent profiles** — a real, sourced, airspace-integration hazard, not a generic traffic-density note. See §3.2. Field sits in **London FIR (EGTT)** — **no dedicated London FIR brief exists yet in this network** — see the [Europe area brief](../../../../airspace/europe.md) and §18. |
| Weather / seasonal hazard | 🟧 | No field-specific fog/wind climatology statistic found in reachable sources; standard UK winter icing/snow season applies — see §14. |
| Curfew / slots / hours | 🟥 | **Night Noise Quota System** in force with quota-count-based movement restrictions 2300–0700 (2200–0600); **RWY 09 restricted for night take-off use** except operational necessity — see §12. |
| RFF category vs our types | 🟩 | Category A7 (8/9 available on request) — adequate for our fleet with prior notice for the higher category. |
| Fuel availability | 🟩 | AVTUR Jet A-1 and AVGAS 100LL, H24, with three named suppliers. |
| Customs / handling / security | 🟥 | Customs/immigration H24 confirmed, but **PPR and mandatory handling apply to every visiting/non-based flight** — a real constraint for K Global scheduling. See §5/§16. |

---

## 3. Threat & Error Management (TEM)

### 3.1 CFIT / Terrain 🟧
EGGP sits at a low 81 ft AMSL. The AIP's obstacle tables list numerous close-in items in the approach/departure sectors — trees, fences, road signs and bushes at 68–129 ft elevation (4–74 ft above ground, unlit), plus circling-area obstacles including masts up to 622 ft elevation and chimneys up to 654 ft. None of these have been independently cross-checked against the current MSA ring or obstacle chart for this build — read the MSA sectors on the current chart as routine practice.

### 3.2 Airborne conflict / traffic 🟥
EGGP is controlled under **Liverpool Approach/Radar** (10 cm approach radar) with both radar and non-radar (procedural) approach documentation, inside a Class D CTR/ATZ. The field sits inside **London FIR (EGTT)** — **no dedicated London (EGTT) FIR brief has yet been built in this network**; see the [Europe area brief](../../../../airspace/europe.md) for regional context pending a dedicated build (§18). Separately, and more operationally significant day-to-day: the AIP states directly that, **"due to the close proximity of Manchester Airport 20 miles to the east of Liverpool Airport, various restrictions exist regarding descent profiles for aircraft inbound to Liverpool when landing Runway 27,"** with the exact constraint depending on which runway is in use at Manchester — e.g., with Manchester RWY 05L/05R in use, a left-hand circuit to RWY 27 is **not available except in an emergency**, and aircraft are positioned for a right-hand circuit, required to pass north abeam Liverpool at or below 3,000 ft descending to 2,500 ft or below by a defined DME point. This is a real, sourced airspace-integration constraint specific to RWY 27 arrivals — see §10 and Arrival §2/§3.

### 3.3 Runway excursion 🟧
**Single runway 09/27** (2,285 × 46 m, asphalt grooved, PCN 77/F/C/W/T), with **no crosswind alternative on the field**. **RWY 09's landing threshold is permanently displaced by 61 m** — declared LDA on RWY 09 is **2,101 m** versus 2,162 m TORA/ASDA on that direction; RWY 27 is not displaced and carries the full 2,285 m LDA. A short RESA on RWY 27's undershoot (only 37 m, due to a public highway) contains obstacles including the ILS localiser and a wooden fence/light hedge — a real overrun-margin caution on that end. Intersection take-off distances are published from Hold Delta (RWY 09) and Hold Golf/Hold Foxtrot (RWY 27), all materially shorter than full length. See §7.

### 3.4 Weather threat 🟧
No EGGP-specific fog/wind-shear frequency statistic was found in the reachable AIP extract; standard UK winter icing/snow season applies. See [`OM E — Cold Weather Operations`](../../../../../flight-ops/cold-weather-operations.md). See also §14.

### 3.5 Operational considerations 🟥
Plan around several durable constraints: (1) **PPR is mandatory for all non-based aircraft, with mandatory handling for all visiting/non-based aircraft** — requests via a handling agent, AOC or the airport's PPR mailbox; **filing a flight plan does not constitute a PPR request**; (2) **all flights except GA/military require prior approval of the Airport Operations Director and prior notification to Airport Co-ordination Ltd (ACL)**; (3) **RWY 27 arrivals are subject to Manchester-proximity descent-profile restrictions** that vary by Manchester's runway-in-use (§3.2); (4) **RWY 09 is night-restricted for take-off use** — available only when overriding operational considerations (e.g., performance) necessitate it, 2300–0700 (2200–0600); (5) **CAT II/III operations are authorised on RWY 27**, subject to serviceability and CAA-accepted operator minima; (6) **wingspan ≥52 m aircraft on the Taxiway Alpha segment to the RWY 27 threshold require a follow-me escort**; and (7) a **Night Noise Quota System** with strict QC-band movement bans in the core night period.

---

## 4. Cautions & Warnings

- **Manchester Airport proximity (20 NM east) directly restricts RWY 27 arrival descent profiles** — the exact circuit/altitude constraint depends on Manchester's runway in use; confirm the current-day restriction with ATC, do not assume a standard profile.
- **RWY 09 threshold is permanently displaced 61 m** — LDA (2,101 m) is meaningfully shorter than TORA/ASDA (2,162 m); never assume full-length landing distance on RWY 09.
- **RWY 27's undershoot RESA is only 37 m** due to a public highway, and contains the ILS localiser and a fence/hedge as obstacles — a real overrun-margin caution.
- **PPR and mandatory handling apply to every visiting/non-based flight** — filing a flight plan is explicitly stated to NOT constitute a PPR request.
- **RWY 09 is night-restricted for take-off** (2300–0700/2200–0600) — plan the normal-use runway for a night departure accordingly.
- **Night Noise Quota System bans QC/8 and QC/16 aircraft from scheduled movements in defined night windows** — verify the applicable type's quota count before scheduling a night movement.
- **Wingspan ≥52 m aircraft require a follow-me escort on the Taxiway Alpha segment to the RWY 27 threshold.**
- Runway/comms/navaid data below is sourced to AIRAC effective 2020-10-08 — several years old; treat exact current figures as 🟧 pending a live-AIRAC cross-check (§18).

---

## 5. Aerodrome category, restrictions & crew qualification

- **Special-airport / category:** Not operator-categorised as a restricted-crew "special airport" beyond the coordination/PPR regime below. 🟧
- **Crew-qualification gate:** CAT II/III currency required to use RWY 27's low-vis capability; operator minima must be CAA-accepted. 🟧
- **Operating restrictions / bans:** 🟥 **PPR mandatory for all non-based aircraft; mandatory handling for all visiting/non-based aircraft**; **all flights except GA/military require prior Airport Operations Director approval and prior ACL notification**; **VFR movements 0000–0700 (2300–0600) subject to PPR from ATC**; turbo-jet training flights require prior ATC approval and are time-restricted (not normally permitted Sundays before 1000/0900 or after 2000/1900; not permitted 2300–0700/2200–0600 other days). No RNP AR ban or circling restriction found in reachable sources — verify current AIRAC. 🟧
- **Overflight / entry / permits:** Standard UK international arrival; no additional state permit beyond the coordination items above. 🟩
- **Operations notes:** ATS provided H24 (both radar and procedural); named fuel suppliers Ravenair/Liverpool Aviation Services, Shell Aviation, World Fuel Services.

---

## 6. General / hours / services

| Item | Value | Flag |
|---|---|---|
| ATS hours | H24 | 🟩 |
| AD operating hours | AD Administration H24; Health and sanitation H24; AIS Briefing Office H24 (self-briefing); ATS Reporting Office (ARO) H24; MET Briefing Office H24 (self-briefing) | 🟩 |
| Night / curfew restrictions | Night Noise Quota System 2330–0600 (2230–0500), quota period 2300–0700 (2200–0600); RWY 09 night take-off restricted; VFR movements 0000–0700 (2300–0600) PPR | 🟥 |
| RFF category | **A7** (8/9 available on request by prior notice) | 🟩 |
| Fuel | AVTUR Jet A-1, AVGAS 100LL, **H24** — Ravenair/Liverpool Aviation Services, Shell Aviation, World Fuel Services | 🟩 |
| PCN | 77/F/C/W/T | 🟩 |
| Customs | H24 | 🟩 |
| Handling / FBO | **Mandatory for all visiting/non-based aircraft**; named fuel suppliers as above; specific contracted ground handler for our operation not confirmed | 🟧 |

---

## 7. Runways & declared distances

| RWY | Dimensions | Surface / PCN | TORA | TODA | ASDA | LDA | Notes |
|---|---|---|---|---|---|---|---|
| 09 | 2,285 × 46 m | Asphalt, grooved / PCN 77/F/C/W/T | 2,162 m | 2,364 m | 2,162 m | **2,101 m** | THR elev 60 ft; **landing threshold permanently displaced 61 m**; clearway 202 × 150 m; slope 0.78% up |
| 27 | 2,285 × 46 m | Asphalt, grooved / PCN 77/F/C/W/T | 2,285 m | 3,428 m | 2,292 m | 2,285 m | THR elev 78 ft; stopway 7 × 46 m; clearway 1,143 × 150 m; slope 0.78% up; **undershoot RESA only 37 m due to public highway**, contains ILS localiser and fence/hedge obstacles |

**Intersection take-offs (published):**

| From holding point | Runway | TORA | TODA | ASDA |
|---|---|---|---|---|
| Delta | 09 | 1,987 m | 2,189 m | 1,987 m |
| Golf | 27 | 2,064 m | 3,099 m | 2,071 m |
| Foxtrot | 27 | 1,483 m | 2,225 m | 1,489 m |

*Strip 09: 2,282 × 300 m; Strip 27: 2,412 × 300 m. Source: UK NATS eAIP, AD 2 EGGP, AIRAC effective 2020-10-08 — several years old; treat exact current-cycle figures as needing a live-AIRAC cross-check. All distances in metres.*

---

## 8. Communications

| Service | Callsign | Frequency | Hours | Notes |
|---|---|---|---|---|
| ATIS | Liverpool Information | 124.330 | H24 | DOC 60 NM/20,000 ft; also by telephone |
| Ground | Liverpool Ground | 121.955 | As directed by ATC | Initial call for start/taxi to Tower 126.355 unless ATIS states Ground is operating; limited to aerodrome boundary |
| Tower | Liverpool Tower | 126.355 | H24 | DOC 25 NM/4,000 ft |
| Approach | Liverpool Approach | 119.855 | H24 | DOC 40 NM/10,000 ft |
| Radar | Liverpool Radar | 118.455 / 119.855 | As directed by ATC / H24 | 10 cm approach radar; DOC 25 NM/10,000 ft (118.455), 40 NM/10,000 ft (119.855) |
| Fire (non-ATS) | Liverpool Fire | 121.600 | When fire vehicle attending an aircraft emergency | — |
| Emergency | Liverpool Emergency | 121.500 | On request | — |
| Centre / FIR | London FIR (EGTT) | Per current AIRAC | H24 | **No London (EGTT) FIR brief exists yet in this network** — see the [Europe area brief](../../../../airspace/europe.md); see §18 |

*No separate Delivery frequency was found in reachable sources — start/taxi clearance is via Ground/Tower. Source: UK NATS eAIP, AD 2 EGGP, AIRAC effective 2020-10-08 — several years old; treat exact current frequencies as 🟧 pending a live-AIRAC cross-check.*

---

## 9. Navaids

| Aid | Ident | Freq | Hours | Notes |
|---|---|---|---|---|
| ILS/LOC RWY 09 | ILVR | 111.750 | Per AIP (hours tag not plain-text in reachable extract) 🟧 | GP 333.350, 3°, RDH 54 ft; category not confirmed as a plain-text CAT designator this pass |
| ILS/LOC RWY 27 | ILQ | 111.750 | Per AIP 🟧 | **CAT III**; GP 333.350, 3°, RDH 54 ft |
| DME | ILVR / ILQ | Ch 54Y (paired w/ ILS) | H24 | On AD; zero range at THR of both RWY 09 and 27 |
| NDB (L) | LPL | 349.5 kHz | H24 | Range 25 NM; **needle swings exceeding ±5° noted during the RWY 27 approach between 6 NM and 8 NM DME** 🟧 |

*No standalone VOR is sited at EGGP itself — WAL (Wallasey) VOR is referenced as an off-field fix for RWY 27 procedures. All idents/frequencies sourced to the UK NATS eAIP AD 2 EGGP, AIRAC effective 2020-10-08 — long-lived infrastructure, not independently re-confirmed against a current AIRAC.*

---

## 10. Arrival

- **Transition altitude / level:** TA **5,000 ft**; TL by QNH — not independently confirmed this pass, verify current chart. 🟧
- **Speed:** Standard 250 KIAS below FL100 (UK/ICAO norm) — confirm no local override on current chart.
- **Preferential runway logic:** Wind-driven, no crosswind alternative; **RWY 27 arrivals are further shaped by Manchester Airport's runway-in-use** — see §3.2.
- **Approaches (names only — verify minima on current AIRAC charts):**

| RWY | Approach | Notes |
|---|---|---|
| 09 | ILS (ILVR); CDA available | Category not confirmed as plain-text designator this pass 🟧 |
| 27 | ILS CAT III (ILQ) | CAA-accepted operator minima required |

- **STARs (names only):** Not individually named in reachable sources — the AIP references a standard-routes chart without spelling out procedure names in the extracted text; named holding/reporting fixes include **TIPOD, KEGUN**, NDB **LPL**, VOR **WAL** (Wallasey). Pull the current-AIRAC STAR list at planning. 🟧
- **LVP:** CAT II/III authorised on RWY 27 subject to serviceability and CAA-accepted operator minima; exact RVR trigger figures not confirmed this pass. 🟧
- **Missed approach watch-items:** No close-in high terrain identified as the primary driver; the dominant consideration is the **Manchester-proximity descent-profile restriction on RWY 27 arrivals** (§3.2), which can require positioning north or south abeam the field at specific altitudes depending on Manchester's runway in use.

---

## 11. Departure

- **SIDs (names only — fly the charted version):** Not comprehensively listed in reachable sources; named departure routes referenced in the Manchester–Liverpool coordination text include **EKLAD 1R/Y** and **ASMIM 1S/Z** (Manchester departures affecting the shared airspace) and **WAL 2T/V** (Liverpool-to-Manchester routing) — pull the current-AIRAC SID list at planning. 🟧
- **RNP / climb-gradient requirements:** Not confirmed in reachable sources this pass — verify equipage/gradient per SID on the current chart. See [`OM E — PBN and RNP Operations`](../../../../../flight-ops/pbn-and-rnp-operations.md).
- **Take-off minima:** Published per AIP — exact figures not confirmed this pass. 🟧
- **Start-up / push-back:** Marshalling/AGNIS-guided parking on the Main and Eastern Aprons; aircraft captain (via handling agent) responsible for apron safety during engine start; **engine testing permitted only 0700–2300 (0600–2200)**.
- **ATC slot / CTOT & clearance:** All flights (except GA/military) require prior Airport Operations Director approval and prior ACL notification; ad-hoc requests to ACL Mon–Fri 0830–1700 (0730–1600) or via the online coordination portal; **DPI (Departure Planning Information) messages are fully operational** to the Network Manager Operations Centre.
- **De-icing:** **Available H24**, centralised de-icing subject to prior arrangement with the airport authority via the handling agent — see [`OM E — Cold Weather Operations`](../../../../../flight-ops/cold-weather-operations.md).

---

## 12. Noise & Environmental

- **Noise abatement (NAP):** Departures RWY 27 >5,700 kg MTWA must **climb straight ahead at maximum rate to 1,000 ft AAL before turning**; RWY 09 departures — initial turn onto outbound heading not below 500 ft AAL and not before passing the runway end; **RWY 09 is night-restricted for take-off** (available 2300–0700/2200–0600 only for overriding operational considerations, e.g. performance). All turbo-jet departures must reduce power for noise abatement to maintain at least 500 ft/min rate of climb at progressively decreasing power settings.
- **Night noise / dB limits:** Specific dB limits not found in reachable sources — instead, the field applies a **Night Noise Quota System** modelled on the CAA's Heathrow/Gatwick/Stansted framework: quota period 2300–0700 (2200–0600), quota-count period 2330–0600 (2230–0500). **QC/8 and QC/16 aircraft must not be scheduled to take off or land 2300–2330 (2200–2230) or 2330–0600 (2230–0500); QC/16 aircraft must not take off or be scheduled to land 0600–0700 (0500–0600).** Operators must supply noise-characteristic/quota-count data as part of PPR requests, copied to the airport's Environment Team.
- **Engine run-up restrictions:** Engine testing restricted to **0700–2300 (0600–2200)**; outside these hours only in exceptional operational circumstances.
- **Reverse thrust / idle-reverse policy:** Flight crew must **"avoid the use of reverse thrust after landing, unless necessary for the safe operation of the aircraft, especially between 2300–0600 (2200–0500)."**
- **Continuous Descent Approach:** Available only on RWY 09; RWY 27 operations "may require prolonged flight at lower altitude for airspace integration" — a direct consequence of the Manchester-proximity constraint (§3.2).

---

## 13. Ground operations

- **Stands for our types:** Main Apron stands 1–14 and 32–41 are taxi-in/push-back (occasionally self-manoeuvring); stands 1–6 fitted with AGNIS VDGS. Eastern Apron (access via Taxiway Tango) stands 51–56 fitted with AGNIS/PAPA VDGS — **stand 51/54 up to B757, 52/55 up to B767, 53/56 up to B737** (indicative wingspan/size limits by stand). 🟧 See [Dispatch §2/§3](dispatch.md).
- **Push-back:** Stands 1–14 and 32–41 described as "taxi-in/push-back"; stand 14A is self-manoeuvring up to B747 size (55° nose-wheel turning angle, coordinate with Airport Operations Centre).
- **Standard taxi routes:** Main Apron accessed via Taxiways Uniform/Victor/Whisky; wingspan ≥36 m aircraft must enter the Main Apron via Taxiway Whiskey.
- **Hot spots / tight taxiways:** 🟥 **Wingspan ≥52 m aircraft on Taxiway Alpha (Holding Point A3 to the RWY 27 threshold) require a follow-me escort** keeping the nosewheel on centreline — a wing person is stationed near a building that infringes the Code E taxiway strip in that segment; a **rapid-exit turn-off caution at Echo** when taxiing Main Apron→Victor→RWY 09/27; **stands 1 and 32 are out of ATC's direct sightline** ("owing to position of hangars") — listen carefully to taxi instructions.
- **Follow-me:** Mandatory for wingspan ≥52 m aircraft on the Taxiway Alpha segment described above; general marshalling assistance available on request.

---

## 14. Weather & seasonal (durable)

- **Climate / prevailing wind:** Temperate maritime climate, north-west England, low-lying coastal-plain site.
- **Seasonal hazards:** No EGGP-specific fog/wind-shear frequency statistic found in reachable sources; standard UK winter icing/snow season applies, with SNOCLO declaration possible during snowfall. See [`OM E — Cold Weather Operations`](../../../../../flight-ops/cold-weather-operations.md).
- **Local effects:** The **Manchester-proximity airspace-integration constraint on RWY 27 arrivals** is the standout "local effect" at this field, more an airspace/procedural item than a weather one — see §3.2.

> **Live weather — pull at planning (T-2h):** METAR, TAF, TREND, SIGMET/AIRMET. Not stored here.

---

## 15. NOTAMs

> **Pull at planning (T-2h).** Perishable — not stored here. Check: runway/taxiway closures, ILS serviceability (CAT III status on RWY 27), lighting, obstacle/crane, RFF downgrade, GPS/RAIM, bird-activity NOTAMs, SNOCLO status in winter. Source: official AIS / OFP NOTAM block.

---

## 16. Fuel & alternate planning notes

- **Typical role for us:** Destination/spoke — not a K Global base (`Base: No` `[VAMSYS mirror 2026-07-26]`).
- **Nearest suitable alternates:** Company preferred alternates [**EGCC**](../egcc/index.md) (Manchester), [**EGBB**](../egbb/index.md) (Birmingham) `[VAMSYS mirror 2026-07-26]`, and **EGTK** (Oxford/Kidlington) — **EGTK has no OM C entry anywhere in this network; the alternate reference is left unresolved/unlinked** 🟧. Confirm suitability, runway/RFF adequacy and current minima per leg for all three.
- **Fuel-uplift notes:** AVTUR Jet A-1 and AVGAS 100LL, **H24**, capacity ~500,000 L combined; three named suppliers (Ravenair/Liverpool Aviation Services, Shell Aviation, World Fuel Services). See [`OM E — Fuel Policy`](../../../../../flight-ops/fuel-policy.md).
- **Range/perf flags for our fleet:** 2,285 m runway with RWY 09's 61 m threshold displacement (LDA 2,101 m) is workable for narrowbody/regional types but a real weight/length constraint for a Code E widebody — check [`OM B — Fleet Capability Matrix`](../../../../../fleet/capability-matrix.md) per type before planning a widebody rotation.

---

## 17. Fleet-specific notes (optional)

- **Any Code E widebody type:** Eastern Apron stand size markings (up to B757/B767) suggest the field is oriented toward narrowbody/regional operations; a **Code E widebody should be checked against the current-cycle field-length/weight chart** for the 2,285 m runway and RWY 09's displaced-threshold LDA (2,101 m), and against the **wingspan ≥52 m follow-me-escort requirement on Taxiway Alpha**. RFF Category A7 (8/9 available on request) should be confirmed with prior notice for a widebody rotation. See [`OM B — Fleet Capability Matrix`](../../../../../fleet/capability-matrix.md).

---

## 18. Open items (🟧 — confirm against AIP / current AIRAC)

- **London FIR (EGTT) brief does not yet exist in this network.** EGGP sits inside London FIR airspace; only a Langen (EDGG) FIR brief has been built so far (for Germany). This is a genuine, factual network gap — flagged here for a future build.
- **AIRAC currency** — all runway/comms/navaid figures below are sourced to the UK NATS eAIP AD 2 EGGP, AIRAC effective 2020-10-08, several years old; not independently re-confirmed against a current AIRAC cycle.
- **Mag variation** — sourced to a 2022 epoch (0.64° W, annual change 0.21° E); no 2026 drift estimate computed this pass.
- **SIDs/STARs (current comprehensive list)** — not obtained in this research pass beyond the cross-referenced Manchester-coordination route names; pull the live current-AIRAC procedure list before use.
- **ILS RWY 09 category** — AIP confirms CAT III on RWY 27 explicitly; RWY 09's category designator was not plain-text in the reachable extract.
- **Take-off minima, LVP RVR triggers** — not confirmed this pass.
- **Slot-coordination level (IATA Level 3)** — widely reported externally, but the specific phrase "Level 3 coordinated" was not found verbatim in the reachable AIP extract; the named coordinator (Airport Co-ordination Ltd) confirms an active coordination regime regardless. 🟧
- **K Global category and taxi-in/taxi-out times** — not set/not published in the VAMSYS mirror as of the retrieval date; both flagged 🟧 in §1.
- **EGTK (Oxford/Kidlington) alternate** — has no OM C entry anywhere in this network; the company-preferred-alternate reference above is left as plain text, unlinked.
- **Terrain/obstacle bearings** — stated from the AIP obstacle table but not independently cross-checked against the current MSA/obstacle chart.
- **Named ground handling agent(s)** for our specific operation — not confirmed beyond the general fuel-supplier list in §6.

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim material (current-AIRAC charts) informs content but is not listed here.*

- **UK NATS eAIP — AIP United Kingdom, AD 2 EGGP**, AIRAC effective 2020-10-08 — https://www.aurora.nats.co.uk/htmlAIP/Publications/2020-10-08-AIRAC/html/eAIP/EG-AD-2.EGGP-en-GB.html (retrieved 2026-07-26). **This AIRAC cycle is several years old — treat exact current runway/comms/navaid figures as needing a live-AIRAC cross-check.**
- OurAirports — https://ourairports.com/airports/EGGP/ (retrieved 2026-07-26). *ARP/elevation/runway cross-check.*
- SkyVector — https://skyvector.com/airport/EGGP (retrieved 2026-07-26). *Coordinate/chart-index cross-check.*

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-26 | Built from UK AIP (NATS AIS); K Global fields from live VAMSYS; 4-page pack. |
