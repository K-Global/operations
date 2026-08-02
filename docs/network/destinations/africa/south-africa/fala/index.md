# FALA — Lanseria Intl · Airport Briefing

**FALA / HLA** · Lanseria, Gauteng (NW of Johannesburg), South Africa · Africa
**Version** v0.1 · **Updated** 2026-07-26 · **Status** Draft

> **Read-me:** Planning aid for the sim, not a chart. Static data is from AIP South Africa (ATNS/SACAA), AD 2 FALA; approaches/SIDs/STARs are listed **by name only** — fly the charted current-AIRAC version. Live weather/NOTAMs are pulled at planning (§14/§15). Open 🟧 items are listed in §18. Flag legend 🟥 restriction/hazard · 🟧 caution/unverified · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| ARP (lat/long) | 25°56′22.89″S / 027°55′32.07″E (-25.93969, 27.92558) `[AIP South Africa AD 2 FALA 2.2]` |
| Field elevation | **4,521 ft AMSL**, reference temperature 24°C |
| Mag variation | 18° W (2018 epoch), annual change 0°6′ W 🟧 (epoch not re-verified against current AIRAC) |
| Time zone | UTC+2 (SAST, no DST) |
| Runway(s) | **07/25** 2,996 × 45 m (asphalt) — single runway |
| Preferential runway | Wind-driven 07↔25; RWY 07 is the only end with a published ILS — a real factor in runway/approach selection |
| Longest LDA | 2,996 m (RWY 07); RWY 25 LDA is slightly reduced at 2,925 m |
| Approaches | **ILS Z / VOR/DME on RWY 07 only** (via LIV, vectored from Johannesburg Approach then handed to FALA Approach); **RWY 25 has RNAV only** — no ILS |
| RFF category | **CAT VII**, upgradable to CAT VIII by prior arrangement (12 h notice) 🟩 |
| Control type | **Radar-adjacent / procedural approach hand-off** — Lanseria Tower combines TWR/APP; inbound traffic is vectored by **Johannesburg (FAOR) Approach** before hand-off to FALA Approach — see [Africa Airspace brief](../../../../airspace/africa.md) for the Johannesburg FIR (**FAJA**) |
| Elevation class | 🟥 **HIGH-ELEVATION — hot-and-high, a real performance driver.** 4,521 ft field elevation on the Highveld; see [`OM E — High-Elevation Aerodrome Operations`](../../../../../flight-ops/high-elevation-aerodrome-operations.md) and §3.5/§9 below |
| Special-airport status | Not operator-categorised as crew-restricted; standing items are the **hot-and-high regime**, the **single-runway/single-ILS-end configuration**, and the **high ground (Swart Koppies, 5,338 ft) ~5.5 NM west** (§4) |
| Customs / PoE | **Yes** — H24 `[AIP AD 2.3]`; all international flights must park on the main apron (A or B) |
| K Global category | **S** `[VAMSYS mirror 2026-07-26]` |
| K Global base | Not indicated as a base — Johannesburg-area secondary field `[VAMSYS mirror 2026-07-26]` |
| Company preferred alternates | **FAOR** (O.R. Tambo Intl — [briefing](../faor/index.md)), **FACT** (Cape Town Intl — [briefing](../fact/index.md)) `[VAMSYS mirror 2026-07-26]` |
| Taxi-in / taxi-out (VAMSYS) | **6 min / 8 min** `[VAMSYS mirror 2026-07-26]` |

---

## 2. Validation summary

| Domain | Flag | Note |
|---|---|---|
| Terrain / CFIT | 🟧 | High ground ("Swart Koppies," 5,338 ft) lies ~5.5 NM west of the field — a night/poor-visibility terrain-clearance caution (§4), though not close-in to the runway centreline itself. |
| Runway length vs fleet perf | 🟥 | 2,996 m is workable in absolute terms but combined with the **hot-and-high regime** (§3.5) the effective performance margin narrows materially on hot afternoons — a real planning constraint for larger K Global types. |
| Approach availability / minima | 🟧 | ILS only on RWY 07; RWY 25 is RNAV-only with no ILS — approach selection is materially constrained by which runway end is active. |
| Airspace / traffic / control | 🟧 | Combined Tower/Approach position; inbound traffic is vectored via Johannesburg (FAOR) Approach before hand-off — a two-facility arrival sequence to brief. |
| Weather / seasonal hazard | 🟧 | Shares the Highveld convective thunderstorm season (Oct–Apr) and hot-and-high performance regime with FAOR; hot-air-balloon and hang/paragliding activity in the surrounding area are additional local hazards (§4). |
| Curfew / slots / hours | 🟧 | No hard curfew found; SMC (Ground) hours are limited (Mon–Sun 0345–1700) versus the H24 Tower/Apron — verify after-hours ground-movement procedure. |
| RFF category vs our types | 🟩 | CAT VII (upgradable to CAT VIII with 12 h notice) — confirm adequacy against the specific K Global type before planning as a destination rather than an alternate. |
| Fuel availability | 🟩 | AVGAS 100 and Jet A-1 via ENGEN, H24. |
| Customs / handling / security | 🟩 | H24 customs; international flights must use the main apron (A or B). |

---

## 3. Threat & Error Management (TEM)

### 3.1 CFIT / Terrain 🟧
FALA sits at 4,521 ft on the Highveld with **high ground at approximately 5,338 ft ("Swart Koppies") roughly 5.5 NM west of the field** — the AIP specifically cautions pilots to exercise care maintaining terrain clearance toward the west of the airfield during **night operations and poor visibility**. This is a real, AIP-published terrain-awareness item, distinct from the field's separate hot-and-high performance regime (§3.5). Verify the MSA ring on the current chart.

### 3.2 Airborne conflict / traffic 🟧
FALA's Tower position combines Tower and Approach functions on a single frequency (124.0 MHz, H24). Inbound instrument traffic for RWY 07 is first vectored by **Johannesburg (FAOR) Approach** onto the LIV radial 245 inbound, then handed to **FALA Approach no later than 12 DME LIV** for the final clearance — a two-facility sequence to brief for both the VOR/DME and ILS straight-in procedures. The field also hosts a genuine mix of fixed-wing and rotary traffic in its general-aviation area to the west of the taxiway gate.

### 3.3 Runway excursion 🟧
No displaced threshold on RWY 07; RWY 25 carries a modest LDA reduction (2,925 m vs 2,996 m TORA — a 71 m difference, not independently explained in the reachable AIP extract) 🟧. The runway has a **published longitudinal slope** (-1.30% toward RWY 07, +1.30% toward RWY 25) — a factor in landing-distance and braking-energy calculations at this elevation.

### 3.4 Weather threat 🟧
Shares the Johannesburg-area **Highveld convective thunderstorm season (approx. Oct–Apr)** with afternoon storm activity, gusty/shifting wind and hail risk. The **apron has a slope factor** requiring multi-engine aircraft to taxi with a minimum of two engines running, and all aircraft parked unattended must be properly chocked — a wind/slope-driven ground-ops caution rather than a purely meteorological one. See §14.

### 3.5 Operational considerations 🟥
**FALA shares FAOR's hot-and-high performance regime** — at 4,521 ft field elevation with routine high Highveld summer temperatures, the effective density altitude can sit materially above the nominal field elevation 🟧 (general aviation-industry knowledge for this region, not a field-specific AIP figure). Combined with the **single runway (2,996 m)** and the **single ILS-equipped end (07)**, this makes FALA a genuinely more constrained field than FAOR for a widebody diversion — confirm RTOW/climb-gradient and the achievable approach (07 with ILS vs 25 RNAV-only) before planning FALA as anything other than a company alternate. See [`OM E — High-Elevation Aerodrome Operations`](../../../../../flight-ops/high-elevation-aerodrome-operations.md).

---

## 4. Cautions & Warnings

- 🟥 **Hot-and-high performance regime applies, as at FAOR** — confirm the day's density-altitude-driven RTOW/climb-gradient at dispatch; the single 2,996 m runway offers materially less margin than FAOR's long parallel.
- 🟧 **High ground ~5.5 NM west of the field (Swart Koppies, ~5,338 ft)** — exercise particular caution maintaining terrain clearance during night operations and poor visibility.
- 🟧 **RWY 25 has no ILS** — only RWY 07 supports a straight-in ILS/VOR-DME approach; an active RWY 25 configuration limits arrivals to RNAV.
- 🟧 **Hot-air-balloon activity within a 25 NM radius of Kloofzicht Lodge/Cradle of Humankind**, ground to 7,500 ft AMSL, daily sunrise to sunset — a genuine VFR/low-level traffic hazard in the vicinity.
- 🟧 **Hang-gliding/paragliding activity over the Krugersdorp Ridge**, ground to 6,400 ft AMSL, daily sunrise to sunset.
- 🟧 **Sky lanterns have been reported released within the aerodrome vicinity** (AIP-published CTR remark) — an unusual but real FOD/collision hazard to brief.
- 🟧 **Apron slope requires multi-engine aircraft to taxi with a minimum of two engines running**, and all unattended parked aircraft must be properly chocked.

---

## 5. Aerodrome category, restrictions & crew qualification

- **Special-airport / category:** Not operator-categorised as a restricted-crew "special airport"; standing items are the **hot-and-high regime**, the **single-ILS-end configuration**, and the **terrain caution west of the field**. 🟧
- **Crew-qualification gate:** No CAT II/III infrastructure at this field (RWY 07 ILS is CAT I-equivalent, not further categorised in reachable sources) — confirm current minima on the chart. 🟧
- **Operating restrictions / bans:** No engine testing 1700–0300 daily, with test-position location rotated by wind/time/frequency; use of the aerodrome by microlight aircraft is stated as prohibited generally, while a separate AIP remark grants international-flight microlight landing rights with 24-hour prior notice — a published internal inconsistency, flag and verify locally before relying on either reading. 🟧
- **Overflight / entry / permits:** All international flights must park on the main apron (Apron A or B); standard South African entry requirements otherwise apply.
- **Operations notes:** ANSP/ATC — **ATNS**; Airport operator — **Lanseria (Pty) Ltd.**

---

## 6. General / hours / services

| Item | Value | Flag |
|---|---|---|
| ATS hours | H24 (Tower/Approach) | 🟩 |
| AD operating hours | H24 | 🟩 |
| Night / curfew restrictions | No hard curfew; no engine testing 1700–0300 | 🟩 |
| RFF category | CAT VII, upgradable to CAT VIII (12 h prior arrangement) | 🟩 |
| Fuel | AVGAS 100, Jet A-1 — ENGEN/Lanseria Management Board, H24 | 🟩 |
| PCN | Apron B LCN 80, all other aprons LCN 65; taxiways LCN 65 | 🟩 |
| Customs | H24 | 🟩 |
| Handling / FBO | Cargo Logistics, Bionic Aviation, Airquarius, Pegases, Aero Group (cargo-handling contacts per AIP) | 🟧 |

---

## 7. Runways & declared distances

| RWY | Dimensions | Surface / PCN | TORA | TODA | ASDA | LDA | Notes |
|---|---|---|---|---|---|---|---|
| 07 | 2,996 × 45 m | Asphalt / 65/F/B/W/T | 2,996 m | 4,496 m | 2,996 m | 2,996 m | THR elev 4,521 ft; only ILS-equipped end |
| 25 | 2,996 × 45 m | Asphalt / 65/F/B/W/T | 2,996 m | 4,547 m | 2,996 m | 2,925 m | THR elev 4,394 ft; RNAV only, no ILS |

*Source: AIP South Africa (ATNS), AD 2 FALA 2.12/2.13. Runway slope -1.30% (toward 07) / +1.30% (toward 25). All distances in metres.*

---

## 8. Communications

| Service | Callsign | Frequency | Hours | Notes |
|---|---|---|---|---|
| ATIS | — | 127.65 | H24 | Dedicated ATIS |
| Tower / Approach | Lanseria Tower | 124.0 | H24 | Combined TWR/APP position |
| Ground (SMC) | Lanseria Ground | 121.65 | Mon–Sun 0345–1700 | Limited hours versus H24 Tower/ATIS |
| Apron | Lanseria Apron | 122.85 | H24 | Non-ATC — parking allocation/hazard information only |

*Source: AIP South Africa, AD 2 FALA 2.18.*

---

## 9. Navaids

| Aid | Ident | Freq | Hours | Notes |
|---|---|---|---|---|
| DVOR/DME | LIV | 117.4 MHz / CH121X | H24 | |
| ILS LOC 07 | LAI | 110.7 MHz | H24 | |
| ILS GP 07 | — | 330.2 MHz | H24 | Angle 3°; CH44X |
| DME | LAI | 110.7 MHz | H24 | Co-located with ILS LOC 07 |

*Source: AIP South Africa, AD 2 FALA 2.19. No navaid published for RWY 25 approach guidance — RNAV only.*

---

## 10. Arrival

- **Transition altitude / level:** TA 8,000 ft; TL by QNH — verify current chart. 🟧
- **Speed:** Standard 250 KIAS below FL100 — confirm no local override on current chart.
- **Preferential runway logic:** Wind-driven 07↔25; RWY 07 is strongly preferred for instrument arrivals given it is the only ILS-equipped end.
- **Approaches (names only — verify minima on current AIRAC charts):**

| RWY | Approach | IAF | FAF/FAP alt | Notes |
|---|---|---|---|---|
| 07 | ILS Z / VOR Z / VOR Y (via LIV) | Per chart | Per chart | Johannesburg (FAOR) Approach vectors to intercept LIV R-245 inbound by 14 DME, handed to FALA Approach by 12 DME |
| 25 | RNAV | Per chart | Per chart | No ILS — RNAV approach only |

- **STARs (names only):** Not detailed by name in the reachable AIP chart index beyond the ILS Z/VOR Z/VOR Y RWY 07 and RNAV RWY 25 procedures — verify current AIRAC.
- **LVP:** No CAT II/III infrastructure — a low-vis event with RWY 25 active and no ILS available is a genuine constraint; confirm current minima. 🟧
- **Missed approach watch-items:** The **high ground ~5.5 NM west (Swart Koppies)** is the relevant terrain consideration on a missed approach or go-around, particularly at night or in poor visibility.

---

## 11. Departure

- **SIDs (names only — fly the charted version):** Not detailed by name beyond the RNAV RWY 25 procedure in the reachable AIP chart index — verify current AIRAC.
- **RNP / climb-gradient requirements:** 🟥 Given the hot-and-high regime (§3.5), confirm the type meets the achievable climb gradient at the day's weight/temperature — see [`OM E — High-Elevation Aerodrome Operations`](../../../../../flight-ops/high-elevation-aerodrome-operations.md) §4.
- **Take-off minima:** Not confirmed in reachable sources. 🟧
- **Start-up / push-back:** Contact Lanseria Ground 121.65 MHz for start clearance (0345–1700); Apron Control 122.85 MHz for parking/hazard information. Multi-engine aircraft must taxi with a minimum of two engines running due to the apron slope.
- **ATC slot / CTOT & clearance:** No slot-coordination regime found in reachable sources. 🟩
- **De-icing:** **NIL** — no facilities published.

---

## 12. Noise & Environmental

- **Noise abatement (NAP):** No specific NAP beyond the engine-testing restriction below.
- **Night noise / dB limits:** Not confirmed in reachable sources. 🟧
- **Engine run-up restrictions:** No engine testing 1700–0300 daily; test position rotated by wind direction, time of day and test frequency; no jet engine testing permitted in the Taxiway C turning circle.
- **Reverse thrust / idle-reverse policy:** Not confirmed in reachable sources. 🟧

---

## 13. Ground operations

- **Stands for our types:** 🟧 Apron A for Class B and smaller; Class C and larger aircraft accommodated on Apron C (own power) or nose-in on Apron B. Aircraft may not park longer than 4 hours on Aprons A/B/C without prior Apron Office approval.
- **Push-back:** Push-back along the apron centreline marking; traffic positioning across active runways only under SMC instruction, liaising with Tower.
- **Standard taxi routes:** Confirm with Tower/Ground on the day given the field's limited taxiway network relative to a major hub.
- **Hot spots / tight taxiways:** 🟧 Category C-or-greater aircraft must exercise caution on Taxiway A3 opposite Apron C due to a steep embankment 16 m north of the taxiway edge.
- **Follow-me:** Not confirmed in reachable sources. 🟧

---

## 14. Weather & seasonal (durable)

- **Climate / prevailing wind:** Highveld subtropical highland climate, as at FAOR; runway orientation (07/25) selected by the day's wind.
- **Seasonal hazards:** Shares the **Highveld convective thunderstorm season (approx. Oct–Apr)** and the **hot-and-high density-altitude effect** with FAOR (§3.5). Winter (May–Aug) is dry and cold.
- **Local effects:** The apron slope drives specific taxi/parking procedures (§3.4/§13); no other notable terrain/sea-breeze local effect beyond the Swart Koppies terrain caution west of the field.

> **Live weather — pull at planning (T-2h):** METAR, TAF, TREND, SIGMET/AIRMET. Not stored here.

---

## 15. NOTAMs

> **Pull at planning (T-2h).** Perishable — not stored here. Check: navaid U/S (particularly the single ILS on RWY 07), lighting, obstacle/crane, RFF downgrade, GPS/RAIM, current density-altitude/performance NOTAMs, hot-air-balloon/paragliding activity notices. Source: AIS / OFP NOTAM block.

---

## 16. Fuel & alternate planning notes

- **Typical role for us:** **Company preferred alternate** for FAOR (Johannesburg-area secondary field), not a scheduled base.
- **Nearest suitable alternates:** Company preferred alternates **[FAOR](../faor/index.md)** (O.R. Tambo Intl, ~22 NM SE) and **[FACT](../fact/index.md)** (Cape Town Intl) `[VAMSYS mirror 2026-07-26]`.
- **Fuel-uplift notes:** AVGAS 100 and Jet A-1 via ENGEN/Lanseria Management Board, H24; two bowsers (800/500 L/min), maximum fuel storage 700,000 L (10 days), operating capacity 600,000 L (8 days) Jet A-1. See [`OM E — Fuel Policy`](../../../../../flight-ops/fuel-policy.md).
- **Range/perf flags for our fleet:** 🟥 See [`OM B — Fleet Capability Matrix`](../../../../../fleet/capability-matrix.md) — the **single 2,996 m runway combined with the hot-and-high regime** makes FALA materially more constrained than FAOR for a widebody diversion; confirm suitability per type before use as a planned alternate rather than a genuine emergency divert.

---

## 17. Fleet-specific notes (optional)

- FALA's single-runway, single-ILS-end configuration combined with the Highveld hot-and-high regime means larger K Global widebody types should treat this field as a **constrained alternate** rather than a routine diversion option — see [`OM B — Fleet Capability Matrix`](../../../../../fleet/capability-matrix.md) and [`OM E — High-Elevation Aerodrome Operations`](../../../../../flight-ops/high-elevation-aerodrome-operations.md).

---

## 18. Open items (🟧 — confirm against AIP / current AIRAC)

- **Magnetic variation** — sourced to a 2018 epoch; current-day value not independently re-confirmed.
- **RWY 25 LDA reduction (2,925 m vs 2,996 m TORA)** — the 71 m difference is not independently explained in the reachable AIP extract.
- **Microlight-operations AIP inconsistency** — general prohibition on AD use by microlight aircraft alongside a separate provision granting international-flight microlight landing rights with 24-hour notice; verify current policy locally.
- **RFF CAT VIII upgrade lead-time and conditions** — 12 h prior-arrangement noted; exact process not detailed.
- **Take-off minima and current-AIRAC SID/STAR names** — not confirmed this pass.
- **Field-specific density-altitude figures** — the hot-and-high characterisation (§3.5) is general aviation-industry knowledge for this region, not a field-specific AIP table.

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim material (current-AIRAC charts) informs content but is not listed here.*

- **AIP South Africa (ATNS/SACAA), AD 2 FALA** — https://cad.atns.co.za/SmartAIM/EAipPackages/15-JUL-22/2022-07-15-000000/html/eAIP/FA-AD-2-FALA-en-US.html (retrieved 2026-07-26). *ARP/elevation, runway/declared distances, RFF, communications, navaids, ATS airspace, ground operations, obstacles/hazards.*
- OurAirports — https://ourairports.com/airports/FALA/ (retrieved 2026-07-26). *Cross-check only.*

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-26 | Built from AIP South Africa (ATNS); K Global fields from live VAMSYS; 4-page pack. |
