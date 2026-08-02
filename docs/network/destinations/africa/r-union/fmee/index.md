# FMEE — La Réunion-Roland Garros · Airport Briefing

**FMEE / RUN** · Sainte-Marie, 7 km E of Saint-Denis, Réunion (French DOM) · Africa
**Version** v0.1 · **Updated** 2026-07-26 · **Status** Draft — French SIA eAIP-derived

> **Read-me:** Planning aid for the sim, not a chart. Static data is drawn from the French SIA eAIP (AIP RUN, AD 2 FMEE) plus standard public aeronautical data; approaches/SIDs/STARs are listed **by name only** — fly the charted current-AIRAC version. Live weather/NOTAMs are pulled at planning (§14/§15). Open 🟧 items are listed in §18. Flag legend 🟥 restriction/hazard · 🟧 caution/unverified · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| ARP (lat/long) | 20°53′24″S 055°30′59″E — intersection of RWY 14/32 and TWY B centrelines `[French SIA eAIP AD 2 FMEE.2]` |
| Field elevation | **66 ft** reference elevation (individual THR elevations 24–62 ft — see §7); reference temperature **29.9 °C** |
| Geoid undulation | 11 ft |
| Mag variation | 19.1859° W (2025 epoch, 0.05°/yr annual change) |
| Time zone | UTC +4 (no DST) |
| Runway(s) | **12/30** — 3,200 × 45 m asphalt/bituminous concrete, PCN 72 F/B/W/T · **14/32** — 2,670 × 45 m asphalt/bituminous concrete, PCN 73 F/B/W/T |
| Preferential runway | No published preferential rule; **RWY 12 limited to 10 kt tailwind component** (§10/§11) |
| Longest LDA | 3,080 m (RWY 12 and RWY 30) |
| Approaches | ILS CAT I (LOC/GP, RWY 14); RNP (RWY 12, 14, 30 — incl. RNP AR variants on 12/14); VOR (RWY 14, RWY 30) |
| RFF category | **Level 9** (H24) |
| Control type | **Radar/procedural mix within LA REUNION CTR/TMA** — ATS provided by French **SNA/OI** (Service de la Navigation Aérienne Océan Indien); TA **12,000 ft** |
| Elevation class | Low coastal (66 ft) — **terrain is the driver, not elevation** 🟥 |
| Special-airport status | Not operator-categorised; A380/AN124 subject to specific ground-movement restrictions (§5/§13) |
| Customs / PoE | Yes (international); customs/immigration **H24** `[French SIA eAIP AD 2.3]` |
| K Global category | **L** `[VAMSYS mirror 2026-07-26]` |
| K Global base | **YES — SW Indian Ocean network** `[VAMSYS mirror 2026-07-26]` |
| Company preferred alternates | **FIMP** (Mauritius), **FSIA** (Seychelles) `[VAMSYS mirror 2026-07-26]` |
| Taxi-in / taxi-out (VAMSYS) | **12 min / 15 min** `[VAMSYS mirror 2026-07-26]` |

---

## 2. Validation summary

| Domain | Flag | Note |
|---|---|---|
| Terrain / CFIT | 🟥 | Réunion is an extremely mountainous volcanic island — **Piton des Neiges (~3,069 m/10,069 ft)**, the island's highest point, and the active **Piton de la Fournaise (~2,632 m/8,635 ft)** volcano dominate the interior. The field itself sits on the low coastal plain (66 ft); terrain rises sharply inland. |
| Runway length vs fleet perf | 🟩 | RWY 12/30 (3,200 m, LDA 3,080 m) is ample for our fleet; RWY 14/32 (2,670 m, LDA down to 2,195 m on RWY 32) is shorter — confirm performance for the assigned runway. |
| Approach availability / minima | 🟧 | ILS CAT I only on RWY 14; RWY 12/30/32 are RNP/VOR only. Several RNP approaches have **VSS penetration** affecting LNAV/LNAV-VNAV or VOR minima lines (§18) — verify current chart. |
| Airspace / traffic / control | 🟧 | **LA REUNION CTR**, Class D, SFC–6,500 ft AMSL (6.5 NM radius on VOR-DME SDG); ATS provided within the LA REUNION TMA lateral limits **except where radio coverage is poor/unavailable** — a real gap to brief. |
| Weather / seasonal hazard | 🟥 | **SW Indian Ocean tropical cyclone season ≈ Nov–Apr**; the island's terrain also drives local convective/orographic effects. |
| Curfew / slots / hours | 🟧 | ATS/customs/health/fuel/handling/security all **H24**; AD administration office hours limited (0100–1930) — not a curfew, but confirm out-of-hours admin support. |
| RFF category vs our types | 🟩 | **Level 9** — exceeds our fleet's requirement. |
| Fuel availability | 🟩 | 100LL, JET A1, AVIFUEL all available **H24**; cash EUR/USD or World Fuel Service card for JET A1. |
| Customs / handling / security | 🟩 | Customs/immigration, health and security all confirmed **H24**; cargo handling is **PPR** with the handling agent. |

---

## 3. Threat & Error Management (TEM)

### 3.1 CFIT / Terrain 🟥
Réunion is one of the most mountainous islands in the world for its size — the extinct **Piton des Neiges** massif (~3,069 m/10,069 ft) dominates the centre-north and the active shield volcano **Piton de la Fournaise** (~2,632 m/8,635 ft) the south-east. FMEE sits on the low NE coastal plain (66 ft) with high ground close inland; local obstacles near the field itself are modest (masts/antennas 150–500 m/500–1,650 ft AMSL at various bearings, per §7 below), but the island interior rises to over 3,000 m within a few kilometres of the coast. Fly the charted SID/STAR/approach precisely; read exact MSA sectors and grid heights off the current area/approach chart — do not improvise headings or a visual shortcut over high ground.

### 3.2 Airborne conflict / traffic 🟥
ATS is provided within the **LA REUNION CTR** (Class D, SFC–6,500 ft AMSL, 6.5 NM radius centred on VOR-DME **SDG**) and the surrounding TMA by French **SNA/OI**, with a published Transition Altitude of **12,000 ft**. The AIP itself flags that ATS/flight-information services are **not guaranteed in areas of reduced or non-existent radio coverage** within the TMA — a genuine gap around the island's high terrain. Réunion sits within the wider SW Indian Ocean island/oceanic airspace picture; cross-ref the **[Africa Airspace brief](../../../../airspace/africa.md)**, which places this sector alongside **Antananarivo (FMMM)**, Mauritius (FIMM) and Seychelles (FSSS) — confirm the exact upper-FIR handoff on the day. 🟧

### 3.3 Runway excursion 🟧
Two runway pairs with different characters: **RWY 12/30** (3,200 × 45 m, LDA 3,080 m both ends) is the primary, ILS-served-adjacent pair; **RWY 14/32** (2,670 × 45 m) is shorter with a materially reduced LDA on **RWY 32 (2,195 m)** against a TORA of 2,550 m — a real distance gap to brief. **RWY 12 carries a published 10 kt tailwind-component limit** (§10/§11) — a hard operating limit, not a preference. RESA provision varies: RWY 12 has an **EMAS-shaped RESA (71.4 × 55.62 m)** rather than a full-length RESA; RWY 14 has an unusually generous 240 × 90 m RESA; RWY 30/32 have standard 90 × 90 m RESAs.

### 3.4 Weather threat 🟥
Réunion sits in the **SW Indian Ocean tropical cyclone belt (≈ Nov–Apr)** — the same seasonal exposure as Mauritius and Madagascar (RSMC La Réunion is itself the regional cyclone-warning centre). The island's extreme terrain also drives strong local orographic/convective effects — expect turbulence, localised showers and wind shifts around high ground even outside cyclone season. See §14.

### 3.5 Operational considerations 🟧
Two published aircraft-specific ground-movement regimes apply at FMEE: an **A380 taxi restriction** (defined routing only, exclusive use of the manoeuvring area during A380 movements — §13) and a comparable **Antonov 124 accommodation regime** (routing, stand and simultaneous-use restrictions — §13). **RWY 12 has a 10 kt tailwind limit**; **RWY 14's PAPI and ILS glidepath are not harmonised** (§7/§9) — a genuine visual/instrument discrepancy to brief on that runway. A **VFR/lost-comms procedure with named reporting points** is published (§10/§11) and should be briefed for any non-IFR contingency.

---

## 4. Cautions & Warnings

- **RWY 12 — 10 kt tailwind-component limit is a published hard limit**, not a preference.
- **RWY 14: PAPI and ILS glidepath are not harmonised** — do not assume the visual and instrument references agree; fly the ILS as primary.
- **RWY 32 LDA (2,195 m) is materially shorter than its TORA (2,550 m)** — confirm performance against the correct declared distance.
- Extreme island terrain close inland (Piton des Neiges, Piton de la Fournaise) — ATS/radio coverage is **not guaranteed** in all parts of the TMA near high ground.
- **A380 and Antonov 124 ground movements trigger exclusive-use-of-manoeuvring-area restrictions** — expect a full ground stop for other traffic during these movements (§13).
- **Night landing on RWY 12 or RWY 30 requires PAPI** (compulsory per local flight procedures, §10/§11).
- Frequent **laser-dazzle reports** — brief crews to report immediately to ATC with location if possible.
- **Wildlife strike hazard** active from sunrise‑30 min to sunset+30 min.

---

## 5. Aerodrome category, restrictions & crew qualification

- **Special-airport / category:** Not operator-categorised as a restricted-crew "special airport." The standing crew-briefing items are the **RWY 12 tailwind limit**, the **RWY 14 PAPI/ILS non-harmonisation**, and the island-terrain environment. 🟧
- **Crew-qualification gate:** None published in the reachable AD 2 extract.
- **Operating restrictions / bans:** **RWY 12 limited to 10 kt tailwind component** (hard limit). **A380** taxi restricted to a defined route (stand 3 via TWY C only; stands 12/17 via TWY A only; TWY B/M/F/G prohibited; TWY A extension abeam stands 4–10 prohibited; all other aircraft movement prohibited during an A380 movement; designated stands 3 nose-in, 12/17 nose-out). **Antonov 124** accommodated only via RWY 12-30, RWY 14-32 and TWY A up to stand 12/17, with simultaneous-use prohibitions on the manoeuvring area and specific stands, mandatory follow-me/pusher-tow guidance, and post-movement turn-pad inspection.
- **Overflight / entry / permits:** Réunion is French territory (EU outermost region) — standard French/EU international-arrival requirements apply; no special state permit identified beyond normal international ops. 🟧
- **Operations notes:** ANSP — **SNA/OI** (Service de la Navigation Aérienne Océan Indien, DGAC France). AD reserved for **radio-equipped aircraft only**.

---

## 6. General / hours / services

| Item | Value | Flag |
|---|---|---|
| AD administration hours | 0100–1930 | 🟧 |
| Customs & immigration | H24 | 🟩 |
| Health/sanitary services | H24 | 🟩 |
| AIS briefing office (BIA/BRIA) | H24 | 🟩 |
| ARO | H24 | 🟩 |
| MET briefing office | H24 (associated: Chaudron interregional MET centre, Sainte-Clotilde) | 🟩 |
| ATS | H24 | 🟩 |
| Fuelling | H24 — 100LL, JET A1, AVIFUEL; cash EUR/USD or World Fuel Service card (JET A1) | 🟩 |
| Handling | H24; cargo handling **PPR** from handling agent | 🟧 |
| Security | H24 | 🟩 |
| De-icing | **NIL** | 🟩 |
| RFF | **Level 9**, H24 — 3 foam engines + 1 light engine + 1 lifeboat (240-person capacity) | 🟩 |
| GRF (runway surface reporting) | H24 | 🟩 |

---

## 7. Runways & declared distances

**RWY 12/30 — 3,200 × 45 m bituminous concrete · PCN 72 F/B/W/T · TRUE 102.00°/282.00° · MAG 121°/301°**
**RWY 14/32 — 2,670 × 45 m bituminous concrete · PCN 73 F/B/W/T · TRUE 116.00°/296.00° · MAG 136°/316°**

| RWY | THR elevation | CWY | RESA | TORA | TODA | ASDA | LDA |
|---|---|---|---|---|---|---|---|
| 12 | 38 ft (DTHR 38 ft) | 500 m | EMAS-shaped, 71.4 × 55.62 m | 3,200 | 3,700 | 3,200 | 3,080 |
| 30 | 31 ft | 120 m | 90 × 90 m | 3,080 | 3,200 | 3,080 | 3,080 |
| 14 | 24 ft (DTHR 28 ft) | 55 m | 240 × 90 m | 2,670 | 2,725 | 2,670 | 2,550 |
| 32 | 62 ft (DTHR 65 ft) | 120 m | 90 × 90 m | 2,550 | 2,670 | 2,550 | 2,195 |

*Source: French SIA eAIP, AD 2 FMEE.12/.13, AIRAC eff. 11 JUN 2026. All distances in metres. RWY 32 LDA (2,195 m) is notably shorter than its TORA (2,550 m) — brief the correct declared distance. Displaced thresholds exist on RWY 12 and RWY 14 (see DTHR elevations above).*

---

## 8. Communications

| Service | Callsign | Frequency | Hours | Notes |
|---|---|---|---|---|
| ATIS | LA REUNION | 126.800 | H24 | Tel +262 (0) 262 72 89 89 |
| Ground | ROLAND GARROS Ground | 121.900 | H24 | Also a VDF (Gonio/homer) frequency |
| Tower | ROLAND GARROS Tower | 118.400 | H24 | Also a VDF (Gonio/homer) frequency |
| Approach | ROLAND GARROS Approach | 119.400 | H24 | South of R 264 SDG; VDF (Gonio) service; operator SNA/OI |
| Approach | ROLAND GARROS Approach | 127.200 | H24 | Second APP frequency; VDF (Gonio) service |
| VDF (Homer) | ROLAND GARROS Homer | 118.400 / 119.400 / 121.500 / 121.900 / 123.100 / 127.200 | H24 | Gonio service across multiple frequencies |

*Source: French SIA eAIP AD 2 FMEE.18, AIRAC eff. 11 JUN 2026. Exploitant/operator SNA/OI throughout.*

---

## 9. Navaids

| Aid | Ident | Freq | Hours | Notes |
|---|---|---|---|---|
| NDB | FXR | 382 kHz | H24 | 100 kW; operator SNA/OI |
| VOR-DME | SDG (Saint-Denis Gillot) | 112.9 MHz / CH 76X | H24 | **Unusable between R 180 and R 260 (by the south)** |
| LOC 14 (CAT I) | SD | 110.3 MHz | H24 | 136°/1,552 m from ARP |
| GP 14 | — | 335 MHz | H24 | RDH 17.8 m/58 ft (3° glidepath); **not harmonised with PAPI 14** (§4) |
| DME 14 | — | CH 40X | H24 | Co-located with GP; 0 NM = GP antenna |

*Source: French SIA eAIP AD 2 FMEE.19, AIRAC eff. 11 JUN 2026. RWY 14 is the only ILS-served runway; RWY 12/30/32 are RNP/VOR only.*

---

## 10. Arrival

- **Transition altitude / level:** TA **12,000 ft**; TL by QNH — not separately confirmed this pass. 🟧
- **Speed:** Standard 250 KIAS < FL100 (ICAO norm) — no local override identified.
- **Preferential runway logic:** No published preferential-runway rule; **RWY 12 is limited to a 10 kt tailwind component** (a hard limit, not a preference). Landing on RWY 32/30 flies a **right-hand circuit**.
- **Approaches (names only — verify minima on current AIRAC charts):**

| RWY | Approach | Notes |
|---|---|---|
| 12 | RNP (incl. RNP AR Y, RNP Z), LOC B, VPT B | No ILS |
| 14 | **ILS CAT I** (LOC SD/GP), RNP (FNA RNP Y AR, FNA RNP Z), RNAV (INA), VOR | Only ILS-served runway; PAPI/GP **not harmonised** |
| 30 | RNP, VOR | No ILS |
| 32 | — | No published approach in the reachable extract 🟧 |

- **STARs (names only):** RWY 12/14 — RNAV and conventional STAR sets published; RWY 30 — RNAV and conventional STAR sets published. Exact names not itemised in the reachable AD 2 text extract — pull the current-AIRAC chart list at planning. 🟧
- **LVP:** Not separately tabulated in the reachable AD 2 extract — verify current chart. 🟧
- **VSS (visual segment surface) penetration:** Several RNP/VOR approaches are AIP-flagged for VSS penetration affecting specific minima lines — **RWY 12 FNA RNP Z** and **RWY 14 FNA RNP Z** (LNAV, LNAV-VNAV), **RWY 30 RNP** (LNAV, LNAV-VNAV), **RWY 14 VOR** and **RWY 30 VOR** (VOR line), and **RWY 12/14 FNA RNP Y AR** (RNP 0.3 line) — confirm the affected minima on the current chart before planning that approach/minima combination.
- **Missed approach watch-items:** Terrain rises sharply inland on this island field — brief the published missed-approach track, heading and climb gradient against the interior high ground (Piton des Neiges massif) before commencing any approach.

---

## 11. Departure

- **SIDs (names only — fly the charted version):** RNAV and conventional SID sets published for RWY 12, RWY 14, RWY 30 and RWY 32 (individual SID names not itemised in the reachable AD 2 text extract) — pull the current-AIRAC chart list at planning. 🟧
- **RNP / climb-gradient requirements:** RNP procedures exist on multiple runways (§10); confirm aircraft RNP capability and FMS database currency before selecting an RNP departure/arrival pairing.
- **Take-off minima:** Not separately tabulated in the reachable AD 2 extract — verify current chart. 🟧
- **Noise-related departure instruction:** RWY 12 conventional departure carries a specific noise-related instruction (AD 2 FMEE SID RWY12 CONV INSTR 01) — see §12.
- **Start-up / push-back:** No cross-bleed/APU-specific procedure identified; standard Tower/Ground coordination via the combined VDF/Gonio frequencies (§8).
- **ATC slot / CTOT & clearance:** No CTOT/slot-coordination regime identified in the reachable AD 2 extract. 🟧
- **De-icing:** **NIL** (tropical field).

---

## 12. Noise & Environmental

- **Noise abatement (NAP):** A specific noise-related instruction applies to the **RWY 12 conventional SID** (AD 2 FMEE SID RWY12 CONV INSTR 01) — pull the current chart for the exact routing/altitude constraint. 🟧
- **Night noise / dB limits:** None identified in the reachable extract.
- **Engine run-up restrictions:** None identified.
- **Reverse thrust / idle-reverse policy:** None identified.

---

## 13. Ground operations

- **Stands for our types:** A detailed type/stand compatibility matrix is published (17 numbered stands plus sub-positions and a GA apron) covering everything from the ATR/E135/A220 family up to B747/A380/AN124 — **A339 (our long-haul reference type) is compatible with several numbered stands**; confirm the exact assignment with handling. 🟧
- **Push-back:** Not separately itemised — standard practice via Ground/Tower coordination.
- **A380 taxi restriction:** A380-800 taxies **only** between runways and stands via the defined route: TWY C for stand 3; TWY A for stands 12 and 17; **TWY B, M, F and G are prohibited** for the type, as is the TWY A extension abeam stands 4–10. **All other aircraft movement on the aerodrome is prohibited during an A380 movement.** Designated A380 stands: 3 (nose-in), 12 and 17 (nose-out).
- **Antonov 124 accommodation:** Routes limited to RWY 12-30, RWY 14-32, TWY A up to stand 12, and stands 12/17. Simultaneous use of the manoeuvring area (or stand 12) by the AN124 and RWY 14-32 by any other aircraft is **prohibited**. Turn pads are inspected after every AN124 use. Stands 10B/11/13 are closed while AN124 is on stand 12; stand 16 is closed while AN124 is on stand 17. AN124 movement is guided by follow-me vehicle and, between stands 12 and 17 via TWY A, by pusher/tow.
- **Runway turn-around areas:** Visual aids (yellow marking) at each end; **use limited to 10 kt maximum with an 80% maximum turning radius**.
- **Taxiway widths/strength:** TWY A 23 m (66 F/B/W/T); TWY B 24 m (61 F/B/W/T, **closed to A380**); TWY C 27 m (69 F/B/W/T); TWY F/G 7.5 m (14/13 F/B/W/T — GA-scale only); TWY M 19 m (53 F/B/W/T, **closed to A380**).
- **Follow-me:** Available (mandatory for A380/AN124 guided movements).

---

## 14. Weather & seasonal (durable)

- **Climate / prevailing wind:** Tropical maritime, strongly modulated by the island's extreme relief (Piton des Neiges, Piton de la Fournaise) — local wind, cloud and turbulence effects vary sharply with terrain and time of day.
- **Seasonal hazards:** **SW Indian Ocean tropical cyclone season ≈ Nov–Apr** (RSMC La Réunion is the regional cyclone-warning authority) — the same seasonal exposure shared with Mauritius and Madagascar. Orographic convection and localised heavy rain are a year-round risk given the terrain.
- **Local effects:** Terrain-induced turbulence, gap winds and localised showers around the high interior; **RWY 12's 10 kt tailwind limit** is a direct operational response to local wind behaviour on that runway.

> **Live weather — pull at planning (T-2h):** METAR, TAF, TREND, SIGMET/AIRMET, TC advisory (RSMC La Réunion). Not stored here.

---

## 15. NOTAMs

> **Pull at planning (T-2h).** Perishable — not stored here. Check: runway/taxiway closures, navaid U/S (esp. LOC/GP 14 — the only ILS), lighting, obstacle/crane, RFF status, GPS/RAIM for RNP (esp. the RNP AR approaches on RWY 12/14), current A380/AN124 movement notices, and any TC-related closure. Source: official AIS / SimBrief OFP NOTAM block.

---

## 16. Fuel & alternate planning notes

- **Typical role for us:** **Base — SW Indian Ocean network**, alongside FIMP and FSIA.
- **Nearest suitable alternates:** **FIMP** (Mauritius) and **FSIA** (Seychelles) `[VAMSYS mirror 2026-07-26]` — confirm suitability, runway/RFF adequacy and current minima per leg.
- **Fuel-uplift notes:** 100LL, JET A1 and AVIFUEL all available H24; payment by cash (EUR/USD) or World Fuel Service card for JET A1.
- **Range/perf flags for our fleet:** RWY 12/30 (3,200 m) is non-limiting; RWY 14/32 (2,670 m, LDA down to 2,195 m on RWY 32) should be checked against type performance for that specific runway. See OM B for type-specific figures.

---

## 17. Fleet-specific notes (optional)

- **A339** (OM B → widebody): compatible with the published stand matrix (confirm exact stand with handling); no field-length or RFF constraint on RWY 12/30. If assigned RWY 14/32, check performance against the shorter LDA (esp. RWY 32, 2,195 m).
- **General:** RWY 14's PAPI/ILS non-harmonisation and RWY 12's 10 kt tailwind limit are the two standing type-agnostic cautions for any arrival/departure planning here.

---

## 18. Open items (🟧 — confirm against AIP / current AIRAC)

- Exact SID/STAR names (not itemised in the reachable AD 2 text extract — chart-only).
- Take-off minima and LVP trigger conditions.
- RWY 32 published approach (none identified in the reachable extract).
- Exact FIR/upper-airspace handoff boundary relative to Antananarivo (FMMM) — see the [Africa Airspace brief](../../../../airspace/africa.md).
- A339 (and other K Global type) exact stand assignment against the published compatibility matrix.
- RWY 12 noise-related SID instruction detail (AD 2 FMEE SID RWY12 CONV INSTR 01).

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim material (current-AIRAC charts) informs content but is not listed here.*

- **French SIA eAIP, AIP RUN, AD 2 FMEE (AD 2.1–2.25)**, AIRAC eff. 11 JUN 2026 — https://www.sia.aviation-civile.gouv.fr/media/dvd/eAIP_11_JUN_2026/RUN/AIRAC-2026-06-11/html/eAIP/FR-AD-2.FMEE-fr-FR.html (retrieved 2026-07-26). *ARP/elevation/mag var, hours, RFF, apron/taxiway data, declared distances, lighting, comms, navaids, ATS airspace, local traffic regulations, noise, additional info.*
- OurAirports — https://ourairports.com/airports/FMEE/ , /runways.html , /frequencies.html (retrieved 2026-07-26). *Cross-check.*
- Wikipedia — "Roland Garros Airport" — https://en.wikipedia.org/wiki/Roland_Garros_Airport (retrieved 2026-07-26). *General/historical corroboration.*

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-26 | Built from the French SIA eAIP (AD 2 FMEE, AIRAC eff. 11 JUN 2026); K Global fields from live VAMSYS; 4-page pack replacing the 23-line stub. |
