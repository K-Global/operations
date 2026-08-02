# ORMM — Basrah Intl · Airport Briefing

**ORMM / BSR** · Basra, Iraq · Middle East
**Version** v0.1 · **Updated** 2026-07-26 · **Status** Draft — Iraq AIP (ICAA) not reachable this pass; not yet reconciled in VAMSYS; built from cross-checked public tier-4 sources

> **Read-me:** Planning aid for the sim, not a chart. Static data is drawn from cross-checked public sources (OurAirports, SkyVector, Wikipedia) pending a live ICAA (Iraq Civil Aviation Authority) AIP pull; approaches/SIDs/STARs are listed **by name only or flagged not-yet-confirmed** — fly the charted current-AIRAC version. **This field is not currently reconciled in VAMSYS — every company-specific field (category, alternates, taxi times, base flag) is marked 🟧 pending reconciliation, not "none."** **A standing 🟥 caution on Baghdad (ORBB) FIR conflict-zone/security status appears in §2, §3.2, §4 and §18 — read it before every flight; it is live and perishable and must be re-verified at planning.** Live weather/NOTAMs are pulled at planning (§14/§15). Open 🟧 items are listed in §18. Flag legend 🟥 restriction/hazard · 🟧 caution/unverified · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| ARP (lat/long) | 30°32′57″N 047°39′44″E / 30.5491, 47.6621 `[OurAirports/SkyVector — consistent with the seeded company anchor]` |
| Field elevation | **11 ft AMSL** `[OurAirports]` |
| Mag variation | Not published / verify 🟧 |
| Time zone | **UTC+3 (AST)** — Iraq does not observe DST |
| Runway(s) | **14/32** 4,000 × 45 m concrete, lighted — the field's sole runway |
| Preferential runway | Not published / verify 🟧 |
| Longest LDA | Not published / verify 🟧 — 14/32 (4,000 m / 13,124 ft physical length) is the only runway |
| Approaches | Not published / verify 🟧 — no ILS ident/frequency found in reachable sources; treat as unconfirmed rather than "none" |
| RFF category | Not published / verify 🟧 |
| Control type | **Radar/procedural, not confirmed** — Basrah Approach/Ground/Tower/Ops frequencies listed per OurAirports; **Baghdad (ORBB) FIR** en route — see [Middle East airspace brief](../../../../airspace/middle-east.md) |
| Elevation class | Sea-level (11 ft), riverine/coastal (near the Shatt al-Arab) — **not** hot-and-high; extreme summer heat/humidity is the region's density-altitude and human-factors driver 🟧 |
| Special-airport status | 🟧 **Not in VAMSYS — company category not yet reconciled**; do not assume "standard" without confirmation |
| Customs / PoE | **Yes** — southern Iraq's primary international gateway; exact desk hours not confirmed 🟧 |
| K Global category | **Not in VAMSYS** 🟧 |
| K Global base | **Not in VAMSYS** 🟧 |
| Company preferred alternates | **Not in VAMSYS** — no company-preferred alternate on record for this field 🟧 |
| Taxi-in / taxi-out (VAMSYS) | **Not in VAMSYS** 🟧 |

---

## 2. Validation summary

| Domain | Flag | Note |
|---|---|---|
| Terrain / CFIT | 🟩 | Flat, low-lying riverine plain near the Shatt al-Arab; no close-in high terrain relevant to arrival, departure or missed-approach paths. |
| Runway length vs fleet perf | 🟩 | The sole runway (4,000 m) is ample for any K Global type — but it is a **single runway with no reciprocal alternative on the field**, a resilience consideration in itself. |
| Approach availability / minima | 🟧 | No ILS or other approach identified in reachable sources this pass — not confirmed as absent, simply unverified. |
| Airspace / traffic / control | 🟥 | **STANDING CAUTION.** Basrah lies within the Baghdad (ORBB) FIR, under an active EASA CZIB ("avoid at all levels"). Basrah's southern location (near the Kuwait/Iran border region) gives it a different risk texture than Baghdad/Kurdistan, but the FIR-wide advisory applies uniformly. See §3.2. |
| Weather / seasonal hazard | 🟧 | Hot, humid southern-Iraq riverine climate; shamal dust storms common to the wider Gulf/Mesopotamian region; no AIP-sourced statistic obtained this pass. |
| Curfew / slots / hours | 🟧 | Not published / verify. Historical reporting (2010) describes strict checkpoint-controlled ground access to the airport — a security posture, not a scheduling curfew. |
| RFF category vs our types | 🟧 | Not published / verify. |
| Fuel availability | 🟧 | Ground/fuel handling has changed operator multiple times historically (SkyLink Arabia from 2002; Basra Ground Handling Services/Iraqi Airways partnership from 2014; Lebanese Air Transport–Charter Ground Handling from 2021) — current supplier/hours not confirmed. |
| Customs / handling / security | 🟥 | International PoE confirmed to exist; the field has a documented history of strict, checkpoint-controlled ground access and sits within the FIR-wide conflict-zone advisory (§3.2). |

---

## 3. Threat & Error Management (TEM)

### 3.1 CFIT / Terrain 🟩
ORMM sits at 11 ft AMSL on the flat, low-lying riverine plain near the **Shatt al-Arab**, close to Iraq's border region with Kuwait and Iran. There is **no close-in high terrain** relevant to arrival, departure or missed-approach paths. This is a non-issue field for terrain; verify the MSA ring on the current chart as routine practice, but CFIT is not the operative threat here.

### 3.2 Airborne conflict / traffic 🟥
> **STANDING CAUTION — read before every flight.** Basrah lies within the **Baghdad (ORBB) FIR**, documented in the [Middle East regional airspace brief](../../../../airspace/middle-east.md) as part of the region's **conflict-affected core**, currently under an **active EASA CZIB advising against operation in FIR Baghdad at any altitude or flight level** (CZIB 2026-05, issued 08 Jul 2026, valid to 31 Aug 2026). The FIR-wide advisory, the FAA SFAR 77 altitude floor (FL320) and the other state-level floors (§ORBI Briefing §3.2 for the full detail) apply **uniformly across the whole of FIR Baghdad, including Basrah's airspace**, even though Basrah's own local security texture (proximity to the Gulf, historically less rocket/drone incident reporting than Baghdad/Kurdistan in the sources reachable this pass) differs from the north of the country. **This picture is live and perishable — it is not re-derived here.** Pull the current EASA CZIB, the Iraqi NOTAM set, and any applicable company routing policy at every planning cycle, before every flight. This note takes no position on any party or cause. Cross-ref [Middle East airspace brief](../../../../airspace/middle-east.md) §9.

No specific direct-attack incident at ORMM itself was identified in the sources reachable this pass — this is **not** confirmation that none occurred, only that none was found; treat the FIR-wide advisory as the governing standard regardless.

### 3.3 Runway excursion 🟧
No displaced-threshold or declared-distance table was found in reachable sources for the sole runway. No contamination data was found. **The field has only one runway with no reciprocal/crosswind alternative** — a single-point-of-failure consideration for any runway-serviceability NOTAM.

### 3.4 Weather threat 🟧
Southern Iraq's riverine climate is hot and humid in summer (compounding the region's general extreme-heat pattern) with mild, occasionally wet winters. **Shamal dust storms**, common to the wider Gulf/Mesopotamian region, can reduce visibility with limited warning. No ORMM-specific frequency statistic was found — treat as regional climatology pending a primary source. See §14.

### 3.5 Operational considerations 🟥
Plan around two durable constraints: (1) the **conflict-zone/security status of the ORBB FIR** (§3.2), which governs this field exactly as it does Baghdad and Erbil, notwithstanding Basrah's different local incident history; (2) **historical reporting describes strict, checkpoint-controlled ground access** to the airport, including dedicated transfer/escort arrangements for foreign-government personnel during the 2000s–2010s — while this is largely historical colour rather than a current operational fact, it signals that ground-access security posture at this field has been, and may again be, materially different from a routine international gateway.

---

## 4. Cautions & Warnings

- 🟥 **STANDING CAUTION — conflict-zone/airspace status.** Baghdad (ORBB) FIR, which governs Basrah's airspace, is under an active EASA CZIB advising against operation at any altitude. Check the current CZIB, state NOTAMs and company routing policy before every flight — see [Middle East airspace brief](../../../../airspace/middle-east.md) §9.
- 🟧 **This field is a single-runway airport with no reciprocal/crosswind alternative** — a runway-serviceability NOTAM removes the field entirely; plan alternates accordingly.
- 🟧 **This field is not currently reconciled in VAMSYS** — category, alternates, taxi timings and base status are all unconfirmed pending reconciliation, not "standard."
- 🟧 **Historical reporting describes strict, checkpoint-controlled ground access** — confirm current-day arrangements before assuming routine gateway handling.
- 🟧 **Ground/fuel handling has changed operator multiple times historically** — confirm the current handling agent before planning.

---

## 5. Aerodrome category, restrictions & crew qualification

- **Special-airport / category:** **Not in VAMSYS** 🟧 — do not assume "standard" without company confirmation.
- **Crew-qualification gate:** Not published / verify. 🟧
- **Operating restrictions / bans:** No overflight-specific ban identified for Basrah beyond the FIR-level ORBB conflict-zone advisory, which applies uniformly across FIR Baghdad (§3.2/§4). 🟥
- **Overflight / entry / permits:** Standard Iraqi visa/customs procedure expected for scheduled international arrivals; historical reporting describes stricter checkpoint-controlled ground access than at a routine gateway (§3.5) — confirm current-day requirements. 🟧
- **Operations notes:** **Iraq Civil Aviation Authority (ICAA)** is the state regulator. Ground handling has changed provider multiple times historically: **SkyLink Arabia** (from 2002), **Basra Ground Handling Services** (Iraqi Airways partnership, from 2014), **Lebanese Air Transport – Charter Ground Handling** (from 2021, with the Directorate of Iraqi Airports) — current provider not confirmed. 🟧

---

## 6. General / hours / services

| Item | Value | Flag |
|---|---|---|
| ATS hours | Not published / verify | 🟧 |
| AD operating hours | Not published / verify | 🟧 |
| Night / curfew restrictions | None identified in reachable sources | 🟧 |
| RFF category | Not published / verify | 🟧 |
| Fuel | Handling/fuel operator has changed multiple times historically; current supplier/hours not confirmed | 🟧 |
| PCN | Not published / verify | 🟧 |
| Customs | Yes — hours not confirmed | 🟧 |
| Handling / FBO | Multiple historical operators (see §5); current agent not confirmed | 🟧 |

---

## 7. Runways & declared distances

| RWY | Dimensions | Surface / PCN | TORA | TODA | ASDA | LDA | Notes |
|---|---|---|---|---|---|---|---|
| 14 | 4,000 × 45 m (13,124 × 148 ft) | Concrete, lighted / PCN not published 🟧 | Not published 🟧 | Not published 🟧 | Not published 🟧 | Not published 🟧 | Sole runway on the field |
| 32 | (reciprocal) | Concrete, lighted / PCN not published 🟧 | Not published 🟧 | Not published 🟧 | Not published 🟧 | Not published 🟧 | Sole runway on the field |

*Physical dimensions cross-checked between OurAirports and public tier-4 references (good agreement); a primary declared-distance (TORA/TODA/ASDA/LDA) table and PCN were not obtained this pass — treat as 🟧 pending ICAA AIP confirmation. All distances as sourced.*

---

## 8. Communications

| Service | Callsign | Frequency | Hours | Notes |
|---|---|---|---|---|
| ATIS | Not separately published | — | — | Not published / verify 🟧 |
| Delivery | Not separately published | — | — | Not published / verify 🟧 |
| Ground | Basrah Ground | 125.900 | Not confirmed 🟧 | |
| Ops | Basrah Ops | 132.700 | Not confirmed 🟧 | Operations/company frequency, not a standard ATC position |
| Tower | Basrah Tower | 118.700 | Not confirmed 🟧 | |
| Approach | Basrah Approach | 119.400 | Not confirmed 🟧 | |
| Centre / FIR | Baghdad (ORBB) — exact ACC frequency not obtained this pass | — | — | See [Middle East airspace brief](../../../../airspace/middle-east.md) |

*Frequencies sourced to OurAirports; not cross-checked against a primary ICAA AIP chart this pass — treat as indicative, verify current AIRAC. 🟧*

---

## 9. Navaids

| Aid | Ident | Freq | Hours | Notes |
|---|---|---|---|---|
| — | Not published / verify | — | — | No on-field navaid identified in reachable sources this pass 🟧 |

---

## 10. Arrival

- **Transition altitude / level:** Not published / verify. 🟧
- **Speed:** Standard 250 KIAS below FL100 (ICAO norm) — confirm no local override on current chart.
- **Preferential runway logic:** Not published / verify — single runway (14/32), config likely wind-driven. 🟧
- **Approaches (names only — verify minima on current AIRAC charts):**

| RWY | Approach | IAF | FAF/FAP alt | Notes |
|---|---|---|---|---|
| 14 / 32 | Not published / verify 🟧 | — | — | Verify current AIRAC — sole runway |

- **STARs (names only):** Not published / verify — pull the current-AIRAC procedure list at planning. 🟧
- **LVP:** Not published / verify. 🟧
- **Missed approach watch-items:** Terrain is not the driver (flat riverine plain) — the operative concern at this field is the FIR-level **conflict-zone/security environment** (§3.2), not a navigational hazard.

---

## 11. Departure

- **SIDs (names only — fly the charted version):** Not published / verify — pull the current-AIRAC procedure list at planning. 🟧
- **RNP / climb-gradient requirements:** Not published / verify. See [`OM E — PBN and RNP Operations`](../../../../../flight-ops/pbn-and-rnp-operations.md). 🟧
- **Take-off minima:** Not published / verify. 🟧
- **Start-up / push-back:** Not published / verify. 🟧
- **ATC slot / CTOT & clearance:** No slot-coordination regime identified; the operative constraint on routing is the FIR-level conflict-zone/altitude-floor picture (§3.2/§5), not a commercial CTOT programme. 🟧
- **De-icing:** Not published — low-probability requirement given the hot southern-Iraq climate, but not confirmed as NIL. 🟧

---

## 12. Noise & Environmental

- **Noise abatement (NAP):** Not published / verify. 🟧
- **Night noise / dB limits:** Not published / verify. 🟧
- **Engine run-up restrictions:** Not published / verify. 🟧
- **Reverse thrust / idle-reverse policy:** Not published / verify. 🟧

---

## 13. Ground operations

- **Stands for our types:** Not published / verify. 🟧
- **Push-back:** Not published / verify. 🟧
- **Standard taxi routes:** Not published / verify — confirm with Ground on the day.
- **Hot spots / tight taxiways:** Not published / verify. 🟧
- **Follow-me:** Not published / verify. 🟧

---

## 14. Weather & seasonal (durable)

- **Climate / prevailing wind:** Hot, humid riverine climate near the Shatt al-Arab confluence — extremely hot summers, mild and occasionally wet winters.
- **Seasonal hazards:** **Shamal dust storms**, common to the wider Gulf/Mesopotamian region, can reduce visibility with limited warning; summer heat/humidity is a human-factors and density-altitude consideration despite the field's sea-level elevation.
- **Local effects:** Riverine/coastal proximity (Shatt al-Arab, near the head of the Persian Gulf) may produce localised humidity/haze effects — a geography-based inference, not an AIP-sourced statistic. 🟧

> **Live weather — pull at planning (T-2h):** METAR, TAF, TREND, SIGMET/AIRMET. Not stored here.

---

## 15. NOTAMs

> **Pull at planning (T-2h).** Perishable — not stored here. Check: runway closures (single-runway field — a closure removes the field entirely), navaid U/S, lighting, obstacle/crane, RFF downgrade, GPS/RAIM. **Given the standing conflict-zone caution (§3.2/§4), place particular emphasis on the current EASA CZIB, the Iraqi NOTAM set for FIR Baghdad (ORBB), and any active company routing restriction before every flight.** Source: AIS / OFP NOTAM block.

---

## 16. Fuel & alternate planning notes

- **Typical role for us:** **Not in VAMSYS** — role (destination/alternate) not yet reconciled. 🟧
- **Nearest suitable alternates:** **Not in VAMSYS** — no company-preferred alternate on record. For planning-purposes reference only (not VAMSYS-sourced, not a company-preferred designation): **ORBI** (same country — see [ORBI Briefing](../orbi/index.md), noting it carries the same ORBB FIR conflict-zone caution). 🟧
- **Fuel-uplift notes:** Ground/fuel handling has changed operator multiple times historically; current supplier/hours not confirmed. 🟧 See [`OM E — Fuel Policy`](../../../../../flight-ops/fuel-policy.md).
- **Range/perf flags for our fleet:** Field length/strength non-limiting for any K Global type on the sole runway (4,000 m). See [`OM B — Fleet Capability Matrix`](../../../../../fleet/capability-matrix.md).

---

## 17. Fleet-specific notes (optional)

- No type-specific performance consideration identified beyond the general single-runway resilience caution (§3.3/§4). See [`OM B — Fleet Capability Matrix`](../../../../../fleet/capability-matrix.md).

---

## 18. Open items (🟧 — confirm against AIP / current AIRAC)

- **This field is not currently reconciled in VAMSYS** — category, base flag, alternates and taxi timings all require reconciliation.
- **The entire ORBB FIR conflict-zone/security picture is live** — re-verify the current EASA CZIB, Iraqi NOTAMs and company routing policy at every planning cycle.
- **Primary ICAA (Iraq Civil Aviation Authority) AIP** — not reachable this pass (icaa.gov.iq PDF timed out); all data below is tier-4 sourced pending a direct pull.
- Mag variation, RFF category, PCN, take-off minima, transition altitude/level, LVP triggers — none confirmed.
- Approach/ILS/SID/STAR names and minima — none obtained this pass; no on-field navaid identified.
- ATS/AD operating hours, curfew, fuel supplier/hours, customs desk hours, current handling agent, stand/gate assignment — none confirmed (handling agent has changed multiple times historically).
- Noise/environmental and ground-operations detail (§12/§13) — none published in reachable sources.

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim material may inform content but is not listed here.*

- OurAirports — https://ourairports.com/airports/ORMM/ , /runways.html and /frequencies.html (retrieved 2026-07-26). *ARP/elevation/runway/comms cross-check.*
- Wikipedia — "Basra International Airport" — https://en.wikipedia.org/wiki/Basra_International_Airport (retrieved 2026-07-26). *Field history, historical ground-handling operator changes, RAF 903 Expeditionary Air Wing presence (2003–2009), historical checkpoint-controlled access.*
- Safe Airspace (OPSGROUP) — "Iraq" — https://safeairspace.net/iraq/ (retrieved 2026-07-26). *Current EASA CZIB and FIR-wide advisory context — live/advisory source, re-check at planning.*
- EASA — Conflict Zone Information Bulletins — https://www.easa.europa.eu/en/domains/air-operations/czibs (retrieved 2026-07-26). *CZIB 2026-05 reference — advisory/live source.*
- **Companion OM C files:** [Middle East airspace brief](../../../../airspace/middle-east.md) (Baghdad/ORBB FIR regional conflict-zone context) · [ORBI Briefing](../orbi/index.md) (same-country reference) · same-folder [Dispatch](dispatch.md), [Departure](departure.md), [Arrival](arrival.md) pages.

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-26 | Built from public aeronautical data (AIP/threat verification pending); not yet reconciled in VAMSYS; 4-page pack. |
