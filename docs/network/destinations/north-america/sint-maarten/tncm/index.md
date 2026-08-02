# TNCM — Princess Juliana Intl · Airport Briefing

**TNCM / SXM** · Simpson Bay, Sint Maarten · North America
**Version** v0.1 · **Updated** 2026-07-26 · **Status** Draft

> **Read-me:** Planning aid for the sim, not a chart. Static data is drawn from the Dutch Caribbean eAIP (DC-ANSP, AD 2 TNCM) plus standard public aeronautical data; approaches/SIDs/STARs are listed **by name only** — fly the charted current-AIRAC version. Live weather/NOTAMs are pulled at planning (§14/§15). Open 🟧 items are listed in §18. Flag legend 🟥 restriction/hazard · 🟧 caution/unverified · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| ARP (lat/long) | 18°02′27″N / 63°06′32″W `[DC-ANSP AIP AD 2 TNCM 2.2]` |
| Field elevation | **14 ft / 4.3 m AMSL** (reference temperature 31°C) |
| Mag variation | 14° W `[DC-ANSP AIP AD 2 TNCM 2.2]` — annual rate of change not published, treat as approximate 🟧 |
| Time zone | UTC−4 (AST, no DST observed) |
| Runway(s) | **Single 10/28**, 2,300 × 45 m, asphalt, PCN 60/F/B/X/T |
| Preferential runway | Wind-dependent; RWY 10 carries the majority of scheduled arrivals (visual/RNAV over Maho Beach) — see §10 |
| Longest LDA | 2,300 m (RWY 10); RWY 28 LDA 2,200 m |
| Approaches | RWY 10: RNAV (GNSS), VOR X/Y/Z; **RWY 28 has no published instrument approach — vectored visual approach only** 🟥 |
| RFF category | **CAT 9** `[DC-ANSP AIP AD 2 TNCM 2.6]` |
| Control type | Radar-assisted tower/approach — **Juliana Approach/Tower**; oceanic/en-route per Curaçao FIR (TNCF) and San Juan CERAP boundary |
| Elevation class | Sea-level (14 ft) — **not** hot-and-high; the defining threats are **approach geometry over Maho Beach (RWY 10) and high ground off RWY 28**, not density altitude |
| Special-airport status | 🟥 **Short single runway (2,300 m), no overrun margin on either end, mandatory right-turn-out RWY 10, RWY 28 visual-only** — see §5 |
| Customs / PoE | **Yes** — international terminal, customs/immigration 07:00–21:00 LT `[DC-ANSP AIP AD 2 TNCM 2.3]` |
| K Global category | **L** `[VAMSYS mirror 2026-07-26]` |
| K Global base | **No** `[VAMSYS mirror 2026-07-26]` |
| Company preferred alternates | **TNCC, TNCA, TJSJ** `[VAMSYS mirror 2026-07-26]` |
| Taxi-in / taxi-out (VAMSYS) | **12 min / 15 min** `[VAMSYS mirror 2026-07-26]` |

---

## 2. Validation summary

| Domain | Flag | Note |
|---|---|---|
| Terrain / CFIT | 🟥 | High ground (hills to ~1,100 ft, obstacle-charted) close off the RWY 28 end; no instrument approach exists to RWY 28 for this reason — see §3.1. |
| Runway length vs fleet perf | 🟥 | 2,300 m TORA / 2,200–2,300 m LDA is short for a widebody network — field-length-limiting for larger K Global types; verify performance for the assigned type on every planned rotation. |
| Approach availability / minima | 🟧 | RWY 10 has RNAV (GNSS) and VOR X/Y/Z procedures; RWY 28 is **visual-approach-only** per AIP flight procedures — a weather-dependent single point of failure. |
| Airspace / traffic / control | 🟩 | Juliana TCA/CTR is radar-equipped (50 NM/250 NM radar since 2004); manageable traffic density outside peak banks. |
| Weather / seasonal hazard | 🟥 | Atlantic hurricane season (Jun–Nov) is the dominant seasonal threat for the whole Leeward chain; MET office notes **no wind-shear equipment** on the field — see §14. |
| Curfew / slots / hours | 🟧 | Published AD/ATS hours 07:00–21:00 LT with request-only extension; no formal slot regime found in reachable sources. |
| RFF category vs our types | 🟩 | CAT 9 — adequate for the network. |
| Fuel availability | 🟩 | Jet A-1 and AVGAS 100LL available within AD hours; storage/uplift capacity confirmed in AIP (§6/§16). |
| Customs / handling / security | 🟩 | Customs/immigration 07:00–21:00 LT; security H24. |

---

## 3. Threat & Error Management (TEM)

### 3.1 CFIT / Terrain 🟥
The AIP obstacle chart lists a cluster of hazard beacons, an old radar installation and spot elevations rising to **~1,118 ft** roughly 3–4 NM north/northwest of the field (the high ground behind Mullet Bay/Maho, off the RWY 28 extended centreline). This high ground is the direct reason **RWY 28 carries no published instrument approach** — the AIP flight-procedures section directs that *"all IFR aircraft will be vectored for a Visual Approach RWY 28"* with no SRA/PRA available. Treat any RWY 28 arrival as a visual-approach-in-marginal-weather risk; if visual conditions are not achievable, expect a runway-configuration change to RWY 10 or a diversion. Verify the current obstacle/MSA chart before every arrival.

### 3.2 Airborne conflict / traffic 🟩
Since the 2004 tower/radar upgrade, Juliana Approach/Tower operates two radar systems (50 NM and 250 NM range) across the "Juliana TCA," and also provides approach control for several neighbouring island airports (Anguilla, French Saint Martin, Saint Barthélemy, Sint Eustatius, Saba). Traffic density is moderate outside peak banks; the CTR is Class C, FL055–GND. No procedural/non-radar penalty applies here, unlike some neighbouring Eastern Caribbean fields.

### 3.3 Runway excursion 🟥
The runway is short for the network (2,300 m TORA) with **RESA not listed as published** (strip only 2,320 × 150 m; clearway 60 × 150 m each end) and **reduced LDA** on both ends relative to full runway length (RWY 10 LDA 2,200 m against a 2,300 m TORA; RWY 28 TORA itself is only 2,200 m). There is effectively **no error margin for a long/fast landing or a rejected takeoff near V1** — brief this explicitly for every operation. The famous low, close-in approach to RWY 10 (crossing the airport boundary fence/Maho Beach at very low height on a nominal 3° path) leaves no room to "float" — a stabilised-approach gate and hard go-around discipline are non-negotiable.

### 3.4 Weather threat 🟥
Atlantic hurricane season (June–November, peak Aug–Oct) is the airport's defining seasonal threat — Hurricane Irma (2017) caused major terminal damage and a multi-week closure, illustrating the exposure. The AIP MET section explicitly notes **no wind-shear detection equipment** is installed and the office is "fully dependent on internet service for information" — treat convective/gust-front wind shear as an unmonitored hazard requiring extra vigilance on the approach, especially RWY 10 over open water. See [`OM E — Adverse Weather and Windshear`](../../../../../flight-ops/adverse-weather-and-windshear.md) and §14.

### 3.5 Operational considerations 🟥
Plan around: (1) the **short runway / no-overrun-margin** field length (§3.3) driving a hard performance-limited weight for every K Global type — see [`OM E — Short and Limited Runway Operations`](../../../../../flight-ops/short-and-limited-runway-operations.md); (2) the **mandatory right-turn-out on RWY 10 departures** (left turn only by ATC approval, light aircraft, day, non-jet) and the **2,600 ft AMSL minimum before released from visual terrain/obstacle clearance responsibility**; (3) **RWY 28's visual-only arrival** — a genuine weather-driven diversion risk; (4) documented **bird activity** in the vicinity, briefed by ATC/NOTAM; and (5) the widely reported **jet-blast hazard to bystanders at the RWY 10 perimeter fence/Maho Beach** — a real, non-trivial ramp/ground-safety factor for any aircraft holding or taxiing near that threshold, not merely a tourist curiosity.

---

## 4. Cautions & Warnings

- **RWY 10 arrival is a very low, close-in approach over Maho Beach** — a nominal 3° PAPI path with essentially no displaced buffer before the threshold; fly a stabilised approach and do not attempt to "stretch" a long landing.
- **RWY 28 has no published instrument approach** — visual only. If weather precludes a visual arrival, expect vectoring for RWY 10 or diversion; do not plan RWY 28 as a weather-alternate runway.
- **Right turn out mandatory on RWY 10 departures** (except light non-jet aircraft with ATC-approved left turn, day only); maintain visual terrain/obstacle clearance to 2,600 ft AMSL.
- **High ground (to ~1,118 ft) close off the RWY 28 end** — do not descend below charted MSA/procedure altitudes on approach or missed approach.
- **No wind-shear detection equipment on the field** — treat gust-front/convective wind shear as unmonitored; increase approach vigilance in showery/frontal conditions.
- **Documented jet-blast hazard at the RWY 10 threshold/perimeter fence** (public area immediately behind the displaced threshold) — brief ground crew and flight crew on blast discipline during taxi/line-up/departure.
- **Bird concentrations reported in the vicinity** — check current NOTAM; consider landing-light use in the terminal area per AIP guidance.
- **Short runway, minimal RESA** — every rotation is a performance-limited-weight case; confirm current-day figures, do not assume prior-trip numbers still apply.

---

## 5. Aerodrome category, restrictions & crew qualification

- **Special-airport / category:** Not formally categorised as a restricted-crew "special airport" in reachable sources, but the standing crew-briefing items are the **short runway/no-overrun margin** and the **RWY 10 low-approach-over-beach geometry**. 🟥
- **Crew-qualification gate:** No CAT II/III or company-restricted-crew requirement identified (RWY 10 approaches are RNAV/VOR, non-precision); recommend command-experience/briefing emphasis given the approach geometry and field length. 🟧
- **Operating restrictions / bans:** RWY 28 visual-approach-only (§3.1); mandatory right-turn RWY 10 departure (§3.5, §11); no RNP AR requirement identified. 🟧
- **Overflight / entry / permits:** Standard Kingdom-of-the-Netherlands/Sint Maarten international arrival; no special state permit identified. 🟩
- **Operations notes:** ANSP/AD operator — **Princess Juliana International Airport Operating Company (PJIAE)**; ATS provided by Juliana Tower/Approach. Marshalling provided where self-guidance systems are unavailable or safety requires it.

---

## 6. General / hours / services

| Item | Value | Flag |
|---|---|---|
| ATS hours | 07:00–21:00 LT (1100–0100 UTC); extension by request only | 🟧 |
| AD operating hours | AD Administration 07:30–16:30 LT; broader AD/ATS window 07:00–21:00 LT | 🟧 |
| Night / curfew restrictions | No formal night curfew identified in reachable AIP extract; field effectively closes with ATS hours | 🟧 |
| RFF category | **CAT 9** | 🟩 |
| Fuel | Jet A-1 + AVGAS 100LL, 07:00–21:00 LT (or last scheduled flight) | 🟩 |
| PCN | Runway PCN 60/F/B/X/T; apron PCN 50/F/B/X/U; taxiways PCN 50 (TWY A–E) / PCN 9 (TWY F/G1/G2/H — narrow, not for our types) | 🟧 |
| Customs | 07:00–21:00 LT | 🟩 |
| Handling / FBO | PJIAE Operations; ground handling within AD hours | 🟧 |

---

## 7. Runways & declared distances

| RWY | Dimensions | Surface / PCN | TORA | TODA | ASDA | LDA | Notes |
|---|---|---|---|---|---|---|---|
| 10 | 2,300 × 45 m | Asphalt / PCN 60/F/B/X/T | 2,300 m | 2,360 m | 2,300 m | **2,200 m** | THR elev 4 m/12 ft; clearway 60×150 m; strip 2,320×150 m; RESA not published |
| 28 | 2,300 × 45 m | Asphalt / PCN 60/F/B/X/T | **2,200 m** | 2,260 m | 2,200 m | 2,200 m | THR elev 3 m/9 ft; clearway 60×150 m; visual-approach-only (no IAP) |

*Source: DC-ANSP eAIP, AD 2 TNCM 2.12/2.13. LDA reduction on both runways relative to full pavement length reflects declared-distance publication, not a displaced-threshold marking issue in the reachable extract — treat exact current-AIRAC declared distances as due for a live cross-check. All distances in metres.*

---

## 8. Communications

| Service | Callsign | Frequency | Hours | Notes |
|---|---|---|---|---|
| Delivery | Juliana Delivery | 121.650 | When required | |
| Approach | Juliana Approach | 128.950 (backup 119.700) | — | |
| ATIS | Juliana ATIS | 127.650 | During operational hours | |
| Tower | Juliana Tower | 118.700 | 0700–2100 LT (1100–0100 UTC); 128.950 when Tower/Approach de-combined | |
| Emergency | Juliana Emergency | 121.500 | — | |
| Centre / FIR | Curaçao FIR (TNCF) / San Juan CERAP boundary | Per current AIRAC | — | See [North America Airspace brief](../../../../airspace/north-america.md) 🟧 — built for the EDDF–KSFO polar/west-coast routing, does not cover the Eastern Caribbean; treat as the nearest available area pointer only. |

*Source: DC-ANSP eAIP, AD 2 TNCM 2.18.*

---

## 9. Navaids

| Aid | Ident | Freq | Hours | Notes |
|---|---|---|---|---|
| VOR/DME | PJM | 113.000 (CH 77X) | H24 | On-field, 200 NM coverage; mag var 14° W (2014 epoch) |

*Source: DC-ANSP eAIP, AD 2 TNCM 2.19. No ILS/NDB currently published for TNCM in the reachable extract.*

---

## 10. Arrival

- **Transition altitude / level:** TA 5,000 ft AMSL (Juliana CTZ); TL by QNH — verify current chart. 🟧
- **Speed:** Standard 250 KIAS below FL100 — confirm no local override.
- **Preferential runway logic:** Wind-driven; RWY 10 is the routine arrival runway (its RNAV/VOR approaches are the only published instrument procedures at the field). RWY 28 arrivals are flown as a vectored **visual approach** regardless of equipment.
- **Approaches (names only — verify minima on current AIRAC charts):**

| RWY | Approach | Notes |
|---|---|---|
| 10 | RNAV (GNSS); VOR X RWY 10; VOR Y RWY 10; VOR Z RWY 10 | Radar-vectored to VOR Z RWY 10 final in routine ops |
| 28 | — none published — | **Visual approach only**, radar-vectored; no SRA/PRA available |

- **STARs (names only):** ULUBA ONE (per AIP chart index) — verify current AIRAC. 🟧
- **LVP:** No LVP/CAT II-III infrastructure identified — field operates to non-precision/visual minima only. 🟧
- **Missed approach watch-items:** High ground north/northwest of the field (§3.1) is the operative missed-approach concern on RWY 10; a RWY 28 go-around returns the aircraft toward the same high terrain — fly the published missed approach precisely and do not improvise a shortcut turn.

---

## 11. Departure

- **SIDs (names only — fly the charted version):** RWY 10 jet departures: **MODOR TWO**; RWY 10 turboprop/propeller departures: **BOPAT TWO**; also charted **JULNA2/PELCN2/MULLT2** SIDs per the AIP chart index — verify current AIRAC assignment. RWY 28 departure routing is by ATC instruction (no dedicated SID confirmed for RWY 28 in the reachable extract). 🟧
- **RNP / climb-gradient requirements:** Non-RNAV-equipped aircraft fly a heading-then-turn procedure to intercept the cleared route (heading 180° or 230° until 10 DME PJM depending on type/route, per AIP) — RNAV-equipped aircraft fly the published lateral path directly. Verify current gradient/equipage requirements on the chart. See [`OM E — PBN and RNP Operations`](../../../../../flight-ops/pbn-and-rnp-operations.md).
- **Take-off minima:** Not confirmed from a primary minima table this pass — verify current chart. 🟧
- **Start-up / push-back:** IFR departures must contact Tower for start-up/ATC clearance before taxi; clearance may be requested at the earliest 10 minutes prior to engine start.
- **ATC slot / CTOT & clearance:** No formal slot/CTOT regime identified; standard tower-issued IFR clearance procedure. 🟧
- **De-icing:** **NIL** — not applicable at this field.

---

## 12. Noise & Environmental

- **Noise abatement (NAP):** **No procedures in place** per the AIP (AD 2 TNCM 2.21) — the mandatory right-turn-out on RWY 10 and left-turn-out on RWY 28 are obstacle/track-management procedures rather than a published noise-abatement programme.
- **Night noise / dB limits:** None identified.
- **Engine run-up restrictions:** Not confirmed in reachable sources. 🟧
- **Reverse thrust / idle-reverse policy:** Not confirmed in reachable sources — given the short LDA (§3.3, §7), expect full/max-manual-braking-and-reverse as the routine technique rather than idle-reverse. 🟧

---

## 13. Ground operations

- **Stands for our types:** Single apron (TNCM A), PCN 50/F/B/X/U — adequate strength for narrowbody and mid-size widebody types; confirm current stand count/layout against the AIP parking/dock charts for the specific type. 🟧
- **Push-back:** Not confirmed in reachable sources — arriving aircraft allocated a stand by Tower; general aviation follows Tower instructions to the GA parking area. 🟧
- **Standard taxi routes:** Taxiways A–E are the useable-width set (16.5–32.0 m, PCN 50) for our types; **taxiways F, G1, G2 and H are narrow (5.0–11.0 m) and PCN 9 — not suitable for K Global aircraft**, treat as GA-only. 🟥
- **Hot spots / tight taxiways:** No AIP-flagged hot spots found beyond the narrow-taxiway restriction above; verify current chart. 🟧
- **Follow-me:** Not confirmed in reachable sources. 🟧

---

## 14. Weather & seasonal (durable)

- **Climate / prevailing wind:** Tropical maritime climate; trade-wind-dominated with a wetter/stormier season June–November.
- **Seasonal hazards:** **Atlantic hurricane season (June–November, peak August–October)** is the defining seasonal threat for Sint Maarten and the wider Leeward Islands — Hurricane Irma (September 2017, Category 5) caused severe terminal damage and a multi-week closure, illustrating the exposure. See [`OM E — Adverse Weather and Windshear`](../../../../../flight-ops/adverse-weather-and-windshear.md).
- **Local effects:** No wind-shear detection equipment on the field (§3.4); showery/frontal wind-shear risk should be treated as unmonitored. Trade-wind gusting is a routine consideration for the low RWY 10 approach.

> **Live weather — pull at planning (T-2h):** METAR, TAF, TREND, SIGMET/AIRMET, tropical cyclone advisories (NOAA/NHC) in season. Not stored here.

---

## 15. NOTAMs

> **Pull at planning (T-2h).** Perishable — not stored here. Check: runway/taxiway closures, navaid U/S, lighting, bird-activity bulletins, obstacle/crane, RFF downgrade, GPS/RAIM, tropical-cyclone advisories in season. Source: AIS / OFP NOTAM block.

---

## 16. Fuel & alternate planning notes

- **Typical role for us:** Network destination (Eastern Caribbean/Leeward Islands gateway).
- **Nearest suitable alternates:** Company preferred alternates **TNCC** (Curaçao), **TNCA** (Aruba), **TJSJ** (San Juan) `[VAMSYS mirror 2026-07-26]` — confirm runway/RFF adequacy and current minima per leg.
- **Fuel-uplift notes:** Jet A-1 and AVGAS 100LL available 07:00–21:00 LT (or last scheduled flight); on-field storage includes multiple 25,000 L and one 175,000 L Jet A-1 tanks per AIP. See [`OM E — Fuel Policy`](../../../../../flight-ops/fuel-policy.md).
- **Range/perf flags for our fleet:** 🟥 **Field-length-limiting** — 2,300 m TORA / 2,200 m LDA drives a hard performance-limited weight for any K Global widebody and requires confirmation for narrowbody types too. See [`OM E — Short and Limited Runway Operations`](../../../../../flight-ops/short-and-limited-runway-operations.md) and [`OM B — Fleet Capability Matrix`](../../../../../fleet/capability-matrix.md).

---

## 17. Fleet-specific notes (optional)

- Every K Global type assigned to TNCM should have its field-length/performance-limited weight independently confirmed for the day's conditions given the 2,300 m runway and reduced declared LDA (§7) — this is a routine dispatch check here, not an edge case. See [`OM B — Fleet Capability Matrix`](../../../../../fleet/capability-matrix.md) for type-by-type reference.

---

## 18. Open items (🟧 — confirm against AIP / current AIRAC)

- Magnetic variation annual rate of change (only the 14° W epoch value is confirmed).
- Take-off minima and full instrument-approach minima tables (not transcribed here — pull from current AIRAC charts).
- Current STAR (ULUBA ONE) and full SID assignment logic by type/runway.
- Night curfew / formal slot regime — no explicit restriction found, but not independently confirmed as "none."
- Push-back procedure, follow-me availability, engine run-up and reverse-thrust policy.
- Current AD/ATS operating-hours cycle (2024-11-28 eAIP publication used; re-verify against the live AIRAC).
- Stand/apron count and layout for widebody-capable types.

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim material informs content but is not listed here.*

- **DC-ANSP (Dutch Caribbean Air Navigation Service Provider) eAIP, AD 2 TNCM — Sint Maarten**, publication cycle 2024-11-28 — https://dc-ansp.org/eAIS/eAIP-Publications/2024-11-28/eAIP/AD%202%20TNCM%20-%20SINT%20MAARTEN%201-en-US.html (retrieved 2026-07-26). *Primary source for §1–§13 aerodrome data, flight procedures, communications, navaids.*
- Wikipedia — "Princess Juliana International Airport" — https://en.wikipedia.org/wiki/Princess_Juliana_International_Airport (retrieved 2026-07-26). *History, Hurricane Irma 2017 impact, RWY 10 approach/jet-blast safety context.*
- OurAirports — https://ourairports.com/airports/TNCM/ (retrieved 2026-07-26). *ARP/elevation cross-check.*

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-26 | Built from national/territory AIP; K Global fields from live VAMSYS; 4-page pack. |
