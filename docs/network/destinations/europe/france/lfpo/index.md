# LFPO — Paris-Orly · Airport Briefing

**LFPO / ORY** · Paris (Orly), Île-de-France, France · Europe
**Version** v0.1 · **Updated** 2026-07-26 · **Status** Draft

> **Read-me:** Planning aid for the sim, not a chart. Static data is drawn from the SIA France eAIP (AIP France, AD 2 LFPO) plus standard public aeronautical data; approaches/SIDs/STARs are listed **by name only or flagged not-yet-confirmed** — fly the charted current-AIRAC version. Live weather/NOTAMs are pulled at planning (§14/§15). Open 🟧 items are listed in §18. Flag legend 🟥 restriction/hazard · 🟧 caution/unverified · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| ARP (lat/long) | 48°43'24"N / 002°22'46"E (48.7233, 2.3794) — intersection of RWY 07/25 and 02/20 centrelines `[AIP France AD 2 LFPO.2]` |
| Field elevation | **291 ft / 89 m AMSL** (reference temperature 28.8°C; geoid undulation 144 ft) |
| Mag variation | **1.8° E** (2025 epoch, annual change +0.134° E/yr — apply drift for current year) `[AIP France AD 2 LFPO.2]` |
| Time zone | UTC+1 (CET) / UTC+2 (CEST, EU DST observed) |
| Runway(s) | **06/24** 3,650 × 45 m (bituminous concrete) · **07/25** 3,320 × 45 m (bituminous concrete) · **02/20** 2,400 × 45 m (bituminous concrete, secondary/crosswind) |
| Preferential runway | Wind/traffic/noise-dependent; 06/24 and 07/25 are the primary CAT III-equipped pair, 02/20 is the secondary runway with reduced capability (see §7/§9/§10) — exact preferential-runway rule not confirmed this pass 🟧 |
| Longest LDA | 3,650 m (RWY 24) |
| Approaches | **ILS CAT III on RWY 06/24/07/25** (facility performance category III.E.4 on all four ends); **ILS CAT I on RWY 02 only** (I.E.1); **RWY 20 has no published instrument approach — PAPI/visual only** |
| RFF category | **CAT 9** (below the ICAO maximum CAT 10 — A380/B747-8 not routinely handled, see §5) |
| Control type | **Radar** — DSNA Orly Tower/Ground/Approach; Orly Approach operates within a **combined Paris-basin CTR** shared with De Gaulle, Le Bourget and Villacoublay approach positions; **Paris ACC (LFFF)** en route — no dedicated OM C Airspace FIR brief exists yet for LFFF, see [Europe area brief](../../../../airspace/europe.md) 🟧 |
| Elevation class | Near sea-level (291 ft) — **not** hot-and-high; non-issue for performance |
| Special-airport status | 🟥 **IATA Level 3 slot-coordinated** (COHOR); **hard night curfew 23:30–06:00** (tightening from 25 Oct 2026, see §6/§12); **250,000 movements/year regulatory ceiling** (since 1994); RWY 02/20 carries an AIP-flagged pavement-geometry anomaly at its intersection with 07/25 — see §5 |
| Customs / PoE | **Yes — H24** `[AIP France AD 2 LFPO.3]` |
| K Global category | 🟧 **Not published / verify — LFPO is not in the VAMSYS airport database** |
| K Global base | 🟧 **Not published / verify — no VAMSYS entry for this field** |
| Company preferred alternates | 🟧 **Not published / verify — no VAMSYS entry; do not assume a list** |
| Taxi-in / taxi-out (VAMSYS) | 🟧 **Not published / verify — no VAMSYS entry for this field** |

---

## 2. Validation summary

| Domain | Flag | Note |
|---|---|---|
| Terrain / CFIT | 🟩 | Flat Paris-basin location; no close-in high terrain. Non-factor for the field itself. |
| Runway length vs fleet perf | 🟩 | 3,650 m / 3,320 m main pair is ample for any K Global widebody; RWY 02/20 (2,400 m) is a secondary/crosswind runway, non-limiting for its typical role. |
| Approach availability / minima | 🟧 | CAT III on 4 of 6 runway ends (06/24/07/25); RWY 02 is CAT I only; RWY 20 has no instrument approach at all — brief the config-dependent capability drop. Sub-category (IIIA/IIIB) not confirmed from a primary table this pass. |
| Airspace / traffic / control | 🟥 | Orly Approach operates inside a combined, very dense multi-airport Paris CTR (shared with CDG/Le Bourget/Villacoublay) — see §3.2. |
| Weather / seasonal hazard | 🟧 | Winter Paris-basin fog/low-vis is the standing seasonal threat; CAT III infrastructure on the main runway pair is the mitigation, but is unavailable on 02/20 — see §3.4/§14. |
| Curfew / slots / hours | 🟥 | **Hard night curfew 23:30–06:00**, IATA **Level 3** slot coordination (COHOR), and a **250,000 movements/year** regulatory ceiling — the field's defining operational constraints, see §6/§12. |
| RFF category vs our types | 🟧 | **CAT 9** — one below ICAO maximum; A380/B747-8 restricted to diversion/official-reception-only per the AIP (see §5) — confirm adequacy against any K Global type approaching this size. |
| Fuel availability | 🟧 | Jet A-1 only, **published hours 0500–2230 local**, not H24 — a genuine gap against the curfew boundary, see §16. |
| Customs / handling / security | 🟩 | Customs/police H24 confirmed; specific K Global handling agent not confirmed (VAMSYS gap) — see §6/§13. |

---

## 3. Threat & Error Management (TEM)

### 3.1 CFIT / Terrain 🟩
LFPO sits at 291 ft AMSL in the flat Paris basin — there is **no close-in high terrain** relevant to arrival, departure or missed-approach paths. This is a non-issue field for terrain; verify the MSA ring on the current chart as routine practice, but CFIT is not the operative threat here.

### 3.2 Airborne conflict / traffic 🟥
Orly Approach does not operate a stand-alone terminal airspace — the field sits inside a **single combined Paris CTR** (Class D, surface to 2,000 ft AMSL) worked jointly by **De Gaulle Approach**, **Orly Approach** and **Villacoublay Approach** call-signs across the De Gaulle–Orly–Le Bourget–Villacoublay complex `[AIP France AD 2 LFPO.17]`. This is an unusually dense shared multi-airport terminal environment: several permanently prohibited areas sit inside or adjacent to the CTR (LF-P21 Bruyères-le-Châtel, LF-P23 Paris, LF-P25 Fontenay-aux-Roses, LF-P47 Balard, LF-P82 Brétigny — entry prohibited without specific authorisation), and the CTR coexists with **LF-R275 Paris**, a mandatory-avoidance zone for VFR general air traffic. Expect continuous coordination/handoff traffic between Orly, CDG and Le Bourget streams, especially during peak banks. No dedicated OM C Airspace FIR brief exists yet for **Paris FIR/UIR (LFFF)** — cross-ref the general [Europe area brief](../../../../airspace/europe.md) pending that build (§18).

### 3.3 Runway excursion 🟧
RWY 06 carries a **300 m displaced threshold** (LDA 3,350 m vs TORA 3,650 m) and RWY 25 carries a **435 m displaced threshold** (LDA 2,885 m vs TORA 3,320 m) — mind the gap between full runway length and usable landing distance on both `[AIP France AD 2 LFPO.12/13]`. RWY 02/20 additionally carries an AIP-flagged pavement-geometry anomaly at its intersection with RWY 07/25: a curvature radius and inter-curve distance below international recommended values — a documented irregularity, not a routine-use hazard, but a plan/vehicle caution item. **RWY 02 has IFR take-off prohibited** by declared-distance publication — never plan an IFR departure off 02.

### 3.4 Weather threat 🟧
Low-Visibility Procedures (LVP) at LFPO trigger when **ceiling ≤ 200 ft or RVR ≤ 600 m** `[AIP France AD 2 LFPO.20.4.1]`, consistent with the same Paris-basin winter radiation/fog climatology that affects the wider Île-de-France region. CAT III infrastructure on RWY 06/24/07/25 is the standing mitigation, but **RWY 02 is CAT I only and RWY 20 has no instrument approach at all** — if wind or config forces a landing on 02/20 during a low-vis event, capability drops sharply. See §14.

### 3.5 Operational considerations 🟥
Three durable constraints define this field: (1) the **hard night curfew, 23:30–06:00 local**, in force since a 1968 decree and tightening further from **25 October 2026** (a partial 22:00 ban on the noisiest aircraft, a stricter off-block reference time, and narrowed exemption categories — see §6/§12); (2) **IATA Level 3 slot coordination** (coordinator **COHOR**) with rolling-hour runway-movement caps and a **250,000 movements/year** regulatory ceiling in force since 1994; and (3) **RFF CAT 9**, one category below the ICAO maximum — the AIP restricts A380/B747-8 operations at LFPO to **diversions from Charles de Gaulle or official-reception movements only**, with dedicated taxi routings, weight limits (398 t / 600 t by routing) and a mandatory follow-me car for A380 ground movements `[AIP France AD 2 LFPO.9/20]`. Fuel uplift is also **not H24** (0500–2230 local) — a genuine planning consideration near the curfew boundary (§16).

---

## 4. Cautions & Warnings

- **Hard curfew 23:30–06:00** — no scheduled movement outside this window; a delayed late-evening rotation risks being pushed into a prohibited window (see §6/§12 for the 2026 tightening).
- **RWY 02 — IFR take-off prohibited.** **RWY 20 — no published instrument approach**, visual/PAPI only.
- **RWY 06 (300 m) and RWY 25 (435 m) carry significant displaced thresholds** — always use the declared LDA, not the full runway length, in landing-distance calculations.
- **Combined multi-airport Paris CTR** (Orly/CDG/Le Bourget/Villacoublay share one approach-control complex) — expect dense traffic and possible extended vectoring, especially in marginal weather.
- **A380/B747-8 are diversion/official-reception-only** at LFPO per the AIP — tied to RFF CAT 9 and taxiway/bridge weight limits; do not expect routine widebody-superheavy scheduling here.
- **Fuel uplift is published 0500–2230 local only** — a late-evening turn approaching the curfew boundary may not have routine into-plane service without prior arrangement with local suppliers.
- RWY 02/20 carries a documented sub-standard pavement-curvature geometry at its intersection with RWY 07/25 — an AIP-flagged irregularity for ground-vehicle/aircraft planning near that junction.

---

## 5. Aerodrome category, restrictions & crew qualification

- **Special-airport / category:** Not operator-categorised as a restricted-crew "special airport" in reachable sources; the standing crew-briefing items are the **hard curfew**, the **shared multi-airport Paris CTR**, and **CAT III/LVP procedures** confined to RWY 06/24/07/25. 🟥
- **Crew-qualification gate:** CAT II/III currency required for low-visibility operations into the CAT III-equipped runway ends; confirm crew/aircraft currency before planning a low-vis arrival, particularly if RWY 02/20 is the only available runway in a given wind state (CAT I / visual only). 🟧
- **Operating restrictions / bans:** Hard night curfew 23:30–06:00 (§6/§12); RWY 02 IFR take-off prohibited; RWY 20 no instrument approach; **A380/B747-8 restricted to diversion-from-CDG or official-reception movements only**, with dedicated GMC-chart taxi routings and a mandatory follow-me car for A380 ground movements. 🟥
- **Overflight / entry / permits:** Standard EU/Schengen and non-Schengen international arrival; no special state permit required. 🟩
- **Operations notes:** ANSP — **DSNA** (Direction des Services de la Navigation Aérienne; Orly Tower/Ground/Approach, Paris ACC en route). Airport operator — **ADP Group (Aéroports de Paris)**. Slot coordinator — **COHOR**.

---

## 6. General / hours / services

| Item | Value | Flag |
|---|---|---|
| ATS hours | H24 overall `[AIP France AD 2 LFPO.3]`; several supplementary Approach/Tower frequencies are HO (activated per traffic, see §8) | 🟧 |
| AD operating hours | Coordinated opening times per COHOR: Summer season 06:20–23:29 local (arrivals) / 06:00–23:19 local (departures); Winter season same local clock | 🟧 |
| Night / curfew restrictions | **Hard curfew 23:30–06:00**, in force since a 1968 decree; **tightening from 25 Oct 2026** — a partial ban from 22:00 for the noisiest aircraft types, curfew reference switched from take-off time (23:30) to off-block/parking-position departure time (23:15), and exemptions narrowed to security/safety/public-order cases only | 🟥 |
| RFF category | **CAT 9** | 🟧 |
| Fuel | Jet A-1 only; **0500–2230 local**, not provided 2230–0500 except by special arrangement with local suppliers | 🟧 |
| PCN | Runway-specific — see §7; apron/taxiway PCN varies by zone (approx. 65–116 depending on area — see current AIP for exact zone) | 🟩 |
| Customs | **H24** | 🟩 |
| Handling / FBO | Multiple third-party ground handlers operate at the field (named in the AIP handling-services register); specific K Global contracted handler not confirmed — VAMSYS gap | 🟧 |

---

## 7. Runways & declared distances

| RWY | Dimensions | Surface / PCN | TORA | TODA | ASDA | LDA | Notes |
|---|---|---|---|---|---|---|---|
| 02 | 2,400 × 45 m | Bituminous concrete / PCN 95 R/C/W/T | 2,400 m | 2,400 m | 2,400 m | 2,400 m | **IFR take-off prohibited.** RESA 132 × 120 m. Pavement-geometry anomaly at the 07/25 intersection (sub-standard curvature). |
| 20 | 2,400 × 45 m | Bituminous concrete / PCN 95 R/C/W/T | 2,400 m | 2,400 m | 2,400 m | 2,400 m | **No instrument approach — visual/PAPI only.** RESA 180 × 150 m. Same geometry anomaly note as RWY 02. |
| 06 | 3,650 × 45 m | Bituminous concrete / PCN 94 R/B/W/T | 3,650 m | 3,710 m | 3,650 m | **3,350 m** | **Displaced threshold 300 m.** RESA 157 × 150 m. CAT III. |
| 24 | 3,650 × 45 m | Bituminous concrete / PCN 94 R/B/W/T | 3,650 m | 3,710 m | 3,650 m | 3,650 m | No displaced threshold. RESA 130 × 150 m. CAT III. |
| 07 | 3,320 × 45 m | Bituminous concrete / PCN 114 F/B/W/T (105 R/B/W/T on the last 1,020 m) | 3,320 m | 3,320 m | 3,320 m | 3,320 m | No displaced threshold. RESA 220 × 120 m. CAT III. |
| 25 | 3,320 × 45 m | Bituminous concrete / PCN 114 F/B/W/T (105 R/B/W/T on the first 1,020 m) | 3,320 m | 3,640 m | 3,320 m | **2,885 m** | **Displaced threshold 435 m.** RESA 240 × 150 m, CWY 320 m. CAT III. |

*Source: SIA France eAIP, AD 2 LFPO.12/13, AIRAC cycle effective 11 Jun 2026 (retrieved 2026-07-26 from the 09 Jul 2026 eAIP publication). Displaced-threshold figures for RWY 06 (300 m) and RWY 25 (435 m) cross-checked against OurAirports (retrieved 2026-07-26) — both independently agree. All distances in metres.*

---

## 8. Communications

| Service | Callsign | Frequency | Hours | Notes |
|---|---|---|---|---|
| ATIS | ORLY ATIS | 126.505 (FR) / 131.355 (EN) | HO | Departure/arrival parameters broadcast |
| Delivery | ORLY Delivery ("ORLY Prevol") | 121.555 | HO | Flight-plan elements / departure parameters |
| Ground | ORLY Ground ("ORLY Sol") | 121.705 (H24) · 121.815 (aux, HO) | Mixed H24/HO | |
| Tower | ORLY Tower ("ORLY Tour") | 118.700 (HO) · 120.500 (aux, HO) · 135.000 ("FIRE" freq, HO) | HO | |
| Approach | ORLY Approach | 118.855 · 120.855 · 123.875 (state ACFT without 8.33 kHz spacing) · 124.450 · 127.750 (reserved DEP) · 128.380 (aux, reserved DEP) | HO | Shares the combined Paris CTR complex with De Gaulle/Villacoublay Approach — take the assigned frequency |
| VDF / Homer | ORLY Homer | 118.700 / 118.855 / 121.500 (distress) / 123.875 / 124.450 / 127.750 / 128.380 | H24 | |
| Centre / FIR | Paris ACC (LFFF) | Per current AIRAC | H24 | No dedicated OM C Airspace FIR brief yet — see [Europe area brief](../../../../airspace/europe.md) 🟧 |

*Source: SIA France eAIP, AD 2 LFPO.18, AIRAC cycle effective 11 Jun 2026 (retrieved 2026-07-26). Cross-checked against OurAirports frequency summary (retrieved 2026-07-26) — consistent for APP/ATIS/GND/TWR primary values.*

---

## 9. Navaids

| Aid | Ident | Freq | Hours | Notes |
|---|---|---|---|---|
| DME | LOL | 113.95 (CH86Y) | H24 | Area DME, near RWY 20 threshold |
| ILS LOC 02 | OLN | 110.3 | H24 | **CAT I** (facility performance category I.E.1) |
| ILS GP 02 | — | 335.0 | H24 | 3° glidepath |
| ILS DME 02 | — | CH40X | H24 | |
| ILS LOC 06 | ORE | 108.5 | H24 | **CAT III** (III.E.4) |
| ILS GP 06 | — | 329.9 | H24 | 3° glidepath |
| ILS DME 06 | — | CH22X | H24 | |
| ILS LOC 07 | OLE | 108.15 | H24 | **CAT III** (III.E.4) |
| ILS GP 07 | — | 334.55 | H24 | 3° glidepath |
| ILS DME 07 | — | CH18Y | H24 | |
| ILS LOC 24 | OLO | 110.9 | H24 | **CAT III** (III.E.4) |
| ILS GP 24 | — | 330.8 | H24 | 3° glidepath |
| ILS DME 24 | — | CH46X | H24 | |
| ILS LOC 25 | OLW | 111.75 | H24 | **CAT III** (III.E.4) |
| ILS GP 25 | — | 333.35 | H24 | 3° glidepath |
| ILS DME 25 | — | CH54Y | H24 | |
| RWY 20 | — | — | — | **No ILS/no instrument approach** — PAPI 3.4°/5.9% only |

*Source: SIA France eAIP, AD 2 LFPO.19, AIRAC cycle effective 11 Jun 2026 (retrieved 2026-07-26). ILS sub-category (IIIA/IIIB/IIIC) not confirmed from a primary table this pass — flagged §18.*

---

## 10. Arrival

- **Transition altitude / level:** Commonly reported as 5,000 ft nationwide for France; not independently confirmed for LFPO in the reachable AIP extract this pass — verify current chart. 🟧
- **Speed:** Standard 250 KIAS below FL100 (EU/ICAO norm) — confirm no local override on current chart.
- **Preferential runway logic:** Wind/traffic/noise-dependent. RWY 06/24 and 07/25 are the primary CAT III-equipped pair; RWY 02/20 serves as the secondary/crosswind runway with reduced capability (CAT I on 02 only, visual-only on 20). Exact preferential-runway rule not confirmed this pass. 🟧
- **Approaches (names only — verify minima on current AIRAC charts):**

| RWY | Approach | IAF | FAF/FAP alt | Notes |
|---|---|---|---|---|
| 02 | ILS (OLN) | Not confirmed 🟧 | Not confirmed 🟧 | CAT I only |
| 06 | ILS (ORE) | Not confirmed 🟧 | Not confirmed 🟧 | CAT III |
| 07 | ILS (OLE) | Not confirmed 🟧 | Not confirmed 🟧 | CAT III |
| 20 | Visual / PAPI only | — | — | No instrument approach published |
| 24 | ILS (OLO) | Not confirmed 🟧 | Not confirmed 🟧 | CAT III |
| 25 | ILS (OLW) | Not confirmed 🟧 | Not confirmed 🟧 | CAT III; displaced threshold 435 m |

- **STARs (names only):** Not confirmed in reachable research pass — pull the current-AIRAC STAR list at planning. 🟧
- **LVP:** Triggers at **ceiling ≤ 200 ft or RVR ≤ 600 m** `[AIP France AD 2 LFPO.20.4.1]`. Not available on RWY 20 (no instrument approach) and limited to CAT I on RWY 02.
- **Missed approach watch-items:** Terrain is not the driver (flat basin); the operative missed-approach concern is re-sequencing into the dense, shared multi-airport Paris CTR.

---

## 11. Departure

- **SIDs (names only — fly the charted version):** Not confirmed in reachable research pass — pull the current-AIRAC SID list at planning. 🟧
- **RNP / climb-gradient requirements:** Not confirmed in reachable sources this pass — verify per-SID gradient/equipage on the current chart. See [`OM E — PBN and RNP Operations`](../../../../../flight-ops/pbn-and-rnp-operations.md). 🟧
- **Take-off minima:** Published per AIP; exact figures not confirmed this pass. 🟧 **RWY 02 — IFR take-off prohibited** regardless of minima.
- **Start-up / push-back:** Confirm cross-bleed/APU notification procedure locally; code-letter E crews (A340-600/B777-300/A350-1000 class) are advised to taxi with over-steering technique in curves per the AIP. 🟧
- **ATC slot / CTOT & clearance:** **IATA Level 3 slot-coordinated** (coordinator **COHOR**); runway capacity is additionally managed by a **rolling-hour movement cap** (a maximum number of movements per rolling 60-minute window, stepped in 10-minute increments) that varies by season and construction period — pull the current COHOR coordination parameters at planning. 🟧
- **De-icing:** Provided (AIP confirms "assuré"); 4 handling teams and 20 de-icing vehicles reported; fluids include potassium formate (KFOR), sodium formate (NAFO) and Propylene Glycol Type 1/4. See [`OM E — Cold Weather Operations`](../../../../../flight-ops/cold-weather-operations.md).

---

## 12. Noise & Environmental

- **Noise abatement (NAP):** Not confirmed in reachable sources beyond the curfew/movement-cap regime itself this pass — verify locally. 🟧
- **Night noise / dB limits:** Governed primarily through the **hard curfew (23:30–06:00)** and the **250,000 movements/year** regulatory ceiling (in force since 1994) rather than a published per-movement dB limit. **From 25 October 2026**, a further tightening applies: a **partial curfew from 22:00** restricting the noisiest aircraft types, the curfew reference point changing from take-off time (23:30) to off-block/parking-position departure time (23:15), and exemptions narrowed strictly to security/safety/public-order cases. 🟥
- **Engine run-up restrictions:** Not confirmed in reachable sources — verify locally. 🟧
- **Reverse thrust / idle-reverse policy:** Not confirmed in reachable sources — verify locally. 🟧

---

## 13. Ground operations

- **Stands for our types:** Historically, widebody-capable jetway stands are concentrated in the **Orly 1/2 (former West) terminal** (23 jetway-equipped stands, several widebody-capable) and **Orly 4 (former South) terminal** (15 jetway-equipped stands, some widebody-capable); Orly 3 is the newer junction building between them. Current-day gate/pier assignment not independently confirmed. 🟧 | 🟧
- **Push-back:** Confirm mandatory-vs-self-manoeuvre policy for Code E stands locally; over-steering technique recommended in curves for Code E aircraft (A340-600/B777-300/A350-1000 class) per the AIP.
- **Standard taxi routes:** Confirm with Ground/Approach on the day; A380/B747-8 movements are restricted to specific GMC-chart-published routings, with weight limits of 398 t (unrestricted routing) or 600 t (dedicated routing) and a mandatory follow-me car for A380.
- **Hot spots / tight taxiways:** 🟥 The **RWY 02/20 × 07/25 intersection** carries an AIP-flagged pavement-geometry anomaly (curvature radius and inter-curve spacing below international recommended values); several high-speed exit taxiways (W35, W43–W46) serve the main runway pair with runway-specific speed limits (30–50 kt depending on surface condition); vehicle crossing points near W1/W2 in the North Industrial Apron (ZIN) carry published minimum-clearance distances from parked-aircraft tails.
- **Follow-me:** Available; **mandatory for all A380 taxi/towing movements** per the AIP; general availability for other types not confirmed. 🟧

---

## 14. Weather & seasonal (durable)

- **Climate / prevailing wind:** Temperate Paris-basin climate, broadly similar to the wider Île-de-France region; no LFPO-specific prevailing-wind statistic confirmed this pass. 🟧
- **Seasonal hazards:** Winter Paris-basin radiation/fog events are the region's standing low-visibility hazard, mitigated by CAT III infrastructure on RWY 06/24/07/25 (not available on 02/20). No LFPO-specific seasonal frequency statistic found — treat as general regional climatology pending confirmation. 🟧
- **Local effects:** Flat inland field — no notable terrain/sea-breeze local effects.

> **Live weather — pull at planning (T-2h):** METAR, TAF, TREND, SIGMET/AIRMET. Not stored here.

---

## 15. NOTAMs

> **Pull at planning (T-2h).** Perishable — not stored here. Check: runway/taxiway closures (esp. the RWY 02/20 × 07/25 intersection and high-speed exits), navaid U/S, CAT III equipment status, lighting, obstacle/crane, RFF downgrade, current AUP/UUP or RAD constraints in the Paris CTR/TMA, GPS/RAIM for RNP procedures, current COHOR coordination parameters. Source: official AIS / OFP NOTAM block.

---

## 16. Fuel & alternate planning notes

- **Typical role for us:** 🟧 Not determinable from VAMSYS (no entry for this field — see §18). LFPO is a genuine major Paris-basin gateway and, in the real-world network, the most natural geographic alternate/diversion field for Charles de Gaulle operations — see the [LFPG Briefing](../lfpg/index.md) for the reciprocal relationship. Do not assume any specific role without dispatch confirmation.
- **Nearest suitable alternates:** 🟧 **Not published / verify — no VAMSYS entry for this field; do not assume a list.** Geographically, LFPG is the nearest major Paris-basin field — confirm actual company alternate policy, runway/RFF adequacy and current minima via dispatch procedure before relying on it.
- **Fuel-uplift notes:** Jet A-1 only, **published 0500–2230 local** — not provided 2230–0500 except by special arrangement with local suppliers; this sits close against the curfew boundary (23:30–06:00) and is a genuine planning consideration for late-evening turns. See [`OM E — Fuel Policy`](../../../../../flight-ops/fuel-policy.md). 🟧
- **Range/perf flags for our fleet:** Field length/strength non-limiting on the main runway pair (3,650 m / 3,320 m) for any K Global type. See [`OM B — Fleet Capability Matrix`](../../../../../fleet/capability-matrix.md) for type-by-type range/performance reference.

---

## 17. Fleet-specific notes (optional)

- No K Global fleet type has a confirmed field-length or field-elevation performance penalty at LFPO. The one type-relevant consideration is the AIP's **A380/B747-8 diversion/official-reception-only restriction** (tied to RFF CAT 9 and taxiway/bridge weight limits) — relevant only if the operative fleet includes an aircraft of that size class. See [`OM B — Fleet Capability Matrix`](../../../../../fleet/capability-matrix.md).

---

## 18. Open items (🟧 — confirm against AIP / current AIRAC)

- **LFPO is not in the VAMSYS airport database** — K Global category, base flag, taxi-in/taxi-out times and company preferred alternates are all unconfirmed and must not be assumed; treat every VAMSYS-style field in this pack as open until a live mirror exists.
- **No dedicated Paris (LFFF) FIR brief exists yet** in OM C Airspace — this pack links to the general Europe area brief as an interim pointer only.
- **Transition altitude** — commonly reported as 5,000 ft nationwide for France; not independently confirmed for LFPO from the reachable AIP extract this pass.
- **Preferential-runway logic and SID/STAR names** — not obtained in this research pass; pull the live current-AIRAC procedure list before use.
- **ILS sub-category (IIIA/IIIB/IIIC)** on RWY 06/24/07/25 — not confirmed from a primary AIP table this pass.
- **Noise-abatement departure procedure (NAP) detail, engine run-up restrictions and reverse-thrust policy** — none confirmed in reachable sources.
- **Current AD operating/coordinated hours** — sourced to COHOR's published S26/W26 season parameters; reconfirm each season as these are periodically revised (also watch for runway-works temporary parameters).
- **The 25 October 2026 curfew tightening** (partial 22:00 ban, off-block reference time, narrowed exemptions) is confirmed from secondary reporting on the government announcement (10 Jul 2025) but not yet cross-checked against a primary regulatory text — reconfirm once the measure is in force.
- **Terminal/gate assignment for widebody long-haul traffic** — Orly 1/2/3/4 single-terminal structure confirmed from public sources; exact current-day widebody gate map not independently confirmed.
- **Apron stand count and total widebody capacity** — not obtained from a primary or authoritative aggregate figure this pass.
- **Ground handling agent(s) contracted for our operation** — not confirmed; several third-party handlers are named in the AIP handling-services register but no VAMSYS-mirrored assignment exists.
- **Preferred alternates for this field** — no VAMSYS entry; do not substitute an assumed list.

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim material (current-AIRAC charts) informs content but is not listed here.*

- **SIA France eAIP (Service de l'Information Aéronautique), AD 2 LFPO.1–2.23**, AIRAC cycle effective 11 Jun 2026, package dated 09 Jul 2026 — ARP/elevation/mag-var, runway geometry/declared distances/PCN, ILS idents/frequencies/categories, ATC frequencies, RFF category, LVP triggers, ground-movement/A380 restrictions — https://www.sia.aviation-civile.gouv.fr/media/dvd/eAIP_09_JUL_2026/FRANCE/AIRAC-2026-07-09/html/eAIP/FR-AD-2.LFPO-fr-FR.html (retrieved 2026-07-26).
- OurAirports — https://ourairports.com/airports/LFPO/ and /runways.html and /frequencies.html (retrieved 2026-07-26). *ARP/elevation/runway/frequency cross-check; displaced-threshold figures independently corroborate the AIP.*
- COHOR (French slot coordinator) — Paris Orly Airport (ORY/LFPO) — https://www.cohor.org/en/airports/paris-orly-airport-ory-lfpo/ (retrieved 2026-07-26). *IATA Level 3 status, coordinated opening times, runway-capacity rolling-hour constraint, regulatory decree register (1968 curfew decree, 1994 slot/movement-cap decree, 2022 coordination-status decree).*
- Aviation Week — "France Imposes Stricter Night Curfew To Curb Paris Orly Airport Noise," 2025-07-10 — https://aviationweek.com/air-transport/airports-networks/france-imposes-stricter-night-curfew-curb-paris-orly-airport-noise (retrieved 2026-07-26). *2026 curfew-tightening announcement (subscription-gated; summary only).*
- FL360aero — "Stricter curfew introduced to reduce noise pollution at Orly Airport," 2025-07-11 — https://fl360aero.com/detail/stricter-curfew-introduced-to-reduce-noise-pollution-at-orly-airport-residents-expected-more/2142 (retrieved 2026-07-26). *Detail on the 23:30–06:00 curfew, 250,000 movements/year cap since 1994, and the 25 Oct 2026 tightening (22:00 partial ban, 23:15 off-block reference, narrowed exemptions).*
- Wikipedia — "Orly Airport" — https://en.wikipedia.org/wiki/Orly_Airport (retrieved 2026-07-26). *Terminal structure/history corroboration.*
- Aviation24.be — "It's no longer Paris Orly-South or Orly-West, it's now Orly 1-2-3-4 single terminal" — https://www.aviation24.be/airports/paris-orly-ory/its-no-longer-paris-orly-south-or-orly-west-its-now-orly-1-2-3-4-single-terminal/ (retrieved 2026-07-26). *Terminal-renaming corroboration (2019).*

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-26 | Built from SIA France eAIP; K Global fields from live VAMSYS; 4-page pack. |
