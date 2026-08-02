# DNIM — Sam Mbakwe · Airport Briefing

**DNIM / QOW** · Owerri, Imo State, Nigeria · Africa
**Version** v0.1 · **Updated** 2026-07-26 · **Status** Draft — AIP Nigeria (NCAA)-derived, provisional

> **Read-me:** Planning aid for the sim, not a chart. Static data is drawn from AIP Nigeria (NAMA/NCAA) where reachable, cross-checked against public aeronautical data; approaches/SIDs/STARs are listed **by name only or flagged not-yet-confirmed** — fly the charted current-AIRAC version. Live weather/NOTAMs are pulled at planning (§14/§15). Open 🟧 items are listed in §18. Flag legend 🟥 restriction/hazard · 🟧 caution/unverified · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| ARP (lat/long) | N05°25′37″ / E007°12′22″ (5.4271, 7.2060) `[OurAirports/public nav data]` |
| Field elevation | **373 ft / 114 m AMSL** |
| Mag variation | 🟧 Not published / verify — no field-specific sourced figure found |
| Time zone | UTC+1 (WAT, no DST) |
| Runway(s) | **17/35**, 2,700 × 45 m (8,858 × 148 ft), asphalt, **not lighted** per tier-4 source — **single runway, no crosswind alternative**; note a public source separately states the field has "night landing capabilities" — **discrepancy not resolved this pass** 🟧 |
| Preferential runway | 🟧 Not published / verify — no published preferential-runway rule found |
| Longest LDA | 🟧 Not published / verify — full paved length (2,700 m) assumed pending AIP declared-distance confirmation |
| Approaches | 🟧 Not confirmed this pass — pull the current-AIRAC approach list at planning |
| RFF category | 🟧 Not published / verify |
| Control type | **Procedural (no radar)** — outside the Lagos/Kano/Abuja/Port Harcourt TRACON footprint; a 2013–14 upgrade extended communications-equipment coverage "past Port Harcourt Airport" per the field's own history (public source), but this is not confirmed as radar coverage at DNIM itself 🟧. Worked within the single **Kano (DNKK) FIR** — see [Kano (DNKK) FIR brief](../../../../airspace/fir/africa/kano-dnkk.md) |
| Elevation class | Near sea-level (373 ft) — **not** hot-and-high; non-issue for performance |
| Special-airport status | Not operator-categorised — **none categorised in VAMSYS** 🟧 |
| Customs / PoE | International-cargo designation in the field's name; PoE desk hours not confirmed 🟧 |
| K Global category | **Not categorised in VAMSYS** 🟧 |
| K Global base | **No** 🟩 |
| Company preferred alternates | **FGSL, FKKD, DNAA** (cross-country/unbuilt — plain ICAO reference only) |
| Taxi-in / taxi-out (VAMSYS) | **Not published / verify** 🟧 |

---

## 2. Validation summary

| Domain | Flag | Note |
|---|---|---|
| Terrain / CFIT | 🟩 | Owerri/Ngor Okpala sits in low-lying south-eastern Nigerian terrain, no close-in high ground identified. |
| Runway length vs fleet perf | 🟩 | 2,700 m is adequate for narrowbody types; the **narrower 45 m width** and **not-lighted** status (tier-4 source) are the notable caveats — see §3.3/§3.5. |
| Approach availability / minima | 🟧 | Approach list not confirmed this pass. |
| Airspace / traffic / control | 🟧 | Procedural, non-radar field inside Kano (DNKK) FIR; modest scheduled traffic historically. |
| Weather / seasonal hazard | 🟥 | **Harmattan dust haze (Nov–Mar)** and south-eastern Nigeria's pronounced **wet-season convective activity (Apr–Oct)** are the defining seasonal hazards. |
| Curfew / slots / hours | 🟧 | FAAN is reported to restrict night operations at non-internationally-designated airports except for pilgrimage (Hajj) passenger flights — **DNIM's own international-cargo designation may or may not exempt it; not resolved this pass.** |
| RFF category vs our types | 🟧 | Not published / verify. |
| Fuel availability | 🟧 | Not confirmed — assume limited/PN availability typical of a secondary Nigerian field pending confirmation. |
| Customs / handling / security | 🟧 | International-cargo designation; PoE desk hours and handling agent not confirmed. |

---

## 3. Threat & Error Management (TEM)

### 3.1 CFIT / Terrain 🟩
Owerri (Ngor Okpala LGA, Imo State) sits at 373 ft AMSL in low-lying south-eastern Nigerian terrain — no close-in high terrain has been identified in reachable sources. Verify the MSA ring on the current chart as routine practice; no AIRAC-sourced terrain chart was reachable this pass.

### 3.2 Airborne conflict / traffic 🟩
DNIM serves Owerri and a wider south-eastern catchment (Onitsha, Nnewi, Aba, Umuahia, Okigwe, Oguta, Orlu, and parts of Akwa Ibom/Cross River States per the field's own public history) with modest scheduled traffic. The field is **procedural, non-radar** — sitting outside the Lagos/Kano/Abuja/Port Harcourt TRACON footprint described in the Kano (DNKK) FIR brief, though a 2013–14 communications-equipment upgrade is reported to have extended coverage in the Port Harcourt-adjacent airspace (not independently confirmed as radar at DNIM). Cross-ref [Kano (DNKK) FIR brief](../../../../airspace/fir/africa/kano-dnkk.md) and the [Africa airspace brief](../../../../airspace/africa.md).

### 3.3 Runway excursion 🟧
Single runway (17/35), 2,700 × 45 m — **narrower than the other three fields in this build (all 60 m)**. A tier-4 source reports the runway as **not lighted**, while the field's own public history separately claims "night landing capabilities" installed alongside the 2013–14 upgrade — **this discrepancy is not resolved this pass and should be treated as a hard confirm-before-relying-on item**, particularly for any night operation. No displaced thresholds were found in reachable sources; not independently AIP-confirmed.

### 3.4 Weather threat 🟥
**Harmattan** dust haze affects this belt of Nigeria roughly **November–March**, though south-eastern Nigeria (closer to the coast) typically sees a milder harmattan signature than the northern fields in this build. The **wet season (roughly April–October)** is pronounced in this coastal/near-coastal south-eastern zone, with organised convective squall lines and heavy rainfall typical of the West African ITCZ belt. See §14 and the [Africa airspace brief](../../../../airspace/africa.md) §11.

### 3.5 Operational considerations 🟥
Single-runway field with **no crosswind runway option**. The **runway-lighting discrepancy** (§3.3) makes any night operation a hard confirm-first item. No special-airport/crew-qualification category found in reachable sources; **none categorised in VAMSYS**. FAAN is reported to restrict night operations generally at non-internationally-designated domestic airports except pilgrimage flights — DNIM's own international-cargo designation may exempt it, but this is **not resolved this pass** and should be treated as an open item (§18). Fuel and handling provision at a secondary/cargo-oriented field should be treated as limited pending confirmation (§16).

---

## 4. Cautions & Warnings

- **Single runway, no crosswind alternative** — a strong crosswind event on 17/35 has nowhere else on the field to go; brief the divert option early.
- **Runway-lighting status is unresolved** — one tier-4 source reports "not lighted," another public source claims night-landing capability was added in 2013–14. Do not plan a night operation without confirming current lighting status.
- **Narrower runway (45 m vs 60 m at the other three fields in this build)** — a real, if modest, margin consideration for our largest planned types; confirm against type-specific runway-width requirements before any widebody routing.
- **Wet-season heavy rainfall (Apr–Oct)** in this near-coastal south-eastern zone is a standing seasonal watch-item.
- Fuel/handling provision at a secondary/cargo-designated field — do not assume major-hub-level availability; confirm before planning a fuel stop or turn here (§16).

---

## 5. Aerodrome category, restrictions & crew qualification

- **Special-airport / category:** Not operator-categorised — **none categorised in VAMSYS**. No AIP special-airport designation found in reachable sources. 🟧
- **Crew-qualification gate:** None identified — pending resolution of the night-ops/lighting discrepancy above (§3.3/§3.5), treat any night arrival/departure as requiring confirmation first. 🟥
- **Operating restrictions / bans:** FAAN night-ops restriction for non-internationally-designated domestic fields (except Hajj pilgrimage flights) is reported generally for Nigeria; DNIM's own "International Cargo Airport" naming may or may not exempt it — **not resolved this pass**. 🟧
- **Overflight / entry / permits:** Overflight/landing permit requirements for foreign operators are a standing Nigeria-wide dispatch item — see the [Kano (DNKK) FIR brief](../../../../airspace/fir/africa/kano-dnkk.md) §10. 🟧
- **Operations notes:** Airport built by the former Imo State government (commissioned 15 July 1994) before being handed to the **Federal Airports Authority of Nigeria (FAAN)**; ANSP is **NAMA** within the single Kano (DNKK) FIR.

---

## 6. General / hours / services

| Item | Value | Flag |
|---|---|---|
| ATS hours | Not published / verify | 🟧 |
| AD operating hours | Not published / verify; night-ops status unresolved (§3.3/§5) | 🟥 |
| Night / curfew restrictions | Unresolved discrepancy — see §3.3/§5 | 🟥 |
| RFF category | Not published / verify | 🟧 |
| Fuel | Not confirmed — assume limited/PN availability at a secondary/cargo field | 🟧 |
| PCN | Not published / verify | 🟧 |
| Customs | International-cargo designation; desk hours not confirmed | 🟧 |
| Handling / FBO | Not confirmed | 🟧 |

---

## 7. Runways & declared distances

| RWY | Dimensions | Surface / PCN | TORA | TODA | ASDA | LDA | Notes |
|---|---|---|---|---|---|---|---|
| 17 | 2,700 × 45 m | Asphalt, **not lighted** per tier-4 source (disputed — see §3.3) / PCN not published 🟧 | 2,700 m 🟧 | 2,700 m 🟧 | 2,700 m 🟧 | 2,700 m 🟧 | Declared distances assumed equal to full paved length pending AIP confirmation; no displaced threshold found |
| 35 | 2,700 × 45 m | Asphalt, **not lighted** per tier-4 source (disputed — see §3.3) / PCN not published 🟧 | 2,700 m 🟧 | 2,700 m 🟧 | 2,700 m 🟧 | 2,700 m 🟧 | As above |

*Source: OurAirports runway extract (public tier-4). Declared distances are **not** independently AIP-sourced this pass — treat the TORA/TODA/ASDA/LDA figures above as a placeholder equal to total paved length, not a verified declared-distance table. All distances in metres.*

---

## 8. Communications

| Service | Callsign | Frequency | Hours | Notes |
|---|---|---|---|---|
| ATIS | Not published / verify | — | — | 🟧 |
| Delivery | Not published / verify | — | — | 🟧 |
| Ground | Not published / verify | — | — | 🟧 |
| Tower | Owerri Tower | 118.4 | Not published / verify | 🟧 tier-4 sourced (OurAirports) |
| Approach | Not published / verify | — | — | 🟧 No separate approach frequency found |
| Centre / FIR | Kano ACC / Lagos ACC (Kano DNKK FIR) | Per current AIRAC | H24 | See [Kano (DNKK) FIR brief](../../../../airspace/fir/africa/kano-dnkk.md) — exact ACC sector split for this field not confirmed |

*Source: OurAirports frequency extract (public tier-4) — treat as unconfirmed pending a live-AIRAC cross-check.*

---

## 9. Navaids

| Aid | Ident | Freq | Hours | Notes |
|---|---|---|---|---|
| Not published / verify | — | — | — | 🟧 No navaid data reached in this research pass |

---

## 10. Arrival

- **Transition altitude / level:** 🟧 Not published / verify.
- **Speed:** Standard 250 KIAS below FL100 (ICAO norm) — confirm no local override on current chart.
- **Preferential runway logic:** Not published — wind-driven choice between 17 and 35 assumed.
- **Approaches (names only — verify minima on current AIRAC charts):**

| RWY | Approach | IAF | FAF/FAP alt | Notes |
|---|---|---|---|---|
| 17 | Not confirmed 🟧 | — | — | Pull current-AIRAC procedure list at planning |
| 35 | Not confirmed 🟧 | — | — | Pull current-AIRAC procedure list at planning |

- **STARs (names only):** Not confirmed in reachable research pass. 🟧
- **LVP:** Wet-season heavy rainfall and (milder) harmattan-season haze are the relevant seasonal triggers; exact LVP procedure/minima not confirmed. 🟧
- **Missed approach watch-items:** No terrain-driven concern identified (low-lying terrain); re-sequencing risk is low given light traffic.

---

## 11. Departure

- **SIDs (names only — fly the charted version):** Not confirmed in reachable research pass. 🟧
- **RNP / climb-gradient requirements:** Not confirmed — see [`OM E — PBN and RNP Operations`](../../../../../flight-ops/pbn-and-rnp-operations.md) for the general capability framework applied here.
- **Take-off minima:** Not published / verify. 🟧
- **Start-up / push-back:** Not confirmed — secondary field, self-manoeuvre plausible but not confirmed. 🟧
- **ATC slot / CTOT & clearance:** No slot/CTOT regime identified — standard procedural clearance expected.
- **De-icing:** **NIL** — tropical field.

---

## 12. Noise & Environmental

- **Noise abatement (NAP):** None found in reachable sources.
- **Night noise / dB limits:** None found.
- **Engine run-up restrictions:** Not confirmed. 🟧
- **Reverse thrust / idle-reverse policy:** Not confirmed. 🟧

---

## 13. Ground operations

- **Stands for our types:** Not confirmed — no stand/apron data reached this pass. 🟧
- **Push-back:** Not confirmed. 🟧
- **Standard taxi routes:** Not published — confirm with Ground/Tower on the day.
- **Hot spots / tight taxiways:** None identified in reachable sources.
- **Follow-me:** Not confirmed. 🟧

---

## 14. Weather & seasonal (durable)

- **Climate / prevailing wind:** Tropical, near-coastal south-eastern Nigerian climate (Imo State).
- **Seasonal hazards:** **Harmattan dust haze (≈ Nov–Mar)** — typically milder in this near-coastal zone than the northern fields in this build, but still present. **Wet season (≈ Apr–Oct)** is pronounced — heavy rainfall and organised convective squall lines typical of the West African ITCZ. See [Africa airspace brief](../../../../airspace/africa.md) §11.
- **Local effects:** None specific identified beyond the regional harmattan/ITCZ pattern.

> **Live weather — pull at planning (T-2h):** METAR, TAF, TREND, SIGMET/AIRMET. Not stored here.

---

## 15. NOTAMs

> **Pull at planning (T-2h).** Perishable — not stored here. Check: runway/taxiway closures, navaid U/S, **runway-lighting serviceability (see §3.3 discrepancy)**, obstacle/crane, RFF downgrade, GPS/RAIM, wet-season/harmattan visibility NOTAMs. Source: AIS / OFP NOTAM block.

---

## 16. Fuel & alternate planning notes

- **Typical role for us:** Regional destination — not a base, not currently a designated company alternate.
- **Nearest suitable alternates:** **FGSL** (Malabo, Equatorial Guinea), **FKKD** (Douala, Cameroon), **DNAA** (Abuja) — confirm suitability, runway/RFF adequacy and current minima per leg; FGSL/FKKD are cross-country alternates, reference by ICAO only.
- **Fuel-uplift notes:** Not confirmed — assume limited availability/prior-notice requirement typical of a secondary Nigerian field pending confirmation. 🟧 See [`OM E — Fuel Policy`](../../../../../flight-ops/fuel-policy.md).
- **Range/perf flags for our fleet:** 2,700 m runway is adequate for narrowbody types; the narrower 45 m width is a real consideration for any widebody routing. See [`OM B — Fleet Capability Matrix`](../../../../../fleet/capability-matrix.md).

---

## 17. Fleet-specific notes (optional)

- No route/fleet assignment confirmed for DNIM at this pass. The 45 m runway width (narrower than the other three fields in this build) is the one field-specific consideration flagged for any widebody routing — see [`OM B — Fleet Capability Matrix`](../../../../../fleet/capability-matrix.md) for type-by-type width requirements.

---

## 18. Open items (🟧 — confirm against AIP / current AIRAC)

- **Runway-lighting status** — "not lighted" (tier-4) vs. "night landing capabilities" (field history) discrepancy — **must be resolved before any night operation**.
- **Night-operations restriction applicability** — FAAN's general non-international-field night-ops restriction vs. DNIM's own "International Cargo Airport" designation.
- Mag variation, RFF category, PCN, declared distances (TORA/TODA/ASDA/LDA) — none independently AIP-sourced this pass.
- ATS/AD operating hours, customs desk hours.
- Navaid inventory and approach detail per runway — no data reached this pass.
- Exact Kano ACC / Lagos ACC sector responsible for this field.
- Fuel supplier/hours, handling agent, stand/apron widebody suitability.
- SIDs/STARs (current names) — pull the live current-AIRAC procedure list before use.

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim material (current-AIRAC charts) informs content but is not listed here.*

- OurAirports — https://ourairports.com/airports/DNIM/ , /runways.html , /frequencies.html (retrieved 2026-07-26). *Runway lighting status ("not lighted") — tier-4, disputed against Wikipedia (below).*
- Wikipedia — "Sam Mbakwe International Cargo Airport" — https://en.wikipedia.org/wiki/Sam_Mbakwe_International_Cargo_Airport (retrieved 2026-07-26). *History, 2013–14 TRACON-adjacent upgrade, night-landing claim, FAAN night-ops restriction, destinations served.*
- Companion: [Kano (DNKK) FIR brief](../../../../airspace/fir/africa/kano-dnkk.md), [Africa airspace brief](../../../../airspace/africa.md).

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-26 | Built from AIP Nigeria (NCAA); K Global fields from live VAMSYS; 4-page pack. |
