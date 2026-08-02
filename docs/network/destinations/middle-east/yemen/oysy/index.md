# OYSY — Sayun Intl · Airport Briefing

**OYSY / GXF** · Seiyun (Say'un), Hadhramaut Governorate, Yemen · Middle East
**Version** v0.1 · **Updated** 2026-07-26 · **Status** Draft — public-data build, primary AIP unreachable

> **Read-me:** Planning aid for the sim, not a chart. Static data is cross-checked from public aeronautical sources (AIP Yemen/CAMA was not reachable this pass); approaches/SIDs/STARs are listed **by name only or flagged not published** — fly the charted current-AIRAC version if this field is ever used. Live weather/NOTAMs are pulled at planning (§14/§15). Open 🟧 items are listed in §18. Flag legend 🟥 restriction/hazard · 🟧 caution/unverified · 🟩 normal.

---

> 🟥 **STANDING CAUTION — Yemen active-conflict airspace.** Yemen's airspace (Sana'a FIR, **OYSC**) and every Yemeni aerodrome are subject to severe, live security risk, even where — as at OYSY — the field itself lies inland and has not been a direct strike target in the way OYAA/OYSN have. **OYSY carries no VAMSYS destination record and is not a field K Global operates to.** This brief is **standby/reference material only**. Any reference to this field requires current airspace, security-clearance and NOTAM verification before any planning use. EASA CZIB assesses the whole Sana'a FIR **HIGH risk at all altitudes**; the US FAA (SFAR 115) prohibits US operators from the FIR's landmass. See the [Middle East Airspace brief](../../../../airspace/middle-east.md) §9. **Not in VAMSYS** 🟧 — every K Global-network field below reflects that absence.

---

## 1. Snapshot

| Field | Value |
|---|---|
| ARP (lat/long) | 15.9659, 48.7881 `[OurAirports, cross-checked]` |
| Field elevation | 2,097 ft / 639 m AMSL `[OurAirports]` |
| Mag variation | Not published / verify 🟧 |
| Time zone | UTC+3 (no DST) |
| Runway(s) | 🟧 **07/25**, 3,000 × 37 m (9,843 × 120 ft), asphalt, **not lighted** `[OurAirports]` — **discrepancy note:** this brief's task anchor referenced "08/26"; the only cross-checked public source obtained (OurAirports) reports **07/25** — treat the designator as unconfirmed pending AIP Yemen access, see §18 |
| Preferential runway | Not published / verify 🟧 |
| Longest LDA | Not independently confirmed beyond the runway length above 🟧 |
| Approaches | Not published / verify — no current-AIRAC procedure list obtained 🟧 |
| RFF category | Not published / verify 🟧 |
| Control type | Not published / verify 🟧 |
| Elevation class | Moderate elevation (2,097 ft) — not classically hot-and-high, but a real, non-zero factor; see [`OM E — High-Elevation Aerodrome Operations`](../../../../../flight-ops/high-elevation-aerodrome-operations.md) for the threshold framework |
| Special-airport status | 🟥 **Unlit runway** — no night-operations capability confirmed; remote interior field; history as Yemen's sole operating airport during a 2015–2017 blockade period — see §5 |
| Customs / PoE | Tagged as a Port of Entry in public data; hours not published 🟧 |
| K Global category | **Not in VAMSYS** 🟧 — no destination record |
| K Global base | No |
| K Global preferred alternates | **Not in VAMSYS** 🟧 — no record; do not infer a company alternate set for this field |
| Taxi-in / taxi-out (VAMSYS) | **Not in VAMSYS** 🟧 |

---

## 2. Validation summary

| Domain | Flag | Note |
|---|---|---|
| Terrain / CFIT | 🟧 | Interior Hadhramaut plateau/wadi region; no MSA/obstacle chart obtained this pass — moderate elevation (2,097 ft) is a smaller factor than at OYSN but not zero. |
| Runway length vs fleet perf | 🟧 | 3,000 m is workable on paper for most K Global types, but no declared-distance breakdown or PCN is available — do not treat as dispatch-grade. |
| Approach availability / minima | 🟥 | Runway is **not lighted** and no approach data was obtained — night/low-vis operation cannot be assumed feasible at all. |
| Airspace / traffic / control | 🟥 | Sana'a FIR (OYSC) assessed HIGH risk at all altitudes by EASA CZIB, regardless of this field's own relatively lower direct-strike history. |
| Weather / seasonal hazard | 🟧 | Interior Hadhramaut desert/plateau climate; dust/sandstorm potential is generic regional climatology, not independently confirmed for this field. |
| Curfew / slots / hours | 🟥 | Effectively **day-only** given the unlit runway — treat any night-hours assumption as invalid. |
| RFF category vs our types | 🟧 | Not published / verify. |
| Fuel availability | 🟧 | Not published / verify. |
| Customs / handling / security | 🟧 | Field has historically been comparatively more stable than OYAA/OYSN (it was Yemen's sole operating airport 2015–2017), but sits inside the same HIGH-risk FIR — do not read local stability as overriding the national airspace risk picture. |

---

## 3. Threat & Error Management (TEM)

### 3.1 CFIT / Terrain 🟧
OYSY sits at 2,097 ft AMSL in the interior Hadhramaut Governorate (Wadi Hadhramaut region). No MSA/obstacle chart was obtained from a reachable source this pass — treat any terrain-clearance figure as unconfirmed. The elevation itself is moderate and not classically "hot-and-high," but should not be assumed benign without a current chart.

### 3.2 Airborne conflict / traffic 🟥
OYSY lies within the **Sana'a FIR (OYSC)**, assessed by EASA CZIB as **HIGH risk at all altitudes and flight levels** for the FIR as a whole. Unlike OYAA and OYSN, OYSY has **not** been reported as a direct strike target in the public sources reviewed — indeed, it served as **Yemen's sole operating airport until November 2017**, while Sana'a was blockaded and Aden was in political/military turmoil. That relative local stability does **not** exempt it from the FIR-wide risk assessment or from the various state overflight prohibitions/advisories. Cross-ref [Middle East Airspace brief](../../../../airspace/middle-east.md) §9.

### 3.3 Runway excursion 🟧
No declared-distance table, displaced-threshold or PCN data was obtained from a primary source — treat any excursion-relevant figure as unconfirmed pending AIP Yemen access.

### 3.4 Weather threat 🟧
Interior Hadhramaut desert/plateau climate — hot and arid, with generic regional potential for dust/sandstorm activity. No field-specific seasonal statistic was obtained from a reachable source this pass.

### 3.5 Operational considerations 🟥
The runway is reported **not lighted** — this is a hard, structural limit on night operations, not merely a caution. As of September 2022, the field's sole reported user/carrier operated flights to Aden, Cairo and Jeddah — a much thinner service pattern than a normal international field, consistent with the field's role as a limited-capacity, relatively lower-risk interior alternative rather than a fully serviced international gateway.

---

## 4. Cautions & Warnings

- 🟥 **Not in VAMSYS — no company destination record exists for this field.** Any reference to OYSY is for situational awareness only.
- 🟥 **Runway not lighted** — do not assume night-operations capability.
- 🟥 Sana'a FIR (OYSC) is assessed **HIGH risk at all altitudes** by EASA CZIB, notwithstanding this field's comparatively quieter direct history.
- 🟧 **Runway designator discrepancy** — this brief's task anchor said "08/26"; the only cross-checked public source obtained (OurAirports) reports **07/25**. Neither is AIP-confirmed — verify before any use.
- 🟧 Remote interior field with a thin, single-carrier service pattern reported as of 2022 — do not assume full international-gateway infrastructure (fuel, handling, customs capacity).

---

## 5. Aerodrome category, restrictions & crew qualification

- **Special-airport / category:** Not operator-categorised in reachable sources; the standing crew-briefing items are the **unlit runway**, the **remote/limited-infrastructure profile**, and the **FIR-wide conflict-zone status**. 🟥
- **Crew-qualification gate:** Not applicable — this field is not planned for normal commercial operation under the standing caution. 🟥
- **Operating restrictions / bans:** Multiple states restrict or prohibit their operators from the Sana'a FIR landmass (US SFAR 115; German, French, Canadian, UK advisories) — see [Middle East Airspace brief](../../../../airspace/middle-east.md) §9. 🟥
- **Overflight / entry / permits:** Yemen-FIR operations reportedly require **72-hour prior permission**; field-level permit regime not independently confirmed. 🟧
- **Operations notes:** As of September 2022, the field's sole reported user operated flights to Aden, Cairo and Jeddah — current-day service pattern not re-confirmed. 🟧

---

## 6. General / hours / services

| Item | Value | Flag |
|---|---|---|
| ATS hours | Not published / verify — unlit runway implies effectively day-only | 🟧 |
| AD operating hours | Not published / verify | 🟧 |
| Night / curfew restrictions | 🟥 **De facto night restriction — runway not lighted** | 🟥 |
| RFF category | Not published / verify | 🟧 |
| Fuel | Not published / verify | 🟧 |
| PCN | Not published / verify | 🟧 |
| Customs | Tagged Port of Entry in public data; hours not published | 🟧 |
| Handling / FBO | Not published / verify | 🟧 |

---

## 7. Runways & declared distances

| RWY | Dimensions | Surface / PCN | TORA | TODA | ASDA | LDA | Notes |
|---|---|---|---|---|---|---|---|
| 07 | 3,000 × 37 m | Asphalt, **not lighted** / PCN not published 🟧 | Not published 🟧 | Not published 🟧 | Not published 🟧 | Not published 🟧 | 🟧 Designator per OurAirports; task brief-note figure of "08/26" not corroborated this pass |
| 25 | 3,000 × 37 m | Asphalt, **not lighted** / PCN not published 🟧 | Not published 🟧 | Not published 🟧 | Not published 🟧 | Not published 🟧 | Reciprocal — same runway |

*Source: OurAirports (retrieved 2026-07-26). Declared distances, PCN and any displaced threshold are **not available from a primary source this pass** — do not use for dispatch. Runway width (37 m) is narrower than OYAA/OYSN — confirm code-letter suitability for any K Global type before treating as viable. All units metric unless noted.*

---

## 8. Communications

| Service | Callsign | Frequency | Hours | Notes |
|---|---|---|---|---|
| ATIS | Not published | — | — | 🟧 |
| Delivery | Not published | — | — | 🟧 |
| Ground | Not published | — | — | 🟧 |
| Tower | Sayun Tower | 118.4 MHz | Not published 🟧 | `[OurAirports, tier-4 — not AIP-confirmed]` |
| Approach | Not published | — | — | 🟧 |
| Centre / FIR | Sana'a FIR (OYSC) | Per current AIRAC | — | See [Middle East Airspace brief](../../../../airspace/middle-east.md) |

*The single frequency obtained is sourced to OurAirports (tier-4, crowd-sourced) — not independently confirmed against AIP Yemen (CAMA), which was not reachable this pass.*

---

## 9. Navaids

| Aid | Ident | Freq | Hours | Notes |
|---|---|---|---|---|
| — | — | — | — | No navaid data obtained from a reachable source this pass — Not published / verify 🟧 |

---

## 10. Arrival

- **Transition altitude / level:** Not published / verify. 🟧
- **Speed:** Standard ICAO profile assumed, not locally confirmed.
- **Preferential runway logic:** Not published / verify. 🟧
- **Approaches (names only — verify minima on current AIRAC charts):**

| RWY | Approach | IAF | FAF/FAP alt | Notes |
|---|---|---|---|---|
| 07 | Not published / verify 🟧 | — | — | Unlit runway — day-only in practice |
| 25 | Not published / verify 🟧 | — | — | — |

- **STARs (names only):** Not published / verify. 🟧
- **LVP:** 🟥 Not applicable in any meaningful sense — unlit runway precludes low-visibility/night operations regardless of any LVP procedure.
- **Missed approach watch-items:** Not published / verify; no MSA/terrain chart obtained.

---

## 11. Departure

- **SIDs (names only — fly the charted version):** Not published / verify. 🟧
- **RNP / climb-gradient requirements:** Not published / verify. 🟧
- **Take-off minima:** Not published / verify — unlit runway is the binding practical constraint (day VMC in effect). 🟥
- **Start-up / push-back:** Not published / verify. 🟧
- **ATC slot / CTOT & clearance:** No slot/CTOT regime identified; not relevant under the standing caution against normal commercial planning. 🟧
- **De-icing:** NIL — not a climate consideration.

---

## 12. Noise & Environmental

- **Noise abatement (NAP):** Not published / verify. 🟧
- **Night noise / dB limits:** Not applicable — no night operations (unlit runway).
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

- **Climate / prevailing wind:** Interior Hadhramaut desert/plateau climate — hot, arid, larger diurnal temperature swing than the coast.
- **Seasonal hazards:** Generic regional potential for dust/sandstorm activity; no field-specific statistic obtained from a reachable source this pass.
- **Local effects:** Wadi/plateau terrain may produce local wind effects; not independently confirmed.

> **Live weather — pull at planning (T-2h):** METAR, TAF, TREND, SIGMET/AIRMET. Not stored here.

---

## 15. NOTAMs

> **Pull at planning (T-2h).** Perishable — not stored here. Given the standing caution, this must include: current Sana'a FIR conflict-zone bulletins (ICAO Conflict Zone Information Repository, EASA CZIB, OPSGROUP/safeairspace.net), runway/taxiway closures, navaid/lighting U/S, and any NOTAM reflecting security conditions in Hadhramaut Governorate. Source: official AIS / OFP NOTAM block.

---

## 16. Fuel & alternate planning notes

- **Typical role for us:** **Not in VAMSYS — no scheduled or standby role.** Reference/situational-awareness only.
- **Nearest suitable alternates:** Not in VAMSYS — no company alternate record; do not infer one.
- **Fuel-uplift notes:** Not published / verify. See [`OM E — Fuel Policy`](../../../../../flight-ops/fuel-policy.md). 🟧
- **Range/perf flags for our fleet:** No field-specific performance constraint identified beyond the unconfirmed declared-distance picture and the narrower (37 m) runway width; see [`OM B — Fleet Capability Matrix`](../../../../../fleet/capability-matrix.md) for type-by-type reference. 🟧

---

## 17. Fleet-specific notes (optional)

- The narrower reported runway width (37 m, versus 45 m at OYAA/OYSN) would be the first thing to check against any K Global type's wingspan/code-letter requirement if this field were ever a live candidate. Not otherwise developed given the field carries no VAMSYS record.

---

## 18. Open items (🟧 — confirm against AIP / current AIRAC)

- **Primary source access.** AIP Yemen (CAMA) was not reachable this pass; all static data here is cross-checked public-domain (OurAirports, Wikipedia) and carries 🟧 pending primary-source confirmation.
- **Runway designator discrepancy** — this brief's task anchor referenced "08/26"; OurAirports (the only cross-checked public source obtained) reports **07/25**. Resolve against AIP Yemen before this figure is treated as final.
- **Declared distances, PCN, navaids, approaches, SIDs/STARs, MSA/terrain chart, ATS/AD hours, RFF category, lighting status confirmation** — none/limited obtained from a primary source.
- **ATC frequency** — sourced to OurAirports (tier-4), single frequency only.
- **Fuel/handling availability** — not published.
- **VAMSYS status** — confirmed absent (no record) as of this build; re-confirm if network status changes.

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim material (current-AIRAC charts) informs content but is not listed here.*

- OurAirports — https://ourairports.com/airports/OYSY/ , /runways.html , /frequencies.html (retrieved 2026-07-26). *ARP/elevation/runway/frequency cross-check — tier-4, not AIP-grade.*
- Wikipedia — "Seiyun Airport" — https://en.wikipedia.org/wiki/Seiyun_Airport (retrieved 2026-07-26). *Role as Yemen's sole operating airport 2015–2017; current (2022) service pattern.*
- Safe Airspace (OPSGROUP) — "Yemen" — https://safeairspace.net/yemen/ (retrieved 2026-07-26). *Live conflict-zone/CZIB risk picture for the Sana'a FIR (OYSC), which covers the whole of Yemeni airspace including this field.*
- EASA CZIB 2017-07R19 (Yemen) — https://www.easa.europa.eu/en/domains/air-operations/czibs/czib-2017-07r19 (issued 2017-08-31, valid to 2026-10-31; retrieved via safeairspace.net 2026-07-26). *HIGH-risk-at-all-levels assessment.*

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-26 | Built from public aeronautical data (AIP/status verification pending); K Global fields from live VAMSYS; 4-page pack. |
