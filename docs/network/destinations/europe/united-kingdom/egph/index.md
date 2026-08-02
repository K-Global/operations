# EGPH — Edinburgh · Airport Briefing

**EGPH / EDI** · Edinburgh (Ingliston), Lothian, Scotland, United Kingdom · Europe
**Version** v0.1 · **Updated** 2026-07-26 · **Status** Draft

> **Read-me:** Planning aid for the sim, not a chart. Static data is drawn from the UK NATS eAIP (AIP United Kingdom, AD 2 EGPH); approaches/SIDs/STARs are listed **by name only or flagged not-yet-confirmed** — fly the charted current-AIRAC version. Live weather/NOTAMs are pulled at planning (§14/§15). Open 🟧 items are listed in §18. Flag legend 🟥 restriction/hazard · 🟧 caution/unverified · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| ARP (lat/long) | 55°57′00″N 003°22′21″W — centre of RWY 06/24 `[AIP AD 2 EGPH 2.2]` |
| Field elevation | **136 ft AMSL** (geoid undulation 173 ft; reference temperature 16°C) |
| Mag variation | **1.21° W** (2022 epoch), annual change **0.22° E** 🟧 drift-adjusted estimate for 2026 ≈ 0.3° W — **not a sourced AIP figure**, apply the published epoch value and confirm on the current chart |
| Time zone | UTC+0 (GMT) / UTC+1 (BST, UK Summer Time observed) |
| Runway(s) | Single runway **06/24**, 2,556 × 46 m, asphalt, grooved, PCN 68/R/B/W/T — both thresholds inset 213 m; paved shoulders extend 8 m beyond each runway edge |
| Preferential runway | Wind-driven — **no crosswind alternative on the field**. General east-of-Scotland climatology tends to favour a westerly/south-westerly airflow, which would put RWY 24 into wind more often than RWY 06 — no published runway-utilisation split found; treat as inference, not a sourced split 🟧 |
| Longest LDA | 2,347 m (RWY 24) |
| Approaches | **ILS CAT III both runway ends** (IVG on 06, ITH on 24); no RNP/other approach type confirmed in reachable AIP extract 🟧 |
| RFF category | **A9** |
| Control type | **Radar** — Edinburgh Approach/Radar; field-level Tower/Ground/Delivery on the field |
| Elevation class | Near sea-level (136 ft) — **not** hot-and-high; no density-altitude driver |
| Special-airport status | 🟥 **All flights except GA/military require prior CEO (EAL) approval AND prior notification to Airport Coordination Ltd (ACL)**; a **handling agent is mandatory for every flight** (commercial, GA, cargo, military, helicopter) due to **limited parking space** — see §5 |
| Customs / PoE | **Yes** — Customs & Immigration H24 |
| K Global category | **S** `[VAMSYS mirror 2026-07-26]` |
| K Global base | **No** `[VAMSYS mirror 2026-07-26]` |
| Company preferred alternates | **EGPF, EGCC, EGLL** `[VAMSYS mirror 2026-07-26]` |
| Taxi-in / taxi-out (VAMSYS) | **12 min / 14 min** `[VAMSYS mirror 2026-07-26]` |

---

## 2. Validation summary

| Domain | Flag | Note |
|---|---|---|
| Terrain / CFIT | 🟧 | Lowland coastal field; the Pentland Hills rise to the south (up to ~579 m at Scald Law), roughly 10–15 km from the ARP — a distant feature, not independently cross-checked against the current MSA/obstacle chart. See §3.1. |
| Runway length vs fleet perf | 🟧 | 2,556 m single runway with both thresholds inset 213 m (LDA 2,344–2,347 m) is ample for narrowbody/regional types but may be a real weight-limiting factor for a Code E widebody at high takeoff/landing weight — check OM B Fleet Capability Matrix per type. |
| Approach availability / minima | 🟩 | ILS CAT III published on both runway ends — the deepest low-vis capability available; sub-category (IIIA/IIIB) not confirmed from a primary table this pass 🟧. |
| Airspace / traffic / control | 🟧 | Radar-controlled Class D CTR (10 NM, SFC–6,000 ft) and ATZ; field sits in **Scottish FIR (EGPX)** — **no dedicated Scottish FIR brief exists yet in this network** (only a Langen (EDGG) FIR brief has been built, for Germany) — see §18. |
| Weather / seasonal hazard | 🟧 | East-coast Scotland is prone to **haar** (coastal advection sea fog), a well-documented regional phenomenon not itself quantified in the reachable AIP extract; winter icing/snow is the other seasonal item — see §14. |
| Curfew / slots / hours | 🟥 | **No hard movement curfew found** in reachable sources, but a **hard rule bans all visual approaches for IFR aircraft between 2230–0630 (2130–0530)** — every IFR arrival in that window must fly the ILS under ATC control. This is the field's operative night constraint, distinct from a curfew — see §12. |
| RFF category vs our types | 🟩 | RFF Category A9 — above any of our fleet's requirement. |
| Fuel availability | 🟧 | AVTUR Jet A-1 (no anti-icing additive) available 0530–2300 (0430–2200 UTC) via Pentland Aviation / Signature Flight Support; outside these hours only by prior arrangement with the handling agent. |
| Customs / handling / security | 🟥 | Customs & Immigration H24 confirmed, but a **handling agent is mandatory for every flight** and **"stand availability is extremely limited, particularly at night and for large wide-bodied aircraft"** (AIP, direct operator statement) — a real constraint on K Global widebody scheduling. See §5/§13. |

---

## 3. Threat & Error Management (TEM)

### 3.1 CFIT / Terrain 🟧
EGPH sits at a modest 136 ft AMSL on the Lothian coastal plain west of Edinburgh. The **Pentland Hills** rise to the south of the field (highest point Scald Law, ~579 m/1,900 ft), roughly 10–15 km from the ARP — a real but distant feature, not itself a close-in CFIT hazard for a normal arrival/departure/missed-approach path. This bearing/distance has **not been independently cross-checked against the current MSA ring or obstacle chart** for this build — read the MSA sectors on the current chart as routine practice before relying on it operationally.

### 3.2 Airborne conflict / traffic 🟧
EGPH is radar-controlled under **Edinburgh Approach/Radar**, with an Edinburgh **CTR** (Class D, 10 NM radius, SFC–6,000 ft) and an **ATZ** (2.5 NM radius on RWY 06/24, SFC–2,000 ft). The field sits inside **Scottish FIR (EGPX)** — **no dedicated Scottish (EGPX) FIR brief has yet been built in this network**; the only FIR brief built so far is Langen (EDGG), for Germany. This is a genuine network gap, not an oversight specific to this brief — see §18. For regional context pending a dedicated EGPX build, see the [Europe area brief](../../../../airspace/europe.md). Separately, the AIP records a **large bird population around the aerodrome**, with **active deterrent use (shell crackers)** — a real, sourced wildlife-strike threat that belongs in the same airborne-conflict picture as traffic density; brief an elevated bird-strike watch on departure/arrival, especially at low level. 🟥

### 3.3 Runway excursion 🟧
**Single runway 06/24** (2,556 × 46 m, asphalt, grooved, PCN 68/R/B/W/T), with **no crosswind alternative on the field** — a crosswind limit is a real go/no-go item here, not a theoretical one. **Both thresholds are inset/displaced 213 m** from the physical runway ends; this is why the **landing distance available (LDA) on each runway direction — 2,344 m on RWY 06, 2,347 m on RWY 24 — is measurably less than the take-off run/TORA figures** (2,556 m and 2,553 m respectively). This is a standard displaced-threshold effect, not a surface defect or a runway-usability restriction — see §7 for the full declared-distance table, including the shorter intersection take-off distances published from Holding Point Bravo1 (RWY 06) and Charlie1 (RWY 24).

### 3.4 Weather threat 🟧
East-coast Scotland is prone to **haar** — a coastal advection sea fog rolling in off the North Sea/Firth of Forth, a well-documented regional climatological feature — though no EGPH-specific frequency statistic was found in the reachable AIP extract; treat as general regional climatology pending a live METAR/TAF pattern review. Scottish winters bring a standard **icing/snow season** — see [`OM E — Cold Weather Operations`](../../../../../flight-ops/cold-weather-operations.md). See also §14.

### 3.5 Operational considerations 🟥
Plan around several durable constraints unique to this field: (1) **every flight except GA and military requires prior approval of the CEO of Edinburgh Airport Ltd (EAL) and prior notification to Airport Coordination Ltd (ACL)**, the airport's slot coordinator — ad-hoc requests go to ACL (Mon–Fri 0830–1700/0730–1600) or an online coordination portal; (2) a **handling agent is mandatory for all flights** (commercial, GA, cargo, military, helicopter) — PPR with the handling agent is required specifically **due to limited parking space**; (3) the AIP states directly that **"stand availability is extremely limited, particularly at night and for large wide-bodied aircraft"** — a sourced operational constraint that bears directly on any K Global widebody rotation through this field, especially an overnight one (see §13/§17); (4) **CAT II/III operations are authorised on both RWY 06 and RWY 24**, subject to serviceability and ATC low-vis procedures; (5) **datalink departure clearance (DCL)** is available (ARINC 623-2/Eurocae ED 85-A compliant) — winter EOBT-25 min, summer EOBT-22 to -25 min depending on time of day; (6) **Code E/F aircraft must vacate the runway at the runway end** (via TWY A1 or D1) unless escorted by a follow-me vehicle; and (7) the **large bird population** noted in §3.2 with active shell-cracker deterrents in use.

---

## 4. Cautions & Warnings

- **Single runway, no crosswind alternative** — a crosswind limit here is a genuine operational constraint, not theoretical; check the wind component against type limits before committing.
- **Both thresholds inset 213 m** — LDA (2,344–2,347 m) is meaningfully shorter than TORA/full runway length on each direction; never assume full-length landing distance.
- **"Stand availability is extremely limited, particularly at night and for large wide-bodied aircraft"** — a direct, sourced AIP statement; confirm stand assignment before planning any widebody rotation, especially an overnight one.
- **Handling agent mandatory for every flight, with PPR required due to limited parking space** — do not plan an ad-hoc movement without confirmed handling and ACL notification.
- **All IFR visual approaches are prohibited 2230–0630 (2130–0530)** — every arrival in that window must fly the ILS under ATC control, regardless of actual visibility.
- **Large bird population with active deterrent (shell crackers) in use** — brief an elevated bird-strike watch, particularly at low level.
- **Code E/F aircraft must vacate at the runway end (via A1 or D1) unless escorted by a follow-me vehicle.**
- Mag variation is sourced to a 2022 epoch and the runway/comms/navaid data below to a 2020-10-08 AIRAC cycle — several years old; treat exact current figures as 🟧 pending a live-AIRAC cross-check (§18).

---

## 5. Aerodrome category, restrictions & crew qualification

- **Special-airport / category:** Not operator-categorised as a restricted-crew "special airport" beyond the standing CTR-regulation regime below. 🟧
- **Crew-qualification gate:** CAT II/III currency required to use the full published low-visibility capability on either runway end. 🟧
- **Operating restrictions / bans:** 🟥 **All flights except GA and military require prior approval of the EAL CEO and prior notification to Airport Coordination Ltd (ACL)**, the slot coordinator. A **handling agent is mandatory for ALL flights** (commercial, GA, cargo, military, helicopter) — **PPR with the handling agent is required due to limited parking space**. **Code E/F aircraft must vacate the runway at the runway end** (TWY A1 or D1) unless escorted by a follow-me vehicle. No RNP AR ban or circling restriction found in reachable sources — verify current AIRAC. 🟧
- **Overflight / entry / permits:** Standard UK international arrival; no special state permit required beyond the CEO/ACL approval above. 🟩
- **Operations notes:** ATC service provided on the field; airport operator — **Edinburgh Airport Ltd (EAL)**; slot coordinator — **Airport Coordination Ltd (ACL)**. Fuelling/handling providers named in the AIP — Pentland Aviation and Signature Flight Support (bowser) for fuel.

---

## 6. General / hours / services

| Item | Value | Flag |
|---|---|---|
| ATS hours | H24 | 🟩 |
| AD operating hours | AD Administration H24; AIS Briefing Office H24 (self-briefing, Terminal Building H24, Business Aviation Centre H24) | 🟩 |
| Night / curfew restrictions | No hard movement curfew found 🟧; **hard rule — no visual approaches for IFR aircraft 2230–0630 (2130–0530), ILS required** | 🟥 |
| RFF category | **A9** | 🟩 |
| Fuel | AVTUR Jet A-1 (no anti-icing additive); Pentland Aviation / Signature Flight Support (bowser); 0530–2300 (0430–2200 UTC), outside hours by prior arrangement with handling agent | 🟧 |
| PCN | 68/R/B/W/T | 🟩 |
| Customs | H24 | 🟩 |
| Handling / FBO | **Mandatory for all flights** — PPR required due to limited parking space; named fuel providers Pentland Aviation / Signature Flight Support; specific contracted ground handler for our operation not confirmed | 🟥 |

---

## 7. Runways & declared distances

| RWY | Dimensions | Surface / PCN | TORA | TODA | ASDA | LDA | Notes |
|---|---|---|---|---|---|---|---|
| 06 | 2,556 × 46 m | Asphalt, grooved / PCN 68/R/B/W/T | 2,556 m | 2,616 m | 2,616 m | 2,344 m | THR elevation 110 ft; threshold inset 213 m — see excursion note below |
| 24 | 2,556 × 46 m | Asphalt, grooved / PCN 68/R/B/W/T | 2,553 m | 3,002 m | 2,614 m | 2,347 m | THR elevation 100 ft; threshold inset 213 m |

**Intersection take-offs (published):**

| From holding point | Runway | TORA | TODA | ASDA |
|---|---|---|---|---|
| Bravo1 | 06 | 1,889 m | 1,950 m | 1,950 m |
| Charlie1 | 24 | 1,889 m | 2,336 m | 1,950 m |

*Both thresholds are inset/displaced 213 m from the physical runway ends — this is why LDA (2,344 m / 2,347 m) is measurably shorter than TORA on each direction; a standard displaced-threshold effect, not a surface or usability defect. Paved shoulders extend 8 m beyond each runway edge. Source: UK NATS eAIP, AD 2 EGPH, AIRAC effective 2020-10-08 — this cycle is several years old; core runway geometry is unlikely to have changed absent a published works NOTAM, but treat exact current-cycle figures as needing a live-AIRAC cross-check. All distances in metres.*

---

## 8. Communications

| Service | Callsign | Frequency | Hours | Notes |
|---|---|---|---|---|
| ATIS | Edinburgh Information | 131.355 | H24 | Also available by phone |
| Delivery | Edinburgh Delivery | 121.980 | Mon–Fri/Sat/Sun 0600–2200 (0500–2100 UTC) | Outside these hours, contact Tower 118.705 |
| Ground | Edinburgh Ground | 121.755 | Same hours as Delivery | |
| Tower | Edinburgh Tower | 118.705 | H24 | Standby 121.500 O/R |
| Approach / Radar | Edinburgh Approach / Edinburgh Radar | 121.205 (H24); also 128.980 (H24, as directed by ATC) | H24 | |
| Fire (non-ATS) | — | 121.600 | — | |
| Centre / FIR | Scottish FIR (EGPX) | Per current AIRAC | H24 | **No Scottish (EGPX) FIR brief exists yet in this network** — see the [Europe area brief](../../../../airspace/europe.md) for regional context pending a dedicated build; see §18 |

*Source: UK NATS eAIP, AD 2 EGPH, AIRAC effective 2020-10-08 — several years old; the tower/ground/delivery/approach structure itself is stable infrastructure, but treat exact current frequencies as 🟧 pending a live-AIRAC cross-check.*

---

## 9. Navaids

| Aid | Ident | Freq | Hours | Notes |
|---|---|---|---|---|
| ILS RWY 06 | IVG | 108.900 (LLZ) | H24 | **CAT III**; localiser not to be used below 3,000 ft AGL outside 17 NM 🟥; GP 329.300, 3° glidepath, RDH 54 ft, certified extended range to 15 NM (**not for use below 2,200 ft at that range**) 🟥 |
| ILS RWY 24 | ITH | 108.900 (LLZ) | H24 | **CAT III**; same 17 NM/3,000 ft localiser caveat 🟥; GP 329.300, RDH 50 ft, extended range to 15 NM (same sub-2,200 ft caveat) 🟥 |
| DME | IVG / ITH | Paired with respective ILS | H24 | Zero range at threshold |
| VOR/DME | GOW | 115.400 (CH101X) | H24 (assumed) | Sector R050–090 has an extended DOC; some low-level coverage reduction due to terrain |
| VOR/DME | TRN | 117.500 (CH122X) | H24 (assumed) | |
| NDB (locator) | EDN | 341.0 kHz | H24 (assumed) | Range 35 NM |
| NDB (locator) | UW | 368.0 kHz | H24 (assumed) | Range 25 NM |

*All idents/frequencies sourced to the UK NATS eAIP AD 2 EGPH, AIRAC effective 2020-10-08 — long-lived infrastructure, unlikely to have changed, but not independently re-confirmed against a current AIRAC. The localiser/glidepath range-vs-altitude restrictions above are direct AIP limits — brief them explicitly before flying an extended-range ILS capture.*

---

## 10. Arrival

- **Transition altitude / level:** TA 6,000 ft; TL by QNH — not independently confirmed this pass, verify current chart. 🟧
- **Speed:** Standard 250 KIAS below FL100 (UK/ICAO norm) — confirm no local override on current chart.
- **Preferential runway logic:** Wind-driven, no crosswind alternative; general climatology would favour RWY 24 more often, but no published utilisation split was found — treat as inference. 🟧
- **Approaches (names only — verify minima on current AIRAC charts):**

| RWY | Approach | Notes |
|---|---|---|
| 06 | ILS CAT III (IVG) | Localiser/GP range-altitude caveats apply — see §9 |
| 24 | ILS CAT III (ITH) | Localiser/GP range-altitude caveats apply — see §9 |

- **STARs (names only):** Not confirmed in reachable research pass — pull the current-AIRAC STAR list at planning. 🟧
- **LVP:** CAT II/III operations authorised on both RWY 06 and RWY 24 subject to serviceability and ATC low-vis procedures; exact RVR trigger figures not confirmed this pass. 🟧
- **Missed approach watch-items:** Terrain is not the primary driver (lowland coastal field); the Pentland Hills to the south (§3.1) have not been cross-checked against the current MAP/obstacle chart. The dominant night-time consideration is the **2230–0630 visual-approach ban** — every IFR arrival in that window flies the ILS regardless of actual visibility.

---

## 11. Departure

- **SIDs (names only — fly the charted version):** Not confirmed in reachable research pass — pull the current-AIRAC SID list at planning. 🟧 Named Noise Preferential Routes exist (Talla, St Abbs/Newcastle, GRICE, GOSAM) — see §12.
- **RNP / climb-gradient requirements:** Not confirmed in reachable sources this pass — verify equipage/gradient per SID on the current chart. See [`OM E — PBN and RNP Operations`](../../../../../flight-ops/pbn-and-rnp-operations.md).
- **Take-off minima:** Published per AIP — exact figures not confirmed this pass. 🟧
- **Start-up / push-back:** **Datalink departure clearance (DCL)** available (ARINC 623-2/Eurocae ED 85-A compliant) — winter all flights EOBT-25 min; summer EOBT-22 to -25 min depending on time of day.
- **ATC slot / CTOT & clearance:** Every flight (except GA/military) requires prior CEO/EAL approval and prior ACL notification (§5); ad-hoc slot requests to ACL Mon–Fri 0830–1700/0730–1600 or via the online coordination portal.
- **De-icing:** **Available H24** per AIP; see [`OM E — Cold Weather Operations`](../../../../../flight-ops/cold-weather-operations.md) for winter-season planning discipline.

---

## 12. Noise & Environmental

- **Noise abatement (NAP):** Named **Noise Preferential Routes (NPRs)** exist by departure runway/route — **Talla, St Abbs/Newcastle, GRICE, GOSAM** (names only; the detailed track/turn instructions are not transcribed here — fly the charted current-AIRAC version and follow ATC instruction). Visual approach limitations apply for aircraft >5,700 kg MTWA, with minimum DME/height gates specified by direction — not transcribed here, verify current chart.
- **Night noise / dB limits:** Noise limit **94 dBA Lmax by day** (0600–2330 / 0500–2230) and **87 dBA Lmax by night** (2330–0600 / 2230–0500), measured at three named monitoring terminals: **Houston Industrial Estate Livingston, Scottish Power Broxburn, Cramond Kirk Manse**. 🟥 **Between 2230–0630 (2130–0530) no visual approaches are permitted for IFR aircraft — all IFR aircraft must fly ILS approaches under ATC control.** No hard movement curfew was found in reachable sources beyond this rule — treat the visual-approach ban as the field's operative night constraint, distinct from a movement ban.
- **Engine run-up restrictions:** Not confirmed in reachable sources. 🟧
- **Reverse thrust / idle-reverse policy:** Reverse thrust/pitch use **discouraged 2300–0600 (2200–0500)** "for environmental reasons."
- Aircraft not meeting **ICAO Annex 16 Vol I Part II Ch 3** noise standards are **not permitted to operate to/from Edinburgh** (except military).

---

## 13. Ground operations

- **Stands for our types:** 🟥 The AIP states directly: **"stand availability is extremely limited, particularly at night and for large wide-bodied aircraft"** — confirm stand assignment with handling before committing to any widebody rotation through this field. Single terminal, gates split between direct access and a below-ground walkway link — see [Dispatch §2/§3](dispatch.md) for the commercial-side detail.
- **Push-back:** Mandatory-vs-self-manoeuvre policy by code letter not confirmed in reachable sources. 🟧
- **Standard taxi routes:** Not confirmed in reachable sources — confirm with Ground on the day. 🟧
- **Hot spots / tight taxiways:** None identified in the reachable AIP extract this pass. 🟧
- **Follow-me:** **Code E/F aircraft must vacate the runway at the runway end** (TWY A1 or D1) **unless escorted by a follow-me vehicle** — follow-me availability itself not otherwise confirmed. 🟧

---

## 14. Weather & seasonal (durable)

- **Climate / prevailing wind:** Temperate maritime climate, east-coast Scotland; general prevailing airflow tends westerly/south-westerly.
- **Seasonal hazards:** **Haar** — coastal advection sea fog off the North Sea/Firth of Forth — is a well-documented regional phenomenon for east-coast Scotland; no EGPH-specific frequency statistic found in reachable sources. Winter brings a standard Scottish **icing/snow season**. See [`OM E — Cold Weather Operations`](../../../../../flight-ops/cold-weather-operations.md).
- **Local effects:** Coastal proximity (Firth of Forth) is the standout local effect via haar; no other notable terrain effect identified beyond the distant Pentland Hills (§3.1).

> **Live weather — pull at planning (T-2h):** METAR, TAF, TREND, SIGMET/AIRMET. Not stored here.

---

## 15. NOTAMs

> **Pull at planning (T-2h).** Perishable — not stored here. Check: the single runway's closure/contamination status (no on-field crosswind alternative), navaid/ILS serviceability (CAT II/III equipment status), lighting, bird-activity NOTAMs, obstacle/crane, RFF downgrade, GPS/RAIM. Source: official AIS / OFP NOTAM block.

---

## 16. Fuel & alternate planning notes

- **Typical role for us:** Destination/spoke — not a K Global base (`Base: No` `[VAMSYS mirror 2026-07-26]`).
- **Nearest suitable alternates:** Company preferred alternates [**EGPF**](../egpf/index.md) (Glasgow), [**EGCC**](../egcc/index.md) (Manchester), [**EGLL**](../egll/index.md) (Heathrow) `[VAMSYS mirror 2026-07-26]` — confirm suitability, runway/RFF adequacy and current minima per leg.
- **Fuel-uplift notes:** AVTUR Jet A-1 (no anti-icing additive) via Pentland Aviation / Signature Flight Support (bowser), 0530–2300 (0430–2200 UTC); outside these hours only by prior arrangement with the handling agent. No pre-blended anti-icing additive means confirm FSII requirements per type/route. See [`OM E — Fuel Policy`](../../../../../flight-ops/fuel-policy.md).
- **Range/perf flags for our fleet:** 2,556 m runway with 213 m threshold displacement each end (LDA 2,344–2,347 m) is non-limiting for narrowbody/regional types but may be a real weight constraint for a Code E widebody at high weight — check [`OM B — Fleet Capability Matrix`](../../../../../fleet/capability-matrix.md) per type before planning a widebody rotation.

---

## 17. Fleet-specific notes (optional)

- **Any Code E/F (widebody) type:** The AIP's direct statement that **"stand availability is extremely limited, particularly at night and for large wide-bodied aircraft"** is the standing planning consideration at this field — confirm stand assignment with handling well ahead of any widebody rotation, especially an overnight one. RFF Category A9 is non-limiting for any K Global type. See [`OM B — Fleet Capability Matrix`](../../../../../fleet/capability-matrix.md) for type-by-type field-length/weight reference against the 2,556 m runway and its displaced-threshold LDA figures.

---

## 18. Open items (🟧 — confirm against AIP / current AIRAC)

- **Scottish FIR (EGPX) brief does not yet exist in this network.** EGPH sits inside Scottish FIR airspace; only a Langen (EDGG) FIR brief has been built so far (for Germany). This is a genuine, factual network gap — flagged here for a future build, not a build-process complaint.
- **AIRAC currency** — all runway/comms/navaid figures below are sourced to the UK NATS eAIP AD 2 EGPH, AIRAC effective 2020-10-08, several years old; not independently re-confirmed against a current AIRAC cycle.
- **Mag variation** — sourced to a 2022 epoch (1.21° W, annual change 0.22° E); the 2026 drift-adjusted estimate (~0.3° W) is a computed estimate, not a sourced AIP figure.
- **SIDs/STARs (current names)** — not obtained in this research pass; pull the live current-AIRAC procedure list before use. Named NPRs (Talla, St Abbs/Newcastle, GRICE, GOSAM) are confirmed by name only.
- **ILS sub-category (IIIA/IIIB/IIIC)** — AIP confirms "CAT III" on both runway ends; sub-category not confirmed from a primary table this pass.
- **Take-off minima** — not confirmed this pass.
- **Terrain/MSA (Pentland Hills)** — distance/bearing stated from general knowledge, not independently cross-checked against the current MSA/obstacle chart.
- **Named ground handling agent(s)** beyond the fuel providers (Pentland Aviation, Signature Flight Support) — not confirmed for our operation.
- **Hot spots / standard taxi routes / push-back policy / follow-me availability** — none confirmed in reachable sources.
- **Existence of a hard movement curfew** beyond the 2230–0630 visual-approach ban — not corroborated one way or the other in reachable sources; treat the visual-approach ban as the confirmed constraint and the broader curfew question as open.
- **Engine run-up restrictions** — not confirmed.

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim material (current-AIRAC charts) informs content but is not listed here.*

- **UK NATS eAIP — AIP United Kingdom, AD 2 EGPH**, AIRAC effective 2020-10-08 — https://www.aurora.nats.co.uk/htmlAIP/Publications/2020-10-08-AIRAC/html/eAIP/EG-AD-2.EGPH-en-GB.html (retrieved 2026-07-26). **This AIRAC cycle is several years old — treat exact current runway/comms/navaid figures as needing a live-AIRAC cross-check.**
- OurAirports — https://ourairports.com/airports/EGPH/ (retrieved 2026-07-26). *ARP/elevation/runway cross-check.*
- SkyVector — https://skyvector.com/airport/EGPH (retrieved 2026-07-26). *Coordinate/chart-index cross-check.*
- Wikipedia — "Edinburgh Airport" — https://en.wikipedia.org/wiki/Edinburgh_Airport (retrieved 2026-07-26). *General overview: single-terminal layout, based/major carriers, transatlantic long-haul growth, 2025 passenger volume — tier-4, not AIP-grade.*

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-26 | Built from UK AIP (NATS AIS); K Global fields from live VAMSYS; 4-page pack. |
