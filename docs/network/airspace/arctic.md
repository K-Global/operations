---
title: Arctic (airspace)
---

<span class="kg-eyebrow">OM C · Airspace</span>

# Arctic — airspace brief
**Scope:** High-latitude domestic & polar transit — Iceland → Greenland → Canadian north → western Canada · **FIRs / OCAs covered:** Reykjavik (BIRD, Isavia) incl. Reykjavik CTA · Nuuk FIR / Greenland (BGGL, Naviair) · Canadian Northern Domestic Airspace — Gander Domestic, Edmonton FIR (CZEG) · Northern (NCA) & Arctic (ACA) Control Areas

## 1. Snapshot

| Field | Value |
|---|---|
| FIRs / control authorities | Reykjavik (BIRD, Isavia) + Reykjavik CTA over Greenland upper (>63°30′N) · Nuuk FIR (BGGL, Naviair / Sondrestrom Info) · Canadian NDA — Gander Domestic & Edmonton FIR (CZEG, NAV CANADA) |
| Controlling ATSU(s) & type | Mix of **radar (southern/terminal) and procedural (non-radar) north**; ADS-B/ADS-C surveillance in places. Greenland procedural since BGSF radar ended ~Nov 2025. Edmonton FIR = largest, most active procedural airspace. |
| RVSM | Applicable **FL290–FL410** (NAT HLA upper levels apply over the high-latitude domestic too) |
| Separation standard | NAT HLA upper; Canadian high-level RVSM (TP1820 Designated Airspace Handbook); procedural position-report separation in non-radar north |
| Datalink mandate | CPDLC+ADS-C FANS 1/A per NAT DLM **except north of 80°N** and surveilled VHF corridors (see North Atlantic §4). **ADS-B mandatory for IFR across BIRD FIR.** |
| Primary comms | CPDLC/ADS-C; HF (Reykjavik Radio, Canadian HF) + SELCAL; SATVOICE; **Iridium required north of 80°N**; VHF near terminals |
| Key hazard(s) | Magnetic-compass unreliability / **TRUE-track & grid nav** · space-weather **HF blackout & GNSS degradation** · **fuel-freeze (Jet A-1 −47 °C)** · **Greenland icecap terrain (~10,500 ft)** · sparse, widely-spaced diversions |

## 3. Airspace structure

- **Reykjavik FIR (BIRD) & Reykjavik CTA:** Iceland's FIR is **BIRD**. The **Reykjavik Control Area** combines BIRD with the **upper levels of the Greenland (Nuuk) FIR north of 63°30′N (above FL195)**, spanning roughly **61°N to the North Pole, 76°W to 30°E** — about a quarter of all NAT traffic. Provided by **Isavia ANS** under a 1976 bilateral with the Kingdom of Denmark. Part of **NAT HLA** (FL285–FL420). (exact BI-ENR 2.1 boundary decimals VERIFY on the A_05-2026 page).
- **Nuuk FIR / Greenland (BGGL):** ~4.25 M km², AIP via **Naviair**. **Upper airspace above FL195:** south of 63°30′N controlled by **Gander**; north of 63°30′N controlled by **Reykjavik** (as Reykjavik CTA). **At/above FL55 = Class A controlled; below FL55 = Class G uncontrolled.** Largely **procedural (non-radar)** — **radar service at BGSF/Kangerlussuaq ended ~1 NOV 2025**, procedural separation only thereafter; FIS by **Sondrestrom Information**. - **Canadian Domestic Airspace — SDA vs NDA:** split into **Southern Domestic Airspace (SDA)** and **Northern Domestic Airspace (NDA)**. The boundary runs from the top of Yukon's western boundary, east past Inuvik to 130°W, south to 67°N, then east linking/including Yellowknife, Churchill, Inuvik and Iqaluit, then NE from Iqaluit to 67°N — all Canadian airspace **north of that line is NDA**. (AIP Canada ENR — exact ENR 2 section VERIFY).
  - **NDA is a "standard pressure" region** (29.92/1013.2 set throughout); SDA is an altimeter-setting region.
  - **Class A control-area bases:** **Northern Control Area (NCA) base FL230; Arctic Control Area (ACA) base FL270.** - **Edmonton FIR (CZEG):** Canada's largest FIR and the most active procedural (non-radar) airspace; Edmonton Centre owns the high/low sectors across the Southern, Northern and Arctic Control Areas. Borders **BIRD, Nuuk, Gander Oceanic, Anchorage (PAZA), Winnipeg, Vancouver** — the polar inbound stream hands off **Reykjavik → Nuuk upper → Edmonton**. (radar-vs-procedural boundaries VERIFY AIP Canada ENR 1.6).

## 4. Equipment, approvals & separation

- **RVSM:** FL290–FL410 (NAT HLA / Canadian high-level RVSM per the Designated Airspace Handbook, **TP1820**). RVSM approval required.
- **NAT HLA:** FL285–FL420 over the upper high-latitude domestic where it is part of NAT HLA — NAT HLA approval required (see North Atlantic §4).
- **PBN / RNP:** **RNAV 10 (RNP 10) OR RNP 4** for the HLA/remote portions; **RNP 4 + RCP240/RSP180** for PBCS. Canada is migrating legacy **CMNPS/RNPC** airspace to PBN (RNP-4 / RNP-10 / RNAV-10). Exact current NDA RNP mandate and any fixed Northern/NRR track structure — VERIFY against AIP Canada ENR 2/ENR 4 (22 JAN 2026).
- **TRUE-track reference (NDA) — KEY:** in the **Northern Domestic Airspace, navigation, runway numbering and wind direction are referenced to TRUE north** (SDA uses magnetic). **In NDA all ILS, VOR and NDBs are set to TRUE with 0° declination; all conventional and PBN airways and all terminal procedures are referenced to True.** Reason: the NDA is an **Area of Magnetic Unreliability** — magnetic-compass anomalies near the magnetic/geographic poles give erroneous heading. (Per NAV CANADA "Magnetic to True North" briefing.) - **Practical note:** NAV CANADA's own briefing observes polar operators fly the "Keyhole" in True but "not necessarily in Canadian NDA in True" in practice; a Canada-wide magnetic→true transition is targeted for ~2030. Set the FMS/aircraft to the correct True/Magnetic reference for the airspace.
- **Grid navigation:** used in the **high Arctic** where even True reference is impractical near the pole. Grid is overlaid on a polar-stereographic chart, gyro aligned to a **datum/reference meridian** (commonly Greenwich — "Greenwich Grid"), corrected for convergence and gyro precession. Latitudes **north of ~78°** are treated as high-latitude ops where **grid headings are recommended**. ICAO Annex 4 §7.8.2 permits True or Grid North where magnetic is impractical. - **Datalink / ADS-B:** CPDLC + ADS-C FANS 1/A per the NAT DLM (FL290–FL410), **except north of 80°N** and the surveilled VHF corridors. **ADS-B is mandatory across the entire BIRD FIR for IFR.** North of 80°N **Iridium** SATCOM required.

## 5. Communications

- **CPDLC / ADS-C primary** where equipped; **HF + SATVOICE** elsewhere; VHF near terminals only.
- **HF & SELCAL:** two LRCS, ≥1 HF. **Reykjavik Radio** serves BIRD/Greenland upper; Canadian HF + the NAT radio stations (see North Atlantic §5) cover the oceanic side. Perform a **SELCAL** check after first HF contact. HF is degraded/blacked-out by polar-cap absorption during space-weather events (§11).
- **SATVOICE / Iridium:** second LRCS option; **Iridium mandatory north of 80°N** (Inmarsat does not qualify there).
- **ADS-B:** mandatory for IFR across BIRD FIR; used in Canadian surveilled sectors.
- **Position reporting:** in non-radar high-latitude domestic and Greenland procedural airspace, voice/CPDLC reports at compulsory points (entry, waypoints, exit) — see §10. ADS-C contracts substitute where equipped.

## 6. Routing & levels

- **Principal route structure:** polar inbound from the NAT crossing routes via the Iceland–Greenland corridor / Reykjavik CTA, then across the Canadian NDA (NCA/ACA) into the Edmonton FIR for the western-Canada descent. The filed route is the **SimBrief/current-AIRAC-validated string**; the oceanic portion's track/clearance is detailed in North Atlantic.
- **Free Route Airspace:** Reykjavik domestic operates FRA-style direct routing; Canadian high-level uses a published airway/PBN structure migrating toward PBN. Confirm current FRA/route availability on the day's flight docs.
- **Typical level/flow:** RVSM FL290–FL410; NAT HLA to FL420. Step-climb on weight reduction. NCA Class A base FL230 / ACA base FL270 (all high-level cruise is well inside controlled airspace).

## 7. Terrain, MORA & driftdown

- **Greenland icecap — binding constraint:** the **icecap dome (Summit) is ~3,210–3,216 m (≈10,500–10,550 ft)** elevation; central-icecap grid-MORA is correspondingly high (expect ~11,000–13,000 ft with terrain-clearance buffers). The highest *peak* is **Gunnbjørn Fjeld 3,694 m (12,119 ft)** on the east coast — the highest point in the Arctic. (published per-quadrant grid-MORA VERIFY on Naviair ENR 6 charts).
- **Baffin Island:** Arctic Cordillera / Baffin Mountains peaks **~1,525–2,146 m (≈5,000–7,000 ft)** — relevant near CYFB. - **Driftdown / depressurisation escape:** plan the engine-out / decompression driftdown profile to **clear the central Greenland icecap dome** — this is the limiting terrain on the route. Identify the escape route and the nearest open field (see §8) for each oceanic/icecap segment on the OFP.
- **Grid-MORA:** use grid-MORA on polar-stereographic charts in the high Arctic; magnetic MORA is unreliable near the pole.
- **Cold-temperature altitude corrections:** apply at the cold high-latitude arrival/departure airfields per the airport briefing — extreme cold demands cold-temperature corrections on approach minima.

## 8. Diversion & enroute alternates

**Very sparse and widely spaced.** Plan **ETOPS-equivalent** diversion with explicit fuel/time to the nearest **open** field — note the 2026 Greenland changes (BGBW closure, BGQO replacement with PPR).

| Airfield | ICAO | Sector | Role | Notes |
|---|---|---|---|---|
| Keflavík | **BIKF** | Reykjavik (BIRD) | Primary Iceland gateway / E-side alternate | Full international; primary western-NAT diversion. Brief to build |
| Kangerlussuaq | **BGSF** | Greenland (Nuuk upper / Reykjavik CTA) | **Most reliable Greenland alternate** | 2800 m, stable wx, fewest terrain issues; procedural since radar ended ~Nov 2025. Brief to build |
| Narsarsuaq | **BGBW** | Greenland S | ⚠ **Closing to fixed-wing 17 APR 2026** → heli-only | Difficult fjord approach, NPA only; treat as **unavailable fixed-wing alt**. Brief to build |
| Nuuk | **BGGH** | Nuuk FIR / Reykjavik CTA | Greenland enroute alternate | Jet-capable (2200 m, ILS both ends). From 14 MAY 2026 TMA Class C when APP active. Brief to build |
| Iqaluit | **CYFB** | Canadian NDA (Baffin) | Canadian Arctic alternate | Baffin Island; terrain 5,000–7,000 ft nearby. Brief to build |
| Goose Bay | **CYYR** | Gander Domestic (sub-Arctic) | Western coast-in alternate | Long runway; Canadian Atlantic gateway. Brief to build |
| Yellowknife | **CYZF** | Edmonton FIR / NDA | Western-Arctic alternate | NDA; True-referenced procedures. Brief to build |
| Churchill | **CYYQ** | NDA (Hudson Bay) | Remote sub-Arctic alternate | Sparse-area field. Brief to build |
| Edmonton | **CYEG** | Edmonton FIR (SDA gateway) | Descent/destination-area alternate | Full-service; SDA (magnetic) terminal. Brief to build |

> **2026 Greenland note:** **BGQO Qaqortoq** opens ~16/17 APR 2026 to replace BGBW (1501 m, RNP LNAV/VNAV only, **PPR mandatory & enforced**, AFIS/Class G + RMZ). No brief built yet — if used as an alternate, build one and confirm PPR/hours.

- **ETP / equal-time-point considerations:** the icecap/oceanic no-divert windows drive ETP fuel/time. The limiting decompression ETP is typically over central Greenland (icecap driftdown) — compute on the SimBrief OFP against the nearest *open* field.
- **Fuel-freeze / cold-soak (high-lat):** **Jet A-1 freeze point −47 °C** (Jet A −40 °C). The −47 °C limit is the **in-tank fuel temperature**, not SAT/TAT; on long high-FL polar legs SAT runs **−65 to −70 °C or colder** and bulk fuel cold-soaks over hours. Monitor **tank fuel temperature** vs freeze point; if approaching, **descend to warmer air and/or increase Mach** (raises TAT/ram heating). Confirm the loaded grade (Jet A-1) on the OFP.

## 9. Special-use airspace & overflight

- **Conflict / prohibited / risk zones:** none across the polar/high-latitude domestic transit.
- **Danger / restricted / military areas:** occasional Canadian/Greenland military/range activity by NOTAM — pull live (§11).
- **Overflight-permit / diplomatic considerations:** none for the transit; Greenland (Kingdom of Denmark) and Canadian entry handled at the FIR/airport level.

> **Conflict-zone currency:** Re-check ICAO Conflict Zone Information Repository / state NOTAMs and operator routing policy at planning — durable context, not live clearance.

## 10. Contingency procedures

- **In-flight contingency (NAT Doc 007 Ch.10 / ICAO Doc 4444):** where the route is within NAT HLA the standardised oceanic contingency, weather-deviation and SLOP procedures apply **verbatim as in North Atlantic §10** (revised clearance first; 30°/5 NM offset; 121.5/123.45 broadcast; weather-deviation 300 ft level-change table; SLOP centreline/1/2 NM right only).
- **Non-radar / procedural contingency:** in Greenland procedural airspace and the non-radar Canadian north, maintain **position reports at entry, over/approaching each compulsory waypoint, and at exit** via HF/CPDLC/ADS-C. If unable to obtain a revised clearance, acquire a lateral offset away from the route, apply the contingency level change, broadcast on 121.5 / inter-pilot 123.45, and display lights/TCAS.
- **Comms-failure:** continue per last received/expected clearance and relay via 121.5/123.45; **expect HF outages during space-weather events** — fall back to SATVOICE/CPDLC; north of 80°N rely on Iridium.
- **Weather-deviation:** as §10 (NAT) — request even for small deviations; if no response, deviate stating "WEATHER DEVIATION REQUIRED" and apply the standard offset/level-change.

## 11. Seasonal, environmental & live data

- **Seasonal hazards (durable):**
  - **Space weather — HF blackout & GNSS degradation:** **polar-cap absorption (PCA)** from solar energetic protons penetrates D-region altitudes at high latitude (down to ~60–65° mag lat), the most problematic HF absorption type and long-lived (days). NOAA scale **S3** (≥10 MeV proton flux) degrades/blacks out HF across the polar cap — historically the aviation signal to **avoid/divert polar routing**. High-latitude ionospheric **scintillation** degrades GNSS. Monitor **NOAA SWPC** — HF impacts page, **D-RAP** model, R/S/G scales.
  - **Extreme cold / fuel-freeze:** see §8 (Jet A-1 −47 °C).
  - **Winter darkness, icing, blowing snow** at the high-latitude fields; reduced daylight for visual backup.

> **Pull at planning (T-2h):** enroute NOTAMs, SIGMET/AIRMET, **space-weather (HF/GNSS) advisories — NOAA SWPC S/R/G scales & D-RAP**, volcanic-ash (Iceland — see North Atlantic), and the validated SimBrief route. Not stored here.

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim charts may inform content but are not listed here. Source register: .*

- **Isavia eAIP Iceland — BI-ENR, AIRAC A_05-2026, eff 14 MAY 2026** — Reykjavik FIR/CTA, RVSM/RNP/HLA (ENR 1.8), ADS-B mandate, comms (Reykjavik Radio) — https://eaip.isavia.is/A_05-2026_2026_05_14/ (retrieved 2026-06-26). *HTML JS-rendered — some ENR sub-decimals flagged.*
- **AIP Canada (ICAO) ENR, eff 22 JAN 2026** (NAV CANADA) + **NAV CANADA "Magnetic to True North" briefing** — SDA/NDA division, TRUE-track reference & 0° declination, NCA FL230 / ACA FL270, standard-pressure region, RVSM (TP1820), CMNPS→PBN migration — https://www.navcanada.ca/en/enreng22-january-2026.pdf and https://www.navcanada.ca/en/magnetic-north-vs-true-north.pdf (retrieved 2026-06-26).
- **AIP Greenland — Naviair** — Nuuk FIR (BGGL) structure, 63°30′N control split, Class A ≥FL55, BGSF procedural since ~1 Nov 2025, icecap terrain — https://aim.naviair.dk (retrieved 2026-06-26).
- **ICAO NAT Doc 007 — V.2026-1, applicable 19 MAR 2026** — NAT HLA/RVSM/RNP/datalink/contingency framework over the high-latitude upper airspace (full detail in North Atlantic) — ICAO EUR/NAT NAT Doc 007 PDF (retrieved 2026-06-26).
- **NOAA SWPC** — space-weather HF/GNSS impacts (durable hazard reference) — https://www.spaceweather.gov/impacts/hf-radio-communications ; D-RAP https://www.swpc.noaa.gov/products/d-region-absorption-predictions-d-rap (retrieved 2026-06-26).
