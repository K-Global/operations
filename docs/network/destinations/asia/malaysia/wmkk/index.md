# WMKK — Kuala Lumpur International (KLIA) · Airport Briefing

**WMKK / KUL** · Sepang, Selangor, Malaysia · Asia
**Version** v0.1 · **Updated** 2026-07-26 · **Status** Draft — AIP Malaysia (CAAM)-derived, Asia network build

> **Read-me:** Planning aid for the sim, not a chart. Static data is drawn from AIP Malaysia (CAAM), AD 2 WMKK — the reachable extract spans a **1999–2011 amendment cycle** for runway/lighting/communications/navaid tables plus a **2024–2025-dated** eAIP extract for administrative/hours/RFF/obstacle data; approaches/SIDs/STARs are listed **by name only or flagged not-yet-confirmed** — fly the charted current-AIRAC version. Live weather/NOTAMs are pulled at planning (§14/§15). Open 🟧 items are listed in §18. Flag legend 🟥 restriction/hazard · 🟧 caution/unverified · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| ARP (lat/long) | 02°44′36″N / 101°41′53″E (2.7433, 101.6981) — site: RWY 14R threshold centreline `[AIP Malaysia, AD 2 WMKK 2.2]` |
| Field elevation | **69 ft / 21 m AMSL** (reference temperature 32°C) |
| Mag variation | 🟧 **0° West (2024 eAIP), decreasing** — an older (2012) AIP cycle carries "0°6′ West"; treat exact current-day value as needing a live-AIRAC cross-check |
| Time zone | UTC+8 (Malaysia Standard Time, no DST) |
| Runway(s) | **14L/32R** 4,019 × 60 m · **14R/32L** 4,000 × 60 m · **15/33** ~3,960 × 60 m (physical dimension tier-4-sourced — see §7) — three near-parallel/oblique runways |
| Preferential runway logic | Wind/flow-dependent; permanent **simultaneous independent parallel approaches** procedure now in force per a 2025 AIP Supplement — see §10 |
| Longest LDA | 4,019 m (14L/32R) per the reachable declared-distances table |
| Approaches | **ILS** on all runway ends of 14L/32R and 14R/32L (idents IEL/IER/IWR/IWL) — sourced **CAT I** in a 1999 AIP navaid table; 🟧 secondary sourcing indicates a **CAT II** upgrade since. RWY 15/33 navaid/ILS data **not found** in the reachable tier-1 extract (the runway post-dates this AIP cycle) — 🟧 secondary sourcing indicates **CAT I** |
| RFF category | **CAT 10** (ICAO highest) 🟩 |
| Control type | **Radar** — Lumpur Approach North/South, Lumpur Director, Lumpur Tower on the field; **Kuala Lumpur (WMFC)** FIR en route — see [Asia Airspace Brief](../../../../airspace/asia.md) |
| Elevation class | Near sea-level (69 ft) — **not** hot-and-high; the performance/reliability driver here is **equatorial monsoon convection and transboundary haze**, not density altitude |
| Special-airport status | None found — **no curfew, H24 operation**; the operative complexity is the **three-near-parallel-runway, simultaneous-independent-approach** environment — see §5 |
| Customs / PoE | **Yes — H24** `[AIP Malaysia, AD 2 WMKK 2.3]` |
| K Global category | **L** `[VAMSYS mirror 2026-07-26]` 🟩 |
| K Global base | **No** `[VAMSYS mirror 2026-07-26]` |
| Company preferred alternates | **WSSS, WIII, VTBS** `[VAMSYS mirror 2026-07-26]` |
| Taxi-in / taxi-out (VAMSYS) | **12 min / 16 min** `[VAMSYS mirror 2026-07-26]` |

---

## 2. Validation summary

| Domain | Flag | Note |
|---|---|---|
| Terrain / CFIT | 🟧 | Sepang site is largely flat former plantation land, but **two lit hills — Bukit Lada (110 m AMSL) and Bukit Sungai Lanau (101 m AMSL)** — sit under the 32L/14R and 33/15 approach/departure paths; low but charted and lit. Non-limiting for planning, verify MSA on the current chart. |
| Runway length vs fleet perf | 🟩 | All three runways (3,960–4,019 m) are ample for any K Global widebody. |
| Approach availability / minima | 🟧 | ILS confirmed on 14L/32R and 14R/32L; CAT I vs CAT II sourcing conflict (§9/§18). RWY 15/33 navaid data not confirmed in the reachable tier-1 extract. |
| Airspace / traffic / control | 🟧 | Dense **Class C** Kuala Lumpur CTR/TMA with radar vectoring; **three near-parallel runways now run simultaneous independent approaches** per a 2025 supplement — a real but moderate (not EDDF-scale) workload driver — see §3.2. |
| Weather / seasonal hazard | 🟥 | Equatorial climate — **near-daily convective thunderstorms/heavy rain**, intensified in the monsoon-transition months, plus periodic **transboundary haze** (regional land/forest-fire smoke, worse in dry/El Niño years) suppressing visibility. |
| Curfew / slots / hours | 🟩 | **H24, no curfew found**; no slot-coordination level identified in reachable sources — a materially easier commercial constraint than a Level 3 EU/Asian mega-hub. |
| RFF category vs our types | 🟩 | CAT 10 — above any of our fleet's requirement. |
| Fuel availability | 🟩 | Jet A-1 and AVGAS confirmed H24 via multiple named suppliers (PETRONAS, SHELL, PETRON) `[AIP Malaysia, AD 2 WMKK 2.3/2.4]`. |
| Customs / handling / security | 🟩 | Customs/immigration/security all confirmed **H24**; handling by prior arrangement `[AIP Malaysia, AD 2 WMKK 2.3/2.4]`. |

---

## 3. Threat & Error Management (TEM)

### 3.1 CFIT / Terrain 🟧
KLIA sits on largely flat, reclaimed former plantation land at 69 ft AMSL — there is **no extensive close-in high terrain** of the kind that drives CFIT risk at mountainous fields. However, the AIP obstacle data does chart two low hills close to the southern runway ends: **Bukit Lada (110.0 m AMSL)** and **Bukit Sungai Lanau (100.9 m AMSL)**, both lit red-obstruction and positioned under the 32L-approach/14R-departure and 33-approach/15-departure tracks, roughly 2–4 NM south of the runway 32/33 ends. Neither is a significant threat for a normally-flown ILS/RNP approach, but they are worth a crew mention, particularly for a visual or circling approach to the southern runway ends — verify the MSA sectors on the current chart. Man-made obstacles near the field include the twin **KLIA control towers (141–147 m AMSL)**, two **telecommunication towers (~62 m/202.76 ft AMSL)** near the 14R/32L extended centreline, and multiple AWOS/GP-aerial masts (11–33 m) — all charted and lit.

### 3.2 Airborne conflict / traffic 🟧
KLIA operates inside the **Kuala Lumpur CTR** (Class C, surface to 4,000 ft AMSL) under **Lumpur Approach North/South** and **Lumpur Director**, with **Kuala Lumpur (WMFC)** as the controlling FIR en route — see [Asia Airspace Brief](../../../../airspace/asia.md). The field's three runways (14L/32R, 14R/32L, and the oblique 15/33) are **not a simple parallel pair** — a 2025 AIP Supplement (SUP 50/25) confirms **permanent implementation of simultaneous independent parallel approaches based on the direction of flights**, a real but moderate traffic-management complexity: expect runway assignment to follow the day's operating direction rather than a fixed roster, and confirm the active configuration on ATIS rather than assuming a default. This is a materially lighter workload environment than a crossing-runway hub (cf. EDDF), but the independent-approach geometry still calls for standard parallel-approach vigilance (blunder monitoring, TCAS awareness).

### 3.3 Runway excursion 🟧
The AIP's own declared-distance table treats 14L/32R and 14R/32L as full-length (4,019 m / 4,000 m) from each threshold, with no displaced-threshold reduction in the reachable extract; a tier-4 cross-check (OurAirports) records slightly larger gross-pavement figures (4,124 m / 4,050 m) with small displaced sections (105 m at the 32R end, 56 m at the 14R end) — a minor discrepancy, not currently resolvable against a live AIRAC, so treat the AIP-declared LDA figures as authoritative and the tier-4 gross-pavement figures as a corroborating detail only. RWY 14L/32R and 14R/32L are **grooved** (AIP AD 2.9) — a genuine wet-braking mitigation given the monsoon rain climate (§3.4). RESA is provided on all four ends (120×120 m to 225×120 m).

### 3.4 Weather threat 🟥
KLIA's defining hazard is **equatorial convective weather**: near-daily afternoon/evening thunderstorms and heavy rain are typical, with intensity increasing during the **monsoon-transition (inter-monsoon) periods** when short-duration, high-intensity storms with strong gusts and lightning are common, particularly over Peninsular Malaysia's western/interior areas. Separately, the region is subject to periodic **transboundary haze** — smoke from seasonal land/forest-fire activity in the wider region, typically worst in dry/El Niño years — which can suppress visibility well below a routine VMC day with little warning. KLIA is **not** in the Northwest Pacific/South China Sea typhoon belt (too far south/equatorial for tropical-cyclone formation/tracking), so that hazard class does not apply here; the operative planning items are convective avoidance and haze-driven visibility monitoring. See §14.

### 3.5 Operational considerations 🟧
Three durable characteristics shape ops here: (1) the **three-near-parallel/oblique-runway, simultaneous-independent-approach environment** (§3.2) — confirm active configuration rather than assuming one; (2) **no curfew, H24 operation** — a materially simpler scheduling picture than many Asian/European hub counterparts, removing the last-rotation/diversion risk that dominates curfew-bound fields; and (3) the **equatorial climate** removes de-icing and hot-and-high performance concerns entirely (AIP explicitly records de-icing as "Not available" — not required at this field) but substitutes convective-weather and haze-driven reliability risk in their place.

---

## 4. Cautions & Warnings

- **Two lit hills — Bukit Lada (110 m AMSL) and Bukit Sungai Lanau (101 m AMSL)** — sit under the southern (32L/33) approach paths; low but charted, verify MSA before a visual/circling approach to those ends.
- **Runway assignment is direction-of-flight/config-dependent** under the 2025 simultaneous-independent-parallel-approach regime — confirm the active runway configuration on ATIS, don't assume a default pairing.
- **Near-daily convective activity**, intensifying in monsoon-transition periods — brief CB avoidance and expect possible short-notice holding/diversion in a severe cell.
- **Transboundary haze** (seasonal, regional) can suppress visibility with little warning, independent of convective weather — check current visibility/haze advisories at planning.
- **TWY U5 and U6 carry heavy-vehicle crossing traffic** (AIP-noted) — expect ground-vehicle activity on these taxiways.
- **RWY 14L/32R and 14R/32L are grooved**; RWY 15/33 grooving status not confirmed in reachable sources.
- ILS category (CAT I vs CAT II) on 14L/32R and 14R/32L is a sourcing conflict between the reachable AIP navaid table (1999 cycle, CAT I) and newer secondary reporting (CAT II) — treat as 🟧 pending a live-AIRAC cross-check (§18).

---

## 5. Aerodrome category, restrictions & crew qualification

- **Special-airport / category:** Not operator-categorised as a restricted-crew special airport in reachable sources; the standing crew-briefing items are the **direction-dependent runway/config logic** (§3.2) and the **convective/haze weather environment** (§3.4). 🟧
- **Crew-qualification gate:** No CAT II/III-specific crew-currency requirement confirmed in reachable sources; general low-visibility-operations currency applies where the CAT II sourcing (§9) is confirmed. 🟧
- **Operating restrictions / bans:** None found — no RNP AR ban, no circling restriction, no night-ops limit identified in reachable sources. 🟧 Verify current AIRAC.
- **Overflight / entry / permits:** Standard international arrival; no special state permit requirement found. 🟩
- **Operations notes:** ANSP/ATC — **Department of Civil Aviation Malaysia / Civil Aviation Authority of Malaysia (CAAM)**, ATC Tower Complex, KLIA. Airport operator — **Malaysia Airports (Sepang) Sdn. Bhd. (MAHB)**. No slot-coordination level identified in reachable sources — treat as uncoordinated/Level 1 pending confirmation. 🟧

---

## 6. General / hours / services

| Item | Value | Flag |
|---|---|---|
| ATS hours | H24 | 🟩 |
| AD operating hours | H24 — **no curfew found** | 🟩 |
| Night / curfew restrictions | None identified in reachable sources | 🟧 |
| RFF category | **CAT 10** | 🟩 |
| Fuel | **Jet A-1, AVGAS** — PETRONAS / SHELL / PETRON refuelling, all H24 (an older cycle names ESSO in place of PETRON — supplier roster has evidently changed over time) | 🟩 |
| PCN | Runway/apron/taxiway-specific — see §7 and §13; AIP labels the field **"PCR"** (Pavement Classification Rating) rather than "PCN" — treated as equivalent format (value/type/subgrade/pressure/method) | 🟩 |
| Customs | H24 | 🟩 |
| Handling / FBO | By prior arrangement with the aerodrome administration; H24 availability confirmed, specific named ground handler(s) for our operation not confirmed | 🟧 |

---

## 7. Runways & declared distances

| RWY | Dimensions | Surface / PCN(PCR) | TORA | TODA | ASDA | LDA | Notes |
|---|---|---|---|---|---|---|---|
| 14L | 4,019 × 60 m | Concrete ends (≈241 m each) / Asphalt mid-section (≈3,537 m) — **PCN 90/R/C/W/T** (concrete) / **PCN 100/F/C/W/T** (asphalt) | 4,019 m | 4,019 m | 4,019 m | 4,019 m | Grooved; RESA 225×120 m; slope 0.12% |
| 32R | 4,019 × 60 m | As above (reciprocal) | 4,019 m | 4,019 m | 4,019 m | 4,019 m | Grooved; RESA 120×120 m; slope 0.12% |
| 14R | 4,000 × 60 m | Concrete ends (≈241/240 m) / Asphalt mid-section (≈3,519 m) — **PCN 90/R/C/W/T** (concrete) / **PCN 100/F/C/W/T** (asphalt) | 4,000 m | 4,000 m | 4,000 m | 4,000 m | Grooved; RESA 120×120 m; slope 0.05% |
| 32L | 4,000 × 60 m | As above (reciprocal) | 4,000 m | 4,000 m | 4,000 m | 4,000 m | Grooved; RESA 176×120 m; slope 0.05% |
| 15 | ~3,960 × 60 m 🟧 | Not confirmed in reachable tier-1 extract (runway added after this AIP cycle); tier-4 (OurAirports/Wikipedia) reports concrete surface | Not published / verify | Not published / verify | Not published / verify | Not published / verify | Grooving status not confirmed |
| 33 | ~3,960 × 60 m 🟧 | As above | Not published / verify | Not published / verify | Not published / verify | Not published / verify | As above |

*Source: AIP Malaysia, AD 2 WMKK 2.12/2.13 (amendment cycle carries dates through 2011 for this table) — this predates RWY 15/33's construction (built for klia2/Terminal 2, opened 2014), hence its absence from the declared-distances table reached. Tier-4 (OurAirports) records RWY 15/33 as 12,993 × 197 ft (3,960 × 60 m). A tier-4 gross-pavement figure for 14L/32R (4,124 m) and 14R/32L (4,050 m) is slightly larger than the AIP-declared distances above — treat the AIP figures as authoritative pending a live-AIRAC cross-check. All distances in metres.*

---

## 8. Communications

| Service | Callsign | Frequency | Hours | Notes |
|---|---|---|---|---|
| ATIS | Lumpur Terminal Information | 126.450 | — | Synthesised voice broadcast |
| Delivery | Lumpur Delivery | 126.000 | — | Airways clearance, SSR code allocation, departure slot time |
| Ground | Lumpur Ground | 121.650 (TWY assoc. RWY 14L/32R) · 121.800 (TWY assoc. RWY 14R/32L & Cargo South) · 122.150 (Main Terminal aprons) · 122.850 (North/West Satellite apron) · 122.275 (East/South Satellite) · 123.250 (Cargo East/North/West) | — | Multiple positions by area — take the assigned frequency |
| Tower | Lumpur Tower | 118.800 / 229.000 (RWY 14L/32R) · 118.500 / 229.000 (RWY 14R/32L) | — | 🟧 No RWY 15/33 tower frequency found in the reachable extract (that runway post-dates this cycle) — a dedicated "Tower West" facility was built for klia2/RWY 15-33 per secondary sourcing; frequency not confirmed |
| Approach | Lumpur Approach North 124.200/230.000 · Lumpur Approach South 119.450/232.200 · Lumpur Director 125.100 · (spare position 121.250) | — | Sector-specific — take the assigned frequency |
| Centre / FIR | Kuala Lumpur (WMFC) | Per current AIRAC | H24 | See [Asia Airspace Brief](../../../../airspace/asia.md) |

*Source: AIP Malaysia, AD 2 WMKK 2.18 (amendment cycle dated 2007) — stable tower/ground/approach/delivery structure, but treat exact frequencies as 🟧 pending a live-AIRAC cross-check, and note the RWY 15/33 comms gap above.*

---

## 9. Navaids

| Aid | Ident | Freq | Hours | Notes |
|---|---|---|---|---|
| VOR/DME | VKL | 116.100 / CH108X | H24 | Kuala Lumpur DVOR/DME, on-field reference point |
| ILS | IEL | 108.500 | H24 | Serves RWY 14L. Sourced **CAT I** (1999 AIP navaid table) 🟧 secondary sourcing indicates CAT II — verify current AIRAC |
| DME | IEL | CH22X | H24 | RWY 14L |
| ILS | IER | 109.100 | H24 | Serves RWY 32R. Sourced **CAT I** 🟧 (see above) |
| DME | IER | CH28X | H24 | RWY 32R |
| ILS | IWR | 110.700 | H24 | Serves RWY 14R. Sourced **CAT I** 🟧 (see above) |
| DME | IWR | CH44X | H24 | RWY 14R |
| ILS | IWL | 111.900 | H24 | Serves RWY 32L. Sourced **CAT I** 🟧 (see above) |
| DME | IWL | CH56X | H24 | RWY 32L |
| ILS/RNP | — | Not found in reachable tier-1 extract | — | RWY 15/33 — post-dates this AIP cycle; 🟧 secondary sourcing indicates a **CAT I ILS** exists — not confirmed against a primary table |

*All idents/frequencies sourced to the AIP Malaysia 1999 navaid-table cycle; long-lived infrastructure, but the CAT I/CAT II sourcing conflict (§18) and the RWY 15/33 gap should both be treated as needing a live-AIRAC cross-check.*

---

## 10. Arrival

- **Transition altitude / level:** **TA 11,000 ft** `[AIP Malaysia, AD 2 WMKK 2.17]`; TL by QNH not independently confirmed this pass. 🟧
- **Speed:** Standard 250 KIAS below FL100 (ICAO norm) — confirm no local override on current chart.
- **Preferential runway logic:** Direction-of-flight/config-dependent under the **permanent simultaneous-independent-parallel-approach** regime (AIP Supplement 50/25, effective 2025) — confirm the active configuration on ATIS.
- **Approaches (names only — verify minima on current AIRAC charts):**

| RWY | Approach | Notes |
|---|---|---|
| 14L | ILS (IEL) | CAT I sourced / 🟧 CAT II per secondary sourcing |
| 32R | ILS (IER) | As above |
| 14R | ILS (IWR) | As above |
| 32L | ILS (IWL) | As above |
| 15 | Not confirmed — 🟧 secondary sourcing indicates ILS CAT I | Verify current AIRAC |
| 33 | Not confirmed — 🟧 secondary sourcing indicates ILS CAT I | Verify current AIRAC |

- **STARs (names only):** Not confirmed in reachable research pass — pull the current-AIRAC STAR list at planning. 🟧
- **LVP:** Applicable given the ILS environment; exact RVR/trigger figures not confirmed this pass. 🟧 The AIP does record a local ATC procedure protecting the Localiser Sensitive Area when cloud base ≤600 ft and/or visibility <2,000 m — a live low-vis operational trigger, not a chart minima figure.
- **Missed approach watch-items:** Terrain is a minor factor (the two low hills south of the field, §3.1); the primary missed-approach concern is re-sequencing within the direction-dependent multi-runway environment.

---

## 11. Departure

- **SIDs (names only — fly the charted version):** Not confirmed in reachable research pass — pull the current-AIRAC SID list at planning. 🟧
- **RNP / climb-gradient requirements:** RNP 1 terminal procedures apply generally across the developed SE-Asian FIRs per the regional picture — see [`OM E — PBN and RNP Operations`](../../../../../flight-ops/pbn-and-rnp-operations.md). Specific WMKK SID gradient/equipage not confirmed this pass. 🟧
- **Take-off minima:** Published per AIP — exact figures not confirmed this pass. 🟧
- **Start-up / push-back:** ATC authorises engine start-up and push-back to sequence apron traffic; **all departing aircraft contact Lumpur Delivery for ATC clearance 5 minutes before engine start**. Power-back is **not permitted**. Pilots select the transponder only after push-back clearance. `[AIP Malaysia, AD 2 WMKK 2.20]`
- **ATC slot / CTOT & clearance:** No slot-coordination level identified in reachable sources; clearance delivery is the standard 5-minutes-before-start-up call to Lumpur Delivery. 🟧
- **De-icing:** **Not available / not required** — equatorial field, no de-icing season. `[AIP Malaysia, AD 2 WMKK 2.3/2.4]` 🟩

---

## 12. Noise & Environmental

- **Noise abatement (NAP):** **NIL** — no noise-abatement procedure published in the reachable AIP extract. `[AIP Malaysia, AD 2 WMKK 2.21]` 🟩
- **Night noise / dB limits:** None found — consistent with the H24, no-curfew operating profile.
- **Engine run-up restrictions:** Idle-power engine runs permitted on all bays across Main, Satellite and Cargo terminals provided the blast cone is clear and no aircraft is taxiing behind; tail-mounted-engine wide-bodies (e.g. MD-11/DC-10/L-1011-era types) require 250 m clear distance behind if the upper engine is run. `[AIP Malaysia, AD 2 WMKK 2.20]`
- **Reverse thrust / idle-reverse policy:** Not confirmed in reachable sources. 🟧

---

## 13. Ground operations

- **Stands for our types:** Widebody-capable positions are concentrated in **Terminal 1's Contact Pier** (gates prefixed A/B domestic, G/H international — directly attached to the Main Terminal Building) and the **Satellite Terminal A** (gates prefixed C, ~27 gates, reached by Aerotrain or bus), which historically carries the bulk of scheduled international widebody traffic. 🟧 (Terminal 2/klia2, gates J/K/L/P/Q, is the purpose-built low-cost-carrier terminal — not the expected stand area for a scheduled full-service widebody operation.) | 🟧
- **Push-back:** ATC-authorised, sequenced with apron traffic; mandatory-vs-self-manoeuvre policy by stand not confirmed. 🟧
- **Standard taxi routes:** Published (standard) taxi routes per the aerodrome ground-movement charts; ATC may direct otherwise. `[AIP Malaysia, AD 2 WMKK 2.20]`
- **Hot spots / tight taxiways:** 🟧 **TWY U5 and U6 carry heavy-vehicle crossing traffic** (AIP-noted caution); aircraft are strictly prohibited from holding at the Intermediate Holding Position in front of Fire Stations 1 (TWY B), 2 (TWY D) and 3 (TWY Z) to preserve emergency-vehicle access.
- **Follow-me:** Availability not confirmed in reachable sources — verify locally. 🟧

---

## 14. Weather & seasonal (durable)

- **Climate / prevailing wind:** Equatorial/tropical climate — warm, humid, with no true dry season; wind generally light and variable, modulated by the Southwest (~May–Sep) and Northeast (~Nov–Mar) monsoon flows and the intervening transition periods.
- **Seasonal hazards:** **Near-daily convective thunderstorms and heavy rain**, most intense during monsoon-transition periods (short-duration, high-intensity storms with strong gusts and lightning). **Periodic transboundary haze** from regional land/forest-fire smoke (typically worse in dry/El Niño years) can suppress visibility significantly and with limited warning. No tropical-cyclone/typhoon exposure at this equatorial latitude.
- **Local effects:** No notable terrain-driven local effect (flat coastal-plain site); convective activity is the dominant local weather driver.

> **Live weather — pull at planning (T-2h):** METAR, TAF, TREND, SIGMET/AIRMET, haze/visibility advisories. Not stored here.

---

## 15. NOTAMs

> **Pull at planning (T-2h).** Perishable — not stored here. Check: runway/taxiway closures, navaid U/S, ILS category/status, lighting, obstacle/crane, RFF downgrade, GPS/RAIM, current haze/visibility advisories. Source: official AIS / OFP NOTAM block.

---

## 16. Fuel & alternate planning notes

- **Typical role for us:** Destination / origin within the Asia network (non-base). `[VAMSYS mirror 2026-07-26]`
- **Nearest suitable alternates:** Company preferred alternates **WSSS** (Singapore Changi), **WIII** (Jakarta Soekarno-Hatta), **VTBS** (Bangkok Suvarnabhumi) `[VAMSYS mirror 2026-07-26]` — confirm suitability, runway/RFF adequacy and current minima per leg.
- **Fuel-uplift notes:** Jet A-1 and AVGAS confirmed H24 via PETRONAS/SHELL/PETRON refuelling. See [`OM E — Fuel Policy`](../../../../../flight-ops/fuel-policy.md).
- **Range/perf flags for our fleet:** Field length/strength non-limiting for any K Global type on the two main runways (4,019 m / 4,000 m). See [`OM B — Fleet Capability Matrix`](../../../../../fleet/capability-matrix.md) for type-by-type range/performance reference.

---

## 17. Fleet-specific notes (optional)

- No fleet-specific stand, performance or category consideration is confirmed beyond the network-general widebody stand note in §13. See [`OM B — Fleet Capability Matrix`](../../../../../fleet/capability-matrix.md). Given the equatorial, non-hot-and-high, non-icing environment, no type carries a field-elevation or cold-weather performance penalty here.

---

## 18. Open items (🟧 — confirm against AIP / current AIRAC)

- **ILS category on 14L/32R and 14R/32L** — sourced CAT I from a 1999 AIP navaid table; secondary (tier-4) sourcing indicates a CAT II upgrade since — not confirmed from a primary current-AIRAC table.
- **RWY 15/33 — declared distances, PCN, lighting, navaid/ILS ident and category, tower frequency** — none found in the reachable AIP extract (the runway post-dates the retrieved cycle); physical dimension only confirmed via tier-4 (OurAirports/Wikipedia).
- **Magnetic variation** — current eAIP gives 0° W (2024) decreasing; an older cycle gives 0°6′ W (2012); treat as needing a live-AIRAC cross-check.
- **Declared-distance / PCN table for 14L/32R and 14R/32L** — sourced to a 2011 amendment cycle; core geometry unlikely to have changed, but exact current-cycle figures not re-verified.
- **ATC frequencies** — sourced to a 2007 amendment cycle; representative but not current-AIRAC-verified. RWY 15/33 tower/ground frequency assignment entirely unconfirmed.
- **SIDs/STARs (current names)** — not obtained in this research pass; pull the live current-AIRAC procedure list before use.
- **Take-off minima, LVP RVR triggers, engine run-up restriction detail, reverse-thrust/idle-reverse policy, follow-me availability, push-back mandatory-vs-self-manoeuvre policy** — none confirmed in reachable sources.
- **Named ground handler(s) for our operation** — not confirmed; handling is by prior arrangement per AIP.
- **Slot-coordination level** — none found; treated as uncoordinated/Level 1 pending confirmation.
- **Simultaneous-independent-parallel-approach procedure detail** — confirmed by title/effective-date (AIP Supplement 50/25) but operational specifics (exact runway pairing rules) not transcribed — verify current AIRAC.
- **Tier-4 gross-pavement length discrepancy** — OurAirports records slightly longer pavement than the AIP-declared distances for 14L/32R and 14R/32L; not resolved against a live AIRAC.

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim material (current-AIRAC charts) informs content but is not listed here.*

- **AIP Malaysia (CAAM), AD 2 WMKK** — https://aip.caam.gov.my/aip/eAIP/2025-03-25/html/eAIP/WM-AD-2.WMKK-en-MS.html (2024/2025-dated extract: ARP, admin, hours, RFF, aprons/PCR, obstacles, met — retrieved 2026-07-26).
- **AIP Malaysia (CAAM), AD 2 WMKK PDF** — https://aip.caam.gov.my/aip%20pdf/AD/AD2/WMKK/WMKK-KL%20InternationalSepang%20Airpor.pdf (amendment cycle carrying dates 1999–2011: runway physical characteristics, declared distances, lighting, ATS airspace, ATS communications, radio navaids, local traffic regulations, flight procedures, additional information — retrieved 2026-07-26). **Treat exact current-cycle figures (frequencies, ILS category, PCN) as needing a live-AIRAC cross-check.**
- AIP Malaysia (CAAM) — SUP 50/25, "Permanent Implementation of Simultaneous Independent Parallel Approaches Based on the Direction of Flights at Kuala Lumpur International Airport (KLIA)" — https://aip.caam.gov.my/aip/eAIP/2025-10-02-AIRAC/html/eSUP/WM-eSUP-25-50-en-MS.html (retrieved 2026-07-26). *Current runway-configuration logic corroboration.*
- OurAirports — https://ourairports.com/airports/WMKK/runways.html (retrieved 2026-07-26). *ARP/elevation/runway-length cross-check.*
- Wikipedia — "Kuala Lumpur International Airport" and "Operations and infrastructure of Kuala Lumpur International Airport" — https://en.wikipedia.org/wiki/Kuala_Lumpur_International_Airport ; https://en.wikipedia.org/wiki/Operations_and_infrastructure_of_Kuala_Lumpur_International_Airport (retrieved 2026-07-26). *Terminal/pier structure, ILS category corroboration, runway history.*

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-26 | Built from national AIP; K Global fields from live VAMSYS; 4-page pack. |
