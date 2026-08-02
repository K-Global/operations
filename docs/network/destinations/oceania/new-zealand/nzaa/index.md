# NZAA — Auckland Intl · Airport Briefing

**NZAA / AKL** · Māngere, Auckland, New Zealand · Oceania
**Version** v0.1 · **Updated** 2026-07-26 · **Status** Draft

> **Read-me:** Planning aid for the sim, not a chart. Static data is drawn from AIP New Zealand (Airways NZ / Civil Aviation Authority), AD 2 NZAA, plus GEN 3.7 communications/navaid tables; approaches/SIDs/STARs are listed **by name only** — fly the charted current-AIRAC version. Live weather/NOTAMs are pulled at planning (§14/§15). Open 🟧 items are listed in §18. Flag legend 🟥 restriction/hazard · 🟧 caution/unverified · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| ARP (lat/long) | S37 00 29 / E174 47 30 (9.5 NM S of Auckland CBD) `[AIP NZ AD 2 NZAA 2.2]` |
| Field elevation | **23 ft AMSL**; reference temperature 23.8°C (February) |
| Mag variation | 🟧 **19°35′E (Jan 2003), annual change +3.2′** per AD 2.2; the co-located VOR AA plate (GEN 3.7) separately states **MAG VAR 20°E** — a minor cross-cycle discrepancy, not independently reconciled this pass |
| Time zone | UTC+12 (NZST) / UTC+13 (NZDT, Sep–Apr) |
| Runway(s) | **05R/23L**, 3,535 × 45 m, concrete, PCN 120/R/D/W/T — the **sole operational runway**; a parallel **05L/23R** second runway is a long-deferred airport master-plan item (see §5) |
| Preferential runway | Wind/traffic-driven; no fixed preferential direction published — see §10/§11 |
| Longest LDA | 3,292 m (both directions, per normal-operations declared distances — see §7) |
| Approaches | **ILS CAT I (05R)**, **ILS CAT II/III (23L)**; RNP/RNAV approaches also published — names only, see §10 |
| RFF category | **CAT 10** (ICAO highest — A380-capable) 🟩 |
| Control type | **Radar/ADS-B** — Auckland Tower, Auckland Approach (Auckland TMA); en-route **Auckland Control** (Oceanic Radar / Raglan sector) — see [Oceania — SW Pacific & Tasman airspace brief](../../../../airspace/oceania.md); domestic FIR **NZZC**, oceanic **Auckland Oceanic (NZZO)** |
| Elevation class | Sea-level (23 ft) — **not** hot-and-high; the defining constraints here are **single-runway capacity** and a **weekly scheduled maintenance closure** (§6) |
| Special-airport status | 🟧 Not operator-categorised as crew-restricted; the standing planning items are the **single-runway constraint**, the **recurring Monday early-morning closure**, and **significant wading-bird activity** near RWY 23L's departure path — see §4/§5 |
| Customs / PoE | **Yes** — H24 `[AIP NZ AD 2 NZAA 2.3]` |
| K Global category | **H** `[VAMSYS mirror 2026-07-26]` |
| K Global base | Not base — network destination `[VAMSYS mirror 2026-07-26]` |
| Company preferred alternates | **NZWN, NZCH, NZQN** `[VAMSYS mirror 2026-07-26]` |
| Taxi-in / taxi-out (VAMSYS) | **13 min / 16 min** `[VAMSYS mirror 2026-07-26]` |

---

## 2. Validation summary

| Domain | Flag | Note |
|---|---|---|
| Terrain / CFIT | 🟩 | Flat isthmus site between the Manukau and Waitematā harbours; no close-in high terrain relevant to arrival/departure/missed-approach paths. |
| Runway length vs fleet perf | 🟩 | 3,535 m / 3,292 m LDA is ample for any K Global widebody; not limiting under normal conditions. |
| Approach availability / minima | 🟩 | ILS CAT II/III on 23L gives a genuine low-visibility capability; CAT I on 05R. RNP/RNAV names not independently confirmed this pass 🟧. |
| Airspace / traffic / control | 🟧 | Single-runway major international/domestic gateway — sustained mixed jet/turboprop/GA traffic on one runway pair is the field's principal operational constraint, not airspace complexity. |
| Weather / seasonal hazard | 🟩 | Temperate maritime climate; no signature extreme-weather hazard on the scale of fog/cyclone fields — see §14. |
| Curfew / slots / hours | 🟥 | **No general curfew**, but a **hard recurring runway closure Monday 0130–0430 local** for maintenance — schedule-relevant, see §6/§12. |
| RFF category vs our types | 🟩 | CAT 10 — above any of our fleet's requirement. |
| Fuel availability | 🟩 | Avgas 100 and Jet A-1/DERD 2494 confirmed H24 `[AIP NZ AD 2 NZAA 2.4]`. |
| Customs / handling / security | 🟩 | H24 confirmed; multiple named ground handlers on field (§13). |

---

## 3. Threat & Error Management (TEM)

### 3.1 CFIT / Terrain 🟩
NZAA sits at 23 ft AMSL on the flat Māngere isthmus between the Manukau Harbour (south/west) and the Tāmaki/Waitematā side (north/east) — there is **no close-in high terrain** relevant to any arrival, departure or missed-approach path. This is a non-issue field for terrain; verify the MSA ring on the current chart as routine practice.

### 3.2 Airborne conflict / traffic 🟧
Auckland is New Zealand's busiest airport operating **one runway pair (05R/23L)** for all traffic — international widebody, domestic jet/turboprop, GA and helicopter movements are all sequenced onto the same runway under **Auckland Tower/Auckland Approach (Auckland TMA)** radar/ADS-B control. **Divergent missed-approach and divergent-SID design** are used to sustain throughput (an arriving aircraft's missed approach and a departing aircraft's SID track are kept divergent), which is the controller-side mitigation for single-runway saturation. Cross-ref the domestic NZZC FIR and **Auckland Oceanic (NZZO)** description in the [Oceania — SW Pacific & Tasman airspace brief](../../../../airspace/oceania.md). Helicopter operations are frequent within the Auckland CTR and are kept clear of the Instrument Sector during any approach.

### 3.3 Runway excursion 🟧
No displaced-threshold issue in normal operations (LDA 3,292 m both directions). **However**, the airport operator periodically runs **rehabilitation/"Runway WIP" programmes on 05R/23L** with displaced thresholds and materially reduced declared distances (as little as ~1,770–2,300 m LDA in the historic WIP tables) — confirm the current WIP status by NOTAM before planning close to standard performance margins; do not assume full-length availability without checking (§7/§18).

### 3.4 Weather threat 🟩
Temperate maritime climate; no signature extreme hazard on the order of fog, cyclone or hot-and-high. Standard frontal-passage wind/rain events are the normal seasonal pattern — see §14.

### 3.5 Operational considerations 🟥
Three durable, field-specific items to plan around: (1) the **single-runway constraint** drives sustained capacity pressure and any runway-availability disruption (weather, WIP, incident) has an outsized network effect; (2) a **hard recurring closure Monday 0130–0430 local** for maintenance — do not schedule into this window; (3) **significant wading-bird activity** (notably South Island Pied Oystercatchers) transiting the runway near TWY A8/A9 and the RWY 05R threshold, tidal-cycle-linked, with the **RWY 23L take-off direction most exposed** — see §4.

---

## 4. Cautions & Warnings

- **Single operational runway (05R/23L)** — there is no parallel runway in service; any runway-availability event (weather, incident, scheduled WIP) constrains the whole field. A parallel **05L/23R** second runway remains a long-deferred master-plan item, most recently reported targeting **~2038** — not a near-term mitigation 🟧.
- **Recurring maintenance closure**: aircraft operations are normally prohibited **Monday 0130–0430 local time** — do not plan scheduled movements in this window.
- **Wading-bird activity** — Oystercatchers, godwits, knots and other species transit the runway between roosting/feeding areas, crossing mostly the **western half near TWY A8/A9 and the RWY 05R threshold**, at 200–500 ft above the runway, peaking around high tide. **RWY 23L take-offs are the most exposed** — the airport operator publishes ATIS notification of peak bird activity.
- **Rehabilitation/"Runway WIP" programme** — the airport operator periodically runs displaced-threshold/reduced-length operations on 05R/23L for pavement rehabilitation; verify current status by NOTAM, do not assume full-length distances are always available.
- **Code F (A380/B747-8) handling is restricted** — specific contact/remote stands and taxiway rules apply (§13); confirm Code F eligibility before planning a widebody outsized for standard Code E handling.
- Mag variation is sourced to a 2003 AIP cycle with a co-located navaid table giving a slightly different current value — treat the exact figure as 🟧 pending live-AIRAC cross-check (§18).

---

## 5. Aerodrome category, restrictions & crew qualification

- **Special-airport / category:** Not operator-categorised as a restricted-crew "special airport" in reachable sources. 🟩
- **Crew-qualification gate:** None specific beyond standard CAT II/III currency for a low-visibility RWY 23L arrival. 🟩
- **Operating restrictions / bans:** No RNP AR ban or circling restriction found in reachable sources; the **western-extension** portion of RWY 05R (west of TWY A10) is **not available for RWY 05R take-off** without prior Auckland Airport approval. 🟧
- **Overflight / entry / permits:** Standard international arrival for a New Zealand port of entry; no special state permit required. 🟩
- **Operations notes:** ANSP — **Airways New Zealand** (Auckland Tower/Approach; Auckland Control oceanic/enroute). Airport operator — **Auckland International Airport Limited (AIAL)**. A **second parallel runway (05L/23R)** has been in AIAL's master plan for over a decade; the most recently reported target is **~2038**, having previously slipped from earlier dates — treat as a long-range item, not an operative near-term mitigation for the single-runway constraint. 🟧

---

## 6. General / hours / services

| Item | Value | Flag |
|---|---|---|
| ATS hours | H24 `[AIP NZ AD 2 NZAA 2.3]` | 🟩 |
| AD operating hours | H24, **except** the recurring Monday closure below | 🟥 |
| Night / curfew restrictions | **No general night curfew.** Recurring **runway closed for maintenance Monday 0130–0430 local time** `[AIP NZ AD 2 NZAA 2.3]` | 🟥 |
| RFF category | **CAT 10** | 🟩 |
| Fuel | Avgas 100; Jet A-1/DERD 2494 (AERO 100/D100), Mobil Jet Oil/DERD 2487 — H24 | 🟩 |
| PCN | Runway PCN 120/R/D/W/T concrete; apron PCN 120/R/D/W/T; taxiway 30–44 m, PCN 120/R/D/W/T | 🟩 |
| Customs | H24 | 🟩 |
| Handling / FBO | Air Center One, Skycare International, Air New Zealand, Menzies Aviation, Aerocare Flight Support, Eagleflight Aviation (helicopter) | 🟩 |

---

## 7. Runways & declared distances

| RWY | Dimensions | Surface / PCN | TORA | TODA | ASDA | LDA | Notes |
|---|---|---|---|---|---|---|---|
| 05R | 3,535 × 45 m | Concrete / PCN 120/R/D/W/T | 3,230 m (from TWY A10) | 3,443 m | 3,230 m | 3,292 m | THR elevation 15 ft; normal-operations figures |
| 23L | 3,535 × 45 m | Concrete / PCN 120/R/D/W/T | 3,535 m | 3,710 m | 3,535 m | 3,292 m (exit TWY A10) | THR elevation 23 ft; ILS CAT II/III runway |

*Source: AIP New Zealand AD 2 NZAA 2.12/2.13 (2016–2018 AIRAC extract retrieved). 🟧 The airport operator periodically runs a "Runway WIP" (rehabilitation) programme with displaced thresholds and materially reduced declared distances on both 05R and 23L (historic tables show LDA as low as ~1,770–2,300 m under WIP-East/West modes) — **verify current WIP status by NOTAM before planning**; the figures above are the normal (full-length) case. All distances in metres.*

---

## 8. Communications

| Service | Callsign | Frequency | Hours | Notes |
|---|---|---|---|---|
| ATIS | Auckland | 127.8 (127.0 improved GND coverage) | HO | 🟧 |
| Delivery | Auckland Delivery | 128.2 | H24 | |
| Ground | Auckland Ground | 121.9 | H24 | |
| Apron | Auckland Apron | 123.0 | HO | Aerodrome-operator-provided apron information service, international apron |
| Tower | Auckland Tower | 118.7 / 120.95 | H24 | |
| Approach | Auckland Approach (Auckland TMA) | 124.3 / 129.6 / 129.5 | H24 | |
| Centre / FIR | Auckland Control — Oceanic Radar 123.9/134.0; Raglan Sector 126.0/120.5 | H24 | See [Oceania airspace brief](../../../../airspace/oceania.md) for NZZC/NZZO structure |
| Emergency | Distress/emergency | 121.5 | H24 | |
| Fire | Auckland RFS | 134.7 | H24 | Discrete emergency information |

*Source: AIP New Zealand GEN 3.7-1/2 (Table GEN 3.7-1, extract carrying effective dates to 2022) — cross-checked against VATNZ SOP (sops.vatnz.net, tier-4 network-sim reference) which lists matching Tower/Ground/Approach/Delivery frequencies. Treat exact current values as 🟧 pending live-AIRAC cross-check.*

---

## 9. Navaids

| Aid | Ident | Freq | Hours | Notes |
|---|---|---|---|---|
| VOR | AA | 114.8 | H24 | Nominal range 80 NM at 10,000 ft; terrain shielding may reduce; MAG VAR 20°E per this table (🟧 vs AD 2.2's 19°35′E/2003) |
| DME | AA | CH95X / 114.8 | H24 | Co-located with VOR AA; ELEV 29 ft |
| ILS/LOC CAT I | IAA | 110.3 | HO | Serves RWY 05R |
| ILS/GP | — | 335 | HO | RWY 05R |
| ILS/DME | IAA | CH40X | HO | RWY 05R |
| ILS/LOC CAT II/III | IMG | 109.9 | HO | Serves RWY 23L — the field's low-visibility runway |
| ILS/GP | — | 333.8 | HO | RWY 23L |
| ILS/DME | IMG | CH36X | HO | RWY 23L |

*Source: AIP New Zealand GEN 3.7-2 (extract effective 30 Jan 2020). CAT II/III capability is specifically on RWY 23L; RWY 05R carries CAT I only.*

---

## 10. Arrival

- **Transition altitude / level:** TA **13,000 ft** `[AIP NZ AD 2 NZAA 2.17]`; TL by QNH — not independently confirmed this pass, verify current chart. 🟧
- **Speed:** Unless otherwise assigned by ATC, fly the published/promulgated approach speed with a **minimum 150 kt IAS to 5 NM on final** — advise ATC if unable.
- **Preferential runway logic:** No fixed preferential direction is published for NZAA; runway selection is wind/traffic-driven on the single 05R/23L pair. Circuit direction is **right-hand for 05R, left-hand for 23L**; circuit altitude 1,500 ft AMSL (jets) / 1,000 ft AMSL (other).
- **Approaches (names only — verify minima on current AIRAC charts):**

| RWY | Approach | Notes |
|---|---|---|
| 05R | ILS CAT I (IAA) | |
| 23L | ILS CAT II/III (IMG) | Low-visibility runway; RNP/RNAV names not independently confirmed this pass 🟧 |

- **STARs (names only):** Domestic STARs not restricted for assignment; international noise-abatement (night) STARs include **ARADI, BASIV, TAZEY, LUNBI** (feeding RWY 23L) and **RIKDI** (feeding RWY 05R) with multiple named transitions (e.g. PEBLU, VELMO, ELNOS, SALAG, UPLAR) — verify current AIRAC names before use. 🟧
- **LVP:** CAT II/III capability on 23L is the standing low-visibility mitigation; exact RVR/trigger figures not confirmed this pass. 🟧
- **Missed approach watch-items:** Terrain is not the driver (flat isthmus); the operative concern is re-sequencing on the single runway — divergent missed-approach design is used to keep the miss clear of departure traffic.

---

## 11. Departure

- **SIDs (names only — fly the charted version):** International departures use **AVNAR** (preferred, steep climb gradient, Cat C jets ex-05R), **POLIS** (Cat D/heavies, shallower gradient), **AKELA** (heavies via PEBLU/VELMO, lower gradient than AVNAR), **BROOK** (noise-abatement, Cat A–C); ex-23L, **LEVRA** (preferred jets), **STEAL** (props) — verify current AIRAC names/gradients before use. 🟧
- **RNP / climb-gradient requirements:** AVNAR carries a materially steeper climb gradient than POLIS/AKELA — assign per aircraft performance. See [`OM E — PBN and RNP Operations`](../../../../../flight-ops/pbn-and-rnp-operations.md).
- **Take-off minima:** Published per AIP — exact figures not confirmed this pass. 🟧
- **Start-up / push-back:** Standard push/start coordination with Auckland Ground; Code F aircraft carry specific taxiway/stand restrictions (§13). 🟧
- **ATC slot / CTOT & clearance:** No formal slot-coordination level found in reachable sources; single-runway capacity management is via ATC sequencing rather than a published slot regime. 🟧
- **De-icing:** Facilities not confirmed in reachable AIP extract; New Zealand's temperate maritime climate makes de-icing a low-frequency, non-signature consideration at this field. 🟧 See [`OM E — Cold Weather Operations`](../../../../../flight-ops/cold-weather-operations.md).

---

## 12. Noise & Environmental

- **Noise abatement (NAP):** Prescribed under CAR Part 93, Subpart B. International noise-abatement (night) STARs are used 2300–0600 local where traffic permits (§10); RWY 23L departures must climb to A030 on the extended centreline before turning; RWY 05R departures may not be taken off the SID until passing A030 and must not overfly the city below A050 unless established on an approach/departure path.
- **Night noise / dB limits:** Not confirmed in reachable sources beyond the CAR Part 93 reference above. 🟧
- **Engine run-up restrictions:** Not confirmed in reachable sources. 🟧
- **Reverse thrust / idle-reverse policy:** Not confirmed in reachable sources. 🟧

---

## 13. Ground operations

- **Stands for our types:** 🟧 **Code F (A380/B747-8) contact stands are 10, 15, 16, 17, 18**; **remote Code F stands are 19, 74, 75, 78, 79**. Rapid-exit taxiways A4–A7 are **not** approved for Code F use; TWY A2/A3/A8/A9 are available for approved A380 operators; a Code F aircraft cannot taxi behind a Code D/E/F aircraft holding TWY A1A–A10, and may not use TWY B between B2–B6.
- **Push-back:** Domestic gates 20–22 push onto D1/D2 or B; gates 28–33 push with nose toward the active runway, keeping B4/B5/B6 clear. International-apron push/start requires a tail-direction instruction.
- **Standard taxi routes:** RWY 23L in use → vacate via A4/A6/A8; RWY 05R in use → vacate via A7/A5/A3. RWY 05R domestic traffic routes via TWY B and L; TWY M may be used to bypass queues at holding point A9.
- **Hot spots / tight taxiways:** 🟧 High-speed (rapid) exits feed directly onto TWY A — avoid routing conflicting traffic across A near a vacating aircraft. Holding points **A3 and A8 are not used** for departure release (pilots cannot visually confirm the approach is clear before entry).
- **Follow-me:** Availability not confirmed in reachable source. 🟧

---

## 14. Weather & seasonal (durable)

- **Climate / prevailing wind:** Temperate maritime climate; no dominant single prevailing direction strong enough to fix a preferential runway — see §10.
- **Seasonal hazards:** No signature extreme-weather hazard on the order of fog, cyclone or hot-and-high performance penalty. Standard frontal-passage wind/rain systems are the normal pattern; occasional remnants of ex-tropical cyclones can affect the wider North Island in the Nov–Apr South Pacific cyclone season (see the [Oceania airspace brief](../../../../airspace/oceania.md) §11).
- **Local effects:** **Wading-bird activity** (Oystercatchers, godwits, knots, gulls, starlings, shags) is the field's most distinctive local hazard, tidal-cycle-linked and concentrated on the western half of the runway near TWY A8/A9 — see §3.5/§4.

> **Live weather — pull at planning (T-2h):** METAR, TAF, TREND, SIGMET/AIRMET. Not stored here.

---

## 15. NOTAMs

> **Pull at planning (T-2h).** Perishable — not stored here. Check: runway/taxiway closures, **current "Runway WIP" rehabilitation status and declared-distance impact**, navaid U/S, lighting, obstacle/crane, RFF downgrade, GPS/RAIM. Source: official AIS / OFP NOTAM block.

---

## 16. Fuel & alternate planning notes

- **Typical role for us:** Network destination (New Zealand gateway).
- **Nearest suitable alternates:** Company preferred alternates [**NZWN**](../nzwn/index.md) (Wellington), **NZCH** (Christchurch), **NZQN** (Queenstown) `[VAMSYS mirror 2026-07-26]` — confirm suitability, runway/RFF adequacy and current minima per leg; NZWN carries its own short-runway/windshear caveats (see its Briefing).
- **Fuel-uplift notes:** Avgas 100 and Jet A-1/DERD 2494 confirmed H24. See [`OM E — Fuel Policy`](../../../../../flight-ops/fuel-policy.md).
- **Range/perf flags for our fleet:** Field length/strength non-limiting for any K Global type under normal (non-WIP) declared distances. See [`OM B — Fleet Capability Matrix`](../../../../../fleet/capability-matrix.md).

---

## 17. Fleet-specific notes (optional)

- **Code F (A380/B747-8) operators** face specific contact/remote stand and taxiway restrictions at NZAA (§13) — confirm eligibility and routing before planning a Code F rotation here. No field-elevation or field-length performance penalty for any K Global type under normal declared distances.

---

## 18. Open items (🟧 — confirm against AIP / current AIRAC)

- **Magnetic variation** — AD 2.2 gives 19°35′E (Jan 2003, +3.2′/yr annual change); the GEN 3.7 VOR AA entry separately states 20°E — not independently reconciled to a single current-cycle figure.
- **Runway WIP (rehabilitation) current status** — historic AIP tables show materially reduced declared distances under displaced-threshold "WIP East/West" modes; current programme status and dates not confirmed this pass — verify by NOTAM.
- **Second parallel runway (05L/23R)** — long-deferred master-plan item; most recently reported target ~2038, subject to further slippage; not an operative near-term mitigation.
- **ATC frequencies** — sourced to a GEN 3.7 extract effective through 2022, cross-checked against VATNZ (tier-4, network-sim); not independently AIRAC-current-verified.
- **RNP/RNAV approach and current STAR/SID names** — not obtained from a primary AIP procedure chart this pass; VATNZ SOP corroborates SID names/logic (tier-4) but current AIRAC identifiers should be pulled at planning.
- **Take-off minima, de-icing facilities, noise dB limits, engine run-up/reverse-thrust policy, follow-me availability** — none confirmed in reachable sources.
- **Transition level (by QNH)** — not independently confirmed.

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim material (current-AIRAC charts) informs content but is not listed here.*

- **AIP New Zealand, AD 2 NZAA 2.1–2.24** (extract carrying effective dates 31 Mar 2016 – 1 Feb 2018) — runway/declared distances, RFF, handling, bird-hazard data, operational hours — mirrored via https://pdf4pro.com/cdn/nzaaad-2-2-aerodrome-geographical-and-administration-55b69d.pdf (retrieved 2026-07-26). **Treat exact current-cycle figures as needing a live-AIP cross-check.**
- **AIP New Zealand GEN 3.7-1/2** (Table GEN 3.7-1/-2, extract carrying effective dates to 2022) — ATC frequencies, navaid idents/frequencies — mirrored via https://fyi.org.nz/request/22244/response/83943/attach/8/GEN%203.7.pdf (retrieved 2026-07-26).
- **VATNZ — NZAA Auckland Standard Operating Procedures** — https://sops.vatnz.net/aerodromes/Class-C/nzaa/ (retrieved 2026-07-26). *Network-sim, not regulatory — SID assignment logic, Code F stand/taxi rules, noise-abatement STAR/SID structure cross-checked here.*
- Wikipedia — "Auckland Airport" — https://en.wikipedia.org/wiki/Auckland_Airport (retrieved 2026-07-26). *General/second-runway corroboration.*
- BusinessDesk — "Auckland airport second runway pushed out to 2041" and related reporting on the 2038 master-plan revision — https://businessdesk.co.nz/article/infrastructure/auckland-airport-second-runway-pushed-out-to-2041 (retrieved 2026-07-26). *Second-runway programme timeline.*

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-26 | Built from AIP New Zealand AD 2 NZAA + GEN 3.7; K Global fields from live VAMSYS; 4-page pack. |
