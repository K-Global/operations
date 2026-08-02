# EGCC — Manchester · Airport Briefing

**EGCC / MAN** · Manchester, England, United Kingdom · Europe
**Version** v0.1 · **Updated** 2026-07-26 · **Status** Draft

> **Read-me:** Planning aid for the sim, not a chart. Static data is drawn from the UK AIP (NATS AIS eAIP, AD 2 EGCC) plus Manchester Airport's own published Airside Standing Instructions; approaches/SIDs/STARs are listed **by name only** — fly the charted current-AIRAC version. Live weather/NOTAMs are pulled at planning (§14/§15). Open 🟧 items are listed in §18. Flag legend 🟥 restriction/hazard · 🟧 caution/unverified · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| ARP (lat/long) | 53°21′13″N 002°16′30″W (53.35361, -2.27500) — midpoint of RWY 05L/23R |
| Field elevation | **257 ft AMSL** (reference temperature 18°C) |
| Mag variation | 0.45° E (2027), annual change 0.19° E |
| Time zone | UTC+0 (GMT) / UTC+1 (BST, EU-aligned UK DST observed) |
| Runway(s) | **05L/23R** ("Runway 1") 3,048 × 45 m, non-grooved, CAT III both ends · **05R/23L** ("Runway 2") 3,050 × 45 m, grooved, CAT I both ends |
| Preferential runway | **Westerly (23-config) preferred at all times** subject to headwind/tailwind/crosswind and ILS-serviceability criteria — see §10/§11 |
| Longest LDA | 2,864 m (05R and 23L) |
| Approaches | **ILS CAT III both ends of 05L/23R**; **ILS CAT I both ends of 05R/23L** (23L localiser ident not independently confirmed this pass 🟧) |
| RFF category | **CAT 10 / A10** (ICAO highest category) 🟩 |
| Control type | **Radar** — Manchester Radar (Approach) / Manchester Director; segregated-mode parallel-runway operation on the field |
| Elevation class | Low/flat field (257 ft) — **not** hot-and-high; **no significant close-in high terrain** — see §3.1 |
| Special-airport status | 🟥 **All flights PPR at all times** (filing a flight plan does not itself confer permission); **IATA Level 3 slot-coordinated** — see §5 |
| Customs / PoE | **Yes** — H24 |
| K Global category | **L** `[VAMSYS mirror 2026-07-26]` 🟩 |
| K Global base | **No** `[VAMSYS mirror 2026-07-26]` |
| Company preferred alternates | **EGBB, EGLL, EGKK** `[VAMSYS mirror 2026-07-26]` |
| Taxi-in / taxi-out (VAMSYS) | **14 min / 18 min** `[VAMSYS mirror 2026-07-26]` |

---

## 2. Validation summary

| Domain | Flag | Note |
|---|---|---|
| Terrain / CFIT | 🟩 | Flat Cheshire/Greater Manchester plain; no significant close-in high terrain relevant to arrival, departure or missed-approach paths. This is a low-terrain field — a non-factor for CFIT in itself. |
| Runway length vs fleet perf | 🟩 | Both runway pairs (~3,048–3,050 m) are ample for any K Global type in the **L** category; declared-distance reductions from displaced thresholds are noted but non-limiting for typical operating weights. |
| Approach availability / minima | 🟧 | ILS CAT III on both ends of 05L/23R is strong low-vis capability; 05R/23L is CAT I-equipped per AIP but the discrete 23L localiser identifier was not independently confirmed this pass, and Airside Standing Instruction language suggests 23L is not the field's routine precision-approach runway in poor visibility (traffic reverts to 05R's CAT I ILS) — see §9/§18. |
| Airspace / traffic / control | 🟧 | Busy regional hub under Manchester Radar with a segregated dual-runway mode (one runway landing, the other departing) during defined daytime windows, reverting to single-runway (05L/23R) operation outside those windows — see §3.2/§10/§11. |
| Weather / seasonal hazard | 🟧 | Maritime NW-England climate — low cloud/stratus and radiation fog are a recognised seasonal issue, mitigated by CAT III infrastructure on the main runway pair; frontal systems off the Irish Sea bring wind/rain year-round — see §3.4/§14. |
| Curfew / slots / hours | 🟥 | **All flights PPR at all times**; **IATA Level 3 slot-coordinated** (ACL); hard **Quota Count (QC) night-noise regime** with QC8/QC16 banned 23:00–06:59 and a QC4 scheduling ban 23:30–05:59 — see §6/§12. |
| RFF category vs our types | 🟩 | CAT 10/A10 — above any of our fleet's requirement. |
| Fuel availability | 🟩 | Jet A-1 (no anti-icing additive), hydrants at all pier stands, H24. |
| Customs / handling / security | 🟩 | H24 customs/immigration/health; multiple confirmed ground handlers; mandatory nominated handling agent for all visiting aircraft. |

---

## 3. Threat & Error Management (TEM)

### 3.1 CFIT / Terrain 🟩
Manchester sits at 257 ft AMSL on the flat Cheshire/Greater Manchester plain. **There is no significant close-in high terrain** relevant to arrival, departure or missed-approach paths — this is a low, flat field, and CFIT is not the field's operative threat. Verify the MSA ring on the current chart as routine practice, but do not expect a terrain-driven brief item here the way a hot-and-high or valley field would require.

### 3.2 Airborne conflict / traffic 🟧
EGCC operates **two parallel runways in segregated mode**: "Runway 1" (05L/23R) is the primary, CAT III-equipped pair; "Runway 2" (05R/23L) is a secondary CAT I pair brought into **dual/segregated operation** (one runway landing, the other departing) during defined daytime windows, reverting to **single-runway operation on 05L/23R** outside those windows and, per planning-permission restriction, **Runway 2 is not used for take-off or landing between 22:00 and 06:00** except aircraft in emergency, when Runway 1 is unsafe/under maintenance, or on pilot request for departure performance/technical reasons `[Manchester Airport ASI-8 §1.1–1.2]`. This produces a real dependent-runway/segregated-mode workload signature quite different from a simple independent-parallel field — confirm the current configuration (dual vs single) via ATIS before planning taxi/runway assignment. Cross-ref [Europe airspace general brief](../../../../airspace/europe.md) — **no dedicated UK/London FIR (EGTT) brief exists in this library**; that Europe file's primary scope is continental Europe, not a UK-specific FIR document — flagged as a library gap in §18.

### 3.3 Runway excursion 🟧
Both runway pairs carry **displaced landing thresholds**: 05L displaced 427 m, 23R displaced 183 m, 23L displaced 186 m — each materially shortens the usable LDA versus the full runway length (see §7); brief the correct LDA, not the full physical length. RWY 23L also carries a **150 × 30 m starter extension** with reduced-strength shoulder pavement (PCN 42/R/C/W/T inner shoulders) — a pavement-strength/geometry nuance rather than a distance-usability problem for our types. No braking-action/contamination-specific figure was found this pass — treat wet/contaminated braking distance per standard performance policy, especially in the region's frequent frontal rain.

### 3.4 Weather threat 🟧
Manchester's maritime climate, driven by Atlantic frontal systems tracking in off the Irish Sea, brings year-round wind/rain and a recognised risk of **low cloud, stratus and radiation fog**, particularly in the cooler months — the direct reason the primary runway pair (05L/23R) carries CAT III approach infrastructure at both ends. Low Visibility Procedures (LVP) are formally defined in three graduated states — **LVP Alert** (safeguarding, triggered as IRVR/ceiling trend down), **LVP Cloud** (IRVR ≥600 m with cloud ceiling ≤200 ft, permitted only on 23-DUAL/23R-single/05L-single), and **LVP Vis** (IRVR ≤600 m with cloud ≤200 ft, permitted only on 23R-single or 05L-single — i.e. **Runway 1 only**), with a further **Block-to-Block** sub-state at IRVR ≤200 m restricting the manoeuvring area to one aircraft/vehicle per block `[Manchester Airport ASI-15 §1.1]`. **Runway 2 (05R/23L) is never used for landing in any LVP state**, and during LVP Vis the field reverts entirely to single-runway operation on 05L/23R; movement rate under LVP typically falls to around 24/hour. See §14/§15 for the live weather/NOTAM pull.

### 3.5 Operational considerations 🟥
Plan around four durable constraints: (1) **PPR at all times** — a filed flight plan does not itself authorise the movement; (2) **IATA Level 3 slot coordination** via Airport Coordination Ltd (ACL) — schedule integrity has real network consequences; (3) the **Quota Count (QC) night-noise regime** — QC8/QC16-rated aircraft are banned 23:00–06:59 and QC4-rated aircraft may not be scheduled to depart 23:30–05:59, with the airfield operations duty manager typically prohibiting a flight that has not pushed back at least 30 minutes before the 23:00 curfew `[Manchester Airport ASI-8 §2]`; and (4) the **segregated dual/single runway mode** — confirm current configuration before planning taxi and runway assignment. RFF, fuel and handling infrastructure are all first-tier; the open items in §18 are mostly currency/administrative confirmations (exact SID/STAR AIRAC suffixes, 23L localiser ident, current-season QC/movement caps) rather than fresh safety-critical gaps.

---

## 4. Cautions & Warnings

- **False Localiser Capture may be experienced when approaching RWY 23R from the North and South** — a published AIP caution; brief and cross-check raw data during the approach. 🟥
- **B777, A340-600 and A380 are PROHIBITED from Taxiway Lima** — a hard, sharp gotcha for our Code E/F types; do not plan a Lima routing for these types. 🟥
- **Runway 2 (05R/23L) is never used for landing under any LVP state** — do not expect it as a low-vis arrival option; the field reverts to single-runway ops on 05L/23R (Runway 1) instead. 🟥
- **All flights are PPR at all times** — filing a flight plan is not permission to use the aerodrome; confirm slot/PPR status before planning. 🟥
- Taxiway November-Charlie has **painted centreline only** and is used at peak movement rates — requires a Follow-Me service in darkness or LVP `[Manchester Airport ASI-15 §2.4.2(g)]`.
- Several taxiways are wingspan-restricted to ≤36 m (November-Alpha/Bravo Blue/Orange, Zulu-Blue/Orange, Lima south of Stand 6, Juliet-Echo, Juliet-Foxtrot, Golf east of Stand 55) — do not route a Code E/F aircraft onto these.
- **AN-124 requires wing-tip escort vehicles** on the north side of RWY 05L/23R — a ground-handling-specific item, included for completeness though not typically a K Global type.
- Wide-span (>36 m / Code D/E/F) arrivals scheduled 0300–0800 local should plan for arrival at SIBT — early arrivals may see extended air/ground holding due to aerodrome capacity works.

---

## 5. Aerodrome category, restrictions & crew qualification

- **Special-airport / category:** Not operator-categorised as a restricted-crew "special airport"; the standing crew-briefing items are the **False Localiser Capture caution on RWY 23R**, the **segregated dual/single runway mode**, and the **LVP environment on Runway 1**. 🟧
- **Crew-qualification gate:** CAT II/III currency required for full-capability low-vis arrivals on 05L/23R; confirm crew/aircraft currency before planning a winter low-vis rotation. 🟧
- **Operating restrictions / bans:** No RNP AR ban or circling restriction found in reachable sources — verify current AIRAC; the QC8/QC16 night-movement ban and QC4 night-scheduling ban (§6/§12) are the field's defining operating restrictions. 🟧
- **Overflight / entry / permits:** 🟥 **All flights subject to PPR at all times** — a filed flight plan does not itself constitute permission to use the aerodrome. Slot/PPR requests go to **Airport Coordination Ltd (ACL)** in office hours and **Airfield Operations** out of hours. **IATA Level 3 slot-coordinated** — ACL is the coordinator; scheduling detail is governed by ACL's published **Local Rule 1**, treated here as a mechanism reference — exact current content is a subscription/coordinator document and not reproduced. 🟧
- **Operations notes:** ANSP/aerodrome ATC — NATS on the field (Manchester Radar/Director/Delivery/Ground/Tower); airport operator — Manchester Airports Group (MAG).

---

## 6. General / hours / services

| Item | Value | Flag |
|---|---|---|
| ATS hours | Tower H24 (two positions); Ground/Delivery per published hours, with a night frequency handover — see §8 | 🟩 |
| AD operating hours | H24 (24 hours a day, 365 days a year) — subject to PPR at all times | 🟥 |
| Night / curfew restrictions | **Quota Count (QC) regime**: QC8/QC16 banned 23:00–06:59; QC4 scheduling ban 23:30–05:59; night movements 23:30–05:59 capped at ≤7% of total annual movements against a published seasonal cap (exact current-season figure pull-at-planning); seasonal **QC points budget** — 7,000 (summer) / 3,000 (winter) `[Manchester Airport ASI-8 §2; Noise Action Plan 2024-2028]` | 🟥 |
| RFF category | **CAT 10 / A10** | 🟩 |
| Fuel | AVTUR Jet A-1 (no anti-icing additive); hydrants at all pier stands; no over-wing fuelling; H24 | 🟩 |
| PCN | 05L/23R PCN 94/F/C/W/T (non-grooved); 05R/23L PCN 79/F/C/W/T (grooved); 23L starter-extension inner shoulders PCN 42/R/C/W/T | 🟩 |
| Customs | H24 (customs/immigration and Port Health) | 🟩 |
| Handling / FBO | Mandatory nominated handling agent for all visiting aircraft — Signature Flight Support, Menzies, Swissport, dnata, Star Handling, DHL, Jet2, Weston Aviation, T25 | 🟩 |

---

## 7. Runways & declared distances

| RWY | Dimensions | Surface / PCN | TORA | TODA | ASDA | LDA | Notes |
|---|---|---|---|---|---|---|---|
| 05L | 3,048 × 45 m | Concrete/asphalt, non-grooved / PCN 94/F/C/W/T | 3,014 m | 3,229 m | 3,014 m | **2,587 m** | Landing threshold displaced 427 m; ILS CAT III; THR elev 211.8 ft, TDZ 225.5 ft |
| 23R | 3,048 × 45 m | Concrete/asphalt, non-grooved / PCN 94/F/C/W/T | 2,897 m | 3,197 m | 2,897 m | **2,714 m** | Landing threshold displaced 183 m; ILS CAT III; False Localiser Capture caution N/S 🟥; THR elev 249.1 ft |
| 05R | 3,050 × 45 m | Concrete/asphalt, grooved / PCN 79/F/C/W/T | 3,047 m | 3,347 m | 3,047 m | 2,864 m | ILS CAT I; THR elev 186.3 ft |
| 23L | 3,050 × 45 m (+150 m starter extension) | Concrete/asphalt, grooved / PCN 79/F/C/W/T (extension shoulders PCN 42/R/C/W/T) | 3,200 m | 3,500 m | 3,200 m | 2,864 m | Landing threshold displaced 186 m; ILS CAT I (ident not independently confirmed 🟧); THR elev 227.0 ft; full-length via Taxiway T |

*Intersection-departure distances are also published for planning awareness (full-length is our default): 05L — Alpha Golf 2,771/2,987/2,771 m, Alpha Foxtrot 2,433/2,648/2,433 m, Bravo 2,037/2,252/2,037 m; 23R — Mike 2,567/2,867/2,567 m, Hotel 2,120/2,420/2,120 m; 23L — Victor Delta 2,202/2,502/2,202 m, Victor Alpha 3,121/3,421/3,121 m, Victor Bravo 2,954/3,254/2,954 m, Uniform 2,848/3,148/2,848 m, Victor Charlie 2,504/2,804/2,504 m.*

*A turning circle at the NE end of Runway 1 (abeam Link Juliet) accommodates aircraft up to A380. Runway 2 has one turning circle 1,820 m from the 23L threshold, usable only up to **B767** — a real constraint for a larger Code E/F type needing to turn around near that point. Slope: 05L 0.49% up / 23R 0.49% down. All distances in metres.*

---

## 8. Communications

| Service | Callsign | Frequency | Hours | Notes |
|---|---|---|---|---|
| ATIS (Arrival) | Manchester ATIS | 113.550 (on MCT VOR) / 128.180 | H24 | |
| ATIS (Departure) | Manchester ATIS | 121.980 | H24 | |
| Delivery | Manchester Delivery | 121.705 | 0630–2200 (0530–2100 winter) | Outside these hours, Ground takes delivery calls on 121.705 |
| Ground | Manchester Ground | 121.855 | 0630–2200 (0530–2100 winter) | |
| Ground (night) | Manchester Ground | 121.705 | 2200–0630 (2100–0530 winter) | Departing aircraft call Delivery/Ground on 121.705 as appropriate at night |
| Tower | Manchester Tower | 118.630 (AIR North) / 119.405 (AIR South) | H24 | Two tower positions — AIR North in charge of runway selection |
| Approach | Manchester Radar | 118.580 (South) / 135.005 (North, as directed) | H24 | DOC 40 NM / 15,000 ft |
| Director | Manchester Director | 121.355 | As directed by ATC | Final-approach sequencing position |
| Fire (non-ATS) | Manchester Fire | 121.600 | Only when a fire vehicle is attending an emergency | Not a routine ATS frequency |
| Centre / FIR | London FIR (EGTT) — no dedicated UK FIR brief in this library | Per current AIRAC | H24 | See [Europe airspace general brief](../../../../airspace/europe.md) — gap flagged §18 |

*Source: task-supplied UK AIP AD 2 EGCC extract, cross-checked against a network-sim (IVAO) frequency/position reference for the field — treat exact current frequencies as 🟧 pending a live-AIRAC cross-check, though the overall structure is stable.*

---

## 9. Navaids

| Aid | Ident | Freq | Hours | Notes |
|---|---|---|---|---|
| VOR/DME | MCT (Manchester) | 113.550 | H24 | Mag var 0.46° E (2027) |
| VOR/DME | TNT (Trent) | 115.700 | H24 | Mag var 0.69° E (2027); ~SE off-field |
| ILS/LOC | IMM | 109.500 | H24 | Serves RWY 05L; CAT III |
| ILS/LOC | INN | 109.500 | H24 | Serves RWY 23R; CAT III; False Localiser Capture caution N/S 🟥 |
| ILS/LOC | IMC | 111.550 | H24 | Serves RWY 05R; CAT I |
| ILS/LOC | Not published / verify | — | — | Serves RWY 23L; CAT I per AIP declared-distance context, but the discrete localiser ident was **not independently confirmed** this pass — Airside Standing Instruction language (traffic reverting to "the 05R CAT 1 ILS" when visibility deteriorates) suggests 23L may not be the field's routine precision-approach runway; verify against a current chart. 🟧 |

---

## 10. Arrival

- **Transition altitude / level:** TA 5,000 ft; TL by QNH — verify current chart. 🟧
- **Speed:** Standard 250 KIAS below FL100 (UK/ICAO norm) — confirm no local override on current chart.
- **Preferential runway logic:** **Westerly operation (23-config) is preferred at all times**, subject to: a headwind component; tailwind not exceeding 5 kt on either runway or at 2,000 ft; crosswind not exceeding 15 kt; ILS serviceable and in use; approach lights serviceable and in use. In **dual/segregated operation**, the standard configuration is **Westerly: 23R arrivals / 23L departures**; **Easterly: 05R arrivals / 05L departures**. Outside the promulgated dual-runway window (§6/§12), operations revert to **single-runway on 05L/23R** `[Manchester Airport ASI-8 §1.1–1.2]`.
- **Approaches (names only — verify minima on current AIRAC charts):**

| RWY | Approach | IAF | FAF/FAP alt | Notes |
|---|---|---|---|---|
| 05L | ILS CAT III (IMM) | Not published / verify 🟧 | Not published / verify 🟧 | Primary low-vis arrival runway; single-runway default |
| 23R | ILS CAT III (INN) | Not published / verify 🟧 | Not published / verify 🟧 | False Localiser Capture caution N/S 🟥; primary westerly arrival runway |
| 05R | ILS CAT I (IMC) | Not published / verify 🟧 | Not published / verify 🟧 | Easterly dual-ops arrival runway |
| 23L | ILS CAT I (ident tbc) 🟧 | Not published / verify 🟧 | Not published / verify 🟧 | Westerly dual-ops departure runway — **not typically an arrival runway**; not used for landing in any LVP state |

- **STARs (names only — verify current AIRAC):** **ROSUN, DAYNE, MIRSI** (holding stacks/release points) and **DALEY** — all four are named as Continuous-Descent-Approach-mandated STARs in Manchester's own noise procedure `[Manchester Airport ASI-8 §5, citing AIC 51/2006]`. DAYNE serves arrivals from the South and East, ROSUN from the North and East, MIRSI from the West.
- **LVP:** Three graduated states — **LVP Alert** (safeguarding), **LVP Cloud** (IRVR ≥600 m, cloud ceiling ≤200 ft — permitted on 23-DUAL/23R-single/05L-single), **LVP Vis** (IRVR ≤600 m, cloud ≤200 ft — permitted only on 23R-single or 05L-single, i.e. Runway 1 only), with a Block-to-Block sub-state at IRVR ≤200 m `[Manchester Airport ASI-15 §1.1]`. Movement rate falls to roughly 24/hour under LVP. Runway 2 (05R/23L) is **never** used for landing in any LVP state.
- **Missed approach watch-items:** Terrain is not the driver (flat field) — the operative missed-approach concern is re-sequencing into a segregated dual-runway or single-runway environment depending on the active configuration; visual approaches are not permitted 2300–0700 local under normal circumstances for jet aircraft (radar positioning to at least 7 NM final).

---

## 11. Departure

- **SIDs (names only — fly the charted version):** **SANBA** (jet-only southbound noise-abatement departure, formerly HONILEY) and **LISTO** (propeller/light-jet ≤35,000 kg MTOW, BAe146/E135-145/CRJ/Global Express/Gulfstream-series southbound noise-abatement departure, formerly LIS72) are Manchester's two dedicated southbound noise routes. Westbound-grouped departures include **ASMIM, EKLAD, KUXEM** (and **MONTY**, formerly NOK/WAL); eastbound-grouped departures include **DESIG** (formerly DESY), **POLE HILL (POL)** and **SONEX**. Verify exact current-AIRAC SID suffix (e.g. 1R/1Y/2R) and routing on the chart. 🟧
- **RNP / climb-gradient requirements:** Not independently confirmed this pass — verify RNP/gradient designation per SID on the current chart. See [`OM E — PBN and RNP Operations`](../../../../../flight-ops/pbn-and-rnp-operations.md).
- **Take-off minima:** Published per AIP — exact figures not confirmed this pass. 🟧
- **Start-up / push-back:** Confirm cross-bleed/APU notification procedure locally; multiple taxiways are wingspan-restricted (§13) and push-back routing should account for this.
- **ATC slot / CTOT & clearance:** **All flights PPR at all times**; **IATA Level 3 slot-coordinated** (ACL is the coordinator; scheduling detail per ACL's Local Rule 1); EUROCONTROL Network Manager ATFM/CTOT regulation applies as standard practice for a congested, slot-coordinated UK hub. 🟧
- **De-icing:** H24, contacts Swissport / Menzies / Aero Mag 2000 MAN Ltd. See [`OM E — Cold Weather Operations`](../../../../../flight-ops/cold-weather-operations.md).

---

## 12. Noise & Environmental

- **Noise abatement (NAP):** Departing aircraft fly Noise Preferential Routes (NPRs) — eight off each end of Runway 1 (four each) used for westerly departures and six (three each) for easterly departures — until reaching a published release altitude, monitored against a 95% on-track target `[Manchester Airport Noise Action Plan 2024-2028; ASI-8 §4]`. **Westerly operation is preferred whenever safe** (Runway 1 westerly/southbound noise routing takes priority over easterly).
- **Night noise / dB limits:** Governed by the **Quota Count (QC) system** — QC8/QC16-rated aircraft banned 23:00–06:59; QC4-rated aircraft may not be scheduled to depart 23:30–05:59; seasonal QC points budget **7,000 (summer) / 3,000 (winter)**, applied over the core night period 23:30–06:00; night movements (23:30–05:59) capped at ≤7% of total annual movements against a published seasonal cap — treat the exact current-season cap figure as pull-at-planning 🟧. Departure noise penalties apply above **90 dB(A)** (07:00–22:59), **82 dB(A)** (23:00–23:29 and 06:00–06:59) and **81 dB(A)** (23:30–05:59), measured at 6.5 km from start of roll `[Manchester Airport ASI-8 §2–3]`.
- **Engine run-up restrictions:** Engine testing above idle/ground-idle power is confined to a purpose-built test bay and separately governed by its own standing instruction — not confirmed in detail this pass. 🟧
- **Reverse thrust / idle-reverse policy:** Pilots are asked to avoid using reverse thrust after landing where practicable to limit ground noise disturbance to nearby residents `[Manchester Airport Noise Action Plan 2024-2028]`.

---

## 13. Ground operations

- **Stands for our types:** Widebody/Code E stand detail is covered in the Dispatch page (§3); see [Dispatch](dispatch.md). 🟧
- **Push-back:** Confirm mandatory-vs-self-manoeuvre policy locally; several stand/taxiway zones carry wingspan or type restrictions (below).
- **Standard taxi routes:** Confirm with Ground/Apron on the day; expect routing sensitive to the active runway configuration (dual vs single) and to the wingspan-restricted taxiways below.
- **Hot spots / tight taxiways:** 🟥 **Taxiway November-Charlie** has painted centreline only, is used at peak movement rates, and requires a Follow-Me service in darkness or LVP `[Manchester Airport ASI-15 §2.4.2(g)]`. Several taxiways are restricted to **≤36 m wingspan** — November-Alpha Blue/Orange, November-Bravo Blue/Orange, Zulu-Blue/Orange, Lima south of Stand 6, Juliet-Echo, Juliet-Foxtrot, Golf east of Stand 55 — do not route a Code E/F aircraft onto these. A380 taxi routes are separately charted, with a **reduced centreline-to-object clearance of 49 m** along Taxiways Alpha and Juliet (between J1–J4). **B777, A340-600 and A380 are PROHIBITED from Taxiway Lima** 🟥 — a sharp, real constraint for our Code E/F types. Long-wheelbase types (B777-300, A350-1000 class) should be cautioned on taxiway curves/intersections for main-gear-to-pavement-edge clearance. Vehicular apron roadways run close behind Code E taxi lanes (34–38.5 m, closest alongside Taxiways J, L, R) with several give-way roadway crossings. AN-124 requires wing-tip escort vehicles on the north side of RWY 05L/23R. Under LVP, additional taxiway routing restrictions apply — see §10.
- **Follow-me:** Available; specifically provided during LVP Vis for Light Aircraft TATON, the GA Apron (Signature Flight Support), Taxiways November-Bravo and Quebec, and the November-Charlie to Romeo radius, among other zones, plus any temporarily diverted taxiway centreline without lighting `[Manchester Airport ASI-15 §2.4.2(g)]`.
- **Wide-span/heavy-aircraft note:** Operators of aircraft with wingspan >36 m (Code D/E/F) arriving 0300–0800 local are advised to plan for arrival at scheduled in-blocks time (SIBT) — early arrivals may see extended air/ground holding due to aerodrome capacity works.

---

## 14. Weather & seasonal (durable)

- **Climate / prevailing wind:** Maritime NW-England climate; prevailing wind south-westerly, consistent with westerly (23-config) being the airport's preferred operational orientation whenever safe to use.
- **Seasonal hazards:** Atlantic frontal systems tracking in off the Irish Sea bring year-round wind and rain; **low cloud, stratus and radiation fog** are a recognised seasonal issue (autumn/winter), the direct reason the main runway pair carries CAT III infrastructure at both ends. No EGCC-specific fog-frequency statistic was found this pass — treat as general regional climatology pending a dedicated MET source. 🟧
- **Local effects:** No notable terrain/sea-breeze local effect at this flat inland-plain field; standard frontal-passage wind/gust and low-cloud risk are the operative local factors.

> **Live weather — pull at planning (T-2h):** METAR, TAF, TREND, SIGMET/AIRMET. Not stored here.

---

## 15. NOTAMs

> **Pull at planning (T-2h).** Perishable — not stored here. Check: runway/taxiway closures (esp. Runway 2/segregated-mode status), navaid U/S (esp. the 23L ILS), lighting, obstacle/crane, RFF downgrade, LVP status, GPS/RAIM for RNP procedures. Source: official AIS / OFP NOTAM block.

---

## 16. Fuel & alternate planning notes

- **Typical role for us:** **Destination** (not a base) — see [Dispatch §1](dispatch.md).
- **Nearest suitable alternates:** Company preferred alternates <../EGBB — Birmingham/EGBB — Briefing.md>, <../EGLL — Heathrow/EGLL — Briefing.md>, <../EGKK — Gatwick/EGKK — Briefing.md> `[VAMSYS mirror 2026-07-26]` — confirm suitability, runway/RFF adequacy and current minima per leg.
- **Fuel-uplift notes:** AVTUR Jet A-1 (no anti-icing additive), hydrants at all pier stands, no over-wing fuelling, H24. See [`OM E — Fuel Policy`](../../../../../flight-ops/fuel-policy.md).
- **Range/perf flags for our fleet:** Field length/strength non-limiting for any K Global type on either runway pair. See [`OM B — Fleet Capability Matrix`](../../../../../fleet/capability-matrix.md) for type-by-type range/performance reference.

---

## 17. Fleet-specific notes (optional)

- No field-elevation or field-length performance penalty for any K Global type at EGCC. The operative planning considerations are the **B777/A340-600/A380 prohibition on Taxiway Lima** (a real Code E/F ground-routing constraint) and the **segregated dual/single-runway mode and PPR/slot regime** rather than aircraft performance. See [`OM B — Fleet Capability Matrix`](../../../../../fleet/capability-matrix.md).

---

## 18. Open items (🟧 — confirm against AIP / current AIRAC)

- **23L ILS localiser identifier** — not independently confirmed this pass; Airside Standing Instruction language suggests 23L may not be the field's routine precision-approach runway (traffic reverts to "the 05R CAT 1 ILS" in poor visibility) — verify against a current AIP table.
- **SID/STAR exact current-AIRAC designators/suffixes** (e.g. SANBA/LISTO/ASMIM/EKLAD/KUXEM/MONTY/DESIG/POLE HILL/SONEX SIDs; ROSUN/DAYNE/MIRSI/DALEY STARs) — names sourced to Manchester Airport's own noise/runway-data publications and a network-sim (IVAO) reference; pull the live current-AIRAC procedure list before use.
- **Segregated dual-runway operating-hour windows** — the Airside Standing Instruction (ASI-8) text itself flags an internal query against the published AIP times; confirm the current-cycle window against a live AIRAC.
- **Current-season QC points budget usage and night-movement cap figures** — mechanism (QC8/QC16 ban, QC4 scheduling ban, seasonal QC budget) is durable; exact current-season numeric caps should be pulled at planning.
- **ACL Local Rule 1** — scheduling/coordination mechanism cited; exact current content is a subscription/coordinator document, not reproduced here.
- **Take-off minima, RNP/climb-gradient detail per SID, LVTO RVR minima, IAF/FAF names and altitudes per approach** — none confirmed from a primary table this pass.
- **No dedicated UK/London FIR (EGTT) brief exists in this library** — the linked [Europe airspace general brief](../../../../airspace/europe.md) is scoped to continental Europe, not specifically the UK FIR; this is a library gap, not an EGCC-specific one.
- **EGCC-specific fog/low-cloud frequency statistic** — general regional climatology assumed; no field-specific figure found.

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim material (current-AIRAC charts) informs content but is not listed here. See Sources for the tier hierarchy.*

- **UK AIP (NATS AIS), AD 2 EGCC**, AIRAC cycle effective 2026-03-19 — https://www.aurora.nats.co.uk/htmlAIP/Publications/2026-03-19-AIRAC/html/eAIP/EG-AD-2.EGCC-en-GB.html (retrieved 2026-07-26). *ARP, runways/declared distances, PCN, RFF, ATZ/CTR, ATS hours/frequencies, navaids, PPR/slot status.*
- Manchester Airport — Airside Standing Instruction 8, "Aircraft Noise" (EGCC-I-AOPS-008, issue 2024-08-01) — https://assets.live.dxp.maginfrastructure.com/f/73114/x/0ff030296a/asi-8-aircraft-noise.pdf (retrieved 2026-07-26). *Preferential-runway criteria, dual/single-runway configuration and hours, QC night-noise regime, noise penalty thresholds, NPR track-adherence, CDA-mandated STARs.*
- Manchester Airport — Airside Standing Instruction 15, "Low Visibility Procedures" (issue 2023-04-01) — https://assets.live.dxp.maginfrastructure.com/f/73114/x/44b8f0b603/asi-15-low-visibility-procedures.pdf (retrieved 2026-07-26). *LVP Alert/Cloud/Vis/Block-to-Block definitions, runway-specific LVP availability, CAT II/III holding points, taxiway LVP restrictions, Follow-Me provision.*
- Manchester Airport — Noise Action Plan Summary 2024-2028 — https://assets.live.dxp.maginfrastructure.com/f/73114/x/9fc958e22b/9119_mag_noise_action_plan_man_1920x1080_summary_v3.pdf (retrieved 2026-07-26). *QC system table, seasonal QC budget, night-noise policy detail, noise-preferential-route programme.*
- Manchester Airport — Runway Data Sheet (community information) — https://assets.live.dxp.maginfrastructure.com/f/73114/x/639c2972b3/man-runway-data-sheet-2023.pdf (retrieved 2026-07-26). *Westerly/easterly operation split, PNR names and release altitudes, holding-stack names (DAYNE/MIRSI/ROSUN).*
- IVAO XU Documentation Library — "Manchester (EGCC)" local procedures — https://wiki.ivao.aero/en/home/divisions/xu/atc/aerodrome/local-procedure/manchester/egcc (retrieved 2026-07-26). *Network-sim reference, not regulatory — frequency/position structure, terminal/stand-to-airline mapping, SID separation grouping, cross-checked against operator sources above.*
- Wikipedia — "Manchester Airport" — https://en.wikipedia.org/wiki/Manchester_Airport (retrieved 2026-07-26). *Runway dimensions/history corroboration, terminal programme (Terminal 1 closure, Terminal 2 expansion) corroboration.*
- OurAirports — https://ourairports.com/airports/EGCC/ (retrieved 2026-07-26). *ARP/elevation cross-check.*

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-26 | Built from UK AIP (NATS AIS); K Global fields from live VAMSYS; 4-page pack. |
