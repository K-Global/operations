# LCLK — Larnaca International · Airport Briefing

**LCLK / LCA** · Larnaca, Cyprus · Europe
**Version** v0.1 · **Updated** 2026-07-26 · **Status** Draft

> **Read-me:** Planning aid for the sim, not a chart. Static data is drawn from the DCA Cyprus AIP where reachable, cross-checked against public tier-4 sources; approaches/SIDs/STARs are listed **by name only or flagged not-yet-confirmed** — fly the charted current-AIRAC version. Live weather/NOTAMs are pulled at planning (§14/§15). Open 🟧 items are listed in §18. Flag legend 🟥 restriction/hazard · 🟧 caution/unverified · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| ARP (lat/long) | N34°52′30″ / E033°37′30″ (34.875099, 33.624901) `[OurAirports]` 🟧 not cross-checked against a primary AIP coordinate |
| Field elevation | **8 ft / 2 m AMSL** `[OurAirports]` |
| Mag variation | 🟧 **Not published / verify** — no primary or corroborated figure available |
| Time zone | UTC+2 (EET) / UTC+3 (EEST, EU DST observed) |
| Runway(s) | **04/22**, 2,994 × 45 m (9,823 × 148 ft), asphalt, lighted; **threshold of RWY 22 displaced 175 m (575 ft)** `[OurAirports]` |
| Preferential runway | 🟧 **Not published / verify** — single-runway field; assignment is wind-driven (04 vs 22) but the selection criteria are not published |
| Longest LDA | RWY 04 ≈ 2,994 m (no displacement published); RWY 22 ≈ 2,819 m accounting for the 175 m displaced threshold 🟧 not independently confirmed against a primary declared-distance table |
| Approaches | 🟧 **Not published / verify** — commonly associated with an ILS on RWY 22 in general aviation references, but no ident/frequency/category confirmed from a primary source |
| RFF category | 🟧 **Not published / verify** |
| Control type | Radar approach control indicated by a published Approach frequency (§8); full radar-vs-procedural coverage not independently confirmed 🟧 |
| Elevation class | Sea-level (8 ft) — **not** hot-and-high; the one performance watch-item is **summer density altitude/heat** against the single ~2,994 m runway for heavier types (§3.4/§3.5) |
| Special-airport status | None identified in reachable sources; the standing crew-briefing item is the **single-runway, no-redundancy** field geometry — see §5 |
| Customs / PoE | **Yes** — Larnaca has been Cyprus' main international gateway/Port of Entry since Nicosia International Airport's closure in 1974 `[Wikipedia]`; exact desk hours not confirmed 🟧 |
| K Global category | **M** `[VAMSYS mirror 2026-07-26]` |
| K Global base | **No** `[VAMSYS mirror 2026-07-26]` |
| Company preferred alternates | **LGAV** (Athens, Greece), **OLBA** (Beirut, Lebanon), **LLBG** (Tel Aviv, Israel) `[VAMSYS mirror 2026-07-26]` — all three are in different countries from Cyprus |
| Taxi-in / taxi-out (VAMSYS) | **9 min / 11 min** `[VAMSYS mirror 2026-07-26]` |

---

## 2. Validation summary

| Domain | Flag | Note |
|---|---|---|
| Terrain / CFIT | 🟩 | Coastal, low-lying site; the Troodos range lies well inland (~40 NM+ to the west/northwest) and is not a factor on any LCLK arrival/departure/missed-approach path. |
| Runway length vs fleet perf | 🟧 | Single runway, ~2,994 m — ample for K Global's Category M operation in normal conditions; combined with regular high summer OAT (§14), it is a genuine watch-item for any heavier/longer-range type flown into the field. |
| Approach availability / minima | 🟧 | No approach names, idents or minima confirmed from a primary source — pull the current-AIRAC procedure list before use. |
| Airspace / traffic / control | 🟧 | Field sits in the **Nicosia FIR (LCCC)**; **no dedicated FIR brief exists yet in this library** — see §3.2 and §18. |
| Weather / seasonal hazard | 🟧 | Mediterranean coastal climate — hot, dry summers, occasional regional dust intrusions, coastal wind/sea-breeze effects; no LCLK-specific frequency data confirmed. |
| Curfew / slots / hours | 🟧 | No curfew, slot-coordination level, or ATS/AD hours confirmed from a primary source. |
| RFF category vs our types | 🟧 | RFF category not published / verify. |
| Fuel availability | 🟧 | Jet A-1 assumed available as a major international gateway; supplier and hours not confirmed. |
| Customs / handling / security | 🟩 / 🟧 | Port-of-Entry status is well established (main gateway since 1974); exact desk hours and contracted handling agent(s) for our operation are not confirmed. |

---

## 3. Threat & Error Management (TEM)

### 3.1 CFIT / Terrain 🟩
LCLK sits at 8 ft AMSL on Cyprus' low-lying southeastern coastal plain, close to the Larnaka Salt Lake. There is no close-in high terrain relevant to arrival, departure or missed-approach paths — the island's high ground (the Troodos massif, summits above 6,000 ft) lies well to the west/northwest and does not factor into this field's terminal-area threat picture. Verify the MSA ring on the current chart as routine practice; CFIT is not the operative threat here.

### 3.2 Airborne conflict / traffic 🟧
LCLK operates within the **Nicosia FIR (LCCC)**. **No dedicated Nicosia FIR brief exists yet in this library** — for now, cross-reference the general continental reference at [Airspace — Europe](../../../../airspace/europe.md) for broad European airspace-management conventions, noting that document's scope is a different continental sector (Germany/France/Spain/Portugal) and does **not** cover the Eastern Mediterranean or the Nicosia FIR specifically; treat it as background context only, not a substitute for a Nicosia-specific brief. Separately, and neutrally: Cyprus has been politically divided since 1974, a matter of extensive public record (see §11's historical note and Wikipedia's "Cyprus problem" article). Whether or how this division affects FIR-boundary coordination, NOTAM issuance practice, or overflight procedure in the wider Nicosia FIR is **not confirmed from a sourced reference** — no claim is made here about current-day airspace-management specifics; this is flagged in §18 as an open item calling for a dedicated, properly sourced Nicosia FIR brief rather than speculated on in this page.

### 3.3 Runway excursion 🟧
Single runway 04/22, 2,994 × 45 m asphalt. **RWY 22's threshold is displaced 175 m (575 ft)**, reducing the usable landing distance on that direction to roughly 2,819 m — brief the correct LDA for the runway in use; do not assume full-length landing distance on RWY 22. No displaced threshold is published for RWY 04 in reachable sources. No PCN, PCN-driven weight restriction, or contamination/braking-action data was confirmed — flagged for verification.

### 3.4 Weather threat 🟧
LCLK's Mediterranean coastal position drives two recurring seasonal threats. First, **summer heat** — Cyprus summers routinely reach the low-to-mid 30s °C and can exceed 40 °C on the hottest days — raises density altitude and erodes takeoff/landing performance margin on the single ~2,994 m runway, a genuine watch-item for heavier or longer-range types even though the field itself is sea-level. Second, the **close proximity to the Mediterranean Sea** drives local sea-breeze wind cycles typical of coastal fields — expect possible wind-direction shifts through the day and brief for crosswind/gust components given there is only one runway orientation (04/22) with no crosswind-relief alternative. The wider Eastern Mediterranean region is also periodically subject to dust intrusions originating from North Africa/the Middle East, which can reduce visibility; no LCLK-specific frequency or seasonality data for this is confirmed. See §14.

### 3.5 Operational considerations 🟧
Three durable planning points: (1) **single-runway field** — 04/22 is the only runway, so any runway closure (obstruction, disabled aircraft, maintenance) closes the airport outright, with no redundancy; (2) **K Global base status is No** — this is a destination field, not a base, so no local company infrastructure/basing assumptions apply; (3) all three company-preferred alternates (**LGAV, OLBA, LLBG**) are in different countries from Cyprus — standard cross-border alternate planning (fuel, permits, current NOTAM/overflight awareness) applies, and OLBA/LLBG sit within a broader region where conditions can be dynamic; no specific claim beyond that is made here. RFF, navaid, and approach infrastructure are open items — see §18.

---

## 4. Cautions & Warnings

- **Single runway (04/22) — no redundancy.** A runway closure closes the field outright; brief alternates accordingly.
- **RWY 22 threshold displaced 175 m (575 ft)** — do not assume full-length landing distance on that direction.
- **Coastal sea-breeze effects** — expect possible intra-day wind-direction shifts and crosswind/gust components; only one runway orientation is available.
- **Summer heat** can meaningfully erode takeoff/landing performance margin on the ~2,994 m runway for heavier/longer-range types — check performance against current OAT.
- **Regional dust intrusions** (North Africa/Middle East) can reduce visibility with limited notice — check current wx/NOTAM at planning.
- **Nicosia FIR (LCCC) has no dedicated brief in this library yet** — treat §3.2/§18 as an open item, not a resolved tactical picture.

---

## 5. Aerodrome category, restrictions & crew qualification

- **Special-airport / category:** Not operator-categorised as a restricted-crew "special airport" in reachable sources; the standing crew-briefing item is the **single-runway, no-redundancy** field geometry (§3.3/§3.5), not a terrain or approach-complexity issue. 🟧
- **Crew-qualification gate:** None identified in reachable sources. 🟧
- **Operating restrictions / bans:** None identified in reachable sources — curfew, noise-class bans, and any RNP AR/circling restriction are all unconfirmed. 🟧
- **Overflight / entry / permits:** Cyprus is an **EU member state but not a Schengen-area member** — standard EU non-Schengen international arrival procedure applies; no special state overflight permit identified for civil operations. 🟩
- **Operations notes:** Air navigation/ATS provider — **Department of Civil Aviation (DCA), Republic of Cyprus** (state ANSP, primary AIP source of record for this field). Airport operator — **Hermes Airports** (concession consortium, operating Larnaca and Paphos airports since a 2006 award) `[Wikipedia]`. The original 1970s-era terminal is retained as a privately operated VIP/executive terminal (**Skylink Services Ltd**) for heads-of-state, VIP and non-scheduled traffic `[Wikipedia]` — not the terminal used for scheduled commercial service (see Dispatch §2).

---

## 6. General / hours / services

| Item | Value | Flag |
|---|---|---|
| ATS hours | Not published / verify — assumed H24 given the field's role as Cyprus' main international gateway | 🟧 |
| AD operating hours | Not published / verify — assumed H24 | 🟧 |
| Night / curfew restrictions | Not published / verify | 🟧 |
| RFF category | Not published / verify | 🟧 |
| Fuel | Jet A-1 assumed available; supplier and hours not confirmed | 🟧 |
| PCN | Not published / verify | 🟧 |
| Customs | Port of Entry confirmed (main Cypriot gateway since 1974); exact desk hours not confirmed | 🟧 |
| Handling / FBO | Hermes Airports (terminal/airport operator); scheduled-service ground handler(s) for our operation not confirmed. Skylink Services Ltd operates the separate VIP/old terminal only. | 🟧 |

---

## 7. Runways & declared distances

| RWY | Dimensions | Surface / PCN | TORA | TODA | ASDA | LDA | Notes |
|---|---|---|---|---|---|---|---|
| 04 | 2,994 × 45 m (9,823 × 148 ft) | Asphalt, lighted / PCN not published — verify 🟧 | Not published / verify 🟧 | Not published / verify 🟧 | Not published / verify 🟧 | ≈2,994 m (no displacement published) | |
| 22 | 2,994 × 45 m (9,823 × 148 ft) | Asphalt, lighted / PCN not published — verify 🟧 | Not published / verify 🟧 | Not published / verify 🟧 | Not published / verify 🟧 | ≈2,819 m 🟧 (2,994 m less the 175 m/575 ft displaced threshold) | **Threshold displaced 175 m (575 ft)** |

*Source: OurAirports runway record for LCLK (retrieved 2026-07-25) — the only reachable source for runway geometry. A primary DCA Cyprus AIP AD 2 LCLK table (TORA/TODA/ASDA/PCN per direction) is not available from a reachable public source — see §18. All distances in metres unless noted.*

---

## 8. Communications

| Service | Callsign | Frequency | Hours | Notes |
|---|---|---|---|---|
| ATIS | Larnaca ATIS | 126.55 | Not published / verify | 🟧 sourced to a single tier-4 listing, not a primary AIP table |
| Delivery | Not published / verify | — | — | 🟧 |
| Ground | Not published / verify | — | — | 🟧 |
| Tower | Larnaca Tower | 119.4 | Not published / verify (assumed H24) | 🟧 sourced to a single tier-4 listing |
| Approach | Larnaca Approach | 121.2 | Not published / verify (assumed H24) | 🟧 sourced to a single tier-4 listing; presence of a published Approach frequency indicates radar approach service |
| Centre / FIR | Nicosia ACC (LCCC) | Not published / verify | H24 (assumed) | 🟧 No dedicated FIR brief exists in this library yet — see §3.2/§18 |

*Source: OurAirports frequency record for LCLK (retrieved 2026-07-25). These three frequencies (ATIS/TWR/APP) are the only ones available; Delivery, Ground and the full Nicosia ACC sector/frequency structure are not available from a reachable primary source — treat all values here as needing a live-AIP cross-check before use.*

---

## 9. Navaids

| Aid | Ident | Freq | Hours | Notes |
|---|---|---|---|---|
| VOR/DME | LCA (Larnaca) | 112.80 | Not published / verify (assumed H24) | On/near the field per OurAirports; specific runway/approach association not confirmed 🟧 |
| NDB | LCA (Larnaca) | 432 kHz | Not published / verify | ≈4.7 NM SW of the field per OurAirports; role/association with an approach not confirmed 🟧 |
| NDB | DKA (Dhekelia) | 343 kHz | Not published / verify | ≈8.3 NM NE of the field per OurAirports; located within the **Dhekelia UK Sovereign Base Area** — a nearby aid, not an LCLK-dedicated one 🟧 |
| ILS | Not published / verify | — | — | Commonly associated with RWY 22 in general aviation references; ident, frequency and category **not confirmed from a primary source** 🟧 |

*Source: OurAirports closest-navaids record for LCLK (retrieved 2026-07-25) — tier-4 corroboration only; no primary AIP navaid table (idents, full frequency list, ILS category) is available from a reachable source. Treat as unconfirmed pending a live-AIP cross-check.*

---

## 10. Arrival

- **Transition altitude / level:** Not published / verify. 🟧
- **Speed:** Standard 250 KIAS below FL100 (ICAO/EU norm) assumed — confirm no local override on current chart.
- **Preferential runway logic:** Single-runway field; assignment between 04 and 22 is wind-driven, but the exact selection criteria are not published. 🟧
- **Approaches (names only — verify minima on current AIRAC charts):**

| RWY | Approach | IAF | FAF/FAP alt | Notes |
|---|---|---|---|---|
| 22 | Not published / verify — commonly reported as an ILS in general references | Not published / verify | Not published / verify | 🟧 no primary confirmation |
| 04 | Not published / verify | Not published / verify | Not published / verify | 🟧 not confirmed |

- **STARs (names only):** Not published / verify. 🟧
- **LVP:** Not published / verify — low-visibility events are not expected to be a defining hazard at this coastal Mediterranean field, but no trigger conditions or LVP procedure are confirmed. 🟧
- **Missed approach watch-items:** Terrain is not the driver (flat coastal site, §3.1); traffic/airspace missed-approach considerations are not sourced.

---

## 11. Departure

- **SIDs (names only — fly the charted version):** Not published / verify. 🟧
- **RNP / climb-gradient requirements:** Not published / verify. See [`OM E — PBN and RNP Operations`](../../../../../flight-ops/pbn-and-rnp-operations.md) for the network-wide PBN policy context.
- **Take-off minima:** Not published / verify. 🟧
- **Start-up / push-back:** Not published / verify. 🟧
- **ATC slot / CTOT & clearance:** Slot-coordination level not confirmed; no basis found to assume a heavily slot-constrained regime, but this is not independently sourced. 🟧
- **De-icing:** Not normally expected at this Mediterranean coastal field (§14); treated as **NIL for planning purposes**, though this is a climate-based inference rather than a sourced AIP statement — not independently confirmed. 🟧

---

## 12. Noise & Environmental

- **Noise abatement (NAP):** Not published / verify. 🟧
- **Night noise / dB limits:** Not published / verify. 🟧
- **Engine run-up restrictions:** Not published / verify. 🟧
- **Reverse thrust / idle-reverse policy:** Not published / verify. 🟧

---

## 13. Ground operations

- **Stands for our types:** The current single passenger terminal (opened 7 November 2009) has 16 jetways and 48 departure gates `[Wikipedia]`; specific stand/gate assignment or Code-letter suitability for K Global's Category M operation is not confirmed. 🟧
- **Push-back:** Not published / verify. 🟧
- **Standard taxi routes:** Not published / verify — single-runway field layout is comparatively simple, but no routing detail is sourced. 🟧
- **Hot spots / tight taxiways:** Not published / verify. 🟧
- **Follow-me:** Not published / verify. 🟧

---

## 14. Weather & seasonal (durable)

- **Climate / prevailing wind:** Mediterranean climate — hot, dry summers and milder, wetter winters. LCLK's location on Cyprus' southeastern coast, close to the sea, drives local sea-breeze effects; a specific prevailing-wind rose is not confirmed from a primary source. 🟧
- **Seasonal hazards:** **Summer heat** (routinely low-to-mid 30s °C, occasionally exceeding 40 °C) raises density altitude and reduces performance margin on the single ~2,994 m runway for heavier/longer-range types. **Regional dust intrusions** from North Africa/the Middle East periodically reduce visibility across the Eastern Mediterranean — frequency/seasonality specific to LCLK not confirmed. Winter brings the region's wetter season with occasional strong wind and squally frontal passages; snow/ice is not expected to be operationally significant at this sea-level coastal field.
- **Local effects:** Coastal sea-breeze cycles are the standout local effect, typical of Mediterranean coastal fields; no terrain-driven local wind effect (the field itself is flat).

> **Live weather — pull at planning (T-2h):** METAR, TAF, TREND, SIGMET/AIRMET. Not stored here.

---

## 15. NOTAMs

> **Pull at planning (T-2h).** Perishable — not stored here. Check: runway/taxiway closures (single-runway field — a closure is airport-closing), navaid U/S, lighting, obstacle/crane, RFF downgrade, GPS/RAIM, and any conflict-zone/overflight bulletins relevant to the wider Eastern Mediterranean/Nicosia FIR region. Source: official AIS / OFP NOTAM block.

---

## 16. Fuel & alternate planning notes

- **Typical role for us:** **Destination** — leisure/tourism spoke off the K Global network; not a base (K Global base = No, §1).
- **Nearest suitable alternates:** Company preferred alternates **LGAV** (Athens, Greece), **OLBA** (Beirut, Lebanon), **LLBG** (Tel Aviv, Israel) `[VAMSYS mirror 2026-07-26]` — all cross-border from Cyprus; confirm suitability, runway/RFF adequacy and current minima per leg.
- **Fuel-uplift notes:** Jet A-1 assumed available as a major international gateway; specific into-plane provider/hours not confirmed. 🟧 See [`OM E — Fuel Policy`](../../../../../flight-ops/fuel-policy.md).
- **Range/perf flags for our fleet:** The single ~2,994 m runway combined with regular summer heat (§14) is the one performance watch-item for larger/heavier types; not limiting for a typical Category M operation in normal conditions. See [`OM B — Fleet Capability Matrix`](../../../../../fleet/capability-matrix.md) for type-by-type reference.

---

## 17. Fleet-specific notes (optional)

- No single OM B type carries a documented field-specific restriction at LCLK. The general watch-item is runway length (~2,994 m) against summer density altitude for any heavier/longer-range type occasionally rotated through this destination — see [`OM B — Fleet Capability Matrix`](../../../../../fleet/capability-matrix.md).

---

## 18. Open items (🟧 — confirm against AIP / current AIRAC)

- **Primary DCA Cyprus AIP (AD 2 LCLK) is not available from a reachable public source** — the Cyprus civil-aviation/eAIP web presence is not currently accessible; all figures in this pack are sourced to tier-4 public data (OurAirports, Wikipedia) pending a successful primary-source pull.
- **Magnetic variation** — no figure obtained.
- **Declared distances (TORA/TODA/ASDA) and PCN**, both runway directions — only overall runway length/surface/displaced-threshold data obtained (OurAirports); full declared-distance table not confirmed.
- **RFF category** — not obtained.
- **ATS/AD operating hours, curfew/night restrictions, slot-coordination level** — none confirmed.
- **Full communications suite** (Delivery, Ground, precise Approach/Tower sector structure, Nicosia ACC frequencies) — only ATIS/Tower/Approach single frequencies obtained from a tier-4 listing.
- **ILS ident/frequency/category and full navaid table** — VOR-DME LCA, NDB LCA and NDB DKA obtained from OurAirports; no ILS or other approach-aid data confirmed from a primary source.
- **Approaches, SIDs, STARs, take-off minima, transition altitude/level** — none confirmed; pull the current-AIRAC procedure set before use.
- **Noise abatement procedures, engine run-up/reverse-thrust policy** — none confirmed.
- **Ground operations detail** (stand/gate assignment, push-back policy, hot spots, follow-me) — only overall terminal gate/jetway counts obtained (Wikipedia); no LCLK-specific ground-operations detail confirmed.
- **Fuel supplier and uplift hours** — assumed available, not individually confirmed.
- **Customs/immigration desk hours** — Port-of-Entry status confirmed; exact hours not confirmed.
- **Nicosia FIR (LCCC) brief does not exist in this library** — a dedicated, properly sourced FIR brief (control structure, sectorisation, any airspace-management/political-sensitivity considerations relevant to overflight planning in the region) is needed; this pack deliberately does not speculate on that subject beyond the neutral historical note in §3.2/§11.
- **De-icing provision** — treated as NIL based on climate inference only, not a sourced AIP statement.
- **VATSIM cross-check** — no VATSIM Cyprus vACC/division airport briefing or SOP is available to validate operational content against; flagged for follow-up.

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim material (current-AIRAC charts) informs content but is not listed here.*

- **DCA Cyprus (Department of Civil Aviation) / national eAIP** — primary source of record for AD 2 LCLK; **not available from a reachable public source** (the Cyprus civil-aviation web presence is not currently accessible). Flagged throughout §18; a repeat attempt is recommended before this pack is promoted past Draft.
- OurAirports — https://ourairports.com/airports/LCLK/ , /runways.html , /frequencies.html , /closest-navaids.html , /weather.html (all retrieved 2026-07-25). *ARP/elevation/runway/displaced-threshold/frequency/navaid cross-check — tier-4, not a primary AIP source.*
- Wikipedia — "Larnaca International Airport" — https://en.wikipedia.org/wiki/Larnaca_International_Airport (retrieved 2026-07-25). *History, Port-of-Entry role since 1974, Hermes Airports concession, terminal/VIP-terminal detail, passenger/capacity figures.*

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-26 | Built from national AIP; K Global fields from live VAMSYS; 4-page pack. |
