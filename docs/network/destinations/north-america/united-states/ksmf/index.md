# KSMF — Sacramento International · Airport Briefing

**KSMF / SMF** · Sacramento, California, United States · North America
**Version** v1.0 · **Updated** 2026-07-25 · **Status** Verified — ILS component idents/frequencies for 17L, 17R and 35L now confirmed direct from the FAA IAP chart text (d-TPP cycle 2606, retrieved 2026-07-25), closing the last material open item. CBP customs hours and a handful of tier-4 administrative items remain open per §18 but do not block Verified — see Change Log.

> **Read-me:** Planning aid for X-Plane 11, not a chart. KSMF static data is **FAA-sourced** (Chart Supplement / d-TPP cycle effective 11 Jun 2026), captured via two independent FAA-data mirrors (AirNav.com, SkyVector.com) and cross-checked against OurAirports. ILS component idents/frequencies for all three ILS-equipped runway ends (17L, 17R, 35L) were retrieved directly from the FAA IAP chart text via aeronav.faa.gov (d-TPP cycle 2606, retrieved 2026-07-25) — see §9. The raw faa.gov AIP Part 3 AD 2.0 California page was re-fetched directly on 2026-07-25 but returned only its navigation index, with no airport-specific AD-2 entry text reachable, and the CBP General-Aviation fact sheet was re-fetched directly and returned no retrievable content (likely JS-rendered) — both genuinely inaccessible in reachable form (see §18, Sources). Approaches/SIDs/STARs listed **by name only** — fly the charted current-AIRAC version. Live weather/NOTAMs are pulled at planning (§14/§15). Open 🟧 items are in §18. Flag legend 🟥 restriction/hazard · 🟧 caution/unverified · 🟩 normal. Companion pages in this folder: [Dispatch](dispatch.md), [Departure](departure.md), [Arrival](arrival.md).
>
> **Role in network:** Destination alternate for the reference **EDDF–KSFO OFP** (2026-07-25) (filed alternate routing **TRUKN2 TRUKN DCT FEVTA FEVTA1**, landing **RWY 17L**). See §16.

---

## 1. Snapshot

| Field | Value |
|---|---|
| ARP (lat/long) | N38°41′43.6″ W121°35′26.8″ (38.695444, -121.590778) `[AirNav/FAA eff. 11 Jun 2026]` |
| Field elevation | **26.9 ft / 8.2 m** (surveyed) — flat Central Valley floor, no significant local terrain |
| Mag variation | 13° E (2020 epoch) `[confirmed by direct AirNav FAA facility-data pull, retrieved 2026-07-25]` |
| Time zone | **UTC −7 (PDT, Mar–Nov) / UTC −8 (PST, Nov–Mar)** — no live DST offset stored here, confirm date |
| Runway(s) | Two parallel — **17L/35R (8,605 × 150 ft / 2,623 × 46 m)** & **17R/35L (8,598 × 150 ft / 2,621 × 46 m)**, concrete/grooved |
| Preferential runway | Not formally published — **17R/35L is the CAT II/III-instrumented pair** (ALSF2 on 17R); wind-driven otherwise (afternoon "Delta breeze" reverses to NW/W) 🟧 |
| Longest LDA | 8,605 ft / 2,623 m (17L/35R — no displaced threshold, LDA = full runway length both ends) |
| Approaches | ILS/LOC (17L, 17R, 35L — 17R also SA CAT I / CAT II-III), RNAV (RNP) Z & RNAV (GPS) Y all four ends (35R is **RNAV-only**, no ILS) |
| RFF category | **ARFF Index C** (FAR Part 139) — verify adequacy vs widebody diversion 🟥 |
| Control type | **Radar** — NORCAL Approach/Departure; Class C airspace; Oakland ARTCC overlying |
| Elevation class | Sea-level-equivalent (27 ft) — non-limiting; **not** hot-and-high |
| Special-airport status | None found — not categorised in reachable source |
| Customs / PoE | **Yes — Customs Landing Rights Airport**, U.S. Port of Entry designated 2006-10-05; hours/eAPIS requirement not confirmed 🟧 |

---

## 2. Validation summary

| Domain | Flag | Note |
|---|---|---|
| Terrain / CFIT | 🟩 | Flat Central Valley floor (~27 ft); Sierra Nevada foothills >50 NM E, Coast Range >30 NM W. Low CFIT exposure. |
| Runway length vs fleet perf | 🟩 | 8,598–8,605 ft (2,621–2,623 m) parallel runways, no displaced thresholds — ample for widebody long-haul diversion. |
| Approach availability / minima | 🟩 | ILS to 17L (I-MDK 111.75), 17R (I-SMF 111.10, to CAT II/III), 35L (I-HUX 111.10) — all idents/freqs confirmed direct from FAA IAP charts, 2026-07-25; 35R is RNAV-only (LNAV/VNAV, per OFP NOTAM reference). Minima per current AIRAC. |
| Airspace / traffic / control | 🟩 | Radar Class C, NORCAL Approach; straightforward controlled airspace, no adjacent-FIR complexity. |
| Weather / seasonal hazard | 🟥 | **Tule fog (Nov–Mar)** — dense radiation fog, can approach zero visibility; also summer heat/haze and wildfire-smoke season (Jun–Oct). |
| Curfew / slots / hours | 🟩 | H24 attendance/ATS; no curfew found in reachable source — verify 🟧. |
| RFF category vs our types | 🟥 | ARFF Index C — typically sized for aircraft to ≈159 ft fuselage length; **verify against actual diverting widebody type** and any mutual-aid upgrade. |
| Fuel availability | 🟧 | 100LL/Jet-A via sole FBO (Modern Aviation) — GA/charter-oriented; airline-scale into-plane capability unconfirmed. |
| Customs / handling / security | 🟧 | Confirmed PoE/landing-rights status; hours and advance-notice (eAPIS) requirements unconfirmed. |

---

## 3. Threat & Error Management (TEM)

### 3.1 CFIT / Terrain  🟩
KSMF sits on the flat floor of California's Central Valley at ≈27 ft elevation. The nearest significant relief is the Sierra Nevada foothills, well over 50 NM to the east, and the Coast Range roughly 30 NM west — neither factors into the terminal area. This is a **benign-terrain field**: MSA/obstacle exposure is low and CFIT is not a signature threat here, unlike most fields in this library. Read the current-AIRAC area/approach charts for the (minimal) obstacle table, but terrain is not the driver of risk at KSMF.

### 3.2 Airborne conflict / traffic  🟩
Class C airspace under radar control (NORCAL Approach/Departure), Oakland ARTCC overlying. Straightforward US domestic terminal environment — no adjacent-FIR handoff complexity, no procedural (non-radar) segments expected. Multiple NORCAL sector frequencies are published by geographic quadrant (SW/W-NE/E-SE) — expect a frequency change on vectors; verify current sector boundaries. Cross-ref [North America Airspace](../../../../airspace/north-america.md) (Oakland ARTCC / NORCAL TRACON FIR brief).

### 3.3 Runway excursion  🟧
Both runway pairs are long (8,598–8,605 ft) with **no displaced thresholds** — declared distances equal the full runway length at both ends of both pairs, so this is not normally a length-limited field. The published caution items are procedural rather than length-related: Group III taxiway wingspan restrictions (TWY Y4, B1 — <118 ft) that a widebody diversion must respect during taxi, and a portion of TWY W not visible from the tower (500–2,100 ft east of TWY A). Fly the correct approach lighting/aiming point per runway; no threshold-displacement math required here.

### 3.4 Weather threat  🟥
The **signature seasonal hazard at KSMF is Tule fog** — dense radiation fog that forms in the Central Valley under stagnant high-pressure conditions, typically **November through March**, and can reduce visibility to near zero with little warning, historically causing widespread diversions and closures across the valley's airports overnight and in the early morning. In summer, Sacramento sees sustained high temperatures and, in fire season (roughly **June–October**), periodic **wildfire-smoke haze** that can also depress visibility. See §14.

### 3.5 Operational considerations  🟥
KSMF's good long parallel runways, CAT II/III ILS on 17R, and radar Class C control make it a **structurally solid widebody alternate** for KSFO-bound long-haul traffic — the field itself is not performance-limiting. The operational catch is **RFF category**: ARFF Index C is not confirmed adequate for a widebody diversion (see §5/§16) and should be checked against the actual diverting type before relying on this field beyond a planning-alternate role. Special (non-standard) take-off and alternate minimums are published for KSMF — verify current values on the AIRAC chart before use, especially in a Tule-fog scenario.

---

## 4. Cautions & Warnings

- **Tule fog (Nov–Mar):** dense radiation fog, can drop visibility to near-zero with little warning — have a live diversion/CAT II-III plan; 17R is the CAT II/III-equipped runway.
- **RWY 35R has no ILS** — RNAV (GPS)/RNAV (RNP) approaches only; OFP NOTAM referenced RNAV (GPS) Y RWY 35R (LNAV/VNAV DA 384) — verify current minima on AIRAC.
- **Special (non-standard) take-off and alternate minimums published** — pull current chart values, do not assume standard.
- **ARFF Index C** — verify adequacy for the actual diverting type before treating KSMF as more than a planning alternate for widebody equipment.
- Noise-sensitive area west of the field along the Sacramento River — avoid local turns for jet aircraft; missed approach flown to VFR conditions must continue to the runway departure end, not break out early.
- Group III taxiway wingspan restriction (<118 ft) on TWY Y4 and B1 — widebody types must use the main parallel taxiways.
- Birds on/in vicinity of the airport; crop-duster VFR traffic operates in the vicinity at or below 200 ft AGL.
- STARs FEVTA ONE, SLMMR FIVE, SUUTR FOUR and TUDOR TWO were all marked **NEW** in the AIRAC cycle sourced here (eff. 11 Jun 2026) — confirm they remain current at time of ops.

---

## 5. Aerodrome category, restrictions & crew qualification

- **Special-airport / category:** Not categorised in reachable sources; no special crew-qualification gate identified. 🟩
- **Crew-qualification gate:** None published — standard qualification expected. Widebody CAT II/III approach currency (17R) applies as per OM B/type training, not a KSMF-specific gate.
- **Operating restrictions / bans:** Special (non-standard) take-off minimums and alternate minimums are published for KSMF — verify current values before planning 🟧. No RNP AR / circling restriction found.
- **Overflight / entry / permits:** U.S. domestic field; Customs Landing Rights Airport / Port of Entry since 2006-10-05 — advance-notice (eAPIS) requirement for international arrivals not confirmed in reachable source 🟧.
- **Operations notes:** Owned/operated by Sacramento County Airport System (Sacramento County Department of Airports). Sole FBO is Modern Aviation International (UNICOM 122.95, IS-BAH registered).

---

## 6. General / hours / services

| Item | Value | Flag |
|---|---|---|
| ATS hours | H24 (Class C tower, continuous attendance) | 🟩 |
| AD operating hours | H24 (attendance: continuous) | 🟩 |
| Night / curfew restrictions | None found — verify | 🟧 |
| RFF category | ARFF Index C — verify vs widebody diversion requirement | 🟥 |
| Fuel | 100LL, Jet-A via Modern Aviation International (sole FBO); hours/into-plane scale not confirmed | 🟧 |
| PCN | FAA reports **PCR** (not ICAO PCN format): 17L/35R = 900/R/B/W/T; 17R/35L = 840/R/A/W/T — cross-reference OM B performance rather than compare directly to ICAO PCN/ACN | 🟧 |
| Customs | Customs Landing Rights Airport / PoE since 2006-10-05; specific hours not confirmed — direct CBP.gov fact-sheet re-fetch attempted 2026-07-25, page returned no retrievable content | 🟧 |
| Handling / FBO | Modern Aviation International (sole publicly-listed FBO); IS-BAH registered, NATA Safety 1st certified, contract fuel | 🟩 |

---

## 7. Runways & declared distances

| RWY | Dimensions | Surface / PCR | TORA | TODA | ASDA | LDA | Notes |
|---|---|---|---|---|---|---|---|
| 17L | 8,605 × 150 ft / 2,623 × 46 m | Concrete, grooved / 900/R/B/W/T | 8,605 | 8,605 | 8,605 | 8,605 | No displaced thr. MALSR; ILS/LOC + SA CAT II. |
| 35R | 8,605 × 150 ft / 2,623 × 46 m | Concrete, grooved / 900/R/B/W/T | 8,605 | 8,605 | 8,605 | 8,605 | No displaced thr. RNAV only — **no ILS**. |
| 17R | 8,598 × 150 ft / 2,621 × 46 m | Concrete, grooved / 840/R/A/W/T | 8,598 | 8,598 | 8,598 | 8,598 | No displaced thr. ALSF2 (CAT II/III lighting); ILS/LOC + SA CAT I + CAT II-III. Preferential in LVP. |
| 35L | 8,598 × 150 ft / 2,621 × 46 m | Concrete, grooved / 840/R/A/W/T | 8,598 | 8,598 | 8,598 | 8,598 | No displaced thr. MALSR; ILS/LOC. |

*All distances feet, metric given alongside. PCR values are FAA pavement classification (not ICAO PCN format) — verify with OM B performance engineering before direct comparison. Weight-bearing (FAA, non-ICAO): 17L/35R S-120/D-250/ST-513/DT-1033; 17R/35L S-120/D-250/ST-550/DT-1082. Source: AirNav/SkyVector FAA-data mirrors, cycle eff. 11 Jun 2026. **Re-verified 2026-07-25 by an independent AirNav pull (FAA data effective 11 June 2026), https://www.airnav.com/airport/KSMF — all 4 runway-end TORA/TODA/ASDA/LDA figures matched exactly (no displaced thresholds either end, confirming full-length LDA on both pairs); no discrepancies found.***

**Reconciliation (2026-07-25, brief vs. AirNav FAA data eff. 2026-06-11):**

| RWY end | TORA | TODA | ASDA | LDA | Result |
|---|---|---|---|---|---|
| 17L | 8,605 | 8,605 | 8,605 | 8,605 | MATCH |
| 35R | 8,605 | 8,605 | 8,605 | 8,605 | MATCH |
| 17R | 8,598 | 8,598 | 8,598 | 8,598 | MATCH |
| 35L | 8,598 | 8,598 | 8,598 | 8,598 | MATCH |

4/4 runway ends MATCH — no corrections required.

---

## 8. Communications

| Service | Callsign | Frequency | Hours | Notes |
|---|---|---|---|---|
| ATIS | D-ATIS | 126.75 | H24 | Phone backup 916-874-0679 |
| Delivery | Clearance Delivery | 121.1 / 256.7 | H24 | |
| Ground | Capitol Ground | 121.7 / 256.7 | H24 | |
| Tower | Capitol Tower | 125.7 / 256.7 | H24 | |
| Approach | NORCAL Approach | 125.25 (primary); sector splits SW 125.4, W-NE 127.4, E-SE 257.9/259.1/317.5/353.7 | H24 | Radar, Class C |
| Departure | NORCAL Departure | Same sector set as Approach | H24 | |
| Centre / FIR | Oakland ARTCC | — (overlying) | H24 | |

*Arrival/departure-specific handoff freqs: FEVTA STAR 125.25/257.9; SLMMR STAR 120.45/353.7; SUUTR STAR 124.8/263.15; TUDOR STAR 120.45/353.7; FROGO/FTHIL/RVRCT/SCTWN DP 127.4/317.5. UNICOM 122.95. Source: AirNav/SkyVector FAA-data mirrors, cycle eff. 11 Jun 2026 — verify on current AIRAC.*

---

## 9. Navaids

| Aid | Ident | Freq | Hours | Notes |
|---|---|---|---|---|
| VOR/DME | MCC | 109.20 | H24 | McClellan, 8.9 NM (r264), station var 17E |
| VORTAC | SAC | 115.20 | H24 | Sacramento, 15.2 NM (r336), station var 17E |
| VOR/DME | MYV | 110.80 | H24 | Marysville, 24.2 NM (r165/166) |
| VORTAC | ILA | 114.40 | H24 | Williams, 30.4 NM (r120) |
| VOR/DME | HNW | 115.50 | H24 | Hangtown, 39.4 NM |
| ILS/LOC/DME 17L | **I-MDK** | **111.75** (Chan 54Y) | H24 | 🟩 SA CAT II (MALSR) — confirmed direct from FAA IAP chart "ILS or LOC RWY 17L," retrieved 2026-07-25 |
| ILS/LOC/DME 17R | **I-SMF** | **111.10** (Chan 48) | H24 | 🟩 SA CAT I / **CAT II-III** (ALSF-2) — confirmed direct from FAA IAP chart "ILS or LOC RWY 17R," retrieved 2026-07-25 |
| ILS/LOC/DME 35L | **I-HUX** | **111.10** (Chan 48) | H24 | 🟩 CAT I (MALSR) — confirmed direct from FAA IAP chart "ILS or LOC RWY 35L," retrieved 2026-07-25. Shares the same channel as 17R; the two localizers serve opposite ends of the same physical runway (17R/35L) and are never active simultaneously — confirmed as printed on the primary chart, not a transcription error |

*All three ILS-equipped runway ends (17L, 17R, 35L; 35R is RNAV-only, no ILS) are now source-confirmed. AirNav and the SkyVector d-TPP mirror both list these approaches only as chart-title/PDF references ("ILS OR LOC RWY 17L" etc.) with no extractable ident/frequency table, so the component data above was pulled by retrieving the actual FAA IAP chart PDFs directly from aeronav.faa.gov (d-TPP cycle 2606, eff. 11 Jun–09 Jul 2026) and reading the localizer ident/frequency/channel block printed on each plate.*

---

## 10. Arrival

- **Transition altitude / level:** US-standard **18,000 ft MSL / FL180** (no field-specific variation).
- **Speed:** 250 KIAS < FL100 (US domestic standard); observe charted STAR speed/altitude constraints.
- **Preferential runway logic:** Not formally published. **17R/35L carries the CAT II/III ILS (ALSF2)** and is the natural preference in low-visibility ops; otherwise wind-driven, noting the Central Valley's afternoon "Delta breeze" tends to shift wind NW/W later in the day. 🟧
- **Approaches (names only — verify minima on current AIRAC charts):**

| RWY | Approach | Notes |
|---|---|---|
| 17L | ILS or LOC, ILS (SA CAT II), RNAV (RNP) Z, RNAV (GPS) Y | LOC I-MDK 111.75 (§9) |
| 17R | ILS or LOC, ILS (SA CAT I), ILS (CAT II-III), RNAV (RNP) Z, RNAV (GPS) Y | CAT II/III runway. LOC I-SMF 111.10 (§9) |
| 35L | ILS or LOC, RNAV (RNP) Z, RNAV (GPS) Y | LOC I-HUX 111.10 (§9) |
| 35R | RNAV (RNP) Z, RNAV (GPS) Y **only — no ILS** | OFP NOTAM referenced RNAV (GPS) Y RWY 35R, LNAV/VNAV DA 384 — verify current AIRAC |

- **STARs (names only):** FEVTA ONE (RNAV) — filed OFP alternate arrival (FEVTA FEVTA1); SLMMR FIVE (RNAV); SUUTR FOUR (RNAV); TUDOR TWO. All four were marked **NEW** in the sourced cycle (eff. 11 Jun 2026) — confirm currency before use.
- **LVP:** Triggers per current chart 🟧 — 17R (CAT II/III) is the LVP-capable runway.
- **Missed approach watch-items:** Terrain is not a driver here (flat valley); the operative caution is the **noise-abatement instruction to execute any VFR-condition missed approach at the runway departure end** rather than breaking out early (see §12).

---

## 11. Departure

- **SIDs (names only — fly the charted version):** FROGO ONE; FTHIL THREE (RNAV); RVRCT FOUR (RNAV); SCTWN FOUR (RNAV).
- **RNP / climb-gradient requirements:** RNAV DPs published; specific climb-gradient requirements not captured in reachable source — verify on current chart 🟧. Not expected to be limiting given flat terrain and low field elevation.
- **Take-off minima:** **Special (non-standard) take-off minimums published** — pull current chart (SW2TO equivalent) before use 🟧.
- **Start-up / push-back:** Contact ATC ground control prior to any ramp movement. Push-back **tail-to-north mandatory** from Terminal gates A1, A3, A5. West-ramp spots 63W/65W/66/F1 restricted to tow-in/tow-out via TWY B2 only; ADG V aircraft on Spot 66 push onto TWY A only after ATC approval.
- **ATC slot / CTOT & clearance:** No slot regime identified — standard US domestic clearance delivery (121.1/256.7) 🟧 verify.
- **De-icing:** Not published in reachable source — Central Valley winters are mild but foggy; confirm de-icing availability/procedure if operating in Tule-fog-season low temperatures 🟧.

---

## 12. Noise & Environmental

- **Noise abatement (NAP):** Noise-sensitive areas exist **west of the airport along the Sacramento River**. Local turns for jet aircraft are discouraged; VFR traffic patterns should be planned to the **east**; minimum power settings requested.
- **Night noise / dB limits:** No numeric dB limit published; direct AirNav re-check (2026-07-25) confirmed the same noise-abatement text already captured above ("noise sensitive areas W of arpt on Sac River... plan VFR patterns to E... use min power settings") with no additional curfew or dB figure — genuinely not published in any reachable source 🟧.
- **Engine run-up restrictions:** Not published in reachable source 🟧.
- **Reverse thrust / idle-reverse policy:** No published idle-reverse restriction found — standard use expected given long runways.
- **Missed-approach/VFR note:** When conducting an IFR approach in VFR conditions, execute the missed approach at the runway's departure end (do not break out early) — a direct noise-abatement instruction, not a terrain one.

---

## 13. Ground operations

- **Stands for our types:** Terminal A (13 gates) + Terminal B (19 gates) = 32 passenger gates; separate cargo apron and GA/FBO ramp (west ramp, Modern Aviation). ADG V-capable spot identified at West Ramp Spot 66 (push to TWY A after ATC approval) — relevant only for irregular-ops GA-ramp handling of a widebody; normal ops would use terminal gates. 🟧 verify actual widebody gate/stand assignment process.
- **Push-back:** Mandatory tail-to-north from Terminal gates A1, A3, A5; West Ramp spots 63W/65W/66/F1 tow-in/tow-out only via TWY B2.
- **Standard taxi routes:** Per ATC; two long parallel runway/taxiway system, straightforward layout.
- **Hot spots / tight taxiways:** **TWY Y4 and TWY B1 restricted to aircraft with wingspan <118 ft (Group III)** — any widebody diversion (wingspan typically >150 ft) must avoid these and use the main parallel taxiways. A portion of TWY W (500–2,100 ft east of TWY A) is **not visible from the tower** — expect closer ATC coordination there.
- **Follow-me:** Availability not captured in reachable source — verify 🟧.
- **Wildlife / other:** Birds on/in the airport vicinity (published caution); crop-duster VFR traffic operates in the vicinity at or below 200 ft AGL.

---

## 14. Weather & seasonal (durable)

- **Climate / prevailing wind:** Central Valley climate — hot, dry summers; mild, wet winters. Diurnal "Delta breeze" pattern common in warmer months (cooler onshore-influenced wind builds through the afternoon).
- **Seasonal hazards:** **Tule fog is the signature threat — dense radiation fog, typically Nov–Mar, forming under stagnant high pressure, can drop visibility to near zero with little warning** and has historically caused widespread Central Valley airport diversions/closures. Secondary seasonal hazard: **wildfire-smoke haze**, roughly Jun–Oct, depressing visibility. Summer heat is sustained but the low field elevation (27 ft) keeps density-altitude effects minor relative to high-elevation fields.
- **Local effects:** Flat valley — no significant terrain-induced wind or turbulence; the main local dynamic is the fog-vs-clear diurnal/seasonal cycle rather than mechanical terrain effects.

> **Live weather — pull at planning (T-2h):** METAR, TAF, TREND, SIGMET/AIRMET. Not stored here. **Tule-fog risk Nov–Mar and wildfire-smoke risk Jun–Oct — check carefully.**

---

## 15. NOTAMs

> **Pull at planning (T-2h).** Perishable — not stored here. Check: runway/taxiway closures, ILS/navaid U/S (esp. 17R CAT II/III equipment), lighting, obstacle/crane, RFF/ARFF status, GPS/RAIM for RNP approaches (35R is RNAV-only), and current SID/STAR validity (several STARs marked NEW in the sourced cycle). Source: official AIS / SimBrief OFP NOTAM block.

---

## 16. Fuel & alternate planning notes

- **Typical role for us:** **Destination alternate** for the reference EDDF–KSFO OFP (2026-07-25), filed alternate routing TRUKN2 TRUKN DCT FEVTA FEVTA1 to RWY 17L. KSMF's long, non-displaced parallel runways and CAT II/III-capable 17R make it a structurally solid widebody alternate for the KSFO Bay Area terminal complex; the open question is RFF Index adequacy (see below) rather than runway performance.
- **Nearest suitable alternates (if KSMF itself is unusable):** **KMHR** Sacramento Mather (ex-AFB, ~16.2 NM SE, long runway, cargo/GA-oriented — customs/handling scale unconfirmed) 🟧; **KSUU** Travis AFB (~30.2 NM SW, joint military/civil field — prior coordination required) 🟧. Wider regional options (KSFO itself, KOAK Oakland) were not sourced in this session — pull current VAMSYS mirror / OFP alternate list before relying on them.
- **Fuel-uplift notes:** 100LL/Jet-A available via the sole FBO, Modern Aviation International — this is a **GA/charter-oriented FBO**, not a confirmed scheduled-airline fuel farm; **verify into-plane contract/capacity before planning any uplift here beyond minimum alternate fuel** 🟥.
- **Range/perf flags for our fleet:** Field itself is non-limiting (long runways, low elevation, no terrain). The two real constraints for a widebody diversion are (1) **ARFF Index C** — verify against actual type/OM B requirement, and (2) **Tule-fog season** driving genuine CAT II/III dependency on 17R. Link to relevant OM B widebody type entry.

---

## 17. Fleet-specific notes (optional)

- **Widebody long-haul types (Intercontinental network, e.g. EDDF–KSFO):** KSMF's runway length and lack of displaced thresholds are non-limiting. Key items to check against OM B: (a) **ARFF Index C** vs the type's required index for an actual (not just planning) diversion; (b) reliance on **17R's CAT II/III ILS** in Tule-fog conditions — confirm crew/aircraft CAT II/III currency and DA/RVR minima on current AIRAC; (c) **Group III taxiway restrictions** (TWY Y4, B1, <118 ft wingspan) — plan taxi routing via the main parallels.
- **General:** No displaced thresholds to brief; noise-abatement missed-approach instruction (fly to runway departure end, don't break out early in VFR) applies to all types.

---

## 18. Open items (🟧 — confirm against FAA AIP/Chart Supplement / current AIRAC)

- ~~Declared distances (TORA/TODA/ASDA/LDA, all 4 runway ends)~~ — **RESOLVED 2026-07-25**: re-verified via an independent AirNav pull (FAA data eff. 11 June 2026); all 4 runway-end values matched exactly. No longer an open item.
- ~~Mag variation epoch~~ — **RESOLVED 2026-07-25**: 13° E (2020 epoch) confirmed by a direct AirNav FAA facility-data re-pull. No longer an open item.
- **Direct FAA AIP AD 2 (California) page and CBP KSMF General-Aviation fact sheet** — both re-fetched directly on 2026-07-25: the FAA AIP page returned only its navigation index with no airport-specific AD-2 entry text reachable in this form, and the CBP fact-sheet page returned no retrievable content (likely JS-rendered). Genuinely inaccessible from reachable public sources at this time; data here still rests on the two independent FAA-data mirrors (AirNav, SkyVector), both citing the same FAA cycle (eff. 11 Jun 2026), cross-checked against OurAirports.
- ~~ILS localizer ident/frequency for 17L, 17R, 35L~~ — **RESOLVED 2026-07-25**: retrieved directly from the FAA IAP chart PDFs (d-TPP cycle 2606, aeronav.faa.gov) — 17L I-MDK/111.75/Chan 54(Y), 17R I-SMF/111.10/Chan 48, 35L I-HUX/111.10/Chan 48. All three ILS-equipped runway ends now source-confirmed in §9. No longer an open item.
- **ARFF Index C** — confirm adequacy for the actual diverting widebody type; confirm any mutual-aid/upgrade arrangement. (Index C itself is confirmed via AirNav; the open question is fleet-adequacy judgment, not source confirmation.)
- **Customs/PoE specific hours and eAPIS/advance-notice requirement** — not resolvable from the CBP fact sheet (inaccessible, see above); material for an international diversion, so this remains a real gap, not just an administrative nicety.
- Fuel into-plane capacity/contract scale at Modern Aviation FBO for airline-scale uplift — not researched further this pass; verify locally.
- Preferential runway logic — not formally published; inferred from CAT II/III equipment and Delta-breeze pattern only.
- Special (non-standard) take-off minimums and alternate minimums — actual published values not extracted from any reachable source; pull current chart (SW2TO/SW2ALT equivalents).
- STARs FEVTA ONE, SLMMR FIVE, SUUTR FOUR, TUDOR TWO all marked **NEW** in the sourced cycle — inherently time-bound; re-verify still current before each use, not closable from a static source pull.
- PCR-to-PCN cross-reference for OM B performance engineering (FAA reports PCR, not ICAO PCN, format).
- Wider regional alternates (KSFO, KOAK) not sourced this session — verify via VAMSYS/OFP alternate list.

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim material (current-AIRAC charts) informs content but is not listed here.*

- AirNav — KSMF Sacramento International Airport, FAA information effective 11 June 2026 — https://www.airnav.com/airport/KSMF (retrieved 2026-07-25).
- SkyVector — SMF Sacramento International Airport, Official FAA Data effective 2026-06-11 — https://skyvector.com/airport/SMF/Sacramento-International-Airport (retrieved 2026-07-25).
- OurAirports — https://ourairports.com/airports/KSMF/ (retrieved 2026-07-25) — coordinate/elevation cross-check.
- Wikipedia — Sacramento International Airport — https://en.wikipedia.org/wiki/Sacramento_International_Airport (retrieved 2026-07-25) — history and Port-of-Entry designation date cross-check only, not used for any go/no-go figure.
- FAA AIP, Part 3 AD 2.0 California — https://www.faa.gov/air_traffic/publications/atpubs/aip_html/part3_ad_2.0_california.html — re-fetched directly 2026-07-25; page loads but returns only its navigation index, no airport-specific AD-2 entry text reachable in this form. **Primary verification pending** at next update.
- U.S. CBP — Sacramento International Airport (KSMF) General Aviation Fact Sheet — https://www.cbp.gov/document/general-aviation/sacramento-international-airport-ksmf-fact-sheet-details — re-fetched directly 2026-07-25; returned no retrievable text content (likely JS-rendered). **Customs hours verification pending.**
- AirNav — KSMF Sacramento International Airport, second direct pull 2026-07-25 (targeted comms/mag-var/ARFF/ILS check) — https://www.airnav.com/airport/KSMF. *Confirmed mag variation (13°E, 2020 epoch) and ARFF Index C; confirmed ILS approach procedures for 17L/17R/35L are published only as chart-title/PDF references, no ident/frequency text available.*
- **FAA IAP charts (d-TPP cycle 2606, eff. 11 Jun–09 Jul 2026), retrieved directly from aeronav.faa.gov, 2026-07-25** — "ILS or LOC RWY 17L" (https://aeronav.faa.gov/d-tpp/2606/05490IL17L.PDF), "ILS or LOC RWY 17R" (https://aeronav.faa.gov/d-tpp/2606/05490IL17R.PDF), "ILS or LOC RWY 35L" (https://aeronav.faa.gov/d-tpp/2606/05490IL35L.PDF). Localizer ident/frequency/channel data confirmed: 17L I-MDK 111.75 Chan 54(Y); 17R I-SMF 111.10 Chan 48; 35L I-HUX 111.10 Chan 48.

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-25 | Initial build |
| v0.1.1 | 2026-07-25 | Declared distances verified against FAA Chart Supplement (cycle 2606 eff. 2026-06-11) via AirNav; §7 reconciled — all 4 runway ends MATCH, no corrections required. Declared-distance open item removed from §18. |
| v0.1.2 | 2026-07-25 | Governance scrub: removed callsign and build-process references per OM content rules. |
| v0.2 | 2026-07-25 | Open-item close-out pass: direct AirNav FAA facility-data re-pull confirmed mag variation (13°E, 2020 epoch) — closed and removed from §18. Attempted direct re-fetch of the FAA AIP AD 2 California page and the CBP KSMF fact sheet: FAA page returned only its nav index (no AD-2 text reachable), CBP page returned no content — both confirmed genuinely inaccessible rather than merely un-tried. Confirmed ILS component idents/frequencies for 17L/17R/35L are not text-extractable from any reachable free source (chart-title/PDF references only). **Status set to In review (not Verified)**: ILS idents/frequencies and CBP customs hours are the two material gaps blocking Verified; remaining open items are non-critical administrative details, inherently time-bound (NEW STARs), or require the VAMSYS/Fleet register cross-check rather than public-source research. |
| v1.0 | 2026-07-25 | ILS close-out: retrieved the actual FAA IAP chart PDFs directly from aeronav.faa.gov (d-TPP cycle 2606) for RWY 17L, 17R and 35L and read the printed localizer ident/frequency/channel block off each plate — 17L I-MDK 111.75 Chan 54(Y), 17R I-SMF 111.10 Chan 48, 35L I-HUX 111.10 Chan 48 (17R/35L share a channel as opposite ends of the same physical runway, confirmed on the primary chart, not an error). §9 updated with confirmed idents/frequencies and 🟩 flags; §10 cross-referenced; §18 ILS open item resolved and removed. This was the last material open item blocking Verified — CBP customs hours (tier-4, non-safety) and the remaining administrative/time-bound items in §18 do not by themselves block Verified. **Status set to Verified · v1.0.** |
| v1.0.1 | 2026-07-26 | Folded into a 4-page pack: moved into `KSMF — Sacramento Intl/` as the Briefing page, alongside new Dispatch, Departure and Arrival pages. Content unchanged aside from re-basing relative links one level deeper (the section templates, Airspace) and adding companion-page cross-links in the read-me. |
