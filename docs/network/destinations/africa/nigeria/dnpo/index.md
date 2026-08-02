# DNPO — Obafemi Jeremiah Awolowo · Airport Briefing

**DNPO / PHC** · Port Harcourt (Omagwa), Rivers State, Nigeria · Africa
**Version** v0.1 · **Updated** 2026-07-26 · **Status** Draft — AIP Nigeria (NCAA)-derived, provisional

> **Read-me:** Planning aid for the sim, not a chart. Static data is drawn from AIP Nigeria (NAMA/NCAA) where reachable, cross-checked against public aeronautical data; approaches/SIDs/STARs are listed **by name only or flagged not-yet-confirmed** — fly the charted current-AIRAC version. Live weather/NOTAMs are pulled at planning (§14/§15). Open 🟧 items are listed in §18. Flag legend 🟥 restriction/hazard · 🟧 caution/unverified · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| ARP (lat/long) | N05°00′55″ / E006°57′00″ (5.0155, 6.9500) `[OurAirports/public nav data]`; a second public source gives 91 ft/27.7 m elevation vs. OurAirports' 87 ft/27 m — minor discrepancy, not resolved 🟧 |
| Field elevation | **87–91 ft / 27–28 m AMSL** (two public sources differ slightly — see above) |
| Mag variation | 🟧 Not published / verify — no field-specific sourced figure found |
| Time zone | UTC+1 (WAT, no DST) |
| Runway(s) | **03/21**, 3,000 × 60 m (9,843 × 197 ft), asphalt, lighted — **single runway, no crosswind alternative** |
| Preferential runway | 🟧 Not published / verify — no published preferential-runway rule found |
| Longest LDA | 🟧 Not published / verify — full paved length (3,000 m) assumed pending AIP declared-distance confirmation |
| Approaches | 🟧 Not confirmed this pass by name — a public source reports a **"CAT III lighting system"** became fully operational in 2008 following the field's 2006–07 runway closure/repair; this refers to **lighting infrastructure, not a confirmed CAT III ILS approach capability** — treat as unconfirmed pending AIP cross-check |
| RFF category | 🟧 Not published / verify |
| Control type | **Procedural (no radar)** in the FIR's general terms, though Port Harcourt is one of the four national TRACON sites named in the Kano (DNKK) FIR brief (alongside Lagos, Kano, Abuja) — radar/surveillance around the terminal is plausible but **not independently confirmed as currently serviceable** 🟧. Worked within the single **Kano (DNKK) FIR** — see [Kano (DNKK) FIR brief](../../../../airspace/fir/africa/kano-dnkk.md) |
| Elevation class | Near sea-level (87–91 ft) — **not** hot-and-high; non-issue for performance |
| Special-airport status | Not operator-categorised — **none categorised in VAMSYS** 🟧 |
| Customs / PoE | **Yes** — international terminal (new international terminal commissioned 25 Oct 2018); desk hours not confirmed 🟧 |
| K Global category | **Not categorised in VAMSYS** 🟧 |
| K Global base | **No** 🟩 |
| Company preferred alternates | **FGSL, FKKD, DNMM** (cross-country/unbuilt — plain ICAO reference only) |
| Taxi-in / taxi-out (VAMSYS) | **Not published / verify** 🟧 |

---

## 2. Validation summary

| Domain | Flag | Note |
|---|---|---|
| Terrain / CFIT | 🟩 | Omagwa/Port Harcourt sits in the low-lying Niger Delta, no close-in high terrain identified. |
| Runway length vs fleet perf | 🟩 | 3,000 m is adequate for narrowbody types and non-limiting field length generally; no widebody-specific evaluation performed. |
| Approach availability / minima | 🟧 | Approach list/minima not confirmed by name; runway-lighting upgrade (2008) suggests some low-visibility infrastructure investment, but capability class not confirmed. |
| Airspace / traffic / control | 🟧 | One of the four national TRACON sites named in the Kano FIR brief; current radar serviceability not independently confirmed — that brief flags radar reliability/obsolescence as a live watch item across the network. |
| Weather / seasonal hazard | 🟥 | **Wet-season heavy rain and low-visibility landing conditions** are a directly evidenced hazard at this field — see §3.4 (accident history). Harmattan haze (Nov–Mar) is milder here than the northern fields in this build but still present. |
| Curfew / slots / hours | 🟧 | Not published / verify. |
| RFF category vs our types | 🟧 | Not published / verify. |
| Fuel availability | 🟧 | Not confirmed — a full international terminal and historical wide-body/freighter international service suggest reasonable fuel provision, but hours/supplier not confirmed. |
| Customs / handling / security | 🟩/🟧 | International terminal confirmed (2018); desk hours and handling agent not confirmed. |
| Wildlife hazard | 🟥 | A **documented wildlife strike** (cattle on/near the runway, 2005) is on this field's public accident record — see §3.4/§4. |

---

## 3. Threat & Error Management (TEM)

### 3.1 CFIT / Terrain 🟩
DNPO sits at roughly 87–91 ft AMSL in the low-lying Niger Delta near Omagwa, Rivers State — no close-in high terrain has been identified in reachable sources. Verify the MSA ring on the current chart as routine practice; no AIRAC-sourced terrain chart was reachable this pass.

### 3.2 Airborne conflict / traffic 🟧
DNPO is named as one of the four national TRACON radar sites in the Kano (DNKK) FIR brief (alongside Lagos, Kano and Abuja), suggesting the field carries some surveillance infrastructure — but that same brief flags **radar serviceability/obsolescence concerns** as a live, network-wide watch item, and no field-specific current-status confirmation was reached this pass. Treat surveillance as **not guaranteed** and confirm live. Cross-ref [Kano (DNKK) FIR brief](../../../../airspace/fir/africa/kano-dnkk.md) and the [Africa airspace brief](../../../../airspace/africa.md).

### 3.3 Runway excursion 🟥
Single runway (03/21), 3,000 × 60 m. **This field carries a genuine, documented runway-excursion/approach-accident history**, not merely a theoretical caution: an MK Airlines DC-8 freighter struck trees and landed short in 1996; an MK Airlines Boeing 747-200F crashed on short final in bad weather in 2001 (a Nigerian civil-aviation accident report attributed this to a non-standard low-altitude autopilot final-approach technique, contrary to company policy); an Air Peace Boeing 737 exited the runway landing in heavy rain in 2019; and a ValueJet CRJ900 skidded off the runway in 2023. This is the field's single most important TEM item — **wet-season heavy rain directly correlates with this field's accident record.** No displaced thresholds were found in reachable sources; not independently AIP-confirmed.

### 3.4 Weather threat 🟥
**Wet-season heavy rain (roughly April–October)** is the field's defining and *evidenced* hazard — not a generic regional caution but a factor directly implicated in at least two of the runway-excursion/approach events above (2001 bad-weather short-final crash; 2019 heavy-rain runway excursion). The field underwent an emergency closure in 2006 after an electrical fire made runway/fence repairs urgent, reopening in December 2007 with restricted daytime-only operations until a **new CAT III-standard lighting system** became fully operational in early 2008 (public source; interpret as a lighting/infrastructure upgrade, not a confirmed instrument-approach category — see §1). **Harmattan haze (Nov–Mar)** is present but typically milder in this near-coastal Niger Delta location than the northern fields in this build. See §14.

### 3.5 Operational considerations 🟥
Single-runway field with **no crosswind runway option**. A **wildlife hazard is directly documented**: an Air France Airbus A330 collided with a herd of cattle just after touchdown in 2005, damaging the nose and forcing cancellation of the return service — treat livestock/wildlife incursion as a real, evidenced runway-environment hazard here, not a generic caution. The field earned public notoriety as reportedly "the world's worst airport" around 2015 before a new international passenger terminal opened in 2018; treat older commentary as historical context, not a current operational fact. No special-airport/crew-qualification category found in reachable sources; **none categorised in VAMSYS**.

---

## 4. Cautions & Warnings

- **Wet-season heavy rain is directly implicated in this field's accident history** (2001 bad-weather approach crash; 2019 runway excursion in heavy rain) — treat any wet-season arrival with elevated caution and a firm stabilized-approach/go-around discipline.
- **Documented wildlife (cattle) hazard on/near the runway** (2005 nose-strike incident) — maintain a runway-environment visual scan on approach and after touchdown.
- **Single runway, no crosswind alternative** — a strong crosswind event on 03/21 has nowhere else on the field to go; brief the divert option early.
- A **1996 tree-strike/short landing** and a **2023 runway-excursion skid** are both on this field's public accident record — general situational awareness, not necessarily a standing current-day constraint given the field's 2018 terminal/infrastructure renewal.
- The **"CAT III lighting"** claim (2008) has **not been independently confirmed as an instrument-approach capability** — do not assume CAT II/III approach minima are available without AIP/chart confirmation.

---

## 5. Aerodrome category, restrictions & crew qualification

- **Special-airport / category:** Not operator-categorised — **none categorised in VAMSYS**. No AIP special-airport designation found in reachable sources. 🟧
- **Crew-qualification gate:** None formally identified, but given the documented wet-season accident history (§3.3/§3.4), a heightened stabilized-approach/go-around briefing discipline is a sound operational practice regardless of formal categorisation. 🟧
- **Operating restrictions / bans:** None found in reachable sources — verify current AIP for any RNP AR / circling / night-ops restriction. 🟧
- **Overflight / entry / permits:** Standard Nigeria international entry via the 2018 international terminal; overflight/landing permit requirements for foreign operators are a standing Nigeria-wide dispatch item — see the [Kano (DNKK) FIR brief](../../../../airspace/fir/africa/kano-dnkk.md) §10. 🟧
- **Operations notes:** Airport owned/operated by the **Federal Airports Authority of Nigeria (FAAN)**; the Nigerian Civil Aviation Authority maintains a Port Harcourt regional office on the airport grounds (public source). ANSP is **NAMA** within the single Kano (DNKK) FIR.

---

## 6. General / hours / services

| Item | Value | Flag |
|---|---|---|
| ATS hours | Not published / verify; historical (2007–08) daytime-only restriction was **temporary**, tied to the post-fire repair period — current status not confirmed | 🟧 |
| AD operating hours | Not published / verify | 🟧 |
| Night / curfew restrictions | None currently identified, but see historical daytime-only note above | 🟧 |
| RFF category | Not published / verify | 🟧 |
| Fuel | Not confirmed — international terminal and historical freighter/widebody service suggest reasonable provision | 🟧 |
| PCN | Not published / verify | 🟧 |
| Customs | **Yes** — international terminal (2018); desk hours not confirmed | 🟧 |
| Handling / FBO | Not confirmed | 🟧 |

---

## 7. Runways & declared distances

| RWY | Dimensions | Surface / PCN | TORA | TODA | ASDA | LDA | Notes |
|---|---|---|---|---|---|---|---|
| 03 | 3,000 × 60 m | Asphalt, lighted / PCN not published 🟧 | 3,000 m 🟧 | 3,000 m 🟧 | 3,000 m 🟧 | 3,000 m 🟧 | Declared distances assumed equal to full paved length pending AIP confirmation; no displaced threshold found |
| 21 | 3,000 × 60 m | Asphalt, lighted / PCN not published 🟧 | 3,000 m 🟧 | 3,000 m 🟧 | 3,000 m 🟧 | 3,000 m 🟧 | As above |

*Source: OurAirports runway extract (public tier-4). Declared distances are **not** independently AIP-sourced this pass — treat the TORA/TODA/ASDA/LDA figures above as a placeholder equal to total paved length, not a verified declared-distance table. All distances in metres.*

---

## 8. Communications

| Service | Callsign | Frequency | Hours | Notes |
|---|---|---|---|---|
| ATIS | Port Harcourt ATIS | 123.8 | Not published / verify | 🟧 tier-4 sourced (OurAirports) |
| Delivery | Not published / verify | — | — | 🟧 |
| Ground | Not published / verify | — | — | 🟧 |
| Tower | Port Harcourt Tower | 119.2 | Not published / verify | 🟧 tier-4 sourced |
| Approach | Port Harcourt Approach | 124.9 | Not published / verify | 🟧 tier-4 sourced; one of the four TRACON-named sites per the Kano FIR brief |
| Centre / FIR | Kano ACC / Lagos ACC (Kano DNKK FIR) | Per current AIRAC | H24 | See [Kano (DNKK) FIR brief](../../../../airspace/fir/africa/kano-dnkk.md) — likely Lagos ACC given southern location; exact sector split not confirmed |

*Source: OurAirports frequency extract (public tier-4) — treat as unconfirmed pending a live-AIRAC cross-check.*

---

## 9. Navaids

| Aid | Ident | Freq | Hours | Notes |
|---|---|---|---|---|
| Not published / verify | — | — | — | 🟧 No navaid data reached in this research pass; a 2008 lighting upgrade is documented (§3.4) but its ILS/navaid-category implication is not confirmed |

---

## 10. Arrival

- **Transition altitude / level:** 🟧 Not published / verify.
- **Speed:** Standard 250 KIAS below FL100 (ICAO norm) — confirm no local override on current chart.
- **Preferential runway logic:** Not published — wind-driven choice between 03 and 21 assumed.
- **Approaches (names only — verify minima on current AIRAC charts):**

| RWY | Approach | IAF | FAF/FAP alt | Notes |
|---|---|---|---|---|
| 03 | Not confirmed by name 🟧 | — | — | 2008 lighting upgrade suggests some low-vis infrastructure; approach category not confirmed |
| 21 | Not confirmed by name 🟧 | — | — | Pull current-AIRAC procedure list at planning |

- **STARs (names only):** Not confirmed in reachable research pass. 🟧
- **LVP:** Wet-season heavy rain is the field's **evidenced** LVP-relevant trigger (§3.3/§3.4) — exact RVR/procedure not confirmed. 🟥
- **Missed approach watch-items:** No terrain-driven concern identified (low-lying delta terrain); the historical accident record (§3.3) makes a firm go-around discipline in poor weather the standing watch-item, not terrain.

---

## 11. Departure

- **SIDs (names only — fly the charted version):** Not confirmed in reachable research pass. 🟧
- **RNP / climb-gradient requirements:** Not confirmed — see [`OM E — PBN and RNP Operations`](../../../../../flight-ops/pbn-and-rnp-operations.md) for the general capability framework applied here.
- **Take-off minima:** Not published / verify. 🟧
- **Start-up / push-back:** Not confirmed. 🟧
- **ATC slot / CTOT & clearance:** No slot/CTOT regime identified — standard procedural clearance expected.
- **De-icing:** **NIL** — tropical field.

---

## 12. Noise & Environmental

- **Noise abatement (NAP):** None found in reachable sources. A 2024 public report notes local community protests over pollution/power-supply issues at the airport (not a noise-abatement item, but a community-relations watch item). 🟧
- **Night noise / dB limits:** None found.
- **Engine run-up restrictions:** Not confirmed. 🟧
- **Reverse thrust / idle-reverse policy:** Not confirmed. 🟧

---

## 13. Ground operations

- **Stands for our types:** Not confirmed — the field has historically handled widebody freighter and passenger service (Boeing 747-200F freighter operations, Airbus A330 passenger service per accident-history sources), suggesting some widebody-capable apron provision, but current stand/apron detail is not confirmed. 🟧
- **Push-back:** Not confirmed. 🟧
- **Standard taxi routes:** Not published — confirm with Ground/Tower on the day.
- **Hot spots / tight taxiways:** None identified in reachable sources.
- **Follow-me:** Not confirmed. 🟧

---

## 14. Weather & seasonal (durable)

- **Climate / prevailing wind:** Niger Delta tropical climate, high humidity, near-coastal.
- **Seasonal hazards:** **Wet season (≈ Apr–Oct)** heavy rain and reduced visibility is the field's **documented, accident-evidenced** hazard (§3.3/§3.4) — the highest-priority seasonal item in this pack. **Harmattan dust haze (≈ Nov–Mar)** is present but typically milder here than the northern fields in this build. See [Africa airspace brief](../../../../airspace/africa.md) §11.
- **Local effects:** Niger Delta humidity/convective activity; no terrain-driven local effect identified.

> **Live weather — pull at planning (T-2h):** METAR, TAF, TREND, SIGMET/AIRMET. Not stored here.

---

## 15. NOTAMs

> **Pull at planning (T-2h).** Perishable — not stored here. Check: runway/taxiway closures, navaid U/S, lighting, obstacle/crane, RFF downgrade, GPS/RAIM, **wildlife-hazard NOTAMs**, wet-season visibility NOTAMs. Source: AIS / OFP NOTAM block.

---

## 16. Fuel & alternate planning notes

- **Typical role for us:** Regional destination — not a base, not currently a designated company alternate.
- **Nearest suitable alternates:** **FGSL** (Malabo, Equatorial Guinea), **FKKD** (Douala, Cameroon), **DNMM** (Lagos) — confirm suitability, runway/RFF adequacy and current minima per leg; FGSL/FKKD are cross-country alternates, reference by ICAO only.
- **Fuel-uplift notes:** Not confirmed — the field's international terminal and historical widebody/freighter traffic suggest reasonable provision, but supplier/hours not confirmed. 🟧 See [`OM E — Fuel Policy`](../../../../../flight-ops/fuel-policy.md).
- **Range/perf flags for our fleet:** 3,000 m runway is non-limiting for narrowbody types; historical widebody freighter/passenger service suggests field-length adequacy for larger types, but stand/apron confirmation is pending. See [`OM B — Fleet Capability Matrix`](../../../../../fleet/capability-matrix.md).

---

## 17. Fleet-specific notes (optional)

- No route/fleet assignment confirmed for DNPO at this pass. The field's documented wet-season accident history (§3.3/§3.4) is the standing consideration for **any** type routed here — brief a firm stabilized-approach/go-around policy for wet-season operations regardless of aircraft type. See [`OM B — Fleet Capability Matrix`](../../../../../fleet/capability-matrix.md).

---

## 18. Open items (🟧 — confirm against AIP / current AIRAC)

- **Field elevation discrepancy** (87 ft OurAirports vs. 91 ft Wikipedia) — resolve against AIP.
- **"CAT III lighting" claim (2008)** — confirm whether this reflects an actual instrument-approach category or a runway-lighting/edge-lighting upgrade only.
- Mag variation, RFF category, PCN, declared distances (TORA/TODA/ASDA/LDA) — none independently AIP-sourced this pass.
- ATS/AD operating hours, customs desk hours, any current curfew.
- Navaid inventory and approach names/minima per runway.
- **Current radar serviceability** at this TRACON-named site (per the Kano FIR brief's network-wide caveat).
- Exact Kano ACC / Lagos ACC sector responsible for this field (likely Lagos ACC given southern location).
- Fuel supplier/hours, handling agent, current stand/apron widebody capacity.
- SIDs/STARs (current names) — pull the live current-AIRAC procedure list before use.
- Wildlife-hazard mitigation programme (if any) at the runway environment.

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim material (current-AIRAC charts) informs content but is not listed here.*

- OurAirports — https://ourairports.com/airports/DNPO/ , /runways.html , /frequencies.html (retrieved 2026-07-26). *ARP/elevation/runway/frequency cross-check — tier-4, not AIP-verified.*
- Wikipedia — "Port Harcourt International Airport" — https://en.wikipedia.org/wiki/Port_Harcourt_International_Airport (retrieved 2026-07-26). *History, 2006–08 closure/repair/CAT III-lighting claim, 2018 international terminal, accident history (1996 tree strike, 2001 crash, 2005 wildlife strike, 2019/2023 runway excursions), community-protest note.*
- Companion: [Kano (DNKK) FIR brief](../../../../airspace/fir/africa/kano-dnkk.md), [Africa airspace brief](../../../../airspace/africa.md).

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-26 | Built from AIP Nigeria (NCAA); K Global fields from live VAMSYS; 4-page pack. |
