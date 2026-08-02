# LEMI — Región de Murcia International (Corvera) · Airport Briefing

**LEMI / RMU** · Corvera, Murcia, Spain · Europe
**Version** v0.1 · **Updated** 2026-07-25 · **Status** Draft — AIP España (ENAIRE)-derived

> **Read-me:** Planning aid for the sim, not a chart. Static data is drawn from the AIP España (ENAIRE) AD 2-LEMI plus standard public aeronautical data; approaches/SIDs/STARs are listed **by name only or flagged not-yet-confirmed** — fly the charted current-AIRAC version. Live weather/NOTAMs are pulled at planning (§14/§15). Open 🟧 items are listed in §18. Flag legend 🟥 restriction/hazard · 🟧 caution/unverified · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| ARP (lat/long) | 37.80285, -1.12488 `[OurAirports; AIP España AD 2-LEMI]` |
| Field elevation | **196 m / 644 ft AMSL** — notably higher/more inland than the network's other three Spanish Mediterranean-coast fields (all near sea level) |
| Mag variation | 0° (2020 epoch); annual change 7.2′ E |
| Time zone | UTC+1 (CET) / UTC+2 (CEST, EU DST) |
| Runway(s) | **05/23**, single runway, 3,000 × 45 m, asphalt |
| Preferential runway | Wind-dependent; only RWY23 carries an ILS |
| Longest LDA | 3,000 m (both directions) |
| Approaches | **ILS CAT I RWY23 only** (ident IRM); **RWY05 — VOR/RNP approaches only, no ILS** |
| RFF category | **CAT 7** |
| Control type | **Radar** — **Murcia TWR** on the field; approach is **"San Javier APP"** (retains the historic Murcia–San Javier identity/frequency, not a combined "Valencia APP" facility) 🟧; en-route presumed **Barcelona ACC (LECB)** per regional documentation listing the former Murcia–San Javier field (LELC) in its jurisdiction — see [Europe (Continental) Airspace Briefing](../../../../airspace/europe.md) 🟧, no dedicated Spanish FIR brief exists in-library |
| Elevation class | Moderate elevation (644 ft) relative to this network's other Spanish fields — not hot-and-high, but genuinely higher/more inland; bird-hazard profile (raptors) consistent with hilly, semi-arid terrain |
| Special-airport status | 🟧 **K Global category not set in VAMSYS** — see below. **No Low Visibility Procedures (LVP) capability** at this field — a real operational limitation given CAT I-only approach infrastructure |
| Customs / PoE | Yes — hours are **PPR** (prior permission required), not routine H24 🟧 |
| K Global category | 🟧 **Not set in VAMSYS** — pending fleet/ops-planning input `[VAMSYS mirror 2026-07-25]` |
| K Global base | **No** `[VAMSYS mirror 2026-07-25]` |
| Company preferred alternates | **LEAL, LEVC, LEIB** `[VAMSYS mirror 2026-07-25]` |
| Taxi-in / taxi-out (VAMSYS) | 🟧 **Not set / n/a in VAMSYS** `[VAMSYS mirror 2026-07-25]` |

---

## 2. Validation summary

| Domain | Flag | Note |
|---|---|---|
| Terrain / CFIT | 🟧 | Field elevation 644 ft — genuinely higher/more inland than LEAL/LEMG/LEVC. Bird-hazard section documents golden eagle, Bonelli's eagle, short-toed snake eagle plus stone-curlews/starlings/kestrels, consistent with hilly semi-arid terrain. No explicit MSA/terrain-clearance warning text located this pass — would require the actual approach charts. |
| Runway length vs fleet perf | 🟩 | 3,000 m is ample for any K Global narrowbody; Code E is AIP-provided for (though Code F is explicitly **not permitted**). |
| Approach availability / minima | 🟥 | **ILS CAT I on RWY23 only** — RWY05 has no ILS. **The field has no LVP (Low Visibility Procedures) capability at all** — a materially significant low-vis limitation, more restrictive than any other field in this pack. |
| Airspace / traffic / control | 🟧 | Own **Murcia TWR**, but approach retains the historic **"San Javier APP"** identity — a distinct, not-obviously-intuitive naming/frequency legacy from the airport LEMI replaced. En-route FIR/ACC placement (presumed Barcelona ACC) is sourced to network-simulation documentation, not an authoritative ENR chart, this pass. |
| Weather / seasonal hazard | 🟧 | Warmer/more continental temperature extremes than the coastal fields (ref. temp 33°C / low avg 11°C); regional Saharan dust ("calima") intrusions and periodic strong regional wind events reported — general climatology, not airport-specific data. |
| Curfew / slots / hours | 🟥 | **NOT an H24 field** — seasonal operating hours apply (see §6), with **customs/immigration on PPR** rather than routine coverage. This is a materially different operational profile from LEAL/LEMG/LEVC, all of which run H24 ATS/customs. |
| RFF category vs our types | 🟩 | CAT 7, above any K Global type's requirement. |
| Fuel availability | 🟧 | Not confirmed in reachable sources. |
| Customs / handling / security | 🟧 | PPR-based customs/immigration coverage — plan ahead of any international movement requiring PoE clearance. |

---

## 3. Threat & Error Management (TEM)

### 3.1 CFIT / Terrain 🟧
LEMI sits at 644 ft AMSL — meaningfully higher and more inland than LEAL, LEMG or LEVC, all near sea level. The AIP's bird-hazard section documents golden eagle, Bonelli's eagle and short-toed snake eagle activity alongside stone-curlews, starlings and kestrels — a profile consistent with hilly, semi-arid terrain rather than a flat coastal plain. No explicit MSA/terrain-clearance warning text was located in the reachable AD2 narrative this pass (the actual IAC approach charts would be needed for exact MSA values) — treat terrain awareness here as a genuine step up from the network's coastal fields, not a non-issue.

### 3.2 Airborne conflict / traffic 🟧
LEMI is a newer, lower-volume field (907,668 passengers / 7,140 movements in 2024) relative to its Costa Blanca/Costa del Sol/Valencia neighbours `[Wikipedia]`. **Murcia TWR** is the local tower unit; approach retains the historic **"San Javier APP"** identity and frequency — a distinct legacy naming convention from Murcia–San Javier, the airport LEMI replaced in 2019. En-route FIR placement is presumed **Barcelona ACC (LECB)**, per regional documentation listing the former Murcia–San Javier field (LELC) within Barcelona FIR jurisdiction — this is sourced to network-simulation documentation, not an authoritative ENR chart, and should be treated as suggestive rather than confirmed. See the general [Europe (Continental) Airspace Briefing](../../../../airspace/europe.md) for regional context 🟧, no dedicated Spanish FIR brief exists in-library yet.

### 3.3 Runway excursion 🟧
Single runway 05/23, no displaced thresholds, symmetric declared distances (3,000 m TORA/TODA/ASDA/LDA both directions). No specific contamination/braking-action data was found this pass; the field's real distinguishing operational risk is not runway excursion but the **complete absence of LVP capability** (§3.5).

### 3.4 Weather threat 🟧
LEMI runs warmer/more continental temperature extremes than the coastal fields in this pack (reference temperature 33°C vs LEVC's 31°C; low average temperature 11°C vs LEVC's 9°C). Regional Saharan dust ("**calima**") intrusions periodically affect visibility and air quality in the Murcia region, and periodic strong regional wind/storm events have been reported (gusts on the order of 70–80 km/h in some regional events) — this is general regional climatology rather than airport-specific data; no crosswind/katabatic-specific study for LEMI was found.

### 3.5 Operational considerations 🟥
The field's standout, genuinely significant operational limitation: **LEMI has no LVP (Low Visibility Procedures) capability**, and its only ILS (RWY23, CAT I) is the sole precision approach available — RWY05 is VOR/RNP only. Combined with the field **not running H24 operations** (§6) and customs/immigration being **PPR-based** rather than routinely staffed, LEMI carries a materially more restrictive operational profile than any other field in this pack. The **K Global category is not yet set in VAMSYS** — treat this field's suitability for any given operation as provisional pending that determination.

---

## 4. Cautions & Warnings

- **No LVP (Low Visibility Procedures) capability exists at this field** — in low visibility, RWY23's CAT I ILS is the only precision option and there is no fallback low-vis infrastructure; plan alternates accordingly.
- **RWY05 has no ILS** — VOR/RNP approaches only.
- **LEMI is NOT an H24 field** — confirm current seasonal operating hours (§6) before planning any operation; a late/early movement outside published hours requires PPR (+1 hr).
- **Customs/immigration is PPR-based**, not routinely staffed — plan any international PoE movement well ahead.
- **K Global category is not yet set in VAMSYS** for this field — confirm operational suitability/category before committing a routing here.
- **Bird-hazard profile includes large raptors** (golden eagle, Bonelli's eagle, short-toed snake eagle) — a genuine wildlife-strike consideration at this hilly, semi-arid inland field.
- **PAPI on RWY23 is explicitly not usable for Code letter E aircraft** per the AIP — Code E crews need an alternate visual-glidepath reference on that runway.

---

## 5. Aerodrome category, restrictions & crew qualification

- **Special-airport / category:** 🟧 **K Global category not set in VAMSYS.** Not operator-categorised as a restricted-crew "special airport" in reachable public sources, but the combined **no-LVP / CAT I-only / non-H24 / PPR-customs** profile is materially more restrictive than the network's other Spanish Mediterranean-coast fields.
- **Crew-qualification gate:** None specific identified beyond standard line qualification; the no-LVP limitation should be briefed explicitly ahead of any low-vis-risk operation. 🟧
- **Operating restrictions / bans:** **Code F operations are explicitly not permitted** per the AIP. No RNP AR ban found — verify current AIRAC. 🟧
- **Overflight / entry / permits:** Standard EU/Schengen arrival; customs/immigration coverage is PPR-based (see §6/§8) rather than a permit/entry restriction per se. 🟧
- **Operations notes:** ANSP — **ENAIRE**; airport operator — **Aena**.

---

## 6. General / hours / services

| Item | Value | Flag |
|---|---|---|
| ATS hours | Seasonal, not H24 — see below | 🟥 |
| AD operating hours | **Summer:** 0530–2030 LT (Mon–Fri + holidays), 0630–2030 LT (Sat/Sun); **PPR +1 hr** outside these. **Winter:** 0630–2130 LT (Mon–Fri + holidays), 0730–2130 LT (Sat/Sun); **PPR +1 hr** outside these | 🟥 |
| Night / curfew restrictions | The seasonal operating-hours envelope itself functions as a de facto night restriction; no separate published noise-abatement section found (consistent with a newer, quieter field) | 🟧 |
| RFF category | **CAT 7** | 🟩 |
| Fuel | Not confirmed in reachable sources | 🟧 |
| PCN | Runway 89/F/A/W/T; apron 58/R/A/W/T; taxiways 89/F/A/W/T (widths 23 m; F/G 34 m; D1 29 m) | 🟩 |
| Customs | **PPR** — not routinely staffed | 🟥 |
| Handling / FBO | Not confirmed in reachable sources | 🟧 |

---

## 7. Runways & declared distances

| RWY | Dimensions | Surface / PCN | TORA | TODA | ASDA | LDA | Notes |
|---|---|---|---|---|---|---|---|
| 05 | 3,000 × 45 m | Asphalt / PCN 89/F/A/W/T | 3,000 m | 3,060 m | 3,000 m | 3,000 m | **No ILS** — VOR/RNP approaches only |
| 23 | 3,000 × 45 m | Same physical runway | 3,000 m | 3,060 m | 3,000 m | 3,000 m | **ILS CAT I** (ident IRM) — the field's sole precision approach; **PAPI not usable for Code letter E aircraft** |

*Source: AIP España AD 2-LEMI, current AIRAC (retrieved 2026-07-26). No displaced thresholds published. All distances in metres. One rapid-exit taxiway (RET) and 4 holding bays per the airport's design specification `[Wikipedia]`.*

---

## 8. Communications

| Service | Callsign | Frequency | Hours | Notes |
|---|---|---|---|---|
| ATIS | — | — | — | **No ATIS published for LEMI** in the current AIP 🟧 |
| Delivery | Combined with TWR | — | — | Not separately published |
| Ground | Murcia GMC | 121.755 | — | |
| Tower | Murcia TWR | 121.330 (emerg 121.500/243.000) | — | |
| Approach | **San Javier APP** | 130.300 (backup 125.025) | — | **Retains the historic Murcia–San Javier identity/frequency** — not a combined "Valencia APP" facility 🟧 |
| Centre / FIR | Presumed **Barcelona ACC (LECB)** | Per current AIRAC | H24 | The former Murcia–San Javier field (LELC) is listed within Barcelona FIR jurisdiction per regional documentation — sourced to network-simulation material, not an authoritative ENR chart 🟧; see [Europe (Continental) Airspace Briefing](../../../../airspace/europe.md) for regional context only |

*Source: AIP España AD 2-LEMI, current AIRAC (retrieved 2026-07-26). Local CTR ("CTR Murcia/Región de Murcia") is Class D, SFC–2,800 ft AMSL, call sign "Murcia TWR."*

---

## 9. Navaids

| Aid | Ident | Freq | Hours | Notes |
|---|---|---|---|---|
| DVOR/DME | MUR | 114.850 / CH95Y | — | |
| ILS RWY23 | IRM | 111.750, GP 333.350 / ILS-DME CH54Y | — | **CAT I** — the field's only ILS |
| — RWY05 | — | — | — | No ILS — VOR/RNP approaches only |

*Source: AIP España AD 2-LEMI (retrieved 2026-07-26).*

---

## 10. Arrival

- **Transition altitude / level:** Not confirmed this pass — verify current chart. 🟧
- **Speed:** Standard 250 KIAS below FL100 (EU/ICAO norm) — confirm no local override on current chart.
- **Preferential runway logic:** Wind-dependent; **RWY23 is strongly preferred whenever a precision approach is needed**, since RWY05 has no ILS.
- **Approaches (names only — verify minima on current AIRAC charts):**

| RWY | Approach | IAF | FAF/FAP alt | Notes |
|---|---|---|---|---|
| 05 | VOR (IAC1 — per AIP, noted as withdrawn/not-applicable per a VSS note) 🟧 | Not confirmed | Not confirmed | No ILS on this end |
| 23 | ILS (IAC2, direct); LOC (IAC3, direct); VOR (IAC4, direct) | Not confirmed | Not confirmed | **CAT I** — the field's sole precision approach |

- **STARs (names only):** Not confirmed in reachable research pass — pull the current-AIRAC STAR list at planning. 🟧
- **LVP:** 🟥 **No LVP capability exists at this field** — this is a hard, AIP-confirmed limitation, not merely an unconfirmed item. Plan low-vis contingencies/alternates accordingly.
- **Missed approach watch-items:** Genuinely higher/more inland terrain (644 ft field elevation, hilly semi-arid surroundings) than the network's coastal fields — verify current MSA/chart terrain data; not otherwise itemised this pass.

---

## 11. Departure

- **SIDs (names only — fly the charted version):** Not confirmed in reachable research pass — pull the current-AIRAC SID list at planning. 🟧
- **RNP / climb-gradient requirements:** Not confirmed this pass. 🟧
- **Take-off minima:** Not confirmed this pass. 🟧
- **Start-up / push-back:** Murcia GMC (121.755) handles ground movement; specific cross-bleed/APU notification procedure not confirmed. 🟧
- **ATC slot / CTOT & clearance:** No standing slot-coordination confirmed; the field's seasonal (non-H24) operating-hours envelope is the dominant scheduling constraint rather than a classic slot regime. 🟥
- **De-icing:** Not confirmed; no noise/de-icing supplement located, consistent with a newer, lower-traffic field. 🟧

---

## 12. Noise & Environmental

- **Noise abatement (NAP):** No published noise-abatement section found — consistent with a newer, quieter field relative to LEVC's detailed SIRVAL regime. 🟧
- **Night noise / dB limits:** Not applicable/confirmed — the seasonal operating-hours envelope (§6) functions as the de facto night restriction. 🟧
- **Engine run-up restrictions:** Not confirmed. 🟧
- **Reverse thrust / idle-reverse policy:** Not confirmed. 🟧

---

## 13. Ground operations

- **Stands for our types:** 🟧 **Code F operations are explicitly not permitted** per the AIP. **Code E is explicitly provided for** — dedicated taxiway routing requires Code E aircraft to access the apron solely via **TWY F**, with oversteering/entry-exit via **A1/C2** specific to Code E. **PAPI on RWY23 is explicitly not usable for Code letter E aircraft** — a real visual-reference caution for that type on that runway.
- **Push-back:** Mandatory-vs-self-manoeuvre policy not confirmed. 🟧
- **Standard taxi routes:** One rapid-exit taxiway (RET) and 4 holding bays per the airport's design; Code E traffic routes via TWY F as noted above.
- **Hot spots / tight taxiways:** None formally itemised beyond the Code E taxiway-routing requirement above. 🟧
- **Follow-me:** Availability not confirmed. 🟧

---

## 14. Weather & seasonal (durable)

- **Climate / prevailing wind:** Warmer/more continental than the coastal fields — reference temperature 33°C, low average temperature 11°C.
- **Seasonal hazards:** Regional **Saharan dust ("calima")** intrusions periodically affect visibility and air quality in the Murcia region. Periodic strong regional wind/storm events have been reported (gusts on the order of 70–80 km/h in some events) — general regional climatology, not airport-specific data.
- **Local effects:** Hilly, semi-arid inland terrain (consistent with the field's raptor bird-hazard profile) rather than the flat coastal-plain character of LEAL/LEVC.

> **Live weather — pull at planning (T-2h):** METAR, TAF, TREND, SIGMET/AIRMET — including any calima/dust advisory. Not stored here.

---

## 15. NOTAMs

> **Pull at planning (T-2h).** Perishable — not stored here. Check: runway/taxiway closures, navaid U/S (especially the single ILS on RWY23, given the field's no-LVP status), lighting, obstacle/crane, RFF downgrade, GPS/RAIM, current PPR/operating-hours status. Source: AIS / OFP NOTAM block.

---

## 16. Fuel & alternate planning notes

- **Typical role for us:** Leisure destination in the network — **K Global category not yet set in VAMSYS**, non-base.
- **Nearest suitable alternates:** Company preferred alternates **[LEAL](../leal/index.md)** (Alicante), **[LEVC](../levc/index.md)** (Valencia), **LEIB** (Ibiza — no OM C brief exists yet 🟧, plan-time) `[VAMSYS mirror 2026-07-25]` — confirm suitability, runway/RFF adequacy and current minima per leg. Given LEMI's no-LVP status and non-H24 hours, treat these alternates as materially important rather than a formality.
- **Fuel-uplift notes:** Not confirmed in reachable sources. 🟧 See [`OM E — Fuel Policy`](../../../../../flight-ops/fuel-policy.md).
- **Range/perf flags for our fleet:** Field length (3,000 m) non-limiting for any K Global narrowbody or Code E type. **Code F is explicitly not permitted.** See [`OM B — Fleet Capability Matrix`](../../../../../fleet/capability-matrix.md).

---

## 17. Fleet-specific notes (optional)

- LEMI accommodates **Code E** operations (dedicated TWY F routing) but **explicitly excludes Code F**. No confirmed historical widebody movement was found in reachable sources despite the AIP-published Code E capability. See [`OM B — Fleet Capability Matrix`](../../../../../fleet/capability-matrix.md) and [`OM E — Low Visibility Operations`](../../../../../flight-ops/low-visibility-operations.md) given this field's confirmed no-LVP status.

---

## 18. Open items (🟧 — confirm against AIP / current AIRAC)

- **K Global category not set in VAMSYS** — highest-priority item; confirm operational category/suitability before routing this field into the network at any scale.
- Taxi-in/taxi-out timing **not set/n/a in VAMSYS** — no planning-time reference exists yet.
- En-route FIR/ACC identity (presumed Barcelona ACC) — sourced to network-simulation documentation, not an authoritative ENR chart; confirm.
- Transition altitude/level, take-off minima, exact SID/STAR names — not obtained this pass.
- Fuel supplier(s)/hours, handling agent(s) — not confirmed.
- MSA/terrain-clearance exact values — would require the actual IAC approach charts, not obtained this pass.
- Confirm the IAC1 VOR RWY05 "withdrawn/not applicable" note against the current AIRAC — sourced to a VSS (visual segment surface) note in the AD2 text, not independently cross-checked against the chart itself.
- Current status of the former Murcia–San Javier (LELC) field as an emergency alternate for civil aircraft — reported in secondary sources, not confirmed at primary-source level.

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim material (current-AIRAC charts) informs content but is not listed here.*

- **AIP España (ENAIRE), AD 2-LEMI**, current AIRAC amendment — https://aip.enaire.es/aip/contenido_AMDT/LE_Amdt_A_2026_05_AD_2_LEMI_en.html (retrieved 2026-07-26). *Declared distances/PCN, ATC frequencies, navaids/ILS, RFF category, operating hours, Code E taxiway routing/PAPI caution, Code F exclusion, bird-hazard profile.*
- OurAirports — https://ourairports.com/airports/LEMI/ , /runways.html , /frequencies.html (retrieved 2026-07-26). *Cross-check.*
- Wikipedia — "Región de Murcia International Airport" — https://en.wikipedia.org/wiki/Regi%C3%B3n_de_Murcia_International_Airport (retrieved 2026-07-26). *History, traffic figures, on-time-performance reputation, terminal facts.*
- IVAO España — Barcelona Control (LECB) sector documentation — https://wiki.es.ivao.aero/books/lecb-barcelona/page/barcelona-control-lecb-ctr-barcelona-radar-palma-radar-valencia-radar (retrieved 2026-07-26). *Network-sim documentation, corroboration only — used for the presumed Barcelona-FIR jurisdictional context.*
- Murcia Today — regional Saharan-dust/wind-event reporting — https://murciatoday.com/african-dust-affects-air-quality-in-murcia_1000150026-a.html (retrieved 2026-07-26). *General regional climatology.*

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-25 | Built from AIP España (ENAIRE); K Global fields from live VAMSYS; 4-page pack. |
