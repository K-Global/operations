# EDDH — Hamburg · Airport Briefing

**EDDH / HAM** · Hamburg, Germany · Europe
**Version** v0.2 · **Updated** 2026-07-25 · **Status** Draft — built from DFS eAIP-derived public data + tier-4 corroboration; several items unverified, see §18

> **Read-me:** Planning aid, not a chart. Static data is drawn from DFS eAIP-derived public mirrors (OurAirports/SkyVector) and cross-checked against VATSIM-Germany operational documentation; approaches/SIDs/STARs are listed **by name only where confirmed** — fly the charted current-AIRAC version. Live weather/NOTAMs are pulled at planning (§14/§15). Open 🟧 items are listed in §18. Flag legend 🟥 restriction/hazard · 🟧 caution/unverified · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| ARP (lat/long) | 53°37′49″N 009°59′28″E (53.630402, 9.988230) `[OurAirports/SkyVector mirror, retrieved 2026-07-25]` |
| Field elevation | **53 ft** / 16 m MSL |
| Mag variation | Not confirmed in reachable sources 🟧 |
| Time zone | UTC +1 (CET) / UTC +2 (CEST, EU DST) |
| Runway(s) | **05/23** 3,250 × 46 m (10,663 × 150 ft) · **15/33** 3,666 × 46 m (12,028 × 150 ft) — asphalt, lighted, **crossing configuration** |
| Preferential runway | Wind-dependent; the two pairs physically cross — only a compatible runway combination is active at a time, and cross-runway traffic must be coordinated with Tower 🟧 |
| Longest LDA | RWY 15: 3,666 m / 12,028 ft (no displacement published this end) — see §7 for all four ends |
| Approaches | ILS (05), **ILS CAT II/III (23)**; RNAV/RNP approaches expected on all ends — names not confirmed in reachable sources, verify current AIRAC 🟧 |
| RFF category | Not confirmed in reachable sources 🟧 |
| Control type | **Radar** — Hamburg Director/Approach under **Bremen Radar (Bremen ACC, EDWW)**; Hamburg Tower/Ground on the surface |
| Elevation class | Sea level — **not** hot-and-high; performance driver is coastal fog/low-stratus, not density altitude |
| Special-airport status | Not operator-categorised in reachable sources; **crossing-runway geometry (05/23 × 15/33) is the standing crew-awareness item** — see §3.2/§5 🟥. K Global internal field lists **Category R** — the R/S/M/L/H scheme's assignment rule is **not documented anywhere in K Global's own Knowledge base** (tracked as open backlog item) 🟧 |
| Customs / PoE | Yes (tagged Port of Entry) — exact counter hours not confirmed 🟧 |

**K Global network fields (live VAMSYS):** Category **R** · Base **No** · Preferred alternates **EDDB, EDDF, EHAM** · Taxi-in **12 min** / taxi-out **14 min**.

---

## 2. Validation summary

| Domain | Flag | Note |
|---|---|---|
| Terrain / CFIT | 🟩 | Flat North German Plain; field sits at 53 ft near the Elbe/Alster lowlands. No close-in high terrain. |
| Runway length vs fleet perf | 🟩 | Both runway pairs (10,663 ft / 12,028 ft) are ample for any narrow- or wide-body type in the K Global fleet even with displaced thresholds applied. |
| Approach availability / minima | 🟧 | ILS CAT II/III confirmed on RWY 23; RWY 05 ILS status and 15/33 approach suite not independently confirmed from a primary source — verify current AIRAC. |
| Airspace / traffic / control | 🟧 | Major regional hub under Bremen Radar/Bremen ACC (EDWW) — **not** Langen; **crossing-runway coordination** is the defining traffic/workload item — see §3.2. |
| Weather / seasonal hazard | 🟧 | North Sea coastal exposure — autumn/winter fog and low stratus, gusty frontal winds; CAT III infrastructure mitigates but verify LVP status at planning. |
| Curfew / slots / hours | 🟥 | **Hard night curfew — no take-offs/landings 2300–0600 local, field operating hours 0600–2300, no extensions reported.** Build schedule buffer accordingly. |
| RFF category vs our types | 🟧 | Not confirmed — large scheduled-service hub, expected adequate for our fleet; verify. |
| Fuel availability | 🟧 | Jet A-1 expected on field (major scheduled hub); hours/into-plane provider not confirmed. |
| Customs / handling / security | 🟧 | International PoE confirmed; exact customs hours and handling agent not confirmed from a reachable public source. |

---

## 3. Threat & Error Management (TEM)

### 3.1 CFIT / Terrain  🟩
EDDH sits at 53 ft MSL on the flat North German Plain, close to the Elbe estuary lowlands and roughly 8.5 km north of Hamburg city centre. There is no significant terrain anywhere in the vicinity — this is a non-factor at Hamburg, unlike coastal/mountain fields elsewhere in the network. Standard MSA/obstacle-ring verification against the current AD/area chart still applies for any radar vector or missed approach, but no CFIT-specific threat exists here.

### 3.2 Airborne conflict / traffic  🟧
Hamburg is a busy scheduled/charter hub controlled by **Hamburg Tower/Ground on the surface, Hamburg Director/Approach feeding into Bremen Radar (Bremen ACC, EDWW upper)** — the field sits in the **Bremen FIR, not Langen**, which matters for any cross-reference to the OM C Airspace library (see §9/§10 links). The defining airborne/ground conflict driver is the **crossing runway geometry**: RWY 05/23 and RWY 15/33 physically cross one another, so only a compatible active-runway combination can be used at any one time, and any traffic needing to cross the "other" runway (e.g. at the taxiway intersection near G/B3) requires an explicit ATC runway-crossing release before proceeding — a documented workload/coordination item in VATSIM-Germany's own Hamburg SOPs, corroborating this as a real operational feature rather than a network artefact. Brief for a runway-crossing clearance on any taxi route that traverses the "off" runway, and do not assume a crossing release is included in a taxi clearance unless explicitly stated.

**Cross-reference:** OM C Airspace `../../../../Airspace/General/Europe.md` covers the continental DE/FR/ES/PT corridor under **Langen ACC (EDGG)/Karlsruhe UAC** — that brief does **not** cover the **Bremen FIR (EDWW)**, which is the actual controlling authority for Hamburg/Berlin/Hannover. No dedicated Bremen FIR/EDWW airspace brief exists yet in OM C — flagged here as a genuine library gap. 🟧

### 3.3 Runway excursion  🟧
Displaced thresholds are meaningful in three of the four directions: **RWY 05 +978 ft (298 m), RWY 23 +512 ft (156 m), RWY 33 +1,464 ft (446 m)** — RWY 15 has no published displacement. Always fly the correct LDA for the assigned end, not the full physical runway length (see §7). The two runway orientations (roughly NE–SW and NW–SE) give Hamburg reasonable crosswind-runway flexibility, but also mean a runway-configuration change (e.g. ahead of a frontal wind shift) is a real possibility — monitor the ATIS wind trend. Winter contamination (snow/slush/ice) is a seasonal factor at this latitude — see §14.

### 3.4 Weather threat  🟧
Hamburg's **North Sea/estuary-influenced maritime climate** brings autumn/winter radiation and advection fog and low stratus, occasionally reducing visibility below CAT I minima — this is the operational driver behind the field's **CAT II/III ILS on RWY 23**. Frontal systems track through regularly, bringing gusty westerly-quadrant winds and, in winter, snow/icing. Convective activity is rare and not a significant threat. Confirm current LVP (Low Visibility Procedures) status and any CAT downgrade via NOTAM before a low-visibility approach.

### 3.5 Operational considerations  🟧
The two standing items are (1) the **crossing-runway coordination workload** described in §3.2 — brief for a possible runway-crossing hold and do not anticipate it being pre-cleared, and (2) the **hard 2300–0600 local night curfew with no extensions reported** — schedule and fuel-planning buffer must respect this without exception; a late-running inbound risks a diversion rather than a curfew waiver. Hamburg-Fuhlsbüttel sits close to residential Hamburg neighbourhoods, reinforcing the noise-sensitivity behind the curfew (see §12).

---

## 4. Cautions & Warnings

- **Crossing-runway configuration (05/23 × 15/33)** — confirm the active runway combination and do not assume a runway-crossing release is included in a taxi clearance.
- **Hard night curfew 2300–0600 local, field hours 0600–2300, no extensions reported** — schedule with margin; a late arrival risks diversion, not a waiver.
- **Displaced thresholds up to 1,464 ft (RWY 33)** — always use the correct LDA per §7, not the physical runway length.
- **CAT II/III ILS on RWY 23** — the field's principal low-visibility approach; verify current LVP/CAT status before relying on it in autumn/winter fog.
- Airport sits close to residential Hamburg districts — expect strict noise-abatement compliance expectations from ATC/operator.

---

## 5. Aerodrome category, restrictions & crew qualification

- **Special-airport / category:** Not formally categorised as a "special airport" in reachable public sources; the **crossing-runway geometry** is the standing crew-briefing item. 🟥 K Global's internal VAMSYS field lists **Category R**, but the meaning of the R/S/M/L/H scheme is **not defined anywhere in K Global's own documentation** — genuine internal gap, tracked as an open item (not something to resolve from public AIP sources). 🟧
- **Crew-qualification gate:** CAT II/III currency required for any low-visibility approach to RWY 23 in fog/LVP conditions. 🟧
- **Operating restrictions / bans:** Hard night curfew 2300–0600 local (see §4/§6); no RNP AR ban or circling restriction found in reachable sources — verify current AIRAC. 🟧
- **Overflight / entry / permits:** Standard EU/Schengen operation — no overflight permits required. 🟩
- **Operations notes:** ANSP — DFS (Deutsche Flugsicherung); airport operator — Flughafen Hamburg GmbH. Field lies in **Bremen FIR/ACC (EDWW)**, not Langen — relevant when cross-referencing the OM C Airspace library (§9).

---

## 6. General / hours / services

| Item | Value | Flag |
|---|---|---|
| ATS hours | 0600–2300 local (field operating hours) | 🟧 |
| AD operating hours | 0600–2300 local; **no take-offs/landings 2300–0600, no extensions reported** | 🟥 |
| Night / curfew restrictions | Hard curfew 2300–0600 local | 🟥 |
| RFF category | Not confirmed | 🟧 |
| Fuel | Jet A-1 expected (major scheduled hub); hours/provider not confirmed | 🟧 |
| PCN | Not confirmed in reachable sources | 🟧 |
| Customs | Yes (PoE) — exact hours not confirmed | 🟧 |
| Handling / FBO | Full scheduled-hub handling expected; specific agent not confirmed | 🟧 |

---

## 7. Runways & declared distances

| RWY | Dimensions | Surface | TORA | TODA | ASDA | LDA | Notes |
|---|---|---|---|---|---|---|---|
| 05 | 3,250 × 46 m (10,663 × 150 ft) | Asphalt, lighted | Not individually confirmed 🟧 | 🟧 | 🟧 | ≈2,952 m / 9,685 ft (derived: full length − 298 m displacement) | **978 ft (298 m) displaced threshold** |
| 23 | 3,250 × 46 m (10,663 × 150 ft) | Asphalt, lighted | 🟧 | 🟧 | 🟧 | ≈3,094 m / 10,151 ft (derived: full length − 156 m displacement) | **512 ft (156 m) displaced threshold**; **ILS CAT II/III** |
| 15 | 3,666 × 46 m (12,028 × 150 ft) | Asphalt, lighted | 🟧 | 🟧 | 🟧 | 3,666 m / 12,028 ft (no displacement published) | No displacement found |
| 33 | 3,666 × 46 m (12,028 × 150 ft) | Asphalt, lighted | 🟧 | 🟧 | 🟧 | ≈3,220 m / 10,564 ft (derived: full length − 446 m displacement) | **1,464 ft (446 m) displaced threshold** |

*Source: OurAirports (mirrors DFS/AIP-derived runway data), retrieved 2026-07-25 — displaced-threshold and full-length figures are directly sourced; **LDA values marked "derived" are calculated (full length − displacement) and have not been independently confirmed against a TORA/TODA/ASDA declared-distance table** — treat as 🟧 pending primary AIP confirmation. PCN not found in any reachable source.*

---

## 8. Communications

| Service | Callsign | Frequency | Hours | Notes |
|---|---|---|---|---|
| ATIS | Hamburg ATIS | 124.325 | H24 (assumed) | 🟧 |
| Delivery | Not separately confirmed | — | — | May be combined with Ground — verify 🟧 |
| Ground | Hamburg Ground / Rollkontrolle | 121.805 | H24 (assumed) | 🟧 |
| Apron | Hamburg Apron / Vorfeld | 121.705 | H24 (assumed) | 🟧 |
| Tower | Hamburg Tower / Turm | 121.28 | H24 (assumed) | A second tower-labelled frequency (126.855) appears in the same tier-4 source tagged "Hahn Tower" — likely a data-quality artefact in the mirror, not a genuine second Hamburg tower frequency; **flagged, do not rely on it without chart confirmation** 🟧 |
| Approach / Director | Hamburg Director | 118.2 | H24 (assumed) | 🟧 |
| Centre / FIR | Bremen Radar (Bremen ACC, EDWW) | 134.25 | H24 (assumed) | Upper-airspace authority for this sector — **not Langen** 🟧 |

*Source: OurAirports frequency mirror, retrieved 2026-07-25 (tier-4 — treat all values above as unconfirmed pending current-AIRAC chart cross-check). The same source's flight-information/AFIS entry is labelled "Langen Information" at 125.1 — Germany's FIS (Flight Information Service) for VFR traffic was consolidated nationally under the "Langen Information" callsign even in fields controlled by other ACCs, so this may be correct rather than a mislabel, but it is **not independently confirmed** and is listed here as-is 🟧.*

---

## 9. Navaids

| Aid | Ident | Freq | Hours | Notes |
|---|---|---|---|---|
| VOR/DME | HAM | 113.1 | H24 (assumed) | On/near field — confirmed via tier-4 chart-derived source 🟧 |
| ILS 05 | IHHE | 110.5 | H24 (assumed) | 🟧 not independently cross-checked against a primary chart |
| ILS 23 | IHHW | 111.5 | H24 (assumed) | **CAT II/III** — 🟧 ident/freq not independently cross-checked against a primary chart |
| ILS 15/33 | Not confirmed | — | — | No ident/frequency found in reachable public sources 🟧 |

---

## 10. Arrival

- **Transition altitude / level:** TA **5,000 ft** (German nationwide standard) / TL **FL60**, or **FL70 when QNH < 1013 hPa**, ATC-assigned — verify no local override on current chart. 🟩
- **Speed:** Standard ICAO/SERA speed limits apply below FL100 (250 KIAS) — confirm any local restriction.
- **Preferential runway logic:** Wind-dependent, constrained by the crossing-runway geometry — only a compatible combination of 05/23 or 15/33 is active at a time. 🟧
- **Approaches (names only — verify minima on current AIRAC charts):**

| RWY | Approach | Notes |
|---|---|---|
| 23 | ILS (CAT II/III) | Principal low-visibility approach |
| 05 | ILS | CAT status not confirmed |
| 15 / 33 | Not confirmed — RNAV/RNP expected | 🟧 verify current AIRAC |

- **STARs (names only):** Not confirmed from a reachable public source — verify current AIRAC. 🟧
- **LVP:** CAT II/III equipment/lighting confirmed on RWY 23; trigger conditions and current status verify at planning. 🟧 Cross-reference OM E `../../../../../OM E Operations/Low Visibility Operations.md` for the operator's general CAT II/III procedure, and `../../../../../OM E Operations/Cold Weather Operations.md` for winter fog/icing handling relevant to §14.
- **Missed approach watch-items:** No terrain factor (§3.1); the operative missed-approach consideration is re-sequencing back into a crossing-runway traffic pattern under Hamburg Director/Bremen Radar.

---

## 11. Departure

- **SIDs (names only — fly the charted version):** Not confirmed from a reachable public source — verify current AIRAC. 🟧
- **RNP / climb-gradient requirements:** No unusual (hot-and-high style) gradient expected at 53 ft elevation; confirm standard RNAV-1 SID equipage requirement on current chart.
- **Take-off minima:** Not confirmed — verify current AIRAC. 🟧
- **Start-up / push-back:** Not confirmed in reachable sources — verify locally. 🟧
- **ATC slot / CTOT & clearance:** No formal slot-coordination regime confirmed for Hamburg in reachable sources (unlike EDDB) — verify on the OFP. 🟧
- **De-icing:** Standard German winter climate — de-icing facilities expected available; procedure/frequency not confirmed. 🟧

---

## 12. Noise & Environmental

- **Noise abatement (NAP):** Hamburg-Fuhlsbüttel is close to residential Hamburg districts; noise-preferential routings expected but not itemised in reachable sources. 🟧
- **Night noise / dB limits:** Governed by the **hard 2300–0600 local curfew** (no extensions reported) rather than a published dB limit. 🟥
- **Engine run-up restrictions:** Not confirmed. 🟧
- **Reverse thrust / idle-reverse policy:** Not confirmed. 🟧

---

## 13. Ground operations

- **Stands for our types:** Two connected terminals (T1/T2); stand adequacy for the K Global fleet not independently confirmed — verify against current AD chart. 🟧
- **Push-back:** Not confirmed as mandatory vs self-manoeuvre — verify locally. 🟧
- **Standard taxi routes:** Confirm with Ground on the day — routing is shaped by the crossing-runway geometry (§3.2).
- **Hot spots / tight taxiways:** **Runway-crossing coordination at the taxiway intersection near G/B3** (crossing RWY 15/33) is the standing item — do not cross without an explicit ATC release. 🟥
- **Follow-me:** Not confirmed. 🟧

---

## 14. Weather & seasonal (durable)

- **Climate / prevailing wind:** North Sea/estuary-influenced maritime climate; prevailing wind from the west/southwest, moderated by the Elbe lowlands.
- **Seasonal hazards:** Autumn/winter **radiation and advection fog / low stratus** — the driver behind the CAT II/III ILS on RWY 23; winter snow/icing; regular Atlantic frontal passages bringing gusty wind shifts (a factor given the crossing-runway configuration). No significant convective season.
- **Local effects:** Estuary/coastal breeze effects possible; no terrain-driven local wind phenomena.

> **Live weather — pull at planning (T-2h):** METAR, TAF, TREND, SIGMET/AIRMET. Not stored here.

---

## 15. NOTAMs

> **Pull at planning (T-2h).** Perishable — not stored here. Check specifically: current runway-crossing/taxi routing NOTAMs, ILS 23 CAT II/III serviceability and LVP status, runway/taxiway closures, navaid U/S, lighting, obstacle/crane, RFF downgrade. Source: AIS / OFP NOTAM block.

---

## 16. Fuel & alternate planning notes

- **Typical role for us:** Destination/origin within the German domestic/regional network; **not a K Global base** (see Snapshot).
- **Nearest suitable alternates:** Per live VAMSYS — **EDDB** (Berlin Brandenburg), **EDDF** (Frankfurt), **EHAM** (Amsterdam Schiphol) `[VAMSYS mirror 2026-07-25]`. Verify current-day suitability/minima. EDDF is K Global's primary hub — see sibling brief [EDDF Briefing](../eddf/index.md).
- **Fuel-uplift notes:** Jet A-1 expected on field at a major scheduled hub; specific provider/hours not confirmed. 🟧
- **Range/perf flags for our fleet:** No field-length or elevation performance constraint for any K Global type. The operative planning risk is the **hard night curfew** — build schedule/fuel-hold margin so a delayed inbound does not arrive after 2300 local.

---

## 17. Fleet-specific notes (optional)

- No widebody-specific stand or performance constraint identified from reachable sources. Narrow-body short/medium-haul types are the expected equipment on this domestic German field — see OM B `<../../../../../OM B Fleet/Fleet Capability Matrix.md>` for current type assignment; no unique per-type consideration found at Hamburg beyond the general crossing-runway/curfew items above.

---

## 18. Open items (🟧 — confirm against DFS eAIP / current AIRAC)

- Mag variation epoch — not found in any reachable source.
- RFF category — not confirmed.
- PCN — not found in any reachable public source.
- Full TORA/TODA/ASDA declared-distance table (only displaced-threshold and full-length figures confirmed; LDA values in §7 are **derived**, not sourced directly).
- ILS 05/23 idents and frequencies (IHHE/110.5, IHHW/111.5) — sourced from a tier-4 chart-derived mirror only, not independently cross-checked against a primary chart; 15/33 approach suite and idents not found at all.
- SIDs/STARs — no names confirmed from any reachable public source.
- Take-off minima, push-back policy, de-icing procedure, follow-me availability, engine run-up/reverse-thrust policy — none confirmed.
- Exact customs counter hours and ground-handling agent.
- The apparent second "Tower" frequency (126.855, tagged "Hahn Tower" in the tier-4 source) — likely a data artefact, flagged rather than used.
- **K Global's internal VAMSYS "Category R" scheme** — meaning/assignment rule undocumented anywhere in K Global's own Knowledge base; this is an internal gap, not a public-source gap.
- **Bremen FIR (EDWW) airspace brief does not yet exist in OM C** — genuine library gap, tracked here and in §3.2/§9/§10; do not link a non-existent file, reference the general Europe brief instead pending a dedicated build.

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim material (current-AIRAC charts) informs content but is not listed here.*

- OurAirports — Hamburg Helmut Schmidt Airport (EDDH) runways & frequencies — https://ourairports.com/airports/EDDH/runways.html , https://ourairports.com/airports/EDDH/frequencies.html (retrieved 2026-07-25). *Tier-4 — mirrors AIP-derived data; runway dimensions/displaced thresholds and frequency list taken from here, treated as unconfirmed pending primary AIP cross-check.*
- VATSIM Germany Knowledgebase — EDDH Hamburg Airport (Bremen FIR/EDWW) — https://knowledgebase.vatsim-germany.org/books/airports-bremen-fir-edww/chapter/eddh-hamburg-airport (retrieved 2026-07-25). *Tier-4 operational cross-check — confirmed Bremen FIR/Bremen Radar control structure and runway-crossing coordination procedure at the G/B3 intersection.*
- VATSIM Germany navigation chart index (chart-title reference only, not fetched as a document) — https://nav.vatsim-germany.org/files/edww/charts/eddh/public/EDDH_IAC_ILS_RWY23.pdf — *chart title corroborates ILS CAT II/III capability on RWY 23.*
- Simple Flying — "A Brief Guide To Night Flight Restrictions At Germany's Major Airports" — https://simpleflying.com/germany-major-airports-night-flight-restrictions/ (retrieved 2026-07-25). *Corroboration of the 2300–0600 local hard curfew.*
- VATSIM Germany Knowledgebase — Altimetry (Air Law) — https://knowledgebase.vatsim-germany.org/books/air-law/page/altimetry (retrieved 2026-07-25). *German nationwide TA 5,000 ft / TL FL60 (FL70 if QNH < 1013).*

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-25 | Initial baseline stub (Navigraph-seeded position/elevation only). |
| v0.2 | 2026-07-25 | Built from DFS eAIP; K Global fields from live VAMSYS. Full 18-section brief built from OurAirports/tier-4 public mirrors and VATSIM-Germany operational cross-check: crossing-runway (05/23 × 15/33) geometry identified as the standing TEM item; hard 2300–0600 curfew confirmed; Bremen FIR/Bremen ACC (EDWW) control structure confirmed (not Langen); CAT II/III ILS on RWY 23 confirmed. Numerous secondary items (RFF, PCN, exact declared distances, SIDs/STARs, customs hours) remain open 🟧 pending primary AIP/current-AIRAC confirmation — see §18. K Global's internal "Category R" scheme flagged as an undocumented internal gap; folded to 4-page pack (Briefing + Dispatch + Departure + Arrival), all relative links re-based one level deeper. |
