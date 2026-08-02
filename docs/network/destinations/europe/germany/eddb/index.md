# EDDB — Berlin Brandenburg · Airport Briefing

**EDDB / BER** · Berlin/Schönefeld, Germany · Europe
**Version** v0.2 · **Updated** 2026-07-25 · **Status** Draft — built from DFS eAIP-derived public data + tier-4 corroboration; several items unverified, see §18

> **Read-me:** Planning aid, not a chart. Static data is drawn from DFS eAIP-derived public mirrors (OurAirports/SkyVector) and cross-checked against VATSIM-Germany operational documentation; approaches/SIDs/STARs are listed **by name only where confirmed** — fly the charted current-AIRAC version. **Runway designators changed 2024-10-03 due to magnetic drift — this brief uses the current designators; see §3.2/§18.** Live weather/NOTAMs are pulled at planning (§14/§15). Open 🟧 items are listed in §18. Flag legend 🟥 restriction/hazard · 🟧 caution/unverified · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| ARP (lat/long) | 52°21′42″N 013°30′08″E (52.361738, 13.502341) `[OurAirports/SkyVector mirror, retrieved 2026-07-25]` |
| Field elevation | **157 ft** / 48 m MSL |
| Mag variation | Not confirmed in reachable sources 🟧 |
| Time zone | UTC +1 (CET) / UTC +2 (CEST, EU DST) |
| Runway(s) | **06L/24R** 3,600 × 45 m (11,811 × 148 ft) · **06R/24L** 4,000 × 60 m (13,123 × 197 ft) — two **independent parallels**, asphalt/concrete, lighted 🟧 (redesignated from 07L/25R & 07R/25L on 2024-10-03 — see §18) |
| Preferential runway | Parking-position-based per operational SOP: north-apron stands (Apron 1-4/A/E) generally use **06L/24R**; south-apron stands (Apron B/C) generally use **06R/24L** 🟧 |
| Longest LDA | 06R/24L: 4,000 m / 13,123 ft (no displacement published) — see §7 for all four ends |
| Approaches | **ILS CAT II/III** confirmed on at least one runway end by chart-title reference; full per-runway suite not independently confirmed — verify current AIRAC 🟧 |
| RFF category | Not confirmed in reachable sources 🟧 |
| Control type | **Radar** — Berlin Tower (split Nord/Süd)/Ground on the surface, feeding **Bremen Radar (Bremen ACC, EDWW)** |
| Elevation class | Sea level — **not** hot-and-high; no density-altitude performance driver |
| Special-airport status | **Slot-coordinated airport** (Airport Coordination Germany) 🟥; modern **single-terminal hub** (T1, with T2 extension) — not operator-categorised beyond that in reachable sources. K Global internal field lists **Category S** — the R/S/M/L/H scheme's assignment rule is **not documented anywhere in K Global's own Knowledge base** (open backlog item) 🟧 |
| Customs / PoE | Yes — Berlin's sole international commercial gateway since Tegel's 2020 closure; exact counter hours not confirmed 🟧 |

**K Global network fields (live VAMSYS):** Category **S** · Base **No** · Preferred alternates **EDDF, EDDL, EHAM** · Taxi-in **14 min** / taxi-out **18 min**.

---

## 2. Validation summary

| Domain | Flag | Note |
|---|---|---|
| Terrain / CFIT | 🟩 | Flat Brandenburg plain south of Berlin; no close-in high terrain. |
| Runway length vs fleet perf | 🟩 | Both parallels (11,811 ft / 13,123 ft) are ample for any K Global fleet type. |
| Approach availability / minima | 🟧 | CAT II/III capability confirmed by chart-title reference on at least one runway end; exact per-runway minima not independently confirmed — verify current AIRAC. |
| Airspace / traffic / control | 🟧 | Two independent parallel runways under Bremen Radar/Bremen ACC (EDWW) — **not Langen**; split Tower Nord/Süd operation. |
| Weather / seasonal hazard | 🟧 | Continental-influenced lowland climate — winter fog/low stratus, frontal wind shifts; verify LVP status at planning. |
| Curfew / slots / hours | 🟥 | **Slot-coordinated** (Airport Coordination Germany); a night curfew window for coordinated traffic is reported but exact bounds vary by source — verify per current coordination parameters, see §6/§18. |
| RFF category vs our types | 🟧 | Not confirmed — modern purpose-built hub, expected adequate; verify. |
| Fuel availability | 🟧 | Jet A-1 expected on field (Berlin's sole major hub); hours/provider not confirmed. |
| Customs / handling / security | 🟧 | International PoE confirmed; exact customs hours and handling agent not confirmed from a reachable public source. |

---

## 3. Threat & Error Management (TEM)

### 3.1 CFIT / Terrain  🟩
EDDB sits at 157 ft MSL on the flat Brandenburg plain south-east of Berlin. No significant terrain exists in the vicinity — CFIT is not an operative threat at this field. Standard MSA/obstacle-ring verification against the current AD/area chart still applies for any radar vector or missed approach.

### 3.2 Airborne conflict / traffic  🟧
BER is controlled by **Berlin Tower, split into Nord (24R/06L) and Süd (24L/06R) positions, and Berlin Ground**, feeding into **Bremen Radar (Bremen ACC, EDWW)** for the upper sector — the field sits in the **Bremen FIR, not Langen** (relevant when cross-referencing the OM C Airspace library, §9/§10). BER's two runways are **independent parallels** (not crossing, unlike EDDH), which supports simultaneous arrival/departure streams and generally lower coordination workload than a crossing-runway field. **A material redesignation occurred on 2024-10-03**: the northern runway pair changed from **07L/25R to 06L/24R**, and the southern pair from **07R/25L to 06R/24L**, driven by magnetic-declination drift — this is a real, durable change (not a NOTAM-perishable item), and any reference material still citing "07L/25R" or "07R/25L" for BER is now outdated. This brief uses the current designators throughout.

**Cross-reference:** OM C Airspace `../../../../Airspace/General/Europe.md` covers the continental DE/FR/ES/PT corridor under **Langen ACC (EDGG)/Karlsruhe UAC** — that brief does **not** cover the **Bremen FIR (EDWW)**, which is the actual controlling authority for Berlin/Hamburg/Hannover. No dedicated Bremen FIR/EDWW airspace brief exists yet in OM C — flagged here as a genuine library gap. 🟧

### 3.3 Runway excursion  🟧
Displaced thresholds apply to the north runway pair only: **06L +970 ft (296 m), 24R +985 ft (300 m)**; the south runway pair (06R/24L, the longer/wider concrete pair) has no published displacement. Always fly the correct LDA for the assigned end (§7). Winter contamination (snow/slush/ice) is a seasonal factor at this latitude — see §14.

### 3.4 Weather threat  🟧
BER's continental-influenced lowland climate brings winter fog/low stratus and frontal wind shifts; the field's CAT II/III ILS capability (confirmed by chart-title reference) exists specifically to manage this. Confirm current LVP status and any CAT downgrade via NOTAM before a low-visibility approach. No significant convective threat.

### 3.5 Operational considerations  🟧
BER is **slot-coordinated** by Airport Coordination Germany — a CTOT/slot regime applies and must be respected; sources vary on the exact night-curfew window for coordinated traffic (reported variously as 2330–0530 local for coordinated flights and a broader 0430–2330 operating window) — **verify current parameters before planning**, do not rely on either figure as fixed (§18). Ground-side, a documented **pushback hotspot near taxi lane N1** (stands 40/41/42 on Apron 3) requires the pushback tug to remain fully behind the apron safety line — a real, named operational caution, not a generic warning (§13). As a modern purpose-built single-terminal hub, general infrastructure (stands, jet bridges, VDGS) is not itself a limiting factor for our fleet.

---

## 4. Cautions & Warnings

- **Runway designators changed 2024-10-03** (07L/25R → 06L/24R; 07R/25L → 06R/24L) due to magnetic drift — confirm any older reference material is not being used unknowingly.
- **Slot-coordinated airport** — respect assigned CTOT/slot; do not assume flexibility on schedule.
- **Pushback hotspot near taxi lane N1** (Apron 3, stands 40/41/42) — pushback tug may not be fully clear of the apron safety line; aircraft must be stopped until obstacle clearance is confirmed.
- **Displaced thresholds on the north runway pair (06L +970 ft / 24R +985 ft)** — use the correct LDA, not the physical runway length.
- **Two independent parallel runways** — generally lower crossing-conflict workload than EDDH/EDDV, but confirm current runway allocation against your assigned apron/stand.

---

## 5. Aerodrome category, restrictions & crew qualification

- **Special-airport / category:** Not formally categorised as a "special airport" in reachable public sources beyond its **slot-coordinated** status. 🟥 K Global's internal VAMSYS field lists **Category S** — meaning/assignment rule **not defined anywhere in K Global's own documentation** — genuine internal gap, tracked as an open item. 🟧
- **Crew-qualification gate:** CAT II/III currency required for any low-visibility approach in fog/LVP conditions. 🟧
- **Operating restrictions / bans:** Slot/CTOT compliance mandatory; a coordinated-traffic night-curfew window is reported but bounds are unconfirmed (§18) — no RNP AR ban or circling restriction found in reachable sources. 🟧
- **Overflight / entry / permits:** Standard EU/Schengen operation — no overflight permits required. 🟩
- **Operations notes:** ANSP — DFS (Deutsche Flugsicherung); airport operator — Flughafen Berlin Brandenburg GmbH (FBB). Field lies in **Bremen FIR/ACC (EDWW)**, not Langen — relevant when cross-referencing the OM C Airspace library (§9).

---

## 6. General / hours / services

| Item | Value | Flag |
|---|---|---|
| ATS hours | Reported operating window ≈0430–2330 local; not independently confirmed | 🟧 |
| AD operating hours | Slot-coordinated; coordinated-traffic night restriction reported ≈2330–0530 local — bounds unconfirmed | 🟧 |
| Night / curfew restrictions | See above — verify current Airport Coordination Germany parameters | 🟥 |
| RFF category | Not confirmed | 🟧 |
| Fuel | Jet A-1 expected (Berlin's sole major hub); hours/provider not confirmed | 🟧 |
| PCN | Not confirmed in reachable sources | 🟧 |
| Customs | Yes (sole Berlin international PoE) — exact hours not confirmed | 🟧 |
| Handling / FBO | Full major-hub handling expected; specific agent not confirmed | 🟧 |

---

## 7. Runways & declared distances

| RWY | Dimensions | Surface | TORA | TODA | ASDA | LDA | Notes |
|---|---|---|---|---|---|---|---|
| 06L | 3,600 × 45 m (11,811 × 148 ft) | Asphalt, lighted | Not individually confirmed 🟧 | 🟧 | 🟧 | ≈3,304 m / 10,840 ft (derived: full length − 296 m displacement) | **970 ft (296 m) displaced threshold**; redesignated from 07L (2024-10-03) |
| 24R | 3,600 × 45 m (11,811 × 148 ft) | Asphalt, lighted | 🟧 | 🟧 | 🟧 | ≈3,300 m / 10,827 ft (derived: full length − 300 m displacement) | **985 ft (300 m) displaced threshold**; redesignated from 25R (2024-10-03); **CAT II/III per chart-title reference (pre-rename "RWY 25R")** |
| 06R | 4,000 × 60 m (13,123 × 197 ft) | Concrete, lighted | 🟧 | 🟧 | 🟧 | 4,000 m / 13,123 ft (no displacement published) | Redesignated from 07R (2024-10-03) |
| 24L | 4,000 × 60 m (13,123 × 197 ft) | Concrete, lighted | 🟧 | 🟧 | 🟧 | 4,000 m / 13,123 ft (no displacement published) | Redesignated from 25L (2024-10-03) |

*Source: OurAirports (mirrors AIP-derived runway data), retrieved 2026-07-25 — displaced-threshold and full-length figures directly sourced; **LDA values marked "derived" are calculated and not independently confirmed against a TORA/TODA/ASDA declared-distance table**, treat as 🟧. Runway designators independently corroborated as current via multiple 2024 aviation-press sources on the magnetic redesignation (see Sources). PCN not found in any reachable source.*

---

## 8. Communications

| Service | Callsign | Frequency | Hours | Notes |
|---|---|---|---|---|
| ATIS | Berlin ATIS | 123.78 | H24 (assumed) | 🟧 |
| ATIS (VFR) | Berlin VFR ATIS | 133.63 | H24 (assumed) | 🟧 |
| Delivery | Not separately confirmed | — | — | Verify — may be combined with Ground 🟧 |
| Ground | Berlin Ground | 129.505 | H24 (assumed) | 🟧 |
| Tower (Süd) | Berlin Tower | 118.805 | H24 (assumed) | Serves 06R/24L (south pair) 🟧 |
| Tower (Nord) | Berlin Tower | 120.03 | H24 (assumed) | Serves 06L/24R (north pair) 🟧 |
| Approach | Not separately confirmed at BER — see Centre/FIR | — | — | 🟧 |
| Centre / FIR | Bremen Radar (Bremen ACC, EDWW) | Not confirmed for BER specifically | H24 (assumed) | Upper-airspace authority — **not Langen** 🟧 |
| Volmet | Berlin Volmet | 128.405 | H24 (assumed) | 🟧 |

*Source: OurAirports frequency mirror, retrieved 2026-07-25 (tier-4 — treat all values above as unconfirmed pending current-AIRAC chart cross-check). The same source's flight-information entry is labelled "Langen Information" at 132.65 — as at Hamburg/Hannover, Germany's FIS for VFR traffic may be nationally consolidated under this callsign regardless of controlling ACC; **not independently confirmed** 🟧.*

---

## 9. Navaids

| Aid | Ident | Freq | Hours | Notes |
|---|---|---|---|---|
| VOR/DME | Not confirmed | — | — | No on-field navaid ident found in any reachable public source 🟧 |
| ILS (runway not individually confirmed) | Not confirmed | — | — | **CAT II/III capability confirmed by chart-title reference only** ("EDDB ILS CAT II & III...RWY 25R", pre-rename designation of current 24R) — no ident/frequency confirmed 🟧 |
| NDB | Not confirmed | — | — | 🟧 |

*Navaid data for BER is the weakest-sourced section of this brief — genuinely could not confirm VOR/DME or ILS component idents/frequencies from any reachable free source. Treat §9 as fully open pending current-AIRAC chart access.*

---

## 10. Arrival

- **Transition altitude / level:** TA **5,000 ft** (German nationwide standard) / TL **FL60**, or **FL70 when QNH < 1013 hPa**, ATC-assigned — verify no local override on current chart. 🟩
- **Speed:** Standard ICAO/SERA speed limits apply below FL100 (250 KIAS) — confirm any local restriction.
- **Preferential runway logic:** Parking-position-based — north-apron stands (Apron 1-4/A/E/GAT, D01-D03) generally route to **06L/24R**; south-apron stands (Apron B/C, D04-22) generally route to **06R/24L**. ATC may deviate from this as required. 🟧
- **Approaches (names only — verify minima on current AIRAC charts):**

| RWY | Approach | Notes |
|---|---|---|
| 24R (ex-25R) | ILS (CAT II/III) | Confirmed by chart-title reference only |
| 06L / 06R / 24L | Not confirmed | 🟧 verify current AIRAC |

- **STARs (names only):** Not confirmed from a reachable public source — verify current AIRAC. 🟧
- **LVP:** CAT II/III equipment confirmed on at least the 24R end; current status/trigger conditions verify at planning. 🟧 Cross-reference OM E `../../../../../OM E Operations/Low Visibility Operations.md` for the operator's general CAT II/III procedure, and `../../../../../OM E Operations/Cold Weather Operations.md` for winter fog/icing handling relevant to §14.
- **Missed approach watch-items:** No terrain factor (§3.1); re-sequencing occurs into a dual-independent-parallel pattern under Berlin Tower/Bremen Radar.

---

## 11. Departure

- **SIDs (names only — fly the charted version):** Not confirmed from a reachable public source — verify current AIRAC. 🟧
- **RNP / climb-gradient requirements:** No unusual gradient expected at 157 ft elevation; confirm standard RNAV-1 SID equipage requirement on current chart.
- **Take-off minima:** Not confirmed — verify current AIRAC. 🟧
- **Start-up / push-back:** Slot/CTOT-driven start-up approval regime expected (typical of a coordinated hub) — exact local procedure not confirmed. 🟧
- **ATC slot / CTOT & clearance:** **Slot-coordinated by Airport Coordination Germany** — CTOT compliance is mandatory; obtain and respect the assigned slot on the OFP. 🟥
- **De-icing:** Standard German winter climate — de-icing facilities expected available at a modern purpose-built hub; procedure/frequency not confirmed. 🟧

---

## 12. Noise & Environmental

- **Noise abatement (NAP):** Not itemised in reachable sources; a purpose-built hub with modern noise-management infrastructure is assumed but not confirmed. 🟧
- **Night noise / dB limits:** Governed by the slot-coordination night-restriction window (bounds unconfirmed, §6/§18) rather than a published dB limit found in reachable sources.
- **Engine run-up restrictions:** Not confirmed. 🟧
- **Reverse thrust / idle-reverse policy:** Not confirmed. 🟧

---

## 13. Ground operations

- **Stands for our types:** Modern single-terminal hub (T1, plus T2 extension); VDGS-guided stands on Aprons B/C and parts of A/E. Stand adequacy for the K Global fleet not independently confirmed — verify against current AD chart. 🟧
- **Push-back:** Documented pushback movements from stands E21–E35 route to the P2-Orange taxiway; mandatory-vs-self-manoeuvre policy for our stand types not confirmed. 🟧
- **Standard taxi routes:** Confirm with Ground on the day.
- **Hot spots / tight taxiways:** **Documented pushback hotspot near taxi lane N1 (Apron 3, stands 40/41/42)** — a pushback tug may temporarily not be fully behind the apron safety line at these adjacent stands; the aircraft must be stopped until obstacle clearance is confirmed. 🟥
- **Follow-me:** Not confirmed. 🟧

---

## 14. Weather & seasonal (durable)

- **Climate / prevailing wind:** Continental-influenced lowland climate on the flat Brandenburg plain; prevailing wind variable, with regular Atlantic frontal passages reaching this far east.
- **Seasonal hazards:** Winter fog/low stratus and icing; the field's CAT II/III ILS capability exists to manage this. No significant convective season.
- **Local effects:** No terrain-driven local wind phenomena; flat open-plain exposure to frontal wind shifts.

> **Live weather — pull at planning (T-2h):** METAR, TAF, TREND, SIGMET/AIRMET. Not stored here.

---

## 15. NOTAMs

> **Pull at planning (T-2h).** Perishable — not stored here. Check specifically: current slot/CTOT status, runway/taxiway closures, ILS CAT II/III serviceability and LVP status, navaid U/S, lighting, obstacle/crane, RFF downgrade. Source: AIS / OFP NOTAM block.

---

## 16. Fuel & alternate planning notes

- **Typical role for us:** Destination/origin within the German domestic/regional network; **not a K Global base** (see Snapshot).
- **Nearest suitable alternates:** Per live VAMSYS — **EDDF** (Frankfurt), **EDDL** (Düsseldorf), **EHAM** (Amsterdam Schiphol) `[VAMSYS mirror 2026-07-25]`. Verify current-day suitability/minima. EDDF is K Global's primary hub — see sibling brief [EDDF Briefing](../eddf/index.md).
- **Fuel-uplift notes:** Jet A-1 expected on field at Berlin's sole major hub; specific provider/hours not confirmed. 🟧
- **Range/perf flags for our fleet:** No field-length or elevation performance constraint for any K Global type. The operative planning risk is **slot/CTOT compliance** — build schedule margin against the assigned coordination slot rather than a hard curfew.

---

## 17. Fleet-specific notes (optional)

- No widebody-specific stand or performance constraint identified from reachable sources. As Berlin's sole scheduled hub, BER may see a broader mix of K Global types than the smaller regional fields (EDDH/EDDV) — see OM B `<../../../../../OM B Fleet/Fleet Capability Matrix.md>` for current type assignment; no unique per-type consideration found beyond the general slot-coordination/hotspot items above.

---

## 18. Open items (🟧 — confirm against DFS eAIP / current AIRAC)

- **Runway redesignation (2024-10-03):** confirmed via multiple independent 2024 aviation-press sources (07L/25R→06L/24R north pair; 07R/25L→06R/24L south pair) — treated as resolved/current in this brief, but flagged here as the single most important thing to re-verify if any older chart or reference material is consulted.
- Exact night-curfew/coordination-window bounds — sources conflict (≈2330–0530 coordinated-traffic restriction vs ≈0430–2330 general operating window); verify current Airport Coordination Germany parameters.
- Mag variation epoch, RFF category, PCN — not found in any reachable source.
- Full TORA/TODA/ASDA declared-distance table (only displaced-threshold and full-length figures confirmed; LDA values in §7 are **derived**).
- **VOR/DME and ILS component idents/frequencies — could not be confirmed from any reachable free source**; §9 is essentially open pending current-AIRAC chart access. CAT II/III capability itself is corroborated only by an approach-chart *title* reference, not the chart content.
- SIDs/STARs — no names confirmed from any reachable public source.
- Take-off minima, push-back policy (beyond the documented E21–E35 routing), de-icing procedure, follow-me availability, engine run-up/reverse-thrust policy — none confirmed.
- Exact customs counter hours and ground-handling agent.
- **K Global's internal VAMSYS "Category S" scheme** — meaning/assignment rule undocumented anywhere in K Global's own Knowledge base; internal gap, not a public-source gap.
- **Bremen FIR (EDWW) airspace brief does not yet exist in OM C** — genuine library gap, tracked here and in §3.2/§9/§10; do not link a non-existent file, reference the general Europe brief instead pending a dedicated build.

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim material (current-AIRAC charts) informs content but is not listed here.*

- OurAirports — Berlin Brandenburg Airport (EDDB) runways & frequencies — https://ourairports.com/airports/EDDB/runways.html , https://ourairports.com/airports/EDDB/frequencies.html (retrieved 2026-07-25). *Tier-4 — mirrors AIP-derived data; runway dimensions/displaced thresholds and frequency list taken from here, treated as unconfirmed pending primary AIP cross-check.*
- VATSIM Germany Knowledgebase — EDDB Berlin/Brandenburg — https://knowledgebase.vatsim-germany.org/books/airports-bremen-fir-edww/chapter/eddb-berlinbrandenburg/export/html (retrieved 2026-07-25). *Tier-4 operational cross-check — confirmed Bremen FIR/ACC control structure, parking-position-based preferential runway logic, and the documented pushback hotspot near taxi lane N1/Apron 3.*
- Aviation24.be — "Berlin Brandenburg Airport to rename runways due to shifts in Earth's magnetic field" — https://www.aviation24.be/airports/berlin/berlin-brandenburg-airport-to-rename-runways-due-to-shifts-in-earths-magnetic-field/ (retrieved 2026-07-25). *Corroborates the 2024-10-03 07L/25R→06L/24R and 07R/25L→06R/24L redesignation.*
- Flughafen Berlin Brandenburg (corporate) — press release on the runway renaming — https://corporate.berlin-airport.de/en/company-media/media-portal/pressemitteilungen/2024-10-01-slb-umbenennung.html (retrieved 2026-07-25). *Primary-operator corroboration of the redesignation.*
- VATSIM Germany Knowledgebase — Altimetry (Air Law) — https://knowledgebase.vatsim-germany.org/books/air-law/page/altimetry (retrieved 2026-07-25). *German nationwide TA 5,000 ft / TL FL60 (FL70 if QNH < 1013).*

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-25 | Initial baseline stub (Navigraph-seeded position/elevation only). |
| v0.2 | 2026-07-25 | Built from DFS eAIP; K Global fields from live VAMSYS. Full 18-section brief built from OurAirports/tier-4 public mirrors and VATSIM-Germany operational cross-check. **Identified and corrected for the 2024-10-03 runway redesignation** (07L/25R→06L/24R, 07R/25L→06R/24L) — this brief uses current designators throughout, a material finding relative to the original task anchor. Slot-coordination and documented pushback hotspot (Apron 3/N1) captured as the standing TEM items. Bremen FIR/Bremen ACC (EDWW) control structure confirmed (not Langen). Navaid idents/frequencies, RFF, PCN, exact night-curfew bounds, and SIDs/STARs remain open 🟧 pending primary AIP/current-AIRAC confirmation — see §18. K Global's internal "Category S" scheme flagged as an undocumented internal gap; folded to 4-page pack (Briefing + Dispatch + Departure + Arrival), all relative links re-based one level deeper. |
