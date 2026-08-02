# EDDL — Düsseldorf International · Airport Briefing

**EDDL / DUS** · Lohausen, Düsseldorf, North Rhine-Westphalia, Germany · Europe
**Version** v0.2 · **Updated** 2026-07-25 · **Status** Draft — provisional (DFS eAIP not directly reachable; built from cross-checked public sources)

> **Read-me:** Planning aid, not a chart. The **DFS eAIP** (Germany's official AIP) could not be fetched directly (JavaScript-rendered/blocked to a raw pull) — core data below is cross-checked across OpenNav's AD-2 chart index, OurAirports/SkyVector, a NOTAM-sourced declared-distance re-survey, Wikipedia and the VATSIM Germany knowledgebase (operational SOPs are explicitly sourced from AIP text where quoted, incl. direct AIP Germany/AD 2 EDDL citations). Treat AIP-specific figures (PCN, RFF category, exact declared distances beyond what is cited, mag var) as **provisional** — see §18. Approaches/SIDs/STARs by **name only** — fly the charted current-AIRAC version. Live weather/NOTAMs pulled at planning (§14/§15). Flag legend 🟥 restriction/hazard · 🟧 caution/unverified · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| ARP (lat/long) | N51°17′22.2″ / E006°46′00.4″ (51.28950, 6.76678) `[OpenNav / OurAirports, cross-checked]` — note: navdata seed used elsewhere for this field (51.28093, 6.75731) differs by ~1 km; reconcile against current AIP 🟧 |
| Field elevation | **147 ft / 44.8 m** MSL |
| Mag variation | Not confirmed in reachable sources — verify 🟧 |
| Time zone | UTC +1 (CET) / UTC +2 (CEST, EU DST) |
| Runway(s) | **05R/23L** (main, 3,000 m / 9,843 ft) + **05L/23R** (shorter, 2,700 m / 8,858 ft, **restricted use**) — closely-set parallel pair, less than 760 m apart |
| Preferential runway | Single-runway ops: **southern/main runway (05R/23L)** for all movements. High-traffic **segregated parallel ops**: south for departures, north for arrivals (A380 always lands south regardless of direction) 🟧 |
| Longest LDA | **2,696 m** on 05R/23L per a recent declared-distance re-survey (see §7) — meaningfully less than the 3,000 m physical/advertised length 🟧 |
| Approaches | **ILS CAT II & III** on 05R & 23L (main runway); **ILS/LOC (CAT I only)** on 05L; **VOR** on 23L & 23R; **NDB** on 05L & 05R; **RNAV(GPS)** on all four ends. **23R has no ILS at all** |
| RFF category | Not confirmed in reachable sources 🟧 |
| Control type | **Radar** (Düsseldorf Approach "DLA" + Feeder "DLAT"; Langen ACC en route) |
| Elevation class | Low (147 ft) — not a performance driver |
| Special-airport status | **Slot-coordinated**; the **closely-spaced, asymmetric runway pair** (shorter runway excluded to A380, no ILS on 23R) is the standing crew-awareness item — see §5/§13 🟥 |
| Customs / PoE | **Yes** — AOE (customs tag confirmed); hours not confirmed 🟧 |

---

## 2. Validation summary

| Domain | Flag | Note |
|---|---|---|
| Terrain / CFIT | 🟩 | Flat Rhine-valley lowland; no significant high ground nearby. Low CFIT exposure. |
| Runway length vs fleet perf | 🟩 | Main runway 3,000 m (LDA 2,696 m per re-survey) — non-limiting for our fleet; shorter runway 2,700 m is restricted-use, not normally assigned to widebody/heavy types. |
| Approach availability / minima | 🟧 | ILS CAT II/III confirmed only on the main runway (05R/23L); the shorter runway's 23R end has **no ILS at all** (VOR/RNAV only) — confirm runway/approach pairing before a low-vis 23-direction arrival. |
| Airspace / traffic / control | 🟥 | Radar-controlled; **closely-spaced parallel pair (<760 m apart)** — cannot support independent parallel approaches/departures; wake-turbulence separation required between the runways at all times; segregated operation is the norm at high traffic. |
| Weather / seasonal hazard | 🟧 | Typical NW-European frontal weather (Rhine valley); no distinctive seasonal hazard confirmed from reachable sources beyond general patterns — verify current AIP climatological note. |
| Curfew / slots / hours | 🟧 | Slot-coordinated; night-flight regime reported with a core no-movement window **00:00–05:00**; exact broader boundary times vary by secondary source — see §12/§18. |
| RFF category vs our types | 🟧 | Not confirmed — see §1. |
| Fuel availability | 🟩 | Jet A-1 confirmed on field; hours not confirmed 🟧. |
| Customs / handling / security | 🟩 | AOE confirmed; full major-hub handling; business-aviation FBOs present. |

---

## 3. Threat & Error Management (TEM)

### 3.1 CFIT / Terrain  🟩
Düsseldorf Airport sits in the flat Rhine-valley lowland at Lohausen, roughly 7 km north of the city centre on the Rhine. There is no significant high ground in the vicinity, and CFIT exposure at the field is low. Read the current MSA/obstacle data on the area chart as standard practice; no distinctive terrain threat was identified for this field.

### 3.2 Airborne conflict / traffic  🟥
Düsseldorf is a busy hub for the Rhine-Ruhr conurbation, **radar-controlled** (Düsseldorf Approach "DLA" as the primary TMA station, with a dedicated Feeder position "DLAT" splitting workload at high traffic; Langen ACC en route). Its defining airspace/traffic characteristic is the **closely-spaced parallel runway pair — less than 760 m apart** — which, per the operational SOP (citing AIP Germany/AD 2 EDDL), **cannot support fully independent parallel approaches or departures**; wake-turbulence separation between the two runways must be maintained at all times. The standard high-traffic configuration is **segregated parallel operation**: arrivals on the shorter/northern runway (05L/23R), departures on the main/southern runway (05R/23L) — with a documented exception permitting early-right-turning SIDs off 23L to depart without waiting for a landing on the parallel runway, under specific sighting/no-wake-turbulence conditions. A **reduced minimum radar separation of 2.5 NM** (vs. the 3 NM standard) is applied for diagonal staggered approaches to the parallel pair, per AIP Germany/AD 2 EDDL 1-23, when the two aircraft are established on different final approach tracks. Cross-ref <../../../../Airspace/FIR/Europe/Langen (EDGG).md> when built.

### 3.3 Runway excursion  🟧
A recent declared-distance re-survey for the main runway (05R/23L) gives **TORA 2,696 m / TODA 2,756 m / ASDA 2,997 m / LDA 2,696 m** in both directions — a meaningful **~300 m gap** below the 3,000 m physical/advertised runway length. **Always fly the declared LDA, not the physical or advertised length.** The shorter runway (05L/23R, 2,700 m) is excluded to the A380 and its **23R end carries no ILS** (VOR/RNAV(GPS) only) — confirm the runway/approach combination before planning any CAT II/III or heavy-widebody operation in a 23-configuration.

### 3.4 Weather threat  🟧
Temperate, maritime-influenced Rhine-valley climate with typical Western European frontal weather (wind, rain, occasional winter fog/low cloud, and seasonal snow are plausible for the region) — a distinctive seasonal hazard specific to this field was **not confirmed** in reachable sources; verify the current AIP climatological summary before relying on generic regional assumptions. See §14.

### 3.5 Operational considerations  🟧
Düsseldorf is **slot-coordinated** with a structured night-noise regime (§12), and the **closely-spaced, asymmetric parallel-runway pair** is the standing crew-awareness item: confirm the active runway configuration (single vs. segregated-parallel) and, in a 23-configuration, confirm **which** runway (23L on the main pair vs. 23R on the shorter/no-ILS runway) has been assigned before briefing the approach.

---

## 4. Cautions & Warnings

- The two runways are **less than 760 m apart** — wake-turbulence separation is required between them at all times; the pair **cannot** run fully independent parallel approaches/departures.
- The shorter/north runway (05L/23R) has **no ILS on its 23R end** (VOR/RNAV only) and is **excluded to the A380** — confirm runway assignment before planning a CAT II/III or heavy-widebody operation in 23-configuration.
- Main runway (05R/23L) **declared distances were recently revised by survey** — **TORA 2,696 m** is meaningfully shorter than the 3,000 m physical/advertised length; always use the declared figures, not the physical length. 🟧 verify against current AIRAC.
- **Night flight regime**: a hard core no-movement window **00:00–05:00** (emergency/rescue only) is consistently reported; additional departure/arrival restrictions in the 22:00–23:00/23:30–06:00 range are reported with some variation between secondary sources — verify exact current boundary times against AIP/NfL. 🟧
- Runway-vacating instructions are specific: traffic vacating **05R via L1/L3/L4 must turn right onto taxiway M** (not into L2); it is **not permitted** to vacate/cross **23L via L7 and turn left onto M**.
- **A380 operations are limited to a single stand** on the apron (per third-party operational reference) — not a current K Global fleet concern, but relevant if the type is ever operated here.
- **Reduced Runway Separation (RSS)** minima and the **2.5 NM diagonal-staggered-approach** separation are procedural features of this field — do not assume standard 3 NM/independent-parallel separation applies without confirming the active runway configuration.
- The **MODRU #K** SID requires a 9.5% climb gradient and RF-leg capability, and needs prior coordination — confirm eligibility before requesting it.
- The **NETEX** SID is only available at night (2200–0600) and on weekends/holidays, due to military airspace activation to the north in the EBBU FIR — do not expect it during weekday daytime operations.

---

## 5. Aerodrome category, restrictions & crew qualification

- **Special-airport / category:** Not operator-categorised as a "special airport" in reachable sources; the **closely-spaced, asymmetric runway pair** (§3.2/§13) is the standing item. 🟧
- **Crew-qualification gate:** CAT II/III currency required for main-runway (05R/23L) LVO; the shorter runway (05L/23R) does **not** support CAT II/III. No other special crew gate found in reachable sources. 🟧
- **Operating restrictions / bans:** A380 excluded from the shorter/northern runway (05L/23R) and limited to a single apron stand; segregated (not independent) parallel-runway operation is the norm at high traffic; night-noise regime per §12. No RNP AR ban or circling-not-authorised note found — verify current AIRAC. 🟧
- **Overflight / entry / permits:** Standard Schengen arrangements; AOE (customs) confirmed on field.
- **Operations notes:** Regulator — DFS (Deutsche Flugsicherung) / Luftfahrt-Bundesamt (LBA); Airport operator — Düsseldorf Airport (Flughafen Düsseldorf GmbH); FIR — **Langen (EDGG)**.

---

## 6. General / hours / services

| Item | Value | Flag |
|---|---|---|
| ATS hours | H24 (assumed — major hub scale; not explicitly confirmed) | 🟧 |
| AD operating hours | H24 (assumed) | 🟧 |
| Night / curfew restrictions | Core no-movement window 00:00–05:00 reported; broader restricted band ~2200–0600 — see §12 | 🟧 |
| RFF category | Not confirmed in reachable sources | 🟧 |
| Fuel | Jet A-1 confirmed on field; hours not confirmed | 🟧 |
| PCN | Not published in reachable sources | 🟧 |
| Customs | AOE confirmed (customs tag); hours not confirmed | 🟧 |
| Handling / FBO | Full major-hub handling; business-aviation FBOs present on field | 🟩 |

---

## 7. Runways & declared distances

| RWY | Dimensions | Surface | TORA | TODA | ASDA | LDA | Notes |
|---|---|---|---|---|---|---|---|
| 05R | 3,000 × ~45 m | Not confirmed 🟧 | 2,696 m | 2,756 m | 2,997 m | 2,696 m | **Main runway.** ILS CAT II/III; RNAV(GPS). Figures per a recent declared-distance re-survey (NOTAM-sourced) — verify against current AIRAC |
| 23L | 3,000 × ~45 m | Not confirmed 🟧 | 2,696 m | 2,756 m | ~2,997 m | 2,696 m | Opposite direction of 05R; same source states matching TORA/TODA/LDA. ILS CAT II/III; VOR; RNAV(GPS) |
| 05L | 2,700 × ~45 m | Not confirmed 🟧 | Not published — verify 🟧 | — | — | — | **Shorter runway, restricted use.** ILS/LOC (CAT I only — no CAT II/III); NDB; RNAV(GPS). A380 excluded |
| 23R | 2,700 × ~45 m | Not confirmed 🟧 | Not published — verify 🟧 | — | — | — | Opposite direction of 05L. **No ILS published this end** — VOR; RNAV(GPS) only. A380 excluded |

*Runway surface/PCN not confirmed from reachable sources. Declared distances for 05R/23L per a NOTAM referencing a "new survey"; treat as provisional pending direct AIP confirmation — the ~300 m gap between physical length and TORA is a genuine planning-relevant figure, not a rounding artefact. 05L/23R declared distances not found in any reachable source. All distances metric.* 🟧

---

## 8. Communications

| Service | Callsign | Frequency | Hours | Notes |
|---|---|---|---|---|
| ATIS | Düsseldorf ATIS | 123.780 | H24 (assumed) | |
| Delivery / Clearance | Düsseldorf Delivery | 121.780 (also 121.775 "CLD" listed by one source) | H24 (assumed) | Possible DEL/CLD split — verify 🟧 |
| Ground | Düsseldorf Ground / Rollkontrolle | 121.905 | H24 (assumed) | Operationally split East/West by checkpoint per SOP; discrete East/West frequencies not confirmed from a primary source 🟧 |
| Tower | Düsseldorf Tower / Turm | 118.305 | H24 (assumed) | |
| Approach / Director | Düsseldorf Approach (DLA) / Feeder (DLAT) | ~128.650 (Director); local-IFR contact ~128.555 per SOP | H24 (assumed) | Radar; exact discrete Approach/Departure split not fully confirmed 🟧 |
| De-icing coordinator | — | 135.225 | Seasonal | Two areas: East (used during 23-ops), West (used during 05-ops) |
| Centre / FIR | Langen Radar (ACC) | 128.550 | H24 | |
| AFIS (secondary) | Langen Information | 129.875 | — | Purpose/scope not fully confirmed 🟧 |

*Frequencies cross-checked between OurAirports and the VATSIM Germany knowledgebase (network-sim, corroboration only — see the source register); hours assumed H24 given the airport's hub scale but not independently confirmed. Emergency 121.5.* 🟧

---

## 9. Navaids

| Aid | Ident | Freq | Hours | Notes |
|---|---|---|---|---|
| VOR/DME | DUS | Not confirmed 🟧 | H24 (assumed) | On field, Düsseldorf |
| ILS localizers | DY / LI | Not confirmed 🟧 | H24 (assumed) | On-field idents per navaid index; mapping to 05R/23L and exact frequency not confirmed — verify current AIRAC |
| NDB | LMA | Not confirmed 🟧 | H24 (assumed) | "Lima" — used in SID/STAR/holding naming |
| VOR/DME | LJ | Not confirmed 🟧 | H24 (assumed) | Köln/Bonn, enroute cross-check |
| VOR/DME | MGB / MHV | Not confirmed 🟧 | H24 (assumed) | Mönchengladbach, enroute |

*Navaid idents identified via OpenNav's waypoint/navaid index for EDDL; frequencies and exact runway-end mapping are **not confirmed** from any reachable public source — genuine gap, verify against DFS AIP AD 2 EDDL before use.* 🟧

---

## 10. Arrival

- **Transition altitude / level:** **5,000 ft** (Germany-standard TA) — verify no local override on current chart.
- **Speed:** 250 KIAS < FL100 (standard), plus TMA-specific restrictions per chart.
- **Preferential runway logic:** Single-runway ops use the **southern/main runway (05R/23L)** for all movements (VFR circuit traffic may use the northern runway). High-traffic **segregated parallel ops**: departures south, arrivals north — **except the A380, which always lands on the southern/main runway regardless of direction** and requires no prior coordination for that assignment.
- **Notable procedure:** Per the operational SOP, **arriving aircraft should use transitions, directs, or vectors — published STARs should not be used**, as all STARs lead to the **DUS VOR** as their initial approach fix rather than a more efficient routing. 🟧 (network-sim SOP guidance — confirm applicability against the current AIP if this differs from your OFP routing)
- **Approaches (names only — verify minima on current AIRAC charts):**

| RWY | Approach | Notes |
|---|---|---|
| 05R | ILS CAT II/III, RNAV (GPS) | Main runway |
| 23L | ILS CAT II/III, VOR, RNAV (GPS) | Main runway |
| 05L | ILS/LOC (CAT I only), NDB, RNAV (GPS) | Shorter/restricted runway — no CAT II/III |
| 23R | VOR, RNAV (GPS) only | Shorter/restricted runway — **no ILS published** |

- **STARs (names only):** Transitions/holds referenced via **PISAP, HALME, BIKMU, DOMUX, ELDAR** and NDB **LMA** — fed via directs/vectors per the note above rather than flown as full published STARs.
- **LVP:** CAT II/III supported only on **05R/23L**. At RVR < 350 m, taxiway **K and L5** between RWY 05R and taxiway M are closed, and aircraft may not vacate 05R via L8 or 23L via L3.
- **Missed approach watch-items:** All missed approaches require **immediate coordination with the approach controller**; fly the standard published missed approach unless an alternate instruction (typically a heading) is issued. No terrain-driven MAP concern at this field.

---

## 11. Departure

- **SIDs (names only — fly the charted version):** Waypoint-named SID families incl. **COL (Cola), GMH (Germinghausen), KUMIK, LMA, MEVEL, MODRU, NETEX, NVO (Nörvenich), NUDGO, SONEB, DODEN** — designators **T and Z** are primary for the main runway (23L/05R).
- **RNP / climb-gradient requirements:** The **MODRU #K** SID requires a **9.5% climb gradient and RF-leg capability** — request only when able to comply, with prior coordination. **NETEX** is available only at night (2200–0600) and on weekends/holidays due to military airspace activation in the EBBU FIR to the north.
- **Take-off minima:** Not confirmed in reachable sources — verify current AIRAC. 🟧
- **Start-up / push-back:** Delivery issues a **combined enroute + start-up clearance**. Heavy aircraft push onto taxiway **T or P4 only** (not into the terminal bays); medium aircraft may push facing north/south/east/west onto **Y, T, P4 or R** to allow multiple simultaneous pushbacks.
- **ATC slot / CTOT & clearance:** Slot-coordinated field; per operational SOP, average time from start-up approval to take-off clearance runs **10–15 min (05-ops)** to **15–20 min (23-ops)** — broadly consistent with the K Global taxi-out planning figure (16 min). 🟧
- **De-icing:** Two dedicated areas — **East** (used during 23-ops) and **West** (used during 05-ops) — with per-position code-letter limits from Code C to Code F; coordinator frequency 135.225.

---

## 12. Noise & Environmental

- **Noise abatement (NAP):** Standard noise-routing SIDs; the MODRU/NETEX routing and military-airspace timing constraint (§11) are the notable operational features. Detail beyond this not confirmed in reachable sources. 🟧
- **Night noise / dB limits:** A hard core no-movement window **00:00–05:00** (emergency/rescue only) is consistently reported across secondary sources; a broader restricted band in the 2200–0600 range (with some sources citing a 2200–2300 departure restriction and a 2300/2330–0600 arrival restriction) is reported with some inconsistency — **verify exact current boundary times against AIP/NfL before planning a night rotation.** 🟧
- **Engine run-up restrictions:** Not confirmed in reachable source. 🟧
- **Reverse thrust / idle-reverse policy:** Not confirmed in reachable source. 🟧

---

## 13. Ground operations

- **Stands for our types:** **Terminal A** — hub-carrier and alliance-partner flights, both Schengen and Non-Schengen. **Terminal B** — Schengen only. **Terminal C** — Non-Schengen only. **A380 limited to a single stand** (gate C02A per third-party operational reference); a small number of additional stands are A380-capable but not consistently modelled. 🟩
- **Push-back:** **Mandatory for heavy aircraft**, which must push onto taxiway T or P4 (not into the terminal bays); medium aircraft may push facing N/S/E/W onto Y, T, P4 or R, enabling up to three simultaneous pushbacks.
- **Standard taxi routes:** Taxiway **M** runs toward the active runway's holding point; taxiways **P1–P4** connect the apron to M. Ground is split **East/West** with checkpoint-based hand-off, coordinated as early as possible to avoid unnecessary stops.
- **Hot spots / tight taxiways:** The **apron-to-taxiway-M intersections (P1–P4)** are the most common ground conflict points. The holding point at **L9** is reported as congested during 05-ops. Wingspan-banded mutual restrictions apply: **Twy P1/L5** (mutually restricted to max A330/A343-class, ~60.5 m, when a B744/B777/A350-class aircraft occupies the other); **Twy M and T/T1 between P1–L9** (restricted to A310/B757-class when an A380 occupies the other, parallel taxi limited to ≤65 m wingspan); **Twy M/T at L3** (Code C max); **Twy L1/L2** (Code E max, overtaking limited to A330/A343-class). GA apron reached via **taxiway H only**, max 29 m wingspan. 🟥
- **Follow-me:** Not confirmed in reachable source — verify locally. 🟧

---

## 14. Weather & seasonal (durable)

- **Climate / prevailing wind:** Temperate, maritime-influenced Rhine-valley climate; typical Western European frontal weather patterns.
- **Seasonal hazards:** No distinctive seasonal hazard specific to this field was confirmed in reachable sources — regional NW-European patterns (frontal wind/rain, occasional winter fog/low cloud and snow) are plausible but **unconfirmed for EDDL specifically**; verify against the current AIP climatological table. 🟧
- **Local effects:** The Rhine river runs adjacent to the field and is used as a VFR landmark; no specific terrain-wind effect documented.

> **Live weather — pull at planning (T-2h):** METAR, TAF, TREND, SIGMET/AIRMET. Not stored here.

---

## 15. NOTAMs

> **Pull at planning (T-2h).** Perishable — not stored here. Check specifically: active runway configuration (single vs. segregated-parallel), current ILS/CAT status on 05R/23L, 23R approach availability (no ILS by design — confirm no temporary upgrade), de-icing area status, night-noise NOTAMs, MODRU #K / NETEX SID availability (military-airspace-dependent), and current declared distances on 05R/23L against the re-survey figures in §7. Source: official AIS / OFP NOTAM block.

---

## 16. Fuel & alternate planning notes

- **Typical role for us:** Destination / alternate — EDDL's own K Global-preferred alternates are **EHAM, EDDF, EBBR**; taxi-in 14 min / taxi-out 16 min `[VAMSYS mirror 2026-07-25]the section templates_Sources.md` for all other content, flagged where used. Source for runway-pair geometry/segregated-ops logic, taxiway/hot-spot detail, de-icing areas, SID/climb-gradient requirements, and the STARs-not-used operational note.*
- SKYbrary — Düsseldorf — https://skybrary.aero/airports/eddl (retrieved 2026-07-25). *ARP/elevation cross-check.*

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-14 | Baseline stub — position/elevation seeded from Navigraph navdata; destination status, base flag, taxi times, category and alternates pending VAMSYS reconciliation. |
| v0.2 | 2026-07-25 | Built from DFS eAIP; K Global fields from live VAMSYS. Full 18-section rebuild: DFS eAIP unreachable (JS-rendered) — cross-checked OpenNav/OurAirports/Wikipedia/SKYbrary/VATSIM Germany knowledgebase (incl. direct AIP Germany/AD 2 EDDL citations for separation minima) instead. Confirmed the closely-spaced asymmetric runway pair (05R/23L main with ILS CAT II/III, 05L/23R shorter/restricted with no ILS on the 23R end and A380 exclusion); built TEM around segregated-parallel operation and a NOTAM-sourced declared-distance re-survey showing a ~300 m TORA gap below physical length. K Global fields applied: Category R, Base no, preferred alternates EHAM/EDDF/EBBR, taxi-in 14 min / taxi-out 16 min. RFF category, PCN, mag variation, 05L/23R declared distances, exact night-regime boundary times, and an ARP coordinate discrepancy (~1 km vs. the navdata seed used elsewhere) remain open 🟧 items per §18. Folded to 4-page pack 2026-07-25 — Dispatch, Departure and Arrival pages split out into `EDDL — Duesseldorf/`; this Briefing's content otherwise unchanged; relative links re-based one level deeper. |
