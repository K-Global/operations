# VCBI — Bandaranaike Intl Colombo · Airport Briefing

**VCBI / CMB** · Colombo, Sri Lanka · Asia
**Version** v0.1 · **Updated** 2026-07-26 · **Status** Draft

> **Read-me:** Planning aid for the sim, not a chart. Static data is drawn from the AIP Sri Lanka (Civil Aviation Authority of Sri Lanka / Airport & Aviation Services (Sri Lanka) Ltd) where reachable, corroborated by public tier-4 sources; approaches/SIDs/STARs are listed **by name only or flagged not-yet-confirmed** — fly the charted current-AIRAC version. Live weather/NOTAMs are pulled at planning (§14/§15). Open 🟧 items are listed in §18. Flag legend 🟥 restriction/hazard · 🟧 caution/unverified · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| ARP (lat/long) | 7°10′51″N 79°53′03″E (7.180760, 79.884102) `[OurAirports / SkyVector, cross-checked]` |
| Field elevation | **30 ft / 9 m AMSL** — sources vary: OurAirports and SkyVector give 29–30 ft, the Wikipedia infobox gives 26 ft; **30 ft used per build convention** — treat the exact figure as 🟧 pending a direct AIP read |
| Mag variation | Not published / verify 🟧 |
| Time zone | **UTC+5:30 (SLST)** — no daylight saving observed |
| Runway(s) | **Single runway 04/22**, 3,350 × 45 m (10,991 × 148 ft), asphalt, lighted — **no parallel or second runway** `[OurAirports/SkyVector]` |
| Preferential runway | Wind-driven choice between 04 and 22; no published preferential-runway program identified this pass 🟧 |
| Longest LDA | **3,350 m published** (full runway length; TORA reported at 3,441 m per a tier-4 distance reference — see §7) 🟧 no displaced threshold identified in reachable sources |
| Approaches | **Not published / verify** — no ILS/RNP/VOR procedure names confirmed in reachable sources this pass 🟧 |
| RFF category | Reported as **CAT 9** via a public search-index summary purporting to draw on the AIP; **not independently confirmed from primary AIP text this pass** 🟧 |
| Control type | **Radar (assumed)** — historical accident reporting names "Colombo Director" for the approach facility, consistent with radar vectoring at Sri Lanka's principal international gateway; not independently confirmed as full radar coverage 🟧 |
| Elevation class | Near sea-level (30 ft) — **not** hot-and-high; the operative reliability drivers are the **single-runway, no-redundancy constraint** and **monsoon convective weather**, not density altitude |
| Special-airport status | Not operator-categorised as a restricted-crew "special airport" in reachable sources. 🟥 **Single runway with no parallel/second runway** — any runway-closing event (disabled aircraft, inspection, contamination, lightning strike) removes all airport capacity, not just a share of it. The field also **shares its site with SLAF Katunayake**, an active Sri Lanka Air Force base (historical RAF Negombo/RCAF Katunayake origin) — background awareness item, see §5 |
| Customs / PoE | **Yes** — Sri Lanka's principal international gateway; hours reported as **H24** via a secondary/aggregated source, **not independently confirmed from primary AIP text** 🟧 |
| K Global category | **L** `[VAMSYS mirror 2026-07-26]` 🟩 |
| K Global base | **NO** `[VAMSYS mirror 2026-07-26]` — destination / alternate field within the network, not a company base |
| Company preferred alternates | **VOMM** (Chennai, India, cross-country), **VABB** (Mumbai, India, cross-country) `[VAMSYS mirror 2026-07-26]` |
| Taxi-in / taxi-out (VAMSYS) | **12 min / 15 min** `[VAMSYS mirror 2026-07-26]` |

---

## 2. Validation summary

| Domain | Flag | Note |
|---|---|---|
| Terrain / CFIT | 🟩 | VCBI sits at 30 ft AMSL on the flat Western Province coastal plain — no close-in high terrain relevant to arrival, departure or missed-approach paths. Sri Lanka's central highlands (Kandy/Nuwara Eliya area, peaks to roughly 2,500 m) lie well inland of the field and are not a factor at the aerodrome itself. |
| Runway length vs fleet perf | 🟩 | 3,350 m is ample for a K Global category **L** type; non-limiting. |
| Approach availability / minima | 🟧 | No approach names, ILS presence, or minima confirmed in reachable sources this pass — pull the current-AIRAC procedure list before use. |
| Airspace / traffic / control | 🟧 | Colombo (VCCF) FIR sits at the southern edge of the Bay-of-Bengal/Indian-Ocean procedural-oceanic zone described in the [Asia airspace general brief](../../../../airspace/asia.md); control type (radar vs procedural) at VCBI itself is not independently confirmed. |
| Weather / seasonal hazard | 🟥 | **SW monsoon (~mid-May–Sep) and NE monsoon (~Oct–Feb, heaviest Oct–Nov)** bring frequent convective thunderstorm activity — combined with the **single-runway field**, a monsoon cell over the field is a genuine capacity/diversion driver with no internal redundancy. See §14. |
| Curfew / slots / hours | 🟥 | No formal night curfew identified in reachable sources, but BIA has **publicly reported hitting terminal/capacity limits**, with additional winter-season weekly frequency requests reportedly denied due to space scarcity — a real scheduling constraint distinct from a curfew. See §6/§16. |
| RFF category vs our types | 🟧 | Reported CAT 9 (unconfirmed sourcing, see §1) — likely adequate for our fleet but not independently verified. |
| Fuel availability | 🟧 | Jet A-1 confirmed available at general-aviation FBO level (VVIP, Continuum Aviation, Sri Lanka Exec Aviation Services); airline-scale into-plane supplier and hours not independently confirmed. |
| Customs / handling / security | 🟧 | International PoE status is not in doubt given the field's role as Sri Lanka's principal gateway, but exact desk hours and a scheduled-airline ground handling agent are not confirmed in reachable sources. The field's shared civil/military history (2001 LTTE attack on the adjoining air base and civil aircraft) is background context, not a current live restriction. |

---

## 3. Threat & Error Management (TEM)

### 3.1 CFIT / Terrain 🟩
VCBI sits at 30 ft AMSL on the flat coastal plain of Sri Lanka's Western Province — there is **no close-in high terrain** relevant to arrival, departure or missed-approach paths. Verify the MSA ring on the current chart as routine practice, but CFIT is not the operative threat at this field itself. *Historical note:* public accident-history sources record a 1974 approach accident involving terrain, but the account's geographic detail does not obviously reconcile with the field's confirmed flat, low-lying coastal setting — retained here only as a historical safety-record data point (§18), not as evidence of a current close-in terrain hazard.

### 3.2 Airborne conflict / traffic 🟧
VCBI is worked by Colombo Approach/Tower under the **Colombo (VCCF) FIR**, which sits at the southern edge of the Bay-of-Bengal / Indian-Ocean procedural-oceanic zone described in the [Asia airspace general brief](../../../../airspace/asia.md) — VCCF itself is one of the South-Asian FIRs the Asia brief flags as part of the region's mixed continental/procedural-oceanic mosaic, alongside Chennai and Kolkata. Traffic density at the field is that of a major single-runway international gateway (2024: ~55,800 aircraft movements, ~8.8 million passengers); no radar-vs-procedural confirmation was obtained for VCBI's own terminal control this pass.

### 3.3 Runway excursion 🟧
The field's **only runway (04/22)** has no confirmed displaced threshold or published RESA figure in reachable sources this pass — treat both as **Not published / verify** until the current AIRAC is consulted. Monsoon-season rain (§3.4/§14) degrades braking action; no contamination-factoring or RWYCC data specific to VCBI was found. With **only one runway available**, any excursion event closes the entire airfield, not just one of several movement areas.

### 3.4 Weather threat 🟥
Colombo's tropical monsoon climate produces two wet seasons: the **SW monsoon (~mid-May–September, heaviest mid-May–mid-June and September)** and the **NE monsoon transition (~October–November, the two heaviest rainfall months of the year)**, with a further inter-monsoonal convective period (March–April) bringing afternoon thunderstorms. Multiple daily thunderstorms are typical during the core monsoon periods. Because VCBI has **no second or parallel runway**, a thunderstorm cell, lightning strike, or heavy-rain/flooding event directly over the field is a **binary capacity event** — the airport has no internal redundancy to shift traffic to another runway the way a multi-runway field would. This combination (monsoon convection + zero runway redundancy) is the field's defining weather threat. See also [`OM E — Adverse Weather and Windshear`](../../../../../flight-ops/adverse-weather-and-windshear.md) and §14.

### 3.5 Operational considerations 🟥
Three durable items shape planning at VCBI: (1) the **single-runway, no-redundancy constraint** (§3.3/§3.4) — the field's defining structural limitation; (2) a **publicly reported terminal/capacity constraint** — Sri Lankan aviation press reported BIA denying additional weekly frequency requests for the 2025 winter season due to space scarcity, a real scheduling headwind distinct from a formal curfew (§6/§16); and (3) the field's **co-located military airfield (SLAF Katunayake)**, the historical successor to wartime RAF Negombo — background awareness only; no current operational restriction tied to it was identified beyond the historical record (§5/§18).

---

## 4. Cautions & Warnings

- **No parallel or second runway** — any runway-closing event (disabled aircraft, inspection, contamination, lightning) removes 100% of the field's capacity; build generous alternate/holding fuel into any plan touching VCBI in marginal weather.
- **Monsoon thunderstorms** — expect multiple daily convective cells May–September and again October–November; brief weather-avoidance routing and a genuine diversion contingency given the single-runway constraint.
- **Frequency conflict on Approach** — public sources disagree on the Colombo Approach frequency (120.9 MHz per OurAirports/SkyVector vs 132.4 MHz per an older public reference) — confirm the current frequency before relying on either figure (§8/§18).
- **Terminal/space capacity constraint** — BIA has publicly reported denying additional weekly frequency requests for capacity reasons; do not assume slot/schedule flexibility.
- **Co-located military airfield (SLAF Katunayake)** — be aware the site has an operational Air Force base immediately adjoining the civil airport; a security-related civil/military incident occurred here historically (2001) — background awareness, not a live restriction.
- Several figures in this file (elevation, RFF category, ATS/customs hours, approach names, TA/TL) rest on tier-4 or secondary-aggregated sourcing rather than a directly read primary AIP text — treat as 🟧 pending a direct-text confirmation pass (§18).

---

## 5. Aerodrome category, restrictions & crew qualification

- **Special-airport / category:** Not operator-categorised as a restricted-crew "special airport" in reachable sources; the standing crew-briefing items are the **single-runway, no-redundancy constraint** and **monsoon convective weather**. 🟥
- **Crew-qualification gate:** None identified specific to VCBI beyond standard international-operations currency. 🟧
- **Operating restrictions / bans:** No RNP AR ban, circling restriction, or specific SID/STAR non-approval identified in reachable sources — verify current AIRAC. 🟧
- **Overflight / entry / permits:** Standard international arrival; no special state permit or PPR requirement identified for a scheduled international operation. The field's site is shared with an active Sri Lanka Air Force base (SLAF Katunayake) — a historical and geographic fact, not a confirmed operational permit requirement. 🟧
- **Operations notes:** Airport operator — **Airport and Aviation Services (Sri Lanka) Ltd (AASL)**; civil aviation regulator — **Civil Aviation Authority of Sri Lanka (CAASL)**. AIP source of record: **AIP Sri Lanka (AASL)**. A second-terminal expansion project (Terminal II, JICA-funded) has experienced repeated delay; construction mobilisation was reported expected around mid-2026 with a currently-projected 2028 completion — monitor for future NOTAM-level construction impact; none identified as currently in force. See §Dispatch §2 for terminal detail.

---

## 6. General / hours / services

| Item | Value | Flag |
|---|---|---|
| ATS hours | Reported **H24** via a secondary aggregated source; not independently confirmed from primary AIP text | 🟧 |
| AD operating hours | Reported **H24** (consistent with the field's status as Sri Lanka's principal international gateway) | 🟧 |
| Night / curfew restrictions | No formal aircraft-movement curfew identified. A **terminal visitor-access restriction (22:00–24:00, non-passengers)** is publicly reported for congestion management, and a **broader terminal-capacity constraint** (winter-2025 additional-frequency requests reportedly denied) exists — neither is a curfew in the RJAA/hard-restriction sense, but both are real scheduling considerations | 🟧 |
| RFF category | Reported as **CAT 9** via secondary aggregation of AIP content; not independently confirmed from primary text | 🟧 |
| Fuel | **Jet A-1** confirmed at GA-FBO level (VVIP — 24/7 hours reported; Continuum Aviation; Sri Lanka Exec Aviation Services); airline-scale into-plane supplier/hours not confirmed | 🟧 |
| PCN | Not published / verify | 🟧 |
| Customs | Reported **H24** via secondary aggregation; not independently confirmed from primary text | 🟧 |
| Handling / FBO | GA-level: VVIP, Continuum Aviation, Sri Lanka Exec Aviation Services (fuel/FBO); scheduled-airline ground handling agent for a K Global operation not confirmed | 🟧 |

---

## 7. Runways & declared distances

| RWY | Dimensions | Surface / PCN | TORA | TODA | ASDA | LDA | Notes |
|---|---|---|---|---|---|---|---|
| 04 | 3,350 × 45 m (10,991 × 148 ft) | Asphalt, lighted; PCN not published | 3,441 m (tier-4 reference) 🟧 | Not published / verify 🟧 | Not published / verify 🟧 | 3,350 m | Threshold elevation ~25 ft per SkyVector; no displaced threshold identified |
| 22 | 3,350 × 45 m (10,991 × 148 ft) | Asphalt, lighted; PCN not published | 3,441 m (tier-4 reference) 🟧 | Not published / verify 🟧 | Not published / verify 🟧 | 3,350 m | Threshold elevation ~27 ft per SkyVector; no displaced threshold identified |

*Source: OurAirports and SkyVector (runway dimensions/surface, retrieved 2026-07-26), cross-checked. The 3,441 m TORA figure is a tier-4 distance-reference citation (Great Circle Mapper, via Wikipedia) not corroborated against a primary AIP declared-distance table this pass — flagged 🟧. TODA/ASDA and PCN are not published in any reachable source this pass. All distances in metres unless noted.*

---

## 8. Communications

| Service | Callsign | Frequency | Hours | Notes |
|---|---|---|---|---|
| ATIS | Colombo ATIS | 127.2 MHz | Not confirmed — assume H24 pending verification | 🟧 |
| Delivery | Not separately published | — | — | Likely combined with Ground at this field size — confirm locally 🟧 |
| Ground | Colombo Ground | 121.9 MHz | Not confirmed — assume H24 pending verification | 🟧 |
| Tower | Colombo Tower | 118.7 MHz | Not confirmed — assume H24 pending verification | 🟧 |
| Approach | Colombo Approach / "Colombo Director" | **120.9 MHz** (OurAirports/SkyVector, current) **or 132.4 MHz** (an older public reference) — **unresolved conflict** | Not confirmed | 🟥 confirm the current frequency before use — see §18 |
| Centre / FIR | Colombo (VCCF) FIR | Per current AIRAC | H24 (assumed) | See [Asia airspace general brief](../../../../airspace/asia.md) — no dedicated Colombo FIR brief exists yet in this project |

*Source: OurAirports/SkyVector frequency listings (retrieved 2026-07-26); Tower/Ground/ATIS figures agree across both. The Approach frequency conflict is noted for resolution against the current AIRAC.*

---

## 9. Navaids

| Aid | Ident | Freq | Hours | Notes |
|---|---|---|---|---|
| VOR | KAT (Katunayake) | 114.10 MHz | Not confirmed — assume H24 | On-field VOR (043°/1.5 NM from ARP per SkyVector); DME channel not published this pass 🟧 |
| ILS | Not published / verify | — | — | No ILS presence confirmed in reachable sources this pass — verify current AIRAC 🟧 |

*Source: SkyVector navaid listing (retrieved 2026-07-26).*

---

## 10. Arrival

- **Transition altitude / level:** Not published / verify 🟧
- **Speed:** Standard 250 KIAS below FL100 (ICAO norm) — confirm no local override on current chart.
- **Preferential runway logic:** Wind-driven choice between RWY 04 and 22; no published preferential-runway program identified. Given the SW/NE monsoon wind regime (§14), seasonal runway-direction bias is plausible but not confirmed this pass. 🟧
- **Approaches (names only — verify minima on current AIRAC charts):**

| RWY | Approach | IAF | FAF/FAP alt | Notes |
|---|---|---|---|---|
| 04 | Not published / verify 🟧 | — | — | No ILS confirmed; pull current-AIRAC procedure list |
| 22 | Not published / verify 🟧 | — | — | No ILS confirmed; pull current-AIRAC procedure list |

- **STARs (names only):** Not published / verify 🟧
- **LVP:** Not published / verify 🟧
- **Missed approach watch-items:** Terrain is not the driver (flat coastal plain, §3.1) — the operative concern is the **single-runway, no-alternate-runway-at-the-field** situation: a missed approach followed by a second unsuccessful attempt leaves diversion as the only remaining option at this field. Confirm current-AIRAC missed-approach routing.

---

## 11. Departure

- **SIDs (names only — fly the charted version):** Not published / verify 🟧
- **RNP / climb-gradient requirements:** Not confirmed in reachable sources this pass. See [`OM E — PBN and RNP Operations`](../../../../../flight-ops/pbn-and-rnp-operations.md). 🟧
- **Take-off minima:** Published per AIP — exact figures not confirmed this pass. 🟧
- **Start-up / push-back:** Not confirmed — coordinate via Ground per standard practice. 🟧
- **ATC slot / CTOT & clearance:** No IATA slot-coordination level or CTOT/ATFM program confirmed; the operative capacity constraint at VCBI appears to be the field's own reported terminal/space limitation rather than a formal flow-management program (§6/§16). 🟧
- **De-icing:** **NIL** — tropical near-equatorial climate, no icing-condition exposure. 🟩

---

## 12. Noise & Environmental

- **Noise abatement (NAP):** Not confirmed in reachable sources this pass. 🟧
- **Night noise / dB limits:** Not confirmed. 🟧
- **Engine run-up restrictions:** Not confirmed — verify locally. 🟧
- **Reverse thrust / idle-reverse policy:** Not confirmed — verify locally. 🟧

---

## 13. Ground operations

- **Stands for our types:** Five aprons are publicly documented: **Apron Alpha** (9 bays: 5 remote + 4 bridge-equipped; can handle 4× Boeing 747-class + 5× A330-200-class simultaneously), **Apron Bravo** (8 bays: 4 remote + 4 bridge-equipped; 8 wide-body aircraft simultaneously), **Apron Charlie** (8 remote bays; 8 wide-body simultaneously; **the only apron currently capable of handling the Airbus A380**, used by Emirates A380 operations on at least three occasions), **Apron Delta** (4 narrow-body bays), and **Apron Echo** (newest apron, 17 bays, opened 25 November 2021). Stand/pier assignment for a K Global category **L** operation is not confirmed. 🟧 | 🟧
- **Push-back:** Not confirmed — mandatory-vs-self-manoeuvre policy not identified. 🟧
- **Standard taxi routes:** Not confirmed — coordinate with Ground/Ramp on the day. 🟧
- **Hot spots / tight taxiways:** Not confirmed in reachable sources this pass. 🟧
- **Follow-me:** Availability not confirmed. 🟧

---

## 14. Weather & seasonal (durable)

- **Climate / prevailing wind:** Tropical monsoon climate, near-equatorial, warm and humid year-round; runway orientation 04/22 places the field roughly NE–SW aligned.
- **Seasonal hazards:** **SW monsoon (~mid-May–September, heaviest mid-May–mid-June and September)** and the **NE monsoon transition (~October–November, the two wettest months of the year)** bring frequent convective thunderstorm activity, with multiple daily storm cells typical in season; a further **inter-monsoonal convective period (March–April)** brings afternoon thunderstorms. December–February is the relatively drier, more settled period. (General public climate references, not aviation-specific — see §Sources.)
- **Local effects:** Near-coastal location (Indian Ocean immediately west); a sea-breeze influence on afternoon convection is plausible but not independently confirmed for VCBI specifically. No terrain-driven local wind effect (flat coastal plain).

> **Live weather — pull at planning (T-2h):** METAR, TAF, TREND, SIGMET/AIRMET, any tropical-system advisories. Not stored here.

---

## 15. NOTAMs

> **Pull at planning (T-2h).** Perishable — not stored here. Check: runway closures (the single runway makes any closure a full-field event), navaid U/S, lighting, obstacle/crane, RFF downgrade, GPS/RAIM. Source: AIS / OFP NOTAM block.

---

## 16. Fuel & alternate planning notes

- **Typical role for us:** **Destination / alternate field** — VCBI is not a K Global base; it functions as an international destination and alternate within the network. `[VAMSYS mirror 2026-07-26]`
- **Nearest suitable alternates:** Company preferred alternates **VOMM** (Chennai, India, cross-country, approx. 660 km NNW — computed from published coordinates, not AIP-sourced) and **VABB** (Mumbai, India, cross-country, approx. 1,520 km NW — computed from published coordinates, not AIP-sourced) `[VAMSYS mirror 2026-07-26]`. Both are cross-country from Sri Lanka — confirm suitability, runway/RFF adequacy and current minima per leg. 🟧
- **Fuel-uplift notes:** Jet A-1 confirmed at GA-FBO level; airline-scale supplier/hours not confirmed. See [`OM E — Fuel Policy`](../../../../../flight-ops/fuel-policy.md).
- **Range/perf flags for our fleet:** Field length (3,350 m) is non-limiting for a K Global category **L** type. See [`OM B — Fleet Capability Matrix`](../../../../../fleet/capability-matrix.md).
- **Capacity caveat:** VCBI's publicly reported terminal/space constraint (§6) is a genuine planning consideration for any schedule change or added frequency touching this field, distinct from the fuel/range picture.

---

## 17. Fleet-specific notes (optional)

- No field-length or field-elevation performance penalty identified for any K Global type at VCBI. The one structural consideration relevant network-wide (not fleet-specific) is the **single-runway, no-redundancy constraint** (§3.3/§3.4) — relevant to alternate/holding-fuel planning for any type routed through this field. See [`OM B — Fleet Capability Matrix`](../../../../../fleet/capability-matrix.md).

---

## 18. Open items (🟧 — confirm against AIP / current AIRAC)

- **Primary AIP text (AASL/CAASL, AD 2 VCBI)** was located (public PDF and Eurocontrol-hosted eAIP mirror, both cited in Sources) but could not be rendered as readable text in this research pass — all figures below sourced to it via a secondary aggregator or tier-4 corroboration should be re-confirmed against the primary document directly.
- **Field elevation** — three-way discrepancy: OurAirports/SkyVector ~29–30 ft vs Wikipedia infobox 26 ft; 30 ft used per build convention.
- **RFF category, ATS hours, customs/immigration hours** — reported (CAT 9; H24/H24) via a public search-index summary purporting to draw on the AIP; not independently confirmed from primary text.
- **Approach frequency conflict** — 120.9 MHz (OurAirports/SkyVector) vs 132.4 MHz (an older public reference) for Colombo Approach — unresolved, confirm current AIRAC.
- **Approach/SID/STAR names, ILS presence, transition altitude/level, take-off minima, LVP triggers** — none confirmed in reachable sources this pass.
- **TODA/ASDA and PCN** — not published in any reachable source; only TORA (tier-4) and LDA (OurAirports/SkyVector) obtained.
- **Night/curfew regime** — no formal aircraft-movement curfew found; the real constraint identified is a publicly reported terminal/capacity limitation (denied additional winter-2025 frequencies) — nature and scope not fully confirmed.
- **Ground handling agent for scheduled airline operations** — only GA-level FBOs (VVIP, Continuum Aviation, Sri Lanka Exec Aviation Services) identified; no scheduled-carrier handling agent confirmed.
- **Push-back policy, standard taxi routes, hot spots, follow-me availability, noise-abatement procedures** — none confirmed in reachable sources.
- **1974 approach accident (historical)** — retained as a historical safety-record citation (§3.1) but its geographic detail (terrain/mountain reference) does not clearly reconcile with the field's confirmed flat, low-lying coastal setting; treat as an unresolved historical-record discrepancy, not a live terrain finding.
- **Terminal II (Phase II) expansion** — construction repeatedly delayed; resumption reported expected mid-2026, completion projected 2028 — re-check at the next update cycle for any NOTAM-level impact.
- **VATSIM cross-check** — no VATSIM Sri Lanka/South-Asia division airport-specific briefing or SOP document for VCBI was identified in this research pass; treat as not cross-checked.

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim material (current-AIRAC charts) informs content but is not listed here.*

- **AIP Sri Lanka** (Civil Aviation Authority of Sri Lanka / Airport & Aviation Services (Sri Lanka) Ltd), AD 2 VCBI — identified via public search at https://www.airport.lk/aasl/AIS/AMDT%20WEB/AIP%20FROM%2021%20MAR%202024/PDF/VCBI%20AD%202-1%20TO%202-95.pdf and the Eurocontrol-hosted eAIP mirror https://www.aimibsrilanka.lk/eaip/AIP_2501/Eurocontrol/SRI%20LANKA/2025-06-12-NON%20AIRAC/html/eAIP/EN-AD-2.VCBI-en-EN.html (retrieved 2026-07-26). *Primary source of record — identified but not independently rendered as readable text this pass; RFF category and H24 ATS/customs figures reached this build only via a secondary search-index summary of this document's content, not a direct text read — treat as 🟧 pending direct confirmation.*
- OurAirports — https://ourairports.com/airports/VCBI/ and /runways.html and /frequencies.html (retrieved 2026-07-26). *ARP, elevation, runway dimensions/surface, frequencies.*
- SkyVector — https://skyvector.com/airport/VCBI (retrieved 2026-07-26). *Coordinates, runway end elevations, navaid (KAT VOR), frequencies, fuel providers.*
- Wikipedia — "Bandaranaike International Airport" — https://en.wikipedia.org/wiki/Bandaranaike_International_Airport (retrieved 2026-07-26). *History, terminals/aprons, statistics, frequencies (older reference), accident history, expansion-project status.*
- airplanemanager.com — https://airplanemanager.com/airports/vcbi (retrieved 2026-07-26). *GA-level FBO/fuel-provider cross-check.*
- General climate references (climatestotravel.com, agatetravel.com) — retrieved 2026-07-26. *Monsoon season timing; non-aviation-specific, general public climate sources.*
- Companion: [Asia airspace general brief](../../../../airspace/asia.md) — Colombo (VCCF) FIR context within the Bay-of-Bengal/South-Asia procedural-oceanic mosaic.

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-26 | Built from territory AIP; K Global fields from live VAMSYS; 4-page pack. |
