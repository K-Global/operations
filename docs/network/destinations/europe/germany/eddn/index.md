# EDDN — Nuremberg · Airport Briefing

**EDDN / NUE** · Nuremberg, Bavaria, Germany · Europe
**Version** v0.2 · **Updated** 2026-07-25 · **Status** Draft

> **Read-me:** Planning aid for the sim, not a chart. Companion to the [EDDN Dispatch](dispatch.md), [Departure](departure.md) and [Arrival](arrival.md) pages. Static data is drawn from the DFS eAIP (Germany's AIP of record) where reachable, cross-checked against public tier-4 sources; approaches/SIDs/STARs are listed **by name only** — fly the charted current-AIRAC version. Live weather/NOTAMs are pulled at planning (§14/§15). Open 🟧 items are listed in §18. Flag legend 🟥 restriction/hazard · 🟧 caution/unverified · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| ARP (lat/long) | 49°29.92′N / 011°04.68′E (49.498699, 11.078056) `[OurAirports/SkyVector mirror, retrieved 2026-07-25]` |
| Field elevation | **1,046 ft / 319 m** MSL |
| Mag variation | 🟧 Not confirmed for EDDN specifically — confirm on current AIP/chart |
| Time zone | UTC +1 (CET) / UTC +2 (CEST, EU DST observed) |
| Runway(s) | **10/28** — single runway, 2,700 × 45 m (8,858 × 148 ft), asphalt |
| Preferential runway | 🟧 Not confirmed — single runway, wind-driven direction of use |
| Longest LDA | 🟧 Physical length 2,700 m (8,858 ft); exact published LDA/TORA/TODA/ASDA not confirmed — see §7 |
| Approaches | 🟧 Not independently confirmed — ILS reported present (widebody/An-124-class traffic operates here per Wikipedia); category/minima to verify on current AIRAC |
| RFF category | 🟧 Not published in reachable sources; **explicitly not licensed for Code F / Airbus A380 operations** (Wikipedia) — see §5/§17 |
| Control type | **Radar/procedural mix** — approach handled by München Radar (see §18 FIR note), field-level TWR/GND controlled |
| Elevation class | Modest elevation (1,046 ft) — **not** hot-and-high; no density-altitude performance driver |
| Special-airport status | 🟧 **VAMSYS aerodrome category: not set** — treat as small/regional pending reconciliation. Smaller single-runway regional field; **licensed for 24/7 operation with a genuine, locally controversial history of scheduled night passenger flights** — a correction to the assumption that this is a curfewed field, see §3.5 |
| Customs / PoE | 🟧 Not confirmed from reachable sources; scheduled international service implies a customs presence |
| K Global category | 🟧 **Not set in VAMSYS** `[VAMSYS mirror 2026-07-25]` — treat as small/regional pending reconciliation |
| K Global base | **No** `[VAMSYS mirror 2026-07-25]` |
| Company preferred alternates | 🟧 **None set in VAMSYS** `[VAMSYS mirror 2026-07-25]` — open network-planning item, see §16/§18 |
| Taxi-in / taxi-out (VAMSYS) | 🟧 **Not set in VAMSYS** `[VAMSYS mirror 2026-07-25]` |

---

## 2. Validation summary

| Domain | Flag | Note |
|---|---|---|
| Terrain / CFIT | 🟩 | Modest elevation, no close-in high terrain identified — see §3.1. |
| Runway length vs fleet perf | 🟩 | 2,700 m (8,858 ft) accommodates current widebody/cargo types per real-world traffic (incl. Boeing 747, Antonov An-124); no length constraint identified for our narrowbody fleet. **A380 (Code F) explicitly not licensed** regardless of length — see §5. |
| Approach availability / minima | 🟧 | Not independently confirmed — verify on current AIRAC. |
| Airspace / traffic / control | 🟧 | Approach traffic worked by **München Radar** — this field sits in **München FIR (EDMM)**, not Langen (EDGG); the only FIR brief built in this network so far is Langen — see §18. |
| Weather / seasonal hazard | 🟧 | Central/southern German climate; winter fog/icing standard seasonal item — see §14. |
| Curfew / slots / hours | 🟧 | **No hard curfew** — licensed 24/7, with a genuine and locally contested pattern of scheduled night passenger flights (esp. summer leisure/charter) — correcting the assumption of a restricted-hours field. |
| RFF category vs our types | 🟥 | **Not licensed for the Airbus A380 (Code F)** — directly relevant given A388 is in the K Global fleet; confirm before ever routing an A388 here. |
| Fuel availability | 🟧 | Not confirmed from reachable sources. |
| Customs / handling / security | 🟧 | Not confirmed; two cargo centres (CCN, CCN II) operate on-field with a third (CCN3) planned. |

---

## 3. Threat & Error Management (TEM)

### 3.1 CFIT / Terrain 🟩
EDDN sits at a modest 1,046 ft MSL north of the city of Nuremberg, in the Franconian region of northern Bavaria. No close-in high terrain is identified in reachable sources; this is not a CFIT-significant field. Read the MSA/obstacle ring on the current chart for exact sector minima as a matter of course.

### 3.2 Airborne conflict / traffic 🟧
EDDN's approach control is worked by **München Radar** (confirmed via the field's own published frequency table), which places it inside **München FIR (EDMM)** — a real-world fact also stated explicitly in this network's own [Langen (EDGG) FIR brief](../../../../airspace/fir/europe/langen-edgg.md) §7, which lists Nuremberg (EDDN) as sitting in München FIR, not Langen. **No München FIR brief has been built yet in this network** — this is a genuine gap, not an error in this file; see §18. This file links to the [Europe area brief](../../../../airspace/europe.md) 🟧 for regional context pending a dedicated München (EDMM) FIR build. Traffic is a mix of scheduled passenger (notably strong summer leisure/charter demand to the Mediterranean, Canary Islands and Egypt), general aviation, and freight — plus, notably, **occasional rerouted arrivals diverted from Munich or Frankfurt during those hubs' night curfews**, since EDDN is one of the nearest licensed-for-night-ops fields to both.

### 3.3 Runway excursion 🟧
**Single runway 10/28** (2,700 × 45 m / 8,858 × 148 ft, asphalt), no crosswind alternative on the field. A January 2010 Boeing 737-800 runway excursion during a take-off roll (skidded off before rotation) closed the airport for several hours — a real, if dated, precedent for the excursion risk on this runway; no contamination/tailwind-tendency data found beyond that incident report. Exact TORA/TODA/ASDA/LDA are **not confirmed** from reachable sources.

### 3.4 Weather threat 🟧
Central/southern German continental-leaning climate: winter (Nov–Mar) fog/low stratus and icing are the standing seasonal items; summer convective activity handled tactically under radar. See §14.

### 3.5 Operational considerations 🟥
**Correcting an assumption:** EDDN is **not** a curfew-restricted field. Unlike most German airports, Nuremberg is **licensed for 24/7 operation** and genuinely operates scheduled passenger flights at night, especially during the summer leisure season — the airport's own stated rationale is that slots at busy destinations (e.g. Antalya) are only available for night departures/arrivals. This is locally controversial: it has drawn a formal noise complaint from the Lord Mayor of neighbouring Erlangen (whose city partially sits under the flight path) and periodic citizen opposition. Cargo, GA and military traffic also operate at night in winter, when scheduled passenger night flights are less common. Brief this explicitly: EDDN's operational character is closer to EDDK's (§3.5 in that brief) than to EDDS's curfew-restricted profile, though EDDN's night activity is passenger-leisure-driven rather than cargo-hub-driven. Separately, **EDDN is explicitly not licensed for Airbus A380 (Code F) operations** — relevant given the A380 (A388) is in the K Global fleet; see §5/§17.

---

## 4. Cautions & Warnings

- **Not a curfew field** — EDDN is licensed 24/7 and genuinely operates scheduled night passenger flights, especially in summer; do not assume a quiet overnight ramp.
- **Single runway, no crosswind alternative** — plan alternates accordingly; see the 2010 runway-excursion precedent (§3.3).
- **Not licensed for the Airbus A380 (Code F)** — do not route an A388 here without independent confirmation the restriction has changed.
- **Approach traffic worked by München Radar** — this field is in München FIR (EDMM), not Langen (EDGG); no FIR brief exists yet for München in this network — see §18.
- **VAMSYS aerodrome category, preferred alternates and taxi times are not set** — treat operational planning fields as provisional pending reconciliation. 🟧

---

## 5. Aerodrome category, restrictions & crew qualification

- **Special-airport / category:** Not identified as a special/restricted-category airport beyond the A380 exclusion below. **VAMSYS aerodrome category: not set** 🟧 — treat as small/regional pending reconciliation.
- **Crew-qualification gate:** 🟧 Not confirmed from reachable sources.
- **Operating restrictions / bans:** **Not licensed for the Airbus A380 (Code F)** (Wikipedia, corroborated by the airport's own real-world traffic profile which otherwise accommodates widebody/heavy cargo types incl. Boeing 747 and Antonov An-124) — the restriction is understood to be a certification/licensing matter (stand/code-letter infrastructure), **not** a runway-length constraint; confirm exact basis and any change on the current AIP before ever planning an A388 movement here. No RNP AR/circling restriction identified — verify current AIRAC.
- **Overflight / entry / permits:** Standard EU/Schengen operation — no permits required.
- **Operations notes:** ANSP — DFS Deutsche Flugsicherung; approach handled by München Radar. Airport operator — Flughafen Nürnberg GmbH. Two cargo centres operate on-field (CCN, CCN II) with a third (CCN3) in planning; Ryanair maintains a maintenance/base presence, Eurowings has re-based here.

---

## 6. General / hours / services

| Item | Value | Flag |
|---|---|---|
| ATS hours | 🟧 Not independently confirmed as H24 — the airport's own 24/7 licensing is well corroborated | 🟧 |
| AD operating hours | **Licensed for 24/7 operation** (Wikipedia, well-corroborated); genuine scheduled night passenger traffic, especially summer leisure | 🟩 (for licensing status) |
| Night / curfew restrictions | **No hard curfew** — see §3.5. Locally contested on noise-abatement grounds. | 🟧 (politically live, not a hard operational limit) |
| RFF category | 🟧 Not published in reachable sources | 🟧 |
| Fuel | 🟧 Not confirmed from reachable sources | 🟧 |
| PCN | 🟧 Not published in reachable sources | 🟧 |
| Customs | 🟧 Not confirmed — scheduled international service implies a customs presence | 🟧 |
| Handling / FBO | Two on-field cargo centres (CCN, CCN II; CCN3 planned) confirmed via airport/press sources | 🟩 |

---

## 7. Runways & declared distances

| RWY | Dimensions | Surface | TORA | TODA | ASDA | LDA | Notes |
|---|---|---|---|---|---|---|---|
| 10 | 2,700 × 45 m (8,858 × 148 ft) | Asphalt | 🟧 not confirmed | 🟧 | 🟧 | 🟧 | Single runway, no crosswind alternative |
| 28 | 2,700 × 45 m (8,858 × 148 ft) | Asphalt | 🟧 not confirmed | 🟧 | 🟧 | 🟧 | |

*Physical runway dimensions from OurAirports (retrieved 2026-07-25). TORA/TODA/ASDA/LDA and PCN are **not confirmed** — the DFS eAIP (aip.dfs.de) rendered no retrievable text on direct fetch (JS-rendered frameset); a Wikipedia citation to an archived AIP VFR page (aip.dfs.de/BasicIFR/pages/C00543.html) likewise returned no retrievable content on this build's direct fetch. Treat all declared-distance figures as physical length only pending AIP/current-AIRAC confirmation.*

---

## 8. Communications

| Service | Callsign | Frequency | Hours | Notes |
|---|---|---|---|---|
| ATIS | Nuernberg ATIS | 123.08 | 🟧 H24 assumed | |
| Ground | Nuernberg Ground / Rollkontrolle | 121.76 | 🟧 H24 assumed | |
| Tower | Nuernberg Tower / Turm | 118.305 | 🟧 H24 assumed | |
| Approach / Director | Nürnberg Director | 119.475 | 🟧 H24 assumed | |
| Centre / FIR | München Radar | 129.525 | H24 | **Confirms EDDN sits in München FIR (EDMM), not Langen (EDGG)** — see §3.2/§18 |

*Two "Langen Information" entries (120.65, 125.8) appear in the tier-4 frequency table, labelled AFIS — a documented data-quality inconsistency: a prior public comment on this same source explicitly notes the AFIS label is a mislabel at a controlled tower field like EDDN, and the München Radar entry independently confirms this is not a Langen-FIR field; treat both "Langen Information" entries as unreliable/likely mislabelled. Berlin VOLMET 128.405. Source: OurAirports frequency table (retrieved 2026-07-25) — tier-4; not independently cross-checked against the DFS eAIP.* 🟧

---

## 9. Navaids

| Aid | Ident | Freq | Hours | Notes |
|---|---|---|---|---|
| DME | NGD (Nürnberg) | 113.10 | H24 assumed | On field (0.2 nm NNE of ARP) |
| ILS | 🟧 not confirmed | 🟧 | — | Not independently confirmed from reachable sources — verify on current AIRAC chart |

*On-field navaid ident/frequency from OurAirports navaid-proximity data (retrieved 2026-07-25) — tier-4, not cross-checked against the DFS eAIP.*

---

## 10. Arrival

- **Transition altitude / level:** 🟧 Not confirmed — confirm on current AIP.
- **Speed:** Standard ICAO/EU 250 KIAS below FL100 — confirm no local override.
- **Preferential runway logic:** Single runway — direction of use is wind-driven. Confirm any noise-preferential routing on current AIP given the field's active noise-abatement controversy (§3.5).
- **Approaches (names only — verify minima on current AIRAC charts):** 🟧 Not confirmed from reachable sources — pull from current AIRAC.
- **STARs (names only):** 🟧 Not confirmed.
- **LVP:** 🟧 Not confirmed.
- **Missed approach watch-items:** No significant terrain factor identified (§3.1); confirm current published missed approach on the AIRAC chart.

---

## 11. Departure

- **SIDs (names only — fly the charted version):** 🟧 Not confirmed from reachable sources.
- **RNP / climb-gradient requirements:** No unusual gradient expected at this modest elevation — confirm standard RNAV SID equipage on current chart.
- **Take-off minima:** 🟧 Not confirmed.
- **Start-up / push-back:** 🟧 Not confirmed.
- **ATC slot / CTOT & clearance:** 🟧 Slot-coordination status not confirmed — smaller regional field, less likely to be as tightly slot-constrained as EDDS, but not verified.
- **De-icing:** 🟧 Not confirmed — expect a winter requirement given the region's climate.

---

## 12. Noise & Environmental

- **Noise abatement (NAP):** 🟧 Procedural detail not confirmed, but the underlying noise-abatement conflict is well documented — the airport's night-flight pattern has drawn a formal complaint from the Lord Mayor of Erlangen and periodic citizen opposition, specifically over passenger flights operating at night in the flight-path corridor.
- **Night noise / dB limits:** 🟥 **No hard curfew** (§3.5) — this is itself the noise-abatement controversy; exact dB limits/quota not independently confirmed.
- **Engine run-up restrictions:** 🟧 Not confirmed.
- **Reverse thrust / idle-reverse policy:** 🟧 Not confirmed.

---

## 13. Ground operations

- **Stands for our types:** 🟧 Not confirmed in detail — the field handles scheduled narrowbody passenger traffic, general aviation, and dedicated cargo-centre freight operations.
- **Push-back:** 🟧 Not confirmed.
- **Standard taxi routes:** 🟧 Not confirmed — confirm with Ground on the day.
- **Hot spots / tight taxiways:** 🟧 None identified from reachable sources.
- **Follow-me:** 🟧 Not confirmed.

---

## 14. Weather & seasonal (durable)

- **Climate / prevailing wind:** Central/southern German continental-leaning climate.
- **Seasonal hazards:** Winter (Nov–Mar) fog/low stratus and icing, consistent with the general pattern described for the region in the [Langen (EDGG) FIR brief](../../../../airspace/fir/europe/langen-edgg.md) §11 (noting EDDN itself sits in the adjacent München FIR — see §18); summer convective activity handled tactically under radar.
- **Local effects:** None identified beyond the general regional pattern.

> **Live weather — pull at planning (T-2h):** METAR, TAF, TREND, SIGMET/AIRMET. Not stored here.

---

## 15. NOTAMs

> **Pull at planning (T-2h).** Perishable — not stored here. Check specifically: single-runway closure/contamination status (no on-field alternative), ILS/navaid outages, lighting, obstacle/crane, RFF downgrade, GPS/RAIM, and any change to the A380 non-licensing status. Source: official AIS / OFP NOTAM block.

---

## 16. Fuel & alternate planning notes

- **Typical role for us:** Destination/origin — EDDF–EDDN City-unit regional spoke, currently filed at *proposed* status in the live route register against an **E195** airframe.
- **Nearest suitable alternates:** 🟧 **No company preferred alternates currently set in VAMSYS** — treat this as an open network-planning item rather than a brief inaccuracy; nearest major fields in real-world terms include EDDM (Munich, München FIR) and EDDF (Frankfurt, Langen FIR), neither yet confirmed as the designated alternate for EDDN.
- **Fuel-uplift notes:** 🟧 Not confirmed from reachable sources.
- **Range/perf flags for our fleet:** No length constraint identified for narrowbody/regional-jet types; **the Airbus A380 (A388) is explicitly excluded** regardless of any other planning factor (§5/§17). See [`OM E — Short and Limited Runway Operations`](../../../../../flight-ops/short-and-limited-runway-operations.md) for single-runway planning discipline and [`OM E — Cold Weather Operations`](../../../../../flight-ops/cold-weather-operations.md) for winter-fog/icing planning.

---

## 17. Fleet-specific notes (optional)

- **A388 / Airbus A380 (OM B):** **Not licensed for operation at EDDN.** This is a genuine, sourced restriction (Wikipedia; consistent with the field otherwise accommodating other widebody/heavy types) rather than a runway-length issue — see [`OM B — A388 Dispatch`](../../../../../fleet/a388/dispatch.md). Confirm on the current AIP if this ever needs re-checking, but treat as a hard exclusion for planning purposes.
- **E195 (route register):** The live route register currently files the EDDF–EDDN City-unit spoke against an **E195** airframe. This type **does not currently appear in the OM B Fleet directory** (Airbus/Boeing/business-jet types only) — an unresolved fleet-census item (see the company Knowledge base), not something this brief can resolve. Flagged here for network-planning awareness rather than corrected unilaterally.

---

## 18. Open items (🟧 — confirm against AIP / current AIRAC)

- **DFS eAIP unreachable** — direct fetch of aip.dfs.de returned no retrievable text (JS-rendered frameset), including the specific archived AIP-VFR page cited by Wikipedia for EDDN; this entire brief rests on tier-4 corroboration (OurAirports, Wikipedia, SkyVector coordinate mirror).
- **München FIR (EDMM) brief does not yet exist in this network** — EDDN's approach is confirmed worked by München Radar, placing it in München FIR per this network's own Langen (EDGG) brief (§7), not Langen. This file links to the Langen brief only for the shared regional weather/seasonal-pattern context (§14) and to the [Europe area brief](../../../../airspace/europe.md) for general regional context — treat EDDN's actual controlling FIR as München (EDMM) and flag the missing brief for a future build. 🟧
- **Declared distances (TORA/TODA/ASDA/LDA), PCN, RFF category** — not confirmed beyond physical runway length.
- **ILS presence/category/ident/frequency, SIDs/STARs, take-off minima, transition altitude** — none confirmed from reachable tier-4 sources.
- **A380 exclusion basis** — understood as a certification/licensing matter, not independently confirmed against the current AIP; re-verify if this airport is ever considered for a widebody diversion.
- **VAMSYS operational fields:** aerodrome category not set, no company preferred alternates set, taxi-in/out times not set — all flagged as open network-reconciliation items, not brief errors.
- **E195 fleet-census mismatch** — the route register files EDDN against a type absent from the OM B Fleet directory; tracked as a backlog item, not resolved here.

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim material informs content but is not listed here.*

- **DFS eAIP** (Deutsche Flugsicherung GmbH) — attempted direct fetch, https://aip.dfs.de/BasicIFR/ and the archived AIP-VFR page cited by Wikipedia, https://aip.dfs.de/BasicIFR/pages/C00543.html (both retrieved 2026-07-25) — both returned no retrievable text (JS-rendered frameset); primary source of record but not reachable this build.
- OurAirports — Nuremberg Airport (NUE, EDDN) — https://ourairports.com/airports/EDDN/ , /runways.html , /frequencies.html , /closest-navaids.html (all retrieved 2026-07-25). *Tier-4 — runway physical dimensions, ARP/elevation, frequency table (incl. the München Radar entry confirming FIR placement), on-field navaid ident.*
- Wikipedia — Nuremberg Airport — https://en.wikipedia.org/wiki/Nuremberg_Airport (retrieved 2026-07-25). *24/7 licensing and night-flight controversy (Erlangen Lord Mayor complaint); A380 non-licensing; cargo-centre history (CCN/CCN II/CCN3); 2010 runway-excursion incident; widebody/An-124-class traffic capability.*
- SkyVector — coordinate/chart-index mirror (cross-check only, page fetch timed out this build; coordinates corroborated via OurAirports) — https://skyvector.com/airport/EDDN.

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-14 | Baseline stub — position/elevation seeded from Navigraph navdata. |
| v0.2 | 2026-07-25 | Built from DFS eAIP; K Global fields from live VAMSYS. Full briefing built from tier-4 corroboration (DFS eAIP unreachable — JS-rendered frameset, incl. the specific archived AIP page cited by Wikipedia). **Corrected an initial build assumption**: EDDN is licensed for 24/7 operation with a genuine, locally contested history of scheduled night passenger flights — not a curfew-restricted field. Identified and flagged that EDDN's approach is worked by München Radar, placing it in München FIR (EDMM) per this network's own Langen FIR brief — no München FIR brief yet exists. Flagged the A380 non-licensing restriction (relevant to the A388 in the K Global fleet) and an E195 fleet-census mismatch in the live route register. VAMSYS aerodrome category, preferred alternates and taxi times remain unset — flagged as network-reconciliation items rather than brief errors. **Folded to 4-page pack 2026-07-25** — Dispatch, Departure and Arrival pages added; relative links adjusted for the new one-level-deeper folder location; added a pointer to the Europe area brief pending a dedicated München (EDMM) FIR build; Briefing text otherwise unchanged. |
