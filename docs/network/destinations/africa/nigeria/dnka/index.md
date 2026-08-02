# DNKA — Kaduna · Airport Briefing

**DNKA / KAD** · Kaduna, Kaduna State, Nigeria · Africa
**Version** v0.1 · **Updated** 2026-07-26 · **Status** Draft — AIP Nigeria (NCAA)-derived, provisional

> **Read-me:** Planning aid for the sim, not a chart. Static data is drawn from AIP Nigeria (NAMA/NCAA) where reachable, cross-checked against public aeronautical data; approaches/SIDs/STARs are listed **by name only or flagged not-yet-confirmed** — fly the charted current-AIRAC version. Live weather/NOTAMs are pulled at planning (§14/§15). Open 🟧 items are listed in §18. Flag legend 🟥 restriction/hazard · 🟧 caution/unverified · 🟩 normal.
>
> **Route-endpoint note:** DNKA had no prior K Global airport brief in this tree — this is a first build, not an update.

---

## 1. Snapshot

| Field | Value |
|---|---|
| ARP (lat/long) | N10°41′46″ / E007°19′12″ (10.6960, 7.3201) `[OurAirports/public nav data]` |
| Field elevation | **2,073 ft / 632 m AMSL** |
| Mag variation | 🟧 Not published / verify — no field-specific sourced figure found |
| Time zone | UTC+1 (WAT, no DST) |
| Runway(s) | **05/23**, 3,000 × 60 m (9,843 × 197 ft), asphalt, lighted — **single runway, no crosswind alternative** |
| Preferential runway | 🟧 Not published / verify — no published preferential-runway rule found |
| Longest LDA | 🟧 Not published / verify — full paved length (3,000 m) assumed pending AIP declared-distance confirmation |
| Approaches | 🟧 Not confirmed this pass — pull the current-AIRAC approach list at planning; note the field's 2010 accident (below) implicates a non-precision/localizer approach environment |
| RFF category | 🟧 Not published / verify |
| Control type | **Procedural (no radar)** — outside the Lagos/Kano/Abuja/Port Harcourt TRACON footprint named in the Kano (DNKK) FIR brief; Kaduna sits in the **northern half of Nigeria**, geographically closer to **Kano ACC**'s area than Lagos ACC's — exact sector assignment not confirmed 🟧. Worked within the single **Kano (DNKK) FIR** — see [Kano (DNKK) FIR brief](../../../../airspace/fir/africa/kano-dnkk.md) |
| Elevation class | **Moderate elevation (2,073 ft)** — not classically "hot-and-high," but the highest field of the four in this build; density-altitude margin is comparatively smaller than the near-sea-level fields (DNIM, DNPO) |
| Special-airport status | Not operator-categorised — **none categorised in VAMSYS**; note the field's **mixed civil/military character** (Nigerian Air Force presence, see §5) 🟧 |
| Customs / PoE | 🟧 Not published / verify — field carries "International Airport" in its name; PoE desk hours not confirmed |
| K Global category | **Not categorised in VAMSYS** 🟧 |
| K Global base | **No** 🟩 |
| Company preferred alternates | **DNAA, DNMM, DRRN** (cross-country/unbuilt — plain ICAO reference only) |
| Taxi-in / taxi-out (VAMSYS) | **Not published / verify** 🟧 |

---

## 2. Validation summary

| Domain | Flag | Note |
|---|---|---|
| Terrain / CFIT | 🟩 | Kaduna sits on the northern Nigerian plateau/savanna; no close-in high terrain identified in reachable sources. |
| Runway length vs fleet perf | 🟩 | 3,000 m is adequate for narrowbody types; the field's 2,073 ft elevation gives a modest density-altitude consideration relative to the coastal fields in this build, not independently quantified this pass. |
| Approach availability / minima | 🟧 | Approach list not confirmed by name; a 2010 landing-short accident (§3.3) implicates the presence of a localizer/non-precision approach environment. |
| Airspace / traffic / control | 🟧 | Procedural, non-radar field inside Kano (DNKK) FIR; **mixed civil/military traffic** given the field's Nigerian Air Force association (§5). |
| Weather / seasonal hazard | 🟥 | **Harmattan dust haze (Nov–Mar)** is the **most severe of the four fields in this build** — Kaduna sits well into northern Nigeria, closer to the Sahel, where harmattan visibility reduction is typically worse than the southern/coastal fields. Wet-season convective activity Apr–Oct. |
| Curfew / slots / hours | 🟧 | Not published / verify. |
| RFF category vs our types | 🟧 | Not published / verify. |
| Fuel availability | 🟧 | Not confirmed — assume limited/PN availability typical of a secondary Nigerian field pending confirmation. |
| Customs / handling / security | 🟧 | International-status naming; PoE desk hours and handling agent not confirmed. |
| Security | 🟥 | The field was **attacked by armed bandits on 26 March 2022**, killing a security guard — a documented, field-specific security incident, in addition to the general north-Nigeria conflict-zone caution carried in the Kano FIR brief. |

---

## 3. Threat & Error Management (TEM)

### 3.1 CFIT / Terrain 🟩
Kaduna sits at 2,073 ft AMSL on the northern Nigerian plateau/savanna, roughly 22 km northwest of Kaduna city — no close-in high terrain has been identified in reachable sources. Verify the MSA ring on the current chart as routine practice; no AIRAC-sourced terrain chart was reachable this pass. This is the **highest-elevation field of the four in this build**, though still well short of a classic hot-and-high profile.

### 3.2 Airborne conflict / traffic 🟧
DNKA is a **mixed civil/military airfield** — Kaduna has a long-standing association with the Nigerian Air Force (including flying-training activity), so military traffic alongside scheduled civil service is a plausible standing consideration, though current-day traffic mix is not independently confirmed this pass. The field is **procedural, non-radar** — it sits outside the Lagos/Kano/Abuja/Port Harcourt TRACON footprint described in the Kano (DNKK) FIR brief, and geographically falls in the **northern half of the country**, likely closer to **Kano ACC**'s area of responsibility than Lagos ACC's — the exact sector split is not AIP-confirmed. Cross-ref [Kano (DNKK) FIR brief](../../../../airspace/fir/africa/kano-dnkk.md) and the [Africa airspace brief](../../../../airspace/africa.md).

### 3.3 Runway excursion 🟧
Single runway (05/23), 3,000 × 60 m. On 20 August 2010, a Boeing 737-200 struck the localizer antenna and **landed short of the runway**, substantially damaging the aircraft with several passenger injuries — a documented approach-undershoot event at this field. No displaced thresholds were found in reachable sources; not independently AIP-confirmed. Treat the historical undershoot event as a reminder to fly a stabilized, on-profile approach to the charted minima rather than a below-profile visual technique.

### 3.4 Weather threat 🟥
**Harmattan** dust haze affects northern Nigeria roughly **November–March**, and Kaduna — well north of the three other fields in this build, closer to the Sahel belt — typically experiences a **more severe harmattan signature** than the southern/coastal fields (DNIM, DNPO) or the mid-belt field (DNIL). Visibility reduction can be significant and rapid in-season. The **wet season (roughly April–October)** brings organised convective squall lines typical of the West African ITCZ belt. See §14 and the [Africa airspace brief](../../../../airspace/africa.md) §11 and [Kano (DNKK) FIR brief](../../../../airspace/fir/africa/kano-dnkk.md) §11.

### 3.5 Operational considerations 🟥
Single-runway field with **no crosswind runway option**. **Security is a genuine, field-specific consideration**: DNKA was attacked by armed bandits on 26 March 2022, killing a security guard, in an incident public reporting characterised as involving a large armed group — this sits within the broader northern-Nigeria security caution already carried in the [Kano (DNKK) FIR brief](../../../../airspace/fir/africa/kano-dnkk.md) §10 (Sahel-border tension, north-east conflict-zone exposure), but the 2022 attack is a **direct, airport-specific precedent**, not merely regional context. The field's **mixed civil/military character** (§3.2) may bring PPR/access considerations not evaluated this pass. No special-airport/crew-qualification category found in reachable sources; **none categorised in VAMSYS**.

---

## 4. Cautions & Warnings

- **Harmattan haze (Nov–Mar) is more severe here than at the other three fields in this build** — this is the field's defining seasonal caution; visibility can degrade rapidly.
- **Documented security incident** — an armed attack on the airport on 26 March 2022 killed a security guard; treat the northern-Nigeria security picture as a live, re-check-every-operation item per the [Kano (DNKK) FIR brief](../../../../airspace/fir/africa/kano-dnkk.md) §10, not a one-off historical footnote.
- **Documented approach-undershoot accident** (2010, localizer-antenna strike/landed short) — fly a stabilized approach to the charted minima; do not fly a below-profile visual technique.
- **Single runway, no crosswind alternative** — a strong crosswind event on 05/23 has nowhere else on the field to go; brief the divert option early.
- **Mixed civil/military field** — confirm any PPR/access procedure before planning; do not assume unrestricted civil access.

---

## 5. Aerodrome category, restrictions & crew qualification

- **Special-airport / category:** Not operator-categorised — **none categorised in VAMSYS**. Kaduna's long-standing Nigerian Air Force association (the airfield has historically hosted NAF flying-training and operational units) means a **mixed civil/military status** is plausible; not independently confirmed as a current PPR/access restriction this pass. 🟧
- **Crew-qualification gate:** None formally identified — given the 2010 undershoot accident (§3.3), a firm stabilized-approach discipline is a sound standing practice regardless of formal categorisation. 🟧
- **Operating restrictions / bans:** None found in reachable sources — verify current AIP for any RNP AR / circling / night-ops / military-coordination restriction. 🟧
- **Overflight / entry / permits:** Overflight/landing permit requirements for foreign operators are a standing Nigeria-wide dispatch item — see the [Kano (DNKK) FIR brief](../../../../airspace/fir/africa/kano-dnkk.md) §10. Given the field's military association, a **military-coordination/PPR check is a prudent additional step** — not confirmed as a formal requirement this pass. 🟧
- **Operations notes:** Airport owned/operated by the **Federal Airports Authority of Nigeria (FAAN)**, opened 1982; ANSP is **NAMA** within the single Kano (DNKK) FIR.

---

## 6. General / hours / services

| Item | Value | Flag |
|---|---|---|
| ATS hours | Not published / verify | 🟧 |
| AD operating hours | Not published / verify | 🟧 |
| Night / curfew restrictions | Not published / verify | 🟧 |
| RFF category | Not published / verify | 🟧 |
| Fuel | Not confirmed — assume limited/PN availability at a secondary field | 🟧 |
| PCN | Not published / verify | 🟧 |
| Customs | International-status naming; desk hours not confirmed | 🟧 |
| Handling / FBO | Not confirmed | 🟧 |

---

## 7. Runways & declared distances

| RWY | Dimensions | Surface / PCN | TORA | TODA | ASDA | LDA | Notes |
|---|---|---|---|---|---|---|---|
| 05 | 3,000 × 60 m | Asphalt, lighted / PCN not published 🟧 | 3,000 m 🟧 | 3,000 m 🟧 | 3,000 m 🟧 | 3,000 m 🟧 | Declared distances assumed equal to full paved length pending AIP confirmation; no displaced threshold found |
| 23 | 3,000 × 60 m | Asphalt, lighted / PCN not published 🟧 | 3,000 m 🟧 | 3,000 m 🟧 | 3,000 m 🟧 | 3,000 m 🟧 | As above |

*Source: OurAirports runway extract (public tier-4). Declared distances are **not** independently AIP-sourced this pass — treat the TORA/TODA/ASDA/LDA figures above as a placeholder equal to total paved length, not a verified declared-distance table. All distances in metres.*

---

## 8. Communications

| Service | Callsign | Frequency | Hours | Notes |
|---|---|---|---|---|
| ATIS | Not published / verify | — | — | 🟧 |
| Delivery | Not published / verify | — | — | 🟧 |
| Ground | Not published / verify | — | — | 🟧 |
| Tower | Not published / verify | — | — | 🟧 No tower frequency reached this pass |
| Approach | Kaduna Approach | 122.3 | Not published / verify | 🟧 tier-4 sourced (OurAirports) |
| Centre / FIR | Kano ACC / Lagos ACC (Kano DNKK FIR) | Per current AIRAC | H24 | See [Kano (DNKK) FIR brief](../../../../airspace/fir/africa/kano-dnkk.md) — likely Kano ACC given northern location; exact sector split not confirmed |

*Source: OurAirports frequency extract (public tier-4) — treat as unconfirmed pending a live-AIRAC cross-check.*

---

## 9. Navaids

| Aid | Ident | Freq | Hours | Notes |
|---|---|---|---|---|
| Localizer | Not published / verify | — | — | 🟧 A localizer antenna is documented at the field (struck in the 2010 short-landing accident) — ident/frequency not independently sourced this pass |

---

## 10. Arrival

- **Transition altitude / level:** 🟧 Not published / verify.
- **Speed:** Standard 250 KIAS below FL100 (ICAO norm) — confirm no local override on current chart.
- **Preferential runway logic:** Not published — wind-driven choice between 05 and 23 assumed.
- **Approaches (names only — verify minima on current AIRAC charts):**

| RWY | Approach | IAF | FAF/FAP alt | Notes |
|---|---|---|---|---|
| 05 | Not confirmed by name 🟧 | — | — | A localizer is documented at the field (§9) — approach name/category not confirmed |
| 23 | Not confirmed by name 🟧 | — | — | Pull current-AIRAC procedure list at planning |

- **STARs (names only):** Not confirmed in reachable research pass. 🟧
- **LVP:** **Harmattan-season visibility reduction is this field's most severe seasonal trigger of the four in this build** — exact LVP procedure/minima not confirmed. 🟥
- **Missed approach watch-items:** No terrain-driven concern identified (plateau/savanna terrain); the 2010 undershoot accident (§3.3) is the standing lesson — fly a stabilized approach and go around rather than press a below-profile landing.

---

## 11. Departure

- **SIDs (names only — fly the charted version):** Not confirmed in reachable research pass. 🟧
- **RNP / climb-gradient requirements:** Not confirmed — see [`OM E — PBN and RNP Operations`](../../../../../flight-ops/pbn-and-rnp-operations.md) for the general capability framework applied here.
- **Take-off minima:** Not published / verify. 🟧
- **Start-up / push-back:** Not confirmed — mixed civil/military field, confirm any military-coordination procedure before planning. 🟧
- **ATC slot / CTOT & clearance:** No slot/CTOT regime identified — standard procedural clearance expected.
- **De-icing:** **NIL** — tropical field (harmattan dust, not cold-weather icing, is the seasonal hazard here).

---

## 12. Noise & Environmental

- **Noise abatement (NAP):** None found in reachable sources.
- **Night noise / dB limits:** None found.
- **Engine run-up restrictions:** Not confirmed. 🟧
- **Reverse thrust / idle-reverse policy:** Not confirmed. 🟧

---

## 13. Ground operations

- **Stands for our types:** Not confirmed. 🟧
- **Push-back:** Not confirmed. 🟧
- **Standard taxi routes:** Not published — confirm with Ground/Tower on the day; **military-side ground movements are a plausible additional ground-traffic consideration** given the field's Air Force association (§5), not independently confirmed.
- **Hot spots / tight taxiways:** None identified in reachable sources.
- **Follow-me:** Not confirmed. 🟧

---

## 14. Weather & seasonal (durable)

- **Climate / prevailing wind:** Northern Nigerian Guinea-savanna/Sahel-transition climate.
- **Seasonal hazards:** **Harmattan dust haze (≈ Nov–Mar)** is **the most severe of the four fields in this build** — Kaduna's more northerly latitude places it closer to the Sahel source region than the mid-belt (DNIL) or coastal (DNIM, DNPO) fields. **Wet season (≈ Apr–Oct)** brings organised convective squall lines typical of the West African ITCZ. See [Africa airspace brief](../../../../airspace/africa.md) §11 and [Kano (DNKK) FIR brief](../../../../airspace/fir/africa/kano-dnkk.md) §11.
- **Local effects:** None specific identified beyond the regional harmattan/ITCZ pattern.

> **Live weather — pull at planning (T-2h):** METAR, TAF, TREND, SIGMET/AIRMET. Not stored here.

---

## 15. NOTAMs

> **Pull at planning (T-2h).** Perishable — not stored here. Check: runway/taxiway closures, navaid U/S (localizer), lighting, obstacle/crane, RFF downgrade, GPS/RAIM, **harmattan visibility NOTAMs**, and any **security/access NOTAM** given the field's documented 2022 attack and mixed civil/military status. Source: AIS / OFP NOTAM block.

---

## 16. Fuel & alternate planning notes

- **Typical role for us:** Regional destination — not a base, not currently a designated company alternate.
- **Nearest suitable alternates:** **DNAA** (Abuja), **DNMM** (Lagos), **DRRN** (Niamey Diori Hamani, Niger) — confirm suitability, runway/RFF adequacy and current minima per leg; DRRN is a cross-country alternate, reference by ICAO only.
- **Fuel-uplift notes:** Not confirmed — assume limited availability/prior-notice requirement typical of a secondary Nigerian field pending confirmation. 🟧 See [`OM E — Fuel Policy`](../../../../../flight-ops/fuel-policy.md).
- **Range/perf flags for our fleet:** 3,000 m runway is non-limiting for any narrowbody type; the field's 2,073 ft elevation is the only field in this build with a (modest) density-altitude consideration. See [`OM B — Fleet Capability Matrix`](../../../../../fleet/capability-matrix.md).

---

## 17. Fleet-specific notes (optional)

- No route/fleet assignment confirmed for DNKA at this pass. At 2,073 ft, this is the highest-elevation field of the four in this build — a modest density-altitude margin worth checking per type on a hot harmattan-season day, though not a hot-and-high field by classic definition. See [`OM B — Fleet Capability Matrix`](../../../../../fleet/capability-matrix.md).

---

## 18. Open items (🟧 — confirm against AIP / current AIRAC)

- Mag variation, RFF category, PCN, declared distances (TORA/TODA/ASDA/LDA) — none independently AIP-sourced this pass.
- ATS/AD operating hours, curfew status, customs desk hours.
- Navaid ident/frequency for the documented localizer; full approach name/minima per runway.
- ATC Tower frequency — not reached this pass (Approach only, tier-4 sourced).
- Exact Kano ACC / Lagos ACC sector responsible for this field (likely Kano ACC given northern location).
- **Current military-coordination / PPR requirement** given the field's mixed civil/military character.
- **Current security posture** following the 26 March 2022 attack — re-check live per the Kano (DNKK) FIR brief's north-Nigeria security caution.
- Fuel supplier/hours, handling agent, stand/apron capacity.
- SIDs/STARs (current names) — pull the live current-AIRAC procedure list before use.

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim material (current-AIRAC charts) informs content but is not listed here.*

- OurAirports — https://ourairports.com/airports/DNKA/ , /runways.html , /frequencies.html (retrieved 2026-07-26). *ARP/elevation/runway/frequency cross-check — tier-4, not AIP-verified.*
- Wikipedia — "Kaduna International Airport" — https://en.wikipedia.org/wiki/Kaduna_Airport (retrieved 2026-07-26). *History (opened 1982), 2022 bandit attack, 2010 landing-short/localizer-strike accident, 1955 historical accident.*
- Companion: [Kano (DNKK) FIR brief](../../../../airspace/fir/africa/kano-dnkk.md), [Africa airspace brief](../../../../airspace/africa.md).

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-26 | Built from AIP Nigeria (NCAA); K Global fields from live VAMSYS; 4-page pack. First build — no prior stub existed for DNKA. |
