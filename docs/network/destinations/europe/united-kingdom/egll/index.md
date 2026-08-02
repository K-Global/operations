# EGLL — Heathrow · Airport Briefing

**EGLL / LHR** · Hillingdon, Greater London, United Kingdom · Europe
**Version** v0.1 · **Updated** 2026-07-26 · **Status** Draft

> **Read-me:** Planning aid for the sim, not a chart. Static data is drawn from the UK AIP (NATS Aeronautical Information Service, eAIP AD 2‑EGLL) plus standard public aeronautical data; approaches/SIDs/STARs are listed **by name only or flagged not-yet-confirmed** — fly the charted current-AIRAC version. Live weather/NOTAMs are pulled at planning (§14/§15). Open 🟧 items are listed in §18. Flag legend 🟥 restriction/hazard · 🟧 caution/unverified · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| ARP (lat/long) | 51°28′39″N / 000°27′41″W (mid-point of RWY 09L/27R) `[UK AIP AD 2.2]` |
| Field elevation | **83 ft AMSL** (reference temperature 20°C) |
| Mag variation | **0.41° E (2022)**, annual change 0.20° E `[UK AIP AD 2.2]` — 🟧 not re-confirmed against current AIRAC |
| Time zone | UTC+0 (GMT) / UTC+1 (BST, UK DST observed) |
| Runway(s) | **09L/27R** 3,901 × 50 m · **09R/27L** 3,658 × 50 m — asphalt, grooved, both **PCN 83/F/A/W/T** `[UK AIP AD 2.12]` |
| Preferential runway | **Segregated-mode operation** — one runway landing, the other departing, at any time; **westerly-preferred** (~70% of ops); alternation of landing/departing role at **15:00 local**, but only in westerly ops; **easterly ops do not alternate** (09L always lands, 09R always departs) — Cranford Agreement legacy, see §3.5/§5/§11 🟥 |
| Longest LDA | 3,882 m (27R, no displacement) |
| Approaches | **ILS, CAT III capability** (LVP/stop-bar infrastructure confirmed); per-runway-end category/sub-category and idents 🟧 not confirmed this pass — verify current chart |
| RFF category | **CAT 10 (A10)** `[UK AIP AD 2.6]` 🟩 |
| Control type | **Radar** — Heathrow Tower/Ground/Director on the field; **London Terminal Control (LTC)** approach; **London (EGTT)** en route/FIR — 🟧 **no EGTT FIR brief exists yet in this library**; see [Europe airspace briefing](../../../../airspace/europe.md) for continental context and treat a dedicated EGTT brief as an open item |
| Elevation class | Near sea-level (83 ft) — **not** hot-and-high; the defining threat here is **traffic density + segregated-mode/Cranford-legacy runway-role asymmetry**, plus autumn/winter radiation fog |
| Special-airport status | 🟥 **Slot-coordinated IATA Level 3** (coordinator **Airport Coordination Limited, ACL**); unique **segregated-mode, asymmetric-alternation** runway operation; among the busiest dual-runway airports in the world — see §5 |
| Customs / PoE | **Yes** — H24 `[UK AIP AD 2.3]` |
| K Global category | **L** `[VAMSYS mirror 2026-07-26]` |
| K Global base | **No** `[VAMSYS mirror 2026-07-26]` |
| Company preferred alternates | **EGKK, EHAM, EBBR** `[VAMSYS mirror 2026-07-26]` |
| Taxi-in / taxi-out (VAMSYS) | **20 min / 25 min** `[VAMSYS mirror 2026-07-26]` |

---

## 2. Validation summary

| Domain | Flag | Note |
|---|---|---|
| Terrain / CFIT | 🟩 | Flat London Basin; no close-in high terrain relevant to arrival/departure/missed-approach paths. |
| Runway length vs fleet perf | 🟩 | Both runway pairs (3,901 m / 3,658 m) are ample for any K Global type; reduced LDAs (3,592 m / 3,350 m) from displaced thresholds remain non-limiting. |
| Approach availability / minima | 🟧 | CAT III infrastructure confirmed (stop bars, LVP); per-runway-end ILS category/sub-category and idents not confirmed this pass — pull current AIRAC. |
| Airspace / traffic / control | 🟥 | One of the world's busiest terminal areas; **segregated-mode** operation (one runway landing/one departing) plus dense stack/traffic management drives sustained high workload — see §3.2. |
| Weather / seasonal hazard | 🟥 | London Basin **autumn/winter radiation fog and low stratus** routinely triggers LVP — the field's signature weather threat. |
| Curfew / slots / hours | 🟥 | **Slot-coordinated Level 3** (ACL) **and** a **night restricted period (approx. 2300–0400)** plus a **night quota period (approx. 2330–0600)** under the Quota Count (QC) noise-budget system — see §6/§12. |
| RFF category vs our types | 🟩 | CAT 10 — above any of our fleet's requirement. |
| Fuel availability | 🟧 | Hydrant refuelling system confirmed; AIP explicitly notes **"very limited bowser capacity"** — plan hydrant-dependent uplift; specific supplier not confirmed. |
| Customs / handling / security | 🟧 | Customs/security/ATS all H24 per AIP; **named ground handling agent for our operation not confirmed**; hangar space for visiting aircraft is **by arrangement with British Airways or Virgin Atlantic only** — no independent neutral MRO hangar confirmed. |

---

## 3. Threat & Error Management (TEM)

### 3.1 CFIT / Terrain 🟩
EGLL sits at 83 ft AMSL in the flat London Basin — there is **no close-in high terrain** relevant to arrival, departure or missed-approach paths. Non-issue for terrain; verify the MSA ring on the current chart as routine practice.

### 3.2 Airborne conflict / traffic 🟥
Heathrow's two closely-spaced parallel runways (09L/27R, 09R/27L, 1,408 m apart) operate in **segregated mode** — one landing, one departing — rather than independent simultaneous use of both for both roles. Four holding stacks feed the field: **Bovingdon (BNN)** NW, **Biggin (BIG)** SE, **Lambourne (LAM)** NE and **Ockham (OCK)** SW, descending in 1,000 ft increments from roughly 16,000 ft to 8,000 ft `[tier-4 corroboration]`. Traffic density under **London Terminal Control/Heathrow Director** is sustained and continuous through the operating day; a 1 Dec 2003 loss-of-separation event in the Bovingdon stack (two aircraft within 600 ft vertical) is a documented illustration of stack-density risk. Cross-ref the continental [Europe airspace briefing](../../../../airspace/europe.md) — **no dedicated EGTT (London FIR/UIR) brief exists yet**; treat this as an open item, do not link one that doesn't exist.

### 3.3 Runway excursion 🟧
Both landing runways have significant **displaced thresholds**: 09L displaced 309 m (LDA reduced to 3,592 m) and 09R displaced 308 m (LDA reduced to 3,350 m) `[UK AIP AD 2.13]` — brief the correct reduced LDA, not the full physical runway length. No other excursion-specific hazard (contamination programme, tailwind component policy) was confirmed in this pass — verify current AIP/chart.

### 3.4 Weather threat 🟥
The **London Basin is prone to autumn/winter radiation fog and low stratus**, routinely dropping visibility below CAT I minima — the direct operational reason for Heathrow's CAT III stop-bar/LVP infrastructure (confirmed in AIP AD 2.9: "colour coded amber/green lights indicate the runway turn-off routes to the CAT III stop bars"). Summer convective activity is standard regional climatology, not a defining hazard here. See §14.

### 3.5 Operational considerations 🟥
Plan around three durable constraints: (1) the **segregated-mode / Cranford-Agreement-legacy runway asymmetry** — in easterly operations 09L permanently lands and 09R permanently departs (no daily alternation), because the taxiway infrastructure needed to enable full reversal has not been built (Hillingdon Council planning process still unresolved as of the most recent public reporting) `[tier-4, Wikipedia/Cranford Agreement — treat as durable-context, not AIP-sourced]`; (2) the **Level 3 slot-coordinated regime** (ACL) — schedule integrity has direct network consequences; and (3) the **night restricted/quota-period regime** (§6/§12) — a late arrival or departure has real schedule and diversion implications. RFF and runway/pavement infrastructure are first-tier; most open items in §18 are currency/administrative confirmations (comms, navaid idents, SIDs/STARs) rather than safety-critical gaps.

---

## 4. Cautions & Warnings

- **Segregated-mode runway operation** — only one runway is landing and the other departing at any time; **never assume both runways are independently available for both roles**.
- **Easterly ops: no daily runway-role alternation** — 09L always lands, 09R always departs, unlike the westerly-config daily 15:00 swap. Confirm the active configuration and its (a)symmetry before planning.
- **Displaced thresholds on both landing runways** (09L −309 m, 09R −308 m) — brief the reduced LDA, not the full runway length.
- **Autumn/winter radiation fog** can put the field below CAT I minima with little warning — CAT III/LVP is the standing mitigation; check current LVP status before planning.
- **Very high, sustained traffic density** — four holding stacks (BNN/BIG/LAM/OCK) in continuous use; maintain a heightened traffic scan even under radar, especially during a delay/backlog event.
- **Close-in obstacles**: numerous cranes near the field are lit (e.g. one at 571 ft AMSL / ~469 ft AGL, steady red, `[UK AIP AD 2.10]`) reflecting ongoing London-area construction — treat obstacle data as needing a NOTAM cross-check every cycle.
- **ATC frequencies, ILS idents/category, and SID/STAR names are not independently confirmed in this build** (§18) — do not use any value below as a substitute for the current chart.

---

## 5. Aerodrome category, restrictions & crew qualification

- **Special-airport / category:** Not operator-categorised as a restricted-crew "special airport" in reachable sources; the standing crew-briefing items are the **segregated-mode/easterly-asymmetry runway logic** and the **CAT III low-visibility environment**. 🟥
- **Crew-qualification gate:** CAT II/III currency required for full-capability ops in autumn/winter LVP conditions — confirm crew/aircraft currency before planning a low-vis arrival. 🟧
- **Operating restrictions / bans:** Night restricted period (approx. 2300–0400) and night quota period (approx. 2330–0600) under the Quota Count system (§6/§12); no RNP AR ban or circling restriction found in reachable sources — verify current AIRAC. 🟧
- **Overflight / entry / permits:** Standard UK international arrival; no special state permit required. 🟩
- **Operations notes:** ANSP — **NATS** (Heathrow Tower/Ground/Director on the field; London TC approach). Airport operator — **Heathrow Airport Limited**. Slot coordinator — **Airport Coordination Limited (ACL)**.

---

## 6. General / hours / services

| Item | Value | Flag |
|---|---|---|
| ATS hours | H24 `[UK AIP AD 2.3]` | 🟩 |
| AD operating hours | H24 (AD Administration H24) | 🟩 |
| Night / curfew restrictions | Night restricted period **≈2300–0400** (noisiest QC/8, QC/16 aircraft barred); night quota period **≈2330–0600** under the Quota Count (QC) system, **QC/4 banned**, de-facto **QC/2 cap** at night; voluntary no scheduled arrivals before 0430 `[tier-4 corroboration — exact current-season numeric movement/QC budget not confirmed]` | 🟥 |
| RFF category | **CAT 10 (A10)** `[UK AIP AD 2.6]` | 🟩 |
| Fuel | AVTUR Jet A-1; **hydrant refuelling, very limited bowser capacity**; H24 `[UK AIP AD 2.3/2.4]` | 🟧 |
| PCN | Both runways **83/F/A/W/T**; apron concrete (Stand 357 block paving) `[UK AIP AD 2.8/2.12]` | 🟩 |
| Customs | H24 `[UK AIP AD 2.3]` | 🟩 |
| Handling / FBO | H24 handling confirmed generically; **named agent for our operation not confirmed**; hangar space only by arrangement with British Airways or Virgin Atlantic `[UK AIP AD 2.4]` | 🟧 |

---

## 7. Runways & declared distances

| RWY | Dimensions | Surface / PCN | TORA | TODA | ASDA | LDA | Notes |
|---|---|---|---|---|---|---|---|
| 09L | 3,901 × 50 m | Asphalt, grooved / PCN 83/F/A/W/T | 3,901 m | 3,901 m | 3,901 m | **3,592 m** | Landing threshold displaced 309 m |
| 27R | 3,901 × 50 m | Asphalt, grooved / PCN 83/F/A/W/T | 3,882 m | 3,960 m | 3,882 m | 3,882 m | No displacement |
| 09R | 3,658 × 50 m | Asphalt, grooved / PCN 83/F/A/W/T | 3,658 m | 3,658 m | 3,658 m | **3,350 m** | Landing threshold displaced 308 m |
| 27L | 3,658 × 50 m | Asphalt, grooved / PCN 83/F/A/W/T | 3,658 m | 3,658 m | 3,658 m | 3,658 m | No displacement |

*Source: UK AIP AD 2‑EGLL 2.12/2.13 (NATS eAIP, AIRAC cycle effective 2022‑06‑16 — treat as needing a live-AIRAC cross-check for currency, though core runway geometry/PCN/declared distances change rarely). Numerous intersection take-off options are also published (e.g. 09L from taxiway A12/A11/A10/A9; 27R from A4–A9; 09R from N10/N8/S7/N7/N6/S6/N5; 27L from N2/N3/S3/N4/S4/N5/S5) — pull the current AIRAC intersection table at planning if an intersection departure is used. Strip dimensions 4,022 × 280 m all designators. All distances in metres.*

---

## 8. Communications

| Service | Callsign | Frequency | Hours | Notes |
|---|---|---|---|---|
| ATIS | Heathrow ATIS | 113.75 / 117.00 / 121.93 / 128.08 | H24 (assumed) | 🟧 tier-4 sourced (hobby aggregator) — AIP AD 2.18 table not reached this pass |
| Delivery | Heathrow Delivery | 121.98 | H24 (assumed) | 🟧 |
| Ground | Heathrow Ground | 121.70 / 121.85 / 121.90 | Mixed | 🟧 |
| Tower | Heathrow Tower | 118.50 / 118.70 / 124.47 | Mixed | 🟧 |
| Director / Approach | Heathrow Director | 119.73 / 120.40 / 127.52 / 134.98 | Mixed | 🟧 sector-specific — take the assigned frequency |
| Centre / FIR | London (EGTT) — no dedicated brief in this library yet | Per current AIRAC | H24 | See [Europe airspace briefing](../../../../airspace/europe.md) 🟧 |

*None of the above frequencies were independently confirmed against the primary AIP this pass — the UK AIP AD 2‑EGLL fetch used for this build was truncated at AD 2.14 (before the AD 2.18 communications table). Treat every frequency in this section as 🟧 pending a live-AIRAC cross-check.*

---

## 9. Navaids

| Aid | Ident | Freq | Hours | Notes |
|---|---|---|---|---|
| VOR/DME | LON (London) | 113.60 | H24 (assumed) | 🟧 tier-4 corroboration; ~1.0 NM NNW of ARP |
| ILS (all four runway ends) | Idents not confirmed | — | H24 (assumed) | 🟧 CAT III infrastructure confirmed via AIP AD 2.9 (stop-bar/turn-off lighting description); per-end ident/frequency/category not obtained this pass — AIP AD 2.19 not reached |

*Idents/frequencies for the ILS on 09L/27R/09R/27L were not confirmed in this research pass (AIP fetch truncated before AD 2.19). Do not fly against the values above — pull the current AIRAC navaid table.*

---

## 10. Arrival

- **Transition altitude / level:** 🟧 Not confirmed for EGLL specifically this pass (AIP AD 2.17 not reached); Gatwick's AIP states TA 6,000 ft for the same London TMA area — plausibly consistent for Heathrow, but verify current chart before use.
- **Speed:** Standard 250 KIAS below FL100 (UK/ICAO norm) — confirm no local override on current chart.
- **Preferential runway logic:** **Segregated mode** — one runway landing, the other departing. **Westerly-preferred** (favoured by prevailing SW wind and lower community noise impact of landing over the city from the east vs departing over it). Landing/departing roles alternate at **15:00 local in westerly ops only**; **no alternation in easterly ops** (09L always lands) — see §3.5/§11.
- **Approaches (names only — verify minima on current AIRAC charts):**

| RWY | Approach | Notes |
|---|---|---|
| 09L | ILS (CAT III capability) | Ident/category not confirmed this pass 🟧 |
| 27R | ILS (CAT III capability) | 🟧 |
| 09R | ILS (CAT III capability) | 🟧 |
| 27L | ILS (CAT III capability) | 🟧 |

- **STARs (names only):** Not confirmed as formal designators this pass — the four holding stacks (**Bovingdon/BNN, Biggin/BIG, Lambourne/LAM, Ockham/OCK**) are confirmed by name and are the terminal-holding reference points feeding the STAR structure; pull the current-AIRAC STAR list at planning. 🟧
- **LVP:** CAT III trigger conditions apply per London Basin autumn/winter fog risk (§14); exact RVR/trigger figures not confirmed this pass. 🟧
- **Missed approach watch-items:** Terrain is not the driver (flat basin); the operative missed-approach concern is re-sequencing into a very high-density, segregated-mode traffic environment with four active holding stacks.

---

## 11. Departure

- **SIDs (names only — fly the charted version):** Not confirmed in reachable research pass this build — pull the current-AIRAC SID list at planning. 🟧 Note: during easterly operations, departures off **09R** interact with **OCK (Ockham)**-stack arrival traffic and historically require a **non-standard departure procedure** to deconflict — confirm current procedure on the chart.
- **RNP / climb-gradient requirements:** Not confirmed this pass — verify per-SID gradient/equipage on the current chart. See [`OM E — PBN and RNP Operations`](../../../../../flight-ops/pbn-and-rnp-operations.md).
- **Take-off minima:** Published per AIP — exact figures not confirmed this pass. 🟧
- **Start-up / push-back:** Confirm cross-bleed/APU notification procedure and push-back approval process locally — not itemised in the AIP sections reached this pass. 🟧
- **ATC slot / CTOT & clearance:** **IATA Level 3 slot-coordinated** (coordinator **ACL**); EUROCONTROL Network Manager ATFM/CTOT regulation applies as standard practice for a congested, slot-coordinated hub. 🟧
- **De-icing:** "By arrangement with handling agent" per AIP AD 2.4 — no dedicated remote de-icing pad locations confirmed in this pass. 🟧 See [`OM E — Cold Weather Operations`](../../../../../flight-ops/cold-weather-operations.md).

---

## 12. Noise & Environmental

- **Noise abatement (NAP):** Noise Preferential Routes apply to departures generically (name/routing detail not confirmed this pass 🟧); **Continuous Descent Approach (CDA)** techniques are used on arrivals, particularly at night, since the early 2000s `[tier-4 corroboration]`. The **"Fly Quieter & Greener"** scheme (reinstated Oct 2024, successor to "Fly Quiet & Green," introduced 2017) scores the busiest airlines on environmental benchmarks quarterly.
- **Night noise / dB limits:** Governed through the night restricted period, night quota period and the Quota Count (QC) noise-budget system (§6) rather than a single published per-movement dB limit; Heathrow enforces a de-facto **QC/2 cap** on night movements, stricter than the general ICAO Chapter 4 standard. 🟧 Exact current-season numeric movement/QC budget not confirmed.
- **Engine run-up restrictions:** Not confirmed in reachable sources — verify locally. 🟧
- **Reverse thrust / idle-reverse policy:** Not confirmed in reachable sources — verify locally. 🟧

---

## 13. Ground operations

- **Stands for our types:** Widebody-capable positions are distributed across all four active terminals — **Terminal 5** (Concourse C, 7× A380-capable stands; Concourse B widebody except A380), **Terminal 3** (Pier 6, A380-capable), **Terminal 4** (4× A380 stands) and **Terminal 2** (widebody-capable, Star Alliance). Confirm current gate assignment with handling. 🟧 | 🟧
- **Push-back:** Nose-in parking throughout the airport; most stands equipped with **'Safedock' Visual Docking Guidance System (VDGS)**, remainder marshalled `[UK AIP AD 2.9]`. Mandatory-vs-self-manoeuvre policy for Code E/F stands not itemised this pass. 🟧
- **Standard taxi routes:** Confirm with Ground/Director on the day; ground taxiway widths 23 m / 30 m / 37 m (concrete and asphalt) `[UK AIP AD 2.8]`.
- **Hot spots / tight taxiways:** No named ICAO hot-spot designators were confirmed in the AIP extract reached this pass (truncated before the relevant section) — Heathrow's general reputation for a **tight, complex ground layout** (partly a legacy of the original 1940s–50s six-runway "hexagram" configuration) is well documented in general aviation commentary. 🟧 Treat named hot spots as an open item.
- **Follow-me:** Availability not confirmed in reachable source — verify locally. 🟧

---

## 14. Weather & seasonal (durable)

- **Climate / prevailing wind:** Temperate maritime climate, London Basin; prevailing wind south-westerly, consistent with the westerly-preferred runway configuration.
- **Seasonal hazards:** **Autumn/winter radiation fog and low stratus** is the field's defining hazard — the London Basin traps cold, humid air, routinely dropping visibility below CAT I minima; this is the direct operational driver for CAT III/LVP infrastructure. Occasional winter snow events require the mechanical/chemical (ethylene glycol) de-icing/anti-icing programme confirmed in AIP AD 2.7.
- **Local effects:** Basin-trapped fog is the standout local effect; no notable terrain/sea-breeze effects at this location.

> **Live weather — pull at planning (T-2h):** METAR, TAF, TREND, SIGMET/AIRMET. Not stored here.

---

## 15. NOTAMs

> **Pull at planning (T-2h).** Perishable — not stored here. Check: runway/taxiway closures, navaid U/S, CAT III equipment status, LVP status, lighting, obstacle/crane (numerous cranes lit near the field — confirm current NOTAM status against AIP AD 2.10 obstacle list), RFF downgrade, slot/CTOT constraints. Source: official AIS / OFP NOTAM block.

---

## 16. Fuel & alternate planning notes

- **Typical role for us:** **Destination** — not a K Global base.
- **Nearest suitable alternates:** Company preferred alternates [**EGKK**](../egkk/index.md) (Gatwick), [**EHAM**](../../netherlands/eham/index.md) (Amsterdam Schiphol), [**EBBR**](../../belgium/ebbr/index.md) (Brussels) `[VAMSYS mirror 2026-07-26]` — confirm suitability, runway/RFF adequacy and current minima per leg.
- **Fuel-uplift notes:** AVTUR Jet A-1; **hydrant refuelling, very limited bowser capacity** `[UK AIP AD 2.4]` — plan around the hydrant system; specific into-plane provider/hours not confirmed. 🟧 See [`OM E — Fuel Policy`](../../../../../flight-ops/fuel-policy.md).
- **Range/perf flags for our fleet:** Field length/strength non-limiting for any K Global type on either runway pair. See [`OM B — Fleet Capability Matrix`](../../../../../fleet/capability-matrix.md) for type-by-type range/performance reference.

---

## 17. Fleet-specific notes (optional)

- No field-elevation or field-length performance penalty for K Global's Category **L** operation at EGLL. The operative planning considerations are (1) the segregated-mode/Cranford-legacy runway-role logic (§3.5/§11) and (2) slot/schedule integrity under the Level 3 regime — not aircraft performance. See [`OM B — Fleet Capability Matrix`](../../../../../fleet/capability-matrix.md).

---

## 18. Open items (🟧 — confirm against AIP / current AIRAC)

- **ATC frequencies (§8)** — sourced only from a tier-4 hobby aggregator; the AIP AD 2.18 communications table was not reached in this research pass (fetch truncated at AD 2.14).
- **ILS idents, frequencies and per-runway-end category/sub-category (§9/§10)** — AIP AD 2.19 not reached; CAT III *infrastructure* is confirmed (stop bars) but per-end idents/category are not.
- **Transition altitude/level for EGLL specifically** — inferred from Gatwick's AIP (same TMA) but not independently AIP-sourced for Heathrow.
- **SIDs/STARs (current designators)** — not obtained in this research pass; the four holding stacks (BNN/BIG/LAM/OCK) are confirmed by name, formal STAR/SID designators are not.
- **Named ground-movement hot spots** — not confirmed in the AIP extract reached; Heathrow's complex-layout reputation is well documented generically but no specific HS-numbered points were found.
- **Take-off minima, engine run-up restriction, reverse-thrust/idle-reverse policy, follow-me availability, cross-bleed/APU start procedure** — none confirmed in reachable sources this pass.
- **De-icing pad locations/procedure** — AIP states "by arrangement with handling agent" only; no dedicated pad locations confirmed.
- **Named ground handling agent(s) for our operation** — not confirmed; hangar space for visiting aircraft is by arrangement with British Airways or Virgin Atlantic only.
- **Current-season exact night-quota numeric movement/QC budget** — regime structure (restricted period, quota period, QC/4 ban, de-facto QC/2 night cap) is confirmed; precise current-season figures were in sources not opened this pass.
- **No dedicated EGTT (London FIR/UIR) brief exists yet in this library** — flagged per governance; link only the continental [Europe airspace briefing](../../../../airspace/europe.md) until a dedicated EGTT brief is built.
- **Cranford Agreement current infrastructure status** — full easterly-ops runway alternation remains pending taxiway works and local-authority planning approval; confirm current status before treating the easterly-ops asymmetry as permanent.

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim material (current-AIRAC charts) informs content but is not listed here.*

- **UK AIP (NATS Aeronautical Information Service), AD 2‑EGLL**, AIRAC cycle effective 2022‑06‑16 — https://www.aurora.nats.co.uk/htmlAIP/Publications/2022-06-16-AIRAC/html/eAIP/EG-AD-2.EGLL-en-GB.html (retrieved 2026-07-26). *ARP/elevation/mag-var, operational hours, cargo/handling, RFF category, seasonal/de-icing, apron/taxiway data, surface markings/lighting, obstacles, runway physical characteristics and declared distances. Fetch truncated at AD 2.14 — communications (2.18), navaids (2.19), local traffic regulations/noise (2.20–2.22) and hot spots/charts index (2.24) not reached; treat those items as unconfirmed pending a further pull.*
- OurAirports — https://ourairports.com/airports/EGLL/ and /runways.html and /closest-navaids.html (retrieved 2026-07-26). *Cross-check.*
- SkyVector — https://skyvector.com/airport/EGLL (retrieved 2026-07-26). *ATC frequency reference (tier-4, unconfirmed against primary AIP this pass).*
- Wikipedia — "Heathrow Airport" — https://en.wikipedia.org/wiki/Heathrow_Airport (retrieved 2026-07-26). *Terminal structure, segregated-mode/westerly-preference operation, noise schemes.*
- Wikipedia — "Cranford Agreement" — https://en.wikipedia.org/wiki/Cranford_Agreement (retrieved 2026-07-26). *Easterly-ops runway-role asymmetry history and current infrastructure status.*
- Wikipedia — "Heathrow arrival stacks" — https://en.wikipedia.org/wiki/Heathrow_holding_stack (retrieved 2026-07-26). *BNN/BIG/LAM/OCK holding-stack detail.*
- Wikipedia — "Quota Count system" — https://en.wikipedia.org/wiki/Quota_Count_system (retrieved 2026-07-26). *Night noise quota mechanism.*
- Wikipedia — "Airport slot" — https://en.wikipedia.org/wiki/Airport_slot (retrieved 2026-07-26). *Level 3 coordination, ACL role.*
- GOV.UK — night flight restriction consultation pages (DfT) (retrieved 2026-07-26). *Night quota regime structure — exact current-season figures not opened this pass.*

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-26 | Built from UK AIP (NATS AIS); K Global fields from live VAMSYS; 4-page pack. |
