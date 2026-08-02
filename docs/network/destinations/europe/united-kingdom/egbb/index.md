# EGBB — Birmingham · Airport Briefing

**EGBB / BHX** · Birmingham (Bickenhill, Solihull), England, United Kingdom · Europe
**Version** v0.1 · **Updated** 2026-07-26 · **Status** Draft

> **Read-me:** Planning aid for the sim, not a chart. Static data is drawn from the NATS UK eAIP (AIP United Kingdom, AD 2 EGBB) plus standard public aeronautical data; approaches/SIDs/STARs are listed **by name only or flagged not-yet-confirmed** — fly the charted current-AIRAC version. Live weather/NOTAMs are pulled at planning (§14/§15). Open 🟧 items are listed in §18. Flag legend 🟥 restriction/hazard · 🟧 caution/unverified · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| ARP (lat/long) | 52°27′14″N / 001°44′53″W (centre point of runway intersection with Taxiways Lima/Tango) `[NATS eAIP AD 2.2]` |
| Field elevation | **339 ft AMSL** (reference temperature 18°C; geoid undulation 162 ft) |
| Mag variation | 0.13°W (2022), annual change 0.20°E `[NATS eAIP AD 2.2]` 🟧 current-day value not independently recalculated |
| Time zone | UTC+0 (GMT) / UTC+1 (BST, EU-aligned DST) |
| Runway(s) | **Single runway 15/33**, 3,052 × 45 m, asphalt (grooved) — **both thresholds displaced** (RWY 15: 291 m: RWY 33: 447 m) |
| Preferential runway | **RWY 33** preferred for arrivals/departures when the surface is dry and mean wind at the RWY 33 anemometer is ≤5 KT; RWY 15 used on request for operational reasons 🟧 (sourced to a 2022 AIP cycle cross-check — re-verify current cycle) |
| Longest LDA | 2,581 m (RWY 15); 2,450 m (RWY 33) — both reduced from the 3,052 m physical length by the displaced thresholds |
| Approaches | **ILS CAT III on both runway ends** (IBIR/RWY 15, IBM/RWY 33) — a strong low-visibility capability for a single-runway regional field |
| RFF category | **Category 9** (published as "Category A9"); **Category 10 accepted under remission** (e.g. diverting A380s) `[NATS eAIP AD 2.6]` 🟩 |
| Control type | **Radar** — Birmingham Radar/Director on approach; Birmingham Tower/Ground/Delivery on the field; Class D CTR/ATZ |
| Elevation class | Flat West Midlands plain (339 ft) — **not** hot-and-high; no close-in high terrain (see §3.1) |
| Special-airport status | 🟥 **IATA Level 3 slot-coordinated** (coordinator **Airport Coordination Limited, ACL**); **Taxiway D wingspan-restricted** (42 m max between D4/D5, larger routed via Taxiway E); **A340-600 not accepted** (taxiway-curve limitation) — see §5/§13 |
| Customs / PoE | **Yes** — H24, cleared on Stands 1–86 unless prior agreement `[NATS eAIP AD 2.3]` |
| K Global category | **R** `[VAMSYS mirror 2026-07-26]` |
| K Global base | **No** `[VAMSYS mirror 2026-07-26]` |
| Company preferred alternates | **EGCC, EGLL, EGKK** `[VAMSYS mirror 2026-07-26]` |
| Taxi-in / taxi-out (VAMSYS) | **12 min / 14 min** `[VAMSYS mirror 2026-07-26]` (the AIP's own generic planning figure is a **15-minute standard taxi time** for flight-plan purposes `[NATS eAIP AD 2.20]` — a separate figure, not a conflict) |

---

## 2. Validation summary

| Domain | Flag | Note |
|---|---|---|
| Terrain / CFIT | 🟩 | Flat West Midlands plain; obstacles in the approach/take-off funnels and circling area are all low (trees, masts, buildings, pylons, a few cranes) — no close-in high terrain. See §3.1. |
| Runway length vs fleet perf | 🟧 | Single runway, 3,052 m physical, but **both thresholds displaced** (291 m/447 m) reduce LDA to 2,581 m/2,450 m — ample for a narrowbody R-category operation but a real single-runway/no-redundancy constraint. |
| Approach availability / minima | 🟩 | ILS CAT III both ends — the deepest LVP capability available at this field size; exact LVP RVR trigger not confirmed this pass 🟧. |
| Airspace / traffic / control | 🟩 | Class D CTR/ATZ, radar-controlled, single-runway sequencing; part of Coventry's (EGBE) ATZ sits inside Birmingham controlled airspace — minor traffic-interaction awareness item. |
| Weather / seasonal hazard | 🟧 | AIP explicitly warns of building-induced turbulence/wind shear in strong winds and crosswind exposure from runway orientation; standard UK frontal/fog climatology otherwise. |
| Curfew / slots / hours | 🟥 | **IATA Level 3 slot-coordinated** (ACL) **and** one of the strictest UK night-noise regimes — QC>1 aircraft banned from scheduling 2330–0600, annual night QC cap reduced to 2,800, plus night taxiway/stand closures. See §6/§12. |
| RFF category vs our types | 🟩 | Category 9 (remission to 10) — adequate for the K Global R-category fleet using this field. |
| Fuel availability | 🟩 | Jet A-1 (AVTUR), H24, bowser delivery `[NATS eAIP AD 2.4]`. |
| Customs / handling / security | 🟩 | H24 customs; ground handling **mandatory** via one of four named agents — confirm which handles the K Global operation. 🟧 |

---

## 3. Threat & Error Management (TEM)

### 3.1 CFIT / Terrain 🟩
Birmingham sits at 339 ft AMSL on the flat West Midlands plain — there is **no close-in high terrain** relevant to arrival, departure or missed-approach paths. The AIP's own obstacle table (AD 2.10) lists only low, expected obstacles in the approach/take-off funnels — trees, hedges, lamp posts, gantries and the ILS localizer/monitor structures themselves, mostly 300–450 ft AMSL / under 90 ft AGL, plus a scattering of masts, pylons and radio/ATC aerials in the wider circling area up to roughly 550–640 ft AGL several nautical miles out (consistent with a semi-rural/light-industrial region, not a terrain hazard). One listed crane northwest of the field is unusually tall (≈1,015 ft AMSL / 638 ft AGL, lit) with an "end estimated" date that has already passed relative to this brief's build date — **treat as a NOTAM-check item, not a standing hazard** (§18). CFIT is not the operative threat at this field; verify the current MSA/obstacle picture via NOTAM as routine practice.

### 3.2 Airborne conflict / traffic 🟩
Birmingham is Class D controlled airspace (CTR to 4,500 ft ALT / ATZ to ~2,339 ft ALT, both SFC-based) under **Birmingham Radar/Director**, with the field itself the busiest single-runway regional airport in the network. Traffic is moderate rather than saturating, and single-runway operation simplifies sequencing logic relative to multi-runway hubs, but leaves **no runway redundancy** if the one runway is compromised. A notable local-airspace quirk: **part of Coventry's (EGBE) ATZ lies inside the Birmingham CTR/CTA**, and Coventry-bound traffic on airways is routed on Birmingham STARs and positioned for Coventry by Birmingham Approach — worth situational awareness on any EGBE-adjacent routing. No dedicated UK FIR brief exists in this library for the London FIR (EGTT), in which Birmingham sits; see [Europe airspace general brief](../../../../airspace/europe.md) for enroute/regional context — note that file's primary scope is continental Europe, not a UK-specific FIR brief, a genuine coverage gap flagged in §18. 🟧

### 3.3 Runway excursion 🟧
The single runway 15/33 (3,052 × 45 m, grooved asphalt) has **both thresholds displaced** — RWY 15 by 291 m, RWY 33 by 447 m — reducing usable landing distance to 2,581 m and 2,450 m respectively; brief the correct LDA for the assigned runway, not the full physical length. The AIP separately warns that standing water can be encountered on the runway edge between Taxiways Foxtrot and Bravo when the surface is reported wet — a runway-edge, not centreline, hazard, but worth noting for a contaminated-runway approach. Runway orientation (15/33, true bearing 146°/326°) is not aligned with all prevailing UK wind states, so crosswind exposure is a routine consideration rather than an edge case.

### 3.4 Weather threat 🟧
The AIP explicitly warns that, **due to runway orientation relative to prevailing winds, pilots should anticipate crosswinds and may experience building-induced turbulence and wind shear on the aerodrome in strong winds** — a specific, sourced local-effect warning rather than generic climatology. Beyond this, Birmingham experiences standard temperate-UK weather: frontal systems, seasonal fog/mist affecting a single-runway field with no redundancy, and a recognised winter de-icing season. No tropical or high-altitude hazard applies. See §14.

### 3.5 Operational considerations 🟥
Three durable, field-specific constraints to brief: (1) **Taxiway D is wingspan-restricted to 42 m between D4 and D5** — any aircraft exceeding this is routed via Taxiway E instead, a real ground-routing planning item (§13); (2) **Birmingham Airport does not accept the A340-600** due to a taxiway-curve limitation — not a K Global fleet type currently, but a standing field constraint worth recording; and (3) the field runs a genuinely strict commercial/noise regime — **IATA Level 3 slot coordination** via ACL, plus a night-noise/Quota-Count scheme among the tightest in the UK (annual night QC cut to 2,800, QC>1 aircraft banned from the 2330–0600 night period outright) — schedule-integrity and noise-compliant equipment are real planning constraints here, not administrative footnotes (§6/§12).

---

## 4. Cautions & Warnings

- **Taxiway D between D4 and D5 is wingspan-limited to 42 m** — aircraft exceeding this are routed via Taxiway E; confirm routing before push-back. 🟥
- **Both runway thresholds are displaced** (RWY 15: 291 m; RWY 33: 447 m) — always use the declared LDA, never the 3,052 m physical length. 🟧
- **Birmingham does not accept the A340-600** (taxiway-curve limitation) — a standing field restriction, not a NOTAM item. 🟥
- **Building-induced turbulence and wind shear** are AIP-warned in strong-wind conditions given runway orientation. 🟧
- **Pigeon activity** — birds may cross the runway up to 100 ft AGL; H24 bird dispersal (including pyrotechnics) is in effect. 🟧
- **Unauthorised ground-based laser incidents** have been reported in the airfield vicinity — report immediately via Tower. 🟧
- **Standing water risk** on the runway edge between Taxiways Foxtrot and Bravo when the surface is reported wet. 🟧
- **Long-wheelbase types (e.g. B777-300) should exercise caution on taxiway curves/intersections** — main-gear-to-pavement-edge clearance may be limited in places. 🟧
- **IATA Level 3 slot coordination plus one of the UK's strictest night-noise regimes** — a late rotation carries real commercial and compliance consequences, not just a schedule inconvenience. 🟥

---

## 5. Aerodrome category, restrictions & crew qualification

- **Special-airport / category:** Not operator-categorised as a restricted-crew "special airport" in reachable sources; the standing crew-briefing items are the **single-runway/no-redundancy environment**, the **Taxiway D wingspan constraint**, and the **strict night-noise/slot regime**. 🟧
- **Crew-qualification gate:** CAT II/III currency required for full-capability low-visibility approaches on either runway end; confirm crew/aircraft currency before planning a low-vis arrival. 🟧
- **Operating restrictions / bans:** **A340-600 not accepted** (taxiway-curve limitation); certain RNAV1 departures (COWLY 2Y, CPT 2Y, DTY 2Y, WCO 2Y) require RNAV1 capability — non-RNAV1 aircraft use the conventional route structure; no RNP AR ban found in reachable sources — verify current AIRAC. 🟧
- **Overflight / entry / permits:** Standard UK/non-Schengen international arrival; no special state permit required. 🟩
- **Operations notes:** Airport operator — **Birmingham Airport Limited**; ANSP/ATC — Birmingham Airport's own ATC unit (Birmingham Radar/Director/Tower/Ground/Delivery); slot coordinator — **Airport Coordination Limited (ACL)**. Ground handling is **mandatory for all aircraft** — four named agents: Blue City, Signature, Swissport, XLR Executive Jet Centres `[NATS eAIP AD 2.4]`.

---

## 6. General / hours / services

| Item | Value | Flag |
|---|---|---|
| ATS hours | H24 | 🟩 |
| AD operating hours | H24 (AD Administration, Customs, Fuelling, Handling, Security, De-icing all published H24) | 🟩 |
| Night / curfew restrictions | **Night period 2330–0600 local**; aircraft with QC >1 (or, per the AIP's own noise-classification text, 93 EPNdB or more) **not permitted to be scheduled** in this window; annual night Quota Count limit reduced to **2,800**; Taxiways T/U and Stands 81–86 closed Mon–Sat 2300–0700 / Sun 2300–0800 (local) except under the night flying policy's exemptions | 🟥 |
| RFF category | **Category 9** (Category 10 under remission) | 🟩 |
| Fuel | AVTUR Jet A-1; oils 100/W80/W100; delivery by bowser; H24 `[NATS eAIP AD 2.4]` | 🟩 |
| PCN/PCR | Runway PCR 1550/R/C/W/T; taxiways vary by section (PCR ~560–3,780 depending on taxiway) — see §7 | 🟩 |
| Customs | H24, cleared on Stands 1–86 unless prior agreement | 🟩 |
| Handling / FBO | **Mandatory** for all aircraft — Blue City, Signature, Swissport, XLR Executive Jet Centres; specific agent contracted for the K Global operation not confirmed | 🟧 |

---

## 7. Runways & declared distances

| RWY | Dimensions | Surface / PCN | TORA | TODA | ASDA | LDA | Notes |
|---|---|---|---|---|---|---|---|
| 15 | 3,052 × 45 m (+7.5 m shoulders each side, 60 m total paved width) | Asphalt, grooved / PCR 1550/R/C/W/T | 3,004 m | 3,064 m | 3,004 m | **2,581 m** | **Threshold displaced 291 m.** Intersection take-offs published from TWY B (TORA 2,447 m), TWY L (1,444 m), TWY G (1,220 m). |
| 33 | 3,052 × 45 m (+7.5 m shoulders each side, 60 m total paved width) | Asphalt, grooved / PCR 1550/R/C/W/T | 3,004 m | 3,197 m | 3,004 m | **2,450 m** | **Threshold displaced 447 m.** Intersection take-offs published from TWY E (2,552 m), TWY C (2,182 m), TWY F (2,093 m), TWY G (1,769 m), TWY L (1,560 m). |

*Strip 3,124 × 280 m both directions. Runway width available for a full-length back-track turn is published as 46 m. Source: NATS UK eAIP AD 2.12/2.13, AIRAC effective 2026-03-19 (retrieved 2026-07-26). All distances in metres.*

---

## 8. Communications

| Service | Callsign | Frequency | Hours | Notes |
|---|---|---|---|---|
| ATIS | Birmingham Information | 136.030 | H24 | Also by telephone: 0121-767 1260 |
| Delivery | Birmingham Delivery | 121.930 | H24 | Departing aircraft make initial contact here; GMC outside Ground's operating hours also use 118.305 |
| Ground | Birmingham Ground | 121.805 | On request | |
| Tower | Birmingham Tower | 118.305 | H24 | DOC 25 NM/4,000 ft |
| Approach / Director | Birmingham Director | 131.005 | As directed by ATC | ATZ hours coincide with Approach hours; radar-failure fallback: Birmingham Approach on 123.980 or 131.005 |
| Radar | Birmingham Radar | 123.980 (H24) · 131.330 (as directed by ATC) | Mixed H24/as-directed | DOC 40 NM/20,000 ft |
| Other | Birmingham Fire / Birmingham Emergency | 121.605 (non-ATS, fire-vehicle use) / 121.500 (H24) | — | Fire freq. available when a fire vehicle is attending an aircraft on the ground |
| Centre / FIR | London FIR (EGTT) | Per current AIRAC | H24 | No dedicated FIR brief in this library — see [Europe airspace general brief](../../../../airspace/europe.md) 🟧 (scope gap, see §18) |

*Source: NATS UK eAIP AD 2.18, AIRAC effective 2026-03-19 (retrieved 2026-07-26). Cross-checked against a VATSIM UK airfield-information page (network-sim, not regulatory) which shows matching frequencies and the Birmingham Radar/Director split.*

---

## 9. Navaids

| Aid | Ident | Freq | Hours | Notes |
|---|---|---|---|---|
| ILS/LOC RWY 15 | IBIR | 110.100 | HO (coincides with notified ATS hours) 🟧 | **CAT III.** False capture may be experienced approaching from the north. |
| ILS/GP RWY 15 | IBIR | 334.400 | HO 🟧 | 3° glidepath, ref. datum height 55 ft |
| ILS/LOC RWY 33 | IBM | 110.100 | HO 🟧 | **CAT III.** |
| ILS/GP RWY 33 | IBM | 334.400 | HO 🟧 | 3° glidepath, ref. datum height 54 ft |
| DME | IBM / IBIR | CH38X (110.100 paired) | H24 | On field; zero range indicated at THR of both RWY 15 and RWY 33; elevation 357 ft |
| NDB (L) | BHX | 406 kHz | H24 | On field; range 25 NM |

*Both runway ends carry a full CAT III ILS — a strong low-visibility capability for a single-runway field. Source: NATS UK eAIP AD 2.19, AIRAC effective 2026-03-19 (retrieved 2026-07-26). "HO" (hours as notified) is expected to align with H24 ATS but not independently itemised — flagged for confirmation.*

---

## 10. Arrival

- **Transition altitude / level:** TA 6,000 ft; TL by QNH, set by ATC per current QNH — verify current chart. 🟧
- **Speed:** 250–210 KT during intermediate approach below FL100 per the field's continuous-descent-approach (CDA) technique; ATC will impose 180 KT or less inside 10 DME I-BM/I-BIR.
- **Preferential runway logic:** **RWY 33** preferred when the surface is dry and mean wind at the RWY 33 anemometer is ≤5 KT; RWY 15 used on ATC request/for stated operational reasons. 🟧 (sourced to a historical AIP cycle cross-check — re-verify against current AIRAC.)
- **Approaches (names only — verify minima on current AIRAC charts):**

| RWY | Approach | Notes |
|---|---|---|
| 15 | ILS CAT III (IBIR) | False capture possible approaching from the north |
| 33 | ILS CAT III (IBM) | |

- **STARs (names only — verify current AIRAC):** Release/transition points **GROVE** and **CHASE** are the standard inbound holding/release fixes; a third STAR structure via **OLIVE** exists but is reserved for use when the HON VOR is out of service. A recent AIRAC cycle (2603) is reported to have replaced the "BEGAM" STAR series with "OMENU" — **treat all STAR names as unconfirmed for the current cycle and pull the live procedure list at planning.** 🟧
- **LVP:** CAT II/III procedures apply on both runways subject to facility serviceability; ATC Low Visibility Procedures are announced via ATIS/RTF. Exact RVR trigger thresholds not confirmed this pass. 🟧
- **Missed approach watch-items:** Terrain is not the driver (flat plain); the operative missed-approach concern is re-sequencing in Class D airspace with a single runway and no parallel/alternate landing surface.

---

## 11. Departure

- **SIDs (names only — fly the charted version):** A dedicated **MOSUN** procedure (turboprop-only, joining/leaving MOSUN at FL160 or below) and **BRUMI**-linked routings exist for RWY 15 operations; RNAV1 departures **COWLY 2Y, CPT 2Y, DTY 2Y, WCO 2Y** are issued to RNAV1-capable aircraft routing south from RWY 15. **Treat all SID names/gradients as unconfirmed for the current AIRAC cycle** — pull the live procedure list at planning. 🟧
- **RNP / climb-gradient requirements:** RNAV1 capability required for the COWLY/CPT/DTY/WCO 2Y departures; non-RNAV1 aircraft file via the conventional route structure. See [`OM E — PBN and RNP Operations`](../../../../../flight-ops/pbn-and-rnp-operations.md).
- **Take-off minima:** Published per AIP; exact figures not confirmed this pass. 🟧
- **Start-up / push-back:** Clearance Delivery via Voice RTF or Datalink DCL (**DCL available from EOBT-19 minutes**; must be accepted within 10 minutes of receipt or reverts to voice); departing aircraft call **Birmingham Delivery 121.930** stating type, stand and latest ATIS letter. **Self-manoeuvring on Terminal Apron stands is prohibited** unless separately approved by Airfield Operations — push-back is effectively mandatory. 🟧
- **ATC slot / CTOT & clearance:** **IATA Level 3 slot-coordinated** (coordinator **Airport Coordination Limited, ACL**); night departures additionally governed by the Night Quota Allocation procedures (Local Rule 1) — see §12.
- **De-icing:** Available by arrangement with the handling agents, H24 seasonal service `[NATS eAIP AD 2.3/2.4]`; no dedicated centralised remote pad system confirmed in reachable sources — verify current provisioning. 🟧 See [`OM E — Cold Weather Operations`](../../../../../flight-ops/cold-weather-operations.md).

---

## 12. Noise & Environmental

- **Noise abatement (NAP):** Published Noise Preferential Routings (NPRs) apply to all departing jet aircraft and any aircraft over 5,700 kg MTWA. Aircraft must avoid the congested areas of Hampton-in-Arden and Balsall Common (SE of the field) and Dorridge, Knowle and Hockley Heath (SW of the field) unless on radar vectors. Every jet aircraft must achieve at least 500 ft/min rate of climb after take-off/go-around at power settings giving progressively decreasing noise below the flight path. Continuous descent approach (CDA) technique is expected of all turbo-jet/turbo-prop arrivals, commencing from 6,000 ft QNH.
- **Night noise / dB limits:** Night period **2330–0600 local**. Aircraft with a QC >1 (per the current Night Quota Allocation local rule) — historically expressed in the AIP as a 93 EPNdB-or-greater noise classification — **may not be scheduled** in this window without exceptional prior approval from the Airfield Duty Manager. Departure noise-monitor readings above **83 dB(A) Lmax** (6.5 km from start-of-roll) during the night period incur a runway surcharge. The **annual night Quota Count limit has been reduced to 2,800** (from a prior 4,000), among the strictest such regimes at a UK airport, alongside a section-106 planning agreement capping the annual average share of night movements. 🟧 exact current-season QC/movement-limit figures should be re-confirmed each season against the airport's published capacity declaration.
- **Engine run-up restrictions:** No aircraft engine-running activity (other than arriving aircraft proceeding to the apron) is permitted on the first 100 m of RWY 15, Taxiway A, or Taxiway B north of Hold A6, between 2300–0700 (2200–0600) local/UTC-equivalent; RWY 15 TORA/ASDA/TODA reduces by 150 m for aircraft that landed before 2300 and are proceeding under this exemption. APUs must be shut down immediately on arrival (except where no FEGP is available) and not restarted more than 30 minutes before departure; no APU ground-running on aprons 2300–0600 (2200–0500) except for aircraft that landed before 2330.
- **Reverse thrust / idle-reverse policy:** Captains are **requested** (not mandated) to avoid reverse thrust after landing where consistent with safe operation, especially between 2300–0700 (2200–0600) local.

---

## 13. Ground operations

- **Stands for our types:** Terminal Apron Stands 1–86 (mixed nose-in/push-back, Safedock docking guidance on several stands, marshaller-guided on others); Elmdon Apron Stands 501–506 (marshaller-guided only, general aviation/executive-oriented). Specific stand allocation for the K Global R-category operation not confirmed. 🟧
- **Push-back:** **Self-manoeuvring on Terminal Apron stands is prohibited** unless separately approved by Airfield Operations — plan for a mandatory push-back/tow at these positions. 🟥
- **Standard taxi routes:** Confirm with Ground/Delivery on the day. Notable published constraints: after landing on **RWY 15 and vacating onto Taxiway C, no aircraft may proceed beyond C2 without specific ATC instruction**; **Taxiways T/U and Stands 81–86 are closed** Mon–Sat 2300–0700 / Sun 2300–0800 local except under night-flying-policy exemptions.
- **Hot spots / tight taxiways:** 🟥 **Taxiway D between D4 and D5 is restricted to 42 m maximum wingspan** — larger aircraft are routed via Taxiway E. Code E aircraft entering **Taxiway Foxtrot (F)** from the Elmdon Apron area are given follow-me guidance due to reduced main-gear-to-pavement-edge clearance on the bend. Long-wheelbase types (e.g. B777-300) should exercise particular caution on taxiway curves/intersections generally.
- **Follow-me:** Available on request via ATC, and provided as standard for Code E aircraft on the Taxiway Foxtrot bend and generally for A380 diversions (see below).
- **A380 handling (context, not a K Global type):** Birmingham can accept A380s only as a pre-arranged diversionary aerodrome (subject to Head of Airfield Operations agreement and individual UK CAA approval); maximum 3 A380s on the ground at once, only 1 moving at any time; departing A380s must use the CAT III runway holds regardless of weather; diverting A380s are provided RFF Category 9 under CAP 168 Ch. 8.

---

## 14. Weather & seasonal (durable)

- **Climate / prevailing wind:** Temperate maritime UK climate on the West Midlands plain; runway orientation (15/33) does not align with all prevailing wind states, so crosswind exposure is routine rather than exceptional.
- **Seasonal hazards:** No tropical or convective-extreme hazard. Standard UK frontal-system weather, seasonal fog/mist (a single-runway field has no redundancy if visibility drops, mitigated by CAT III on both ends), and a recognised winter de-icing season (de-icing available by arrangement with handling agents, H24 seasonal service).
- **Local effects:** The AIP specifically flags **building-induced turbulence and wind shear on the aerodrome in strong winds**, attributed to runway orientation relative to prevailing wind and airport-area structures — a sourced, field-specific local effect rather than generic guidance.

> **Live weather — pull at planning (T-2h):** METAR, TAF, TREND, SIGMET/AIRMET. Not stored here.

---

## 15. NOTAMs

> **Pull at planning (T-2h).** Perishable — not stored here. Check: runway/taxiway closures (esp. Taxiway D wingspan-restriction status, Taxiways T/U and Stands 81–86 night closures), navaid U/S (CAT III equipment status on either runway end), lighting, obstacle/crane status (the tall crane northwest of the field noted in §3.1 in particular), RFF downgrade, GPS/RAIM for RNAV1 procedures. Source: official AIS / OFP NOTAM block.

---

## 16. Fuel & alternate planning notes

- **Typical role for us:** **Destination** — Birmingham is not a K Global base; it is served as a network destination.
- **Nearest suitable alternates:** Company preferred alternates [**EGCC**](../egcc/index.md), [**EGLL**](../egll/index.md), [**EGKK**](../egkk/index.md) `[VAMSYS mirror 2026-07-26]` — confirm suitability, runway/RFF adequacy and current minima per leg.
- **Fuel-uplift notes:** AVTUR Jet A-1, H24, delivered by bowser (no dedicated hydrant system confirmed). See [`OM E — Fuel Policy`](../../../../../flight-ops/fuel-policy.md).
- **Range/perf flags for our fleet:** Field length/strength non-limiting for the K Global R-category fleet on either runway direction once the displaced-threshold LDA is respected. See [`OM B — Fleet Capability Matrix`](../../../../../fleet/capability-matrix.md) for type-by-type reference.

---

## 17. Fleet-specific notes (optional)

- Birmingham is a network **destination**, not a base — no home-fleet-wide consideration applies. The one durable fleet-relevant constraint is ground infrastructure rather than performance: **Taxiway D's 42 m wingspan limit** and the **A340-600 acceptance ban** are field-wide ground/taxiway constraints, not an issue for the K Global R-category fleet currently serving this destination. See [`OM B — Fleet Capability Matrix`](../../../../../fleet/capability-matrix.md).

---

## 18. Open items (🟧 — confirm against AIP / current AIRAC)

- **Magnetic variation current-day value** — sourced to a 2022 epoch (0.13°W, annual change 0.20°E printed in the current AIRAC cycle); not independently recalculated to a present-day figure.
- **Preferential-runway rule (RWY 33 default, ≤5 KT/dry)** — cross-checked to a 2022 AIP cycle extract; not independently re-confirmed against the current (2026-03-19) AIRAC cycle text, which was not fully reachable in this research pass.
- **SID/STAR current names** — GROVE/CHASE/OLIVE (STARs) and MOSUN/BRUMI/COWLY-CPT-DTY-WCO 2Y (departures) are drawn from a mix of current and recent-cycle sources; at least one recent AIRAC (2603) reportedly renamed a STAR series (BEGAM → OMENU) — pull the live current-AIRAC procedure list before use.
- **Local Aerodrome Regulations / Noise Abatement Procedures detail (AD 2.20/2.21)** — the UK eAIP fetch for the current (2026-03-19) AIRAC cycle was truncated mid-section before reaching the full text of these two sections; the detail used here (Taxiway D restriction, A380 handling limits, NPR structure, night engine-running restriction, night noise classification) is cross-checked against a 2022 AIRAC cycle extract of the same sections. Ground infrastructure/procedural detail of this kind is durable but should be re-verified against the exact current cycle.
- **Current-season Night Quota / movement-limit figures** — 2,800 annual night QC and a ~7.3–7.6% average night-movement share are drawn from secondary reporting (news coverage of a 2025/2026 planning-consent change), not the primary planning-condition document itself.
- **ILS/LOC "HO" hours** — printed as "hours as notified" rather than an explicit H24 confirmation; expected to align with H24 ATS but not independently itemised.
- **Ground handling agent contracted for the K Global operation, and confirmed turnaround/stand allocation** — not identified in reachable public sources.
- **Take-off minima and exact LVP/CAT III RVR trigger values** — not confirmed in reachable sources this pass.
- **De-icing pad/provisioning detail** — availability confirmed (by arrangement with handling agents, H24 seasonal), but no dedicated remote-pad layout found, unlike some larger fields.
- **Tall obstacle (crane, ≈638 ft AGL) northwest of the field** — listed with an "end estimated" date already in the past relative to this brief's build date; status should be confirmed via current NOTAM rather than treated as a standing feature.
- **No dedicated London FIR (EGTT) brief exists in this library** — the [Europe airspace general brief](../../../../airspace/europe.md) is linked for enroute context, but its primary scope is continental Europe, not a UK-specific FIR brief; this is a genuine library gap, not an oversight in this pack.

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim material (current-AIRAC charts) informs content but is not listed here.*

- **NATS UK eAIP, AD 2 EGBB**, AIRAC effective 2026-03-19 — https://www.aurora.nats.co.uk/htmlAIP/Publications/2026-03-19-AIRAC/html/eAIP/EG-AD-2.EGBB-en-GB.html (retrieved 2026-07-26). *ARP/elevation/mag var, runway physical characteristics, declared distances, RFF, comms, navaids, hours/services, obstacle table.*
- **NATS UK eAIP, AD 2 EGBB**, AIRAC effective 2022-06-16 (historical cycle, cross-checked for AD 2.20 Local Aerodrome Regulations and AD 2.21 Noise Abatement Procedures where the current-cycle fetch was incomplete) — https://www.aurora.nats.co.uk/htmlAIP/Publications/2022-06-16-AIRAC/html/eAIP/EG-AD-2.EGBB-en-GB.html (retrieved 2026-07-26). *Taxiway D wingspan restriction, A340-600 restriction, A380 handling limits, preferential-runway rule, noise preferential routings, night engine-running/APU restrictions, night noise classification.*
- Airport Coordination Limited — "BHX Local Rule 1: Night Quota Allocation Procedures," v1.0, September 2025 — https://www.acl-uk.org/wp-content/uploads/2025/10/BHX_-Local-rule-1-_SEP2025_FINAL-VERSION.pdf (retrieved 2026-07-26). *Night period definition, QC>1 scheduling ban, slot-coordination mechanics.*
- UK CAA — "Airspace information: transparency about airspace use and aircraft movements — Birmingham Airport," April 2026 — https://www.caa.co.uk/media/4fcl35a4/birmingham-april-2026.pdf (retrieved 2026-07-26). *Night-period confirmation, Level 3 slot-coordination confirmation, noise-reporting structure.*
- BirminghamWorld — "Birmingham Airport gets permission for more night flights despite widespread opposition" — https://www.birminghamworld.uk/news/birmingham-airport-gets-permission-for-more-night-flights-despite-widespread-opposition-4937674 (retrieved 2026-07-26). *Annual night QC reduced 4,000→2,800; night-movement share cap — secondary source.*
- The Solihull Observer — "Noise-busting night flight restrictions approved at Birmingham Airport," 2018-04-05 — https://solihullobserver.co.uk/news/noise-busting-night-flight-restrictions-approved-at-birmingham-airport/ (retrieved 2026-07-26). *Historical context for the 85→83 dB(A) night noise-violation threshold.*
- IVAO Documentation Library — "Birmingham (EGBB)" local procedures — https://wiki.ivao.aero/en/home/divisions/xu/atc/aerodrome/local-procedure/midlands/egbb (retrieved 2026-07-26). *Network-sim document, not regulatory — corroboration of frequency structure, preferential-runway logic, GROVE/CHASE release points.*
- VATSIM UK — "EGBB | Birmingham" airfield information — https://www.vatsim.uk/airports/EGBB (retrieved 2026-07-26). *VATSIM cross-check per build workflow — network-sim, not regulatory; corroborates TA 6,000 ft, GROVE/CHASE release fixes, OLIVE STAR as a HON-VOR-outage contingency only, Class D CTR.*
- OurAirports — https://ourairports.com/airports/EGBB/ (retrieved 2026-07-26). *ARP/elevation/runway cross-check.*
- Wikipedia — "Birmingham Airport" — https://en.wikipedia.org/wiki/Birmingham_Airport (retrieved 2026-07-26). *General history (2014 runway extension, terminal development) — travel/reference source, not AIP-grade.*

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-26 | Built from UK AIP (NATS AIS); K Global fields from live VAMSYS; 4-page pack. |
