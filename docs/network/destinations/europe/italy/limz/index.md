# LIMZ — Cuneo-Levaldigi · Airport Briefing

**LIMZ / CUF** · Levaldigi (Savigliano), Cuneo Province, Piedmont, Italy · Europe
**Version** v0.1 · **Updated** 2026-07-26 · **Status** Draft

> **Read-me:** Planning aid for the sim, not a chart. Static data is drawn from ENAV AIP Italia where reachable, corroborated with public tier-4 sources per the source register; approaches/SIDs/STARs are listed **by name only** — fly the charted current-AIRAC version. Live weather/NOTAMs are pulled at planning (§14/§15). This field carries more 🟧 flags than a home-network hub because it is **not currently in the K Global (VAMSYS) network** — see §1/§16. Open 🟧 items are listed in §18. Flag legend 🟥 restriction/hazard · 🟧 caution/unverified · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| ARP (lat/long) | 44.54750, 7.62306 (44°32′51″N / 7°37′23″E) `[seeded legacy stub; cross-checked OurAirports/SkyVector 2026-07-26]` |
| Field elevation | **1,267 ft / 386 m AMSL** — reported the highest-elevation airport among Italy's top-30 by traffic 🟧 |
| Mag variation | **~001° E** (commercial-aggregator sourced; not independently confirmed against a current AIP table) 🟧 |
| Time zone | UTC+1 (CET) / UTC+2 (CEST, EU DST observed) |
| Runway(s) | **03/21**, single runway, asphalt, ~2,100 m × 45 m (public sources range 2,100–2,104 m; one source reports 2,495 m total pavement) — see §7 🟧 |
| Preferential runway | Not published / verify — wind-dependent; runway usable for landing/takeoff in both directions 🟧 |
| Longest LDA | ~2,100 m (both directions, network-sim sourced) 🟧 |
| Approaches | **RWY 21**: ILS/LOC and RNAV(GNSS) referenced by a network-sim source (exact chart names not confirmed) 🟧 · **RWY 03**: no confirmed published instrument approach — circling/visual only, verify current AIRAC 🟥 |
| RFF category | Reported **CAT 6** via secondary citation of AIP AD 2 LIMZ §1.2 — not independently confirmed from the primary eAIP this pass 🟧 |
| Control type | **Procedural / AFIS** (non-radar) on the field; **Milano Radar / Milano ACC (LIMM)** provides approach and en-route service — see §8 |
| Elevation class | Not hot-and-high in performance terms (386 m is modest); notable only as Italy's highest-elevation top-30 airport — see §3.1 |
| Special-airport status | None formally identified; standing considerations are the single-runway/one-approach-direction profile, AFIS (non-radar) service, and limited AD hours — see §5 🟧 |
| Customs / PoE | Reported **Yes** (scheduled international service, e.g. Casablanca); exact desk hours not confirmed 🟧 |
| K Global category | **Not set — LIMZ is not currently in the K Global VAMSYS network** `[VAMSYS mirror 2026-07-26]` 🟧 |
| K Global base | **Not set — not in VAMSYS** `[VAMSYS mirror 2026-07-26]` 🟧 |
| Company preferred alternates | **Not set — not in VAMSYS** `[VAMSYS mirror 2026-07-26]` 🟧 |
| Taxi-in / taxi-out (VAMSYS) | **Not set — not in VAMSYS** `[VAMSYS mirror 2026-07-26]` 🟧 |

---

## 2. Validation summary

| Domain | Flag | Note |
|---|---|---|
| Terrain / CFIT | 🟧 | Maritime Alps rise close to the southwest (Monte Argentera, 3,297 m, the range's highest summit) — real high-terrain quadrant relative to a 1,267 ft field; exact bearing/distance and MSA sectors not sourced this pass. |
| Runway length vs fleet perf | 🟥 | Single ~2,100 m runway — non-limiting for regional/narrowbody types but a genuine constraint for larger K Global equipment; see §16/§17. |
| Approach availability / minima | 🟥 | Only RWY 21 has a confirmed published instrument approach in reachable sources; RWY 03 appears circling/visual only. |
| Airspace / traffic / control | 🟧 | Non-radar, AFIS-serviced field; low traffic density but procedural (not radar) discipline required. Milano ACC (LIMM) territory — no dedicated FIR brief in this tree yet (§8). |
| Weather / seasonal hazard | 🟩 | Public sources describe the area as comparatively free of strong fog/wind; Alpine-foothill winter snow/ice season should still be assumed (§14). |
| Curfew / slots / hours | 🟧 | AD/ATS hours published as 07:00–21:00 local (non-H24), recently extended from 10 to 14 h; no slot coordination identified. |
| RFF category vs our types | 🟧 | CAT 6 reported but not primary-confirmed; adequacy vs our fleet not assessed while the field is outside VAMSYS. |
| Fuel availability | 🟧 | Jet A-1 and Avgas reported available; supplier/hours/into-plane detail unconfirmed. |
| Customs / handling / security | 🟧 | Port-of-Entry reported; GEAC SpA is the airport operator/handler; desk hours and handling detail unconfirmed. |

---

## 3. Threat & Error Management (TEM)

### 3.1 CFIT / Terrain 🟧
LIMZ sits at 1,267 ft AMSL on the Piedmont plain — reportedly the highest-elevation airport among Italy's top 30 by traffic, though this is not "hot-and-high" in performance terms. The **Maritime Alps** rise close to the southwest, culminating at **Monte Argentera (3,297 m / 10,817 ft)**, the range's highest summit — a genuine high-terrain quadrant relative to the field's modest elevation. Runway heading data show **RWY 21 (210°)** oriented toward this higher ground and **RWY 03 (030°)** oriented away from it, toward the open plain — a directionally relevant consideration for any circling, missed-approach or visual manoeuvring on the 21 side. Exact peak bearings/distances and MSA sector minima were **not sourced this pass** — pull the area/MSA chart at planning.

### 3.2 Airborne conflict / traffic 🟧
LIMZ operates as a **non-radar, AFIS-serviced** aerodrome rather than a full ATC tower — a network-sim source notes the visual circuit is normally flown west of the field at pilot discretion, with position reports to AFIS/TWR. Approach, radar and en-route service is provided remotely by **Milano Radar / Milano ACC (LIMM)** (the former "Torino Approach" sector was absorbed into Milano Radar from 30 Nov 2023). Traffic density is low relative to major hubs, reducing conflict risk, but **procedural (non-radar) discipline** is the operative workload item. **No dedicated Milano FIR brief exists yet in this tree** — pending that build, refer to [Europe — General](../../../../airspace/europe.md) for regional airspace context. 🟧

### 3.3 Runway excursion 🟧
The single runway (~2,100 m, both directions usable) shows a modest threshold-elevation difference between ends in public data (RWY 03 thr ≈1,267 ft, RWY 21 thr ≈1,217 ft), implying a shallow slope down toward 21 — **not independently confirmed** against a primary source; verify the runway profile before assuming a downhill-landing/uphill-departure effect. No displaced threshold was identified in reachable sources.

### 3.4 Weather threat 🟩🟧
Public sources describe the Cuneo area as **"rarely subject to strong fog or wind,"** a comparatively benign profile relative to many Po Valley/Alpine-foothill fields — a genuine point of difference from fog-prone plain airports elsewhere in the network. That said, a **Piedmont winter snow/ice season** should still be assumed at this elevation and latitude; de-icing provisioning was **not confirmed** in reachable sources (§11/§14). 🟧

### 3.5 Operational considerations 🟥
Three durable constraints stand out, should this field ever be reconciled into the network: (1) a **single ~2,100 m runway with only one confirmed instrument-approach direction** (RWY 21) — RWY 03 use appears to rely on circling/visual manoeuvring, a meaningful limiting factor for larger equipment or lower-visibility conditions; (2) **limited AD/ATS operating hours** (published 07:00–21:00 local, non-H24, AFIS rather than full ATC tower); and (3) **RFF, PCN and fuel/handling specifics are only thinly corroborated** in public sources — treat every commercial/servicing assumption as unverified until confirmed against the primary AIP and against GEAC SpA (the airport operator). See [`OM E — Short and Limited Runway Operations`](../../../../../flight-ops/short-and-limited-runway-operations.md) and [`OM B — Fleet Capability Matrix`](../../../../../fleet/capability-matrix.md) for fleet-specific runway-length assessment.

---

## 4. Cautions & Warnings

- Single runway **03/21 (~2,100 m/6,900 ft)** usable both directions — confirm current declared distances for the planned runway end before treating either as a firm limiting-length figure.
- Only **RWY 21** has a confirmed published instrument approach in reachable sources; **RWY 03** appears to require circling/visual manoeuvring — verify on current AIRAC before planning a RWY 03 arrival in IMC.
- **AFIS (not full ATC tower)** — non-radar, procedural traffic management on the field; Milano Radar/ACC provides approach/en-route service.
- **AD/ATS hours are limited** (published 07:00–21:00 local, non-H24) — plan for no off-hours contingency at this field.
- **Maritime Alps rise close to the southwest** (Monte Argentera, 3,297 m) — respect published MSA/circling minima on the 21 side.
- **This field is currently outside the K Global (VAMSYS) network** — every commercial/operational VAMSYS field in this pack is explicitly unset; do not assume base, alternate or handling status without VAMSYS reconciliation.

---

## 5. Aerodrome category, restrictions & crew qualification

- **Special-airport / category:** Not formally categorised as a restricted-crew "special airport" in reachable sources; the standing briefing items are the single-runway/one-approach-direction profile and the AFIS/non-radar environment. 🟧
- **Crew-qualification gate:** Not published / verify — no special crew-qualification requirement identified in reachable sources; treat non-precision/circling proficiency for the RWY 03 side as a standing consideration pending confirmation. 🟧
- **Operating restrictions / bans:** AD/ATS hours 07:00–21:00 local (non-H24) is the primary operating-window restriction identified; no RNP AR ban, circling restriction, or night-ops ban independently confirmed. 🟧
- **Overflight / entry / permits:** Standard EU/Schengen entry; the field is reported as a Port of Entry via its scheduled international route — no special state permit identified. 🟧
- **Operations notes:** Airport operator/handler — **GEAC SpA**. ATS — **AFIS (Cuneo)**. Approach/en-route — **Milano Radar / Milano ACC (LIMM)**.

---

## 6. General / hours / services

| Item | Value | Flag |
|---|---|---|
| ATS hours | **07:00–21:00 local (AFIS)**, non-H24; extended from 10 to 14 h in early 2026 | 🟧 |
| AD operating hours | Same as ATS — 07:00–21:00 local | 🟧 |
| Night / curfew restrictions | No published noise curfew identified; the AD/ATS operating window (07:00–21:00) is itself the effective night restriction | 🟥 |
| RFF category | Reported CAT 6 (secondary AIP citation, not independently confirmed) | 🟧 |
| Fuel | Jet A-1 and Avgas reported available; supplier/hours/quality notes not confirmed | 🟧 |
| PCN | Not published / verify | 🟧 |
| Customs | Reported available (Port of Entry); exact hours not confirmed | 🟧 |
| Handling / FBO | **GEAC SpA** (airport operator/handler); a general-/business-aviation service is referenced on the official airport site but not independently confirmed by name | 🟧 |

---

## 7. Runways & declared distances

| RWY | Dimensions | Surface / PCN | TORA | TODA | ASDA | LDA | Notes |
|---|---|---|---|---|---|---|---|
| 03 | ~2,100 × 45 m (public sources 2,100–2,104 m) | Asphalt / PCN not published 🟧 | 2,316 m (network-sim sourced) 🟧 | Not published / verify | Not published / verify | ~2,100 m | Runway usable both directions; no confirmed published instrument approach — circling/visual only 🟥 |
| 21 | Same physical runway | Asphalt / PCN not published 🟧 | 2,279 m (network-sim sourced) 🟧 | Not published / verify | Not published / verify | ~2,100 m | Only runway end with a confirmed published instrument approach in reachable sources |

*Public sources disagree on total pavement length (2,100 m vs 2,104 m vs one report of 2,495 m total including additional pavement/overrun) — treat as 🟧 pending confirmation against the primary eAIP AD 2 LIMZ, which was not reachable via raw fetch this pass (JavaScript application / account-gated — see Sources). TORA figures are sourced to a network-simulation aerodrome reference, not the primary AIP; treat as 🟧 pending verification. All distances in metres unless noted.*

---

## 8. Communications

| Service | Callsign | Frequency | Hours | Notes |
|---|---|---|---|---|
| ATIS | Not published / verify | — | — | No ATIS identified in reachable sources — plausible for a field this size 🟧 |
| Delivery | Not published / verify | — | — | Likely combined with the AFIS/TWR position at a field this size 🟧 |
| Ground | Not published / verify | — | — | Likely combined with the AFIS/TWR position 🟧 |
| Tower (AFIS) | Cuneo TWR/AFIS | **119.550** | Per AD/ATS hours (07:00–21:00 local) | Network-sim + commercial-aggregator corroborated 🟧 |
| Approach | Milano Radar (Torino sector) | **129.275** | — | Former "Torino Approach"; resectorised under Milano Radar since 30 Nov 2023 🟧 |
| Centre / FIR | Milano ACC/Radar (LIMM), upper sector | **135.455** | H24 (assumed) | 🟧 |
| Information | Milano Information (FIS) | **124.925** | — | 🟧 |

*Milano ACC (LIMM) is the controlling FIR authority for this field. **No dedicated Milano FIR brief exists yet in this tree** — pending that build, refer to [Europe — General](../../../../airspace/europe.md) in the interim. 🟧*

---

## 9. Navaids

| Aid | Ident | Freq | Hours | Notes |
|---|---|---|---|---|
| No on-field navaid confirmed | — | — | — | Not identified in reachable sources 🟧 |
| VOR | TOP (Torino) | 114.50 | H24 (assumed) | ~24.9 NM, bearing 202° from field — area reference only |
| VOR/DME | CLL / CSL (Caselle) | 109.00 / 116.75 | H24 (assumed) | ~38–40 NM — area reference only |
| NDB | SVC, MUS, LU, CH | 418 / 428 / 378 / 346 kHz | H24 (assumed) | 70–97 NM — general area reference, not field-specific |

---

## 10. Arrival

- **Transition altitude / level:** TA **7,000 ft**; TL variable by QNH per a network-sim-sourced table (QNH ≥1013 hPa → FL80; 995–1012 → FL85; 977–994 → FL90; <977 → FL95) — not independently confirmed against the primary AIP. 🟧
- **Speed:** Standard 250 KIAS below FL100 assumed (ICAO/EU norm) — no field-specific override identified.
- **Preferential runway logic:** Not published / verify — wind-dependent; runway is bidirectional. 🟧
- **Approaches (names only — verify minima on current AIRAC charts):**

| RWY | Approach | IAF | FAF/FAP alt | Notes |
|---|---|---|---|---|
| 21 | ILS / LOC and RNAV(GNSS) referenced (exact chart name not confirmed) | Not published / verify | Not published / verify | Network-sim sourced only — verify current AIRAC 🟧 |
| 03 | No confirmed published instrument approach | — | — | Circling/visual only — verify current AIRAC 🟥 |

- **STARs (names only):** Not confirmed from a primary source this pass — verify the current-AIRAC STAR list at planning. 🟧
- **LVP:** Not published / verify — the field's reported low-fog profile suggests LVP triggers are uncommon, but this is not confirmed. 🟧
- **Missed approach watch-items:** Terrain to the southwest (Maritime Alps) is the plausible driver on the RWY 21 side — not independently confirmed; verify current chart.

---

## 11. Departure

- **SIDs (names only — fly the charted version):** IXUSA, KUKEV, LAGEN, TOP, MMP (RNAV, published for both runway directions per a network-sim source) — verify current AIRAC names/gradients before use. 🟧
- **RNP / climb-gradient requirements:** All referenced SIDs are RNAV — confirm RNP/gradient requirements on the current chart. See [`OM E — PBN and RNP Operations`](../../../../../flight-ops/pbn-and-rnp-operations.md). 🟧
- **Take-off minima:** Not published / verify. 🟧
- **Start-up / push-back:** Not published / verify — small regional field, likely informally coordinated with AFIS. 🟧
- **ATC slot / CTOT & clearance:** No slot coordination identified (a commercial aggregator reports "slots required: N/A"); standard EUROCONTROL ATFM/CTOT regime may still apply generically — not independently confirmed for this field. 🟧
- **De-icing:** Not published / verify — no dedicated de-icing pad/procedure identified in reachable sources. See [`OM E — Cold Weather Operations`](../../../../../flight-ops/cold-weather-operations.md). 🟧

---

## 12. Noise & Environmental

- **Noise abatement (NAP):** Not published / verify. 🟧
- **Night noise / dB limits:** Not published / verify — effectively bounded by the 07:00–21:00 AD/ATS operating window rather than a separately published dB limit. 🟧
- **Engine run-up restrictions:** Not published / verify. 🟧
- **Reverse thrust / idle-reverse policy:** Not published / verify. 🟧

---

## 13. Ground operations

- **Stands for our types:** Not published / verify — small regional apron; a general-/business-aviation service area is referenced on the airport's own site, but no widebody/Code E stand data was found. Given the runway-length caution in §3.5/§7, this is a field that in practice suits narrowbody-or-smaller equipment. 🟥
- **Push-back:** Not published / verify. 🟧
- **Standard taxi routes:** Not published / verify — single runway with a minimal taxiway system expected for a field this size. 🟧
- **Hot spots / tight taxiways:** None identified in reachable sources — plausible given field size, not confirmed. 🟧
- **Follow-me:** Not published / verify. 🟧

---

## 14. Weather & seasonal (durable)

- **Climate / prevailing wind:** Piedmont-plain climate at the foot of the Maritime Alps.
- **Seasonal hazards:** Public sources describe the area as comparatively free of strong fog/wind — a genuine point of difference from fog-prone plain airports elsewhere in the network. A **Piedmont winter snow/ice season** should still be assumed at this elevation and latitude; de-icing provisioning not confirmed (§11). 🟧
- **Local effects:** Proximity to the Maritime Alps to the southwest may produce local terrain-induced wind effects (e.g. valley/katabatic flow) — not independently sourced or quantified this pass. 🟧

> **Live weather — pull at planning (T-2h):** METAR, TAF, TREND, SIGMET/AIRMET. Not stored here.

---

## 15. NOTAMs

> **Pull at planning (T-2h).** Perishable — not stored here. Check: runway closure/condition, navaid U/S, AFIS/ATS hours-of-operation changes, lighting, obstacle/crane, RFF downgrade, GPS/RAIM for RNAV procedures. Source: official AIS / OFP NOTAM block.

---

## 16. Fuel & alternate planning notes

- **Typical role for us:** **Not set — LIMZ is not currently in the K Global VAMSYS network** `[VAMSYS mirror 2026-07-26]` 🟧
- **Nearest suitable alternates:** **Not set — not in VAMSYS** `[VAMSYS mirror 2026-07-26]`. For geographic orientation only (not an approved-alternate list): Torino/Caselle (LIMF) ~39 NM, Genova/Sestri (LIMJ) ~53 NM, Nice Côte d'Azur (LFMN) ~56 NM. 🟧
- **Fuel-uplift notes:** Jet A-1 and Avgas reported available; supplier, into-plane hours and quality/freeze notes not confirmed. See [`OM E — Fuel Policy`](../../../../../flight-ops/fuel-policy.md). 🟧
- **Range/perf flags for our fleet:** The ~2,100 m single runway is a genuine length constraint for larger K Global equipment. See [`OM B — Fleet Capability Matrix`](../../../../../fleet/capability-matrix.md) and [`OM E — Short and Limited Runway Operations`](../../../../../flight-ops/short-and-limited-runway-operations.md). 🟥

---

## 17. Fleet-specific notes (optional)

- Not applicable while LIMZ remains outside the K Global network. If the field is ever reconciled into VAMSYS, revisit runway-length suitability type-by-type against [`OM B — Fleet Capability Matrix`](../../../../../fleet/capability-matrix.md) before scheduling any equipment here — the single ~2,100 m runway is unlikely to suit widebody long-haul types.

---

## 18. Open items (🟧 — confirm against AIP / current AIRAC)

- **Primary eAIP access** — ENAV's eAIP Italia (aip.enav.it) requires a free account/JS application; the AIP Italia mirror app (NextDigital) exposes an AD-2 index confirming LIMZ's AD-2 section exists, but individual AD-2 content pages render as a JS application and did not return content to a raw fetch. No content in this brief is sourced to a directly-fetched primary AIP page — all figures are tier-4 (public aggregator / network-sim) corroborated and flagged accordingly.
- **Declared distances** (TORA/TODA/ASDA/LDA per runway end) — sourced to a network-sim aerodrome reference, not the primary AIP; total pavement length also disputed across sources (2,100 / 2,104 / 2,495 m).
- **RFF category** — reported CAT 6 via secondary citation of AIP AD 2 LIMZ §1.2; not independently confirmed from a primary source this pass.
- **PCN** — not found in any reachable source.
- **Instrument approach names/minima** — RWY 21 approach type referenced (ILS/LOC/RNAV) but exact chart names/minima not confirmed; RWY 03 approach status (circling-only) not confirmed from a primary source.
- **STARs** — no STAR names found in reachable sources.
- **TA/TL table** — sourced to a network-sim reference; not confirmed against the primary AIP.
- **ATIS/Delivery/Ground frequencies** — not identified; may not exist as separate positions at a field this size.
- **Take-off minima, NAP, night-noise limits, engine run-up/reverse-thrust policy, push-back policy, follow-me availability** — none confirmed in reachable sources.
- **De-icing provisioning** — not confirmed; treated as an open winter-ops question.
- **Fuel supplier, into-plane hours, PCN-linked weight limits, stand/apron layout and widebody suitability** — not confirmed.
- **Mag variation (~001° E)** — commercial-aggregator sourced only.
- **This entire field is outside the K Global (VAMSYS) network** — every commercial/operational field marked "Not set" throughout this brief awaits VAMSYS reconciliation before any operational use.

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim material may inform content but is not listed here.*

- ENAV — eAIP Italia landing page — https://aip.enav.it (retrieved 2026-07-26). *Official landing page reachable; full AD 2 LIMZ content requires a free ENAV account / JS application — not reachable via raw fetch this pass.*
- AIP Italia app (NextDigital) — AD 2 index — https://www.nextdigital.it/apps/aip/browse/ad (retrieved 2026-07-26). *Confirms LIMZ AD-2 section exists (CUNEO/Levaldigi); individual AD-2 content pages are a JavaScript application and did not render to raw fetch.*
- Wikipedia (English) — "Cuneo International Airport" — https://en.wikipedia.org/wiki/Cuneo_International_Airport (retrieved 2026-07-26).
- Wikipedia (Italian) — "Aeroporto di Cuneo-Levaldigi" — https://it.wikipedia.org/wiki/Aeroporto_di_Cuneo-Levaldigi (retrieved 2026-07-26). *Runway/hours/operator detail, "rarely subject to strong fog or wind," highest-elevation-among-top-30 claim.*
- OurAirports — https://ourairports.com/airports/LIMZ/ (retrieved 2026-07-26). *ARP/elevation cross-check.*
- SkyVector — https://skyvector.com/airport/LIMZ/Cuneo-Levaldigi-Airport (retrieved 2026-07-26). *Runway heading/threshold-elevation, nearby navaids.*
- IVAO Italy — Aerodrome QuickOverview LIMZ (network-sim document, not regulatory) — https://quickoverview.ivao.it/aerodrome/show/LIMZ (retrieved 2026-07-26). *TA/TL, declared-distance figures, frequencies, SID names, AFIS/procedural-control note — cross-checked, not authoritative.*
- Gazzetta d'Alba — "A Cuneo e in altri aeroporti viene ampliata l'operatività: Levaldigi passa da 10 a 14 ore di apertura" (2026-02) — https://www.gazzettadalba.it/2026/02/a-cuneo-e-in-altri-aeroporti-viene-ampliata-loperativita-levaldigi-passa-da-10-a-14-ore-di-apertura/ (retrieved 2026-07-26). *AD/ATS hours extension.*
- TargatoCN.it — "Aeroporto di Cuneo, Enac amplia l'operatività: ma a Levaldigi era già realtà" (2026-02-26) — https://www.targatocn.it/2026/02/26/leggi-notizia/argomenti/attualita/articolo/aeroporto-di-cuneo-enac-amplia-loperativita-ma-a-levaldigi-era-gia-realta.html (retrieved 2026-07-26). *AD/ATS hours corroboration.*
- Cuneo Airport (GEAC SpA official site) — "Who we are" — https://cuneoairport.com/en/cuf-cuneo-airport/who-we-are/ (retrieved 2026-07-26). *Operator identification.*
- QNHFLY — Aeroporto Cuneo Levaldigi airfield record — https://www.qnhfly.com/en/airfield/6/aeroporto-cuneo-levaldigi (retrieved 2026-07-26). *Hours, fuel types, tower frequency cross-check.*
- Universal Weather and Aviation — Airport record LIMZ/CUF — https://www.universalweather.com/airports/LIMZ-CUF-LEVALDIGI-AIRPORT-CUNEO-PIEMONTE-ITALY/ (retrieved 2026-07-26). *Magnetic variation, slot regime, Port-of-Entry status — commercial aggregator, not AIP-grade.*

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-26 | Built from AIP Italia (ENAV); K Global fields from live VAMSYS; 4-page pack. |
