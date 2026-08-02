# OERK — King Khaled Intl · Airport Briefing

**OERK / RUH** · Riyadh, Saudi Arabia · Middle East
**Version** v0.1 · **Updated** 2026-07-26 · **Status** Draft

> **Read-me:** Planning aid for the sim, not a chart. Static data is drawn from the GACA/SANS Saudi eAIP (AD 2 OERK) plus standard public aeronautical data; approaches/SIDs/STARs are listed **by name only** — fly the charted current-AIRAC version. Live weather/NOTAMs are pulled at planning (§14/§15). Open 🟧 items are listed in §18. Flag legend 🟥 restriction/hazard · 🟧 caution/unverified · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| ARP (lat/long) | N24°57'46" / E046°42'29" (24.9628, 46.7081) `[GACA eAIP AD 2.2]` |
| Field elevation | **2,053 ft** (reference temperature 42.3°C) `[GACA eAIP AD 2.2]`; commonly cited as 2,049 ft in secondary sources — use 2,053 ft as AIP-authoritative 🟧 |
| Mag variation | 3° E (2020 epoch), annual change +0.04° `[GACA eAIP AD 2.2]` |
| Time zone | UTC+3 (AST), no DST |
| Runway(s) | **15L/33R** and **15R/33L** — two parallel pairs, all four ends 4,205 × 60 m asphalt |
| Preferential runway | Wind/traffic dependent; no single published preferential rule found — confirm with ATC on the day 🟧 |
| Longest LDA | 4,205 m (all four runway ends — identical declared distances) |
| Approaches | **ILS CAT I** all four ends, **RNP** all four ends, **VOR** on 15L/15R/33R (no VOR chart found for 33L) |
| RFF category | **CAT 9** 🟩 |
| Control type | **Radar** — Riyadh Approach/Final, Class C CTR (10 NM radius, SFC–4,500 ft) |
| Elevation class | **Elevated (2,053 ft)** — not classic hot-and-high, but the AIP's own 42.3°C reference temperature makes summer density altitude a real performance input 🟧 |
| Special-airport status | None formally categorised as crew-restricted; standing briefing items are the overflight-of-city restriction (§5) and summer heat performance (§3.5) |
| Customs / PoE | **Yes** — H24 `[GACA eAIP AD 2.3]` |
| K Global category | **L** `[VAMSYS mirror 2026-07-26]` |
| K Global base | **No** `[VAMSYS mirror 2026-07-26]` |
| Company preferred alternates | **OEJN, OMDB, OTHH** `[VAMSYS mirror 2026-07-26]` |
| Taxi-in / taxi-out (VAMSYS) | **14 min / 18 min** `[VAMSYS mirror 2026-07-26]` |

---

## 2. Validation summary

| Domain | Flag | Note |
|---|---|---|
| Terrain / CFIT | 🟩 | Riyadh sits on the flat Najd plateau; no close-in high terrain at the field itself. The Tuwaiq escarpment lies well west of the city — not an approach/departure factor here. |
| Runway length vs fleet perf | 🟩 | 4,205 m on all four ends is ample for any K Global type, including in summer heat. |
| Approach availability / minima | 🟩 | ILS CAT I + RNP on all four ends; no CAT II/III capability published — plan CAT I minima only. |
| Airspace / traffic / control | 🟩 | Radar environment (Riyadh Approach/Final), Class C CTR/TMA; a major but not chronically congested hub relative to the Gulf's busiest fields. |
| Weather / seasonal hazard | 🟧 | Spring dust storms/shamal and extreme summer heat (ref. temp 42.3°C) are the standing hazards; fog is not a documented factor here. |
| Curfew / slots / hours | 🟩 | No curfew found — AD administration, customs, ATS, fuelling, handling and security are all published H24. |
| RFF category vs our types | 🟩 | CAT 9 — adequate for the network's widebody types. |
| Fuel availability | 🟩 | Jet A-1, H24, hydrant + tanker. |
| Customs / handling / security | 🟩 | H24 customs/immigration confirmed; specific ground-handling contractor for our operation not confirmed 🟧. |

---

## 3. Threat & Error Management (TEM)

### 3.1 CFIT / Terrain 🟩
OERK sits on the **Najd plateau** at 2,053 ft, an area generally described as flat relative to the surrounding highlands, with wadi systems rather than close-in high ground. The **Tuwaiq Mountains escarpment** lies well to the west/southwest of Riyadh city and is not a factor on standard arrival/departure paths to this field. No AIP-published obstacle penetrates the aerodrome's immediate obstacle-limitation surfaces in the extract reviewed. Verify the MSA ring on the current chart as routine practice; this is not a terrain-critical field.

### 3.2 Airborne conflict / traffic 🟩
Riyadh is a genuine and fast-growing international/business hub — now also the announced base for the new national carrier — but is not among the Gulf's most saturated terminal environments (unlike Jeddah's Hajj surge or the Emirates hub complex). Riyadh Approach/Final operates a radar environment across the two closely-spaced parallel runway pairs (15L/33R and 15R/33L); the AIP flags that **"exercise extreme care in selecting the correct ILS for the assigned runway as more than one ILS may be operating simultaneously"** applies regionally to Saudi parallel-runway fields generally — confirm ILS/frequency selection discipline. Cross-ref the [Middle East airspace brief](../../../../airspace/middle-east.md) — Riyadh operations sit within the **Jeddah FIR (OEJD)**.

### 3.3 Runway excursion 🟧
No displaced thresholds found for any of the four runway ends; all four carry identical declared distances (TORA=TODA=ASDA=LDA=4,205 m), which is ample margin for any K Global type. An AIP remark flags **taxiway H3** for "obstruction inside the safety area" as of the retrieved AIRAC cycle — not independently re-confirmed as current; verify against current AIRAC/NOTAM before use.

### 3.4 Weather threat 🟧
**Spring sand/dust storms (shamal, haboob)** are a recurring regional hazard affecting Riyadh, capable of reducing visibility below 3 km and driving delays, cancellations or diversions. **Extreme summer heat** is directly evidenced by the AIP's own 42.3°C reference temperature — a genuine performance-planning input even though the runway length itself is non-limiting. Fog is not documented as a factor at this inland desert-plateau field. See §14.

### 3.5 Operational considerations 🟧
Two durable items to plan around: (1) **overflight of Riyadh city is restricted** except when conducting take-off/landing under ATC instruction (§5) — a routing constraint, not a curfew; (2) **summer density-altitude planning** — the 2,053 ft elevation combined with a 42.3°C reference day is a genuine (if moderate, versus e.g. Abha) hot-weather performance input, worth a takeoff-weight check on the hottest days even though runway length itself is not limiting. RFF, navaid and approach infrastructure are all first-tier; the §18 open items are mostly currency/administrative confirmations.

---

## 4. Cautions & Warnings

- **Two closely-spaced parallel runway pairs (15L/33R, 15R/33L)** with **simultaneous ILS operation** — the AIP itself warns to select the correct ILS for the assigned runway with care.
- **Spring dust storms/shamal** can drop visibility with limited notice — check current SIGMET/dust advisories before a Riyadh-bound leg in season.
- **Summer reference temperature of 42.3°C** — factor density altitude into takeoff performance planning on the hottest days, even though field length is not limiting.
- **Overflight of Riyadh city is restricted** outside take-off/landing under ATC instruction — this is a routing rule, not a curfew.
- **Taxiway H3 obstruction** noted in the retrieved AIP cycle — verify current NOTAM status before planning ground routing through that area.
- No CAT II/III ILS capability is published — plan CAT I minima only; do not assume low-visibility autoland capability at this field.

---

## 5. Aerodrome category, restrictions & crew qualification

- **Special-airport / category:** Not categorised as a restricted-crew "special airport" in reachable sources. 🟩
- **Crew-qualification gate:** None identified beyond standard CAT I currency. 🟩
- **Operating restrictions / bans:** **Overflight of the city of Riyadh is restricted** except for take-off/landing under ATC instruction `[GACA eAIP AD 2.21/2.22.1]`. No RNP AR ban or circling restriction found in reachable sources — verify current AIRAC. 🟧
- **Overflight / entry / permits:** Standard Saudi international arrival; no special state permit required beyond normal visa/overflight clearance arrangements. 🟩
- **Operations notes:** Aerodrome operator — **GACA (General Authority of Civil Aviation)**. Riyadh is the announced hub for the new national carrier **Riyadh Air**, alongside long-established full-service and low-cost carriers — an actively growing hub as of 2026. `[Wikipedia, retrieved 2026-07-26]` 🟧

---

## 6. General / hours / services

| Item | Value | Flag |
|---|---|---|
| ATS hours | H24 `[GACA eAIP AD 2.3]` | 🟩 |
| AD operating hours | H24 — no curfew identified | 🟩 |
| Night / curfew restrictions | None found in reachable AIP text | 🟩 |
| RFF category | CAT 9 | 🟩 |
| Fuel | Jet A-1, H24, hydrant (main aprons) + tanker (GA apron) | 🟩 |
| PCN | Runway PCN 80/F/A/W/T; apron/taxiway PCN varies 50–86 depending on designator — see §7 | 🟩 |
| Customs | H24 `[GACA eAIP AD 2.3]` | 🟩 |
| Handling / FBO | Alsalam Aerospace Industries (repair, on-field); specific ground handler for our operation not confirmed | 🟧 |

---

## 7. Runways & declared distances

| RWY | Dimensions | Surface / PCN | TORA | TODA | ASDA | LDA | Notes |
|---|---|---|---|---|---|---|---|
| 15L | 4,205 × 60 m | Asphalt / PCN 80/F/A/W/T | 4,205 m | 4,205 m | 4,205 m | 4,205 m | Left-hand circuit |
| 33R | 4,205 × 60 m | Asphalt / PCN 80/F/A/W/T | 4,205 m | 4,205 m | 4,205 m | 4,205 m | Left-hand circuit |
| 15R | 4,205 × 60 m | Asphalt / PCN 80/F/A/W/T | 4,205 m | 4,205 m | 4,205 m | 4,205 m | Right-hand circuit |
| 33L | 4,205 × 60 m | Asphalt / PCN 80/F/A/W/T | 4,205 m | 4,205 m | 4,205 m | 4,205 m | Right-hand circuit |

*Source: GACA/SANS eAIP AD 2.12/2.13 (AIRAC AMDT 05/24, eff. 2024-08-22 — retrieved 2026-07-26; a newer cycle likely exists, core runway geometry is very unlikely to have changed). No displaced thresholds found. All distances in metres. Strip 4,325 × 300 m and RESA 240 × 120 m identical all four ends.*

---

## 8. Communications

| Service | Callsign | Frequency | Hours | Notes |
|---|---|---|---|---|
| ATIS | Riyadh Information | 127.150 | H24 | |
| Delivery | Clearance Delivery | 121.700 | H24 | |
| Ground | King Khaled Ground | 121.600 (+121.800/335.700/348.600 vehicles) | H24 | GA apron separate freq 123.000 |
| Tower | King Khaled Tower | 118.600 (East) / 118.800 (West) | H24 | + 121.500/243.000/342.200 |
| Approach | Riyadh Approach | 120.000 (primary), 128.500 (backup), 339.400/385.100 (UHF) | H24 | |
| Final | Riyadh Final | 119.750 (main) / 120.600 (standby) | H24 | DOC 45 NM/12,000 ft |
| Centre / FIR | Riyadh Control | 124.100 (CTA-South) / 126.000 (CTA-North) | H24 | See [Middle East airspace brief](../../../../airspace/middle-east.md) — Jeddah FIR (OEJD) |

*Source: GACA/SANS eAIP AD 2.18 (retrieved 2026-07-26); cross-checked against OurAirports and SkyVector. Treat exact current-cycle frequencies as 🟧 pending a live-AIRAC cross-check.*

---

## 9. Navaids

| Aid | Ident | Freq | Hours | Notes |
|---|---|---|---|---|
| ILS/DME 15L | IELF | 109.500 | H24 | CAT I |
| ILS/DME 33R | IKIA | 109.100 | H24 | CAT I |
| ILS/DME 15R | ITIH | 110.500 | H24 | CAT I |
| ILS/DME 33L | IFAT | 110.100 | H24 | CAT I |
| DVOR/TACAN | KIA | 113.300 (CH80X) | H24 | On field, 148° MAG / 4 NM from THR 33R |

*All four ILS installations are explicitly CAT I per the current AIP text — no CAT II/III capability published. Source: GACA/SANS eAIP AD 2.19 (retrieved 2026-07-26).*

---

## 10. Arrival

- **Transition altitude / level:** TA 13,000 ft `[GACA eAIP AD 2.17]`; TL by QNH — verify current chart.
- **Speed:** Standard 250 KIAS below FL100 in TMA (Class C) — confirm no local override on current chart.
- **Preferential runway logic:** Wind/traffic dependent; no single published preferential rule found — confirm with Approach on the day.
- **Approaches (names only — verify minima on current AIRAC charts):**

| RWY | Approach | Notes |
|---|---|---|
| 15L | ILS or LOC, RNP | CAT I |
| 33R | ILS or LOC, RNP | CAT I |
| 15R | ILS or LOC, RNP, VOR | CAT I |
| 33L | ILS or LOC, RNP | CAT I; no VOR chart found in the reachable index 🟧 |

- **STARs (names only):** Single combined RNAV STAR chart covering all four runway ends, plus a separate RNAV Arrival Transition chart — exact designators not extracted this pass; pull the current-AIRAC name at planning. 🟧
- **LVP:** No specific LVP/CAT II-III trigger published — CAT I only field; standard ILS CAT I minima apply.
- **Missed approach watch-items:** Terrain is not the driver (flat plateau); expect standard radar re-sequencing under Riyadh Approach.

---

## 11. Departure

- **SIDs (names only — fly the charted version):** RNAV SID per runway end (15L/15R/33L/33R), plus Radar Vector SID options for each parallel pair — exact designators not extracted this pass; pull the current-AIRAC name at planning. 🟧
- **RNP / climb-gradient requirements:** No special climb-gradient requirement identified in reachable sources — this is a flat, elevated (not hot-and-high in the extreme sense) field; verify on current chart. See [`OM E — PBN and RNP Operations`](../../../../../flight-ops/pbn-and-rnp-operations.md).
- **Take-off minima:** Published per AIP — exact figures not confirmed this pass. 🟧
- **Start-up / push-back:** Several numbered stands (12, 17, 22, 27, 302, 401, 407) require engine shutdown + towing if stopped for any reason; several apron-edge stands (5E–8W) require tow-all-the-way-to-TWY-E procedures — confirm stand-specific handling locally. 🟧
- **ATC slot / CTOT & clearance:** No slot-coordination regime identified — standard clearance-delivery procedure via 121.700. 🟩
- **De-icing:** **NIL** — not provided, consistent with the desert climate. See [`OM E — Cold Weather Operations`](../../../../../flight-ops/cold-weather-operations.md) (non-applicable here).

---

## 12. Noise & Environmental

- **Noise abatement (NAP):** Overflight of Riyadh city is restricted except for take-off/landing under ATC instruction (§5) — otherwise no dedicated NADP or noise-routing procedure identified.
- **Night noise / dB limits:** Not published; no curfew or noise-charge regime identified.
- **Engine run-up restrictions:** Not confirmed in reachable sources. 🟧
- **Reverse thrust / idle-reverse policy:** Not confirmed in reachable sources. 🟧

---

## 13. Ground operations

- **Stands for our types:** Widebody-capable infrastructure inferred from runway/apron PCN and Terminal 5's stated capacity for 8 widebodies simultaneously; no explicit "Code E/F" designation found in the AIP text itself — treat as reasonably inferred, not a direct AIP statement. 🟧 | 🟧
- **Push-back:** Mandatory tow-out procedure at several named stands (§11) — confirm per-stand rule with ground handling.
- **Standard taxi routes:** Confirm with Ground/Apron on the day; only one aircraft may taxi in/out of an apron at a time or as ATC-instructed; Cargo Apron and Apron 6A–6E are designated "blind areas."
- **Hot spots / tight taxiways:** 🟧 **Taxiway H3** flagged for an obstruction inside the safety area in the retrieved AIP cycle — verify current NOTAM status.
- **Follow-me:** Expected for all aircraft per AIP local regulations.

---

## 14. Weather & seasonal (durable)

- **Climate / prevailing wind:** Inland desert-plateau climate (Najd); no notable sea-breeze or terrain-wind effect at the field itself.
- **Seasonal hazards:** **Spring dust/sand storms (shamal, haboob)** are a recurring regional hazard, capable of reducing visibility below 3 km and causing delays/diversions. **Extreme summer heat** — the AIP's own 42.3°C reference temperature confirms this as a genuine planning input. Fog is not documented as a factor at this field.
- **Local effects:** None beyond the above; no coastal or orographic effects at this inland site.

> **Live weather — pull at planning (T-2h):** METAR, TAF, TREND, SIGMET/AIRMET (dust). Not stored here.

---

## 15. NOTAMs

> **Pull at planning (T-2h).** Perishable — not stored here. Check: runway/taxiway closures (esp. TWY H3 obstruction status), navaid U/S, lighting, obstacle/crane, RFF downgrade, GPS/RAIM, current Middle East conflict-zone/overflight bulletins. Source: official AIS / OFP NOTAM block. See also the [Middle East airspace brief](../../../../airspace/middle-east.md) §9 for the region's live conflict-zone picture.

---

## 16. Fuel & alternate planning notes

- **Typical role for us:** Destination / alternate — not a K Global base.
- **Nearest suitable alternates:** Company preferred alternates [**OEJN**](../oejn/index.md) (Jeddah, sibling field), **OMDB** (Dubai), **OTHH** (Doha) `[VAMSYS mirror 2026-07-26]` — confirm suitability, runway/RFF adequacy and current minima per leg.
- **Fuel-uplift notes:** Jet A-1, H24, hydrant + tanker; specific into-plane provider not confirmed. 🟧 See [`OM E — Fuel Policy`](../../../../../flight-ops/fuel-policy.md).
- **Range/perf flags for our fleet:** Field length (4,205 m) non-limiting for any K Global type; summer density-altitude is a moderate planning input given the 42.3°C reference temperature. See [`OM B — Fleet Capability Matrix`](../../../../../fleet/capability-matrix.md).

---

## 17. Fleet-specific notes (optional)

- No fleet-specific limiting factor identified at OERK — runway length, RFF category and navaid infrastructure are non-limiting for any K Global type. Summer takeoff-weight planning on the hottest reference-temperature days is the only type-relevant consideration; see [`OM B — Fleet Capability Matrix`](../../../../../fleet/capability-matrix.md).

---

## 18. Open items (🟧 — confirm against AIP / current AIRAC)

- **Preferential runway logic** — no published wind/noise-based rule found; confirmed only that two parallel pairs exist.
- **SID/STAR exact current-AIRAC designators** — only chart existence/type confirmed, not the named procedures.
- **Take-off minima, engine run-up, reverse-thrust policy** — not confirmed in reachable sources.
- **Ground handling agent for our operation** — not confirmed.
- **Elevation figure** — AIP states 2,053 ft; most secondary/simulator sources give 2,049 ft — treat the AIP figure as authoritative pending re-verification.
- **Taxiway H3 obstruction** — status as of the retrieved AIRAC cycle; verify current NOTAM.
- **AIP currency** — the retrieved cycle is dated AMDT 05/24 (2024-08-22); a newer cycle almost certainly exists for procedural detail (frequencies, stand numbering) — physical infrastructure (runway geometry, PCN, navaid idents) is unlikely to have changed.

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim material (current-AIRAC charts) informs content but is not listed here.*

- **GACA/SANS eAIP, AD 2 OERK Riyadh/King Khaled International**, AIRAC AMDT 05/24, eff. 2024-08-22 — https://aimss.sans.com.sa/assets/FileManagerFiles/AIP%20AMDT%2005_24_2024_08_22/eAIP/AD%202%20OERK%20RIYADH%20-%20KING%20KHALED%20INTERNATIONAL-en-GB.html (retrieved 2026-07-26). **Treat exact current-cycle figures as needing a live-AIP cross-check.**
- OurAirports — https://ourairports.com/airports/OERK/ and /frequencies.html (retrieved 2026-07-26). *Cross-check.*
- SkyVector — https://skyvector.com/airport/OERK/Riyadh-King-Khaled-International-Airport (retrieved 2026-07-26). *Cross-check.*
- Wikipedia — "King Khalid International Airport" — https://en.wikipedia.org/wiki/King_Khalid_International_Airport (retrieved 2026-07-26). *Terminal/history/context corroboration.*
- SKYbrary — "Shamal" — https://skybrary.aero/articles/shamal (retrieved 2026-07-26). *Regional dust-storm hazard corroboration.*

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-26 | Built from AIP Saudi Arabia (GACA); K Global fields from live VAMSYS; 4-page pack. |
