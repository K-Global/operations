# CYZF — Yellowknife (Yellowknife Airport) · Airport Briefing

**CYZF / YZF** · Yellowknife, Northwest Territories, Canada · North America
**Version** v0.1.3 · **Updated** 2026-07-26 · **Status** Draft — provisional (CFS-derived, dated cycle — primary AIRAC verification pending; folded into a 4-page pack 2026-07-26 — see Dispatch/Departure/Arrival pages and Change Log)

> **Read-me:** Planning aid for X-Plane 11, not a chart. Built from a public mirror of the **Canada Flight Supplement (CFS)** AD/facility page for CYZF (Nav Canada AIRAC cycle effective 21 MAR 2024 – 16 MAY 2024 — **not current-AIRAC; re-verify before use**), cross-checked against OurAirports and SkyVector. Approaches/SIDs/STARs are listed **by name only** — fly the charted current-AIRAC version. Live weather/NOTAMs are pulled at planning (§14/§15). Open 🟧 items are in §18. **Role:** primary western-Arctic **ETOPS/EDTO** enroute alternate and the ETP-exit alternate cited on the reference **EDDF–KSFO OFP** (2026-07-25) (OFP §9: CYZF, WX MIN 600-3219, FCST 600-4825 — OFP-context figures, not AIP-sourced, carried here for traceability only). Cross-link: the [Arctic area brief](../../../../airspace/arctic.md) (§8 diversion table lists CYZF as the "Western-Arctic alternate" in the Edmonton FIR/NDA) and the [North America airspace brief](../../../../airspace/north-america.md). See also [`OM E — ETOPS-EDTO Procedures`](../../../../../flight-ops/etops-edto.md) and [`OM E — Polar and High-Latitude Operations`](../../../../../flight-ops/polar.md) for the operating-policy context behind this field's alternate role. Companion pages: [Dispatch](dispatch.md) · [Departure](departure.md) · [Arrival](arrival.md). Flag legend 🟥 restriction/hazard · 🟧 caution/unverified · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| ARP (lat/long) | N62°27′47″ W114°26′25″ (62.4631, -114.4403) `[CFS/OurAirports cross-check]` |
| Field elevation | 675 ft / 206 m |
| Mag variation | ~16°E (2018 AIP epoch, CFS/SkyVector); current estimate ≈15.5°E (2026) — changing >1°/3 yr near this latitude 🟧 verify current epoch. Note: **CYZF lies within the Northern Domestic Airspace (NDA)** — procedures/runway idents are TRUE-referenced (0° declination in NDA), not magnetic — see the [Arctic area brief](../../../../airspace/arctic.md) §4. |
| Time zone | UTC−7 (MST) / UTC−6 (MDT, summer) |
| Runway(s) | **16/34, 7,503 × 150 ft (2,287 × 46 m), asphalt** — primary; **10/28, 5,001 × 150 ft (1,524 × 46 m), asphalt** — secondary, also used as a taxiway during Reduced Visibility Operations (RVOP) |
| Preferential runway | Not published / verify 🟧 — 34 has the ILS + SSALR (stronger approach aid); wind otherwise governs |
| Longest LDA | Not published / verify 🟧 — no numeric TORA/TODA/ASDA/LDA table reached; physical length 7,503 ft on 16/34, no displaced threshold identified in source |
| Approaches | ILS (Y/Z, RWY 34), RNAV(GNSS) Z & RNAV(RNP) Y (RWY 16/34), RNAV(RNP) (RWY 10/28) — names only, verify current AIRAC |
| RFF category | **Designated CAT 6**, hours 1200–0754Z; O/T 2-hr PN call-out charge; **O/T the aerodrome is closed to aircraft ≥20 seats EXCEPT for diversions or use as an alternate aerodrome** (without PPR) 🟧/🟥 — see §5/§6 |
| Control type | **Procedural / Mandatory Frequency (MF)** outside tower hours (Tower 14–05Z ≈ 07:00–22:00 local); Edmonton Centre (procedural, non-radar FIR per the [Arctic area brief](../../../../airspace/arctic.md)) otherwise — no dedicated radar Approach identified 🟧 |
| Elevation class | Sea-level-equivalent (675 ft) — **not** hot-and-high; **extreme cold** is the dominant performance/ops driver instead 🟥 |
| Special-airport status | None found / not operator-categorised — verify 🟧 |
| Customs / PoE | **Yes — Airport of Entry (AOE), but GA-only, ≤15 passengers**, hours 1600–2400Z Mon–Fri exc holidays 🟥 — see §5/§6 |
| K Global category | 🟧 **Not in VAMSYS** — unset; this field is not a VAMSYS-networked destination |
| K Global base | 🟧 **Not in VAMSYS** — unset (No — ETOPS/EDTO enroute-alternate role only, see §16) |
| Company preferred alternates | 🟧 **Not in VAMSYS** — unset; see §16 for the provisional nearby-alternate list |
| Taxi-in / taxi-out (VAMSYS) | 🟧 **Not in VAMSYS** — unset |

---

## 2. Validation summary

| Domain | Flag | Note |
|---|---|---|
| Terrain / CFIT | 🟧 | Canadian Shield, low relief — benign overall, but a lit rock outcrop obstacle sits close to the RWY 34 approach (see §3.1); no published MSA/obstacle chart reached. |
| Runway length vs fleet perf | 🟧 | 7,503 ft (16/34) is generous at sea-level-equivalent elevation, but extreme cold degrades engine/APU start and braking; declared distances unverified. |
| Approach availability / minima | 🟧 | Only RWY 34 has an ILS; other ends RNAV/GNSS/RNP only; ILS CAT unverified. |
| Airspace / traffic / control | 🟧 | No radar approach identified; MF/uncontrolled outside tower hours; Edmonton FIR is procedural (non-radar) per the [Arctic area brief](../../../../airspace/arctic.md). |
| Weather / seasonal hazard | 🟥 | Sub-Arctic extreme cold, blowing snow/whiteout, ice fog, migratory-bird activity Apr–Oct, space-weather HF/GNSS exposure at this latitude. |
| Curfew / slots / hours | 🟧 | No H24 tower/ground; ARFF, customs and fuel all run on restricted hours (see §6). |
| RFF category vs our types | 🟥 | Designated **CAT 6** only — verify against our largest fleet type's required category; may be insufficient for a wide-body diversion. |
| Fuel availability | 🟧 | Jet A-1 (+FSII) confirmed available, but via private suppliers on restricted hours (1200–2359Z Mon–Fri) with an O/T call-out charge. |
| Customs / handling / security | 🟥 | AOE but **CBSA capacity limited to general aviation, ≤15 passengers**, narrow weekday hours — a full airline diversion will exceed stated capacity; requires special arrangement. |

---

## 3. Threat & Error Management (TEM)

### 3.1 CFIT / Terrain  🟧
CYZF sits on the **Canadian Shield** — low-relief terrain of exposed bedrock, muskeg and lakes (Great Slave Lake immediately south/east) at ~675 ft elevation. This is a benign terrain environment compared with the mountainous/icecap legs elsewhere on the Arctic sector (see the [Arctic area brief](../../../../airspace/arctic.md) §7), and CFIT exposure from distant high terrain is modest. However, the CFS records a **lit rock outcrop obstacle 3,445 ft north of THR 34, 410 ft left of the runway centreline, ~984 ft long, top elevation ~696 ft ASL** — close-in and directly under the RWY 34 approach/missed-approach path. No published MSA/obstacle chart was reached in this build; treat the current-AIRAC AD chart's MSA ring and obstacle table as authoritative and brief the missed-approach climb before flying the RWY 34 approach.

### 3.2 Airborne conflict / traffic  🟧
Tower/Ground operate **14–05Z (≈ 07:00–22:00 local)**; outside those hours the field reverts to **Mandatory Frequency (MF) procedures on 118.5, 5 NM radius, up to 3,700 ft ASL** (CFS, CAR 602.98) with no local ATC. No dedicated radar Approach frequency was identified — Edmonton FIR is the largest, most active **procedural (non-radar)** airspace in Canada (see the [Arctic area brief](../../../../airspace/arctic.md) §3), so IFR traffic in the CYZF terminal area should expect procedural separation and position reports rather than radar vectors outside any surveilled corridor. Extensive **migratory bird activity Apr–Oct** (CFS CAUTION note) adds a bird-strike/traffic-mixing threat in the circuit.

### 3.3 Runway excursion  🟧
Both runways are asphalt with no displaced threshold identified. **Drainage ditches parallel RWY 16/34**, 310 ft west and 260 ft east of the centreline respectively, running from 2,000 ft beyond THR 34 to the intersection with RWY 10/28 — an excursion-catch hazard if the aircraft departs the paved surface in that zone. A **BAK-12 arresting cable is installed across RWY 16/34**; it is normally recessed but a NOTAM is issued when the cable is raised for military use — check NOTAMs before any operation near that end. RWY 10/28 has documented **rough pavement sections** ~2,400–2,495 ft beyond THR 10, 39 ft north of centreline. Runway Condition Reporting (CRFI) and winter maintenance are only guaranteed **1100–0754Z, Oct 15–Apr 15**, with an O/T 2-hr PN call-out (and possible call-out charge) outside that window — a real constraint given the field's near-year-round icing season.

### 3.4 Weather threat  🟥
Sub-Arctic continental climate: long, severe winters (routine sub‑(-30 °C) temperatures, occasional sub‑(-40 °C)), blowing snow/whiteout, and ice-fog risk at very low temperatures/high relative humidity. A **Reduced Visibility Operations Plan (RVOP)** is published: RWY 10/28 is used as a taxiway west of RWY 16/34 during RVOP, aircraft towing requires ATC/FSS clearance, and access to RWY 16/34 is restricted to Twy A, H or G — brief this before any low-vis arrival/departure. At CYZF's latitude (62.5°N), space-weather HF-blackout and GNSS-scintillation exposure during solar events is a live consideration for the enroute legs either side of this alternate — see the [Arctic area brief](../../../../airspace/arctic.md) §11 (NOAA SWPC). See also §14 and [`OM E — Cold Weather Operations`](../../../../../flight-ops/cold-weather-operations.md).

### 3.5 Operational considerations  🟥
**Extreme cold is the dominant driver here, not hot-and-high.** Expect cold-soak fuel management, APU/engine cold-start limitations, and **altimetry cold-temperature corrections** on any published approach — verify whether CYZF currently appears on Nav Canada's cold-temperature restricted-altitude list (not confirmed in this build — 🟧 open item). See [`OM E — Cold Weather Operations`](../../../../../flight-ops/cold-weather-operations.md) and [`OM E — Polar and High-Latitude Operations`](../../../../../flight-ops/polar.md). The field is also **operationally thin outside a daily window**: no H24 tower, ARFF designated CAT 6 only 1200–0754Z (O/T requires 2-hr PN), and fuel/customs on restricted hours (§6). The one meaningful piece of good news for our use case: the CFS explicitly **exempts diversions and alternate-aerodrome use from the "closed to aircraft ≥20 seats" restriction** outside ARFF hours — but O/T services (fire cover, fuel, customs) may still require call-out time, so this is a **plan-ahead, not a walk-up, alternate.** See [`OM E — ETOPS-EDTO Procedures`](../../../../../flight-ops/etops-edto.md) for the operating-policy framework behind CYZF's use as an ETOPS/EDTO enroute alternate.

---

## 4. Cautions & Warnings

- Lit rock outcrop obstacle ~696 ft ASL, close under the RWY 34 approach/missed-approach path — brief the missed-approach climb.
- Drainage ditches close to RWY 16/34 centreline (310 ft W / 260 ft E) — excursion-catch hazard if off the paved surface.
- BAK-12 arresting cable across RWY 16/34 — check NOTAMs; may be raised for military use.
- Extensive migratory bird activity Apr–Oct.
- No H24 tower — MF/uncontrolled procedures outside ≈07:00–22:00 local; no radar approach identified.
- ARFF (CAT 6), fuel, and customs all run on **restricted hours** — plan diversions with lead time; O/T call-out/PN required for full service.
- **Customs capacity is GA-only, ≤15 passengers, narrow weekday hours** — a full airline diversion will exceed CBSA capacity at this station; treat as a fuel/tech-stop-only alternate for customs purposes unless special arrangements are made.
- Extreme cold ops: fuel cold-soak, APU/engine cold-start limits, altimetry cold-temperature corrections — verify CYZF's status on the current cold-temperature restricted-altitude list.
- CFS data in this build is from the **21 MAR 2024–16 MAY 2024 AIRAC cycle** — re-verify against current AIRAC before relying on any frequency/procedure name.

---

## 5. Aerodrome category, restrictions & crew qualification

- **Special-airport / category:** Not operator-categorised in the reachable source. 🟧
- **Crew-qualification gate:** None identified — extreme-cold-ops competency (cold-soak fuel, cold-start, altimetry corrections) should be assumed a standing requirement for any Arctic-alternate rotation regardless of field-specific gating; see [`OM E — Polar and High-Latitude Operations`](../../../../../flight-ops/polar.md). 🟧
- **Operating restrictions / bans:** **RVOP** in effect for low-vis ops (RWY 10/28 used as taxiway west of 16/34; towing needs ATC/FSS clearance; access to 16/34 only via Twy A, H or G). Outside ARFF hours the aerodrome is closed to aircraft ≥20 seats **except for diversions or use as an alternate aerodrome** (no PPR needed for that exception). 🟧
- **Overflight / entry / permits:** Standard Canadian entry; CYZF is within the **Northern Domestic Airspace (NDA)** — True-track reference, standard-pressure procedures may apply en route per the [Arctic area brief](../../../../airspace/arctic.md) §4; no separate overflight permit identified for this field. 🟧
- **Operations notes:** Operator — Government of the Northwest Territories (867-767-9091), certified aerodrome, aerodrome operating hours **1100–0754Z** with O/T 2-hr PN (call-out charge may apply). Transient parking is limited — **PPR required** (867-445-5518). RCAF **440 Transport Squadron** and RCMP "G" Division air section are co-located; military advisory freq 134.1 (no transient servicing available from the military side).

---

## 6. General / hours / services

| Item | Value | Flag |
|---|---|---|
| ATS hours | Tower/Ground 14–05Z (≈07:00–22:00 local); MF (118.5, 5 NM, ≤3,700 ft ASL) outside those hours | 🟧 |
| AD operating hours | 1100–0754Z‡; O/T 2-hr PN, call-out charge may be levied | 🟧 |
| Night / curfew restrictions | None published beyond the hours above — verify | 🟧 |
| RFF category | Designated **CAT 6**, 1200–0754Z; O/T 2-hr PN; O/T closed to acft ≥20 seats **except diversions/alternate use** | 🟥 |
| Fuel | Jet A-1 (FSII avbl), F-34, 100LL, HPR — private suppliers, 1200–2359Z Mon–Fri, O/T call-out charge | 🟧 |
| PCN | Not published / verify 🟧 | 🟧 |
| Customs | AOE — **GA only, ≤15 pax**, 1600–2400Z Mon–Fri exc holidays | 🟥 |
| Handling / FBO | Transient parking limited, **PPR required**; de-icing via Strategic Aviation | 🟧 |

---

## 7. Runways & declared distances

| RWY | Dimensions | Surface / PCN | TORA | TODA | ASDA | LDA | Notes |
|---|---|---|---|---|---|---|---|
| 16/34 | 7,503 × 150 ft (2,287 × 46 m) — CFS-confirmed, verbatim RWY DATA match 🟩 | Asphalt / PCN 🟧 CFS gated — verify | 🟧 CFS gated — verify | 🟧 CFS gated — verify | 🟧 CFS gated — verify | 🟧 CFS gated — verify | BAK-12 arresting cable — NOTAM when raised; RVR-certified 1,200 ft (¼ SM) both ends |
| 10/28 | 5,001 × 150 ft (1,524 × 46 m) — CFS-confirmed, verbatim RWY DATA match 🟩 | Asphalt / PCN 🟧 CFS gated — verify | 🟧 CFS gated — verify | 🟧 CFS gated — verify | 🟧 CFS gated — verify | 🟧 CFS gated — verify | Rough pavement ~2,400–2,495 ft beyond THR 10, 39 ft N of centreline; used as taxiway during RVOP |

*2026-07-25 reconciliation: the CFS AD/facility text for CYZF (21 MAR 2024 mirror, direct-fetched — not just cited) was re-read line-by-line for a declared-distances table. It carries only "RWY DATA Rwy 16/34 7503x150 ASPH / Rwy 10/28 5001x150 ASPH" (physical dimensions/surface/certification) — both figures match this table exactly, so the dimensions column is now CFS-confirmed (🟩). No TORA/TODA/ASDA/LDA breakout or PCN value is present in that CFS entry. A further check of OurAirports, SkyVector, Wikipedia and the NAV CANADA AIP Canada portal found no public source publishing numeric declared distances or PCN for CYZF — this is a genuine gate (CFS/AIP Canada subscription product), not a gap in this build's research. No displaced threshold identified on either runway in any source checked. Verify all declared distances and PCN against the current AIP Canada AD 2 CYZF page before operational use.*

---

## 8. Communications

| Service | Callsign | Frequency | Hours | Notes |
|---|---|---|---|---|
| ATIS | — | 128.4 | Hours not separately published — verify 🟧 | |
| Delivery | — | Not published / verify 🟧 | — | Likely combined with Ground/Tower |
| Ground | Yellowknife Ground | 121.9 | 14–05Z | |
| Tower | Yellowknife Tower | 118.5 / 340.8 (emergency) | 14–05Z | Emergency phone 867-873-3121 |
| Approach | Not published / verify 🟧 | — | — | No dedicated radar Approach identified; treat as procedural |
| Centre / FIR | Edmonton Centre | 135.8 (PAL) | H24 | Edmonton ACC (IFR) 888-358-7526; Edmonton FIC 866-WXBRIEF; see the [Arctic area brief](../../../../airspace/arctic.md) §3 |
| MF (outside tower hours) | Yellowknife Radio | 118.5 | 05–14Z | 5 NM radius, ≤3,700 ft ASL (CAR 602.98); emergency phone 867-873-4049 |
| RCO | Edmonton Radio | 5680 (FISE) / 262.0 (FISE) / 123.375 (FISE) / 126.7 (bcst) | — | |

*Frequencies per the 21 MAR 2024 CFS cycle mirror — re-verify against current AIRAC. Emergency 121.5.*

---

## 9. Navaids

| Aid | Ident | Freq | Hours | Notes |
|---|---|---|---|---|
| ILS/LOC | IZF | 109.5 | Verify | **RWY 34** only; LOC reliable only within 10° either side of centreline (CFS caution); CAT unverified 🟧 |
| VOR/DME | YZF | 115.5 (Ch 102) | H24 assumed — verify | On field |
| NDB | ZF | 356 kHz | H24 assumed — verify | On field |

---

## 10. Arrival

- **Transition altitude / level:** **18,000 ft** (Canada-wide Standard Pressure Region boundary). CYZF lies within the **Northern Domestic Airspace (NDA)**, which per the [Arctic area brief](../../../../airspace/arctic.md) §4 is a standard-pressure region where enroute segments away from reporting stations may require standard pressure below 18,000 ft in practice — CYZF itself has H24 METAR/altimeter reporting, so local altimeter setting is expected for the approach/landing phase. Exact AIM interaction 🟧 verify.
- **Speed:** 250 KIAS below 10,000 ft ASL (Canadian standard).
- **Preferential runway logic:** Not published / verify 🟧 — RWY 34 carries the ILS + SSALR lighting (stronger approach aid); otherwise wind governs.
- **Approaches (names only — verify minima on current AIRAC charts):**

| RWY | Approach | IAF | FAF/FAP alt | Notes |
|---|---|---|---|---|
| 34 | ILS Y / ILS Z, RNAV (GNSS) Z, RNAV (RNP) Y | Not published / verify | Not published / verify | ILS ident IZF 109.5; CAT unverified |
| 16 | RNAV (GNSS) Z, RNAV (RNP) Y | Not published / verify | Not published / verify | No ILS this end |
| 10/28 | RNAV (RNP) | Not published / verify | Not published / verify | Secondary runway; names unverified |

- **STARs (names only):** Not published / verify 🟧 — remote-north field; arrivals may be point-to-point/vectored off airway rather than named STARs. Confirm on current AIRAC.
- **LVP:** RVOP triggers per current AIRAC chart; RWY 10/28 used as taxiway west of 16/34 during RVOP; access to 16/34 restricted to Twy A, H or G; towing requires ATC/FSS clearance.
- **Missed approach watch-items:** Lit rock outcrop obstacle close under the RWY 34 approach (see §3.1) — brief the published missed-approach climb gradient.

---

## 11. Departure

- **SIDs (names only — fly the charted version):** Not published / verify 🟧 — not identified in the reachable source; confirm on current AIRAC whether any named SID exists or departures are runway-heading/direct-to-fix.
- **RNP / climb-gradient requirements:** Not published / verify 🟧.
- **Take-off minima:** Not published / verify 🟧.
- **Start-up / push-back:** Ground 121.9 in tower hours; aircraft towing requires ATC/FSS clearance (RVOP note, applies generally). Push/taxi procedure for code C/D types not separately published — verify.
- **ATC slot / CTOT & clearance:** No slot regime — non-slot-controlled field. IFR clearance via Edmonton ACC (888-358-7526) / FIC (866-WXBRIEF) where not available locally.
- **De-icing:** Available — Strategic Aviation (867-766-2090 / 867-446-0600). Treat as a near-year-round requirement given the climate (§14).

---

## 12. Noise & Environmental

- **Noise abatement (NAP):** Not published / verify 🟧 — remote, low-traffic field; no NAP identified.
- **Night noise / dB limits:** Not published / verify 🟧.
- **Engine run-up restrictions:** Not published / verify 🟧.
- **Reverse thrust / idle-reverse policy:** Not published / verify 🟧.

---

## 13. Ground operations

- **Stands for our types:** General-aviation/transient ramp; **transient parking is limited and PPR is required** (867-445-5518). Military (RCAF 440 Sqn) and RCMP "G" Division facilities are co-located but not available for transient servicing. 🟧
- **Push-back:** Not separately published — verify for code C/D types. 🟧
- **Standard taxi routes:** Taxiways A–K; **D, E, F, G, K are uncontrolled**. Access to RWY 16/34 restricted to Twy A, H or G during RVOP.
- **Hot spots / tight taxiways:** Not published / verify 🟧.
- **Follow-me:** Not published / verify 🟧.

---

## 14. Weather & seasonal (durable)

- **Climate / prevailing wind:** Sub-Arctic continental (Köppen Dfc) — long, severe winters and short, mild summers. Prevailing wind not confirmed in the reachable source — verify against climatological data/current AIRAC. 🟧
- **Seasonal hazards:** Extreme cold Nov–Mar (routine sub‑(-30 °C), occasional sub‑(-40 °C) — cold-soak fuel and altimetry cold-temperature-correction risk); blowing snow/whiteout; ice fog at very low temperature/high humidity; **extensive migratory bird activity Apr–Oct**; modest summer convective activity. At 62.5°N, space-weather HF-blackout/GNSS-scintillation exposure during solar events is a live consideration (see the [Arctic area brief](../../../../airspace/arctic.md) §11). See [`OM E — Cold Weather Operations`](../../../../../flight-ops/cold-weather-operations.md).
- **Local effects:** Proximity to Great Slave Lake (immediately S/E) may produce localised lake-influenced weather — not separately quantified in this build.

> **Live weather — pull at planning (T-2h):** METAR (H24), TAF (H24, issued 00/06/12/18Z), TREND, SIGMET/AIRMET, and **space-weather (HF/GNSS) advisories — NOAA SWPC**. Not stored here.

---

## 15. NOTAMs

> **Pull at planning (T-2h).** Perishable — not stored here. Check specifically: BAK-12 arresting-cable status on RWY 16/34, ARFF category/hours status, RVOP activation, RWY 10/28 rough-pavement NOTAMs, ILS IZF serviceability, GPS/RAIM for RNAV/RNP approaches, and customs/fuel-supplier hours. Source: official AIS / SimBrief OFP NOTAM block.

---

## 16. Fuel & alternate planning notes

- **Typical role for us:** Primary **western-Arctic ETOPS/EDTO enroute alternate**; cited as the **ETP-exit alternate on the reference EDDF–KSFO OFP** (2026-07-25) (OFP §9: CYZF, WX MIN 600-3219, FCST 600-4825 — OFP-context, not AIP-sourced). Also listed as the "Western-Arctic alternate" in the [Arctic area brief](../../../../airspace/arctic.md) §8 (Edmonton FIR/NDA sector). See [`OM E — ETOPS-EDTO Procedures`](../../../../../flight-ops/etops-edto.md) for the policy framework governing this role. 🟧 Not in VAMSYS — unset.
- **Nearest suitable alternates:** **CYHY** Hay River (~105 NM S, per SkyVector nearby-navaid data) is the most plausible larger-aircraft alternate nearby; **CEM3** Whati (~87 NM), **CYWE** Wekweètì (~104 NM) and **CYRA** Gamètì/Rae Lakes (~126 NM) are short strips likely unsuitable for our fleet — verify against VAMSYS/OFP alternate minima before use. `[VAMSYS mirror — not reconciled for this build; CYZF and its nearby strips are not present in the VAMSYS network]` 🟧
- **Fuel-uplift notes:** Jet A-1 (with FSII) confirmed available via private suppliers (Midnight Petroleum / Det'on Cho Logistics), but only **1200–2359Z Mon–Fri**, with an O/T call-out charge outside those hours — build lead time into any diversion/alternate fuel plan. Confirm grade/quantity on the day's OFP.
- **Range/perf flags for our fleet:** Not hot-and-high — **extreme cold** is the governing factor: cold-soak fuel management, engine/APU cold-start limits, and altimetry cold-temperature corrections (cross-ref relevant [`OM B — Fleet Capability Matrix`](../../../../../fleet/capability-matrix.md) type sections and the [Arctic area brief](../../../../airspace/arctic.md) §7/§8 fuel-freeze guidance). RFF **CAT 6** may be below requirement for a wide-body diversion — verify against fleet.

---

## 17. Fleet-specific notes (optional)

- **Wide-body / long-body types (OM B):** RWY 34 (7,503 ft / 2,287 m) is length-adequate at this sea-level-equivalent elevation for most alternate-landing weights, but **RFF CAT 6 may not meet the required category** for larger fleet types — confirm against each type's [`OM B — Fleet Capability Matrix`](../../../../../fleet/capability-matrix.md) category requirement before filing CYZF as a planned (vs. contingency-only) alternate for those types.
- **All types:** Treat customs as **unavailable for a full passenger complement** (CBSA capacity ≤15 pax) — plan any diversion here as a technical/fuel stop unless special CBSA arrangements are pre-coordinated.
- **General:** Cold-soak fuel and cold-start procedures per [`OM E — Cold Weather Operations`](../../../../../flight-ops/cold-weather-operations.md) apply to any type staged or diverted here outside the short sub-Arctic summer.

---

## 18. Open items (🟧 — confirm against AIP Canada / current AIRAC)

- Numeric TORA/TODA/ASDA/LDA and PCN for both runways — **re-checked 2026-07-25 against the CFS AD text directly (not just cited), plus OurAirports/SkyVector/Wikipedia/AIP Canada portal: confirmed genuinely not published in any reachable public tier** (CFS/AIP Canada declared-distance product is subscription-gated). Physical dimensions (7,503×150 / 5,001×150) are now CFS-confirmed verbatim — see §7.
- ILS IZF category (CAT I assumed, unconfirmed); whether RWY 16/10/28 carry any additional approach aids.
- SID names, take-off minima, climb-gradient/RNP departure requirements.
- STAR names (if any) — remote field may use direct-to-fix arrivals only.
- Dedicated radar Approach service, if any — this build found none and assumed procedural/MF.
- Preferential runway rule, noise abatement, engine run-up restrictions, taxiway hot spots, push-back procedure for code C/D aircraft.
- ATIS operating hours (vs. Tower/Ground hours) and Delivery frequency.
- Current status of CYZF on Nav Canada's cold-temperature restricted-altitude list.
- Current magnetic-variation epoch (2018 AIP value ~16°E cited; ~15.5°E estimated for 2026).
- **This entire build is sourced from the CFS AIRAC cycle effective 21 MAR 2024–16 MAY 2024** (public mirror) — all frequencies, hours and procedure references should be re-verified against the current AIRAC cycle before operational reliance.
- Nearest-suitable-alternate list is provisional (nearby small strips only identified) — reconcile against VAMSYS/OFP alternate minima.
- This field is **not in VAMSYS** — category, base flag, preferred alternates and taxi timings are all unset (see §1/§16 and the Dispatch page).

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim material (current-AIRAC charts) informs content but is not listed here.*

- **Canada Flight Supplement (Nav Canada), Northwest Territories Aerodrome/Facility Directory, AIRAC cycle effective 0901Z 21 MAR 2024 – 0901Z 16 MAY 2024** (public PDF mirror) — ARP, elevation, mag var, hours, customs, ARFF, fuel, runway data, RVR/RVOP, comms, navaids, cautions — https://imageserver.fltplan.com/afd/Canada/21MAR2024/CYZF-2574.PDF (retrieved 2026-07-25; **re-fetched and read verbatim again 2026-07-25 for §7 declared-distances reconciliation** — confirms RWY DATA "Rwy 16/34 7503x150 ASPH / Rwy 10/28 5001x150 ASPH" only, no declared-distance or PCN table present). *Not current-AIRAC — re-verify.*
- OurAirports — https://ourairports.com/airports/CYZF/ — coordinates/elevation cross-check (retrieved 2026-07-25).
- SkyVector — https://skyvector.com/airport/CYZF/Yellowknife-Airport — runway/frequency/navaid cross-check, nearby instrument-approach airfields (retrieved 2026-07-25).
- Wikipedia — Yellowknife Airport — https://en.wikipedia.org/wiki/Yellowknife_Airport — general/operator/AOE context, citing CFS effective 27 NOV 2025–22 JAN 2026 (retrieved 2026-07-25).
- IFATC Info — https://ifatc.org/appr_info?code=CYZF — approach-type/glideslope cross-check (tier-4, sim-community; retrieved 2026-07-25).
- NAV CANADA AIP Canada (ENR) + "Magnetic to True North" briefing — NDA/standard-pressure-region and True-track context (full detail in the [Arctic area brief](../../../../airspace/arctic.md)) — https://www.navcanada.ca/en/enreng22-january-2026.pdf (retrieved 2026-06-26, per the Arctic area brief).

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-25 | Initial build. Sourced from CFS AD/facility data (AIRAC cycle 21 MAR 2024, public mirror) cross-checked against OurAirports/SkyVector/Wikipedia. Role: primary western-Arctic ETOPS/EDTO enroute alternate, ETP-exit alternate on the reference EDDF–KSFO OFP. Flags set: RFF CAT 6 vs fleet 🟥, customs capacity (GA-only ≤15 pax) 🟥, extreme-cold ops 🟥, weather/seasonal 🟥; numeric declared distances/PCN, SIDs/STARs, ILS CAT, radar-approach status, and several service hours left open 🟧 pending current-AIRAC verification. |
| v0.1.1 | 2026-07-25 | Declared distances checked vs NAV CANADA CFS + public mirrors; §7 reconciled (see §18 for items still gated). Physical runway dimensions (7,503×150 / 5,001×150) directly re-confirmed verbatim against the CFS AD text (both runways now 🟩); numeric TORA/TODA/ASDA/LDA and PCN confirmed genuinely absent from every reachable public tier (CFS, OurAirports, SkyVector, Wikipedia, AIP Canada portal) — remains 🟧 CFS-gated, not a research gap. No other §7 values changed. |
| v0.1.2 | 2026-07-25 | Governance scrub: removed callsign and build-process references per OM content rules. |
| v0.1.3 | 2026-07-26 | Folded into a 4-page pack at `CYZF — Yellowknife/` (Briefing/Dispatch/Departure/Arrival); content preserved unchanged aside from converting the plain-text Arctic.md/the source register references into working cross-links (Arctic area brief, North America airspace brief, OM E Cold Weather Operations, OM E ETOPS-EDTO Procedures, OM E Polar and High-Latitude Operations, OM B Fleet Capability Matrix, the source register) re-based for the new folder depth, and noting the VAMSYS unset status (§1/§16/§18). |
