# DNBE — Benin · Airport Briefing

**DNBE / BNI** · Benin City, Edo State, Nigeria · Africa
**Version** v0.1 · **Updated** 2026-07-26 · **Status** Draft — provisional, tier-4-derived (AIP Nigeria AD 2 not reachable this pass)

> **Read-me:** Planning aid for the sim, not a chart. Static data is drawn from public tier-4 sources (SkyVector, OurAirports, Wikipedia) cross-checked against each other — the AIP Nigeria (NCAA/NAMA) AD 2 entry for DNBE was not reachable in this research pass; approaches/SIDs/STARs are listed **by name only or flagged not-yet-confirmed** — fly the charted current-AIRAC version. Live weather/NOTAMs are pulled at planning (§14/§15). Open 🟧 items are listed in §18. Flag legend 🟥 restriction/hazard · 🟧 caution/unverified · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| ARP (lat/long) | N6°19.00′ / E5°35.93′ (≈6.3167, 5.5989) `[SkyVector]` — matches OurAirports/Wikipedia |
| Field elevation | **259 ft** `[SkyVector, threshold 23]` — OurAirports/Wikipedia agree (259 ft / 79 m); given anchor ~258 ft — consistent |
| Mag variation | Not published / verify 🟧 — no AIP-sourced figure obtained this pass |
| Time zone | UTC+1 (WAT — no DST observed) |
| Runway(s) | **05/23**, 2,400 × 45 m (7,874 × 148 ft), paved/asphalt, lighted `[SkyVector/OurAirports]` |
| Preferential runway | Not published / verify 🟧 |
| Longest LDA | Not separately published — treat as ≤2,400 m pending declared-distance confirmation 🟧 |
| Approaches | Not published / verify — no ILS/RNP identified in reachable sources 🟧 |
| RFF category | Not published / verify 🟧 |
| Control type | Procedural/non-radar expected for a regional Nigerian field — not independently confirmed 🟧 |
| Elevation class | Near sea-level (259 ft) — **not** hot-and-high |
| Special-airport status | 🟥 **Runway sits within the built-up area of Benin City** — see §3.5/§5 |
| Customs / PoE | Not identified as a designated Port of Entry in reachable sources — treat as domestic-only pending confirmation 🟧 |
| K Global category | **Not categorised in VAMSYS** 🟧 |
| K Global base | **No** `[VAMSYS mirror 2026-07-26]` |
| Company preferred alternates | **DNMM (Lagos), DNAA (Abuja), DBBB (Cotonou)** — cross-border/unbuilt, plain-text only |
| Taxi-in / taxi-out (VAMSYS) | **Not set** 🟧 |

---

## 2. Validation summary

| Domain | Flag | Note |
|---|---|---|
| Terrain / CFIT | 🟩 | Flat southern-Nigeria plateau/lowland; no close-in high terrain. |
| Runway length vs fleet perf | 🟧 | 2,400 m is adequate for regional narrowbody ops but is the shortest-runway margin of the four fields in this build — confirm against actual weight/temperature performance for any wider-body consideration. |
| Approach availability / minima | 🟧 | No ILS/RNP procedure identified in reachable sources — likely NDB/VOR non-precision only; confirm current AIRAC. |
| Airspace / traffic / control | 🟧 | Kano FIR (DNKK/NAMA); control type at the field not confirmed. |
| Weather / seasonal hazard | 🟧 | ITCZ rainy-season convection (roughly Apr–Oct) and harmattan dust (Nov–Mar, lighter than the far north) — see §14. |
| Curfew / slots / hours | 🟧 | AD operating hours / ATS hours not confirmed. |
| RFF category vs our types | 🟧 | Not published / verify. |
| Fuel availability | 🟧 | Not confirmed in reachable sources. |
| Customs / handling / security | 🟧 | Not identified as a Port of Entry — treat as domestic-only until confirmed otherwise. |

---

## 3. Threat & Error Management (TEM)

### 3.1 CFIT / Terrain 🟩
DNBE sits at 259 ft AMSL on the flat southern-Nigeria plateau near Benin City. No close-in high terrain is relevant to arrival, departure or missed-approach paths — not a CFIT-driver field.

### 3.2 Airborne conflict / traffic 🟧
Regional single-runway field under **Kano ACC (DNKK)** — see the [Kano (DNKK) FIR brief](../../../../airspace/fir/africa/kano-dnkk.md) and the [Africa airspace brief](../../../../airspace/africa.md). Traffic density is low (domestic-only service to Abuja/Lagos/Port Harcourt); control type at the field not independently confirmed — brief non-radar procedures as the conservative default.

### 3.3 Runway excursion 🟧
No displaced thresholds identified in the reachable extract. Runway is comparatively short (2,400 m) relative to the other three fields in this build — confirm actual weight-limited landing distance for the planned type/conditions rather than assuming margin.

### 3.4 Weather threat 🟧
Southern-Nigeria climate: **ITCZ convective/rainy season (roughly Apr–Oct)** brings heavy rain and reduced visibility in showers; **harmattan dust (Nov–Mar)** affects this belt more lightly than the northern interior. See §14.

### 3.5 Operational considerations 🟥
The runway **sits within the built-up area of Benin City itself**, close to the city centre (approx. 7 km/4.3 mi from the centre per public reporting) — an urban-proximity field with likely close-in obstacles (buildings, towers) and heightened noise sensitivity. No specific obstacle survey was found in reachable sources; treat this as the field's defining planning caution until a chart/AIP obstacle picture is obtained.

---

## 4. Cautions & Warnings

- **Urban/close-in field** — the runway lies within Benin City's built-up area; expect close-in obstacles and noise sensitivity even though no specific obstacle chart data was obtained this pass.
- **Shortest runway of the four fields in this build (2,400 m)** — confirm actual performance margin rather than assuming ample length.
- **No ILS/RNP procedure identified** — treat this as a visual/non-precision-only field pending AIP confirmation.
- No confirmed navaid outage/obstacle history found — pull current NOTAMs at planning (§15).

---

## 5. Aerodrome category, restrictions & crew qualification

- **Special-airport / category:** Not operator-categorised in reachable sources; **not categorised in VAMSYS**. The urban/close-in runway location (§3.5) is the standing crew-briefing item. 🟧
- **Crew-qualification gate:** None identified — standard-field assumption pending confirmation.
- **Operating restrictions / bans:** None identified in reachable sources — not confirmed as absent. 🟧
- **Overflight / entry / permits:** Standard Nigerian domestic entry; no international service or Port-of-Entry designation identified for this field. 🟧
- **Operations notes:** Owner/operator — **Federal Airports Authority of Nigeria (FAAN)**. ANSP/ATS provider not independently confirmed (assume NAMA under Kano FIR).

---

## 6. General / hours / services

| Item | Value | Flag |
|---|---|---|
| ATS hours | Not published / verify | 🟧 |
| AD operating hours | Not published / verify | 🟧 |
| Night / curfew restrictions | Not published / verify | 🟧 |
| RFF category | Not published / verify | 🟧 |
| Fuel | Not published / verify | 🟧 |
| PCN | Not published / verify | 🟧 |
| Customs | Not identified as a Port of Entry | 🟧 |
| Handling / FBO | Not published / verify | 🟧 |

---

## 7. Runways & declared distances

| RWY | Dimensions | Surface / PCN | TORA | TODA | ASDA | LDA | Notes |
|---|---|---|---|---|---|---|---|
| 05 | 2,400 × 45 m (7,874 × 148 ft) | Paved (asphalt), lighted; PCN not published 🟧 | Not published 🟧 | Not published 🟧 | Not published 🟧 | Not published 🟧 | THR elevation 236 ft; heading 049° |
| 23 | 2,400 × 45 m (7,874 × 148 ft) | Paved (asphalt), lighted; PCN not published 🟧 | Not published 🟧 | Not published 🟧 | Not published 🟧 | Not published 🟧 | THR elevation 259 ft; heading 229° |

*Source: SkyVector (retrieved 2026-07-26), cross-checked against OurAirports (2,399 m consistent). Note: Wikipedia's "Benin Airport" article states 2,451 m — this figure matches Margaret Ekpo/Calabar's (DNCA) published length and is judged a copy/template error; SkyVector + OurAirports (independently agreeing at ~2,400 m) are treated as the working figure pending AIP confirmation. No declared-distance (TORA/TODA/ASDA/LDA) table found in reachable sources.*

---

## 8. Communications

| Service | Callsign | Frequency | Hours | Notes |
|---|---|---|---|---|
| ATIS | Not published / verify | — | — | 🟧 |
| Delivery | Not published / verify | — | — | 🟧 |
| Ground | Not published / verify | — | — | 🟧 |
| Tower | Benin Tower | 122.50 | Not published 🟧 | `[SkyVector, OurAirports]` |
| Approach | Not published / verify | — | — | 🟧 |
| Centre / FIR | Kano ACC (DNKK) | Per current AIRAC | H24 (assumed) | See [Kano (DNKK) FIR brief](../../../../airspace/fir/africa/kano-dnkk.md) |

---

## 9. Navaids

| Aid | Ident | Freq | Hours | Notes |
|---|---|---|---|---|
| VOR | BEN (Benin) | 116.50 | Not published 🟧 | ~3.1 NM from field per SkyVector — proximity suggests on/near-field siting, not independently confirmed |
| NDB | None identified on field | — | — | Nearest NDB (OS/Osubi) is ~44 NM away — not a field aid |
| ILS | Not identified | — | — | No ILS found in reachable sources 🟧 |

---

## 10. Arrival

- **Transition altitude / level:** Not published / verify. 🟧
- **Speed:** Standard 250 KIAS below FL100 (ICAO norm) — confirm no local override.
- **Preferential runway logic:** Not published / verify. 🟧
- **Approaches (names only — verify minima on current AIRAC charts):**

| RWY | Approach | IAF | FAF/FAP alt | Notes |
|---|---|---|---|---|
| 05/23 | Not published / verify | Not published | Not published | No ILS/RNP identified — likely VOR/NDB non-precision or visual; verify current AIRAC 🟧 |

- **STARs (names only):** Not published / verify. 🟧
- **LVP:** Not published / verify. 🟧
- **Missed approach watch-items:** Flat terrain — not a driver; urban obstacle environment (§3.5) is the relevant caution on any low-level go-around.

---

## 11. Departure

- **SIDs (names only — fly the charted version):** Not published / verify. 🟧
- **RNP / climb-gradient requirements:** Not published / verify. See [`OM E — PBN and RNP Operations`](../../../../../flight-ops/pbn-and-rnp-operations.md). 🟧
- **Take-off minima:** Not published / verify. 🟧
- **Start-up / push-back:** Not published / verify. 🟧
- **ATC slot / CTOT & clearance:** No slot/CTOT regime identified for this field class.
- **De-icing:** NIL — not a factor at this near-equatorial field.

---

## 12. Noise & Environmental

- **Noise abatement (NAP):** Not published / verify — the urban/close-in runway location (§3.5) makes noise sensitivity plausible even without a published NAP. 🟧
- **Night noise / dB limits:** Not published / verify. 🟧
- **Engine run-up restrictions:** Not published / verify. 🟧
- **Reverse thrust / idle-reverse policy:** Not published / verify. 🟧

---

## 13. Ground operations

- **Stands for our types:** Not published / verify — terminal described as "modern" with duty-free/restaurant/car-rental facilities, capacity cited at ~500 pax/hour (operator/tier-4 source); stand count/dimensions not confirmed. 🟧
- **Push-back:** Not published / verify. 🟧
- **Standard taxi routes:** Not published / verify. 🟧
- **Hot spots / tight taxiways:** Not published / verify. 🟧
- **Follow-me:** Not published / verify. 🟧

---

## 14. Weather & seasonal (durable)

- **Climate / prevailing wind:** Southern-Nigeria tropical climate; flat plateau/lowland terrain around Benin City.
- **Seasonal hazards:** **ITCZ convective/rainy season (roughly Apr–Oct)** — heavy rain, embedded/towering CB; **harmattan dust (Nov–Mar)** — lighter than the northern interior but can still reduce visibility. See the [Africa airspace brief](../../../../airspace/africa.md) §11.
- **Local effects:** None specifically identified beyond the general regional pattern.

> **Live weather — pull at planning (T-2h):** METAR, TAF, TREND, SIGMET/AIRMET. Not stored here.

---

## 15. NOTAMs

> **Pull at planning (T-2h).** Perishable — not stored here. Check: runway/taxiway closures, navaid U/S, lighting, obstacle/crane (urban surroundings, §3.5), RFF downgrade, GPS/RAIM, conflict-zone bulletins. Source: AIS / OFP NOTAM block.

---

## 16. Fuel & alternate planning notes

- **Typical role for us:** Not yet defined — not categorised in VAMSYS; candidate regional destination pending network integration. 🟧
- **Nearest suitable alternates:** **DNMM** (Lagos, Nigeria), **DNAA** (Abuja, Nigeria), **DBBB** (Cotonou, Benin) `[VAMSYS mirror 2026-07-26]` — DNMM/DNAA not yet built as OM C folder packs and DBBB is cross-border; plain-ICAO reference only. Confirm suitability, runway/RFF adequacy, overflight-permit lead-time (DBBB) and current minima per leg.
- **Fuel-uplift notes:** Not published / verify. 🟧 See [`OM E — Fuel Policy`](../../../../../flight-ops/fuel-policy.md).
- **Range/perf flags for our fleet:** 2,400 m is the shortest runway of the four fields in this build — see [`OM E — Short and Limited Runway Operations`](../../../../../flight-ops/short-and-limited-runway-operations.md) and [`OM B — Fleet Capability Matrix`](../../../../../fleet/capability-matrix.md) before committing a type. 🟧

---

## 17. Fleet-specific notes (optional)

- Confirm actual weight-limited landing/take-off distance against the 2,400 m runway for the planned type — see [`OM E — Short and Limited Runway Operations`](../../../../../flight-ops/short-and-limited-runway-operations.md) and [`OM B — Fleet Capability Matrix`](../../../../../fleet/capability-matrix.md).

---

## 18. Open items (🟧 — confirm against AIP / current AIRAC)

- **AIP Nigeria (NCAA/NAMA) AD 2 for DNBE not reached this pass** — all figures below are tier-4-sourced; re-verify against the primary AIP at next update.
- **Runway length discrepancy** — SkyVector/OurAirports agree at ~2,400 m; Wikipedia states 2,451 m (likely a template/copy error shared with DNCA's page) — resolve against AIP.
- **Urban obstacle environment** — no specific obstacle chart/survey obtained; the runway's in-city location is a standing caution pending chart data.
- **Declared distances (TORA/TODA/ASDA/LDA), PCN, mag variation, ATS/AD hours, curfew, fuel, RFF category, stand count, taxi routing, hot spots, SIDs/STARs/approaches, take-off minima, NAP** — none confirmed in reachable sources.
- **Port-of-Entry status** — not identified as international/PoE; treat as domestic-only pending confirmation.
- **VATSIM cross-check** — no VATSIM Nigeria vACC/division airport SOP found for DNBE this pass.

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim material may inform content but is not listed here.*

- SkyVector — DNBE / Benin Airport — https://skyvector.com/airport/DNBE/Benin-Airport (retrieved 2026-07-26). *ARP, elevation, runway dimensions/headings, navaids, ATC frequencies.*
- OurAirports — https://ourairports.com/airports/DNBE/ and /runways.html and /frequencies.html (retrieved 2026-07-26). *Cross-check ARP/elevation/runway.*
- Wikipedia — "Benin Airport" — https://en.wikipedia.org/wiki/Benin_Airport (retrieved 2026-07-26). *History, terminal, in-city location, ownership (FAAN), airline service.*

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-26 | Built from AIP Nigeria (NCAA); K Global fields from live VAMSYS; 4-page pack. |
