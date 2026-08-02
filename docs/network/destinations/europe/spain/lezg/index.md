# LEZG — Zaragoza · Airport Briefing

**LEZG / ZAZ** · Garrapinillos, Zaragoza, Aragón, Spain · Europe
**Version** v0.1 · **Updated** 2026-07-26 · **Status** Draft — AIP España-derived

> **Read-me:** Planning aid for the sim, not a chart. Static data is drawn from AIP España (ENAIRE eAIP), AD 2-LEZG; approaches/SIDs/STARs are listed **by name only or flagged not-yet-confirmed** — fly the charted current-AIRAC version. Live weather/NOTAMs are pulled at planning (§14/§15). Open 🟧 items are listed in §18. Flag legend 🟥 restriction/hazard · 🟧 caution/unverified · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| ARP (lat/long) | 41°39′58″N / 1°02′30″W (41.6661, -1.0417) `[AIP AD 2-LEZG]` |
| Field elevation | **263 m / 862 ft AMSL** (reference temperature 32°C, low average 7°C) |
| Mag variation | **0° (2020 epoch)**, annual change 8.0′E |
| Time zone | UTC+1 (CET) / UTC+2 (CEST, EU DST observed) |
| Runway(s) | **12L/30R** 3,032 × 45 m (civil-primary) · **12R/30L** 3,718 × 45 m (joint civil/military, longer pair — a former NASA Space Shuttle Transoceanic-Abort-Landing contingency site) |
| Preferential runway | Not published in reachable AIP text; the field is subject to the strong, NW-channelled **Cierzo wind** of the Ebro valley (§3.4) |
| Longest LDA | 3,718 m (RWY 12R/30L) |
| Approaches | **ILS CAT II/III on RWY 30R** (ident IZZA); **RWY 12L is LVTO-authorised (takeoff only, no published landing approach in the civil AIP extract)**; military-only PAR/SRE radar approaches published for RWY 30R/12L/30L/12R (§18) |
| RFF category | **CAT 7 civil / CAT 8 military**; CAT 8/9 on demand for civil ops 🟩 |
| Control type | **Radar** — Zaragoza APP/TWR on the field, **H24 ATS** (unlike the other two Spanish fields in this pack); en-route under **Madrid ACC (LECM)** — see [Europe (Continental) Airspace Briefing](../../../../airspace/europe.md) 🟧 |
| Elevation class | Moderate elevation (862 ft), warm reference temperature (32°C) — not classically hot-and-high, but warmer/higher than the other two Spanish fields in this pack; confirm performance margin for a summer-afternoon departure |
| Special-airport status | 🟥 **Joint civil/military aerodrome** (Ejército del Aire y del Espacio, 15th Group) with active military flying, PPR requirements for foreign-state aircraft, runway arresting-cable installations, and a major air-cargo operation sharing the same infrastructure — see §5 |
| Customs / PoE | **Yes** — Customs CIV **H24** 🟩; Immigration hours tied to published airport hours 🟧 |
| K Global category | 🟧 **Not in VAMSYS** `[VAMSYS mirror 2026-07-26]` — field has not been created in the network; all VAMSYS-sourced fields in this pack are placeholders |
| K Global base | 🟧 **Not in VAMSYS** |
| Company preferred alternates | 🟧 **Not in VAMSYS** |
| Taxi-in / taxi-out (VAMSYS) | 🟧 **Not in VAMSYS** |

---

## 2. Validation summary

| Domain | Flag | Note |
|---|---|---|
| Terrain / CFIT | 🟩 | Zaragoza sits on the open Ebro valley plain at 862 ft; no significant close-in high terrain identified in reachable sources. |
| Runway length vs fleet perf | 🟩 | 3,032-3,718 m runway pair is ample for any K Global widebody type; the longer pair (12R/30L) was historically qualified as a NASA Space Shuttle TAL contingency site, underlining its length/strength credentials. |
| Approach availability / minima | 🟧 | ILS CAT II/III on RWY 30R only; RWY 12L is LVTO-authorised but the civil AIP extract does not publish a landing approach for it — confirm current-AIRAC approach coverage for all four runway ends. |
| Airspace / traffic / control | 🟧 | Joint civil/military field with **caution for military flights** explicitly stated in the AIP; simultaneous parallel-runway use (12L/30R and 12R/30L) is VFR/IFR-permitted **only in VMC**. |
| Weather / seasonal hazard | 🟥 | The Ebro valley's **Cierzo wind** — a strong, NW-channelled, often-gale-force wind recorded up to 160 km/h historically at this field — is the defining regional weather hazard (§3.4). |
| Curfew / slots / hours | 🟧 | ATS is **H24**; commercial passenger operations needing extended hours require a **12-hour-advance SLOT PPR**; GA/IFR-VFR general aviation traffic requires a **3-hour-advance SLOT PPR** (apron-capacity dependent). |
| RFF category vs our types | 🟩 | CAT 7 civil (CAT 8/9 on demand) — adequate for the network. |
| Fuel availability | 🟩 | Jet A-1 and 100LL confirmed (Exolum, SLCA); no stated civil refuelling-capacity limitation. |
| Customs / handling / security | 🟩 | Customs CIV **H24**; four named civil handling agents; mandatory handling contract for all civilian operations, including non-commercial. |

---

## 3. Threat & Error Management (TEM)

### 3.1 CFIT / Terrain 🟩
LEZG sits on the flat Ebro valley plain at 862 ft AMSL — no significant close-in high terrain was identified in reachable AIP text. This is not the operative threat at this field; verify the MSA ring on the current chart as routine practice, but terrain is not the field's defining hazard.

### 3.2 Airborne conflict / traffic 🟧
Zaragoza is a **joint civil/military aerodrome** — the Spanish Air and Space Force's 15th Group is based here (Zaragoza Air Base), and the AIP explicitly cautions that **"caution must be exercised due to military flights."** Simultaneous use of the parallel runway pairs (12L/30R and 12R/30L) under mixed VFR/IFR traffic is **authorised only in VMC**. ATS is provided H24 by Zaragoza APP/TWR with radar service; en-route control is Madrid ACC (LECM) — see [Europe (Continental) Airspace Briefing](../../../../airspace/europe.md) 🟧.

### 3.3 Runway excursion 🟩
No displaced thresholds are published for the civil-relevant runway ends. RWY 12L/30R (3,032 m) and RWY 12R/30L (3,718 m) both carry ample declared distances relative to K Global fleet needs; intersection take-offs are available on both pairs. **RWY 30L is not usable for a landing manoeuvre by a B748/AN124-class aircraft** (TWY B-5 is not sized for that class), and **RWY 12R is not authorised for takeoff manoeuvres** under the same special heavy-aircraft procedure — these are aircraft-class-specific restrictions, not general excursion risks, but should be briefed if operating an exceptionally large type.

### 3.4 Weather threat 🟥
The Ebro valley is subject to the **Cierzo** — a strong, dry, predominantly north/northwest wind that funnels down the valley when a Bay-of-Biscay anticyclone pairs with Mediterranean low pressure. It is most common in autumn/winter but can occur in any season given even a small pressure gradient along the valley. **Historical gusts of up to 160 km/h have been recorded at Zaragoza**, with gusts over 100 km/h recorded several times a year — this is a genuine, well-documented regional hazard, not a minor caution, and given the runway orientation (12/30, roughly 120°/300° magnetic) a north-westerly Cierzo episode will present as a significant along-runway or crosswind component depending on the exact wind angle on the day. See [`OM E — Adverse Weather and Windshear`](../../../../../flight-ops/adverse-weather-and-windshear.md). **LVP are available** on RWY 30R (CAT II/III) and RWY 12L (LVTO) — see §3.5 and [`OM E — Low Visibility Operations`](../../../../../flight-ops/low-visibility-operations.md). A defined snow-plan season (1 Dec-31 Mar) applies.

### 3.5 Operational considerations 🟧
Three durable constraints define this field: (1) it is a **joint civil/military aerodrome** with active fast-jet and transport military flying, runway-mounted **arresting-cable barriers** (retractable/permanent, at several charted positions on both runway pairs), and PPR requirements for foreign-state aircraft; (2) the **Cierzo wind** (§3.4) is a serious, quantified crosswind/gust hazard; (3) **LVP procedures only allow one aircraft/formation to taxi at a time per apron zone**, and the tower has **no direct visual on the civil apron** during LVP, requiring "follow-me" guidance throughout — a materially different ground-movement regime from a standard LVP field. Zaragoza is also a **major European air-cargo gateway** (Atlas Air, Qatar Airways Cargo, Emirates SkyCargo, Cargolux, Ethiopian Cargo, and others), so expect a heavy-freighter operating environment sharing the same runway/taxiway system.

---

## 4. Cautions & Warnings

- **Joint civil/military aerodrome** — active military flying; "caution must be exercised due to military flights" is stated directly in the AIP.
- **The Cierzo wind** — a strong, NW-channelled Ebro-valley wind with historical gusts to 160 km/h; treat as a serious crosswind/gust threat, not a background weather note.
- **Runway-mounted arresting-cable barriers** exist at multiple charted positions on both runway pairs (military installations) — be aware of their presence even though they are not normally a hazard to civil fixed-wing operations under standard use.
- **RWY 30L is not usable for landing, and RWY 12R is not usable for takeoff**, under the special heavy-aircraft (B748/AN124-class) procedure — a class-specific restriction to be aware of for exceptionally large aircraft.
- **Simultaneous parallel-runway VFR/IFR use is authorised only in VMC.**
- **Significant bird/raptor activity** — wood pigeons and rock doves resident; probability of birds of prey (vultures, buzzards, kites, eagles); seasonal starling, crane (autumn/winter) and white stork (summer) movements.
- **Not currently in VAMSYS** — every K Global-specific field in this brief (category, base flag, alternates, taxi times) is unset; do not assume network integration until confirmed.

---

## 5. Aerodrome category, restrictions & crew qualification

- **Special-airport / category:** Not formally ICAO-categorised as restricted-crew in reachable AIP text, but the **joint civil/military status**, active fast-jet traffic, and the Cierzo-wind exposure together indicate a field warranting a specific company briefing — confirm against OM B/training standards, and note the field is **not yet in VAMSYS** at all. 🟧
- **Crew-qualification gate:** CAT II/III currency relevant given RWY 30R's ILS CAT II/III equipage and LVP availability. 🟧
- **Operating restrictions / bans:** Heavy-aircraft (B748/AN124-class) landing/takeoff restrictions by runway (§3.3); no RNP AR ban found in reachable sources — verify current AIRAC. 🟧
- **Overflight / entry / permits:** Foreign **state/military** aircraft require **PPR at least 72 hours in advance**; hazardous-goods transport by foreign state aircraft requires PPR at least **three working days** in advance. Standard civil EU/Schengen arrival otherwise requires no special permit. 🟥 (state/military only)
- **Operations notes:** Civil administration — **Aena**; military administration — **Ejército del Aire y del Espacio** (Base Aérea de Zaragoza). Handling is mandatory for all civilian operations, including non-commercial.

---

## 6. General / hours / services

| Item | Value | Flag |
|---|---|---|
| ATS hours | **H24** | 🟩 |
| AD operating hours (civil, passenger) | V: 0445-2100 (PPR extension), I: 0545-2200 (PPR extension); **H24 all year for cargo flights**; military H24 | 🟧 |
| Night / curfew restrictions | No hard passenger-ops curfew found; commercial pax flights needing extended hours require a **12-hour SLOT PPR**; cargo operates H24 | 🟧 |
| RFF category | CAT 7 civil / CAT 8 military; CAT 8/9 civil on demand | 🟩 |
| Fuel | Jet A-1, 100LL — Exolum Aviation, SLCA; military F-34 separately available | 🟩 |
| PCN | Runway/apron/taxiway-specific — see §7; civil apron PCN ranges 45-107/R or F/A-C/W/T by stand | 🟩 |
| Customs | CIV **H24** | 🟩 |
| Handling / FBO | SOUTH, GROUNDFORCE, ARAGONAIR, UNITED AVIATION — mandatory contract for all civilian operations | 🟩 |

---

## 7. Runways & declared distances

| RWY | Dimensions | Surface / PCN | TORA | TODA | ASDA | LDA | Notes |
|---|---|---|---|---|---|---|---|
| 12L | 3,032 × 45 m | ASPH / PCN 60/F/A/W/T (46/F/A/W/T section 1,220-1,450 m from THR) | 3,032 m | 3,722 m | 3,332 m | 3,032 m | LVTO-authorised; no published civil landing approach |
| 30R | 3,032 × 45 m | ASPH / PCN 60/F/A/W/T (46/F/A/W/T section 1,582-1,812 m from THR) | 3,032 m | 3,032 m | 3,217 m | 3,032 m | ILS CAT II/III (IZZA); primary civil precision runway |
| 12R | 3,718 × 45 m | ASPH (first 305 m CONC, PCN 59/R/A/W/T) / PCN 56/F/A/W/T | 3,718 m | 4,568 m | 4,018 m | 3,718 m | Not usable for takeoff by B748/AN124-class under the special procedure |
| 30L | 3,718 × 45 m | ASPH (first 305 m CONC, PCN 59/R/A/W/T) / PCN 56/F/A/W/T | 3,718 m | 4,568 m | 4,018 m | 3,718 m | Not usable for landing by B748/AN124-class under the special procedure |
| 12L INT A2 / A3 | — | — | 2,248 / 1,498 m | 2,938 / 2,188 m | 2,548 / 1,798 m | — | Intersection departures |
| 30R INT A3 / A4 | — | — | 1,534 / 2,234 m | 1,534 / 2,234 m | 1,719 / 2,419 m | — | Intersection departures |
| 12R INT B3 / C4-B4 | — | — | 1,903 / 2,508 m | 2,753 / 3,358 m | 2,203 / 2,808 m | — | Intersection departures |
| 30L INT B2 / C3-B3 | — | — | 2,544 / 1,815 m | 3,394 / 2,665 m | 2,844 / 2,115 m | — | Intersection departures |

*Source: AIP España, AD 2-LEZG items 12/13 (WEF 09-JUL-26, AIRAC AMDT 408/26). All distances in metres. RESA 240 × 150 m on all four runway ends; strip 3,605 × 300 m (12L/30R) and 4,438 × 300 m (12R/30L).*

---

## 8. Communications

| Service | Callsign | Frequency | Hours | Notes |
|---|---|---|---|---|
| Approach | Zaragoza APP | 119.305 / 127.055 / 125.005 (civil); 296.750 / 313.500 / 363.675 (military) | H24 | |
| Tower | Zaragoza TWR | 122.105 (civil) | H24 | |
| Ground | Zaragoza TWR | 118.105 (GMC) | H24 | |
| GCA (ASR/PAR) | Zaragoza GCA | 121.500 / 243.000 / 130.025 / 123.300 / 235.125 / 281.375 / 374.525 / 375.575 / 387.225 | Mon-Fri except holidays, V 0600-1230 / I 0700-1330 | Military radar-approach service; hours may vary by NOTAM |
| Emergency | — | 121.500 / 243.000 | H24 | |
| Military | — | 139.300 / 257.800 / 292.200 / 388.200 / 396.900 | H24 | |
| Centre / FIR | Madrid ACC (LECM) | Per current AIRAC | H24 | See [Europe (Continental) Airspace Briefing](../../../../airspace/europe.md) 🟧 |

*Source: AIP España, AD 2-LEZG item 18 (WEF 09-JUL-26). Field is unusual in this pack for having a full H24 ATS structure and a dedicated military GCA (radar approach) service.*

---

## 9. Navaids

| Aid | Ident | Freq | Hours | Notes |
|---|---|---|---|---|
| VOR | ZAR | 113.000 | H24 | Coverage 40 NM, sector-specific altitude minimums |
| DME | ZAR | CH 77X | H24 | |
| TACAN | ZZA | CH 64X | H24 | Radial 123, 10,000 m NW from THR 12R, 50 NM coverage |
| TACAN | TZZ | CH 82X | H24 | |
| NDB | ZRZ | 389.000 | H24 | 50 NM coverage |
| ILS/LOC 30R | IZZA | 109.500 | H24 | CAT II/III |
| ILS/GP 30R | — | 332.600 | H24 | 3°, RDH 16.6 m |
| ILS/DME 30R | IZZA | CH 32X | H24 | |

*Source: AIP España, AD 2-LEZG item 19. Only RWY 30R carries an ILS in the civil AIP extract; RWY 12L, 12R and 30L rely on radar (military GCA), RNP or visual references — confirm current-AIRAC civil approach coverage for these ends (§18).*

---

## 10. Arrival

- **Transition altitude / level:** 1,850 m / 6,000 ft (CTR upper limit) — confirm TA/TL split on current chart. 🟧
- **Speed:** Standard 250 KIAS below FL100 (EU/ICAO norm) — confirm no local override on current chart.
- **Preferential runway logic:** Not published in reachable AIP text; the Cierzo wind (§3.4) will be the dominant practical driver on many days given its frequency and strength.
- **Approaches (names only — verify minima on current AIRAC charts):**

| RWY | Approach | Notes |
|---|---|---|
| 30R | ILS CAT II/III (IZZA) | Primary civil precision runway |
| 12L | — | LVTO-authorised for departure; no published civil landing approach found this pass 🟧 |
| 12R / 30L | Military PAR/SRE radar approaches published (§18, exclusive military use) | Civil RNP/visual approach coverage not confirmed this pass 🟧 |

- **STARs (names only):** Not confirmed in reachable research pass — pull the current-AIRAC STAR list at planning. 🟧
- **LVP:** **Available.** Trigger: any transmissometer RVR < 600 m, or visibility < 800 m if transmissometers are unserviceable, **or** a reported cloud-base ceiling ≤ 250 ft (75 m). Cancelled when all transmissometers show RVR > 1,000 m **and** cloud base ≥ 300 ft (90 m). During LVP, the **tower has no direct visibility of the civil apron**, so a "follow-me" vehicle guides aircraft on request on both the civil and military aprons, and **only one aircraft/formation is normally authorised to taxi at a time** within each of two defined apron zones (with TWY C1 as a shared, overlap-sensitive taxiway).
- **Missed approach watch-items:** Traffic/terrain are not the primary drivers; the Cierzo wind and the joint civil/military traffic mix are the standing concerns on any go-around.

---

## 11. Departure

- **SIDs (names only — fly the charted version):** Not confirmed in reachable research pass — pull the current-AIRAC SID list at planning. 🟧
- **RNP / climb-gradient requirements:** Not independently confirmed this pass — verify per-SID gradient/equipage on the current chart. 🟧
- **Take-off minima:** RWY 12L and RWY 30R are LVTO-authorised; exact current minima not confirmed this pass. 🟧
- **Start-up / push-back:** Ground engine tests at idle power are conducted at the stand; above-idle tests use the holding bay at A-5, after coordinating with the Airport Operations Coordination Centre (CEOPS). Code E/F aircraft taxi with outboard engines at idle across the entire movement area (four-engined types).
- **ATC slot / CTOT & clearance:** Commercial passenger flights needing extended operating hours require a **12-hour-advance SLOT PPR** from LEZG CEOPS; GA/IFR-VFR traffic requires a **3-hour-advance SLOT PPR**, apron-capacity dependent. Standard EUROCONTROL ATFM/CTOT practice otherwise expected. 🟧
- **De-icing:** **Available H24** at commercial-aviation stands, using hot water and glycol units, provided by handling agents. See [`OM E — Cold Weather Operations`](../../../../../flight-ops/cold-weather-operations.md).

---

## 12. Noise & Environmental

- **Noise abatement (NAP):** No fixed-wing NAP/NADP detail confirmed in reachable sources. 🟧
- **Night noise / dB limits:** Not confirmed in reachable sources. 🟧
- **Engine run-up restrictions:** Above-idle ground engine tests must be coordinated with CEOPS and conducted at the A-5 holding bay (idle-power tests at the occupied stand).
- **Reverse thrust / idle-reverse policy:** Not confirmed in reachable sources — verify locally. 🟧

---

## 13. Ground operations

- **Stands for our types:** 🟩 Civil apron PRKG 1-16 (concrete, PCN 62-107 by section) is the relevant commercial-aviation stand block; **Code E/F aircraft exit the civil apron via TWY C-2.2** specifically to minimise jet-blast impact on other stands. Mandatory two-engines-running access/exit with minimum thrust applies at PRKG 12/13 and 6/6A/7/7A/8/8A/9/9A.
- **Push-back:** Not separately restricted beyond the jet-blast/engine-running rules above.
- **Standard taxi routes:** Dedicated routings are published for **B748/AN124-class aircraft** by threshold in use (e.g. THR 30R arrivals vacate via A-1, taxi TA to C-1.1; THR 12L arrivals vacate via A-5, cross TA to C-2.2) — **THR 30L is not usable for landing and THR 12R is not usable for takeoff** under this procedure, and most relevant taxiways are ≥23 m wide except TWY A-1/A-5 and TWY B-5 (rejected-takeoff use only).
- **Hot spots / tight taxiways:** 🟧 TWY C1 is a **shared taxiway between the northern and southern manoeuvring-area zones** during LVP — aircraft on C1 count as being in both zones for separation purposes. No other named hot spot confirmed in reachable sources.
- **Follow-me:** Used routinely during LVP (mandatory, tower has no apron visibility) and available generally on request.

---

## 14. Weather & seasonal (durable)

- **Climate / prevailing wind:** Ebro valley continental-Mediterranean climate; warm reference temperature (32°C) relative to the other two Spanish fields in this pack.
- **Seasonal hazards:** 🟥 **The Cierzo wind** — a strong, dry, NW-channelled Ebro-valley wind, most frequent in autumn/winter but possible year-round; historical gusts recorded up to 160 km/h at this field, with gusts over 100 km/h several times a year. A defined snow-plan season (1 Dec-31 Mar) also applies. See [`OM E — Adverse Weather and Windshear`](../../../../../flight-ops/adverse-weather-and-windshear.md).
- **Local effects:** Significant resident and migratory bird activity — wood pigeons and rock doves resident; probability of birds of prey (vultures, buzzards, kites, eagles); starlings (autumn/winter), cranes (autumn/winter) and white storks (summer) on seasonal movement patterns.

> **Live weather — pull at planning (T-2h):** METAR, TAF, TREND, SIGMET/AIRMET, with particular attention to Cierzo-driven wind/gust reports. Not stored here.

---

## 15. NOTAMs

> **Pull at planning (T-2h).** Perishable — not stored here. Check: runway/taxiway closures, military-activity NOTAMs, arresting-cable-barrier status, navaid U/S, ILS CAT II/III equipment status, RFF downgrade, GPS/RAIM, bird-activity NOTAMs. Source: official AIS / OFP NOTAM block.

---

## 16. Fuel & alternate planning notes

- **Typical role for us:** 🟧 Not currently in VAMSYS — role undetermined. Given the field's runway length/strength and its status as a major European air-cargo gateway, it may warrant future consideration as a technical-stop, diversion, or cargo-network field.
- **Nearest suitable alternates:** 🟧 Not confirmed — pull the nearest suitable Spanish/regional alternates at planning pending VAMSYS integration; LEZG's own long runway pair (§16 above) makes it a plausible candidate alternate *for* other Spanish fields, subject to confirmation.
- **Fuel-uplift notes:** Jet A-1 and 100LL confirmed via Exolum Aviation and SLCA; no stated civil refuelling-capacity limitation. See [`OM E — Fuel Policy`](../../../../../flight-ops/fuel-policy.md).
- **Range/perf flags for our fleet:** Runway length/strength (3,032-3,718 m, historically NASA Space Shuttle TAL-qualified) is **not** a limiting factor for any K Global type. See [`OM B — Fleet Capability Matrix`](../../../../../fleet/capability-matrix.md).

---

## 17. Fleet-specific notes (optional)

- No K Global type-specific consideration identified beyond the general Cierzo-wind crosswind/gust threat (§3.4/§14) and the joint civil/military traffic environment (§3.2). See [`OM B — Fleet Capability Matrix`](../../../../../fleet/capability-matrix.md).

---

## 18. Open items (🟧 — confirm against AIP / current AIRAC)

- **Field is not in VAMSYS** — category, base flag, alternates, taxi times all unset; confirm whether/when this field is planned for network integration.
- Civil approach coverage for RWY 12L, 12R and 30L — the civil AIP extract publishes a landing ILS only for RWY 30R; confirm current-AIRAC RNP/visual coverage for the other three ends.
- SIDs/STARs (current names and RNP/gradient detail) — not obtained in this research pass; pull the live current-AIRAC procedure list before use.
- Take-off/LVTO minima exact figures.
- Preferential-runway/config logic by wind — not found in reachable AIP text.
- Reverse-thrust/idle-reverse policy, night noise/dB limits, NAP/NADP detail.
- Current status/serviceability expectations around the runway arresting-cable installations for civil planning purposes (normally a military-only consideration).

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim material (current-AIRAC charts) informs content but is not listed here.*

- AIP España (ENAIRE eAIP) — AD 2-LEZG, items 1-25, WEF 09-JUL-26 (AIRAC AMDT 408/26) — https://aip.enaire.es/aip/contenido_AIP/AD/AD2/LEZG/LE_AD_2_LEZG_en.pdf (retrieved 2026-07-26). Runway/declared-distance data, RFF, frequencies, navaids, local regulations, LVP, noise/heavy-aircraft procedures, bird hazards, arresting-system inventory.
- Wikipedia — "Zaragoza Airport" — https://en.wikipedia.org/wiki/Zaragoza_Airport (retrieved 2026-07-26). Cargo-carrier network, NASA Space Shuttle TAL history, traffic statistics.
- Wikipedia — "Zaragoza Air Base" — https://en.wikipedia.org/wiki/Zaragoza_Air_Base (retrieved 2026-07-26). Joint civil/military status, Cold War USAF history.
- Wikipedia — "Cierzo" — https://en.wikipedia.org/wiki/Cierzo (retrieved 2026-07-26). Regional wind phenomenon, historical gust-speed records at Zaragoza.
- OurAirports — https://ourairports.com/airports/LEZG/ (retrieved 2026-07-26). ARP/elevation/runway cross-check.

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-26 | Built from AIP España (ENAIRE); K Global fields from live VAMSYS; 4-page pack. |
