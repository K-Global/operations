# GMMX — Menara Intl · Airport Briefing

**GMMX / RAK** · Marrakesh, Morocco · Africa
**Version** v0.1 · **Updated** 2026-07-26 · **Status** Draft

> **Read-me:** Planning aid for the sim, not a chart. Static data is drawn from public tier-4 sources (OurAirports, SkyVector, Wikipedia/ONDA-sourced) — the primary AIP Morocco (ONDA eAIP) was not reachable via public web access this build pass; approaches/SIDs/STARs are listed **by name only** — fly the charted current-AIRAC version. Live weather/NOTAMs are pulled at planning (§14/§15). Open 🟧 items are listed in §18. Flag legend 🟥 restriction/hazard · 🟧 caution/unverified · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| ARP (lat/long) | 31.604807, -8.035788 (N31°36.29″ / W8°02.15″) `OurAirports`; cross-checked N31°36.52′ / W8°02.45′ `SkyVector` |
| Field elevation | **1,545 ft / 471 m MSL** 🟧 — corroborated by three independent public sources (OurAirports, Wikipedia/ONDA fact-sheet citation, SkyVector); primary AIP not reachable this pass to render a tier-1 confirmation. See §18 for the elevation-discrepancy note. |
| Mag variation | Not published / verify 🟧 |
| Time zone | **UTC+1 year-round** (Morocco's permanent civil "GMT+1" clock), reverting to **UTC+0 during the annual Ramadan period** — confirm current-year Ramadan dates before scheduling 🟧 |
| Runway(s) | **10/28**, 3,100 × 45 m (10,171 × 148 ft), asphalt, lighted |
| Preferential runway | Not published / verify 🟧 — single-runway field; selection is wind-driven only |
| Longest LDA | 28: ≈3,100 m (no displacement reported this end); 10: ≈2,820 m (derived — see §7) 🟧 |
| Approaches | ILS reported CAT II-capable, plus VOR/DME and NDB (ONDA/Wikipedia) — runway assignment, ident/freq and sub-category not confirmed from a reachable primary source; verify current AIRAC 🟧 |
| RFF category | Not published / verify 🟧 |
| Control type | Approach/radar control confirmed present (published APP frequencies); procedural-vs-radar classification not independently confirmed 🟧 |
| Elevation class | Sea-level-adjacent (1,545 ft) — **not** hot-and-high; not a performance driver 🟩. See §3.1 for the separate (and more significant) High Atlas terrain consideration. |
| Special-airport status | None identified in reachable sources — Not published / verify 🟧 |
| Customs / PoE | **Yes** — confirmed international gateway (European, Arab-world, and since 2024 North American scheduled service); hours not confirmed 🟧 |
| K Global category | **S** `[VAMSYS mirror 2026-07-26]` |
| K Global base | **No** `[VAMSYS mirror 2026-07-26]` |
| Company preferred alternates | **GMMN, GMTT** `[VAMSYS mirror 2026-07-26]` — see [GMMN Briefing](../gmmn/index.md), [GMTT Briefing](../gmtt/index.md) |
| Taxi-in / taxi-out (VAMSYS) | **6 min / 8 min** `[VAMSYS mirror 2026-07-26]` |

---

## 2. Validation summary

| Domain | Flag | Note |
|---|---|---|
| Terrain / CFIT | 🟥 | High Atlas range (Toubkal, 4,167 m/13,671 ft — North Africa's highest peak) rises ~63 km (34 nm) S/SSE of Marrakesh. Field itself sits on the flat Haouz plain. See §3.1. |
| Runway length vs fleet perf | 🟩 | 3,100 m is ample for K Global Category S operations; non-limiting. |
| Approach availability / minima | 🟧 | ILS (CAT II reported) plus VOR/DME/NDB present; runway assignment and current minima not confirmed from a primary source this pass. |
| Airspace / traffic / control | 🟧 | Radar approach control confirmed via published frequencies; procedural-vs-radar classification and FIR-level detail not independently confirmed. |
| Weather / seasonal hazard | 🟧 | Semi-arid Haouz-plain climate; regional "Chergui" hot/dry wind and summer heat noted generically — not GMMX-specific-sourced this pass. |
| Curfew / slots / hours | 🟧 | No curfew/slot regime identified in reachable sources; ATS/AD hours not confirmed. |
| RFF category vs our types | 🟧 | RFF category not published. |
| Fuel availability | 🟧 | Jet A-1 presumed given scheduled international jet ops; supplier/hours not confirmed. |
| Customs / handling / security | 🟧 | International PoE confirmed; handling agent and exact hours not confirmed. |

---

## 3. Threat & Error Management (TEM)

### 3.1 CFIT / Terrain 🟥
The **High Atlas range** rises immediately south of the Haouz plain on which Marrakesh and GMMX sit. **Jebel Toubkal (4,167 m / 13,671 ft)** — the highest peak in Morocco, the Atlas Mountains, North Africa and the Arab world — lies approximately **63 km (34 nm) south of Marrakesh** (essentially the same order of distance/bearing from the airport, a few kilometres SW of the city centre). The field itself is at only 1,545 ft on a flat plain, so the terrain rise from field elevation to the highest regional peak exceeds 12,000 ft over roughly 34 nm. RWY 10/28 is aligned broadly east–west, keeping standard approach, departure and missed-approach tracks parallel to the terrain front rather than pointed directly at it, but **any south-side vectoring, holding, diversion, or non-standard missed-approach turn must respect the current MSA sectors** — verify the area/approach chart before any off-standard-track manoeuvring south of the field.

### 3.2 Airborne conflict / traffic 🟧
GMMX is a substantial international leisure gateway (Wikipedia cites ~9.3 million passengers in 2024 and ~48,150 aircraft movements in 2023) served by a published approach-radar facility (MARRAKECH APP, §8). Procedural-vs-radar classification, VFR mix and position-report workload were not independently confirmed from a primary source this pass. Cross-ref [Africa — General Airspace](../../../../airspace/africa.md) for the Casablanca FIR (GMMM) context.

### 3.3 Runway excursion 🟧
Single-runway field (10/28). RWY 10's threshold is **displaced 280 m (918 ft)**, reducing usable landing distance from that end (§7). No contamination, seasonal braking-action or tailwind-tendency data was found in reachable sources for GMMX — treat any such figure as unconfirmed and verify the current AIP declared-distance table before dispatch-critical planning.

### 3.4 Weather threat 🟧
Marrakesh sits in the semi-arid Haouz plain at the foot of the High Atlas. Summers are hot and dry; the region is also periodically affected by the **"Chergui"** — a hot, dry, sirocco-type easterly wind known across Morocco that can reduce visibility through dust and raise temperatures — but no GMMX-specific frequency/season data was found this pass. Occasional plain fog/inversion in winter is plausible given the geography but not independently confirmed for this field. See also §14.

### 3.5 Operational considerations 🟧
Three durable characteristics shape planning here: (1) **no runway redundancy** — RWY 10/28 is the only runway, so any obstruction or disabled-aircraft event closes the field to fixed-wing traffic entirely; (2) **RWY 10's reduced LDA** from the 280 m displaced threshold, which must be checked against actual dispatch requirements; and (3) an unusually high number of 🟧 items in this build (hours, RFF, PCN, exact frequencies, SIDs/STARs) because the primary AIP portal could not be reached this pass — treat this pack as provisional and re-verify safety-critical figures before operational reliance.

---

## 4. Cautions & Warnings

- High Atlas terrain (Toubkal, 13,671 ft — North Africa's highest peak) rises ~34 nm S/SSE of the field; respect MSA on any south-side vectoring, hold, or diversion track.
- Single runway (10/28) — no redundancy; any obstruction or disabled aircraft closes the field to all fixed-wing traffic.
- RWY 10 threshold is displaced 280 m (918 ft) — do not assume the full 3,100 m physical length is available for landing from that end; confirm current declared distances before dispatch.
- Field elevation (1,545 ft/471 m, corroborated by three independent public sources) conflicts with a ~1,930 ft figure carried as a planning anchor elsewhere; no public source found supports ~1,930 ft — see §18.
- This build carries an unusually high proportion of 🟧 (unverified) items because the ONDA eAIP portal was not reachable via public web access this pass — verify hours, RFF, PCN, frequencies and procedures against the current AIP/AIRAC before relying on this pack operationally.

---

## 5. Aerodrome category, restrictions & crew qualification

- **Special-airport / category:** Not categorised in reachable sources; no operator-designated restriction found. 🟧
- **Crew-qualification gate:** None identified. 🟧
- **Operating restrictions / bans:** None identified in reachable sources — verify current AIRAC. 🟧
- **Overflight / entry / permits:** Standard Kingdom of Morocco international arrival; no special state permit regime identified for scheduled commercial ops. 🟩
- **Operations notes:** Airport operator is **ONDA (Office National Des Aéroports)**, the standard operator for all Moroccan civil/commercial airports. 🟩

---

## 6. General / hours / services

| Item | Value | Flag |
|---|---|---|
| ATS hours | Not published / verify | 🟧 |
| AD operating hours | Not published / verify | 🟧 |
| Night / curfew restrictions | None identified in reachable sources | 🟧 |
| RFF category | Not published / verify | 🟧 |
| Fuel | Jet A-1 presumed (scheduled international jet ops); supplier/hours not confirmed | 🟧 |
| PCN | Not published / verify | 🟧 |
| Customs | International PoE confirmed; exact hours not confirmed | 🟧 |
| Handling / FBO | Not published / verify | 🟧 |

---

## 7. Runways & declared distances

| RWY | Dimensions | Surface / PCN | TORA | TODA | ASDA | LDA | Notes |
|---|---|---|---|---|---|---|---|
| 10 | 3,100 × 45 m (10,171 × 148 ft) | Asphalt, lighted / PCN not published 🟧 | Not published / verify 🟧 | Not published / verify 🟧 | Not published / verify 🟧 | **≈2,820 m** (3,100 m − 280 m displacement; derived from OurAirports displacement figure, **not** an official declared-distance publication) 🟧 | Threshold displaced 280 m (918 ft) `OurAirports` |
| 28 | 3,100 × 45 m (10,171 × 148 ft) | Asphalt, lighted / PCN not published 🟧 | Not published / verify 🟧 | Not published / verify 🟧 | Not published / verify 🟧 | ≈3,100 m (no displacement reported this end; not officially published) 🟧 | No displacement reported |

*Per-threshold field elevation differs slightly by end per SkyVector: RWY 10 threshold ≈1,505 ft, RWY 28 threshold ≈1,545 ft. Official TORA/TODA/ASDA/LDA figures were not found in a reachable primary source this pass — treat the LDA(10) figure above as a derived estimate only and confirm the full declared-distance table against the current AIP before dispatch-critical use.*

---

## 8. Communications

| Service | Callsign | Frequency | Hours | Notes |
|---|---|---|---|---|
| ATIS | MARRAKECH ATIS | 121.95 | Not published / verify 🟧 | |
| Delivery | Not published / verify 🟧 | — | — | |
| Ground | Not published / verify 🟧 | — | — | |
| Tower | MARRAKECH TWR | 118.10 / 118.70 | Not published / verify 🟧 | Two published frequencies — confirm current assignment |
| Approach | MARRAKECH APP | 119.70 / 120.10 | Not published / verify 🟧 | Two published frequencies — confirm current assignment |
| Centre / FIR | Casablanca ACC (GMMM) | Not published / verify 🟧 | — | Casablanca FIR — see [Africa — General Airspace](../../../../airspace/africa.md) |

---

## 9. Navaids

| Aid | Ident | Freq | Hours | Notes |
|---|---|---|---|---|
| VOR | MAK (MARRAKECH) | 113.30 | Not published / verify 🟧 | ~3.2 nm from the field per SkyVector radial/range; DME component not separately confirmed |
| ILS | Not published / verify 🟧 | Not published / verify 🟧 | Not published / verify 🟧 | ILS CAT II reported present (ONDA/Wikipedia); runway assignment, ident and frequency not confirmed from a reachable primary source — verify current AIRAC |
| NDB | Not published / verify 🟧 | Not published / verify 🟧 | Not published / verify 🟧 | An on-field NDB is reported present (ONDA/Wikipedia); ident/freq not found in reachable sources |

---

## 10. Arrival

- **Transition altitude / level:** Not published / verify 🟧
- **Speed:** Standard 250 KIAS <FL100 assumed (ICAO norm) — not independently confirmed for GMMX.
- **Preferential runway logic:** Not published / verify 🟧 — single-runway field; selection is wind-driven only.
- **Approaches (names only — verify minima on current AIRAC charts):**

| RWY | Approach | IAF | FAF/FAP alt | Notes |
|---|---|---|---|---|
| 10/28 | ILS (CAT II reported) — runway assignment not confirmed | Not published / verify 🟧 | Not published / verify 🟧 | Verify current chart |
| 10/28 | VOR/DME, NDB (names only) | Not published / verify 🟧 | Not published / verify 🟧 | Verify current chart |

- **STARs (names only):** Not confirmed — verify current AIRAC. 🟧
- **LVP:** Not published / verify 🟧
- **Missed approach watch-items:** Respect MSA given High Atlas terrain to the south (§3.1); no specific published MAP note found — verify current chart.

---

## 11. Departure

- **SIDs (names only — fly the charted version):** Not confirmed — verify current AIRAC. 🟧
- **RNP / climb-gradient requirements:** Not published / verify 🟧
- **Take-off minima:** Not published / verify 🟧
- **Start-up / push-back:** Not published / verify 🟧
- **ATC slot / CTOT & clearance:** None identified in reachable sources — presumed non-slot-coordinated field. 🟧
- **De-icing:** NIL expected given the semi-arid Haouz-plain climate — not officially confirmed. 🟧

---

## 12. Noise & Environmental

- **Noise abatement (NAP):** Not published / verify 🟧
- **Night noise / dB limits:** Not published / verify 🟧
- **Engine run-up restrictions:** Not published / verify 🟧
- **Reverse thrust / idle-reverse policy:** Not published / verify 🟧

---

## 13. Ground operations

- **Stands for our types:** Apron parking (~125,000 m²) is described as supporting up to 14 × Boeing 737-size or 4 × Boeing 747-size aircraft simultaneously (ONDA/Wikipedia) — implies at least limited Code E capability; exact pier/boarding-area assignment for K Global category S ops not confirmed. 🟧
- **Push-back:** Not published / verify 🟧
- **Standard taxi routes:** Not published / verify 🟧
- **Hot spots / tight taxiways:** None identified in reachable sources. 🟧
- **Follow-me:** Not published / verify 🟧

---

## 14. Weather & seasonal (durable)

- **Climate / prevailing wind:** Semi-arid Haouz-plain climate at the foot of the High Atlas; hot dry summers, milder winters by regional standards. Prevailing wind direction not confirmed from a primary source this pass.
- **Seasonal hazards:** Summer heat; the regional "Chergui" hot, dry easterly wind (dust/visibility reduction, sirocco-type phenomenon common across Morocco) — season/frequency not GMMX-specific-sourced. Occasional plain fog/inversion in winter is plausible given the geography but not independently confirmed.
- **Local effects:** Field sits on a flat plain; the High Atlas front to the south can generate local orographic/convective effects — general regional knowledge, not GMMX-specific sourced.

> **Live weather — pull at planning (T-2h):** METAR, TAF, TREND, SIGMET/AIRMET. Not stored here.

---

## 15. NOTAMs

> **Pull at planning (T-2h).** Perishable — not stored here. Check: runway/taxiway closures, navaid U/S, lighting, obstacle/crane, RFF downgrade, GPS/RAIM, TFR. Source: AIS / OFP NOTAM block.

---

## 16. Fuel & alternate planning notes

- **Typical role for us:** Category S destination/alternate — not a K Global base. `[VAMSYS mirror 2026-07-26]`
- **Nearest suitable alternates:** Company preferred alternates [**GMMN**](../gmmn/index.md) (Casablanca Mohammed V — approximately 108 nm at bearing 012° per SkyVector) and [**GMTT**](../gmtt/index.md) (Tangier Ibn Battouta — distance not independently verified this pass 🟧) `[VAMSYS mirror 2026-07-26]` — confirm suitability, runway/RFF adequacy and current minima per leg.
- **Fuel-uplift notes:** Jet A-1 presumed given scheduled international jet ops; not independently confirmed. 🟧 See [Fuel Policy](../../../../../flight-ops/fuel-policy.md).
- **Range/perf flags for our fleet:** 3,100 m runway is non-limiting for Category S operations. See [Fleet Capability Matrix](../../../../../fleet/capability-matrix.md).

---

## 17. Fleet-specific notes (optional)

- No GMMX-specific type restriction identified in reachable sources. See [Fleet Capability Matrix](../../../../../fleet/capability-matrix.md) for type-by-type reference.

---

## 18. Open items (🟧 — confirm against AIP / current AIRAC)

- **Primary AIP not reached this pass.** The Morocco/ONDA eAIP (attempted at the AD 2 GMMX PDF and the eAIP menu/home page) was not reachable via public web fetch across repeated attempts this build — consistent with the known access pattern for some African eAIPs (JavaScript frameset / slow response). All figures in this pack rely on tier-4 public corroboration (OurAirports, Wikipedia/ONDA-sourced text, SkyVector) unless noted; re-verify directly against the AIP at first opportunity.
- **Field elevation** — three independent public sources (OurAirports, Wikipedia/ONDA-sourced, SkyVector) converge on **1,545 ft / 471 m MSL**, matching the existing Navigraph-derived legacy figure. No public source found corroborates a ~1,930 ft figure carried elsewhere as a planning anchor. Treat 1,545 ft / 471 m as the operative value pending direct AIP confirmation; disregard ~1,930 ft unless a primary source is found to support it.
- **Declared distances (TORA/TODA/ASDA)** — not found in a reachable primary source; only total runway length (3,100 m) and the RWY 10 displaced-threshold figure (280 m, OurAirports) are corroborated. The LDA(10) figure in §7 is a derived estimate, not an official publication.
- **PCN, RFF category, ATS/AD hours, curfew status** — not published in any reachable source.
- **ILS/NDB idents, frequencies, and runway assignment** — an ILS (CAT II reported) and an NDB are described as present (ONDA/Wikipedia) but idents/frequencies were not found; verify on the current AIRAC.
- **SIDs/STARs, take-off minima, TA/TL, NADP, LVP triggers** — not confirmed in reachable sources this pass.
- **Delivery/Ground/Centre frequencies** — not found; only ATIS, TWR and APP frequencies were corroborated (OurAirports + SkyVector).
- **Handling agent(s), fuel supplier, customs hours** — not confirmed.
- **VATSIM/IVAO cross-check** — an IVAO Morocco division page (ma.ivao.aero) was reached but no dedicated GMMX airport SOP/briefing page was found or reachable (attempted `ma.ivao.aero/sop/gmmx-sop`); no network-sim cross-check available this pass.
- **Preferred-alternate distance (GMTT)** — GMMN's distance from GMMX (≈108 nm/012°) was cross-checked via SkyVector; an equivalent distance for GMTT was not obtained this pass.

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim material may inform content but is not listed here. See the source register for the tier hierarchy.*

- OurAirports — https://ourairports.com/airports/GMMX/ , /runways.html , /frequencies.html (retrieved 2026-07-26). *ARP, elevation, runway dimensions/displacement, ATIS-adjacent APP/TWR frequency cross-check.*
- SkyVector — https://skyvector.com/airport/GMMX (retrieved 2026-07-26). *Coordinates, per-threshold elevation, runway heading, VOR/NDB list, ATIS/APP/TWR frequencies, nearby-airport bearing/distance.*
- Wikipedia — "Marrakesh Menara Airport" — https://en.wikipedia.org/wiki/Menara_International_Airport (retrieved 2026-07-26). *Runway/ILS-CAT-II/VOR-DME-NDB description, apron/terminal/cargo-terminal figures, traffic statistics — sourced in the article to the ONDA airport fact sheet.*
- Wikipedia — "Toubkal" — https://en.wikipedia.org/wiki/Toubkal (retrieved 2026-07-26). *High Atlas terrain elevation and distance from Marrakesh, for §3.1 TEM.*
- Primary source attempted, not reachable: AIP Morocco (ONDA eAIP), AD 2 GMMX — https://siamaroc.onda.ma/eaip/ad/AD2GMMX.pdf and https://siamaroc.onda.ma/eAIP/menu.html (attempted 2026-07-26, not reachable via public web fetch this pass).

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-26 | Built from AIP Morocco (ONDA); K Global fields from live VAMSYS; 4-page pack. |
