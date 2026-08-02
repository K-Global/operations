# LFMN — Nice-Côte d'Azur · Airport Briefing

**LFMN / NCE** · Nice, Alpes-Maritimes, France · Europe
**Version** v0.1 · **Updated** 2026-07-26 · **Status** Draft — SIA France eAIP-derived

> **Read-me:** Planning aid for the sim, not a chart. Static data is drawn from the SIA France eAIP (AIP France, AD 2 LFMN) plus IFALPA and DGAC operational/noise-abatement material; approaches/SIDs/STARs are listed **by name only or flagged not-yet-confirmed** — fly the charted current-AIRAC version. Live weather/NOTAMs are pulled at planning (§14/§15). Open 🟧 items are listed in §18. Flag legend 🟥 restriction/hazard · 🟧 caution/unverified · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| ARP (lat/long) | 43°39′55″N / 007°12′54″E (43.6653, 7.2150) `[SIA France AIP AD 2 LFMN.2]` |
| Field elevation | **12 ft AMSL** (reference temperature 29°C; geoid undulation 160 ft) |
| Mag variation | **3.0°E** (2025 epoch; AIP-published annual change +0.116°/yr) 🟧 not recalculated to current year |
| Time zone | UTC+1 (CET) / UTC+2 (CEST, EU DST observed) |
| Runway(s) | **04L/22R** 2,628 × 45 m · **04R/22L** 2,963 × 45 m — both bituminous concrete, built substantially on reclaimed land extending into the Mediterranean |
| Preferential runway | **04-configuration** (arrival on 04L, departure on 04R) dominant — wind/noise-driven; ATC tolerates tailwind beyond the ICAO 5 kt guideline to avoid frequent config changes — see §10/§11 |
| Longest LDA | 2,963 m (04R/22L) |
| Approaches | **ILS/LOC CAT I on 04L and 04R only** (no CAT II/III or autoland — AIP-noted); **RNP A / RNP Y/Z (04)**, **RNP D / RNP Z(AR) (22)**, **VOR-DME (04)**, **VOR B (22)** — all with a **mandatory visual segment**; no ILS/LOC published for 22R/22L |
| RFF category | **Level 9** (ICAO Annex 14 scale 1–10) 🟧 verify against widest K Global type planned here |
| Control type | **Radar** — Nice Approach (Nice APP) on the field; **Marseille ACC (LFMM)** en route — see [Europe airspace brief](../../../../airspace/europe.md) (no dedicated LFMM FIR brief exists yet — §18) |
| Elevation class | Sea-level (12 ft) — **not** hot-and-high; reference temperature 29°C is a summer-performance note, not a density-altitude driver |
| Special-airport status | 🟥 **Terrain- and noise-constrained "special" field** — mandatory visual segments on both runway ends, high CFIT risk on the 22 visual approach, ACNUSA noise-infringement exposure — see §5 |
| Customs / PoE | **Yes** — H24 `[SIA France AIP AD 2 LFMN.3]` |
| K Global category | **M** `[VAMSYS mirror 2026-07-26]` |
| K Global base | **No** `[VAMSYS mirror 2026-07-26]` |
| Company preferred alternates | [**LFML**](../lfml/index.md), [**LSGG**](../../switzerland/lsgg/index.md), [**LIMC**](../../italy/limc/index.md) `[VAMSYS mirror 2026-07-26]` |
| Taxi-in / taxi-out (VAMSYS) | **10 min / 12 min** `[VAMSYS mirror 2026-07-26]` |

---

## 2. Validation summary

| Domain | Flag | Note |
|---|---|---|
| Terrain / CFIT | 🟥 | Alpes-Maritimes Prealps rise close north of the coastal plain; the RWY 22 visual approach carries a recognised high CFIT risk, particularly at night (IFALPA). Precise closest-peak bearing/distance not sourced this pass — §18. |
| Runway length vs fleet perf | 🟩 | 2,628 m (04L/22R) and 2,963 m (04R/22L) are non-limiting for the narrow/regional-body types typical of a Category M station; confirm per-leg for any heavier type. |
| Approach availability / minima | 🟧 | ILS/LOC exists only on the 04-end (CAT I only, no autoland); the 22-end has no precision approach at all — every RWY 22 arrival flies a non-precision procedure plus a mandatory visual segment. |
| Airspace / traffic / control | 🟥 | Heavy VFR/helicopter traffic from nearby Cannes-Mandelieu and the Monaco heliport link generates routine TCAS RA exposure (IFALPA); staggered/"inverted" runway-pair operation creates recognised incursion hotspots. |
| Weather / seasonal hazard | 🟥 | Terrain-induced turbulence and downdraught over the 22L/R thresholds in strong westerlies; unexpected windshear over the Var valley on final to 04L/R even in calm wind; sea-breeze reversal can force temporary field closure. |
| Curfew / slots / hours | 🟥 | Noise-class-based night restriction (not a blanket curfew): Chapter 2 / marginal Chapter 3 jets banned landing 23:30–06:15 and departing 23:15–06:00 local — see §6/§12. |
| RFF category vs our types | 🟧 | Level 9 — adequate for A330/A340/777-class types; verify against the widest K Global type ever planned into this field (Level 9 does not cover A380/747-8-class aircraft). |
| Fuel availability | 🟩 | Two into-plane suppliers (SASCA, WF Aviation Services), both available without prior notice across most of the day — see §6/§16. |
| Customs / handling / security | 🟩 | Customs/immigration H24; commercial and business-aviation handling agents both listed in the AIP — see §6/§13. |

---

## 3. Threat & Error Management (TEM)

### 3.1 CFIT / Terrain 🟥
Nice sits at the foot of the Alpes-Maritimes Prealps, which rise close to the coastal plain immediately north and northwest of the field — the airport itself is essentially a narrow shelf of reclaimed land between rising terrain and the sea. The **RWY 22 visual approach carries a recognised high CFIT risk, particularly at night**, per IFALPA guidance, precisely because the non-precision procedure's visual segment requires low-altitude manoeuvring over water close to rising ground. Even on the 04-end, the **Var river valley immediately west of the airport can produce unexpected windshear on final approach — in calm wind conditions, not just strong wind**. At night, a "black hole" effect over the sea can cause spatial disorientation, and city-light background can make the runway itself difficult to distinguish. No sourced closest-peak bearing/distance from the ARP was obtained this pass (the Nice Prealps massif rises well above 1,000 m within a short distance of the coast) — flagged for verification against an obstacle/MSA chart, §18.

### 3.2 Airborne conflict / traffic 🟥
Nice CTR (Class D, surface–3,500 ft AMSL, H24) sits in a corridor with **heavy VFR and helicopter traffic** generated by the proximity of Cannes-Mandelieu airport and the Monaco heliport link — TCAS resolution advisories are a routine expectation, not an edge case (IFALPA). **Nice Approach (Nice APP)** provides CTA/TMA radar service; **Marseille ACC (LFMM)** provides en-route/upper radar and surveillance jointly with Nice APP within the TMA (AIP 20.5). No dedicated Marseille (LFMM) FIR brief exists yet in this Operations Manual — the closest available reference is the general [Europe airspace brief](../../../../airspace/europe.md); see §18.

### 3.3 Runway excursion 🟧
Nice operates its two parallel runways in a **staggered/"inverted" pair** — the runway nearer the terminal (04L/22R) is normally the landing runway while the offset runway (04R/22L) is normally the departure runway, meaning **a departing aircraft crosses the landing runway before reaching its own departure threshold**, rather than the more conventional reverse. The AIP itself states this creates elevated **runway-incursion risk** given short taxi distances from certain stands to the 04L/22R holding points, "despite reinforced phraseology and day/night illuminated markings" (AIP 20.3.1). RWY 04L carries a **displaced threshold** (LDA 2,538 m vs. 2,628 m TORA) — confirm the correct declared distance is used for the assigned intersection/full-length departure. ATC is noted to tolerate **tailwind beyond the ICAO 5 kt recommendation** on the dominant 04-configuration to avoid frequent runway swaps (IFALPA) — brief for a firmer touchdown/braking margin than the raw wind component might suggest.

### 3.4 Weather threat 🟥
Mediterranean climate — mild, wet winters and hot, dry summers. The field's defining local hazards are **terrain/sea-breeze interactions rather than a single dominant regional wind**: marked **downdraught over the 22L/R thresholds in strong westerly wind**; **windshear over the Var valley on final to 04L/R** even in otherwise calm conditions; **sea haze** with S/SE winds; and a **sea-breeze reversal** that can produce a tailwind at both runway ends simultaneously, occasionally forcing a **temporary field closure** (IFALPA). The regional **Mistral** (a strong northwesterly wind) is a recognised Mediterranean-coast phenomenon, but its core impact zone is the Rhône corridor/Marseille area further west — at Nice it is a secondary, gustier influence rather than the primary local wind hazard. **Bird hazard is present year-round, with peaks in spring and autumn.** See §14.

### 3.5 Operational considerations 🟥
Plan around four durable constraints: (1) **noise-abatement enforcement is unusually strict** — straight-in ILS/RNP approaches on either runway end are reserved for when weather genuinely requires them, and flying one while the indirect/visual procedure is in force triggers an automatic review that can lead to an ACNUSA fine of up to €40,000 (DGAC); (2) **no de-icing service is provided at LFMN** (AIP AD 2.3 §11) — rare need given the Mediterranean climate, but zero capability exists if conditions ever require it; (3) the field has **no CAT II/III or autoland capability at all** — both LOC 04L and LOC 04R are explicitly noted as not permitting CAT II/CAT III training or automatic landing, so **the field is CAT I-only**; and (4) IFALPA specifically recommends **extra holding fuel in westerly wind conditions since the field may close if weather minimums are not met**, and states NCE **should not be planned as an alternate unless the crew has prior experience of the airport**. RFF is Level 9 (verify against our widest type); the open items in §18 are mostly currency/administrative confirmations rather than newly-discovered safety gaps.

---

## 4. Cautions & Warnings

- **No CAT II/III or autoland capability** — LFMN is a CAT I-only field; both LOC 04L and LOC 04R are AIP-noted as not supporting CAT II/III training or automatic landing.
- **RWY 22 visual approach carries a recognised high CFIT risk, especially at night** — extreme vigilance required per IFALPA guidance.
- **No de-icing service is provided at the airport** — if freezing conditions are ever encountered, there is no dispatched capability to manage them.
- **Straight-in ILS/RNP approaches are noise-abatement-restricted** — use only when weather genuinely requires it; flying one when the indirect procedure is in force triggers an automatic infringement review (fine risk up to €40,000).
- **Staggered/"inverted" runway-pair operation** — a departure crosses the landing runway before its own threshold; AIP-flagged runway-incursion risk given short stand-to-holding-point distances.
- **Sea-breeze reversal can produce a tailwind at both runway ends simultaneously**, occasionally forcing a temporary field closure — carry extra holding fuel in westerly wind, per IFALPA.
- **RWY 04L has a displaced threshold** (LDA 2,538 m vs. 2,628 m TORA) — do not assume full-length LDA.
- **Heavy VFR/helicopter traffic** near Cannes-Mandelieu and the Monaco heliport corridor — TCAS RAs are a routine expectation.
- **Night "black hole" effect over the sea** and city-light background can make the runway difficult to distinguish visually at night.
- IFALPA: **do not plan LFMN as an alternate unless the crew has prior experience of the airport and its restrictions.**

---

## 5. Aerodrome category, restrictions & crew qualification

- **Special-airport / category:** Not a formally AIP-categorised "special airport," but widely treated across the industry as requiring elevated crew familiarity given the terrain-constrained mandatory-visual-segment approaches on both runway ends. 🟧 Not confirmed as a formal K Global crew-qualification-gate policy this pass — see §18.
- **Crew-qualification gate:** IFALPA strongly recommends simulator training before a crew's first flight into NCE; absent that, extensive familiarisation with the surrounding terrain/approach environment is described as essential. 🟧
- **Operating restrictions / bans:** Straight-in ILS/RNP approaches on either end are reserved for weather-required cases only (noise-abatement enforcement, §12). Training flights above 5.7 t MTOW are prohibited outright; training flights at or below 5.7 t MTOW are prohibited daily between 1100–1300 local (AIP 20.4.1). 🟥
- **Overflight / entry / permits:** Standard Schengen/EU international arrival; no special state permit required. 🟩
- **Operations notes:** ATS provided H24 by **Nice Approach (Nice APP)** for the Nice CTA/TMA and **Nice Tower** on the field; **Marseille ACC (LFMM)** shares radar/surveillance/vectoring duties with Nice APP in the TMA (AIP 20.5). Airport operator — **Aéroports de la Côte d'Azur (SA ACA)**.

---

## 6. General / hours / services

| Item | Value | Flag |
|---|---|---|
| ATS hours | H24 | 🟩 |
| AD operating hours | H24 nominally; effective night restriction below | 🟥 |
| Night / curfew restrictions | Chapter 2 / marginal Chapter 3 (<13 EPNdB cumulative margin) jets banned **landing 23:30–06:15** and **departing 23:15–06:00** local, per the 2 March 2010 ministerial order; infringement risk to a €40,000 fine via ACNUSA | 🟥 |
| RFF category | **Level 9** | 🟧 |
| Fuel | Jet A-1 — **SASCA** (no prior notice 0400–2100 local) and **WF Aviation Services** (no prior notice 0400–2200 local); outside these hours, on-request 1 hr after landing | 🟩 |
| PCN | RWY 04L/22R 77 F/A/W/T · RWY 04R/22L 76 F/B/W/T (bituminous concrete); apron/TWY 60 F/B/W/T | 🟩 |
| Customs | H24 | 🟩 |
| Handling / FBO | Commercial: Air France, Aviapartner, Menzies, Alyzia. Business/private: Aviapartner (Executive), Signature, DC Aviation-G Ops | 🟩 |

---

## 7. Runways & declared distances

| RWY | Dimensions | Surface / PCN | TORA | TODA | ASDA | LDA | Notes |
|---|---|---|---|---|---|---|---|
| 04L | 2,628 × 45 m | Bituminous concrete / PCN 77 F/A/W/T | 2,628 m | 2,778 m | 2,628 m | **2,538 m** | **Displaced threshold** — intersection departures available at TWY B1 (2,207/2,357/2,207 m) and TWY C1 (1,980/2,130/1,980 m); 90 × 45 m Runway Starter Extension upstream of the displaced threshold; RESA 90 × 90 m |
| 22R | 2,628 × 45 m | Bituminous concrete / PCN 77 F/A/W/T | 2,480 m | 2,970 m | 2,480 m | 2,480 m | Declared distances originate at DTHR; declared-distance end is 90 m before the physical runway end; intersections EG (1,758/2,248/1,758 m), F1 (1,505/1,995/1,505 m), G1 (1,926/2,416/1,926 m), H1 (2,341/2,831/2,341 m); RESA 90 × 90 m |
| 04R | 2,963 × 45 m | Bituminous concrete / PCN 76 F/B/W/T | 2,963 m | 3,503 m | 2,963 m | 2,963 m | Rockfill/seawall present at the RESA end (proximity to the Mediterranean coast); intersections A3 (2,473/3,013/2,473 m — **not usable for departure at night**), B3 (2,157/2,697/2,157 m), Q3 (2,858/3,398/2,858 m); RESA 90 × 90 m |
| 22L | 2,963 × 45 m | Bituminous concrete / PCN 76 F/B/W/T | 2,963 m | 3,503 m | 2,963 m | 2,963 m | Intersection EY (2,114/2,654/2,114 m); RESA 90 × 90 m |

*Source: SIA France AIP, AD 2 LFMN.12/13, AIRAC effective 2026-06-11 (retrieved 2026-07-26). All distances in metres. Runway shoulders 15 m each side. The runway system is built substantially on reclaimed land extending into the Mediterranean — ditches/dykes/seawall features are noted in the runway strips near the coastline (AIP 20.3.1).*

---

## 8. Communications

| Service | Callsign | Frequency | Hours | Notes |
|---|---|---|---|---|
| ATIS | Nice (FR/EN) | 129.605 MHz (FR) / 136.580 MHz (EN); D-ATIS via datalink | H24 | Broadcasts DEP/ARR parameters |
| Delivery | Nice Prévol / Nice Delivery | 121.780 MHz | H24 | |
| Ground | Nice Sol / Nice Ground | 121.705 MHz | H24 | Controls ACFT on the ground |
| Tower | Nice Tour / Nice Tower | 118.700 MHz (IFR/VFR aerodrome circuit) · 122.380 MHz (VFR transit SA–EA & helicopters) · 123.150 MHz (auxiliary) | H24 | |
| Approach | Nice Approche / Nice Approach | 120.160 (SW sector) · 120.655 (arrival) · 124.180 (arrival East, sectors NE1/NE2) · 125.580 (auxiliary) · 128.205 (arrival) · 130.830 (departure, sectors ND1/ND2) · 134.475 (arrival West, sectors NO1/NO2) MHz | H24 | Sector-specific — take the assigned frequency |
| FIS | Nice Information | 120.850 (North sector) · 122.925 (South sector) · 124.425 (West sector) MHz | H24 | |
| Centre / FIR | **Marseille ACC (LFMM)** — shares radar surveillance/vectoring with Nice APP in the TMA | Per current AIRAC 🟧 | H24 | No dedicated LFMM FIR brief exists yet in this Operations Manual — see [Europe airspace brief](../../../../airspace/europe.md) and §18 |

*Source: SIA France AIP, AD 2 LFMN.17/18, AIRAC effective 2026-06-11 (retrieved 2026-07-26). LOC 04L/04R frequencies cross-checked against a VATSIM division reference page (network-sim, not regulatory) with matching values — see Sources.*

---

## 9. Navaids

| Aid | Ident | Freq | Hours | Notes |
|---|---|---|---|---|
| DME | NIZ | 112.4 MHz (CH 71X) | H24 | 200 NM (135°–225°) / 150 NM at FL500 |
| NDB | MUS | 428 kHz | H24 | 40 NM range |
| VOR/DME | AZR | 109.65 MHz (CH 33Y) | H24 | 100 NM at FL250 |
| LOC 04R (NA — out of RWY axis) | — | 110.7 MHz | H24 | **Does not permit CAT II/III training or automatic landing** — ILS not in runway axis |
| GP 04R | — | 330.2 MHz | H24 | RDH 52 ft (3° slope) |
| DME 04R | — | CH 44X | H24 | 25 NM at FL250 |
| LOC 04L (I.B.1) | NI | 109.95 MHz | H24 | **Does not permit CAT II/III training or automatic landing** |
| GP 04L | — | 333.65 MHz | H24 | RDH 49 ft (3° slope) |
| DME 04L | — | CH 36Y | H24 | 25 NM at FL250 |

*Source: SIA France AIP, AD 2 LFMN.19, AIRAC effective 2026-06-11 (retrieved 2026-07-26). LOC 04L/04R idents/frequencies cross-checked against VATRUS (VATSIM division reference, network-sim, not regulatory) — matching values.*

---

## 10. Arrival

- **Transition altitude / level:** TA 5,000 ft; transition level calculated by Nice Approach (AIP 20.2).
- **Speed:** Standard 250 KIAS below FL100 (EU/ICAO norm) — confirm no local override on current chart.
- **Preferential runway logic:** The **04-configuration** (arrival 04L / departure 04R) is dominant; ATC tolerates a tailwind component beyond the ICAO 5 kt recommendation to avoid frequent runway-configuration changes (IFALPA). ATIS notification of a configuration change is noted to be sometimes delayed — do not assume the briefed config remains current without confirming.
- **Approaches (names only — verify minima on current AIRAC charts):**

| RWY | Approach | Notes |
|---|---|---|
| 04L / 04R | ILS/LOC (CAT I only) | No CAT II/III or autoland — see §9 |
| 04 | RNP A (preferential non-precision), RNP Y/Z, VOR-DME | Indirect procedures with a visual final-turn segment preferred over straight-in for noise-abatement reasons — see §12 |
| 22R / 22L | RNP D (preferential), RNP Z (AR — on request when RNP D in service), VOR B | **No ILS/LOC published** — mandatory visual segment, non-precision only |

- **STARs (names only — verify current AIRAC):** ABDIL, ABLAK, BIRGO, NISAR, PERUS, TUPOX, XIRBI, BORDI, LONSU, KERIT, OZMIC, SODRI, VEVAR 🟧 (sourced to an IVAO France network-sim reference document, not independently confirmed against the current SIA AIRAC chart — pull the live procedure list at planning).
- **LVP:** The field has **no CAT II/III capability at all** (§9) — treat as CAT I-only for planning; IFALPA specifically flags that the field may close below weather minimums, recommending extra holding fuel in westerly wind.
- **Missed approach watch-items:** Terrain-driven on both ends. The RWY 22 go-around is described as complex — a low-altitude level-off with a rapid turn toward the sea; the RWY 04 missed approach/departure likewise requires a very early turn toward the sea given close-in terrain.

---

## 11. Departure

- **SIDs (names only — fly the charted version):** BADOD, BASIP, BODRU, EPOLO, IRMAR, LANKO, LONSU, OKTET, PERUS, RUBAS, RUBIT, SODRI, TURIL, VAREK 🟧 (sourced to an IVAO France network-sim reference document, not independently confirmed against the current SIA AIRAC chart — pull the live procedure list at planning).
- **RNP / climb-gradient requirements:** Not confirmed in reachable Tier-1 sources this pass. See [`OM E — PBN and RNP Operations`](../../../../../flight-ops/pbn-and-rnp-operations.md). 🟧
- **Take-off minima:** Published per AIP — exact figures not confirmed this pass. 🟧
- **Start-up / push-back:** Standard marshaller/VDGS-assisted entry onto stands; specific documented push-pull towing procedures exist for A380 operations at stands 2B, 17, 52B, 54B and 56B (AIP 20.3.2) — relevant only if a Code F movement is ever planned. A "holding stand" remote-handling procedure also exists (see the airport's CASH sheet).
- **ATC slot / CTOT & clearance:** No IATA slot-coordination level was found in reachable sources for LFMN — treat as unconfirmed rather than assuming Level 1. 🟧
- **De-icing:** **Not provided** (AIP AD 2.3 §11) — no dispatched de-icing capability exists at this airport under any circumstances. 🟥 See [`OM E — Cold Weather Operations`](../../../../../flight-ops/cold-weather-operations.md) for contingency planning if freezing conditions are ever forecast.

---

## 12. Noise & Environmental

- **Noise abatement (NAP):** Indirect/visual-segment procedures are **preferred over straight-in ILS/RNP approaches on both runway ends** for noise-abatement reasons; flying a straight-in approach (ILS or RNP Y/Z on 04) while the indirect procedure is in service triggers an automatic review that can result in an ACNUSA infringement fine of up to **€40,000**. Departures on both 04 and 22 take an **initial turn south over the sea**, applying NADP1 technique up to 3,000 ft; a northbound SID must cross the coastline at or above FL70. The RNP A 04 procedure must not overfly the Cape of Antibes (stay east of a specified radial); the RNP D 22 procedure must not overfly Cape Ferrat or the city of Nice during the visual manoeuvring segment. Visual approaches must not overfly land below 5,000 ft except for safety necessity or ATC clearance.
- **Night noise / dB limits:** Governed by the **2 March 2010 ministerial order** — Chapter 2 aircraft and marginally-compliant Chapter 3 jets (cumulative certified-noise margin <13 EPNdB) are banned from **landing 23:30–06:15** and **departing 23:15–06:00** local. Non-compliance risks an ACNUSA administrative fine of up to €40,000 for a legal entity.
- **Engine run-up restrictions:** Not confirmed in reachable sources — verify locally. 🟧
- **Reverse thrust / idle-reverse policy:** Not confirmed in reachable sources — verify locally. 🟧
- **APU restrictions:** Per the **28 July 2023 ministerial order** — pre-departure APU use limited to 10 minutes prior to TOBT on an equipped stand (30 minutes on a non-equipped stand); post-arrival APU use limited to 5 minutes on an equipped stand, or 15 minutes (MTOW <140 t) / 30 minutes (MTOW ≥140 t) on a non-equipped stand. Parking KILO (business aviation) has its own stricter APU-prohibition/towing regime.

---

## 13. Ground operations

- **Stands for our types:** The field is optimised for narrow-body/regional traffic consistent with a Category M station; documented Code F (A380) push-pull procedures exist at specific stands (2B, 17, 52B, 54B, 56B) but reflect exceptional/charter-driven wide-body movements rather than routine scheduled service. 🟧 Confirm actual stand assignment against the K Global route/fleet plan for this field.
- **Push-back:** Entry onto any stand requires marshaller assistance (plus VDGS guidance where fitted); without a marshaller, the crew must hold on the taxiway/taxilane centreline ahead of the stand lead-in line and request assistance from Ground.
- **Standard taxi routes:** RWY 04L/22R is served by taxiways A1, B1, C1, F1, EG, G1, H1, J1; RWY 04R/22L is served by W3, Q3, A3 (closed for departure at night), B3, EB, EF (exit-only from 04R/22L), EY, HG.
- **Hot spots / tight taxiways:** 🟥 Taxiways north of TWY U carry **reduced separation margins** — speed limited to 17 kt on straight portions and 10 kt on curves, with an over-steering technique recommended for aircraft with wingspan >36 m. TWY U carries oblique green bands to distinguish it from the parallel RWY 04L/22R (a recognised risk of confusion on approach). The **Y/H2 taxiway junction is prohibited for Code D, E and F aircraft**. The AIP explicitly notes that **short taxi distances from certain stands to the RWY 04L/22R holding points generate runway-incursion risk**, given the staggered/"inverted" pair operation described in §3.3.
- **Follow-me:** Availability not confirmed in reachable sources — verify locally. 🟧

---

## 14. Weather & seasonal (durable)

- **Climate / prevailing wind:** Mediterranean climate — mild, wet winters and hot, dry summers; the dominant local wind pattern supports the 04-configuration (see §10).
- **Seasonal hazards:** Terrain-induced turbulence and marked downdraught over the 22L/R thresholds in strong westerly wind; unexpected windshear over the Var valley on final to 04L/R even in calm conditions; sea haze with S/SE winds; a sea-breeze reversal that can produce tailwind at both runway ends and occasionally force a temporary field closure. The regional **Mistral** is a recognised Côte d'Azur-area influence but its core impact zone is the Rhône corridor/Marseille further west — locally it is a secondary, gustier factor rather than the primary hazard driver. **Bird hazard is present year-round, peaking in spring and autumn.**
- **Local effects:** Night "black hole" effect over the sea (spatial disorientation risk) and city-light background reducing runway conspicuity at night are the field's standout local effects, alongside the terrain/sea-breeze interactions above.

> **Live weather — pull at planning (T-2h):** METAR, TAF, TREND, SIGMET/AIRMET. Not stored here.

---

## 15. NOTAMs

> **Pull at planning (T-2h).** Perishable — not stored here. Check: runway/taxiway closures (esp. TWY A3 night closure and the reduced-margin taxiways north of TWY U), navaid U/S, LOC/GP status (04L/04R only), lighting, obstacle/crane, RFF downgrade, GPS/RAIM for RNP procedures, current noise-abatement NOTAM traffic (event-driven restrictions around Cannes Film Festival/Monaco Grand Prix/Cannes Lions/yachting season). Source: official AIS / OFP NOTAM block.

---

## 16. Fuel & alternate planning notes

- **Typical role for us:** **Destination/origin station**, Category M — not a K Global base `[VAMSYS mirror 2026-07-26]`.
- **Nearest suitable alternates:** Company preferred alternates [**LFML**](../lfml/index.md) (Marseille-Provence), [**LSGG**](../../switzerland/lsgg/index.md) (Geneva), [**LIMC**](../../italy/limc/index.md) (Milan Malpensa) `[VAMSYS mirror 2026-07-26]` — confirm suitability, runway/RFF adequacy and current minima per leg. Per IFALPA guidance, LFMN itself should not be planned as an alternate by a crew without prior experience of the field.
- **Fuel-uplift notes:** Jet A-1 via **SASCA** (no prior notice 0400–2100 local, 20–80 m³ trucks, 2,300 L/min) and **WF Aviation Services** (no prior notice 0400–2200 local, 35–45 m³ trucks, 2,500 L/min); outside these hours, on-request 1 hr after landing. See [`OM E — Fuel Policy`](../../../../../flight-ops/fuel-policy.md).
- **Range/perf flags for our fleet:** Field length is non-limiting for narrow-body/regional types typical of this Category M station on either runway pair. See [`OM B — Fleet Capability Matrix`](../../../../../fleet/capability-matrix.md) for type-by-type range/performance reference; cross-check RFF Level 9 against the widest type ever planned into this field. 🟧

---

## 17. Fleet-specific notes (optional)

- LFMN is a Category M destination/origin station, not a hub — see [`OM B — Fleet Capability Matrix`](../../../../../fleet/capability-matrix.md) for type-by-type reference. Documented Code F (A380) stand procedures exist in the AIP (stands 2B, 17, 52B, 54B, 56B) reflecting occasional charter/event-driven wide-body movements (Cannes Film Festival, Monaco Grand Prix, yachting season) rather than routine scheduled operation; no field-length or field-elevation performance penalty applies to the narrow-body/regional types expected on this route for K Global. The operative planning considerations are the CAT I-only approach environment, the strict noise-abatement enforcement regime, and the lack of any de-icing service, rather than aircraft performance.

---

## 18. Open items (🟧 — confirm against AIP / current AIRAC)

- **Magnetic variation** — sourced to the 2025 epoch (3.0°E, annual change +0.116°/yr); not recalculated to the current year.
- **Closest-terrain peak, bearing and distance from the ARP** — not sourced from an obstacle/MSA chart this pass; the Nice Prealps massif rises well above 1,000 m within a short distance of the coast, but no precise figure was obtained.
- **SIDs/STARs (current names)** — sourced to an IVAO France network-sim reference document (AIRAC 2607), not independently confirmed against the current SIA AIRAC chart; pull the live procedure list before use.
- **Take-off minima, engine run-up restriction, reverse-thrust/idle-reverse policy, follow-me availability** — none confirmed in reachable sources.
- **RFF Level 9 vs. the widest K Global type ever planned into this field** — cross-check; Level 9 does not cover A380/747-8-class aircraft.
- **IATA slot-coordination level** — no confirmation found in reachable sources; do not assume Level 1/uncoordinated status without verification.
- **Special-airport/crew-qualification classification** — industry-common practice given the terrain/visual-approach environment, but not confirmed as a formal K Global policy gate this pass.
- **Dedicated Marseille (LFMM) FIR brief** — does not yet exist in this Operations Manual; §3.2/§8 reference the general [Europe airspace brief](../../../../airspace/europe.md) as the closest available substitute pending a dedicated build.
- **Marseille ACC (LFMM) en-route frequencies** — not sourced from the AD 2 LFMN extract (these live in the AIP ENR section, not fetched this pass).

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim material (current-AIRAC charts) informs content but is not listed here.*

- **SIA France eAIP, AD 2 LFMN.1–2.21**, AIRAC cycle effective 2026-06-11 — https://www.sia.aviation-civile.gouv.fr/media/dvd/eAIP_11_JUN_2026/FRANCE/AIRAC-2026-06-11/html/eAIP/FR-AD-2.LFMN-fr-FR.html (retrieved 2026-07-26). *ARP/elevation/mag-var, runway geometry/declared distances/PCN, lighting, communications, navaids, local traffic regulations, snow plan, de-icing status, hours.*
- IFALPA — Safety Bulletin 25SAB01, "Operations at Nice (NCE/LFMN) Airport," 2 September 2025 — https://www.ifalpa.org/wp-content/uploads/2025/12/25sab01-operations-at-nice-airport.pdf (retrieved 2026-07-26). *TEM/terrain/CFIT, approach-procedure structure, ATC/traffic behaviour, holding-fuel and alternate-planning guidance.*
- DGAC / DSNA — "Environmental Briefing Nice-Côte d'Azur" (noise abatement procedures, sourced to the French ministerial orders of 2 March 2010 and 28 July 2023), mirrored via DC Aviation Ground Ops — https://www.dca-gops.com/wp-content/uploads/2023/12/Environmental-briefing-v5.pdf (retrieved 2026-07-26). *Night noise-class restriction hours, APU restrictions, trajectory-compliance/noise-abatement routing detail.*
- OurAirports — https://ourairports.com/airports/LFMN/ (retrieved 2026-07-26). *ARP/elevation cross-check.*
- Wikipedia — "Nice Côte d'Azur Airport" — https://en.wikipedia.org/wiki/Nice_C%C3%B4te_d%27Azur_Airport (retrieved 2026-07-26). *General/history/terminal corroboration; cites the SIA France AIP directly for AD 2 LFMN.*
- Wikipedia — "Nice Prealps" — https://en.wikipedia.org/wiki/Nice_Prealps (retrieved 2026-07-26). *Terrain/massif corroboration.*
- Flight Path Noise — Nice noise map — https://flightpathnoise.com/nice/ (retrieved 2026-07-26). *Public noise/traffic-pattern corroboration — not a regulatory source.*
- IVAO France — "LFMN Nice Côte d'Azur," MANEX Aéroports Civils (AIRAC cycle 2607) — https://wiki.ivao.fr/books/manex-aeroports-civils/page/lfmn-nice-cote-dazur (retrieved 2026-07-26). *Network-sim document, not regulatory — SID/STAR name list, taxiway hot-spot and frequency-sequence cross-check.*
- VATRUS (VATSIM Russian-speaking Division) — LFMN airport page — https://vatrus.info/airport/LFMN?lang=eng (retrieved 2026-07-26). *Network-sim document, not regulatory — LOC 04L/04R frequency cross-check.*

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-26 | Built from SIA France eAIP; K Global fields from live VAMSYS; 4-page pack. |
