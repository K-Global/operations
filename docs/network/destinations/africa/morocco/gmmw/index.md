# GMMW — El Aroui Intl (Nador) · Airport Briefing

**GMMW / NDR** · El Aroui, Nador Province, Morocco · Africa
**Version** v0.1 · **Updated** 2026-07-26 · **Status** Draft

> **Read-me:** Planning aid for the sim, not a chart. Static data here is corroborated across multiple public tier-4 sources (OurAirports, SkyVector, AirportGuide, AC-U-KWIK); the primary Morocco AIP (ONDA) could not be retrieved in this research pass — treat every figure below as provisional pending an AIP/current-AIRAC cross-check. Approaches/SIDs/STARs are listed **by name/type only** — fly the charted current-AIRAC version. Live weather/NOTAMs are pulled at planning (§14/§15). Open 🟧 items are listed in §18. Flag legend 🟥 restriction/hazard · 🟧 caution/unverified · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| ARP (lat/long) | 34°59′20″N / 003°01′42″W (34.9888, -3.0282) `[OurAirports / AirportGuide]` 🟩 |
| Field elevation | **574 ft / 175 m AMSL** (ARP) — corroborated by OurAirports, Wikipedia, AirportGuide; the RWY 08 threshold (high point) is separately reported at 594 ft `[AirportGuide]` — a measurement-point difference, not a conflict 🟩 |
| Mag variation | 🟧 Sources disagree on **sign**: ~0.7° E (WMM2020 epoch, per AirportGuide) vs 001° W (per Universal Weather) — the true value is near zero and the sign flip is plausible across epochs, but not resolved here; verify against current AIP |
| Time zone | UTC+1 (Morocco Standard Time, observed year-round since 2018) — Morocco reverts to UTC+0 for the Ramadan period; confirm current-year dates at planning 🟧 |
| Runway(s) | **08/26**, 3,000 × 45 m (9,843 × 148 ft), asphalt, lighted (edge lights + REIL both ends) `[OurAirports / SkyVector / AirportGuide / AC-U-KWIK]` 🟩 |
| Preferential runway | No published preferential-runway rule found; single runway, direction (08 vs 26) set by wind only 🟧 |
| Longest LDA | Not published / verify — no declared-distance (TORA/TODA/ASDA/LDA) breakdown found in any reachable source; overall paved length 3,000 m is confirmed 🟧 |
| Approaches | ILS (Wikipedia reports a Cat I-equivalent "ILS Class 1" certification, runway end and ident/frequency not confirmed) + VOR/DME + NDB-based procedures likely; names/minima not confirmed — verify current AIRAC 🟧 |
| RFF category | **CAT 7** per a single tier-4 aggregator (AC-U-KWIK) — not AIP-confirmed 🟧 |
| Control type | Tower service confirmed (118.65); radar vs procedural approach-control service level not confirmed — assume procedural pending AIP confirmation 🟧 |
| Elevation class | Sea-level-adjacent (574 ft) — **not** hot-and-high; density altitude is a non-issue here 🟩 |
| Special-airport status | None identified in reachable public sources; not operator-categorised as restricted 🟧 |
| Customs / PoE | **Yes** — international airport with scheduled EU service (Spain, Belgium, Netherlands, Germany); desk hours not confirmed 🟧 |
| K Global category | **Not set in VAMSYS** `[VAMSYS mirror 2026-07-26]` 🟧 |
| K Global base | **No** `[VAMSYS mirror 2026-07-26]` |
| Company preferred alternates | **LEMG, LXGB, GMTT** `[VAMSYS mirror 2026-07-26]` |
| Taxi-in / taxi-out (VAMSYS) | **Not published in the VAMSYS mirror this pass — verify** `[VAMSYS mirror 2026-07-26]` 🟧 |

---

## 2. Validation summary

| Domain | Flag | Note |
|---|---|---|
| Terrain / CFIT | 🟧 | Rif mountain terrain rises to the south/southwest of the field; MSA sectors and peak-specific figures not confirmed from a reachable AIP/chart this pass — see §3.1. |
| Runway length vs fleet perf | 🟧 | 3,000 m is ample for narrowbody/regional ops (historic RAM 737 and seasonal 747 service per public traffic data); with no declared-distance/PCN breakdown confirmed, treat the field as unconfirmed-adequate for our largest widebody types until AIP-verified. |
| Approach availability / minima | 🟧 | ILS presence reported (Wikipedia) but ident/runway/minima not confirmed; VOR/DME and NDB exist on/near field. |
| Airspace / traffic / control | 🟧 | Casablanca FIR (GMMM); Tower confirmed, approach/radar service level not confirmed. Traffic is low-to-medium with a pronounced summer diaspora peak. |
| Weather / seasonal hazard | 🟧 | Mediterranean-coastal-plain climate; no field-specific fog/wind statistic found. |
| Curfew / slots / hours | 🟧 | H24 hours reported only by a tier-4 aggregator; slot-requirement status conflicts between two tier-4 sources — see §18. |
| RFF category vs our types | 🟧 | CAT 7 reported by one tier-4 aggregator only — not AIP-confirmed. |
| Fuel availability | 🟧 | Jet fuel reported available; supplier/hours not confirmed. |
| Customs / handling / security | 🟧 | International PoE confirmed by traffic pattern; handling agent and desk hours not confirmed for scheduled-airline operations. |

---

## 3. Threat & Error Management (TEM)

### 3.1 CFIT / Terrain 🟧
GMMW/El Aroui sits on the coastal plain of the Nador/Bou-Areg basin near the Mediterranean coast. Terrain rises to significant elevation in the **Rif mountain range to the south and southwest** of the field, while the sector to the north/northeast lies over the Mediterranean Sea and is generally clear of high ground. Precise MSA sector radii and named peak elevations/bearings were not available from a reachable AIP or chart in this research pass. Fly the published arrival/approach/missed-approach tracks exactly and respect the MSA ring on the current chart — do not improvise a terrain-avoidance turn toward the south/southwest sector. Verify against the current AIP/AIRAC before treating this as audit-grade.

### 3.2 Airborne conflict / traffic 🟧
Casablanca FIR (GMMM) provides area control for all of northern Morocco. GMMW is a single-runway regional international field with low-to-medium scheduled traffic and a pronounced summer peak (nearly a third of annual passengers move in the summer months per public traffic data, driven by the Moroccan-diaspora market to Western Europe). Whether local approach control is radar-vectored or procedural has not been confirmed from a reachable source — treat as procedural (position-report driven) until confirmed. Cross-ref [Africa — General Airspace](../../../../airspace/africa.md).

### 3.3 Runway excursion 🟧
Single runway 08/26, 3,000 × 45 m asphalt. No displaced-threshold notice and no declared-distance (TORA/TODA/ASDA/LDA) breakdown were found in any reachable source — treat the full 3,000 m as unconfirmed for planning purposes until the AIP figures are verified. The field is coastal, so a crosswind component from onshore/offshore Mediterranean flow is plausible; no tailwind-runway history is documented.

### 3.4 Weather threat 🟧
Mediterranean-influenced coastal-plain climate transitioning toward the more continental/semi-arid conditions typical of Morocco's eastern Oriental region. No field-specific fog, wind-funnelling or turbulence statistic was found for GMMW in this pass. Northern Morocco is well outside the Sahelian harmattan/ITCZ belt and outside the SW Indian Ocean cyclone basin — neither seasonal hazard applies here. Treat local wind/visibility as a standard live-weather planning item (§14).

### 3.5 Operational considerations 🟥
**Single-runway field — no runway redundancy.** Any runway obstruction, disabled aircraft, or maintenance closure on 08/26 closes the airport entirely; this is a hard, structural characteristic of the field (not a transient NOTAM item) and should be briefed as a standing planning consideration, particularly for alternate-selection logic. Field length/RFF/PCN/declared distances are largely unconfirmed from a primary source — treat conservatively for the largest K Global fleet types until AIP-verified.

---

## 4. Cautions & Warnings

- 🟥 **Single-runway field (08/26) — no redundancy.** Any closure (incident, disabled aircraft, maintenance) closes the airport entirely; factor this into alternate planning.
- 🟧 Rif mountain high terrain rises to the south/southwest of the field — fly published procedures exactly; MSA specifics not confirmed this pass.
- 🟧 Declared distances, PCN and RFF category are not confirmed from a primary AIP source — verify before dispatching the largest fleet types.
- 🟧 K Global category is **not set in VAMSYS** — do not assume a default aerodrome category for crew-qualification purposes.
- 🟧 Pronounced summer traffic peak (diaspora travel market) — expect schedule/ramp congestion well above the field's quiet-season baseline in Jul–Aug.

---

## 5. Aerodrome category, restrictions & crew qualification

- **Special-airport / category:** Not categorised as a restricted/special airport in any reachable public source. K Global internal aerodrome category is **not set in VAMSYS** `[VAMSYS mirror 2026-07-26]` 🟧
- **Crew-qualification gate:** None identified in reachable sources; no evidence of a CAT II/III or RNP-AR-specific requirement. 🟧
- **Operating restrictions / bans:** None identified in reachable sources — verify current AIRAC for any RNP AR / circling restriction. 🟧
- **Overflight / entry / permits:** Standard Morocco international arrival; customs/immigration required as an international Port of Entry. No airline-specific state permit found beyond standard Morocco entry requirements. 🟧
- **Operations notes:** Airport operated by **ONDA** (Office National Des Aéroports), the same state operator as the rest of Morocco's civil airports.

---

## 6. General / hours / services

| Item | Value | Flag |
|---|---|---|
| ATS hours | Reported **H24** by a single tier-4 aggregator (AC-U-KWIK) — not AIP-confirmed | 🟧 |
| AD operating hours | Reported **H24** by the same tier-4 source | 🟧 |
| Night / curfew restrictions | None identified in reachable sources | 🟧 |
| RFF category | **CAT 7** (tier-4 aggregator only) | 🟧 |
| Fuel | Jet fuel reported available (tier-4); supplier and hours not confirmed | 🟧 |
| PCN | Not published / verify — paywalled/premium in every reachable aggregator | 🟧 |
| Customs | Yes (international PoE); hours not confirmed | 🟧 |
| Handling / FBO | Not confirmed for scheduled-airline ground handling. A business-aviation supervising agent ("ASE Morocco") is listed by a bizav aggregator for GA/charter ops — not confirmed as K Global's handler | 🟧 |

---

## 7. Runways & declared distances

| RWY | Dimensions | Surface / PCN | TORA | TODA | ASDA | LDA | Notes |
|---|---|---|---|---|---|---|---|
| 08 | 3,000 × 45 m (9,843 × 148 ft) | Asphalt / PCN not published | Not published / verify | Not published / verify | Not published / verify | Not published / verify | Threshold elevation 594 ft; edge lights + REIL |
| 26 | 3,000 × 45 m (9,843 × 148 ft) | Asphalt / PCN not published | Not published / verify | Not published / verify | Not published / verify | Not published / verify | Threshold elevation 570 ft; edge lights + REIL |

*No displaced threshold reported in any reachable source; not independently confirmed as "none exist" against a current AIRAC. All distances in metres/feet as marked; units stated per figure.* 🟧

---

## 8. Communications

| Service | Callsign | Frequency | Hours | Notes |
|---|---|---|---|---|
| ATIS | Nador Information | 125.00 | Not published | Single-source (SkyVector) 🟧 |
| Delivery | Not published / verify | — | — | 🟧 |
| Ground | Nador Traffic | 126.55 | Not published | Corroborated (OurAirports + AirportGuide) 🟩 |
| Tower | Nador Tower | 118.65 | Not published | Corroborated across 3 sources 🟩; a secondary 136.20 listing (SkyVector) has an unconfirmed role — see §18 🟧 |
| Approach | Not published / verify | — | — | 🟧 |
| Centre / FIR | Casablanca (GMMM) | Per current AIRAC | H24 (FIR) | See [Africa — General Airspace](../../../../airspace/africa.md) |

---

## 9. Navaids

| Aid | Ident | Freq | Hours | Notes |
|---|---|---|---|---|
| VOR/DME | ARI | 116.00 | H24 (assumed) | "Nador/Arwi", on-field; corroborated 2 sources 🟩 |
| NDB | ARW | 355 | Not published | "El Aroui" locator, ~0.8 NM from field; single-source (AirportGuide) 🟧 |
| ILS | Not published / verify | — | — | Wikipedia reports an "ILS Class 1" (Cat I-equivalent) certification present; runway end and ident/frequency not confirmed from a directly-retrieved source this pass 🟧 |

---

## 10. Arrival

- **Transition altitude / level:** Not published / verify. 🟧
- **Speed:** Standard 250 KIAS below FL100 assumed (ICAO norm) — not locally confirmed. 🟧
- **Preferential runway logic:** Single runway; direction (08 vs 26) is wind-determined only — no published preferential-runway rule found. 🟧
- **Approaches (names only — verify minima on current AIRAC charts):**

| RWY | Approach | IAF | FAF/FAP alt | Notes |
|---|---|---|---|---|
| 08/26 | ILS (Cat I reported), VOR/DME, NDB-based non-precision — runway assignment and names not confirmed | Not published | Not published | Verify current AIRAC 🟧 |

- **STARs (names only):** Not confirmed in reachable sources — pull the current-AIRAC STAR list at planning. 🟧
- **LVP:** Not published / verify. 🟧
- **Missed approach watch-items:** Terrain rises to the south/southwest (Rif foothills) — any missed approach that would turn toward high ground must follow the published missed-approach track exactly; verify on the current chart. 🟧

---

## 11. Departure

- **SIDs (names only — fly the charted version):** Not confirmed in reachable sources — pull the current-AIRAC SID list at planning. 🟧
- **RNP / climb-gradient requirements:** Not confirmed in reachable sources. 🟧
- **Take-off minima:** Not published / verify. 🟧
- **Start-up / push-back:** Not confirmed; standard tower/ground coordination assumed. 🟧
- **ATC slot / CTOT & clearance:** Slot-requirement status conflicts across tier-4 sources (one reports "slots required: yes," another "N/A") — treat as unconfirmed and verify at planning. 🟧
- **De-icing:** NIL expected given the Mediterranean-coastal North African climate; formal absence not documented from a primary source. 🟧

---

## 12. Noise & Environmental

- **Noise abatement (NAP):** None identified in reachable sources. 🟧
- **Night noise / dB limits:** None identified. 🟧
- **Engine run-up restrictions:** Not confirmed. 🟧
- **Reverse thrust / idle-reverse policy:** Not confirmed. 🟧

---

## 13. Ground operations

- **Stands for our types:** Not confirmed for current configuration. A historical (pre-2021 terminal rebuild) public figure describes total apron space sufficient for 2× B747 or 4× B737 simultaneously — dated, not confirmed current. 🟧
- **Push-back:** Not confirmed. 🟧
- **Standard taxi routes:** Not published; single runway with a presumably simple parallel-taxiway-to-apron layout, not confirmed. 🟧
- **Hot spots / tight taxiways:** None identified in reachable sources. 🟧
- **Follow-me:** Not confirmed. 🟧

---

## 14. Weather & seasonal (durable)

- **Climate / prevailing wind:** Mediterranean-influenced coastal-plain climate transitioning toward semi-arid conditions typical of Morocco's eastern Oriental region; prevailing wind not documented from a primary source this pass. 🟧
- **Seasonal hazards:** No field-specific fog/wind-frequency statistic found. General Mediterranean-coastal caution for low cloud/fog in cooler months and possible wind-funnelling near the Rif foothills is plausible but unconfirmed for this specific field. Not in the Sahelian harmattan belt, the SW Indian Ocean cyclone basin, or the core ITCZ convection zone. 🟧
- **Local effects:** None confirmed from a reachable source.

> **Live weather — pull at planning (T-2h):** METAR, TAF, TREND, SIGMET/AIRMET. Not stored here.

---

## 15. NOTAMs

> **Pull at planning (T-2h).** Perishable — not stored here. Check: runway closure (this field has no runway redundancy — see §3.5), navaid U/S, lighting, obstacle/crane, RFF downgrade, GPS/RAIM, conflict-zone. Source: AIS / OFP NOTAM block.

---

## 16. Fuel & alternate planning notes

- **Typical role for us:** Destination / alternate (not a K Global base) `[VAMSYS mirror 2026-07-26]`.
- **Nearest suitable alternates:** Company preferred alternates **LEMG** (Málaga, Spain, ~124 NM `[SkyVector]`), **LXGB** (Gibraltar, ~133 NM `[SkyVector]`), and [GMTT](../gmtt/index.md) (Tangier Ibn Batouta, ~149 NM `[SkyVector]`) `[VAMSYS mirror 2026-07-26]` — confirm suitability, runway/RFF adequacy and current minima per leg.
- **Fuel-uplift notes:** Jet fuel reported available (tier-4 aggregator); supplier, hours and quality/freeze notes not confirmed — verify at planning. See [Fuel Policy](../../../../../flight-ops/fuel-policy.md). 🟧
- **Range/perf flags for our fleet:** Field length (3,000 m) is non-limiting for narrowbody/medium-widebody types on paper, but with declared distances and PCN unconfirmed, treat the largest K Global types as **unconfirmed-adequate** pending AIP verification. See [Fleet Capability Matrix](../../../../../fleet/capability-matrix.md). 🟧

---

## 17. Fleet-specific notes (optional)

- No fleet-specific consideration is confirmed for GMMW beyond the general caution in §16 — declared distances and PCN are unconfirmed, so any widebody dispatch should independently verify current AIP figures before use. See [Fleet Capability Matrix](../../../../../fleet/capability-matrix.md).

---

## 18. Open items (🟧 — confirm against AIP / current AIRAC)

- **Primary AIP Morocco (ONDA)** — not retrieved in this research pass (eAIP portal/PDF not reachable); all figures below rest on tier-4 corroboration only.
- **Runway identity (08/26)** — strongly corroborated across four independent tier-4 sources (OurAirports, SkyVector, AC-U-KWIK, Universal Weather), all dated 2026. A historical Wikipedia note references a PAPI "on Runway 28," which is inconsistent with the current 08/26 designation — plausibly an outdated/legacy reference (magnetic-drift runway renumbering is a known phenomenon) rather than evidence of a different runway configuration. Verify against the current AIP.
- **Magnetic variation** — conflicting sign across sources (~0.7° E vs 001° W); value is near zero.
- **Declared distances (TORA/TODA/ASDA/LDA) and PCN** — not found in any reachable source.
- **RFF category (CAT 7)** — single tier-4 source only.
- **ILS ident/frequency and runway assignment** — Cat I-equivalent presence reported by Wikipedia; no ident/frequency corroborated from a directly-retrieved source.
- **NDB ARW (355 kHz)** — single-source (AirportGuide), not cross-checked.
- **ATIS (125.00) and secondary Tower listing (136.20)** — each single-source (SkyVector); role of the 136.20 frequency unconfirmed.
- **Approach/radar control service level** — not confirmed; assumed procedural.
- **ATS/AD hours (H24) and slot-requirement status** — tier-4 only; slot status conflicts between two tier-4 sources.
- **Customs desk hours, handling agent (scheduled-airline), stands/apron layout, taxi routes, hot spots, de-icing absence** — none confirmed from a primary source.
- **VATSIM/IVAO Morocco division SOP for GMMW** — not located in reachable public sources this pass; no operational cross-check performed.

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim material may inform content but is not listed here.*

- OurAirports — https://ourairports.com/airports/GMMW/ , /runways.html , /frequencies.html (retrieved 2026-07-26). *ARP, elevation, runway, tower/ground frequencies.*
- SkyVector — https://skyvector.com/airport/GMMW (retrieved 2026-07-26). *Runway detail, ATIS/Tower frequencies, VOR/NDB list, nearby airports/distances.*
- AirportGuide.com — https://airportguide.com/airport/info/NDR (retrieved 2026-07-26). *Elevation, magnetic variation, runway threshold detail, navaid list (VOR-DME ARI, NDB ARW), Tower/Ground frequencies.*
- AC-U-KWIK — https://acukwik.com/Airport-Info/GMMW (retrieved 2026-07-26). *RFF category, PCN tag, customs/slots/handling flags, fuel availability — tier-4 aggregator, several fields paywalled.*
- Universal Weather and Aviation — https://www.universalweather.com/airports/GMMW-NDR-ARWI-AIRPORT-NADOR-ARWI-MOROCCO/ (retrieved 2026-07-26). *Runway heading/length cross-check, magnetic variation (conflicting sign), customs-availability flag — several fields paywalled.*
- Wikipedia — "Nador International Airport" — https://en.wikipedia.org/wiki/Nador_International_Airport (retrieved 2026-07-26). *History, ILS/VOR/NDB certification note, historical apron-capacity figure, scheduled-airline destination list, passenger statistics.*

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-26 | Built from AIP Morocco (ONDA); K Global fields from live VAMSYS; 4-page pack. |
