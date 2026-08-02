# EGGD — Bristol · Airport Briefing

**EGGD / BRS** · Bristol (Lulsgate Bottom), North Somerset, England, United Kingdom · Europe
**Version** v0.1 · **Updated** 2026-07-26 · **Status** Draft

> **Read-me:** Planning aid for the sim, not a chart. Static data is drawn from the UK NATS eAIP (AIP United Kingdom, AD 2 EGGD); approaches/SIDs/STARs are listed **by name only** — fly the charted current-AIRAC version. Live weather/NOTAMs are pulled at planning (§14/§15). Open 🟧 items are listed in §18. Flag legend 🟥 restriction/hazard · 🟧 caution/unverified · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| ARP (lat/long) | 51°22′58″N 002°43′09″W — mid-point of RWY 09/27; 7 NM SW of Bristol `[AIP AD 2 EGGD 2.2]` |
| Field elevation | **622 ft AMSL** (geoid undulation 164 ft; reference temperature 18 °C) — **hilltop site** |
| Mag variation | **0.36° W (2022)**, annual change **0.20° E** 🟧 verify current epoch on live chart |
| Time zone | UTC+0 (GMT) / UTC+1 (BST) — AIP gives dual Zulu/local hours throughout; no separate zone label found 🟧 |
| Runway(s) | Single **09/27**, 2,011 × 45 m, asphalt, grooved, PCN 51/F/C/W/T |
| Preferential runway | Wind-driven — no published utilisation split found 🟧 |
| Longest LDA | 2,011 m (RWY 09) |
| Approaches | **ILS/DME/NDB(L) — RWY 09 lower-than-standard CAT I (classification I/T/1, IRVR ≥550 m); RWY 27 CAT III** (operator-approval required); also LOC/DME/NDB(L), RNP (SBAS/LPV-capable), NDB(L)/DME both ends |
| RFF category | **Category A8** (Category 9 accepted under remission) |
| Control type | **Radar** — Bristol Radar (APP)/Bristol Director; Class D CTR/ATZ |
| Elevation class | **622 ft AMSL, hilltop/escarpment site** — not hot-and-high, but a real wind/weather exposure driver 🟧 |
| Special-airport status | 🟥 IATA Level 2 schedules-facilitated; **Level 3 coordinated 2200–0600 (Summer only)** for night movements — **PPR during that window**; diversions may be refused except in an emergency due to limited stand availability — see §5 |
| Customs / PoE | **Yes** — H24, subject to notified movements |
| K Global category | **R** `[VAMSYS mirror 2026-07-26]` |
| K Global base | **No** `[VAMSYS mirror 2026-07-26]` |
| Company preferred alternates | **EGLL, EGKK, EGCC** `[VAMSYS mirror 2026-07-26]` |
| Taxi-in / taxi-out (VAMSYS) | **6 min / 8 min** `[VAMSYS mirror 2026-07-26]` |

---

## 2. Validation summary

| Domain | Flag | Note |
|---|---|---|
| Terrain / CFIT | 🟧 | Field itself sits at 622 ft on a plateau/escarpment; nearby obstacles include an 888 ft-elevation hill with church tower/radio masts ~2.2 NM NE and a 1,963 ft TV mast further south — not independently cross-checked against the current MSA/obstacle chart. See §3.1. |
| Runway length vs fleet perf | 🟧 | 2,011 m single runway with RWY 27 threshold displaced (LDA 1,881 m vs TORA 2,011 m) is workable for narrowbody/regional types but a real weight/length constraint for a Code E widebody — check OM B Fleet Capability Matrix per type. |
| Approach availability / minima | 🟩 | RWY 27 CAT III gives the field a deep low-vis capability; RWY 09 is lower-than-standard CAT I only (IRVR ≥550 m) — asymmetric capability by runway direction, brief accordingly. |
| Airspace / traffic / control | 🟧 | Radar-controlled Class D CTR/ATZ; field sits in **London FIR (EGTT)** — **no dedicated London FIR brief exists yet in this network** (only a Langen (EDGG) FIR brief has been built, for Germany) — see §18 and the [Europe area brief](../../../../airspace/europe.md). |
| Weather / seasonal hazard | 🟥 | AIP explicit caution: **"pilots may experience windshear/turbulence, especially if the wind is strong southeasterly (using Runway 09) or strong westerly (using Runway 27)"** — a direct, sourced hazard tied to the hilltop/escarpment site. See §3.4/§14. |
| Curfew / slots / hours | 🟥 | PPR 2300–0700 (2200–0600); night landing surcharge 2200–0700 (2100–0600); Level 3 night coordination 2200–0600 Summer only — see §12. |
| RFF category vs our types | 🟩 | Category A8 (9 available under remission) — adequate for our fleet. |
| Fuel availability | 🟧 | AVTUR Jet A-1 effectively H24 (0500–2359 + arrangement); AVGAS 100LL restricted hours, visiting-aircraft only via a named FBO — no specific jet-fuel supplier company named in the reachable AIP extract. |
| Customs / handling / security | 🟧 | Customs/immigration H24 subject to notified movements; **diversions may not be accepted except in an emergency** due to limited stand availability — a real constraint for K Global alternate planning. See §5/§16. |

---

## 3. Threat & Error Management (TEM)

### 3.1 CFIT / Terrain 🟧
EGGD sits at 622 ft AMSL on a plateau/escarpment south-west of Bristol. Charted obstacles near the field include a hill with a church tower and radio masts (~888 ft elevation, lit) roughly 2 NM NE of the ARP, a mobile-phone mast (~750 ft, lit) close-in, a radio mast (~1,158 ft, unlit) to the south, and a TV mast (~1,963 ft, lit) further south. None of these bearings/distances have been independently cross-checked against the current MSA ring or obstacle chart for this build — read the MSA sectors on the current chart as routine practice.

### 3.2 Airborne conflict / traffic 🟧
EGGD is radar-controlled under **Bristol Radar** (APP, DOC 60 NM/15,000 ft) and **Bristol Director**, with a Class D CTR and ATZ. The field sits inside **London FIR (EGTT)** — **no dedicated London (EGTT) FIR brief has yet been built in this network**; the only FIR brief built so far is Langen (EDGG), for Germany. This is a genuine network gap — see §18 and the [Europe area brief](../../../../airspace/europe.md) for regional context pending a dedicated build. Separately, the local area sees regular **hot-air balloon activity** (Ashton Court ~3.5 NM NE, Bath ~12 NM E — balloons above 1,000 ft QNH within CAS must be in contact with ATC), active **glider/hang-glider blocks** (Ubley, Halesland A/B, The Bath Gap), a nearby **UAV site** (~3.5 NM NE, up to 570 ft AMSL within 1 NM) and a **model-aircraft site** (~4 NM NW, up to 1,015 ft AMSL within 0.5 NM). 🟧

### 3.3 Runway excursion 🟧
**Single runway 09/27** (2,011 × 45 m, asphalt grooved, PCN 51/F/C/W/T). **RWY 27 carries a displaced/inset threshold** — declared LDA on RWY 27 is **1,881 m**, materially shorter than the 2,011 m TORA/ASDA on that direction (a ~130 m displacement, consistent with the marked displaced threshold on RWY 27); RWY 09 has no displacement and LDA equals TORA/ASDA (2,011 m). The AIP also notes two short **forward-sight-distance** patches — a 240 m area near the RWY 09 threshold/TDZ and a 395 m area mid-runway (between 630–1,025 m along the LDA) — both below the standard 1,006 m forward sight distance; brief this as a runway-surface-visibility caution, not a length issue. Several intersection take-off distances are published from Taxiways B/D/F/H/J, all materially shorter than full length — confirm which is assigned. See §7.

### 3.4 Weather threat 🟥
The AIP states directly: **"Caution, pilots may experience windshear/turbulence, especially if the wind is strong southeasterly (using Runway 09) or strong westerly (using Runway 27)."** This is a sourced, explicit hazard tied to Bristol's exposed hilltop/escarpment location — brief it before every approach/departure with a strong wind component from those directions. See also §14.

### 3.5 Operational considerations 🟥
Plan around several durable constraints: (1) EGGD is an **IATA Level 2 schedules-facilitated airport**, additionally **Level 3 coordinated 2200–0600 (Summer only)** for night movements, with **PPR required** during that window (ad-hoc requests to ACL Mon–Fri 0730–1600 Summer, or the Airport Duty Manager at other times); (2) **"Aircraft wishing to divert to Bristol Airport may not be accepted, except in an emergency," due to limited stand availability** — a direct planning constraint for any use of EGGD as an alternate; (3) aircraft must carry **third-party insurance of not less than £500,000**; (4) aircraft unable to communicate by radio with ATC will not be accepted; (5) **CAT II/III operations require operator minima to have been accepted by the CAA**; (6) **RWY 09 is asymmetrically weaker for low-vis** (I/T/1, IRVR ≥550 m) versus RWY 27's CAT III — brief runway-direction-dependent minima; and (7) the field's hilltop windshear/turbulence exposure (§3.4).

---

## 4. Cautions & Warnings

- **"Pilots may experience windshear/turbulence, especially if the wind is strong southeasterly (RWY 09) or strong westerly (RWY 27)"** — direct AIP caution tied to the hilltop/escarpment site.
- **RWY 27 threshold is displaced** — LDA (1,881 m) is materially shorter than TORA/ASDA (2,011 m); never assume full-length landing distance on RWY 27.
- **Diversions may be refused except in an emergency** — limited stand availability; do not plan EGGD as a casual tactical alternate without confirming acceptance.
- **RWY 09 low-vis capability is weaker than RWY 27** — I/T/1 (IRVR ≥550 m) vs CAT III; brief the asymmetry.
- **Forward sight distance is locally reduced** in two runway patches (near RWY 09 THR/TDZ and mid-runway) — below the 1,006 m standard; a surface-visibility caution, not a length restriction.
- **Racing pigeon activity is evident throughout the year, especially 1 April–31 October**, alongside general bird-dispersal operations — brief an elevated bird-strike watch.
- **Level 3 night coordination (2200–0600, Summer only) requires PPR** — do not plan an unscheduled night movement without confirming slot/PPR status.
- Runway/comms/navaid data below is sourced to AIRAC effective 2020-10-08 — several years old; treat exact current figures as 🟧 pending a live-AIRAC cross-check (§18).

---

## 5. Aerodrome category, restrictions & crew qualification

- **Special-airport / category:** Not operator-categorised as a restricted-crew "special airport" beyond the coordination/PPR regime below. 🟧
- **Crew-qualification gate:** CAT II/III currency required to use RWY 27's low-vis capability; operator minima must be CAA-accepted. 🟧
- **Operating restrictions / bans:** 🟥 **Level 3 coordinated 2200–0600 (Summer only)** — PPR required for all movements in that window (ad-hoc via ACL Mon–Fri 0730–1600 Summer, or Airport Duty Manager other times); **diversions may be refused except in an emergency** due to limited stand availability; aircraft must carry **≥£500,000 third-party insurance**; **no-radio aircraft not accepted**; GA operators must pre-notify handling agents with ETA/duration; **PPR required for non-based aircraft overnight parking on the south side** from the appropriate handling agent. No RNP AR ban or circling restriction found in reachable sources — verify current AIRAC. 🟧
- **Overflight / entry / permits:** Standard UK international arrival; no additional state permit beyond the coordination/insurance items above. 🟩
- **Operations notes:** ATS provided on the field H24; named handling agents in the AIP include Bristol and Wessex Aeroplane Club, Centreline, DHL and Swissport; no single named jet-fuel supplier company found in reachable sources.

---

## 6. General / hours / services

| Item | Value | Flag |
|---|---|---|
| ATS hours | H24 | 🟩 |
| AD operating hours | AD Administration H24; AIS Briefing Office H24 (self-briefing); MET Briefing Office H24 (self-briefing, Met Office Exeter) | 🟩 |
| Night / curfew restrictions | PPR 2300–0700 (2200–0600); night landing surcharge 2200–0700 (2100–0600); Level 3 night coordination 2200–0600 Summer only; Night Noise Quota System 2330–0600 (2230–0500) | 🟥 |
| RFF category | **A8** (9 available under remission) | 🟩 |
| Fuel | AVTUR Jet A-1, 0500–2359 (effectively H24) + arrangement; AVGAS 100LL 0900–1700 (0800–1600) + arrangement, visiting-only via Bristol and Wessex Aeroplane Club; capacity up to 1,600 L/min | 🟧 |
| PCN | 51/F/C/W/T | 🟩 |
| Customs | H24, subject to notified movements | 🟩 |
| Handling / FBO | Named handling agents: Bristol and Wessex Aeroplane Club, Centreline, DHL, Swissport — specific contracted handler for our operation not confirmed | 🟧 |

---

## 7. Runways & declared distances

| RWY | Dimensions | Surface / PCN | TORA | TODA | ASDA | LDA | Notes |
|---|---|---|---|---|---|---|---|
| 09 | 2,011 × 45 m | Asphalt, grooved / PCN 51/F/C/W/T | 2,011 m | 2,133 m | 2,011 m | 2,011 m | THR elev 613 ft; clearway 122 × 150 m; slope 0.15% down; two forward-sight-distance patches near THR/TDZ (§3.3) |
| 27 | 2,011 × 45 m | Asphalt, grooved / PCN 51/F/C/W/T | 2,011 m | 3,016 m | 2,011 m | **1,881 m** | THR elev 601 ft; clearway 1,005 × 150 m; slope 0.15% up; **displaced threshold** — LDA ~130 m short of TORA/ASDA |

**Intersection take-offs (published):**

| From holding point | Runway | TORA | TODA | ASDA |
|---|---|---|---|---|
| Foxtrot (F) | 09 | 1,309 m | 1,431 m | 1,309 m |
| Delta (D) | 09 | 709 m | 831 m | 709 m |
| Hotel (H) | 09 | 651 m | 773 m | 651 m |
| Bravo (B) | 27 | 1,828 m | 2,742 m | 1,828 m |
| Juliet (J) | 27 | 1,780 m | 2,670 m | 1,780 m |
| Hotel (H) | 27 | 1,371 m | 2,056 m | 1,371 m |
| Delta (D) | 27 | 1,348 m | 2,022 m | 1,348 m |
| Foxtrot (F) | 27 | 749 m | 1,123 m | 749 m |

*Strip 2,131 × 280 m both directions. RESA dimensions not populated in the reachable AIP extract 🟧. Source: UK NATS eAIP, AD 2 EGGD, AIRAC effective 2020-10-08 — several years old; treat exact current-cycle figures as needing a live-AIRAC cross-check. All distances in metres.*

---

## 8. Communications

| Service | Callsign | Frequency | Hours | Notes |
|---|---|---|---|---|
| ATIS | Bristol Information | 126.030 | H24 | Also by telephone |
| Delivery | Bristol Delivery | 121.930 | Available as directed by ATC | DOC 2 NM/GND |
| Ground | — | — | — | Not separately listed; Delivery/Tower cover ground function 🟧 |
| Tower | Bristol Tower | 133.850 | H24 | DOC 25 NM/4,000 ft |
| Approach | Bristol Radar | 125.650 | H24 | DOC 60 NM/15,000 ft — for joining/transiting/within 10 NM of Bristol CAS |
| Radar (director) | Bristol Director | 136.080 | Available as directed by ATC | DOC 60 NM/15,000 ft |
| Fire (non-ATS) | Bristol Fire | 121.600 | When fire vehicle attending an aircraft emergency | — |
| Centre / FIR | London FIR (EGTT) | Per current AIRAC | H24 | **No London (EGTT) FIR brief exists yet in this network** — see the [Europe area brief](../../../../airspace/europe.md); see §18 |

*Source: UK NATS eAIP, AD 2 EGGD, AIRAC effective 2020-10-08 — several years old; treat exact current frequencies as 🟧 pending a live-AIRAC cross-check.*

---

## 9. Navaids

| Aid | Ident | Freq | Hours | Notes |
|---|---|---|---|---|
| ILS/LOC RWY 09 | IBON | 110.150 | H24 | Classification **I/T/1** (lower than standard CAT I, IRVR ≥550 m); GP 334.300, 3°, RDH 57 ft, extended range to 15 NM |
| ILS/LOC RWY 27 | IBTS | 110.150 | H24 | **CAT III**; GP 334.300, 3°, RDH 50 ft, extended range to 15 NM |
| DME (RWY 09) | IBON | Ch 38Y (paired w/ ILS) | H24 | Elev 620 ft; zero range at THR 09 |
| DME (RWY 27) | IBTS | Ch 38Y (paired w/ ILS) | H24 | Elev 609 ft; zero range at THR 27 |
| NDB (L) | BRI | 414.0 kHz | H24 | On AD; range 40 NM |

*No standalone VOR is sited at EGGD — nearby VRPs reference off-field VORs (BCN, CPT) as bearing/distance fixes only. All idents/frequencies sourced to the UK NATS eAIP AD 2 EGGD, AIRAC effective 2020-10-08 — long-lived infrastructure, not independently re-confirmed against a current AIRAC.*

---

## 10. Arrival

- **Transition altitude / level:** TA 6,000 ft; TL by QNH — not independently confirmed this pass, verify current chart. 🟧
- **Speed:** Standard 250 KIAS below FL100 (UK/ICAO norm) — confirm no local override on current chart.
- **Preferential runway logic:** Wind-driven; no published utilisation split found. 🟧 Note the asymmetric weather threat (§3.4/§14): strong SE favours RWY 09 into wind but is the windshear-caution direction for that runway; strong W favours RWY 27 into wind but is the caution direction for that runway.
- **Approaches (names only — verify minima on current AIRAC charts):**

| RWY | Approach | Notes |
|---|---|---|
| 09 | ILS/DME/NDB(L) — I/T/1; LOC/DME/NDB(L); RNP (SBAS/LPV); NDB(L)/DME | Lower-than-standard CAT I, IRVR ≥550 m |
| 27 | ILS/DME/NDB(L) — CAT III; LOC/DME/NDB(L); RNP (SBAS/LPV); NDB(L)/DME | CAT III, CAA-accepted operator minima required |

- **STARs (names only):** BRI 1A/1E, BRI 1B, BRI 1C, BRI 2D; RNAV1 STARs ADVED 1A (RWY 09), BAXUN 1A (RWY 27); RNP transitions EMPAS/ADVED (RWY 09), ELROV/BAXUN (RWY 27) — verify current AIRAC. 🟧
- **LVP:** RWY 27 CAT III authorised subject to serviceability and CAA-accepted operator minima; holding points DX/FX/HX close when LVP in force. Exact RVR trigger figures not confirmed this pass. 🟧
- **Missed approach watch-items:** No close-in high terrain at the field itself; the charted masts/hills near the ARP (§3.1) have not been cross-checked against the current MAP/obstacle chart. The dominant weather consideration is the windshear/turbulence caution (§3.4) on strong SE (RWY 09) / strong W (RWY 27) winds.

---

## 11. Departure

- **SIDs (names only — fly the charted version):** BCN 1X/1Z; BADIM 1X, WOTAN 1Z; EXMOR 1X/1Z — verify current AIRAC. 🟧
- **RNP / climb-gradient requirements:** Not confirmed in reachable sources this pass — verify equipage/gradient per SID on the current chart. See [`OM E — PBN and RNP Operations`](../../../../../flight-ops/pbn-and-rnp-operations.md).
- **Take-off minima:** Published per AIP — exact figures not confirmed this pass. 🟧
- **Start-up / push-back:** Marshalling to stands and start-up under apron-marshaller guidance following ATC clearance; engine runs require an authorisation code from Airside Operations. Minimum-power taxi instructed from stands 19/20 to line up RWY 27 via holding point AX.
- **ATC slot / CTOT & clearance:** Level 3 night coordination 2200–0600 (Summer only) — PPR via ACL (Mon–Fri 0730–1600 Summer) or the Airport Duty Manager other times.
- **De-icing:** **Available H24**; mechanical/chemical, runway de-iced/anti-iced with KFOR/NAAC — see [`OM E — Cold Weather Operations`](../../../../../flight-ops/cold-weather-operations.md).

---

## 12. Noise & Environmental

- **Noise abatement (NAP):** Named **Noise Preferential Routes** apply to departures >5,700 kg MCW, built into the SIDs: RWY 09 — climb straight ahead to IBON 5.4 NM (IBTS 4.7 NM) DME, no lower than 3,000 ft QNH before the turn; RWY 27 — climb straight ahead to IBTS 5.2 NM (IBON 4.5 NM) DME, no lower than 3,000 ft QNH before the turn. NPR obligations cease above 4,000 ft QNH. A specific **left-turn departure off RWY 09 climbs straight ahead to 1 NM DME** before turning, to avoid Felton Village. IFR visual approaches must not join final below 2,200 ft QNH.
- **Night noise / dB limits:** **90 dB(A) (103 PNdB) by day** (0600–2329/0500–2229) and **85 dB(A) (96 PNdB) by night** (2330–0559/2230–0459), measured at monitoring points 6.5 km from start of roll on both runways — exceedances are subject to a penalty per the airport's fees and charges.
- **Engine run-up restrictions:** APU use restricted **2330–0559 (2230–0459)** (except immediately pre-departure) without Airside Operations approval; engine runs require an authorisation code.
- **Reverse thrust / idle-reverse policy:** Not stated in the reachable AIP extract. 🟧
- **Night Noise Quota System** in force 2330–0600 (2230–0500) — details held by the airport environment office.

---

## 13. Ground operations

- **Stands for our types:** Detailed nose-in/push-back and taxi-through configurations across stands 1–39 and W1–W8/E1–E3 off-stand positions; several stands push back into a cul-de-sac facing east or west. Named **B787/A330 taxi routes** exist (departure RWY 09 via TWY Z→G, entering at GX; RWY 27 via TWY Z→A, entering at AX; arrival RWY 09 vacates BX/AX to TWY Z; RWY 27 vacates GX/TWY G/Z) — **B787 and A330 aircraft cannot backtrack**. 🟧 See [Dispatch §2/§3](dispatch.md).
- **Push-back:** Most contact stands are nose-in/push-back; several (7–12, 28, 31, 33) are push-back or taxi-through as appropriate; W7/W8 are self-manoeuvring.
- **Standard taxi routes:** As above for our likely Code C/E types; confirm assignment with Ground on the day.
- **Hot spots / tight taxiways:** No formally labelled "Hot Spot" in the reachable extract, but real cautions exist: minimum main-gear clearance to pavement edge is tight for A330-class aircraft on several taxiway/runway transitions (as low as 3.0–4.1 m), and taxiways D/F/G/Z carry longitudinal-gradient notes up to ~2.65%. 🟧
- **Follow-me:** Provided when IRVR is 300 m or less, from the manoeuvring-area edge to the allocated stand.

---

## 14. Weather & seasonal (durable)

- **Climate / prevailing wind:** Temperate maritime climate on an exposed hilltop/escarpment site south-west of Bristol.
- **Seasonal hazards:** The AIP's explicit **windshear/turbulence caution for strong SE (RWY 09) / strong W (RWY 27) wind** is the field's standout hazard, directly tied to its elevated, exposed siting — brief this on every strong-wind operation regardless of season. Standard UK winter icing/snow season also applies. See [`OM E — Adverse Weather and Windshear`](../../../../../flight-ops/adverse-weather-and-windshear.md) and [`OM E — Cold Weather Operations`](../../../../../flight-ops/cold-weather-operations.md).
- **Local effects:** Hilltop/escarpment exposure amplifies wind and turbulence effects versus a low-lying field; no coastal-fog analogue identified in reachable sources.

> **Live weather — pull at planning (T-2h):** METAR, TAF, TREND, SIGMET/AIRMET. Not stored here.

---

## 15. NOTAMs

> **Pull at planning (T-2h).** Perishable — not stored here. Check: runway/taxiway closures, ILS/DME/NDB serviceability (CAT III equipment status on RWY 27), lighting, obstacle/crane, RFF downgrade, GPS/RAIM, laser/UAV/model-aircraft activity, bird-activity NOTAMs. Source: official AIS / OFP NOTAM block.

---

## 16. Fuel & alternate planning notes

- **Typical role for us:** Destination/spoke — not a K Global base (`Base: No` `[VAMSYS mirror 2026-07-26]`). Note also the AIP's direct statement that **diversions may be refused except in an emergency** due to limited stand availability — a real constraint if EGGD is ever considered as a tactical alternate for another leg, distinct from its role as a scheduled destination.
- **Nearest suitable alternates:** Company preferred alternates [**EGLL**](../egll/index.md) (Heathrow), [**EGKK**](../egkk/index.md) (Gatwick), [**EGCC**](../egcc/index.md) (Manchester) `[VAMSYS mirror 2026-07-26]` — confirm suitability, runway/RFF adequacy and current minima per leg.
- **Fuel-uplift notes:** AVTUR Jet A-1, 0500–2359 (effectively H24) + arrangement; capacity up to 1,600 L/min. No pre-blended anti-icing additive confirmed in reachable sources — confirm FSII requirements per type/route. See [`OM E — Fuel Policy`](../../../../../flight-ops/fuel-policy.md).
- **Range/perf flags for our fleet:** 2,011 m runway with RWY 27's displaced threshold (LDA 1,881 m) is workable for narrowbody/regional types but a real weight/length constraint for a Code E widebody — check [`OM B — Fleet Capability Matrix`](../../../../../fleet/capability-matrix.md) per type before planning a widebody rotation.

---

## 17. Fleet-specific notes (optional)

- **Any Code E widebody type:** Named B787/A330 taxi guidance exists at this field (§13) confirming widebody operations are anticipated, but the **2,011 m runway with RWY 27's ~130 m threshold displacement** should be checked per type against weight/performance charts before planning a widebody rotation, especially at high takeoff/landing weight. RFF Category A8 is adequate for any K Global type. See [`OM B — Fleet Capability Matrix`](../../../../../fleet/capability-matrix.md).

---

## 18. Open items (🟧 — confirm against AIP / current AIRAC)

- **London FIR (EGTT) brief does not yet exist in this network.** EGGD sits inside London FIR airspace; only a Langen (EDGG) FIR brief has been built so far (for Germany). This is a genuine, factual network gap — flagged here for a future build.
- **AIRAC currency** — all runway/comms/navaid figures below are sourced to the UK NATS eAIP AD 2 EGGD, AIRAC effective 2020-10-08, several years old; not independently re-confirmed against a current AIRAC cycle.
- **Mag variation** — sourced to a 2022 epoch (0.36° W, annual change 0.20° E); no 2026 drift estimate computed this pass.
- **SIDs/STARs (current names)** — listed from the AIRAC-2020 chart index; pull the live current-AIRAC procedure list before use.
- **Take-off minima** — not confirmed this pass.
- **Reverse-thrust policy** — no explicit statement found in reachable sources.
- **Preferential-runway utilisation split** — not published; treated as wind-driven inference only.
- **Named ground handling agent(s) and specific jet-fuel supplier** for our operation — not confirmed beyond the general list in §6.
- **RESA dimensions** — blank in the reachable declared-distances table.
- **Terrain/obstacle bearings** near the ARP — stated from the AIP obstacle table but not independently cross-checked against the current MSA/obstacle chart.

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim material (current-AIRAC charts) informs content but is not listed here.*

- **UK NATS eAIP — AIP United Kingdom, AD 2 EGGD**, AIRAC effective 2020-10-08 — https://www.aurora.nats.co.uk/htmlAIP/Publications/2020-10-08-AIRAC/html/eAIP/EG-AD-2.EGGD-en-GB.html (retrieved 2026-07-26). **This AIRAC cycle is several years old — treat exact current runway/comms/navaid figures as needing a live-AIRAC cross-check.**
- OurAirports — https://ourairports.com/airports/EGGD/ (retrieved 2026-07-26). *ARP/elevation/runway cross-check.*
- SkyVector — https://skyvector.com/airport/EGGD (retrieved 2026-07-26). *Coordinate/chart-index cross-check.*

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-26 | Built from UK AIP (NATS AIS); K Global fields from live VAMSYS; 4-page pack. |
