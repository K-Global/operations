# LEMG — Málaga-Costa del Sol · Airport Briefing

**LEMG / AGP** · Málaga, Andalusia, Spain · Europe
**Version** v0.1 · **Updated** 2026-07-25 · **Status** Draft — AIP España (ENAIRE)-derived

> **Read-me:** Planning aid for the sim, not a chart. Static data is drawn from the AIP España (ENAIRE) AD 2-LEMG plus standard public aeronautical data; approaches/SIDs/STARs are listed **by name only or flagged not-yet-confirmed** — fly the charted current-AIRAC version. Live weather/NOTAMs are pulled at planning (§14/§15). Open 🟧 items are listed in §18. Flag legend 🟥 restriction/hazard · 🟧 caution/unverified · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| ARP (lat/long) | 36°40′30″N 004°29′57″W (36.67490, -4.49911) `[AIP España AD 2-LEMG]` |
| Field elevation | **16 m / 52 ft AMSL** (geoid undulation 47.5 m ±0.05 m) |
| Mag variation | 0° (2025 epoch); annual change 9.1′ E |
| Time zone | UTC+1 (CET) / UTC+2 (CEST, EU DST) |
| Runway(s) | **12/30** (2,749 × 45 m) and **13/31** (3,198 × 45 m) — two non-parallel asphalt runways in a "V" layout, both asphalt |
| Preferential runway | **Configuración Sur (preferred):** arrivals RWY12, departures RWY13. **Configuración Norte:** arrivals RWY31, departures RWY30 (or both on RWY31 in single-runway mode). See §3.3/§10/§11 for the important operational nuance — this is **segregated same-direction arrival/departure pairing**, not independent parallel ILS approaches |
| Longest LDA | 3,198 m (RWY13/31, both directions) |
| Approaches | **ILS CAT I on RWY12, RWY13 and RWY31** (plus a GLS/GBAS CAT I on RWY31); **RWY30 has no ILS/approach lighting** 🟧 — see the CAT III discrepancy flagged below |
| RFF category | **CAT 9** (no time-window reduction, unlike Alicante) |
| Control type | **Radar** — own dedicated **Málaga TWR/Málaga APP** units on the field; sits under **Madrid FIR (LECM), worked locally by Sevilla ACC (a control area/sector, not an independent FIR)** — not Barcelona ACC — an important correction to the general east-coast Barcelona-ACC context 🟧 confirm LECM vs Barcelona (LECB), see §3.2 and [Europe (Continental) Airspace Briefing](../../../../airspace/europe.md) |
| Elevation class | Near sea-level (52 ft) — **not** hot-and-high; the field's real terrain-adjacent hazard is **mountain-induced turbulence/windshear** off the Montes de Málaga, not density altitude |
| Special-airport status | Not operator-categorised as restricted-crew, but the **mountain-windshear ("Terral") exposure** and the **A350-1000 (A35K) exclusion** are standing brief items — see §5 |
| Customs / PoE | **Yes** — H24 `[AIP España AD 2-LEMG]` |
| K Global category | **S** `[VAMSYS mirror 2026-07-25]` |
| K Global base | **No** `[VAMSYS mirror 2026-07-25]` |
| Company preferred alternates | **LEPA, LEBL, LEMD** `[VAMSYS mirror 2026-07-25]` |
| Taxi-in / taxi-out (VAMSYS) | **10 min / 12 min** `[VAMSYS mirror 2026-07-25]` |

---

## 2. Validation summary

| Domain | Flag | Note |
|---|---|---|
| Terrain / CFIT | 🟧 | Montes de Málaga sit close on the landward (north/northeast) side of the field — not a classic CFIT threat for standard arrival paths, but the direct cause of the field's mountain-wave/turbulence weather signature (§3.4/§14). |
| Runway length vs fleet perf | 🟩 | RWY13/31 (3,198 m) is ample for any K Global type; RWY12/30 (2,749 m) is non-limiting given its dedicated one-way arrival/departure role (§3.3). |
| Approach availability / minima | 🟥 | **Commonly reported "Málaga CAT III" capability is NOT corroborated by the current AIP** — every ILS/GLS at LEMG (RWY12, RWY13, RWY31) is published as **CAT I only**; RWY30 has no ILS at all. Treat CAT III as unconfirmed/likely outdated pending a fresh AIRAC cross-check — this materially affects low-vis planning. |
| Airspace / traffic / control | 🟧 | Own dedicated Málaga TWR/APP units, but sitting under **Madrid FIR (LECM)**, worked locally by **Sevilla ACC** — not Barcelona ACC (LECB) — a correction to the general east-coast airspace assumption for this network (🟧 confirm LECM vs LECB). Single taxiway link from the RWY12/30 side to the terminal apron is a recognised complexity/throughput constraint. |
| Weather / seasonal hazard | 🟥 | The **Terral** — a warm, katabatic Foehn-type wind descending from the Montes de Málaga — combined with Levante/Poniente wind events, is a genuine, widely-documented turbulence/windshear signature at this field. |
| Curfew / slots / hours | 🟧 | Fully **slot-coordinated** (AECFA/CEOPS AGP); H24 operation. Piston-engine hour restriction applies (not relevant to jet ops); a broader night noise-restriction claim (2300–0700) appears in secondary sources but is **not corroborated in the primary AIP text pulled this pass** — flag pending confirmation. |
| RFF category vs our types | 🟩 | CAT 9, above any K Global type's requirement, with no time-window reduction. |
| Fuel availability | 🟩 | H24 confirmed per AIP. |
| Customs / handling / security | 🟩 | H24 customs/immigration and H24 ground handling confirmed per AIP. |

---

## 3. Threat & Error Management (TEM)

### 3.1 CFIT / Terrain 🟧
LEMG sits at 52 ft AMSL directly on the coast, but the **Montes de Málaga** rise close on the landward (north/northeast) side of the field. This is not a classic close-in CFIT trap for a standard coastal arrival, but it is the direct physical cause of the field's defining weather threat (§3.4) — verify the current MSA ring as routine practice, and brief the terrain's role in generating mountain-wave turbulence rather than as a pure obstacle-clearance issue.

### 3.2 Airborne conflict / traffic 🟧
Málaga is the 4th-busiest airport in Spain and the busiest in Andalusia (~26.76 M passengers in 2025, +7.4% YoY; roughly 80% of the region's international traffic) `[Wikipedia; industry traffic reporting, 2025]`. **Málaga TWR/Málaga APP are dedicated local units**, but — importantly, and contrary to a simple "east-coast Barcelona ACC" assumption — **AIP LEMG cross-references ENR 2.1 TMA Sevilla for the field's CTR/VFR restrictions, corroborated by Sevilla-ACC ATC operational documentation.** LEMG therefore sits functionally under the **Madrid FIR (LECM)**, worked locally by **Sevilla ACC** — Sevilla is an ACC/control-area designation, not an independent ICAO FIR; Spain's FIRs are Madrid (LECM) and Barcelona (LECB) — not Barcelona ACC (LECB) — flag this distinction clearly against the network's general east-coast airspace assumption 🟧 confirm LECM vs LECB against the official ENR boundary chart; see the general [Europe (Continental) Airspace Briefing](../../../../airspace/europe.md) for regional context only, no dedicated Madrid (LECM) FIR brief exists in-library yet. A near-miss event (Norwegian 737 MAX8 go-around after spotting a business jet still on RWY12, 22 Nov 2025, Category B) has been publicly reported and is a live reminder of the field's single-taxiway-link ground-traffic complexity feeding a busy runway pair `[Euro Weekly News, 2025]`.

### 3.3 Runway excursion 🟧
LEMG's two runways are **not** operated as independent parallel approaches. Per the AIP's published runway configurations: **Configuración Sur** (preferred) uses **RWY12 for arrivals and RWY13 for departures**; **Configuración Norte** uses **RWY31 for arrivals and RWY30 for departures** (or both on RWY31 in single-runway mode). This is why **RWY12 is landing-only** and **RWY30 is takeoff-only** by design (RWY30 has a 340 m preceding paved extension usable for takeoff only, giving an effective TORA/TODA/ASDA of 3,089 m despite a 2,749 m physical runway; no LDA is published for RWY30). Brief the correct one-way role for whichever runway is assigned — this is a segregated same-direction arrival/departure pairing, not a redundant parallel pair.

### 3.4 Weather threat 🟥
The **Terral** is a warm, dry, katabatic Foehn-type wind: air descends rapidly from the Montes de Málaga toward the coast, producing turbulence in the lee of the mountains, particularly when combined with a humid onshore return-flow in the morning. **Levante** (easterly) and **Poniente** (westerly) wind events add further approach complexity and are widely discussed in aviation-interest sources as producing an above-average rate of weather-related go-arounds/diversions at this field (though no official quantified windshear-frequency statistic was found this pass — treat that specific figure as unconfirmed). This is the field's standout, genuinely significant weather threat. See §14.

### 3.5 Operational considerations 🟥
Three durable planning items: (1) the **CAT I-only reality across all ILS/GLS ends** — do not plan around an assumed CAT III capability without a fresh AIRAC cross-check (§2/§9); (2) the **mountain-induced turbulence/windshear signature** (§3.4) driving go-around/diversion risk; and (3) the **A350-1000 (A35K) exclusion** — the AIP states the aerodrome is **not available for A35K aircraft**, a hard fleet-planning constraint for this specific type. RFF (CAT 9) and customs/handling (H24) are first-tier and non-limiting.

---

## 4. Cautions & Warnings

- **Málaga is CAT I only on every ILS/GLS-equipped runway end** — a commonly-assumed CAT III capability is **not corroborated** by the current AIP; do not plan low-vis ops around CAT III minima without re-verifying against the live AIRAC.
- **RWY12 is landing-only; RWY30 is takeoff-only** — the two runways function as a segregated arrival/departure pair, not independent parallels; brief the correct one-way role.
- **Terral/mountain-wave turbulence** off the Montes de Málaga is a genuine, frequently-cited operational hazard — expect turbulence reports and possible go-arounds in these conditions.
- **A350-1000 (A35K) is explicitly excluded from LEMG** per the AIP — do not plan this type into Málaga.
- **Single taxiway link from the RWY12/30 side to the terminal apron** is a recognised throughput/complexity constraint, and was a contributing factor in a Nov 2025 runway near-miss event — maintain heightened situational awareness on that side of the field.
- **Historical accident (runway-excursion, not CFIT):** Spantax Flight 995 (DC-10-30CF, 13 Sep 1982) suffered a rejected takeoff after a nose-gear tyre failure, overran the runway, crossed the adjacent highway and caught fire — 50 fatalities of 394 on board. A standing reminder of RTO/runway-excursion risk at this field, not a terrain/windshear event.

---

## 5. Aerodrome category, restrictions & crew qualification

- **Special-airport / category:** Not operator-categorised as a restricted-crew "special airport"; the standing crew-briefing items are the **mountain-turbulence exposure** and the **CAT I-only low-vis ceiling**. 🟧
- **Crew-qualification gate:** None specific identified; standard line-qualified crew. Brief the Terral/mountain-wave turbulence signature before ops in forecast conditions. 🟧
- **Operating restrictions / bans:** **A350-1000 (A35K) — aerodrome not available for this type** 🟥. Piston-engine aircraft restricted (VFR 0800–2200 LT, IFR 0800–1600 LT; night VFR only 0100–0500 LT for schools/training) — not relevant to jet ops. No RNP AR ban found — verify current AIRAC. 🟧
- **Overflight / entry / permits:** Standard EU/Schengen arrival; no special state permit required. 🟩
- **Operations notes:** ANSP — **ENAIRE**; airport operator — **Aena**. Fully slot-coordinated (AECFA coordination body; CEOPS AGP operations centre).

---

## 6. General / hours / services

| Item | Value | Flag |
|---|---|---|
| ATS hours | H24 `[AIP España AD 2-LEMG]` | 🟩 |
| AD operating hours | H24 (airport, ATS, fuel, ground handling all confirmed H24) | 🟩 |
| Night / curfew restrictions | No blanket jet curfew confirmed in the primary AIP text pulled. Piston-only VFR/IFR hour restriction applies. A secondary source described "restricted operations 2300–0700" — **not corroborated in the primary AIP extract retrieved this pass** | 🟧 |
| RFF category | **CAT 9** — no time-window reduction | 🟩 |
| Fuel | H24 per AIP | 🟩 |
| PCN | RWY12/30: PCN 82/F/A/W/T. RWY13/31: PCN 75/F/A/W/T | 🟩 |
| Customs | H24 | 🟩 |
| Handling / FBO | H24 ground handling confirmed generally; specific named handler(s) not itemised | 🟧 |

---

## 7. Runways & declared distances

| RWY | Dimensions | Surface / PCN | TORA | TODA | ASDA | LDA | Notes |
|---|---|---|---|---|---|---|---|
| 12 | 2,749 × 45 m | Asphalt / PCN 82/F/A/W/T | — | — | — | 2,749 m | **Landing-only** — no TORA/TODA/ASDA published (Configuración Sur arrival runway) |
| 30 | 2,749 × 45 m (physical) + 340 m preceding paved extension | Asphalt / PCN 82/F/A/W/T | 3,089 m | 3,089 m | 3,089 m | — | **Takeoff-only** — no LDA published (Configuración Norte departure runway) |
| 13 | 3,198 × 45 m | Asphalt / PCN 75/F/A/W/T | 3,198 m | 3,448 m | 3,198 m | 3,198 m | Fully bidirectional; ILS CAT I; multiple intersection take-off points (E-1, E-3, E-6, HN-1L) |
| 31 | 3,198 × 45 m | Asphalt / PCN 75/F/A/W/T | 3,198 m | 3,417 m | 3,198 m | 3,198 m | Fully bidirectional; ILS CAT I + GLS/GBAS CAT I |

*Source: AIP España AD 2-LEMG, current AIRAC (retrieved 2026-07-26). No displaced thresholds published. All distances in metres.*

---

## 8. Communications

| Service | Callsign | Frequency | Hours | Notes |
|---|---|---|---|---|
| ATIS | Málaga Information | Arrivals 120.380 / Departures 124.480 | H24 | |
| Delivery / Clearance | Málaga Clearance | 121.880 | H24 | Also via datalink |
| Ground | Málaga GMC | 121.705 (GMC-W) / 121.955 (GMC-E) | — | Split by field side |
| Tower | Málaga TWR | 118.155 (TWR-W, serves RWY13/31) · 118.780 (TWR-E, serves RWY12/30) · 121.500 (EMERG) · 122.100 (MIL) · 124.780 (backup) | — | Split by runway side |
| Approach | Málaga APP | 118.455 (ARR East / DEP, primary) · 121.025 (backup) · 123.855 (ARR West) · 125.955 (APP) · 245.600 (MIL) | — | Dedicated local APP unit |
| Centre / FIR | **Madrid FIR (LECM)** — worked locally by **Sevilla ACC** (AIP cross-reference ENR 2.1 TMA Sevilla; Sevilla is a control area/sector, not an independent FIR) 🟧 confirm LECM vs Barcelona (LECB) | Per current AIRAC | H24 | **Correction to the general east-coast Barcelona-ACC assumption** — see [Europe (Continental) Airspace Briefing](../../../../airspace/europe.md) for regional context only, no dedicated Madrid (LECM) FIR brief exists in-library |

*Source: AIP España AD 2-LEMG (retrieved 2026-07-26).*

---

## 9. Navaids

| Aid | Ident | Freq | Hours | Notes |
|---|---|---|---|---|
| DVOR/DME | AGP | 117.150 / CH118Y | H24 | Terminal-area, near ARP |
| DVOR/DME | MGA | 112.000 | H24 | Area navaid |
| DVOR/DME | MAR | 112.600 | H24 | Area navaid |
| DVOR/DME | MLG | 113.550 | H24 | Area navaid |
| ILS RWY12 | IMG | 110.550 | H24 | **CAT I** |
| ILS RWY13 | GMM | 109.500 | H24 | **CAT I** |
| ILS RWY31 | GAA | 109.900 | H24 | **CAT I** |
| GLS/GBAS RWY31 | CH20697/21519 | — | H24 | **CAT I** — GBAS augmentation, still CAT I minima per current AIP |
| — RWY30 | — | — | — | **No ILS/approach lighting published** |

*Source: AIP España AD 2-LEMG (retrieved 2026-07-26). 🟥 The commonly-repeated claim of CAT II/III capability at Málaga could not be corroborated against this primary source — every ILS/GLS listed above is CAT I. Recommend re-verifying against the newest AIRAC amendment before publishing any CAT III-dependent planning assumption.*

---

## 10. Arrival

- **Transition altitude / level:** Not confirmed this pass — verify current chart. 🟧
- **Speed:** Standard 250 KIAS below FL100 (EU/ICAO norm) — confirm no local override on current chart.
- **Preferential runway logic:** **Configuración Sur (preferred):** arrivals **RWY12**. **Configuración Norte:** arrivals **RWY31** (or both arrivals/departures on RWY31 in single-runway mode). Selection is wind/traffic-driven; this is a segregated arrival/departure runway pairing, not independent parallel approaches (§3.3).
- **Approaches (names only — verify minima on current AIRAC charts):**

| RWY | Approach | IAF | FAF/FAP alt | Notes |
|---|---|---|---|---|
| 12 | ILS (IMG) | Not confirmed 🟧 | Not confirmed 🟧 | **CAT I** — Configuración Sur primary arrival runway |
| 31 | ILS (GAA) / GLS (GBAS) | Not confirmed 🟧 | Not confirmed 🟧 | **CAT I** — Configuración Norte primary arrival runway |
| 13 | ILS (GMM) | Not confirmed 🟧 | Not confirmed 🟧 | **CAT I** — used as an arrival runway only outside the standard two-runway configurations |
| 30 | — none — | — | — | **Never an arrival runway** — takeoff-only, no ILS/approach lighting |

- **STARs (names only):** Not confirmed in reachable research pass — pull the current-AIRAC STAR list at planning. 🟧
- **LVP:** 🟥 No corroborated CAT II/III capability — treat all approaches as CAT I for low-vis planning pending a fresh AIRAC cross-check.
- **Missed approach watch-items:** Mountain-induced turbulence/windshear (Terral, Levante/Poniente) is the operative missed-approach/go-around concern rather than classic terrain-clearance; re-sequencing into the busy runway/apron system is a secondary factor.

---

## 11. Departure

- **SIDs (names only — fly the charted version):** Not confirmed in reachable research pass — pull the current-AIRAC SID list at planning. 🟧
- **RNP / climb-gradient requirements:** Not confirmed this pass. 🟧
- **Take-off minima:** Not confirmed this pass. 🟧
- **Start-up / push-back:** H24 ground handling confirmed; specific cross-bleed/APU notification procedure not confirmed. 🟧
- **ATC slot / CTOT & clearance:** **Fully slot-coordinated** (AECFA coordination; CEOPS AGP operations centre) — no flight permitted without an assigned slot; aircraft with cruise speed <200 kt may be delayed. 🟥
- **De-icing:** Not typically required at this Mediterranean coastal field; availability/procedure not confirmed. 🟧

---

## 12. Noise & Environmental

- **Noise abatement (NAP):** Not confirmed in detail this pass. 🟧 Aena operates **7 fixed + 2 mobile Noise Measurement Terminals** around the airport perimeter (Aena environmental noise-monitoring programme).
- **Night noise / dB limits:** A secondary source described "restricted operations 2300–0700" but this is **not corroborated in the primary AIP text pulled this pass** — flag pending direct confirmation of any noise-abatement AIP supplement. 🟧
- **Engine run-up restrictions:** Not confirmed. 🟧
- **Reverse thrust / idle-reverse policy:** Not confirmed. 🟧

---

## 13. Ground operations

- **Stands for our types:** 🟧 AIP local regulations require pilots of Code E/F aircraft (wingspan ≥52 m) to report this on first ATC contact, confirming Code E/F ops are procedurally anticipated. Specific stand-by-stand Code E/F capacity list (unlike Alicante's itemised PRKG table) was not located this pass. **A350-1000 (A35K) is explicitly excluded** from the aerodrome per the AIP.
- **Push-back:** Mandatory-vs-self-manoeuvre policy not confirmed. 🟧
- **Standard taxi routes:** Confirm with Ground/Apron on the day; expect routing dependent on the active Configuración Sur/Norte.
- **Hot spots / tight taxiways:** 🟥 **Single taxiway link from the RWY12/30 side to the terminal apron** is a recognised throughput/complexity constraint — a contributing factor in a Nov 2025 near-miss event (Norwegian 737 MAX8 go-around after spotting a business jet still on RWY12). No formally charted "hot spot" list was located this pass.
- **Follow-me:** Availability not confirmed. 🟧

---

## 14. Weather & seasonal (durable)

- **Climate / prevailing wind:** Mediterranean coastal climate with a pronounced mountain-adjacent wind signature (see below); reference temperature 31°C, low-average temperature 12°C.
- **Seasonal hazards:** **Terral** — a warm katabatic Foehn-type wind descending rapidly from the Montes de Málaga toward the coast, producing turbulence in the mountains' lee, especially with a humid onshore morning return-flow. **Levante** (easterly) and **Poniente** (westerly) wind events add further approach-complexity, widely reported (though not officially quantified this pass) as producing an above-average go-around/diversion rate at this field.
- **Local effects:** Mountain-wave/lee turbulence is the standout local effect — a materially real threat, unlike the more benign coastal-plain fields in this network.

> **Live weather — pull at planning (T-2h):** METAR, TAF, TREND, SIGMET/AIRMET. Not stored here.

---

## 15. NOTAMs

> **Pull at planning (T-2h).** Perishable — not stored here. Check: runway/taxiway closures (especially the single RWY12/30-side taxiway link), navaid U/S, CAT I/GLS equipment status, lighting, obstacle/crane, RFF downgrade, GPS/RAIM, current slot/CTOT status. Source: AIS / OFP NOTAM block.

---

## 16. Fuel & alternate planning notes

- **Typical role for us:** Leisure/tourist destination in the network — **VAMSYS category S, not a base**.
- **Nearest suitable alternates:** Company preferred alternates **LEPA** (Palma de Mallorca — no OM C brief exists yet 🟧, plan-time), **[LEBL](../lebl/index.md)** (Barcelona), **[LEMD](../lemd/index.md)** (Madrid) `[VAMSYS mirror 2026-07-25]` — confirm suitability, runway/RFF adequacy and current minima per leg.
- **Fuel-uplift notes:** Jet A-1, H24 confirmed per AIP. See [`OM E — Fuel Policy`](../../../../../flight-ops/fuel-policy.md).
- **Range/perf flags for our fleet:** Field length (3,198 m on RWY13/31) non-limiting for any K Global type **except the A350-1000 (A35K), which is explicitly excluded from this aerodrome.** See [`OM B — Fleet Capability Matrix`](../../../../../fleet/capability-matrix.md).

---

## 17. Fleet-specific notes (optional)

- **A350-1000 (A35K):** the AIP explicitly states the aerodrome is **not available** for this type — remove A35K from any LEMG routing/diversion planning. All other K Global widebody/narrowbody types are procedurally anticipated (Code E/F self-reporting requirement) though not itemised stand-by-stand in reachable sources. See [`OM B — Fleet Capability Matrix`](../../../../../fleet/capability-matrix.md) and [`OM E — Adverse Weather and Windshear`](../../../../../flight-ops/adverse-weather-and-windshear.md) for the mountain-turbulence consideration relevant to all types here.

---

## 18. Open items (🟧 — confirm against AIP / current AIRAC)

- **CAT III capability** — commonly assumed in general aviation discussion but **not corroborated** by the current AIP (CAT I only on every ILS/GLS end); highest-priority item to re-verify against the newest AIRAC before any low-vis planning assumption is made.
- **FIR/TMA identity** — corrected this pass to **Madrid FIR (LECM)**, worked locally by **Sevilla ACC** (Sevilla is a control area/ACC sector, not an independent FIR; Spain's FIRs are Madrid LECM and Barcelona LECB). 🟧 **Confirm LECM vs Barcelona (LECB)** against the official ENR boundary chart — this pass relied on the AIP's ENR 2.1 TMA Sevilla cross-reference plus non-primary (IVAO) documentation, not a primary FIR-boundary chart.
- Night noise-restriction claim (2300–0700, secondary-sourced) — not corroborated in the primary AIP text pulled this pass.
- Transition altitude/level, take-off minima, exact SID/STAR names — not obtained this pass.
- Detailed Code E/F stand-by-stand capacity list — not located, unlike Alicante's itemised table.
- Push-back mandatory-vs-self-manoeuvre policy, engine run-up restriction, reverse-thrust/idle-reverse policy, follow-me availability — none confirmed.
- Quantified windshear/go-around-frequency statistic for the Terral/Levante/Poniente wind signature — widely discussed but not officially quantified in reachable sources.

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim material (current-AIRAC charts) informs content but is not listed here.*

- **AIP España (ENAIRE), AD 2-LEMG**, current AIRAC — https://aip.enaire.es/aip/contenido_AIP/AD/AD2/LEMG/LE_AD_2_LEMG_en.pdf (retrieved 2026-07-26). *ARP/elevation/mag-var, runway/declared distances/PCN, runway configuration logic, ATC frequencies, navaids/ILS/GLS, RFF category, slot coordination, A35K exclusion, piston-hour restriction.*
- OurAirports — https://ourairports.com/airports/LEMG/ , /runways.html , /frequencies.html (retrieved 2026-07-26). *Cross-check.*
- Wikipedia — "Málaga Airport" — https://en.wikipedia.org/wiki/M%C3%A1laga_Airport (retrieved 2026-07-26). *Terminal/pier structure, traffic figures, base carriers.*
- Wikipedia — "Spantax Flight 995" — (retrieved 2026-07-26). *1982 accident history.*
- Aviation Safety Network wikibase 327789 — Spantax Flight 995 — https://aviation-safety.net/wikibase/327789 (retrieved 2026-07-26).
- Euro Weekly News — "Near miss on Málaga runway – does air traffic control need a massive upgrade?" — https://euroweeklynews.com/2025/11/23/near-miss-on-malaga-runway-does-air-traffic-control-need-a-massive-upgrade/ (retrieved 2026-07-26). *Nov 2025 near-miss, single-taxiway-link complexity.*
- Aena — Málaga noise-monitoring system — https://www.aena.es/en/corporative/environment-sustainability/noise/noise-monitoring-systems/malaga-costa-del-sol.html (retrieved 2026-07-26).
- IVAO España — Sevilla Control (LECS) operational manual and LEMG page — https://wiki.es.ivao.aero/books/lecs-sevilla/page/lemg-malaga (retrieved 2026-07-26). *Network-sim documentation, corroboration only — not regulatory. Used to corroborate the Sevilla-FIR/TMA placement, cross-checked against the AIP's own ENR 2.1 TMA Sevilla reference.*
- meteorologiaenred.com — "What is the Terral" — https://en.meteorologiaenred.com/what-is-the-terral.html (retrieved 2026-07-26). *Terral wind mechanism.*

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-25 | Built from AIP España (ENAIRE); K Global fields from live VAMSYS; 4-page pack. |
