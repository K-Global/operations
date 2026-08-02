# LIMC — Malpensa · Airport Briefing

**LIMC / MXP** · Ferno / Somma Lombardo, Varese, Lombardy, Italy · Europe
**Version** v0.1 · **Updated** 2026-07-26 · **Status** Draft

> **Read-me:** Planning aid for the sim, not a chart. Static data is drawn from the airport operator's public technical data sheet plus standard public aeronautical/network-sim cross-checks — the ENAV eAIP portal did not return readable content to a direct fetch this pass (JavaScript-gated); approaches/SIDs/STARs are listed **by name only** — fly the charted current-AIRAC version. Live weather/NOTAMs are pulled at planning (§14/§15). Open 🟧 items are listed in §18. Flag legend 🟥 restriction/hazard · 🟧 caution/unverified · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| ARP (lat/long) | 45°37′48″N / 008°43′23″E (45.63000, 8.72306) `[SEA Corporate technical data]` — 🟧 a crowd-sourced cross-check (OurAirports) gives 45.630600, 8.728110, ~0.4 km east of this figure; treated as a minor discrepancy, operator figure preferred |
| Field elevation | **768 ft / 234 m AMSL** (reference temperature 27.9°C) `[SEA Corporate technical data]` |
| Mag variation | 🟧 **1° E** per an operator data sheet carrying a **2007.12** epoch, with a stated annual change of ~6′ E; current-day value not independently re-confirmed against current AIRAC — a secular-drift estimate would put it close to 3° E, but that is **not a sourced figure** |
| Time zone | UTC+1 (CET) / UTC+2 (CEST, EU DST observed) |
| Runway(s) | **17R/35L** 3,920 × 60 m (asphalt, PCN 100/F/A/W/T) · **17L/35R** 3,920 × 60 m (asphalt, PCN 91/F/A/W/T) — two full-length, widely-spaced **independent parallel runways** |
| Preferential runway | Wind/noise/time-of-day dependent; the 35L/35R pair alternates roles on a published noise-sharing schedule, **35L is the preferential runway for Code F landings**; overnight (2330–0630 LT) traffic concentrates on the 17R/35L runway only — see §10/§11/§12 |
| Longest LDA | 3,920 m (17R, 35R — full-length, no displacement) |
| Approaches | **ILS on 17L (CAT I only, per reachable chart index), ILS CAT II/III on 35L and 35R; RWY 17R has no published ILS — RNP (RNAV) only** 🟧 — a real asymmetry between the two ends of the field, see §3.2/§10 |
| RFF category | **CAT 9 ICAO** `[SEA Corporate technical data]` 🟩 |
| Control type | **Radar** — Milano Radar/Milano APP (sectorised) approach; **Milano ACC (LIMM)** en route — see airspace note below |
| Elevation class | Near sea-level (768 ft) — **not** hot-and-high; the defining performance/reliability driver is **Po Valley winter radiation fog**, not density altitude |
| Special-airport status | Not operator-categorised as restricted; standing crew-briefing items are the **independent/segregated parallel-runway geometry**, the **asymmetric CAT II/III capability** (south config only), and **winter fog** — see §5 |
| Customs / PoE | **Yes** — Terminal 1 international halls; major-hub H24 expectation 🟧 (exact desk hours not confirmed) |
| K Global category | **L** `[VAMSYS mirror 2026-07-26]` |
| K Global base | **No** `[VAMSYS mirror 2026-07-26]` |
| Company preferred alternates | [**LIRF**](../lirf/index.md) (Fiumicino), [**LIPE**](../lipe/index.md) (Bologna Borgo Panigale), [**LIPZ**](../lipz/index.md) (Venice Tessera) `[VAMSYS mirror 2026-07-26]` |
| Taxi-in / taxi-out (VAMSYS) | **14 min / 18 min** `[VAMSYS mirror 2026-07-26]` 🟧 in/out order as mirrored — not independently reconfirmed |

> **Airspace note:** LIMC sits in **Milano ACC (LIMM)** airspace. 🟧 **No dedicated Milano FIR brief exists yet in this tree** — the only European FIR page currently built is [Langen (EDGG)](../../../../airspace/fir/europe/langen-edgg.md). Until a Milano ACC brief is built, refer to [**Airspace — General — Europe**](../../../../airspace/europe.md) for regional context.

---

## 2. Validation summary

| Domain | Flag | Note |
|---|---|---|
| Terrain / CFIT | 🟩 | Flat Po Valley/Ticino Valley site; Alpine foothills lie roughly 20–25 NM N/NW — a factor for some western departure/arrival transitions at altitude, not for the immediate field. |
| Runway length vs fleet perf | 🟩 | Both 3,920 m runways are ample for any K Global widebody; displaced thresholds on 17L (LDA 2,977 m) and 35L (LDA 3,515 m) remain non-limiting for typical arrival weights. |
| Approach availability / minima | 🟧 | CAT II/III exists only on the 35L/35R (south) config; 17L is CAT-I-ILS only and **17R has no ILS at all** — a real config-dependent minima gap, not independently confirmed against a primary AIP table. |
| Airspace / traffic / control | 🟥 | Dense Milano TMA shared with Linate and Bergamo-Orio al Serio; independent-parallel-runway geometry plus sectorised Milano Radar drives sustained workload — see §3.2. |
| Weather / seasonal hazard | 🟥 | Po Valley winter **radiation/advection fog** (Oct–Mar, worst 04:00–09:00 local) is the field's defining hazard, routinely to CAT-II-restricted visibility and occasionally lower. |
| Curfew / slots / hours | 🟧 | Airport operates **H24** with **no confirmed hard blanket curfew**; however an overnight (2330–0630 LT) single-runway/reduced-capacity noise regime is reported — not independently AIP-confirmed, see §6/§12. |
| RFF category vs our types | 🟩 | CAT 9 — adequate for any K Global type. |
| Fuel availability | 🟧 | Jet A-1 assumed available H24 as a major hub; specific into-plane supplier/hours not confirmed in reachable public sources. |
| Customs / handling / security | 🟧 | T1 international PoE confirmed; exact desk hours, current handling agent, and stand/gate specifics not fully confirmed. |

---

## 3. Threat & Error Management (TEM)

### 3.1 CFIT / Terrain 🟩
LIMC sits at 768 ft AMSL on the flat floor of the Po/Ticino valley — there is **no close-in high terrain** relevant to a standard arrival, departure or missed-approach path. The Alps' southern foothills rise roughly 20–25 NM to the north and northwest, and several published RNAV transitions (e.g. routes toward AOSTA, TOP/Torino, VOG/Voghera fixes) operate in that general direction at higher altitude — verify the MSA ring and any terrain-driven step-down on the current chart for those routes, but CFIT is not the operative near-field threat here.

### 3.2 Airborne conflict / traffic 🟥
Malpensa runs **two full-length, widely-separated parallel runways (17R/35L and 17L/35R)** operated historically in a **segregated/independent** style — one runway typically dedicated to arrivals and the other to departures rather than continuous mixed-mode use on both. This sits inside a dense **Milano TMA** shared with Milano Linate and Bergamo-Orio al Serio, worked by a sectorised **Milano Radar/Milano APP** (multiple named sectors) under **Milano ACC (LIMM)** en route. The combination of independent-parallel geometry, a published day/night runway-role alternation scheme (§12), and heavy long-haul/cargo/low-cost mixed traffic drives sustained controller/crew workload, particularly around config changes. 🟧 No dedicated Milano ACC (LIMM) FIR brief exists yet in this tree — see the airspace note in §1; refer to [Airspace — General — Europe](../../../../airspace/europe.md) in the interim.

### 3.3 Runway excursion 🟧
Both parallel runways carry a **displaced threshold** at one end: **17L's threshold is displaced roughly 941 m** (published LDA 2,977 m against a 3,920 m TORA) and **35L's threshold is displaced roughly 400 m** (published LDA 3,515 m). Neither displacement is limiting for a normal K Global arrival weight, but the two runways are **not symmetric** — do not assume the same LDA applies at both ends of either physical runway. The airport operator's own reference-code figure (Annex 14 code **4E**, max wingspan 65 m) is inconsistent with Malpensa's known history of Code F (A380-class) wide-body operations and a published Code-F-specific taxi-restriction chart — treat the operator's reference-code figure as **possibly stale** and verify current AIP code letter before assuming full Code F ground compatibility. See §13.

### 3.4 Weather threat 🟥
The **Po Valley is prone to persistent winter radiation and advection fog**, typically **October through March** and most severe in the early morning (roughly 04:00–09:00 local) — this is the field's signature hazard and the direct reason CAT II/III infrastructure exists on the south-config runways (35L/35R). Visibility here routinely drops to CAT-II-restricted levels and can occasionally go lower. During low-visibility procedures the field is reported to run a **segregated LVP configuration** — RWY 35R dedicated to take-offs, RWY 35L dedicated to landings — rather than mixed use of either parallel. Winter also brings a recognised de-icing season. See §14.

### 3.5 Operational considerations 🟥
Plan around four durable constraints: (1) the **asymmetric approach capability** — CAT II/III exists only on the south (35L/35R) runways, while the north-facing 17-config offers CAT-I ILS on 17L only and **no ILS at all on 17R** (RNP/RNAV only) — a wind-driven config change ahead of a fog event can materially change what minima are achievable; (2) the **independent/segregated parallel-runway operating style**, including a published overnight (2330–0630 LT) reduced-capacity single-runway regime and a recurring daytime role-alternation scheme between 35L/35R for community noise-sharing (§12); (3) the **reference-code/Code-F ambiguity** noted in §3.3; and (4) **winter Po Valley fog** as the standing seasonal reliability driver. RFF is first-tier and non-limiting; most §18 open items are currency/administrative confirmations against a primary AIP rather than safety-critical unknowns, but the approach-capability asymmetry in particular should be verified before relying on it operationally.

---

## 4. Cautions & Warnings

- **RWY 17R has no published ILS** — approach-capable only via RNP (RNAV); do not expect an ILS on this runway end under any configuration.
- **CAT II/III capability exists only on 35L/35R** (south config) — a config change toward 17L/17R ahead of a fog event can leave only CAT-I (17L) or no-ILS (17R) capability available.
- **Independent/segregated parallel-runway operation** — the two runways are typically assigned distinct arrival/departure roles rather than run in continuous mixed mode; during LVP, expect **35R for departures / 35L for landings** specifically.
- **Overnight (2330–0630 LT) single-runway/reduced-capacity regime** reported (preferential departure RWY 17R / arrival RWY 35L) — not independently AIP-confirmed; treat as a scheduling caution pending verification.
- **35L/35R roles alternate on a published day/time noise-sharing schedule** — do not assume a fixed departure/arrival runway assignment without checking ATIS/current config.
- **Displaced thresholds differ between 17L (~941 m) and 35L (~400 m)** — verify the correct LDA for the assigned runway before treating either as full-length.
- **Reference-code (4E) vs. known Code F (A380-class) operations** — a real inconsistency in the operator's own published data; verify current AIP code letter and any Code-F taxi restriction before planning ground movement for a large wide-body.
- **Winter Po Valley fog** can put the field below CAT I minima with little warning, most often in the early morning — check current LVP status before planning.

---

## 5. Aerodrome category, restrictions & crew qualification

- **Special-airport / category:** Not operator-categorised as a restricted-crew "special airport" in reachable sources; the standing crew-briefing items are the **independent/segregated parallel-runway geometry**, the **CAT II/III-south-only approach asymmetry**, and **winter fog**. 🟧
- **Crew-qualification gate:** CAT II/III currency required for full-capability low-vis arrivals on 35L/35R; no CAT II/III capability exists on the 17-config — confirm crew/aircraft currency and expect a config-dependent capability ceiling. 🟧
- **Operating restrictions / bans:** No RNP AR ban or circling restriction found in reachable sources; verify current AIRAC. The reported overnight single-runway regime and daytime 35L/35R role-alternation scheme are operating-pattern restrictions, not outright bans — see §6/§12. 🟧
- **Overflight / entry / permits:** Standard EU/Schengen and non-Schengen international arrival; no special state permit required. 🟩
- **Operations notes:** ANSP — **ENAV S.p.A.** (SAAV Malpensa; Milano Radar approach; Milano ACC en route); Airport operator — **SEA S.p.A.** (Società Esercizi Aeroportuali, "Milan Airports").

---

## 6. General / hours / services

| Item | Value | Flag |
|---|---|---|
| ATS hours | H24 (operator-stated) | 🟩 |
| AD operating hours | **H24** — airport is not curfew-closed | 🟩 |
| Night / curfew restrictions | No confirmed hard blanket curfew; **overnight (2330–0630 LT) preferential/reduced-capacity single-runway regime** reported (dep RWY 17R / arr RWY 35L) — not independently AIP-confirmed. A 1999 press proposal for a full midnight–0500 ban was reported historically; current implementation status is **unconfirmed** and should not be relied on operationally. | 🟥 |
| RFF category | **CAT 9 ICAO** | 🟩 |
| Fuel | Jet A-1 assumed available H24 (major hub); specific into-plane supplier/hours not confirmed | 🟧 |
| PCN | Runway-specific — see §7; taxiway/apron PCN not confirmed in reachable sources | 🟧 |
| Customs | T1 international halls; exact desk hours not confirmed | 🟧 |
| Handling / FBO | SEA S.p.A. (airport authority) plus third-party ground handlers — specific handler for our operation not confirmed | 🟧 |

---

## 7. Runways & declared distances

| RWY | Dimensions | Surface / PCN | TORA | TODA | ASDA | LDA | Notes |
|---|---|---|---|---|---|---|---|
| 17R | 3,920 × 60 m | Asphalt / PCN 100/F/A/W/T | 3,920 m | 4,120 m | 3,920 m | 3,920 m | Full length; published intersection take-off "EW/EM": TORA 3,005 m / TODA 3,205 m / ASDA 3,005 m |
| 35L | 3,920 × 60 m | Asphalt / PCN 100/F/A/W/T (same physical runway as 17R) | 3,920 m | 4,120 m | 3,920 m | 3,515 m | Threshold displaced ≈400 m; **preferential runway for Code F landings**; intersection take-off "WB": 3,515/3,715/3,515 m; intersection "F/FE": 2,550/2,750/2,550 m |
| 17L | 3,920 × 60 m | Asphalt / PCN 91/F/A/W/T | 3,920 m | 4,040 m | 3,920 m | 2,977 m | Threshold displaced ≈941 m; intersection take-off "AB": 2,970/3,090/2,970 m |
| 35R | 3,920 × 60 m | Asphalt / PCN 91/F/A/W/T (same physical runway as 17L) | 3,920 m | 4,080 m | 3,920 m | 3,920 m | Full length |

*Source: SEA S.p.A. (airport operator) technical data sheet (retrieved 2026-07-26), cross-checked against OurAirports' independently-reported displaced-threshold distances (941 ft→m and 400 m, matching within rounding). 🟧 Not independently re-confirmed against a current-AIRAC AIP table — treat exact figures as needing a live cross-check. All distances in metres.*

---

## 8. Communications

| Service | Callsign | Frequency | Hours | Notes |
|---|---|---|---|---|
| ATIS | Malpensa ATIS | 120.025 (arrival) / 121.650 (departure) | H24 (assumed) | 🟧 dual arr/dep ATIS reported; not independently AIP-confirmed |
| Delivery | Malpensa Delivery | 120.900 | H24 (assumed) | |
| Ground | Malpensa Ground West / Ground North | 121.900 (west) / 121.825 (north) | H24 (assumed) | Two ground sectors |
| Tower | Malpensa Tower / Malpensa East Tower | 128.350 / 123.600 | H24 (assumed) | 🟧 runway-dependent tower position reported; an older (c. 2011) cross-check instead gives 119.000 for 17L/35R and 128.350 for 17R/35L — treat as superseded pending AIRAC confirmation |
| Approach | Milano Radar (sectorised) | 126.750 / 134.175 / 125.630 | H24 (assumed) | Named NE/NW/SW-style sectors reported; take the assigned sector |
| Centre / FIR | Milano ACC (LIMM) — upper Milano Radar sector 135.455 reported | Per current AIRAC | H24 | 🟧 No dedicated Milano ACC FIR brief exists in this tree yet — see [Airspace — General — Europe](../../../../airspace/europe.md) |

*Source: IVAO Italy Division QuickOverview (network-sim operational cross-check, current AIRAC cycle referenced by the source as 2604), cross-checked against OurAirports and a 2011-vintage spotter-guide frequency list — treat exact current frequencies as 🟧 pending a live-AIRAC cross-check, though the overall delivery/ground/tower/approach structure is stable. Network-sim source, not regulatory.*

---

## 9. Navaids

| Aid | Ident | Freq | Hours | Notes |
|---|---|---|---|---|
| VOR/DME | MAL | 111.20 MHz | H24 (assumed) | Malpensa VOR-DME, on-field, ≈0.8 NM NNE of the field reference point |
| NDB | MAL | 364 kHz | H24 (assumed) | ≈5.2 NM SSE of the field |
| VOR/DME | SRN | 113.70 MHz | H24 (assumed) | Saronno VOR-DME, ≈12.4 NM E; associated with the SRN-named SID/STAR fixes |
| ILS 17L | Not published / verify | Not published / verify | H24 (assumed) | **CAT I only** — no CAT II/III chart found for this runway end 🟧 |
| ILS 35L | Not published / verify | Not published / verify | H24 (assumed) | CAT II/III capable per chart index 🟧 — ident/frequency not confirmed in reachable sources |
| ILS 35R | Not published / verify | Not published / verify | H24 (assumed) | CAT II/III capable per chart index 🟧 — ident/frequency not confirmed in reachable sources |
| RWY 17R | — | — | — | **No ILS published** — RNP (RNAV) approaches only 🟧 |

*Source: OurAirports (navaid idents/frequencies/distances, retrieved 2026-07-26); Navigraph LIMC chart-name index (retrieved 2026-07-26, chart titles only — no minima/frequency content extracted, consistent with the "names only" governance rule).*

---

## 10. Arrival

- **Transition altitude / level:** TA reported as **6,000 ft MSL**, with TL varying by QNH band per a network-sim reference table — not independently AIP-confirmed; verify current chart. 🟧
- **Speed:** Standard 250 KIAS below FL100 (EU/ICAO norm) — confirm no local override on current chart.
- **Preferential runway logic:** Independent/segregated parallel operation; the 35L/35R pair alternates arrival/departure roles on a published noise-sharing schedule (§12), with **35L preferential for Code F landings**. Overnight (2330–0630 LT), traffic is reported to concentrate with **RWY 35L preferential for arrivals**. During LVP, arrivals are segregated onto **RWY 35L**.
- **Approaches (names only — verify minima on current AIRAC charts):**

| RWY | Approach | Notes |
|---|---|---|
| 17L | ILS / LOC, RNP, VOR | CAT I only — no CAT II/III chart found |
| 17R | RNP only | **No ILS or VOR published** for this runway end |
| 35L | ILS / LOC, RNP, VOR | **CAT II/III capable** |
| 35R | ILS / LOC, RNP, VOR | **CAT II/III capable** |

- **STARs (names only — verify current AIRAC):** RNAV arrivals reported under fix/procedure names **ASTIG, DEVOX, EGFOL, EVRIP, MEBUR, ODINA, PEXUG, RIXUV, SRN**, plus combined-name variants **LEGLO** and **ULCOR**, each with multiple runway/configuration suffix variants — pull the current-AIRAC STAR list at planning. 🟧
- **LVP:** Trigger is Po Valley winter radiation fog (Oct–Mar, worst 04:00–09:00 local). Reported LVP configuration is **segregated**: RWY 35R for departures, RWY 35L for arrivals — exact RVR/trigger figures not confirmed this pass. 🟧
- **Missed approach watch-items:** Terrain is not the driver (flat valley floor); the operative concern is re-sequencing into a dense, sectorised Milano TMA shared with Linate and Orio al Serio traffic.

---

## 11. Departure

- **SIDs (names only — fly the charted version):** RNAV departures reported under fix/procedure names **FARAK, IBCUC, IRKED, NELAB, DOGUB, MMP, SRN, TELVA**, each with multiple suffix/runway variants, plus non-RNAV/omnidirectional departure charts for RWY 35L/35R — pull the current-AIRAC SID list at planning. 🟧
- **RNP / climb-gradient requirements:** Multiple RNAV (RNP-1-style) SIDs exist per runway; verify RNP/gradient equipage per SID on the current chart. See [`OM E — PBN and RNP Operations`](../../../../../flight-ops/pbn-and-rnp-operations.md).
- **Take-off minima:** Published per AIP/chart index (a dedicated "take-off minima" chart is indexed); exact figures not confirmed this pass. 🟧
- **Start-up / push-back:** Procedure detail not confirmed in reachable sources — confirm cross-bleed/APU notification and push-back policy locally. 🟧
- **ATC slot / CTOT & clearance:** Slot-coordination level not confirmed in reachable sources for this major hub — verify current status; EUROCONTROL Network Manager ATFM/CTOT regulation should be expected as standard practice for a busy Milano-area field. 🟧
- **De-icing:** Confirmed **on-stand de-icing equipment at Malpensa Cargo City**; main passenger-apron de-icing pad locations/procedure are not confirmed in reachable sources — season typically **Nov–Mar** given Po Valley winter climate. See [`OM E — Cold Weather Operations`](../../../../../flight-ops/cold-weather-operations.md). 🟧

---

## 12. Noise & Environmental

- **Noise abatement (NAP):** The operator publishes a preferential-runway/noise-sharing regime: ATC assigns the active runway with a stated tail-wind limit (10 kt maximum, wet/dry-modified on the historically-cross-referenced Linate rule), and the **35L/35R pair alternates departure/arrival roles on a rotating day/time-of-day schedule** intended to share overflight noise between the communities on either side of the runway pair. Exact current tables are an operator publication, not transcribed here in full — confirm current version before relying on it for scheduling.
- **Night noise / dB limits:** No published per-movement dB limit found; the operative night mechanism is the **overnight (2330–0630 LT) single-runway/reduced-capacity regime** rather than a hard curfew — see §6. 🟥
- **Engine run-up restrictions:** Not confirmed in reachable sources — verify locally. 🟧
- **Reverse thrust / idle-reverse policy:** Not confirmed in reachable sources — verify locally. 🟧

---

## 13. Ground operations

- **Stands for our types:** Operator data reports **≈139 aircraft stands / 93 gates** airport-wide (T1 + T2 + cargo combined) — this figure appears in the same data sheet carrying the dated (2007–2012-era) mag-var/reference-code figures and is **not independently re-confirmed as current**. 🟧 | 🟧
- **Reference code / Code F:** Operator data states Annex 14 reference code **4E** (max wingspan 65 m) — this is **inconsistent** with Malpensa's known history of Code F (A380-class) wide-body operations and a separately-published Code-F-specific taxi-restriction chart. Treat the 4E figure as possibly stale; confirm current AIP reference code and any Code-F stand/taxiway restriction before planning a large wide-body movement. 🟧
- **Push-back:** Mandatory-vs-self-manoeuvre policy for Code E/F stands not confirmed. 🟧
- **Standard taxi routes:** Confirm with Ground/Apron on the day; dedicated **"Taxi Routes RWY 35L/R"** and **"Low-Vis Taxi Routes"** charts are indexed (names only — pull current AIRAC).
- **Hot spots / tight taxiways:** Not individually named in reachable public sources; the existence of a dedicated Code-F taxi-restriction chart and a separate low-vis taxi-routing chart both signal recognised ground-movement complexity — pull the current chart for exact hot-spot identifiers. 🟧
- **Cargo apron:** **Malpensa Cargo City** (southern part of the field) — ≈20 dedicated freighter parking stands, hydrant fuel system, 400 Hz ground power, on-stand de-icing equipment; a reconfiguration program adds 6 new MARS (Multiple Apron Ramp System) stands in PIPO (Power-In/Push-Out) configuration able to take two Boeing 747-8F simultaneously. Italy's busiest cargo gateway by tonnage.
- **Follow-me:** Availability not confirmed in reachable source — verify locally. 🟧

---

## 14. Weather & seasonal (durable)

- **Climate / prevailing wind:** Temperate continental Po Valley climate; humid, with the valley's characteristic tendency to trap cold, moist air near the surface in winter.
- **Seasonal hazards:** **Po Valley winter radiation/advection fog** (typically **October–March**, most severe roughly **04:00–09:00 local**) is the field's defining hazard, routinely reducing visibility to CAT-II-restricted levels and occasionally lower — this is the direct operational reason for CAT II/III infrastructure on the south-config runways. A recognised **de-icing season** (typ. Nov–Mar) accompanies the same winter period.
- **Local effects:** The immediate field is flat valley floor with no notable terrain-wind effect; the Alps' foothills roughly 20–25 NM N/NW may be a factor for some higher-altitude western routings — not quantified in reachable sources. 🟧

> **Live weather — pull at planning (T-2h):** METAR, TAF, TREND, SIGMET/AIRMET. Not stored here.

---

## 15. NOTAMs

> **Pull at planning (T-2h).** Perishable — not stored here. Check: runway/taxiway closures (both parallels have published routine lighting-inspection and periodic ILS-ground-check closure windows — confirm current schedule via NOTAM rather than this durable file), navaid U/S, CAT II/III equipment status, lighting, obstacle/crane, RFF downgrade, GPS/RAIM for RNP procedures, current Milano TMA/RAD constraints. Source: official AIS / OFP NOTAM block.

---

## 16. Fuel & alternate planning notes

- **Typical role for us:** **Destination / potential alternate** in the network — not a K Global base `[VAMSYS mirror 2026-07-26]`.
- **Nearest suitable alternates:** Company preferred alternates [**LIRF**](../lirf/index.md) (Fiumicino), [**LIPE**](../lipe/index.md) (Bologna Borgo Panigale), [**LIPZ**](../lipz/index.md) (Venice Tessera) `[VAMSYS mirror 2026-07-26]` — confirm suitability, runway/RFF adequacy and current minima per leg; note LIRF is a considerably longer diversion than the two northern-Italy alternates.
- **Fuel-uplift notes:** Jet A-1 assumed available H24 as a major hub; specific into-plane provider/hours not confirmed. 🟧 Cargo City confirmed to have its own hydrant fuel system. See [`OM E — Fuel Policy`](../../../../../flight-ops/fuel-policy.md).
- **Range/perf flags for our fleet:** Field length/strength non-limiting for any K Global type on either runway pair (3,920 m). See [`OM B — Fleet Capability Matrix`](../../../../../fleet/capability-matrix.md) for type-by-type range/performance reference.

---

## 17. Fleet-specific notes (optional)

- No field-length or field-elevation performance penalty is expected for any K Global type at LIMC. The operative fleet-relevant consideration is the **reference-code/Code-F ambiguity** (§13) — confirm current stand/taxiway suitability for the largest K Global wide-body types before planning a first-time widebody rotation here. See [`OM B — Fleet Capability Matrix`](../../../../../fleet/capability-matrix.md).

---

## 18. Open items (🟧 — confirm against AIP / current AIRAC)

- **ARP coordinates** — minor (~0.4 km) discrepancy between the operator figure used here and an independent crowd-sourced cross-check; not resolved against a primary AIP.
- **Magnetic variation** — sourced to a 2007.12-epoch operator figure; current-day value not independently re-confirmed; secular-drift estimate (~3° E) is not a sourced figure.
- **Declared distances / PCN table** — operator-sourced; not independently re-verified against a current-AIRAC AIP table.
- **ILS idents/frequencies** — not confirmed in reachable sources for 17L, 35L or 35R; CAT II/III sub-category confirmed only via chart-name index, not a primary minima table.
- **ATC frequencies** — sourced to a network-sim (IVAO) current-AIRAC-referenced cross-check plus an older (c. 2011) spotter-guide list showing a partial discrepancy on tower frequency assignment; not independently AIP-verified.
- **SIDs/STARs (current names)** — chart-name index obtained, but full current-AIRAC list and RNP/gradient specifics not independently confirmed.
- **Overnight single-runway regime and 35L/35R noise-alternation schedule** — sourced to network-sim ops notes and the operator's technical-data page; not confirmed against a primary AIP as currently in force.
- **Historical 1999 midnight–0500 curfew proposal** — current implementation status unconfirmed; do not rely on it operationally.
- **Slot-coordination level (IATA Level)** — not confirmed for this major hub.
- **Reference code (4E vs. known Code F ops)** — apparent inconsistency in the operator's own data; current AIP reference code not independently confirmed.
- **Total stand/gate count (~139/93)** — appears in a data sheet carrying other dated (2007–2012-era) figures; not confirmed as current.
- **Take-off minima, start-up/push-back procedure, engine run-up restriction, reverse-thrust/idle-reverse policy, follow-me availability, push-back mandatory-vs-self-manoeuvre policy** — none confirmed in reachable sources.
- **Fuel supplier(s) and into-plane hours (passenger apron)** — assumed H24 major-hub availability, not individually confirmed.
- **Customs/immigration desk hours** — not confirmed; assumed major-hub coverage.
- **EUROCONTROL CTOT/ATFM specifics for LIMC** — general practice assumed for a busy Milano-area hub, not independently LIMC-sourced.
- **No dedicated Milano ACC (LIMM) FIR brief exists yet in this tree** — interim reference is [Airspace — General — Europe](../../../../airspace/europe.md).

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim material (current-AIRAC charts) informs content but is not listed here.*

- SEA S.p.A. ("Milan Airports") — "Technical data" (Milano Malpensa data sheet) — https://milanairports.com/en/group/technical-data (retrieved 2026-07-26). *ARP, elevation, mag-var, RFF category, runway/PCN/declared distances, preferential-runway and noise-alternation regulations, reference code. Some fields appear to carry a 2007–2012-era vintage — flagged for AIRAC cross-check throughout.*
- OurAirports — https://ourairports.com/airports/LIMC/ , /runways.html , /frequencies.html , /closest-navaids.html (retrieved 2026-07-26). *ARP cross-check, displaced-threshold distances, navaid idents/frequencies.*
- IVAO Italy Division — QuickOverview LIMC — https://quickoverview.ivao.it/aerodrome/show/LIMC (retrieved 2026-07-26; current AIRAC cycle referenced by the source as 2604). *Network-sim operational cross-check: preferential/segregated runway logic, LVP runway assignment, TA/TL, SID/STAR fix structure, ATC frequencies. Network-sim document, not regulatory — corroboration only.*
- Navigraph — LIMC Airport Charts index — https://navigraph.com/airport/LIMC/Milan-Malpensa (retrieved 2026-07-26). *Chart-name index only — confirms SID/STAR/approach names, CAT II/III chart existence per runway, Code-F taxi-restriction and low-vis taxi-routing chart names. No minima/procedure content extracted.*
- scramble.nl — "Milano - Malpensa" airfield guide — https://www.scramble.nl/planning/airfield-guide/italy/milano-malpensa (retrieved 2026-07-26; page content dated "last validated May 2011"). *Historical runway-role/frequency cross-check — superseded where it conflicts with the current IVAO ops notes; flagged.*
- Milano Malpensa Cargo — "Cargo City" — https://www.milanomalpensacargo.com/en/cargo-city (retrieved 2026-07-26). *Cargo apron stand count, fuel/power/de-icing provisioning, MARS reconfiguration program.*
- Sleeping in Airports — Milan Malpensa Airport Guide — https://www.sleepinginairports.net/guides/milan-malpensa-airport-guide.htm (retrieved 2026-07-26; page states last updated 2026-01-15). *Terminal/concourse structure, T1/T2 airside separation, inter-terminal shuttle.*
- FlightGlobal — "Malpensa set for night flight ban" (1999) — https://www.flightglobal.com/archive/1999/06/malpensa-set-for-night-flight-ban/ (retrieved 2026-07-26). *Historical curfew-proposal context; current status unconfirmed.*

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-26 | Built from AIP Italia (ENAV); K Global fields from live VAMSYS; 4-page pack. |
