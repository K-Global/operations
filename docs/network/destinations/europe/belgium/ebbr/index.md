# EBBR — Brussels/Brussels-National · Airport Briefing

**EBBR / BRU** · Zaventem, Flemish Brabant, Belgium · Europe
**Version** v0.1 · **Updated** 2026-07-26 · **Status** Draft — skeyes eAIP direct retrieval unsuccessful this pass; built from tier-4 corroboration (OurAirports, SkyVector, Brussels Airport Company primary statements, public press) — see §18

> **Read-me:** Planning aid for the sim, not a chart. Static data is drawn from public tier-4 corroboration (skeyes eAIP direct fetch did not succeed this session — see §18) plus operator/public statements; approaches/SIDs/STARs are listed **by name only or flagged not-yet-confirmed** — fly the charted current-AIRAC version. Live weather/NOTAMs are pulled at planning (§14/§15). Open 🟧 items are listed in §18. Flag legend 🟥 restriction/hazard · 🟧 caution/unverified · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| ARP (lat/long) | 50°54′05″N 004°29′04″E (50.90139, 4.48444) `[Wikipedia/OurAirports, cross-checked]` |
| Field elevation | **184 ft / 56 m AMSL** 🟧 (OurAirports/SkyVector report 175 ft — 9 ft discrepancy between sources, not resolved this pass) |
| Mag variation | Not published/verify 🟧 |
| Time zone | UTC+1 (CET) / UTC+2 (CEST, EU DST observed) |
| Runway(s) | **01/19** 2,987 × 50 m · **07L/25R** 3,638 × 45 m (longest) · **07R/25L** 3,211 × 45 m — three runways usable in both directions, **six directional combinations** |
| Preferential runway | Federal-government-determined (not set by the airport operator); wind/traffic/noise-driven. Public reporting indicates **25R** is favoured for landing (closest to the cargo apron) with **25L** for departure, and that aircraft **>200 t MTOW must use 25R regardless of destination** — 🟧 not independently confirmed from a primary table this session; live runway-in-use is published at batc.be |
| Longest LDA | 3,638 m (07L/25R), before displaced-threshold deduction — see §7 |
| Approaches | ILS reported available on the main runway pairs; **CAT sub-category not confirmed** from a primary AIP table this session 🟧 |
| RFF category | Not published/verify 🟧 (presumed ≥ CAT 9 given major-hub status; unconfirmed) |
| Control type | **Radar** — skeyes (Belgian ANSP, formerly Belgocontrol) provides Brussels Approach/Tower; field sits in **Brussels FIR (EBBU)** |
| Elevation class | Near sea-level (184 ft) — **not** hot-and-high |
| Special-airport status | 🟥 **Complex 3-runway/6-configuration noise-and-slot regime**, federally mandated, with an active political dispute over night-flight restriction — see §3.5/§12 |
| Customs / PoE | **Yes** — major international hub; exact desk hours not confirmed 🟧 |
| K Global category | **S** `[VAMSYS mirror 2026-07-26]` |
| K Global base | **No** `[VAMSYS mirror 2026-07-26]` |
| Company preferred alternates | **EHAM, EDDF, EDDL** `[VAMSYS mirror 2026-07-26]` |
| Taxi-in / taxi-out (VAMSYS) | **16 min / 20 min** `[VAMSYS mirror 2026-07-26]` |

---

## 2. Validation summary

| Domain | Flag | Note |
|---|---|---|
| Terrain / CFIT | 🟩 | Flat Flemish/Brabant plateau; no close-in high terrain. |
| Runway length vs fleet perf | 🟩 | Longest runway 3,638 m — ample for any K Global type; displaced thresholds reduce usable LDA somewhat, non-limiting at normal weights (§7). |
| Approach availability / minima | 🟧 | ILS reported on the main pairs; sub-category and exact minima not confirmed this session. |
| Airspace / traffic / control | 🟧 | Major EU hub; three runways in six possible combinations, and the field's runways are **physically shared with the adjacent military side (Melsbroek/EBMB)** — genuine ground/airspace complexity. |
| Weather / seasonal hazard | 🟧 | Maritime NW-European climate; autumn/winter radiation and advection fog is the recurring low-vis driver. |
| Curfew / slots / hours | 🟥 | **Night-slot cap (~16,000/yr of ~200,000 total movements), 23:00–06:00 restricted, "quiet weekend nights"** — federally set, under active political review (2023–2024 proposals to tighten further) — see §6/§12. |
| RFF category vs our types | 🟧 | Not confirmed — presumed adequate for a major hub. |
| Fuel availability | 🟧 | Jet A-1 assumed multi-supplier, hours not confirmed. |
| Customs / handling / security | 🟧 | Confirmed as a PoE; exact hours/handler not confirmed. |

---

## 3. Threat & Error Management (TEM)

### 3.1 CFIT / Terrain 🟩
EBBR sits at 184 ft AMSL on the flat Flemish/Brabant plateau — no close-in high terrain relevant to arrival, departure or missed-approach paths. Non-issue field for terrain.

### 3.2 Airborne conflict / traffic 🟧
Brussels operates **three runways usable in both directions (six directional combinations)** — 01/19, 07L/25R, 07R/25L — with runway selection made not by the airport but by the **federal government**, implemented tactically by **skeyes** (the Belgian ANSP, formerly Belgocontrol). A genuine local complexity: the civil airport's runways are the **same physical runways used by the adjacent Melsbroek military airfield (EBMB)**, a legacy of the field's WWII/Cold-War-era shared origin — brief for possible military traffic interaction. Confirm the active configuration on ATIS/batc.be; do not assume a fixed preferential runway.

### 3.3 Runway excursion 🟧
Displaced thresholds are published on **every runway end** per tier-4 cross-check (OurAirports): 01 (46 m), 19 (174 m), 07L (258 m), 25R (300 m), 07R (122 m) — reducing usable landing distance from the full runway length on each end. See §7 for the approximate LDA-by-end derivation. Brief the correct displaced-threshold picture for the assigned runway; do not assume full-length LDA.

### 3.4 Weather threat 🟧
Belgium's maritime, temperate climate (North Sea proximity) brings routine **autumn/winter radiation and advection fog**, frontal wind/rain systems, and an ordinary winter snow/ice season. No extreme seasonal hazard, but low-vis mornings are a recurring factor at a field where the exact CAT sub-category is not confirmed this session (§18).

### 3.5 Operational considerations 🟥
The standout planning driver at EBBR is not terrain or weather but the **noise/slot regime**: a night-flight slot cap (**~16,000 slots/year against ~200,000 total annual movements**, 2024 figures), a restricted window (23:00–06:00, night-slot or exception only), and **"quiet weekend nights"** (no departures Friday 01:00–06:00, none Saturday/Sunday 00:00–06:00, arrivals only) `[Brussels Airport Company, official FAQ, retrieved 2026-07-26]`. This regime has been the subject of an active, unresolved political dispute since at least 2023, with the Federal Minister of Mobility proposing a stricter night ban (100% noise reduction 23:00–06:00) opposed by the airport operator and industry — treat the current regime as durable-but-contested and re-check for regulatory change at planning. Reverse thrust is **banned except when safety-required**, and single-engine taxiing is encouraged — both confirmed operator policy (§12).

---

## 4. Cautions & Warnings

- **Runway configuration is federally mandated, not airport-set** — six possible combinations; confirm the active one via ATIS/batc.be, never assume.
- **Night-slot cap (~16,000/yr) and a 23:00–06:00 restricted window** — schedule integrity for late rotations is a real constraint (§6/§12).
- **"Quiet weekend nights"** — no departures Friday 01:00–06:00 or Saturday/Sunday 00:00–06:00; arrivals only in those windows.
- **Reverse thrust is banned except when safety-required** — brief crews; do not plan a standard reverse-thrust landing roll.
- **Displaced thresholds exist on every runway end** — confirm the assigned runway's usable LDA before committing to a short-runway plan (§7).
- **Shared civil/military runway use with Melsbroek (EBMB)** — be aware of potential military traffic interaction.
- **The night-flight regime is under active political review** — a stricter ban has been proposed (not confirmed adopted); re-check current status at planning, not just from this durable brief.
- Field elevation and several operational figures in this brief are tier-4-sourced (skeyes eAIP direct retrieval unsuccessful this session) — treat exact figures as 🟧 pending primary-source confirmation (§18).

---

## 5. Aerodrome category, restrictions & crew qualification

- **Special-airport / category:** Not operator-categorised as a restricted-crew "special airport" in reachable sources; the standing crew-briefing items are the **six-configuration runway system** and the **noise/slot regime**. 🟧
- **Crew-qualification gate:** None specific found; confirm CAT II/III currency if a low-visibility arrival is anticipated (ILS sub-category unconfirmed, §18). 🟧
- **Operating restrictions / bans:** Night-slot cap and quiet-weekend-night departure ban (§6/§12) are hard commercial/scheduling restrictions. No RNP AR ban or circling restriction found in reachable sources — verify current AIRAC. 🟧
- **Overflight / entry / permits:** Standard EU/Schengen international arrival; no special state permit required. 🟩
- **Operations notes:** ANSP — **skeyes** (Belgian ANSP, formerly Belgocontrol). Airport operator — **Brussels Airport Company (BAC)**. Runway/flight-route selection policy is set by the **Belgian federal government**, not the airport operator — a governance quirk worth noting for schedule-integrity planning.

---

## 6. General / hours / services

| Item | Value | Flag |
|---|---|---|
| ATS hours | H24 presumed (major hub) | 🟧 |
| AD operating hours | H24 with a **night-slot cap 23:00–06:00** (§12) | 🟥 |
| Night / curfew restrictions | Night-slot cap ~16,000/yr; "quiet weekend nights" (no departures Fri 01:00–06:00, Sat/Sun 00:00–06:00) | 🟥 |
| RFF category | Not published/verify | 🟧 |
| Fuel | Jet A-1 assumed, multi-supplier; hours not confirmed | 🟧 |
| PCN | Not published/verify | 🟧 |
| Customs | International PoE confirmed; exact hours not confirmed | 🟧 |
| Handling / FBO | Multiple third-party ground handlers expected at a major hub; not individually confirmed | 🟧 |

---

## 7. Runways & declared distances

| RWY | Dimensions | Surface / PCN | TORA | TODA | ASDA | LDA | Notes |
|---|---|---|---|---|---|---|---|
| 01 | 2,987 × 50 m | Paved (asphalt) 🟧 PCN not confirmed | Not published/verify 🟧 | Not published/verify 🟧 | Not published/verify 🟧 | ≈2,941 m (2,987 m − 46 m displaced thr, approx.) 🟧 | Threshold displaced 46 m |
| 19 | 2,987 × 50 m | Paved (asphalt) 🟧 | Not published/verify 🟧 | Not published/verify 🟧 | Not published/verify 🟧 | ≈2,813 m (2,987 m − 174 m displaced thr, approx.) 🟧 | Threshold displaced 174 m |
| 07L | 3,638 × 45 m | Paved (asphalt) 🟧 | Not published/verify 🟧 | Not published/verify 🟧 | Not published/verify 🟧 | ≈3,380 m (3,638 m − 258 m displaced thr, approx.) 🟧 | Threshold displaced 258 m; longest pair |
| 25R | 3,638 × 45 m | Paved (asphalt) 🟧 | Not published/verify 🟧 | Not published/verify 🟧 | Not published/verify 🟧 | ≈3,338 m (3,638 m − 300 m displaced thr, approx.) 🟧 | Threshold displaced 300 m; reported preferred landing runway (§1) |
| 07R | 3,211 × 45 m | Paved (asphalt) 🟧 | Not published/verify 🟧 | Not published/verify 🟧 | Not published/verify 🟧 | ≈3,089 m (3,211 m − 122 m displaced thr, approx.) 🟧 | Threshold displaced 122 m |
| 25L | 3,211 × 45 m | Paved (asphalt) 🟧 | Not published/verify 🟧 | Not published/verify 🟧 | Not published/verify 🟧 | 3,211 m (no displaced threshold reported) | Reported preferred departure runway (§1) |

*Dimensions and displaced-threshold figures from OurAirports/SkyVector (tier-4, cross-checked between the two, retrieved 2026-07-26); TORA/TODA/ASDA and exact declared-distance LDA are **not confirmed from a primary AIP table this session** — the LDA figures above are an **approximate derivation** (runway length minus displaced threshold) for planning awareness only, not a quoted AIP declared distance. Verify the full declared-distance table against the current AIP before operational use. All distances in metres.*

---

## 8. Communications

| Service | Callsign | Frequency | Hours | Notes |
|---|---|---|---|---|
| ATIS (departure) | Brussels ATIS | 121.755 | H24 presumed 🟧 | |
| ATIS (arrival) | Brussels ATIS | 132.475 | H24 presumed 🟧 | |
| Delivery | Brussels Delivery | 121.950 | H24 presumed 🟧 | Clearance delivery |
| Ground | Brussels Ground | 118.055 (North) / 121.880 (South) | H24 presumed 🟧 | Split by field side |
| Tower | Brussels Tower | 118.605 (RWY 07R/25L and 01) / 120.780 (RWY 07L/25R or 19) | H24 presumed 🟧 | Frequency assignment depends on active runway |
| Approach | Brussels Approach | 118.255 | H24 presumed 🟧 | |
| Departure | Brussels Departure | 126.630 | H24 presumed 🟧 | |
| Centre / FIR | Brussels FIR (EBBU) | Per current AIRAC | H24 | No dedicated FIR brief in-library — see [Europe (Continental) Airspace briefing](../../../../airspace/europe.md) 🟧 |

*Source: OurAirports/SkyVector frequency listings, cross-checked between the two (retrieved 2026-07-26). Not independently confirmed against a primary AIP table this session — treat as 🟧 pending AIRAC cross-check.*

---

## 9. Navaids

| Aid | Ident | Freq | Hours | Notes |
|---|---|---|---|---|
| VOR/DME | BUB | 114.60 | H24 presumed 🟧 | On-field Brussels VOR/DME |
| VOR | HUL | 117.55 | H24 presumed 🟧 | Huldenberg, ~11 NM |
| VOR | AFI | 114.90 | H24 presumed 🟧 | Affligem, ~13 NM |
| VOR | BBE | 116.00 | H24 presumed 🟧 | Beauvechain, ~14 NM |
| NDB | ONW | 355 kHz | H24 presumed 🟧 | Antwerp, ~16 NM |
| ILS (runway idents) | Not confirmed 🟧 | Not confirmed 🟧 | — | ILS reported on the main runway pairs; idents/frequencies/CAT sub-category not confirmed this session |

*Source: SkyVector navaid listing (retrieved 2026-07-26) — tier-4, not independently cross-checked against a primary AIP table.*

---

## 10. Arrival

- **Transition altitude / level:** **4,500 ft AMSL** — inferred from the confirmed Belgium national value published in the EBOS AIP CTR entry (a Belgium-wide TA is standard for a single-FIR state); 🟧 not independently re-confirmed per-field for EBBR this session.
- **Speed:** Standard 250 KIAS below FL100 (EU/ICAO norm).
- **Preferential runway logic:** Federally set (§1/§3.2); public reporting favours 25R for landing, 25L for departure, with a >200 t MTOW rule directing heavy traffic to 25R — 🟧 unconfirmed from a primary table.
- **Approaches (names only — verify minima on current AIRAC charts):**

| RWY | Approach | Notes |
|---|---|---|
| 01 | ILS (reported) 🟧 | Idents/CAT not confirmed |
| 19 | ILS (reported) 🟧 | Idents/CAT not confirmed |
| 07L | ILS (reported) 🟧 | Idents/CAT not confirmed |
| 25R | ILS (reported) 🟧 | Idents/CAT not confirmed; reported preferred landing runway |
| 07R | ILS (reported) 🟧 | Idents/CAT not confirmed |
| 25L | ILS (reported) 🟧 | Idents/CAT not confirmed |

- **STARs (names only):** Not confirmed in reachable research pass — pull the current-AIRAC STAR list at planning. 🟧
- **LVP:** Trigger conditions not confirmed this pass; assume at least CAT I capability, verify current status at planning. 🟧
- **Missed approach watch-items:** Terrain is not the driver (flat plateau) — the operative concern is re-sequencing into a busy, federally-configured six-combination runway environment.

---

## 11. Departure

- **SIDs (names only — fly the charted version):** Not confirmed in reachable research pass — pull the current-AIRAC SID list at planning. 🟧
- **RNP / climb-gradient requirements:** Standard EU PBN mandate applies (RNAV 5 enroute / RNP 1 terminal) per the continental regulatory framework — see [Europe (Continental) Airspace briefing](../../../../airspace/europe.md). See [`OM E — PBN and RNP Operations`](../../../../../flight-ops/pbn-and-rnp-operations.md).
- **Take-off minima:** Not confirmed this pass. 🟧
- **Start-up / push-back:** Not confirmed; standard major-hub procedure assumed. 🟧
- **ATC slot / CTOT & clearance:** Standard EUROCONTROL Network Manager ATFM/CTOT practice expected for a busy EU hub; the more consequential commercial constraint is the **night-slot cap**, not tactical CTOT (§6/§12). 🟧
- **De-icing:** Availability assumed given the Belgian winter climate; pad locations/procedure not confirmed this session. 🟧 See [`OM E — Cold Weather Operations`](../../../../../flight-ops/cold-weather-operations.md).

---

## 12. Noise & Environmental

- **Noise abatement (NAP):** Runway/route selection is **federally mandated** (not airport-set); public reporting has aircraft >200 t MTOW required onto RWY 25R regardless of destination, with 25R favoured for landing generally and 25L for departure — 🟧 not independently confirmed from a primary table. Landing fees are **differentiated by noise/emissions** (quieter aircraft pay less) `[Brussels Airport Company, official FAQ]`.
- **Night noise / dB limits:** Governed by a **Quota Count (QC) system dating to 2009**, currently under active political review — a 2023–2024 ministerial proposal sought a full night-flight ban (100% noise reduction 23:00–06:00, graduated reductions through the day) that was contested by the airport operator and industry `[belganewsagency.eu, aviation24.be, retrieved 2026-07-26]`; **treat the exact current-in-force QC regime as evolving and re-check at planning.**
- **Engine run-up restrictions:** Not confirmed in reachable sources — verify locally. 🟧
- **Reverse thrust / idle-reverse policy:** **Confirmed — reverse thrust is banned except when safety-required** `[Brussels Airport Company, official FAQ, retrieved 2026-07-26]`. 🟩

---

## 13. Ground operations

- **Stands for our types:** Not confirmed this session — Brussels is a major hub handling widebody international/cargo traffic; widebody-capable stand locations not individually confirmed. 🟧
- **Push-back:** Not confirmed. 🟧
- **Standard taxi routes:** Confirm with Ground/Apron on the day. 🟧
- **Hot spots / tight taxiways:** Not confirmed specific junctions this session; the standing general caution is the **shared civil/military runway use with the adjacent Melsbroek (EBMB) military side** (§3.2). 🟧
- **Follow-me:** Not confirmed. 🟧

---

## 14. Weather & seasonal (durable)

- **Climate / prevailing wind:** Temperate maritime NW-European climate; North Sea proximity brings periodic frontal systems.
- **Seasonal hazards:** Autumn/winter **radiation and advection fog** is the recurring low-visibility driver; ordinary winter snow/ice season (de-icing required, exact pad data not confirmed §11).
- **Local effects:** No notable terrain/sea-breeze effect at this inland-plateau field beyond general regional climatology.

> **Live weather — pull at planning (T-2h):** METAR, TAF, TREND, SIGMET/AIRMET. Not stored here.

---

## 15. NOTAMs

> **Pull at planning (T-2h).** Perishable — not stored here. Check: runway/taxiway closures, navaid U/S, current runway-configuration/night-slot NOTAMs, lighting, obstacle/crane, RFF downgrade, GPS/RAIM for RNP procedures. Source: official AIS / OFP NOTAM block.

---

## 16. Fuel & alternate planning notes

- **Typical role for us:** **Destination** — Category S, not a K Global base `[VAMSYS mirror 2026-07-26]`.
- **Nearest suitable alternates:** Company preferred alternates **EHAM** (Amsterdam Schiphol — no OM C folder/brief this pass, plain reference only), [**EDDF**](../../germany/eddf/index.md) (Frankfurt), [**EDDL**](../../germany/eddl/index.md) (Düsseldorf) `[VAMSYS mirror 2026-07-26]` — confirm suitability, runway/RFF adequacy and current minima per leg.
- **Fuel-uplift notes:** Jet A-1 assumed available, multi-supplier as a major hub; specific into-plane provider/hours not confirmed. 🟧 See [`OM E — Fuel Policy`](../../../../../flight-ops/fuel-policy.md).
- **Range/perf flags for our fleet:** Field length (up to 3,638 m) non-limiting for any K Global type even with displaced-threshold deductions. See [`OM B — Fleet Capability Matrix`](../../../../../fleet/capability-matrix.md).

---

## 17. Fleet-specific notes (optional)

- No field-length or field-elevation performance penalty for any K Global type at EBBR. The operative planning consideration is the **night-slot/noise regime** (§6/§12) rather than aircraft performance — build schedule buffer for any rotation that could slip toward the 23:00 restricted window.

---

## 18. Open items (🟧 — confirm against AIP / current AIRAC)

- **Primary AIP direct retrieval** — the skeyes eAIP page for EBBR (`EB-AD-2.EBBR-en-GB.html`) did not load within this session despite repeated attempts; all data above is tier-4-corroborated (OurAirports, SkyVector, Brussels Airport Company public statements, aviation press) and should be re-verified against the primary AIP before treating as audit-grade.
- **Field elevation** — 184 ft (Wikipedia) vs 175 ft (OurAirports/SkyVector); discrepancy not resolved.
- **Mag variation, RFF category, PCN, TORA/TODA/ASDA declared distances** — none confirmed from a primary table; LDA figures in §7 are an approximate derivation only.
- **ILS idents, frequencies and CAT sub-category** — not confirmed.
- **SIDs/STARs (current names)** — not obtained this pass.
- **Exact current-in-force night-flight/QC regime** — under active political dispute as of the sources reviewed (2023–2024); confirm the current regulatory status at planning, not from this durable brief.
- **Take-off minima, engine run-up restriction, follow-me availability, push-back policy, stand/gate assignment for our operation** — none confirmed.
- **Fuel supplier(s), customs/immigration desk hours, RFF category** — assumed major-hub coverage, not individually confirmed.
- **Preferential-runway/25R->200t-MTOW rule** — reported in public aviation-press coverage but not independently confirmed from a primary regulatory table this session.

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim material (current-AIRAC charts) informs content but is not listed here.*

- **AIP Belgium (skeyes eAIP), AD 2 EBBR** — https://ops.skeyes.be/html/belgocontrol_static/eaip/eAIP_Main/html/eAIP/EB-AD-2.EBBR-en-GB.html — primary source of record; **direct retrieval unsuccessful this session** (repeated timeouts); not cited as a confirmed-content source above, listed here as the primary register entry for future re-verification.
- Wikipedia — "Brussels Airport" — https://en.wikipedia.org/wiki/Brussels_Airport (retrieved 2026-07-26). *ARP, elevation, runway count, hub carriers, history.*
- OurAirports — https://ourairports.com/airports/EBBR/ and /runways.html and /frequencies.html (retrieved 2026-07-26). *Runway dimensions/displaced thresholds, frequencies, elevation cross-check.*
- SkyVector — https://skyvector.com/airport/EBBR/Brussels-Airport (retrieved 2026-07-26). *Frequencies, navaids, runway/displaced-threshold cross-check.*
- Brussels Airport Company — "Frequently asked questions for neighbours" — https://www.brusselsairport.be/en/neighbours-and-spotters/faq (retrieved 2026-07-26). *Night-slot cap, quiet-weekend-nights, noise-fee differentiation, reverse-thrust ban, single-engine taxiing, runway-selection governance.*
- Belga News Agency — "Mobility minister wants to ban all night flights at Brussels Airport" — https://www.belganewsagency.eu/mobility-minister-wants-to-ban-all-night-flights-at-brussels-airport-between-2300-and-600 (retrieved 2026-07-26). *2024 QC-reform proposal detail.*
- Aviation24.be — "Brussels Airport regrets the approach by Minister of Transport, who wants a curfew on night flights" — https://www.aviation24.be/airports/brussels-airport-bru/brussels-airport-regrets-the-approach-by-minister-of-transport-who-wants-a-curfew-on-night-flights/ (retrieved 2026-07-26). *Operator/industry response to the 2023 proposal.*

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-26 | Built from AIP Belgium (skeyes); K Global fields from live VAMSYS; 4-page pack. |
