# EDDV — Hannover · Airport Briefing

**EDDV / HAJ** · Langenhagen (Hannover), Germany · Europe
**Version** v0.3 · **Updated** 2026-07-25 · **Status** Draft — built from DFS eAIP-derived public data + tier-4 corroboration; several items unverified, see §18

> **Read-me:** Planning aid, not a chart. Static data is drawn from DFS eAIP-derived public mirrors (OurAirports/SkyVector) and cross-checked against VATSIM-Germany operational documentation; approaches/SIDs/STARs are listed **by name only where confirmed** — fly the charted current-AIRAC version. Live weather/NOTAMs are pulled at planning (§14/§15). Open 🟧 items are listed in §18. Flag legend 🟥 restriction/hazard · 🟧 caution/unverified · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| ARP (lat/long) | 52°27′40″N 009°41′06″E (52.461102, 9.685080) `[OurAirports/SkyVector mirror, retrieved 2026-07-25]` |
| Field elevation | **183 ft** / 56 m MSL |
| Mag variation | Not confirmed in reachable sources 🟧 |
| Time zone | UTC +1 (CET) / UTC +2 (CEST, EU DST) |
| Runway(s) | **09L/27R** 3,790 × 45 m (12,434 × 148 ft), concrete, lighted — main runway · **09R/27L** 2,340 × 45 m (7,677 × 148 ft), concrete, lighted · **09C/27C** 777 × 23 m (2,548 × 75 ft), asphalt, **not lighted** — three parallels, note the short/unlit centre runway config (§3.3/§4) |
| Preferential runway | Wind-dependent; **09L/27R is the main scheduled-traffic runway** — 09C/27C is short, unlit and not expected to be assigned to scheduled commercial types 🟧 |
| Longest LDA | 09R/27L: 2,340 m / 7,677 ft (no displacement published) — see §7; 09L/27R is longer overall but both ends carry a 300 m displacement |
| Approaches | **ILS CAT II/III available** — confirmed via ATIS LVP remark ("LOW VISIBILITY PROCEDURES IN OPERATION, CAT II AND III AVAILABLE"); per-runway/per-end minima not independently confirmed — verify current AIRAC 🟧 |
| RFF category | Not confirmed in reachable sources 🟧 |
| Control type | **Radar** — Hannover Tower/Ground on the surface, Director/Approach feeding **Bremen Radar (Bremen ACC, EDWW)** |
| Elevation class | Sea level–adjacent lowland — **not** hot-and-high; no density-altitude performance driver |
| Special-airport status | Not operator-categorised in reachable sources; the **three-runway config with a short, unlit centre runway (09C/27C)** is the standing crew-awareness item — confirm assigned runway before taxi 🟧. K Global internal field lists **Category R** — the R/S/M/L/H scheme's assignment rule is **not documented anywhere in K Global's own Knowledge base** (open backlog item) 🟧 |
| Customs / PoE | Yes — scheduled international/charter destinations including non-Schengen; exact counter hours not confirmed 🟧 |

**K Global network fields (live VAMSYS):** Category **R** · Base **No** · Preferred alternates **EDDF, EDDB, EDDH** · Taxi-in **10 min** / taxi-out **12 min**.

---

## 2. Validation summary

| Domain | Flag | Note |
|---|---|---|
| Terrain / CFIT | 🟩 | Flat North German Plain around Langenhagen, north of Hannover city; no close-in high terrain. |
| Runway length vs fleet perf | 🟩 | Main runway 09L/27R (12,434 ft) is ample for any K Global type; the short 09C/27C (2,548 ft, unlit) is not a scheduled-traffic runway. |
| Approach availability / minima | 🟧 | CAT II/III confirmed via ATIS LVP remark; exact per-runway minima not independently confirmed — verify current AIRAC. |
| Airspace / traffic / control | 🟧 | Three-parallel-runway field under Bremen Radar/Bremen ACC (EDWW) — **not Langen** — confirm active runway assignment, especially avoiding any assumption involving the short centre runway. |
| Weather / seasonal hazard | 🟧 | North German lowland climate — winter fog/low stratus, frontal wind shifts; CAT II/III infrastructure mitigates, verify LVP status at planning. |
| Curfew / slots / hours | 🟧 | Hannover is one of the few **24h-operating** German airports; noise-certificate-based restrictions apply broadly 2200/2300–0600 local rather than a hard curfew — verify current parameters, see §6/§18. |
| RFF category vs our types | 🟧 | Not confirmed — scheduled international/charter hub, expected adequate; verify. |
| Fuel availability | 🟧 | Jet A-1 expected on field; hours/provider not confirmed. |
| Customs / handling / security | 🟧 | International PoE confirmed (non-Schengen destinations served); exact hours and handling agent not confirmed from a reachable public source. |

---

## 3. Threat & Error Management (TEM)

### 3.1 CFIT / Terrain  🟩
EDDV sits at 183 ft MSL in Langenhagen on the flat North German Plain, roughly 11 km north of Hannover city centre. No significant terrain exists in the vicinity — CFIT is not an operative threat at this field. Standard MSA/obstacle-ring verification against the current AD/area chart still applies for any radar vector or missed approach.

### 3.2 Airborne conflict / traffic  🟧
Hannover is controlled by **Hannover Tower/Ground** on the surface, with **Director/Approach** feeding **Bremen Radar (Bremen ACC, EDWW)** for the upper sector — the field sits in the **Bremen FIR, not Langen** (relevant when cross-referencing the OM C Airspace library, §9/§10). The field has **three parallel east–west runways**: the main 09L/27R (3,790 m), a secondary 09R/27L (2,340 m), and a short, **unlit** centre runway 09C/27C (777 m) — the last is not a scheduled-commercial-traffic runway and is relevant chiefly as a ground-operations/situational-awareness item (confirm which runway is active and do not assume the centre runway is in use for anything other than light GA traffic). Traffic mix includes scheduled passenger, charter/leisure, and a notable **overnight cargo/night-airmail role** (Hannover has historically served as an overnight hub for a major integrator/parcel carrier and for German night-airmail services) — relevant to any late-night planning, since Hannover is one of the few German fields that keeps meaningful traffic flowing through the small hours.

**Cross-reference:** OM C Airspace `../../../../Airspace/General/Europe.md` covers the continental DE/FR/ES/PT corridor under **Langen ACC (EDGG)/Karlsruhe UAC** — that brief does **not** cover the **Bremen FIR (EDWW)**, which is the actual controlling authority for Hannover/Hamburg/Berlin. No dedicated Bremen FIR/EDWW airspace brief exists yet in OM C — flagged here as a genuine library gap. 🟧

### 3.3 Runway excursion  🟧
Displaced thresholds apply on the main runway (09L/27R: **both ends +984 ft / 300 m**) and on the short centre runway (09C +214 ft/65 m, 27C +541 ft/165 m); the secondary 09R/27L has no published displacement. Always fly the correct LDA for the assigned end (§7). The **centre runway (09C/27C) is short (2,548 ft) and unlit** — not suitable for scheduled jet operations and a genuine excursion-risk trap if ever misassigned; confirm the active/assigned runway explicitly. Winter contamination (snow/slush/ice) is a seasonal factor at this latitude — see §14.

### 3.4 Weather threat  🟧
Hannover's North German lowland climate brings winter fog/low stratus and frontal wind shifts; the field's confirmed CAT II/III capability (via ATIS LVP remark) exists to manage this. Confirm current LVP status and any CAT downgrade via NOTAM before a low-visibility approach. No significant convective threat.

### 3.5 Operational considerations  🟧
The standing item is the **three-runway configuration with a short, unlit centre runway (09C/27C)** — confirm the assigned/active runway explicitly and do not default to assuming the main 09L/27R without ATC confirmation. Hannover is **one of the few 24-hour-operating German airports**, with meaningful cargo/night-mail activity in the small hours — unlike Hamburg's hard curfew, expect the possibility of late/early scheduling here, but confirm current noise-certificate-based restrictions (§6/§12) rather than assuming unrestricted night ops.

---

## 4. Cautions & Warnings

- **Three parallel runways — the centre runway (09C/27C) is short (2,548 ft) and unlit**, not a scheduled-jet runway. Confirm the assigned/active runway explicitly before taxi.
- **Displaced thresholds on the main runway both ends (09L +984 ft / 27R +984 ft)** — use the correct LDA per §7, not the physical runway length.
- Hannover is a **24h-operating field** with overnight cargo/mail traffic — do not assume a hard curfew as at Hamburg; confirm current noise-restriction parameters for the specific movement time.
- **CAT II/III capability confirmed** (ATIS LVP remark) — verify current status before relying on it in fog conditions.
- **No dedicated Bremen FIR/EDWW airspace brief exists in OM C** 🟧 — this field is under Bremen ACC, not Langen; use the general [Europe area brief](../../../../airspace/europe.md) for continental corridor context only, it does **not** cover Bremen FIR specifics.

---

## 5. Aerodrome category, restrictions & crew qualification

- **Special-airport / category:** Not formally categorised as a "special airport" in reachable public sources; the **short/unlit centre runway** is the standing crew-briefing item. 🟧 K Global's internal VAMSYS field lists **Category R** — meaning/assignment rule **not defined anywhere in K Global's own documentation** — genuine internal gap, tracked as an open item. 🟧
- **Crew-qualification gate:** CAT II/III currency required for any low-visibility approach in fog/LVP conditions. 🟧
- **Operating restrictions / bans:** Noise-certificate-based restrictions apply broadly in the 2200/2300–0600 local window (ICAO Annex 16 Vol I Ch 3/4/14 noise-cert dependent) rather than a hard universal curfew — exact current parameters not fully confirmed, see §18; no RNP AR ban or circling restriction found in reachable sources. 🟧
- **Overflight / entry / permits:** Standard EU/Schengen operation for Schengen destinations; non-Schengen scheduled/charter services also operate — standard international arrival procedures apply. 🟩
- **Operations notes:** ANSP — DFS (Deutsche Flugsicherung); airport operator — Flughafen Hannover-Langenhagen GmbH. Field lies in **Bremen FIR/ACC (EDWW)**, not Langen — relevant when cross-referencing the OM C Airspace library (§9). Terminals A/B/C (C largest, opened 1998) plus a Terminal D used in peak periods, and the Karl Jatho GA terminal.

---

## 6. General / hours / services

| Item | Value | Flag |
|---|---|---|
| ATS hours | H24 reported (one of few German 24h fields) | 🟧 |
| AD operating hours | H24, but only limited passenger/cargo movements ≈2300–0400 local per public reporting | 🟧 |
| Night / curfew restrictions | Noise-certificate-based restriction reported ≈2200/2300–0600 local; not a hard universal curfew — exact current parameters unconfirmed | 🟧 |
| RFF category | Not confirmed | 🟧 |
| Fuel | Jet A-1 expected; hours/provider not confirmed | 🟧 |
| PCN | Not confirmed in reachable sources | 🟧 |
| Customs | Yes — exact hours not confirmed | 🟧 |
| Handling / FBO | Full scheduled-hub handling expected; specific agent not confirmed | 🟧 |

---

## 7. Runways & declared distances

| RWY | Dimensions | Surface | TORA | TODA | ASDA | LDA | Notes |
|---|---|---|---|---|---|---|---|
| 09L | 3,790 × 45 m (12,434 × 148 ft) | Concrete, lighted | Not individually confirmed 🟧 | 🟧 | 🟧 | ≈3,490 m / 11,450 ft (derived: full length − 300 m displacement) | **984 ft (300 m) displaced threshold**; main runway |
| 27R | 3,790 × 45 m (12,434 × 148 ft) | Concrete, lighted | 🟧 | 🟧 | 🟧 | ≈3,490 m / 11,450 ft (derived: full length − 300 m displacement) | **984 ft (300 m) displaced threshold** |
| 09R | 2,340 × 45 m (7,677 × 148 ft) | Concrete, lighted | 🟧 | 🟧 | 🟧 | 2,340 m / 7,677 ft (no displacement published) | Secondary runway |
| 27L | 2,340 × 45 m (7,677 × 148 ft) | Concrete, lighted | 🟧 | 🟧 | 🟧 | 2,340 m / 7,677 ft (no displacement published) | Secondary runway |
| 09C | 777 × 23 m (2,548 × 75 ft) | Asphalt, **not lighted** | 🟧 | 🟧 | 🟧 | ≈712 m / 2,336 ft (derived: full length − 65 m displacement) | **214 ft (65 m) displaced threshold**; short/unlit — not a scheduled-jet runway |
| 27C | 777 × 23 m (2,548 × 75 ft) | Asphalt, **not lighted** | 🟧 | 🟧 | 🟧 | ≈612 m / 2,007 ft (derived: full length − 165 m displacement) | **541 ft (165 m) displaced threshold**; short/unlit — not a scheduled-jet runway |

*Source: OurAirports (mirrors AIP-derived runway data), retrieved 2026-07-25 — displaced-threshold and full-length figures directly sourced; **LDA values marked "derived" are calculated and not independently confirmed against a TORA/TODA/ASDA declared-distance table**, treat as 🟧. PCN not found in any reachable source.*

---

## 8. Communications

| Service | Callsign | Frequency | Hours | Notes |
|---|---|---|---|---|
| ATIS | Hannover ATIS | 136.575 | H24 (assumed) | LVP/CAT II-III remark confirmed via this service 🟧 |
| Delivery | Not separately confirmed | — | — | Verify — may be combined with Ground 🟧 |
| Ground | Hannover Ground / Rollkontrolle | 121.955 | H24 (assumed) | 🟧 |
| Tower | Hannover Tower / Turm | 120.405 | H24 (assumed) | A second tower-labelled frequency (120.18) appears in the same tier-4 source — purpose/sector split not confirmed, **do not assume which is primary without chart confirmation** 🟧 |
| Approach / Director | Director | 119.6 | H24 (assumed) | 🟧 |
| Centre / FIR | Bremen Radar (Bremen ACC, EDWW) | 131.325 (one tier-4 source) vs 132.33 (a second tier-4 source) — **discrepancy, not resolved** | H24 (assumed) | Upper-airspace authority — **not Langen** 🟧🟧 |

*Source: OurAirports frequency mirror, retrieved 2026-07-25 (tier-4 — treat all values above as unconfirmed pending current-AIRAC chart cross-check). The same source's flight-information entry is labelled "Langen Information" at 119.825 — as at Hamburg/Berlin, Germany's FIS for VFR traffic may be nationally consolidated under this callsign regardless of controlling ACC; **not independently confirmed** 🟧.*

---

## 9. Navaids

| Aid | Ident | Freq | Hours | Notes |
|---|---|---|---|---|
| VOR/DME | NIE (Nienburg) | 116.5 | H24 (assumed) | **Off-field** — no on-field VOR/DME ident confirmed 🟧 |
| NDB | CEL (Celle) | 311 | H24 (assumed) | **Off-field**; referenced in approach procedures for the 09-side runways 🟧 |
| ILS (runway not individually confirmed) | Not confirmed | — | — | CAT II/III capability confirmed only via ATIS LVP remark — no ident/frequency confirmed for any runway end 🟧 |

*On-field navaid/ILS component idents could not be confirmed from any reachable free source — §9 is essentially open pending current-AIRAC chart access.*

---

## 10. Arrival

- **Transition altitude / level:** TA **5,000 ft** (German nationwide standard) / TL **FL60**, or **FL70 when QNH < 1013 hPa**, ATC-assigned — verify no local override on current chart. 🟩
- **Speed:** Standard ICAO/SERA speed limits apply below FL100 (250 KIAS) — confirm any local restriction.
- **Preferential runway logic:** Wind-dependent; **09L/27R is the expected main runway for scheduled traffic** — do not anticipate the short/unlit 09C/27C being assigned to a K Global type. 🟧
- **Approaches (names only — verify minima on current AIRAC charts):**

| RWY | Approach | Notes |
|---|---|---|
| 09L / 27R | ILS (CAT II/III per ATIS remark) | Main runway — exact per-end minima not confirmed |
| 09R / 27L | Not confirmed | 🟧 |
| 09C / 27C | Not applicable — short/unlit, not a scheduled-jet runway | — |

- **STARs (names only):** Not confirmed from a reachable public source — verify current AIRAC. 🟧
- **LVP:** CAT II/III equipment confirmed via ATIS remark; current status/trigger conditions verify at planning. 🟧 Cross-reference OM E `../../../../../OM E Operations/Low Visibility Operations.md` for the operator's general CAT II/III procedure, and `../../../../../OM E Operations/Cold Weather Operations.md` for winter fog/icing handling relevant to §14.
- **Missed approach watch-items:** No terrain factor (§3.1); the operative missed-approach consideration is re-sequencing among the three-runway layout under Hannover Tower/Bremen Radar.

---

## 11. Departure

- **SIDs (names only — fly the charted version):** Not confirmed from a reachable public source — verify current AIRAC. 🟧
- **RNP / climb-gradient requirements:** No unusual gradient expected at 183 ft elevation; confirm standard RNAV-1 SID equipage requirement on current chart.
- **Take-off minima:** Not confirmed — verify current AIRAC. 🟧
- **Start-up / push-back:** Not confirmed in reachable sources — verify locally. 🟧
- **ATC slot / CTOT & clearance:** No formal slot-coordination regime confirmed for Hannover in reachable sources (unlike EDDB) — verify on the OFP. 🟧
- **De-icing:** Standard German winter climate — de-icing facilities expected available; procedure/frequency not confirmed. 🟧

---

## 12. Noise & Environmental

- **Noise abatement (NAP):** Not itemised in reachable sources beyond the noise-certificate-based night restriction (§6). 🟧
- **Night noise / dB limits:** No specific dB limit found; noise-certificate-based restriction (ICAO Annex 16 Vol I Ch 3/4/14) reported broadly for the ≈2200/2300–0600 local window — Hannover is **not** subject to a hard universal curfew like Hamburg, and 24h cargo/night-mail activity is a known feature of the field. Exact current parameters unconfirmed. 🟧
- **Engine run-up restrictions:** Not confirmed. 🟧
- **Reverse thrust / idle-reverse policy:** Not confirmed. 🟧

---

## 13. Ground operations

- **Stands for our types:** Terminals A/B/C each with jet-bridge-equipped gates (A: 6, B: 6, C: 8), all three capable of handling large aircraft up to Boeing 747-class; Terminal D used for peak-period passenger traffic. Stand adequacy for the K Global fleet not independently confirmed against the current AD chart — expected non-limiting. 🟧
- **Push-back:** Not confirmed as mandatory vs self-manoeuvre — verify locally. 🟧
- **Standard taxi routes:** Confirm with Ground on the day; be explicit about avoiding any routing that would place a K Global type on the short/unlit 09C/27C.
- **Hot spots / tight taxiways:** No specific documented hotspot found in reachable sources beyond the general three-runway/centre-runway awareness item (§3.2/§4). 🟧
- **Follow-me:** Not confirmed. 🟧

---

## 14. Weather & seasonal (durable)

- **Climate / prevailing wind:** North German lowland climate; prevailing wind variable, regular Atlantic frontal passages.
- **Seasonal hazards:** Winter fog/low stratus and icing; the field's confirmed CAT II/III capability exists to manage this. No significant convective season.
- **Local effects:** No terrain-driven local wind phenomena; flat open-plain exposure to frontal wind shifts.

> **Live weather — pull at planning (T-2h):** METAR, TAF, TREND, SIGMET/AIRMET. Not stored here.

---

## 15. NOTAMs

> **Pull at planning (T-2h).** Perishable — not stored here. Check specifically: current runway-in-use (confirm not the short 09C/27C for scheduled traffic), ILS CAT II/III serviceability and LVP status, runway/taxiway closures, navaid U/S, lighting, obstacle/crane, RFF downgrade. Source: AIS / OFP NOTAM block.

---

## 16. Fuel & alternate planning notes

- **Typical role for us:** Destination/origin within the German domestic/regional network; **not a K Global base** (see Snapshot).
- **Nearest suitable alternates:** Per live VAMSYS — **EDDF** (Frankfurt), **EDDB** (Berlin Brandenburg), **EDDH** (Hamburg) `[VAMSYS mirror 2026-07-25]`. Verify current-day suitability/minima. EDDF is K Global's primary hub — see sibling brief `<../EDDF — Frankfurt-Main/EDDF — Briefing.md>`.
- **Fuel-uplift notes:** Jet A-1 expected on field; specific provider/hours not confirmed. 🟧
- **Range/perf flags for our fleet:** No field-length or elevation performance constraint for any K Global type on the main runway (09L/27R). The operative planning risk is confirming the **assigned runway is not the short/unlit centre runway** and respecting current noise-restriction parameters for late/early movements.

---

## 17. Fleet-specific notes (optional)

- No widebody-specific stand or performance constraint identified from reachable sources — all three terminals are stated as capable of handling Boeing 747-class aircraft. Narrow-body short/medium-haul types are the expected equipment on this domestic German field — see OM B `<../../../../../OM B Fleet/Fleet Capability Matrix.md>` for current type assignment; no unique per-type consideration found at Hannover beyond the general three-runway/short-centre-runway awareness item above.

---

## 18. Open items (🟧 — confirm against DFS eAIP / current AIRAC)

- Mag variation epoch, RFF category, PCN — not found in any reachable source.
- Full TORA/TODA/ASDA declared-distance table (only displaced-threshold and full-length figures confirmed; LDA values in §7 are **derived**, not sourced directly).
- **Bremen Radar frequency discrepancy** — one tier-4 source gives 131.325, another gives 132.33; not resolved, verify against a primary chart.
- On-field VOR/DME and ILS component idents/frequencies — could not be confirmed from any reachable free source; only the off-field NIE VOR/DME and CEL NDB are confirmed. CAT II/III capability itself is corroborated only via an ATIS-remark description, not a chart.
- SIDs/STARs — no names confirmed from any reachable public source.
- Exact night-restriction bounds (reported variously as 2200–0600 and 2300–0600 depending on source) and the precise noise-certificate rule set.
- Take-off minima, push-back policy, de-icing procedure, follow-me availability, engine run-up/reverse-thrust policy — none confirmed.
- Exact customs counter hours and ground-handling agent.
- **K Global's internal VAMSYS "Category R" scheme** — meaning/assignment rule undocumented anywhere in K Global's own Knowledge base; internal gap, not a public-source gap.
- **No dedicated Bremen FIR/EDWW airspace brief exists in OM C** — genuine library gap; Hannover is briefed here under the general Europe area brief only for continental corridor context, which explicitly does not cover Bremen FIR.

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim material (current-AIRAC charts) informs content but is not listed here.*

- OurAirports — Hannover Airport (EDDV) runways & frequencies — https://ourairports.com/airports/EDDV/pilot-info.html , https://ourairports.com/airports/EDDV/frequencies.html (retrieved 2026-07-25). *Tier-4 — mirrors AIP-derived data; runway dimensions/displaced thresholds and frequency list taken from here, treated as unconfirmed pending primary AIP cross-check.*
- VATSIM Germany Knowledgebase — EDDV Hannover Airport (Bremen FIR/EDWW) — https://knowledgebase.vatsim-germany.org/books/airports-bremen-fir-edww/chapter/eddv-hannover , https://knowledgebase.vatsim-germany.org/books/sops-fir-bremen/chapter/eddv-hannover-airport (retrieved 2026-07-25). *Tier-4 operational cross-check — confirmed Bremen FIR/Bremen Radar control structure; EDDV listed as an unrestricted Bremen FIR training airport.*
- Wikipedia — Hannover Airport — https://en.wikipedia.org/wiki/Hanover/Langenhagen_International_Airport (retrieved 2026-07-25). *Terminal A/B/C/D structure, Karl Jatho GA terminal, 24h-operation note with limited overnight movements, historical overnight-integrator/night-airmail hub role, general facts cross-check.*
- VATSIM Germany Knowledgebase — Altimetry (Air Law) — https://knowledgebase.vatsim-germany.org/books/air-law/page/altimetry (retrieved 2026-07-25). *German nationwide TA 5,000 ft / TL FL60 (FL70 if QNH < 1013).*

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-25 | Initial baseline stub (Navigraph-seeded position/elevation only). |
| v0.2 | 2026-07-25 | Built from DFS eAIP; K Global fields from live VAMSYS. Full 18-section brief built from OurAirports/tier-4 public mirrors, VATSIM-Germany operational cross-check, and Wikipedia general-facts corroboration. Three-runway configuration with a short, unlit centre runway (09C/27C) identified as the standing TEM item; Bremen FIR/Bremen ACC (EDWW) control structure confirmed (not Langen); CAT II/III capability confirmed via ATIS LVP remark; Hannover's 24h-but-noise-restricted operating pattern (distinct from Hamburg's hard curfew) captured. Numerous secondary items (RFF, PCN, exact declared distances, on-field navaid idents, SIDs/STARs, exact night-restriction bounds, a Bremen Radar frequency discrepancy between two tier-4 sources) remain open 🟧 pending primary AIP/current-AIRAC confirmation — see §18. K Global's internal "Category R" scheme flagged as an undocumented internal gap. |
| v0.3 | 2026-07-25 | Folded to 4-page pack (Briefing + Dispatch + Departure + Arrival), per new airport-documentation policy. Content preserved unchanged from v0.2; all relative links re-pointed one level deeper for the new folder location. No dedicated Bremen FIR/EDWW airspace brief exists — flagged 🟧 and linked to the general Europe area brief for continental-corridor context only (§4/§18). |
