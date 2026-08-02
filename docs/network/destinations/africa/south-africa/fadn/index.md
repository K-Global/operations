# FADN — Durban (former Durban Intl / AFB Durban) · Airport Briefing

**FADN / DUR (historical)** · Isipingo/Prospecton, Durban, KwaZulu-Natal, South Africa · Africa
**Version** v0.1 · **Updated** 2026-07-26 · **Status** Draft

> **Read-me:** Planning aid for the sim, not a chart. 🟧 **This field is built to fill a VAMSYS-routed tree gap, not because it is confirmed suitable for K Global civil operations — see §Reconciliation flag immediately below.** Static data is drawn from public secondary sources (Wikipedia, aviation-reference sites); a live AIP South Africa (ATNS) AD 2 FADN entry could **not** be retrieved in this research pass despite repeated attempts, consistent with this being a decommissioned civil aerodrome. Approaches/SIDs/STARs, if any remain published for the co-located military facility, are **not** confirmed and are not listed. Live weather/NOTAMs are pulled at planning (§14/§15). Open 🟧/🟥 items are listed in §18. Flag legend 🟥 restriction/hazard · 🟧 caution/unverified · 🟩 normal.

---

## 🟧 Reconciliation flag — read before using this brief

**FADN is the ICAO code for the former Durban International Airport, which ceased all civil passenger service on 30 April 2010 and was replaced by King Shaka International Airport (ICAO FALE, IATA DUR), approximately 60 km north at La Mercy — Durban's current and only civil gateway.** FADN is now **co-located with AFB Durban**, a South African Air Force base (home to 15 Squadron SAAF), and functions as a **military installation**, not a scheduled civil aerodrome. Ownership of the former civil airport land was transferred from Airports Company South Africa (ACSA) to Transnet in 2012 for a proposed "dig-out port" conversion, reported as recently as 2017 to be on hold until "at least 2030" — its longer-term civil status remains unresolved.

**VAMSYS currently routes "Durban" traffic via FADN.** This brief is built to satisfy that routing and fill the corresponding gap in the OM C tree, but the operational recommendation is:

- **Treat King Shaka Intl (FALE) as the real, current Durban gateway** for any K Global passenger or scheduled-cargo operation. FALE does not yet have an OM C briefing pack in this tree — building one should be a near-term priority given it is the airport actually serving Durban today.
- **Do not plan a K Global movement into FADN** without independent confirmation that (a) civil/commercial access is actually available at the SAAF facility, (b) any required military PPR/clearance has been obtained, and (c) current runway/navaid/RFF data has been verified directly with the airport authority — none of which is confirmed in this research pass.
- Flag this reconciliation question to network planning for resolution (repoint the VAMSYS Durban routing to FALE, or explicitly confirm a special-arrangement military-field use case is intended).

---

## 1. Snapshot

| Field | Value |
|---|---|
| ARP (lat/long) | 29°58′07″S / 030°56′52″E (-29.96861, 30.94778) `[Wikipedia, public reference]` 🟧 |
| Field elevation | **29 ft / 9 m AMSL** `[Wikipedia]` 🟧 — note: differs slightly from the VAMSYS-mirrored ~33 ft anchor; both are low-lying coastal figures, discrepancy not independently resolved |
| Mag variation | Not confirmed — no live AIP entry retrieved 🟧 |
| Time zone | UTC+2 (SAST, no DST) |
| Runway(s) | Historical (pre-2010 closure): **06/24, approx. 2,439 m / 8,005 ft** `[tier-4, pre-closure reference — not independently AIP-confirmed]` 🟧 — current military-configuration runway data not confirmed |
| Preferential runway | Not confirmed 🟧 |
| Longest LDA | Not confirmed — historical TORA/runway length only (above); no current declared-distance table sourced 🟧 |
| Approaches | Not confirmed — no current procedure data sourced 🟧 |
| RFF category | Not confirmed 🟧 |
| Control type | Not confirmed — likely military-controlled given AFB Durban co-location 🟧 |
| Elevation class | Sea-level (coastal, ~29 ft) — not a hot-and-high field |
| Special-airport status | 🟥 **Military installation (AFB Durban, SAAF 15 Squadron)** — not a scheduled civil aerodrome; civil/commercial access status not confirmed |
| Customs / PoE | Not confirmed — very unlikely to be a functioning civil Port of Entry given the field's decommissioned civil status 🟧 |
| K Global category | **S** `[VAMSYS mirror 2026-07-26]` |
| K Global base | No `[VAMSYS mirror 2026-07-26]` |
| Company preferred alternates | **FAOR** (O.R. Tambo Intl — [briefing](../faor/index.md)), **FACT** (Cape Town Intl — [briefing](../fact/index.md)) `[VAMSYS mirror 2026-07-26]` |
| Taxi-in / taxi-out (VAMSYS) | **6 min / 8 min** `[VAMSYS mirror 2026-07-26]` |

---

## 2. Validation summary

| Domain | Flag | Note |
|---|---|---|
| Terrain / CFIT | 🟧 | Coastal, low-lying site (~29 ft); no historical terrain concern noted, but current obstacle environment (post-2010 industrial/port development in the area) not confirmed. |
| Runway length vs fleet perf | 🟧 | Historical runway (~2,439 m) was explicitly reported as **too short for a fully-laden Boeing 747** — a documented reason for the airport's replacement. Current runway configuration/condition under military control not confirmed. |
| Approach availability / minima | 🟧 | No current procedure data sourced. |
| Airspace / traffic / control | 🟧 | Likely military-controlled given AFB Durban co-location; civil ATC service status not confirmed. |
| Weather / seasonal hazard | 🟧 | KwaZulu-Natal coast shares the SW Indian Ocean tropical-cyclone season (Nov–Apr) with the wider regional network — see [Africa Airspace brief](../../../../airspace/africa.md) §11 — but no field-specific data confirmed. |
| Curfew / slots / hours | 🟥 | **Civil scheduling regime does not exist** — this is a military installation, not a slot-coordinated or curfew-managed civil field. |
| RFF category vs our types | 🟧 | Not confirmed. |
| Fuel availability | 🟧 | Not confirmed — very unlikely to offer routine civil Jet A-1 uplift service. |
| Customs / handling / security | 🟥 | **No confirmed civil customs/handling/PoE function.** Any K Global use would require independent, non-standard arrangement with the military authority. |

---

## 3. Threat & Error Management (TEM)

### 3.1 CFIT / Terrain 🟧
No historical terrain concern was found for this coastal, low-lying site (~29 ft AMSL). Current obstacle environment (industrial/port development in the surrounding Durban South Industrial Basin since the 2010 closure) is not confirmed — treat as unverified pending a direct current-day source.

### 3.2 Airborne conflict / traffic 🟧
As a South African Air Force base (AFB Durban, 15 Squadron), the field's airspace control is presumed military-managed; no civil ATC service structure is confirmed. Durban-area airspace generally falls within the **Johannesburg FIR (FAJA)** per cross-reference with adjacent-field AIP fallback-frequency notes (Durban Approach 125.75 MHz cited as a FAJA-sector fallback in the FAOR AIP) — this is an inference, not FADN's own AD-2 entry, and should be independently confirmed. See [Africa Airspace brief](../../../../airspace/africa.md).

### 3.3 Runway excursion 🟥
🟥 **The single most consequential documented fact about this field's runway is that it was too short for a fully-laden Boeing 747** — the historical ~2,439 m (06/24) runway was explicitly cited as a driver of the airport's replacement by King Shaka Intl. Current runway length, surface condition, and declared distances under military use are **not confirmed** — do not assume the historical civil-era figures remain valid or applicable to a K Global type without direct verification.

### 3.4 Weather threat 🟧
Durban sits on the KwaZulu-Natal coast within the **SW Indian Ocean tropical-cyclone exposure band (Nov–Apr)** shared with the wider Mozambique Channel/Madagascar region — see [Africa Airspace brief](../../../../airspace/africa.md) §11. No field-specific climatology was sourced for FADN in this pass.

### 3.5 Operational considerations 🟥
🟥 **The overriding operational consideration at this field is that it is not a civil aerodrome available for routine K Global use.** Any planning against FADN must first resolve whether the intended destination is actually this decommissioned military field or the current Durban civil gateway, **King Shaka Intl (FALE)**. Absent a confirmed special arrangement with the South African Air Force, treat FADN as **not usable** for K Global operations and prioritise reconciling the VAMSYS routing (§Reconciliation flag above).

---

## 4. Cautions & Warnings

- 🟥 **FADN is a South African Air Force base (AFB Durban), not a scheduled civil aerodrome** — civil/commercial access is not confirmed and should not be assumed.
- 🟥 **Current Durban civil air service operates from King Shaka Intl (FALE)**, ~60 km north at La Mercy — this is very likely the airport intended by any "Durban" route in the network.
- 🟧 **Historical runway (06/24, ~2,439 m) was explicitly too short for a fully-laden B747** — do not assume adequacy for any K Global type without independent current-day verification.
- 🟧 **No live AIP South Africa AD 2 FADN entry was retrievable in this research pass** — treat all operational data in this brief as historical/secondary-sourced and unverified for current military use.
- 🟧 **Site ownership was transferred to Transnet in 2012** for a proposed port-conversion project reported on hold as of 2017 — the field's longer-term status (potential further redevelopment) is unresolved.

---

## 5. Aerodrome category, restrictions & crew qualification

- **Special-airport / category:** 🟥 **Military installation** — not operator-categorised in any civil sense; any K Global use would require a bespoke arrangement, not standard civil dispatch.
- **Crew-qualification gate:** Not applicable pending confirmation of any civil-use arrangement.
- **Operating restrictions / bans:** 🟥 Presumed **PPR/military clearance required** for any non-military movement — not confirmed, but the standard expectation for an active air force base.
- **Overflight / entry / permits:** Standard South African entry requirements would apply to any confirmed civil movement; military-access permission is the separate, prerequisite question.
- **Operations notes:** Operator — **South African Air Force** (AFB Durban, 15 Squadron); no civil airport-company operator applies (ACSA divested; site held by Transnet).

---

## 6. General / hours / services

| Item | Value | Flag |
|---|---|---|
| ATS hours | Not confirmed — presumed military-controlled | 🟧 |
| AD operating hours | Not confirmed | 🟧 |
| Night / curfew restrictions | Not applicable in a civil-scheduling sense — no civil regime exists | 🟥 |
| RFF category | Not confirmed | 🟧 |
| Fuel | Not confirmed — no civil Jet A-1 service confirmed | 🟧 |
| PCN | Not confirmed | 🟧 |
| Customs | Not confirmed — no civil PoE function confirmed | 🟥 |
| Handling / FBO | Not confirmed — no civil ground handler confirmed | 🟥 |

---

## 7. Runways & declared distances

| RWY | Dimensions | Surface / PCN | TORA | TODA | ASDA | LDA | Notes |
|---|---|---|---|---|---|---|---|
| 06 | ~2,439 m (historical) | Not confirmed | Not confirmed | Not confirmed | Not confirmed | Not confirmed | Pre-2010-closure reference figure only; explicitly reported too short for a fully-laden B747 🟧 |
| 24 | ~2,439 m (historical) | Not confirmed | Not confirmed | Not confirmed | Not confirmed | Not confirmed | Reciprocal of RWY 06; current military configuration not confirmed 🟧 |

*Source: tier-4 aggregated public references (see Sources & References). No AIP AD 2 declared-distance table was retrievable for FADN in this research pass — treat all figures in this table as historical/unverified.*

---

## 8. Communications

Not confirmed — no live AIP AD 2 FADN communications table was retrievable in this research pass. Any K Global planning against this field must obtain current frequencies directly from the airport/military authority before use. 🟧

---

## 9. Navaids

Not confirmed — no live AIP AD 2 FADN navaid table was retrievable in this research pass. 🟧

---

## 10. Arrival

- **Transition altitude / level:** Not confirmed. 🟧
- **Speed:** Standard 250 KIAS below FL100 (ICAO norm) — not field-specifically confirmed.
- **Preferential runway logic:** Not confirmed.
- **Approaches (names only — verify minima on current AIRAC charts):** Not confirmed — no current procedure data sourced. 🟧
- **STARs (names only):** Not confirmed. 🟧
- **LVP:** Not confirmed. 🟧
- **Missed approach watch-items:** Not confirmed.

---

## 11. Departure

- **SIDs (names only — fly the charted version):** Not confirmed. 🟧
- **RNP / climb-gradient requirements:** Not confirmed.
- **Take-off minima:** Not confirmed. 🟧
- **Start-up / push-back:** Not confirmed — presumed military-coordinated.
- **ATC slot / CTOT & clearance:** Not applicable — no civil scheduling regime.
- **De-icing:** Not applicable at this sea-level, subtropical coastal field.

---

## 12. Noise & Environmental

- **Noise abatement (NAP):** Not confirmed. 🟧
- **Night noise / dB limits:** Not confirmed.
- **Engine run-up restrictions:** Not confirmed.
- **Reverse thrust / idle-reverse policy:** Not confirmed.

---

## 13. Ground operations

- **Stands for our types:** Not confirmed — a military ramp/apron structure should be assumed, not civil widebody stands. 🟧
- **Push-back:** Not confirmed.
- **Standard taxi routes:** Not confirmed.
- **Hot spots / tight taxiways:** Not confirmed.
- **Follow-me:** Not confirmed.

---

## 14. Weather & seasonal (durable)

- **Climate / prevailing wind:** Subtropical coastal KwaZulu-Natal climate; no field-specific wind data confirmed.
- **Seasonal hazards:** **SW Indian Ocean tropical-cyclone season (Nov–Apr)** affects the broader KwaZulu-Natal coast — see [Africa Airspace brief](../../../../airspace/africa.md) §11 for the regional picture.
- **Local effects:** Not confirmed.

> **Live weather — pull at planning (T-2h):** METAR, TAF, TREND, SIGMET/AIRMET, TC advisories. Not stored here — and in any case dependent on confirming whether this field has an active civil weather-reporting service at all.

---

## 15. NOTAMs

> **Pull at planning (T-2h).** Perishable — not stored here. Given the field's decommissioned civil status, confirm whether a civil NOTAM service exists for FADN at all before relying on this section; the practical NOTAM source for actual Durban operations is **King Shaka Intl (FALE)**.

---

## 16. Fuel & alternate planning notes

- **Typical role for us:** 🟥 **Not a confirmed operational role.** This pack exists to fill a VAMSYS-routed tree gap; the recommended actual Durban gateway is **King Shaka Intl (FALE)**, plain reference (no OM C pack built yet — see §18).
- **Nearest suitable alternates:** Company preferred alternates **[FAOR](../faor/index.md)** (O.R. Tambo Intl) and **[FACT](../fact/index.md)** (Cape Town Intl) `[VAMSYS mirror 2026-07-26]` — both a considerable distance from Durban; treat as network-level alternates rather than local ones.
- **Fuel-uplift notes:** Not confirmed — no civil Jet A-1 service confirmed at this field. 🟧
- **Range/perf flags for our fleet:** 🟧 Historical runway length (~2,439 m) was reported inadequate for a fully-laden B747; verify current-day adequacy for any K Global type independently before any planning use. See [`OM B — Fleet Capability Matrix`](../../../../../fleet/capability-matrix.md).

---

## 17. Fleet-specific notes (optional)

- Not applicable pending resolution of the reconciliation question (§Reconciliation flag). No K Global type should be planned against FADN without independent confirmation of current runway/access suitability.

---

## 18. Open items (🟧 — confirm against AIP / current AIRAC)

- 🟥 **Headline item: reconcile the VAMSYS "Durban" routing** — confirm whether K Global's intended Durban gateway is the current civil airport, **King Shaka Intl (FALE)**, or a genuine, separately-authorised military-field use case at FADN. A FALE briefing pack does not yet exist in this tree and should be prioritised if FALE is confirmed as the intended gateway.
- **Live AIP South Africa AD 2 FADN entry** — could not be retrieved in repeated attempts this research pass; if a current entry exists (e.g. for the military facility), it was not accessible via the public eAIP mirror used for this build.
- **Current runway/declared-distance, communications, navaid and RFF data** — all sourced to historical/secondary references only; none independently AIP-confirmed.
- **Civil access status** — PPR/military-clearance requirement, any civil handling/fuel/customs function, and whether any commercial use is possible at all.
- **Field elevation discrepancy** — Wikipedia gives 29 ft/9 m; the VAMSYS mirror anchor is ~33 ft; not independently resolved.
- **Site's longer-term status** — Transnet "dig-out port" conversion reported on hold as of 2017 until "at least 2030"; current 2026 status not re-confirmed.

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim material informs content but is not listed here.*

- Wikipedia — "Durban International Airport" — https://en.wikipedia.org/wiki/Durban_International_Airport (retrieved 2026-07-26). *Closure date, replacement by King Shaka Intl, military co-location (AFB Durban, 15 Squadron), Transnet ownership transfer/port-conversion status, coordinates, elevation.*
- Airportcodes.aero — "FADN Airport Code" / "King Shaka Airport Code" — https://airportcodes.aero/fadn and https://airportcodes.aero/dur/king-shaka-airport-code (retrieved 2026-07-26). *ICAO/IATA code history and reassignment context.*
- Public aggregator search synthesis (historical runway 06/24, ~2,439 m/8,005 ft) — no single authoritative public URL identified; tier-4, unverified against a primary source. 🟧

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-26 | New build (no prior stub existed). Historical/secondary-sourced pack built to fill the VAMSYS-routed tree gap for "Durban"; live AIP South Africa AD 2 FADN entry not retrievable this pass; reconciliation flag raised recommending King Shaka Intl (FALE) as the actual current Durban gateway. |
