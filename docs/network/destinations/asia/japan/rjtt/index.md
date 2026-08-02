# RJTT — Tokyo Haneda · Airport Briefing

**RJTT / HND** · Ota City, Tokyo, Japan · Asia
**Version** v0.1 · **Updated** 2026-07-26 · **Status** Draft

> **Read-me:** Planning aid for the sim, not a chart. Static data is drawn from the JCAB AIP Japan (AD 2 RJTT) plus corroborating public aeronautical/operational sources; approaches/SIDs/STARs are listed **by name only or flagged not-yet-confirmed** — fly the charted current-AIRAC version. Live weather/NOTAMs are pulled at planning (§14/§15). Open 🟧 items are listed in §18. Flag legend 🟥 restriction/hazard · 🟧 caution/unverified · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| ARP (lat/long) | 35°33′12″N / 139°46′52″E (35.5533, 139.7811) — 301°/2.3 km from RWY34R THR `[JCAB AIP AD 2 RJTT 2.2]` |
| Field elevation | **21 ft AMSL** (reference temperature 31°C, 2004–2008 mean); THR elevations range 16.4–54.7 ft across the eight runway ends |
| Mag variation | 8°W (2021), annual change 4.2′W |
| Time zone | UTC+9 (JST) — no daylight-saving observed |
| Runway(s) | **Four runways in two parallel pairs, over Tokyo Bay/reclaimed land** — **A-Runway 16R/34L** 3,000×60 m · **B-Runway 04/22** 2,500×60 m · **C-Runway 16L/34R** 3,360×60 m · **D-Runway 05/23** 2,500×60 m (hybrid reclaimed-land/pile-supported structure spanning the Tama River estuary) |
| Preferential runway | **Wind- and noise-driven 4-runway/2-configuration system** — **North Wind (~60% of the year):** land 34L/34R, depart 34R/05 · **South Wind (~40%):** land 22/23 (LDA/ILS), depart 16L/16R — see §3.2/§10/§11 |
| Longest LDA | 3,000 m (RWY 34R and RWY 34L) |
| Approaches | **ILS** (16L, 34R, 16R, 34L, 22, 23) · **LDA** (22, 23 — offset localizer toward Chiba) · **RNP** (16L, 16R — noise-reduction) · **GBAS** (ident RJTT, 🟧 hours 1400–2100 UTC only, not H24) · **CVA** (Charted Visual, independent parallel to A/C runways). **No published approach to RWY 04 or RWY 05**; RWY 05 is additionally **not usable for landing** (declared-distance note, §7) |
| RFF category | **CAT 10** (ICAO highest — A380-capable) 🟩 |
| Control type | **Radar** — Tokyo Approach/Radar/Departure (JCAB) off the field; Tokyo Tower/Ground/Delivery on the field; **Tokyo ACC** within the Fukuoka FIR (RJJJ) en route — see [Tokyo (RJJJ) FIR brief](../../../../airspace/fir/asia/tokyo-rjjj.md) |
| Elevation class | Sea-level (21 ft) — **not** hot-and-high; the defining performance/complexity driver is the **noise- and wind-driven 4-runway configuration system** and the runway-specific declared-distance asymmetry (§7), not density altitude |
| Special-airport status | 🟥 **RNAV1 and RNAV5 certification are mandatory for all operations** (uncertified aircraft are prohibited from operating here); a genuinely complex 4-runway/2-configuration noise-driven traffic system; an **A380 daytime-operation prohibition**; the international terminal (T3) taxi routing **crosses the A-Runway** — see §5 |
| Customs / PoE | **Yes** — H24 in Terminal 3 and the international area of Terminal 2; Terminal 1 and the domestic areas of Terminal 2 operate 05:00–24:00 local |
| K Global category | **L** `[VAMSYS mirror 2026-07-26]` 🟩 |
| K Global base | **YES — home/base station** `[VAMSYS mirror 2026-07-26]` 🟩 |
| Company preferred alternates | **RJAA** (Narita) and **RJGG** (Chubu Centrair, Nagoya) `[VAMSYS mirror 2026-07-26]` |
| Taxi-in / taxi-out (VAMSYS) | **15 min / 18 min** `[VAMSYS mirror 2026-07-26]` |

---

## 2. Validation summary

| Domain | Flag | Note |
|---|---|---|
| Terrain / CFIT | 🟩 | Flat reclaimed-land/Tokyo Bay site at 21 ft; no close-in high terrain. Mt Fuji and the Japanese Alps sit well to the west, relevant to the wider Kanto/Fukuoka FIR picture, not to RJTT's own low-level, over-water approach/departure paths. |
| Runway length vs fleet perf | 🟩 | C-Runway (3,360 m) and A-Runway (3,000 m) are ample for any K Global widebody; the shorter B/D pair (2,500 m) and the runway-specific displaced-threshold LDAs (§7) are non-limiting for scheduled operations but must be briefed per assigned runway. |
| Approach availability / minima | 🟧 | A genuinely deep approach set — ILS on six runway ends plus LDA, noise-reduction RNP, GBAS and a Charted Visual Approach — but ILS sub-category (II/III) is not confirmed from a primary table, and GBAS service hours are restricted (1400–2100 UTC only), not H24. |
| Airspace / traffic / control | 🟥 | One of the busiest and structurally most complex single-airport traffic environments in the network — a 4-runway, 2-configuration, wind-driven system with documented airborne/ground hazard-crossing points; see §3.2. |
| Weather / seasonal hazard | 🟥 | Tokyo Bay sea fog (especially winter mornings), the Pacific typhoon season, and winter jet-stream/mechanical turbulence in strong-wind configurations are the field's recurring hazards. |
| Curfew / slots / hours | 🟥 | No blanket curfew (Terminal 3 and the international area of Terminal 2 run H24), but a hard **23:00–05:55 JST night-mode** confines routing to over-water Tokyo Bay tracks on C/D runways only, domestic slots are scarce and reallocated every five years, and the **A380 is prohibited from daytime operation**. |
| RFF category vs our types | 🟩 | CAT 10 — above any K Global fleet requirement. |
| Fuel availability | 🟩 | JET A-1, H24, hydrant and truck refuelling, no stated capacity limitation per the primary AIP. |
| Customs / handling / security | 🟧 | H24 confirmed for Terminal 3/international operations; de-icing is listed **"Nil"** in the primary AIP facilities table, yet tier-4 operational sources report Type I/IV de-icing capability in season — a genuine discrepancy, flagged for local confirmation (§9/§16). |

---

## 3. Threat & Error Management (TEM)

### 3.1 CFIT / Terrain 🟩
RJTT sits at 21 ft AMSL on reclaimed land and pile-supported structure in Tokyo Bay — there is **no close-in high terrain** relevant to any arrival, departure or missed-approach path. Mt Fuji (12,388 ft) and the Japanese Alps (peaks ~10,000 ft) lie well to the west and are a defining feature of the wider Fukuoka FIR (RJJJ) picture — see the [Tokyo (RJJJ) FIR brief](../../../../airspace/fir/asia/tokyo-rjjj.md) §8 — but they do not bear on RJTT's own low-level, over-water tracks. Verify the MSA ring on the current chart as routine practice; CFIT is not the operative threat here.

### 3.2 Airborne conflict / traffic 🟥
RJTT operates **four runways in two parallel pairs (A 16R/34L, B 04/22, C 16L/34R, D 05/23)** under a wind-driven configuration system that switches the entire arrival/departure/noise picture twice a year in proportion: **North Wind (~60% of the year)** — land on 34L/34R, depart from 34R and 05; simultaneous arrivals to both parallels are permitted, but **simultaneous C/D-runway departures are not**, because their flight paths conflict. **South Wind (~40%)** — land on 22/23 (via LDA primarily, ILS only in poor weather for noise-abatement reasons), depart from 16L/16R; simultaneous B/D-runway arrivals **are** conducted using the LDA approach's built-in 1,000 ft vertical separation between the crossing final tracks, but departures from the A- and C-Runways are suspended while an aircraft is inbound to the D-Runway. JCAB's own operational-procedures material documents named hazard-crossing points for each wind state — an arrival/departure conflict, a departure/departure conflict, and an arrival/ground-taxi conflict under north wind; an arrival-to-D/departure-from-C conflict, a D-Runway missed-approach/A-Runway-departure conflict, a departure/taxi conflict, and an A-Runway-departure jet-blast effect on B-Runway arrivals under south wind. A further structural complication: the **international terminal (Terminal 3) sits on the west side of the A-Runway, not between the A- and C-Runways** like the two domestic terminals — international arrivals/departures must **cross the A-Runway** to reach it, a standing ground-workload and hazard-crossing point (see §13). Tokyo Approach/Radar/Departure and a layered Tokyo TCA/Positive Control Area structure sit above the field; the exact current-AIRAC polygon and vertical limits are chart items, not transcribed here — see AD 2.17/ENR.

### 3.3 Runway excursion 🟧
Three of the eight runway ends carry a **displaced threshold**: RWY 16L (390 m, landing-usable length 2,970 m of the 3,360 m physical runway), RWY 34R (360 m, landing-usable 3,000 m), and RWY 16R (480 m, landing-usable 2,520 m of the 3,000 m physical runway) — brief the correct usable length per assigned runway, not the physical length. **RWY 05 is not usable for landing at all** (declared LDA "—" in the primary source) — it is a takeoff-direction-only end of the D-Runway pair. All four runway pairs are **fully grooved** (16L/34R, 16R/34L, 04/22, 05/23), a positive wet-runway braking factor. At least one runway end is fitted with an **EMAS arresting bed** (~84.5 m × 62.8 m) per the AIP overrun/RESA table; the specific runway end was not reliably parsed from the retrieved extract — flagged for verification, not asserted here.

### 3.4 Weather threat 🟥
**Tokyo Bay sea fog and low cloud**, especially on winter mornings, are the field's signature visibility hazard and can change quickly. The **Pacific typhoon season (~Jun–Oct, peak Aug–Sep)** regularly disrupts Kanto-area terminal operations (see the [Tokyo (RJJJ) FIR brief](../../../../airspace/fir/asia/tokyo-rjjj.md) §11). Strong-wind configurations bring pronounced **mechanical turbulence and wind shear around 1,000 ft AGL** on final, occasionally 50 kt or greater at that level per operator reporting — brief a stabilised-early, speed-bug-up approach in these conditions. Winter also brings the region's characteristic **jet-stream clear-air turbulence**. Snow is uncommon in Tokyo but does occur; the AIP publishes a full snow-clearing equipment inventory and a 3 cm trigger depth for runway/taxiway snow removal (§6/§14).

### 3.5 Operational considerations 🟥
Plan around several durable, field-defining constraints: (1) **RNAV1 and RNAV5 certification are mandatory for all operations** — an aircraft without these approvals is prohibited from operating at RJTT outright; (2) the **A380 is prohibited from daytime operation** (2100–1400 UTC / 06:00–23:00 JST), permitted only in the 1400–2100 UTC (23:00–06:00 JST) overnight window, with an additional weight restriction applied during the permitted window per an AIP footnote not fully captured in this pass (§18); classic B747 variants (-100/-200/-300/-SP) are barred outright; (3) **RNP RWY16L/16R noise-reduction approaches are mandatory-readiness** between 0600–1000 UTC in southerly-wind, good-weather conditions — landing aircraft must be prepared to fly them and must notify Tokyo Approach at initial contact if unable; (4) a hard **23:00–05:55 JST night-mode** confines all departure/arrival routing to over-water Tokyo Bay tracks on the C/D runways (farthest from residential areas), with land overflight prohibited in that window; and (5) the international terminal's **A-Runway crossing** (§3.2/§13) is a standing ground-workload item. RFF, navaid and approach infrastructure are all first-tier; the open items in §18 are mostly currency/administrative confirmations rather than fresh safety-critical gaps.

---

## 4. Cautions & Warnings

- **RNAV1/RNAV5 certification is mandatory** — an uncertified aircraft is prohibited from operating at RJTT; this is a hard gate, not a preference.
- **RWY 05 is never a landing runway** — declared LDA "not usable for landing"; it is a takeoff-direction-only end of the D-Runway pair. **RWY 04 has no published approach** either, though it does carry a published LDA.
- **A380 daytime-operation ban (06:00–23:00 JST)** — permitted only overnight (23:00–06:00 JST), with an additional weight restriction in that window (footnote not fully captured, §18); classic B747 variants are barred outright.
- **International-terminal (T3) traffic crosses the A-Runway** — expect runway-crossing instructions and read-back-heavy ground handling on taxi to/from T3, especially during a concurrent A-Runway arrival/departure bank.
- **RNP RWY16L/16R noise-reduction readiness window (0600–1000 UTC, southerly wind, good weather)** — be prepared to fly the RNP approach; report inability at initial contact with Tokyo Approach.
- **Night-mode (23:00–05:55 JST): C/D-runway-only, Tokyo-Bay-only routing** — no overflight of Tokyo/Chiba land areas in this window; expect the alternate-runway fallback logic (A-Runway if C closed, B-Runway if D closed) rather than the daytime pattern.
- **Displaced thresholds on RWY 16L (390 m), RWY 34R (360 m) and RWY 16R (480 m)** — brief the usable landing length, not the physical runway length (§3.3/§7).
- **Strong-wind approaches bring pronounced low-level turbulence/shear (~1,000 ft AGL)** — bug up approach speed and stabilise early in these conditions.
- **De-icing is published "Nil" in the primary AIP facilities table**, yet operational sources report Type I/IV capability in season — confirm locally before relying on either figure (§9/§16/§18).

---

## 5. Aerodrome category, restrictions & crew qualification

- **Special-airport / category:** Not JCAB-categorised as a restricted-crew "special airport" in reachable sources, but RJTT carries genuinely uncommon **hard equipage and routing constraints** for a major hub — see below. 🟥
- **Crew-qualification gate:** Crews should be current on RNAV1/RNAV5 procedures (mandatory, not optional) and familiar with the LDA offset-approach visual-manoeuvring segment (§10) and the noise-reduction RNP procedures on 16L/16R. 🟧
- **Operating restrictions / bans:** **RNAV1/RNAV5 certification mandatory** for all operations — uncertified aircraft prohibited outright. **A380 prohibited from daytime operation** (06:00–23:00 JST), permitted overnight only with an additional weight restriction (footnote not fully captured, §18). **Classic B747 variants (-100/-200/-300/-SP) barred outright.** A380/B747-8 must be equipped with, and use, digital go-around track-hold guidance when landing. No overflight of Metropolitan Tokyo or Chiba Prefecture below prescribed altitudes; no overflight of the residential area north of the field or the oil-refinery area to the west. 🟥
- **Overflight / entry / permits:** Standard international arrival for a scheduled K Global service; no additional state permit is modelled for this simulated operation beyond standard IFR flight-planning. 🟩
- **Operations notes:** **Civil Aviation Bureau (JCAB), Ministry of Land, Infrastructure, Transport and Tourism** is the aerodrome administrator and ANSP. Terminal management is split — **Japan Airport Terminal Co., Ltd.** operates Terminals 1 and 2; **Tokyo International Air Terminal Corporation** operates Terminal 3. IFR departures must call Tokyo Delivery five minutes prior to engine start with callsign, spot number, and proposed flight level/altitude/route if changed from the filed plan.

---

## 6. General / hours / services

| Item | Value | Flag |
|---|---|---|
| ATS hours | H24 (Tower/Ground/Delivery/Approach/Radar/Departure) | 🟩 |
| AD operating hours | AD administration, customs, health/sanitation, AIS briefing, MET briefing, ATS, fuelling, handling and security all H24; ATS Reporting Office (ARO) Nil | 🟩 |
| Night / curfew restrictions | No blanket curfew; hard **23:00–05:55 JST night-mode** confining routing to over-water Tokyo Bay tracks on C/D runways; **A380 daytime-operation ban** 06:00–23:00 JST | 🟥 |
| RFF category | **CAT 10** | 🟩 |
| Fuel | JET A-1 (Turbine-grade oils); hydrant refuelling and fuel truck; H24; no stated capacity limitation | 🟩 |
| PCN/PCR | Apron: T1/T2 and "N" Area concrete PCR 1132/R/B/W/T; Terminal 3 concrete PCR 1183/R/B/W/T. Taxiways: asphalt-concrete/concrete, PCR 975/F/C/X/T and PCR 925/R/B/W/T, widths 15–34 m by segment | 🟩 |
| Customs | H24 in Terminal 3 and the international area of Terminal 2; Terminal 1 and domestic Terminal 2 areas 05:00–24:00 local | 🟧 |
| Handling / FBO | H24 per the primary AIP; specific ground-handling agent for the K Global operation not individually confirmed | 🟧 |
| De-icing | Published **"Nil"** in the primary AIP facilities table (AD 2.3/2.4); tier-4 operational sources report Type I/IV de-icing capability in season — genuine discrepancy, confirm locally | 🟧 |

---

## 7. Runways & declared distances

| RWY | Dimensions | Surface / PCR | TORA | TODA | ASDA | LDA | Notes |
|---|---|---|---|---|---|---|---|
| 16L (C) | 3,360 × 60 m | Asphalt concrete / PCR 1000/F/C/X/T | 3,360 m | 3,360 m | 3,360 m | **2,970 m** | Displaced THR 390 m inward; grooved |
| 34R (C) | 3,360 × 60 m | Asphalt concrete / PCR 1000/F/C/X/T | 3,360 m | 3,360 m | 3,360 m | **3,000 m** | Displaced THR 360 m inward; grooved |
| 16R (A) | 3,000 × 60 m | Asphalt concrete / PCR 873/F/B/X/T | 3,000 m | 3,000 m | 3,000 m | **2,520 m** | Displaced THR 480 m inward; grooved |
| 34L (A) | 3,000 × 60 m | Asphalt concrete / PCR 873/F/B/X/T | 3,000 m | 3,000 m | 3,000 m | 3,000 m | No displacement; grooved |
| 04 (B) | 2,500 × 60 m | Asphalt concrete / PCR 1098/F/C/X/T | 2,500 m | 2,500 m | 2,500 m | 2,500 m | No published approach (LDA published, no electronic aid); grooved |
| 22 (B) | 2,500 × 60 m | Asphalt concrete / PCR 1098/F/C/X/T | 2,500 m | 2,500 m | 2,500 m | 2,500 m | ILS + LDA available; grooved |
| 05 (D) | 2,500 × 60 m | Asphalt concrete / PCR 1337/F/C/X/T* | 2,500 m | 2,500 m | 2,500 m | **— (not usable for LDG)** | Takeoff-direction end only; no published approach; grooved; *PCR footnote (AD 2.23.7, A380 weight restriction) not fully captured — 🟧 verify |
| 23 (D) | 2,500 × 60 m | Asphalt concrete / PCR 1337/F/C/X/T* | 2,500 m | 2,500 m | 2,500 m | 2,500 m | ILS + LDA available; pile-supported over the Tama River estuary; grooved; *see above 🟧 |

*Source: JCAB AIP Japan, AD 2 RJTT 2.12/2.13 (amendment effective dates observed 30 Jan 2020 – 28 Nov 2024 across sub-sections, retrieved 2026-07-26). A-labels (A/B/C/D-Runway) follow the JCAB operational-procedures naming convention, not the AIP's own designator-only table. Runway strip/RESA dimensions are published in the primary source but were not reliably parsed from the retrieved extract — 🟧 not transcribed, verify against current AIRAC. All distances in metres.*

---

## 8. Communications

| Service | Callsign | Frequency | Hours | Notes |
|---|---|---|---|---|
| ATIS | Tokyo Intl Airport ATIS | 128.8 MHz | H24 | |
| Delivery | Tokyo Delivery | 121.825 MHz (primary) · 121.875 MHz | H24 | IFR departures call 5 min prior to engine start (callsign, spot, FL/route if changed) |
| Ground | Tokyo Ground | 118.225 / 121.625 / 121.7 / 121.975 / 122.075 MHz | H24 | Assignment logic per AD 2.20 — take the assigned frequency |
| Tower | Tokyo Tower | 118.1 MHz (primary) · 118.575 / 118.725 / 124.35 / 118.8 / 126.2 / 236.8 MHz; guard 121.5/243.0 | H24 | Multiple positions — take the assigned frequency |
| TCA | Tokyo TCA | 124.75 MHz (primary, 2300–1200 UTC) · 119.7 / 256.1 MHz · 119.45 / 246.1 MHz (2300–1030 UTC) | Mixed | VFR/transit Positive Control Area service |
| Approach | Tokyo Approach | 119.1 MHz (primary) · 119.4 / 119.65 / 119.7 / 125.4 / 232.2 / 261.2 MHz · 121.275 / 124.4 / 125.2 / 125.8 / 127.7 / 225.65 MHz; guard 121.5/243.0 | H24 | Sector-specific — take the assigned frequency |
| Radar | Tokyo Radar | 124.0 / 126.5 / 236.8 / 261.2 / 295.9 MHz · 120.2 / 119.025 / 120.9 / 123.6 / 125.1 / 283.4 MHz; guard 121.5/243.0 | H24 | |
| Departure | Tokyo Departure | 126.0 MHz (primary) · 120.8 / 127.5 / 127.6 MHz · 124.2 / 119.6 / 120.6 / 125.525 MHz; guard 121.5/243.0 | H24 | |
| Centre / FIR | Tokyo ACC | Per current AIRAC | H24 | Fukuoka FIR (RJJJ) — see [Tokyo (RJJJ) FIR brief](../../../../airspace/fir/asia/tokyo-rjjj.md) |

*Source: JCAB AIP Japan, AD 2 RJTT 2.18 (eff. 2 Oct 2025, retrieved 2026-07-26). Cross-checked against the VATSIM Japan (VATJPN) Tokyo ACA sector document (retrieved 2026-07-26) — network-sim, not regulatory — which lists closely matching primary frequencies (119.1/126.0/124.75 MHz etc.) for the Tokyo Approach/Departure/TCA sectors.*

---

## 9. Navaids

| Aid | Ident | Freq | Hours | Notes |
|---|---|---|---|---|
| VOR | TTE | 117.4 MHz | H24 | Sector-specific unusable ranges published — verify current AIP |
| DME | TTE | 1208 MHz (CH-121X) | H24 | Sector-specific unusable ranges published |
| ILS 16L | IOC | 111.95 MHz (LOC) / 330.95 MHz (GP, 3.0°) | H24 | DME CH-56Y; serves the displaced-THR 16L |
| ILS 34R | ITC | 108.9 MHz (LOC) / 329.3 MHz (GP, 3.0°) | H24 | DME CH-26X; inner marker at 75 MHz |
| ILS 16R | ITA | 111.55 MHz (LOC) / 332.75 MHz (GP, 3.0°) | H24 | DME CH-52Y |
| ILS 34L | IHA | 111.7 MHz (LOC) / 333.5 MHz (GP, 3.0°) | H24 | DME CH-54X |
| ILS 22 | IAD | 108.1 MHz (LOC) / 334.7 MHz (GP, 3.0°) | H24 | DME CH-18X |
| LDA 22 | IKL | 110.1 MHz (LOC, offset toward Chiba) | H24 | DME CH-38X; no glidepath — visual manoeuvring segment past the MAPt (§10) |
| ILS 23 | ITD | 110.5 MHz (LOC, 2.0° offset) / 329.6 MHz (GP, 3.0°) | H24 | DME CH-42X |
| LDA 23 | ITL | 108.5 MHz (LOC, offset toward Chiba) | H24 | DME CH-22X; no glidepath — visual manoeuvring segment past the MAPt (§10) |
| MSAS (SBAS) | — | 1575.42 MHz | H24 | Satellite-based augmentation, supports RNP approaches |
| GBAS | RJTT | 114.3 MHz | 🟧 **1400–2100 UTC only** | Service volume 23 NM radius from the GBAS reference point — **not H24** |

*No ILS/LDA electronic aid is published for RWY 04 or RWY 05 — consistent with §3.3/§7 (RWY 05 not usable for landing; RWY 04 landing-usable but visual/RNAV only). Source: JCAB AIP Japan, AD 2 RJTT 2.19 (eff. 2 Oct 2025/23 Jan 2025, retrieved 2026-07-26). ILS sub-category (II/III) not confirmed from a primary table this pass — 🟧.*

---

## 10. Arrival

- **Transition altitude / level:** Not confirmed from a primary table this pass — 🟧 verify current chart.
- **Speed:** Standard 250 KIAS below FL100 approaching the terminal area (JCAB-wide practice); published procedural speeds of 180 KIAS at 10 DME reducing to 160 KIAS at 5 DME apply on most ILS finals, and 170 KIAS from ~9–10 NM from threshold on the RNP 16L/16R noise-reduction approaches — comply unless ATC advises otherwise (see the Departure/Arrival pages for detail).
- **Preferential runway logic:** Wind-driven — **North Wind (~60%):** land 34L/34R. **South Wind (~40%):** land 22/23, primarily via the **LDA approach** (ILS to B/D reserved for poor-weather noise-abatement cases). Domestic/international traffic is further split by arrival direction (north vs south) between the two active runways to keep converging tracks apart — see §3.2.
- **Approaches (names only — verify minima on current AIRAC charts):**

| RWY | Approach | Notes |
|---|---|---|
| 16L | ILS (IOC) | |
| 34R | ILS (ITC) | |
| 16R | ILS (ITA); RNP (noise-reduction, mandatory-readiness 0600–1000 UTC southerly/good wx) | |
| 34L | ILS (IHA) | |
| 04 | — none — | Landing-usable (LDA published) but visual/RNAV only, no electronic aid |
| 22 | ILS (IAD); LDA (IKL, offset toward Chiba) | LDA is the primary south-wind approach; ILS reserved for poor weather |
| 05 | — none — | **Never a landing runway** |
| 23 | ILS (ITD, 2° offset); LDA (ITL, offset toward Chiba) | LDA is the primary south-wind approach; ILS reserved for poor weather |

- **STARs (names only):** Not confirmed in this research pass — long RNAV STARs are the norm at RJTT and are typically flown in full for noise reasons; pull the current-AIRAC STAR list at planning. 🟧
- **LVP:** Triggered by Tokyo Bay sea fog/low cloud, most common on winter mornings; exact RVR/trigger figures not confirmed this pass. 🟧
- **Missed approach watch-items:** Terrain is not the driver (flat, over-water site); the operative concern is re-sequencing into a dense, configuration-dependent traffic picture, including the documented D-Runway-missed-approach/A-Runway-departure conflict under south-wind operations (§3.2).

---

## 11. Departure

- **SIDs (names only — fly the charted version):** Not confirmed in this research pass — pull the current-AIRAC SID list at planning. 🟧
- **RNP / climb-gradient requirements:** **RNAV1 and RNAV5 certification are mandatory for all RJTT operations** — all departure and arrival routes are RNAV-based; see [`OM E — PBN and RNP Operations`](../../../../../flight-ops/pbn-and-rnp-operations.md). Night-hours departures/arrivals (2300–0555 JST) additionally require RNAV1/RNAV5 for the specific over-water night routes.
- **Take-off minima:** Not confirmed in this research pass. 🟧
- **Start-up / push-back:** IFR departures must notify **Tokyo Delivery** five minutes prior to engine start with callsign, spot number, and proposed FL/altitude/route if changed from the filed plan.
- **ATC slot / CTOT & clearance:** No formal IATA slot level is modelled for K Global's simulated scheduled service; domestic Japanese slots are scarce and reallocated by MLIT every five years in reality, and daytime non-scheduled slots are reported at crisis levels — a general congestion signal for the field. 🟧
- **De-icing:** Published **"Nil"** in the primary AIP facilities table; operational sources report Type I/IV capability in season — genuine discrepancy, confirm locally (§9/§16). See [`OM E — Cold Weather Operations`](../../../../../flight-ops/cold-weather-operations.md).

---

## 12. Noise & Environmental

- **Noise abatement (NAP):** RJTT's entire runway/approach-selection logic is noise-driven (§3.2/§10). No overflight of Metropolitan Tokyo or Chiba Prefecture below prescribed altitudes; no overflight of the residential area north of the field or the oil-refinery area to the west. The **LDA approach** to the B/D runways exists specifically to avoid the noise impact of an ILS approach in that configuration; ILS to those runways is reserved for poor-weather cases. **RNP RWY16L/16R** approaches exist specifically for noise reduction and carry a mandatory-readiness window (0600–1000 UTC, southerly wind, good weather). A **Charted Visual Approach (CVA)** to the A/C runways — the first of its kind in Japan — exists to minimise public noise annoyance under good-weather north-wind operations, flown as independent, pilot-separated parallel approaches within 1 NM of each other.
- **Night noise / dB limits:** No blanket curfew, but a hard **23:00–05:55 JST night-mode** confines all routing to over-water Tokyo Bay tracks on the C/D runways, with land overflight prohibited in that window.
- **Engine run-up restrictions:** Not confirmed in reachable sources — verify locally. 🟧
- **Reverse thrust / idle-reverse policy:** Not confirmed in reachable sources — verify locally. 🟧

---

## 13. Ground operations

- **Stands for our types:** Apron/PCR data at §6; the international terminal (T3) apron and the domestic T1/T2 aprons are all concrete, PCR 1132–1183/R,F/B,C/W/T. A dedicated GA/cargo apron ("N Area") exists on the field. 🟧
- **Push-back:** Not confirmed in reachable sources — verify locally. 🟧
- **Standard taxi routes:** Confirm with Ground on the day; the AIP publishes a full "Speedy Turn-Off" exit-taxiway table by runway (see §7 remarks and the Arrival page §7 for the runway/exit/terminal mapping).
- **Hot spots / tight taxiways:** 🟥 **The international terminal (Terminal 3) sits west of the A-Runway, not between the A- and C-Runways** like the two domestic terminals — all international traffic must **cross the A-Runway** to reach or leave T3, a standing, AIP-acknowledged ground-workload and hazard-crossing point, especially active during a concurrent A-Runway arrival/departure bank.
- **Follow-me:** Availability not confirmed in reachable sources — verify locally. 🟧

---

## 14. Weather & seasonal (durable)

- **Climate / prevailing wind:** Temperate, maritime-influenced Tokyo Bay climate; prevailing wind is northerly roughly 60% of the year and southerly the remainder, directly driving the field's 2-configuration runway system (§3.2/§10/§11).
- **Seasonal hazards:** **Tokyo Bay sea fog and low cloud**, most common on winter mornings, can develop and change quickly. The **Pacific typhoon season (~Jun–Oct, peak Aug–Sep)** regularly disrupts Kanto-area terminal operations (see the [Tokyo (RJJJ) FIR brief](../../../../airspace/fir/asia/tokyo-rjjj.md) §11). Winter brings the region's characteristic jet-stream clear-air turbulence and occasional snow — the AIP publishes a full snow-clearing equipment inventory (6 sweepers, 8 plows, 2 rotaries, 2 graders, 5 loaders) with a 3 cm trigger depth for runway/taxiway clearance, prioritising the C/A-Runway pair then the B/D pair.
- **Local effects:** Strong-wind configurations bring pronounced mechanical turbulence and shear around 1,000 ft AGL on final — bug up approach speed and stabilise early in these conditions.

> **Live weather — pull at planning (T-2h):** METAR, TAF, TREND, SIGMET/AIRMET, typhoon advisories. Not stored here.

---

## 15. NOTAMs

> **Pull at planning (T-2h).** Perishable — not stored here. Check: runway/taxiway closures (especially any C/D-Runway closure affecting the night-mode fallback pattern, §3.2/§12), navaid U/S (including GBAS's restricted 1400–2100 UTC service hours), lighting, obstacle/crane, RFF downgrade, GPS/RAIM for RNP procedures, current runway-configuration status. Source: official AIS / OFP NOTAM block.

---

## 16. Fuel & alternate planning notes

- **Typical role for us:** **Home / base station** — the primary departure and return field for the K Global network in the Asia region.
- **Nearest suitable alternates:** Company preferred alternates [**RJAA**](../rjaa/index.md) (Narita, same country) and **RJGG** (Chubu Centrair, Nagoya) `[VAMSYS mirror 2026-07-26]` — confirm suitability, runway/RFF adequacy and current minima per leg.
- **Fuel-uplift notes:** JET A-1, H24, hydrant and truck refuelling, no stated capacity limitation per the primary AIP. See [`OM E — Fuel Policy`](../../../../../flight-ops/fuel-policy.md).
- **Range/perf flags for our fleet:** Field length/strength is non-limiting for any K Global type on the A/C runway pair; the B/D pair (2,500 m) and the runway-specific displaced-threshold LDAs (§7) should be briefed per assigned runway. See [`OM B — Fleet Capability Matrix`](../../../../../fleet/capability-matrix.md).

---

## 17. Fleet-specific notes (optional)

- As the home/base station, RJTT is the base field for the K Global fleet generally rather than a single-type consideration — see [`OM B — Fleet Index`](../../../../../fleet/index.md) and [`OM B — Fleet Capability Matrix`](../../../../../fleet/capability-matrix.md). CAT 10 RFF supports any widebody type in the network. The one type-specific consideration on record is the **A380 daytime-operation prohibition** (§5/§12) — relevant only if the fleet register includes an A380-family type; verify against the current Fleet Capability Matrix.

---

## 18. Open items (🟧 — confirm against AIP / current AIRAC)

- **A380 weight-restriction footnote (AD 2.23.7)** — referenced against the D-Runway PCR figure in the primary source but not captured in this research pass; confirm the exact restriction.
- **De-icing** — the primary AIP facilities table (AD 2.3/AD 2.4) states "Nil," while tier-4 operational sources report Type I/IV de-icing capability in season; a genuine discrepancy requiring local confirmation.
- **ILS sub-category (II/III)** — not confirmed from a primary table this pass; tier-4 sources assert CAT III low-visibility capability but this is not independently verified against a primary minima table.
- **Full text of AD 2.20 (Local Traffic Regulations)** — the retrieved extract is truncated after item (8); confirm any additional local procedures against the current AIRAC.
- **SIDs/STARs (current names)** — not obtained in this research pass; pull the live current-AIRAC procedure list before use.
- **Take-off minima, transition altitude/level, engine run-up restriction, reverse-thrust/idle-reverse policy, push-back and follow-me availability** — none confirmed in reachable sources.
- **Historical (2010-era) JCAB operational-procedures guidance** describing a 3,000 m C-Runway and a system-wide 2,500 m effective-length design philosophy pre-dates the current AIP's 3,360 m C-Runway declared length; the current §7 declared distances are authoritative, but the runway-selection *logic* in that document should be re-confirmed against current local operational guidance.
- **Terminal 2 international-area exact boundary vs Terminal 3** — gate/stand assignment not independently confirmed for a K Global operation.
- **Ground handling agent(s) contracted for the K Global operation** — not confirmed; commonly cited examples (e.g. Aeroworks, Universal Aviation) serve business aviation, not necessarily a scheduled K Global service.

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim material (current-AIRAC charts) informs content but is not listed here.*

- **JCAB AIP Japan (Civil Aviation Bureau), AD 2 RJTT 2.1–2.20** — mirrored via https://nagodede.github.io/aip/japan/documents/RJTT_full.pdf (retrieved 2026-07-26). Amendment effective dates observed across sub-sections range 30 Jan 2020 – 2 Oct 2025 (e.g. AD 2.12/2.13 eff. 28 Nov 2024/31 Oct 2024; AD 2.17 eff. 2 Oct 2025; AD 2.18 eff. 2 Oct 2025; AD 2.19 eff. 23 Jan 2025; AD 2.20 eff. 6 Oct 2022). Primary source of record for runway geometry/declared distances, PCR, communications, navaids, hours, RFF and the local traffic regulations.
- **Japan Civil Aviation Bureau / airport-slot coordination secretariat — "Operational Procedures at Tokyo International Airport (Haneda)"** — https://www.schedule-coordination.jp/archives/arc_hnd/2010/operational_procedure_at_hnd.pdf (retrieved 2026-07-26). Origin of the A/B/C/D-Runway naming convention and the detailed north-wind/south-wind/night-mode configuration logic, hazard-crossing points, and the LDA/CVA approach descriptions; a 2010-era document whose runway-length figures are superseded by the current AIP (§18) but whose operational *logic* remains the field's defining characteristic.
- **OPSGROUP — "Japan BizAv Ops: Haneda, Narita, and Nagoya Explained"**, 2026-01-13 — https://ops.group/blog/japan-bizav-ops-haneda-narita-and-nagoya-explained/ (retrieved 2026-07-26). Operator-level corroboration of runway-assignment-by-noise logic, sea-fog risk, strong-wind turbulence, de-icing capability, and the international terminal's ground layout.
- Wikipedia — "Haneda Airport" — https://en.wikipedia.org/wiki/Haneda_Airport (retrieved 2026-07-26). Terminal history, gate counts, international-slot-allocation history, D-Runway construction history.
- OurAirports — https://ourairports.com/airports/RJTT/ (retrieved 2026-07-26). *ARP/elevation cross-check (tier-4 figure of 35 ft does not match the primary AIP's 21 ft; the AIP is treated as authoritative).*
- **VATJPN (VATSIM Japan) — Tokyo ACA sector document** — https://vatjpn.org/document/public/om/sop/aca/tyo_aca/tyo_sector (retrieved 2026-07-26). *Network-sim document, not regulatory — cross-checked here for Tokyo Approach/Departure/TCA sector frequencies, which closely match the primary AIP.*
- [Tokyo (RJJJ) FIR brief](../../../../airspace/fir/asia/tokyo-rjjj.md) · [Asia airspace brief](../../../../airspace/asia.md) — companion OM C files for the wider Fukuoka FIR and Asia-region picture.

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-26 | Built from national AIP; K Global fields from live VAMSYS; 4-page pack. |
