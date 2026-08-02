# OYSN — Sanaa Intl · Airport Briefing

**OYSN / SAH** · Sana'a, Yemen · Middle East
**Version** v0.1 · **Updated** 2026-07-26 · **Status** Draft — public-data build, primary AIP unreachable

> **Read-me:** Planning aid for the sim, not a chart. Static data is cross-checked from public aeronautical sources (AIP Yemen/CAMA was not reachable this pass); approaches/SIDs/STARs are listed **by name only or flagged not published** — fly the charted current-AIRAC version if this field is ever used. Live weather/NOTAMs are pulled at planning (§14/§15). Open 🟧 items are listed in §18. Flag legend 🟥 restriction/hazard · 🟧 caution/unverified · 🟩 normal.

---

> 🟥 **STANDING CAUTION — Yemen active-conflict airspace; field long-restricted / repeatedly struck.** Yemen's airspace (Sana'a FIR, **OYSC**) and every Yemeni aerodrome are subject to severe, live security risk. **OYSN specifically has been repeatedly damaged or closed by military strikes since 2015 and is NOT a field K Global operates to or through — it carries no VAMSYS destination record.** This brief is **standby/reference material only**, built for situational awareness, not as an assertion that commercial access exists. Any reference to this field requires current airspace, security-clearance and runway-serviceability verification before any planning use. EASA CZIB assesses the Sana'a FIR **HIGH risk at all altitudes**; the US FAA (SFAR 115) prohibits US operators from the FIR's landmass. Most recently, **Safe Airspace (OPSGROUP) records that in July 2026 Yemen's own government struck the OYSN runway to prevent an Iranian aircraft from landing** — the runway's current serviceability must be treated as unconfirmed pending live NOTAM. See the [Middle East Airspace brief](../../../../airspace/middle-east.md) §9. **Not in VAMSYS** 🟧 — every K Global-network field below reflects that absence.

---

## 1. Snapshot

| Field | Value |
|---|---|
| ARP (lat/long) | 15.4763, 44.2197 `[OurAirports, cross-checked]` |
| Field elevation | **7,216 ft / 2,199 m AMSL** `[OurAirports]` — very high elevation |
| Mag variation | Not published / verify 🟧 |
| Time zone | UTC+3 (no DST) |
| Runway(s) | **18/36**, one runway, ~3,200–3,252 m (reported 3,252 × 45 m per OurAirports; ~3,200 m per Wikipedia), asphalt, lighted `[OurAirports; Wikipedia]` — **current serviceability unconfirmed following reported strikes, most recently Jul 2026** 🟥 |
| Preferential runway | Not applicable — single runway |
| Longest LDA | Not independently confirmed beyond the runway length above 🟧 |
| Approaches | Not published / verify — no current-AIRAC procedure list obtained 🟧 |
| RFF category | Not published / verify 🟧 |
| Control type | Not published / verify 🟧 |
| Elevation class | 🟧 **Very high elevation (7,216 ft) — hot-and-high performance driver**, compounded by surrounding highland terrain; see [`OM E — High-Elevation Aerodrome Operations`](../../../../../flight-ops/high-elevation-aerodrome-operations.md) |
| Special-airport status | 🟥 **Joint civil/military field** — the runway is shared with **Al-Dailami Air Base**; repeatedly bombed/struck since 2015; long-restricted/limited civil operations — see §5 |
| Customs / PoE | Tagged as a Port of Entry in public data; hours not published 🟧 |
| K Global category | **Not in VAMSYS** 🟧 — no destination record |
| K Global base | No |
| K Global preferred alternates | **Not in VAMSYS** 🟧 — no record; do not infer a company alternate set for this field |
| Taxi-in / taxi-out (VAMSYS) | **Not in VAMSYS** 🟧 |

---

## 2. Validation summary

| Domain | Flag | Note |
|---|---|---|
| Terrain / CFIT | 🟧 | Field sits at 7,216 ft on the Yemeni highland plateau, ringed by mountainous terrain — a genuine terrain/MSA consideration on top of the elevation itself; no MSA/obstacle chart obtained this pass. |
| Runway length vs fleet perf | 🟥 | ~3,200 m at 7,216 ft field elevation is a materially different performance case than the same length at sea level — hot-and-high derate/weight-restriction planning would be mandatory if ever used; current runway serviceability itself is unconfirmed after repeated strikes. |
| Approach availability / minima | 🟧 | No current-AIRAC procedure list obtained; navaid/approach infrastructure currency is unconfirmed given repeated strikes on the field. |
| Airspace / traffic / control | 🟥 | Sana'a FIR (OYSC) assessed HIGH risk at all altitudes by EASA CZIB; the field itself is a recurring strike target. |
| Weather / seasonal hazard | 🟧 | Highland-plateau climate; no field-specific seasonal statistic obtained — treat as general regional climatology pending confirmation. |
| Curfew / slots / hours | 🟧 | Not published / verify; civil scheduled service has been intermittent for a decade under blockade/closure cycles. |
| RFF category vs our types | 🟧 | Not published / verify. |
| Fuel availability | 🟧 | A pre-conflict source describes Jet A-1 handling by Civil Airlines/forwarders/operators; current-day availability given the field's repeated damage is not confirmed. |
| Customs / handling / security | 🟥 | Security and physical runway/terminal serviceability are the dominant considerations, not customs process — see §5. |

---

## 3. Threat & Error Management (TEM)

### 3.1 CFIT / Terrain 🟧
OYSN sits at **7,216 ft AMSL** on the Yemeni highland plateau (the Sana'a basin), which is itself ringed by mountainous terrain — this is a genuine combined **elevation-plus-terrain** case, not simply a high-elevation flat plateau. No MSA/obstacle chart was obtained from a reachable source this pass — treat any terrain clearance figure as unconfirmed. See [`OM E — High-Elevation Aerodrome Operations`](../../../../../flight-ops/high-elevation-aerodrome-operations.md) for the general hot-and-high/terrain framework.

### 3.2 Airborne conflict / traffic 🟥
OYSN lies within the **Sana'a FIR (OYSC)**, assessed by EASA CZIB as **HIGH risk at all altitudes and flight levels**. The field itself has been a **direct, repeated strike target** rather than incidental collateral airspace: Saudi-led coalition airstrikes damaged the runway and terminal in **April 2015** and again in **November 2017**; Israeli airstrikes struck the airport in **December 2024** and, far more severely, on **6 May 2025** — described by the airport's own director as leaving the facility "completely destroyed," with several aircraft (including three Yemenia aircraft) destroyed on the ground; a further Israeli strike on **28 May 2025** destroyed the last Yemenia aircraft still operating from the field. Most recently, **Safe Airspace (OPSGROUP) records that in July 2026 Yemen's own government struck the OYSN runway specifically to prevent an Iranian aircraft from landing** — a reminder that the strike risk here comes from multiple, shifting parties, not one predictable actor. Cross-ref [Middle East Airspace brief](../../../../airspace/middle-east.md) §9.

### 3.3 Runway excursion 🟥
No declared-distance table, displaced-threshold or PCN data was obtained from a primary source. More fundamentally, the runway has been **repeatedly bombed and damaged** over the past decade (2015, 2017, 2024, 2025, 2026 per public reporting) — its physical serviceability at any given moment cannot be assumed and must be confirmed by live NOTAM before any reference to this field is acted on.

### 3.4 Weather threat 🟧
Highland-plateau climate at 7,216 ft — expect cooler temperatures than the Yemeni coast, with the reduced air density of altitude itself being the primary performance factor rather than heat. No field-specific seasonal statistic (fog, convective, dust) was obtained from a reachable source this pass.

### 3.5 Operational considerations 🟥
This is a **joint civil/military aerodrome** — the single runway is **shared with Al-Dailami Air Base**, a Yemeni military installation, meaning any civil movement co-exists with military activity even in the rare windows the field has been open to commercial traffic. Civilian scheduled service has been essentially **suspended, resumed, and re-suspended repeatedly since March 2015** (no-fly zone imposed; brief 2022 reopening after six years; heavy damage again in 2024–2025; a 2026 strike). There is no stable operating baseline to brief against — every planning touchpoint must start from a fresh security and serviceability check, not from this document's snapshot.

---

## 4. Cautions & Warnings

- 🟥 **Not in VAMSYS — no company destination record exists for this field.** Any reference to OYSN is for situational awareness only.
- 🟥 The runway has been **struck or damaged at least five times since 2015** (2015, 2017, 2024, 2025 ×2, 2026) by multiple different parties — never assume it is open or serviceable without a current NOTAM check.
- 🟥 Joint civil/military field — runway shared with **Al-Dailami Air Base**.
- 🟥 Sana'a FIR (OYSC) is assessed **HIGH risk at all altitudes** by EASA CZIB.
- 🟧 **7,216 ft field elevation** on a terrain-ringed plateau — a genuine hot-and-high-plus-terrain case if this field were ever relevant to planning; see [`OM E — High-Elevation Aerodrome Operations`](../../../../../flight-ops/high-elevation-aerodrome-operations.md).
- 🟧 Civil scheduled service has had no stable multi-year baseline for a decade — do not extrapolate "normal" operations from any single period of public reporting.

---

## 5. Aerodrome category, restrictions & crew qualification

- **Special-airport / category:** Not operator-categorised in reachable sources; the standing crew-briefing items are the **active-conflict/repeated-strike status**, the **joint civil/military runway share**, and the **high-elevation/terrain combination**. 🟥
- **Crew-qualification gate:** Not applicable — this field is not planned for normal commercial operation under the standing caution. 🟥
- **Operating restrictions / bans:** Multiple states restrict or prohibit their operators from the Sana'a FIR landmass (US SFAR 115; German, French, Canadian, UK advisories) — see [Middle East Airspace brief](../../../../airspace/middle-east.md) §9. 🟥
- **Overflight / entry / permits:** Yemen-FIR operations reportedly require **72-hour prior permission**; field-level permit regime not independently confirmed. 🟧
- **Operations notes:** Runway shared with Al-Dailami Air Base (military). Pre-conflict public reporting describes ground handling/fuelling provided by Civil Airlines, forwarders and operators such as Yemenia — current-day arrangement unconfirmed given the field's repeated damage. 🟧

---

## 6. General / hours / services

| Item | Value | Flag |
|---|---|---|
| ATS hours | Not published / verify | 🟧 |
| AD operating hours | Not published / verify — service has been intermittent for a decade | 🟧 |
| Night / curfew restrictions | Not published / verify | 🟧 |
| RFF category | Not published / verify | 🟧 |
| Fuel | Pre-conflict reporting: Jet A-1, handled by Civil Airlines/forwarders/operators; current status unconfirmed | 🟧 |
| PCN | Not published / verify | 🟧 |
| Customs | Tagged Port of Entry in public data; hours not published | 🟧 |
| Handling / FBO | Not published / verify | 🟧 |

---

## 7. Runways & declared distances

| RWY | Dimensions | Surface / PCN | TORA | TODA | ASDA | LDA | Notes |
|---|---|---|---|---|---|---|---|
| 18 | ~3,200–3,252 m × 45 m | Asphalt, lighted / PCN not published 🟧 | Not published 🟧 | Not published 🟧 | Not published 🟧 | Not published 🟧 | Shared with Al-Dailami Air Base; repeatedly struck since 2015 — **current serviceability unconfirmed** 🟥 |
| 36 | ~3,200–3,252 m × 45 m | Asphalt, lighted / PCN not published 🟧 | Not published 🟧 | Not published 🟧 | Not published 🟧 | Not published 🟧 | Reciprocal — same runway |

*Sources: OurAirports (3,252 × 45 m, retrieved 2026-07-26); Wikipedia (~3,200 m, retrieved 2026-07-26) — figures broadly consistent within rounding, neither is AIP-grade. Declared distances, PCN and displaced threshold are **not available from a primary source this pass** — do not use for dispatch. All units metric unless noted.*

---

## 8. Communications

| Service | Callsign | Frequency | Hours | Notes |
|---|---|---|---|---|
| ATIS | Not published | — | — | 🟧 |
| Delivery | Not published | — | — | 🟧 |
| Ground | Sana'a Ground | 121.6 MHz | Not published 🟧 | `[OurAirports, tier-4 — not AIP-confirmed]` |
| Tower | Sana'a Tower | 118.9 MHz | Not published 🟧 | `[OurAirports, tier-4]` |
| Approach | Not published | — | — | 🟧 |
| Centre / FIR | Sana'a FIR (OYSC) | Per current AIRAC | — | See [Middle East Airspace brief](../../../../airspace/middle-east.md) |

*Frequencies sourced to OurAirports (tier-4, crowd-sourced) — not independently confirmed against AIP Yemen (CAMA), which was not reachable this pass, and unlikely to reflect the field's current (repeatedly damaged) infrastructure state.*

---

## 9. Navaids

| Aid | Ident | Freq | Hours | Notes |
|---|---|---|---|---|
| — | — | — | — | No navaid data obtained from a reachable source this pass — Not published / verify 🟧 |

---

## 10. Arrival

- **Transition altitude / level:** Not published / verify. 🟧
- **Speed:** Standard ICAO profile assumed, not locally confirmed.
- **Preferential runway logic:** Not applicable — single runway.
- **Approaches (names only — verify minima on current AIRAC charts):**

| RWY | Approach | IAF | FAF/FAP alt | Notes |
|---|---|---|---|---|
| 18 | Not published / verify 🟧 | — | — | High-elevation approach — non-standard altimetry/performance margins would apply if ever flown |
| 36 | Not published / verify 🟧 | — | — | — |

- **STARs (names only):** Not published / verify. 🟧
- **LVP:** Not published / verify. 🟧
- **Missed approach watch-items:** 🟥 Terrain-driven — the field sits on a mountain-ringed plateau at 7,216 ft; a missed approach here is a genuine high-elevation/terrain event, not a routine go-around. No chart obtained to quantify it this pass.

---

## 11. Departure

- **SIDs (names only — fly the charted version):** Not published / verify. 🟧
- **RNP / climb-gradient requirements:** 🟥 Would be a live consideration at this elevation/terrain combination if ever used — see [`OM E — High-Elevation Aerodrome Operations`](../../../../../flight-ops/high-elevation-aerodrome-operations.md) and [`OM E — PBN and RNP Operations`](../../../../../flight-ops/pbn-and-rnp-operations.md).
- **Take-off minima:** Not published / verify. 🟧
- **Start-up / push-back:** Not published / verify. 🟧
- **ATC slot / CTOT & clearance:** No slot/CTOT regime identified; not relevant under the standing caution against normal commercial planning. 🟧
- **De-icing:** Not published / verify — highland-plateau elevation makes occasional cold-season conditions plausible, but no data obtained. 🟧

---

## 12. Noise & Environmental

- **Noise abatement (NAP):** Not published / verify. 🟧
- **Night noise / dB limits:** Not published / verify. 🟧
- **Engine run-up restrictions:** Not published / verify. 🟧
- **Reverse thrust / idle-reverse policy:** Not published / verify. 🟧

---

## 13. Ground operations

- **Stands for our types:** Not published / verify — a 2020 UN-Habitat report describes an apron with 27 parking spaces, pre-dating the 2024–2026 strike sequence; current usable stand count unconfirmed. 🟧
- **Push-back:** Not published / verify. 🟧
- **Standard taxi routes:** Not published / verify. 🟧
- **Hot spots / tight taxiways:** Not published / verify. 🟧
- **Follow-me:** Not published / verify. 🟧

---

## 14. Weather & seasonal (durable)

- **Climate / prevailing wind:** Highland-plateau climate (7,216 ft) — cooler and drier than coastal Yemen; reduced air density is the operative performance factor.
- **Seasonal hazards:** No field-specific seasonal statistic obtained from a reachable source — general highland-plateau climatology only, pending confirmation.
- **Local effects:** Terrain-influenced local wind/turbulence effects are plausible given the surrounding mountainous terrain but not independently confirmed.

> **Live weather — pull at planning (T-2h):** METAR, TAF, TREND, SIGMET/AIRMET. Not stored here.

---

## 15. NOTAMs

> **Pull at planning (T-2h).** Perishable — not stored here. Given the standing caution, this must include: current Sana'a FIR conflict-zone bulletins (ICAO Conflict Zone Information Repository, EASA CZIB, OPSGROUP/safeairspace.net), **runway serviceability following the reported Jul 2026 strike and prior strikes**, navaid U/S, RFF status, and any NOTAM reflecting military activity at the co-located Al-Dailami Air Base. Source: official AIS / OFP NOTAM block.

---

## 16. Fuel & alternate planning notes

- **Typical role for us:** **Not in VAMSYS — no scheduled or standby role.** Reference/situational-awareness only.
- **Nearest suitable alternates:** Not in VAMSYS — no company alternate record; do not infer one. Any hypothetical alternate selection would need to account for the Sana'a-FIR-wide risk picture, not just this field's own status.
- **Fuel-uplift notes:** Pre-conflict public reporting describes Jet A-1 handling by Civil Airlines/forwarders/operators such as Yemenia; current-day availability is unconfirmed given the field's repeated destruction. See [`OM E — Fuel Policy`](../../../../../flight-ops/fuel-policy.md). 🟧
- **Range/perf flags for our fleet:** 🟥 **7,216 ft field elevation on a terrain-ringed plateau** would be a material weight/derate consideration for any K Global type — see [`OM E — High-Elevation Aerodrome Operations`](../../../../../flight-ops/high-elevation-aerodrome-operations.md) and [`OM B — Fleet Capability Matrix`](../../../../../fleet/capability-matrix.md). This is academic pending the field ever being a live planning candidate.

---

## 17. Fleet-specific notes (optional)

- Any fleet-specific performance analysis for OYSN would need to combine the **7,216 ft elevation**, **surrounding terrain**, and an **unconfirmed/likely-degraded runway and navaid state** — a compound case rather than a single-factor one. Not developed further given the field carries no VAMSYS record and no planned operational role.

---

## 18. Open items (🟧 — confirm against AIP / current AIRAC)

- **Primary source access.** AIP Yemen (CAMA) was not reachable this pass; all static data here is cross-checked public-domain (OurAirports, Wikipedia, Safe Airspace/OPSGROUP) and carries 🟧 pending primary-source confirmation.
- **Current runway serviceability** — repeatedly struck (2015, 2017, 2024, 2025 ×2, 2026 per public reporting); status at any given moment must be confirmed by live NOTAM, not assumed from this brief.
- **Declared distances, PCN, navaids, approaches, SIDs/STARs, MSA/terrain chart, ATS/AD hours, RFF category** — none obtained from a primary source.
- **ATC frequencies** — sourced to OurAirports (tier-4), unlikely to reflect current infrastructure state.
- **Fuel/handling availability** — pre-conflict reporting only.
- **VAMSYS status** — confirmed absent (no record) as of this build; re-confirm if network status changes.

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim material (current-AIRAC charts) informs content but is not listed here.*

- OurAirports — https://ourairports.com/airports/OYSN/ , /runways.html , /frequencies.html (retrieved 2026-07-26). *ARP/elevation/runway/frequency cross-check — tier-4, not AIP-grade.*
- Wikipedia — "Sanaa International Airport" — https://en.wikipedia.org/wiki/Sanaa_International_Airport (retrieved 2026-07-26). *Strike/closure timeline, apron/terminal detail, Al-Dailami Air Base co-location.*
- Safe Airspace (OPSGROUP) — "Yemen" — https://safeairspace.net/yemen/ (retrieved 2026-07-26). *Live conflict-zone/CZIB risk picture; records the Jul 2026 Yemeni-government strike on the OYSN runway to prevent an Iranian aircraft landing, and the Dec 2024/May 2025 Israeli-airstrike closure.*
- EASA CZIB 2017-07R19 (Yemen) — https://www.easa.europa.eu/en/domains/air-operations/czibs/czib-2017-07r19 (issued 2017-08-31, valid to 2026-10-31; retrieved via safeairspace.net 2026-07-26). *HIGH-risk-at-all-levels assessment.*
- US FAA SFAR 115 — https://www.federalregister.gov/documents/2024/12/30/2024-31188/extension-of-the-prohibition-against-certain-flights-in-specified-areas-of-the-sanaa-flight (retrieved 2026-07-26). *US operator prohibition, Sana'a FIR landmass.*

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-26 | Built from public aeronautical data (AIP/status verification pending); K Global fields from live VAMSYS; 4-page pack. |
