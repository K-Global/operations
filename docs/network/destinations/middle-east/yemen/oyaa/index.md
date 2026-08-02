# OYAA — Aden Intl · Airport Briefing

**OYAA / ADE** · Aden, Yemen · Middle East
**Version** v0.1 · **Updated** 2026-07-26 · **Status** Draft — public-data build, primary AIP unreachable

> **Read-me:** Planning aid for the sim, not a chart. Static data is cross-checked from public aeronautical sources (AIP Yemen/CAMA was not reachable this pass); approaches/SIDs/STARs are listed **by name only or flagged not published** — fly the charted current-AIRAC version if this field is ever used. Live weather/NOTAMs are pulled at planning (§14/§15). Open 🟧 items are listed in §18. Flag legend 🟥 restriction/hazard · 🟧 caution/unverified · 🟩 normal.

---

> 🟥 **STANDING CAUTION — Yemen active-conflict airspace.** Yemen's airspace (Sana'a FIR, **OYSC**) and every Yemeni aerodrome are subject to severe, live security risk: closures, restricted/blockaded access, and control that changes at short notice. **OYAA is effectively not normally accessible for commercial operations under this standing risk picture — treat this brief as standby/reference material only, not as an assertion that routine commercial access exists.** Any operation would require current airspace, security-clearance and NOTAM verification immediately before dispatch. EASA CZIB assesses the Sana'a FIR **HIGH risk at all altitudes**; the US FAA (SFAR 115) prohibits US operators from the FIR's landmass; multiple states advise avoidance. See the [Middle East Airspace brief](../../../../airspace/middle-east.md) §9 for the live conflict-zone picture. **K Global VAMSYS listing:** OYAA carries a VAMSYS destination record (Cat R) — see §1 — but that record does **not** override this standing caution.

---

## 1. Snapshot

| Field | Value |
|---|---|
| ARP (lat/long) | 12.8296, 45.0300 `[OurAirports, cross-checked]` |
| Field elevation | 7 ft / 2 m AMSL `[OurAirports]` |
| Mag variation | Not published / verify 🟧 |
| Time zone | UTC+3 (no DST) |
| Runway(s) | **08/26**, 3,100 × 45 m (10,171 × 148 ft), asphalt, lighted `[OurAirports]` |
| Preferential runway | Not published / verify 🟧 |
| Longest LDA | Not independently confirmed beyond the runway length above 🟧 |
| Approaches | Not published / verify — no current-AIRAC procedure list obtained 🟧 |
| RFF category | Not published / verify 🟧 |
| Control type | Not published / verify (assume procedural given regional traffic levels) 🟧 |
| Elevation class | Sea-level (7 ft) — not hot-and-high |
| Special-airport status | 🟥 **Active-conflict field — joint civil/military use** (co-located Yemeni Air Force base, 128 Squadron Detachment); recent (Jan 2026) change of territorial control — see §5 |
| Customs / PoE | Tagged as a Port of Entry in public data; hours not published 🟧 |
| K Global category | **R** `[VAMSYS mirror 2026-07-26]` 🟧 — see standing caution above |
| K Global base | No |
| K Global preferred alternates | **OMDB, OBBI, HDAM** `[VAMSYS mirror 2026-07-26]` — cross-country, confirm current suitability against the live conflict picture before use |
| Taxi-in / taxi-out (VAMSYS) | **6 min / 8 min** `[VAMSYS mirror 2026-07-26]` |

---

## 2. Validation summary

| Domain | Flag | Note |
|---|---|---|
| Terrain / CFIT | 🟩 | Coastal, sea-level field; no close-in high terrain reported. |
| Runway length vs fleet perf | 🟧 | 3,100 m is workable for most K Global types on paper, but no declared-distance (TORA/TODA/ASDA/LDA) breakdown or PCN is available from a primary source — do not treat the OurAirports runway length as a dispatch-grade figure. |
| Approach availability / minima | 🟧 | No current-AIRAC procedure list obtained; assume navaid/approach infrastructure currency is unconfirmed given the conflict period. |
| Airspace / traffic / control | 🟥 | Sana'a FIR (OYSC) assessed HIGH risk at all altitudes by EASA CZIB; the field itself has been a battleground and terror-attack target — see §5. |
| Weather / seasonal hazard | 🟧 | Coastal Gulf of Aden climate; a 2023 severe thunderstorm caused structural damage at the terminal (§3.4) — treat convective weather as a real, demonstrated risk here. |
| Curfew / slots / hours | 🟧 | Not published / verify. |
| RFF category vs our types | 🟧 | Not published / verify. |
| Fuel availability | 🟧 | Historical public reporting notes fuel shortages during the civil war affecting even humanitarian flights; current-day availability not confirmed. |
| Customs / handling / security | 🟥 | Security is the dominant consideration at this field, not customs process — see §5 and the standing caution above. |

---

## 3. Threat & Error Management (TEM)

### 3.1 CFIT / Terrain 🟩
OYAA sits at 7 ft AMSL on the Gulf of Aden coast. No close-in high terrain is reported in public sources. Terrain is not the operative threat at this field — security and airspace status are (§3.2, §3.5).

### 3.2 Airborne conflict / traffic 🟥
OYAA lies within the **Sana'a FIR (OYSC)**, assessed by EASA CZIB as **HIGH risk at all altitudes and flight levels** due to Houthi ballistic-missile/UAS activity, the risk of misidentification and unintended engagement of civil aircraft, and active high-intensity military operations region-wide. Multiple states (US, Germany, France, Canada, UK) restrict or prohibit their operators from the FIR's landmass; several permit only offshore/oceanic tracks (e.g. UT702, M999) at altitude. Cross-ref [Middle East Airspace brief](../../../../airspace/middle-east.md) §9.

### 3.3 Runway excursion 🟧
No declared-distance table, displaced-threshold or PCN data was obtained from a primary source — treat any excursion-relevant figure (contamination, stopway, strength) as unconfirmed pending AIP Yemen access.

### 3.4 Weather threat 🟧
Coastal Gulf of Aden climate — hot, arid, with a documented capacity for severe convective weather: a **25 July 2023 thunderstorm blew through the terminal's glass facade**, wounding 11 passengers, damaging two aircraft and forcing flight cancellations. Treat convective/wind events as a real, demonstrated hazard at this field rather than a generic regional assumption.

### 3.5 Operational considerations 🟥
This is a **joint civil/military aerodrome** — the Yemeni Air Force operates a helicopter detachment (128 Squadron Detachment: Ka-27/28, Mi-8, Mi-14, Mi-17, Mi-24, Mi-171Sh) from the field, alongside any civil traffic. The field has been the site of direct combat (the 2015 Battle of Aden Airport) and a deliberate bombing/gunfire attack on the ground (30 December 2020, killing 25 and wounding 110 as a new government delegation's aircraft landed). Control of the surrounding city changed hands as recently as **7 January 2026**, when Yemeni government forces secured full control after capturing it from the separatist Southern Transitional Council. None of this is background history only — it defines the standing risk picture (§ caution banner, top of page).

---

## 4. Cautions & Warnings

- 🟥 Sana'a FIR (OYSC) is assessed **HIGH risk at all altitudes** by EASA CZIB — this field sits inside it.
- 🟥 Joint civil/military field — Yemeni Air Force helicopter unit co-located; expect military traffic and activity.
- 🟥 The airport has been the direct site of armed conflict and a targeted terror attack on arriving passengers/officials (30 Dec 2020) — ground security is not a peacetime assumption here.
- 🟧 Convective weather has caused real structural/aircraft damage (Jul 2023 storm) — do not assume a benign coastal-desert weather profile.
- 🟧 Historical fuel-shortage reporting during the civil war — never assume uplift availability without current confirmation.
- 🟧 Territorial control changed as recently as January 2026 — the security/administrative picture is unstable; re-verify before any reference to this brief is acted on.

---

## 5. Aerodrome category, restrictions & crew qualification

- **Special-airport / category:** Not operator-categorised in reachable sources; the standing crew-briefing items are the **active-conflict/security status** and the **joint civil/military field** designation. 🟥
- **Crew-qualification gate:** Not applicable under the standing caution — this field is not planned for normal commercial operation. 🟥
- **Operating restrictions / bans:** Multiple states' operators are restricted or prohibited from the Sana'a FIR landmass (US SFAR 115; German AIC; similar French/Canadian/UK advisories) — see [Middle East Airspace brief](../../../../airspace/middle-east.md) §9. 🟥
- **Overflight / entry / permits:** Yemen-FIR operations reportedly require **72-hour prior permission**; state permit/PPR regime not independently confirmed at field level. 🟧
- **Operations notes:** Field also functions as a Yemeni Air Force base (128 Squadron Detachment). Civil operator/handling identity not confirmed in reachable sources. 🟧

---

## 6. General / hours / services

| Item | Value | Flag |
|---|---|---|
| ATS hours | Not published / verify | 🟧 |
| AD operating hours | Not published / verify | 🟧 |
| Night / curfew restrictions | Not published / verify | 🟧 |
| RFF category | Not published / verify | 🟧 |
| Fuel | Historical reporting notes wartime shortages; current availability not confirmed | 🟧 |
| PCN | Not published / verify | 🟧 |
| Customs | Tagged Port of Entry in public data; hours not published | 🟧 |
| Handling / FBO | Not published / verify | 🟧 |

---

## 7. Runways & declared distances

| RWY | Dimensions | Surface / PCN | TORA | TODA | ASDA | LDA | Notes |
|---|---|---|---|---|---|---|---|
| 08 | 3,100 × 45 m | Asphalt, lighted / PCN not published 🟧 | Not published 🟧 | Not published 🟧 | Not published 🟧 | Not published 🟧 | A 2001 reconstruction/expansion is publicly reported to have added a runway capable of handling large, long-haul aircraft — figure not independently corroborated |
| 26 | 3,100 × 45 m | Asphalt, lighted / PCN not published 🟧 | Not published 🟧 | Not published 🟧 | Not published 🟧 | Not published 🟧 | Reciprocal — same runway |

*Source: OurAirports (retrieved 2026-07-26). Declared distances, PCN and any displaced threshold are **not available from a primary source this pass** — do not use for dispatch. All units metric unless noted.*

---

## 8. Communications

| Service | Callsign | Frequency | Hours | Notes |
|---|---|---|---|---|
| ATIS | Aden ATIS | 122.6 MHz | Not published 🟧 | `[OurAirports, tier-4 — not AIP-confirmed]` |
| Delivery | Not published | — | — | 🟧 |
| Ground | Aden Ground | 121.9 MHz | Not published 🟧 | `[OurAirports, tier-4]` |
| Tower | Aden Tower | 118.7 MHz | Not published 🟧 | `[OurAirports, tier-4]` |
| Approach | Aden Approach | 119.7 MHz | Not published 🟧 | `[OurAirports, tier-4]` |
| Centre / FIR | Sana'a FIR (OYSC) | Per current AIRAC | — | See [Middle East Airspace brief](../../../../airspace/middle-east.md) |

*All frequencies sourced to OurAirports (tier-4, crowd-sourced) — none independently confirmed against AIP Yemen (CAMA), which was not reachable this pass. Treat as unverified. Two additional listed frequencies (565.8, 891.8) are uncorroborated as to service/band and are not reproduced as operational data.*

---

## 9. Navaids

| Aid | Ident | Freq | Hours | Notes |
|---|---|---|---|---|
| — | — | — | — | No navaid data obtained from a reachable source this pass — Not published / verify 🟧 |

---

## 10. Arrival

- **Transition altitude / level:** Not published / verify. 🟧
- **Speed:** Standard ICAO 250 KIAS below FL100 assumed, not locally confirmed.
- **Preferential runway logic:** Not published / verify. 🟧
- **Approaches (names only — verify minima on current AIRAC charts):**

| RWY | Approach | IAF | FAF/FAP alt | Notes |
|---|---|---|---|---|
| 08 | Not published / verify 🟧 | — | — | — |
| 26 | Not published / verify 🟧 | — | — | — |

- **STARs (names only):** Not published / verify. 🟧
- **LVP:** Not published / verify. 🟧
- **Missed approach watch-items:** Terrain is not the driver at this coastal field; the operative missed-approach concern would be the surrounding conflict-zone airspace picture, not a terrain constraint.

---

## 11. Departure

- **SIDs (names only — fly the charted version):** Not published / verify. 🟧
- **RNP / climb-gradient requirements:** Not published / verify. 🟧
- **Take-off minima:** Not published / verify. 🟧
- **Start-up / push-back:** Not published / verify. 🟧
- **ATC slot / CTOT & clearance:** No slot/CTOT regime identified in reachable sources; not relevant under the standing caution against normal commercial planning. 🟧
- **De-icing:** NIL — not a climate consideration at this field.

---

## 12. Noise & Environmental

- **Noise abatement (NAP):** Not published / verify. 🟧
- **Night noise / dB limits:** Not published / verify. 🟧
- **Engine run-up restrictions:** Not published / verify. 🟧
- **Reverse thrust / idle-reverse policy:** Not published / verify. 🟧

---

## 13. Ground operations

- **Stands for our types:** Not published / verify — no apron/stand-count data obtained from a reachable source. 🟧
- **Push-back:** Not published / verify. 🟧
- **Standard taxi routes:** Not published / verify. 🟧
- **Hot spots / tight taxiways:** Not published / verify. 🟧
- **Follow-me:** Not published / verify. 🟧

---

## 14. Weather & seasonal (durable)

- **Climate / prevailing wind:** Hot, arid Gulf of Aden coastal climate.
- **Seasonal hazards:** Region-wide summer heat; demonstrated capacity for severe convective weather (§3.4, 2023 event). No EDDF-style seasonal statistic available — general regional climatology only.
- **Local effects:** Coastal location — sea-breeze effects plausible but not independently confirmed.

> **Live weather — pull at planning (T-2h):** METAR, TAF, TREND, SIGMET/AIRMET. Not stored here.

---

## 15. NOTAMs

> **Pull at planning (T-2h).** Perishable — not stored here. Given the standing caution, this must include: current Sana'a FIR conflict-zone bulletins (ICAO Conflict Zone Information Repository, EASA CZIB, OPSGROUP/safeairspace.net), runway/taxiway closures, navaid U/S, RFF downgrade, and any active NOTAM reflecting military activity on or near the field. Source: official AIS / OFP NOTAM block.

---

## 16. Fuel & alternate planning notes

- **Typical role for us:** Listed in VAMSYS (Cat R) but **not a planned normal-operations field** under the standing conflict-zone caution — reference/standby only.
- **Nearest suitable alternates:** **OMDB, OBBI, HDAM** `[VAMSYS mirror 2026-07-26]` — plain cross-country references; confirm each alternate's own current suitability and status before any planning use.
- **Fuel-uplift notes:** Historical public reporting describes wartime fuel shortages affecting operations at this field, including humanitarian flights; current-day availability is not confirmed. See [`OM E — Fuel Policy`](../../../../../flight-ops/fuel-policy.md). 🟧
- **Range/perf flags for our fleet:** No field-specific performance constraint identified (sea-level, 3,100 m runway); see [`OM B — Fleet Capability Matrix`](../../../../../fleet/capability-matrix.md) for type-by-type reference. The binding constraint here is the security/airspace picture, not aircraft performance. 🟥

---

## 17. Fleet-specific notes (optional)

- No fleet-specific performance consideration identified beyond the general note above. Any future dispatch to OYAA would need a case-by-case security/risk clearance ahead of any type-performance planning.

---

## 18. Open items (🟧 — confirm against AIP / current AIRAC)

- **Primary source access.** AIP Yemen (CAMA) was not reachable this pass; all static data here is cross-checked public-domain (OurAirports, Wikipedia) and carries 🟧 pending primary-source confirmation.
- **Declared distances, PCN, navaids, approaches, SIDs/STARs, ATS/AD hours, RFF category** — none obtained from a primary source.
- **ATC frequencies** — sourced to OurAirports (tier-4, crowd-sourced), not independently confirmed.
- **Fuel availability** — historical shortage reporting only; current status unknown.
- **Security/control status** — the January 2026 change of control and the wider Yemen conflict picture are perishable; re-verify against ICAO CZIB repository, EASA CZIBs and OPSGROUP/safeairspace.net at any planning touchpoint.
- **Mag variation, taxi-route/hot-spot detail, customs desk hours** — not published.

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim material (current-AIRAC charts) informs content but is not listed here.*

- OurAirports — https://ourairports.com/airports/OYAA/ , /runways.html , /frequencies.html (retrieved 2026-07-26). *ARP/elevation/runway/frequency cross-check — tier-4, not AIP-grade.*
- Wikipedia — "Aden International Airport" — https://en.wikipedia.org/wiki/Aden_International_Airport (retrieved 2026-07-26). *History, conflict timeline, 2020 attack, 2023 storm damage, Jan 2026 control change.*
- Safe Airspace (OPSGROUP) — "Yemen" — https://safeairspace.net/yemen/ (retrieved 2026-07-26). *Live conflict-zone/CZIB risk picture for the Sana'a FIR (OYSC).*
- EASA CZIB 2017-07R19 (Yemen) — https://www.easa.europa.eu/en/domains/air-operations/czibs/czib-2017-07r19 (issued 2017-08-31, valid to 2026-10-31; retrieved via safeairspace.net 2026-07-26). *HIGH-risk-at-all-levels assessment.*
- US FAA SFAR 115 — https://www.federalregister.gov/documents/2024/12/30/2024-31188/extension-of-the-prohibition-against-certain-flights-in-specified-areas-of-the-sanaa-flight (retrieved 2026-07-26). *US operator prohibition, Sana'a FIR landmass.*

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-26 | Built from public aeronautical data (AIP/status verification pending); K Global fields from live VAMSYS; 4-page pack. |
