# OOMS — Muscat Intl · Airport Briefing

**OOMS / MCT** · Seeb, Muscat, Oman · Middle East
**Version** v0.1 · **Updated** 2026-07-26 · **Status** Draft

> **Read-me:** Planning aid for the sim, not a chart. Static data is drawn from the Oman PACA AIP (AD 2 OOMS) plus public aeronautical data; approaches/SIDs/STARs are listed **by name only** — fly the charted current-AIRAC version. Live weather/NOTAMs are pulled at planning (§14/§15). Open 🟧 items are listed in §18. Flag legend 🟥 restriction/hazard · 🟧 caution/unverified · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| ARP (lat/long) | 23°36′01″N / 058°17′07″E (23.60020, 58.28360) `[OurAirports, retrieved 2026-07-26]` — close to, but ~1.2 km from, a Wikipedia-cited figure (23.59333, 58.28444); treat as 🟧 pending an AD 2.1 primary cross-check |
| Field elevation | **48 ft / 15 m AMSL** `[OurAirports + Wikipedia, retrieved 2026-07-26]` — corrects the field's earlier Navigraph-sourced "49 ft" note; 48 ft is the value corroborated across two independent public sources 🟩 |
| Mag variation | 🟧 **~1°E** per the PACA AIP AD 2.19 navaid table (2019 amendment cycle); the same cycle's RNP procedure data uses **1.4°E** for procedure construction — a minor internal AIP rounding inconsistency, not independently re-confirmed against a current AIRAC |
| Time zone | **UTC+4** (Oman Standard Time, no DST observed) |
| Runway(s) | **08L/26R** 4,000 × 60 m asphalt (threshold 26R displaced 162 m) · **08R/26L** 4,080 × 45 m asphalt (threshold 08R displaced 419 m) — both lighted, parallel pair `[OurAirports, retrieved 2026-07-26]` |
| Preferential runway | Not published in reachable sources — presumed wind-driven between the parallel pair; no preferential-runway rule confirmed 🟧 |
| Longest LDA | Not independently derived — see §7; overall runway lengths above, exact declared LDA per threshold not obtained this pass 🟧 |
| Approaches | **ILS CAT II** on **08L (IML, 108.900)** and **26R (IMR, 110.700)** `[PACA AIP AD 2.19, AMDT 2-19, retrieved 2026-07-26]`; RNAV(GNSS)/RNP APCH and VOR approaches also published for 08L/26R; a current-AIRAC chart titled "ILS or LOC Z RWY 08R" exists for the 08R/26L pair (chart content not retrievable this pass — category/minima not confirmed) 🟧 |
| RFF category | Not published / verify 🟧 — a large A380/747-capable international gateway implies a high category, but no figure was obtained from a reachable source |
| Control type | **Radar** — Muscat Approach/Radar, range 100 NM `[PACA AIP AD 2.22, retrieved 2026-07-26]` |
| Elevation class | Sea-level (48 ft) — **not** hot-and-high by elevation; extreme summer ambient heat (commonly 40–45°C+, Jun–Sep) is still a density-altitude/performance caution despite the low field elevation 🟧 |
| Special-airport status | None found in reachable sources. Standing crew-briefing items: displaced thresholds on **both** runways, AIP-cited **terrain south of the RWY 08L/26R extended centreline**, and **CAT II** (not CAT III) low-visibility currency — see §3/§5 |
| Customs / PoE | **Yes** — major international gateway; exact desk hours not confirmed, assumed extensive given the airport's 2018-built single integrated terminal and ~13M annual passengers (2024) 🟧 |
| K Global category | **S** `[VAMSYS mirror 2026-07-26]` |
| K Global base | **No** `[VAMSYS mirror 2026-07-26]` |
| Company preferred alternates | OMDB, OTHH, OMAA `[VAMSYS mirror 2026-07-26]` |
| Taxi-in / taxi-out (VAMSYS) | **10 min / 12 min** `[VAMSYS mirror 2026-07-26]` |

---

## 2. Validation summary

| Domain | Flag | Note |
|---|---|---|
| Terrain / CFIT | 🟧 | AIP comms-failure guidance explicitly warns of terrain **south of the RWY 08L/26R extended centreline** — pilots must monitor DVOR/DME or LOC position and not proceed through the extended centreline unless positively instructed. Not a close-in CFIT field in the EDDF sense, but a genuine sourced caution — see §3.1. |
| Runway length vs fleet perf | 🟩 | Both runways (4,000 m / 4,080 m) are ample for any K Global widebody; non-limiting on length. |
| Approach availability / minima | 🟧 | ILS **CAT II** confirmed on 08L/26R from a primary AIP extract — **this corrects an assumed CAT III capability**, which is not corroborated by any source found this pass (see §3.5, §18). RNAV(GNSS)/RNP APCH/VOR also available on 08L/26R; 08R/26L approach category not confirmed. |
| Airspace / traffic / control | 🟧 | Radar environment under Muscat Approach; the **Muscat FIR (OOMM)** also controls a large **Arabian Sea oceanic sector** (RNAV10/RNP10, procedural) — a materially different airspace character from the continental terminal picture. See §3.2 and the [Middle East regional airspace brief](../../../../airspace/middle-east.md). |
| Weather / seasonal hazard | 🟧 | Extreme summer heat, shamal dust/haboob (Gulf-wide), and pervasive regional **GNSS jamming/spoofing** are the standing hazards; the Arabian Sea SW monsoon (khareef) is a **southern-Oman/Salalah** phenomenon, not a Muscat driver — see §14 and cross-ref [OOSA — Salalah Briefing](../oosa/index.md) for the contrast. |
| Curfew / slots / hours | 🟧 | No curfew, slot-coordination level, or CTOT regime found in reachable sources — treated as none/unconfirmed pending a primary confirmation. |
| RFF category vs our types | 🟧 | Not published — see §1. |
| Fuel availability | 🟧 | Jet A-1 assumed available at a major hub; supplier/hours not confirmed. |
| Customs / handling / security | 🟧 | PoE confirmed; exact hours, handling agent and stand/gate detail not confirmed in reachable sources. |

---

## 3. Threat & Error Management (TEM)

### 3.1 CFIT / Terrain 🟧
OOMS sits on the Batinah coastal plain at 48 ft AMSL — not a close-in mountain-ringed field in the way old Muscat city (and the retired Bayt al-Falaj airport) was. However, the PACA AIP's own radio-communication-failure procedure explicitly instructs pilots intercepting the RWY 08L/26R extended centreline in IMC to monitor position on the DVOR/DME or localizer and **not proceed through the extended centreline unless positively instructed by ATC**, citing **terrain south of the RWY 08L/26R extended centreline** as the reason `[PACA AIP AD 2.22.3.2(c), retrieved 2026-07-26]`. This is a directly sourced, field-specific caution, not a generic MSA reminder — brief it. More broadly, Oman's Al Hajar range rises to significant elevations inland/east of the Muscat coastal strip (the regional brief notes Jebel Jais-class terrain, ~1,900 m+, on the wider Muscat/Emirates flank) — verify the current MSA sectors and area chart at planning; treat this as a "confirm distance/bearing on the chart" item rather than an assumed non-factor.

### 3.2 Airborne conflict / traffic 🟧
Muscat Approach/Radar provides radar service to 100 NM `[PACA AIP AD 2.22.2, retrieved 2026-07-26]` — a standard continental-radar terminal environment, not procedural. The wider **Muscat FIR (OOMM)**, however, extends well beyond the terminal picture: it controls continental Omani airspace **plus a large Arabian Sea oceanic sector worked procedurally (RNAV10/RNP10, HF/SATVOICE)** — a materially different character on the FIR's oceanic flank than at the airport itself. There is currently no dedicated Muscat (OOMM) FIR brief in this OM; for FIR-level and conflict-zone context (including the EASA CZIB "avoid at all levels" advisory covering the **Gulf of Oman west of 58°E within OOMM** — the field's own longitude, ~58.28°E, sits just east of that line) see the [Middle East regional airspace brief](../../../../airspace/middle-east.md) §3/§9. Re-check the live CZIB/NOTAM picture at planning; this is not a static fact.

### 3.3 Runway excursion 🟧
Both runways carry a displaced threshold: **26R displaced 162 m**, **08R displaced 419 m** `[OurAirports, retrieved 2026-07-26]` — the exact declared LDA from each threshold was not obtained from a primary AD 2.24 table this pass; do not assume the full runway length is usable landing distance from either displaced threshold. Confirm current declared distances against the AIP before treating any figure here as go/no-go grade.

### 3.4 Weather threat 🟧
**Extreme summer heat** (commonly 40–45°C+, June–September) is the field's main environmental driver — while OOMS is not "hot-and-high" by elevation (48 ft), high ambient temperature still erodes takeoff/climb performance margins on the hottest days; treat as a density-altitude caution rather than a hot-and-high limitation. **Shamal winds and blowing dust/haboob**, a Gulf-wide seasonal hazard, can degrade visibility here as elsewhere in the region (see the [Middle East regional airspace brief](../../../../airspace/middle-east.md) §11). The **Arabian Sea SW monsoon (khareef, Jun–Sep)** that brings low ceilings and drizzle to **Salalah** in southern Oman is **not** a Muscat phenomenon — Muscat's summer weather is hot and generally dry, a useful contrast to keep in mind against [OOSA — Salalah](../oosa/index.md) when planning the domestic Oman network. **GNSS jamming/spoofing is pervasive across the Gulf** and has been reported at neighbouring hubs — brief the DME/DME/IRU cross-check and expect possible FMS position anomalies (see regional brief §9).

### 3.5 Operational considerations 🟧
The field's ILS is confirmed **CAT II** (not CAT III) on both 08L and 26R from a primary 2019-cycle AIP extract — **this is a correction to a commonly assumed CAT III capability, which no source found this pass corroborates**; plan low-visibility currency and minima against CAT II, and flag CAT III as unconfirmed pending a current-AIRAC cross-check (§18). Non-scheduled/private flights require **72-hour PPR** and instrument training flights are restricted 0300–0900 for CAT A/B aircraft `[PACA AIP AD 2.20, retrieved 2026-07-26]` — not directly relevant to scheduled K Global service but worth knowing if a training or non-scheduled sector is ever flown here. Traffic-circuit direction differs by runway (**26R right-hand, 08L left-hand**) — relevant to any circling or visual manoeuvring.

---

## 4. Cautions & Warnings

- **Terrain south of the RWY 08L/26R extended centreline** is an AIP-cited caution on any IMC intercept — do not proceed through the extended centreline without positive ATC instruction.
- **Displaced thresholds on both runways** (26R: 162 m; 08R: 419 m) — confirm current declared LDA before treating either runway's full length as usable from the displaced end.
- **ILS is CAT II, not CAT III** — do not assume CAT III autoland capability at this field without a current-AIRAC confirmation.
- **Traffic-circuit direction differs by runway** (26R right / 08L left) — relevant to circling and visual manoeuvring.
- **Regional GNSS jamming/spoofing** is pervasive in the Gulf — cross-check DME/DME/IRU and brief for possible FMS position anomalies.
- **Extreme summer heat** (Jun–Sep) is a performance caution despite the field's sea-level elevation.

---

## 5. Aerodrome category, restrictions & crew qualification

- **Special-airport / category:** Not categorised as a restricted-crew "special airport" in reachable sources; standing crew-briefing items are the terrain-south-of-centreline caution (§3.1/§4) and CAT II (not CAT III) low-vis currency. 🟧
- **Crew-qualification gate:** CAT II currency required for low-visibility approaches into 08L/26R; CAT III currency is **not** confirmed as applicable/available at this field — do not plan on it. 🟧
- **Operating restrictions / bans:** Non-scheduled/private flights require **72-hour PPR**; **no instrument training flights 0300–0900** for CAT A/B aircraft `[PACA AIP AD 2.20, retrieved 2026-07-26]`; no RNP AR ban or circling restriction found in reachable sources — verify current AIRAC. 🟧
- **Overflight / entry / permits:** Standard international arrival into Oman; no special state permit found for scheduled commercial service. 🟩
- **Operations notes:** Civil apron handling requires operator-arranged **wheel chocks** and **fire cover during engine start** (notify the duty officer ≥10 minutes prior to start-up if Airport Fire Department cover is required); hi-vis jacket required in the apron area `[PACA AIP AD 2.20.1, retrieved 2026-07-26]`.

---

## 6. General / hours / services

| Item | Value | Flag |
|---|---|---|
| ATS hours | Muscat Approach/Radar confirmed **H24** `[PACA AIP AD 2.18, retrieved 2026-07-26]`; Tower/Ground/Delivery/ATIS hours not explicitly restated in the reachable extract — assumed H24 for a major international gateway | 🟧 |
| AD operating hours | No curfew or restricted-hours table found — treat as continuous scheduled operation pending confirmation | 🟧 |
| Night / curfew restrictions | None found in reachable sources | 🟧 |
| RFF category | Not published / verify | 🟧 |
| Fuel | Jet A-1 assumed available; supplier/hours not confirmed | 🟧 |
| PCN | Not published / verify | 🟧 |
| Customs | Yes — hours not confirmed, assumed extensive given the terminal's international-gateway role | 🟧 |
| Handling / FBO | Not confirmed — likely an Oman Air-affiliated or third-party handler, not independently sourced | 🟧 |

---

## 7. Runways & declared distances

| RWY | Dimensions | Surface / PCN | TORA | TODA | ASDA | LDA | Notes |
|---|---|---|---|---|---|---|---|
| 08L | 4,000 × 60 m | Asphalt / PCN not published 🟧 | Not published / verify 🟧 | Not published / verify 🟧 | Not published / verify 🟧 | Not published / verify 🟧 | Full-length threshold; parallel-pair north runway |
| 26R | 4,000 × 60 m | Asphalt / PCN not published 🟧 | Not published / verify 🟧 | Not published / verify 🟧 | Not published / verify 🟧 | Not published / verify 🟧 | **Threshold displaced 162 m** `[OurAirports, retrieved 2026-07-26]` |
| 08R | 4,080 × 45 m | Asphalt / PCN not published 🟧 | Not published / verify 🟧 | Not published / verify 🟧 | Not published / verify 🟧 | Not published / verify 🟧 | **Threshold displaced 419 m** `[OurAirports, retrieved 2026-07-26]`; the original 1973 runway — closed 2015 for refurbishment, reopened Nov 2023 |
| 26L | 4,080 × 45 m | Asphalt / PCN not published 🟧 | Not published / verify 🟧 | Not published / verify 🟧 | Not published / verify 🟧 | Not published / verify 🟧 | Full-length threshold; parallel-pair south runway |

*Overall dimensions and displaced-threshold distances from OurAirports (retrieved 2026-07-26); exact TORA/TODA/ASDA/LDA per threshold not obtained from the primary AD 2.24 table this pass — flagged, never fabricated. All distances in metres.*

---

## 8. Communications

| Service | Callsign | Frequency | Hours | Notes |
|---|---|---|---|---|
| ATIS | Muscat Information | 126.800 | Not confirmed, assumed H24 🟧 | `[PACA AIP AD 2.18; cross-checked OurAirports, retrieved 2026-07-26]` |
| Delivery | Muscat Clearance | 125.575 | Not confirmed 🟧 | Cross-checked exactly against OurAirports |
| Ground | Muscat Ground (SMC) | 121.800 (primary) / 127.875 (secondary) | Not confirmed 🟧 | A separate **"North Ground" 121.875** is reported by OurAirports, likely serving the newer 08L/26R apron/taxi zone — not independently confirmed |
| Tower | Muscat Tower | **118.825** (primary, PACA AIP 2019 cycle) / 121.500 (emergency) | Not confirmed 🟧 | 🟧 A tier-4 2026 cross-check (OurAirports) instead shows **118.4** — a possible amendment-cycle change; **verify the current chart before use** |
| Approach | Muscat Approach/Radar | 121.200 (primary) / 121.500 (emergency) | **H24** | Radar service, 100 NM range |
| Centre / FIR | **Muscat FIR (OOMM)** | Per current AIRAC | H24 (assumed) | Controls Omani continental airspace **and** a large Arabian Sea oceanic sector; no dedicated OOMM FIR brief yet exists — see the [Middle East regional airspace brief](../../../../airspace/middle-east.md) |

*Source: PACA AIP Oman, AD 2.OOMS-9/10 (AMDT 2-19, eff. 10 Oct 2019), mirrored extract retrieved 2026-07-26; cross-checked against OurAirports (retrieved 2026-07-26). Treat exact current frequencies as 🟧 pending a live-AIRAC cross-check, particularly Tower.*

---

## 9. Navaids

| Aid | Ident | Freq | Hours | Notes |
|---|---|---|---|---|
| DVOR/DME | MCT | 114.500 / CH92X | H24 (assumed) | 264°/1.20 NM from ARP; antenna elevation 74 ft `[PACA AIP AD 2.19, retrieved 2026-07-26]` |
| NDB | NSB (Seeb) | Not confirmed 🟧 | — | Tier-4 only (PilotNav) — frequency/status not corroborated by the primary extract |
| ILS/LOC 08L | IML | 108.900 | H24 (assumed) | **ICAO CAT II**; GP angle 3.0°, RDH 55 ft; DME co-located CH26X `[PACA AIP AD 2.19, retrieved 2026-07-26]` |
| ILS/LOC 26R | IMR | 110.700 | H24 (assumed) | **ICAO CAT II**; GP angle 3.0°, RDH 57 ft; DME co-located CH44X `[PACA AIP AD 2.19, retrieved 2026-07-26]` |
| ILS/LOC 08R | Not confirmed 🟧 | Not confirmed 🟧 | — | A current-AIRAC chart titled "ILS or LOC Z RWY 08R" exists per the eAIP document index (2026-cycle); ident/frequency/category not retrievable this pass |

*All 08L/26R idents/frequencies/categories sourced to the PACA AIP AD 2.19 (AMDT 2-19, eff. 10 Oct 2019) extract; not independently re-confirmed against a current AIRAC. RNAV(GNSS)/RNP APCH and VOR approaches are also published for 08L/26R per the same source.*

---

## 10. Arrival

- **Transition altitude / level:** Not confirmed in reachable sources — verify current chart. 🟧
- **Speed:** Standard 250 KIAS below FL100 assumed (ICAO norm) — confirm no local override on current chart.
- **Preferential runway logic:** Not published — presumed wind-driven between the parallel pair. 🟧
- **Approaches (names only — verify minima on current AIRAC charts):**

| RWY | Approach | IAF | FAF/FAP alt | Notes |
|---|---|---|---|---|
| 08L | ILS (IML) · RNP APCH · RNAV(GNSS) · VOR | Per chart | Per chart | **ICAO CAT II** |
| 26R | ILS (IMR) · RNP APCH · RNAV(GNSS) · VOR | Per chart | Per chart | **ICAO CAT II** |
| 08R / 26L | ILS or LOC (chart exists, current AIRAC) | Per chart | Per chart | Category/minima not confirmed 🟧 |

- **STARs (names only — verify current AIRAC):** RNAV/conventional arrival families named **VUSET, ELIGO, LAKLU, MUSUK, GERAR, TUMET, RADAX** with **LADBA/MIGMO/NONKA/BUBIL/KANOL** transitions serve 08L and 26R (tier-4 procedure-name cross-check; not independently AIP-confirmed this pass) 🟧 — pull the current-AIRAC STAR list before use.
- **LVP:** CAT II trigger conditions apply; exact RVR/decision-height minima not confirmed this pass. 🟧
- **Missed approach watch-items:** The AIP's own comm-failure guidance highlights **terrain south of the RWY 08L/26R extended centreline** — treat as a standing position-awareness item on any go-around or re-intercept, not terrain-driven missed-approach detail specifically. 🟧

---

## 11. Departure

- **SIDs (names only — fly the charted version):** RNAV/conventional departure families named **VUSET, SEVLA, MUSRU, EMURU, IZK, SODEB, MUSARU, IVETO, DAPOK** serve 08L/26R per tier-4 procedure-name cross-check (not independently AIP-confirmed this pass) 🟧 — pull the current-AIRAC SID list before use.
- **RNP / climb-gradient requirements:** Not confirmed in reachable sources — verify current chart. 🟧
- **Take-off minima:** Not confirmed in reachable sources. 🟧
- **Start-up / push-back:** Apron handling requires operator-arranged chocks and fire cover during engine start; notify the duty officer ≥10 min prior if Airport Fire Department cover is needed `[PACA AIP AD 2.20.1, retrieved 2026-07-26]`.
- **ATC slot / CTOT & clearance:** No slot-coordination level or CTOT/ATFM regime found in reachable sources — treated as none/unconfirmed. 🟧
- **De-icing:** **NIL** — arid desert climate; not an operational requirement at this field. 🟩

---

## 12. Noise & Environmental

- **Noise abatement (NAP):** No general departure noise-routing procedure found in reachable sources. 🟧
- **Night noise / dB limits:** Not confirmed. 🟧
- **Engine run-up restrictions:** Not confirmed. 🟧
- **Reverse thrust / idle-reverse policy:** For **arrivals on RWY 08L between 1600–0200 UTC**, it is recommended that aircraft **not exceed idle reverse thrust** unless required for operational or safety reasons — a specific, AIP-cited noise-mitigation recommendation `[PACA AIP AD 2.21, retrieved 2026-07-26]`.

---

## 13. Ground operations

- **Stands for our types:** OOMS operates a **single integrated passenger terminal** opened 18 March 2018, with approximately **45 gates/boarding bridges**, capable of handling the Airbus A380 and Boeing 747-8 `[Wikipedia, retrieved 2026-07-26]`. Widebody-specific stand/pier breakdown not independently confirmed. 🟧
- **Push-back:** Not confirmed in reachable sources. 🟧
- **Standard taxi routes:** Not detailed in reachable sources — confirm with Ground/Apron on the day. 🟧
- **Hot spots / tight taxiways:** Not confirmed in reachable sources this pass. 🟧
- **Follow-me:** Availability not confirmed. 🟧

---

## 14. Weather & seasonal (durable)

- **Climate / prevailing wind:** Hot arid coastal climate; extreme summer heat (commonly 40–45°C+, Jun–Sep); mild, dry winters.
- **Seasonal hazards:** **Shamal winds and blowing dust/haboob** (Gulf-wide, see the [Middle East regional airspace brief](../../../../airspace/middle-east.md) §11) can reduce visibility. Regional **GNSS jamming/spoofing** is pervasive and should be briefed. The **Arabian Sea SW monsoon (khareef, Jun–Sep)** affecting southern Oman — low ceilings, drizzle, reduced visibility at [OOSA — Salalah](../oosa/index.md) — is **not** a Muscat phenomenon; contrast the two fields' seasonal risk when planning the domestic network.
- **Local effects:** Coastal-plain location; no notable terrain-driven local wind effect confirmed beyond the AIP's general terrain-awareness caution (§3.1).

> **Live weather — pull at planning (T-2h):** METAR, TAF, TREND, SIGMET/AIRMET, dust/shamal advisories. Not stored here.

---

## 15. NOTAMs

> **Pull at planning (T-2h).** Perishable — not stored here. Check: runway/taxiway closures, navaid U/S, CAT II equipment status, lighting, obstacle/crane, RFF downgrade, GPS/RAIM (given pervasive regional GNSS interference), and the live Gulf-region conflict-zone/CZIB picture per the [Middle East regional airspace brief](../../../../airspace/middle-east.md). Source: AIS / OFP NOTAM block.

---

## 16. Fuel & alternate planning notes

- **Typical role for us:** Destination / alternate — category **S**, not a K Global base `[VAMSYS mirror 2026-07-26]`.
- **Nearest suitable alternates:** Company preferred alternates OMDB, OTHH, OMAA `[VAMSYS mirror 2026-07-26]` — all cross-country (UAE/Qatar); confirm suitability, runway/RFF adequacy and current minima per leg against the live CZIB/NOTAM picture. Within Oman, [OOSA — Salalah](../oosa/index.md) is geographically distant (southern Oman) and not a practical short-notice alternate for a Muscat operation, but is the network's other domestic Oman field.
- **Fuel-uplift notes:** Jet A-1 assumed available as a major hub; specific into-plane provider/hours not confirmed. 🟧 See [`OM E — Fuel Policy`](../../../../../flight-ops/fuel-policy.md).
- **Range/perf flags for our fleet:** Field length (4,000 m / 4,080 m) non-limiting for any K Global type. See [`OM B — Fleet Capability Matrix`](../../../../../fleet/capability-matrix.md).

---

## 17. Fleet-specific notes (optional)

- No type-specific performance penalty identified at OOMS — field length is non-limiting and the field is not hot-and-high by elevation. See [`OM B — Fleet Capability Matrix`](../../../../../fleet/capability-matrix.md) for type-by-type reference. For low-visibility (CAT II) currency planning, see [`OM E — Low Visibility Operations`](../../../../../flight-ops/low-visibility-operations.md).

---

## 18. Open items (🟧 — confirm against AIP / current AIRAC)

- **CAT III capability** — not corroborated by any source found this pass; the primary AIP extract (2019 cycle) states **ICAO CAT II** on both 08L and 26R. Treat any assumption of CAT III at this field as unconfirmed pending a current-AIRAC/operator cross-check.
- **08R/26L approach category/minima** — a current-AIRAC chart exists ("ILS or LOC Z RWY 08R") but its content (ident, frequency, category) could not be retrieved this pass.
- **Declared distances (TORA/TODA/ASDA/LDA)** — only overall runway length and displaced-threshold distances were obtained; the full AD 2.24 table was not reached.
- **RFF category, PCN, curfew/slot regime, ATS hours beyond Approach, fuel supplier/hours, customs desk hours, handling agent** — none confirmed in reachable sources.
- **ARP coordinate** — two public sources differ by ~1.2 km (OurAirports vs. a Wikipedia-cited figure); not cross-checked against a primary AD 2.1 table.
- **Tower frequency discrepancy** — AIP (2019 cycle) states 118.825; a 2026 tier-4 cross-check shows 118.4. Verify current chart.
- **Mag variation** — 1°E vs. 1.4°E inconsistency within the same 2019 AIP cycle; not independently re-confirmed.
- **SID/STAR exact names and assignment** — sourced only to a tier-4 procedure-database cross-check, not the primary AIP directly; pull the live current-AIRAC list before use.
- **Hot spots, standard taxi routes, stand/gate breakdown, push-back policy, follow-me availability** — none confirmed in reachable sources.

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim material may inform content but is not listed here.*

- **Oman PACA AIP, AD 2.OOMS (AD 2.OOMS-9/10, 2.18–2.22)**, AMDT 2-19, eff. 10 Oct 2019 — mirrored via https://uniforce-sog.org/wp-content/uploads/2024/06/OOMS-CHART-AIP.pdf (retrieved 2026-07-26). *Primary source — communications, navaids/ILS category, local traffic regulations, noise abatement, comm-failure/terrain guidance.* Treat exact current-cycle figures as needing a live-AIRAC cross-check.
- **Oman PACA eAIP** (current, 2026-02-19 non-AIRAC cycle) — document index entry "ILS or LOC Z RWY 08R" at https://aim.caa.gov.om/eAIP_Oman/final/2026-02-19-Non-AIRAC/html/Document/OOMS/ILS%20or%20LOC%20Z%20RWY%2008R.pdf (retrieved 2026-07-26). *Confirms a current chart exists for 08R; the page renders as a JavaScript-gated frameset to an automated fetch — chart content not retrieved.*
- OurAirports — https://ourairports.com/airports/OOMS/ , /runways.html , /frequencies.html (retrieved 2026-07-26). *ARP/elevation/runway/frequency cross-check.*
- Wikipedia — "Muscat International Airport" — https://en.wikipedia.org/wiki/Muscat_International_Airport (retrieved 2026-07-26). *Terminal/history/runway narrative, passenger statistics.*
- PilotNav — https://www.pilotnav.com/airport/OOMS (retrieved 2026-07-26). *SID/STAR/approach name cross-check (tier-4).*
- CAPA / Centre for Aviation — "Southern runway at Muscat International Airport to reopen in Oct 2023" — https://centreforaviation.com/news/southern-runway-at-muscat-international-airport-to-reopen-in-oct-2023-1219388 (retrieved 2026-07-26). *RWY 08R/26L reopening corroboration.*
- [Middle East regional airspace brief](../../../../airspace/middle-east.md) — Muscat FIR (OOMM) structure/Arabian Sea oceanic sector, CZIB picture, GNSS jamming/spoofing, shamal/heat seasonal context.

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-26 | Built from national AIP; K Global fields from live VAMSYS; 4-page pack. |
