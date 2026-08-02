# BGSF — Kangerlussuaq · Airport Briefing

**BGSF / SFJ** · Kangerlussuaq, Qeqqata Municipality, Greenland (Kingdom of Denmark) · North America
**Version** v0.1.3 · **Updated** 2026-07-26 · **Status** Draft — provisional (several fields pending primary-AIP verification, see §18)

> **Read-me:** Planning aid for X-Plane 11, not a chart. Static data is from the primary AIP source of record where reachable; where the Naviair eAIP is not directly accessible, figures are corroborated across public sources and flagged. Approaches/SIDs/STARs are listed **by name only** — fly the charted current-AIRAC version. Live weather/NOTAMs are pulled at planning (§14/§15). Open 🟧 items are listed in §18. Flag legend 🟥 restriction/hazard · 🟧 caution/unverified · 🟩 normal. **Role note:** BGSF is a primary ETOPS/EDTO enroute alternate and is named as the ETP-entry alternate on the reference EDDF–KSFO OFP (2026-07-25) (§9 lists BGSF, WX MIN 600-3219). Cross-reference `Airspace/General/Arctic.md` §8 (diversion table) for the wider Greenland/high-latitude diversion picture.

---

## 1. Snapshot

| Field | Value |
|---|---|
| ARP (lat/long) | 67°01′01″N 050°41′22″W (≈67.0169, -50.6893) — AIP-derived, corroborated by SkyVector (N67°1.02′/W50°41.36′). 🟧 Note: some tier-4 listings (OurAirports/AirportGuide/bigorre.org) give a nearby but distinct point ≈67.0122, -50.7116 (likely terminal/town reference, not ARP) — see §18. |
| Field elevation | 165 ft / 50 m MSL `[OurAirports/SkyVector/Wikipedia — concordant]` |
| Mag variation | 25.4°W (WMM2020, computed current) `[AirportGuide.com]`. 🟧 Older AIP text carries 32°W (epoch Jan 2009) — confirm current-AIRAC published value. |
| Time zone | UTC-2 (standard) / UTC-1 (DST) — America/Godthab 🟩 |
| Runway(s) | 09/27, 2,810 x 60 m (9,219 x 197 ft), asphalt, lighted — former Sondrestrom AB, widebody-capable |
| Preferential runway | Not published / verify — expect wind-driven selection along the fjord axis (see §3.3/§14) 🟧 |
| Longest LDA | Not published / verify — full length assumed absent a displaced threshold; no displaced threshold reported 🟧 |
| Approaches | RWY 09: LOC Z/Y/X, RNP (RNAV), NDB Z/Y (names only, current AIRAC). **RWY 27: no published approach** — visual/circling only 🟥 |
| RFF category | Certified **CAT 8**; tier-4 sources indicate current service limited to **CAT 7 with 4h prior notice** 🟥 — confirm before planning as primary alternate for our largest types |
| Control type | Procedural (non-radar) ATC — Sondrestrom radar service ended ~Nov 2025; a proposed ATC→AFIS downgrade was **cancelled** (Naviair confirms BGSF remains fully ATC-controlled, tower/approach, without radar) 🟧 |
| Elevation class | Sea-level-adjacent (165 ft) — not hot-and-high; terrain/fjord approach is the driver, not elevation 🟩 |
| Special-airport status | Not formally categorised in sources reached; fjord approach + no RWY 27 approach + procedural control are real constraints — see §5 🟧 |
| Customs / PoE | Historically a Greenland international gateway; role reduced since Nov 2024 hub transition to Nuuk (BGGH). Current customs hours **Not published / verify** 🟧 |

---

## 2. Validation summary

| Domain | Flag | Note |
|---|---|---|
| Terrain / CFIT | 🟥 | Fjord approach up Søndre Strømfjord, terrain both sides of the valley; no easy circling, especially to RWY 27 (no published approach). See §3.1. |
| Runway length vs fleet perf | 🟩 | 2,810 m (9,219 ft) is long and widebody-capable; not a limiting factor for our fleet. |
| Approach availability / minima | 🟥 | RWY 09 has LOC/RNP/NDB coverage; **RWY 27 has none published** — an opposite-wind arrival forces a visual/circling approach in a fjord with terrain both sides. |
| Airspace / traffic / control | 🟧 | Procedural (non-radar) since ~Nov 2025; low traffic density; workload is position-report driven, not conflict driven. |
| Weather / seasonal hazard | 🟥 | Katabatic/foehn winds off the icecap, rapid weather change, extreme cold, ice-contaminated runway in winter, fuel-freeze relevance on arrival. |
| Curfew / slots / hours | 🟧 | No confirmed 24h operation; hours likely tied to scheduled traffic — verify before relying on it as an off-schedule diversion. |
| RFF category vs our types | 🟥 | Certified CAT 8 but tier-4 sources report current operational limitation to CAT 7 with 4h PN — a real constraint for our largest widebody types diverting unannounced. |
| Fuel availability | 🟧 | Jet A-1 confirmed available (multiple tier-4 handling/FBO sources); hours/quantity/quality assurance not confirmed from a primary source. |
| Customs / handling / security | 🟧 | Handling/FBO services confirmed present (My Ops and others); customs hours and PoE status since the 2024 hub shift to Nuuk not confirmed from a primary source. |

---

## 3. Threat & Error Management (TEM)

### 3.1 CFIT / Terrain 🟥
BGSF sits at the head of **Søndre Strømfjord (Kangerlussuaq Fjord)**, roughly 190 km inland from the west coast — arrivals and departures track up/down a long fjord with rising terrain on both sides. This is the airport's defining hazard: there is **no easy circling option**, and a late runway change (e.g. wind swings to favour RWY 27, which has no published instrument approach) can force a visual/circling manoeuvre inside the fjord walls at night or in marginal weather. MSA/grid-MORA in this sector is driven by the Greenland icecap dome to the east (~10,500 ft, see `Airspace/General/Arctic.md` §7) — respect published MSA sectors and do not descend early on the assumption that "inland = flat." Missed-approach and driftdown planning must assume terrain on both sides of the inbound track, not just ahead.

### 3.2 Airborne conflict / traffic 🟩
Traffic density is low (regional scheduled service plus occasional widebody diversions/technical stops). Control is **procedural (non-radar)** since Sondrestrom's radar service ended ~Nov 2025 — the workload driver is compulsory position reporting, not conflict density. See `Airspace/General/Arctic.md` §3/§10 for the Nuuk FIR procedural-contingency framework.

### 3.3 Runway excursion 🟧
Single long runway (2,810 m) largely removes a length constraint, but the field is a former USAF base (Sondrestrom/Bluie West-8) with pavement of unconfirmed current PCN — verify before planning our heaviest types. Winter ice/snow contamination is expected at this latitude; braking-action reporting reliability at a low-traffic field should be treated with caution. No displaced threshold is reported in the sources reached, but this is unconfirmed against the primary AIP (🟧, see §18).

### 3.4 Weather threat 🟥
BGSF is inland and, per Wikipedia/operational sources, historically **less prone to fog and coastal wind than Greenland's coastal fields** — this is part of why it is the network's most reliable widebody alternate. That said, it is still subject to **katabatic/foehn winds draining off the icecap**, which can produce rapid, hard-to-forecast wind and turbulence changes, particularly channelled along the fjord axis (aligned with RWY 09/27). Extreme cold is routine; for arriving aircraft cold-soaked on a long high-latitude/polar sector, monitor tank fuel temperature against the Jet A-1 freeze point (−47 °C) per `Airspace/General/Arctic.md` §8 — an aircraft diverting into BGSF after hours over the icecap may already be closer to that limit than the destination forecast suggests.

### 3.5 Operational considerations 🟧
- Procedural (non-radar) control increases crew workload for position reporting and self-sequencing versus a radar environment.
- **RFF certified CAT 8, but tier-4 sources report a current operational limitation to CAT 7 with 4h prior notice** — treat as a live constraint for our largest types and confirm before nominating BGSF as the primary alternate for those types without notice.
- Hours of operation are not confirmed as 24h; as an unplanned ETOPS/EDTO diversion field this must be verified, not assumed.
- RWY 27 has no published instrument approach — an arrival with wind favouring 27 in IMC is a real operational constraint, not just a preference.

---

## 4. Cautions & Warnings

- Fjord approach with terrain both sides — do not descend below published MSA/grid-MORA early; no easy circling.
- **RWY 27 has no published instrument approach** — expect RWY 09 to be the planned instrument runway; a forced RWY 27 arrival in IMC requires visual/circling only.
- RFF may be limited to CAT 7 (vs CAT 8 certified) and may require 4h prior notice — confirm before diverting unannounced with our largest types.
- Katabatic/foehn wind events off the icecap can change wind conditions rapidly — brief for a late runway-change contingency.
- Extreme cold / fuel-freeze relevance for aircraft arriving cold-soaked off a long high-latitude sector.
- Control is procedural (non-radar) — maintain compulsory position reports; do not expect radar vectoring or radar-derived separation.

---

## 5. Aerodrome category, restrictions & crew qualification

- **Special-airport / category:** Not formally categorised in the sources reached. Given the fjord approach, absent RWY 27 approach, and procedural control, K Global should treat this as a **briefing-required field**, not a routine alternate. 🟧
- **Crew-qualification gate:** No published crew-experience restriction found. Recommend company policy require a specific fjord-approach/BGSF briefing before nomination as a primary alternate, given the terrain and RWY 27 approach gap. 🟧
- **Operating restrictions / bans:** No RNP AR restriction identified; no circling-not-authorised statement found — but with no RWY 27 procedure, an effective circling requirement exists for that runway direction. Verify against current AIP. 🟧
- **Overflight / entry / permits:** Greenland (Kingdom of Denmark) — no special overflight permit expected for a civil ETOPS/EDTO diversion. PPR status for planned (non-emergency) use is unconfirmed — verify. 🟧
- **Operations notes:** Third-party ground/FBO handling is available (e.g. My Ops and others advertise fuel, ground handling, de-icing coordination at BGSF) — services outside scheduled operating hours should be confirmed in advance, not assumed. 🟧

---

## 6. General / hours / services

| Item | Value | Flag |
|---|---|---|
| ATS hours | Not published / verify — likely tied to scheduled traffic | 🟧 |
| AD operating hours | Not published / verify | 🟧 |
| Night / curfew restrictions | Not published / verify | 🟧 |
| RFF category | Certified CAT 8; tier-4 sources report current CAT 7 w/ 4h PN | 🟥 |
| Fuel | Jet A-1 confirmed available (multiple FBO/handling sources); hours/quantity not confirmed | 🟧 |
| PCN | Not published / verify | 🟧 |
| Customs | Historic international gateway; current hours/status since Nov 2024 hub shift to Nuuk not confirmed | 🟧 |
| Handling / FBO | Third-party handling available (e.g. My Ops) — advertises fuel, ground handling, de-icing coordination, crew/catering support | 🟩 |

---

## 7. Runways & declared distances

| RWY | Dimensions | Surface / PCN | TORA | TODA | ASDA | LDA | Notes |
|---|---|---|---|---|---|---|---|
| 09 | 2,810 x 60 m (9,219 x 197 ft) — re-confirmed 2026-07-25 (OurAirports + SkyVector concordant) | Asphalt, hard-surface, lighted; PCN not published / verify 🟧 | Declared distances not in reachable public sources — verify against AD 2 🟧 | Declared distances not in reachable public sources — verify against AD 2 🟧 | Declared distances not in reachable public sources — verify against AD 2 🟧 | Declared distances not in reachable public sources — verify against AD 2 🟧 | THR elevation ≈100 ft (SkyVector-corroborated); instrument-approach runway (LOC/RNP/NDB). No displaced threshold reported. |
| 27 | 2,810 x 60 m (9,219 x 197 ft) — re-confirmed 2026-07-25 (OurAirports + SkyVector concordant) | Asphalt, hard-surface, lighted; PCN not published / verify 🟧 | Declared distances not in reachable public sources — verify against AD 2 🟧 | Declared distances not in reachable public sources — verify against AD 2 🟧 | Declared distances not in reachable public sources — verify against AD 2 🟧 | Declared distances not in reachable public sources — verify against AD 2 🟧 | THR elevation ≈165 ft (SkyVector-corroborated); **no published instrument approach** — visual/circling only. RNP 1 SID published for this direction. |

<!-- Declared distances (TORA/TODA/ASDA/LDA) for BGSF remain unverified against the primary Naviair eAIP — the AD 2 BGSF page is not available via a direct public URL (contrast BGTL, whose equivalent AD 2 PDF is directly reachable — see that brief's §7). Overall runway length and both threshold elevations are independently confirmed concordant across OurAirports (runways.html) and SkyVector (2,810 x 60 m / 9,219 x 197 ft; THR 09 ELEV 100 ft, THR 27 ELEV 165 ft; ARP/THR coordinates concordant) — see Sources. -->

---

## 8. Communications

| Service | Callsign | Frequency | Hours | Notes |
|---|---|---|---|---|
| ATIS | Not published / verify | Not published / verify | — | Not confirmed present at BGSF 🟧 |
| Delivery | — | — | — | Not published / verify 🟧 |
| Ground | — | — | — | Not published / verify 🟧 |
| Tower | Kangerlussuaq / Sondrestrom Tower | 118.3 | Not published / verify | 🟧 |
| Approach | Sondrestrom Approach / A-D | 126.2 | Not published / verify | APP/DEP combined per tier-4 sources 🟧 |
| Centre / FIR | Sondrestrom Information / Radio | 121.3 | Not published / verify | FIS-type position; Nuuk FIR (Naviair) 🟧 |
| Emergency / UNICOM | — | 121.5 / 122.8 | — | Per SkyVector/AirportGuide 🟧 |

---

## 9. Navaids

| Aid | Ident | Freq | Hours | Notes |
|---|---|---|---|---|
| NDB | SF (Sondre Stromfjord) | 382 kHz | Not published / verify | ~6 NM from field, bearing ≈243° (mag); serves NDB Z/Y RWY 09 approaches 🟧 |
| VOR | MS (Maniitsoq) | 110.55 | Not published / verify | ~111 NM, enroute aid, not field-serving 🟧 |
| VOR | AS (Aasiaat) | 108.75 | Not published / verify | ~113 NM, enroute aid, not field-serving 🟧 |
| NDB/DME | SM / SS (Sisimiut) | 341 / 108.15 | Not published / verify | ~70 NM, enroute aid 🟧 |
| LOC/RNP (RWY 09) | — | Not published / verify | Not published / verify | Named procedures per current AIRAC (LOC Z/Y/X RWY 09, RNP RWY 09) — idents/frequencies not corroborated from a reachable primary source 🟧 |

---

## 10. Arrival

- **Transition altitude / level:** Not published / verify 🟧
- **Speed:** Standard 250 KIAS below FL100 assumed; not confirmed against a BGSF-specific restriction 🟧
- **Preferential runway logic:** Not published / verify — expect wind to drive runway selection along the fjord axis (09/27); a late swing to 27 removes the only published instrument approach (see §3.1/§3.5). 🟧
- **Approaches (names only — verify minima on current AIRAC charts):**

| RWY | Approach | IAF | FAF/FAP alt | Notes |
|---|---|---|---|---|
| 09 | LOC Z RWY 09 | Not published / verify | Not published / verify | Current AIRAC (eff. 21 MAR 24 series, per AIRAC AMDT 12/24 checklist) |
| 09 | LOC Y RWY 09 | Not published / verify | Not published / verify | |
| 09 | LOC X RWY 09 | Not published / verify | Not published / verify | |
| 09 | RNP RWY 09 | Not published / verify | Not published / verify | |
| 09 | NDB Z RWY 09 | Not published / verify | Not published / verify | Marker beacon MKR09 was withdrawn (AIRAC AMDT 12/24) |
| 09 | NDB Y RWY 09 | Not published / verify | Not published / verify | |
| 27 | — none published — | — | — | **No instrument approach for RWY 27** — visual/circling only 🟥 |

- **STARs (names only):** Not identified from sources reached — verify on current AIRAC. 🟧
- **LVP:** Not published / verify. 🟧
- **Missed approach watch-items:** Terrain rises on both sides of the fjord; assume the missed-approach climb must clear valley walls, not open terrain — verify the published MAP against the current chart before relying on it. 🟥

---

## 11. Departure

- **SIDs (names only — fly the charted version):** RNP 1 SID RWY 09; RNP 1 SID RWY 27 (both published per current AIRAC, AIRAC AMDT 12/24 series).
- **RNP / climb-gradient requirements:** RNP 1 SIDs are published for both runway directions — given the fjord terrain, treat published climb gradients as a real constraint, not a formality. Verify current gradient requirements on the chart. 🟧
- **Take-off minima:** Not published / verify. 🟧
- **Start-up / push-back:** Not published / verify — no company-specific procedure identified. 🟧
- **ATC slot / CTOT & clearance:** No slot regime identified; low-traffic procedural field. 🟧
- **De-icing:** Third-party FBO/handling sources advertise de-icing coordination at BGSF; procedure/frequency not confirmed from a primary source. Given the extreme-cold operating environment, treat de-icing availability as needing pre-flight confirmation, not assumption. 🟧

---

## 12. Noise & Environmental

- **Noise abatement (NAP):** None identified — remote field, low population density. NIL / verify. 🟧
- **Night noise / dB limits:** Not published / verify. 🟧
- **Engine run-up restrictions:** Not published / verify. 🟧
- **Reverse thrust / idle-reverse policy:** Not published / verify. 🟧

---

## 13. Ground operations

- **Stands for our types:** Former USAF base with historically generous apron space; current stand count/dimensions for widebody types not confirmed from a primary source. 🟧
- **Push-back:** Not published / verify. 🟧
- **Standard taxi routes:** Not published / verify. 🟧
- **Hot spots / tight taxiways:** None identified from sources reached — not confirmed absent. 🟧
- **Follow-me:** Not published / verify; plausible given low staffing at a remote field. 🟧

---

## 14. Weather & seasonal (durable)

- **Climate / prevailing wind:** Continental/interior Arctic — BGSF sits ~190 km inland at the head of Søndre Strømfjord and is reported as **less prone to fog and wind than Greenland's coastal fields**, which underpins its role as the network's most reliable Greenland widebody alternate.
- **Seasonal hazards:** Katabatic/foehn winds draining off the Greenland icecap can produce rapid wind and turbulence changes, often channelled along the fjord (and hence the runway) axis; winter blowing snow and ice-contaminated runway; extreme cold; winter darkness reduces visual backup for any circling requirement (relevant given RWY 27 has no instrument approach — see §3.1).
- **Local effects:** Fjord-channelled wind along the 09/27 axis; possible mechanical turbulence/mountain-wave effects off the surrounding terrain in strong katabatic flow.

> **Live weather — pull at planning (T-2h):** METAR, TAF, TREND, SIGMET/AIRMET, space-weather HF/GNSS advisories (see `Airspace/General/Arctic.md` §11). Not stored here.

---

## 15. NOTAMs

> **Pull at planning (T-2h).** Perishable — not stored here. Check specifically: RFF category/downgrade status (certified CAT 8 vs operational CAT 7 w/ PN — §1/§6), runway/taxiway closures, navaid U/S (especially the RWY 09 NDB/LOC suite), lighting, RWY 27 approach status, GPS/RAIM, hours-of-operation notices. Source: AIS / OFP NOTAM block.

---

## 16. Fuel & alternate planning notes

- **Typical role for us:** Primary **ETOPS/EDTO enroute alternate**; named as the **ETP-entry alternate on the reference EDDF–KSFO OFP** (2026-07-25) (OFP §9, WX MIN 600-3219). Per industry NAT-alternate guidance (OPSGROUP, Dec 2025/Mar 2026 updates), operators of aircraft **larger than A330-class are advised to prefer BGSF over BGGH/Nuuk** given BGSF's longer runway and lower traffic — reinforcing its role as K Global's primary heavy-widebody Greenland alternate.
- **Nearest suitable alternates:** BGGH Nuuk (jet-capable, 2,200 m, ILS both ends, but runway/traffic profile favours smaller types per the guidance above); BIKF Keflavík (primary western-NAT/Iceland gateway). See `Airspace/General/Arctic.md` §8 for the full high-latitude diversion table. Distances not cross-checked against the VAMSYS mirror at build time — verify. 🟧
- **Fuel-uplift notes:** Jet A-1 confirmed available via third-party FBO/handling (e.g. My Ops); hours, quantity assurance, and quality-control specifics not confirmed from a primary source — verify before relying on an uplift here. 🟧
- **Range/perf flags for our fleet:** Runway length (2,810 m) is not a constraint for any K Global type. The binding constraint is **RFF category** (certified CAT 8 vs a possible current CAT 7 w/ 4h PN limitation) for our largest widebody types — confirm against current NOTAM/AIP before nominating BGSF unannounced for those types. Fuel-freeze relevance applies to any aircraft arriving cold-soaked off a long high-latitude sector — see `Airspace/General/Arctic.md` §8. Link OM B for type-specific ETOPS/EDTO diversion-weight planning. 🟥

---

## 17. Fleet-specific notes (optional)

- **Widebody ETOPS/EDTO diverters:** Runway length supports all K Global widebody types. Before nominating BGSF as the planned alternate for the heaviest types, confirm current RFF category (§1/§6/§16) — a CAT 7 limitation may be below the category required for our largest aircraft. Link OM B for the specific type's RFF/ARFF requirement.
- **Any type arriving off RWY 27 in IMC:** no published instrument approach exists for that runway — this is a real go/no-go item, not a preference, if wind will not support a RWY 09 arrival.

---

## 18. Open items (🟧 — confirm against AIP / current AIRAC)

- Primary Naviair eAIP portal (aim.naviair.dk) is JS-rendered/search-only and the AD 2 BGSF pages are not directly accessible; only the AIRAC AMDT 12/24 amendment/checklist document is reachable, which confirms procedure *names* and page effective dates but not full text (frequencies, minima, declared distances, PCN, hours). Verify against the current AD 2 BGSF page/PDF directly with Naviair.
- ARP coordinate discrepancy: AIP-derived/SkyVector point (≈67.0169, -50.6893) vs. a second cluster of tier-4 listings (OurAirports/AirportGuide/bigorre.org, ≈67.0122, -50.7116) — confirm which is the actual ARP vs. a terminal/reference point.
- Mag var: current-AIRAC published value not confirmed (AIP text seen carries a 2009 epoch of 32°W; WMM2020-computed current value is 25.4°W).
- Declared distances (TORA/TODA/ASDA/LDA) per runway — checked 2026-07-25 (v0.1.1): still not corroborated from any reachable public source; Naviair eAIP AD 2 BGSF remains JS/login-gated and no direct-PDF URL is available (contrast BGTL, whose equivalent AD 2 PDF is directly reachable). Overall runway length and both threshold elevations are well-corroborated (OurAirports, SkyVector concordant). Action: verify against AD 2 BGSF directly with Naviair.
- PCN / pavement strength — not published in sources reached.
- RFF category status — certified CAT 8 vs. tier-4 reports of current CAT 7 w/ 4h PN; confirm against current NOTAM/AIP.
- Hours of operation (ATS, AD, customs) — not confirmed; likely tied to scheduled traffic, needs verification for off-schedule diversion planning.
- ATIS presence/frequency at BGSF — not confirmed (an ATIS addition in the AIRAC 12/24 amendment applies to BGGH, not BGSF — do not assume it applies here).
- STARs — not identified; verify on current AIRAC.
- De-icing procedure/frequency — availability plausible via third-party handling but not confirmed from a primary source.
- Stand/apron capacity and taxi routing for our largest types — not confirmed.
- Distances to alternates (BGGH, BIKF) not cross-checked against the VAMSYS mirror.

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim material may inform content but is not listed here. See the source register for the tier hierarchy.*

- **AIP Greenland (Naviair) — AIRAC AMDT 12/24, eff. 28 NOV 2024** — AD 2 BGSF page/procedure checklist (RNP 1 SID RWY 09/27, LOC Z/Y/X RWY 09, RNP RWY 09, NDB Z/Y RWY 09, MKR09 withdrawn) — https://aim.naviair.dk/media/files/4l0nrjrkqdx/BG_Amdt_A_2024_12_en.pdf (retrieved 2026-07-25). Main eAIP portal https://aim.naviair.dk/en — JS-rendered/search-only, AD 2 BGSF full text not directly reachable (🟧, see §18).
- **OurAirports — BGSF** — elevation, coordinates, runway dimensions — https://ourairports.com/airports/BGSF/ and https://ourairports.com/airports/BGSF/runways.html (retrieved 2026-07-25; re-confirmed 2026-07-25 in v0.1.1 §7 declared-distances recheck — dimensions concordant, no declared-distance data present).
- **SkyVector — BGSF/Kangerlussuaq Airport** — coordinates, runway/threshold data, navaids, tower/emergency frequencies — https://skyvector.com/airport/BGSF/Kangerlussuaq-Airport (retrieved 2026-07-25; re-confirmed 2026-07-25 in v0.1.1 §7 declared-distances recheck — THR 09 ELEV 100 ft / THR 27 ELEV 165 ft, dimensions concordant, no declared-distance data present).
- **Declared-distances verification (2026-07-25)** — the Naviair AD 2 BGSF PDF is not available via a direct public URL (contrast the equivalent BGTL PDF, https://aim.naviair.dk/media/files/iq42bqhukcw/BG_AD_2_BGTL_en.pdf, which is directly reachable); the AIRAC AMDT 12/24 checklist is an index only, with no embedded link to the AD 2 BGSF text. TORA/TODA/ASDA/LDA remain unconfirmed from any reachable public source — see §18.
- **AirportGuide.com — SFJ** — coordinates, current WMM2020 magnetic variation, frequencies, navaids, traffic pattern altitude — https://airportguide.com/airport/info/SFJ (retrieved 2026-07-25).
- **Wikipedia — Kangerlussuaq Airport** — history, role change since Nov 2024 hub transition to Nuuk, general characteristics — https://en.wikipedia.org/wiki/Kangerlussuaq_Airport (retrieved 2026-07-25).
- **OPSGROUP — Greenland NAT Alternates updates (Dec 2025 / Mar 2026)** — BGSF vs BGGH sizing guidance for larger types, ATC-downgrade-to-AFIS cancellation confirmation — https://ops.group/blog/greenland-nat-alternates-dec-2025-update/ and https://ops.group/blog/greenland-nat-alternates-march-2026-update/ (retrieved 2026-07-25).
- **Navigraph community forum — BGSF RWY 27 approach coverage** (tier-4 corroboration only) — https://forum.navigraph.com/t/bgsf-kangerlussuaq-no-approaches-listed-for-rwy-27/11872 (retrieved 2026-07-25).
- Cross-reference: `Airspace/General/Arctic.md` §7 (icecap terrain/MORA), §8 (diversion table, fuel-freeze), §11 (space-weather).

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-25 | Initial build. AIP-researched briefing for BGSF as primary ETOPS/EDTO enroute alternate and ETP-entry alternate on the reference EDDF–KSFO OFP. Naviair eAIP portal JS/login-gated — corroborated via OurAirports, SkyVector, AirportGuide, Wikipedia, OPSGROUP, Navigraph forum; AIRAC AMDT 12/24 checklist used for procedure names/dates. Fjord-approach CFIT, RWY 27 approach gap, RFF CAT7/CAT8 discrepancy, and procedural-control status flagged as the key open items. |
| v0.1.1 | 2026-07-25 | Declared distances checked vs Naviair AIP + public mirrors; §7 reconciled (items still gated flagged in §18). Runway length/THR elevations re-confirmed against OurAirports + SkyVector (concordant, no change). Naviair AD 2 BGSF PDF still not directly reachable (portal JS-gated, no locatable direct-file URL) — TORA/TODA/ASDA/LDA remain unverified/flagged, not fabricated. |
| v0.1.2 | 2026-07-25 | Governance scrub: removed callsign and build-process references per OM content rules. |
| v0.1.3 | 2026-07-26 | Moved into per-airport folder as the Briefing page (`BGSF — Kangerlussuaq/BGSF — Briefing.md`); content unchanged. Dispatch, Departure and Arrival pages added alongside as the other three pages of the BGSF airport folder. |
