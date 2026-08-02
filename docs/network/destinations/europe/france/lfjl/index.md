# LFJL — Metz-Nancy-Lorraine · Airport Briefing

**LFJL / ETZ** · Metz-Nancy, Lorraine (Grand Est), France · Europe
**Version** v0.1 · **Updated** 2026-07-26 · **Status** Draft

> **Read-me:** Planning aid for the sim, not a chart. Static data is drawn from the SIA France eAIP (AD 2 LFJL); approaches/SIDs/STARs are listed **by name only** — fly the charted current-AIRAC version. Live weather/NOTAMs are pulled at planning (§14/§15). Open 🟧 items are listed in §18. Flag legend 🟥 restriction/hazard · 🟧 caution/unverified · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| ARP (lat/long) | 48°58′42″N / 006°14′48″E (48.9783, 6.2467) — at the intersection of the runway centreline and the taxiway in front of the control tower |
| Field elevation | **870 ft AMSL** (reference temperature 23.7°C; geoid undulation 154 ft) |
| Mag variation | **2.8775° E** (2025 epoch, annual change +0.131°/yr) |
| Time zone | UTC+1 (CET) / UTC+2 (CEST, EU DST observed) |
| Runway(s) | **04/22** — single pair, 3,050 × 45 m, bituminous concrete, PCN 69 F/C/W/T |
| Preferential runway | No published wind rule beyond the hard crosswind gate (§3.4); **RWY 22 is the field's only precision-approach runway** (ILS/LOC ident MLY, CAT II lighting) versus RWY 04 (NDB/RNP only, basic non-precision lighting) — confirm ATIS for runway-in-use. 🟧 |
| Longest LDA | 3,050 m (RWY 22); RWY 04 LDA reduced to 2,847 m by the 860 ft displaced threshold |
| Approaches | **NDB, RNP (RWY 04 — no ILS)**; **ILS/LOC CAT III ident MLY, RNP, NDB X/Y/Z, conventional initial approach to MTZ/GTQ (RWY 22)** — see §9/§10 |
| RFF category | 🟥 **Level 7** conditional by schedule/request; **Level 5** weekday daytime window; **RFFS NOT provided at all outside all published windows** — see §6 |
| Control type | Scheduled-hours ATS (not H24), **secondary-radar display only** (no primary radar) — radar-assisted, not fully radar-controlled; reverts to uncontrolled/AFIS-type outside ATS hours (A/A self-announce) |
| Elevation class | Near sea-level (870 ft) — **not** hot-and-high; non-issue for performance 🟩 |
| Special-airport status | 🟥 Hard **crosswind-limit gate** (20 kt wet / 25 kt dry) on the only runway pair; mandatory CAT II/III vacate via TWY C at 1,200 m; prohibited to gliders/ULM classes 1, 2, 4, 5 — see §5 |
| Customs / PoE | On request, 24 h prior notice — not a walk-up Port of Entry 🟧 |
| K Global category | **Not set** `[VAMSYS mirror 2026-07-26]` 🟧 |
| K Global base | **No** `[VAMSYS mirror 2026-07-26]` |
| Company preferred alternates | **Not set in VAMSYS** 🟧 — destination register shows **ELLX** (Luxembourg), **LFSB** (Basel-Mulhouse) and **EBLG** (Liège) as candidate alternates for this field, not a confirmed "preferred alternates" entry `[VAMSYS mirror 2026-07-26]` |
| Taxi-in / taxi-out (VAMSYS) | **n/a** — not set in VAMSYS `[VAMSYS mirror 2026-07-26]` 🟧 |

---

## 2. Validation summary

| Domain | Flag | Note |
|---|---|---|
| Terrain / CFIT | 🟩 | No significant close-in high terrain reported in this AD 2 extract. Ground-strip negative transverse slopes and drainage ditches near the RWY 04 threshold are an off-pavement excursion consideration (§3.3), not a CFIT/terrain factor. Not independently cross-checked against a dedicated obstacle chart 🟧. |
| Runway length vs fleet perf | 🟧 | The single 3,050 × 45 m runway pair is ample for narrowbody/regional-jet operations; K Global category and base status are not set in VAMSYS, so a fleet-specific fit is not independently confirmed — see §16/§17. |
| Approach availability / minima | 🟥 | RWY 04 has **no ILS** (NDB/RNP only); RWY 22 is the field's sole precision runway (LOC ident MLY, CAT III designation, CAT II approach lighting) — a real asymmetry: if wind/weather favour RWY 04 in low visibility, no precision approach is available on that end. |
| Airspace / traffic / control | 🟧 | ATS operates scheduled hours only (not H24); the aerodrome carries a secondary-radar display only (not primary radar) — a radar-assisted, not fully radar-controlled, environment; outside ATS hours the field reverts to an uncontrolled/AFIS-type environment. |
| Weather / seasonal hazard | 🟥 | An explicit AIP-published hard crosswind limit prohibits RWY 04/22 use above 20 kt crosswind on a wet runway or 25 kt on a dry runway — an unusually explicit hard wind gate for this field. No separate seasonal-climatology statistic captured in this extract. |
| Curfew / slots / hours | 🟧 | No slot-coordination regime found — reasonably an uncoordinated/Level 1 field. ATS hours are Mon–Fri 0445–2100, Sat 0445–1900, Sun 0800–2100 (phone-derogation possible). No noise abatement procedures are currently published — an open item, not a confirmed absence of any operational restriction. |
| RFF category vs our types | 🟥 | RFF Level 7 applies only within specific scheduled/conditional windows (Level 5 weekday daytime, extendable by request); **RFFS is not provided at all outside all published windows** — a hard go/no-go gate for any movement outside those hours. |
| Fuel availability | 🟧 | JET A1 (CIV-MIL) only, available for scheduled commercial aircraft; outside these windows, fueling requires contacting the AD operator with a possible standby fuel-tender arrangement — not a guaranteed H24 service. |
| Customs / handling / security | 🟧 | Customs/police available on request only, 24 h prior notice — not a walk-up Port of Entry. Handling is via the AD operator with no named handling agent; security is provided by SAS GAEA SECURITE. |

---

## 3. Threat & Error Management (TEM)

### 3.1 CFIT / Terrain 🟩
LFJL sits at 870 ft AMSL with no significant close-in high terrain reported in the available AD 2 data. The one ground-related caution in the extract is not a terrain/CFIT item but an off-pavement excursion consideration: negative transverse slopes (−7.3% to −15.8%) in the runway strip west of the RWY 04 threshold, between 75–150 m from the centreline (roughly a 7 m altitude difference across that width), and drainage ditches running along the runway strip approximately 75 m either side of the centreline for the full runway length (see §3.3/§7). This CFIT assessment has not been independently cross-checked against a dedicated obstacle chart — treat as 🟧 pending that check.

### 3.2 Airborne conflict / traffic 🟧
CTR LORRAINE is Class D, surface to 3,000 ft AMSL, served by Lorraine Tour/Tower; real-time activity of the sector is also carried on Lorraine ATIS and on Strasbourg Information broadcasts. ATS at LFJL is **not H24** — hours are Mon–Fri 0445–2100, Sat 0445–1900, Sun 0800–2100 (phone-derogation possible, 24 h prior notice) — and the approach/tower/ground frequencies are HX/HO (active only during specific operational hours). Outside those hours the field reverts to an **uncontrolled/AFIS-type environment**, with the A/A "Lorraine" frequency (122.075, HX) used for self-announce traffic. The aerodrome carries a **secondary-radar display only** (no primary radar) — a radar-assisted, not fully radar-controlled, environment. LFJL sits under **Reims ACC (LFEE)** in the French upper-airspace structure for eastern/north-eastern France; see [Europe airspace brief](../../../../airspace/europe.md) — **no dedicated K Global FIR brief exists yet for Reims (LFEE)**, flagged as an open item (§18).

### 3.3 Runway excursion 🟥
RWY 04's LDA (2,847 m) is reduced against its 3,050 m TORA/TODA/ASDA by the 860 ft displaced threshold — brief the correct landing distance, not the full runway length. The ground-strip negative transverse slopes and drainage ditches noted in §3.1/§7 are off-pavement excursion hazards relevant to any runway-excursion scenario, particularly on RWY 04. The field's own AIP publishes an unusually explicit **hard crosswind limit: use of RWY 04/22 is prohibited whenever crosswind exceeds 20 kt on a wet runway or 25 kt on a dry runway** — a genuine excursion-prevention gate, not merely advisory guidance, and should be briefed as a hard limit on every approach/departure into marginal crosswind. Additionally, **CAT II/III precision landings on RWY 22 must vacate via TWY C, located 1,200 m from the threshold — a mandatory vacate point**, not optional; plan the rollout/braking profile accordingly.

### 3.4 Weather threat 🟥
The AIP-published hard crosswind limit (20 kt wet / 25 kt dry, §3.3 above) is the field's single most explicit weather-driven operational gate — an unusually specific, AIP-mandated restriction rarely stated this plainly. LVP is triggered when RVR ≤ 800 m or ceiling ≤ 200 ft, with RFFS presence systematic during LVP, and minimum takeoff RVR is published by category (150 m for CAT A/B/C, 200 m for CAT D, or 800 m if ATS is not active); RWY 22 specifically permits LVTO with RVR < 150 m. No separate seasonal-climatology statistic (fog frequency, prevailing wind) was captured in this AD 2 extract — treat as 🟧 pending a dedicated seasonal source.

### 3.5 Operational considerations 🟥
Plan around several durable constraints: (1) **RFFS is not provided at all outside the published RFF windows** (§6) — a hard go/no-go gate rather than a mere capability downgrade; (2) ATS is **not H24** and the field becomes an uncontrolled/AFIS-type environment outside scheduled hours; (3) general-aviation apron access (both from the manoeuvring area and from the terminal) requires **48 h prior request by phone**, and parking on apron "P" requires prior request before takeoff except for scheduled commercial flights; (4) the **RWY 22 turn-around area** requires a special AD-administration-coordinated procedure for any aircraft above Code C; (5) TWY T1/T2 are limited to Code E aircraft with a main-gear width ≤ 13.77 m; (6) the aerodrome is **prohibited to gliders and to ULM classes 1, 2, 4 and 5**; and (7) **no noise abatement procedures are currently published** for LFJL (the AD 2 LFJL.21 heading exists with no content under it) — this is an open item, not a confirmed absence of any operational noise constraint.

---

## 4. Cautions & Warnings

- **Hard AIP-published crosswind limit:** RWY 04/22 use is PROHIBITED above 20 kt crosswind on a wet runway or 25 kt on a dry runway — brief as a hard gate, not guidance. 🟥
- **RFFS is NOT provided at all outside the published RFF windows** — treat as a hard go/no-go item, not merely a category downgrade. 🟥
- **RWY 04 has no ILS** — NDB/RNP only; **RWY 22 is the sole precision runway** (LOC ident MLY, CAT III designation, CAT II approach lighting).
- **CAT II/III precision landings on RWY 22 must vacate via TWY C at 1,200 m from the threshold** — mandatory, never optional. 🟥
- Stop bars used during LVP must never be crossed, even on ATC instruction.
- Aerodrome **prohibited to gliders and ULM classes 1, 2, 4 and 5**. 🟥
- **No noise abatement procedures are currently published** for LFJL — an open item, not a confirmed absence of any curfew/restriction. 🟧
- Ground-strip negative transverse slopes and drainage ditches either side of the runway — an off-pavement excursion hazard, particularly near the RWY 04 threshold. 🟧
- **ATS is not H24** — outside Mon–Fri 0445–2100 / Sat 0445–1900 / Sun 0800–2100, the field becomes uncontrolled/AFIS-type; use A/A "Lorraine" 122.075.
- The 127.250 MHz Approach/VDF frequency also serves **Épinal-Mirecourt and Nancy-Essey** — do not assume it is LFJL-exclusive.

---

## 5. Aerodrome category, restrictions & crew qualification

- **Special-airport / category:** Not operator-categorised as a restricted-crew "special airport" in the source data; the standing crew-briefing items are the **hard crosswind gate**, the **RWY04-no-ILS/RWY22-only-precision asymmetry**, and the **mandatory CAT II/III vacate via TWY C**. 🟥
- **Crew-qualification gate:** CAT II/III currency required to exploit RWY 22's full low-visibility capability (the sole ILS runway, LOC ident MLY); RWY 04 has no ILS capability regardless of crew currency — confirm crew/aircraft currency before planning a low-vis arrival. 🟧
- **Operating restrictions / bans:** Aerodrome prohibited to gliders and ULM classes 1, 2, 4 and 5 🟥; RWY 04 approach limited to NDB/RNP (no ILS); hard crosswind limit 20 kt wet / 25 kt dry on RWY 04/22 🟥; GA apron/parking access requires 48 h prior request by phone; RWY 22 turn-around area requires a special AD-administration procedure for aircraft above Code C. No RNP AR ban or circling restriction found in the source data — verify current AIRAC. 🟧
- **Overflight / entry / permits:** Customs/police available on request only, 24 h prior notice — not a walk-up Port of Entry 🟧; standard EU/Schengen international arrival otherwise, no special state permit required.
- **Operations notes:** Traffic — IFR and VFR. Administrator — **EPMNL (Établissement Public aéroport Metz-Nancy-Lorraine)**; main assignee abbreviated "CAA" in the source extract — a French civil-aviation administrative designation, not expanded in the source extract; do not assume this is the UK CAA 🟧. Security — **SAS GAEA SECURITE**. De-icing — 1 Vestergaard-type de-icing truck. Handling — contact AD operator, no named handling agent.

---

## 6. General / hours / services

| Item | Value | Flag |
|---|---|---|
| ATS hours | Mon–Fri 0445–2100; Sat 0445–1900; Sun 0800–2100; derogation possible by phone, 24 h prior notice | 🟧 |
| AD operating hours | Per scheduled commercial flights, all days | 🟩 |
| Night / curfew restrictions | No noise abatement procedures currently published for LFJL (AD 2 LFJL.21 heading exists, no content) | 🟧 |
| RFF category | **Level 7** for any scheduled commercial Class-6 passenger aircraft; unscheduled commercial Class-6 passenger aircraft — Level 7 available 0800–2300 with 72 h prior request. **Level 5** Mon–Fri 0800–1800 (except holidays and the day before a holiday), extendable to 2300 with 72 h prior request (MEDEVAC/organ-donation flights must request before 1800). **RFFS is NOT provided at all outside all these windows.** | 🟥 |
| Fuel | JET A1 (CIV-MIL) only; available for any scheduled commercial aircraft; outside these windows, contact the AD operator (possible standby fuel-tender arrangement) | 🟧 |
| PCN | 69 F/C/W/T (bituminous concrete, RWY 04/22) | 🟩 |
| Customs | On request, 24 h prior notice | 🟧 |
| Handling / FBO | Contact AD operator — no named handling agent | 🟧 |

---

## 7. Runways & declared distances

| RWY | Dimensions | Surface / PCN | TORA | TODA | ASDA | LDA | Notes |
|---|---|---|---|---|---|---|---|
| 04 | 3,050 × 45 m | Bituminous concrete / PCN 69 F/C/W/T | 3,050 m | 3,050 m | 3,050 m | 2,847 m | THR elevation 858 ft; DTHR 860 ft; RESA 204 × 90 m both ends; intersection departure from TWY C: TORA/TODA/ASDA 1,820 m each; **no ILS** — NDB/RNP only; basic (non-precision) approach lighting; PAPI 3.0°/5.2%, MEHT 75 ft |
| 22 | 3,050 × 45 m | Bituminous concrete / PCN 69 F/C/W/T | 3,050 m | 3,050 m | 3,050 m | 3,050 m | THR elevation 861 ft; RESA 204 × 90 m both ends; intersection departures from TWY B (2,470 m) and TWY C (1,270 m), TORA/TODA/ASDA each; **sole ILS/precision runway** (LOC ident MLY, 111.75, CAT III designation); CAT I approach lighting (900 m, LIH) + CAT II lighting (300 m, LIH) + touchdown-zone lighting (white, HI); PAPI 3.0°/5.2%, MEHT 59 ft; **mandatory CAT II/III vacate via TWY C at 1,200 m from threshold** 🟥 |

*Ground note: negative transverse slopes (−7.3% to −15.8%) exist in the runway strip west of the RWY 04 threshold, between 75–150 m from centreline (~7 m altitude difference); the ILS RWY 22 glidepath antenna sits 119 m from the runway centreline; drainage ditches run along the runway strip roughly 75 m either side of the centreline for the full runway length — ground/off-pavement-excursion caution items, see §3.1/§3.3. 🟧*

*Source: SIA France eAIP — AD 2 LFJL, eff. 14 MAY 2026, AIRAC 09 JUL 2026 (retrieved 2026-07-26). All distances in metres.*

---

## 8. Communications

| Service | Callsign | Frequency | Hours | Notes |
|---|---|---|---|---|
| ATIS | Lorraine | 136.580 | HO | |
| Ground | Lorraine Sol | 121.705 | HO | |
| Tower | Lorraine Tour | 122.075 | HO | Doubles as A/A self-announce frequency (122.075, HX) when ATS is not active |
| Approach | Lorraine Approche | 119.125 (HX — LFJL inbound/outbound traffic) · 127.250 (HX — also serves Épinal-Mirecourt and Nancy-Essey) | HX | |
| VDF | Lorraine Gonio | 119.125 / 122.075 / 127.250 | — | 127.250 VDF unavailable outside Nancy-Ochey military field hours |
| Centre / FIR | Reims ACC (LFEE) — upper handoff | Per current AIRAC | H24 | No dedicated K Global FIR brief yet — see [Europe airspace brief](../../../../airspace/europe.md) 🟧 |

*Strasbourg Information (FIS) also broadcasts LFJL activity status when Lorraine ATS is not active. Traffic surveillance is via a secondary-radar display only (no primary radar) — a radar-assisted, not fully radar-controlled, environment.*

*Source: SIA France eAIP — AD 2 LFJL, eff. 14 MAY 2026, AIRAC 09 JUL 2026 (retrieved 2026-07-26).*

---

## 9. Navaids

| Aid | Ident | Freq | Hours | Notes |
|---|---|---|---|---|
| NDB | LOU | 388 kHz | H24 | |
| NDB | MTZ | 354 kHz | H24 | |
| LOC (ILS) RWY 22 | MLY | 111.75 MHz | H24 (assumed, not independently confirmed) 🟧 | CAT III designation; operational sub-category (IIIA/IIIB) not independently confirmed 🟧 — RWY 22 is the field's **only** ILS-equipped runway |
| GP RWY 22 | — | 333.35 MHz | — | Slope 3° |
| DME RWY 22 | CH54Y | — | — | |

*RWY 04 has no ILS — NDB and RNP approaches only. Source: SIA France eAIP — AD 2 LFJL, eff. 14 MAY 2026, AIRAC 09 JUL 2026 (retrieved 2026-07-26).*

---

## 10. Arrival

- **Transition altitude / level:** Not independently confirmed for LFJL in this pass 🟧 — regional Lorraine-area convention likely mirrors the 7,000 ft transition-altitude pattern seen at neighbouring fields (e.g. LFST), but this is not asserted as a sourced fact for LFJL specifically.
- **Speed:** Standard 250 KIAS below FL100 (EU/ICAO norm) — confirm current chart. 🟧
- **Preferential runway logic:** Single 04/22 runway pair; runway-in-use is wind-driven within the hard crosswind gate (20 kt wet / 25 kt dry, §3.3/§3.4). In marginal visibility, RWY 22 is the field's only precision-approach option (ILS/LOC ident MLY, CAT II lighting) versus RWY 04 (NDB/RNP only, basic non-precision lighting) — confirm ATIS for the runway/config in use.
- **Approaches (names only — verify minima on current AIRAC charts):**

| RWY | Approach | Notes |
|---|---|---|
| 04 | NDB, RNP | No ILS; non-precision only |
| 22 | ILS/LOC (MLY, CAT III designation); conventional initial approach to MTZ/GTQ; RNP; NDB X/Y/Z; dedicated minima chart | Sole precision runway; CAT II/III arrivals must vacate via TWY C at 1,200 m from threshold 🟥 |

- **STARs (names only):** A single conventional STAR construct applies across all runways — no distinctive public name beyond the generic conventional STAR in the reachable extract; verify current AIRAC. 🟧
- **LVP:** Applied when RVR ≤ 800 m or ceiling ≤ 200 ft; RFFS presence systematic during LVP; stop bars used during LVP and must not be crossed even on ATC instruction; minimum takeoff RVR by category CAT A/B/C 150 m, CAT D 200 m (or 800 m if ATS is not active); RWY 22 permits LVTO with RVR < 150 m.
- **Missed approach watch-items:** No significant close-in high terrain identified for this field (🟩, not independently cross-checked against an obstacle chart 🟧); the operative missed-approach concern is the non-H24/secondary-radar-only airspace environment (§3.2) rather than terrain.

---

## 11. Departure

- **SIDs (names only — fly the charted version):** Conventional SID RWY 04 / RWY 22 — no distinctive public name beyond "conventional" in the reachable extract; fly the current AIRAC chart. An omnidirectional (non-RNAV) departure procedure is AIP-published for each runway: **RWY 04** climbs on magnetic heading 037° at a 6.5% gradient (imposed to clear danger area LF-R45) to 2,000 ft (1,130 ft AAL), then continues direct routing climbing at 6.5% to the first assigned level — contingency, if 6.5% cannot be maintained: advise ATC, climb runway heading at 3.5% instead (a reduced gradient set by trees 1,300 m from the departure end of runway on the 037° bearing), then at 4.5 NM from MLY turn right toward NDB LOU climbing to 2,700 ft (1,830 ft AAL), then direct from LOU climbing to en-route safe altitude or the first assigned level. **RWY 22** is usable only on APP clearance, with no turn before the departure end of runway; the west sector climbs on magnetic heading 217° to 2,000 ft (1,130 ft AAL) before direct routing, while the east sector climbs on the same 217° heading at a 5% gradient (also for LF-R45 clearance) to 2,000 ft (1,130 ft AAL) before continuing at 5% to the first assigned level — contingency: advise ATC, climb runway heading, then at 5.4 NM from MLY turn left toward NDB LOU climbing to 2,700 ft (1,830 ft AAL), then direct from LOU climbing to en-route safe altitude or the first assigned level. Verify exact headings, gradients and altitudes, and any AIRAC changes, on the current chart before use.
- **RNP / climb-gradient requirements:** RNP approach charts are published for both runways (RNP CODE/FASDB data); the conventional omnidirectional departures above carry explicit danger-area (LF-R45) climb-gradient requirements — see current chart. See [`OM E — PBN and RNP Operations`](../../../../../flight-ops/pbn-and-rnp-operations.md).
- **Take-off minima:** LVTO RVR by category — CAT A/B/C 150 m, CAT D 200 m (or 800 m if ATS is not active); RWY 22 specifically permits LVTO with RVR < 150 m. 🟥 The ATS-not-active penalty is a real operational trap — confirm ATS status before relying on the lower category minima.
- **Start-up / push-back:** Contact the AD operator / Lorraine Sol (Ground, 121.705 HO); no cross-bleed/APU notification specifics published. 🟧
- **ATC slot / CTOT & clearance:** No slot-coordination regime found in this extract — reasonably treated as uncoordinated (no IATA slot level published), consistent with a small regional field operating scheduled, non-H24 ATS hours. 🟧
- **De-icing:** Provided — 1 Vestergaard-type de-icing truck; season not specified in the source extract. 🟧 See [`OM E — Cold Weather Operations`](../../../../../flight-ops/cold-weather-operations.md).

---

## 12. Noise & Environmental

- **Noise abatement (NAP):** No noise abatement procedures are currently published for LFJL — the AD 2 LFJL.21 "Noise Abatement Procedures" section exists as a heading in the current AIP but carries no published content under it. 🟧 Do not infer or assume a curfew from this absence.
- **Night noise / dB limits:** None published. 🟧
- **Engine run-up restrictions:** Not published / verify. 🟧
- **Reverse thrust / idle-reverse policy:** Not published / verify. 🟧

---

## 13. Ground operations

- **Stands for our types:** Not published / verify — no stand/apron layout detail beyond the apron "P" parking restriction captured in this extract. 🟧
- **Push-back:** Not published / verify. 🟧
- **Standard taxi routes:** TWY T1 and T2 are limited to Code E aircraft with a main-gear width ≤ 13.77 m; TWY B and TWY C serve intersection departures (§7).
- **Hot spots / tight taxiways:** 🟥 **RWY 22 turn-around area** — aircraft above Code C require a special procedure via the AD administration by phone. TWY T1/T2 gear-width limit is a real caveat for our larger Code E types. 🟧
- **Follow-me:** Not published / verify. 🟧
- **GA apron/parking access:** Manoeuvring-area access (aircraft) and terminal access (pilots/passengers) both require 48 h prior request by phone. Parking on apron "P" requires prior request before takeoff by phone, except for scheduled commercial flights.

---

## 14. Weather & seasonal (durable)

- **Climate / prevailing wind:** Not published / verify beyond the crosswind-limit rule itself — no prevailing-wind statistic captured in this AD 2 extract. 🟧
- **Seasonal hazards:** No specific seasonal-hazard statistic captured in this extract beyond the LVP fog/ceiling trigger (RVR ≤ 800 m or ceiling ≤ 200 ft, §3.4/§10). 🟧
- **Local effects:** Ground-strip negative transverse slopes and drainage ditches (§3.1/§3.3/§7) are a ground-condition caveat, not a weather effect.

> **Live weather — pull at planning (T-2h):** METAR, TAF, TREND, SIGMET/AIRMET. Not stored here.

---

## 15. NOTAMs

> **Pull at planning (T-2h).** Perishable — not stored here. Check: runway/taxiway closures, current RFF-window status (given the hard RFFS-not-provided-outside-windows gate, §6), stop-bar/LVP status, ILS (MLY) status (RWY 22 is the field's sole precision runway), lighting, obstacle/crane, LF-R45 danger-area activity status (relevant to the RWY 04/22 departure climb-gradient requirement, §11), GPS/RAIM for RNP procedures. Source: official AIS / OFP NOTAM block.

---

## 16. Fuel & alternate planning notes

- **Typical role for us:** Not set in VAMSYS — Base: **No**; K Global category: **not set** — role in the network is undetermined pending a route/fleet assignment. 🟧 `[VAMSYS mirror 2026-07-26]`
- **Nearest suitable alternates:** Not set in VAMSYS as a confirmed "preferred alternates" field 🟧 — the destination register lists **ELLX** (Luxembourg), **LFSB** (Basel-Mulhouse) and **EBLG** (Liège) as candidate alternates for this field `[VAMSYS mirror 2026-07-26]`; treat as the working alternate set, not a confirmed field — confirm suitability, runway/RFF adequacy and current minima per leg.
- **Fuel-uplift notes:** JET A1 (CIV-MIL) only, available for scheduled commercial aircraft; outside these windows, fueling requires contacting the AD operator with a possible standby fuel-tender arrangement. 🟧 See [`OM E — Fuel Policy`](../../../../../flight-ops/fuel-policy.md).
- **Range/perf flags for our fleet:** The 3,050 × 45 m runway pair is non-limiting for narrowbody/regional-jet operations; K Global category and base status are not set in VAMSYS (§1), so a fleet-specific fit is not independently confirmed. See [`OM B — Fleet Capability Matrix`](../../../../../fleet/capability-matrix.md). 🟧

---

## 17. Fleet-specific notes (optional)

- No fleet-specific consideration is confirmed for LFJL beyond the general runway-length adequacy noted in §16; K Global category and base status are not set in VAMSYS (§1) — revisit fleet-specific notes once a route/fleet assignment exists. The operative planning drivers at this field for any assigned type are the hard crosswind gate (§3.3/§3.4), the RWY04-no-ILS/RWY22-only-precision asymmetry (§9/§10), and the RFFS-not-provided-outside-windows gate (§6), rather than field length or elevation. See [`OM B — Fleet Capability Matrix`](../../../../../fleet/capability-matrix.md).

---

## 18. Open items (🟧 — confirm against AIP / current AIRAC)

- **K Global VAMSYS fields** — category, base role and preferred-alternates field are not set; the destination register's ELLX/LFSB/EBLG candidate-alternate list is not a confirmed "preferred alternates" entry. Taxi-in/taxi-out times also not set.
- **Transition altitude/level and altimeter-setting reference** — not independently confirmed for LFJL specifically in this pass.
- **ILS (MLY) sub-category** (IIIA/IIIB/IIIC) — not confirmed from a primary AIP category table.
- **SID/STAR/IAC current public chart names** — only generic descriptions confirmed ("conventional SID RWY04/22", a single conventional STAR construct); pull the live current-AIRAC procedure list before use.
- **Take-off minima table figures** beyond the LVTO RVR-by-category figures given — not published / verify.
- **Stand/apron layout** beyond the apron "P" parking restriction — not published in the reachable extract.
- **Push-back policy, reverse-thrust/idle-reverse policy, follow-me availability, engine run-up specifics** — none confirmed.
- **De-icing season/provisioning detail** beyond "1 Vestergaard-type truck" — not published.
- **Prevailing wind / seasonal-climatology statistics** — not captured in this extract.
- **Administrator assignee abbreviation "CAA"** — not expanded in the source extract; do not assume this is the UK CAA.
- **Slot-coordination level** — assumed uncoordinated/Level 1; not independently confirmed.
- **Noise abatement procedures** — none currently published (AD 2 LFJL.21 heading exists, no content); flagged as an open item, not assumed absent operationally.
- **No dedicated K Global FIR brief exists yet for Reims (LFEE)** — see the Europe airspace general page in the interim.
- **CFIT/terrain assessment (🟩)** — not independently cross-checked against a dedicated obstacle chart.

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim material (current-AIRAC charts) informs content but is not listed here.*

- **SIA France eAIP — AD 2 LFJL**, eff. 14 MAY 2026, AIRAC 09 JUL 2026 (retrieved 2026-07-26) — https://www.sia.aviation-civile.gouv.fr/ (eAIP France portal; AD 2 LFJL section within the current AIRAC package). *Runway/declared distances, PCN, navaids, communications, ATS hours, CTR structure, LVP/crosswind restrictions, RFF, ground operations, flight/departure procedures.*

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-26 | Built from SIA France eAIP; K Global fields from live VAMSYS; 4-page pack. |
