# LTFJ — İstanbul Sabiha Gökçen Intl · Airport Briefing

**LTFJ / SAW** · Pendik/Kurtköy, İstanbul, Türkiye · Middle East
**Version** v0.1 · **Updated** 2026-07-26 · **Status** Draft — DHMİ AIP-derived

> **Read-me:** Planning aid for the sim, not a chart. Static data is drawn from the DHMİ AIP Türkiye, AD 2 LTFJ (current AIRAC extract retrieved) plus standard public aeronautical data; approaches/SIDs/STARs are listed **by name only or flagged not-yet-confirmed** — fly the charted current-AIRAC version. Live weather/NOTAMs are pulled at planning (§14/§15). Open 🟧 items are listed in §18. Flag legend 🟥 restriction/hazard · 🟧 caution/unverified · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| ARP (lat/long) | 40°53′54″N / 029°18′33″E, between TWY C5 and TWY C6 `[DHMİ AIP AD 2 LTFJ 2.2]` |
| Field elevation | **312 ft AMSL** (reference temperature 28 °C) |
| Mag variation | **6.1° E (2025)** / 0.05° increasing per year |
| Time zone | UTC+3 (TRT, no DST observed) |
| Runway(s) | **Two parallel runways**: **06L/24R** (3,000 × 45 m, original, opened with the airport) and **06R/24L** (3,540 × 60 m, new, opened 25 Dec 2023, wide-body capable) |
| Preferential runway | Published Preferential Runway System (PRS) favours **RWY 06 for both landing and take-off** unless wind/braking-action/weather criteria override — see §10/§11 |
| Longest LDA | 3,540 m (06R/24L) |
| Approaches | **ILS CAT I** on 06L and 24L; **ILS CAT I** on 24R; **ILS CAT II** on 06R (approach lighting rated CAT II/III on 06L, 06R and 24L — confirm current chart, see §18) |
| RFF category | **CAT 10** (ICAO highest) 🟩 |
| Control type | **Radar** — Gökçen TWR on the field; approach provided by **Yeşilköy APP** (or Gökçen TWR when required/transferred); FIR: **İstanbul (LTBB)** — see [Middle East airspace brief](../../../../airspace/middle-east.md) |
| Elevation class | Near sea-level (312 ft) — **not** hot-and-high |
| Special-airport status | 🟧 Slot-managed field on the Asian side of İstanbul; **technical landings and diverts not accepted** for non-based aircraft; de-icing aprons restricted to Code C only — see §5 |
| Customs / PoE | **Yes** — H24 (AD administration, customs/immigration, ATS, fuelling, handling, security, de-icing all published H24) |
| K Global category | 🟧 **Not in VAMSYS** — pending reconciliation |
| K Global base | 🟧 **Not in VAMSYS** — No, per governance (not a K Global base) |
| Company preferred alternates | 🟧 **Not in VAMSYS** — pending reconciliation |
| Taxi-in / taxi-out (VAMSYS) | 🟧 **Not in VAMSYS** — pending reconciliation |

---

## 2. Validation summary

| Domain | Flag | Note |
|---|---|---|
| Terrain / CFIT | 🟩 | 35 km SE of İstanbul city on the Asian side; no close-in high terrain identified in reachable sources. Not independently cross-checked against a current MSA chart this pass. |
| Runway length vs fleet perf | 🟩 | New 3,540 m RWY 06R/24L is explicitly wide-body-capable (opened Dec 2023); original 3,000 m RWY 06L/24R is shorter but non-limiting for most of our fleet at typical weights — confirm per type/route. |
| Approach availability / minima | 🟧 | ILS on three of four runway ends (06L, 24R, 06R, 24L); CAT II confirmed on 06R; approach-lighting table also shows CAT II/III lighting on 06L, 06R and 24L that is not matched by an equivalent ILS category in the navaid table — discrepancy flagged, verify current AIRAC. |
| Airspace / traffic / control | 🟥 | Second-busiest İstanbul-area airport; heavy scheduled-traffic congestion is explicitly acknowledged in the AIP's own local-traffic regulations (technical landings/diverts refused, foreign-carrier flight-rights capped) — see §3.2. |
| Weather / seasonal hazard | 🟧 | Marmara-region climate; field-specific seasonal statistics not confirmed in reachable sources this pass — see §14. |
| Curfew / slots / hours | 🟥 | All AD services H24; **no technical landings/diverts accepted** for non-based traffic, and scheduled-service slot allocation runs through the **DHMİ Airports SLOT Coordination Center** — a hard capacity-management regime even without a night curfew. |
| RFF category vs our types | 🟩 | CAT 10 — above any of our fleet's requirement. |
| Fuel availability | 🟩 | Jet A-1, H24, unlimited by hydrant and tankers, published. |
| Customs / handling / security | 🟧 | H24 published; specific handling agent and exact desk practice for our operation not confirmed. |

---

## 3. Threat & Error Management (TEM)

### 3.1 CFIT / Terrain 🟩
LTFJ sits at 312 ft AMSL, 35 km SE of İstanbul on the Asian side (Pendik/Kurtköy). No close-in high terrain was identified in reachable public sources for the arrival/departure/missed-approach environment. Treated as a non-factor field for terrain, but the MSA ring has not been independently cross-checked against a current AIRAC chart this pass. 🟧

### 3.2 Airborne conflict / traffic 🟥
LTFJ is the second İstanbul-area airport and carries genuinely constrained capacity: the AIP's own local traffic regulations (AD 2.20) state that **technical landings and diverts are not accepted** for aircraft not based at Sabiha Gökçen, that **individual scheduled flight-permit applications are not made**, and that **additional flight rights beyond bilateral-agreement entitlements are not granted to foreign scheduled carriers** "due to insufficient capacity." Approach is shared with LTFM under **Yeşilköy APP** (sector **SAG** specifically serves Sabiha Gökçen), meaning traffic is sequenced within the same dense multi-sector structure that serves the five-runway İstanbul Airport across the strait. Cross-ref [Middle East airspace brief](../../../../airspace/middle-east.md) and the sibling field [**LTFM — İstanbul**](../ltfm/index.md).

### 3.3 Runway excursion 🟧
No displaced thresholds are published for either runway end pair. RWY 06L has a noted TWY A11 entrance-to-24L geometry offset (20 m negative to TORA at the connecting point) — a specific local geometry note, not a general excursion risk. The new RWY 06R/24L (3,540 m) carries meaningful longitudinal-slope variation along its length (see §7 remarks) — a runway-surface-profile item to be aware of, not a stopping-distance concern given its generous length. RWY 06L/24R (3,000 m, original) is the shorter runway and the more excursion-relevant of the two for weight-limited operations.

### 3.4 Weather threat 🟧
No LTFJ-specific seasonal hazard statistics (fog frequency, wind-shear, convective season) were found in reachable public sources this pass. Regional Marmara-area climatology would suggest a winter fog/de-icing season (de-icing facilities are explicitly provisioned, see §11) and a summer convective risk consistent with the broader region — treat as unconfirmed pending a dedicated climatology source. See §14.

### 3.5 Operational considerations 🟥
Plan around three durable constraints: (1) **capacity-managed scheduled access** — technical landings/diverts refused for non-based aircraft, and additional foreign-carrier scheduled rights are not granted beyond bilateral entitlements; any K Global service here must be confirmed against this regime well ahead of ops; (2) the **new wide-body-capable runway (06R/24L, opened Dec 2023)** materially expands what LTFJ can support relative to its historical single-runway, narrowbody-oriented profile — but de-icing aprons remain **restricted to Code C aircraft (max B737-900/A321)**, a real constraint for widebody winter ops (see §11); and (3) **shared approach control with LTFM** under Yeşilköy APP, meaning traffic flow here is coupled to the busier field's congestion picture.

---

## 4. Cautions & Warnings

- **Technical landings and diverts are not accepted** at LTFJ for aircraft not based here — do not plan this field as a casual diversion option without confirming current policy and obtaining the necessary permissions.
- **De-icing aprons are Code C only** (largest type accommodated: B737-900 / A321) — a K Global widebody will need an alternative de-icing solution or field if winter conditions require it; confirm before winter-season planning.
- **AN124, AN225, C5, A380 and B747-8I are explicitly forbidden** from landing at this airport (per the historical 2016-cycle local regulations; not re-confirmed in the current AIP extract this pass — verify). 🟧
- **Preferential Runway System favours RWY 06** for both landing and take-off — pilots unable to comply must notify ATC (at start-up-clearance request for departures; at first contact or 20 min before ETA for arrivals) and should expect delay.
- **Push-back is mandatory for all parking positions** except the de-icing apron and stand 14A-15A; power-back using reverse thrust is forbidden.
- **DCL (Departure Clearance) system** is the default clearance-delivery method — revert to voice with Clearance Delivery (122.625 MHz) on any doubt or system difficulty.
- Approach-lighting category (CAT II/III) shown on several runway ends does not match the confirmed ILS category in the navaid table — treat exact current-day CAT status as 🟧 pending AIRAC cross-check (§18).

---

## 5. Aerodrome category, restrictions & crew qualification

- **Special-airport / category:** Not operator-categorised as crew-restricted in reachable sources; the standing crew-briefing items are the **capacity-managed access regime** and the **Code-C-only de-icing constraint** for widebody winter ops. 🟧
- **Crew-qualification gate:** CAT II currency required for a low-vis arrival on RWY 06R (confirmed ILS CAT II); confirm crew/aircraft currency before planning a low-vis approach on that runway specifically. 🟧
- **Operating restrictions / bans:** Training/test-flight touch-and-go, traffic-pattern and instrument-landing practice are **not permitted** due to heavy traffic. Wide-body type bans (AN124/AN225/C5/A380/B747-8I) noted in the 2016-cycle local regulations — re-verify against current AIRAC. 🟧
- **Overflight / entry / permits:** Standard international arrival into Türkiye; scheduled-service access is capacity-managed per §3.2/§4 above — confirm route rights and slot before scheduling. 🟥
- **Operations notes:** Operator — **HEAŞ (Havalimanı İşletmeleri ve Havacılık Endüstrileri A.Ş.)**; ANSP — **DHMİ**; APP service provided by (a) Yeşilköy APP or (b) Gökçen TWR when required/transferred.

---

## 6. General / hours / services

| Item | Value | Flag |
|---|---|---|
| ATS hours | H24 (AD Administration, Customs/Immigration, Health/Sanitation, AIS, ARO, MET, ATS, Fuelling, Handling, Security, De-icing all published H24) | 🟩 |
| AD operating hours | H24 published; access is nonetheless capacity-managed for scheduled non-based traffic (§3.2/§5) | 🟥 |
| Night / curfew restrictions | No explicit night curfew found in reachable sources | 🟧 |
| RFF category | **CAT 10** | 🟩 |
| Fuel | Jet A-1; H24; unlimited via hydrant and tankers | 🟩 |
| PCN | Runway-specific — see §7; taxiways mostly concrete PCN 82–139, code letters C–F by segment | 🟩 |
| Customs | H24 published; exact practice for overnight/diversion traffic not confirmed | 🟧 |
| Handling / FBO | ÇELEBİ Ground Handling Service and TGS Turkish Ground Handling Service referenced for cargo handling; passenger-side handler not individually confirmed | 🟧 |

---

## 7. Runways & declared distances

| RWY | Dimensions | Surface / PCN | TORA | TODA | ASDA | LDA | Notes |
|---|---|---|---|---|---|---|---|
| 06L | 3,000 × 45 m | Concrete PCN 84 R/A/X/T, SWY asphalt | 3,000 m | 3,000 m | 3,060 m | 2,910 m | At the TWY A11 entrance to 24L, TWY centreline-to-RWY-centreline connection is offset 20 m negative to TORA — original runway |
| 24R | 3,000 × 45 m | Concrete PCN 84 R/A/X/T, SWY asphalt | 3,000 m | 3,150 m | 3,060 m | 3,000 m | Reciprocal of 06L |
| 06R | 3,540 × 60 m | Concrete PCN 100 R/A/W/T + asphalt PCN 139 F/A/W/T (1,954–2,524 m section) | 3,540 m | 3,540 m | 3,540 m | 3,540 m | New runway, opened 25 Dec 2023, wide-body capable; intersection take-off from TWY A3 = 3,391 m |
| 24L | 3,540 × 60 m | Concrete PCN 100 R/A/W/T + asphalt PCN 139 F/A/W/T (1,016–1,586 m section) | 3,540 m | 3,540 m | 3,540 m | 3,540 m | Reciprocal of 06R; intersection take-off from TWY A10 = 3,452 m |

*Source: DHMİ AIP Türkiye, AD 2 LTFJ 2.12/2.13 (AIRAC AMDT 11/24, current cycle retrieved 2026-07-26). RWY 06L/24R strip 3,120×300 m, RESA 240×90 m; RWY 06R/24L strip 3,709×300 m, RESA 250×150 m (06R end) / 240×150 m (24L end); both runway pairs' RESA "available." Notable published longitudinal-slope variation on 06R/24L (ranges from +0.75% to −0.75% along the runway length) — a surface-profile note, not a declared-distance issue. All distances in metres.*

---

## 8. Communications

| Service | Callsign | Frequency | Hours | Notes |
|---|---|---|---|---|
| ATIS | Gökçen Information | 128.550 | H24 | D-ATIS available for ACARS-equipped aircraft |
| Delivery | Gökçen Delivery | 122.625 (main) / 121.930, 121.885 (standby) | H24 | DCL (Departure Clearance) system is the default |
| Ground | Gökçen Ground | 121.750 (main) / 121.580, 121.905 (main) / 121.630, 121.680 (ATC-Follow-me, standby) | H24 | |
| Tower | Gökçen TWR | 118.800 (main) / 120.925 (main) / 243.100 (UHF) / 122.450, 136.300 (standby) | H24 | |
| Approach | Yeşilköy APP (sector **SAG** — Sabiha Gökçen) | Per current AIRAC — see [LTFM Briefing §8](../ltfm/index.md) | H24 | Shared multi-sector structure with LTFM |
| Centre / FIR | İstanbul (LTBB) | Per current AIRAC | H24 | See [Middle East airspace brief](../../../../airspace/middle-east.md) |
| SAR | Gökçen Rescue Sub-Center | 123.100 | H24 | |

*Source: DHMİ AIP Türkiye, AD 2 LTFJ 2.18 (AIRAC AMDT 10/23, current cycle retrieved 2026-07-26).*

---

## 9. Navaids

| Aid | Ident | Freq | Hours | Notes |
|---|---|---|---|---|
| VOR/DME | SBH | 108.8 (CH25X) | H24 | On/near 06L/24R axis |
| NDB | SAB | 347 kHz | H24 | Collocated with SBH |
| VOR/DME | SGN | 115.85 (CH105Y) | H24 | On/near 06R/24L axis |
| ILS 06L | ISAB | 110.75 | H24 | CAT I (GP 330.05, DME ISAB CH44Y) |
| ILS 24R | ISBH | 110.9 | H24 | CAT I (GP 330.8, DME ISBH CH46X) |
| ILS 06R | ISGN | 110.15 | H24 | **CAT II** (GP 334.25, DME ISGN CH38Y) — new runway |
| ILS 24L | ISGB | 109.35 | H24 | CAT I (GP 331.85, DME ISGB CH30Y) |

*Source: DHMİ AIP Türkiye, AD 2 LTFJ 2.19 (AIRAC AMDT 04/26, current cycle retrieved 2026-07-26). The approach/runway lighting table (2.14) shows CAT II/III-rated lighting infrastructure on 06L, 06R and 24L that is not matched one-for-one by the ILS category shown here (06L and 24L are explicitly CAT I in the navaid table) — a lighting-vs-navaid-category discrepancy, flagged 🟧, verify current AIRAC before planning a low-vis approach on any runway other than the confirmed CAT II 06R.*

---

## 10. Arrival

- **Transition altitude / level:** TA 12,000 ft; TL by QNH — not independently confirmed this pass, verify current chart. 🟧 (Approach QNH: arriving traffic uses the LTBA QNH/TL given by Yeşilköy APP during the approach phase; Gökçen TWR issues the LTFJ QNH at first contact.)
- **Speed:** Standard 250 KIAS below FL100 (ICAO norm) — confirm no local override on current chart.
- **Preferential runway logic:** Published **Preferential Runway System (PRS)** favours **RWY 06 for landing**, subject to: dry-runway tailwind ≤10 kt / wet-runway tailwind ≤5 kt, braking action "good-good-good," no wind-shear/thunderstorm/heavy-rain affecting the preferred runway, and LVP not in progress. Pilots unable to comply must notify ATC at first contact or 20 minutes before ETA (whichever is earlier) and may be subject to delay.
- **Approaches (names only — verify minima on current AIRAC charts):**

| RWY | Approach | Notes |
|---|---|---|
| 06L | ILS (ISAB) | CAT I; approach lighting rated CAT II/III — verify current chart 🟧 |
| 24R | ILS (ISBH) | CAT I; Simple APP lighting |
| 06R | ILS (ISGN) | **CAT II** confirmed; new wide-body-capable runway |
| 24L | ILS (ISGB) | CAT I; approach lighting rated CAT II/III — verify current chart 🟧 |

- **STARs (names only):** Not confirmed in reachable research pass — pull the current-AIRAC STAR list at planning. 🟧
- **LVP:** Not confirmed in reachable sources this pass — CAT II infrastructure exists on 06R. 🟧
- **Missed approach watch-items:** Terrain is not the driver; the operative missed-approach concern is re-sequencing within the shared Yeşilköy APP structure serving both LTFJ and LTFM.

---

## 11. Departure

- **SIDs (names only — fly the charted version):** GNSS-based RNAV SIDs terminate at named waypoints/fixes including **MARMA, GOLDO, VADEN, IBLAL, MAKOL, MOPIN, PIMAV, EDASA, ERSEN, TUDBU** (per the 2016-cycle local traffic regulations; re-verify against the current AIRAC procedure list). 🟧
- **RNP / climb-gradient requirements:** P-RNAV approved aircraft must flight-plan with the correct SID-terminus waypoint as the first route element (e.g. MAKOL UN617…). Confirm gradient/equipage per SID on the current chart. See [`OM E — PBN and RNP Operations`](../../../../../flight-ops/pbn-and-rnp-operations.md).
- **Take-off minima:** Published per AIP — exact figures not confirmed this pass. 🟧
- **Start-up / push-back:** **DCL (Departure Clearance) system** is the default; if unable, contact Clearance Delivery (122.625 MHz) reporting callsign + stand position + ATIS code. Standard push-back mandatory for all positions except the de-icing apron and stand 14A-15A; **power-back using reverse thrust is forbidden**. Under independent parallel departure operations, ATC may change a departing aircraft's runway/SID even after start-up/push-back for capacity reasons.
- **ATC slot / CTOT & clearance:** Scheduled service requires slot allocation through the **DHMİ Airports SLOT Coordination Center**; technical landings/diverts and individual scheduled-flight-permit applications are **not accepted** for non-based aircraft (§3.2/§5). Charter/GA flights operate during non-busy hours per their allocated slot.
- **De-icing:** 🟥 **De-icing aprons are Code C only** (largest accommodated type: B737-900/A321) — **not usable for a K Global widebody**. Confirm an alternative de-icing plan (or field) before winter-season ops. Entry/exit per ATC instruction. See [`OM E — Cold Weather Operations`](../../../../../flight-ops/cold-weather-operations.md).

---

## 12. Noise & Environmental

- **Noise abatement (NAP):** Departing aircraft compliant with ICAO Annex 16 Chapter 3/4 noise categories apply **NADP-2**; Chapter-2-category aircraft apply **NADP-1** only. Pilots apply the assigned NADP until passing 3,000 ft (per the 2016-cycle local regulations; re-verify against current AIRAC). 🟧
- **Night noise / dB limits:** Not confirmed in reachable sources this pass. 🟧
- **Engine run-up restrictions:** A dedicated engine test area is specified on the aerodrome chart; operators require Duty Manager (HEAŞ) permission before engine testing and must contact Gökçen Delivery afterward. Aircraft nose positioned toward RWY 24 threshold during test, centreline-aligned.
- **Reverse thrust / idle-reverse policy:** Reverse-thrust power-back for push-back is explicitly **forbidden**; general landing reverse-thrust policy not confirmed. 🟧

---

## 13. Ground operations

- **Stands for our types:** Passenger apron (Apron 1) plus Aprons 4/5/6/7/8, cargo apron, General Aviation apron; specific Code E/F widebody stand allocation given the new wide-body-capable runway is not itemised in reachable sources — confirm with handling. 🟧 | 🟧
- **Push-back:** Mandatory for all parking positions except the de-icing apron and stand 14A-15A; specific pushback-direction rules apply to several named stands (e.g. westward for stands 1–2, eastward for cargo-apron stands 101/112/113) — confirm current stand-specific rule with Ground.
- **Standard taxi routes:** Extensive taxiway system (A–V lettered plus sub-taxiways); TWY widths and PCN vary by segment — confirm routing with Ground/Apron on the day.
- **Hot spots / tight taxiways:** 🟥 MRO and stands 301–308 areas are **not visible from Tower** — taxiing, push-back and towing in these areas are under **pilot responsibility**. TWY F4 has a noted slope caution (see AD 2.20 item U). Confirm current AIRAC hot-spot markings.
- **Follow-me:** Available; used for de-icing-apron access from the non-standard entry side and for guidance in areas not visible from Tower.

---

## 14. Weather & seasonal (durable)

- **Climate / prevailing wind:** Marmara-region climate on the Asian side of İstanbul; field-specific prevailing-wind data not confirmed in reachable sources this pass. 🟧
- **Seasonal hazards:** De-icing facilities are explicitly provisioned (Code C only), implying a recognised winter de-icing season; no field-specific fog/wind statistic was found. 🟧
- **Local effects:** Not confirmed in reachable sources this pass. 🟧

> **Live weather — pull at planning (T-2h):** METAR, TAF, TREND, SIGMET/AIRMET. Not stored here.

---

## 15. NOTAMs

> **Pull at planning (T-2h).** Perishable — not stored here. Check: runway/taxiway closures, navaid U/S (particularly the ISGN CAT II ILS on 06R), lighting, obstacle/crane, RFF downgrade, GPS/RAIM for RNP procedures, current slot/CTOT status via the DHMİ SLOT Coordination Center. Source: official AIS / OFP NOTAM block.

---

## 16. Fuel & alternate planning notes

- **Typical role for us:** 🟧 Not confirmed in VAMSYS — treat as a potential destination/alternate pending network reconciliation; note the capacity-managed scheduled-access regime (§3.2/§5) before planning regular service here.
- **Nearest suitable alternates:** 🟧 Not in VAMSYS — pending reconciliation. The sibling field [**LTFM — İstanbul Airport**](../ltfm/index.md), across the strait on the European side, is a same-city option to assess operationally; cross-country alternates would draw on the wider Middle East/Europe network per the route register.
- **Fuel-uplift notes:** Jet A-1, H24, unlimited via hydrant and tankers, published. 🟩 See [`OM E — Fuel Policy`](../../../../../flight-ops/fuel-policy.md).
- **Range/perf flags for our fleet:** New RWY 06R/24L (3,540 m, wide-body capable) is non-limiting for our fleet; original RWY 06L/24R (3,000 m) should be checked per type/weight. See [`OM B — Fleet Capability Matrix`](../../../../../fleet/capability-matrix.md).

---

## 17. Fleet-specific notes (optional)

- **De-icing is Code C only** — a real winter-season consideration for any K Global widebody type routed through LTFJ; no widebody de-icing capability is currently confirmed at this field. See [`OM E — Cold Weather Operations`](../../../../../flight-ops/cold-weather-operations.md) and [`OM B — Fleet Capability Matrix`](../../../../../fleet/capability-matrix.md).

---

## 18. Open items (🟧 — confirm against AIP / current AIRAC)

- **K Global category, base flag, alternates and taxi times** — not in VAMSYS; pending reconciliation.
- **Approach-lighting-vs-ILS-category discrepancy** — 06L, 06R and 24L show CAT II/III-rated approach lighting in the AIP's lighting table, but the navaid table shows only 06R at confirmed CAT II (06L and 24L are CAT I) — confirm current AIRAC before planning any low-vis approach beyond 06R.
- **Wide-body type bans (AN124/AN225/C5/A380/B747-8I)** — sourced to the 2016-cycle local regulations, not re-confirmed against the current AIRAC extract this pass.
- **SIDs/STARs (current names, beyond the RNAV waypoint set found)** — pull the live current-AIRAC procedure list before use.
- **Take-off minima, LVP trigger, night noise limits, general reverse-thrust policy** — none confirmed in reachable sources.
- **Widebody stand/gate allocation** for the new wide-body-capable runway — not itemised in reachable sources.
- **Passenger-side ground handling agent(s)** — cargo handlers (ÇELEBİ, TGS) confirmed; passenger-side not confirmed.
- **Seasonal weather statistics** — no field-specific fog/wind/convective data found.
- **Slot-coordination detail** — DHMİ SLOT Coordination Center confirmed as the mechanism; exact IATA level and process for K Global not confirmed.

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim material (current-AIRAC charts) informs content but is not listed here.*

- **DHMİ AIP Türkiye, AD 2 LTFJ 2.1–2.20** — current AIRAC extract (amendment cycles through AMDT 04/26, eff. 16 Apr 2026; sub-sections carrying dates from AMDT 10/23 through AMDT 04/26) — https://dhmi.gov.tr/AIPDocuments/LT_AD_2_LTFJ_en.pdf (retrieved 2026-07-26). *ARP, elevation, mag var, runway physical characteristics, declared distances, approach/runway lighting, ATS airspace, communications, navaids, local traffic regulations.*
- DHMİ AIP Türkiye, AD 2 LTFJ (2015–2016 legacy cycle extract, superseded by the above but retained for local-regulation detail not re-confirmed in the current extract — RNAV SID waypoint list, NADP policy, wide-body type bans) — https://silo.tips/download/ad-2-ltfj-1-turkey-12-nov-15-ltfj-ad-21-aerodrome-location-indicator-and-name-lt (retrieved 2026-07-26). **Superseded cycle — treat 2016-sourced local-regulation detail as 🟧 pending re-confirmation.**
- Wikipedia — "Sabiha Gökçen International Airport" — https://en.wikipedia.org/wiki/Sabiha_G%C3%B6k%C3%A7en_International_Airport (retrieved 2026-07-26). *Background, general context.*
- Public aviation-news reporting on the second runway's official opening (25 Dec 2023, 3,540 m, wide-body capable) — general search corroboration (Daily Sabah, ftnnews.com and similar outlets); not individually re-verified this pass. *Advisory/secondary source — flagged 🟧.*

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-26 | Built from national AIP; K Global fields from live VAMSYS (not yet reconciled for this field); 4-page pack. |
