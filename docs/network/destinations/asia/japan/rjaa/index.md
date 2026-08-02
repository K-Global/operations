# RJAA — Tokyo Narita · Airport Briefing

**RJAA / NRT** · Narita, Chiba Prefecture, Japan · Asia
**Version** v0.1 · **Updated** 2026-07-26 · **Status** Draft

> **Read-me:** Planning aid for the sim, not a chart. Static data is drawn from the JCAB AIP Japan (AD 2 RJAA) plus standard public aeronautical data; approaches/SIDs/STARs are listed **by name only or flagged not-yet-confirmed** — fly the charted current-AIRAC version. Live weather/NOTAMs are pulled at planning (§14/§15). Open 🟧 items are listed in §18. Flag legend 🟥 restriction/hazard · 🟧 caution/unverified · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| ARP (lat/long) | N35°45′55″ / E140°23′08″ (35.76528, 140.38556) `[JCAB AIP AD 2 RJAA 2.2]` |
| Field elevation | **135 ft / 41 m AMSL** (reference temperature 31°C, 2018–2022 mean) `[JCAB AIP AD 2 RJAA 2.2]` |
| Mag variation | **8° W (2023 epoch)**, annual change 3′ W `[JCAB AIP AD 2 RJAA 2.2]` 🟧 confirm against current AIRAC |
| Time zone | UTC+9 (JST) — no daylight saving observed |
| Runway(s) | **16R/34L** 4,000 × 60 m (asphalt/concrete, "Runway A") · **16L/34R** 2,500 × 60 m (asphalt/concrete, "Runway B") |
| Preferential runway | Config/wind/noise-dependent; **16R/34L is the only runway with CAT II/III ILS** and carries the late-shoulder-hour single-runway noise restriction (§6/§12) — see §10/§11 |
| Longest LDA | **4,000 m published** (16R and 34L, per AD 2.13 declared-distance table) 🟧 — a 750 m inward threshold displacement on RWY 34L is shown on the AIP aerodrome chart and corroborated by two independent public sources but **not** reflected in the declared-distance table extract used here; treat 34L LDA as possibly reduced to **~3,250 m** pending current-AIRAC confirmation — see §7/§18 |
| Approaches | **ILS CAT II/III on RWY 16R only**; ILS CAT I on 34L, 16L, 34R; VOR/DME available all four ends | 
| RFF category | **CAT 10** (ICAO highest category — A380/B747-8-capable) `[JCAB AIP AD 2 RJAA 2.6]` 🟩 |
| Control type | **Radar** — Narita Tower/Ground/Ramp on the field; **Tokyo Approach/Departure Radar** (JCAB) terminal control; **Tokyo (RJJJ) FIR** en route — see [Tokyo (RJJJ) FIR brief](../../../../airspace/fir/asia/tokyo-rjjj.md) and [Asia airspace general](../../../../airspace/asia.md) |
| Elevation class | Near sea-level (135 ft) — **not** hot-and-high; the operative reliability drivers are the **hard curfew/noise regime** and **single-runway CAT II/III coverage**, not density altitude |
| Special-airport status | 🟥 **Hard night curfew (00:00–06:00 JST) with a stricter single-runway noise-limited shoulder hour (23:00–24:00 JST)**; RESA on two runway ends (16L, 34L) published below ICAO-recommended length — see §5/§6/§12 |
| Customs / PoE | **Yes** — Terminal 1/2/3 international halls; customs/immigration/quarantine desks run **reduced hours, not H24** — see §6 🟧 |
| K Global category | **L** `[VAMSYS mirror 2026-07-26]` 🟩 |
| K Global base | **NO** `[VAMSYS mirror 2026-07-26]` — destination / alternate field within the network, not a company base |
| Company preferred alternates | [**RJTT**](../rjtt/index.md) (Haneda, same metro area), **RJBB** (Kansai/Osaka) `[VAMSYS mirror 2026-07-26]` |
| Taxi-in / taxi-out (VAMSYS) | **18 min / 20 min** `[VAMSYS mirror 2026-07-26]` |

---

## 2. Validation summary

| Domain | Flag | Note |
|---|---|---|
| Terrain / CFIT | 🟩 | Flat Kanto plain; no close-in high terrain relevant to arrival, departure or missed-approach paths. |
| Runway length vs fleet perf | 🟩 | 4,000 m (16R/34L) is ample for any K Global widebody; 2,500 m (16L/34R) is non-limiting for typical arrival/departure weights but is the more constrained of the pair. |
| Approach availability / minima | 🟧 | ILS CAT II/III exists on **one runway direction only (16R)** — the reciprocal (34L) and the second runway (16L/34R) are ILS CAT I only. A low-visibility event with wind favouring 34L removes the field's deepest capability — see §3.4/§10. |
| Airspace / traffic / control | 🟧 | Busy Tokyo-area radar environment (Tokyo Approach/Departure) sharing Kanto-plain airspace with Haneda (RJTT); procedural interaction between the two Tokyo-area majors is a standing feature — see §3.2. |
| Weather / seasonal hazard | 🟥 | Winter Kanto-plain radiation fog/low stratus, and Pacific **typhoon season (Aug–Oct)** bringing strong crosswind/wind-shear risk on the 16/34 runway orientation — see §14. |
| Curfew / slots / hours | 🟥 | **Hard curfew 00:00–06:00 JST**, with a stricter single-runway (16R/34L only), noise-limited shoulder hour 23:00–24:00 JST that also binds delayed flights operating in that window — see §6/§12. |
| RFF category vs our types | 🟩 | CAT 10 — above any of our fleet's requirement. |
| Fuel availability | 🟩 | Jet A-1 confirmed available, fuelling H24 `[JCAB AIP AD 2 RJAA 2.4]`. |
| Customs / handling / security | 🟧 | International PoE confirmed at all three terminals, but customs/immigration/quarantine desks run **published reduced hours** (not H24) — a genuine caveat for an off-hours diversion into RJAA — see §6/§16. |

---

## 3. Threat & Error Management (TEM)

### 3.1 CFIT / Terrain 🟩
RJAA sits at 135 ft AMSL on the flat Kanto plain — there is **no close-in high terrain** relevant to arrival, departure or missed-approach paths. Verify the MSA ring on the current chart as routine practice, but CFIT is not the operative threat at this field.

### 3.2 Airborne conflict / traffic 🟧
Narita shares the greater-Tokyo terminal environment with Haneda (RJTT) under **Tokyo Approach/Departure Radar**, roughly 65 km to the WSW — inbound/outbound flows for the two majors interact within the same Kanto-plain airspace, and the **Tokyo TCA** (a defined control-area layer, published hours ~08:00–19:30 JST) adds a further structural layer during the daytime peak. Expect vectoring and sequencing discipline typical of a dual-major metro area; cross-ref [Tokyo (RJJJ) FIR brief](../../../../airspace/fir/asia/tokyo-rjjj.md).

### 3.3 Runway excursion 🟥
Two of RJAA's four runway ends carry a published **RESA (Runway End Safety Area) shorter than the ICAO-recommended 240 m**: 16L's RESA is published at only **40 m**, and 34L's at **90 m** (16R has 164 m; 34R has 240 m, the only end meeting the full recommendation) `[JCAB AIP AD 2 RJAA 2.12]`. Combined with the **unresolved 750 m displaced-threshold question on 34L** (§7/§18), this makes the 34L/16L runway ends the field's genuine overrun-margin watch item — brief accordingly and do not assume a full-length safety margin beyond the published runway end on those two directions.

### 3.4 Weather threat 🟥
RJAA's defining low-visibility exposure is that **ILS CAT II/III capability exists only on RWY 16R** — the reciprocal 34L and the parallel 16L/34R pair are CAT I only. Winter Kanto-plain radiation fog/low stratus is a recognised regional hazard; if wind at the time favours 34L (or 16L/34R) during a fog event, the field's usable minima jump from CAT II/III to CAT I, a real diversion driver that a three-parallel-CAT-III field like a major European hub would not present. Separately, RJAA sits in the **Pacific typhoon belt (season broadly Aug–Oct)**, bringing strong crosswind and wind-shear exposure on the 16/34 orientation; no RJAA-specific frequency statistic was found — treat as general regional climatology. See §14.

### 3.5 Operational considerations 🟥
Plan around three durable constraints: (1) the **hard night curfew (00:00–06:00 JST)** with no exception outside a genuine in-flight emergency; (2) the **stricter single-runway, noise-limited shoulder hour (23:00–24:00 JST)**, during which only RWY 16R/34L (Runway A) is available and a quantified aircraft-noise-level standard applies — this rule also binds any flight (not only late arrivals) operating in that window; and (3) the **CAT II/III-on-one-runway-direction constraint** above. A long-standing local land-use dispute around the airport's construction (the mid-20th-century Sanrizuka Struggle) is the historical origin of today's noise-mitigation regime and of the airport's still-incomplete third runway/expansion works (ongoing construction, no current NOTAM-level operational impact identified this pass) — background context only, not a live restriction beyond the curfew/noise items already captured above.

---

## 4. Cautions & Warnings

- **CAT II/III ILS exists on RWY 16R only** — a fog event with wind favouring the reciprocal (34L) or the parallel runway (16L/34R) leaves CAT I minima only; build a diversion contingency into any winter/foggy-season plan.
- **Hard curfew 00:00–06:00 JST** — no scheduled movement outside emergency; a **stricter single-runway (16R/34L), noise-limited rule applies 23:00–24:00 JST**, binding both on-time and delayed traffic in that window.
- **RESA shortfall on RWY 16L (40 m) and RWY 34L (90 m)** — both below the ICAO-recommended 240 m; treat these runway ends with a reduced-overrun-margin mindset.
- **RWY 34L declared-distance conflict** — the AIP declared-distance table extract used here shows LDA 4,000 m with no remark, but the AIP aerodrome chart (and two independent public sources) show a 750 m inward threshold displacement — verify current-AIRAC declared distances before planning a 34L landing near max weight.
- **Low-visibility taxi restrictions:** stop-bar lights activate when RVR ≤ 600 m, at which point several taxiways (A3–A8, B1–B7) become unavailable to departures and are not individually ATC-controlled — expect ground delay in low-vis conditions.
- **Wide-body ground-clearance constraints:** a reduced 90 m centreline separation applies for Code F (A380-class) aircraft, and Code F types require 10.5 m wingtip-to-fence clearance on TWY K with mandatory tow at stands D3/N1 — confirm current gate/taxi assignment for any Code F movement.
- **Historical/reputational note:** RJAA's construction (opened 1978) was fiercely contested locally (the Sanrizuka Struggle) and land disputes persist to this day — the direct, still-live consequences are the curfew/noise-abatement regime above and the delayed, still-under-construction third runway; no current access/security impact (identity-check requirements at the terminal ended in 2015).
- Several figures here (mag variation epoch, transition altitude, SID/STAR names) are sourced to a mirrored AIP extract or Japan-wide convention rather than a direct current-AIRAC pull — treat as 🟧 pending cross-check (§18).

---

## 5. Aerodrome category, restrictions & crew qualification

- **Special-airport / category:** Not operator-categorised as a restricted-crew "special airport" in reachable sources; the standing crew-briefing items are the **single-runway CAT II/III constraint** and the **curfew/noise-shoulder-hour regime**. 🟥
- **Crew-qualification gate:** CAT II/III currency required for any low-visibility arrival planned onto RWY 16R; confirm crew/aircraft currency before planning a low-vis arrival, and brief that the reciprocal/parallel runways do not offer the same minima. 🟧
- **Operating restrictions / bans:** Hard curfew 00:00–06:00 JST; single-runway (16R/34L only), quantified-noise-limit rule 23:00–24:00 JST applying to both scheduled and delayed movements (§6/§12); no RNP AR ban or circling restriction found in reachable sources — verify current AIRAC. 🟧
- **Overflight / entry / permits:** Standard international arrival; the historical terminal identity-check regime (in force 1978–2015) has ended — no special permit or entry procedure identified beyond normal international PoE formalities. 🟩
- **Operations notes:** Airport operator — **Narita International Airport Corporation (NAA)**; ANSP — **Japan Civil Aviation Bureau (JCAB)** (Tokyo Approach/Departure Radar; Tokyo (RJJJ) FIR en route). Slow, ongoing third-runway/expansion construction is under way with a currently-slipping completion target beyond FY2028/2029 — monitor NOTAMs for any future construction-related restriction, none identified as currently in force.

---

## 6. General / hours / services

| Item | Value | Flag |
|---|---|---|
| ATS hours | Tower/Ground/Delivery/Ramp/Approach/Departure/ASR all **H24** `[JCAB AIP AD 2 RJAA 2.3]` | 🟩 |
| AD operating hours | AD administration **H24**; scheduled movement window governed by the curfew below | 🟩 |
| Night / curfew restrictions | **No take-off/landing 00:00–06:00 JST**, exception only for genuine in-flight emergency; **only RWY 16R/34L available 23:00–24:00 JST**, subject to a quantified aircraft-noise standard (10 EPNdB below the total permitted level, 2 EPNdB below at each measuring point) that also binds delayed flights operating in that hour `[JCAB AIP AD 2 RJAA 2.20]` | 🟥 |
| RFF category | **CAT 10** `[JCAB AIP AD 2 RJAA 2.6]` | 🟩 |
| Fuel | **Jet A-1**; hydrant and truck refuelling; fuelling **H24** `[JCAB AIP AD 2 RJAA 2.4]` | 🟩 |
| PCN | Runway-specific — see §7; apron concrete published as PCR 1023/R/A/W/T (PCR 975/R/B/W/T at a subset of stands); taxiways mixed asphalt/concrete, strength generally PCR 2073/F/D/X/T with several lower-rated localised segments `[JCAB AIP AD 2 RJAA 2.8]` 🟧 (published as "PCR" in the source extract used — confirm exact PCN nomenclature against current AIRAC) | 🟧 |
| Customs | Customs **06:00–23:00 JST**; Immigration **05:30–24:00 JST** (approx., converted from published UTC hours); Quarantine (human) **06:00–00:30 JST**; Quarantine (animal/plant) **06:00–24:00 JST** `[JCAB AIP AD 2 RJAA 2.3]` — **not H24** | 🟧 |
| Handling / FBO | NAA plus third-party ground handlers/fuel providers (not individually confirmed for a K Global operation) | 🟧 |

---

## 7. Runways & declared distances

| RWY | Dimensions | Surface / PCN | TORA | TODA | ASDA | LDA | Notes |
|---|---|---|---|---|---|---|---|
| 16R | 4,000 × 60 m | Asphalt, PCR 2073/F/D/X/T; grooved 3,900 × 60 m | 4,000 m | 4,000 m | 4,000 m | 4,000 m | RESA 164 × 300 m; ILS CAT II/III (only CAT II/III direction at the field) |
| 34L | 4,000 × 60 m | Asphalt, PCR 2073/F/D/X/T (first 150 m concrete, PCR 1023/R/A/W/T); grooved 3,900 × 60 m | 4,000 m | 4,000 m | 4,000 m | **4,000 m per AD 2.13 table** — 🟧 aerodrome chart + 2 public sources show a 750 m inward threshold displacement (possible actual LDA ~3,250 m); unresolved, verify current AIRAC | RESA only 90 × 300 m (below ICAO-recommended 240 m); ILS CAT I |
| 16L | 2,500 × 60 m | Asphalt, PCR 1462/F/D/X/T (first 440 m concrete, PCR 984/R/A/W/T); grooved full length | 2,500 m | 2,500 m | 2,500 m | 2,500 m | RESA only 40 × 300 m (well below ICAO-recommended 240 m); ILS CAT I |
| 34R | 2,500 × 60 m | Asphalt, PCR 1462/F/D/X/T | 2,500 m | 2,500 m | 2,500 m | 2,500 m | RESA 240 m × (120–300 m) — the one end meeting the full ICAO recommendation; ILS CAT I |

*Source: JCAB AIP Japan, AD 2 RJAA 2.12/2.13 (mirrored public extract retrieved 2026-07-26). The 750 m displaced-threshold figure for RWY 34L is shown on the official AIP aerodrome chart (AD 2.24.1) and corroborated by OurAirports and a Jeppesen chart reference, but the AD 2.13 declared-distance table text extracted for this build shows no displacement remark for 34L — flagged as an unresolved tier-1-vs-tier-1-mirror conflict, see §18. All distances in metres.*

---

## 8. Communications

| Service | Callsign | Frequency | Hours | Notes |
|---|---|---|---|---|
| ATIS | Narita ATIS | 128.25 | H24 | |
| Delivery | Narita Delivery | 121.90 (primary) / 121.65 | H24 | |
| Ground | Narita Ground | 121.95 (primary) / 121.85 | H24 | |
| Ramp | Narita Ramp Control | 121.60 / 121.75 / 118.15 / 121.70 | H24 | Apron/ramp taxi guidance |
| Tower | Narita Tower | 118.20 (primary) / 118.35 / 122.70 / 126.20 / 236.80; emergency 121.50/243.00 | H24 | |
| Approach | Tokyo Approach | 124.40 (primary) / 121.275 / 125.20 / 125.80 / 127.70 / 225.65; emergency 121.50/243.00 | H24 | |
| Departure | Tokyo Departure | 124.20 (primary) / 119.60 / 120.60 / 125.525 / 127.50 | H24 | |
| Radar (ASR) | Tokyo Radar | 120.20 | H24 | |
| Tokyo TCA | Tokyo TCA | 119.45 / 246.10 | ~08:00–19:30 JST (published 2300–1030 UTC) | Structural daytime control-area layer over the Kanto plain |
| Centre / FIR | Tokyo ACC (RJJJ) | Per current AIRAC | H24 | See [Tokyo (RJJJ) FIR brief](../../../../airspace/fir/asia/tokyo-rjjj.md) |

*Source: JCAB AIP Japan, AD 2 RJAA 2.18 (mirrored extract retrieved 2026-07-26), cross-checked against OurAirports and SkyVector public frequency listings (closely matching). Treat as 🟧 pending a live-AIRAC cross-check.*

---

## 9. Navaids

| Aid | Ident | Freq | Hours | Notes |
|---|---|---|---|---|
| VOR/DME | NRE (Narita) | 117.9 / CH-126X | H24 | On-field VOR/DME |
| ILS/DME 16R | IKF | LOC 111.5 / GP 332.9 / DME CH-52X | H24 | **CAT II/III** — the field's only CAT II/III direction |
| ILS/DME 34L | IYQ | LOC 111.9 / GP 331.1 / DME CH-56X | H24 | CAT I |
| ILS/DME 16L | ITM | LOC 110.7 / GP 330.2 / DME CH-44X | H24 | CAT I |
| ILS/DME 34R | ITJ | LOC 110.9 / GP 330.8 / DME CH-46X | H24 | CAT I |
| DME | SND | CH-87X | H24 | Area DME |
| SBAS | MSAS | 1575.42 MHz | H24 (satellite) | Japan's satellite-based augmentation system; relevant to RNAV(GNSS)/RNP approach availability — confirm current procedure list |

*All idents/frequencies sourced to the JCAB AIP AD 2 RJAA mirrored extract (2.19), retrieved 2026-07-26; cross-checked against OurAirports/SkyVector navaid listings.*

---

## 10. Arrival

- **Transition altitude / level:** **TA 14,000 ft / TL FL140** — the Japan-wide standard value; not independently confirmed from a primary RJAA-specific table in this pass. 🟧
- **Speed:** Standard 250 KIAS below FL100 (ICAO norm) — confirm no local override on current chart.
- **Preferential runway logic:** Wind/traffic/noise-dependent; **RWY 16R/34L (Runway A) is the only pair certified for CAT II/III** and is the sole runway usable during the 23:00–24:00 JST noise-limited shoulder hour — expect it to be preferentially assigned in low-visibility or late-evening conditions. RWY 16L/34R (Runway B) supplements capacity in good weather/daytime.
- **Approaches (names only — verify minima on current AIRAC charts):**

| RWY | Approach | Notes |
|---|---|---|
| 16R | ILS Z RWY 16R (CAT II/III); VOR/DME RWY 16R | Deepest low-vis capability at the field |
| 34L | ILS RWY 34L (CAT I); VOR/DME RWY 34L | Reciprocal — CAT I only |
| 16L | ILS Z RWY 16L (CAT I); VOR/DME RWY 16L | |
| 34R | ILS Z RWY 34R (CAT I); VOR/DME RWY 34R | |

- **STARs (names only):** Not confirmed in reachable research pass — pull the current-AIRAC STAR list at planning. 🟧
- **LVP:** CAT II/III procedures apply on RWY 16R per winter Kanto-plain fog/low-stratus risk (§14); exact RVR/trigger figures not confirmed this pass. 🟧
- **Missed approach watch-items:** Terrain is not the driver (flat plain); the operative missed-approach concern is re-sequencing within the shared Tokyo-area (RJAA/RJTT) radar environment, and — if the miss follows a 16R low-vis approach — awareness that the reciprocal/parallel runway does not offer the same CAT II/III capability for a subsequent attempt.

---

## 11. Departure

- **SIDs (names only — fly the charted version):** Not confirmed in reachable research pass — pull the current-AIRAC SID list at planning. 🟧
- **RNP / climb-gradient requirements:** Not confirmed in reachable sources this pass; MSAS (Japan's SBAS) supports satellite-based approach/departure procedures generally. See [`OM E — PBN and RNP Operations`](../../../../../flight-ops/pbn-and-rnp-operations.md). 🟧
- **Take-off minima:** Published per AIP — exact figures not confirmed this pass. 🟧
- **Start-up / push-back:** Ramp/push-back coordinated via **Narita Ramp Control** (121.60/121.75/118.15/121.70); confirm cross-bleed/APU notification procedure locally. 🟧
- **ATC slot / CTOT & clearance:** No IATA slot-coordination level confirmed in reachable sources; the operative capacity constraint at RJAA is the annual movement cap/curfew regime rather than a EUROCONTROL-style CTOT program. 🟧
- **De-icing:** Not independently confirmed as to pad location/provisioning; Kanto-plain winters bring an occasional snow/de-icing requirement — treat as seasonal, see [`OM E — Cold Weather Operations`](../../../../../flight-ops/cold-weather-operations.md). 🟧

---

## 12. Noise & Environmental

- **Noise abatement (NAP):** RJAA's noise regime centres on the **curfew (00:00–06:00 JST)** and the **single-runway, quantified-noise-limit shoulder hour (23:00–24:00 JST, RWY 16R/34L only)** — see §6. Specific SID/route-level noise-abatement tracks were not confirmed in reachable sources this pass. 🟧
- **Night noise / dB limits:** During the 23:00–24:00 JST shoulder hour, aircraft noise must be **at least 10 EPNdB below the total permitted noise level, and 2 EPNdB below at each individual measuring point** — a quantified, published standard, applying to both on-time and delayed movements in that window `[JCAB AIP AD 2 RJAA 2.20]`.
- **Engine run-up restrictions:** Not confirmed in reachable sources — verify locally. 🟧
- **Reverse thrust / idle-reverse policy:** Not confirmed in reachable sources — verify locally. 🟧

---

## 13. Ground operations

- **Stands for our types:** Code E/F (widebody, including A380-class) stands exist across the terminal complex; exact gate/stand assignment for a company outside the field's established carrier groupings is not confirmed. 🟧 | 🟧
- **Push-back:** Coordinated via Narita Ramp Control; mandatory-vs-self-manoeuvre policy for Code E/F stands not confirmed. 🟧
- **Standard taxi routes:** Confirm with Ground/Ramp on the day.
- **Hot spots / tight taxiways:** 🟥 Taxiways **A3–A8 and B1–B7** are not individually ATC-controlled and become **unavailable to departures whenever stop-bar lights are active (RVR ≤ 600 m)** — expect ground delay in low-vis conditions. Separately, **Code F (A380-class) aircraft** operate under a reduced 90 m taxiway-centreline separation, and require **10.5 m wingtip-to-fence clearance on TWY K** with **mandatory tow at stands D3/N1** `[JCAB AIP AD 2 RJAA 2.20]`.
- **Follow-me:** Availability not confirmed in reachable source — verify locally. 🟧

---

## 14. Weather & seasonal (durable)

- **Climate / prevailing wind:** Humid subtropical Kanto-plain climate; runway orientation 16/34 suggests a north-northwest/south-southeast prevailing-wind design axis — confirm current wind-rose data locally.
- **Seasonal hazards:** **Winter radiation fog/low stratus** over the Kanto plain is the field's recognised low-visibility hazard — the direct reason CAT II/III infrastructure exists on RWY 16R. **Pacific typhoon season (broadly Aug–Oct)** brings the risk of strong crosswind, gusts and wind-shear on the 16/34 orientation; no RJAA-specific frequency statistic was found — general regional climatology. Occasional winter snow can require de-icing.
- **Local effects:** No notable terrain/sea-breeze effect beyond standard flat-plain climatology; the field is roughly 60 km inland from Tokyo Bay.

> **Live weather — pull at planning (T-2h):** METAR, TAF, TREND, SIGMET/AIRMET, typhoon-track advisories in season. Not stored here.

---

## 15. NOTAMs

> **Pull at planning (T-2h).** Perishable — not stored here. Check: runway/taxiway closures (esp. any construction-related NOTAM tied to the ongoing third-runway/expansion works), navaid U/S, CAT II/III equipment status on RWY 16R, lighting, obstacle/crane, RFF downgrade, GPS/RAIM for RNP/SBAS procedures. Source: official AIS / OFP NOTAM block.

---

## 16. Fuel & alternate planning notes

- **Typical role for us:** **Destination / alternate field** — RJAA is not a K Global base; it functions as an international destination and as a suitable alternate for other Tokyo-area company operations. `[VAMSYS mirror 2026-07-26]`
- **Nearest suitable alternates:** Company preferred alternates [**RJTT**](../rjtt/index.md) (Haneda, same Greater Tokyo metro area, approx. 65 km WSW) and **RJBB** (Kansai/Osaka, approx. 400 km WSW) `[VAMSYS mirror 2026-07-26]` — confirm suitability, runway/RFF adequacy and current minima per leg. Distances are approximate, not AIP-sourced. 🟧
- **Fuel-uplift notes:** Jet A-1 confirmed available, fuelling H24 `[JCAB AIP AD 2 RJAA 2.4]`. See [`OM E — Fuel Policy`](../../../../../flight-ops/fuel-policy.md).
- **Range/perf flags for our fleet:** Field length/strength non-limiting for any K Global type on RWY 16R/34L (4,000 m); RWY 16L/34R (2,500 m) is the more constrained pair — confirm against type performance for a max-weight diversion. See [`OM B — Fleet Capability Matrix`](../../../../../fleet/capability-matrix.md).
- **Off-hours diversion caveat:** Customs/immigration/quarantine desks run **published reduced hours, not H24** (§6) — a late-night unplanned diversion into RJAA outside those hours carries a genuine passenger-processing caveat distinct from the curfew itself. 🟧

---

## 17. Fleet-specific notes (optional)

- No field-elevation or field-length performance penalty identified for any K Global type on RWY 16R/34L. The one fleet-relevant consideration is **Code F (A380-class) ground-movement constraints** (§13) — reduced taxiway centreline separation and mandatory tow at specific stands — relevant only if a Code F type is dispatched here. See [`OM B — Fleet Capability Matrix`](../../../../../fleet/capability-matrix.md) and [`OM B — Fleet Index`](../../../../../fleet/index.md).

---

## 18. Open items (🟧 — confirm against AIP / current AIRAC)

- **RWY 34L declared distance / displaced threshold** — the AD 2.13 table extract used shows LDA 4,000 m with no remark, while the AIP aerodrome chart and two independent public sources (OurAirports, a Jeppesen chart reference) show a 750 m inward threshold displacement; unresolved this pass — verify current-AIRAC declared distances before any 34L landing near max weight.
- **RESA shortfall on RWY 16L (40 m) and RWY 34L (90 m)** — confirmed from the AIP physical-characteristics table; below the ICAO-recommended 240 m; current-cycle status not independently re-verified.
- **Magnetic variation** — sourced to a 2023-epoch mirrored extract; not independently re-confirmed against the current AIRAC cycle.
- **Transition altitude/level (14,000 ft / FL140)** — Japan-wide conventional value; not confirmed from a primary RJAA-specific table this pass.
- **SIDs/STARs (current names)** — not obtained in this research pass; pull the live current-AIRAC procedure list before use.
- **PCN nomenclature** — the source extract used publishes pavement strength as "PCR"; confirm this maps directly to standard ICAO PCN before quoting to a non-Japan-familiar crew.
- **Take-off minima, engine run-up restriction, reverse-thrust/idle-reverse policy, follow-me availability, push-back mandatory-vs-self-manoeuvre policy, de-icing pad locations** — none confirmed in reachable sources.
- **Ground handling agent(s) and specific stand/terminal assignment for a K Global operation** — not confirmed.
- **CTOT/flow-control regime specifics** — no IATA slot-coordination level confirmed; the airport's own annual-movement-cap/curfew regime appears to be the operative capacity constraint instead.
- **Third-runway/expansion construction** — ongoing, target completion has slipped beyond FY2028/2029 per public reporting; no current NOTAM-level operational restriction identified this pass, but the programme should be re-checked at the next update cycle.
- **VATSIM cross-check** — VATSIM Japan Division (VATJPN) publishes SOPs for the Tokyo-area control positions covering RJAA (Tokyo ACA sector documentation, most recently updated 2026-07-09) via its Controller Resource Center; general orientation cross-checked, but no RJAA-specific published pilot briefing/SOP document was found distinct from the ATC SOP set — treat as a partial cross-check only.

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim material (current-AIRAC charts) informs content but is not listed here.*

- **Civil Aviation Bureau, Japan (JCAB) — AIP Japan, AD 2 RJAA** (mirrored full-text extract) — https://nagodede.github.io/aip/japan/documents/RJAA_full.pdf (retrieved 2026-07-26). *ARP/elevation, mag variation, ATS/customs/quarantine hours, RFF category, runway physical characteristics/PCN/RESA, declared distances, communications, navaids, curfew/noise-shoulder-hour text, fuel, taxiway ground-movement cautions.* The official JCAB AIS portal (aisjapan.mlit.go.jp) requires account registration; this publicly reachable mirror was used instead — treat exact current-cycle figures as needing a live-AIRAC cross-check.
- Civil Aviation Bureau, Japan — AIP Japan, Aerodrome Chart AD 2.24.1 RJAA (mirrored) — https://opennav.com/pdf/RJAA/JP-AD-2.24.1-RJAA-en-JP.pdf (retrieved 2026-07-26). *RWY 34L 750 m displaced-threshold depiction; PAPI/MEHT figures; ILS localizer idents/frequencies; magnetic variation plate note (7°W 2006 + annual change, an older cycle than the AD-2 text extract's 8°W 2023 figure — both retained, flagged as a cross-cycle inconsistency.)*
- OurAirports — https://ourairports.com/airports/RJAA/ and /runways.html and /frequencies.html (retrieved 2026-07-26). *Runway/displaced-threshold/frequency cross-check.*
- SkyVector — https://skyvector.com/airport/RJAA/Narita-International-Airport (retrieved 2026-07-26). *Coordinates, runway/navaid/frequency cross-check.*
- Wikipedia — "Narita International Airport" — https://en.wikipedia.org/wiki/Narita_International_Airport (retrieved 2026-07-26). *History (Sanrizuka Struggle), runway/terminal development timeline, curfew infobox figure (00:00–06:00), third-runway masterplan.*
- Narita International Airport Corporation — "Capacity Enhancement of Narita Airport: Relaxation of restrictions on night flights" — https://www.narita-kinoukyouka.jp/en/mitigation.html (retrieved 2026-07-26). *Operator-published operating-hours phasing (06:00–24:00 core, flexible-operation shoulder window), noise-mitigation rationale.*
- The Japan Times — "Opening of third runway at Narita Airport to be delayed due to land issues," 2026-03-31 — https://www.japantimes.co.jp/news/2026/03/31/japan/narita-airport-third-runway-delay/ (retrieved 2026-07-26). *Third-runway construction/land-acquisition status.*
- VATSIM Japan Division (VATJPN) — Controller Resource Center — https://vatjpn.org/document/crc (retrieved 2026-07-26). *Network-sim cross-check — Tokyo-area ATC SOP documentation covering RJAA; not regulatory.*

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-26 | Built from national AIP; K Global fields from live VAMSYS; 4-page pack. |
