# ORSJ — Jalal Talabani Intl · Airport Briefing

**ORSJ / ISU** · Sulaymaniyah, Kurdistan Region, Iraq · Middle East
**Version** v0.1 · **Updated** 2026-07-26 · **Status** Draft — Iraq AIP (ICAA) not reachable this pass; not yet reconciled in VAMSYS; built from cross-checked public tier-4 sources

> **Read-me:** Planning aid for the sim, not a chart. Static data is drawn from cross-checked public sources (OurAirports, SkyVector, Wikipedia) pending a live ICAA (Iraq Civil Aviation Authority) AIP pull; approaches/SIDs/STARs are listed **by name only or flagged not-yet-confirmed** — fly the charted current-AIRAC version. **This field is not currently reconciled in VAMSYS — every company-specific field (category, alternates, taxi times, base flag) is marked 🟧 pending reconciliation, not "none."** **A standing 🟥 caution on Baghdad (ORBB) FIR conflict-zone/security status appears in §2, §3.2, §4 and §18 — read it before every flight; it is live and perishable and must be re-verified at planning.** Live weather/NOTAMs are pulled at planning (§14/§15). Open 🟧 items are listed in §18. Flag legend 🟥 restriction/hazard · 🟧 caution/unverified · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| ARP (lat/long) | 35°33′38″N 045°18′55″E / 35.5605, 45.3145 `[OurAirports/SkyVector — consistent with the seeded company anchor]` |
| Field elevation | **2,494 ft AMSL** `[OurAirports/SkyVector — consistent]` |
| Mag variation | Not published / verify 🟧 |
| Time zone | **UTC+3 (AST)** — Iraq does not observe DST |
| Runway(s) | **13/31** 3,500 × 45 m — surface reported as **concrete** by OurAirports and **asphalt** by Wikipedia (unresolved discrepancy 🟧) |
| Preferential runway | Not published / verify 🟧 |
| Longest LDA | Not published / verify 🟧 — 13/31 (3,500 m / 11,483 ft physical length) is the only runway |
| Approaches | **No ILS** — per Wikipedia, sourced to the ICAA consolidated AIP (Feb 2021), the field **does not have an Instrument Landing System**, which "limits operations during poor weather conditions, particularly in winter when fog is common in the Sulaymaniyah plain." PAPI and runway edge lighting are reported present. VOR-based approach only. |
| RFF category | Not published / verify 🟧 |
| Control type | **Radar/procedural, not confirmed** — Sulaimaniyah Tower on the field, with **Baghdad Approach** additionally listed at range per SkyVector; **Baghdad (ORBB) FIR** en route — see [Middle East airspace brief](../../../../airspace/middle-east.md) |
| Elevation class | **2,494 ft** — the highest-elevation field in this Iraq set; combined with the surrounding Zagros-foothill terrain (§3.1) and winter-fog exposure, this is the most terrain/weather-sensitive of the four Iraqi fields in this pack 🟧 |
| Special-airport status | 🟧 **Not in VAMSYS — company category not yet reconciled**; note the **no-ILS** limitation (§3.1/§3.4) as a standing operational constraint regardless of company categorisation |
| Customs / PoE | **Yes** — one of two international gateways in the Kurdistan Region; exact desk hours not confirmed 🟧 |
| K Global category | **Not in VAMSYS** 🟧 |
| K Global base | **Not in VAMSYS** 🟧 |
| Company preferred alternates | **Not in VAMSYS** — no company-preferred alternate on record for this field 🟧 |
| Taxi-in / taxi-out (VAMSYS) | **Not in VAMSYS** 🟧 |

---

## 2. Validation summary

| Domain | Flag | Note |
|---|---|---|
| Terrain / CFIT | 🟧 | Sulaymaniyah sits on a plain within the Kurdistan Region's Zagros-foothill terrain — the field's own name-history and elevation (2,494 ft, the highest of the four Iraqi fields in this pack) put it closer to significant terrain than Baghdad, Basrah or Erbil. No chart-confirmed MSA/obstacle table obtained this pass — verify current AIRAC. |
| Runway length vs fleet perf | 🟩 | 3,500 m is ample for any K Global type per public sourcing ("capable of accommodating wide-body aircraft such as the Boeing 747 and Airbus A330"), though this is a tier-4 characterisation, not a primary performance chart. |
| Approach availability / minima | 🟥 | **No ILS is published for this field** (ICAA AIP-sourced per Wikipedia) — VOR-only approach capability, which "limits operations during poor weather conditions, particularly in winter when fog is common in the Sulaymaniyah plain." This is a durable, structural limitation, not a temporary NOTAM item. |
| Airspace / traffic / control | 🟥 | **STANDING CAUTION.** Sulaymaniyah lies within the Baghdad (ORBB) FIR, under an active EASA CZIB ("avoid at all levels"); a regional summary additionally records drone/missile strikes reported near this field in April 2023. See §3.2. |
| Weather / seasonal hazard | 🟥 | **Winter fog on the Sulaymaniyah plain is explicitly documented as the reason the field lacks reliable poor-weather capability** (no ILS) — this is the field's signature, structural weather hazard. |
| Curfew / slots / hours | 🟧 | Not published / verify — international commercial flights were **suspended entirely 29 Sep 2017 – 14 Mar 2018** (Kurdistan-region-wide, following the 2017 independence referendum), the same precedent documented for Erbil. |
| RFF category vs our types | 🟧 | Not published / verify. |
| Fuel availability | 🟧 | Not published / verify. |
| Customs / handling / security | 🟥 | International PoE confirmed to exist, but the field sits within the FIR-wide conflict-zone advisory and has had reported strikes nearby in 2023 (§3.2). |

---

## 3. Threat & Error Management (TEM)

### 3.1 CFIT / Terrain 🟧
ORSJ sits at **2,494 ft AMSL**, the highest-elevation field of the four in this Iraq pack, on a plain roughly 14 km west of the city of Sulaymaniyah within the Kurdistan Region's Zagros-foothill terrain. No chart-confirmed MSA ring, grid-MORA figure or specific obstacle/terrain table was obtained from a reachable primary source this pass — treat this as an **open, not-yet-quantified terrain consideration** rather than a confirmed non-issue, and verify the current AIRAC MSA ring before flight. This field warrants closer terrain attention than Baghdad or Basrah (both near sea-level, flat) and is broadly comparable in principle to Erbil, though Sulaymaniyah's slightly higher elevation and closer proximity to higher Zagros terrain to the east/southeast make it the most terrain-sensitive field in this set pending primary confirmation.

### 3.2 Airborne conflict / traffic 🟥
> **STANDING CAUTION — read before every flight.** Sulaymaniyah lies within the **Baghdad (ORBB) FIR**, documented in the [Middle East regional airspace brief](../../../../airspace/middle-east.md) as part of the region's **conflict-affected core**, currently under an **active EASA CZIB advising against operation in FIR Baghdad at any altitude or flight level** (CZIB 2026-05, issued 08 Jul 2026, valid to 31 Aug 2026); a current Iraqi NOTAM (**ORBB A0279/26**) additionally warns of **GPS jamming/spoofing in the northern part of the country**, directly covering the Kurdistan Region including Sulaymaniyah. A regional risk summary additionally records **drone and missile strikes reported near ORSU/Sulaymaniyah and Erbil in April 2023**, launched from Turkey and Iran. **This picture is live and perishable — re-verify at every planning cycle.** This note takes no position on any party or cause. Cross-ref [Middle East airspace brief](../../../../airspace/middle-east.md) §9.

Day-to-day terminal traffic is handled by Sulaimaniyah Tower on VHF (with Baghdad Approach also listed at range); no unusual civil VFR-mix issue was identified in reachable sources.

### 3.3 Runway excursion 🟧
No displaced-threshold or declared-distance table was found in reachable sources. The runway surface is inconsistently described between sources (concrete per OurAirports vs. asphalt per Wikipedia) — treat as unresolved pending primary confirmation. **The field has only one runway with no reciprocal/crosswind alternative** — a single-point-of-failure consideration for any runway-serviceability NOTAM.

### 3.4 Weather threat 🟥
**Winter fog on the Sulaymaniyah plain is explicitly documented (via the ICAA AIP, per Wikipedia) as the reason this field lacks an Instrument Landing System, directly limiting poor-weather operations.** This is the field's **signature, structural weather hazard** — not a generic seasonal note. Plan for the real possibility of a winter low-visibility event with no ILS fallback; brief the current alternates picture accordingly. Outside winter, the field shares the region's hot, dry summer climate. See §14.

### 3.5 Operational considerations 🟥
Plan around three durable constraints: (1) the **conflict-zone/security status of the ORBB FIR**, compounded by reported drone/missile activity specifically near this field in 2023 (§3.2); (2) the **structural absence of an ILS**, meaning a winter fog event genuinely limits this field's usability rather than merely degrading it (§3.4) — confirm current alternates before winter-season planning; (3) the field's **name change from "Sulaymaniyah International Airport" to "Jalal Talabani International Airport," effective 19 March 2026** — some third-party sources (SkyVector, aggregators) may still reference the airport under the prior ICAO code **ORSU**; treat **ORSJ** (this pack's designator, matching OurAirports and the current ICAO listing) as authoritative and flag any **ORSU** reference encountered elsewhere as the same physical field under a legacy/alternate designator.

---

## 4. Cautions & Warnings

- 🟥 **STANDING CAUTION — conflict-zone/airspace status.** Baghdad (ORBB) FIR is under an active EASA CZIB advising against operation at any altitude; a regional summary reports drone/missile activity near this specific field in April 2023. Check the current CZIB, state NOTAMs and company routing policy before every flight — see [Middle East airspace brief](../../../../airspace/middle-east.md) §9.
- 🟥 **This field has no ILS** — winter fog on the Sulaymaniyah plain is a documented, structural poor-weather limitation, not a transient NOTAM item. Plan alternates accordingly for any winter-season operation.
- 🟧 **GPS jamming/spoofing is specifically flagged for northern Iraq**, directly covering this field.
- 🟧 **This field is a single-runway airport with no reciprocal/crosswind alternative** — a runway-serviceability NOTAM removes the field entirely.
- 🟧 **This field is not currently reconciled in VAMSYS** — category, alternates, taxi timings and base status are all unconfirmed.
- 🟧 **The airport was renamed from "Sulaymaniyah International Airport" to "Jalal Talabani International Airport" effective 19 March 2026** — some third-party sources may still show the prior name and/or the legacy ICAO code **ORSU**; this pack uses **ORSJ**, matching OurAirports and the current designator.

---

## 5. Aerodrome category, restrictions & crew qualification

- **Special-airport / category:** **Not in VAMSYS** 🟧 — do not assume "standard" without company confirmation. The structural no-ILS limitation (§3.4) is a standing operational constraint regardless of company categorisation.
- **Crew-qualification gate:** Not published / verify. Given the no-ILS/VOR-only approach environment and winter-fog exposure, treat any winter-season assignment as warranting extra scrutiny pending company policy confirmation. 🟧
- **Operating restrictions / bans:** No overflight-specific ban identified for Sulaymaniyah beyond the FIR-level ORBB conflict-zone advisory, which applies uniformly across FIR Baghdad (§3.2/§4). 🟥
- **Overflight / entry / permits:** Standard Kurdistan Region/Iraqi visa-on-arrival procedure has historically applied for international arrivals; confirm current requirements, noting the 2017–2018 region-wide suspension precedent (also documented for Erbil). 🟧
- **Operations notes:** Operated under Iraqi federal/**ICAA** and Kurdistan Regional Government authority. The airport's cargo operation (Azmar Air as agent, Gulf Mar as the exclusive cargo handler, ~2 million tons/year capacity) is reported as one of the larger cargo hubs in the Kurdistan Region — a commercial-context note, not directly relevant to K Global passenger planning.

---

## 6. General / hours / services

| Item | Value | Flag |
|---|---|---|
| ATS hours | Not published / verify | 🟧 |
| AD operating hours | Not published / verify | 🟧 |
| Night / curfew restrictions | None identified in reachable sources | 🟧 |
| RFF category | Not published / verify | 🟧 |
| Fuel | Not published / verify | 🟧 |
| PCN | Not published / verify | 🟧 |
| Customs | Yes — hours not confirmed | 🟧 |
| Handling / FBO | Not published / verify (cargo handling: Azmar Air / Gulf Mar, per §5) | 🟧 |

---

## 7. Runways & declared distances

| RWY | Dimensions | Surface / PCN | TORA | TODA | ASDA | LDA | Notes |
|---|---|---|---|---|---|---|---|
| 13 | 3,500 × 45 m (11,483 × 148 ft) | Concrete (OurAirports) / Asphalt (Wikipedia) — **unresolved discrepancy** 🟧 | Not published 🟧 | Not published 🟧 | Not published 🟧 | Not published 🟧 | Threshold elev. 2,492 ft (SkyVector) |
| 31 | (reciprocal) | As above 🟧 | Not published 🟧 | Not published 🟧 | Not published 🟧 | Not published 🟧 | Threshold elev. 2,440 ft (SkyVector) |

*Physical dimensions (3,500 m / 11,483 ft, 45 m width) are consistent across OurAirports, SkyVector and Wikipedia. Surface composition is disputed between sources — flagged, not resolved. PAPI and runway-edge lighting reported present (Wikipedia, sourced to acukwik.com). No primary declared-distance table or PCN obtained this pass. All distances as sourced.*

---

## 8. Communications

| Service | Callsign | Frequency | Hours | Notes |
|---|---|---|---|---|
| ATIS | Not separately published | — | — | Not published / verify 🟧 |
| Delivery | Not separately published | — | — | Not published / verify 🟧 |
| Ground | Not separately published | — | — | Not published / verify 🟧 |
| Tower | Sulaimaniyah Tower | 118.300 / 121.700 | Not confirmed 🟧 | |
| Approach (extended) | Baghdad Approach | 125.000 / 127.700 | Not confirmed 🟧 | Listed at range per SkyVector — relationship to Sulaimaniyah terminal ops not confirmed |
| Emergency | Sulaymaniyah Emergency | 121.500 / 243.000 | H24 (guard) | Standard ICAO guard frequencies (VHF/UHF) |
| Centre / FIR | Baghdad (ORBB) — exact ACC frequency not obtained this pass | — | — | See [Middle East airspace brief](../../../../airspace/middle-east.md) |

*Frequencies sourced to SkyVector; not cross-checked against a primary ICAA AIP chart this pass — treat as indicative, verify current AIRAC. 🟧*

---

## 9. Navaids

| Aid | Ident | Freq | Hours | Notes |
|---|---|---|---|---|
| VOR | SUL (Jalal Talabani/Sulaimaniyah) | 117.00 | Not confirmed 🟧 | On/near field (~1.7 NM); the field's **only** published approach aid — no ILS (§1/§3.4) |
| ILS | — none published — | — | — | 🟥 **The field does not have an ILS** per the ICAA AIP (via Wikipedia) — a structural, not transient, limitation |

---

## 10. Arrival

- **Transition altitude / level:** Not published / verify. 🟧
- **Speed:** Standard 250 KIAS below FL100 (ICAO norm) — confirm no local override on current chart.
- **Preferential runway logic:** Not published / verify — single runway (13/31), config likely wind-driven. 🟧
- **Approaches (names only — verify minima on current AIRAC charts):**

| RWY | Approach | IAF | FAF/FAP alt | Notes |
|---|---|---|---|---|
| 13 / 31 | VOR (SUL) — **no ILS published** 🟥 | Not published | Not published | Sole approach aid; winter-fog capability is limited (§3.4) — verify current AIRAC |

- **STARs (names only):** Not published / verify — pull the current-AIRAC procedure list at planning. 🟧
- **LVP:** 🟥 **No formal LVP infrastructure identified — the field's no-ILS status means a genuine low-visibility event may render it unusable**, not merely degraded. Confirm current alternates before any winter-season planning.
- **Missed approach watch-items:** Terrain is an **open, not-yet-quantified** consideration (§3.1) given the field's Zagros-foothill proximity and highest elevation in this Iraq set — fly the published missed approach exactly and verify current AIRAC terrain/obstacle detail before relying on any assumption.

---

## 11. Departure

- **SIDs (names only — fly the charted version):** Not published / verify — pull the current-AIRAC procedure list at planning. 🟧
- **RNP / climb-gradient requirements:** Not published / verify. See [`OM E — PBN and RNP Operations`](../../../../../flight-ops/pbn-and-rnp-operations.md). 🟧
- **Take-off minima:** Not published / verify. 🟧
- **Start-up / push-back:** Not published / verify. 🟧
- **ATC slot / CTOT & clearance:** No slot-coordination regime identified; the operative constraint on routing is the FIR-level conflict-zone/altitude-floor picture (§3.2/§5), not a commercial CTOT programme. 🟧
- **De-icing:** Not published / verify — possible in winter given the field's elevation and documented fog exposure. 🟧

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

- **Climate / prevailing wind:** Kurdistan-plateau climate at elevated terrain (2,494 ft) — hot, dry summers and cooler winters.
- **Seasonal hazards:** 🟥 **Winter fog on the Sulaymaniyah plain is common and is the explicit, documented reason this field lacks an ILS** — the field's signature seasonal hazard, with a structural (not just situational) operational consequence. Regional shamal dust events may also affect visibility in season.
- **Local effects:** Zagros-foothill proximity (§3.1) may produce localised terrain/wind effects — not independently quantified this pass. 🟧

> **Live weather — pull at planning (T-2h):** METAR, TAF, TREND, SIGMET/AIRMET. Not stored here.

---

## 15. NOTAMs

> **Pull at planning (T-2h).** Perishable — not stored here. Check: runway closures (single-runway field — a closure removes the field entirely), navaid U/S (the sole VOR is the field's only approach aid), lighting, obstacle/crane, RFF downgrade, GPS/RAIM (northern-Iraq jamming/spoofing advisory directly covers this field). **Given the standing conflict-zone caution (§3.2/§4) and the field's no-ILS/winter-fog exposure, place particular emphasis on current wx, the current EASA CZIB, and the Iraqi NOTAM set for FIR Baghdad (ORBB) before every flight.** Source: AIS / OFP NOTAM block.

---

## 16. Fuel & alternate planning notes

- **Typical role for us:** **Not in VAMSYS** — role (destination/alternate) not yet reconciled. 🟧
- **Nearest suitable alternates:** **Not in VAMSYS** — no company-preferred alternate on record. For planning-purposes reference only (not VAMSYS-sourced, not a company-preferred designation): **ORER** (Erbil, same country — see [ORER Briefing](../orer/index.md)) and **ORBI** (Baghdad, same country — see [ORBI Briefing](../orbi/index.md)), both carrying the same ORBB FIR conflict-zone caution. 🟧 Given the no-ILS/winter-fog limitation (§3.4), a genuine alternate with reliable low-visibility capability should be prioritised in winter planning.
- **Fuel-uplift notes:** Not published / verify. 🟧 See [`OM E — Fuel Policy`](../../../../../flight-ops/fuel-policy.md).
- **Range/perf flags for our fleet:** Field length reported adequate for widebody types per tier-4 sourcing (3,500 m); not confirmed from a primary performance chart. See [`OM B — Fleet Capability Matrix`](../../../../../fleet/capability-matrix.md). 🟧

---

## 17. Fleet-specific notes (optional)

- No type-specific performance consideration identified beyond the general no-ILS/single-runway resilience caution (§3.3/§3.4/§4), which applies fleet-wide. See [`OM B — Fleet Capability Matrix`](../../../../../fleet/capability-matrix.md).

---

## 18. Open items (🟧 — confirm against AIP / current AIRAC)

- **This field is not currently reconciled in VAMSYS** — category, base flag, alternates and taxi timings all require reconciliation.
- **The entire ORBB FIR conflict-zone/security picture is live** — re-verify the current EASA CZIB, Iraqi NOTAMs and company routing policy at every planning cycle.
- **Primary ICAA (Iraq Civil Aviation Authority) AIP** — not reachable this pass (icaa.gov.iq PDF timed out); the no-ILS finding is sourced to Wikipedia's citation of the ICAA AIP (consolidated ed., Feb 2021), not a direct primary read — re-confirm.
- **Runway surface composition** — OurAirports (concrete) and Wikipedia (asphalt) disagree; not reconciled.
- **ICAO designator** — this pack uses **ORSJ** per OurAirports/current listing; SkyVector and Wikipedia's own infobox/citations reference the legacy code **ORSU** — confirm both refer to the same physical field before relying on any third-party chart/tool that uses ORSU.
- **Terrain/MSA detail** (§3.1) — not quantified from a reachable primary source; flagged as the most terrain-sensitive field in this Iraq set pending confirmation.
- Mag variation, RFF category, PCN, take-off minima, transition altitude/level — none confirmed.
- SID/STAR names and minima — none obtained this pass.
- ATS/AD operating hours, curfew, fuel supplier/hours, customs desk hours, handling agent, stand/gate assignment — none confirmed.
- Noise/environmental and ground-operations detail (§12/§13) — none published in reachable sources.

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim material may inform content but is not listed here.*

- OurAirports — https://ourairports.com/airports/ORSU/ and /runways.html (retrieved 2026-07-26). *ARP/elevation/runway cross-check; current ICAO designator ORSJ confirmed here.*
- SkyVector — https://skyvector.com/airport/ORSU/Sulaimaniyah-International-Airport (retrieved 2026-07-26). *Runway/comms/navaid cross-check — uses the legacy ORSU designator.*
- Wikipedia — "Jalal Talabani International Airport" — https://en.wikipedia.org/wiki/Jalal_Talabani_International_Airport (retrieved 2026-07-26). *Field history, Mar 2026 renaming, no-ILS finding (cited to the ICAA consolidated AIP, Feb 2021), winter-fog context, cargo operation detail.*
- Safe Airspace (OPSGROUP) — "Iraq" — https://safeairspace.net/iraq/ (retrieved 2026-07-26). *Current EASA CZIB, Iraqi NOTAM (GPS jamming), Apr 2023 Erbil/Sulaymaniyah strike reference — live/advisory source, re-check at planning.*
- EASA — Conflict Zone Information Bulletins — https://www.easa.europa.eu/en/domains/air-operations/czibs (retrieved 2026-07-26). *CZIB 2026-05 reference — advisory/live source.*
- **Companion OM C files:** [Middle East airspace brief](../../../../airspace/middle-east.md) (Baghdad/ORBB FIR regional conflict-zone context) · [ORER Briefing](../orer/index.md) and [ORBI Briefing](../orbi/index.md) (same-country references) · same-folder [Dispatch](dispatch.md), [Departure](departure.md), [Arrival](arrival.md) pages.

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-26 | Built from public aeronautical data (AIP/threat verification pending); not yet reconciled in VAMSYS; 4-page pack. |
